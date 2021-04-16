<template>

    <section class="">
        <div class="columns">
            <div class="column has-text-weight-semibold has-text-dark is-size-3 has-text-left">Documentos</div>
        </div>

        <div class="columns">
            <div class="column">
                <div class="box">
                    <b-tabs v-model="activeTab" :multiline="multiline" position="is-centered" @input="setFolderTab()" style="margin-bottom: 0px;">
                        <template v-for="(tab, index) in tabs">
                            <b-tab-item
                                v-if="tab.displayed"
                                :key="index"
                                :label="tab.label">
                            </b-tab-item>
                        </template>
                    </b-tabs>

                    <div class="columns" style="padding-bottom: 20px; padding-left: 24px;">
                        <div class="column has-text-left">
                            <span>
                                <a v-if="bread" @click="backOne">
                                    <font-awesome-icon
                                        :icon="['fas', 'angle-left']"
                                        class="is-link"
                                        size="2x"
                                        style="margin-bottom: -4px;"/>
                                </a>
                                <span class="is-size-6" style="margin-bottom: 25px;">&nbsp;{{ bread }}</span>
                            </span>
                            
                        </div>

                        <div class="column has-text-right">
                            <span class="" v-if="canUploadFile">
                                <button class="button" @click="isUploadModalActive = true">Subir archivos</button>
                            </span>

                            <span class="" v-if="canUploadFile">
                                <button class="button" @click="isNewFolderModalActive = true">Nueva Carpeta</button>
                            </span>

                            <span class="" v-if="canUploadFile">
                                <button class="button" :class="edit && 'is-danger'" @click="edit = !edit">Editar</button>
                            </span>
                        </div>
                    </div>
                    

                    <div class="columns is-multiline" v-if="!edit">
                        <div class="column is-3 tile is-parent" v-for="folder in folders" :key="folder.id">
                            <a class="box tile is-child" @click="selected(folder)" style="position: relative;" >
                                <font-awesome-icon
                                    :icon="['fas', 'folder-open']"
                                    class="has-text-smart"
                                    size="3x"
                                    style="padding-bottom: 5px;"/>
                                <div class="is-size-6 has-text-weight-bold">{{ bread != '' ? folder.name : (folder.site && folder.site.nem_site) }}</div>
                            </a>
                        </div>

                        <div class="column is-3 tile is-parent" v-for="file in files" :key="file.id">
                            <a class="box tile is-child" @click="openFile(file); load = file.id" style="position: relative;">
                                <font-awesome-icon 
                                    :icon="['fas', faFile(file.extension).icon]"
                                    :class="faFile(file.extension).type"
                                    size="3x"
                                    style="padding-bottom: 5px;"/>
                                <div class="is-size-7">{{ file.basename }}</div>
                                <b-loading :is-full-page="false" :active.sync="isLoading" :can-cancel="true" v-if="load == file.id"></b-loading>
                            </a>
                        </div>
                    </div>

                    <div class="columns is-multiline" v-if="edit">
                        <div class="column is-3 tile is-parent" v-for="folder in folders" :key="folder.id">
                            <div class="box tile is-child" style="position: relative;">
                                <a class="is-pulled-right has-text-danger" @click="confirmDeleteFolder(folder)">
                                    <font-awesome-icon 
                                        :icon="['far', 'trash-alt']"
                                        size="2x"
                                        style="padding-bottom: 5px;"/>
                                </a>
                                <font-awesome-icon
                                    :icon="['fas', 'folder-open']"
                                    class="has-text-smart"
                                    size="3x"
                                    style="padding-bottom: 5px;"/>
                                <div class="is-size-6 has-text-weight-bold">{{ bread != '' ? folder.name : (folder.site && folder.site.nem_site) }}</div>
                            </div>
                        </div>

                        <div class="column is-3 tile is-parent" v-for="file in files" :key="file.id">
                            <div class="box tile is-child" style="position: relative;">
                                <a class="is-pulled-right has-text-danger" @click="confirmDeleteFile(file)">
                                    <font-awesome-icon 
                                        :icon="['far', 'trash-alt']"
                                        size="1x"
                                        style="padding-bottom: 5px;"/>
                                </a>
                                <a class="is-pulled-right has-text-link" @click="makeDroneFootage(file)" v-if="isVideo(file)">
                                    <font-awesome-icon 
                                        :icon="['fas', 'video']"
                                        size="1x"
                                        style="padding-bottom: 5px;"/>
                                </a>
                                <font-awesome-icon 
                                    :icon="['fas', faFile(file.extension).icon]"
                                    :class="faFile(file.extension).type"
                                    size="3x"
                                    style="padding-bottom: 5px;"/>
                                <div class="is-size-7">{{ file.basename }}</div>
                                <b-loading :is-full-page="false" :active.sync="isLoading" :can-cancel="true" v-if="load == file.id"></b-loading>
                            </div>
                        </div>
                    </div>

                    <div v-if="photos.length">
                        <hr/>

                        <div class="block">
                            <div class="is-size-5 has-text-weight-semibold">Visor de fotos</div>
                        </div>

                        <div class="container has-background-light">
                            <b-carousel
                                icon-pack="fas"
                                indicator-custom
                                :autoplay="false"
                                with-carousel-list
                                :indicator="false"
                                :overlay="gallery"
                                @click="switchGallery(true)">
                                <b-carousel-item v-for="(item, i) in photos" :key="i" class="has-text-centered">
                                    <figure class="image">
                                        <img :src="item.image" style="max-height: 800px; width: auto; display: block;">
                                    </figure>
                                </b-carousel-item>
                                <span v-if="gallery" @click="switchGallery(false)" class="modal-close is-large"/>
                                <template slot="list" slot-scope="props">
                                    <b-carousel-list
                                        v-model="props.active"
                                        :data="photos"
                                        v-bind="al"
                                        @switch="props.switch($event, false)"
                                        as-indicator
                                        :has-drag="true" />
                                </template>
                                <template slot="overlay">
                                    <div class="has-text-centered has-text-white">
                                        Hello i'am overlay!
                                    </div>
                                </template>
                            </b-carousel>
                        </div>
                    </div>

                    <section v-if="noFiles" class="section container">
                        <div class="has-text-weight-normal">No hay archivos en esta sección.</div>
                    </section>
                </div>
            </div>
        </div>


        <b-modal :active.sync="isUploadModalActive"
            has-modal-card
            trap-focus
            aria-role="dialog"
            aria-modal>
            <modal-upload 
                :folder_id="currentFolderView.id"
                :folderTab="folderTab"
                :pop="pop"
                :user="user"
                />
        </b-modal>

        <b-modal :active.sync="isNewFolderModalActive"
            has-modal-card
            trap-focus
            aria-role="dialog"
            aria-modal>
            <modal-new-folder 
                :folder_id="currentFolderView.id"
                :folderTab="folderTab"
                :pop="pop"
                :user="user"
                />
        </b-modal>
        
    </section>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFolderOpen, faFilePdf, faFileExcel, faFileImage, faFile, faAngleLeft, faVideo } from "@fortawesome/free-solid-svg-icons";
