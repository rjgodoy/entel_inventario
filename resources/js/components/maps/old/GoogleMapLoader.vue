<template>
    <div>
        <div
        class="google-map"
        ref="googleMap"
        ></div>
        <template v-if="Boolean(this.google) && Boolean(this.map)">
            <slot
            :google="google"
            :map="map"
            :pops="pops"
            />
        </template>
    </div>
</template>

<script>
    import GoogleMapsApiLoader from "google-maps-api-loader";

    export default {
        props: {
            mapConfig: Object,
            apiKey: String,
            pops: Array
        },

        data() {
            return {
                google: null,
                map: null
            };
        },

        async mounted() {
            const googleMapApi = await GoogleMapsApiLoader({
                apiKey: this.apiKey
            });
            this.google = googleMapApi;
            this.initializeMap();
        },

        watch: {
            pops(newValue, oldValue) {
                newValue.length == 1 ? this.setPop() : this.setPops()
            }
        },

        methods: {
            initializeMap() {
                const mapContainer = this.$refs.googleMap;
                this.map = new this.google.maps.Map(mapContainer, this.mapConfig);
            },

            async setPops() {
                // console.log('Holly Shit!!!!!!')
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
                this.map.fitBounds(bounds);
            },

            setPop() {
                // console.log('FUCK YEAH!!!!')
                this.map = new google.maps.LatLng({ lat: parseFloat(this.pops[0].latitude), lng: parseFloat(this.pops[0].longitude) })
                // this.map.setZoom(17)
            },
        },
    };
</script>

<style scoped>
.google-map {
    width: 100%;
    min-height: 100%;
}
</style>
