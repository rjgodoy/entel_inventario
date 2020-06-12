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
                                <div class="has-text-weight-normal is-size-6" style="padding-top: 8px;">Escribir detalle aquí...</div>
                            </div>
                        </div>
                        <div class="column is-3">
                            <div class="block">
                                <div class="has-text-weight-bold is-size-5">Fuentes de Información</div>
                                <div class="has-text-weight-normal is-size-6" style="padding-top: 8px;">Escribir detalle aquí...</div>
                            </div>
                            <div class="block">
                                <div class="has-text-weight-bold is-size-5">Documentos de ayuda</div>
                                <a class="has-text-weight-normal is-size-6" 
                                    @click="isModalInfoActive = true" 
                                    style="padding-top: 8px;">
                                    Escribir detalle aquí...
                                </a>
                            </div>
                        </div>
                        <div class="column is-3">
                            <div class="block">
                                <div class="has-text-weight-bold is-size-5">Ultimas Actualizaciones</div>
                                <div class="has-text-weight-normal is-size-6" style="padding-top: 8px;">Escribir detalle aquí...</div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="block">
                                <div class="has-text-weight-bold is-size-5">Contacto</div>
                                <div class="field" style="padding-top: 8px;">
                                    <a class="has-text-weight-normal is-size-6" href="mailto:proyectosinfraestructura@entel.cl">
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
                <a href="http://www.anidalatam.com" target="blank"><img alt="image" class="img-container" src="/img/logo_anida.png" style="width: 100px"/></a>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        components: {
            ModalInfo: () => import(/* webpackChunkName: "chunks/layouts/modals/info"*/'./modals/Info'),
        },

        props: [
            'user'
            // isHoverable: {
            //     type: Boolean,
            //     default: false
            // }
        ],
        data () {
            return {
                isModalInfoActive: false
            }
        },
        computed: {
            
        },
        created () {
        },
        beforeDestroy () {
        },
        methods: {
            
        }
    }
</script>
