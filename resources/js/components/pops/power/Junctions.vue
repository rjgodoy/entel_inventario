<template>
    <section class="" v-if="junctions.length">
        <div class="" v-for="junction in junctions" :key="junction.id">

            <div class="columns">
                <div class="column is-3"></div>
                <div class="column is-6">
                    <junction 
                        :junction="junction" 
                        :can="can"
                        :user="user"
                        :pop="pop"
                    />
                </div>
                <div class="column is-3"></div>
            </div>
            
        </div>
    </section>
</template>

<script>
    export default {
        components: {
            Junction: () => import('./Junction'),
        },
        props : [
            'user',
            'pop'
        ],
        data() {
            return {
                junctions: Array,
                consumoTablero: 45980,
                can: null
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
                axios.get(`/api/junctions/${this.pop.id}?api_token=${this.user.api_token}`)
                .then((response) => {
                    this.junctions = response.data.junction
                    this.can = response.data.can
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
