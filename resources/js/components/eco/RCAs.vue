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

            <b-table-column class="is-size-6" width="60%" field="basename" label="Archivo" sortable searchable>
                <template
                    slot="searchable"
                    slot-scope="props">
                    <b-input v-model="props.filters[props.column.field]" />
                </template>
                <template v-slot:header="{ column }">
                    <b-tooltip :label="column.label" class="is-size-6" append-to-body>
                        {{ column.label }}
                    </b-tooltip>
                </template>
                <template v-slot="props">
                    <a class="columns">
                        <div class="column is-1">
                            <font-awesome-icon :icon="['fas', faFile(props.row.extension).icon]" :class="faFile(props.row.extension).type"/>
                        </div>
                        <div class="column">
                            <div class="is-size-6" @click="openFile(props.row)">{{ props.row.basename }}</div>
                            <div class="is-size-7 has-text-dark">{{ props.row.size / 1000 }} kb</div>
                        </div>
                    </a>
                </template>
            </b-table-column>

            <b-table-column class="is-size-6" width="" field="site.nem_site" label="PoP" sortable searchable>
                <template 
                    slot="searchable"
                    slot-scope="props">
                    <b-input v-model="props.filters[props.column.field]" />
                </template>
                <template v-slot:header="{ column }">
                    <b-tooltip :label="column.label" class="is-size-6" append-to-body>
                        {{ column.label }}
                    </b-tooltip>
                </template>
                <template v-slot="props">
                    <div class="has-text-right" v-if="props.row.site || props.row.pop">
                        <div class="is-size-7">{{ props.row.site ? props.row.site.nem_site : (props.row.pop ? props.row.pop.sites[0].nem_site : '') }}</div>
                        <router-link 
                            class="is-size-7" 
                            :to="'/pop/' + (props.row.site ? props.row.site.pop_id : (props.row.pop ? props.row.pop.id : ''))" 
                            target="_blank">
                            <div class="is-size-6">{{ props.row.site ? props.row.site.pop.nombre : (props.row.pop ? props.row.pop.sites[0].nombre : '') }}</div>
                        </router-link>
                    </div>
                    <div class="has-text-right is-size-6" v-if="!props.row.site && !props.row.pop">RCA GENERAL</div>
                </template>
                
            </b-table-column>

            <b-table-column field="id" label="" width="10" numeric v-if="canDelete && edit">
                <button class="button is-small" @click="confirmDelete(props.row)">
                    <font-awesome-icon 
                        :icon="['far', 'trash-alt']" 
                        class="is-size-7 has-text-danger"/>
                </button>
            </b-table-column>


            <template slot="empty">
                <section class="section">
                    <div class="content has-text-grey has-text-centered">
                        <p>
                            <b-icon
                                icon="emoticon-sad"
                                size="is-large">
                            </b-icon>
                        </p>
                        <p>No hay archivos.</p>
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

        created() {
            this.$eventBus.$on('reload-rcas', this.getRCAs)
        },

        mounted() {
            this.getRCAs()
        },

        methods: {
            getRCAs() {
                axios.get(`/api/rcas`)
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
                    let response = axios.post(`/api/rcas`, formData, config)
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

            openFile(file) {   
                if (file.extension == 'pdf' || file.extension == 'jpg' || file.extension == 'png' || file.extension == 'jpeg') {
                    window.open('/storage/'+file.route, "_blank");    
                } else {
                    this.readFile(file)
                }
            },

            readFile(file) {
                this.isLoading = true
                var params = {
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
                    link.target = "_self"
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
                        axios.delete(`/api/files/${file.id}`)
                        .then(response => {
                            console.log(response)
                            this.getRCAs()
                        })
                    }
                })
            },

        },

        beforeDestroy() {
            this.$eventBus.$off('reload-rcas')
        }
    }
</script>
