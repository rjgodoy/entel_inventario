<template>
    <!-- <div class="tile is-child box" :class="isRoomSelected ? 'is-shadowless has-background-white-bis shadow-dark' : ''" :style="isRoomSelected ? '' : 'border: solid 0.5px black;'"> -->
    <div class="tile is-child box" :class="isRoomSelected ? 'is-shadowless has-background-white-bis shadow-dark' : ''">
        <div class="tile is-vertical">

            <div class="tile">
                <div class="tile is-parent">
                    <div class="tile is-child is-size-5 has-text-weight-bold">{{ sala.name }} - {{ sala.old_name }}</div>
                </div>
                <div class="tile is-parent">
                    <div class="tile is-child has-text-right">
                        <div class="has-text-weight-light is-size-7">Tipo Alimentación</div>
                        <div v-if="!isEditMode">
                            <div class="has-text-weight-bold is-size-5">{{ planeType }}</div>
                        </div>

                        <div v-if="isEditMode">
                            <div class="is-pulled-right">
                                <b-select placeholder="Select a name" v-model="planeDelegationTypeId" @input="updatePlaneDelegationType(sala)">
                                    <option
                                        v-for="option in planeDelegationTypes"
                                        :value="option.id"
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

                <!-- <router-link class="is-size-5" :to="'/capacity/'+sala.id" @click.native="reload"
                    :class="room.id && sala.id != room.id ? 'has-text-grey-light has-text-weight-light' : 'has-text-weight-bold'">
                    {{ sala.name }} - {{ sala.old_name }}
                </router-link> -->
            </div>

            <hr/>

            <div class="tile">
                <div class="tile is-parent is-8">
                    <div class="tile box is-shadowless" style="border: solid 0.1rem #cccccc">
                        <div class="tile is-vertical" >

                            <div class="columns">
                                <div class="column">
                                    <div class="is-size-6 has-text-weight-bold">PLANOS</div>
                                </div>
                                <div class="column">
                                    <a @click="isNewPowerRectifierModalActive = true">
                                        <b-tag class="is-pulled-right is-link has-text-weight-light is-size-7">
                                            <font-awesome-icon :icon="['fas', 'plus']" />
                                        </b-tag>
                                    </a>
                                </div>
                            </div>

                            <div class="tile is-parent" v-if="sala.planes.length">
                                <b-field label="CAPACIDAD SALA" label-position="on-border" class="tile" :custom-class="!isCurrentSala(sala) ? 'has-text-grey-light' : ''">

                                    <div class="tile is-parent box is-shadowless" style="border: solid 0.05rem black">
                                        <div class="tile columns is-vcentered">
                                            <div class="column tile is-vertical">

                                                <div class="is-size-6 has-text-weight-bold tile is-parent">PLANOS</div>

                                                <div class="columns tile is-parent" style="padding-top: 0px">
                                                    <div class="column">
                                                        <div class="is-size-7">Total</div>
                                                        <div class="is-size-6 has-text-weight-bold">{{ totalCapacityRoom(sala) | numeral('0,0.0') }}</div>
                                                    </div>
                                                    <div class="column">
                                                        <div class="is-size-7">Utilizada</div>
                                                        <div class="is-size-6 has-text-weight-bold">{{ usedCapacityRoom(sala) | numeral('0,0.0') }}</div>
                                                    </div>
                                                    <div class="column">
                                                        <div class="is-size-7">Disponible</div>
                                                        <div class="is-size-6 has-text-weight-bold">{{ availableCapacityRoom(sala) | numeral('0,0.0') }}</div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div class="column tile tile is-vertical">
                                                <div class="is-size-6 has-text-weight-bold tile is-parent">BATERIAS</div>
                                                <div class="columns tile is-parent" style="padding-top: 0px">
                                                    <div class="column">
                                                        <div class="is-size-7">Total</div>
                                                        <div class="is-size-6 has-text-weight-bold">{{ totalCapacityBatteries(sala) | numeral('0,0.0') }}</div>
                                                    </div>
                                                    <div class="column">
                                                        <div class="is-size-7">Utilizada</div>
                                                        <div class="is-size-6 has-text-weight-bold">{{ usedCapacityBatteries(sala) | numeral('0,0.0') }}</div>
                                                    </div>
                                                    <div class="column">
                                                        <div class="is-size-7">Disponible</div>
                                                        <div class="is-size-6 has-text-weight-bold">{{ availableCapacityBatteries(sala) | numeral('0,0.0') }}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </b-field>
                            </div>

                            <div class="tile is-parent" v-if="sala.planes.length">
                                <div class="tile columns is-multiline">
                                    <div class="tile is-parent column is-6" v-for="plane in planes" :key="plane.id">
                                        <div class="tile is-parent box is-shadowless" style="border: solid 0.05rem black">
                                            <div class="tile is-vertical">

                                                <div class="columns">
                                                    <div class="column">
                                                        <div class="is-size-6 has-text-weight-bold">PLANO {{ plane.plane_type.type }}</div>
                                                    </div>
                                                    <div class="column">
                                                        <a v-if="canEditPowerRectifiers" size="is-small" @click="isEditPlaneModalActive = true; selectedPlane = plane">
                                                            <b-tag class="is-pulled-right is-link has-text-weight-light is-size-7">
                                                                <font-awesome-icon :icon="['fas', 'pencil-alt']" />
                                                            </b-tag>
                                                        </a>
                                                    </div>
                                                </div>

                                                <div class="tile is-parent">
                                                    <div class="box tile is-child">

                                                        <div>
                                                            <div class="is-size-7">Tensión de flote: {{ plane.float_tension }}</div>
                                                            <div class="is-size-7">Corriente: {{ plane.current }}</div>
                                                            <div class="is-size-7">Factor de recarga: {{ plane.recharge_factor }}</div>
                                                        </div>

                                                        <b-tooltip position="is-bottom" multilined>
                                                            <button class="button is-primary">Más info</button>
                                                            <template v-slot:content>
                                                                <div class="is-size-7">Capacidad nominal: {{ nominalCapacity(plane) | numeral('0,0.0') }}</div>
                                                                <div class="is-size-7">Capacidad instalada: {{ installedCapacity(plane) | numeral('0,0.0') }}</div>
                                                                <div class="is-size-7">Potencia real de carga: {{ chargeRealPower(plane) | numeral('0,0.0') }}</div>
                                                                <div class="is-size-7">Corriente recarga: {{ rechargeCurrent(plane) | numeral('0,0.0') }}</div>
                                                                <div class="is-size-7">Potencia recarga baterías: {{ batteryRechargePower(plane) | numeral('0,0.0') }}</div>
                                                                <div class="is-size-7">Corriente total carga + baterías: {{ totalCurrent(plane) | numeral('0,0.0') }}</div>
                                                                <div class="is-size-7">Potencia total carga + baterías: {{ totalPower(plane) | numeral('0,0.0') }}</div>
                                                                <div class="is-size-7">Capacidad real: {{ realPlaneCapacity(plane) | numeral('0,0.0') }}</div>
                                                                <div class="is-size-7">Capacidad disponible: {{ availablePlaneCapacity(plane) | numeral('0,0.0') }}</div>
                                                                <div class="is-size-7">Porcentaje Uso: {{ usePercentPlane(plane) * 100 | numeral('0,0.0') }}</div>

                                                                <div class="is-size-7">Capacidad baterias: {{ batteryTotalCapacityPlane(plane) | numeral('0,0.0') }}</div>
                                                                <div class="is-size-7">Utilizado baterias: {{ chargeRealPower(plane) | numeral('0,0.0') }}</div>
                                                                <div class="is-size-7">Disponible baterias: {{ availableBatteryCapacityPlane(plane) | numeral('0,0.0') }}</div>

                                                            </template>
                                                        </b-tooltip>

                                                    </div>
                                                </div>

                                                <div class="tile is-parent" v-if="sala.power_rectifiers.length">
                                                    <b-field label="PLANTAS RECTIFICADORAS" label-position="on-border" class="tile">
                                                        <div class="tile is-parent box is-shadowless" style="border: solid 0.05rem black">
                                                            <div class="tile is-parent">
                                                                <div class="columns is-multiline tile">
                                                                    <div class="tile is-child column is-6" 
                                                                        v-for="powerRectifier in sala.power_rectifiers" 
                                                                        :key="powerRectifier.id" 
                                                                        
                                                                        v-if="powerRectifierBelongsToPlane(powerRectifier, plane)">
                                                                        <a class="box is-dark is-bold has-text-warning" @click="isPowerRectifierModalActive = true; powerRectifierSelected = powerRectifier">
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

                                                <div class="tile is-parent" v-if="canEditPowerRectifiers">
                                                    <div class="tile is-child has-text-centered">
                                                        <b-button class="is-default has-text-weight-light has-text-grey is-size-7">
                                                            <a @click="isNewBatteryBankModalActive = true; selectedPlane = plane">Agregar Banco de Baterías</a>
                                                        </b-button>
                                                    </div>
                                                </div>

                                                <div class="tile is-parent" v-if="plane.battery_banks.length && sala.power_rectifiers.length">
                                                    <b-field label="BANCOS BATERIAS" label-position="on-border" class="tile">
                                                        <div class="tile is-parent box is-shadowless" style="border: solid 0.05rem black">
                                                            <div class="tile is-parent">
                                                                <div class="columns is-multiline tile">
                                                                    <div class="tile is-child column is-6" 
                                                                        v-for="batteryBank in plane.battery_banks" 
                                                                        :key="batteryBank.id" 
                                                                        
                                                                        v-if="batteryBankBelongsToPlane(batteryBank, plane)">
                                                                        <a class="box is-dark is-bold has-text-warning" @click="isbatteryBankModalActive = true; batteryBankSelected = batteryBank">
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

                            <div class="tile is-parent columns is-vcentered" v-if="!hasPlanes(sala)">
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
                    <!-- <b-field label="CLIMATIZACION" label-position="on-border" class="tile" :custom-class="!isCurrentSala(sala) ? 'has-text-grey-light' : ''"> -->

                        <div class="tile is-vertical">
                            
                            <div v-if="!canEditSurface" class="tile is-parent box is-shadowless" style="border: solid 0.1rem #cccccc">
                                <div class="is-size-6 has-text-weight-bold">CLIMA</div>
                                <div class="tile is-parent is-vertical" v-if="sala.current_air_conditioner_capacity">
                                    <div class="has-text-centered">
                                        <div class="level">
                                            <div class="level-item">
                                                <div class="">
                                                    <div class="has-text-weight-bold is-size-6">{{ totalAirConditionerCapacity | numeral("0,0.0") }}
                                                        <span class="is-size-7"> kW</span>
                                                    </div>
                                                    <div class="has-text-weight-normal is-size-7">Capacidad Total</div>
                                                </div>
                                            </div>
                                            <div class="level-item">
                                                <div class="">
                                                    <div class="has-text-weight-bold is-size-6">{{ usedAirConditionerCapacity | numeral("0,0.0") }}
                                                        <span class="is-size-7"> kW</span>
                                                    </div>
                                                    <div class="has-text-weight-normal is-size-7">Capacidad Utilizada</div>
                                                </div>
                                            </div>
                                            <div class="level-item">
                                                <div class="">
                                                    <div class="has-text-weight-bold is-size-6">{{ availableAirConditionerCapacity | numeral("0,0.0") }}
                                                        <span class="is-size-7"> kW</span>
                                                    </div>
                                                    <div class="has-text-weight-normal is-size-7">Capacidad Disponible</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tile columns is-vcentered" v-if="!sala.current_air_conditioner_capacity">
                                    <div class="column">
                                        <div class="has-text-centered has-text-weight-light has-text-grey is-size-7">
                                            NO TIENE DATOS DE CLIMA
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a v-if="canEditSurface" @click="isNewAirConditionerModalActive = true" class="tile box is-shadowless" style="border: solid 0.1rem #cccccc">
                                <div class="is-size-6 has-text-weight-bold">CLIMA</div>
                                <div class="tile is-parent is-vertical" v-if="sala.current_air_conditioner_capacity">
                                    <div class="has-text-centered">
                                        <div class="level">
                                            <div class="level-item">
                                                <div class="">
                                                    <div class="has-text-weight-bold is-size-6">{{ totalAirConditionerCapacity | numeral("0,0.0") }}
                                                        <span class="is-size-7"> kW</span>
                                                    </div>
                                                    <div class="has-text-weight-normal is-size-7">Capacidad Total</div>
                                                </div>
                                            </div>
                                            <div class="level-item">
                                                <div class="">
                                                    <div class="has-text-weight-bold is-size-6">{{ usedAirConditionerCapacity | numeral("0,0.0") }}
                                                        <span class="is-size-7"> kW</span>
                                                    </div>
                                                    <div class="has-text-weight-normal is-size-7">Capacidad Utilizado</div>
                                                </div>
                                            </div>
                                            <div class="level-item">
                                                <div class="">
                                                    <div class="has-text-weight-bold is-size-6">{{ availableAirConditionerCapacity | numeral("0,0.0") }}
                                                        <span class="is-size-7"> kW</span>
                                                    </div>
                                                    <div class="has-text-weight-normal is-size-7">Capacidad Disponible</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tile columns is-vcentered" v-if="!sala.current_air_conditioner_capacity">
                                    <div class="column">
                                        <div class="has-text-centered has-text-weight-light has-text-grey is-size-7">
                                            NO TIENE DATOS DE CLIMA
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <div class="tile is-parent" v-if="hasAirConditioners(sala)">
                                <div class="columns is-multiline tile">
                                    <div class="tile is-child column is-3"
                                        v-for="airConditioner in airConditioners" 
                                        v-if="airConditioner.room_id == sala.id" 
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

                            <div class="tile columns is-vcentered" v-if="!hasAirConditioners(sala)">
                                <div class="column">
                                    <div class="has-text-centered has-text-weight-light has-text-grey is-size-7">
                                        <div class="">NO TIENE EQUIPOS DE CLIMA</div>
                                        <b-tag class="is-default has-text-weight-light has-text-grey is-size-7">
                                            <a @click="isNewAirConditionerModalActive = true">Agregar</a>
                                        </b-tag>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </b-field>
                </div>
            </div>

            <div class="tile">
                <div class="tile is-parent">
                    <b-field label="ESPACIO" label-position="on-border" class="tile" 
                        :custom-class="!isCurrentSala(sala) ? 'has-text-grey-light' : ''">
                        <div v-if="!canEditSurface" class="tile box is-shadowless" style="border: solid 0.1rem #cccccc">
                            <div class="tile is-parent is-vertical" v-if="sala.current_room_surface">
                                <div class="has-text-centered">
                                    <div class="level">
                                        <div class="level-item">
                                            <div class="">
                                                <div class="has-text-weight-bold is-size-6">{{ totalSurface | numeral("0,0.0") }}
                                                    <!-- <span class="is-size-7"> m2</span> -->
                                                </div>
                                                <div class="has-text-weight-normal is-size-7">Espacio Total</div>
                                            </div>
                                        </div>
                                        <div class="level-item">
                                            <div class="">
                                                <div class="has-text-weight-bold is-size-6">{{ usedSurface | numeral("0,0.0") }}
                                                    <!-- <span class="is-size-7"> m2</span> -->
                                                </div>
                                                <div class="has-text-weight-normal is-size-7">Espacio Utilizada</div>
                                            </div>
                                        </div>
                                        <div class="level-item">
                                            <div class="">
                                                <div class="has-text-weight-bold is-size-6">{{ availableSurface | numeral("0,0.0") }}
                                                    <!-- <span class="is-size-7"> m2</span> -->
                                                </div>
                                                <div class="has-text-weight-normal is-size-7">Espacio Disponible</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tile columns is-vcentered" v-if="!sala.current_room_surface">
                                <div class="column">
                                    <div class="has-text-centered has-text-weight-light has-text-grey is-size-7">
                                        NO TIENE DATOS DE ESPACIO
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a v-if="canEditSurface" @click="isSurfaceModalActive = true" class="tile box is-shadowless" style="border: solid 0.1rem #cccccc">
                            <div class="tile is-parent is-vertical" v-if="sala.current_room_surface">
                                <div class="has-text-centered">
                                    <div class="level">
                                        <div class="level-item">
                                            <div class="">
                                                <div class="has-text-weight-bold is-size-6">{{ totalSurface | numeral("0,0.0") }}
                                                    <span class="is-size-7"> m2</span>
                                                </div>
                                                <div class="has-text-weight-normal is-size-7">Espacio Total</div>
                                            </div>
                                        </div>
                                        <div class="level-item">
                                            <div class="">
                                                <div class="has-text-weight-bold is-size-6">{{ usedSurface | numeral("0,0.0") }}
                                                    <span class="is-size-7"> m2</span>
                                                </div>
                                                <div class="has-text-weight-normal is-size-7">Espacio Utilizado</div>
                                            </div>
                                        </div>
                                        <div class="level-item">
                                            <div class="">
                                                <div class="has-text-weight-bold is-size-6">{{ availableSurface | numeral("0,0.0") }}
                                                    <span class="is-size-7"> m2</span>
                                                </div>
                                                <div class="has-text-weight-normal is-size-7">Espacio Disponible</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tile columns is-vcentered" v-if="!sala.current_room_surface">
                                <div class="column">
                                    <div class="has-text-centered has-text-weight-light has-text-grey is-size-7">
                                        NO TIENE DATOS DE ESPACIO
                                    </div>
                                </div>
                            </div>
                        </a>
                    </b-field>
                </div>

                <div class="tile is-parent is-4">
                    <b-field label="EQUIPOS SEGURIDAD" label-position="on-border" class="tile"
                        :custom-class="!isCurrentSala(sala) ? 'has-text-grey-light' : ''">
                        <div v-if="!canEditSecurity" class="tile box is-shadowless" style="border: solid 0.1rem #cccccc">

                            <div class="tile is-parent is-vertical" v-if="sala.current_fire_detection">
                                <b-field label="INCENDIO" label-position="on-border" class="tile" :custom-class="!isCurrentSala(sala) ? 'has-text-grey-light' : ''">
                                    <div class="tile box is-child is-shadowless" style="border: solid 0.1rem #cccccc">
                                        <div class="level">
                                            <div class="level-item">
                                                <div class="">
                                                    <div class="has-text-weight-bold is-size-6">{{ detectionType }}</div>
                                                    <div class="has-text-weight-normal is-size-7">Detección</div>
                                                </div>
                                            </div>
                                            <div class="level-item">
                                                <div class="">
                                                    <div class="has-text-weight-bold is-size-6">{{ extinctionType }}</div>
                                                    <div class="has-text-weight-normal is-size-7">Extinción</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </b-field>
                            </div>

                            <div class="tile columns is-vcentered" v-if="!sala.current_fire_detection">
                                <div class="column">
                                    <div class="has-text-centered has-text-weight-light has-text-grey is-size-7">
                                        NO TIENE EQUIPOS DE SEGURIDAD
                                    </div>
                                </div>
                            </div>

                        </div>
                        <a v-if="canEditSecurity" @click="isSecurityModalActive = true" class="tile box is-shadowless" style="border: solid 0.1rem #cccccc">
                            <div class="tile is-parent is-vertical" v-if="sala.current_fire_detection">
                                <b-field label="INCENDIO" label-position="on-border" class="tile" :custom-class="!isCurrentSala(sala) ? 'has-text-grey-light' : ''">
                                    <div class="tile box is-child is-shadowless" style="border: solid 0.1rem #cccccc">
                                        <div class="level">
                                            <div class="level-item">
                                                <div class="">
                                                    <div class="has-text-weight-bold is-size-6">{{ detectionType }}</div>
                                                    <div class="has-text-weight-normal is-size-7">Detección</div>
                                                </div>
                                            </div>
                                            <div class="level-item">
                                                <div class="">
                                                    <div class="has-text-weight-bold is-size-6">{{ extinctionType }}</div>
                                                    <div class="has-text-weight-normal is-size-7">Extinción</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </b-field>
                            </div>

                            <div class="tile columns is-vcentered" v-if="!sala.current_fire_detection">
                                <div class="column">
                                    <div class="has-text-centered has-text-weight-light has-text-grey is-size-7">
                                        NO TIENE EQUIPOS DE SEGURIDAD
                                    </div>
                                </div>
                            </div>
                        </a>
                    </b-field>
                </div>

                <div class="tile is-parent">
                    <b-field label="DISTRIBUCION" label-position="on-border" class="tile"
                        :custom-class="!isCurrentSala(sala) ? 'has-text-grey-light' : ''">
                        <div v-if="!canEditDistribution" class="tile box is-shadowless" style="border: solid 0.1rem #cccccc">
                            <div class="tile is-parent is-vertical" v-if="sala.current_room_distribution">
                                <div class="tile">
                                    <div class="tile is-child">
                                        <div class="tile columns is-vcentered">
                                            <div class="column">
                                                <div class="level has-text-centered">
                                                    <div class="level-item">
                                                        <div class="">
                                                            <div class="has-text-weight-bold is-size-6">{{ totalCapacity | numeral('0,0.0') }} <span class="is-size-7">kW</span></div>
                                                            <div class="has-text-weight-normal is-size-7">Capacidad Total</div>
                                                        </div>
                                                    </div>
                                                    <div class="level-item">
                                                        <div class="">
                                                            <div class="has-text-weight-bold is-size-6">{{ usedCapacity | numeral('0,0.0') }} <span class="is-size-7">kW</span></div>
                                                            <div class="has-text-weight-normal is-size-7">Capacidad Utilizada</div>
                                                        </div>
                                                    </div>
                                                    <div class="level-item">
                                                        <div class="">
                                                            <div class="has-text-weight-bold is-size-6">{{ availableCapacity | numeral('0,0.0') }} <span class="is-size-7">kW</span></div>
                                                            <div class="has-text-weight-normal is-size-7">Capacidad Disponible</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tile columns is-vcentered" v-if="!sala.current_room_distribution">
                                <div class="column">
                                    <div class="has-text-centered has-text-weight-light has-text-grey is-size-7">
                                        NO TIENE DATOS DE DISTRIBUCION
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a v-if="canEditDistribution" 
                            @click="isDistributionModalActive = true"
                            class="tile box is-shadowless" style="border: solid 0.1rem #cccccc">
                            <div class="tile is-parent is-vertical" v-if="sala.current_room_distribution">
                                <div class="tile is-child">
                                    <div class="tile columns is-vcentered">
                                        <div class="column">
                                            <div class="level has-text-centered">
                                                <div class="level-item">
                                                    <div class="">
                                                        <div class="has-text-weight-bold is-size-6">{{ totalCapacity | numeral('0,0.0') }} <span class="is-size-7">kW</span></div>
                                                        <div class="has-text-weight-normal is-size-7">Capacidad Total</div>
                                                    </div>
                                                </div>
                                                <div class="level-item">
                                                    <div class="">
                                                        <div class="has-text-weight-bold is-size-6">{{ usedCapacity | numeral('0,0.0') }} <span class="is-size-7">kW</span></div>
                                                        <div class="has-text-weight-normal is-size-7">Capacidad Utilizada</div>
                                                    </div>
                                                </div>
                                                <div class="level-item">
                                                    <div class="">
                                                        <div class="has-text-weight-bold is-size-6">{{ availableCapacity | numeral('0,0.0') }} <span class="is-size-7">kW</span></div>
                                                        <div class="has-text-weight-normal is-size-7">Capacidad Disponible</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tile columns is-vcentered" v-if="!sala.current_room_distribution">
                                <div class="column">
                                    <div class="has-text-centered has-text-weight-light has-text-grey is-size-7">
                                        NO TIENE DATOS DE DISTRIBUCION
                                    </div>
                                </div>
                            </div>
                        </a>
                    </b-field>
                </div>
            </div>
            
        </div>

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

        <b-modal :active.sync="isDistributionModalActive"
            has-modal-card
            trap-focus
            aria-role="dialog"
            aria-modal>
            <modal-distribution
                :sala="sala"
                :user="user"
                :canEdit="canEditDistribution"
                />
        </b-modal>

        <b-modal :active.sync="isSurfaceModalActive"
            has-modal-card
            trap-focus
            aria-role="dialog"
            aria-modal>
            <modal-surface
                :sala="sala"
                :user="user"
                :canEdit="canEditSurface"
                />
        </b-modal>

        <b-modal :active.sync="isSecurityModalActive"
            has-modal-card
            trap-focus
            aria-role="dialog"
            aria-modal>
            <modal-security
                :sala="sala"
                :user="user"
                :canEdit="canEditSecurity"
                />
        </b-modal>

        <b-modal :active.sync="isNewPowerRectifierModalActive"
            has-modal-card
            trap-focus
            aria-role="dialog"
            aria-modal>
            <modal-new-power-rectifier 
                :room="room"
                :rooms="pop.rooms"
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
                :sala="sala" 
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
</template>

