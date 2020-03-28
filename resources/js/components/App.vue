<template>
    <div class="sticky">

        <header class="section is-paddingless Site-header">
            <div class="columns has-background-black-ter is-marginless">

                <!-- ICONO Y NOMBRE -->
                <!-- ################## -->
                <div class="column is-3 hero is-small">
                    <div class="hero-body">
                        <nav class="navbar">
                            <div class="navbar-brand">
                                <a class="navbar-item" href="#" style="background: url('/img/iconografia/entel-logo-negativo.png') no-repeat center center; background-size: contain; width: 60px;">
                                </a>
                                <div class="navbar-item">
                                    <div class="title is-5 has-text-grey-light">
                                        <div class="is-5 has-text-white">{{ app_name }}</div>
                                        <div class="title is-6 has-text-grey-light">Subgerencia Infraestructura, Poder y Clima</div>
                                        <div class="subtitle is-7 has-text-grey-light">Gerencia O&M Redes de Acceso</div>
                                    </div>
                                </div>

                                <span class="navbar-burger burger" data-target="navbarMenuHeroB">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                            </div>
                        </nav>
                    </div>
                </div>

                <!-- LINKS DE MODULOS -->
                <!-- ################## -->
                <div class="column is-6 hero is-small" style="padding-top: 32px;">
                    <div class="hero-body">
                        <div class="">
                            <ul class="columns">

                                <li v-for="menu in menu_data" class="column has-text-centered" :class="currentRoute.toLowerCase().includes(menu.path) ? 'is-active' : ''">
                                    <router-link :to="menu.path" :class="currentRoute.toLowerCase() === menu.path ? (menu.path == '/eco' ? 'has-text-eco' : 'has-text-link') : ''">
                                        <b-icon 
                                            :pack="menu.icon_type" 
                                            :icon="menu.icon" 
                                            :class="currentRoute.toLowerCase().includes(menu.path) ? (menu.path == '/eco' ? 'has-text-eco' : 'has-text-link') : 'has-text-grey-light'">
                                        </b-icon>
                                        <p class="is-size-7" :class="currentRoute.toLowerCase().includes(menu.path) ? 'has-text-white' : 'has-text-grey-light'">{{ menu.title }}</p>

                                        <div v-if="currentRoute.toLowerCase().includes(menu.path)" :class="menu.path == '/eco' ? 'has-text-eco' : 'has-text-link'" style="border-bottom: 3px solid; padding-top: 5px;"></div>
                                    </router-link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <!-- PERFIL Y RELOJ -->
                <!-- ################## -->
                <div class="column hero is-small" style="padding-top: 16px; margin-bottom: -5px;">
                    <div class="hero-head is-size-6">
                        <div class="navbar-end">
                            <b-dropdown   
                                hoverable                 
                                position="is-bottom-left"
                                aria-role="menu">
                                <a
                                    class="navbar-item has-text-grey-light"
                                    slot="trigger"
                                    role="button">
                                    <b-icon 
                                        icon="bell" 
                                        pack="fas"
                                        :type="alerts.length ? 'is-info' : 'is-dark'">
                                    </b-icon>
                                </a>

                                <b-dropdown-item has-link v-for="alert in alerts" :key="alert.id">
                                    <a :href="alert.to">
                                        <p>
                                            <small class="has-text-info">{{ alert.date }}</small>
                                        </p>
                                        <p>{{ alert.description }}</p>
                                    </a>
                                </b-dropdown-item>

                                <b-dropdown-item  v-if="!alerts.length" aria-role="menuitem">
                                    <b-icon icon="home" pack="fas"></b-icon>
                                    No hay alertas
                                </b-dropdown-item>
                            </b-dropdown>

                            <b-dropdown   
                                hoverable                 
                                position="is-bottom-left"
                                aria-role="menu">
                                <a
                                    class="navbar-item has-text-grey-light"
                                    slot="trigger"
                                    role="button">
                                    <span> Menu </span>
                                    <b-icon icon="angle-down" pack="fas"></b-icon>
                                </a>

                                <b-dropdown-item custom aria-role="menuitem">
                                    <div class="has-text-left">
                                        Bienvenido<br/><b>{{ user.name }} {{ user.apellido }}</b>
                                    </div>
                                </b-dropdown-item>

                                <hr class="dropdown-divider">

                                <b-dropdown-item has-link aria-role="menuitem">
                                    <a href="https://google.com" target="_blank">
                                        <b-icon icon="link" pack="fas"></b-icon>
                                        Google (link)
                                    </a>
                                </b-dropdown-item>

                                <b-dropdown-item value="home" aria-role="menuitem">
                                    <b-icon icon="home" pack="fas"></b-icon>
                                    Home
                                </b-dropdown-item>

                                <b-dropdown-item value="products" aria-role="menuitem">
                                    <b-icon icon="cart" pack="fas"></b-icon>
                                    Products
                                </b-dropdown-item>

                                <b-dropdown-item value="blog" disabled aria-role="menuitem">
                                    <b-icon icon="book-open" pack="fas"></b-icon>
                                    Blog
                                </b-dropdown-item>

                                <hr class="dropdown-divider" aria-role="menuitem">

                                <b-dropdown-item value="settings">
                                    <b-icon icon="settings" pack="fas"></b-icon>
                                    Settings
                                </b-dropdown-item>

                                <b-dropdown-item @click="changeStyle" v-model="darkMode">
                                    <b-icon icon="settings" pack="fas"></b-icon>
                                    {{ style }}
                                </b-dropdown-item>

                                <hr class="navbar-divider">

                                <b-dropdown-item value="logout" aria-role="menuitem">
                                    <a class="bd-is-rss is-small has-text-dark" @click.prevent="logout">
                                        <b-icon icon="logout" pack="fas"></b-icon>
                                        <span class="has-text-weight-bold">Log Out</span>
                                    </a>
                                </b-dropdown-item>
                            </b-dropdown>

                        </div>
                        <div class="navbar-end" style="padding-right: 20px;">
                            <clock></clock>
                        </div>
                    </div>
                </div>
            </div>
        
            <!-- <div class="level has-background-dark">
                <div class="level-item">
                    <div class="container has-text-centered">
                        <h1 class="is-size-4 has-text-white" style="padding: 10px 0 10px 0;">{{ this.$route.name.toUpperCase() }}</h1>
                    </div>
                </div>
            </div> -->
        </header>

        <main class="sticky-content">
            <div class="section is-paddingless">
                <keep-alive>
                    <router-view
                        :popList="pops"
                        :crms="crms"
                        :last_data_counters='last_data_counters'
                        :darkMode="darkMode"
                    ></router-view>
                </keep-alive>
            </div>
        </main>

        <footer class="has-background-white" style="padding-top: 0.5rem; padding-bottom: 0rem;">
            <div class="has-text-centered">
                <a href="http://www.anidalatam.com" target="blank"><img alt="image" class="img-container" src="/img/logo_anida.png" style="width: 100px"/></a>
            </div>
        </footer>

    </div>
