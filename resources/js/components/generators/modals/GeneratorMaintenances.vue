<template>
    <div class="modal-card" style="width: auto">
        <header class="modal-card-head has-text-centered">
            <div class="modal-card-title">
                <div class="is-size-4 has-text-weight-semibold">Datos generador {{ generator.name }}<br/>
                    <div class="is-size-5 has-text-weight-normal p-2">CRM {{ generator.g_zona.g_sector.name }} - {{ generator.g_zona.zona }} - {{ generator.g_zona.name }}</div>
                </div>
            </div>
        </header>
        <section class="modal-card-body">
            <div class="" v-if="maintances.length">
                <table class="table is-fullwidth is-striped is-hoverable is-bordered">
                    <thead>
                        <tr class="">
                            <th class="is-size-6 has-text-weight-semibold"><abbr title="id">id</abbr></th>
                            <th class="is-size-6 has-text-weight-semibold"><abbr title="Descripción">Descripción</abbr></th>
                            <th class="is-size-6 has-text-weight-semibold"><abbr title="Tipo">Tipo</abbr></th>
                            <th class="is-size-6 has-text-weight-semibold"><abbr title="# Tarea"># Tarea</abbr></th>
                            <th class="is-size-6 has-text-weight-semibold"><abbr title="Fecha">Fecha</abbr></th>
                            <th class="is-size-6 has-text-weight-semibold has-text-centered"><abbr title="Status">Status</abbr></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="" v-for="maintance in maintances">
                            <td>{{ maintance.id }}</td>
                            <td>{{ maintance.description }}</td>
                            <td>{{ maintance.name }}</td>
                            <td>{{ maintance.task_number }}</td>
                            <td>{{ maintance.created }}</td>
                            <td>{{ maintance.code }}</td>
                        </tr>
                    </tbody>
                    
                </table>
            </div>

            <div class="" v-if="!maintances.length">
                <div class="is-size-5 has-text-centered is-vcentered">No tiene registros de mantenciones</div>
            </div>

            <b-loading :is-full-page="false" :active.sync="isLoading" :can-cancel="true"></b-loading>
            
        </section>
        <footer class="modal-card-foot">
            <button class="button" type="button" @click="$parent.close()">Cerrar</button>
            <!-- <button class="button is-primary">Guardar</button> -->
        </footer>
    </div>
</template>

<script>    
    var numeral = require('numeral');
    export default {
        props : [
            'generator',
        ],

        data() {
            return {
                isLoading: false,
                maintances: Array
            }
        },

        computed: {
            
        },

        created() {
        },

        mounted() {
            this.getGeneratorMaintenances()
        },

        methods: {
            getGeneratorMaintenances() {
                axios.get(`/api/getGeneratorMaintenances/${this.generator.id}`)
                .then(response => {
                    this.isLoading = true
                    this.maintances = response.data
                    console.log(response)
                    this.isLoading = false
                })
            }
            
        }
    }
</script>
