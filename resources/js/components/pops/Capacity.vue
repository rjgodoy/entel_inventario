<template>
    <div class="">
        <section class="section has-background-dark is-bold">
            <div class="columns">
                <div class="column has-text-centered">
                    <div class="container">
                        <capacity-chart/>
                    </div>
                </div>
                <div class="column has-text-centered">
                    <div class="container">
                        <growing-chart/>
                    </div>
                </div>
            </div>
        </section>
        
    </div>
</template>

<script>
    export default {
        components: {
            CapacityChart: () => import('./CapacityChart'),
            GrowingChart: () => import('./GrowingChart'),
        },
        props : [
            'pop'
        ],
        data() {
            return {
            }
        },
        mounted() {
        },
        methods: {
        }
    }
</script>
