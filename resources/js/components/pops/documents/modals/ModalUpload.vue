<template>
    <div class="modal-card" style="width: auto">
        <header class="modal-card-head has-text-centered">
            <p class="modal-card-title has-text-weight-bold">Subir Archivo</p>
        </header>
        <section class="modal-card-body">
            <b-field>
                <b-upload
                    v-model="dropFiles"
                    @input="submit"
                    multiple
                    drag-drop>
                    <section class="section">
                        <div class="content has-text-centered">
                            <p>
                                <b-icon
                                    icon="upload"
                                    pack="fas"
                                    size="is-large">
                                </b-icon>
                            </p>
                            <p>Drop your files here or click to upload</p>
                        </div>
                    </section>
                </b-upload>
            </b-field>

            {{ 'pop: ' + pop.id }}
            {{ 'folderTab: ' + folderTab.label }}
            {{ 'folder_id: ' + folder_id }}

        </section>
        <footer class="modal-card-foot">
            <button class="button" type="button" @click="$parent.close()">Close</button>
            <button class="button is-primary">Subir</button>
        </footer>
    </div>
</template>

<script>    
    import { library } from "@fortawesome/fontawesome-svg-core";
    import { faUpload } from "@fortawesome/free-solid-svg-icons";
    // import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
    // import { faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons'
    library.add(faUpload);
    export default {
        components: {
        },
        props : [
            'pop',
            'folderTab',
            'folder_id',
            'user'
        ],
        data() {
            return {
                dropFiles: [],
            }
        },

        watch: {

        },

        created() {
        },

        mounted() {
        },

        methods: {
            submit() {
                console.log(this.folderTab)
                // this.dropFiles.forEach(element => this.submitForm(element))
            },

            submitForm(file) {
                const config = {
                    headers: {
                        'content-type': 'multipart/form-data',
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                    },
                    params: {

                    }
                }

                // form data
                let formData = new FormData();
                formData.append('file', file)

                // send upload request
                try {
                    let response = axios.post(`/api/rcas?api_token=${this.user.api_token}`, formData, config)
                    .then(response => {
                        this.getRCAs()
                    })
                } catch (e) {
                    console.log(e)
                }

                this.$parent.close()
                
            },
        }
    }
</script>
