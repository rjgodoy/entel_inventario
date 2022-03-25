<template>
    <div>
        <section class="section has-background-light" style="padding: auto 0 auto 0;">
            <div class="columns">
                <div class="column" style="margin-top: -24px; margin-bottom: -48px">
                    <b-tabs class="is-paddingless" expanded="" type="is-toggle" v-model="activeTab">
                        <b-tab-item :key="index" :label="tab.label" @click.prevent="getInfo" v-for="(tab, index) in tabs" v-if="tab.displayed">
                        </b-tab-item>
                    </b-tabs>
                </div>
            </div>
        </section>
        <section class="section" style="padding-top: 0px" v-if="activeTab != 11 && activeTab !=10 && activeTab !=12">
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
                                <input @input="meta.current_page = 1" @keyup="getSideFolders" arial-label="Buscar" autofocus="" class="input" placeholder="Buscar..." type="text" v-model="searchText">
                                    <span class="icon is-small is-left">
                                        <font-awesome-icon icon="search">
                                        </font-awesome-icon>
                                    </span>
                                    <span class="icon is-small is-right">
                                        <button @click="clearSearch" class="delete">
                                        </button>
                                    </span>
                                </input>
                            </p>
                        </div>
                        <div class="field">
                            <table class="table">
                                <tbody>
                                    <tr :key="folder.id" v-for="folder in sideFolders">
                                        <td :class="folder.id == currentFolderView.id && 'has-background-link has-text-white'">
                                            <a @click="selectedSide(folder)" class="">
                                                <div :class="folder.id == currentFolderView.id ? 'has-text-white' : 'has-text-grey-dark'" class="columns">
                                                    <div class="column is-2">
                                                        <font-awesome-icon :icon="['fas', 'folder-open']" class="has-text-smart" size="2x">
                                                        </font-awesome-icon>
                                                    </div>
                                                    <div class="column" v-if="folder.site">
                                                        <p class="has-text-weight-semibold is-size-7">
                                                            {{ folder.site ? folder.site.nem_site : (folder.pop ? folder.pop.sites[0].nem_site : '') }}
                                                        </p>
                                                        <p class="has-text-weight-normal is-size-6">
                                                            {{ folder.site ? folder.site.nombre : (folder.pop ? folder.pop.sites[0].nombre : '') }}
                                                        </p>
                                                    </div>
                                                    <div class="column" v-if="!folder.site">
                                                        <p class="has-text-weight-semibold is-size-7">
                                                            {{ folder.name }}
                                                        </p>
                                                        <p class="has-text-weight-normal is-size-6">
                                                            {{ folder.created_at }}
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="level">
                                <nav aria-label="pagination" class="level-left pagination" role="navigation">
                                    <vue-pagination :offset="1" :pagination="meta" @paginate="getSideFolders()">
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
                                    <a @click="backOne" v-if="bread">
                                        <font-awesome-icon :icon="['fas', 'angle-left']" class="is-link" size="2x" style="margin-bottom: -4px;">
                                        </font-awesome-icon>
                                    </a>
                                    <span class="is-size-6" style="margin-bottom: 25px;">
                                        {{ bread }}
                                    </span>
                                </span>
                            </div>
                            <div class="column has-text-right" v-if="folders.length || files.length || !baseTabs[activeTab].asideView || currentFolderView.id">
                                <span class="" v-if="canUploadFile">
                                    <button @click="isUploadModalActive = true" class="button">
                                        Subir archivos
                                    </button>
                                </span>
                                <span class="" v-if="canCreateFolder">
                                    <button @click="isNewFolderModalActive = true" class="button">
                                        Nueva Carpeta
                                    </button>
                                </span>
                                <span class="" v-if="canCreateFolder">
                                    <button :class="edit && 'is-danger'" @click="edit = !edit" class="button">
                                        Editar
                                    </button>
                                </span>
                            </div>
                        </div>
                        <div class="columns is-multiline" v-if="!edit">
                            <div :key="folder.id" class="column is-2 tile is-parent" v-for="folder in folders">
                                <a @click="selected(folder)" class="box tile is-child">
                                    <font-awesome-icon :icon="['fas', 'folder-open']" class="has-text-smart" size="3x" style="padding-bottom: 5px;">
                                    </font-awesome-icon>
                                    <div class="is-size-6 has-text-weight-normal" style="margin-bottom: 0">
                                        {{ folder.name }}
                                    </div>
                                </a>
                            </div>
                            <div :key="file.id" class="column is-2 tile is-parent" v-for="file in files">
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
                            <div :key="folder.id" class="column is-2 tile is-parent" v-for="folder in folders">
                                <div class="box tile is-child">
                                    <a @click="confirmDeleteFolder(folder)" class="is-pulled-right has-text-danger">
                                        <font-awesome-icon :icon="['far', 'trash-alt']" size="2x" style="padding-bottom: 5px;">
                                        </font-awesome-icon>
                                    </a>
                                    <font-awesome-icon :icon="['fas', 'folder-open']" class="has-text-smart" size="3x" style="padding-bottom: 5px;">
                                    </font-awesome-icon>
                                    <div class="is-size-6 has-text-weight-normal">
                                        {{ folder.name }}
                                    </div>
                                </div>
                            </div>
                            <div :key="file.id" class="column is-2 tile is-parent" v-for="file in files">
                                <div class="box tile is-child" style="position: relative;">
                                    <a @click="confirmDeleteFile(file)" class="is-pulled-right has-text-danger">
                                        <font-awesome-icon :icon="['far', 'trash-alt']" size="2x" style="padding-bottom: 5px;">
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
                        <div v-if="photos.length">
                            <hr/>
                            <div class="block">
                                <div class="is-size-5 has-text-weight-semibold">
                                    Visor de documentos
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
                        <section class="section container columns is-vcentered" v-if="noFiles">
                            <div class="column has-text-weight-normal has-text-grey-light">
                                No hay archivos.
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <b-modal :active.sync="isUploadModalActive" aria-modal="" aria-role="dialog" has-modal-card="" trap-focus="">
                <modal-upload :folder="currentFolderView" :foldertab="folderTab" :user="user">
                </modal-upload>
            </b-modal>
            <b-modal :active.sync="isNewFolderModalActive" aria-modal="" aria-role="dialog" has-modal-card="" trap-focus="">
                <modal-new-folder :folder="currentFolderView" :foldertab="folderTab" :user="user">
                </modal-new-folder>
            </b-modal>
            <b-modal :active.sync="isNewRootFolderModalActive" aria-modal="" aria-role="dialog" has-modal-card="" trap-focus="">
                <modal-new-root-folder :foldertab="folderTab" :user="user">
                </modal-new-root-folder>
            </b-modal>
        </section>
        <section class="section" style="padding-top: 0px" v-if="activeTab ==10 ">
            <div class="columns tile is-ancestor">
                <aside class="column is-2 tile is-parent">
                    <div class="box tile is-child">
                        <div class="field">
                            <p class="control has-icons-left has-icons-right">
                                <input @input="solicitudes.current_page = 1" @keyup="getOthersFoldersTab" arial-label="Buscar" autofocus="" class="input" placeholder="Buscar..." type="text" v-model="searchRequestSgc">
                                    <span class="icon is-small is-left">
                                        <font-awesome-icon icon="search">
                                        </font-awesome-icon>
                                    </span>
                                    <span class="icon is-small is-right">
                                        <button class="delete">
                                        </button>
                                    </span>
                                </input>
                            </p>
                        </div>
                        <div class="field">
                            <table class="table">
                                <tbody>
                                    <tr v-for="solicitud in solicitudes.data">
                                        <td :class="solicitud.id == solicitud_folder_id && 'has-background-link has-text-white'">
                                            <a   @click="getFilesSgc(solicitud)"  >
                                                <div  :class="solicitud.id == solicitud_folder_id ? 'has-text-white' : 'has-text-grey-dark'" class="columns">
                                                    <div class="column is-2">
                                                        <font-awesome-icon :icon="['fas', 'folder-open']" class="has-text-smart" size="2x">
                                                        </font-awesome-icon>
                                                    </div>
                                                    <div class="column">
                                                        <p class="has-text-weight-semibold is-size-7">
                                                            {{ solicitud.id }}
                                                        </p>
                                                        <p class="has-text-weight-normal is-size-6">
                                                            {{ solicitud.created_at }}
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="level">
                                <nav aria-label="pagination" class="level-left pagination" role="navigation">
                                    <vue-pagination :offset="1" :pagination="solicitudes" @paginate="getOthersFoldersTab()">
                                    </vue-pagination>
                                </nav>
                            </div>
                        </div>
                    </div>
                </aside>
                <div class="column tile is-parent">
                    <div class="box tile is-child">
                        <div class="columns is-multiline">
                            <div class="column is-2 tile is-parent" v-for="file in filesSgc">
                                <div class="box tile is-child" style="position: relative;">
                                     <a  :href="'http://172.16.100.112/archivosSgc/'+file.nombre_archivo" target="_blank"  style="position: relative;">
                                        <font-awesome-icon :class="faFile(file.extension).type" :icon="['fas', faFile(file.extension).icon]" size="3x" style="padding-bottom: 5px;">
                                        </font-awesome-icon>

                                        <div class="is-size-7">
                                            {{ file.nombre_archivo }}
                                        </div>
                                        <b-loading :active.sync="isLoading" :can-cancel="true" :is-full-page="false" v-if="load == file.id">
                                        </b-loading>
                                    </a>
                                </div>
                            </div>
                             <section class="section container columns is-vcentered" v-if="filesSgc.length == 0">
                            <div class="column has-text-weight-normal has-text-grey-light">
                                No hay archivos.
                            </div>
                        </section>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section" style="padding-top: 0px" v-if="activeTab ==11 ">
            <div class="columns tile is-ancestor">
                <aside class="column is-2 tile is-parent">
                    <div class="box tile is-child">
                        <div class="field">
                            <p class="control has-icons-left has-icons-right">
                                <input @input="tickets.current_page = 1" @keyup="getNumberTicket" arial-label="Buscar" autofocus="" class="input" placeholder="Buscar..." type="text" v-model="searchRequestTicket">
                                    <span class="icon is-small is-left">
                                        <font-awesome-icon icon="search">
                                        </font-awesome-icon>
                                    </span>
                                    <span class="icon is-small is-right">
                                        <button class="delete">
                                        </button>
                                    </span>
                                </input>
                            </p>
                        </div>
                        <div class="field">
                            <table class="table">
                                <tbody>
                                    <tr v-for="ticket in tickets.data">
                                        <td :class="ticket.id == ticket_folder_id && 'has-background-link has-text-white'">
                                            <a   @click="getFilesTicket(ticket)"  >
                                                <div  :class="ticket.id == ticket_folder_id ? 'has-text-white' : 'has-text-grey-dark'" class="columns">
                                                    <div class="column is-2">
                                                        <font-awesome-icon :icon="['fas', 'folder-open']" class="has-text-smart" size="2x">
                                                        </font-awesome-icon>
                                                    </div>
                                                    <div class="column">
                                                        <p class="has-text-weight-semibold is-size-7">
                                                            {{ ticket.id }}
                                                        </p>
                                                        <p class="has-text-weight-normal is-size-6">
                                                            {{ ticket.created_at }}
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="level">
                                <nav aria-label="pagination" class="level-left pagination" role="navigation">
                                    <vue-pagination :offset="1" :pagination="tickets" @paginate="getNumberTicket()">
                                    </vue-pagination>
                                </nav>
                            </div>
                        </div>
                    </div>
                </aside>
                <div class="column tile is-parent">
                    <div class="box tile is-child">
                        <div class="columns is-multiline">
                            <div class="column is-2 tile is-parent" v-for="file in filesTicket">
                                <div class="box tile is-child" style="position: relative;">
                                     <a  :href="'http://172.16.100.112/archivos/'+file.nombre_archivo" target="_blank"  style="position: relative;">
                                        <font-awesome-icon :class="faFile(file.extension).type" :icon="['fas', faFile(file.extension).icon]" size="3x" style="padding-bottom: 5px;">
                                        </font-awesome-icon>

                                        <div class="is-size-7">
                                            {{ file.nombre_archivo }}
                                        </div>
                                        <b-loading :active.sync="isLoading" :can-cancel="true" :is-full-page="false" v-if="load == file.id">
                                        </b-loading>
                                    </a>
                                </div>
                            </div>
                              <section class="section container columns is-vcentered" v-if="filesTicket.length == 0">
                            <div class="column has-text-weight-normal has-text-grey-light">
                                No hay archivos.
                            </div>
                        </section>
                        </div>
                    </div>
                </div>
            </div>
        </section>
          <section class="section" style="padding-top: 0px" v-if="activeTab ==12 ">
            <div class="columns tile is-ancestor">
                <aside class="column is-2 tile is-parent">
                    <div class="box tile is-child">
                        <div class="field">
                            <p class="control has-icons-left has-icons-right">
                                <input @input="foldersRepositorioOfficeTrack.current_page = 1" @keyup="getFoldersOfficeTrack" arial-label="Buscar" autofocus="" class="input" placeholder="Buscar..." type="text" v-model="searchFolderRepositorio">
                                    <span class="icon is-small is-left">
                                        <font-awesome-icon icon="search">
                                        </font-awesome-icon>
                                    </span>
                                    <span class="icon is-small is-right">
                                        <button class="delete">
                                        </button>
                                    </span>
                                </input>
                            </p>
                        </div>
                        <div class="field">
                            <table class="table">
                                <tbody>
                                    <tr v-for="folder in foldersRepositorioOfficeTrack.data">
                                        <td :class="folder.id == folder_repostorio_id && 'has-background-link has-text-white'">
                                            <a   @click="getSubFolder(folder)"  >
                                                <div  :class="folder.id == folder_repostorio_id ? 'has-text-white' : 'has-text-grey-dark'" class="columns">
                                                    <div class="column is-2">
                                                        <font-awesome-icon :icon="['fas', 'folder-open']" class="has-text-smart" size="2x">
                                                        </font-awesome-icon>
                                                    </div>
                                                    <div class="column">
                                                        <p class="has-text-weight-semibold is-size-7">
                                                            {{ folder.nombre }}
                                                        </p>
                                                        <p class="has-text-weight-normal is-size-6">
                                                            {{ folder.created_at }}
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="level">
                                <nav aria-label="pagination" class="level-left pagination" role="navigation">
                                    <vue-pagination :offset="1" :pagination="foldersRepositorioOfficeTrack" @paginate="getFoldersOfficeTrack()">
                                    </vue-pagination>
                                </nav>
                            </div>
                        </div>
                    </div>
                </aside>
                <div class="column tile is-parent">
                    <div class="box tile is-child">
                        <div class="columns is-multiline">
                             <div class="column is-2 tile is-parent"  v-for="folder in subFoldersRepositorio">
                               
                                    <a @click="getSubFolder(folder)" class="box tile is-child">
                                    <font-awesome-icon :icon="['fas', 'folder-open']" class="has-text-smart" size="3x" style="padding-bottom: 5px;">
                                    </font-awesome-icon>
                                    <div class="is-size-6 has-text-weight-normal">
                                        {{ folder.nombre }}
                                    </div>
                                    </a>
                               
                            </div>
                            <div class="column is-2 tile is-parent" v-for="file in filesRepositorioOffice">
                                <div class="box tile is-child" style="position: relative;">
                                     <a  :href="'http://172.16.100.112/'+file.directorio+'/'+file.nombre" target="_blank"  style="position: relative;">
                                        <font-awesome-icon :class="faFile(file.nombre).type" :icon="['fas', faFile(file.nombre).icon]" size="3x" style="padding-bottom: 5px;">
                                        </font-awesome-icon>

                                        <div class="is-size-7">
                                            {{ file.nombre }}
                                        </div>
                                        <b-loading :active.sync="isLoading" :can-cancel="true" :is-full-page="false" v-if="load == file.id">
                                        </b-loading>
                                    </a>
                                </div>
                            </div>
                              <section class="section container columns is-vcentered" v-if="filesRepositorioOffice.length == 0">
                            <div class="column has-text-weight-normal has-text-grey-light">
                                No hay archivos.
                            </div>
                        </section>
                        </div>
                    </div>
                </div>
            </div>
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
            filesSgc:[],
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
            solicitudes: {
                total: 0,
                current_page: 1,
                per_page: 10,

                from: 2,
                to: 0
            },
            tickets: {
                total: 0,
                current_page: 1,
                per_page: 10,

                from: 2,
                to: 0
            },
            foldersRepositorioOfficeTrack: {
                total: 0,
                current_page: 1,
                per_page: 10,

                from: 2,
                to: 0
            },
            
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
            searchRequestSgc:'',
            solicitud_folder_id:'',
            ticket_folder_id:'',
            filesTicket:[],
            searchRequestTicket:'',
            folder_repostorio_id:'',
            searchFolderRepositorio:'',
            folder_principal_id:'',
            subFoldersRepositorio:[],
            filesRepositorioOffice:[]

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
                {
                    id: 10,
                    label: 'SGC',
                    content: 'Archivos SGC: Lorem ipsum dolor sit amet.',
                    displayed: this.canViewManualesTab,
                    asideView: false
                },
                {
                    id: 11, 
                    label: 'Ticketera',
                    content: 'Archivos Ticketera: Lorem ipsum dolor sit amet.',
                    displayed: this.canViewManualesTab,
                    asideView: false
                },
                 {
                    id: 12,
                    label: 'OfficeTrack',
                    content: 'Archivos OfficeTrack: Lorem ipsum dolor sit amet.',
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
            // console.log(this.activeTab)
            // console.log(this.baseTabs[val])
             if(this.activeTab == 10 || this.activeTab == 11 || this.activeTab == 12){
               if(this.activeTab == 10){
                 this.getOthersFoldersTab()
                 this.tickets = []
                 this.filesTicket = []
                 this.ticket_folder_id=''
               }else{
                if(this.activeTab==11){
                  this.getNumberTicket()
                  this.solicitudes = []
                  this.filesSgc=[]
                  this.solicitud_folder_id=''
                }else{
                    if(this.activeTab==12){

                        this.getFoldersOfficeTrack()
                    }
                }
               }
                
             }else{
                this.setFolderTab()
                this.tickets = []
                this.solicitudes = []
                this.filesTicket = []
                this.filesSgc=[]
                this.solicitud_folder_id=''
                this.ticket_folder_id=''
                
             }
            
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

        getOthersFoldersTab(){
          
          axios.get(`api/sgcRequest?page=${this.solicitudes.current_page}&code=${this.searchRequestSgc}`).then(response=>{
            this.solicitudes= response.data
          })
         
        },

        getNumberTicket(){
            axios.get(`api/ticketRequest?page=${this.tickets.current_page}&code=${this.searchRequestTicket}`).then(response=>{
                this.tickets = response.data
                
            })
        },

        getFoldersOfficeTrack(){
            axios.get(`api/foldersOfficeTrackRepositorio?page=${this.foldersRepositorioOfficeTrack.current_page}&folder_name${this.searchFolderRepositorio}`).then(response=>{

                this.foldersRepositorioOfficeTrack = response.data
                
            })
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

        getFilesSgc(solicitud){
            this.solicitud_folder_id=solicitud.id
            axios.get(`/api/sgcFiles?id=${solicitud.id}`).then(response=>{
                this.filesSgc = response.data;
                console.log(  this.filesSgc )
            })
        },
        getFilesTicket(ticket){
            this.ticket_folder_id=ticket.id
            axios.get(`/api/ticketFiles?id=${ticket.id}`).then(response=>{
                this.filesTicket = response.data;
                
            })
        },
        getSubFolder(folder){
            this.folder_repostorio_id=folder.id
            axios.get(`/api/getSubFolderRepositorio?subcarpeta_id=${folder.id}`).then(response=>{
                this.subFoldersRepositorio = response.data;
                
                
            })
            if(folder.nombre == 'Fotos' || folder.nombre == 'Informes' || folder.nombre == 'Foto' || folder.nombre == 'Informe'){
                this.getFilesOficetrack(folder.id)
            }else{
                this.filesRepositorioOffice= []
            }

        },
        getFilesOficetrack(folder){
            axios.get(`/api/getFilesSubFolderRepositorio?carpeta_id=${folder}`).then(response=>{
                this.filesRepositorioOffice = response.data;
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
