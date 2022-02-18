<template>
    <section class="section" style="padding-top: 0px;">

        <div class="columns">
            <div class="column is-4 tile is-parent">
                <div class="tile is-child box">
                    <div class="has-text-weight-semibold is-size-6 has-text-link" style="padding-bottom: 10px;">TABLERO DE TRANSFERENCIA AUTOMATICA</div>

                    <div class="columns">
                        <div class="column">
                            <div class="has-text-weight-light is-size-7">Tipo</div>
                            <div class="has-text-weight-semibold is-size-5 ">{{ generatorSet.current_generator_tta && generatorSet.current_generator_tta.generator_tta_type ? generatorSet.generator_tta_type.type : 'Sin información' }}</div>
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
            <div class="column tile is-parent">
                <div class="tile is-child box">
                    <div class="has-text-weight-semibold is-size-6 has-text-link" style="padding-bottom: 10px;">CONSUMOS</div>

                    <!-- <div class="has-text-weight-normal is-size-6">STATUS:{{ generatorSet.ip ? isAlive : 'NO IP' }}</div> -->
                    <div class="columns is-multiline">
                        <div class="column is-6">
                            <div class="is-size-6 has-text-weight-normal">Horometro</div>
                            <div class="" :class="hourmeter > 0 && 'has-text-weight-semibold'">
                                {{ hourmeter | numeral('0,0.00') }}
                            </div>
                        </div>


                        <div class="column is-6">
                            <div class="is-size-6 has-text-weight-normal">Nivel Combustible</div>
                            <b-progress v-if="fuelLevelPercentage"
                                :value="fuelLevelPercentage * 100" 
                                size="is-medium"
                                :type="type"
                                show-value>
                                <span class="has-text-weight-bold has-text-dark">
                                    {{ fuelLevelPercentage * 100 | numeral('0,0.0') }}%
                                </span>
                                &nbsp;
                                <span v-if="generatorSet.generator_platform.g_model.g_fuel_pond" class="has-text-weight-bold has-text-dark">
                                    {{ fuelLevel + '/' + generatorSet.generator_platform.g_model.g_fuel_pond.capacity }}
                                </span>
                            </b-progress>
                        </div>

                        <div class="column is-6">
                            <div class="is-size-6 has-text-weight-normal">Promedio Hrs. funcionamiento / día</div>
                            <div class="" :class="this.last_day_data[0] && this.last_day_data[0].avg_hourmeter_consumption > 0 ? 'has-text-weight-semibold' : 'has-text-weight-light'">
                                {{ this.last_day_data[0] && this.last_day_data[0].avg_hourmeter_consumption | numeral('0,0.00') }}
                            </div>
                        </div>

                        <div class="column is-6">
                            <div class="is-size-6 has-text-weight-normal">Promedio consumo / día</div>
                            <div class="" :class="this.last_day_data[0] && this.last_day_data[0].avg_fuel_consumption > 0 ? 'has-text-weight-semibold' : 'has-text-weight-light'">
                                {{ this.last_day_data[0] && this.last_day_data[0].avg_fuel_consumption | numeral('0,0.00') }} Lts.
                            </div>
                        </div>

                        <div class="column is-12">
                            <button class="button is-link is-outlined is-small is-pulled-right" @click="isGeneratorDetailModalActive = true" v-if="!isEditMode">
                                <font-awesome-icon :icon="['far','clipboard']"/>
                                &nbsp;&nbsp; Detalles
                            </button>
                            <button class="button is-link is-outlined is-small is-pulled-right" @click="isGeneratorMaintenancesModalActive=true" v-if="!isEditMode">
                                <font-awesome-icon icon="bars"/>
                                &nbsp;&nbsp; Mantenciones
                            </button>
                        </div>

                        

                    </div>

                </div>
            </div>
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
                        <div class="has-text-weight-semibold is-size-5">{{ currentGeneratorSetBrand }}</div>

                        <div class="has-text-weight-light is-size-7" style="padding-top: 8px;">Modelo</div>
                        <div class="has-text-weight-semibold is-size-6">{{ currentGeneratorSetModel }}</div>
                    </div>
                    <div v-if="isEditMode">
                        <b-select placeholder="Selecciona..." v-model="generator_set_model_id">
                            <option
                                v-for="option in generatorSetModels"
                                :value="option.id"
                                :key="option.id">
                                {{ option.generator_set_brand.name }} - {{ option.name }}
                            </option>
                        </b-select>
                    </div>


                    <div class="has-text-weight-light is-size-7" style="padding-top: 8px;">Número Serie</div>
                    <div class="is-size-6" :class="generatorSet.serial_number ? '' : 'has-text-grey-light has-text-weight-light'">
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

                    <div class="field" v-if="!isEditMode">
                        <div class="has-text-weight-light is-size-7">Propio de Sala</div>
                        <div class="has-text-weight-bold is-size-6" :class="generatorSet.room_id && 'has-text-success'">{{generatorSet.room_id ? 'SI' : 'NO'}}</div>
                    </div>

                    <div class="field" v-if="isEditMode">
                        <div class="has-text-weight-light is-size-7">Propio de la sala</div>
                        <div class="field">
                            <b-switch v-model="isOnlyRoom"></b-switch>
                        </div>
                        <div v-if="isOnlyRoom">
                            <b-select placeholder="Select a name" v-model="generatorRoom">
                                <option
                                    v-for="option in rooms"
                                    :value="option.id"
                                    :key="option.id">
                                    {{ option.name }}
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
                        <!-- <div class="has-text-weight-semibold is-size-6">{{ generatorSetHorometer ? generatorSetHorometer : 'No' }}</div> -->
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
                                        <div class="has-text-weight-semibold is-size-4">{{ currentGeneratorGroup.power ? currentGeneratorGroup.power : 'Sin información' }} <span class="is-size-7" v-if="currentGeneratorGroup.power">kW</span></div>
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
                                        <div class="is-size-6" :class="generatorSet.generator_motor_type ? '' : 'has-text-grey-light has-text-weight-light'">{{ generatorSet.generator_motor_type ? generatorSet.generator_motor_type.type : 'Sin información' }}</div>
                                        <div class="has-text-weight-light is-size-7" style="margin-top: 5px;">Modelo</div>
                                        <div class="is-size-6" :class="generatorSet.generator_motor_type ? '' : 'has-text-grey-light has-text-weight-light'">{{ generatorSet.generator_motor_type ? generatorSet.generator_motor_type.model : 'Sin información' }}</div>
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
                                        <div class="is-size-6" :class="generatorSet.generator_tank_type ? '' : 'has-text-grey-light has-text-weight-light'">{{ generatorSet.generator_tank_type ? generatorSet.generator_tank_type.type : 'Sin información' }}</div>
                                    </div>
                                    
                                    <div class="column">
                                        <div class="has-text-weight-light is-size-7">Capacidad</div>
                                        <div class="has-text-weight-semibold is-size-4">{{ currentGeneratorTank ? currentGeneratorTank.capacity : 'Sin información' }}
                                            <span class="is-size-6" v-if="currentGeneratorTank">Lts</span></div>

                                        <div class="has-text-weight-light is-size-7" style="margin-top: 5px;">Consumo</div>
                                        <div class="is-size-6" :class="currentGeneratorTank && currentGeneratorTank.consumption ? '' : 'has-text-grey-light has-text-weight-light'">
                                            {{ currentGeneratorTank.consumption ? currentGeneratorTank.consumption : 'Sin información' }} 
                                            <span class="is-size-6" v-if="currentGeneratorTank.consumption">Lts</span>
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

    
            <div class="columns has-text-centered has-text-weight-semibold field pt-4">
                <div class="column is-4">
                    <!-- <button class="button is-link is-outlined is-pulled-left is-small" @click="isGeneratorDetailModalActive = true" v-if="!isEditMode">
                        <font-awesome-icon :icon="['far','clipboard']"/>
                        &nbsp;&nbsp; Detalles
                    </button>
                    <button class="button is-link is-outlined is-pulled-left is-small" @click="isGeneratorMaintenancesModalActive=true" v-if="!isEditMode">
                        <font-awesome-icon icon="bars"/>
                        &nbsp;&nbsp; Mantenciones
                    </button> -->
                </div>
                <div class="column is-4">
                    <div v-if="canEditGeneratorSets">
                        <b-button :type="isEditMode ? 'is-success is-outlined' : 'is-link is-outlined'" size="is-small" @click="isEditMode=!isEditMode; saveChanges()">
                            <font-awesome-icon :icon="['fas', 'edit']"/>
                            &nbsp;&nbsp; {{ isEditMode ? 'Salir modo edición' : 'Editar Grupo' }}
                        </b-button>
                    </div>
                </div>
                <div class="column is-4">
                    <div v-if="canEditGeneratorSets">
                        <b-button v-if="isEditMode" type="is-danger" size="is-small" @click="deleteGeneratorSet()" class="is-pulled-right">
                            <font-awesome-icon :icon="['fas', 'trash']"/>
                            &nbsp;&nbsp; Eliminar
                        </b-button>
                    </div>
                </div>
            </div>
        </div>

        <div class="is-divider" style="padding-bottom: 0px"></div>

        <b-modal :active.sync="isGeneratorDetailModalActive"
            has-modal-card
            full-screen
            trap-focus
            aria-role="dialog"
            aria-modal>
            <generator-detail
                :generator="generatorSet" 
                :last_day_data="last_day_data[0]"
                />
        </b-modal>

        <b-modal :active.sync="isGeneratorMaintenancesModalActive"
            has-modal-card
            width="1200"
            trap-focus
            aria-role="dialog"
            aria-modal>
            <generator-maintenances
                :generator="generatorSet" 
                />
        </b-modal>

    </section>

    
