<template>
    <div class="tile is-parent">
        <section class="tile box">
            <b-field label="GRUPOS ELECTROGENOS" label-position="on-border" class="tile">
                <div class="tile box is-shadowless" style="border: solid 0.05rem black">
                    <div class="tile is-parent is-7">
                        <b-field label="CAPACIDAD PLANOS" label-position="on-border" class="tile">
                            <div class="tile box is-shadowless" style="border: solid 0.05rem black">
                                <div class="tile is-vertical">
                                    <div class="tile is-parent" v-if="totalGeneratorSetsCapacityA">
                                        <b-field label="PLANO A" label-position="on-border" class="tile">
                                            <div class="tile is-parent box is-shadowless" style="border: solid 0.05rem black">
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
                                        <b-field label="PLANO B" label-position="on-border" class="tile">
                                            <div class="tile is-parent box is-shadowless" style="border: solid 0.05rem black">
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
                            </div>
                        </b-field>
                    </div>
                    <!-- <div class="tile is-parent"> -->
                        <!-- <div class="columns tile is-parent">
                            <b-field label="EQUIPOS" label-position="on-border" class="tile">
                                <div class="tile box is-shadowless" style="border: solid 0.05rem black"> -->
                                    <div class="tile is-parent columns is-multiline">
                                        <div class="column tile is-parent" :class="generatorSets.length > 1 && 'is-6'" v-for="generatorSet in generatorSets" :key="generatorSet.id">
                                            <div class="tile ">
                                                <a class="tile is-parent box" @click="isGeneratorModalActive = true; generatorSetSelected = generatorSet">
                                                    <div class="columns">
                                                        <div class="column">
                                                            <div class="has-text-weight-semibold is-size-6">Grupo Electrógeno</div>
                                                        </div>
                                                        <div class="column is-2 has-text-centered">
                                                            <!-- <font-awesome-icon 
                                                                :icon="['far', 'check-circle']"
                                                                size="2x"
                                                                class="has-text-success"
                                                            /> -->
                                                        </div>
                                                    </div>   
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                <!-- </div>
                            </b-field>
                        </div> -->
                    <!-- </div> -->
                </div>
            </b-field>
        </section>
        <b-modal :active.sync="isGeneratorModalActive"
            has-modal-card
            trap-focus
            aria-role="dialog"
            aria-modal >
            <modal-generator 
                :generatorSet="generatorSetSelected"
                :can="can"
                :user="user"/>
        </b-modal>
    </div> 
</template>

<script>
    export default {
        components: {
            ModalGenerator: () => import(/* webpackChunkName: "chunks/pop/layout/modals/generator"*/'../../pop/layout/modals/ModalGenerator'),
        },

        props : [
            'generatorSets',
            'can',
            'user',
            'pop'
        ],

        data() {
            return {
                generatorSetSelected: null,
                isGeneratorModalActive: false,
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

            totalGeneratorSetsCapacityA() {
                let sum = 0; let res = 0; let div = 1; 
                if (this.generatorSets.length) {
                    Object.keys(this.generatorSets).forEach(element => {
                        let primeCapacity = this.generatorSets[element].current_generator_set_capacity ? this.generatorSets[element].current_generator_set_capacity.prime_capacity : 0
                        let capacity = primeCapacity * 0.8

                        switch(this.generatorSets[element].generator_set_topology_type_id) {
                            case 1:
                                sum = sum + capacity
                                break
                            case 2:
                                sum = sum + capacity
                                res = res + capacity
                                div = div++
                                break
                            case 3:
                                sum = this.generatorSets[element].generator_set_level_type_id == 2 ? sum + capacity : sum
                                break
                            default:
                                break
                        }
                    })
                }
                return sum - (res / div)
            },

            totalGeneratorSetsCapacityB() {
                let sum = 0
                if (this.generatorSets.length) {
                    Object.keys(this.generatorSets).forEach(element => {
                        let primeCapacity = this.generatorSets[element].current_generator_set_capacity ? this.generatorSets[element].current_generator_set_capacity.prime_capacity : 0
                        let capacity = primeCapacity * 0.8

                        switch(this.generatorSets[element].generator_set_topology_type_id) {
                            case 1:
                            case 2:
                            default:
                                break
                            case 3:
                                sum = this.generatorSets[element].generator_set_level_type_id == 3 ? sum + capacity : sum
                                break
                        }
                    })
                }
                return sum
            },

            totalGeneratorSetsCapacity() {
                var total = 0
                if (this.generatorSetsResponsable.id == 1) {
                    total = this.totalGeneratorSetsCapacityA + this.totalGeneratorSetsCapacityB
                } else {
                    Object.keys(this.generatorSets).forEach(element => {
                        total = this.generatorSets[element].current_generator_set_corp_disponibility && total == 0 ? this.generatorSets[0].current_generator_set_corp_disponibility.total_capacity : total
                    })
                }
                return total
            },

            usedGeneratorSetsCapacityA() {
                let sum = 0
                if (this.generatorSets.length) {
                    Object.keys(this.generatorSets).forEach(element => {
                        let usedCapacity = this.generatorSets[element].current_generator_set_capacity ? this.generatorSets[element].current_generator_set_capacity.used_capacity : 0

                        switch(this.generatorSets[element].generator_set_topology_type_id) {
                            case 1:
                            case 2:
                                sum = sum + usedCapacity
                                break
                            case 3:
                                sum = this.generatorSets[element].generator_set_level_type_id == 2 ? sum + usedCapacity : sum
                                break
                            default:
                                break
                        }
                    })
                }
                return sum
            },

            usedGeneratorSetsCapacityB() {
                let sum = 0
                if (this.generatorSets.length) {
                    Object.keys(this.generatorSets).forEach(element => {
                        let usedCapacity = this.generatorSets[element].current_generator_set_capacity ? this.generatorSets[element].current_generator_set_capacity.used_capacity : 0

                        switch(this.generatorSets[element].generator_set_topology_type_id) {
                            case 1:
                            case 2:
                            default:
                                break
                            case 3:
                                sum = this.generatorSets[element].generator_set_level_type_id == 3 ? sum + usedCapacity : sum
                                break
                        }
                    })
                }
                return sum
            },

            totalGeneratorSetsUsedCapacity() {
                var total = 0
                if (this.generatorSetsResponsable.id == 1) {
                    total = this.usedGeneratorSetsCapacityA + this.usedGeneratorSetsCapacityB
                } else {
                    Object.keys(this.generatorSets).forEach(element => {
                        total = this.generatorSets[element].current_generator_set_corp_disponibility && total == 0 ? this.generatorSets[0].current_generator_set_corp_disponibility.used_capacity : total
                    })
                }
                return total
            },

            availableGeneratorSetsCapacityA() {
                return this.totalGeneratorSetsCapacityA - this.usedGeneratorSetsCapacityA
            },

            availableGeneratorSetsCapacityB() {
                return this.totalGeneratorSetsCapacityB - this.usedGeneratorSetsCapacityB
            },

            totalAvailableGeneratorSetsCapacity() {
                var total = 0
                if (this.generatorSetsResponsable.id == 1) {
                    total = this.availableGeneratorSetsCapacityA + this.availableGeneratorSetsCapacityB
                } else {
                    Object.keys(this.generatorSets).forEach(element => {
                        total = this.generatorSets[element].current_generator_set_corp_disponibility && total == 0 ? this.generatorSets[0].current_generator_set_corp_disponibility.available_capacity : total
                    })
                }
                return total
            }

        },

        watch: {
            generatorSets(val) {
                // console.log(val)
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
