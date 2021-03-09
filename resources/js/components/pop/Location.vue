<template>
    <section class="">

        <div class="card is-shadowless">
            
            <div class="card-content is-paddingless">
                <div class="map-container">
                    <pop-map
                        :user="user"
                        :classification="popClassification"
                        :popMaster="pop"
                        :darkMode="darkMode"
                    />
                </div>
            </div>
            
            <div class="card-content">
                <div class="columns">
                    <div class="column is-8">
                        <div class="is-size-5 has-text-weight-semibold" v-if="!isEditMode">{{ pop.direccion }}</div>
                        <b-input class="is-size-5 has-text-weight-semibold" v-model="address" v-if="isEditMode"></b-input>

                        <div class="is-size-6 has-text-weight-normal">Comuna de {{ pop.comuna ? pop.comuna.nombre_comuna : '' }}</div>
                        <div class="is-size-7 has-text-weight-normal">
                            Zona {{ pop.zona ? pop.zona.nombre_zona : '' }} - CRM {{ pop.zona ? pop.zona.crm.nombre_crm : '' }}
                        </div>
                    </div>

                    <div class="column">
                        <div class="columns is-vcentered">
                            <div class="column">
                                <div class="is-size-5 has-text-weight-semibold" v-if="!isEditMode">{{ pop.latitude }}</div>
                                <b-input class="is-size-5 has-text-weight-semibold" v-model="latitude" v-if="isEditMode"></b-input>
                                <div class="is-size-6 has-text-weight-light">Latitud</div>
                            </div>
                            <div class="column">
                                <div class="is-size-5 has-text-weight-semibold" v-if="!isEditMode">{{ pop.longitude }}</div>
                                <b-input class="is-size-5 has-text-weight-semibold" v-model="longitude" v-if="isEditMode"></b-input>
                                <div class="is-size-6 has-text-weight-light">Longitud</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    var moment = require('moment')
    export default {
        components: {
            PopMap: () => import(/* webpackChunkName: "chunks/maps/popMapView"*/'../maps/PopMapView'),
        },
        props : [
            'user',
            'pop',
            'isEditMode',
            'bodyBackground',
            'boxBackground',
            'primaryText',
            'secondaryText',
            'darkMode'
        ],
        data() {
            return {
                address: this.pop.direccion,
                latitude: this.pop.latitude,
                longitude: this.pop.longitude
            }
        },
        mounted() {
        },

        watch: {
            pop(val) {
                this.address = val.direccion
                this.latitude = val.latitude
                this.longitude = val.longitude
            },

            isEditMode(val){
                if(this.address != this.pop.direccion && val == false) {
                    this.updateParameter('direccion', this.address)
                }
                if(this.latitude != this.pop.latitude && val == false) {
                    this.updateParameter('latitude', this.latitude)
                }
                if(this.longitude != this.pop.longitude && val == false) {
                    this.updateParameter('longitude', this.longitude)
                }
            }
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

        //     popAttentionPriority() {
        //         var i = 10; var cat
        //         if (this.pop.sites) {
        //             this.pop.sites.forEach(function(item) {
        //                 if (item.attention_priority_type_id && item.attention_priority_type_id < i) { 
        //                     i = item.attention_priority_type_id
        //                     cat = item.attention_priority_type.attention_priority_type
        //                 }
        //             })
        //         }
        //         return cat
        //     },

        //     popCategory() {
        //         var i = 10; var cat
        //         if (this.pop.sites) {
        //             this.pop.sites.forEach(function(item) {
        //                 if (item.category_type_id && item.category_type_id < i) { 
        //                     i = item.category_type_id
        //                     cat = item.category_type.category_type
        //                 }
        //             })
        //         }
        //         return cat
        //     },

        //     popDependences() {
        //         var dependences = 0
        //         if (this.pop.sites) {
        //             this.pop.sites.forEach(function(item) {
        //                 dependences = dependences + item.dependences.length
        //             })
        //         }
        //         return dependences
        //     },

        //     popAttentionType() {
        //         var i = 10; var cat
        //         if (this.pop.sites) {
        //             this.pop.sites.forEach(function(item) {
        //                 if (item.attention_type_id && item.attention_type_id < i) { 
        //                     i = item.attention_type_id
        //                     cat = item.attention_type.attention_type
        //                 }
        //             })
        //         }
        //         return cat
        //     },
        //     heroBackground() {
        //         return this.popClassification.id == 1 ? 'is-info' : (this.popClassification.id == 2 ? 'is-warning' : (this.popClassification.id == 3 ? 'is-primary' : (this.popClassification.id == 4 ? 'is-smart' : (this.popClassification.id == 5 ? 'is-eco' : 'is-white'))))
        //     }
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
        }
    }
</script>
