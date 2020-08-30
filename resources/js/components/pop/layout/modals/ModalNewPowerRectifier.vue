<template>
    <div class="modal-card" style="width: 800px;">
        <!-- <form action=""> -->
            <div class="modal-card" style="width: auto">
                <header class="modal-card-head">
                    <p class="modal-card-title">Registrar Nueva Planta Rectificadora</p>
                </header>
                <section class="modal-card-body">
                    <div v-if="powerRectifiersWithoutRoom.length">
                        <div class="block">
                            <div class="field">
                                <div class="is-size-5">Asignar Sala</div>
                                <div class="is-size-6 has-text-weight-light">⚠️ Plantas rectificadoras registradas en el POP {{ room.pop.nombre }}, sin sala asignada.</div>
                            </div>
                            <div class="columns is-multiline">
                                <div class="column is-4" v-for="powerRectifier in powerRectifiersWithoutRoom">
                                    <div class="box">
                                        <div class="field">
                                            <div class="has-text-weight-normal is-size-6">
                                                {{ powerRectifier.power_rectifier_type.type }}
                                            </div>
                                            <div class="has-text-weight-light is-size-7">
                                                {{ powerRectifier.power_rectifier_type.model }}
                                            </div>
                                        </div>

                                        <div class="field columns">
                                            <div class="column is-5">
                                                <div class="field">
                                                    <b-select placeholder="Sala" size="is-small" v-model="roomDestiny" @input="asignRoom(powerRectifier)">
                                                        <option
                                                            v-for="option in rooms"
                                                            :value="option"
                                                            :key="option.id">
                                                            {{ option.name }}
                                                        </option>
                                                    </b-select>
                                                </div>
                                            </div>
                                            <div class="column is-5">
                                                <div class="field">
                                                    <b-select placeholder="Plano" size="is-small" v-model="planeType" @input="asignRoom(powerRectifier)">
                                                        <option
                                                            v-for="option in planeTypes"
                                                            :value="option"
                                                            :key="option.id">
                                                            {{ option.type }}
                                                        </option>
                                                    </b-select>
                                                </div>
                                            </div>
                                            <div class="column is-2">
                                                <div class="field">
                                                    <button class="button is-small is-pulled-right has-text-danger" @click="confirmDelete(powerRectifier)">
                                                        <font-awesome-icon :icon="['far', 'trash-alt']" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr/>
                    </div>

                    <div class="field columns">
                        <div class="column is-2">
                            <div class="field">
                                <b-select placeholder="Sala" size="" v-model="roomDestiny">
                                    <option
                                        v-for="option in rooms"
                                        :value="option"
                                        :key="option.id">
                                        {{ option.name }}
                                    </option>
                                </b-select>
                            </div>
                        </div>
                        <div class="column is-2">
                            <div class="field">
                                <b-select placeholder="Plano" size="" v-model="planeType">
                                    <option
                                        v-for="option in planeTypes"
                                        :value="option"
                                        :key="option.id">
                                        {{ option.type }}
                                    </option>
                                </b-select>
                            </div>
                        </div>
                        <div class="column is-4">
                            <div class="field">
                                <b-select placeholder="Marca/Modelo" size="" v-model="power_rectifier_type">
                                    <option
                                        v-for="option in powerRectifierTypes"
                                        :value="option"
                                        :key="option.id">
                                        {{ option.type }} - {{ option.model }}
                                    </option>
                                </b-select>
                            </div>
                        </div>
                        <div class="column is-2">
                            <div class="field">
                                <b-select placeholder="Modo" size="" v-model="power_rectifier_mode">
                                    <option
                                        v-for="option in powerRectifierModes"
                                        :value="option"
                                        :key="option.id">
                                        {{ option.mode }}
                                    </option>
                                </b-select>
                            </div>
                        </div>
                        <div class="column is-2">
                            <b-field label="Capacidad">
                                <b-input v-model="capacity"></b-input>
                            </b-field>
                        </div>
                    </div>

                </section>
                <footer class="modal-card-foot">
                    <button class="button" type="button" @click="$parent.close()">Close</button>
                    <button class="button is-link" @click="newPowerRectifier()" 
                        :disabled="!canSave">Guardar</button>
                </footer>
            </div>
        <!-- </form> -->
    </div>
