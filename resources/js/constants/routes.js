
import Welcome from '../components/Welcome.vue'
import App from '../components/App.vue'

let Login = () => import('../components/auth/Login.vue')
let PasswordEmail = () => import('../components/auth/PasswordEmail.vue')
let PasswordReset = () => import('../components/auth/PasswordReset.vue')

let Dashboard = () => import('../components/dashboard/Dashboard.vue')
let PopTable = () => import('../components/pops/PopTable.vue')
let Pop = () => import('../components/pops/PopDetail.vue')
let CapacityPlanning = () => import('../components/capacity/CapacityPlanning.vue')
let Eco = () => import('../components/eco/Eco.vue')
let Comsite = () => import('../components/comsite/Comsite.vue')
let Documents = () => import('../components/documents/Documents.vue')
let Admin = () => import('../components/admin/Admin.vue')


export default {
    mode: 'history',
    base: process.env.BASE_URL,
    render: h => h(App),
    routes: [
        { 
            path: '/', 
            name: 'welcome', 
            component: Welcome, 
            children: [
                { path: '/login', name: 'Login', component: Login },
                { path: '/password/email', name: 'Password Email', component: PasswordEmail },
                { path: '/password/reset/:token', name: 'Password Reset', component: PasswordReset },
            ]
        },
        {
            path: '/', 
            name: 'app', 
            component: App, 
            children: [
                { path: '/dashboard', name: 'Dashboard', component: Dashboard },
                { path: '/pop', name: 'Pop', component: PopTable },
                { path: '/pop/:id', name: 'Detalle Pop', component: Pop },
                { path: '/capacity', name: 'Capacity Planning', component: CapacityPlanning },
                { path: '/comsite', name: 'Comsite', component: Comsite },
                { path: '/eco', name: 'Gestion Ambiental', component: Eco },
                { path: '/docs', name: 'Documents', component: Documents },
                { path: '/admin', name: 'Administracion', component: Admin },
            ]
        }
    ]
}