(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{E5P1:function(t,e,n){t.exports={container:"_14IbC _2sCnE PrOBO _1CR66"}},zahQ:function(t,e,n){"use strict";n.r(e);var r=n("bnCs"),o=n("q1tI"),i=n.n(o),a=n("JlLI"),c=n("EYcW"),u=n("n53v"),l=n("/MKj"),f=n("Ty5D"),p=n("i6mb"),s=n("Sh83"),h=n("ZfPj"),b=n("d8i8"),d=n("TRoG"),y=n("2Fwo"),O=n("IQRp"),v=n("4YUS"),g=n("IVTL"),j=n("0K2+"),m=n("peh1"),P=n("rVA8"),D=n("NOoT"),S=n("x5qg"),w=function(t){return t},E=function(){var t=Object(S.a)(),e=Object(P.a)();return Object(m.createSelector)((function(t,n){var r=n.routeData;return e(r)}),(function(e,n){var r=n.locationState;return t(e,r)}),(function(t,e){return c.r(t,e,(function(t,e){var n=e.photoIds;return Object(r.pipeWith)(n,Object(D.c)(t),c.k,(function(t){return n.length-(t+1)}))}))}))};function I(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var A=Object(g.a)()({shouldDisableInfiniteScroll:!1}),F=function(t){var e=t.pipe(O.E((function(t){var e=I(t,7);return{shouldDisableInfiniteScroll:e[0],isDoneFetching:e[1],fetchDataParams:e[2],fetchDataAndBuildActions:e[3],dispatch:e[4],history:e[5],paginationRemainingOption:e[6]}}))),n=O.C(window,"scroll").pipe(O.v(s.f)),o=e.pipe(O.E((function(t){return t.paginationRemainingOption})),O.t()).pipe(O.E(c.d((function(t){return t<=6}))),O.t(),O.v(w)),i=e.pipe(O.E((function(t){return t.shouldDisableInfiniteScroll})),O.t()),a=e.pipe(O.Q(O.G(O.l([n,i]).pipe(O.v((function(t){var e=I(t,2);e[0];return!1===e[1]}))),o)),O.s((function(t){return t.fetchDataParams.page})),O.v((function(t){return!1===t.isDoneFetching})));return e.pipe(O.Q(a),O.I((function(t){var e=t.fetchDataParams,n=t.fetchDataAndBuildActions,o=t.dispatch,i=t.history,a=n(e).pipe(O.O(3));return Object(r.pipeWith)(a,O.Z((function(t){Object(l.b)((function(){t.forEach(o)}))}),Object(h.b)(o,i)))})),O.J(O.d))},C=Object(r.pipeWith)((function(t){var e=Object(r.pipeWith)(Object(o.useContext)(j.e),v.a),n=Object(r.pipeWith)(e.pathname,d.n,c.k),i=Object(b.g)(e),a=Object(o.useMemo)(E,[]),u=Object(l.f)((function(t){return a(t,{routeData:n,locationState:i})}));return Object(p.a)(F,void 0,[t.shouldDisableInfiniteScroll,t.isDoneFetching,t.fetchDataParams,t.fetchDataAndBuildActions,t.dispatch,t.history,u]),t.children}),Object(l.c)(),f.h,(function(t){return Object(y.a)(t,A)})),_=n("E5P1"),B=n.n(_);function T(t){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function W(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function k(t,e){return!e||"object"!==T(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function R(t){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function x(t,e){return(x=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var N=function(t){return i.a.createElement("div",{className:B.a.container},t)},J=function(t){var e=t.lastPageFetched,n=t.perPage;return e>=function(t){var e=t.total,n=t.perPage;return Math.ceil(e/n)}({total:t.total,perPage:n})},Q=function(t){return{page:t.lastPageFetched+1,perPage:t.perPage,orderBy:t.orderBy}},M=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=k(this,R(e).apply(this,arguments))).renderFeed=function(e,n){var r=t.props,o=r.fetchDataAndBuildActions,a=r.shouldDisableInfiniteScroll,c=r.renderItems,l=r.getScrollFooterEl,f=Q(e),p=J(Object(u.f)(e,"lastPageFetched","perPage","total"));return i.a.createElement(C,{fetchDataAndBuildActions:o,fetchDataParams:f,isDoneFetching:p,shouldDisableInfiniteScroll:a},N(i.a.createElement(i.a.Fragment,null,c(n),!p&&l())))},t.renderFeedOrNoContent=function(e,n){return a.e(n)?t.props.getNoContentEl():t.renderFeed(e,n)},t.renderPlaceholder=Object(r.pipe)(t.props.getPlaceholderEl,N),t}var n,o,l;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&x(t,e)}(e,t),n=e,(o=[{key:"render",value:function(){var t=this.props,e=t.feedOption,n=t.feedItemsOption;return Object(r.pipeWith)(c.r(e,n,this.renderFeedOrNoContent),c.l(this.renderPlaceholder))}}])&&W(n.prototype,o),l&&W(n,l),e}(o.Component);n.d(e,"default",(function(){return M}))}}]);
//# sourceMappingURL=feed.ed0de.js.map