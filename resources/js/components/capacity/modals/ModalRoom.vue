<template>
    <div class="modal-card" style="width: auto">
        <header class="modal-card-head has-background-white">
            <div class="modal-card-title has-text-weight-semibold">{{ pop.nombre }} - {{ room.name }}: {{ room.old_name }}</div>
        </header>

        <section class="section modal-card-body hero is-light" style="padding-top: 0">
            <div class="columns hero-body">

                <div class="column is-1 section" style="padding-left: 10px; padding-right: 0px; padding-top: 20px;">

                    <div class="columns is-multiline">
                        <div class="column is-12"
                            v-for="tab in tabs" 
                            :key="tab.component" 
                            @click="currentTab = tab.component"
                            :class="currentTab === tab.component && (currentTab == 'eco' ? 'has-background-eco' : 'is-bold is-link')">
                            <div class="tile is-child box has-text-centered" :class="currentTab === tab.component ? 'is-bold is-link' : ''">
                                <font-awesome-icon 
                                    :icon="[tab.icon_type, tab.icon]"
                                    size="2x"
                                    :class="currentTab === tab.component ? 'has-text-white' : 'has-text-grey'"/>
                                <div style="padding-top: 5px;">
                                    <div class="is-size-7 has-text-weight-normal">
                                        {{ tab.title }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="column container">
                    <!-- <div class="box"> -->
                        <keep-alive>
                            <component :is="currentTabComponent"
                                :data="chartData"
                                :actualData="actualData"
                                :user="user"
                                :pop="popData"
                                :room_id="room.id"
                            ></component>
                        </keep-alive>
                    <!-- </div> -->
                </div>

            </div>
        </section>
        <footer class="modal-card-foot">
            <button class="button" type="button" @click="$parent.close()">Close</button>
            <!-- <button class="button is-primary">Guardar</button> -->
        </footer>
    </div>
</template>

<script>    
    export default {
        components: {
            Capacity: () => import('./Capacity'),
            Projection: () => import('./Projection'),
            Requests: () => import('./Requests'),
            Calculator: () => import('./Calculator'),
            Layout: () => import('../../pops/layout/Layout'),
            Documents: () => import('./Documents'),
        },
        props : [
            'pop',
            'room',
            'user'
        ],
        data() {
            return {
                popData: Object,
                chartData: [],
                actualData: [],
                currentTab: 'capacity',
                tabs: [
                    {
                        "title": "Capacity",
                        "component": "capacity",
                        "icon": "traffic-light",
                        "icon_type": "fas"
                    },
                    {
                        "title": "Proyección",
                        "component": "projection",
                        "icon": "chart-line",
                        "icon_type": "fas"
                    },
                    {
                        "title": "Reserva",
                        "component": "requests",
                        "icon": "file-invoice",
                        "icon_type": "fas"
                    },
                    {
                        "title": "Layout",
                        "component": "layout",
                        "icon": "bezier-curve",
                        "icon_type": "fas"
                    },
                    {
                        "title": "Calculador",
                        "component": "calculator",
                        "icon": "calculator",
                        "icon_type": "fas"
                    },
                    {
                        "title": "Documentos",
                        "component": "documents",
                        "icon": "folder-open",
                        "icon_type": "far"
                    },
                ]
            }
        },
        computed: {
            currentTabComponent() {
                return this.currentTab
            },
        },

        mounted() {
            this.getPopData()
            this.graphData()
        },

        methods: {
            getPopData() {
                axios.get(`/api/pop/${this.pop.id}?api_token=${this.user.api_token}`)
                .then((response) => {
                    // console.log(response.data.data)
                    this.popData = response.data.data
                })
            },

            graphData() {
                axios.get(`/api/capacityProjection?room_id=${this.room.id}&api_token=${this.user.api_token}`)
                .then((response) => {
                    // console.log(response)
                    if(response.data.data) {
                        this.chartData = response.data.data
                        this.actualData = response.data.data[0]
                    }
                })
            },
        }
    }
</script>
