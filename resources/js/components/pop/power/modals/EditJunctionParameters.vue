<template>
    <div class="modal-card">
        <header class="modal-card-head has-text-centered">
            <p class="modal-card-title has-text-weight-bold">Edición de Parámetros de Tablero</p>
        </header>

        <section class="modal-card-body">
            <div class="block">
                <div class="block has-text-centered">
                    <div class="has-text-weight-semibold is-size-4">Protecciones</div>
                </div>
                <div class="columns">
                    
                    <div class="column">
                        <b-field label="PROTECCIONES A" label-position="on-border" class="tile">
                            <div class="tile box is-shadowless" style="border: solid 0.1rem #cccccc">
                                <div class="columns">
                                    <div class="column">
                                        <div class="has-text-centered">
                                            <div class="is-size-6 has-text-weight-semibold has-text-centered">Nominal (A)</div>
                                            <div class="">
                                                <div class="control has-icons-right">
                                                    <input class="input" type="number" v-model="nominal_a">
                                                    <span class="icon is-small is-right">
                                                        <span>A</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <!-- <div class="has-text-weight-normal is-size-6">
                                                {{ nominal_a ? nominal_a * 220 : 0 | numeral(0,0) }} 
                                                <span class="is-size-7">W</span>
                                            </div> -->
                                        </div>
                                    </div>

                                    <div class="column">
                                        <div class="has-text-centered">
                                            <div class="is-size-6 has-text-weight-semibold has-text-centered">Regulada (A)</div>
                                            <div class="">
                                                <div class="control has-icons-right">
                                                    <input class="input" type="number" v-model="regulada_a">
                                                    <span class="icon is-small is-right">
                                                        <span>A</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <!-- <div class="has-text-weight-normal is-size-6">
                                                {{ regulada_a ? regulada_a * 220 : 0 | numeral(0,0) }} 
                                                <span class="is-size-7">W</span>
                                            </div> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-field>
                    </div>

                    <div class="column">
                        <b-field label="PROTECCIONES B" label-position="on-border" class="tile">
                            <div class="tile box is-shadowless" style="border: solid 0.1rem #cccccc">
                                <div class="columns">
                                    <div class="column">
                                        <div class="has-text-centered">
                                            <div class="is-size-6 has-text-weight-semibold has-text-centered">Nominal (A)</div>
                                            <div class="">
                                                <div class="control has-icons-right">
                                                    <input class="input" type="number" v-model="nominal_b">
                                                    <span class="icon is-right">
                                                        <span>A</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <!-- <div class="has-text-weight-normal is-size-6">
                                                {{ nominal_b ? nominal_b * 220 : 0 | numeral(0,0) }} 
                                                <span class="is-size-7">W</span>
                                            </div> -->
                                        </div>
                                    </div>

                                    <div class="column">
                                        <div class="has-text-centered">
                                            <div class="is-size-6 has-text-weight-semibold has-text-centered">Regulada (A)</div>
                                            <div class="">
                                                <div class="control has-icons-right">
                                                    <input class="input" type="number" v-model="regulada_b">
                                                    <span class="icon is-right">
                                                        <span>A</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <!-- <div class="has-text-weight-normal is-size-6">
                                                {{ regulada_b ? regulada_b * 220 : 0 | numeral(0,0) }} 
                                                <span class="is-size-7">W</span>
                                            </div> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-field>
                    </div>

                </div>
            </div>

            <hr/>

            <div class="block">
                <div class="block has-text-centered">
                    <div class="has-text-weight-semibold is-size-4">Mediciones</div>
                </div>

                <b-field label="MEDICIONES A" label-position="on-border" class="tile" style="padding-bottom: 12px">
                    <div class="tile box is-shadowless" style="border: solid 0.1rem #cccccc">
                        <div class="tile is-vertical">
                            <!-- Medicion R en Amp -> A -->
                            <div class="tile level">
                                <div class="tile is-parent level-item">
                                    <div class="tile is-child has-text-centered">
                                        <div class="is-size-6 has-text-weight-semibold has-text-centered">Fase R (A)</div>
                                        <div class="">
                                            <div class="control has-icons-right">
                                                <input class="input" type="number" v-model="RA_amp_measure">
                                                <span class="icon is-small is-right">
                                                    <span>A</span>
                                                </span>
                                            </div>
                                        </div>
                                        <!-- <div class="has-text-weight-normal is-size-6">
                                            {{ RA_amp_measure ? RA_amp_measure * 220 : 0 | numeral(0,0) }} 
                                            <span class="is-size-7">W</span>
                                        </div> -->
                                    </div>
                                </div>
                                <div class="tile is-parent level-item">
                                    <div class="tile is-child has-text-centered">
                                        <div class="is-size-6 has-text-weight-semibold has-text-centered">Fase S (A)</div>
                                        <div class="">
                                            <div class="control has-icons-right">
                                                <input class="input" type="number" v-model="SA_amp_measure">
                                                <span class="icon is-small is-right">
                                                    <span>A</span>
                                                </span>
                                            </div>
                                        </div>
                                        <!-- <div class="has-text-weight-normal is-size-6">
                                            {{ SA_amp_measure ? SA_amp_measure * 220 : 0 | numeral(0,0) }} 
                                            <span class="is-size-7">W</span>
                                        </div> -->
                                    </div>
                                </div>
                                <div class="tile is-parent level-item">
                                    <div class="tile is-child has-text-centered">
                                        <div class="is-size-6 has-text-weight-semibold has-text-centered">Fase T (A)</div>
                                        <div class="">
                                            <div class="control has-icons-right">
                                                <input class="input" type="number" v-model="TA_amp_measure">
                                                <span class="icon is-right">
                                                    <span>A</span>
                                                </span>
                                            </div>
                                        </div>
                                        <!-- <div class="has-text-weight-normal is-size-6">
                                            {{ TA_amp_measure ? TA_amp_measure * 220 : 0 | numeral(0,0) }} 
                                            <span class="is-size-7">W</span>
                                        </div> -->
                                    </div>
                                </div>
                            </div>

                            <!-- Medicion R en Volt -> A -->
                            <div class="tile level">
                                <div class="tile is-parent level-item">
                                    <div class="tile is-child has-text-centered">
                                        <div class="is-size-6 has-text-weight-semibold has-text-centered">Fase R (V)</div>
                                        <div class="">
                                            <div class="control has-icons-right">
                                                <input class="input" type="number" v-model="RA_volt_measure">
                                                <span class="icon is-small is-right">
                                                    <span>V</span>
                                                </span>
                                            </div>
                                        </div>
                                        <!-- <div class="has-text-weight-normal is-size-6">
                                            {{ RA_volt_measure ? RA_volt_measure * 220 : 0 | numeral(0,0) }} 
                                            <span class="is-size-7">W</span>
                                        </div> -->
                                    </div>
                                </div>

                                <div class="tile is-parent level-item">
                                    <div class="tile is-child has-text-centered">
                                        <div class="is-size-6 has-text-weight-semibold has-text-centered">Fase S (V)</div>
                                        <div class="">
                                            <div class="control has-icons-right">
                                                <input class="input" type="number" v-model="SA_volt_measure">
                                                <span class="icon is-small is-right">
                                                    <span>V</span>
                                                </span>
                                            </div>
                                        </div>
                                        <!-- <div class="has-text-weight-normal is-size-6">
                                            {{ SA_volt_measure ? SA_volt_measure * 220 : 0 | numeral(0,0) }} 
                                            <span class="is-size-7">W</span>
                                        </div> -->
                                    </div>
                                </div>
                                <div class="tile is-parent level-item">
                                    <div class="tile is-child has-text-centered">
                                        <div class="is-size-6 has-text-weight-semibold has-text-centered">Fase T (V)</div>
                                        <div class="">
                                            <div class="control has-icons-right">
                                                <input class="input" type="number" v-model="TA_volt_measure">
                                                <span class="icon is-right">
                                                    <span>V</span>
                                                </span>
                                            </div>
                                        </div>
                                        <!-- <div class="has-text-weight-normal is-size-6">
                                            {{ TA_volt_measure ? TA_volt_measure * 220 : 0 | numeral(0,0) }} 
                                            <span class="is-size-7">W</span>
                                        </div> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-field>
            
                <b-field label="MEDICIONES B" label-position="on-border" class="tile">
                    <div class="tile box is-shadowless" style="border: solid 0.1rem #cccccc">
                        <div class="tile is-vertical">
                            <!-- Medicion R en Amp -> B -->
                            <div class="tile level">
                                <div class="tile is-parent level-item">
                                    <div class="tile is-child has-text-centered">
                                        <div class="is-size-6 has-text-weight-semibold has-text-centered">Fase R (A)</div>
                                        <div class="">
                                            <div class="control has-icons-right">
                                                <input class="input" type="number" v-model="RB_amp_measure">
                                                <span class="icon is-small is-right">
                                                    <span>A</span>
                                                </span>
                                            </div>
                                        </div>
                                        <!-- <div class="has-text-weight-normal is-size-6">
                                            {{ RB_amp_measure ? RB_amp_measure * 220 : 0 | numeral(0,0) }} 
                                            <span class="is-size-7">W</span>
                                        </div> -->
                                    </div>
                                </div>

                                <div class="tile is-parent level-item">
                                    <div class="tile is-child has-text-centered">
                                        <div class="is-size-6 has-text-weight-semibold has-text-centered">Fase S (A)</div>
                                        <div class="">
                                            <div class="control has-icons-right">
                                                <input class="input" type="number" v-model="SB_amp_measure">
                                                <span class="icon is-small is-right">
                                                    <span>A</span>
                                                </span>
                                            </div>
                                        </div>
                                        <!-- <div class="has-text-weight-normal is-size-6">
                                            {{ SB_amp_measure ? SB_amp_measure * 220 : 0 | numeral(0,0) }} 
                                            <span class="is-size-7">W</span>
                                        </div> -->
                                    </div>
                                </div>
                                <div class="tile is-parent level-item">
                                    <div class="tile is-child has-text-centered">
                                        <div class="is-size-6 has-text-weight-semibold has-text-centered">Fase T (A)</div>
                                        <div class="">
                                            <div class="control has-icons-right">
                                                <input class="input" type="number" v-model="TB_amp_measure">
                                                <span class="icon is-right">
                                                    <span>A</span>
                                                </span>
                                            </div>
                                        </div>
                                        <!-- <div class="has-text-weight-normal is-size-6">
                                            {{ TB_amp_measure ? TB_amp_measure * 220 : 0 | numeral(0,0) }} 
                                            <span class="is-size-7">W</span>
                                        </div> -->
                                    </div>
                                </div>
                            </div>

                            <!-- Medicion R en Volt -> B -->
                            <div class="tile level">
                                <div class="tile is-parent level-item">
                                    <div class="tile is-child has-text-centered">
                                        <div class="is-size-6 has-text-weight-semibold has-text-centered">Fase R (V)</div>
                                        <div class="">
                                            <div class="control has-icons-right">
                                                <input class="input" type="number" v-model="RB_volt_measure">
                                                <span class="icon is-small is-right">
                                                    <span>V</span>
                                                </span>
                                            </div>
                                        </div>
                                        <!-- <div class="has-text-weight-normal is-size-6">
                                            {{ RB_volt_measure ? RB_volt_measure * 220 : 0 | numeral(0,0) }} 
                                            <span class="is-size-7">W</span>
                                        </div> -->
                                    </div>
                                </div>

                                <div class="tile is-parent level-item">
                                    <div class="tile is-child has-text-centered">
                                        <div class="is-size-6 has-text-weight-semibold has-text-centered">Fase S (V)</div>
                                        <div class="">
                                            <div class="control has-icons-right">
                                                <input class="input" type="number" v-model="SB_volt_measure">
                                                <span class="icon is-small is-right">
                                                    <span>V</span>
                                                </span>
                                            </div>
                                        </div>
                                        <!-- <div class="has-text-weight-normal is-size-6">
                                            {{ SB_volt_measure ? SB_volt_measure * 220 : 0 | numeral(0,0) }} 
                                            <span class="is-size-7">W</span>
                                        </div> -->
                                    </div>
                                </div>
                                <div class="tile is-parent level-item">
                                    <div class="tile is-child has-text-centered">
                                        <div class="is-size-6 has-text-weight-semibold has-text-centered">Fase T (V)</div>
                                        <div class="">
                                            <div class="control has-icons-right">
                                                <input class="input" type="number" v-model="TB_volt_measure">
                                                <span class="icon is-right">
                                                    <span>V</span>
                                                </span>
                                            </div>
                                        </div>
                                        <!-- <div class="has-text-weight-normal is-size-6">
                                            {{ TB_volt_measure ? TB_volt_measure * 220 : 0 | numeral(0,0) }} 
                                            <span class="is-size-7">W</span>
                                        </div> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-field>
            </div>
        </section>

        

        <footer class="modal-card-foot">
            <button class="button" type="button" @click="$parent.close()">Close</button>
            <button class="button is-link" @click="save">Guardar</button>
        </footer>
    </div>
