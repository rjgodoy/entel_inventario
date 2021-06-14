<template>
    <tr class="">
        <td class="has-text-weight-normal has-text-centered is-vcentered">{{ user.id }}</td>
        
        <td class="has-text-left is-vcentered">
            <div class="is-size-6 has-text-weight-semibold">
                {{ user.name }}
            </div>
        </td>

        <td class="has-text-left is-vcentered">
            <div class="is-size-6 has-text-weight-semibold">
                {{ user.apellido }}
            </div>
        </td>

        <td class="has-text-left is-vcentered">
            <div class="is-size-6 has-text-weight-semibold">
                {{ user.nombre_cargo_especifico }}
            </div>
        </td>

        <td class="is-vcentered">
            <b-select 
                @input="updateUserRole(user.id, roleId)"
                :placeholder="user.roles.length ? user.roles[0].name : 'Sin rol asignado'"
                v-model="roleId">
                <option
                    v-for="role in roles"
                    :value="role.id"
                    :key="role.id">
                    {{ role.name }}
                </option>
            </b-select>
        </td>

        

        <td class="is-vcentered">
            <!-- <div class="field has-addons">
                <p class="control">
                    <button class="button is-small is-default tooltip is-outlined" data-tooltip="DETALLES" @click="isGeneratorDetailModalActive = true">
                        <font-awesome-icon :icon="['far','clipboard']"/>
                    </button>
                </p>
                <p class="control">
                    <button class="button is-small is-default tooltip is-outlined has-tooltip-right" data-tooltip="MANTENCIONES">
                        <font-awesome-icon icon="bars"/>
                    </button>
                </p>
            </div> -->

            <button type="button" class="button is-small is-link is-outlined" @click="isModalPermissionsActive = true">
                <font-awesome-icon :icon="['fas','user-shield']"/>
            </button>

            <b-modal :active.sync="isModalPermissionsActive"
                has-modal-card
                trap-focus
                aria-role="dialog"
                aria-modal>
                <modal-permissions 
                    :user="user"
                    :role="role"/>
            </b-modal>
            
        </td>
    </tr>
</template>

<script>
    export default {
        components: {
            ModalPermissions: () => import(/* webpackChunkName: "chunks/admin/modals/modalPermissions"*/'../modals/ModalPermissions'),
        },

        props : [
            'user',
            'roles'
        ],

        data() {
            return {
                roleId: this.user.roles.length ? this.user.roles[0].id : null,
                isModalPermissionsActive: false
            }
        },

        computed: {
            role() {
                return this.user.roles[0]
            }
        },

        mounted() {
        },

        methods: {
            updateUserRole(user_id, role_id) {
                var params = {
                    'role_id': role_id,
                }
                axios.put(`/api/users/${user_id}?role_id=${role_id}`)
                .then(response => {
                    // console.log(response)
                    // this.roles = response.data.data
                })
            }
        }
    }
</script>
