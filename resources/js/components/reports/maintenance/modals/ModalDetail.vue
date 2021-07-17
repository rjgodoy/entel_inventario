<template>
    <div class="modal-card" style="width: 800px;">
        <header class="modal-card-head has-text-centered">
            <p class="modal-card-title has-text-weight-bold">Revisión Nº {{ revision.id }} - {{ revision.pop.nombre }}</p>
        </header>
        <section class="modal-card-body">
            <div class="tile is-ancestor">
                <div class="columns is-multiline tile is-parent">
                    <div class="column is-6 tile" v-for="type in types" :key="type.id">
                        <TypeBox :revision=revision :type=type :user=user />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>    
    export default {
        components: {
            TypeBox: () => import(/* webpackChunkName: "chunks/reports/maintenance/typeBox"*/'./TypeBox'),
        },

        props : [
            'revision',
            'user'
        ],

        data() {
            return {
                types: Object,
            }
        },

        mounted() {
            this.getTypes()
        },

        methods: {
            getTypes() {
                axios.get('/api/energyEquipmentRevisionTypes')
                .then(response => {
                    this.types = response.data
                    // console.log(this.types)
                })
            },

            
        },
    }
</script>
