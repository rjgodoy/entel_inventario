<template>
    <div class="modal-card" style="width: 400px;">
        <header class="modal-card-head has-text-centered">
            <p class="modal-card-title has-text-weight-bold">Crear Carpeta</p>
        </header>
        <section class="modal-card-body">
            <b-field label="Name">
                <b-input v-model="name" autofocus></b-input>
            </b-field>
        </section>
        <footer class="modal-card-foot">
            <button class="button" type="button" @click="$parent.close()">Cerrar</button>
            <button class="button is-primary" @click="createFolder">Crear</button>
        </footer>
    </div>
</template>

<script>    
    export default {
        components: {
        },
        props : [
            'pop',
            'folderTab',
            'folder_id',
            'user'
        ],
        data() {
            return {
                name: ''
            }
        },

        watch: {

        },

        created() {
        },

        mounted() {
        },

        methods: {
            createFolder() {
                var params = {
                    'name': this.name,
                    'pop_id': this.pop.id,
                    'folderTab': this.folderTab.label,
                    'folder_id': this.folder_id,
                    'creator_id': this.user.id,
                }
                axios.post(`/api/createFolder/${this.folder_id}`, params )
                .then(response => {
                    console.log(response.data)
                })
                this.$parent.close()
                this.$eventBus.$emit('folder-created');
            }
        }
    }
</script>
