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
                            <b-switch  
                                @input="switchCore" 
                                class="is-size-6 has-text-weight-semibold" 
                                :class="textSwitchCore" 
                                type="is-link"
                                size="is-medium" 
                                :outlined="true">
                                POP CORE
                            </b-switch>
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
                                <a :href="'/pop/' + pop.id" target="_blank" class="columns">
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
                                    <a class="button is-small is-link" :href="'/pop/' + pop.id" target="_blank">
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
                    size="is-default"
                    :data="popSearch"
                    rounded
                    icon-pack="fas"
                    icon="search"
                    placeholder="Buscar por nemónico, nombre o direccion del sitio..."
                    :keep-first="true"
                    :open-on-focus="searchText ? true : false"
                    :custom-formatter="searchFormat"
                    :loading="isFetching"
                    :check-infinite-scroll="true"
                    @typing="getAsyncData"
                    @select="option => selected = option"
                    @infinite-scroll="getMoreAsyncData">
                    <template slot="header">
                        <div class="is-size-7 has-text-weight-semibold has-text-link"> {{ counter }} <span class="has-text-weight-normal">Sitios</span></div>
                    </template>

                    <template slot-scope="props">
                        <div class="columns" style="padding: 10px;">

                            <div class="column is-5">
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

                            <div class="column is-2">

                                <div class="tags has-addons">
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
                                <div class="">
                                    <span v-if="props.option.alba_project == 1" class="tag is-light is-info has-text-weight-bold is-size-7">
                                        {{ props.option.alba_project == 1 ? 'alba' : '' }}
                                    </span>
                                </div>

                            </div>

                            <div class="column is-3">
                            </div>

                            <div class="column has-text-right">
                                <div class="">
                                    <button class="button is-small is-default is-fullwidth" @click="selectPop(props.option)" v-model="selectedPop">
                                        <font-awesome-icon icon="map-marked-alt"/>&nbsp;Ver en mapa
                                    </button>
                                </div>
                                <div class="">
                                    <router-link :to="'/pop/' + props.option.id" class="button is-small is-link is-fullwidth" target="_blank">
                                        <font-awesome-icon icon="info-circle"/>&nbsp;Ver detalles
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </template>
                    <template slot="footer">
                        <span v-show="page > totalPages" class="has-text-grey"> No hay más sitios. </span>
                    </template>
                </b-autocomplete>
            </div>

            <!-- CUADROS -->
            <div class="" :class="bodyBackground" style="margin: 20px 0 -30px 0;">
                <div class="">

                    <!-- cuadros superiores -->
                    <div class="tile is-ancestor">
                        <div class="tile is-vertical">

                            <div class="tile">
                                <div class="tile is-parent">
                                    <a class="tile is-child box" :class="currentTab === 'pops' ? 'has-background-link' : boxBackground" @click="currentTab = 'pops'">
                                        <div class="" style="padding-top: 10px; padding-left: 5px;" >
                                            <b-icon 
                                                pack="fad" 
                                                icon="map-marker-alt" 
                                                class="fa-2x"
                                                :class="currentTab === 'pops' ? 'has-text-smart-light' : 'has-text-smart'">
                                            </b-icon>
                                        </div>
                                        
                                        <div class="is-size-4 has-text-weight-bold" :class="currentTab === 'pops' ? 'has-text-white' : ''" style="margin-top: 10px;">{{ popsQuantity | numeral('0,0') }}
                                            <p class="is-size-6 has-text-weight-normal">POP</p>
                                        </div>
                                    </a>
                                </div>

                                <div class="tile is-parent">
                                    <a class="tile is-child box" :class="currentTab === 'sites' ? 'has-background-link' : boxBackground" @click="currentTab = 'sites'">
                                        <div class="" style="padding-top: 10px; padding-left: 5px;">
                                            <b-icon 
                                                pack="fad" 
                                                icon="server" 
                                                class="fa-2x"
                                                :class="currentTab === 'sites' ? 'has-text-eco' : 'has-text-eco'">
                                            </b-icon>
                                        </div>
                                        <div class="is-size-4 has-text-weight-bold" :class="currentTab === 'sites' ? 'has-text-white' : ''" style="margin-top: 10px;">{{ sitesQuantity | numeral('0,0') }}
                                            <p class="is-size-6 has-text-weight-normal">Sitios</p>
                                        </div>
                                    </a>
                                </div>

                                <div class="tile is-parent">
                                    <a class="tile is-child box" :class="currentTab === 'technologies' ? 'has-background-link' : boxBackground" @click="currentTab = 'technologies'">
                                        <div class="" style="padding-top: 10px; padding-left: 5px;">
                                            <b-icon 
                                                pack="fad" 
                                                icon="signal" 
                                                class="fa-2x"
                                                :class="currentTab === 'technologies' ? 'has-text-positive' : 'has-text-positive'">
                                            </b-icon>
                                        </div>
                                        <div class="is-size-4 has-text-weight-bold" :class="currentTab === 'technologies' ? 'has-text-white' : ''" style="margin-top: 10px;">{{ technologiesQuantity | numeral('0,0') }}
                                            <p class="is-size-6 has-text-weight-normal">Tecnologías</p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div class="tile">
                                <div class="tile is-parent">
                                    <a class="tile is-child box" :class="currentTab === 'critics' ? 'has-background-link' : boxBackground" @click="viewCriticPops">
                                        <div class="" style="padding-top: 10px; padding-left: 5px;">
                                            <b-icon 
                                                pack="fad" 
                                                icon="exclamation-triangle" 
                                                class="has-text-yellow fa-2x"
                                                >
                                            </b-icon>
                                        </div>
                                        <div class="is-size-4 has-text-weight-bold" :class="currentTab === 'critics' ? 'has-text-white' : ''" style="margin-top: 10px;">{{ criticsQuantity | numeral('0,0') }}
                                            <p class="is-size-6 has-text-weight-normal">POP Críticos</p>
                                        </div>
                                    </a>
                                </div>

                                <div class="tile is-parent">
                                    <a class="tile is-child box" :class="currentTab === 'alba' ? 'has-background-link' : boxBackground" @click="viewAlbaPops">
                                        <div class="" style="padding-top: 10px; padding-left: 5px;">
                                            <b-icon 
                                                pack="fad" 
                                                icon="file-invoice-dollar" 
                                                class="has-text-smart fa-2x"
                                                >
                                            </b-icon>
                                        </div>
                                        <div class="is-size-4 has-text-weight-bold" :class="currentTab === 'alba' ? 'has-text-white' : ''" style="margin-top: 10px;">{{ albaQuantity | numeral('0,0') }}
                                            <p class="is-size-6 has-text-weight-normal">Proyecto Alba</p>
                                        </div>
                                    </a>
                                </div>

                                <div class="tile is-parent">
                                    <a class="tile is-child box has-background-dark has-text-white" style="position: relative;" 
                                        @click="downloadPops">
                                        <b-icon 
                                            style="padding-top: 10px; padding-left: 5px;"
                                            pack="fad" 
                                            icon="download" 
                                            class="has-text-eco fa-2x">
                                        </b-icon> 
                                        <div class="is-size-4 has-text-weight-bold" style="margin-top: 10px;">
                                            <p class="is-size-6 has-text-weight-normal">Descargar listado de POP</p>
                                        </div>
                                        <b-loading :is-full-page="false" :active.sync="isLoading" :can-cancel="true"></b-loading>
                                    </a>
                                </div>
                            </div>

                            <div class="tile">
                                <div class="tile is-parent">
                                    <article
                                        class="tile is-child box" 
                                        :class="boxBackground" 
                                        style="width: 100%; height: auto;">
                                        <radial-chart></radial-chart>
                                    </article>
                                </div>
                            </div>
                        </div>



                        <div class="tile is-parent is-vertical">
                            <div class="tile is-child box" :class="boxBackground">
                                <map-view
                                    :pops="pops"
                                    :map_attributes="map_attributes"
                                    :darkMode="darkMode"
                                />   
                                <!-- <PopsMap 
                                    style="height: 100%; margin: -14px -14px -14px -14px;"
                                    :pops="pops"
                                    :darkMode="darkMode"/> -->
                            </div>                               
                        </div>

                        <div class="tile">
                            <div class="tile is-parent is-vertical">
                                <article class="tile is-child box" :class="boxBackground">
                                <!-- <keep-alive> -->
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
                                <!-- </keep-alive> -->
                                </article>

                                <article v-if="(this.currentTab !== 'critics') && (this.currentTab !== 'alba')"
                                    class="tile is-child box" 
                                    :class="boxBackground" 
                                    style="width: 100%; height: auto;">
                                    <data-chart></data-chart>
                                </article>
                            </div>
                        </div>
                    </div>

                    <!-- cuadros inferiores -->
                    <div class="tile is-ancestor">
                        <div class="tile is-parent">
                            <div class="tile is-child box">
                                <div class="is-size-5 has-text-weight-semibold title">Nuevos POP</div>
                                <div class="is-size-2 has-text-centered">{{ last_data_counters && last_data_counters.pop_news }}
                                    <p class="is-size-6 has-text-weight-light">POP nuevos ingresados esta semana</p>
                                </div>
                                <div class="field" style="margin-top: 20px;">
                                    <div class="is-size-7 has-text-weight-light">Utimo POP ingresado:</div>
                                    <router-link class="is-size-6" :to="'/pop/' + last_data_counters.last_site.pop.id" target="_blank">
                                        {{ last_data_counters.last_site.nem_site }} - {{ last_data_counters.last_site.nombre }}
                                    </router-link>
                                    <div class="is-size-7">
                                        {{ last_data_counters.last_site.pop.comuna.zona.nombre_zona }} - CRM {{ last_data_counters.last_site.pop.comuna.zona.crm.nombre_crm }}
                                    </div>
                                </div>

                                <div class="has-text-right is-size-7 has-text-weight-light">Fecha actualización: {{ last_data_counters.last_updated_pops }}</div>
                            </div>
                        </div>

                        <div class="tile is-parent">
                            <div class="tile is-child box">
                                <div class="is-size-5 has-text-weight-semibold title">Nuevos Sitios</div>
                                <div class="is-size-2 has-text-centered">{{ last_data_counters && last_data_counters.sites_news }}
                                    <p class="is-size-6 has-text-weight-light">Sitios nuevos ingresados esta semana</p>
                                </div>
                                <div class="field" style="margin-top: 20px;">
                                    <div class="is-size-7 has-text-weight-light">Utimo Sitio ingresado:</div>
                                    <router-link class="is-size-6" :to="'/pop/' + last_data_counters.last_site.pop.id" target="_blank">
                                        {{ last_data_counters.last_site.nem_site }} - {{ last_data_counters.last_site.nombre }}
                                    </router-link>
                                    <div class="is-size-7">
                                        {{ last_data_counters.last_site.pop.comuna.zona.nombre_zona }} - CRM {{ last_data_counters.last_site.pop.comuna.zona.crm.nombre_crm }}
                                    </div>
                                </div>

                                <div class="has-text-right is-size-7 has-text-weight-light">Fecha actualización: {{ last_data_counters.last_updated_sites }}</div>
                            </div>
                        </div>

                        <div class="tile is-parent">
                            <div class="tile is-child box">
                                <div class="is-size-5 has-text-weight-semibold title">Nuevas Tecnologías</div>
                                <div class="is-size-2 has-text-centered">{{ last_data_counters.technologies_news }}
                                    <p class="is-size-6 has-text-weight-light">Equipos ingresados esta semana</p>
                                </div>
                                <div class="field" style="margin-top: 20px;">
                                    <div class="is-size-7 has-text-weight-light">Utimo POP ingresado:</div>
                                    <a class="is-size-6" :href="'/pop/2'" target="_blank">ESTAN0098 - Nombre POP</a>
                                    <div class="is-size-7">Zona Valparaiso - CRM Centro Norte</div>
                                </div>

                                <div class="has-text-right is-size-7 has-text-weight-light">
                                    Fecha actualización: {{ last_data_counters.last_updated_technologies }}
                                </div>
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
                    </div>

                </div>
            </div>
            
        </section>

        <!-- Equipamiento -->
        <section class="section is-marginless" :class="bodyBackground">
            <!-- <div class="title">Equipamiento</div> -->
            <div class="tile is-ancestor">
                <div class="tile is-vertical">
                    <div class="tile">
                        <electric-lines-data
                            :bodyBackground="bodyBackground"
                            :boxBackground="boxBackground"
                            :primaryText="primaryText"
                            :secondaryText="secondaryText"
                            :selectedCrm="this.selectedCrm"
                            :selectedZona="this.selectedZona"
                            :core="core"
                        />
                        <generator-groups-data
                            :bodyBackground="bodyBackground"
                            :boxBackground="boxBackground"
                            :primaryText="primaryText"
                            :secondaryText="secondaryText"
                            :selectedCrm="this.selectedCrm"
                            :selectedZona="this.selectedZona"
                            :core="core"
                        />
                        <power-rectifiers-data
                            :bodyBackground="bodyBackground"
                            :boxBackground="boxBackground"
                            :primaryText="primaryText"
                            :secondaryText="secondaryText"
                            :selectedCrm="this.selectedCrm"
                            :selectedZona="this.selectedZona"
                            :core="core"
                        />

                        <air-conditioners-data
                            :bodyBackground="bodyBackground"
                            :boxBackground="boxBackground"
                            :primaryText="primaryText"
                            :secondaryText="secondaryText"
                            :selectedCrm="this.selectedCrm"
                            :selectedZona="this.selectedZona"
                            :core="core"
                        />

                        <vertical-structures-data
                            :bodyBackground="bodyBackground"
                            :boxBackground="boxBackground"
                            :primaryText="primaryText"
                            :secondaryText="secondaryText"
                            :selectedCrm="this.selectedCrm"
                            :selectedZona="this.selectedZona"
                            :core="core"
                        />
                        <infrastructures-data
                            :bodyBackground="bodyBackground"
                            :boxBackground="boxBackground"
                            :primaryText="primaryText"
                            :secondaryText="secondaryText"
                            :selectedCrm="this.selectedCrm"
                            :selectedZona="this.selectedZona"
                            :core="core"
                        />
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
    // import LoadingComponent from '../helpers/LoadingComponent'
    // import ErrorComponent from '../helpers/ErrorComponent'

    const PretDataChart = () => ({
        // The component to load (should be a Promise)
        component: import('./PretDataChart.vue'),
        // A component to use while the async component is loading
        // loading: LoadingComponent,
        // A component to use if the load fails
        // error: ErrorComponent,
        // Delay before showing the loading component. Default: 200ms.
        delay: 200,
        // The error component will be displayed if a timeout is
        // provided and exceeded. Default: Infinity.
        timeout: 3000
    })

    const PopsMap = () => ({
        // The component to load (should be a Promise)
        component: import('../maps/PopsMap.vue'),
        // A component to use while the async component is loading
        loading: import('../helpers/LoadingComponent'),
        // A component to use if the load fails
        error: import('../helpers/ErrorComponent'),
        // Delay before showing the loading component. Default: 200ms.
        delay: 200,
        // The error component will be displayed if a timeout is
        // provided and exceeded. Default: Infinity.
        timeout: 3000
    })

    const MapView = () => ({
        // The component to load (should be a Promise)
        component: import('../maps/MapView.vue'),
        // A component to use while the async component is loading
        loading: import('../helpers/LoadingComponent'),
        // A component to use if the load fails
        error: import('../helpers/ErrorComponent'),
        // Delay before showing the loading component. Default: 200ms.
        delay: 200,
        // The error component will be displayed if a timeout is
        // provided and exceeded. Default: Infinity.
        timeout: 3000
    })

    const RadialChart = () => ({
        // The component to load (should be a Promise)
        component: import('../RadialChart.vue'),
        // A component to use while the async component is loading
        // loading: LoadingComponent,
        // A component to use if the load fails
        // error: ErrorComponent,
        // Delay before showing the loading component. Default: 200ms.
        delay: 200,
        // The error component will be displayed if a timeout is
        // provided and exceeded. Default: Infinity.
        timeout: 3000
    })

    const RedCoreChart = () => ({
        // The component to load (should be a Promise)
        component: import('./RedCoreChart.vue'),
        // A component to use while the async component is loading
        // loading: LoadingComponent,
        // A component to use if the load fails
        // error: ErrorComponent,
        // Delay before showing the loading component. Default: 200ms.
        delay: 200,
        // The error component will be displayed if a timeout is
        // provided and exceeded. Default: Infinity.
        timeout: 3000
    })

    var moment = require('moment');
    import debounce from 'lodash/debounce'
    export default {
        components: {
            // ###### Info ##########
            PopsData: () => import('./PopsData'),
            DataChart: () => import("./PopDataChart"),
            SitesData: () => import("./SitesData"),
            TechnologiesData: () => import("./TechnologiesData"),
            CriticsData: () => import("./CriticPopsData"),
            AlbaData: () => import("./AlbaPopsData"),
            
            // ###### Map ###########
            // PopsMap,
            MapView,

            // ###### Charts ########
            PretDataChart,
            RadialChart,
            // RedCoreChart,

            // ###### Equipment #####
            ElectricLinesData: () => import('./ElectricLinesData'),
            GeneratorGroupsData: () => import('./GeneratorGroupsData'),
            PowerRectifiersData: () => import('./PowerRectifiersData'),
            AirConditionersData: () => import('./AirConditionersData'),
            VerticalStructuresData: () => import('./VerticalStructuresData'),
            InfrastructuresData: () => import('./InfrastructuresData')
        },
        props : [
            'message',
            'last_data_counters',
            'crms',
            'darkMode'
        ],
        created() {
            this.styleMode()
            // this.$eventBus.$on('password-changed', function() {
            //     console.log('Se cambió la contraseña!!')
            //     this.$buefy.toast.open({
            //         message: 'Tu password se ha actualizado exitosamente.',
            //         type: 'is-success',
            //         duration: 5000
            //     })
            // });
        },
        beforeDestroy() {
            this.$eventBus.$off('graphData')
            // this.$eventBus.$off('password-changed');
        },
        mounted() {
            // console.log(this.last_data_counters)
            // this.getCrms()
            this.getCounters()
            // this.lastUpdate()
            // this.syncCounter()
            this.loadMessage()
            this.getPops()
        },
        data: () => {
            return {
                core: 0,
                pops: [],
                zonas: [],

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
                albaPopsSwitch: 0,

                popsQuantity: 0,
                sitesQuantity: 0,
                technologiesQuantity: 0,
                criticsQuantity: 0,
                albaQuantity: 0,

                isLoading: false,

                // lastUpdateData: [],
                // lastDataCounter: [],

                currentTab: 'pops',
            }
        },

        watch: {
            selectedPop(newValue, oldValue) {
                this.pops = [newValue]
            },

            selectedCrm(newValue, oldValue) {
                this.selectedZona = null
                if (this.currentTab == 'critics') {
                    this.viewCriticPops()
                }
                else if (this.currentTab == 'alba') {
                    this.viewAlbaPops()
                } else if (newValue) {
                    this.getPops()
                    this.zonas = newValue.zonas
                } else {
                    this.getPops()
                }
                this.getCounters()
            },

            selectedZona(newValue, oldValue) {
                if (this.currentTab == 'critics'){
                    this.viewCriticPops()
                }
                else if (this.currentTab == 'alba') {
                    this.viewAlbaPops()
                } else {
                    this.getPops()
                }
                this.getCounters()
            },

            core(newValue, oldValue) {
                if (this.currentTab == 'critics') {
                    this.viewCriticPops()
                } 
                else if (this.currentTab == 'alba') {
                    this.viewAlbaPops()
                }
                else {
                    this.getPops()
                }
                this.getCounters()
            },

            darkMode(newValue, oldValue) {
                this.styleMode()
            },

            currentTab(newValue, oldValue) {
                if (newValue == 'critics') {
                    this.viewCriticPops()
                } 
                else if (this.currentTab == 'alba') {
                    this.viewAlbaPops()
                }
                else {
                    this.getPops()
                }
            }
        },

        computed: {
            // zonas: function() {
            //     return this.selectedCrm ? this.selectedCrm.zona : null
            // },

            currentTabComponent: function () {
                return this.currentTab + '-data'
            },

            currentLastUpdateData: function () {
                if (this.currentTab != 'critics' || this.currentTab != 'alba') {
                    return this.last_data_counters['last_updated_' + this.currentTab]
                } else {
                    return
                }
            },

            textSwitchCore() {
                return this.core ? 'has-text-link' : ''
            }
        },

        methods: {
            searchFormat(pop) {
                this.selectedPop = this.selected
                return this.searchText
            },

            getPops: debounce(function () {
                var crm_id = this.selectedCrm ? this.selectedCrm.id : 0
                var zona_id = this.selectedZona ? this.selectedZona.id : 0

                axios.get(`/api/dashboardMap?core=${this.core}&crm_id=${crm_id}&zona_id=${zona_id}`)
                .then((response) => {
                    try {
                        this.pops = response.data
                    } catch (ex) {
                        console.log(ex);
                    }
                })
            }, 200),

            async viewCriticPops() {
                this.currentTab = 'critics'

                var crm_id = this.selectedCrm ? this.selectedCrm.id : 0
                var zona_id = this.selectedZona ? this.selectedZona.id : 0

                axios.get(`/api/criticPopsMap?core=${this.core}&crm_id=${crm_id}&zona_id=${zona_id}`).then((response) => {
                    // console.log(response.data)
                    this.pops = response.data.data
                })
                this.criticPopsSwitch = this.criticPopsSwitch == 0 ? 1 : 0
            },

            async viewAlbaPops() {
                this.currentTab = 'alba'

                var crm_id = this.selectedCrm ? this.selectedCrm.id : 0
                var zona_id = this.selectedZona ? this.selectedZona.id : 0

                axios.get(`/api/albaPopsMap?core=${this.core}&crm_id=${crm_id}&zona_id=${zona_id}`).then((response) => {
                    // console.log(response.data)
                    this.pops = response.data
                })
                this.albaPopsSwitch = this.albaPopsSwitch == 0 ? 1 : 0
            },

            // CONTERS
            async getCounters() {
                var crm_id = this.selectedCrm ? this.selectedCrm.id : 0
                var zona_id = this.selectedZona ? this.selectedZona.id : 0

                axios.get(`/api/dashboard?core=${this.core}&crm_id=${crm_id}&zona_id=${zona_id}`).then((response) => {
                    this.popsQuantity = response.data.pops
                    this.sitesQuantity = response.data.sites
                    this.technologiesQuantity = response.data.technologies
                    this.criticsQuantity = response.data.critics
                    this.albaQuantity = response.data.alba_project
                })
            },

            // Triggers
            selectPop(pop) {
                this.pops = [pop]
            },
            selectCrm(crm) {
                // Si el boton del CRM no estaba seleccionado, la variable selectedCrm ahora es el nuevo crm y
                // si había una zona seleccionada, la variable selectedZona será null.
                this.selectedCrm = this.selectedCrm != crm ? crm : null
            },
            selectZona(zona) {
                this.selectedZona = this.selectedZona != zona ? zona : null
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
                axios.get(`/api/searchPops?text=${text}&crm_id=${this.selectedCrm ? this.selectedCrm.id : 0}&zona_id=${this.selectedZona ? this.selectedZona.id : 0}&core=${this.core}&page=${this.page}`)
                    .then((response) => {
                        response.data.data.forEach((item) => this.popSearch.push(item))
                        this.page++
                        this.totalPages = response.data.last_page
                        this.counter = response.data.total
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
            }, 10),
        
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

            // clickOutside() {
            //     this.active = null
            // },

            // setActive() {
            //     this.active = 1
            // },

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
                    this.boxBackgroundEnergy = 'has-background-light',
                    this.boxBackgroundClimate = 'has-background-light',
                    this.boxBackgroundInfrastructure = 'has-background-light'
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
                    this.boxBackgroundEnergy = 'has-background-light',
                    this.boxBackgroundClimate = 'has-background-light',
                    this.boxBackgroundInfrastructure = 'has-background-light'
                }
            },

            // SWITCHES
            async switchCore() {
                this.core = this.core == 0 ? 1 : 0
            },
            changeStyle() {
                this.darkMode = this.darkMode == 0 ? 1 : 0
            },
            loadMessage() {
                if(this.message) {
                    this.$buefy.toast.open({
                        message: this.message,
                        type: 'is-success',
                        duration: 5000
                    })
                }
            },

            downloadPops() {
                this.isLoading = true

                axios.get(`/api/pop/export?core=${this.core}&crm_id=${this.selectedCrm ? this.selectedCrm.id : 0}&zona_id=${this.selectedZona ? this.selectedZona.id : 0}`, {
                    responseType: 'blob',
                })
                .then((response) => {
                    console.log(response.data)
                    const blob = new Blob([response.data], { type: 'application/xls' })
                    // const objectUrl = window.URL.createObjectURL(blob)

                    let link = document.createElement('a')
                    link.href = window.URL.createObjectURL(blob)
                    link.download = 'test.xlsx'
                    link.click()
                    this.isLoading = false
                })
            },
        },

    }
</script>

<style lang="scss" scoped>
  .box.minim {
    height: 425px;
  }
</style>
