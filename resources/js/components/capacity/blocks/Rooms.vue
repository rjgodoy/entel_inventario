<template>
    <section class="tile is-parent">
        <!-- <div class="columns tile is-ancestor"> -->

            <!-- <div class="column is-2 tile is-parent">
                <div class="tile is-child box is-dark is-bold">

                    <div class="block">
                        <div class="title has-text-weight-bold is-size-6 has-text-white">PLANTAS RECTIFICADORAS</div>
                        <div class="columns">
                            <div class="column is-8">
                                <div class="has-text-weight-normal is-size-6">Capacidad Total</div>
                                <div class="has-text-weight-normal is-size-6">Capacidad Usada</div>
                                <div class="has-text-weight-normal is-size-6">Capacidad Disponible</div>
                            </div>
                            <div class="column has-text-right">
                                <div class="has-text-weight-normal is-size-6">{{ totalPowerRectifiersCapacity | numeral('0,0.0') }}</div>
                                <div class="has-text-weight-normal is-size-6">{{ usedPowerRectifiersCapacity | numeral('0,0.0') }}</div>
                                <div class="has-text-weight-normal is-size-6">{{ availablePowerRectifiersCapacity | numeral('0,0.0') }}</div>
                            </div>
                        </div>
                    </div>

                    <hr/>

                    <div class="block">
                        <div class="title has-text-weight-bold is-size-6 has-text-white">BATERIAS</div>
                        <div class="columns">
                            <div class="column is-8">
                                <div class="has-text-weight-normal is-size-6">Capacidad Total</div>
                                <div class="has-text-weight-normal is-size-6">Capacidad Usada</div>
                                <div class="has-text-weight-normal is-size-6">Capacidad Disponible</div>
                            </div>
                            <div class="column has-text-right">
                                <div class="has-text-weight-normal is-size-6">{{ totalBatteryCapacity | numeral('0,0.0') }}</div>
                                <div class="has-text-weight-normal is-size-6">{{ usedBatteryCapacity | numeral('0,0.0') }}</div>
                                <div class="has-text-weight-normal is-size-6">{{ availableBatteryCapacity | numeral('0,0.0') }}</div>
                            </div>
                        </div>
                    </div>

                    <hr/>
                    
                    <div class="block">
                        <div class="title has-text-weight-bold is-size-6 has-text-white">AIRES ACONDICIONADOS</div>
                        <div class="columns">
                            <div class="column is-8">
                                <div class="has-text-weight-normal is-size-6">Capacidad Total</div>
                                <div class="has-text-weight-normal is-size-6">Capacidad Usada</div>
                                <div class="has-text-weight-normal is-size-6">Capacidad Disponible</div>
                            </div>
                            <div class="column has-text-right">
                                <div class="has-text-weight-normal is-size-6">{{ totalCapacity | numeral('0,0.0') }}</div>
                                <div class="has-text-weight-normal is-size-6">{{ usedCapacity | numeral('0,0.0') }}</div>
                                <div class="has-text-weight-normal is-size-6">{{ availableCapacity | numeral('0,0.0') }}</div>
                            </div>
                        </div>
                    </div>

                    <hr/>
                    
                    <div class="block">
                        <div class="title has-text-weight-bold is-size-6 has-text-white">DISTRIBUCION</div>
                        <div class="columns">
                            <div class="column is-8">
                                <div class="has-text-weight-normal is-size-6">Capacidad Total</div>
                                <div class="has-text-weight-normal is-size-6">Capacidad Usada</div>
                                <div class="has-text-weight-normal is-size-6">Capacidad Disponible</div>
                            </div>
                            <div class="column has-text-right">
                                <div class="has-text-weight-normal is-size-6">{{ totalCapacity | numeral('0,0.0') }}</div>
                                <div class="has-text-weight-normal is-size-6">{{ usedCapacity | numeral('0,0.0') }}</div>
                                <div class="has-text-weight-normal is-size-6">{{ availableCapacity | numeral('0,0.0') }}</div>
                            </div>
                        </div>
                    </div>

                    <hr/>
                    
                    <div class="block">
                        <div class="title has-text-weight-bold is-size-6 has-text-white">ESPACIO</div>
                        <div class="columns">
                            <div class="column is-8">
                                <div class="has-text-weight-normal is-size-6">Capacidad Total</div>
                                <div class="has-text-weight-normal is-size-6">Capacidad Usada</div>
                                <div class="has-text-weight-normal is-size-6">Capacidad Disponible</div>
                            </div>
                            <div class="column has-text-right">
                                <div class="has-text-weight-normal is-size-6">{{ totalSurface | numeral('0,0.0') }}</div>
                                <div class="has-text-weight-normal is-size-6">{{ usedSurface | numeral('0,0.0') }}</div>
                                <div class="has-text-weight-normal is-size-6">{{ availableSurface | numeral('0,0.0') }}</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div> -->

            <!-- <div class="column tile is-parent"> -->
            <div class="columns is-multiline tile">
                <div class="column tile is-parent" 
                    v-for="sala in orderedRooms" 
                    :key="sala.id" 
                    v-if="sala.id == room.id">
                    <Room 
                        :sala=sala
                        :room=room
                        :pop=pop
                        :user=user
                        :isEditMode=isEditMode
                        @room-distribution="roomsDistribution"
                        @room-surface="roomsSurface"
                        @power-rectifier-data="powerRectifiersTotalCapacity"
                        @battery-data="batteryTotalCapacity"
                    />
                </div>
            </div>
            <!-- </div> -->
        <!-- </div> -->
    </section>
