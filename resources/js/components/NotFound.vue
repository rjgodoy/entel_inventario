<template>
    <section class="hero is-fullheight is-black has-background">
        <img class="hero-background is-transparent" :src="'/img/backgrounds/' + backgroundImage + '.jpg'" />
        <div class="hero-body">
            <div class="container">
                <div class="columns is-centered">
                    <div class="column is-5-tablet is-5-desktop is-5-widescreen">
                        <figure class="image is-128x128 has-image-centered" style="margin: -200px auto -30px auto;">
                            <img class="" src="/img/iconografia/entel-logo-negativo.png">
                        </figure>
                        <br/>
                        <div class=" has-text-centered">
                            <h1 class="is-size-2 has-text-weight-bold">Inventario Infraestructura</h1>
                            <div class="is-size-4 has-text-light has-text-weight-semibold">Subgerencia Infraestructura, Poder y Clima</div>
                            <div class="is-size-5 has-text-light has-text-weight-normal">Gerencia O&M Redes de Acceso</div>
                        </div>

                        <div class="is-divider" style="margin: 20px auto 20px auto"></div>

                        <div class="box-translucent">
                            <div class="columns is-vcentered" style="">
                                <div class="column is-4 has-text-centered has-text-white">
                                    <div class="has-text-weight-bold is-size-6">Disculpa, {{ user.name }}...</div>
                                    <div class="has-text-weight-bold is-size-1">404</div>
                                    <div class="has-text-weight-bold is-size-4">Página no encontrada</div>
                                </div>
                                <div class="column">
                                    <div class="field">
                                        <div class="has-text-weight-normal is-size-6 has-text-white">Tal vez buscas algo aquí:</div>
                                    </div>
                                    <div class="columns is-multiline has-text-white">
                                        <div class="column is-6" v-for="link in links">
                                            <router-link :to="link.path" class="is-size-6 has-text-weight-bold">
                                                <li>{{ link.title }}</li>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

    export default {
        props: ['user'],

        data() {
            return {
                links: Array
            }
        },

        mounted() {
            this.getLinks()
        },

        computed: {
            backgroundImage() {
                return Math.floor(Math.random() * 5) + 1
            }
        },

        methods: {
            getLinks() {
                axios.get('/api/menus')
                .then(response => {
                    this.links = response.data.menus
                })
            },
        }
    }
</script>
