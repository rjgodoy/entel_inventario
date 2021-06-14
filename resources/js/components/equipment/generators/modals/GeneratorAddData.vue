<template>
    <div class="modal-card" style="min-width: 720px; height: 620px">
        <header class="modal-card-head has-text-centered">
            <div class="modal-card-title">
                <div class="is-size-4 has-text-weight-semibold">Agregar datos<br/></div>
            </div>
        </header>

        <section class="modal-card-body">
            <div class="p-4">
                <div class="columns is-multiline">
                    <div class="column is-3">
                        <b-field label="Horometro (horas)">
                            <b-input v-model="hourmeter"></b-input>
                        </b-field>
                    </div>
                    <div class="column is-3">
                        <b-field label="Nivel combustible (litros)">
                            <b-input v-model="fuel_level"></b-input>
                        </b-field>
                    </div>
                    <div class="column is-6">
                        <b-field label="Fecha">
                            <b-datepicker
                                placeholder="Click to select..."
                                v-model="date"
                                icon-pack="fas"
                                icon-prev="chevron-left"
                                icon-next="chevron-right"
                                :first-day-of-week="1"
                                :max-date="new Date()">
                            </b-datepicker>
                        </b-field>
                    </div>
                </div>
                <b-button :disabled="canSave" @click="registerData()">Guardar</b-button>
            </div>

        </section>

        <footer class="modal-card-foot">
            <button class="button" type="button" @click="$parent.close()">Cerrar</button>
            <!-- <button class="button is-primary">Guardar</button> -->
        </footer>
    </div>
</template>

<script>    
    export default {
        props : [
            'generator'
        ],

        data() {
            return {
                date: new Date(),
                hourmeter: 0,
                fuel_level: 0
            }
        },

        computed: {
            canSave() {
                return !this.hourmeter || !this.fuel_level ? true : false;
            }
        },

        mounted() {
            console.log(this.generator.g_model && this.generator.g_model.g_fuel_pond.capacity)
        },

        methods: {
            registerData() {
                let params = {
                    'date': this.date,
                    'hourmeter': this.hourmeter,
                    'fuel_level': this.fuel_level,
                    'fuel_level_percentage': this.generator.g_model ? this.fuel_level / this.generator.g_model.g_fuel_pond.capacity : 0,
                    'fuel_consumption': 0,
                    'hourmeter_consumption': 0
                }

                axios.post(`/api/createGenValData/${this.generator.id}`, params)
                .then(response => {
                    console.log(response)
                    this.$emit('loadchart')
                    this.$parent.close()
                })
            }
        }
    }
</script>
