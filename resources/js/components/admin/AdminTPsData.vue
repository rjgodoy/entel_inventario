<template>
    <div class="">

        <section class="section is-marginless" :class="bodyBackground">
            <div class="tile is-ancestor">
                <div class="tile is-parent">
                    <article class="tile is-child box" :class="boxBackground">
                        <p class="title">Hello 2</p>
                        <p class="subtitle">What is up?</p>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child box" :class="boxBackground">
                        <p class="title">Hello 2</p>
                        <p class="subtitle">What is up?</p>
                    </article>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
    export default {
        props : [
            'bodyBackground',
            'boxBackground',
            'primaryText',
            'secondaryText',
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
