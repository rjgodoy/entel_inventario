<template>
    <div class="section" style="">
        <div class="container">

            <div class="columns">
                <div class="column tile is-parent" v-for="crm in crms" :key="crm.id" @click="currentCrm = currentCrm === crm.id ? 0 : crm.id">
                    <div class="tile is-child box has-text-centered p-2" :class="currentCrm === crm.id && 'is-bold is-link'">
                        <div v-text="crm.sigla_crm" class="is-size-4 has-text-weight-semibold"></div>
                        <div style="padding-top: 5px;">
                            <div class="is-size-7 has-text-weight-normal">
                                {{ crm.nombre_crm }}
                            </div>
                        </div>
                        <!-- <div class=""> -->
                            <!-- <CrmStatus :crm=crm /> -->
                        <!-- </div> -->
                    </div>
                </div>
            </div>

            <div class="box">
                <div class="columns is-vcentered">
                    <div class="column">
                        <div class="control has-icons-left has-icons-right">
                            <input 
                                class="input is-rounded" 
                                @keyup="getEnergyEquipmentRevisionsData" 
                                v-model="searchText" 
                                type="text" 
                                arial-label="Buscar" 
                                placeholder="Buscar..." 
                                autofocus>
                            <span class="icon is-small is-left">
                                <font-awesome-icon icon="search"/>
                            </span>
                            <span class="icon is-small is-right">
                                <button class="delete" @click="clearSearch"></button>
                            </span>
                        </div>
                    </div>

                    <div class="column is-2">
                        <b-field class="has-text-weight-semibold">
                            <b-checkbox-button v-model="checkboxGroup"
                                @input="getEnergyEquipmentRevisionsData()"
                                native-value="0"
                                type="is-success">
                                <span>Mensual</span>
                            </b-checkbox-button>

                            <b-checkbox-button v-model="checkboxGroup"
                                @input="getEnergyEquipmentRevisionsData()"
                                native-value="1"
                                type="is-link">
                                <span>Semanal</span>
                            </b-checkbox-button>
                        </b-field>
                    </div>

                    <div class="column is-3">
                        <div class="control has-icons-left has-icons-right">
                            <b-datepicker
                                placeholder="Selecciona fechas..."
                                v-model="dates"
                                icon-pack="fas"
                                icon-prev="chevron-left"
                                icon-next="chevron-right"
                                range
                                @input="getEnergyEquipmentRevisionsData"
                                :first-day-of-week="1"
                                :max-date="new Date()">
                            </b-datepicker>
                            <span class="icon is-small is-left">
                                <font-awesome-icon icon="calendar-alt"/>
                            </span>
                            <span class="icon is-small is-right">
                                <button class="delete" @click="clearDates"></button>
                            </span>
                        </div>
                    </div>

                    <div class="column is-1 has-text-right">
                        <b-button class="is-success" :loading="isbuttonLoading" 
                            @click="downloadRevisions">
                            <font-awesome-icon :icon="['fas', 'download']" />
                        </b-button>
                    </div>
                </div>

                <div class="field">          
                    <table class="table is-fullwidth">
                        <thead>
                            <tr class="" >
                                <th v-for="column in columns" class="is-size-6 has-text-weight-semibold has-text-left" :key="column.id" :width="column.width + '%'">
                                    <abbr title="id">{{ column.name }}</abbr>
                                </th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            <tr class="" v-for="data in revisionsData.energyEquipmentRevisions" :key="data.id">
                                <td class="">
                                    <div class="is-size-6 has-text-weight-normal">
                                        {{ data.id }}
                                    </div>
                                </td>
                                <td class="">
                                    <div class="is-size-6 has-text-weight-semibold">
                                        <b-tooltip :label="data.weekly_review ? 'Revisión Semanal' : 'Revisión Mensual'" position="is-left" :type="data.weekly_review ? 'is-link' : 'is-success'">
                                            <b-tag :type="data.weekly_review ? 'is-link' : 'is-success'">{{ data.weekly_review ? "S" : "M" }}</b-tag>
                                        </b-tooltip>
                                    </div>
                                </td>
                                <td class="">
                                    <div class="">
                                        <a class="is-size-6 has-text-weight-semibold" target="_blank" :href="'/pop/' + data.pop.id">
                                            {{ data.pop.nombre }}
                                        </a>
                                    </div>
                                </td>
                                <td class="">
                                    <div class="is-size-6 has-text-weight-normal">{{ data.date }}</div>
                                </td>
                                <!-- <td class="">
                                    <div class="is-size-6 has-text-weight-normal">
                                        <font-awesome-icon 
                                            icon="circle"
                                            size="2x" 
                                            :class="'has-text-' + status(data)"
                                            />
                                    </div>
                                </td> -->
                                <td class="">
                                    <div class="is-size-6 has-text-weight-normal">{{ data.revisor }}</div>
                                </td>
                                <td class="">
                                    <div class="is-size-6 has-text-weight-normal">{{ data.company }}</div>
                                </td>
                                <td class="is-left">
                                    <button class="button is-small is-link is-outlined is-pulled-right" @click="isDetailModalActive=true, selectedRevision=data">Detalles</button>
                                </td>
                            </tr>    
                        </tbody>
                    </table>
                    <div class="level">
                        <nav class="level-left pagination" role="navigation" aria-label="pagination">
                            <vue-pagination  
                                :pagination="revisionsData.meta"
                                @paginate="getEnergyEquipmentRevisionsData()"
                                :offset="4"
                                :primaryText="primaryText">
                            </vue-pagination>
                        </nav>
                        <!-- <div class="level-right has-text-right">
                            <div class="is-size-7 " :class="secondaryText">Fecha ultima actualización: {{ last_updated.formatted }}</div>
                        </div> -->
                    </div>
                </div>
               
            </div>
        </div>
        <b-modal :active.sync="isDetailModalActive"
            has-modal-card
            trap-focus
            aria-role="dialog"
            aria-modal>
            <ModalDetail
                :revision=selectedRevision
                :user=user
                />
        </b-modal>
    </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faBars, faCircle, faDownload, faAngleLeft, faAngleRight, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
