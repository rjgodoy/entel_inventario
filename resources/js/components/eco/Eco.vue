<template>
    <div>
        <section class="section has-background-white is-paddingless" style="border-bottom: solid 2px white">
            <div class="columns is-marginless">
                <div class="column tile is-parent is-4 is-paddingless">
                    <pop-protected-zones 
                        :popProtectedZones=popProtectedZones
                        :user="user"/>
                </div>

                <div class="column tile is-parent is-paddingless">
                    <div class="tile is-child map-container">
                        <eco-map-view
                            :user="user"
                            :pops="pops"
                            :map_attributes="map_attributes"
                        />   
                    </div>    
                </div>

                <!-- <div class="tile is-parent is-3">
                    <protected-zones 
                        :protectedZones=protectedZones
                        :user="user"/>
                    
                </div> -->
            </div>
        </section>

        <section class="section has-background-light">
            <div class="tile is-ancestor">
                <div class="tile is-parent">
                    <rcas :user="user"/>
                </div>

                <div class="tile is-parent">
                    <documents :user="user"/>
                </div>

                <div class="tile is-parent">
                    <temporal-storages 
                        :storageZones=storageZones
                        :user="user"/>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
// import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
// import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons'
library.add(farCheckCircle);
    export default {
        components: {
            EcoMapView: () => import(/* webpackChunkName: "chunks/maps/ecoMap"*/'../maps/EcoMapView'),
            Rcas: () => import(/* webpackChunkName: "chunks/eco/rcas"*/'./RCAs'),
            Documents: () => import(/* webpackChunkName: "chunks/eco/documents"*/'./Documents'),
            TemporalStorages: () => import(/* webpackChunkName: "chunks/eco/temporaryStorages"*/'./TemporalStorages'),
            PopProtectedZones: () => import(/* webpackChunkName: "chunks/eco/popProtectedZones"*/'./PopProtectedZones'),
            ProtectedZones: () => import(/* webpackChunkName: "chunks/eco/protectedZones"*/'./ProtectedZones')
        },

        props : [
            'user'
        ],

        data() {
            return {
                popProtectedZones: [],
                protectedZones: [],
                storageZones: [],
                map_attributes: {
                    latitude: -33.44444275,
                    longitude: -70.6561017,
                    zoom: 5,
                    storageIcon: '../img/markers/storagePin.png',
                    protectedZoneIcon: '../img/markers/entel_pop_eco.png'
                },
            }
        },

        computed: {
            pops() {
                var array = [];
                this.popProtectedZones && this.popProtectedZones.forEach(element => array.push(element))
                this.storageZones.environmentalData && this.storageZones.environmentalData.forEach(element => array.push(element))
                return array
            }
        },

        created() {
            this.$eventBus.$on('storage-created', this.getStorageZones)
        },

        mounted() {
            this.getPopProtectedZones()
            this.getProtectedZones()
            this.getStorageZones()
        },

        methods: {
            getPopProtectedZones() {
                axios.get(`/api/eco`).then((response) => {
                    this.popProtectedZones = response.data.environmentalData
                    // console.log(this.popProtectedZones)
                })
            },

            getProtectedZones() {
                axios.get(`/api/ecoZones`).then((response) => {
                    this.protectedZones = response.data.environmentalData
                    // console.log(this.protectedZones)
                })
            },

            getStorageZones() {
                axios.get(`/api/storages`).then((response) => {
                    this.storageZones = response.data
                    // console.log(this.storageZones)
                })
            },
        },

        beforeDestroy() {
            this.$eventBus.$off('storage-created')
        }
    }
</script>
