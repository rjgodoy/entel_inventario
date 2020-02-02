import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/auth/Login.vue'
import PasswordEmail from '../components/auth/PasswordEmail.vue'
import PasswordReset from '../components/auth/PasswordReset.vue'

import Dashboard from '../components/dashboard/Dashboard.vue'
import PopTable from '../components/pops/PopTable.vue'
import Pop from '../components/pops/PopDetail.vue'
import Eco from '../components/eco/Eco.vue'
import Comsite from '../components/comsite/Comsite.vue'
import Documents from '../components/documents/Documents.vue'
import Admin from '../components/admin/Admin.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { path: '/login', name: 'Login', component: Login },
        { path: '/password/email', name: 'Password Email', component: PasswordEmail },
        { path: '/password/reset/:token', name: 'Password Reset', component: PasswordReset },
        { path: '/dashboard', name: 'Dashboard', component: Dashboard },
        { path: '/pop', name: 'Pop', component: PopTable },
        { path: '/pop/:id', name: 'Detalle Pop', component: Pop },
        { path: '/comsite', name: 'Comsite', component: Comsite },
        { path: '/eco', name: 'Gestion Ambiental', component: Eco },
        { path: '/docs', name: 'Documents', component: Documents },
        { path: '/admin', name: 'Administracion', component: Admin },
    ]
})