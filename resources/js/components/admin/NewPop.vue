<template>
    <div>
        <section class="section tile is-ancestor" style="padding-bottom: 0px">
            <div class="columns tile is-parent">
                <div class="tile is-parent column">
                    <div class="tile is-child box">
                        <div class="field is-size-5 has-text-weight-semibold">Datos del PoP</div>

                        <div class="block has-text-centered" style="padding-top: 12px;">
                            <button class="button" @click="isNewPop(true)" :class="newPop && 'is-link'">Nuevo PoP</button>
                            <button class="button" @click="isNewPop(false)" :class="!newPop && 'is-link' ">PoP Existente</button>
                        </div>

                        <div v-if="!newPop">
                            <div class="block has-text-centered">
                                <b-autocomplete
                                    autofocus
                                    :data="pops"
                                    icon-pack="fas"
                                    icon="search"
                                    placeholder="Buscar el PoP por nemónico, nombre o direccion del sitio..."
                                    :keep-first="true"
                                    :open-on-focus="text ? true : true"
                                    :loading="isFetching"
                                    :check-infinite-scroll="true"
                                    :custom-formatter="searchFormat"
                                    clearable
                                    @typing="getAsyncData"
                                    @select="option => selectedPop = option"
                                    @infinite-scroll="getMoreAsyncData">


                                    <template slot-scope="props">
                                        <div class="field" style="padding: 10px;">
                                            <div class="is-size-6 has-text-weight-semibold">
                                                {{ props.option ? props.option.nombre : '' }}
                                            </div>
                                            <div class="is-size-7 has-text-weight-normal">
                                                {{ props.option ? props.option.comuna.nombre_comuna : '' }}
                                            </div>
                                            <div class="is-size-7 has-text-weight-normal">
                                                {{ props.option ? 'Zona ' + props.option.zona.nombre_zona : '' }} - {{ props.option ? 'CRM ' + props.option.zona.crm.nombre_crm : '' }}
                                            </div>
                                        </div>
                                    </template>
                                    <template slot="footer">
                                        <span v-show="page > totalPages" class="has-text-grey"> No hay mas PoPs que mostrar. </span>
                                    </template>
                                </b-autocomplete>
                            </div>

                            <div class="box" v-if="selectedPop">
                                <div class="field  has-text-centered">
                                    <div class="is-size-6 has-text-weight-semibold">
                                        {{ selectedPop ? selectedPop.nombre : '' }}
                                    </div>
                                    <div class="is-size-7 has-text-weight-normal">
                                        {{ selectedPop ? selectedPop.comuna.nombre_comuna : '' }}
                                    </div>
                                    <div class="is-size-7 has-text-weight-normal">
                                        {{ selectedPop ? 'Zona ' + selectedPop.zona.nombre_zona : '' }} - {{ selectedPop ? 'CRM ' + selectedPop.zona.crm.nombre_crm : '' }}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div v-if="newPop">

                            <!-- <b-field>
                                <b-input placeholder="Código Planificación" type="text" v-model="pop_e_id"></b-input>
                            </b-field> -->

                            <b-field>
                                <b-input placeholder="Nombre" type="text" v-model="nombre" required></b-input>
                            </b-field>

                            <b-field>
                                <b-input placeholder="Dirección" type="text" v-model="direccion" required></b-input>
                            </b-field>

                            <b-field>
                                <b-autocomplete
                                    v-model="name"
                                    placeholder="Comuna"
                                    :keep-first="false"
                                    :open-on-focus="false"
                                    :data="filteredComunasArray"
                                    :use-html5-validation="true"
                                    field="nombre_comuna"
                                    clearable
                                    required
                                    @select="option => selectedComuna = option">
                                    <template slot="empty">No results found</template>
                                </b-autocomplete>
                            </b-field>

                            <b-field>
                                <b-input placeholder="Latitud" type="text" v-model="lat" required></b-input>
                            </b-field>

                            <b-field>
                                <b-input placeholder="Longitude" type="text" v-model="lon" required></b-input>
                            </b-field>

                            <b-field>
                                <b-autocomplete
                                    v-model="popType"
                                    placeholder="Tipo PoP"
                                    keep-first
                                    open-on-focus
                                    :data="filteredPopTypesArray"
                                    :use-html5-validation="false"
                                    field="type"
                                    required
                                    @select="option => selectedPopType = option">
                                    <template slot="empty">No results found</template>
                                </b-autocomplete>
                            </b-field>

                            <b-field>
                                <b-autocomplete
                                    v-model="netType"
                                    placeholder="Tipo Red"
                                    keep-first
                                    open-on-focus
                                    :data="filteredNetTypesArray"
                                    :use-html5-validation="false"
                                    field="type"
                                    required
                                    @select="option => selectedNetType = option">
                                    <template slot="empty">No results found</template>
                                </b-autocomplete>
                            </b-field>
                        </div> 
                    </div>
                </div>

                <div class="tile is-parent column">
                    <div class="tile is-child box">
                        <div class="field is-size-5 has-text-weight-semibold">Datos del Sitio</div>

                        <div class="block has-text-centered" style="padding-top: 12px;">
                            <b-tabs type="is-toggle" expanded v-model="site_type_tab_id">
                                <b-tab-item 
                                    v-for="site_type in siteTypes" 
                                    :key="site_type.id" 
                                    :label="site_type.label">
                                </b-tab-item>
                            </b-tabs>
                        </div>

                        <div>
                            <b-field>
                                <b-input placeholder="Nemónico" type="text" v-model="nem" required></b-input>
                            </b-field>

                            <b-field>
                                <b-input placeholder="Nombre Sitio" type="text" v-model="siteName" required></b-input>
                            </b-field>

                            <b-field>
                                <b-autocomplete
                                    v-model="classificationType"
                                    placeholder="Categoría"
                                    keep-first
                                    open-on-focus
                                    :data="filteredClassificationsArray"
                                    :use-html5-validation="false"
                                    field="classification_type"
                                    required
                                    @select="option => selectedClassificationType = option">
                                    <template slot="empty">No results found</template>
                                </b-autocomplete>

                                <b-autocomplete
                                    v-model="attentionPriorityType"
                                    placeholder="Prioridad atención"
                                    keep-first
                                    open-on-focus
                                    :data="filteredAttentionPrioritiesArray"
                                    :use-html5-validation="false"
                                    field="attention_priority_type"
                                    required
                                    @select="option => selectedAttentionPriorityType = option">
                                    <template slot="empty">No results found</template>
                                </b-autocomplete>
                            </b-field>
                        </div>
                    </div>
                </div>

                <div class="tile is-parent column">
                    <div class="tile is-child box">
                        <div class="field is-size-5 has-text-weight-semibold">Datos de servicios</div>

                        <div class="block" style="padding-top: 12px;">
                            <div class="columns">
                                <div class="column">
                                    <b-checkbox 
                                        v-model="pe_3g"
                                        type="is-link">
                                        <div class="is-size-6">PE 3G</div>
                                    </b-checkbox>
                                </div>
                                <div class="column">
                                    <b-checkbox 
                                        v-model="mpls"
                                        type="is-link">
                                        <div class="is-size-6">MPLS</div>
                                    </b-checkbox>
                                </div>
                            </div>
                            <div class="columns">
                                <div class="column">
                                    <b-checkbox 
                                        v-model="olt"
                                        type="is-link">
                                        <div class="is-size-6">OLT</div>
                                    </b-checkbox>
                                </div>
                                <div class="column">
                                    <b-checkbox 
                                        v-model="olt_3play"
                                        type="is-link">
                                        <div class="is-size-6">OLT 3Play</div>
                                    </b-checkbox>
                                </div>
                            </div>
                            <div class="columns">
                                <div class="column">
                                    <b-checkbox 
                                        v-model="red_minima_n1"
                                        type="is-link">
                                        <div class="is-size-6">Red Mínima N1</div>
                                    </b-checkbox>
                                </div>
                                <div class="column">
                                    <b-checkbox 
                                        v-model="red_minima_n2"
                                        type="is-link">
                                        <div class="is-size-6">Red Mínima N2</div>
                                    </b-checkbox>
                                </div>
                            </div>
                            <div class="columns">
                                <div class="column">
                                    <b-checkbox 
                                        v-model="core"
                                        type="is-link">
                                        <div class="is-size-6">Core</div>
                                    </b-checkbox>
                                </div>
                                <div class="column">
                                    <b-checkbox 
                                        v-model="vip"
                                        type="is-link">
                                        <div class="is-size-6">VIP</div>
                                    </b-checkbox>
                                </div>
                            </div>
                            <div class="columns">
                                <div class="column">
                                    <b-checkbox 
                                        v-model="localidad_obligatoria"
                                        type="is-link">
                                        <div class="is-size-6">Localidad Obligatoria</div>
                                    </b-checkbox>
                                </div>
                                <div class="column">
                                    <b-checkbox 
                                        v-model="ranco"
                                        type="is-link">
                                        <div class="is-size-6">Ranco</div>
                                    </b-checkbox>
                                </div>
                            </div>
                            <div class="columns">
                                <div class="column">
                                    <b-checkbox 
                                        v-model="energy_system"
                                        type="is-link">
                                        <div class="is-size-6">Offgrid</div>
                                    </b-checkbox>
                                </div>
                            
                                <div class="column">
                                    <b-checkbox 
                                        v-model="solar"
                                        type="is-link">
                                        <div class="is-size-6">Solar</div>
                                    </b-checkbox>
                                </div>
                            </div>
                            <div class="columns">
                                <div class="column">
                                    <b-checkbox 
                                        v-model="eolica"
                                        type="is-link">
                                        <div class="is-size-6">Eólica</div>
                                    </b-checkbox>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        <div class="section columns" style="padding-top: 0">
            <div class="column"></div>
            <div class="column has-text-centered">
                <button class="button is-link" @click="postNewPop" :disabled="isDisabled">Crear nuevo Sitio</button>
            </div>
            <div class="column"></div>
        </div>
    </div>
