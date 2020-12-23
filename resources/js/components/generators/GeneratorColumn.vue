<template>
    <div class="">
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
</template>

<script>
    var moment = require('moment')
    export default {
        components: {
            
        },

        props : [
            'generator',
            'last_data',
            'data_type'
        ],

        data() {
            return {
                last_day_data: Object
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
            // last_data() {
            //     this.data = this.last_data
            // }
        },

        mounted() {
            // this.getLastDayData(this.generator.id, this.last_data.created)
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

            // getLastValues(generator_id) {                
            //     axios.get(`/api/generatorLastValues/${generator_id}`)
            //     .then((response) => {
            //         console.log(response.data)
            //         this.last_data = response.data
            //     })
            // },

            // getLastDayData(generator_id, created_at) {
            //     let params = {
            //         'generator_id': parseInt(generator_id),
            //         'created_at': moment(created_at, "YYYY-MM-DD hh:mm:ss").format("YYYY-MM-DD")
            //     }
            //     console.log(params)
            //     axios.get('/api/generatorLastDay', { params: params })
            //     .then((response) => {
            //         console.log(response.data)
            //         this.last_day_data = response.data
            //     })
            // },

            // fuel_level_percentage(generator) {
            //     console.log(generator)
            //     return this.last_values(generator.id) ? this.last_values(generator.id).fuel_level_percentage : null
            // }

        }
    }
</script>
