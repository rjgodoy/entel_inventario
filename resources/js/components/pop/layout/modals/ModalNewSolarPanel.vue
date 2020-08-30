<template>
    <div class="modal-card" style="width: 800px;">
        <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
                <p class="modal-card-title">Registrar Paneles Solares</p>
            </header>

            <section class="modal-card-body">
                <div class="columns is-multiline">
                    <div class="column is-6">
                        <b-field label="Capacidad unitaria paneles FV">
                            <b-input
                                type="unit_capacity_group"
                                v-model="unit_capacity_group"
                                placeholder="Capacidad unitaria paneles FV"
                                required>
                            </b-input>
                        </b-field>
                    </div>
                    <div class="column is-6">
                        <b-field label="Cantidad paneles FV">
                            <b-input
                                type="quantity_group"
                                v-model="quantity_group"
                                placeholder="Cantidad paneles FV"
                                required>
                            </b-input>
                        </b-field>
                    </div>
                </div>
            </section>

            <footer class="modal-card-foot">
                <button class="button" type="button" @click="$parent.close()">Close</button>
                <button class="button is-link">Registrar</button>
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
                unit_capacity: null,
                quantity: null
            }
        },

        watch: {

        },

        created() {
        },

        mounted() {
           
        },

        methods: {

        }
    }
</script>
