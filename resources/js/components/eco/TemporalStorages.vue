<template>
    <div class="tile is-child box">
        <div class="has-text-right is-pulled-right">
            <div class="field" v-if="canCreate">
                <button class="button is-small" @click="isNewStorageModalActive = true">Agregar ZAT</button>
            </div>
            <div class="field">
                <a class="button is-small" 
                    href="https://docs.google.com/spreadsheets/d/1LUXLXKgrBecj1HG0Y0WVmTv6yWA8s_VV5Qxxxl4AOrc/edit#gid=1768973228" 
                    target="_blank">
                    Ver planilla de materiales
                </a>
            </div>
        </div>
        
        <div class="title is-size-4">Zonas Acopio Temporal</div>

        <b-table
            :data="storageZones.environmentalData"
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

                <b-table-column class="is-size-6" width="70%" field="nombre" label="Nombre POP" sortable searchable>
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

                <b-table-column class="is-size-6" field="comuna.zona.nombre_zona" label="Zona">
                    <template v-slot:header="{ column }">
                        <b-tooltip :label="column.label" class="is-size-6" append-to-body>
                            {{ column.label }}
                        </b-tooltip>
                    </template>
                    <template v-slot="props">
                        <div class="is-size-7">
                            <p>{{ props.row.comuna.zona.nombre_zona }}</p>
                        </div>
                    </template>
                </b-table-column>

        </b-table>

        <b-modal :active.sync="isNewStorageModalActive"
            has-modal-card
            trap-focus
            aria-role="dialog"
            aria-modal>
            <modal-new-storage 
                :user="user"
                />
        </b-modal>

    </div>       
</template>

<script>
    export default {
        components: {
            ModalNewStorage: () => import(/* webpackChunkName: "chunks/eco/modals/newStorage"*/'./modals/ModalNewStorage'),
        },
        props : [
            'storageZones',
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

                isNewStorageModalActive: false,
                newTempStorage: null,

            }
        },

        computed: {
            canCreate() {
                return this.storageZones.can && this.storageZones.can.create
            },

            canDelete() {
                return this.storageZones.can && this.storageZones.can.delete
            }
        },

        created() {
        },


        methods: {
            
        }
    }
</script>
