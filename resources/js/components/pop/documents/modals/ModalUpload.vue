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
                            <p>Puedes hacer click o arrastrar tus archivos aquí</p>
                        </div>
                    </section>
                </b-upload>
            </b-field>

        </section>
        <footer class="modal-card-foot">
            <button class="button" type="button" @click="$parent.close()">Cerrar</button>
            <!-- <button class="button is-primary">Subir</button> -->
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
                // console.log(this.folderTab)
                this.dropFiles.forEach(element => this.submitForm(element))
            },

            submitForm(file) {
                const config = {
                    headers: {
                        'content-type': 'multipart/form-data',
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                    },
                    params: {
                        'api_token': this.user.api_token,
                        'pop_id': this.pop.id,
                        'folder_name': this.folderTab.label,
                        'folder_id': this.folder_id,
                        'user_id': this.user.id,
                    }
                }

                // form data
                let formData = new FormData();
                formData.append('file', file)

                // send upload request
                try {
                    axios.post(`/api/files`, formData, config)
                    .then(response => {
                        console.log(response.data)
                        this.$eventBus.$emit('reload-files')
                    })
                } catch (e) {
                    console.log(e)
                }

                this.$parent.close()
                
            },
        }
    }
</script>
