<template>
    <div class="modal-card">
        <header class="modal-card-head has-text-centered" style="background: rgba(255,255,255,0);">
            <p class="modal-card-title has-text-white has-text-weight-bold">CLIMA</p>
        </header>
        <section class="modal-card-body" style="background: rgba(255,255,255,0);">
            <section class="section is-paddingless">
                <div class="box">

                    <div class="level">

                        <div class="level-item">
                            <div class="has-text-centered">
                                <div class="is-size-6">Capacidad Total</div>
                                <div v-if="!isEditMode" class="has-text-weight-semibold is-size-5">{{ newTotalCapacity | numeral("0,0.0") }} <span class="is-size-6">kW</span></div>
                                <b-input v-if="isEditMode" type="number" class="has-text-weight-bold is-size-5" v-model="newTotalCapacity"/>
                            </div>
                        </div>

                        <div class="level-item">
                            <div class="has-text-centered">
                                <div class="is-size-6">Capacidad Utilizada</div>
                                <div v-if="!isEditMode" class="has-text-weight-semibold is-size-5">{{ newUsedCapacity | numeral("0,0.0") }} <span class="is-size-6">kW</span></div>
                                <b-input v-if="isEditMode" type="number" class="has-text-weight-bold is-size-5" v-model="newUsedCapacity"/>
                            </div>
                        </div>

                        <div class="level-item">
                            <div class="has-text-centered">
                                <div class="is-size-6">Capacidad Disponible</div>
                                <div class="has-text-weight-semibold is-size-5">
                                    {{ availableCapacity | numeral("0,0.0") }} <span class="is-size-6">kW</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="field has-text-centered" v-if="canEdit">
                        <b-button :type="isEditMode ? 'is-info' : 'is-link is-outlined'" size="is-small" @click="isEditMode=!isEditMode; saveChanges()">
                            <font-awesome-icon :icon="['fas', 'edit']"/>
                            &nbsp;&nbsp;{{ isEditMode ? 'Modo Edición' : 'Editar Capacidad de Sala' }}
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
        props : [
            'canEdit',
            'room',
            'user',
        ],

        mounted() {
            console.log(this.room.current_air_conditioner_capacity)
        },

        data() {
            return {
                isEditMode: false,
                newTotalCapacity: this.room.current_air_conditioner_capacity ? this.room.current_air_conditioner_capacity.total_capacity : 0,
                newUsedCapacity: this.room.current_air_conditioner_capacity ? this.room.current_air_conditioner_capacity.used_capacity : 0,
                
            }
        },

        computed: {
            totalCapacity() {
                return this.room.current_air_conditioner_capacity ? this.room.current_air_conditioner_capacity.total_capacity : 0
            },

            usedCapacity() {
                return this.room.current_air_conditioner_capacity ? this.room.current_air_conditioner_capacity.used_capacity : 0
            },

            availableCapacity() {
                return this.newTotalCapacity - this.newUsedCapacity
            },
        },

        methods: {
            saveChanges() {
                if (!this.isEditMode && 
                    this.totalCapacity != this.newTotalCapacity || 
                    this.usedCapacity != this.newUsedCapacity) {

                    let params = {
                        'user_id': this.user.id,
                        'total_capacity': parseFloat(this.newTotalCapacity),
                        'used_capacity': parseFloat(this.newUsedCapacity),
                        'room_id': this.room.id,
                        'pop_id': this.room.pop_id
                    }
                    // console.log(params)
                    axios.post(`/api/airConditionerCapacities`, params).then(response => {
                        console.log(response.data)
                        this.$eventBus.$emit('reload-data');
                    })
                }
            }
        }
    }
</script>
