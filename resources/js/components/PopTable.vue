<template>
    <section class="section is-marginless" :class="bodyBackground">
        <div class="">
            <div class="box" :class="boxBackground">
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input is-rounded" :class="bodyBackground + ' ' + primaryText" @keyup="search" v-model="searchText" type="search" arial-label="Buscar" placeholder="Buscar..." autofocus>
                        <span class="icon is-small is-left">
                            <font-awesome-icon icon="search"/>
                        </span>
                    </p>
                </div>
                <table class="table is-fullwidth" :class="boxBackground">
                    <thead>
                        <tr>
                            <th class="is-size-7 has-text-weight-semibold" :class="secondaryText"><abbr title="id">Id POP</abbr></th>
                            <th class="is-size-7 has-text-weight-semibold" :class="secondaryText"><abbr title="id">POP</abbr></th>
                            <th class="is-size-7 has-text-weight-semibold has-text-centered"></th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr class="is-size-7 has-text-weight-light" v-for="pop in pops.data">
                            <th class="has-text-weight-light" :class="primaryText">{{ pop.id }}</th>
                            <td class="">
                                <div class="is-size-7 has-text-weight-semibold" :class="secondaryText">
                                    {{ pop ? (pop.nem_fijo && pop.nem_movil ? pop.nem_fijo + ' - ' + pop.nem_movil : (pop.nem_fijo ? pop.nem_fijo : pop.nem_movil)) : 'No tiene nemónico' }}
                                </div>
                                <div class="is-size-7 has-text-weight-normal" :class="primaryText">
                                    {{ pop ? pop.nombre : '' }}
                                </div>
                                <div class="is-size-7 has-text-weight-normal" :class="secondaryText">
                                    {{ pop ? pop.comuna.nombre : '' }}
                                </div>
                                <div class="is-size-7 has-text-weight-normal" :class="secondaryText">
                                    {{ pop ? 'Zona: ' + pop.comuna.zona.nombre : '' }} - {{ pop ? 'CRM: ' + pop.comuna.zona.crm.nombre : '' }}
                                </div>
                            </td>
                            <th class="has-text-weight-light has-text-centered" :class="primaryText">
                                <button href="/pops/download" type="button" class="button is-small is-link tooltip" data-tooltip="Tooltip Text">
                                    <font-awesome-icon icon="bars"/>
                                </button>
                            </th>
                        </tr>    
                    </tbody>
                </table>
                <nav class="pagination" role="navigation" aria-label="pagination">
                    <vue-pagination  
                        :pagination="pops"
                        @paginate="getPops()"
                        :offset="4"
                        :primaryText="primaryText">
                    </vue-pagination>
                </nav>
                <div class="field">
                    <div class="field has-text-right">
                        <!-- <a href="{{ route('comsite.create') }}" type="submit" class="button is-link is-small">{{ __('Sincronizar') }}</a> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import VuePagination from './VuePagination.vue';
    export default {
        components: {
            'vue-pagination': VuePagination
        },
        props : [
            'csrf'
        ],
        data() {
            return {
                darkMode: 1,
                bodyBackground: '',
                boxBackground: '',
                primaryText: '',
                secondaryText: '',
                searchBodyBackground: '',

                pops: {
                    total: 0,
                    per_page: 2,
                    from: 1,
                    to: 0,
                    current_page: 1
                },
                counter: 0,
                searchText: '',

            }
        },
        created() {
            this.styleMode()
        },
        mounted() {
            this.getPops()
        },
        methods: {
            // APIs
            getPops() {
                axios.get(`api/pops?page=${this.pops.current_page}`)
                    .then((response) => {
                        this.pops = response.data;
                    })
                    .catch(() => {
                        console.log('handle server error from here');
                    });
            },
            search() {
                if (this.searchText != '') {
                    axios.get(`api/searchPops/${this.searchText}`)
                        .then((response) => {
                            this.pops = response.data;
                        })
                        .catch(() => {
                        });
                    } else {
                        this.getPops()
                    }
                
            },

            // Style mode
            styleMode(){
                if (this.darkMode == 1) {
                    // dark mode
                    this.bodyBackground = 'has-background-black-ter'
                    this.boxBackground = 'has-background-dark'
                    this.primaryText = 'has-text-white'
                    this.secondaryText = 'has-text-grey-light'
                    this.searchBodyBackground = 'has-background-dark'
                } else {
                    // light mode
                    this.bodyBackground = 'has-background-light'
                    this.boxBackground = 'has-background-white'
                    this.primaryText = 'has-text-dark'
                    this.secondaryText = 'has-text-grey'
                    this.searchBodyBackground = 'has-background-white'
                }
            },
            changeStyle() {
                if (this.darkMode == 0) {
                    this.darkMode = 1
                    this.styleMode()
                } else {
                    this.darkMode = 0
                    this.styleMode()
                }
            }
        }
    }
</script>
