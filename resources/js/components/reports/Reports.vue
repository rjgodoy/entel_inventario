<template>
    <section class="section is-marginless">
        <div class="container">
            <div class="columns">
                <!-- <div class="column" is-2>
                    <div class="block">
                        <div class="has-text-centered is-size-5 has-text-weight-semibold">Datos del POP</div>
                    </div>
                    <div class="">
                        <li class="p-2"><b-button expanded>Resumen</b-button></li>
                        <li class="p-2"><b-button expanded>POP</b-button></li>
                        <li class="p-2"><b-button expanded>Sitios</b-button></li>
                        <li class="p-2"><b-button expanded>Tecnologías</b-button></li>
                        <li class="p-2"><b-button expanded>POP Críticos</b-button></li>
                        <li class="p-2"><b-button expanded>Salas</b-button></li>
                        <li class="p-2"><b-button expanded>Proyecto ALBA</b-button></li>
                    </div>
                </div> -->
                <!-- <div class="column is-2">
                    <div class="block">
                        <div class="has-text-centered is-size-5 has-text-weight-semibold">Equipamiento</div>
                    </div>
                    <div class="">
                        <li class="p-2"><b-button expanded>Empalmes</b-button></li>
                        <li class="p-2"><b-button expanded>Líneas Eléctricas</b-button></li>
                        <li class="p-2"><b-button expanded>Grupos Electrógenos</b-button></li>
                        <li class="p-2"><b-button expanded>Plantas Rectificadoras</b-button></li>
                        <li class="p-2"><b-button expanded>Aires Acondicionados</b-button></li>
                        <li class="p-2"><b-button expanded>Estructuras Verticales</b-button></li>
                        <li class="p-2"><b-button expanded>Infraestructuras</b-button></li>
                    </div>
                </div> -->
                
                <div class="column is-2">
                    <div class="block">
                        <div class="has-text-centered is-size-4 has-text-weight-semibold">Contratos</div>
                    </div>
                    <div class="">
                        <li class="p-2"><router-link to="/comsite" class="has-text-weight-normal is-size-5" expanded>Comsites</router-link></li>
                    </div>
                </div>
                <div class="column is-2">
                    <div class="block">
                        <div class="has-text-centered is-size-4 has-text-weight-semibold">Mantenciones</div>
                    </div>
                    <div class="">
                        <li class="p-2"><router-link to="/revisions" class="has-text-weight-normal is-size-5" expanded>Registros de rondas Técnicas</router-link></li>
                    </div>
                </div>

                <!-- <div class="column is-2">
                    <div class="block">
                        <div class="has-text-centered is-size-5 has-text-weight-semibold">Gestión Ambiental</div>
                    </div>
                    <div class="">
                        <li class="p-2"><router-link to="/revisions" expanded>Listado RCAs</router-link></li>
                        <li class="p-2"><router-link to="/revisions" expanded>Zonas de Acopio temporal</router-link></li>
                        <li class="p-2"><router-link to="/revisions" expanded>POP en Zonas Protegidas</router-link></li>
                        <li class="p-2"><router-link to="/revisions" expanded>Plantas Rectificadoras</router-link></li>
                        <li class="p-2"><router-link to="/revisions" expanded>Aires Acondicionados</router-link></li>
                        <li class="p-2"><router-link to="/revisions" expanded>Estructuras Verticales</router-link></li>
                        <li class="p-2"><router-link to="/revisions" expanded>Infraestructuras</router-link></li>
                    </div>
                </div> -->
                
                <!-- <div class="column is-2">
                    <div class="block">
                        <div class="has-text-centered is-size-5 has-text-weight-semibold">Conexiones</div>
                    </div>
                    <div class="">
                        <li class="p-2"><b-button expanded>Comsites</b-button></li>
                        <li class="p-2"><b-button expanded>Trabajos programados</b-button></li>
                        <li class="p-2"><b-button expanded>AESS</b-button></li>
                    </div>
                </div> -->
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
