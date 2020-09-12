<template>
    <div class="tile is-parent">
        <section class="tile box has-background">

            <div class="is-box-background is-transparent-light">
                <font-awesome-icon :icon="['fas', 'solar-panel']" size="10x" class="is-pulled-right" style=""/>
            </div>

            <div class="tile is-vertical">
                <div class="columns">
                    <div class="column">
                        <div class="is-size-6 has-text-weight-bold">PANELES SOLARES</div>
                    </div>
                    <div class="column">
                        <b-dropdown aria-role="list" class="is-pulled-right" position="is-bottom-left">
                            <button class="button is-default is-small" slot="trigger" slot-scope="{ active }">
                                <span><font-awesome-icon :icon="['fas', 'ellipsis-v']" /></span>
                            </button>
                            <b-dropdown-item aria-role="listitem" class="is-size-6" @click="isNewSolarPanelModalActive = true">
                                <div class="media">
                                    <font-awesome-icon class="media-left" :icon="['fas', 'plus']" />
                                    <div class="media-content">
                                        <h3>Nuevos Paneles Solares</h3>
                                    </div>
                                </div>
                            </b-dropdown-item>
                        </b-dropdown>
                    </div>
                </div>

                <div class="tile is-vertical" v-if="hasSolarPanels()">
                    <div class="tile is-parent">
                        <b-field label="CAPACIDADES" label-position="on-border" class="tile">
                            <div class="tile box is-shadowless is-paddingless" style="border: solid 0.05rem black">
                                <div class="tile">
                                    <div class="tile is-parent">
                                        <div class="has-text-centered tile is-child">
                                            <div class="has-text-weight-semibold is-size-6">{{ photovoltaicCapacity | numeral('0,0.0') }}  <span class="is-size-7">kW</span></div>
                                            <div class="has-text-weight-normal is-size-7">Total</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </b-field>
                    </div>

                    <div class="tile is-parent">
                        <div class="columns is-multiline tile">
                            <div v-for="junction in junctions" class="tile">
                                <div class="tile column is-parent is-4" v-for="solarPanel in junction.solar_panels" :key="solarPanel.id">
                                    <a class="box tile is-dark is-bold has-text-warning has-background" @click="isJunctionModalActive = true">
                                        <div class="is-box-background is-transparent">
                                            <font-awesome-icon :icon="['fas', 'solar-panel']" size="4x" class="is-pulled-right" style="margin-top: -10px; margin-right: 15px"/>
                                        </div>
                                        <div class="columns">
                                            <div class="column">
                                                <div class="has-text-weight-semibold is-size-6">P. Solar</div>
                                            </div>
                                        </div>   
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tile columns is-vcentered" v-if="!hasSolarPanels()">
                    <div class="column">
                        <div class="has-text-centered has-text-weight-light has-text-grey is-size-6">
                            <div class="block">NO TIENE PANELES SOLARES</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <b-modal :active.sync="isNewSolarPanelModalActive"
            has-modal-card
            trap-focus
            aria-role="dialog"
            aria-modal>
            <modal-new-solar-panel 
                :user="user"
                :junctions="junctions"
                />
        </b-modal>
    </div>
</template>

<script>
    export default {
        components: {
            ModalNewSolarPanel: () => import(/* webpackChunkName: "chunks/capacity/modals/new/newSolarPanel"*/'../modals/new/ModalNewSolarPanel'),
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
                isNewSolarPanelModalActive: false,
            }
        },

        computed: {
            // hasSolarPanels() {
            //     Object.keys(this.junctions).forEach(element => {
            //         console.log(this.junctions[element].solar_panels.length)
            //         if (this.junctions[element].solar_panels.length) {
            //             return true
            //         }
            //     })
            //     return false
            // },

            photovoltaicCapacity() {
                let capacity = 0
                Object.keys(this.junctions).forEach(element => {
                    const junction = this.junctions[element]
                    if (junction.solar_panels.length) {
                        Object.keys(junction.solar_panels).forEach(element => {
                            let panel = junction.solar_panels[element]
                            capacity = capacity + (panel.unit_capacity * panel.quantity)
                        })
                    }
                })
                return capacity / 1000
            },
        },

        watch: {
            junctions(val) {
                // this.hasSolarPanels()
            }
        },
        
        mounted() {
            // console.log(this.generatorSets)
            // this.getGeneratorSets()
        },

        methods: {
            hasSolarPanels() {
                let panels = []
                Object.keys(this.junctions).forEach(element => {
                    // console.log(this.junctions[element].solar_panels.length)
                    if (this.junctions[element].solar_panels.length) {
                        Object.keys(this.junctions[element].solar_panels).forEach(element => {
                            panels.push(this.junctions[element].solar_panels)
                        })
                    }
                })
                return panels.length ? true : false
            },

        }
    }
</script>
