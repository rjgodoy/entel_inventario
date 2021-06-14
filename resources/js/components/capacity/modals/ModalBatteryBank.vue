<template>
    <div class="modal-card">
        <header class="modal-card-head has-text-centered" style="background: rgba(0,0,0,0)">
            <p class="modal-card-title has-text-white has-text-weight-bold">BANCO DE BATERÍAS</p>
        </header>
        <section class="modal-card-body" style="background: rgba(0,0,0,0)">
            <battery-bank
                :batteryBank="batteryBank"
                :pop="pop"
                :canEdit="canEdit"
                :user="user"
            />
        </section>
        <!-- <footer class="modal-card-foot" style="background: rgba(0,0,0,0)"> -->
            <!-- <button class="button" type="button" @click="$parent.close()">Cerrar</button> -->
            <!-- <button class="button is-primary">Guardar</button> -->
        <!-- </footer> -->
    </div>
</template>

<script>    
    export default {
        components: {
            BatteryBank: () => import(/* webpackChunkName: "chunks/pop/power/batteryBank"*/'../../pop/power/BatteryBank')
        },
        props : [
            'pop',
            'canEdit',
            'batteryBank',
            'user'
        ],
        data() {
            return {
                
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
