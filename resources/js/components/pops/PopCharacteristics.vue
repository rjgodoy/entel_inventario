<template>

    <section class="section" style="min-height: 500px;">
        <div class="" :class="bodyBackground">
            <div class="column">
                <!-- CUADROS DE INFORMACION -->
                <div class="tile is-ancestor">
                    <div class="tile is-parent">
                        <div class="tile is-child box">

                            <div class="is-size-6 title has-text-weight-semibold" :class="primaryText">NEGOCIO FIJO</div>
                            <div class="field">
                                <b-radio 
                                    v-model="pop.pe_3g"
                                    name="pe_3g"
                                    :disabled="pop.pe_3g ? false : true"
                                    >
                                    <label :class="pop.pe_3g ? 'has-text-weight-semibold' : ''" >PE 3G</label>
                                </b-radio>
                            </div>
                            <div class="field">
                                <b-radio 
                                    v-model="mpls"
                                    name="mpls"
                                    :disabled="pop.mpls ? false : true"
                                    native-value="true"
                                    >
                                    <label :class="pop.mpls ? 'has-text-weight-semibold' : ''" >MPLS</label>
                                </b-radio>
                            </div>
                            <div class="field">
                                <b-radio 
                                    v-model="olt"
                                    name="olt"
                                    :disabled="pop.olt ? false : true"
                                    native-value="true"
                                    >
                                    <label :class="pop.olt ? 'has-text-weight-semibold' : ''" >OLT</label>
                                </b-radio>
                            </div>
                            <div class="field">
                                <b-radio 
                                    v-model="olt_3play"
                                    name="olt_3play"
                                    :disabled="pop.olt_3play ? false : true"
                                    native-value="true"
                                    >
                                    <label :class="pop.olt_3play ? 'has-text-weight-semibold' : ''" >OLT 3Play</label>
                                </b-radio>
                            </div>
                            <div class="field">
                                <b-radio 
                                    v-model="core"
                                    name="core"
                                    :disabled="pop.core ? false : true"
                                    native-value="true"
                                    >
                                    <label :class="pop.core ? 'has-text-weight-semibold' : ''" >CORE</label>
                                </b-radio>
                            </div>
                            <div class="field">
                                <b-radio 
                                    v-model="bafi"
                                    name="bafi"
                                    :disabled="pop.bafi ? false : true"
                                    native-value="true"
                                    >
                                    <label :class="pop.bafi ? 'has-text-weight-semibold' : ''" >Banda Ancha Fija Inalámbrica (BAFI)</label>
                                </b-radio>
                            </div>
                        </div>
                    </div>

                    <div class="tile is-parent">
                        <div class="tile is-child box">

                            <div class="is-size-6 title has-text-weight-semibold" :class="primaryText">NEGOCIO MOVIL</div>
                            <div class="field">
                                <b-radio 
                                    v-model="red_minima_n1"
                                    name="red_minima_n1"
                                    :disabled="pop.red_minima_n1 ? false : true"
                                    native-value="true"
                                    >
                                    <label :class="pop.red_minima_n1 ? 'has-text-weight-semibold' : ''" >Red Mínima N1</label>
                                </b-radio>
                            </div>
                            <div class="field">
                                <b-radio 
                                    v-model="red_minima_n2"
                                    name="red_minima_n2"
                                    :disabled="pop.red_minima_n2 ? false : true"
                                    native-value="true"
                                    >
                                    <label :class="pop.red_minima_n2 ? 'has-text-weight-semibold' : ''" >Red Mínima N2</label>
                                </b-radio>
                            </div>
                            <div class="field">
                                <b-radio 
                                    v-model="vip"
                                    name="vip"
                                    :disabled="pop.vip ? false : true"
                                    native-value="true"
                                    >
                                    <label :class="pop.vip ? 'has-text-weight-semibold' : ''" >VIP</label>
                                </b-radio>
                            </div>
                            <div class="field">
                                <b-radio 
                                    v-model="localidad_obligatoria"
                                    name="localidad_obligatoria"
                                    :disabled="pop.localidad_obligatoria ? false : true"
                                    native-value="true"
                                    >
                                    <label :class="pop.localidad_obligatoria ? 'has-text-weight-semibold' : ''" >Localidad Obligatoria</label>
                                </b-radio>
                            </div>
                            <div class="field">
                                <b-radio 
                                    v-model="ranco"
                                    name="ranco"
                                    :disabled="pop.ranco ? false : true"
                                    native-value="true"
                                    >
                                    <label :class="pop.ranco ? 'has-text-weight-semibold' : ''" >RAN Consolidado (RANCO)</label>
                                </b-radio>
                            </div>
                        </div>
                    </div>

                    <div class="tile is-parent">
                        <div class="tile is-child box">

                            <div class="is-size-6 title has-text-weight-semibold" :class="primaryText">CARACTERISTICAS INFRAESTRUCTURA</div>
                            <div class="field">
                                <b-radio 
                                    v-model="offgrid"
                                    name="offgrid"
                                    :disabled="pop.offgrid ? false : true"
                                    native-value="true"
                                    >
                                    <label :class="pop.offgrid ? 'has-text-weight-semibold' : ''" >Offgrid</label>
                                </b-radio>
                            </div>
                            <div class="field">
                                <b-radio 
                                    v-model="solar"
                                    name="solar"
                                    :disabled="pop.solar ? false : true"
                                    native-value="true"
                                    >
                                    <label :class="pop.solar ? 'has-text-weight-semibold' : ''" >Paneles Solares</label>
                                </b-radio>
                            </div>
                            <div class="field">
                                <b-radio 
                                    v-model="eolica"
                                    name="eolica"
                                    :disabled="pop.eolica ? false : true"
                                    native-value="true"
                                    >
                                    <label :class="pop.eolica ? 'has-text-weight-semibold' : ''" >Eólico</label>
                                </b-radio>
                            </div>
                            
                        </div>
                    </div>

                    <div class="tile is-parent">
                        <div class="tile is-child box has-background-success">

                            <div class="is-size-6 title has-text-weight-semibold" :class="primaryText">GESTION AMBIENTAL</div>
                            <div class="field">
                                <b-radio 
                                    v-model="protected_zone"
                                    name="protected_zone"
                                    :disabled="pop.protected_zone ? false : true"
                                    native-value="true"
                                    >
                                    <label :class="pop.protected_zone ? 'has-text-weight-semibold' : ''" >Zona protegida</label>
                                </b-radio>
                            </div>

                            <div class="field">
                                <b-radio 
                                    v-model="rcasInfo"
                                    name="rcasInfo"
                                    :disabled="rcas.length ? false : true"
                                    native-value="true"
                                    >
                                    <label :class="rcas.length ? 'has-text-weight-semibold' : ''" >R.C.A.</label>
                                </b-radio>
                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    
