(this["webpackJsonpdoubutsu-shogi"]=this["webpackJsonpdoubutsu-shogi"]||[]).push([[0],{26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var i=n(2),c=n(1),r=n.n(c),o=n(17),a=n.n(o),s=(n(26),n(31)),d=n(19),u=n(9),l=n(32),h="piece",g=function(e){var t=e.x,n=e.y,c=e.children,r=Object(l.a)({accept:h,drop:function(){console.error(t,n)},collect:function(e){return{}}}),o=Object(u.a)(r,2)[1];return Object(i.jsx)("div",{ref:o,style:{position:"relative",width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:c})},b=n.p+"static/media/0FU.cfa8f976.svg",j=n(33);var f=function(e){e.id,e.left,e.top,e.hideSourceOnDrag,e.children;var t=Object(j.a)({item:{type:h},collect:function(e){return{isDragging:!!e.isDragging()}}}),n=Object(u.a)(t,2),c=n[0].isDragging,r=n[1],o=c?0:.999;return Object(i.jsx)("div",{ref:r,style:{width:"80%",backgroundColor:"#fff",borderRadius:"20px",opacity:o},children:Object(i.jsx)("img",{src:b,alt:"piece",style:{width:"100%"}})})},p=n.p+"static/media/doubutsuboard.7e6d9701.svg",x={width:"100%",height:"100%",display:"flex",flexWrap:"wrap",backgroundImage:"url(".concat(p,")"),backgroundRepeat:"no-repeat",backgroundSize:"600px 800px",backgroundPosition:"center"};var v=function(e){function t(e){var t=e%3,c=Math.floor(e/3);return Object(i.jsx)("div",{style:{width:(1/3*100).toFixed(3)+"%",height:25..toFixed(3)+"%"},children:Object(i.jsx)(g,{x:t,y:c,children:n(t,c)})},e)}function n(e,t){return 1===e&&2===t?Object(i.jsx)(f,{}):null}for(var c=[],r=0;r<12;r+=1)c.push(t(r));return Object(i.jsx)("div",{className:"Board",style:x,children:c})};n(28);var O=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(s.a,{backend:d.a,children:Object(i.jsx)("div",{style:{width:520,height:800},children:Object(i.jsx)(v,{})})})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),i(e),c(e),r(e),o(e)}))};a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root")),y()}},[[29,1,2]]]);
//# sourceMappingURL=main.7265ff17.chunk.js.map