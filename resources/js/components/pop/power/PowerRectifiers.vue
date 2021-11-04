<template>
    <section class="section" style="padding-top: 0px; padding-bottom: 48px;" >
        <div class="" v-if="powerRectifiers.length">
            <div class="columns tile is-ancestor is-multiline">
                <div class="column is-6 tile is-parent" v-for="powerRectifier in powerRectifiers" :key="powerRectifier.id">
                    <power-rectifier 
                        :powerRectifier="powerRectifier"
                        :canEdit="can"
                        :user="user"
                        />
                </div>
            </div>
        </div>
        <div class="has-text-centered" v-if="!powerRectifiers.length">
            <div class="is-size-4 has-text-weight-light has-text-grey">No hay plantas rectificadoras registradas en este POP</div>
        </div>
    </section>
</template>

<script>
    export default {
        components: {
            PowerRectifier: () => import(/* webpackChunkName: "chunks/pop/power/powerRectifier"*/'./PowerRectifier'),
        },
        props : [
            'user',
            'pop',
        ],
        data() {
            return {
                powerRectifiers: Array,
                can: null
            }
        },
        mounted() {
            this.getPowerRectifiers()
        },
        computed: {
        },
        methods: {
            getPowerRectifiers() {
                axios.get(`/api/powerRectifiers/${this.pop.id}`)
                .then((response) => {
                    this.powerRectifiers = response.data.powerRectifiers
                    this.can = response.data.can
                })
                .catch((error) => {
                    console.log('Error al traer los datos de Plantas Rectificadoras: ' + error);
                });
            }
        }
    }
</script>
