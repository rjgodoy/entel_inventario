<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            google: {
                type: Object,
                required: true
            },
            map: {
                type: Object,
                required: true
            },
            options: {
                type: Object,
                required: true
            },
            position: {
                type: Object,
                required: true
            },
            opened: {
                type: Boolean,
                required: true
            },
            content: {
                type: String,
                required: false
            }
        },

        mounted() {
            const { InfoWindow } = this.google.maps;
            new InfoWindow({
                options: this.options,
                position: this.position,
                content: this.content,
            });
        },

        beforeDestroy() {
            this.InfoWindow.destroy()
        },

        render() {}
    };
</script>
