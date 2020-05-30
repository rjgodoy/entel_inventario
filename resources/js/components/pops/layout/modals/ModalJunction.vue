<template>
    <div class="modal-card" style="width: 800px;">
        <header class="modal-card-head has-text-centered" style="background: rgba(0,0,0,0)">
            <p class="modal-card-title has-text-white has-text-weight-bold">Empalme</p>
        </header>
        <section class="modal-card-body" style="background: rgba(0,0,0,0)">
            <junction
                :junction="junction"
                :can="can"
                :pop="pop"
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
            Junction: () => import(/* webpackChunkName: "chunks/pop/power/junction"*/'../../../pops/power/Junction')
        },
        props : [
            'pop',
            'can',
            'junction',
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
