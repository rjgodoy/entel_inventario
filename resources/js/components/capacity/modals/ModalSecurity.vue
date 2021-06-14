<template>
    <div class="modal-card">
        <header class="modal-card-head has-text-centered" style="background: rgba(255,255,255,0);">
            <p class="modal-card-title has-text-white has-text-weight-bold">EQUIPOS SEGURIDAD</p>
        </header>
        <section class="modal-card-body" style="background: rgba(255,255,255,0);">
            <section class="section is-paddingless">
                <div class="box">

                    <b-field label="EQUIPOS SEGURIDAD" label-position="on-border" class="tile">
                        <div class="tile box is-shadowless" style="border: solid 0.1rem #cccccc">

                            <div class="tile is-parent is-vertical" v-if="room.current_fire_detection">
                                <b-field label="INCENDIO" label-position="on-border" class="tile">
                                    <div class="tile box is-child is-shadowless" style="border: solid 0.1rem #cccccc">
                                        <div class="level">
                                            <div class="level-item">
                                                <div v-if="!isEditMode" class="">
                                                    <div class="has-text-weight-bold is-size-6">{{ detectionType }}</div>
                                                    <div class="has-text-weight-normal is-size-7">Detección</div>
                                                </div>
                                                <div v-if="isEditMode" class="">
                                                    <b-select placeholder="Selecciona..." v-model="fire_detection_type_id">
                                                        <option
                                                            v-for="option in fireDetectionTypes"
                                                            :value="option.id"
                                                            :key="option.id">
                                                            {{ option.type }}
                                                        </option>
                                                    </b-select>
                                                </div>
                                            </div>
                                            <div class="level-item">
                                                <div v-if="!isEditMode" class="">
                                                    <div class="has-text-weight-bold is-size-6">{{ extinctionType }}</div>
                                                    <div class="has-text-weight-normal is-size-7">Extinción</div>
                                                </div>
                                                <div v-if="isEditMode" class="">
                                                    <b-select placeholder="Selecciona..." v-model="fire_extinction_type_id">
                                                        <option
                                                            v-for="option in fireExtinctionTypes"
                                                            :value="option.id"
                                                            :key="option.id">
                                                            {{ option.type }}
                                                        </option>
                                                    </b-select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </b-field>
                            </div>

                            <div class="tile columns is-vcentered" v-if="!room.current_fire_detection">
                                <div class="column">
                                    <div v-if="!isEditMode" class="has-text-centered has-text-weight-light has-text-grey is-size-7">
                                        NO TIENE EQUIPOS DE SEGURIDAD
                                    </div>
                                    <div class="has-text-centered">
                                        <b-button v-if="isEditMode" class="has-text-weight-light" type="is-link" size="is-small" @click="addNew=!addNew">
                                            <font-awesome-icon :icon="['fas', 'edit']"/>
                                            Agregar datos
                                        </b-button>
                                    </div>

                                    <div v-if="isEditMode && addNew" class="has-text-centered">
                                        <div class="block">
                                            <div class="has-text-weight-light is-size-7">Detección</div>
                                            <div v-if="!isEditMode" class="has-text-weight-bold is-size-5">
                                                {{ detectionType }}
                                            </div>
                                            
                                            <div v-if="isEditMode" class="">
                                                <b-select placeholder="Selecciona..." v-model="fire_detection_type_id">
                                                    <option
                                                        v-for="option in fireDetectionTypes"
                                                        :value="option.id"
                                                        :key="option.id">
                                                        {{ option.type }}
                                                    </option>
                                                </b-select>
                                            </div>
                                        </div>

                                        <div class="block" :style="isEditMode ? 'padding-top: 24px;' : ''">
                                            <div class="has-text-weight-light is-size-7">Extinción</div>
                                            <div v-if="!isEditMode" class="has-text-weight-bold is-size-5">
                                                {{ extinctionType }}
                                            </div>
                                            
                                            <div v-if="isEditMode" class="">
                                                <b-select placeholder="Selecciona..." v-model="fire_extinction_type_id">
                                                    <option
                                                        v-for="option in fireExtinctionTypes"
                                                        :value="option.id"
                                                        :key="option.id">
                                                        {{ option.type }}
                                                    </option>
                                                </b-select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </b-field>

                    <div class="field has-text-centered" v-if="canEdit">
                        <b-button :type="isEditMode ? 'is-info' : 'is-link is-outlined'" size="is-small" @click="isEditMode=!isEditMode; saveChanges()">
                            <font-awesome-icon :icon="['fas', 'edit']"/>
                            &nbsp;&nbsp;{{ isEditMode ? 'Modo Edición' : 'Editar Seguridad de Sala' }}
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
                fireDetectionTypes: [],
                fireExtinctionTypes: [],

                isEditMode: false,
                addNew: false,

                fire_detection_type_id: this.room.current_fire_detection ? this.room.current_fire_detection.fire_detection_type_id : null,
                fire_extinction_type_id: this.room.current_fire_detection ? this.room.current_fire_detection.fire_extinction_type_id : null,

            }
        },

        computed: {
            fireDetection() {
                return this.room.current_fire_detection
            },

            detectionType() {
                return this.fireDetection && this.fireDetection.fire_detection_type ? this.fireDetection.fire_detection_type.type : 'No tiene'
            },

            extinctionType() {
                return this.fireDetection && this.fireDetection.fire_extinction_type ? this.fireDetection.fire_extinction_type.type : 'No tiene'
            }
        },

        mounted() {
            this.getDistributionTypes()
            this.getExtinctionTypes()
        },

        methods: {
            getDistributionTypes() {
                axios.get(`/api/fireDetectionTypes`).then(response => {
                    console.log(response.data.fireDetectionTypes)
                    this.fireDetectionTypes = response.data.fireDetectionTypes
                    // if(response.data.fireDetectionTypes) {
                    //     this.fireDetectionTypes.forEach(item => {
                    //         if(item.id == this.fire_detection_type_id) {
                    //             this.detectionType = item.type
                    //         }
                    //     }) 
                    // }
                })
            },

            getExtinctionTypes() {
                axios.get(`/api/fireExtinctionTypes`).then(response => {
                    this.fireExtinctionTypes = response.data.fireExtinctionTypes
                    // if(response.data.fireExtinctionTypes) {
                    //     this.fireExtinctionTypes.forEach(item => {
                    //         if(item.id == this.fire_extinction_type_id) {
                    //             this.extinctionType = item.type
                    //         }
                    //     })
                    // } 
                })
            },

            saveChanges() {
                if (!this.isEditMode && 
                    (!this.fireDetection || 
                        (this.fireDetection && this.fireDetection.fire_detection_type_id != this.fire_detection_type_id) || 
                        (this.fireDetection && this.fireDetection.fire_extinction_type_id != this.fire_extinction_type_id))
                    ) {

                    let params = {
                        'user_id': this.user.id,
                        'fire_detection_type_id': this.fire_detection_type_id,
                        'fire_extinction_type_id': this.fire_extinction_type_id,
                        'room_id': this.room.id
                    }
                    axios.post(`/api/fireDetections`, params).then(response => {
                        console.log(response.data)
                        this.$eventBus.$emit('room-security');
                    })
                }
            }
        }
    }
</script>
