<template>
    <section class="section container">
        <div class="box" style="position: relative;">
            <b-tabs type="is-boxed" size="is-medium" class="block" v-model="tab">
                <b-tab-item label="Programados"></b-tab-item>
                <b-tab-item label="Ejecutados"></b-tab-item>
            </b-tabs>

            <div v-if="tab == 0">
                <Table :title="'Trabajos programados - Instalaciones de Equipos'" :data=data :loading=loading :tab=tab />
            </div>

            <div v-if="tab == 1">
                <Table :title="'Trabajos ejecutados'" :data=dataHistory :loading=loadingHistory :tab=tab />
            </div>
        </div>

    </section>
</template>

<script>

    export default {
        components: {
            Table: () => import(/* webpackChunkName: "chunks/admin/adminTpsTable"*/'./AdminTpsTable')
        },

        props : [
            'user',
            'bodyBackground',
            'boxBackground',
            'primaryText',
            'secondaryText',
        ],
        
        mounted() {
            this.syncData()
        },

        data() {
            return {
                data: [],
                dataHistory: [],
                tab: 0,
                loading: true,
                loadingHistory: true
            }
        },

        watch: {
            tab(val) {
                this.syncData()
            }
        },

        methods: {
            syncData() {
                if(+this.tab) {
                    axios.get(`/api/psgTp?page=${this.currentPage}&history=1`)
                    .then((response) => {
                        console.log(response.data)
                        this.dataHistory = response.data
                        this.loadingHistory = false
                    })
                } else {
                    axios.get(`/api/psgTp?page=${this.currentPage}&history=0`)
                    .then((response) => {
                        console.log(response.data)
                        this.data = response.data
                        this.loading = false
                    })
                }
            },
        }
    }
</script>
