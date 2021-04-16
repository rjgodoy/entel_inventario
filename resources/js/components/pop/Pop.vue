<template>
    <div>
        <log
            :user="user"
            :pop="pop"
        />
        <!-- POP Name -->
        <section class="hero is-black-ter">
            <div class="hero-body">
                <div class="">
                    <div class="columns">

                        <div class="column is-1 has-text-centered">
                            <b-tooltip label="Corresponde a la categoría más crítica entre todos sus Sitios activos."
                            type="is-link"
                            position="is-right"
                            size="is-large"
                            multilined>
                                <b-button type="is-primary" size="is-large" :class="popClassification.id == 1 ? 'is-info' : (popClassification.id == 2 ? 'is-warning' : (popClassification.id == 3 ? 'is-primary' : (popClassification.id == 4 ? 'is-smart' : 'is-eco')))" @click="currentTab = 'sites'">
                                    <div class="title is-size-4">{{ popClassification.classification }}</div>
                                </b-button>
                            </b-tooltip>
                        </div>

                        <div class="column is-5">
                            <div class="is-size-4">
                                <h1 class="title" v-if="!canEditName || !isEditMode || !noMovil">{{ pop.nombre }}</h1>

                                <b-input class="is-size-5 has-text-weight-semibold has-background-dark" size="is-large" v-model="popName" v-if="canEditName && (isEditMode && noMovil)"></b-input>

                                <h2 class="subtitle has-text-weight-semibold has-text-grey-light" style="margin-bottom: 4px;">{{ popNems }}
                                    <span class="is-size-5 " v-if="pop.sites && pop.sites.length > 2"> y <a class="has-text-smart" @click="currentTab = 'sites'">{{ pop.sites.length - 2 }} sitios</a> más.
                                    </span>
                                </h2>
                                <div v-if="pop.current_office || pop.alba_project">
                                    <div v-if="pop.current_office" style="padding-bottom: 4px;">
                                        <b-tag type="is-link" size="is-medium" class="has-text-weight-semibold">
                                            <font-awesome-icon :icon="['fas', 'home']" style="padding-bottom: 2px;"/>&nbsp;&nbsp;OFICINA CRM
                                        </b-tag>
                                    </div>
                                    <div v-if="pop.alba_project" style="padding-top: 4px;">
                                        <div class="">
                                            <div>
                                                <b-tooltip label="Entel" position="is-bottom" type="is-black">
                                                    <div>
                                                    <img alt="image" class="img-container" src="/img/iconografia/entel-logo-negativo.png" style="width: 32px"/>
                                                    </div>
                                                </b-tooltip>
                                                <b-tooltip label="American Tower" position="is-bottom" type="is-black" style="padding-left: 8px;">
                                                    <div>
                                                        <img alt="image" class="img-container" src="/img/logos/american_tower_logo_simple.png" style="width: 36px"/>
                                                    </div>
                                                </b-tooltip>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="column is-2" style="padding: 0px">
                            <p class="is-size-6 has-text-weight-semibold has-text-grey-light">Zona</p>
                            <p class="is-size-5 has-text-weight-bold">{{ pop.zona ? pop.zona.nombre_zona : '' }}</p>
                            <p class="is-size-6 has-text-weight-semibold has-text-grey-light" style="margin-top: 10px;">CRM</p>
                            <p class="is-size-5 has-text-weight-bold">{{ pop.zona ? pop.zona.crm.nombre_crm : '' }}</p>
                        </div>

                        <div class="column is-3">
                            <div class="columns is-multiline">
                                <div class="column is-6">
                                    <div class="control">
                                        <b-taglist attached>
                                            <b-tag size="is-medium" :type="popClassification.id == 1 ? 'is-eco' : 'has-background-grey-light has-text-grey'" class="has-text-white">
                                                <font-awesome-icon :icon="popClassification.id == 1 ? ['far', 'check-circle'] : ['far', 'times-circle']"/>
                                            </b-tag>
                                            <b-tag size="is-medium" :type="popClassification.id == 1 ? 'is-dark has-text-weight-bold' : 'has-background-grey has-text-grey-light'">CORE</b-tag>
                                        </b-taglist>
                                    </div>
                                </div>
                                <div class="column is-6">
                                    <div class="control">
                                        <b-taglist attached>
                                            <b-tag size="is-medium" :type="popCritical == 1 ? 'is-eco' : 'has-background-grey-light has-text-grey'" class="has-text-white">
                                                <font-awesome-icon :icon="popCritical == 1 ? ['far', 'check-circle'] : ['far', 'times-circle']"/>
                                            </b-tag>
                                            <b-tag size="is-medium" :type="popCritical == 1 ? 'is-dark has-text-weight-bold' : 'has-background-grey has-text-grey-light'">Crítico</b-tag>
                                        </b-taglist>
                                    </div>
                                </div>
                                <div class="column is-6">
                                    <div class="control">
                                        <b-taglist attached>
                                            <b-tag size="is-medium" :type="pop.vip == 1 ? 'is-eco' : 'has-background-grey-light has-text-grey'" class="has-text-white">
                                                <font-awesome-icon :icon="pop.vip == 1 ? ['far', 'check-circle'] : ['far', 'times-circle']"/>
                                            </b-tag>
                                            <b-tag size="is-medium" :type="pop.vip == 1 ? 'is-dark has-text-weight-bold' : 'has-background-grey has-text-grey-light'">{{ pop.current_entel_vip ? 'VIP Entel' : 'VIP' }}</b-tag>
                                        </b-taglist>
                                    </div>
                                </div>
                                <div class="column is-6">
                                    <div class="control">
                                        <b-taglist attached>
                                            <b-tag size="is-medium" :type="pop.alba_project ? 'is-eco' : 'has-background-grey-light has-text-grey'" class="has-text-white">
                                                <font-awesome-icon :icon="pop.alba_project ? ['far', 'check-circle'] : ['far', 'times-circle']"/>
                                            </b-tag>
                                            <b-tag size="is-medium" :type="pop.alba_project ? 'is-dark has-text-weight-bold' : 'has-background-grey has-text-grey-light'">Proyecto Alba</b-tag>
                                        </b-taglist>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="column is-1 has-text-right" v-if="canViewLog">
                            
                            <button
                                class="button is-warning" 
                                @click="openLog" 
                                type="button"
                                data-target="quickviewDefault" 
                                data-show="quickview" 
                                style="height: auto; margin-right: -24px">
                                <div class="columns">
                                    <div class="column" style="padding-left: 8px; padding-right: 5px;">
                                        &nbsp;<br><font-awesome-icon :icon="['fas', 'sign-in-alt']" rotation="180"/><br>&nbsp;
                                    </div>
                                    <div class="column" style="padding-left: 5px; padding-right: 8px;">
                                        <div class="has-text-weight-semibold is-size-6">L<br/>O<br/>G</div>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="is-divider" style="margin: 0px"></div>

        <!-- CARACTERISTICAS -->
        <!-- ############### -->
        <div class="hero is-dark" :class="">
            <div class="hero-body" style="padding-top: 32px; padding-bottom: 32px;">
                <nav class="level">
                    <div class="level-item has-text-centered">
                        <div>
                            <b-tag type="is-white" size="is-large" class="has-text-link has-text-weight-bold is-size-5">{{ popAttentionPriority }}</b-tag>
                            <div style="padding-top: 4px;">
                                <div class="is-size-6 has-text-weight-semibold">PRIORIDAD ATENCION</div>
                            </div>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                            <!-- <b-tag type="is-white" size="is-large" class="has-text-link has-text-weight-bold is-size-5">{{ popDependences }}</b-tag> -->
                            <b-tag type="is-white" size="is-large" class="has-text-link has-text-weight-bold is-size-5">{{ pop.dependences }}</b-tag>
                            <div style="padding-top: 4px;">
                                <div class="is-size-6 has-text-weight-semibold">DEPENDENCIAS</div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="level-item has-text-centered">
                        <div>
                            <p class="is-size-5 has-text-weight-semibold">{{ dependences ? dependences.length : 0 }}</p>
                            <p class="is-size-7 has-text-weight-semibold">DEPENDENCIAS TOTALES</p>
                        </div>
                    </div> -->
                    <div class="level-item has-text-centered">
                        <div>
                            <b-tag type="is-white" size="is-large" class="has-text-link has-text-weight-bold is-size-5">{{ popCategory ? popCategory : '-' }}</b-tag>
                            <div style="padding-top: 4px;">
                                <div class="is-size-6 has-text-weight-semibold">CLASIFICACION PLANIFICACION</div>
                            </div>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                            <b-tag type="is-white" size="is-large" class="has-text-link has-text-weight-bold is-size-5">{{ popAttentionType }}</b-tag>
                            <div style="padding-top: 4px;">
                                <div class="is-size-6 has-text-weight-semibold">TIPO ATENCION</div>
                            </div>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                            <b-tag type="is-white" size="is-large" class="has-text-link has-text-weight-bold is-size-5">{{ pop.current_autonomy ? pop.current_autonomy.theoretical : '-' }} <span class="is-size-6">hrs.</span></b-tag>
                            <div style="padding-top: 4px;">
                                <div class="is-size-6 has-text-weight-semibold">AUTONOMIA TEORICA</div>
                            </div>
                        </div>
                    </div>
                    <b-tooltip 
                        v-if="canEditPop"
                        :label="isEditMode ? 'Salir del modo edición' : 'Entrar en modo edición'" 
                        position="is-left"
                        type="is-link"
                        animated>
                        <button
                            class="button"
                            :class="isEditMode ? 'is-info' : 'is-link'"
                            @click="isEditMode=!isEditMode" 
                            type="button"
                            style="height: 48px; margin-right: -24px">
                            <div class="columns">
                                <div class="column" style="padding-left: 8px; padding-right: 5px;">
                                    <font-awesome-icon :icon="isEditMode ? ['fas', 'edit'] : ['fas', 'edit']"/>
                                    <div>{{ isEditMode ? 'MODO EDICION' : '' }}</div>
                                </div>
                            </div>
                        </button>
                    </b-tooltip>
                </nav>
            </div>
        </div>

        <section class="">
            <div class="columns is-marginless">

                <div class="column is-2 has-background-white is-paddingless" style="border-right: solid 0.5px rgba(0,0,0,0.1)">
                    <!-- <section class="section"> -->
                        <div class="columns is-multiline" style="padding: 24px">
                            <div class="column is-block-desktop-only is-block-tablet-only is-block-mobile tile is-parent" 
                                :class="!isMobile() && 'is-6'" 
                                :label="tab.title" 
                                type="is-dark"
                                v-for="tab in tabs" 
                                :key="tab.component"
                                style="padding: 8px">

                                <a class="box is-bold tile is-child has-text-centered columns is-vcentered" 
                                    v-if="showTab(tab)" 
                                    :style="!tab.title.includes(' ') && 'padding-right: 8px; padding-left: 8px'"
                                    @click="currentTab = tab.component" 
                                    :class="currentTab === tab.component && (currentTab == 'eco' ? 'is-eco is-bold' : 'is-bold is-link')">
                                    <div class="column is-paddingless">
                                        <font-awesome-icon 
                                            :icon="[tab.icon_type, tab.icon]"
                                            size="2x"
                                            :class="currentTab === tab.component ? 'has-text-white' : 'has-text-grey'"/>

                                        <div class="is-hidden-mobile is-hidden-tablet-only is-hidden-desktop-only is-hidden-widescreen-only"
                                            :class="currentTab === tab.component ? 'has-text-white' : 'has-text-grey'" 
                                            style="padding-top: 12px;"> 
                                            <div class="is-size-7 has-text-weight-semibold">
                                                {{ tab.title.toUpperCase() }}
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <div class="box is-bold tile is-child has-text-centered columns is-vcentered has-background-light" 
                                    v-if="!showTab(tab)" 
                                    :style="!tab.title.includes(' ') && 'padding-right: 8px; padding-left: 8px'">
                                    <div class="column is-paddingless has-text-grey-light">
                                        <font-awesome-icon 
                                            :icon="[tab.icon_type, tab.icon]"
                                            size="2x"/>

                                        <div class="is-hidden-mobile is-hidden-tablet-only is-hidden-desktop-only is-hidden-widescreen-only" 
                                            style="padding-top: 12px;"> 
                                            <div class="is-size-7 has-text-weight-semibold">
                                                {{ tab.title.toUpperCase() }}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    <!-- </section> -->
                </div>

                <div class="column section has-background-light" 
                    :class="currentTabComponent == 'location' || currentTabComponent == 'sites' ? 'is-paddingless' : ''" 
                    style="padding-top: 32px;">
                    <keep-alive>
                        <detail :is="currentTabComponent"
                            :user="user"
                            :pop="pop"
                            :layout="pop.layout"
                            :popClassification="popClassification"
                            :popCritical="popCritical"
                            :bodyBackground="bodyBackground"
                            :boxBackground="boxBackground"
                            :primaryText="primaryText"
                            :secondaryText="secondaryText"
                            :darkMode="darkMode"
                            :isEditMode="isEditMode"
                            :bafi="bafi"
                            :droneVideos="pop.drone_videos"
                        />
                    </keep-alive>
                </div>

                <div class="column is-2 has-background-white is-paddingless" style="border-left: solid 0.5px rgba(0,0,0,0.1)">
                    <section class="section">
                        <div class="columns is-multiline tile is-ancestor">
                            <characteristics
                                :user="user"
                                :pop="pop"
                                :popClassification="popClassification"
                                :popCritical="popCritical"
                                :bodyBackground="bodyBackground"
                                :boxBackground="boxBackground"
                                :primaryText="primaryText"
                                :secondaryText="secondaryText"
                                :darkMode="darkMode"
                                :isEditMode="isEditMode"
                                :bafi="bafi"
                            />
                        </div>
                    </section>
                </div>
            </div>
        </section>
    </div>
    
