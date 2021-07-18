<template>
    <div class="section" style="">
        <div class="container">

            <div class="columns">
                <div class="column tile is-parent" v-for="crm in crms" :key="crm.id" @click="currentCrm = currentCrm === crm.id ? 0 : crm.id">
                    <div class="tile is-child box has-text-centered p-1" :class="currentCrm === crm.id && 'is-bold is-link'">
                        <div v-text="crm.sigla_crm" class="is-size-4 has-text-weight-semibold"></div>
                        <div style="padding-top: 5px;">
                            <div class="is-size-7 has-text-weight-normal">
                                {{ crm.nombre_crm }}
                            </div>
                        </div>
                        <div class="">
                            <CrmStatus :crm=crm />
                        </div>
                    </div>
                </div>
            </div>

            <div class="box">
                <div class="columns">
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
                                    <div class="">
                                        <a class="is-size-6 has-text-weight-semibold" target="_blank" :href="'/pop/' + data.pop.id">
                                            {{ data.pop.nombre }}
                                        </a>
                                    </div>
                                </td>
                                <td class="">
                                    <div class="is-size-6 has-text-weight-normal">{{ data.date }}</div>
                                </td>
                                <td class="">
                                    <div class="is-size-6 has-text-weight-normal">
                                        <font-awesome-icon 
                                            icon="circle"
                                            size="2x" 
                                            :class="'has-text-' + status(data)"
                                            />
                                    </div>
                                </td>
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
        CrmStatus: () => import(/* webpackChunkName: "chunks/reports/maintenance/crmStatus"*/'./CrmStatus'),
        ModalDetail: () => import(/* webpackChunkName: "chunks/reports/mintenance/modalDetail"*/'./modals/ModalDetail'),
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
                revisions: Object,
                meta: {
                    current_page: 1,
                    total: 0,
                    per_page: 2,
                    from: 1,
                    to: 0,
                }
            },
            columns: [
                { 'name': 'POP', 'width': 25 }, 
                { 'name': 'Fecha' },
                { 'name': 'Status' },
                { 'name': 'Empresa' },
                { 'name': 'Reisor' },
                { }
            ],
            searchText: '',
            currentCrm: 0,
            isDetailModalActive: false,
            isbuttonLoading: false
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
        this.getFormResponses()
    },
    
    methods: {
        getCrms() {
            axios.get(`/api/crms`)
            .then((response) => {
                this.crms = response.data.crms
            })
        },

        status(revision) {
            let q = 0
            Object.keys(revision.statuses).forEach(element => {
                q = q + revision.statuses[element].status
            })
            return q == revision.statuses.length ? 'success' : 'warning'
        },

        getEnergyEquipmentRevisionsData() {
            var params = {
                'page': this.revisionsData.meta.current_page,
                'crm_id': this.currentCrm,
                'text': this.searchText != '' ?  this.searchText : 0,
                'start_date': this.dates.length && new Date(this.dates[0]),
                'end_date': this.dates.length && new Date(this.dates[1])
            }
            axios.get('/api/energyEquipmentRevisions', { params: params })
            .then((response) => {
                // console.log(response)
                this.revisionsData = response.data
                // console.log(this.revisionsData.length)
            })
        },

        getFormResponses() {
            let google_url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTfSUx2kGqO14cDWvAIWaRifz8mJVWjaGg1X3DInSQiprxCrkRRVvJmKm__HqEUe4mdIUgw-cnJR0Z8/pub?output=csv'
            let data = Array
            axios.get(google_url)
            .then((response) => {
                data = this.CSVToArray(response.data, ",")
                if (data.length - 1 != this.revisionsData.length) {
                    this.insertRevisions(data)
                }
            })
        },

        insertRevisions(data) {
            let params = data
            axios.post('/api/energyEquipmentRevisions', { params: params })
            .then(response => {
                // console.log(response.data)
            })
        },

        CSVToArray( strData, strDelimiter ){
            // Check to see if the delimiter is defined. If not,
            // then default to comma.
            strDelimiter = (strDelimiter || ",");

            // Create a regular expression to parse the CSV values.
            var objPattern = new RegExp(
                (
                    // Delimiters.
                    "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +

                    // Quoted fields.
                    "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +

                    // Standard fields.
                    "([^\"\\" + strDelimiter + "\\r\\n]*))"
                ),
                "gi"
                );
            // Create an array to hold our data. Give the array
            // a default empty first row.
            var arrData = [[]];
            // Create an array to hold our individual pattern
            // matching groups.
            var arrMatches = null;
            // Keep looping over the regular expression matches
            // until we can no longer find a match.
            while (arrMatches = objPattern.exec( strData )){
                // Get the delimiter that was found.
                var strMatchedDelimiter = arrMatches[ 1 ];

                // Check to see if the given delimiter has a length
                // (is not the start of string) and if it matches
                // field delimiter. If id does not, then we know
                // that this delimiter is a row delimiter.
                if (
                    strMatchedDelimiter.length &&
                    strMatchedDelimiter !== strDelimiter
                    ){
                    // Since we have reached a new row of data,
                    // add an empty row to our data array.
                    arrData.push( [] );
                }
                var strMatchedValue;
                // Now that we have our delimiter out of the way,
                // let's check to see which kind of value we
                // captured (quoted or unquoted).
                if (arrMatches[ 2 ]){
                    // We found a quoted value. When we capture
                    // this value, unescape any double quotes.
                    strMatchedValue = arrMatches[ 2 ].replace(
                        new RegExp( "\"\"", "g" ),
                        "\""
                        );
                } else {
                    // We found a non-quoted value.
                    strMatchedValue = arrMatches[ 3 ];
                }
                // Now that we have our value string, let's add
                // it to the data array.
                arrData[ arrData.length - 1 ].push( strMatchedValue );
            }
            // Return the parsed data.
            return( arrData );
        },

        downloadRevisions() {
            this.isbuttonLoading = true

            var params = {
                'crm_id': this.currentCrm,
                'text': this.searchText != '' ?  this.searchText : 0,
                'start_date': this.dates.length && new Date(this.dates[0]),
                'end_date': this.dates.length && new Date(this.dates[1])
            }

            axios.get('/api/energyEquipmentRevisionsExport', { 
                params: params, 
                responseType: 'arraybuffer' 
            })
            .then((response) => {
                console.log(response.data)
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
