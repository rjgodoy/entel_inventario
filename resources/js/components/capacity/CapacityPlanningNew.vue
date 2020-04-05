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

            <!-- TABLE -->
            <div class="column section">

                <b-field grouped group-multiline>
                    <div class="control">
                        <b-checkbox v-model="showDetailIcon">Detail column</b-checkbox>
                    </div>
                    <div v-for="(column, index) in columnsVisible"
                         :key="index"
                         class="control">
                        <b-checkbox v-model="column.display">
                            {{ column.title }}
                        </b-checkbox>
                    </div>
                </b-field>

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

                <b-table
                    :data="roomsData.data"
                    ref="table"
                    detailed
                    hoverable
                    custom-detail-row
                    :opened-detailed="['Board Games']"
                    :default-sort="['name', 'asc']"
                    detail-key="name"
                    @details-open="(row, index) => $buefy.toast.open(`Expanded ${row.rooms}`)"
                    :show-detail-icon="showDetailIcon">

                    <template slot-scope="props">
                        <b-table-column
                            field="name"
                            :visible="columnsVisible['name'].display"
                            :label="columnsVisible['name'].title"
                            width="300"
                            sortable
                        >
                            <template>
                                <a class="is-size-6 has-text-weight-bold" target="_blank" :href="'/pop/' + props.row.id">
                                    {{ props.row.nombre }}
                                </a>
                                <div class="is-size-7 has-text-weight-normal">
                                    {{ props.row.comuna.nombre }}
                                </div>
                                <div class="is-size-7 has-text-weight-normal">
                                    {{ 'Zona: ' + props.row.comuna.zona.nombre_zona }} - {{ 'CRM: ' + props.row.comuna.zona.crm.nombre_crm }}
                                </div>
                            </template>
                        </b-table-column>

                        <b-table-column
                            field="state"
                            :visible="columnsVisible['state'].display"
                            :label="columnsVisible['state'].title"
                            sortable
                            centered
                        >
                            <!-- {{ props.row.state }} -->Hello
                        </b-table-column>

                        <!-- <b-table-column
                            field="available"
                            :visible="columnsVisible['available'].display"
                            :label="columnsVisible['available'].title"
                            sortable
                            centered
                        >
                            {{ props.row.available }}
                        </b-table-column> -->

                    </template>

                    <template slot="detail" slot-scope="props">
                        <tr v-for="room in props.row.rooms" >
                            <td v-if="showDetailIcon"></td>
                            <td v-show="columnsVisible['name'].display" >&nbsp;&nbsp;&nbsp;&nbsp;{{ room.name }}</td>
                            <td v-show="columnsVisible['state'].display" class="has-text-centered">{{ room.criticity }}</td>
                            <td v-show="columnsVisible['info'].display" class="has-text-centered">
                                <b-button 
                                    size="is-small"
                                    type="is-link"
                                    @click="isComponentModalActive = true">
                                    Info
                                </b-button>
                            </td>
                        </tr>
                    </template>
                </b-table>
            </div>


            <b-modal :active.sync="isComponentModalActive"
                has-modal-card full-screen :can-cancel="false">
                <modal-room v-bind="formProps"></modal-room>
            </b-modal>

            <!-- GRAPH -->
            <!-- <div class="column section">
                <div class="has-text-weight-bold is-size-5">{{ currentPop.nombre }}</div>
                <div class="has-text-weight-bold is-size-3">{{ currentRoom.name }} - {{ currentRoom.old_name }}</div>
                <capacity-chart
                    :currentRoom="currentRoom"
                />
                <growing-chart
                    :currentRoom="currentRoom"
                />
            </div> -->
        </div>
    </div>
</template>

<script>

    export default {
        components: {
            // CapacityChart: () => import('./CapacityChart'),
            // GrowingChart: () => import('./GrowingChart'),
            ModalRoom: () => import('./ModalRoom')
        },
        props : [
            'user',
            'crms'
        ],
        data() {
            return {
                roomsData: Array,
                // roomsData: {
                //     total: 0,
                //     per_page: 2,
                //     from: 1,
                //     to: 0,
                //     current_page: 1,
                // },

                columnsVisible: {
                    name: { title: 'Pop/Sala', display: true },
                    state: { title: 'Estado', display: true },
                    info: { title: 'Info', display: true },
                },
                showDetailIcon: true,


                searchText: '',
                currentCrm: 0,
                currentPop: [],
                currentRoom: [],

                isComponentModalActive: false,
                formProps: {
                    email: 'evan@you.com',
                    password: 'testing'
                }
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
                    'api_token': this.user.api_token,
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
