<template>
    <div class="">
        <div class="container" style="margin: 20px auto auto auto;">
            <div class="has-text-centered is-size-5 has-text-weight-semibold">Buscar POP a editar</div>
        </div>
         <!-- BUSCAR -->
        <div class="container" style="width: 50%; margin-top: 30px;">
            <span class="container is-size-7 is-right" v-if="searchText.length >= 4">
                <strong style="margin-left: 10px;">{{ counter | numeral('0,0')}}</strong> pops encontrados
            </span>
            <p class="control has-icons-left has-icons-right">
                <input 
                    class="input is-rounded" 
                    :class="searchBodyBackground + ' ' + primaryText" 
                    v-model="searchText" 
                    @keyup="search" 
                    type="text" 
                    arial-label="Buscar..." 
                    placeholder="Buscar..." 
                    autofocus
                    v-clickOutside="clickOutside"
                    @click="setActive"
                    >
                <span class="icon is-small is-left">
                    <font-awesome-icon icon="search"/>
                </span>
                <span class="icon is-small is-right">
                    <button class="delete" @click="clearSearch"></button>
                </span>
            </p>
            
            <div class="dropdown" :class="popSearch.length && active == 1 ? 'is-active' : ''" style="width: 100%">
                <div class="dropdown-menu" style="width: 100%" id="dropdown-menu" role="menu">
                    <div class="dropdown-content" :class="searchBodyBackground + ' ' + primaryText" style="max-height: 400px; overflow: auto;">
                        <div v-for="pop in popSearch" class="dropdown-item">
                            <a @click="selectPop(pop)" class="columns">
                                <div class="column is-6">
                                    <div class="is-size-7 has-text-weight-semibold" :class="secondaryText">
                                        {{ pop ? (pop.nem_fijo && pop.nem_movil ? pop.nem_fijo + ' - ' + pop.nem_movil : (pop.nem_fijo ? pop.nem_fijo : pop.nem_movil)) : 'No tiene nemónico' }}
                                    </div>
                                    <div class="is-size-6 has-text-weight-semibold" :class="primaryText">
                                        {{ pop ? pop.nombre : '' }}
                                    </div>
                                    <div class="is-size-7 has-text-weight-normal" :class="secondaryText">
                                        {{ pop ? pop.comuna.nombre_comuna : '' }}
                                    </div>
                                    <div class="is-size-7 has-text-weight-normal" :class="secondaryText">
                                        {{ pop ? 'Zona ' + pop.comuna.zona.nombre_zona : '' }} - {{ pop ? 'CRM ' + pop.comuna.zona.crm.nombre_crm : '' }}
                                    </div>
                                </div>

                                <div class="column is-1">
                                    <div class="has-text-centered">
                                        <img v-if="pop.attention_type_id == 2" alt="Servicio 24/7" class="" src="img/24_7_color.png" style="max-height: 30px;" />
                                    </div>
                                    <div class="has-text-centered">
                                        <span v-if="pop.alba_project == 1" class="tag is-light is-primary has-text-weight-bold is-size-7">
                                            {{ pop.alba_project == 1 ? 'alba' : '' }}
                                        </span>
                                    </div>
                                </div>

                                <div class="column">
                                    <div class="tags has-addons is-right">
                                        <span class="tag is-dark">categoría</span>
                                        <span 
                                            class="tag has-text-weight-bold" 
                                            :class="pop.classification_type_id == 1 ? 'is-danger' : 
                                                (pop.classification_type_id == 2 ? 'is-warning' : 
                                                (pop.classification_type_id == 3 ? 'is-link' : 'is-info'))"
                                        >
                                            {{ pop ? pop.classification_type : '' }}
                                        </span>
                                    </div>
                                </div>
                            </a>
                            <hr class="dropdown-divider">
                        </div>
                    </div>
                </div>
            </div>       
        </div>

        <section>
            <!-- Editar POP {{ selectedPop }} -->
        </section>
        <section class="section container" v-if="selectedPop">

            <div class="columns">
                <div class="column is-one-third">
                    <div class="field is-size-5 has-text-weight-semibold">Datos basicos</div>

                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label has-text-weight-semibold is-size-7">Nombre</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <p class="control is-small">
                                    <input class="input is-small" type="text" name="nombre" :value="selectedPop.nombre" :placeholder="selectedPop.nombre == null ? 'Sin información' : ''" readonly>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label has-text-weight-semibold is-size-7">Nemónico Móvil</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <p class="control is-small">
                                    <input class="input is-small" type="text" name="nem_movil" :value="selectedPop.nem_movil" :placeholder="selectedPop.nem_movil == null ? 'Sin información' : ''" readonly>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label has-text-weight-semibold is-size-7">Nemónico Fijo</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <p class="control is-small">
                                    <input class="input is-small" type="text" name="nem_fijo" :value="selectedPop.nem_fijo" :placeholder="selectedPop.nem_fijo == null ? 'Sin información' : ''" readonly>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label has-text-weight-semibold is-size-7">Codigo Planificación</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <p class="control is-small">
                                    <input class="input is-small" type="text" name="cod_planificacion" :value="selectedPop.cod_planificacion" :placeholder="selectedPop.cod_planificacion == null ? 'Sin información' : ''" readonly>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="field is-size-5 has-text-weight-semibold">Datos de ubicación</div>

                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label has-text-weight-semibold is-size-7">Dirección</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <p class="control is-small">
                                    <input class="input is-small" type="text" name="direccion" :value="selectedPop.direccion" :placeholder="selectedPop.direccion == null ? 'Sin información' : ''">
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label has-text-weight-semibold is-size-7">Comuna</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <div class="control">
                                    <div class="select is-small">
                                        <select name="nombre_comuna" :value="selectedComuna.nombre_comuna" @change="changeComuna" v-model="selectedComuna">
                                            <option v-for="comuna in comunas.data" v-bind:value="comuna">{{ comuna.nombre_comuna }}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label has-text-weight-semibold is-size-7">Región</label>
                        </div>

                        <div class="field-body">
                            <div class="field">
                                <p class="control is-small">
                                    <input class="input is-small" type="text" name="nombre_region" :value="selectedRegion.id == 7 ? selectedRegion.nombre_region : selectedRegion.sigla_region + ' Región - ' + selectedRegion.nombre_region" :placeholder="selectedRegion == null ? 'Sin información' : ''" readonly>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label has-text-weight-semibold is-size-7">Zona</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <p class="control is-small">
                                    <input class="input is-small" type="text" name="nombre_zona" :value="selectedZona.nombre_zona" :placeholder="selectedZona == null ? 'Sin información' : ''" readonly>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label has-text-weight-semibold is-size-7">CRM</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <p class="control is-small">
                                    <input class="input is-small" type="text" name="nombre_crm" :value="selectedCrm.nombre_crm" :placeholder="selectedCrm == null ? 'Sin información' : ''" readonly>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label has-text-weight-semibold is-size-7">Latitud</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <p class="control is-small">
                                    <input class="input is-small" type="text" name="latitude" :value="selectedPop.latitude" :placeholder="selectedPop.latitude == null ? 'Sin información' : ''">
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label has-text-weight-semibold is-size-7">Longitud</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <p class="control is-small">
                                    <input class="input is-small" type="text" name="longitude" :value="selectedPop.longitude" :placeholder="selectedPop.longitude == null ? 'Sin información' : ''">
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="field is-size-5 has-text-weight-semibold">Datos de servicios</div>

                    <div class="columns">
                        <div class="column field is-horizontal">
                            <div class="field">
                                <input 
                                    id="switchPE3G" 
                                    type="checkbox" 
                                    name="switchPE3G" 
                                    class="switch is-rounded is-link is-small" 
                                    @change="confirm('pe_3g')"
                                    :checked="selectedPop.pe_3g == 1 ? true : false"
                                >
                                <label for="switchPE3G">PE 3G</label>
                            </div>
                        </div>

                        <div class="column field is-horizontal">
                            <div class="field">
                                <input 
                                    id="switchMPLS" 
                                    type="checkbox" 
                                    name="switchMPLS" 
                                    class="switch is-rounded is-link is-small" 
                                    @change="confirm('mpls')"
                                    :checked="selectedPop.mpls == 1 ? true : false"
                                >
                                <label for="switchMPLS">MPLS</label>
                            </div>
                        </div>
                    </div>

                    <div class="columns">
                        <div class="column field is-horizontal">
                            <div class="field">
                                <input 
                                    id="switchOLT" 
                                    type="checkbox" 
                                    name="switchOLT" 
                                    class="switch is-rounded is-link is-small" 
                                    @change="confirm('olt')"
                                    :checked="selectedPop.olt == 1 ? true : false"
                                >
                                <label for="switchOLT">OLT</label>
                            </div>
                        </div>

                        <div class="column field is-horizontal">
                            <div class="field">
                                <input 
                                    id="switchOLT3Play" 
                                    type="checkbox" 
                                    name="switchOLT3Play" 
                                    class="switch is-rounded is-link is-small" 
                                    @change="confirm('olt_3play')"
                                    :checked="selectedPop.olt_3play == 1 ? true : false"
                                >
                                <label for="switchOLT3Play">OLT 3Play</label>
                            </div>
                        </div>
                    </div>

                    <div class="columns">
                        <div class="column field is-horizontal">
                            <div class="field">
                                <input 
                                    id="switchRMN1" 
                                    type="checkbox" 
                                    name="switchRMN1" 
                                    class="switch is-rounded is-link is-small" 
                                    @change="confirm('red_minima_n1')"
                                    :checked="selectedPop.red_minima_n1 == 1 ? true : false"
                                >
                                <label for="switchRMN1">Red Mínima N1</label>
                            </div>
                        </div>

                        <div class="column field is-horizontal">
                            <div class="field">
                                <input 
                                    id="switchRMN2" 
                                    type="checkbox" 
                                    name="switchRMN2" 
                                    class="switch is-rounded is-link is-small" 
                                    @change="confirm('red_minima_n2')"
                                    :checked="selectedPop.red_minima_n2 == 1 ? true : false"
                                >
                                <label for="switchRMN2">Red Mínima N1</label>
                            </div>
                        </div>
                    </div>

                    <div class="columns">
                        <div class="column field is-horizontal">
                            <div class="field">
                                <input 
                                    id="switchCORE" 
                                    type="checkbox" 
                                    name="switchCORE" 
                                    class="switch is-rounded is-link is-small" 
                                    @change="confirm('core')"
                                    :checked="selectedPop.core == 1 ? true : false"
                                >
                                <label for="switchCORE">CORE</label>
                            </div>
                        </div>

                        <div class="column field is-horizontal">
                            <div class="field">
                                <input 
                                    id="switchVIP" 
                                    type="checkbox" 
                                    name="switchVIP" 
                                    class="switch is-rounded is-link is-small" 
                                    @change="confirm('vip')"
                                    :checked="selectedPop.vip == 1 ? true : false"
                                >
                                <label for="switchVIP">VIP</label>
                            </div>
                        </div>
                    </div>

                    <div class="columns">
                        <div class="column field is-horizontal">
                            <div class="field">
                                <input 
                                    id="switchOBLIGATORIA" 
                                    type="checkbox" 
                                    name="switchOBLIGATORIA" 
                                    class="switch is-rounded is-link is-small" 
                                    @change="confirm('localidad_obligatoria')"
                                    :checked="selectedPop.localidad_obligatoria == 1 ? true : false"
                                >
                                <label for="switchOBLIGATORIA">Localidad Obligatoria</label>
                            </div>
                        </div>

                        <div class="column field is-horizontal">
                            <div class="field">
                                <input 
                                    id="switchRANCO" 
                                    type="checkbox" 
                                    name="switchRANCO" 
                                    class="switch is-rounded is-link is-small" 
                                    @change="confirm('ranco')"
                                    :checked="selectedPop.ranco == 1 ? true : false"
                                >
                                <label for="switchRANCO">RANCO</label>
                            </div>
                        </div>
                    </div>

                    <div class="columns">
                        <div class="column field is-horizontal">
                            <div class="field">
                                <input 
                                    id="switchBAFI" 
                                    type="checkbox" 
                                    name="switchBAFI" 
                                    class="switch is-rounded is-link is-small" 
                                    @change="confirm('bafi')"
                                    :checked="selectedPop.bafi == 1 ? true : false"
                                >
                                <label for="switchBAFI">BAFI</label>
                            </div>
                        </div>

                        <div class="column field is-horizontal">
                            <div class="field">
                                <input 
                                    id="switchOFFGRID" 
                                    type="checkbox" 
                                    name="switchOFFGRID" 
                                    class="switch is-rounded is-link is-small" 
                                    @change="confirm('offgrid')"
                                    :checked="selectedPop.offgrid == 1 ? true : false"
                                >
                                <label for="switchOFFGRID">Offgrid</label>
                            </div>
                        </div>
                    </div>

                    <div class="columns">
                        <div class="column field is-horizontal">
                            <div class="field">
                                <input 
                                    id="switchSOLAR" 
                                    type="checkbox" 
                                    name="switchSOLAR" 
                                    class="switch is-rounded is-link is-small" 
                                    @change="confirm('solar')"
                                    :checked="selectedPop.solar == 1 ? true : false"
                                >
                                <label for="switchSOLAR">Solar</label>
                            </div>
                        </div>

                        <div class="column field is-horizontal">
                            <div class="field">
                                <input 
                                    id="switchEOLICA" 
                                    type="checkbox" 
                                    name="switchEOLICA" 
                                    class="switch is-rounded is-link is-small" 
                                    @change="confirm('eolica')"
                                    :checked="selectedPop.eolica == 1 ? true : false"
                                >
                                <label for="switchEOLICA">Eólica</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>

    </div>
