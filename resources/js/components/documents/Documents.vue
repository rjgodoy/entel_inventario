<template>
    <div>
        <section class="section has-background-light" style="padding: auto 0 auto 0;">
            <div class="columns">
                <div class="column" style="margin-top: -24px; margin-bottom: -48px">
                    <b-tabs v-model="activeTab" type="is-toggle" expanded class="is-paddingless">
                        <b-tab-item v-for="(tab, index) in tabs" :key="index" v-if="tab.displayed" :label="tab.label" ></b-tab-item>
                    </b-tabs>
                </div>
                
            </div>
        </section>

        <section class="section" style="padding-top: 0px">
            <div class="columns tile is-ancestor">
                <aside class="column is-2 tile is-parent" v-if="baseTabs[activeTab].asideView">
                    <div class="box tile is-child">
                        <!-- <div class="column has-text-right" v-if="canCreateFolder ">
                            <span class="">
                                <button class="button" @click="isNewRootFolderModalActive = true">Nueva Carpeta</button>
                            </span>

                            <span class="">
                                <button class="button" :class="edit && 'is-danger'" @click="edit = !edit">Editar</button>
                            </span>
                        </div> -->

                        <div class="field">
                            <p class="control has-icons-left has-icons-right">
                            <input 
                                class="input"  
                                @keyup="getSideFolders" 
                                @input="meta.current_page = 1"
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

                        <div class="field">
                            <table class="table">
                                <tbody>
                                    <tr v-for="folder in sideFolders" :key="folder.id">
                                        <td :class="folder.id == currentFolderView.id && 'has-background-link has-text-white'">
                                            <a class="" @click="selectedSide(folder)">
                                                <div class="columns" :class="folder.id == currentFolderView.id ? 'has-text-white' : 'has-text-grey-dark'">
                                                    <div class="column is-2">
                                                        <font-awesome-icon
                                                            :icon="['fas', 'folder-open']"
                                                            class="has-text-smart"
                                                            size="2x"
                                                            />
                                                    </div>
                                                    <div class="column" v-if="folder.site">
                                                        <p class="has-text-weight-semibold is-size-7">{{ folder.site ? folder.site.nem_site : (folder.pop ? folder.pop.sites[0].nem_site : '') }}</p>
                                                        <p class="has-text-weight-normal is-size-6">{{ folder.site ? folder.site.nombre : (folder.pop ? folder.pop.sites[0].nombre : '') }}</p>
                                                    </div>
                                                    <div class="column" v-if="!folder.site">
                                                        <p class="has-text-weight-semibold is-size-7">{{ folder.name }}</p>
                                                        <p class="has-text-weight-normal is-size-6">{{ folder.created_at }}</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="level">
                                <nav class="level-left pagination" role="navigation" aria-label="pagination">
                                    <vue-pagination  
                                        :pagination="meta"
                                        @paginate="getSideFolders()"
                                        :offset="1">
                                    </vue-pagination>
                                </nav>
                            </div>
                        </div>
                    </div>
                </aside>

                <div class="column tile is-parent">
                    <div class="box tile is-child">

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

                            <div class="column has-text-right" v-if="folders.length || files.length || !baseTabs[activeTab].asideView || currentFolderView.id">
                                <span class="" v-if="canUploadFile">
                                    <button class="button" @click="isUploadModalActive = true">Subir archivos</button>
                                </span>

                                <span class="" v-if="canCreateFolder">
                                    <button class="button" @click="isNewFolderModalActive = true">Nueva Carpeta</button>
                                </span>

                                <span class="" v-if="canCreateFolder">
                                    <button class="button" :class="edit && 'is-danger'" @click="edit = !edit">Editar</button>
                                </span>
                            </div>
                        </div>
                        

                        <div class="columns is-multiline" v-if="!edit">
                            <div class="column is-2 tile is-parent" v-for="folder in folders" :key="folder.id">
                                <a class="box tile is-child" @click="selected(folder)">
                                    <font-awesome-icon
                                        :icon="['fas', 'folder-open']"
                                        class="has-text-smart"
                                        size="3x"
                                        style="padding-bottom: 5px;"/>
                                    <div class="is-size-6 has-text-weight-normal" style="margin-bottom: 0">{{ folder.name }}</div>
                                </a>
                            </div>

                            <div class="column is-2 tile is-parent" v-for="file in files" :key="file.id">
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
                            <div class="column is-2 tile is-parent" v-for="folder in folders" :key="folder.id">
                                <div class="box tile is-child">
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
                                    <div class="is-size-6 has-text-weight-normal">{{ folder.name }}</div>
                                </div>
                            </div>

                            <div class="column is-2 tile is-parent" v-for="file in files" :key="file.id">
                                <div class="box tile is-child" style="position: relative;">
                                    <a class="is-pulled-right has-text-danger" @click="confirmDeleteFile(file)">
                                        <font-awesome-icon 
                                            :icon="['far', 'trash-alt']"
                                            size="2x"
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
                                <div class="is-size-5 has-text-weight-semibold">Visor de documentos</div>
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

                        <section v-if="noFiles" class="section container columns is-vcentered">
                            <div class="column has-text-weight-normal has-text-grey-light">No hay archivos.</div>
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
                    :folder="currentFolderView"
                    :folderTab="folderTab"
                    :user="user"
                    />
            </b-modal>

            <b-modal :active.sync="isNewFolderModalActive"
                has-modal-card
                trap-focus
                aria-role="dialog"
                aria-modal>
                <modal-new-folder 
                    :folder="currentFolderView"
                    :folderTab="folderTab"
                    :user="user"
                    />
            </b-modal>

            <b-modal :active.sync="isNewRootFolderModalActive"
                has-modal-card
                trap-focus
                aria-role="dialog"
                aria-modal>
                <modal-new-root-folder 
                    :folderTab="folderTab"
                    :user="user"
                    />
            </b-modal>
        </section>
    </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faFolderOpen, faFilePdf, faFileExcel, faFileImage, faFile, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
