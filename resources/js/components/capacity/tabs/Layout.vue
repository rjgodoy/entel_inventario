<template>
    <section class="">
        <div class="">
            <div class="has-text-weight-semibold has-text-dark is-size-3 has-text-left">Layout</div>
        </div>

        <div class="" style="padding-top: 24px;">
            <div class="">
                <div class="">
                    <div class="box" style="min-height: 960px">
                        <iframe :src="'/storage/' + layoutPath" width="100%" style="height: 960px"></iframe>
                    </div>
                </div>

            </div>
        </div>

    </section>
        
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faRandom, faMicrochip, faChargingStation, faGasPump, faEdit, faExclamationTriangle, faPlug, faHome, faBezierCurve, faWind, faTrash } from "@fortawesome/free-solid-svg-icons";
// import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons'
library.add(faRandom, faMicrochip, faChargingStation, faGasPump, faEdit, farCheckCircle, faExclamationTriangle, faPlug, faHome, faBezierCurve, faWind, faTrash);
    // import LeaderLine from 'leader-line'
    export default {
        components: {
            Junctions: () => import(/* webpackChunkName: "chunks/capacity/blocks/junction"*/'../blocks/Junctions'),
            GeneratorSets: () => import(/* webpackChunkName: "chunks/capacity/blocks/generator"*/'../blocks/GeneratorSets'),
            SolarPanels: () => import(/* webpackChunkName: "chunks/capacity/blocks/solarPanels"*/'../blocks/SolarPanels'),
            Equipment: () => import(/* webpackChunkName: "chunks/capacity/blocks/equipment"*/'../blocks/Equipment'),
        },

        props : [
            'user',
            'room',
            'junctions',
            'generatorSets',
            'planes',
            'planeTypes',
            'airConditioners',
            'canEditJunctions',
            'canEditGeneratorSets',
            'canEditPowerRectifiers',
            'canEditAirConditioners',
            'canEditSurface',
            'canEditDistribution',
            'canEditPlaneTypes',

            'totalJunctionsCapacity',
            'totalUsedJunctionsCapacity',
            'totalAvailableJunctionsCapacity',

            'totalGeneratorSetsCapacity',
            'totalGeneratorSetsUsedCapacity',
            'totalAvailableGeneratorSetsCapacity',
            'totalGeneratorSetsCapacityA',
            'totalGeneratorSetsCapacityB',
            'usedGeneratorSetsCapacityA',
            'usedGeneratorSetsCapacityB',
            'availableGeneratorSetsCapacityA',
            'availableGeneratorSetsCapacityB',

            'totalSurface',
            'usedSurface',
            'availableSurface',

            'totalDistributionCapacity',
            'usedDistributionCapacity',
            'availableDistributionCapacity',
        ],

        data() {
            return {
                isEditMode: false,
                newTheoreticalAutonomy: this.pop && this.pop.current_battery_bank_autonomy ? this.pop.current_battery_bank_autonomy.theoretical : 0,
                
            }
        },

        computed: {
            pop() {
                return this.room && this.room.pop
            },

            layoutPath() {
                return this.pop.layout && this.pop.layout.file_path
            }
        },

        watch: {
            room(val) {
                this.newTheoreticalAutonomy = this.pop && this.pop.current_battery_bank_autonomy ? this.pop.current_battery_bank_autonomy.theoretical : 0
            }
        },

        methods: {
            updateAutonomy() {
                if(!this.isEditMode && this.pop && this.pop.current_battery_bank_autonomy && this.newTheoreticalAutonomy != this.pop.current_battery_bank_autonomy.theoretical) {
                    let params = {
                        'pop_id': this.pop.id,
                        'theoretical_autonomy': parseFloat(this.newTheoreticalAutonomy)
                    }
                    axios.post(`/api/batteryBankAutonomies`, params)
                    .then(response => {
                        this.$eventBus.$emit('battery-autonomy')
                        // console.log(response.data)
                    })
                }
            },
        },
    }
</script>
