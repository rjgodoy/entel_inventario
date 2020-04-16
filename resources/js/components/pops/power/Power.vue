<template>
    <div>
        <section class="container">
            <div class="level has-background-light">
                <!-- POWER TABS -->
                <!-- ############################### -->
                <div class="level-item tile is-parent" 
                    v-for="tab in tabs" 
                    :key="tab.component" 
                    @click="currentTab = tab.component">
                    <div class="tile is-child box has-text-centered" 
                        :class="currentTab === tab.component && 'has-background-link'">
                        <font-awesome-icon 
                            :icon="[tab.icon_type, tab.icon]"
                            size="2x"
                            :class="currentTab === tab.component ? 'has-text-white' : 'has-text-grey'"/>
                        <div :class="currentTab === tab.component ? 'has-text-white' : 'has-text-grey'" style="padding-top: 5px;"> 
                            <div class="is-size-6 has-text-weight-semibold">
                                {{ tab.title }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- INFO -->
        <section class="section container">
            <!-- DETELLE DEL TAB -->
            <!-- ############### -->
            <keep-alive>
                <detail :is="currentTabComponent"
                    :user="user"
                    :pop="pop"
                    :bodyBackground="bodyBackground"
                    :boxBackground="boxBackground"
                    :primaryText="primaryText"
                    :secondaryText="secondaryText"
                    :darkMode="darkMode"
                />
            </keep-alive>
        </section>
    </div>
    
</template>

<script>
    export default {
        components: {
            ElectricLines: () => import('./ElectricLines'),
            Junctions: () => import('./Junctions'),
            GeneratorSets: () => import('./GeneratorSets'),
            PowerRectifiers: () => import('./PowerRectifiers')
        },
        props : [
            'user',
            'pop',
            'bodyBackground',
            'boxBackground',
            'primaryText',
            'secondaryText',
            'darkMode'
        ],
        data() {
            return {
                electricLines: [],
                transformers: [],
                junctions: [],
                generatorSets:[],
                powerRectifiers: [],
                electricLineSelected: 0,
                currentTab: 'electric-lines',
                tabs: [
                    {
                        'title': 'Lineas Eléctricas',
                        'component': 'electric-lines',
                        'icon': 'bolt',
                        'icon_type': 'fas'
                    },
                    {
                        'title': 'Empalmes',
                        'component': 'junctions',
                        'icon': 'plug',
                        'icon_type': 'fas'
                    },
                    {
                        'title': 'Grupos Electrógenos',
                        'component': 'generator-sets',
                        'icon': 'charging-station',
                        'icon_type': 'fas'
                    },
                    {
                        'title': 'Plantas Rectificadoras',
                        'component': 'power-rectifiers',
                        'icon': 'random',
                        'icon_type': 'fas'
                    }
                ],
            }
        },
        mounted() {
            this.getElectricLines()
            this.getConnectionClients()
            this.getGeneratorGroups()
            this.getPowerRectifiers()
        },
        computed: {
            currentTabComponent() {
                return this.currentTab
            },
        },
        methods: {
            // APIs
            getElectricLines() {
                axios.get(`/api/electricLines/${this.pop.id}?api_token=${this.user.api_token}`)
                .then((response) => {
                    this.electricLines = response.data
                    console.log(response.data)
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Líneas Eléctricas: ' + error);
                });
            },
            getConnectionClients() {
                axios.get(`/api/junctions/${this.pop.id}?api_token=${this.user.api_token}`)
                .then((response) => {
                    this.junctions = response.data.data
                    // console.log(this.junctions)
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Empalmes: ' + error);
                });
            },
            getGeneratorGroups() {
                axios.get(`/api/generatorSets/${this.pop.id}?api_token=${this.user.api_token}`)
                .then((response) => {
                    this.generatorSets = response.data.data
                    // console.log(this.generatorSets)
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Plantas Rectificadoras: ' + error);
                });
            },
            getPowerRectifiers() {
                axios.get(`/api/powerRectifiers/${this.pop.id}?api_token=${this.user.api_token}`)
                .then((response) => {
                    this.powerRectifiers = response.data.data
                    // console.log(this.powerRectifiers)
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Plantas Rectificadoras: ' + error);
                });
            },
            setTransformerElectricLine(transformer_id, electricLine_id) {
                axios.put(`/api/transformers/${transformer_id}?api_token=${this.user.api_token}&electric_line_id=${electricLine_id}`)
                .then((response) => {
                    console.log(response)
                    this.getElectricLines()
                })
            }
        }
    }
</script>
