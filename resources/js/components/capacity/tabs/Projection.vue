<template>
    <div class="">
        <div class="columns">
            <div class="column has-text-weight-semibold has-text-dark is-size-3 has-text-left">Proyección</div>
        </div>
        <div class="columns">
            <div class="column">
                <div class="box">
                    <div class="has-text-centered has-text-dark is-size-5" style="padding-bottom: 20px;">Disponibilidad de Potencia</div>
                    <!-- <ProjectionChart
                        :chartData="data"
                    ></ProjectionChart> -->
                </div>
                <div class="box">
                    <b-field grouped group-multiline>
                        <b-select v-model="defaultSortDirection">
                            <option value="asc">Default sort direction: ASC</option>
                            <option value="desc">Default sort direction: DESC</option>
                        </b-select>
                        <b-select v-model="perPage" :disabled="!isPaginated">
                            <option value="5">5 per page</option>
                            <option value="10">10 per page</option>
                            <option value="15">15 per page</option>
                            <option value="20">20 per page</option>
                        </b-select>
                        <div class="control">
                            <button class="button" @click="currentPage = 2" :disabled="!isPaginated">Set page to 2</button>
                        </div>
                        <div class="control is-flex">
                            <b-switch v-model="isPaginated">Paginated</b-switch>
                        </div>
                        <div class="control is-flex">
                            <b-switch v-model="isPaginationSimple" :disabled="!isPaginated">Simple pagination</b-switch>
                        </div>
                        <b-select v-model="paginationPosition" :disabled="!isPaginated">
                            <option value="bottom">bottom pagination</option>
                            <option value="top">top pagination</option>
                            <option value="both">both</option>
                        </b-select>
                        <b-select v-model="sortIcon">
                            <option value="arrow-up">Arrow sort icon</option>
                            <option value="menu-up">Caret sort icon</option>
                            <option value="chevron-up">Chevron sort icon </option>
                        </b-select>
                        <b-select v-model="sortIconSize">
                            <option value="is-small">Small sort icon</option>
                            <option value="">Regular sort icon</option>
                            <option value="is-medium">Medium sort icon</option>
                            <option value="is-large">Large sort icon</option>
                        </b-select>

                        <b-tooltip label="Nueva proyección" position="is-right" type="is-dark">
                            <button class="button" @click="alert('new')">
                                <font-awesome-icon :icon="['fas', 'plus']" class="has-text-link"></font-awesome-icon>
                            </button>
                        </b-tooltip>
                    </b-field>

                    <b-table
                        :data="data"
                        :paginated="isPaginated"
                        :per-page="perPage"
                        :current-page.sync="currentPage"
                        :pagination-simple="isPaginationSimple"
                        :pagination-position="paginationPosition"
                        :default-sort-direction="defaultSortDirection"
                        :sort-icon="sortIcon"
                        :sort-icon-size="sortIconSize"
                        default-sort="id"
                        aria-next-label="Next page"
                        aria-previous-label="Previous page"
                        aria-page-label="Page"
                        aria-current-label="Current page">

                        <template slot-scope="props">
                            <b-table-column field="id" label="ID" width="40" sortable numeric>
                                {{ props.row.id }}
                            </b-table-column>

                            <b-table-column field="junction" label="Empalme" sortable>
                                {{ props.row.junction }}
                            </b-table-column>

                            <b-table-column field="generator" label="Generador" sortable>
                                {{ props.row.generator }}
                            </b-table-column>

                            <b-table-column field="rectifier" label="Rectificador" sortable>
                                {{ props.row.rectifier }}
                            </b-table-column>

                            <b-table-column field="battery" label="Batterías" sortable>
                                {{ props.row.battery }}
                            </b-table-column>

                            <b-table-column field="distribution" label="Distribución" sortable>
                                {{ props.row.distribution }}
                            </b-table-column>

                            <b-table-column field="climate" label="Clima" sortable>
                                {{ props.row.climate }}
                            </b-table-column>

                            <b-table-column field="space" label="Espacio" sortable>
                                {{ props.row.space }}
                            </b-table-column>



                            <!-- <b-table-column field="user.last_name" label="Last Name" sortable>
                                {{ props.row.user.last_name }}
                            </b-table-column> -->

                            <b-table-column field="date" label="Fecha" sortable centered>
                                <span class="tag is-success">
                                    {{ new Date(props.row.year, props.row.month, 1).toLocaleDateString() }}
                                </span>
                            </b-table-column>

                            <b-table-column>
                                <!-- <b-tooltip label="Tooltip right" position="Nueva proyec"> -->
                                    <button class="button has-text-danger is-small">
                                        <font-awesome-icon :icon="['far', 'trash-alt']" ></font-awesome-icon>
                                    </button>
                                <!-- </b-tooltip> -->
                            </b-table-column>

                        </template>
                    </b-table>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
// import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { faTrashAlt as farTrashAlt } from '@fortawesome/free-regular-svg-icons'
library.add(faTrashAlt, faPlus, farTrashAlt );

var numeral = require('numeral');
// import ProjectionChart from '../ProjectionChart'

export default {
    components: {
        // ProjectionChart
    },

    props: [ 'data', 'user' ],

    data() {
        return {
            loaded: false,

            // data,
            isPaginated: true,
            isPaginationSimple: false,
            paginationPosition: 'bottom',
            defaultSortDirection: 'asc',
            sortIcon: 'arrow-up',
            sortIconSize: 'is-small',
            currentPage: 1,
            perPage: 5
        }
    },

    watch: {
        data(newValue) {
            // console.log(newValue)
            // this.fillData()
        },
    },

    async mounted() {

    },

    methods: {
    }
}
</script>