window._ = require('lodash');

import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
// import store from './constants/store'
Vue.use(VueRouter);

// ########################## Axios Libraries ##############################
import axios from 'axios';
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// #########################################################################


// ########################## Buefy Libraries ##############################
import Buefy from 'buefy'
Vue.use(Buefy)
// #########################################################################


// ########################## AnimateCSS Libraries #########################
import AnimateCSS from 'animate.css';
Vue.use(AnimateCSS);
// #########################################################################


// ########################## LeaderLine Libraries #########################
    // import LeaderLine from 'leader-line'
    // Vue.use(LeaderLine)
// #########################################################################


// ########################## FontAwesome Libraries ########################
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome'
import { dom } from '@fortawesome/fontawesome-svg-core'
dom.watch()
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
// #########################################################################


// ########################## NumeralJs ##########################
import vueNumeralFilterInstaller from 'vue-numeral-filter'
Vue.use(vueNumeralFilterInstaller)
// #########################################################################


// ########################## Google Maps ##################################
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyD45pon-Eth8hRCKipTmYsMnsE-twUbATE',
        libraries: 'places', // This is required if you use the Autocomplete plugin
        // libraries: 'places,drawing'
        // libraries: 'places,drawing,visualization'
        // (as you require)
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
Vue.prototype.$eventBus = new Vue()

const app = new Vue({
    router: new VueRouter(routes),
    // store,
    // events: {
    //     clickOutside(event) {                
    //     }
    // },
}).$mount('#app')

