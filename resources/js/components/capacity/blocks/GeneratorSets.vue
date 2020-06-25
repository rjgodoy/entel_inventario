<template>
    <div>
        <section class="section" v-if="generatorSets.length">

            <div class="box is-shadowless columns is-paddingless" style="border: solid 0.5px black" v-if="generatorSets.length">
                <div class="column is-8">
                    <div class="has-text-weight-semibold is-size-6">Grupos Electrógenos</div>
                    <!-- <div class="tile is-parent" v-if="generatorSets.length < 2"></div> -->
                    <div class="tile is-parent columns" v-for="generatorSet in generatorSets" :key="generatorSet.id">
                        <a class="tile is-child column is-4"
                            @click="isGeneratorModalActive = true; generatorSetSelected = generatorSet">
                            <div class="box is-success">
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

                <div class="column has-background-light">
                    <div>Responsable: {{ responsable.area }}</div>
                    <div>Capacidad total Plano A: {{ totalCapacityA }}</div>
                    <div>Capacidad total Plano B: {{ totalCapacityB }}</div>
                    <div>Capacidad utilizada Plano A: {{ usedA }}</div>
                    <div>Capacidad utilizada Plano B: {{ usedB }}</div>
                    <div>Capacidad disponible Plano A: {{ availableA }}</div>
                    <div>Capacidad disponible Plano B: {{ availableB }}</div>
                    <div>Capacidad Total: {{ totalCapacity }}</div>
                    <div>Capacidad Total utilizado: {{ totalUsed }}</div>
                    <div>Capacidad Total disponible: {{ totalAvailable }}</div>
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
            GeneratorSet: () => import(/* webpackChunkName: "chunks/pop/power/generatorSet"*/'../../pop/power/GeneratorSet'),
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
            // getGeneratorSets() {
            //     axios.get(`/api/generatorSets/${this.pop.id}?api_token=${this.user.api_token}`)
            //     .then((response) => {
            //         this.generatorSets = response.data.generatorSets
            //         this.can = response.data.can
            //     })
            //     .catch((error) => {
            //         console.log('Error al traer los datos de Plantas Rectificadoras: ' + error);
            //     });
            // }
        }
    }
</script>
