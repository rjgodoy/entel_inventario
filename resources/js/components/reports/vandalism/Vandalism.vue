<template>
	<section class="">
        <div class="section">
            <div class="">

                <div class="field columns">

                    <div class="column">
                        <div class="box">

                            <div class="field">
                                <div class="columns">
                                    <div class="column is-1 has-text-left" v-if="canCreate">
                                        <b-button class="is-link" @click="isModalCreateVandalismRecordActive = true">
                                            <font-awesome-icon :icon="['fas', 'plus']" />
                                        </b-button>
                                    </div>

                                    <div class="column">
                                        <p class="control has-icons-left has-icons-right">
                                            <input 
                                                class="input is-rounded"  
                                                @keyup="getVandalismRecords" 
                                                @input="vandalismRecords.meta.current_page = 1"
                                                v-model="searchText" 
                                                type="text" 
                                                arial-label="Buscar" 
                                                placeholder="Buscar..." 
                                                autofocus
                                            >
                                            <span class="icon is-small is-left">
                                                <font-awesome-icon icon="search"/>
                                            </span>
                                            <span class="icon is-small is-right">
                                                <button class="delete" @click="clearSearch"></button>
                                            </span>
                                        </p>
                                    </div>

                                    <div class="column is-1 has-text-right">
                                        <b-button class="is-success" :loading="isbuttonLoading" 
                                            @click="downloadRecords">
                                            <font-awesome-icon :icon="['fas', 'download']" />
                                        </b-button>
                                    </div>
                                </div>
                            </div>

                            <table class="table is-fullwidth is-striped is-hoverable is-bordered">
                                <thead>
                                    <tr class="">
                                        <th class="is-size-6 has-text-weight-semibold"><abbr title="Fecha">Fecha</abbr></th>
                                        <!-- <th class="is-size-6 has-text-weight-semibold"><abbr title="Región">Región</abbr></th> -->
                                        <th class="is-size-6 has-text-weight-semibold"><abbr title="Zona">Zona</abbr></th>
                                        <th class="is-size-6 has-text-weight-semibold"><abbr title="Región">Comuna</abbr></th>
                                        <th class="is-size-6 has-text-weight-semibold"><abbr title="Dirección">Dirección</abbr></th>
                                        <th class="is-size-6 has-text-weight-semibold"><abbr title="Infraestructura">Infraestructura</abbr></th>
                                        <th class="is-size-6 has-text-weight-semibold" width="20%"><abbr title="Descripción">Descripción</abbr></th>
                                        <th class="is-size-6 has-text-weight-semibold" width="20%"><abbr title="Impacto">Impacto</abbr></th>
                                    </tr>
                                </thead>
                                
                                <tbody>
                                    <VandalismTable class="is-size-6" v-for="record in vandalismRecords.records" :key="record.id" :record="record" :canUpdate="canUpdate" :canDelete="canDelete" />
                                </tbody>
                            </table>


                            <div class="level">
                                <nav class="level-left pagination" role="navigation" aria-label="pagination">
                                    <vue-pagination  
                                        :pagination="vandalismRecords.meta"
                                        @paginate="getVandalismRecords()"
                                        :offset="4">
                                    </vue-pagination>
                                </nav>
                                <div class="level-right has-text-right">
                                    <!-- <div class="is-size-7 " :class="secondaryText">Fecha ultima actualización: {{ last_updated.formatted }}</div> -->
                                </div>
                            </div>

                            <b-loading :is-full-page="false" :active.sync="isLoading" :can-cancel="true"></b-loading>
                               
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <b-modal :active.sync="isModalCreateVandalismRecordActive"
            has-modal-card
            trap-focus
            aria-role="dialog"
            aria-modal>
            <ModalCreateVandalismRecord
                @new-record="getVandalismRecords" :canCreate="canCreate"
                />
        </b-modal>

    </section>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faBars, faCircle, faDownload, faAngleLeft, faAngleRight, faCalendarAlt, faPlus, faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
library.add(faSearch, faBars, faCircle, faDownload, faAngleLeft, faAngleRight, faCalendarAlt, faPlus, faTrashAlt, faEdit);
var moment = require('moment')

export default {
    components: {
    	VuePagination: () => import(/* webpackChunkName: "chunks/helpers/vuePagination"*/'../../helpers/VuePagination'),
    	VandalismTable: () => import(/* webpackChunkName: "chunks/reports/vandalism/vandalismTable"*/'./VandalismTable'),
    	ModalCreateVandalismRecord: () => import(/* webpackChunkName: "chunks/reports/vandalism/modals/modalCreateVandalismRecord"*/'./modals/ModalCreateVandalismRecord'),
    },

    props : [ 'user' ],

    data() {
        return {
        	records: Object,

        	vandalismRecords: {
        		can: Array,
        		records: Object,
        		meta: {
        			current_page: 1,
        			total: 0,
        			per_page: 2,
        			from: 1,
        			to: 0,
        		}
        	},

        	searchText: '',

        	isLoading: false,
        	isbuttonLoading: false,
        	isModalCreateVandalismRecordActive: false,

        }
    },

    computed: {
    	canUpdate() {
    		return this.vandalismRecords.can && this.vandalismRecords.can.update;
    	},

    	canCreate() {
    		return this.vandalismRecords.can && this.vandalismRecords.can.create;
    	},

    	canDelete() {
    		return this.vandalismRecords.can && this.vandalismRecords.can.delete;
    	}
    },

    watch: {
    },

    created() {
    	this.$eventBus.$on('vandalism-records-updated', this.getVandalismRecords)
    },

    mounted() {
    	this.getVandalismRecords()
    },
    
    methods: {
    	getVandalismRecords() {
    		this.isLoading = true

    		let params = {
    			'page': this.vandalismRecords.meta.current_page,
    			'text': this.searchText
    		}

    		axios.get('/api/vandalismRecords', { params: params })
                .then((response) => {
                    this.vandalismRecords = response.data
                    this.isLoading = false
                })
    	},

    	downloadRecords() {
    		this.isbuttonLoading = true

    		// var params = {
    		// 	'site_id': this.site_id,
    		// 	'comuna_id': this.comuna_id
    		// }

    		axios.get('/api/vandalismRecordsExport', { 
    			// params: params, 
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
                    link.download = `Registro de Vandalismos - ${moment().format('YYYY-MM-DD hh:mm:ss')}.xlsx`
                    link.click()
                    // setTimeout(function () {
                    //     // For Firefox it is necessary to delay revoking the ObjectURL
                    //     window.URL.revokeObjectURL(data)
                    // }, 100)
                    
                    this.isbuttonLoading = false
                    this.$buefy.toast.open({
                    	message: 'La planilla se ha descargado exitosamente.',
                    	type: 'is-success',
                    	duration: 3000
                    })
                }).catch((error) => {
                	console.log(error)
                	this.isbuttonLoading = false
                	this.$buefy.toast.open({
                		message: 'Ha ocurrido un error. Favor contactar al administrador',
                		type: 'is-danger',
                		duration: 3000
                	})
                })
            },

            clearSearch() {
            	this.searchText = ''
            	this.getVandalismRecords()
            },
    },

    beforeDestroy() {
    	this.$eventBus.$off('vandalism-records-updated')
    },
}
</script>
