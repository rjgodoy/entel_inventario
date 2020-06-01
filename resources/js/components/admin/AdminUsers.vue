<template>
    <div class="">
        <div class="section shadow-inset">
            <div class="container">
                <div class="tile is-ancestor" style="margin: -40px 0 -40px 0;">
                    <div class="tile is-parent">
                        <a class="tile is-child box" 
                            :class="currentTab === 'AdminRoles' ? 'has-background-link' : boxBackground" @click="currentTab = 'AdminRoles'">
                            <div :class="currentTab === 'AdminRoles' ? selectedSecondaryBoxText : secondaryText"> 
                                <div class="is-size-6 has-text-weight-semibold">
                                    Roles de Usuario
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="tile is-parent">
                        <a class="tile is-child box" :class="currentTab === 'AdminUserRequests' ? 'has-background-link' : boxBackground" @click="currentTab = 'AdminUserRequests'">
                            <div :class="currentTab === 'AdminUserRequests' ? selectedSecondaryBoxText : secondaryText"> 
                                <div class="is-size-6 has-text-weight-semibold">
                                    Solicitudes de Nuevos Usuarios
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
    import AdminRoles from './AdminRoles.vue';
    import AdminUserRequests from './AdminUserRequests.vue';
    export default {
        components: {
            AdminRoles,
            AdminUserRequests,
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
                currentTab: 'AdminRoles'
            }
        },
        methods: {

        }
    }
</script>
