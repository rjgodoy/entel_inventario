<template>
    <div class="modal-card">
        <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
                <p class="modal-card-title">Nueva Sala</p>
            </header>

            <section class="modal-card-body">
                <div class="columns">
                    <div class="column">
                        <b-field label="Nombre">
                            <b-input
                                v-model="name"
                                placeholder="Nombre de sala"
                                required>
                            </b-input>
                        </b-field>
                    </div>
                    <div class="column">
                        <b-field label="Alias">
                            <b-input
                                v-model="alias"
                                placeholder="Alias de la sala (opcional)">
                            </b-input>
                        </b-field>
                    </div>
                </div>
            </section>

            <footer class="modal-card-foot">
                <button class="button" type="button" @click="$parent.close()">Cerrar</button>
                <button class="button is-link" :disabled="!toSave" @click="newRoom()">Guardar</button>
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
                name: '',
                alias: ''
            }
        },

        computed: {
            toSave() {
                return this.name.length
            }
        },

        methods: {
            newRoom() {
                    let params = {
                        'pop_id': this.pop.id,
                        'name': this.name,
                        'alias': this.alias,
                    }
                    axios.post(`/api/rooms`, params)
                    .then(response => {
                        console.log(response.data)
                        this.$eventBus.$emit('new-room')
                        this.$parent.close()
                    })
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
