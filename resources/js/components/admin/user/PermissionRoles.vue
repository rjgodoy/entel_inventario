<template>
    <section class="section container">
        <div class="columns tile is-parent">
            <div class="column is-4 tile">
                <div class="box tile is-child">
                    <div class="field">
                        <b-button @click="isNewRoleModalActive = true" type="is-link" size="is-small" style="float: right;" outlined>
                            <font-awesome-icon :icon="['fas', 'plus']"/>
                        </b-button>
                        <div class="is-size-5 has-text-weight-bold">Roles</div>
                    </div>

                    <b-table
                        :data="roles"
                        :selected.sync="selectedRole"
                        :default-sort-direction="defaultSortDirection"
                        :sort-icon="sortIcon"
                        :sort-icon-size="sortIconSize"
                        striped
                        hoverable
                        default-sort="id">

                        <b-table-column field="id" label="ID" width="40" sortable numeric>
                            <template v-slot:header="{ column }">
                                <b-tooltip :label="column.label" append-to-body>
                                    <div class="is-size-6">{{ column.label }}</div>
                                </b-tooltip>
                            </template>
                            <template v-slot="props">
                                <div class="is-size-6">{{ props.row.id }}</div>
                            </template>
                        </b-table-column>

                        <b-table-column field="name" label="Rol" searchable sortable>
                            <template v-slot:header="{ column }">
                                <b-tooltip :label="column.label" append-to-body>
                                    <div class="is-size-6">{{ column.label }}</div>
                                </b-tooltip>
                            </template>
                            <template v-slot="props">
                                <div class="is-size-6">{{ props.row.name }}</div>
                            </template>
                        </b-table-column>
                    </b-table>
                    
                    <b-modal :active.sync="isNewRoleModalActive"
                        has-modal-card
                        trap-focus
                        aria-role="dialog"
                        aria-modal>
                        <modal-new-role />
                    </b-modal>
                </div>
            </div>

            <div class="column is-8 tile">
                <div class="box tile is-child">
                    <b-field>
                        <div class="is-size-5 has-text-weight-bold">Permisos</div>
                    </b-field>
                    <div class="columns is-multiline is-vcentered">
                        <div class="column is-4" v-if="selectedRole" v-for="permission in permissions" :key="permissions.id">
                            <permission :role="selectedRole" :permission="permission"/>
                        </div>

                        <div class="column pt-4" v-if="!selectedRole">
                            <div class="has-text-centered is-size-3 has-text-weight-light has-text-grey-light">Selecciona un rol a editar</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </section>
</template>

<script>
    import { library } from "@fortawesome/fontawesome-svg-core";
    import { faPlus } from "@fortawesome/free-solid-svg-icons";
    // import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
    // import { faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons'
    library.add(faPlus);

    export default {

        components: {
            Permission: () => import(/* webpackChunkName: "chunks/admin/user/permission"*/"./Permission"),
            ModalNewRole: () => import(/* webpackChunkName: "chunks/admin/modals/newRole"*/'../modals/ModalNewRole'),
        },

        props : [
            'bodyBackground',
            'boxBackground',
            'primaryText',
            'secondaryText',
        ],

        created() {
            this.$eventBus.$on('new-role', (value) => {
                this.getRoles()
                this.selectedRole = value
                console.log(this.selectedRole)
            })
        },

        mounted() {
            this.getRoles()
            this.getPermissions()
        },

        data() {
            return {
                roles: [],
                permissions: [],
                defaultSortDirection: 'asc',
                sortIcon: 'arrow-up',
                sortIconSize: 'is-small',
                selectedRole: null,
                isNewRoleModalActive: false
            }
        },

        methods: {
            getRoles() {
                axios.get(`/api/roles`)
                .then(response => {
                    this.roles = response.data.roles
                    // this.selectedRole = this.roles[0]
                })
            },

            getPermissions() {
                axios.get(`/api/permissions`)
                .then(response => {
                    this.permissions = response.data.permissions
                })
            },
        },

        beforeDestroy() {
            this.$eventBus.$off('new-role')
        }
    }
</script>
