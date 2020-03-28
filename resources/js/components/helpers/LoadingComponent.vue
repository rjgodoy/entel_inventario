<template>
    <div style="position: relative;">
        <b-loading :is-full-page="false" :active.sync="isLoading" :can-cancel="false"></b-loading>
    </div>  
</template>

<script>
    export default {
        data() {
            return {
               isLoading: true
            }
        },
        methods : {
            
        },
        destroy() {

        }
    }  
</script>

