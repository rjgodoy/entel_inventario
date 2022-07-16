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
                            <b-select placeholder="Selecciona..." v-model="generatorSetModel">
                                <option
                                    v-for="option in generatorSetModels"
                                    :value="option"
                                    :key="option.id">
                                    {{ option.generator_set_brand && option.generator_set_brand.name }} - {{ option.name }}
                                </option>
                            </b-select>
                        </b-field>
                    </div>
                    <div class="column">
                        <div class="field">
                            <div class="is-size-6 has-text-weight-normal field">Propio de la sala <strong>{{ room.name }}</strong></div>
                            <b-switch v-model="isOnlyRoom"></b-switch>
                        </div>
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
            'pop',
            'user',
            'room'
        ],

        data() {
            return {
                generatorSetModels: Array,
                generatorSetModel: null,
                isOnlyRoom: false
            }
        },

        watch: {

        },

        created() {
        },

        mounted() {
           this.getGeneratorSetModels()
        },

        methods: {
            getGeneratorSetModels() {
                axios.get('/api/generatorSetModels')
                .then(response => {
                    console.log(response.data)
                    this.generatorSetModels = response.data.generatorSetModels
                })
            },

            register() {
                const params = {
                    'generator_set_model_id': this.generatorSetModel.id,
                    'user_id': this.user.id,
                    'pop_id': this.pop.id,
                    'room_id': this.room.id,
                    'is_only_room': this.isOnlyRoom
                }

                axios.post('/api/generatorSets', params).then(response => {
                    console.log(response.data)
                    this.$eventBus.$emit('new-generator-set')
                    this.$parent.close()
                })
            },
        }
    }
</script>
