<template>
    <div class="columns">

        <!-- ##### GENERAL ##### -->
        <div class="column is-3 has-text-centered">
            <div class="has-text-centered is-size-7 has-text-weight-bold" style="padding: 4px;">GENERAL</div>
            <div class="" style="padding: 8px; border: 1px solid #aaa; border-radius: 15px; position: relative;"">
                <div class="" style="padding: 4px">
                    <div class="pb-1">
                        <font-awesome-icon 
                            icon="circle"
                            size="2x" 
                            :class="'has-text-' + totalCapacityPercentage.color"
                            />
                        <b-tooltip
                            label="Tener en cuenta capacidad de espacio."
                            size="is-small"
                            type="is-light"
                            position="is-right"
                            class="pl-1"
                            multilined
                            v-if="totalCapacitySurfacePercentage.percentage <= surface_treshold_warning && totalCapacityPercentage.energy_percentage > energy_treshold_warning">
                            <font-awesome-icon
                                icon="exclamation-triangle"
                                size="1x" 
                                class="has-text-warning"
                                />
                        </b-tooltip>
                    </div>
                    <div class="is-size-7 has-text-weight-semibold">{{ totalCapacityPercentage.energy_percentage | numeral('0,0.0%') }}</div>
                    <div class="has-text-centered has-text-white">
                        <div class=" is-size-5 has-text-weight-bold">
                            {{ totalCapacity | numeral('0,0.0') }}
                            <span class="is-size-6 has-text-weight-light">kW</span>
                        </div>
                        <p class="has-text-weight-light is-size-7">Disponibles</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="column has-text-centered">

            <div class="level has-text-centered is-size-7 has-text-weight-bold" style="margin: 0; padding: 4px;">
                <div class="level-item">ENERGIA</div>
                <div class="level-item" v-if="canViewClimate">CLIMA</div>
                <div class="level-item">ESPACIO</div>
            </div>

            <div style="padding: 8px; border: 1px solid #aaa; border-radius: 15px;">
                <div class="level"  style="padding: 4px">

                    <!-- ##### ENERGIA ##### -->
                    <div class="level-item" style="position: relative">
                        <div class="">
                            <div class="pb-1">
                                <font-awesome-icon 
                                    icon="circle" 
                                    size="2x"
                                    :class="'has-text-' + totalCapacityEnergyPercentage.color"
                                    />
                            </div>
                            <div class="is-size-7 has-text-weight-semibold">{{ totalCapacityEnergyPercentage.percentage | numeral('0,0.0%') }}</div>
                            <div class="has-text-centered has-text-white">
                                <div class=" is-size-5 has-text-weight-bold">
                                    {{ canViewClimate ? totalAvailableEnergyCapacity : Math.min(totalAvailableEnergyCapacity, totalAvailableClimateCapacity) | numeral('0,0.0') }}
                                    <span class="is-size-6 has-text-weight-light">kW</span>
                                </div>
                                <p class="has-text-weight-light is-size-7">Disponibles</p>
                            </div>
                        </div>
                    </div>

                    <!-- ##### CLIMA ##### -->
                    <div class="level-item" v-if="canViewClimate">
                        <div class="">
                            <div class="pb-1">
                                <font-awesome-icon 
                                    icon="circle" 
                                    size="2x"
                                    :class="'has-text-' + totalCapacityClimatePercentage.color"
                                    />
                            </div>
                            <div class="is-size-7 has-text-weight-semibold">{{ totalCapacityClimatePercentage.percentage | numeral('0,0.0%') }}</div>
                            <div class="has-text-centered has-text-white">
                                <div class=" is-size-5 has-text-weight-bold">{{ totalAvailableClimateCapacity | numeral('0,0.0') }}
                                <span class="is-size-6 has-text-weight-light">kW</span></div>
                                <p class="has-text-weight-light is-size-7">Disponibles</p>
                            </div>
                        </div>
                    </div>

                    <!-- ##### ESPACIO ##### -->
                    <div class="level-item">
                        <div class="">
                            <div class="pb-1">
                                <font-awesome-icon 
                                    icon="circle" 
                                    size="2x"
                                    :class="'has-text-' + totalCapacitySurfacePercentage.color"
                                    />
                            </div>
                            <div class="is-size-7 has-text-weight-semibold">{{ totalCapacitySurfacePercentage.percentage | numeral('0,0.0%') }}</div>
                            <div class="has-text-centered has-text-white">
                                <div class=" is-size-5 has-text-weight-bold">{{ totalAvailableSurfaceCapacity | numeral('0,0.0') }}</div>
                                <p class="has-text-weight-light is-size-7">Disponibles</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    </div>
