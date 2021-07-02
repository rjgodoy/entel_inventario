<template>
    <div class="box tile is-child">
        <div class="field">
            <b-checkbox class="is-pulled-right is-link" type="is-round" v-model="validated" @input="validate()"/>
            <div class="is-size-6 has-text-weight-semibold title">{{ type.type }}</div>
        </div>

        <div v-for="item in type.items" :key="item.id">
            <div class="columns">
                <div class="column is-1">
                    <font-awesome-icon 
                        icon="circle"
                        size="1x" 
                        :class="'has-text-' + status(revision.statuses, item.id)"
                        />
                </div>
                <div class="column">
                    <div class="is-size-6">{{ item.item }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props : ['revision', 'type', 'user'],

    data() {
        return {
            validated: false
        }
    },

    mounted() {
    },

    methods: {
        status(statuses, item_id) {
            let q = 0;
            Object.keys(statuses).forEach(element => {
                if (statuses[element].energy_equipment_revision_item_id == item_id) {
                    q=q+statuses[element].status;
                }
            })
            return q != 0 ? 'success' : 'warning'
        },

        validate() {
            this.type.items.forEach(element => {
                let params = {
                    'energy_equipment_revision_id': this.revision.id,
                    'user_id': this.user.id,
                    'validated': this.validated ? 1:0
                }
                axios.put(`/api/energyEquipmentRevisionStatuses/${element.id}`, params)
                .then(response => {
                    console.log(response.data)
                })
            })
        }
    }
}
</script>
