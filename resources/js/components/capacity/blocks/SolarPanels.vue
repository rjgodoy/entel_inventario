<template>
    <div class="tile is-parent">
        <section class="tile box">
            <b-field label="PANELES SOLARES" label-position="on-border" class="tile">
                <div class="tile box is-shadowless" style="border: solid 0.05rem black">
                    <div class="tile is-vertical" v-if="hasSolarPanels">
                        <div class="columns tile is-parent">
                            <a class="box tile is-child column" 
                                v-for="solarPanel in solarPanels" :key="solarPanel.id"
                                @click="isJunctionModalActive = true">
                                <div class="">
                                    <div class="columns">
                                        <div class="column">
                                            <div class="has-text-weight-semibold is-size-6">Paneles Solar</div>
                                        </div>
                                        <div class="column is-2 has-text-centered">
                                            <!-- <font-awesome-icon 
                                                :icon="['far', 'check-circle']"
                                                size="2x"
                                                class="has-text-success"
                                            /> -->
                                        </div>
                                    </div>   
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class="tile columns is-vcentered" v-if="!hasSolarPanels">
                        <div class="column">
                            <div class="has-text-centered has-text-weight-light has-text-grey is-size-7">
                                NO TIENE PANELES SOLARES
                            </div>
                        </div>
                    </div>
                </div>
            </b-field>
        </section>
        <!-- <b-modal :active.sync="isJunctionModalActive"
            has-modal-card
            trap-focus
            aria-role="dialog"
            aria-modal>
            <modal-junction 
                :junction="junctionSelected"
                :can="can"
                :user="user"
                />
        </b-modal> -->
    </div>
</template>

<script>
    export default {
        components: {
            // ModalJunction: () => import(/* webpackChunkName: "chunks/pop/layout/modals/junction"*/'../../pop/layout/modals/ModalJunction'),
        },

        props : [
            'junctions',
            'can',
            'user',
            'pop'
        ],

        data() {
            return {
                junctionSelected: null,
                isJunctionModalActive: false,
            }
        },

        computed: {
            solarPanels() {
                let panels = []
                Object.keys(this.junctions).forEach(element => {
                    panels.push(this.junctions[element].latest_solar_panel)
                })
                return panels
            },

            hasSolarPanels() {
                let bool = false
                Object.keys(this.junctions).forEach(element => {
                    bool = this.junctions[element].latest_solar_panel && !bool ? true : false
                })
                return bool
            },

            averageConsumptionPerPhotovoltaicGroup() {  // FALTA MEDICIONES DE PANELES FOTOVOLTAICOS
                return 0
            },
        },

        watch: {
            junctions(val) {
                // console.log(val)
            }
        },
        
        mounted() {
            // console.log(this.generatorSets)
            // this.getGeneratorSets()
        },

        methods: {
            photovoltaicCapacity(junction) {    // FALTA MEDICIONES DE PANELES FOTOVOLTAICOS
                let capacity = 0
                if (junction.latest_solar_panel) {
                    const solarPanelGroupQuantity = 6
                    for (var i = 1; i < solarPanelGroupQuantity; i++) {
                        capacity = capacity + (junction.latest_solar_panel['unit_capacity_group_'+i] * junction.latest_solar_panel['quantity_group_'+i])
                    }
                }
                return capacity
            },
        }
    }
</script>
