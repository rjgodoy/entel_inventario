<template>
    <div class="modal-card box">
        <!-- <header class="modal-card-head has-text-centered">
            <p class="modal-card-title has-text-weight-bold">Documentos de ayuda</p>
        </header> -->
        <section class="modal-card-body">
            <div class="container">
                <ul>
                    <li v-for="file in files" :key="file.id">
                        <a class="has-text-dark" @click="readFile(file)">
                            <!-- <font-awesome-icon 
                                :icon="['fas', faFile(file.extension).icon]"
                                :class="faFile(file.extension).type"
                                size="2x"
                                style="padding-bottom: 5px;"/> -->
                            <div class="is-size-5">{{ file.filename }}</div>
                            <b-loading :is-full-page="false" :active.sync="isLoading" :can-cancel="true"></b-loading>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
        <!-- <footer class="modal-card-foot">
            <button class="button" type="button" @click="$parent.close()">Cerrar</button>
        </footer> -->
    </div>
</template>

<script>
    import { library } from "@fortawesome/fontawesome-svg-core";
    import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
    // import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
    // import { faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons'

    library.add( faFilePdf );
    export default {
        props : [
            'user'
        ],

        data() {
            return {
                files: [],
                isLoading: false,
            }
        },

        computed: {
            
        },

        mounted() {
            this.getInfoFiles()
        },

        methods: {
            getInfoFiles() {
                let params = {
                    'api_token': this.user.api_token,
                    'folder_id': 28177
                }
                axios.get(`/api/getFiles`, { params })
                .then(response => {
                    console.log(response.data)
                    this.files = response.data.files
                })
            },

            getFile(file) {
                window.open(file.route, "_blank");
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
                    'route': file.route,
                    'mime': file.mime,
                    'basename': file.basename,
                    'dirname': file.dirname,
                }
                // console.log(params)
                axios.get('/api/viewFile', { 
                    params: params, 
                    responseType: 'arraybuffer' 
                })
                .then((response) => {
                    // console.log(response)
                    const blob = new Blob([response.data], { type: file.mime })
                    const objectUrl = URL.createObjectURL(blob)

                    // IE doesn't allow using a blob object directly as link href
                    // instead it is necessary to use msSaveOrOpenBlob
                    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                        window.navigator.msSaveOrOpenBlob(newBlob)
                        return
                    }

                    let link = document.createElement('a');
                    link.href = objectUrl;
                    link.open = file.basename;
                    // link.target = "_blank";
                    link.click();
                    setTimeout(function () {
                    //     // For Firefox it is necessary to delay revoking the ObjectURL
                        URL.revokeObjectURL(objectUrl)
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
        }
    }
</script>
