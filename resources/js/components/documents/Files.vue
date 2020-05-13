<template>
    <div class="section">
        <div class="box">
            <div class="columns">
                <aside class="column is-2">

                    <div class="field">
                        <input class="input" type="text" v-model="searchtext">
                    </div>

                    <div class="field">
                        <table class="table">
                            <tbody>
                                <tr v-for="folder in folders" :key="folder.id">
                                    <td>
                                        <a class="" @click="bread = folder.site.nem_site; folder_selected_id = folder.id">
                                            <div class="columns">
                                                <div class="column is-2">
                                                    <font-awesome-icon
                                                        :icon="['fas', 'folder-open']"
                                                        class="has-text-smart"
                                                        size="2x"
                                                        />
                                                </div>
                                                <div class="column has-text-grey-dark">
                                                    <p class="has-text-weight-semibold is-size-7">{{ folder.site.nem_site }}</p>
                                                    <p class="has-text-weight-normal is-size-6">{{ folder.site.nombre }}</p>
                                                </div>
                                            </div>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </aside>
                <div class="column">
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
                        <div class="column is-2 tile is-parent" v-for="folder in foldersView" :key="folder.id">
                            <a class="box tile is-child" style="position: relative;" @click="setBreadcrum(folder.site.nem_site); folder_selected_id = folder.id">
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

        

        
        
    </div>
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
        'folders',
        'foldersView',
        'files',
        'folder_name',
        'user'
    ],

    data() {
        return {
            activeTab: 0,
            isLoading: false,
            load: 0,
            canCreateFolder: false,
            canDeleteFolder: false,
            canUploadFile: false,
            canDeleteFile: false,
            folder_selected_id: null,
            bread: '',
            searchtext: ''
        }
    },

    computed: {
        noFiles() {
            return !this.folders.length && !this.files.length
        },
    },

    created() {
    },

    watch:{
        searchtext(val) {
            this.$emit('childToParent', val)
        },

        folder_selected_id(val) {
            this.$emit('folderIdChildToParent', val)
            // this.bread = ''
        }

    },

    mounted() {
    },
    
    methods: {

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
            // this.getFolders()
        }

    }
}
</script>
