<template>
    <div class="sticky">

        <header class="section has-background-black-ter" style="padding-top: 0px; padding-bottom: 0px;">
            <div class="columns" style="padding-top: 24px; padding-bottom: 24px;">

                <!-- ICONO Y NOMBRE -->
                <!-- ################## -->
                <div class="column is-3 is-small" style="padding-top: 10px; padding-left: 12px;">
                    <div class="">
                        <nav class="navbar has-background-black-ter">
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
                <div class="column is-6 is-small" style="padding-top: 20px;">
                    <div class="">
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
                <div class="column is-small" style="padding-top: 0px;">
                    <div class="is-size-6">
                        <div class="navbar-end">
                            <b-dropdown   
                                hoverable                 
                                position="is-bottom-left"
                                aria-role="menu">
                                <a
                                    class="navbar-item"
                                    slot="trigger"
                                    role="button">
                                    <font-awesome-icon 
                                        :icon="['fas','bell']" 
                                        :class="alerts.length ? 'has-text-info' : 'has-text-grey-light'"/>
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
                                    <font-awesome-icon :icon="['fas','home']" />
                                    &nbsp;No tienes notificaciones
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
                                        {{ welcomeText }}<br/><b>{{ user.name }} {{ user.apellido }}</b>
                                    </div>
                                </b-dropdown-item>

                                <hr class="dropdown-divider">

                                <!-- <b-dropdown-item has-link aria-role="menuitem">
                                    <a href="https://google.com" target="_blank">
                                        <font-awesome-icon :icon="['fas','link']" />
                                        &nbsp;Google (link)
                                    </a>
                                </b-dropdown-item> -->

                                <hr class="dropdown-divider" aria-role="menuitem">

                                <b-dropdown-item value="settings" disabled>
                                    <font-awesome-icon :icon="['fas','cog']" />
                                    &nbsp;Settings
                                </b-dropdown-item>

                                <b-dropdown-item @click="changeStyle" v-model="darkMode" disabled>
                                    <font-awesome-icon :icon="['fas','adjust']" />
                                    &nbsp;{{ style }}
                                </b-dropdown-item>

                                <hr class="navbar-divider">

                                <b-dropdown-item value="logout" aria-role="menuitem">
                                    <a class="bd-is-rss is-small has-text-dark" @click.prevent="logout">
                                        <font-awesome-icon :icon="['fas','sign-out-alt']" />
                                    &nbsp;Log Out
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
            welcomeText() {
                return this.user.sexo == 'Femenino' ? 'Bienvenida' : 'Bienvenido'
            },
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
