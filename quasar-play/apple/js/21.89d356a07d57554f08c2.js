webpackJsonp([21,96],{112:function(t,n,s){var o=s(13)(s(181),s(250),null,null);t.exports=o.exports},181:function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{progressBtn:0}},methods:{workButton:function(){var t=this;this.stopWorkButton(),this.progressBtn=15,this.workingButton=setInterval(function(){t.progressBtn+=parseInt(12*Math.random(),10),t.progressBtn>=100&&t.stopWorkButton()},500)},stopWorkButton:function(t){this.workingButton&&(clearInterval(this.workingButton),this.workingButton=null),void 0!==t&&(this.progressBtn=t)}},beforeDestroy:function(){this.stopWorkButton()}}},250:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",[s("div",{staticClass:"layout-padding"},[s("p",{staticClass:"caption"},[t._v("Click on Buttons below to see them in action.")]),t._v(" "),s("p",{staticClass:"caption"},[t._v("Determined Progress")]),t._v(" "),s("div",{staticClass:"group"},[s("q-progress-button",{staticClass:"yellow",attrs:{percentage:t.progressBtn,"dark-filler":""},nativeOn:{click:function(n){t.workButton()}}},[t._v("\n        Work it!\n      ")]),t._v(" "),s("q-progress-button",{staticClass:"dark",attrs:{percentage:t.progressBtn},nativeOn:{click:function(n){t.workButton()}}},[t._v("\n        Work it!\n      ")])],1),t._v(" "),s("p",{staticClass:"caption"},[t._v("Indetermined Progress")]),t._v(" "),s("div",{staticClass:"group"},[s("q-progress-button",{staticClass:"primary",attrs:{indeterminate:"",percentage:t.progressBtn},nativeOn:{click:function(n){t.workButton()}}},[t._v("\n        Work it!\n      ")]),t._v(" "),s("q-progress-button",{staticClass:"negative",attrs:{indeterminate:"",percentage:t.progressBtn},nativeOn:{click:function(n){t.workButton()}}},[t._v("\n        Work it!\n      ")])],1),t._v(" "),s("p",{staticClass:"caption"},[t._v("Control Progress with Buttons below")]),t._v(" "),s("div",{staticClass:"group"},[s("button",{staticClass:"secondary clear",on:{click:function(n){t.stopWorkButton()}}},[t._v("\n        Stop\n      ")]),t._v(" "),s("button",{staticClass:"secondary clear",on:{click:function(n){t.stopWorkButton(-1)}}},[t._v("\n        Error\n      ")]),t._v(" "),s("button",{staticClass:"secondary clear",on:{click:function(n){t.stopWorkButton(100)}}},[t._v("\n        Success\n      ")]),t._v(" "),s("button",{staticClass:"secondary clear",on:{click:function(n){t.stopWorkButton(0)}}},[t._v("\n        Reset\n      ")]),t._v(" "),s("div",{staticClass:"label tag bg-light"},[t._v(t._s(t.progressBtn))])])])])},staticRenderFns:[]}}});