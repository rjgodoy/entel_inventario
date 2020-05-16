<template>
    <div class="modal-card" style="height: 700px; width: 800px">
        <header class="modal-card-head has-text-centered">
            <p class="modal-card-title has-text-weight-bold">Crear Carpeta</p>
        </header>
        <section class="modal-card-body">
            <div class="container" style="width: 50%; margin-top: 30px;">
                <!-- <p class="content"><b>Selected:</b> {{ selected }}</p> -->
                <b-autocomplete
                    autofocus
                    :data="pops"
                    icon-pack="fas"
                    icon="search"
                    placeholder="Buscar por nemónico, nombre o direccion del sitio..."
                    :keep-first="true"
                    :open-on-focus="text ? true : false"
                    :loading="isFetching"
                    :check-infinite-scroll="true"
                    @typing="getAsyncData"
                    @select="option => selected = option"
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
                                {{ props.option ? 'Zona ' + props.option.comuna.zona.nombre_zona : '' }} - {{ props.option ? 'CRM ' + props.option.comuna.zona.crm.nombre_crm : '' }}
                            </div>
                        </div>
                    </template>
                    <template slot="footer">
                        <span v-show="page > totalPages" class="has-text-grey"> No hay mas PoPs que mostrar. </span>
                    </template>
                </b-autocomplete>
            </div>

            <div class="box" v-if="selected" style="padding-top: 48px;">
                <div class="field  has-text-centered" style="padding: 10px;">
                    <div class="is-size-6 has-text-weight-semibold">
                        {{ selected ? selected.nombre : '' }}
                    </div>
                    <div class="is-size-7 has-text-weight-normal">
                        {{ selected ? selected.comuna.nombre_comuna : '' }}
                    </div>
                    <div class="is-size-7 has-text-weight-normal">
                        {{ selected ? 'Zona ' + selected.comuna.zona.nombre_zona : '' }} - {{ selected ? 'CRM ' + selected.comuna.zona.crm.nombre_crm : '' }}
                    </div>
                </div>
            </div>

        </section>
        <footer class="modal-card-foot">
            <button class="button" type="button" @click="$parent.close()">Close</button>
            <button class="button is-primary" @click="addZone">Agragar</button>
        </footer>
    </div>
</template>

<script>
    import { library } from "@fortawesome/fontawesome-svg-core";
    import { faSearch } from "@fortawesome/free-solid-svg-icons";
    library.add(faSearch);
    import debounce from 'lodash/debounce'
    export default {
        components: {
        },
        props : [
            'user'
        ],
        data() {
            return {
                pops: [],
                selected: null,
                isFetching: false,
                text: '',
                page: 1,
                totalPages: 1
            }
        },

        watch: {

        },

        created() {
        },

        mounted() {
        },

        methods: {
            // getPops() {
            //     axios.get(`api/allPops?api_token=${this.user.api_token}`)
            //     .then(response => {
            //         this.pops = response.data.pops
            //         console.log(response.data.pops)
            //     })
            // },

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
                axios.get(`/api/allPops?api_token=${this.user.api_token}&text=${name}&page=${this.page}`)
                    .then( response  => {
                        console.log(response.data.meta.last_page)
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

            addZone() {
                if (!this.selected) {
                    this.$buefy.toast.open({
                        message: 'Debe seleccionar un PoP.',
                        type: 'is-danger',
                        duration: 3000
                    })
                } else {
                    var params = {
                        'api_token': this.user.api_token,
                        'pop_id': this.selected.id,
                        'zona_id': this.selected.comuna.zona_id,
                        'user_id': this.user.id
                    }
                    axios.post('/api/newStorage', params)
                    .then(response => {
                        console.log(response)
                        this.$buefy.toast.open({
                            message: 'El PoP se ha agregado exitosamente.',
                            type: 'is-success',
                            duration: 5000
                        })
                    })
                    this.$parent.close()
                    this.$eventBus.$emit('storage-created');
                }
                
            }
        }
    }
</script>
