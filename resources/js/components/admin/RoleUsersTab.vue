<template>
    <div class="">
        <div class="section shadow-inset">
            <div class="container">
                <div class="tile is-ancestor" style="margin: -40px 0 -40px 0;">
                    <div class="tile is-parent">
                        <a class="tile is-child box" 
                            :class="currentTab === 'RoleUsers' ? 'has-background-link' : boxBackground" @click="currentTab = 'RoleUsers'">
                            <div :class="currentTab === 'RoleUsers' ? selectedSecondaryBoxText : secondaryText"> 
                                <div class="is-size-6 has-text-weight-semibold">
                                    Roles de usuario
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="tile is-parent">
                        <a class="tile is-child box" :class="currentTab === 'UserRequests' ? 'has-background-link' : boxBackground" @click="currentTab = 'UserRequests'">
                            <div :class="currentTab === 'UserRequests' ? selectedSecondaryBoxText : secondaryText"> 
                                <div class="is-size-6 has-text-weight-semibold">
                                    Solicitudes de registro
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="tile is-parent">
                        <a class="tile is-child box" 
                            :class="currentTab === 'PermissionRoles' ? 'has-background-link' : boxBackground" @click="currentTab = 'PermissionRoles'">
                            <div :class="currentTab === 'PermissionRoles' ? selectedSecondaryBoxText : secondaryText"> 
                                <div class="is-size-6 has-text-weight-semibold">
                                    Roles y permisos
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <component :is="currentTabComponent"
            :user="user"
            :bodyBackground="bodyBackground"
            :boxBackground="boxBackground"
            :primaryText="primaryText"
            :secondaryText="secondaryText"
        ></component>


    </div>
</template>

<script>
    export default {
        components: {
            RoleUsers: () => import(/* webpackChunkName: "chunks/admin/roleUsers"*/"./user/RoleUsers"),
            UserRequests: () => import(/* webpackChunkName: "chunks/admin/userRequests"*/"./user/UserRequests"),
            PermissionRoles: () => import(/* webpackChunkName: "chunks/admin/permissionRoles"*/"./user/PermissionRoles"),
        },
        props : [
            'user',
            'bodyBackground',
            'boxBackground',
            'primaryText',
            'secondaryText',
        ],
        computed: {
            currentTabComponent: function () {
                return this.currentTab
            }
        },
        mounted() {

        },
        data() {
            return {
                selectedPrimaryBoxText: 'has-text-white',
                selectedSecondaryBoxText: 'has-text-light',
                currentTab: 'RoleUsers'
            }
        },
        methods: {

        }
    }
</script>
