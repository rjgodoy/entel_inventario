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
            :data="rcas.environmentalData"
            :bordered="isBordered"
            :striped="isStriped"
            :narrowed="isNarrowed"
            :hoverable="isHoverable"
            :loading="isLoading"
            :focusable="isFocusable"
            :mobile-cards="hasMobileCards">

            <template slot-scope="props">
                <!-- <b-table-column field="id" label="ID" width="40" numeric>
                    {{ props.row.id }}
                </b-table-column> -->

                <b-table-column field="basename" label="First Name">
                    {{ props.row.basename }}
                </b-table-column>

                <!-- <b-table-column field="last_name" label="Last Name">
                    {{ props.row.last_name }}
                </b-table-column>

                <b-table-column field="date" label="Date" centered>
                    <span class="tag is-success">
                        {{ new Date(props.row.date).toLocaleDateString() }}
                    </span>
                </b-table-column>

                <b-table-column label="Gender">
                    <span>
                        <b-icon pack="fas"
                            :icon="props.row.gender === 'Male' ? 'mars' : 'venus'">
                        </b-icon>
                        {{ props.row.gender }}
                    </span>
                </b-table-column> -->
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

        <b-field v-if="rcas.can ? rcas.can.upload : null">
            <b-upload
                v-model="dropFiles"
                @input="submitForm"
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

        <!-- <div class="tags">
            <span v-for="(file, index) in dropFiles"
                :key="index"
                class="tag is-primary" >
                {{file.name}}
                <button class="delete is-small"
                    type="button"
                    @click="deleteDropFile(index)">
                </button>
            </span>
        </div> -->
    </div>
</template>

<script>
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
                isBordered: false,
                isStriped: false,
                isNarrowed: false,
                isHoverable: false,
                isFocusable: false,
                isLoading: false,
                hasMobileCards: true
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
                    console.log(response.data)
                    this.rcas = response.data
                })
            },

            submitForm() {
                const config = {
                    headers: {
                        'content-type': 'multipart/form-data',
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                    }
                }

                // form data
                let formData = new FormData();
                formData.append('file', this.dropFiles[0]);

                // send upload request
                axios.post(`/api/rcas?api_token=${this.user.api_token}`, formData, config)
                    .then(response => {
                        this.getRCAs()
                    })
            },

            deleteDropFile(index) {
                this.dropFiles.splice(index, 1)
            }

        }
    }
</script>
