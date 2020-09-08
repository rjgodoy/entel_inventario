<template>
    <div class="modal-card">
        <header class="modal-card-head has-text-centered" style="background: rgba(255,255,255,0);">
            <p class="modal-card-title has-text-white has-text-weight-bold">SUPERFICIE</p>
        </header>
        <section class="modal-card-body" style="background: rgba(255,255,255,0);">
            <section class="section is-paddingless">
                <div class="box">

                    <div class="level">

                        <div class="level-item">
                            <div class="has-text-centered">
                                <div class="is-size-6">Superficie Total</div>
                                <div v-if="!isEditMode" class="has-text-weight-semibold is-size-5">{{ newTotalSurface | numeral("0,0.0") }} <span class="is-size-6">m2</span></div>
                                <b-input v-if="isEditMode" type="number" class="has-text-weight-bold is-size-5" v-model="newTotalSurface"/>
                            </div>
                        </div>

                        <div class="level-item">
                            <div class="has-text-centered">
                                <div class="is-size-6">Superficie Usada</div>
                                <div v-if="!isEditMode" class="has-text-weight-semibold is-size-5">{{ newUsedSurface | numeral("0,0.0") }} <span class="is-size-6">m2</span></div>
                                <b-input v-if="isEditMode" type="number" class="has-text-weight-bold is-size-5" v-model="newUsedSurface"/>
                            </div>
                        </div>

                        <div class="level-item">
                            <div class="has-text-centered">
                                <div class="is-size-6">Superficie Disponible</div>
                                <div class="has-text-weight-semibold is-size-5">
                                    {{ availableSurface | numeral("0,0.0") }} <span class="is-size-6">m2</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="field has-text-centered" v-if="canEdit">
                        <b-button :type="isEditMode ? 'is-info' : 'is-link is-outlined'" size="is-small" @click="isEditMode=!isEditMode; saveChanges()">
                            <font-awesome-icon :icon="['fas', 'edit']"/>
                            &nbsp;&nbsp;{{ isEditMode ? 'Modo Edición' : 'Editar Superficie de Sala' }}
                        </b-button>
                    </div>



                </div>
            </section>

        </section>
        <!-- <footer class="modal-card-foot" style="background: rgba(0,0,0,0)"> -->
            <!-- <button class="button" type="button" @click="$parent.close()">Cerrar</button> -->
            <!-- <button class="button is-primary">Guardar</button> -->
        <!-- </footer> -->
    </div>
</template>

<script>    
    export default {
        components: {
        },
        props : [
            'canEdit',
            'room',
            'user',
        ],
        data() {
            return {
                newTotalSurface: this.room.current_room_surface ? this.room.current_room_surface.total_surface : 0,
                newUsedSurface: this.room.current_room_surface ? this.room.current_room_surface.used_surface : 0,
                isEditMode: false,
            }
        },

        computed: {
            totalSurface() {
                return this.room.current_room_surface ? this.room.current_room_surface.total_surface : 0
            },

            usedSurface() {
                return this.room.current_room_surface ? this.room.current_room_surface.used_surface : 0
            },

            availableSurface() {
                return this.newTotalSurface - this.newUsedSurface
            },
        },

        watch: {

        },


        created() {
        },

        mounted() {
        },

        methods: {
            saveChanges() {
                if (!this.isEditMode && 
                    this.totalSurface != this.newTotalSurface || 
                    this.usedSurface != this.newUsedSurface) {

                    let params = {
                        'user_id': this.user.id,
                        'total_surface': parseFloat(this.newTotalSurface),
                        'used_surface': parseFloat(this.newUsedSurface)
                    }
                    // console.log(params)
                    axios.post(`/api/createRoomSurface/${this.room.id}`, params).then(response => {
                        console.log(response.data)
                        this.$eventBus.$emit('room-surface');
                    })
                }
            }
        }
    }
</script>
