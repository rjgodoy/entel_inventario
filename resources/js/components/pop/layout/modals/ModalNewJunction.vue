<template>
    <div class="modal-card">
        <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
                <p class="modal-card-title">Registrar Empalme</p>
            </header>

            <section class="modal-card-body">
                <div class="field columns">
                    <div class="column is-5">
                        <div class="field">
                            <div class="is-size-6 has-text-weight-normal field">Compañía Eléctrica</div>
                            <b-select placeholder="Compañía Eléctrica" v-model="electric_company_id">
                                <option
                                    v-for="option in electricCompanies"
                                    :value="option.id"
                                    :key="option.id">
                                    {{ option.name }}
                                </option>
                            </b-select>
                            {{ electric_company_id }}
                        </div>
                    </div>
                </div>
            </section>

            <footer class="modal-card-foot">
                <button class="button" type="button" @click="$parent.close()">Close</button>
                <button class="button is-link" @click="newJunction()">Registrar</button>
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
            'pop',
            'user'
        ],

        data() {
            return {
                electricCompanies: Array,
                electric_company_id: null
            }
        },

        mounted() {
           this.getElectricCompanies()
        },

        methods: {
            getElectricCompanies() {
                axios.get(`/api/electricCompanies`)
                .then(response => {
                    this.electricCompanies = response.data.electricCompanies
                })
            },

            newJunction() {
                let params = {
                    'pop_id': this.pop.id,
                    'electric_company_id': this.electric_company_id
                }

                axios.post(`/api/junctions`, params)
                .then(response => {
                    console.log(response.data)
                    // this.getPopPowerRectifiersWithoutRoom()
                    this.$eventBus.$emit('new-junction')
                    this.$parent.close()
                })
            },
        }
    }
</script>
