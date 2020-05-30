<template>
    <div id="quickviewDefault" class="quickview has-text-dark" style="background: rgba(255,255,255,0.87)">
        <header class="quickview-header">
            <p class="title has-text-weight-bold">Log de registros</p>
            <span class="delete" data-dismiss="quickview"></span>
        </header>

        <div class="quickview-body">
            <div class="quickview-block section">

                <div class="timeline is-centered">

                    <header class="timeline-header">
                        <span class="tag is-medium is-smart">
                            <div class="has-text-weight-bold">Creación: {{ createdDate }}</div>
                        </span>
                    </header>

                    <div v-if="!logs.length" class="timeline-item is-positive">
                        <div class="timeline-marker is-positive"></div>
                        <div class="timeline-content">
                            <p class="heading">Actualmente,</p>
                            <p>No existen registros en este PoP</p>
                        </div>
                    </div>

                    <!-- <header class="timeline-header">
                        <span class="tag is-primary">2017</span>
                    </header> -->

                    <div v-for="log in logs" :key="log.id" class="timeline-item" :class="log.log_type.background">
                        <!-- <div class="timeline-marker is-image is-32x32" :class="log.log_type.background">
                            <img :src="'/'+log.user.avatar">
                        </div> -->
                        <div class="timeline-marker is-icon" :class="log.log_type.background">
                            <font-awesome-icon :icon="[log.log_type.icon_type, log.log_type.icon]" />
                        </div>
                        <div class="timeline-content">
                            <div class="">
                                <p class="heading" style="padding-top: 10px;">{{ logCreation(log.created_at) }}</p>
                                <p class="is-size-6" style="padding-top: 5px;">{{ log.description }}</p>
                                <p class="is-size-7">{{ log.user.name }} {{ log.user.apellido }}</p>
                            </div>
                        </div>
                    </div>
                    
                    <header v-if="logs.length" class="timeline-header">
                        <span class="tag is-medium is-smart has-text-weight-bold">No hay mas registros en este PoP</span>
                    </header>
                </div>

            </div>
        </div>

        <footer class="quickview-footer">

        </footer>
    </div>
</template>

<script>
    var moment = require('moment')
    import 'moment/locale/es'
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
                quickviews: Object,
                logY: null
            }
        },

        computed: {
            createdDate() {
                return moment(this.pop.created_at).format('MMMM DD, YYYY') 
            },
        },

        created() {
            this.$eventBus.$on('folder-created', this.getLogs);
            this.$eventBus.$on('folder-deleted', this.getLogs);
        },

        mounted() {
            moment.locale('es');
            this.quickviews = bulmaQuickview.attach()
            this.getLogs()
        },

        watch: {
            pop() {
                this.getLogs()
            }
        },

        methods: {
            getLogs() {
                axios.get(`/api/logs/${this.pop.id}?api_token=${this.user.api_token}`)
                .then((response) => {
                    // console.log(response.data)
                    this.logs = response.data.data
                })
            },

            logCreation(logDate) {
                return moment(logDate).format('MMMM DD, YYYY') 
            },

            logYear(log) {
                this.logY = moment(log.created_at).format('YYYY')
            }
        },

        beforeDestroy() {
            this.$eventBus.$off('folder-created');
            this.$eventBus.$off('folder-deleted');
        }
    }
</script>
