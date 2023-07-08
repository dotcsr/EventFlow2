exports.id = 622;
exports.ids = [622];
exports.modules = {

/***/ 1472:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   dF: () => (/* binding */ actionAllevents),
/* harmony export */   pS: () => (/* binding */ selectAllevents)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5395);

const { createSlice } = __webpack_require__(5184);
const initialState = {
    allevents: _types__WEBPACK_IMPORTED_MODULE_0__/* .DATAALLEVENTS */ .eO,
    status: "idle",
    error: null
};
const alleventSlice = createSlice({
    name: "allevent",
    initialState,
    reducers: {
        validate (state, action) {
            const events = state.allevents.map((e)=>{
                if (e.idevent === action.payload.idevent) {
                    e.state = 1;
                }
                return e;
            });
            state.allevents = events;
        },
        decline (state, action) {
            const events = state.allevents.map((e)=>{
                if (e.idevent === action.payload.idevent) {
                    e.state = 8;
                }
                return e;
            });
            state.allevents = events;
        },
        create (state, action) {
            console.log("creando ando");
            state.allevents.push(action.payload);
        },
        update (state, action) {
            const events = state.allevents.map((e)=>{
                if (e.idevent === action.payload.idevent) {
                    return action.payload;
                }
                return e;
            });
            state.allevents = events;
        }
    }
});
const selectAllevents = (state)=>state.allevents;
const actionAllevents = alleventSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (alleventSlice.reducer);


/***/ }),

/***/ 1656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P7: () => (/* binding */ selectPeople),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export actionPeople */
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5395);

const { createSlice } = __webpack_require__(5184);
const initialState = {
    people: _types__WEBPACK_IMPORTED_MODULE_0__/* .DATAPEOPLE */ .d9,
    status: "idle",
    error: null
};
const peopleSlice = createSlice({
    name: "people",
    initialState,
    reducers: {
        add (state, action) {
            console.log(state);
        // state.people.push(action.payload)
        },
        update (state, action) {
        // const arr = state.people.map(p=>{
        //     if (p.idperson===action.payload.idperson) {
        //         return action.payload
        //     }
        //     return p
        // })
        // state.people=arr
        }
    }
});
const selectPeople = (state)=>state.people;
const actionPeople = peopleSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (peopleSlice.reducer);


/***/ }),

/***/ 9629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W1: () => (/* binding */ selectPrices),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export actionPrices */
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5395);

const { createSlice } = __webpack_require__(5184);
const initialState = {
    prices: _types__WEBPACK_IMPORTED_MODULE_0__/* .DATAPRICES */ .nh,
    status: "idle",
    error: null
};
const priceSlice = createSlice({
    name: "price",
    initialState,
    reducers: {
        add (state, action) {
            console.log(state);
        },
        update (state, action) {
            console.log("en update");
        }
    }
});
const selectPrices = (state)=>state.prices;
const actionPrices = priceSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (priceSlice.reducer);


/***/ }),

/***/ 1850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tz: () => (/* binding */ selectTickets),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   fU: () => (/* binding */ actionTickets)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5395);

const { createSlice } = __webpack_require__(5184);
const initialState = {
    tickets: _types__WEBPACK_IMPORTED_MODULE_0__/* .DATATICKETS */ .dQ,
    status: "idle",
    error: null
};
const ticketSlice = createSlice({
    name: "ticket",
    initialState,
    reducers: {
        create (state, action) {
            state.tickets.push(action.payload);
        },
        update (state, action) {
            console.log("en update");
        }
    }
});
const selectTickets = (state)=>state.tickets;
const actionTickets = ticketSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ticketSlice.reducer);


/***/ }),

/***/ 7596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   YN: () => (/* binding */ selectUsers),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   dy: () => (/* binding */ selectUser),
/* harmony export */   n0: () => (/* binding */ actionUsers)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5395);

