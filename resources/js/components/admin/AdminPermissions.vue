<template>
    <section class="section container">
        <b-field grouped group-multiline>
            <b-select v-model="perPage" :disabled="!isPaginated">
                <option value="5">5 per page</option>
                <option value="10">10 per page</option>
                <option value="15">15 per page</option>
                <option value="20">20 per page</option>
            </b-select>
<!--             <div class="control">
                <button class="button" @click="currentPage = 2" :disabled="!isPaginated">Set page to 2</button>
            </div>
            <div class="control is-flex">
                <b-switch v-model="isPaginated">Paginated</b-switch>
            </div>
            <div class="control is-flex">
                <b-switch v-model="isPaginationSimple" :disabled="!isPaginated">Simple pagination</b-switch>
            </div> -->
            <b-select 
                v-model="selectedRole"
                @click.prevent="getUsers()">
                <option :value="0">Todos</option>
                <option
                    v-for="role in roles"
                    :value="role.id"
                    :key="role.id">
                    {{ role.name }}
                </option>
            </b-select>
            <!-- <b-select v-model="sortIcon">
                <option value="arrow-up">Arrow sort icon</option>
                <option value="menu-up">Caret sort icon</option>
                <option value="chevron-up">Chevron sort icon </option>
            </b-select>
            <b-select v-model="sortIconSize">
                <option value="is-small">Small sort icon</option>
                <option value="">Regular sort icon</option>
                <option value="is-medium">Medium sort icon</option>
                <option value="is-large">Large sort icon</option>
            </b-select> -->
        </b-field>

        <b-table
            :data="users"
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
                <b-table-column field="id" label="ID" width="40" searchable sortable numeric>
                    <template slot="header" slot-scope="{ column }">
                        <b-tooltip :label="column.label">
                            <div class="is-size-6">{{ column.label }}</div>
                        </b-tooltip>
                    </template>
                    <div class="is-size-6">{{ props.row.id }}</div>
                </b-table-column>

                <b-table-column field="name" label="First Name" searchable sortable>
                    <template slot="header" slot-scope="{ column }">
                        <b-tooltip :label="column.label">
                            <div class="is-size-6">{{ column.label }}</div>
                        </b-tooltip>
                    </template>
                    <div class="is-size-6">{{ props.row.name }}</div>
                </b-table-column>

                <b-table-column field="apellido" label="Last Name" searchable sortable>
                    <template slot="header" slot-scope="{ column }">
                        <b-tooltip :label="column.label">
                            <div class="is-size-6">{{ column.label }}</div>
                        </b-tooltip>
                    </template>
                    <div class="is-size-6">{{ props.row.apellido }}</div>
                </b-table-column>

                <b-table-column field="nombre_cargo_especifico" label="Cargo" searchable sortable>
                    <template slot="header" slot-scope="{ column }">
                        <b-tooltip :label="column.label">
                            <div class="is-size-6">{{ column.label }}</div>
                        </b-tooltip>
                    </template>
                    <div class="is-size-6">{{ props.row.nombre_cargo_especifico }}</div>
                </b-table-column>

                <b-table-column field="role" label="Role" centered>
                    <template slot="header" slot-scope="{ column }">
                        <b-tooltip :label="column.label">
                            <div class="is-size-6">{{ column.label }}</div>
                        </b-tooltip>
                    </template>
                    <b-select 
                        @click.prevent="updateUserRole(props.row.id)"
                        :placeholder="props.row.roles.length ? props.row.roles[0].name : 'Sin rol asignado'">
                        <option
                            v-for="role in roles"
                            :value="role.id"
                            :key="role.id">
                            {{ role.name }}
                        </option>
                    </b-select>

                    <!-- <span class="tag" :class="props.row.roles.length ? 'is-success' : 'is-info'">
                        
                        {{ new Date(props.row.date).toLocaleDateString() }}
                    </span> -->
                </b-table-column>

                <!-- <b-table-column label="Gender">
                    <template slot="header" slot-scope="{ column }">
                        <b-tooltip :label="column.label">
                            <div class="is-size-6">{{ column.label }}</div>
                        </b-tooltip>
                    </template>
                    <span>
                        <b-icon pack="fas"
                            :icon="props.row.gender === 'Male' ? 'mars' : 'venus'">
                        </b-icon>
                        {{ props.row.gender }}
                    </span>
                </b-table-column> -->
            </template>
        </b-table>
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
            this.getUsers()
            this.getRoles()
        },
        data() {
            return {
                selectedRole: 0,
                roles: [],
                users: [],
                isPaginated: true,
                isPaginationSimple: false,
                paginationPosition: 'bottom',
                defaultSortDirection: 'asc',
                sortIcon: 'arrow-up',
                sortIconSize: 'is-small',
                currentPage: 1,
                perPage: 20,


                selectedPrimaryBoxText: 'has-text-white',
                selectedSecondaryBoxText: 'has-text-light',
            }
        },
        methods: {
            getUsers() {
                var params = {
                    'role_id': this.selectedRole,
                    'api_token': this.user.api_token
                }
                axios.get('/api/users', { params: params })
                .then(response => {
                    console.log(response.data)
                    this.users = response.data.users
                })
            },

            getRoles() {
                axios.get(`/api/roles?api_token=${this.user.api_token}`)
                .then(response => {
                    this.roles = response.data.data
                })
            },

            updateUserRole(user_id, role_id) {
                console.log(role_id)
                // var params = {
                //     'role_id': role_id
                // }
                // axios.put(`/api/users/${user_id}`, { params: params })
                // .then(response => {
                //     this.roles = response.data.data
                // })
            }
        }
    }
</script>
