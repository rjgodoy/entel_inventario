<template>
    <div class="tile is-parent">
        <article class="tile is-child box" :class="boxBackground">
            <div class="columns">
                <div class="column is-size-5 has-text-weight-semibold has-text-left" :class="primaryText">Grupos Electrógenos</div>
                <!-- <div class="column has-text-centered">
                    <button data-toggle="button" class="button is-small is-link" type="button">CORE</button>
                </div> -->
                <div class="column is-size-4 has-text-weight-semibold has-text-right" :class="primaryText">{{ this.total | numeral('0,0') }}</div>
            </div>

            <div class="columns is-multiline">
                <div class="column is-6" v-for="item in this.generatorGroupData">
                    <div class="is-size-5 has-text-weight-semibold">{{ item.q_generator_groups | numeral('0,0') }}</div>
                    <div class="is-size-7">{{ item.nombre }}</div>
                </div>
            </div>

            <form @submit="formSubmit">
                <div class="field has-addons">
                    <p class="control">
                        <button type="submit" class="button is-small is-link is-outlined" :class="buttonLoading">
                            <font-awesome-icon icon="download"/> 
                            &nbsp;&nbsp;Listado de POPs
                        </button>
                    </p>
                    <!-- <p class="control">
                        <a href="/pop" type="button" class="button is-small is-link tooltip" data-tooltip="Tooltip Text">
                            <font-awesome-icon icon="bars"/>
                        </a>
                    </p> -->
                </div>

            </form>
        </article>
    </div>
</template>

<script>
    export default {
        props : [
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
                generatorGroupData: null,
                total: 0,
                buttonLoading: '',
            }
        },
        created(){
            this.getGeneratorGroupData()
        },
        mounted() {      
        },
        watch: {
            selectedCrm(newValue, oldValue) {
                this.crmSelected = newValue
                this.zonaSelected = null
                this.getGeneratorGroupData()
            },
            selectedZona(newValue, oldValue) {
                this.zonaSelected = newValue
                this.getGeneratorGroupData()
            },
            core(newValue, oldValue) {
                this.getGeneratorGroupData()
            }
        },
        methods: {
            totalGeneratorGroups() {
                this.total = 0
                this.generatorGroupData.forEach(this.counter)
            },
            counter(item, index) {
                this.total = this.total + item.q_generator_groups;
            },
            getGeneratorGroupData() {
                if (this.crmSelected == null) {
                    axios.get(`/api/generatorGroupData?core=${this.core}`)
                        .then((response) => {
                            // console.log(response.data)
                            this.generatorGroupData = response.data.data;
                            this.totalGeneratorGroups()
                        })
                        .catch(() => {
                            console.log('handle server error from here');
                        });
                } else if (this.zonaSelected == null){
                    axios.get(`api/generatorGroupDataCrm?core=${this.core}&crm_id=${this.crmSelected.id}`)
                        .then((response) => {
                            this.generatorGroupData = response.data.data;
                            this.totalGeneratorGroups()
                        })
                        .catch(() => {
                            console.log('handle server error from here');
                        });
                } else {
                    axios.get(`api/generatorGroupDataZona?core=${this.core}&zona_id=${this.zonaSelected.id}`)
                        .then((response) => {
                            this.generatorGroupData = response.data.data;
                            this.totalGeneratorGroups()
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
