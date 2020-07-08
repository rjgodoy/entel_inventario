<template>
    <div class="sticky">

        <header class="section has-background-black-ter" style="padding-top: 0px; padding-bottom: 0px;">
            <div class="columns" style="padding-top: 24px; padding-bottom: 24px;">

                <!-- ICONO Y NOMBRE -->
                <!-- ################## -->
                <div class="column is-3 is-small" style="padding-top: 10px; padding-left: 12px;">
                    <div class="">
                        <nav class="navbar is-transparent">
                            <div class="navbar-brand">
                                <a class="navbar-item" href="#" style="background: url('/img/iconografia/entel-logo-negativo.png') no-repeat center center; background-size: contain; width: 60px;">
                                </a>
                                <div class="navbar-item">
                                    <div class="title is-5 has-text-grey-light">
                                        <div class="is-5 has-text-white">{{ app_name }}</div>
                                        <div class="title is-6 has-text-grey-light">Subgerencia Infraestructura, <br class="is-hidden-fullhd" /> Poder y Clima</div>
                                        <div class="subtitle is-7 has-text-grey-light">Gerencia O&M Redes de Acceso</div>
                                    </div>
                                </div>

                                <!-- <span class="navbar-burger burger" data-target="navbarMenuHeroB">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span> -->
                            </div>
                        </nav>
                    </div>
                </div>

                <!-- LINKS DE MODULOS -->
                <!-- ################## -->
                <div class="column is-6 is-small" style="padding-top: 20px;">
                    <div class="columns">
                        <div class="column is-1"></div>
                        <div class="column">
                            <ul class="columns">

                                <li v-if="canView(menu.path)" v-for="menu in menu_data" :key="menu.id" class="column has-text-centered" :class="currentRoute.toLowerCase().includes(menu.path) ? 'is-active' : ''">

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
                        <div class="column is-1"></div>
                    </div>
                </div>

                <!-- PERFIL Y RELOJ -->
                <!-- ################## -->
                <div class="column is-3 is-small" style="padding-top: 0px;">
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
                                        :class="userRequestAlerts.length ? 'has-text-info' : 'has-text-grey-light'"/>
                                </a>

                                <b-dropdown-item has-link v-for="alert in userRequestAlerts" :key="alert.id">
                                    <router-link to="/admin#users">
                                        <p>
                                            <small class="has-text-info">{{ alert.created_at }}</small>
                                        </p>
                                        <p>El usuario {{ alert.name }} {{ alert.apellido }} ha solicitado</p><p>acceder a Inventario.</p>
                                    </router-link>
                                </b-dropdown-item>

                                <b-dropdown-item  v-if="!userRequestAlerts.length" aria-role="menuitem">
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

                                <!-- <b-dropdown-item has-link aria-role="menuitem">
                                    <a href="https://google.com" target="_blank">
                                        <font-awesome-icon :icon="['fas','link']" />
                                        &nbsp;Google (link)
                                    </a>
                                </b-dropdown-item> -->

                                <hr class="dropdown-divider" aria-role="menuitem">

                                
                                <b-dropdown-item v-if="canView('/admin')" aria-role="menuitem">
                                    <router-link class="bd-is-rss is-small has-text-dark" to="/admin">
                                        <font-awesome-icon :icon="['fas','cogs']" />
                                        &nbsp;Administración
                                    </router-link>
                                </b-dropdown-item>

                                <!-- <hr class="dropdown-divider"> -->

                                <!-- <b-dropdown-item @click="changeStyle" v-model="darkMode" disabled>
                                    <font-awesome-icon :icon="['fas','adjust']" />
                                    &nbsp;{{ style }}
                                </b-dropdown-item> -->

                                <hr class="navbar-divider">

                                <b-dropdown-item aria-role="menuitem">
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

            <div class="level is-link is-bold" style="margin-right: -24px; margin-left: -24px; margin-top: -24px;">
                <div class="level-item">
                    <div class="container has-text-centered">
                        <h1 class="is-size-5 has-text-white has-text-weight-bold" style="padding: 10px 0 10px 0;">{{ this.$route.name.toUpperCase() }}</h1>
                    </div>
                </div>
            </div>
        </header>

        <main class="sticky-content">
            <div class="section is-paddingless has-background-light">
                <keep-alive>
                    <router-view
                        :user="user"
                        :user_permissions="user_permissions"
                        :popList="pops"
                        :crms="crms"
                        :last_data_counters='last_data_counters'
                        :darkMode="darkMode"
                    ></router-view>
                </keep-alive>
            </div>
        </main>

        <Footer :user="user"/>

        <!-- <hr class="has-background-light is-marginless"></hr>
        <footer :class="currentRoute.toLowerCase() == '/capacity' ? 'has-background-black-ter' : 'has-background-white'" style="padding-top: 0.5rem; padding-bottom: 0rem;">
            <div class="has-text-centered">
                <a href="http://www.anidalatam.com" target="blank"><img alt="image" class="img-container" src="/img/logo_anida.png" style="width: 100px"/></a>
            </div>
        </footer> -->

    </div>
</template>

<script>
    import { library } from "@fortawesome/fontawesome-svg-core";
    import { faClipboardList, faEnvelope, faMapMarkerAlt, faThLarge, faTrafficLight, faFolderOpen, faCogs, faAngleDown, faFileContract, faSeedling, faWarehouse, faBell, faCog, faSignOutAlt, faHome, faAdjust } from "@fortawesome/free-solid-svg-icons";
    // import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
    // import { faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons'

    library.add(faClipboardList, faEnvelope, faMapMarkerAlt, faThLarge, faTrafficLight, faFolderOpen, faCogs, faAngleDown, faFileContract, faSeedling, faWarehouse, faBell, faCog, faSignOutAlt, faHome, faAdjust);
    var Clock = require('./Clock.vue').default;

    export default {
        components: {
            Footer: () => import(/* webpackChunkName: "chunks/layouts/footer"*/'./layouts/Footer'),
            'clock': Clock
        },
        props: [
            'user',
            'user_permissions',
            'app_name',
            'crms',
            'menu_data',
            'pops',
            'last_data_counters'
        ],

        data() {
            return {
                darkMode: 0,
                userRequestAlerts: [],
            }
        },

        mounted() {
            this.getUserRequestAlerts()
            
            // console.log(this.user_permissions[0])
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

            canView(path) {
                if (path !== '/capacity' && path !== '/admin') {
                    return true
                } else if (path == '/capacity' && 
                    (this.user.roles[0].name == 'developer' 
                        || this.user.roles[0].name == 'admin' 
                        || this.user.roles[0].name == 'engineer'
                        || this.user.roles[0].name == 'engineer admin'
                        || this.user.roles[0].name == 'super viewer'
                        || this.user_permissions.find(element => element.slug == 'view-capacity')
                        )) {
                    return true
                } else if (path == '/admin' && 
                    (this.user.roles[0].name == 'developer' 
                        || this.user.roles[0].name == 'admin' 
                        || this.user_permissions.find(element => element.slug == 'view-admin'
                        ))) {
                    return true
                } else {
                    return false
                }

            },

            getUserRequestAlerts() {
                axios.get(`/api/userRequests?api_token=${this.user.api_token}`)
                .then(response => {
                    if (this.user.roles[0].name == 'admin'
                    || this.user.roles[0].name == 'developer') {
                        this.userRequestAlerts = response.data.requests
                    } else {

                    }
                    
                })
            },

            logout: function(e){
                axios.post(`/logout?api_token=${this.user.api_token}`).then((response) => {
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
