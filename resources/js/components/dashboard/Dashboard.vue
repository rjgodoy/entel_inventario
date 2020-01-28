<template>
    <div class="">
        
        <section class="section is-marginless" :class="bodyBackground">
            

            <!-- SWITCH CORE & CRM BUTTONS-->
            <div class="container" style="margin: -20px auto 20px auto;">
                <b-field>
                    <div class="columns">
                        <div class="column">
                            <!-- <b-button class="button is-warning is-small is-pulled-left" @click="viewCriticPops" v-model="criticPopsSwitch">POP Críticos</b-button> -->
                        </div>
                        <div class="column has-text-centered">
                            <b-switch  @input="switchCore">Red CORE</b-switch>
                        </div>
                        <div class="column">
                            <!-- <b-button class="button is-link is-small is-pulled-right" @click="changeStyle" v-model="darkMode">Style</b-button> -->
                        </div>
                    </div>
                    
                </b-field>

                <div class="tile is-ancestor">
                    <div class="tile is-parent" v-for="crm in crms">
                        <a class="tile is-child box" :class="selectedCrm == crm ? 'has-background-link' : boxBackground" @click="selectCrm(crm)">
                            <div :class="selectedCrm == crm ? selectedSecondaryBoxText : secondaryText"> 
                                <div class="is-size-6 has-text-weight-semibold">
                                    CRM {{ crm.nombre_crm }}
                                </div>

                                <div style="margin-top: 10px;">
                                    <div class="is-size-7 has-text-weight-light" v-text="crm.id == 3 ? 'Coordinador Metropolitano' : 'Subgerente'"></div> 
                                    <div class="is-size-7 has-text-weight-semibold">{{ crm.subgerente_crm }}</div>
                                </div>
                                <!-- <div class="is-size-5 has-text-weight-semibold">
                                    <div>{{ crm.zonas.length }}</div>
                                    <div class="is-size-7 has-text-weight-normal">Zonas</div> 
                                </div> -->
                            </div>

                            
                            <!-- <div 
                                class="is-size-2 has-text-centered has-text-weight-semibold" 
                                :class="selectedCrm == crm ? selectedPrimaryBoxText : primaryText"
                                >
                                25.2
                                <span class="is-size-5">&nbsp;Cº</span>
                            </div> -->

                        </a>
                    </div>
                </div>
            </div>

            <!-- ZONA BUTTONS -->
            <div v-if="selectedCrm != null" class="" :class="innerBackground" style="margin: 0 -24px 0 -24px">
                <div class="container" style="margin: -20px auto 10px auto;">
                    <div class="tile is-ancestor">
                        <div class="tile is-parent" v-for="zona in zonas">
                            <a class="tile is-child box" :class="selectedZona == zona ? 'has-background-link' : boxBackground" @click="selectZona(zona)">
                                <div :class="selectedZona == zona ? selectedSecondaryBoxText : secondaryText"> 
                                    <div class="is-size-6 has-text-weight-semibold">
                                        Zona {{ zona.nombre_zona }}
                                    </div>

                                    <div style="margin-top: 10px;">
                                        <div class="is-size-7 has-text-weight-light">Coordinador</div> 
                                        <div class="is-size-7 has-text-weight-semibold">{{ zona.responsable.nombre }} {{ zona.responsable.apellido }}</div>
                                    </div>
                                    <!-- <div class="is-size-5 has-text-weight-semibold">
                                        <div>{{ crm.zonas.length }}</div>
                                        <div class="is-size-7 has-text-weight-normal">Zonas</div> 
                                    </div> -->
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- BUSCADOR -->
            <!-- <div class="container" style="width: 50%; margin-top: 30px;">
                <p class="control has-icons-left has-icons-right">
                    <input 
                        class="input is-rounded is-medium" 
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
                        <span v-if="searchText.length >= 3" class="container is-size-7 is-right field" :class="secondaryText" >
                            <strong style="margin-left: 10px;" :class="primaryText">{{ counter | numeral('0,0')}}</strong> pops encontrados
                        </span>
                        <div class="dropdown-content" :class="searchBodyBackground + ' ' + primaryText" style="max-height: 400px; overflow: auto;">
                            <div v-for="pop in popSearch" class="dropdown-item" :class="pop.alba_project ? '' : ''">
                                <a :href="'/main#/pop/' + pop.id" target="_blank" class="columns">
                                    <div class="column is-6">
                                        <div class="is-size-7 has-text-weight-semibold" :class="secondaryText">
                                            {{ pop.nem_site }}
                                        </div>
                                        <div class="is-size-6 has-text-weight-semibold" :class="primaryText">
                                            {{ pop ? pop.nombre_sitio : '' }}
                                        </div>
                                        <div class="is-size-7 has-text-weight-normal" :class="secondaryText">
                                            {{ pop ? pop.nombre_comuna : '' }}
                                        </div>
                                        <div class="is-size-7 has-text-weight-normal" :class="secondaryText">
                                            {{ pop ? 'Zona ' + pop.nombre_zona : '' }} - {{ pop ? 'CRM ' + pop.nombre_crm : '' }}
                                        </div>
                                    </div>

                                    <div class="column is-1">
                                        <div class="has-text-centered">
                                            <span v-if="pop.alba_project == 1" class="tag is-light is-info has-text-weight-bold is-size-7">
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
                                <div class="field">
                                    <button class="button is-small is-default" @click="selectPop(pop)" v-model="selectedPop">
                                        <font-awesome-icon icon="map-marked-alt"/>&nbsp;Ver en mapa
                                    </button>
                                    <a class="button is-small is-link" :href="'/main#/pop/' + pop.id" target="_blank">
                                        <font-awesome-icon icon="info-circle"/>&nbsp;Ver detalles
                                    </a>
                                </div>
                                <hr class="dropdown-divider">
                            </div>
                        </div>
                    </div>
                </div>       
            </div> -->

            <div class="container" style="width: 50%; margin-top: 30px;">
                <b-autocomplete
                    autofocus
                    size="is-medium"
                    :data="popSearch"
                    rounded
                    icon="search"
                    icon-pack="fas"
                    placeholder="Buscar por nemónico, nombre o direccion del sitio..."
                    :custom-formatter="searchFormat"
                    :loading="isFetching"
                    :check-infinite-scroll="true"
                    @typing="getAsyncData"
                    @select="option => selectedPop = option"
                    @infinite-scroll="getMoreAsyncData">

                    <template slot-scope="props">
                        <div class="columns">
                        <!-- <a :href="'/main#/pop/' + props.option.id" target="_blank" class="columns"> -->
                            <div class="column is-6">
                                <div class="is-size-7 has-text-weight-semibold" :class="secondaryText">
                                    {{ props.option.nem_site }}
                                </div>
                                <div class="is-size-6 has-text-weight-semibold" :class="primaryText">
                                    {{ props.option ? props.option.nombre_sitio : '' }}
                                </div>
                                <div class="is-size-7 has-text-weight-normal" :class="secondaryText">
                                    {{ props.option ? props.option.nombre_comuna : '' }}
                                </div>
                                <div class="is-size-7 has-text-weight-normal" :class="secondaryText">
                                    {{ props.option ? 'Zona ' + props.option.nombre_zona : '' }} - {{ props.option ? 'CRM ' + props.option.nombre_crm : '' }}
                                </div>
                            </div>

                            <div class="column is-1">
                                <div class="has-text-centered">
                                    <span v-if="props.option.alba_project == 1" class="tag is-light is-info has-text-weight-bold is-size-7">
                                        {{ props.option.alba_project == 1 ? 'alba' : '' }}
                                    </span>
                                </div>
                                
                            </div>

                            <div class="column">
                                <div class="tags has-addons is-right">
                                    <span class="tag is-dark">categoría</span>
                                    <span 
                                        class="tag has-text-weight-bold" 
                                        :class="props.option.classification_type_id == 1 ? 'is-danger' : 
                                            (props.option.classification_type_id == 2 ? 'is-warning' : 
                                            (props.option.classification_type_id == 3 ? 'is-link' : 'is-info'))"
                                    >
                                        {{ props.option ? props.option.classification_type : '' }}
                                    </span>
                                </div>
                            </div>
                        <!-- </a> -->
                        </div>
                        <div class="field">
                            <button class="button is-small is-default" @click="selectPop(props.option)" v-model="selectedPop">
                                <font-awesome-icon icon="map-marked-alt"/>&nbsp;Ver en mapa
                            </button>
                            <a class="button is-small is-link" :href="'/main#/pop/' + props.option.id" target="_blank">
                                <font-awesome-icon icon="info-circle"/>&nbsp;Ver detalles
                            </a>
                        </div>
                    </template>
                    <template slot="footer">
                        <span v-show="page > totalPages" class="has-text-grey"> Thats it! No more movies found. </span>
                    </template>
                </b-autocomplete>
            </div>

            <!-- CUADROS -->
            <div class="" :class="bodyBackground" style="margin: 20px 0 -30px 0;">
                <div class="">
                    <div class="tile is-ancestor">
                        <div class="tile is-vertical">
                            <div class="tile">
                                <div class="tile is-vertical">
                                    <div class="tile is-parent">
                                        <a class="tile is-child box has-text-centered" @click="currentTab = 'pops'">
                                            <div class="" style="margin-top: 10px;">
                                            <!-- <b-tag rounded style="margin-top: 10px;" type="is-warning is-light" size="is-large"> -->
                                                <font-awesome-icon icon="map-marker-alt" class="has-text-link" size="2x"/>
                                            <!-- </b-tag> -->
                                            </div>
                                            
                                            <div class="is-size-3 has-text-weight-bold has-text-centered" style="margin-top: 10px;">{{ popsQuantity | numeral('0,0') }}
                                                <p class="is-size-6 has-text-weight-normal">POP</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="tile is-parent">
                                        <a class="tile is-child box has-text-centered" @click="currentTab = 'technologies'">
                                            <div class="" style="margin-top: 10px;">
                                            <!-- <b-tag rounded style="margin-top: 10px;" type="is-warning is-light" size="is-large"> -->
                                                <font-awesome-icon icon="signal" class="has-text-info" size="2x"/>
                                            <!-- </b-tag> -->
                                            </div>
                                            <div class="is-size-3 has-text-weight-bold has-text-centered" style="margin-top: 10px;">{{ technologiesQuantity | numeral('0,0') }}
                                                <p class="is-size-6 has-text-weight-normal">TECNOLOGIAS</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                <div class="tile is-vertical">
                                    <div class="tile is-parent">
                                        <a class="tile is-child box has-text-centered" @click="currentTab = 'sites'">
                                            <div class="" style="margin-top: 10px;">
                                            <!-- <b-tag rounded style="margin-top: 10px;" type="is-warning is-light" size="is-large"> -->
                                                <font-awesome-icon icon="server" class="has-text-eco" size="2x"/>
                                            <!-- </b-tag> -->
                                            </div>
                                            <div class="is-size-3 has-text-weight-bold has-text-centered" style="margin-top: 10px;">{{ sitesQuantity | numeral('0,0') }}
                                                <p class="is-size-6 has-text-weight-normal">SITIOS</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="tile is-parent">
                                        <a class="tile is-child box has-text-centered" @click="currentTab = 'critics'">
                                            <div class="" style="margin-top: 10px;">
                                            <!-- <b-tag rounded style="margin-top: 10px;" type="is-warning is-light" size="is-large"> -->
                                                <font-awesome-icon icon="map-marker-alt" class="has-text-warning" size="2x"/>
                                            <!-- </b-tag> -->
                                            </div>
                                            <div class="is-size-3 has-text-weight-bold has-text-centered" style="margin-top: 10px;">{{ criticsQuantity | numeral('0,0') }}
                                                <p class="is-size-6 has-text-weight-normal">POP CRITICOS</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="tile">
                                <div class="tile is-parent">
                                    <radial-chart></radial-chart>
                                </div>
                            </div>
                        </div>



                        <div class="tile is-parent is-vertical">
                            <map-view
                                :selectedPop="selectedPop"
                                :map_attributes="map_attributes"
                                :darkMode="darkMode"
                                :criticPopsSwitch="criticPopsSwitch"
                                :pops="pops"
                            />                                    
                        </div>

                        <keep-alive>
                            <component :is="currentTabComponent"
                                :bodyBackground="bodyBackground"
                                :boxBackground="boxBackground"
                                :primaryText="primaryText"
                                :secondaryText="secondaryText"
                                :selectedCrm="this.selectedCrm"
                                :selectedZona="this.selectedZona"
                                :core="core"
                                :last_updated="currentLastUpdateData"
                            />
                        </keep-alive>
                    </div>

                    <!-- CUADROS DE INFORMACION -->
                    <!-- <div class="tile is-ancestor">
                        <keep-alive>
                            <critic-pops-table v-if="criticPopsSwitch" 
                                :bodyBackground="bodyBackground"
                                :boxBackground="boxBackground"
                                :primaryText="primaryText"
                                :secondaryText="secondaryText"
                                :selectedCrm="this.selectedCrm"
                                :selectedZona="this.selectedZona"
                                :core="core"
                            />
                        </keep-alive>

                        <keep-alive>
                            <pop-data v-if="!criticPopsSwitch"
                                :bodyBackground="bodyBackground"
                                :boxBackground="boxBackground"
                                :primaryText="primaryText"
                                :secondaryText="secondaryText"
                                :selectedCrm="this.selectedCrm"
                                :selectedZona="this.selectedZona"
                                :core="core"
                                :last_update="last_update_pops"
                            />
                        </keep-alive>

                        <div class="tile is-parent is-vertical">
                            <map-view
                                :selectedPop="selectedPop"
                                :map_attributes="map_attributes"
                                :darkMode="darkMode"
                                :selectedPops="selectedPops"
                                :criticPopsSwitch="criticPopsSwitch"
                                :pops="pops"
                            />                                    
                        </div>

                        <sites-data
                            :bodyBackground="bodyBackground"
                            :boxBackground="boxBackground"
                            :primaryText="primaryText"
                            :secondaryText="secondaryText"
                            :selectedCrm="this.selectedCrm"
                            :selectedZona="this.selectedZona"
                            :core="core"
                            :last_update="last_update_sites"
                            :criticPopsSwitch="criticPopsSwitch"
                        />
                    </div> -->

                    <div class="tile is-ancestor">
                        <div class="tile is-parent">
                            <div class="tile is-child box">
                                <div class="is-size-5 has-text-weight-semibold">PRET</div>
                                <div class="is-size-2 has-text-centered">{{ lastDataCounter.pret }}
                                    <p class="is-size-6 has-text-weight-light">Sitios nuevos ingresados esta semana</p>
                                </div>
                                <div class="field" style="margin-top: 20px;">
                                    <div class="is-size-7 has-text-weight-light">Utimo POP ingresado:</div>
                                    <a class="is-size-6" :href="'/main#/pop/2'" target="_blank">ESTAN0098 - Nombre POP</a>
                                    <div class="is-size-7">Zona Valparaiso - CRM Centro Norte</div>
                                </div>

                                <div class="has-text-right is-size-7 has-text-weight-light">Fecha ingreso: 08/01/2020</div>
                            </div>
                        </div>

                        <div class="tile is-parent">
                            <div class="tile is-child box">
                                <div class="is-size-5 has-text-weight-semibold">PSG</div>
                                <div class="is-size-2 has-text-centered">{{ lastDataCounter.psg }}
                                    <p class="is-size-6 has-text-weight-light">Equipos ingresados esta semana</p>
                                </div>
                                <div class="field" style="margin-top: 20px;">
                                    <div class="is-size-7 has-text-weight-light">Utimo POP ingresado:</div>
                                    <a class="is-size-6" :href="'/main#/pop/2'" target="_blank">ESTAN0098 - Nombre POP</a>
                                    <div class="is-size-7">Zona Valparaiso - CRM Centro Norte</div>
                                </div>

                                <div class="has-text-right is-size-7 has-text-weight-light">Fecha ingreso: 08/01/2020</div>
                            </div>
                        </div>

                        <div class="tile is-parent">
                            <div class="tile is-child box">
                                <div class="is-size-5 has-text-weight-semibold">Sitios Eliminados</div>
                                <div class="is-size-2 has-text-centered">{{ lastDataCounter.psg }}
                                    <p class="is-size-6 has-text-weight-light">Sitios eliminados estas semana</p>
                                </div>
                                <div class="field" style="margin-top: 20px;">
                                    <div class="is-size-7 has-text-weight-light">Utimo POP ingresado:</div>
                                    <a class="is-size-6" :href="'/main#/pop/2'" target="_blank">ESTAN0098 - Nombre POP</a>
                                    <div class="is-size-7">Zona Valparaiso - CRM Centro Norte</div>
                                </div>

                                <div class="has-text-right is-size-7 has-text-weight-light">Fecha ingreso: 08/01/2020</div>
                            </div>
                        </div>

                        <div class="tile is-parent is-5">
                            <pret-data-chart
                                :bodyBackground="bodyBackground"
                                :boxBackground="boxBackground"
                                :primaryText="primaryText"
                                :secondaryText="secondaryText"
                            ></pret-data-chart>
                        </div>
                        
                        
                        <!-- <div class="tile is-parent"> -->
                            <!-- <services-data
                                :bodyBackground="bodyBackground"
                                :boxBackground="boxBackground"
                                :primaryText="primaryText"
                                :secondaryText="secondaryText"
                                :selectedCrm="this.selectedCrm"
                                :selectedZona="this.selectedZona"
                                :core="core"
                            /> -->
                        <!-- </div> -->
                        <!-- <div class="tile is-parent"> -->
                            <!-- <movil-services-data
                                :bodyBackground="bodyBackground"
                                :boxBackground="boxBackground"
                                :primaryText="primaryText"
                                :secondaryText="secondaryText"
                                :selectedCrm="this.selectedCrm"
                                :selectedZona="this.selectedZona"
                                :core="core"
                            /> -->
                        <!-- </div> -->
                        <!-- <div class="tile is-parent"> -->
                            <!-- <infra-data
                                :bodyBackground="bodyBackground"
                                :boxBackground="boxBackground"
                                :primaryText="primaryText"
                                :secondaryText="secondaryText"
                                :selectedCrm="this.selectedCrm"
                                :selectedZona="this.selectedZona"
                                :core="core"
                            /> -->
                        <!-- </div> -->
                    </div>

                </div>
            </div>
            
        </section>

        <!-- PODER -->
        <!-- <section class="section is-marginless" :class="bodyBackgroundEnergy">
            <div class="title">PODER</div>
            <div class="tile is-ancestor">
                <electric-line-data
                    :bodyBackground="bodyBackground"
                    :boxBackground="boxBackgroundEnergy"
                    :primaryText="primaryText"
                    :secondaryText="secondaryText"
                    :selectedCrm="this.selectedCrm"
                    :selectedZona="this.selectedZona"
                    :core="core"
                />
                <generator-group-data
                    :bodyBackground="bodyBackground"
                    :boxBackground="boxBackgroundEnergy"
                    :primaryText="primaryText"
                    :secondaryText="secondaryText"
                    :selectedCrm="this.selectedCrm"
                    :selectedZona="this.selectedZona"
                    :core="core"
                />
                <power-rectifier-data
                    :bodyBackground="bodyBackground"
                    :boxBackground="boxBackgroundEnergy"
                    :primaryText="primaryText"
                    :secondaryText="secondaryText"
                    :selectedCrm="this.selectedCrm"
                    :selectedZona="this.selectedZona"
                    :core="core"
                />
                <div class="tile is-parent">
                    <article class="tile is-child box" :class="boxBackground">
                        <p class="title">Hello World</p>
                        <p class="subtitle">What is up?</p>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child box" :class="boxBackground">
                        <p class="title">Hello World</p>
                        <p class="subtitle">What is up?</p>
                    </article>
                </div>
            </div>
        </section> -->

        <!-- CLIMA -->
        <!-- <section class="section is-marginless" :class="bodyBackgroundClimate">
            <div class="title">CLIMA</div>
            <div class="tile is-ancestor">
                <air-conditioner-data
                    :bodyBackground="bodyBackground"
                    :boxBackground="boxBackgroundClimate"
                    :primaryText="primaryText"
                    :secondaryText="secondaryText"
                    :selectedCrm="this.selectedCrm"
                    :selectedZona="this.selectedZona"
                    :core="core"
                />
                <div class="tile is-parent">
                    <article class="tile is-child box" :class="boxBackground">
                        <p class="title">Hello World</p>
                        <p class="subtitle">What is up?</p>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child box" :class="boxBackground">
                        <p class="title">Hello World</p>
                        <p class="subtitle">What is up?</p>
                    </article>
                </div>
            </div>
        </section> -->

        <!-- INFRAESTRUCTURA -->
       <!--  <section class="section is-marginless" :class="bodyBackgroundInfrastructure">
            <div class="title">INFRAESTRUCTURA</div>
            <div class="tile is-ancestor">
                <vertical-structure-data
                    :bodyBackground="bodyBackground"
                    :boxBackground="boxBackgroundInfrastructure"
                    :primaryText="primaryText"
                    :secondaryText="secondaryText"
                    :selectedCrm="this.selectedCrm"
                    :selectedZona="this.selectedZona"
                    :core="core"
                />
                <infrastructure-data
                    :bodyBackground="bodyBackground"
                    :boxBackground="boxBackgroundInfrastructure"
                    :primaryText="primaryText"
                    :secondaryText="secondaryText"
                    :selectedCrm="this.selectedCrm"
                    :selectedZona="this.selectedZona"
                    :core="core"
                />
                <div class="tile is-parent">
                    <article class="tile is-child box" :class="boxBackground">
                        <p class="title">Hello World</p>
                        <p class="subtitle">What is up?</p>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child box" :class="boxBackground">
                        <p class="title">Hello World</p>
                        <p class="subtitle">What is up?</p>
                    </article>
                </div>
            </div>
        </section> -->

    </div>
