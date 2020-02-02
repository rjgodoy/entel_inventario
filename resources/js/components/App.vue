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

                            <li v-for="menu in menuData" class="column has-text-centered" :class="currentRoute.toLowerCase() == menu.path ? 'is-active' : ''">
                                <router-link :to="menu.path" :class="currentRoute.toLowerCase() === menu.path ? (menu.path == '/eco' ? 'has-text-eco' : 'has-text-link') : ''">
                                    <b-icon 
                                        :pack="menu.icon_type" 
                                        :icon="menu.icon" 
                                        size="2x" 
                                        :class="currentRoute.toLowerCase() === menu.path ? (menu.path == '/eco' ? 'has-text-eco' : 'has-text-link') : 'has-text-grey-light'">
                                    </b-icon>
                                    <p class="is-size-7" :class="currentRoute.toLowerCase() === menu.path ? 'has-text-white' : 'has-text-grey-light'">{{ menu.title }}</p>

                                    <div v-if="currentRoute.toLowerCase() === menu.path" :class="menu.path == '/eco' ? 'has-text-eco' : 'has-text-link'" style="border-bottom: 3px solid; padding-top: 5px;"></div>
                                </router-link>
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
                                    <b-navbar-dropdown hoverable right :label="user.nombre" href="http://bulma.io/blog/">

                                        <b-navbar-item href="/2017/08/03/list-of-tags/">
                                            <div class="navbar-content">
                                                <p>
                                                    <small class="has-text-info">03 Aug 2017</small>
                                                </p>
                                                <p>New feature: list of tags</p>
                                            </div>
                                        </b-navbar-item>

                                        <b-navbar-item href="/2017/08/01/bulma-bootstrap-comparison/">
                                            <div class="navbar-content">
                                                <p>
                                                    <small class="has-text-info">01 Aug 2017</small>
                                                </p>
                                                <p>Bulma / Bootstrap comparison</p>
                                            </div>
                                        </b-navbar-item>

                                        <b-navbar-item href="/2017/07/24/access-previous-bulma-versions/">
                                            <div class="navbar-content">
                                                <p>
                                                    <small class="has-text-info">24 Jul 2017</small>
                                                </p>
                                                <p>Access previous Bulma versions</p>
                                            </div>
                                        </b-navbar-item>

                                        <b-navbar-item href="http://bulma.io/blog/">
                                            More posts
                                        </b-navbar-item>

                                        <hr class="navbar-divider">

                                        <b-navbar-item>
                                            <div class="navbar-content">
                                                <div class="level is-mobile">
                                                    <div class="level-left">
                                                        <div class="level-item">
                                                            <strong>Stay up to date!</strong>
                                                        </div>
                                                    </div>
                                                    <div class="level-right">
                                                        <div class="level-item">
                                                            <a class="button bd-is-rss is-small" @click.prevent="logout">
                                                                <span class="icon is-small">
                                                                    <i class="fa fa-rss"></i>
                                                                </span>
                                                                <span>Log Out</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </b-navbar-item>
                                    </b-navbar-dropdown>
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
                <div class="has-text-centered is-size-5 has-text-weight-bold has-text-white is-uppercase">{{ this.$route.name }}</div>
            </div>
        </section>

        <keep-alive>
            <router-view></router-view>
        </keep-alive>

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
            'user'
        ],
        data() {
            return {
                menuData: null
            }
        },
        mounted() {
            this.getMenu()
        },
        computed: {
            currentRoute () {
                return this.$route.path
            }
        },
        methods: {
            getMenu() {
                axios.get(`/api/menu`).then((response) => {
                    this.menuData = response.data.data
                })
            },
            goBack() {
                window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
            },
            logout: function(e){
                // var token = document.head.querySelector('meta[name="csrf-token"]');
                // window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
                axios.post(`/logout`).then((response) => {
                    console.log(response)
                }, function() {
                    console.log('failed');
                }).finally(() =>{
                    window.location.href = "/login";
                });
                e.preventDefault();
            },
        }
    }
</script>