</template>

<script>
    import { library } from "@fortawesome/fontawesome-svg-core";
    import { faHome, faEdit, faSignInAlt, faTasks, faBolt, faTemperatureLow, faBroadcastTower, faDollarSign, faFileContract, faFolderOpen, faLeaf, faSignal, faBezierCurve, faMapMarkerAlt, faMapMarkedAlt, faCamera, faUserTie, faVideo, faStreetView } from "@fortawesome/free-solid-svg-icons";
    // import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
    import { faCheckCircle as farCheckCircle, faTimesCircle as farTimesCircle } from '@fortawesome/free-regular-svg-icons'
    library.add(faHome, faEdit, farTimesCircle, faSignInAlt, faTasks, faBolt, faTemperatureLow, faBroadcastTower, faDollarSign, faFileContract, faFolderOpen, faLeaf, faSignal, faBezierCurve, faMapMarkerAlt, faMapMarkedAlt, farCheckCircle, faCamera, faUserTie, faVideo, faStreetView)
    export default {
        components: {
            Location: () => import(/* webpackChunkName: "chunks/pop/location"*/'./Location'),
            Sites: () => import(/* webpackChunkName: "chunks/pop/sites"*/'./Sites'),
            Characteristics: () => import(/* webpackChunkName: "chunks/pop/characteristics"*/'./Characteristics'),
            // CharacteristicsSide: () => import(/* webpackChunkName: "chunks/pop/characteristicsSide"*/'./CharacteristicsSide'),
            Layout: () => import(/* webpackChunkName: "chunks/pop/layout/layout"*/'./layout/Layout'),
            Vision: () => import(/* webpackChunkName: "chunks/pop/vision"*/'./Vision'),
            Drone: () => import(/* webpackChunkName: "chunks/pop/drone"*/'./Drone'),
            Power: () => import(/* webpackChunkName: "chunks/pop/power/power"*/'./power/Power'),
            Climate: () => import(/* webpackChunkName: "chunks/pop/climate/climate"*/'./climate/Climate'),
            Infrastructure: () => import(/* webpackChunkName: "chunks/pop/infrastructure/infrastructure"*/'./infrastructure/Infrastructure'),
            Eco: () => import(/* webpackChunkName: "chunks/pop/eco"*/'./Eco'),
            Comsite: () => import(/* webpackChunkName: "chunks/pop/comsite"*/'./Comsite'),
            Clients: () => import(/* webpackChunkName: "chunks/pop/clients"*/'./Clients'),
            Documents: () => import(/* webpackChunkName: "chunks/pop/documents/documents"*/'./documents/Documents'),
            Log: () => import(/* webpackChunkName: "chunks/pop/logs"*/'./Log'),
        },
        props : [
            'user'
        ],
        data() {
            return {
                pop: [],
                technologiesArray: [],
                i: 0,

                isEditMode: false,
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
                currentTab: this.$route.hash != '' ? this.$route.hash.split('#')[1] : 'location',

                popName: '',

                isEmpty: false,
                isBordered: false,
                isStriped: true,
                isNarrowed: false,
                isHoverable: true,
                isFocusable: false,
                isLoading: false,
                hasMobileCards: true,

                canEditPop: false,
                canViewLog: false,
                canEditName: false
            }
        },

        created() {
            this.styleMode()
            this.$eventBus.$on('parameter-updated', this.getAllData)
            this.$eventBus.$on('generator-set-capacities-updated', this.getAllData);
            this.$eventBus.$on('drone-added', this.getAllData);
        },

        mounted() {
            // console.log(this.user)
            this.getAllData()
            this.getTabs()
            
        },

        computed: {
            noMovil() {
                let bool = true
                let i = 0
                let m = 0
                if (this.pop.sites) {
                    Object.keys(this.pop.sites).forEach(site => {
                        i++
                        if (this.pop.sites[site].site_type_id == 2) {
                            bool = false 
                            m++
                        }
                    })
                }
                return i > 0 && i == m ? bool : true
            },

            // canViewLog() {
            //     return this.user.roles[0].id == 1 
            //         || this.user.roles[0].id == 2
            //         || this.user.roles[0].id == 4
            //         || this.user.roles[0].id == 6
            //         || this.user.roles[0].id == 7
            //         || this.user.roles[0].id == 8 ? true : false
            // },

            // canEditName() {
            //     return this.user.roles[0].id == 1 
            //         || this.user.roles[0].id == 2
            //         || this.user.roles[0].id == 8 ? true : false
            // },

            popClassification() {
                var id = 6; var classification
                if (this.pop.sites) {
                    this.pop.sites.forEach(element => {
                        if (element.classification_type_id < id && element.state_id != 2) { 
                            id = element.classification_type_id
                            classification = element.classification_type.classification_type
                        }
                    })
                }
                return {
                    'classification': classification, 
                    'id': id
                    }
            },

            popAttentionPriority() {
                var i = 10; var cat
                if (this.pop.sites) {
                    this.pop.sites.forEach(function(item) {
                        if (item.attention_priority_type_id && item.attention_priority_type_id < i) { 
                            i = item.attention_priority_type_id
                            cat = item.attention_priority_type.attention_priority_type
                        }
                    })
                }
                return cat
            },

            popCategory() {
                var i = 10; var cat
                if (this.pop.sites) {
                    this.pop.sites.forEach(function(item) {
                        if (item.category_type_id && item.category_type_id < i) { 
                            i = item.category_type_id
                            cat = item.category_type.category_type
                        }
                    })
                }
                return cat
            },

            popDependences() {
                var dependences = 0
                if (this.pop.sites) {
                    this.pop.sites.forEach(function(item) {
                        dependences = dependences + item.dependences.length
                    })
                }
                return dependences
            },

            popAttentionType() {
                var i = 10; var cat
                if (this.pop.sites) {
                    this.pop.sites.forEach(function(item) {
                        if (item.attention_type_id && item.attention_type_id < i) { 
                            i = item.attention_type_id
                            cat = item.attention_type.attention_type
                        }
                    })
                }
                return cat
            },
            heroBackground() {
                return this.popClassification.id == 1 ? 'is-info' : (this.popClassification.id == 2 ? 'is-warning' : (this.popClassification.id == 3 ? 'is-primary' : (this.popClassification.id == 4 ? 'is-smart' : (this.popClassification.id == 5 ? 'is-eco' : 'is-white'))))
            },

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

            technologies() {
                var array = []
                if (this.pop.sites) {
                    this.pop.sites.forEach(function(item) {
                        if (item.technologies.length > 0) { 
                            array.push(item.technologies) 
                        }
                    })
                }
                return array[0]
            },

            bafi() {
                var tecA; var tecB; var tecC; 
                var array;
                if (this.technologies) {
                    this.technologies.forEach(element => {
                        if (element.technology_type_id == 3 && element.frequency == 3500) {
                            if (element.nem_tech.startsWith('A')) {
                                tecA = element.nem_tech
                            }
                            if (element.nem_tech.startsWith('B')) {
                                tecB = element.nem_tech
                            }
                            if (element.nem_tech.startsWith('C')) {
                                tecC = element.nem_tech
                            }

                            array = {
                                'tecA': tecA, 
                                'tecB': tecB, 
                                'tecC': tecC
                            }
                        }
                    })
                }

                return array
            },
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

            responsableZona() {
                var array = []
                if (this.pop.zona) {
                    array = {
                        'nombre': this.pop.zona.responsable.nombre,
                        'apellido': this.pop.zona.responsable.apellido,
                        'email': this.pop.zona.responsable.email,
                        'telefono_movil': this.pop.zona.responsable.telefono_movil,
                        'anexo_fono': this.pop.zona.responsable.anexo_fono,
                        'nombre_cargo_especifico': this.pop.zona.responsable.nombre_cargo_especifico
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

        watch: {
            isEditMode(val) {
                if(this.popName != this.pop.nombre && val == false) {
                    this.updateParameter('nombre', this.popName)
                }
            }
        },

        methods: {
            updateParameter(param, val) {
                let params = {
                    'parameter': param,
                    'value': val,
                    'user_id': this.user.id
                }

                axios.put(`/api/pop/${this.pop.id}`, params)
                .then(response => {
                    // console.log(response.data)
                    this.$buefy.toast.open({
                        message: 'Parámetro actualizado exitosamente.',
                        type: 'is-success',
                        duration: 2000
                    })
                    this.$eventBus.$emit('parameter-updated');
                })
                
            },

            getTabs() {
                axios.get(`/api/popMenu`).then((response) => {
                    // console.log(response)
                    this.tabs = response.data.pop
                })
            },

            showTab(tab) {
                // Layout
                if (tab.component == 'layout' && this.popCritical == 0) {
                    return false
                }

                // Visopn 3D
                if (tab.component == 'vision' && (!this.pop.layout || !this.pop.layout.iframe)) {
                    return false
                }

                // Dron
                if (tab.component == 'drone' && (this.pop.drone_videos && !this.pop.drone_videos.length)) {
                    return false
                }

                // Comsite
                if (tab.component == 'comsite' && this.pop.comsites && !this.pop.comsites.length) {
                    return false
                }

                // Clientes empresa
                if (tab.component == 'clients' && this.pop.client_companies && !this.pop.client_companies.length) {
                    return false
                }

                return true
            },

            getAllData() {
                axios.get(`/api/pop/${this.$route.params.id}`)
                .then((response) => {
                    // console.log(response.data)
                    this.pop = response.data.pop
                    this.popName = this.pop.nombre
                    this.canEditPop = response.data.can.editPop
                    this.canViewLog = response.data.can.viewLog
                    this.canEditName = response.data.can.editName
                })
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
            },

            isMobile() {
                if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    return true
                } else {
                    return false
                }
            }
        },

        beforeDestroy() {
             this.$eventBus.$off('parameter-updated');
             this.$eventBus.$off('drone-added');
             this.$eventBus.$off('generator-set-capacities-updated');
        }
    }
</script>
<style type="text/css">
    .has-background-dark input[type="text"] {
        background-color : #333;
        color: #ccc; 
        font-weight: 600;  
    }
</style>
