<template>
    <section class="section is-marginless" :class="bodyBackground">
        <div class="container">

            <!-- <section class="field" v-if="message">
                <div class="notification is-primary alert is-dismissable" role="alert">
                    <button aria-hidden="true" data-dismiss="alert" class="delete" type="button"></button>
                    {{ message }}
                </div>
            </section> -->

            <div class="box" :class="boxBackground">
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input 
                            class="input is-rounded" 
                            :class="bodyBackground + ' ' + primaryText" 
                            @keyup="search" 
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
                <table class="table is-fullwidth" :class="boxBackground">
                    <thead>
                        <tr>
                            <th class="is-size-7 has-text-weight-semibold" :class="secondaryText"><abbr title="id"># Contrato</abbr></th>
                            <th class="is-size-7 has-text-weight-semibold" :class="secondaryText"><abbr title="id">POP</abbr></th>
                            <th class="is-size-7 has-text-weight-semibold" :class="secondaryText"><abbr title="id">Operador</abbr></th>
                            <th class="is-size-7 has-text-weight-semibold" :class="secondaryText"><abbr title="id">Fechas Contratos</abbr></th>
                            <th class="is-size-7 has-text-weight-semibold" :class="secondaryText"><abbr title="id">Propietario</abbr></th>
                            <th class="is-size-7 has-text-weight-semibold" :class="secondaryText"><abbr title="id">Rol Propiedad</abbr></th>
                            <th class="is-size-7 has-text-weight-semibold has-text-centered"></th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr class="is-size-7 has-text-weight-light" v-for="data in comsiteData.data">
                            <td class="has-text-weight-light" :class="primaryText">{{ data.id }}</td>
                            <td class="">
                                <div class="is-size-7 has-text-weight-normal" :class="primaryText">
                                    {{ data.pop ? data.pop.nombre : '' }}
                                </div>
                                <div class="is-size-7 has-text-weight-normal" :class="secondaryText">
                                    {{ data.pop ? data.pop.comuna.nombre : '' }}
                                </div>
                                <div class="is-size-7 has-text-weight-normal" :class="secondaryText">
                                    {{ data.pop ? 'Zona: ' + data.pop.comuna.zona.nombre : '' }} - {{ data.pop ? 'CRM: ' + data.pop.comuna.zona.crm.nombre : '' }}
                                </div>
                            </td>
                            <td class="has-text-weight-light has-text-centered" :class="primaryText">{{ data.operador }}</td>

                            <td class="">
                                <div class="has-text-weight-light" :class="primaryText">
                                    Inicio: {{ data.started_at }}
                                </div>
                                <div class="has-text-weight-light" :class="primaryText">
                                    Término: {{ data.ended_at }}
                                </div>
                            </td>
                            <td class="">
                                <div class="has-text-weight-light" :class="primaryText">
                                    {{ data.propietario }}
                                </div>
                                <div class="has-text-weight-light" :class="secondaryText">
                                    {{ data.fono_propietario || data.celular_propietario ? 'Contacto: ' : '' }}
                                    {{ data.fono_propietario && data.celular_propietario ? data.fono_propietario + ' - ' + data.celular_propietario : (data.fono_propietario ? data.fono_propietario : data.celular_propietario) }}
                                </div>
                            </td>
                            <td class="has-text-weight-light has-text-centered" :class="primaryText">{{ data.rol_propiedad }}</td>
                            <td class="has-text-weight-light has-text-centered" :class="primaryText">
                                <button href="/comsites/download" type="button" class="button is-small is-link tooltip" data-tooltip="Tooltip Text">
                                    <font-awesome-icon icon="bars"/>
                                </button>
                            </td>
                        </tr>    
                    </tbody>
                </table>
                <nav class="pagination" role="navigation" aria-label="pagination">
                    <vue-pagination  
                        :pagination="comsiteData"
                        @paginate="search()"
                        :offset="4"
                        :primaryText="primaryText">
                    </vue-pagination>
                </nav>
                <div class="field">
                    <div class="field has-text-right">
                        <!-- <b-field> -->
                            <b-button 
                                :loading="buttonLoading ? true : false"
                                type="is-link"
                                size="is-small"
                                @click="syncComsite">
                                <font-awesome-icon icon="sync-alt"/>
                                &nbsp;
                                Sincronizar
                            </b-button>
                        <!-- </b-field> -->
                    </div>
                    <div class="is-size-7 has-text-right" :class="secondaryText">Fecha ultima actualización: {{ last_updated }}</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import VuePagination from './VuePagination.vue';
    export default {
        components: {
            'vue-pagination': VuePagination
        },
        props : [
        ],
        data() {
            return {
                darkMode: 0,
                bodyBackground: '',
                boxBackground: '',
                primaryText: '',
                secondaryText: '',
                searchBodyBackground: '',
                last_updated: '',

                comsiteData: {
                    total: 0,
                    per_page: 2,
                    from: 1,
                    to: 0,
                    current_page: 1
                },
                counter: 0,
                searchText: '',
                buttonLoading: 0,
            }
        },
        created() {
            this.styleMode()
        },
        mounted() {
            this.lastUpdated()
            this.search()
        },
        methods: {
            getComsiteData() {
                axios.get(`/api/comsites?page=${this.comsiteData.current_page}`)
                    .then((response) => {
                        this.comsiteData = response.data;
                    })
            },
            search() {
                if (this.searchText != '') {
                    axios.get(`/api/searchComsites?page=${this.comsiteData.current_page}&text=${this.searchText}`)
                        .then((response) => {
                            this.comsiteData = response.data;
                        })
                } else {
                    this.getComsiteData()
                }
            },
            syncComsite() {
                // e.preventDefault()
                this.buttonLoading = 1
                // let currentObj = this

                axios.post(`/api/comsites`)
                .then((response) => {
                    // console.log(this.$route.params)
                    console.log(response)
                    // document.location.href = "/main#/comsite/create"
                    // currentObj.output = response.data
                    this.buttonLoading = 0
                    this.getComsiteData()
                })
            },

            // Style mode
            styleMode(){
                if (this.darkMode == 1) {
                    // dark mode
                    this.bodyBackground = 'has-background-black-ter'
                    this.boxBackground = 'has-background-dark'
                    this.primaryText = 'has-text-white'
                    this.secondaryText = 'has-text-grey-light'
                    this.searchBodyBackground = 'has-background-dark'
                } else {
                    // light mode
                    this.bodyBackground = 'has-background-light'
                    this.boxBackground = 'has-background-white'
                    this.primaryText = 'has-text-dark'
                    this.secondaryText = 'has-text-grey'
                    this.searchBodyBackground = 'has-background-white'
                }
            },
            changeStyle() {
                if (this.darkMode == 0) {
                    this.darkMode = 1
                    this.styleMode()
                } else {
                    this.darkMode = 0
                    this.styleMode()
                }
            },
            clearSearch() {
                this.searchText = ''
                // this.popSearch = []
                // this.selectedPop = null
                // this.selectedPops = []
                // this.selectedCrm = null
                // this.selectedZona = null
                this.getComsiteData()
            },
            lastUpdated() {
                axios.get(`/api/comsiteLastData`).then((response) => {
                    this.last_updated = response.data
                })
            },
        }
    }
</script>
