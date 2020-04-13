<template>
    <div>
        <!-- POP Name -->
        <section class="hero is-dark">
            <div class="hero-body">
                <div class="">
                    <div class="columns">
                        <!-- <div class="column is-1"></div> -->

                        <div class="column is-1 has-text-centered">
                            <b-button type="is-primary" size="is-medium" :class="popClassification.id == 1 ? 'is-info' : (popClassification.id == 2 ? 'is-warning' : (popClassification.id == 3 ? 'is-primary' : (popClassification.id == 4 ? 'is-smart' : 'is-eco')))">
                                <div class="title is-size-4">{{ popClassification.classification }}</div>
                            </b-button>
                        </div>

                        <div class="column is-6">
                            <div class="is-size-4">
                                <h1 class="title">{{ pop.nombre }}</h1>
                                <h2 class="subtitle">{{ popNems }}
                                    <span class="is-size-5" v-if="pop.sites && pop.sites.length > 2"> y <a class="has-text-smart" @click="currentTab = 'sites'">{{ pop.sites.length - 2 }} sitios</a> más.
                                    </span>
                                </h2>
                            </div>
                        </div>

                        <div class="column is-2" style="padding: 0px">
                            <p class="is-size-6 has-text-weight-light">Zona</p>
                            <p class="is-size-5 has-text-weight-semibold">{{ pop.comuna ? pop.comuna.zona.nombre_zona : '' }}</p>
                            <p class="is-size-6 has-text-weight-light" style="margin-top: 10px;">CRM</p>
                            <p class="is-size-5 has-text-weight-semibold">{{ pop.comuna ? pop.comuna.zona.crm.nombre_crm : '' }}</p>
                        </div>

                        <div class="column is-2">
                            <div class="columns is-multiline is-gapless">
                                <div class="column is-6">
                                    <b-button 
                                        :disabled="popClassification.id == 1 ? false : true"
                                        size="is-normal" 
                                        class="has-text-weight-bold is-fullwidth"
                                        :class="popClassification.id == 1 && 'is-link'">
                                        CORE
                                    </b-button>
                                </div>
                                <div class="column is-6">
                                    <b-button 
                                        :disabled="popCritical == 1 ? false : true"
                                        size="is-normal" 
                                        class="has-text-weight-bold is-fullwidth"
                                        :class="popCritical == 1 && 'is-link'">
                                        Critico
                                    </b-button>
                                </div>
                                <div class="column is-6">
                                    <b-button 
                                        :disabled="pop.vip == 1 ? false : true"
                                        size="is-normal" 
                                        class="has-text-weight-bold is-fullwidth"
                                        :class="pop.vip == 1 && 'is-link'">
                                        VIP
                                    </b-button>
                                </div>
                                <div class="column is-6">
                                    <b-button 
                                        :disabled="pop.alba_project == 1 ? false : true"
                                        size="is-normal" 
                                        class="has-text-weight-bold is-fullwidth"
                                        :class="pop.alba_project == 1 && 'is-link'">
                                        ALBA
                                    </b-button>
                                </div>
                                <!-- <div class="column is-6">
                                    <b-button size="is-normal" class="has-text-weight-bold is-fullwidth">
                                        DWDR
                                    </b-button>
                                </div>
                                <div class="column is-6">
                                    <b-button size="is-normal" class="has-text-weight-bold is-fullwidth">
                                        ALBA
                                    </b-button>
                                </div> -->
                            </div>
                        </div>

                        <div class="column is-1 has-text-right">
                            <log 
                                :user="user"
                                :pop="pop"
                            />
                            <b-button
                                type="is-primary" 
                                @click="openLog" 
                                data-target="quickviewDefault" 
                                data-show="quickview" 
                                size="is-small"
                                >Log del POP
                            </b-button>
                            <!-- <b-button 
                                @click="closeLog" 
                                data-dismiss="quickview"
                                size="is-small"
                                >Log dismiss
                            </b-button> -->
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="">
            <div class="columns is-marginless">

                <!-- BUTTONS -->
                <div class="column is-2 has-background-white is-paddingless">

                    <!-- BOTONES MODULOS -->
                    <!-- ############################### -->
                    <section class="section">
                        <div class="columns is-multiline tile is-ancestor">
                            <!-- TABS DE INFORMACIÓN -->
                            <!-- ############################### -->
                            <div class="column is-6 tile is-parent" v-if="showTab(tab)"
                                v-for="tab in tabs" 
                                :key="tab.component" 
                                @click="currentTab = tab.component">
                                <div 
                                    class="tile is-child box has-text-centered" 
                                    :class="currentTab === tab.component && (currentTab == 'eco' ? 'has-background-eco' : 'is-bold is-link')">
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

                <!-- INFO -->
                <div class="column section is-paddingless has-background-light">

                    <!-- DETELLE DEL TAB -->
                    <!-- ############### -->
                    <keep-alive>
                        <detail :is="currentTabComponent"
                            :user="user"
                            :pop="pop"
                            :rcas="[]"
                            :bodyBackground="bodyBackground"
                            :boxBackground="boxBackground"
                            :primaryText="primaryText"
                            :secondaryText="secondaryText"
                            :darkMode="darkMode"
                        />
                    </keep-alive>

                </div>
            </div>
        </section>
    </div>
    
