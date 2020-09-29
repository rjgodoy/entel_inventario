<template>        
    <div class="tile is-child box">
        <div class="columns">
            <div class="column">
                <div class="columns">
                    <div class="column" v-if="!isEditMode">
                        <div class="has-text-weight-light is-size-7" style="margin-top: 5px;">Marca</div>
                        <div class="has-text-weight-semibold is-size-5">{{ newBatteryBankBrand ? newBatteryBankBrand.brand : 'Sin información' }}</div>
                        <div class="has-text-weight-light is-size-7" style="margin-top: 5px;">Modelo</div>
                        <div class="has-text-weight-semibold is-size-6">{{ newBatteryBankBrand ? newBatteryBankBrand.model : 'Sin información' }}</div>
                    </div>
                    <div class="column" v-if="isEditMode">
                        <div class="has-text-weight-light is-size-7" style="margin-top: 5px;">Marca</div>
                        <b-select placeholder="Selecciona..." v-model="newBatteryBankBrand">
                            <option
                                v-for="option in batteryBankBrands"
                                :value="option"
                                :key="option.id">
                                {{ option.brand }} - {{ option.model }}
                            </option>
                        </b-select>
                    </div>

                    <div class="column">
                        <div class="has-text-weight-light is-size-7" style="margin-top: 5px;">Capacidad total</div>
                        <div class="has-text-weight-semibold is-size-5" v-if="!isEditMode">
                            {{ newBatteryBankCapacity | numeral('0,0.0') }} <span class="is-size-7">kW</span>
                        </div>
                        <b-input v-if="isEditMode" type="number" class="has-text-weight-bold is-size-5" v-model="newBatteryBankCapacity"/>
                    </div>

                </div>
            </div>
        </div>

        <div class="field has-text-centered" v-if="canEdit">
            <b-button :type="isEditMode ? 'is-info' : 'is-link is-outlined'" size="is-small" @click="isEditMode=!isEditMode; saveChanges()">
                <font-awesome-icon :icon="['fas', 'edit']"/>
                &nbsp;&nbsp;{{ isEditMode ? 'Modo Edición' : 'Editar parámetros de Grupo' }}
            </b-button>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
        },

        props : [
            'pop',
            'batteryBank',
            'canEdit',
            'user'
        ],

        data() {
            return {
                batteryBankBrands: [],
                newBatteryBankCapacity: this.batteryBank.capacity ? this.batteryBank.capacity : 0,
                newBatteryBankBrand: this.batteryBank.battery_bank_brand_id ? this.batteryBank.battery_bank_brand : null,
                isEditMode: false
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

            saveChanges() {
                if (!this.isEditMode && (
                    this.batteryBank.capacity != this.newBatteryBankCapacity ||
                    this.batteryBank.battery_bank_brand_id != this.newBatteryBankBrand.id
                    )
                ) {
                    let params = {
                        'user_id': this.user.id,
                        'pop_id': this.pop.id,
                        'capacity': parseFloat(this.newBatteryBankCapacity),
                        'battery_bank_brand_id': this.newBatteryBankBrand.id,
                    }
                    console.log(params)
                    axios.put(`/api/batteryBanks/${this.batteryBank.id}`, params)
                    .then(response => {
                        console.log(response.data)
                        this.$eventBus.$emit('power-rectifier-updated');
                    })
                }
            }       
        }
    }
</script>
