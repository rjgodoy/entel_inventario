<template>
    <tr class="">

        <td class="has-text-weight-normal has-text-left is-vcentered">
            <router-link :to="'/pop/' + electricLine.pop_id" target="_blank" class="is-size-6 has-text-weight-semibold">
                {{ electricLine.pop ? electricLine.pop.nombre : '' }}
            </router-link>
            <div class="is-size-7">{{ popSites }}</div>
        </td>

        <td class="is-size-6 has-text-weight-normal has-text-centered is-vcentered">
            {{ electricLine.pop.zona.nombre_zona }}
        </td>

        <td class="is-size-6 has-text-weight-normal has-text-centered is-vcentered">
            {{ electricLine.electric_line_type ? electricLine.electric_line_type.electric_line_type : '' }}
        </td>

        <td class="is-size-6 has-text-weight-normal has-text-centered is-vcentered">
            {{ electricLine.phase_type ? electricLine.phase_type.phase_type : '' }}
        </td>

        <td class="is-size-6 has-text-weight-normal has-text-centered is-vcentered">
            {{ electricLine.postation_type ? electricLine.postation_type.postation_type : '' }}
        </td>

        <td class="is-size-6 has-text-weight-normal has-text-centered is-vcentered">
            {{ electricLine.ferreteria_type ? electricLine.ferreteria_type.ferreteria_type : '' }}
        </td>

        <td class="is-size-6 has-text-weight-normal has-text-centered is-vcentered">
            {{ electricLine.terrain_type ? electricLine.terrain_type.terrain_type : '' }}
        </td>

        <td class="is-size-6 has-text-weight-normal has-text-centered is-vcentered">
            {{ electricLine.vegetation_type ? electricLine.vegetation_type.vegetation_type : '' }}
        </td>

        
        
    </tr>
</template>

<script>
    export default {
        components: {
            // GeneratorDetail: () => import(/* webpackChunkName: "chunks/electricLines/modals/electricLineDetail"*/'./modals/GeneratorDetail'),
            // GeneratorMaintenances: () => import(/* webpackChunkName: "chunks/electricLines/modals/GeneratorMaintenances"*/'./modals/GeneratorMaintenances'),
        },

        props : [ 'electricLine' ],

        data() {
            return {
                // isGeneratorDetailModalActive: false,
                // isGeneratorMaintenancesModalActive: false
            }
        },

        computed: {
            popSites() {
                let text = ''
                if (this.electricLine.pop.sites) {
                    let sites = this.electricLine.pop.sites
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
