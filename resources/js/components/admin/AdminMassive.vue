<template>
    <div class="section">
        <div class="container">
            <div class="tile is-ancestor">
                <div class="tile is-parent">
                    <div class="tile is-child box" :class="boxBackground" >
                        <div :class="secondaryText"> 
                            <div class="is-size-6 has-text-weight-semibold">
                                Efizzity
                            </div>

                            <b-field class="file">
                                <b-upload v-model="file" @input="onFileChange">
                                    <a class="button is-primary">
                                        <b-icon icon="upload"></b-icon>
                                        <span>Click to upload</span>
                                    </a>
                                </b-upload>
                                <span class="file-name" v-if="file">
                                    {{ file.name }}
                                </span>
                            </b-field>
                            <b-button 
                                type="is-link"
                                @click="submit">
                                <font-awesome-icon icon="sync-alt"/> 
                                &nbsp;&nbsp;Sync Efizity
                            </b-button>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

    export default {
        components: {

        },
        props : [
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
                // buttonLoading: 0,
                // filename: 'No hay archivo...',
                // csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        },
        methods: {
            onFileChange(file){
                this.file = file;
            },
            submit(e) {
                // this.buttonLoading = 1
                e.preventDefault();
   
                const config = {
                    headers: { 'content-type': 'multipart/form-data' }
                }
    
                let formData = new FormData();
                formData.append('file', this.file[0]);
                // console.log(this.file)
   
                axios.post(`/api/client_connection/efizity`, formData, config)
                .then(function (response) {
                    console.log(response.data)
                    // this.$buefy.toast.open({
                    //     message: response.data.success,
                    //     type: 'is-success',
                    //     duration: 5000
                    // })
                    // this.buttonLoading = 0
                })
                .catch(function (error) {
                    console.log('error: ' + error)
                    // this.$buefy.toast.open({
                    //     message: error,
                    //     type: 'is-danger',
                    //     duration: 5000
                    // })
                    // this.buttonLoading = 0
                });
            }
            // submit() {
            //     this.buttonLoading = 1
            //     console.log(this.file)

            //     axios.post(`/api/client_connection/efizity?file=${this.file}`)
            //     .then((response) => {
            //         console.log(response)
            //         // const blob = new Blob([response.data], { type: 'application/xls' })
            //         // const objectUrl = window.URL.createObjectURL(blob)

            //         // let link = document.createElement('a')
            //         // link.href = window.URL.createObjectURL(blob)
            //         // link.download = 'test.xlsx'
            //         // link.click()
            //         this.buttonLoading = 0
            //     })
            // }
        }
    }
</script>
