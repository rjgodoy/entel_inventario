<template>
    <section class="" style="min-height: 500px;">
        <div class="columns">
            <div class="column has-text-weight-semibold has-text-dark is-size-3 has-text-left">Comsite</div>
        </div>

        <div class="columns is-multiline tile is-ancestor">
            <div class="column is-6 tile is-parent" v-for="data in comsites" :key="data.id">
                <div class="tile is-child box has-backgroung-success has-text-weight-light">
                    <div class="has-text-weight-semibold is-size-4 has-text-centered">Contrato #{{ data.id }}</div>
                    <br/>
                    <div class="columns">
                        <div class="column is-one-fifth">
                            <div class="has-text-weight-normal is-size-6">Operador</div>
                            <div class="has-text-weight-normal is-size-6">Propietario</div>
                            <div class="has-text-weight-normal is-size-6">Celular/Telefono propietario</div>
                            <div class="has-text-weight-normal is-size-6">ROL propiedad</div>
                        </div>
                        <div class="column">
                            <div class="is-size-6">{{ data.operador }}</div>
                            <div class="is-size-6">{{ data.propietario }}</div>
                            <div class="is-size-6">{{ data.celular_propietario }} / {{ data.telefono_propietario }}</div>
                            <div class="is-size-6">{{ data.rol_propiedad ? data.rol_propiedad : 'Sin datos de ROL' }}</div>
                        </div>
                    </div>
                    <!-- <div class="columns" v-if="data.started_at != '1969-12-31'">
                        <div class="column has-text-right is-one-fifth">
                            <div>{{ dateMoment(data.started_at) }}</div>
                            <div class="has-text-weight-normal is-size-7">Fecha inicio</div>
                        </div>
                        <div class="column is-three-fifths">
                            <b-progress type="is-link" :value="percentDate(data.started_at, data.ended_at)" show-value format="percent" size="is-medium"></b-progress>
                        </div>
                        <div class="column has-text-left">
                            <div>{{ dateMoment(data.ended_at) }}</div>
                            <div class="has-text-weight-normal is-size-7">Fecha término</div>
                        </div>
                    </div> -->
                    <div class="has-text-centered has-text-weight-normal is-size-6" style="margin-top: -20px;" v-if="data.started_at != '1969-12-31'">{{ dateFromNow(data.started_at) }}</div>
                    
                </div>
            </div>
        </div>
        <div class="box" v-if="comsites.length == 0">
            <div class="">
                No hay contratos en Comsite asociados a este POP.
            </div>
        </div>
    </section>
</template>

<script>
    var moment = require('moment')
    export default {
        components: {
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
                comsites: []
            }
        },
        mounted() {
            this.getComsite()
        },
        methods: {
            // APIs
            getComsite() {
                axios.get(`/api/comsites/${this.pop.id}`)
                .then((response) => {
                    this.comsites = response.data.data
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Comsite: ' + error);
                });
            },
            dateMoment(dateToFormat) {
                var date = moment(dateToFormat).format('MMMM D YYYY')
                moment.locale('es')
                return date
            },
            dateFromNow(start) {
                var date = moment(start, "YYYY-MM-DD").fromNow()
                moment.locale('es')
                return date
            },
            percentDate(start, end) {
                var s = moment(start, 'YYYY-MM-DD')
                var e = moment(end, 'YYYY-MM-DD')
                var totalTime = e.diff(s, 'hours', true)
                var dateFromStart = moment().diff(s, 'hours', true)
                var percent = dateFromStart * 100 / totalTime
                return -percent
            }
        }
    }
</script>
