<template>
    <div class="tile">
        <section class="tile" style="padding: 24px;">
            <div class="tile is-ancestor">
                <div class="tile is-parent">
                    <div class="tile box">
                        <div class="tile columns">

                            <div class="tile column is-4 has-background-dark has-text-weight-bold has-text-white">
                                <div class="tile is-child">
                                    <div class="title has-text-weight-bold is-size-6 has-text-white">GRUPOS ELECTROGENOS</div>
                                    <div class="">
                                        <div class="has-text-weight-normal is-size-6 is-pulled-right">{{ responsable.area }}</div>
                                        <div class="has-text-weight-normal is-size-6">Responsable</div>
                                    </div>
                                    <!-- <div class="">
                                        <div class="has-text-weight-normal is-size-6 is-pulled-right">{{ totalCapacityA | numeral('0,0.0') }}</div>
                                        <div class="has-text-weight-normal is-size-6">total Plano A</div>
                                    </div>
                                    <div class="">
                                        <div class="has-text-weight-normal is-size-6 is-pulled-right">{{ totalCapacityB | numeral('0,0.0') }}</div>
                                        <div class="has-text-weight-normal is-size-6">total Plano B</div>
                                    </div>
                                    <div class="">
                                        <div class="has-text-weight-normal is-size-6 is-pulled-right">{{ usedA | numeral('0,0.0') }}</div>
                                        <div class="has-text-weight-normal is-size-6">utilizada Plano A</div>
                                    </div>
                                    <div class="">
                                        <div class="has-text-weight-normal is-size-6 is-pulled-right">{{ usedB | numeral('0,0.0') }}</div>
                                        <div class="has-text-weight-normal is-size-6">utilizada Plano B</div>
                                    </div>
                                    <div class="">
                                        <div class="has-text-weight-normal is-size-6 is-pulled-right">{{ availableA | numeral('0,0.0') }}</div>
                                        <div class="has-text-weight-normal is-size-6">disponible Plano A</div>
                                    </div>
                                    <div class="">
                                        <div class="has-text-weight-normal is-size-6 is-pulled-right">{{ availableB | numeral('0,0.0') }}</div>
                                        <div class="has-text-weight-normal is-size-6">disponible Plano B</div>
                                    </div> -->

                                    <hr style="margin: 8px 0 8px 0;" />

                                    <div class="">
                                        <div class="has-text-weight-normal is-size-6 is-pulled-right">{{ totalCapacity | numeral('0,0.0') }}</div>
                                        <div class="has-text-weight-normal is-size-6">Total</div>
                                    </div>
                                    <div class="">
                                        <div class="has-text-weight-normal is-size-6 is-pulled-right">{{ totalUsed | numeral('0,0.0') }}</div>
                                        <div class="has-text-weight-normal is-size-6">Total utilizado</div>
                                    </div>
                                    <div class="">
                                        <div class="has-text-weight-normal is-size-6 is-pulled-right">{{ totalAvailable | numeral('0,0.0') }}</div>
                                        <div class="has-text-weight-normal is-size-6">Total disponible</div>
                                    </div>
                                </div>
                            </div>

                            <div class="column tile">
                                <div class="columns tile is-parent">
                                    <div class="columns tile">
                                        <div class="column tile is-6">
                                            <!-- <div class=""> -->
                                                <b-field label="CAPACIDAD PLANOS" label-position="on-border" class="tile">
                                                    <div class="tile is-parent box is-shadowless" style="border: solid 0.05rem black">
                                                        <div class="columns tile">
                                                            <div class="column tile is-child">
                                                                <div class="">
                                                                    <div class="has-text-weight-normal is-size-7 is-pulled-right">{{ totalCapacityA | numeral('0,0.0') }}</div>
                                                                    <div class="has-text-weight-normal is-size-7">total Plano A</div>
                                                                </div>
                                                                <div class="">
                                                                    <div class="has-text-weight-normal is-size-7 is-pulled-right">{{ usedA | numeral('0,0.0') }}</div>
                                                                    <div class="has-text-weight-normal is-size-7">utilizada Plano A</div>
                                                                </div>
                                                                <div class="">
                                                                    <div class="has-text-weight-normal is-size-7 is-pulled-right">{{ availableA | numeral('0,0.0') }}</div>
                                                                    <div class="has-text-weight-normal is-size-7">disponible Plano A</div>
                                                                </div>
                                                            </div>

                                                            <div class="column">
                                                                <div class="">
                                                                    <div class="has-text-weight-normal is-size-7 is-pulled-right">{{ totalCapacityB | numeral('0,0.0') }}</div>
                                                                    <div class="has-text-weight-normal is-size-7">total Plano B</div>
                                                                </div>
                                                                
                                                                <div class="">
                                                                    <div class="has-text-weight-normal is-size-7 is-pulled-right">{{ usedB | numeral('0,0.0') }}</div>
                                                                    <div class="has-text-weight-normal is-size-7">utilizada Plano B</div>
                                                                </div>
                                                                
                                                                <div class="">
                                                                    <div class="has-text-weight-normal is-size-7 is-pulled-right">{{ availableB | numeral('0,0.0') }}</div>
                                                                    <div class="has-text-weight-normal is-size-7">disponible Plano B</div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </b-field>
                                            <!-- </div> -->
                                        </div>
                                        <div class="column tile">
                                            <div class="columns tile is-parent">
                                                <a class="column tile is-child box" 
                                                    v-for="generatorSet in generatorSets" :key="generatorSet.id"
                                                    @click="isGeneratorModalActive = true; generatorSetSelected = generatorSet">
                                                    <div class="">
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
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    

                                </div>
                            </div>
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
            responsable() {
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

            totalCapacityA() {
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

            totalCapacityB() {
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

            totalCapacity() {
                return this.responsable.id == 1 ? this.totalCapacityA + this.totalCapacityB : 123
            },

            usedA() {
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

            usedB() {
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

            totalUsed() {
                return this.responsable.id == 1 ? this.usedA + this.usedB : 456
            },

            availableA() {
                return this.totalCapacityA - this.usedA
            },

            availableB() {
                return this.totalCapacityB - this.usedB
            },

            totalAvailable() {
                return this.responsable.id == 1 ? this.availableA + this.availableB : 789
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
