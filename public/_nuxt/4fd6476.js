(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{412:function(t,e,l){var content=l(414);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(14).default)("f8b8805c",content,!0,{sourceMap:!1})},413:function(t,e,l){"use strict";l(412)},414:function(t,e,l){(e=l(13)(!1)).push([t.i,".back[data-v-26506446]{transform:rotate(180deg)}",""]),t.exports=e},415:function(t,e,l){"use strict";l.r(e);var c={props:{back:Boolean,lg:Boolean}},r=(l(413),l(11)),component=Object(r.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return this.lg?e("svg",{staticClass:"link-arrow",class:{back:this.back},attrs:{width:"41",height:"16",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M40.7071 8.70711C41.0976 8.31659 41.0976 7.68342 40.7071 7.2929L34.3431 0.928935C33.9526 0.538411 33.3195 0.538411 32.9289 0.928935C32.5384 1.31946 32.5384 1.95262 32.9289 2.34315L38.5858 8L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM-8.74228e-08 9L40 9L40 7L8.74228e-08 7L-8.74228e-08 9Z",fill:"#FFFCF9"}})]):e("svg",{staticClass:"link-arrow",class:{back:this.back},attrs:{width:"26",height:"8",viewBox:"0 0 26 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M25.3536 4.35355C25.5488 4.15829 25.5488 3.84171 25.3536 3.64645L22.1716 0.464466C21.9763 0.269204 21.6597 0.269204 21.4645 0.464466C21.2692 0.659728 21.2692 0.976311 21.4645 1.17157L24.2929 4L21.4645 6.82843C21.2692 7.02369 21.2692 7.34027 21.4645 7.53553C21.6597 7.7308 21.9763 7.7308 22.1716 7.53553L25.3536 4.35355ZM0 4.5H25V3.5H0V4.5Z",fill:"#FFFCF9"}})])}),[],!1,null,"26506446",null);e.default=component.exports},424:function(t,e,l){var content=l(435);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(14).default)("01681a50",content,!0,{sourceMap:!1})},434:function(t,e,l){"use strict";l(424)},435:function(t,e,l){(e=l(13)(!1)).push([t.i,".link-wrapper[data-v-67ba6fcc]{display:inline-flex}.link-text[data-v-67ba6fcc]{margin:0 15px 0 0}.reverse .link-text[data-v-67ba6fcc]{margin:0 0 0 15px}.link-container[data-v-67ba6fcc]{display:flex;align-items:center}.reverse[data-v-67ba6fcc]{flex-direction:row-reverse}",""]),t.exports=e},464:function(t,e,l){"use strict";l.r(e);var c={props:{text:String,link:Object,back:Boolean}},r=(l(434),l(11)),component=Object(r.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("NuxtLink",{staticClass:"link-wrapper",attrs:{to:this.link,exact:""}},[e("span",{staticClass:"link-container",class:{reverse:this.back}},[e("span",{staticClass:"link-text"},[this._v("\n      "+this._s(this.text)+"\n    ")]),this._v(" "),e("Arrow",{attrs:{back:this.back}})],1)])}),[],!1,null,"67ba6fcc",null);e.default=component.exports;installComponents(component,{Arrow:l(415).default})},576:function(t,e,l){"use strict";l.r(e);var c={name:"portfolio",layout:"default",data:function(){return{select:{key:"all",val:"Все записи"},items:[{key:"all",val:"Все записи"},{key:"news",val:"Новости"},{key:"articles",val:"Статьи"}]}}},r=l(11),n=l(26),o=l.n(n),v=l(409),f=l(573),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-container",[l("section",{staticClass:"articles"},[l("div",{staticClass:"articles-filter"},[l("p",[t._v("Фильтр")]),t._v(" "),l("v-select",{attrs:{items:t.items,dense:"","item-text":"val","item-value":"key"},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}})],1),t._v(" "),l("div",{staticClass:"articles-list"},[l("div",{staticClass:"article-preview"},[l("div",{staticClass:"article-metadata"},[l("div",{staticClass:"articles-categories"}),t._v(" "),l("div",{staticClass:"article-date"})]),t._v(" "),l("div",{staticClass:"article-thumbnail"},[l("img",{attrs:{src:"",alt:""}})]),t._v(" "),l("div",{staticClass:"article-details"},[l("h2",{staticClass:"article-title"},[t._v("Some article title")]),t._v(" "),l("p",{staticClass:"article-announce"},[t._v("Some announcing part of article content")]),t._v(" "),l("LinkArrowed",{attrs:{text:"Читать",link:{path:"/articles/some-article-alias"}}})],1)])])])])}),[],!1,null,null,null);e.default=component.exports;o()(component,{LinkArrowed:l(464).default}),o()(component,{VContainer:v.a,VSelect:f.a})}}]);