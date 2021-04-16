<template>
    <div style="height: 95%; padding-bottom: 0px" id="map"/>
</template>

<script>
    import MarkerClusterer from '@google/markerclusterer';
    import gmapsInit from '../../constants/gmaps'
    export default {
        name: 'App',

        props: [ 
            'pops',
        ],

        data () {
            return { 
                mapAttributes: {
                    latitude: -33.4446550,
                    longitude: -70.6561690,
                    zoom: 3
                },
                popData: null
            }
        },

        computed: {
            locations() {
                const array = [];
                for (let m of this.pops) {
                    let position = 
                    {
                        'id': m.id,
                        'position': {
                            'lat': parseFloat(m.latitude),
                            'lng': parseFloat(m.longitude)
                        }
                    };
                    array.push(position);
                };
                return array;
            },
        },

        watch: {
            pops(value) {
                this.loadMap();
            }
        },

        mounted() {
            // 
        },

        methods: {
            async loadMap() {
                try {
                    const google = await gmapsInit();
                    const map = new google.maps.Map(document.getElementById('map'), {
                        center: {lat: parseFloat(this.mapAttributes.latitude), lng: parseFloat(this.mapAttributes.longitude)},
                        zoom: this.mapAttributes.zoom
                    });

                    const markerClickHandler = (marker) => {                     
                        map.setZoom(13);
                        map.setCenter(marker.getPosition());
                        axios.get(`/api/popInfo/${marker.id}`)
                        .then(response => {
                            this.popData = response.data;
                            var class_id = 6; var class_type
                            this.popData.sites && this.popData.sites.forEach(function(item) {
                                if (item.classification_type_id && item.classification_type_id < class_id) { 
                                    class_id = item.classification_type_id
                                    class_type = item.classification_type.classification_type
                                }
                            })
                            const comuna = this.popData.comuna ? this.popData.comuna.nombre_comuna : '';
                            const zona = this.popData.zona ? this.popData.zona.nombre_zona : '';
                            const crm = this.popData.zona ? this.popData.zona.crm.nombre_crm : '';
                            const infowindow = new google.maps.InfoWindow({
                                content: (`
                                    <div class="card">
                                        <div class="card-content">
                                            <div class="media">
                                                <div class="media-left">
                                                    <span class="tag ${class_id == 1 ? 'is-danger' : 
                                                                    (class_id == 2 ? 'is-warning' : 
                                                                    (class_id == 3 ? 'is-blue' : 'is-link'))} is-large has-text-weight-bold" data-tooltip="Categoría">
                                                        ${class_type}
                                                    </span>
                                                </div>
                                                <div class="media-content">
                                                    <p class="has-text-weight-bold is-size-4">${this.popData.nombre}</p>
                                                    <p class="has-text-weight-normal is-size-6">${this.popData.direccion ? this.popData.direccion : 'Sin dirección registrada'}, ${comuna}</p>
                                                    <p class="has-text-weight-light is-size-6">Zona ${zona}, CRM ${crm}</p>
                                                </div>
                                            </div>

                                            <div class="content">
                                                <a href="/pop/${this.popData.id}" target="_blank" class="button is-outlined is-link is-small">
                                                    <font-awesome-icon icon="info-circle"/>
                                                    &nbsp;Ver detalles
                                                </a>
                                            </div>
                                        </div>
                                    </div>`),
                            });
                            infowindow.open(map, marker);
                        })    
                    };

                    const markers = this.locations
                        .map((location) => {
                            const marker = new google.maps.Marker({ ...location, map });
                            if (this.locations.length > 1) {
                                marker.addListener('click', () => markerClickHandler(marker));    
                            } else { markerClickHandler(marker) }
                            return marker;
                        });

                    new MarkerClusterer(map, markers, {
                        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
                    });

                } catch (error) {
                    console.error(error);
                }
            },

        }
    }
</script>
