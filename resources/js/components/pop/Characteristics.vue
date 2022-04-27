<template>
    <section class="">
        <div class="columns tile is-ancestor">

            <!-- <div class=" "> -->
                <!-- <div class=""> -->
                    <div class="column tile is-parent is-vertical" style="padding: 0px 24px 24px 24px;">
                        <div class="has-text-weight-bold is-size-5 has-text-left tile" style="padding-bottom: 24px;">CARACTERISTICAS NEGOCIO</div>
                        <div class="">

                            <div class="" style="padding-left: 8px; padding-bottom: 16px">
                                <div class="is-size-5 title has-text-weight-semibold has-text-grey-dark">Negocio Fijo</div>

                                <div class="field" style="padding-top: 0px; padding-bottom: 0px" v-if="!isEditMode">
                                    <font-awesome-icon 
                                        :icon="pe_3g ? ['fas', 'check-circle'] : ['far', 'times-circle']"
                                        :class="pe_3g ? 'has-text-eco' : 'has-text-grey-light'"
                                        :disabled="!pe_3g"
                                    />
                                    <label  :class="pe_3g ? 'has-text-weight-bold' : 'has-text-grey-light has-text-weight-light'" class="is-size-6">PE 3G</label>
                                </div>
                                <div class="field" v-if="isEditMode">
                                    <b-checkbox :value="pe_3g" @input="updateParameter('pe_3g', pe_3g)"><div class="is-size-6">PE 3G</div></b-checkbox>
                                </div>

                                <div class="field" v-if="!isEditMode">
                                    <font-awesome-icon 
                                        :icon="mpls ? ['fas', 'check-circle'] : ['far', 'times-circle']"
                                        :class="mpls ? 'has-text-eco' : 'has-text-grey-light'"
                                        :disabled="!mpls"
                                    />
                                    <label :class="mpls ? 'has-text-weight-bold' : 'has-text-grey-light has-text-weight-light'" class="is-size-6">MPLS</label>
                                </div>
                                <div class="field" v-if="isEditMode">
                                    <b-checkbox :value="mpls" @input="updateParameter('mpls', mpls)"><div class="is-size-6">MPLS</div></b-checkbox>
                                </div>

                                <div class="field" v-if="!isEditMode">
                                    <font-awesome-icon 
                                        :icon="olt ? ['fas', 'check-circle'] : ['far', 'times-circle']"
                                        :class="olt ? 'has-text-eco' : 'has-text-grey-light'"
                                        :disabled="!olt"
                                    />
                                    <label :class="olt ? 'has-text-weight-bold' : 'has-text-grey-light has-text-weight-light'" class="is-size-6">OLT</label>
                                </div>
                                <div class="field" v-if="isEditMode">
                                    <b-checkbox :value="olt" @input="updateParameter('olt', olt)"><div class="is-size-6">OLT</div></b-checkbox>
                                </div>

                                <div class="field" v-if="!isEditMode">
                                    <font-awesome-icon 
                                        :icon="olt_3play ? ['fas', 'check-circle'] : ['far', 'times-circle']"
                                        :class="olt_3play ? 'has-text-eco' : 'has-text-grey-light'"
                                        :disabled="!olt_3play"
                                    />
                                    <label :class="olt_3play ? 'has-text-weight-bold' : 'has-text-grey-light has-text-weight-light'" class="is-size-6">OLT 3Play</label>
                                </div>
                                <div class="field" v-if="isEditMode">
                                    <b-checkbox :value="olt_3play" @input="updateParameter('olt_3play', olt_3play)"><div class="is-size-6">OLT 3Play</div></b-checkbox>
                                </div>

                                <div class="field">
                                    <font-awesome-icon 
                                        :icon="popClassification.id == 1 ? ['fas', 'check-circle'] : ['far', 'times-circle']"
                                        :class="popClassification.id == 1 ? 'has-text-eco' : 'has-text-grey-light'"
                                        :disabled="popClassification.id == 1 ? false : true"
                                    />
                                    <label :class="popClassification.id == 1 ? 'has-text-weight-bold' : 'has-text-grey-light has-text-weight-light'" class="is-size-6">CORE</label>
                                </div>

                                <div class="field">
                                    <font-awesome-icon 
                                        :icon="bafi ? ['fas', 'check-circle'] : ['far', 'times-circle']"
                                        :class="bafi ? 'has-text-eco' : 'has-text-grey-light'"
                                        :disabled="bafi ? false : true"
                                    />
                                    <label :class="bafi ? 'has-text-weight-bold' : 'has-text-grey-light has-text-weight-light'" class="is-size-6">Banda Ancha Fija Inalámbrica (BAFI)</label>
                                </div>
                            </div>
                        </div>
                    <!-- </div> -->

                        <!-- <hr/> -->

                    <!-- <div class="column tile is-parent"> -->
                        <div class="">
                            <div class="" style="padding-left: 8px; padding-bottom: 0px; padding-top: 16px;">
                                <div class="is-size-5 title has-text-weight-semibold has-text-grey-dark">Negocio Movil</div>
                                <div class="field">
                                    <font-awesome-icon 
                                        :icon="pop.red_minima_n1 ? ['fas', 'check-circle'] : ['far', 'times-circle']"
                                        :class="pop.red_minima_n1 ? 'has-text-eco' : 'has-text-grey-light'"
                                        :disabled="!pop.red_minima_n1"
                                    />
                                    <label :class="pop.red_minima_n1 ? 'has-text-weight-bold' : 'has-text-grey-light has-text-weight-light'" class="is-size-6">Red Mínima N1</label>
                                </div>

                                <div class="field">
                                    <font-awesome-icon 
                                        :icon="pop.red_minima_n2 ? ['fas', 'check-circle'] : ['far', 'times-circle']"
                                        :class="pop.red_minima_n2 ? 'has-text-eco' : 'has-text-grey-light'"
                                        :disabled="!pop.red_minima_n2"
                                    />
                                    <label :class="pop.red_minima_n2 ? 'has-text-weight-bold' : 'has-text-grey-light has-text-weight-light'" class="is-size-6">Red Mínima N2</label>
                                </div>

                                <!-- <div class="field" v-if="!isEditMode">
                                    <font-awesome-icon 
                                        :icon="vip ? ['fas', 'check-circle'] : ['far', 'times-circle']"
                                        :class="vip ? 'has-text-eco' : 'has-text-grey-light'"
                                        :disabled="!vip"
                                    />
                                    <label :class="vip ? 'has-text-weight-bold' : 'has-text-grey-light has-text-weight-light'" class="is-size-6">VIP</label>
                                </div> -->
                                <!-- <div class="field" v-if="isEditMode">
                                    <b-checkbox :value="vip" @input="updateParameter('vip', vip)"><div class="is-size-6">VIP</div></b-checkbox>
                                </div> -->

                                <div class="field">
                                    <font-awesome-icon 
                                        :icon="vip_entel.is_vip ? ['fas', 'check-circle'] : ['far', 'times-circle']"
                                        :class="vip_entel.is_vip ? 'has-text-eco' : 'has-text-grey-light'"
                                        :disabled="!vip_entel.is_vip"
                                    />
                                    <label :class="vip_entel.is_vip ? 'has-text-weight-bold' : 'has-text-grey-light has-text-weight-light'" class="is-size-6">{{ vip_entel.is_vip ? "VIP&nbsp;" + vip_entel.category + " - " + vip_entel.category_type : "VIP" }}
                                    </label>
                                </div>

                                <div class="field" v-if="isEditMode">
                                    <b-select placeholder="Selecciona..." v-model="vip_entel_category" @input="updateVipEntel()">
                                        <option
                                            v-for="option in vip_categories"
                                            :value="option"
                                            :key="option.id">
                                            {{ option.type }}
                                        </option>
                                        <option @input="delete_vip = true">Delete</option>
                                    </b-select>
                                </div>

                                <div class="field" v-if="isEditMode">
                                    <b-select placeholder="Selecciona..." v-model="vip_category" @input="updateVipEntel()">
                                        <option
                                            v-for="option in vip_category_options"
                                            :value="option"
                                            :key="option">
                                            {{ option }}
                                        </option>
                                    </b-select>
                                </div>
                                <!-- <div class="field" v-if="isEditMode">
                                    <b-checkbox :value="vip" @input="updateParameter('vip', vip)"><div class="is-size-6">VIP</div></b-checkbox>
                                </div> -->

                                <!-- <div class="field" v-if="vip & !isEditMode">
                                    <font-awesome-icon 
                                        :icon="vip_entel ? ['fas', 'check-circle'] : ['far', 'times-circle']"
                                        :class="vip_entel ? 'has-text-eco' : 'has-text-grey-light'"
                                        :disabled="!vip_entel"
                                    />
                                    <label :class="vip_entel ? 'has-text-weight-bold' : 'has-text-grey-light has-text-weight-light'" class="is-size-6">VIP Entel</label>
                                </div>
                                <div class="field" v-if="vip & isEditMode">
                                    <b-checkbox :value="vip_entel" @input="updateVipEntel()"><div class="is-size-6">VIP Entel</div></b-checkbox>
                                </div> -->


                                <div class="field" v-if="!isEditMode">
                                    <font-awesome-icon 
                                        :icon="localidad_obligatoria ? ['fas', 'check-circle'] : ['far', 'times-circle']"
                                        :class="localidad_obligatoria ? 'has-text-eco' : 'has-text-grey-light'"
                                        :disabled="!localidad_obligatoria"
                                    />
                                    <label :class="localidad_obligatoria ? 'has-text-weight-bold' : 'has-text-grey-light has-text-weight-light'" class="is-size-6">Localidad Obligatoria</label>
                                </div>
                                <div class="field" v-if="isEditMode">
                                    <b-checkbox :value="localidad_obligatoria" @input="updateParameter('localidad_obligatoria', localidad_obligatoria)"><div class="is-size-6">Localidad Obligatoria</div></b-checkbox>
                                </div>

                                <div class="field" v-if="!isEditMode">
                                    <font-awesome-icon 
                                        :icon="ranco ? ['fas', 'check-circle'] : ['far', 'times-circle']"
                                        :class="ranco ? 'has-text-eco' : 'has-text-grey-light'"
                                        :disabled="!ranco"
                                    />
                                    <label :class="ranco ? 'has-text-weight-bold' : 'has-text-grey-light has-text-weight-light'" class="is-size-6">RAN Consolidado (RANCO)</label>
                                </div>
                                <div class="field" v-if="isEditMode">
                                    <b-checkbox :value="ranco" @input="updateParameter('ranco', ranco)"><div class="is-size-6">RAN Consolidado (RANCO)</div></b-checkbox>
                                </div>
                            </div>
                        </div>
                    <!-- </div> -->

                        <div class="is-divider is-light is-paddingless" />

                    <!-- <div class="column tile is-parent"> -->
                        <!-- <div class="has-text-weight-bold has-text-dark is-size-5 has-text-left tile" style="padding-bottom: 24px;">CARACTERISTICAS INFRAESTRUCTURA</div> -->
                        <div class="">

                            <div class="is-size-5 title has-text-weight-semibold has-text-grey-dark">CARACTERISTICAS INFRAESTRUCTURA</div>
                            <div class="" style="padding-left: 8px;">
                                
                                <div class="field" v-if="!isEditMode">
                                    <div class="has-text-weight-semibold is-size-6">Sistema de energía</div>
                                    <font-awesome-icon 
                                        :icon="energy_system ? ['fas', 'check-circle'] : ['fas', 'exclamation-triangle']"
                                        :class="energy_system ? 'has-text-eco' : 'has-text-warning'"
                                        :disabled="!energy_system"
                                    />
                                    <label class="has-text-weight-normal is-size-6">{{ energy_system ? energy_system.system : 'PENDIENTE' }}</label>
                                </div>

                                <div class="field" v-if="isEditMode">
                                    <b-select placeholder="Selecciona..." v-model="energy_system" @input="updateEnergySystem()">
                                        <option
                                            v-for="option in energySystems"
                                            :value="option"
                                            :key="option.id">
                                            {{ option.system }}
                                        </option>
                                    </b-select>
                                </div>


                                <div class="field" v-if="!isEditMode">
                                    <div class="has-text-weight-semibold is-size-6">Responsable de energía</div>
                                    <font-awesome-icon 
                                        :icon="energy_responsable ? ['fas', 'check-circle'] : ['fas', 'exclamation-triangle']"
                                        :class="energy_responsable ? 'has-text-eco' : 'has-text-warning'"
                                        :disabled="!energy_responsable"
                                    />
                                    <label class="has-text-weight-normal is-size-6">{{ energy_responsable ? energy_responsable.responsable : 'PENDIENTE' }}</label>
                                </div>

                                <div class="field" v-if="isEditMode">
                                    <b-select placeholder="Selecciona..." v-model="energy_responsable" @input="updateEnergyResponsable()">
                                        <option
                                            v-for="option in energyResponsables"
                                            :value="option"
                                            :key="option.id">
                                            {{ option.responsable }}
                                        </option>
                                    </b-select>
                                </div>


                                <div class="field" v-if="!isEditMode">
                                    <font-awesome-icon 
                                        :icon="solar ? ['fas', 'check-circle'] : ['far', 'times-circle']"
                                        :class="solar ? 'has-text-eco' : 'has-text-grey-light'"
                                        :disabled="!solar"
                                    />
                                    <label :class="solar ? 'has-text-weight-bold' : 'has-text-grey-light has-text-weight-light'" class="is-size-6">Paneles Solares</label>
                                </div>
                                <div class="field" v-if="isEditMode">
                                    <b-checkbox :value="solar" @input="updateParameter('solar', solar)"><div class="is-size-6">Paneles Solares</div></b-checkbox>
                                </div>

                                <div class="field" v-if="!isEditMode">
                                    <font-awesome-icon 
                                        :icon="eolica ? ['fas', 'check-circle'] : ['far', 'times-circle']"
                                        :class="eolica ? 'has-text-eco' : 'has-text-grey-light'"
                                        :disabled="!eolica"
                                    />
                                    <label :class="eolica ? 'has-text-weight-bold' : 'has-text-grey-light has-text-weight-light'" class="is-size-6">Eólico</label>
                                </div>
                                <div class="field" v-if="isEditMode">
                                    <b-checkbox :value="eolica" @input="updateParameter('eolica', eolica)"><div class="is-size-6">Eólico</div></b-checkbox>
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
import { faCheckCircle, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
// import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { faTimesCircle as farTimesCircle } from '@fortawesome/free-regular-svg-icons'
library.add(faCheckCircle, farTimesCircle, faExclamationTriangle);
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

    data() {
        return {
            energySystems: Array,
            energy_system: Object,
            energyResponsables: Array,
            energy_responsable: Object,
            vip_categories: Array,
            vip_entel_category: Object,
            vip_category: 0,
            vip_category_options: [0, 1, 2],
            delete_vip: false
        }
    },

    mounted() {
    },

    computed: {
        pe_3g() {
            // console.log(!!+this.pop.pe_3g)
            return !!+this.pop.pe_3g
        },

        mpls() {
            return !!+this.pop.mpls
        },

        olt() {
            return !!+this.pop.olt
        },

        olt_3play() {
            return !!+this.pop.olt_3play
        },

        vip() {
            return !!+this.pop.vip
        },

        vip_entel() {
            return {
                is_vip: this.pop.current_entel_vip ? true : false,
                category_type_id: this.pop.current_entel_vip ? this.pop.current_entel_vip.vip_category_type_id : 1,
                category_type: !this.pop.current_entel_vip ? "" : this.pop.current_entel_vip.vip_category_type ? this.pop.current_entel_vip.vip_category_type.type : "",
                category: this.pop.current_entel_vip ? this.pop.current_entel_vip.category : ""
            }
        },

        localidad_obligatoria() {
            return !!+this.pop.localidad_obligatoria
        },

        ranco() {
            return !!+this.pop.ranco
        },

        solar() {
            return !!+this.pop.solar
        },

        eolica() {
            return !!+this.pop.eolica
        },

    },

    mounted() {
        this.getEnergySystems()
        this.getEnergyResponsables()
        this.getVipEntelCategories()
    },

    watch: {
        pop(val) {
            this.energy_system = val.energy_system
            this.energy_responsable = val.energy_responsable
        }
    },

    methods: {
        getEnergySystems() {
            axios.get('/api/energySystems')
            .then(response => {
                this.energySystems = response.data.energySystems
            })
        },

        getEnergyResponsables() {
            axios.get('/api/energyResponsables')
            .then(response => {
                this.energyResponsables = response.data.energyResponsables
            })
        },

        getVipEntelCategories() {
            axios.get('/api/vipCategories')
            .then(response => {
                this.vip_categories = response.data
            })
        },

        updateEnergySystem() {
            let params = {
                'parameter': 'energy_system_id',
                'value': this.energy_system.id,
                'user_id': this.user.id
            }
            console.log(params)
            axios.put(`/api/pop/${this.pop.id}`, params)
            .then(response => {
                // console.log(response.data)
                this.$buefy.toast.open({
                    message: 'Parámetro actualizado exitosamente.',
                    type: 'is-success',
                    duration: 2000
                })
                this.$eventBus.$emit('parameter-updated');
            })
            
        },

        updateEnergyResponsable() {
            let params = {
                'parameter': 'energy_responsable_id',
                'value': this.energy_responsable.id,
                'user_id': this.user.id
            }
            console.log(params)
            axios.put(`/api/pop/${this.pop.id}`, params)
            .then(response => {
                // console.log(response.data)
                this.$buefy.toast.open({
                    message: 'Parámetro actualizado exitosamente.',
                    type: 'is-success',
                    duration: 2000
                })
                this.$eventBus.$emit('parameter-updated');
            })
            
        },

        updateParameter(param, val) {
            let params = {
                'parameter': param,
                'value': !val,
                'user_id': this.user.id
            }

            axios.put(`/api/pop/${this.pop.id}`, params)
            .then(response => {
                // console.log(response.data)
                this.$buefy.toast.open({
                    message: 'Parámetro actualizado exitosamente.',
                    type: 'is-success',
                    duration: 2000
                })
                this.$eventBus.$emit('parameter-updated');
            })
            
        },

        updateVipEntel() {
            let params = {
                'vip_category_type_id': this.vip_entel_category.id,
                'category': this.vip_category,
                'user_id': this.user.id,
                'delete': this.delete_vip
            }

            axios.put(`/api/vipEntel/${this.pop.id}`, params)
            .then(response => {
                // console.log(response.data)
                this.$buefy.toast.open({
                    message: 'Parámetro actualizado exitosamente.',
                    type: 'is-success',
                    duration: 2000
                })
                this.$eventBus.$emit('parameter-updated');
            })
            
        }
    }
}
</script>
