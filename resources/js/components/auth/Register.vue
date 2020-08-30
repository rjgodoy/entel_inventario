<template>
	<div>
		<div class="box-translucent">
			<div class="field is-size-4 has-text-link has-text-weight-bold">Solicitar Cuenta</div>

			<div class="field">
				<label for="name" class="label has-text-weight-normal">Nombre</label>
				<b-field>
					<b-input 
						v-model="state.name"
						id="name"
						type="text"
						name="name"
                        validation-message="Campo requerido"
						autofocus
                        required
					></b-input>
				</b-field>
			</div>

			<div class="field">
				<label for="apellido" class="label has-text-weight-normal">Apellido</label>
				<b-field>
					<b-input 
						v-model="state.apellido"
						id="apellido"
						type="text"
						name="apellido"
                        validation-message="Campo requerido"
                        required
					></b-input>
				</b-field>
			</div>

			<div class="field">
				<label for="email" class="label has-text-weight-normal">Email</label>
				<b-field>
					<b-input 
                        v-model="state.email" 
                        id="email" 
                        type="email" 
                        name="email"
                        validation-message="Ingresar un email válido"
                        required
                        >
                    </b-input>
				</b-field>
			</div>

			<div class="field">
				<label for="username" class="label has-text-weight-normal">Usuario</label>
				<b-field>
					<b-input 
						v-model="username"
                        class="text-dark"
						id="username"
						type="text"
						name="username"
						disabled
					></b-input>
				</b-field>
			</div>

			<div class="field">
				<label for="password" class="label has-text-weight-normal">Password</label>
				<b-field>
					<b-input 
						v-model="state.password"
						id="password"
						type="password"
						placeholder
						name="password"
                        required
					></b-input>
				</b-field>
			</div>

			<div class="field">
				<label for="password_confirmation" class="label has-text-weight-normal">Confirmar Password</label>
				<b-field :type="!validatePass & passConfirm != '' ? 'is-danger' : ''">
					<b-input 
						v-model="passConfirm"
						id="password-confirm"
                        type="password"
						placeholder
						name="password_confirmation"
						@keyup="validatePass"
					></b-input>
				</b-field>
			</div>

            <p class="control">
                <button class="button is-link" :class="buttonLoading && 'is-loading'" @click="registerRequest">Solicitar</button>
                <router-link to="/login" class="button is-default">Ya tengo cuenta</router-link>
            </p>

		</div>

		<p class="has-text-centered">
			<router-link to="/password/email" class="is-size-6">Recuperar contraseña</router-link>
		</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
            passConfirm: '',
            
			buttonLoading: 0,
			errors: [],
			state: {
				username: "",
				password: "",
				apellido: "",
				name: "",
				email: ""
			}
		};
	},

	computed: {
		username() {
            var string = this.state.email.substring(0, this.state.email.lastIndexOf('@'))
            this.state.username = string
			return string
        },

        validatePass() {
            return this.passConfirm === this.state.password ? true : false
        },
	},

	methods: {
		registerRequest() {
            this.buttonLoading = 1;
            axios.post("/api/registerRequest", this.state)
            .then(response => {
                console.log(response.data)
                var textColor = response.data.status === 200 ? 'is-success' : (response.data.status === 201 ? 'is-danger' : 'is-warning')
                this.buttonLoading = 0;
                this.$buefy.toast.open({
                    message: response.data.message,
                    type: textColor,
                    duration: 3000
                })
            })
            .catch(error => {
                console.log(error);
                this.buttonLoading = 0;
                this.$buefy.toast.open({
                    message: 'Ha ocurrido un error. Favor intenta nuevamente',
                    type: "is-danger",
                    duration: 3000
                });
            });
		}
	}
};
</script>
