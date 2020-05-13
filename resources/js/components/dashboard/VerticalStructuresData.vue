<template>
    <div class="column is-4">
        <article class="tile is-child box is-bold">
            <div class="columns">
                <div class="column is-size-5 has-text-weight-semibold has-text-left" :class="primaryText">Estructuras Verticales</div>
                <div class="column is-size-4 has-text-weight-semibold has-text-right" :class="primaryText">{{ this.total | numeral('0,0') }}</div>
            </div>

            <div class="columns is-multiline">
                <div class="column is-6" :class="primaryText" v-for="item in this.verticalStructureData" :key="item.id">
                    <!-- <b-message type="is-eco"> -->
                        <div class="is-size-4 has-text-weight-normal">{{ item.q_vertical_structures | numeral('0,0') }}</div>
                        <div class="is-size-7">{{ item.nombre }}</div>
                    <!-- </b-message> -->
                </div>
            </div>

            <!-- <form @submit="formSubmit">
                <div class="field has-addons">
                    <p class="control">
                        <button type="submit" class="button is-small is-link is-outlined" :class="buttonLoading">
                            <font-awesome-icon icon="download"/> 
                            &nbsp;&nbsp;Listado de POPs
                        </button>
                    </p>
                    <p class="control">
                        <a href="/pop" type="button" class="button is-small is-link tooltip" data-tooltip="Tooltip Text">
                            <font-awesome-icon icon="bars"/>
                        </a>
                    </p>
                </div>

            </form> -->
        </article>
    </div>
</template>

<script>
    export default {
        props : [
            'user',
            'selectedCrm',
            'selectedZona',
            // 'csrf',
            'bodyBackground',
            'boxBackground',
            'primaryText',
            'secondaryText',
            'core'
        ],
        data() {
            return {
                crmSelected: this.selectedCrm,
                zonaSelected: this.selectedZona,
                verticalStructureData: null,
                total: 0,
                buttonLoading: '',
            }
        },
        created(){
            this.getVerticalStructureData()
        },
        mounted() {      
        },
        watch: {
            selectedCrm(newValue, oldValue) {
                this.crmSelected = newValue
                this.zonaSelected = null
                this.getVerticalStructureData()
            },
            selectedZona(newValue, oldValue) {
                this.zonaSelected = newValue
                this.getVerticalStructureData()
            },
            core(newValue, oldValue) {
                this.getVerticalStructureData()
            }
        },
        methods: {
            totalVerticalStructures() {
                this.total = 0
                this.verticalStructureData.forEach(this.counter)
            },
            counter(item, index) {
                this.total = this.total + item.q_vertical_structures;
            },
            getVerticalStructureData() {
                if (this.crmSelected == null) {
                    axios.get(`/api/verticalStructureData/${this.core}?api_token=${this.user.api_token}`)
                        .then((response) => {
                            this.verticalStructureData = response.data.data;
                            this.totalVerticalStructures()
                        })
                        .catch(() => {
                            console.log('handle server error from here');
                        });
                } else if (this.zonaSelected == null){
                    axios.get(`/api/verticalStructureDataCrm/${this.crmSelected.id}/${this.core}?api_token=${this.user.api_token}`)
                        .then((response) => {
                            this.verticalStructureData = response.data.data;
                            this.totalVerticalStructures()
                        })
                        .catch(() => {
                            console.log('handle server error from here');
                        });
                } else {
                    axios.get(`/api/verticalStructureDataZona/${this.zonaSelected.id}/${this.core}?api_token=${this.user.api_token}`)
                        .then((response) => {
                            console.log(response)
                            this.verticalStructureData = response.data.data;
                            this.totalVerticalStructures()
                        })
                        .catch(() => {
                            console.log('handle server error from here');
                        });
                }
            },
            formSubmit(e) {
                // Activate loading button
                this.buttonLoading = 'is-loading'

                e.preventDefault()
                axios({
                    url: '/pop/export',
                    method: 'POST',
                    responseType: 'blob',
                    // headers: {
                    //     'Content-Type': 'text/html; charset=utf-8',
                    //     'X-XSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    // }
                })
                .then((response) => {
                    const url = window.URL.createObjectURL(new Blob([response.data]))
                    const link = document.createElement('a')
                    link.href = url
                    link.setAttribute('download', 'listado_pops.xlsx')
                    document.body.appendChild(link)
                    link.click()

                    // Deativate loading button
                    this.buttonLoading = ''
                })
                .catch((error) => {
                    console.log('Error: ' + error);
                });
            }
        }
    }
</script>
