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
                                    {{ site.nem_site }}
                                    <b-icon
                                        class="is-pulled-right"
                                        :icon="props.expanded ? 'menu-down' : 'menu-up'">
                                    </b-icon>
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
                                            :icon="props.expanded ? 'menu-down' : 'menu-up'">
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
                                    pack="fad"
                                    :icon="faFile(file.extension)"
                                    size="is-medium">
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
                var fa = ext == 'pdf' ? 'file-pdf' : 
                        (ext == 'jpg' || ext == 'png' || ext == 'jpeg' ? 'file-image' : 
                            (ext == 'xls' || ext == 'xlsx' ? 'file-excel' : 'file')
                        )
                return fa
            },
            readFile(file) {
                let routeData = this.$router.resolve({name: '/storage/app/' + file.dirname, query: {data: file.basename}});
                console.log(routeData)
                window.open(routeData.href, '_blank');
            }
        }
    }
</script>