// import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { faTrashAlt as farTrashAlt } from '@fortawesome/free-regular-svg-icons'
library.add(faFolderOpen, faFilePdf, faFileExcel, faFileImage, faFile, faAngleLeft, farTrashAlt, faVideo);
export default {
    components: {
        ModalUpload: () => import(/* webpackChunkName: "chunks/pop/documents/modals/upload"*/'./modals/ModalUpload'),
        ModalNewFolder: () => import(/* webpackChunkName: "chunks/pop/documents/modals/newFolder"*/'./modals/ModalNewFolder'),
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
            folders: [],
            files: [],
            photos: [],
            activeTab: 0,
            showCam: true,
            multiline: true,
            isLoading: false,
            load: 0,
            canCreateFolder: false,
            canDeleteFolder: false,
            canUploadFile: false,
            canDeleteFile: false,

            edit: false,

            isUploadModalActive: false,
            isNewFolderModalActive: false,

            currentFolderView: {
                id: null,
                parent_id: null
            },
            parentViewId: null,

            bread: '',
            gallery: false,
            al: {
                hasGrayscale: true,
                itemsToShow: 2,
                breakpoints: {
                    768: {
                        hasGrayscale: false,
                        itemsToShow: 4
                    },
                    960: {
                        hasGrayscale: true,
                        itemsToShow: 6
                    }
                }
            },

        }
    },

    created() {
        this.$eventBus.$on('reload-files', this.getFiles);
    },

    mounted() {
        this.setFolderTab()
        this.getFolders()
        this.getFiles()
    },

    computed: {
        folderTab() {
            return this.baseTabs[this.activeTab]
        },

        baseTabs() {
            return [
                {
                    id: 1,
                    label: 'Informes',
                    content: 'Informes: Lorem ipsum dolor sit amet.',
                    displayed: true,
                },
                {
                    id: 2,
                    label: 'Documentos',
                    content: 'Documentos: Lorem ipsum dolor sit amet.',
                    displayed: true,
                },
                {
                    id: 3,
                    label: 'Fotos',
                    content: 'Fotos: Lorem ipsum dolor sit amet.',
                    displayed: true,
                },
                {
                    id: 4,
                    label: 'Construcción',
                    content: 'Construcción: Lorem ipsum dolor sit amet.',
                    displayed: true,
                },
                {
                    id: 5,
                    label: 'Obras Civiles',
                    content: 'Obras Civiles: Lorem ipsum dolor sit amet.',
                    displayed: true,
                },
                {
                    id: 6,
                    label: 'CAM',
                    content: 'CAM: Lorem ipsum dolor sit amet.',
                    displayed: true,
                },
                {
                    id: 7,
                    label: 'Levantamientos Ingeniería',
                    content: 'Levantamientos Ingeniería: Lorem ipsum dolor sit amet.',
                    displayed: true,
                },
                {
                    id: 8,
                    label: 'Gestión Ambiental',
                    content: 'Gestión Ambiental: Lorem ipsum dolor sit amet.',
                    displayed: true,
                },
            ]
        },

        tabs() {
            const tabs = [...this.baseTabs]
            return tabs
        },

        noFiles() {
            return !this.folders.length && !this.files.length && !this.photos.length
        },
    },

    watch: {
        isNewFolderModalActive(val) {
            val == false && this.getFolders()
        }
    },
    
    methods: {
        setFolderTab() {
            this.bread = ''
            this.currentFolderView.id = null
            this.getFolders()
            this.getFiles()
        },

        selected(folder) {
            this.setBreadcrum(folder.name)
            this.parentViewId = this.currentFolderView.id
            this.currentFolderView = folder
            this.getFolders()
            this.getFiles()
        },

        getFolders() {
            let params = {
                'folder_name': this.folderTab.label,
                'folder_id': this.currentFolderView.id,
                'pop_id': this.pop.id
            }
            axios.get(`/api/folders/${this.pop.id}`, { params })
            .then((response) => {
                this.folders = response.data.folders
                this.canCreateFolder = response.data.can.create
                this.canDeleteFolder = response.data.can.delete
                
            })
            axios.get('/api/currentFolder', { params })
            .then(response => {
                // console.log(response.data)
                this.currentFolderView = response.data.folder
            })
        },

        // File Management
        getFiles() {
            let params = {
                'folder_name': this.folderTab.label,
                'folder_id': this.currentFolderView.id
            }
            this.files = [] 
            this.photos = []
            axios.get(`/api/files/${this.pop.id}`, { params })
            .then(response => {
                // console.log(response.data)

                Object.keys(response.data.files).forEach(element => {
                    let file = response.data.files[element];
                    if (file.extension.toLowerCase() == 'jpg' 
                        || file.extension.toLowerCase() == 'png' 
                        || file.extension.toLowerCase() == 'jpeg' 
                        || file.extension.toLowerCase() == 'tiff') {
                        file.image = '/storage/'+file.route
                        this.photos.push(file)
                    } else {
                        this.files.push(file)
                    }
                });

                // console.log(response.data)
                // this.files = response.data.files
                this.canUploadFile = response.data.can.upload
                this.canDeleteFile = response.data.can.delete
            })
        },

        faFile(ext) {
            var icon = 'file';
            var type = 'has-text-primary';

            switch (ext.toLowerCase()) {
                case 'pdf':
                    icon = 'file-pdf';
                    type = 'has-text-info';
                    break;
                case 'jpg':
                case 'jpeg':
                case 'png':
                case 'tiff':
                    icon = 'file-image';
                    type = 'has-text-warning';
                    break;
                case 'xls':
                case 'xlsx':
                    icon = 'file-excel';
                    type = 'has-text-success';
                    break;
                default:
                    icon = 'file';
                    type = 'has-text-primary';
                    break;
            }

            return {
                'icon': icon,
                'type': type
                }
        },

        openFile(file) {   
            if (file.extension.toLowerCase() == 'pdf' || file.extension.toLowerCase() == 'jpg' || file.extension.toLowerCase() == 'png' || file.extension.toLowerCase() == 'jpeg') {
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
                // console.log(response)
                const blob = new Blob([response.data], { type: file.mime })
                const objectUrl = window.URL.createObjectURL(blob)

                // IE doesn't allow using a blob object directly as link href
                // instead it is necessary to use msSaveOrOpenBlob
                if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                    window.navigator.msSaveOrOpenBlob(newBlob)
                    return
                }

                let link = document.createElement('a')
                link.href = objectUrl
                link.open = file.basename
                link.target = '_self'
                link.click()
                setTimeout(function () {
                    // For Firefox it is necessary to delay revoking the ObjectURL
                    window.URL.revokeObjectURL(objectUrl)
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

        confirmDeleteFolder(folder) {
            this.$buefy.dialog.confirm({
                message: 'Desea eliminar esta carpeta?',
                type: 'is-danger',
                onConfirm: () => {
                    var params = {
                        'user_id': this.user.id,
                        'pop_id': this.pop.id
                    }
                    axios.delete(`/api/folders/${folder.id}`, { params })
                    .then(response => {
                        // console.log(response)
                        this.getFolders()
                        this.$eventBus.$emit('folder-deleted');
                    })
                }
            })
        },

        setBreadcrum(name) {
            if (this.bread == '') {
                this.bread = name
            } else {
                this.bread = this.bread + ' / ' + name
            }
        },

        backOne() {
            var split = this.bread.split('/')
            var deep = split.pop()
            this.bread = ''
            for (let i = 0; i < split.length; i++) {
                this.bread = this.bread == '' ? split[i] : this.bread + '/' + split[i]
            }

            this.currentFolderView.id = this.currentFolderView.parent_id
            this.getFolders()
            this.getFiles()
        },

        confirmDeleteFile(file) {
            this.$buefy.dialog.confirm({
                message: 'Desea eliminar este archivo?',
                type: 'is-danger',
                onConfirm: () => {
                    axios.delete(`/api/files/${file.id}`)
                    .then(response => {
                        // console.log(response)
                        this.getFiles()
                        this.$eventBus.$emit('file-deleted');
                    })
                }
            })
        },

        makeDroneFootage(file) {
            this.$buefy.dialog.confirm({
                message: 'Desea agregar este video como una captura de Drone?\n\rEl video aparecerá en la sección "Drone"',
                type: 'is-link',
                onConfirm: () => {
                    let params = {
                        'pop_id': this.pop.id,
                        'file_id': file.id
                    }
                    axios.put(`/api/addDrone`, params)
                    .then(response => {
                        console.log(response)
                        this.$eventBus.$emit('drone-added');
                        this.$buefy.toast.open({
                            message: 'Video agregado con exito',
                            type: 'is-success',
                            duration: 2000
                        })
                    })
                }
            })
        },
        
        switchGallery(value) {
            this.gallery = value
            if (value) {
                return document.documentElement.classList.add('is-clipped')
            } else {
                return document.documentElement.classList.remove('is-clipped')
            }
        },

        isVideo(file) {
            if (file.extension.toLowerCase() == 'mov' || file.extension.toLowerCase() == 'mp4' || file.extension.toLowerCase() == 'm4v' || file.extension.toLowerCase() == 'avi') {
                return true
            } else {
                return false
            }
        }
    },

    beforeDestroy() {
        this.$eventBus.$off('reload-files');
    }
}
</script>
