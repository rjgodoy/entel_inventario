<template>
    <div id="quickviewDefault" class="quickview">
        <header class="quickview-header">
            <p class="title">Log {{ pop.id }}</p>
            <span class="delete" data-dismiss="quickview"></span>
        </header>

        <div class="quickview-body">
            <div class="quickview-block">
                ...
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
            'pop'
        ],
        data() {
            return {
                quickviews: Object
            }
        },
        mounted() {
            this.quickviews = bulmaQuickview.attach()
        },
        methods: {
        }
    }
</script>
