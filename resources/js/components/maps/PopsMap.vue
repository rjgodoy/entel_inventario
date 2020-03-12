<template>
    <GoogleMapLoader
        :mapConfig="mapConfig"
        apiKey="AIzaSyD45pon-Eth8hRCKipTmYsMnsE-twUbATE"
        ref="map"
        :pops="pops"
        >
        <template slot-scope="{ google, map }">
            <GoogleMapMarker
                v-for="pop in pops"
                :key="pop.id"
                :marker="pop"
                :google="google"
                :map="map"
                :icon="icon"
                @click="toggleInfoWindow(pop, index)"
            />
            <!-- <GoogleMapInfoWindow
                :options="infoOptions"
                :position="infoWindowPos"
                :opened="infoWinOpen"
                :content="infoContent"
                >
                <div v-html="infoContent"></div>
                </GoogleMapInfoWindow>		 -->
                <!-- <GoogleMapLine
                v-for="line in lines"
                :key="line.id"
                :path.sync="line.path"
                :google="google"
                :map="map"
            /> -->
        </template>
    </GoogleMapLoader>
</template>

<script>
    import GoogleMapLoader from "./GoogleMapLoader";
    import GoogleMapMarker from "./GoogleMapMarker";
    // import GoogleMapInfoWindow from "./GoogleMapInfoWindow";
    // import GoogleMapLine from "./GoogleMapLine";

    import { mapSettings } from "../../constants/mapSettings";

export default {
    components: {
        GoogleMapLoader,
        GoogleMapMarker,
        // GoogleMapInfoWindow,
        // GoogleMapLine
    },

    props: [
        'pops',
        'darkMode'
    ],

    data() {
        return {
            map_attributes: {
                position: {
                    lat: -33.44444275,
                    lng: -70.6561017
                },
                zoom: 5
            },

            infoWinOpen: false,
            infoWindowPos: {
                lat: 0,
                lng: 0
            },

            infoOptions: {
                pixelOffset: {
                    width: 0,
                    height: -35
                }
            },
            infoContent: '',

            style8: [
                {"elementType": "geometry","stylers": [{"color": "#212121"}]},{"elementType": "labels.icon","stylers": [{"visibility": "off"}]},{"elementType": "labels.text.fill","stylers": [{"color": "#757575"}]},{"elementType": "labels.text.stroke","stylers": [{
                    "color": "#212121"}]},{"featureType": "administrative","elementType": "geometry","stylers": [{"color": "#757575"}]},{"featureType": "administrative.country","elementType": "labels.text.fill","stylers": [{"color": "#9e9e9e"}]},{"featureType": "administrative.locality","elementType": "labels.text.fill","stylers": [{"color": "#bdbdbd"}]},{"featureType": "poi","elementType": "labels.text.fill","stylers": [{"color": "#757575"}]},{"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#181818"}]},{"featureType": "poi.park","elementType": "labels.text.fill","stylers": [{"color": "#616161"}]},{"featureType": "poi.park","elementType": "labels.text.stroke","stylers": [{"color": "#1b1b1b"}]},{"featureType": "road","elementType": "geometry.fill","stylers": [{"color": "#2c2c2c"}]},{"featureType": "road","elementType": "labels.text.fill","stylers": [{"color": "#8a8a8a"}]},{"featureType": "road.arterial","elementType": "geometry","stylers": [{"color": "#373737"}]},{"featureType": "road.highway","elementType": "geometry","stylers": [{"color": "#3c3c3c"}]},{"featureType": "road.highway.controlled_access","elementType": "geometry","stylers": [{"color": "#4e4e4e"}]},{"featureType": "road.local","elementType": "labels.text.fill","stylers": [{"color": "#616161"}]},{"featureType": "transit","elementType": "labels.text.fill","stylers": [{"color": "#757575"}]},{"featureType": "water","elementType": "geometry","stylers": [{"color": "#000000"}]},{"featureType": "water","elementType": "labels.text.fill","stylers": [{"color": "#3d3d3d"}]}],

            style9: [
                {
                    "featureType": "poi.business","stylers": [{"visibility": "off"}]},{"featureType": "poi.park","elementType": "labels.text","stylers": [{"visibility": "off"}]}]
                };
        },

        watch: {
            pops() {
                // console.log('New POP')
            },

            darkMode(newValue){
                // console.log(newValue)
            }
        },

        computed: {
            icon() {
                if (this.darkMode) {
                    return {
                        url: '../img/markers/pin_entel_sm.png',
                        scaledSize: new google.maps.Size(30, 54),
                        origin: new google.maps.Point(0,0),
                        anchor: new google.maps.Point(0,0)
                    }
                } else {
                    return {
                        url: '../img/markers/entelPin_red-white.png',
                        scaledSize: new google.maps.Size(30, 54),
                        origin: new google.maps.Point(0,0),
                        anchor: new google.maps.Point(0,0)
                    }
                }
            },

            mapConfig() {
                return {
                    ...mapSettings,
                    center: this.map_attributes.position,
                    styles: this.mapStyle,
                    backgroundColor: this.darkMode == 1 ? '#fff' : '#DBFAF0',
                    zoom: 3
                };
            },
            mapStyle() {
                return this.darkMode == 1 ? this.style8 : this.style9
            },
        },

        methods: {

            // toggleInfoWindow(pop, idx) {
            // 	console.log(pop)
            //     this.infoWindowPos = { 
            //     	lat: parseFloat(pop.latitude), 
            //     	lng: parseFloat(pop.longitude) 
            //     };
            //     this.infoContent = this.getInfoWindowContent(pop);

            //     //check if its the same pop that was selected if yes toggle
            //     if (this.currentMidx == idx) {
            //         this.infoWinOpen = !this.infoWinOpen;
            //     }
            //     //if different pop set infowindow to open and reset current pop index
            //     else {
            //         this.infoWinOpen = true;
            //         this.currentMidx = idx;
            //     }

            //     // this.$refs.map.$mapPromise.then((map) => {
            //     //     map.panTo({ lat: parseFloat(pop.latitude), lng: parseFloat(pop.longitude) })
            //     // });
            // },

            // getInfoWindowContent(pop) {
            //     return (`<div class="card">
            //             <div class="card-content">
            //                 <div class="media">
            //                     <div class="media-left">
            //                         <span class="tag ${pop.classification_type_id == 1 ? 'is-danger' : 
            //                                         (pop.classification_type_id == 2 ? 'is-warning' : 
            //                                         (pop.classification_type_id == 3 ? 'is-blue' : 'is-link'))} is-large has-text-weight-bold" data-tooltip="Categoría">
            //                             ${pop.classification_type}
            //                         </span>
            //                     </div>
            //                     <div class="media-content">
            //                         <p class="has-text-weight-bold is-size-4">${pop.nombre}</p>
            //                         <p class="has-text-weight-normal is-size-6">${pop.direccion ? pop.direccion : 'Sin dirección registrada'}, ${pop.nombre_comuna}</p>
            //                         <p class="has-text-weight-light is-size-6">Zona ${pop.nombre_zona}, CRM ${pop.nombre_crm}</p>
            //                     </div>
            //                 </div>

            //                 <div class="content">
            //                     <a href="/pop/${pop.id}" target="_blank" class="button is-outlined is-primary is-small">
            //                         <font-awesome-icon icon="info-circle"/>
            //                         &nbsp;Ver detalles
            //                     </a>
            //                 </div>
            //             </div>
            //         </div>`)
            // },
        }
    };
</script>
