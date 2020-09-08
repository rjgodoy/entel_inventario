<template>
    <div class="modal-card">
        <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
                <p class="modal-card-title">Editar Plano</p>
            </header>

            <section class="modal-card-body">
                <div class="columns">
                    <div class="column">
                        <b-field label="Tensión de flote">
                            <b-input
                                v-model="float_tension"
                                placeholder="Tensión de flote">
                            </b-input>
                        </b-field>
                    </div>
                    <div class="column">
                        <b-field label="Corriente">
                            <b-input
                                v-model="current"
                                placeholder="Corriente">
                            </b-input>
                        </b-field>
                    </div>
                    <div class="column">
                        <b-field label="Factor de recarga">
                            <b-input
                                v-model="recharge_factor"
                                placeholder="Factor de recarga">
                            </b-input>
                        </b-field>
                    </div>
                </div>

                <hr/>

                <div class="field">
                    <div class="is-size-5">Módulos de Redundancia</div>
                </div>
                <div class="columns">
                    <div class="column">
                        <b-field label="Cantidad">
                            <b-input
                                v-model="redundant_modules_quantity"
                                placeholder="Cantidad">
                            </b-input>
                        </b-field>
                    </div>
                    <div class="column">
                        <b-field label="Capacidad">
                            <b-input
                                v-model="redundant_modules_capacity"
                                placeholder="Capacidad">
                            </b-input>
                        </b-field>
                    </div>
                </div>
            </section>

            <footer class="modal-card-foot">
                <button class="button" type="button" @click="$parent.close()">Cerrar</button>
                <button class="button is-link" :disabled="!toSave" @click="updatePlane()">Guardar</button>
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
            'plane',
            'user'
        ],

        data() {
            return {
                float_tension: this.plane.float_tension,
                current: this.plane.current,
                recharge_factor: this.plane.recharge_factor,
                redundant_modules_quantity: this.plane.current_redundant_modules && this.plane.current_redundant_modules.quantity,
                redundant_modules_capacity: this.plane.current_redundant_modules && this.plane.current_redundant_modules.capacity
            }
        },

        computed: {
            toSave() {
                return  this.float_tension != this.plane.float_tension || 
                        this.current != this.plane.current || 
                        this.recharge_factor != this.plane.recharge_factor || 
                        (!this.plane.current_redundant_modules && this.redundant_modules_quantity && this.redundant_modules_capacity) ||
                        (this.plane.current_redundant_modules && this.redundant_modules_quantity != this.plane.current_redundant_modules.quantity && this.redundant_modules_capacity != this.plane.current_redundant_modules.capacity)
            }
        },

        methods: {
            updatePlane() {
                if(this.toSave) {
                    let params = {
                        'float_tension': this.float_tension,
                        'current': this.current,
                        'recharge_factor': this.recharge_factor,
                        'redundant_modules_quantity': parseFloat(this.redundant_modules_quantity),
                        'redundant_modules_capacity': parseFloat(this.redundant_modules_capacity)
                    }
                    axios.put(`/api/planes/${this.plane.id}`, params)
                    .then(response => {
                        console.log(response.data)
                        this.$eventBus.$emit('new-plane-updated')
                        this.$parent.close()
                    })
                }
            },

            // confirmDelete(powerRectifier) {
            //     this.$buefy.dialog.confirm({
            //         message: 'Desea eliminar la planta rectificadora del POP?',
            //         type: 'is-danger',
            //         onConfirm: () => {
            //             axios.delete(`/api/powerRectifiers/${powerRectifier.id}`)
            //             .then(response => {
            //                 this.getPopPowerRectifiersWithoutRoom()
            //             })
            //         }
            //     })
            // },
        }
    }
</script>
