<template>
    <section class="is-paddingless">
        <div v-for="layout in layouts" :key="layout.id">
            <iframe height='610' :src="layout.iframe" frameborder='0' allowfullscreen allow='xr-spatial-tracking' style="width: 100%;"></iframe>
        </div>
    </section>
</template>

<script>
export default {
    components: {
    },
    props : [
        'layouts'
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
