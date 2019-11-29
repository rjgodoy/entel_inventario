<template>
    <div class="">

        <section class="section is-marginless" :class="bodyBackground">
            <div class="box">
                <div class="tile is-ancestor">

                    <div class="tile is-parent is-vertical">
                        <div class="tile">
                            <div class="tile is-parent">
                                <div class="tile is-child is-4" :class="boxBackground">
                                    <p class="title is-size-5">SGC</p>
                                    <p class="subtitle">What is up?</p>
                                </div>
                                <div class="tile is-child" :class="boxBackground">
                                    <p class="title is-size-5">Inventario</p>
                                    <p class="subtitle">What is up?</p>
                                </div>
                            </div>
                        </div>
                        <div class="tile">
                            <div class="tile is-parent">
                                <div class="tile is-child is-4 box" :class="boxBackground">
                                    <table class="table is-fullwidth" :class="boxBackground">
                                        <thead>
                                            <tr>
                                                <th class="is-size-7 has-text-weight-semibold" :class="secondaryText"><abbr title="Id">Id</abbr></th>
                                                <th class="is-size-7 has-text-weight-semibold" :class="secondaryText"><abbr title="Pop">POP</abbr></th>
                                                <th class="is-size-7 has-text-weight-semibold has-text-centered"></th>
                                            </tr>
                                        </thead>
                                        
                                        <tbody>
                                            <tr class="is-size-7 has-text-weight-light" v-for="pop in popsToAdd.data">
                                                <td class="has-text-weight-light" :class="primaryText">{{ pop.id }}</td>
                                                <td class="">
                                                    <div class="is-size-7 has-text-weight-semibold" :class="secondaryText">{{ pop ? pop.nem_movil : '' }}</div>
                                                    <div class="is-size-7 has-text-weight-normal" :class="primaryText">{{ pop ? pop.nombre : '' }}</div>
                                                    <div class="is-size-7 has-text-weight-normal" :class="secondaryText">{{ pop ? pop.direccion : '' }}</div>
                                                    <div class="is-size-7 has-text-weight-normal" :class="secondaryText">{{ pop ? pop.nombre_comuna : '' }}</div>
                                                </td>

                                                <td class="has-text-weight-light has-text-centered" :class="primaryText">
                                                    <a 
                                                        class="button is-link is-outlined is-small has-tooltip-right"
                                                        @click="addPop(pop)"
                                                        data-tooltip="Agregar"
                                                        >
                                                        <font-awesome-icon icon="arrow-right"/>
                                                    </a>
                                                </td>

                                            </tr>    
                                        </tbody>
                                    </table>
                                
                                    <nav class="pagination" role="navigation" aria-label="pagination">
                                        <vue-pagination  
                                            :pagination="popsToAdd"
                                            @paginate="getPopsToAdd()"
                                            :offset="4"
                                            :primaryText="primaryText">
                                        </vue-pagination>
                                    </nav>
                                </div>

                                <div class="tile is-child box" :class="boxBackground">
                                    <table class="table is-fullwidth" :class="boxBackground">
                                        <thead>
                                            <tr>
                                                <th class="is-size-7 has-text-weight-semibold" :class="secondaryText"><abbr title="Id">Id</abbr></th>
                                                <th class="is-size-7 has-text-weight-semibold" :class="secondaryText"><abbr title="Pop">POP</abbr></th>
                                                <th class="is-size-7 has-text-weight-semibold has-text-centered"></th>
                                            </tr>
                                        </thead>
                                        
                                        <tbody>
                                            <tr class="is-size-7 has-text-weight-light" v-for="pop in selectedPops">
                                                <td class="has-text-weight-light" :class="primaryText">{{ pop.id }}</td>
                                                <td class="">
                                                    <div class="is-size-7 has-text-weight-semibold" :class="secondaryText">{{ pop ? pop.nem_movil : '' }}</div>
                                                    <div class="is-size-7 has-text-weight-normal" :class="primaryText">{{ pop ? pop.nombre : '' }}</div>
                                                    <div class="is-size-7 has-text-weight-normal" :class="secondaryText">{{ pop ? pop.direccion : '' }}</div>
                                                    <div class="is-size-7 has-text-weight-normal" :class="secondaryText">{{ pop ? pop.nombre_comuna : '' }}</div>
                                                </td>

                                                <td class="has-text-weight-light has-text-centered" :class="primaryText">
                                                    <a 
                                                        class="button is-danger is-outlined is-small has-tooltip-right"
                                                        @click="removeSelectedPop(pop)"
                                                        data-tooltip="Quitar"
                                                        >
                                                        <font-awesome-icon icon="backspace"/>
                                                    </a>
                                                </td>

                                            </tr>    
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </section>

        <section class="section is-marginless" :class="bodyBackground">
            <div class="box">
                <div class="tile is-ancestor">

                    <div class="tile is-parent is-vertical">
                        <div class="tile">
                            <div class="tile is-parent">
                                <div class="tile is-child is-4" :class="boxBackground">
                                    <p class="title">POPs existentes</p>
                                    <p class="subtitle">What is up?</p>
                                </div>
                            </div>
                        </div>
                        <div class="tile">
                            <div class="tile is-parent">
                                <div class="tile is-child is-4 box" :class="boxBackground">
                                    <table class="table is-fullwidth" :class="boxBackground">
                                        <thead>
                                            <tr>
                                                <th class="is-size-7 has-text-weight-semibold" :class="secondaryText"><abbr title="Id">Id</abbr></th>
                                                <th class="is-size-7 has-text-weight-semibold" :class="secondaryText"><abbr title="Pop">POP</abbr></th>
                                                <th class="is-size-7 has-text-weight-semibold has-text-centered"></th>
                                            </tr>
                                        </thead>
                                        
                                        <tbody>
                                            <tr class="is-size-7 has-text-weight-light" v-for="pop in popsExisting.data">
                                                <td class="has-text-weight-light" :class="primaryText">{{ pop.id }}</td>
                                                <td class="">
                                                    <div class="is-size-7 has-text-weight-semibold" :class="secondaryText">{{ pop ? pop.nem_movil : '' }}</div>
                                                    <div class="is-size-7 has-text-weight-normal" :class="primaryText">{{ pop ? pop.nombre : '' }}</div>
                                                    <div class="is-size-7 has-text-weight-normal" :class="secondaryText">{{ pop ? pop.direccion : '' }}</div>
                                                    <div class="is-size-7 has-text-weight-normal" :class="secondaryText">{{ pop ? pop.nombre_comuna : '' }}</div>
                                                </td>

                                                <td class="has-text-weight-light has-text-centered" :class="primaryText">
                                                    <a 
                                                        class="button is-link is-outlined is-small has-tooltip-right"
                                                        @click="confirm(pop)"
                                                        data-tooltip="Agregar"
                                                        >
                                                        <font-awesome-icon icon="sync-alt"/>
                                                    </a>
                                                </td>

                                            </tr>    
                                        </tbody>
                                    </table>
                                
                                    <nav class="pagination" role="navigation" aria-label="pagination">
                                        <vue-pagination  
                                            :pagination="popsExisting"
                                            @paginate="getPopsExisting()"
                                            :offset="4"
                                            :primaryText="primaryText">
                                        </vue-pagination>
                                    </nav>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
    import VuePagination from '../VuePagination.vue';
    export default {
        components: {
            'vue-pagination': VuePagination
        },
        props : [
            'bodyBackground',
            'boxBackground',
            'primaryText',
            'secondaryText',
        ],
        created() {
        },
        mounted() {
            this.getPopsExisting()
            this.getPopsToAdd()
        },
        data() {
            return {
                popsExisting: {
                    total: 0,
                    per_page: 10,
                    from: 1,
                    to: 0,
                    current_page: 1
                },
                popsToAdd: {
                    total: 0,
                    per_page: 10,
                    from: 1,
                    to: 0,
                    current_page: 1
                },
                selectedPops: [],
            }
        },
        methods: {
            getPopsExisting() {
                axios.get(`api/popsExisting?page=${this.popsExisting.current_page}`)
                    .then((response) => {
                        // console.log(response)
                        this.popsExisting = response.data
                        // console.log(this.popsExisting.data.length)
                        // this.totalPops = this.pops.total
                    })
                    .catch(() => {
                        console.log('handle server error from here');
                    });
            },
            getPopsToAdd() {
                axios.get(`api/popsToAdd?page=${this.popsToAdd.current_page}`)
                    .then((response) => {
                        // console.log(response)
                        this.popsToAdd = response.data
                        // console.log(this.popsToAdd.data.length)
                        // this.totalPops = this.pops.total
                    })
                    .catch(() => {
                        console.log('handle server error from here');
                    });
            },
            addPop(pop) {
                if (this.selectedPops.includes(pop)) {
                    console.log('fail')
                //     var index = this.selectedPops.indexOf(pop);
                //     if (index > -1) {
                //       this.selectedPops.splice(index, 1);
                //     }
                } else {
                    pop.selected = true
                    this.selectedPops.push(pop)
                    // console.log(this.selectedPops)
                }
            },
            removeSelectedPop(item){
                item.selected = false
                for( var i = 0; i < this.selectedPops.length; i++){ 
                   if ( this.selectedPops[i] === item) {
                     this.selectedPops.splice(i, 1); 
                   }
                }
            },
            confirm(pop){
                // Ask
                var bool = confirm("Seguro desea actualizar la(s) solicitud(es)?");
                // Confirmation
                if (bool) {
                    // Update sgc data
                    this.updateSgcRequest(pop)
                    // Delete POP from Table
                    // this.deletePopExisting(pop)
                    // Update call
                    this.getPopsExisting()
                } else {
                    // alert("cancelo la solicitud");
                }
                
            },
            updateSgcRequest(pop) {
                axios.put(`api/tempSgcPops/${pop.pop_id}`)
                    .then((response) => {
                        console.log(response.data)

                        // this.deletePopExisting(pop)
                        // Alert Confirmation
                        alert("La solicitud se actualizó correctamente");
                    })
                    .catch(() => {
                        console.log('handle server error from here');
                    });
                // console.log(pop)
            },
            // deletePopExisting(pop) {
            //     console.log(pop.id)
            //     axios.delete(`api/tempSgcPops/${pop.id}`)
            //         .then((response) => {
            //             // console.log(response.data)
            //             // Alert Confirmation
            //             alert("La solicitud se actualizó correctamente");
            //         })
            //         .catch(() => {
            //             console.log('handle server error from here');
            //         });
            //     // console.log(pop)
            // },
            
        }
    }
</script>
