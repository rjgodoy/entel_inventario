<template>
    <div class="column is-4">
        <article class="tile is-child box" :class="boxBackground">
            <div class="columns">
                <div class="column is-size-5 has-text-weight-semibold has-text-left" :class="primaryText">Plantas Rectificadoras</div>
                <div class="column is-size-4 has-text-weight-semibold has-text-right" :class="primaryText">{{ this.total | numeral('0,0') }}</div>
            </div>

            <div class="columns is-multiline">
                <div class="column is-6" v-for="item in this.powerRectifierData">
                    <b-message type="is-positive">
                        <div class="is-size-4 has-text-weight-normal">{{ item.q_power_rectifiers | numeral('0,0') }}</div>
                        <div class="is-size-7">{{ item.nombre }}</div>
                    </b-message>
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
                powerRectifierData: null,
                total: 0,
                buttonLoading: '',
            }
        },
        created(){
            this.getPowerRectifierData()
        },
        mounted() {      
        },
        watch: {
            selectedCrm(newValue, oldValue) {
                this.crmSelected = newValue
                this.zonaSelected = null
                this.getPowerRectifierData()
            },
            selectedZona(newValue, oldValue) {
                this.zonaSelected = newValue
                this.getPowerRectifierData()
            },
            core(newValue, oldValue) {
                this.getPowerRectifierData()
            }
        },
        methods: {
            totalPowerRectifiers() {
                this.total = 0
                this.powerRectifierData.forEach(this.counter)
            },
            counter(item, index) {
                this.total = this.total + item.q_power_rectifiers;
            },
            getPowerRectifierData() {
                if (this.crmSelected == null) {
                    axios.get(`/api/powerRectifierData/${this.core}?api_token=${this.user.api_token}`)
                        .then((response) => {
                            this.powerRectifierData = response.data.data;
                            this.totalPowerRectifiers()
                        })
                        .catch(() => {
                            console.log('handle server error from here');
                        });
                } else if (this.zonaSelected == null){
                    axios.get(`api/powerRectifierDataCrm/${this.crmSelected.id}/${this.core}?api_token=${this.user.api_token}`)
                        .then((response) => {
                            this.powerRectifierData = response.data.data;
                            this.totalPowerRectifiers()
                        })
                        .catch(() => {
                            console.log('handle server error from here');
                        });
                } else {
                    axios.get(`api/powerRectifierDataZona/${this.zonaSelected.id}/${this.core}?api_token=${this.user.api_token}`)
                        .then((response) => {
                            this.powerRectifierData = response.data.data;
                            this.totalPowerRectifiers()
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
