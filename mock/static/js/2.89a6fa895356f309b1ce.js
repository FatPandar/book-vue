webpackJsonp([2],{Cdx3:function(e,t,o){var n=o("sB3e"),r=o("lktj");o("uqUo")("keys",function(){return function(e){return r(n(e))}})},fZjL:function(e,t,o){e.exports={default:o("jFbC"),__esModule:!0}},jFbC:function(e,t,o){o("Cdx3"),e.exports=o("FeBl").Object.keys},uqUo:function(e,t,o){var n=o("kM2E"),r=o("FeBl"),a=o("S82l");e.exports=function(e,t){var o=(r.Object||{})[e]||Object[e],i={};i[e]=t(o),n(n.S+n.F*a(function(){o(1)}),"Object",i)}},wHgX:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("fZjL"),r=o.n(n),a=o("Xxa5"),i=o.n(a),u=o("exGp"),c=o.n(u),s=o("qmpX"),b=o("gyMJ"),f={created:function(){this.getData()},data:function(){return{book:{}}},methods:{update:function(){var e=this;return c()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(b.f)(e.bid,e.book);case 2:e.$router.push("/list");case 3:case"end":return t.stop()}},t,e)}))()},getData:function(){var e=this;return c()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(b.b)(e.bid);case 2:e.book=t.sent,r()(e.book).length>0||e.$router.push("/list");case 4:case"end":return t.stop()}},t,e)}))()}},computed:{bid:function(){return this.$route.params.bid}},watch:{$route:function(){this.getData()}},components:{Header:s.a}},l={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"content"},[o("Header",{attrs:{back:!0}},[e._v("书籍详情")]),e._v(" "),o("ul",[o("li",[o("label",{attrs:{for:"name"}},[e._v("书籍名称")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.book.bookName,expression:"book.bookName"}],attrs:{type:"text",id:"name"},domProps:{value:e.book.bookName},on:{input:function(t){t.target.composing||e.$set(e.book,"bookName",t.target.value)}}})]),e._v(" "),o("li",[o("label",{attrs:{for:"info"}},[e._v("书籍信息")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.book.bookInfo,expression:"book.bookInfo"}],attrs:{type:"text",id:"info"},domProps:{value:e.book.bookInfo},on:{input:function(t){t.target.composing||e.$set(e.book,"bookInfo",t.target.value)}}})]),e._v(" "),o("li",[o("label",{attrs:{for:"price"}},[e._v("书籍价格")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model.number",value:e.book.bookPrice,expression:"book.bookPrice",modifiers:{number:!0}}],attrs:{type:"text",id:"price"},domProps:{value:e.book.bookPrice},on:{input:function(t){t.target.composing||e.$set(e.book,"bookPrice",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})])]),e._v(" "),o("button",{on:{click:e.update}},[e._v("确认修改")])],1)},staticRenderFns:[]};var d=o("VU/8")(f,l,!1,function(e){o("zHWy")},"data-v-4d95ee02",null);t.default=d.exports},zHWy:function(e,t){}});
//# sourceMappingURL=2.89a6fa895356f309b1ce.js.map