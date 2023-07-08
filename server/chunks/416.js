"use strict";
exports.id = 416;
exports.ids = [416];
exports.modules = {

/***/ 3658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ layout_Layout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./features/usersSlice.ts
var usersSlice = __webpack_require__(7596);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./components/layout/Header.tsx




const Header = ({ handleMenu })=>{
    const selecteduser = (0,external_react_redux_.useSelector)(usersSlice/* selectUser */.dy);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "relative flex px-5 h-12 bg-stone-800 text-white items-center justify-between",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                onClick: handleMenu,
                children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    className: "w-6 h-6",
                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                children: "EVENTFLOW"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                children: selecteduser?.username
            })
        ]
    });
};
/* harmony default export */ const layout_Header = (Header);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/layout/Sidebar.tsx






const Sidebar = ()=>{
    const dispatch = (0,external_react_redux_.useDispatch)();
    const router = (0,router_.useRouter)();
    const selecteduser = (0,external_react_redux_.useSelector)(usersSlice/* selectUser */.dy);
    console.log("\uD83D\uDE80 ~ file: Sidebar.tsx:11 ~ Sidebar ~ selecteduser:", selecteduser);
    const handle = ()=>{
        dispatch(usersSlice/* actionUsers */.n0.logout());
        router.push("/login");
    };
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "absolute md:relative top-0 flex flex-col gap-3 w-[250px] min-h-[calc(100vh-48px)] px-7 py-10 bg-stone-950 text-white",
            children: [
                selecteduser?.userrole == 1 && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/admin/validate",
                            children: "Validar"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/admin/users",
                            children: "Buscar Usuarios"
                        })
                    ]
                }),
                selecteduser?.userrole == 2 && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/organizator/generalview",
                            children: "Vista General"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/organizator/validate",
                            children: "Validaciones Pendientes"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/organizator/events",
                            children: "Mis Eventos"
                        })
                    ]
                }),
                selecteduser?.userrole == 3 && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/client/populars",
                            children: "Populares"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/client/tickets",
                            children: "Mis entradas"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "cursor-pointer",
                    onClick: handle,
                    children: "Cerrar Sesi\xf3n"
                })
            ]
        })
    });
};
/* harmony default export */ const layout_Sidebar = (Sidebar);

;// CONCATENATED MODULE: ./components/layout/Layout.tsx




const Layout = ({ children })=>{
    const [show, setShow] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(layout_Header, {
                handleMenu: ()=>setShow(!show)
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "relative md:flex bg-stone-700 text-white min-h-[calc(100vh-48px)]",
                children: [
                    show && /*#__PURE__*/ jsx_runtime.jsx(layout_Sidebar, {}),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "p-5 w-full mt-5",
                        children: children
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const layout_Layout = (Layout);


/***/ })

};
;