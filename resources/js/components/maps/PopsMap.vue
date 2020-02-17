<template>
	<GoogleMapLoader
		:mapConfig="mapConfig"
		apiKey="AIzaSyD45pon-Eth8hRCKipTmYsMnsE-twUbATE"
		ref="map"
	>
	<template slot-scope="{ google, map }">
		<GoogleMapMarker
			v-for="pop in pops"
			:key="pop.id"
			:marker="pop"
			:google="google"
			:map="map"
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
            pops(newValue, oldValue) {
                console.log(newValue)
            }
        },

		computed: {

			mapConfig() {
				return {
					...mapSettings,
					center: this.map_attributes.position,
					styles: this.darkMode == 1 ? this.style8 : this.style9,
					backgroundColor: this.darkMode == 1 ? '#fff' : '#DBFAF0',
					zoom: 3
				};
			}
		},

		methods: {
			// async setPops() {
   //              // this.$refs.map.$mapPromise.then((map) => {
   //                  // const bounds = new google.maps.LatLngBounds()
   //                  // for (let m of this.pops) {
   //                  //     bounds.extend(({ lat: parseFloat(m.latitude), lng: parseFloat(m.longitude) }))
   //                  // }
   //                  // // Don't zoom in too far on only one pop
   //                  // if (bounds.getNorthEast().equals(bounds.getSouthWest())) {
   //                  //     var extendPoint1 = new google.maps.LatLng(bounds.getNorthEast().lat() + 0.01, bounds.getNorthEast().lng() + 0.01);
   //                  //     var extendPoint2 = new google.maps.LatLng(bounds.getNorthEast().lat() - 0.01, bounds.getNorthEast().lng() - 0.01);
   //                  //     bounds.extend(extendPoint1);
   //                  //     bounds.extend(extendPoint2);
   //                  // }
   //                  // map.fitBounds(bounds);
   //              // });
   //          },

   //          setPop() {
                
   //              // this.$refs.map.$mapPromise.then((map) => {
   //   //            	map = new google.map.LatLng({ lat: parseFloat(this.pops[0].latitude), lng: parseFloat(this.pops[0].longitude) })
			// 		// map.setZoom(17)
   //              // });
   //          },

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
