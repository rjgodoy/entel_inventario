<template>
    <div class="tile is-parent">
        <section class="tile box">
            <!-- <b-field label="PANELES SOLARES" label-position="on-border" class="tile"> -->
                <!-- <div class="tile box is-shadowless" style="border: solid 0.05rem black"> -->
                    <div class="tile is-vertical">

                        <div class="field">
                            <div class="is-pulled-right">
                                <font-awesome-icon :icon="['fas', 'plus']"
                                <b-tag class="is-default has-text-weight-light has-text-grey is-size-7">
                                    <a @click="isNewSolarPanelModalActive = true">Agregar</a>
                                </b-tag>
                            </div>
                            <div class="is-size-6 has-text-weight-bold" style="padding-bottom: 12px;">PANELES SOLARES</div>
                        </div>
                        

                        <div class="tile is-vertical is-parent">

                            <b-field label="CAPACIDADES" label-position="on-border" class="tile is-parent">
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

                            <div class="tile is-parent columns is-multiline" v-if="hasSolarPanels">

                                <div v-for="junction in junctions" class="tile">
                                    <div class="tile column is-parent is-4" v-for="solarPanel in junction.solar_panels" :key="solarPanel.id">
                                        <a class="box tile " @click="isJunctionModalActive = true">
                                            <div class="">
                                                <div class="columns">
                                                    <div class="column is-4">
                                                        <div class="has-text-weight-semibold is-size-6">Paneles Solar</div>
                                                    </div>
                                                </div>   
                                            </div>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="tile columns is-vcentered" v-if="!hasSolarPanels">
                            <div class="column">
                                <div class="has-text-centered has-text-weight-light has-text-grey is-size-7">
                                    <div class="block">NO TIENE PANELES SOLARES</div>
                                    <b-tag class="is-default has-text-weight-light has-text-grey is-size-7">
                                        <a @click="isNewSolarPanelModalActive = true">Agregar</a>
                                    </b-tag>
                                </div>
                            </div>
                        </div>
                    </div>
                <!-- </div> -->
            <!-- </b-field> -->
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
            ModalNewSolarPanel: () => import(/* webpackChunkName: "chunks/pop/layout/modals/newSolarPanel"*/'../../pop/layout/modals/ModalNewSolarPanel'),
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
            async hasSolarPanels() {
                await Object.keys(this.junctions).forEach(element => {
                    return this.junctions[element].solar_panels.length && true
                })
                return false
            },

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

            }
        },
        
        mounted() {
            // console.log(this.generatorSets)
            // this.getGeneratorSets()
        },

        methods: {

        }
    }
</script>
