<template>
    <section class="">
        <!-- TECNOLOGIAS -->
        <!-- ########### -->
        <div class="level has-background-black-ter has-text-white">
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
            <div class="level-item">
                <div class="is-size-7 has-text-weight-bold">3G 3500
                    <span class="has-text-weight-bold is-size-5" :class="tec3g3500 ? 'has-text-eco' : ''">&nbsp;{{ tec3g3500 ? tec3g3500.nem_tech : '-' }}</span>
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
            <div class="level-item">
                <div class="is-size-7 has-text-weight-bold">LTE 3500
                    <span class="has-text-weight-bold is-size-5" :class="tec4g3500 ? 'has-text-eco' : ''">&nbsp;{{ tec4g3500 ? tec4g3500.nem_tech : '-' }}</span>
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
                                <div class="subtitle is-size-4 has-text-weight-bold">{{ site.nem_site }}
                                    <p class="is-size-5 has-text-weight-light" v-if="site.nombre">{{ site.nombre }}</p>
                                </div>
                            </div>
                            <div class="column">
                                <b-taglist attached class="is-right">
                                    <b-tag size="is-medium" class="has-text-weight-bold">
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
                                <div v-for="tech in site.technologies" class="column is-6" v-if="tech">
                                    <!-- <div class="tile is-child box"> -->
                                        <div class="title is-size-6 has-text-weight-normal">{{ tech.nem_tech }}
                                            <div class="subtitle is-size-7 has-text-weight-light">Tecnología</div>
                                        </div>
                                    <!-- </div> -->
                                </div>
                            </div>
                        </div>

                        <div v-if="!site.technologies.length" class="subtitle is-size-6 has-text-weight-light">No tiene tecnologías móviles</div>
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
                return this.technologies ? this.technologies.find(element => element.technology_type_id == 1) : null
            },
            tec3g900() {
                return this.technologies ? this.technologies.find(element => element.technology_type_id == 2) : null
            },
            tec3g1900() {
                return this.technologies ? this.technologies.find(element => element.technology_type_id == 3) : null
            },
            tec3g3500() {
                return this.technologies ? this.technologies.find(element => element.technology_type_id == 4) : null
            },
            tec4g700() {
                return this.technologies ? this.technologies.find(element => element.technology_type_id == 5) : null
            },
            tec4g1900() {
                return this.technologies ? this.technologies.find(element => element.technology_type_id == 6) : null
            },
            tec4g2600() {
                return this.technologies ? this.technologies.find(element => element.technology_type_id == 7) : null
            },
            tec4g3500() {
                return this.technologies ? this.technologies.find(element => element.technology_type_id == 8) : null
            },
        },
        mounted() {
        },
        methods: {
        }

    }
</script>
