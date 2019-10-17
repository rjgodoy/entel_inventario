<template>
    <div class="box has-background-dark">
        <div class="field">
            <p class="control has-icons-left has-icons-right">
                <input class="input has-background-black-ter is-hovered has-text-white" @keyup="search" v-model="searchText" type="search" arial-label="Buscar" placeholder="Buscar...">
                <span class="icon is-small is-left">
                    <font-awesome-icon icon="search"/>
                </span>
            </p>
        </div>
        <table class="table is-fullwidth has-background-dark">
            <thead>
                <tr>
                    <th class="is-size-7 has-text-weight-semibold has-text-grey-light"><abbr title="id">Id POP</abbr></th>
                    <th class="is-size-7 has-text-weight-semibold has-text-grey-light"><abbr title="id">Cod Fijo</abbr></th>
                    <th class="is-size-7 has-text-weight-semibold has-text-grey-light"><abbr title="id">Cod Movil</abbr></th>
                    <th class="is-size-7 has-text-weight-semibold has-text-grey-light"><abbr title="id">Nombre</abbr></th>
                    <th class="is-size-7 has-text-weight-semibold has-text-grey-light"><abbr title="id">Comuna</abbr></th>
                    <th class="is-size-7 has-text-weight-semibold has-text-grey-light"><abbr title="id">Zona</abbr></th>
                    <th class="is-size-7 has-text-weight-semibold has-text-grey-light"><abbr title="id">CRM</abbr></th>
                    <th class="is-size-7 has-text-weight-semibold has-text-centered"></th>
                </tr>
            </thead>
            
            <tbody>
                <tr class="is-size-7 has-text-weight-light" v-for="pop in pops.data">
                    <th class="has-text-weight-light has-text-white">{{ pop.id }}</th>
                    <th class="has-text-weight-light has-text-white">{{ pop.nem_fijo }}</th>
                    <th class="has-text-weight-light has-text-white">{{ pop.nem_movil }}</th>
                    <th class="has-text-weight-light has-text-white">{{ pop.nombre }}</th>
                    <th class="has-text-weight-light has-text-white">{{ pop.comuna.nombre }}</th>
                    <th class="has-text-weight-light has-text-white">{{ pop.comuna.zona.nombre }}</th>
                    <th class="has-text-weight-light has-text-white">{{ pop.comuna.zona.crm.nombre }}</th>
                    <th class="has-text-weight-light has-text-centered has-text-white">
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
                pops: {
                    total: 0,
                    per_page: 2,
                    from: 1,
                    to: 0,
                    current_page: 1
                },
                counter: 0,
                searchText: '',

                // bodyBackground: 'has-background-light',
                // boxBackground: 'has-background-white',
                // primaryText: 'has-text-dark',
                // secondaryText: 'has-text-grey',
                // hovered: '',

                bodyBackground: 'has-background-black-ter',
                boxBackground: 'has-background-dark',
                primaryText: 'has-text-white',
                secondaryText: 'has-text-grey-light',
                hovered: 'is-hovered',
            }
        },
        mounted() {
            this.getPops()
        },
        methods: {
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
                axios.get(`api/searchPops/${this.searchText}`)
                    .then((response) => {
                        this.pops = response.data;
                    })
                    .catch(() => {

                    });
            }
        }
    }
</script>
