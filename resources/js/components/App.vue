<template>
    <div class="sticky">

        <section class="section has-background-black-ter" style="padding-top: 0px; padding-bottom: 0px;">
            <div class="columns is-vcentered" style="padding: 12px;">

                <!-- ICONO Y NOMBRE -->
                <!-- ################## -->
                <div class="column is-2">
                    <div class="navbar is-transparent">
                        <div class="navbar-brand" style="padding-left: 24px;">

                            <a class="navbar-item" href="#" style="background: url('/img/iconografia/entel-logo-negativo.png') no-repeat center center; background-size: contain; width: 64px;">
                            </a>

                            <div class="navbar-item" style="padding-right: 0px;">
                                <div class="title is-5 has-text-grey-light">
                                    <div class="is-5 has-text-white">{{ app_name }}</div>
                                    <div class="title is-6 has-text-grey-light">Subgerencia Infraestructura, <br class="is-hidden-fullhd" />Poder y Clima</div>
                                    <div class="subtitle is-7 has-text-grey-light">Gerencia O&M Redes de Acceso</div>
                                </div>
                            </div>

                            <!-- <span class="navbar-burger burger" data-target="navbarMenuHeroB">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span> -->
                        </div>
                    </div>
                </div>

                <!-- LINKS DE MODULOS -->
                <!-- ################## -->
                <div class="column is-8" style="padding-left: 64px; padding-right: 64px;">
                    <div class="columns">
                        <div class="column is-1"></div>
                        <div class="column">
                            <ul class="columns">
                                <li v-if="canView(menu.path)" v-for="menu in menus" :key="menu.id" class="column has-text-centered" :class="currentRoute.toLowerCase().includes(menu.path) ? 'is-active' : ''">

                                    <router-link :to="menu.path" :class="currentRoute.toLowerCase() === menu.path ? (menu.path == '/eco' ? 'has-text-eco' : 'has-text-link') : ''">
                                        <font-awesome-icon
                                            class="is-size-4"
                                            size="2x"
                                            :icon="[menu.icon_type, menu.icon]" 
                                            :class="currentRoute.toLowerCase().includes(menu.path) ? (menu.path == '/eco' ? 'has-text-eco' : 'has-text-link') : 'has-text-grey-light'"
                                        />
                                        <div class="is-size-7" :class="currentRoute.toLowerCase().includes(menu.path) ? 'has-text-white' : 'has-text-grey-light'">{{ menu.title }}</div>

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
                <div class="column is-2">
                    <div class="columns is-vcentered">
                        <div class="column has-text-right is-paddingless">
                            <div class="columns" style="padding-right: 32px; margin-bottom: 6px">
                                <div class="column control is-paddingless">
                                    <b-dropdown   
                                        position="is-bottom-left"
                                        aria-role="menu">
                                        <a
                                            class="tag is-dark"
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
                                            <!-- <font-awesome-icon :icon="['fas','home']" /> -->
                                            👍
                                            &nbsp;No tienes notificaciones
                                        </b-dropdown-item>
                                    </b-dropdown>

                                    <b-dropdown 
                                        aria-role="menu"
                                        position="is-bottom-left"
                                        append-to-body>
                                        <a class="tag is-dark"
                                            slot="trigger"
                                            role="button">
                                            MENU
                                            <b-icon icon="angle-down" pack="fas"></b-icon>
                                        </a>

                                        <b-dropdown-item custom aria-role="menuitem">
                                            <div class="has-text-left">
                                                <div class="is-size-7 has-text-weight-light">{{ welcomeText }}</div>
                                                <div class="is-size-6 has-text-weight-semibold">{{ user.name }} {{ user.apellido }}</div>
                                            </div>
                                        </b-dropdown-item>

                                        <hr class="dropdown-divider" aria-role="menuitem">

                                        <!-- <b-dropdown-item @click="changeStyle" v-model="darkMode" class="is-small has-text-grey-dark" disabled>
                                            <div class="is-size-6 has-text-weight-normal">
                                                <font-awesome-icon :icon="['fas','adjust']" />
                                                &nbsp;{{ style }}
                                            </div>
                                        </b-dropdown-item> -->

                                        <router-link v-if="canView('/admin')" class="dropdown-item bd-is-rss is-small has-text-grey-dark" to="/admin" aria-role="menuitem">
                                            <div class="is-size-6 has-text-weight-normal">
                                                <font-awesome-icon :icon="['fas','cogs']" />
                                                &nbsp;Administración
                                            </div>
                                        </router-link>

                                        <hr class="navbar-divider" v-if="canView('/admin')" >

                                        <a class="bd-is-rss is-small has-text-grey-dark dropdown-item" aria-role="menuitem" @click.prevent="logout">
                                            <div class="is-size-6 has-text-weight-normal">
                                                <font-awesome-icon :icon="['fas','sign-out-alt']" />
                                                &nbsp;Log Out
                                            </div>
                                        </a>
                                    </b-dropdown>
                                </div>
                            </div>
                        
                            <div class="" style="padding-right: 20px;">
                                <clock></clock>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section is-paddingless">
            <div class="level is-link is-bold">
                <div class="level-item">
                    <div class="container has-text-centered">
                        <h1 class="is-size-5 has-text-white has-text-weight-bold" style="padding: 10px 10px 10px 10px;">{{ this.$route.name.toUpperCase() }}</h1>
                    </div>
                </div>
            </div>
        </section>

        <section class="sticky-content section is-paddingless has-background-light">
            <!-- <keep-alive> -->
                <router-view
                    :user="user"
                    :user_permissions="user_permissions"
                    :last_data_counters='last_data_counters'
                    :darkMode="darkMode"
                ></router-view>
            <!-- </keep-alive> -->
        </section>

        <Footer :user="user" :last_updated_data="last_updated_data"/>

    </div>
