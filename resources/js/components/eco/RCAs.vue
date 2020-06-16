<template>
    <div class="tile is-child box">
        <div class="is-pulled-right">
            <span class="" v-if="canUpload">
                <button class="button" @click="isUploadModalActive = true">Subir archivos</button>
            </span>
            <span class="" v-if="canDelete">
                <button class="button" :class="edit && 'is-danger'" @click="edit = !edit">Editar</button>
            </span>
        </div>
        
        <div class="title is-size-4">RCAs</div>

        <!-- <b-field grouped group-multiline>
            <div class="control">
                <b-switch v-model="isBordered">Bordered</b-switch>
            </div>
            <div class="control">
                <b-switch v-model="isStriped">Striped</b-switch>
            </div>
            <div class="control">
                <b-switch v-model="isNarrowed">Narrowed</b-switch>
            </div>
            <div class="control">
                <b-switch v-model="isHoverable">Hoverable</b-switch>
            </div>
            <div class="control">
                <b-switch v-model="isFocusable">Focusable</b-switch>
            </div>
            <div class="control">
                <b-switch v-model="isLoading">Loading state</b-switch>
            </div>
            <div class="control">
                <b-switch v-model="hasMobileCards">Mobile cards <small>(collapsed rows)</small></b-switch>
            </div>
        </b-field> -->

        <b-table
            :data="rcas.files"
            :paginated="isPaginated"
            :per-page="perPage"
            :current-page.sync="currentPage"
            :pagination-simple="isPaginationSimple"
            :pagination-position="paginationPosition"
            :default-sort-direction="defaultSortDirection"
            :sort-icon="sortIcon"
            :sort-icon-size="sortIconSize"
            pagination-size="is-small"
            default-sort="user.first_name"
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page">

            <template slot-scope="props">
                <!-- <b-table-column field="id" label="ID" width="40" numeric>
                    {{ props.row.id }}
                </b-table-column> -->

                <b-table-column class="is-size-6" width="60%" field="basename" label="Archivo" sortable searchable>
                    <template slot="header" slot-scope="{ column }">
                        <b-tooltip :label="column.label" class="is-size-6">
                            {{ column.label }}
                        </b-tooltip>
                    </template>
                    <a class="columns">
                        <div class="column is-1">
                            <font-awesome-icon :icon="['fas', faFile(props.row.extension).icon]" :class="faFile(props.row.extension).type"/>
                        </div>
                        <div class="column">
                            <div class="is-size-6" @click="readFile(props.row)">{{ props.row.basename }}</div>
                            <div class="is-size-7 has-text-dark">{{ props.row.size / 1000 }} kb</div>
                        </div>
                    </a>
                    
                </b-table-column>

                <b-table-column class="is-size-6" width="" field="site.nem_site" label="PoP" sortable searchable>
                    <b-input
                        slot="searchable"
                        slot-scope="props"
                        v-model="props.filters[props.column.field]"/>
                    <template slot="header" slot-scope="{ column }">
                        <b-tooltip :label="column.label" class="is-size-6">
                            {{ column.label }}
                        </b-tooltip>
                    </template>
                    <div class="has-text-right">
                        <div class="is-size-7">{{ props.row.site.nem_site }}</div>
                        <router-link class="is-size-7" :to="'/pop/' + props.row.site.pop.id" target="_blank">
                            <div class="is-size-6">{{ props.row.site.pop.nombre }}</div>
                        </router-link>
                    </div>
                    
                </b-table-column>

                <b-table-column field="id" label="" width="10" numeric v-if="canDelete && edit">
                    <button class="button is-small" @click="confirmDelete(props.row)">
                        <font-awesome-icon 
                            :icon="['far', 'trash-alt']" 
                            class="is-size-7 has-text-danger"/>
                    </button>
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

        <!-- <b-field v-if="rcas.can ? rcas.can.upload : null">

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
        </b-field> -->

        <b-modal v-if="rcas.can && rcas.can.upload" :active.sync="isUploadModalActive"
            has-modal-card
            trap-focus
            aria-role="dialog"
            aria-modal>
            <modal-upload 
                :user="user"
                />
        </b-modal>

    </div>
</template>

<script>
    import { library } from "@fortawesome/fontawesome-svg-core";
    import { faFolderOpen, faFilePdf, faFileExcel, faFileImage, faFile, faAngleLeft, faUpload } from "@fortawesome/free-solid-svg-icons";
    // import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
    import { faTrashAlt as farTrashAlt } from '@fortawesome/free-regular-svg-icons'
    library.add(faFolderOpen, faFilePdf, faFileExcel, faFileImage, faFile, faAngleLeft, farTrashAlt, faUpload);
    export default {
        components: {
            ModalUpload: () => import(/* webpackChunkName: "chunks/eco/modals/upload"*/'./modals/ModalUpload'),
        },

        props : [
            'user'
        ],

        data() {
            return {
                dropFiles: [],

                rcas: Array,
                isPaginated: true,
                isPaginationSimple: false,
                paginationPosition: 'bottom',
                defaultSortDirection: 'asc',
                sortIcon: 'arrow-up',
                sortIconSize: 'is-small',
                currentPage: 1,
                perPage: 10,
                edit: false,
                isUploadModalActive: false
            }
        },

        computed: {
            canUpload() {
                return this.rcas.can && this.rcas.can.upload
            },

            canDelete() {
                return this.rcas.can && this.rcas.can.delete
            }
        },

        mounted() {
            this.getRCAs()
        },

        methods: {
            getRCAs() {
                axios.get(`/api/rcas?api_token=${this.user.api_token}`)
                .then(response => {
                    console.log(response.data)
                    this.rcas = response.data
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
                    }
                }

                // form data
                let formData = new FormData();
                formData.append('file', file)

                // send upload request
                try {
                    let response = axios.post(`/api/rcas?api_token=${this.user.api_token}`, formData, config)
                    .then(response => {
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
                }
                // console.log(params)
                axios.get('/api/viewFile', { 
                    params: params, 
                    responseType: 'arraybuffer' 
                })
                .then((response) => {
                    console.log(response)
                    const blob = new Blob([response.data], { type: file.mime })
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
                    link.target = "_blank"
                    link.open = file.basename
                    link.click()
                    // setTimeout(function () {
                    //     // For Firefox it is necessary to delay revoking the ObjectURL
                    //     window.URL.revokeObjectURL(data)
                    // }, 100)

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

            confirmDelete(file) {
                this.$buefy.dialog.confirm({
                    message: 'Desea eliminar este archivo?',
                    type: 'is-danger',
                    onConfirm: () => {
                        axios.delete(`/api/files/${file.id}?api_token=${this.user.api_token}`)
                        .then(response => {
                            console.log(response)
                            this.getRCAs()
                        })
                    }
                })
            },

        }
    }
</script>