</template>

<script>
    // Components
    // import DashboardPopData from './DashboardPopData.vue';
    // import DashboardSitesData from './DashboardSitesData.vue';
    // import DashboardTechnologiesData from './DashboardTechnologiesData.vue';
    // import DashboardServicesData from './DashboardServicesData.vue';
    // import DashboardMovilServicesData from './DashboardMovilServicesData.vue';
    // import DashboardInfraData from './DashboardInfraData.vue';
    // import DashboardCriticPopsTable from './DashboardCriticPopsTable.vue';
    // import DashboardElectricLinesData from './DashboardElectricLinesData.vue';
    // import DashboardGeneratorGroupsData from './DashboardGeneratorGroupsData.vue';
    // import DashboardPowerRectifiersData from './DashboardPowerRectifiersData.vue';
    // import DashboardAirConditionersData from './DashboardAirConditionersData.vue';
    // import DashboardVerticalStructuresData from './DashboardVerticalStructuresData.vue';
    // import DashboardInfrastructuresData from './DashboardInfrastructuresData.vue';
    // import LoadingComponent from '../maps/LoadingComponent.vue';
    // import ErrorComponent from '../maps/ErrorComponent.vue';



    // const MapView = () => ({
    //     // The component to load (should be a Promise)
    //     component: import('../maps/MapView.vue'),
    //     // A component to use while the async component is loading
    //     loading: LoadingComponent,
    //     // A component to use if the load fails
    //     // error: ErrorComponent,
    //     // Delay before showing the loading component. Default: 200ms.
    //     delay: 200,
    //     // The error component will be displayed if a timeout is
    //     // provided and exceeded. Default: Infinity.
    //     timeout: 3000
    // })

    // const RadialChart = () => ({
    //     // The component to load (should be a Promise)
    //     component: import('../RadialChart.vue'),
    //     // A component to use while the async component is loading
    //     // loading: LoadingComponent,
    //     // A component to use if the load fails
    //     // error: ErrorComponent,
    //     // Delay before showing the loading component. Default: 200ms.
    //     delay: 200,
    //     // The error component will be displayed if a timeout is
    //     // provided and exceeded. Default: Infinity.
    //     timeout: 3000
    // })  

    // const PretDataChart = () => ({
    //     // The component to load (should be a Promise)
    //     component: import('./PretDataChart.vue'),
    //     // A component to use while the async component is loading
    //     // loading: LoadingComponent,
    //     // A component to use if the load fails
    //     // error: ErrorComponent,
    //     // Delay before showing the loading component. Default: 200ms.
    //     delay: 200,
    //     // The error component will be displayed if a timeout is
    //     // provided and exceeded. Default: Infinity.
    //     timeout: 3000
    // })      
    // const MapView = () => ({
    //     component: import('../maps/MapView.vue'),
    //     loading: import("../maps/LoadingComponent"),
    //     error: import("../maps/ErrorComponent"),
    //     delay: 0,
    //     timeout: 3000
    // })

    var moment = require('moment');
    import debounce from 'lodash/debounce'
    export default {
        components: {
            PopsData: () => import("./PopsData"),
            SitesData: () => import("./SitesData"),
            TechnologiesData: () => import("./TechnologiesData"),
            CriticsData: () => import("./CriticPopsData"),
            PretDataChart: () => import("./PretDataChart"),
            MapView: () => import('../maps/MapView.vue'),
            RadialChart: () => import('../RadialChart.vue'),
        },
        props : [
        ],
        created() {
            this.styleMode()
        },
        mounted() {
            this.getCrms()
            this.getCounters()
            this.lastUpdate()
            this.syncCounter()
        },
        data: () => {
            return {
                core: 0,
                crms: null,
                zonas: null,

                isFetching: false,
                selected: null,
                page: 1,
                totalPages: 1,
                searchText: '',
                popSearch: [],
                active: 0,
                counter: 0,

                map_attributes: {
                    latitude: -33.44444275,
                    longitude: -70.6561017,
                    zoom: 5
                },

                darkMode: 0,
                bodyBackground: '',
                boxBackground: '',
                primaryText: '',
                secondaryText: '',
                searchBodyBackground: '',
                innerBackground: '',

                bodyBackgroundEnergy: '',
                bodyBackgroundClimate: '',
                bodyBackgroundInfrastructure: '',
                boxBackgroundEnergy: '',
                boxBackgroundClimate: '',
                boxBackgroundInfrastructure: '',
                
                selectedPrimaryBoxText: 'has-text-white',
                selectedSecondaryBoxText: 'has-text-light',

                selectedPop: null,
                selectedCrm: null,
                selectedZona: null,

                criticPopsSwitch: 0,
                criticPops: [],

                pops: [],
                popsCrm: [],
                popsZona: [],
                popsCore: [],

                popsQuantity: 0,
                sitesQuantity: 0,
                technologiesQuantity: 0,
                criticsQuantity: 0,
                lastUpdateData: [],
                lastDataCounter: [],

                currentTab: 'pops',
            }
        },

        watch: {
            selectedCrm(newValue, oldValue) {
                this.selectedZona = null
                if (newValue) {
                    this.getPopsCrm()
                    this.zonas = newValue.zonas
                } else {
                    this.getPops()
                }
                this.getCounters()
            },

            selectedZona(newValue, oldValue) {
                if (newValue) {
                    this.popsZona = []
                    this.popList.forEach(element => {
                        if (this.core) {
                            if (element.zona_id == this.selectedZona.id && element.classification_type_id == 1) {
                                this.popsZona.push(element)
                            }
                        } else {
                            if (element.zona_id == this.selectedZona.id) {
                                this.popsZona.push(element)
                            }
                        }
                    })
                    this.pops = this.popsZona
                } else if (this.selectedCrm) {
                    this.pops = this.popsCrm
                } else {
                    this.getPops()
                }
                this.getCounters()
            },

            core(newValue, oldValue) {
                if (!this.selectedCrm) {
                    this.getPops()
                    // console.log('presionado en vista TODOS los POP')
                } else if (!this.selectedZona) {
                    this.getPopsCrm()
                    // console.log('presionado en vista CRM')
                } else {
                    this.getPopsZona()
                    // console.log('presionado en vista ZONA')
                }
                this.getCounters()
            }
        },

        computed: {
            popList: function() {
                return this.$store.state.popList
            },
            currentTabComponent: function () {
                return this.currentTab + '-data'
            },
            currentLastUpdateData: function () {
                return this.lastUpdateData[this.currentTab]
            }
        },

        methods: {
            searchFormat(pop) {
                return pop.nem_site + ' - ' + pop.nombre_sitio + ' - ' + pop.direccion
            },

            // APIs
            async getCrms() {
                axios.get(`/api/crms`)
                .then((response) => {
                    this.crms = response.data.data
                    this.getPops()
                })
            },

            // POP DATA
            getPops: debounce(function () {
                if (!this.popList.length) {
                    axios.get(`/api/dashboardMap`)
                    .then((response) => {
                        try {
                            this.$store.commit("setPops", response.data.data);
                        } catch (ex) {
                            console.log(ex);
                        }
                        this.pops = this.popList
                    })
                } else {
                    if (this.core && !this.popsCore.length) {
                        this.popList.forEach(element => {
                            if (element.classification_type_id == 1) {
                                this.popsCore.push(element)
                                this.pops = this.popsCore
                            }
                        })
                    } else if (this.core) {
                        this.pops = this.popsCore
                    } else {
                        this.pops = this.popList
                    }
                }
            }, 500),
            async getPopsCrm() {
                this.popsCrm = []
                this.popList.forEach(element => {
                    if (this.core) {
                        if (element.crm_id == this.selectedCrm.id && element.classification_type_id == 1) {
                            this.popsCrm.push(element)
                        }
                    } else {
                        if (element.crm_id == this.selectedCrm.id) {
                            this.popsCrm.push(element)
                        }
                    }
                })
                this.pops = this.popsCrm
            },
            async getPopsZona() {
                this.popsZona = []
                this.popList.forEach(element => {
                    if (this.core) {
                        if (element.zona_id == this.selectedZona.id && element.classification_type_id == 1) {
                            this.popsZona.push(element)
                        }
                    } else {
                        if (element.zona_id == this.selectedZona.id) {
                            this.popsZona.push(element)
                        }
                    }
                })
                this.pops = this.popsZona
            },

            // popsPushCore(item, index) {
            //     if (item.classification_type_id == 1) {
            //         this.popsCore.push(item)
            //         this.pops = this.popsCore
            //     }
            // },

            // popPushCrm(item, index) {
            //     if (this.core) {
            //         if (item.crm_id == this.selectedCrm.id && item.classification_type_id == 1) {
            //             this.popsCrm.push(item)
            //         }
            //     } else {
            //         if (item.crm_id == this.selectedCrm.id) {
            //             this.popsCrm.push(item)
            //         }
            //     }
            // },

            // popPushZona(item, index) {
            //     if (this.core) {
            //         if (item.zona_id == this.selectedZona.id && item.classification_type_id == 1) {
            //             this.popsZona.push(item)
            //         }
            //     } else {
            //         if (item.zona_id == this.selectedZona.id) {
            //             this.popsZona.push(item)
            //         }
            //     }
            // },

            // CONTERS
            async getCounters() {
                axios.get(`/api/dashboard?core=${this.core}&crm_id=${ this.selectedCrm ? this.selectedCrm.id : 0 }&zona_id=${ this.selectedZona ? this.selectedZona.id : 0 }`)
                .then((response) => {
                    this.popsQuantity = response.data.pops
                    this.sitesQuantity = response.data.sites
                    this.technologiesQuantity = response.data.technologies
                    this.criticsQuantity = response.data.critics
                })
            },

            async syncCounter() {
                axios.get(`/api/counters`)
                .then((response) => {
                    this.lastDataCounter = response.data
                })
            },

            // Triggers
            selectPop(pop) {
                this.selectedPop = pop
            },
            selectCrm(crm) {
                // Si el boton del CRM no estaba seleccionado, la variable selectedCrm ahora es el nuevo crm y
                // si había una zona seleccionada, la variable selectedZona será null.
                this.selectedCrm = this.selectedCrm != crm ? crm : null
            },
            selectZona(zona) {
                this.selectedZona = this.selectedZona != zona ? zona : null
            },

            async lastUpdate() {
                axios.get(`/api/lastUpdate`)
                .then((response) => {
                    this.lastUpdateData = response.data
                })
            },



            getAsyncData: debounce(function (text) {
                // String update
                if (this.searchText !== text) {
                    this.searchText = text
                    this.popSearch = []
                    this.page = 1
                    this.totalPages = 1
                }
                // String cleared
                if (!text.length) {
                    this.popSearch = []
                    this.page = 1
                    this.totalPages = 1
                    return
                }
                // Reached last page
                if (this.page > this.totalPages) {
                    return
                }
                this.isFetching = true
                axios.get(`/api/searchPops?text=${this.searchText}&crm_id=${this.selectedCrm ? this.selectedCrm.id : 0}&zona_id=${this.selectedZona ? this.selectedZona.id : 0}&core=${this.core}`)
                    .then((response) => {
                        console.log(response.data)
                        response.data.data.forEach((item) => this.popSearch.push(item))
                        this.page++
                        this.totalPages = response.last_page
                    })
                    .catch((error) => {
                        throw error
                    })
                    .finally(() => {
                        this.isFetching = false
                    })
            }, 50),

            getMoreAsyncData: debounce(function () {
                this.getAsyncData(this.searchText)
            }, 50),
        
            // Search bar
            // async search(){
            //     if (this.searchText.length >= 3) {
            //         if (this.selectedCrm == null) {
            //             axios.get(`/api/searchPops?text=${this.searchText}&core=${this.core}`)
            //             .then((response) => {
            //                 this.popSearch = response.data
            //                 this.counter = this.popSearch.length
            //                 this.active = 1
            //             })
            //         } else if (this.selectedZona == null) {
            //             axios.get(`/api/searchPopsCrm?text=${this.searchText}&crm_id=${this.selectedCrm.id}&core=${this.core}`)
            //             .then((response) => {
            //                 this.popSearch = response.data
            //                 this.counter = this.popSearch.length
            //                 this.active = 1
            //             })
            //         } else {
            //             axios.get(`/api/searchPopsZona?text=${this.searchText}&zona_id=${this.selectedZona.id}&core=${this.core}`)
            //             .then((response) => {
            //                 this.popSearch = response.data
            //                 this.counter = this.popSearch.length
            //                 this.active = 1
            //             })
            //         }
            //     } else if (this.searchText == '') {
            //         this.clearSearch()
            //     } else {
            //         this.popSearch = []
            //     }
            // },

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

            // Style mode
            styleMode(){
                if (this.darkMode == 1) {
                    // dark mode
                    this.bodyBackground = 'has-background-black-ter'
                    this.boxBackground = 'has-background-dark'
                    this.primaryText = 'has-text-white'
                    this.secondaryText = 'has-text-grey-light'
                    this.searchBodyBackground = 'has-background-dark'
                    this.innerBackground = 'has-background-dark-ter shadow-inset-dark',
                    this.bodyBackgroundEnergy = 'has-background-black-ter',
                    this.bodyBackgroundClimate = 'has-background-black-ter',
                    this.bodyBackgroundInfrastructure = 'has-background-black-ter',
                    this.boxBackgroundEnergy = 'has-background-green-light',
                    this.boxBackgroundClimate = 'has-background-blue-light',
                    this.boxBackgroundInfrastructure = 'has-background-yellow-light'
                } else {
                    // light mode
                    this.bodyBackground = 'has-background-light'
                    this.boxBackground = 'has-background-white'
                    this.primaryText = 'has-text-dark'
                    this.secondaryText = 'has-text-grey'
                    this.searchBodyBackground = 'has-background-white'
                    this.innerBackground = 'has-background-white shadow-inset',
                    this.bodyBackgroundEnergy = 'has-background-white',
                    this.bodyBackgroundClimate = 'has-background-white',
                    this.bodyBackgroundInfrastructure = 'has-background-white',
                    this.boxBackgroundEnergy = 'has-background-green-light',
                    this.boxBackgroundClimate = 'has-background-blue-light',
                    this.boxBackgroundInfrastructure = 'has-background-yellow-light'
                }
            },

            // SWITCHES
            async switchCore() {
                this.core = this.core == 0 ? 1 : 0
            },
            changeStyle() {
                this.darkMode = this.darkMode == 0 ? 1 : 0
                this.styleMode()
            },

            async viewCriticPops() {
                this.criticPopsSwitch = this.criticPopsSwitch == 0 ? 1 : 0
            }
        },

    }
</script>

<style lang="scss" scoped>
  .box.minim {
    height: 425px;
  }
</style>
