<template scope="{generator}">
    <div class="">
        <td class="has-text-weight-light">
            {{ generator.id }}
        </td>
        
        <td class="has-text-weight-light has-text-centered">
            {{ generator.g_zone && generator.g_zone.name }}
        </td>

        <td class="">
            <div class="is-size-7 has-text-weight-normal">
                {{ generator.name }}
            </div>
            <div class="is-size-7 has-text-weight-normal">
                {{ generator.mobile_code }}
            </div>
        </td>
        <td class="has-text-weight-light">
            {{ generator.g_model && generator.g_model.g_brand ? generator.g_model.g_brand.name : 'N/A' }}
        </td>

        <td class="">
            <!-- <div class="has-text-weight-light has-text-centered">
                {{ generator.g_last_values ? last_day_values(generator.g_last_values.generator_id, generator.g_last_values.created) : 'N/A' }}
            </div> -->
        </td>

        <td class="">
            <div class="has-text-weight-light has-text-centered">
                <!-- {{ last_values(generator.id) }} -->
            </div>
        </td>

        <td class="has-text-weight-light has-text-centered">
            <div class="has-text-weight-light">
                <div v-if="generator.g_last_values">
                    {{ generator.g_last_values }}
                    <!-- <b-progress :value="last_data.fuel_level_percentage * 100" size="is-medium" show-value 
                    :type="last_data.fuel_level_percentage <= 0.2 ? 'is-danger' : (last_data.fuel_level_percentage > 0.2 && last_data.fuel_level_percentage <= 0.5 ? 'is-warning' : 'is-success')">
                        <span class="">
                            {{ last_data.fuel_level_percentage * 100 | numeral('0,0.0') }}%
                        </span>
                        &nbsp;
                        <span v-if="generator.g_model.g_fuel_pond" class="has-text-weight-normal">
                            {{ last_data.fuel_level + '/' + generator.g_model.g_fuel_pond.capacity }}
                        </span>
                    </b-progress> -->
                </div>
                <div v-if="!generator.g_last_values">
                    N/A
                </div>
            </div>
        </td>
        <td class="has-text-weight-light has-text-centered">
            <!-- <div class="has-text-weight-light">
                {{ generator.g_last_values ? generator.g_last_values.hourmeter : 'N/A' }}
            </div> -->
        </td>
        <td class="has-text-weight-light has-text-centered">
            <div class="has-text-weight-light">
                {{ generator.g_last_maintance ? generator.g_last_maintance.created : 'N/A' }}
            </div>
        </td>
        
        <td class="has-text-weight-light has-text-centered">
            <button href="/comsites/download" type="button" class="button is-small is-link tooltip" data-tooltip="Tooltip Text" @click="generatorSelected = generator; isGeneratorDetailModalActive = true">
                <font-awesome-icon :icon="['far','clipboard']"/>
            </button>
        </td>
        <td class="has-text-weight-light has-text-centered">
            <button href="/comsites/download" type="button" class="button is-small is-link tooltip" data-tooltip="Tooltip Text">
                <font-awesome-icon icon="bars"/>
            </button>
        </td>
    </div>
</template>

<script>
    export default {
        components: {
            GeneratorColumn: () => import(/* webpackChunkName: "chunks/generators/generatorColumn"*/'./GeneratorColumn')
        },

        props : [
            'generator',
            'data_type'
        ],

        data() {
            return {
                last_data: null
            }
        },

        computed: {
        },

        watch: {
            generator() {
                this.getLastValues(this.generator.id)
            }
        },

        mounted() {

        },

        methods: {
            
            // avgHorometer(data) {
            //     let hourmeter_consumption = 0; let i = 0
            //     Object.keys(data).forEach(element => {
            //         if (data[element].hourmeter_consumption != -1 && data[element].fuel_consumption < 75) {
            //             hourmeter_consumption = hourmeter_consumption + data[element].hourmeter_consumption
            //             i++
            //         }
            //     })
            //     return hourmeter_consumption > 0 ? hourmeter_consumption / i : 0
            // },

            // avgConsumption(data) {
            //     let fuel_consumption = 0; let i = 0
            //     Object.keys(data).forEach(element => {
            //         if (data[element].hourmeter_consumption != -1 && data[element].fuel_consumption < 75) {
            //             fuel_consumption = fuel_consumption + data[element].fuel_consumption
            //             i++
            //         }
            //     })
            //     return fuel_consumption > 0 ? fuel_consumption / i : 0
            // },

            getLastValues(generator_id) {  
                axios.get(`/api/generatorLastValues/${generator_id}`)
                .then((response) => {
                    // console.log(response.data)
                    this.last_data = response.data
                })
            },

            // last_day_values(generator_id, created_at) {
            //     let params = {
            //         'generator_id': generator_id,
            //         'created_at': moment(created_at, "YYYY-MM-DD hh:mm:ss").format("YYYY-MM-DD")
            //     }

            //     axios.get('/api/generatorLastDay', { params: params })
            //     .then((response) => {
            //         console.log(response)
            //     })
            // },

            // fuel_level_percentage(generator) {
            //     console.log(generator)
            //     return this.last_values(generator.id) ? this.last_values(generator.id).fuel_level_percentage : null
            // }

        }
    }
</script>
