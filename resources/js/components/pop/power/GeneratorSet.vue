<template>
    <section class="section" style="padding-top: 0px;">

        <div class="columns">
            <div class="column is-3"></div>
            <div class="column is-6 tile is-parent">
                <div class="tile is-child box">
                    <div class="has-text-weight-semibold is-size-6 has-text-link" style="padding-bottom: 10px;">TABLERO DE TRANSFERENCIA AUTOMATICA</div>

                    <div class="columns">
                        <div class="column">
                            <div class="has-text-weight-light is-size-7">Tipo</div>
                            <div class="has-text-weight-semibold is-size-5 ">{{ generatorSet.generator_tta_type ? generatorSet.generator_tta_type.type : 'Sin información' }}</div>
                        </div>

                        <div class="column has-text-right">
                            <font-awesome-icon
                                :icon="['fas', 'microchip']" 
                                size="3x" 
                                class="has-text-grey-lighter" 
                                style="opacity: 0.5;"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-3"></div>
        </div>

        <div class="box">
            <div class="columns tile is-parent">

                <div class="column has-text-centered">
                    <font-awesome-icon
                        :icon="['fas', 'charging-station']" 
                        size="4x" 
                        class="has-text-grey" 
                        style="opacity: 0.5; padding-top: 10px;"/>
                </div>

                <div class="column">
                    <div v-if="!isEditMode">
                        <div class="has-text-weight-light is-size-7">Marca</div>
                        <div class="has-text-weight-semibold is-size-5">{{ currentGeneratorSetType }}</div>

                        <div class="has-text-weight-light is-size-7" style="padding-top: 8px;">Modelo</div>
                        <div class="has-text-weight-semibold is-size-6">{{ currentGeneratorSetModel }}</div>
                    </div>
                    <div v-if="isEditMode">
                        <b-select placeholder="Selecciona..." v-model="generator_set_type_id">
                            <option
                                v-for="option in generatorSetTypes"
                                :value="option.id"
                                :key="option.id">
                                {{ option.type }} - {{ option.model }}
                            </option>
                        </b-select>
                    </div>


                    <div class="has-text-weight-light is-size-7" style="padding-top: 8px;">Número Serie</div>
                    <div class="has-text-weight-semibold is-size-6" :class="generatorSet.serial_number ? '' : 'has-text-info'">
                        {{ generatorSet.serial_number ? generatorSet.serial_number : 'Sin información' }}
                    </div>
                </div>

                <div class="column">
                    <div class="field">
                        <div class="has-text-weight-light is-size-7">Topología</div>
                        <div v-if="!isEditMode" class="has-text-weight-semibold is-size-5">{{ currentTopologyType }}</div>

                        <div v-if="isEditMode">
                            <b-select placeholder="Selecciona..." v-model="topology_id">
                                <option
                                    v-for="option in topologyTypes"
                                    :value="option.id"
                                    :key="option.id">
                                    {{ option.type }}
                                </option>
                            </b-select>
                        </div>
                    </div>

                    <div class="field">
                        <div class="has-text-weight-light is-size-7">Plano</div>
                        <div v-if="!isEditMode" class="has-text-weight-semibold is-size-5">{{ currentLevelType }}</div>

                        <div v-if="isEditMode">
                            <b-select placeholder="Selecciona..." v-model="level_id">
                                <option
                                    v-for="option in levelTypes"
                                    :value="option.id"
                                    :key="option.id">
                                    {{ option.type }}
                                </option>
                            </b-select>
                        </div>
                    </div>
                </div>

                <div class="column has-text-right">
                    <div class="block">
                        <div class="has-text-weight-light is-size-7">Mantenedor</div>
                        <div v-if="!isEditMode" class="has-text-weight-bold is-size-5">
                            {{ currentMaintainerName }}
                        </div>
                        
                        <div v-if="isEditMode" class="is-pulled-right">
                            <b-select placeholder="Selecciona..." v-model="maintainer_id">
                                <option
                                    v-for="option in maintainers"
                                    :value="option.id"
                                    :key="option.id">
                                    {{ option.name }}
                                </option>
                            </b-select>
                        </div>
                    </div>

                    <div class="block" :style="isEditMode ? 'padding-top: 24px;' : ''">
                        <div class="has-text-weight-light is-size-7">Responsable</div>
                        <div v-if="!isEditMode" class="has-text-weight-bold is-size-5">
                            {{ currentResponsableArea }}
                        </div>
                        
                        <div v-if="isEditMode" class="is-pulled-right">
                            <b-select placeholder="Selecciona..." v-model="responsable_area_id">
                                <option
                                    v-for="option in responsableAreas"
                                    :value="option.id"
                                    :key="option.id">
                                    {{ option.area }}
                                </option>
                            </b-select>
                        </div>
                    </div>

                    <div class="block" :style="isEditMode ? 'padding-top: 24px;' : ''">
                        <div class="has-text-weight-light is-size-7">Horómetro</div>
                        <div class="has-text-weight-semibold is-size-6">{{ generatorSet.horometer == 1 ? 'Si' : 'No' }}</div>
                    </div>
                </div>
            </div>


            <div class="is-divider" data-content="EQUIPAMIENTO"></div>

            <div class="tile is-ancestor">
                <div class="tile">
                    <div class="tile is-parent columns">

                        <div class="tile column">
                            <div class="tile is-child box">
                                <div class="has-text-weight-semibold is-size-6 has-text-link" style="padding-bottom: 10px;">GENERADOR</div>
                                <div class="columns">
                                    <!-- <div class="column">
                                        <div class="has-text-weight-light is-size-7">Marca</div>
                                        <div class="has-text-weight-semibold is-size-6" :class="currentGeneratorGroup.generator_group_type ? '' : 'has-text-info'">
                                            {{ currentGeneratorGroup.generator_group_type ? currentGeneratorGroup.generator_group_type.type : 'Sin información' }}
                                        </div>
                                        <div class="has-text-weight-light is-size-7" style="margin-top: 5px;">Modelo</div>
                                        <div class="has-text-weight-semibold is-size-6" :class="currentGeneratorGroup.generator_group_type ? '' : 'has-text-info'">
                                            {{ currentGeneratorGroup.generator_group_type ? currentGeneratorGroup.generator_group_type.model : 'Sin información' }}
                                        </div>
                                    </div> -->
                                    
                                    <div class="column">
                                        <div class="has-text-weight-light is-size-7">Potencia</div>
                                        <div class="has-text-weight-semibold is-size-6">{{ currentGeneratorGroup.power ? currentGeneratorGroup.power : 'Sin información' }} <span class="is-size-7" v-if="currentGeneratorGroup.power">kW</span></div>
                                    </div>

                                    <!-- <div class="column has-text-centered">
                                        <font-awesome-icon
                                            :icon="['fas', 'charging-station']" 
                                            size="3x" 
                                            class="has-text-grey-lighter" 
                                            style="opacity: 0.5;"/>
                                    </div> -->
                                </div>
                            </div>
                        </div>

                        <div class="tile column">
                            <div class="tile is-child box">
                                <div class="has-text-weight-semibold is-size-6 has-text-link" style="padding-bottom: 10px;">MOTOR</div>
                                <div class="columns">
                                    <div class="column">
                                        <div class="has-text-weight-light is-size-7">Marca</div>
                                        <div class="has-text-weight-semibold is-size-6" :class="generatorSet.generator_motor_type ? '' : 'has-text-info'">{{ generatorSet.generator_motor_type ? generatorSet.generator_motor_type.type : 'Sin información' }}</div>
                                        <div class="has-text-weight-light is-size-7" style="margin-top: 5px;">Modelo</div>
                                        <div class="has-text-weight-semibold is-size-6" :class="generatorSet.generator_motor_type ? '' : 'has-text-info'">{{ generatorSet.generator_motor_type ? generatorSet.generator_motor_type.model : 'Sin información' }}</div>
                                    </div>
                                    
                                    <!-- <div class="column">
                                        <div class="has-text-weight-light is-size-7">Potencia</div>
                                        <div class="has-text-weight-normal is-size-6">{{ generatorSet.current_generator_group ? generatorSet.current_generator_group.power : 'Sin información' }} <span class="is-size-7" v-if="generatorSet.current_generator_group">kW</span></div>
                                    </div> -->

                                    <!-- <div class="column has-text-centered">
                                        <font-awesome-icon
                                            :icon="['fas', 'cog']" 
                                            size="3x" 
                                            class="has-text-grey-lighter" 
                                            style="opacity: 0.5;"
                                            spin/>
                                    </div> -->
                                </div>
                            </div>
                        </div>

                        <div class="tile column">
                            <div class="tile is-child box">
                                <div class="has-text-weight-semibold is-size-6 has-text-link" style="padding-bottom: 10px;">ESTANQUE</div>
                                <div class="columns">
                                    <div class="column">
                                        <div class="has-text-weight-light is-size-7">Marca</div>
                                        <div class="has-text-weight-semibold is-size-6" :class="generatorSet.generator_tank_type ? '' : 'has-text-info'">{{ generatorSet.generator_tank_type ? generatorSet.generator_tank_type.type : 'Sin información' }}</div>
                                    </div>
                                    
                                    <div class="column">
                                        <div class="has-text-weight-light is-size-7">Capacidad</div>
                                        <div class="has-text-weight-semibold is-size-6">{{ currentGeneratorTank ? currentGeneratorTank.capacity : 'Sin información' }} <span class="is-size-7" v-if="currentGeneratorTank">Lts</span></div>

                                        <div class="has-text-weight-light is-size-7" style="margin-top: 5px;">Consumo</div>
                                        <div class="has-text-weight-semibold is-size-6" :class="currentGeneratorTank && currentGeneratorTank.consumption ? '' : 'has-text-info'">
                                            {{ currentGeneratorTank ? currentGeneratorTank.consumption : 'Sin información' }} 
                                            <span class="is-size-7" v-if="currentGeneratorTank">Lts</span>
                                        </div>
                                    </div>

                                    <!-- <div class="column has-text-centered">
                                        <font-awesome-icon
                                            :icon="['fas', 'gas-pump']" 
                                            size="3x" 
                                            class="has-text-grey-lighter" 
                                            style="opacity: 0.5;"/>
                                    </div> -->
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="is-divider" data-content="CAPACIDADES"></div>

            <div class="level">
                <div class="level-item">
                    <div class="has-text-centered">
                        <div class="is-size-6">Capacidad Prime</div>
                        <div v-if="!isEditMode" class="has-text-weight-semibold is-size-5">{{ newPrimeCapacity | numeral(0,0) }} <span class="is-size-6">kW</span></div>
                        <b-input v-if="isEditMode" type="number" class="has-text-weight-bold is-size-5" v-model="newPrimeCapacity"/>
                    </div>
                </div>

                <div class="level-item">
                    <div class="has-text-centered">
                        <div class="is-size-6">Capacidad</div>
                        <div class="has-text-weight-semibold is-size-4">{{ capacity | numeral('0,0.0') }} 
                            <span class="is-size-6">kW</span>
                        </div>
                    </div>
                </div>

                <div class="level-item">
                    <div class="has-text-centered">
                        <div class="is-size-6">Capacidad disponible</div>
                        <div class="has-text-weight-semibold is-size-4">{{ availableCapacity | numeral('0,0.0') }} 
                            <span class="is-size-6">kW</span>
                        </div>
                    </div>
                </div>

                <div class="level-item">
                    <div class="has-text-centered">
                        <div class="is-size-6">Capacidad utilizada</div>
                        <div v-if="!isEditMode" class="has-text-weight-semibold is-size-5">{{ newUsedCapacity | numeral('0,0.0') }} <span class="is-size-6">kW</span></div>
                        <b-input v-if="isEditMode" type="number" class="has-text-weight-bold is-size-5" v-model="newUsedCapacity"/>
                    </div>
                </div>
            </div>

            <div class="field has-text-centered" v-if="canEditGeneratorSets">
                <b-button :type="isEditMode ? 'is-info' : 'is-link is-outlined'" size="is-small" @click="isEditMode=!isEditMode; saveChanges()">
                    <font-awesome-icon :icon="['fas', 'edit']"/>
                    &nbsp;&nbsp;{{ isEditMode ? 'Modo Edición' : 'Editar parámetros de Grupo' }}
                </b-button>

                <b-button v-if="isEditMode" type="is-danger" size="is-small" @click="deleteGeneratorSet()" class="is-pulled-right">
                    <font-awesome-icon :icon="['fas', 'trash']"/>
                    &nbsp;&nbsp; Eliminar
                </b-button>
            </div>
        </div>

        <div class="is-divider" style="padding-bottom: 0px"></div>

    </section>
