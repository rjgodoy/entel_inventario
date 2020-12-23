<template>
    <div class="">
        <div v-if="last_data">

            <div v-if="data_type == 'hf'">
                <div class="is-size-6 has-text-centered">
                    {{ hourmeter_consumption | numeral('0,0.00') }}
                </div>
            </div>

            <div v-if="data_type == 'average_consumption'">
                <div class="is-size-6">{{ fuel_consumption | numeral('0,0.00') }}</div>
            </div>

            <div v-if="data_type == 'fuel_level'">
                <b-progress :value="last_data.fuel_level_percentage * 100" size="is-medium" show-value 
                :type="last_data.fuel_level_percentage <= 0.2 ? 'is-danger' : (last_data.fuel_level_percentage > 0.2 && last_data.fuel_level_percentage <= 0.5 ? 'is-warning' : 'is-success')">
                    <span class="">
                        {{ last_data.fuel_level_percentage * 100 | numeral('0,0.0') }}%
                    </span>
                    &nbsp;
                    <span v-if="generator.g_model.g_fuel_pond" class="has-text-weight-normal">
                        {{ last_data.fuel_level + '/' + generator.g_model.g_fuel_pond.capacity }}
                    </span>
                </b-progress>
            </div>

            <div v-if="data_type == 'hourmeter'">
                <div class="is-size-6">{{ last_data.hourmeter }}</div>
            </div>

        </div>
        <div v-if="!last_data && data_type != 'fichas'">
            <div class="is-size-7">N/A</div>
        </div>

        <div v-if="data_type == 'fichas'">
            <button type="button" class="button is-small is-link tooltip" data-tooltip="Tooltip Text" @click="generatorSelected = generator; isGeneratorDetailModalActive = true">
                <font-awesome-icon :icon="['far','clipboard']"/>
            </button>

            <button type="button" class="button is-small is-link tooltip" data-tooltip="Tooltip Text">
                <font-awesome-icon icon="bars"/>
            </button>
            
        </div>
        <b-modal :active.sync="isGeneratorDetailModalActive"
            has-modal-card
            full-screen
            trap-focus
            aria-role="dialog"
            aria-modal>
            <generator-detail
                :generator="generatorSelected" 
                :last_data="last_data"
                :last_day_data="last_day_data"
                :hourmeter_consumption="hourmeter_consumption"
                :fuel_consumption="fuel_consumption"
                :user="user"
                />
        </b-modal>
    </div>
</template>

<script>
    export default {
        components: {
            GeneratorDetail: () => import(/* webpackChunkName: "chunks/generators/modals/generatorDetail"*/'./modals/GeneratorDetail'),
        },

        props : [
            'user',
            'generator',
            'data_type'
        ],

        data() {
            return {
                last_data: Array,
                last_day_data: Object,
                isGeneratorDetailModalActive: false,
                generatorSelected: null,

            }
        },

        computed: {
            hourmeter_consumption() {
                let data = null
                let i = 0
                Object.keys(this.last_day_data).forEach(element => {
                    data = data + this.last_day_data[element].hourmeter_consumption
                    i++
                })

                return data ? data / i : 'N/A'
            },

            fuel_consumption() {
                let data = null
                let i = 0
                Object.keys(this.last_day_data).forEach(element => {
                    data = data + this.last_day_data[element].fuel_consumption
                    i++
                })

                return data ? data / i : 'N/A'
            }
        },

        watch: {
            generator() {
                this.getLastDayData(this.generator.id)
            }
        },

        mounted() {
            this.getLastDayData(this.generator.id)
        },

        methods: {
            async getLastDayData(generator_id) {
                let params = {
                    'generator_id': parseInt(generator_id)
                }

                await axios.get('/api/generatorLastDay', { params: params })
                .then((response) => {
                    this.last_day_data = response.data
                    console.log(response.data[0])
                    this.last_data = response.data[0]
                })
            },
        }
    }
</script>
