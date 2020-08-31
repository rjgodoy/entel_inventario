<template>
    <div>
        <form class="box-translucent" @submit="resetPassword">

            <div class="field is-size-4 has-text-white has-text-weight-bold">Cambiar Contraseña</div>

            <div class="field">
                <label for="email" class="label has-text-weight-normal">Email</label>
                <p class="control has-icon has-icon-right">
                    <input v-model="state.email" id="email" type="email" class="input" name="email" disabled>
                </p>
            </div>

            <div class="field">
                <label for="password" class="label has-text-weight-normal">Contraseña</label>

                <p class="control has-icon has-icon-right">
                    <input v-model="state.password" id="password" type="password" class="input" name="password" autofocus>
                </p>
            </div>

            <div class="field">
                <label for="password-confirm" class="label has-text-weight-normal">Repetir contraseña</label>

                <p class="control has-icon has-icon-right">
                    <input v-model="state.password_confirmation" id="password-confirm" type="password" class="input" name="password_confirmation">
                </p>
            </div>

            <div class="form-group row mb-0">
                <div class="col-md-6 offset-md-4">
                    <b-button 
                        :loading="buttonLoading ? true : false"
                        type="is-link"
                        size="is-normal"
                        @click="resetPassword">
                        Reset Password
                    </b-button>
                </div>
            </div>
        </form>

    </div>
</template>

<script>

    export default {
        components: {
        },
        props: [
        ],
        data() {
            return {
                buttonLoading: 0,
                state: {
                    token: this.$route.params.token,
                    email:  this.$route.query.email,
                    password: '',
                    password_confirmation: ''
                }
            }
        },
        mounted() {
        },
        computed: {
        },
        methods: {
            resetPassword(e) {
                if (!this.state.password || !this.state.password_confirmation) {
                    this.$buefy.toast.open({
                        message: 'Ingresa tu nuevo password.',
                        type: 'is-danger',
                        duration: 5000
                    })
                }
                else if (this.state.password != this.state.password_confirmation) {
                    this.$buefy.toast.open({
                        message: 'Passwords deben ser iguales.',
                        type: 'is-danger',
                        duration: 5000
                    })
                }
                else
                {
                    this.buttonLoading = 1
                    axios.post('/password/reset', this.state).then((response) => {
                        console.log(response)
                        if (response.status === 200) {
                            this.buttonLoading = 0
                            // this.$eventBus.$emit('password-changed');
                        } else {
                            this.buttonLoading = 0
                            this.$buefy.toast.open({
                                message: 'Algo inesperado ocurrió. Favor intentalo nuevamente.',
                                type: 'is-danger',
                                duration: 5000
                            })
                        }
                    }).finally(() => {
                        window.location.href = "/dashboard"
                    })
                }
                e.preventDefault()
            }
        }
    }
</script>
