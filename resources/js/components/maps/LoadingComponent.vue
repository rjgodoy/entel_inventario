<template>
    <div class="tile is-child box">
        <!-- <b-notification> -->
            <b-loading :is-full-page="false" :active.sync="isLoading" :can-cancel="false"></b-loading>
        <!-- </b-notification> -->
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

