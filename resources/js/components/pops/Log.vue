<template>
    <div id="quickviewDefault" class="quickview has-text-dark">
        <header class="quickview-header">
            <p class="title">Log {{ pop.id }}</p>
            <span class="delete" data-dismiss="quickview"></span>
        </header>

        <div class="quickview-body">
            <div class="quickview-block section">

                <div class="timeline is-centered">

                    <header class="timeline-header">
                        <span class="tag is-medium is-primary">Start</span>
                    </header>

                    <div class="timeline-item is-primary">
                        <div class="timeline-marker is-primary"></div>
                        <div class="timeline-content">
                            <p class="heading">January 2016</p>
                            <p>Timeline content - Can include any HTML element</p>
                        </div>
                    </div>

                    <div v-for="log in logs" class="timeline-item" :class="log.log_type.background">
                        <div class="timeline-marker is-warning is-image is-32x32">
                            <img :src="'/'+log.user.avatar">
                        </div>
                        <div class="timeline-content">
                            <div class="">
                                <p class="heading" style="padding-top: 10px;">{{ log.created_at }}</p>
                                <p class="is-size-6" style="padding-top: 5px;">{{ log.description }}</p>
                                <p class="is-size-7">{{ log.user.name }} {{ log.user.apellido }}</p>
                            </div>
                            <!-- <p class="heading">February 2016</p>
                            <p>Timeline content - Can include any HTML element</p> -->
                        </div>
                    </div>

                    <header class="timeline-header">
                        <span class="tag is-primary">2017</span>
                    </header>

                    <div class="timeline-item is-danger">
                        <div class="timeline-marker is-danger is-icon">
                            <i class="fa fa-flag"></i>
                        </div>
                        <div class="timeline-content">
                            <p class="heading">March 2017</p>
                            <p>Timeline content - Can include any HTML element</p>
                        </div>
                    </div>
                    
                    <header class="timeline-header">
                        <span class="tag is-medium is-primary">End</span>
                    </header>
                </div>

            </div>
        </div>

        <footer class="quickview-footer">

        </footer>
    </div>
</template>

<script>
    const bulmaQuickview = require('../../../../node_modules/bulma-quickview/src/js/index').default;
    export default {
        components: {
        },
        props : [
            'user',
            'pop'
        ],
        data() {
            return {
                logs: Array,
                quickviews: Object
            }
        },
        mounted() {
            this.quickviews = bulmaQuickview.attach()
            this.getLogs()
        },
        watch: {
            user(newValue) {
                // console.log('changed user')
            },
            pop(newValue) {
                // console.log('changed pop')
            }
        },
        methods: {
            getLogs() {
                axios.get(`/api/logs/${this.pop.id}?api_token=${this.user.api_token}`)
                .then((response) => {
                    this.logs = response.data.data
                })
            },
        }
    }
</script>
