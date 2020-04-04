<template>
    <section class="section" style="padding-top: 0px; padding-bottom: 48px;" v-if="powerRectifiers.length">
        <div class="field">
            <div class="has-text-weight-semibold has-text-dark is-size-4 has-text-left">Plantas Rectificadoras</div>
        </div>
        
        <div class="columns tile is-ancestor is-multiline">
            <div class="column is-4 tile is-parent" v-for="data in powerRectifiers">

                <div class="tile is-child box">
                    <div class="columns">
                        <div class="column">
                            <div class="has-text-weight-light is-size-7" style="margin-top: 5px;">Marca</div>
                            <div class="has-text-weight-semibold is-size-5">{{ data.power_rectifier_type ? data.power_rectifier_type.power_rectifier_type : 'Sin información' }}</div>
                            <div class="has-text-weight-light is-size-7" style="margin-top: 5px;">Modelo</div>
                            <div class="has-text-weight-semibold is-size-6">{{ data.power_rectifier_type ? data.power_rectifier_type.power_rectifier_model : 'Sin información' }}</div>
                        </div>
                        <div class="column has-text-right">
                            <font-awesome-icon
                                :icon="['fas', 'random']" 
                                size="3x" 
                                class="has-text-grey-lighter" 
                                style="opacity: 0.5;"/>
                        </div>
                    </div>

                    <div class="columns">
                        <div class="column">
                            <div class="has-text-weight-light is-size-7">Voltaje</div>
                            <div class="has-text-weight-normal is-size-6">{{ data.volt ? data.volt : 'Sin información' }} <span class="is-size-7" v-if="data.volt">V</span></div>
                            <div class="has-text-weight-light is-size-7" style="margin-top: 5px;">Capacidad total</div>
                            <div class="has-text-weight-normal is-size-6">{{ data.capacity ? data.capacity : 'Sin información' }} <span class="is-size-7" v-if="data.capacity">kW</span>
                            </div>
                        </div>
                        <div class="column">
                            <div class="has-text-weight-light is-size-7">Nº módulos</div>
                            <div class="has-text-weight-normal is-size-6">{{ data.modules ? data.modules : 'Sin información' }}</div>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <div class="" v-if="data.room">
                                <div class="has-text-weight-semibold is-size-6">{{ data.room.site.nem_site }} - {{ data.room.name }}</div>
                                <div class="has-text-weight-normal is-size-7">Sitio</div>
                            </div>
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
                powerRectifiers: Array
            }
        },
        mounted() {
            this.getPowerRectifiers()
        },
        computed: {
        },
        methods: {
            getPowerRectifiers() {
                axios.get(`/api/powerRectifiers/${this.pop.id}`)
                .then((response) => {
                    this.powerRectifiers = response.data.data
                    // console.log(this.powerRectifiers)
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Plantas Rectificadoras: ' + error);
                });
            }
        }
    }
</script>
