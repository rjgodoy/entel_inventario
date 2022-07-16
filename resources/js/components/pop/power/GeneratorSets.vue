<!-- ESTE COMPONENTE ES EXCLUSIVAMENTE PARA LOS MARGENES DE LA VISTA DEL POP, NO PARA USO EN EL CAPACITY PLANNING, YA QUE EN ESA VISTA MUESTRA UN SOLO EQUIPO EN UN MODAL-->
<template>
    <section class=""> 

        <div class="column" v-if="canEditGeneratorSets">
            <b-dropdown aria-role="list" class="is-pulled-right" position="is-bottom-left">
                <button class="button is-default is-small" slot="trigger" slot-scope="{ active }">
                    <span><font-awesome-icon :icon="['fas', 'ellipsis-v']" /></span>
                </button>
                <b-dropdown-item aria-role="listitem" class="is-size-6" @click="isNewGeneratorSetModalActive = true">
                    <div class="media">
                        <font-awesome-icon class="media-left" :icon="['fas', 'plus']" />
                        <div class="media-content">
                            <h3>Nuevo Grupo Electrógeno</h3>
                        </div>
                    </div>
                </b-dropdown-item>
            </b-dropdown>
        </div>


        <div class="" v-if="generatorSets.length"> 
            <div class="" v-for="generatorSet in generatorSets" :key="generatorSet.id">
                <div class="columns">
                    <!-- <div class="column is-2"></div> -->
                    <generator-set class="column" 
                        :generatorSet="generatorSet"
                        :canEditGeneratorSets="canEditGeneratorSets"
                        :user="user"
                        :pop="pop"/>
                    <!-- <div class="column is-2"></div> -->
                </div>
            </div>
        </div>
        <div class="has-text-centered" v-if="!generatorSets.length">
            <div class="is-size-4 has-text-weight-light has-text-grey">No hay grupos electrógenos registrados en este POP</div>
        </div>

        <b-modal :active.sync="isNewGeneratorSetModalActive"
            has-modal-card
            trap-focus
            aria-role="dialog"
            aria-modal>
            <modal-new-generator-set 
            :user="user"
            :pop="pop"
            :room="pop.rooms[0]"
            />
        </b-modal>
    </section>

    
</template>

<script>
    export default {
        components: {
            GeneratorSet: () => import(/* webpackChunkName: "chunks/pop/power/generatorSet"*/'./GeneratorSet'),
            ModalNewGeneratorSet: () => import(/* webpackChunkName: "chunks/capacity/modals/new/newGeneratorSet"*/'../../capacity/modals/new/ModalNewGeneratorSet'),
        },

        props : [
            'user',
            'pop'
        ],

        data() {
            return {
                generatorSets: Array,
                canEditGeneratorSets: null,
                isNewGeneratorSetModalActive: false
            }
        },
        
        mounted() {
            this.getGeneratorSets()
        },

        computed: {
        },

        created() {
            this.$eventBus.$on('new-generator-set', this.getGeneratorSets)
        },

        methods: {
            getGeneratorSets() {
                axios.get(`/api/generatorSets/${this.pop.id}`)
                .then((response) => {
                    this.generatorSets = response.data.generatorSets
                    this.canEditGeneratorSets = response.data.can.update
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Plantas Rectificadoras: ' + error);
                });
            }
        }
    }
</script>
