<template>
    <div>
    </div>
</template>
<script>

    export default {
        props : [
            'username',
            'password'
        ],
        data() {
            return {
            }
        },
        mounted() {
            this.login()
        },
        methods: {
            login() {
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

                axios.post('/login', credentials, config)
                .then(response => {
                    console.log(response)
                    this.$router.go('/dashboard')
                })
            }
        }
    }
</script>
