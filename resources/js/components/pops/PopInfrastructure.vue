<template>
    <div class="section" style="min-height: 500px; margin: auto -48px auto -48px;">
        <!-- <div class="has-text-weight-semibold is-size-4 has-text-centered">PODER</div> -->

        <section class="section has-background-white" v-if="verticalStructures.length">
            <div style="margin: -40px auto -40px auto;">
                <div class="has-text-weight-semibold has-text-white is-size-5 has-text-left">Líneas Eléctricas</div>
                <div class="container">
                    <div class="tile is-ancestor">
                        <div class="tile is-parent" v-for="data in verticalStructures">
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

        <section class="section has-background-light" v-if="infrastructures.length">
            <div style="margin: -40px auto -40px auto;">
                <div class="has-text-weight-semibold has-text-white is-size-5 has-text-left">Transformadores</div>
                <div class="container">
                    <div class="tile is-ancestor">
                        <div class="tile is-parent" v-for="data in infrastructures">
                            <div class="tile is-child box">
                                <div class="has-text-weight-semibold">{{ data.primary_tension }}</div>
                                <div class="has-text-weight-semibold">{{ data.phase_type_phase_type }}</div>
                                <div class="has-text-weight-semibold">{{ data.power }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section" v-if="verticalStructures.length + infrastructures.length == 0">
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
                verticalStructures: [],
                infrastructures: []
            }
        },
        mounted() {
            this.getVerticalStructures()
            this.getInfrastructures()
        },
        methods: {
            // APIs
            getVerticalStructures() {
                axios.get(`/api/verticalStructures/${this.pop.id}`)
                .then((response) => {
                    this.verticalStructures = response.data.data
                    console.log(this.verticalStructures)
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Líneas Eléctricas: ' + error);
                });
            },
            getInfrastructures() {
                axios.get(`/api/infrastructures/${this.pop.id}`)
                .then((response) => {
                    this.infrastructures = response.data.data
                    console.log(this.infrastructures)
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Transformadores: ' + error);
                });
            }
        }
    }
</script>
