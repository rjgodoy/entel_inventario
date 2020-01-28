<template>
    <GmapMap
        class="tile is-child box"
        style="height: 100%;"
        ref="map"
        :center="center"
        :zoom="zoom"
        map-type-id="roadmap"
        :options="{
            zoomControl: true,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: true,
            rotateControl: false,
            fullscreenControl: true,
            disableDefaultUi: false,
            styles: mapStyle
        }"
        >

            <!-- ClusterButton -->
            <!-- <div class="" id="myClusterButton">
                <button 
                    class="button is-default" 
                    @click="cluster" 
                    style="
                        border: 2px solid #fff;
                        borderRadius: 3px;
                        boxShadow: 0 1px 5px rgba(0,0,0,.15);
                        marginTop: 10px;
                        marginLeft: 10px;
                        textAlign: center;
                    "
                    >
                    {{ buttonText }}
                </button>
            </div> -->

            <!-- MAPA WITH CLUSTER -->
            <!-- <GmapCluster v-if="clusterActive == 1"> -->
            <GmapMarker
                ref="myMarker"
                :key="index"
                v-for="(pop, index) in pops"
                :clickable="true"
                :draggable="false"
                @click="toggleInfoWindow(pop, index)"
                :position="google && new google.maps.LatLng({ lat: parseFloat(pop.latitude), lng: parseFloat(pop.longitude) })"
                :icon="icon"
            />
            <gmap-info-window 
                :options="infoOptions"
                :position="infoWindowPos"
                :opened="infoWinOpen"
                @closeclick="infoWinOpen=false"
                content="Hello"
                >
                <div v-html="infoContent"></div>
            </gmap-info-window>
            <!-- </GmapCluster> -->

            <!-- MAPA W/O CLUSTER -->
            <!-- <GmapMarker v-if="clusterActive == 0"
                    ref="myMarker"
                    :key="index"
                    v-for="(pop, index) in pops"
                    :clickable="true"
                    :draggable="false"
                    @click="toggleInfoWindow(pop, index)"
                    :position="({ lat: parseFloat(pop.latitude), lng: parseFloat(pop.longitude) })"
                    :icon="icon"
            />
            <gmap-info-window v-if="clusterActive == 0"
                :options="infoOptions"
                :position="infoWindowPos"
                :opened="infoWinOpen"
                @closeclick="infoWinOpen=false"
                content="Hello"
                >
                <div v-html="infoContent"></div>
            </gmap-info-window> -->
        </GmapMap>
</template>

<style lang="scss" scoped>
</style>

