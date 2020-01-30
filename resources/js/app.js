/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
window.Vue = require('vue');

// import VueRouter from 'vue-router'
// Vue.use(VueRouter)

import Buefy from 'buefy'
Vue.use(Buefy)

// Vue.directive('clickOutside', {
//     bind: function (el, binding, vnode) {
//         el.clickOutsideEvent = function (event) {
//             // here I check that click was outside the el and his childrens
//             if (!(el == event.target || el.contains(event.target))) {
//                 // and if it did, call method provided in attribute value
//                 vnode.context[binding.expression](event);
//             }
//         };
//         document.body.addEventListener('click', el.clickOutsideEvent)
//     },
//     unbind: function (el) {
//         document.body.removeEventListener('click', el.clickOutsideEvent)
//     },
// });

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
    faServer,
    faClipboardList,
    faClipboard
} from '@fortawesome/free-solid-svg-icons'

import { 
	faCircle as farCircle,
	faCheckCircle as farCheckCircle,
	faFile as farFile,
	faPaperPlane as farPaperPlane,
    faClipboard as farClipboard
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
    faServer,
    faClipboardList,
    faClipboard,
    farClipboard
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

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
        v: '3.39',
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

Vue.config.productionTip = false

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

import router from './constants/router'
import store from './constants/store'

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
    // events: {
    //     clickOutside(event) {                
    //     }
    // },
    // render: h => h(App)
}).$mount('#app');
