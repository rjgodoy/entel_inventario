<template>
    <div class="modal-card" style="width: auto;">
        <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
                <p class="modal-card-title">Nuevos Paneles Solares</p>
            </header>

            <section class="modal-card-body">
                <div class="columns is-multiline">
                    <div class="column is-4">
                        <b-field label="Empalme">
                            <b-select placeholder="Selecciona..." v-model="junctionSelected">
                                <option
                                    v-for="option in junctions"
                                    :value="option"
                                    :key="option.id">
                                    {{ option.id }}
                                </option>
                            </b-select>
                        </b-field>
                    </div>
                    <div class="column is-4">
                        <b-field label="Capacidad unitaria">
                            <b-input
                                type="unit_capacity"
                                v-model="unit_capacity"
                                placeholder="Capacidad unitaria"
                                required>
                            </b-input>
                        </b-field>
                    </div>
                    <div class="column is-4">
                        <b-field label="Cantidad paneles">
                            <b-input
                                type="quantity"
                                v-model="quantity"
                                placeholder="Cantidad paneles"
                                required>
                            </b-input>
                        </b-field>
                    </div>
                </div>
            </section>

            <footer class="modal-card-foot">
                <button class="button" type="button" @click="$parent.close()">Cerrar</button>
                <button class="button is-link" @click="register()">Registrar</button>
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
            'junctions',
            'user'
        ],

        data() {
            return {
                // junction_id: null,
                junctionSelected: null,
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
            register() {
                const params = {
                    'junction_id': this.junctionSelected.id,
                    'unit_capacity': parseFloat(this.unit_capacity),
                    'quantity': parseFloat(this.quantity),
                    'user_id': this.user.id,
                    'pop_id': this.junctionSelected.pop_id
                }

                axios.post('/api/solarPanels', params).then(response => {
                    console.log(response.data)
                    this.$eventBus.$emit('new-solar-panel')
                    this.$parent.close()
                })
            },
        }
    }
</script>
