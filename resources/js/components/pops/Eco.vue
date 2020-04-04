<template>
    <section class="section">
        <div class="columns">
            <div class="column">

                <section class="section" style="padding-top: 0px; padding-bottom: 48px;">

                    <div class="field">
                        <div class="has-text-weight-semibold has-text-dark is-size-4 has-text-left">Gestión Ambiental</div>
                    </div>

                    <div class="columns is-multiline">
                        <div class="column is-6">
                            <div class="box">
                                <div class="" style="padding: 10px;">
                                    <div class="field">
                                        <font-awesome-icon 
                                            :icon="['far', 'check-circle']"
                                            :class="pop.protected_zone ? 'has-text-eco' : 'has-text-grey-light'"
                                            :disabled="pop.protected_zone ? false : true"
                                        />
                                        <label :class="pop.protected_zone ? 'has-text-weight-normal' : 'has-text-grey-light'" class="is-size-6">Zona protegida</label>
                                    </div>
                                    <div class="field">
                                        <font-awesome-icon 
                                            :icon="['far', 'check-circle']"
                                            :class="rcas.length ? 'has-text-info' : 'has-text-grey-light'"
                                            :disabled="rcas.length ? false : true"
                                        />
                                        <label :class="rcas.length ? 'has-text-weight-normal' : 'has-text-grey-light'" class="is-size-6">R.C.A.</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    </section>
</template>

<script>
    export default {
        components: {
        },
        props : [
            'pop',
            'rcas',
            'bodyBackground',
            'boxBackground',
            'primaryText',
            'secondaryText',
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
