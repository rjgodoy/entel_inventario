<template>

    <section class="">
        <div class="columns">
            
        </div>
        
        <div class="columns tile is-ancestor">

            <!-- <div class=" "> -->
                <!-- CUADROS DE INFORMACION -->
                <!-- <div class=""> -->
                    <div class="column tile is-parent is-vertical" style="padding: 0px 24px 24px 24px;">
                        <div class="has-text-weight-bold has-text-dark is-size-5 has-text-left tile" style="padding-bottom: 24px;">CARACTERISTICAS NEGOCIO</div>
                        <div class="tile is-child">

                            <div class="" style="padding: 10px;">
                                <div class="is-size-5 title has-text-weight-semibold" :class="primaryText">Negocio Fijo</div>

                                <div class="field" v-if="!isEditMode">
                                    <font-awesome-icon 
                                        :icon="pe_3g ? ['fas', 'check-circle'] : ['far', 'times-circle']"
                                        :class="pe_3g ? 'has-text-eco' : 'has-text-grey-lighter'"
                                        :disabled="pe_3g ? false : true"
                                    />
                                    <label  :class="pe_3g ? 'has-text-weight-normal' : 'has-text-grey-lighter'" class="is-size-6">PE 3G</label>
                                </div>
                                <div class="field" v-if="isEditMode">
                                    <b-checkbox v-model="pe_3g" @input="updateParameter('pe_3g', pe_3g)"><div class="is-size-6">PE 3G</div></b-checkbox>
                                </div>

                                <div class="field" v-if="!isEditMode">
                                    <font-awesome-icon 
                                        :icon="mpls ? ['fas', 'check-circle'] : ['far', 'times-circle']"
                                        :class="mpls ? 'has-text-eco' : 'has-text-grey-lighter'"
                                        :disabled="mpls ? false : true"
                                    />
                                    <label :class="mpls ? 'has-text-weight-normal' : 'has-text-grey-lighter'" class="is-size-6">MPLS</label>
                                </div>
                                <div class="field" v-if="isEditMode">
                                    <b-checkbox v-model="mpls" @input="updateParameter('mpls', mpls)"><div class="is-size-6">MPLS</div></b-checkbox>
                                </div>

                                <div class="field" v-if="!isEditMode">
                                    <font-awesome-icon 
                                        :icon="olt ? ['fas', 'check-circle'] : ['far', 'times-circle']"
                                        :class="olt ? 'has-text-eco' : 'has-text-grey-lighter'"
                                        :disabled="olt ? false : true"
                                    />
                                    <label :class="olt ? 'has-text-weight-normal' : 'has-text-grey-lighter'" class="is-size-6">OLT</label>
                                </div>
                                <div class="field" v-if="isEditMode">
                                    <b-checkbox v-model="olt" @input="updateParameter('olt', olt)"><div class="is-size-6">OLT</div></b-checkbox>
                                </div>

                                <div class="field" v-if="!isEditMode">
                                    <font-awesome-icon 
                                        :icon="olt_3play ? ['fas', 'check-circle'] : ['far', 'times-circle']"
                                        :class="olt_3play ? 'has-text-eco' : 'has-text-grey-lighter'"
                                        :disabled="olt_3play ? false : true"
                                    />
                                    <label :class="olt_3play ? 'has-text-weight-normal' : 'has-text-grey-lighter'" class="is-size-6">OLT 3Play</label>
                                </div>
                                <div class="field" v-if="isEditMode">
                                    <b-checkbox v-model="olt_3play" @input="updateParameter('olt_3play', olt_3play)"><div class="is-size-6">OLT 3Play</div></b-checkbox>
                                </div>

                                <div class="field">
                                    <font-awesome-icon 
                                        :icon="popClassification.id == 1 ? ['fas', 'check-circle'] : ['far', 'times-circle']"
                                        :class="popClassification.id == 1 ? 'has-text-eco' : 'has-text-grey-lighter'"
                                        :disabled="popClassification.id == 1 ? false : true"
                                    />
                                    <label :class="popClassification.id == 1 ? 'has-text-weight-normal' : 'has-text-grey-lighter'" class="is-size-6">CORE</label>
                                </div>

                                <div class="field">
                                    <font-awesome-icon 
                                        :icon="bafi ? ['fas', 'check-circle'] : ['far', 'times-circle']"
                                        :class="bafi ? 'has-text-eco' : 'has-text-grey-lighter'"
                                        :disabled="bafi ? false : true"
                                    />
                                    <label :class="bafi ? 'has-text-weight-normal' : 'has-text-grey-lighter'" class="is-size-6">Banda Ancha Fija Inalámbrica (BAFI)</label>
                                </div>

                            </div>
                        </div>
                    <!-- </div> -->

                        <!-- <hr/> -->

                    <!-- <div class="column tile is-parent"> -->
                        <div class="tile is-child">
                            
                            <div class="" style="padding: 10px;">
                                <div class="is-size-5 title has-text-weight-semibold" :class="primaryText">Negocio Movil</div>
                                <div class="field">
                                    <font-awesome-icon 
                                        :icon="pop.red_minima_n1 ? ['fas', 'check-circle'] : ['far', 'times-circle']"
                                        :class="pop.red_minima_n1 ? 'has-text-eco' : 'has-text-grey-lighter'"
                                        :disabled="pop.red_minima_n1 ? false : true"
                                    />
                                    <label :class="pop.red_minima_n1 ? 'has-text-weight-normal' : 'has-text-grey-lighter'" class="is-size-6">Red Mínima N1</label>
                                </div>

                                <div class="field">
                                    <font-awesome-icon 
                                        :icon="pop.red_minima_n2 ? ['fas', 'check-circle'] : ['far', 'times-circle']"
                                        :class="pop.red_minima_n2 ? 'has-text-eco' : 'has-text-grey-lighter'"
                                        :disabled="pop.red_minima_n2 ? false : true"
                                    />
                                    <label :class="pop.red_minima_n2 ? 'has-text-weight-normal' : 'has-text-grey-lighter'" class="is-size-6">Red Mínima N2</label>
                                </div>

                                <div class="field" v-if="!isEditMode">
                                    <font-awesome-icon 
                                        :icon="vip ? ['fas', 'check-circle'] : ['far', 'times-circle']"
                                        :class="vip ? 'has-text-eco' : 'has-text-grey-lighter'"
                                        :disabled="vip ? false : true"
                                    />
                                    <label :class="vip ? 'has-text-weight-normal' : 'has-text-grey-lighter'" class="is-size-6">VIP</label>
                                </div>
                                <div class="field" v-if="isEditMode">
                                    <b-checkbox v-model="vip" @input="updateParameter('vip', vip)"><div class="is-size-6">VIP</div></b-checkbox>
                                </div>

                                <div class="field" v-if="!isEditMode">
                                    <font-awesome-icon 
                                        :icon="localidad_obligatoria ? ['fas', 'check-circle'] : ['far', 'times-circle']"
                                        :class="localidad_obligatoria ? 'has-text-eco' : 'has-text-grey-lighter'"
                                        :disabled="localidad_obligatoria ? false : true"
                                    />
                                    <label :class="localidad_obligatoria ? 'has-text-weight-normal' : 'has-text-grey-lighter'" class="is-size-6">Localidad Obligatoria</label>
                                </div>
                                <div class="field" v-if="isEditMode">
                                    <b-checkbox v-model="localidad_obligatoria" @input="updateParameter('localidad_obligatoria', localidad_obligatoria)"><div class="is-size-6">Localidad Obligatoria</div></b-checkbox>
                                </div>

                                <div class="field" v-if="!isEditMode">
                                    <font-awesome-icon 
                                        :icon="ranco ? ['fas', 'check-circle'] : ['far', 'times-circle']"
                                        :class="ranco ? 'has-text-eco' : 'has-text-grey-lighter'"
                                        :disabled="ranco ? false : true"
                                    />
                                    <label :class="ranco ? 'has-text-weight-normal' : 'has-text-grey-lighter'" class="is-size-6">RAN Consolidado (RANCO)</label>
                                </div>
                                <div class="field" v-if="isEditMode">
                                    <b-checkbox v-model="ranco" @input="updateParameter('ranco', ranco)"><div class="is-size-6">RAN Consolidado (RANCO)</div></b-checkbox>
                                </div>

                            </div>
                        </div>
                    <!-- </div> -->

                        <hr/>

                    <!-- <div class="column tile is-parent"> -->
                        <!-- <div class="has-text-weight-bold has-text-dark is-size-5 has-text-left tile" style="padding-bottom: 24px;">CARACTERISTICAS INFRAESTRUCTURA</div> -->
                        <div class="tile is-child">

                            <div class="is-size-5 title has-text-weight-semibold" :class="primaryText">CARACTERISTICAS INFRAESTRUCTURA</div>
                            <div class="" style="padding: 10px;">
                                <div class="field" v-if="!isEditMode">
                                    <font-awesome-icon 
                                        :icon="offgrid ? ['fas', 'check-circle'] : ['far', 'times-circle']"
                                        :class="offgrid ? 'has-text-eco' : 'has-text-grey-lighter'"
                                        :disabled="offgrid ? false : true"
                                    />
                                    <label :class="offgrid ? 'has-text-weight-normal' : 'has-text-grey-lighter'" class="is-size-6">Offgrid</label>
                                </div>
                                <div class="field" v-if="isEditMode">
                                    <b-checkbox v-model="offgrid" @input="updateParameter('offgrid', offgrid)"><div class="is-size-6">Offgrid</div></b-checkbox>
                                </div>

                                <div class="field" v-if="!isEditMode">
                                    <font-awesome-icon 
                                        :icon="solar ? ['fas', 'check-circle'] : ['far', 'times-circle']"
                                        :class="solar ? 'has-text-eco' : 'has-text-grey-lighter'"
                                        :disabled="solar ? false : true"
                                    />
                                    <label :class="solar ? 'has-text-weight-normal' : 'has-text-grey-lighter'" class="is-size-6">Paneles Solares</label>
                                </div>
                                <div class="field" v-if="isEditMode">
                                    <b-checkbox v-model="solar" @input="updateParameter('solar', solar)"><div class="is-size-6">Paneles Solares</div></b-checkbox>
                                </div>

                                <div class="field" v-if="!isEditMode">
                                    <font-awesome-icon 
                                        :icon="eolica ? ['fas', 'check-circle'] : ['far', 'times-circle']"
                                        :class="eolica ? 'has-text-eco' : 'has-text-grey-lighter'"
                                        :disabled="eolica ? false : true"
                                    />
                                    <label :class="eolica ? 'has-text-weight-normal' : 'has-text-grey-lighter'" class="is-size-6">Eólico</label>
                                </div>
                                <div class="field" v-if="isEditMode">
                                    <b-checkbox v-model="eolica" @input="updateParameter('eolica', eolica)"><div class="is-size-6">Eólico</div></b-checkbox>
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
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
// import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { faTimesCircle as farTimesCircle } from '@fortawesome/free-regular-svg-icons'
library.add(faCheckCircle, farTimesCircle);
export default {
    components: {
    },
    props : [
        'user',
        'pop',
        'popClassification',
        'bafi',
        'isEditMode',
        'bodyBackground',
        'boxBackground',
        'primaryText',
        'secondaryText',
    ],

    mounted() {
        console.log(this.bafi)
    },

    data() {
        return {
            pe_3g: this.pop.pe_3g ? true : false,
            mpls: this.pop.mpls ? true : false,
            olt: this.pop.olt ? true : false,
            olt_3play: this.pop.olt_3play ? true : false,

            vip: this.pop.vip ? true : false,
            localidad_obligatoria: this.pop.localidad_obligatoria ? true : false,
            ranco: this.pop.ranco ? true : false,

            offgrid: this.pop.offgrid ? true : false,
            solar: this.pop.solar ? true : false,
            eolica: this.pop.eolica ? true : false,
        }
    },

    watch: {
        pop(val) {

        },
    },

    methods: {
        updateParameter(param, val) {
            let params = {
                'api_token': this.user.api_token,
                'parameter': param,
                'value': val,
                'user_id': this.user.id
            }

            axios.put(`/api/pop/${this.pop.id}`, params)
            .then(response => {
                console.log(response.data)
                this.$buefy.toast.open({
                    message: 'Parámetro actualizado exitosamente.',
                    type: 'is-success',
                    duration: 2000
                })
            })
            this.$eventBus.$emit('parameter-updated');
        }
    }
}
</script>
