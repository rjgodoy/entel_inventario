<template>
    <section class="section is-marginless">
        <div class="container">
            <div class="columns">
                <div class="column">
                    <div class="block">
                        <div class="is-size-5">PLANILLAS</div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <div class="block">
                                <div class="is-size-5 has-text-weight-semibold">Datos del POP</div>
                            </div>
                            <div class="">
                                <li><b-button>Resumen</b-button></li>
                                <li><b-button>POP</b-button></li>
                                <li><b-button>Sitios</b-button></li>
                                <li><b-button>Tecnologías</b-button></li>
                                <li><b-button>POP Críticos</b-button></li>
                                <li><b-button>Salas</b-button></li>
                                <li><b-button>Proyecto ALBA</b-button></li>
                            </div>
                        </div>
                        <div class="column">
                            <div class="block">
                                <div class="is-size-5 has-text-weight-semibold">Equipamiento</div>
                            </div>
                            <div class="">
                                <li><b-button>Empalmes</b-button></li>
                                <li><b-button>Líneas Eléctricas</b-button></li>
                                <li><b-button>Grupos Electrógenos</b-button></li>
                                <li><b-button>Plantas Rectificadoras</b-button></li>
                                <li><b-button>Aires Acondicionados</b-button></li>
                                <li><b-button>Estructuras Verticales</b-button></li>
                                <li><b-button>Infraestructuras</b-button></li>
                            </div>
                        </div>
                        <div class="column">
                            <div class="block">
                                <div class="is-size-5 has-text-weight-semibold">Gestión Ambiental</div>
                            </div>
                            <div class="">
                                <li><b-button>POP en Zonas Protegidas</b-button></li>
                                <li><b-button>Listado RCAs</b-button></li>
                                <li><b-button>Zonas de Acopio temporal</b-button></li>
                                <li><b-button>Plantas Rectificadoras</b-button></li>
                                <li><b-button>Aires Acondicionados</b-button></li>
                                <li><b-button>Estructuras Verticales</b-button></li>
                                <li><b-button>Infraestructuras</b-button></li>
                            </div>
                        </div>
                        <div class="column">
                            <div class="block">
                                <div class="is-size-5 has-text-weight-semibold">Contratos</div>
                            </div>
                            <div class="">
                                <li><b-button>Comsites</b-button></li>
                            </div>
                        </div>
                        <div class="column">
                            <div class="block">
                                <div class="is-size-5 has-text-weight-semibold">Conexiones</div>
                            </div>
                            <div class="">
                                <li><b-button>Comsites</b-button></li>
                                <li><b-button>Trabajos programados</b-button></li>
                                <li><b-button>AESS</b-button></li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column is-2" >
                    <div class="block">
                        <div class="is-size-5">PLANILLAS PERSONALIZADAS</div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <div class="block">
                                <div class="is-size-5 has-text-weight-semibold">Datos del POP</div>
                            </div>
                            <div class="">
                                <li><b-button>ALBA</b-button></li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
// import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
// import { faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons'
library.add(faSearch, faBars);

export default {
    props : [
        'user',
        'darkMode'
    ],

    data() {
        return {
        }
    },

    created() {
    },

    mounted() {
    },

    methods: {
    }
}
</script>
