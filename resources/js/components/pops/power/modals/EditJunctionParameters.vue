<template>
    <div class="modal-card">
        <header class="modal-card-head has-text-centered">
            <p class="modal-card-title has-text-weight-bold">Edición de mediciones</p>
        </header>
        <section class="modal-card-body">
            <div class="level" v-if="junction.latest_measurement">
                <div class="level-item">
                    <div class="has-text-centered">
                        <div class="is-size-6 has-text-weight-semibold has-text-centered">Fase R</div>
                        <div class="">
                            <div class="control has-icons-right">
                                <input class="input" type="number" v-model="faseR">
                                <span class="icon is-small is-right">
                                    <span>A</span>
                                </span>
                            </div>
                        </div>
                        <div class="has-text-weight-normal is-size-6">
                            {{ faseR * 220 | numeral(0,0) }} 
                            <span class="is-size-7">W</span>
                        </div>
                    </div>
                </div>

                <div class="level-item">
                    <div class="has-text-centered">
                        <div class="is-size-6 has-text-weight-semibold has-text-centered">Fase S</div>
                        <div class="">
                            <div class="control has-icons-right">
                                <input class="input" type="number" v-model="faseS">
                                <span class="icon is-small is-right">
                                    <span>A</span>
                                </span>
                            </div>
                        </div>
                        <div class="has-text-weight-normal is-size-6">
                            {{ faseS * 220 | numeral(0,0) }} 
                            <span class="is-size-7">W</span>
                        </div>
                    </div>
                </div>
                <div class="level-item">
                    <div class="has-text-centered">
                        <div class="is-size-6 has-text-weight-semibold has-text-centered">Fase T</div>
                        <div class="">
                            <div class="control has-icons-right">
                                <input class="input" type="number" v-model="faseT">
                                <span class="icon is-right">
                                    <span>A</span>
                                </span>
                            </div>
                        </div>
                        <div class="has-text-weight-normal is-size-6">
                            {{ faseT * 220 | numeral(0,0) }} 
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
        components: {
        },
        props : [
            'user',
            'junction',
        ],
        data() {
            return {
                faseR: this.junction.latest_measurement.r_measure,
                faseS: this.junction.latest_measurement.s_measure,
                faseT: this.junction.latest_measurement.t_measure
            }
        },
        computed: {            
        },

        watch: {

        },

        created() {
        },

        mounted() {
        },

        methods: {
            save() {
                let params = {
                    'api_token': this.user.api_token
                }
                axios.get(`/api/junctions/${this.junction.id}?api_token=${this.user.api_token}`)
                .then((response) => {
                    console.log(response)
                })
            },
        }
    }
</script>