</template>

<script>
    import { library } from "@fortawesome/fontawesome-svg-core";
    import { faTimesCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
    library.add(faTimesCircle, faSearch);
    import debounce from 'lodash/debounce'
    export default {
        props : [
            'user',
        ],

        mounted() {
            this.getComunas()
            this.getPopTypes()
            this.getNetTypes()
            this.getClassificationTypes()
            this.getAttentionPriorityTypes()
        },

        data() {
            return {
                // Datos pop
                nombre: '',
                // pop_e_id: '',
                direccion: '',
                lat: '',
                lon: '',

                // Datos sitio
                site_type: 0,
                nem: '',
                siteName: '',

                site_type_tab_id: 0,

                pe_3g: false,
                mpls: false,
                olt: false,
                olt_3play: false,
                red_minima_n1: false,
                red_minima_n2: false,
                core: false,
                vip: false,
                localidad_obligatoria: false,
                ranco: false,
                energy_system: false,
                solar: false,
                eolica: false,

                name: '',
                popType: '',
                netType: '',
                classificationType: '',
                attentionPriorityType: '',

                comunas: [],
                popTypes: [],
                netTypes: [],
                classificationTypes: [],
                attentionPriorityTypes: [],

                pops: [],
                selectedPop: null,
                selectedComuna: null,
                selectedPopType: null,
                selectedNetType: null,
                selectedClassificationType: null,
                selectedAttentionPriorityType: null,

                newPop: true,
                isFetching: false,
                text: '',
                page: 1,
                totalPages: 1,

                siteTypes: [
                    {
                        id: 1,
                        label: 'Fijo',
                    },
                    {
                        id: 3,
                        label: 'Switch',
                    },
                    {
                        id: 4,
                        label: 'Phone',
                    },
                    {
                        id: 5,
                        label: 'Repetidor',
                    }
                ]
                
            }
        },

        watch: {
            selectedPop(val) {
                if (val) {
                    // this.pop_e_id = val.pop_e_id
                    this.nombre = val.nombre
                    this.direccion = val.direccion
                    this.selectedComuna = this.comunas.forEach(element => element.id == val.comuna_id && element)
                    this.lat = val.latitude
                    this.lon = val.longitude,
                    this.selectedPopType = this.popTypes.forEach(element => element.id == val.pop_type_id && element)
                    this.selectedNetType = this.netTypes.forEach(element => element.id == val.net_type_id && element)
                } else {
                    // this.pop_e_id = ''
                    this.nombre = ''
                    this.direccion = ''
                    this.selectedComuna = null
                    this.lat = ''
                    this.lon = '',
                    this.selectedPopType = null
                    this.selectedNetType = null
                }
            }
        },

        computed: {
            isDisabled() {
                if (this.nombre != '' && this.direccion != '' && this.lat != '' && this.lon != '' && this.nem != '' && this.siteName != '' && this.classificationType && this.attentionPriorityType && this.selectedComuna) {
                    return false
                }
                return true
            },

            site_type_id() {
                return this.site_type_tab_id == 0 ? 1 : (this.site_type_tab_id == 1 ? 3 : (this.site_type_tab_id == 2 ? 4 : 5))
            },

            filteredComunasArray() {
                return this.comunas.filter((option) => {
                    return option.nombre_comuna ? option.nombre_comuna
                        .toString()
                        .toLowerCase()
                        .indexOf(this.name.toLowerCase()) >= 0 : ''
                })
            },

            filteredPopTypesArray() {
                return this.popTypes.filter((option) => {
                    return option.type ? option.type
                        .toString()
                        .toLowerCase()
                        .indexOf(this.popType.toLowerCase()) >= 0 : ''
                })
            },

            filteredNetTypesArray() {
                return this.netTypes.filter((option) => {
                    return option.type ? option.type
                        .toString()
                        .toLowerCase()
                        .indexOf(this.netType.toLowerCase()) >= 0 : ''
                })
            },

            filteredClassificationsArray() {
                return this.classificationTypes.filter((option) => {
                    return option.classification_type ? option.classification_type
                        .toString()
                        .toLowerCase()
                        .indexOf(this.classificationType.toLowerCase()) >= 0 : ''
                })
            },

            filteredAttentionPrioritiesArray() {
                return this.attentionPriorityTypes.filter((option) => {
                    return option.attention_priority_type ? option.attention_priority_type
                        .toString()
                        .toLowerCase()
                        .indexOf(this.attentionPriorityType.toLowerCase()) >= 0 : ''
                })
            },

            latitude() {
                if (this.lat.includes(',')) {
                    var split = this.lat.split(',')
                    return parseFloat(split[0] + '.' + split[1])
                } else {
                    return parseFloat(this.lat)
                }
                return
            },

            longitude() {
                if (this.lon.includes(',')) {
                    var split = this.lon.split(',')
                    return parseFloat(split[0] + '.' + split[1])
                } else {
                    return parseFloat(this.lon)
                }
                return
            },

            comuna_id() {
                return this.selectedComuna && this.selectedComuna.id
            },

            pop_type_id() {
                return this.selectedPopType && this.selectedPopType.id
            },

            net_type_id() {
                return this.selectedNetType && this.selectedNetType.id
            },

            nem_site() {
                return this.nem.toUpperCase()
            },

            classification_type_id() {
                return this.selectedClassificationType && this.selectedClassificationType.id
            },

            attention_priority_type_id() {
                return this.selectedAttentionPriorityType && this.selectedAttentionPriorityType.id
            },

        },

        methods: {
            siteType(val) {
                // console.log(val)
            },

            isNewPop(bool) {
                this.newPop = bool
                this.selectedPop = null
            },

            confirm(val) {

            },

            getComunas() {
                axios.get(`/api/comunas`)
                .then(response => {
                    this.comunas = response.data.data
                })
            },

            getPopTypes() {
                axios.get(`/api/popTypes`)
                .then(response => {
                    this.popTypes = response.data.popTypes
                })
            },

            getNetTypes() {
                axios.get(`/api/netTypes`)
                .then(response => {
                    this.netTypes = response.data.netTypes
                })
            },

            getClassificationTypes() {
                axios.get(`/api/classificationTypes`)
                .then(response => {
                    this.classificationTypes = response.data
                })
            },

            getAttentionPriorityTypes() {
                axios.get(`/api/attentionPriorityTypes`)
                .then(response => {
                    this.attentionPriorityTypes = response.data
                })
            },

            postNewPop() {
                this.isLoading = 1
                let params = {
                    // 'pop_e_id': this.pop_e_id.toUpperCase(),
                    'nombre': this.nombre,
                    'direccion': this.direccion,
                    'comuna_id': this.comuna_id,
                    'latitude': this.latitude,
                    'longitude': this.longitude,
                    'pop_type_id': this.pop_type_id,
                    'net_type_id': this.net_type_id,
                    'site_type_id': this.site_type_id,
                    'nem_site': this.nem_site.toUpperCase(),
                    'site_name': this.siteName,
                    'classification_type_id': this.classification_type_id,
                    'attention_priority_type_id': this.attention_priority_type_id,

                    'pe_3g': +this.pe_3g,
                    'mpls': +this.mpls,
                    'olt': +this.olt,
                    'olt_3play': +this.olt_3play,
                    'red_minima_n1': +this.red_minima_n1,
                    'red_minima_n2': +this.red_minima_n2,
                    'core': +this.core,
                    'vip': +this.vip,
                    'localidad_obligatoria': +this.localidad_obligatoria,
                    'ranco': +this.ranco,
                    'energy_system': +this.energy_system,
                    'solar': +this.solar,
                    'eolica': +this.eolica,
                }
                axios.post('/api/pop', params)
                .then(response => {
                    // console.log(response.data)
                    if (response.data === 'success') {
                        this.$buefy.toast.open({
                            message: 'El nuevo POP se ha ingresado correctamente.',
                            type: 'is-success',
                            duration: 3000
                        })
                        this.isLoading = 0
                        this.clearInputs()
                    }
                })
            },

            clearInputs() {
                this.nombre = ''
                this.direccion = ''
                this.lat = ''
                this.lon = ''
                this.site_type = 0
                this.nem = ''
                this.siteName = ''
                this.site_type_tab_id = 0
                this.pe_3g = false
                this.mpls = false
                this.olt = false
                this.olt_3play = false
                this.red_minima_n1 = false
                this.red_minima_n2 = false
                this.core = false
                this.vip = false
                this.localidad_obligatoria = false
                this.ranco = false
                this.energy_system = false
                this.solar = false
                this.eolica = false
                this.name = ''
                this.popType = ''
                this.netType = ''
                this.classificationType = ''
                this.attentionPriorityType = ''

                this.selectedPop = null
                this.selectedComuna = null
                this.selectedPopType = null
                this.selectedNetType = null
                this.selectedClassificationType = null
                this.selectedAttentionPriorityType = null

            },

            getAsyncData: debounce(function (name) {
                // String update
                if (this.text !== name) {
                    this.text = name
                    this.pops = []
                    this.page = 1
                    this.totalPages = 1
                }
                // String cleared
                if (!name.length) {
                    this.pops = []
                    this.page = 1
                    this.totalPages = 1
                    return
                }
                // Reached last page
                if (this.page > this.totalPages) {
                    return
                }
                this.isFetching = true
                axios.get(`/api/allPops?text=${name}&page=${this.page}`)
                    .then( response  => {
                        // console.log(response.data.meta.last_page)
                        response.data.pops.forEach((item) => this.pops.push(item))
                        this.page++
                        this.totalPages = response.data.meta.last_page
                    })
                    .catch((error) => {
                        throw error
                    })
                    .finally(() => {
                        this.isFetching = false
                    })
            }, 50),
            getMoreAsyncData: debounce(function () {
                this.getAsyncData(this.text)
            }, 10),

            searchFormat(pop) {
                return this.selectedPop.nombre
            },
            
        }
    }
</script>
