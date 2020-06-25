<template>
    <section class="" v-if="generatorSets.length">  
        <div class="" v-for="generatorSet in generatorSets">
            
            <div class="columns">
                <div class="column is-2"></div>
                <generator-set class="column is-8" 
                    :generatorSet="generatorSet"
                    :can="can"
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
                can: null
            }
        },
        
        mounted() {
            this.getGeneratorSets()
        },

        computed: {
        },

        methods: {
            getGeneratorSets() {
                axios.get(`/api/generatorSets/${this.pop.id}?api_token=${this.user.api_token}`)
                .then((response) => {
                    this.generatorSets = response.data.generatorSets
                    this.can = response.data.can
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Plantas Rectificadoras: ' + error);
                });
            }
        }
    }
</script>
