<template>
    <div class="modal-card">
        <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
                <p class="modal-card-title">Ingresar nuevo empalme</p>
            </header>

            <section class="modal-card-body">
                <div class="columns is-multiline">
                    <div class="column is-6">
                        <b-field label="Sitio">
                            <b-autocomplete
                                autofocus
                                :data="pops"
                                icon-pack="fas"
                                icon="search"
                                :placeholder="!selected ? 'Nemónico del Sitio o nombre del POP...' : selected.nombre"
                                :keep-first="true"
                                :open-on-focus="text ? true : false"
                                :loading="isFetching"
                                :check-infinite-scroll="true"
                                @typing="getAsyncData"
                                @select="option => selected = option"
                                @infinite-scroll="getMoreAsyncData">

                                <template slot-scope="props">
                                    <div class="field">
                                        <div class="is-size-6 has-text-weight-semibold">
                                            {{ props.option ? props.option.nombre : '' }}
                                        </div>
                                        <div class="is-size-7 has-text-weight-normal">
                                            {{ props.option ? props.option.comuna.nombre_comuna : '' }} - {{ props.option ? 'Zona ' + props.option.zona.nombre_zona : '' }} - {{ props.option ? 'CRM ' + props.option.zona.crm.nombre_crm : '' }}
                                        </div>
                                    </div>
                                </template>
                                <template slot="footer">
                                    <span v-show="page > totalPages" class="has-text-grey"> No hay mas PoPs que mostrar. </span>
                                </template>
                            </b-autocomplete>
                        </b-field>
                    </div>

                    <div class="column is-6">
                        <b-field label="Compañía eléctrica">
                            <b-select placeholder="Seleccione Compañía Eléctrica..." v-model="electric_company_id" expanded>
                                <option
                                    v-for="option in electricCompanies"
                                    :value="option.id"
                                    :key="option.id">
                                    {{ option.name }}
                                </option>
                            </b-select>
                        </b-field>
                    </div>

                    <div class="column is-4">
                        <b-field label="Número de cliente">
                            <b-input
                                v-model="client_number"
                                placeholder="Número de Cliente">
                            </b-input>
                        </b-field>
                    </div>
                    <div class="column is-4">
                        <b-field label="Número de medidor">
                            <b-input
                                v-model="junction_number"
                                placeholder="Número de Medidor">
                            </b-input>
                        </b-field>
                    </div>

                    <div class="column is-4">
                        <b-field label="Tipo de tarifa">
                            <b-input
                                v-model="rate_type"
                                placeholder="Tipo de tarifa">
                            </b-input>
                        </b-field>
                    </div>

                    <div class="column is-4">
                        <b-field label="Tipo de empalme">
                            <b-select placeholder="Seleccione tipo de empalme..." v-model="junction_type_id" expanded>
                                <option
                                    v-for="option in junctionTypes"
                                    :value="option.id"
                                    :key="option.id">
                                    {{ option.type }}
                                </option>
                            </b-select>
                        </b-field>
                    </div>

                    <div class="column is-4">
                        <b-field label="Tipo de conexión">
                            <b-select placeholder="Seleccione tipo de conexión..." v-model="junction_connection_id" expanded>
                                <option
                                    v-for="option in junctionConnections"
                                    :value="option.id"
                                    :key="option.id">
                                    {{ option.connection }}
                                </option>
                            </b-select>
                        </b-field>
                    </div>
                </div>

            </section>

            <footer class="modal-card-foot">
                <button class="button" type="button" @click="$parent.close()">Cerrar</button>
                <button class="button is-link" :disabled="!toSave" @click="createJunction()">Guardar</button>
            </footer>
        </div>
    </div>
</template>

<script>    
    import { library } from "@fortawesome/fontawesome-svg-core";
    import { faTrashAlt as farTrashAlt } from '@fortawesome/free-regular-svg-icons'
    library.add(farTrashAlt);
    import debounce from 'lodash/debounce'
    export default {
        props : [
        ],

        data() {
            return {
                pops: [],
                junctionTypes: Object,
                junctionConnections: Object,
                electricCompanies: Array,
                isFetching: false,
                text: '',
                page: 1,
                totalPages: 1,

                selected: null,
                electric_company_id: null,
                junction_number: null,
                client_number: null,
                junction_type_id: null,
                junction_connection_id: null,
                rate_type: null,
            }
        },

        mounted() {
            this.getAsyncData()
            this.getElectricCompanies()
            this.getJunctionTypes()
            this.getJunctionConnections()
        },

        computed: {
            toSave() {
                return !this.selected || !this.electric_company_id || !this.client_number ? false : true;
            },
        },

        methods: {
            // You have to install and import debounce to use it,
            // it's not mandatory though.
            getAsyncData: debounce(function (name) {
                // String update
                if (this.text !== name) {
                    this.text = name
                    this.pops = []
                    this.page = 1
                    this.totalPages = 1
                }
                // String cleared
                if (!name) {
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
            }, 350),
            getMoreAsyncData: debounce(function () {
                this.getAsyncData(this.text)
            }, 50),

            getElectricCompanies() {
                axios.get('/api/electricCompanies')
                .then(response => {
                    this.electricCompanies = response.data.electricCompanies
                })
            },

            getJunctionTypes() {
                axios.get('/api/junctionTypes')
                .then(response => {
                    this.junctionTypes = response.data.junctionTypes
                })
            },

            getJunctionConnections() {
                axios.get('/api/junctionConnections')
                .then(response => {
                    console.log(response.data)
                    this.junctionConnections = response.data.junctionConnections
                })
            },

            createJunction() {
                if (this.toSave) {
                    let params = {
                        'pop_id': this.selected.id,
                        'electric_company_id': this.electric_company_id,
                        'junction_number': this.junction_number,
                        'client_number': this.client_number,
                        'junction_type_id': this.junction_type_id,
                        'junction_connection_id': this.junction_connection_id,
                        'rate_type': this.rate_type
                    }
                    axios.post(`/api/junctions`, params)
                    .then(response => {
                        console.log(response)
                        // this.$eventBus.$emit('new-junction')
                        this.$emit('new-junction');
                        this.$parent.close()
                    })
                }
            }
        }
    }
</script>
