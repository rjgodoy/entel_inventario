<template>
    <div class="modal-card" style="width: 800px;">
        <header class="modal-card-head has-text-centered" style="background: rgba(255,255,255,0);">
            <p class="modal-card-title has-text-white has-text-weight-bold">GRUPO ELECTROGENO</p>
        </header>
        <section class="modal-card-body" style="background: rgba(255,255,255,0);">
            <generator-set
                :generatorSet="generatorSet"
                :pop="pop"
                :user="user"
                :canEditGeneratorSets="canEditGeneratorSets"
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
            GeneratorSet: () => import(/* webpackChunkName: "chunks/pop/power/generatorSet"*/'../../pop/power/GeneratorSet')
        },
        props : [
            'pop',
            'canEditGeneratorSets',
            'user',
            'generatorSet'
        ],
        data() {
            return {
                
            }
        },

        created() {
            this.$eventBus.$on('generator-set-deleted', this.close)
        },

        mounted() {
        },

        methods: {
            close() {
                this.$parent.close()
            }
        },

        beforeDestroy() {
            this.$eventBus.$off('generator-set-deleted')
        }
    }
</script>
