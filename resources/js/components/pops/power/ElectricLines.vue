<template>
    <section class="section" style="padding-top: 0px; padding-bottom: 48px;" v-if="electricLines.electricLine">
        <div class="field">
            <div class="has-text-weight-semibold has-text-dark is-size-4 has-text-left">Líneas Eléctricas</div>
        </div>
        
        <div class="columns is-multiline">
            <div class="column is-6" v-for="data in electricLines.electricLine">
                <div class="tile is-child box">

                    <div class="columns">
                        <div class="column">
                            <div class="has-text-weight-light is-size-7">Nº Línea Eléctrica</div>
                            <div class="has-text-weight-semibold is-size-5">{{ data.id }}</div>
                            
                            <div class="has-text-weight-light is-size-7" style="margin-top: 5px;">Tipo fase</div>
                            <div class="has-text-weight-semibold is-size-6">{{ data.phase_type ? data.phase_type.phase_type : 'Sin información' }}</div>
                        </div>
                        <div class="column has-text-right">
                            <font-awesome-icon
                                :icon="['fas', 'bolt']" 
                                size="3x" 
                                class="has-text-grey-lighter" 
                                style="opacity: 0.5;"/>
                        </div>
                    </div>

                    <div class="columns">
                        <div class="column is-4">
                            <div class="has-text-weight-light is-size-7">Voltaje</div>
                            <div class="has-text-weight-normal is-size-6">{{ data.volt | numeral('0,0') }} <span class="is-size-7" v-if="data.volt">V</span></div>
                            <div class="has-text-weight-light is-size-7" style="margin-top: 5px;">Distancia</div>
                            <div class="has-text-weight-normal is-size-6">{{ data.distance | numeral('0,0') }} <span class="is-size-7" v-if="data.distance">m</span></div>
                        </div>
                    </div>

                    <div class="columns is-multiline">
                        <div class="column is-6" v-for="transformer in data.transformers">

                            <div class="tile is-child box has-background-light">
                                <div class="title is-size-5 has-text-weight-semibold">Transformador Nº {{ transformer.id }}</div>
                                <b-field v-if="electricLines.can.update">
                                    <b-select placeholder="" icon="bolt" icon-pack="fas" v-model="electricLineSelected" @input="setTransformerElectricLine(transformer.id, electricLineSelected)">
                                        <option v-for="electricLine in electricLines.electricLine" :value="electricLine.id">{{ electricLine.id }}</option>
                                    </b-select>
                                </b-field>
                                <div class="columns">
                                    <div class="column">
                                        <div class="has-text-weight-normal is-size-7">Tensión primaria</div>
                                        <div class="has-text-weight-normal is-size-6">{{ transformer.primary_tension ? transformer.primary_tension : 'Sin información' }}
                                        </div>
                                        <div class="has-text-weight-normal is-size-7" style="margin-top: 5px;">Tipo fase</div>
                                        <div class="has-text-weight-normal is-size-6">{{ transformer.phase_type ? transformer.phase_type.phase_type : 'Sin información' }}
                                        </div>
                                    </div>
                                    <div class="column">
                                        <div class="has-text-weight-normal is-size-7">Potencia</div>
                                        <div class="has-text-weight-normal is-size-6">{{ transformer.power }}</div>
                                    </div>
                                </div>
                            </div>

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
            'user',
            'pop',
            'bodyBackground',
            'boxBackground',
            'primaryText',
            'secondaryText',
            'darkMode'
        ],
        data() {
            return {
                electricLines: Array,
                electricLineSelected: Number
            }
        },
        mounted() {
            this.getElectricLines()
        },
        computed: {
        },
        methods: {
            // APIs
            getElectricLines() {
                axios.get(`/api/electricLines/${this.pop.id}?api_token=${this.user.api_token}`)
                .then((response) => {
                    this.electricLines = response.data
                    // console.log(response.data)
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Líneas Eléctricas: ' + error);
                });
            },

            setTransformerElectricLine(transformer_id, electricLine_id) {
                axios.put(`/api/transformers/${transformer_id}?api_token=${this.user.api_token}&electric_line_id=${electricLine_id}`)
                .then((response) => {
                    // console.log(response)
                    this.getElectricLines()
                })
            }
        }
    }
</script>
