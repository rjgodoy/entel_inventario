<template>
	<div class="modal-card">
        <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
                <p class="modal-card-title">Ingresar nuevo registro de vandalismo</p>
            </header>

            <section class="modal-card-body">
                <div class="columns is-multiline">
                    <div class="column is-12">
                        <b-field label="Sitio">
                            <b-autocomplete
                                autofocus
                                :data="sites"
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
                                            {{ props.option ? props.option.nem_site : '' }}
                                        </div>
                                        <div class="is-size-7 has-text-weight-normal">
                                            {{ props.option ? props.option.nombre : '' }}
                                        </div>
                                    </div>
                                </template>
                                <template slot="footer">
                                    <span v-show="page > totalPages" class="has-text-grey"> No hay mas sitios que mostrar. </span>
                                </template>
                            </b-autocomplete>
                        </b-field>
                    </div>

                    <div class="column is-6">
                        <b-field label="Fecha">
                            <b-datepicker
                            placeholder="Selecciona fecha..."
                            v-model="date"
                            icon-pack="fas"
                            icon-prev="chevron-left"
                            icon-next="chevron-right"
                            :first-day-of-week="1"
                            :max-date="new Date()">
                        </b-datepicker>
                        </b-field>
                    </div>

                    <div class="column is-12">
                        <b-field label="Descripción">
                            <b-input
                                v-model="description"
                                type="textarea"
                                placeholder="Describa el vandalismo">
                            </b-input>
                        </b-field>
                    </div>
                    <div class="column is-12">
                        <b-field label="Impacto">
                            <b-input
                                v-model="impact"
                                type="textarea"
                                placeholder="Describa el impacto">
                            </b-input>
                        </b-field>
                    </div>
                </div>
            </section>

            <footer class="modal-card-foot">
                <button class="button" type="button" @click="$parent.close()">Cerrar</button>
                <button class="button is-link" :disabled="!toSave" @click="createRecord()" v-if="canCreate">Guardar</button>
            </footer>
        </div>
    </div>
</template>

<script>
    import debounce from 'lodash/debounce'
    export default {
        components: {

        },

        props : ['canCreate'],

        data() {
            return {
                sites: [],

                description: '',
                impact: '',
                date: null,

                selected: null,
                isFetching: false,
                text: '',
                page: 1,
                totalPages: 1,

            }
        },

        computed: {
            toSave() {
                return this.selected != null && this.date != null && this.description != '' && this.impact != '' ? true : false;
            },
        },

        watch: {
        },

        created() {
        },

        mounted() {
            this.getAsyncData()
        },

        methods: {
            getAsyncData: debounce(function (name) {
                // String update
                if (this.text !== name) {
                    this.text = name
                    this.sites = []
                    this.page = 1
                    this.totalPages = 1
                }
                // String cleared
                if (!name) {
                    this.sites = []
                    this.page = 1
                    this.totalPages = 1
                    return
                }
                // Reached last page
                if (this.page > this.totalPages) {
                    return
                }
                this.isFetching = true
                axios.get(`/api/allSites?text=${name}&page=${this.page}`)
                .then( response  => {
                    response.data.sites.forEach((item) => this.sites.push(item))
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

            createRecord() {
                if (this.toSave) {
                    let params = {
                        'site_id': this.selected.id,
                        'date': this.date,
                        'description': this.description,
                        'impact': this.impact
                    }
                    axios.post(`/api/vandalismRecords`, params)
                    .then(response => {
                        this.$eventBus.$emit('vandalism-records-updated')
                        this.$parent.close()
                    })
                }
            }

        }
    }
</script>
