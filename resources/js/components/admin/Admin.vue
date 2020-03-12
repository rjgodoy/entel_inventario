<template>
    <div class="">
        
        <section class="section" :class="bodyBackground">
            <!-- <button class="button is-link" @click="changeStyle" v-model="darkMode">Style</button> -->

            <!-- ITEMS BUTTONS -->
            <div class="container">

                <div class="tile is-ancestor" style="margin: -40px 0 -40px 0;">

                    <div class="tile is-parent" v-for="tab in tabs">
                        <a class="tile is-child box" :key="tab.component" :class="currentTab === tab.component ? 'has-background-link' : boxBackground" @click="currentTab = tab.component">
                            <div :class="currentTab === tab.component ? selectedSecondaryBoxText : secondaryText"> 
                                <div class="is-size-6 has-text-weight-semibold">
                                    {{ tab.title }}
                                </div>

                                <div style="margin-top: 10px;">
                                    <div class="is-size-7 has-text-weight-light">{{ tab.description }}</div> 
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            
        </section>

        <keep-alive>
            <admin-content :is="currentTabComponent"
                :bodyBackground="bodyBackground"
                :boxBackground="boxBackground"
                :primaryText="primaryText"
                :secondaryText="secondaryText"
            ></admin-content>
        </keep-alive>

    </div>
</template>

<script>
    export default {
        components: {
            AdminPops: () => import("./AdminPops"),
            AdminTps: () => import("./AdminTps"),
            AdminApprove: () => import("./AdminApprove"),
            AdminMassive: () => import("./AdminMassive"),
            AdminPermissions: () => import("./AdminPermissions"),
        },
        props : [
        ],
        created() {
            this.getTabs()
            this.styleMode()
        },
        mounted() {
        },
        data() {
            return {
                darkMode: 0,
                bodyBackground: '',
                boxBackground: '',
                primaryText: '',
                secondaryText: '',
                searchBodyBackground: '',
                selectedPrimaryBoxText: 'has-text-white',
                selectedSecondaryBoxText: 'has-text-light',
                tabs: null,
                currentTab: 'pops'
            }
        },
        methods: {
            // Style mode
            styleMode(){
                if (this.darkMode == 1) {
                    // dark mode
                    this.bodyBackground = 'has-background-black-ter'
                    this.boxBackground = 'has-background-dark'
                    this.primaryText = 'has-text-white'
                    this.secondaryText = 'has-text-grey-light'
                    this.searchBodyBackground = 'has-background-dark'
                } else {
                    // light mode
                    this.bodyBackground = 'has-background-light'
                    this.boxBackground = 'has-background-white'
                    this.primaryText = 'has-text-dark'
                    this.secondaryText = 'has-text-grey'
                    this.searchBodyBackground = 'has-background-white'
                }
            },
            changeStyle() {
                this.darkMode = this.darkMode == 0 ? 1 : 0
                this.styleMode()
            },
            getTabs() {
                axios.get(`/api/adminTabs`).then((response) => {
                    this.tabs = response.data.data
                })
            }
        },
        computed: {
            currentTabComponent: function () {
                return 'admin-' + this.currentTab
            }
        }
    }
</script>
