(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[0],{165:function(e,t,n){"use strict";var r,a=n(57),o=(r={basePath:"interview/",login:"https://selvaganesh75.github.io/interview/user.json"},Object(a.a)({intervals:{logout:3600},isProduction:!0,isDevelopment:!1},r));t.a=Object(a.a)(Object(a.a)({},o),{},{isProduction:!0,isDevelopment:!1})},42:function(e,t,n){"use strict";t.a={ASYNC_ADD_NOTE:"ASYNC_ADD_NOTE",ADD_NOTE_REQUEST:"ADD_NOTE_REQUEST",ADD_NOTE_SUCCESS:"ADD_NOTE_SUCCESS",ADD_NOTE_FAILURE:"ADD_NOTE_FAILURE",ASYNC_REMOVE_NOTE:"ASYNC_REMOVE_NOTE",REMOVE_NOTE_REQUEST:"REMOVE_NOTE_REQUEST",REMOVE_NOTE_SUCCESS:"REMOVE_NOTE_SUCCESS",REMOVE_NOTE_FAILURE:"REMOVE_NOTE_FAILURE"}},423:function(e,t,n){"use strict";n.d(t,"a",(function(){return E})),n.d(t,"b",(function(){return p}));var r=n(24),a=n.n(r),o=n(41),c=(n(441),n(55)),u=n(59),s=a.a.mark(l),i=a.a.mark(p),E={login:function(e){return{type:u.a.ASYNC_LOGIN,data:e}}};function l(e){var t,n,r,i;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(i=function(e){return{type:u.a.LOGIN_FAILURE,error:e}},r=function(e){return{type:u.a.LOGIN_SUCCESS,payload:e}},t=e.data,n=t.user,a.prev=4,!t.success){a.next=12;break}return console.log(t),a.next=9,Object(o.b)(r({user:n}));case 9:c.b.push("main"),a.next=13;break;case 12:throw new Error("Login Failure");case 13:a.next=19;break;case 15:return a.prev=15,a.t0=a.catch(4),a.next=19,Object(o.b)(i(a.t0.message));case 19:case"end":return a.stop()}}),s,null,[[4,15]])}function p(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.c)(u.a.ASYNC_LOGIN,l);case 2:case"end":return e.stop()}}),i)}},433:function(e,t,n){"use strict";n.d(t,"a",(function(){return E})),n.d(t,"b",(function(){return f}));var r=n(24),a=n.n(r),o=n(41),c=n(42),u=a.a.mark(l),s=a.a.mark(p),i=a.a.mark(f),E={addNote:function(e){return{type:c.a.ASYNC_ADD_NOTE,data:e}},removeNote:function(e){return{type:c.a.ASYNC_REMOVE_NOTE,data:e}}};function l(e){var t,n;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=function(e){return{type:c.a.ADD_NOTE_SUCCESS,payload:e}},t=e.data,r.prev=2,r.next=5,Object(o.b)(n(t));case 5:r.next=10;break;case 7:r.prev=7,r.t0=r.catch(2),console.log(r.t0);case 10:case"end":return r.stop()}}),u,null,[[2,7]])}function p(e){var t,n;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return function(e){return{type:c.a.REMOVE_NOTE_FAILURE,error:e}},n=function(e){return{type:c.a.REMOVE_NOTE_SUCCESS,payload:e}},t=e.data,r.prev=3,r.next=6,Object(o.b)(n(t));case 6:r.next=11;break;case 8:r.prev=8,r.t0=r.catch(3),console.log(r.t0);case 11:case"end":return r.stop()}}),s,null,[[3,8]])}function f(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.c)(c.a.ASYNC_ADD_NOTE,l);case 2:return e.next=4,Object(o.c)(c.a.ASYNC_REMOVE_NOTE,p);case 4:case"end":return e.stop()}}),i)}},440:function(e,t,n){"use strict";n.r(t);n(443),n(453),n(132),n(133),n(134),n(135),n(136),n(137),n(138),n(139),n(140),n(141),n(142),n(143),n(144),n(145),n(146),n(231),n(233),n(234),n(235),n(236),n(237),n(238),n(240),n(241),n(149),n(243),n(244),n(86),n(245),n(246),n(248),n(249),n(250),n(251),n(252),n(253),n(254),n(255),n(256),n(257),n(258),n(259),n(262),n(263),n(264),n(265),n(150),n(71),n(266),n(268),n(269),n(270),n(271),n(272),n(273),n(274),n(276),n(277),n(278),n(279),n(280),n(281),n(282),n(283),n(151),n(284),n(285),n(286),n(288),n(290),n(291),n(292),n(293),n(294),n(295),n(297),n(298),n(300),n(301),n(302),n(304),n(305),n(306),n(307),n(308),n(309),n(310),n(312),n(313),n(314),n(315),n(316),n(317),n(318),n(319),n(99),n(320),n(321),n(327),n(328),n(329),n(330),n(331),n(332),n(333),n(334),n(335),n(336),n(337),n(338),n(339),n(340),n(159),n(341),n(342),n(100),n(343),n(344),n(345),n(346),n(84),n(347),n(348),n(351),n(352),n(353),n(354),n(355),n(356),n(357),n(358),n(359),n(360),n(361),n(362),n(363),n(364),n(365),n(366),n(367),n(368),n(369),n(370),n(371),n(372),n(373),n(374),n(377),n(378),n(379),n(380),n(381),n(382),n(383),n(384),n(385),n(386),n(387),n(388),n(389),n(390),n(391),n(392),n(393),n(394),n(395),n(396),n(397),n(398),n(399),n(400),n(401),n(402),n(403),n(404),n(405),n(406),n(407),n(408),n(409),n(113),n(411),n(464),n(465),n(466),n(467),n(468),n(469),n(186),n(187),n(188),n(189),n(190),n(191),n(192),n(193),n(194),n(195),n(196),n(197),n(198),n(199),n(200),n(201),n(202),n(471),n(472),n(473),n(474),n(475),n(476),n(477),n(478),n(479),n(480),n(481),n(482),n(483),n(484),n(485),n(486),n(488),n(489),n(490),n(491),n(492),n(493),n(494),n(495),n(496),n(497),n(498),n(203),n(205),n(206),n(207),n(208),n(209),n(210),n(211),n(212),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(221),n(499),n(500),n(501),n(503),n(226),n(227),n(228),n(504),n(505),n(506),n(507),n(508),n(509),n(510),n(412),n(131),n(413),n(414),n(415),n(417),n(164);!function(){if("function"===typeof window.CustomEvent)return!1;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e}();var r=n(2),a=n.n(r),o=n(116),c=n.n(o),u=n(169),s=(n(519),n(114)),i=n(115),E=n(171),l=n(170),p=n(539),f=(n(520),[{path:"/",exact:!0,name:"default"},{path:"/main",exact:!0,name:"Login Screen",component:a.a.lazy((function(){return n.e(5).then(n.bind(null,542))}))}]),d=n(438),O=n(55);var h=function(e){var t=e.component,n=Object(d.a)(e,["component"]);return a.a.createElement(p.b,Object.assign({},n,{render:function(e){var n=function(){var e=O.a.getState().login.userData;return e&&e.user?{Authorization:"success"}:{}}();return n&&n.Authorization?a.a.createElement(t,e):a.a.createElement(p.a,{to:{pathname:"/login"}})}}))},v=a.a.lazy((function(){return n.e(4).then(n.bind(null,540))})),m=a.a.lazy((function(){return n.e(3).then(n.bind(null,541))})),b=function(e){Object(E.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement(p.c,{history:O.b},a.a.createElement(a.a.Suspense,{fallback:a.a.createElement("div",{className:"animated fadeIn pt-3 text-center"},"Loading...")},a.a.createElement(p.d,null,a.a.createElement(p.b,{path:"/login",exact:!0,render:function(e){return a.a.createElement(v,e)}}),f.map((function(e,t){return a.a.createElement(h,Object.assign({key:t},e))})),a.a.createElement(p.b,{name:"Page 404",render:function(e){return a.a.createElement(m,e)}}))))}}]),n}(r.Component),S=n(165);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t.default=S.a;c.a.render(a.a.createElement(u.a,{store:O.a},a.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},441:function(e,t,n){"use strict";var r=n(114),a=n(115),o=n(436),c=n.n(o),u=n(24),s=n.n(u),i=n(432),E=function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){if(t||n({message:"Something went wrong"}),t&&t.errors){var r=t.errors,a="";if(Array.isArray(r.msg))r.msg.forEach((function(e){var t=e.param?e.param+":":"";a+="".concat(t," ").concat(e.msg,", \n")}));else{var o=r.param?r.param+":":"";a=o+r.msg}n({message:a})}t&&e(t),null!==t&&void 0!==t||n({message:"Something went wrong"}),t.status>399&&n({message:t.statusText||"Something went wrong"}),e({})})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=(n(55),new(function(){function e(){var t=this;Object(r.a)(this,e),this.handleError=function(e){var t=e.response;return console.log(e),E(t.data)},this.redirectTo=function(e,t){e.location=t},this.get=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{headers:{}};return t.service.get(e,n).then((function(e){return e.data}))},this.patch=function(e,n,r){return t.service.request({method:"PATCH",url:e,responseType:"json",data:n,headers:r}).then((function(e){return e.data}))},this.post=function(e,n,r){return t.service.request({method:"POST",url:e,responseType:"json",data:n,headers:r}).then((function(e){return e.data}))},this.put=function(e,n,r){return t.service.request({method:"PUT",url:e,responseType:"json",data:n,headers:r}).then((function(e){return e.data}))},this.delete=function(e,n,r){return t.service.request({method:"DELETE",url:e,responseType:"json",data:n,headers:r}).then((function(e){return e.data}))};var n=c.a.create({headers:{"Content-Type":"application/json"}});n.interceptors.response.use(this.handleSuccess,this.handleError),this.service=n}return Object(a.a)(e,[{key:"handleSuccess",value:function(e){return e}}]),e}()));t.a=l},442:function(e,t,n){e.exports=n(440)},519:function(e,t,n){},520:function(e,t,n){},55:function(e,t,n){"use strict";n.d(t,"b",(function(){return y}));var r=n(56),a=n(437),o=n(49),c=n(119),u=n(24),s=n.n(u),i=n(41),E=n(423),l=n(433),p=s.a.mark(f);function f(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.a)([Object(E.b)(),Object(l.b)()]);case 2:case"end":return e.stop()}}),p)}var d=n(57),O=n(59),h={loginError:!1,loginSuccess:!1,userData:{}};var v=n(42),m={notes:[]};var b=Object(r.c)({routing:c.routerReducer,login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0,n=Object(d.a)({},e);return t.type===O.a.LOGIN_FAILURE&&(n.loginError=t.payload,n.loginSuccess=!1,n.userData={}),t.type===O.a.LOGIN_SUCCESS&&(n.loginSuccess=!0,n.loginError=!1,n.userData=t.payload),n},main:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,n=Object(d.a)({},e);return t.type===v.a.REMOVE_NOTE_SUCCESS&&(n.notes=t.payload),t.type===v.a.ADD_NOTE_SUCCESS&&(n.notes=t.payload),n}}),S=function(e,t){return"LOGOUT"===t.type&&(e=void 0),b(e,t)},_=(n(165),Object(a.a)()),g=Object(r.e)(S,Object(r.a)(_));_.run(f);var N=Object(o.a)({basename:"interview/"}),y=Object(c.syncHistoryWithStore)(N,g);t.a=g},59:function(e,t,n){"use strict";t.a={ASYNC_LOGIN:"ASYNC_LOGIN",LOGIN_SUCCESS:"LOGIN_SUCCESS",LOGIN_FAILURE:"LOGIN_FAILURE"}}},[[442,1,2]]]);
//# sourceMappingURL=main.7e57353c.chunk.js.map