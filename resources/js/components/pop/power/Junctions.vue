<template>
    <section class="">
        <div class="" v-if="junctions.length">
            <div class="" v-for="junction in junctions" :key="junction.id">
                <div class="columns">
                    <div class="column is-2"></div>
                    <div class="column is-8">
                        <junction 
                            :junction="junction" 
                            :canEditJunctions="canEditJunctions"
                            :user="user"
                            :pop="pop"
                        />
                    </div>
                    <div class="column is-2"></div>
                </div>
            </div>
        </div>
        <div class="has-text-centered" v-if="!junctions.length">
            <div class="is-size-4 has-text-weight-light has-text-grey">No hay empalmes registrados en este POP</div>
        </div>
    </section>
</template>

<script>
    export default {
        components: {
            Junction: () => import(/* webpackChunkName: "chunks/pop/power/junction"*/'./Junction'),
        },
        props : [
            'user',
            'pop'
        ],
        data() {
            return {
                junctions: Array,
                consumoTablero: 45980,
                canEditJunctions: null
            }
        },
        mounted() {
            this.getJunctions()
        },
        computed: {
            currentTabComponent() {
                return this.currentTab
            },
        },
        methods: {
            // APIs
            getJunctions() {
                axios.get(`/api/junctions/${this.pop.id}`)
                .then((response) => {
                    this.junctions = response.data.junction
                    this.canEditJunctions = response.data.can.update
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Empalmes: ' + error);
                });
            },

            // capacidadTotal(latest_protection) {
            //     return latest_protection ? latest_protection.nominal_a * 380 * 1.7320508 : 0
            // },
        }
    }
</script>
