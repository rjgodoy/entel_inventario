<template>
    <div>
        <div class="hero is-black-ter">
            <div class="hero-body">
                <div class="container">
                    <div class="columns">
                        <div class="column is-3">
                            <div class="block">
                                <img alt="image" class="img-container" src="/img/iconografia/entel-logo-negativo.png" style="width: 100px;"/>
                            </div>
                            <div class="block">
                                <div class="has-text-weight-bold is-size-5">Inventario Infraestructura</div>
                                <!-- <div class="has-text-weight-normal is-size-6" style="padding-top: 8px;">Escribir detalle aquí...</div> -->
                            </div>
                        </div>
                        <div class="column is-3">
                            <div class="block">
                                <div class="has-text-weight-bold is-size-5">Fuentes de Información</div>
                                <div class="has-text-weight-normal is-size-6 has-text-grey" style="padding-top: 8px; font-style: italic">Proximamente</div>
                            </div>
                            <div class="block">
                                <div class="has-text-weight-bold is-size-5">Documentos de ayuda</div>
                                <a class="has-text-weight-normal is-size-6 has-text-white" 
                                    @click="isModalInfoActive = true" 
                                    style="padding-top: 8px;">
                                    Ver documentos 
                                </a>
                            </div>
                        </div>
                        <div class="column is-3">
                            <div class="block">
                                <div class="has-text-weight-bold is-size-5">Ultimas Actualizaciones</div>
                                <div class="" v-for="lastData in last_updated_data" style="padding-top: 16px;">
                                    <div class="columns is-vcentered">
                                        <div class="column is-3 has-text-centered">
                                            <div class="box has-background-black-ter has-text-white is-shadowless" style="border: solid 0.1rem #cccccc; padding: 4px;">
                                                <div class="is-size-5 has-text-weight-bold">{{ dateSet(lastData.date).day }}</div>
                                                <div class="is-size-7">{{ dateSet(lastData.date).month }}</div>
                                            </div>
                                        </div>
                                        <div class="column is-size-6 has-text-weight-bold">{{ lastData.table }}</div>
                                    </div>
                                </div>                                
                            </div>
                        </div>
                        <div class="column">
                            <div class="block">
                                <div class="has-text-weight-bold is-size-5">Contacto</div>
                                <div class="field" style="padding-top: 8px;">
                                    <a class="has-text-weight-normal is-size-6 has-text-white" href="mailto:proyectosinfraestructura@entel.cl">
                                        <font-awesome-icon :icon="['fas', 'envelope']"/>
                                        <span>&nbsp;proyectosinfraestructura@entel.cl</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <b-modal :active.sync="isModalInfoActive"
            has-modal-card
            trap-focus
            aria-role="dialog"
            aria-modal>
            <ModalInfo :user="user"/>
        </b-modal>

        <hr class="has-background-dark is-marginless"></hr>
        <footer class="has-background-black-bis" style="padding-top: 0.5rem; padding-bottom: 0rem;">
            <div class="has-text-centered">
                <a href="http://www.anidalatam.com" target="blank"><img alt="image" class="img-container" src="/img/logos/logo_anida.png" style="width: 100px"/></a>
            </div>
        </footer>
    </div>
</template>

<script>
    var moment = require('moment')
    import 'moment/locale/es'
    export default {
        components: {
            ModalInfo: () => import(/* webpackChunkName: "chunks/layouts/modals/info"*/'./modals/Info'),
        },

        props: [
            'user',
            'last_updated_data'
            // isHoverable: {
            //     type: Boolean,
            //     default: false
            // }
        ],
        data () {
            return {
                isModalInfoActive: false,
            }
        },

        mounted() {
            moment.locale('es')
        },

        created () {

        },

        methods: {
            dateSet(dateUpdated) {
                return { 
                    'day': moment(dateUpdated, "YYYY-MM-DD hh:mm:ss").format('DD'), 
                    'month': moment(dateUpdated, "YYYY-MM-DD hh:mm:ss").format('MMM').toUpperCase() 
                }
            }
        }
    }
</script>
