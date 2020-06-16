<template>
    <section class="" id="eco">

        <div class="columns">
            <div class="column has-text-weight-semibold has-text-dark is-size-3 has-text-left">Gestión Ambiental</div>
        </div>

        <div class="tile is-ancestor">
            <div class="tile is-vertical">
                <div class="tile is-parent">
                    <div class="box tile is-child">
                        <div class="field">
                            <div class="title is-size-4 has-text-weight-semibold has-text-centered">Zona protegida</div>
                            <div v-if="pop.protected_zones.length">
                                <div class="is-size-6 has-text-weight-light has-text-centered">Este PoP <span class="has-text-weight-semibold has-text-eco">SI</span> se encuentra dentro de una zona protegida</div>
                                <div v-for="pz in pop.protected_zones" class="title is-size-5 has-text-weight-semibold has-text-centered" style="padding-top: 12px">Zona {{ pz.cod_zone }}
                                    <div class="is-size-5 has-text-weight-light">{{ pz.name }}</div>
                                </div>
                            </div>
                            <div v-if="!pop.protected_zones.length" class="is-size-6 has-text-weight-light has-text-centered">Este PoP <span class="has-text-weight-semibold has-text-positive">NO</span> se encuentra dentro de una zona protegida.</div>
                        </div>
                    </div>
                </div>

                <div class="tile is-parent">
                    <div class="box tile is-child">
                        <div class="field">
                            <div class="title is-size-4 has-text-weight-semibold has-text-centered">Zona Acopio Temporal</div>

                            <div v-if="isTempStorage" class="is-size-6 has-text-weight-light has-text-centered">Este PoP es <span class="has-text-weight-semibold has-text-smart">Zona de Acopio Temporal</span>.</div>

                            <div v-if="!isTempStorage & temporaryStoragesData.length">
                                <div class="is-size-6 has-text-weight-light has-text-centered">Este PoP tiene asociada las siguientes zonas de acopio temporal:</div>
                                <div v-for="ts in temporaryStoragesData" class="title is-size-5 has-text-weight-semibold has-text-centered" style="padding-top: 12px">
                                    <a :href="'/pop/' + ts.pop.id + '#eco'" target="_blank">{{ ts.pop.nombre }}</a>
                                    <div class="is-size-5 has-text-weight-light">{{ ts.pop.direccion }}</div>
                                </div>
                            </div>

                            <div v-if="!temporaryStoragesData.length" class="is-size-6 has-text-weight-light has-text-centered">Este PoP <span class="has-text-weight-semibold has-text-positive">NO</span> tiene asociada ninguna zona de acopio temporal.</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tile is-parent">
                <div class="box tile is-child">
                    <div class="field">
                        <div class="title is-size-4 has-text-weight-semibold has-text-centered">Resolucion de Calificación Ambiental</div>
                        <div v-if="hasRcas">
                            <b-table :data="rcas.environmentalData">

                                <template slot-scope="props">
                                    <b-table-column field="basename" label="Nombre archivo">
                                        <a class="has-text-dark" @click="readFile(props.row)">
                                            <div class="columns">
                                                <div class="column is-1">
                                                    <font-awesome-icon 
                                                        :icon="['fas', faFile(props.row.extension).icon]"
                                                        :class="faFile(props.row.extension).type"/>
                                                </div>
                                                <div class="column">
                                                    <div class="is-size-6">{{ props.row.basename }}</div>
                                                </div>
                                            </div>
                                            <!-- <b-loading :is-full-page="false" :active.sync="isLoading" :can-cancel="true"></b-loading> -->
                                        </a>
                                    </b-table-column>
                                </template>

                                <template slot="empty">
                                    <section class="section">
                                        <div class="content has-text-grey has-text-centered">
                                            <p>
                                                <b-icon
                                                    icon="emoticon-sad"
                                                    size="is-large">
                                                </b-icon>
                                            </p>
                                            <p>Nothing here.</p>
                                        </div>
                                    </section>
                                </template>
                            </b-table>
                        </div>
                        <div v-if="!hasRcas" class="is-size-6 has-text-weight-light has-text-centered">Este PoP <span class="has-text-weight-semibold has-text-positive">NO</span> tiene Resolucion de Calificación Ambiental (R.C.A.).</div>
                    </div>
                    <b-field v-if="rcas.can ? rcas.can.upload : null">
                        <b-upload
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
                                    <p>Drop your files here or click to upload</p>
                                </div>
                            </section>
                        </b-upload>
                    </b-field>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
    import { library } from "@fortawesome/fontawesome-svg-core";
    import { faUpload, faSearch, faFolderOpen, faFilePdf, faFileExcel, faFileImage, faFile, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
    // import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
    import { faTrashAlt as farTrashAlt, faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons'
    library.add(farCheckCircle, faUpload, faSearch, faFolderOpen, faFilePdf, faFileExcel, faFileImage, faFile, faAngleLeft, farTrashAlt);
    export default {
        components: {
        },
        props : [
            'user',
            'pop',
            'bodyBackground',
            'boxBackground',
            'primaryText',
            'secondaryText',
        ],

        data() {
            return {
                rcas: [],
                dropFiles: [],
                temporaryStorages: [],
                temporaryStoragesData: [],
                isLoading: false
            }
        },

        computed: {
            isTempStorage() {
                var bool = false
                if (this.temporaryStorages.environmentalData && this.temporaryStorages.environmentalData.pop) {
                    this.temporaryStorages.environmentalData.forEach(element => {
                        if (bool == false) {
                            bool = element.pop.id == this.pop.id ? true : false
                        }
                         this.temporaryStoragesData.push(element)

                    })

                }
                return bool
            },

            hasRcas() {
                return this.rcas.environmentalData && this.rcas.environmentalData.length ? true : false
            }
        },

        mounted() {
            this.getRCAs()
            this.getTempStorage()
        },

        methods: {
            getRCAs() {
                axios.get(`/api/rcas/${this.pop.id}?api_token=${this.user.api_token}`)
                .then(response => {
                    console.log(response.data)
                    this.rcas = response.data
                })
            },

            getTempStorage() {
                axios.get(`/api/ecoStorage/${this.pop.id}?api_token=${this.user.api_token}`)
                .then(response => {
                    // console.log(response.data)
                    this.temporaryStorages = response.data
                })
            },

            submit() {
                this.dropFiles.forEach(element => this.submitForm(element))
            },

            submitForm(file) {
                const config = {
                    headers: {
                        'content-type': 'multipart/form-data',
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                    },
                    params: {
                        'api_token': this.user.api_token,
                        'pop_id': this.pop.id
                    }
                }

                // form data
                let formData = new FormData();
                formData.append('file', file)

                // send upload request
                try {
                    let response = axios.post('/api/rcas', formData, config )
                    .then(response => {
                        // console.log(response.data)
                        this.getRCAs()
                    })
                } catch (e) {
                    console.log(e)
                }
                
            },

            faFile(ext) {
                var icon = ext == 'pdf' ? 'file-pdf' : 
                        (ext == 'jpg' || ext == 'png' || ext == 'jpeg' ? 'file-image' : 
                            (ext == 'xls' || ext == 'xlsx' ? 'file-excel' : 'file')
                        )

                var type = ext == 'pdf' ? 'has-text-info' : 
                        (ext == 'jpg' || ext == 'png' || ext == 'jpeg' ? 'has-text-warning' : 
                            (ext == 'xls' || ext == 'xlsx' ? 'has-text-success' : 'has-text-primary')
                        )
                return {
                    'icon': icon,
                    'type': type
                    }
            },

            readFile(file) {
                this.isLoading = true
                var params = {
                    'api_token': this.user.api_token,
                    'route': file.route,
                    'mime': file.mime,
                    'basename': file.basename,
                    'dirname': file.dirname,
                }
                // console.log(params)
                axios.get('/api/viewFile', { 
                    params: params, 
                    responseType: 'arraybuffer' 
                })
                .then((response) => {
                    // console.log(response)
                    const blob = new Blob([response.data], { type: file.mime })
                    const objectUrl = URL.createObjectURL(blob)

                    // IE doesn't allow using a blob object directly as link href
                    // instead it is necessary to use msSaveOrOpenBlob
                    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                        window.navigator.msSaveOrOpenBlob(newBlob)
                        return
                    }

                    let link = document.createElement('a');
                    link.href = objectUrl;
                    link.open = file.basename;
                    // link.target = "_blank";
                    link.click();
                    setTimeout(function () {
                        // For Firefox it is necessary to delay revoking the ObjectURL
                        URL.revokeObjectURL(objectUrl)
                    }, 100)

                    this.isLoading = false
                    this.$buefy.toast.open({
                        message: 'El archivo se ha descargado exitosamente.',
                        type: 'is-success',
                        duration: 5000
                    })
                }).catch((error) => {
                    console.log(error)
                    this.isLoading = false
                    this.$buefy.toast.open({
                        message: 'Ha ocurrido un error. Favor contactar al administrador',
                        type: 'is-danger',
                        duration: 5000
                    })
                })
            },
        }
    }
</script>
