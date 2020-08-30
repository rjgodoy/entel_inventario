<template>
    <div class="tile is-child box is-shadowless">
        <div class="title is-size-4">POP en zonas protegidas</div>

        <b-table
            :data="popProtectedZones"
            :paginated="isPaginated"
            :per-page="perPage"
            :current-page.sync="currentPage"
            :pagination-simple="isPaginationSimple"
            :pagination-position="paginationPosition"
            :default-sort-direction="defaultSortDirection"
            :sort-icon="sortIcon"
            :sort-icon-size="sortIconSize"
            pagination-size="is-small"
            default-sort="pops.nombre"
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page">

            <b-table-column class="is-size-6" width="70%" field="nombre" label="PoP" sortable searchable>
                <template v-slot:header="{ column }">
                    <b-tooltip :label="column.label" class="is-size-6" append-to-body>
                        {{ column.label }}
                    </b-tooltip>
                </template>
                <template v-slot="props">
                    <router-link class="is-size-7" :to="'/pop/' + props.row.id" target="_blank">
                        <div class="is-size-6">{{ props.row.nombre }}</div>
                    </router-link>
                    <p class="is-size-7">{{ props.row.comuna.nombre_comuna }}</p>
                </template>
            </b-table-column>

            <b-table-column class="is-size-6" field="comuna.zona.nombre_zona" label="Zona" sortable>
                <template v-slot:header="{ column }">
                    <b-tooltip :label="column.label" class="is-size-6">
                        {{ column.label }}
                    </b-tooltip>
                </template>
                <template v-slot="props">
                    <div class="is-size-6 has-text-weight-semibold">{{ props.row.protected_zones[0].cod_zone }}</div>
                    <div class="is-size-7">{{ props.row.comuna.zona.nombre_zona }}</div>
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
            'popProtectedZones',
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
                perPage: 10,

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
            // this.getpopProtectedZones()
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
