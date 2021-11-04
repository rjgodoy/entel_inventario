<template>
    <div class="box tile is-child">
        <div class="field pb-2">
            <!-- <b-checkbox class="is-pulled-right is-link" type="is-round" v-model="validated" @input="validate()"/> -->
            <div class="is-size-5 has-text-weight-bold has-text-grey title">{{ type.type }}</div>

        </div>

        <div v-for="item in type.items" :key="item.id">
            <div class="columns mb-1">
                <div class="column is-1">
                    <b-tooltip :label="status(revision.statuses, item.id).status == 'success' ? 'OK' : (status(revision.statuses, item.id).status == 'warning' ? 'NO OK' : 'N/A')" position="is-left" type="is-dark">
                        <font-awesome-icon 
                            icon="circle"
                            size="1x" 
                            :class="'has-text-' + status(revision.statuses, item.id).status"
                            />
                    </b-tooltip>
                </div>
                <div class="column">
                    <div class="is-size-5 has-text-weight-normal">{{ item.item }}</div>
                    <div v-if="status(revision.statuses, item.id).observation" class="is-size-6 has-text-weight-light">Observación: {{ status(revision.statuses, item.id).observation }}</div>
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
            // validated: false
        }
    },

    methods: {
        status(statuses, item_id) {
            let q = null
            let obs = null
            Object.keys(statuses).forEach(element => {
                if (statuses[element].energy_equipment_revision_item_id == item_id) {
                    q=statuses[element].status;
                    obs=statuses[element].observation
                }

            })
            return {
                status: q == 1 ? 'success' : (q == 0 || obs ? 'warning' : 'grey-light'),
                observation: obs
            }
        },

        // validate() {
        //     this.type.items.forEach(element => {
        //         let params = {
        //             'energy_equipment_revision_id': this.revision.id,
        //             'user_id': this.user.id,
        //             'validated': this.validated ? 1:0
        //         }
        //         axios.put(`/api/energyEquipmentRevisionStatuses/${element.id}`, params)
        //         .then(response => {
        //             // console.log(response.data)
        //         })
        //     })
        // }
    }
}
</script>
