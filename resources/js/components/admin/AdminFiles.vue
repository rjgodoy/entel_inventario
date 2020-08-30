<template>
    <div class="section container">
        
        <section class="box">
            <header class="has-text-centered">
                <p class="is-size-4 has-text-weight-bold">Subir Archivo de Información</p>
            </header>
            <div class="columns" style="margin-top: 20px">
                <div class="column"></div>
                <div class="column">

                    <b-field label="Nombre archivo">
                        <b-input v-model="filename" width="50" required></b-input>
                    </b-field>

                    <b-upload v-model="file">
                        <a class="button is-primary is-fullwidth">
                            <b-icon icon="upload" pack="fas"></b-icon>
                            <span>{{ file.name || "Click para subir"}}</span>
                        </a>
                    </b-upload>

                    <!-- <b-field>
                        <b-upload
                            v-model="dropFiles"
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
                    </b-field> -->

                    <!-- <div class="tags">
                        <span v-for="(file, index) in dropFiles"
                            :key="index"
                            class="tag is-primary" >
                            {{ file.name }}
                            <button class="delete is-small"
                                type="button"
                                @click="deleteDropFile(index)">
                            </button>
                        </span>
                    </div> -->
                    <b-button class="is-link" @click="submit" :disabled="!filename || !file.name ">Subir</b-button>
                </div>
                <div class="column"></div>
            </div>
            

            <div class="section">
                <b-table
                    :data="isEmpty ? [] : files"
                    :bordered="false"
                    :striped="false"
                    :narrowed="false"
                    :hoverable="false"
                    :loading="false"
                    :focusable="false"
                    :mobile-cards="false">

                    <b-table-column field="filename" label="First Name">
                        <template v-slot:header="{ column }">
                            <div class="is-size-6" append-to-body>{{ column.label }}</div>
                        </template>
                        <template v-slot="props">
                            <div class="is-size-6">{{ props.row.filename }}</div>
                        </template>
                    </b-table-column>

                    <b-table-column field="basename" label="Last Name">
                        <template v-slot:header="{ column }">
                            <div class="is-size-6" append-to-body>{{ column.label }}</div>
                        </template>
                        <template v-slot="props">
                            <div class="is-size-6">{{ props.row.basename }}</div>
                        </template>
                    </b-table-column>

                    <b-table-column label="Eliminar">
                        <template v-slot:header="{ column }">
                            <div class="is-size-6" append-to-body>{{ column.label }}</div>
                        </template>
                        <template v-slot="props">
                            <b-button class="has-text-danger" @click="confirmDeleteFile(props.row)">
                                <font-awesome-icon :icon="['far', 'trash-alt']"/>
                            </b-button>
                        </template>
                    </b-table-column>
                </b-table>
            </div>

        </section>

    </div>
</template>

<script>    
    import { library } from "@fortawesome/fontawesome-svg-core";
    import { faUpload } from "@fortawesome/free-solid-svg-icons";
    // import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
    import { faTrashAlt as farTrashAlt } from '@fortawesome/free-regular-svg-icons'
    library.add(faUpload, farTrashAlt);
    export default {
        components: {
        },
        props : [
            'user'
        ],
        data() {
            return {
                files: [],
                file: {},
                dropFiles: [],
                filename: null,
                isEmpty: false
            }
        },

        watch: {

        },

        created() {

        },

        mounted() {
            this.getInfoFiles()
        },

        methods: {
            getInfoFiles() {
                let params = {
                    'folder_id': 28177
                }
                axios.get(`/api/getFiles`, { params })
                .then(response => {
                    console.log(response.data)
                    this.files = response.data.files
                })
            },

            submit() {
                // this.dropFiles.forEach(element => this.submitForm(element))
                this.submitForm(this.file)
            },

            submitForm(file) {
                const config = {
                    headers: {
                        'content-type': 'multipart/form-data',
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                    },
                    params: {
                        'folder_id': 28177,
                        'user_id': this.user.id,
                        'filename': this.filename
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
                        this.getInfoFiles()
                        this.filename = ''
                    })
                } catch (e) {
                    console.log(e)
                }
                
            },

            deleteDropFile(index) {
                this.dropFiles.splice(index, 1)
            },

            confirmDeleteFile(file) {
                this.$buefy.dialog.confirm({
                    message: 'Desea eliminar este archivo?',
                    type: 'is-danger',
                    onConfirm: () => {
                        axios.delete(`/api/files/${file.id}`)
                        .then(response => {
                            console.log(response)
                            this.getInfoFiles()
                        })
                    }
                })
            },
        }
    }
</script>