const { createSlice } = __webpack_require__(5184);
const initialState = {
    users: _types__WEBPACK_IMPORTED_MODULE_0__/* .DATAUSERS */ .$s,
    isLogged: false,
    user: null,
    status: "idle",
    error: null
};
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login (state, action) {
            state.status = "loading";
            console.log("login");
            const payload = action.payload;
            const selectuser = state.users.filter((u)=>{
                return u.username === payload.username && u.userpass === payload.userpass;
            });
            if (selectuser.length !== 1) {
                state.status = "succeeded";
                state.error = "Usuario y/o contrase\xf1a erradas.";
                return;
            }
            const myfuturecookie = `idperson=${selectuser[0].idperson};max-age=${60 * 60 * 11}; path=/; samesite=strict`;
            document.cookie = myfuturecookie;
            state.status = "succeeded";
            state.error = null;
            state.isLogged = true;
            state.user = selectuser[0];
        },
        logout (state, action) {
            state.status = "loading";
            state.user = null;
            state.isLogged = false;
            state.error = null;
            const token = document.cookie.replace("idperson=", "");
            document.cookie = `idperson=${token};Path=/;Expires=Thu, 01 Jan 1970 00:00:01 GMT`;
            state.status = "succeeded";
        },
        validate (state, action) {
            const token = +document.cookie.replace("idperson=", "");
            if (Boolean(token) === false) {
                return;
            }
            const selectuser = state.users.filter((u)=>{
                return u.idperson === token;
            });
            if (selectuser.length !== 1) {
                state.status = "succeeded";
                state.error = "Usuario y/o contrase\xf1a erradas.";
                return;
            }
            state.status = "succeeded";
            state.error = null;
            state.isLogged = true;
            state.user = selectuser[0];
        },
        validateuser (state, action) {
            const updatedusers = state.users.map((u)=>{
                if (u.iduser === action.payload.iduser) {
                    u.state = 1;
                }
                return u;
            });
            state.users = updatedusers;
        },
        decline (state, action) {
            const updatedusers = state.users.map((u)=>{
                if (u.iduser === action.payload.iduser) {
                    u.state = 8;
                }
                return u;
            });
            state.users = updatedusers;
        },
        update (state, action) {
            const updatedusers = state.users.map((u)=>{
                if (u.iduser === action.payload.iduser) {
                    return action.payload;
                }
                return u;
            });
            state.users = updatedusers;
        }
    }
});
const selectUsers = (state)=>state.users;
const selectUser = (state)=>state.users.user;
const actionUsers = userSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);


/***/ }),

/***/ 3275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: ./features/peopleSlice.ts
var peopleSlice = __webpack_require__(1656);
// EXTERNAL MODULE: ./features/usersSlice.ts
var usersSlice = __webpack_require__(7596);
// EXTERNAL MODULE: ./types/index.ts
var types = __webpack_require__(5395);
;// CONCATENATED MODULE: ./features/alertsSlice.ts

const { createSlice } = __webpack_require__(5184);
const initialState = {
    alerts: types/* DATAALERTS */.rb,
    status: "idle",
    error: null
};
const alertSlice = createSlice({
    name: "alert",
    initialState,
    reducers: {
        add (state, action) {
            console.log(state);
        },
        update (state, action) {
            console.log("en update");
        }
    }
});
const selectAlerts = (state)=>state.alerts;
const actionAlerts = alertSlice.actions;
/* harmony default export */ const alertsSlice = (alertSlice.reducer);

// EXTERNAL MODULE: ./features/alleventsSlice.ts
var alleventsSlice = __webpack_require__(1472);
;// CONCATENATED MODULE: ./features/paymentsSlice.ts

const { createSlice: paymentsSlice_createSlice } = __webpack_require__(5184);
const paymentsSlice_initialState = {
    payments: types/* DATAPAYMENTS */.x7,
    status: "idle",
    error: null
};
const paymentSlice = paymentsSlice_createSlice({
    name: "payment",
    initialState: paymentsSlice_initialState,
    reducers: {
        add (state, action) {
            console.log(state);
        },
        update (state, action) {
            console.log("en update");
        }
    }
});
const selectPayments = (state)=>state.payments;
const actionPayments = paymentSlice.actions;
/* harmony default export */ const paymentsSlice = (paymentSlice.reducer);

// EXTERNAL MODULE: ./features/pricesSlice.ts
var pricesSlice = __webpack_require__(9629);
// EXTERNAL MODULE: ./features/ticketsSlice.ts
var ticketsSlice = __webpack_require__(1850);
;// CONCATENATED MODULE: ./features/votesSlice.ts

