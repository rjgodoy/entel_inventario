<template>
    <div class="section hero is-dark" style="padding-top: 0">
        <div class="columns hero-body">

            <!-- SECCION BOTONES -->
            <div class="column is-1 section" style="padding-left: 10px; padding-right: 0px; padding-top: 20px;">

                <!-- BOTONES MODULOS -->
                <!-- ############################### -->
                <div class="columns is-multiline">
                    <div class="column is-12"
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
            </div>

            <!-- TABLE -->
            <div class="column section" style="padding-top: 20px; padding-right: 10px;">
                <div class="box has-background-black-ter">
                    <div class="field">
                        <p class="control has-icons-left has-icons-right">
                            <input 
                                class="input is-rounded has-background-black-ter has-text-light" 
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
                                <th class="is-size-6 has-text-weight-semibold has-text-white" width="30%">
                                    <abbr title="id">POP</abbr>
                                </th>
                                <th class="is-size-6 has-text-weight-semibold has-text-white" width="70%">
                                    <div class="columns">
                                        <div class="column is-6">
                                            <abbr title="Sala">Sala</abbr>
                                        </div>
                                        <div class="column has-text-centered">
                                            <abbr title="Estado / Disponibilidad">Estado / Disponibilidad</abbr>
                                        </div>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            <tr class="" v-for="pop in roomsData.data">
                                <td class="">
                                    <div class="field">
                                        <a class="is-size-6 has-text-weight-bold" target="_blank" :href="'/pop/' + pop.id">
                                            {{ pop ? pop.nombre : '' }}
                                        </a>
                                        <div class="is-size-6 has-text-weight-light">
                                            Comuna de {{ pop ? pop.comuna.nombre_comuna : '' }}
                                        </div>
                                        <div class="is-size-7 has-text-weight-light">
                                            {{ pop ? 'Zona: ' + pop.comuna.zona.nombre_zona : '' }} - {{ pop ? 'CRM: ' + pop.comuna.zona.crm.nombre_crm : '' }}
                                        </div>
                                    </div>
                                </td>

                                <td class="">
                                    <div class="field" v-for="room in pop.rooms">
                                        <div v-for="id in {'id': parseInt(Math.random() * 50 + 1)}" :key="id" :set="energy = id" class="">
                                            <div v-for="id in {'id': parseInt(Math.random() * 50 + 1)}" :key="id" :set="climate = id" class="">
                                                <div v-for="id in {'id': parseInt(Math.random() * 50 + 1)}" :key="id" :set="space = id" class="columns is-vcentered">

                                                    <!-- ##### SALA ##### -->
                                                    <!-- ################### -->
                                                    <div class="column is-6">
                                                        <a class="is-size-6 has-text-weight-bold has-text-white" 
                                                            @click="isComponentModalActive = true; roomSelected = room; popSelected = pop">
                                                            {{ room.name }} <p v-if="room.old_name" class="has-text-weight-light">{{ room.old_name }}</p>
                                                        </a>
                                                    </div>

                                                    <!-- ##### GENERAL ##### -->
                                                    <!-- ################### -->
                                                    <div class="column is-2 has-text-centered">
                                                        <div class="has-text-centered is-size-7">GENERAL</div>
                                                        <div style="padding: 12px; border: 1px solid #888; border-radius: 15px;">
                                                            <!-- <div class=""> -->
                                                                <div class="" style="padding-top: 10px;">
                                                                    <font-awesome-icon 
                                                                        icon="circle"
                                                                        size="2x" 
                                                                        :class="energy <= 5 || climate <= 5 || space <= 5 ? 'has-text-info' : ((energy > 5 && energy <= 10) || (climate > 5 && climate <= 10) || (space > 5 && space <= 10) ? 'has-text-warning' : 'has-text-success')"
                                                                        />
                                                                </div>
                                                                <div class="has-text-centered has-text-white">
                                                                    <div class=" is-size-4 has-text-weight-bold" style="padding-top:12px">{{ Math.min(energy, climate) }}
                                                                    <span class="is-size-6 has-text-weight-light">kW</span></div>
                                                                    <p class="has-text-weight-light is-size-7">Disponibles</p>
                                                                </div>
                                                            <!-- </div> -->
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="column has-text-centered" style="padding-top: 0">
                                                        <div class="columns" style="padding: 8px;">
                                                            <div class="column has-text-centered is-size-7">ENERGIA</div>
                                                            <div class="column has-text-centered is-size-7" v-if="canViewClimate">CLIMA</div>
                                                            <div class="column has-text-centered is-size-7">ESPACIO</div>
                                                        </div>
                                                        <div style="margin-top: -32px; padding: 12px; border: 1px solid #888; border-radius: 15px;">
                                                            <div class="columns">
                                                                <!-- ##### ENERGIA ##### -->
                                                                <!-- ################### -->
                                                                <div class="column">
                                                                    <!-- <font-awesome-layers class="fa-md"> -->
                                                                        <!-- <font-awesome-icon 
                                                                            icon="traffic-light" 
                                                                            class="has-text-dark" 
                                                                            size="3x"
                                                                            /> -->
                                                                            <!-- :transform="energy <= 5 ? 'shrink-6.6 up-25.8 left-29.75' : (energy > 5 && energy <= 10 ? 'shrink-6.6 up-13 left-29.75' : 'shrink-6.6 up-1.2 left-29.8')" -->
                                                                        <font-awesome-icon 
                                                                            icon="circle" 
                                                                            size="2x"
                                                                            :class="energy <= 5 ? 'has-text-info' : (energy > 5 && energy <= 10 ? 'has-text-warning' : 'has-text-success')"
                                                                             
                                                                            />
                                                                    <!-- </font-awesome-layers> -->
                                                                    <!-- <font-awesome-icon
                                                                        :icon="['fas', 'circle']"
                                                                        size="2x"
                                                                        class="has-text-warning"
                                                                        /> -->
                                                                        <div class="has-text-centered has-text-white">
                                                                            <div class=" is-size-5 has-text-weight-bold">{{ canViewClimate ? energy : Math.min(energy, climate) }}
                                                                            <span class="is-size-6 has-text-weight-light">kW</span></div>
                                                                            <p class="has-text-weight-light is-size-7">Disponibles</p>
                                                                        </div>
                                                                </div>
                                                            <!-- </div> -->


                                                                <!-- ##### CLIMA ##### -->
                                                                <!-- ################# -->
                                                                <div class="column" 
                                                                    v-if="canViewClimate">
                       
                                                                        <font-awesome-icon 
                                                                            icon="circle" 
                                                                            size="2x"
                                                                            :class="climate <= 5 ? 'has-text-info' : (climate > 5 && climate <= 10 ? 'has-text-warning' : 'has-text-success')"
                                                                             
                                                                            />
                                                                        <div class="has-text-centered has-text-white">
                                                                            <div class=" is-size-5 has-text-weight-bold">{{ climate }}
                                                                            <span class="is-size-6 has-text-weight-light">kW</span></div>
                                                                            <p class="has-text-weight-light is-size-7">Disponibles</p>
                                                                        </div>
                                                                    <!-- </div> -->
                                                                </div>

                                                                <!-- ##### ESPACIO ##### -->
                                                                <!-- ################### -->
                                                                <div class="column">
                       
                                                                        <font-awesome-icon 
                                                                            icon="circle" 
                                                                            size="2x"
                                                                            :class="space <= 5 ? 'has-text-info' : (space > 5 && space <= 10 ? 'has-text-warning' : 'has-text-success')"
                                                                             
                                                                            />
                                                                        <div class="has-text-centered has-text-white">
                                                                            <div class=" is-size-5 has-text-weight-bold">{{ space }}</div>
                                                                            <p class="has-text-weight-light is-size-7">Disponibles</p>
                                                                        </div>
                                                                    <!-- </div> -->
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                
                                            </div>
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

            <b-modal :active.sync="isComponentModalActive"
                has-modal-card full-screen :can-cancel="false">
                <modal-room
                    :user="user"
                    :pop="popSelected"
                    :room="roomSelected"
                ></modal-room>
            </b-modal>
        </div>
    </div>
