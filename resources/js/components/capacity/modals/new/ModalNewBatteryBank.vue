<template>
    <div class="modal-card">
        <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
                <p class="modal-card-title">Nuevo Banco Baterías</p>
            </header>

            <section class="modal-card-body">
                <div class="field columns">
                    <div class="column is-5">
                        <b-field label="Modelo">
                            <b-select placeholder="Modelo" v-model="battery_bank_brand_id">
                                <option
                                    v-for="option in batteryBankBrands"
                                    :value="option.id"
                                    :key="option.id">
                                    {{ option.brand }} {{ option.model }}
                                </option>
                            </b-select>
                        </b-field>
                    </div>
                    <div class="column is-5">
                        <b-field label="Capacidad">
                            <b-input
                                v-model="capacity"
                                placeholder="Capacidad">
                            </b-input>
                        </b-field>
                    </div>
                </div>
            </section>

            <footer class="modal-card-foot">
                <button class="button" type="button" @click="$parent.close()">Cerrar</button>
                <button class="button is-link" @click="newBatteryBank()">Registrar</button>
            </footer>
        </div>
    </div>
</template>

<script>    
    import { library } from "@fortawesome/fontawesome-svg-core";
    import { faTrashAlt as farTrashAlt } from '@fortawesome/free-regular-svg-icons'
    library.add(farTrashAlt);
    export default {
        props : [
            'plane',
            'user'
        ],

        data() {
            return {
                batteryBankBrands: Array,
                battery_bank_brand_id: null,
                capacity: null
            }
        },

        mounted() {
           this.getBatteryBankBrands()
        },

        methods: {
            getBatteryBankBrands() {
                axios.get(`/api/batteryBankBrands`)
                .then(response => {
                    this.batteryBankBrands = response.data.batteryBankBrands
                })
            },

            newBatteryBank() {
                let params = {
                    'plane_id': this.plane.id,
                    'battery_bank_brand_id': this.battery_bank_brand_id,
                    'capacity': parseFloat(this.capacity)
                }

                axios.post(`/api/batteryBanks`, params)
                .then(response => {
                    console.log(response.data)
                    // this.getPopPowerRectifiersWithoutRoom()
                    this.$eventBus.$emit('new-generator-set')
                    this.$parent.close()
                })
            },
        }
    }
</script>
