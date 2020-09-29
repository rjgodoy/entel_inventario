<template>
    <section class="section is-paddingless">

        <div class="columns tile is-ancestor is-multiline">
            <div class="column tile is-parent">
                <div class="tile is-child box">

                    <div class="columns">
                        <div class="column is-4">
                            <div class="has-text-weight-semibold is-size-4">{{ junction.electric_company ? junction.electric_company.name : 'Sin información' }}</div>
                            <div class="has-text-weight-light is-size-7">Distribuidora</div>

                            <div class="is-divider" style="margin-top: 16px; margin-bottom: 8px;"></div>

                            <div class="field">
                                <div class="has-text-weight-light is-size-7">Número Cliente</div>
                                <div v-if="!isEditMode">
                                    <div class="has-text-weight-bold is-size-5">{{ junction.client_number ? junction.client_number : 'Sin información' }}</div>
                                </div>
                                <div v-if="isEditMode">
                                    <b-input class="has-text-weight-bold is-size-5" v-model="clientNumber"/>
                                </div>
                            </div>
                            

                            <div class="field">
                                <div class="has-text-weight-light is-size-7">Número Empalme</div>
                                <div v-if="!isEditMode">
                                    <div class="has-text-weight-bold is-size-5" 
                                        :class="junction.junction_number ? '' : ''">
                                        {{ junction.junction_number ? junction.junction_number : 'Sin información' }}
                                    </div>
                                </div>
                                <div v-if="isEditMode">
                                    <b-input class="has-text-weight-bold is-size-5" v-model="junctionNumber"/>
                                </div>
                            </div>
                            

                            <div class="field">
                                <div class="has-text-weight-light is-size-7">Tipo Empalme</div>
                                <div v-if="!isEditMode">
                                    <div class="has-text-weight-bold is-size-5">{{ junctionType }}</div>
                                </div>
                                <div v-if="isEditMode">
                                    <b-select placeholder="Select a name" v-model="junctionTypeId">
                                        <option
                                            v-for="option in junctionTypes"
                                            :value="option.id"
                                            :key="option.id">
                                            {{ option.type }}
                                        </option>
                                    </b-select>
                                </div>
                            </div>
                            
                            <div class="field">
                                <div class="has-text-weight-light is-size-7">Tipo Conexión</div>
                                <div v-if="!isEditMode">
                                    <div class="has-text-weight-bold is-size-5">{{ junctionConnection }}</div>
                                </div>
                                <div v-if="isEditMode">
                                    <b-select placeholder="Select a name" v-model="junctionConnectionId">
                                        <option
                                            v-for="option in junctionConnections"
                                            :value="option.id"
                                            :key="option.id">
                                            {{ option.connection }}
                                        </option>
                                    </b-select>
                                </div>
                            </div>

                            <div class="field">
                                <div class="has-text-weight-light is-size-7">Factor de Uso</div>
                                <div v-if="!isEditMode">
                                    <div class="has-text-weight-bold is-size-5">
                                        {{ useFactor }}
                                    </div>
                                </div>
                                <div v-if="isEditMode">
                                    <b-input class="has-text-weight-bold is-size-5" v-model="useFactor"/>
                                </div>
                            </div>
                        </div>

                        <div class="column">
                            <div class="box">
                                <div class="title has-text-centered is-size-5 has-text-weight-semibold">Tablero Empalme</div>
                                <div class="is-divider" data-content="Protecciones" style="margin-bottom: 24px;"></div>

                                <div class="tile is-ancestor">
                                    <div class="tile is-parent" v-if="hasAProtections">
                                        <b-field label="PROTECCIONES A" label-position="on-border" class="tile">
                                            <div class="tile box is-shadowless is-paddingless" style="border: solid 0.1rem #cccccc">
                                                <div class="tile">
                                                    <div class="tile level">
                                                        <div class="tile is-parent level-item">
                                                            <div class="tile is-child has-text-centered">
                                                                <div class="is-size-7">Nominal A</div>
                                                                <div class="has-text-weight-semibold">
                                                                    {{ junction.latest_protection.nominal_a }}
                                                                    <span class="is-size-6">A</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="tile is-parent level-item">
                                                            <div class="tile is-child has-text-centered">
                                                                <div class="is-size-7">Regulada A</div>
                                                                <div class="has-text-weight-semibold">
                                                                    {{ junction.latest_protection.regulada_a }}
                                                                    <span class="is-size-6">A</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </b-field>
                                    </div>

                                    <div class="tile is-parent" v-if="hasBProtections">
                                        <b-field label="PROTECCIONES B" label-position="on-border" class="tile">
                                            <div class="tile box is-shadowless" style="border: solid 0.1rem #cccccc">
                                                <div class="tile">
                                                    <div class="tile is-parent level-item">
                                                        <div class="tile is-child has-text-centered">
                                                            <div class="is-size-7">Nominal B</div>
                                                            <div class="has-text-weight-semibold">
                                                                {{ junction.latest_protection.nominal_b }}
                                                                <span class="is-size-6">A</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="tile is-parent level-item">
                                                        <div class="tile is-child has-text-centered">
                                                            <div class="is-size-7">Regulada B</div>
                                                            <div class="has-text-weight-semibold">
                                                                {{ junction.latest_protection.regulada_b }}
                                                                <span class="is-size-6">A</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </b-field>
                                    </div>

                                    <div class="tile columns is-vcentered" v-if="!hasAProtections && !hasBProtections">
                                        <div class="column">
                                            <div class="has-text-centered has-text-weight-light has-text-grey is-size-7">
                                                NO TIENE PROTECCIONES REGISTRADAS
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                            
                                <div class="is-divider" data-content="Mediciones"style="margin-bottom: 24px;"></div>
                                <b-field label="MEDICIONES A" label-position="on-border" class="tile" v-if="hasAMeasurements">
                                    <div class="tile box is-shadowless" style="border: solid 0.1rem #cccccc">
                                        <div class="tile is-vertical">
                                            <div class="tile level" v-if="junction.latest_measurement && junction.latest_measurement.r_a_amp_measure">
                                                <div class="tile level-item">
                                                    <div class="tile is-child has-text-centered">
                                                        <div class="is-size-7">Medición R (A)</div>
                                                        <div class="has-text-weight-semibold">
                                                            {{ junction.latest_measurement.r_a_amp_measure }}
                                                            <span class="is-size-6">A</span>
                                                        </div>
                                                        <!-- <div class="has-text-weight-normal is-size-6">
                                                            {{ junction.latest_measurement.r_a_amp_measure * 220 | numeral(0,0) }} 
                                                            <span class="is-size-7">W</span>
                                                        </div> -->
                                                    </div>
                                                </div>

                                                <div class="tile level-item">
                                                    <div class="tile is-child has-text-centered">
                                                        <div class="is-size-7">Medición S (A)</div>
                                                        <div class="has-text-weight-semibold">
                                                            {{ junction.latest_measurement.s_a_amp_measure }}
                                                            <span class="is-size-6">A</span>
                                                        </div>
                                                        <!-- <div class="has-text-weight-normal is-size-6">
                                                            {{ junction.latest_measurement.s_a_amp_measure * 220 | numeral(0,0) }} 
                                                            <span class="is-size-7">W</span>
                                                        </div> -->
                                                    </div>
                                                </div>
                                                <div class="tile level-item">
                                                    <div class="tile is-child has-text-centered">
                                                        <div class="is-size-7">Medición T (A)</div>
                                                        <div class="has-text-weight-semibold">
                                                            {{ junction.latest_measurement.t_a_amp_measure }}
                                                            <span class="is-size-6">A</span>
                                                        </div>
                                                        <!-- <div class="has-text-weight-normal is-size-6">
                                                            {{ junction.latest_measurement.t_a_amp_measure * 220 | numeral(0,0) }} 
                                                            <span class="is-size-7">W</span>
                                                        </div> -->
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="tile level" v-if="junction.latest_measurement && junction.latest_measurement.r_a_volt_measure">
                                                <div class="tile level-item">
                                                    <div class="tile is-child has-text-centered">
                                                        <div class="is-size-7">Medición R (V)</div>
                                                        <div class="has-text-weight-semibold">
                                                            {{ junction.latest_measurement.r_a_volt_measure }}
                                                            <span class="is-size-6">V</span>
                                                        </div>
                                                        <!-- <div class="has-text-weight-normal is-size-6">
                                                            {{ junction.latest_measurement.r_a_volt_measure * 220 | numeral(0,0) }} 
                                                            <span class="is-size-7">W</span>
                                                        </div> -->
                                                    </div>
                                                </div>

                                                <div class="tile level-item">
                                                    <div class="tile is-child has-text-centered">
                                                        <div class="is-size-7">Medición S (V)</div>
                                                        <div class="has-text-weight-semibold">
                                                            {{ junction.latest_measurement.s_a_volt_measure }}
                                                            <span class="is-size-6">V</span>
                                                        </div>
                                                        <!-- <div class="has-text-weight-normal is-size-6">
                                                            {{ junction.latest_measurement.s_a_volt_measure * 220 | numeral(0,0) }} 
                                                            <span class="is-size-7">W</span>
                                                        </div> -->
                                                    </div>
                                                </div>
                                                <div class="tile level-item">
                                                    <div class="tile is-child has-text-centered">
                                                        <div class="is-size-7">Medición T (V)</div>
                                                        <div class="has-text-weight-semibold">
                                                            {{ junction.latest_measurement.t_a_volt_measure }}
                                                            <span class="is-size-6">V</span>
                                                        </div>
                                                        <!-- <div class="has-text-weight-normal is-size-6">
                                                            {{ junction.latest_measurement.t_a_volt_measure * 220 | numeral(0,0) }} 
                                                            <span class="is-size-7">W</span>
                                                        </div> -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </b-field>

                                <b-field label="MEDICIONES B" label-position="on-border" class="tile" v-if="hasBMeasurements">
                                    <div class="tile box is-shadowless" style="border: solid 0.1rem #cccccc">
                                        <div class="tile is-vertical">
                                            <div class="tile level" v-if="junction.latest_measurement && junction.latest_measurement.r_b_amp_measure">
                                                <div class="tile level-item">
                                                    <div class="tile is-child has-text-centered">
                                                        <div class="is-size-7">Medición R (A)</div>
                                                        <div class="has-text-weight-semibold">
                                                            {{ junction.latest_measurement.r_b_amp_measure }}
                                                            <span class="is-size-6">A</span>
                                                        </div>
                                                        <!-- <div class="has-text-weight-normal is-size-6">
                                                            {{ junction.latest_measurement.r_b_amp_measure * 220 | numeral(0,0) }} 
                                                            <span class="is-size-7">W</span>
                                                        </div> -->
                                                    </div>
                                                </div>

                                                <div class="tile level-item">
                                                    <div class="tile is-child has-text-centered">
                                                        <div class="is-size-7">Medición S (A)</div>
                                                        <div class="has-text-weight-semibold">
                                                            {{ junction.latest_measurement.s_b_amp_measure }}
                                                            <span class="is-size-6">A</span>
                                                        </div>
                                                        <!-- <div class="has-text-weight-normal is-size-6">
                                                            {{ junction.latest_measurement.s_b_amp_measure * 220 | numeral(0,0) }} 
                                                            <span class="is-size-7">W</span>
                                                        </div> -->
                                                    </div>
                                                </div>
                                                <div class="tile level-item">
                                                    <div class="tile is-child has-text-centered">
                                                        <div class="is-size-7">Medición T (A)</div>
                                                        <div class="has-text-weight-semibold">
                                                            {{ junction.latest_measurement.t_b_amp_measure }}
                                                            <span class="is-size-6">A</span>
                                                        </div>
                                                        <!-- <div class="has-text-weight-normal is-size-6">
                                                            {{ junction.latest_measurement.t_b_amp_measure * 220 | numeral(0,0) }} 
                                                            <span class="is-size-7">W</span>
                                                        </div> -->
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="tile level" v-if="junction.latest_measurement && junction.latest_measurement.r_b_volt_measure">
                                                <div class="tile level-item">
                                                    <div class="tile is-child has-text-centered">
                                                        <div class="is-size-7">Medición R (V)</div>
                                                        <div class="has-text-weight-semibold">
                                                            {{ junction.latest_measurement.r_b_volt_measure }}
                                                            <span class="is-size-6">V</span>
                                                        </div>
                                                        <!-- <div class="has-text-weight-normal is-size-6">
                                                            {{ junction.latest_measurement.r_b_volt_measure * 220 | numeral(0,0) }} 
                                                            <span class="is-size-7">W</span>
                                                        </div> -->
                                                    </div>
                                                </div>

                                                <div class="tile level-item">
                                                    <div class="tile is-child has-text-centered">
                                                        <div class="is-size-7">Medición S (V)</div>
                                                        <div class="has-text-weight-semibold">
                                                            {{ junction.latest_measurement.s_b_volt_measure }}
                                                            <span class="is-size-6">V</span>
                                                        </div>
                                                        <!-- <div class="has-text-weight-normal is-size-6">
                                                            {{ junction.latest_measurement.s_b_volt_measure * 220 | numeral(0,0) }} 
                                                            <span class="is-size-7">W</span>
                                                        </div> -->
                                                    </div>
                                                </div>
                                                <div class="tile level-item">
                                                    <div class="tile is-child has-text-centered">
                                                        <div class="is-size-7">Medición T (V)</div>
                                                        <div class="has-text-weight-semibold">
                                                            {{ junction.latest_measurement.t_b_volt_measure }}
                                                            <span class="is-size-6">V</span>
                                                        </div>
                                                        <!-- <div class="has-text-weight-normal is-size-6">
                                                            {{ junction.latest_measurement.t_b_volt_measure * 220 | numeral(0,0) }} 
                                                            <span class="is-size-7">W</span>
                                                        </div> -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </b-field>

                                <div class="tile columns is-vcentered" v-if="!hasAMeasurements && !hasBMeasurements">
                                    <div class="column">
                                        <div class="has-text-centered has-text-weight-light has-text-grey is-size-7">
                                            NO TIENE MEDICIONES REGISTRADAS
                                        </div>
                                    </div>
                                </div>

                                <button v-if="canEditJunctions & isEditMode" 
                                    @click="isEditJunctionModalActive = true"
                                    class="button is-size-7 is-small is-fullwidth" 
                                    style="padding-top: 0px; padding-bottom: 0px;">
                                    Editar parámetros
                                </button>

                                <b-modal :active.sync="isEditJunctionModalActive"
                                    has-modal-card
                                    trap-focus
                                    aria-role="dialog"
                                    aria-modal >
                                    <edit-junction-parameters 
                                        :junction="junction"
                                        :user="user"/>
                                </b-modal>
                            </div>
                        </div>
                    </div>

                    <!-- <div>Power A: {{ powerA }}</div>
                    <div>Power B: {{ powerB }}</div>

                    <div>Power Used A: {{ powerUsedA }}</div>
                    <div>Power Used B: {{ powerUsedB }}</div>

                    <div>Potencia disponible A: {{ powerA * useFactor - powerUsedA }}</div>
                    <div>Potencia disponible B: {{ powerB * useFactor - powerUsedB }}</div>

                    <div>Without Batteries Capacity: {{ withoutBatteriesCapacity }}</div>
                    <div>Without Batteries Disponibility: {{ withoutBatteriesDisponibility }}</div>

                    <div>Puntual Consumption: {{ junction.latest_measurement.punctual_consumption }}</div> -->
                    

                    <div class="is-divider" data-content="Capacidades"></div>

                    <div class="level">
                        <div class="level-item">
                            <div class="has-text-centered">
                                <div class="is-size-6">Capacidad total</div>
                                <div class="has-text-weight-semibold is-size-4">{{ totalCapacity | numeral(0,0) }} 
                                    <span class="is-size-6">kW</span>
                                </div>
                            </div>
                        </div>

                        <div class="level-item">
                            <div class="has-text-centered">
                                <div class="is-size-6">Capacidad utilizada</div>
                                <div class="has-text-weight-semibold is-size-4">{{ totalUsedCapacity | numeral(0,0) }} 
                                    <span class="is-size-6">kW</span>
                                </div>
                            </div>
                        </div>

                        <div class="level-item">
                            <div class="has-text-centered">
                                <div class="is-size-6">Capacidad disponible</div>
                                <div class="has-text-weight-semibold is-size-4">{{ totalDisponibility | numeral(0,0) }} 
                                    <span class="is-size-6">kW</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <b-progress 
                        :value="usagePercent * 100" 
                        size="is-large" 
                        type="is-success" 
                        show-value>
                        Capacidad utilizada: <span class="has-text-success">
                            {{ usagePercent | numeral('0.[00]%') }}
                        </span>
                    </b-progress>

                    <div class="field has-text-centered" v-if="canEditJunctions">
                        <b-button :type="isEditMode ? 'is-info' : 'is-link is-outlined'" size="is-small" @click="isEditMode=!isEditMode; saveChanges()">
                            <font-awesome-icon :icon="['fas', 'edit']"/>
                            &nbsp;&nbsp;{{ isEditMode ? 'Modo Edición' : 'Editar parámetros de Empalme' }}
                        </b-button>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        components: {
            EditJunctionParameters: () => import(/* webpackChunkName: "chunks/pop/power/modals/editJunction"*/'./modals/EditJunctionParameters'),
        },

        props : [
            'canEditJunctions',
            'junction',
            'user'
        ],

        data() {
            return {
                junctionTypeId: this.junction.junction_type_id,
                junctionTypes: [],
                junctionConnectionId: this.junction.junction_connection_id,
                junctionConnections: [],

                // current_junction_total: this.junction.pop.room && this.junction.pop.room[0].current_room_capacity.junction_total,

                isEditJunctionModalActive: false,
                isEditMode: false,
                clientNumber: this.junction.client_number,
                junctionNumber: this.junction.junction_number,
                useFactor: this.junction.use_factor,
                punctualConsumption: this.junction.latest_measurement ? this.junction.latest_measurement.punctual_consumption : 0
            }
        },

        watch: {
            junction(val) {
                if (this.junction.pop && this.junction.pop.rooms) {
                    console.log(this.junction.pop.rooms[0].current_room_capacity)
                }
                this.junctionTypeId = val.junction_type_id,
                this.junctionConnectionId = val.junction_connection_id,
                this.clientNumber = val.client_number,
                this.junctionNumber = val.junction_number,
                this.useFactor = val.use_factor,
                this.punctualConsumption = val.latest_measurement ? val.latest_measurement.punctual_consumption : 0
            }
        },

        mounted() {
            this.getJunctionTypes()
            this.getJunctionConnections()
        },

        computed: {
            junctionType() {
                let type = 'Sin Información'
                switch(this.junctionTypeId) {
                    case 1:
                        Object.keys(this.junctionTypes).forEach(item => {
                           type = this.junctionTypes[item].id == 1 && type == 'Sin Información' ? this.junctionTypes[item].type : type
                        })
                        break
                    case 2:
                        Object.keys(this.junctionTypes).forEach(item => {
                           type = this.junctionTypes[item].id == 2 && type == 'Sin Información' ? this.junctionTypes[item].type : type
                        })
                        break
                    case 3:
                        Object.keys(this.junctionTypes).forEach(item => {
                           type = this.junctionTypes[item].id == 3 && type == 'Sin Información' ? this.junctionTypes[item].type : type
                        })
                        break
                    case 4:
                        Object.keys(this.junctionTypes).forEach(item => {
                           type = this.junctionTypes[item].id == 4 && type == 'Sin Información' ? this.junctionTypes[item].type : type
                        })
                        break
                    default:
                        break
                }
                return type
            },

            junctionConnection() {
                let connection = 'Sin Información'
                switch(this.junctionConnectionId) {
                    case 1:
                        Object.keys(this.junctionConnections).forEach(item => {
                           connection = this.junctionConnections[item].id == 1 && connection == 'Sin Información' ? this.junctionConnections[item].connection : connection
                        })
                        break
                    case 2:
                        Object.keys(this.junctionConnections).forEach(item => {
                           connection = this.junctionConnections[item].id == 2 && connection == 'Sin Información' ? this.junctionConnections[item].connection : connection
                        })
                        break
                    case 3:
                        Object.keys(this.junctionConnections).forEach(item => {
                           connection = this.junctionConnections[item].id == 3 && connection == 'Sin Información' ? this.junctionConnections[item].connection : connection
                        })
                        break
                    case 4:
                        Object.keys(this.junctionConnections).forEach(item => {
                           connection = this.junctionConnections[item].id == 4 && connection == 'Sin Información' ? this.junctionConnections[item].connection : connection
                        })
                        break
                    default:
                        break
                }
                return connection
            },

            hasAProtections() {
                return this.junction.latest_protection && (!!+this.junction.latest_protection.nominal_a || !!+this.junction.latest_protection.regulada_a)
            },

            hasBProtections() {
                return this.junction.latest_protection && (!!+this.junction.latest_protection.nominal_b || !!+this.junction.latest_protection.regulada_b)
            },

            hasAMeasurements() {
                return this.junction.latest_measurement && (this.junction.latest_measurement.r_a_amp_measure || this.junction.latest_measurement.s_a_amp_measure || this.junction.latest_measurement.t_a_amp_measure || this.junction.latest_measurement.r_a_volt_measure || this.junction.latest_measurement.s_a_volt_measure || this.junction.latest_measurement.t_a_volt_measure)
            },

            hasBMeasurements() {
                return this.junction.latest_measurement && (this.junction.latest_measurement.r_b_amp_measure || this.junction.latest_measurement.s_b_amp_measure || this.junction.latest_measurement.t_b_amp_measure || this.junction.latest_measurement.r_b_volt_measure || this.junction.latest_measurement.s_b_volt_measure || this.junction.latest_measurement.t_b_volt_measure)
            },

            powerA() {
                let latestProtectionRA = this.junction.latest_protection ? this.junction.latest_protection.regulada_a : 0
                let latestMeasureRA_V = this.junction.latest_measurement ? this.junction.latest_measurement.r_a_volt_measure : 0
                if (this.junction.junction_type_id == 2) {
                    return latestProtectionRA * latestMeasureRA_V / 1000
                } else {
                    return latestProtectionRA * 380 * Math.sqrt(3) / 1000
                }
            },

            powerB() {
                let latestProtectionRB = this.junction.latest_protection ? this.junction.latest_protection.regulada_b : 0
                if (this.junction.junction_type_id == 2) {
                    return latestProtectionRB * 220 / 1000
                } else {
                    return latestProtectionRB * 380 * Math.sqrt(3) / 1000
                }
            },

            powerUsedA(){
                let latestMeasureRA_A = this.junction.latest_measurement ? this.junction.latest_measurement.r_a_amp_measure : 0
                let latestMeasureSA_A = this.junction.latest_measurement ? this.junction.latest_measurement.s_a_amp_measure : 0
                let latestMeasureTA_A = this.junction.latest_measurement ? this.junction.latest_measurement.t_a_amp_measure : 0
                let latestMeasureRA_V = this.junction.latest_measurement ? this.junction.latest_measurement.r_a_volt_measure : 0
                let latestMeasureSA_V = this.junction.latest_measurement ? this.junction.latest_measurement.s_a_volt_measure : 0
                let latestMeasureTA_V = this.junction.latest_measurement ? this.junction.latest_measurement.t_a_volt_measure : 0
                if (this.junction.junction_type_id == 2) {
                    return latestMeasureRA_A * latestMeasureRA_V / 1000
                } else {
                    return ( (latestMeasureRA_A * latestMeasureRA_V) + (latestMeasureSA_A * latestMeasureSA_V) + (latestMeasureTA_A * latestMeasureTA_V) ) / 1000
                }
            },

            powerUsedB(){
                let latestMeasureRB_A = this.junction.latest_measurement ? this.junction.latest_measurement.r_b_amp_measure : 0
                let latestMeasureSB_A = this.junction.latest_measurement ? this.junction.latest_measurement.s_b_amp_measure : 0
                let latestMeasureTB_A = this.junction.latest_measurement ? this.junction.latest_measurement.t_b_amp_measure : 0
                let latestMeasureRB_V = this.junction.latest_measurement ? this.junction.latest_measurement.r_b_volt_measure : 0
                let latestMeasureSB_V = this.junction.latest_measurement ? this.junction.latest_measurement.s_b_volt_measure : 0
                let latestMeasureTB_V = this.junction.latest_measurement ? this.junction.latest_measurement.t_b_volt_measure : 0
                if (this.junction.junction_type_id == 2) {
                    return latestMeasureRB_A * latestMeasureRB_V / 1000
                } else {
                    return ( (latestMeasureRB_A * latestMeasureRB_V) + (latestMeasureSB_A * latestMeasureSB_V) + (latestMeasureTB_A * latestMeasureTB_V) ) / 1000
                }
            },

            photovoltaicCapacity() {
                let capacity = 0
                if (this.junction.solar_panels.length) {
                    Object.keys(this.junction.solar_panels).forEach(element => {
                        let panel = this.junction.solar_panels[element]
                        capacity = capacity + (panel.unit_capacity * panel.quantity)
                    })
                }
                return capacity / 1000
            },

            averageConsumptionPerPhotovoltaicGroup() {
                return 0
            },

            totalCapacity(){
                return (this.powerA + this.powerB) * this.useFactor + this.photovoltaicCapacity
            },

            withoutBatteriesCapacity() {
                return this.powerUsedA + this.powerUsedB + this.averageConsumptionPerPhotovoltaicGroup
            },

            withoutBatteriesDisponibility() {
                return this.totalCapacity - this.withoutBatteriesCapacity
            },

            batteriesRecharge() {  // FALTA MEDICIONES DE PLANTA
                return 75
            },

            totalUsedCapacity() {
                return this.withoutBatteriesCapacity + this.batteriesRecharge + this.punctualConsumption
            },

            totalDisponibility: {
                get() {
                    return this.totalCapacity - this.totalUsedCapacity
                },
                set() {
                    this.emitToParent()
                }
            },

            usagePercent() {
                return this.totalCapacity != 0 ? this.totalUsedCapacity / this.totalCapacity : 0
            }
        },

        methods: {
            emitToParent (event) {
                this.$emit('childToParent', this.totalDisponibility)
            },

            getJunctionTypes() {
                axios.get(`/api/junctionTypes`).then(response => {
                    this.junctionTypes = response.data.junctionTypes
                })
            },

            getJunctionConnections() {
                axios.get(`/api/junctionConnections`).then(response => {
                    this.junctionConnections = response.data.junctions
                })
            },

            saveChanges() {
                if (!this.isEditMode) {
                    let params = {
                        'user_id': this.user.id,
                        'client_number': this.clientNumber,
                        'junction_number': this.junctionNumber,
                        'junction_type_id': this.junctionTypeId,
                        'junction_connection_id': this.junctionConnectionId,
                        'use_factor': parseFloat(this.useFactor)
                    }
                    axios.put(`/api/junctionUpdateTypes/${this.junction.id}`, params).then(response => {
                        console.log(response.data)
                    })

                    // Si el total, usado y disponible es distinto de lo que está en el original, guardar
                    // if ()
                } else {
                    console.log('change what you want!')
                }
            }        
        }
    }
</script>
