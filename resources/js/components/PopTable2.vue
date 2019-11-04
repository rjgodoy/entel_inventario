<template>
    <div class="section container">
        <div class="box m-form">
            <label class="label">Search Person Name</label>
            <div class="control is-grouped">
                <p class="control is-expanded">
                    <input class="input" v-model="searchItem" @keyup="searchInTheList(searchItem)" type="text" placeholder="Find a person">
                    <span class="help is-dark"><strong>{{filteredItems.length | numeral('0,0')}}</strong> of {{items.length | numeral('0,0')}} person found</span>
                </p>
                <p class="control">
                    <a class="button is-info" @click="clearSearchItem" :class="{'is-disabled': searchItem==''}">
                        Clear
                    </a>
                </p>
            </div>
        </div>
        <div class="box m-tags">
            <span><strong>{{selectedItems.length}}</strong> person selected</span>
            <div class="m-tags-items">
                <a v-for="item in selectedItems" @click="removeSelectedItem(item)" class="tag is-dark is-small">
                    {{item.nombre}}
                    <button class="delete is-small"></button>
                </a>
            </div>
        </div>
        <nav class="pagination m-pagination">
            <a class="button" @click="selectPage(this.pagination.currentPage-1)" :class="{'is-disabled': this.pagination.currentPage==this.pagination.items[0] || this.pagination.items.length==0}">Previous</a>
            <a class="button" @click="selectPage(this.pagination.currentPage+1)" :class="{'is-disabled': this.pagination.currentPage==this.pagination.items[this.pagination.items.length-1] || this.pagination.items.length==0}">Next page</a>
            <ul>
                <li>
                    <a class="button" @click="selectPage(pagination.items[0])" :class="{'is-disabled': this.pagination.currentPage==this.pagination.items[0] || this.pagination.items.length==0}">
                        First
                    </a>
                </li>
                <li class="is-space"></li>
                <li v-for="item in pagination.filteredItems">
                    <a class="button" @click="selectPage(item)" :class="{'is-info': item == pagination.currentPage}">{{item | numeral('0,0')}}</a>
                </li>
                <li class="is-space"></li>
                <li>
                    <a class="button" @click="selectPage(pagination.items[pagination.items.length-1])" :class="{'is-disabled': this.pagination.currentPage==this.pagination.items[this.pagination.items.length-1] || this.pagination.items.length==0}">
                        Last
                    </a>
                </li>
            </ul>
        </nav>
        <div class="m-table">
            <table class="table is-bordered is-striped is-narrow">
                <tr>
                    <th class="m-table-index">#</th>
                    <th>Nombre</th>
                    <th>Cod fijo</th>
                    <th>Dirección</th>
                    <th>Phone</th>
                    <th></th>
                </tr>
                <tr v-for="item in paginatedItems">
                    <td>{{item.id}}</td>
                    <td>{{item.nombre}}</td>
                    <td>{{item.cod_fijo}}</td>
                    <td>{{item.direccion}}</td>
                    <td>{{item.phone}}</td>
                    <td><a class="button is-info is-outlined" @click="selectItem(item)">Select</a></td>
                </tr>
            </table>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                pops: [],
                items: [],
                searchItem: '',
                filteredItems: [],
                paginatedItems: [],
                selectedItems: [],
                pagination: {
                    range: 5,
                    currentPage: 1,
                    itemPerPage: 10,
                    items: [],
                    filteredItems: [],
                }
            }
        },
        created() {
            this.getPops()
        },
        methods: {
            clearSearchItem(){
                this.searchItem = undefined
                this.searchInTheList('')
            },
            searchInTheList(searchText, currentPage){
                if(_.isUndefined(searchText)){
                    this.filteredItems = _.filter(this.items, function(v, k){
                        return !v.selected
                    })
                }
                else{
                    this.filteredItems = _.filter(this.items, function(v, k){
                        return !v.selected && v.nombre.toLowerCase().indexOf(searchText.toLowerCase()) > -1
                    })
                }
                this.filteredItems.forEach(function(v, k){
                    v.id = k+1
                })  
                this.buildPagination()

                if(_.isUndefined(currentPage)){
                    this.selectPage(1) 
                }
                else{
                    this.selectPage(currentPage)
                }
            },
            buildPagination(){
                let numberOfPage = Math.ceil(this.filteredItems.length/this.pagination.itemPerPage)
                this.pagination.items = []
                for(var i=0; i<numberOfPage; i++){
                    this.pagination.items.push(i+1)
                }
            },
            selectPage(item) {
                this.pagination.currentPage = item

                let start = 0
                let end = 0
                if(this.pagination.currentPage < this.pagination.range-2){
                    start = 1
                    end = start+this.pagination.range-1
                }
                else if(this.pagination.currentPage <= this.pagination.items.length && this.pagination.currentPage > this.pagination.items.length - this.pagination.range + 2){
                    start = this.pagination.items.length-this.pagination.range+1
                    end = this.pagination.items.length
                }
                else{
                    start = this.pagination.currentPage-2
                    end = this.pagination.currentPage+2
                }
                if(start<1){
                    start = 1
                }
                if(end>this.pagination.items.length){
                    end = this.pagination.items.length
                }

                this.pagination.filteredItems = []
                for(var i=start; i<=end; i++){
                    this.pagination.filteredItems.push(i);
                }

                this.paginatedItems = this.filteredItems.filter((v, k) => {
                    return Math.ceil((k+1) / this.pagination.itemPerPage) == this.pagination.currentPage
                })
            },
            selectItem(item){
                item.selected = true
                this.selectedItems.push(item)
                this.searchInTheList(this.searchItem, this.pagination.currentPage)
            },    
            removeSelectedItem(item){
                item.selected = false
                this.selectedItems.$remove(item)
                this.searchInTheList(this.searchItem, this.pagination.currentPage)
            },

            getPops() {
                axios.get(`api/pops`)
                    .then((response) => {
                        this.items = response.data.data
                        // this.pops.forEach(this.insertItems)

                        this.filteredItems = this.items
                        this.buildPagination()
                        this.selectPage(1)

                    })
                    .catch(() => {
                        console.log('handle server error from here');
                    });
            },
            // insertItems(item, index) {
            //     this.items.push({
            //         id: item.id,
            //         cod_movil: item.cod_movil,
            //         nombre: item.nombre,
            //         cod_fijo: item.cod_fijo,
            //         direccion: item.direccion,
            //         phone: 'hello',
            //         selected: false
            //     })
            // }
        }    
    }
</script>
