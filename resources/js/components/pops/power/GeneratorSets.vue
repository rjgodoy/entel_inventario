<template>
    <section class="" v-if="generatorSets.length">  
        <div class="" v-for="generatorSet in generatorSets">
            
            <div class="columns">
                <div class="column is-2"></div>
                <generator-set class="column is-8" :generatorSet="generatorSet"/>
                <div class="column is-2"></div>
            </div>

        </div>
    </section>
</template>

<script>
    export default {
        components: {
            GeneratorSet: () => import('./GeneratorSet'),
        },
        props : [
            'user',
            'pop'
        ],
        data() {
            return {
                generatorSets: Array
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
                    this.generatorSets = response.data.data
                    // console.log(this.generatorSets)
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Plantas Rectificadoras: ' + error);
                });
            }
        }
    }
</script>
