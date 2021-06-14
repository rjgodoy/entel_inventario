<template>
    <div class="section has-background-dark" style="">
        <div class="container">

            <div class="columns">
                <div class="column tile is-parent"
                    v-for="crm in crms"
                    :key="crm.id"
                    @click="currentCrm = currentCrm === crm.id ? 0 : crm.id">

                    <div class="tile is-child box has-text-centered has-text-white" :class="currentCrm === crm.id ? 'is-bold is-link' : 'has-background-black-ter'">
                        <div 
                            v-text="crm.sigla_crm"
                            class="is-size-4 has-text-weight-semibold">
                        </div>
                        <div style="padding-top: 5px;">
                            <div class="is-size-7 has-text-weight-normal">
                                {{ crm.nombre_crm }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="box has-background-black-ter">
                <div class="field">
                    <div class="control has-icons-left has-icons-right">
                        <input 
                            class="input is-rounded has-background-black-ter has-text-light" 
                            @keyup="getRoomsData" 
                            v-model="searchText" 
                            type="text" 
                            arial-label="Buscar" 
                            placeholder="Buscar..." 
                            autofocus>
                        <span class="icon is-small is-left">
                            <font-awesome-icon icon="search"/>
                        </span>
                        <span class="icon is-small is-right">
                            <button class="delete" @click="clearSearch"></button>
                        </span>
                    </div>
                </div>

                <RoomsTable 
                    :roomsData=roomsData 
                    :user=user
                    />
               
            </div>
        </div>
    </div>
</template>

<script>
    import { library } from "@fortawesome/fontawesome-svg-core";
    import { faCircle, faSearch, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
    // import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
    // import { faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons'
    library.add(faCircle, faSearch, faExclamationTriangle);

    export default {
        components: {
            RoomsTable: () => import(/* webpackChunkName: "chunks/capacity/roomsTable"*/'./RoomsTable')
        },

        props : [
            'user',
        ],

        data() {
            return {
                crms: Array,
                roomsData: {
                    total: 0,
                    per_page: 2,
                    from: 1,
                    to: 0,
                    current_page: 1,
                },
                searchText: '',
                currentCrm: 0,
            }
        },

        watch: {
            currentCrm(newValue) {
                this.getRoomsData()
            }
        },

        mounted() {
            this.getCrms()
            this.getRoomsData()
        },

        methods: {
            getCrms() {
                axios.get(`/api/crms`)
                .then((response) => {
                    this.crms = response.data.crms

                })
            },

            orderedRooms: function(pop) {
                return _.orderBy(pop.rooms, 'order')
            },

            getRoomsData() {
                var params = {
                    'page': this.roomsData.current_page,
                    'crm_id': this.currentCrm,
                    'text': this.searchText != '' ?  this.searchText : 0
                }

                axios.get('/api/rooms', { params: params })
                .then((response) => {
                    this.roomsData = response.data
                })
            },

            clearSearch() {
                this.searchText = ''
                this.getRoomsData()
            },
            
        },

    }
</script>