const { createSlice: votesSlice_createSlice } = __webpack_require__(5184);
const votesSlice_initialState = {
    votes: types/* DATAVOTES */.GW,
    status: "idle",
    error: null
};
const voteSlice = votesSlice_createSlice({
    name: "vote",
    initialState: votesSlice_initialState,
    reducers: {
        add (state, action) {
            console.log(state);
        },
        update (state, action) {
            console.log("en update");
        }
    }
});
const selectVotes = (state)=>state.votes;
const actionVotes = voteSlice.actions;
/* harmony default export */ const votesSlice = (voteSlice.reducer);

;// CONCATENATED MODULE: ./features/store.ts









const STORE = (0,toolkit_.configureStore)({
    reducer: {
        alerts: alertsSlice,
        allevents: alleventsSlice/* default */.ZP,
        payments: paymentsSlice,
        people: peopleSlice/* default */.ZP,
        prices: pricesSlice/* default */.ZP,
        tickets: ticketsSlice/* default */.ZP,
        users: usersSlice/* default */.ZP,
        votes: votesSlice
    }
});

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
;// CONCATENATED MODULE: ./pages/_app.tsx







function App({ Component, pageProps }) {
    (0,external_react_.useEffect)(()=>{
        STORE.dispatch(usersSlice/* actionUsers */.n0.validate());
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx(external_styled_components_.StyleSheetManager, {
        shouldForwardProp: (prop)=>prop !== "responsive",
        children: /*#__PURE__*/ jsx_runtime.jsx(external_react_redux_.Provider, {
            store: STORE,
            children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            })
        })
    });
}


/***/ }),

/***/ 3162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);


function Document() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
        lang: "en",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 5395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $s: () => (/* binding */ DATAUSERS),
