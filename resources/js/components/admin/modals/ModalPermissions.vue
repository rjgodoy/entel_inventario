<template>
    <div class="modal-card" style="width: 800px;">
        <header class="has-background-light has-text-centered" style="padding: 16px; border-bottom: solid 1px #ccc;">
            <div class="is-size-5 has-text-weight-bold has-text-centered">Gestión de Permisos</div>
            <div class="is-size-6 has-text-weight-bold has-text-centered">Usuario {{ user.name }} {{ user.apellido }}</div>
            <div class="is-size-6 has-text-weight-bold has-text-centered">Rol: {{ role.name }} </div>
        </header>

        <section class="modal-card-body">
            <div class="box tile is-child">
                    <b-field>
                        <div class="is-size-5 has-text-weight-bold">Permisos</div>
                    </b-field>
                    <div class="columns is-multiline is-vcentered">
                        <div class="column is-4" v-for="permission in permissions" :key="permissions.id">
                            <UserPermission :user="user" :role="userRole" :permission="permission"/>
                        </div>
                    </div>

                </div>
        </section>

        <!-- <footer class="modal-card-foot">
            <button class="button" type="button" @click="$parent.close()">Cerrar</button>
        </footer> -->
    </div>
</template>

<script>    
    export default {
        components: {
            UserPermission: () => import(/* webpackChunkName: "chunks/admin/user/userPermission"*/"../user/UserPermission"),
        },

        props : [
            'user',
            'role'
        ],

        data() {
            return {
                permissions: Object,
                userRole: this.role
            }
        },

        watch: {
            role(newVal) {
                this.userRole = newVal
            }
        },

        mounted() {
            this.getPermissions()
        },

        methods: {
            getPermissions() {
                axios.get(`/api/permissions`)
                .then(response => {
                    this.permissions = response.data.permissions
                })
            },
        }
    }
</script>
