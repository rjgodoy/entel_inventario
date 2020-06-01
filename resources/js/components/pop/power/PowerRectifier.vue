<template>        
    <div class="tile is-child box">
        <div class="columns">
            <div class="column">
                <div class="has-text-weight-light is-size-7" style="margin-top: 5px;">Marca</div>
                <div class="has-text-weight-semibold is-size-5">{{ powerRectifier.power_rectifier_type ? powerRectifier.power_rectifier_type.power_rectifier_type : 'Sin información' }}</div>
                <div class="has-text-weight-light is-size-7" style="margin-top: 5px;">Modelo</div>
                <div class="has-text-weight-semibold is-size-6">{{ powerRectifier.power_rectifier_type ? powerRectifier.power_rectifier_type.power_rectifier_model : 'Sin información' }}</div>
            </div>
            <div class="column has-text-right">
                <font-awesome-icon
                    :icon="['fas', 'random']" 
                    size="3x" 
                    class="has-text-grey-lighter" 
                    style="opacity: 0.5;"/>
            </div>
        </div>

        <div class="columns">
            <div class="column">
                <div class="has-text-weight-light is-size-7">Voltaje</div>
                <div class="has-text-weight-normal is-size-6">{{ powerRectifier.volt ? powerRectifier.volt : 'Sin información' }} <span class="is-size-7" v-if="powerRectifier.volt">V</span></div>
                <div class="has-text-weight-light is-size-7" style="margin-top: 5px;">Capacidad total</div>
                <div class="has-text-weight-normal is-size-6">{{ powerRectifier.capacity ? powerRectifier.capacity : 'Sin información' }} <span class="is-size-7" v-if="powerRectifier.capacity">kW</span>
                </div>
            </div>
            <div class="column">
                <div class="has-text-weight-light is-size-7">Nº módulos</div>
                <div class="has-text-weight-normal is-size-6">{{ powerRectifier.modules ? powerRectifier.modules : 'Sin información' }}</div>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <div class="" v-if="powerRectifier.room">
                    <div class="has-text-weight-semibold is-size-6">{{ powerRectifier.room.site.nem_site }} - {{ powerRectifier.room.name }}</div>
                    <div class="has-text-weight-normal is-size-7">Sitio</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
        },
        props : [
            'powerRectifier'
        ],
        data() {
            return {
            }
        },
        mounted() {
        },
        computed: {
        },
        methods: {
            
        }
    }
</script>
