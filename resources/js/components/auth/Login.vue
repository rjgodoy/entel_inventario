<template>
    <div>
        <form class="box-translucent" @submit.prevent="login">

            <div class="field is-size-4 has-text-white has-text-weight-bold">Login</div>

            <div class="field">
                <label for="username" class="label has-text-weight-normal">Usuario</label>
                <div class="control has-icon has-icon-right">
                    <input v-model="username" id="username" type="text" class="input" name="username" placeholder="" autofocus>
                </div>
            </div>

            <div class="field">
                <label for="password" class="label has-text-weight-normal">Password</label>
                <div class="control has-icon has-icon-right">
                    <input v-model="password" id="password" type="password" placeholder="" class="input" name="password">
                </div>
            </div>

            <hr>
            <div class="control">
                <button type="submit" class="button is-link" :class="isLoading && 'is-loading'">Login</button>
                <router-link to="/register" type="button" class="is-pulled-right button is-default">Solicita una cuenta</router-link>
            </div>
        </form>

        <div class="block has-text-centered">
            <router-link to="/password/email" class="is-size-6 has-text-white">Recuperar contraseña</router-link>
        </div>

    </div>
</template>

<script>

    export default {
        data() {
            return {
                isLoading: 0,
                errors: [],
                username: '',
                password: ''
            }
        },
        methods: {
            login() {
                if (!this.username) {
                    this.$buefy.toast.open({
                        message: 'Se requiere username.',
                        type: 'is-danger',
                        duration: 3000
                    })
                }
                else if (!this.password) {
                    this.$buefy.toast.open({
                        message: 'Password required.',
                        type: 'is-danger',
                        duration: 3000
                    })
                }

                else {
                    this.isLoading = 1
                    let credentials = {
                        'username': this.username,
                        'password': this.password
                    }

                    const config = {
                        headers: {
                            'content-type': 'application/json',
                            'X-Requested-With': 'XMLHttpRequest',
                        }
                    }

                    // axios.post('/api/auth/login', credentials, config)
                    // .then(response => { 
                    //     console.log(response)
                    //     if (response.status === 200) {
                            axios.post('/login', credentials, config)
                            .then(response => {
                                this.isLoading = 0
                                console.log(response)
                                this.$router.go('/dashboard')
                            })
                    //     }
                    // }).catch((error) => {
                    //     console.log(error.response.status)
                    //     if (error.response.status === 401) {
                    //         this.isLoading = 0
                    //         this.$buefy.toast.open({
                    //             message: 'Las credenciales no concuerdan con nuestros registros.',
                    //             type: 'is-warning',
                    //             duration: 3000
                    //         })
                    //     } else {
                    //         this.isLoading = 0
                    //         this.$buefy.toast.open({
                    //             message: 'Algo inesperado ocurrió. Favor intentalo nuevamente.',
                    //             type: 'is-danger',
                    //             duration: 3000
                    //         })
                    //     }
                    // })
                }
            }
        }
    }
</script>
