<template>
    <div class="box has-background-dark">
        
    </div>
</template>

<script>
    export default {
        components: {
            
        },
        props : [
            'csrf'
        ],
        data() {
            return {
                bodyBackground: 'has-background-black-ter',
                boxBackground: 'has-background-dark',
                primaryText: 'has-text-white',
                secondaryText: 'has-text-grey-light',
                hovered: 'is-hovered'
            }
        },
        mounted() {
        },
        methods: {
            
        }
    }
</script>
