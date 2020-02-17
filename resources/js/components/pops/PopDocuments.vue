<template>
    <div>
        <section class="section" :class="bodyBackground">
            <!-- <button class="button is-link" @click="changeStyle" v-model="darkMode">Style</button> -->

            <!-- ITEMS BUTTONS -->
            <div class="container">

                <div class="tile is-ancestor">

                    <div class="tile is-parent" v-for="tab in tabs">
                        <a class="tile is-child box" :key="tab.filename" :class="currentTab === tab.filename ? 'has-background-link' : boxBackground" @click="currentTab = tab.filename">
                            <div :class="currentTab === tab.filename ? selectedSecondaryBoxText : secondaryText"> 
                                <div class="is-size-6 has-text-weight-semibold">
                                    {{ tab.filename }}
                                </div>

                                <div style="margin-top: 10px;">
                                    <div class="is-size-7 has-text-weight-light">{{ tab.description }}</div> 
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>    
        </section>

       <!--  <section class="section" v-if="files.lenght == 0 && folders.lenght == 0">
            <div class="container">
                <div class="box">No documentos de este POP</div>
            </div>
        </section> -->

        <section class="section">
            <div class="columns">
                <div class="column is-2">
                    <b-menu>
                        <b-menu-list label="Menu">
                            <!-- <b-menu-item v-for="folder in folders" icon="information-outline" label="Info"></b-menu-item> -->
                            <b-menu-item
                                v-for="folder in folders"
                                v-bind:key="folder.filename"
                                icon="settings"
                                :active="isActive"
                                :expanded="isActive"
                                @click="isActive = !isActive">
                                <template slot="label" slot-scope="props">
                                    {{ folder.basename }}
                                    <b-icon
                                        class="is-pulled-right"
                                        :icon="props.expanded ? 'menu-down' : 'menu-up'">
                                    </b-icon>
                                </template>
                                <!-- <b-menu-item icon="account" label="Users"></b-menu-item>
                                <b-menu-item icon="cellphone-link">
                                    <template slot="label" slot-scope="props">
                                        Devices
                                        <b-dropdown aria-role="list" class="is-pulled-right" position="is-bottom-left">
                                        <b-icon icon="dots-vertical" slot="trigger"></b-icon>
                                            <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
                                            <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
                                            <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
                                        </b-dropdown>
                                    </template>
                                </b-menu-item>
                                <b-menu-item icon="cash-multiple" label="Payments" disabled></b-menu-item> -->
                            </b-menu-item>
                        </b-menu-list>

                        <b-menu-list label="Actions">
                            <b-menu-item label="Subir Archivo"></b-menu-item>
                        </b-menu-list>
                    </b-menu>
                </div>
            </div>

            <!-- <a class="box" v-for="folder in folders" @click="chosen = folder.filename">
                {{ folder.filename }}
            </a>
            {{ chosen }}

            <a class="box" v-for="file in files">
                {{ file.filename }}
            </a> -->
        </section>
        <section  v-if="files.lenght == 0 && folders.lenght == 0">No hay archivos en esta sección.</section>
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
                folders: [],
                files: [],
                chosen: '',
                isActive: false,

                tabs: [],
                currentTab: 'archivos',

                selectedPrimaryBoxText: 'has-text-white',
                selectedSecondaryBoxText: 'has-text-light',
            }
        },
        mounted() {
            this.getFolders()
            this.getDocuments()
        },
        watch: {
            currentTab(newValue, oldValue) {
                folders: []
                files: []
                this.getDocuments()
            }
        },
        methods: {
            getFolders() {
                axios.get(`/api/documents`).then((response) => {
                    console.log(response.data)
                    this.tabs = response.data
                    this.currentTab = this.tabs[0].filename
                })
            },
            getDocuments() {
                axios.get(`/api/documents/${this.pop.id}?path=${this.currentTab}`).then((response) => {
                    console.log(response.data)
                    this.folders = response.data.folders
                    this.files = response.data.files
                }).catch((error) => {
                    console.log(error)
                    this.folders = []
                    this.files = []
                })
            }
        }
    }
</script>
