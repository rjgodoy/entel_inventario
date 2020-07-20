<template>        
    <!-- <section class="section is-paddingless"> -->
        <div class="tile is-child box">
            <div class="columns">
                <div class="column">
                    <div class="columns">
                        <div class="column">
                            <div class="has-text-weight-light is-size-7" style="margin-top: 5px;">Marca</div>
                            <div class="has-text-weight-semibold is-size-5">{{ powerRectifier.power_rectifier_type ? powerRectifier.power_rectifier_type.type : 'Sin información' }}</div>
                            <div class="has-text-weight-light is-size-7" style="margin-top: 5px;">Modelo</div>
                            <div class="has-text-weight-semibold is-size-6">{{ powerRectifier.power_rectifier_type ? powerRectifier.power_rectifier_type.model : 'Sin información' }}</div>
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
                        <div class="has-text-weight-semibold is-size-5">
                            {{ powerRectifier.capacity ? powerRectifier.capacity : 'Sin información' | numeral('0,0.0') }} <span class="is-size-7" v-if="powerRectifier.capacity">kW</span>
                        </div>
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
        </div>
    <!-- </section> -->
</template>

<script>
    export default {
        components: {
        },

        props : [
            'powerRectifier'
        ],

        data() {
            return {
            }
        },

        mounted() {
            console.log(this.powerRectifier)
        },

        computed: {
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
            
        }
    }
</script>
