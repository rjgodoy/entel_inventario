<template>
    <div>
        <section class="section">
            <div class="">

                <div class="tile is-ancestor" style="margin: -40px 0 -40px 0;">

                    <div class="tile is-parent" v-for="tab in tabs" :key="tab.id">
                        <a class="tile is-child box" :key="tab.component" :class="currentTab === tab.component ? 'is-link is-bold' : ''" @click="currentTab = tab.component">
                            <div class="is-size-6 has-text-weight-semibold has-text-centered">
                                {{ tab.title }}
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            
        </section>

        <keep-alive>
            <admin-content 
                :is="currentTabComponent"
                :user="user"
            />
        </keep-alive>
    </div>
</template>

<script>
export default {
    components: {
        Mantenciones: () => import('./Mantenciones'),
        Procedimientos: () => import('./Procedimientos'),
        Manuales: () => import('./Manuales'),
        Fotos: () => import('./Fotos'),
        Construccion: () => import('./Construccion'),
        ObrasCiviles: () => import('./ObrasCiviles'),
        Cam: () => import('./Cam'),
        GestionAmbiental: () => import('./GestionAmbiental'),
    },

    props : [
        'user'
    ],

    data() {
        return {
            tabs: [
                {
                    "title": "Mantenciones",
                    "component": "mantenciones",
                    "icon": "file",
                    "icon_type": "fas"
                },
                {
                    "title": "Procedimientos",
                    "component": "procedimientos",
                    "icon": "file-invoice",
                    "icon_type": "fas"
                },
                {
                    "title": "Manuales",
                    "component": "manuales",
                    "icon": "file-invoice",
                    "icon_type": "fas"
                },
                {
                    "title": "Fotos",
                    "component": "fotos",
                    "icon": "file-invoice",
                    "icon_type": "fas"
                },
                {
                    "title": "Construcción",
                    "component": "construccion",
                    "icon": "file-invoice",
                    "icon_type": "fas"
                },
                {
                    "title": "Obras Civiles",
                    "component": "obras-civiles",
                    "icon": "file-invoice",
                    "icon_type": "fas"
                },
                {
                    "title": "CAM",
                    "component": "cam",
                    "icon": "file-invoice",
                    "icon_type": "fas"
                },
                {
                    "title": "Gestión Ambiental",
                    "component": "gestion-ambiental",
                    "icon": "file-invoice",
                    "icon_type": "fas"
                },
                
            ],
            currentTab: 'fotos'
        }
    },

    computed: {
        currentTabComponent: function () {
            return this.currentTab
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
