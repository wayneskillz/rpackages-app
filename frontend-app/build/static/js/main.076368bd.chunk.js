(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,a,t){e.exports=t(70)},41:function(e,a,t){},45:function(e,a,t){},70:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),i=t(8),c=t.n(i),r=(t(41),t(42),t(43),t(44),t(45),t(24)),l=t(25),s=t(34),u=t(26),d=t(35),h=t(27),f=t.n(h),m=t(33),g=function(e){var a={columns:[{label:"SN",field:"id",sort:"asc"},{label:"Name",field:"name",sort:"asc",width:150},{label:"Version",field:"version",sort:"asc",width:270},{label:"Date/Publication",field:"date_of_publication",sort:"asc",width:200},{label:"Title",field:"title",sort:"asc",width:100},{label:"Description",field:"description",sort:"asc",width:150},{label:"Author",field:"author",sort:"asc",width:100},{label:"Maintainer",field:"maintainer"}],rows:e.rpackages};return o.a.createElement(m.a,{striped:!0,data:a,sortable:!1,responsive:!0,searchLabel:"Search Package",infoLabel:["Showing","to","of","packages"]})},p=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).state={packages:[]},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"getPackages",value:function(){var e=this;f.a.get("/api/v1/packages").then(function(a){console.log(a.data),e.setState({packages:a.data})}).catch(function(e){return console.log(e)})}},{key:"componentDidMount",value:function(){this.getPackages()}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(g,{rpackages:this.state.packages}))}}]),a}(n.Component);var b=function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"header"},o.a.createElement("h1",null," R Package List ")),o.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.076368bd.chunk.js.map