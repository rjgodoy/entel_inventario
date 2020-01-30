import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from '../components/dashboard/Dashboard.vue'
import PopTable from '../components/pops/PopTable.vue'
import Pop from '../components/pops/PopDetail.vue'
import Eco from '../components/eco/Eco.vue'
import Comsite from '../components/comsite/Comsite.vue'
import Admin from '../components/admin/Admin.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { path: '/dashboard', name: 'Dashboard', component: Dashboard },
        { path: '/pop', name: 'Pop', component: PopTable },
        { path: '/pop/:id', name: 'pop', component: Pop },
        { path: '/eco', name: 'Gestion Ambiental', component: Eco },
        { path: '/comsite', name: 'comsite', component: Comsite },
        { path: '/admin', name: 'administracion', component: Admin },
    ]
})