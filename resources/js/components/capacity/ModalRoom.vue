<template>
    <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
            <p class="modal-card-title">{{ room.name }} - {{ room.old_name }}</p>
        </header>
        <section class="modal-card-body has-background-light">
            <div class="section">
                <div class="container">
                    <div class="box">
                        <div class="has-text-centered has-text-dark is-size-5">Disponibilidad de Potencia</div>
                        <projection-chart
                            :user="user"
                            :room="room"
                            :chartData="chartData"
                        />
                    </div>
                    <div class="columns">
                        <div class="column is-6 box">
                            <div class="has-text-centered has-text-dark is-size-5">Uso actual (%)</div>
                            <capacity-chart
                                :chartData="lastData"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer class="modal-card-foot">
            <button class="button" type="button" @click="$parent.close()">Close</button>
            <!-- <button class="button is-primary">Guardar</button> -->
        </footer>
    </div>
</template>

<script>    
    export default {
        components: {
            // Junctions: () => import('../pops/power/Junctions'),
            ProjectionChart: () => import('./ProjectionChart'),
            CapacityChart: () => import('./CapacityChart')
        },
        props : [
            'room', 
            'user'
        ],
        data() {
            return {
                chartData: [],
                lastData: [] 
            }
        },
        computed: {
        },

        watch: {

        },

        created() {
        },

        mounted() {
            this.graphData()
        },

        methods: {
            graphData() {
                axios.get(`/api/roomProjection?room_id=${this.room.id}&api_token=${this.user.api_token}`)
                .then((response) => {
                    // console.log(response)
                    this.chartData = response.data.data
                    this.lastData = response.data.data[0]
                })
            },
        }
    }
</script>
