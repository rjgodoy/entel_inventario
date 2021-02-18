<template>
    <div class="">
        <div>
            <button type="button" class="button is-small is-link tooltip" data-tooltip="Tooltip Text" @click="generatorSelected = generator; isGeneratorDetailModalActive = true">
                <font-awesome-icon :icon="['far','clipboard']"/>
            </button>

            <!-- <button type="button" class="button is-small is-link tooltip" data-tooltip="Tooltip Text">
                <font-awesome-icon icon="bars"/>
            </button> -->
            
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
            'data_type',
            // 'last_data',
            // 'last_day_data'
        ],

        data() {
            return {
                last_data: Array,
                last_day_data: Object,
                isGeneratorDetailModalActive: false,
                generatorSelected: null,
                isLoading: false
            }
        },

        computed: {
            hourmeter_consumption() {
                let data = null
                let i = 0
                if(this.last_day_data) {
                    Object.keys(this.last_day_data).forEach(element => {
                        data = data + this.last_day_data[element].hourmeter_consumption
                        i++
                    })
                }

                return data ? data / i : 'N/A'
            },

            fuel_consumption() {
                let data = null
                let i = 0
                if(this.last_day_data) {
                    Object.keys(this.last_day_data).forEach(element => {
                        data = data + this.last_day_data[element].fuel_consumption
                        i++
                    })
                }

                return data ? data / i : 'N/A'
            }
        },

        watch: {
            last_day_data() {

            },

            last_data() {
                
            }
        },

        mounted() {
            // console.log(this.last_day_data)
            this.getLastDayData(this.generator.id)
        },

        methods: {
            async getLastDayData(generator_id) {
                this.isLoading = true
                let params = {
                    'generator_id': parseInt(generator_id)
                }

                await axios.get('/api/generatorLastDay', { params: params })
                .then((response) => {
                    this.last_day_data = response.data
                    // console.log(response.data[0])
                    this.last_data = response.data[0]
                    this.isLoading = false
                })
            },
        }
    }
</script>
