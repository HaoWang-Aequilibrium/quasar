webpackJsonp([19,96],{114:function(e,t,n){var i=n(13)(n(183),n(307),null,null);e.exports=i.exports},183:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(2);t.default={data:function(){return{items:[{},{},{},{},{},{}]}},methods:{refresher:function(e){var t=this;setTimeout(function(){e(),t.items.push({}),i.Toast.create("Item #"+t.items.length+" is new.")},3e3)}}}},307:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("q-pull-to-refresh",{attrs:{handler:e.refresher}},[n("div",{staticClass:"layout-padding"},[n("p",{staticClass:"caption"},[e._v("\n        Pull down to refresh on the content below.\n        On desktop it works by dragging the content down.\n      ")]),e._v(" "),e._l(e.items,function(t,i){return n("p",{staticClass:"caption"},[n("span",{staticClass:"label bg-secondary text-white shadow-1"},[e._v("\n          "+e._s(e.items.length-i)+"\n        ")]),e._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n      ")])})],2)])],1)},staticRenderFns:[]}}});