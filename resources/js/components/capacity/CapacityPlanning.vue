<template>
    <div class="hero is-dark is-bold">
        <div class="columns hero-body">

            <!-- SECCION BOTONES -->
            <div class="column is-1 section">

                <!-- BOTONES MODULOS -->
                <!-- ############################### -->
                <div class="">
                    <div class="columns is-multiline tile is-ancestor">
                        <!-- TABS DE INFORMACIÓN -->
                        <!-- ############################### -->
                        <div class="column is-12 tile is-parent"
                            v-for="crm in crms"
                            :key="crm.id"
                            @click="currentCrm = currentCrm === crm.id ? 0 : crm.id">
                            <div class="tile is-child box has-text-centered has-text-white" :class="currentCrm === crm.id ? 'has-background-link' : 'has-background-dark'">
                                <div 
                                    v-text="crm.sigla_crm"
                                    class="is-size-4 has-text-weight-semibold">
                                </div>
                                <div style="padding-top: 5px;">
                                    <div class="is-size-7 has-text-weight-normal">
                                        {{ crm.nombre_crm }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-7 section">
                <div class="container">

                    <!-- <section class="field" v-if="message">
                        <div class="notification is-primary alert is-dismissable" role="alert">
                            <button aria-hidden="true" data-dismiss="alert" class="delete" type="button"></button>
                            {{ message }}
                        </div>
                    </section> -->

                    <div class="box has-background-black-ter">
                        <div class="field">
                            <p class="control has-icons-left has-icons-right">
                                <input 
                                    class="input is-rounded" 
                                    @keyup="getRoomsData" 
                                    v-model="searchText" 
                                    type="text" 
                                    arial-label="Buscar" 
                                    placeholder="Buscar..." 
                                    autofocus
                                >
                                <span class="icon is-small is-left">
                                    <font-awesome-icon icon="search"/>
                                </span>
                                <span class="icon is-small is-right">
                                    <button class="delete" @click="clearSearch"></button>
                                </span>
                            </p>
                        </div>
                        <table class="table is-fullwidth has-background-black-ter has-text-white">
                            <thead>
                                <tr>
                                    <th class="is-size-7 has-text-weight-semibold has-text-white"><abbr title="id">POP</abbr></th>
                                    <th class="is-size-7 has-text-weight-semibold has-text-white"><abbr title="id">Sitio / Sala</abbr></th>
                                    <th class="is-size-7 has-text-weight-semibold has-text-centered"></th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                <tr class="is-size-7 has-text-weight-light" v-for="data in roomsData.data">
                                    <td class="">
                                        <div class="is-size-7 has-text-weight-normal">
                                            {{ data ? data.nombre : '' }}
                                        </div>
                                        <div class="is-size-7 has-text-weight-normal">
                                            {{ data ? data.comuna.nombre : '' }}
                                        </div>
                                        <div class="is-size-7 has-text-weight-normal">
                                            {{ data ? 'Zona: ' + data.comuna.zona.nombre_zona : '' }} - {{ data ? 'CRM: ' + data.comuna.zona.crm.nombre_crm : '' }}
                                        </div>
                                    </td>

                                    <td class="">
                                        <div class="is-size-7 has-text-weight-bold" v-for="site in data.sites" v-if="criticity(site)">
                                            {{ site ? site.nem_site : '' }}
                                        
                                    
                                            <div class="field" v-for="room in site.rooms">
                                                <a class="has-text-weight-light has-text-link">
                                                    {{ room.name }} - {{ room.old_name }}
                                                </a>
                                            </div>

                                        </div>
                                    </td>

                                    <td class="has-text-weight-light has-text-centered">
                                        <button href="/comsites/download" type="button" class="button is-small is-link tooltip" data-tooltip="Tooltip Text">
                                            <font-awesome-icon icon="bars"/>
                                        </button>
                                    </td>
                                </tr>    
                            </tbody>

                            <!-- <tbody>
                                <tr class="is-size-7 has-text-weight-light" v-for="data in roomsData.data">
                                    <td class="">
                                        <div class="is-size-7 has-text-weight-normal">
                                            {{ data.site.pop ? data.site.pop.nombre : '' }}
                                        </div>
                                        <div class="is-size-7 has-text-weight-normal">
                                            {{ data.site.pop ? data.site.pop.comuna.nombre : '' }}
                                        </div>
                                        <div class="is-size-7 has-text-weight-normal">
                                            {{ data.site.pop ? 'Zona: ' + data.site.pop.comuna.zona.nombre : '' }} - {{ data.site.pop ? 'CRM: ' + data.site.pop.comuna.zona.crm.nombre : '' }}
                                        </div>
                                    </td>

                                    <td class="">
                                        <div class="is-size-7 has-text-weight-normal">
                                            {{ data.site ? data.site.nem_site : '' }}
                                        </div>
                                    </td>

                                    <td class="">
                                        <div class="has-text-weight-light">
                                            Nombre: {{ data.name }}
                                        </div>
                                        <div class="has-text-weight-light">
                                            Antiguo nombre: {{ data.old_name }}
                                        </div>
                                    </td>

                                    <td class="has-text-weight-light has-text-centered">
                                        <button href="/comsites/download" type="button" class="button is-small is-link tooltip" data-tooltip="Tooltip Text">
                                            <font-awesome-icon icon="bars"/>
                                        </button>
                                    </td>
                                </tr>    
                            </tbody> -->

                        </table>
                        <nav class="pagination" role="navigation" aria-label="pagination">
                            <vue-pagination  
                                class="has-text-white"
                                :pagination="roomsData"
                                @paginate="getRoomsData()"
                                :offset="4">
                            </vue-pagination>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="column section">
                <capacity-chart/>
                <growing-chart/>
            </div>
        </div>
    </div>
</template>

<script>
    import VuePagination from '../VuePagination.vue';
    export default {
        components: {
            VuePagination,
            CapacityChart: () => import('./CapacityChart'),
            GrowingChart: () => import('./GrowingChart'),
        },
        props : [
            'crms'
        ],
        data() {
            return {
                roomsData: {
                    total: 0,
                    per_page: 2,
                    from: 1,
                    to: 0,
                    current_page: 1,
                },
                searchText: '',
                currentCrm: 0,
            }
        },

        watch: {
            currentCrm(newValue) {
                this.getRoomsData()
            }
        },

        created() {
        },

        mounted() {
            this.getRoomsData()
        },

        methods: {
            getRoomsData() {
                var params = {
                    'page': this.roomsData.current_page,
                    'crm_id': this.currentCrm,
                    'text': this.searchText != '' ?  this.searchText : 0
                }

                axios.get('/api/rooms', {params: params})
                .then((response) => {
                    this.roomsData = response.data;
                })
            },
            clearSearch() {
                this.searchText = ''
                this.getRoomsData()
            },
            criticity(site) {
                var crit
                if (site.rooms) {
                    site.rooms.forEach(function(item) {
                        if (item.criticity == 1) { 
                            crit = 1
                        }
                    })
                }
                return crit
            },
        }
    }
</script>
