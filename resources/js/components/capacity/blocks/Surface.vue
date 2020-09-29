<template>
    <div class="tile">
        <b-field label="ESPACIO" label-position="on-border" class="tile">
            <div v-if="!canEditSurface" class="tile box is-shadowless has-background" style="border: solid 0.01rem #aaa">
                <div class="is-box-background is-transparent-light">
                    <font-awesome-icon :icon="['fas', 'home']" size="10x" class="is-pulled-right" style=""/>
                </div>
                <div class="tile is-parent is-vertical" v-if="room.current_room_surface">
                    <b-field label="PARAMETROS" label-position="on-border" class="has-text-grey-light">
                        <div class="box is-shadowless has-background has-text-centered" style="border: solid 0.01rem #aaa; background-color: rgba(255, 255, 255, 0.8)">
                            <!-- <div class="is-box-background is-transparent-light">
                                <font-awesome-icon :icon="['fas', 'shield-alt']" size="4x" class="is-pulled-right" style=""/>
                            </div> -->
                            <div class="columns is-vcentered">
                                <div class="column">
                                    <div class="">
                                        <div class="has-text-weight-bold is-size-6">{{ totalSurface | numeral("0,0.0") }} <span class="is-size-7">kW</span></div>
                                        <div class="has-text-weight-normal is-size-7">Espacio Total</div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="">
                                        <div class="has-text-weight-bold is-size-6">{{ usedSurface | numeral("0,0.0") }} <span class="is-size-7">kW</span></div>
                                        <div class="has-text-weight-normal is-size-7">Espacio Utilizado</div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="">
                                        <div class="has-text-weight-bold is-size-6">{{ availableSurface | numeral("0,0.0") }} <span class="is-size-7">kW</span></div>
                                        <div class="has-text-weight-normal is-size-7">Espacio Disponible</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-field>
                </div>
                <div class="tile columns is-vcentered" v-if="!room.current_room_surface">
                    <div class="column">
                        <div class="has-text-centered has-text-weight-light has-text-grey is-size-7">
                            NO TIENE DATOS DE ESPACIO
                        </div>
                    </div>
                </div>
            </div>

            <a v-if="canEditSurface" @click="isSurfaceModalActive = true" class="tile box is-shadowless has-background" style="border: solid 0.01rem #aaa">
                <div class="is-box-background is-transparent-light">
                    <font-awesome-icon :icon="['fas', 'home']" size="10x" class="is-pulled-right" style=""/>
                </div>
                <div class="tile is-parent is-vertical" v-if="room.current_room_surface">

                    <b-field label="PARAMETROS" label-position="on-border" class="has-text-grey-light">
                        <div class="box is-shadowless has-background has-text-centered" style="border: solid 0.01rem #aaa; background-color: rgba(255, 255, 255, 0.8)">
                            <!-- <div class="is-box-background is-transparent-light">
                                <font-awesome-icon :icon="['fas', 'shield-alt']" size="4x" class="is-pulled-right" style=""/>
                            </div> -->
                            <div class="columns is-vcentered">
                                <div class="column">
                                    <div class="">
                                        <div class="has-text-weight-bold is-size-6">{{ totalSurface | numeral("0,0.0") }} <span class="is-size-7">kW</span></div>
                                        <div class="has-text-weight-normal is-size-7">Espacio Total</div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="">
                                        <div class="has-text-weight-bold is-size-6">{{ usedSurface | numeral("0,0.0") }} <span class="is-size-7">kW</span></div>
                                        <div class="has-text-weight-normal is-size-7">Espacio Utilizado</div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="">
                                        <div class="has-text-weight-bold is-size-6">{{ availableSurface | numeral("0,0.0") }} <span class="is-size-7">kW</span></div>
                                        <div class="has-text-weight-normal is-size-7">Espacio Disponible</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-field>

                </div>
                <div class="tile columns is-vcentered" v-if="!room.current_room_surface">
                    <div class="column">
                        <div class="has-text-centered has-text-weight-light has-text-grey is-size-7">
                            NO TIENE DATOS DE ESPACIO
                        </div>
                    </div>
                </div>
            </a>
        </b-field>
        <b-modal :active.sync="isSurfaceModalActive"
            has-modal-card
            trap-focus
            aria-role="dialog"
            aria-modal>
            <modal-surface
                :room="room"
                :user="user"
                :canEdit="canEditSurface"
                />
        </b-modal>
    </div>
</template>

<script>
    export default {
        components: {
            ModalSurface: () => import(/* webpackChunkName: "chunks/capacity/modals/surface"*/'../modals/ModalSurface'),
        },

        props : [
            'canEditSurface',
            'user',
            'room',
            'totalSurface',
            'usedSurface',
            'availableSurface',
        ],

        data() {
            return {
                isSurfaceModalActive: false
            }
        },
    }
</script>