</template>

<script>

    import VuePagination from '../VuePagination.vue';
    export default {
        components: {
            VuePagination,
            // CapacityChart: () => import('./CapacityChart'),
            // GrowingChart: () => import('./GrowingChart'),
            ModalRoom: () => import('./modals/ModalRoom')
        },
        props : [
            'user',
            'user_permissions',
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
                // currentPop: [],
                // currentRoom: [],

                isComponentModalActive: false,
                popSelected: null,
                roomSelected: null
            }
        },

        watch: {
            currentCrm(newValue) {
                this.getRoomsData()
            }
        },

        computed: {
            canViewClimate() {
               return this.user.roles[0].slug == 'engineer-admin' || this.user.roles[0].slug == 'admin' || this.user.roles[0].slug == 'developer' || this.user_permissions.find(element => element.slug == 'edit-air-conditioner') ? true : false
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
                    'api_token': this.user.api_token,
                    'page': this.roomsData.current_page,
                    'crm_id': this.currentCrm,
                    'text': this.searchText != '' ?  this.searchText : 0
                }

                axios.get('/api/rooms', { params: params })
                .then((response) => {
                    this.roomsData = response.data
                    // this.currentPop = this.roomsData.data[0]
                    // this.currentRoom = this.currentPop.rooms[0]
                })
            },

            clearSearch() {
                this.searchText = ''
                this.getRoomsData()
            },
            
            // setGraph(room, pop) {
            //     this.currentRoom = room
            //     this.currentPop = pop
            // }
        }
    }
</script>

<style scoped>
    body {
        background-color: hsl(0, 0%, 21%);
    }
</style>