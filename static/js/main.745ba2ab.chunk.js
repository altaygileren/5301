(this.webpackJsonpblg=this.webpackJsonpblg||[]).push([[0],{160:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(5),r=a.n(c),o=(a(75),a(76),a(14)),s=a(15),i=a(19),m=a(17),u=a(20),p=a(18),E=a(57),d=a.n(E),v=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(p.Parallax,{bgImage:d.a,bgImageAlt:"the cat",strength:800},l.a.createElement("div",{className:"heroImgDiv",style:{height:1e3}},l.a.createElement("div",{className:"heroDiv"},l.a.createElement("p",{className:"heroTxt"},"BLDG 53-01")))))}}]),t}(n.Component),g=a(16),f=a(3),h=a(4),b=a(58),O=a.n(b),y=function(){return l.a.createElement("div",null,l.a.createElement("img",{className:"floorPlansStyle",src:O.a}))},x=function(){return l.a.createElement(h.Container,null,l.a.createElement("div",{className:"welcomeDiv"},l.a.createElement("p",{className:"welcomeTxt"},"welcome to the building of your dreams")))},j=a(59),N=a(39),w=a(60),T=a.n(w),k=a(61),C=a.n(k),D=a(62),P=a.n(D),I=a(63),S=a.n(I),L=a(64),B=a.n(L),W=a(65),A=a(22);function Q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var G=[{src:"".concat(T.a),width:2,height:1},{src:"".concat(C.a),width:2,height:1},{src:"".concat(P.a),width:2,height:1},{src:"".concat(S.a),width:2,height:1},{src:"".concat(B.a),width:2,height:1}];var J=function(){var e=Object(n.useState)(0),t=Object(N.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),o=Object(N.a)(r,2),s=o[0],i=o[1],m=Object(n.useCallback)((function(e,t){t.photo;var a=t.index;c(a),i(!0)}),[]);return l.a.createElement("div",{className:"photoGalleryDiv"},l.a.createElement(W.a,{photos:G,onClick:m}),l.a.createElement(A.b,null,s?l.a.createElement(A.a,{onClose:function(){c(0),i(!1)}},l.a.createElement(A.c,{currentIndex:a,views:G.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Q(a,!0).forEach((function(t){Object(j.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Q(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{srcset:e.srcSet,caption:e.title})}))})):null))},M=function(){return l.a.createElement(h.Container,null,l.a.createElement("div",{className:"contactDiv"},l.a.createElement("p",{className:"divTitle"},"Contact"),l.a.createElement(h.Row,null,l.a.createElement(h.Col,{lg:6,md:6,sm:6,xs:6},l.a.createElement("p",null,l.a.createElement("span",{className:"contactName"},l.a.createElement("strong",null,"Padraig Naughton")),l.a.createElement("br",null),l.a.createElement("span",null,"(914) 643-4920"))),l.a.createElement(h.Col,{lg:6,md:6,sm:6,xs:6},l.a.createElement("p",null,l.a.createElement("span",{className:"contactName"},l.a.createElement("strong",null,"Michael Lombardo")),l.a.createElement("br",null),l.a.createElement("span",null,"(516) 884-5806"))))))},R=function(e){return l.a.createElement("div",null,l.a.createElement(p.Parallax,{bgImage:e.info.img,bgImageAlt:"the cat",strength:800},l.a.createElement("div",{className:"heroImgDiv",style:{height:500}},l.a.createElement("div",{className:"heroDiv"},l.a.createElement("p",{className:"parallaxTxt"},e.info.txt)))))},U=a(68),F=a.n(U),$=a(69),q=a.n($),z={img:"".concat(F.a),txt:"Text will be here"},H={img:"".concat(q.a),txt:"This is more text"},K=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).scrollToTop=a.scrollToTop.bind(Object(g.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){f.Events.scrollEvent.register("begin",(function(){console.log("begin",arguments)})),f.Events.scrollEvent.register("end",(function(){console.log("end",arguments)}))}},{key:"scrollToTop",value:function(){f.animateScroll.scrollToTop()}},{key:"scrollTo",value:function(){f.scroller.scrollTo("scroll-to-element",{duration:800,delay:0,smooth:"easeInOutQuart"})}},{key:"scrollToWithContainer",value:function(){new Promise((function(e,t){f.Events.scrollEvent.register("end",(function(){e(),f.Events.scrollEvent.remove("end")})),f.scroller.scrollTo("scroll-container",{duration:800,delay:0,smooth:"easeInOutQuart"})})).then((function(){return f.scroller.scrollTo("scroll-container-second-element",{duration:800,delay:0,smooth:"easeInOutQuart",containerId:"scroll-container"})}))}},{key:"componentWillUnmount",value:function(){f.Events.scrollEvent.remove("begin"),f.Events.scrollEvent.remove("end")}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-default navbar-fixed-top stickyTop"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"moveDown collapse navbar-collapse",id:"bs-example-navbar-collapse-1"},l.a.createElement(h.Container,null,l.a.createElement(h.Row,null,l.a.createElement(h.Col,{lg:6,sm:4,xs:2}),l.a.createElement(h.Col,{lg:2,sm:2,xs:3},l.a.createElement(f.Link,{activeClass:"active",className:"test1",to:"test1",spy:!0,smooth:!0,duration:500},"Building")),l.a.createElement(h.Col,{lg:2,sm:2,xs:4},l.a.createElement(f.Link,{activeClass:"active",className:"test3",to:"test3",spy:!0,smooth:!0,duration:500},"Floor plans")),l.a.createElement(h.Col,{lg:2,sm:2,xs:3},l.a.createElement(f.Link,{activeClass:"active",className:"test4",to:"test4",spy:!0,smooth:!0,duration:500},"Contact"))))))),l.a.createElement("div",{className:"moveUp"},l.a.createElement(v,null)),l.a.createElement(f.Element,{name:"test1",className:"element"},l.a.createElement(x,null)),l.a.createElement(f.Element,{name:"test2",className:"element"},l.a.createElement(J,null)),l.a.createElement(R,{info:z}),l.a.createElement(f.Element,{name:"test3",className:"element"},l.a.createElement(y,null)),l.a.createElement(R,{info:H}),l.a.createElement(f.Element,{name:"test4",className:"element"},l.a.createElement(M,null)))}}]),t}(l.a.Component);var V=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"stickyTop"},l.a.createElement(K,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},57:function(e,t,a){e.exports=a.p+"static/media/heroimg.a3858106.png"},58:function(e,t,a){e.exports=a.p+"static/media/floorplan.7fce991b.png"},60:function(e,t,a){e.exports=a.p+"static/media/kitchen.44ddcac0.jpg"},61:function(e,t,a){e.exports=a.p+"static/media/floor1.6c6c5ca2.jpg"},62:function(e,t,a){e.exports=a.p+"static/media/floor2.4a2e4944.jpg"},63:function(e,t,a){e.exports=a.p+"static/media/floor3.73408113.jpg"},64:function(e,t,a){e.exports=a.p+"static/media/floor4.248224e5.jpg"},68:function(e,t,a){e.exports=a.p+"static/media/parallaximg2.b53e5e12.png"},69:function(e,t,a){e.exports=a.p+"static/media/parallaximg3.ad287a59.png"},70:function(e,t,a){e.exports=a(160)},75:function(e,t,a){},76:function(e,t,a){}},[[70,1,2]]]);
//# sourceMappingURL=main.745ba2ab.chunk.js.map