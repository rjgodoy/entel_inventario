<template>
    <div class="modal-card">
        <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
                <p class="modal-card-title">Editar empalme</p>
            </header>

            <section class="modal-card-body">
                <div class="columns is-multiline">
                    <div class="column is-6">
                        <b-field label="POP">
                            <div class="is-size-5 has-text-weight-normal">
                                {{ junction.pop.nombre }}
                            </div>
                        </b-field>
                    </div>

                    <div class="column is-6">
                        <b-field label="Compañía Eléctrica">
                            <div class="is-size-5 has-text-weight-normal">
                                {{ junction.electric_company.name }}
                            </div>
                        </b-field>
                    </div>

                    <div class="column is-4">
                        <b-field label="Número de Cliente">
                            <b-input
                                v-model="client_number"
                                placeholder="Número de Cliente">
                            </b-input>
                        </b-field>
                    </div>
                    <div class="column is-4">
                        <b-field label="Número de Medidor">
                            <b-input
                                v-model="junction_number"
                                placeholder="Número de Medidor">
                            </b-input>
                        </b-field>
                    </div>

                    <div class="column is-4">
                        <b-field label="Tipo de Tarifa">
                            <b-input
                                v-model="rate_type"
                                placeholder="Tipo de tarifa">
                            </b-input>
                        </b-field>
                    </div>

                    <div class="column is-4">
                        <b-field label="Tipo de Empalme">
                            <b-select placeholder="Seleccione Compañía Eléctrica..." v-model="junction_type_id" expanded>
                                <option
                                    v-for="option in junctionTypes"
                                    :value="option.id"
                                    :key="option.id">
                                    {{ option.type }}
                                </option>
                            </b-select>
                        </b-field>
                    </div>

                    <div class="column is-4">
                        <b-field label="Tipo de conexión">
                            <b-select placeholder="Seleccione tipo de conexión..." v-model="junction_connection_id" expanded>
                                <option
                                    v-for="option in junctionConnections"
                                    :value="option.id"
                                    :key="option.id">
                                    {{ option.connection }}
                                </option>
                            </b-select>
                        </b-field>
                    </div>

                </div>

                <hr/>
            </section>

            <footer class="modal-card-foot">
                <button class="button" @click="$parent.close()">Cerrar</button>
                <button class="button is-link" :disabled="!toSave" @click="createJunction()">Guardar</button>
                <button class="button is-danger is-right" @click="deleteJunction()">
                    Eliminar
                </button>
            </footer>
        </div>
    </div>
</template>

<script>    
    import { library } from "@fortawesome/fontawesome-svg-core";
    import { faTrashAlt as farTrashAlt } from '@fortawesome/free-regular-svg-icons'
    library.add(farTrashAlt);
    import debounce from 'lodash/debounce'
    export default {
        props : [ 'junction' ],

        data() {
            return {
                junctionTypes: Object,
                junctionConnections: Object,
                junction_number: this.junction.junction_number,
                client_number: this.junction.client_number,
                junction_type_id: this.junction.junction_type_id,
                junction_connection_id: this.junction.junction_connection_id,
                rate_type: this.junction.rate_type,
            }
        },

        mounted() {
            this.getJunctionTypes()
            this.getJunctionConnections()
        },

        computed: {
            toSave() {
                return (
                    this.junction.client_number != this.client_number || 
                    this.junction.junction_number != this.junction_number || 
                    this.junction.rate_type != this.rate_type ||
                    this.junction.junction_type_id != this.junction_type_id ||
                    this.junction.junction_connection_id != this.junction_connection_id

                    ) ? true : false;
            },
        },

        methods: {
            getJunctionTypes() {
                axios.get('/api/junctionTypes')
                .then(response => {
                    this.junctionTypes = response.data.junctionTypes
                })
            },

            getJunctionConnections() {
                axios.get('/api/junctionConnections')
                .then(response => {
                    console.log(response.data)
                    this.junctionConnections = response.data.junctionConnections
                })
            },

            createJunction() {
                if (this.toSave) {
                    let params = {
                        'isSimpleEdit': true,
                        'junction_number': this.junction_number,
                        'client_number': this.client_number,
                        'junction_type_id': this.junction_type_id,
                        'junction_connection_id': this.junction_connection_id,
                        'rate_type': this.rate_type
                    }
                    axios.put(`/api/junctions/${this.junction.id}`, params)
                    .then(response => {
                        console.log(response)
                        this.$eventBus.$emit('new-junction')
                        this.$emit('new-junction');
                        this.$parent.close()
                    })
                }
            },

            deleteJunction() {
                console.log(this.junction)
                this.$buefy.dialog.confirm({
                    message: `Confirma la eliminación del empalme del POP?`,
                    type: 'is-link',
                    onConfirm: () => {
                        axios.delete(`/api/junctions/${this.junction.id}`)
                        .then(response => {
                            // console.log(response.data)
                            this.$eventBus.$emit('junction-deleted')
                            this.$parent.close()
                        })

                    }
                })

            } 
        }
    }
</script>
