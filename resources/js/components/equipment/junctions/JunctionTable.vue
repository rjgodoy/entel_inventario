<template>
    <tr class="">

        <td class="has-text-weight-normal has-text-left is-vcentered">
            <router-link :to="'/pop/' + junction.pop_id" target="_blank" class="is-size-6 has-text-weight-semibold">
                {{ junction.pop ? junction.pop.nombre : '' }}
            </router-link>
            <div class="is-size-7">{{ popSites }}</div>
        </td>

        <td class="has-text-weight-normal has-text-centered is-vcentered">
            <div class="is-size-7">{{ popSites }}</div>
        </td>

        <td class="is-size-6 has-text-weight-normal has-text-centered is-vcentered">
            {{ junction.pop.zona.nombre_zona }}
        </td>

        <td class="is-size-6 has-text-weight-normal has-text-centered is-vcentered">
            {{ junction.electric_company ? junction.electric_company.name : '' }}
        </td>

        <td class="has-text-centered is-vcentered">
            <div v-if="junction.rate_type" class="has-text-weight-normal is-size-6">{{ junction.rate_type }}</div>
            <div v-if="!junction.rate_type" class="has-text-weight-light is-size-7 has-text-grey">Sin información</div>
        </td>

        <td class="has-text-centered is-vcentered">
            <div v-if="junction.client_number" class="has-text-weight-normal is-size-6">{{ junction.client_number }}</div>
            <div v-if="!junction.client_number" class="has-text-weight-light is-size-7 has-text-grey">Sin información</div>
        </td>

        <td class="has-text-centered is-vcentered">
            <div v-if="junction.junction_number" class="has-text-weight-normal is-size-6">{{ junction.junction_number }}</div>
            <div v-if="!junction.junction_number" class="has-text-weight-light is-size-7 has-text-grey">Sin información</div>
        </td>

        <td class="has-text-centered is-vcentered">
            <div v-if="junction.junction_type" class="has-text-weight-normal is-size-6">{{ junction.junction_type.type }}</div>
            <div v-if="!junction.junction_type" class="has-text-weight-light is-size-7 has-text-grey">Sin información</div>
        </td>

        <td class="has-text-centered is-vcentered">
            <div v-if="junction.junction_connection" class="has-text-weight-normal is-size-6">{{ junction.junction_connection.connection }}</div>
            <div v-if="!junction.junction_connection" class="has-text-weight-light is-size-7 has-text-grey">Sin información</div>
        </td>
        <td>
            <div>
                <b-button class="is-link" size="is-small" @click="isModalEditJunctionActive = true">
                    <font-awesome-icon :icon="['fas', 'edit']" />
                </b-button>
            </div>
            <b-modal :active.sync="isModalEditJunctionActive"
                has-modal-card
                trap-focus
                aria-role="dialog"
                aria-modal>
                <ModalEditJunction
                    :junction="junction"
                    />
            </b-modal>
        </td>
        
    </tr>
</template>

<script>
    export default {
        components: {
            ModalEditJunction: () => import(/* webpackChunkName: "chunks/equipment/junctions/modals/modalEditJunction"*/'./modals/ModalEditJunction'),
        },

        props : [ 'junction' ],

        data() {
            return {
                isModalEditJunctionActive: false,
            }
        },

        computed: {
            popSites() {
                let text = ''
                if (this.junction.pop.sites) {
                    let sites = this.junction.pop.sites
                    sites.forEach(site => {
                        text = text == '' ? site.nem_site : text + ' - ' + site.nem_site
                    })
                }
                return text
            }
        },

        mounted() {
        },

        methods: {
            

            
        }
    }
</script>