// import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { faTrashAlt as farTrashAlt } from '@fortawesome/free-regular-svg-icons'
library.add(faSearch, faFolderOpen, faFilePdf, faFileExcel, faFileImage, faFile, faAngleLeft, farTrashAlt, faAngleRight);

export default {
    components: {
        ModalUpload: () => import(/* webpackChunkName: "chunks/documents/modals/upload"*/'./modals/ModalUpload'),
        ModalNewFolder: () => import(/* webpackChunkName: "chunks/documents/modals/newFolder"*/'./modals/ModalNewFolder'),
        ModalNewRootFolder: () => import(/* webpackChunkName: "chunks/documents/modals/newRootFolder"*/'./modals/ModalNewRootFolder'),
        VuePagination: () => import(/* webpackChunkName: "chunks/helpers/vuePagination"*/'../helpers/VuePagination'),
    },
    props : [
        'user',
    ],
    data() {
        return { 
            sideFolders: [],
            meta: {
                total: 0,
                per_page: 20,
                from: 1,
                to: 0,
                current_page: 1
            },
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
            canViewProcedimientosTab: false,
            canViewManualesTab: false,
            canCreateManuales: false,
            canCreateProcedimientos: false,

            searchText: '',
            edit: false,

            isUploadModalActive: false,
            isNewFolderModalActive: false,
            isNewRootFolderModalActive: false,

            currentFolderView: {
                id: null,
                parent_id: null
            },
            currentSideFolderView: {
                id: null,
                parent_id: null
            },
            // parentViewId: null,

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
        this.getSideFolders()
    },

    computed: {
        folderTab() {
            return this.baseTabs[this.activeTab]
        },

        baseTabs() {
            return [
                {
                    id: 0,
                    label: 'Informes',
                    content: 'Informes: Lorem ipsum dolor sit amet.',
                    displayed: true,
                    asideView: true
                },
                {
                    id: 1,
                    label: 'Documentos',
                    content: 'Documentos: Lorem ipsum dolor sit amet.',
                    displayed: true,
                    asideView: true
                },
                {
                    id: 2,
                    label: 'Fotos',
                    content: 'Fotos: Lorem ipsum dolor sit amet.',
                    displayed: true,
                    asideView: true
                },
                {
                    id: 3,
                    label: 'Construcción',
                    content: 'Construcción: Lorem ipsum dolor sit amet.',
                    displayed: true,
                    asideView: true
                },
                {
                    id: 4,
                    label: 'Obras Civiles',
                    content: 'Obras Civiles: Lorem ipsum dolor sit amet.',
                    displayed: true,
                    asideView: true
                },
                {
                    id: 5,
                    label: 'CAM',
                    content: 'CAM: Lorem ipsum dolor sit amet.',
                    displayed: true,
                    asideView: true
                },
                {
                    id: 6,
                    label: 'Levantamientos Ingeniería',
                    content: 'Levantamientos Ingeniería: Lorem ipsum dolor sit amet.',
                    displayed: true,
                    asideView: true
                },
                {
                    id: 7,
                    label: 'Gestión Ambiental',
                    content: 'Gestión Ambiental: Lorem ipsum dolor sit amet.',
                    displayed: true,
                    asideView: true
                },
                {
                    id: 8,
                    label: 'Procedimientos',
                    content: 'Gestión Ambiental: Lorem ipsum dolor sit amet.',
                    displayed: this.canViewProcedimientosTab,
                    asideView: false
                },
                {
                    id: 9,
                    label: 'Manuales',
                    content: 'Gestión Ambiental: Lorem ipsum dolor sit amet.',
                    displayed: this.canViewManualesTab,
                    asideView: false
                },
            ]
        },

        tabs() {
            return [...this.baseTabs]
        },

        noFiles() {
            return !this.folders.length && !this.files.length && !this.photos.length
        },
    },

    watch: {
        isNewFolderModalActive(val) {
            val == false && this.getFolders()
        },

        isNewRootFolderModalActive(val) {
            val == false && this.getSideFolders()
        },

        activeTab(val) {
            console.log(this.activeTab)
            console.log(this.baseTabs[val])
            this.setFolderTab()
        }
    },
    
    methods: {
        setFolderTab() {
            // Reload the breadcrumb
            this.bread = ''

            // Set files & folders to empty
            this.folders = []
            this.files = []
            this.photos = []

            // Get the files & folders if active tab is "Procedimientos" or "Manuales", else get side folders
            this.activeTab == 8 || this.activeTab == 9 ? this.getFolders() : this.getSideFolders()

            this.currentFolderView= {
                id: null,
                parent_id: null
            }
            this.currentSideFolderView= {
                id: null,
                parent_id: null
            }
            this.meta.current_page = 1
        },

        selectedSide(folder) {
            this.currentFolderView = folder
            // this.folders.length && this.currentFolderView.parent_id ? this.setBreadcrum(folder.name) : this.bread = ''
            this.getFolders()
            this.getFiles()
            this.currentSideFolderView = folder
        },

        selected(folder) {
            // this.parentViewId = this.currentFolderView.id
            this.currentFolderView = folder
            this.folders.length && this.currentFolderView.parent_id ? this.setBreadcrum(folder.name) : this.bread = ''
            this.getFolders()
            this.getFiles()
        },

        getSideFolders() {
            // console.log(this.currentFolderView.id)
            let params = {
                'page': this.meta.current_page,
                'folder_name': this.folderTab.label,
                // 'folder_id': this.currentFolderView.id,
                'text': this.searchText,
            }
            axios.get(`/api/sideFolders`, { params })
            .then((response) => {
                // console.log(response.data)
                this.meta = response.data.meta
                this.sideFolders = response.data.folders
                this.canCreateFolder = response.data.can.create
                this.canDeleteFolder = response.data.can.delete
                this.canViewProcedimientosTab = response.data.can.viewProcedimientos
                this.canViewManualesTab = response.data.can.viewManuales
                this.canCreateProcedimientos = response.data.can.createProcedimientos
                this.canCreateManuales = response.data.can.createManuales
                
            })
        },

        getFolders() {
            // console.log(this.currentFolderView.id)
            let params = {
                'folder_name': this.folderTab.label,
                'folder_id': this.currentFolderView.id,
                // 'text': this.searchText,
            }
            axios.get(`/api/folders`, { params })
            .then((response) => {
                this.folders = (this.activeTab == 8 || this.activeTab == 9) && !this.currentFolderView.id ? response.data.folders[0].subfolders : response.data.folders
                this.canCreateFolder = response.data.can.create
                this.canDeleteFolder = response.data.can.delete
                this.canViewProcedimientosTab = response.data.can.viewProcedimientos
                this.canViewManualesTab = response.data.can.viewManuales
                console.log(this.currentFolderView)
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
            axios.get(`/api/files`, { params })
            .then(response => {
                response.data.files.forEach(element => {
                    this.files.push(element)
                    if (element.extension == 'jpg' 
                        || element.extension == 'png' 
                        || element.extension == 'jpeg' 
                        || element.extension == 'tiff') {
                        element.image = '/storage/'+element.route
                        this.photos.push(element)
                    } 
                    else {
                        console.log(element)
                        element.image = '/storage/'+element.route
                        this.photos.push(element)
                        
                    }
                })
                this.canUploadFile = response.data.can.upload
                this.canDeleteFile = response.data.can.delete
            })
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
                //     // For Firefox it is necessary to delay revoking the ObjectURL
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
            // console.log(folder)
            this.$buefy.dialog.confirm({
                message: 'Desea eliminar esta carpeta?',
                type: 'is-danger',
                onConfirm: () => {
                    var params = {
                        'user_id': this.user.id,
                    }
                    axios.delete(`/api/folders/${folder.id}`, { params })
                    .then(response => {
                        // console.log(response)
                        this.getFolders()
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
                        console.log(response)
                        this.getFiles()
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

        clearSearch() {
            this.searchText = ''
            // this.popSearch = []
            // this.selectedPop = null
            // this.selectedPops = []
            // this.selectedCrm = null
            // this.selectedZona = null
            this.getSideFolders()
        },
    },

    beforeDestroy() {
        this.$eventBus.$off('reload-files');
    }
}
</script>
