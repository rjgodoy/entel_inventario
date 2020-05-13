<template>
    <div>
        <Files />
    </div>
</template>

<script>
export default {
    components: {
        Files: () => import('./Files')
    },

    props : [
        'user'
    ],

    data() {
        return {
           
        }
    },

    computed: {
        
    },

    created() {
    },

    mounted() {
    },
    
    methods: {
        
    }
}
</script>
