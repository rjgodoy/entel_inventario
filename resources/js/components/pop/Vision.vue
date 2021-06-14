<template>
    <section class="is-paddingless">
        <iframe height='610' :src="layout.iframe" frameborder='0' allowfullscreen allow='xr-spatial-tracking' style="width: 100%;"></iframe>
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
