<template>
    <section class="section container">
        <div class="box">
            <b-field grouped group-multiline>
                <b-select 
                    v-model="selectedRole"
                    @input="getUsers()">
                    <option :value="0">Todos</option>
                    <option
                        v-for="role in roles"
                        :value="role.id"
                        :key="role.id">
                        {{ role.name }}
                    </option>
                </b-select>
                <p class="control has-icons-left has-icons-right">
                    <input 
                        class="input is-rounded"  
                        @keyup="getUsers" 
                        @input="usersData.meta.current_page = 1"
                        v-model="searchText" 
                        type="text" 
                        arial-label="Buscar" 
                        placeholder="Buscar..." 
                        autofocus
                    >
                    <span class="icon is-small is-left">
                        <font-awesome-icon icon="search"/>
                    </span>
                    <span class="icon is-small is-right">
                        <button class="delete" @click="clearSearch"></button>
                    </span>
                </p>
            </b-field>

            <table class="table is-fullwidth is-striped is-hoverable is-bordered">
                <thead>
                    <tr class="">
                        <th class="is-size-6 has-text-weight-semibold"><abbr title="ID">ID</abbr></th>
                        <th class="is-size-6 has-text-weight-semibold"><abbr title="Nombre">Nombre</abbr></th>
                        <th class="is-size-6 has-text-weight-semibold"><abbr title="Apellido">Apellido</abbr></th>
                        <th class="is-size-6 has-text-weight-semibold"><abbr title="Cargo">Cargo</abbr></th>
                        <th class="is-size-6 has-text-weight-semibold"><abbr title="Rol">Rol</abbr></th>
                        <th class="is-size-6 has-text-weight-semibold"><abbr title="Permisos">Permisos</abbr></th>
                    </tr>
                </thead>
                
                <tbody>
                    <RoleUserTable class="is-size-6" v-for="user in usersData.users" :key="user.id" :user="user" :roles="roles"/>
                </tbody>
            </table>
            <div class="level">
                <nav class="level-left pagination" role="navigation" aria-label="pagination">
                    <vue-pagination  
                        :pagination="usersData.meta"
                        @paginate="getUsers()"
                        :offset="4">
                    </vue-pagination>
                </nav>
            </div>

            <b-loading :is-full-page="false" :active.sync="isLoading" :can-cancel="true"></b-loading>
        </div>

    </section>
</template>

<script>
    import { library } from "@fortawesome/fontawesome-svg-core";
    import { faSearch, faUserShield } from "@fortawesome/free-solid-svg-icons";
    library.add(faSearch, faUserShield);

    export default {
        components: {
            RoleUserTable: () => import(/* webpackChunkName: "chunks/admin/user/roleUserTable"*/'./RoleUserTable'),
            VuePagination: () => import(/* webpackChunkName: "chunks/helpers/vuePagination"*/'../../helpers/VuePagination'),
        },

        props : [
        ],

        mounted() {
            this.getUsers()
            this.getRoles()
        },

        data() {
            return {
                selectedRole: 0,
                roles: [],
                usersData: {
                    // can: Array,
                    users: Object,
                    meta: {
                        current_page: 1,
                        total: 0,
                        per_page: 2,
                        from: 1,
                        to: 0,
                    }
                },
                isLoading: false,
                searchText: ''
            }
        },

        methods: {
            getUsers() {
                var params = {
                    'page': this.usersData.meta.current_page,
                    'role_id': this.selectedRole,
                    'text': this.searchText,
                }
                axios.get('/api/users', { params: params })
                .then(response => {
                    this.usersData = response.data
                    this.isLoading = false
                })
            },

            getRoles() {
                axios.get(`/api/roles`)
                .then(response => {
                    this.roles = response.data.roles
                })
            },

            clearSearch() {
                this.searchText = ''
                this.getUsers()
            }, 
        }
    }
</script>
