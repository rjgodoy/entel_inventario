<template>
    <section class="section" style="padding-top: 0px; padding-bottom: 48px;" v-if="powerRectifiers.length">
        <!-- <div class="field">
            <div class="has-text-weight-semibold has-text-dark is-size-4 has-text-left">Plantas Rectificadoras</div>
        </div> -->
        
        <div class="columns tile is-ancestor is-multiline">
            <div class="column is-6 tile is-parent" v-for="powerRectifier in powerRectifiers">

                <power-rectifier 
                    :powerRectifier="powerRectifier"
                    :canEdit="canEdit"
                    :user="user"
                    />

            </div>
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
