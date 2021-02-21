(this.webpackJsonpcovid_tracker=this.webpackJsonpcovid_tracker||[]).push([[0],{160:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),s=a.n(n),r=a(22),o=a.n(r),l=(a(56),a(11)),i=a.n(l),d=a(23),u=a(2);a(58),a(59);var j=function(){return Object(c.jsx)("div",{className:"loader"})},h=(a(60),a(3)),b=a.n(h),p=function(e){var t=e.text,a=e.total,n=e.today,s=e.color,r=void 0===s?"rgb(24, 35, 54)":s;return Object(c.jsxs)("div",{className:"InfoCard-container",children:[Object(c.jsx)("div",{className:"InfoCard-title",children:t}),Object(c.jsx)("div",{className:"InfoCard-total",style:{color:r},children:b()(a).format("0,0")}),Object(c.jsxs)("div",{className:"InfoCard-today",children:["+ ",b()(n).format("0,0")]})]})},f=a(24),y=function(e){var t=e.data,a=e.options;return Object(c.jsx)("div",{children:Object(c.jsx)(f.Doughnut,{data:t,options:a})})},m=function(e){var t=e.selectedCountryInfo,a=Object(n.useState)([]),s=Object(u.a)(a,2),r=s[0],o=s[1],l={legend:{display:!1},title:{display:!0,text:"New Cases by Date"},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e){return b()(e.value).format("0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{ticks:{callback:function(e,t,a){return b()(e).format("0a")}}}]}};Object(n.useEffect)((function(){(function(){var e=Object(d.a)(i.a.mark((function e(){var a,c,n,s,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t.country){e.next=11;break}return e.next=4,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all");case 4:return c=e.sent,e.next=7,c.json();case 7:n=e.sent,a=n,e.next=18;break;case 11:return e.next=13,fetch("https://disease.sh/v3/covid-19/historical/".concat(t.countryInfo.iso2,"?lastdays=all\n                    "));case 13:return s=e.sent,e.next=16,s.json();case 16:r=e.sent,a=r.timeline;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),console.log(e.t0);case 23:o(h(a));case 24:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(){return e.apply(this,arguments)}})()()}),[t]);var h=function(e){var t,a=[];for(var c in e.cases){if(t){var n={x:c,y:e.cases[c]-t};a.push(n)}t=e.cases[c]}return a};return Object(c.jsx)("div",{className:"HistoricalGraph",children:r?Object(c.jsx)(f.Line,{options:l,data:{datasets:[{data:r}]}}):Object(c.jsx)(j,{})})};var v=function(e){var t=e.selectedCountryInfo,a={callbacks:{label:function(e,t){var a=t.datasets[e.datasetIndex],c=a._meta[Object.keys(a._meta)[0]].total,n=a.data[e.index];return n+" ("+parseFloat((n/c*100).toFixed(1))+"%)"},title:function(e,t){return t.labels[e[0].index]}}};return Object(c.jsxs)("div",{className:"country-summary-container",children:[Object(c.jsxs)("div",{className:"country-name",children:[t.countryInfo.flag?Object(c.jsx)("img",{src:t.countryInfo.flag,alt:"flag",style:{height:"70px",width:"auto",boxShadow:"2px 2px 5px grey"}}):null,Object(c.jsx)("h2",{children:t.country?t.country:"Worldwide Summary"}),Object(c.jsxs)("p",{children:["Population: ",Object(c.jsx)("b",{children:b()(t.population).format("0,0")})]})]}),Object(c.jsxs)("div",{className:"InfoCard-row",children:[Object(c.jsx)(p,{text:"Total Cases",total:t.cases,today:t.todayCases}),Object(c.jsx)(p,{text:"Total Recovered",total:t.recovered,today:t.todayRecovered,color:"#0088ff"}),Object(c.jsx)(p,{text:"Total Deaths",total:t.deaths,today:t.todayDeaths,color:"#ff1616e0"})]}),Object(c.jsx)("div",{className:"percentages"}),Object(c.jsx)("div",{className:"HistoricalGraph-container",children:Object(c.jsx)(m,{selectedCountryInfo:t})}),Object(c.jsxs)("div",{className:"Donut-container",children:[Object(c.jsx)(y,{data:{datasets:[{data:[t.cases,t.population-t.cases],backgroundColor:["rgba(255, 22, 22, 0.8)","rgba(200, 200, 200, 0.8)"]}],labels:["Cases"]},options:{tooltips:a,title:{display:!0,text:"Cases"},legend:{position:"bottom"}}}),Object(c.jsx)(y,{data:{datasets:[{data:[t.recovered,t.active+t.critical,t.deaths],backgroundColor:["rgba(0, 122, 255, 0.8)","rgba(200, 200, 200, 0.8)","rgba(255, 22, 22, 0.8)"]}],labels:["Recovered","Ongoing Case","Deceased"]},options:{tooltips:a,title:{display:!0,text:"Among Confirmed Cases"},legend:{position:"bottom"}}})]})]})},x=a(165),O=a(162),g={cases:{color:"#ff1616e0",multiplier:300},todayCases:{color:"#ff1616e0",multiplier:2500},deaths:{color:"#ff1616e0",multiplier:1e3},todayDeaths:{color:"#ff1616e0",multiplier:1e4},recovered:{color:"#0088ff",multiplier:300},todayRecovered:{color:"#0088ff",multiplier:2e3},active:{color:"#ff1616e0",multiplier:300},critical:{color:"#ff1616e0",multiplier:4e3},casesPerOneMillion:{color:"#ff1616e0",multiplier:500},deathsPerOneMillion:{color:"#ff1616e0",multiplier:5e3},tests:{color:"#0088ff",multiplier:100},countriesVaccine:{color:"#0088ff",multiplier:100}},C=function(e,t){return e.map((function(e){return e.typeValue>0&&e.iso2&&Object(c.jsx)(x.a,{center:[e.lat,e.lng],pathOptions:{color:g[e.cat].color,fillColor:g[e.cat].color},fillOpacity:.5,radius:g[e.cat].multiplier*Math.sqrt(e.typeValue/Math.PI),eventHandlers:{click:function(){t(e.country)}},children:Object(c.jsx)(O.a,{children:Object(c.jsxs)("div",{className:"Tooltip-container",children:[e.flag?Object(c.jsx)("img",{src:e.flag,alt:"flag",style:{height:"30px",width:"auto"}}):null,Object(c.jsx)("div",{children:e.country}),Object(c.jsx)("div",{children:"".concat(e.text,": ").concat(b()(e.typeValue).format("0,0"))})]})})},e.iso2)}))};var N=function(e){var t=e.selectedDataType,a=e.typeChangeHandler,n=e.styleOptions,s=void 0===n?{backgroundColor:g[t.dataType].color}:n;return Object(c.jsxs)("div",{className:"dropdown",children:[Object(c.jsx)("button",{className:"dropbtn",style:s,children:t.text}),Object(c.jsxs)("div",{className:"dropdown-content type",children:[Object(c.jsx)("div",{className:"menuItem",onClick:a,"data-value":"active",children:"Active Cases"}),Object(c.jsx)("div",{className:"menuItem",onClick:a,"data-value":"cases",children:"Total Cases"}),Object(c.jsx)("div",{className:"menuItem",onClick:a,"data-value":"deaths",children:"Total Deaths"}),Object(c.jsx)("div",{className:"menuItem",onClick:a,"data-value":"recovered",children:"Total Recovered"}),Object(c.jsx)("div",{className:"menuItem",onClick:a,"data-value":"tests",children:"Tests Administered"}),Object(c.jsx)("div",{className:"menuItem",onClick:a,"data-value":"countriesVaccine",children:"Vaccines Administered"})]})]})};var w=function(e){var t=e.selectedDataType,a=e.selectedDataTypeData,n=e.countryChangeHandler,s=e.worldData,r=e.typeChangeHandler,o=a.sort((function(e,t){return t.typeValue-e.typeValue})).slice(0,40);return Object(c.jsx)("div",{className:"CountriesList",children:Object(c.jsxs)("div",{className:"list-container",children:[Object(c.jsx)("div",{className:"list-country-button",children:Object(c.jsx)(N,{typeChangeHandler:r,selectedDataType:t})}),Object(c.jsxs)("div",{className:"list-country-data",onClick:function(){n("Worldwide")},children:[Object(c.jsx)("div",{className:"button-left",style:{width:"70px"},children:"World"})," ",Object(c.jsxs)("div",{className:"button-right",style:{width:"100%"},children:[Object(c.jsx)("div",{className:"list-bar world",style:{width:"100%",height:"20px",marginRight:"5px",backgroundColor:"".concat(g[t.dataType].color)}}),Object(c.jsx)("div",{className:"list-number",children:b()(s).format("0,0")})]},t.dataType)]}),o.map((function(e){return e.id&&Object(c.jsxs)("div",{className:"list-country-data",onClick:function(){n(e.country)},children:[Object(c.jsx)("div",{className:"button-left",style:{width:"70px"},children:e.iso3}),Object(c.jsxs)("div",{className:"button-right",style:{width:"100%"},children:[Object(c.jsx)("div",{className:"list-bar",style:{width:"".concat(e.typeValue/s*100,"%"),height:"20px",marginRight:"5px",backgroundColor:"".concat(g[e.cat].color)}}),Object(c.jsx)("div",{className:"list-number",children:b()(e.typeValue).format("0,0")})]},e.typeValue)]},e.id)}))]})})},D=function(e){var t=e.selectedCountryInfo,a=e.selectedDataTypeData,n=e.selectedDataType,s=e.countryChangeHandler,r=e.worldData,o=e.typeChangeHandler;return Object(c.jsx)("div",{className:"SelectedApp",children:Object(c.jsxs)("div",{className:"details",children:[Object(c.jsx)("section",{className:"country-section",children:Object(c.jsx)(v,{selectedCountryInfo:t})}),Object(c.jsx)("section",{className:"type-list",children:Object(c.jsx)(w,{selectedDataType:n,selectedDataTypeData:a,countryChangeHandler:s,worldData:r,typeChangeHandler:o})})]})})};var T=function(e){var t=e.countryChangeHandler,a=e.countryNames,s=Object(n.useState)([]),r=Object(u.a)(s,2),o=r[0],l=r[1],i=Object(n.useState)(""),d=Object(u.a)(i,2),j=d[0],h=d[1];return Object(c.jsxs)("div",{className:"search-dropdown",children:[Object(c.jsx)("input",{type:"search",placeholder:"Search Country",onKeyUp:function(e){"Enter"===e.key?(j?(t(o[0]),l([])):t("Worldwide"),h("")):l(a.filter((function(t){return t.toLowerCase().startsWith(e.target.value.toLowerCase())})))},onChange:function(e){h(e.target.value)},value:j}),Object(c.jsx)("div",{className:"search-dropdown-content",children:o.length<50&&o.map((function(e,a){return Object(c.jsx)("div",{className:"menuItem",onClick:function(){h(""),l([]),t(e)},children:e},a)}))})]})},I=function(e){var t=e.countryChangeHandler,a=e.countryNames,n=e.selectedDataType,s=e.typeChangeHandler;return Object(c.jsx)("div",{children:Object(c.jsxs)("nav",{className:"LoadedApp-nav",children:[Object(c.jsx)(T,{countryChangeHandler:t,countryNames:a}),Object(c.jsx)(N,{selectedDataType:n,typeChangeHandler:s})]})})},k=a(164),H=a(166),V=a(163);var S=function(e){var t=e.center;return Object(V.a)().setView(t),null};var A=function(e){var t=e.selectedDataTypeData,a=e.mapCenter,n=e.selectedCountry,s=e.countryChangeHandler,r=4;return"Worldwide"===n&&(r=2),t&&a?Object(c.jsx)("div",{className:"map",children:Object(c.jsxs)(k.a,{center:a,zoom:r,scrollWheelZoom:!1,children:[Object(c.jsx)(S,{center:a,zoom:r}),C(t,s),Object(c.jsx)(H.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"})]})}):Object(c.jsx)("div",{className:"Loader-container",children:Object(c.jsx)(j,{})})},L=function(e){var t=e.globalData,a=e.countryNames,s=Object(n.useState)("Worldwide"),r=Object(u.a)(s,2),o=r[0],l=r[1],i=Object(n.useState)({text:"Active Cases",dataType:"active"}),d=Object(u.a)(i,2),h=d[0],b=d[1],p=Object(n.useState)(),f=Object(u.a)(p,2),y=f[0],m=f[1],v=Object(n.useState)(),x=Object(u.a)(v,2),O=x[0],g=x[1];Object(n.useEffect)((function(){N("Worldwide"),C(h)}),[]);var C=function(e){var a=t.countries.map((function(a){var c={country:a.country,flag:a.countryInfo.flag,id:a.countryInfo._id,iso2:a.countryInfo.iso2,iso3:a.countryInfo.iso3,lat:a.countryInfo.lat,lng:a.countryInfo.long,cat:e.dataType,text:e.text};if(a[e.dataType]?c.typeValue=a[e.dataType]:c.typeValue=0,"countriesVaccine"!==e.dataType)return c;var n=t.countriesVaccine.find((function(e){return e.country===a.country}));return n&&(c.typeValue=Object.values(n.timeline)[0]),c}));m(a)},N=function(e){g("Worldwide"===e?t.world:t.countries.find((function(t){return t.country===e})))},w=function(e){l(e),N(e)},T=function(e){var t={text:e.target.innerText,dataType:e.target.dataset.value};b(t),C(t)};return y&&O?Object(c.jsxs)("div",{className:"Loaded-app",children:[Object(c.jsxs)("header",{className:"LoadedApp-header",children:[Object(c.jsx)("h1",{children:"Global Covid-19 Tracker"}),Object(c.jsx)(I,{countryChangeHandler:w,countryNames:a,selectedCountry:o,selectedDataType:h,typeChangeHandler:T}),Object(c.jsx)("div",{className:"map-container",children:Object(c.jsx)(A,{selectedDataTypeData:y,mapCenter:{lat:O.countryInfo.lat,lng:O.countryInfo.long},selectedCountry:o,countryChangeHandler:w})})]}),Object(c.jsx)(D,{selectedDataTypeData:y,selectedCountryInfo:O,selectedCountry:o,selectedDataType:h,countryChangeHandler:w,typeChangeHandler:T,worldData:t.world[h.dataType]})]}):Object(c.jsx)("div",{className:"Loader-container",children:Object(c.jsx)(j,{})})},W=function(){return Object(c.jsx)("div",{className:"Footer",children:Object(c.jsxs)("div",{className:"Footer-container",children:[Object(c.jsx)("p",{children:"Covid-19 data sourced from Worldometers & Johns Hopkins University"}),Object(c.jsxs)("p",{children:["Provided by ",Object(c.jsx)("a",{href:"http://www.disease.sh",target:"_blank",rel:"noreferrer",children:"disease.sh"})]}),Object(c.jsx)("p",{children:"Website developed by David Cho \xa9 2021"}),Object(c.jsxs)("p",{children:["Reach me ",Object(c.jsx)("a",{href:"mailto:hoopslam@gmail.com",children:"hoopslam@gmail.com"})]})]})})};var F=function(){var e=Object(n.useState)({}),t=Object(u.a)(e,2),a=t[0],s=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(d.a)(i.a.mark((function e(){var t,a,c,n,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([fetch("https://disease.sh/v3/covid-19/all?yesterday=true").then((function(e){return e.json()})),fetch("https://disease.sh/v3/covid-19/countries?yesterday=true").then((function(e){return e.json()})),fetch("https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1").then((function(e){return e.json()})),fetch("https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=1").then((function(e){return e.json()}))]).catch((function(e){console.log(e)}));case 2:t=e.sent,a=Object(u.a)(t,4),c=a[0],n=a[1],r=a[2],o=a[3],c.countryInfo={lat:15,long:0},c.countriesVaccine=Object.values(o)[0],s({world:c,countries:n,countriesVaccine:r});case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),a.world&&a.countries?Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(L,{globalData:a,countryNames:a.countries.map((function(e){return e.country}))}),Object(c.jsx)(W,{})]}):Object(c.jsx)("div",{className:"Loader-container",children:Object(c.jsx)(j,{})})},R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,167)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(F,{})}),document.getElementById("root")),R()},56:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){}},[[160,1,2]]]);
//# sourceMappingURL=main.80070458.chunk.js.map