<template>
    <div>
    <font-awesome-icon 
        icon="circle"
        size="1x" 
        :class="'has-text-' + status"
        />
    </div>
</template>

<script>
export default {
    props : ['crm'],

    data() {
        return {
            status: 'grey'
        }
    },

    mounted() {
        this.crmStatus()
    },

    methods: {
        crmStatus() {
            axios.get(`/api/crmEnergyReportsStatus/${this.crm.id}`)
            .then(response => {
                this.status = response.data > 0 ? 'warning' : 'success'
            })
        },
    }
}
</script>