</template>

<script>
    export default {
        components: {
        },

        props : [
            'canEditGeneratorSets',
            'generatorSet',
            'user',
        ],

        data() {
            return {
                maintainers: [],
                responsableAreas: [],
                topologyTypes: [],
                levelTypes: [],
                generatorSetTypes: [],

                currentMaintainerName: 'Sin Información',
                currentResponsableArea: 'Sin Información',
                currentTopologyType: 'Sin Información',
                currentLevelType: 'Sin Información',
                currentGeneratorSetType: 'Sin Información',
                currentGeneratorSetModel: 'Sin Información',

                maintainer_id: this.generatorSet.current_maintainer ? this.generatorSet.current_maintainer.telecom_company_id : null,
                responsable_area_id: this.generatorSet.current_generator_responsable ? this.generatorSet.current_generator_responsable.generator_set_responsable_area_id : null,
                topology_id: this.generatorSet.generator_set_topology_type_id,
                level_id: this.generatorSet.generator_set_level_type_id,
                generator_set_type_id: this.generatorSet.generator_set_type_id,

                newPrimeCapacity: this.generatorSet.current_generator_set_capacity ? this.generatorSet.current_generator_set_capacity.prime_capacity : 0,
                newUsedCapacity: this.generatorSet.current_generator_set_capacity ? this.generatorSet.current_generator_set_capacity.used_capacity : 0,
                isEditMode: false,

            }
        },

        mounted() {
            this.getMaintainers()
            this.getResponsableAreas()
            this.getTopologyTypes()
            this.getLevelTypes()
            this.getGeneratorSetTypes()
        },

        computed: {
            currentGeneratorGroup() {
                return this.generatorSet.current_generator_group
            },
            currentGeneratorTank() {
                return this.generatorSet.current_generator_tank
            },
            currentGeneratorResponsableAreaId() {
                return this.generatorSet.current_generator_responsable ? this.generatorSet.current_generator_responsable.generator_set_responsable_area_id : null
            },

            primeCapacity() {
                return this.generatorSet.current_generator_set_capacity ? this.generatorSet.current_generator_set_capacity.prime_capacity : 0
            },

            capacity() {
                return this.newPrimeCapacity * 0.8
            },

            usedCapacity() {
                return this.generatorSet.current_generator_set_capacity ? this.generatorSet.current_generator_set_capacity.used_capacity : 0
            },

            availableCapacity() {
                return this.capacity - this.newUsedCapacity
            },
        },

        watch: {
            generatorSet(val) {
                // console.log(val)
            },

            maintainer_id(val) {
                this.maintainers.forEach(item => {
                    if(item.id == val) {
                        this.currentMaintainerName = item.name
                    }
                }) 
            },

            responsable_area_id(val) {
                this.responsableAreas.forEach(item => {
                    if(item.id == val) {
                        this.currentResponsableArea = item.area
                    }
                }) 
            },

            topology_id(val) {
                this.topologyTypes.forEach(item => {
                    if(item.id == val) {
                        this.currentTopologyType = item.type
                    }
                }) 
            },

            level_id(val) {
                this.levelTypes.forEach(item => {
                    if(item.id == val) {
                        this.currentLevelType = item.type
                    }
                }) 
            },

            generator_set_type_id(val) {
                this.generatorSetTypes.forEach(item => {
                    if(item.id == val) {
                        this.currentGeneratorSetType = item.type
                        this.currentGeneratorSetModel = item.model
                    }
                }) 
            }

        },

        methods: {
            getMaintainers() {
                axios.get(`/api/telecomCompanies`).then(response => {
                    // console.log(response.data.telecomCompanies)
                    this.maintainers = response.data.telecomCompanies
                    if(response.data.telecomCompanies) {
                        this.maintainers.forEach(item => {
                            if(item.id == this.maintainer_id) {
                                this.currentMaintainerName = item.name
                            }
                        }) 
                    }
                })
            },

            getResponsableAreas() {
                axios.get(`/api/generatorSetResponsableAreas`).then(response => {
                    // console.log(response.data.responsableAreas)
                    this.responsableAreas = response.data.responsableAreas
                    
                    if(response.data.responsableAreas) {
                        this.responsableAreas.forEach(item => {
                            if(item.id == this.responsable_area_id) {
                                this.currentResponsableArea = item.area
                            }
                        })
                    } 
                })
            },

            getTopologyTypes() {
                axios.get(`/api/generatorSetTopologyTypes`).then(response => {
                    // console.log(response.data.telecomCompanies)
                    this.topologyTypes = response.data.topologyTypes
                    if(response.data.topologyTypes) {
                        this.topologyTypes.forEach(item => {
                            if(item.id == this.topology_id) {
                                this.currentTopologyType = item.type
                            }
                        }) 
                    }
                })
            },

            getLevelTypes() {
                axios.get(`/api/generatorSetLevelTypes`).then(response => {
                    // console.log(response.data.telecomCompanies)
                    this.levelTypes = response.data.levelTypes
                    if(response.data.levelTypes) {
                        this.levelTypes.forEach(item => {
                            if(item.id == this.level_id) {
                                this.currentLevelType = item.type
                            }
                        }) 
                    }
                })
            },

            getGeneratorSetTypes() {
                axios.get(`/api/generatorSetTypes`).then(response => {
                    // console.log(response.data.telecomCompanies)
                    this.generatorSetTypes = response.data.generatorSetTypes
                    if(response.data.generatorSetTypes) {
                        this.generatorSetTypes.forEach(item => {
                            if(item.id == this.generator_set_type_id) {
                                this.currentGeneratorSetType = item.type
                            }
                        }) 
                    }
                })
            },

            saveChanges() {
                // console.log(this.currentGeneratorResponsableAreaId)
                if (!this.isEditMode && 
                    (this.primeCapacity != this.newPrimeCapacity || 
                    this.usedCapacity != this.newUsedCapacity || 
                    this.generatorSet.current_maintainer.telecom_company_id != this.maintainer_id ||
                    this.generatorSet.generator_set_topology_type_id != this.topology_id ||
                    this.generatorSet.generator_set_level_type_id != this.level_id ||
                    this.generatorSet.generator_set_type_id != this.generator_set_type_id ||
                    this.currentGeneratorResponsableAreaId != this.responsable_area_id)) {
                    // console.log(this.currentGeneratorResponsableAreaId)
                    let params = {
                        'user_id': parseFloat(this.user.id),
                        'generator_set_id': parseFloat(this.generatorSet.id),
                        'prime_capacity': parseFloat(this.newPrimeCapacity),
                        'used_capacity': parseFloat(this.newUsedCapacity),
                        'maintainer_id': parseFloat(this.maintainer_id),
                        'generator_set_responsable_area_id': parseFloat(this.responsable_area_id),
                        'generator_set_topology_type_id': parseFloat(this.topology_id),
                        'generator_set_level_type_id': parseFloat(this.level_id),
                        'generator_set_type_id': parseFloat(this.generator_set_type_id)
                    }
                    // console.log(params)
                    axios.put(`/api/generatorSets/${this.generatorSet.id}`, params).then(response => {
                        this.$eventBus.$emit('generator-set-capacities-updated');
                    })
                }
            },

            deleteGeneratorSet() {
                console.log(this.generatorSet)
                this.$buefy.dialog.confirm({
                    message: `Confirma la eliminación del Grupo Electrógeno de la sala?`,
                    type: 'is-link',
                    onConfirm: () => {
                        axios.delete(`/api/generatorSets/${this.generatorSet.id}`)
                        .then(response => {
                            // console.log(response.data)
                            this.$eventBus.$emit('generator-set-deleted')
                            this.$eventBus.$emit('room-data')
                        })
                    }
                })
            }
        }
    }
</script>
