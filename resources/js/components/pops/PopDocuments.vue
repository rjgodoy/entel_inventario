<template>
    <section class="section" style="min-height: 500px;">
        Hello
    </section>
</template>

<script>
    export default {
        components: {
        },
        props : [
            'pop',
            'bodyBackground',
            'boxBackground',
            'primaryText',
            'secondaryText',
            'csrf'
        ],
        data() {
            return {
            }
        },
        mounted() {
            this.getDocuments()
        },
        methods: {
            getDocuments() {
                axios.get(`/api/documents/${this.pop.id}`).then((response) => {
                    console.log(response.data.data)
                })
            }
        }
    }
</script>
