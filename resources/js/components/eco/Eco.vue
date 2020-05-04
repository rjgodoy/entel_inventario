<template>
    <section class="section has-background-light">

        <div class="tile is-ancestor">

            <div class="tile">
                    <div class="tile is-parent is-3">
                        <protected-zones 
                            :protectedZones=protectedZones
                            :user="user"/>
                    </div>

                    <div class="tile is-parent">

                        <div class="tile is-child box">
                            <eco-map-view
                                :user="user"
                                :pops="pops"
                                :map_attributes="map_attributes"
                            />   
                        </div>    
                    </div>

                    <div class="tile is-parent is-3">
                        <temporal-storages 
                            :storageZones=storageZones
                            :user="user"/>
                    </div>
                </div>
            </div>
        </div>

        <!-- <div class="tile is-parent">
            <rcas :user="user"/>
        </div> -->

    </section>
</template>

<script>
    export default {
        components: {
            EcoMapView: () => import('../maps/EcoMapView'),
            Rcas: () => import('./RCAs'),
            TemporalStorages: () => import('./TemporalStorages'),
            ProtectedZones: () => import('./ProtectedZones')
        },

        props : [
            'user'
        ],

        data() {
            return {
                protectedZones: [],
                storageZones: [],
                map_attributes: {
                    latitude: -33.44444275,
                    longitude: -70.6561017,
                    zoom: 5,
                    storageIcon: '../img/markers/storagePin.png',
                    protectedZoneIcon: '../img/markers/entelEcoPin.png'
                },
            }
        },

        computed: {
            pops() {
                var array = [];
                this.protectedZones && this.protectedZones.forEach(element => array.push(element))
                this.storageZones && this.storageZones.forEach(element => array.push(element))
                return array
            }
        },

        mounted() {
            this.getProtectedZones()
            this.getStorageZones()
        },

        methods: {
            getProtectedZones() {
                axios.get(`/api/eco?api_token=${this.user.api_token}`).then((response) => {
                    this.protectedZones = response.data.environmentalData
                    // console.log(this.protectedZones)
                })
            },
            getStorageZones() {
                axios.get(`/api/storages?api_token=${this.user.api_token}`).then((response) => {
                    this.storageZones = response.data.environmentalData
                    console.log(this.storageZones)
                })
            },
        }
    }
</script>
