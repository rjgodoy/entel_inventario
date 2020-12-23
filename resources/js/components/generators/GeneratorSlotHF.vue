<template>
    <div class="">
        <div v-if="last_data == 'hf'">
                <div class="is-size-6 has-text-centered">
                    {{ hourmeter_consumption | numeral('0,0.00') }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            GeneratorColumn: () => import(/* webpackChunkName: "chunks/generators/generatorColumn"*/'./GeneratorColumn')
        },

        props : [
            'last_data'
        ],

        data() {
            return {
                // last_data: null
            }
        },

        computed: {
        },

        watch: {
        },

        mounted() {
            this.getLastDayData(this.last_data.generator_id, this.last_data.created)
        },

        methods: {
            hourmeter_consumption() {
                let data = null
                let i = 0
                Object.keys(this.last_day_data).forEach(element => {
                    data = data + this.last_day_data[element].hourmeter_consumption
                    i++
                })

                return data ? data / i : 'N/A'
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
