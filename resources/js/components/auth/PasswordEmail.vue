<template>
    <div>
        <form class="box-translucent" @submit="resetEmail">

            <div class="field is-size-4 has-text-white has-text-weight-bold">Recuperar Contraseña</div>

            <div class="field">
                <label for="email" class="label has-text-weight-normal">Email</label>
                <p class="control has-icon has-icon-right">
                    <input v-model="state.email" id="email" type="email" class="input" name="email" placeholder="" autofocus>
                </p>
            </div>

            <p class="control">
                <b-button 
                    :loading="buttonLoading ? true : false"
                    type="is-link"
                    size="is-normal"
                    @click="resetEmail">
                    Enviar link de recuperación
                </b-button>
                <!-- <button type="submit" class="button is-link">
                    Enviar link de recuperación
                </button> -->
                <router-link class="button is-link is-outlined" to="/login">
                    Login
                </router-link>
            </p>
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
                    email: ''
                }
            }
        },
        mounted() {
        },
        computed: {
            
        },
        methods: {
            resetEmail(e) {
                if (!this.state.email) {
                    this.$buefy.toast.open({
                        message: 'Email required.',
                        type: 'is-danger',
                        duration: 3000
                    })
                }
                else {
                    this.buttonLoading = 1
                    var token = document.head.querySelector('meta[name="csrf-token"]');
                    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
                    axios.post('/password/email', this.state).then((response) => {
                        if (response.status === 200) {
                            this.buttonLoading = 0
                            this.$buefy.toast.open({
                                message: response.data,
                                type: response.data.includes('enviado') ? 'is-success' : 'is-danger',
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
                    })
                }
                e.preventDefault()
            }
        }
    }
</script>
