<template>

    <section class="section" style="min-height: 500px;">
        <div class="columns">
            <div class="column has-text-weight-semibold has-text-dark is-size-3 has-text-left">Características</div>
        </div>
        <div class="columns tile is-ancestor" :class="bodyBackground">
            <!-- <div class=" "> -->
                <!-- CUADROS DE INFORMACION -->
                <!-- <div class=""> -->
                    <div class="column tile is-parent">
                        <div class="tile is-child box">

                            <div class="is-size-5 title has-text-weight-semibold" :class="primaryText">NEGOCIO FIJO</div>
                            <div class="" style="padding: 10px;">
                                <div class="field">
                                    <font-awesome-icon 
                                        :icon="['far', 'check-circle']"
                                        :class="pop.pe_3g ? 'has-text-eco' : 'has-text-grey-lighter'"
                                        :disabled="pop.pe_3g ? false : true"
                                    />
                                    <label :class="pop.pe_3g ? 'has-text-weight-normal' : 'has-text-grey-lighter'" class="is-size-6">PE 3G</label>
                                </div>
                                <div class="field">
                                    <font-awesome-icon 
                                        :icon="['far', 'check-circle']"
                                        :class="pop.mpls ? 'has-text-eco' : 'has-text-grey-lighter'"
                                        :disabled="pop.mpls ? false : true"
                                    />
                                    <label :class="pop.mpls ? 'has-text-weight-normal' : 'has-text-grey-lighter'" class="is-size-6">MPLS</label>
                                </div>
                                <div class="field">
                                    <font-awesome-icon 
                                        :icon="['far', 'check-circle']"
                                        :class="pop.olt ? 'has-text-eco' : 'has-text-grey-lighter'"
                                        :disabled="pop.olt ? false : true"
                                    />
                                    <label :class="pop.olt ? 'has-text-weight-normal' : 'has-text-grey-lighter'" class="is-size-6">OLT</label>
                                </div>
                                <div class="field">
                                    <font-awesome-icon 
                                        :icon="['far', 'check-circle']"
                                        :class="pop.olt_3play ? 'has-text-eco' : 'has-text-grey-lighter'"
                                        :disabled="pop.olt_3play ? false : true"
                                    />
                                    <label :class="pop.olt_3play ? 'has-text-weight-normal' : 'has-text-grey-lighter'" class="is-size-6">OLT 3Play</label>
                                </div>
                                <div class="field">
                                    <font-awesome-icon 
                                        :icon="['far', 'check-circle']"
                                        :class="pop.core ? 'has-text-eco' : 'has-text-grey-lighter'"
                                        :disabled="pop.core ? false : true"
                                    />
                                    <label :class="pop.core ? 'has-text-weight-normal' : 'has-text-grey-lighter'" class="is-size-6">CORE</label>
                                </div>
                                <div class="field">
                                    <font-awesome-icon 
                                        :icon="['far', 'check-circle']"
                                        :class="pop.bafi ? 'has-text-eco' : 'has-text-grey-lighter'"
                                        :disabled="pop.bafi ? false : true"
                                    />
                                    <label :class="pop.bafi ? 'has-text-weight-normal' : 'has-text-grey-lighter'" class="is-size-6">Banda Ancha Fija Inalámbrica (BAFI)</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="column tile is-parent">
                        <div class="tile is-child box">
                            <div class="is-size-5 title has-text-weight-semibold" :class="primaryText">NEGOCIO MOVIL</div>
                            <div class="" style="padding: 10px;">
                                <div class="field">
                                    <font-awesome-icon 
                                        :icon="['far', 'check-circle']"
                                        :class="pop.red_minima_n1 ? 'has-text-eco' : 'has-text-grey-lighter'"
                                        :disabled="pop.red_minima_n1 ? false : true"
                                    />
                                    <label :class="pop.red_minima_n1 ? 'has-text-weight-normal' : 'has-text-grey-lighter'" class="is-size-6">Red Mínima N1</label>
                                </div>
                                <div class="field">
                                    <font-awesome-icon 
                                        :icon="['far', 'check-circle']"
                                        :class="pop.red_minima_n2 ? 'has-text-eco' : 'has-text-grey-lighter'"
                                        :disabled="pop.red_minima_n2 ? false : true"
                                    />
                                    <label :class="pop.red_minima_n2 ? 'has-text-weight-normal' : 'has-text-grey-lighter'" class="is-size-6">Red Mínima N2</label>
                                </div>
                                <div class="field">
                                    <font-awesome-icon 
                                        :icon="['far', 'check-circle']"
                                        :class="pop.vip ? 'has-text-eco' : 'has-text-grey-lighter'"
                                        :disabled="pop.vip ? false : true"
                                    />
                                    <label :class="pop.vip ? 'has-text-weight-normal' : 'has-text-grey-lighter'" class="is-size-6">VIP</label>
                                </div>
                                <div class="field">
                                    <font-awesome-icon 
                                        :icon="['far', 'check-circle']"
                                        :class="pop.localidad_obligatoria ? 'has-text-eco' : 'has-text-grey-lighter'"
                                        :disabled="pop.localidad_obligatoria ? false : true"
                                    />
                                    <label :class="pop.localidad_obligatoria ? 'has-text-weight-normal' : 'has-text-grey-lighter'" class="is-size-6">Localidad Obligatoria</label>
                                </div>
                                <div class="field">
                                    <font-awesome-icon 
                                        :icon="['far', 'check-circle']"
                                        :class="pop.ranco ? 'has-text-eco' : 'has-text-grey-lighter'"
                                        :disabled="pop.ranco ? false : true"
                                    />
                                    <label :class="pop.ranco ? 'has-text-weight-normal' : 'has-text-grey-lighter'" class="is-size-6">RAN Consolidado (RANCO)</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="column tile is-parent">
                        <div class="tile is-child box">

                            <div class="is-size-5 title has-text-weight-semibold" :class="primaryText">CARACTERISTICAS INFRAESTRUCTURA</div>
                            <div class="" style="padding: 10px;">
                                <div class="field">
                                    <font-awesome-icon 
                                        :icon="['far', 'check-circle']"
                                        :class="pop.offgrid ? 'has-text-eco' : 'has-text-grey-lighter'"
                                        :disabled="pop.offgrid ? false : true"
                                    />
                                    <label :class="pop.offgrid ? 'has-text-weight-normal' : 'has-text-grey-lighter'" class="is-size-6">Offgrid</label>
                                </div>
                                <div class="field">
                                    <font-awesome-icon 
                                        :icon="['far', 'check-circle']"
                                        :class="pop.solar ? 'has-text-eco' : 'has-text-grey-lighter'"
                                        :disabled="pop.solar ? false : true"
                                    />
                                    <label :class="pop.solar ? 'has-text-weight-normal' : 'has-text-grey-lighter'" class="is-size-6">Paneles Solares</label>
                                </div>
                                <div class="field">
                                    <font-awesome-icon 
                                        :icon="['far', 'check-circle']"
                                        :class="pop.eolica ? 'has-text-eco' : 'has-text-grey-lighter'"
                                        :disabled="pop.eolica ? false : true"
                                    />
                                    <label :class="pop.eolica ? 'has-text-weight-normal' : 'has-text-grey-lighter'" class="is-size-6">Eólico</label>
                                </div>
                            </div>
                        </div>
                    </div>

                <!-- </div> -->
            <!-- </div> -->
        </div>
    </section>
    
</template>

<script>
    export default {
        components: {
        },
        props : [
            'user',
            'pop',
            // 'rcas',
            'bodyBackground',
            'boxBackground',
            'primaryText',
            'secondaryText',
        ],
        data() {
            return {
                // radio_pe_3g: this.pop.pe_3g
            }
        },
        mounted() {

        },
        methods: {
        }
    }
</script>
