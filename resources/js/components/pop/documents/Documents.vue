<template>
    <section class="">
        <div class="columns">
            <div class="column has-text-weight-semibold has-text-dark is-size-3 has-text-left">
                Documentos
               

            </div>
        </div>
        <div class="columns">
            <div class="column">
                <div class="box">
                    <b-tabs :multiline="multiline" @input="setFolderTab()" position="is-centered" style="margin-bottom: 0px;" v-model="activeTab">
                        <template v-for="(tab, index) in tabs">
                            <b-tab-item :key="index" :label="tab.label" v-if="tab.displayed">
                            </b-tab-item>
                        </template>
                    </b-tabs>
                    <div class="columns" style="padding-bottom: 20px; padding-left: 24px;" v-if="!newFolderSelect && !newFolderSelectOffice">
                        <div class="column has-text-left">
                            <span v-if="bread">
                                <a @click="backOne">
                                    <font-awesome-icon :icon="['fas', 'angle-left']" class="is-link" size="2x" style="margin-bottom: -4px;">
                                    </font-awesome-icon>
                                </a>
                                <span class="is-size-6" style="margin-bottom: 25px;">
                                    {{ bread }}
                                </span>
                            </span>
                        </div>
                        <div class="column has-text-right">
                            <span class="" v-if="canUploadFile">
                                <button @click="isUploadModalActive = true" class="button">
                                    Subir archivos
                                </button>
                            </span>
                            <span class="" v-if="canUploadFile">
                                <button @click="isNewFolderModalActive = true" class="button">
                                    Nueva Carpeta
                                </button>
                            </span>
                            <span class="" v-if="canUploadFile">
                                <button :class="edit && 'is-danger'" @click="edit = !edit" class="button">
                                    Editar
                                </button>
                            </span>
                        </div>
                    </div>
                    <div class="columns" style="padding-bottom: 20px; padding-left: 24px;" v-if="foldersSgcTicket.length != 0 || newFolderSelectOffice ">
                        <span v-if="otherBread ">
                            <a @click="backFold">
                                <font-awesome-icon :icon="['fas', 'angle-left']" class="is-link" size="2x" style="margin-bottom: -4px;">
                                </font-awesome-icon>
                            </a>
                            <span class="is-size-6" style="margin-bottom: 25px;">
                                {{ otherBread }}
                            </span>
                        </span>
                    </div>
                    <div v-if="!newFolderSelect && !newFolderSelectOffice">
                        <div class="columns is-multiline" v-if="!edit ">
                            <div :key="folder.id" class="column is-3 tile is-parent" v-for="folder in folders">
                                <a @click="selected(folder)" class="box tile is-child" style="position: relative;">
                                    <font-awesome-icon :icon="['fas', 'folder-open']" class="has-text-smart" size="3x" style="padding-bottom: 5px;">
                                    </font-awesome-icon>
                                    <div class="is-size-6 has-text-weight-bold">
                                        {{ bread != '' ? folder.name : (folder.site && folder.site.nem_site) }}
                                    </div>
                                </a>
                            </div>
                            <div :key="file.id" class="column is-3 tile is-parent" v-for="file in files">
                                <a @click="openFile(file); load = file.id" class="box tile is-child" style="position: relative;">
                                    <font-awesome-icon :class="faFile(file.extension).type" :icon="['fas', faFile(file.extension).icon]" size="3x" style="padding-bottom: 5px;">
                                    </font-awesome-icon>
                                    <div class="is-size-7">
                                        {{ file.basename }}
                                    </div>
                                    <b-loading :active.sync="isLoading" :can-cancel="true" :is-full-page="false" v-if="load == file.id">
                                    </b-loading>
                                </a>
                            </div>
                        </div>
                        <div class="columns is-multiline" v-if="edit">
                            <div :key="folder.id" class="column is-3 tile is-parent" v-for="folder in folders">
                                <div class="box tile is-child" style="position: relative;">
                                    <a @click="confirmDeleteFolder(folder)" class="is-pulled-right has-text-danger">
                                        <font-awesome-icon :icon="['far', 'trash-alt']" size="2x" style="padding-bottom: 5px;">
                                        </font-awesome-icon>
                                    </a>
                                    <font-awesome-icon :icon="['fas', 'folder-open']" class="has-text-smart" size="3x" style="padding-bottom: 5px;">
                                    </font-awesome-icon>
                                    <div class="is-size-6 has-text-weight-bold">
                                        {{ bread != '' ? folder.name : (folder.site && folder.site.nem_site) }}
                                    </div>
                                </div>
                            </div>
                            <div :key="file.id" class="column is-3 tile is-parent" v-for="file in files">
                                <div class="box tile is-child" style="position: relative;">
                                    <a @click="confirmDeleteFile(file)" class="is-pulled-right has-text-danger">
                                        <font-awesome-icon :icon="['far', 'trash-alt']" size="1x" style="padding-bottom: 5px;">
                                        </font-awesome-icon>
                                    </a>
                                    <a @click="makeDroneFootage(file)" class="is-pulled-right has-text-link" v-if="isVideo(file)">
                                        <font-awesome-icon :icon="['fas', 'video']" size="1x" style="padding-bottom: 5px;">
                                        </font-awesome-icon>
                                    </a>
                                    <font-awesome-icon :class="faFile(file.extension).type" :icon="['fas', faFile(file.extension).icon]" size="3x" style="padding-bottom: 5px;">
                                    </font-awesome-icon>
                                    <div class="is-size-7">
                                        {{ file.basename }}
                                    </div>
                                    <b-loading :active.sync="isLoading" :can-cancel="true" :is-full-page="false" v-if="load == file.id">
                                    </b-loading>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- SGC - TICKET-->
                    <div v-if="folderSelectN == 9 || folderSelectN == 10">
                        <div class="columns is-multiline" ref="element">
                            <div :key="folder.id" class="column is-3 tile is-parent" v-for="folder in foldersSgcTicket" v-if="!selectFold">
                                <a @click="selectedFolderSgcTicket(folder.id)" class="box tile is-child" style="position: relative;">
                                    <font-awesome-icon :icon="['fas', 'folder-open']" class="has-text-smart" size="3x" style="padding-bottom: 5px;">
                                    </font-awesome-icon>
                                    <div class="is-size-6 has-text-weight-bold">
                                        {{ folder.id }}
                                    </div>
                                </a>
                            </div>
                            <div :key="folder.id" class="column is-3 tile is-parent" v-for="folder in type_files" v-if="selectFold && !selectFoldFiles">
                                <a @click="selectedFolderSgcTicketFiles(folder)" class="box tile is-child" style="position: relative;">
                                    <font-awesome-icon :icon="['fas', 'folder-open']" class="has-text-smart" size="3x" style="padding-bottom: 5px;">
                                    </font-awesome-icon>
                                    <div class="is-size-6 has-text-weight-bold">
                                        {{ folder.nombre }}
                                    </div>
                                </a>
                            </div>
                            <div :key="file.id" class="column is-3 tile is-parent" v-for="file in filesSgcTicket" v-if="selectFoldFiles">
                                <a :href="folderSelectN == 9? 'http://172.16.100.112/archivosSgc/'+file.nombre_archivo:'http://172.16.100.112/archivos/'+file.nombre_archivo" class="box tile is-child" style="position: relative;" target="_blank">
                                    <i :class="file.class" style="font-size: 2rem">
                                    </i>
                                    <div class="is-size-7">
                                        {{ file.nombre_archivo }}
                                    </div>
                                    <b-loading :active.sync="isLoading" :can-cancel="true" :is-full-page="false" v-if="load == file.id">
                                    </b-loading>
                                </a>
                            </div>
                            <section v-if="foldersSgcTicket.length== 0" class="section container" >
                                <div class="has-text-weight-normal">
                                   {{folderSelectN == 9 ? 'No hay SGC asociados a este Pop':'No hay Tickets asociados a este Pop'}}
                                </div>
                            </section>
                        </div>
                    </div>
                    <!-- ############################################################################################################################ -->
                     <!-- OfficeTrack-->
                    <div v-if="folderSelectN == 11">
                        <div class="columns is-multiline" ref="element">
                            <div :key="folder.id" class="column is-3 tile is-parent" v-for="folder in foldersOffice" >
                                <a @click="selectedFolderOffice(folder)" class="box tile is-child" style="position: relative;">
                                    <font-awesome-icon :icon="['fas', 'folder-open']" class="has-text-smart" size="3x" style="padding-bottom: 5px;">
                                    </font-awesome-icon>
                                    <div class="is-size-6 has-text-weight-bold">
                                        {{ folder.nombre }}
                                    </div>
                                </a>

                            </div>
                              <b-loading :is-full-page="true" :active.sync="isLoading" :can-cancel="true"></b-loading>
                            <div :key="file.id" class="column is-3 tile is-parent" v-for="file in filesRepositorioOffice">
                                <a  :href="'http://172.16.100.112/'+file.directorio+'/'+file.nombre" class="box tile is-child" style="position: relative;" target="_blank">
                                    <i class="fas fa-file" style="font-size: 2rem">
                                    </i>
                                    <div class="is-size-7">
                                        {{ file.nombre }}
                                    </div>
                                
                                </a>
                            </div>
                            
                        </div>
                       
                    </div>
                    <!-- ############################################################################################################################ -->
                    <div v-if="photos.length">
                        <hr/>
                        <div class="block">
                            <div class="is-size-5 has-text-weight-semibold">
                                Visor de fotos
                            </div>
                        </div>
                        <div class="container has-background-light">
                            <b-carousel :autoplay="false" :indicator="false" :overlay="gallery" @click="switchGallery(true)" icon-pack="fas" indicator-custom="" with-carousel-list="">
                                <b-carousel-item :key="i" class="has-text-centered" v-for="(item, i) in photos">
                                    <figure class="image">
                                        <img :src="item.image" style="max-height: 800px; width: auto; display: block;">
                                        </img>
                                    </figure>
                                </b-carousel-item>
                                <span @click="switchGallery(false)" class="modal-close is-large" v-if="gallery">
                                </span>
                                <template slot="list" slot-scope="props">
                                    <b-carousel-list :data="photos" :has-drag="true" @switch="props.switch($event, false)" as-indicator="" v-bind="al" v-model="props.active">
                                    </b-carousel-list>
                                </template>
                                <template slot="overlay">
                                    <div class="has-text-centered has-text-white">
                                        Hello i'am overlay!
                                    </div>
                                </template>
                            </b-carousel>
                        </div>
                    </div>
                    <section class="section container" v-if="noFiles &&  !newFolderSelect"> 
                        <div class="has-text-weight-normal">
                            No hay archivos en esta sección.
                        </div>
                    </section>
                </div>
            </div>
        </div>
        <b-modal :active.sync="isUploadModalActive" aria-modal="" aria-role="dialog" has-modal-card="" trap-focus="">
            <modal-upload :folder_id="currentFolderView.id" :foldertab="folderTab" :pop="pop" :user="user">
            </modal-upload>
        </b-modal>
        <b-modal :active.sync="isNewFolderModalActive" aria-modal="" aria-role="dialog" has-modal-card="" trap-focus="">
            <modal-new-folder :folder_id="currentFolderView.id" :foldertab="folderTab" :pop="pop" :user="user">
            </modal-new-folder>
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
            foldersSgcTicket:[],
            filesSgcTicket:[],
            activeTab: 0,
            currentFolder:null,
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

            type_files:[{'id':1,'nombre':'Cotizaciones'}, {'id':2,'nombre':'Informe Final'}, {'id':4,'nombre':'Guia despacho'}, {'id':6,'nombre':'LPU'}, {'id':7,'nombre':'Mail'}, {'id':5,'nombre':'Otros'}],
            selectFold:false,
            id_ticket_sgc:null,
            selectFoldFiles:false,
            otherBread:'',
            isFullPage:false,
            newFolderSelect:false,
            folderSelectN:'',
            foldersOffice:[],
            filesRepositorioOffice:[],
            newFolderSelectOffice:false,
            first_fold:'',
            second_fold:'',
            third_fold:'',



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
                  {
                    id: 9,
                    label: 'SGC',
                    content: 'Archivos SGC: Lorem ipsum dolor sit amet.',
                    displayed: true,
                   
                },
                {
                    id: 10, 
                    label: 'Ticketera',
                    content: 'Archivos Ticketera: Lorem ipsum dolor sit amet.',
                    displayed: true,
                  
                },
                {
                    id: 11, 
                    label: 'OfficeTrack',
                    content: 'Archivos Ticketera: Lorem ipsum dolor sit amet.',
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
        setFolderTab(tabId) {

            this.currentFolder = this.folderTab.id;
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
            console.log(this.folderTab.id )
            if(this.folderTab.id == 11 ){
                    this.isLoading = true
                    this.foldersSgcTicket=[]
                    this.filesRepositorioOffice= []
                    this.newFolderSelectOffice = true;
                    this.newFolderSelect = false;
                    this.folderSelectN = this.folderTab.id;

                    axios.get(`/api/getFoldersOfficeTrackPopZone/?zona_id=${this.pop.zona_id}`).then(response=>{
                      this.foldersOffice = response.data
                      this.isLoading = false
                      
                    })
            }
            this.otherBread = ''
            if(this.folderTab.id== 9 || this.folderTab.id == 10){
                this.foldersOffice = [];
                this.newFolderSelect = true;
                this.selectFold = false;
                this.selectFoldFiles = false;
                this.folderSelectN = this.folderTab.id;
                this.newFolderSelectOffice = false;
                this.isLoading = true
                this.filesRepositorioOffice= []
                this.foldersOffice = []

                axios.get(`/api/getFoldersSgcPop/?pop_id=${this.pop.id}&tab_select=${this.folderTab.id}`).then(response=>{
                    this.foldersSgcTicket = response.data
                    this.isLoading = false
                })

            }else{

              
             
                    this.newFolderSelectOffice = false;
                    this.newFolderSelect = false;
                    this.foldersSgcTicket=[]
                    this.foldersOffice = [];
                      this.folderSelectN = this.folderTab.id;

               
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
                

                 

                
            }
          
        },
        selectedFolderSgcTicket:function(id){
             this.selectFold = true;
             this.id_ticket_sgc = id;
             this.otherBread = id
        
            
        },
        selectedFolderSgcTicketFiles:function(type_file){
              this.otherBread = this.otherBread +'/' + type_file.nombre
              axios.get(`/api/filesSgcTicketPop?id=${this.id_ticket_sgc}&tab_select=${this.folderTab.id}&type_file=${type_file.id}`).then(response=>{

                    this.filesSgcTicket = response.data
                    this.selectFoldFiles = true;
              })
        },
        selectedFolderOffice:function(folder){
             this.isLoading = true
             if(this.first_fold == ''){
                this.first_fold = folder.id
             }
             if(this.second_fold == ''){
                this.second_fold = folder.id
             }
             if(this.third_fold == ''){
                this.third_fold = folder.id
             }
             

             if(this.otherBread != ''){
                   this.otherBread = this.otherBread +'/' + folder.nombre
               }else{
                 this.otherBread = folder.nombre
               }
            
            axios.get(`/api/getSubFolderRepositorio?subcarpeta_id=${folder.id}`).then(response=>{
                this.foldersOffice = response.data;
                this.filesRepositorioOffice= []
                this.isLoading = false
                
                
            })
            if(folder.nombre == 'Fotos' || folder.nombre == 'Informes' || folder.nombre == 'Foto' || folder.nombre == 'Informe'){
                 
                this.getFilesOficetrack(folder.id)
            }else{
                this.filesRepositorioOffice= []
            }
        },
        getFilesOficetrack(folder){
            this.isLoading = true
            axios.get(`/api/getFilesSubFolderRepositorio?carpeta_id=${folder}`).then(response=>{
                this.filesRepositorioOffice = response.data;
                
            }).finally(() => {
                 this.isLoading = false
            });
        },
        backFold(){
            if(this.newFolderSelectOffice){
               if(this.third_fold != ''){
                   this.third_fold = '';
                   axios.get(`/api/getSubFolderRepositorio?subcarpeta_id=${this.second_fold}`).then(response=>{
                    this.foldersOffice = response.data;
                    this.filesRepositorioOffice= []
                    this.isLoading = false
                
                
                   })
               }else{
                if(this.second_fold){
                    this.second_fold = ''
                   this.getFolders()
                }
               }
            }else{
                if(this.selectFoldFiles){
                   this.otherBread =  this.id_ticket_sgc;
                   this.selectFoldFiles = false;
                   this.filesSgcTicket = [];
                }else{
                  if(this.selectFold){
                   this.selectFold = false;
                   this.otherBread = '';
                  }
                }
            }
          
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
