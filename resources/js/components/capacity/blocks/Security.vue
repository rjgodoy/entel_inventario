<template>
    <div class="tile">
        <b-field label="EQUIPOS SEGURIDAD" label-position="on-border" class="tile">
            <div v-if="!canEditSecurity" class="tile box is-shadowless has-background" style="border: solid 0.01rem #aaa">
                <div class="is-box-background is-transparent-light">
                    <font-awesome-icon :icon="['fas', 'shield-alt']" size="10x" class="is-pulled-right" style=""/>
                </div>

                <div class="tile is-parent is-vertical" v-if="room.current_fire_detection">
                    <b-field label="INCENDIO" label-position="on-border" class="has-text-grey-light">
                        <div class="box is-shadowless has-background has-text-centered" style="border: solid 0.01rem #aaa; background-color: rgba(255, 255, 255, 0.8)">
                            <!-- <div class="is-box-background is-transparent-light">
                                <font-awesome-icon :icon="['fas', 'fire']" size="4x" class="is-pulled-right" style=""/>
                            </div> -->
                            <div class="columns is-vcentered">
                                <div class="column">
                                    <div class="">
                                        <div class="has-text-weight-bold is-size-6">{{ detectionType }}</div>
                                        <div class="has-text-weight-normal is-size-7">Detección</div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="">
                                        <div class="has-text-weight-bold is-size-6">{{ extinctionType }}</div>
                                        <div class="has-text-weight-normal is-size-7">Extinción</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-field>
                </div>

                <div class="tile columns is-vcentered" v-if="!room.current_fire_detection">
                    <div class="column">
                        <div class="has-text-centered has-text-weight-light has-text-grey is-size-7">
                            NO TIENE EQUIPOS DE SEGURIDAD
                        </div>
                    </div>
                </div>

            </div>
            <a v-if="canEditSecurity" @click="isSecurityModalActive = true" class="tile box is-shadowless has-background" style="border: solid 0.01rem #aaa">
                <div class="is-box-background is-transparent-light">
                    <font-awesome-icon :icon="['fas', 'shield-alt']" size="10x" class="is-pulled-right" style=""/>
                </div>
                <div class="tile is-parent is-vertical" v-if="room.current_fire_detection">
                    <b-field label="INCENDIO" label-position="on-border" class="has-text-grey-light">
                        <div class="box is-shadowless has-background has-text-centered" style="border: solid 0.01rem #aaa; background-color: rgba(255, 255, 255, 0.8)">
                            <!-- <div class="is-box-background is-transparent-light">
                                <font-awesome-icon :icon="['fas', 'fire']" size="5x" class="is-pulled-right" style="padding-right: 16px; margin-top: -10px"/>
                            </div> -->
                            <div class="columns is-vcentered">
                                <div class="column">
                                    <div class="">
                                        <div class="has-text-weight-bold is-size-6">{{ detectionType }}</div>
                                        <div class="has-text-weight-normal is-size-7">Detección</div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="">
                                        <div class="has-text-weight-bold is-size-6">{{ extinctionType }}</div>
                                        <div class="has-text-weight-normal is-size-7">Extinción</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-field>
                </div>

                <div class="tile columns is-vcentered" v-if="!room.current_fire_detection">
                    <div class="column">
                        <div class="has-text-centered has-text-weight-light has-text-grey is-size-7">
                            NO TIENE EQUIPOS DE SEGURIDAD
                        </div>
                    </div>
                </div>
            </a>
        </b-field>
        <b-modal :active.sync="isSecurityModalActive"
            has-modal-card
            trap-focus
            aria-role="dialog"
            aria-modal>
            <modal-security
                :room="room"
                :user="user"
                :canEdit="canEditSecurity"
                />
        </b-modal>
    </div>
</template>

<script>
    export default {
        components: {
            ModalSecurity: () => import(/* webpackChunkName: "chunks/capacity/modals/surface"*/'../modals/ModalSecurity'),
        },

        props : [
            'canEditSecurity',
            'user',
            'room',
        ],

        data() {
            return {
                isSecurityModalActive: false
            }
        },

        computed: {
            detectionType() {
                return this.room.current_fire_detection ? this.room.current_fire_detection.fire_detection_type.type : 'No tiene'
            },

            extinctionType() {
                return this.room.current_fire_detection && this.room.current_fire_detection.fire_extinction_type ? this.room.current_fire_detection.fire_extinction_type.type : 'No tiene'
            },
        }
    }
</script>
