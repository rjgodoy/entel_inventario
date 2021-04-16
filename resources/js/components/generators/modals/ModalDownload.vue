<template>
    <div class="modal-card" style="width: auto">
        <div class="box">
            <section>
                <div class="block">
                    <div class="is-size-5">Escoger planillas a descargar</div>
                </div>

                <div class="field">
                    <b-radio v-model="sheet"
                        name="generators"
                        native-value="0">
                        <div class="is-size-6">Datos generadores</div>
                        <div class="is-size-7">Planilla con datos dinámicos de generadores.</div>
                    </b-radio>
                </div>
                <div class="field">
                    <b-radio v-model="sheet"
                        name="generators"
                        native-value="1">
                        <div class="is-size-6">Inventario generadores</div>
                        <div class="is-size-7">Planilla con datos de inventario de generadores</div>
                    </b-radio>
                </div>
                <b-button @click="download()" type="is-link">Download</b-button>
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
            sheet: 0
        }
    },

    methods: {
        download() {
            this.$parent.close()
            this.$emit('clicked', this.sheet)
        }
    }
}
</script>
