<template>
    <div>

        <!-- ITEMS BUTTONS -->
        <!-- ############# -->
        <!-- <section class="section" :class="bodyBackground">
            <div class="">
                <div class="tile is-ancestor">
                    <div class="tile is-parent" v-for="tab in tabs">
                        <a class="tile is-child box" :key="tab.filename" :class="currentTab === tab.filename ? 'has-background-link' : boxBackground" @click="currentTab = tab.filename">
                            <div :class="currentTab === tab.filename ? selectedSecondaryBoxText : secondaryText"> 
                                <div class="is-size-6 has-text-weight-semibold">
                                    {{ tab.nem_site }}
                                </div>

                                <div style="margin-top: 10px;">
                                    <div class="is-size-7 has-text-weight-light">{{ tab.description }}</div> 
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>  
        </section> -->

       <!--  <section class="section" v-if="files.lenght == 0 && folders.lenght == 0">
            <div class="container">
                <div class="box">No documentos de este POP</div>
            </div>
        </section> -->

        <section class="section has-background-white">
            <div class="columns">
                <div class="column is-2">
                    <b-menu>
                        <b-menu-list label="Sitios">
                            <!-- <b-menu-item icon="information-outline" label="Info"></b-menu-item> -->
                            <b-menu-item
                                v-for="site in sitesFolders"
                                v-bind:key="site.id"
                                icon="settings"
                                :active="isActive"
                                :expanded="isActive"
                                @click="getDirectories(site.id)">
                                <template slot="label" slot-scope="props">
                                    <b-icon 
                                        pack="fas" 
                                        icon="folder-open" 
                                        class="fa-2x has-text-smart">
                                    </b-icon>
                                    <span class="">{{ site.nem_site }}</span>
                                    <!-- <b-icon
                                        class="is-pulled-right has-text-black"
                                        :icon="props.expanded ? 'folder-open' : 'folder'"
                                        type="fas">
                                    </b-icon> -->
                                </template>

                                <b-menu-item 
                                    v-for="folder in folders"
                                    v-bind:key="folder.id"
                                    icon="account" 
                                    @click="getFolders(site.id, folder.basename)">
                                    <template slot="label" slot-scope="props">
                                        {{ folder.basename }}
                                        <b-icon
                                            class="is-pulled-right"
                                            :icon="props.expanded ? 'folder-open' : 'folder'"
                                            type="fas">
                                        </b-icon>
                                    </template>

                                    <b-menu-item 
                                        v-for="folder2 in folders2"
                                        v-bind:key="folder2.id"
                                        icon="account" 
                                        :label="folder2.basename"
                                        @click="getFiles(site.id, folder.basename, folder2.basename)">
                                    </b-menu-item>
                                </b-menu-item>

                            </b-menu-item>
                        </b-menu-list>

                        <b-menu-list label="Actions">
                            <b-menu-item label="Subir archivo"></b-menu-item>
                        </b-menu-list>
                    </b-menu>

                </div>
                <div class="column">
                    <div class="columns is-multiline">
                        <div class="column is-2" v-for="file in files">
                            <a class="box" target="_blank" @click="readFile(file)">
                                <b-icon 
                                    pack="fas"
                                    :icon="faFile(file.extension).icon"
                                    size="is-medium"
                                    :type="faFile(file.extension).type">
                                </b-icon>
                                <div class="is-size-7">{{ file.basename }}</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
        <!-- <section  v-if="files.lenght == 0 && folders.lenght == 0">No hay archivos en esta sección.</section> -->
    </div>
</template>

<script>
    export default {
        components: {
        },
        props : [
            'pop',
            'bodyBackground',
            'boxBackground',
            'primaryText',
            'secondaryText',
        ],
        data() {
            return {                
                isActive: false,

                sitesFolders: this.pop.sites,
                folders: null,
                folders2: null,
                files: null,

                selectedPrimaryBoxText: 'has-text-white',
                selectedSecondaryBoxText: 'has-text-light',
            }
        },
        mounted() {
            // this.getFolders()
            // this.getDocuments()
        },

        // watch: {
        //     currentTab(newValue, oldValue) {
        //         // folders: []
        //         // files: []
        //         // this.getDocuments()
        //     }
        // },
        methods: {
            getDirectories(site_id) {
                axios.get(`/api/directories/${site_id}`).then((response) => {
                    console.log(response)
                    this.folders = response.data.data
                })
            },

            getFolders(site_id, path) {
                axios.get(`/api/folders/${site_id}/${path}`).then((response) => {
                    console.log(response.data)
                    this.folders2 = response.data.data
                    this.files = response.data.files
                })
            },

            getFiles(site_id, path, path2) {
                axios.get(`/api/files/${site_id}/${path}/${path2}`).then((response) => {
                    console.log(response.data)
                    this.files = response.data.data
                })
            },

            faFile(ext) {
                var icon = ext == 'pdf' ? 'file-pdf' : 
                        (ext == 'jpg' || ext == 'png' || ext == 'jpeg' ? 'file-image' : 
                            (ext == 'xls' || ext == 'xlsx' ? 'file-excel' : 'file')
                        )

                var type = ext == 'pdf' ? 'is-info' : 
                        (ext == 'jpg' || ext == 'png' || ext == 'jpeg' ? 'is-warning' : 
                            (ext == 'xls' || ext == 'xlsx' ? 'is-success' : 'is-primary')
                        )
                return {
                    'icon': icon,
                    'type': type
                    }
            },

            // readFile(file) {
            //     var params = {
            //         'name': '/storage/app/' + file.dirname,
            //         'basename': file.basename,
            //     }
            //     axios.get('/api/documents/' + this.pop.id, { params: params, responseType: 'blob' })
            //     .then(response => {
            //         let blob = new Blob([response.data], { type: 'application/pdf' })
            //         let link = document.createElement('a')
            //         link.href = window.URL.createObjectURL(blob)
            //         link.download = 'test.pdf'
            //         link.click()
            //     })
            // }

            readFile(file) {
                var params = {
                    'dirname': file.dirname,
                    'basename': file.basename,
                    'extension': file.extension,
                }
                axios.get('/api/documents/' + this.pop.id, { params: params, responseType: 'arraybuffer' })
                // .then(response => {
                //     this.downloadFile(response, file.basename, file.extension)
                // }, response => {
                //     console.warn('error from download_contract')
                //     console.log(response)
                //     // Manage errors
                // })
                .then((response) => {
                    console.log(response.data)
                    const blob = new Blob([response.data], { type: 'application/' + file.extension })
                    // const objectUrl = window.URL.createObjectURL(blob)

                    let link = document.createElement('a')
                    link.href = window.URL.createObjectURL(blob)
                    link.download = file.basename
                    link.click()
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

            downloadFile(response, filename, type) {
                // It is necessary to create a new blob object with mime-type explicitly set
                // otherwise only Chrome works like it should
                var newBlob = new Blob([response.body], {type: 'application/' + type})

                // IE doesn't allow using a blob object directly as link href
                // instead it is necessary to use msSaveOrOpenBlob
                if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                    window.navigator.msSaveOrOpenBlob(newBlob)
                    return
                }

                // For other browsers:
                // Create a link pointing to the ObjectURL containing the blob.
                const data = window.URL.createObjectURL(newBlob)
                var link = document.createElement('a')
                link.href = data
                link.download = filename
                link.click()
                setTimeout(function () {
                    // For Firefox it is necessary to delay revoking the ObjectURL
                    window.URL.revokeObjectURL(data)
                }, 100)
            },
        }
    }
</script>
