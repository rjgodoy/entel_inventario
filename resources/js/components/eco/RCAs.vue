<template>
    <div class="tile is-child box">
        <div class="title is-size-4">RCAs</div>

        <!-- <b-field grouped group-multiline>
            <div class="control">
                <b-switch v-model="isBordered">Bordered</b-switch>
            </div>
            <div class="control">
                <b-switch v-model="isStriped">Striped</b-switch>
            </div>
            <div class="control">
                <b-switch v-model="isNarrowed">Narrowed</b-switch>
            </div>
            <div class="control">
                <b-switch v-model="isHoverable">Hoverable</b-switch>
            </div>
            <div class="control">
                <b-switch v-model="isFocusable">Focusable</b-switch>
            </div>
            <div class="control">
                <b-switch v-model="isLoading">Loading state</b-switch>
            </div>
            <div class="control">
                <b-switch v-model="hasMobileCards">Mobile cards <small>(collapsed rows)</small></b-switch>
            </div>
        </b-field> -->

        <b-table
            :data="rcas.files"
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

            <template slot-scope="props">
                <!-- <b-table-column field="id" label="ID" width="40" numeric>
                    {{ props.row.id }}
                </b-table-column> -->

                <b-table-column class="is-size-6" width="60%" field="basename" label="Archivo" sortable searchable>
                    <template slot="header" slot-scope="{ column }">
                        <b-tooltip :label="column.label" class="is-size-6">
                            {{ column.label }}
                        </b-tooltip>
                    </template>
                    <div class="is-size-6">{{ props.row.basename }}</div>
                </b-table-column>

                <b-table-column class="is-size-6" width="" field="site.nem_site" label="PoP" sortable searchable>
                    <b-input
                        slot="searchable"
                        slot-scope="props"
                        v-model="props.filters[props.column.field]"/>
                    <template slot="header" slot-scope="{ column }">
                        <b-tooltip :label="column.label" class="is-size-6">
                            {{ column.label }}
                        </b-tooltip>
                    </template>
                    <div class="is-size-7">{{ props.row.site.nem_site }}</div>
                    <router-link class="is-size-7" :to="'/pop/' + props.row.site.pop.id" target="_blank">
                        <div class="is-size-6">{{ props.row.site.pop.nombre }}</div>
                    </router-link>
                </b-table-column>

                <b-table-column field="id" label="" width="10" numeric v-if="rcas.can.delete">
                    <button class="button" @click="confirmDelete(props.row)">
                        <font-awesome-icon :icon="['far', 'trash-alt']"/>
                    </button>
                </b-table-column>

            </template>

            <template slot="empty">
                <section class="section">
                    <div class="content has-text-grey has-text-centered">
                        <p>
                            <b-icon
                                icon="emoticon-sad"
                                size="is-large">
                            </b-icon>
                        </p>
                        <p>Nothing here.</p>
                    </div>
                </section>
            </template>
        </b-table>

        <!-- <b-field v-if="rcas.can ? rcas.can.upload : null">

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

            rcas: Array,
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

    created() {
    },

    mounted() {
        this.getRCAs()
    },

    methods: {
        getRCAs() {
            axios.get(`/api/rcas?api_token=${this.user.api_token}`)
            .then(response => {
                this.rcas = response.data
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
                let response = axios.post(`/api/rcas?api_token=${this.user.api_token}`, formData, config)
                .then(response => {
                    this.getRCAs()
                })
            } catch (e) {
                console.log(e)
            }
            
        },

        confirmDelete(file) {
            this.$buefy.dialog.confirm({
                message: 'Desea eliminar este archivo?',
                type: 'is-danger',
                onConfirm: () => {
                    axios.delete(`/api/files/${file.id}?api_token=${this.user.api_token}`)
                    .then(response => {
                        console.log(response)
                        this.getRCAs()
                    })
                }
            })
        },

    }
}
</script>
