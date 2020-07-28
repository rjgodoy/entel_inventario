<template>
    <div class="modal-card" style="width: 800px;">
        <form action="">
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

                    <b-field label="Email">
                        <b-input
                            type="email"
                            :value="room.name"
                            placeholder="Your email"
                            required>
                        </b-input>
                    </b-field>

                    <b-field label="Password">
                        <b-input
                            type="password"
                            :value="room.id"
                            password-reveal
                            placeholder="Your password"
                            required>
                        </b-input>
                    </b-field>

                    <b-checkbox>Remember me</b-checkbox>
                </section>
                <footer class="modal-card-foot">
                    <button class="button" type="button" @click="$parent.close()">Close</button>
                    <button class="button is-primary">Login</button>
                </footer>
            </div>
        </form>
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
                roomDestiny: null,
                planeType: null
            }
        },

        watch: {

        },

        created() {
        },

        mounted() {
            this.getPlaneTypes()
            this.getPopPowerRectifiersWithoutRoom()
        },

        methods: {
            getPlaneTypes() {
                axios.get(`/api/planeTypes?api_token=${this.user.api_token}`).then(response => {
                    this.planeTypes = response.data.planes
                })
            },

            getPopPowerRectifiersWithoutRoom() {
                let params = {
                    'api_token': this.user.api_token
                }
                axios.get(`/api/powerRectifiersWithoutRoom/${this.room.pop_id}`, {params})
                .then(response => {
                    this.powerRectifiersWithoutRoom = response.data.powerRectifiers
                })
            },

            asignRoom(powerRectifier) {
                if(this.roomDestiny && this.planeType) {
                    this.$buefy.dialog.confirm({
                        message: `Confirma asignación de la planta rectificadora ${powerRectifier.power_rectifier_type.type} - ${powerRectifier.power_rectifier_type.model} a sala ${ this.roomDestiny.name }, alimentando al plano ${this.planeType.type}?`,
                        type: 'is-link',
                        onConfirm: () => {
                            axios.put(`/api/powerRectifiers/${powerRectifier.id}?api_token=${this.user.api_token}&room_id=${this.roomDestiny.id}&plane_type_id=${this.planeType.id}`)
                            .then(response => {
                                console.log(response.data)
                                this.getPopPowerRectifiersWithoutRoom()
                                this.$eventBus.$emit('new-power-rectifier')
                            })
                        }
                    })
                }
            },

            confirmDelete(powerRectifier) {
                this.$buefy.dialog.confirm({
                    message: 'Desea eliminar la planta rectificadora del POP?',
                    type: 'is-danger',
                    onConfirm: () => {
                        axios.delete(`/api/powerRectifiers/${powerRectifier.id}?api_token=${this.user.api_token}`)
                        .then(response => {
                            this.getPopPowerRectifiersWithoutRoom()
                        })
                    }
                })
            },
        }
    }
</script>
