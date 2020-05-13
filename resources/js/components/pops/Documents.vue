<template>

    <section class="">
        <div class="columns">
            <div class="column has-text-weight-semibold has-text-dark is-size-3 has-text-left">Documentos</div>
        </div>

        <div class="columns">
            <div class="column">
                <div class="box">
                    <b-tabs v-model="activeTab" :multiline="multiline" position="is-centered" @change="folderTab=activeTab" style="margin-bottom: 0px;">
                        <template v-for="(tab, index) in tabs">
                            <b-tab-item
                                v-if="tab.displayed"
                                :key="index"
                                :label="tab.label">
                            </b-tab-item>
                        </template>
                    </b-tabs>

                    <div style="padding-bottom: 20px;">
                        <span>
                            <a v-if="bread" @click="backOne">
                                <font-awesome-icon
                                    :icon="['fas', 'angle-left']"
                                    class="is-link"
                                    size="2x"
                                    style="margin-bottom: -4px;"/>
                            </a>
                        </span>
                        <span class="is-size-6" style="margin-bottom: 25px;">&nbsp;{{ bread }}</span>
                    </div>

                    <div class="columns is-multiline">
                        <div class="column is-2 tile is-parent" v-for="folder in folders" :key="folder.id">
                            <a class="box tile is-child" style="position: relative;" @click="setBreadcrum(folder.name); folder_selected_id = folder.id">
                                <font-awesome-icon
                                    :icon="['fas', 'folder-open']"
                                    class="has-text-smart"
                                    size="3x"
                                    style="padding-bottom: 5px;"/>
                                <div class="is-size-6 has-text-weight-bold">{{ folder.name }}</div>
                            </a>
                        </div>

                        <div class="column is-2 tile is-parent" v-for="file in files" :key="file.id">
                            <a class="box tile is-child" target="_blank" @click="readFile(file); load = file.id" style="position: relative;">
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
                    <section v-if="noFiles" class="section container">
                        <div class="has-text-weight-normal">No hay archivos en esta sección.</div>
                    </section>
                </div>
            </div>
        </div>
        
    </section>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFolderOpen, faFilePdf, faFileExcel, faFileImage, faFile, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
// import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
// import { faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons'
library.add(faFolderOpen, faFilePdf, faFileExcel, faFileImage, faFile, faAngleLeft);
export default {
    components: {
    },
    props : [
        'user',
        'pop',
        'popCritical',
        'bodyBackground',
        'boxBackground',
        'primaryText',
        'secondaryText',
    ],
    data() {
        return { 
            folders: [],
            files: [],
            activeTab: 0,
            showCam: true,
            multiline: true,
            isLoading: false,
            load: 0,
            canCreateFolder: false,
            canDeleteFolder: false,
            canUploadFile: false,
            canDeleteFile: false,

            folder_selected_id: null,

            bread: ''

        }
    },
    mounted() {
        this.getFolders()
        this.getFiles()
    },

    computed: {
        folderTab: {
            get: function() {
                return this.baseTabs[this.activeTab]
            },
            set: function(newValue) {
                this.bread = ''
                this.getFolders()
                this.folder_selected_id = null
                this.getFiles()
            },
        },
        
        showCriticTab() {
            return this.popCritical
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
                    displayed: this.showCriticTab,
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
            // if (this.showCriticTab) {
            //     tabs.splice(tabs.length - 1, 0, this.criticTab);
            // }
            return tabs
        },

        // criticTab() {
        //     return {
        //         id: 7,
        //         label: 'Levantamientos Ingeniería',
        //         content: 'Levantamientos Ingeniería: Lorem ipsum dolor sit amet.',
        //         displayed: true,
        //     }
        // }

        noFiles() {
            return !this.folders.length && !this.files.length
        },

    },

    watch: {
        folder_selected_id(val) {
            this.getFolders()
            this.getFiles()
            console.log(val)
        }
    },
    
    methods: {
        getFolders() {
            let params = {
                'api_token': this.user.api_token,
                'folder_name': this.folderTab.label,
                'folder_id': this.folder_selected_id
            }
            axios.get(`/api/folders/${this.pop.id}`, { params })
            .then((response) => {
                // console.log(response)
                this.folders = response.data.folders
                this.canCreateFolder = response.data.can.create
                this.canDeleteFolder = response.data.can.delete
            })
        },

        getFiles() {
            let params = {
                'api_token': this.user.api_token,
                'folder_name': this.folderTab.label,
                'folder_id': this.folder_selected_id
            }
            axios.get(`/api/files/${this.pop.id}`, { params: params })
            .then((response) => {
                console.log(response.data)
                this.files = response.data.files
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

        readFile(file) {
            this.isLoading = true
            var params = {
                'api_token': this.user.api_token,
                'dirname': file.dirname,
                'basename': file.basename,
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
                link.download = file.basename
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
            console.log(split)
            this.bread = ''
            for (let index = 0; index < split.length; index++) {
                if (this.bread == '') {
                    this.bread = split[index]
                } else {
                    this.bread = this.bread + ' / ' + split[index]
                }
            }
            this.folder_selected_id = null
            this.getFolders()
        }
        

        // toggle(row) {
        //     this.$refs.table.toggleDetails(row)
        // }
    }
}
</script>
