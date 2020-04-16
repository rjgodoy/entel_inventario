<template>
    <section class="section is-paddingless">

        <div class="columns" >
            <div class="column is-3"></div>
            <div class="column is-6 tile is-parent">
                <div class="tile is-child box">
                    <div class="has-text-weight-semibold is-size-6 has-text-info" style="padding-bottom: 10px;">TABLERO DE TRANSFERENCIA AUTOMATICA</div>

                    <div class="columns">
                        <div class="column">
                            <div class="has-text-weight-light is-size-7">Tipo</div>
                            <div class="has-text-weight-semibold is-size-5 ">{{ generatorSet.generator_tta_type ? generatorSet.generator_tta_type.type : 'Sin información' }}</div>
                        </div>

                        <div class="column has-text-right">
                            <font-awesome-icon
                                :icon="['fas', 'microchip']" 
                                size="3x" 
                                class="has-text-grey-lighter" 
                                style="opacity: 0.5;"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-3"></div>
        </div>

        <div class="box">
            <div class="tile is-ancestor">
                <div class="tile is-vertical">
                    <div class="tile">
                        <div class="columns tile is-parent">
                            <div class="column has-text-centered">
                                <font-awesome-icon
                                    :icon="['fas', 'charging-station']" 
                                    size="4x" 
                                    class="has-text-grey" 
                                    style="opacity: 0.5; padding-top: 10px;"/>
                            </div>
                            <div class="column">
                                <div class="has-text-weight-light is-size-7">Marca</div>
                                <div class="has-text-weight-semibold is-size-5 ">{{ generatorSet.generator_set_type ? generatorSet.generator_set_type.type : 'Sin información' }}</div>
                                <div class="has-text-weight-light is-size-7" style="padding-top: 5px;">Modelo</div>
                                <div class="has-text-weight-semibold is-size-6">{{ generatorSet.generator_set_type ? generatorSet.generator_set_type.model : 'Sin información' }}</div>
                            </div>
                            <div class="column">
                                <div class="has-text-weight-light is-size-7">Horómetro</div>
                                <div class="has-text-weight-semibold is-size-6">{{ generatorSet.horometer == 1 ? 'Si' : 'No' }}</div>

                                <div class="has-text-weight-light is-size-7" style="padding-top: 5px;">Número Serie</div>
                                <div class="has-text-weight-semibold is-size-6" :class="generatorSet.serial_number ? '' : 'has-text-info'">
                                    {{ generatorSet.serial_number ? generatorSet.serial_number : 'Sin información' }}
                                </div>
                            </div>
                            <div class="column has-text-right">
                                <div class="has-text-weight-light is-size-7">Mantenedor</div>
                                <div class="has-text-weight-bold is-size-5">{{ generatorSet.current_maintainer ? generatorSet.current_maintainer[0].name : 'Sin información' }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="tile">
                        <div class="tile is-parent">
                            <div class="tile is-child box">
                                <div class="has-text-weight-semibold is-size-6 has-text-link" style="padding-bottom: 10px;">GENERADOR</div>
                                <div class="columns">
                                    <div class="column">
                                        <div class="has-text-weight-light is-size-7">Marca</div>
                                        <div class="has-text-weight-semibold is-size-6" :class="generatorSet.current_generator_group.generator_group_type ? '' : 'has-text-info'">
                                            {{ generatorSet.current_generator_group ? generatorSet.current_generator_group.generator_group_type.type : 'Sin información' }}
                                        </div>
                                        <div class="has-text-weight-light is-size-7" style="margin-top: 5px;">Modelo</div>
                                        <div class="has-text-weight-semibold is-size-6" :class="generatorSet.current_generator_group.generator_group_type ? '' : 'has-text-info'">
                                            {{ generatorSet.current_generator_group ? generatorSet.current_generator_group.generator_group_type.model : 'Sin información' }}
                                        </div>
                                    </div>
                                    
                                    <div class="column">
                                        <div class="has-text-weight-light is-size-7">Potencia</div>
                                        <div class="has-text-weight-semibold is-size-6">{{ generatorSet.current_generator_group ? generatorSet.current_generator_group.power : 'Sin información' }} <span class="is-size-7" v-if="generatorSet.current_generator_group">kW</span></div>
                                    </div>

                                    <div class="column has-text-centered">
                                        <font-awesome-icon
                                            :icon="['fas', 'charging-station']" 
                                            size="3x" 
                                            class="has-text-grey-lighter" 
                                            style="opacity: 0.5;"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tile is-parent">
                            <div class="tile is-child box">
                                <div class="has-text-weight-semibold is-size-6 has-text-link" style="padding-bottom: 10px;">MOTOR</div>
                                <div class="columns">
                                    <div class="column">
                                        <div class="has-text-weight-light is-size-7">Marca</div>
                                        <div class="has-text-weight-semibold is-size-6" :class="generatorSet.generator_motor_type ? '' : 'has-text-info'">{{ generatorSet.generator_motor_type ? generatorSet.generator_motor_type.type : 'Sin información' }}</div>
                                        <div class="has-text-weight-light is-size-7" style="margin-top: 5px;">Modelo</div>
                                        <div class="has-text-weight-semibold is-size-6" :class="generatorSet.generator_motor_type ? '' : 'has-text-info'">{{ generatorSet.generator_motor_type ? generatorSet.generator_motor_type.model : 'Sin información' }}</div>
                                    </div>
                                    
                                    <!-- <div class="column">
                                        <div class="has-text-weight-light is-size-7">Potencia</div>
                                        <div class="has-text-weight-normal is-size-6">{{ generatorSet.current_generator_group ? generatorSet.current_generator_group.power : 'Sin información' }} <span class="is-size-7" v-if="generatorSet.current_generator_group">kW</span></div>
                                    </div> -->

                                    <div class="column has-text-centered">
                                        <font-awesome-icon
                                            :icon="['fas', 'cog']" 
                                            size="3x" 
                                            class="has-text-grey-lighter" 
                                            style="opacity: 0.5;"
                                            spin/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tile">
                        <div class="tile is-parent">
                            <div class="tile is-child box">
                                <div class="has-text-weight-semibold is-size-6 has-text-link" style="padding-bottom: 10px;">ESTANQUE</div>
                                <div class="columns">
                                    <div class="column">
                                        <div class="has-text-weight-light is-size-7">Marca</div>
                                        <div class="has-text-weight-semibold is-size-6" :class="generatorSet.generator_tank_type ? '' : 'has-text-info'">{{ generatorSet.generator_tank_type ? generatorSet.generator_tank_type.type : 'Sin información' }}</div>
                                    </div>
                                    
                                    <div class="column">
                                        <div class="has-text-weight-light is-size-7">Capacidad</div>
                                        <div class="has-text-weight-semibold is-size-6">{{ generatorSet.current_generator_tank.capacity ? generatorSet.current_generator_tank.capacity : 'Sin información' }} <span class="is-size-7" v-if="generatorSet.current_generator_tank">Lts</span></div>

                                        <div class="has-text-weight-light is-size-7" style="margin-top: 5px;">Consumo</div>
                                        <div class="has-text-weight-semibold is-size-6" :class="generatorSet.current_generator_tank.consumption ? '' : 'has-text-info'">
                                            {{ generatorSet.current_generator_tank.consumption ? generatorSet.current_generator_tank.consumption : 'Sin información' }} 
                                            <span class="is-size-7" v-if="generatorSet.current_generator_tank.consumption">Lts</span>
                                        </div>
                                    </div>

                                    <div class="column has-text-centered">
                                        <font-awesome-icon
                                            :icon="['fas', 'gas-pump']" 
                                            size="3x" 
                                            class="has-text-grey-lighter" 
                                            style="opacity: 0.5;"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tile is-parent">
                            <!-- <div class="tile is-child box">
                                <div class="has-text-weight-semibold is-size-6 has-text-info" style="padding-bottom: 10px;"> </div>
                                <div class="columns">
                                    
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
    export default {
        components: {
        },
        props : [
            'generatorSet'
        ],
        generatorSet() {
            return {
                generatorSets: Array
            }
        },
        mounted() {
        },
        computed: {
        },
        methods: {
            
        }
    }
</script>