</template>

<script>    
    export default {
        props : [
            'user',
            'junction',
        ],

        data() {
            return {
                nominal_a: this.junction.latest_protection ? this.junction.latest_protection.nominal_a : 0,
                regulada_a: this.junction.latest_protection ? this.junction.latest_protection.regulada_a : 0,
                nominal_b: this.junction.latest_protection ? this.junction.latest_protection.nominal_b : 0,
                regulada_b: this.junction.latest_protection ? this.junction.latest_protection.regulada_b : 0,

                RA_amp_measure: this.junction.latest_measurement ? this.junction.latest_measurement.r_a_amp_measure : 0,
                SA_amp_measure: this.junction.latest_measurement ? this.junction.latest_measurement.s_a_amp_measure : 0,
                TA_amp_measure: this.junction.latest_measurement ? this.junction.latest_measurement.t_a_amp_measure : 0,
                RB_amp_measure: this.junction.latest_measurement ? this.junction.latest_measurement.r_b_amp_measure : 0,
                SB_amp_measure: this.junction.latest_measurement ? this.junction.latest_measurement.s_b_amp_measure : 0,
                TB_amp_measure: this.junction.latest_measurement ? this.junction.latest_measurement.t_b_amp_measure : 0,
                RA_volt_measure: this.junction.latest_measurement ? this.junction.latest_measurement.r_a_volt_measure : 0,
                SA_volt_measure: this.junction.latest_measurement ? this.junction.latest_measurement.s_a_volt_measure : 0,
                TA_volt_measure: this.junction.latest_measurement ? this.junction.latest_measurement.t_a_volt_measure : 0,
                RB_volt_measure: this.junction.latest_measurement ? this.junction.latest_measurement.r_b_volt_measure : 0,
                SB_volt_measure: this.junction.latest_measurement ? this.junction.latest_measurement.s_b_volt_measure : 0,
                TB_volt_measure: this.junction.latest_measurement ? this.junction.latest_measurement.t_b_volt_measure : 0,

                useFactor: this.junction.use_factor
            }
        },

        methods: {
            save() {
                const config = {
                    headers: { 'content-type': 'application/json' }
                }

                let params = {
                    'pop_id': this.junction.pop_id,
                    'user_id': this.user.id,

                    'nominal_a': this.nominal_a,
                    'regulada_a': this.regulada_a,
                    'nominal_b': this.nominal_b,
                    'regulada_b': this.regulada_b,

                    'r_a_amp_measure': this.RA_amp_measure,
                    's_a_amp_measure': this.SA_amp_measure,
                    't_a_amp_measure': this.TA_amp_measure,
                    'r_b_amp_measure': this.RB_amp_measure,
                    's_b_amp_measure': this.SB_amp_measure,
                    't_b_amp_measure': this.TB_amp_measure,
                    'r_a_volt_measure': this.RA_volt_measure,
                    's_a_volt_measure': this.SA_volt_measure,
                    't_a_volt_measure': this.TA_volt_measure,
                    'r_b_volt_measure': this.RB_volt_measure,
                    's_b_volt_measure': this.SB_volt_measure,
                    't_b_volt_measure': this.TB_volt_measure,
                    'use_factor': this.useFactor
                }

                axios.put(`/api/junctions/${this.junction.id}`, params, config)
                .then((response) => {
                    console.log(response)
                })
                this.$parent.close()
                this.$eventBus.$emit('junction-measurements-updated');
                
            },
        }
    }
</script>
