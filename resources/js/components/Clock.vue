<template>
    <div class="has-text-right">
        <div class="title is-size-5 has-text-white">
            {{ currentDay }}
        </div>
        <div class="subtitle is-size-6 has-text-grey-light">{{ currentTime }}</div>
    </div>
</template>

<script>
    var moment = require('moment');
    export default {
        created() {
            this.currentDay = moment().format('MMMM Do YYYY');
            this.currentTime = moment().format('h:mm:ss a');
            setInterval(() => this.updateCurrentDay(), 1 * 1000);
            setInterval(() => this.updateCurrentTime(), 1 * 1000);
        },
        mounted() {
            console.log('Component mounted.')
        },
        data() {
            return {
                currentDay: null,
                currentTime: null
            }
        },
        methods: {
            updateCurrentDay() {
                this.currentDay = moment().format('MMMM Do YYYY');
            },
            updateCurrentTime() {
                this.currentTime = moment().format('h:mm:ss a');
            }
        }
    }
</script>
