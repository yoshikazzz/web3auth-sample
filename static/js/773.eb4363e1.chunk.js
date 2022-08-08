"use strict";(self.webpackChunkweb3auth_test=self.webpackChunkweb3auth_test||[]).push([[773],{34773:function(n,e,t){t.r(e),t.d(e,{OpenloginAdapter:function(){return P},getOpenloginDefaultOptions:function(){return N}});var i=t(74165),r=t(15861),o=t(15671),a=t(43144),s=t(97326),c=t(11752),h=t(61120),p=t(60136),u=t(27277),l=t(41163),g=t(37949),f=t(4942),d=t(63087),v=t(57381),C=t.n(v),N=function(n,e){return{adapterSettings:{network:l.dr.MAINNET,clientId:"",uxMode:l.$e.POPUP},chainConfig:n?(0,g.h2)(n,e):null,loginSettings:{}}};function O(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function y(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?O(Object(t),!0).forEach((function(e){(0,f.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var P=function(n){(0,p.Z)(v,n);var e=(0,u.Z)(v);function v(n){var t,i,r,a;(0,o.Z)(this,v),t=e.call(this),(0,f.Z)((0,s.Z)(t),"name",g.rW.OPENLOGIN),(0,f.Z)((0,s.Z)(t),"adapterNamespace",g.yk.MULTICHAIN),(0,f.Z)((0,s.Z)(t),"type",g.hN.IN_APP),(0,f.Z)((0,s.Z)(t),"openloginInstance",null),(0,f.Z)((0,s.Z)(t),"status",g.MP.NOT_READY),(0,f.Z)((0,s.Z)(t),"currentChainNamespace",g.EN.EIP155),(0,f.Z)((0,s.Z)(t),"openloginOptions",void 0),(0,f.Z)((0,s.Z)(t),"loginSettings",{}),(0,f.Z)((0,s.Z)(t),"privKeyProvider",null),g.cM.debug("const openlogin adapter",n);var c=N(null===(i=n.chainConfig)||void 0===i?void 0:i.chainNamespace,null===(r=n.chainConfig)||void 0===r?void 0:r.chainId);if(t.openloginOptions=y(y({clientId:"",network:l.dr.MAINNET},c.adapterSettings),n.adapterSettings||{}),t.loginSettings=y(y({},c.loginSettings),n.loginSettings),null!==(a=n.chainConfig)&&void 0!==a&&a.chainNamespace){var h;t.currentChainNamespace=null===(h=n.chainConfig)||void 0===h?void 0:h.chainNamespace;var p=c.chainConfig?c.chainConfig:{};if(t.chainConfig=y(y({},p),null===n||void 0===n?void 0:n.chainConfig),g.cM.debug("const openlogin chainConfig",t.chainConfig),!t.chainConfig.rpcTarget&&n.chainConfig.chainNamespace!==g.EN.OTHER)throw g.Ty.invalidParams("rpcTarget is required in chainConfig")}return t}return(0,a.Z)(v,[{key:"chainConfigProxy",get:function(){return this.chainConfig?y({},this.chainConfig):null}},{key:"provider",get:function(){var n;return(null===(n=this.privKeyProvider)||void 0===n?void 0:n.provider)||null},set:function(n){throw new Error("Not implemented")}},{key:"init",value:function(){var n=(0,r.Z)((0,i.Z)().mark((function n(e){var t,r,o;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((0,c.Z)((0,h.Z)(v.prototype),"checkInitializationRequirements",this).call(this),null!==(t=this.openloginOptions)&&void 0!==t&&t.clientId){n.next=3;break}throw g.Ty.invalidParams("clientId is required before openlogin's initialization");case 3:if(this.chainConfig){n.next=5;break}throw g.Ty.invalidParams("chainConfig is required before initialization");case 5:return r=!1,this.openloginOptions.uxMode===l.$e.REDIRECT&&(o=(0,l.Gv)(),Object.keys(o).length>0&&o._pid&&(r=!0)),this.openloginOptions=y(y({},this.openloginOptions),{},{replaceUrlOnRedirect:r}),this.openloginInstance=new l.ZP(this.openloginOptions),g.cM.debug("initializing openlogin adapter init"),n.next=12,this.openloginInstance.init();case 12:if(this.status=g.MP.READY,this.emit(g.n2.READY,g.rW.OPENLOGIN),n.prev=14,g.cM.debug("initializing openlogin adapter"),!this.openloginInstance.privKey||!e.autoConnect&&!r){n.next=19;break}return n.next=19,this.connect();case 19:n.next=25;break;case 21:n.prev=21,n.t0=n.catch(14),g.cM.error("Failed to connect with cached openlogin provider",n.t0),this.emit("ERRORED",n.t0);case 25:case"end":return n.stop()}}),n,this,[[14,21]])})));return function(e){return n.apply(this,arguments)}}()},{key:"connect",value:function(){var n=(0,r.Z)((0,i.Z)().mark((function n(e){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(0,c.Z)((0,h.Z)(v.prototype),"checkConnectionRequirements",this).call(this),this.status=g.MP.CONNECTING,this.emit(g.n2.CONNECTING,y(y({},e),{},{adapter:g.rW.OPENLOGIN})),n.prev=3,n.next=6,this.connectWithProvider(e);case 6:return n.abrupt("return",this.provider);case 9:if(n.prev=9,n.t0=n.catch(3),g.cM.error("Failed to connect with openlogin provider",n.t0),this.status=g.MP.READY,this.emit(g.n2.ERRORED,n.t0),null===n.t0||void 0===n.t0||!n.t0.message.includes("user closed popup")){n.next=16;break}throw g.RM.popupClosed();case 16:throw g.RM.connectionError("Failed to login with openlogin");case 17:case"end":return n.stop()}}),n,this,[[3,9]])})));return function(e){return n.apply(this,arguments)}}()},{key:"disconnect",value:function(){var n=(0,r.Z)((0,i.Z)().mark((function n(){var e,t=arguments;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=t.length>0&&void 0!==t[0]?t[0]:{cleanup:!1},this.status===g.MP.CONNECTED){n.next=3;break}throw g.RM.notConnectedError("Not connected with wallet");case 3:if(this.openloginInstance){n.next=5;break}throw g.Ty.notReady("openloginInstance is not ready");case 5:return n.next=7,this.openloginInstance.logout();case 7:e.cleanup?(this.status=g.MP.NOT_READY,this.openloginInstance=null,this.privKeyProvider=null):this.status=g.MP.READY,this.emit(g.n2.DISCONNECTED);case 9:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"getUserInfo",value:function(){var n=(0,r.Z)((0,i.Z)().mark((function n(){var e;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(this.status===g.MP.CONNECTED){n.next=2;break}throw g.RM.notConnectedError("Not connected with wallet");case 2:if(this.openloginInstance){n.next=4;break}throw g.Ty.notReady("openloginInstance is not ready");case 4:return n.next=6,this.openloginInstance.getUserInfo();case 6:return e=n.sent,n.abrupt("return",e);case 8:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"setAdapterSettings",value:function(n){if(this.status!==g.MP.READY){var e=N();this.openloginOptions=y(y(y({},e.adapterSettings),this.openloginOptions||{}),n)}}},{key:"setChainConfig",value:function(n){(0,c.Z)((0,h.Z)(v.prototype),"setChainConfig",this).call(this,n),this.currentChainNamespace=n.chainNamespace}},{key:"connectWithProvider",value:function(){var n=(0,r.Z)((0,i.Z)().mark((function n(e){var r,o,a,s,c,h,p,u;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(this.chainConfig){n.next=2;break}throw g.Ty.invalidParams("chainConfig is required before initialization");case 2:if(this.openloginInstance){n.next=4;break}throw g.Ty.notReady("openloginInstance is not ready");case 4:if(this.currentChainNamespace!==g.EN.SOLANA){n.next=12;break}return n.next=7,Promise.all([t.e(826),t.e(201),t.e(823),t.e(467)]).then(t.bind(t,63823));case 7:r=n.sent,o=r.SolanaPrivateKeyProvider,this.privKeyProvider=new o({config:{chainConfig:this.chainConfig}}),n.next=25;break;case 12:if(this.currentChainNamespace!==g.EN.EIP155){n.next=20;break}return n.next=15,Promise.all([t.e(826),t.e(256),t.e(644)]).then(t.bind(t,19256));case 15:a=n.sent,s=a.EthereumPrivateKeyProvider,this.privKeyProvider=new s({config:{chainConfig:this.chainConfig}}),n.next=25;break;case 20:if(this.currentChainNamespace!==g.EN.OTHER){n.next=24;break}this.privKeyProvider=new d.FL,n.next=25;break;case 24:throw new Error("Invalid chainNamespace: ".concat(this.currentChainNamespace," found while connecting to wallet"));case 25:if(this.openloginInstance.privKey||!e){n.next=29;break}return this.loginSettings.curve||(this.loginSettings.curve=this.currentChainNamespace===g.EN.SOLANA?l.x7.ED25519:l.x7.SECP256K1),n.next=29,this.openloginInstance.login(C()(this.loginSettings,{loginProvider:e.loginProvider},{extraLoginOptions:y(y({},e.extraLoginOptions||{}),{},{login_hint:e.login_hint||(null===(c=e.extraLoginOptions)||void 0===c?void 0:c.login_hint)})}));case 29:if(!(h=this.openloginInstance.privKey)){n.next=41;break}if(this.currentChainNamespace!==g.EN.SOLANA){n.next=37;break}return n.next=34,Promise.all([t.e(201),t.e(921)]).then(t.bind(t,84656));case 34:p=n.sent,u=p.getED25519Key,h=u(h).sk.toString("hex");case 37:return n.next=39,this.privKeyProvider.setupProvider(h);case 39:this.status=g.MP.CONNECTED,this.emit(g.n2.CONNECTED,{adapter:g.rW.OPENLOGIN,reconnected:!e});case 41:case"end":return n.stop()}}),n,this)})));return function(e){return n.apply(this,arguments)}}()}]),v}(g.J5)}}]);
//# sourceMappingURL=773.eb4363e1.chunk.js.map