<script>
    import { gmapApi } from 'vue2-google-maps'
    export default {
        props : [ 
            'selectedPop',
            'selectedPops',
            'map_attributes',
            'darkMode',
            'criticPopsSwitch',
            'pops'
        ],
        data() {
            return {
                selectedPopMap: null,

                map: null,
                zoom: this.map_attributes.zoom,
                center: { lat: this.map_attributes.latitude, lng: this.map_attributes.longitude },
                infoContent: '',
                infoWindowPos: {
                    lat: 0,
                    lng: 0
                },
                infoWinOpen: false,
                currentMidx: null,
                infoOptions: {
                    pixelOffset: {
                        width: 0,
                        height: -35
                    }
                },
                icon: '../img/markers/pin_entel_sm.png',
                mapStyle: null,
                // clusterActive: 1,
                buttonText: '',

                style1: [
                    {
                        "featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"simplified"}]}],

                style2: [
                    {
                        "featureType":"all","elementType":"all","stylers":[{"invert_lightness":true},{"saturation":10},{"lightness":30},{"gamma":0.5},{"hue":"#435158"}]}],

                style3: [
                    {
                        "featureType":"road","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#fffffa"}]},{"featureType":"water","stylers":[{"lightness":50}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"lightness":40}]}],

                style4: [
                    {
                        "stylers":[{"hue":"#18a689"},{"visibility":"on"},{"invert_lightness":true},{"saturation":40},{"lightness":10}]}],

                style5: [
                    {
                        featureType:"landscape",stylers:[{saturation:-100},{lightness:65},{visibility:"on"}]},{featureType:"poi",stylers:[{saturation:-100},{lightness:51},{visibility:"simplified"}]},{featureType:"road.highway",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"road.arterial",stylers:[{saturation:-100},{lightness:30},{visibility:"on"}]},{featureType:"road.local",stylers:[{saturation:-100},{lightness:40},{visibility:"on"}]},{featureType:"transit",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"administrative.province",stylers:[{visibility:"off"}]/**/},{featureType:"administrative.locality",stylers:[{visibility:"off"}]},{featureType:"administrative.neighborhood",stylers:[{visibility:"on"}]/**/},{featureType:"water",elementType:"labels",stylers:[{visibility:"on"},{lightness:-25},{saturation:-100}]},{featureType:"water",elementType:"geometry",stylers:[{hue:"#ffff00"},{lightness:-25},{saturation:-97}]}],

                style6: [
                    {
                        elementType: 'geometry', stylers: [{color: '#242f3e'}]},{elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},{elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},{featureType: 'administrative.locality',elementType: 'labels.text.fill',stylers: [{color: '#d59563'}]},{featureType: 'poi',elementType: 'labels.text.fill',stylers: [{color: '#d59563'}]},{featureType: 'poi.park',elementType: 'geometry',stylers: [{color: '#263c3f'}]},{featureType: 'poi.park',elementType: 'labels.text.fill',stylers: [{color: '#6b9a76'}]},{featureType: 'road',elementType: 'geometry',stylers: [{color: '#38414e'}]},{featureType: 'road',elementType: 'geometry.stroke',stylers: [{color: '#212a37'}]},{featureType: 'road',elementType: 'labels.text.fill',stylers: [{color: '#9ca5b3'}]},{featureType: 'road.highway',elementType: 'geometry',stylers: [{color: '#746855'}]},{featureType: 'road.highway',elementType: 'geometry.stroke',stylers: [{color: '#1f2835'}]},{featureType: 'road.highway',elementType: 'labels.text.fill',stylers: [{color: '#f3d19c'}]},{featureType: 'transit',elementType: 'geometry',stylers: [{color: '#2f3948'}]},{featureType: 'transit.station',elementType: 'labels.text.fill',stylers: [{color: '#d59563'}]},{featureType: 'water',elementType: 'geometry',stylers: [{color: '#17263c'}]},{featureType: 'water',elementType: 'labels.text.fill',stylers: [{color: '#515c6d'}]},{featureType: 'water',elementType: 'labels.text.stroke',stylers: [{color: '#17263c'}]}],

                style7: [
                    {
                        "elementType":"geometry","stylers":[{"color":"#1d2c4d"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#8ec3b9"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#1a3646"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"color":"#4b6878"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#64779e"}]},{"featureType":"administrative.neighborhood","stylers":[{"visibility":"off"}]},{"featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"color":"#4b6878"}]},{"featureType":"landscape.man_made","elementType":"geometry.stroke","stylers":[{"color":"#334e87"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#023e58"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#283d6a"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#6f9ba5"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"poi.business","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#023e58"}]},{"featureType":"poi.park","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#3C7680"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#304a7d"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#98a5be"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#2c6675"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#255763"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#b0d5ce"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"color":"#023e58"}]},{"featureType":"transit","elementType":"labels.text.fill","stylers":[{"color":"#98a5be"}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"color":"#283d6a"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#3a4762"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#0e1626"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#4e6d70"}]}]
            }
        },
        computed: {
            google: gmapApi
        },
        created() {
            this.mapStyle = this.darkMode == 1 ? this.style2 : this.mapStyle = null
        },
        mounted() {
            
            // if (this.clusterActive == 1) {
            //     this.buttonText = 'Desagrupar'
            // } else {
            //     this.buttonText = 'Agrupar'
            // }
            this.setPops()
            // this.$refs.map.$mapPromise.then((map) => {
            //     var myButton = document.getElementById('myClusterButton');
            //     myButton.index = 1;
            //     map.controls[google.maps.ControlPosition.TOP_LEFT].push(myButton)
            // })
        },
        watch: {
            pops(newValue, oldValue) {
                this.setPops()
            },

            selectedPop(newValue, oldValue) {
                newValue != null ? this.setPop() : this.setPops()
            },

            darkMode(newValue, oldValue) {
                this.mapStyle = newValue == 1 ? this.style2 : null
            },

            criticPopsSwitch(newValue, oldValue) {
                this.setPops()
            },

            // selectedPops(newValue, oldValue) {
            //     if (newValue.length != 0) {
            //         this.pops = newValue
            //         //Set bounds of the map                    
            //         this.$refs.map.$mapPromise.then((map) => {
            //             var bounds = new google.maps.LatLngBounds()
            //             // Create bounds from pops
            //             for (let m of this.pops) {
            //                 // console.log(m)
            //                 bounds.extend(({ lat: parseFloat(m.latitude), lng: parseFloat(m.longitude) }))
            //             }
            //             // Don't zoom in too far on only one marker
            //             if (bounds.getNorthEast().equals(bounds.getSouthWest())) {
            //                 var extendPoint1 = new google.maps.LatLng(bounds.getNorthEast().lat() + 0.01, bounds.getNorthEast().lng() + 0.01);
            //                 var extendPoint2 = new google.maps.LatLng(bounds.getNorthEast().lat() - 0.01, bounds.getNorthEast().lng() - 0.01);
            //                 bounds.extend(extendPoint1);
            //                 bounds.extend(extendPoint2);
            //             }

            //             map.fitBounds(bounds)
            //         });
            //     } else {
            //         this.setPops()
            //     }
            // }
        },
        methods: {
            toggleInfoWindow(pop, idx) {
                this.infoWindowPos = { lat: parseFloat(pop.latitude), lng: parseFloat(pop.longitude) };
                this.infoContent = this.getInfoWindowContent(pop);

                //check if its the same pop that was selected if yes toggle
                if (this.currentMidx == idx) {
                    this.infoWinOpen = !this.infoWinOpen;
                }
                //if different pop set infowindow to open and reset current pop index
                else {
                    this.infoWinOpen = true;
                    this.currentMidx = idx;
                }

                this.$refs.map.$mapPromise.then((map) => {
                    map.panTo({ lat: parseFloat(pop.latitude), lng: parseFloat(pop.longitude) })
                });
            },

            getInfoWindowContent(pop) {
                return (`
                    <div class="card">
                        <!--div class="card-image">
                            <figure class="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/640x480.png" alt="Placeholder image">
                            </figure>
                        </div-->
                        <div class="card-content">
                            <div class="media">
                                <div class="media-left">
                                    <span class="tag ${pop.classification_type_id == 1 ? 'is-danger' : 
                                                    (pop.classification_type_id == 2 ? 'is-warning' : 
                                                    (pop.classification_type_id == 3 ? 'is-blue' : 'is-link'))} is-large has-text-weight-bold" data-tooltip="Categoría">
                                        ${pop.classification_type}
                                    </span>
                                </div>
                                <div class="media-content">
                                    <p class="has-text-weight-bold is-size-4">${pop.nombre}</p>
                                    <p class="has-text-weight-normal is-size-6">${pop.direccion ? pop.direccion : 'Sin dirección registrada'}, ${pop.nombre_comuna}</p>
                                    <p class="has-text-weight-light is-size-6">Zona ${pop.nombre_zona}, CRM ${pop.nombre_crm}</p>
                                </div>
                            </div>

                            <div class="content">
                                <a href="/main#/pop/${pop.pop_id}" target="_blank" class="button is-outlined is-primary is-small">
                                    <font-awesome-icon icon="info-circle"/>
                                    &nbsp;Ver detalles
                                </a>
                            </div>
                        </div>
                    </div>
                `);
            },

            async setPops() {
                this.$refs.map.$mapPromise.then((map) => {
                    const bounds = new google.maps.LatLngBounds()
                    for (let m of this.pops) {
                        bounds.extend(({ lat: parseFloat(m.latitude), lng: parseFloat(m.longitude) }))
                    }
                    // Don't zoom in too far on only one pop
                    if (bounds.getNorthEast().equals(bounds.getSouthWest())) {
                        var extendPoint1 = new google.maps.LatLng(bounds.getNorthEast().lat() + 0.01, bounds.getNorthEast().lng() + 0.01);
                        var extendPoint2 = new google.maps.LatLng(bounds.getNorthEast().lat() - 0.01, bounds.getNorthEast().lng() - 0.01);
                        bounds.extend(extendPoint1);
                        bounds.extend(extendPoint2);
                    }
                    map.fitBounds(bounds);
                });
            },
            
           setPop() {
                this.$refs.map.$mapPromise.then((map) => {
                    map.panTo({ lat: parseFloat(this.selectedPop.latitude), lng: parseFloat(this.selectedPop.longitude) })
                    map.setZoom(15)
                });
            },

            // getPopData(pop) { 
            //     console.log(pop)
            //     axios.get(`/api/pop/${pop.pop_id}`)
            //     .then((response) => {
            //         console.log(response.data.data)
            //         this.selectedPopMap = response.data.data
            //     })
            // }

            // cluster() {
            //     if (this.clusterActive == 0) {
            //         this.clusterActive = 1,
            //         this.buttonText = 'Desagrupar'
            //     } else {
            //         this.clusterActive = 0
            //         this.buttonText = 'Agrupar'
            //     }
            // }
        }
    }  
</script>

