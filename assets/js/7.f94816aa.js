(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{172:function(t,e,s){},197:function(t,e,s){"use strict";s(172)},206:function(t,e,s){"use strict";s.r(e);var i={props:["root"],computed:{topics(){return this.$site.pages.filter(t=>t.path.startsWith(this.root)&&!t.frontmatter.no_index).map(t=>(t.frontmatter.title||(t.frontmatter.title=t.title),t)).sort((t,e)=>t.frontmatter.title.localeCompare(e.frontmatter.title))},categories(){return Object.keys(this.pageLookup).sort()}},data:function(){return{pageLookup:{}}},created:function(){this.pageLookup.Uncategorized=[];for(const t of this.$site.pages)if(t.frontmatter&&t.frontmatter.categories&&t.path.startsWith(this.root)){for(const e of t.frontmatter.categories)this.pageLookup[e]||(this.pageLookup[e]=[]),this.pageLookup[e].push(t);t.frontmatter.categories.length<2&&this.pageLookup.Uncategorized.push(t)}delete this.pageLookup["Needs Review"]},methods:{topicCircle:function(t){return this.pageLookup[t]?this.pageLookup[t].sort((t,e)=>t.title<e.title?-1:1):[]}}},o=(s(197),s(6)),a=Object(o.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main-content"},[s("div",{staticClass:"category"}),s("h2",[t._v("Main Categories")]),s("div",{staticClass:"category boop"},t._l(t.topicCircle("Topic Circles"),(function(e){return s("div",{key:"tc+"+e.path,staticClass:"topics"},[s("div",{staticClass:"entry"},[s("router-link",{staticClass:"link-text",attrs:{to:e.path}},[t._v(t._s(e.frontmatter.title))]),e.frontmatter.categories.includes("Needs Review")?s("Badge",{staticClass:"badge",attrs:{text:"Needs Review",type:"warn",vertical:"top"}}):t._e(),e.frontmatter.description?s("p",[t._v(t._s(e.frontmatter.description))]):t._e()],1)])})),0),s("hr"),s("h1",[t._v("Big List of all pages by category")]),t._l(t.categories,(function(e){return s("div",{key:e,staticClass:"category"},[s("h2",[t._v(t._s(e)+":")]),s("div",{staticClass:"boop"},t._l(t.topicCircle(e),(function(e){return s("div",{key:e.path,staticClass:"topics"},[s("div",{staticClass:"entry",staticStyle:{columns:"2"}},[s("router-link",{staticClass:"link-text",attrs:{to:e.path}},[t._v(t._s(e.frontmatter.title))]),e.frontmatter.categories.includes("Needs Review")?s("Badge",{staticClass:"badge",attrs:{text:"Needs Review",type:"warn",vertical:"top"}}):t._e(),e.frontmatter.description?s("p",[t._v(t._s(e.frontmatter.description))]):t._e()],1)])})),0)])}))],2)}),[],!1,null,"1d7b041a",null);e.default=a.exports}}]);