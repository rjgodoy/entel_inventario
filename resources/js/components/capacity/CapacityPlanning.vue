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

                <div class="field">          
                    <table class="table is-fullwidth has-background-black-ter has-text-white">
                        <thead>
                            <tr class="">
                                <th class="is-size-6 has-text-weight-semibold has-text-white" width="25%">
                                    <abbr title="id">POP</abbr>
                                </th>
                                <th class="is-size-6 has-text-weight-semibold has-text-white" width="75%">
                                    <div class="columns">
                                        <div class="column is-6">
                                            <abbr title="Sala">SALA</abbr>
                                        </div>
                                        <div class="column has-text-centered">
                                            <abbr title="Estado / Disponibilidad">Estado / Disponibilidad</abbr>
                                        </div>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            <tr class="" v-for="pop in roomsData.data" :key="pop.id">
                                <td class="">
                                    <div class="">
                                        <a class="is-size-5 has-text-weight-bold has-text-white" target="_blank" :href="'/pop/' + pop.id">
                                            {{ pop ? pop.nombre : '' }}
                                        </a>
                                        <div class="is-size-6 has-text-weight-normal">
                                            Comuna de {{ pop ? pop.comuna.nombre_comuna : '' }}
                                        </div>
                                        <div class="is-size-7 has-text-weight-light">
                                            {{ pop ? 'Zona: ' + pop.comuna.zona.nombre_zona : '' }} - {{ pop ? 'CRM: ' + pop.comuna.zona.crm.nombre_crm : '' }}
                                        </div>
                                    </div>
                                </td>

                                <td class="">
                                    <div class="field" v-for="room in orderedRooms(pop)" :key="room.id">
                                        <div class="columns is-vcentered">
                                            <div class="column is-4">
                                                <router-link class=" has-text-weight-bold has-text-white" :to="'/capacity/' + room.id" target="_blank">
                                                    <div class="is-size-5">{{ room.name }}</div>
                                                    <div v-if="room.old_name" class="has-text-weight-light is-size-6">{{ room.old_name }}</div>
                                                </router-link>
                                            </div>

                                            <div class="column">

                                                <RoomLights 
                                                    :room=room
                                                    :user=user
                                                />
                                                
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>    
                        </tbody>
                    </table>

                    <nav class="pagination" role="navigation" aria-label="pagination">
                        <vue-pagination  
                            :pagination="roomsData"
                            @paginate="getRoomsData()"
                            :offset="4">
                        </vue-pagination>
                    </nav>
                </div>
                
            </div>

        </div>
    </div>
</template>

<script>
    import { library } from "@fortawesome/fontawesome-svg-core";
    import { faCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
    // import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
    // import { faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons'
    library.add(faCircle, faSearch);

    export default {
        components: {
            VuePagination: () => import(/* webpackChunkName: "chunks/helpers/vuePagination"*/'../helpers/VuePagination'),
            RoomLights: () => import(/* webpackChunkName: "chunks/capacity/roomLights"*/'./RoomLights'),
            ModalRoom: () => import(/* webpackChunkName: "chunks/capacity/modals/modalRoom"*/'./modals/ModalRoom')
            // RoomsTable: () => import(/* webpackChunkName: "chunks/capacity/roomsTable"*/'./RoomsTable')
        },
        props : [
            'user',
            'user_permissions',
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