<template>
    <div class="columns">

        <!-- ##### GENERAL ##### -->
        <div class="column is-3 has-text-centered">
            <div class="has-text-centered is-size-7 has-text-weight-bold" style="padding: 4px;">GENERAL</div>
            <div class="" style="padding: 8px; border: 1px solid #aaa; border-radius: 15px; position: relative;">
                <div class="" style="padding: 4px">
                    <div class="">
                        <font-awesome-icon 
                            icon="circle"
                            size="2x" 
                            :class="totalAvailableEnergyCapacity <= 5 || totalAvailableClimateCapacity <= 5 || totalAvailableSurface <= 5 ? 'has-text-info' : ((totalAvailableEnergyCapacity > 5 && totalAvailableEnergyCapacity <= 10) || (totalAvailableClimateCapacity > 5 && totalAvailableClimateCapacity <= 10) || (totalAvailableSurface > 5 && totalAvailableSurface <= 10) ? 'has-text-warning' : 'has-text-success')"
                            />
                    </div>
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
                            <font-awesome-icon 
                                icon="circle" 
                                size="2x"
                                :class="totalAvailableEnergyCapacity <= 5 ? 'has-text-info' : (totalAvailableEnergyCapacity > 5 && totalAvailableEnergyCapacity <= 10 ? 'has-text-warning' : 'has-text-success')"
                                />
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
                            <font-awesome-icon 
                                icon="circle" 
                                size="2x"
                                :class="totalAvailableClimateCapacity <= 5 ? 'has-text-info' : (totalAvailableClimateCapacity > 5 && totalAvailableClimateCapacity <= 10 ? 'has-text-warning' : 'has-text-success')"
                                />
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
                            <font-awesome-icon 
                                icon="circle" 
                                size="2x"
                                :class="totalAvailableSurface <= 5 ? 'has-text-info' : (totalAvailableSurface > 5 && totalAvailableSurface <= 10 ? 'has-text-warning' : 'has-text-success')"
                                />
                            <div class="has-text-centered has-text-white">
                                <div class=" is-size-5 has-text-weight-bold">{{ totalAvailableSurface | numeral('0,0.0') }}</div>
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
                junctionsTotalAvailableCapacity: this.room.current_room_capacity ? this.room.current_room_capacity.junction_available : 0,
                generatorSetTotalAvailableCapacity: this.room.current_room_capacity ? this.room.current_room_capacity.generator_set_available : 0,
                powerRectifiersAvailableCapacity: this.room.current_room_capacity ? this.room.current_room_capacity.power_rectifier_available : 0,
                batteriesAvailableCapacity: this.room.current_room_capacity ? this.room.current_room_capacity.battery_available : 0,
                distributionAvailableCapacity: this.room.current_room_capacity ? this.room.current_room_capacity.distribution_available : 0,
                totalAvailableClimateCapacity: this.room.current_room_capacity ? this.room.current_room_capacity.climate_available : 0,
                totalAvailableSurface: this.room.current_room_capacity ? this.room.current_room_capacity.surface_available : 0,
            }
        },

        // watch: {
        //     room(val) {
        //         this.junctionsTotalAvailableCapacity = val.current_room_capacity ? val.current_room_capacity.junction_available : 0
        //         this.generatorSetTotalAvailableCapacity = val.current_room_capacity ? val.current_room_capacity.generator_set_available : 0
        //         this.powerRectifiersAvailableCapacity = val.current_room_capacity ? val.current_room_capacity.power_rectifier_available : 0
        //         this.batteriesAvailableCapacity = val.current_room_capacity ? val.current_room_capacity.battery_available : 0
        //         this.distributionAvailableCapacity = val.current_room_capacity ? val.current_room_capacity.distribution_available : 0
        //         this.totalAvailableClimateCapacity = val.current_room_capacity ? val.current_room_capacity.climate_available : 0
        //         this.totalAvailableSurface = val.current_room_capacity ? val.current_room_capacity.surface_available : 0
        //     },
        // },

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