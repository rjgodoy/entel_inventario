<script>
 
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
        }
    },

    mounted() {
        const { Marker } = this.google.maps;

        new Marker({
            position: { lat: parseFloat(this.marker.latitude), lng: parseFloat(this.marker.longitude) },
            marker: this.marker,
            map: this.map,
            title: this.marker.nombre
        });

    },

    render() {}
};
 
</script>