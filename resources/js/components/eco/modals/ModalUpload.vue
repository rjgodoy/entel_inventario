<template>
    <div class="modal-card" style="height: 700px; width: auto">
        <header class="modal-card-head has-text-centered">
            <p class="modal-card-title has-text-weight-bold">Subir Archivo</p>
        </header>

        <section class="modal-card-body">

            <div class="block">
                <b-tooltip
                    class="is-pulled-right"
                    label="Busca el pop al cual pertenece la RCA. En caso de no tener POP, selecciona 'Sin POP'."
                    position="is-left"
                    type="is-link"
                    size="is-medium"
                    multilined>
                    <font-awesome-icon :icon="['fas', 'info-circle']" class="has-text-link"/>
                </b-tooltip>
                <b-checkbox v-model="isWithoutPop" type="is-link">
                    Sin POP
                </b-checkbox>
            </div>


            <div class="container" style="width: 100%;" v-if="!isWithoutPop">
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
                        <div class="field" style="padding: 4px;">
                            <div class="is-size-6 has-text-weight-semibold">
                                {{ props.option ? props.option.nombre : '' }}
                            </div>
                            <div class="is-size-7 has-text-weight-normal">
                                {{ props.option ? props.option.comuna.nombre_comuna : '' }} - {{ props.option ? 'Zona ' + props.option.comuna.zona.nombre_zona : '' }} - {{ props.option ? 'CRM ' + props.option.comuna.zona.crm.nombre_crm : '' }}
                            </div>
                        </div>
                    </template>
                    <template slot="footer">
                        <span v-show="page > totalPages" class="has-text-grey"> No hay mas PoPs que mostrar. </span>
                    </template>
                </b-autocomplete>
            </div>

            <b-field style="padding-top: 24px;">
                <b-upload :disabled="isWithoutPop || selected ? false : true"
                    v-model="dropFiles"
                    @input="submit"
                    multiple
                    drag-drop>
                    <section class="section">
                        <div class="content has-text-centered">
                            <p>
                                <b-icon
                                    icon="upload"
                                    pack="fas"
                                    size="is-large">
                                </b-icon>
                            </p>
                            <p>Puedes hacer click o arrastrar tus archivos aquí</p>
                        </div>
                    </section>
                </b-upload>
            </b-field>

            <div class="box is-shadowless is-link" style="padding: 8px; margin-top: 24px; border: solid 0.5px black;">
                <div class="field has-background">
                    <div v-if="!isWithoutPop">
                        <div class="is-size-6 has-text-weight-normal">POP destino: <span v-if="!selected" class="has-text-grey">Selecciona un Pop de la lista</span></div>
                        <b-notification aria-close-label="Close notification" @close="selected = null" v-if="selected">
                            <div class="is-size-6 has-text-weight-semibold">
                                {{ selected ? selected.nombre : '' }}
                            </div>
                            <div class="is-size-7 has-text-weight-normal">
                                {{ selected ? selected.comuna.nombre_comuna + ' - Zona ' + selected.comuna.zona.nombre_zona + ' - CRM ' + selected.comuna.zona.crm.nombre_crm : '' }}
                            </div>
                        </b-notification>                        
                    </div>
                    <div v-if="isWithoutPop" class="is-size-6 has-text-centered has-text-weight-normal">RCA GENERAL</div>
                </div>
            </div>
        </section>
        <footer class="modal-card-foot">
            <button class="button" type="button" @click="$parent.close()">Cerrar</button>
            <!-- <button class="button is-primary">Subir</button> -->
        </footer>
    </div>
</template>

<script>    
    import { library } from "@fortawesome/fontawesome-svg-core";
    import { faInfoCircle, faSearch, faUpload } from "@fortawesome/free-solid-svg-icons";
    // import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
    // import { faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons'
    library.add(faInfoCircle, faSearch, faUpload);
    import debounce from 'lodash/debounce'
    export default {
        components: {
        },
        props : [
            // 'pop',
            'folderTab',
            'folder_id',
            'user'
        ],
        data() {
            return {
                dropFiles: [],
                pops: [],
                selected: null,
                isFetching: false,
                text: '',
                page: 1,
                totalPages: 1,
                isWithoutPop: false
            }
        },

        watch: {

        },

        created() {
        },

        mounted() {
        },

        methods: {
            submit() {
                // console.log(this.folderTab)
                this.dropFiles.forEach(element => this.submitForm(element))
            },

            submitForm(file) {
                const config = {
                    headers: {
                        'content-type': 'multipart/form-data',
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                    },
                    params: {
                        'pop_id': this.selected ? this.selected.id : null,
                        'folder_name': 'Gestión Ambiental',
                        'folder_id': !this.selected ? 28172 : null,
                        'user_id': this.user.id,
                    }
                }

                // form data
                let formData = new FormData();
                formData.append('file', file)

                // send upload request
                try {
                    axios.post(`/api/files`, formData, config)
                    .then(response => {
                        console.log(response.data)
                        this.$eventBus.$emit('reload-rcas')
                    })
                } catch (e) {
                    console.log(e)
                }

                this.$parent.close()
                
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
        }
    }
</script>
