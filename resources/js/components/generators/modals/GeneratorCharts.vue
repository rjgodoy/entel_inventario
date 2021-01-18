<template>
    <div>
        <b-field class="has-text-right" >
            <b-select id="unit" v-model="timeline">
                <option value="day" selected>Día</option>
                <option value="month" >Mes</option>
                <option value="year">Año</option>
            </b-select>
        </b-field>
        <b-field>
            <GeneratorFuelChart :unitData="unitData"/>
        </b-field>
        <hr/>
        <b-field>
            <GeneratorFunctionChart :unitData="unitData"/>
        </b-field>
    </div>
</template>


<script>
var moment = require('moment')

export default {
    components: {
        GeneratorFuelChart: () => import(/* webpackChunkName: "chunks/generators/modals/generatorFuelChart"*/'./GeneratorFuelChart'),
        GeneratorFunctionChart: () => import(/* webpackChunkName: "chunks/generators/modals/generatorFunctionChart"*/'./GeneratorFunctionChart')
    },
    props: ['generator'],
    data () {
        return {
            timeline: "day",
            unitData: null,
        }
    },
    mounted () {
        this.getData()
    },
    watch: {
        timeline(value) {
            this.getData()
        }
    },
    methods: {
        async getData(){
            let params = {
                'unit': this.timeline
            }
            await axios.get(`/api/generatorValues/${this.generator.id}`, { params: params })
                .then((response) => {
                    this.unitData = response.data
                    // console.log(response.data)
                })
        }
    }
}
</script>