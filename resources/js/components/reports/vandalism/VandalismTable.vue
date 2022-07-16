<template>
	<tr class="">


        <td class="has-text-weight-normal has-text-centered is-vcentered">
            <div class="is-size-6">{{ record.vandalized_at }}</div>
        </td>

        <td class="has-text-weight-normal has-text-centered is-vcentered">
            <div class="is-size-6">{{ record.site.pop.zona ? record.site.pop.zona.nombre_zona : '' }}</div>
        </td>

        <td class="is-size-6 has-text-weight-normal is-vcentered">
            <div class="is-size-6">{{ record.site.pop.comuna.region ? record.site.pop.comuna.region.sigla_region : '' }} - {{ record.site.pop.comuna.region ? record.site.pop.comuna.region.nombre_region : '' }}</div>
        </td>

        <!-- <td class="is-size-6 has-text-weight-normal has-text-centered is-vcentered">
            {{ record.site.pop.comuna ? record.site.pop.comuna.nombre_comuna : '' }}
        </td> -->

        <td class="is-vcentered is-size-6">
            <div class=" is-size-6">{{ record.site && record.site.pop.direccion ? record.site.pop.direccion : 'Sin dirección' }}</div>
            <div class="is-size-7 has-text-weight-semibold">{{ record.site.pop.comuna ? record.site.pop.comuna.nombre_comuna : '' }}</div>
        </td>

        <td class="has-text-weight-normal has-text-left is-vcentered">
            <router-link :to="'/pop/' + record.site.pop_id" target="_blank" class="is-size-6 has-text-weight-semibold">
                {{ record.site ? record.site.pop.nombre : '' }}
            </router-link>
            <div class="is-size-7">{{ record.site ? record.site.nem_site : '' }}</div>
        </td>

        <td class="is-size-6 has-text-weight-normal is-vcentered">
            {{ record.description }}
        </td>

        <td class="is-size-6 has-text-weight-normal is-vcentered">
            {{ record.impact }}
        </td>

        <td v-if="canUpdate">
            <div class="is-vcentered has-text-centered">
                <b-button class="is-link" size="is-small" @click="isModalEditVandalismRecordActive = true">
                    <font-awesome-icon :icon="['fas', 'edit']" />
                </b-button>
            </div>
            <b-modal :active.sync="isModalEditVandalismRecordActive"
                has-modal-card
                trap-focus
                aria-role="dialog"
                aria-modal>
                <ModalEditVandalismRecord :record="record" :canDelete="canDelete"/>
            </b-modal>
        </td>
        
    </tr>
</template>

<script>
export default {
    components: {
    	ModalEditVandalismRecord: () => import(/* webpackChunkName: "chunks/reports/vandalism/modals/modalEditVandalismRecord"*/'./modals/ModalEditVandalismRecord'),
    },

    props : ['record', 'canUpdate', 'canDelete'],

    data() {
        return {
            isModalEditVandalismRecordActive: false
        }
    },

    computed: {
    },

    watch: {
    },

    created() {
    },

    mounted() {
    },
    
    methods: {
    }
}
</script>
