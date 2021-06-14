<template>
    <div class="modal-card" style="width: auto">
        <div class="box">
            <section>
                <div class="block">
                    <div class="is-size-5">Selecciona planillas a descargar</div>
                    <b-tag v-if="isWarning" type="is-default is-light">⚠️ Considerar mayor tiempo de descarga.</b-tag>
                </div>

                <div class="field">
                    <b-checkbox v-model="cells.resume">
                        <div class="is-size-6">Resumen</div>
                        <div class="is-size-7">Planilla resumen de POPs y sitios más importantes.</div>
                    </b-checkbox>
                </div>
                <div class="field">
                    <b-checkbox v-model="cells.pops">
                        <div class="is-size-6">POPs</div>
                        <div class="is-size-7">Planilla desglosada por POP.</div>
                    </b-checkbox>
                </div>
                <div class="field">
                    <b-checkbox v-model="cells.sites">
                        <div class="is-size-6">Sitios</div>
                        <div class="is-size-7">Planilla desglosada por Sitios y sus tecnologías.</div>
                    </b-checkbox>
                </div>
                <!-- <div class="field">
                    <b-checkbox v-model="cells.technologies">
                        <div>Tecnologías</div>
                    </b-checkbox>
                </div> -->
                <b-button @click="download()" type="is-link" :disabled="disableDownload">Download</b-button>
            </section>
        </div>
    </div>
</template>

<script>   
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrafficLight, faChartLine, faFileInvoice, faBezierCurve, faCalculator } from "@fortawesome/free-solid-svg-icons";
// import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { faFolderOpen as farFolderOpen } from '@fortawesome/free-regular-svg-icons'
library.add(faTrafficLight, faChartLine, faFileInvoice, faBezierCurve, faCalculator, farFolderOpen); 

export default {
    data() {
        return {
            cells: {
                resume: true,
                pops: false,
                sites: false,
                // technologies: false
            }
        }
    },

    computed: {
        disableDownload() {
            return !this.cells.resume 
            && !this.cells.pops 
            && !this.cells.sites 
            // && this.cells.technologies
        },

        isWarning() {
            return (this.cells.resume + this.cells.pops + this.cells.sites > 1)
        }
    },

    mounted() {

    },

    methods: {
        download() {
            this.$parent.close()
            this.$emit('clicked', this.cells)
        }
    }
}
</script>
