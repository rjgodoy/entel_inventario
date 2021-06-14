<template>
    <div class="">

        <NewPop
            :user="user"
            />

    </div>
</template>

<script>
    import NewPop from './NewPop.vue';
    export default {
        components: {
            NewPop,
        },
        props : [
            'user'
        ],

        created() {
        },

        mounted() {
        },

        data() {
            return {

            }
        },

        methods: {
            
        }
    }
</script>
