(this["webpackJsonprxjs-timers-test"]=this["webpackJsonprxjs-timers-test"]||[]).push([[0],{76:function(e,t,n){e.exports=n(96)},96:function(e,t,n){"use strict";n.r(t);var a,r=n(0),i=n.n(r),c=n(20),o=n(53),l=n(119),u=n(120),s=n(28),m={paused:!0,remainingTime:1e4,activePlayer:null,playerStats:["Dog","Cat","Bird"].map((function(e){return{name:e,played:0}}))},f={changePlayer:function(e,t){var n=t.payload;e.activePlayer!==n?e.activePlayer=n:e.activePlayer=null},subtractTime:function(e){e.remainingTime-=20},addPlaytime:function(e){var t=e.playerStats.find((function(t){return t.name===e.activePlayer}));t&&(t.played+=20)},toggleTimer:function(e){e.paused=!e.paused}},d=Object(s.b)({name:"timer",reducers:f,initialState:m}),g=d.reducer,b=d.actions,p=b.addPlaytime,v=b.changePlayer,y=b.subtractTime,h=b.toggleTimer,j=n(129),O=n(68),w=n(111),E=n(112),P=n(113),T=n(114),k=n(115),x=n(73),S=n(127),C=Object(S.a)((function(e,t){var n=Object(j.a)(20).pipe(Object(w.a)(20)),a=t.value.timer.remainingTime,r=t.value.timer.paused;return e.pipe(Object(x.a)(h),Object(E.a)((function(e){return!e}),r),Object(P.a)((function(e){return e?Object(O.a)():n})),Object(E.a)((function(e,t){return e-t}),a),Object(T.a)((function(e){return e>=0})),Object(k.a)([y(),p()]))})),W=n(56),A=n(32),B=Object(A.flow)(Object(A.map)((function(e){return String(e).padStart(2,"0")})),(function(e){var t=Object(W.a)(e,3),n=t[0],a=t[1],r=t[2];return"".concat(n,":").concat(a,".").concat(r)})),R=function(e){var t=e%1e3/10,n=Math.floor(e/1e3),a=n%60,r=Math.floor(n/60);return B([r,a,t])},U=n(65),D=Object(U.a)((function(e){return e.timer.paused}),(function(e){return e?"Start":"Stop"})),I=(a={remainingTime:function(e){var t=e.timer.remainingTime;return t},activePlayer:function(e){var t=e.timer.activePlayer;return t},playerStats:function(e){var t=e.timer.playerStats;return t},buttonText:D},function(e){return Object(A.mapValues)((function(t){return t(e)}),a)}),J={changePlayer:v,toggleTimer:h},L=Object(o.b)(I,J),M=n(124),N=n(117),z=L((function(e){var t=e.remainingTime,n=e.activePlayer,a=e.playerStats,r=e.buttonText,c=e.changePlayer,o=e.toggleTimer;return i.a.createElement(M.a,{py:4,display:"flex",alignItems:"center",flexDirection:"column",clone:!0},i.a.createElement(N.a,{maxWidth:"md"},i.a.createElement("div",null,i.a.createElement(ce,{remainingTime:t}),i.a.createElement(le,{toggleTimer:o,buttonText:r})),i.a.createElement(fe,{activePlayer:n,changePlayer:c,playerStats:a})))})),V=n(18),$=n(125),q=n(14),F=Object(q.combineReducers)({timer:g}),G=Object(S.a)(C),H=Object($.a)(),K=Object(s.c)({thunk:!1}),Q=Object(s.a)({reducer:F,middleware:[H].concat(Object(V.a)(K))});H.run(G);var X,Y=Q,Z=n(72),_=n(128),ee=Object(A.flow)(Z.a,_.a)({}),te=n(7),ne=n(118),ae=Object(ne.a)({"@global":(X={},Object(te.a)(X,["html","body","#root"],{height:"100%"}),Object(te.a)(X,"body",{margin:0}),Object(te.a)(X,":root",{userSelect:"none"}),X)}),re=function(){return ae(),i.a.createElement(o.a,{store:Y},i.a.createElement(l.a,null,i.a.createElement(u.a,{theme:ee},i.a.createElement(z,null))))},ie=n(121),ce=function(e){var t=e.remainingTime;return i.a.createElement(ie.a,{align:"center",variant:"h1"},R(t))},oe=n(126),le=function(e){var t=e.toggleTimer,n=e.buttonText,a=Object(r.useCallback)((function(){t()}),[t]);return i.a.createElement(M.a,{mt:2,display:"flex",justifyContent:"center"},i.a.createElement(M.a,{width:1,clone:!0},i.a.createElement(oe.a,{variant:"contained",size:"large",color:"primary",onClick:a},n)))},ue=n(122),se=n(123),me=function(e){var t=e.stat,n=e.activePlayer,a=e.changePlayer,c=Object(r.useCallback)((function(){a(t.name)}),[a,t]);return i.a.createElement(ue.a,{item:!0},i.a.createElement(M.a,{px:4,py:2,style:{cursor:"pointer"},border:n===t.name?"2px solid #3f51b5":"2px solid transparent",clone:!0},i.a.createElement(se.a,{onClick:c},i.a.createElement(ie.a,{variant:"h3",gutterBottom:!0},t.name),i.a.createElement(ie.a,{variant:"h4"},R(t.played)))))},fe=function(e){var t=e.activePlayer,n=e.playerStats,a=e.changePlayer;return i.a.createElement(M.a,{mt:4},i.a.createElement(ue.a,{justify:"center",container:!0,spacing:4},n.map((function(e){return i.a.createElement(me,{key:e.name,stat:e,activePlayer:t,changePlayer:a})}))))},de=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ge(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}Object(c.render)(i.a.createElement(re,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/rxjs-timers-test",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/rxjs-timers-test","/service-worker.js");de?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ge(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ge(t,e)}))}}()}},[[76,1,2]]]);
//# sourceMappingURL=main.584c6b66.chunk.js.map