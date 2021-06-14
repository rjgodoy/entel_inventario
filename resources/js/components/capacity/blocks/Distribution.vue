<template>
    <div class="tile">
        <b-field label="DISTRIBUCION" label-position="on-border" class="tile">
            <div v-if="!canEditDistribution" class="tile box is-shadowless has-background" style="border: solid 0.01rem #aaa">
                <div class="is-box-background is-transparent-light">
                    <font-awesome-icon :icon="['fas', 'random']" size="10x" class="is-pulled-right" style=""/>
                </div>
                <div class="tile is-parent is-vertical" v-if="room.current_room_distribution">
                    <b-field label="CAPACIDADES" label-position="on-border" class="has-text-grey-light">
                        <div class="box is-shadowless has-background has-text-centered" style="border: solid 0.01rem #aaa; background-color: rgba(255, 255, 255, 0.8)">
                            <!-- <div class="is-box-background is-transparent-light">
                                <font-awesome-icon :icon="['fas', 'shield-alt']" size="4x" class="is-pulled-right" style=""/>
                            </div> -->
                            <div class="columns is-vcentered">
                                <div class="column">
                                    <div class="">
                                        <div class="has-text-weight-bold is-size-6">{{ totalDistributionCapacity | numeral("0,0.0") }} <span class="is-size-7">kW</span></div>
                                        <div class="has-text-weight-normal is-size-7">Capacidad Total</div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="">
                                        <div class="has-text-weight-bold is-size-6">{{ usedDistributionCapacity | numeral("0,0.0") }} <span class="is-size-7">kW</span></div>
                                        <div class="has-text-weight-normal is-size-7">Capacidad Utilizado</div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="">
                                        <div class="has-text-weight-bold is-size-6">{{ availableDistributionCapacity | numeral("0,0.0") }} <span class="is-size-7">kW</span></div>
                                        <div class="has-text-weight-normal is-size-7">Capacidad Disponible</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-field>
                </div>
                <div class="tile columns is-vcentered" v-if="!room.current_room_distribution">
                    <div class="column">
                        <div class="has-text-centered has-text-weight-light has-text-grey is-size-7">
                            NO TIENE DATOS DE DISTRIBUCION
                        </div>
                    </div>
                </div>
            </div>
            <a v-if="canEditDistribution" 
                @click="isDistributionModalActive = true"
                class="tile box is-shadowless has-background" style="border: solid 0.01rem #aaa">
                <div class="is-box-background is-transparent-light">
                    <font-awesome-icon :icon="['fas', 'random']" size="10x" class="is-pulled-right" style=""/>
                </div>
                <div class="tile is-parent is-vertical" v-if="room.current_room_distribution">
                    <b-field label="CAPACIDADES" label-position="on-border" class="has-text-grey-light">
                        <div class="box is-shadowless has-background has-text-centered" style="border: solid 0.01rem #aaa; background-color: rgba(255, 255, 255, 0.8)">
                            <!-- <div class="is-box-background is-transparent-light">
                                <font-awesome-icon :icon="['fas', 'shield-alt']" size="4x" class="is-pulled-right" style=""/>
                            </div> -->
                            <div class="columns is-vcentered">
                                <div class="column">
                                    <div class="">
                                        <div class="has-text-weight-bold is-size-6">{{ totalDistributionCapacity | numeral("0,0.0") }} <span class="is-size-7">kW</span></div>
                                        <div class="has-text-weight-normal is-size-7">Capacidad Total</div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="">
                                        <div class="has-text-weight-bold is-size-6">{{ usedDistributionCapacity | numeral("0,0.0") }} <span class="is-size-7">kW</span></div>
                                        <div class="has-text-weight-normal is-size-7">Capacidad Utilizado</div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="">
                                        <div class="has-text-weight-bold is-size-6">{{ availableDistributionCapacity | numeral("0,0.0") }} <span class="is-size-7">kW</span></div>
                                        <div class="has-text-weight-normal is-size-7">Capacidad Disponible</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-field>
                </div>
                <div class="tile columns is-vcentered" v-if="!room.current_room_distribution">
                    <div class="column">
                        <div class="has-text-centered has-text-weight-light has-text-grey is-size-7">
                            NO TIENE DATOS DE DISTRIBUCION
                        </div>
                    </div>
                </div>
            </a>
        </b-field>
        <b-modal :active.sync="isDistributionModalActive"
            has-modal-card
            trap-focus
            aria-role="dialog"
            aria-modal>
            <modal-distribution
                :room="room"
                :user="user"
                :canEdit="canEditDistribution"
                />
        </b-modal>
    </div>
</template>

<script>
    export default {
        components: {
            ModalDistribution: () => import(/* webpackChunkName: "chunks/capacity/modals/distribution"*/'../modals/ModalDistribution'),
        },

        props : [
            'canEditDistribution',
            'user',
            'room',
            'totalDistributionCapacity',
            'usedDistributionCapacity',
            'availableDistributionCapacity',
        ],

        data() {
            return {
                isDistributionModalActive: false
            }
        },
    }
</script>
