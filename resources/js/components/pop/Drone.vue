<template>
    <section class="is-paddingless">
        <div v-for="droneVideo in droneVideos">
            <video height='610' style="width: 100%;" controls>
                <source :src="'/storage/' + droneVideo.route" :type="droneVideo.mime"></source>
                Your browser does not support the HTML5 Video element.
            </video>
            <hr/>
        </div>
    </section>
</template>

<script>
export default {
    props : [
        'droneVideos'
    ]
}
</script>
