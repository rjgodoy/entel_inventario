<template>
    <section class="">
        <!-- CARACTERISTICAS -->
        <!-- ############### -->
        <div class="hero is-bold" :class="heroBackground">
            <div class="hero-body" style="padding-top: ">
                <nav class="level">
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="is-size-5 has-text-weight-semibold">{{ popAttentionPriority }}</p>
                            <p class="is-size-7 has-text-weight-semibold">PRIORIDAD ATENCION</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="is-size-5 has-text-weight-semibold">{{ popDependences }}</p>
                            <p class="is-size-7 has-text-weight-semibold">DEPENDENCIAS DIRECTAS</p>
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
                            <p class="is-size-5 has-text-weight-semibold">{{ popCategory ? popCategory : '-' }}</p>
                            <p class="is-size-7 has-text-weight-semibold">CLASIFICACION PLANIFICACION</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="is-size-5 has-text-weight-semibold">{{ popAttentionType }}</p>
                            <p class="is-size-7 has-text-weight-semibold">TIPO ATENCION</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="is-size-5 has-text-weight-semibold">{{ pop.theoretical_autonomy ? pop.theoretical_autonomy : '-' }} <span class="is-size-6">hrs.</span></p>
                            <p class="is-size-7 has-text-weight-semibold">AUTONOMIA TEORICA</p>
                        </div>
                    </div>
                </nav>
            </div>
        </div>

        <!-- MAPA -->
        <!-- ############### -->
        <div class="card">
            <div class="map-container">
                <pop-map
                    :user="user"
                    :classification="popClassification"
                    :popMaster="pop"
                    :darkMode="darkMode"
                ></pop-map>
            </div>
            <div class="card-content">
                <div class="columns">
                    <div class="column is-8">
                        <div class="is-size-5 has-text-weight-semibold">{{ pop.direccion }}</div>
                        <div class="is-size-6 has-text-weight-normal">Comuna de {{ pop.comuna ? pop.comuna.nombre_comuna : '' }}</div>
                        <div class="is-size-7 has-text-weight-normal">
                            Zona {{ pop.comuna ? pop.comuna.zona.nombre_zona : '' }} - CRM {{ pop.comuna ? pop.comuna.zona.crm.nombre_crm : '' }}
                        </div>
                    </div>

                    <div class="column">
                        <div class="level">
                            <div class="level-item">
                                <div class="is-size-5 has-text-weight-semibold">{{ pop.latitude }}
                                    <p class="is-size-6 has-text-weight-light">Latitud</p>
                                </div>
                            </div>
                            <div class="level-item">
                                <div class="is-size-5 has-text-weight-semibold">{{ pop.longitude }}
                                    <p class="is-size-6 has-text-weight-light">Longitud</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    // const PopMap = () => ({
    //     // The component to load (should be a Promise)
    //     component: import('../maps/PopMapView'),
    //     // A component to use while the async component is loading
    //     // loading: LoadingComponent,
    //     // A component to use if the load fails
    //     // error: ErrorComponent,
    //     // Delay before showing the loading component. Default: 200ms.
    //     delay: 500,
    //     // The error component will be displayed if a timeout is
    //     // provided and exceeded. Default: Infinity.
    //     timeout: 3000
    // })

    import PopMap from '../maps/PopMapView';
    var moment = require('moment')
    export default {
        components: {
            PopMap,
            // PopMap: () => import('../maps/PopMapView'),
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
            }
        },
        mounted() {
        },
        computed: {
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
            }
        }
    }
</script>
