(this["webpackJsonpnews-front"]=this["webpackJsonpnews-front"]||[]).push([[0],{124:function(e,a,t){e.exports=t(141)},129:function(e,a,t){},139:function(e,a,t){},141:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(17),i=t.n(l),o=t(111),c=t(45),s=t(32),m=(t(129),t(76)),u=t(172),d=t(174),p=t(79),g=t(169),b=t(173),v=t(175),h=t(176),f={politics:{color:m.a[700],highlightColor:m.a[50],title:"politics",displayName:"\u0633\u064a\u0627\u0633\u0629",icon:r.a.createElement(g.a,null)},sport:{color:u.a[700],highlightColor:u.a[50],title:"sport",displayName:"\u0631\u064a\u0627\u0636\u0629",icon:r.a.createElement(b.a,null)},economy:{color:d.a[700],highlightColor:d.a[50],title:"economy",displayName:"\u0625\u0642\u062a\u0635\u0627\u062f",icon:r.a.createElement(v.a,null)},latest:{color:p.a[700],highlightColor:p.a[50],title:"latest",displayName:"\u0622\u062e\u0631 \u0627\u0644\u0623\u062e\u0628\u0627\u0631",icon:r.a.createElement(h.a,null)},list:[],otherList:["latest"]},E=t(177),y=t(183),N=t(184),w=t(57),x=t(185),k=t(186),C=t(42),j=t.n(C);var O={toSnippet:function(e,a){return e&&e.length>=a?e.substring(0,a-3)+"...":e},openInNewTab:function(e,a){var t=window.open(e,"_blank","noopener,noreferrer");t&&(t.opener=null),a&&a.stopPropagation()}},S=t(178),I=t(179),T=t(180),L=t(181),P=t(182),R=t(5),D=Object(E.a)((function(e){return{root:{display:"flex",width:"100%",maxHeight:"235px",minHeight:"235px"},sourceTime:{paddingRight:"1em"},sourceLink:{color:e.typography.subtitle1.color},details:{display:"flex",flexDirection:"column",width:"100%",paddingTop:"0.75em"},content:{paddingTop:0,flex:"1 0 auto"},cover:{maxWidth:300},verticalBar:{minWidth:"0.3em",height:"4em",marginTop:"1.5em"},cardArea:{display:"inherit",alignItems:"stretch"}}}));function B(e){var a,t=D(),n=!e.imageUrl,l=new Date(e.pubDateTime).toString(),i=j()(new Date(l)).format("LLLL"),o=j()(new Date(l)).fromNow();return r.a.createElement(S.a,{variant:"outlined",square:"true",className:Object(R.a)(t.root,e.className)},r.a.createElement("div",{className:t.verticalBar,style:{backgroundColor:null===(a=f[e.category||f.latest.title])||void 0===a?void 0:a.color}}),r.a.createElement(I.a,{className:t.cardArea,onClick:function(a){return O.openInNewTab(e.articleUrl,a)}},r.a.createElement("div",{className:t.details},r.a.createElement("div",{className:t.sourceTime},r.a.createElement(T.a,{className:Object(R.a)(t.sourceLink,"clickable"),variant:"subtitle1",display:"inline",onClick:function(a){return O.openInNewTab(e.sourceHomeUrl,a)}},e.sourceTitle),r.a.createElement(w.a,{variant:"subtitle1",display:"inline"},"\xa0-"),r.a.createElement(w.a,{variant:"subtitle1",display:"inline",title:i}," ",o)),r.a.createElement(L.a,{className:t.content},r.a.createElement(w.a,{component:"h5",variant:"h5"},e.title),r.a.createElement(w.a,{variant:"subtitle1",color:"textSecondary"},e.articleSummary?O.toSnippet(e.articleSummary,400):""))),n?void 0:r.a.createElement(P.a,{onClick:function(a){return O.openInNewTab(e.articleUrl,a)},className:Object(R.a)(t.cover,"clickable"),image:e.imageUrl,alt:e.title,component:"img",referrerPolicy:"no-referrer"})))}var U=Object(E.a)((function(e){return{flexRow:{display:"flex",flexDirection:"row",padding:0},sourceTime:{paddingTop:"0.5em"},sourceLink:{color:e.typography.subtitle1.color},verticalBar:{minWidth:"0.3em",maxWidth:"0.3em",height:"4em",marginTop:"1.5em"},content:{padding:"1em"}}}));function z(e){var a,t=U(),n=new Date(e.pubDateTime).toString(),l=j()(new Date(n)).format("LLLL"),i=j()(new Date(n)).fromNow();return r.a.createElement(S.a,{className:Object(R.a)(t.root,e.className)},r.a.createElement(I.a,{onClick:function(a){return O.openInNewTab(e.articleUrl,a)}},e.imageUrl?r.a.createElement(P.a,{component:"img",alt:e.title,height:"250",image:e.imageUrl,title:e.title,referrerPolicy:"no-referrer"}):void 0,r.a.createElement(L.a,{className:t.flexRow},r.a.createElement("div",{className:t.verticalBar,style:{backgroundColor:null===(a=f[e.category||f.latest.title])||void 0===a?void 0:a.color}}),r.a.createElement("div",{className:t.content},r.a.createElement(w.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.title),r.a.createElement(w.a,{variant:"subtitle1",color:"textSecondary",component:"p"},O.toSnippet(e.articleSummary,250)),r.a.createElement("div",{className:t.sourceTime},r.a.createElement(T.a,{className:Object(R.a)("clickable",t.sourceLink),variant:"subtitle1",display:"inline",onClick:function(a){return O.openInNewTab(e.sourceHomeUrl,a)}},e.sourceTitle),r.a.createElement(w.a,{variant:"subtitle1",display:"inline"},"\xa0-"),r.a.createElement(w.a,{variant:"subtitle1",display:"inline",title:l}," ",i))))))}var A=Object(E.a)((function(e){return{root:{width:"95%",margin:"auto"},categoryTitle:{margin:"0.25em"},main:Object(s.a)({},e.breakpoints.down("xs"),{display:"none"}),alternative:Object(s.a)({display:"none"},e.breakpoints.down("xs"),{display:"revert"}),newsCardsContainer:{marginBottom:"2em"},verticalBar:{minWidth:"0.3em",marginTop:"1.2em",height:"4em"}}}));var H=function(e){var a=e.loading,t=e.error,n=e.articles,l=e.loadMore,i=e.hasNextPage,o=e.category,c=A();return r.a.createElement("div",{className:c.root},function(e,a,t){var n,l;return r.a.createElement("div",{className:t.newsCardsContainer},r.a.createElement("div",{style:{display:"flex",direction:"row"}},r.a.createElement("div",{className:t.verticalBar,style:{backgroundColor:null===(n=f[e])||void 0===n?void 0:n.color}}),r.a.createElement(w.a,{className:t.categoryTitle,variant:"h2",component:"div"},null===(l=f[e])||void 0===l?void 0:l.displayName)),r.a.createElement(y.a,{container:!0,className:t.newsCards,spacing:2},a.map((function(e){return r.a.createElement(y.a,{key:e.id,className:t.newsCard,item:!0,xs:12,md:12,lg:10},r.a.createElement(B,Object.assign({className:t.main},e)),r.a.createElement(z,Object.assign({className:t.alternative},e)))}))))}(o,n,c),r.a.createElement(y.a,{container:!0,justify:"center"},a?r.a.createElement(N.a,null):r.a.createElement("div",{className:"load-more clickable",onClick:function(){return i&&!a?l():void 0}},t?r.a.createElement(x.a,{fontSize:"large",color:"secondary"}):r.a.createElement(k.a,{color:"primary",fontSize:"large"}))))},M=t(46),W=[{name:"aps-ar",title:"\u0648\u0643\u0627\u0644\u0629 \u0627\u0644\u0627\u0646\u0628\u0627\u0621 \u0627\u0644\u062c\u0632\u0627\u0626\u0631\u064a\u0629",enabled:!0},{name:"entv",title:"\u0627\u0644\u062a\u0644\u0641\u0632\u064a\u0648\u0646 \u0627\u0644\u062c\u0632\u0627\u0626\u0631\u064a",enabled:!0},{name:"echoroukonline",title:"\u0627\u0644\u0634\u0631\u0648\u0642",enabled:!0},{name:"ennaharonline",title:"\u0627\u0644\u0646\u0647\u0627\u0631",enabled:!0},{name:"elbilad",title:"\u0627\u0644\u0628\u0644\u0627\u062f",enabled:!0},{name:"elkhabar",title:"\u0627\u0644\u062e\u0628\u0631",enabled:!0},{name:"akhersaa-dz",title:"\u0622\u062e\u0631 \u0633\u0627\u0639\u0629",enabled:!0},{name:"echaab",title:"\u0627\u0644\u0634\u0639\u0628 \u0623\u0648\u0646\u0644\u0627\u064a\u0646",enabled:!0},{name:"elhiwardz",title:"\u0627\u0644\u062d\u0648\u0627\u0631",enabled:!0},{name:"elitihadonline",title:"\u0627\u0644\u0627\u062a\u062d\u0627\u062f",enabled:!0},{name:"essalamonline",title:"\u0627\u0644\u0633\u0644\u0627\u0645 \u0627\u0644\u064a\u0648\u0645",enabled:!0},{name:"eldjazaironline",title:"\u062c\u0631\u064a\u062f\u0629 \u0627\u0644\u062c\u0632\u0627\u0626\u0631",enabled:!0},{name:"elmassar-elarabi",title:"\u0627\u0644\u0645\u0633\u0627\u0631 \u0627\u0644\u0639\u0631\u0628\u064a",enabled:!0},{name:"elwatani",title:"\u0627\u0644\u0648\u0637\u0646\u064a",enabled:!0},{name:"elhayatalarabiya",title:"\u0627\u0644\u062d\u064a\u0627\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629",enabled:!0},{name:"elwassat",title:"\u0627\u0644\u0648\u0633\u0637",enabled:!0},{name:"elmaouid",title:"\u0627\u0644\u0645\u0648\u0639\u062f \u0627\u0644\u064a\u0648\u0645\u064a",enabled:!0},{name:"edd-dz",title:"\u0627\u0644\u062c\u0632\u0627\u0626\u0631 \u062f\u0627\u064a\u0644\u064a",enabled:!0},{name:"awras",title:"\u0623\u0648\u0631\u0627\u0633",enabled:!0}],q=function(e){var a={};e.forEach((function(e){a[e.name]=e.enabled}));try{var t=JSON.parse(localStorage.getItem("sources"));if(t)for(var n=0,r=Object.entries(a);n<r.length;n++){var l=Object(M.a)(r[n],2),i=l[0];l[1];void 0!==t[i]&&(a[i]=t[i])}}catch(o){}return a}(W),J=r.a.createContext(q),$=function(e){var a=e.children,t=r.a.useState(q),n=Object(M.a)(t,2),l=n[0],i=n[1],o=function(e){localStorage.setItem("sources",JSON.stringify(e)),i(e)},c=r.a.useMemo((function(){return{sourcesState:l,setSourcesStateAndSyncLocal:o}}),[l]);return r.a.createElement(J.Provider,{value:c},a)};function F(){var e=Object(o.a)(["query Articles($cursor: String, $sources: [String]) {articles(first: 10, after: $cursor, sources: $sources) {\n    edges {\n      node {\n        id, pubDateTime, title, sourceTitle, sourceHomeUrl,\n        articleUrl,  articleSummary, imageUrl\n      }\n      cursor\n    } \n    pageInfo {startCursor, endCursor, hasNextPage}\n    totalCount\n  }}"]);return F=function(){return e},e}var Q=Object(c.gql)(F());function G(e){var a;return(null===e||void 0===e||null===(a=e.edges)||void 0===a?void 0:a.map((function(e){return e.node})))||[]}function _(e){var a;return null===e||void 0===e||null===(a=e.pageInfo)||void 0===a?void 0:a.hasNextPage}var K=function(e){var a=r.a.useContext(J),t=a.sourcesState,l=(a.setSourcesState,Object.keys(t)),i=l.filter((function(e){return t[e]}));i.length===l.length&&(i=void 0);var o=Object(c.useQuery)(Q,{variables:{sources:i}}),s=o.loading,m=o.error,u=o.data,d=o.fetchMore,p=o.refetch;return Object(n.useEffect)((function(){p()}),[t]),r.a.createElement(H,{loading:s,error:m,articles:G(null===u||void 0===u?void 0:u.articles),loadMore:function(){var e,a;d({variables:{cursor:null===u||void 0===u||null===(e=u.articles)||void 0===e||null===(a=e.pageInfo)||void 0===a?void 0:a.endCursor,sources:i}})},hasNextPage:_(null===u||void 0===u?void 0:u.articles),category:e.category})},V=(t(139),t(119)),X=t(77),Y=t(187),Z=t(78),ee=Object(V.a)({direction:"rtl",palette:{text:{secondary:X.a[900],light:Y.a[100]},primary:{main:Y.a[500],secondary:Y.a[900]},secondary:{main:Z.a[500],secondary:Y.a[900]}},typography:{subtitle1:{color:X.a[500]}},link:{subtitle1:{color:X.a[500]}}}),ae=t(3),te=t(206),ne=t(16),re=t(197),le=t(210),ie=t(198),oe=t(200),ce=t(205),se=t(208),me=t(207),ue=t(188),de=t(189),pe=t(190),ge=t(191),be=t(25),ve=Object(E.a)((function(e){return{appBar:{zIndex:e.zIndex.drawer+1,backgroundColor:"white"},menuButton:Object(s.a)({marginRight:e.spacing(1),marginLeft:e.spacing(1),color:"black"},e.breakpoints.up("md"),{display:"none"}),toolbar:e.mixins.toolbar}}));var he=function(e){var a=Object(be.a)(),t=ve();return r.a.createElement(ue.a,{elevation:"2",position:"fixed",className:t.appBar},r.a.createElement(de.a,{style:{padding:0}},r.a.createElement(pe.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:e.handleDrawerToggle,className:t.menuButton},r.a.createElement(ge.a,null)),r.a.createElement("img",{className:t.toolbar,src:"logo.png",alt:"Logo",style:{maxHeight:64,marginRight:a.spacing(2)},onClick:function(){return e.gotoRoute("")}})))},fe=t(80),Ee=t(192),ye=t(209),Ne=t(193),we=t(196),xe=t(203),ke=t(194),Ce=t(195),je=t(199),Oe=t(201),Se=t(202),Ie=t(204),Te=Object(E.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},listItemNested:{paddingRight:e.spacing(2),borderRadius:e.spacing(4)+"px 0px 0px "+e.spacing(4)+"px"},formControlLabel:{paddingRight:e.spacing(3),marginLeft:e.spacing(1),flex:1,textAlign:"right",justifyContent:"space-between"},listItem:{textAlign:"right",borderRadius:e.spacing(4)+"px 0px 0px "+e.spacing(4)+"px"},switch:{transform:"rotate(180deg)"},buttonsFlex:{display:"flex",flexDirection:"row",marginRight:e.spacing(1)},button:{margin:e.spacing(1)},buttonIcon:{marginLeft:e.spacing(1),marginRight:-e.spacing(2)}}}));var Le=function(){var e=r.a.useContext(J),a=e.sourcesState,t=e.setSourcesStateAndSyncLocal,n=r.a.useState(a),l=Object(M.a)(n,2),i=l[0],o=l[1],c=Te(),m=r.a.useState(!1),u=Object(M.a)(m,2),d=u[0],p=u[1],g=function(e){o(Object(fe.a)(Object(fe.a)({},i),{},Object(s.a)({},e.target.name,e.target.checked)))},b=W.map((function(e){return i[e.name]})).reduce((function(e,a){return e&&a}),!0),v=function(e){var a=i;W.map((function(t){a[t.name]=e})),o(Object(fe.a)({},a))},h=W.map((function(e){return r.a.createElement(le.a,{button:!0,className:c.listItemNested,key:e.name},r.a.createElement(Ee.a,{className:c.formControlLabel,labelPlacement:"start",label:e.title,control:r.a.createElement(ye.a,{className:c.switch,size:"small",checked:i[e.name],onChange:g,name:e.name})}))})),f=b?r.a.createElement(Ne.a,{className:c.button,variant:"outlined",color:"secondary",onClick:function(e){return v(!1)},startIcon:r.a.createElement(ke.a,{className:c.buttonIcon})},"\u0645\u062d\u0648 \u0627\u0644\u0643\u0644"):r.a.createElement(Ne.a,{className:c.button,variant:"outlined",color:"secondary",onClick:function(e){return v(!0)},startIcon:r.a.createElement(Ce.a,{className:c.buttonIcon})},"\u0627\u0644\u0643\u0644");return r.a.createElement(we.a,null,r.a.createElement(re.a,null,r.a.createElement(le.a,{button:!0,onClick:function(){p(!d)},className:c.listItem},r.a.createElement(ie.a,null,r.a.createElement(je.a,null)),r.a.createElement(oe.a,{primary:"\u0627\u0644\u0645\u0635\u0627\u062f\u0631"}),d?r.a.createElement(Oe.a,null):r.a.createElement(Se.a,null)),r.a.createElement(xe.a,{in:d,timeout:"auto",unmountOnExit:!0},r.a.createElement("div",{className:c.buttonsFlex},r.a.createElement(Ne.a,{className:c.button,variant:"contained",color:"secondary",onClick:function(e){return t(i)},startIcon:r.a.createElement(Ie.a,{className:c.buttonIcon})},"\u062d\u0641\u0638"),f),h)))},Pe=Object(E.a)((function(e){return{root:{display:"flex"},drawer:Object(s.a)({},e.breakpoints.up("md"),{width:240,flexShrink:0}),menuButton:Object(s.a)({marginRight:e.spacing(1),marginLeft:e.spacing(1),color:"black"},e.breakpoints.up("md"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:240,border:"unset"},content:{width:"100%",flexGrow:1,paddingTop:e.spacing(1)},listItem:{textAlign:"right",borderRadius:e.spacing(4)+"px 0px 0px "+e.spacing(4)+"px"},divider:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},highlitedItem:{fontWeight:"600"},nonHighlightedItem:{fontWeight:"100"}}}));var Re=function(e){var a,t,n=e.window,l=e.match,i=e.category||(null===(a=f[null===l||void 0===l||null===(t=l.params)||void 0===t?void 0:t.category])||void 0===a?void 0:a.title)||f.latest.title,o=Pe(),c=r.a.useState(!1),s=Object(M.a)(c,2),m=s[0],u=s[1],d=Object(ne.f)(),p=function(){u(!m)},g=function(e){m&&p(),d.push("/".concat(e))},b=function(e){return r.a.createElement(re.a,null,e.map((function(e){return r.a.createElement(le.a,{button:!0,key:f[e].displayName,className:o.listItem,style:e===i?{backgroundColor:f[e].highlightColor}:{},onClick:function(){return g(e)}},r.a.createElement(ie.a,{style:e===i?{color:f[e].color}:{}},f[e].icon),r.a.createElement(oe.a,{primaryTypographyProps:{className:e===i?o.highlitedItem:o.nonHighlightedItem},style:e===i?{color:f[e].color}:{},primary:f[e].displayName}))})))},v=r.a.createElement("div",null,r.a.createElement("div",{className:o.toolbar}),r.a.createElement(ce.a,{className:o.divider}),b(f.otherList),r.a.createElement(ce.a,{className:o.divider}),r.a.createElement(re.a,null,b(f.list)),r.a.createElement(Le,null)),h=void 0!==n?function(){return n().document.body}:void 0;return r.a.createElement("div",{className:o.root},r.a.createElement(he,{handleDrawerToggle:p,gotoRoute:g}),r.a.createElement("nav",{className:o.drawer,"aria-label":"mailbox folders"},r.a.createElement(se.a,{mdUp:!0,implementation:"css"},r.a.createElement(me.a,{container:h,variant:"temporary",open:m,onClose:p,classes:{paper:o.drawerPaper},ModalProps:{keepMounted:!0}},v)),r.a.createElement(se.a,{smDown:!0,className:"test",implementation:"css"},r.a.createElement(me.a,{classes:{paper:o.drawerPaper},variant:"permanent",open:!0},v))),r.a.createElement("main",{className:o.content},r.a.createElement("div",{className:o.toolbar}),e.children))},De=t(86),Be=new c.ApolloClient({uri:"https://api.akhbar-live.com/v1/graphql",cache:new c.InMemoryCache({typePolicies:{Query:{fields:{articles:Object(ae.H)([])}}}})});function Ue(e){return r.a.createElement(Re,{category:e},r.a.createElement(K,{category:e}))}var ze=function(){return r.a.createElement($,null,r.a.createElement(te.a,{theme:ee},r.a.createElement(c.ApolloProvider,{client:Be},r.a.createElement(De.a,null,r.a.createElement("div",null,r.a.createElement(ne.c,null,r.a.createElement(ne.a,{path:"/:category",render:function(e){var a,t;return Ue((null===e||void 0===e||null===(a=e.match)||void 0===a||null===(t=a.params)||void 0===t?void 0:t.category)||"latest")}}),r.a.createElement(ne.a,{path:"/",render:function(e){return Ue(f.latest.title)}})))))))},Ae=t(118),He=t.n(Ae);j.a.updateLocale("ar-dz",He.a),i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ze,null)),document.getElementById("root"))}},[[124,1,2]]]);