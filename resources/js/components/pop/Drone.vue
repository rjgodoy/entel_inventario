<template>
    <section class="is-paddingless">
        <video height='610' style="width: 100%;" controls>
            <source :src="'/storage/' + layout.drone_footage" type="video/mp4"></source>
            Your browser does not support the HTML5 Video element.
        </video>
    </section>
</template>

<script>
export default {
    components: {
    },
    props : [
        'layout'
    ],
    data() {
        return {   
        }
    },
    mounted() {
    },

    watch: {
    },

    computed: {
    },

    methods: {

    }
}
</script>
