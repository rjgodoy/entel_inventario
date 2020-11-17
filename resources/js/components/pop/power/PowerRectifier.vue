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
                        <div v-if="!isEditMode" class="has-text-weight-semibold is-size-5">
                            {{ currentPowerRectifierMode }}
                        </div>

                        <div v-if="isEditMode">
                            <b-select placeholder="Selecciona..." v-model="power_rectifier_mode_id">
                                <option
                                    v-for="option in powerRectifierModes"
                                    :value="option.id"
                                    :key="option.id">
                                    {{ option.mode }}
                                </option>
                            </b-select>
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
                     <b-field label="MODULOS" label-position="on-border" class="">
                        <div class=" box is-shadowless" style="border: solid 0.1rem #cccccc">

                            <div class="field">
                                <div class="has-text-weight-light is-size-7">Nº módulos</div>
                                <div v-if="!isEditMode" class="has-text-weight-semibold is-size-5">
                                    {{ powerRectifierModulesQuantity }}
                                </div>
                                <div v-if="isEditMode">
                                    <b-input type="text" class="has-text-weight-bold is-size-5" v-model="powerRectifierModulesQuantity"/>
                                    <b-input type="text" class="has-text-weight-bold is-size-5" v-model="powerRectifierModulesCapacity"/>
                                </div>
                            </div>

                            <div class="field">
                                <div class="has-text-weight-light is-size-7">Capacidad Total Módulos</div>
                                <div class="has-text-weight-semibold is-size-5">
                                    {{ totalModulesCapacityMasterA | numeral('0,0.0') }} <span class="is-size-7">kW</span>
                                </div>
                            </div>
                        </div>
                    </b-field>
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

                <b-button v-if="isEditMode" type="is-danger" size="is-small" @click="deletePowerRectifier()" class="is-pulled-right">
                    <font-awesome-icon :icon="['fas', 'trash']"/>
                    &nbsp;&nbsp; Eliminar
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
                powerRectifierModes: [],

                currentPowerRectifierMode: 'Sin Información',

                newPowerRectifierCapacity: this.powerRectifier.capacity ? this.powerRectifier.capacity : 0,
                powerRectifierModulesCapacity: this.currentPowerRectifierModulesCapacity(),
                powerRectifierModulesQuantity: this.powerRectifier.power_rectifier_modules.length,
                power_rectifier_mode_id: this.powerRectifier.power_rectifier_mode_id,

                isEditMode: false
            }
        },

        mounted() {
            this.getPowerRectifierModes()
        },

        computed: {
            totalModulesCapacityMasterA() {
                return this.powerRectifierModulesQuantity * this.powerRectifierModulesCapacity
            },
        },

        watch: {
            power_rectifier_mode_id(val) {
                this.powerRectifierModes.forEach(item => {
                    if(item.id == val) {
                        this.currentPowerRectifierMode = item.mode
                    }
                }) 
            },
        },

        methods: {
            getPowerRectifierModes() {
                axios.get(`/api/powerRectifierModes`)
                .then(response => {
                    // console.log(response.data.telecomCompanies)
                    this.powerRectifierModes = response.data.powerRectifierModes
                    if(response.data.powerRectifierModes) {
                        this.powerRectifierModes.forEach(item => {
                            if(item.id == this.power_rectifier_mode_id) {
                                this.currentPowerRectifierMode = item.mode
                            }
                        }) 
                    }
                })
            },

            currentPowerRectifierModulesCapacity() {
                let capacity = 0
                if (this.powerRectifier.power_rectifier_modules.length) {
                    Object.keys(this.powerRectifier.power_rectifier_modules).forEach(element => {
                        capacity = this.powerRectifier.power_rectifier_modules[element].capacity
                        return capacity
                    })
                }
                return capacity
            },

            saveChanges() {
                if (!this.isEditMode && (
                    this.powerRectifier.capacity != this.newPowerRectifierCapacity ||
                    this.powerRectifier.power_rectifier_mode_id != this.power_rectifier_mode_id ||
                    this.powerRectifier.power_rectifier_modules.length != this.powerRectifierModulesQuantity ||
                    (this.currentPowerRectifierModulesCapacity() != this.powerRectifierModulesCapacity)
                    )
                ) {
                    let params = {
                        'user_id': this.user.id,
                        'capacity': parseFloat(this.newPowerRectifierCapacity),
                        'power_rectifier_mode_id': this.power_rectifier_mode_id,
                        'power_rectifier_modules_quantity': parseFloat(this.powerRectifierModulesQuantity),
                        'power_rectifier_modules_capacities': parseFloat(this.powerRectifierModulesCapacity),
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
            },

            deletePowerRectifier() {
                console.log(this.powerRectifier)
                this.$buefy.dialog.confirm({
                    message: `Confirma la eliminación de la Planta Rectificadora de la sala?`,
                    type: 'is-link',
                    onConfirm: () => {
                        axios.delete(`/api/powerRectifiers/${this.powerRectifier.id}`)
                        .then(response => {
                            // console.log(response.data)
                            this.$eventBus.$emit('power-rectifier-deleted')
                            this.$eventBus.$emit('room-data')
                        })
                    }
                })
            }      
        }
    }
</script>
