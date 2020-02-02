<template>
    <section class="hero is-fullheight is-black has-background">
        <img class="hero-background is-transparent" src="/img/bg-hero-satellite.jpg" />
        <div class="hero-body">
            <div class="container">
                <div class="columns is-centered">
                    <div class="column is-5-tablet is-5-desktop is-5-widescreen">
                        <figure class="image is-128x128 has-image-centered" style="margin: -200px auto -30px auto;">
                            <img class="" src="/img/iconografia/entel-logo-negativo.png">
                        </figure>
                        <br/>
                        <div class=" has-text-centered">
                            <h1 class="is-size-2 has-text-weight-bold">{{ app_name }}</h1>
                            <div class="is-size-4 has-text-light has-text-weight-semibold">Subgerencia Infraestructura, Poder y Clima</div>
                            <div class="is-size-5 has-text-light has-text-weight-normal">Gerencia O&M Redes de Acceso</div>
                        </div>

                        <div class="is-divider" style="margin: 20px auto 20px auto"></div>

                        <router-view></router-view>
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
        props: [
            'app_name'
        ],
        data() {
            return {
            }
        },
        mounted() {
            console.log(this.$route.path)
        },
        computed: {
        },
        methods: {
            
        }
    }
</script>
