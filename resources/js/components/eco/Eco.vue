<template>
    <section class="section is-marginless" :class="bodyBackground">
        <div class="container">


            <!-- <div id="start" class="box">start</div>
            <br/>
            <br/>
            <br/>
            <div id="end" class="box">end</div> -->


            <div class="tile is-ancestor">
                <div class="tile">
                    <div class="tile is-vertical">
                        <div class="tile is-parent">
                            <protected-zones
                                :user="user"/>
                        </div>
                    </div>
                    <div class="tile is-vertical">
                        <div class="tile is-parent">
                            <temporal-storages
                                :user="user"/>
                        </div>
                        <div class="tile is-parent">
                            <rcas
                                :user="user"/>
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
            'user'
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
