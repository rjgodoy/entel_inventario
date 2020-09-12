<template>
    <div class="tile box">
        <div class="tile is-vertical">

            <div class="tile">
                <div class="tile is-parent">
                    <div class="tile is-child is-size-5 has-text-weight-bold">{{ room.name }} - {{ room.old_name }}</div>
                </div>
                <div class="tile is-parent">
                    <div class="tile is-child has-text-right">
                        <div class="has-text-weight-light is-size-7">Tipo Alimentación</div>
                        <div v-if="!isEditMode">
                            <div class="has-text-weight-bold is-size-5">{{ planeDelegationType.type }}</div>
                        </div>

                        <div v-if="isEditMode">
                            <div class="is-pulled-right">
                                <b-select placeholder="Select a name" v-model="planeDelegationType" @input="updatePlaneDelegationType(room)">
                                    <option
                                        v-for="option in planeDelegationTypes"
                                        :value="option"
                                        :key="option.id">
                                        {{ option.type }}
                                    </option>
                                </b-select>
                            </div>
                        </div>
                        <div class="field">
                            <a @click="isEditMode=!isEditMode">
                                <b-tag v-if="canEditSurface" :type="isEditMode ? 'is-info' : 'is-link is-outlined'" size="is-small">
                                    {{ isEditMode ? 'Guardar' : 'Editar' }}
                                </b-tag>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <hr/>

            <div class="tile">
                <div class="tile is-parent is-8">
                    <div class="tile box is-shadowless" style="border: solid 0.01rem #aaa">
                        <div class="tile is-vertical" >

                            <div class="columns">
                                <div class="column">
                                    <div class="is-size-6 has-text-weight-bold">PLANOS</div>
                                </div>
                                <div class="column" v-if="canEditPowerRectifiers">
                                    <b-dropdown aria-role="list" class="is-pulled-right" position="is-bottom-left">
                                        <button class="button is-default is-small" slot="trigger" slot-scope="{ active }">
                                            <span><font-awesome-icon :icon="['fas', 'ellipsis-v']" /></span>
                                        </button>
                                        <b-dropdown-item aria-role="listitem" class="is-size-6" @click="isNewPowerRectifierModalActive = true; selectedPlane = null">
                                            <div class="media">
                                                <font-awesome-icon class="media-left" :icon="['fas', 'plus']" />
                                                <div class="media-content">
                                                    <h3>Nuevo Planta Rectificadora</h3>
                                                </div>
                                            </div>
                                        </b-dropdown-item>
                                    </b-dropdown>
                                </div>
                            </div>

                            <div class="tile is-parent" v-if="room.planes.length">
                                <b-field label="CAPACIDAD SALA" label-position="on-border" class="tile has-text-grey-light">

                                    <div class="tile is-parent box is-shadowless" style="border: solid 0.01rem #aaa">
                                        <div class="tile columns is-vcentered">
                                            <div class="column tile is-vertical">

                                                <div class="is-size-6 has-text-weight-bold tile is-parent">PLANOS</div>

                                                <div class="columns tile is-parent" style="padding-top: 0px">
                                                    <div class="column">
                                                        <div class="is-size-7">Total</div>
                                                        <div class="is-size-6 has-text-weight-bold">{{ totalCapacityRoom(room) | numeral('0,0.0') }}</div>
                                                    </div>
                                                    <div class="column">
                                                        <div class="is-size-7">Utilizada</div>
                                                        <div class="is-size-6 has-text-weight-bold">{{ usedCapacityRoom(room) | numeral('0,0.0') }}</div>
                                                    </div>
                                                    <div class="column">
                                                        <div class="is-size-7">Disponible</div>
                                                        <div class="is-size-6 has-text-weight-bold">{{ availableCapacityRoom(room) | numeral('0,0.0') }}</div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div class="column tile tile is-vertical">
                                                <div class="is-size-6 has-text-weight-bold tile is-parent">BATERIAS</div>
                                                <div class="columns tile is-parent" style="padding-top: 0px">
                                                    <div class="column">
                                                        <div class="is-size-7">Total</div>
                                                        <div class="is-size-6 has-text-weight-bold">{{ totalCapacityBatteries(room) | numeral('0,0.0') }}</div>
                                                    </div>
                                                    <div class="column">
                                                        <div class="is-size-7">Utilizada</div>
                                                        <div class="is-size-6 has-text-weight-bold">{{ usedCapacityBatteries(room) | numeral('0,0.0') }}</div>
                                                    </div>
                                                    <div class="column">
                                                        <div class="is-size-7">Disponible</div>
                                                        <div class="is-size-6 has-text-weight-bold">{{ availableCapacityBatteries(room) | numeral('0,0.0') }}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </b-field>
                            </div>

                            <div class="tile is-parent" v-if="room.planes.length">
                                <div class="tile columns is-multiline">
                                    <div class="tile is-parent column is-6" v-for="plane in planes" :key="plane.id">
                                        <div class="tile is-parent box is-shadowless" style="border: solid 0.01rem #aaa">
                                            <div class="tile is-vertical">

                                                <div class="columns">
                                                    <div class="column">
                                                        <div class="is-size-6 has-text-weight-bold">PLANO {{ plane.plane_type.type }}</div>
                                                    </div>
                                                    <div class="column">
                                                        <b-field class="is-pulled-right" grouped>
                                                            <div class="has-text-centered">
                                                                <b-tooltip position="is-bottom" type="is-dark" multilined>
                                                                    <button class="button is-link is-small is-inverted">
                                                                        <font-awesome-icon :icon="['fas', 'info-circle']" />
                                                                    </button>
                                                                    <template v-slot:content>
                                                                        <div class="has-text-left" style="padding: 4px">
                                                                            <div class="is-size-7">Capacidad nominal: {{ nominalCapacity(plane) | numeral('0,0.0') }} <span class="is-size-7">kW</span></div>
                                                                            <div class="is-size-7">Capacidad instalada: {{ installedCapacity(plane) | numeral('0,0.0') }} <span class="is-size-7">kW</span></div>
                                                                            <div class="is-size-7">Potencia real de carga: {{ chargeRealPower(plane) | numeral('0.0') }} <span class="is-size-7">%</span></div>
                                                                            <div class="is-size-7">Corriente recarga: {{ rechargeCurrent(plane) | numeral('0,0.0') }} <span class="is-size-7">A</span></div>
                                                                            <div class="is-size-7">Potencia recarga baterías: {{ batteryRechargePower(plane) | numeral('0,0.0') }} <span class="is-size-7">%</span></div>
                                                                            <div class="is-size-7">Corriente total carga + baterías: {{ totalCurrent(plane) | numeral('0,0.0') }} <span class="is-size-7">A</span></div>
                                                                            <div class="is-size-7">Potencia total carga + baterías: {{ totalPower(plane) | numeral('0,0.0') }} <span class="is-size-7">kW</span></div>
                                                                            <div class="is-size-7">Capacidad real: {{ realPlaneCapacity(plane) | numeral('0,0.0') }} <span class="is-size-7">kW</span></div>
                                                                            <div class="is-size-7">Capacidad disponible: {{ availablePlaneCapacity(plane) | numeral('0,0.0') }} <span class="is-size-7">kW</span></div>
                                                                            <div class="is-size-7">Porcentaje Uso: {{ usePercentPlane(plane) | numeral('0,0.0%') }} <span class="is-size-7"></span></div>

                                                                            <div class="is-size-7">Capacidad baterias: {{ batteryTotalCapacityPlane(plane) | numeral('0,0.0') }} <span class="is-size-7">kW</span></div>
                                                                            <div class="is-size-7">Utilizado baterias: {{ chargeRealPower(plane) | numeral('0,0.0') }} <span class="is-size-7">kW</span></div>
                                                                            <div class="is-size-7">Disponible baterias: {{ availableBatteryCapacityPlane(plane) | numeral('0,0.0') }} <span class="is-size-7">kW</span></div>
                                                                        </div>
                                                                    </template>
                                                                </b-tooltip>
                                                            </div>
                                                            <b-dropdown v-if="canEditPowerRectifiers" aria-role="list" position="is-bottom-left">
                                                                <button class="button is-default is-small" slot="trigger" slot-scope="{ active }">
                                                                    <span><font-awesome-icon :icon="['fas', 'ellipsis-v']" /></span>
                                                                </button>

                                                                <b-dropdown-item aria-role="listitem" class="is-size-6" @click="isEditPlaneModalActive = true; selectedPlane = plane">
                                                                    <div class="media">
                                                                        <font-awesome-icon class="media-left" :icon="['fas', 'pencil-alt']" />
                                                                        <div class="media-content">
                                                                            <h3>Editar Plano</h3>
                                                                        </div>
                                                                    </div>
                                                                </b-dropdown-item>
                                                                <b-dropdown-item aria-role="listitem" class="is-size-6" @click="isNewPowerRectifierModalActive = true; selectedPlane = plane">
                                                                    <div class="media">
                                                                        <font-awesome-icon class="media-left" :icon="['fas', 'plus']" />
                                                                        <div class="media-content">
                                                                            <h3>Nuevo Planta Rectificadora</h3>
                                                                        </div>
                                                                    </div>
                                                                </b-dropdown-item>
                                                                <b-dropdown-item aria-role="listitem" class="is-size-6" @click="isNewBatteryBankModalActive = true; selectedPlane = plane">
                                                                    <div class="media">
                                                                        <font-awesome-icon class="media-left" :icon="['fas', 'plus']" />
                                                                        <div class="media-content">
                                                                            <h3>Nuevo Banco Baterías</h3>
                                                                        </div>
                                                                    </div>
                                                                </b-dropdown-item>
                                                            </b-dropdown>
                                                        </b-field>
                                                    </div>
                                                </div>

                                                <div class="tile is-parent">
                                                    <b-field label="PARAMETROS PLANO" label-position="on-border" class="tile">
                                                        <div class="tile box is-shadowless" style="border: solid 0.01rem #aaa">
                                                            <div class="tile columns is-vcentered">
                                                                <div class="column is-4 has-text-centered">
                                                                    <div class="has-text-weight-semibold is-size-6">
                                                                        {{ plane.float_tension | numeral('0,0.0') }}  
                                                                        <span class="is-size-7">V</span></div>
                                                                    <div class="has-text-weight-normal is-size-7">Tensión de flote</div>
                                                                </div>
                                                                <div class="column is-4 has-text-centered">
                                                                    <div class="has-text-weight-semibold is-size-6">
                                                                        {{ plane.current | numeral('0,0.0') }}  
                                                                        <span class="is-size-7">A</span></div>
                                                                    <div class="has-text-weight-normal is-size-7">Corriente</div>
                                                                </div>
                                                                <div class="column is-4 has-text-centered">
                                                                    <div class="has-text-weight-semibold is-size-6">
                                                                        {{ plane.recharge_factor | numeral('0.0%') }}  
                                                                    </div>
                                                                    <div class="has-text-weight-normal is-size-7">Porcentaje de recarga</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </b-field>
                                                </div>

                                                <div class="tile is-parent" v-if="room.power_rectifiers.length">
                                                    <b-field label="PLANTAS RECTIFICADORAS" label-position="on-border" class="tile">
                                                        <div class="tile is-parent box is-shadowless" style="border: solid 0.05rem black">
                                                            <div class="tile is-parent">
                                                                <div class="columns is-multiline tile">
                                                                    <div class="tile is-child column is-6" 
                                                                        v-for="powerRectifier in room.power_rectifiers" 
                                                                        :key="powerRectifier.id" 
                                                                        
                                                                        v-if="powerRectifierBelongsToPlane(powerRectifier, plane)">
                                                                        <a class="box is-dark is-bold has-text-warning has-background" @click="isPowerRectifierModalActive = true; powerRectifierSelected = powerRectifier">
                                                                            <div class="is-box-background is-transparent">
                                                                                <font-awesome-icon :icon="['fab', 'superpowers']" size="4x" class="is-pulled-right" style="margin-top: -10px; margin-right: 15px"/>
                                                                            </div>
                                                                            
                                                                            <div class="field">
                                                                                <div class="has-text-weight-normal is-size-7">PLANTA</div>
                                                                                <span class="has-text-weight-bold is-size-6">{{ powerRectifier.power_rectifier_type.type }} {{ powerRectifier.power_rectifier_type.model }}
                                                                                </span>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </b-field>
                                                </div>

                                                <!-- <div class="tile is-parent" v-if="canEditPowerRectifiers">
                                                    <div class="tile is-child has-text-centered">
                                                        <b-button class="is-default has-text-weight-light has-text-grey is-size-7">
                                                            <a @click="isNewBatteryBankModalActive = true; selectedPlane = plane">Nuevo Banco de Baterías</a>
                                                        </b-button>
                                                    </div>
                                                </div> -->

                                                <div class="tile is-parent" v-if="plane.battery_banks.length && room.power_rectifiers.length">
                                                    <b-field label="BANCOS BATERIAS" label-position="on-border" class="tile">
                                                        <div class="tile is-parent box is-shadowless" style="border: solid 0.05rem black">
                                                            <div class="tile is-parent">
                                                                <div class="columns is-multiline tile">
                                                                    <div class="tile is-child column is-6" 
                                                                        v-for="batteryBank in plane.battery_banks" 
                                                                        :key="batteryBank.id" 
                                                                        
                                                                        v-if="batteryBankBelongsToPlane(batteryBank, plane)">
                                                                        <a class="box is-dark is-bold has-text-warning has-background" @click="isbatteryBankModalActive = true; batteryBankSelected = batteryBank">
                                                                            <div class="is-box-background is-transparent">
                                                                                <font-awesome-icon :icon="['fas', 'car-battery']" size="4x" class="is-pulled-right" style=""/>
                                                                            </div>
                                                                            <div class="field">
                                                                                <div class="has-text-weight-normal is-size-7">BANCO Nº {{ batteryBank.id }}</div>
                                                                                <span class="has-text-weight-bold is-size-6">{{ batteryBank.battery_bank_brand.brand }} {{ batteryBank.battery_bank_brand.model }}
                                                                                </span>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </b-field>
                                                </div>   
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>

                            <div class="tile is-parent columns is-vcentered" v-if="!hasPlanes(room)">
                                <div class="column">
                                    <div class="has-text-centered has-text-weight-light has-text-grey is-size-7">
                                        <div class="">NO TIENE PLANTAS RECTIFICADORAS</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tile is-parent">
                    <div class="tile box is-shadowless" style="border: solid 0.01rem #aaa">
                        <div class="tile is-vertical">

                            <div class="columns">
                                <div class="column">
                                    <div class="is-size-6 has-text-weight-bold">CLIMA</div>
                                </div>
                                <div class="column" v-if="canEditPowerRectifiers">
                                    <b-dropdown aria-role="list" class="is-pulled-right" position="is-bottom-left">
                                        <button class="button is-default is-small" slot="trigger" slot-scope="{ active }">
                                            <span><font-awesome-icon :icon="['fas', 'ellipsis-v']" /></span>
                                        </button>
                                        <b-dropdown-item aria-role="listitem" class="is-size-6" @click="isNewAirConditionerModalActive = true">
                                            <div class="media">
                                                <font-awesome-icon class="media-left" :icon="['fas', 'pencil-alt']" />
                                                <div class="media-content">
                                                    <h3>Editar Parámetros de Clima</h3>
                                                </div>
                                            </div>
                                        </b-dropdown-item>
                                        <b-dropdown-item aria-role="listitem" class="is-size-6" @click="isNewAirConditionerModalActive = true">
                                            <div class="media">
                                                <font-awesome-icon class="media-left" :icon="['fas', 'plus']" />
                                                <div class="media-content">
                                                    <h3>Nuevo Equipo de Clima</h3>
                                                </div>
                                            </div>
                                        </b-dropdown-item>
                                    </b-dropdown>
                                </div>
                            </div>

                            <div class="tile is-parent" v-if="room.current_air_conditioner_capacity">
                                <b-field label="CAPACIDADES CLIMA" label-position="on-border" class="tile">
                                    <div class="tile box is-shadowless" style="border: solid 0.01rem #aaa">
                                        <div class="tile columns is-vcentered">
                                            <div class="column has-text-centered">
                                                <div class="has-text-weight-semibold is-size-6">{{ totalAirConditionerCapacity | numeral('0,0.0') }}  <span class="is-size-7">kW</span></div>
                                                <div class="has-text-weight-normal is-size-7">Total</div>
                                            </div>
                                            <div class="column has-text-centered">
                                                <div class="has-text-weight-semibold is-size-6">{{ usedAirConditionerCapacity | numeral('0,0.0') }}  <span class="is-size-7">kW</span></div>
                                                <div class="has-text-weight-normal is-size-7">Utilizado</div>
                                            </div>
                                            <div class="column has-text-centered">
                                                <div class="has-text-weight-semibold is-size-6">{{ availableAirConditionerCapacity | numeral('0,0.0') }}  <span class="is-size-7">kW</span></div>
                                                <div class="has-text-weight-normal is-size-7">Disponible</div>
                                            </div>
                                        </div>
                                    </div>
                                </b-field>
                            </div>

                            <div class="tile is-parent columns is-vcentered" v-if="!room.current_air_conditioner_capacity">
                                <div class="column">
                                    <div class="has-text-centered has-text-weight-light has-text-grey is-size-7">
                                        NO TIENE DATOS DE CLIMA
                                    </div>
                                </div>
                            </div>

                            <div class="tile is-parent" v-if="hasAirConditioners(room)">
                                <div class="columns is-multiline tile">
                                    <div class="tile is-child column is-3"
                                        v-for="airConditioner in airConditioners" 
                                        v-if="airConditioner.room_id == room.id" 
                                        :key="airConditioner.id" >
                                        <a class="box" @click="isAirConditionerModalActive = true; airConditionerSelected = airConditioner">
                                            <div class="field">
                                                <div class="has-text-weight-bold is-size-7">AIRE ACONDICIONADO</div>
                                                <span class="has-text-weight-bold is-size-6">Nº {{ airConditioner.id }}</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="tile is-parent columns is-vcentered" v-if="!hasAirConditioners(room)">
                                <div class="column">
                                    <div class="has-text-centered has-text-weight-light has-text-grey is-size-7">
                                        <div class="">NO TIENE EQUIPOS DE CLIMA</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tile">
                <div class="tile is-parent">
                    <Surface 
                        :canEditSurface=canEditSurface
                        :room=room
                        :user=user
                        :totalSurface=totalSurface
                        :usedSurface=usedSurface
                        :availableSurface=availableSurface
                    />
                </div>

                <div class="tile is-parent is-4">
                    <Security 
                        :canEditSecurity=canEditSecurity
                        :room=room
                        :user=user
                    />
                </div>

                <div class="tile is-parent">
                    <Distribution
                        :canEditDistribution=canEditDistribution
                        :room=room
                        :user=user
                        :totalDistributionCapacity=totalDistributionCapacity
                        :usedDistributionCapacity=usedDistributionCapacity
                        :availableDistributionCapacity=availableDistributionCapacity
                    />
                </div>
            </div>
            
        </div>

        <div id="modals">

            <b-modal :active.sync="isPowerRectifierModalActive"
                has-modal-card
                trap-focus
                aria-role="dialog"
                aria-modal>
                <modal-power-rectifier 
                    :powerRectifier="powerRectifierSelected"
                    :canEdit="canEditPowerRectifiers"
                    :user="user"
                    />
            </b-modal>

            <!-- <b-modal :active.sync="isAirConditionerModalActive"
                has-modal-card
                trap-focus
                aria-role="dialog"
                aria-modal>
                <modal-air-conditioner 
                    :airConditioner="airConditionerSelected"
                    :can="canEditAirConditioners"
                    :user="user"
                    />
            </b-modal> -->

            

            <b-modal :active.sync="isNewPowerRectifierModalActive"
                has-modal-card
                trap-focus
                aria-role="dialog"
                aria-modal>
                <modal-new-power-rectifier 
                    :room="room"
                    :rooms="pop.rooms"
                    :selectedPlane=selectedPlane
                    :user="user"
                    />
            </b-modal>

            <b-modal :active.sync="isNewBatteryBankModalActive"
                has-modal-card
                trap-focus
                aria-role="dialog"
                aria-modal>
                <modal-new-battery-bank
                    :room="room"
                    :plane="selectedPlane"
                    :user="user"
                    />
            </b-modal>

            <b-modal :active.sync="isNewAirConditionerModalActive"
                has-modal-card
                trap-focus
                aria-role="dialog"
                aria-modal>
                <modal-new-air-conditioner
                    :canEdit="canEditAirConditioners"
                    :room="room" 
                    :user="user"
                    />
            </b-modal>

            <b-modal :active.sync="isEditPlaneModalActive"
                has-modal-card
                trap-focus
                aria-role="dialog"
                aria-modal>
                <modal-edit-plane 
                    :user="user"
                    :plane="selectedPlane"
                    />
            </b-modal>
        </div>

    </div>
