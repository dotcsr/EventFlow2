(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[988],{9216:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/client/populars",function(){return s(7214)}])},5241:function(e,t,s){"use strict";var i=s(5893);s(7294),t.Z=e=>{let{placeholder:t,name:s,value:n,onChange:r}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("input",{name:s,value:n,onChange:r,className:"py-2 rounded-sm bg-slate-700 text-slate-300 px-2 text-md font-normal w-full outline-blue-600",placeholder:t})})}},3658:function(e,t,s){"use strict";s.d(t,{Z:function(){return u}});var i=s(5893),n=s(7294),r=s(7596),l=s(1649),a=e=>{let{handleMenu:t}=e,s=(0,l.v9)(r.dy);return(0,i.jsxs)("div",{className:"relative flex px-5 h-12 bg-stone-800 text-white items-center justify-between",children:[(0,i.jsx)("div",{onClick:t,children:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})})}),(0,i.jsx)("div",{children:"EVENTFLOW"}),(0,i.jsx)("div",{children:null==s?void 0:s.username})]})},c=s(1664),d=s.n(c),o=s(1163),x=()=>{let e=(0,l.I0)(),t=(0,o.useRouter)(),s=(0,l.v9)(r.dy);return console.log("\uD83D\uDE80 ~ file: Sidebar.tsx:11 ~ Sidebar ~ selecteduser:",s),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"absolute md:relative top-0 flex flex-col gap-3 w-[250px] min-h-[calc(100vh-48px)] px-7 py-10 bg-stone-950 text-white",children:[(null==s?void 0:s.userrole)==1&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d(),{href:"/admin/validate",children:"Validar"}),(0,i.jsx)(d(),{href:"/admin/users",children:"Buscar Usuarios"})]}),(null==s?void 0:s.userrole)==2&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d(),{href:"/organizator/generalview",children:"Vista General"}),(0,i.jsx)(d(),{href:"/organizator/validate",children:"Validaciones Pendientes"}),(0,i.jsx)(d(),{href:"/organizator/events",children:"Mis Eventos"})]}),(null==s?void 0:s.userrole)==3&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d(),{href:"/client/populars",children:"Populares"}),(0,i.jsx)(d(),{href:"/client/tickets",children:"Mis entradas"})]}),(0,i.jsx)("div",{className:"cursor-pointer",onClick:()=>{e(r.n0.logout()),t.push("/login")},children:"Cerrar Sesi\xf3n"})]})})},u=e=>{let{children:t}=e,[s,r]=(0,n.useState)(!1);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a,{handleMenu:()=>r(!s)}),(0,i.jsxs)("div",{className:"relative md:flex bg-stone-700 text-white min-h-[calc(100vh-48px)]",children:[s&&(0,i.jsx)(x,{}),(0,i.jsx)("div",{className:"p-5 w-full mt-5",children:t})]})]})}},3489:function(e,t,s){"use strict";var i=s(5893);s(7294),t.Z=e=>{let{children:t,title:s,handleClose:n}=e;return(0,i.jsx)("div",{className:"absolute z-10 w-screen h-screen flex justify-center items-center bg-stone-950 bg-opacity-90",children:(0,i.jsxs)("div",{className:"bg-stone-300 w-10/12 md:w-7/12 rounded-md min-h-[200px] p-5",children:[(0,i.jsxs)("div",{className:"border-b-[1px] uppercase flex justify-between",children:[(0,i.jsx)("h2",{className:"text-lg font-semibold",children:s}),(0,i.jsx)("div",{className:"text-red-600 rounded-full flex justify-center items-center w-6 h-6 cursor-pointer hover:bg-red-600 hover:text-red-100",onClick:n,children:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1,stroke:"currentColor",className:"w-5 h-5",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})})]}),t]})})}},7214:function(e,t,s){"use strict";s.r(t);var i=s(5893),n=s(5241),r=s(3658),l=s(3489),a=s(1472),c=s(9629),d=s(1850),o=s(7596),x=s(5675),u=s.n(x),h=s(7294),p=s(1649);let v={idticket:0,idprice:0,idclient:0,ticketdate:"2000-01-01",qrcode:"",quantitybought:0,quantitypresent:0,state:0},m={idevent:0,idorganizer:0,eventday:"",eventtitle:"",capacity:0,mustbeidentified:!1,department:"",province:"",district:"",address:"",isvirtual:!1,img:"",state:0};t.default=()=>{var e;let t=(0,p.I0)(),{tickets:s}=(0,p.v9)(d.Tz),{user:x}=(0,p.v9)(o.YN),{prices:j}=(0,p.v9)(c.W1),{allevents:f}=(0,p.v9)(a.pS),[g,w]=(0,h.useState)(0),[N,b]=(0,h.useState)(1),[y,k]=(0,h.useState)({show:!1,ticket:v,event:m,detail:!1}),C=s.map(e=>{let t={...e};return j.forEach(s=>{e.idprice===s.idprice&&(t.price=s)}),t}),E=f.map(e=>{let t=0,s={...e};C.forEach(s=>{var i;(null===(i=s.price)||void 0===i?void 0:i.idevent)===e.idevent&&(t+=s.quantitybought)});let i=j.filter(t=>t.idevent===e.idevent);return s.selled=t,s.prices=i,s}),_=e=>{k({...y,event:e,show:!0})},F=e=>{k({...y,ticket:{...y.ticket,idprice:e.idprice},detail:!0}),w(e.price)};return(0,i.jsxs)(i.Fragment,{children:[y.show&&(0,i.jsxs)(l.Z,{title:y.event.eventtitle,handleClose:()=>k({...y,show:!1}),children:[(0,i.jsx)(u(),{alt:"Imagen",src:"/".concat(y.event.img),width:400,height:400,className:"mx-auto my-2"}),(0,i.jsxs)("p",{className:"text-center",children:["D\xeda: ",y.event.eventday]}),(0,i.jsxs)("p",{className:"text-center",children:["Lugar ",y.event.address]}),(0,i.jsxs)("p",{className:"text-center",children:["Entradas disponibles: ",y.event.capacity&&y.event.selled?y.event.capacity-y.event.selled>=11?"M\xe1s de 10 entradas":y.event.capacity-y.event.selled:"Disponible"]}),(0,i.jsxs)("div",{className:"text-center flex gap-3",children:["Precios:",null===(e=y.event.prices)||void 0===e?void 0:e.map(e=>(0,i.jsx)("div",{onClick:()=>F(e),className:"cursor-pointer bg-purple-500 w-fit px-3 py-2 rounded text-white",children:(0,i.jsx)("p",{className:"pl-2",children:"".concat(e.price,".00")})},e.idprice))]}),y.detail&&(0,i.jsxs)("div",{className:"mt-3 flex justify-around flex-col",children:[(0,i.jsx)("h2",{className:"font-bold text-lg uppercase my-3",children:"Elije su medio de pago"}),(0,i.jsxs)("div",{className:"flex gap-5",children:[(0,i.jsxs)("div",{className:"flex flex-col p-5 mx-auto border-[1px] rounded bg-stone-200",children:[(0,i.jsx)("p",{children:"Tarjeta Master Card"}),(0,i.jsx)("p",{children:"74458*****748*****4"})]}),(0,i.jsx)("div",{className:"flex flex-col p-5 mx-auto border-[1px] rounded bg-stone-200 justify-center cursor-pointer",children:(0,i.jsx)("p",{children:"A\xf1adir Tarjeta"})})]}),"Cantidad ",(0,i.jsx)(n.Z,{name:"",onChange:e=>{b(+e.target.value)},placeholder:"1",value:"".concat(N)}),(0,i.jsxs)("p",{className:"text-right font-semibold text-lg my-2",children:["Total: S/ ",N*g,".00"]}),(0,i.jsx)("button",{onClick:()=>{let e=new Date,i="".concat(e.getUTCFullYear(),"-0").concat(e.getUTCMonth(),"-0").concat(e.getDate()),n={idticket:s.length+1,idprice:y.ticket.idprice,idclient:null==x?void 0:x.iduser,ticketdate:i,qrcode:"",quantitybought:N,quantitypresent:0,state:1};t(d.fU.create(n)),k({detail:!1,event:m,show:!1,ticket:v})},className:"bg-green-600 w-fit px-4 py-2 mx-auto rounded text-white",children:"Finalizar Compra"})]})]}),(0,i.jsx)(r.Z,{children:(0,i.jsxs)("div",{className:"p-5 bg-stone-800 w-11/12 mx-auto rounded",children:[(0,i.jsx)("h2",{className:"text-lg mb-2 mt-5",children:"Pr\xf3ximos Eventos"}),(0,i.jsx)("div",{className:"mx-auto flex flex-wrap gap-5",children:E.map(e=>(0,i.jsxs)("div",{onClick:()=>_(e),className:"cursor-pointer w-60 flex flex-col items-center justify-center",children:[(0,i.jsx)(u(),{src:"/".concat(e.img),alt:"Imagen",width:400,height:400}),(0,i.jsxs)("span",{className:"text-sm",children:[e.eventtitle," - ",e.eventday]})]},e.idevent))})]})})]})}},1163:function(e,t,s){e.exports=s(6885)}},function(e){e.O(0,[664,675,774,888,179],function(){return e(e.s=9216)}),_N_E=e.O()}]);