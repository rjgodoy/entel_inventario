<template>
    <section class="section is-marginless" :class="bodyBackground">
        <div class="container">
            <div class="tile is-ancestor">
                <div class="tile">
                    <div class="tile is-vertical">
                        <div class="tile is-parent">
                            <div class="tile is-child box">
                                <div class="title is-size-4">POP en zonas protegidas</div>

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
                                    <!-- <div class="control">
                                        <button class="button" @click="currentPage = 2" :disabled="!isPaginated">Set page to 2</button>
                                    </div> -->
                                    <!-- <div class="control is-flex">
                                        <b-switch v-model="isPaginated">Paginated</b-switch>
                                    </div> -->
                                    <div class="control is-flex">
                                        <b-switch v-model="isPaginationSimple" :disabled="!isPaginated">Simple pagination</b-switch>
                                    </div>
                                    <!-- <b-select v-model="paginationPosition" :disabled="!isPaginated">
                                        <option value="bottom">bottom pagination</option>
                                        <option value="top">top pagination</option>
                                        <option value="both">both</option>
                                    </b-select> -->
                                    <!-- <b-select v-model="sortIcon">
                                        <option value="arrow-up">Arrow sort icon</option>
                                        <option value="menu-up">Caret sort icon</option>
                                        <option value="chevron-up">Chevron sort icon </option>
                                    </b-select> -->
                                    <!-- <b-select v-model="sortIconSize">
                                        <option value="is-small">Small sort icon</option>
                                        <option value="">Regular sort icon</option>
                                        <option value="is-medium">Medium sort icon</option>
                                        <option value="is-large">Large sort icon</option>
                                    </b-select> -->
                                </b-field>

                                <b-table
                                    :data="protectedZones"
                                    :paginated="isPaginated"
                                    :per-page="perPage"
                                    :current-page.sync="currentPage"
                                    :pagination-simple="isPaginationSimple"
                                    :pagination-position="paginationPosition"
                                    :default-sort-direction="defaultSortDirection"
                                    :sort-icon="sortIcon"
                                    :sort-icon-size="sortIconSize"
                                    pagination-size="is-small"
                                    default-sort="user.first_name"
                                    aria-next-label="Next page"
                                    aria-previous-label="Previous page"
                                    aria-page-label="Page"
                                    aria-current-label="Current page">

                                    <template slot-scope="props">
                                        <b-table-column class="is-size-6" field="id" label="Nemónico" width="40" sortable>
                                            <template slot="header" slot-scope="{ column }">
                                                <b-tooltip :label="column.label" class="is-size-6">
                                                    {{ column.label }}
                                                </b-tooltip>
                                            </template>
                                            <router-link v-for="site in props.row.sites" :key="props.row.id" class="is-size-7" :to="'/pop/' + props.row.id" target="_blank">
                                                {{ site.nem_site }}
                                            </router-link>
                                        </b-table-column>

                                        <b-table-column class="is-size-6" field="user.first_name" label="Nombre POP" sortable>
                                            <template slot="header" slot-scope="{ column }">
                                                <b-tooltip :label="column.label" class="is-size-6">
                                                    {{ column.label }}
                                                </b-tooltip>
                                            </template>
                                            {{ props.row.nombre }}
                                        </b-table-column>

                                        <b-table-column class="is-size-6" field="user.last_name" label="Zona" sortable>
                                            <template slot="header" slot-scope="{ column }">
                                                <b-tooltip :label="column.label" class="is-size-6">
                                                    {{ column.label }}
                                                </b-tooltip>
                                            </template>
                                            {{ props.row.protected_zones[0].cod_zone }}
                                            {{ props.row.comuna.zona.nombre_zona }}
                                        </b-table-column>

                                        <!-- <b-table-column class="is-size-6" field="date" label="Date" sortable centered>
                                            <template slot="header" slot-scope="{ column }">
                                                <b-tooltip :label="column.label" class="is-size-6">
                                                    {{ column.label }}
                                                </b-tooltip>
                                            </template>
                                            <span class="tag is-success">
                                                {{ props.row.created_at }}
                                            </span>
                                        </b-table-column> -->

                                    </template>
                                </b-table>

                            </div>
                        </div>
                    </div>
                    <div class="tile is-vertical">
                        <div class="tile is-parent">
                            <div class="tile is-child box">
                                <div class="title">Zonas de acopio temporal</div>
                            </div>
                        </div>
                        <div class="tile is-parent">
                            <div class="tile is-child box">
                                <div class="title">RCA</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
</template>

<script>
    export default {
        components: {
        },
        props : [
        ],
        data() {
            return {
                protectedZones: [],
                isPaginated: true,
                isPaginationSimple: false,
                paginationPosition: 'bottom',
                defaultSortDirection: 'asc',
                sortIcon: 'arrow-up',
                sortIconSize: 'is-small',
                currentPage: 1,
                perPage: 20,

                darkMode: 0,
                bodyBackground: '',
                boxBackground: '',
                primaryText: '',
                secondaryText: '',
                searchBodyBackground: '',
            }
        },
        created() {
        },
        mounted() {
            this.getProtectedZones()
            // this.getFiles()
        },
        methods: {
            getProtectedZones() {
                axios.get(`/api/eco`).then((response) => {
                    // console.log(response.data.data)
                    this.protectedZones = response.data.data
                })
            },
            // async getFiles() {
            //     axios.get(`/api/eco/1`).then((response) => {
            //         // console.log(response)
            //     })
            // }
        }
    }
</script>
