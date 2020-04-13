<template>
    <div class="modal-card" style="width: 800px;">
        <header class="modal-card-head has-text-centered" style="background: rgba(0,0,0,0)">
            <p class="modal-card-title has-text-white has-text-weight-bold">Grupo Electrógeno</p>
        </header>
        <section class="modal-card-body" style="background: rgba(0,0,0,0)">
            <generator-sets
                :user="user"
                :pop="pop"
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
            GeneratorSets: () => import('../../pops/power/GeneratorSets')
        },
        props : [
            'user',
            'pop'
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
