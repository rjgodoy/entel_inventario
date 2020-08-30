<template>
    <section class="section container">
        <div class="box">
            <b-field grouped group-multiline>
                <b-select v-model="perPage" :disabled="!isPaginated">
                    <option value="5">5 per page</option>
                    <option value="10">10 per page</option>
                    <option value="15">15 per page</option>
                    <option value="20">20 per page</option>
                </b-select>
            </b-field>

            <b-table
                :data="requests"
                :paginated="isPaginated"
                :per-page="perPage"
                :current-page.sync="currentPage"
                :pagination-simple="isPaginationSimple"
                :pagination-position="paginationPosition"
                :default-sort-direction="defaultSortDirection"
                :sort-icon="sortIcon"
                :sort-icon-size="sortIconSize"
                striped
                hoverable

                default-sort="apellido"
                aria-next-label="Next page"
                aria-previous-label="Previous page"
                aria-page-label="Page"
                aria-current-label="Current page">

                <template slot-scope="props">
                    <b-table-column field="id" label="ID" width="40" numeric>
                        <template slot="header" slot-scope="{ column }">
                            <b-tooltip :label="column.label">
                                <div class="is-size-6">{{ column.label }}</div>
                            </b-tooltip>
                        </template>
                        <div class="is-size-6">{{ props.row.id }}</div>
                    </b-table-column>

                    <b-table-column field="name" label="Nombre">
                        <template slot="header" slot-scope="{ column }">
                            <b-tooltip :label="column.label">
                                <div class="is-size-6">{{ column.label }}</div>
                            </b-tooltip>
                        </template>
                        <div class="is-size-6">{{ props.row.name }}</div>
                    </b-table-column>

                    <b-table-column field="apellido" label="Apellido">
                        <template slot="header" slot-scope="{ column }">
                            <b-tooltip :label="column.label">
                                <div class="is-size-6">{{ column.label }}</div>
                            </b-tooltip>
                        </template>
                        <div class="is-size-6">{{ props.row.apellido }}</div>
                    </b-table-column>

                    <b-table-column field="username" label="Username">
                        <template slot="header" slot-scope="{ column }">
                            <b-tooltip :label="column.label">
                                <div class="is-size-6">{{ column.label }}</div>
                            </b-tooltip>
                        </template>
                        <div class="is-size-6">{{ props.row.username }}</div>
                    </b-table-column>

                    <b-table-column field="email" label="Email">
                        <template slot="header" slot-scope="{ column }">
                            <b-tooltip :label="column.label">
                                <div class="is-size-6">{{ column.label }}</div>
                            </b-tooltip>
                        </template>
                        <div class="is-size-6">{{ props.row.email }}</div>
                    </b-table-column>


                    <b-table-column >
                        <p class="control">
                            <button class="button is-success" @click="confirm(props.row)">Aceptar</button>
                            <button class="button is-danger" @click="rejected(props.row)">Rechazar</button>
                        </p>
                    </b-table-column>

                </template>
            </b-table>
        </div>
    </section>
</template>

<script>

    export default {
        components: {

        },
        props : [
            'user',
            'bodyBackground',
            'boxBackground',
            'primaryText',
            'secondaryText',
        ],
        created() {
        },
        mounted() {
            this.getUserRequests()
        },
        data() {
            return {
                selectedRole: 0,
                requests: [],
                isPaginated: true,
                isPaginationSimple: false,
                paginationPosition: 'bottom',
                defaultSortDirection: 'asc',
                sortIcon: 'arrow-up',
                sortIconSize: 'is-small',
                currentPage: 1,
                perPage: 10,

                selectedPrimaryBoxText: 'has-text-white',
                selectedSecondaryBoxText: 'has-text-light',
            }
        },
        methods: {
            getUserRequests() {
                axios.get(`/api/userRequests`)
                .then(response => {
                    console.log(response.data)
                    this.requests = response.data.requests
                })
            },

            confirm(user) {
                this.$buefy.dialog.confirm({
                    message: 'Desea dar acceso al nuevo usuario?',
                    onConfirm: () => {
                        let params = {
                            'user': user,
                            'admin_id': this.user.id
                        }
                        axios.post('/api/newUserAccepted', params )
                        .then(response => {
                            console.log(response.data)

                            this.$buefy.toast.open({
                                message: response.data.message,
                                type: 'is-success',
                            })

                            this.getUserRequests()
                            
                        })
                        
                    }
                })
            },

            rejected(user) {
                this.$buefy.dialog.confirm({
                    title: 'Rechazar solicitud',
                    message: 'Está seguro que desea rechazar la solicitud de acceso a inventario?',
                    confirmText: 'Rechazar',
                    type: 'is-danger',
                    hasIcon: true,
                    onConfirm: () => {
                        let params = {
                            'user': user,
                            'admin_id': this.user.id
                        }
                        axios.post('api/newUserRejected', params )
                        .then(response => {
                            console.log(response.data)

                            this.$buefy.toast.open({
                                message: response.data.message,
                                type: 'is-warning',
                            })

                            this.getUserRequests()
                            
                        })
                    }
                })

            }
        }
    }
</script>
