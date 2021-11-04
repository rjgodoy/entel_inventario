<template>
    <section class="">
        <div class="" v-if="airConditioners.length">
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
        </div>

        <div class="has-text-centered" v-if="!airConditioners.length">
            <div class="is-size-4 has-text-weight-light has-text-grey">No hay equipos de clima registrados en este POP</div>
        </div>
    </section>
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
                axios.get(`/api/airConditioners/${this.pop.id}`)
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
