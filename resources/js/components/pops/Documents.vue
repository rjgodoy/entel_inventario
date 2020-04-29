<template>
    <div>
        <section class="section has-background-white">
            <div class="field">
                <div class="has-text-weight-semibold has-text-dark is-size-4 has-text-left">Documentos</div>
            </div>

            <b-tabs v-model="activeTab" :multiline="multiline" position="is-centered" @change="folder=activeTab">
                <template v-for="(tab, index) in tabs">
                    <b-tab-item
                        v-if="tab.displayed"
                        :key="index"
                        :label="tab.label">
                        <!-- {{ tab.content }} -->
                    </b-tab-item>
                </template>
            </b-tabs>

            <div class="columns is-multiline">
                <div class="column is-2 tile is-parent" v-for="file in files">
                    <a class="box tile is-child" target="_blank" @click="readFile(file); load = file.id" style="position: relative;">
                        <font-awesome-icon 
                            :icon="['fas', faFile(file.extension).icon]"
                            :class="faFile(file.extension).type"
                            size="2x"
                            style="padding-bottom: 5px;"/>
                        <div class="is-size-7">{{ file.basename }}</div>
                        <b-loading :is-full-page="false" :active.sync="isLoading" :can-cancel="true" v-if="load == file.id"></b-loading>
                    </a>
                </div>
            </div>
            <section v-if="files.length == 0" class="section container">
                <div class="has-text-weight-normal">No hay archivos en esta sección.</div>
            </section>


            <!-- <b-field grouped group-multiline>
                <div class="control">
                    <b-checkbox v-model="showDetailIcon">Detail column</b-checkbox>
                </div>
                <div v-for="(column, index) in columnsVisible"
                     :key="index"
                     class="control">
                    <b-checkbox v-model="column.display">
                        {{ column.title }}
                    </b-checkbox>
                </div>
            </b-field>

            <b-table
                :data="data"
                ref="table"
                detailed
                hoverable
                custom-detail-row
                :opened-detailed="['Board Games']"
                :default-sort="['name', 'asc']"
                detail-key="name"
                @details-open="(row, index) => $buefy.toast.open(`Expanded ${row.name}`)"
                :show-detail-icon="showDetailIcon">

                <template slot-scope="props">
                    <b-table-column
                        field="name"
                        :visible="columnsVisible['name'].display"
                        :label="columnsVisible['name'].title"
                        width="300"
                        sortable
                    >
                        <template v-if="showDetailIcon">
                            {{ props.row.name }}
                        </template>
                        <template v-else>
                            <a @click="toggle(props.row)">
                                {{ props.row.name }}
                            </a>
                        </template>
                    </b-table-column>

                    <b-table-column
                        field="sold"
                        :visible="columnsVisible['sold'].display"
                        :label="columnsVisible['sold'].title"
                        sortable
                        centered
                    >
                        {{ props.row.sold }}
                    </b-table-column>

                    <b-table-column
                        field="available"
                        :visible="columnsVisible['available'].display"
                        :label="columnsVisible['available'].title"
                        sortable
                        centered
                    >
                        {{ props.row.available }}
                    </b-table-column>

                    <b-table-column
                        :visible="columnsVisible['cleared'].display"
                        :label="columnsVisible['cleared'].title"
                        centered
                    >
                        <span :class="
                                [
                                    'tag',
                                    {'is-danger': props.row.sold / props.row.available <= 0.45},
                                    {'is-success': props.row.sold / props.row.available > 0.45}
                                ]">
                            {{ Math.round((props.row.sold / props.row.available) * 100) }}%
                        </span>
                    </b-table-column>
                </template>

                <template slot="detail" slot-scope="props">
                    <tr v-for="item in props.row.items" :key="item.name">
                        <td v-if="showDetailIcon"></td>
                        <td v-show="columnsVisible['name'].display" >&nbsp;&nbsp;&nbsp;&nbsp;{{ item.name }}</td>
                        <td v-show="columnsVisible['sold'].display" class="has-text-centered">{{ item.sold }}</td>
                        <td v-show="columnsVisible['available'].display" class="has-text-centered">{{ item.available }}</td>
                        <td v-show="columnsVisible['cleared'].display" class="has-text-centered">
                            <span :class="
                                [
                                    'tag',
                                    {'is-danger': item.sold / item.available <= 0.45},
                                    {'is-success': item.sold / item.available > 0.45}
                                ]">
                                {{ Math.round((item.sold / item.available) * 100) }}%
                            </span>
                        </td>
                    </tr>
                </template>
            </b-table> -->
            
        </section>
        
    </div>
</template>

<script>
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
                files: Array,
                activeTab: 0,
                showCam: true,
                multiline: true,
                isLoading: false,
                load:0


                // data: [
                //     {
                //         name: 'Board Games',
                //         sold: 131,
                //         available: 301,
                //         items: [
                //             {
                //                 name: 'Monopoly',
                //                 sold: 57,
                //                 available: 100
                //             },
                //             {
                //                 name: 'Scrabble',
                //                 sold: 23,
                //                 available: 84
                //             },
                //             {
                //                 name: 'Chess',
                //                 sold: 37,
                //                 available: 61
                //             },
                //             {
                //                 name: 'Battleships',
                //                 sold: 14,
                //                 available: 56
                //             }
                //         ]
                //     },
                //     {
                //         name: 'Jigsaws & Puzzles',
                //         sold: 88,
                //         available: 167,
                //         items: [
                //             {
                //                 name: 'World Map',
                //                 sold: 31,
                //                 available: 38
                //             },
                //             {
                //                 name: 'London',
                //                 sold: 23,
                //                 available: 29
                //             },
                //             {
                //                 name: 'Sharks',
                //                 sold: 20,
                //                 available: 44
                //             },
                //             {
                //                 name: 'Disney',
                //                 sold: 14,
                //                 available: 56
                //             }
                //         ]
                //     },
                //     {
                //         name: 'Books',
                //         sold: 434,
                //         available: 721,
                //         items: [
                //             {
                //                 name: 'Hamlet',
                //                 sold: 101,
                //                 available: 187
                //             },
                //             {
                //                 name: 'The Lord Of The Rings',
                //                 sold: 85,
                //                 available: 156
                //             },
                //             {
                //                 name: 'To Kill a Mockingbird',
                //                 sold: 78,
                //                 available: 131
                //             },
                //             {
                //                 name: 'Catch-22',
                //                 sold: 73,
                //                 available: 98
                //             },
                //             {
                //                 name: 'Frankenstein',
                //                 sold: 51,
                //                 available: 81
                //             },
                //             {
                //                 name: 'Alice\'s Adventures In Wonderland',
                //                 sold: 46,
                //                 available: 68
                //             }
                //         ]
                //     }
                // ],
                // columnsVisible: {
                //     name: { title: 'Name', display: true },
                //     sold: { title: 'Stock Sold', display: true },
                //     available: { title: 'Stock Available', display: true },
                //     cleared: { title: 'Stock Cleared', display: true },
                // },
                // showDetailIcon: true

            }
        },
        mounted() {
            this.getFiles()
        },

        computed: {
            folder: {
                get: function() {
                    return this.baseTabs[this.activeTab]
                },
                set: function(newValue) {
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
        },

        methods: {
            getFiles() {
                let params = {
                    'api_token': this.user.api_token,
                    'folder_id': this.folder.id,
                    
                }
                axios.get(`/api/files/${this.pop.id}`, { params: params })
                .then((response) => {
                    // console.log(response.data)
                    this.files = response.data.data
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

            // toggle(row) {
            //     this.$refs.table.toggleDetails(row)
            // }
        }
    }
</script>
