import{c as l,h as s,Q as p}from"./QBtn.a7ccbd1a.js";import{c as n,h as u,d,r as f,l as m,m as _,n as v,p as t,f as a,q as Q,t as b,u as h}from"./index.f65501bb.js";import{Q as w,a as C,b as T}from"./QLayout.66cf0beb.js";var k=l({name:"QToolbarTitle",props:{shrink:Boolean},setup(r,{slots:e}){const o=n(()=>"q-toolbar__title ellipsis"+(r.shrink===!0?" col-shrink":""));return()=>u("div",{class:o.value},s(e.default))}}),B=l({name:"QToolbar",props:{inset:Boolean},setup(r,{slots:e}){const o=n(()=>"q-toolbar row no-wrap items-center"+(r.inset===!0?" q-toolbar--inset":""));return()=>u("div",{class:o.value,role:"toolbar"},s(e.default))}});const y=d({__name:"MainLayout",setup(r){const e=f(!1);function o(){e.value=!e.value}return(i,g)=>{const c=m("router-view");return _(),v(T,{view:"lHh Lpr lFf"},{default:t(()=>[a(w,{elevated:""},{default:t(()=>[a(B,null,{default:t(()=>[a(p,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:o}),a(k,null,{default:t(()=>[Q(" \u5E15\u9C81go ")]),_:1}),b("div",null,"Quasar v"+h(i.$q.version),1)]),_:1})]),_:1}),a(C,null,{default:t(()=>[a(c)]),_:1})]),_:1})}}});export{y as default};