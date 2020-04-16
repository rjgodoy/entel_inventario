<template>
    <div class="modal-card" style="width: auto">
        <header class="modal-card-head has-background-white">
            <div class="modal-card-title has-text-weight-semibold">{{ pop.nombre }}</div>
        </header>
        <section class="section modal-card-body has-background-light">
            <div class="columns is-marginless">

                <!-- BUTTONS -->
                <div class="column is-1 is-paddingless">

                    <section class="section tile is-ancestor">
                        <div class="tile is-vertical">
                            <div class="tile is-parent box"
                                v-for="tab in tabs" 
                                :key="tab.component" 
                                @click="currentTab = tab.component"
                                :class="currentTab === tab.component && (currentTab == 'eco' ? 'has-background-eco' : 'is-bold is-link')">
                                <div class="tile is-child has-text-centered">
                                    <font-awesome-icon 
                                        :icon="[tab.icon_type, tab.icon]"
                                        size="2x"
                                        :class="currentTab === tab.component ? 'has-text-white' : 'has-text-grey'"/>
                                    <div :class="currentTab === tab.component ? 'has-text-white' : 'has-text-grey'" style="padding-top: 12px;"> 
                                        <div class="is-size-7 has-text-weight-normal">
                                            {{ tab.title }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div class="column container">
                    <div class="box">
                        
                        <keep-alive>
                            <component :is="currentTabComponent"
                                :chartData="chartData"
                                :lastData="lastData"
                                :user="user"
                                :pop="pop"
                            ></component>
                        </keep-alive>

                        <!-- <projection
                            :user="user"
                            :room="room"
                            :chartData="chartData"
                        /> -->
                    </div>
                    <!-- <div class="columns">
                        <div class="column is-6 box">
                            <div class="has-text-centered has-text-dark is-size-5">Uso actual (%)</div>
                            <capacity-chart
                                :chartData="lastData"
                            />
                        </div>
                    </div> -->
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
            Layout: () => import('../pops/layout/Layout'),
            CapacityChart: () => import('./CapacityChart'),
            Projection: () => import('./Projection'),
            Disponibility: () => import('./Disponibility')
        },
        props : [
            'pop',
            'room',
            'user'
        ],
        data() {
            return {
                chartData: [],
                lastData: [],
                currentTab: 'layout',
                tabs: [
                    {
                        "title": "Layout",
                        "component": "layout",
                        "icon": "bezier-curve",
                        "icon_type": "fas"
                    },
                    {
                        "title": "Proyección",
                        "component": "projection",
                        "icon": "cog",
                        "icon_type": "fas"
                    },
                    {
                        "title": "Disponibilidad",
                        "component": "disponibility",
                        "icon": "home",
                        "icon_type": "fas"
                    }
                    
                ]
            }
        },
        computed: {
            currentTabComponent() {
                return this.currentTab
            },
        },

        watch: {

        },

        created() {
        },

        mounted() {
            this.graphData()
        },

        methods: {
            graphData() {
                axios.get(`/api/capacityProjection?pop_id=${this.pop.id}&api_token=${this.user.api_token}`)
                .then((response) => {
                    console.log(response)
                    this.chartData = response.data.data
                    this.lastData = response.data.data[0]
                })
            },
        }
    }
</script>
