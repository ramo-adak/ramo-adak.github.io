(this["webpackJsonpnews-front"]=this["webpackJsonpnews-front"]||[]).push([[0],{59:function(e,n,a){e.exports=a.p+"static/media/logo.9ba658e3.png"},61:function(e,n,a){e.exports=a(79)},71:function(e,n,a){},77:function(e,n,a){},79:function(e,n,a){"use strict";a.r(n);var t=a(3),r=a.n(t),l=a(53),i=a.n(l),c=a(54),o=a(20),s=a.n(o),u=a(55),m=a(22);function d(e,n){return e.length>=n?e.substring(0,n-3)+"...":e}function v(e,n,a){return r.a.createElement("div",{title:e,className:"article-header"},r.a.createElement("span",null,r.a.createElement(m.a,{icon:u.a})," ",n),r.a.createElement("span",null,"-"),r.a.createElement("span",{className:"source-header",href:"#"},"@",a))}function f(e,n){return r.a.createElement("div",{className:"article-title"},r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},e))}function p(e){return e?r.a.createElement("div",{className:"news-img-container"},r.a.createElement("img",{className:"news-img",src:e,alt:"placeHolder"})):void 0}var g=r.a.memo((function(e){var n=!e.imgLink,a=new Date(e.dateTime).toString(),t=s()(new Date(a)).format("LLLL"),l=s()(new Date(a)).fromNow();return r.a.createElement("div",{onClick:function(){return window.open(e.link,"_blank")},className:"clickable news-card-flex shadowed"},r.a.createElement("div",{className:"news-card-column alternative"},p(e.imgLink),f(e.title,e.link),r.a.createElement("div",{className:"content-snippet"},d(e.description,n?250:100)),v(t,l,e.sourceName)),r.a.createElement("div",{className:"news-card-row main"},r.a.createElement("div",{className:"news-content"},v(t,l,e.sourceName),f(e.title,e.link),r.a.createElement("div",{className:"content-snippet"},d(e.description,n?500:250))),p(e.imgLink)))})),E=(a(71),a(34)),N=a(18);function w(){var e=Object(c.a)(["query Articles($cursor: String) {articles(first: 10, after: $cursor) {\n    edges {\n      node {\n        id, pubDateTime, title, sourceName, \n        articleUrl,  articleSummary, imageUrl\n      }\n      cursor\n    } \n    pageInfo {startCursor, endCursor, hasNextPage}\n    totalCount\n  }}"]);return w=function(){return e},e}var k=Object(N.gql)(w());var b=function(){var e=Object(N.useQuery)(k),n=e.loading,a=e.error,t=e.data,l=e.fetchMore;return r.a.createElement("div",{className:"news-flex"},function(e){var n;return(null===e||void 0===e||null===(n=e.edges)||void 0===n?void 0:n.map((function(e){return e.node})))||[]}(null===t||void 0===t?void 0:t.articles).map((function(e){return r.a.createElement(g,{key:e.id,title:e.title,description:e.articleSummary,link:e.articleUrl,sourceName:e.sourceName,dateTime:e.pubDateTime,imgLink:e.imageUrl})})),r.a.createElement("div",{className:"load-more clickable "+(a?"red":""),onClick:function(){return function(e){var n;return null===e||void 0===e||null===(n=e.pageInfo)||void 0===n?void 0:n.hasNextPage}(null===t||void 0===t?void 0:t.articles)&&!n?function(){var e,n;l({variables:{cursor:null===t||void 0===t||null===(e=t.articles)||void 0===e||null===(n=e.pageInfo)||void 0===n?void 0:n.endCursor}})}():void 0}},n?r.a.createElement(m.a,{icon:E.c,spin:!0}):a?r.a.createElement(m.a,{icon:E.b}):r.a.createElement(m.a,{icon:E.a})))},h=(a(77),a(59)),L=a.n(h),y=a(1),C=new N.ApolloClient({uri:"https://api.akhbar-live.com/v1/graphql",cache:new N.InMemoryCache({typePolicies:{Query:{fields:{articles:Object(y.H)([])}}}})});var x=function(){return r.a.createElement(N.ApolloProvider,{client:C},r.a.createElement("div",null,r.a.createElement("img",{className:"logo",src:L.a,alt:"Logo"}),r.a.createElement(b,null)))},D=a(60),I=a.n(D);s.a.updateLocale("ar-dz",I.a),i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.899a79bf.chunk.js.map