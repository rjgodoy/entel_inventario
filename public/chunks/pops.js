(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{227:function(t,e,s){"use strict";s.r(e);var i=s(3),a=s(1);i.d.add(a.B,a.pb,a.qb,a.hb,a.V,a.ab);var c={components:{MapView:function(){return Promise.all([s.e(7),s.e(103)]).then(s.bind(null,321))},ModalDownload:function(){return Promise.all([s.e(1),s.e(62)]).then(s.bind(null,320))},VuePagination:function(){return s.e(97).then(s.bind(null,322))}},props:["user","darkMode"],data:function(){return{crms:null,zonas:null,filters:[],popsMap:[],pops:{total:0,per_page:10,from:1,to:0,current_page:1},map_attributes:{latitude:-33.44444275,longitude:-70.6561017,zoom:5},equipments:{electric_line:{label:"Línea Eléctrica",selected:0},junction:{label:"Empalme",selected:0},generator_set:{label:"Grupo Electrógeno",selected:0},power_rectifier:{label:"Planta Rectificadora",selected:0},air_conditioner:{label:"Aire Acondicionado",selected:0},vertical_structure:{label:"Estructura Vertical",selected:0},infrastructure:{label:"Infraestructura",selected:0}},characteristics:{pe_3g:{label:"PE 3G",selected:0},mpls:{label:"MPLS",selected:0},olt:{label:"OLT",selected:0},olt_3play:{label:"OLT 3Play",selected:0},red_minima_n1:{label:"Red Mínima N1",selected:0},red_minima_n2:{label:"Red Mínima N2",selected:0},lloo:{label:"Localidad Obligatoria",selected:0},ranco:{label:"RANCO",selected:0},bafi:{label:"BAFI",selected:0},offgrid:{label:"Offgrid",selected:0},solar:{label:"Solar",selected:0},eolica:{label:"Eólica",selected:0},protected_zone:{label:"Zona protegida",selected:0},turret_type_id:{label:"Torreras - ATC/SBA",selected:0}},bodyBackground:"",boxBackground:"",primaryText:"",secondaryText:"",searchBodyBackground:"",selectedPrimaryBoxText:"has-text-white",selectedSecondaryBoxText:"has-text-light",isLoading:!1,selectedPops:[],selectedCrm:null,selectedZona:null,searchText:"",core:0,critic:0,vip:0,isDownloadModalActive:!1,cells:Array}},created:function(){},mounted:function(){this.styleMode(),this.getCrms(),this.getFilterButtons(),this.getPops()},watch:{core:function(t){this.getPops()},critic:function(t){this.getPops()},vip:function(t){this.getPops()},selectedPops:function(t){0!=t.length?this.popsMap=t:this.getPops()}},computed:{selectedIds:function(){var t=[];return this.selectedPops.forEach((function(e){t.push(e.id)})),t}},methods:{getCrms:function(){var t=this;axios.get("/api/crms").then((function(e){t.crms=e.data.crms})).catch((function(){console.log("handle server error from here")}))},getFilterButtons:function(){var t=this;axios.get("/api/filters").then((function(e){t.filters=e.data}))},changeEquipment:function(t){t.selected=+!t.selected,this.getPops()},changeCharacteristic:function(t){t.selected=+!t.selected,this.getPops()},selectPop:function(t){this.popsMap=[t]},selectCrm:function(t){this.selectedCrm=this.selectedCrm!=t?t:null,this.selectedZona=null,this.zonas=t.zonas,this.getPops()},selectZona:function(t){this.selectedZona=this.selectedZona!=t?t:null,this.getPops()},popClassification:function(t){var e,s=6;return t.sites&&t.sites.forEach((function(t){t.classification_type_id&&t.classification_type_id<s&&(s=t.classification_type_id,e=t.classification_type.classification_type)})),{classification:e,id:s}},getPops:function(){var t=this,e={page:this.pops.current_page,crm_id:this.selectedCrm?this.selectedCrm.id:0,zona_id:this.selectedZona?this.selectedZona.id:0,text:""!=this.searchText?this.searchText:0,core:this.core,critic:this.critic,vip:this.vip,pe_3g:this.characteristics.pe_3g.selected,mpls:this.characteristics.mpls.selected,olt:this.characteristics.olt.selected,olt_3play:this.characteristics.olt_3play.selected,red_minima_n1:this.characteristics.red_minima_n1.selected,red_minima_n2:this.characteristics.red_minima_n2.selected,lloo:this.characteristics.lloo.selected,ranco:this.characteristics.ranco.selected,bafi:this.characteristics.bafi.selected,offgrid:this.characteristics.offgrid.selected,solar:this.characteristics.solar.selected,eolica:this.characteristics.eolica.selected,turret_type_id:this.characteristics.turret_type_id.selected,protected_zone:this.characteristics.protected_zone.selected,electric_line:this.equipments.electric_line.selected,junction:this.equipments.junction.selected,generator_set:this.equipments.generator_set.selected,power_rectifier:this.equipments.power_rectifier.selected,air_conditioner:this.equipments.air_conditioner.selected,vertical_structure:this.equipments.vertical_structure.selected,infrastructure:this.equipments.infrastructure.selected};axios.get("/api/filterPops",{params:e}).then((function(s){t.pops=s.data,setInterval(t.getPopsMap(e),200)}))},getPopsMap:function(t){var e=this;axios.get("/api/popsMap",{params:t}).then((function(t){e.popsMap=t.data}))},styleMode:function(){1==this.darkMode?(this.bodyBackground="has-background-black-ter",this.boxBackground="has-background-dark",this.primaryText="has-text-white",this.secondaryText="has-text-light",this.searchBodyBackground="has-background-dark"):(this.bodyBackground="has-background-light",this.boxBackground="has-background-white",this.primaryText="has-text-dark",this.secondaryText="has-text-grey",this.searchBodyBackground="has-background-white")},changeStyle:function(){0==this.darkMode?(this.darkMode=1,this.styleMode()):(this.darkMode=0,this.styleMode())},clearSearch:function(){this.searchText="",this.popSearch=[],this.selectedPops=[],this.selectedCrm=null,this.selectedZona=null,this.getPops()},removeSelectedPop:function(t){t.selected=!1;for(var e=0;e<this.selectedPops.length;e++)this.selectedPops[e]===t&&this.selectedPops.splice(e,1)},downloadPops:function(){var t=this;this.isLoading=!0;var e={selectedIds:this.selectedIds,text:""!=this.searchText?this.searchText:0,crm_id:this.selectedCrm?this.selectedCrm.id:0,zona_id:this.selectedZona?this.selectedZona.id:0,core:this.core,critic:this.critic,vip:this.vip,pe_3g:this.characteristics.pe_3g.selected,mpls:this.characteristics.mpls.selected,olt:this.characteristics.olt.selected,olt_3play:this.characteristics.olt_3play.selected,red_minima_n1:this.characteristics.red_minima_n1.selected,red_minima_n2:this.characteristics.red_minima_n2.selected,lloo:this.characteristics.lloo.selected,ranco:this.characteristics.ranco.selected,bafi:this.characteristics.bafi.selected,offgrid:this.characteristics.offgrid.selected,solar:this.characteristics.solar.selected,eolica:this.characteristics.eolica.selected,turret_type_id:this.characteristics.turret_type_id.selected,protected_zone:this.characteristics.protected_zone.selected,electric_line:this.equipments.electric_line.selected,junction:this.equipments.junction.selected,generator_set:this.equipments.generator_set.selected,power_rectifier:this.equipments.power_rectifier.selected,air_conditioner:this.equipments.air_conditioner.selected,vertical_structure:this.equipments.vertical_structure.selected,infrastructure:this.equipments.infrastructure.selected,resume:+this.cells.resume,pops:+this.cells.pops,sites:+this.cells.sites};axios.get("/api/pop/export",{params:e,responseType:"arraybuffer"}).then((function(e){console.log(e);var s=new Blob([e.data],{type:"application/xlsx"});if(window.navigator&&window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(newBlob);else{var i=window.URL.createObjectURL(s),a=document.createElement("a");a.href=i,a.download="listado_pops.xlsx",a.click(),t.isLoading=!1,t.$buefy.toast.open({message:"La planilla se ha descargado exitosamente.",type:"is-success",duration:5e3})}})).catch((function(e){console.log(e),t.isLoading=!1,t.$buefy.toast.open({message:"Ha ocurrido un error. Favor contactar al administrador",type:"is-danger",duration:5e3})}))},onClickDownload:function(t){this.cells=t,this.downloadPops()}}},l=s(0),o=Object(l.a)(c,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},[s("b-collapse",{staticClass:"card has-background-dark",attrs:{animation:"slide","aria-id":"contentIdForA11y3",open:!0},scopedSlots:t._u([{key:"trigger",fn:function(e){return s("div",{staticClass:"card-header",attrs:{role:"button","aria-controls":"contentIdForA11y3"}},[s("div",{staticClass:"card-header-title has-text-grey-light"},[t._v("\n                FILTROS\n            ")]),t._v(" "),s("a",{staticClass:"card-header-icon"},[s("font-awesome-icon",{attrs:{icon:e.open?"sort-down":"sort-up"}})],1)])}}])},[t._v(" "),s("div",{staticClass:"card-content"},[s("div",{},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-2"},[s("div",{staticClass:"is-size-6 has-text-weight-normal has-text-centered has-text-grey-light",staticStyle:{"padding-bottom":"8px"}},[t._v("CRM")]),t._v(" "),s("div",{staticClass:"columns is-multiline is-gapless"},t._l(t.crms,(function(e){return s("div",{key:e.id,staticClass:"column is-6"},[s("div",{staticClass:"field",staticStyle:{margin:"1px"}},[s("a",{staticClass:"is-fullwidth button",class:t.selectedCrm==e?"is-link":"is-black-ter",on:{click:function(s){return t.selectCrm(e)}}},[s("div",{class:t.selectedCrm==e?t.selectedSecondaryBoxText:t.secondaryText},[s("div",{staticClass:"is-size-7 has-text-weight-normal has-text-light"},[t._v(t._s(e.nombre_crm))])])])])])})),0)]),t._v(" "),s("div",{staticClass:"column is-2"},[s("div",{staticClass:"is-size-6 has-text-weight-normal has-text-centered has-text-grey-light",staticStyle:{"padding-bottom":"8px"}},[t._v("ZONAS")]),t._v(" "),t.selectedCrm?t._e():s("div",[s("div",{staticClass:"has-text-centered has-text-weight-light has-text-grey-light is-size-6"},[t._v("Selecciona un CRM")])]),t._v(" "),t.selectedCrm?s("div",{staticClass:"columns is-multiline is-gapless"},t._l(t.zonas,(function(e){return s("div",{key:e.id,staticClass:"column",class:2==t.zonas.length||3==t.zonas.length?"is-12":"is-6"},[s("div",{staticClass:"field",staticStyle:{margin:"1px"}},[s("a",{staticClass:"is-fullwidth button",class:t.selectedZona==e?"is-link":"is-black-ter",on:{click:function(s){return t.selectZona(e)}}},[s("div",{class:t.selectedZona==e?t.selectedSecondaryBoxText:t.secondaryText},[s("div",{staticClass:"is-size-7 has-text-weight-normal has-text-light"},[t._v(t._s(e.nombre_zona))])])])])])})),0):t._e()]),t._v(" "),s("div",{staticClass:"column is-1"},[s("div",{staticClass:"is-size-6 has-text-weight-normal has-text-centered has-text-grey-light",staticStyle:{"padding-bottom":"8px"}},[t._v("IMPORTANCIA")]),t._v(" "),s("div",{staticClass:"columns is-multiline is-gapless"},[s("div",{staticClass:"column is-12"},[s("div",{staticClass:"field",staticStyle:{margin:"1px"}},[s("a",{staticClass:"is-fullwidth button",class:t.core?"is-link":"is-black-ter",on:{click:function(e){t.core=+!t.core}}},[s("div",{class:t.secondaryText},[s("div",{staticClass:"is-size-7 has-text-weight-normal has-text-light"},[t._v("CORE")])])])])]),t._v(" "),s("div",{staticClass:"column is-12"},[s("div",{staticClass:"field",staticStyle:{margin:"1px"}},[s("a",{staticClass:"is-fullwidth button",class:t.critic?"is-link":"is-black-ter",on:{click:function(e){t.critic=+!t.critic}}},[s("div",{class:t.secondaryText},[s("div",{staticClass:"is-size-7 has-text-weight-normal has-text-light"},[t._v("CRITICO")])])])])]),t._v(" "),s("div",{staticClass:"column is-12"},[s("div",{staticClass:"field",staticStyle:{margin:"1px"}},[s("a",{staticClass:"is-fullwidth button",class:t.vip?"is-link":"is-black-ter",on:{click:function(e){t.vip=+!t.vip}}},[s("div",{class:t.secondaryText},[s("div",{staticClass:"is-size-7 has-text-weight-normal has-text-light"},[t._v("VIP")])])])])])])]),t._v(" "),s("div",{staticClass:"column is-4"},[s("div",{staticClass:"is-size-6 has-text-weight-normal has-text-centered has-text-grey-light",staticStyle:{"padding-bottom":"8px"}},[t._v("CARACTERISTICAS")]),t._v(" "),s("div",{staticClass:"columns is-multiline is-gapless"},t._l(t.characteristics,(function(e){return s("div",{key:e.id,staticClass:"column is-3"},[s("div",{staticClass:"field",staticStyle:{margin:"1px"}},[s("a",{staticClass:"tile is-child button",class:e.selected?"is-link":"is-black-ter",on:{click:function(s){return t.changeCharacteristic(e)}}},[s("div",{class:t.secondaryText},[s("div",{staticClass:"is-size-7 has-text-weight-normal has-text-light"},[t._v(t._s(e.label))])])])])])})),0)]),t._v(" "),s("div",{staticClass:"column is-3"},[s("div",{staticClass:"is-size-6 has-text-weight-normal has-text-centered has-text-grey-light",staticStyle:{"padding-bottom":"8px"}},[t._v("EQUIPAMIENTO")]),t._v(" "),s("div",{staticClass:"columns is-multiline is-gapless"},t._l(t.equipments,(function(e){return s("div",{key:e.id,staticClass:"column is-4"},[s("div",{staticClass:"field",staticStyle:{margin:"1px"}},[s("a",{staticClass:"tile is-child button",class:e.selected?"is-link":"is-black-ter",on:{click:function(s){return t.changeEquipment(e)}}},[s("div",{class:t.secondaryText},[s("div",{staticClass:"is-size-7 has-text-weight-normal has-text-light"},[t._v(t._s(e.label))])])])])])})),0)])])])])]),t._v(" "),s("div",{staticClass:"card-footer"},[s("a",{staticClass:"card-footer-item item is-link is-bold",staticStyle:{position:"relative"},attrs:{"icon-pack":"fas",size:"is-medium",loading:t.isLoading},on:{click:function(e){t.isDownloadModalActive=!0}}},[s("b-icon",{staticClass:"has-text-eco fa-2x",attrs:{pack:"fas",icon:"download"}}),t._v(" \n              \n            "),s("div",{staticClass:"is-size-6 has-text-weight-normal"},[t._v("Descargar listado filtrado de POPs")]),t._v(" "),s("b-loading",{attrs:{"is-full-page":!1,active:t.isLoading,"can-cancel":!0},on:{"update:active":function(e){t.isLoading=e}}})],1),t._v(" "),s("div",{staticClass:"card-footer-item has-background-white"},[s("div",{staticClass:"has-text-centered"},[s("span",{staticClass:"is-size-3 has-text-weight-semibold"},[t._v("\n                    "+t._s(t._f("numeral")(t.pops.total,"0,0"))+"\n                ")]),t._v(" "),s("span",{staticClass:"is-size-6"},[t._v("POPs")])])]),t._v(" "),s("div",{staticClass:"card-footer-item has-background-white"},[s("div",{staticClass:"snippet"},[s("span",{staticClass:"has-text-weight-normal"},[t.selectedPops.length?t._e():s("span",{staticClass:"is-size-6"},[t._v("Selecciona los POP que desees del costado izquierdo de la tabla.")]),t._v(" "),t.selectedPops.length?s("span",{staticClass:"is-size-7"},[s("strong",[t._v(t._s(t.selectedPops.length))]),t._v(" pops seleccionados")]):t._e()]),t._v(" "),s("div",{staticClass:"field is-grouped is-grouped-multiline"},t._l(t.selectedPops,(function(e){return s("div",{key:e.id,staticClass:"control"},[s("div",{staticClass:"tags has-addons"},[s("a",{staticClass:"tag is-link"},[t._v(t._s(e.nombre))]),t._v(" "),s("a",{staticClass:"tag is-delete",on:{click:function(s){return t.removeSelectedPop(e)}}})])])})),0)])])]),t._v(" "),s("section",{staticClass:"section has-background-white is-paddingless"},[s("div",{staticClass:"columns is-marginless"},[s("div",{staticClass:"column tile is-parent is-5 is-paddingless"},[s("div",{staticClass:"tile is-child box is-shadowless",staticStyle:{"max-height":"100%","min-height":"800px","padding-bottom":"48px"}},[s("div",{staticClass:"field"},[s("p",{staticClass:"control has-icons-left has-icons-right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],staticClass:"input is-rounded",class:t.bodyBackground+" "+t.primaryText,attrs:{type:"text","arial-label":"Buscar",placeholder:"Buscar...",autofocus:""},domProps:{value:t.searchText},on:{keyup:t.getPops,input:function(e){e.target.composing||(t.searchText=e.target.value)}}}),t._v(" "),s("span",{staticClass:"icon is-small is-left"},[s("font-awesome-icon",{attrs:{icon:"search"}})],1),t._v(" "),s("span",{staticClass:"icon is-small is-right"},[s("button",{staticClass:"delete",on:{click:t.clearSearch}})])])]),t._v(" "),s("table",{staticClass:"table is-fullwidth"},[s("thead",[s("tr",[s("th",{staticClass:"is-size-7 has-text-weight-semibold",class:t.secondaryText},[s("abbr",{attrs:{title:"Id"}},[t._v("Id")])]),t._v(" "),s("th",{staticClass:"is-size-7 has-text-weight-semibold",class:t.secondaryText},[s("abbr",{attrs:{title:"Pop"}},[t._v("Nombre POP")])]),t._v(" "),s("th",{staticClass:"is-size-7 has-text-weight-semibold has-text-centered",class:t.secondaryText},[s("abbr",{attrs:{title:"Sitios"}},[t._v("Sitios")])]),t._v(" "),s("th",{staticClass:"is-size-7 has-text-weight-semibold has-text-centered",class:t.secondaryText},[s("abbr",{attrs:{title:"Categoría"}},[t._v("Categoría")])]),t._v(" "),s("th",{staticClass:"is-size-7 has-text-weight-semibold has-text-centered"})])]),t._v(" "),s("tbody",t._l(t.pops.data,(function(e){return s("tr",{key:e.id},[s("td",{staticClass:"has-text-weight-light",class:t.primaryText},[s("b-checkbox",{attrs:{size:"is-medium","native-value":e},model:{value:t.selectedPops,callback:function(e){t.selectedPops=e},expression:"selectedPops"}})],1),t._v(" "),s("td",{},[s("a",{staticClass:"is-size-6 has-text-weight-normal",attrs:{href:"/pop/"+e.id,target:"_blank"}},[t._v("\n                                        "+t._s(e?e.nombre:"")+"\n                                    ")]),t._v(" "),s("div",{staticClass:"is-size-7 has-text-weight-normal",class:t.secondaryText},[t._v("\n                                        "+t._s(e?e.direccion:"")+", "+t._s(e.comuna?e.comuna.nombre_comuna:"")+"\n                                    ")])]),t._v(" "),s("td",{},[s("div",{staticClass:"columns is-multiline"},t._l(e.sites,(function(e){return s("div",{key:e.id,staticClass:"column is-6 has-text-centered"},[s("div",{staticClass:"is-size-7 has-text-weight-normal has-text-centered"},[t._v(t._s(e.nem_site))])])})),0)]),t._v(" "),s("td",{},[s("div",{staticClass:"has-text-centered"},[s("div",{staticClass:"tag has-text-weight-bold is-size-7"},[t._v("\n                                            "+t._s(e?t.popClassification(e).classification:"")+"\n                                        ")])])]),t._v(" "),s("td",{staticClass:"has-text-weight-light has-text-centered",class:t.primaryText},[s("a",{staticClass:"button is-small is-link is-outlined has-tooltip-left",attrs:{href:"/pop/"+e.id,type:"button",target:"_blank","data-tooltip":"Ver información completa"}},[s("font-awesome-icon",{attrs:{icon:"info"}})],1),t._v(" "),s("button",{staticClass:"button is-small is-default",attrs:{"data-tooltip":"Ver en mapa"},on:{click:function(s){return t.selectPop(e)}}},[s("font-awesome-icon",{attrs:{icon:"map-marked-alt"}})],1)])])})),0)]),t._v(" "),s("div",{staticClass:"block"},[s("nav",{staticClass:"pagination",attrs:{role:"navigation","aria-label":"pagination"}},[s("vue-pagination",{attrs:{pagination:t.pops,offset:4,primaryText:t.primaryText},on:{paginate:function(e){return t.getPops()}}})],1)])])]),t._v(" "),s("div",{staticClass:"column tile is-parent is-paddingless"},[s("div",{staticClass:"tile is-child map-container"},[s("map-view",{attrs:{user:t.user,pops:t.popsMap,map_attributes:t.map_attributes,darkMode:t.darkMode}})],1)])])]),t._v(" "),s("b-modal",{attrs:{active:t.isDownloadModalActive,"has-modal-card":"","trap-focus":"","aria-role":"dialog","aria-modal":""},on:{"update:active":function(e){t.isDownloadModalActive=e}}},[s("modal-download",{on:{clicked:t.onClickDownload}})],1)],1)}),[],!1,null,null,null);e.default=o.exports}}]);