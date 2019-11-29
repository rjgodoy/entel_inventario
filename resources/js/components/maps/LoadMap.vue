<template>
    <div>
        <div
        class="map"
        ref="map"
        ></div>
        <template v-if="Boolean(this.google) && Boolean(this.map)">
            <slot
            :google="google"
            :map="map"
            />
        </template>
    </div>
</template>

<script>
    import GoogleMapsApiLoader from "google-maps-api-loader"
    export default {
        props: {
            configMap: Object,
            apiKey: String,
            selectedPop: Object,
            pops: Array,
            darkMode: Number
        },

        data() {
            return {
                google: null,
                map: null,
                bounds: null
            };
        },

        watch: {
            selectedPop(newValue, oldValue) {
                this.configMap.center = { lat: parseFloat(newValue.latitude), lng: parseFloat(newValue.longitude) }
                this.configMap.zoom = 17
                // this.initializeMap()
            },
            pops(newValue, oldValue) {
                this.bounds = new this.google.maps.LatLngBounds()
                for (let m of newValue) {
                    this.bounds.extend(({ lat: parseFloat(m.latitude), lng: parseFloat(m.longitude) }))
                }
                // Don't zoom in too far on only one pop
                if (this.bounds.getNorthEast().equals(this.bounds.getSouthWest())) {
                    var extendPoint1 = new this.google.maps.LatLng(this.bounds.getNorthEast().lat() + 0.01, this.bounds.getNorthEast().lng() + 0.01)
                    var extendPoint2 = new this.google.maps.LatLng(this.bounds.getNorthEast().lat() - 0.01, this.bounds.getNorthEast().lng() - 0.01)
                    this.bounds.extend(extendPoint1);
                    this.bounds.extend(extendPoint2);
                }
                this.map.fitBounds(this.bounds)
            },
            darkMode(newValue, oldValue) {
                // this.initializeMap()
                this.map.fitBounds(this.bounds)
            }
        },

        async mounted() {
            const googleMapApi = await GoogleMapsApiLoader({
                apiKey: this.apiKey
            });
            this.google = googleMapApi
            this.initializeMap()
        },

        methods: {
            initializeMap() {
                const mapContainer = this.$refs.map
                this.map = new this.google.maps.Map(mapContainer, this.configMap)
                // var markerCluster = new MarkerClusterer(map, this.pops, {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
            }
        }

    };
</script>

<style scoped>
.map {
    min-height: 100%;
}
</style>