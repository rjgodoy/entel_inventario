<template>

    <LoadMap
        class="tile is-child box"
        style="margin-top: -20px;"
        :class="boxBackground"
        :configMap="configMap"
        apiKey="AIzaSyD45pon-Eth8hRCKipTmYsMnsE-twUbATE"
        :selectedPop="selectedPop"
        :pops="pops"
        :darkMode="darkMode"
        >

        <template slot-scope="{ google, map }">
            <Marcadores
            v-for="pop in pops"
            :key="pop.pop_id"
            :marker="pop"
            :google="google"
            :map="map"
            />
        </template>

    </LoadMap>

</template>

<script>

    import LoadMap from "./LoadMap";
    import Marcadores from "./Marcadores";
    import { configMap } from "../../constants/configMap";

    export default {
        components: {
            LoadMap,
            Marcadores
        },

        props: {
            boxBackground: String,
            selectedPop: Object,
            selectedCrm: Object,
            selectedZona: Object,
            selectedPops: Array,
            map_attributes: Object,
            darkMode: Number,
            core: Number
        },

        data() {
            return {
                pops: null,
                popList: null,

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
            };
        },

        watch: {
            selectedPop(newValue, oldValue) {
                newValue != null ? this.pops = [newValue] : this.getPops()
            },
            selectedCrm(newValue, oldValue) {
                this.getPops()
            },
            selectedZona(newValue, oldValue) {
                this.getPops()
            },
            darkMode(newValue, oldValue) {
                this.configMap.styles = newValue == 1 ? this.style2 : null
            },
            core(newValue, oldValue) {
                this.getPops()
            }
        },

        mounted() {
            this.getPops()
        },

        methods: {
            getPops() {
                if (this.core == 0) {
                    if (this.selectedCrm == null) {
                        axios.get(`/api/dashboardMap`)
                        .then((response) => {
                            // La api es consultada y guarda los pop en una variable.
                            if (this.popList == null) {
                                this.popList = response.data.data
                            }
                            this.pops = this.popList
                        })
                        .catch(() => {
                            console.log('handle server error from here');
                        });
                    } else if (this.selectedZona == null) {
                        console.log(this.selectedCrm)
                        axios.get(`/api/dashboardMapCrm/${this.selectedCrm.id}`)
                        .then((response) => {
                            console.log(response.data.data)
                            this.pops = response.data.data;
                        })
                        .catch(() => {
                            console.log('handle server error from here');
                        });
                    } else {
                        axios.get(`/api/dashboardMapZona/${this.selectedZona.id}`)
                        .then((response) => {
                            this.pops = response.data.data;
                        })
                        .catch(() => {
                            console.log('handle server error from here');
                        });
                    }
                } else {
                    if (this.selectedCrm == null) {
                        axios.get(`/api/dashboardMapCore`)
                        .then((response) => {
                            this.pops = response.data.data
                        })
                        .catch(() => {
                            console.log('handle server error from here');
                        });
                    } else if (this.selectedZona == null){
                        axios.get(`/api/dashboardMapCrmCore/${this.selectedCrm.id}`)
                        .then((response) => {
                            this.pops = response.data.data
                        })
                        .catch(() => {
                            console.log('handle server error from here');
                        });
                    } else {
                        axios.get(`/api/dashboardMapZonaCore/${this.selectedZona.id}`)
                        .then((response) => {
                            this.pops = response.data.data
                        })
                        .catch(() => {
                            console.log('handle server error from here');
                        });
                    }
                }
            }
        },

        computed: {
            configMap() {
                return {
                    ...configMap,
                    center: this.mapCenter,
                    styles: this.darkMode == 1 ? this.style2 : null
                }
            },

            mapCenter() {
                return { 
                    lat: this.map_attributes.latitude, 
                    lng: this.map_attributes.longitude 
                }
            }
        }
    };

</script>