// import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
// import { faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons'
library.add(faSearch, faBars, faCircle, faDownload, faAngleLeft, faAngleRight, faCalendarAlt);
var moment = require('moment')

export default {
    components: {
        // CrmStatus: () => import(/* webpackChunkName: "chunks/reports/maintenance/crmStatus"*/'./CrmStatus'),
        ModalDetail: () => import(/* webpackChunkName: "chunks/reports/mintenance/modalDetail"*/'./modals/ModalDetail'),
        VuePagination: () => import(/* webpackChunkName: "chunks/helpers/vuePagination"*/'../../helpers/VuePagination'),
    },
    props : [
        'user'
    ],
    data() {
        return {
            crms: Array,
            selectedRevision: null,
            dates: [],
            revisionsData: {
                // can: Array,
                // revisions: Object,
                meta: {
                    current_page: 1,
                    total: 0,
                    per_page: 2,
                    from: 1,
                    to: 0,
                }
            },

            columns: [
                { 'name': 'Id'},
                { 'name': 'Revisión'},
                { 'name': 'POP', 'width': 25 }, 
                { 'name': 'Fecha' },
                // { 'name': 'Status' },
                { 'name': 'Empresa' },
                { 'name': 'Reisor' },
                { }
            ],
            searchText: '',
            currentCrm: 0,
            isDetailModalActive: false,
            isbuttonLoading: false,

            checkboxGroup: ["0","1"],

            primaryText: ''
        }
    },

    watch: {
        currentCrm(newValue) {
            this.getEnergyEquipmentRevisionsData()
        }
    },

    created() {
    },

    mounted() {
        this.getCrms()
        this.getEnergyEquipmentRevisionsData()
    },
    
    methods: {

        getCrms() {
            axios.get(`/api/crms`)
            .then((response) => {
                this.crms = response.data.crms
            })
        },

        // status(revision) {
        //     let q = 0
        //     let nulls = 0
        //     Object.keys(revision.statuses).forEach(element => {
        //         if (revision.statuses[element].status == null) {
        //             nulls = nulls + 1
        //         }
        //         q = q + revision.statuses[element].status
        //     })
        //     let statusIcon = q + nulls == revision.statuses.length ? 'success' : 'warning'
        //     return statusIcon
        // },

        getEnergyEquipmentRevisionsData() {
            var weekly = null
            if (this.checkboxGroup.includes("0") && !this.checkboxGroup.includes("1")) {
                weekly = 0
            } else if (!this.checkboxGroup.includes("0") && this.checkboxGroup.includes("1")) {
                weekly = 1
            }

            const params = {
                'page': this.revisionsData.meta.current_page,
                'crm_id': this.currentCrm,
                'text': this.searchText != '' ?  this.searchText : 0,
                'start_date': this.dates.length && new Date(this.dates[0]),
                'end_date': this.dates.length && new Date(this.dates[1]),
                'weekly_review': weekly
            }
            axios.get('/api/energyEquipmentRevisions', { params: params })
            .then((response) => {
                // console.log(response)
                this.revisionsData = response.data
                // console.log(this.revisionsData.length)
            })
        },

        downloadRevisions() {
            this.isbuttonLoading = true

            var weekly = null
            if (this.checkboxGroup.includes("0") && !this.checkboxGroup.includes("1")) {
                weekly = 0
            } else if (!this.checkboxGroup.includes("0") && this.checkboxGroup.includes("1")) {
                weekly = 1
            }

            const params = {
                'crm_id': this.currentCrm,
                'text': this.searchText != '' ?  this.searchText : 0,
                'start_date': this.dates.length && new Date(this.dates[0]),
                'end_date': this.dates.length && new Date(this.dates[1]),
                'weekly_review': weekly
            }

            axios.get('/api/energyEquipmentRevisionsExport', { 
                params: params, 
                responseType: 'arraybuffer' 
            })
            .then((response) => {
                const blob = new Blob([response.data], { type: 'application/xlsx' })
                // const objectUrl = window.URL.createObjectURL(blob)

                // IE doesn't allow using a blob object directly as link href
                // instead it is necessary to use msSaveOrOpenBlob
                if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                    window.navigator.msSaveOrOpenBlob(newBlob)
                    return
                }

                const data = window.URL.createObjectURL(blob)
                let link = document.createElement('a')
                link.href = data
                link.download = `Listado Rondas Técnicas - ${moment().format('YYYY-MM-DD hh:mm:ss')}.xlsx`
                link.click()
                // setTimeout(function () {
                //     // For Firefox it is necessary to delay revoking the ObjectURL
                //     window.URL.revokeObjectURL(data)
                // }, 100)
                
                this.isbuttonLoading = false
                this.$buefy.toast.open({
                    message: 'La planilla se ha descargado exitosamente.',
                    type: 'is-success',
                    duration: 5000
                })
            }).catch((error) => {
                console.log(error)
                this.isbuttonLoading = false
                this.$buefy.toast.open({
                    message: 'Ha ocurrido un error. Favor contactar al administrador',
                    type: 'is-danger',
                    duration: 5000
                })
            })
        },

        clearSearch() {
            this.searchText = ''
            this.getEnergyEquipmentRevisionsData()
        },

        clearDates() {
            this.dates=[]
            this.getEnergyEquipmentRevisionsData()
        },
    }
}
</script>