</template>

<script>    
    import { library } from "@fortawesome/fontawesome-svg-core";
    import { faTrashAlt as farTrashAlt } from '@fortawesome/free-regular-svg-icons'
    library.add(farTrashAlt);
    export default {
        props : [
            'rooms',
            'planes',
            'room',
            'user'
        ],

        data() {
            return {
                powerRectifiersWithoutRoom: Array,
                planeTypes: Array,
                powerRectifierTypes: Array,
                powerRectifierModes: Array,

                roomDestiny: null,
                planeType: null,
                power_rectifier_type: null,
                power_rectifier_mode: null,
                capacity: 0
            }
        },

        computed: {
            canSave() {
                return this.roomDestiny && this.planeType && this.power_rectifier_type && this.power_rectifier_mode && !this.powerRectifiersWithoutRoom.length && this.capacity > 0
            }
        },

        watch: {

        },

        created() {
        },

        mounted() {
            this.getPopPowerRectifiersWithoutRoom()
            this.getPlaneTypes()
            this.getPowerRectifierModes()
            this.getPowerRectifierTypes()
            
        },

        methods: {
            getPlaneTypes() {
                axios.get(`/api/planeTypes`).then(response => {
                    this.planeTypes = response.data.planes
                })
            },

            getPowerRectifierTypes() {
                axios.get(`/api/powerRectifierTypes`).then(response => {
                    this.powerRectifierTypes = response.data.powerRectifierTypes
                })
            },

            getPowerRectifierModes() {
                axios.get(`/api/powerRectifierModes`).then(response => {
                    this.powerRectifierModes = response.data.powerRectifierModes
                })
            },

            getPopPowerRectifiersWithoutRoom() {
                axios.get(`/api/powerRectifiersWithoutRoom/${this.room.pop_id}`)
                .then(response => {
                    this.powerRectifiersWithoutRoom = response.data.powerRectifiers
                })
            },

            asignRoom(powerRectifier) {
                if(this.roomDestiny && this.planeType && this.powerRectifiersWithoutRoom.length) {
                    this.$buefy.dialog.confirm({
                        message: `Confirma asignación de la planta rectificadora ${powerRectifier.power_rectifier_type.type} - ${powerRectifier.power_rectifier_type.model} a sala ${ this.roomDestiny.name }, alimentando al plano ${this.planeType.type}?`,
                        type: 'is-link',
                        onConfirm: () => {
                            axios.put(`/api/powerRectifiers/${powerRectifier.id}?room_id=${this.roomDestiny.id}&plane_type_id=${this.planeType.id}`)
                            .then(response => {
                                console.log(response.data)
                                this.getPopPowerRectifiersWithoutRoom()
                                this.$eventBus.$emit('new-power-rectifier')
                            })
                        }
                    })
                }
            },

            newPowerRectifier() {
                if(this.canSave) {
                    let params = {
                        'pop_id': this.roomDestiny.pop_id,
                        'room_id': this.roomDestiny.id,
                        'plane_type_id': this.planeType.id,
                        'power_rectifier_type_id': this.power_rectifier_type.id,
                        'power_rectifier_mode_id': this.power_rectifier_mode.id,
                        'capacity': parseFloat(this.capacity)
                    }

                    axios.post(`/api/powerRectifiers`, params)
                    .then(response => {
                        console.log(response.data)
                        // this.getPopPowerRectifiersWithoutRoom()
                        this.$eventBus.$emit('new-power-rectifier')
                        this.$parent.close()
                    })
                }
            },

            confirmDelete(powerRectifier) {
                this.$buefy.dialog.confirm({
                    message: 'Desea eliminar la planta rectificadora del POP?',
                    type: 'is-danger',
                    onConfirm: () => {
                        axios.delete(`/api/powerRectifiers/${powerRectifier.id}`)
                        .then(response => {
                            this.getPopPowerRectifiersWithoutRoom()
                        })
                    }
                })
            },
        }
    }
</script>
