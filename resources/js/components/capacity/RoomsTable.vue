<template>
    <div class="field">          
        <table class="table is-fullwidth has-background-black-ter has-text-white">
            <thead>
                <tr class="">
                    <th class="is-size-6 has-text-weight-semibold has-text-white has-text-left">
                        <abbr title="id">POP</abbr>
                    </th>
                    <th class="is-size-6 has-text-weight-semibold has-text-white">
                        <div class="columns">
                            <div class="column is-4 has-text-left">
                                <abbr title="Sala">SALA</abbr>
                            </div>
                            <div class="column has-text-centered">
                                <abbr title="Estado / Disponibilidad">Estado / Disponibilidad</abbr>
                            </div>
                        </div>
                    </th>
                </tr>
            </thead>
            
            <tbody>
                <tr class="" v-for="pop in roomsData.data" :key="pop.id">
                    <td class="">
                        <div class="">
                            <a class="is-size-5 has-text-weight-bold has-text-white" target="_blank" :href="'/pop/' + pop.id">
                                {{ pop ? pop.nombre : '' }}
                            </a>
                            <div class="is-size-6 has-text-weight-normal">
                                Comuna de {{ pop ? pop.comuna.nombre_comuna : '' }}
                            </div>
                            <div class="is-size-7 has-text-weight-light">
                                {{ pop ? 'Zona: ' + pop.comuna.zona.nombre_zona : '' }} - {{ pop ? 'CRM: ' + pop.comuna.zona.crm.nombre_crm : '' }}
                            </div>
                        </div>
                    </td>

                    <td class="">
                        <div class="field" v-for="room in orderedRooms(pop)" :key="room.id">
                            <div class="columns is-vcentered">
                                <div class="column is-4">
                                    <router-link class=" has-text-weight-bold has-text-white" :to="'/capacity/' + room.id" target="_blank">
                                        <div class="is-size-5">{{ room.name }}</div>
                                        <div v-if="room.old_name" class="has-text-weight-light is-size-6">{{ room.old_name }}</div>
                                    </router-link>
                                </div>

                                <div class="column">

                                    <RoomLights 
                                        :room=room
                                        :user=user
                                    />
                                    
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>    
            </tbody>
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
</template>

<script>
    // import { library } from "@fortawesome/fontawesome-svg-core";
    // import { faCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
    // import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
    // import { faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons'
    // library.add(faCircle, faSearch);

    import VuePagination from '../VuePagination.vue';
    export default {
        components: {
            VuePagination,
            RoomLights: () => import(/* webpackChunkName: "chunks/capacity/roomLights"*/'./RoomLights'),
            ModalRoom: () => import(/* webpackChunkName: "chunks/capacity/modals/modalRoom"*/'./modals/ModalRoom')
        },
        props : [
            'user',
            'user_permissions',
            'roomsData'
        ],
        data() {
            return {

            }
        },

        computed: {
        },

        created() {
        },

        mounted() {
        },

        methods: {
            orderedRooms: function (pop) {
                return _.orderBy(pop.rooms, 'order')
            },
        },

    }
</script>