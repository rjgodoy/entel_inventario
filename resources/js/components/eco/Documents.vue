<template>
    <div class="tile is-child box">
        <div class="title is-size-4">Otros Documentos</div>

        <b-table
            :data="ecoDocs.files"
            :paginated="isPaginated"
            :per-page="perPage"
            :current-page.sync="currentPage"
            :pagination-simple="isPaginationSimple"
            :pagination-position="paginationPosition"
            :default-sort-direction="defaultSortDirection"
            :sort-icon="sortIcon"
            :sort-icon-size="sortIconSize"
            pagination-size="is-small"
            default-sort="user.first_name"
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page">

                <!-- <b-table-column field="id" label="ID" width="40" numeric>
                    {{ props.row.id }}
                </b-table-column> -->

            <b-table-column class="is-size-6" width="60%" field="basename" label="Archivo" sortable searchable>
                <template v-slot:header="{ column }">
                    <b-tooltip :label="column.label" class="is-size-6" append-to-body>
                        {{ column.label }}
                    </b-tooltip>
                </template>
                <template v-slot="props">
                    <div class="is-size-6">{{ props.row.basename }}</div>
                </template>
            </b-table-column>

            <b-table-column class="is-size-6" width="" field="site.nem_site" label="PoP" sortable searchable>
                <b-input
                    slot="searchable"
                    slot-scope="props"
                    v-model="props.filters[props.column.field]"/>
                <template v-slot:header="{ column }">
                    <b-tooltip :label="column.label" class="is-size-6" append-to-body>
                        {{ column.label }}
                    </b-tooltip>
                </template>
                <template v-slot="props">
                    <div class="is-size-7">{{ props.row.site.nem_site }}</div>
                    <router-link class="is-size-7" :to="'/pop/' + props.row.site.pop.id" target="_blank">
                        <div class="is-size-6">{{ props.row.site.pop.nombre }}</div>
                    </router-link>
                </template>
            </b-table-column>

            <b-table-column field="id" label="" width="10" numeric v-if="canDelete">
                <template v-slot="props">
                    <button class="button" @click="confirm(props.row)">
                        <font-awesome-icon :icon="['far', 'trash-alt']"/>
                    </button>
                </template>
            </b-table-column>

            <template slot="empty">
                <section class="section">
                    <div class="content has-text-grey has-text-centered">
                        <p>
                            <b-icon
                                icon="emoticon-sad"
                                size="is-large">
                            </b-icon>
                        </p>
                        <p>No hay archivos</p>
                    </div>
                </section>
            </template>
        </b-table>

        <!-- <b-field v-if="ecoDocs.can ? ecoDocs.can.upload : null">

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
        </b-field> -->

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
            dropFiles: [],

            ecoDocs: Array,
            isPaginated: true,
            isPaginationSimple: false,
            paginationPosition: 'bottom',
            defaultSortDirection: 'asc',
            sortIcon: 'arrow-up',
            sortIconSize: 'is-small',
            currentPage: 1,
            perPage: 10,
        }
    },

    computed: {
        canDelete() {
            return this.ecoDocs.can && this.ecoDocs.can.delete
        }
    },  

    created() {
    },

    mounted() {
        this.getEcoDocs()
    },



    methods: {
        getEcoDocs() {
            axios.get(`/api/ecoDocs`)
            .then(response => {
                this.ecoDocs = response.data
            })
        },

        submit() {
            this.dropFiles.forEach(element => this.submitForm(element))
        },

        submitForm(file) {
            const config = {
                headers: {
                    'content-type': 'multipart/form-data',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                }
            }

            // form data
            let formData = new FormData();
            formData.append('file', file)

            // send upload request
            try {
                let response = axios.post(`/api/ecoDocs`, formData, config)
                .then(response => {
                    this.getEcoDocs()
                })
            } catch (e) {
                console.log(e)
            }
            
        },

        confirm(file) {
            this.$buefy.dialog.confirm({
                message: 'Desea eliminar este archivo?',
                type: 'is-danger',
                onConfirm: () => {
                    this.deleteFile(file.id)
                }
            })
        },

        deleteFile(file_id) {
            axios.delete(`/api/files/${file_id}`)
            .then(response => {
                console.log(response)
                this.getEcoDocs()
            })
        }

    }
}
</script>
