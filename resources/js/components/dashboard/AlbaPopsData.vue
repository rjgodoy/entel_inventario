<template>
    <div>
        <div class="columns">
            <div class="column is-size-5 has-text-weight-semibold has-text-left" :class="primaryText">Proyecto Alba</div>
            <div class="column is-size-4 has-text-weight-semibold has-text-right" :class="primaryText">{{ data.total | numeral('0,0') }}</div>
        </div>
        <table class="table is-fullwidth" :class="boxBackground">
            <thead>
                <tr class="is-size-7">
                    <th class="has-text-left" :class="secondaryText"><abbr title="Nemónico">Nemónico</abbr></th>
                    <th class="has-text-left" :class="secondaryText"><abbr title="Nombre y dirección del POP">Nombre / Dirección</abbr></th>
                    <th class="has-text-left" :class="secondaryText"><abbr title="Categoría">Categoría</abbr></th>
                </tr>
            </thead>
            <tbody>
                <tr class="is-size-7" v-for="item in data.data" :key="item.id">
                    <td class="has-text-left" :class="primaryText">
                        <router-link :to="'/pop/' + item.id" target="_blank">{{ item.sites[0].nem_site }}</router-link>
                    </td>
                    <td class="has-text-left" :class="primaryText">
                        <div>{{ item.nombre }}</div>
                        <div>{{ item.direccion }}</div>
                    </td>
                    <td class="has-text-centered" :class="primaryText">
                        <b-tag :type="popClassification(item)[0] == 1 ? 'is-info' : (popClassification(item)[0] == 2 ? 'is-warning' : (popClassification(item)[0] == 3 ? 'is-smart' : (popClassification(item)[0] == 4 ? 'is-success' : 'is-link')))">{{ popClassification(item)[1] }}</b-tag>
                    </td>
                </tr>
            </tbody>
        </table>

        <nav class="pagination" role="navigation" aria-label="pagination">
            <vue-pagination  
                :pagination="data"
                @paginate="getData()"
                :offset="4"
                :primaryText="primaryText">
            </vue-pagination>
        </nav>

        <!-- <div class="field has-addons">
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
        </div> -->

    </div>
</template>

<script>
    export default {
        components: {
            VuePagination: () => import(/* webpackChunkName: "chunks/helpers/vuePagination"*/'../helpers/VuePagination'),
        },
        props : [
            'user',
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
                data: {
                    total: 0,
                    per_page: 12,
                    from: 1,
                    to: 0,
                    current_page: 1
                },
                buttonLoading: 0,
            }
        },
        created(){  
        },
        mounted() {   
            this.getData()   
        },
        watch: {
            selectedCrm(newValue, oldValue) {
                this.getData()
            },
            selectedZona(newValue, oldValue) {
                this.getData()
            },
            core(newValue, oldValue) {
                this.getData()
            }
        },
        
        methods: {
            popClassification(pop) {
                // console.log(pop)
                var i = 6; var cat
                if (pop.sites) {
                    pop.sites.forEach(function(item) {
                        if (item.classification_type_id && item.classification_type_id < i) { 
                            i = item.classification_type_id
                            cat = item.classification_type.classification_type
                        }
                    }, this)
                }
                return [i, cat]
            },

            getData() {
                axios.get(`/api/albaPopList?core=${this.core}&crm_id=${this.selectedCrm ? this.selectedCrm.id : 0}&zona_id=${this.selectedZona ? this.selectedZona.id : 0}&page=${this.data.current_page}`)
                .then((response) => {
                    // console.log(response.data)
                    this.data = response.data;
                    // if(true) {
                    //     this.$emit('clicked', this.data)
                    // }
                })
            },
            // downloadPops() {
            //     this.buttonLoading = 1

            //     axios.get(`/pop/export?core=${this.core}&crm_id=${this.selectedCrm ? this.selectedCrm.id : 0}&zona_id=${this.selectedZona ? this.selectedZona.id : 0}`, {
            //         responseType: 'blob',
            //     })
            //     .then((response) => {
            //         // console.log(response.data)
            //         const blob = new Blob([response.data], { type: 'application/xls' })
            //         // const objectUrl = window.URL.createObjectURL(blob)

            //         let link = document.createElement('a')
            //         link.href = window.URL.createObjectURL(blob)
            //         link.download = 'test.xlsx'
            //         link.click()
            //         this.buttonLoading = 0
            //     })
            // }
        }
    }
</script>
