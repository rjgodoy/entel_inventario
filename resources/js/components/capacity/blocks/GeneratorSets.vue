<template>
    <div class="tile is-parent">
        <section class="tile box has-background">
            <div class="is-box-background is-transparent-light">
                <font-awesome-icon :icon="['fas', 'charging-station']" size="10x" class="is-pulled-right" style=""/>
            </div>

            <div class="tile is-vertical">
                <div class="columns">
                    <div class="column">
                        <div class="is-size-6 has-text-weight-bold">GRUPOS ELECTROGENOS</div>
                    </div>
                    <div class="column" v-if="canEditGeneratorSets">
                        <b-dropdown aria-role="list" class="is-pulled-right" position="is-bottom-left">
                            <button class="button is-default is-small" slot="trigger" slot-scope="{ active }">
                                <span><font-awesome-icon :icon="['fas', 'ellipsis-v']" /></span>
                            </button>
                            <b-dropdown-item aria-role="listitem" class="is-size-6" @click="isNewGeneratorSetModalActive = true">
                                <div class="media">
                                    <font-awesome-icon class="media-left" :icon="['fas', 'plus']" />
                                    <div class="media-content">
                                        <h3>Nuevo Grupo Electrógeno</h3>
                                    </div>
                                </div>
                            </b-dropdown-item>
                        </b-dropdown>
                    </div>
                </div>

                <div class="tile is-vertical" v-if="generatorSets.length">
                    <div class="tile is-parent">
                        <div class="tile is-parent" v-if="totalGeneratorSetsCapacityA">
                            <b-field label="CAPACIDADES PLANO A" label-position="on-border" class="tile">
                                <div class="tile is-parent box is-shadowless" style="border: solid 0.05rem black; background-color: rgba(255, 255, 255, 0.8)">
                                    <div class="level tile">
                                        <div class="level-item">
                                            <div class="has-text-centered">
                                                <div class="has-text-weight-semibold is-size-6">{{ totalGeneratorSetsCapacityA | numeral('0,0.0') }} <span class="is-size-7">kW</span></div>
                                                <div class="has-text-weight-normal is-size-7">Total</div>
                                            </div>
                                        </div>
                                        
                                        <div class="level-item">
                                            <div class="has-text-centered">
                                                <div class="has-text-weight-semibold is-size-6">{{ usedGeneratorSetsCapacityA | numeral('0,0.0') }} <span class="is-size-7">kW</span></div>
                                                <div class="has-text-weight-normal is-size-7">Utilizada</div>
                                            </div>
                                        </div>
                                        
                                        <div class="level-item">
                                            <div class="has-text-centered">
                                                <div class="has-text-weight-semibold is-size-6">{{ availableGeneratorSetsCapacityA | numeral('0,0.0') }} <span class="is-size-7">kW</span></div>
                                                <div class="has-text-weight-normal is-size-7">Disponible</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </b-field>
                        </div>

                        <div class="tile is-parent" v-if="totalGeneratorSetsCapacityB">
                            <b-field label="CAPACIDADES PLANO B" label-position="on-border" class="tile">
                                <div class="tile is-parent box is-shadowless" style="border: solid 0.05rem black; background-color: rgba(255, 255, 255, 0.8)">
                                    <div class="level tile">
                                        <div class="level-item">
                                            <div class="has-text-centered">
                                                <div class="has-text-weight-semibold is-size-6">{{ totalGeneratorSetsCapacityB | numeral('0,0.0') }} <span class="is-size-7">kW</span></div>
                                                <div class="has-text-weight-normal is-size-7">Total</div>
                                            </div>
                                        </div>
                                        
                                        <div class="level-item">
                                            <div class="has-text-centered">
                                                <div class="has-text-weight-semibold is-size-6">{{ usedGeneratorSetsCapacityB | numeral('0,0.0') }} <span class="is-size-7">kW</span></div>
                                                <div class="has-text-weight-normal is-size-7">Utilizada</div>
                                            </div>
                                        </div>
                                        
                                        <div class="level-item">
                                            <div class="has-text-centered">
                                                <div class="has-text-weight-semibold is-size-6">{{ availableGeneratorSetsCapacityB | numeral('0,0.0') }} <span class="is-size-7">kW</span></div>
                                                <div class="has-text-weight-normal is-size-7">Disponible</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </b-field>
                        </div>
                    </div>

                    <div class="tile is-parent">
                        <div class="columns tile is-multiline">
                            <div class="column tile is-parent is-6" v-for="generatorSet in generatorSets" :key="generatorSet.id">
                                <a class="tile box is-dark is-bold has-text-warning has-background" 
                                    @click="isGeneratorModalActive = true; generatorSetSelected = generatorSet">
                                    <div class="is-box-background is-transparent">
                                        <font-awesome-icon :icon="['fas', 'charging-station']" size="4x" class="is-pulled-right" style="margin-top: -10px; margin-right: 15px"/>
                                    </div>
                                    <div class="columns">
                                        <div class="column">
                                            <div class="has-text-weight-semibold is-size-6">Grupo Electrógeno</div>
                                        </div>
                                    </div>   
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tile columns is-vcentered" v-if="!generatorSets.length">
                    <div class="column">
                        <div class="has-text-centered has-text-weight-light has-text-grey is-size-6">
                            <div class="block">NO TIENE GRUPOS ELECTROGENOS</div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <b-modal :active.sync="isGeneratorModalActive"
            has-modal-card
            trap-focus
            aria-role="dialog"
            aria-modal >
            <modal-generator 
                :generatorSet="generatorSetSelected"
                :canEditGeneratorSets="canEditGeneratorSets"
                :user="user"/>
        </b-modal>

        <b-modal :active.sync="isNewGeneratorSetModalActive"
            has-modal-card
            trap-focus
            aria-role="dialog"
            aria-modal>
            <modal-new-generator-set 
                :user="user"
                :pop="pop"
                />
        </b-modal>
    </div> 