</template>

<script>
    export default {
        components: {
        },
        props : [
            'pop',
            'rcas',
            'bodyBackground',
            'boxBackground',
            'primaryText',
            'secondaryText',
            'csrf'
        ],
        data() {
            return {
                pe_3g: this.pop.pe_3g ? 'true' : 'false',
                mpls: this.pop.mpls ? 'true' : 'false',
                olt: this.pop.olt ? 'true' : 'false',
                olt_3play: this.pop.olt_3play ? 'true' : 'false',
                core: this.pop.core ? 'true' : 'false',
                bafi: this.pop.bafi ? 'true' : 'false',

                red_minima_n1: this.pop.red_minima_n1 ? 'true' : 'false',
                red_minima_n2: this.pop.red_minima_n2 ? 'true' : 'false',
                vip: this.pop.vip ? 'true' : 'false',
                localidad_obligatoria: this.pop.localidad_obligatoria ? 'true' : 'false',
                ranco: this.pop.ranco ? 'true' : 'false',

                offgrid: this.pop.offgrid ? 'true' : 'false',
                solar: this.pop.solar ? 'true' : 'false',
                eolica: this.pop.eolica ? 'true' : 'false',

                protected_zone: this.pop.protected_zone ? 'true' : 'false',
                rcasInfo: this.rcas.length ? 'true' : 'false'
            }
        },
        mounted() {
        },
        methods: {
        }
    }
</script>
