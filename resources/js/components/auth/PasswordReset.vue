<template>
    <div>
        <form class="box" @submit="resetPassword">

            <div class="field is-size-4 has-text-link has-text-weight-bold">Cambiar Contraseña</div>

            <div class="field">
                <label for="email" class="label has-text-weight-normal">Email</label>
                <p class="control has-icon has-icon-right">
                    <input v-model="state.email" id="email" type="email" class="input" name="email" disabled>

                    <!-- @error('email')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror -->
                </p>
            </div>

            <div class="field">
                <label for="password" class="label has-text-weight-normal">Contraseña</label>

                <p class="control has-icon has-icon-right">
                    <input v-model="state.password" id="password" type="password" class="input" name="password" autofocus>

                    <!-- @error('password')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror -->
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
                errors: [],
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
                this.errors = [];
                if (!this.state.password || !this.state.password_confirmation) {
                    this.$buefy.toast.open({
                        message: 'Password required.',
                        type: 'is-danger',
                        duration: 5000
                    })
                    this.errors.push('Password required.');
                }
                else if (this.state.password != this.state.password_confirmation) {
                    this.$buefy.toast.open({
                        message: 'Passwords deben ser iguales.',
                        type: 'is-danger',
                        duration: 5000
                    })
                    this.errors.push('Confirmation required.');
                }
                else
                {
                    this.buttonLoading = 1
                    // var token = document.head.querySelector('meta[name="csrf-token"]');
                    // var token = this.$route.params.token
                    // window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token;
                    // axios.post(`/password/reset?token=${this.state.token}&email=${this.state.email}&password=${this.state.password}&password_confirmation=${this.state.password_confirmation}`).then((response) => {
                    axios.post('/password/reset', this.state).then((response) => {
                        console.log(response)
                        if (response.status === 200) {
                            this.buttonLoading = 0
                            this.$buefy.toast.open({
                                message: response.data,
                                type: response.data.includes('contraseña ha sido actualizada') ? 'is-success' : 'is-danger',
                                duration: 5000
                            })
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
