(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[246],{8587:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/organizator/generalview",function(){return n(3521)}])},3658:function(e,s,n){"use strict";n.d(s,{Z:function(){return h}});var r=n(5893),i=n(7294),t=n(7596),l=n(1649),a=e=>{let{handleMenu:s}=e,n=(0,l.v9)(t.dy);return(0,r.jsxs)("div",{className:"relative flex px-5 h-12 bg-stone-800 text-white items-center justify-between",children:[(0,r.jsx)("div",{onClick:s,children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})})}),(0,r.jsx)("div",{children:"EVENTFLOW"}),(0,r.jsx)("div",{children:null==n?void 0:n.username})]})},c=n(1664),d=n.n(c),o=n(1163),x=()=>{let e=(0,l.I0)(),s=(0,o.useRouter)(),n=(0,l.v9)(t.dy);return console.log("\uD83D\uDE80 ~ file: Sidebar.tsx:11 ~ Sidebar ~ selecteduser:",n),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"absolute md:relative top-0 flex flex-col gap-3 w-[250px] min-h-[calc(100vh-48px)] px-7 py-10 bg-stone-950 text-white",children:[(null==n?void 0:n.userrole)==1&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d(),{href:"/admin/validate",children:"Validar"}),(0,r.jsx)(d(),{href:"/admin/users",children:"Buscar Usuarios"})]}),(null==n?void 0:n.userrole)==2&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d(),{href:"/organizator/generalview",children:"Vista General"}),(0,r.jsx)(d(),{href:"/organizator/validate",children:"Validaciones Pendientes"}),(0,r.jsx)(d(),{href:"/organizator/events",children:"Mis Eventos"})]}),(null==n?void 0:n.userrole)==3&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d(),{href:"/client/populars",children:"Populares"}),(0,r.jsx)(d(),{href:"/client/tickets",children:"Mis entradas"})]}),(0,r.jsx)("div",{className:"cursor-pointer",onClick:()=>{e(t.n0.logout()),s.push("/login")},children:"Cerrar Sesi\xf3n"})]})})},h=e=>{let{children:s}=e,[n,t]=(0,i.useState)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{handleMenu:()=>t(!n)}),(0,r.jsxs)("div",{className:"relative md:flex bg-stone-700 text-white min-h-[calc(100vh-48px)]",children:[n&&(0,r.jsx)(x,{}),(0,r.jsx)("div",{className:"p-5 w-full mt-5",children:s})]})]})}},3521:function(e,s,n){"use strict";n.r(s);var r=n(5893),i=n(3658),t=n(1472),l=n(9629),a=n(1850),c=n(5675),d=n.n(c);n(7294);var o=n(1649);s.default=()=>{let{tickets:e}=(0,o.v9)(a.Tz),{prices:s}=(0,o.v9)(l.W1),{allevents:n}=(0,o.v9)(t.pS),c=e.map(e=>{let n={...e};return s.forEach(s=>{e.idprice===s.idprice&&(n.price=s)}),n}),x=n.map(e=>{let s=0,n={...e};return c.forEach(n=>{var r;(null===(r=n.price)||void 0===r?void 0:r.idevent)===e.idevent&&(s+=n.quantitybought)}),n.selled=s,n});return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(i.Z,{children:(0,r.jsxs)("div",{className:"p-5 bg-stone-800 w-11/12 mx-auto rounded",children:[(0,r.jsxs)("div",{className:"mx-auto flex flex-wrap gap-5 justify-center",children:[(0,r.jsx)(d(),{src:"/ticket.png",width:500,height:400,alt:"Ticket"}),(0,r.jsx)("div",{className:"flex gap-8",children:x.map(e=>(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsx)("div",{className:"w-20 h-20 rounded-full bg-orange-400 flex items-center justify-center",children:e.selled}),(0,r.jsx)("span",{className:"text-center",children:e.eventtitle})]},e.idevent))})]}),(0,r.jsx)("h2",{className:"text-lg mb-2 mt-5",children:"Pr\xf3ximos Eventos"}),(0,r.jsx)("div",{className:"mx-auto flex flex-wrap gap-5",children:n.map(e=>(0,r.jsxs)("div",{className:"w-60 flex flex-col items-center justify-center",children:[(0,r.jsx)(d(),{src:"/".concat(e.img),alt:"Imagen",width:400,height:400}),(0,r.jsxs)("span",{className:"text-sm",children:[e.eventtitle," - ",e.eventday]})]},e.idevent))})]})})})}},1163:function(e,s,n){e.exports=n(6885)}},function(e){e.O(0,[664,675,774,888,179],function(){return e(e.s=8587)}),_N_E=e.O()}]);