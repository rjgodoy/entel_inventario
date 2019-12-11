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
                                <input class="is-checkradio is-link" id="pe_3g" type="radio" name="pe_3g" :checked="pop.pe_3g ? true : false" :disabled="pop.pe_3g ? false : true">
                                <label for="pe_3g" class="is-size-6" :class="pop.pe_3g ? 'has-text-weight-semibold' : ''" :disabled="pop.pe_3g ? false : true">PE 3G</label>
                            </div>
                            <div class="field">
                                <input class="is-checkradio is-link" id="mpls" type="radio" name="mpls" :checked="pop.mpls ? true : false" :disabled="pop.mpls ? false : true">
                                <label for="mpls" class="is-size-6" :class="pop.mpls ? 'has-text-weight-semibold' : ''">MPLS</label>
                            </div>
                            <div class="field">
                                <input class="is-checkradio is-link" id="olt" type="radio" name="olt" :checked="pop.olt ? true : false" :disabled="pop.olt ? false : true">
                                <label for="olt" class="is-size-6" :class="pop.olt ? 'has-text-weight-semibold' : ''">OLT</label>
                            </div>
                            <div class="field">
                                <input class="is-checkradio is-link" id="olt_3play" type="radio" name="olt_3play" :checked="pop.olt_3play ? true : false" :disabled="pop.olt_3play ? false : true">
                                <label for="olt_3play" class="is-size-6" :class="pop.olt_3play ? 'has-text-weight-semibold' : ''">OLT 3Play</label>
                            </div>
                            <div class="field">
                                <input class="is-checkradio is-link" id="core" type="radio" name="core" :checked="pop.core ? true : false" :disabled="pop.core ? false : true">
                                <label for="core" class="is-size-6" :class="pop.core ? 'has-text-weight-semibold' : ''">CORE</label>
                            </div>
                            <div class="field">
                                <input class="is-checkradio is-link" id="bafi" type="radio" name="bafi" :checked="pop.bafi ? true : false" :disabled="pop.bafi ? false : true">
                                <label for="bafi" class="is-size-6" :class="pop.bafi ? 'has-text-weight-semibold' : ''">Banda Ancha Fija Inalámbrica (BAFI)</label>
                            </div>
                        </div>
                    </div>

                    <div class="tile is-parent">
                        <div class="tile is-child box">

                            <div class="is-size-6 title has-text-weight-semibold" :class="primaryText">NEGOCIO MOVIL</div>
                            <div class="field">
                                <input class="is-checkradio is-link" id="red_minima_n1" type="radio" name="red_minima_n1" :checked="pop.red_minima_n1 ? true : false" :disabled="pop.red_minima_n1 ? false : true">
                                <label for="red_minima_n1" class="is-size-6" :class="pop.red_minima_n1 ? 'has-text-weight-semibold' : ''" :disabled="pop.red_minima_n1 ? false : true">Red Mínima N1</label>
                            </div>
                            <div class="field">
                                <input class="is-checkradio is-link" id="red_minima_n2" type="radio" name="red_minima_n2" :checked="pop.red_minima_n2 ? true : false" :disabled="pop.red_minima_n2 ? false : true">
                                <label for="red_minima_n2" class="is-size-6" :class="pop.red_minima_n2 ? 'has-text-weight-semibold' : ''">Red Mínima N2</label>
                            </div>
                            <div class="field">
                                <input class="is-checkradio is-link" id="vip" type="radio" name="vip" :checked="pop.vip ? true : false" :disabled="pop.vip ? false : true">
                                <label for="vip" class="is-size-6" :class="pop.vip ? 'has-text-weight-semibold' : ''">VIP</label>
                            </div>
                            <div class="field">
                                <input class="is-checkradio is-link" id="localidad_obligatoria" type="radio" name="localidad_obligatoria" :checked="pop.localidad_obligatoria ? true : false" :disabled="pop.localidad_obligatoria ? false : true">
                                <label for="localidad_obligatoria" class="is-size-6" :class="pop.localidad_obligatoria ? 'has-text-weight-semibold' : ''">Localidad Obligatoria</label>
                            </div>
                            <div class="field">
                                <input class="is-checkradio is-link" id="ranco" type="radio" name="ranco" :checked="pop.ranco ? true : false" :disabled="pop.ranco ? false : true">
                                <label for="ranco" class="is-size-6" :class="pop.ranco ? 'has-text-weight-semibold' : ''">RAN Consolidado (RANCO)</label>
                            </div>
                        </div>
                    </div>

                    <div class="tile is-parent">
                        <div class="tile is-child box">

                            <div class="is-size-6 title has-text-weight-semibold" :class="primaryText">CARACTERISTICAS INFRAESTRUCTURA</div>
                            <div class="field">
                                <input class="is-checkradio is-link" id="offgrid" type="radio" name="offgrid" :checked="pop.offgrid ? true : false" :disabled="pop.offgrid ? false : true">
                                <label for="offgrid" class="is-size-6" :class="pop.offgrid ? 'has-text-weight-semibold' : ''" :disabled="pop.offgrid ? false : true">Offgrid</label>
                            </div>
                            <div class="field">
                                <input class="is-checkradio is-link" id="solar" type="radio" name="solar" :checked="pop.solar ? true : false" :disabled="pop.solar ? false : true">
                                <label for="solar" class="is-size-6" :class="pop.solar ? 'has-text-weight-semibold' : ''">Paneles Solares</label>
                            </div>
                            <div class="field">
                                <input class="is-checkradio is-link" id="eolica" type="radio" name="eolica" :checked="pop.eolica ? true : false" :disabled="pop.eolica ? false : true">
                                <label for="eolica" class="is-size-6" :class="pop.eolica ? 'has-text-weight-semibold' : ''">Eólico</label>
                            </div>
                            
                        </div>
                    </div>

                    <div class="tile is-parent">
                        <div class="tile is-child box has-background-success">

                            <div class="is-size-6 title has-text-weight-semibold" :class="primaryText">GESTION AMBIENTAL</div>
                            <div class="field">
                                <input class="is-checkradio is-link" id="protected_zone" type="radio" name="protected_zone" :checked="pop.protected_zone ? true : false" :disabled="pop.protected_zone ? false : true">
                                <label for="protected_zone" class="is-size-6" :class="pop.protected_zone ? 'has-text-weight-semibold' : ''">Zona protegida</label>
                            </div>

                            <div class="field">
                                <input class="is-checkradio is-link" id="rca" type="radio" name="rca" :checked="rcas.length ? true : false" :disabled="rcas.length ? false : true">
                                <label for="rca" class="is-size-6" :class="rcas.length ? 'has-text-weight-semibold' : ''" :disabled="rcas.length ? false : true">R.C.A.</label>
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
            }
        },
        mounted() {
        },
        methods: {
        }
    }
</script>
