<template>
    <div>
        <form class="box" @submit="checkForm">

            <div class="field is-size-4 has-text-link has-text-weight-bold">Login</div>

            <p v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul class="list-group">
                  <li v-for="error in errors" class="list-group-item list-group-item-danger">{{ error }}</li>
                </ul>
            </p>

            <div class="field">
                <label for="username" class="label has-text-weight-normal">Usuario</label>
                <p class="control has-icon has-icon-right">
                    <input v-model="state.username" id="username" type="text" class="input" name="username" placeholder="" autofocus>

                    <!-- <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span> -->
                </p>
            </div>

            <div class="field">
                <label for="password" class="label has-text-weight-normal">Password</label>
                <p class="control has-icon has-icon-right">
                    <input v-model="state.password" id="password" type="password" placeholder="" class="input" name="password">

                    <!-- <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span> -->
                </p>
            </div>

            <!-- <div class="field">
                <input class="is-checkradio is-link is-small" type="checkbox" name="remember" id="remember">
                <label for="remember" class="checkbox">Recordarme</label>
            </div> -->

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
        components: {
        },
        props: [
            'message'
        ],
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
        mounted() {
            console.log(this.$route)
        },
        computed: {
            
        },
        methods: {
            checkForm(e) {

                this.errors = [];
                if (!this.state.username) {
                    this.errors.push('Username required.');
                }
                if (!this.state.password) {
                    this.errors.push('Password required.');
                }
                else
                {
                    var token = document.head.querySelector('meta[name="csrf-token"]');
                    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
                    axios.post('/login', this.state).then((response) => { 
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
                    }).finally(() => {
                        window.location.href = "/dashboard";
                    })
                }
                e.preventDefault();
            }
        }
    }
</script>
