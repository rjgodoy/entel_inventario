<template>
    <div>
        <b-checkbox 
            :disabled="isDisabled"
            v-model="permit"
            @input="updatePermission()"
            type="is-link">
            <div class="is-size-6">{{ permission.name }}</div>
        </b-checkbox>
    </div>
</template>

<script>

    export default {
        props : [
            'user',
            'role',
            'permission'
        ],
        
        mounted() {
            // console.log(this.role)
            // console.log(this.permission)
        },

        // watch: {
        //     role(newVal) {
        //         this.permit = newVal.permissions.find(element => element.id == this.permission.id) || this.user.permissions.find(element => element.id == this.permission.id) ? true : false
        //     }
        // },

        data() {
            return {
                permit: this.role.permissions.find(element => element.id == this.permission.id) || this.user.permissions.find(element => element.id == this.permission.id) ? true : false
            }
        },

        computed: {
            isDisabled() {
                return this.role.permissions.find(element => element.id == this.permission.id) ? true : false
            }
        },

        methods: {
            updatePermission() {
                const params = {
                    'user_id': this.user.id,
                    'can': this.permit
                }
                // console.log(params)
                axios.put(`/api/permissions/${this.permission.id}`, params)
                .then(response => {
                    console.log(response)
                })
            }
        }
    }
</script>
