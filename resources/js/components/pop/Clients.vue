<template>
    <section class="" style="min-height: 500px;">
        <div class="columns">
            <div class="column has-text-weight-semibold has-text-dark is-size-3 has-text-left">Clientes Empresas</div>
        </div>

        <div class="columns is-multiline tile is-ancestor">
            <div class="column is-6 tile is-parent" v-for="data in clients" :key="data.id">
                <div class="tile is-child box has-backgroung-success has-text-weight-light">
                    <div class="has-text-weight-semibold is-size-4 has-text-centered">Cliente #{{ data.id }}</div>
                    <br/>
                    <div class="columns">
                        <div class="column is-4">
                            <div class="has-text-weight-normal is-size-6">Cliente Empresa</div>
                            <div class="has-text-weight-normal is-size-6">Codigo Servicio</div>
                            <div class="has-text-weight-normal is-size-6">Tipo Acceso</div>
                            <div class="has-text-weight-normal is-size-6">Team Acceso</div>
                        </div>
                        <div class="column">
                            <div class="is-size-6">{{ data.name }}</div>
                            <div class="is-size-6">{{ data.service_code ? data.service_code : "" }}</div>
                            <div class="is-size-6">{{ data.access_type ? data.access_type.type : "" }}</div>
                            <div class="is-size-6">{{ data.access_team ? data.access_team : "" }}</div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
        <div class="box" v-if="clients.length == 0">
            <div class="">
                No hay clientes empresas asociados a este POP.
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
                clients: this.pop.client_companies
            }
        },
        mounted() {
            // this.getComsite()
        },
        methods: {
            // APIs
            // getComsite() {
            //     axios.get(`/api/clients/${this.pop.id}`)
            //     .then((response) => {
            //         this.clients = response.data.data
            //     })
            //     .catch((error) => {
            //         console.log('Error al traer los datos de Comsite: ' + error);
            //     });
            // },
            // dateMoment(dateToFormat) {
            //     var date = moment(dateToFormat).format('MMMM D YYYY')
            //     moment.locale('es')
            //     return date
            // },
            // dateFromNow(start) {
            //     var date = moment(start, "YYYY-MM-DD").fromNow()
            //     moment.locale('es')
            //     return date
            // },
            // percentDate(start, end) {
            //     var s = moment(start, 'YYYY-MM-DD')
            //     var e = moment(end, 'YYYY-MM-DD')
            //     var totalTime = e.diff(s, 'hours', true)
            //     var dateFromStart = moment().diff(s, 'hours', true)
            //     var percent = dateFromStart * 100 / totalTime
            //     return -percent
            // }
        }
    }
</script>
