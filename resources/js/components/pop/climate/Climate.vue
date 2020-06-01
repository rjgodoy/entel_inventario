<template>
    <div>
        <section class="" v-if="airConditioners.length">
            <div class="columns">
                <div class="column has-text-weight-semibold has-text-dark is-size-3 has-text-left">Clima</div>
            </div>
            
            <div :class="airConditioners.length > 4 ? '' : 'container'">
                <div class="columns is-multiline tile is-ancestor">
                    <div class="column is-4 tile is-parent" v-for="airConditioner in airConditioners" :key="airConditioner.id">
                        <air-conditioner :airConditioner="airConditioner"></air-conditioner>
                    </div>
                </div>
            </div>
        </section>

        <section class="section" style="padding-top: 0px; padding-bottom: 48px;" v-if="airConditioners.length == 0">
            <div class="container">
                <div class="box">
                    POP no tiene equipos de clima.
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import AirConditioner from './AirConditioner'
    export default {
        components: {
            AirConditioner
        },
        props : [
            'user',
            'pop',
            'bodyBackground',
            'boxBackground',
            'primaryText',
            'secondaryText',
        ],
        data() {
            return {
                airConditioners: Array,
                can: null  
            }
        },
        mounted() {
            this.getAirConditioners()
        },
        methods: {
            // APIs
            getAirConditioners() {
                axios.get(`/api/airConditioners/${this.pop.id}?api_token=${this.user.api_token}`)
                .then((response) => {
                    this.airConditioners = response.data.airConditioner
                    this.can = response.data.can
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Líneas Eléctricas: ' + error);
                });
            }
        }
    }
</script>
