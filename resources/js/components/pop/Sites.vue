<template>
    <div class="">
        <!-- TECNOLOGIAS -->
        <!-- ########### -->
        <section class="section has-background-white-bis is-bold" style="padding-top: 20px; padding-bottom: 20px; border-bottom: solid 0.5px rgba(0,0,0,0.2)">
            <div class="columns">
                <div class="column has-text-weight-semibold is-size-3 has-text-left">Tecnologías</div>
            </div>
            <div class="level">
                <div class="level-item">
                    <div>
                        <div class="is-size-7 has-text-weight-bold">2G 1900</div>
                        <div class="is-size-5 has-text-weight-bold" :class="tec2g1900 ? 'has-text-info' : ''">{{ tec2g1900 ? tec2g1900.nem_tech : '-' }}</div>
                        <b-tooltip :label="tec2g1900 ? tec2g1900.state.state : 'Sin Tecnología'" position="is-bottom" :type="tec2g1900 ? 'is-dark' : 'is-white'">
                            <font-awesome-icon :icon="['fas', 'circle']" :class="tec2g1900 ? tec2g1900.state.style : 'has-text-white'"/>
                        </b-tooltip>
                    </div>
                </div>

                <div class="is-divider-vertical" style="height: 64px;"></div>

                <div class="level-item">
                    <div>
                        <div class="is-size-7 has-text-weight-bold">3G 900</div>
                        <div class="is-size-5 has-text-weight-bold" :class="tec3g900 ? 'has-text-info' : ''">{{ tec3g900 ? tec3g900.nem_tech : '-' }}</div>
                        <b-tooltip :label="tec3g900 ? tec3g900.state.state : 'Sin Tecnología'" position="is-bottom" :type="tec3g900 ? 'is-dark' : 'is-white'">
                            <font-awesome-icon :icon="['fas', 'circle']" :class="tec3g900 ? tec3g900.state.style : 'has-text-white'"/>
                        </b-tooltip>
                    </div>
                </div>
                <div class="level-item">
                    <div>
                        <div class="is-size-7 has-text-weight-bold">3G 1900</div>
                        <div class="is-size-5 has-text-weight-bold" :class="tec3g1900 ? 'has-text-info' : ''">{{ tec3g1900 ? tec3g1900.nem_tech : '-' }}</div>
                        <b-tooltip :label="tec3g1900 ? tec3g1900.state.state : 'Sin Tecnología'" position="is-bottom" :type="tec3g1900 ? 'is-dark' : 'is-white'">
                            <font-awesome-icon :icon="['fas', 'circle']" :class="tec3g1900 ? tec3g1900.state.style : 'has-text-white'"/>
                        </b-tooltip>
                    </div>
                </div>

                <div class="is-divider-vertical" style="height: 64px;"></div>

                <div class="level-item">
                    <div>
                        <div class="is-size-7 has-text-weight-bold">LTE 700</div>
                        <div class="is-size-5 has-text-weight-bold" :class="tec4g700 ? 'has-text-info' : ''">{{ tec4g700 ? tec4g700.nem_tech : '-' }}</div>
                        <b-tooltip :label="tec4g700 ? tec4g700.state.state : 'Sin Tecnología'" position="is-bottom" :type="tec4g700 ? 'is-dark' : 'is-white'">
                            <font-awesome-icon :icon="['fas', 'circle']" :class="tec4g700 ? tec4g700.state.style : 'has-text-white'"/>
                        </b-tooltip>
                    </div>
                </div>
                <div class="level-item">
                    <div>
                        <div class="is-size-7 has-text-weight-bold">LTE 1900</div>
                        <div class="is-size-5 has-text-weight-bold" :class="tec4g1900 ? 'has-text-info' : ''">{{ tec4g1900 ? tec4g1900.nem_tech : '-' }}</div>
                        <b-tooltip :label="tec4g1900 ? tec4g1900.state.state : 'Sin Tecnología'" position="is-bottom" :type="tec4g1900 ? 'is-dark' : 'is-white'">
                            <font-awesome-icon :icon="['fas', 'circle']" :class="tec4g1900 ? tec4g1900.state.style : 'has-text-white'"/>
                        </b-tooltip>
                    </div>
                </div>
                <div class="level-item">
                    <div>
                        <div class="is-size-7 has-text-weight-bold">LTE 2600</div>
                        <div class="is-size-5 has-text-weight-bold" :class="tec4g2600 ? 'has-text-info' : ''">{{ tec4g2600 ? tec4g2600.nem_tech : '-' }}</div>
                        <b-tooltip :label="tec4g2600 ? tec4g2600.state.state : 'Sin Tecnología'" position="is-bottom" :type="tec4g2600 ? 'is-dark' : 'is-white'">
                            <font-awesome-icon :icon="['fas', 'circle']" :class="tec4g2600 ? tec4g2600.state.style : 'has-text-white'"/>
                        </b-tooltip>
                    </div>
                </div>

                <div class="is-divider-vertical" style="height: 64px;"></div>

                <div class="level-item">
                    <div>
                        <div class="is-size-7 has-text-weight-bold">BAFI</div>
                        <div class="has-text-weight-bold is-size-5" :class="bafi ? 'has-text-info' : ''">
                            {{ bafi ? bafi.tecA + ' - ' + bafi.tecB + ' - ' + bafi.tecC : '-' }}
                        </div>
                        <b-tooltip :label="tec4g3500 ? tec4g3500.state.state : 'Sin Tecnología'" position="is-bottom" :type="tec4g3500 ? 'is-dark' : 'is-white'">
                            <font-awesome-icon :icon="['fas', 'circle']" :class="tec4g3500 ? tec4g3500.state.style : 'has-text-white'"/>
                        </b-tooltip>
                    </div>
                </div>
            </div>
        </section>


        <section class="section" style="padding-top: 20px;">
            <div class="columns">
                <div class="column has-text-weight-semibold has-text-dark is-size-3 has-text-left">Sitios</div>
            </div>
            <div class="tile is-ancestor columns is-multiline">
                <div class="tile is-parent column is-6" v-for="site in sites">
                    
                    <div class="tile is-child box">
                        <div class="columns">
                            <div class="column is-8">
                                <div class="is-size-7 has-text-weight-normal">Nemonico Sitio</div>
                                <div class="is-size-4 has-text-weight-bold">{{ site.nem_site }}</div>
                                <div class="is-size-7 has-text-weight-normal" style="padding-top: 4px;">Nombre Sitio</div>
                                <div class="is-size-5 has-text-weight-semibold" v-if="site.nombre">{{ site.nombre }}</div>
                            </div>
                            <div class="column">
                                <div class="field">
                                    <div class="control">
                                        <div class="tags has-addons is-right">
                                            <span class="tag is-dark has-text-weight-normal">Tipo Sitio</span>
                                            <span class="tag has-text-weight-bold has-text-white" 
                                                :class="site.site_type_id == 1 ? 'is-smart' : 
                                            (site.site_type_id == 2 ? 'is-positive' : 
                                                (site.site_type_id == 3 ? 'is-eco' : 'is-warning'))">
                                                    {{ site.site_type.site_type.toUpperCase() }}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div class="field">
                                    <div class="control">
                                        <div class="tags has-addons is-right">
                                            <span class="tag is-dark has-text-weight-normal" v-if="!isEditMode || site.site_type_id == 2">Estado</span>
                                            <a class="tag is-info has-text-weight-normal has-text-white" 
                                                v-if="isEditMode && site.site_type_id != 2"
                                                @click="isEditParameterModalActive = true; 
                                                    parameter = 'state_id'; 
                                                    selectedSite = site;
                                                    parameter_id = site.state_id" 
                                                style="border: solid 0.5px grey;">
                                                Editar Estado
                                            </a>
                                            <span class="tag has-text-weight-bold has-text-white" 
                                                :class="status(site).id == 1 ? 'is-success' : 
                                                    (status(site).id == 2 ? 'is-danger' : 
                                                        (status(site).id == 0 ? 'has-text-dark' : 'is-warning'))">
                                                {{ status(site).state.toUpperCase() }}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="columns has-text-centered tile is-ancestor">
                            <div class="column tile is-parent">
                                <div v-if="!isEditMode" class="tile is-child box is-shadowless" style="border: solid 0.5px grey;">
                                    <div class="title is-size-4 has-text-weight-bold">{{ site.classification_type.classification_type }}</div>
                                    <div class="subtitle is-size-7 has-text-weight-normal">Categoría</div>
                                </div>

                                <a v-if="isEditMode" 
                                    class="tile is-child box" 
                                    @click="isEditParameterModalActive = true; 
                                        parameter = 'classification_type_id'; 
                                        selectedSite = site;
                                        parameter_id = site.classification_type_id" 
                                    style="border: solid 0.5px grey;">
                                    <div  class="title is-size-4 has-text-weight-bold">{{ site.classification_type.classification_type }}</div>
                                    <div class="subtitle is-size-7 has-text-weight-normal">Categoría</div>
                                </a>
                            </div>

                            <div class="column tile is-parent">
                                <div v-if="!isEditMode" class="tile is-child box is-shadowless" style="border: solid 0.5px grey;">
                                    <div class="title is-size-4 has-text-weight-bold">{{ site.attention_priority_type.attention_priority_type }}</div>
                                    <div class="subtitle is-size-7 has-text-weight-normal">Prioridad atención</div>
                                </div>

                                <a v-if="isEditMode" 
                                    class="tile is-child box" 
                                    @click="isEditParameterModalActive = true; 
                                        parameter = 'attention_priority_type_id'; 
                                        selectedSite = site;
                                        parameter_id = site.attention_priority_type_id"
                                    style="border: solid 0.5px grey;">
                                    <div class="title is-size-4 has-text-weight-bold">{{ site.attention_priority_type.attention_priority_type }}</div>
                                    <div class="subtitle is-size-7 has-text-weight-normal">Prioridad atención</div>
                                </a>
                            </div>

                            <div class="column tile is-parent" v-if="site.site_type_id == 2">
                                <div class="tile is-child box is-shadowless" style="border: solid 0.5px grey;">
                                    <div class="title is-size-4 has-text-weight-bold">{{ site.category_type && site.category_type.category_type }}</div>
                                    <div class="subtitle is-size-7 has-text-weight-normal">Cat. Planificación</div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="is-divider" data-content="TECNOLOGIAS" style="margin: 10px auto 10px auto"></div>

                        <div class="" style="padding-top: 20px;">
                            <div class="columns is-multiline tile" v-if="site.technologies.length">
                                <div v-for="tech in site.technologies" class="column is-6 tile is-parent">
                                    <div class="box tile is-child">
                                        <div class="columns">
                                            <div class="column is-6 has-text-left">
                                                <div class="is-size-7 has-text-weight-light">Nemeonico Tecnología</div>
                                                <div class="has-text-weight-bold">{{ tech.nem_tech }}</div>
                                            </div>
                                            <div class="column is-6 has-text-right">
                                                <div class="is-size-7 has-text-weight-light">Frecuencia</div>
                                                <div class="has-text-weight-bold">
                                                    {{ tech.technology_type.type }} - {{ tech.frequency }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="">
                                            <div class="is-size-7 has-text-weight-light">Nombre</div>
                                            <div class="is-size-6 has-text-weight-normal">{{ tech.ran_device_name }}</div>
                                        </div>
                                        <div class="columns pt-2">
                                            <div class="column">
                                                <b-tooltip :label="tec3g900 ? tec3g900.state.state : 'Sin Tecnología'" position="is-bottom" :type="tec3g900 ? 'is-dark' : 'is-white'">
                                                    <font-awesome-icon :icon="['fas', 'circle']" :class="tec3g900 ? tec3g900.state.style : 'has-text-white'"/>
                                                </b-tooltip>
                                            </div>
                                            <!-- <div class="column has-text-right">
                                                <a href="http://172.29.64.101/php_sup/basic_sitio.php?sitio=29671&III_G=2" class="is-size-7 has-text-weight-semibold">
                                                    PSG&nbsp;&nbsp;
                                                    <font-awesome-icon :icon="['fas', 'external-link-alt']"/>
                                                </a>
                                            </div> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="columns" v-if="!site.technologies.length">
                                <div class="column">
                                    <div class="subtitle is-size-5 has-text-weight-light has-text-centered">Sitio no tiene tecnologías móviles</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <b-modal :active.sync="isEditParameterModalActive"
            has-modal-card
            trap-focus
            aria-role="dialog"
            aria-modal>
            <edit-parameter 
                :pop="pop"
                :site="selectedSite"
                :user="user"
                :parameter="parameter"
                :parameter_id="parameter_id"
                />
        </b-modal>
    </div>
</template>

<script>
    import { library } from "@fortawesome/fontawesome-svg-core";
    import { faCircle, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
    // import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
    // import { faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons'
    library.add(faCircle, faExternalLinkAlt);
    export default {
        components: {
            EditParameter: () => import(/* webpackChunkName: "chunks/pop/modals/editParameter"*/'./modals/EditParameter'),
        },

        props : [
            'user',
            'pop',
            'isEditMode',
            'bafi'
        ],

        data() {
            return {
                popData: this.pop,
                selectedSite: null,
                parameter: '',
                isEditParameterModalActive: false,
                parameter_id: null
            }
        },

        watch: {
            pop(val) {
                this.popData = val
            }
        },

        computed: {
            sites() {
                var array = []
                if (this.popData.sites) {
                    this.popData.sites.forEach(function(item) { 
                        array.push(item) 
                    })
                } 
                return array
            },
            sitesFijo() {
                return this.sites ? this.sites.find(elemnent => element.site_type_id == 1) : null
            },
            sitesMovil() {
                return this.sites ? this.sites.find(elemnent => element.site_type_id == 2) : null
            },
            sitesSwitch() {
                return this.sites ? this.sites.find(elemnent => element.site_type_id == 3) : null
            },
            sitesPhone() {
                return this.sites ? this.sites.find(elemnent => element.site_type_id == 4) : null
            },

            technologies() {
                var array = []
                if (this.popData.sites) {
                    this.popData.sites.forEach(function(item) {
                        if (item.technologies.length > 0) { 
                            array.push(item.technologies) 
                        }
                    })
                }
                return array[0]
            },
            tec2g1900() {
                var tec = null
                if (this.technologies) {
                    this.technologies.forEach(element => {
                        if (element.technology_type_id == 1 && element.frequency == 1900) {
                            tec = element
                        }
                    })
                    return tec
                }
            },
            tec3g900() {
                var tec = null
                if (this.technologies) {
                    this.technologies.forEach(element => {
                        if (element.technology_type_id == 2 && element.frequency == 900) {
                            tec = element
                        }
                    })
                    return tec
                }
            },
            tec3g1900() {
                var tec = null
                if (this.technologies) {
                    this.technologies.forEach(element => {
                        if (element.technology_type_id == 2 && element.frequency == 1900) {
                            tec = element
                        }
                    })
                    return tec
                }
            },
            tec4g700() {
                var tec = null
                if (this.technologies) {
                    this.technologies.forEach(element => {
                        if (element.technology_type_id == 3 && element.frequency == 700) {
                            tec = element
                        }
                    })
                    return tec
                }
            },
            tec4g1900() {
                var tec = null
                if (this.technologies) {
                    this.technologies.forEach(element => {
                        if (element.technology_type_id == 3 && element.frequency == 1900) {
                            tec = element
                        }
                    })
                    return tec
                }
            },
            tec4g2600() {
                var tec = null
                if (this.technologies) {
                    this.technologies.forEach(element => {
                        if (element.technology_type_id == 3 && element.frequency == 2600) {
                            tec = element
                        }
                    })
                    return tec
                }
            },

            tec4g3500() {
                var tec = null
                if (this.technologies) {
                    this.technologies.forEach(element => {
                        if (element.technology_type_id == 3 && element.frequency == 3500) {
                            tec = element
                        }
                    })
                    return tec
                }
            },
            
        },

        methods: {
            status(site) {
                let state = 'Inactivo'
                let id = 0

                switch(site.site_type_id) {
                    case 1: // Fijo
                    case 3: // Switch
                    case 4: // Phone
                    case 5: // Repetidor
                        id = site.state_id
                        state = site.state.state
                        break
                    case 2: // Movil
                        site.technologies.forEach(element => {
                            switch (element.state_id) {
                                case 1:
                                    id = element.state_id
                                    state = element.state.state
                                    break
                                case 2:
                                    if (id == 0) {
                                        id = element.state_id
                                        state = element.state.state
                                    }
                                    break
                                case 3:
                                case 4:
                                case 5:
                                case 6:
                                case 7:
                                case 8:
                                case 9:
                                case 10:
                                case 11:
                                case 12:
                                    if (id != 1) {
                                        id = element.state_id
                                        state = element.state.state
                                    }
                                    break
                                case null:
                                default:
                                    break
                            }
                        })
                        break
                }

                return {
                    'id': id,
                    'state': state
                }
            },
        },

        beforeDestroy() {
            this.$eventBus.$off('parameter-updated')
        }

    }
</script>
