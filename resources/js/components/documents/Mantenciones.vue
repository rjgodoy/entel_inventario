<template>
    <div>
        <Files 
            :files=files
            :folders=folders
            :user=user
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
            files: [],
            folder_name: 'Informes'
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
        getFolders() {
            let params = {
                'api_token': this.user.api_token,
                'folder_name': this.folderTab.label,
                'folder_id': this.folder_selected_id
            }
            axios.get(`/api/folders/${this.pop.id}`, { params })
            .then((response) => {
                // console.log(response)
                this.folders = response.data.folders
                this.canCreateFolder = response.data.can.create
                this.canDeleteFolder = response.data.can.delete
            })
        },

        getFiles() {
            let params = {
                'api_token': this.user.api_token,
                'folder_name': this.folderTab.label,
                'folder_id': this.folder_selected_id
            }
            axios.get(`/api/files/${this.pop.id}`, { params: params })
            .then((response) => {
                console.log(response.data)
                this.files = response.data.files
                this.canUploadFile = response.data.can.upload
                this.canDeleteFile = response.data.can.delete
            })
        },

        faFile(ext) {
            var icon = ext == 'pdf' ? 'file-pdf' : 
                    (ext == 'jpg' || ext == 'png' || ext == 'jpeg' ? 'file-image' : 
                        (ext == 'xls' || ext == 'xlsx' ? 'file-excel' : 'file')
                    )

            var type = ext == 'pdf' ? 'has-text-info' : 
                    (ext == 'jpg' || ext == 'png' || ext == 'jpeg' ? 'has-text-warning' : 
                        (ext == 'xls' || ext == 'xlsx' ? 'has-text-success' : 'has-text-primary')
                    )
            return {
                'icon': icon,
                'type': type
                }
        },

        readFile(file) {
            this.isLoading = true
            var params = {
                'api_token': this.user.api_token,
                'dirname': file.dirname,
                'basename': file.basename,
                'mime': file.mime,
            }
            // console.log(params)
            axios.get('/api/viewFile', { 
                params: params, 
                responseType: 'arraybuffer' 
            })
            .then((response) => {
                console.log(response)
                const blob = new Blob([response.data], { type: file.mime })
                // const objectUrl = window.URL.createObjectURL(blob)

                // IE doesn't allow using a blob object directly as link href
                // instead it is necessary to use msSaveOrOpenBlob
                if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                    window.navigator.msSaveOrOpenBlob(newBlob)
                    return
                }

                const data = window.URL.createObjectURL(blob)
                let link = document.createElement('a')
                link.href = data
                link.download = file.basename
                link.click()
                // setTimeout(function () {
                //     // For Firefox it is necessary to delay revoking the ObjectURL
                //     window.URL.revokeObjectURL(data)
                // }, 100)

                this.isLoading = false
                this.$buefy.toast.open({
                    message: 'El archivo se ha descargado exitosamente.',
                    type: 'is-success',
                    duration: 5000
                })
            }).catch((error) => {
                console.log(error)
                this.isLoading = false
                this.$buefy.toast.open({
                    message: 'Ha ocurrido un error. Favor contactar al administrador',
                    type: 'is-danger',
                    duration: 5000
                })
            })
        },

        setBreadcrum(name) {
            if (this.bread == '') {
                this.bread = name
            } else {
                this.bread = this.bread + ' / ' + name
            }
        },

        backOne() {
            var split = this.bread.split('/')
            var deep = split.pop()
            console.log(split)
            this.bread = ''
            for (let index = 0; index < split.length; index++) {
                if (this.bread == '') {
                    this.bread = split[index]
                } else {
                    this.bread = this.bread + ' / ' + split[index]
                }
            }
            this.folder_selected_id = null
            this.getFolders()
        }
        
    }
}
</script>
