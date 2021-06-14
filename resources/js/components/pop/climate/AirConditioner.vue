<template>
    <div class="tile is-child box has-text-dark">
        <div class="columns">
            <div class="column">
                <div class="has-text-weight-light is-size-7">Marca</div>
                <div class="has-text-weight-semibold is-size-4">{{ airConditioner.air_conditioner_brand ? airConditioner.air_conditioner_brand.brand : 'Sin Información' }}</div>
                <div class="has-text-weight-light is-size-7">Modelo</div>
                <div class="has-text-weight-semibold is-size-6">{{ airConditioner.air_conditioner_brand ? airConditioner.air_conditioner_brand.model : 'Sin Información' }}</div>
            </div>
            <div class="column has-text-right">
                <font-awesome-icon v-if="airConditioner.air_conditioner_brand && airConditioner.air_conditioner_brand.air_conditioner_type.icon"
                    :icon="[airConditioner.air_conditioner_brand.air_conditioner_type.icon_type, airConditioner.air_conditioner_brand.air_conditioner_type.icon]" 
                    size="3x" 
                    class="has-text-grey-lighter" 
                    style="opacity: 0.5;"/>
            </div>
        </div>

        <div class="columns">
            <div class="column">
                <div class="has-text-weight-light is-size-7">Tipo equipo</div>
                <div class="has-text-weight-semibold is-size-6">{{ airConditioner.air_conditioner_brand && airConditioner.air_conditioner_brand.air_conditioner_type.type }}</div>
                <div class="has-text-weight-light is-size-7">Capacidad</div>
                <div class="has-text-weight-normal is-size-6">{{ airConditioner.capacity | numeral('0,0') }} <span class="is-size-7">BTU</span></div>
            </div>
            <div class="column has-text-right">
                <div class="has-text-weight-light is-size-7">Nº Serie</div>
                <div class="has-text-weight-normal is-size-7">{{ airConditioner.serial_number ? airConditioner.serial_number : 'Sin Información' }}</div>
                <div class="has-text-weight-light is-size-7">Año instalación</div>
                <div class="has-text-weight-normal is-size-7">{{ airConditioner.installed_at ? airConditioner.installed_at : 'Sin Información' }}</div>
            </div>
        </div>

        <div class="is-divider" data-content="Condensadores" style="margin-bottom: 16px;" v-if="airConditioner.air_conditioner_condensers.length"></div>
        <div class="columns is-multiline" v-if="airConditioner.air_conditioner_condensers.length">
            <div class="column is-4" v-for="condenser in airConditioner.air_conditioner_condensers">
                <div class="box">
                    <div class="has-text-weight-light is-size-7">Modelo</div>
                    <div class="has-text-weight-semibold is-size-6">{{ condenser.model }}</div>
                    <div class="has-text-weight-light is-size-7" style="padding-top: 10px">Capacidad</div>
                    <div class="has-text-weight-normal is-size-6">{{ condenser.capacity | numeral('0,0') }} <span class="is-size-7">kW</span></div>
                </div>
            </div>
        </div>

        <div class="is-divider" data-content="Consumos" style="margin-bottom: 16px;" v-if="airConditioner.current_consumption"></div>
        <div class="level" v-if="airConditioner.current_consumption">
            <div class="level-item">
                <div class="has-text-centered">
                    <div class="is-size-7">Fase R</div>
                    <div class="has-text-weight-semibold">
                        {{ airConditioner.current_consumption.r_consumption }}
                        <span class="is-size-6">A</span>
                    </div>
                </div>
            </div>

            <div class="level-item">
                <div class="has-text-centered">
                    <div class="is-size-7">Fase S</div>
                    <div class="has-text-weight-semibold">
                        {{ airConditioner.current_consumption.s_consumption }}
                        <span class="is-size-6">A</span>
                    </div>
                </div>
            </div>
            <div class="level-item">
                <div class="has-text-centered">
                    <div class="is-size-7">Fase T</div>
                    <div class="has-text-weight-semibold">
                        {{ airConditioner.current_consumption.t_consumption }}
                        <span class="is-size-6">A</span>
                    </div>
                </div>
            </div>
        </div>  
    </div>

        
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFan, faCompressArrowsAlt, faBullseye, faSuitcaseRolling } from "@fortawesome/free-solid-svg-icons";
// import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
// import { faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons'
library.add(faFan, faCompressArrowsAlt, faBullseye, faSuitcaseRolling);
export default {
    components: {
        // Editair_conditionerParameters: () => import('./modals/Editair_conditionerParameters'),
    },
    props : [
        'pop',
        'can',
        'airConditioner',
        'user'
    ],
    data() {
        return {
            // isEditair_conditionerModalActive: false,
        }
    },
    mounted() {
        // console.log(this.airConditioner)
    },
    computed: {
        // capacidadTotal() {
        //     return this.airConditioner.latest_protection ? this.airConditioner.latest_protection.nominal_a * 380 * 1.7320508 : 0
        // },

        // consumoTablero() {
        //     return (this.airConditioner.latest_measurement.r_measure + this.airConditioner.latest_measurement.s_measure + this.airConditioner.latest_measurement.t_measure) * 220
        // },

        // usagePercent() {
        //     return this.capacidadTotal != 0 ? this.consumoTablero / this.capacidadTotal : 0
        // }
    },
    methods: {            
    }
}
</script>
