<template>
    <div class="">
        <hr/>
        <div class="field">
            <span class="is-pulled-right">
                <b-select v-model="perPage" :disabled="!isPaginated">
                    <option value="5">5 por página</option>
                    <option value="10">10 por página</option>
                    <option value="15">15 por página</option>
                    <option value="20">20 por página</option>
                </b-select>
            </span>  
            <div class="is-size-4">Datos generador</div>
        </div>

        <b-table
            :data="statistics"
            :loading="isLoading"
            :paginated="isPaginated"
            :per-page="perPage"
            :current-page.sync="currentPage"
            :pagination-simple="isPaginationSimple"
            :pagination-position="paginationPosition"
            :default-sort-direction="defaultSortDirection"
            :pagination-rounded="isPaginationRounded"
            :sort-icon="sortIcon"
            :sort-icon-size="sortIconSize"
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page">

<!--             <b-table-column field="id" label="ID" width="50" numeric centered>
                <template v-slot:header="{ column }">
                    <b-tooltip :label="column.label" append-to-body>
                        {{ column.label }}
                    </b-tooltip>
                </template>
                <template v-slot="props">
                    {{ props.row.id }}
                </template>
            </b-table-column> -->

            <b-table-column field="created" label="Fecha" numeric centered>
                <template v-slot:header="{ column }">
                    <b-tooltip :label="column.label" append-to-body>
                        {{ column.label }}
                    </b-tooltip>
                </template>
                <template v-slot="props">
                    {{ props.row.created ? props.row.created.split(' ')[0] : null }}
                </template>
            </b-table-column>

            <b-table-column field="hourmeter" label="Horometro" width="120" centered>
                <template v-slot:header="{ column }">
                    <b-tooltip :label="column.label" append-to-body>
                        {{ column.label }}
                    </b-tooltip>
                </template>
                <template v-slot="props">
                    {{ props.row.hourmeter }}
                </template>
            </b-table-column>

            <b-table-column field="fuel_level_percentage" label="NC" width="200" centered>
                <template v-slot:header="{ column }">
                    <b-tooltip label="Nivel de combustible (en porcentaje)" append-to-body>
                        {{ column.label }}
                    </b-tooltip>
                </template>
                <template v-slot="props">
                    <b-progress 
                        :value="props.row.fuel_level_percentage * 100" 
                        size="is-medium"
                        :type="type(props.row.fuel_level_percentage)"
                        show-value>
                        <span class="has-text-weight-bold has-text-dark">
                            {{ props.row.fuel_level_percentage * 100 | numeral('0,0.00') }}%
                        </span>
                        &nbsp;
                        <span v-if="generator.generator_platform.g_model.g_fuel_pond" class="has-text-weight-bold has-text-dark">
                            {{ Math.round(generator.generator_platform.g_model.g_fuel_pond.capacity * props.row.fuel_level_percentage, 2) + '/' + generator.generator_platform.g_model.g_fuel_pond.capacity }}
                        </span>
                    </b-progress>
                </template>
            </b-table-column>

            <b-table-column field="rc" label="RC" width="120" centered>
                <template v-slot:header="{ column }">
                    <b-tooltip label="Recarga de combustible" append-to-body>
                        {{ column.label }}
                    </b-tooltip>
                </template>
                <template v-slot="props">
                    {{ props.row.fueling }}
                </template>
            </b-table-column>

            <b-table-column field="dtv" label="DTV" width="120" numeric centered>
                <template v-slot:header="{ column }">
                    <b-tooltip label="Dias trancurridos entre visita" append-to-body>
                        {{ column.label }}
                    </b-tooltip>
                </template>
                <template v-slot="props">
                    {{ props.row.days_passed }}
                </template>
            </b-table-column>

            <b-table-column field="hfv" label="HFV" width="120" numeric centered>
                <template v-slot:header="{ column }">
                    <b-tooltip label="Horas de funcionamiento entre visita" append-to-body>
                        {{ column.label }}
                    </b-tooltip>
                </template>
                <template v-slot="props">
                    {{ props.row.hours_passed }}
                </template>
            </b-table-column>

            <b-table-column field="pfd" label="PFD" width="120" numeric centered>
                <template v-slot:header="{ column }">
                    <b-tooltip label="Promedio funcionamiento por día en horas" append-to-body>
                        {{ column.label }}
                    </b-tooltip>
                </template>
                <template v-slot="props">
                    {{ props.row.average_days }}
                </template>
            </b-table-column>

            <b-table-column field="ccv" label="CCV" width="200" numeric centered>
                <template v-slot:header="{ column }">
                    <b-tooltip label="Consumo combustible entre visita (en porcentaje)" append-to-body>
                        {{ column.label }}
                    </b-tooltip>
                </template>
                <template v-slot="props">
                    <b-progress 
                        :value="props.row.fuel_consumption_percentage * 100" 
                        size="is-medium"
                        :type="type(props.row.fuel_consumption_percentage)"
                        show-value>
                        <span class="has-text-weight-bold has-text-dark">
                            {{ props.row.fuel_consumption_percentage * 100 | numeral('0,0.00') }}%
                        </span>
                        &nbsp;
                        <span v-if="generator.generator_platform.g_model.g_fuel_pond" class="has-text-weight-bold has-text-dark">
                            {{ props.row.average_daily_consumption + '/' + generator.generator_platform.g_model.g_fuel_pond.capacity }}
                        </span>
                    </b-progress>
                </template>
            </b-table-column>

            <b-table-column field="cpd" label="CPD" width="120" numeric centered>
                <template v-slot:header="{ column }">
                    <b-tooltip label="Consumo promedio diario en litros" append-to-body>
                        {{ column.label }}
                    </b-tooltip>
                </template>
                <template v-slot="props">
                    <span class="tag is-warning">
                        {{ props.row.average_daily_consumption }}
                    </span>
                </template>
            </b-table-column>

            <b-table-column field="crit" label="Crit" width="120" numeric centered>
                <template v-slot:header="{ column }">
                    <b-tooltip label="Cantidad de días hasta  que esté en nivel crítico de combustible (200lts)" append-to-body>
                        {{ column.label }}
                    </b-tooltip>
                </template>
                <template v-slot="props">
                    <span class="tag is-warning">
                        {{ props.row.days_critic }}
                    </span>
                </template>
            </b-table-column>

            <b-table-column field="proxima_recarga" label="Proxima Recarga" centered>
                <template v-slot:header="{ column }">
                    <b-tooltip label="Fecha aproximada de próxima recarga de combustible nivel mínimo 200 lts" append-to-body>
                        {{ column.label }}
                    </b-tooltip>
                </template>
                <template v-slot="props">
                    {{ props.row.next_recharge ? props.row.next_recharge.split(' ')[0] : null }}
                </template>
            </b-table-column>

        </b-table>
    </div>
</template>

<script>    
    export default {
        props : [
            'generator',
        ],

        data() {
            return {
                statistics: [Object],
                isPaginated: true,
                isPaginationSimple: false,
                isPaginationRounded: false,
                paginationPosition: 'bottom',
                defaultSortDirection: 'desc',
                sortIcon: 'arrow-up',
                sortIconSize: 'is-small',
                currentPage: 1,
                perPage: 15,
                isLoading: false,
            }
        },

        computed: {
            
        },

        watch: {

        },

        created() {
        },

        mounted() {
            this.getData()
        },

        methods: {
            getData() {
                this.isLoading = true
                axios.get(`/api/getStatistics/${this.generator.generator_platform.id}`)
                .then(response => {
                    this.statistics = response.data
                    console.log(response.data)
                    this.isLoading = false
                })
            },

            type(level) {
                let type = ''
                if (level <= 0.2) {
                    type = 'is-danger'
                } else if (level > 0.2 && level <= 0.5) {
                    type = 'is-warning' 
                } else {
                    type = 'is-success'
                }
                return type
            },
        }
    }
</script>
