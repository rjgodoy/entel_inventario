<template>
    <section class="section is-marginless" :class="bodyBackground">
        <div class="container">
            <div class="tile is-ancestor">
                <div class="tile is-parent">
                    <div class="tile is-vertical">
                        <div class="tile is-parent">
                            <div class="tile is-child box">
                                <div class="title">Informes</div>
                            </div>
                        </div>
                        <div class="tile is-parent">
                            <div class="tile is-child box">
                                <div class="title">Levantamientos</div>
                            </div>
                        </div>
                    </div>
                    <div class="tile is-parent">
                        <div class="tile is-child box">
                            <div class="title">Otros</div>
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
            'user'
        ],
        data() {
            return {
                
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
