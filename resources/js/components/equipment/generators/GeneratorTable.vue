<template>
    <tr class="">
        <!-- <td class="has-text-weight-normal has-text-centered is-vcentered">
            <div>{{ isAlive(generator) }}</div>
        </td> -->

        <td class="has-text-weight-normal has-text-centered is-vcentered">
            <div>{{ generator.g_zona ? generator.g_zona.zona : '' }}</div>
            <div class="is-size-7">{{ generator.g_zona ? generator.g_zona.name : '' }}</div>
        </td>

        <td class="is-size-6 has-text-weight-normal has-text-centered is-vcentered">{{ generator.sub_zone }}</td>
        
        <td class="has-text-left is-vcentered">
            <router-link :to="'/pop/' + generator.pop_id" target="_blank" class="is-size-6 has-text-weight-semibold">
                {{ generator.name }}
            </router-link>
            <div class="is-size-6 has-text-weight-semibold">
                {{ generator.mobile_code }}
            </div>
        </td>

        <td class="is-size-6 has-text-weight-normal has-text-centered is-vcentered">
            <div class="">
                {{ generator.g_model && generator.g_model.g_brand ? generator.g_model.g_brand.name : 'N/A' }}
            </div>
        </td>

        <td class="is-size-6 has-text-weight-normal has-text-centered is-vcentered">
            <div class="subtitle is-size-6">
                {{ generator.g_type ? generator.g_type.name : 'N/A' }}
            </div>
        </td>

        <td class="has-text-right is-vcentered">
            <div class="" :class="this.last_day_data[0] && this.last_day_data[0].avg_hourmeter_consumption > 0 ? 'has-text-weight-semibold' : 'has-text-weight-light'">
                {{ this.last_day_data[0] && this.last_day_data[0].avg_hourmeter_consumption | numeral('0,0.00') }}
            </div>
        </td>

        <td class="has-text-right is-vcentered">
            <div class="" :class="this.last_day_data[0] && this.last_day_data[0].avg_fuel_consumption > 0 ? 'has-text-weight-semibold' : 'has-text-weight-light'">
                {{ this.last_day_data[0] && this.last_day_data[0].avg_fuel_consumption | numeral('0,0.00') }}
            </div>
        </td>

        <td class="is-vcentered">
            <div v-if="!fuelLevelPercentage">No Data</div>
            <b-progress 
                v-if="fuelLevelPercentage"
                :value="fuelLevelPercentage * 100" 
                size="is-medium"
                :type="type"
                show-value>
                <span class="has-text-weight-bold has-text-dark">
                    {{ fuelLevelPercentage * 100 | numeral('0,0.0') }}%
                </span>
                &nbsp;
                <span v-if="generator.g_model.g_fuel_pond" class="has-text-weight-bold has-text-dark">
                    {{ fuelLevel + '/' + generator.g_model.g_fuel_pond.capacity }}
                </span>
            </b-progress>
        </td>

        <td class="has-text-right is-vcentered">
            <div class="" :class="hourmeter > 0 && 'has-text-weight-semibold'">
                {{ hourmeter | numeral('0,0.00') }}
            </div>
        </td>

        <td class="has-text-weight-normal has-text-left is-vcentered">
            <div class="is-size-6">
                {{ generator.g_last_maintance ? generator.g_last_maintance.created : 'N/A' }}
            </div>
            <div class="is-size-7" v-if="generator.g_last_maintance">
                <span class="">
                    Estado: <span class="has-text-weight-semibold" :class="generator.g_last_maintance && generator.g_last_maintance.g_maintance_status.code == 'Closed' ? '' : 'has-text-info'">{{ generator.g_last_maintance ? generator.g_last_maintance.g_maintance_status.code : 'N/A' }}</span>
                </span>
            </div>
        </td>

        <td class="is-vcentered">
            <div class="field has-addons">
                <p class="control">
                    <button class="button is-small is-default tooltip is-outlined" data-tooltip="DETALLES" @click="isGeneratorDetailModalActive = true">
                        <font-awesome-icon :icon="['far','clipboard']"/>
                        <!-- <span>Left</span> -->
                    </button>
                </p>
                <p class="control">
                    <button class="button is-small is-default tooltip is-outlined has-tooltip-right" data-tooltip="MANTENCIONES" @click="isGeneratorMaintenancesModalActive=true">
                        <font-awesome-icon icon="bars"/>
                        <!-- <span>Right</span> -->
                    </button>
                </p>
            </div>

            <!-- <button type="button" class="button is-small is-link tooltip is-outlined" data-tooltip="Tooltip Text" @click="isGeneratorDetailModalActive = true">
                <font-awesome-icon :icon="['far','clipboard']"/>
            </button>

            <button type="button" class="button is-small is-link tooltip" data-tooltip="Tooltip Text">
                <font-awesome-icon icon="bars"/>
            </button> -->
            
        </td>
        <b-modal :active.sync="isGeneratorDetailModalActive"
            has-modal-card
            full-screen
            trap-focus
            aria-role="dialog"
            aria-modal>
            <generator-detail
                :generator="generator" 
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
                :generator="generator" 
                />
        </b-modal>
    </tr>
</template>

<script>
    export default {
        components: {
            GeneratorDetail: () => import(/* webpackChunkName: "chunks/generators/modals/generatorDetail"*/'./modals/GeneratorDetail'),
            GeneratorMaintenances: () => import(/* webpackChunkName: "chunks/generators/modals/GeneratorMaintenances"*/'./modals/GeneratorMaintenances'),
        },

        props : [
            'generator',
        ],

        data() {
            return {
                last_day_data: Object,
                isGeneratorDetailModalActive: false,
                isGeneratorMaintenancesModalActive: false
            }
        },

        computed: {
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
            }
        },

        mounted() {
            this.getLastDayData(this.generator.id)
            console.log(this.generator)
        },

        methods: {
            getLastDayData(generator_id) {
                this.isLoading = true
                let params = {
                    'generator_id': parseInt(generator_id)
                }

                axios.get('/api/generatorLastDay', { params: params })
                .then((response) => {
                    this.last_day_data = response.data
                    // this.last_data = response.data[0]
                    this.isLoading = false
                })
            },

            isAlive(generator){
                if (generator.ip && generator.ip != 'N/A') {
                    let params = {
                        'url': generator.ip
                    }
                    axios.get('/api/doPing', { params: params })
                    .then(response => {
                        console.log(response.data)
                        return response.data
                    })
                }
                return 'false'
            }
        }
    }
</script>
