<!-- ESTE COMPONENTE ES EXCLUSIVAMENTE PARA LOS MARGENES DE LA VISTA DEL POP, NO PARA USO EN EL CAPACITY PLANNING, YA QUE EN ESA VISTA MUESTRA UN SOLO EQUIPO EN UN MODAL-->
<template>
    <section class="" v-if="generatorSets.length">  
        <div class="" v-for="generatorSet in generatorSets">
            
            <div class="columns">
                <div class="column is-2"></div>
                <generator-set class="column is-8" 
                    :generatorSet="generatorSet"
                    :canEditGeneratorSets="canEditGeneratorSets"
                    :user="user"
                    :pop="pop"/>
                <div class="column is-2"></div>
            </div>

        </div>
    </section>
</template>

<script>
    export default {
        components: {
            GeneratorSet: () => import(/* webpackChunkName: "chunks/pop/power/generatorSet"*/'./GeneratorSet'),
        },

        props : [
            'user',
            'pop'
        ],

        data() {
            return {
                generatorSets: Array,
                canEditGeneratorSets: null
            }
        },
        
        mounted() {
            this.getGeneratorSets()
        },

        computed: {
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
