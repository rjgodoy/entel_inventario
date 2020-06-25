<template>
    <div>
        <div>Capacidad Total: {{ totalCapacity }}</div>
        <div>Capacidad Usada: {{ usedCapacity }}</div>
        <div>Capacidad Disponible: {{ availableCapacity }}</div>

        <div class="tile is-parent columns is-multiline">
            <div class="column tile is-6" v-for="sala in orderedRooms" :key="sala.order">
                <Room 
                    :sala=sala
                    :room=room
                    :pop=pop
                    :user=user
                    :can=can
                    @room-distribution="roomsDistribution"
                />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            Room: () => import(/* webpackChunkName: "chunks/pop/layout/room"*/'../../pop/layout/Room'),
            // ModalGenerator: () => import(/* webpackChunkName: "chunks/pop/layout/modals/generator"*/'../../pop/layout/modals/ModalGenerator'),
        },

        props : [
            'room',
            'salas',
            'can',
            'user',
            'pop'
        ],

        data() {
            return {
                totalCapacity: 0,
                usedCapacity: 0,
                availableCapacity: 0
                // powerRectifiers: Array,
                // airConditioners: Array,

                // powerRectifierSelected: null,
                // airConditionerSelected: null,

                // canEditPowerRectifiers: null,
                // canEditAirConditioners: null,

                // isPowerRectifierModalActive: false,
                // isAirConditionerModalActive: false,
            }
        },

        computed: {
            orderedRooms: function () {
                return _.orderBy(this.salas, 'order')
            },

            // responsable() {
            //     let area = 'Sin Información'; let id = null;
            //     if (this.generatorSets.length) {
            //         Object.keys(this.generatorSets).forEach(element => {
            //             if(this.generatorSets[element].current_generator_responsable) {
            //                 switch(this.generatorSets[element].current_generator_responsable.generator_set_responsable_area_id) {
            //                     case 1:
            //                         id = 1
            //                         area = this.generatorSets[element].current_generator_responsable.generator_set_responsable_area.area
            //                         break
            //                     case 2:
            //                         id = id == 1 ? id : 2
            //                         arae = id == 1 ? area : this.generatorSets[element].current_generator_responsable.generator_set_responsable_area.area
            //                         break
            //                     case 3:
            //                         id = id == 1 || id == 2 ? id : 3
            //                         area = id == 1 || id == 2 ? area : this.generatorSets[element].current_generator_responsable.generator_set_responsable_area.area
            //                         break
            //                     default:
            //                         break
            //                 }
            //             }
            //         })
            //     }
                

            //     return {
            //         'id': id,
            //         'area': area
            //     }
            // },

            // totalCapacityA() {
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

            // totalCapacityB() {
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

            // totalCapacity() {
            //     return this.responsable.id == 1 ? this.totalCapacityA + this.totalCapacityB : 123
            // },

            // usedA() {
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

            // usedB() {
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

            // totalUsed() {
            //     return this.responsable.id == 1 ? this.usedA + this.usedB : 456
            // },

            // availableA() {
            //     return this.totalCapacityA - this.usedA
            // },

            // availableB() {
            //     return this.totalCapacityB - this.usedB
            // },

            // totalAvailable() {
            //     return this.responsable.id == 1 ? this.availableA + this.availableB : 789
            // }

        },

        watch: {
            room(val) {
                // console.log(val)
            }
        },
        
        mounted() {
            // this.getAirConditioners()
            // this.getPowerRectifiers()
        },

        methods: {
            roomsDistribution(value) {
                this.totalCapacity = this.totalCapacity + value.totalCapacity
                this.usedCapacity = this.usedCapacity + value.usedCapacity
                this.availableCapacity = this.availableCapacity + value.availableCapacity
            }
            // getPowerRectifiers() {
            //     axios.get(`/api/powerRectifiers/${this.pop.id}?api_token=${this.user.api_token}`)
            //     .then((response) => {
            //         // console.log(response.data)
            //         this.powerRectifiers = response.data.powerRectifiers
            //         this.canEditPowerRectifiers = response.data.can
            //     })
            //     .catch((error) => {
            //         console.log('Error al traer los datos de Empalmes: ' + error);
            //     });
            // },

            // getAirConditioners() {
            //     axios.get(`/api/airConditioners/${this.pop.id}?api_token=${this.user.api_token}`)
            //     .then((response) => {
            //         // console.log(response.data)
            //         this.airConditioners = response.data.airConditioner
            //         this.canEditAirConditioners = response.data.can
            //     })
            //     .catch((error) => {
            //         console.log('Error al traer los datos de Empalmes: ' + error);
            //     });
            // },
        }
    }
</script>