</template>

<script>
    export default {
        components: {
            Room: () => import(/* webpackChunkName: "chunks/capacity/blocks/room"*/'./Room'),
        },

        props : [
            'room',
            'salas',
            'user',
            'pop'
        ],

        data() {
            return {
                totalCapacity: 0,
                usedCapacity: 0,
                totalPowerRectifiersCapacity: 0,
                usedPowerRectifiersCapacity: 0,
                availablePowerRectifiersCapacity: 0,
                totalBatteryCapacity: 0,
                usedBatteryCapacity: 0,
                availableBatteryCapacity: 0,

                totalSurface: 0,
                usedSurface: 0,
                isEditMode: false
                
            }
        },

        computed: {
            orderedRooms: function () {
                return _.orderBy(this.salas, 'order')
            },

            availableCapacity() {
                return this.totalCapacity - this.usedCapacity
            },

            availableSurface() {
                return this.totalSurface - this.usedSurface
            }
        },

        watch: {
            room(val) {
                this.totalCapacity = 0
                this.usedCapacity = 0

                this.totalSurface = 0
                this.usedSurface = 0
                this.totalPowerRectifiersCapacity = 0
                this.usedPowerRectifiersCapacity = 0
                this.availablePowerRectifiersCapacity = 0

                this.totalBatteryCapacity = 0,
                this.usedBatteryCapacity = 0,
                this.availableBatteryCapacity = 0
            }
        },
        
        mounted() {
            // this.getAirConditioners()
            // this.getPowerRectifiers()
        },

        methods: {
            roomsDistribution(value) {
                this.totalCapacity += value.totalCapacity
                this.usedCapacity += value.usedCapacity
            },

            roomsSurface(value) {
                this.totalSurface += value.totalSurface
                this.usedSurface += value.usedSurface
            },

            powerRectifiersTotalCapacity(value) {
                this.totalPowerRectifiersCapacity += value.totalPRCapacity
                this.usedPowerRectifiersCapacity += value.usedPRCapacity
                this.availablePowerRectifiersCapacity += value.availablePRCapacity
            },

            batteryTotalCapacity(value) {
                this.totalBatteryCapacity += value.totalBatteryCapacity
                this.usedBatteryCapacity += value.usedBatteryCapacity
                this.availableBatteryCapacity += value.availableBatteryCapacity
            }
        }
    }
</script>
