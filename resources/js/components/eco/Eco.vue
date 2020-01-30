<template>
    <section class="section is-marginless" :class="bodyBackground">
        <div class="container">
            <div class="tile is-ancestor">
                <div class="tile is-parent">
                    <div class="tile is-vertical">
                        <div class="tile is-parent">
                            <div class="tile is-child box">
                                <div class="title">Zonas protegidas</div>
                            </div>
                        </div>
                        <div class="tile is-parent">
                            <div class="tile is-child box">
                                <div class="title">RCA</div>
                            </div>
                        </div>
                    </div>
                    <div class="tile is-parent">
                        <div class="tile is-child box">
                            <div class="title">Zonas de acopio temporal</div>
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
