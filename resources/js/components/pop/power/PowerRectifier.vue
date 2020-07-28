<template>        
    <!-- <section class="section is-paddingless"> -->
        <div class="tile is-child box">
            <div class="columns">
                <div class="column">
                    <div class="columns">
                        <div class="column">
                            <div class="has-text-weight-light is-size-7" style="margin-top: 5px;">Marca</div>
                            <div class="has-text-weight-semibold is-size-5">{{ powerRectifier.power_rectifier_type ? powerRectifier.power_rectifier_type.type : 'Sin información' }}</div>
                            <div class="has-text-weight-light is-size-7" style="margin-top: 5px;" v-if="powerRectifier.power_rectifier_type.model">Modelo</div>
                            <div class="has-text-weight-semibold is-size-6" v-if="powerRectifier.power_rectifier_type.model">{{ powerRectifier.power_rectifier_type ? powerRectifier.power_rectifier_type.model : 'Sin información' }}</div>
                        </div>
                        <div class="column">
                            <div class="column has-text-right">
                                <font-awesome-icon
                                    :icon="['fas', 'random']" 
                                    size="3x" 
                                    class="has-text-grey-lighter" 
                                    style="opacity: 0.5;"/>
                            </div>
                        </div>
                        
                    </div>

                    <div class="field">
                        <div class="has-text-weight-light is-size-7" style="margin-top: 5px;">Modo</div>
                        <div class="has-text-weight-semibold is-size-5">
                            {{ powerRectifier.power_rectifier_mode ? powerRectifier.power_rectifier_mode.mode : 'Sin información' }}
                        </div>
                    </div>

                    <div class="field">
                        <div class="has-text-weight-light is-size-7" style="margin-top: 5px;">Capacidad total</div>
                        <div class="has-text-weight-semibold is-size-5" v-if="!isEditMode">
                            {{ newPowerRectifierCapacity | numeral('0,0.0') }} <span class="is-size-7">kW</span>
                        </div>
                        <b-input v-if="isEditMode" type="number" class="has-text-weight-bold is-size-5" v-model="newPowerRectifierCapacity"/>
                    </div>
                </div>


                <div class="column">
                    <div class="field">
                        <div class="has-text-weight-light is-size-7">Nº módulos</div>
                        <div class="has-text-weight-semibold is-size-5">
                            {{ powerPlantAModulesQuantity }}
                        </div>
                    </div>

                    <div class="field">
                        <div class="has-text-weight-light is-size-7">Capacidad Módulos</div>
                        <div class="has-text-weight-semibold is-size-5">
                            {{ totalModulesCapacityMasterA | numeral('0,0.0') }} <span class="is-size-7">kW</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- <hr/> -->

            <!-- <div class="columns">
                <div class="column">
                    <div class="has-text-weight-semibold">Bancos de Baterías</div>
                    <div class="columns is-multiline">
                        <div class="column is-6" v-for="batteryBank in powerRectifier.battery_banks" :key="batteryBank.id">
                            <div class="box">
                                <div class="field">
                                    <div class="has-text-weight-light is-size-7">Tipo Banco</div>
                                    <div class="has-text-weight-semibold is-size-5">
                                        {{ batteryBank.battery_bank_brand ? batteryBank.battery_bank_brand.battery_brand : 'Sin Información' }}
                                    </div>
                                </div>

                                <div class="field">
                                    <div class="has-text-weight-light is-size-7">Capacidad Banco</div>
                                    <div class="has-text-weight-semibold is-size-5">
                                        {{ batteryBank.capacity ? batteryBank.capacity : 'Sin Información' }} <span v-if="batteryBank.capacity" class="is-size-7">Ah</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="column">
                    <div class="box">
                        <div></div>
                    </div>
                </div>
            </div> -->
            <div class="field has-text-centered" v-if="canEdit">
                <b-button :type="isEditMode ? 'is-info' : 'is-link is-outlined'" size="is-small" @click="isEditMode=!isEditMode; saveChanges()">
                    <font-awesome-icon :icon="['fas', 'edit']"/>
                    &nbsp;&nbsp;{{ isEditMode ? 'Modo Edición' : 'Editar parámetros de Grupo' }}
                </b-button>
            </div>
        </div>
    <!-- </section> -->
</template>

<script>
    export default {
        components: {
        },

        props : [
            'powerRectifier',
            'canEdit',
            'user'
        ],

        data() {
            return {
                newPowerRectifierCapacity: this.powerRectifier.capacity ? this.powerRectifier.capacity : 0,
                isEditMode: false
            }
        },

        mounted() {
            console.log(this.canEdit)
        },

        computed: {
            powerRectifierCapacity() {
                return this.powerRectifier.capacity
            },

            powerRectfierModules() {
                return this.powerRectifier.power_rectifier_modules
            },

            powerPlantAModulesQuantity() {
                return this.powerRectfierModules.length
            },

            totalModulesCapacityMasterA() {
                let totalCapacity = 0
                Object.keys(this.powerRectfierModules).forEach(element => {
                    totalCapacity = totalCapacity + this.powerRectfierModules[element].capacity
                })
                return totalCapacity
            }
        },

        methods: {
            saveChanges() {
                if (!this.isEditMode && (
                    this.powerRectifierCapacity != this.newPowerRectifierCapacity
                    // this.usedCapacity != this.newUsedCapacity || 
                    // this.generatorSet.current_maintainer.telecom_company_id != this.maintainer_id ||
                    // this.generatorSet.generator_set_topology_type_id != this.topology_id ||
                    // this.generatorSet.generator_set_level_type_id != this.level_id ||
                    // this.currentGeneratorResponsableAreaId != this.responsable_area_id
                    )
                ) {

                    let params = {
                        'api_token': this.user.api_token,
                        'user_id': this.user.id,
                        'capacity': parseFloat(this.newPowerRectifierCapacity),
                        // 'used_capacity': parseFloat(this.newUsedCapacity),
                        // 'maintainer_id': this.maintainer_id,
                        // 'generator_set_responsable_area_id': this.responsable_area_id,
                        // 'generator_set_topology_type_id': this.topology_id,
                        // 'generator_set_level_type_id': this.level_id
                    }
                    // console.log(params)
                    axios.put(`/api/powerRectifiers/${this.powerRectifier.id}`, params)
                    .then(response => {
                        console.log(response.data)
                        this.$eventBus.$emit('power-rectifier-updated');
                    })
                }
            }       
        }
    }
</script>
