(function(e){function t(t){for(var r,s,o=t[0],l=t[1],c=t[2],u=0,m=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&m.push(i[s][0]),i[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(m.length)m.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var o=n[s];0!==i[o]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},s={app:0},i={app:0},a=[];function o(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"6433e226"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={about:1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"27ac95e0"}[e]+".css",i=l.p+r,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var c=a[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===r||u===i))return t()}var m=document.getElementsByTagName("style");for(o=0;o<m.length;o++){c=m[o],u=c.getAttribute("data-href");if(u===r||u===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete s[e],d.parentNode.removeChild(d),n(a)},d.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){s[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=a);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(e);var m=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",m.name="ChunkLoadError",m.type=r,m.request=s,n[1](m)}i[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/retirementcalc/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var m=0;m<c.length;m++)t(c[m]);var d=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0e76":function(e,t,n){"use strict";n("fb44")},"0fc7":function(e,t,n){"use strict";n("e3d4")},"1b7c":function(e,t,n){"use strict";n("7103")},2463:function(e,t,n){"use strict";n("8933")},2900:function(e,t,n){},"452c":function(e,t,n){},4678:function(e,t,n){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf755","./tlh.js":"cf755","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=i,e.exports=s,s.id="4678"},"4b6d":function(e,t,n){e.exports=n.p+"img/retirees.23e52c63.png"},"4d6c":function(e,t,n){},"54db":function(e,t,n){"use strict";n("4d6c")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var r=n("2b0e"),s=n("5f5b"),i=n("b1e0");n("ab8b"),n("2dd8");r["default"].use(s["a"]),r["default"].use(i["a"]);var a,o,l,c,u,m,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("link",{attrs:{rel:"stylesheet",href:"node_modules/@fortawesome/fontawesome-free/css/all.css"}}),n("div",{staticClass:"row",attrs:{id:"nav"}},[n("div",{staticClass:"col-6 text-left"},[n("router-link",{attrs:{to:"/"}},[n("div",{staticClass:"brand tracking-in-expand"},[n("b-icon-cash"),e._v(" FakeBoy Financial "),n("p",{staticClass:"tagline text-focus-in"},[e._v("We're not real!")])],1)])],1),n("div",{staticClass:"col-6 text-right rightpad"},[n("router-link",{staticClass:"links",attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{staticClass:"links",attrs:{to:"/about"}},[e._v("About")])],1)]),n("router-view",{staticClass:"defaults"})],1)},f=[],g=(n("54db"),n("b0a0"),n("2877")),h={},p=Object(g["a"])(h,d,f,!1,null,"8c59cd7e",null),v=p.exports,y=(n("d3b7"),n("8c4f")),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"row pad30"},[n("div",{staticClass:"col-sm-12"},[n("Banner",{attrs:{msg:"Quick Retirement Calculator"}})],1)]),n("div",{staticClass:"row pt-4"},[n("div",{staticClass:"col-xs-12 col-sm-8 fade-in"},[n("retirement-form")],1),e._m(0)])])},j=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-xs-12 col-sm-4 fade-in"},[r("div",{staticClass:"advert"},[r("img",{attrs:{src:n("4b6d"),width:"100%"}})])])}],C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",{staticClass:"text-focus-in"},[e._v(e._s(e.msg))]),e._m(0)])},S=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"fade-in"},[e._v("We've created this quick retirement calculator to give you idea on what you can do to ensure that you have a long-lasting, worry free retirement! "),n("strong",[e._v("It's super easy, get started below!")])])}],_={name:"HelloWorld",props:{msg:String}},R=_,w=(n("fc0f"),Object(g["a"])(R,C,S,!1,null,"68fc177a",null)),x=w.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"formContainer"},[n("form",{attrs:{method:"post",action:"#"}},[n("form-wizard",{attrs:{color:"#0de4b5"},on:{"on-complete":e.emitData}},[n("h5",{attrs:{slot:"title"},slot:"title"},[e._v("Fill out a few simple questions and we'll give you a rundown of your retirement expectations.")]),n("tab-content",{attrs:{title:"Personal details"}},[n("input-field",{attrs:{unique:"currentage",label:"Current Age",placeholder:"35"},on:{updated:function(t){e.form.currentage=t}}}),n("input-field",{attrs:{unique:"retireage",label:"Retirement Age",placeholder:"64"},on:{updated:function(t){e.form.retireage=t}}}),n("input-field",{attrs:{unique:"lifespan",label:"Expected Lifespan",placeholder:"84"},on:{updated:function(t){e.form.lifespan=t}}})],1),n("tab-content",{attrs:{title:"Additional Info"}},[n("currency-field",{attrs:{unique:"currentsavings",label:"Current Total Savings",placeholder:"200000"},on:{updated:function(t){e.form.currentsavings=t}}}),n("currency-field",{attrs:{unique:"retirementsavings",label:"Annual Retirement Savings",placeholder:"125000"},on:{updated:function(t){e.form.retirementsavings=t}}}),n("currency-field",{attrs:{unique:"annualincome",label:"Annual Household Income",placeholder:"125000"},on:{updated:function(t){e.form.annualincome=t}}})],1),n("tab-content",{attrs:{title:"Last step"}},[n("currency-field",{attrs:{unique:"nonrannualspending",label:"What is your expected annual spending?",placeholder:"20000"},on:{updated:function(t){e.form.nonrannualspending=t}}}),n("currency-field",{attrs:{unique:"annualspending",label:"What is your expected annual spending in retirement?",placeholder:"20000"},on:{updated:function(t){e.form.annualspending=t}}}),n("currency-field",{attrs:{unique:"retirementsalary",label:"Expected Annual Income in Retirement",placeholder:"15000"},on:{updated:function(t){e.form.retirementsalary=t}}})],1)],1)],1)])},k=[],A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-form-group",[n("label",{attrs:{for:e.unique}},[e._v(e._s(e.label))]),n("b-form-input",{attrs:{type:"number",id:e.unique,placeholder:e.placeholder},on:{input:function(t){return e.$emit("updated",e.value)}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},D=[],O=(n("a9e3"),{props:{label:String,unique:String,placeholder:Number},components:{},data:function(){return{value:""}}}),I=O,z=(n("0e76"),Object(g["a"])(I,A,D,!1,null,"e3c8800e",null)),E=z.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-form-group",[n("label",{attrs:{for:e.unique}},[e._v(e._s(e.label))]),n("currency-input",{staticClass:"form-control",attrs:{currency:"USD",placeholder:e.placeholder,id:e.unique},on:{input:function(t){return e.$emit("updated",e.value)}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},N=[],F={props:{label:String,unique:String,placeholder:Number},data:function(){return{value:""}}},q=F,B=(n("fae7"),Object(g["a"])(q,L,N,!1,null,"4ce9eab6",null)),T=B.exports,M=n("2ee4"),Y=(n("da93"),{components:{InputField:E,FormWizard:M["FormWizard"],TabContent:M["TabContent"],CurrencyField:T},data:function(){return{form:{currentage:0,retireage:0,annualincome:0,yearlyinterest:0,currentsavings:0,retirementsavings:0,annualspending:0,nonrannualspending:0,retirementsalary:0,lifespan:0},returnedData:{retirementyears:0,yearstilretire:0,moneyatretirement:0,moneymade:0,incomelongevity:0,retirementincome:0,retirementwithsavings:0,retirementspending:0,nonrannualspending:0}}},watch:{form:{handler:function(e){this.returnedData.retirementyears=parseInt(e.lifespan)-parseInt(e.retireage),this.returnedData.yearstilretire=parseInt(e.retireage)-parseInt(e.currentage),this.returnedData.moneymade=(parseInt(e.annualincome)-parseInt(e.nonrannualspending))*parseInt(this.returnedData.yearstilretire),this.returnedData.moneyatretirement=parseInt(this.returnedData.moneymade)+parseInt(e.currentsavings),this.returnedData.retirementincome=parseInt(e.retirementsalary)*parseInt(this.returnedData.retirementyears),this.returnedData.nonrannualspending=parseInt(e.nonrannualspending),this.returnedData.retirementwithsavings=parseInt(this.returnedData.moneyatretirement)+parseInt(e.retirementsalary),this.returnedData.retirementspending=parseInt(e.annualspending)*parseInt(this.returnedData.retirementyears),this.returnedData.incomelongevity=parseInt(this.returnedData.retirementwithsavings)/parseInt(e.annualspending)},deep:!0}},methods:{emitData:function(){var e={currentage:this.form.currentage,retireage:this.form.retireage,annualincome:this.form.annualincome,lifespan:this.form.lifespan,currentsavings:this.form.currentsavings,retirementyears:this.returnedData.retirementyears,yearstilretire:this.returnedData.yearstilretire,moneymade:this.returnedData.moneymade,moneyatretirement:this.returnedData.moneyatretirement,retirementincome:this.returnedData.retirementincome,retirementwithsavings:this.returnedData.retirementwithsavings,retirementsavings:this.form.retirementsavings,incomelongevity:this.returnedData.incomelongevity,retirementspending:this.returnedData.retirementspending,retirementsalary:this.form.retirementsalary,nonrannualspending:this.form.nonrannualspending};this.$store.commit("setState",e),this.$router.push("/Results")}}}),P=Y,W=(n("1b7c"),Object(g["a"])(P,$,k,!1,null,"02516abe",null)),H=W.exports,U={name:"Home",components:{Banner:x,RetirementForm:H},data:function(){return{}}},J=U,V=(n("0fc7"),Object(g["a"])(J,b,j,!1,null,"72c3f1ed",null)),K=V.exports,Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"px-4 fade-in"},[n("div",{staticClass:"row"},[e._m(0),n("div",{staticClass:"col-sm-6 text-right"},[n("h6",{staticClass:"retiredate"},[e._v("Target Retirement Date: "+e._s((new Date).getFullYear()+e.yearstilretire))])])]),n("div",{staticClass:"row px-4"},[n("div",{staticClass:"col-sm-12 col-md-6 content-middle"},[n("number-roller")],1),n("div",{staticClass:"col-sm-12 col-md-6"},[n("longevity-results",{staticClass:"chartcontainer"})],1)]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-12 col-md-6 content-middle"},[n("p",{staticClass:"needs-text"},[e._v("Based on your spending of "),n("strong",[e._v("$"+e._s(e.formatCurrency(e.retirementspending/e.retirementyears)))]),e._v(" per year. You will need "),n("strong",[e._v("$"+e._s(e.formatCurrency(e.retirementspending)))]),e._v(" to last the duration of your planned retirement")])]),n("div",{staticClass:"col-sm-12 col-md-6"},[n("needs-results",{staticClass:"chartcontainer"})],1)]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-12 col-md-6 content-middle"},[n("p",{staticClass:"needs-text"},[e._v("You are off to a decent chart with your savings of "),n("strong",[e._v("$"+e._s(e.formatCurrency(e.currentsavings)))]),e._v(" per month. Ideally, the optimal retirement savings is 15% of your current income. For you 15% of $"+e._s(e.formatCurrency(e.annualincome))+" comes out to "),n("strong",[e._v("$"+e._s(e.formatCurrency(.15*e.annualincome)))]),e._v(" a year.")])]),n("div",{staticClass:"col-sm-12 col-md-6"},[n("added-savings-results",{staticClass:"chartcontainer"})],1)])])},Z=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-sm-6 text-left"},[n("h1",{staticClass:"headertext slide-in-left"},[e._v("Retirement Analysis")])])}],G=(n("b680"),n("ac1f"),n("25f0"),n("5319"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("longevity-chart",{attrs:{"chart-data":e.getLongevityChartData,options:e.getSSBenefitsChartOptions,width:500,height:400}})],1)}),X=[],ee=n("1fca"),te=ee["c"].reactiveProp,ne={extends:ee["a"],mixins:[te],props:["options"],mounted:function(){this.renderChart(this.chartData,this.options)}},re=ne,se=Object(g["a"])(re,a,o,!1,null,null,null),ie=se.exports,ae={Name:"Longevity Results",data:function(){return{retireage:0,lifespan:0,retirementspending:0,retirementwithsavings:0,retirementincome:0,retirementyears:0,retirementsalary:0,yearstilretire:0,spending:0,options:{responsive:!0,maintainAspectRatio:!1,tooltipenabled:!1,legend:{display:!1,position:"bottom",labels:{boxWidth:8,fontSize:14}},title:{display:!0,text:"Retirement Portfolio Value Over Time with Spending ",fontSize:"22",fontFamily:"'Brygada 1918', serif",fontStyle:"800",fontColor:"#274c83"},pointLabels:{display:!1},scales:{xAxes:[{id:"default",ticks:{min:0,fontFamily:"'Brygada 1918', serif",fontStyle:"500"}}],yAxes:{ticks:{fontFamily:"'Brygada 1918', serif",fontStyle:"500"}}}}}},components:{LongevityChart:ie},computed:{returnState:function(){return this.$store.getters.getState},getLongevityChartData:function(){for(var e={},t=[],n=[],r=this.retireage,s=this.lifespan,i=this.retirementspending/this.retirementyears,a=0,o=this.retirementsalary*this.retirementyears,l=this.spending*this.retirementyears,c=this.retirementwithsavings-l,u=c+o,m=r;m<=s;m++)n.push(m);for(var d=[u],f=[],g=r;g<s;g++)u-=i,a=u-i,u=a,d.push(a);for(var h=0;h<d.length;h++)d[h]<=0?f.push("#ea7171"):f.push("#71eabb");return t.push({data:d,backgroundColor:f,label:"Retirement Value Over Time"}),e.labels=n,e.datasets=t,e},getSSBenefitsChartOptions:function(){var e=this.options;return e}},mounted:function(){this.retireage=this.$store.getters.getRetireAge,this.lifespan=this.$store.getters.getLifeSpan,this.retirementwithsavings=this.$store.getters.getRetirementWithSavings,this.retirementincome=this.$store.getters.getRetirementIncome,this.retirementspending=this.$store.getters.getRetirementSpending,this.retirementyears=this.$store.getters.getRetirementYears,this.retirementsalary=this.$store.getters.getRetirementSalary,this.spending=this.$store.getters.getNonRetirementSpending,this.yearstilretire=this.$store.getters.getYearsTilRetire}},oe=ae,le=Object(g["a"])(oe,G,X,!1,null,null,null),ce=le.exports,ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("needs-chart",{attrs:{"chart-data":e.getNeedsChartData,options:e.getNeedsChartOptions,width:500,height:400}})],1)},me=[],de=ee["c"].reactiveProp,fe={extends:ee["a"],mixins:[de],props:["options"],mounted:function(){this.renderChart(this.chartData,this.options)}},ge=fe,he=Object(g["a"])(ge,l,c,!1,null,null,null),pe=he.exports,ve={Name:"Longevity Results",data:function(){return{retireage:0,lifespan:0,retirementspending:0,retirementwithsavings:0,retirementincome:0,retirementyears:0,retirementsalary:0,spending:0,options:{responsive:!0,maintainAspectRatio:!1,tooltipenabled:!1,legend:{display:!1},tooltips:{callbacks:{label:function(e){return e.yLabel}}},title:{display:!0,text:"How Much Money Do You Need to Retire?",fontSize:"22",fontFamily:"'Brygada 1918', serif",fontStyle:"800",fontColor:"#274c83"},pointLabels:{display:!1},scales:{xAxes:[{id:"default",ticks:{min:0,fontFamily:"'Brygada 1918', serif",fontStyle:"500",fontSize:"16"}}],yAxes:[{ticks:{beginAtZero:!0,min:0,fontFamily:"'Brygada 1918', serif",fontStyle:"500"}}]}}}},components:{NeedsChart:pe},computed:{returnState:function(){return this.$store.getters.getState},getNeedsChartData:function(){var e={},t=[],n=this.retirementyears*this.spending,r=this.retirementwithsavings-n,s=this.retirementsalary*this.retirementyears,i=r+s,a=this.retirementspending,o=[i,a],l=["#71eabb","#ea7171"];return t.push({data:o,backgroundColor:l,label:""}),e.labels=["How much you have","How much you need"],e.datasets=t,e},getNeedsChartOptions:function(){var e=this.options;return e}},mounted:function(){this.retireage=this.$store.getters.getRetireAge,this.lifespan=this.$store.getters.getLifeSpan,this.retirementwithsavings=this.$store.getters.getRetirementWithSavings,this.retirementincome=this.$store.getters.getRetirementIncome,this.retirementspending=this.$store.getters.getRetirementSpending,this.retirementyears=this.$store.getters.getRetirementYears,this.retirementsalary=this.$store.getters.getRetirementSalary,this.spending=this.$store.getters.getNonRetirementSpending}},ye=ve,be=Object(g["a"])(ye,ue,me,!1,null,null,null),je=be.exports,Ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"retirementyears"},[e.retirementyears>20?n("h4",{staticClass:"mediumtitle tracking-in-expand-fwd"},[e._v("Not Bad!")]):e._e(),e.retirementyears<20?n("h4",{staticClass:"badtitle tracking-in-expand-fwd"},[e._v("You may have some work to do!")]):e._e(),n("p",{staticClass:"toptext"},[e._v("Retiring at "+e._s(e.retireage)+" will get you")]),n("h1",{staticClass:"rollertext"},[n("Roller",{attrs:{text:e.retirementyears,transition:1.45}})],1),n("p",{staticClass:"bottomtext"},[e._v("Years of Retirement!")])])},Se=[],_e=n("92da"),Re=n.n(_e),we={data:function(){return{retirementyears:0,retireage:0}},components:{Roller:Re.a},computed:{returnState:function(){return this.$store.getters.getState}},mounted:function(){this.retirementyears=this.$store.getters.getRetirementYears,this.retireage=this.$store.getters.getRetireAge}},xe=we,$e=(n("5f3e"),Object(g["a"])(xe,Ce,Se,!1,null,"1bfba2c3",null)),ke=$e.exports,Ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("additional-savings",{attrs:{"chart-data":e.getAddedSavingsChartData,options:e.getAddedSavingsChartOptions,width:500,height:400}})],1)},De=[],Oe=ee["c"].reactiveProp,Ie={extends:ee["b"],mixins:[Oe],props:["options"],mounted:function(){this.renderChart(this.chartData,this.options)}},ze=Ie,Ee=Object(g["a"])(ze,u,m,!1,null,null,null),Le=Ee.exports,Ne={Name:"Longevity Results",data:function(){return{currentage:0,currentsavings:0,retireage:0,lifespan:0,annualincome:0,retirementspending:0,retirementwithsavings:0,retirementincome:0,retirementyears:0,retirementsalary:0,retirementsavings:0,spending:0,options:{responsive:!0,maintainAspectRatio:!1,tooltipenabled:!1,legend:{display:!0,position:"bottom",labels:{boxWidth:8,fontSize:14}},title:{display:!0,text:"The Potential of More Savings",fontSize:"22",fontFamily:"'Brygada 1918', serif",fontStyle:"800",fontColor:"#274c83"},pointLabels:{display:!1},scales:{xAxes:[{id:"default",ticks:{min:0,fontFamily:"'Brygada 1918', serif",fontStyle:"500"}}],yAxes:{ticks:{fontFamily:"'Brygada 1918', serif",fontStyle:"500"}}}}}},components:{AdditionalSavings:Le},computed:{AdditionalSavingseturnState:function(){return this.$store.getters.getState},getAddedSavingsChartData:function(){for(var e={},t=[],n=[],r=this.retireage,s=this.retirementsavings,i=.15*this.annualincome,a=this.currentage,o=[s],l=[s],c=a;c<=r;c++)n.push(c);for(var u=a;u<=r;u++)o.push(s*o.length);for(var m=a;m<r;m++)l.push(i*l.length);return console.log(l),t.push({data:o,label:"Current Retirement Savings",borderColor:"#71eabb",fill:!0,backgroundColor:"rgba(113,234,187,0.25)",pointBorderColor:"#2DE199"},{data:l,borderColor:"#19afff",label:"Optimal Retirement Savings",fill:!1}),e.labels=n,e.datasets=t,e},getAddedSavingsChartOptions:function(){var e=this.options;return e}},mounted:function(){this.currentage=this.$store.getters.getCurrentAge,this.currentsavings=this.$store.getters.getCurrentSavings,this.retireage=this.$store.getters.getRetireAge,this.lifespan=this.$store.getters.getLifeSpan,this.annualincome=this.$store.getters.getAnnualIncome,this.retirementincome=this.$store.getters.getRetirementIncome,this.retirementspending=this.$store.getters.getRetirementSpending,this.retirementyears=this.$store.getters.getRetirementYears,this.retirementsalary=this.$store.getters.getRetirementSalary,this.retirementsavings=this.$store.getters.getRetirementSavings,this.spending=this.$store.getters.getNonRetirementSpending}},Fe=Ne,qe=Object(g["a"])(Fe,Ae,De,!1,null,null,null),Be=qe.exports,Te={Name:"Results",components:{LongevityResults:ce,numberRoller:ke,NeedsResults:je,AddedSavingsResults:Be},data:function(){return{retirementyears:0,yearstilretire:0,moneyatretirement:0,moneymade:0,incomelongevity:0,retirementincome:0,retirementwithsavings:0,retirementspending:0,retirementsavings:0,currentage:0,currentsavings:0,annualincome:0}},mounted:function(){this.retirementyears=this.$store.getters.getRetirementYears,this.yearstilretire=this.$store.getters.getYearsTilRetire,this.moneyatretirement=this.$store.getters.getMoneyAtRetirement,this.moneymade=this.$store.getters.getMoneyMade,this.incomelongevity=this.$store.getters.getIncomeLongevity,this.retirementincome=this.$store.getters.getRetirementIncome,this.retirementwithsavings=this.$store.getters.getRetirementWithSavings,this.retirementsavings=this.$store.getters.getRetirementSavings,this.retirementspending=this.$store.getters.getRetirementSpending,this.currentage=this.$store.getters.getCurrentAge,this.currentsavings=this.$store.getters.getCurrentSavings,this.annualincome=this.$store.getters.getAnnualIncome},computed:{returnState:function(){return this.$store.getters.getState}},methods:{formatCurrency:function(e){var t=(e/1).toFixed(0).replace(".",".");return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}},Me=Te,Ye=(n("2463"),Object(g["a"])(Me,Q,Z,!1,null,"d1323392",null)),Pe=Ye.exports;r["default"].use(y["a"]);var We=[{path:"/",name:"Home",component:K},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/Results",name:"Results",component:Pe},{path:"/chart",name:"Chart",component:ie}],He=new y["a"]({routes:We}),Ue=He,Je=n("2f62");r["default"].use(Je["a"]);var Ve=new Je["a"].Store({state:{currentage:0,retireage:0,lifespan:0,annualincome:0,currentsavings:0,retirementyears:0,yearstilretire:0,moneyatretirement:0,moneymade:0,incomelongevity:0,retirementincome:0,retirementsavings:0,retirementwithsavings:0,retirementspending:0,retirementsalary:0,nonrannualspending:0},mutations:{setState:function(e,t){e.currentage=t.currentage,e.retireage=t.retireage,e.currentsavings=t.currentsavings,e.lifespan=t.lifespan,e.annualincome=t.annualincome,e.retirementyears=t.retirementyears,e.yearstilretire=t.yearstilretire,e.moneyatretirement=t.moneyatretirement,e.moneymade=t.moneymade,e.incomelongevity=t.incomelongevity,e.retirementincome=t.retirementincome,e.retirementsavings=t.retirementsavings,e.retirementwithsavings=t.retirementwithsavings,e.retirementspending=t.retirementspending,e.retirementsalary=t.retirementsalary,e.nonrannualspending=t.nonrannualspending},setCurrentAge:function(e,t){e.currentage=t.currenteage},setRetireAge:function(e,t){e.retireage=t.retireage},setLifeSpan:function(e,t){e.lifespan=t.lifespan},setAnnualIncome:function(e,t){e.annualincome=t.annualincome},setCurrentSavings:function(e,t){e.currentsavings=t.currentsavings},setRetirementYears:function(e,t){e.retirementyears=t.retirementyears},setYearsTilRetire:function(e,t){e.yearstilretire=t.yearstilretire},setMoneyAtRetirement:function(e,t){e.moneyatretirement=t.moneyatretirement},setMoneyMade:function(e,t){e.moneymade=t.moneymade},setIncomeLongevity:function(e,t){e.incomelongevity=t.incomelongevity},setRetirementSavings:function(e,t){e.retirementsavings=t.retirementsavings},setRetirementIncome:function(e,t){e.retirementincome=t.retirementincome},setRetirementWithSavings:function(e,t){e.retirementwithsavings=t.retirementwithsavings},setRetirementSpending:function(e,t){e.retirementspending=t.retirementspending},setRetirementSalary:function(e,t){e.retirementsalary=t.retirementsalary},setNonRetirementSpending:function(e,t){e.nonrannualspending=t.nonrannualspending}},actions:{},modules:{},getters:{getState:function(e){return e},getCurrentAge:function(e){return e.currentage},getRetireAge:function(e){return e.retireage},getCurrentSavings:function(e){return e.currentsavings},getLifeSpan:function(e){return e.lifespan},getAnnualIncome:function(e){return e.annualincome},getRetirementYears:function(e){return e.retirementyears},getYearsTilRetire:function(e){return e.yearstilretire},getMoneyAtRetirement:function(e){return e.moneyatretirement},getMoneyMade:function(e){return e.moneymade},getIncomeLongevity:function(e){return e.incomelongevity},getRetirementSavings:function(e){return e.retirementsavings},getRetirementIncome:function(e){return e.retirementincome},getRetirementWithSavings:function(e){return e.retirementwithsavings},getRetirementSpending:function(e){return e.retirementspending},getRetirementSalary:function(e){return e.retirementsalary},getNonRetirementSpending:function(e){return e.nonrannualspending}}}),Ke=n("d413");r["default"].use(Ke["a"]),r["default"].config.productionTip=!1,new r["default"]({router:Ue,store:Ve,render:function(e){return e(v)}}).$mount("#app")},"5f3e":function(e,t,n){"use strict";n("cb7d")},7103:function(e,t,n){},8933:function(e,t,n){},b0a0:function(e,t,n){"use strict";n("452c")},cb7d:function(e,t,n){},e3d4:function(e,t,n){},fae7:function(e,t,n){"use strict";n("ff51")},fb44:function(e,t,n){},fc0f:function(e,t,n){"use strict";n("2900")},ff51:function(e,t,n){}});
//# sourceMappingURL=app.c238bab2.js.map