</template>

<script>
    var Clock = require('./Clock.vue').default;

    export default {
        components: {
            'clock': Clock
        },
        props: [
            'app_name',
            'crms',
            'menu_data',
            'pops',
            'last_data_counters',
            'user'
        ],

        data() {
            return {
                darkMode: 0,
                alerts: [
                    // {
                    //     'id': 1,
                    //     'date': '03 Aug 2017',
                    //     'description': 'New feature: list of tags',
                    //     'to': '/pops'
                    // },
                    // {
                    //     'id': 2,
                    //     'date': '01 Aug 2017',
                    //     'description': 'Bulma / Bootstrap comparison',
                    //     'to': '/comsite'
                    // },
                    // {
                    //     'id': 3,
                    //     'date': '24 Jul 2017',
                    //     'description': 'Access previous Bulma versions',
                    //     'to': '/admin'
                    // },
                ]
            }
        },

        created() {
            // console.log(this.$route)
            // if (this.$route.query.message) {
            //     this.$buefy.toast.open({
            //         message: this.$route.query.message,
            //         type: 'is-success',
            //         duration: 3000
            //     })
            // }
        },

        computed: {
            currentRoute () {
                return this.$route.path
            },
            style() {
                return this.darkMode == 1 ? 'Light mode' : 'Dark mode'
            }
        },

        methods: {
            goBack() {
                window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
            },
            changeStyle() {
                this.darkMode = this.darkMode == 0 ? 1 : 0
            },
            logout: function(e){
                axios.post(`/logout`).then((response) => {
                    if (response.status === 200) {
                        console.log(response)
                    }
                }).catch((error) => {
                    console.log(error);
                }).finally(() => {
                    this.$router.go('/welcome');
                })
                e.preventDefault();
            },
        }
    }
</script>