/* harmony export */   GW: () => (/* binding */ DATAVOTES),
/* harmony export */   d9: () => (/* binding */ DATAPEOPLE),
/* harmony export */   dQ: () => (/* binding */ DATATICKETS),
/* harmony export */   eO: () => (/* binding */ DATAALLEVENTS),
/* harmony export */   nh: () => (/* binding */ DATAPRICES),
/* harmony export */   rb: () => (/* binding */ DATAALERTS),
/* harmony export */   x7: () => (/* binding */ DATAPAYMENTS)
/* harmony export */ });
const DATAPEOPLE = [
    {
        idperson: 1,
        personnames: "Andres",
        personlastnames: "Palacios Munive",
        documenttype: 1,
        documentnumber: "12345678",
        address: "Calle Las Dalias 458",
        department: "Lima",
        province: "Lima",
        district: "Ate"
    },
    {
        idperson: 2,
        personnames: "Lorena",
        personlastnames: "Bautista Olivares",
        documenttype: 1,
        documentnumber: "23456789",
        address: "Calle Los Ingenieros 123",
        department: "Lima",
        province: "Lima",
        district: "Miraflores"
    },
    {
        idperson: 3,
        personnames: "Nayeli",
        personlastnames: "Perez Huaman",
        documenttype: 1,
        documentnumber: "34567891",
        address: "Av. Alfonso Ugarte 7815",
        department: "Lima",
        province: "Lima",
        district: "Cercado de Lima"
    },
    {
        idperson: 4,
        personnames: "Macarena",
        personlastnames: "Flores Tapia",
        documenttype: 1,
        documentnumber: "45678912",
        address: "Jr. Nevado Salcantay Mz. G lote 20",
        department: "Lima",
        province: "Lima",
        district: "Santa Anita"
    },
    {
        idperson: 5,
        personnames: "Alan",
        personlastnames: "Garcia Medina",
        documenttype: 1,
        documentnumber: "56789123",
        address: "Av. Los H\xe9rores",
        department: "Lima",
        province: "Lima",
        district: "Chosica"
    }
];
const DATAUSERS = [
    {
        iduser: 1,
        idperson: 1,
        state: 1,
        userrole: 1,
        username: "andres",
        userpass: "andres123"
    },
    {
        iduser: 2,
        idperson: 2,
        state: 1,
        userrole: 2,
        username: "lorena",
        userpass: "lorena123"
    },
    {
        iduser: 3,
        idperson: 3,
        state: 1,
        userrole: 3,
        username: "nayeli",
        userpass: "nayeli123"
    },
    {
        iduser: 4,
        idperson: 4,
        state: 1,
        userrole: 3,
        username: "macarena",
        userpass: "macarena123"
    },
    {
        iduser: 5,
        idperson: 5,
        state: 7,
        userrole: 3,
        username: "alan",
        userpass: "alan123",
        required: "2023-07-07"
    }
];
const DATAALLEVENTS = [
    {
        idevent: 1,
        idorganizer: 2,
        eventday: "2023-07-01",
        eventtitle: "Hablando Huevadas",
        capacity: 1000,
        mustbeidentified: false,
        department: "Lima",
        province: "Lima",
        district: "Miraflores",
        address: "Av. Petit Thouars 4550",
        isvirtual: false,
        img: "img1.png",
        state: 1
    },
    {
        idevent: 2,
        idorganizer: 2,
        eventday: "2023-07-02",
        eventtitle: "Chapa tu Money",
        capacity: 1000,
        mustbeidentified: false,
        department: "Lima",
        province: "Lima",
        district: "Miraflores",
        address: "Av. Petit Thouars 4550",
        isvirtual: false,
        img: "img2.png",
        state: 1
    },
    {
        idevent: 3,
        idorganizer: 2,
        eventday: "2023-07-03",
        eventtitle: "Gatada de Vatos",
        capacity: 1000,
        mustbeidentified: false,
        department: "Lima",
        province: "Lima",
        district: "Miraflores",
        address: "Av. Petit Thouars 4550",
        isvirtual: false,
        img: "img3.png",
        state: 1
    },
    {
        idevent: 4,
        idorganizer: 2,
        eventday: "2023-07-08",
        eventtitle: "Hablando Huevadas",
        capacity: 1000,
        mustbeidentified: false,
        department: "Lima",
        province: "Lima",
        district: "Miraflores",
        address: "Av. Petit Thouars 4550",
        isvirtual: false,
        img: "img1.png",
        state: 7
    }
];
const DATAPRICES = [
    {
        idprice: 1,
        idevent: 1,
        tickettype: 1,
        price: 169
    },
    {
        idprice: 2,
        idevent: 1,
        tickettype: 2,
        price: 149
    },
    {
        idprice: 3,
        idevent: 1,
        tickettype: 3,
        price: 129
    },
    {
        idprice: 4,
        idevent: 2,
        tickettype: 1,
        price: 149
    },
    {
        idprice: 5,
        idevent: 2,
        tickettype: 2,
        price: 119
    },
    {
        idprice: 6,
        idevent: 2,
        tickettype: 3,
        price: 89
    },
    {
        idprice: 7,
        idevent: 3,
        tickettype: 1,
        price: 69
    },
    {
        idprice: 8,
        idevent: 3,
        tickettype: 2,
        price: 49
    },
    {
        idprice: 9,
        idevent: 3,
        tickettype: 3,
        price: 29
    },
    {
        idprice: 10,
        idevent: 4,
        tickettype: 1,
        price: 169
    },
    {
        idprice: 11,
        idevent: 4,
        tickettype: 2,
        price: 149
    },
    {
        idprice: 12,
        idevent: 4,
        tickettype: 3,
        price: 129
    }
];
const DATATICKETS = [
    {
        idticket: 1,
        idprice: 1,
        idclient: 3,
        ticketdate: "2023-06-30",
        qrcode: "",
        quantitybought: 3,
        quantitypresent: 0,
        state: 6
    },
    {
        idticket: 2,
        idprice: 4,
        idclient: 3,
        ticketdate: "2023-06-30",
        qrcode: "",
        quantitybought: 3,
        quantitypresent: 0,
        state: 6
    },
    {
        idticket: 3,
        idprice: 1,
        idclient: 4,
        ticketdate: "2023-06-20",
        qrcode: "",
        quantitybought: 2,
        quantitypresent: 0,
        state: 6
    }
];
const DATAPAYMENTS = [
    {
        idpayment: 1,
        idticket: 1,
        paydate: "2023-06-30",
        amount: 507
    },
    {
        idpayment: 2,
        idticket: 2,
        paydate: "2023-06-30",
        amount: 447
    },
    {
        idpayment: 3,
        idticket: 3,
        paydate: "2023-06-20",
        amount: 338
    }
];
const DATAALERTS = [];
const DATAVOTES = [];
 // tickettype: 1 diamante, 2 oro, 3 plata
 // state: 1 activo, 2 inactivo, 3 bloqueado, 4 eliminado, 5 evento terminado, 6 ticket pagado, 7 pendiente de aprobacion, 8 rechazado
 // rol: 1 admin, 2 evetflower, 3 participante, 4 security


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ })

};
;