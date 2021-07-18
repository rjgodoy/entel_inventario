
import Welcome from './components/Welcome.vue'
import App from './components/App.vue'
import Outside from './components/Outside.vue'

let Login = () => import(/* webpackChunkName: "chunks/login"*/'./components/auth/Login.vue')
let PasswordEmail = () => import(/* webpackChunkName: "chunks/passwordEmail"*/'./components/auth/PasswordEmail.vue')
let PasswordReset = () => import(/* webpackChunkName: "chunks/passwordReset"*/'./components/auth/PasswordReset.vue')
let Register = () => import(/* webpackChunkName: "chunks/register"*/'./components/auth/Register.vue')

let Dashboard = () => import(/* webpackChunkName: "chunks/dashboard"*/'./components/dashboard/Dashboard.vue')
let PopTable = () => import(/* webpackChunkName: "chunks/pops"*/'./components/pops/PopsTable.vue')
let Pop = () => import(/* webpackChunkName: "chunks/pop"*/'./components/pop/Pop.vue')
let CapacityPlanning = () => import(/* webpackChunkName: "chunks/capacityPlanning"*/'./components/capacity/CapacityPlanning.vue')
let RoomDetail = () => import(/* webpackChunkName: "chunks/capacityPlanning"*/'./components/capacity/RoomDetail.vue')
let Eco = () => import(/* webpackChunkName: "chunks/eco"*/'./components/eco/Eco.vue')
let Documents = () => import(/* webpackChunkName: "chunks/documents"*/'./components/documents/Documents.vue')
let Admin = () => import(/* webpackChunkName: "chunks/admin"*/'./components/admin/Admin.vue')
let Reports = () => import(/* webpackChunkName: "chunks/reports"*/'./components/reports/Reports.vue')
let NotFound = () => import(/* webpackChunkName: "chunks/helpers/notFound"*/ './components/helpers/NotFound');
let Bridge = () => import(/* webpackChunkName: "chunks/bridge"*/'./components/auth/Bridge.vue')

let Comsite = () => import(/* webpackChunkName: "chunks/comsite"*/'./components/reports/comsite/Comsite.vue')
let Revisions = () => import(/* webpackChunkName: "chunks/revisions"*/'./components/reports/maintenance/Revisions.vue')

let ElectricLines = () => import(/* webpackChunkName: "chunks/equipment/electricLines"*/'./components/equipment/electricLines/ElectricLines.vue')
let Junctions = () => import(/* webpackChunkName: "chunks/equipment/junctions"*/'./components/equipment/junctions/Junctions.vue')
let Generators = () => import(/* webpackChunkName: "chunks/equipment/generators"*/'./components/equipment/generators/Generators.vue')


export default {
    mode: 'history',
    base: process.env.BASE_URL,
    render: h => h(App),
    routes: [
        {
            path: '*',
            name: 'Not Found',
            component: NotFound
        },
        { 
            path: '/', 
            name: 'welcome', 
            component: Welcome, 
            children: [
                { path: '/login', name: 'Login', component: Login },
                { path: '/register', name: 'Register', component: Register },
                { path: '/password/email', name: 'Password Email', component: PasswordEmail },
                { path: '/password/reset/:token', name: 'Password Reset', component: PasswordReset },
            ]
        },
        { 
            path: '/outside', 
            name: 'outside', 
            component: Outside, 
            children: [
                { path: 'bridge/:username/:password', name: 'Bridge', component: Bridge },
            ]
        },
        {
            path: '/', 
            name: 'app', 
            component: App, 
            children: [
                { path: '/dashboard', name: 'Dashboard', component: Dashboard },
                { path: '/pop', name: 'POPs', component: PopTable },
                { path: '/pop/:id', name: 'Pop', component: Pop },
                { path: '/capacity', name: 'Capacity Planning', component: CapacityPlanning },
                { path: '/capacity/:id', name: 'Detalle de Sala', component: RoomDetail },
                { path: '/comsite', name: 'Comsite', component: Comsite },
                { path: '/revisions', name: 'Registros de rondas Técnicas', component: Revisions },
                { path: '/eco', name: 'Gestion Ambiental', component: Eco },
                { path: '/docs', name: 'Documentos', component: Documents },
                { path: '/admin', name: 'Administración', component: Admin },
                { path: '/reports', name: 'Reportes', component: Reports },
                // { path: '/equipment', name: 'Equipment', component: Generators },
                { path: '/equipment/electric_lines', name: 'Líneas Eléctricas', component: ElectricLines },
                { path: '/equipment/junctions', name: 'Empalmes', component: Junctions },
                { path: '/equipment/generators', name: 'Generadores', component: Generators },

            ]
        }
    ]
}