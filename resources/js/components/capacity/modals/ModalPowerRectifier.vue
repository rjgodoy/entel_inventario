<template>
    <div class="modal-card" style="width: 800px;">
        <header class="modal-card-head has-text-centered" style="background: rgba(0,0,0,0)">
            <p class="modal-card-title has-text-white has-text-weight-bold">PLANTA RECTIFICADORA</p>
        </header>
        <section class="modal-card-body" style="background: rgba(0,0,0,0)">
            <power-rectifier
                :powerRectifier="powerRectifier"
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
            PowerRectifier: () => import(/* webpackChunkName: "chunks/pop/power/powerRectifier"*/'../../pop/power/PowerRectifier')
        },
        props : [
            'pop',
            'canEdit',
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
            this.$eventBus.$on('power-rectifier-deleted', this.close)
        },

        mounted() {
        },

        methods: {
            close() {
                this.$parent.close()
            }
        },

        beforeDestroy() {
            this.$eventBus.$off('power-rectifier-deleted')
        }
    }
</script>
