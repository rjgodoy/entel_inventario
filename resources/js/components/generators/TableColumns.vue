<template>
    <!-- <template class=""> -->
        <!-- <div field="id" label="ID"  sortable numeric> -->
            <!-- <template v-slot:header="{ column }">
                <div class="is-size-6">{{ column.label }}</div>
            </template> -->
            <!-- <template> -->
                <!-- <div>hello</div> -->
                <div class="is-size-6">
                    {{ row }}
                </div>
            <!-- </template> -->
        <!-- </div> -->
        
        

        <!-- <b-table-column field="g_zone.name" label="Ubicación"  sortable>
            <template v-slot:header="{ column }">
                <div class="is-size-6">{{ column.label }}</div>
            </template>
            <template v-slot="props">
                <div class="is-size-6">
                    {{ props.row.g_zone.name }}
                </div>
            </template>
        </b-table-column> -->

        <!-- <b-table-column field="name" label="Nombre"  sortable searchable>
            <template v-slot:header="{ column }">
                <div class="is-size-6">{{ column.label }}</div>
            </template>
            <template v-slot="props">
                <div class="is-size-6">
                    {{ props.row.name }}
                </div>
            </template>
        </b-table-column>

        <b-table-column field="mobile_code" label="Nemónico"  sortable searchable>
            <template v-slot:header="{ column }">
                <div class="is-size-6">{{ column.label }}</div>
            </template>
            <template v-slot="props">
                <div class="is-size-6">
                    {{ props.row.mobile_code }}
                </div>
            </template>
        </b-table-column>

        <b-table-column field="g_model.g_brand.name" label="Marca"  sortable searchable>
            <template v-slot:header="{ column }">
                <div class="is-size-6">{{ column.label }}</div>
            </template>
            <template v-slot="props">
                <div class="is-size-6">
                    {{ props.row.g_model && props.row.g_model.g_brand ? props.row.g_model.g_brand.name : 'N/A' }}
                </div>
            </template>
        </b-table-column>

        <b-table-column field="name" label="HF Día"  sortable numeric>
            <template v-slot:header="{ column }">
                <div class="is-size-6">{{ column.label }}</div>
            </template>
            <template v-slot="props">
                <generator-slot :generator="props.row" :data_type="'hf'"/>
            </template>
        </b-table-column>

        <b-table-column field="name" label="Prom. Consumo"  sortable numeric>
            <template v-slot:header="{ column }">
                <div class="is-size-6">{{ column.label }}</div>
            </template>
            <template v-slot="props">
                <generator-slot :generator="props.row" :data_type="'average_consumption'"/>
            </template>
        </b-table-column>

        <b-table-column field="name" label="Niv. Combustible" width="180" centered loading>
            <template v-slot:header="{ column }">
                <div class="is-size-6">{{ column.label }}</div>
            </template>
            <template v-slot="props">
                <generator-slot :generator="props.row" :data_type="'fuel_level'"/>
            </template>
        </b-table-column>

        <b-table-column field="name" label="Horometro"  sortable numeric>
            <template v-slot:header="{ column }">
                <div class="is-size-6">{{ column.label }}</div>
            </template>
            <template v-slot="props">
                <generator-slot :generator="props.row" :data_type="'hourmeter'"/>
            </template>
        </b-table-column>

        <b-table-column field="name" label="Mantención"  sortable>
            <template v-slot:header="{ column }">
                <div class="is-size-6">{{ column.label }}</div>
            </template>
            <template v-slot="props">
                <div class="is-size-6">
                    {{ props.row.g_last_maintance ? props.row.g_last_maintance.created : 'N/A' }}
                </div>
                <div class="is-size-7" v-if="props.row.g_last_maintance">
                    <span class="tag is-default">
                        {{ props.row.g_last_maintance ? props.row.g_last_maintance.g_maintance_status.code : 'N/A' }}
                    </span>
                </div>
            </template>
        </b-table-column>

        <b-table-column field="date" label="Fichas" width="100" centered>
            <template v-slot:header="{ column }">
                <div class="is-size-6">{{ column.label }}</div>
            </template>
            <template v-slot="props">
                <generator-slot :generator="props.row" :data_type="'fichas'" :user="user"/>
            </template>
        </b-table-column> -->
    <!-- </template> -->
</template>

<script>
    export default {
        components: {
            GeneratorDetail: () => import(/* webpackChunkName: "chunks/generators/modals/generatorDetail"*/'./modals/GeneratorDetail'),
            GeneratorSlot: () => import(/* webpackChunkName: "chunks/generators/generatorSlot"*/'./GeneratorSlot'),
        },

        props : [
            'user',
            'generator',
            'data_type',
            'row'
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
            console.log(this.row)
            // this.getLastDayData(this.generator.id)
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