</template>

<script>
    // import { library } from "@fortawesome/fontawesome-svg-core";
    // import { faCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
    // import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
    // import { faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons'
    // library.add(faCircle, faSearch);

    export default {
        components: {
        },
        props : [
            'user',
            'room',
        ],
        
        data() {
            return {
                totalJunctionsTotalCapacity: this.room.current_room_capacity ? this.room.current_room_capacity.junction_total : 0,
                totalGeneratorSetTotalCapacity: this.room.current_room_capacity ? this.room.current_room_capacity.generator_set_total : 0,
                totalPowerRectifiersCapacity: this.room.current_room_capacity ? this.room.current_room_capacity.power_rectifier_total : 0,
                totalBatteriesCapacity: this.room.current_room_capacity ? this.room.current_room_capacity.battery_total : 0,
                totalDistributionCapacity: this.room.current_room_capacity ? this.room.current_room_capacity.distribution_total : 0,
                totalClmateCapacity: this.room.current_room_capacity ? this.room.current_room_capacity.climate_total : 0,
                totaSurfaceCapacity: this.room.current_room_capacity ? this.room.current_room_capacity.surface_total : 0,


                junctionsTotalAvailableCapacity: this.room.current_room_capacity ? this.room.current_room_capacity.junction_available : 0,
                generatorSetTotalAvailableCapacity: this.room.current_room_capacity ? this.room.current_room_capacity.generator_set_available : 0,
                powerRectifiersAvailableCapacity: this.room.current_room_capacity ? this.room.current_room_capacity.power_rectifier_available : 0,
                batteriesAvailableCapacity: this.room.current_room_capacity ? this.room.current_room_capacity.battery_available : 0,
                distributionAvailableCapacity: this.room.current_room_capacity ? this.room.current_room_capacity.distribution_available : 0,
                totalAvailableClimateCapacity: this.room.current_room_capacity ? this.room.current_room_capacity.climate_available : 0,
                totalAvailableSurfaceCapacity: this.room.current_room_capacity ? this.room.current_room_capacity.surface_available : 0,

                energy_treshold_danger: 0.1,
                energy_treshold_warning: 0.2,
                climate_treshold_danger: 0.1,
                climate_treshold_warning: 0.2,
                surface_treshold_danger: 0.1,
                surface_treshold_warning: 0.2,

            }
        },

        watch: {
            room(val) {
                this.totalJunctionsTotalCapacity = val.current_room_capacity ? val.current_room_capacity.junction_total : 0
                this.totalGeneratorSetTotalCapacity = val.current_room_capacity ? val.current_room_capacity.generator_set_total : 0
                this.totalPowerRectifiersCapacity = val.current_room_capacity ? val.current_room_capacity.power_rectifier_total : 0
                this.totalBatteriesCapacity = val.current_room_capacity ? val.current_room_capacity.battery_total : 0
                this.totalDistributionCapacity = val.current_room_capacity ? val.current_room_capacity.distribution_total : 0
                this.totalClmateCapacity = val.current_room_capacity ? val.current_room_capacity.climate_total : 0
                this.totaSurfaceCapacity = val.current_room_capacity ? val.current_room_capacity.surface_total : 0

                this.junctionsTotalAvailableCapacity = val.current_room_capacity ? val.current_room_capacity.junction_available : 0
                this.generatorSetTotalAvailableCapacity = val.current_room_capacity ? val.current_room_capacity.generator_set_available : 0
                this.powerRectifiersAvailableCapacity = val.current_room_capacity ? val.current_room_capacity.power_rectifier_available : 0
                this.batteriesAvailableCapacity = val.current_room_capacity ? val.current_room_capacity.battery_available : 0
                this.distributionAvailableCapacity = val.current_room_capacity ? val.current_room_capacity.distribution_available : 0
                this.totalAvailableClimateCapacity = val.current_room_capacity ? val.current_room_capacity.climate_available : 0
                this.totalAvailableSurfaceCapacity = val.current_room_capacity ? val.current_room_capacity.surface_available : 0
            },
        },

        computed: {
            totalCapacity() {
                let total = Math.min(this.totalAvailableEnergyCapacity, this.totalAvailableClimateCapacity)
                if (total >= 0) {
                    return total
                }
                return 0
            },

            totalAvailableEnergyCapacity() {
                let total = Math.min(
                    this.junctionsTotalAvailableCapacity, 
                    this.generatorSetTotalAvailableCapacity, 
                    this.powerRectifiersAvailableCapacity,
                    this.batteriesAvailableCapacity,
                    this.distributionAvailableCapacity
                )
                if (total > 0) {
                    return total
                }
                return 0
            },

            totalCapacityEnergyPercentage() {
                let color = 'info'
                let total_energy = Math.min(
                    this.totalJunctionsTotalCapacity > 0 ? this.junctionsTotalAvailableCapacity / this.totalJunctionsTotalCapacity : null, 
                    this.totalGeneratorSetTotalCapacity > 0 ? this.generatorSetTotalAvailableCapacity / this.totalGeneratorSetTotalCapacity : null, 
                    this.totalPowerRectifiersCapacity > 0 ? this.powerRectifiersAvailableCapacity / this.totalPowerRectifiersCapacity : null,
                    this.totalBatteriesCapacity > 0 ? this.batteriesAvailableCapacity / this.totalBatteriesCapacity : null,
                    this.totalDistributionCapacity > 0 ? this.distributionAvailableCapacity / this.totalDistributionCapacity : null
                )

                if (total_energy) {
                    if (total_energy <= this.energy_treshold_danger) {
                        color = 'info'
                    } else if (total_energy <= this.energy_treshold_warning) {
                        color = 'warning'
                    } else if (total_energy > this.energy_treshold_warning) {
                        color = 'success'
                    }
                }
                
                return {
                    'percentage': total_energy,
                    'color': color
                }
            },

            totalCapacityClimatePercentage() {
                let color = 'info'
                let total_climate = this.totalClmateCapacity > 0 ? this.totalAvailableClimateCapacity / this.totalClmateCapacity : 0

                if (total_climate) {
                    if (total_climate <= this.climate_treshold_danger) {
                        color = 'info'
                    } else if (total_climate <= this.climate_treshold_warning) {
                        color = 'warning'
                    } else if (total_climate > this.climate_treshold_warning) {
                        color = 'success'
                    }
                }
                
                return {
                    'percentage': total_climate,
                    'color': color
                }
            },

            totalCapacitySurfacePercentage() {
                let color = 'info'
                let total_surface = this.totaSurfaceCapacity ? this.totalAvailableSurfaceCapacity / this.totaSurfaceCapacity : 0

                if (total_surface) {
                    if (total_surface <= this.surface_treshold_danger) {
                        color = 'info'
                    } else if (total_surface <= this.surface_treshold_warning) {
                        color = 'warning'
                    } else if (total_surface > this.surface_treshold_warning) {
                        color = 'success'
                    }
                }
                
                return {
                    'percentage': total_surface,
                    'color': color
                }
            },

            totalCapacityPercentage() {
                let color = 'info'
                let total_energy = this.totalCapacityEnergyPercentage.percentage
                let total_climate = this.totalCapacityClimatePercentage.percentage

                if (total_energy && total_climate) {
                    if (total_energy <= this.energy_treshold_danger || total_climate <= this.climate_treshold_danger) {
                        color = 'info'
                    } else if (total_energy <= this.energy_treshold_warning || total_climate <= this.climate_treshold_warning) {
                        color = 'warning'
                    } else if (total_energy > this.energy_treshold_warning || total_energy > this.energy_treshold_warning) {
                        color = 'success'
                    }
                }
                
                return {
                    'energy_percentage': total_energy,
                    'climate_percentage': total_climate,
                    'color': color
                }
            },

            canViewClimate() {
                return this.user.roles[0].slug == 'engineer-admin' 
                    || this.user.roles[0].slug == 'admin' 
                    || this.user.roles[0].slug == 'developer'
                    || this.user.roles[0].slug == 'super-viewer' 
                    ? true : false
            },
        },
    }
</script>