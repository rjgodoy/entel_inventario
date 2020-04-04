<template>
    <section class="section is-marginless" :class="bodyBackground">
        <div class="container">
            <div class="tile is-ancestor">
                <div class="tile">
                    <div class="tile is-vertical">
                        <div class="tile is-parent">
                            <protected-zones/>
                        </div>
                    </div>
                    <div class="tile is-vertical">
                        <div class="tile is-parent">
                            <temporal-storages/>
                        </div>
                        <div class="tile is-parent">
                            <rcas/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
</template>

<script>
    export default {
        components: {
            Rcas: () => import('./RCAs'),
            TemporalStorages: () => import('./TemporalStorages'),
            ProtectedZones: () => import('./ProtectedZones')
        },
        props : [
        ],
        data() {
            return {
                darkMode: 0,
                bodyBackground: '',
                boxBackground: '',
                primaryText: '',
                secondaryText: '',
                searchBodyBackground: '',
            }
        },
        created() {
        },
        mounted() {
        },
        methods: {
        }
    }
</script>