</template>

<script>
    export default {
        components: {
            GeneratorDetail: () => import(/* webpackChunkName: "chunks/generators/modals/generatorDetail"*/'../../equipment/generators/modals/GeneratorDetail'),
            GeneratorMaintenances: () => import(/* webpackChunkName: "chunks/generators/modals/GeneratorMaintenances"*/'../../equipment/generators/modals/GeneratorMaintenances'),
        },

        props : [
            'canEditGeneratorSets',
            'generatorSet',
            'user',
        ],

        data() {
            return {
                statistic: [],
                last_day_data: Object,
                maintainers: [],
                responsableAreas: [],
                topologyTypes: [],
                levelTypes: [],
                generatorSetModels: [],

                currentMaintainerName: 'Sin Información',
                currentResponsableArea: 'Sin Información',
                currentTopologyType: 'Sin Información',
                currentLevelType: 'Sin Información',
                currentGeneratorSetBrand: 'Sin Información',
                currentGeneratorSetModel: 'Sin Información',

                rooms: this.generatorSet.pop && this.generatorSet.pop.rooms,
                generatorRoom: this.generatorSet.room_id,
                isOnlyRoom: this.generatorSet.room_id ? true : false,

                maintainer_id: this.generatorSet.current_maintainer ? this.generatorSet.current_maintainer.telecom_company_id : null,
                responsable_area_id: this.generatorSet.current_generator_responsable ? this.generatorSet.current_generator_responsable.generator_set_responsable_area_id : null,
                topology_id: this.generatorSet.generator_set_topology_type_id,
                level_id: this.generatorSet.generator_set_level_type_id,
                generator_set_model_id: this.generatorSet.generator_set_model_id,

                newPrimeCapacity: this.generatorSet.current_generator_set_capacity ? this.generatorSet.current_generator_set_capacity.prime_capacity : 0,
                newUsedCapacity: this.generatorSet.current_generator_set_capacity ? this.generatorSet.current_generator_set_capacity.used_capacity : 0,
                isEditMode: false,

                generatorSetHorometer: null,

                isGeneratorDetailModalActive: false,
                isGeneratorMaintenancesModalActive: false

            }
        },

        mounted() {
            this.getMaintainers()
            this.getResponsableAreas()
            this.getTopologyTypes()
            this.getLevelTypes()
            this.getGeneratorSetModels()
            this.getLastDayData(this.generatorSet.id)
            
            // this.getGeneratorSetDataOnline()
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

            fuelLevelPercentage() {
                return this.last_day_data[0] ? this.last_day_data[0].fuel_level_percentage : null
            },

            fuelLevel() {
                return this.last_day_data[0] ? this.last_day_data[0].fuel_level : 0
            },

            type() {
                let type = ''
                if (this.fuelLevelPercentage <= 0.2) {
                    type = 'is-danger'
                } else if (this.fuelLevelPercentage > 0.2 && this.fuelLevelPercentage <= 0.5) {
                    type = 'is-warning' 
                } else {
                    type = 'is-success'
                }
                return type
            },

            hourmeter() {
                return this.last_day_data[0] ? this.last_day_data[0].hourmeter : 'N/A'
            },

            isAlive(){
                // Función desactivada porque servidor no llega a la IP de los generadores
                let params = {
                    'url': this.generatorSet.ip
                }
                axios.get('/api/doPing', { params: params })
                .then(response => {
                    console.log(response.data)
                    return response.data
                })
            },

            
        },

        watch: {
            generatorSet(val) {
                this.getLastDayData(val.id)
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

            generator_set_model_id(val) {
                this.generatorSetModels.forEach(item => {
                    if(item.id == val) {
                        this.currentGeneratorSetBrand = item.generator_set_brand.name
                        this.currentGeneratorSetModel = item.name
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

            getGeneratorSetModels() {
                axios.get(`/api/generatorSetModels`).then(response => {
                    // console.log(response.data)
                    if(response.data.generatorSetModels) {
                        this.generatorSetModels = response.data.generatorSetModels
                        this.generatorSetModels.sort(function (a, b) {
                            return a.generator_set_brand.name - b.generator_set_brand.name;
                        });
                    
                        this.generatorSetModels.forEach(item => {
                            if(item.id == this.generator_set_model_id) {
                                this.currentGeneratorSetBrand = item.generator_set_brand.name
                                this.currentGeneratorSetModel = item.name
                            }
                        }) 
                    }
                })
            },

            getLastDayData(generator_id) {
                // this.isLoading = true
                let params = {
                    'generator_id': parseInt(generator_id)
                }

                axios.get('/api/generatorLastDay', { params: params })
                .then((response) => {
                    console.log(response.data)
                    this.last_day_data = response.data
                    // this.last_data = response.data[0]
                    // this.isLoading = false
                })
            },

            // async getGeneratorSetDataOnline() {
            //     let params = {
            //         'pop_id': this.generatorSet.pop_id
            //     }
            //     await axios.get(`/api/generatorSetDataCapacity`, { params: params })
            //     .then(response => {
            //         console.log(response.data)
            //         this.generatorSetDataCapacity = response.data
            //     })
            // },

            saveChanges() {
                // console.log(this.currentGeneratorResponsableAreaId)
                if (!this.isEditMode && 
                    (this.primeCapacity != this.newPrimeCapacity || 
                    (this.usedCapacity != this.newUsedCapacity) || 
                    (this.generatorSet.current_maintainer && this.generatorSet.current_maintainer.telecom_company_id != this.maintainer_id) ||
                    this.generatorSet.generator_set_topology_type_id != this.topology_id ||
                    this.generatorSet.generator_set_level_type_id != this.level_id ||
                    this.generatorSet.generator_set_model_id != this.generator_set_model_id ||
                    this.currentGeneratorResponsableAreaId != this.responsable_area_id) ||
                    this.generatorRoom != this.generatorSet.room_id) {
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
                        'generator_set_model_id': parseFloat(this.generator_set_model_id),
                        'is_only_room': this.isOnlyRoom,
                        'room_id': this.generatorRoom
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
