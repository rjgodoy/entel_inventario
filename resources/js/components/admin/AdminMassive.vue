<template>
    <div class="section">
        <div class="container">
            <div class="tile is-ancestor">
                <div class="tile is-parent">
                    <div class="tile is-child box" :class="boxBackground" >
                        <div :class="secondaryText"> 
                            <div class="is-size-6 has-text-weight-semibold">
                                Efizity
                            </div>

                            <b-field>
                                <b-upload v-model="file"
                                    @input="submit"
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
                                    <b-loading :is-full-page="false" :active.sync="isLoading" :can-cancel="true"></b-loading>
                                </b-upload>
                            </b-field>

                        </div>
                    </div>
                </div>
            </div>
        </div>

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
        'user',
        'bodyBackground',
        'boxBackground',
        'primaryText',
        'secondaryText',
    ],
    created() {
    },
    mounted() {

    },
    data() {
        return {
            file: [],
            isLoading: false,
        }
    },

    methods: {

        submit() {
            this.isLoading = true

            const config = {
                headers: {
                    'content-type': 'multipart/form-data',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                }
            }

            // form data
            let formData = new FormData();
            formData.append('file', this.file);

            axios.post(`/api/junction/efizity?api_token=${this.user.api_token}`, formData, config)
            .then((response) => {
                console.log(response.data)
                this.$buefy.toast.open({
                    message: 'Los datos de efizity se han inrgesado exitosamente',
                    type: 'is-success',
                    duration: 5000
                })
                this.isLoading = false
            })
            .catch((error) => {
                console.log(error)
                this.$buefy.toast.open({
                    message: 'error: ' + error,
                    type: 'is-danger',
                    duration: 5000
                })
                this.isLoading = false
            });
        }

    }
}
</script>
