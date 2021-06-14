<template>
    <div class="modal-card">
        <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
                <p class="modal-card-title">Nuevo Rol</p>
            </header>

            <section class="modal-card-body">
                <div class="columns">
                    <div class="column">
                        <b-field label="Nombre">
                            <b-input
                                v-model="name"
                                placeholder="Nombre de rol"
                                required>
                            </b-input>
                        </b-field>
                        <div class="is-size-7">Ej: Ingeniero Sistemas</div>
                    </div>
                    <div class="column">
                        <b-field label="Alias">
                            <b-input
                                v-model="slug"
                                placeholder="No debe contener espacios"
                                required>
                            </b-input>
                        </b-field>
                        <div class="is-size-7 mt-0">No debe contener espacios - Ej: ingeniero-sistemas</div>
                    </div>
                </div>
            </section>

            <footer class="modal-card-foot">
                <button class="button" type="button" @click="$parent.close()">Cerrar</button>
                <button class="button is-link" :disabled="!toSave" @click="newRole()">Guardar</button>
            </footer>
        </div>
    </div>
</template>

<script>    

    export default {
        data() {
            return {
                name: '',
                slug: ''
            }
        },

        computed: {
            toSave() {
                return this.name.length && this.slug.length && this.slug.indexOf(' ') === -1
            }
        },

        methods: {
            newRole() {
                    let params = {
                        'name': this.name,
                        'slug': this.slug,
                    }
                    axios.post(`/api/roles`, params)
                    .then(response => {
                        this.$eventBus.$emit('new-role', response.data)
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
