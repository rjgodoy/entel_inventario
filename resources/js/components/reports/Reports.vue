<template>
    <section class="section is-marginless">
        <div class="container">

        </div>
    </section>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
// import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
// import { faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons'
library.add(faSearch, faBars);

export default {
    props : [
        'user',
        'darkMode'
    ],

    data() {
        return {
        }
    },

    created() {
    },

    mounted() {
    },

    methods: {
    }
}
</script>
