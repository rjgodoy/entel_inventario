<template>
    <div>
        <section class="columns has-background-black-ter" style="margin: -20px 0 -20px 0;">
            <div class="column is-3 hero is-small">
                <div class="hero-body">
                    <nav class="navbar">
                        <div class="navbar-brand">
                            <a class="navbar-item" href="#" style="background: url('img/iconografia/entel-logo-negativo.png') no-repeat center center; background-size: contain; width: 60px;">
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

            <div class="column is-6 hero is-small" style="margin-top: 20px;">
                <div class="hero-body">
                    <div class="">
                        <ul class="columns">

                            <li v-for="menu in menuData" class="column has-text-centered" :class="currentRoute == menu.path ? 'is-active' : ''">

                                <a class="" :class="currentRoute === menu.path ? 'has-text-link' : ''" @click="currentRoute = menu.path">
                                    <b-icon pack="fas" :icon="menu.icon" size="2x" :class="currentRoute === menu.path ? 'has-text-link' : 'has-text-grey-light'"></b-icon>
                                    <p class="is-size-7" :class="currentRoute === menu.path ? 'has-text-white' : 'has-text-grey-light'">{{ menu.title }}</p>

                                    <div v-if="currentRoute === menu.path" class="has-text-link" style="border-bottom: 3px solid; padding-top: 5px;"></div>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <div class="column hero is-small" style="margin-top: 10px;">
                <div class="hero-head is-size-7">
                    <div class="navbar-end">

                        <div class="navbar-item dropdown is-hoverable" style="margin: -5px 0 -5px 0;">

                            <div class="navbar-menu">
                                <div class="navbar-end">
                                    <b-dropdown                    
                                        position="is-bottom-left"
                                        aria-role="menu">
                                        <a
                                            class="navbar-item has-text-grey-light has-text-weight-semibold"
                                            style="margin-bottom: -10px;"
                                            slot="trigger"
                                            role="button">
                                            <span>{{ user.nombre }}</span>
                                            &nbsp;
                                            <b-icon pack="fas" icon="angle-down"></b-icon>
                                        </a>

                                        <b-dropdown-item custom aria-role="menuitem">
                                            Logged as <b>Rafael Beraldo</b>
                                        </b-dropdown-item>

                                        <hr class="dropdown-divider">

                                        <b-dropdown-item has-link aria-role="menuitem">
                                            <a href="https://google.com" target="_blank">
                                                <b-icon pack="fas" icon="link"></b-icon>
                                                Google (link)
                                            </a>
                                        </b-dropdown-item>

                                        <b-dropdown-item value="home" aria-role="menuitem">
                                            <b-icon pack="fas" icon="home"></b-icon>
                                            Home
                                        </b-dropdown-item>

                                        <b-dropdown-item value="products" aria-role="menuitem">
                                            <b-icon pack="fas" icon="cart"></b-icon>
                                            Products
                                        </b-dropdown-item>

                                        <b-dropdown-item value="blog" disabled aria-role="menuitem">
                                            <b-icon pack="fas" icon="book-open"></b-icon>
                                            Blog
                                        </b-dropdown-item>

                                        <hr class="dropdown-divider" aria-role="menuitem">

                                        <!-- <b-dropdown-item value="settings" has-link aria-role="menuitem">
                                            <a class="" 
                                                href="{{ route('logout') }}" 
                                                onclick="event.preventDefault();
                                                document.getElementById('logout-form').submit();">
                                                <b-icon icon="user-edit"></b-icon>
                                                {{ __('Perfil') }}
                                            </a>
                                        </b-dropdown-item>

                                        <b-dropdown-item value="logout" has-link aria-role="menuitem">
                                            <a class="" 
                                                href="{{ route('logout') }}" 
                                                onclick="event.preventDefault();
                                                document.getElementById('logout-form').submit();">
                                                <b-icon pack="fas" icon="sign-out-alt"></b-icon>
                                                {{ __('Logout') }}
                                            </a>
                                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                                @csrf
                                            </form>
                                        </b-dropdown-item> -->
                                    </b-dropdown>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="navbar-end">
                        <div class="" style="margin: 0px 20px">
                            <clock></clock>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="level has-background-dark is-marginless" >
            <div class="level-item" style="margin: 10px 0 10px 0;">
                <div class="has-text-centered is-size-5 has-text-weight-bold has-text-white is-uppercase">{{ currentRoute }}</div>
            </div>
        </section>

        <keep-alive>
            <dashboard :is="currentTabComponent"/>
        </keep-alive>

    </div>
</template>

<script>
    const NotFound = { template: '<p>Page not found</p>' }
    var Clock = require('../Clock.vue').default;
    var Dashboard = require('../dashboard/Dashboard.vue').default;
    var PopDetail = require('../pops/PopDetail.vue').default;
    var PopTable = require('../pops/PopTable.vue').default;
    var ComsiteTable = require('../ComsiteTable.vue').default;
    var Admin = require('../admin/Admin.vue').default;

    // const routes = {
    //     '/': Dashboard,
    //     '/pop': PopTable,
    //     '/pop/{id}': PopDetail,
    //     '/comsite': ComsiteTable,
    //     '/admin': Admin
    // }
    export default {
        components: {
            'clock': Clock,
            'dashboard': Dashboard,
            'pop': PopTable,
            'pop-detail': PopDetail,
            'comsite': ComsiteTable,
            'admin': Admin,
            
        },
        props: [
            'app_name',
            'user'
        ],
        data() {
            return {
                menuData: null,

                currentRoute: 'dashboard'
            }
        },
        mounted() {
            // console.log(this.user)
            this.getMenu()
        },
        computed: {
            currentTabComponent () {
                return this.currentRoute
            }
        },
        methods: {
            getMenu() {
                axios.get(`/api/menu`).then((response) => {
                    this.menuData = response.data.data
                })
            },
            logout(){
                axios.post('/logout').then(response => {
                    if (response.status === 302 || 401) {
                        document.location.href = "/login";
                    }
                    else {
                        console.log('Fuck me!')
                    }
                })
            },
        }
    }
</script>
