(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{309:function(t,a,i){"use strict";i.r(a);var s={components:{VuePagination:function(){return i.e(97).then(i.bind(null,322))}},props:["selectedCrm","selectedZona","primaryText","secondaryText","core"],data:function(){return{data:{total:0,per_page:12,from:1,to:0,current_page:1},buttonLoading:0,isLoading:!1}},created:function(){},mounted:function(){this.getData(),this.isLoading=!0},watch:{selectedCrm:function(t,a){this.getData()},selectedZona:function(t,a){this.getData()},core:function(t,a){this.getData()}},methods:{getData:function(){var t=this;axios.get("/api/criticPopList?core=".concat(this.core,"&crm_id=").concat(this.selectedCrm?this.selectedCrm.id:0,"&zona_id=").concat(this.selectedZona?this.selectedZona.id:0,"&page=").concat(this.data.current_page)).then((function(a){t.data=a.data.pop,t.isLoading=!1}))},popClassification:function(t){var a,i=6;return t.sites&&t.sites.forEach((function(t){t.classification_type_id&&t.classification_type_id<i&&(i=t.classification_type_id,a=t.classification_type.classification_type)}),this),{id:i,classification:a}}}},e=i(0),n=Object(e.a)(s,(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("div",{staticClass:"columns"},[i("div",{staticClass:"column is-size-5 has-text-weight-semibold has-text-left",class:t.primaryText},[t._v("POP Críticos")]),t._v(" "),i("div",{staticClass:"column is-size-4 has-text-weight-semibold has-text-right",class:t.primaryText},[t._v(t._s(t._f("numeral")(t.data.total,"0,0")))])]),t._v(" "),i("table",{staticClass:"table is-fullwidth",staticStyle:{"background-color":"rgba(0,0,0,0)"}},[i("thead",[i("tr",{staticClass:"is-size-7"},[i("th",{staticClass:"has-text-left",class:t.secondaryText},[i("abbr",{attrs:{title:"Nombre y dirección del POP"}},[t._v("Nombre / Dirección")])]),t._v(" "),i("th",{staticClass:"has-text-left",class:t.secondaryText},[i("abbr",{attrs:{title:"Nemónico"}},[t._v("Nemónico")])]),t._v(" "),i("th",{staticClass:"has-text-left",class:t.secondaryText},[i("abbr",{attrs:{title:"Categoría"}},[t._v("Categoría")])])])]),t._v(" "),i("tbody",t._l(t.data.data,(function(a){return i("tr",{key:a.id,staticClass:"is-size-7"},[i("td",{staticClass:"has-text-left",class:t.primaryText},[i("div",[t._v(t._s(a.pop.nombre))]),t._v(" "),i("div",[t._v(t._s(a.pop.direccion))])]),t._v(" "),i("td",{staticClass:"has-text-left",class:t.primaryText},[i("router-link",{attrs:{to:"/pop/"+a.pop.id,target:"_blank"}},[t._v(t._s(a.name))])],1),t._v(" "),i("td",{staticClass:"has-text-centered",class:t.primaryText},[i("b-tag",{attrs:{type:1==t.popClassification(a.pop).id?"is-info":2==t.popClassification(a.pop).id?"is-warning":3==t.popClassification(a.pop).id?"is-smart":4==t.popClassification(a.pop).id?"is-success":"is-link"}},[t._v(t._s(t.popClassification(a.pop).classification))])],1)])})),0)]),t._v(" "),i("nav",{staticClass:"pagination",attrs:{role:"navigation","aria-label":"pagination"}},[i("vue-pagination",{attrs:{pagination:t.data,offset:4,primaryText:t.primaryText},on:{paginate:function(a){return t.getData()}}})],1),t._v(" "),i("b-loading",{attrs:{"is-full-page":!1,active:t.isLoading,"can-cancel":!0},on:{"update:active":function(a){t.isLoading=a}}})],1)}),[],!1,null,null,null);a.default=n.exports}}]);