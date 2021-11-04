<template>
    <div class="modal-card" style="width: 1000px;">
        <header class="modal-card-head has-text-centered">
            <p class="modal-card-title has-text-weight-bold">Revisión Nº {{ revision.id }} - {{ revision.pop.nombre }}</p>
        </header>
        <section class="modal-card-body">
            <!-- <div class="columns tile is-parent" v-if="revision.images[0]">
                <a :href="revision.images && revision.images[0]['url']" target="_blank" class="column tile">Imágenes</a>
            </div> -->
            <div class="tile is-ancestor">
                <div class="columns is-multiline tile is-parent">
                    <div class="column is-6 tile" v-for="type in types" :key="type.id">
                        <TypeBox :revision=revision :type=type :user=user />
                    </div>
                </div>
            </div>

            <div class="tile is-ancestor">
                <div class="columns is-multiline tile is-parent">
                    <div class="column tile">

                        <div class="box tile is-child">
                            <div class="field pb-2">
                                <div class="is-size-5 has-text-weight-bold has-text-grey title">Imágenes</div>
                            </div>

                            <div class="" v-if="revision.images.length > 0">
                                <div v-for="image in revision.images" :key="image['id']" >
                                    <div class=" mb-1 is-1">
                                        <li class="">
                                            <a :href="image['url']" target="_blank" class="">{{ image['url'] }}</a>
                                        </li>
                                    </div>
                                </div>
                            </div>

                            <div class="" v-if="revision.images.length == 0">
                                <div class="">No hoy imágenes adjuntas</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            
            
        </section>
    </div>
</template>

<script>    
    export default {
        components: {
            TypeBox: () => import(/* webpackChunkName: "chunks/reports/maintenance/typeBox"*/'./TypeBox'),
        },

        props : [
            'revision',
            'user'
        ],

        data() {
            return {
                types: Object,
            }
        },

        mounted() {
            this.getTypes()
        },

        methods: {
            getTypes() {
                axios.get('/api/energyEquipmentRevisionTypes')
                .then(response => {
                    this.types = response.data
                    // console.log(this.types)
                })
            },

            
        },
    }
</script>
