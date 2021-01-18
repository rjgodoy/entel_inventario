<template>
    <div class="field">          
        <table class="table is-fullwidth has-background-black-ter has-text-white">
            <thead>
                <tr class="">
                    <th class="is-size-6 has-text-weight-semibold has-text-white has-text-left" width="25%">
                        <abbr title="id">POP</abbr>
                    </th>
                    <th class="is-size-6 has-text-weight-semibold has-text-white has-text-left" width="75%">
                        <div class="columns">
                            <div class="column is-4">
                                <abbr title="Sala">SALA</abbr>
                            </div>
                            <div class="column has-text-centered">
                                <abbr title="Estado / Disponibilidad">ESTADO / DISPONIBILIDAD</abbr>
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
    </div>
</template>

<script>
    export default {
        components: {
            RoomLights: () => import(/* webpackChunkName: "chunks/capacity/roomLights"*/'./RoomLights'),
        },

        props : [
            'user',
            'roomsData'
        ],

        methods: {
            orderedRooms: function (pop) {
                return _.orderBy(pop.rooms, 'order')
            },
        },
    }
</script>