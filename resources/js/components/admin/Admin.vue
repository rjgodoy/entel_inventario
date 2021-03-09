<template>
    <div class="">
        
        <section class="" style="padding-top: 24px; padding-bottom: 12px;">

            <!-- ITEMS BUTTONS -->
            <div class="container">
                <div class="tile is-ancestor">
                    <div class="tile is-parent" v-for="tab in tabs" :key="tab.id">
                        <a class="tile is-child box" 
                            v-if="canClick(tab.component)"
                            :key="tab.component" 
                            :class="currentTab === tab.component ? 'has-background-link' : boxBackground" 
                            @click="currentTab = tab.component">
                            <div :class="currentTab === tab.component ? selectedSecondaryBoxText : secondaryText"> 
                                <div class="is-size-6 has-text-weight-semibold">
                                    {{ tab.title }}
                                </div>

                                <div style="padding-top: 10px;">
                                    <div class="is-size-7 has-text-weight-light">{{ tab.description }}</div> 
                                </div>
                            </div>
                        </a>

                        <div class="tile is-child box has-background-light" v-if="!canClick(tab.component)">
                            <div class="has-text-grey-light"> 
                                <div class="is-size-6 has-text-weight-semibold">
                                    {{ tab.title }}
                                </div>

                                <div style="padding-top: 10px;">
                                    <div class="is-size-7 has-text-weight-light">{{ tab.description }}</div> 
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <keep-alive>
            <admin-content :is="currentTabComponent"
                :user="user"
                v-if="hasPermissions"
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
            PopsTab: () => import(/* webpackChunkName: "chunks/admin/pops"*/"./PopsTab"),
            TpsTab: () => import(/* webpackChunkName: "chunks/admin/tps"*/"./TpsTab"),
            // AdminApprove: () => import(/* webpackChunkName: "chunks/admin/approve"*/"./AdminApprove"),
            BulkLoadTab: () => import(/* webpackChunkName: "chunks/admin/bulkLoad"*/"./BulkLoadTab"),
            RoleUsersTab: () => import(/* webpackChunkName: "chunks/admin/roleUsers"*/"./RoleUsersTab"),
            HelperFilesTab: () => import(/* webpackChunkName: "chunks/admin/helperFiles"*/"./HelperFilesTab"),
        },
        props : [
            'user',
        ],
        created() {
            // this.styleMode()
        },
        mounted() {
            this.getTabs()
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
                canCreatePop: false,
                canUpdateEfizity: false,
                canEditPermissions: false,
                canUploadFiles: false,

                currentTab: this.$route.hash != '' ? this.$route.hash.split('#')[1] : 'pops'
            }
        },

        computed: {
            hasPermissions() {
                let bool = false
                switch (this.currentTab) {
                    case 'pops':
                        bool = this.canCreatePop
                        break
                    case 'tps':
                        bool = true
                        break
                    case 'bulkLoad':
                        bool = this.canUpdateEfizity
                        break
                    case 'roleUsers':
                        bool = this.canEditPermissions
                        break
                    case 'helperFiles':
                        bool = this.canUploadFiles
                        break
                    default:
                        bool = false
                }
                return bool
            },

            currentTabComponent: function () {
                return this.currentTab + '-tab'
            }
        },

        methods: {
            canClick(tab) {
                let bool = false
                switch (tab) {
                    case 'pops':
                        bool = this.canCreatePop
                        break
                    case 'tps':
                        bool = true
                        break
                    case 'bulkLoad':
                        bool = this.canUpdateEfizity
                        break
                    case 'roleUsers':
                        bool = this.canEditPermissions
                        break
                    case 'helperFiles':
                        bool = this.canUploadFiles
                        break
                    default:
                        bool = false
                }
                return bool
            },
            
            // Style mode
            // styleMode(){
            //     if (this.darkMode == 1) {
            //         // dark mode
            //         this.bodyBackground = 'has-background-black-ter'
            //         this.boxBackground = 'has-background-dark'
            //         this.primaryText = 'has-text-white'
            //         this.secondaryText = 'has-text-grey-light'
            //         this.searchBodyBackground = 'has-background-dark'
            //     } else {
            //         // light mode
            //         this.bodyBackground = 'has-background-light'
            //         this.boxBackground = 'has-background-white'
            //         this.primaryText = 'has-text-dark'
            //         this.secondaryText = 'has-text-grey'
            //         this.searchBodyBackground = 'has-background-white'
            //     }
            // },

            getTabs() {
                axios.get(`/api/tabs`)
                .then((response) => {
                    if(response.data.can.viewAdmin) {
                        this.tabs = response.data.admin
                    }
                    console.log(response.data)
                    this.canCreatePop = response.data.can.createPop
                    this.canUpdateEfizity = response.data.can.updateEfizity
                    this.canEditPermissions = response.data.can.editPermissions
                    this.canUploadFiles = response.data.can.uploadFiles
                })
            }
        }
    }
</script>
