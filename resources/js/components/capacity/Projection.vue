<template>
    <div class="">
        <div class="has-text-centered has-text-dark is-size-5">Disponibilidad de Potencia</div>
        <projection-chart
            :chartData="chartData"
        />
    </div>
</template>

<script>    
    export default {
        components: {
            ProjectionChart: () => import('./ProjectionChart'),
        },
        props : [
            'chartData'
        ],
        data() {
            return {
                
            }
        },
        computed: {
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
