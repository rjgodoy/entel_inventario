<template>
    <GmapMap
        style="min-height: 576px; height: 100%"
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
            gestureHandling: 'cooperative',
            styles: mapStyle
        }"
        >

        <!-- Dependencias -->
        <div class="" ref="myDependencesButton">
            <button 
                class="button is-link" 
                @click="panDependences(google)" 
                style="
                    border: 2px solid #fff;
                    borderRadius: 3px;
                    boxShadow: 0 1px 5px rgba(0,0,0,.15);
                    marginTop: 10px;
                    marginLeft: 10px;
                    textAlign: center;
                ">
                {{ buttonName }}
            </button>
        </div>

        <!-- MAPA W/O CLUSTER -->
        <GmapMarker
            ref="myMarker"
            :key="index"
            v-for="(pop, index) in pops"
            :clickable="true"
            :draggable="false"
            @click="pop.id == popMaster.id ? null : toggleInfoWindow(pop, index)"
            :position="google && new google.maps.LatLng({ lat: parseFloat(pop.latitude), lng: parseFloat(pop.longitude) })"
            :icon="pop.id == popMaster.id ? icon_pop : icon_dependence"
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
    </GmapMap>
</template>

<!-- <style lang="scss" scoped>
</style> -->

<script>
    import { library } from "@fortawesome/fontawesome-svg-core";
    import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
    // import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
    // import { faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons'
    library.add(faInfoCircle);
    import { gmapApi } from 'vue2-google-maps'
    export default {
        props : [ 
            'user',
            'classification',
            'popMaster',
            'darkMode'
        ],
        data() {
            return {
                pops: [],
                dependences: [],
                map: null,
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
                zoom: 17,
                icon_dependence: '../img/markers/pop-32.png',
                markers: [],
                dependencesActive: 0,
                // buttonName: 'Dependencias',
                depLines: [],
                arrayPath: [],
                // flightPath: null,

                style8: [
                    {"elementType": "geometry","stylers": [{"color": "#212121"}]},{"elementType": "labels.icon","stylers": [{"visibility": "off"}]},{"elementType": "labels.text.fill","stylers": [{"color": "#757575"}]},{"elementType": "labels.text.stroke","stylers": [{
                            "color": "#212121"}]},{"featureType": "administrative","elementType": "geometry","stylers": [{"color": "#757575"}]},{"featureType": "administrative.country","elementType": "labels.text.fill","stylers": [{"color": "#9e9e9e"}]},{"featureType": "administrative.locality","elementType": "labels.text.fill","stylers": [{"color": "#bdbdbd"}]},{"featureType": "poi","elementType": "labels.text.fill","stylers": [{"color": "#757575"}]},{"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#181818"}]},{"featureType": "poi.park","elementType": "labels.text.fill","stylers": [{"color": "#616161"}]},{"featureType": "poi.park","elementType": "labels.text.stroke","stylers": [{"color": "#1b1b1b"}]},{"featureType": "road","elementType": "geometry.fill","stylers": [{"color": "#2c2c2c"}]},{"featureType": "road","elementType": "labels.text.fill","stylers": [{"color": "#8a8a8a"}]},{"featureType": "road.arterial","elementType": "geometry","stylers": [{"color": "#373737"}]},{"featureType": "road.highway","elementType": "geometry","stylers": [{"color": "#3c3c3c"}]},{"featureType": "road.highway.controlled_access","elementType": "geometry","stylers": [{"color": "#4e4e4e"}]},{"featureType": "road.local","elementType": "labels.text.fill","stylers": [{"color": "#616161"}]},{"featureType": "transit","elementType": "labels.text.fill","stylers": [{"color": "#757575"}]},{"featureType": "water","elementType": "geometry","stylers": [{"color": "#000000"}]},{"featureType": "water","elementType": "labels.text.fill","stylers": [{"color": "#3d3d3d"}]}],
                style9: [
                    {
                        "featureType": "poi.business","stylers": [{"visibility": "off"}]},{"featureType": "poi.park","elementType": "labels.text","stylers": [{"visibility": "off"}]}]
            }
        },
        computed: {
            google: gmapApi,
            mapStyle() {
                return this.darkMode == 1 ? this.style8 : this.style9
            },

            center() {
                return { 
                    lat: parseFloat(this.popMaster.latitude), 
                    lng: parseFloat(this.popMaster.longitude) 
                }
            },

            icon_pop() {
                let googleP = this.google
                return {
                    url: '../img/markers/entelPin_red-white.png',
                    scaledSize: googleP && new googleP.maps.Size(30, 54),
                    origin: googleP && new googleP.maps.Point(0,0),
                    anchor: googleP && new googleP.maps.Point(15,54)
                }
            },

            buttonName: {
                get: function() {
                    return this.dependencesActive ? 'POP' : 'Dependencias'
                },
                set: function(newValue) {
                    // this.dependences.forEach(element => this.flightPath.setMap(null))
                }
            }
        },

        mounted() {
            this.setMap()
            this.getDependences()
        },

        methods: {
            setMap() {
                this.pops = [this.popMaster]
                this.$refs.map.$mapPromise.then((map) => {
                    map.panTo({ lat: parseFloat(this.popMaster.latitude), lng: parseFloat(this.popMaster.longitude) })
                    this.pops.length == 1 && map.setZoom(this.zoom)
                })
            },

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
                    map.panTo({ lat: parseFloat(this.popMaster.latitude), lng: parseFloat(this.popMaster.longitude) })
                });
            },

            getInfoWindowContent(pop) {
                // console.log(pop)
                return (`
                    <div class="card">
                        <div class="card-content">
                            <div class="media">
                                <div class="media-left">
                                    <span class="tag ${this.classification == 'A' ? 'is-danger' : (this.classification == 'B' ? 'is-warning' : (this.classification_type_id == 'C' ? 'is-blue' : 'is-link'))} is-large has-text-weight-bold" data-tooltip="Categoría">
                                        ${this.classification}
                                    </span>
                                </div>
                                <div class="media-content">
                                    <p class="has-text-weight-bold is-size-4">${pop.nombre}</p>
                                    <p class="has-text-weight-normal is-size-6">${pop.direccion ? pop.direccion : 'Sin dirección registrada'}, ${pop.comuna.nombre_comuna}</p>
                                    <p class="has-text-weight-light is-size-6">Zona ${pop.comuna.zona.nombre_zona}, CRM ${pop.comuna.zona.crm.nombre_crm}</p>
                                </div>
                            </div>

                            <div class="content">
                                <a href="/pop/${pop.id}" class="button is-outlined is-primary is-small">
                                    <font-awesome-icon icon="info-circle"/>
                                    &nbsp;Ver detalles
                                </a>
                            </div>
                        </div>
                    </div>
                `);
            },

            getDependences() {
                axios.get(`/api/dependences/${this.popMaster.id}?api_token=${this.user.api_token}`)
                .then((response) => {
                    this.dependences = response.data.data

                    if (this.dependences.length) {

                        this.dependences.forEach(m => {
                            if(m.dependence) {
                                // console.log(m.dependence.nem_site)
                                let dependenceLine = [
                                    { lat: parseFloat(this.popMaster.latitude), lng: parseFloat(this.popMaster.longitude) }, 
                                    { lat: parseFloat(m.dependence.pop.latitude), lng: parseFloat(m.dependence.pop.longitude) }
                                ]
                                this.depLines.push(dependenceLine)
                            }
                        })
                        this.setDependencesButton()
                    }
                })
            },

            panDependences(google) {
                if (this.dependencesActive) {
                    this.removeLines()
                    this.setMap()
                    this.dependencesActive = 0
                } else {
                    this.dependences.forEach(element => element && this.pops.push(element.dependence.pop))

                    this.$refs.map.$mapPromise.then((map) => {
                        this.depLines.forEach(element => {
                            let flightPath = new google.maps.Polyline({
                                path: element,
                                geodesic: true,
                                strokeColor: '#FF8001',
                                strokeOpacity: 1.0,
                                strokeWeight: 0.5
                            })
                            flightPath.setMap(map)
                            this.arrayPath.push(flightPath)
                            
                        })
                        map.setZoom(14)
                    })
                    this.dependencesActive = 1
                } 
            },

            removeLines() {
                this.arrayPath.forEach(element => element.setMap(null))
            },

            setDependencesButton() {
                this.$refs.map.$mapPromise.then((map) => {
                    var myButton = this.$refs.myDependencesButton
                    myButton.index = 1
                    map.controls[this.google.maps.ControlPosition.TOP_LEFT].push(myButton)
                })
            }

            
        }
    }
</script>

