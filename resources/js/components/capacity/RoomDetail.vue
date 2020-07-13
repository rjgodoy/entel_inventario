<template>
    <div class="" >
        <header class="modal-card-head has-background-white">
            <div class="modal-card-title has-text-weight-semibold">{{ room.pop ? room.pop.nombre : '' }} - {{ room.name }}: {{ room.old_name }}</div>
        </header>

        <section class="modal-card-body hero is-light" style="padding-top: 0">
            <div class="columns section">

                <div class="column is-1">
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

                <div class="column" style="padding-left: 48px;">
                    <keep-alive>
                        <component :is="currentTabComponent"
                            :user="user"
                            :room="room"
                            :pop="room.pop"
                        ></component>
                    </keep-alive>
                </div>

            </div>
        </section>
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
        Capacity: () => import(/* webpackChunkName: "chunks/capacity/capacity"*/'./Capacity'),
        Projection: () => import(/* webpackChunkName: "chunks/capacity/projection"*/'./Projection'),
        // Requests: () => import(/* webpackChunkName: "chunks/capacity/requests"*/'./Requests'),
        // Calculator: () => import(/* webpackChunkName: "chunks/capacity/calculator"*/'./Calculator'),
        Layout: () => import(/* webpackChunkName: "chunks/capacity/layout"*/'./Layout'),
        Documents: () => import(/* webpackChunkName: "chunks/pop/documents/documents"*/'../pop/documents/Documents'),
    },

    props : [
        'user'
    ],

    data() {
        return {
            room: '',
            currentTab: 'layout',
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
                // {
                //     "title": "Reserva",
                //     "component": "requests",
                //     "icon": "file-invoice",
                //     "icon_type": "fas"
                // },
                {
                    "title": "Layout",
                    "component": "layout",
                    "icon": "bezier-curve",
                    "icon_type": "fas"
                },
                // {
                //     "title": "Calculador",
                //     "component": "calculator",
                //     "icon": "calculator",
                //     "icon_type": "fas"
                // },
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

    created() {
        this.$eventBus.$on('room-data', this.getRoomData);
        this.$eventBus.$on('room-distribution', this.getRoomData);
        this.$eventBus.$on('room-surface', this.getRoomData);
        this.$eventBus.$on('change-room', this.getRoomData);
    },

    mounted() {
        this.getRoomData()
    },

    methods: {
        getRoomData() {
            axios.get(`/api/rooms/${this.$route.params.id}?api_token=${this.user.api_token}`)
            .then(response => {
                this.room = response.data.room
            })
        },

        beforeDestroy() {
            this.$eventBus.$off('room-data');
            this.$eventBus.$off('room-distribution');
            this.$eventBus.$off('room-surface');
            this.$eventBus.$off('change-room');
        }
    },
}
</script>
