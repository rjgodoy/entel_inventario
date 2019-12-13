<template>
    <div class="section" style="min-height: 500px; margin: auto -48px auto -48px;">
        <!-- <div class="has-text-weight-semibold is-size-4 has-text-centered">PODER</div> -->

        <section class="section has-background-white" v-if="airConditioners.length">
            <div style="margin: -40px auto -40px auto;">
                <div class="has-text-weight-semibold has-text-white is-size-5 has-text-left">Aires Acondicionados</div>
                <div class="container">
                    <div class="tile is-ancestor">
                        <div class="tile is-parent" v-for="data in airConditioners">
                            <div class="tile is-child box">
                                <div class="has-text-weight-semibold">{{ data.distance }}</div>
                                <div class="has-text-weight-semibold">{{ data.electric_line_type_id }}</div>
                                <div class="has-text-weight-semibold">{{ data.phase_type_id }}</div>
                                <div class="has-text-weight-semibold">{{ data.transformer_id }}</div>
                                <div class="has-text-weight-semibold">{{ data.volt }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section has-background-primary" v-if="airConditioners.length == 0">
            <div class="container">
                <div class="box">
                    No hay datos de energía.
                </div>
            </div>
        </section>
    </div>
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
        ],
        data() {
            return {
                airConditioners: []   
            }
        },
        mounted() {
            this.getAirConditioners()
        },
        methods: {
            // APIs
            getAirConditioners() {
                axios.get(`/api/airConditioners/${this.pop.id}`)
                .then((response) => {
                    this.airConditioners = response.data.data
                    console.log(this.airConditioners)
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Líneas Eléctricas: ' + error);
                });
            }
        }
    }
</script>