<script>
    export default {
        components: {
            ModalPowerRectifier: () => import(/* webpackChunkName: "chunks/pop/layout/modals/powerRectifier"*/'../../pop/layout/modals/ModalPowerRectifier'),
            ModalAirConditioner: () => import(/* webpackChunkName: "chunks/pop/layout/modals/airConditioner"*/'../../pop/layout/modals/ModalAirConditioner'),
            ModalNewPowerRectifier: () => import(/* webpackChunkName: "chunks/pop/layout/modals/newPowerRectifier"*/'../../pop/layout/modals/ModalNewPowerRectifier'),
            ModalNewBatteryBank: () => import(/* webpackChunkName: "chunks/pop/layout/modals/newBatteryBank"*/'../../pop/layout/modals/ModalNewBatteryBank'),
            ModalNewAirConditioner: () => import(/* webpackChunkName: "chunks/pop/layout/modals/newAirConditioner"*/'../../pop/layout/modals/ModalNewAirConditioner'),
            ModalDistribution: () => import(/* webpackChunkName: "chunks/pop/layout/modals/distribution"*/'../../pop/layout/modals/ModalDistribution'),
            ModalSurface: () => import(/* webpackChunkName: "chunks/pop/layout/modals/surface"*/'../../pop/layout/modals/ModalSurface'),
            ModalSecurity: () => import(/* webpackChunkName: "chunks/pop/layout/modals/surface"*/'../../pop/layout/modals/ModalSecurity'),
            ModalEditPlane: () => import(/* webpackChunkName: "chunks/pop/layout/modals/editPlane"*/'../../pop/layout/modals/ModalEditPlane'),
        },

        props : [
            'room',
            'sala',
            'user',
            'pop',
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

                planeDelegationTypeId: this.sala.current_room_delegation ? this.sala.current_room_delegation.plane_delegation_type_id : null,
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
                   type = this.planeDelegationTypes[item].id == this.planeDelegationTypeId && type == 'Sin Información' ? this.planeDelegationTypes[item].type : type
                })
                return type
            },

            isRoomSelected() {
                return this.room.id && this.sala.id != this.room.id
            },

            totalCapacity() {
                return this.sala.current_room_distribution ? this.sala.current_room_distribution.total_capacity : 0
            },

            usedCapacity() {
                return this.sala.current_room_distribution ? this.sala.current_room_distribution.used_capacity : 0
            },

            availableCapacity() {
                return this.totalCapacity - this.usedCapacity
            },

            distribution() {
                return {
                    'totalCapacity': this.totalCapacity,
                    'usedCapacity': this.usedCapacity
                }
            },

            surface() {
                return {
                    'totalSurface': this.totalSurface,
                    'usedSurface': this.usedSurface
                }
            },

            airConditionerCapacity() {
                return {
                    'totalSurface': this.totalSurface,
                    'usedSurface': this.usedSurface
                }
            },

            detectionType() {
                return this.sala.current_fire_detection ? this.sala.current_fire_detection.fire_detection_type.type : 'No tiene'
            },

            extinctionType() {
                return this.sala.current_fire_detection && this.sala.current_fire_detection.fire_extinction_type ? this.sala.current_fire_detection.fire_extinction_type.type : 'No tiene'
            },

            canEditDistribution() {
                return this.canEditAirConditioners && this.canEditPowerRectifiers
            },

            canEditSurface() {
                return this.canEditAirConditioners && this.canEditPowerRectifiers
            },

            totalSurface() {
                return this.sala.current_room_surface ? this.sala.current_room_surface.total_surface : 0
            },

            usedSurface() {
                return this.sala.current_room_surface ? this.sala.current_room_surface.used_surface : 0
            },

            availableSurface() {
                return this.totalSurface - this.usedSurface
            },


            totalAirConditionerCapacity() {
                return this.sala.current_air_conditioner_capacity ? this.sala.current_air_conditioner_capacity.total_capacity : 0
            },

            usedAirConditionerCapacity() {
                return this.sala.current_air_conditioner_capacity ? this.sala.current_air_conditioner_capacity.used_capacity : 0
            },

            availableAirConditionerCapacity() {
                return this.totalAirConditionerCapacity - this.usedAirConditionerCapacity
            },


            canEditSecurity() {
                return this.canEditAirConditioners && this.canEditPowerRectifiers
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
                this.$emit('room-distribution', this.distribution);
                this.$emit('room-surface', this.surface);
                this.$emit('power-rectifier-data', this.powerRectifierData);
                this.$emit('battery-data', this.batteryData);
            },

            powerRectifierData(value) {
                this.$emit('power-rectifier-data', value);
            },

            batteryData(value) {
                this.$emit('battery-data', value);
            },

            planeDelegationTypeId(value) {
                
            },

            isEditMode(val) {
                if (val == false) {
                    this.getPlanes()
                    this.$eventBus.$emit('room-data')
                }
            }
        },

        methods: {
            isCurrentSala(sala) {
                return sala.id == this.room.id
            },

            powerRectifiersInRoom(sala) {
                let powerRectifiersInRoom = 0
                Object.keys(sala.planes).forEach(element => {
                    let plane = sala.planes[element]
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

            hasPlanes(sala) {
                let bool = false
                if(this.planes) {
                    Object.keys(this.planes).forEach(element => {
                        let plane = this.planes[element]
                        Object.keys(plane.rooms).forEach(item => {
                            bool = !bool ? plane.rooms[item].id == sala.id : bool
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

            hasAirConditioners(sala) {
                let bool = false
                if(this.airConditioners) {
                    Object.keys(this.airConditioners).forEach(element => {
                        bool = !bool ? this.airConditioners[element].room_id == sala.id : bool
                    })
                }
                return bool
            },

            getPlanes() {
                axios.get(`/api/roomPlanes/${this.sala.id}?plane_delegation_type_id=${this.planeDelegationTypeId}`)
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

            totalCapacityRoom(sala) {
                let realRoomCapacity = 0
                Object.keys(this.planes).forEach(element => {
                    let plane = this.planes[element]
                    realRoomCapacity += this.realPlaneCapacity(plane)
                })
                this.totalPRCapacity = realRoomCapacity
                return realRoomCapacity
            },

            usedCapacityRoom(sala) {
                let usedRoomCapacity = 0
                Object.keys(this.planes).forEach(element => {
                    let plane = this.planes[element]
                    usedRoomCapacity += this.totalPower(plane)
                })
                this.usedPRCapacity = usedRoomCapacity
                return usedRoomCapacity
            },

            availableCapacityRoom(sala) {
                let availableRoomCapacity = 10000000
                let availableRoomCapacityA = 10000000
                let availableRoomCapacityB = 10000000
                Object.keys(this.planes).forEach(element => {
                    let plane = this.planes[element]
                    if(sala.current_room_delegation) {
                        switch(sala.current_room_delegation.plane_delegation_type_id) {
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
            totalCapacityBatteries(sala) {
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

            usedCapacityBatteries(sala) {
                let used = 0
                Object.keys(sala.planes).forEach(element => {
                    let plane = sala.planes[element]
                    used += this.chargeRealPower(plane)
                })
                this.usedBatteryCapacity = used
                return used
            },

            availableCapacityBatteries(sala) {
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

            updatePlaneDelegationType(sala) {
                let params = {
                    'user_id': this.user.id,
                    'plane_delegation_type_id': this.planeDelegationTypeId
                }

                axios.put(`/api/roomPlaneDelegationType/${this.sala.id}`, params)
                .then(response => {
                    console.log(response.data)
                })
                // this.$parent.close()
                // this.$eventBus.$emit('junction-measurements-updated');
            },

            reload() {
                console.log('reloaded')
                this.$eventBus.$emit('change-room')
            }    
        },

        beforeDestroy() {
            this.$eventBus.$off('new-power-rectifier')
            this.$eventBus.$off('new-battery-bank')
        }
    }
</script>
