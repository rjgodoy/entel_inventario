<template>
    <div class="modal-card" style="width: auto;">
        <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
                <p class="modal-card-title">Nuevo Grupo Electrógeno</p>
            </header>

            <section class="modal-card-body">
                <div class="columns is-multiline">
                    <div class="column is-6">
                        <b-field label="Marca / Modelo">
                            <b-select placeholder="Selecciona..." v-model="generatorSetType">
                                <option
                                    v-for="option in generatorSetTypes"
                                    :value="option"
                                    :key="option.id">
                                    {{ option.type }} - {{ option.model }}
                                </option>
                            </b-select>
                        </b-field>
                    </div>
                    <!-- <div class="column is-4">
                        <b-field label="Cantidad paneles">
                            <b-input
                                type="quantity"
                                v-model="quantity"
                                placeholder="Cantidad paneles"
                                required>
                            </b-input>
                        </b-field>
                    </div> -->
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
            'pop',
            'user'
        ],

        data() {
            return {
                generatorSetTypes: Array,
                generatorSetType: null,
            }
        },

        watch: {

        },

        created() {
        },

        mounted() {
           this.getGeneratorSetTypes()
        },

        methods: {
            getGeneratorSetTypes() {
                axios.get('/api/generatorSetTypes')
                .then(response => {
                    this.generatorSetTypes = response.data.generatorSetTypes
                })
            },

            register() {
                const params = {
                    'junction_id': this.junctionSelected.id,
                    'unit_capacity': parseFloat(this.unit_capacity),
                    'quantity': parseFloat(this.quantity),
                    'user_id': this.user.id,
                    'pop_id': this.junctionSelected.pop_id
                }

                axios.post('/api/generatorSets', params).then(response => {
                    console.log(response.data)
                    this.$parent.close()
                })
            },
        }
    }
</script>