</template>

<script>
    export default {
        components: {
            Location: () => import('./Location'),
            Sites: () => import('./Sites'),
            Characteristics: () => import('./Characteristics'),
            Layout: () => import('./layout/Layout'),
            Power: () => import('./power/Power'),
            Climate: () => import('./Climate'),
            Infrastructure: () => import('./infrastructure/Infrastructure'),
            Eco: () => import('./Eco'),
            Comsite: () => import('./Comsite'),
            Documents: () => import('./Documents'),
            Log: () => import('./Log'),
        },
        props : [
            'user'
        ],
        data() {
            return {
                pop: Object,
                technologiesArray: [],
                i: 0,

                darkMode: 0,
                bodyBackground: '',
                boxBackground: '',
                primaryText: '',
                secondaryText: '',

                selectedPrimaryBoxText: 'has-text-white',
                selectedSecondaryBoxText: 'has-text-light',

                tabButtonView: 1,
                logOpened: 0,

                tabs: null,
                currentTab: 'location',

                isEmpty: false,
                isBordered: false,
                isStriped: true,
                isNarrowed: false,
                isHoverable: true,
                isFocusable: false,
                isLoading: false,
                hasMobileCards: true
            }
        },

        created() {
            this.styleMode()
        },

        mounted() {
            this.getAllData()
            this.getTabs()
            
        },

        computed: {
            popNems() {
                if(this.pop.sites) {
                    var nem = this.pop.sites.length == 1 ? 
                        this.pop.sites[0].nem_site : 
                        this.pop.sites[0].nem_site + ' - ' + this.pop.sites[1].nem_site
                    return nem
                }
                return
            },
            // sites() {
            //     var array = []
            //     if (this.pop.sites) {
            //         this.pop.sites.forEach(function(item) { 
            //             array.push(item) 
            //         })
            //     } 
            //     return array
            // },
            // sitesFijo() {
            //     return this.sites ? this.sites.find(elemnent => element.site_type_id == 1) : null
            // },
            // sitesMovil() {
            //     return this.sites ? this.sites.find(elemnent => element.site_type_id == 2) : null
            // },
            // sitesSwitch() {
            //     return this.sites ? this.sites.find(elemnent => element.site_type_id == 3) : null
            // },
            // sitesPhone() {
            //     return this.sites ? this.sites.find(elemnent => element.site_type_id == 4) : null
            // },

            // technologies() {
            //     var array = []
            //     if (this.pop.sites) {
            //         this.pop.sites.forEach(function(item) {
            //             if (item.technologies.length > 0) { 
            //                 array.push(item.technologies) 
            //             }
            //         })
            //     }
            //     return array[0]
            // },
            // tec2g1900() {
            //     return this.technologies ? this.technologies.find(element => element.technology_type_id == 1) : null
            // },
            // tec3g900() {
            //     return this.technologies ? this.technologies.find(element => element.technology_type_id == 2) : null
            // },
            // tec3g1900() {
            //     return this.technologies ? this.technologies.find(element => element.technology_type_id == 3) : null
            // },
            // tec3g3500() {
            //     return this.technologies ? this.technologies.find(element => element.technology_type_id == 4) : null
            // },
            // tec4g700() {
            //     return this.technologies ? this.technologies.find(element => element.technology_type_id == 5) : null
            // },
            // tec4g1900() {
            //     return this.technologies ? this.technologies.find(element => element.technology_type_id == 6) : null
            // },
            // tec4g2600() {
            //     return this.technologies ? this.technologies.find(element => element.technology_type_id == 7) : null
            // },
            // tec4g3500() {
            //     return this.technologies ? this.technologies.find(element => element.technology_type_id == 8) : null
            // },

            popClassification() {
                var id = 6; var classification
                if (this.pop.sites) {
                    this.pop.sites.forEach(function(item) {
                        if (item.classification_type_id && item.classification_type_id < id) { 
                            id = item.classification_type_id
                            classification = item.classification_type.classification_type
                        }
                    })
                }
                return {
                    'classification': classification, 
                    'id': id
                    }
            },

            popCritical() {
                var criticity = 0;
                if (this.pop.rooms) {
                    this.pop.rooms.forEach(function(item) {
                        if (item.criticity && item.criticity > criticity) { 
                            criticity = item.criticity
                        }
                    })
                }
                return criticity
            },

            // popAttentionPriority() {
            //     var id = 10; var attentionPriority
            //     if (this.pop.sites) {
            //         this.pop.sites.forEach(function(item) {
            //             if (item.attention_priority_type_id && item.attention_priority_type_id < id) { 
            //                 id = item.attention_priority_type_id
            //                 attentionPriority = item.attention_priority_type.attention_priority_type
            //             }
            //         })
            //     }
            //     return {
            //         'attentionPriority': attentionPriority, 
            //         'id': id
            //         }
            // },

            // popCategory() {
            //     var i = 10; var cat
            //     if (this.pop.sites) {
            //         this.pop.sites.forEach(function(item) {
            //             if (item.category_type_id && item.category_type_id < i) { 
            //                 i = item.category_type_id
            //                 cat = item.category_type.category_type
            //             }
            //         })
            //     }
            //     return cat
            // },

            // popDependences() {
            //     var dependences = 0
            //     if (this.pop.sites) {
            //         this.pop.sites.forEach(function(item) {
            //             dependences = dependences + item.dependences.length
            //         })
            //     }
            //     return dependences
            // },

            // popAttentionType() {
            //     var i = 10; var cat
            //     if (this.pop.sites) {
            //         this.pop.sites.forEach(function(item) {
            //             if (item.attention_type_id && item.attention_type_id < i) { 
            //                 i = item.attention_type_id
            //                 cat = item.attention_type.attention_type
            //             }
            //         })
            //     }
            //     return cat
            // },

            responsableZona() {
                var array = []
                if (this.pop.comuna) {
                    array = {
                        'nombre': this.pop.comuna.zona.responsable.nombre,
                        'apellido': this.pop.comuna.zona.responsable.apellido,
                        'email': this.pop.comuna.zona.responsable.email,
                        'telefono_movil': this.pop.comuna.zona.responsable.telefono_movil,
                        'anexo_fono': this.pop.comuna.zona.responsable.anexo_fono,
                        'nombre_cargo_especifico': this.pop.comuna.zona.responsable.nombre_cargo_especifico
                    }
                }
                return array
            },
            currentTabComponent() {
                return this.currentTab
            },

            // heroBackground() {
            //     return this.popClassification.id == 1 ? 'is-info' : (this.popClassification.id == 2 ? 'is-warning' : (this.popClassification.id == 3 ? 'is-primary' : (this.popClassification.id == 4 ? 'is-smart' : (this.popClassification.id == 5 ? 'is-eco' : 'is-white'))))
            // }
        },
        methods: {
            getTabs() {
                axios.get(`/api/popMenu?api_token=${this.user.api_token}`).then((response) => {
                    // console.log(response.data.data)
                    this.tabs = response.data.data
                })
            },

            showTab(tab) {
                if (tab.component == 'layout' && this.popCritical == 0) {
                    return false
                }
                return true
            },

            getAllData() {
                axios.get(`/api/pop/${this.$route.params.id}?api_token=${this.user.api_token}`)
                .then((response) => {
                    this.pop = response.data.data
                })


                // axios.get(`/api/popTechnologies?pop_id=${this.$route.params.id}`).then((response) => {
                //     // console.log(response.data.data)
                //     this.technologies = response.data.data
                // })
            },
            // Style mode
            styleMode(){
                if (this.darkMode == 1) {
                    // dark mode
                    this.bodyBackground = 'has-background-black-ter'
                    this.boxBackground = 'has-background-dark'
                    this.primaryText = 'has-text-white'
                    this.secondaryText = 'has-text-grey-light'
                    this.searchBodyBackground = 'has-background-dark'
                } else {
                    // light mode
                    this.bodyBackground = 'has-background-light'
                    this.boxBackground = 'has-background-white'
                    this.primaryText = 'has-text-dark'
                    this.secondaryText = 'has-text-grey'
                    this.searchBodyBackground = 'has-background-white'
                }
            },
            changeStyle() {
                this.darkMode = this.darkMode == 0 ? 1 : 0
                this.styleMode()
            },
            changeView(view) {
                if (this.tabButtonView != view) {
                    this.tabButtonView = view
                }
            },
            openLog() {
                this.logOpened = 1
                // console.log(this.logOpened)
            },
            closeLog() {
                this.logOpened = 0
                // console.log(this.logOpened)
            }
        }
    }
</script>
