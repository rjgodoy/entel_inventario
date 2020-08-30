<template>
    <div class="modal-card" style="width: 800px;">
        <header class="has-background-light has-text-centered" style="padding: 16px; border-bottom: solid 1px #ccc;">
            <div class="is-size-5 has-text-weight-bold has-text-centered">Gestión de Permisos</div>
            <div class="is-size-6 has-text-weight-bold has-text-centered">Usuario {{ user.name }} {{ user.apellido }}</div>
            <div class="is-size-6 has-text-weight-bold has-text-centered">Rol: {{ role.name }} </div>
        </header>

        <section class="modal-card-body">
            <div class="columns is-multiline">
                <div class="column is-4" v-for="permission in permissions">
                    <b-checkbox @input="selectedPermission=permission; updateUserPermission()" :value="true ? true : false">
                        <div class="">{{ permission.name }}</div>
                    </b-checkbox>
                </div>
                {{ selectedPermission }}
            </div>
            <div class="is-size-5 has-text-weight-bold has-text-centered">Usuario {{ user.name }} {{ user.apellido }}</div>
        </section>

        <!-- <footer class="modal-card-foot">
            <button class="button" type="button" @click="$parent.close()">Cerrar</button>
        </footer> -->
    </div>
</template>

<script>    
    export default {

        props : [
            'thisUser',
            'user',
            'role'
        ],

        data() {
            return {
                permissions: Object,
                selectedPermission: null
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

            updateUserPermission() {
                console.log('update ' + this.selectedPermission.name)
            }
        }
    }
</script>
