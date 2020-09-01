<template>
    <div class="box">
        <div class="title is-size-4">Zonas protegidas</div>

        <!-- <b-field grouped group-multiline> -->
            <!-- <b-select v-model="defaultSortDirection">
                <option value="asc">Default sort direction: ASC</option>
                <option value="desc">Default sort direction: DESC</option>
            </b-select> -->
            <!-- <b-select v-model="perPage" :disabled="!isPaginated">
                <option value="5">5 per page</option>
                <option value="10">10 per page</option>
                <option value="15">15 per page</option>
                <option value="20">20 per page</option>
            </b-select> -->
            <!-- <div class="control">
                <button class="button" @click="currentPage = 2" :disabled="!isPaginated">Set page to 2</button>
            </div> -->
            <!-- <div class="control is-flex">
                <b-switch v-model="isPaginated">Paginated</b-switch>
            </div> -->
            <!-- <div class="control is-flex">
                <b-switch v-model="isPaginationSimple" :disabled="!isPaginated">Simple pagination</b-switch>
            </div> -->
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
        <!-- </b-field> -->

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

            <b-table-column class="is-size-6" width="30%" field="cod_zone" label="Cod Zona" sortable searchable>
                <template v-slot:header="{ column }">
                    <b-tooltip :label="column.label" class="is-size-6">
                        {{ column.label }}
                    </b-tooltip>
                </template>
                <!-- <router-link class="is-size-7" :to="'/pop/' + props.row.id" target="_blank">
                    <div class="is-size-6">{{ props.row.nombre }}</div>
                </router-link> -->
                <template v-slot="props">
                    <p class="is-size-7">{{ props.row.cod_zone }}</p>
                </template>
            </b-table-column>

            <b-table-column class="is-size-6" field="name" label="Zona" sortable searchable>
                <template v-slot:header="{ column }">
                    <b-tooltip :label="column.label" class="is-size-6">
                        {{ column.label }}
                    </b-tooltip>
                </template>
                <template v-slot="props">
                    <div class="is-size-6 has-text-weight-semibold">{{ props.row.name }}</div>
                </template>
            </b-table-column>

        </b-table>

    </div>       
</template>

<script>
    export default {
        components: {
        },
        props : [
            'protectedZones',
            'user'
        ],
        data() {
            return {
                isPaginated: true,
                isPaginationSimple: false,
                paginationPosition: 'bottom',
                defaultSortDirection: 'asc',
                sortIcon: 'arrow-up',
                sortIconSize: 'is-small',
                currentPage: 1,
                perPage: 15,

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
            // this.getProtectedZones()
            // this.getFiles()
        },
        methods: {
            
            // async getFiles() {
            //     axios.get(`/api/eco/1`).then((response) => {
            //         // console.log(response)
            //     })
            // }
        }
    }
</script>
