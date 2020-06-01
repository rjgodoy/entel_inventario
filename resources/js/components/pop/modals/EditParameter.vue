<template>
    <div class="modal-card" style="width: 500px">
        <header class="modal-card-head has-text-centered">
            <p class="modal-card-title has-text-weight-bold">Editar Parámetro</p>
        </header>
        <section class="modal-card-body">
            <div class="container" style="width: 50%; margin-top: 30px;">
                <p class="content"><b>Selected:</b> {{ value }}</p>
                <b-select placeholder="Select a name" v-model="value">
                    <option
                        v-for="option in parameters"
                        :value="option.id"
                        :key="option.id">
                        {{ option[parameterName] ? option[parameterName] : option.type }}
                    </option>
                </b-select>
            </div>
        </section>
        <footer class="modal-card-foot">
            <button class="button" type="button" @click="$parent.close()">Cerrar</button>
            <button class="button is-link" @click="updateParameter">Actualizar</button>
        </footer>
    </div>
</template>

<script>
    export default {
        props : [
            'pop',
            'site',
            'user',
            'parameter'
        ],

        data() {
            return {
                value: null,
                isFetching: false,
                text: '',
                page: 1,
                totalPages: 1,
                parameters: []
            }
        },

        computed: {
            itemName() {
                return this.site ? 'site' : 'pop'
            },

            itemValue() {
                return this.site ? this.site : this.pop
            },

            parameterName() {
                let arr = this.parameter.split("_")
                let str = ''
                for (var i = 0; i < arr.length - 1; i++) {
                    str = str == '' ? arr[i] : str + '_' + arr[i]
                }
                return str
            }
        },

        mounted() {
            console.log(this.parameterName)
            this.getParameters()
        },

        methods: {
            getParameters() {
                let params = {
                    'api_token': this.user.api_token,
                    'parameter': this.parameter,
                }
                axios.get(`/api/${this.itemName}Parameters`, { params }).then(response => {
                    // console.log(response.data)
                    this.parameters = response.data.data
                })

            },

            updateParameter() {
                let params = {
                    'api_token': this.user.api_token,
                    'parameter': this.parameter,
                    'value': this.value,
                    'user_id': this.user.id
                }
                axios.put(`/api/${this.itemName}/${this.itemValue.id}`, params).then(response => {
                    console.log(response)
                    this.$buefy.toast.open({
                        message: 'Parámetro actualizado exitosamente.',
                        type: 'is-success',
                        duration: 3000
                    })
                })
                this.$parent.close()
                this.$eventBus.$emit('parameter-updated');
            }
        }
    }
</script>
