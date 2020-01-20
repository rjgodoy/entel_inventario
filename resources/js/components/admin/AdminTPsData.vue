<template>
    <section class="section">
        <div class="box">

            <b-field grouped group-multiline>
                <div class="control">
                    <b-switch v-model="isBordered">Bordered</b-switch>
                </div>
                <div class="control">
                    <b-switch v-model="isStriped">Striped</b-switch>
                </div>
                <div class="control">
                    <b-switch v-model="isNarrowed">Narrowed</b-switch>
                </div>
                <div class="control">
                    <b-switch v-model="isHoverable">Hoverable</b-switch>
                </div>
                <div class="control">
                    <b-switch v-model="isFocusable">Focusable</b-switch>
                </div>
                <div class="control">
                    <b-switch v-model="isLoading">Loading state</b-switch>
                </div>
                <div class="control">
                    <b-switch v-model="isEmpty">Empty</b-switch>
                </div>
            </b-field>

            <b-table
                :data="isEmpty ? [] : data"

                :paginated="isPaginated"
                :per-page="perPage"
                :current-page.sync="currentPage"
                :pagination-simple="isPaginationSimple"
                :pagination-position="paginationPosition"
                :default-sort-direction="defaultSortDirection"
                :sort-icon="sortIcon"
                :sort-icon-size="sortIconSize"
                default-sort="FECHA_INGRESO"
                aria-next-label="Next page"
                aria-previous-label="Previous page"
                aria-page-label="Page"
                aria-current-label="Current page"


                :bordered="isBordered"
                :striped="isStriped"
                :narrowed="isNarrowed"
                :hoverable="isHoverable"
                :loading="isLoading"
                :focusable="isFocusable"
                :checked-rows.sync="checkedRows"
                :is-row-checkable="(row) => row.id !== 3"
                checkable
                :checkbox-position="checkboxPosition">

                <template slot-scope="props">
                    <b-table-column field="id" label="ID TP" width="40" numeric>
                        {{ props.row.tp_id }}
                    </b-table-column>

                    <b-table-column field="first_name" label="Sitio">
                        {{ props.row.site ? props.row.site.nem_site : '' }} - {{ props.row.site ? props.row.site.nombre : '' }}
                    </b-table-column>

                    <b-table-column field="DESCRIPCION" label="Descripción">
                        <!-- {{ new Date(props.row.created_at).toLocaleDateString() }} -->
                        {{ props.row.description }}
                    </b-table-column>

                    <b-table-column field="DESCRIPCION" label="Fecha Ingreso">
                        <!-- {{ new Date(props.row.created_at).toLocaleDateString() }} -->
                        {{ props.row.created_at }}
                    </b-table-column>

                    <b-table-column field="date" label="Usuario Creador" centered>
                        <span class="tag is-success">
                            {{ props.row.user }}
                        </span>
                    </b-table-column>



                    <b-table-column field="date" label="Estado" centered>
                        <span class="tag is-success">
                            {{ props.row.psg_tp_state.state }}
                        </span>
                    </b-table-column>

                    <b-table-column label="Acciones">
                        <span>
                            <!-- <b-button v-bind:key="action.id" @click="approve()">{{ action.action.name }}</b-button> -->
                            <!-- <b-button v-bind:key="action.id" @click="approve()">{{ action.action.name }}</b-button> -->
                        </span>
                    </b-table-column>
                </template>

                <template slot="empty">
                    <section class="section">
                        <div class="content has-text-grey has-text-centered">
                            <p>
                                <b-icon
                                    icon="emoticon-sad"
                                    size="is-large">
                                </b-icon>
                            </p>
                            <p>Nothing here.</p>
                        </div>
                    </section>
                </template>
            </b-table>
        </div>

    </section>
</template>

<script>
    export default {
        props : [
            'bodyBackground',
            'boxBackground',
            'primaryText',
            'secondaryText',
        ],
        created() {
            
        },
        mounted() {
            // Se conecta a la base de datos de PSG y extrae la información a la tabla de Inventario
            this.syncData()
        },
        data() {
            return {
                data: [],
                isEmpty: false,
                isBordered: false,
                isStriped: false,
                isNarrowed: true,
                isHoverable: false,
                isFocusable: false,
                isLoading: false,
                checkboxPosition: 'left',
                checkedRows: [],
                isPaginated: true,
                isPaginationSimple: false,
                paginationPosition: 'bottom',
                defaultSortDirection: 'asc',
                sortIcon: 'arrow-up',
                sortIconSize: 'is-small',
                currentPage: 1,
                perPage: 20
            }
        },
        methods: {
            syncData() {
                axios.get(`/api/psgTp?page=${this.currentPage}`).then((response) => {
                    console.log(response)
                    this.data = response.data
                })
            }
        }
    }
</script>