</template>

<script>
    import { library } from "@fortawesome/fontawesome-svg-core";
    import { faClipboardList, faEnvelope, faMapMarkerAlt, faThLarge, faTrafficLight, faFolderOpen, faCogs, faAngleDown, faFileContract, faSeedling, faWarehouse, faBell, faCog, faSignOutAlt, faHome, faAdjust, faChargingStation } from "@fortawesome/free-solid-svg-icons";
    // import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
    // import { faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons'

    library.add(faClipboardList, faEnvelope, faMapMarkerAlt, faThLarge, faTrafficLight, faFolderOpen, faCogs, faAngleDown, faFileContract, faSeedling, faWarehouse, faBell, faCog, faSignOutAlt, faHome, faAdjust, faChargingStation);

    export default {
        components: {
            Clock: () => import(/* webpackChunkName: "chunks/helpers"*/'./helpers/Clock'),
            Footer: () => import(/* webpackChunkName: "chunks/layouts/footer"*/'./layouts/Footer'),
        },
        props: [
            'user',
            'user_permissions',
            'app_name',
            'last_data_counters',
            'last_updated_data',
            'is_dark_mode'
        ],

        data() {
            return {
                menus: Array,
                userRequestAlerts: [],
                darkMode: this.is_dark_mode,
            }
        },

        created() {
        },

        mounted() {
            this.getMenus()
            this.getUserRequestAlerts()
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
            getMenus() {
                axios.get('/api/menus')
                .then(response => {
                    this.menus = response.data.menus
                })
            },

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
                axios.get(`/api/userRequests`)
                .then(response => {
                    if (this.user.roles[0].name == 'admin'
                    || this.user.roles[0].name == 'developer') {
                        this.userRequestAlerts = response.data.requests
                    } else {
                        this.userRequestAlerts = []
                    }
                    
                })
            },

            logout: function(e){
                axios.post(`/logout`).then((response) => {
                    if (response.status === 200) {
                        // console.log(response)
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
