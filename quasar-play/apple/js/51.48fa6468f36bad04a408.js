webpackJsonp([51,96],{146:function(e,a,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{model:30,min:0,max:50}}}},258:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",[l("div",{staticClass:"layout-padding"},[l("div",{staticClass:"label bg-secondary text-white"},[e._v("\n      Model "),l("span",{staticClass:"right-detail"},[l("em",[e._v(e._s(e.model))])])]),e._v(" "),l("p",{staticClass:"caption"},[e._v("Default")]),e._v(" "),l("q-knob",{attrs:{min:e.min,max:e.max},model:{value:e.model,callback:function(a){e.model=a}}}),e._v(" "),l("p",{staticClass:"caption"},[e._v("With Step")]),e._v(" "),l("div",{staticClass:"group"},[l("q-knob",{attrs:{min:e.min,max:e.max,step:10},model:{value:e.model,callback:function(a){e.model=a}}}),e._v(" "),l("p",{staticClass:"caption"},[e._v("Styling")]),e._v(" "),l("q-knob",{attrs:{size:"150px",color:"red","line-width":"2px","track-color":"white",min:e.min,max:e.max,placeholder:"$ "+e.model},model:{value:e.model,callback:function(a){e.model=a}}}),e._v(" "),l("q-knob",{staticStyle:{"font-size":"3rem"},attrs:{color:"#26a69a",min:e.min,max:e.max,step:5},model:{value:e.model,callback:function(a){e.model=a}}}),e._v(" "),l("q-knob",{staticStyle:{"font-size":"1.5rem"},attrs:{size:"120px",color:"rgba(0, 0, 0, .8)","track-color":"yellow","line-width":"5px",min:e.min,max:e.max,step:5,placeholder:"<i>euro_symbol</i> "+e.model},model:{value:e.model,callback:function(a){e.model=a}}})],1),e._v(" "),l("p",{staticClass:"caption"},[e._v("Readonly state")]),e._v(" "),l("q-knob",{attrs:{min:e.min,max:e.max,placeholder:"<i>volume_up</i> "+e.model,readonly:""},model:{value:e.model,callback:function(a){e.model=a}}}),e._v(" "),l("p",{staticClass:"caption"},[e._v("Disabled state")]),e._v(" "),l("q-knob",{attrs:{min:e.min,max:e.max,placeholder:"<i>volume_up</i> "+e.model,disable:""},model:{value:e.model,callback:function(a){e.model=a}}})],1)])},staticRenderFns:[]}},72:function(e,a,l){var t=l(13)(l(146),l(258),null,null);e.exports=t.exports}});