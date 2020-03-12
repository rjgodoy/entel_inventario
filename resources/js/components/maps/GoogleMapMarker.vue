<script>
    // import { POINT_MARKER_ICON_CONFIG } from "../../constants/mapSettings";

    export default {
        props: {
            google: {
                type: Object,
                required: true
            },
            map: {
                type: Object,
                required: true
            },
            marker: {
                type: Object,
                required: true
            },
            icon: {
                type: Object,
                required: false
            }
        },

        mounted() {
            const { Marker } = this.google.maps;
            new Marker({
                position: { lat: parseFloat(this.marker.latitude), lng: parseFloat(this.marker.longitude) },
                marker: this.marker,
                map: this.map,
                icon: this.icon,
            });
        },

        render() {}
    };
</script>
