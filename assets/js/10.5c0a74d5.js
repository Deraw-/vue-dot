(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{287:function(t,s,e){},304:function(t,s,e){"use strict";var i=e(287);e.n(i).a},344:function(t,s,e){"use strict";e.r(s);var i={name:"Timeline",data:function(){return{statuses:{done:{icon:"check",color:"success"},pending:{icon:"visibility",color:"primary"},next:{icon:"schedule",color:"info"}}}},methods:{md:e(49).a},props:{items:{type:Array,required:!0}}},n=(e(304),e(4)),a=Object(n.a)(i,function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.items.length?e("ul",{staticClass:"timeline mt-5"},t._l(t.items,function(s,i){return e("li",{key:i,staticClass:"timeline-item"},[e("SvgIcon",{class:"timeline-badge "+t.statuses[s.status].color+" "+s.status,attrs:{icon:t.statuses[s.status].icon,color:"#fff"}}),t._v(" "),e("div",{staticClass:"timeline-panel",class:{current:"pending"===s.status}},[e("VLayout",{staticClass:"timeline-heading",attrs:{wrap:"","justify-space-between":""}},[e("h4",{staticClass:"timeline-title"},[t._v(t._s(s.title))]),t._v(" "),e("div",{staticClass:"timeline-panel-date"},[e("div",{staticClass:"timestamp"},[e("small",{staticClass:"text-muted"},[t._v("\n\t\t\t\t\t\t\t"+t._s(s.date)+"\n\t\t\t\t\t\t\t"),e("SvgIcon",{attrs:{small:"",icon:"calendar"}})],1)])])]),t._v(" "),e("div",{staticClass:"timeline-body",domProps:{innerHTML:t._s(t.md(s.body))}})],1)],1)}),0):t._e()},[],!1,null,"f1399dfe",null);a.options.__file="Timeline.vue";s.default=a.exports}}]);