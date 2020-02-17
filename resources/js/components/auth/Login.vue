<template>
    <div>
        <form class="box" @submit="checkForm">

            <div class="field is-size-4 has-text-link has-text-weight-bold">Login</div>

            <div class="field">
                <label for="username" class="label has-text-weight-normal">Usuario</label>
                <p class="control has-icon has-icon-right">
                    <input v-model="state.username" id="username" type="text" class="input" name="username" placeholder="" autofocus>
                </p>
            </div>

            <div class="field">
                <label for="password" class="label has-text-weight-normal">Password</label>
                <p class="control has-icon has-icon-right">
                    <input v-model="state.password" id="password" type="password" placeholder="" class="input" name="password">
                </p>
            </div>

            <hr>
            <p class="control">
                <button type="submit" class="button is-link">Login</button>
            </p>
        </form>

        <p class="has-text-centered">
            <router-link to="/password/email" class="is-size-6">Recuperar contraseña</router-link>
        </p>

    </div>
</template>

<script>

    export default {
        data() {
            return {
                buttonLoading: 0,
                errors: [],
                state: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            checkForm(e) {
                if (!this.state.username) {
                    this.$buefy.toast.open({
                        message: 'Se requiere username.',
                        type: 'is-danger',
                        duration: 3000
                    })
                }
                if (!this.state.password) {
                    this.$buefy.toast.open({
                        message: 'Password required.',
                        type: 'is-danger',
                        duration: 3000
                    })
                }
                else {
                    var token = document.head.querySelector('meta[name="csrf-token"]');
                    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
                    axios.post('/login', this.state).then((response) => { 
                        if (response.status === 200) {
                            this.buttonLoading = 0
                            if (response.data.includes('not match')) {
                                this.$buefy.toast.open({
                                    message: 'Las credenciales no concuerdan con nuestros registros.',
                                    type: 'is-danger',
                                    duration: 3000
                                })
                            } else {
                                this.$router.go('/dashboard')
                            }
                        } else {
                            this.buttonLoading = 0
                            this.$buefy.toast.open({
                                message: 'Algo inesperado ocurrió. Favor intentalo nuevamente.',
                                type: 'is-danger',
                                duration: 3000
                            })
                        }
                    }).catch((error) => {
                        console.log(error)
                    })
                    
                }
                e.preventDefault()
            }
        }
    }
</script>
