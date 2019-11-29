<template>
    <gmap-map
        class=""
        style="height: 100%"
        ref="map"
        :center="center"
        :zoom="15"
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

        <!-- Dependencias -->
        <div class="" id="myDependencesButton">
            <button 
                class="button is-default" 
                @click="dependences" 
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
        </div>

        <!-- MAPA W/O CLUSTER -->
        <gmap-marker"
            ref="myMarker"
            :key="index"
            v-for="(marker, index) in markers"
            :clickable="true"
            :draggable="true"
            @click="toggleInfoWindow(marker, index)"
            :position="marker.position"
            :icon="icon"
        />
        <gmap-info-window"
            :options="infoOptions"
            :position="infoWindowPos"
            :opened="infoWinOpen"
            @closeclick="infoWinOpen=false"
            content="Hello"
            >
            <div v-html="infoContent"></div>
        </gmap-info-window>
    </gmap-map>
</template>

<script>
    import { gmapApi } from 'vue2-google-maps'
    export default {
        props : [ 
            'pop',
            'darkMode',
        ],
        data() {
            return {
                pops: [],
                map: null,
                center: { lat: parseFloat(this.pop.latitude), lng: parseFloat(this.pop.longitude) },
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
                icon: '../img/markers/entel-pin-32.png',
                markers: [],
                google: gmapApi,
                mapStyle: null,
                dependencesActive: 0,
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
        created() {
            if (this.darkMode == 1) {
                this.mapStyle = this.style2
            } else {
                this.mapStyle = null
            }
        },
        mounted() {
            this.getPops()
            this.dependencesButton()
        },
        watch: {
            darkMode(newValue, oldValue) {
                if (newValue == 1) {
                    this.mapStyle = this.style2
                } else {
                    this.mapStyle = null
                }
            }
        },
        methods: {
            toggleInfoWindow: function (marker, idx) {
                this.infoWindowPos = marker.position;
                this.infoContent = this.getInfoWindowContent(marker);

                //check if its the same marker that was selected if yes toggle
                if (this.currentMidx == idx) {
                    this.infoWinOpen = !this.infoWinOpen;
                }
                //if different marker set infowindow to open and reset current marker index
                else {
                    this.infoWinOpen = true;
                    this.currentMidx = idx;
                }

                this.$refs.map.$mapPromise.then((map) => {
                    map.panTo(marker.position)
                });
            },

            getInfoWindowContent: function (marker) {
                return (`
                    <div class="card">
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title is-4">${marker.name}</p>
                                </div>
                            </div>
                            <div class="content">
                                ${marker.address}
                                <br>
                                <a href="/pop/${marker.id}" class="button is-small">Ver POP</a>
                            </div>
                        </div>
                    </div>
                `);
            },

            getPops() {
                this.pops = [this.pop]
                this.pops.forEach(this.popLocations)
                //Set bounds of the map
                this.$refs.map.$mapPromise.then((map) => {
                    map.panTo({ lat: parseFloat(this.pop.latitude), lng: parseFloat(this.pop.longitude) })
                });

                // this.$refs.map.$mapPromise.then((map) => {
                //     // map.panTo({ lat: this.popSelected.latitude, lng: this.popSelected.longitude })
                //     var bounds = new google.maps.LatLngBounds()

                //     // Create bounds from markers
                //     for (let m of this.markers) {
                //         bounds.extend(m.position)
                //     }

                //     // Don't zoom in too far on only one marker
                //     if (bounds.getNorthEast().equals(bounds.getSouthWest())) {
                //         var extendPoint1 = new google.maps.LatLng(bounds.getNorthEast().lat() + 0.01, bounds.getNorthEast().lng() + 0.01);
                //         var extendPoint2 = new google.maps.LatLng(bounds.getNorthEast().lat() - 0.01, bounds.getNorthEast().lng() - 0.01);
                //         bounds.extend(extendPoint1);
                //         bounds.extend(extendPoint2);
                //     }

                //     map.fitBounds(bounds)   
                // });
            },
            popLocations(item, index) {
                this.markers.push(
                    {
                    id: item.id,
                    position: {
                        lat: parseFloat(item.latitude),
                        lng: parseFloat(item.longitude )
                    }, 
                    name: item.nombre, 
                    address: item.direccion
                    },
                )
            },
            dependences() {
                if (this.dependencesActive == 0) {
                    this.dependencesActive = 1
                    this.buttonText = 'POP'
                } else {
                    this.dependencesActive = 0
                    this.buttonText = 'Dependencias'
                }
            },
            dependencesButton() {
                if (this.dependencesActive == 0) {
                    this.buttonText = 'Dependencias'
                } else {
                    this.buttonText = 'POP'
                }
                this.$refs.map.$mapPromise.then((map) => {
                    var myButton = document.getElementById('myDependencesButton');
                    myButton.index = 1;
                    map.controls[google.maps.ControlPosition.TOP_LEFT].push(myButton)
                })
            }
        }
    }  
</script>