</template>

<script>
    export default {
        components: {
            Surface: () => import(/* webpackChunkName: "chunks/capacity/surface"*/'./Surface'),
            Security: () => import(/* webpackChunkName: "chunks/capacity/surface"*/'./Security'),
            Distribution: () => import(/* webpackChunkName: "chunks/capacity/surface"*/'./Distribution'),
            ModalPowerRectifier: () => import(/* webpackChunkName: "chunks/capacity/modals/powerRectifier"*/'../modals/ModalPowerRectifier'),
            ModalAirConditioner: () => import(/* webpackChunkName: "chunks/capacity/modals/airConditioner"*/'../modals/ModalAirConditioner'),
            ModalNewPowerRectifier: () => import(/* webpackChunkName: "chunks/capacity/modals/new/newPowerRectifier"*/'../modals/new/ModalNewPowerRectifier'),
            ModalNewBatteryBank: () => import(/* webpackChunkName: "chunks/capacity/modals/new/newBatteryBank"*/'../modals/new/ModalNewBatteryBank'),
            ModalNewAirConditioner: () => import(/* webpackChunkName: "chunks/capacity/modals/new/newAirConditioner"*/'../modals/new/ModalNewAirConditioner'),
            ModalEditPlane: () => import(/* webpackChunkName: "chunks/capacity/modals/editPlane"*/'../modals/ModalEditPlane'),
        },

        props : [
            'room',
            'user',
            'pop',

            // 'planes',
            // 'planeTypes',
            // 'airConditioners',
            // 'canEditPowerRectifiers',
            // 'canEditAirConditioners',
            'canEditSurface',
            'canEditDistribution',

            'totalSurface',
            'usedSurface',
            'availableSurface',

            'totalDistributionCapacity',
            'usedDistributionCapacity',
            'availableDistributionCapacity',
        ],

        data() {
            return {
                planes: Array,
                powerRectifiers: Array,
                airConditioners: Array,

                planeSelected: null,
                powerRectifierSelected: null,
                airConditionerSelected: null,

                canEditPowerRectifiers: null,
                canEditAirConditioners: null,

                isPowerRectifierModalActive: false,
                isAirConditionerModalActive: false,
                isDistributionModalActive: false,
                isSurfaceModalActive: false,
                isSecurityModalActive: false,
                isNewPowerRectifierModalActive: false,
                isNewBatteryBankModalActive: false,
                isNewAirConditionerModalActive: false,

                totalPRCapacity: 0,
                usedPRCapacity: 0,
                availablePRCapacity: 0,

                totalBatteryCapacity: 0,
                usedBatteryCapacity: 0,
                availableBatteryCapacity: 0,

                planeDelegationType: this.room.current_room_delegation ? this.room.current_room_delegation.plane_delegation_type : null,
                planeDelegationTypes: [],
                isEditMode: false,

                isEditPlaneModalActive: false ,
                selectedPlane: null
            }
        },

        created() {
            this.$eventBus.$on('new-power-rectifier', this.getPlanes)
            this.$eventBus.$on('new-battery-bank', this.getPlanes)
        },

        mounted() {
            this.getPlaneDelegationTypes()
            this.getAirConditioners()
            this.getPlanes()
        },

        computed: {
            planeType() {
                let type = 'Sin Información'
                Object.keys(this.planeDelegationTypes).forEach(item => {
                   type = this.planeDelegationTypes[item].id == this.planeDelegationType.id && type == 'Sin Información' ? this.planeDelegationTypes[item].type : type
                })
                return type
            },

            totalCapacity() {
                return this.room.current_room_distribution ? this.room.current_room_distribution.total_capacity : 0
            },

            usedCapacity() {
                return this.room.current_room_distribution ? this.room.current_room_distribution.used_capacity : 0
            },

            availableCapacity() {
                return this.totalCapacity - this.usedCapacity
            },

            airConditionerCapacity() {
                return {
                    'totalSurface': this.totalSurface,
                    'usedSurface': this.usedSurface
                }
            },

            totalAirConditionerCapacity() {
                return this.room.current_air_conditioner_capacity ? this.room.current_air_conditioner_capacity.total_capacity : 0
            },

            usedAirConditionerCapacity() {
                return this.room.current_air_conditioner_capacity ? this.room.current_air_conditioner_capacity.used_capacity : 0
            },

            availableAirConditionerCapacity() {
                return this.totalAirConditionerCapacity - this.usedAirConditionerCapacity
            },


            canEditSecurity() {
                return this.canEditAirConditioners || this.canEditPowerRectifiers
            },

            powerRectifierData() {
                return {
                    'totalPRCapacity': this.totalPRCapacity,
                    'usedPRCapacity': this.usedPRCapacity,
                    'availablePRCapacity': this.availablePRCapacity
                }
            },

            batteryData() {
                return {
                    'totalBatteryCapacity': this.totalBatteryCapacity,
                    'usedBatteryCapacity': this.usedBatteryCapacity,
                    'availableBatteryCapacity': this.availableBatteryCapacity
                }
            },

            popAutonomy() {
                return this.pop.current_battery_bank_autonomy ? this.pop.current_battery_bank_autonomy.theoretical : 0
            },
            
        },

        watch: {
            room(val) {
                this.planeDelegationType = val.current_room_delegation ? val.current_room_delegation.plane_delegation_type : null
                this.getPlanes()
                this.getAirConditioners()
            },

            powerRectifierData(value) {
                this.$emit('power-rectifier-data', value);
            },

            batteryData(value) {
                this.$emit('battery-data', value);
            },

            // planeDelegationType(value) {
                
            // },

            isEditMode(val) {
                if (val == false) {
                    this.getPlanes()
                    this.$eventBus.$emit('room-data')
                }
            }
        },

        methods: {
            powerRectifiersInRoom(room) {
                let powerRectifiersInRoom = 0
                Object.keys(room.planes).forEach(element => {
                    let plane = room.planes[element]
                    powerRectifiersInRoom += plane.power_rectifiers.length                        
                })
                // console.log(powerRectifiersInRoom)
                return powerRectifiersInRoom
            },

            getPlaneDelegationTypes() {
                axios.get(`/api/planeDelegationTypes`).then(response => {
                    this.planeDelegationTypes = response.data.planes
                })
            },

            hasPlanes(room) {
                let bool = false
                if(this.planes) {
                    Object.keys(this.planes).forEach(element => {
                        let plane = this.planes[element]
                        Object.keys(plane.rooms).forEach(item => {
                            bool = !bool ? plane.rooms[item].id == room.id : bool
                        })
                    })
                }
                return bool
            },

            powerRectifierBelongsToPlane(powerRectifier, plane) {
                let bool = false
                // if (plane.power_rectifiers) {
                    Object.keys(plane.power_rectifiers).forEach(element => {
                        let pr = plane.power_rectifiers[element]
                        bool = pr.id == powerRectifier.id && !bool ? true : bool
                    })
                // }
                return bool
            },

            batteryBankBelongsToPlane(batteryBank, plane) {
                let bool = false
                // if (plane.battery_banks) {
                    Object.keys(plane.battery_banks).forEach(element => {
                        let bb = plane.battery_banks[element]
                        bool = bb.id == batteryBank.id && !bool ? true : bool
                    })
                // }
                return bool
            },

            hasAirConditioners(room) {
                let bool = false
                if(this.airConditioners) {
                    Object.keys(this.airConditioners).forEach(element => {
                        bool = !bool ? this.airConditioners[element].room_id == room.id : bool
                    })
                }
                return bool
            },

            getPlanes() {
                axios.get(`/api/roomPlanes/${this.room.id}?plane_delegation_type_id=${this.planeDelegationType.id}`)
                .then((response) => {
                    this.planes = response.data.planes
                    this.canEditPowerRectifiers = response.data.can ? response.data.can.update : false
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Empalmes: ' + error);
                });
            },

            getAirConditioners() {
                axios.get(`/api/airConditioners/${this.pop.id}`)
                .then((response) => {
                    // console.log(response.data)
                    this.airConditioners = response.data.airConditioner
                    this.canEditAirConditioners = response.data.can ? response.data.can.update : false
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Empalmes: ' + error);
                });
            }, 

            // Power Rectifiers
            nominalCapacity(plane) {
                let capacity = 0
                Object.keys(plane.power_rectifiers).forEach(element => {
                    capacity += plane.power_rectifiers[element].capacity
                })
                return capacity
            },

            installedCapacity(plane) {
                let capacity = 0
                Object.keys(plane.power_rectifiers).forEach(element => {
                    let pr = plane.power_rectifiers[element]
                    Object.keys(pr.power_rectifier_modules).forEach(item => {
                        capacity += pr.power_rectifier_modules[item].capacity
                    })
                    
                })
                return capacity
            },

            chargeRealPower(plane) {
                return plane.float_tension * plane.current / 1000
            },

            rechargeCurrent(plane) {
                let current = 0
                Object.keys(plane.battery_banks).forEach(item => {
                    current += plane.battery_banks[item].capacity
                })
                return plane.recharge_factor * current
            },

            batteryRechargePower(plane) {
                return this.rechargeCurrent(plane) * plane.float_tension / 1000
            },

            totalCurrent(plane) {
                return plane.current + this.rechargeCurrent(plane)
            },

            totalPower(plane) {
                return this.chargeRealPower(plane) + this.batteryRechargePower(plane)
            },

            realPlaneCapacity(plane) {
                let currentRedundantModules = plane.current_redundant_modules
                let currentRedundantModulesCapacity = currentRedundantModules ? currentRedundantModules.capacity * currentRedundantModules.quantity : 0
                return this.installedCapacity(plane) - currentRedundantModulesCapacity
            },

            availablePlaneCapacity(plane) {
                return this.realPlaneCapacity(plane) - this.totalPower(plane)
            },

            usePercentPlane(plane) {
                return this.totalPower(plane) / this.realPlaneCapacity(plane)
            },


            batteryTotalCapacityPlane(plane) {
                let capacity = 0
                Object.keys(plane.battery_banks).forEach(item => {
                    capacity += plane.battery_banks[item].capacity
                })
                return (((capacity * 48) / 1000) / this.popAutonomy)
            },

            availableBatteryCapacityPlane(plane) {
                return this.batteryTotalCapacityPlane(plane) - this.chargeRealPower(plane)
            },

            totalCapacityRoom(room) {
                let realRoomCapacity = 0
                Object.keys(this.planes).forEach(element => {
                    let plane = this.planes[element]
                    realRoomCapacity += this.realPlaneCapacity(plane)
                })
                this.totalPRCapacity = realRoomCapacity
                return realRoomCapacity
            },

            usedCapacityRoom(room) {
                let usedRoomCapacity = 0
                Object.keys(this.planes).forEach(element => {
                    let plane = this.planes[element]
                    usedRoomCapacity += this.totalPower(plane)
                })
                this.usedPRCapacity = usedRoomCapacity
                return usedRoomCapacity
            },

            availableCapacityRoom(room) {
                let availableRoomCapacity = 10000000
                let availableRoomCapacityA = 10000000
                let availableRoomCapacityB = 10000000
                Object.keys(this.planes).forEach(element => {
                    let plane = this.planes[element]
                    if(room.current_room_delegation) {
                        switch(room.current_room_delegation.plane_delegation_type_id) {
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                                availableRoomCapacity = this.availablePlaneCapacity(plane)
                                break
                            case 5:
                            case 6:
                                if(availableRoomCapacity > this.availablePlaneCapacity(plane)) {
                                    availableRoomCapacity = this.availablePlaneCapacity(plane)
                                }
                                break
                            case 7:
                                if(availableRoomCapacityA > this.availablePlaneCapacity(plane) && (plane.plane_type_id == 1 || plane.plane_type_id == 2)) {
                                    availableRoomCapacityA = this.availablePlaneCapacity(plane)
                                    // i++
                                } 

                                if(availableRoomCapacityB > this.availablePlaneCapacity(plane) && (plane.plane_type_id == 3 || plane.plane_type_id == 4)) {
                                    availableRoomCapacityB = this.availablePlaneCapacity(plane)
                                }
                                availableRoomCapacity = availableRoomCapacityA + availableRoomCapacityB
                                break
                            case 8:
                            default:
                                break
                        }
                    }
                })
                availableRoomCapacity = availableRoomCapacity < 10000000 ? availableRoomCapacity : 0
                this.availablePRCapacity = availableRoomCapacity
                return availableRoomCapacity
            },

            // Batteries
            totalCapacityBatteries(room) {
                let capacity = 0
                Object.keys(this.planes).forEach(element => {
                    let plane = this.planes[element]
                    Object.keys(plane.battery_banks).forEach(item => {
                        capacity += plane.battery_banks[item].capacity
                    })
                })
                let total = (((capacity * 48) / 1000) / this.popAutonomy)
                this.totalBatteryCapacity = total
                return total
            },

            usedCapacityBatteries(room) {
                let used = 0
                Object.keys(room.planes).forEach(element => {
                    let plane = room.planes[element]
                    used += this.chargeRealPower(plane)
                })
                this.usedBatteryCapacity = used
                return used
            },

            availableCapacityBatteries(room) {
                const original = 10000000
                let available = original
                let availableA = original
                let availableB = original
                // Object.keys(this.planes).forEach(element => {
                //     let plane = this.planes[element]
                //     if(available > this.availableBatteryCapacityPlane(plane)) {
                //         available = this.availableBatteryCapacityPlane(plane)
                //     }
                // })

                if(this.room.current_room_delegation) {
                    Object.keys(this.planes).forEach(item => {
                        let plane = this.planes[item]
                        switch(this.room.current_room_delegation.plane_delegation_type_id) {
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                                available = this.availableBatteryCapacityPlane(plane)
                                break
                            case 5:
                            case 6:
                                if(available > this.availableBatteryCapacityPlane(plane)) {
                                    available = this.availableBatteryCapacityPlane(plane)
                                }
                                break
                            case 7:
                                if(availableA > this.availableBatteryCapacityPlane(plane) && (plane.plane_type_id == 1 || plane.plane_type_id == 2)) {
                                    availableA = this.availableBatteryCapacityPlane(plane)
                                } 

                                if(availableB > this.availableBatteryCapacityPlane(plane) && (plane.plane_type_id == 3 || plane.plane_type_id == 4)) {
                                    availableB = this.availableBatteryCapacityPlane(plane)
                                }
                                available = availableA + availableB
                                break
                            case 8:
                            default:
                                break
                        }
                    })

                    switch(this.room.current_room_delegation.plane_delegation_type_id) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                            available = available
                            break
                        case 5:
                        case 6:
                        case 7:
                            available = available * 2
                            break
                        case 8:
                        default:
                            break
                    }
                }
                
                this.availableBatteryCapacity = available
                return available
            },

            updatePlaneDelegationType(room) {
                let params = {
                    'user_id': this.user.id,
                    'plane_delegation_type_id': this.planeDelegationType.id
                }

                axios.put(`/api/roomPlaneDelegationType/${this.room.id}`, params)
                .then(response => {
                    // console.log(response.data)
                })
                // this.$parent.close()
                // this.$eventBus.$emit('junction-measurements-updated');
            },

            reload() {
                // console.log('reloaded')
                this.$eventBus.$emit('change-room')
            }    
        },

        beforeDestroy() {
            this.$eventBus.$off('new-power-rectifier')
            this.$eventBus.$off('new-battery-bank')
        }
    }
</script>
