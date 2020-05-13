/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
window.Vue = require('vue');

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
Vue.prototype.$eventCounters = new Vue()

// ########################## Buefy Libraries ##########################
    import Buefy from 'buefy'
    Vue.use(Buefy)
// #########################################################################


// ########################## LeaderLine Libraries ##########################
    // import LeaderLine from 'leader-line'
    // Vue.use(LeaderLine)
// #########################################################################


// ########################## FontAwesome Libraries ##########################
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { dom } from '@fortawesome/fontawesome-svg-core'
    dom.watch()

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
            // v: '3.39',
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

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import routes from './constants/routes'
// import store from './constants/store'

const app = new Vue({
    router: new VueRouter(routes),
    // store,
    // events: {
    //     clickOutside(event) {                
    //     }
    // },
}).$mount('#app')

