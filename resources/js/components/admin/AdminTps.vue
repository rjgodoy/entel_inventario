<template>
    <section class="section container">
        <div class="box" style="position: relative;">
            <div class="block">
                <div class="has-text-weight-bold has-text-centered is-size-4">Trabajos programados - Instalaciones de Equipos</div>
            </div>

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
                pagination-size="is-small"
                default-sort="FECHA_INGRESO"
                aria-next-label="Next page"
                aria-previous-label="Previous page"
                aria-page-label="Page"
                aria-current-label="Current page">

                <template slot-scope="props">
                    <!-- <b-table-column class="is-size-6" field="sites.nem_site" label="Nemónico" width="40">
                        <template slot="header" slot-scope="{ column }">
                            <b-tooltip :label="column.label" class="is-size-6">
                                {{ column.label }}
                            </b-tooltip>
                        </template>
                        <router-link v-for="site in props.row.sites" :key="site.id" class="is-size-7" :to="'/pop/' + props.row.id" target="_blank">
                            <p>{{ site.nem_site }}</p>
                        </router-link>
                    </b-table-column> -->

                    <b-table-column class="is-size-6" width="90" field="tp_id" label="ID TP" sortable searchable>
                        <template slot="header" slot-scope="{ column }">
                            <b-tooltip :label="column.label" class="is-size-6">
                                {{ column.label }}
                            </b-tooltip>
                        </template>
                        <div class="is-size-7">
                            <div class="is-size-6">{{ props.row.tp_id }}</div>
                        </div>
                    </b-table-column>

                    <b-table-column class="is-size-6" field="site.nem_site" label="Sitio" sortable searchable>
                        <template slot="header" slot-scope="{ column }">
                            <b-tooltip :label="column.label" class="is-size-6">
                                {{ column.label }}
                            </b-tooltip>
                        </template>
                        <div class="is-size-6 has-text-weight-normal">{{ props.row.site ? props.row.site.nem_site : '' }} - {{ props.row.site ? props.row.site.nombre : '' }}</div>
                    </b-table-column>

                    <b-table-column class="is-size-6" field="title" label="Título" sortable searchable>
                        <template slot="header" slot-scope="{ column }">
                            <b-tooltip :label="column.label" class="is-size-6">
                                {{ column.label }}
                            </b-tooltip>
                        </template>
                        <b-tooltip :label="props.row.description" type="is-link" position="is-right" class="is-size-6" size="is-large" multilined>
                            <div class="is-size-6 has-text-weight-normal">{{ props.row.title }}</div>
                        </b-tooltip>
                    </b-table-column>

                    <b-table-column class="is-size-6" field="created_at" label="Fecha Ingreso" sortable searchable>
                        <template slot="header" slot-scope="{ column }">
                            <b-tooltip :label="column.label" class="is-size-6">
                                {{ column.label }}
                            </b-tooltip>
                        </template>
                        <div class="is-size-6 has-text-weight-normal">{{ props.row.created_at }}</div>
                    </b-table-column>

                    <b-table-column class="is-size-6" field="user" label="Usuario Creador" sortable searchable>
                        <template slot="header" slot-scope="{ column }">
                            <b-tooltip :label="column.label" class="is-size-6">
                                {{ column.label }}
                            </b-tooltip>
                        </template>
                        <div class="is-size-6 has-text-weight-normal">{{ props.row.user }}</div>
                    </b-table-column>

                    <b-table-column class="is-size-6" field="psg_tp_state.state" label="Estado" sortable searchable centered>
                        <template slot="header" slot-scope="{ column }" class="is-size-6">
                            <b-tooltip :label="column.label" class="is-size-6">
                                {{ column.label }}
                            </b-tooltip>
                        </template>
                        <b-tag :type="tagColor(props.row.psg_tp_state.id).color" 
                            class="is-size-7 has-text-weight-semibold"
                            :class="tagColor(props.row.psg_tp_state.id).text">
                            {{ props.row.psg_tp_state.state.toUpperCase() }}
                        </b-tag>
                    </b-table-column>

                </template>
            </b-table>
            <b-loading :is-full-page="false" :active.sync="loading" :can-cancel="true"></b-loading>
        </div>

    </section>
</template>

<script>

    export default {
        props : [
            'user',
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
                finished: [],
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
                perPage: 20,
                loading: true
            }
        },

        methods: {
            syncData() {
                axios.get(`/api/psgTp?api_token=${this.user.api_token}&page=${this.currentPage}`).then((response) => {
                    console.log(response.data)
                    this.data = response.data
                    this.loading = false
                    // let i = 0
                    // this.finished = []
                    // this.data.forEach((element, index, array) => {
                    //     element.psg_tp_state_id == 8 && this.finished.push(element) 
                    //     i++
                    //     if(i == array.length && this.finished.length) {
                    //         console.log(this.finished.length)
                    //         this.insertFinisheds()
                    //     }
                    // })
                })
            },

            // insertFinisheds() {
            //     // console.log(this.finished)
            //     let resource = ''
            //     this.finished.forEach(element => {
            //          switch(element.work_type_id) {
            //             case 1:
            //                 resource = 'powerRectifiers'
            //                 break
            //             case 2:
            //                 resource = 'generatorSets'
            //                 break
            //             case 3:
            //                 resource = 'infrastructures'
            //                 break
            //             case 4:
            //                 resource = 'airConditioners'
            //                 break
            //             case 5:
            //                 resource = 'transformers'
            //                 break
            //             case 6:
            //                 resource = 'verticalStructures'
            //                 break
            //             case 7:
            //                 resource = 'batteries'
            //                 break
            //             default:
            //                 break
            //         }
            //         let params = {
            //             'api_token': this.user.api_token,
            //             'tp_id': element.tp_id,
            //             'site_id': element.site_id
            //         }
            //         axios.post(`/api/${resource}`, params)
            //         .then(response => {
            //             console.log(response.data)
            //             this.syncData()
            //         })
            //     })
                
            // },

            tagColor(state_id) {
                let color = ''
                let text = ''
                switch(state_id) {
                    case 8:
                        color = 'is-eco'
                        text = 'has-text-white'
                        break
                    // case 1:
                    // case 2:
                    // case 3:
                    // case 4:
                    // case 5:
                    // case 6:
                    // case 7:
                    // case 9:
                    // case 10:
                    // case 11:
                    // case 12:
                    default:
                        color = 'is-gray'
                        text = 'has-text-dark'
                        break
                }
                return {
                    'color': color,
                    'text': text
                }
            }
        }
    }
</script>
