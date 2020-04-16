<template>
    <div class="">
        <div class="has-text-centered has-text-dark is-size-5">Uso actual (%)</div>
        <capacity-chart
            :lastData="lastData"
        />
    </div>
</template>

<script>    
    export default {
        components: {
            CapacityChart: () => import('./CapacityChart'),
        },
        props : [
            'lastData'
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
