(this.webpackJsonpboostup=this.webpackJsonpboostup||[]).push([[0],{103:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(17),i=a(23),r=a(35),s="SET_FILTER",o="GET_DATA",l="GET_DATA_STATES",d="ON_LOADER",u="OFF_LOADER",j="SET_DATE",b="ea3cc0b36cf341818e81ef2d5b2a6618",O=function(e){return function(t){var a="https://api.covidactnow.org/v2/country/US.timeseries.json?apiKey=".concat(b);fetch(a).then((function(e){return e.json()})).then((function(a){var n=a.actualsTimeseries,c=f(n,e);t({type:o,payload:c}),t({type:u})}))}},h=function(e){return function(t){var a="https://api.covidactnow.org/v2/states.timeseries.json?apiKey=".concat(b);fetch(a).then((function(e){return e.json()})).then((function(a){var n=a.map((function(t){var a=t.actualsTimeseries.filter((function(t){return t.date===e})),n=Object(r.a)(a,1)[0];return{state:t.state,serie:n}}));t(function(e){return{type:l,payload:e}}(n))}))}},f=function(e,t){switch(t){case"sevenDays":return e.slice(-8,-1);case"oneMonth":return e.slice(-32,-1);default:return e}},g=(a(103),a(130)),v=a(126),p=a(123),x=a(128),m=a(124),A=a(125),y=a(129),C=a(74),N=a(4);function T(){return Object(N.jsxs)(y.a,{as:"h2",children:[Object(N.jsx)(C.a,{name:"chart bar"}),Object(N.jsxs)(y.a.Content,{children:["Covid19",Object(N.jsx)(y.a.Subheader,{children:"Pandemic Histogram"})]})]})}function S(){var e=Object(c.b)();return Object(N.jsxs)("select",{onChange:function(t){var a,n=t.target;e((a=n.value,{type:s,payload:a}))},children:[Object(N.jsx)("option",{value:"sevenDays",children:"Last 7 days"}),Object(N.jsx)("option",{value:"oneMonth",children:"1 Month"}),Object(N.jsx)("option",{value:"all",children:"All"})]})}var w=a(85);var D=function(){var e=Object(c.c)((function(e){return e.data})).data,t=e?e.map((function(e){return e.date})):["1","2","3","4","5","6"],a=e?e.map((function(e){return e.cases})):["1","2","3","4","5","6"],i={labels:t,datasets:[{label:"# of deaths",data:e?e.map((function(e){return e.deaths})):["1","2","3","4","5","6"],backgroundColor:"rgb(255, 99, 132)"},{label:"# of confirmed cases",data:a,backgroundColor:"rgb(75, 192, 192)"}]},s=Object(c.b)(),o=Object(n.useState)(""),l=Object(r.a)(o,2),d=l[0],u=l[1];return Object(n.useEffect)((function(){s(h(d))}),[d]),Object(N.jsx)(w.a,{data:i,width:100,height:50,getElementsAtEvent:function(e){if(e.length){var t,a=e[0].index;s((t=i.labels[a],{type:j,payload:t})),u(i.labels[a])}}})},E=a(127),M={AL:"Alabama",AK:"Alaska",AS:"American Samoa",AZ:"Arizona",AR:"Arkansas",CA:"California",CO:"Colorado",CT:"Connecticut",DE:"Delaware",DC:"District of Columbia",FL:"Florida",GA:"Georgia",GU:"Guam",HI:"Hawaii",ID:"Idaho",IL:"Illinois",IN:"Indiana",IA:"Iowa",KS:"Kansas",KY:"Kentucky",LA:"Louisiana",ME:"Maine",MD:"Maryland",MA:"Massachusetts",MI:"Michigan",MN:"Minnesota",MS:"Mississippi",MO:"Missouri",MT:"Montana",NE:"Nebraska",NV:"Nevada",NH:"New Hampshire",NJ:"New Jersey",NM:"New Mexico",NY:"New York",NC:"North Carolina",ND:"North Dakota",OH:"Ohio",OK:"Oklahoma",OR:"Oregon",PA:"Pennsylvania",PR:"Puerto Rico",RI:"Rhode Island",SC:"South Carolina",SD:"South Dakota",TN:"Tennessee",TX:"Texas",UT:"Utah",VT:"Vermont",VI:"Virgin Islands",VA:"Virginia",WA:"Washington",WV:"West Virginia",WI:"Wisconsin",WY:"Wyoming"},I=function(){var e=Object(c.c)((function(e){return e.data})).dataStates;return Object(N.jsxs)(E.a,{celled:!0,padded:!0,children:[Object(N.jsx)(E.a.Header,{children:Object(N.jsxs)(E.a.Row,{children:[Object(N.jsx)(E.a.HeaderCell,{singleLine:!0,textAlign:"center",children:"State"}),Object(N.jsx)(E.a.HeaderCell,{singleLine:!0,textAlign:"center",children:"Number of confirmed cases"}),Object(N.jsx)(E.a.HeaderCell,{singleLine:!0,textAlign:"center",children:"Number of deaths"})]})}),Object(N.jsx)(E.a.Body,{children:e.map((function(e){var t,a;return Object(N.jsxs)(E.a.Row,{children:[Object(N.jsx)(E.a.Cell,{textAlign:"center",children:M[e.state]}),Object(N.jsx)(E.a.Cell,{textAlign:"center",children:null===(t=e.serie)||void 0===t?void 0:t.cases}),Object(N.jsx)(E.a.Cell,{textAlign:"center",children:null===(a=e.serie)||void 0===a?void 0:a.deaths})]},e.state)}))})]})};var L=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.filter})).filter,a=Object(c.c)((function(e){return e.loading})).loading,i=Object(c.c)((function(e){return e.data})).date;Object(n.useEffect)((function(){e(O(t))}),[t]);var r=a?Object(N.jsxs)(g.a,{children:[Object(N.jsx)(v.a,{active:!0,inverted:!0,children:Object(N.jsx)(p.a,{inverted:!0,content:"Loading"})}),Object(N.jsx)(x.a,{src:"https://react.semantic-ui.com/images/wireframe/short-paragraph.png"})]}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(T,{}),Object(N.jsx)(m.a,{}),Object(N.jsx)(S,{}),Object(N.jsx)(D,{}),i&&Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(m.a,{}),Object(N.jsxs)("h4",{children:["Day selected: ",i]}),Object(N.jsx)(I,{})]})]});return Object(N.jsx)(A.a,{children:r})},_=a(55),k=a(84),R=a(9),F={filter:"sevenDays"},H={data:null,dataStates:null,date:null},V={loading:!0},K="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||_.c,P=Object(_.b)({filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;return t.type===s?Object(R.a)(Object(R.a)({},e),{},{filter:t.payload}):e},data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(R.a)(Object(R.a)({},e),{},{data:t.payload});case l:return Object(R.a)(Object(R.a)({},e),{},{dataStates:t.payload});case j:return Object(R.a)(Object(R.a)({},e),{},{date:t.payload});default:return e}},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(R.a)(Object(R.a)({},e),{},{loading:!0});case u:return Object(R.a)(Object(R.a)({},e),{},{loading:!1});default:return e}}}),W=Object(_.d)(P,K(Object(_.a)(k.a))),G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,131)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))};a(108),a(109);Object(i.render)(Object(N.jsx)(c.a,{store:W,children:Object(N.jsx)(L,{})}),document.getElementById("root")),G()}},[[110,1,2]]]);
//# sourceMappingURL=main.5a039561.chunk.js.map