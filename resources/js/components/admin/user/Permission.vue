<template>
    <div>
        <b-checkbox 
            v-model="permit"
            @input="updateRole()"
            type="is-link">
            <div class="is-size-6">{{ permission.name }}</div>
        </b-checkbox>
    </div>
</template>

<script>

    export default {
        props : [
           'role',
           'permission'
        ],
        
        mounted() {
            // console.log(this.role)
            // console.log(this.permission)
        },

        data() {
            return {
                permit: this.role && this.role.permissions.find(element => element.id == this.permission.id) ? true : false
            }
        },

        watch: {
            role(newVal) {
                this.permit = this.role && this.role.permissions.find(element => element.id == this.permission.id) ? true : false
            }
        },

        methods: {
            updateRole() {
                const params = {
                    'permission_id': this.permission.id,
                    'can': this.permit
                }
                axios.put(`/api/roles/${this.role.id}`, params)
                .then(response => {
                    // console.log(response)
                })
            }
        }
    }
</script>
