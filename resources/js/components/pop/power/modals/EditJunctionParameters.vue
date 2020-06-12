<template>
    <div class="modal-card">
        <header class="modal-card-head has-text-centered">
            <p class="modal-card-title has-text-weight-bold">Edición de mediciones</p>
        </header>
        <section class="modal-card-body">
            <div class="level">
                <div class="level-item">
                    <div class="has-text-centered">
                        <div class="is-size-6 has-text-weight-semibold has-text-centered">Fase R</div>
                        <div class="">
                            <div class="control has-icons-right">
                                <input class="input" type="number" v-model="phaseR">
                                <span class="icon is-small is-right">
                                    <span>A</span>
                                </span>
                            </div>
                        </div>
                        <div class="has-text-weight-normal is-size-6">
                            {{ phaseR ? phaseR * 220 : 0 | numeral(0,0) }} 
                            <span class="is-size-7">W</span>
                        </div>
                    </div>
                </div>

                <div class="level-item">
                    <div class="has-text-centered">
                        <div class="is-size-6 has-text-weight-semibold has-text-centered">Fase S</div>
                        <div class="">
                            <div class="control has-icons-right">
                                <input class="input" type="number" v-model="phaseS">
                                <span class="icon is-small is-right">
                                    <span>A</span>
                                </span>
                            </div>
                        </div>
                        <div class="has-text-weight-normal is-size-6">
                            {{ phaseS ? phaseS * 220 : 0 | numeral(0,0) }} 
                            <span class="is-size-7">W</span>
                        </div>
                    </div>
                </div>
                <div class="level-item">
                    <div class="has-text-centered">
                        <div class="is-size-6 has-text-weight-semibold has-text-centered">Fase T</div>
                        <div class="">
                            <div class="control has-icons-right">
                                <input class="input" type="number" v-model="phaseT">
                                <span class="icon is-right">
                                    <span>A</span>
                                </span>
                            </div>
                        </div>
                        <div class="has-text-weight-normal is-size-6">
                            {{ phaseT ? phaseT * 220 : 0 | numeral(0,0) }} 
                            <span class="is-size-7">W</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer class="modal-card-foot">
            <button class="button" type="button" @click="$parent.close()">Close</button>
            <button class="button is-primary" @click="save">Guardar</button>
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
                phaseR: this.junction.latest_measurement ? this.junction.latest_measurement.r_measure : 0,
                phaseS: this.junction.latest_measurement ? this.junction.latest_measurement.s_measure : 0,
                phaseT: this.junction.latest_measurement ? this.junction.latest_measurement.t_measure : 0
            }
        },

        methods: {
            save() {
                const config = {
                    headers: { 'content-type': 'application/json' }
                }

                let params = {
                    'api_token': this.user.api_token,
                    'pop_id': this.junction.pop_id,
                    'user_id': this.user.id,
                    'phase_r': this.phaseR,
                    'phase_s': this.phaseS,
                    'phase_t': this.phaseT,
                }
                axios.put(`/api/junctions/${this.junction.id}`, params, config)
                .then((response) => {
                    // console.log(response)
                })
                this.$parent.close()
                this.$eventBus.$emit('junction-measurements-updated');
                
            },
        }
    }
</script>