</template>

<script>
    import VuePagination from '../VuePagination.vue'
    import Multiselect from 'vue-multiselect'
    export default {
        components: {
            'vue-pagination': VuePagination,
            'multiselect': Multiselect
        },
        props : [
            'user',
            'bodyBackground',
            'boxBackground',
            'primaryText',
            'secondaryText',
        ],
        created() {
        },
        mounted() {

        },
        data() {
            return {
                core: 0,
                comunas: [],
                searchBodyBackground: '',
                searchText: '',
                selectedPop: null,
                selectedComuna: null,
                selectedRegion: null,
                selectedZona: null,
                selectedCrm: null,
                region: null,
                zona: null,
                crm: null,
                popSearch: [],
                active: null,
                counter: 0,

                dataComuna: null
            }
        },
        methods: {
            // Triggers
            selectPop(pop) {
                this.selectedPop = pop
                this.selectedComuna = pop.comuna
                this.selectedRegion = pop.comuna.region
                this.selectedZona = pop.comuna.zona
                this.selectedCrm = pop.comuna.zona.crm

            },
            // Search bar
            search(){
                if (this.searchText.length >= 4) {
                    axios.get(`api/searchPopsEdicion/${this.searchText}/${this.core}?api_token=${this.user.api_token}`)
                        .then((response) => {
                            this.popSearch = response.data
                            this.counter = this.popSearch.length
                            this.active = 1
                        })
                        .catch(() => {
                        });

                    axios.get(`api/comunas?api_token=${this.user.api_token}`)
                        .then((response) => {
                            this.comunas = response.data
                        })
                        .catch(() => {
                        });
                } else if (this.searchText == '') {
                    this.clearSearch()
                } else {
                    this.popSearch = []
                }
            },
            changeComuna() {
                this.selectedRegion = this.selectedComuna.region
                this.selectedZona = this.selectedComuna.zona
                this.selectedCrm = this.selectedComuna.zona.crm
            },
            clearSearch() {
                this.popSearch = []
                this.searchText = ''
                this.selectedPop = null
            },
            clickOutside() {
                this.active = null
            },
            setActive() {
                this.active = 1
            },

            confirm(string){
                // Ask
                var bool = confirm("Seguro desea modificar el dato del POP?");
                // Confirmation
                if (bool) {
                    this.changeData(string)
                    alert("Dato actualizado exitosamente!");
                } else {
                    // alert("cancelo la solicitud");
                }
                
            },

            changeData(data) {
                axios.put(`api/pop/${this.selectedPop.id}?api_token=${this.user.api_token}&${data}=${Math.abs(this.selectedPop[data] - 1)}`)
                .then((response) => {
                    console.log(response)
                })
            },

        }
    }
</script>
