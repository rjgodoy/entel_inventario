/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
window.Vue = require('vue');

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Buefy from 'buefy'
Vue.use(Buefy)

Vue.directive('clickOutside', {
    bind: function (el, binding, vnode) {
        el.clickOutsideEvent = function (event) {
            // here I check that click was outside the el and his childrens
            if (!(el == event.target || el.contains(event.target))) {
                // and if it did, call method provided in attribute value
                vnode.context[binding.expression](event);
            }
        };
        document.body.addEventListener('click', el.clickOutsideEvent)
    },
    unbind: function (el) {
        document.body.removeEventListener('click', el.clickOutsideEvent)
    },
});

Vue.prototype.$eventBus = new Vue()

// ########################## FontAwesome Libraries ##########################
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { dom } from '@fortawesome/fontawesome-svg-core'
dom.watch()

import { 
    faSignOutAlt,
    faThLarge,
    faMapMarkerAlt,
    faBroadcastTower,
    faSolarPanel,
    faBolt,
    faTemperatureLow,
    faSignal,
    faWifi,
    faFileContract,
    faSeedling,
    faLeaf,
    faWarehouse,
    faFolderOpen,
    faCogs,
    faExclamationTriangle,
    faSearch,
    faDownload,
    faBars,
    faMapMarkedAlt,
    faInfoCircle,
    faInfo,
    faMousePointer,
    faArrowRight,
    faBackspace,
    faSyncAlt,
    faTasks,
    faDollarSign,
    faLink,
    faUnlink,
    faCarBattery,
    faUserEdit,
    faAngleDown,
    faServer
} from '@fortawesome/free-solid-svg-icons'

import { 
	faCircle as farCircle,
	faCheckCircle as farCheckCircle,
	faFile as farFile,
	faPaperPlane as farPaperPlane
} from '@fortawesome/free-regular-svg-icons'

import { 
	fab,
	faCloudversify,
    faTwitter,
    faGithub
} from '@fortawesome/free-brands-svg-icons'

library.add(
    faSignOutAlt,
	faThLarge,
	faMapMarkerAlt,
	faBroadcastTower,
	faSolarPanel,
	faBolt,
	faTemperatureLow,
	faSignal,
	faWifi,
	faFileContract,
	faSeedling,
	faLeaf,
	faWarehouse,
	faFolderOpen,
	faCogs,
	faExclamationTriangle,
	faSearch,
	faDownload,
	faBars,
    faMapMarkedAlt,
    faInfoCircle,
    faInfo,
    faMousePointer,
    faArrowRight,
    faBackspace,
    faSyncAlt,
    faTasks,
    faDollarSign,
    faLink,
    faUnlink,
    faCarBattery,
    faUserEdit,
    faAngleDown,
    faTwitter,
    faGithub,
    faServer
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
// #########################################################################

// ########################## NumeralJs ##########################
import vueNumeralFilterInstaller from 'vue-numeral-filter'
Vue.use(vueNumeralFilterInstaller)
// #########################################################################

// ########################## Google Maps ##########################
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyD45pon-Eth8hRCKipTmYsMnsE-twUbATE',
        // libraries: 'places', // This is required if you use the Autocomplete plugin
        // libraries: 'places,drawing'
        // libraries: 'places,drawing,visualization'
        // (as you require)

        //// If you want to set the version, you can do so:
        // v: '3.26',
    },
 
    // If you intend to programmatically custom event listener code
    // (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
    // instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
    // you might need to turn this on.
    // autobindAllEvents: false,

    // If you want to manually install components, e.g.
    // import {GmapMarker} from 'vue2-google-maps/src/components/marker'
    // Vue.component('GmapMarker', GmapMarker)
    // then disable the following:
    // installComponents: true,
})

// import GmapCluster from 'vue2-google-maps/dist/components/cluster' // replace src with dist if you have Babel issues
// Vue.component('GmapCluster', GmapCluster)
// #########################################################################

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

import App from './components/App.vue'
// import AsideNavbar from './components/Layouts/AsideNavbar.vue'

import Dashboard from './components/dashboard/Dashboard.vue'
import PopTable from './components/pops/PopTable.vue'
import Pop from './components/pops/PopDetail.vue'
import ComsiteTable from './components/comsite/ComsiteTable.vue'
import Admin from './components/admin/Admin.vue'

const routes = [
    { path: '/', name: 'Dashboard', component: Dashboard },
    { path: '/dashboard', name: 'dashboard', component: Dashboard },
    { path: '/pop', name: 'Pop', component: PopTable },
    { path: '/pop/:id', name: 'pop', component: Pop },
    { path: '/comsite', name: 'comsite', component: ComsiteTable },
    { path: '/admin', name: 'administracion', component: Admin },
]

const router = new VueRouter({
    routes // short for `routes: routes`
})

import store from './constants/store'

// var LoadingComponent = require('./components/maps/LoadingComponent.vue').default;
// var ErrorComponent = require('./components/maps/ErrorComponent.vue').default;
// const MapView = () => ({
//     // The component to load (should be a Promise)
//     component: import('./components/maps/MapView.vue'),
//     // A component to use while the async component is loading
//     loading: LoadingComponent,
//     // A component to use if the load fails
//     error: ErrorComponent,
//     // Delay before showing the loading component. Default: 200ms.
//     delay: 0,
//     // The error component will be displayed if a timeout is
//     // provided and exceeded. Default: Infinity.
//     timeout: 3000
// })

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    router,
    store,
    // el: '#app',
    components: {
        App
    },
    mode:'history',
    events: {
        clickOutside(event) {                
        }
    },
    // render: h => h(App)
}).$mount('#app');
