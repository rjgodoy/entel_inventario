<template>
    <div class="modal-card" style="width: 800px;">
        <header class="modal-card-head has-text-centered" style="background: rgba(0,0,0,0)">
            <p class="modal-card-title has-text-white has-text-weight-bold">Planta Rectificadora</p>
        </header>
        <section class="modal-card-body" style="background: rgba(0,0,0,0)">
            <power-rectifier
                :powerRectifier="powerRectifier"
                :pop="pop"
                :can="can"
                :user="user"
            />
        </section>
        <!-- <footer class="modal-card-foot" style="background: rgba(0,0,0,0)"> -->
            <!-- <button class="button" type="button" @click="$parent.close()">Close</button> -->
            <!-- <button class="button is-primary">Guardar</button> -->
        <!-- </footer> -->
    </div>
</template>

<script>    
    export default {
        components: {
            PowerRectifier: () => import(/* webpackChunkName: "chunks/pop/power/powerRectifier"*/'../../../pop/power/PowerRectifier')
        },
        props : [
            'pop',
            'can',
            'powerRectifier',
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
