<template>
    <section class="">
        <!-- TECNOLOGIAS -->
        <!-- ########### -->
        <div class="level has-background-grey has-text-white">
            <div class="level-item">
                <div class="is-size-7 has-text-weight-bold">2G 1900
                    <span class="has-text-weight-bold is-size-5" :class="tec2g1900 ? 'has-text-eco' : ''">&nbsp;{{ tec2g1900 ? tec2g1900.nem_tech : '-' }}</span>
                </div>
            </div>

            <div class="is-divider-vertical" style="height: 64px;"></div>

            <div class="level-item">
                <div class="is-size-7 has-text-weight-bold">3G 900
                    <span class="has-text-weight-bold is-size-5" :class="tec3g900 ? 'has-text-eco' : ''">&nbsp;{{ tec3g900 ? tec3g900.nem_tech : '-' }}</span>
                </div>
            </div>
            <div class="level-item">
                <div class="is-size-7 has-text-weight-bold">3G 1900
                    <span class="has-text-weight-bold is-size-5" :class="tec3g1900 ? 'has-text-eco' : ''">&nbsp;{{ tec3g1900 ? tec3g1900.nem_tech : '-' }}</span>
                </div>
            </div>

            <div class="is-divider-vertical" style="height: 64px;"></div>

            <div class="level-item">
                <div class="is-size-7 has-text-weight-bold">LTE 700
                    <span class="has-text-weight-bold is-size-5" :class="tec4g700 ? 'has-text-eco' : ''">&nbsp;{{ tec4g700 ? tec4g700.nem_tech : '-' }}</span>
                </div>
            </div>
            <div class="level-item">
                <div class="is-size-7 has-text-weight-bold">LTE 1900
                    <span class="has-text-weight-bold is-size-5" :class="tec4g1900 ? 'has-text-eco' : ''">&nbsp;{{ tec4g1900 ? tec4g1900.nem_tech : '-' }}</span>
                </div>
            </div>
            <div class="level-item">
                <div class="is-size-7 has-text-weight-bold">LTE 2600
                    <span class="has-text-weight-bold is-size-5" :class="tec4g2600 ? 'has-text-eco' : ''">&nbsp;{{ tec4g2600 ? tec4g2600.nem_tech : '-' }}</span>
                </div>
            </div>

            <div class="is-divider-vertical" style="height: 64px;"></div>

            <div class="level-item">
                <div class="is-size-7 has-text-weight-bold">BAFI
                    <span class="has-text-weight-bold is-size-6" :class="bafi ? 'has-text-eco' : ''">
                        &nbsp;{{ bafi ? bafi.tecA + ' - ' + bafi.tecB + ' - ' + bafi.tecC : '-' }}
                    </span>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="tile is-ancestor columns is-multiline">
                <div class="tile is-parent column is-4" v-for="site in sites">
                    <div class="tile is-child box">
                        <div class="columns">
                            <div class="column is-8">
                                <div class="title is-size-6 has-text-weight-normal">Sitio</div>
                                <div class="subtitle is-size-4 has-text-weight-bold">
                                    {{ site.nem_site }}
                                    <p class="is-size-5 has-text-weight-normal" v-if="site.nombre">{{ site.nombre }}</p>
                                </div>
                            </div>
                            <div class="column">
                                <b-taglist attached class="is-right">
                                    <b-tag 
                                        size="is-medium" 
                                        class="has-text-weight-bold"
                                        :class="site.site_type_id == 1 ? 'is-smart' : 
                                            (site.site_type_id == 2 ? 'is-info' : 
                                                (site.site_type_id == 3 ? 'is-success' : 'is-positive'))">
                                        {{ site.site_type.site_type.toUpperCase() }}
                                    </b-tag>
                                    <!-- <b-tag type="is-positive" size="is-normal" class="has-text-weight-bold">
                                        {{ site.classification_type ? site.classification_type.classification_type : '' }}
                                    </b-tag> -->
                                </b-taglist>
                            </div>
                        </div>

                        <div class="columns has-text-centered">
                            <div class="column">
                                <div class="title is-size-4 has-text-weight-bold">{{ site.classification_type.classification_type }}</div>
                                <div class="subtitle is-size-7 has-text-weight-normal">Categoría</div>
                            </div>
                            <div class="column">
                                <div class="title is-size-4 has-text-weight-bold">{{ site.attention_priority_type.attention_priority_type }}</div>
                                <div class="subtitle is-size-7 has-text-weight-normal">Prioridad atención</div>
                            </div>
                        </div>
                        
                        <div class="is-divider" data-content="TECNOLOGIAS" style="margin: 10px auto 10px auto"></div>

                        <div class="" style="padding-top: 20px;">
                            <div class="columns is-multiline">
                                <div v-for="tech in site.technologies" class="column is-4 has-text-centered" v-if="tech">
                                    <!-- <div class="tile is-child box"> -->
                                        <div class="title is-size-5 has-text-weight-normal">{{ tech.nem_tech }}
                                            <div class="subtitle is-size-6 has-text-weight-light">Tecnología</div>
                                        </div>
                                    <!-- </div> -->
                                </div>
                            </div>
                        </div>

                        <div v-if="!site.technologies.length" class="subtitle is-size-5 has-text-weight-light">Sitio no tiene tecnologías móviles</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        components: {
        },
        props : [
            'pop'
        ],
        data() {
            return {
            }
        },
        computed: {
            sites() {
                var array = []
                if (this.pop.sites) {
                    this.pop.sites.forEach(function(item) { 
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
                if (this.pop.sites) {
                    this.pop.sites.forEach(function(item) {
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
        },
        mounted() {
        },
        methods: {
        }

    }
</script>
