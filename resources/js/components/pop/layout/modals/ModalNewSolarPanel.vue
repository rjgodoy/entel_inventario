<template>
    <div class="modal-card" style="width: 800px;">
        <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
                <p class="modal-card-title">Registrar Paneles Solares</p>
            </header>

            <section class="modal-card-body">
                <div class="columns is-multiline">
                    <div class="column is-6">
                        <b-field label="Capacidad unitaria paneles FV">
                            <b-input
                                type="unit_capacity_group"
                                v-model="unit_capacity_group"
                                placeholder="Capacidad unitaria paneles FV"
                                required>
                            </b-input>
                        </b-field>
                    </div>
                    <div class="column is-6">
                        <b-field label="Cantidad paneles FV">
                            <b-input
                                type="quantity_group"
                                v-model="quantity_group"
                                placeholder="Cantidad paneles FV"
                                required>
                            </b-input>
                        </b-field>
                    </div>
                </div>
            </section>

            <footer class="modal-card-foot">
                <button class="button" type="button" @click="$parent.close()">Close</button>
                <button class="button is-link">Registrar</button>
            </footer>
        </div>
    </div>
</template>

<script>    
    import { library } from "@fortawesome/fontawesome-svg-core";
    import { faTrashAlt as farTrashAlt } from '@fortawesome/free-regular-svg-icons'
    library.add(farTrashAlt);
    export default {
        props : [
            'pop',
            'user'
        ],

        data() {
            return {
                unit_capacity: null,
                quantity: null
            }
        },

        watch: {

        },

        created() {
        },

        mounted() {
           
        },

        methods: {
            // getPlaneTypes() {
            //     axios.get(`/api/planeTypes?api_token=${this.user.api_token}`).then(response => {
            //         this.planeTypes = response.data.planes
            //     })
            // },

            // getPopPowerRectifiersWithoutRoom() {
            //     let params = {
            //         'api_token': this.user.api_token
            //     }
            //     axios.get(`/api/powerRectifiersWithoutRoom/${this.room.pop_id}`, {params})
            //     .then(response => {
            //         this.powerRectifiersWithoutRoom = response.data.powerRectifiers
            //     })
            // },

            // asignRoom(powerRectifier) {
            //     if(this.roomDestiny && this.planeType) {
            //         this.$buefy.dialog.confirm({
            //             message: `Confirma asignación de la planta rectificadora ${powerRectifier.power_rectifier_type.type} - ${powerRectifier.power_rectifier_type.model} a sala ${ this.roomDestiny.name }, alimentando al plano ${this.planeType.type}?`,
            //             type: 'is-link',
            //             onConfirm: () => {
            //                 axios.put(`/api/powerRectifiers/${powerRectifier.id}?api_token=${this.user.api_token}&room_id=${this.roomDestiny.id}&plane_type_id=${this.planeType.id}`)
            //                 .then(response => {
            //                     console.log(response.data)
            //                     this.getPopPowerRectifiersWithoutRoom()
            //                     this.$eventBus.$emit('new-power-rectifier')
            //                 })
            //             }
            //         })
            //     }
            // },

            // confirmDelete(powerRectifier) {
            //     this.$buefy.dialog.confirm({
            //         message: 'Desea eliminar la planta rectificadora del POP?',
            //         type: 'is-danger',
            //         onConfirm: () => {
            //             axios.delete(`/api/powerRectifiers/${powerRectifier.id}?api_token=${this.user.api_token}`)
            //             .then(response => {
            //                 this.getPopPowerRectifiersWithoutRoom()
            //             })
            //         }
            //     })
            // },
        }
    }
</script>
