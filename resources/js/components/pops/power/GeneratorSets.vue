<template>
    <section class="section" style="padding-top: 0px; padding-bottom: 48px;" v-if="generatorSets.length">
        <div class="field">
            <div class="has-text-weight-semibold has-text-dark is-size-4 has-text-left">Grupos Electrógenos</div>
        </div>
        
        <div class="columns tile is-ancestor is-multiline">
            <div class="column is-6 tile is-parent" v-for="data in generatorSets">
                <div class="tile is-child box">

                    <div class="columns">
                        <div class="column">
                            <div class="has-text-weight-light is-size-7">Marca</div>
                            <div class="has-text-weight-semibold is-size-5 ">{{ data.generator_set_type ? data.generator_set_type.generator_set_type : 'Sin información' }}</div>
                            <div class="has-text-weight-light is-size-7" style="margin-top: 5px;">Modelo</div>
                            <div class="has-text-weight-semibold is-size-6">{{ data.generator_set_type ? data.generator_set_type.generator_set_model : 'Sin información' }}</div>
                        </div>
                        <div class="column has-text-right">
                            <font-awesome-icon
                                :icon="['fas', 'charging-station']" 
                                size="3x" 
                                class="has-text-grey-lighter" 
                                style="opacity: 0.5;"/>
                        </div>
                    </div>

                    <div class="columns">
                        <div class="column is-4">
                            <div class="has-text-weight-light is-size-7">Potencia</div>
                            <div class="has-text-weight-normal is-size-6">{{ data.power ? data.power : 'Sin información' }} <span class="is-size-7" v-if="data.power">kW</span></div>
                        </div>
                        <div class="column">
                            <!-- <div class="has-text-weight-light is-size-7">Credenciales de acceso</div> -->
                            <!-- <div class="has-text-weight-normal is-size-6">{{ data.access_credentials ? data.access_credentials : 'Sin credenciales' }}</div> -->
                        </div>
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
            'pop',
            'bodyBackground',
            'boxBackground',
            'primaryText',
            'secondaryText',
            'darkMode'
        ],
        data() {
            return {
                generatorSets: Array
            }
        },
        mounted() {
            this.getGeneratorGroups()
        },
        computed: {
        },
        methods: {
            getGeneratorGroups() {
                axios.get(`/api/generatorSets/${this.pop.id}`)
                .then((response) => {
                    this.generatorSets = response.data.data
                    // console.log(this.generatorSets)
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Plantas Rectificadoras: ' + error);
                });
            }
        }
    }
</script>
