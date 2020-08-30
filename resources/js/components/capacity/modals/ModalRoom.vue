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

                <div class="column container is-paddingless">
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
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrafficLight, faChartLine, faFileInvoice, faBezierCurve, faCalculator } from "@fortawesome/free-solid-svg-icons";
// import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { faFolderOpen as farFolderOpen } from '@fortawesome/free-regular-svg-icons'
library.add(faTrafficLight, faChartLine, faFileInvoice, faBezierCurve, faCalculator, farFolderOpen); 

export default {
    components: {
        Capacity: () => import(/* webpackChunkName: "chunks/capacity/modals/capacity"*/'./Capacity'),
        Projection: () => import(/* webpackChunkName: "chunks/capacity/modals/projection"*/'./Projection'),
        Requests: () => import(/* webpackChunkName: "chunks/capacity/modals/requests"*/'./Requests'),
        Calculator: () => import(/* webpackChunkName: "chunks/capacity/modals/calculator"*/'./Calculator'),
        Layout: () => import(/* webpackChunkName: "chunks/pop/layout/layout"*/'../../pop/layout/Layout'),
        Documents: () => import(/* webpackChunkName: "chunks/pop/documents/documents"*/'../../pop/documents/Documents'),
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
            axios.get(`/api/pop/${this.pop.id}`)
            .then((response) => {
                // console.log(response.data.data)
                this.popData = response.data.data
            })
        },

        graphData() {
            axios.get(`/api/capacityProjection?room_id=${this.room.id}`)
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
