<template>
    <div class="tile is-parent">
        <article class="tile is-child box" :class="boxBackground">
            <div class="columns">
                <div class="column is-size-5 has-text-weight-semibold has-text-left" :class="primaryText">POP</div>
                <div class="column is-size-4 has-text-weight-semibold has-text-right" :class="primaryText">{{ data.total | numeral('0,0') }}</div>
            </div>
            <!-- <div style="min-height: 300px; max-height: 500px; overflow-y: scroll;"> -->
                <table class="table is-fullwidth" :class="boxBackground">
                    <thead>
                        <tr class="is-size-7">
                            <!-- <th class="has-text-right" :class="secondaryText"><abbr title="ID">ID</abbr></th> -->
                            <th class="has-text-left" :class="secondaryText"><abbr title="Código Planificación">Cod. Planificación</abbr></th>
                            <th class="has-text-left" :class="secondaryText"><abbr title="Nemónico">Nemónico</abbr></th>
                            <th class="has-text-left" :class="secondaryText"><abbr title="Categoría">Categoría</abbr></th>
                            <th class="has-text-left" :class="secondaryText"><abbr title="Nombre y dirección del POP">Nombre / Dirección</abbr></th>
                            <!-- <th class="has-text-left" :class="secondaryText"><abbr title="Dirección">Dirección</abbr></th> -->
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="is-size-7" v-for="item in data.data">
                            <!-- <td class="has-text-right" :class="primaryText">{{ item.pop_id | numeral('0,0') }}</td> -->
                            <td class="has-text-left" :class="primaryText">{{ item.cod_planificacion }}</td>
                            <td class="has-text-left" :class="primaryText">{{ item.nem_site }}</td>
                            <td class="has-text-centered" :class="primaryText">
                                <b-tag type="is-info">{{ item.classification_type }}</b-tag>
                            </td>
                            <td class="has-text-left" :class="primaryText">
                                <div>{{ item.nombre }}</div>
                                <div>{{ item.direccion }}</div>
                            </td>
                            <!-- <td class="has-text-right" :class="primaryText">{{ item.direccion }}</td> -->
                        </tr>
                    </tbody>
                </table>
            <!-- </div> -->

            <nav class="pagination" role="navigation" aria-label="pagination">
                <vue-pagination  
                    :pagination="data"
                    @paginate="getData()"
                    :offset="4"
                    :primaryText="primaryText">
                </vue-pagination>
            </nav>

            <div class="field has-addons">
                <p class="control">
                    <b-button 
                        :loading="buttonLoading ? true : false"
                        type="is-link"
                        size="is-small"
                        @click="downloadPops">
                        <font-awesome-icon icon="download"/> 
                        &nbsp;&nbsp;Listado de POPs
                    </b-button>
                </p>
                <p class="control">
                    <b-tooltip label="Tooltip Text" position="is-right">
                        <a href="/pop" type="button" class="button is-small is-link" data-tooltip="">
                            <font-awesome-icon icon="bars"/>
                        </a>
                    </b-tooltip>
                </p>
            </div>

        </article>
    </div>
</template>

<script>
    import VuePagination from '../VuePagination.vue';
    export default {
        components: {
            'vue-pagination': VuePagination
        },
        props : [
            'selectedCrm',
            'selectedZona',
            'bodyBackground',
            'boxBackground',
            'primaryText',
            'secondaryText',
            'core'
        ],
        data() {
            return {
                crmSelected: this.selectedCrm,
                zonaSelected: this.selectedZona,
                data: {
                    total: 0,
                    per_page: 10,
                    from: 1,
                    to: 0,
                    current_page: 1
                },
                buttonLoading: 0,
            }
        },
        created(){
            this.getData()
        },
        mounted() {      
        },
        watch: {
            selectedCrm(newValue, oldValue) {
                this.crmSelected = newValue
                this.zonaSelected = null
                this.getData()
            },
            selectedZona(newValue, oldValue) {
                this.zonaSelected = newValue
                this.getData()
            },
            core(newValue, oldValue) {
                this.getData()
            }
        },
        methods: {
            getData() {
                // Si no hay un CRM seleccionado
                if (this.crmSelected == null) {                             
                    axios.get(`/api/criticPops?core=${this.core}&page=${this.data.current_page}`)
                    .then((response) => {
                        this.data = response.data;
                        console.log(response)
                    })
                } 
                //Si hay un CRM seleccionado, pero no hay zona seleccionada
                else if (this.zonaSelected == null){
                    axios.get(`api/criticPopsCrm?crm_id=${this.crmSelected.id}&core=${this.core}&page=${this.data.current_page}`)
                    .then((response) => {
                        this.data = response.data;
                    })
                } 
                // Si hay una zona seleccionada
                else {
                    axios.get(`api/criticPopsZona?zona_id=${this.zonaSelected.id}&core=${this.core}&page=${this.data.current_page}`)
                    .then((response) => {
                        this.data = response.data;
                    })
                }
            },
            downloadPops() {
                this.buttonLoading = 1

                axios.get(`/pop/export?core=${this.core}&crm_id=${this.crmSelected ? this.crmSelected.id : 0}&zona_id=${this.zonaSelected ? this.zonaSelected.id : 0}`, {
                    responseType: 'blob',
                })
                .then((response) => {
                    console.log(response.data)
                    const blob = new Blob([response.data], { type: 'application/xls' })
                    // const objectUrl = window.URL.createObjectURL(blob)

                    let link = document.createElement('a')
                    link.href = window.URL.createObjectURL(blob)
                    link.download = 'test.xlsx'
                    link.click()
                    this.buttonLoading = 0
                })
            }
        }
    }
</script>
