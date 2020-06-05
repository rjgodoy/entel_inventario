<template>
    <div class="">
        <!-- TECNOLOGIAS -->
        <!-- ########### -->
        <section class="section is-tech is-bold has-text-white" style="padding-top: 20px; padding-bottom: 20px;">
            <div class="columns">
                <div class="column has-text-weight-semibold has-text-white is-size-3 has-text-left">Tecnologías</div>
            </div>
            <div class="level">
                <div class="level-item">
                    <div>
                        <div class="is-size-7 has-text-weight-bold has-text-light">2G 1900</div>
                        <div class="is-size-5 has-text-weight-bold" :class="tec2g1900 ? 'has-text-eco' : ''">{{ tec2g1900 ? tec2g1900.nem_tech : '-' }}</div>
                    </div>
                </div>

                <div class="is-divider-vertical" style="height: 64px;"></div>

                <div class="level-item">
                    <div>
                        <div class="is-size-7 has-text-weight-bold">3G 900</div>
                        <div class="is-size-5 has-text-weight-bold" :class="tec3g900 ? 'has-text-eco' : ''">{{ tec3g900 ? tec3g900.nem_tech : '-' }}</div>
                    </div>
                </div>
                <div class="level-item">
                    <div>
                        <div class="is-size-7 has-text-weight-bold">3G 1900</div>
                        <div class="is-size-5 has-text-weight-bold" :class="tec3g1900 ? 'has-text-eco' : ''">{{ tec3g1900 ? tec3g1900.nem_tech : '-' }}</div>
                    </div>
                </div>

                <div class="is-divider-vertical" style="height: 64px;"></div>

                <div class="level-item">
                    <div>
                        <div class="is-size-7 has-text-weight-bold">LTE 700</div>
                        <div class="is-size-5 has-text-weight-bold" :class="tec4g700 ? 'has-text-eco' : ''">{{ tec4g700 ? tec4g700.nem_tech : '-' }}</div>
                    </div>
                </div>
                <div class="level-item">
                    <div>
                        <div class="is-size-7 has-text-weight-bold">LTE 1900</div>
                        <div class="is-size-5 has-text-weight-bold" :class="tec4g1900 ? 'has-text-eco' : ''">{{ tec4g1900 ? tec4g1900.nem_tech : '-' }}</div>
                    </div>
                </div>
                <div class="level-item">
                    <div>
                        <div class="is-size-7 has-text-weight-bold">LTE 2600</div>
                        <div class="is-size-5 has-text-weight-bold" :class="tec4g2600 ? 'has-text-eco' : ''">{{ tec4g2600 ? tec4g2600.nem_tech : '-' }}</div>
                    </div>
                </div>

                <div class="is-divider-vertical" style="height: 64px;"></div>

                <div class="level-item">
                    <div>
                        <div class="is-size-7 has-text-weight-bold">BAFI</div>
                        <div class="has-text-weight-bold is-size-5" :class="bafi ? 'has-text-eco' : ''">
                            {{ bafi ? bafi.tecA + ' - ' + bafi.tecB + ' - ' + bafi.tecC : '-' }}
                        </div>
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
                                <div class="is-size-7 has-text-weight-normal">Nemonico</div>
                                <div class="is-size-4 has-text-weight-bold">{{ site.nem_site }}</div>
                                <div class="is-size-7 has-text-weight-normal" style="padding-top: 4px;">Nombre</div>
                                <div class="is-size-5 has-text-weight-light" v-if="site.nombre">{{ site.nombre }}</div>
                            </div>
                            <div class="column">
                                <b-taglist attached class="is-right">
                                    <b-tag type="is-dark" class="has-text-weight-normal">
                                        Tipo Sitio
                                    </b-tag>
                                    <b-tag 
                                        class="has-text-weight-bold has-text-white"
                                        :class="site.site_type_id == 1 ? 'is-smart' : 
                                            (site.site_type_id == 2 ? 'is-positive' : 
                                                (site.site_type_id == 3 ? 'is-eco' : 'is-warning'))">
                                        {{ site.site_type.site_type.toUpperCase() }}
                                    </b-tag>
                                </b-taglist>
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
                                    @click="isEditParameterModalActive = true; parameter = 'classification_type_id'; selectedSite = site" 
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
                                    @click="isEditParameterModalActive = true; parameter = 'attention_priority_type_id'; selectedSite = site" 
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
                            <div class="columns is-multiline">
                                <div v-for="tech in site.technologies" class="column is-4 has-text-centered" v-if="tech">
                                    <div class="is-size-6 has-text-weight-normal">{{ tech.nem_tech }}
                                        <div class="subtitle is-size-6 has-text-weight-light">Tecnología</div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div v-if="!site.technologies.length" class="subtitle is-size-5 has-text-weight-light has-text-centered">Sitio no tiene tecnologías móviles</div>
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
                />
        </b-modal>
    </div>
</template>

<script>
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
                isEditParameterModalActive: false
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
            
        },

        beforeDestroy() {
            this.$eventBus.$off('parameter-updated')
        }

    }
</script>
