<template>
    <div class="hero is-dark">
        <div class="columns hero-body">

            <!-- SECCION BOTONES -->
            <div class="column is-1 section">

                <!-- BOTONES MODULOS -->
                <!-- ############################### -->
                <div class="">
                    <div class="columns is-multiline">
                        <!-- TABS DE INFORMACIÓN -->
                        <!-- ############################### -->
                        <div class="column is-12"
                            v-for="crm in crms"
                            :key="crm.id"
                            @click="currentCrm = currentCrm === crm.id ? 0 : crm.id">
                            <div class="tile is-child box has-text-centered has-text-white" :class="currentCrm === crm.id ? 'has-background-link' : 'has-background-black-ter'">
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
                </div>
            </div>
            <div class="column is-7 section">
                <div class="container">

                    <!-- <section class="field" v-if="message">
                        <div class="notification is-primary alert is-dismissable" role="alert">
                            <button aria-hidden="true" data-dismiss="alert" class="delete" type="button"></button>
                            {{ message }}
                        </div>
                    </section> -->

                    <div class="box has-background-black-ter">
                        <div class="field">
                            <p class="control has-icons-left has-icons-right">
                                <input 
                                    class="input is-rounded" 
                                    @keyup="getRoomsData" 
                                    v-model="searchText" 
                                    type="text" 
                                    arial-label="Buscar" 
                                    placeholder="Buscar..." 
                                    autofocus
                                >
                                <span class="icon is-small is-left">
                                    <font-awesome-icon icon="search"/>
                                </span>
                                <span class="icon is-small is-right">
                                    <button class="delete" @click="clearSearch"></button>
                                </span>
                            </p>
                        </div>
                        <table class="table is-fullwidth has-background-black-ter has-text-white">
                            <thead>
                                <tr>
                                    <th class="is-size-7 has-text-weight-semibold has-text-white"><abbr title="id">POP</abbr></th>
                                    <th class="is-size-7 has-text-weight-semibold has-text-white"><abbr title="id">Sitio / Sala</abbr></th>
                                    <th class="is-size-7 has-text-weight-semibold has-text-centered"></th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                <tr class="" v-for="pop in roomsData.data">
                                    <td class="">
                                        <a class="is-size-6 has-text-weight-bold" target="_blank" :href="'/pop/' + pop.id">
                                            {{ pop ? pop.nombre : '' }}
                                        </a>
                                        <div class="is-size-7 has-text-weight-normal">
                                            {{ pop ? pop.comuna.nombre : '' }}
                                        </div>
                                        <div class="is-size-7 has-text-weight-normal">
                                            {{ pop ? 'Zona: ' + pop.comuna.zona.nombre_zona : '' }} - {{ pop ? 'CRM: ' + pop.comuna.zona.crm.nombre_crm : '' }}
                                        </div>
                                    </td>

                                    <td class="">
                                        <div class="field columns" v-for="room in pop.rooms">

                                            <div class="column is-6">
                                                <a class="is-size-6 has-text-weight-normal" :class="currentRoom == room ? 'has-text-smart' : 'has-text-link'" @click="setGraph(room, pop)">
                                                    {{ room.name }} <span v-if="room.old_name">- {{ room.old_name }}</span>
                                                </a>
                                            </div>

                                            <div class="column">
                                                <b-icon
                                                    pack="fas"
                                                    icon="ban"
                                                    size="is-medium"
                                                    type="is-danger">
                                                </b-icon>
                                            </div>
                                            <div class="column">
                                                <div class="is-size-6">10 kW</div>
                                            </div>
                                            <div class="column">
                                                <b-icon
                                                    pack="fas"
                                                    icon="exclamation-circle"
                                                    size="is-medium"
                                                    type="is-warning">
                                                </b-icon>
                                            </div>
                                            <div class="column">
                                                <b-icon
                                                    pack="fas"
                                                    icon="exclamation-circle"
                                                    size="is-medium"
                                                    type="is-success">
                                                </b-icon>
                                            </div>
                                        </div>
                                    </td>
                                </tr>    
                            </tbody>
                        </table>
                        <nav class="pagination" role="navigation" aria-label="pagination">
                            <vue-pagination  
                                class="has-text-white"
                                :pagination="roomsData"
                                @paginate="getRoomsData()"
                                :offset="4">
                            </vue-pagination>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="column section">
                <div class="has-text-weight-bold is-size-5">{{ currentPop.nombre }}</div>
                <div class="has-text-weight-bold is-size-3">{{ currentRoom.name }} - {{ currentRoom.old_name }}</div>
                <capacity-chart
                    :currentRoom="currentRoom"
                />
                <growing-chart
                    :currentRoom="currentRoom"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import VuePagination from '../VuePagination.vue';
    export default {
        components: {
            VuePagination,
            CapacityChart: () => import('./CapacityChart'),
            GrowingChart: () => import('./GrowingChart'),
        },
        props : [
            'crms'
        ],
        data() {
            return {
                roomsData: {
                    total: 0,
                    per_page: 2,
                    from: 1,
                    to: 0,
                    current_page: 1,
                },
                searchText: '',
                currentCrm: 0,
                currentPop: [],
                currentRoom: []
            }
        },

        watch: {
            currentCrm(newValue) {
                this.getRoomsData()
            }
        },

        created() {
        },

        mounted() {
            this.getRoomsData()
        },

        methods: {
            getRoomsData() {
                var params = {
                    'page': this.roomsData.current_page,
                    'crm_id': this.currentCrm,
                    'text': this.searchText != '' ?  this.searchText : 0
                }

                axios.get('/api/rooms', { params: params })
                .then((response) => {
                    this.roomsData = response.data
                    this.currentPop = this.roomsData.data[0]
                    this.currentRoom = this.currentPop.rooms[0]
                })
            },

            clearSearch() {
                this.searchText = ''
                this.getRoomsData()
            },
            
            setGraph(room, pop) {
                this.currentRoom = room
                this.currentPop = pop
            }
        }
    }
</script>
