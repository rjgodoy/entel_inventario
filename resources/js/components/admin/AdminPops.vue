<template>
    <div class="">
        <div class="section shadow-inset">
            <div class="container">
                <div class="tile is-ancestor" style="margin: -40px 0 -40px 0;">
                    <div class="tile is-parent">
                        <a class="tile is-child box" :class="popActiveView == 1 ? 'has-background-link' : boxBackground" @click="changeView(1)">
                            <div :class="popActiveView == 1 ? selectedSecondaryBoxText : secondaryText"> 
                                <div class="is-size-6 has-text-weight-semibold">
                                    Ingreso
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="tile is-parent">
                        <a class="tile is-child box" :class="popActiveView == 2 ? 'has-background-link' : boxBackground" @click="changeView(2)">
                            <div :class="popActiveView == 2 ? selectedSecondaryBoxText : secondaryText"> 
                                <div class="is-size-6 has-text-weight-semibold">
                                    Edición
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <pop-data-add
            v-if="popActiveView == 1"
            :user="user"
            :bodyBackground="bodyBackground"
            :boxBackground="boxBackground"
            :primaryText="primaryText"
            :secondaryText="secondaryText"
        ></pop-data-add>

        <pop-data-edit
            v-if="popActiveView == 2"
            :user="user"
            :bodyBackground="bodyBackground"
            :boxBackground="boxBackground"
            :primaryText="primaryText"
            :secondaryText="secondaryText"
        ></pop-data-edit>

    </div>
</template>

<script>
    import AdminPopDataAdd from './AdminPopDataAdd.vue';
    import AdminPopDataEdit from './AdminPopDataEdit.vue';
    export default {
        components: {
            'pop-data-add': AdminPopDataAdd,
            'pop-data-edit': AdminPopDataEdit,
        },
        props : [
            'user',
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
                selectedPrimaryBoxText: 'has-text-white',
                selectedSecondaryBoxText: 'has-text-light',
                popActiveView: 0
            }
        },
        methods: {
            changeView(view) {
                if (this.popActiveView != view) {
                    this.popActiveView = view
                } else {
                    this.popActiveView = 0
                }
            },
        }
    }
</script>
