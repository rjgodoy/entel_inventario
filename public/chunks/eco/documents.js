(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{345:function(e,t,o){"use strict";o.r(t);var a=o(3),i=o(1),s=o(4);a.d.add(i.R,i.P,i.L,i.M,i.J,i.c,s.g,i.Bb);var n={components:{ModalUpload:function(){return o.e(74).then(o.bind(null,381))}},props:["user"],data:function(){return{dropFiles:[],ecoDocs:Array,isPaginated:!0,isPaginationSimple:!1,paginationPosition:"bottom",defaultSortDirection:"asc",sortIcon:"arrow-up",sortIconSize:"is-small",currentPage:1,perPage:10,edit:!1,isUploadModalActive:!1}},computed:{canUpload:function(){return this.ecoDocs.can&&this.ecoDocs.can.upload},canDelete:function(){return this.ecoDocs.can&&this.ecoDocs.can.delete}},created:function(){this.$eventBus.$on("reload-ecoDocs",this.getRCAs)},mounted:function(){this.getRCAs()},methods:{getRCAs:function(){var e=this;axios.get("/api/ecoDocs").then((function(t){console.log(t.data),e.ecoDocs=t.data}))},submit:function(){var e=this;this.dropFiles.forEach((function(t){return e.submitForm(t)}))},submitForm:function(e){var t=this,o={headers:{"content-type":"multipart/form-data","X-CSRF-TOKEN":document.querySelector('meta[name="csrf-token"]').content}},a=new FormData;a.append("file",e);try{axios.post("/api/ecoDocs",a,o).then((function(e){t.getRCAs()}))}catch(e){console.log(e)}},faFile:function(e){return{icon:"pdf"==e?"file-pdf":"jpg"==e||"png"==e||"jpeg"==e?"file-image":"xls"==e||"xlsx"==e?"file-excel":"file",type:"pdf"==e?"has-text-info":"jpg"==e||"png"==e||"jpeg"==e?"has-text-warning":"xls"==e||"xlsx"==e?"has-text-success":"has-text-primary"}},openFile:function(e){"pdf"==e.extension||"jpg"==e.extension||"png"==e.extension||"jpeg"==e.extension?window.open("/storage/"+e.route,"_blank"):this.readFile(e)},readFile:function(e){var t=this;this.isLoading=!0;var o={route:e.route,mime:e.mime};axios.get("/api/viewFile",{params:o,responseType:"arraybuffer"}).then((function(o){console.log(o);var a=new Blob([o.data],{type:e.mime});if(window.navigator&&window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(newBlob);else{var i=window.URL.createObjectURL(a),s=document.createElement("a");s.href=i,s.target="_self",s.open=e.basename,s.click(),t.isLoading=!1,t.$buefy.toast.open({message:"El archivo se ha descargado exitosamente.",type:"is-success",duration:5e3})}})).catch((function(e){console.log(e),t.isLoading=!1,t.$buefy.toast.open({message:"Ha ocurrido un error. Favor contactar al administrador",type:"is-danger",duration:5e3})}))},confirmDelete:function(e){var t=this;this.$buefy.dialog.confirm({message:"Desea eliminar este archivo?",type:"is-danger",onConfirm:function(){axios.delete("/api/files/".concat(e.id)).then((function(e){console.log(e),t.getRCAs()}))}})}},beforeDestroy:function(){this.$eventBus.$off("reload-ecoDocs")}},r=o(0),c=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"tile is-child box"},[o("div",{staticClass:"is-pulled-right"},[e.canUpload?o("span",{},[o("button",{staticClass:"button",on:{click:function(t){e.isUploadModalActive=!0}}},[e._v("Subir archivos")])]):e._e(),e._v(" "),e.canDelete?o("span",{},[o("button",{staticClass:"button",class:e.edit&&"is-danger",on:{click:function(t){e.edit=!e.edit}}},[e._v("Editar")])]):e._e()]),e._v(" "),o("div",{staticClass:"title is-size-4"},[e._v("Otros Documentos")]),e._v(" "),o("b-table",{attrs:{data:e.ecoDocs.files,paginated:e.isPaginated,"per-page":e.perPage,"current-page":e.currentPage,"pagination-simple":e.isPaginationSimple,"pagination-position":e.paginationPosition,"default-sort-direction":e.defaultSortDirection,"sort-icon":e.sortIcon,"sort-icon-size":e.sortIconSize,"pagination-size":"is-small","default-sort":"user.first_name","aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page"},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}},[o("b-table-column",{staticClass:"is-size-6",attrs:{width:"60%",field:"basename",label:"Archivo",sortable:"",searchable:""},scopedSlots:e._u([{key:"searchable",fn:function(t){return[o("b-input",{model:{value:t.filters[t.column.field],callback:function(o){e.$set(t.filters,t.column.field,o)},expression:"props.filters[props.column.field]"}})]}},{key:"header",fn:function(t){var a=t.column;return[o("b-tooltip",{staticClass:"is-size-6",attrs:{label:a.label,"append-to-body":""}},[e._v("\n                    "+e._s(a.label)+"\n                ")])]}},{key:"default",fn:function(t){return[o("a",{staticClass:"columns"},[o("div",{staticClass:"column is-1"},[o("font-awesome-icon",{class:e.faFile(t.row.extension).type,attrs:{icon:["fas",e.faFile(t.row.extension).icon]}})],1),e._v(" "),o("div",{staticClass:"column"},[o("div",{staticClass:"is-size-6",on:{click:function(o){return e.openFile(t.row)}}},[e._v(e._s(t.row.basename))]),e._v(" "),o("div",{staticClass:"is-size-7 has-text-dark"},[e._v(e._s(t.row.size/1e3)+" kb")])])])]}}])}),e._v(" "),o("b-table-column",{staticClass:"is-size-6",attrs:{width:"",field:"site.nem_site",label:"PoP",sortable:"",searchable:""},scopedSlots:e._u([{key:"searchable",fn:function(t){return[o("b-input",{model:{value:t.filters[t.column.field],callback:function(o){e.$set(t.filters,t.column.field,o)},expression:"props.filters[props.column.field]"}})]}},{key:"header",fn:function(t){var a=t.column;return[o("b-tooltip",{staticClass:"is-size-6",attrs:{label:a.label,"append-to-body":""}},[e._v("\n                    "+e._s(a.label)+"\n                ")])]}},{key:"default",fn:function(t){return[t.row.site||t.row.pop?o("div",{staticClass:"has-text-right"},[o("div",{staticClass:"is-size-7"},[e._v(e._s(t.row.site?t.row.site.nem_site:t.row.pop?t.row.pop.sites[0].nem_site:""))]),e._v(" "),o("router-link",{staticClass:"is-size-7",attrs:{to:"/pop/"+(t.row.site?t.row.site.pop_id:t.row.pop?t.row.pop.id:""),target:"_blank"}},[o("div",{staticClass:"is-size-6"},[e._v(e._s(t.row.site?t.row.site.pop.nombre:t.row.pop?t.row.pop.sites[0].nombre:""))])])],1):e._e()]}}])}),e._v(" "),e.canDelete&&e.edit?o("b-table-column",{attrs:{field:"id",label:"",width:"10",numeric:""},scopedSlots:e._u([{key:"default",fn:function(t){return[o("button",{staticClass:"button is-small",on:{click:function(o){return e.confirmDelete(t.row)}}},[o("font-awesome-icon",{staticClass:"is-size-7 has-text-danger",attrs:{icon:["far","trash-alt"]}})],1)]}}],null,!1,3709482748)}):e._e(),e._v(" "),o("template",{slot:"empty"},[o("section",{staticClass:"section"},[o("div",{staticClass:"content has-text-grey has-text-centered"},[o("p",[o("b-icon",{attrs:{icon:"emoticon-sad",size:"is-large"}})],1),e._v(" "),o("p",[e._v("No hay archivos.")])])])])],2),e._v(" "),e.ecoDocs.can&&e.ecoDocs.can.upload?o("b-modal",{attrs:{active:e.isUploadModalActive,"has-modal-card":"","trap-focus":"","aria-role":"dialog","aria-modal":""},on:{"update:active":function(t){e.isUploadModalActive=t}}},[o("modal-upload",{attrs:{user:e.user}})],1):e._e()],1)}),[],!1,null,null,null);t.default=c.exports}}]);