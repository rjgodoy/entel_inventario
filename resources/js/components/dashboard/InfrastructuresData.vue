<template>
    <div class="column is-4">
        <article class="tile is-child box is-bold is-calid">
            <div class="columns">
                <div class="column is-size-5 has-text-weight-semibold has-text-left" :class="primaryText">Infraestructuras</div>
                <div class="column is-size-4 has-text-weight-semibold has-text-right" :class="primaryText">{{ this.total | numeral('0,0') }}</div>
            </div>

            <div class="columns is-multiline">
                <div class="column is-6" :class="primaryText" v-for="item in this.infrastructureData">
                    <!-- <b-message type="is-eco"> -->
                        <div class="is-size-4 has-text-weight-normal">{{ item.q_infrastructures | numeral('0,0') }}</div>
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
                infrastructureData: null,
                total: 0,
                buttonLoading: '',
            }
        },
        created(){
            this.getInfrastructureData()
        },
        mounted() {      
        },
        watch: {
            selectedCrm(newValue, oldValue) {
                this.crmSelected = newValue
                this.zonaSelected = null
                this.getInfrastructureData()
            },
            selectedZona(newValue, oldValue) {
                this.zonaSelected = newValue
                this.getInfrastructureData()
            },
            core(newValue, oldValue) {
                this.getInfrastructureData()
            }
        },
        methods: {
            totalInfrastructures() {
                this.total = 0
                this.infrastructureData.forEach(this.counter)
            },
            counter(item, index) {
                this.total = this.total + item.q_infrastructures;
            },
            getInfrastructureData() {
                if (this.crmSelected == null) {
                    axios.get(`/api/infrastructureData/${this.core}?api_token=${this.user.api_token}`)
                        .then((response) => {
                            this.infrastructureData = response.data.data;
                            this.totalInfrastructures()
                        })
                        .catch(() => {
                            console.log('handle server error from here');
                        });
                } else if (this.zonaSelected == null){
                    axios.get(`/api/infrastructureDataCrm/${this.crmSelected.id}/${this.core}?api_token=${this.user.api_token}`)
                        .then((response) => {
                            this.infrastructureData = response.data.data;
                            this.totalInfrastructures()
                        })
                        .catch(() => {
                            console.log('handle server error from here');
                        });
                } else {
                    axios.get(`/api/infrastructureDataZona/${this.zonaSelected.id}/${this.core}?api_token=${this.user.api_token}`)
                        .then((response) => {
                            console.log(response)
                            this.infrastructureData = response.data.data;
                            this.totalInfrastructures()
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
