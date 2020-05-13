<template>
    <div>
        <Files 
            :files=files
            :folders=folders
            :foldersView=foldersView
            :folder_name=folder_name
            :user=user
            :canCreateFolder=canCreateFolder
            :canDeleteFolder=canDeleteFolder
            v-on:textChildToParent="textFromChild"
            v-on:folderIdChildToParent="folderFromChild"
            />
    </div>
</template>

<script>
export default {
    components: {
        Files: () => import('./Files')
    },

    props : [
        'user'
    ],

    data() {
        return {
            folders: [],
            foldersView: [],
            files: [],
            folder_name: 'Fotos',
            canUploadFile: false,
            canDeleteFile: false,
            canCreateFolder: false,
            canDeleteFolder: false,
            searchtext: '',
            folder_id: null
        }
    },

    computed: {
        
    },

    created() {
    },

    mounted() {
        this.getFolders()
    },
    
    methods: {
        textFromChild(text) {
            this.searchtext = text
            this.getFolders()
        },

        folderFromChild(id) {
            this.folder_id = id
            // console.log(this.folder_id)
            this.getFoldersView()
            this.getFiles()
        },

        getFolders() {
            let params = {
                'api_token': this.user.api_token,
                'name': this.folder_name,
                'text': this.searchtext,
            }
            axios.get(`/api/folders`, { params })
            .then((response) => {
                // console.log(response)
                this.folders = response.data.folders
                this.canCreateFolder = response.data.can.create
                this.canDeleteFolder = response.data.can.delete
            })
        },

        getFoldersView() {
            let params = {
                'api_token': this.user.api_token,
                'folder_id': this.folder_id
            }
            axios.get(`/api/getFolders`, { params })
            .then((response) => {
                // console.log(response)
                this.foldersView = response.data.folders
                this.canCreateFolder = response.data.can.create
                this.canDeleteFolder = response.data.can.delete
            })
        },

        getFiles() {
            let params = {
                'api_token': this.user.api_token,
                'folder_id': this.folder_id
            }
            axios.get(`/api/getFiles`, { params: params })
            .then((response) => {
                console.log(response.data)
                this.files = response.data.files
                this.canUploadFile = response.data.can.upload
                this.canDeleteFile = response.data.can.delete
            })
        },
        
    }
}
</script>
