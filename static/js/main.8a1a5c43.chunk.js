(this["webpackJsonprxjs-timers-test"]=this["webpackJsonprxjs-timers-test"]||[]).push([[0],{77:function(e,t,n){e.exports=n(97)},97:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(20),c=n(22),o=n(120),l=n(121),u=n(18),s=n(39),m=n(127),d=n(14),f={done:!1,paused:!0,remainingTime:1e4,activePlayer:null,playerStats:["Dog","Cat","Bird"].map((function(e){return{name:e,played:0}}))},b={changePlayer:function(e,t){var n=t.payload;e.activePlayer!==n?e.activePlayer=n:e.activePlayer=null},subtractTime:function(e){e.remainingTime-=20},addPlaytime:function(e){var t=e.playerStats.find((function(t){return t.name===e.activePlayer}));t&&(t.played+=20)},toggleTimer:function(e){e.paused=!e.paused},setDone:function(e){e.done=!0},resetTimer:function(){return f}},p=Object(s.b)({name:"timer",reducers:b,initialState:f}),v=p.reducer,g=p.actions,h=g.addPlaytime,y=g.changePlayer,j=g.subtractTime,O=g.toggleTimer,w=g.setDone,E=g.resetTimer,P=n(132),T=n(51),k=n(112),S=n(113),x=n(114),C=n(115),W=n(116),A=n(129),R=n(117),B=n(74),D=n(131),U=Object(D.a)((function(e,t){var n=Object(P.a)(20).pipe(Object(k.a)(20)),a=t.value.timer.remainingTime,r=t.value.timer.paused;return e.pipe(Object(B.a)(O),Object(S.a)((function(e){return!e}),r),Object(x.a)((function(e){return e?Object(T.a)():n})),Object(S.a)((function(e,t){return e-t}),a),Object(C.a)((function(e){return e>=0})),Object(W.a)([j(),h()]),Object(A.a)(w()),Object(R.a)())})),I=Object(d.combineReducers)({timer:v}),J=Object(D.a)(U),L=Object(m.a)(),M=Object(s.c)({thunk:!1}),N=Object(s.a)({reducer:I,middleware:[L].concat(Object(u.a)(M))});L.run(J);var z,V=N,$=n(73),q=n(130),F=n(33),G=Object(F.flow)($.a,q.a)({}),H=n(7),K=n(119),Q=Object(K.a)({"@global":(z={},Object(H.a)(z,["html","body","#root"],{height:"100%"}),Object(H.a)(z,"body",{margin:0}),Object(H.a)(z,":root",{userSelect:"none"}),z)}),X=function(){return Q(),r.a.createElement(c.a,{store:V},r.a.createElement(o.a,null,r.a.createElement(l.a,{theme:G},r.a.createElement(_,null))))},Y=n(126),Z=n(122),_=Object(a.memo)((function(){return r.a.createElement(Y.a,{py:4,display:"flex",alignItems:"center",flexDirection:"column",clone:!0},r.a.createElement(Z.a,{maxWidth:"md"},r.a.createElement("div",null,r.a.createElement(ce,null),r.a.createElement(se,null)),r.a.createElement(ge,null)))})),ee=n(123),te=n(58),ne=Object(F.flow)(Object(F.map)((function(e){return String(e).padStart(2,"0")})),(function(e){var t=Object(te.a)(e,3),n=t[0],a=t[1],r=t[2];return"".concat(n,":").concat(a,".").concat(r)})),ae=function(e){var t=e%1e3/10,n=Math.floor(e/1e3),a=n%60,r=Math.floor(n/60);return ne([r,a,t])},re=function(e){return function(t){return Object(F.mapValues)((function(e){return e(t)}),e)}},ie=re({remainingTime:function(e){var t=e.timer.remainingTime;return t}}),ce=Object(c.b)(ie)((function(e){var t=e.remainingTime;return r.a.createElement(ee.a,{align:"center",variant:"h1"},ae(t))})),oe=n(128),le=re({paused:function(e){var t=e.timer.paused;return t},done:function(e){var t=e.timer.done;return t}}),ue={toggleTimer:O,resetTimer:E},se=Object(c.b)(le,ue)((function(e){var t=e.paused,n=e.done,i=e.toggleTimer,c=e.resetTimer,o=Object(a.useCallback)((function(){n?c():i()}),[n,i,c]);return r.a.createElement(Y.a,{mt:2,display:"flex",justifyContent:"center"},r.a.createElement(Y.a,{width:1,clone:!0},r.a.createElement(oe.a,{variant:"contained",size:"large",color:"primary",onClick:o},n?"Reset":t?"Start":"Stop")))})),me=n(124),de=n(125),fe=re({activePlayer:function(e){var t=e.timer.activePlayer;return t},playerStats:function(e){var t=e.timer.playerStats;return t}}),be={changePlayer:y},pe=Object(c.b)(fe,be),ve=function(e){var t=e.stat,n=e.activePlayer,i=e.changePlayer,c=Object(a.useCallback)((function(){i(t.name)}),[i,t]);return r.a.createElement(me.a,{item:!0},r.a.createElement(Y.a,{px:4,py:2,style:{cursor:"pointer"},border:n===t.name?"2px solid #3f51b5":"2px solid transparent",clone:!0},r.a.createElement(de.a,{onClick:c},r.a.createElement(ee.a,{variant:"h3",gutterBottom:!0},t.name),r.a.createElement(ee.a,{variant:"h4"},ae(t.played)))))},ge=pe((function(e){var t=e.activePlayer,n=e.playerStats,a=e.changePlayer;return r.a.createElement(Y.a,{mt:4},r.a.createElement(me.a,{justify:"center",container:!0,spacing:4},n.map((function(e){return r.a.createElement(ve,{key:e.name,stat:e,activePlayer:t,changePlayer:a})}))))})),he=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ye(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}Object(i.render)(r.a.createElement(X,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/rxjs-timers-test",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/rxjs-timers-test","/service-worker.js");he?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ye(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ye(t,e)}))}}()}},[[77,1,2]]]);
//# sourceMappingURL=main.8a1a5c43.chunk.js.map