</template>

<script>
    export default {
        components: {
            ModalGenerator: () => import(/* webpackChunkName: "chunks/capacity/modals/generator"*/'../modals/ModalGenerator'),
            ModalNewGeneratorSet: () => import(/* webpackChunkName: "chunks/capacity/modals/new/newGeneratorSet"*/'../modals/new/ModalNewGeneratorSet'),
        },

        props : [
            'user',
            'pop',
            'generatorSets',
            'canEditGeneratorSets',
            'totalGeneratorSetsCapacity',
            'totalGeneratorSetsUsedCapacity',
            'totalAvailableGeneratorSetsCapacity',
            'totalGeneratorSetsCapacityA',
            'totalGeneratorSetsCapacityB',
            'usedGeneratorSetsCapacityA',
            'usedGeneratorSetsCapacityB',
            'availableGeneratorSetsCapacityA',
            'availableGeneratorSetsCapacityB'
        ],

        data() {
            return {
                generatorSetSelected: null,
                isGeneratorModalActive: false,
                isNewGeneratorSetModalActive: false
            }
        },

        computed: {
            generatorSetsResponsable() {
                let area = 'Sin Información'; let id = null;
                if (this.generatorSets.length) {
                    Object.keys(this.generatorSets).forEach(element => {
                        if(this.generatorSets[element].current_generator_responsable) {
                            switch(this.generatorSets[element].current_generator_responsable.generator_set_responsable_area_id) {
                                case 1:
                                    id = 1
                                    area = this.generatorSets[element].current_generator_responsable.generator_set_responsable_area.area
                                    break
                                case 2:
                                    id = id == 1 ? id : 2
                                    arae = id == 1 ? area : this.generatorSets[element].current_generator_responsable.generator_set_responsable_area.area
                                    break
                                case 3:
                                    id = id == 1 || id == 2 ? id : 3
                                    area = id == 1 || id == 2 ? area : this.generatorSets[element].current_generator_responsable.generator_set_responsable_area.area
                                    break
                                default:
                                    break
                            }
                        }
                    })
                }
                

                return {
                    'id': id,
                    'area': area
                }
            },

            // totalGeneratorSetsCapacityA() {
            //     let sum = 0; let res = 0; let div = 1; 
            //     if (this.generatorSets.length) {
            //         Object.keys(this.generatorSets).forEach(element => {
            //             let primeCapacity = this.generatorSets[element].current_generator_set_capacity ? this.generatorSets[element].current_generator_set_capacity.prime_capacity : 0
            //             let capacity = primeCapacity * 0.8

            //             switch(this.generatorSets[element].generator_set_topology_type_id) {
            //                 case 1:
            //                     sum = sum + capacity
            //                     break
            //                 case 2:
            //                     sum = sum + capacity
            //                     res = res + capacity
            //                     div = div++
            //                     break
            //                 case 3:
            //                     sum = this.generatorSets[element].generator_set_level_type_id == 2 ? sum + capacity : sum
            //                     break
            //                 default:
            //                     break
            //             }
            //         })
            //     }
            //     return sum - (res / div)
            // },

            // totalGeneratorSetsCapacityB() {
            //     let sum = 0
            //     if (this.generatorSets.length) {
            //         Object.keys(this.generatorSets).forEach(element => {
            //             let primeCapacity = this.generatorSets[element].current_generator_set_capacity ? this.generatorSets[element].current_generator_set_capacity.prime_capacity : 0
            //             let capacity = primeCapacity * 0.8

            //             switch(this.generatorSets[element].generator_set_topology_type_id) {
            //                 case 1:
            //                 case 2:
            //                 default:
            //                     break
            //                 case 3:
            //                     sum = this.generatorSets[element].generator_set_level_type_id == 3 ? sum + capacity : sum
            //                     break
            //             }
            //         })
            //     }
            //     return sum
            // },

            // totalGeneratorSetsCapacity() {
            //     var total = 0
            //     if (this.generatorSetsResponsable.id == 1) {
            //         total = this.totalGeneratorSetsCapacityA + this.totalGeneratorSetsCapacityB
            //     } else {
            //         Object.keys(this.generatorSets).forEach(element => {
            //             total = this.generatorSets[element].current_generator_set_corp_disponibility && total == 0 ? this.generatorSets[0].current_generator_set_corp_disponibility.total_capacity : total
            //         })
            //     }
            //     return total
            // },

            // usedGeneratorSetsCapacityA() {
            //     let sum = 0
            //     if (this.generatorSets.length) {
            //         Object.keys(this.generatorSets).forEach(element => {
            //             let usedCapacity = this.generatorSets[element].current_generator_set_capacity ? this.generatorSets[element].current_generator_set_capacity.used_capacity : 0

            //             switch(this.generatorSets[element].generator_set_topology_type_id) {
            //                 case 1:
            //                 case 2:
            //                     sum = sum + usedCapacity
            //                     break
            //                 case 3:
            //                     sum = this.generatorSets[element].generator_set_level_type_id == 2 ? sum + usedCapacity : sum
            //                     break
            //                 default:
            //                     break
            //             }
            //         })
            //     }
            //     return sum
            // },

            // usedGeneratorSetsCapacityB() {
            //     let sum = 0
            //     if (this.generatorSets.length) {
            //         Object.keys(this.generatorSets).forEach(element => {
            //             let usedCapacity = this.generatorSets[element].current_generator_set_capacity ? this.generatorSets[element].current_generator_set_capacity.used_capacity : 0

            //             switch(this.generatorSets[element].generator_set_topology_type_id) {
            //                 case 1:
            //                 case 2:
            //                 default:
            //                     break
            //                 case 3:
            //                     sum = this.generatorSets[element].generator_set_level_type_id == 3 ? sum + usedCapacity : sum
            //                     break
            //             }
            //         })
            //     }
            //     return sum
            // },

            // totalGeneratorSetsUsedCapacity() {
            //     var total = 0
            //     if (this.generatorSetsResponsable.id == 1) {
            //         total = this.usedGeneratorSetsCapacityA + this.usedGeneratorSetsCapacityB
            //     } else {
            //         Object.keys(this.generatorSets).forEach(element => {
            //             total = this.generatorSets[element].current_generator_set_corp_disponibility && total == 0 ? this.generatorSets[0].current_generator_set_corp_disponibility.used_capacity : total
            //         })
            //     }
            //     return total
            // },

            // availableGeneratorSetsCapacityA() {
            //     return this.totalGeneratorSetsCapacityA - this.usedGeneratorSetsCapacityA
            // },

            // availableGeneratorSetsCapacityB() {
            //     return this.totalGeneratorSetsCapacityB - this.usedGeneratorSetsCapacityB
            // },

            // totalAvailableGeneratorSetsCapacity() {
            //     var total = 0
            //     if (this.generatorSetsResponsable.id == 1) {
            //         total = this.availableGeneratorSetsCapacityA + this.availableGeneratorSetsCapacityB
            //     } else {
            //         Object.keys(this.generatorSets).forEach(element => {
            //             total = this.generatorSets[element].current_generator_set_corp_disponibility && total == 0 ? this.generatorSets[0].current_generator_set_corp_disponibility.available_capacity : total
            //         })
            //     }
            //     return total
            // }

        },

        watch: {
            generatorSets(val) {
                // console.log(val)
            }
        },
        
    }
</script>
