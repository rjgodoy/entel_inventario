<template>
    <div>
        <div class="field">
            <div class="has-text-weight-semibold has-text-dark is-size-3 has-text-left">Documentos</div>
        </div>
        <div class="box">
            <div class="columns is-multiline">
                <div class="column is-2 tile is-parent" v-for="file in files" :key="file.id">
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
        </div>
    </div>
</template>

<script>    
    export default {
        components: {
            // CapacityChart: () => import('./CapacityChart'),
        },
        props : [
            'user',
            'pop',
        ],
        data() {
            return {
                files: Array,
                isLoading: false,
                load: 0
                
            }
        },
        computed: {
        },

        mounted() {
            this.getFiles()
        },

        methods: {
            getFiles() {
                let params = {
                    'api_token': this.user.api_token,
                    'folder_id': 7,
                }
                axios.get(`/api/files/${this.pop.id}`, { params: params })
                .then((response) => {
                    console.log(response.data)
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
                console.log(file)
                if (file.extension == 'pdf') {
                    window.open('./' + file.dirname + '/' + file.basename, '_blank')
                } else {

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
                }
            },
        }
    }
</script>
