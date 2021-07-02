<template>
    <div class="modal-card" style="width: 800px;">
        <header class="modal-card-head has-text-centered" style="background: rgba(0,0,0,0)">
            <p class="modal-card-title has-text-white has-text-weight-bold">EMPALME</p>
        </header>
        <section class="modal-card-body" style="background: rgba(0,0,0,0)">
            <junction
                :junction="junction"
                :canEditJunctions="canEditJunctions"
                :user="user"
            />
        </section>
    </div>
</template>

<script>    
    export default {
        components: {
            Junction: () => import(/* webpackChunkName: "chunks/pop/power/junction"*/'../../pop/power/Junction')
        },

        props : [
            'canEditJunctions',
            'junction',
            'user'
        ],

        data() {
            return {
                
            }
        },

        watch: {
            junction(val) {

            }
        },
    }
</script>
