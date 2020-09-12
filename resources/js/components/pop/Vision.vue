<template>
    <section class="is-paddingless">
        <iframe height='610' src='https://my.matterport.com/show/?m=wHzxQwayb42' frameborder='0' allowfullscreen allow='xr-spatial-tracking' style="width: 100%;"></iframe>
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
