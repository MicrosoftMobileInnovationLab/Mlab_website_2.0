_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{b9ZP:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/incito",function(){return n("mC2w")}])},mC2w:function(e,t,n){"use strict";n.r(t);var a=n("nKUr"),s=n("vJKn"),c=n.n(s),i=n("rg98"),r=n("5Yp1"),o=n("R/WZ"),l=n("Ie8z"),h=n("Ji2X"),j=n("ofer"),d=n("tRbT"),m=n("J3NM"),b=n.n(m),u=n("q1tI"),p=n("iae6"),x=(n("vTTe"),n("FKgC"),Object(o.a)({subtitleStyle:{fontSize:"1.5rem",color:"white",textAlign:"center"},eventBodyStyle:{fontSize:"1.5rem",color:"white",textAlign:"left",marginTop:"1em",marginBottom:"1em"},spinnerTextStyle:{textAlign:"center",color:"#7cb342"}})),O=function(e){var t=e.img;return Object(a.jsx)(l.a,{className:"sliderImage",image:t})};t.default=function(){var e=x(),t=Object(u.useState)({events:[]}),n=t[0],s=t[1],o=Object(u.useState)(!1),l=o[0],m=o[1];return Object(u.useEffect)((function(){(function(){var e=Object(i.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pil-api.herokuapp.com/events/incito");case 2:return t=e.sent,e.next=5,t.status;case 5:if(e.t0=e.sent,200===e.t0){e.next=10;break}alert("API Error. Try again later"),e.next=14;break;case 10:return e.next=12,t.json();case 12:n=e.sent,s({events:n});case 14:m(!0);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.jsxs)(r.a,{title:"PIL | Incito",active:"Incito",children:[Object(a.jsx)("div",{className:"hashCodeHeadSection",children:Object(a.jsxs)(h.a,{children:[Object(a.jsx)(j.a,{className:"pageHeader",children:"Incito"}),Object(a.jsx)(j.a,{className:e.subtitleStyle,children:"Ideathon"}),Object(a.jsx)(j.a,{className:e.subtitleStyle,style:{marginTop:40},children:"Incito is a highly competitive ideathon where participants come up with ideas of their own that solve important social problems, environmental and industrial problems out there in the world."})]})}),Object(a.jsx)("div",{className:"hashCodeContainer",children:l?n.events.map((function(e){return Object(a.jsx)("div",{className:"hashCodeSection",children:Object(a.jsxs)(h.a,{children:[Object(a.jsx)(j.a,{className:"hashCodeTitle",children:e.event_name}),Object(a.jsx)(j.a,{className:"hashCodeDate",children:e.event_date+" "+e.year}),Object(a.jsx)(j.a,{className:"hashCodeSponsors",children:e.sponsor_text}),Object(a.jsx)(j.a,{className:"hashCodeDescription",children:e.description}),Object(a.jsxs)(d.a,{container:!0,spacing:3,style:{marginTop:20},justify:"center",children:[Object(a.jsx)(d.a,{item:!0,xs:12,sm:4,children:Object(a.jsx)("img",{style:{width:"95%"},src:"".concat(e.poster_link)})}),Object(a.jsx)(d.a,{item:!0,xs:12,sm:8,children:Object(a.jsx)(b.a,{autoPlay:!0,autoPlayInterval:"3000",buttonsDisabled:!0,children:e.image_links.map((function(e){return Object(a.jsx)(O,{img:"".concat(e)},e)}))})})]})]})},e.event_name)})):Object(a.jsxs)("div",{className:e.spinnerTextStyle,children:[Object(a.jsx)(j.a,{style:{fontSize:"1.5rem"},children:"Loading Data"})," ",Object(a.jsx)(p.a,{style:{color:"#7cb342",marginTop:"1em"}})]})})]})}}},[["b9ZP",0,2,1,3,5,6,4]]]);