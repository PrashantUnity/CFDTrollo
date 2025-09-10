var pp = e => {
    throw TypeError(e)
}
;
var ru = (e, t, r) => t.has(e) || pp("Cannot " + r);
var I = (e, t, r) => (ru(e, t, "read from private field"),
r ? r.call(e) : t.get(e))
  , ne = (e, t, r) => t.has(e) ? pp("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r)
  , Y = (e, t, r, n) => (ru(e, t, "write to private field"),
n ? n.call(e, r) : t.set(e, r),
r)
  , Fe = (e, t, r) => (ru(e, t, "access private method"),
r);
var ka = (e, t, r, n) => ({
    set _(o) {
        Y(e, t, o, r)
    },
    get _() {
        return I(e, t, n)
    }
});
function Rw(e, t) {
    for (var r = 0; r < t.length; r++) {
        const n = t[r];
        if (typeof n != "string" && !Array.isArray(n)) {
            for (const o in n)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(n, o);
                    i && Object.defineProperty(e, o, i.get ? i : {
                        enumerable: !0,
                        get: () => n[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        n(o);
    new MutationObserver(o => {
        for (const i of o)
            if (i.type === "childList")
                for (const a of i.addedNodes)
                    a.tagName === "LINK" && a.rel === "modulepreload" && n(a)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function r(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity),
        o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function n(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const i = r(o);
        fetch(o.href, i)
    }
}
)();
function vd(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var ah = {
    exports: {}
}
  , ll = {}
  , sh = {
    exports: {}
}
  , Z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var la = Symbol.for("react.element")
  , Ow = Symbol.for("react.portal")
  , Aw = Symbol.for("react.fragment")
  , Mw = Symbol.for("react.strict_mode")
  , Lw = Symbol.for("react.profiler")
  , jw = Symbol.for("react.provider")
  , Bw = Symbol.for("react.context")
  , Fw = Symbol.for("react.forward_ref")
  , $w = Symbol.for("react.suspense")
  , zw = Symbol.for("react.memo")
  , _w = Symbol.for("react.lazy")
  , mp = Symbol.iterator;
function Uw(e) {
    return e === null || typeof e != "object" ? null : (e = mp && e[mp] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var lh = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , uh = Object.assign
  , ch = {};
function Wo(e, t, r) {
    this.props = e,
    this.context = t,
    this.refs = ch,
    this.updater = r || lh
}
Wo.prototype.isReactComponent = {};
Wo.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Wo.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function dh() {}
dh.prototype = Wo.prototype;
function hd(e, t, r) {
    this.props = e,
    this.context = t,
    this.refs = ch,
    this.updater = r || lh
}
var gd = hd.prototype = new dh;
gd.constructor = hd;
uh(gd, Wo.prototype);
gd.isPureReactComponent = !0;
var vp = Array.isArray
  , fh = Object.prototype.hasOwnProperty
  , yd = {
    current: null
}
  , ph = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function mh(e, t, r) {
    var n, o = {}, i = null, a = null;
    if (t != null)
        for (n in t.ref !== void 0 && (a = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t)
            fh.call(t, n) && !ph.hasOwnProperty(n) && (o[n] = t[n]);
    var s = arguments.length - 2;
    if (s === 1)
        o.children = r;
    else if (1 < s) {
        for (var l = Array(s), u = 0; u < s; u++)
            l[u] = arguments[u + 2];
        o.children = l
    }
    if (e && e.defaultProps)
        for (n in s = e.defaultProps,
        s)
            o[n] === void 0 && (o[n] = s[n]);
    return {
        $$typeof: la,
        type: e,
        key: i,
        ref: a,
        props: o,
        _owner: yd.current
    }
}
function Ww(e, t) {
    return {
        $$typeof: la,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function xd(e) {
    return typeof e == "object" && e !== null && e.$$typeof === la
}
function Vw(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(r) {
        return t[r]
    })
}
var hp = /\/+/g;
function nu(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Vw("" + e.key) : t.toString(36)
}
function rs(e, t, r, n, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var a = !1;
    if (e === null)
        a = !0;
    else
        switch (i) {
        case "string":
        case "number":
            a = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case la:
            case Ow:
                a = !0
            }
        }
    if (a)
        return a = e,
        o = o(a),
        e = n === "" ? "." + nu(a, 0) : n,
        vp(o) ? (r = "",
        e != null && (r = e.replace(hp, "$&/") + "/"),
        rs(o, t, r, "", function(u) {
            return u
        })) : o != null && (xd(o) && (o = Ww(o, r + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(hp, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (a = 0,
    n = n === "" ? "." : n + ":",
    vp(e))
        for (var s = 0; s < e.length; s++) {
            i = e[s];
            var l = n + nu(i, s);
            a += rs(i, t, r, l, o)
        }
    else if (l = Uw(e),
    typeof l == "function")
        for (e = l.call(e),
        s = 0; !(i = e.next()).done; )
            i = i.value,
            l = n + nu(i, s++),
            a += rs(i, t, r, l, o);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return a
}
function Ta(e, t, r) {
    if (e == null)
        return e;
    var n = []
      , o = 0;
    return rs(e, n, "", "", function(i) {
        return t.call(r, i, o++)
    }),
    n
}
function Hw(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(r) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = r)
        }, function(r) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = r)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Qe = {
    current: null
}
  , ns = {
    transition: null
}
  , Gw = {
    ReactCurrentDispatcher: Qe,
    ReactCurrentBatchConfig: ns,
    ReactCurrentOwner: yd
};
function vh() {
    throw Error("act(...) is not supported in production builds of React.")
}
Z.Children = {
    map: Ta,
    forEach: function(e, t, r) {
        Ta(e, function() {
            t.apply(this, arguments)
        }, r)
    },
    count: function(e) {
        var t = 0;
        return Ta(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Ta(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!xd(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
Z.Component = Wo;
Z.Fragment = Aw;
Z.Profiler = Lw;
Z.PureComponent = hd;
Z.StrictMode = Mw;
Z.Suspense = $w;
Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gw;
Z.act = vh;
Z.cloneElement = function(e, t, r) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var n = uh({}, e.props)
      , o = e.key
      , i = e.ref
      , a = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
        a = yd.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var s = e.type.defaultProps;
        for (l in t)
            fh.call(t, l) && !ph.hasOwnProperty(l) && (n[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        n.children = r;
    else if (1 < l) {
        s = Array(l);
        for (var u = 0; u < l; u++)
            s[u] = arguments[u + 2];
        n.children = s
    }
    return {
        $$typeof: la,
        type: e.type,
        key: o,
        ref: i,
        props: n,
        _owner: a
    }
}
;
Z.createContext = function(e) {
    return e = {
        $$typeof: Bw,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: jw,
        _context: e
    },
    e.Consumer = e
}
;
Z.createElement = mh;
Z.createFactory = function(e) {
    var t = mh.bind(null, e);
    return t.type = e,
    t
}
;
Z.createRef = function() {
    return {
        current: null
    }
}
;
Z.forwardRef = function(e) {
    return {
        $$typeof: Fw,
        render: e
    }
}
;
Z.isValidElement = xd;
Z.lazy = function(e) {
    return {
        $$typeof: _w,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Hw
    }
}
;
Z.memo = function(e, t) {
    return {
        $$typeof: zw,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
Z.startTransition = function(e) {
    var t = ns.transition;
    ns.transition = {};
    try {
        e()
    } finally {
        ns.transition = t
    }
}
;
Z.unstable_act = vh;
Z.useCallback = function(e, t) {
    return Qe.current.useCallback(e, t)
}
;
Z.useContext = function(e) {
    return Qe.current.useContext(e)
}
;
Z.useDebugValue = function() {}
;
Z.useDeferredValue = function(e) {
    return Qe.current.useDeferredValue(e)
}
;
Z.useEffect = function(e, t) {
    return Qe.current.useEffect(e, t)
}
;
Z.useId = function() {
    return Qe.current.useId()
}
;
Z.useImperativeHandle = function(e, t, r) {
    return Qe.current.useImperativeHandle(e, t, r)
}
;
Z.useInsertionEffect = function(e, t) {
    return Qe.current.useInsertionEffect(e, t)
}
;
Z.useLayoutEffect = function(e, t) {
    return Qe.current.useLayoutEffect(e, t)
}
;
Z.useMemo = function(e, t) {
    return Qe.current.useMemo(e, t)
}
;
Z.useReducer = function(e, t, r) {
    return Qe.current.useReducer(e, t, r)
}
;
Z.useRef = function(e) {
    return Qe.current.useRef(e)
}
;
Z.useState = function(e) {
    return Qe.current.useState(e)
}
;
Z.useSyncExternalStore = function(e, t, r) {
    return Qe.current.useSyncExternalStore(e, t, r)
}
;
Z.useTransition = function() {
    return Qe.current.useTransition()
}
;
Z.version = "18.3.1";
sh.exports = Z;
var b = sh.exports;
const R = vd(b)
  , hh = Rw({
    __proto__: null,
    default: R
}, [b]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qw = b
  , Kw = Symbol.for("react.element")
  , Qw = Symbol.for("react.fragment")
  , Yw = Object.prototype.hasOwnProperty
  , Xw = qw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , Jw = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function gh(e, t, r) {
    var n, o = {}, i = null, a = null;
    r !== void 0 && (i = "" + r),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
    for (n in t)
        Yw.call(t, n) && !Jw.hasOwnProperty(n) && (o[n] = t[n]);
    if (e && e.defaultProps)
        for (n in t = e.defaultProps,
        t)
            o[n] === void 0 && (o[n] = t[n]);
    return {
        $$typeof: Kw,
        type: e,
        key: i,
        ref: a,
        props: o,
        _owner: Xw.current
    }
}
ll.Fragment = Qw;
ll.jsx = gh;
ll.jsxs = gh;
ah.exports = ll;
var w = ah.exports
  , yh = {
    exports: {}
}
  , vt = {}
  , xh = {
    exports: {}
}
  , wh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(N, T) {
        var B = N.length;
        N.push(T);
        e: for (; 0 < B; ) {
            var H = B - 1 >>> 1
              , $ = N[H];
            if (0 < o($, T))
                N[H] = T,
                N[B] = $,
                B = H;
            else
                break e
        }
    }
    function r(N) {
        return N.length === 0 ? null : N[0]
    }
    function n(N) {
        if (N.length === 0)
            return null;
        var T = N[0]
          , B = N.pop();
        if (B !== T) {
            N[0] = B;
            e: for (var H = 0, $ = N.length, K = $ >>> 1; H < K; ) {
                var X = 2 * (H + 1) - 1
                  , oe = N[X]
                  , we = X + 1
                  , ee = N[we];
                if (0 > o(oe, B))
                    we < $ && 0 > o(ee, oe) ? (N[H] = ee,
                    N[we] = B,
                    H = we) : (N[H] = oe,
                    N[X] = B,
                    H = X);
                else if (we < $ && 0 > o(ee, B))
                    N[H] = ee,
                    N[we] = B,
                    H = we;
                else
                    break e
            }
        }
        return T
    }
    function o(N, T) {
        var B = N.sortIndex - T.sortIndex;
        return B !== 0 ? B : N.id - T.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var a = Date
          , s = a.now();
        e.unstable_now = function() {
            return a.now() - s
        }
    }
    var l = []
      , u = []
      , d = 1
      , c = null
      , f = 3
      , p = !1
      , m = !1
      , v = !1
      , x = typeof setTimeout == "function" ? setTimeout : null
      , g = typeof clearTimeout == "function" ? clearTimeout : null
      , h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function y(N) {
        for (var T = r(u); T !== null; ) {
            if (T.callback === null)
                n(u);
            else if (T.startTime <= N)
                n(u),
                T.sortIndex = T.expirationTime,
                t(l, T);
            else
                break;
            T = r(u)
        }
    }
    function S(N) {
        if (v = !1,
        y(N),
        !m)
            if (r(l) !== null)
                m = !0,
                _(E);
            else {
                var T = r(u);
                T !== null && q(S, T.startTime - N)
            }
    }
    function E(N, T) {
        m = !1,
        v && (v = !1,
        g(D),
        D = -1),
        p = !0;
        var B = f;
        try {
            for (y(T),
            c = r(l); c !== null && (!(c.expirationTime > T) || N && !F()); ) {
                var H = c.callback;
                if (typeof H == "function") {
                    c.callback = null,
                    f = c.priorityLevel;
                    var $ = H(c.expirationTime <= T);
                    T = e.unstable_now(),
                    typeof $ == "function" ? c.callback = $ : c === r(l) && n(l),
                    y(T)
                } else
                    n(l);
                c = r(l)
            }
            if (c !== null)
                var K = !0;
            else {
                var X = r(u);
                X !== null && q(S, X.startTime - T),
                K = !1
            }
            return K
        } finally {
            c = null,
            f = B,
            p = !1
        }
    }
    var C = !1
      , P = null
      , D = -1
      , k = 5
      , O = -1;
    function F() {
        return !(e.unstable_now() - O < k)
    }
    function j() {
        if (P !== null) {
            var N = e.unstable_now();
            O = N;
            var T = !0;
            try {
                T = P(!0, N)
            } finally {
                T ? W() : (C = !1,
                P = null)
            }
        } else
            C = !1
    }
    var W;
    if (typeof h == "function")
        W = function() {
            h(j)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var A = new MessageChannel
          , G = A.port2;
        A.port1.onmessage = j,
        W = function() {
            G.postMessage(null)
        }
    } else
        W = function() {
            x(j, 0)
        }
        ;
    function _(N) {
        P = N,
        C || (C = !0,
        W())
    }
    function q(N, T) {
        D = x(function() {
            N(e.unstable_now())
        }, T)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(N) {
        N.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        m || p || (m = !0,
        _(E))
    }
    ,
    e.unstable_forceFrameRate = function(N) {
        0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : k = 0 < N ? Math.floor(1e3 / N) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return f
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return r(l)
    }
    ,
    e.unstable_next = function(N) {
        switch (f) {
        case 1:
        case 2:
        case 3:
            var T = 3;
            break;
        default:
            T = f
        }
        var B = f;
        f = T;
        try {
            return N()
        } finally {
            f = B
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(N, T) {
        switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            N = 3
        }
        var B = f;
        f = N;
        try {
            return T()
        } finally {
            f = B
        }
    }
    ,
    e.unstable_scheduleCallback = function(N, T, B) {
        var H = e.unstable_now();
        switch (typeof B == "object" && B !== null ? (B = B.delay,
        B = typeof B == "number" && 0 < B ? H + B : H) : B = H,
        N) {
        case 1:
            var $ = -1;
            break;
        case 2:
            $ = 250;
            break;
        case 5:
            $ = 1073741823;
            break;
        case 4:
            $ = 1e4;
            break;
        default:
            $ = 5e3
        }
        return $ = B + $,
        N = {
            id: d++,
            callback: T,
            priorityLevel: N,
            startTime: B,
            expirationTime: $,
            sortIndex: -1
        },
        B > H ? (N.sortIndex = B,
        t(u, N),
        r(l) === null && N === r(u) && (v ? (g(D),
        D = -1) : v = !0,
        q(S, B - H))) : (N.sortIndex = $,
        t(l, N),
        m || p || (m = !0,
        _(E))),
        N
    }
    ,
    e.unstable_shouldYield = F,
    e.unstable_wrapCallback = function(N) {
        var T = f;
        return function() {
            var B = f;
            f = T;
            try {
                return N.apply(this, arguments)
            } finally {
                f = B
            }
        }
    }
}
)(wh);
xh.exports = wh;
var Zw = xh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eb = b
  , mt = Zw;
function M(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++)
        t += "&args[]=" + encodeURIComponent(arguments[r]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var bh = new Set
  , Ti = {};
function Hn(e, t) {
    Ro(e, t),
    Ro(e + "Capture", t)
}
function Ro(e, t) {
    for (Ti[e] = t,
    e = 0; e < t.length; e++)
        bh.add(t[e])
}
var br = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Ju = Object.prototype.hasOwnProperty
  , tb = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , gp = {}
  , yp = {};
function rb(e) {
    return Ju.call(yp, e) ? !0 : Ju.call(gp, e) ? !1 : tb.test(e) ? yp[e] = !0 : (gp[e] = !0,
    !1)
}
function nb(e, t, r, n) {
    if (r !== null && r.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return n ? !1 : r !== null ? !r.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function ob(e, t, r, n) {
    if (t === null || typeof t > "u" || nb(e, t, r, n))
        return !0;
    if (n)
        return !1;
    if (r !== null)
        switch (r.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Ye(e, t, r, n, o, i, a) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = n,
    this.attributeNamespace = o,
    this.mustUseProperty = r,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = i,
    this.removeEmptyString = a
}
var je = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    je[e] = new Ye(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    je[t] = new Ye(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    je[e] = new Ye(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    je[e] = new Ye(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    je[e] = new Ye(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    je[e] = new Ye(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    je[e] = new Ye(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    je[e] = new Ye(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    je[e] = new Ye(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var wd = /[\-:]([a-z])/g;
function bd(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(wd, bd);
    je[t] = new Ye(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(wd, bd);
    je[t] = new Ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(wd, bd);
    je[t] = new Ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    je[e] = new Ye(e,1,!1,e.toLowerCase(),null,!1,!1)
});
je.xlinkHref = new Ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    je[e] = new Ye(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Sd(e, t, r, n) {
    var o = je.hasOwnProperty(t) ? je[t] : null;
    (o !== null ? o.type !== 0 : n || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (ob(t, r, o, n) && (r = null),
    n || o === null ? rb(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : o.mustUseProperty ? e[o.propertyName] = r === null ? o.type === 3 ? !1 : "" : r : (t = o.attributeName,
    n = o.attributeNamespace,
    r === null ? e.removeAttribute(t) : (o = o.type,
    r = o === 3 || o === 4 && r === !0 ? "" : "" + r,
    n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))))
}
var Nr = eb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Ra = Symbol.for("react.element")
  , ro = Symbol.for("react.portal")
  , no = Symbol.for("react.fragment")
  , Cd = Symbol.for("react.strict_mode")
  , Zu = Symbol.for("react.profiler")
  , Sh = Symbol.for("react.provider")
  , Ch = Symbol.for("react.context")
  , Ed = Symbol.for("react.forward_ref")
  , ec = Symbol.for("react.suspense")
  , tc = Symbol.for("react.suspense_list")
  , Pd = Symbol.for("react.memo")
  , jr = Symbol.for("react.lazy")
  , Eh = Symbol.for("react.offscreen")
  , xp = Symbol.iterator;
function ti(e) {
    return e === null || typeof e != "object" ? null : (e = xp && e[xp] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var ge = Object.assign, ou;
function mi(e) {
    if (ou === void 0)
        try {
            throw Error()
        } catch (r) {
            var t = r.stack.trim().match(/\n( *(at )?)/);
            ou = t && t[1] || ""
        }
    return `
` + ou + e
}
var iu = !1;
function au(e, t) {
    if (!e || iu)
        return "";
    iu = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var n = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    n = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                n = u
            }
            e()
        }
    } catch (u) {
        if (u && n && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), i = n.stack.split(`
`), a = o.length - 1, s = i.length - 1; 1 <= a && 0 <= s && o[a] !== i[s]; )
                s--;
            for (; 1 <= a && 0 <= s; a--,
            s--)
                if (o[a] !== i[s]) {
                    if (a !== 1 || s !== 1)
                        do
                            if (a--,
                            s--,
                            0 > s || o[a] !== i[s]) {
                                var l = `
` + o[a].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                l
                            }
                        while (1 <= a && 0 <= s);
                    break
                }
        }
    } finally {
        iu = !1,
        Error.prepareStackTrace = r
    }
    return (e = e ? e.displayName || e.name : "") ? mi(e) : ""
}
function ib(e) {
    switch (e.tag) {
    case 5:
        return mi(e.type);
    case 16:
        return mi("Lazy");
    case 13:
        return mi("Suspense");
    case 19:
        return mi("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = au(e.type, !1),
        e;
    case 11:
        return e = au(e.type.render, !1),
        e;
    case 1:
        return e = au(e.type, !0),
        e;
    default:
        return ""
    }
}
function rc(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case no:
        return "Fragment";
    case ro:
        return "Portal";
    case Zu:
        return "Profiler";
    case Cd:
        return "StrictMode";
    case ec:
        return "Suspense";
    case tc:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Ch:
            return (e.displayName || "Context") + ".Consumer";
        case Sh:
            return (e._context.displayName || "Context") + ".Provider";
        case Ed:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Pd:
            return t = e.displayName || null,
            t !== null ? t : rc(e.type) || "Memo";
        case jr:
            t = e._payload,
            e = e._init;
            try {
                return rc(e(t))
            } catch {}
        }
    return null
}
function ab(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return rc(t);
    case 8:
        return t === Cd ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function sn(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Ph(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function sb(e) {
    var t = Ph(e) ? "checked" : "value"
      , r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , n = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
        var o = r.get
          , i = r.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(a) {
                n = "" + a,
                i.call(this, a)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: r.enumerable
        }),
        {
            getValue: function() {
                return n
            },
            setValue: function(a) {
                n = "" + a
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Oa(e) {
    e._valueTracker || (e._valueTracker = sb(e))
}
function Dh(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var r = t.getValue()
      , n = "";
    return e && (n = Ph(e) ? e.checked ? "true" : "false" : e.value),
    e = n,
    e !== r ? (t.setValue(e),
    !0) : !1
}
function xs(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function nc(e, t) {
    var r = t.checked;
    return ge({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: r ?? e._wrapperState.initialChecked
    })
}
function wp(e, t) {
    var r = t.defaultValue == null ? "" : t.defaultValue
      , n = t.checked != null ? t.checked : t.defaultChecked;
    r = sn(t.value != null ? t.value : r),
    e._wrapperState = {
        initialChecked: n,
        initialValue: r,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Nh(e, t) {
    t = t.checked,
    t != null && Sd(e, "checked", t, !1)
}
function oc(e, t) {
    Nh(e, t);
    var r = sn(t.value)
      , n = t.type;
    if (r != null)
        n === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
    else if (n === "submit" || n === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? ic(e, t.type, r) : t.hasOwnProperty("defaultValue") && ic(e, t.type, sn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function bp(e, t, r) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var n = t.type;
        if (!(n !== "submit" && n !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        r || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    r = e.name,
    r !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    r !== "" && (e.name = r)
}
function ic(e, t, r) {
    (t !== "number" || xs(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r))
}
var vi = Array.isArray;
function vo(e, t, r, n) {
    if (e = e.options,
    t) {
        t = {};
        for (var o = 0; o < r.length; o++)
            t["$" + r[o]] = !0;
        for (r = 0; r < e.length; r++)
            o = t.hasOwnProperty("$" + e[r].value),
            e[r].selected !== o && (e[r].selected = o),
            o && n && (e[r].defaultSelected = !0)
    } else {
        for (r = "" + sn(r),
        t = null,
        o = 0; o < e.length; o++) {
            if (e[o].value === r) {
                e[o].selected = !0,
                n && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function ac(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(M(91));
    return ge({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Sp(e, t) {
    var r = t.value;
    if (r == null) {
        if (r = t.children,
        t = t.defaultValue,
        r != null) {
            if (t != null)
                throw Error(M(92));
            if (vi(r)) {
                if (1 < r.length)
                    throw Error(M(93));
                r = r[0]
            }
            t = r
        }
        t == null && (t = ""),
        r = t
    }
    e._wrapperState = {
        initialValue: sn(r)
    }
}
function Ih(e, t) {
    var r = sn(t.value)
      , n = sn(t.defaultValue);
    r != null && (r = "" + r,
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = "" + n)
}
function Cp(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function kh(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function sc(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? kh(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Aa, Th = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, n, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, r, n, o)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Aa = Aa || document.createElement("div"),
        Aa.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Aa.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Ri(e, t) {
    if (t) {
        var r = e.firstChild;
        if (r && r === e.lastChild && r.nodeType === 3) {
            r.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var yi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , lb = ["Webkit", "ms", "Moz", "O"];
Object.keys(yi).forEach(function(e) {
    lb.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        yi[t] = yi[e]
    })
});
function Rh(e, t, r) {
    return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || yi.hasOwnProperty(e) && yi[e] ? ("" + t).trim() : t + "px"
}
function Oh(e, t) {
    e = e.style;
    for (var r in t)
        if (t.hasOwnProperty(r)) {
            var n = r.indexOf("--") === 0
              , o = Rh(r, t[r], n);
            r === "float" && (r = "cssFloat"),
            n ? e.setProperty(r, o) : e[r] = o
        }
}
var ub = ge({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function lc(e, t) {
    if (t) {
        if (ub[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(M(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(M(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(M(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(M(62))
    }
}
function uc(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var cc = null;
function Dd(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var dc = null
  , ho = null
  , go = null;
function Ep(e) {
    if (e = da(e)) {
        if (typeof dc != "function")
            throw Error(M(280));
        var t = e.stateNode;
        t && (t = pl(t),
        dc(e.stateNode, e.type, t))
    }
}
function Ah(e) {
    ho ? go ? go.push(e) : go = [e] : ho = e
}
function Mh() {
    if (ho) {
        var e = ho
          , t = go;
        if (go = ho = null,
        Ep(e),
        t)
            for (e = 0; e < t.length; e++)
                Ep(t[e])
    }
}
function Lh(e, t) {
    return e(t)
}
function jh() {}
var su = !1;
function Bh(e, t, r) {
    if (su)
        return e(t, r);
    su = !0;
    try {
        return Lh(e, t, r)
    } finally {
        su = !1,
        (ho !== null || go !== null) && (jh(),
        Mh())
    }
}
function Oi(e, t) {
    var r = e.stateNode;
    if (r === null)
        return null;
    var n = pl(r);
    if (n === null)
        return null;
    r = n[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (n = !n.disabled) || (e = e.type,
        n = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !n;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (r && typeof r != "function")
        throw Error(M(231, t, typeof r));
    return r
}
var fc = !1;
if (br)
    try {
        var ri = {};
        Object.defineProperty(ri, "passive", {
            get: function() {
                fc = !0
            }
        }),
        window.addEventListener("test", ri, ri),
        window.removeEventListener("test", ri, ri)
    } catch {
        fc = !1
    }
function cb(e, t, r, n, o, i, a, s, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(r, u)
    } catch (d) {
        this.onError(d)
    }
}
var xi = !1
  , ws = null
  , bs = !1
  , pc = null
  , db = {
    onError: function(e) {
        xi = !0,
        ws = e
    }
};
function fb(e, t, r, n, o, i, a, s, l) {
    xi = !1,
    ws = null,
    cb.apply(db, arguments)
}
function pb(e, t, r, n, o, i, a, s, l) {
    if (fb.apply(this, arguments),
    xi) {
        if (xi) {
            var u = ws;
            xi = !1,
            ws = null
        } else
            throw Error(M(198));
        bs || (bs = !0,
        pc = u)
    }
}
function Gn(e) {
    var t = e
      , r = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (r = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? r : null
}
function Fh(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Pp(e) {
    if (Gn(e) !== e)
        throw Error(M(188))
}
function mb(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Gn(e),
        t === null)
            throw Error(M(188));
        return t !== e ? null : e
    }
    for (var r = e, n = t; ; ) {
        var o = r.return;
        if (o === null)
            break;
        var i = o.alternate;
        if (i === null) {
            if (n = o.return,
            n !== null) {
                r = n;
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i; ) {
                if (i === r)
                    return Pp(o),
                    e;
                if (i === n)
                    return Pp(o),
                    t;
                i = i.sibling
            }
            throw Error(M(188))
        }
        if (r.return !== n.return)
            r = o,
            n = i;
        else {
            for (var a = !1, s = o.child; s; ) {
                if (s === r) {
                    a = !0,
                    r = o,
                    n = i;
                    break
                }
                if (s === n) {
                    a = !0,
                    n = o,
                    r = i;
                    break
                }
                s = s.sibling
            }
            if (!a) {
                for (s = i.child; s; ) {
                    if (s === r) {
                        a = !0,
                        r = i,
                        n = o;
                        break
                    }
                    if (s === n) {
                        a = !0,
                        n = i,
                        r = o;
                        break
                    }
                    s = s.sibling
                }
                if (!a)
                    throw Error(M(189))
            }
        }
        if (r.alternate !== n)
            throw Error(M(190))
    }
    if (r.tag !== 3)
        throw Error(M(188));
    return r.stateNode.current === r ? e : t
}
function $h(e) {
    return e = mb(e),
    e !== null ? zh(e) : null
}
function zh(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = zh(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var _h = mt.unstable_scheduleCallback
  , Dp = mt.unstable_cancelCallback
  , vb = mt.unstable_shouldYield
  , hb = mt.unstable_requestPaint
  , be = mt.unstable_now
  , gb = mt.unstable_getCurrentPriorityLevel
  , Nd = mt.unstable_ImmediatePriority
  , Uh = mt.unstable_UserBlockingPriority
  , Ss = mt.unstable_NormalPriority
  , yb = mt.unstable_LowPriority
  , Wh = mt.unstable_IdlePriority
  , ul = null
  , ar = null;
function xb(e) {
    if (ar && typeof ar.onCommitFiberRoot == "function")
        try {
            ar.onCommitFiberRoot(ul, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Gt = Math.clz32 ? Math.clz32 : Sb
  , wb = Math.log
  , bb = Math.LN2;
function Sb(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (wb(e) / bb | 0) | 0
}
var Ma = 64
  , La = 4194304;
function hi(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Cs(e, t) {
    var r = e.pendingLanes;
    if (r === 0)
        return 0;
    var n = 0
      , o = e.suspendedLanes
      , i = e.pingedLanes
      , a = r & 268435455;
    if (a !== 0) {
        var s = a & ~o;
        s !== 0 ? n = hi(s) : (i &= a,
        i !== 0 && (n = hi(i)))
    } else
        a = r & ~o,
        a !== 0 ? n = hi(a) : i !== 0 && (n = hi(i));
    if (n === 0)
        return 0;
    if (t !== 0 && t !== n && !(t & o) && (o = n & -n,
    i = t & -t,
    o >= i || o === 16 && (i & 4194240) !== 0))
        return t;
    if (n & 4 && (n |= r & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= n; 0 < t; )
            r = 31 - Gt(t),
            o = 1 << r,
            n |= e[r],
            t &= ~o;
    return n
}
function Cb(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function Eb(e, t) {
    for (var r = e.suspendedLanes, n = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var a = 31 - Gt(i)
          , s = 1 << a
          , l = o[a];
        l === -1 ? (!(s & r) || s & n) && (o[a] = Cb(s, t)) : l <= t && (e.expiredLanes |= s),
        i &= ~s
    }
}
function mc(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Vh() {
    var e = Ma;
    return Ma <<= 1,
    !(Ma & 4194240) && (Ma = 64),
    e
}
function lu(e) {
    for (var t = [], r = 0; 31 > r; r++)
        t.push(e);
    return t
}
function ua(e, t, r) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Gt(t),
    e[t] = r
}
function Pb(e, t) {
    var r = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var n = e.eventTimes;
    for (e = e.expirationTimes; 0 < r; ) {
        var o = 31 - Gt(r)
          , i = 1 << o;
        t[o] = 0,
        n[o] = -1,
        e[o] = -1,
        r &= ~i
    }
}
function Id(e, t) {
    var r = e.entangledLanes |= t;
    for (e = e.entanglements; r; ) {
        var n = 31 - Gt(r)
          , o = 1 << n;
        o & t | e[n] & t && (e[n] |= t),
        r &= ~o
    }
}
var ie = 0;
function Hh(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Gh, kd, qh, Kh, Qh, vc = !1, ja = [], Kr = null, Qr = null, Yr = null, Ai = new Map, Mi = new Map, Fr = [], Db = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Np(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Kr = null;
        break;
    case "dragenter":
    case "dragleave":
        Qr = null;
        break;
    case "mouseover":
    case "mouseout":
        Yr = null;
        break;
    case "pointerover":
    case "pointerout":
        Ai.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Mi.delete(t.pointerId)
    }
}
function ni(e, t, r, n, o, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: i,
        targetContainers: [o]
    },
    t !== null && (t = da(t),
    t !== null && kd(t)),
    e) : (e.eventSystemFlags |= n,
    t = e.targetContainers,
    o !== null && t.indexOf(o) === -1 && t.push(o),
    e)
}
function Nb(e, t, r, n, o) {
    switch (t) {
    case "focusin":
        return Kr = ni(Kr, e, t, r, n, o),
        !0;
    case "dragenter":
        return Qr = ni(Qr, e, t, r, n, o),
        !0;
    case "mouseover":
        return Yr = ni(Yr, e, t, r, n, o),
        !0;
    case "pointerover":
        var i = o.pointerId;
        return Ai.set(i, ni(Ai.get(i) || null, e, t, r, n, o)),
        !0;
    case "gotpointercapture":
        return i = o.pointerId,
        Mi.set(i, ni(Mi.get(i) || null, e, t, r, n, o)),
        !0
    }
    return !1
}
function Yh(e) {
    var t = Nn(e.target);
    if (t !== null) {
        var r = Gn(t);
        if (r !== null) {
            if (t = r.tag,
            t === 13) {
                if (t = Fh(r),
                t !== null) {
                    e.blockedOn = t,
                    Qh(e.priority, function() {
                        qh(r)
                    });
                    return
                }
            } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function os(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var r = hc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (r === null) {
            r = e.nativeEvent;
            var n = new r.constructor(r.type,r);
            cc = n,
            r.target.dispatchEvent(n),
            cc = null
        } else
            return t = da(r),
            t !== null && kd(t),
            e.blockedOn = r,
            !1;
        t.shift()
    }
    return !0
}
function Ip(e, t, r) {
    os(e) && r.delete(t)
}
function Ib() {
    vc = !1,
    Kr !== null && os(Kr) && (Kr = null),
    Qr !== null && os(Qr) && (Qr = null),
    Yr !== null && os(Yr) && (Yr = null),
    Ai.forEach(Ip),
    Mi.forEach(Ip)
}
function oi(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    vc || (vc = !0,
    mt.unstable_scheduleCallback(mt.unstable_NormalPriority, Ib)))
}
function Li(e) {
    function t(o) {
        return oi(o, e)
    }
    if (0 < ja.length) {
        oi(ja[0], e);
        for (var r = 1; r < ja.length; r++) {
            var n = ja[r];
            n.blockedOn === e && (n.blockedOn = null)
        }
    }
    for (Kr !== null && oi(Kr, e),
    Qr !== null && oi(Qr, e),
    Yr !== null && oi(Yr, e),
    Ai.forEach(t),
    Mi.forEach(t),
    r = 0; r < Fr.length; r++)
        n = Fr[r],
        n.blockedOn === e && (n.blockedOn = null);
    for (; 0 < Fr.length && (r = Fr[0],
    r.blockedOn === null); )
        Yh(r),
        r.blockedOn === null && Fr.shift()
}
var yo = Nr.ReactCurrentBatchConfig
  , Es = !0;
function kb(e, t, r, n) {
    var o = ie
      , i = yo.transition;
    yo.transition = null;
    try {
        ie = 1,
        Td(e, t, r, n)
    } finally {
        ie = o,
        yo.transition = i
    }
}
function Tb(e, t, r, n) {
    var o = ie
      , i = yo.transition;
    yo.transition = null;
    try {
        ie = 4,
        Td(e, t, r, n)
    } finally {
        ie = o,
        yo.transition = i
    }
}
function Td(e, t, r, n) {
    if (Es) {
        var o = hc(e, t, r, n);
        if (o === null)
            yu(e, t, n, Ps, r),
            Np(e, n);
        else if (Nb(o, e, t, r, n))
            n.stopPropagation();
        else if (Np(e, n),
        t & 4 && -1 < Db.indexOf(e)) {
            for (; o !== null; ) {
                var i = da(o);
                if (i !== null && Gh(i),
                i = hc(e, t, r, n),
                i === null && yu(e, t, n, Ps, r),
                i === o)
                    break;
                o = i
            }
            o !== null && n.stopPropagation()
        } else
            yu(e, t, n, null, r)
    }
}
var Ps = null;
function hc(e, t, r, n) {
    if (Ps = null,
    e = Dd(n),
    e = Nn(e),
    e !== null)
        if (t = Gn(e),
        t === null)
            e = null;
        else if (r = t.tag,
        r === 13) {
            if (e = Fh(t),
            e !== null)
                return e;
            e = null
        } else if (r === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Ps = e,
    null
}
function Xh(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (gb()) {
        case Nd:
            return 1;
        case Uh:
            return 4;
        case Ss:
        case yb:
            return 16;
        case Wh:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Hr = null
  , Rd = null
  , is = null;
function Jh() {
    if (is)
        return is;
    var e, t = Rd, r = t.length, n, o = "value"in Hr ? Hr.value : Hr.textContent, i = o.length;
    for (e = 0; e < r && t[e] === o[e]; e++)
        ;
    var a = r - e;
    for (n = 1; n <= a && t[r - n] === o[i - n]; n++)
        ;
    return is = o.slice(e, 1 < n ? 1 - n : void 0)
}
function as(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Ba() {
    return !0
}
function kp() {
    return !1
}
function ht(e) {
    function t(r, n, o, i, a) {
        this._reactName = r,
        this._targetInst = o,
        this.type = n,
        this.nativeEvent = i,
        this.target = a,
        this.currentTarget = null;
        for (var s in e)
            e.hasOwnProperty(s) && (r = e[s],
            this[s] = r ? r(i) : i[s]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Ba : kp,
        this.isPropagationStopped = kp,
        this
    }
    return ge(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var r = this.nativeEvent;
            r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1),
            this.isDefaultPrevented = Ba)
        },
        stopPropagation: function() {
            var r = this.nativeEvent;
            r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
            this.isPropagationStopped = Ba)
        },
        persist: function() {},
        isPersistent: Ba
    }),
    t
}
var Vo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Od = ht(Vo), ca = ge({}, Vo, {
    view: 0,
    detail: 0
}), Rb = ht(ca), uu, cu, ii, cl = ge({}, ca, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ad,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== ii && (ii && e.type === "mousemove" ? (uu = e.screenX - ii.screenX,
        cu = e.screenY - ii.screenY) : cu = uu = 0,
        ii = e),
        uu)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : cu
    }
}), Tp = ht(cl), Ob = ge({}, cl, {
    dataTransfer: 0
}), Ab = ht(Ob), Mb = ge({}, ca, {
    relatedTarget: 0
}), du = ht(Mb), Lb = ge({}, Vo, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), jb = ht(Lb), Bb = ge({}, Vo, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), Fb = ht(Bb), $b = ge({}, Vo, {
    data: 0
}), Rp = ht($b), zb = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, _b = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, Ub = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Wb(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Ub[e]) ? !!t[e] : !1
}
function Ad() {
    return Wb
}
var Vb = ge({}, ca, {
    key: function(e) {
        if (e.key) {
            var t = zb[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = as(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? _b[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ad,
    charCode: function(e) {
        return e.type === "keypress" ? as(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? as(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Hb = ht(Vb)
  , Gb = ge({}, cl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Op = ht(Gb)
  , qb = ge({}, ca, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ad
})
  , Kb = ht(qb)
  , Qb = ge({}, Vo, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , Yb = ht(Qb)
  , Xb = ge({}, cl, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , Jb = ht(Xb)
  , Zb = [9, 13, 27, 32]
  , Md = br && "CompositionEvent"in window
  , wi = null;
br && "documentMode"in document && (wi = document.documentMode);
var e1 = br && "TextEvent"in window && !wi
  , Zh = br && (!Md || wi && 8 < wi && 11 >= wi)
  , Ap = " "
  , Mp = !1;
function eg(e, t) {
    switch (e) {
    case "keyup":
        return Zb.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function tg(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var oo = !1;
function t1(e, t) {
    switch (e) {
    case "compositionend":
        return tg(t);
    case "keypress":
        return t.which !== 32 ? null : (Mp = !0,
        Ap);
    case "textInput":
        return e = t.data,
        e === Ap && Mp ? null : e;
    default:
        return null
    }
}
function r1(e, t) {
    if (oo)
        return e === "compositionend" || !Md && eg(e, t) ? (e = Jh(),
        is = Rd = Hr = null,
        oo = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Zh && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var n1 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Lp(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!n1[e.type] : t === "textarea"
}
function rg(e, t, r, n) {
    Ah(n),
    t = Ds(t, "onChange"),
    0 < t.length && (r = new Od("onChange","change",null,r,n),
    e.push({
        event: r,
        listeners: t
    }))
}
var bi = null
  , ji = null;
function o1(e) {
    pg(e, 0)
}
function dl(e) {
    var t = so(e);
    if (Dh(t))
        return e
}
function i1(e, t) {
    if (e === "change")
        return t
}
var ng = !1;
if (br) {
    var fu;
    if (br) {
        var pu = "oninput"in document;
        if (!pu) {
            var jp = document.createElement("div");
            jp.setAttribute("oninput", "return;"),
            pu = typeof jp.oninput == "function"
        }
        fu = pu
    } else
        fu = !1;
    ng = fu && (!document.documentMode || 9 < document.documentMode)
}
function Bp() {
    bi && (bi.detachEvent("onpropertychange", og),
    ji = bi = null)
}
function og(e) {
    if (e.propertyName === "value" && dl(ji)) {
        var t = [];
        rg(t, ji, e, Dd(e)),
        Bh(o1, t)
    }
}
function a1(e, t, r) {
    e === "focusin" ? (Bp(),
    bi = t,
    ji = r,
    bi.attachEvent("onpropertychange", og)) : e === "focusout" && Bp()
}
function s1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return dl(ji)
}
function l1(e, t) {
    if (e === "click")
        return dl(t)
}
function u1(e, t) {
    if (e === "input" || e === "change")
        return dl(t)
}
function c1(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Kt = typeof Object.is == "function" ? Object.is : c1;
function Bi(e, t) {
    if (Kt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var r = Object.keys(e)
      , n = Object.keys(t);
    if (r.length !== n.length)
        return !1;
    for (n = 0; n < r.length; n++) {
        var o = r[n];
        if (!Ju.call(t, o) || !Kt(e[o], t[o]))
            return !1
    }
    return !0
}
function Fp(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function $p(e, t) {
    var r = Fp(e);
    e = 0;
    for (var n; r; ) {
        if (r.nodeType === 3) {
            if (n = e + r.textContent.length,
            e <= t && n >= t)
                return {
                    node: r,
                    offset: t - e
                };
            e = n
        }
        e: {
            for (; r; ) {
                if (r.nextSibling) {
                    r = r.nextSibling;
                    break e
                }
                r = r.parentNode
            }
            r = void 0
        }
        r = Fp(r)
    }
}
function ig(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ig(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function ag() {
    for (var e = window, t = xs(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var r = typeof t.contentWindow.location.href == "string"
        } catch {
            r = !1
        }
        if (r)
            e = t.contentWindow;
        else
            break;
        t = xs(e.document)
    }
    return t
}
function Ld(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function d1(e) {
    var t = ag()
      , r = e.focusedElem
      , n = e.selectionRange;
    if (t !== r && r && r.ownerDocument && ig(r.ownerDocument.documentElement, r)) {
        if (n !== null && Ld(r)) {
            if (t = n.start,
            e = n.end,
            e === void 0 && (e = t),
            "selectionStart"in r)
                r.selectionStart = t,
                r.selectionEnd = Math.min(e, r.value.length);
            else if (e = (t = r.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var o = r.textContent.length
                  , i = Math.min(n.start, o);
                n = n.end === void 0 ? i : Math.min(n.end, o),
                !e.extend && i > n && (o = n,
                n = i,
                i = o),
                o = $p(r, i);
                var a = $p(r, n);
                o && a && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(),
                t.setStart(o.node, o.offset),
                e.removeAllRanges(),
                i > n ? (e.addRange(t),
                e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = r; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof r.focus == "function" && r.focus(),
        r = 0; r < t.length; r++)
            e = t[r],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var f1 = br && "documentMode"in document && 11 >= document.documentMode
  , io = null
  , gc = null
  , Si = null
  , yc = !1;
function zp(e, t, r) {
    var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    yc || io == null || io !== xs(n) || (n = io,
    "selectionStart"in n && Ld(n) ? n = {
        start: n.selectionStart,
        end: n.selectionEnd
    } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(),
    n = {
        anchorNode: n.anchorNode,
        anchorOffset: n.anchorOffset,
        focusNode: n.focusNode,
        focusOffset: n.focusOffset
    }),
    Si && Bi(Si, n) || (Si = n,
    n = Ds(gc, "onSelect"),
    0 < n.length && (t = new Od("onSelect","select",null,t,r),
    e.push({
        event: t,
        listeners: n
    }),
    t.target = io)))
}
function Fa(e, t) {
    var r = {};
    return r[e.toLowerCase()] = t.toLowerCase(),
    r["Webkit" + e] = "webkit" + t,
    r["Moz" + e] = "moz" + t,
    r
}
var ao = {
    animationend: Fa("Animation", "AnimationEnd"),
    animationiteration: Fa("Animation", "AnimationIteration"),
    animationstart: Fa("Animation", "AnimationStart"),
    transitionend: Fa("Transition", "TransitionEnd")
}
  , mu = {}
  , sg = {};
br && (sg = document.createElement("div").style,
"AnimationEvent"in window || (delete ao.animationend.animation,
delete ao.animationiteration.animation,
delete ao.animationstart.animation),
"TransitionEvent"in window || delete ao.transitionend.transition);
function fl(e) {
    if (mu[e])
        return mu[e];
    if (!ao[e])
        return e;
    var t = ao[e], r;
    for (r in t)
        if (t.hasOwnProperty(r) && r in sg)
            return mu[e] = t[r];
    return e
}
var lg = fl("animationend")
  , ug = fl("animationiteration")
  , cg = fl("animationstart")
  , dg = fl("transitionend")
  , fg = new Map
  , _p = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function mn(e, t) {
    fg.set(e, t),
    Hn(t, [e])
}
for (var vu = 0; vu < _p.length; vu++) {
    var hu = _p[vu]
      , p1 = hu.toLowerCase()
      , m1 = hu[0].toUpperCase() + hu.slice(1);
    mn(p1, "on" + m1)
}
mn(lg, "onAnimationEnd");
mn(ug, "onAnimationIteration");
mn(cg, "onAnimationStart");
mn("dblclick", "onDoubleClick");
mn("focusin", "onFocus");
mn("focusout", "onBlur");
mn(dg, "onTransitionEnd");
Ro("onMouseEnter", ["mouseout", "mouseover"]);
Ro("onMouseLeave", ["mouseout", "mouseover"]);
Ro("onPointerEnter", ["pointerout", "pointerover"]);
Ro("onPointerLeave", ["pointerout", "pointerover"]);
Hn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Hn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Hn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Hn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Hn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Hn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var gi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , v1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(gi));
function Up(e, t, r) {
    var n = e.type || "unknown-event";
    e.currentTarget = r,
    pb(n, t, void 0, e),
    e.currentTarget = null
}
function pg(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
        var n = e[r]
          , o = n.event;
        n = n.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var a = n.length - 1; 0 <= a; a--) {
                    var s = n[a]
                      , l = s.instance
                      , u = s.currentTarget;
                    if (s = s.listener,
                    l !== i && o.isPropagationStopped())
                        break e;
                    Up(o, s, u),
                    i = l
                }
            else
                for (a = 0; a < n.length; a++) {
                    if (s = n[a],
                    l = s.instance,
                    u = s.currentTarget,
                    s = s.listener,
                    l !== i && o.isPropagationStopped())
                        break e;
                    Up(o, s, u),
                    i = l
                }
        }
    }
    if (bs)
        throw e = pc,
        bs = !1,
        pc = null,
        e
}
function de(e, t) {
    var r = t[Cc];
    r === void 0 && (r = t[Cc] = new Set);
    var n = e + "__bubble";
    r.has(n) || (mg(t, e, 2, !1),
    r.add(n))
}
function gu(e, t, r) {
    var n = 0;
    t && (n |= 4),
    mg(r, e, n, t)
}
var $a = "_reactListening" + Math.random().toString(36).slice(2);
function Fi(e) {
    if (!e[$a]) {
        e[$a] = !0,
        bh.forEach(function(r) {
            r !== "selectionchange" && (v1.has(r) || gu(r, !1, e),
            gu(r, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[$a] || (t[$a] = !0,
        gu("selectionchange", !1, t))
    }
}
function mg(e, t, r, n) {
    switch (Xh(t)) {
    case 1:
        var o = kb;
        break;
    case 4:
        o = Tb;
        break;
    default:
        o = Td
    }
    r = o.bind(null, t, r, e),
    o = void 0,
    !fc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
    n ? o !== void 0 ? e.addEventListener(t, r, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, r, !0) : o !== void 0 ? e.addEventListener(t, r, {
        passive: o
    }) : e.addEventListener(t, r, !1)
}
function yu(e, t, r, n, o) {
    var i = n;
    if (!(t & 1) && !(t & 2) && n !== null)
        e: for (; ; ) {
            if (n === null)
                return;
            var a = n.tag;
            if (a === 3 || a === 4) {
                var s = n.stateNode.containerInfo;
                if (s === o || s.nodeType === 8 && s.parentNode === o)
                    break;
                if (a === 4)
                    for (a = n.return; a !== null; ) {
                        var l = a.tag;
                        if ((l === 3 || l === 4) && (l = a.stateNode.containerInfo,
                        l === o || l.nodeType === 8 && l.parentNode === o))
                            return;
                        a = a.return
                    }
                for (; s !== null; ) {
                    if (a = Nn(s),
                    a === null)
                        return;
                    if (l = a.tag,
                    l === 5 || l === 6) {
                        n = i = a;
                        continue e
                    }
                    s = s.parentNode
                }
            }
            n = n.return
        }
    Bh(function() {
        var u = i
          , d = Dd(r)
          , c = [];
        e: {
            var f = fg.get(e);
            if (f !== void 0) {
                var p = Od
                  , m = e;
                switch (e) {
                case "keypress":
                    if (as(r) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    p = Hb;
                    break;
                case "focusin":
                    m = "focus",
                    p = du;
                    break;
                case "focusout":
                    m = "blur",
                    p = du;
                    break;
                case "beforeblur":
                case "afterblur":
                    p = du;
                    break;
                case "click":
                    if (r.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    p = Tp;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    p = Ab;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    p = Kb;
                    break;
                case lg:
                case ug:
                case cg:
                    p = jb;
                    break;
                case dg:
                    p = Yb;
                    break;
                case "scroll":
                    p = Rb;
                    break;
                case "wheel":
                    p = Jb;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    p = Fb;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    p = Op
                }
                var v = (t & 4) !== 0
                  , x = !v && e === "scroll"
                  , g = v ? f !== null ? f + "Capture" : null : f;
                v = [];
                for (var h = u, y; h !== null; ) {
                    y = h;
                    var S = y.stateNode;
                    if (y.tag === 5 && S !== null && (y = S,
                    g !== null && (S = Oi(h, g),
                    S != null && v.push($i(h, S, y)))),
                    x)
                        break;
                    h = h.return
                }
                0 < v.length && (f = new p(f,m,null,r,d),
                c.push({
                    event: f,
                    listeners: v
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (f = e === "mouseover" || e === "pointerover",
                p = e === "mouseout" || e === "pointerout",
                f && r !== cc && (m = r.relatedTarget || r.fromElement) && (Nn(m) || m[Sr]))
                    break e;
                if ((p || f) && (f = d.window === d ? d : (f = d.ownerDocument) ? f.defaultView || f.parentWindow : window,
                p ? (m = r.relatedTarget || r.toElement,
                p = u,
                m = m ? Nn(m) : null,
                m !== null && (x = Gn(m),
                m !== x || m.tag !== 5 && m.tag !== 6) && (m = null)) : (p = null,
                m = u),
                p !== m)) {
                    if (v = Tp,
                    S = "onMouseLeave",
                    g = "onMouseEnter",
                    h = "mouse",
                    (e === "pointerout" || e === "pointerover") && (v = Op,
                    S = "onPointerLeave",
                    g = "onPointerEnter",
                    h = "pointer"),
                    x = p == null ? f : so(p),
                    y = m == null ? f : so(m),
                    f = new v(S,h + "leave",p,r,d),
                    f.target = x,
                    f.relatedTarget = y,
                    S = null,
                    Nn(d) === u && (v = new v(g,h + "enter",m,r,d),
                    v.target = y,
                    v.relatedTarget = x,
                    S = v),
                    x = S,
                    p && m)
                        t: {
                            for (v = p,
                            g = m,
                            h = 0,
                            y = v; y; y = eo(y))
                                h++;
                            for (y = 0,
                            S = g; S; S = eo(S))
                                y++;
                            for (; 0 < h - y; )
                                v = eo(v),
                                h--;
                            for (; 0 < y - h; )
                                g = eo(g),
                                y--;
                            for (; h--; ) {
                                if (v === g || g !== null && v === g.alternate)
                                    break t;
                                v = eo(v),
                                g = eo(g)
                            }
                            v = null
                        }
                    else
                        v = null;
                    p !== null && Wp(c, f, p, v, !1),
                    m !== null && x !== null && Wp(c, x, m, v, !0)
                }
            }
            e: {
                if (f = u ? so(u) : window,
                p = f.nodeName && f.nodeName.toLowerCase(),
                p === "select" || p === "input" && f.type === "file")
                    var E = i1;
                else if (Lp(f))
                    if (ng)
                        E = u1;
                    else {
                        E = s1;
                        var C = a1
                    }
                else
                    (p = f.nodeName) && p.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (E = l1);
                if (E && (E = E(e, u))) {
                    rg(c, E, r, d);
                    break e
                }
                C && C(e, f, u),
                e === "focusout" && (C = f._wrapperState) && C.controlled && f.type === "number" && ic(f, "number", f.value)
            }
            switch (C = u ? so(u) : window,
            e) {
            case "focusin":
                (Lp(C) || C.contentEditable === "true") && (io = C,
                gc = u,
                Si = null);
                break;
            case "focusout":
                Si = gc = io = null;
                break;
            case "mousedown":
                yc = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                yc = !1,
                zp(c, r, d);
                break;
            case "selectionchange":
                if (f1)
                    break;
            case "keydown":
            case "keyup":
                zp(c, r, d)
            }
            var P;
            if (Md)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var D = "onCompositionStart";
                        break e;
                    case "compositionend":
                        D = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        D = "onCompositionUpdate";
                        break e
                    }
                    D = void 0
                }
            else
                oo ? eg(e, r) && (D = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (D = "onCompositionStart");
            D && (Zh && r.locale !== "ko" && (oo || D !== "onCompositionStart" ? D === "onCompositionEnd" && oo && (P = Jh()) : (Hr = d,
            Rd = "value"in Hr ? Hr.value : Hr.textContent,
            oo = !0)),
            C = Ds(u, D),
            0 < C.length && (D = new Rp(D,e,null,r,d),
            c.push({
                event: D,
                listeners: C
            }),
            P ? D.data = P : (P = tg(r),
            P !== null && (D.data = P)))),
            (P = e1 ? t1(e, r) : r1(e, r)) && (u = Ds(u, "onBeforeInput"),
            0 < u.length && (d = new Rp("onBeforeInput","beforeinput",null,r,d),
            c.push({
                event: d,
                listeners: u
            }),
            d.data = P))
        }
        pg(c, t)
    })
}
function $i(e, t, r) {
    return {
        instance: e,
        listener: t,
        currentTarget: r
    }
}
function Ds(e, t) {
    for (var r = t + "Capture", n = []; e !== null; ) {
        var o = e
          , i = o.stateNode;
        o.tag === 5 && i !== null && (o = i,
        i = Oi(e, r),
        i != null && n.unshift($i(e, i, o)),
        i = Oi(e, t),
        i != null && n.push($i(e, i, o))),
        e = e.return
    }
    return n
}
function eo(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Wp(e, t, r, n, o) {
    for (var i = t._reactName, a = []; r !== null && r !== n; ) {
        var s = r
          , l = s.alternate
          , u = s.stateNode;
        if (l !== null && l === n)
            break;
        s.tag === 5 && u !== null && (s = u,
        o ? (l = Oi(r, i),
        l != null && a.unshift($i(r, l, s))) : o || (l = Oi(r, i),
        l != null && a.push($i(r, l, s)))),
        r = r.return
    }
    a.length !== 0 && e.push({
        event: t,
        listeners: a
    })
}
var h1 = /\r\n?/g
  , g1 = /\u0000|\uFFFD/g;
function Vp(e) {
    return (typeof e == "string" ? e : "" + e).replace(h1, `
`).replace(g1, "")
}
function za(e, t, r) {
    if (t = Vp(t),
    Vp(e) !== t && r)
        throw Error(M(425))
}
function Ns() {}
var xc = null
  , wc = null;
function bc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Sc = typeof setTimeout == "function" ? setTimeout : void 0
  , y1 = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Hp = typeof Promise == "function" ? Promise : void 0
  , x1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Hp < "u" ? function(e) {
    return Hp.resolve(null).then(e).catch(w1)
}
: Sc;
function w1(e) {
    setTimeout(function() {
        throw e
    })
}
function xu(e, t) {
    var r = t
      , n = 0;
    do {
        var o = r.nextSibling;
        if (e.removeChild(r),
        o && o.nodeType === 8)
            if (r = o.data,
            r === "/$") {
                if (n === 0) {
                    e.removeChild(o),
                    Li(t);
                    return
                }
                n--
            } else
                r !== "$" && r !== "$?" && r !== "$!" || n++;
        r = o
    } while (r);
    Li(t)
}
function Xr(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Gp(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var r = e.data;
            if (r === "$" || r === "$!" || r === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                r === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Ho = Math.random().toString(36).slice(2)
  , or = "__reactFiber$" + Ho
  , zi = "__reactProps$" + Ho
  , Sr = "__reactContainer$" + Ho
  , Cc = "__reactEvents$" + Ho
  , b1 = "__reactListeners$" + Ho
  , S1 = "__reactHandles$" + Ho;
function Nn(e) {
    var t = e[or];
    if (t)
        return t;
    for (var r = e.parentNode; r; ) {
        if (t = r[Sr] || r[or]) {
            if (r = t.alternate,
            t.child !== null || r !== null && r.child !== null)
                for (e = Gp(e); e !== null; ) {
                    if (r = e[or])
                        return r;
                    e = Gp(e)
                }
            return t
        }
        e = r,
        r = e.parentNode
    }
    return null
}
function da(e) {
    return e = e[or] || e[Sr],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function so(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(M(33))
}
function pl(e) {
    return e[zi] || null
}
var Ec = []
  , lo = -1;
function vn(e) {
    return {
        current: e
    }
}
function fe(e) {
    0 > lo || (e.current = Ec[lo],
    Ec[lo] = null,
    lo--)
}
function ue(e, t) {
    lo++,
    Ec[lo] = e.current,
    e.current = t
}
var ln = {}
  , We = vn(ln)
  , rt = vn(!1)
  , Fn = ln;
function Oo(e, t) {
    var r = e.type.contextTypes;
    if (!r)
        return ln;
    var n = e.stateNode;
    if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
        return n.__reactInternalMemoizedMaskedChildContext;
    var o = {}, i;
    for (i in r)
        o[i] = t[i];
    return n && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function nt(e) {
    return e = e.childContextTypes,
    e != null
}
function Is() {
    fe(rt),
    fe(We)
}
function qp(e, t, r) {
    if (We.current !== ln)
        throw Error(M(168));
    ue(We, t),
    ue(rt, r)
}
function vg(e, t, r) {
    var n = e.stateNode;
    if (t = t.childContextTypes,
    typeof n.getChildContext != "function")
        return r;
    n = n.getChildContext();
    for (var o in n)
        if (!(o in t))
            throw Error(M(108, ab(e) || "Unknown", o));
    return ge({}, r, n)
}
function ks(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ln,
    Fn = We.current,
    ue(We, e),
    ue(rt, rt.current),
    !0
}
function Kp(e, t, r) {
    var n = e.stateNode;
    if (!n)
        throw Error(M(169));
    r ? (e = vg(e, t, Fn),
    n.__reactInternalMemoizedMergedChildContext = e,
    fe(rt),
    fe(We),
    ue(We, e)) : fe(rt),
    ue(rt, r)
}
var hr = null
  , ml = !1
  , wu = !1;
function hg(e) {
    hr === null ? hr = [e] : hr.push(e)
}
function C1(e) {
    ml = !0,
    hg(e)
}
function hn() {
    if (!wu && hr !== null) {
        wu = !0;
        var e = 0
          , t = ie;
        try {
            var r = hr;
            for (ie = 1; e < r.length; e++) {
                var n = r[e];
                do
                    n = n(!0);
                while (n !== null)
            }
            hr = null,
            ml = !1
        } catch (o) {
            throw hr !== null && (hr = hr.slice(e + 1)),
            _h(Nd, hn),
            o
        } finally {
            ie = t,
            wu = !1
        }
    }
    return null
}
var uo = []
  , co = 0
  , Ts = null
  , Rs = 0
  , Pt = []
  , Dt = 0
  , $n = null
  , yr = 1
  , xr = "";
function En(e, t) {
    uo[co++] = Rs,
    uo[co++] = Ts,
    Ts = e,
    Rs = t
}
function gg(e, t, r) {
    Pt[Dt++] = yr,
    Pt[Dt++] = xr,
    Pt[Dt++] = $n,
    $n = e;
    var n = yr;
    e = xr;
    var o = 32 - Gt(n) - 1;
    n &= ~(1 << o),
    r += 1;
    var i = 32 - Gt(t) + o;
    if (30 < i) {
        var a = o - o % 5;
        i = (n & (1 << a) - 1).toString(32),
        n >>= a,
        o -= a,
        yr = 1 << 32 - Gt(t) + o | r << o | n,
        xr = i + e
    } else
        yr = 1 << i | r << o | n,
        xr = e
}
function jd(e) {
    e.return !== null && (En(e, 1),
    gg(e, 1, 0))
}
function Bd(e) {
    for (; e === Ts; )
        Ts = uo[--co],
        uo[co] = null,
        Rs = uo[--co],
        uo[co] = null;
    for (; e === $n; )
        $n = Pt[--Dt],
        Pt[Dt] = null,
        xr = Pt[--Dt],
        Pt[Dt] = null,
        yr = Pt[--Dt],
        Pt[Dt] = null
}
var ct = null
  , lt = null
  , me = !1
  , Vt = null;
function yg(e, t) {
    var r = Nt(5, null, null, 0);
    r.elementType = "DELETED",
    r.stateNode = t,
    r.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [r],
    e.flags |= 16) : t.push(r)
}
function Qp(e, t) {
    switch (e.tag) {
    case 5:
        var r = e.type;
        return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        ct = e,
        lt = Xr(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        ct = e,
        lt = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (r = $n !== null ? {
            id: yr,
            overflow: xr
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: r,
            retryLane: 1073741824
        },
        r = Nt(18, null, null, 0),
        r.stateNode = t,
        r.return = e,
        e.child = r,
        ct = e,
        lt = null,
        !0) : !1;
    default:
        return !1
    }
}
function Pc(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Dc(e) {
    if (me) {
        var t = lt;
        if (t) {
            var r = t;
            if (!Qp(e, t)) {
                if (Pc(e))
                    throw Error(M(418));
                t = Xr(r.nextSibling);
                var n = ct;
                t && Qp(e, t) ? yg(n, r) : (e.flags = e.flags & -4097 | 2,
                me = !1,
                ct = e)
            }
        } else {
            if (Pc(e))
                throw Error(M(418));
            e.flags = e.flags & -4097 | 2,
            me = !1,
            ct = e
        }
    }
}
function Yp(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    ct = e
}
function _a(e) {
    if (e !== ct)
        return !1;
    if (!me)
        return Yp(e),
        me = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !bc(e.type, e.memoizedProps)),
    t && (t = lt)) {
        if (Pc(e))
            throw xg(),
            Error(M(418));
        for (; t; )
            yg(e, t),
            t = Xr(t.nextSibling)
    }
    if (Yp(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(M(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var r = e.data;
                    if (r === "/$") {
                        if (t === 0) {
                            lt = Xr(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        r !== "$" && r !== "$!" && r !== "$?" || t++
                }
                e = e.nextSibling
            }
            lt = null
        }
    } else
        lt = ct ? Xr(e.stateNode.nextSibling) : null;
    return !0
}
function xg() {
    for (var e = lt; e; )
        e = Xr(e.nextSibling)
}
function Ao() {
    lt = ct = null,
    me = !1
}
function Fd(e) {
    Vt === null ? Vt = [e] : Vt.push(e)
}
var E1 = Nr.ReactCurrentBatchConfig;
function ai(e, t, r) {
    if (e = r.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (r._owner) {
            if (r = r._owner,
            r) {
                if (r.tag !== 1)
                    throw Error(M(309));
                var n = r.stateNode
            }
            if (!n)
                throw Error(M(147, e));
            var o = n
              , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(a) {
                var s = o.refs;
                a === null ? delete s[i] : s[i] = a
            }
            ,
            t._stringRef = i,
            t)
        }
        if (typeof e != "string")
            throw Error(M(284));
        if (!r._owner)
            throw Error(M(290, e))
    }
    return e
}
function Ua(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(M(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Xp(e) {
    var t = e._init;
    return t(e._payload)
}
function wg(e) {
    function t(g, h) {
        if (e) {
            var y = g.deletions;
            y === null ? (g.deletions = [h],
            g.flags |= 16) : y.push(h)
        }
    }
    function r(g, h) {
        if (!e)
            return null;
        for (; h !== null; )
            t(g, h),
            h = h.sibling;
        return null
    }
    function n(g, h) {
        for (g = new Map; h !== null; )
            h.key !== null ? g.set(h.key, h) : g.set(h.index, h),
            h = h.sibling;
        return g
    }
    function o(g, h) {
        return g = tn(g, h),
        g.index = 0,
        g.sibling = null,
        g
    }
    function i(g, h, y) {
        return g.index = y,
        e ? (y = g.alternate,
        y !== null ? (y = y.index,
        y < h ? (g.flags |= 2,
        h) : y) : (g.flags |= 2,
        h)) : (g.flags |= 1048576,
        h)
    }
    function a(g) {
        return e && g.alternate === null && (g.flags |= 2),
        g
    }
    function s(g, h, y, S) {
        return h === null || h.tag !== 6 ? (h = Nu(y, g.mode, S),
        h.return = g,
        h) : (h = o(h, y),
        h.return = g,
        h)
    }
    function l(g, h, y, S) {
        var E = y.type;
        return E === no ? d(g, h, y.props.children, S, y.key) : h !== null && (h.elementType === E || typeof E == "object" && E !== null && E.$$typeof === jr && Xp(E) === h.type) ? (S = o(h, y.props),
        S.ref = ai(g, h, y),
        S.return = g,
        S) : (S = ps(y.type, y.key, y.props, null, g.mode, S),
        S.ref = ai(g, h, y),
        S.return = g,
        S)
    }
    function u(g, h, y, S) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== y.containerInfo || h.stateNode.implementation !== y.implementation ? (h = Iu(y, g.mode, S),
        h.return = g,
        h) : (h = o(h, y.children || []),
        h.return = g,
        h)
    }
    function d(g, h, y, S, E) {
        return h === null || h.tag !== 7 ? (h = Bn(y, g.mode, S, E),
        h.return = g,
        h) : (h = o(h, y),
        h.return = g,
        h)
    }
    function c(g, h, y) {
        if (typeof h == "string" && h !== "" || typeof h == "number")
            return h = Nu("" + h, g.mode, y),
            h.return = g,
            h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
            case Ra:
                return y = ps(h.type, h.key, h.props, null, g.mode, y),
                y.ref = ai(g, null, h),
                y.return = g,
                y;
            case ro:
                return h = Iu(h, g.mode, y),
                h.return = g,
                h;
            case jr:
                var S = h._init;
                return c(g, S(h._payload), y)
            }
            if (vi(h) || ti(h))
                return h = Bn(h, g.mode, y, null),
                h.return = g,
                h;
            Ua(g, h)
        }
        return null
    }
    function f(g, h, y, S) {
        var E = h !== null ? h.key : null;
        if (typeof y == "string" && y !== "" || typeof y == "number")
            return E !== null ? null : s(g, h, "" + y, S);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case Ra:
                return y.key === E ? l(g, h, y, S) : null;
            case ro:
                return y.key === E ? u(g, h, y, S) : null;
            case jr:
                return E = y._init,
                f(g, h, E(y._payload), S)
            }
            if (vi(y) || ti(y))
                return E !== null ? null : d(g, h, y, S, null);
            Ua(g, y)
        }
        return null
    }
    function p(g, h, y, S, E) {
        if (typeof S == "string" && S !== "" || typeof S == "number")
            return g = g.get(y) || null,
            s(h, g, "" + S, E);
        if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
            case Ra:
                return g = g.get(S.key === null ? y : S.key) || null,
                l(h, g, S, E);
            case ro:
                return g = g.get(S.key === null ? y : S.key) || null,
                u(h, g, S, E);
            case jr:
                var C = S._init;
                return p(g, h, y, C(S._payload), E)
            }
            if (vi(S) || ti(S))
                return g = g.get(y) || null,
                d(h, g, S, E, null);
            Ua(h, S)
        }
        return null
    }
    function m(g, h, y, S) {
        for (var E = null, C = null, P = h, D = h = 0, k = null; P !== null && D < y.length; D++) {
            P.index > D ? (k = P,
            P = null) : k = P.sibling;
            var O = f(g, P, y[D], S);
            if (O === null) {
                P === null && (P = k);
                break
            }
            e && P && O.alternate === null && t(g, P),
            h = i(O, h, D),
            C === null ? E = O : C.sibling = O,
            C = O,
            P = k
        }
        if (D === y.length)
            return r(g, P),
            me && En(g, D),
            E;
        if (P === null) {
            for (; D < y.length; D++)
                P = c(g, y[D], S),
                P !== null && (h = i(P, h, D),
                C === null ? E = P : C.sibling = P,
                C = P);
            return me && En(g, D),
            E
        }
        for (P = n(g, P); D < y.length; D++)
            k = p(P, g, D, y[D], S),
            k !== null && (e && k.alternate !== null && P.delete(k.key === null ? D : k.key),
            h = i(k, h, D),
            C === null ? E = k : C.sibling = k,
            C = k);
        return e && P.forEach(function(F) {
            return t(g, F)
        }),
        me && En(g, D),
        E
    }
    function v(g, h, y, S) {
        var E = ti(y);
        if (typeof E != "function")
            throw Error(M(150));
        if (y = E.call(y),
        y == null)
            throw Error(M(151));
        for (var C = E = null, P = h, D = h = 0, k = null, O = y.next(); P !== null && !O.done; D++,
        O = y.next()) {
            P.index > D ? (k = P,
            P = null) : k = P.sibling;
            var F = f(g, P, O.value, S);
            if (F === null) {
                P === null && (P = k);
                break
            }
            e && P && F.alternate === null && t(g, P),
            h = i(F, h, D),
            C === null ? E = F : C.sibling = F,
            C = F,
            P = k
        }
        if (O.done)
            return r(g, P),
            me && En(g, D),
            E;
        if (P === null) {
            for (; !O.done; D++,
            O = y.next())
                O = c(g, O.value, S),
                O !== null && (h = i(O, h, D),
                C === null ? E = O : C.sibling = O,
                C = O);
            return me && En(g, D),
            E
        }
        for (P = n(g, P); !O.done; D++,
        O = y.next())
            O = p(P, g, D, O.value, S),
            O !== null && (e && O.alternate !== null && P.delete(O.key === null ? D : O.key),
            h = i(O, h, D),
            C === null ? E = O : C.sibling = O,
            C = O);
        return e && P.forEach(function(j) {
            return t(g, j)
        }),
        me && En(g, D),
        E
    }
    function x(g, h, y, S) {
        if (typeof y == "object" && y !== null && y.type === no && y.key === null && (y = y.props.children),
        typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case Ra:
                e: {
                    for (var E = y.key, C = h; C !== null; ) {
                        if (C.key === E) {
                            if (E = y.type,
                            E === no) {
                                if (C.tag === 7) {
                                    r(g, C.sibling),
                                    h = o(C, y.props.children),
                                    h.return = g,
                                    g = h;
                                    break e
                                }
                            } else if (C.elementType === E || typeof E == "object" && E !== null && E.$$typeof === jr && Xp(E) === C.type) {
                                r(g, C.sibling),
                                h = o(C, y.props),
                                h.ref = ai(g, C, y),
                                h.return = g,
                                g = h;
                                break e
                            }
                            r(g, C);
                            break
                        } else
                            t(g, C);
                        C = C.sibling
                    }
                    y.type === no ? (h = Bn(y.props.children, g.mode, S, y.key),
                    h.return = g,
                    g = h) : (S = ps(y.type, y.key, y.props, null, g.mode, S),
                    S.ref = ai(g, h, y),
                    S.return = g,
                    g = S)
                }
                return a(g);
            case ro:
                e: {
                    for (C = y.key; h !== null; ) {
                        if (h.key === C)
                            if (h.tag === 4 && h.stateNode.containerInfo === y.containerInfo && h.stateNode.implementation === y.implementation) {
                                r(g, h.sibling),
                                h = o(h, y.children || []),
                                h.return = g,
                                g = h;
                                break e
                            } else {
                                r(g, h);
                                break
                            }
                        else
                            t(g, h);
                        h = h.sibling
                    }
                    h = Iu(y, g.mode, S),
                    h.return = g,
                    g = h
                }
                return a(g);
            case jr:
                return C = y._init,
                x(g, h, C(y._payload), S)
            }
            if (vi(y))
                return m(g, h, y, S);
            if (ti(y))
                return v(g, h, y, S);
            Ua(g, y)
        }
        return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y,
        h !== null && h.tag === 6 ? (r(g, h.sibling),
        h = o(h, y),
        h.return = g,
        g = h) : (r(g, h),
        h = Nu(y, g.mode, S),
        h.return = g,
        g = h),
        a(g)) : r(g, h)
    }
    return x
}
var Mo = wg(!0)
  , bg = wg(!1)
  , Os = vn(null)
  , As = null
  , fo = null
  , $d = null;
function zd() {
    $d = fo = As = null
}
function _d(e) {
    var t = Os.current;
    fe(Os),
    e._currentValue = t
}
function Nc(e, t, r) {
    for (; e !== null; ) {
        var n = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
        e === r)
            break;
        e = e.return
    }
}
function xo(e, t) {
    As = e,
    $d = fo = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (tt = !0),
    e.firstContext = null)
}
function Rt(e) {
    var t = e._currentValue;
    if ($d !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        fo === null) {
            if (As === null)
                throw Error(M(308));
            fo = e,
            As.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            fo = fo.next = e;
    return t
}
var In = null;
function Ud(e) {
    In === null ? In = [e] : In.push(e)
}
function Sg(e, t, r, n) {
    var o = t.interleaved;
    return o === null ? (r.next = r,
    Ud(t)) : (r.next = o.next,
    o.next = r),
    t.interleaved = r,
    Cr(e, n)
}
function Cr(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t),
    r = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        r = e.alternate,
        r !== null && (r.childLanes |= t),
        r = e,
        e = e.return;
    return r.tag === 3 ? r.stateNode : null
}
var Br = !1;
function Wd(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Cg(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function wr(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Jr(e, t, r) {
    var n = e.updateQueue;
    if (n === null)
        return null;
    if (n = n.shared,
    re & 2) {
        var o = n.pending;
        return o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        n.pending = t,
        Cr(e, r)
    }
    return o = n.interleaved,
    o === null ? (t.next = t,
    Ud(n)) : (t.next = o.next,
    o.next = t),
    n.interleaved = t,
    Cr(e, r)
}
function ss(e, t, r) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (r & 4194240) !== 0)) {
        var n = t.lanes;
        n &= e.pendingLanes,
        r |= n,
        t.lanes = r,
        Id(e, r)
    }
}
function Jp(e, t) {
    var r = e.updateQueue
      , n = e.alternate;
    if (n !== null && (n = n.updateQueue,
    r === n)) {
        var o = null
          , i = null;
        if (r = r.firstBaseUpdate,
        r !== null) {
            do {
                var a = {
                    eventTime: r.eventTime,
                    lane: r.lane,
                    tag: r.tag,
                    payload: r.payload,
                    callback: r.callback,
                    next: null
                };
                i === null ? o = i = a : i = i.next = a,
                r = r.next
            } while (r !== null);
            i === null ? o = i = t : i = i.next = t
        } else
            o = i = t;
        r = {
            baseState: n.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: n.shared,
            effects: n.effects
        },
        e.updateQueue = r;
        return
    }
    e = r.lastBaseUpdate,
    e === null ? r.firstBaseUpdate = t : e.next = t,
    r.lastBaseUpdate = t
}
function Ms(e, t, r, n) {
    var o = e.updateQueue;
    Br = !1;
    var i = o.firstBaseUpdate
      , a = o.lastBaseUpdate
      , s = o.shared.pending;
    if (s !== null) {
        o.shared.pending = null;
        var l = s
          , u = l.next;
        l.next = null,
        a === null ? i = u : a.next = u,
        a = l;
        var d = e.alternate;
        d !== null && (d = d.updateQueue,
        s = d.lastBaseUpdate,
        s !== a && (s === null ? d.firstBaseUpdate = u : s.next = u,
        d.lastBaseUpdate = l))
    }
    if (i !== null) {
        var c = o.baseState;
        a = 0,
        d = u = l = null,
        s = i;
        do {
            var f = s.lane
              , p = s.eventTime;
            if ((n & f) === f) {
                d !== null && (d = d.next = {
                    eventTime: p,
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                });
                e: {
                    var m = e
                      , v = s;
                    switch (f = t,
                    p = r,
                    v.tag) {
                    case 1:
                        if (m = v.payload,
                        typeof m == "function") {
                            c = m.call(p, c, f);
                            break e
                        }
                        c = m;
                        break e;
                    case 3:
                        m.flags = m.flags & -65537 | 128;
                    case 0:
                        if (m = v.payload,
                        f = typeof m == "function" ? m.call(p, c, f) : m,
                        f == null)
                            break e;
                        c = ge({}, c, f);
                        break e;
                    case 2:
                        Br = !0
                    }
                }
                s.callback !== null && s.lane !== 0 && (e.flags |= 64,
                f = o.effects,
                f === null ? o.effects = [s] : f.push(s))
            } else
                p = {
                    eventTime: p,
                    lane: f,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                },
                d === null ? (u = d = p,
                l = c) : d = d.next = p,
                a |= f;
            if (s = s.next,
            s === null) {
                if (s = o.shared.pending,
                s === null)
                    break;
                f = s,
                s = f.next,
                f.next = null,
                o.lastBaseUpdate = f,
                o.shared.pending = null
            }
        } while (!0);
        if (d === null && (l = c),
        o.baseState = l,
        o.firstBaseUpdate = u,
        o.lastBaseUpdate = d,
        t = o.shared.interleaved,
        t !== null) {
            o = t;
            do
                a |= o.lane,
                o = o.next;
            while (o !== t)
        } else
            i === null && (o.shared.lanes = 0);
        _n |= a,
        e.lanes = a,
        e.memoizedState = c
    }
}
function Zp(e, t, r) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var n = e[t]
              , o = n.callback;
            if (o !== null) {
                if (n.callback = null,
                n = r,
                typeof o != "function")
                    throw Error(M(191, o));
                o.call(n)
            }
        }
}
var fa = {}
  , sr = vn(fa)
  , _i = vn(fa)
  , Ui = vn(fa);
function kn(e) {
    if (e === fa)
        throw Error(M(174));
    return e
}
function Vd(e, t) {
    switch (ue(Ui, t),
    ue(_i, e),
    ue(sr, fa),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : sc(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = sc(t, e)
    }
    fe(sr),
    ue(sr, t)
}
function Lo() {
    fe(sr),
    fe(_i),
    fe(Ui)
}
function Eg(e) {
    kn(Ui.current);
    var t = kn(sr.current)
      , r = sc(t, e.type);
    t !== r && (ue(_i, e),
    ue(sr, r))
}
function Hd(e) {
    _i.current === e && (fe(sr),
    fe(_i))
}
var ve = vn(0);
function Ls(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var r = t.memoizedState;
            if (r !== null && (r = r.dehydrated,
            r === null || r.data === "$?" || r.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var bu = [];
function Gd() {
    for (var e = 0; e < bu.length; e++)
        bu[e]._workInProgressVersionPrimary = null;
    bu.length = 0
}
var ls = Nr.ReactCurrentDispatcher
  , Su = Nr.ReactCurrentBatchConfig
  , zn = 0
  , he = null
  , Ee = null
  , Ne = null
  , js = !1
  , Ci = !1
  , Wi = 0
  , P1 = 0;
function $e() {
    throw Error(M(321))
}
function qd(e, t) {
    if (t === null)
        return !1;
    for (var r = 0; r < t.length && r < e.length; r++)
        if (!Kt(e[r], t[r]))
            return !1;
    return !0
}
function Kd(e, t, r, n, o, i) {
    if (zn = i,
    he = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    ls.current = e === null || e.memoizedState === null ? k1 : T1,
    e = r(n, o),
    Ci) {
        i = 0;
        do {
            if (Ci = !1,
            Wi = 0,
            25 <= i)
                throw Error(M(301));
            i += 1,
            Ne = Ee = null,
            t.updateQueue = null,
            ls.current = R1,
            e = r(n, o)
        } while (Ci)
    }
    if (ls.current = Bs,
    t = Ee !== null && Ee.next !== null,
    zn = 0,
    Ne = Ee = he = null,
    js = !1,
    t)
        throw Error(M(300));
    return e
}
function Qd() {
    var e = Wi !== 0;
    return Wi = 0,
    e
}
function er() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Ne === null ? he.memoizedState = Ne = e : Ne = Ne.next = e,
    Ne
}
function Ot() {
    if (Ee === null) {
        var e = he.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = Ee.next;
    var t = Ne === null ? he.memoizedState : Ne.next;
    if (t !== null)
        Ne = t,
        Ee = e;
    else {
        if (e === null)
            throw Error(M(310));
        Ee = e,
        e = {
            memoizedState: Ee.memoizedState,
            baseState: Ee.baseState,
            baseQueue: Ee.baseQueue,
            queue: Ee.queue,
            next: null
        },
        Ne === null ? he.memoizedState = Ne = e : Ne = Ne.next = e
    }
    return Ne
}
function Vi(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Cu(e) {
    var t = Ot()
      , r = t.queue;
    if (r === null)
        throw Error(M(311));
    r.lastRenderedReducer = e;
    var n = Ee
      , o = n.baseQueue
      , i = r.pending;
    if (i !== null) {
        if (o !== null) {
            var a = o.next;
            o.next = i.next,
            i.next = a
        }
        n.baseQueue = o = i,
        r.pending = null
    }
    if (o !== null) {
        i = o.next,
        n = n.baseState;
        var s = a = null
          , l = null
          , u = i;
        do {
            var d = u.lane;
            if ((zn & d) === d)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                n = u.hasEagerState ? u.eagerState : e(n, u.action);
            else {
                var c = {
                    lane: d,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (s = l = c,
                a = n) : l = l.next = c,
                he.lanes |= d,
                _n |= d
            }
            u = u.next
        } while (u !== null && u !== i);
        l === null ? a = n : l.next = s,
        Kt(n, t.memoizedState) || (tt = !0),
        t.memoizedState = n,
        t.baseState = a,
        t.baseQueue = l,
        r.lastRenderedState = n
    }
    if (e = r.interleaved,
    e !== null) {
        o = e;
        do
            i = o.lane,
            he.lanes |= i,
            _n |= i,
            o = o.next;
        while (o !== e)
    } else
        o === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch]
}
function Eu(e) {
    var t = Ot()
      , r = t.queue;
    if (r === null)
        throw Error(M(311));
    r.lastRenderedReducer = e;
    var n = r.dispatch
      , o = r.pending
      , i = t.memoizedState;
    if (o !== null) {
        r.pending = null;
        var a = o = o.next;
        do
            i = e(i, a.action),
            a = a.next;
        while (a !== o);
        Kt(i, t.memoizedState) || (tt = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        r.lastRenderedState = i
    }
    return [i, n]
}
function Pg() {}
function Dg(e, t) {
    var r = he
      , n = Ot()
      , o = t()
      , i = !Kt(n.memoizedState, o);
    if (i && (n.memoizedState = o,
    tt = !0),
    n = n.queue,
    Yd(kg.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || i || Ne !== null && Ne.memoizedState.tag & 1) {
        if (r.flags |= 2048,
        Hi(9, Ig.bind(null, r, n, o, t), void 0, null),
        Ie === null)
            throw Error(M(349));
        zn & 30 || Ng(r, t, o)
    }
    return o
}
function Ng(e, t, r) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: r
    },
    t = he.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    he.updateQueue = t,
    t.stores = [e]) : (r = t.stores,
    r === null ? t.stores = [e] : r.push(e))
}
function Ig(e, t, r, n) {
    t.value = r,
    t.getSnapshot = n,
    Tg(t) && Rg(e)
}
function kg(e, t, r) {
    return r(function() {
        Tg(t) && Rg(e)
    })
}
function Tg(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var r = t();
        return !Kt(e, r)
    } catch {
        return !0
    }
}
function Rg(e) {
    var t = Cr(e, 1);
    t !== null && qt(t, e, 1, -1)
}
function em(e) {
    var t = er();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Vi,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = I1.bind(null, he, e),
    [t.memoizedState, e]
}
function Hi(e, t, r, n) {
    return e = {
        tag: e,
        create: t,
        destroy: r,
        deps: n,
        next: null
    },
    t = he.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    he.updateQueue = t,
    t.lastEffect = e.next = e) : (r = t.lastEffect,
    r === null ? t.lastEffect = e.next = e : (n = r.next,
    r.next = e,
    e.next = n,
    t.lastEffect = e)),
    e
}
function Og() {
    return Ot().memoizedState
}
function us(e, t, r, n) {
    var o = er();
    he.flags |= e,
    o.memoizedState = Hi(1 | t, r, void 0, n === void 0 ? null : n)
}
function vl(e, t, r, n) {
    var o = Ot();
    n = n === void 0 ? null : n;
    var i = void 0;
    if (Ee !== null) {
        var a = Ee.memoizedState;
        if (i = a.destroy,
        n !== null && qd(n, a.deps)) {
            o.memoizedState = Hi(t, r, i, n);
            return
        }
    }
    he.flags |= e,
    o.memoizedState = Hi(1 | t, r, i, n)
}
function tm(e, t) {
    return us(8390656, 8, e, t)
}
function Yd(e, t) {
    return vl(2048, 8, e, t)
}
function Ag(e, t) {
    return vl(4, 2, e, t)
}
function Mg(e, t) {
    return vl(4, 4, e, t)
}
function Lg(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function jg(e, t, r) {
    return r = r != null ? r.concat([e]) : null,
    vl(4, 4, Lg.bind(null, t, e), r)
}
function Xd() {}
function Bg(e, t) {
    var r = Ot();
    t = t === void 0 ? null : t;
    var n = r.memoizedState;
    return n !== null && t !== null && qd(t, n[1]) ? n[0] : (r.memoizedState = [e, t],
    e)
}
function Fg(e, t) {
    var r = Ot();
    t = t === void 0 ? null : t;
    var n = r.memoizedState;
    return n !== null && t !== null && qd(t, n[1]) ? n[0] : (e = e(),
    r.memoizedState = [e, t],
    e)
}
function $g(e, t, r) {
    return zn & 21 ? (Kt(r, t) || (r = Vh(),
    he.lanes |= r,
    _n |= r,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    tt = !0),
    e.memoizedState = r)
}
function D1(e, t) {
    var r = ie;
    ie = r !== 0 && 4 > r ? r : 4,
    e(!0);
    var n = Su.transition;
    Su.transition = {};
    try {
        e(!1),
        t()
    } finally {
        ie = r,
        Su.transition = n
    }
}
function zg() {
    return Ot().memoizedState
}
function N1(e, t, r) {
    var n = en(e);
    if (r = {
        lane: n,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    _g(e))
        Ug(t, r);
    else if (r = Sg(e, t, r, n),
    r !== null) {
        var o = Ke();
        qt(r, e, n, o),
        Wg(r, t, n)
    }
}
function I1(e, t, r) {
    var n = en(e)
      , o = {
        lane: n,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (_g(e))
        Ug(t, o);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
        i !== null))
            try {
                var a = t.lastRenderedState
                  , s = i(a, r);
                if (o.hasEagerState = !0,
                o.eagerState = s,
                Kt(s, a)) {
                    var l = t.interleaved;
                    l === null ? (o.next = o,
                    Ud(t)) : (o.next = l.next,
                    l.next = o),
                    t.interleaved = o;
                    return
                }
            } catch {} finally {}
        r = Sg(e, t, o, n),
        r !== null && (o = Ke(),
        qt(r, e, n, o),
        Wg(r, t, n))
    }
}
function _g(e) {
    var t = e.alternate;
    return e === he || t !== null && t === he
}
function Ug(e, t) {
    Ci = js = !0;
    var r = e.pending;
    r === null ? t.next = t : (t.next = r.next,
    r.next = t),
    e.pending = t
}
function Wg(e, t, r) {
    if (r & 4194240) {
        var n = t.lanes;
        n &= e.pendingLanes,
        r |= n,
        t.lanes = r,
        Id(e, r)
    }
}
var Bs = {
    readContext: Rt,
    useCallback: $e,
    useContext: $e,
    useEffect: $e,
    useImperativeHandle: $e,
    useInsertionEffect: $e,
    useLayoutEffect: $e,
    useMemo: $e,
    useReducer: $e,
    useRef: $e,
    useState: $e,
    useDebugValue: $e,
    useDeferredValue: $e,
    useTransition: $e,
    useMutableSource: $e,
    useSyncExternalStore: $e,
    useId: $e,
    unstable_isNewReconciler: !1
}
  , k1 = {
    readContext: Rt,
    useCallback: function(e, t) {
        return er().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: Rt,
    useEffect: tm,
    useImperativeHandle: function(e, t, r) {
        return r = r != null ? r.concat([e]) : null,
        us(4194308, 4, Lg.bind(null, t, e), r)
    },
    useLayoutEffect: function(e, t) {
        return us(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return us(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var r = er();
        return t = t === void 0 ? null : t,
        e = e(),
        r.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, r) {
        var n = er();
        return t = r !== void 0 ? r(t) : t,
        n.memoizedState = n.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        n.queue = e,
        e = e.dispatch = N1.bind(null, he, e),
        [n.memoizedState, e]
    },
    useRef: function(e) {
        var t = er();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: em,
    useDebugValue: Xd,
    useDeferredValue: function(e) {
        return er().memoizedState = e
    },
    useTransition: function() {
        var e = em(!1)
          , t = e[0];
        return e = D1.bind(null, e[1]),
        er().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, r) {
        var n = he
          , o = er();
        if (me) {
            if (r === void 0)
                throw Error(M(407));
            r = r()
        } else {
            if (r = t(),
            Ie === null)
                throw Error(M(349));
            zn & 30 || Ng(n, t, r)
        }
        o.memoizedState = r;
        var i = {
            value: r,
            getSnapshot: t
        };
        return o.queue = i,
        tm(kg.bind(null, n, i, e), [e]),
        n.flags |= 2048,
        Hi(9, Ig.bind(null, n, i, r, t), void 0, null),
        r
    },
    useId: function() {
        var e = er()
          , t = Ie.identifierPrefix;
        if (me) {
            var r = xr
              , n = yr;
            r = (n & ~(1 << 32 - Gt(n) - 1)).toString(32) + r,
            t = ":" + t + "R" + r,
            r = Wi++,
            0 < r && (t += "H" + r.toString(32)),
            t += ":"
        } else
            r = P1++,
            t = ":" + t + "r" + r.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , T1 = {
    readContext: Rt,
    useCallback: Bg,
    useContext: Rt,
    useEffect: Yd,
    useImperativeHandle: jg,
    useInsertionEffect: Ag,
    useLayoutEffect: Mg,
    useMemo: Fg,
    useReducer: Cu,
    useRef: Og,
    useState: function() {
        return Cu(Vi)
    },
    useDebugValue: Xd,
    useDeferredValue: function(e) {
        var t = Ot();
        return $g(t, Ee.memoizedState, e)
    },
    useTransition: function() {
        var e = Cu(Vi)[0]
          , t = Ot().memoizedState;
        return [e, t]
    },
    useMutableSource: Pg,
    useSyncExternalStore: Dg,
    useId: zg,
    unstable_isNewReconciler: !1
}
  , R1 = {
    readContext: Rt,
    useCallback: Bg,
    useContext: Rt,
    useEffect: Yd,
    useImperativeHandle: jg,
    useInsertionEffect: Ag,
    useLayoutEffect: Mg,
    useMemo: Fg,
    useReducer: Eu,
    useRef: Og,
    useState: function() {
        return Eu(Vi)
    },
    useDebugValue: Xd,
    useDeferredValue: function(e) {
        var t = Ot();
        return Ee === null ? t.memoizedState = e : $g(t, Ee.memoizedState, e)
    },
    useTransition: function() {
        var e = Eu(Vi)[0]
          , t = Ot().memoizedState;
        return [e, t]
    },
    useMutableSource: Pg,
    useSyncExternalStore: Dg,
    useId: zg,
    unstable_isNewReconciler: !1
};
function $t(e, t) {
    if (e && e.defaultProps) {
        t = ge({}, t),
        e = e.defaultProps;
        for (var r in e)
            t[r] === void 0 && (t[r] = e[r]);
        return t
    }
    return t
}
function Ic(e, t, r, n) {
    t = e.memoizedState,
    r = r(n, t),
    r = r == null ? t : ge({}, t, r),
    e.memoizedState = r,
    e.lanes === 0 && (e.updateQueue.baseState = r)
}
var hl = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Gn(e) === e : !1
    },
    enqueueSetState: function(e, t, r) {
        e = e._reactInternals;
        var n = Ke()
          , o = en(e)
          , i = wr(n, o);
        i.payload = t,
        r != null && (i.callback = r),
        t = Jr(e, i, o),
        t !== null && (qt(t, e, o, n),
        ss(t, e, o))
    },
    enqueueReplaceState: function(e, t, r) {
        e = e._reactInternals;
        var n = Ke()
          , o = en(e)
          , i = wr(n, o);
        i.tag = 1,
        i.payload = t,
        r != null && (i.callback = r),
        t = Jr(e, i, o),
        t !== null && (qt(t, e, o, n),
        ss(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var r = Ke()
          , n = en(e)
          , o = wr(r, n);
        o.tag = 2,
        t != null && (o.callback = t),
        t = Jr(e, o, n),
        t !== null && (qt(t, e, n, r),
        ss(t, e, n))
    }
};
function rm(e, t, r, n, o, i, a) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, a) : t.prototype && t.prototype.isPureReactComponent ? !Bi(r, n) || !Bi(o, i) : !0
}
function Vg(e, t, r) {
    var n = !1
      , o = ln
      , i = t.contextType;
    return typeof i == "object" && i !== null ? i = Rt(i) : (o = nt(t) ? Fn : We.current,
    n = t.contextTypes,
    i = (n = n != null) ? Oo(e, o) : ln),
    t = new t(r,i),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = hl,
    e.stateNode = t,
    t._reactInternals = e,
    n && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = o,
    e.__reactInternalMemoizedMaskedChildContext = i),
    t
}
function nm(e, t, r, n) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && hl.enqueueReplaceState(t, t.state, null)
}
function kc(e, t, r, n) {
    var o = e.stateNode;
    o.props = r,
    o.state = e.memoizedState,
    o.refs = {},
    Wd(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = Rt(i) : (i = nt(t) ? Fn : We.current,
    o.context = Oo(e, i)),
    o.state = e.memoizedState,
    i = t.getDerivedStateFromProps,
    typeof i == "function" && (Ic(e, t, i, r),
    o.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
    typeof o.componentWillMount == "function" && o.componentWillMount(),
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
    t !== o.state && hl.enqueueReplaceState(o, o.state, null),
    Ms(e, r, o, n),
    o.state = e.memoizedState),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function jo(e, t) {
    try {
        var r = ""
          , n = t;
        do
            r += ib(n),
            n = n.return;
        while (n);
        var o = r
    } catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function Pu(e, t, r) {
    return {
        value: e,
        source: null,
        stack: r ?? null,
        digest: t ?? null
    }
}
function Tc(e, t) {
    try {
        console.error(t.value)
    } catch (r) {
        setTimeout(function() {
            throw r
        })
    }
}
var O1 = typeof WeakMap == "function" ? WeakMap : Map;
function Hg(e, t, r) {
    r = wr(-1, r),
    r.tag = 3,
    r.payload = {
        element: null
    };
    var n = t.value;
    return r.callback = function() {
        $s || ($s = !0,
        zc = n),
        Tc(e, t)
    }
    ,
    r
}
function Gg(e, t, r) {
    r = wr(-1, r),
    r.tag = 3;
    var n = e.type.getDerivedStateFromError;
    if (typeof n == "function") {
        var o = t.value;
        r.payload = function() {
            return n(o)
        }
        ,
        r.callback = function() {
            Tc(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (r.callback = function() {
        Tc(e, t),
        typeof n != "function" && (Zr === null ? Zr = new Set([this]) : Zr.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: a !== null ? a : ""
        })
    }
    ),
    r
}
function om(e, t, r) {
    var n = e.pingCache;
    if (n === null) {
        n = e.pingCache = new O1;
        var o = new Set;
        n.set(t, o)
    } else
        o = n.get(t),
        o === void 0 && (o = new Set,
        n.set(t, o));
    o.has(r) || (o.add(r),
    e = G1.bind(null, e, t, r),
    t.then(e, e))
}
function im(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function am(e, t, r, n, o) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = o,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    r.flags |= 131072,
    r.flags &= -52805,
    r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = wr(-1, 1),
    t.tag = 2,
    Jr(r, t, 1))),
    r.lanes |= 1),
    e)
}
var A1 = Nr.ReactCurrentOwner
  , tt = !1;
function Ge(e, t, r, n) {
    t.child = e === null ? bg(t, null, r, n) : Mo(t, e.child, r, n)
}
function sm(e, t, r, n, o) {
    r = r.render;
    var i = t.ref;
    return xo(t, o),
    n = Kd(e, t, r, n, i, o),
    r = Qd(),
    e !== null && !tt ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Er(e, t, o)) : (me && r && jd(t),
    t.flags |= 1,
    Ge(e, t, n, o),
    t.child)
}
function lm(e, t, r, n, o) {
    if (e === null) {
        var i = r.type;
        return typeof i == "function" && !af(i) && i.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15,
        t.type = i,
        qg(e, t, i, n, o)) : (e = ps(r.type, null, n, t, t.mode, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (i = e.child,
    !(e.lanes & o)) {
        var a = i.memoizedProps;
        if (r = r.compare,
        r = r !== null ? r : Bi,
        r(a, n) && e.ref === t.ref)
            return Er(e, t, o)
    }
    return t.flags |= 1,
    e = tn(i, n),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function qg(e, t, r, n, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Bi(i, n) && e.ref === t.ref)
            if (tt = !1,
            t.pendingProps = n = i,
            (e.lanes & o) !== 0)
                e.flags & 131072 && (tt = !0);
            else
                return t.lanes = e.lanes,
                Er(e, t, o)
    }
    return Rc(e, t, r, n, o)
}
function Kg(e, t, r) {
    var n = t.pendingProps
      , o = n.children
      , i = e !== null ? e.memoizedState : null;
    if (n.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            ue(mo, at),
            at |= r;
        else {
            if (!(r & 1073741824))
                return e = i !== null ? i.baseLanes | r : r,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                ue(mo, at),
                at |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            n = i !== null ? i.baseLanes : r,
            ue(mo, at),
            at |= n
        }
    else
        i !== null ? (n = i.baseLanes | r,
        t.memoizedState = null) : n = r,
        ue(mo, at),
        at |= n;
    return Ge(e, t, o, r),
    t.child
}
function Qg(e, t) {
    var r = t.ref;
    (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Rc(e, t, r, n, o) {
    var i = nt(r) ? Fn : We.current;
    return i = Oo(t, i),
    xo(t, o),
    r = Kd(e, t, r, n, i, o),
    n = Qd(),
    e !== null && !tt ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Er(e, t, o)) : (me && n && jd(t),
    t.flags |= 1,
    Ge(e, t, r, o),
    t.child)
}
function um(e, t, r, n, o) {
    if (nt(r)) {
        var i = !0;
        ks(t)
    } else
        i = !1;
    if (xo(t, o),
    t.stateNode === null)
        cs(e, t),
        Vg(t, r, n),
        kc(t, r, n, o),
        n = !0;
    else if (e === null) {
        var a = t.stateNode
          , s = t.memoizedProps;
        a.props = s;
        var l = a.context
          , u = r.contextType;
        typeof u == "object" && u !== null ? u = Rt(u) : (u = nt(r) ? Fn : We.current,
        u = Oo(t, u));
        var d = r.getDerivedStateFromProps
          , c = typeof d == "function" || typeof a.getSnapshotBeforeUpdate == "function";
        c || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== n || l !== u) && nm(t, a, n, u),
        Br = !1;
        var f = t.memoizedState;
        a.state = f,
        Ms(t, n, a, o),
        l = t.memoizedState,
        s !== n || f !== l || rt.current || Br ? (typeof d == "function" && (Ic(t, r, d, n),
        l = t.memoizedState),
        (s = Br || rm(t, r, s, n, f, l, u)) ? (c || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(),
        typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()),
        typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = n,
        t.memoizedState = l),
        a.props = n,
        a.state = l,
        a.context = u,
        n = s) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
        n = !1)
    } else {
        a = t.stateNode,
        Cg(e, t),
        s = t.memoizedProps,
        u = t.type === t.elementType ? s : $t(t.type, s),
        a.props = u,
        c = t.pendingProps,
        f = a.context,
        l = r.contextType,
        typeof l == "object" && l !== null ? l = Rt(l) : (l = nt(r) ? Fn : We.current,
        l = Oo(t, l));
        var p = r.getDerivedStateFromProps;
        (d = typeof p == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== c || f !== l) && nm(t, a, n, l),
        Br = !1,
        f = t.memoizedState,
        a.state = f,
        Ms(t, n, a, o);
        var m = t.memoizedState;
        s !== c || f !== m || rt.current || Br ? (typeof p == "function" && (Ic(t, r, p, n),
        m = t.memoizedState),
        (u = Br || rm(t, r, u, n, f, m, l) || !1) ? (d || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(n, m, l),
        typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(n, m, l)),
        typeof a.componentDidUpdate == "function" && (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = n,
        t.memoizedState = m),
        a.props = n,
        a.state = m,
        a.context = l,
        n = u) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        n = !1)
    }
    return Oc(e, t, r, n, i, o)
}
function Oc(e, t, r, n, o, i) {
    Qg(e, t);
    var a = (t.flags & 128) !== 0;
    if (!n && !a)
        return o && Kp(t, r, !1),
        Er(e, t, i);
    n = t.stateNode,
    A1.current = t;
    var s = a && typeof r.getDerivedStateFromError != "function" ? null : n.render();
    return t.flags |= 1,
    e !== null && a ? (t.child = Mo(t, e.child, null, i),
    t.child = Mo(t, null, s, i)) : Ge(e, t, s, i),
    t.memoizedState = n.state,
    o && Kp(t, r, !0),
    t.child
}
function Yg(e) {
    var t = e.stateNode;
    t.pendingContext ? qp(e, t.pendingContext, t.pendingContext !== t.context) : t.context && qp(e, t.context, !1),
    Vd(e, t.containerInfo)
}
function cm(e, t, r, n, o) {
    return Ao(),
    Fd(o),
    t.flags |= 256,
    Ge(e, t, r, n),
    t.child
}
var Ac = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Mc(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Xg(e, t, r) {
    var n = t.pendingProps, o = ve.current, i = !1, a = (t.flags & 128) !== 0, s;
    if ((s = a) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s ? (i = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
    ue(ve, o & 1),
    e === null)
        return Dc(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (a = n.children,
        e = n.fallback,
        i ? (n = t.mode,
        i = t.child,
        a = {
            mode: "hidden",
            children: a
        },
        !(n & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = a) : i = xl(a, n, 0, null),
        e = Bn(e, n, r, null),
        i.return = t,
        e.return = t,
        i.sibling = e,
        t.child = i,
        t.child.memoizedState = Mc(r),
        t.memoizedState = Ac,
        e) : Jd(t, a));
    if (o = e.memoizedState,
    o !== null && (s = o.dehydrated,
    s !== null))
        return M1(e, t, a, n, s, o, r);
    if (i) {
        i = n.fallback,
        a = t.mode,
        o = e.child,
        s = o.sibling;
        var l = {
            mode: "hidden",
            children: n.children
        };
        return !(a & 1) && t.child !== o ? (n = t.child,
        n.childLanes = 0,
        n.pendingProps = l,
        t.deletions = null) : (n = tn(o, l),
        n.subtreeFlags = o.subtreeFlags & 14680064),
        s !== null ? i = tn(s, i) : (i = Bn(i, a, r, null),
        i.flags |= 2),
        i.return = t,
        n.return = t,
        n.sibling = i,
        t.child = n,
        n = i,
        i = t.child,
        a = e.child.memoizedState,
        a = a === null ? Mc(r) : {
            baseLanes: a.baseLanes | r,
            cachePool: null,
            transitions: a.transitions
        },
        i.memoizedState = a,
        i.childLanes = e.childLanes & ~r,
        t.memoizedState = Ac,
        n
    }
    return i = e.child,
    e = i.sibling,
    n = tn(i, {
        mode: "visible",
        children: n.children
    }),
    !(t.mode & 1) && (n.lanes = r),
    n.return = t,
    n.sibling = null,
    e !== null && (r = t.deletions,
    r === null ? (t.deletions = [e],
    t.flags |= 16) : r.push(e)),
    t.child = n,
    t.memoizedState = null,
    n
}
function Jd(e, t) {
    return t = xl({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Wa(e, t, r, n) {
    return n !== null && Fd(n),
    Mo(t, e.child, null, r),
    e = Jd(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function M1(e, t, r, n, o, i, a) {
    if (r)
        return t.flags & 256 ? (t.flags &= -257,
        n = Pu(Error(M(422))),
        Wa(e, t, a, n)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (i = n.fallback,
        o = t.mode,
        n = xl({
            mode: "visible",
            children: n.children
        }, o, 0, null),
        i = Bn(i, o, a, null),
        i.flags |= 2,
        n.return = t,
        i.return = t,
        n.sibling = i,
        t.child = n,
        t.mode & 1 && Mo(t, e.child, null, a),
        t.child.memoizedState = Mc(a),
        t.memoizedState = Ac,
        i);
    if (!(t.mode & 1))
        return Wa(e, t, a, null);
    if (o.data === "$!") {
        if (n = o.nextSibling && o.nextSibling.dataset,
        n)
            var s = n.dgst;
        return n = s,
        i = Error(M(419)),
        n = Pu(i, n, void 0),
        Wa(e, t, a, n)
    }
    if (s = (a & e.childLanes) !== 0,
    tt || s) {
        if (n = Ie,
        n !== null) {
            switch (a & -a) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default:
                o = 0
            }
            o = o & (n.suspendedLanes | a) ? 0 : o,
            o !== 0 && o !== i.retryLane && (i.retryLane = o,
            Cr(e, o),
            qt(n, e, o, -1))
        }
        return of(),
        n = Pu(Error(M(421))),
        Wa(e, t, a, n)
    }
    return o.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = q1.bind(null, e),
    o._reactRetry = t,
    null) : (e = i.treeContext,
    lt = Xr(o.nextSibling),
    ct = t,
    me = !0,
    Vt = null,
    e !== null && (Pt[Dt++] = yr,
    Pt[Dt++] = xr,
    Pt[Dt++] = $n,
    yr = e.id,
    xr = e.overflow,
    $n = t),
    t = Jd(t, n.children),
    t.flags |= 4096,
    t)
}
function dm(e, t, r) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t),
    Nc(e.return, t, r)
}
function Du(e, t, r, n, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: o
    } : (i.isBackwards = t,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = n,
    i.tail = r,
    i.tailMode = o)
}
function Jg(e, t, r) {
    var n = t.pendingProps
      , o = n.revealOrder
      , i = n.tail;
    if (Ge(e, t, n.children, r),
    n = ve.current,
    n & 2)
        n = n & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && dm(e, r, t);
                else if (e.tag === 19)
                    dm(e, r, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        n &= 1
    }
    if (ue(ve, n),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
        case "forwards":
            for (r = t.child,
            o = null; r !== null; )
                e = r.alternate,
                e !== null && Ls(e) === null && (o = r),
                r = r.sibling;
            r = o,
            r === null ? (o = t.child,
            t.child = null) : (o = r.sibling,
            r.sibling = null),
            Du(t, !1, o, r, i);
            break;
        case "backwards":
            for (r = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && Ls(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = r,
                r = o,
                o = e
            }
            Du(t, !0, r, null, i);
            break;
        case "together":
            Du(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function cs(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Er(e, t, r) {
    if (e !== null && (t.dependencies = e.dependencies),
    _n |= t.lanes,
    !(r & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(M(153));
    if (t.child !== null) {
        for (e = t.child,
        r = tn(e, e.pendingProps),
        t.child = r,
        r.return = t; e.sibling !== null; )
            e = e.sibling,
            r = r.sibling = tn(e, e.pendingProps),
            r.return = t;
        r.sibling = null
    }
    return t.child
}
function L1(e, t, r) {
    switch (t.tag) {
    case 3:
        Yg(t),
        Ao();
        break;
    case 5:
        Eg(t);
        break;
    case 1:
        nt(t.type) && ks(t);
        break;
    case 4:
        Vd(t, t.stateNode.containerInfo);
        break;
    case 10:
        var n = t.type._context
          , o = t.memoizedProps.value;
        ue(Os, n._currentValue),
        n._currentValue = o;
        break;
    case 13:
        if (n = t.memoizedState,
        n !== null)
            return n.dehydrated !== null ? (ue(ve, ve.current & 1),
            t.flags |= 128,
            null) : r & t.child.childLanes ? Xg(e, t, r) : (ue(ve, ve.current & 1),
            e = Er(e, t, r),
            e !== null ? e.sibling : null);
        ue(ve, ve.current & 1);
        break;
    case 19:
        if (n = (r & t.childLanes) !== 0,
        e.flags & 128) {
            if (n)
                return Jg(e, t, r);
            t.flags |= 128
        }
        if (o = t.memoizedState,
        o !== null && (o.rendering = null,
        o.tail = null,
        o.lastEffect = null),
        ue(ve, ve.current),
        n)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        Kg(e, t, r)
    }
    return Er(e, t, r)
}
var Zg, Lc, ey, ty;
Zg = function(e, t) {
    for (var r = t.child; r !== null; ) {
        if (r.tag === 5 || r.tag === 6)
            e.appendChild(r.stateNode);
        else if (r.tag !== 4 && r.child !== null) {
            r.child.return = r,
            r = r.child;
            continue
        }
        if (r === t)
            break;
        for (; r.sibling === null; ) {
            if (r.return === null || r.return === t)
                return;
            r = r.return
        }
        r.sibling.return = r.return,
        r = r.sibling
    }
}
;
Lc = function() {}
;
ey = function(e, t, r, n) {
    var o = e.memoizedProps;
    if (o !== n) {
        e = t.stateNode,
        kn(sr.current);
        var i = null;
        switch (r) {
        case "input":
            o = nc(e, o),
            n = nc(e, n),
            i = [];
            break;
        case "select":
            o = ge({}, o, {
                value: void 0
            }),
            n = ge({}, n, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            o = ac(e, o),
            n = ac(e, n),
            i = [];
            break;
        default:
            typeof o.onClick != "function" && typeof n.onClick == "function" && (e.onclick = Ns)
        }
        lc(r, n);
        var a;
        r = null;
        for (u in o)
            if (!n.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var s = o[u];
                    for (a in s)
                        s.hasOwnProperty(a) && (r || (r = {}),
                        r[a] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ti.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in n) {
            var l = n[u];
            if (s = o != null ? o[u] : void 0,
            n.hasOwnProperty(u) && l !== s && (l != null || s != null))
                if (u === "style")
                    if (s) {
                        for (a in s)
                            !s.hasOwnProperty(a) || l && l.hasOwnProperty(a) || (r || (r = {}),
                            r[a] = "");
                        for (a in l)
                            l.hasOwnProperty(a) && s[a] !== l[a] && (r || (r = {}),
                            r[a] = l[a])
                    } else
                        r || (i || (i = []),
                        i.push(u, r)),
                        r = l;
                else
                    u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    s = s ? s.__html : void 0,
                    l != null && s !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ti.hasOwnProperty(u) ? (l != null && u === "onScroll" && de("scroll", e),
                    i || s === l || (i = [])) : (i = i || []).push(u, l))
        }
        r && (i = i || []).push("style", r);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
ty = function(e, t, r, n) {
    r !== n && (t.flags |= 4)
}
;
function si(e, t) {
    if (!me)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var r = null; t !== null; )
                t.alternate !== null && (r = t),
                t = t.sibling;
            r === null ? e.tail = null : r.sibling = null;
            break;
        case "collapsed":
            r = e.tail;
            for (var n = null; r !== null; )
                r.alternate !== null && (n = r),
                r = r.sibling;
            n === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null
        }
}
function ze(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , r = 0
      , n = 0;
    if (t)
        for (var o = e.child; o !== null; )
            r |= o.lanes | o.childLanes,
            n |= o.subtreeFlags & 14680064,
            n |= o.flags & 14680064,
            o.return = e,
            o = o.sibling;
    else
        for (o = e.child; o !== null; )
            r |= o.lanes | o.childLanes,
            n |= o.subtreeFlags,
            n |= o.flags,
            o.return = e,
            o = o.sibling;
    return e.subtreeFlags |= n,
    e.childLanes = r,
    t
}
function j1(e, t, r) {
    var n = t.pendingProps;
    switch (Bd(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return ze(t),
        null;
    case 1:
        return nt(t.type) && Is(),
        ze(t),
        null;
    case 3:
        return n = t.stateNode,
        Lo(),
        fe(rt),
        fe(We),
        Gd(),
        n.pendingContext && (n.context = n.pendingContext,
        n.pendingContext = null),
        (e === null || e.child === null) && (_a(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Vt !== null && (Wc(Vt),
        Vt = null))),
        Lc(e, t),
        ze(t),
        null;
    case 5:
        Hd(t);
        var o = kn(Ui.current);
        if (r = t.type,
        e !== null && t.stateNode != null)
            ey(e, t, r, n, o),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!n) {
                if (t.stateNode === null)
                    throw Error(M(166));
                return ze(t),
                null
            }
            if (e = kn(sr.current),
            _a(t)) {
                n = t.stateNode,
                r = t.type;
                var i = t.memoizedProps;
                switch (n[or] = t,
                n[zi] = i,
                e = (t.mode & 1) !== 0,
                r) {
                case "dialog":
                    de("cancel", n),
                    de("close", n);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    de("load", n);
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < gi.length; o++)
                        de(gi[o], n);
                    break;
                case "source":
                    de("error", n);
                    break;
                case "img":
                case "image":
                case "link":
                    de("error", n),
                    de("load", n);
                    break;
                case "details":
                    de("toggle", n);
                    break;
                case "input":
                    wp(n, i),
                    de("invalid", n);
                    break;
                case "select":
                    n._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    de("invalid", n);
                    break;
                case "textarea":
                    Sp(n, i),
                    de("invalid", n)
                }
                lc(r, i),
                o = null;
                for (var a in i)
                    if (i.hasOwnProperty(a)) {
                        var s = i[a];
                        a === "children" ? typeof s == "string" ? n.textContent !== s && (i.suppressHydrationWarning !== !0 && za(n.textContent, s, e),
                        o = ["children", s]) : typeof s == "number" && n.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && za(n.textContent, s, e),
                        o = ["children", "" + s]) : Ti.hasOwnProperty(a) && s != null && a === "onScroll" && de("scroll", n)
                    }
                switch (r) {
                case "input":
                    Oa(n),
                    bp(n, i, !0);
                    break;
                case "textarea":
                    Oa(n),
                    Cp(n);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (n.onclick = Ns)
                }
                n = o,
                t.updateQueue = n,
                n !== null && (t.flags |= 4)
            } else {
                a = o.nodeType === 9 ? o : o.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = kh(r)),
                e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = a.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof n.is == "string" ? e = a.createElement(r, {
                    is: n.is
                }) : (e = a.createElement(r),
                r === "select" && (a = e,
                n.multiple ? a.multiple = !0 : n.size && (a.size = n.size))) : e = a.createElementNS(e, r),
                e[or] = t,
                e[zi] = n,
                Zg(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (a = uc(r, n),
                    r) {
                    case "dialog":
                        de("cancel", e),
                        de("close", e),
                        o = n;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        de("load", e),
                        o = n;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < gi.length; o++)
                            de(gi[o], e);
                        o = n;
                        break;
                    case "source":
                        de("error", e),
                        o = n;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        de("error", e),
                        de("load", e),
                        o = n;
                        break;
                    case "details":
                        de("toggle", e),
                        o = n;
                        break;
                    case "input":
                        wp(e, n),
                        o = nc(e, n),
                        de("invalid", e);
                        break;
                    case "option":
                        o = n;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!n.multiple
                        },
                        o = ge({}, n, {
                            value: void 0
                        }),
                        de("invalid", e);
                        break;
                    case "textarea":
                        Sp(e, n),
                        o = ac(e, n),
                        de("invalid", e);
                        break;
                    default:
                        o = n
                    }
                    lc(r, o),
                    s = o;
                    for (i in s)
                        if (s.hasOwnProperty(i)) {
                            var l = s[i];
                            i === "style" ? Oh(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && Th(e, l)) : i === "children" ? typeof l == "string" ? (r !== "textarea" || l !== "") && Ri(e, l) : typeof l == "number" && Ri(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Ti.hasOwnProperty(i) ? l != null && i === "onScroll" && de("scroll", e) : l != null && Sd(e, i, l, a))
                        }
                    switch (r) {
                    case "input":
                        Oa(e),
                        bp(e, n, !1);
                        break;
                    case "textarea":
                        Oa(e),
                        Cp(e);
                        break;
                    case "option":
                        n.value != null && e.setAttribute("value", "" + sn(n.value));
                        break;
                    case "select":
                        e.multiple = !!n.multiple,
                        i = n.value,
                        i != null ? vo(e, !!n.multiple, i, !1) : n.defaultValue != null && vo(e, !!n.multiple, n.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = Ns)
                    }
                    switch (r) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        n = !!n.autoFocus;
                        break e;
                    case "img":
                        n = !0;
                        break e;
                    default:
                        n = !1
                    }
                }
                n && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return ze(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            ty(e, t, e.memoizedProps, n);
        else {
            if (typeof n != "string" && t.stateNode === null)
                throw Error(M(166));
            if (r = kn(Ui.current),
            kn(sr.current),
            _a(t)) {
                if (n = t.stateNode,
                r = t.memoizedProps,
                n[or] = t,
                (i = n.nodeValue !== r) && (e = ct,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        za(n.nodeValue, r, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && za(n.nodeValue, r, (e.mode & 1) !== 0)
                    }
                i && (t.flags |= 4)
            } else
                n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n),
                n[or] = t,
                t.stateNode = n
        }
        return ze(t),
        null;
    case 13:
        if (fe(ve),
        n = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (me && lt !== null && t.mode & 1 && !(t.flags & 128))
                xg(),
                Ao(),
                t.flags |= 98560,
                i = !1;
            else if (i = _a(t),
            n !== null && n.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(M(318));
                    if (i = t.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(M(317));
                    i[or] = t
                } else
                    Ao(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                ze(t),
                i = !1
            } else
                Vt !== null && (Wc(Vt),
                Vt = null),
                i = !0;
            if (!i)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = r,
        t) : (n = n !== null,
        n !== (e !== null && e.memoizedState !== null) && n && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || ve.current & 1 ? De === 0 && (De = 3) : of())),
        t.updateQueue !== null && (t.flags |= 4),
        ze(t),
        null);
    case 4:
        return Lo(),
        Lc(e, t),
        e === null && Fi(t.stateNode.containerInfo),
        ze(t),
        null;
    case 10:
        return _d(t.type._context),
        ze(t),
        null;
    case 17:
        return nt(t.type) && Is(),
        ze(t),
        null;
    case 19:
        if (fe(ve),
        i = t.memoizedState,
        i === null)
            return ze(t),
            null;
        if (n = (t.flags & 128) !== 0,
        a = i.rendering,
        a === null)
            if (n)
                si(i, !1);
            else {
                if (De !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (a = Ls(e),
                        a !== null) {
                            for (t.flags |= 128,
                            si(i, !1),
                            n = a.updateQueue,
                            n !== null && (t.updateQueue = n,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            n = r,
                            r = t.child; r !== null; )
                                i = r,
                                e = n,
                                i.flags &= 14680066,
                                a = i.alternate,
                                a === null ? (i.childLanes = 0,
                                i.lanes = e,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = a.childLanes,
                                i.lanes = a.lanes,
                                i.child = a.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = a.memoizedProps,
                                i.memoizedState = a.memoizedState,
                                i.updateQueue = a.updateQueue,
                                i.type = a.type,
                                e = a.dependencies,
                                i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                r = r.sibling;
                            return ue(ve, ve.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && be() > Bo && (t.flags |= 128,
                n = !0,
                si(i, !1),
                t.lanes = 4194304)
            }
        else {
            if (!n)
                if (e = Ls(a),
                e !== null) {
                    if (t.flags |= 128,
                    n = !0,
                    r = e.updateQueue,
                    r !== null && (t.updateQueue = r,
                    t.flags |= 4),
                    si(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !a.alternate && !me)
                        return ze(t),
                        null
                } else
                    2 * be() - i.renderingStartTime > Bo && r !== 1073741824 && (t.flags |= 128,
                    n = !0,
                    si(i, !1),
                    t.lanes = 4194304);
            i.isBackwards ? (a.sibling = t.child,
            t.child = a) : (r = i.last,
            r !== null ? r.sibling = a : t.child = a,
            i.last = a)
        }
        return i.tail !== null ? (t = i.tail,
        i.rendering = t,
        i.tail = t.sibling,
        i.renderingStartTime = be(),
        t.sibling = null,
        r = ve.current,
        ue(ve, n ? r & 1 | 2 : r & 1),
        t) : (ze(t),
        null);
    case 22:
    case 23:
        return nf(),
        n = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== n && (t.flags |= 8192),
        n && t.mode & 1 ? at & 1073741824 && (ze(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : ze(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(M(156, t.tag))
}
function B1(e, t) {
    switch (Bd(t),
    t.tag) {
    case 1:
        return nt(t.type) && Is(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Lo(),
        fe(rt),
        fe(We),
        Gd(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Hd(t),
        null;
    case 13:
        if (fe(ve),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(M(340));
            Ao()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return fe(ve),
        null;
    case 4:
        return Lo(),
        null;
    case 10:
        return _d(t.type._context),
        null;
    case 22:
    case 23:
        return nf(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Va = !1
  , Ue = !1
  , F1 = typeof WeakSet == "function" ? WeakSet : Set
  , z = null;
function po(e, t) {
    var r = e.ref;
    if (r !== null)
        if (typeof r == "function")
            try {
                r(null)
            } catch (n) {
                xe(e, t, n)
            }
        else
            r.current = null
}
function jc(e, t, r) {
    try {
        r()
    } catch (n) {
        xe(e, t, n)
    }
}
var fm = !1;
function $1(e, t) {
    if (xc = Es,
    e = ag(),
    Ld(e)) {
        if ("selectionStart"in e)
            var r = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                r = (r = e.ownerDocument) && r.defaultView || window;
                var n = r.getSelection && r.getSelection();
                if (n && n.rangeCount !== 0) {
                    r = n.anchorNode;
                    var o = n.anchorOffset
                      , i = n.focusNode;
                    n = n.focusOffset;
                    try {
                        r.nodeType,
                        i.nodeType
                    } catch {
                        r = null;
                        break e
                    }
                    var a = 0
                      , s = -1
                      , l = -1
                      , u = 0
                      , d = 0
                      , c = e
                      , f = null;
                    t: for (; ; ) {
                        for (var p; c !== r || o !== 0 && c.nodeType !== 3 || (s = a + o),
                        c !== i || n !== 0 && c.nodeType !== 3 || (l = a + n),
                        c.nodeType === 3 && (a += c.nodeValue.length),
                        (p = c.firstChild) !== null; )
                            f = c,
                            c = p;
                        for (; ; ) {
                            if (c === e)
                                break t;
                            if (f === r && ++u === o && (s = a),
                            f === i && ++d === n && (l = a),
                            (p = c.nextSibling) !== null)
                                break;
                            c = f,
                            f = c.parentNode
                        }
                        c = p
                    }
                    r = s === -1 || l === -1 ? null : {
                        start: s,
                        end: l
                    }
                } else
                    r = null
            }
        r = r || {
            start: 0,
            end: 0
        }
    } else
        r = null;
    for (wc = {
        focusedElem: e,
        selectionRange: r
    },
    Es = !1,
    z = t; z !== null; )
        if (t = z,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            z = e;
        else
            for (; z !== null; ) {
                t = z;
                try {
                    var m = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (m !== null) {
                                var v = m.memoizedProps
                                  , x = m.memoizedState
                                  , g = t.stateNode
                                  , h = g.getSnapshotBeforeUpdate(t.elementType === t.type ? v : $t(t.type, v), x);
                                g.__reactInternalSnapshotBeforeUpdate = h
                            }
                            break;
                        case 3:
                            var y = t.stateNode.containerInfo;
                            y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(M(163))
                        }
                } catch (S) {
                    xe(t, t.return, S)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    z = e;
                    break
                }
                z = t.return
            }
    return m = fm,
    fm = !1,
    m
}
function Ei(e, t, r) {
    var n = t.updateQueue;
    if (n = n !== null ? n.lastEffect : null,
    n !== null) {
        var o = n = n.next;
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                o.destroy = void 0,
                i !== void 0 && jc(t, r, i)
            }
            o = o.next
        } while (o !== n)
    }
}
function gl(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var r = t = t.next;
        do {
            if ((r.tag & e) === e) {
                var n = r.create;
                r.destroy = n()
            }
            r = r.next
        } while (r !== t)
    }
}
function Bc(e) {
    var t = e.ref;
    if (t !== null) {
        var r = e.stateNode;
        switch (e.tag) {
        case 5:
            e = r;
            break;
        default:
            e = r
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function ry(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    ry(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[or],
    delete t[zi],
    delete t[Cc],
    delete t[b1],
    delete t[S1])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function ny(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function pm(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || ny(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Fc(e, t, r) {
    var n = e.tag;
    if (n === 5 || n === 6)
        e = e.stateNode,
        t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode,
        t.insertBefore(e, r)) : (t = r,
        t.appendChild(e)),
        r = r._reactRootContainer,
        r != null || t.onclick !== null || (t.onclick = Ns));
    else if (n !== 4 && (e = e.child,
    e !== null))
        for (Fc(e, t, r),
        e = e.sibling; e !== null; )
            Fc(e, t, r),
            e = e.sibling
}
function $c(e, t, r) {
    var n = e.tag;
    if (n === 5 || n === 6)
        e = e.stateNode,
        t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (n !== 4 && (e = e.child,
    e !== null))
        for ($c(e, t, r),
        e = e.sibling; e !== null; )
            $c(e, t, r),
            e = e.sibling
}
var Ae = null
  , Wt = !1;
function Or(e, t, r) {
    for (r = r.child; r !== null; )
        oy(e, t, r),
        r = r.sibling
}
function oy(e, t, r) {
    if (ar && typeof ar.onCommitFiberUnmount == "function")
        try {
            ar.onCommitFiberUnmount(ul, r)
        } catch {}
    switch (r.tag) {
    case 5:
        Ue || po(r, t);
    case 6:
        var n = Ae
          , o = Wt;
        Ae = null,
        Or(e, t, r),
        Ae = n,
        Wt = o,
        Ae !== null && (Wt ? (e = Ae,
        r = r.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : Ae.removeChild(r.stateNode));
        break;
    case 18:
        Ae !== null && (Wt ? (e = Ae,
        r = r.stateNode,
        e.nodeType === 8 ? xu(e.parentNode, r) : e.nodeType === 1 && xu(e, r),
        Li(e)) : xu(Ae, r.stateNode));
        break;
    case 4:
        n = Ae,
        o = Wt,
        Ae = r.stateNode.containerInfo,
        Wt = !0,
        Or(e, t, r),
        Ae = n,
        Wt = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Ue && (n = r.updateQueue,
        n !== null && (n = n.lastEffect,
        n !== null))) {
            o = n = n.next;
            do {
                var i = o
                  , a = i.destroy;
                i = i.tag,
                a !== void 0 && (i & 2 || i & 4) && jc(r, t, a),
                o = o.next
            } while (o !== n)
        }
        Or(e, t, r);
        break;
    case 1:
        if (!Ue && (po(r, t),
        n = r.stateNode,
        typeof n.componentWillUnmount == "function"))
            try {
                n.props = r.memoizedProps,
                n.state = r.memoizedState,
                n.componentWillUnmount()
            } catch (s) {
                xe(r, t, s)
            }
        Or(e, t, r);
        break;
    case 21:
        Or(e, t, r);
        break;
    case 22:
        r.mode & 1 ? (Ue = (n = Ue) || r.memoizedState !== null,
        Or(e, t, r),
        Ue = n) : Or(e, t, r);
        break;
    default:
        Or(e, t, r)
    }
}
function mm(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var r = e.stateNode;
        r === null && (r = e.stateNode = new F1),
        t.forEach(function(n) {
            var o = K1.bind(null, e, n);
            r.has(n) || (r.add(n),
            n.then(o, o))
        })
    }
}
function Bt(e, t) {
    var r = t.deletions;
    if (r !== null)
        for (var n = 0; n < r.length; n++) {
            var o = r[n];
            try {
                var i = e
                  , a = t
                  , s = a;
                e: for (; s !== null; ) {
                    switch (s.tag) {
                    case 5:
                        Ae = s.stateNode,
                        Wt = !1;
                        break e;
                    case 3:
                        Ae = s.stateNode.containerInfo,
                        Wt = !0;
                        break e;
                    case 4:
                        Ae = s.stateNode.containerInfo,
                        Wt = !0;
                        break e
                    }
                    s = s.return
                }
                if (Ae === null)
                    throw Error(M(160));
                oy(i, a, o),
                Ae = null,
                Wt = !1;
                var l = o.alternate;
                l !== null && (l.return = null),
                o.return = null
            } catch (u) {
                xe(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            iy(t, e),
            t = t.sibling
}
function iy(e, t) {
    var r = e.alternate
      , n = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Bt(t, e),
        Zt(e),
        n & 4) {
            try {
                Ei(3, e, e.return),
                gl(3, e)
            } catch (v) {
                xe(e, e.return, v)
            }
            try {
                Ei(5, e, e.return)
            } catch (v) {
                xe(e, e.return, v)
            }
        }
        break;
    case 1:
        Bt(t, e),
        Zt(e),
        n & 512 && r !== null && po(r, r.return);
        break;
    case 5:
        if (Bt(t, e),
        Zt(e),
        n & 512 && r !== null && po(r, r.return),
        e.flags & 32) {
            var o = e.stateNode;
            try {
                Ri(o, "")
            } catch (v) {
                xe(e, e.return, v)
            }
        }
        if (n & 4 && (o = e.stateNode,
        o != null)) {
            var i = e.memoizedProps
              , a = r !== null ? r.memoizedProps : i
              , s = e.type
              , l = e.updateQueue;
            if (e.updateQueue = null,
            l !== null)
                try {
                    s === "input" && i.type === "radio" && i.name != null && Nh(o, i),
                    uc(s, a);
                    var u = uc(s, i);
                    for (a = 0; a < l.length; a += 2) {
                        var d = l[a]
                          , c = l[a + 1];
                        d === "style" ? Oh(o, c) : d === "dangerouslySetInnerHTML" ? Th(o, c) : d === "children" ? Ri(o, c) : Sd(o, d, c, u)
                    }
                    switch (s) {
                    case "input":
                        oc(o, i);
                        break;
                    case "textarea":
                        Ih(o, i);
                        break;
                    case "select":
                        var f = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!i.multiple;
                        var p = i.value;
                        p != null ? vo(o, !!i.multiple, p, !1) : f !== !!i.multiple && (i.defaultValue != null ? vo(o, !!i.multiple, i.defaultValue, !0) : vo(o, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    o[zi] = i
                } catch (v) {
                    xe(e, e.return, v)
                }
        }
        break;
    case 6:
        if (Bt(t, e),
        Zt(e),
        n & 4) {
            if (e.stateNode === null)
                throw Error(M(162));
            o = e.stateNode,
            i = e.memoizedProps;
            try {
                o.nodeValue = i
            } catch (v) {
                xe(e, e.return, v)
            }
        }
        break;
    case 3:
        if (Bt(t, e),
        Zt(e),
        n & 4 && r !== null && r.memoizedState.isDehydrated)
            try {
                Li(t.containerInfo)
            } catch (v) {
                xe(e, e.return, v)
            }
        break;
    case 4:
        Bt(t, e),
        Zt(e);
        break;
    case 13:
        Bt(t, e),
        Zt(e),
        o = e.child,
        o.flags & 8192 && (i = o.memoizedState !== null,
        o.stateNode.isHidden = i,
        !i || o.alternate !== null && o.alternate.memoizedState !== null || (tf = be())),
        n & 4 && mm(e);
        break;
    case 22:
        if (d = r !== null && r.memoizedState !== null,
        e.mode & 1 ? (Ue = (u = Ue) || d,
        Bt(t, e),
        Ue = u) : Bt(t, e),
        Zt(e),
        n & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !d && e.mode & 1)
                for (z = e,
                d = e.child; d !== null; ) {
                    for (c = z = d; z !== null; ) {
                        switch (f = z,
                        p = f.child,
                        f.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Ei(4, f, f.return);
                            break;
                        case 1:
                            po(f, f.return);
                            var m = f.stateNode;
                            if (typeof m.componentWillUnmount == "function") {
                                n = f,
                                r = f.return;
                                try {
                                    t = n,
                                    m.props = t.memoizedProps,
                                    m.state = t.memoizedState,
                                    m.componentWillUnmount()
                                } catch (v) {
                                    xe(n, r, v)
                                }
                            }
                            break;
                        case 5:
                            po(f, f.return);
                            break;
                        case 22:
                            if (f.memoizedState !== null) {
                                hm(c);
                                continue
                            }
                        }
                        p !== null ? (p.return = f,
                        z = p) : hm(c)
                    }
                    d = d.sibling
                }
            e: for (d = null,
            c = e; ; ) {
                if (c.tag === 5) {
                    if (d === null) {
                        d = c;
                        try {
                            o = c.stateNode,
                            u ? (i = o.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = c.stateNode,
                            l = c.memoizedProps.style,
                            a = l != null && l.hasOwnProperty("display") ? l.display : null,
                            s.style.display = Rh("display", a))
                        } catch (v) {
                            xe(e, e.return, v)
                        }
                    }
                } else if (c.tag === 6) {
                    if (d === null)
                        try {
                            c.stateNode.nodeValue = u ? "" : c.memoizedProps
                        } catch (v) {
                            xe(e, e.return, v)
                        }
                } else if ((c.tag !== 22 && c.tag !== 23 || c.memoizedState === null || c === e) && c.child !== null) {
                    c.child.return = c,
                    c = c.child;
                    continue
                }
                if (c === e)
                    break e;
                for (; c.sibling === null; ) {
                    if (c.return === null || c.return === e)
                        break e;
                    d === c && (d = null),
                    c = c.return
                }
                d === c && (d = null),
                c.sibling.return = c.return,
                c = c.sibling
            }
        }
        break;
    case 19:
        Bt(t, e),
        Zt(e),
        n & 4 && mm(e);
        break;
    case 21:
        break;
    default:
        Bt(t, e),
        Zt(e)
    }
}
function Zt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var r = e.return; r !== null; ) {
                    if (ny(r)) {
                        var n = r;
                        break e
                    }
                    r = r.return
                }
                throw Error(M(160))
            }
            switch (n.tag) {
            case 5:
                var o = n.stateNode;
                n.flags & 32 && (Ri(o, ""),
                n.flags &= -33);
                var i = pm(e);
                $c(e, i, o);
                break;
            case 3:
            case 4:
                var a = n.stateNode.containerInfo
                  , s = pm(e);
                Fc(e, s, a);
                break;
            default:
                throw Error(M(161))
            }
        } catch (l) {
            xe(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function z1(e, t, r) {
    z = e,
    ay(e)
}
function ay(e, t, r) {
    for (var n = (e.mode & 1) !== 0; z !== null; ) {
        var o = z
          , i = o.child;
        if (o.tag === 22 && n) {
            var a = o.memoizedState !== null || Va;
            if (!a) {
                var s = o.alternate
                  , l = s !== null && s.memoizedState !== null || Ue;
                s = Va;
                var u = Ue;
                if (Va = a,
                (Ue = l) && !u)
                    for (z = o; z !== null; )
                        a = z,
                        l = a.child,
                        a.tag === 22 && a.memoizedState !== null ? gm(o) : l !== null ? (l.return = a,
                        z = l) : gm(o);
                for (; i !== null; )
                    z = i,
                    ay(i),
                    i = i.sibling;
                z = o,
                Va = s,
                Ue = u
            }
            vm(e)
        } else
            o.subtreeFlags & 8772 && i !== null ? (i.return = o,
            z = i) : vm(e)
    }
}
function vm(e) {
    for (; z !== null; ) {
        var t = z;
        if (t.flags & 8772) {
            var r = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Ue || gl(5, t);
                        break;
                    case 1:
                        var n = t.stateNode;
                        if (t.flags & 4 && !Ue)
                            if (r === null)
                                n.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? r.memoizedProps : $t(t.type, r.memoizedProps);
                                n.componentDidUpdate(o, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && Zp(t, i, n);
                        break;
                    case 3:
                        var a = t.updateQueue;
                        if (a !== null) {
                            if (r = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    r = t.child.stateNode;
                                    break;
                                case 1:
                                    r = t.child.stateNode
                                }
                            Zp(t, a, r)
                        }
                        break;
                    case 5:
                        var s = t.stateNode;
                        if (r === null && t.flags & 4) {
                            r = s;
                            var l = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && r.focus();
                                break;
                            case "img":
                                l.src && (r.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var d = u.memoizedState;
                                if (d !== null) {
                                    var c = d.dehydrated;
                                    c !== null && Li(c)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(M(163))
                    }
                Ue || t.flags & 512 && Bc(t)
            } catch (f) {
                xe(t, t.return, f)
            }
        }
        if (t === e) {
            z = null;
            break
        }
        if (r = t.sibling,
        r !== null) {
            r.return = t.return,
            z = r;
            break
        }
        z = t.return
    }
}
function hm(e) {
    for (; z !== null; ) {
        var t = z;
        if (t === e) {
            z = null;
            break
        }
        var r = t.sibling;
        if (r !== null) {
            r.return = t.return,
            z = r;
            break
        }
        z = t.return
    }
}
function gm(e) {
    for (; z !== null; ) {
        var t = z;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var r = t.return;
                try {
                    gl(4, t)
                } catch (l) {
                    xe(t, r, l)
                }
                break;
            case 1:
                var n = t.stateNode;
                if (typeof n.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        n.componentDidMount()
                    } catch (l) {
                        xe(t, o, l)
                    }
                }
                var i = t.return;
                try {
                    Bc(t)
                } catch (l) {
                    xe(t, i, l)
                }
                break;
            case 5:
                var a = t.return;
                try {
                    Bc(t)
                } catch (l) {
                    xe(t, a, l)
                }
            }
        } catch (l) {
            xe(t, t.return, l)
        }
        if (t === e) {
            z = null;
            break
        }
        var s = t.sibling;
        if (s !== null) {
            s.return = t.return,
            z = s;
            break
        }
        z = t.return
    }
}
var _1 = Math.ceil
  , Fs = Nr.ReactCurrentDispatcher
  , Zd = Nr.ReactCurrentOwner
  , kt = Nr.ReactCurrentBatchConfig
  , re = 0
  , Ie = null
  , Se = null
  , Le = 0
  , at = 0
  , mo = vn(0)
  , De = 0
  , Gi = null
  , _n = 0
  , yl = 0
  , ef = 0
  , Pi = null
  , et = null
  , tf = 0
  , Bo = 1 / 0
  , vr = null
  , $s = !1
  , zc = null
  , Zr = null
  , Ha = !1
  , Gr = null
  , zs = 0
  , Di = 0
  , _c = null
  , ds = -1
  , fs = 0;
function Ke() {
    return re & 6 ? be() : ds !== -1 ? ds : ds = be()
}
function en(e) {
    return e.mode & 1 ? re & 2 && Le !== 0 ? Le & -Le : E1.transition !== null ? (fs === 0 && (fs = Vh()),
    fs) : (e = ie,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Xh(e.type)),
    e) : 1
}
function qt(e, t, r, n) {
    if (50 < Di)
        throw Di = 0,
        _c = null,
        Error(M(185));
    ua(e, r, n),
    (!(re & 2) || e !== Ie) && (e === Ie && (!(re & 2) && (yl |= r),
    De === 4 && $r(e, Le)),
    ot(e, n),
    r === 1 && re === 0 && !(t.mode & 1) && (Bo = be() + 500,
    ml && hn()))
}
function ot(e, t) {
    var r = e.callbackNode;
    Eb(e, t);
    var n = Cs(e, e === Ie ? Le : 0);
    if (n === 0)
        r !== null && Dp(r),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = n & -n,
    e.callbackPriority !== t) {
        if (r != null && Dp(r),
        t === 1)
            e.tag === 0 ? C1(ym.bind(null, e)) : hg(ym.bind(null, e)),
            x1(function() {
                !(re & 6) && hn()
            }),
            r = null;
        else {
            switch (Hh(n)) {
            case 1:
                r = Nd;
                break;
            case 4:
                r = Uh;
                break;
            case 16:
                r = Ss;
                break;
            case 536870912:
                r = Wh;
                break;
            default:
                r = Ss
            }
            r = my(r, sy.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = r
    }
}
function sy(e, t) {
    if (ds = -1,
    fs = 0,
    re & 6)
        throw Error(M(327));
    var r = e.callbackNode;
    if (wo() && e.callbackNode !== r)
        return null;
    var n = Cs(e, e === Ie ? Le : 0);
    if (n === 0)
        return null;
    if (n & 30 || n & e.expiredLanes || t)
        t = _s(e, n);
    else {
        t = n;
        var o = re;
        re |= 2;
        var i = uy();
        (Ie !== e || Le !== t) && (vr = null,
        Bo = be() + 500,
        jn(e, t));
        do
            try {
                V1();
                break
            } catch (s) {
                ly(e, s)
            }
        while (!0);
        zd(),
        Fs.current = i,
        re = o,
        Se !== null ? t = 0 : (Ie = null,
        Le = 0,
        t = De)
    }
    if (t !== 0) {
        if (t === 2 && (o = mc(e),
        o !== 0 && (n = o,
        t = Uc(e, o))),
        t === 1)
            throw r = Gi,
            jn(e, 0),
            $r(e, n),
            ot(e, be()),
            r;
        if (t === 6)
            $r(e, n);
        else {
            if (o = e.current.alternate,
            !(n & 30) && !U1(o) && (t = _s(e, n),
            t === 2 && (i = mc(e),
            i !== 0 && (n = i,
            t = Uc(e, i))),
            t === 1))
                throw r = Gi,
                jn(e, 0),
                $r(e, n),
                ot(e, be()),
                r;
            switch (e.finishedWork = o,
            e.finishedLanes = n,
            t) {
            case 0:
            case 1:
                throw Error(M(345));
            case 2:
                Pn(e, et, vr);
                break;
            case 3:
                if ($r(e, n),
                (n & 130023424) === n && (t = tf + 500 - be(),
                10 < t)) {
                    if (Cs(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes,
                    (o & n) !== n) {
                        Ke(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = Sc(Pn.bind(null, e, et, vr), t);
                    break
                }
                Pn(e, et, vr);
                break;
            case 4:
                if ($r(e, n),
                (n & 4194240) === n)
                    break;
                for (t = e.eventTimes,
                o = -1; 0 < n; ) {
                    var a = 31 - Gt(n);
                    i = 1 << a,
                    a = t[a],
                    a > o && (o = a),
                    n &= ~i
                }
                if (n = o,
                n = be() - n,
                n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * _1(n / 1960)) - n,
                10 < n) {
                    e.timeoutHandle = Sc(Pn.bind(null, e, et, vr), n);
                    break
                }
                Pn(e, et, vr);
                break;
            case 5:
                Pn(e, et, vr);
                break;
            default:
                throw Error(M(329))
            }
        }
    }
    return ot(e, be()),
    e.callbackNode === r ? sy.bind(null, e) : null
}
function Uc(e, t) {
    var r = Pi;
    return e.current.memoizedState.isDehydrated && (jn(e, t).flags |= 256),
    e = _s(e, t),
    e !== 2 && (t = et,
    et = r,
    t !== null && Wc(t)),
    e
}
function Wc(e) {
    et === null ? et = e : et.push.apply(et, e)
}
function U1(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var r = t.updateQueue;
            if (r !== null && (r = r.stores,
            r !== null))
                for (var n = 0; n < r.length; n++) {
                    var o = r[n]
                      , i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!Kt(i(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (r = t.child,
        t.subtreeFlags & 16384 && r !== null)
            r.return = t,
            t = r;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function $r(e, t) {
    for (t &= ~ef,
    t &= ~yl,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var r = 31 - Gt(t)
          , n = 1 << r;
        e[r] = -1,
        t &= ~n
    }
}
function ym(e) {
    if (re & 6)
        throw Error(M(327));
    wo();
    var t = Cs(e, 0);
    if (!(t & 1))
        return ot(e, be()),
        null;
    var r = _s(e, t);
    if (e.tag !== 0 && r === 2) {
        var n = mc(e);
        n !== 0 && (t = n,
        r = Uc(e, n))
    }
    if (r === 1)
        throw r = Gi,
        jn(e, 0),
        $r(e, t),
        ot(e, be()),
        r;
    if (r === 6)
        throw Error(M(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Pn(e, et, vr),
    ot(e, be()),
    null
}
function rf(e, t) {
    var r = re;
    re |= 1;
    try {
        return e(t)
    } finally {
        re = r,
        re === 0 && (Bo = be() + 500,
        ml && hn())
    }
}
function Un(e) {
    Gr !== null && Gr.tag === 0 && !(re & 6) && wo();
    var t = re;
    re |= 1;
    var r = kt.transition
      , n = ie;
    try {
        if (kt.transition = null,
        ie = 1,
        e)
            return e()
    } finally {
        ie = n,
        kt.transition = r,
        re = t,
        !(re & 6) && hn()
    }
}
function nf() {
    at = mo.current,
    fe(mo)
}
function jn(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var r = e.timeoutHandle;
    if (r !== -1 && (e.timeoutHandle = -1,
    y1(r)),
    Se !== null)
        for (r = Se.return; r !== null; ) {
            var n = r;
            switch (Bd(n),
            n.tag) {
            case 1:
                n = n.type.childContextTypes,
                n != null && Is();
                break;
            case 3:
                Lo(),
                fe(rt),
                fe(We),
                Gd();
                break;
            case 5:
                Hd(n);
                break;
            case 4:
                Lo();
                break;
            case 13:
                fe(ve);
                break;
            case 19:
                fe(ve);
                break;
            case 10:
                _d(n.type._context);
                break;
            case 22:
            case 23:
                nf()
            }
            r = r.return
        }
    if (Ie = e,
    Se = e = tn(e.current, null),
    Le = at = t,
    De = 0,
    Gi = null,
    ef = yl = _n = 0,
    et = Pi = null,
    In !== null) {
        for (t = 0; t < In.length; t++)
            if (r = In[t],
            n = r.interleaved,
            n !== null) {
                r.interleaved = null;
                var o = n.next
                  , i = r.pending;
                if (i !== null) {
                    var a = i.next;
                    i.next = o,
                    n.next = a
                }
                r.pending = n
            }
        In = null
    }
    return e
}
function ly(e, t) {
    do {
        var r = Se;
        try {
            if (zd(),
            ls.current = Bs,
            js) {
                for (var n = he.memoizedState; n !== null; ) {
                    var o = n.queue;
                    o !== null && (o.pending = null),
                    n = n.next
                }
                js = !1
            }
            if (zn = 0,
            Ne = Ee = he = null,
            Ci = !1,
            Wi = 0,
            Zd.current = null,
            r === null || r.return === null) {
                De = 1,
                Gi = t,
                Se = null;
                break
            }
            e: {
                var i = e
                  , a = r.return
                  , s = r
                  , l = t;
                if (t = Le,
                s.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l
                      , d = s
                      , c = d.tag;
                    if (!(d.mode & 1) && (c === 0 || c === 11 || c === 15)) {
                        var f = d.alternate;
                        f ? (d.updateQueue = f.updateQueue,
                        d.memoizedState = f.memoizedState,
                        d.lanes = f.lanes) : (d.updateQueue = null,
                        d.memoizedState = null)
                    }
                    var p = im(a);
                    if (p !== null) {
                        p.flags &= -257,
                        am(p, a, s, i, t),
                        p.mode & 1 && om(i, u, t),
                        t = p,
                        l = u;
                        var m = t.updateQueue;
                        if (m === null) {
                            var v = new Set;
                            v.add(l),
                            t.updateQueue = v
                        } else
                            m.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            om(i, u, t),
                            of();
                            break e
                        }
                        l = Error(M(426))
                    }
                } else if (me && s.mode & 1) {
                    var x = im(a);
                    if (x !== null) {
                        !(x.flags & 65536) && (x.flags |= 256),
                        am(x, a, s, i, t),
                        Fd(jo(l, s));
                        break e
                    }
                }
                i = l = jo(l, s),
                De !== 4 && (De = 2),
                Pi === null ? Pi = [i] : Pi.push(i),
                i = a;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        t &= -t,
                        i.lanes |= t;
                        var g = Hg(i, l, t);
                        Jp(i, g);
                        break e;
                    case 1:
                        s = l;
                        var h = i.type
                          , y = i.stateNode;
                        if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (Zr === null || !Zr.has(y)))) {
                            i.flags |= 65536,
                            t &= -t,
                            i.lanes |= t;
                            var S = Gg(i, s, t);
                            Jp(i, S);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            dy(r)
        } catch (E) {
            t = E,
            Se === r && r !== null && (Se = r = r.return);
            continue
        }
        break
    } while (!0)
}
function uy() {
    var e = Fs.current;
    return Fs.current = Bs,
    e === null ? Bs : e
}
function of() {
    (De === 0 || De === 3 || De === 2) && (De = 4),
    Ie === null || !(_n & 268435455) && !(yl & 268435455) || $r(Ie, Le)
}
function _s(e, t) {
    var r = re;
    re |= 2;
    var n = uy();
    (Ie !== e || Le !== t) && (vr = null,
    jn(e, t));
    do
        try {
            W1();
            break
        } catch (o) {
            ly(e, o)
        }
    while (!0);
    if (zd(),
    re = r,
    Fs.current = n,
    Se !== null)
        throw Error(M(261));
    return Ie = null,
    Le = 0,
    De
}
function W1() {
    for (; Se !== null; )
        cy(Se)
}
function V1() {
    for (; Se !== null && !vb(); )
        cy(Se)
}
function cy(e) {
    var t = py(e.alternate, e, at);
    e.memoizedProps = e.pendingProps,
    t === null ? dy(e) : Se = t,
    Zd.current = null
}
function dy(e) {
    var t = e;
    do {
        var r = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (r = B1(r, t),
            r !== null) {
                r.flags &= 32767,
                Se = r;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                De = 6,
                Se = null;
                return
            }
        } else if (r = j1(r, t, at),
        r !== null) {
            Se = r;
            return
        }
        if (t = t.sibling,
        t !== null) {
            Se = t;
            return
        }
        Se = t = e
    } while (t !== null);
    De === 0 && (De = 5)
}
function Pn(e, t, r) {
    var n = ie
      , o = kt.transition;
    try {
        kt.transition = null,
        ie = 1,
        H1(e, t, r, n)
    } finally {
        kt.transition = o,
        ie = n
    }
    return null
}
function H1(e, t, r, n) {
    do
        wo();
    while (Gr !== null);
    if (re & 6)
        throw Error(M(327));
    r = e.finishedWork;
    var o = e.finishedLanes;
    if (r === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    r === e.current)
        throw Error(M(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var i = r.lanes | r.childLanes;
    if (Pb(e, i),
    e === Ie && (Se = Ie = null,
    Le = 0),
    !(r.subtreeFlags & 2064) && !(r.flags & 2064) || Ha || (Ha = !0,
    my(Ss, function() {
        return wo(),
        null
    })),
    i = (r.flags & 15990) !== 0,
    r.subtreeFlags & 15990 || i) {
        i = kt.transition,
        kt.transition = null;
        var a = ie;
        ie = 1;
        var s = re;
        re |= 4,
        Zd.current = null,
        $1(e, r),
        iy(r, e),
        d1(wc),
        Es = !!xc,
        wc = xc = null,
        e.current = r,
        z1(r),
        hb(),
        re = s,
        ie = a,
        kt.transition = i
    } else
        e.current = r;
    if (Ha && (Ha = !1,
    Gr = e,
    zs = o),
    i = e.pendingLanes,
    i === 0 && (Zr = null),
    xb(r.stateNode),
    ot(e, be()),
    t !== null)
        for (n = e.onRecoverableError,
        r = 0; r < t.length; r++)
            o = t[r],
            n(o.value, {
                componentStack: o.stack,
                digest: o.digest
            });
    if ($s)
        throw $s = !1,
        e = zc,
        zc = null,
        e;
    return zs & 1 && e.tag !== 0 && wo(),
    i = e.pendingLanes,
    i & 1 ? e === _c ? Di++ : (Di = 0,
    _c = e) : Di = 0,
    hn(),
    null
}
function wo() {
    if (Gr !== null) {
        var e = Hh(zs)
          , t = kt.transition
          , r = ie;
        try {
            if (kt.transition = null,
            ie = 16 > e ? 16 : e,
            Gr === null)
                var n = !1;
            else {
                if (e = Gr,
                Gr = null,
                zs = 0,
                re & 6)
                    throw Error(M(331));
                var o = re;
                for (re |= 4,
                z = e.current; z !== null; ) {
                    var i = z
                      , a = i.child;
                    if (z.flags & 16) {
                        var s = i.deletions;
                        if (s !== null) {
                            for (var l = 0; l < s.length; l++) {
                                var u = s[l];
                                for (z = u; z !== null; ) {
                                    var d = z;
                                    switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ei(8, d, i)
                                    }
                                    var c = d.child;
                                    if (c !== null)
                                        c.return = d,
                                        z = c;
                                    else
                                        for (; z !== null; ) {
                                            d = z;
                                            var f = d.sibling
                                              , p = d.return;
                                            if (ry(d),
                                            d === u) {
                                                z = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = p,
                                                z = f;
                                                break
                                            }
                                            z = p
                                        }
                                }
                            }
                            var m = i.alternate;
                            if (m !== null) {
                                var v = m.child;
                                if (v !== null) {
                                    m.child = null;
                                    do {
                                        var x = v.sibling;
                                        v.sibling = null,
                                        v = x
                                    } while (v !== null)
                                }
                            }
                            z = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && a !== null)
                        a.return = i,
                        z = a;
                    else
                        e: for (; z !== null; ) {
                            if (i = z,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Ei(9, i, i.return)
                                }
                            var g = i.sibling;
                            if (g !== null) {
                                g.return = i.return,
                                z = g;
                                break e
                            }
                            z = i.return
                        }
                }
                var h = e.current;
                for (z = h; z !== null; ) {
                    a = z;
                    var y = a.child;
                    if (a.subtreeFlags & 2064 && y !== null)
                        y.return = a,
                        z = y;
                    else
                        e: for (a = h; z !== null; ) {
                            if (s = z,
                            s.flags & 2048)
                                try {
                                    switch (s.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        gl(9, s)
                                    }
                                } catch (E) {
                                    xe(s, s.return, E)
                                }
                            if (s === a) {
                                z = null;
                                break e
                            }
                            var S = s.sibling;
                            if (S !== null) {
                                S.return = s.return,
                                z = S;
                                break e
                            }
                            z = s.return
                        }
                }
                if (re = o,
                hn(),
                ar && typeof ar.onPostCommitFiberRoot == "function")
                    try {
                        ar.onPostCommitFiberRoot(ul, e)
                    } catch {}
                n = !0
            }
            return n
        } finally {
            ie = r,
            kt.transition = t
        }
    }
    return !1
}
function xm(e, t, r) {
    t = jo(r, t),
    t = Hg(e, t, 1),
    e = Jr(e, t, 1),
    t = Ke(),
    e !== null && (ua(e, 1, t),
    ot(e, t))
}
function xe(e, t, r) {
    if (e.tag === 3)
        xm(e, e, r);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                xm(t, e, r);
                break
            } else if (t.tag === 1) {
                var n = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Zr === null || !Zr.has(n))) {
                    e = jo(r, e),
                    e = Gg(t, e, 1),
                    t = Jr(t, e, 1),
                    e = Ke(),
                    t !== null && (ua(t, 1, e),
                    ot(t, e));
                    break
                }
            }
            t = t.return
        }
}
function G1(e, t, r) {
    var n = e.pingCache;
    n !== null && n.delete(t),
    t = Ke(),
    e.pingedLanes |= e.suspendedLanes & r,
    Ie === e && (Le & r) === r && (De === 4 || De === 3 && (Le & 130023424) === Le && 500 > be() - tf ? jn(e, 0) : ef |= r),
    ot(e, t)
}
function fy(e, t) {
    t === 0 && (e.mode & 1 ? (t = La,
    La <<= 1,
    !(La & 130023424) && (La = 4194304)) : t = 1);
    var r = Ke();
    e = Cr(e, t),
    e !== null && (ua(e, t, r),
    ot(e, r))
}
function q1(e) {
    var t = e.memoizedState
      , r = 0;
    t !== null && (r = t.retryLane),
    fy(e, r)
}
function K1(e, t) {
    var r = 0;
    switch (e.tag) {
    case 13:
        var n = e.stateNode
          , o = e.memoizedState;
        o !== null && (r = o.retryLane);
        break;
    case 19:
        n = e.stateNode;
        break;
    default:
        throw Error(M(314))
    }
    n !== null && n.delete(t),
    fy(e, r)
}
var py;
py = function(e, t, r) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || rt.current)
            tt = !0;
        else {
            if (!(e.lanes & r) && !(t.flags & 128))
                return tt = !1,
                L1(e, t, r);
            tt = !!(e.flags & 131072)
        }
    else
        tt = !1,
        me && t.flags & 1048576 && gg(t, Rs, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var n = t.type;
        cs(e, t),
        e = t.pendingProps;
        var o = Oo(t, We.current);
        xo(t, r),
        o = Kd(null, t, n, e, o, r);
        var i = Qd();
        return t.flags |= 1,
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        nt(n) ? (i = !0,
        ks(t)) : i = !1,
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
        Wd(t),
        o.updater = hl,
        t.stateNode = o,
        o._reactInternals = t,
        kc(t, n, e, r),
        t = Oc(null, t, n, !0, i, r)) : (t.tag = 0,
        me && i && jd(t),
        Ge(null, t, o, r),
        t = t.child),
        t;
    case 16:
        n = t.elementType;
        e: {
            switch (cs(e, t),
            e = t.pendingProps,
            o = n._init,
            n = o(n._payload),
            t.type = n,
            o = t.tag = Y1(n),
            e = $t(n, e),
            o) {
            case 0:
                t = Rc(null, t, n, e, r);
                break e;
            case 1:
                t = um(null, t, n, e, r);
                break e;
            case 11:
                t = sm(null, t, n, e, r);
                break e;
            case 14:
                t = lm(null, t, n, $t(n.type, e), r);
                break e
            }
            throw Error(M(306, n, ""))
        }
        return t;
    case 0:
        return n = t.type,
        o = t.pendingProps,
        o = t.elementType === n ? o : $t(n, o),
        Rc(e, t, n, o, r);
    case 1:
        return n = t.type,
        o = t.pendingProps,
        o = t.elementType === n ? o : $t(n, o),
        um(e, t, n, o, r);
    case 3:
        e: {
            if (Yg(t),
            e === null)
                throw Error(M(387));
            n = t.pendingProps,
            i = t.memoizedState,
            o = i.element,
            Cg(e, t),
            Ms(t, n, null, r);
            var a = t.memoizedState;
            if (n = a.element,
            i.isDehydrated)
                if (i = {
                    element: n,
                    isDehydrated: !1,
                    cache: a.cache,
                    pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                    transitions: a.transitions
                },
                t.updateQueue.baseState = i,
                t.memoizedState = i,
                t.flags & 256) {
                    o = jo(Error(M(423)), t),
                    t = cm(e, t, n, r, o);
                    break e
                } else if (n !== o) {
                    o = jo(Error(M(424)), t),
                    t = cm(e, t, n, r, o);
                    break e
                } else
                    for (lt = Xr(t.stateNode.containerInfo.firstChild),
                    ct = t,
                    me = !0,
                    Vt = null,
                    r = bg(t, null, n, r),
                    t.child = r; r; )
                        r.flags = r.flags & -3 | 4096,
                        r = r.sibling;
            else {
                if (Ao(),
                n === o) {
                    t = Er(e, t, r);
                    break e
                }
                Ge(e, t, n, r)
            }
            t = t.child
        }
        return t;
    case 5:
        return Eg(t),
        e === null && Dc(t),
        n = t.type,
        o = t.pendingProps,
        i = e !== null ? e.memoizedProps : null,
        a = o.children,
        bc(n, o) ? a = null : i !== null && bc(n, i) && (t.flags |= 32),
        Qg(e, t),
        Ge(e, t, a, r),
        t.child;
    case 6:
        return e === null && Dc(t),
        null;
    case 13:
        return Xg(e, t, r);
    case 4:
        return Vd(t, t.stateNode.containerInfo),
        n = t.pendingProps,
        e === null ? t.child = Mo(t, null, n, r) : Ge(e, t, n, r),
        t.child;
    case 11:
        return n = t.type,
        o = t.pendingProps,
        o = t.elementType === n ? o : $t(n, o),
        sm(e, t, n, o, r);
    case 7:
        return Ge(e, t, t.pendingProps, r),
        t.child;
    case 8:
        return Ge(e, t, t.pendingProps.children, r),
        t.child;
    case 12:
        return Ge(e, t, t.pendingProps.children, r),
        t.child;
    case 10:
        e: {
            if (n = t.type._context,
            o = t.pendingProps,
            i = t.memoizedProps,
            a = o.value,
            ue(Os, n._currentValue),
            n._currentValue = a,
            i !== null)
                if (Kt(i.value, a)) {
                    if (i.children === o.children && !rt.current) {
                        t = Er(e, t, r);
                        break e
                    }
                } else
                    for (i = t.child,
                    i !== null && (i.return = t); i !== null; ) {
                        var s = i.dependencies;
                        if (s !== null) {
                            a = i.child;
                            for (var l = s.firstContext; l !== null; ) {
                                if (l.context === n) {
                                    if (i.tag === 1) {
                                        l = wr(-1, r & -r),
                                        l.tag = 2;
                                        var u = i.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var d = u.pending;
                                            d === null ? l.next = l : (l.next = d.next,
                                            d.next = l),
                                            u.pending = l
                                        }
                                    }
                                    i.lanes |= r,
                                    l = i.alternate,
                                    l !== null && (l.lanes |= r),
                                    Nc(i.return, r, t),
                                    s.lanes |= r;
                                    break
                                }
                                l = l.next
                            }
                        } else if (i.tag === 10)
                            a = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (a = i.return,
                            a === null)
                                throw Error(M(341));
                            a.lanes |= r,
                            s = a.alternate,
                            s !== null && (s.lanes |= r),
                            Nc(a, r, t),
                            a = i.sibling
                        } else
                            a = i.child;
                        if (a !== null)
                            a.return = i;
                        else
                            for (a = i; a !== null; ) {
                                if (a === t) {
                                    a = null;
                                    break
                                }
                                if (i = a.sibling,
                                i !== null) {
                                    i.return = a.return,
                                    a = i;
                                    break
                                }
                                a = a.return
                            }
                        i = a
                    }
            Ge(e, t, o.children, r),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type,
        n = t.pendingProps.children,
        xo(t, r),
        o = Rt(o),
        n = n(o),
        t.flags |= 1,
        Ge(e, t, n, r),
        t.child;
    case 14:
        return n = t.type,
        o = $t(n, t.pendingProps),
        o = $t(n.type, o),
        lm(e, t, n, o, r);
    case 15:
        return qg(e, t, t.type, t.pendingProps, r);
    case 17:
        return n = t.type,
        o = t.pendingProps,
        o = t.elementType === n ? o : $t(n, o),
        cs(e, t),
        t.tag = 1,
        nt(n) ? (e = !0,
        ks(t)) : e = !1,
        xo(t, r),
        Vg(t, n, o),
        kc(t, n, o, r),
        Oc(null, t, n, !0, e, r);
    case 19:
        return Jg(e, t, r);
    case 22:
        return Kg(e, t, r)
    }
    throw Error(M(156, t.tag))
}
;
function my(e, t) {
    return _h(e, t)
}
function Q1(e, t, r, n) {
    this.tag = e,
    this.key = r,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = n,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Nt(e, t, r, n) {
    return new Q1(e,t,r,n)
}
function af(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function Y1(e) {
    if (typeof e == "function")
        return af(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Ed)
            return 11;
        if (e === Pd)
            return 14
    }
    return 2
}
function tn(e, t) {
    var r = e.alternate;
    return r === null ? (r = Nt(e.tag, t, e.key, e.mode),
    r.elementType = e.elementType,
    r.type = e.type,
    r.stateNode = e.stateNode,
    r.alternate = e,
    e.alternate = r) : (r.pendingProps = t,
    r.type = e.type,
    r.flags = 0,
    r.subtreeFlags = 0,
    r.deletions = null),
    r.flags = e.flags & 14680064,
    r.childLanes = e.childLanes,
    r.lanes = e.lanes,
    r.child = e.child,
    r.memoizedProps = e.memoizedProps,
    r.memoizedState = e.memoizedState,
    r.updateQueue = e.updateQueue,
    t = e.dependencies,
    r.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    r.sibling = e.sibling,
    r.index = e.index,
    r.ref = e.ref,
    r
}
function ps(e, t, r, n, o, i) {
    var a = 2;
    if (n = e,
    typeof e == "function")
        af(e) && (a = 1);
    else if (typeof e == "string")
        a = 5;
    else
        e: switch (e) {
        case no:
            return Bn(r.children, o, i, t);
        case Cd:
            a = 8,
            o |= 8;
            break;
        case Zu:
            return e = Nt(12, r, t, o | 2),
            e.elementType = Zu,
            e.lanes = i,
            e;
        case ec:
            return e = Nt(13, r, t, o),
            e.elementType = ec,
            e.lanes = i,
            e;
        case tc:
            return e = Nt(19, r, t, o),
            e.elementType = tc,
            e.lanes = i,
            e;
        case Eh:
            return xl(r, o, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Sh:
                    a = 10;
                    break e;
                case Ch:
                    a = 9;
                    break e;
                case Ed:
                    a = 11;
                    break e;
                case Pd:
                    a = 14;
                    break e;
                case jr:
                    a = 16,
                    n = null;
                    break e
                }
            throw Error(M(130, e == null ? e : typeof e, ""))
        }
    return t = Nt(a, r, t, o),
    t.elementType = e,
    t.type = n,
    t.lanes = i,
    t
}
function Bn(e, t, r, n) {
    return e = Nt(7, e, n, t),
    e.lanes = r,
    e
}
function xl(e, t, r, n) {
    return e = Nt(22, e, n, t),
    e.elementType = Eh,
    e.lanes = r,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Nu(e, t, r) {
    return e = Nt(6, e, null, t),
    e.lanes = r,
    e
}
function Iu(e, t, r) {
    return t = Nt(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = r,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function X1(e, t, r, n, o) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = lu(0),
    this.expirationTimes = lu(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = lu(0),
    this.identifierPrefix = n,
    this.onRecoverableError = o,
    this.mutableSourceEagerHydrationData = null
}
function sf(e, t, r, n, o, i, a, s, l) {
    return e = new X1(e,t,r,s,l),
    t === 1 ? (t = 1,
    i === !0 && (t |= 8)) : t = 0,
    i = Nt(3, null, null, t),
    e.current = i,
    i.stateNode = e,
    i.memoizedState = {
        element: n,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Wd(i),
    e
}
function J1(e, t, r) {
    var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: ro,
        key: n == null ? null : "" + n,
        children: e,
        containerInfo: t,
        implementation: r
    }
}
function vy(e) {
    if (!e)
        return ln;
    e = e._reactInternals;
    e: {
        if (Gn(e) !== e || e.tag !== 1)
            throw Error(M(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (nt(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(M(171))
    }
    if (e.tag === 1) {
        var r = e.type;
        if (nt(r))
            return vg(e, r, t)
    }
    return t
}
function hy(e, t, r, n, o, i, a, s, l) {
    return e = sf(r, n, !0, e, o, i, a, s, l),
    e.context = vy(null),
    r = e.current,
    n = Ke(),
    o = en(r),
    i = wr(n, o),
    i.callback = t ?? null,
    Jr(r, i, o),
    e.current.lanes = o,
    ua(e, o, n),
    ot(e, n),
    e
}
function wl(e, t, r, n) {
    var o = t.current
      , i = Ke()
      , a = en(o);
    return r = vy(r),
    t.context === null ? t.context = r : t.pendingContext = r,
    t = wr(i, a),
    t.payload = {
        element: e
    },
    n = n === void 0 ? null : n,
    n !== null && (t.callback = n),
    e = Jr(o, t, a),
    e !== null && (qt(e, o, a, i),
    ss(e, o, a)),
    a
}
function Us(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function wm(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var r = e.retryLane;
        e.retryLane = r !== 0 && r < t ? r : t
    }
}
function lf(e, t) {
    wm(e, t),
    (e = e.alternate) && wm(e, t)
}
function Z1() {
    return null
}
var gy = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function uf(e) {
    this._internalRoot = e
}
bl.prototype.render = uf.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(M(409));
    wl(e, t, null, null)
}
;
bl.prototype.unmount = uf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Un(function() {
            wl(null, e, null, null)
        }),
        t[Sr] = null
    }
}
;
function bl(e) {
    this._internalRoot = e
}
bl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Kh();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var r = 0; r < Fr.length && t !== 0 && t < Fr[r].priority; r++)
            ;
        Fr.splice(r, 0, e),
        r === 0 && Yh(e)
    }
}
;
function cf(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Sl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function bm() {}
function eS(e, t, r, n, o) {
    if (o) {
        if (typeof n == "function") {
            var i = n;
            n = function() {
                var u = Us(a);
                i.call(u)
            }
        }
        var a = hy(t, n, e, 0, null, !1, !1, "", bm);
        return e._reactRootContainer = a,
        e[Sr] = a.current,
        Fi(e.nodeType === 8 ? e.parentNode : e),
        Un(),
        a
    }
    for (; o = e.lastChild; )
        e.removeChild(o);
    if (typeof n == "function") {
        var s = n;
        n = function() {
            var u = Us(l);
            s.call(u)
        }
    }
    var l = sf(e, 0, !1, null, null, !1, !1, "", bm);
    return e._reactRootContainer = l,
    e[Sr] = l.current,
    Fi(e.nodeType === 8 ? e.parentNode : e),
    Un(function() {
        wl(t, l, r, n)
    }),
    l
}
function Cl(e, t, r, n, o) {
    var i = r._reactRootContainer;
    if (i) {
        var a = i;
        if (typeof o == "function") {
            var s = o;
            o = function() {
                var l = Us(a);
                s.call(l)
            }
        }
        wl(t, a, e, o)
    } else
        a = eS(r, t, e, o, n);
    return Us(a)
}
Gh = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var r = hi(t.pendingLanes);
            r !== 0 && (Id(t, r | 1),
            ot(t, be()),
            !(re & 6) && (Bo = be() + 500,
            hn()))
        }
        break;
    case 13:
        Un(function() {
            var n = Cr(e, 1);
            if (n !== null) {
                var o = Ke();
                qt(n, e, 1, o)
            }
        }),
        lf(e, 1)
    }
}
;
kd = function(e) {
    if (e.tag === 13) {
        var t = Cr(e, 134217728);
        if (t !== null) {
            var r = Ke();
            qt(t, e, 134217728, r)
        }
        lf(e, 134217728)
    }
}
;
qh = function(e) {
    if (e.tag === 13) {
        var t = en(e)
          , r = Cr(e, t);
        if (r !== null) {
            var n = Ke();
            qt(r, e, t, n)
        }
        lf(e, t)
    }
}
;
Kh = function() {
    return ie
}
;
Qh = function(e, t) {
    var r = ie;
    try {
        return ie = e,
        t()
    } finally {
        ie = r
    }
}
;
dc = function(e, t, r) {
    switch (t) {
    case "input":
        if (oc(e, r),
        t = r.name,
        r.type === "radio" && t != null) {
            for (r = e; r.parentNode; )
                r = r.parentNode;
            for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < r.length; t++) {
                var n = r[t];
                if (n !== e && n.form === e.form) {
                    var o = pl(n);
                    if (!o)
                        throw Error(M(90));
                    Dh(n),
                    oc(n, o)
                }
            }
        }
        break;
    case "textarea":
        Ih(e, r);
        break;
    case "select":
        t = r.value,
        t != null && vo(e, !!r.multiple, t, !1)
    }
}
;
Lh = rf;
jh = Un;
var tS = {
    usingClientEntryPoint: !1,
    Events: [da, so, pl, Ah, Mh, rf]
}
  , li = {
    findFiberByHostInstance: Nn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , rS = {
    bundleType: li.bundleType,
    version: li.version,
    rendererPackageName: li.rendererPackageName,
    rendererConfig: li.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Nr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = $h(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: li.findFiberByHostInstance || Z1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ga = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ga.isDisabled && Ga.supportsFiber)
        try {
            ul = Ga.inject(rS),
            ar = Ga
        } catch {}
}
vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tS;
vt.createPortal = function(e, t) {
    var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!cf(t))
        throw Error(M(200));
    return J1(e, t, null, r)
}
;
vt.createRoot = function(e, t) {
    if (!cf(e))
        throw Error(M(299));
    var r = !1
      , n = ""
      , o = gy;
    return t != null && (t.unstable_strictMode === !0 && (r = !0),
    t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    t = sf(e, 1, !1, null, null, r, !1, n, o),
    e[Sr] = t.current,
    Fi(e.nodeType === 8 ? e.parentNode : e),
    new uf(t)
}
;
vt.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(M(188)) : (e = Object.keys(e).join(","),
        Error(M(268, e)));
    return e = $h(t),
    e = e === null ? null : e.stateNode,
    e
}
;
vt.flushSync = function(e) {
    return Un(e)
}
;
vt.hydrate = function(e, t, r) {
    if (!Sl(t))
        throw Error(M(200));
    return Cl(null, e, t, !0, r)
}
;
vt.hydrateRoot = function(e, t, r) {
    if (!cf(e))
        throw Error(M(405));
    var n = r != null && r.hydratedSources || null
      , o = !1
      , i = ""
      , a = gy;
    if (r != null && (r.unstable_strictMode === !0 && (o = !0),
    r.identifierPrefix !== void 0 && (i = r.identifierPrefix),
    r.onRecoverableError !== void 0 && (a = r.onRecoverableError)),
    t = hy(t, null, e, 1, r ?? null, o, !1, i, a),
    e[Sr] = t.current,
    Fi(e),
    n)
        for (e = 0; e < n.length; e++)
            r = n[e],
            o = r._getVersion,
            o = o(r._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, o] : t.mutableSourceEagerHydrationData.push(r, o);
    return new bl(t)
}
;
vt.render = function(e, t, r) {
    if (!Sl(t))
        throw Error(M(200));
    return Cl(null, e, t, !1, r)
}
;
vt.unmountComponentAtNode = function(e) {
    if (!Sl(e))
        throw Error(M(40));
    return e._reactRootContainer ? (Un(function() {
        Cl(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Sr] = null
        })
    }),
    !0) : !1
}
;
vt.unstable_batchedUpdates = rf;
vt.unstable_renderSubtreeIntoContainer = function(e, t, r, n) {
    if (!Sl(r))
        throw Error(M(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(M(38));
    return Cl(e, t, r, !1, n)
}
;
vt.version = "18.3.1-next-f1338f8080-20240426";
function yy() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yy)
        } catch (e) {
            console.error(e)
        }
}
yy(),
yh.exports = vt;
var Go = yh.exports;
const df = vd(Go);
var xy, Sm = Go;
xy = Sm.createRoot,
Sm.hydrateRoot;
const nS = 1
  , oS = 1e6;
let ku = 0;
function iS() {
    return ku = (ku + 1) % Number.MAX_SAFE_INTEGER,
    ku.toString()
}
const Tu = new Map
  , Cm = e => {
    if (Tu.has(e))
        return;
    const t = setTimeout( () => {
        Tu.delete(e),
        Ni({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , oS);
    Tu.set(e, t)
}
  , aS = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, nS)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(r => r.id === t.toast.id ? {
                ...r,
                ...t.toast
            } : r)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: r} = t;
            return r ? Cm(r) : e.toasts.forEach(n => {
                Cm(n.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(n => n.id === r || r === void 0 ? {
                    ...n,
                    open: !1
                } : n)
            }
        }
    case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(r => r.id !== t.toastId)
        }
    }
}
  , ms = [];
let vs = {
    toasts: []
};
function Ni(e) {
    vs = aS(vs, e),
    ms.forEach(t => {
        t(vs)
    }
    )
}
function sS({...e}) {
    const t = iS()
      , r = o => Ni({
        type: "UPDATE_TOAST",
        toast: {
            ...o,
            id: t
        }
    })
      , n = () => Ni({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return Ni({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: o => {
                o || n()
            }
        }
    }),
    {
        id: t,
        dismiss: n,
        update: r
    }
}
function lS() {
    const [e,t] = b.useState(vs);
    return b.useEffect( () => (ms.push(t),
    () => {
        const r = ms.indexOf(t);
        r > -1 && ms.splice(r, 1)
    }
    ), [e]),
    {
        ...e,
        toast: sS,
        dismiss: r => Ni({
            type: "DISMISS_TOAST",
            toastId: r
        })
    }
}
function Pe(e, t, {checkForDefaultPrevented: r=!0}={}) {
    return function(o) {
        if (e == null || e(o),
        r === !1 || !o.defaultPrevented)
            return t == null ? void 0 : t(o)
    }
}
function Em(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function wy(...e) {
    return t => {
        let r = !1;
        const n = e.map(o => {
            const i = Em(o, t);
            return !r && typeof i == "function" && (r = !0),
            i
        }
        );
        if (r)
            return () => {
                for (let o = 0; o < n.length; o++) {
                    const i = n[o];
                    typeof i == "function" ? i() : Em(e[o], null)
                }
            }
    }
}
function Qt(...e) {
    return b.useCallback(wy(...e), e)
}
function El(e, t=[]) {
    let r = [];
    function n(i, a) {
        const s = b.createContext(a)
          , l = r.length;
        r = [...r, a];
        const u = c => {
            var g;
            const {scope: f, children: p, ...m} = c
              , v = ((g = f == null ? void 0 : f[e]) == null ? void 0 : g[l]) || s
              , x = b.useMemo( () => m, Object.values(m));
            return w.jsx(v.Provider, {
                value: x,
                children: p
            })
        }
        ;
        u.displayName = i + "Provider";
        function d(c, f) {
            var v;
            const p = ((v = f == null ? void 0 : f[e]) == null ? void 0 : v[l]) || s
              , m = b.useContext(p);
            if (m)
                return m;
            if (a !== void 0)
                return a;
            throw new Error(`\`${c}\` must be used within \`${i}\``)
        }
        return [u, d]
    }
    const o = () => {
        const i = r.map(a => b.createContext(a));
        return function(s) {
            const l = (s == null ? void 0 : s[e]) || i;
            return b.useMemo( () => ({
                [`__scope${e}`]: {
                    ...s,
                    [e]: l
                }
            }), [s, l])
        }
    }
    ;
    return o.scopeName = e,
    [n, uS(o, ...t)]
}
function uS(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const r = () => {
        const n = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const a = n.reduce( (s, {useScope: l, scopeName: u}) => {
                const c = l(i)[`__scope${u}`];
                return {
                    ...s,
                    ...c
                }
            }
            , {});
            return b.useMemo( () => ({
                [`__scope${t.scopeName}`]: a
            }), [a])
        }
    }
    ;
    return r.scopeName = t.scopeName,
    r
}
function Vc(e) {
    const t = cS(e)
      , r = b.forwardRef( (n, o) => {
        const {children: i, ...a} = n
          , s = b.Children.toArray(i)
          , l = s.find(fS);
        if (l) {
            const u = l.props.children
              , d = s.map(c => c === l ? b.Children.count(u) > 1 ? b.Children.only(null) : b.isValidElement(u) ? u.props.children : null : c);
            return w.jsx(t, {
                ...a,
                ref: o,
                children: b.isValidElement(u) ? b.cloneElement(u, void 0, d) : null
            })
        }
        return w.jsx(t, {
            ...a,
            ref: o,
            children: i
        })
    }
    );
    return r.displayName = `${e}.Slot`,
    r
}
function cS(e) {
    const t = b.forwardRef( (r, n) => {
        const {children: o, ...i} = r;
        if (b.isValidElement(o)) {
            const a = mS(o)
              , s = pS(i, o.props);
            return o.type !== b.Fragment && (s.ref = n ? wy(n, a) : a),
            b.cloneElement(o, s)
        }
        return b.Children.count(o) > 1 ? b.Children.only(null) : null
    }
    );
    return t.displayName = `${e}.SlotClone`,
    t
}
var by = Symbol("radix.slottable");
function dS(e) {
    const t = ({children: r}) => w.jsx(w.Fragment, {
        children: r
    });
    return t.displayName = `${e}.Slottable`,
    t.__radixId = by,
    t
}
function fS(e) {
    return b.isValidElement(e) && typeof e.type == "function" && "__radixId"in e.type && e.type.__radixId === by
}
function pS(e, t) {
    const r = {
        ...t
    };
    for (const n in t) {
        const o = e[n]
          , i = t[n];
        /^on[A-Z]/.test(n) ? o && i ? r[n] = (...s) => {
            const l = i(...s);
            return o(...s),
            l
        }
        : o && (r[n] = o) : n === "style" ? r[n] = {
            ...o,
            ...i
        } : n === "className" && (r[n] = [o, i].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...r
    }
}
function mS(e) {
    var n, o;
    let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get
      , r = t && "isReactWarning"in t && t.isReactWarning;
    return r ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    r = t && "isReactWarning"in t && t.isReactWarning,
    r ? e.props.ref : e.props.ref || e.ref)
}
function vS(e) {
    const t = e + "CollectionProvider"
      , [r,n] = El(t)
      , [o,i] = r(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , a = v => {
        const {scope: x, children: g} = v
          , h = R.useRef(null)
          , y = R.useRef(new Map).current;
        return w.jsx(o, {
            scope: x,
            itemMap: y,
            collectionRef: h,
            children: g
        })
    }
    ;
    a.displayName = t;
    const s = e + "CollectionSlot"
      , l = Vc(s)
      , u = R.forwardRef( (v, x) => {
        const {scope: g, children: h} = v
          , y = i(s, g)
          , S = Qt(x, y.collectionRef);
        return w.jsx(l, {
            ref: S,
            children: h
        })
    }
    );
    u.displayName = s;
    const d = e + "CollectionItemSlot"
      , c = "data-radix-collection-item"
      , f = Vc(d)
      , p = R.forwardRef( (v, x) => {
        const {scope: g, children: h, ...y} = v
          , S = R.useRef(null)
          , E = Qt(x, S)
          , C = i(d, g);
        return R.useEffect( () => (C.itemMap.set(S, {
            ref: S,
            ...y
        }),
        () => void C.itemMap.delete(S))),
        w.jsx(f, {
            [c]: "",
            ref: E,
            children: h
        })
    }
    );
    p.displayName = d;
    function m(v) {
        const x = i(e + "CollectionConsumer", v);
        return R.useCallback( () => {
            const h = x.collectionRef.current;
            if (!h)
                return [];
            const y = Array.from(h.querySelectorAll(`[${c}]`));
            return Array.from(x.itemMap.values()).sort( (C, P) => y.indexOf(C.ref.current) - y.indexOf(P.ref.current))
        }
        , [x.collectionRef, x.itemMap])
    }
    return [{
        Provider: a,
        Slot: u,
        ItemSlot: p
    }, m, n]
}
var hS = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , it = hS.reduce( (e, t) => {
    const r = Vc(`Primitive.${t}`)
      , n = b.forwardRef( (o, i) => {
        const {asChild: a, ...s} = o
          , l = a ? r : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        w.jsx(l, {
            ...s,
            ref: i
        })
    }
    );
    return n.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: n
    }
}
, {});
function Sy(e, t) {
    e && Go.flushSync( () => e.dispatchEvent(t))
}
function un(e) {
    const t = b.useRef(e);
    return b.useEffect( () => {
        t.current = e
    }
    ),
    b.useMemo( () => (...r) => {
        var n;
        return (n = t.current) == null ? void 0 : n.call(t, ...r)
    }
    , [])
}
function gS(e, t=globalThis == null ? void 0 : globalThis.document) {
    const r = un(e);
    b.useEffect( () => {
        const n = o => {
            o.key === "Escape" && r(o)
        }
        ;
        return t.addEventListener("keydown", n, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", n, {
            capture: !0
        })
    }
    , [r, t])
}
var yS = "DismissableLayer", Hc = "dismissableLayer.update", xS = "dismissableLayer.pointerDownOutside", wS = "dismissableLayer.focusOutside", Pm, Cy = b.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), ff = b.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: r=!1, onEscapeKeyDown: n, onPointerDownOutside: o, onFocusOutside: i, onInteractOutside: a, onDismiss: s, ...l} = e
      , u = b.useContext(Cy)
      , [d,c] = b.useState(null)
      , f = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,p] = b.useState({})
      , m = Qt(t, P => c(P))
      , v = Array.from(u.layers)
      , [x] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
      , g = v.indexOf(x)
      , h = d ? v.indexOf(d) : -1
      , y = u.layersWithOutsidePointerEventsDisabled.size > 0
      , S = h >= g
      , E = SS(P => {
        const D = P.target
          , k = [...u.branches].some(O => O.contains(D));
        !S || k || (o == null || o(P),
        a == null || a(P),
        P.defaultPrevented || s == null || s())
    }
    , f)
      , C = CS(P => {
        const D = P.target;
        [...u.branches].some(O => O.contains(D)) || (i == null || i(P),
        a == null || a(P),
        P.defaultPrevented || s == null || s())
    }
    , f);
    return gS(P => {
        h === u.layers.size - 1 && (n == null || n(P),
        !P.defaultPrevented && s && (P.preventDefault(),
        s()))
    }
    , f),
    b.useEffect( () => {
        if (d)
            return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Pm = f.body.style.pointerEvents,
            f.body.style.pointerEvents = "none"),
            u.layersWithOutsidePointerEventsDisabled.add(d)),
            u.layers.add(d),
            Dm(),
            () => {
                r && u.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = Pm)
            }
    }
    , [d, f, r, u]),
    b.useEffect( () => () => {
        d && (u.layers.delete(d),
        u.layersWithOutsidePointerEventsDisabled.delete(d),
        Dm())
    }
    , [d, u]),
    b.useEffect( () => {
        const P = () => p({});
        return document.addEventListener(Hc, P),
        () => document.removeEventListener(Hc, P)
    }
    , []),
    w.jsx(it.div, {
        ...l,
        ref: m,
        style: {
            pointerEvents: y ? S ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: Pe(e.onFocusCapture, C.onFocusCapture),
        onBlurCapture: Pe(e.onBlurCapture, C.onBlurCapture),
        onPointerDownCapture: Pe(e.onPointerDownCapture, E.onPointerDownCapture)
    })
}
);
ff.displayName = yS;
var bS = "DismissableLayerBranch"
  , Ey = b.forwardRef( (e, t) => {
    const r = b.useContext(Cy)
      , n = b.useRef(null)
      , o = Qt(t, n);
    return b.useEffect( () => {
        const i = n.current;
        if (i)
            return r.branches.add(i),
            () => {
                r.branches.delete(i)
            }
    }
    , [r.branches]),
    w.jsx(it.div, {
        ...e,
        ref: o
    })
}
);
Ey.displayName = bS;
function SS(e, t=globalThis == null ? void 0 : globalThis.document) {
    const r = un(e)
      , n = b.useRef(!1)
      , o = b.useRef( () => {}
    );
    return b.useEffect( () => {
        const i = s => {
            if (s.target && !n.current) {
                let l = function() {
                    Py(xS, r, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: s
                };
                s.pointerType === "touch" ? (t.removeEventListener("click", o.current),
                o.current = l,
                t.addEventListener("click", o.current, {
                    once: !0
                })) : l()
            } else
                t.removeEventListener("click", o.current);
            n.current = !1
        }
          , a = window.setTimeout( () => {
            t.addEventListener("pointerdown", i)
        }
        , 0);
        return () => {
            window.clearTimeout(a),
            t.removeEventListener("pointerdown", i),
            t.removeEventListener("click", o.current)
        }
    }
    , [t, r]),
    {
        onPointerDownCapture: () => n.current = !0
    }
}
function CS(e, t=globalThis == null ? void 0 : globalThis.document) {
    const r = un(e)
      , n = b.useRef(!1);
    return b.useEffect( () => {
        const o = i => {
            i.target && !n.current && Py(wS, r, {
                originalEvent: i
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
    }
    , [t, r]),
    {
        onFocusCapture: () => n.current = !0,
        onBlurCapture: () => n.current = !1
    }
}
function Dm() {
    const e = new CustomEvent(Hc);
    document.dispatchEvent(e)
}
function Py(e, t, r, {discrete: n}) {
    const o = r.originalEvent.target
      , i = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: r
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    n ? Sy(o, i) : o.dispatchEvent(i)
}
var ES = ff
  , PS = Ey
  , cn = globalThis != null && globalThis.document ? b.useLayoutEffect : () => {}
  , DS = "Portal"
  , Dy = b.forwardRef( (e, t) => {
    var s;
    const {container: r, ...n} = e
      , [o,i] = b.useState(!1);
    cn( () => i(!0), []);
    const a = r || o && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
    return a ? df.createPortal(w.jsx(it.div, {
        ...n,
        ref: t
    }), a) : null
}
);
Dy.displayName = DS;
function NS(e, t) {
    return b.useReducer( (r, n) => t[r][n] ?? r, e)
}
var pf = e => {
    const {present: t, children: r} = e
      , n = IS(t)
      , o = typeof r == "function" ? r({
        present: n.isPresent
    }) : b.Children.only(r)
      , i = Qt(n.ref, kS(o));
    return typeof r == "function" || n.isPresent ? b.cloneElement(o, {
        ref: i
    }) : null
}
;
pf.displayName = "Presence";
function IS(e) {
    const [t,r] = b.useState()
      , n = b.useRef(null)
      , o = b.useRef(e)
      , i = b.useRef("none")
      , a = e ? "mounted" : "unmounted"
      , [s,l] = NS(a, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return b.useEffect( () => {
        const u = qa(n.current);
        i.current = s === "mounted" ? u : "none"
    }
    , [s]),
    cn( () => {
        const u = n.current
          , d = o.current;
        if (d !== e) {
            const f = i.current
              , p = qa(u);
            e ? l("MOUNT") : p === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(d && f !== p ? "ANIMATION_OUT" : "UNMOUNT"),
            o.current = e
        }
    }
    , [e, l]),
    cn( () => {
        if (t) {
            let u;
            const d = t.ownerDocument.defaultView ?? window
              , c = p => {
                const v = qa(n.current).includes(p.animationName);
                if (p.target === t && v && (l("ANIMATION_END"),
                !o.current)) {
                    const x = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    u = d.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = x)
                    }
                    )
                }
            }
              , f = p => {
                p.target === t && (i.current = qa(n.current))
            }
            ;
            return t.addEventListener("animationstart", f),
            t.addEventListener("animationcancel", c),
            t.addEventListener("animationend", c),
            () => {
                d.clearTimeout(u),
                t.removeEventListener("animationstart", f),
                t.removeEventListener("animationcancel", c),
                t.removeEventListener("animationend", c)
            }
        } else
            l("ANIMATION_END")
    }
    , [t, l]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(s),
        ref: b.useCallback(u => {
            n.current = u ? getComputedStyle(u) : null,
            r(u)
        }
        , [])
    }
}
function qa(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function kS(e) {
    var n, o;
    let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get
      , r = t && "isReactWarning"in t && t.isReactWarning;
    return r ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    r = t && "isReactWarning"in t && t.isReactWarning,
    r ? e.props.ref : e.props.ref || e.ref)
}
var TS = hh[" useInsertionEffect ".trim().toString()] || cn;
function RS({prop: e, defaultProp: t, onChange: r= () => {}
, caller: n}) {
    const [o,i,a] = OS({
        defaultProp: t,
        onChange: r
    })
      , s = e !== void 0
      , l = s ? e : o;
    {
        const d = b.useRef(e !== void 0);
        b.useEffect( () => {
            const c = d.current;
            c !== s && console.warn(`${n} is changing from ${c ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
            d.current = s
        }
        , [s, n])
    }
    const u = b.useCallback(d => {
        var c;
        if (s) {
            const f = AS(d) ? d(e) : d;
            f !== e && ((c = a.current) == null || c.call(a, f))
        } else
            i(d)
    }
    , [s, e, i, a]);
    return [l, u]
}
function OS({defaultProp: e, onChange: t}) {
    const [r,n] = b.useState(e)
      , o = b.useRef(r)
      , i = b.useRef(t);
    return TS( () => {
        i.current = t
    }
    , [t]),
    b.useEffect( () => {
        var a;
        o.current !== r && ((a = i.current) == null || a.call(i, r),
        o.current = r)
    }
    , [r, o]),
    [r, n, i]
}
function AS(e) {
    return typeof e == "function"
}
var MS = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
})
  , LS = "VisuallyHidden"
  , Pl = b.forwardRef( (e, t) => w.jsx(it.span, {
    ...e,
    ref: t,
    style: {
        ...MS,
        ...e.style
    }
}));
Pl.displayName = LS;
var jS = Pl
  , mf = "ToastProvider"
  , [vf,BS,FS] = vS("Toast")
  , [Ny,NO] = El("Toast", [FS])
  , [$S,Dl] = Ny(mf)
  , Iy = e => {
    const {__scopeToast: t, label: r="Notification", duration: n=5e3, swipeDirection: o="right", swipeThreshold: i=50, children: a} = e
      , [s,l] = b.useState(null)
      , [u,d] = b.useState(0)
      , c = b.useRef(!1)
      , f = b.useRef(!1);
    return r.trim() || console.error(`Invalid prop \`label\` supplied to \`${mf}\`. Expected non-empty \`string\`.`),
    w.jsx(vf.Provider, {
        scope: t,
        children: w.jsx($S, {
            scope: t,
            label: r,
            duration: n,
            swipeDirection: o,
            swipeThreshold: i,
            toastCount: u,
            viewport: s,
            onViewportChange: l,
            onToastAdd: b.useCallback( () => d(p => p + 1), []),
            onToastRemove: b.useCallback( () => d(p => p - 1), []),
            isFocusedToastEscapeKeyDownRef: c,
            isClosePausedRef: f,
            children: a
        })
    })
}
;
Iy.displayName = mf;
var ky = "ToastViewport"
  , zS = ["F8"]
  , Gc = "toast.viewportPause"
  , qc = "toast.viewportResume"
  , Ty = b.forwardRef( (e, t) => {
    const {__scopeToast: r, hotkey: n=zS, label: o="Notifications ({hotkey})", ...i} = e
      , a = Dl(ky, r)
      , s = BS(r)
      , l = b.useRef(null)
      , u = b.useRef(null)
      , d = b.useRef(null)
      , c = b.useRef(null)
      , f = Qt(t, c, a.onViewportChange)
      , p = n.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , m = a.toastCount > 0;
    b.useEffect( () => {
        const x = g => {
            var y;
            n.length !== 0 && n.every(S => g[S] || g.code === S) && ((y = c.current) == null || y.focus())
        }
        ;
        return document.addEventListener("keydown", x),
        () => document.removeEventListener("keydown", x)
    }
    , [n]),
    b.useEffect( () => {
        const x = l.current
          , g = c.current;
        if (m && x && g) {
            const h = () => {
                if (!a.isClosePausedRef.current) {
                    const C = new CustomEvent(Gc);
                    g.dispatchEvent(C),
                    a.isClosePausedRef.current = !0
                }
            }
              , y = () => {
                if (a.isClosePausedRef.current) {
                    const C = new CustomEvent(qc);
                    g.dispatchEvent(C),
                    a.isClosePausedRef.current = !1
                }
            }
              , S = C => {
                !x.contains(C.relatedTarget) && y()
            }
              , E = () => {
                x.contains(document.activeElement) || y()
            }
            ;
            return x.addEventListener("focusin", h),
            x.addEventListener("focusout", S),
            x.addEventListener("pointermove", h),
            x.addEventListener("pointerleave", E),
            window.addEventListener("blur", h),
            window.addEventListener("focus", y),
            () => {
                x.removeEventListener("focusin", h),
                x.removeEventListener("focusout", S),
                x.removeEventListener("pointermove", h),
                x.removeEventListener("pointerleave", E),
                window.removeEventListener("blur", h),
                window.removeEventListener("focus", y)
            }
        }
    }
    , [m, a.isClosePausedRef]);
    const v = b.useCallback( ({tabbingDirection: x}) => {
        const h = s().map(y => {
            const S = y.ref.current
              , E = [S, ...ZS(S)];
            return x === "forwards" ? E : E.reverse()
        }
        );
        return (x === "forwards" ? h.reverse() : h).flat()
    }
    , [s]);
    return b.useEffect( () => {
        const x = c.current;
        if (x) {
            const g = h => {
                var E, C, P;
                const y = h.altKey || h.ctrlKey || h.metaKey;
                if (h.key === "Tab" && !y) {
                    const D = document.activeElement
                      , k = h.shiftKey;
                    if (h.target === x && k) {
                        (E = u.current) == null || E.focus();
                        return
                    }
                    const j = v({
                        tabbingDirection: k ? "backwards" : "forwards"
                    })
                      , W = j.findIndex(A => A === D);
                    Ru(j.slice(W + 1)) ? h.preventDefault() : k ? (C = u.current) == null || C.focus() : (P = d.current) == null || P.focus()
                }
            }
            ;
            return x.addEventListener("keydown", g),
            () => x.removeEventListener("keydown", g)
        }
    }
    , [s, v]),
    w.jsxs(PS, {
        ref: l,
        role: "region",
        "aria-label": o.replace("{hotkey}", p),
        tabIndex: -1,
        style: {
            pointerEvents: m ? void 0 : "none"
        },
        children: [m && w.jsx(Kc, {
            ref: u,
            onFocusFromOutsideViewport: () => {
                const x = v({
                    tabbingDirection: "forwards"
                });
                Ru(x)
            }
        }), w.jsx(vf.Slot, {
            scope: r,
            children: w.jsx(it.ol, {
                tabIndex: -1,
                ...i,
                ref: f
            })
        }), m && w.jsx(Kc, {
            ref: d,
            onFocusFromOutsideViewport: () => {
                const x = v({
                    tabbingDirection: "backwards"
                });
                Ru(x)
            }
        })]
    })
}
);
Ty.displayName = ky;
var Ry = "ToastFocusProxy"
  , Kc = b.forwardRef( (e, t) => {
    const {__scopeToast: r, onFocusFromOutsideViewport: n, ...o} = e
      , i = Dl(Ry, r);
    return w.jsx(Pl, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: a => {
            var u;
            const s = a.relatedTarget;
            !((u = i.viewport) != null && u.contains(s)) && n()
        }
    })
}
);
Kc.displayName = Ry;
var pa = "Toast"
  , _S = "toast.swipeStart"
  , US = "toast.swipeMove"
  , WS = "toast.swipeCancel"
  , VS = "toast.swipeEnd"
  , Oy = b.forwardRef( (e, t) => {
    const {forceMount: r, open: n, defaultOpen: o, onOpenChange: i, ...a} = e
      , [s,l] = RS({
        prop: n,
        defaultProp: o ?? !0,
        onChange: i,
        caller: pa
    });
    return w.jsx(pf, {
        present: r || s,
        children: w.jsx(qS, {
            open: s,
            ...a,
            ref: t,
            onClose: () => l(!1),
            onPause: un(e.onPause),
            onResume: un(e.onResume),
            onSwipeStart: Pe(e.onSwipeStart, u => {
                u.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: Pe(e.onSwipeMove, u => {
                const {x: d, y: c} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "move"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${d}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${c}px`)
            }
            ),
            onSwipeCancel: Pe(e.onSwipeCancel, u => {
                u.currentTarget.setAttribute("data-swipe", "cancel"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: Pe(e.onSwipeEnd, u => {
                const {x: d, y: c} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "end"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${d}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${c}px`),
                l(!1)
            }
            )
        })
    })
}
);
Oy.displayName = pa;
var [HS,GS] = Ny(pa, {
    onClose() {}
})
  , qS = b.forwardRef( (e, t) => {
    const {__scopeToast: r, type: n="foreground", duration: o, open: i, onClose: a, onEscapeKeyDown: s, onPause: l, onResume: u, onSwipeStart: d, onSwipeMove: c, onSwipeCancel: f, onSwipeEnd: p, ...m} = e
      , v = Dl(pa, r)
      , [x,g] = b.useState(null)
      , h = Qt(t, A => g(A))
      , y = b.useRef(null)
      , S = b.useRef(null)
      , E = o || v.duration
      , C = b.useRef(0)
      , P = b.useRef(E)
      , D = b.useRef(0)
      , {onToastAdd: k, onToastRemove: O} = v
      , F = un( () => {
        var G;
        (x == null ? void 0 : x.contains(document.activeElement)) && ((G = v.viewport) == null || G.focus()),
        a()
    }
    )
      , j = b.useCallback(A => {
        !A || A === 1 / 0 || (window.clearTimeout(D.current),
        C.current = new Date().getTime(),
        D.current = window.setTimeout(F, A))
    }
    , [F]);
    b.useEffect( () => {
        const A = v.viewport;
        if (A) {
            const G = () => {
                j(P.current),
                u == null || u()
            }
              , _ = () => {
                const q = new Date().getTime() - C.current;
                P.current = P.current - q,
                window.clearTimeout(D.current),
                l == null || l()
            }
            ;
            return A.addEventListener(Gc, _),
            A.addEventListener(qc, G),
            () => {
                A.removeEventListener(Gc, _),
                A.removeEventListener(qc, G)
            }
        }
    }
    , [v.viewport, E, l, u, j]),
    b.useEffect( () => {
        i && !v.isClosePausedRef.current && j(E)
    }
    , [i, E, v.isClosePausedRef, j]),
    b.useEffect( () => (k(),
    () => O()), [k, O]);
    const W = b.useMemo( () => x ? $y(x) : null, [x]);
    return v.viewport ? w.jsxs(w.Fragment, {
        children: [W && w.jsx(KS, {
            __scopeToast: r,
            role: "status",
            "aria-live": n === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: W
        }), w.jsx(HS, {
            scope: r,
            onClose: F,
            children: Go.createPortal(w.jsx(vf.ItemSlot, {
                scope: r,
                children: w.jsx(ES, {
                    asChild: !0,
                    onEscapeKeyDown: Pe(s, () => {
                        v.isFocusedToastEscapeKeyDownRef.current || F(),
                        v.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: w.jsx(it.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": i ? "open" : "closed",
                        "data-swipe-direction": v.swipeDirection,
                        ...m,
                        ref: h,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: Pe(e.onKeyDown, A => {
                            A.key === "Escape" && (s == null || s(A.nativeEvent),
                            A.nativeEvent.defaultPrevented || (v.isFocusedToastEscapeKeyDownRef.current = !0,
                            F()))
                        }
                        ),
                        onPointerDown: Pe(e.onPointerDown, A => {
                            A.button === 0 && (y.current = {
                                x: A.clientX,
                                y: A.clientY
                            })
                        }
                        ),
                        onPointerMove: Pe(e.onPointerMove, A => {
                            if (!y.current)
                                return;
                            const G = A.clientX - y.current.x
                              , _ = A.clientY - y.current.y
                              , q = !!S.current
                              , N = ["left", "right"].includes(v.swipeDirection)
                              , T = ["left", "up"].includes(v.swipeDirection) ? Math.min : Math.max
                              , B = N ? T(0, G) : 0
                              , H = N ? 0 : T(0, _)
                              , $ = A.pointerType === "touch" ? 10 : 2
                              , K = {
                                x: B,
                                y: H
                            }
                              , X = {
                                originalEvent: A,
                                delta: K
                            };
                            q ? (S.current = K,
                            Ka(US, c, X, {
                                discrete: !1
                            })) : Nm(K, v.swipeDirection, $) ? (S.current = K,
                            Ka(_S, d, X, {
                                discrete: !1
                            }),
                            A.target.setPointerCapture(A.pointerId)) : (Math.abs(G) > $ || Math.abs(_) > $) && (y.current = null)
                        }
                        ),
                        onPointerUp: Pe(e.onPointerUp, A => {
                            const G = S.current
                              , _ = A.target;
                            if (_.hasPointerCapture(A.pointerId) && _.releasePointerCapture(A.pointerId),
                            S.current = null,
                            y.current = null,
                            G) {
                                const q = A.currentTarget
                                  , N = {
                                    originalEvent: A,
                                    delta: G
                                };
                                Nm(G, v.swipeDirection, v.swipeThreshold) ? Ka(VS, p, N, {
                                    discrete: !0
                                }) : Ka(WS, f, N, {
                                    discrete: !0
                                }),
                                q.addEventListener("click", T => T.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), v.viewport)
        })]
    }) : null
}
)
  , KS = e => {
    const {__scopeToast: t, children: r, ...n} = e
      , o = Dl(pa, t)
      , [i,a] = b.useState(!1)
      , [s,l] = b.useState(!1);
    return XS( () => a(!0)),
    b.useEffect( () => {
        const u = window.setTimeout( () => l(!0), 1e3);
        return () => window.clearTimeout(u)
    }
    , []),
    s ? null : w.jsx(Dy, {
        asChild: !0,
        children: w.jsx(Pl, {
            ...n,
            children: i && w.jsxs(w.Fragment, {
                children: [o.label, " ", r]
            })
        })
    })
}
  , QS = "ToastTitle"
  , Ay = b.forwardRef( (e, t) => {
    const {__scopeToast: r, ...n} = e;
    return w.jsx(it.div, {
        ...n,
        ref: t
    })
}
);
Ay.displayName = QS;
var YS = "ToastDescription"
  , My = b.forwardRef( (e, t) => {
    const {__scopeToast: r, ...n} = e;
    return w.jsx(it.div, {
        ...n,
        ref: t
    })
}
);
My.displayName = YS;
var Ly = "ToastAction"
  , jy = b.forwardRef( (e, t) => {
    const {altText: r, ...n} = e;
    return r.trim() ? w.jsx(Fy, {
        altText: r,
        asChild: !0,
        children: w.jsx(hf, {
            ...n,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${Ly}\`. Expected non-empty \`string\`.`),
    null)
}
);
jy.displayName = Ly;
var By = "ToastClose"
  , hf = b.forwardRef( (e, t) => {
    const {__scopeToast: r, ...n} = e
      , o = GS(By, r);
    return w.jsx(Fy, {
        asChild: !0,
        children: w.jsx(it.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: Pe(e.onClick, o.onClose)
        })
    })
}
);
hf.displayName = By;
var Fy = b.forwardRef( (e, t) => {
    const {__scopeToast: r, altText: n, ...o} = e;
    return w.jsx(it.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": n || void 0,
        ...o,
        ref: t
    })
}
);
function $y(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(n => {
        if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent),
        JS(n)) {
            const o = n.ariaHidden || n.hidden || n.style.display === "none"
              , i = n.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (i) {
                    const a = n.dataset.radixToastAnnounceAlt;
                    a && t.push(a)
                } else
                    t.push(...$y(n))
        }
    }
    ),
    t
}
function Ka(e, t, r, {discrete: n}) {
    const o = r.originalEvent.currentTarget
      , i = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: r
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    n ? Sy(o, i) : o.dispatchEvent(i)
}
var Nm = (e, t, r=0) => {
    const n = Math.abs(e.x)
      , o = Math.abs(e.y)
      , i = n > o;
    return t === "left" || t === "right" ? i && n > r : !i && o > r
}
;
function XS(e= () => {}
) {
    const t = un(e);
    cn( () => {
        let r = 0
          , n = 0;
        return r = window.requestAnimationFrame( () => n = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(r),
            window.cancelAnimationFrame(n)
        }
    }
    , [t])
}
function JS(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function ZS(e) {
    const t = []
      , r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: n => {
            const o = n.tagName === "INPUT" && n.type === "hidden";
            return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; r.nextNode(); )
        t.push(r.currentNode);
    return t
}
function Ru(e) {
    const t = document.activeElement;
    return e.some(r => r === t ? !0 : (r.focus(),
    document.activeElement !== t))
}
var eC = Iy
  , zy = Ty
  , _y = Oy
  , Uy = Ay
  , Wy = My
  , Vy = jy
  , Hy = hf;
function Gy(e) {
    var t, r, n = "";
    if (typeof e == "string" || typeof e == "number")
        n += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++)
                e[t] && (r = Gy(e[t])) && (n && (n += " "),
                n += r)
        } else
            for (r in e)
                e[r] && (n && (n += " "),
                n += r);
    return n
}
function qy() {
    for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
        (e = arguments[r]) && (t = Gy(e)) && (n && (n += " "),
        n += t);
    return n
}
const Im = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , km = qy
  , tC = (e, t) => r => {
    var n;
    if ((t == null ? void 0 : t.variants) == null)
        return km(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
    const {variants: o, defaultVariants: i} = t
      , a = Object.keys(o).map(u => {
        const d = r == null ? void 0 : r[u]
          , c = i == null ? void 0 : i[u];
        if (d === null)
            return null;
        const f = Im(d) || Im(c);
        return o[u][f]
    }
    )
      , s = r && Object.entries(r).reduce( (u, d) => {
        let[c,f] = d;
        return f === void 0 || (u[c] = f),
        u
    }
    , {})
      , l = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce( (u, d) => {
        let {class: c, className: f, ...p} = d;
        return Object.entries(p).every(m => {
            let[v,x] = m;
            return Array.isArray(x) ? x.includes({
                ...i,
                ...s
            }[v]) : {
                ...i,
                ...s
            }[v] === x
        }
        ) ? [...u, c, f] : u
    }
    , []);
    return km(e, a, l, r == null ? void 0 : r.class, r == null ? void 0 : r.className)
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rC = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , Ky = (...e) => e.filter( (t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var nC = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oC = b.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: r=2, absoluteStrokeWidth: n, className: o="", children: i, iconNode: a, ...s}, l) => b.createElement("svg", {
    ref: l,
    ...nC,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: n ? Number(r) * 24 / Number(t) : r,
    className: Ky("lucide", o),
    ...s
}, [...a.map( ([u,d]) => b.createElement(u, d)), ...Array.isArray(i) ? i : [i]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Be = (e, t) => {
    const r = b.forwardRef( ({className: n, ...o}, i) => b.createElement(oC, {
        ref: i,
        iconNode: t,
        className: Ky(`lucide-${rC(e)}`, n),
        ...o
    }));
    return r.displayName = `${e}`,
    r
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iC = Be("ArrowLeft", [["path", {
    d: "m12 19-7-7 7-7",
    key: "1l729n"
}], ["path", {
    d: "M19 12H5",
    key: "x3x0zl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qy = Be("Calendar", [["path", {
    d: "M8 2v4",
    key: "1cmpym"
}], ["path", {
    d: "M16 2v4",
    key: "4m81vk"
}], ["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "4",
    rx: "2",
    key: "1hopcy"
}], ["path", {
    d: "M3 10h18",
    key: "8toen8"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aC = Be("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yy = Be("CircleCheckBig", [["path", {
    d: "M21.801 10A10 10 0 1 1 17 3.335",
    key: "yps3ct"
}], ["path", {
    d: "m9 11 3 3L22 4",
    key: "1pflzl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xy = Be("FileText", [["path", {
    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
    key: "1rqfz7"
}], ["path", {
    d: "M14 2v4a2 2 0 0 0 2 2h4",
    key: "tnqrlb"
}], ["path", {
    d: "M10 9H8",
    key: "b1mrlr"
}], ["path", {
    d: "M16 13H8",
    key: "t4e002"
}], ["path", {
    d: "M16 17H8",
    key: "z1uh3a"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ou = Be("FolderOpen", [["path", {
    d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
    key: "usdka0"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sC = Be("GripVertical", [["circle", {
    cx: "9",
    cy: "12",
    r: "1",
    key: "1vctgf"
}], ["circle", {
    cx: "9",
    cy: "5",
    r: "1",
    key: "hp0tcf"
}], ["circle", {
    cx: "9",
    cy: "19",
    r: "1",
    key: "fkjjf6"
}], ["circle", {
    cx: "15",
    cy: "12",
    r: "1",
    key: "1tmaij"
}], ["circle", {
    cx: "15",
    cy: "5",
    r: "1",
    key: "19l28e"
}], ["circle", {
    cx: "15",
    cy: "19",
    r: "1",
    key: "f4zoj3"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gf = Be("Image", [["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "3",
    rx: "2",
    ry: "2",
    key: "1m3agn"
}], ["circle", {
    cx: "9",
    cy: "9",
    r: "2",
    key: "af1f0g"
}], ["path", {
    d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
    key: "1xmnt7"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qc = Be("Link", [["path", {
    d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
    key: "1cjeqo"
}], ["path", {
    d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
    key: "19qd67"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yc = Be("Palette", [["circle", {
    cx: "13.5",
    cy: "6.5",
    r: ".5",
    fill: "currentColor",
    key: "1okk4w"
}], ["circle", {
    cx: "17.5",
    cy: "10.5",
    r: ".5",
    fill: "currentColor",
    key: "f64h9f"
}], ["circle", {
    cx: "8.5",
    cy: "7.5",
    r: ".5",
    fill: "currentColor",
    key: "fotxhn"
}], ["circle", {
    cx: "6.5",
    cy: "12.5",
    r: ".5",
    fill: "currentColor",
    key: "qy21gx"
}], ["path", {
    d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
    key: "12rzf8"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ws = Be("Plus", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "M12 5v14",
    key: "s699le"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lC = Be("Save", [["path", {
    d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
    key: "1c8476"
}], ["path", {
    d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",
    key: "1ydtos"
}], ["path", {
    d: "M7 3v4a1 1 0 0 0 1 1h7",
    key: "t51u73"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vs = Be("Settings", [["path", {
    d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
    key: "1qme2f"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "3",
    key: "1v7zrd"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Au = Be("Star", [["path", {
    d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
    key: "r04s7s"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uC = Be("Tag", [["path", {
    d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
    key: "vktsd0"
}], ["circle", {
    cx: "7.5",
    cy: "7.5",
    r: ".5",
    fill: "currentColor",
    key: "kqv944"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mu = Be("Type", [["polyline", {
    points: "4 7 4 4 20 4 20 7",
    key: "1nosan"
}], ["line", {
    x1: "9",
    x2: "15",
    y1: "20",
    y2: "20",
    key: "swin9y"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "4",
    y2: "20",
    key: "1tx1rr"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qi = Be("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]])
  , yf = "-"
  , cC = e => {
    const t = fC(e)
      , {conflictingClassGroups: r, conflictingClassGroupModifiers: n} = e;
    return {
        getClassGroupId: a => {
            const s = a.split(yf);
            return s[0] === "" && s.length !== 1 && s.shift(),
            Jy(s, t) || dC(a)
        }
        ,
        getConflictingClassGroupIds: (a, s) => {
            const l = r[a] || [];
            return s && n[a] ? [...l, ...n[a]] : l
        }
    }
}
  , Jy = (e, t) => {
    var a;
    if (e.length === 0)
        return t.classGroupId;
    const r = e[0]
      , n = t.nextPart.get(r)
      , o = n ? Jy(e.slice(1), n) : void 0;
    if (o)
        return o;
    if (t.validators.length === 0)
        return;
    const i = e.join(yf);
    return (a = t.validators.find( ({validator: s}) => s(i))) == null ? void 0 : a.classGroupId
}
  , Tm = /^\[(.+)\]$/
  , dC = e => {
    if (Tm.test(e)) {
        const t = Tm.exec(e)[1]
          , r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (r)
            return "arbitrary.." + r
    }
}
  , fC = e => {
    const {theme: t, prefix: r} = e
      , n = {
        nextPart: new Map,
        validators: []
    };
    return mC(Object.entries(e.classGroups), r).forEach( ([i,a]) => {
        Xc(a, n, i, t)
    }
    ),
    n
}
  , Xc = (e, t, r, n) => {
    e.forEach(o => {
        if (typeof o == "string") {
            const i = o === "" ? t : Rm(t, o);
            i.classGroupId = r;
            return
        }
        if (typeof o == "function") {
            if (pC(o)) {
                Xc(o(n), t, r, n);
                return
            }
            t.validators.push({
                validator: o,
                classGroupId: r
            });
            return
        }
        Object.entries(o).forEach( ([i,a]) => {
            Xc(a, Rm(t, i), r, n)
        }
        )
    }
    )
}
  , Rm = (e, t) => {
    let r = e;
    return t.split(yf).forEach(n => {
        r.nextPart.has(n) || r.nextPart.set(n, {
            nextPart: new Map,
            validators: []
        }),
        r = r.nextPart.get(n)
    }
    ),
    r
}
  , pC = e => e.isThemeGetter
  , mC = (e, t) => t ? e.map( ([r,n]) => {
    const o = n.map(i => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map( ([a,s]) => [t + a, s])) : i);
    return [r, o]
}
) : e
  , vC = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , r = new Map
      , n = new Map;
    const o = (i, a) => {
        r.set(i, a),
        t++,
        t > e && (t = 0,
        n = r,
        r = new Map)
    }
    ;
    return {
        get(i) {
            let a = r.get(i);
            if (a !== void 0)
                return a;
            if ((a = n.get(i)) !== void 0)
                return o(i, a),
                a
        },
        set(i, a) {
            r.has(i) ? r.set(i, a) : o(i, a)
        }
    }
}
  , Zy = "!"
  , hC = e => {
    const {separator: t, experimentalParseClassName: r} = e
      , n = t.length === 1
      , o = t[0]
      , i = t.length
      , a = s => {
        const l = [];
        let u = 0, d = 0, c;
        for (let x = 0; x < s.length; x++) {
            let g = s[x];
            if (u === 0) {
                if (g === o && (n || s.slice(x, x + i) === t)) {
                    l.push(s.slice(d, x)),
                    d = x + i;
                    continue
                }
                if (g === "/") {
                    c = x;
                    continue
                }
            }
            g === "[" ? u++ : g === "]" && u--
        }
        const f = l.length === 0 ? s : s.substring(d)
          , p = f.startsWith(Zy)
          , m = p ? f.substring(1) : f
          , v = c && c > d ? c - d : void 0;
        return {
            modifiers: l,
            hasImportantModifier: p,
            baseClassName: m,
            maybePostfixModifierPosition: v
        }
    }
    ;
    return r ? s => r({
        className: s,
        parseClassName: a
    }) : a
}
  , gC = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let r = [];
    return e.forEach(n => {
        n[0] === "[" ? (t.push(...r.sort(), n),
        r = []) : r.push(n)
    }
    ),
    t.push(...r.sort()),
    t
}
  , yC = e => ({
    cache: vC(e.cacheSize),
    parseClassName: hC(e),
    ...cC(e)
})
  , xC = /\s+/
  , wC = (e, t) => {
    const {parseClassName: r, getClassGroupId: n, getConflictingClassGroupIds: o} = t
      , i = []
      , a = e.trim().split(xC);
    let s = "";
    for (let l = a.length - 1; l >= 0; l -= 1) {
        const u = a[l]
          , {modifiers: d, hasImportantModifier: c, baseClassName: f, maybePostfixModifierPosition: p} = r(u);
        let m = !!p
          , v = n(m ? f.substring(0, p) : f);
        if (!v) {
            if (!m) {
                s = u + (s.length > 0 ? " " + s : s);
                continue
            }
            if (v = n(f),
            !v) {
                s = u + (s.length > 0 ? " " + s : s);
                continue
            }
            m = !1
        }
        const x = gC(d).join(":")
          , g = c ? x + Zy : x
          , h = g + v;
        if (i.includes(h))
            continue;
        i.push(h);
        const y = o(v, m);
        for (let S = 0; S < y.length; ++S) {
            const E = y[S];
            i.push(g + E)
        }
        s = u + (s.length > 0 ? " " + s : s)
    }
    return s
}
;
function bC() {
    let e = 0, t, r, n = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (r = e0(t)) && (n && (n += " "),
        n += r);
    return n
}
const e0 = e => {
    if (typeof e == "string")
        return e;
    let t, r = "";
    for (let n = 0; n < e.length; n++)
        e[n] && (t = e0(e[n])) && (r && (r += " "),
        r += t);
    return r
}
;
function SC(e, ...t) {
    let r, n, o, i = a;
    function a(l) {
        const u = t.reduce( (d, c) => c(d), e());
        return r = yC(u),
        n = r.cache.get,
        o = r.cache.set,
        i = s,
        s(l)
    }
    function s(l) {
        const u = n(l);
        if (u)
            return u;
        const d = wC(l, r);
        return o(l, d),
        d
    }
    return function() {
        return i(bC.apply(null, arguments))
    }
}
const ce = e => {
    const t = r => r[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , t0 = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , CC = /^\d+\/\d+$/
  , EC = new Set(["px", "full", "screen"])
  , PC = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , DC = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , NC = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , IC = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , kC = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , pr = e => bo(e) || EC.has(e) || CC.test(e)
  , Ar = e => qo(e, "length", BC)
  , bo = e => !!e && !Number.isNaN(Number(e))
  , Lu = e => qo(e, "number", bo)
  , ui = e => !!e && Number.isInteger(Number(e))
  , TC = e => e.endsWith("%") && bo(e.slice(0, -1))
  , J = e => t0.test(e)
  , Mr = e => PC.test(e)
  , RC = new Set(["length", "size", "percentage"])
  , OC = e => qo(e, RC, r0)
  , AC = e => qo(e, "position", r0)
  , MC = new Set(["image", "url"])
  , LC = e => qo(e, MC, $C)
  , jC = e => qo(e, "", FC)
  , ci = () => !0
  , qo = (e, t, r) => {
    const n = t0.exec(e);
    return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1
}
  , BC = e => DC.test(e) && !NC.test(e)
  , r0 = () => !1
  , FC = e => IC.test(e)
  , $C = e => kC.test(e)
  , zC = () => {
    const e = ce("colors")
      , t = ce("spacing")
      , r = ce("blur")
      , n = ce("brightness")
      , o = ce("borderColor")
      , i = ce("borderRadius")
      , a = ce("borderSpacing")
      , s = ce("borderWidth")
      , l = ce("contrast")
      , u = ce("grayscale")
      , d = ce("hueRotate")
      , c = ce("invert")
      , f = ce("gap")
      , p = ce("gradientColorStops")
      , m = ce("gradientColorStopPositions")
      , v = ce("inset")
      , x = ce("margin")
      , g = ce("opacity")
      , h = ce("padding")
      , y = ce("saturate")
      , S = ce("scale")
      , E = ce("sepia")
      , C = ce("skew")
      , P = ce("space")
      , D = ce("translate")
      , k = () => ["auto", "contain", "none"]
      , O = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , F = () => ["auto", J, t]
      , j = () => [J, t]
      , W = () => ["", pr, Ar]
      , A = () => ["auto", bo, J]
      , G = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , _ = () => ["solid", "dashed", "dotted", "double", "none"]
      , q = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , N = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , T = () => ["", "0", J]
      , B = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , H = () => [bo, J];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [ci],
            spacing: [pr, Ar],
            blur: ["none", "", Mr, J],
            brightness: H(),
            borderColor: [e],
            borderRadius: ["none", "", "full", Mr, J],
            borderSpacing: j(),
            borderWidth: W(),
            contrast: H(),
            grayscale: T(),
            hueRotate: H(),
            invert: T(),
            gap: j(),
            gradientColorStops: [e],
            gradientColorStopPositions: [TC, Ar],
            inset: F(),
            margin: F(),
            opacity: H(),
            padding: j(),
            saturate: H(),
            scale: H(),
            sepia: T(),
            skew: H(),
            space: j(),
            translate: j()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", J]
            }],
            container: ["container"],
            columns: [{
                columns: [Mr]
            }],
            "break-after": [{
                "break-after": B()
            }],
            "break-before": [{
                "break-before": B()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...G(), J]
            }],
            overflow: [{
                overflow: O()
            }],
            "overflow-x": [{
                "overflow-x": O()
            }],
            "overflow-y": [{
                "overflow-y": O()
            }],
            overscroll: [{
                overscroll: k()
            }],
            "overscroll-x": [{
                "overscroll-x": k()
            }],
            "overscroll-y": [{
                "overscroll-y": k()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [v]
            }],
            "inset-x": [{
                "inset-x": [v]
            }],
            "inset-y": [{
                "inset-y": [v]
            }],
            start: [{
                start: [v]
            }],
            end: [{
                end: [v]
            }],
            top: [{
                top: [v]
            }],
            right: [{
                right: [v]
            }],
            bottom: [{
                bottom: [v]
            }],
            left: [{
                left: [v]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", ui, J]
            }],
            basis: [{
                basis: F()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", J]
            }],
            grow: [{
                grow: T()
            }],
            shrink: [{
                shrink: T()
            }],
            order: [{
                order: ["first", "last", "none", ui, J]
            }],
            "grid-cols": [{
                "grid-cols": [ci]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", ui, J]
                }, J]
            }],
            "col-start": [{
                "col-start": A()
            }],
            "col-end": [{
                "col-end": A()
            }],
            "grid-rows": [{
                "grid-rows": [ci]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [ui, J]
                }, J]
            }],
            "row-start": [{
                "row-start": A()
            }],
            "row-end": [{
                "row-end": A()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", J]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", J]
            }],
            gap: [{
                gap: [f]
            }],
            "gap-x": [{
                "gap-x": [f]
            }],
            "gap-y": [{
                "gap-y": [f]
            }],
            "justify-content": [{
                justify: ["normal", ...N()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...N(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...N(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [h]
            }],
            px: [{
                px: [h]
            }],
            py: [{
                py: [h]
            }],
            ps: [{
                ps: [h]
            }],
            pe: [{
                pe: [h]
            }],
            pt: [{
                pt: [h]
            }],
            pr: [{
                pr: [h]
            }],
            pb: [{
                pb: [h]
            }],
            pl: [{
                pl: [h]
            }],
            m: [{
                m: [x]
            }],
            mx: [{
                mx: [x]
            }],
            my: [{
                my: [x]
            }],
            ms: [{
                ms: [x]
            }],
            me: [{
                me: [x]
            }],
            mt: [{
                mt: [x]
            }],
            mr: [{
                mr: [x]
            }],
            mb: [{
                mb: [x]
            }],
            ml: [{
                ml: [x]
            }],
            "space-x": [{
                "space-x": [P]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [P]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", J, t]
            }],
            "min-w": [{
                "min-w": [J, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [J, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [Mr]
                }, Mr]
            }],
            h: [{
                h: [J, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [J, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [J, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [J, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", Mr, Ar]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Lu]
            }],
            "font-family": [{
                font: [ci]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", J]
            }],
            "line-clamp": [{
                "line-clamp": ["none", bo, Lu]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", pr, J]
            }],
            "list-image": [{
                "list-image": ["none", J]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", J]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [g]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [g]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [..._(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", pr, Ar]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", pr, J]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: j()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", J]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", J]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [g]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...G(), AC]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", OC]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, LC]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [m]
            }],
            "gradient-via-pos": [{
                via: [m]
            }],
            "gradient-to-pos": [{
                to: [m]
            }],
            "gradient-from": [{
                from: [p]
            }],
            "gradient-via": [{
                via: [p]
            }],
            "gradient-to": [{
                to: [p]
            }],
            rounded: [{
                rounded: [i]
            }],
            "rounded-s": [{
                "rounded-s": [i]
            }],
            "rounded-e": [{
                "rounded-e": [i]
            }],
            "rounded-t": [{
                "rounded-t": [i]
            }],
            "rounded-r": [{
                "rounded-r": [i]
            }],
            "rounded-b": [{
                "rounded-b": [i]
            }],
            "rounded-l": [{
                "rounded-l": [i]
            }],
            "rounded-ss": [{
                "rounded-ss": [i]
            }],
            "rounded-se": [{
                "rounded-se": [i]
            }],
            "rounded-ee": [{
                "rounded-ee": [i]
            }],
            "rounded-es": [{
                "rounded-es": [i]
            }],
            "rounded-tl": [{
                "rounded-tl": [i]
            }],
            "rounded-tr": [{
                "rounded-tr": [i]
            }],
            "rounded-br": [{
                "rounded-br": [i]
            }],
            "rounded-bl": [{
                "rounded-bl": [i]
            }],
            "border-w": [{
                border: [s]
            }],
            "border-w-x": [{
                "border-x": [s]
            }],
            "border-w-y": [{
                "border-y": [s]
            }],
            "border-w-s": [{
                "border-s": [s]
            }],
            "border-w-e": [{
                "border-e": [s]
            }],
            "border-w-t": [{
                "border-t": [s]
            }],
            "border-w-r": [{
                "border-r": [s]
            }],
            "border-w-b": [{
                "border-b": [s]
            }],
            "border-w-l": [{
                "border-l": [s]
            }],
            "border-opacity": [{
                "border-opacity": [g]
            }],
            "border-style": [{
                border: [..._(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [s]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [s]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [g]
            }],
            "divide-style": [{
                divide: _()
            }],
            "border-color": [{
                border: [o]
            }],
            "border-color-x": [{
                "border-x": [o]
            }],
            "border-color-y": [{
                "border-y": [o]
            }],
            "border-color-s": [{
                "border-s": [o]
            }],
            "border-color-e": [{
                "border-e": [o]
            }],
            "border-color-t": [{
                "border-t": [o]
            }],
            "border-color-r": [{
                "border-r": [o]
            }],
            "border-color-b": [{
                "border-b": [o]
            }],
            "border-color-l": [{
                "border-l": [o]
            }],
            "divide-color": [{
                divide: [o]
            }],
            "outline-style": [{
                outline: ["", ..._()]
            }],
            "outline-offset": [{
                "outline-offset": [pr, J]
            }],
            "outline-w": [{
                outline: [pr, Ar]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: W()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [g]
            }],
            "ring-offset-w": [{
                "ring-offset": [pr, Ar]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", Mr, jC]
            }],
            "shadow-color": [{
                shadow: [ci]
            }],
            opacity: [{
                opacity: [g]
            }],
            "mix-blend": [{
                "mix-blend": [...q(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": q()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [r]
            }],
            brightness: [{
                brightness: [n]
            }],
            contrast: [{
                contrast: [l]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", Mr, J]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [d]
            }],
            invert: [{
                invert: [c]
            }],
            saturate: [{
                saturate: [y]
            }],
            sepia: [{
                sepia: [E]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [r]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [n]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [l]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [d]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [c]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [g]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [y]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [E]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [a]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [a]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [a]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", J]
            }],
            duration: [{
                duration: H()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", J]
            }],
            delay: [{
                delay: H()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", J]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [S]
            }],
            "scale-x": [{
                "scale-x": [S]
            }],
            "scale-y": [{
                "scale-y": [S]
            }],
            rotate: [{
                rotate: [ui, J]
            }],
            "translate-x": [{
                "translate-x": [D]
            }],
            "translate-y": [{
                "translate-y": [D]
            }],
            "skew-x": [{
                "skew-x": [C]
            }],
            "skew-y": [{
                "skew-y": [C]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", J]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", J]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": j()
            }],
            "scroll-mx": [{
                "scroll-mx": j()
            }],
            "scroll-my": [{
                "scroll-my": j()
            }],
            "scroll-ms": [{
                "scroll-ms": j()
            }],
            "scroll-me": [{
                "scroll-me": j()
            }],
            "scroll-mt": [{
                "scroll-mt": j()
            }],
            "scroll-mr": [{
                "scroll-mr": j()
            }],
            "scroll-mb": [{
                "scroll-mb": j()
            }],
            "scroll-ml": [{
                "scroll-ml": j()
            }],
            "scroll-p": [{
                "scroll-p": j()
            }],
            "scroll-px": [{
                "scroll-px": j()
            }],
            "scroll-py": [{
                "scroll-py": j()
            }],
            "scroll-ps": [{
                "scroll-ps": j()
            }],
            "scroll-pe": [{
                "scroll-pe": j()
            }],
            "scroll-pt": [{
                "scroll-pt": j()
            }],
            "scroll-pr": [{
                "scroll-pr": j()
            }],
            "scroll-pb": [{
                "scroll-pb": j()
            }],
            "scroll-pl": [{
                "scroll-pl": j()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", J]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [pr, Ar, Lu]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , _C = SC(zC);
function qn(...e) {
    return _C(qy(e))
}
const UC = eC
  , n0 = b.forwardRef( ({className: e, ...t}, r) => w.jsx(zy, {
    ref: r,
    className: qn("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
n0.displayName = zy.displayName;
const WC = tC("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , o0 = b.forwardRef( ({className: e, variant: t, ...r}, n) => w.jsx(_y, {
    ref: n,
    className: qn(WC({
        variant: t
    }), e),
    ...r
}));
o0.displayName = _y.displayName;
const VC = b.forwardRef( ({className: e, ...t}, r) => w.jsx(Vy, {
    ref: r,
    className: qn("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", e),
    ...t
}));
VC.displayName = Vy.displayName;
const i0 = b.forwardRef( ({className: e, ...t}, r) => w.jsx(Hy, {
    ref: r,
    className: qn("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: w.jsx(qi, {
        className: "h-4 w-4"
    })
}));
i0.displayName = Hy.displayName;
const a0 = b.forwardRef( ({className: e, ...t}, r) => w.jsx(Uy, {
    ref: r,
    className: qn("text-sm font-semibold", e),
    ...t
}));
a0.displayName = Uy.displayName;
const s0 = b.forwardRef( ({className: e, ...t}, r) => w.jsx(Wy, {
    ref: r,
    className: qn("text-sm opacity-90", e),
    ...t
}));
s0.displayName = Wy.displayName;
function HC() {
    const {toasts: e} = lS();
    return w.jsxs(UC, {
        children: [e.map(function({id: t, title: r, description: n, action: o, ...i}) {
            return w.jsxs(o0, {
                ...i,
                children: [w.jsxs("div", {
                    className: "grid gap-1",
                    children: [r && w.jsx(a0, {
                        children: r
                    }), n && w.jsx(s0, {
                        children: n
                    })]
                }), o, w.jsx(i0, {})]
            }, t)
        }), w.jsx(n0, {})]
    })
}
var Om = ["light", "dark"]
  , GC = "(prefers-color-scheme: dark)"
  , qC = b.createContext(void 0)
  , KC = {
    setTheme: e => {}
    ,
    themes: []
}
  , QC = () => {
    var e;
    return (e = b.useContext(qC)) != null ? e : KC
}
;
b.memo( ({forcedTheme: e, storageKey: t, attribute: r, enableSystem: n, enableColorScheme: o, defaultTheme: i, value: a, attrs: s, nonce: l}) => {
    let u = i === "system"
      , d = r === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${s.map(m => `'${m}'`).join(",")})`};` : `var d=document.documentElement,n='${r}',s='setAttribute';`
      , c = o ? Om.includes(i) && i ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
      , f = (m, v=!1, x=!0) => {
        let g = a ? a[m] : m
          , h = v ? m + "|| ''" : `'${g}'`
          , y = "";
        return o && x && !v && Om.includes(m) && (y += `d.style.colorScheme = '${m}';`),
        r === "class" ? v || g ? y += `c.add(${h})` : y += "null" : g && (y += `d[s](n,${h})`),
        y
    }
      , p = e ? `!function(){${d}${f(e)}}()` : n ? `!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${GC}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f("dark")}}else{${f("light")}}}else if(e){${a ? `var x=${JSON.stringify(a)};` : ""}${f(a ? "x[e]" : "e", !0)}}${u ? "" : "else{" + f(i, !1, !1) + "}"}${c}}catch(e){}}()` : `!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${a ? `var x=${JSON.stringify(a)};` : ""}${f(a ? "x[e]" : "e", !0)}}else{${f(i, !1, !1)};}${c}}catch(t){}}();`;
    return b.createElement("script", {
        nonce: l,
        dangerouslySetInnerHTML: {
            __html: p
        }
    })
}
);
var YC = e => {
    switch (e) {
    case "success":
        return ZC;
    case "info":
        return tE;
    case "warning":
        return eE;
    case "error":
        return rE;
    default:
        return null
    }
}
  , XC = Array(12).fill(0)
  , JC = ({visible: e, className: t}) => R.createElement("div", {
    className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
    "data-visible": e
}, R.createElement("div", {
    className: "sonner-spinner"
}, XC.map( (r, n) => R.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${n}`
}))))
  , ZC = R.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, R.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , eE = R.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, R.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , tE = R.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, R.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , rE = R.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, R.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , nE = R.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, R.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), R.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}))
  , oE = () => {
    let[e,t] = R.useState(document.hidden);
    return R.useEffect( () => {
        let r = () => {
            t(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", r),
        () => window.removeEventListener("visibilitychange", r)
    }
    , []),
    e
}
  , Jc = 1
  , iE = class {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            let t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(t => t(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var t;
            let {message: r, ...n} = e
              , o = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : Jc++
              , i = this.toasts.find(s => s.id === o)
              , a = e.dismissible === void 0 ? !0 : e.dismissible;
            return this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
            i ? this.toasts = this.toasts.map(s => s.id === o ? (this.publish({
                ...s,
                ...e,
                id: o,
                title: r
            }),
            {
                ...s,
                ...e,
                id: o,
                dismissible: a,
                title: r
            }) : s) : this.addToast({
                title: r,
                ...n,
                dismissible: a,
                id: o
            }),
            o
        }
        ,
        this.dismiss = e => (this.dismissedToasts.add(e),
        e || this.toasts.forEach(t => {
            this.subscribers.forEach(r => r({
                id: t.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(t => t({
            id: e,
            dismiss: !0
        })),
        e),
        this.message = (e, t) => this.create({
            ...t,
            message: e
        }),
        this.error = (e, t) => this.create({
            ...t,
            message: e,
            type: "error"
        }),
        this.success = (e, t) => this.create({
            ...t,
            type: "success",
            message: e
        }),
        this.info = (e, t) => this.create({
            ...t,
            type: "info",
            message: e
        }),
        this.warning = (e, t) => this.create({
            ...t,
            type: "warning",
            message: e
        }),
        this.loading = (e, t) => this.create({
            ...t,
            type: "loading",
            message: e
        }),
        this.promise = (e, t) => {
            if (!t)
                return;
            let r;
            t.loading !== void 0 && (r = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description: typeof t.description != "function" ? t.description : void 0
            }));
            let n = e instanceof Promise ? e : e(), o = r !== void 0, i, a = n.then(async l => {
                if (i = ["resolve", l],
                R.isValidElement(l))
                    o = !1,
                    this.create({
                        id: r,
                        type: "default",
                        message: l
                    });
                else if (sE(l) && !l.ok) {
                    o = !1;
                    let u = typeof t.error == "function" ? await t.error(`HTTP error! status: ${l.status}`) : t.error
                      , d = typeof t.description == "function" ? await t.description(`HTTP error! status: ${l.status}`) : t.description;
                    this.create({
                        id: r,
                        type: "error",
                        message: u,
                        description: d
                    })
                } else if (t.success !== void 0) {
                    o = !1;
                    let u = typeof t.success == "function" ? await t.success(l) : t.success
                      , d = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: r,
                        type: "success",
                        message: u,
                        description: d
                    })
                }
            }
            ).catch(async l => {
                if (i = ["reject", l],
                t.error !== void 0) {
                    o = !1;
                    let u = typeof t.error == "function" ? await t.error(l) : t.error
                      , d = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: r,
                        type: "error",
                        message: u,
                        description: d
                    })
                }
            }
            ).finally( () => {
                var l;
                o && (this.dismiss(r),
                r = void 0),
                (l = t.finally) == null || l.call(t)
            }
            ), s = () => new Promise( (l, u) => a.then( () => i[0] === "reject" ? u(i[1]) : l(i[1])).catch(u));
            return typeof r != "string" && typeof r != "number" ? {
                unwrap: s
            } : Object.assign(r, {
                unwrap: s
            })
        }
        ,
        this.custom = (e, t) => {
            let r = (t == null ? void 0 : t.id) || Jc++;
            return this.create({
                jsx: e(r),
                id: r,
                ...t
            }),
            r
        }
        ,
        this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)),
        this.subscribers = [],
        this.toasts = [],
        this.dismissedToasts = new Set
    }
}
  , Ze = new iE
  , aE = (e, t) => {
    let r = (t == null ? void 0 : t.id) || Jc++;
    return Ze.addToast({
        title: e,
        ...t,
        id: r
    }),
    r
}
  , sE = e => e && typeof e == "object" && "ok"in e && typeof e.ok == "boolean" && "status"in e && typeof e.status == "number"
  , lE = aE
  , uE = () => Ze.toasts
  , cE = () => Ze.getActiveToasts();
Object.assign(lE, {
    success: Ze.success,
    info: Ze.info,
    warning: Ze.warning,
    error: Ze.error,
    custom: Ze.custom,
    message: Ze.message,
    promise: Ze.promise,
    dismiss: Ze.dismiss,
    loading: Ze.loading
}, {
    getHistory: uE,
    getToasts: cE
});
function dE(e, {insertAt: t}={}) {
    if (typeof document > "u")
        return;
    let r = document.head || document.getElementsByTagName("head")[0]
      , n = document.createElement("style");
    n.type = "text/css",
    t === "top" && r.firstChild ? r.insertBefore(n, r.firstChild) : r.appendChild(n),
    n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e))
}
dE(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Qa(e) {
    return e.label !== void 0
}
var fE = 3
  , pE = "32px"
  , mE = "16px"
  , Am = 4e3
  , vE = 356
  , hE = 14
  , gE = 20
  , yE = 200;
function Ft(...e) {
    return e.filter(Boolean).join(" ")
}
function xE(e) {
    let[t,r] = e.split("-")
      , n = [];
    return t && n.push(t),
    r && n.push(r),
    n
}
var wE = e => {
    var t, r, n, o, i, a, s, l, u, d, c;
    let {invert: f, toast: p, unstyled: m, interacting: v, setHeights: x, visibleToasts: g, heights: h, index: y, toasts: S, expanded: E, removeToast: C, defaultRichColors: P, closeButton: D, style: k, cancelButtonStyle: O, actionButtonStyle: F, className: j="", descriptionClassName: W="", duration: A, position: G, gap: _, loadingIcon: q, expandByDefault: N, classNames: T, icons: B, closeButtonAriaLabel: H="Close toast", pauseWhenPageIsHidden: $} = e
      , [K,X] = R.useState(null)
      , [oe,we] = R.useState(null)
      , [ee,At] = R.useState(!1)
      , [yt,Xe] = R.useState(!1)
      , [xt,dr] = R.useState(!1)
      , [wt,fr] = R.useState(!1)
      , [Qn,Ir] = R.useState(!1)
      , [xn,wn] = R.useState(0)
      , [bt,Yn] = R.useState(0)
      , ei = R.useRef(p.duration || A || Am)
      , lp = R.useRef(null)
      , bn = R.useRef(null)
      , Sw = y === 0
      , Cw = y + 1 <= g
      , St = p.type
      , Xn = p.dismissible !== !1
      , Ew = p.className || ""
      , Pw = p.descriptionClassName || ""
      , Ia = R.useMemo( () => h.findIndex(Q => Q.toastId === p.id) || 0, [h, p.id])
      , Dw = R.useMemo( () => {
        var Q;
        return (Q = p.closeButton) != null ? Q : D
    }
    , [p.closeButton, D])
      , up = R.useMemo( () => p.duration || A || Am, [p.duration, A])
      , eu = R.useRef(0)
      , Jn = R.useRef(0)
      , cp = R.useRef(0)
      , Zn = R.useRef(null)
      , [Nw,Iw] = G.split("-")
      , dp = R.useMemo( () => h.reduce( (Q, se, pe) => pe >= Ia ? Q : Q + se.height, 0), [h, Ia])
      , fp = oE()
      , kw = p.invert || f
      , tu = St === "loading";
    Jn.current = R.useMemo( () => Ia * _ + dp, [Ia, dp]),
    R.useEffect( () => {
        ei.current = up
    }
    , [up]),
    R.useEffect( () => {
        At(!0)
    }
    , []),
    R.useEffect( () => {
        let Q = bn.current;
        if (Q) {
            let se = Q.getBoundingClientRect().height;
            return Yn(se),
            x(pe => [{
                toastId: p.id,
                height: se,
                position: p.position
            }, ...pe]),
            () => x(pe => pe.filter(Mt => Mt.toastId !== p.id))
        }
    }
    , [x, p.id]),
    R.useLayoutEffect( () => {
        if (!ee)
            return;
        let Q = bn.current
          , se = Q.style.height;
        Q.style.height = "auto";
        let pe = Q.getBoundingClientRect().height;
        Q.style.height = se,
        Yn(pe),
        x(Mt => Mt.find(Lt => Lt.toastId === p.id) ? Mt.map(Lt => Lt.toastId === p.id ? {
            ...Lt,
            height: pe
        } : Lt) : [{
            toastId: p.id,
            height: pe,
            position: p.position
        }, ...Mt])
    }
    , [ee, p.title, p.description, x, p.id]);
    let kr = R.useCallback( () => {
        Xe(!0),
        wn(Jn.current),
        x(Q => Q.filter(se => se.toastId !== p.id)),
        setTimeout( () => {
            C(p)
        }
        , yE)
    }
    , [p, C, x, Jn]);
    R.useEffect( () => {
        if (p.promise && St === "loading" || p.duration === 1 / 0 || p.type === "loading")
            return;
        let Q;
        return E || v || $ && fp ? ( () => {
            if (cp.current < eu.current) {
                let se = new Date().getTime() - eu.current;
                ei.current = ei.current - se
            }
            cp.current = new Date().getTime()
        }
        )() : ei.current !== 1 / 0 && (eu.current = new Date().getTime(),
        Q = setTimeout( () => {
            var se;
            (se = p.onAutoClose) == null || se.call(p, p),
            kr()
        }
        , ei.current)),
        () => clearTimeout(Q)
    }
    , [E, v, p, St, $, fp, kr]),
    R.useEffect( () => {
        p.delete && kr()
    }
    , [kr, p.delete]);
    function Tw() {
        var Q, se, pe;
        return B != null && B.loading ? R.createElement("div", {
            className: Ft(T == null ? void 0 : T.loader, (Q = p == null ? void 0 : p.classNames) == null ? void 0 : Q.loader, "sonner-loader"),
            "data-visible": St === "loading"
        }, B.loading) : q ? R.createElement("div", {
            className: Ft(T == null ? void 0 : T.loader, (se = p == null ? void 0 : p.classNames) == null ? void 0 : se.loader, "sonner-loader"),
            "data-visible": St === "loading"
        }, q) : R.createElement(JC, {
            className: Ft(T == null ? void 0 : T.loader, (pe = p == null ? void 0 : p.classNames) == null ? void 0 : pe.loader),
            visible: St === "loading"
        })
    }
    return R.createElement("li", {
        tabIndex: 0,
        ref: bn,
        className: Ft(j, Ew, T == null ? void 0 : T.toast, (t = p == null ? void 0 : p.classNames) == null ? void 0 : t.toast, T == null ? void 0 : T.default, T == null ? void 0 : T[St], (r = p == null ? void 0 : p.classNames) == null ? void 0 : r[St]),
        "data-sonner-toast": "",
        "data-rich-colors": (n = p.richColors) != null ? n : P,
        "data-styled": !(p.jsx || p.unstyled || m),
        "data-mounted": ee,
        "data-promise": !!p.promise,
        "data-swiped": Qn,
        "data-removed": yt,
        "data-visible": Cw,
        "data-y-position": Nw,
        "data-x-position": Iw,
        "data-index": y,
        "data-front": Sw,
        "data-swiping": xt,
        "data-dismissible": Xn,
        "data-type": St,
        "data-invert": kw,
        "data-swipe-out": wt,
        "data-swipe-direction": oe,
        "data-expanded": !!(E || N && ee),
        style: {
            "--index": y,
            "--toasts-before": y,
            "--z-index": S.length - y,
            "--offset": `${yt ? xn : Jn.current}px`,
            "--initial-height": N ? "auto" : `${bt}px`,
            ...k,
            ...p.style
        },
        onDragEnd: () => {
            dr(!1),
            X(null),
            Zn.current = null
        }
        ,
        onPointerDown: Q => {
            tu || !Xn || (lp.current = new Date,
            wn(Jn.current),
            Q.target.setPointerCapture(Q.pointerId),
            Q.target.tagName !== "BUTTON" && (dr(!0),
            Zn.current = {
                x: Q.clientX,
                y: Q.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var Q, se, pe, Mt;
            if (wt || !Xn)
                return;
            Zn.current = null;
            let Lt = Number(((Q = bn.current) == null ? void 0 : Q.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0)
              , Tr = Number(((se = bn.current) == null ? void 0 : se.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0)
              , Sn = new Date().getTime() - ((pe = lp.current) == null ? void 0 : pe.getTime())
              , jt = K === "x" ? Lt : Tr
              , Rr = Math.abs(jt) / Sn;
            if (Math.abs(jt) >= gE || Rr > .11) {
                wn(Jn.current),
                (Mt = p.onDismiss) == null || Mt.call(p, p),
                we(K === "x" ? Lt > 0 ? "right" : "left" : Tr > 0 ? "down" : "up"),
                kr(),
                fr(!0),
                Ir(!1);
                return
            }
            dr(!1),
            X(null)
        }
        ,
        onPointerMove: Q => {
            var se, pe, Mt, Lt;
            if (!Zn.current || !Xn || ((se = window.getSelection()) == null ? void 0 : se.toString().length) > 0)
                return;
            let Tr = Q.clientY - Zn.current.y
              , Sn = Q.clientX - Zn.current.x
              , jt = (pe = e.swipeDirections) != null ? pe : xE(G);
            !K && (Math.abs(Sn) > 1 || Math.abs(Tr) > 1) && X(Math.abs(Sn) > Math.abs(Tr) ? "x" : "y");
            let Rr = {
                x: 0,
                y: 0
            };
            K === "y" ? (jt.includes("top") || jt.includes("bottom")) && (jt.includes("top") && Tr < 0 || jt.includes("bottom") && Tr > 0) && (Rr.y = Tr) : K === "x" && (jt.includes("left") || jt.includes("right")) && (jt.includes("left") && Sn < 0 || jt.includes("right") && Sn > 0) && (Rr.x = Sn),
            (Math.abs(Rr.x) > 0 || Math.abs(Rr.y) > 0) && Ir(!0),
            (Mt = bn.current) == null || Mt.style.setProperty("--swipe-amount-x", `${Rr.x}px`),
            (Lt = bn.current) == null || Lt.style.setProperty("--swipe-amount-y", `${Rr.y}px`)
        }
    }, Dw && !p.jsx ? R.createElement("button", {
        "aria-label": H,
        "data-disabled": tu,
        "data-close-button": !0,
        onClick: tu || !Xn ? () => {}
        : () => {
            var Q;
            kr(),
            (Q = p.onDismiss) == null || Q.call(p, p)
        }
        ,
        className: Ft(T == null ? void 0 : T.closeButton, (o = p == null ? void 0 : p.classNames) == null ? void 0 : o.closeButton)
    }, (i = B == null ? void 0 : B.close) != null ? i : nE) : null, p.jsx || b.isValidElement(p.title) ? p.jsx ? p.jsx : typeof p.title == "function" ? p.title() : p.title : R.createElement(R.Fragment, null, St || p.icon || p.promise ? R.createElement("div", {
        "data-icon": "",
        className: Ft(T == null ? void 0 : T.icon, (a = p == null ? void 0 : p.classNames) == null ? void 0 : a.icon)
    }, p.promise || p.type === "loading" && !p.icon ? p.icon || Tw() : null, p.type !== "loading" ? p.icon || (B == null ? void 0 : B[St]) || YC(St) : null) : null, R.createElement("div", {
        "data-content": "",
        className: Ft(T == null ? void 0 : T.content, (s = p == null ? void 0 : p.classNames) == null ? void 0 : s.content)
    }, R.createElement("div", {
        "data-title": "",
        className: Ft(T == null ? void 0 : T.title, (l = p == null ? void 0 : p.classNames) == null ? void 0 : l.title)
    }, typeof p.title == "function" ? p.title() : p.title), p.description ? R.createElement("div", {
        "data-description": "",
        className: Ft(W, Pw, T == null ? void 0 : T.description, (u = p == null ? void 0 : p.classNames) == null ? void 0 : u.description)
    }, typeof p.description == "function" ? p.description() : p.description) : null), b.isValidElement(p.cancel) ? p.cancel : p.cancel && Qa(p.cancel) ? R.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: p.cancelButtonStyle || O,
        onClick: Q => {
            var se, pe;
            Qa(p.cancel) && Xn && ((pe = (se = p.cancel).onClick) == null || pe.call(se, Q),
            kr())
        }
        ,
        className: Ft(T == null ? void 0 : T.cancelButton, (d = p == null ? void 0 : p.classNames) == null ? void 0 : d.cancelButton)
    }, p.cancel.label) : null, b.isValidElement(p.action) ? p.action : p.action && Qa(p.action) ? R.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: p.actionButtonStyle || F,
        onClick: Q => {
            var se, pe;
            Qa(p.action) && ((pe = (se = p.action).onClick) == null || pe.call(se, Q),
            !Q.defaultPrevented && kr())
        }
        ,
        className: Ft(T == null ? void 0 : T.actionButton, (c = p == null ? void 0 : p.classNames) == null ? void 0 : c.actionButton)
    }, p.action.label) : null))
}
;
function Mm() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
function bE(e, t) {
    let r = {};
    return [e, t].forEach( (n, o) => {
        let i = o === 1
          , a = i ? "--mobile-offset" : "--offset"
          , s = i ? mE : pE;
        function l(u) {
            ["top", "right", "bottom", "left"].forEach(d => {
                r[`${a}-${d}`] = typeof u == "number" ? `${u}px` : u
            }
            )
        }
        typeof n == "number" || typeof n == "string" ? l(n) : typeof n == "object" ? ["top", "right", "bottom", "left"].forEach(u => {
            n[u] === void 0 ? r[`${a}-${u}`] = s : r[`${a}-${u}`] = typeof n[u] == "number" ? `${n[u]}px` : n[u]
        }
        ) : l(s)
    }
    ),
    r
}
var SE = b.forwardRef(function(e, t) {
    let {invert: r, position: n="bottom-right", hotkey: o=["altKey", "KeyT"], expand: i, closeButton: a, className: s, offset: l, mobileOffset: u, theme: d="light", richColors: c, duration: f, style: p, visibleToasts: m=fE, toastOptions: v, dir: x=Mm(), gap: g=hE, loadingIcon: h, icons: y, containerAriaLabel: S="Notifications", pauseWhenPageIsHidden: E} = e
      , [C,P] = R.useState([])
      , D = R.useMemo( () => Array.from(new Set([n].concat(C.filter($ => $.position).map($ => $.position)))), [C, n])
      , [k,O] = R.useState([])
      , [F,j] = R.useState(!1)
      , [W,A] = R.useState(!1)
      , [G,_] = R.useState(d !== "system" ? d : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , q = R.useRef(null)
      , N = o.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , T = R.useRef(null)
      , B = R.useRef(!1)
      , H = R.useCallback($ => {
        P(K => {
            var X;
            return (X = K.find(oe => oe.id === $.id)) != null && X.delete || Ze.dismiss($.id),
            K.filter( ({id: oe}) => oe !== $.id)
        }
        )
    }
    , []);
    return R.useEffect( () => Ze.subscribe($ => {
        if ($.dismiss) {
            P(K => K.map(X => X.id === $.id ? {
                ...X,
                delete: !0
            } : X));
            return
        }
        setTimeout( () => {
            df.flushSync( () => {
                P(K => {
                    let X = K.findIndex(oe => oe.id === $.id);
                    return X !== -1 ? [...K.slice(0, X), {
                        ...K[X],
                        ...$
                    }, ...K.slice(X + 1)] : [$, ...K]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    R.useEffect( () => {
        if (d !== "system") {
            _(d);
            return
        }
        if (d === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? _("dark") : _("light")),
        typeof window > "u")
            return;
        let $ = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            $.addEventListener("change", ({matches: K}) => {
                _(K ? "dark" : "light")
            }
            )
        } catch {
            $.addListener( ({matches: X}) => {
                try {
                    _(X ? "dark" : "light")
                } catch (oe) {
                    console.error(oe)
                }
            }
            )
        }
    }
    , [d]),
    R.useEffect( () => {
        C.length <= 1 && j(!1)
    }
    , [C]),
    R.useEffect( () => {
        let $ = K => {
            var X, oe;
            o.every(we => K[we] || K.code === we) && (j(!0),
            (X = q.current) == null || X.focus()),
            K.code === "Escape" && (document.activeElement === q.current || (oe = q.current) != null && oe.contains(document.activeElement)) && j(!1)
        }
        ;
        return document.addEventListener("keydown", $),
        () => document.removeEventListener("keydown", $)
    }
    , [o]),
    R.useEffect( () => {
        if (q.current)
            return () => {
                T.current && (T.current.focus({
                    preventScroll: !0
                }),
                T.current = null,
                B.current = !1)
            }
    }
    , [q.current]),
    R.createElement("section", {
        ref: t,
        "aria-label": `${S} ${N}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, D.map( ($, K) => {
        var X;
        let[oe,we] = $.split("-");
        return C.length ? R.createElement("ol", {
            key: $,
            dir: x === "auto" ? Mm() : x,
            tabIndex: -1,
            ref: q,
            className: s,
            "data-sonner-toaster": !0,
            "data-theme": G,
            "data-y-position": oe,
            "data-lifted": F && C.length > 1 && !i,
            "data-x-position": we,
            style: {
                "--front-toast-height": `${((X = k[0]) == null ? void 0 : X.height) || 0}px`,
                "--width": `${vE}px`,
                "--gap": `${g}px`,
                ...p,
                ...bE(l, u)
            },
            onBlur: ee => {
                B.current && !ee.currentTarget.contains(ee.relatedTarget) && (B.current = !1,
                T.current && (T.current.focus({
                    preventScroll: !0
                }),
                T.current = null))
            }
            ,
            onFocus: ee => {
                ee.target instanceof HTMLElement && ee.target.dataset.dismissible === "false" || B.current || (B.current = !0,
                T.current = ee.relatedTarget)
            }
            ,
            onMouseEnter: () => j(!0),
            onMouseMove: () => j(!0),
            onMouseLeave: () => {
                W || j(!1)
            }
            ,
            onDragEnd: () => j(!1),
            onPointerDown: ee => {
                ee.target instanceof HTMLElement && ee.target.dataset.dismissible === "false" || A(!0)
            }
            ,
            onPointerUp: () => A(!1)
        }, C.filter(ee => !ee.position && K === 0 || ee.position === $).map( (ee, At) => {
            var yt, Xe;
            return R.createElement(wE, {
                key: ee.id,
                icons: y,
                index: At,
                toast: ee,
                defaultRichColors: c,
                duration: (yt = v == null ? void 0 : v.duration) != null ? yt : f,
                className: v == null ? void 0 : v.className,
                descriptionClassName: v == null ? void 0 : v.descriptionClassName,
                invert: r,
                visibleToasts: m,
                closeButton: (Xe = v == null ? void 0 : v.closeButton) != null ? Xe : a,
                interacting: W,
                position: $,
                style: v == null ? void 0 : v.style,
                unstyled: v == null ? void 0 : v.unstyled,
                classNames: v == null ? void 0 : v.classNames,
                cancelButtonStyle: v == null ? void 0 : v.cancelButtonStyle,
                actionButtonStyle: v == null ? void 0 : v.actionButtonStyle,
                removeToast: H,
                toasts: C.filter(xt => xt.position == ee.position),
                heights: k.filter(xt => xt.position == ee.position),
                setHeights: O,
                expandByDefault: i,
                gap: g,
                loadingIcon: h,
                expanded: F,
                pauseWhenPageIsHidden: E,
                swipeDirections: e.swipeDirections
            })
        }
        )) : null
    }
    ))
});
const CE = ({...e}) => {
    const {theme: t="system"} = QC();
    return w.jsx(SE, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
}
  , EE = ["top", "right", "bottom", "left"]
  , dn = Math.min
  , st = Math.max
  , Hs = Math.round
  , Ya = Math.floor
  , lr = e => ({
    x: e,
    y: e
})
  , PE = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , DE = {
    start: "end",
    end: "start"
};
function Zc(e, t, r) {
    return st(e, dn(t, r))
}
function Pr(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Dr(e) {
    return e.split("-")[0]
}
function Ko(e) {
    return e.split("-")[1]
}
function xf(e) {
    return e === "x" ? "y" : "x"
}
function wf(e) {
    return e === "y" ? "height" : "width"
}
const NE = new Set(["top", "bottom"]);
function ir(e) {
    return NE.has(Dr(e)) ? "y" : "x"
}
function bf(e) {
    return xf(ir(e))
}
function IE(e, t, r) {
    r === void 0 && (r = !1);
    const n = Ko(e)
      , o = bf(e)
      , i = wf(o);
    let a = o === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
    return t.reference[i] > t.floating[i] && (a = Gs(a)),
    [a, Gs(a)]
}
function kE(e) {
    const t = Gs(e);
    return [ed(e), t, ed(t)]
}
function ed(e) {
    return e.replace(/start|end/g, t => DE[t])
}
const Lm = ["left", "right"]
  , jm = ["right", "left"]
  , TE = ["top", "bottom"]
  , RE = ["bottom", "top"];
function OE(e, t, r) {
    switch (e) {
    case "top":
    case "bottom":
        return r ? t ? jm : Lm : t ? Lm : jm;
    case "left":
    case "right":
        return t ? TE : RE;
    default:
        return []
    }
}
function AE(e, t, r, n) {
    const o = Ko(e);
    let i = OE(Dr(e), r === "start", n);
    return o && (i = i.map(a => a + "-" + o),
    t && (i = i.concat(i.map(ed)))),
    i
}
function Gs(e) {
    return e.replace(/left|right|bottom|top/g, t => PE[t])
}
function ME(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function l0(e) {
    return typeof e != "number" ? ME(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function qs(e) {
    const {x: t, y: r, width: n, height: o} = e;
    return {
        width: n,
        height: o,
        top: r,
        left: t,
        right: t + n,
        bottom: r + o,
        x: t,
        y: r
    }
}
function Bm(e, t, r) {
    let {reference: n, floating: o} = e;
    const i = ir(t)
      , a = bf(t)
      , s = wf(a)
      , l = Dr(t)
      , u = i === "y"
      , d = n.x + n.width / 2 - o.width / 2
      , c = n.y + n.height / 2 - o.height / 2
      , f = n[s] / 2 - o[s] / 2;
    let p;
    switch (l) {
    case "top":
        p = {
            x: d,
            y: n.y - o.height
        };
        break;
    case "bottom":
        p = {
            x: d,
            y: n.y + n.height
        };
        break;
    case "right":
        p = {
            x: n.x + n.width,
            y: c
        };
        break;
    case "left":
        p = {
            x: n.x - o.width,
            y: c
        };
        break;
    default:
        p = {
            x: n.x,
            y: n.y
        }
    }
    switch (Ko(t)) {
    case "start":
        p[a] -= f * (r && u ? -1 : 1);
        break;
    case "end":
        p[a] += f * (r && u ? -1 : 1);
        break
    }
    return p
}
const LE = async (e, t, r) => {
    const {placement: n="bottom", strategy: o="absolute", middleware: i=[], platform: a} = r
      , s = i.filter(Boolean)
      , l = await (a.isRTL == null ? void 0 : a.isRTL(t));
    let u = await a.getElementRects({
        reference: e,
        floating: t,
        strategy: o
    })
      , {x: d, y: c} = Bm(u, n, l)
      , f = n
      , p = {}
      , m = 0;
    for (let v = 0; v < s.length; v++) {
        const {name: x, fn: g} = s[v]
          , {x: h, y, data: S, reset: E} = await g({
            x: d,
            y: c,
            initialPlacement: n,
            placement: f,
            strategy: o,
            middlewareData: p,
            rects: u,
            platform: a,
            elements: {
                reference: e,
                floating: t
            }
        });
        d = h ?? d,
        c = y ?? c,
        p = {
            ...p,
            [x]: {
                ...p[x],
                ...S
            }
        },
        E && m <= 50 && (m++,
        typeof E == "object" && (E.placement && (f = E.placement),
        E.rects && (u = E.rects === !0 ? await a.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : E.rects),
        {x: d, y: c} = Bm(u, f, l)),
        v = -1)
    }
    return {
        x: d,
        y: c,
        placement: f,
        strategy: o,
        middlewareData: p
    }
}
;
async function Ki(e, t) {
    var r;
    t === void 0 && (t = {});
    const {x: n, y: o, platform: i, rects: a, elements: s, strategy: l} = e
      , {boundary: u="clippingAncestors", rootBoundary: d="viewport", elementContext: c="floating", altBoundary: f=!1, padding: p=0} = Pr(t, e)
      , m = l0(p)
      , x = s[f ? c === "floating" ? "reference" : "floating" : c]
      , g = qs(await i.getClippingRect({
        element: (r = await (i.isElement == null ? void 0 : i.isElement(x))) == null || r ? x : x.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
        boundary: u,
        rootBoundary: d,
        strategy: l
    }))
      , h = c === "floating" ? {
        x: n,
        y: o,
        width: a.floating.width,
        height: a.floating.height
    } : a.reference
      , y = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating))
      , S = await (i.isElement == null ? void 0 : i.isElement(y)) ? await (i.getScale == null ? void 0 : i.getScale(y)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , E = qs(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: s,
        rect: h,
        offsetParent: y,
        strategy: l
    }) : h);
    return {
        top: (g.top - E.top + m.top) / S.y,
        bottom: (E.bottom - g.bottom + m.bottom) / S.y,
        left: (g.left - E.left + m.left) / S.x,
        right: (E.right - g.right + m.right) / S.x
    }
}
const jE = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: r, y: n, placement: o, rects: i, platform: a, elements: s, middlewareData: l} = t
          , {element: u, padding: d=0} = Pr(e, t) || {};
        if (u == null)
            return {};
        const c = l0(d)
          , f = {
            x: r,
            y: n
        }
          , p = bf(o)
          , m = wf(p)
          , v = await a.getDimensions(u)
          , x = p === "y"
          , g = x ? "top" : "left"
          , h = x ? "bottom" : "right"
          , y = x ? "clientHeight" : "clientWidth"
          , S = i.reference[m] + i.reference[p] - f[p] - i.floating[m]
          , E = f[p] - i.reference[p]
          , C = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
        let P = C ? C[y] : 0;
        (!P || !await (a.isElement == null ? void 0 : a.isElement(C))) && (P = s.floating[y] || i.floating[m]);
        const D = S / 2 - E / 2
          , k = P / 2 - v[m] / 2 - 1
          , O = dn(c[g], k)
          , F = dn(c[h], k)
          , j = O
          , W = P - v[m] - F
          , A = P / 2 - v[m] / 2 + D
          , G = Zc(j, A, W)
          , _ = !l.arrow && Ko(o) != null && A !== G && i.reference[m] / 2 - (A < j ? O : F) - v[m] / 2 < 0
          , q = _ ? A < j ? A - j : A - W : 0;
        return {
            [p]: f[p] + q,
            data: {
                [p]: G,
                centerOffset: A - G - q,
                ..._ && {
                    alignmentOffset: q
                }
            },
            reset: _
        }
    }
})
  , BE = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var r, n;
            const {placement: o, middlewareData: i, rects: a, initialPlacement: s, platform: l, elements: u} = t
              , {mainAxis: d=!0, crossAxis: c=!0, fallbackPlacements: f, fallbackStrategy: p="bestFit", fallbackAxisSideDirection: m="none", flipAlignment: v=!0, ...x} = Pr(e, t);
            if ((r = i.arrow) != null && r.alignmentOffset)
                return {};
            const g = Dr(o)
              , h = ir(s)
              , y = Dr(s) === s
              , S = await (l.isRTL == null ? void 0 : l.isRTL(u.floating))
              , E = f || (y || !v ? [Gs(s)] : kE(s))
              , C = m !== "none";
            !f && C && E.push(...AE(s, v, m, S));
            const P = [s, ...E]
              , D = await Ki(t, x)
              , k = [];
            let O = ((n = i.flip) == null ? void 0 : n.overflows) || [];
            if (d && k.push(D[g]),
            c) {
                const A = IE(o, a, S);
                k.push(D[A[0]], D[A[1]])
            }
            if (O = [...O, {
                placement: o,
                overflows: k
            }],
            !k.every(A => A <= 0)) {
                var F, j;
                const A = (((F = i.flip) == null ? void 0 : F.index) || 0) + 1
                  , G = P[A];
                if (G && (!(c === "alignment" ? h !== ir(G) : !1) || O.every(N => N.overflows[0] > 0 && ir(N.placement) === h)))
                    return {
                        data: {
                            index: A,
                            overflows: O
                        },
                        reset: {
                            placement: G
                        }
                    };
                let _ = (j = O.filter(q => q.overflows[0] <= 0).sort( (q, N) => q.overflows[1] - N.overflows[1])[0]) == null ? void 0 : j.placement;
                if (!_)
                    switch (p) {
                    case "bestFit":
                        {
                            var W;
                            const q = (W = O.filter(N => {
                                if (C) {
                                    const T = ir(N.placement);
                                    return T === h || T === "y"
                                }
                                return !0
                            }
                            ).map(N => [N.placement, N.overflows.filter(T => T > 0).reduce( (T, B) => T + B, 0)]).sort( (N, T) => N[1] - T[1])[0]) == null ? void 0 : W[0];
                            q && (_ = q);
                            break
                        }
                    case "initialPlacement":
                        _ = s;
                        break
                    }
                if (o !== _)
                    return {
                        reset: {
                            placement: _
                        }
                    }
            }
            return {}
        }
    }
};
function Fm(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function $m(e) {
    return EE.some(t => e[t] >= 0)
}
const FE = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: r} = t
              , {strategy: n="referenceHidden", ...o} = Pr(e, t);
            switch (n) {
            case "referenceHidden":
                {
                    const i = await Ki(t, {
                        ...o,
                        elementContext: "reference"
                    })
                      , a = Fm(i, r.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: a,
                            referenceHidden: $m(a)
                        }
                    }
                }
            case "escaped":
                {
                    const i = await Ki(t, {
                        ...o,
                        altBoundary: !0
                    })
                      , a = Fm(i, r.floating);
                    return {
                        data: {
                            escapedOffsets: a,
                            escaped: $m(a)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
}
  , u0 = new Set(["left", "top"]);
async function $E(e, t) {
    const {placement: r, platform: n, elements: o} = e
      , i = await (n.isRTL == null ? void 0 : n.isRTL(o.floating))
      , a = Dr(r)
      , s = Ko(r)
      , l = ir(r) === "y"
      , u = u0.has(a) ? -1 : 1
      , d = i && l ? -1 : 1
      , c = Pr(t, e);
    let {mainAxis: f, crossAxis: p, alignmentAxis: m} = typeof c == "number" ? {
        mainAxis: c,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: c.mainAxis || 0,
        crossAxis: c.crossAxis || 0,
        alignmentAxis: c.alignmentAxis
    };
    return s && typeof m == "number" && (p = s === "end" ? m * -1 : m),
    l ? {
        x: p * d,
        y: f * u
    } : {
        x: f * u,
        y: p * d
    }
}
const zE = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var r, n;
            const {x: o, y: i, placement: a, middlewareData: s} = t
              , l = await $E(t, e);
            return a === ((r = s.offset) == null ? void 0 : r.placement) && (n = s.arrow) != null && n.alignmentOffset ? {} : {
                x: o + l.x,
                y: i + l.y,
                data: {
                    ...l,
                    placement: a
                }
            }
        }
    }
}
  , _E = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: r, y: n, placement: o} = t
              , {mainAxis: i=!0, crossAxis: a=!1, limiter: s={
                fn: x => {
                    let {x: g, y: h} = x;
                    return {
                        x: g,
                        y: h
                    }
                }
            }, ...l} = Pr(e, t)
              , u = {
                x: r,
                y: n
            }
              , d = await Ki(t, l)
              , c = ir(Dr(o))
              , f = xf(c);
            let p = u[f]
              , m = u[c];
            if (i) {
                const x = f === "y" ? "top" : "left"
                  , g = f === "y" ? "bottom" : "right"
                  , h = p + d[x]
                  , y = p - d[g];
                p = Zc(h, p, y)
            }
            if (a) {
                const x = c === "y" ? "top" : "left"
                  , g = c === "y" ? "bottom" : "right"
                  , h = m + d[x]
                  , y = m - d[g];
                m = Zc(h, m, y)
            }
            const v = s.fn({
                ...t,
                [f]: p,
                [c]: m
            });
            return {
                ...v,
                data: {
                    x: v.x - r,
                    y: v.y - n,
                    enabled: {
                        [f]: i,
                        [c]: a
                    }
                }
            }
        }
    }
}
  , UE = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: r, y: n, placement: o, rects: i, middlewareData: a} = t
              , {offset: s=0, mainAxis: l=!0, crossAxis: u=!0} = Pr(e, t)
              , d = {
                x: r,
                y: n
            }
              , c = ir(o)
              , f = xf(c);
            let p = d[f]
              , m = d[c];
            const v = Pr(s, t)
              , x = typeof v == "number" ? {
                mainAxis: v,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...v
            };
            if (l) {
                const y = f === "y" ? "height" : "width"
                  , S = i.reference[f] - i.floating[y] + x.mainAxis
                  , E = i.reference[f] + i.reference[y] - x.mainAxis;
                p < S ? p = S : p > E && (p = E)
            }
            if (u) {
                var g, h;
                const y = f === "y" ? "width" : "height"
                  , S = u0.has(Dr(o))
                  , E = i.reference[c] - i.floating[y] + (S && ((g = a.offset) == null ? void 0 : g[c]) || 0) + (S ? 0 : x.crossAxis)
                  , C = i.reference[c] + i.reference[y] + (S ? 0 : ((h = a.offset) == null ? void 0 : h[c]) || 0) - (S ? x.crossAxis : 0);
                m < E ? m = E : m > C && (m = C)
            }
            return {
                [f]: p,
                [c]: m
            }
        }
    }
}
  , WE = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var r, n;
            const {placement: o, rects: i, platform: a, elements: s} = t
              , {apply: l= () => {}
            , ...u} = Pr(e, t)
              , d = await Ki(t, u)
              , c = Dr(o)
              , f = Ko(o)
              , p = ir(o) === "y"
              , {width: m, height: v} = i.floating;
            let x, g;
            c === "top" || c === "bottom" ? (x = c,
            g = f === (await (a.isRTL == null ? void 0 : a.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (g = c,
            x = f === "end" ? "top" : "bottom");
            const h = v - d.top - d.bottom
              , y = m - d.left - d.right
              , S = dn(v - d[x], h)
              , E = dn(m - d[g], y)
              , C = !t.middlewareData.shift;
            let P = S
              , D = E;
            if ((r = t.middlewareData.shift) != null && r.enabled.x && (D = y),
            (n = t.middlewareData.shift) != null && n.enabled.y && (P = h),
            C && !f) {
                const O = st(d.left, 0)
                  , F = st(d.right, 0)
                  , j = st(d.top, 0)
                  , W = st(d.bottom, 0);
                p ? D = m - 2 * (O !== 0 || F !== 0 ? O + F : st(d.left, d.right)) : P = v - 2 * (j !== 0 || W !== 0 ? j + W : st(d.top, d.bottom))
            }
            await l({
                ...t,
                availableWidth: D,
                availableHeight: P
            });
            const k = await a.getDimensions(s.floating);
            return m !== k.width || v !== k.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function Nl() {
    return typeof window < "u"
}
function Qo(e) {
    return c0(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function dt(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function cr(e) {
    var t;
    return (t = (c0(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function c0(e) {
    return Nl() ? e instanceof Node || e instanceof dt(e).Node : !1
}
function Yt(e) {
    return Nl() ? e instanceof Element || e instanceof dt(e).Element : !1
}
function ur(e) {
    return Nl() ? e instanceof HTMLElement || e instanceof dt(e).HTMLElement : !1
}
function zm(e) {
    return !Nl() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof dt(e).ShadowRoot
}
const VE = new Set(["inline", "contents"]);
function ma(e) {
    const {overflow: t, overflowX: r, overflowY: n, display: o} = Xt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !VE.has(o)
}
const HE = new Set(["table", "td", "th"]);
function GE(e) {
    return HE.has(Qo(e))
}
const qE = [":popover-open", ":modal"];
function Il(e) {
    return qE.some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
const KE = ["transform", "translate", "scale", "rotate", "perspective"]
  , QE = ["transform", "translate", "scale", "rotate", "perspective", "filter"]
  , YE = ["paint", "layout", "strict", "content"];
function Sf(e) {
    const t = Cf()
      , r = Yt(e) ? Xt(e) : e;
    return KE.some(n => r[n] ? r[n] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || QE.some(n => (r.willChange || "").includes(n)) || YE.some(n => (r.contain || "").includes(n))
}
function XE(e) {
    let t = fn(e);
    for (; ur(t) && !Fo(t); ) {
        if (Sf(t))
            return t;
        if (Il(t))
            return null;
        t = fn(t)
    }
    return null
}
function Cf() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const JE = new Set(["html", "body", "#document"]);
function Fo(e) {
    return JE.has(Qo(e))
}
function Xt(e) {
    return dt(e).getComputedStyle(e)
}
function kl(e) {
    return Yt(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function fn(e) {
    if (Qo(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || zm(e) && e.host || cr(e);
    return zm(t) ? t.host : t
}
function d0(e) {
    const t = fn(e);
    return Fo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ur(t) && ma(t) ? t : d0(t)
}
function Qi(e, t, r) {
    var n;
    t === void 0 && (t = []),
    r === void 0 && (r = !0);
    const o = d0(e)
      , i = o === ((n = e.ownerDocument) == null ? void 0 : n.body)
      , a = dt(o);
    if (i) {
        const s = td(a);
        return t.concat(a, a.visualViewport || [], ma(o) ? o : [], s && r ? Qi(s) : [])
    }
    return t.concat(o, Qi(o, [], r))
}
function td(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function f0(e) {
    const t = Xt(e);
    let r = parseFloat(t.width) || 0
      , n = parseFloat(t.height) || 0;
    const o = ur(e)
      , i = o ? e.offsetWidth : r
      , a = o ? e.offsetHeight : n
      , s = Hs(r) !== i || Hs(n) !== a;
    return s && (r = i,
    n = a),
    {
        width: r,
        height: n,
        $: s
    }
}
function Ef(e) {
    return Yt(e) ? e : e.contextElement
}
function So(e) {
    const t = Ef(e);
    if (!ur(t))
        return lr(1);
    const r = t.getBoundingClientRect()
      , {width: n, height: o, $: i} = f0(t);
    let a = (i ? Hs(r.width) : r.width) / n
      , s = (i ? Hs(r.height) : r.height) / o;
    return (!a || !Number.isFinite(a)) && (a = 1),
    (!s || !Number.isFinite(s)) && (s = 1),
    {
        x: a,
        y: s
    }
}
const ZE = lr(0);
function p0(e) {
    const t = dt(e);
    return !Cf() || !t.visualViewport ? ZE : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function e2(e, t, r) {
    return t === void 0 && (t = !1),
    !r || t && r !== dt(e) ? !1 : t
}
function Wn(e, t, r, n) {
    t === void 0 && (t = !1),
    r === void 0 && (r = !1);
    const o = e.getBoundingClientRect()
      , i = Ef(e);
    let a = lr(1);
    t && (n ? Yt(n) && (a = So(n)) : a = So(e));
    const s = e2(i, r, n) ? p0(i) : lr(0);
    let l = (o.left + s.x) / a.x
      , u = (o.top + s.y) / a.y
      , d = o.width / a.x
      , c = o.height / a.y;
    if (i) {
        const f = dt(i)
          , p = n && Yt(n) ? dt(n) : n;
        let m = f
          , v = td(m);
        for (; v && n && p !== m; ) {
            const x = So(v)
              , g = v.getBoundingClientRect()
              , h = Xt(v)
              , y = g.left + (v.clientLeft + parseFloat(h.paddingLeft)) * x.x
              , S = g.top + (v.clientTop + parseFloat(h.paddingTop)) * x.y;
            l *= x.x,
            u *= x.y,
            d *= x.x,
            c *= x.y,
            l += y,
            u += S,
            m = dt(v),
            v = td(m)
        }
    }
    return qs({
        width: d,
        height: c,
        x: l,
        y: u
    })
}
function Pf(e, t) {
    const r = kl(e).scrollLeft;
    return t ? t.left + r : Wn(cr(e)).left + r
}
function m0(e, t, r) {
    r === void 0 && (r = !1);
    const n = e.getBoundingClientRect()
      , o = n.left + t.scrollLeft - (r ? 0 : Pf(e, n))
      , i = n.top + t.scrollTop;
    return {
        x: o,
        y: i
    }
}
function t2(e) {
    let {elements: t, rect: r, offsetParent: n, strategy: o} = e;
    const i = o === "fixed"
      , a = cr(n)
      , s = t ? Il(t.floating) : !1;
    if (n === a || s && i)
        return r;
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , u = lr(1);
    const d = lr(0)
      , c = ur(n);
    if ((c || !c && !i) && ((Qo(n) !== "body" || ma(a)) && (l = kl(n)),
    ur(n))) {
        const p = Wn(n);
        u = So(n),
        d.x = p.x + n.clientLeft,
        d.y = p.y + n.clientTop
    }
    const f = a && !c && !i ? m0(a, l, !0) : lr(0);
    return {
        width: r.width * u.x,
        height: r.height * u.y,
        x: r.x * u.x - l.scrollLeft * u.x + d.x + f.x,
        y: r.y * u.y - l.scrollTop * u.y + d.y + f.y
    }
}
function r2(e) {
    return Array.from(e.getClientRects())
}
function n2(e) {
    const t = cr(e)
      , r = kl(e)
      , n = e.ownerDocument.body
      , o = st(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth)
      , i = st(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
    let a = -r.scrollLeft + Pf(e);
    const s = -r.scrollTop;
    return Xt(n).direction === "rtl" && (a += st(t.clientWidth, n.clientWidth) - o),
    {
        width: o,
        height: i,
        x: a,
        y: s
    }
}
function o2(e, t) {
    const r = dt(e)
      , n = cr(e)
      , o = r.visualViewport;
    let i = n.clientWidth
      , a = n.clientHeight
      , s = 0
      , l = 0;
    if (o) {
        i = o.width,
        a = o.height;
        const u = Cf();
        (!u || u && t === "fixed") && (s = o.offsetLeft,
        l = o.offsetTop)
    }
    return {
        width: i,
        height: a,
        x: s,
        y: l
    }
}
const i2 = new Set(["absolute", "fixed"]);
function a2(e, t) {
    const r = Wn(e, !0, t === "fixed")
      , n = r.top + e.clientTop
      , o = r.left + e.clientLeft
      , i = ur(e) ? So(e) : lr(1)
      , a = e.clientWidth * i.x
      , s = e.clientHeight * i.y
      , l = o * i.x
      , u = n * i.y;
    return {
        width: a,
        height: s,
        x: l,
        y: u
    }
}
function _m(e, t, r) {
    let n;
    if (t === "viewport")
        n = o2(e, r);
    else if (t === "document")
        n = n2(cr(e));
    else if (Yt(t))
        n = a2(t, r);
    else {
        const o = p0(e);
        n = {
            x: t.x - o.x,
            y: t.y - o.y,
            width: t.width,
            height: t.height
        }
    }
    return qs(n)
}
function v0(e, t) {
    const r = fn(e);
    return r === t || !Yt(r) || Fo(r) ? !1 : Xt(r).position === "fixed" || v0(r, t)
}
function s2(e, t) {
    const r = t.get(e);
    if (r)
        return r;
    let n = Qi(e, [], !1).filter(s => Yt(s) && Qo(s) !== "body")
      , o = null;
    const i = Xt(e).position === "fixed";
    let a = i ? fn(e) : e;
    for (; Yt(a) && !Fo(a); ) {
        const s = Xt(a)
          , l = Sf(a);
        !l && s.position === "fixed" && (o = null),
        (i ? !l && !o : !l && s.position === "static" && !!o && i2.has(o.position) || ma(a) && !l && v0(e, a)) ? n = n.filter(d => d !== a) : o = s,
        a = fn(a)
    }
    return t.set(e, n),
    n
}
function l2(e) {
    let {element: t, boundary: r, rootBoundary: n, strategy: o} = e;
    const a = [...r === "clippingAncestors" ? Il(t) ? [] : s2(t, this._c) : [].concat(r), n]
      , s = a[0]
      , l = a.reduce( (u, d) => {
        const c = _m(t, d, o);
        return u.top = st(c.top, u.top),
        u.right = dn(c.right, u.right),
        u.bottom = dn(c.bottom, u.bottom),
        u.left = st(c.left, u.left),
        u
    }
    , _m(t, s, o));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top
    }
}
function u2(e) {
    const {width: t, height: r} = f0(e);
    return {
        width: t,
        height: r
    }
}
function c2(e, t, r) {
    const n = ur(t)
      , o = cr(t)
      , i = r === "fixed"
      , a = Wn(e, !0, i, t);
    let s = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = lr(0);
    function u() {
        l.x = Pf(o)
    }
    if (n || !n && !i)
        if ((Qo(t) !== "body" || ma(o)) && (s = kl(t)),
        n) {
            const p = Wn(t, !0, i, t);
            l.x = p.x + t.clientLeft,
            l.y = p.y + t.clientTop
        } else
            o && u();
    i && !n && o && u();
    const d = o && !n && !i ? m0(o, s) : lr(0)
      , c = a.left + s.scrollLeft - l.x - d.x
      , f = a.top + s.scrollTop - l.y - d.y;
    return {
        x: c,
        y: f,
        width: a.width,
        height: a.height
    }
}
function ju(e) {
    return Xt(e).position === "static"
}
function Um(e, t) {
    if (!ur(e) || Xt(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let r = e.offsetParent;
    return cr(e) === r && (r = r.ownerDocument.body),
    r
}
function h0(e, t) {
    const r = dt(e);
    if (Il(e))
        return r;
    if (!ur(e)) {
        let o = fn(e);
        for (; o && !Fo(o); ) {
            if (Yt(o) && !ju(o))
                return o;
            o = fn(o)
        }
        return r
    }
    let n = Um(e, t);
    for (; n && GE(n) && ju(n); )
        n = Um(n, t);
    return n && Fo(n) && ju(n) && !Sf(n) ? r : n || XE(e) || r
}
const d2 = async function(e) {
    const t = this.getOffsetParent || h0
      , r = this.getDimensions
      , n = await r(e.floating);
    return {
        reference: c2(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: n.width,
            height: n.height
        }
    }
};
function f2(e) {
    return Xt(e).direction === "rtl"
}
const p2 = {
    convertOffsetParentRelativeRectToViewportRelativeRect: t2,
    getDocumentElement: cr,
    getClippingRect: l2,
    getOffsetParent: h0,
    getElementRects: d2,
    getClientRects: r2,
    getDimensions: u2,
    getScale: So,
    isElement: Yt,
    isRTL: f2
};
function g0(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}
function m2(e, t) {
    let r = null, n;
    const o = cr(e);
    function i() {
        var s;
        clearTimeout(n),
        (s = r) == null || s.disconnect(),
        r = null
    }
    function a(s, l) {
        s === void 0 && (s = !1),
        l === void 0 && (l = 1),
        i();
        const u = e.getBoundingClientRect()
          , {left: d, top: c, width: f, height: p} = u;
        if (s || t(),
        !f || !p)
            return;
        const m = Ya(c)
          , v = Ya(o.clientWidth - (d + f))
          , x = Ya(o.clientHeight - (c + p))
          , g = Ya(d)
          , y = {
            rootMargin: -m + "px " + -v + "px " + -x + "px " + -g + "px",
            threshold: st(0, dn(1, l)) || 1
        };
        let S = !0;
        function E(C) {
            const P = C[0].intersectionRatio;
            if (P !== l) {
                if (!S)
                    return a();
                P ? a(!1, P) : n = setTimeout( () => {
                    a(!1, 1e-7)
                }
                , 1e3)
            }
            P === 1 && !g0(u, e.getBoundingClientRect()) && a(),
            S = !1
        }
        try {
            r = new IntersectionObserver(E,{
                ...y,
                root: o.ownerDocument
            })
        } catch {
            r = new IntersectionObserver(E,y)
        }
        r.observe(e)
    }
    return a(!0),
    i
}
function v2(e, t, r, n) {
    n === void 0 && (n = {});
    const {ancestorScroll: o=!0, ancestorResize: i=!0, elementResize: a=typeof ResizeObserver == "function", layoutShift: s=typeof IntersectionObserver == "function", animationFrame: l=!1} = n
      , u = Ef(e)
      , d = o || i ? [...u ? Qi(u) : [], ...Qi(t)] : [];
    d.forEach(g => {
        o && g.addEventListener("scroll", r, {
            passive: !0
        }),
        i && g.addEventListener("resize", r)
    }
    );
    const c = u && s ? m2(u, r) : null;
    let f = -1
      , p = null;
    a && (p = new ResizeObserver(g => {
        let[h] = g;
        h && h.target === u && p && (p.unobserve(t),
        cancelAnimationFrame(f),
        f = requestAnimationFrame( () => {
            var y;
            (y = p) == null || y.observe(t)
        }
        )),
        r()
    }
    ),
    u && !l && p.observe(u),
    p.observe(t));
    let m, v = l ? Wn(e) : null;
    l && x();
    function x() {
        const g = Wn(e);
        v && !g0(v, g) && r(),
        v = g,
        m = requestAnimationFrame(x)
    }
    return r(),
    () => {
        var g;
        d.forEach(h => {
            o && h.removeEventListener("scroll", r),
            i && h.removeEventListener("resize", r)
        }
        ),
        c == null || c(),
        (g = p) == null || g.disconnect(),
        p = null,
        l && cancelAnimationFrame(m)
    }
}
const h2 = zE
  , g2 = _E
  , y2 = BE
  , x2 = WE
  , w2 = FE
  , Wm = jE
  , b2 = UE
  , S2 = (e, t, r) => {
    const n = new Map
      , o = {
        platform: p2,
        ...r
    }
      , i = {
        ...o.platform,
        _c: n
    };
    return LE(e, t, {
        ...o,
        platform: i
    })
}
;
var C2 = typeof document < "u"
  , E2 = function() {}
  , hs = C2 ? b.useLayoutEffect : E2;
function Ks(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let r, n, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (r = e.length,
            r !== t.length)
                return !1;
            for (n = r; n-- !== 0; )
                if (!Ks(e[n], t[n]))
                    return !1;
            return !0
        }
        if (o = Object.keys(e),
        r = o.length,
        r !== Object.keys(t).length)
            return !1;
        for (n = r; n-- !== 0; )
            if (!{}.hasOwnProperty.call(t, o[n]))
                return !1;
        for (n = r; n-- !== 0; ) {
            const i = o[n];
            if (!(i === "_owner" && e.$$typeof) && !Ks(e[i], t[i]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function y0(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function Vm(e, t) {
    const r = y0(e);
    return Math.round(t * r) / r
}
function Bu(e) {
    const t = b.useRef(e);
    return hs( () => {
        t.current = e
    }
    ),
    t
}
function P2(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: r="absolute", middleware: n=[], platform: o, elements: {reference: i, floating: a}={}, transform: s=!0, whileElementsMounted: l, open: u} = e
      , [d,c] = b.useState({
        x: 0,
        y: 0,
        strategy: r,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [f,p] = b.useState(n);
    Ks(f, n) || p(n);
    const [m,v] = b.useState(null)
      , [x,g] = b.useState(null)
      , h = b.useCallback(N => {
        N !== C.current && (C.current = N,
        v(N))
    }
    , [])
      , y = b.useCallback(N => {
        N !== P.current && (P.current = N,
        g(N))
    }
    , [])
      , S = i || m
      , E = a || x
      , C = b.useRef(null)
      , P = b.useRef(null)
      , D = b.useRef(d)
      , k = l != null
      , O = Bu(l)
      , F = Bu(o)
      , j = Bu(u)
      , W = b.useCallback( () => {
        if (!C.current || !P.current)
            return;
        const N = {
            placement: t,
            strategy: r,
            middleware: f
        };
        F.current && (N.platform = F.current),
        S2(C.current, P.current, N).then(T => {
            const B = {
                ...T,
                isPositioned: j.current !== !1
            };
            A.current && !Ks(D.current, B) && (D.current = B,
            Go.flushSync( () => {
                c(B)
            }
            ))
        }
        )
    }
    , [f, t, r, F, j]);
    hs( () => {
        u === !1 && D.current.isPositioned && (D.current.isPositioned = !1,
        c(N => ({
            ...N,
            isPositioned: !1
        })))
    }
    , [u]);
    const A = b.useRef(!1);
    hs( () => (A.current = !0,
    () => {
        A.current = !1
    }
    ), []),
    hs( () => {
        if (S && (C.current = S),
        E && (P.current = E),
        S && E) {
            if (O.current)
                return O.current(S, E, W);
            W()
        }
    }
    , [S, E, W, O, k]);
    const G = b.useMemo( () => ({
        reference: C,
        floating: P,
        setReference: h,
        setFloating: y
    }), [h, y])
      , _ = b.useMemo( () => ({
        reference: S,
        floating: E
    }), [S, E])
      , q = b.useMemo( () => {
        const N = {
            position: r,
            left: 0,
            top: 0
        };
        if (!_.floating)
            return N;
        const T = Vm(_.floating, d.x)
          , B = Vm(_.floating, d.y);
        return s ? {
            ...N,
            transform: "translate(" + T + "px, " + B + "px)",
            ...y0(_.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: r,
            left: T,
            top: B
        }
    }
    , [r, s, _.floating, d.x, d.y]);
    return b.useMemo( () => ({
        ...d,
        update: W,
        refs: G,
        elements: _,
        floatingStyles: q
    }), [d, W, G, _, q])
}
const D2 = e => {
    function t(r) {
        return {}.hasOwnProperty.call(r, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(r) {
            const {element: n, padding: o} = typeof e == "function" ? e(r) : e;
            return n && t(n) ? n.current != null ? Wm({
                element: n.current,
                padding: o
            }).fn(r) : {} : n ? Wm({
                element: n,
                padding: o
            }).fn(r) : {}
        }
    }
}
  , N2 = (e, t) => ({
    ...h2(e),
    options: [e, t]
})
  , I2 = (e, t) => ({
    ...g2(e),
    options: [e, t]
})
  , k2 = (e, t) => ({
    ...b2(e),
    options: [e, t]
})
  , T2 = (e, t) => ({
    ...y2(e),
    options: [e, t]
})
  , R2 = (e, t) => ({
    ...x2(e),
    options: [e, t]
})
  , O2 = (e, t) => ({
    ...w2(e),
    options: [e, t]
})
  , A2 = (e, t) => ({
    ...D2(e),
    options: [e, t]
});
var M2 = "Arrow"
  , x0 = b.forwardRef( (e, t) => {
    const {children: r, width: n=10, height: o=5, ...i} = e;
    return w.jsx(it.svg, {
        ...i,
        ref: t,
        width: n,
        height: o,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? r : w.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
x0.displayName = M2;
var L2 = x0;
function j2(e) {
    const [t,r] = b.useState(void 0);
    return cn( () => {
        if (e) {
            r({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const n = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length)
                    return;
                const i = o[0];
                let a, s;
                if ("borderBoxSize"in i) {
                    const l = i.borderBoxSize
                      , u = Array.isArray(l) ? l[0] : l;
                    a = u.inlineSize,
                    s = u.blockSize
                } else
                    a = e.offsetWidth,
                    s = e.offsetHeight;
                r({
                    width: a,
                    height: s
                })
            }
            );
            return n.observe(e, {
                box: "border-box"
            }),
            () => n.unobserve(e)
        } else
            r(void 0)
    }
    , [e]),
    t
}
var w0 = "Popper"
  , [b0,S0] = El(w0)
  , [IO,C0] = b0(w0)
  , E0 = "PopperAnchor"
  , P0 = b.forwardRef( (e, t) => {
    const {__scopePopper: r, virtualRef: n, ...o} = e
      , i = C0(E0, r)
      , a = b.useRef(null)
      , s = Qt(t, a);
    return b.useEffect( () => {
        i.onAnchorChange((n == null ? void 0 : n.current) || a.current)
    }
    ),
    n ? null : w.jsx(it.div, {
        ...o,
        ref: s
    })
}
);
P0.displayName = E0;
var Df = "PopperContent"
  , [B2,F2] = b0(Df)
  , D0 = b.forwardRef( (e, t) => {
    var ee, At, yt, Xe, xt, dr;
    const {__scopePopper: r, side: n="bottom", sideOffset: o=0, align: i="center", alignOffset: a=0, arrowPadding: s=0, avoidCollisions: l=!0, collisionBoundary: u=[], collisionPadding: d=0, sticky: c="partial", hideWhenDetached: f=!1, updatePositionStrategy: p="optimized", onPlaced: m, ...v} = e
      , x = C0(Df, r)
      , [g,h] = b.useState(null)
      , y = Qt(t, wt => h(wt))
      , [S,E] = b.useState(null)
      , C = j2(S)
      , P = (C == null ? void 0 : C.width) ?? 0
      , D = (C == null ? void 0 : C.height) ?? 0
      , k = n + (i !== "center" ? "-" + i : "")
      , O = typeof d == "number" ? d : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...d
    }
      , F = Array.isArray(u) ? u : [u]
      , j = F.length > 0
      , W = {
        padding: O,
        boundary: F.filter(z2),
        altBoundary: j
    }
      , {refs: A, floatingStyles: G, placement: _, isPositioned: q, middlewareData: N} = P2({
        strategy: "fixed",
        placement: k,
        whileElementsMounted: (...wt) => v2(...wt, {
            animationFrame: p === "always"
        }),
        elements: {
            reference: x.anchor
        },
        middleware: [N2({
            mainAxis: o + D,
            alignmentAxis: a
        }), l && I2({
            mainAxis: !0,
            crossAxis: !1,
            limiter: c === "partial" ? k2() : void 0,
            ...W
        }), l && T2({
            ...W
        }), R2({
            ...W,
            apply: ({elements: wt, rects: fr, availableWidth: Qn, availableHeight: Ir}) => {
                const {width: xn, height: wn} = fr.reference
                  , bt = wt.floating.style;
                bt.setProperty("--radix-popper-available-width", `${Qn}px`),
                bt.setProperty("--radix-popper-available-height", `${Ir}px`),
                bt.setProperty("--radix-popper-anchor-width", `${xn}px`),
                bt.setProperty("--radix-popper-anchor-height", `${wn}px`)
            }
        }), S && A2({
            element: S,
            padding: s
        }), _2({
            arrowWidth: P,
            arrowHeight: D
        }), f && O2({
            strategy: "referenceHidden",
            ...W
        })]
    })
      , [T,B] = k0(_)
      , H = un(m);
    cn( () => {
        q && (H == null || H())
    }
    , [q, H]);
    const $ = (ee = N.arrow) == null ? void 0 : ee.x
      , K = (At = N.arrow) == null ? void 0 : At.y
      , X = ((yt = N.arrow) == null ? void 0 : yt.centerOffset) !== 0
      , [oe,we] = b.useState();
    return cn( () => {
        g && we(window.getComputedStyle(g).zIndex)
    }
    , [g]),
    w.jsx("div", {
        ref: A.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...G,
            transform: q ? G.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: oe,
            "--radix-popper-transform-origin": [(Xe = N.transformOrigin) == null ? void 0 : Xe.x, (xt = N.transformOrigin) == null ? void 0 : xt.y].join(" "),
            ...((dr = N.hide) == null ? void 0 : dr.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: w.jsx(B2, {
            scope: r,
            placedSide: T,
            onArrowChange: E,
            arrowX: $,
            arrowY: K,
            shouldHideArrow: X,
            children: w.jsx(it.div, {
                "data-side": T,
                "data-align": B,
                ...v,
                ref: y,
                style: {
                    ...v.style,
                    animation: q ? void 0 : "none"
                }
            })
        })
    })
}
);
D0.displayName = Df;
var N0 = "PopperArrow"
  , $2 = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , I0 = b.forwardRef(function(t, r) {
    const {__scopePopper: n, ...o} = t
      , i = F2(N0, n)
      , a = $2[i.placedSide];
    return w.jsx("span", {
        ref: i.onArrowChange,
        style: {
            position: "absolute",
            left: i.arrowX,
            top: i.arrowY,
            [a]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[i.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[i.placedSide],
            visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: w.jsx(L2, {
            ...o,
            ref: r,
            style: {
                ...o.style,
                display: "block"
            }
        })
    })
});
I0.displayName = N0;
function z2(e) {
    return e !== null
}
var _2 = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var x, g, h;
        const {placement: r, rects: n, middlewareData: o} = t
          , a = ((x = o.arrow) == null ? void 0 : x.centerOffset) !== 0
          , s = a ? 0 : e.arrowWidth
          , l = a ? 0 : e.arrowHeight
          , [u,d] = k0(r)
          , c = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[d]
          , f = (((g = o.arrow) == null ? void 0 : g.x) ?? 0) + s / 2
          , p = (((h = o.arrow) == null ? void 0 : h.y) ?? 0) + l / 2;
        let m = ""
          , v = "";
        return u === "bottom" ? (m = a ? c : `${f}px`,
        v = `${-l}px`) : u === "top" ? (m = a ? c : `${f}px`,
        v = `${n.floating.height + l}px`) : u === "right" ? (m = `${-l}px`,
        v = a ? c : `${p}px`) : u === "left" && (m = `${n.floating.width + l}px`,
        v = a ? c : `${p}px`),
        {
            data: {
                x: m,
                y: v
            }
        }
    }
});
function k0(e) {
    const [t,r="center"] = e.split("-");
    return [t, r]
}
var U2 = P0
  , W2 = D0
  , V2 = I0
  , [Tl,kO] = El("Tooltip", [S0])
  , Nf = S0()
  , T0 = "TooltipProvider"
  , H2 = 700
  , Hm = "tooltip.open"
  , [G2,R0] = Tl(T0)
  , O0 = e => {
    const {__scopeTooltip: t, delayDuration: r=H2, skipDelayDuration: n=300, disableHoverableContent: o=!1, children: i} = e
      , a = b.useRef(!0)
      , s = b.useRef(!1)
      , l = b.useRef(0);
    return b.useEffect( () => {
        const u = l.current;
        return () => window.clearTimeout(u)
    }
    , []),
    w.jsx(G2, {
        scope: t,
        isOpenDelayedRef: a,
        delayDuration: r,
        onOpen: b.useCallback( () => {
            window.clearTimeout(l.current),
            a.current = !1
        }
        , []),
        onClose: b.useCallback( () => {
            window.clearTimeout(l.current),
            l.current = window.setTimeout( () => a.current = !0, n)
        }
        , [n]),
        isPointerInTransitRef: s,
        onPointerInTransitChange: b.useCallback(u => {
            s.current = u
        }
        , []),
        disableHoverableContent: o,
        children: i
    })
}
;
O0.displayName = T0;
var A0 = "Tooltip"
  , [TO,Rl] = Tl(A0)
  , rd = "TooltipTrigger"
  , q2 = b.forwardRef( (e, t) => {
    const {__scopeTooltip: r, ...n} = e
      , o = Rl(rd, r)
      , i = R0(rd, r)
      , a = Nf(r)
      , s = b.useRef(null)
      , l = Qt(t, s, o.onTriggerChange)
      , u = b.useRef(!1)
      , d = b.useRef(!1)
      , c = b.useCallback( () => u.current = !1, []);
    return b.useEffect( () => () => document.removeEventListener("pointerup", c), [c]),
    w.jsx(U2, {
        asChild: !0,
        ...a,
        children: w.jsx(it.button, {
            "aria-describedby": o.open ? o.contentId : void 0,
            "data-state": o.stateAttribute,
            ...n,
            ref: l,
            onPointerMove: Pe(e.onPointerMove, f => {
                f.pointerType !== "touch" && !d.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(),
                d.current = !0)
            }
            ),
            onPointerLeave: Pe(e.onPointerLeave, () => {
                o.onTriggerLeave(),
                d.current = !1
            }
            ),
            onPointerDown: Pe(e.onPointerDown, () => {
                o.open && o.onClose(),
                u.current = !0,
                document.addEventListener("pointerup", c, {
                    once: !0
                })
            }
            ),
            onFocus: Pe(e.onFocus, () => {
                u.current || o.onOpen()
            }
            ),
            onBlur: Pe(e.onBlur, o.onClose),
            onClick: Pe(e.onClick, o.onClose)
        })
    })
}
);
q2.displayName = rd;
var K2 = "TooltipPortal"
  , [RO,Q2] = Tl(K2, {
    forceMount: void 0
})
  , $o = "TooltipContent"
  , M0 = b.forwardRef( (e, t) => {
    const r = Q2($o, e.__scopeTooltip)
      , {forceMount: n=r.forceMount, side: o="top", ...i} = e
      , a = Rl($o, e.__scopeTooltip);
    return w.jsx(pf, {
        present: n || a.open,
        children: a.disableHoverableContent ? w.jsx(L0, {
            side: o,
            ...i,
            ref: t
        }) : w.jsx(Y2, {
            side: o,
            ...i,
            ref: t
        })
    })
}
)
  , Y2 = b.forwardRef( (e, t) => {
    const r = Rl($o, e.__scopeTooltip)
      , n = R0($o, e.__scopeTooltip)
      , o = b.useRef(null)
      , i = Qt(t, o)
      , [a,s] = b.useState(null)
      , {trigger: l, onClose: u} = r
      , d = o.current
      , {onPointerInTransitChange: c} = n
      , f = b.useCallback( () => {
        s(null),
        c(!1)
    }
    , [c])
      , p = b.useCallback( (m, v) => {
        const x = m.currentTarget
          , g = {
            x: m.clientX,
            y: m.clientY
        }
          , h = tP(g, x.getBoundingClientRect())
          , y = rP(g, h)
          , S = nP(v.getBoundingClientRect())
          , E = iP([...y, ...S]);
        s(E),
        c(!0)
    }
    , [c]);
    return b.useEffect( () => () => f(), [f]),
    b.useEffect( () => {
        if (l && d) {
            const m = x => p(x, d)
              , v = x => p(x, l);
            return l.addEventListener("pointerleave", m),
            d.addEventListener("pointerleave", v),
            () => {
                l.removeEventListener("pointerleave", m),
                d.removeEventListener("pointerleave", v)
            }
        }
    }
    , [l, d, p, f]),
    b.useEffect( () => {
        if (a) {
            const m = v => {
                const x = v.target
                  , g = {
                    x: v.clientX,
                    y: v.clientY
                }
                  , h = (l == null ? void 0 : l.contains(x)) || (d == null ? void 0 : d.contains(x))
                  , y = !oP(g, a);
                h ? f() : y && (f(),
                u())
            }
            ;
            return document.addEventListener("pointermove", m),
            () => document.removeEventListener("pointermove", m)
        }
    }
    , [l, d, a, u, f]),
    w.jsx(L0, {
        ...e,
        ref: i
    })
}
)
  , [X2,J2] = Tl(A0, {
    isInside: !1
})
  , Z2 = dS("TooltipContent")
  , L0 = b.forwardRef( (e, t) => {
    const {__scopeTooltip: r, children: n, "aria-label": o, onEscapeKeyDown: i, onPointerDownOutside: a, ...s} = e
      , l = Rl($o, r)
      , u = Nf(r)
      , {onClose: d} = l;
    return b.useEffect( () => (document.addEventListener(Hm, d),
    () => document.removeEventListener(Hm, d)), [d]),
    b.useEffect( () => {
        if (l.trigger) {
            const c = f => {
                const p = f.target;
                p != null && p.contains(l.trigger) && d()
            }
            ;
            return window.addEventListener("scroll", c, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", c, {
                capture: !0
            })
        }
    }
    , [l.trigger, d]),
    w.jsx(ff, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: a,
        onFocusOutside: c => c.preventDefault(),
        onDismiss: d,
        children: w.jsxs(W2, {
            "data-state": l.stateAttribute,
            ...u,
            ...s,
            ref: t,
            style: {
                ...s.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [w.jsx(Z2, {
                children: n
            }), w.jsx(X2, {
                scope: r,
                isInside: !0,
                children: w.jsx(jS, {
                    id: l.contentId,
                    role: "tooltip",
                    children: o || n
                })
            })]
        })
    })
}
);
M0.displayName = $o;
var j0 = "TooltipArrow"
  , eP = b.forwardRef( (e, t) => {
    const {__scopeTooltip: r, ...n} = e
      , o = Nf(r);
    return J2(j0, r).isInside ? null : w.jsx(V2, {
        ...o,
        ...n,
        ref: t
    })
}
);
eP.displayName = j0;
function tP(e, t) {
    const r = Math.abs(t.top - e.y)
      , n = Math.abs(t.bottom - e.y)
      , o = Math.abs(t.right - e.x)
      , i = Math.abs(t.left - e.x);
    switch (Math.min(r, n, o, i)) {
    case i:
        return "left";
    case o:
        return "right";
    case r:
        return "top";
    case n:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function rP(e, t, r=5) {
    const n = [];
    switch (t) {
    case "top":
        n.push({
            x: e.x - r,
            y: e.y + r
        }, {
            x: e.x + r,
            y: e.y + r
        });
        break;
    case "bottom":
        n.push({
            x: e.x - r,
            y: e.y - r
        }, {
            x: e.x + r,
            y: e.y - r
        });
        break;
    case "left":
        n.push({
            x: e.x + r,
            y: e.y - r
        }, {
            x: e.x + r,
            y: e.y + r
        });
        break;
    case "right":
        n.push({
            x: e.x - r,
            y: e.y - r
        }, {
            x: e.x - r,
            y: e.y + r
        });
        break
    }
    return n
}
function nP(e) {
    const {top: t, right: r, bottom: n, left: o} = e;
    return [{
        x: o,
        y: t
    }, {
        x: r,
        y: t
    }, {
        x: r,
        y: n
    }, {
        x: o,
        y: n
    }]
}
function oP(e, t) {
    const {x: r, y: n} = e;
    let o = !1;
    for (let i = 0, a = t.length - 1; i < t.length; a = i++) {
        const s = t[i]
          , l = t[a]
          , u = s.x
          , d = s.y
          , c = l.x
          , f = l.y;
        d > n != f > n && r < (c - u) * (n - d) / (f - d) + u && (o = !o)
    }
    return o
}
function iP(e) {
    const t = e.slice();
    return t.sort( (r, n) => r.x < n.x ? -1 : r.x > n.x ? 1 : r.y < n.y ? -1 : r.y > n.y ? 1 : 0),
    aP(t)
}
function aP(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let n = 0; n < e.length; n++) {
        const o = e[n];
        for (; t.length >= 2; ) {
            const i = t[t.length - 1]
              , a = t[t.length - 2];
            if ((i.x - a.x) * (o.y - a.y) >= (i.y - a.y) * (o.x - a.x))
                t.pop();
            else
                break
        }
        t.push(o)
    }
    t.pop();
    const r = [];
    for (let n = e.length - 1; n >= 0; n--) {
        const o = e[n];
        for (; r.length >= 2; ) {
            const i = r[r.length - 1]
              , a = r[r.length - 2];
            if ((i.x - a.x) * (o.y - a.y) >= (i.y - a.y) * (o.x - a.x))
                r.pop();
            else
                break
        }
        r.push(o)
    }
    return r.pop(),
    t.length === 1 && r.length === 1 && t[0].x === r[0].x && t[0].y === r[0].y ? t : t.concat(r)
}
var sP = O0
  , B0 = M0;
const lP = sP
  , uP = b.forwardRef( ({className: e, sideOffset: t=4, ...r}, n) => w.jsx(B0, {
    ref: n,
    sideOffset: t,
    className: qn("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...r
}));
uP.displayName = B0.displayName;
var Ol = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , Al = typeof window > "u" || "Deno"in globalThis;
function zt() {}
function cP(e, t) {
    return typeof e == "function" ? e(t) : e
}
function dP(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function fP(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function nd(e, t) {
    return typeof e == "function" ? e(t) : e
}
function pP(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Gm(e, t) {
    const {type: r="all", exact: n, fetchStatus: o, predicate: i, queryKey: a, stale: s} = e;
    if (a) {
        if (n) {
            if (t.queryHash !== If(a, t.options))
                return !1
        } else if (!Xi(t.queryKey, a))
            return !1
    }
    if (r !== "all") {
        const l = t.isActive();
        if (r === "active" && !l || r === "inactive" && l)
            return !1
    }
    return !(typeof s == "boolean" && t.isStale() !== s || o && o !== t.state.fetchStatus || i && !i(t))
}
function qm(e, t) {
    const {exact: r, status: n, predicate: o, mutationKey: i} = e;
    if (i) {
        if (!t.options.mutationKey)
            return !1;
        if (r) {
            if (Yi(t.options.mutationKey) !== Yi(i))
                return !1
        } else if (!Xi(t.options.mutationKey, i))
            return !1
    }
    return !(n && t.state.status !== n || o && !o(t))
}
function If(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || Yi)(e)
}
function Yi(e) {
    return JSON.stringify(e, (t, r) => od(r) ? Object.keys(r).sort().reduce( (n, o) => (n[o] = r[o],
    n), {}) : r)
}
function Xi(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every(r => Xi(e[r], t[r])) : !1
}
function F0(e, t) {
    if (e === t)
        return e;
    const r = Km(e) && Km(t);
    if (r || od(e) && od(t)) {
        const n = r ? e : Object.keys(e)
          , o = n.length
          , i = r ? t : Object.keys(t)
          , a = i.length
          , s = r ? [] : {}
          , l = new Set(n);
        let u = 0;
        for (let d = 0; d < a; d++) {
            const c = r ? d : i[d];
            (!r && l.has(c) || r) && e[c] === void 0 && t[c] === void 0 ? (s[c] = void 0,
            u++) : (s[c] = F0(e[c], t[c]),
            s[c] === e[c] && e[c] !== void 0 && u++)
        }
        return o === a && u === o ? e : s
    }
    return t
}
function Km(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function od(e) {
    if (!Qm(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const r = t.prototype;
    return !(!Qm(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function Qm(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function mP(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function vP(e, t, r) {
    return typeof r.structuralSharing == "function" ? r.structuralSharing(e, t) : r.structuralSharing !== !1 ? F0(e, t) : t
}
function hP(e, t, r=0) {
    const n = [...e, t];
    return r && n.length > r ? n.slice(1) : n
}
function gP(e, t, r=0) {
    const n = [t, ...e];
    return r && n.length > r ? n.slice(0, -1) : n
}
var kf = Symbol();
function $0(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === kf ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var Tn, zr, Co, Jv, yP = (Jv = class extends Ol {
    constructor() {
        super();
        ne(this, Tn);
        ne(this, zr);
        ne(this, Co);
        Y(this, Co, t => {
            if (!Al && window.addEventListener) {
                const r = () => t();
                return window.addEventListener("visibilitychange", r, !1),
                () => {
                    window.removeEventListener("visibilitychange", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        I(this, zr) || this.setEventListener(I(this, Co))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = I(this, zr)) == null || t.call(this),
        Y(this, zr, void 0))
    }
    setEventListener(t) {
        var r;
        Y(this, Co, t),
        (r = I(this, zr)) == null || r.call(this),
        Y(this, zr, t(n => {
            typeof n == "boolean" ? this.setFocused(n) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        I(this, Tn) !== t && (Y(this, Tn, t),
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(r => {
            r(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof I(this, Tn) == "boolean" ? I(this, Tn) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
Tn = new WeakMap,
zr = new WeakMap,
Co = new WeakMap,
Jv), z0 = new yP, Eo, _r, Po, Zv, xP = (Zv = class extends Ol {
    constructor() {
        super();
        ne(this, Eo, !0);
        ne(this, _r);
        ne(this, Po);
        Y(this, Po, t => {
            if (!Al && window.addEventListener) {
                const r = () => t(!0)
                  , n = () => t(!1);
                return window.addEventListener("online", r, !1),
                window.addEventListener("offline", n, !1),
                () => {
                    window.removeEventListener("online", r),
                    window.removeEventListener("offline", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        I(this, _r) || this.setEventListener(I(this, Po))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = I(this, _r)) == null || t.call(this),
        Y(this, _r, void 0))
    }
    setEventListener(t) {
        var r;
        Y(this, Po, t),
        (r = I(this, _r)) == null || r.call(this),
        Y(this, _r, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        I(this, Eo) !== t && (Y(this, Eo, t),
        this.listeners.forEach(n => {
            n(t)
        }
        ))
    }
    isOnline() {
        return I(this, Eo)
    }
}
,
Eo = new WeakMap,
_r = new WeakMap,
Po = new WeakMap,
Zv), Qs = new xP;
function wP() {
    let e, t;
    const r = new Promise( (o, i) => {
        e = o,
        t = i
    }
    );
    r.status = "pending",
    r.catch( () => {}
    );
    function n(o) {
        Object.assign(r, o),
        delete r.resolve,
        delete r.reject
    }
    return r.resolve = o => {
        n({
            status: "fulfilled",
            value: o
        }),
        e(o)
    }
    ,
    r.reject = o => {
        n({
            status: "rejected",
            reason: o
        }),
        t(o)
    }
    ,
    r
}
function bP(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function _0(e) {
    return (e ?? "online") === "online" ? Qs.isOnline() : !0
}
var U0 = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function Fu(e) {
    return e instanceof U0
}
function W0(e) {
    let t = !1, r = 0, n = !1, o;
    const i = wP()
      , a = v => {
        var x;
        n || (f(new U0(v)),
        (x = e.abort) == null || x.call(e))
    }
      , s = () => {
        t = !0
    }
      , l = () => {
        t = !1
    }
      , u = () => z0.isFocused() && (e.networkMode === "always" || Qs.isOnline()) && e.canRun()
      , d = () => _0(e.networkMode) && e.canRun()
      , c = v => {
        var x;
        n || (n = !0,
        (x = e.onSuccess) == null || x.call(e, v),
        o == null || o(),
        i.resolve(v))
    }
      , f = v => {
        var x;
        n || (n = !0,
        (x = e.onError) == null || x.call(e, v),
        o == null || o(),
        i.reject(v))
    }
      , p = () => new Promise(v => {
        var x;
        o = g => {
            (n || u()) && v(g)
        }
        ,
        (x = e.onPause) == null || x.call(e)
    }
    ).then( () => {
        var v;
        o = void 0,
        n || (v = e.onContinue) == null || v.call(e)
    }
    )
      , m = () => {
        if (n)
            return;
        let v;
        const x = r === 0 ? e.initialPromise : void 0;
        try {
            v = x ?? e.fn()
        } catch (g) {
            v = Promise.reject(g)
        }
        Promise.resolve(v).then(c).catch(g => {
            var C;
            if (n)
                return;
            const h = e.retry ?? (Al ? 0 : 3)
              , y = e.retryDelay ?? bP
              , S = typeof y == "function" ? y(r, g) : y
              , E = h === !0 || typeof h == "number" && r < h || typeof h == "function" && h(r, g);
            if (t || !E) {
                f(g);
                return
            }
            r++,
            (C = e.onFail) == null || C.call(e, r, g),
            mP(S).then( () => u() ? void 0 : p()).then( () => {
                t ? f(g) : m()
            }
            )
        }
        )
    }
    ;
    return {
        promise: i,
        cancel: a,
        continue: () => (o == null || o(),
        i),
        cancelRetry: s,
        continueRetry: l,
        canStart: d,
        start: () => (d() ? m() : p().then(m),
        i)
    }
}
var SP = e => setTimeout(e, 0);
function CP() {
    let e = []
      , t = 0
      , r = s => {
        s()
    }
      , n = s => {
        s()
    }
      , o = SP;
    const i = s => {
        t ? e.push(s) : o( () => {
            r(s)
        }
        )
    }
      , a = () => {
        const s = e;
        e = [],
        s.length && o( () => {
            n( () => {
                s.forEach(l => {
                    r(l)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: s => {
            let l;
            t++;
            try {
                l = s()
            } finally {
                t--,
                t || a()
            }
            return l
        }
        ,
        batchCalls: s => (...l) => {
            i( () => {
                s(...l)
            }
            )
        }
        ,
        schedule: i,
        setNotifyFunction: s => {
            r = s
        }
        ,
        setBatchNotifyFunction: s => {
            n = s
        }
        ,
        setScheduler: s => {
            o = s
        }
    }
}
var qe = CP(), Rn, eh, V0 = (eh = class {
    constructor() {
        ne(this, Rn)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        dP(this.gcTime) && Y(this, Rn, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (Al ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        I(this, Rn) && (clearTimeout(I(this, Rn)),
        Y(this, Rn, void 0))
    }
}
,
Rn = new WeakMap,
eh), Do, On, Et, An, _e, aa, Mn, _t, mr, th, EP = (th = class extends V0 {
    constructor(t) {
        super();
        ne(this, _t);
        ne(this, Do);
        ne(this, On);
        ne(this, Et);
        ne(this, An);
        ne(this, _e);
        ne(this, aa);
        ne(this, Mn);
        Y(this, Mn, !1),
        Y(this, aa, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        Y(this, An, t.client),
        Y(this, Et, I(this, An).getQueryCache()),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        Y(this, Do, DP(this.options)),
        this.state = t.state ?? I(this, Do),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = I(this, _e)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        this.options = {
            ...I(this, aa),
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && I(this, Et).remove(this)
    }
    setData(t, r) {
        const n = vP(this.state.data, t, this.options);
        return Fe(this, _t, mr).call(this, {
            data: n,
            type: "success",
            dataUpdatedAt: r == null ? void 0 : r.updatedAt,
            manual: r == null ? void 0 : r.manual
        }),
        n
    }
    setState(t, r) {
        Fe(this, _t, mr).call(this, {
            type: "setState",
            state: t,
            setStateOptions: r
        })
    }
    cancel(t) {
        var n, o;
        const r = (n = I(this, _e)) == null ? void 0 : n.promise;
        return (o = I(this, _e)) == null || o.cancel(t),
        r ? r.then(zt).catch(zt) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(I(this, Do))
    }
    isActive() {
        return this.observers.some(t => pP(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === kf || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(t => nd(t.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(t=0) {
        return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !fP(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var r;
        const t = this.observers.find(n => n.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (r = I(this, _e)) == null || r.continue()
    }
    onOnline() {
        var r;
        const t = this.observers.find(n => n.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (r = I(this, _e)) == null || r.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        I(this, Et).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(r => r !== t),
        this.observers.length || (I(this, _e) && (I(this, Mn) ? I(this, _e).cancel({
            revert: !0
        }) : I(this, _e).cancelRetry()),
        this.scheduleGc()),
        I(this, Et).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || Fe(this, _t, mr).call(this, {
            type: "invalidate"
        })
    }
    fetch(t, r) {
        var u, d, c;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (r != null && r.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (I(this, _e))
                return I(this, _e).continueRetry(),
                I(this, _e).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const f = this.observers.find(p => p.options.queryFn);
            f && this.setOptions(f.options)
        }
        const n = new AbortController
          , o = f => {
            Object.defineProperty(f, "signal", {
                enumerable: !0,
                get: () => (Y(this, Mn, !0),
                n.signal)
            })
        }
          , i = () => {
            const f = $0(this.options, r)
              , m = ( () => {
                const v = {
                    client: I(this, An),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return o(v),
                v
            }
            )();
            return Y(this, Mn, !1),
            this.options.persister ? this.options.persister(f, m, this) : f(m)
        }
          , s = ( () => {
            const f = {
                fetchOptions: r,
                options: this.options,
                queryKey: this.queryKey,
                client: I(this, An),
                state: this.state,
                fetchFn: i
            };
            return o(f),
            f
        }
        )();
        (u = this.options.behavior) == null || u.onFetch(s, this),
        Y(this, On, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((d = s.fetchOptions) == null ? void 0 : d.meta)) && Fe(this, _t, mr).call(this, {
            type: "fetch",
            meta: (c = s.fetchOptions) == null ? void 0 : c.meta
        });
        const l = f => {
            var p, m, v, x;
            Fu(f) && f.silent || Fe(this, _t, mr).call(this, {
                type: "error",
                error: f
            }),
            Fu(f) || ((m = (p = I(this, Et).config).onError) == null || m.call(p, f, this),
            (x = (v = I(this, Et).config).onSettled) == null || x.call(v, this.state.data, f, this)),
            this.scheduleGc()
        }
        ;
        return Y(this, _e, W0({
            initialPromise: r == null ? void 0 : r.initialPromise,
            fn: s.fetchFn,
            abort: n.abort.bind(n),
            onSuccess: f => {
                var p, m, v, x;
                if (f === void 0) {
                    l(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(f)
                } catch (g) {
                    l(g);
                    return
                }
                (m = (p = I(this, Et).config).onSuccess) == null || m.call(p, f, this),
                (x = (v = I(this, Et).config).onSettled) == null || x.call(v, f, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: l,
            onFail: (f, p) => {
                Fe(this, _t, mr).call(this, {
                    type: "failed",
                    failureCount: f,
                    error: p
                })
            }
            ,
            onPause: () => {
                Fe(this, _t, mr).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                Fe(this, _t, mr).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: s.options.retry,
            retryDelay: s.options.retryDelay,
            networkMode: s.options.networkMode,
            canRun: () => !0
        })),
        I(this, _e).start()
    }
}
,
Do = new WeakMap,
On = new WeakMap,
Et = new WeakMap,
An = new WeakMap,
_e = new WeakMap,
aa = new WeakMap,
Mn = new WeakMap,
_t = new WeakSet,
mr = function(t) {
    const r = n => {
        switch (t.type) {
        case "failed":
            return {
                ...n,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error
            };
        case "pause":
            return {
                ...n,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...n,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...n,
                ...PP(n.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            return Y(this, On, void 0),
            {
                ...n,
                data: t.data,
                dataUpdateCount: n.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const o = t.error;
            return Fu(o) && o.revert && I(this, On) ? {
                ...I(this, On),
                fetchStatus: "idle"
            } : {
                ...n,
                error: o,
                errorUpdateCount: n.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: n.fetchFailureCount + 1,
                fetchFailureReason: o,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...n,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...n,
                ...t.state
            }
        }
    }
    ;
    this.state = r(this.state),
    qe.batch( () => {
        this.observers.forEach(n => {
            n.onQueryUpdate()
        }
        ),
        I(this, Et).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
th);
function PP(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: _0(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function DP(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , r = t !== void 0
      , n = r ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: r ? n ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: r ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var tr, rh, NP = (rh = class extends Ol {
    constructor(t={}) {
        super();
        ne(this, tr);
        this.config = t,
        Y(this, tr, new Map)
    }
    build(t, r, n) {
        const o = r.queryKey
          , i = r.queryHash ?? If(o, r);
        let a = this.get(i);
        return a || (a = new EP({
            client: t,
            queryKey: o,
            queryHash: i,
            options: t.defaultQueryOptions(r),
            state: n,
            defaultOptions: t.getQueryDefaults(o)
        }),
        this.add(a)),
        a
    }
    add(t) {
        I(this, tr).has(t.queryHash) || (I(this, tr).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const r = I(this, tr).get(t.queryHash);
        r && (t.destroy(),
        r === t && I(this, tr).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        qe.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return I(this, tr).get(t)
    }
    getAll() {
        return [...I(this, tr).values()]
    }
    find(t) {
        const r = {
            exact: !0,
            ...t
        };
        return this.getAll().find(n => Gm(r, n))
    }
    findAll(t={}) {
        const r = this.getAll();
        return Object.keys(t).length > 0 ? r.filter(n => Gm(t, n)) : r
    }
    notify(t) {
        qe.batch( () => {
            this.listeners.forEach(r => {
                r(t)
            }
            )
        }
        )
    }
    onFocus() {
        qe.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        qe.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
tr = new WeakMap,
rh), rr, He, Ln, nr, Lr, nh, IP = (nh = class extends V0 {
    constructor(t) {
        super();
        ne(this, nr);
        ne(this, rr);
        ne(this, He);
        ne(this, Ln);
        this.mutationId = t.mutationId,
        Y(this, He, t.mutationCache),
        Y(this, rr, []),
        this.state = t.state || kP(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        I(this, rr).includes(t) || (I(this, rr).push(t),
        this.clearGcTimeout(),
        I(this, He).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        Y(this, rr, I(this, rr).filter(r => r !== t)),
        this.scheduleGc(),
        I(this, He).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        I(this, rr).length || (this.state.status === "pending" ? this.scheduleGc() : I(this, He).remove(this))
    }
    continue() {
        var t;
        return ((t = I(this, Ln)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var i, a, s, l, u, d, c, f, p, m, v, x, g, h, y, S, E, C, P, D;
        const r = () => {
            Fe(this, nr, Lr).call(this, {
                type: "continue"
            })
        }
        ;
        Y(this, Ln, W0({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (k, O) => {
                Fe(this, nr, Lr).call(this, {
                    type: "failed",
                    failureCount: k,
                    error: O
                })
            }
            ,
            onPause: () => {
                Fe(this, nr, Lr).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: r,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => I(this, He).canRun(this)
        }));
        const n = this.state.status === "pending"
          , o = !I(this, Ln).canStart();
        try {
            if (n)
                r();
            else {
                Fe(this, nr, Lr).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: o
                }),
                await ((a = (i = I(this, He).config).onMutate) == null ? void 0 : a.call(i, t, this));
                const O = await ((l = (s = this.options).onMutate) == null ? void 0 : l.call(s, t));
                O !== this.state.context && Fe(this, nr, Lr).call(this, {
                    type: "pending",
                    context: O,
                    variables: t,
                    isPaused: o
                })
            }
            const k = await I(this, Ln).start();
            return await ((d = (u = I(this, He).config).onSuccess) == null ? void 0 : d.call(u, k, t, this.state.context, this)),
            await ((f = (c = this.options).onSuccess) == null ? void 0 : f.call(c, k, t, this.state.context)),
            await ((m = (p = I(this, He).config).onSettled) == null ? void 0 : m.call(p, k, null, this.state.variables, this.state.context, this)),
            await ((x = (v = this.options).onSettled) == null ? void 0 : x.call(v, k, null, t, this.state.context)),
            Fe(this, nr, Lr).call(this, {
                type: "success",
                data: k
            }),
            k
        } catch (k) {
            try {
                throw await ((h = (g = I(this, He).config).onError) == null ? void 0 : h.call(g, k, t, this.state.context, this)),
                await ((S = (y = this.options).onError) == null ? void 0 : S.call(y, k, t, this.state.context)),
                await ((C = (E = I(this, He).config).onSettled) == null ? void 0 : C.call(E, void 0, k, this.state.variables, this.state.context, this)),
                await ((D = (P = this.options).onSettled) == null ? void 0 : D.call(P, void 0, k, t, this.state.context)),
                k
            } finally {
                Fe(this, nr, Lr).call(this, {
                    type: "error",
                    error: k
                })
            }
        } finally {
            I(this, He).runNext(this)
        }
    }
}
,
rr = new WeakMap,
He = new WeakMap,
Ln = new WeakMap,
nr = new WeakSet,
Lr = function(t) {
    const r = n => {
        switch (t.type) {
        case "failed":
            return {
                ...n,
                failureCount: t.failureCount,
                failureReason: t.error
            };
        case "pause":
            return {
                ...n,
                isPaused: !0
            };
        case "continue":
            return {
                ...n,
                isPaused: !1
            };
        case "pending":
            return {
                ...n,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...n,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...n,
                data: void 0,
                error: t.error,
                failureCount: n.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = r(this.state),
    qe.batch( () => {
        I(this, rr).forEach(n => {
            n.onMutationUpdate(t)
        }
        ),
        I(this, He).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
nh);
function kP() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var gr, Ut, sa, oh, TP = (oh = class extends Ol {
    constructor(t={}) {
        super();
        ne(this, gr);
        ne(this, Ut);
        ne(this, sa);
        this.config = t,
        Y(this, gr, new Set),
        Y(this, Ut, new Map),
        Y(this, sa, 0)
    }
    build(t, r, n) {
        const o = new IP({
            mutationCache: this,
            mutationId: ++ka(this, sa)._,
            options: t.defaultMutationOptions(r),
            state: n
        });
        return this.add(o),
        o
    }
    add(t) {
        I(this, gr).add(t);
        const r = Xa(t);
        if (typeof r == "string") {
            const n = I(this, Ut).get(r);
            n ? n.push(t) : I(this, Ut).set(r, [t])
        }
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        if (I(this, gr).delete(t)) {
            const r = Xa(t);
            if (typeof r == "string") {
                const n = I(this, Ut).get(r);
                if (n)
                    if (n.length > 1) {
                        const o = n.indexOf(t);
                        o !== -1 && n.splice(o, 1)
                    } else
                        n[0] === t && I(this, Ut).delete(r)
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const r = Xa(t);
        if (typeof r == "string") {
            const n = I(this, Ut).get(r)
              , o = n == null ? void 0 : n.find(i => i.state.status === "pending");
            return !o || o === t
        } else
            return !0
    }
    runNext(t) {
        var n;
        const r = Xa(t);
        if (typeof r == "string") {
            const o = (n = I(this, Ut).get(r)) == null ? void 0 : n.find(i => i !== t && i.state.isPaused);
            return (o == null ? void 0 : o.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        qe.batch( () => {
            I(this, gr).forEach(t => {
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }
            ),
            I(this, gr).clear(),
            I(this, Ut).clear()
        }
        )
    }
    getAll() {
        return Array.from(I(this, gr))
    }
    find(t) {
        const r = {
            exact: !0,
            ...t
        };
        return this.getAll().find(n => qm(r, n))
    }
    findAll(t={}) {
        return this.getAll().filter(r => qm(t, r))
    }
    notify(t) {
        qe.batch( () => {
            this.listeners.forEach(r => {
                r(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(r => r.state.isPaused);
        return qe.batch( () => Promise.all(t.map(r => r.continue().catch(zt))))
    }
}
,
gr = new WeakMap,
Ut = new WeakMap,
sa = new WeakMap,
oh);
function Xa(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id
}
function Ym(e) {
    return {
        onFetch: (t, r) => {
            var d, c, f, p, m;
            const n = t.options
              , o = (f = (c = (d = t.fetchOptions) == null ? void 0 : d.meta) == null ? void 0 : c.fetchMore) == null ? void 0 : f.direction
              , i = ((p = t.state.data) == null ? void 0 : p.pages) || []
              , a = ((m = t.state.data) == null ? void 0 : m.pageParams) || [];
            let s = {
                pages: [],
                pageParams: []
            }
              , l = 0;
            const u = async () => {
                let v = !1;
                const x = y => {
                    Object.defineProperty(y, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? v = !0 : t.signal.addEventListener("abort", () => {
                            v = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , g = $0(t.options, t.fetchOptions)
                  , h = async (y, S, E) => {
                    if (v)
                        return Promise.reject();
                    if (S == null && y.pages.length)
                        return Promise.resolve(y);
                    const P = ( () => {
                        const F = {
                            client: t.client,
                            queryKey: t.queryKey,
                            pageParam: S,
                            direction: E ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        return x(F),
                        F
                    }
                    )()
                      , D = await g(P)
                      , {maxPages: k} = t.options
                      , O = E ? gP : hP;
                    return {
                        pages: O(y.pages, D, k),
                        pageParams: O(y.pageParams, S, k)
                    }
                }
                ;
                if (o && i.length) {
                    const y = o === "backward"
                      , S = y ? RP : Xm
                      , E = {
                        pages: i,
                        pageParams: a
                    }
                      , C = S(n, E);
                    s = await h(E, C, y)
                } else {
                    const y = e ?? i.length;
                    do {
                        const S = l === 0 ? a[0] ?? n.initialPageParam : Xm(n, s);
                        if (l > 0 && S == null)
                            break;
                        s = await h(s, S),
                        l++
                    } while (l < y)
                }
                return s
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var v, x;
                return (x = (v = t.options).persister) == null ? void 0 : x.call(v, u, {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, r)
            }
            : t.fetchFn = u
        }
    }
}
function Xm(e, {pages: t, pageParams: r}) {
    const n = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[n], t, r[n], r) : void 0
}
function RP(e, {pages: t, pageParams: r}) {
    var n;
    return t.length > 0 ? (n = e.getPreviousPageParam) == null ? void 0 : n.call(e, t[0], t, r[0], r) : void 0
}
var ye, Ur, Wr, No, Io, Vr, ko, To, ih, OP = (ih = class {
    constructor(e={}) {
        ne(this, ye);
        ne(this, Ur);
        ne(this, Wr);
        ne(this, No);
        ne(this, Io);
        ne(this, Vr);
        ne(this, ko);
        ne(this, To);
        Y(this, ye, e.queryCache || new NP),
        Y(this, Ur, e.mutationCache || new TP),
        Y(this, Wr, e.defaultOptions || {}),
        Y(this, No, new Map),
        Y(this, Io, new Map),
        Y(this, Vr, 0)
    }
    mount() {
        ka(this, Vr)._++,
        I(this, Vr) === 1 && (Y(this, ko, z0.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            I(this, ye).onFocus())
        }
        )),
        Y(this, To, Qs.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            I(this, ye).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        ka(this, Vr)._--,
        I(this, Vr) === 0 && ((e = I(this, ko)) == null || e.call(this),
        Y(this, ko, void 0),
        (t = I(this, To)) == null || t.call(this),
        Y(this, To, void 0))
    }
    isFetching(e) {
        return I(this, ye).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return I(this, Ur).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var r;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (r = I(this, ye).get(t.queryHash)) == null ? void 0 : r.state.data
    }
    ensureQueryData(e) {
        const t = this.defaultQueryOptions(e)
          , r = I(this, ye).build(this, t)
          , n = r.state.data;
        return n === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && r.isStaleByTime(nd(t.staleTime, r)) && this.prefetchQuery(t),
        Promise.resolve(n))
    }
    getQueriesData(e) {
        return I(this, ye).findAll(e).map( ({queryKey: t, state: r}) => {
            const n = r.data;
            return [t, n]
        }
        )
    }
    setQueryData(e, t, r) {
        const n = this.defaultQueryOptions({
            queryKey: e
        })
          , o = I(this, ye).get(n.queryHash)
          , i = o == null ? void 0 : o.state.data
          , a = cP(t, i);
        if (a !== void 0)
            return I(this, ye).build(this, n).setData(a, {
                ...r,
                manual: !0
            })
    }
    setQueriesData(e, t, r) {
        return qe.batch( () => I(this, ye).findAll(e).map( ({queryKey: n}) => [n, this.setQueryData(n, t, r)]))
    }
    getQueryState(e) {
        var r;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (r = I(this, ye).get(t.queryHash)) == null ? void 0 : r.state
    }
    removeQueries(e) {
        const t = I(this, ye);
        qe.batch( () => {
            t.findAll(e).forEach(r => {
                t.remove(r)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const r = I(this, ye);
        return qe.batch( () => (r.findAll(e).forEach(n => {
            n.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...e
        }, t)))
    }
    cancelQueries(e, t={}) {
        const r = {
            revert: !0,
            ...t
        }
          , n = qe.batch( () => I(this, ye).findAll(e).map(o => o.cancel(r)));
        return Promise.all(n).then(zt).catch(zt)
    }
    invalidateQueries(e, t={}) {
        return qe.batch( () => (I(this, ye).findAll(e).forEach(r => {
            r.invalidate()
        }
        ),
        (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...e,
            type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
        }, t)))
    }
    refetchQueries(e, t={}) {
        const r = {
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
        }
          , n = qe.batch( () => I(this, ye).findAll(e).filter(o => !o.isDisabled() && !o.isStatic()).map(o => {
            let i = o.fetch(void 0, r);
            return r.throwOnError || (i = i.catch(zt)),
            o.state.fetchStatus === "paused" ? Promise.resolve() : i
        }
        ));
        return Promise.all(n).then(zt)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const r = I(this, ye).build(this, t);
        return r.isStaleByTime(nd(t.staleTime, r)) ? r.fetch(t) : Promise.resolve(r.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(zt).catch(zt)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = Ym(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(zt).catch(zt)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = Ym(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return Qs.isOnline() ? I(this, Ur).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return I(this, ye)
    }
    getMutationCache() {
        return I(this, Ur)
    }
    getDefaultOptions() {
        return I(this, Wr)
    }
    setDefaultOptions(e) {
        Y(this, Wr, e)
    }
    setQueryDefaults(e, t) {
        I(this, No).set(Yi(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...I(this, No).values()]
          , r = {};
        return t.forEach(n => {
            Xi(e, n.queryKey) && Object.assign(r, n.defaultOptions)
        }
        ),
        r
    }
    setMutationDefaults(e, t) {
        I(this, Io).set(Yi(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...I(this, Io).values()]
          , r = {};
        return t.forEach(n => {
            Xi(e, n.mutationKey) && Object.assign(r, n.defaultOptions)
        }
        ),
        r
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...I(this, Wr).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = If(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.queryFn === kf && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...I(this, Wr).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        I(this, ye).clear(),
        I(this, Ur).clear()
    }
}
,
ye = new WeakMap,
Ur = new WeakMap,
Wr = new WeakMap,
No = new WeakMap,
Io = new WeakMap,
Vr = new WeakMap,
ko = new WeakMap,
To = new WeakMap,
ih), AP = b.createContext(void 0), MP = ({client: e, children: t}) => (b.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
w.jsx(AP.Provider, {
    value: e,
    children: t
}));
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ji() {
    return Ji = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    Ji.apply(this, arguments)
}
var qr;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(qr || (qr = {}));
const Jm = "popstate";
function LP(e) {
    e === void 0 && (e = {});
    function t(n, o) {
        let {pathname: i, search: a, hash: s} = n.location;
        return id("", {
            pathname: i,
            search: a,
            hash: s
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function r(n, o) {
        return typeof o == "string" ? o : Ys(o)
    }
    return BP(t, r, null, e)
}
function Ce(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function H0(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function jP() {
    return Math.random().toString(36).substr(2, 8)
}
function Zm(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function id(e, t, r, n) {
    return r === void 0 && (r = null),
    Ji({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Yo(t) : t, {
        state: r,
        key: t && t.key || n || jP()
    })
}
function Ys(e) {
    let {pathname: t="/", search: r="", hash: n=""} = e;
    return r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r),
    n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n),
    t
}
function Yo(e) {
    let t = {};
    if (e) {
        let r = e.indexOf("#");
        r >= 0 && (t.hash = e.substr(r),
        e = e.substr(0, r));
        let n = e.indexOf("?");
        n >= 0 && (t.search = e.substr(n),
        e = e.substr(0, n)),
        e && (t.pathname = e)
    }
    return t
}
function BP(e, t, r, n) {
    n === void 0 && (n = {});
    let {window: o=document.defaultView, v5Compat: i=!1} = n
      , a = o.history
      , s = qr.Pop
      , l = null
      , u = d();
    u == null && (u = 0,
    a.replaceState(Ji({}, a.state, {
        idx: u
    }), ""));
    function d() {
        return (a.state || {
            idx: null
        }).idx
    }
    function c() {
        s = qr.Pop;
        let x = d()
          , g = x == null ? null : x - u;
        u = x,
        l && l({
            action: s,
            location: v.location,
            delta: g
        })
    }
    function f(x, g) {
        s = qr.Push;
        let h = id(v.location, x, g);
        u = d() + 1;
        let y = Zm(h, u)
          , S = v.createHref(h);
        try {
            a.pushState(y, "", S)
        } catch (E) {
            if (E instanceof DOMException && E.name === "DataCloneError")
                throw E;
            o.location.assign(S)
        }
        i && l && l({
            action: s,
            location: v.location,
            delta: 1
        })
    }
    function p(x, g) {
        s = qr.Replace;
        let h = id(v.location, x, g);
        u = d();
        let y = Zm(h, u)
          , S = v.createHref(h);
        a.replaceState(y, "", S),
        i && l && l({
            action: s,
            location: v.location,
            delta: 0
        })
    }
    function m(x) {
        let g = o.location.origin !== "null" ? o.location.origin : o.location.href
          , h = typeof x == "string" ? x : Ys(x);
        return h = h.replace(/ $/, "%20"),
        Ce(g, "No window.location.(origin|href) available to create URL for href: " + h),
        new URL(h,g)
    }
    let v = {
        get action() {
            return s
        },
        get location() {
            return e(o, a)
        },
        listen(x) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener(Jm, c),
            l = x,
            () => {
                o.removeEventListener(Jm, c),
                l = null
            }
        },
        createHref(x) {
            return t(o, x)
        },
        createURL: m,
        encodeLocation(x) {
            let g = m(x);
            return {
                pathname: g.pathname,
                search: g.search,
                hash: g.hash
            }
        },
        push: f,
        replace: p,
        go(x) {
            return a.go(x)
        }
    };
    return v
}
var ev;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(ev || (ev = {}));
function FP(e, t, r) {
    return r === void 0 && (r = "/"),
    $P(e, t, r, !1)
}
function $P(e, t, r, n) {
    let o = typeof t == "string" ? Yo(t) : t
      , i = Tf(o.pathname || "/", r);
    if (i == null)
        return null;
    let a = G0(e);
    zP(a);
    let s = null;
    for (let l = 0; s == null && l < a.length; ++l) {
        let u = XP(i);
        s = QP(a[l], u, n)
    }
    return s
}
function G0(e, t, r, n) {
    t === void 0 && (t = []),
    r === void 0 && (r = []),
    n === void 0 && (n = "");
    let o = (i, a, s) => {
        let l = {
            relativePath: s === void 0 ? i.path || "" : s,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: a,
            route: i
        };
        l.relativePath.startsWith("/") && (Ce(l.relativePath.startsWith(n), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + n + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        l.relativePath = l.relativePath.slice(n.length));
        let u = rn([n, l.relativePath])
          , d = r.concat(l);
        i.children && i.children.length > 0 && (Ce(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        G0(i.children, t, d, u)),
        !(i.path == null && !i.index) && t.push({
            path: u,
            score: qP(u, i.index),
            routesMeta: d
        })
    }
    ;
    return e.forEach( (i, a) => {
        var s;
        if (i.path === "" || !((s = i.path) != null && s.includes("?")))
            o(i, a);
        else
            for (let l of q0(i.path))
                o(i, a, l)
    }
    ),
    t
}
function q0(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[r,...n] = t
      , o = r.endsWith("?")
      , i = r.replace(/\?$/, "");
    if (n.length === 0)
        return o ? [i, ""] : [i];
    let a = q0(n.join("/"))
      , s = [];
    return s.push(...a.map(l => l === "" ? i : [i, l].join("/"))),
    o && s.push(...a),
    s.map(l => e.startsWith("/") && l === "" ? "/" : l)
}
function zP(e) {
    e.sort( (t, r) => t.score !== r.score ? r.score - t.score : KP(t.routesMeta.map(n => n.childrenIndex), r.routesMeta.map(n => n.childrenIndex)))
}
const _P = /^:[\w-]+$/
  , UP = 3
  , WP = 2
  , VP = 1
  , HP = 10
  , GP = -2
  , tv = e => e === "*";
function qP(e, t) {
    let r = e.split("/")
      , n = r.length;
    return r.some(tv) && (n += GP),
    t && (n += WP),
    r.filter(o => !tv(o)).reduce( (o, i) => o + (_P.test(i) ? UP : i === "" ? VP : HP), n)
}
function KP(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (n, o) => n === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function QP(e, t, r) {
    let {routesMeta: n} = e
      , o = {}
      , i = "/"
      , a = [];
    for (let s = 0; s < n.length; ++s) {
        let l = n[s]
          , u = s === n.length - 1
          , d = i === "/" ? t : t.slice(i.length) || "/"
          , c = rv({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: u
        }, d)
          , f = l.route;
        if (!c && u && r && !n[n.length - 1].route.index && (c = rv({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: !1
        }, d)),
        !c)
            return null;
        Object.assign(o, c.params),
        a.push({
            params: o,
            pathname: rn([i, c.pathname]),
            pathnameBase: tD(rn([i, c.pathnameBase])),
            route: f
        }),
        c.pathnameBase !== "/" && (i = rn([i, c.pathnameBase]))
    }
    return a
}
function rv(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[r,n] = YP(e.path, e.caseSensitive, e.end)
      , o = t.match(r);
    if (!o)
        return null;
    let i = o[0]
      , a = i.replace(/(.)\/+$/, "$1")
      , s = o.slice(1);
    return {
        params: n.reduce( (u, d, c) => {
            let {paramName: f, isOptional: p} = d;
            if (f === "*") {
                let v = s[c] || "";
                a = i.slice(0, i.length - v.length).replace(/(.)\/+$/, "$1")
            }
            const m = s[c];
            return p && !m ? u[f] = void 0 : u[f] = (m || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: i,
        pathnameBase: a,
        pattern: e
    }
}
function YP(e, t, r) {
    t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    H0(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let n = []
      , o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (a, s, l) => (n.push({
        paramName: s,
        isOptional: l != null
    }),
    l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (n.push({
        paramName: "*"
    }),
    o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o,t ? void 0 : "i"), n]
}
function XP(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return H0(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function Tf(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let r = t.endsWith("/") ? t.length - 1 : t.length
      , n = e.charAt(r);
    return n && n !== "/" ? null : e.slice(r) || "/"
}
function JP(e, t) {
    t === void 0 && (t = "/");
    let {pathname: r, search: n="", hash: o=""} = typeof e == "string" ? Yo(e) : e;
    return {
        pathname: r ? r.startsWith("/") ? r : ZP(r, t) : t,
        search: rD(n),
        hash: nD(o)
    }
}
function ZP(e, t) {
    let r = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(o => {
        o === ".." ? r.length > 1 && r.pop() : o !== "." && r.push(o)
    }
    ),
    r.length > 1 ? r.join("/") : "/"
}
function $u(e, t, r, n) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to the ") + ("`to." + r + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function eD(e) {
    return e.filter( (t, r) => r === 0 || t.route.path && t.route.path.length > 0)
}
function K0(e, t) {
    let r = eD(e);
    return t ? r.map( (n, o) => o === r.length - 1 ? n.pathname : n.pathnameBase) : r.map(n => n.pathnameBase)
}
function Q0(e, t, r, n) {
    n === void 0 && (n = !1);
    let o;
    typeof e == "string" ? o = Yo(e) : (o = Ji({}, e),
    Ce(!o.pathname || !o.pathname.includes("?"), $u("?", "pathname", "search", o)),
    Ce(!o.pathname || !o.pathname.includes("#"), $u("#", "pathname", "hash", o)),
    Ce(!o.search || !o.search.includes("#"), $u("#", "search", "hash", o)));
    let i = e === "" || o.pathname === "", a = i ? "/" : o.pathname, s;
    if (a == null)
        s = r;
    else {
        let c = t.length - 1;
        if (!n && a.startsWith("..")) {
            let f = a.split("/");
            for (; f[0] === ".."; )
                f.shift(),
                c -= 1;
            o.pathname = f.join("/")
        }
        s = c >= 0 ? t[c] : "/"
    }
    let l = JP(o, s)
      , u = a && a !== "/" && a.endsWith("/")
      , d = (i || a === ".") && r.endsWith("/");
    return !l.pathname.endsWith("/") && (u || d) && (l.pathname += "/"),
    l
}
const rn = e => e.join("/").replace(/\/\/+/g, "/")
  , tD = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , rD = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , nD = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function oD(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const Y0 = ["post", "put", "patch", "delete"];
new Set(Y0);
const iD = ["get", ...Y0];
new Set(iD);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Zi() {
    return Zi = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    Zi.apply(this, arguments)
}
const Rf = b.createContext(null)
  , aD = b.createContext(null)
  , Kn = b.createContext(null)
  , Ml = b.createContext(null)
  , gn = b.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , X0 = b.createContext(null);
function sD(e, t) {
    let {relative: r} = t === void 0 ? {} : t;
    va() || Ce(!1);
    let {basename: n, navigator: o} = b.useContext(Kn)
      , {hash: i, pathname: a, search: s} = ex(e, {
        relative: r
    })
      , l = a;
    return n !== "/" && (l = a === "/" ? n : rn([n, a])),
    o.createHref({
        pathname: l,
        search: s,
        hash: i
    })
}
function va() {
    return b.useContext(Ml) != null
}
function ha() {
    return va() || Ce(!1),
    b.useContext(Ml).location
}
function J0(e) {
    b.useContext(Kn).static || b.useLayoutEffect(e)
}
function lD() {
    let {isDataRoute: e} = b.useContext(gn);
    return e ? bD() : uD()
}
function uD() {
    va() || Ce(!1);
    let e = b.useContext(Rf)
      , {basename: t, future: r, navigator: n} = b.useContext(Kn)
      , {matches: o} = b.useContext(gn)
      , {pathname: i} = ha()
      , a = JSON.stringify(K0(o, r.v7_relativeSplatPath))
      , s = b.useRef(!1);
    return J0( () => {
        s.current = !0
    }
    ),
    b.useCallback(function(u, d) {
        if (d === void 0 && (d = {}),
        !s.current)
            return;
        if (typeof u == "number") {
            n.go(u);
            return
        }
        let c = Q0(u, JSON.parse(a), i, d.relative === "path");
        e == null && t !== "/" && (c.pathname = c.pathname === "/" ? t : rn([t, c.pathname])),
        (d.replace ? n.replace : n.push)(c, d.state, d)
    }, [t, n, a, i, e])
}
function Z0() {
    let {matches: e} = b.useContext(gn)
      , t = e[e.length - 1];
    return t ? t.params : {}
}
function ex(e, t) {
    let {relative: r} = t === void 0 ? {} : t
      , {future: n} = b.useContext(Kn)
      , {matches: o} = b.useContext(gn)
      , {pathname: i} = ha()
      , a = JSON.stringify(K0(o, n.v7_relativeSplatPath));
    return b.useMemo( () => Q0(e, JSON.parse(a), i, r === "path"), [e, a, i, r])
}
function cD(e, t) {
    return dD(e, t)
}
function dD(e, t, r, n) {
    va() || Ce(!1);
    let {navigator: o} = b.useContext(Kn)
      , {matches: i} = b.useContext(gn)
      , a = i[i.length - 1]
      , s = a ? a.params : {};
    a && a.pathname;
    let l = a ? a.pathnameBase : "/";
    a && a.route;
    let u = ha(), d;
    if (t) {
        var c;
        let x = typeof t == "string" ? Yo(t) : t;
        l === "/" || (c = x.pathname) != null && c.startsWith(l) || Ce(!1),
        d = x
    } else
        d = u;
    let f = d.pathname || "/"
      , p = f;
    if (l !== "/") {
        let x = l.replace(/^\//, "").split("/");
        p = "/" + f.replace(/^\//, "").split("/").slice(x.length).join("/")
    }
    let m = FP(e, {
        pathname: p
    })
      , v = hD(m && m.map(x => Object.assign({}, x, {
        params: Object.assign({}, s, x.params),
        pathname: rn([l, o.encodeLocation ? o.encodeLocation(x.pathname).pathname : x.pathname]),
        pathnameBase: x.pathnameBase === "/" ? l : rn([l, o.encodeLocation ? o.encodeLocation(x.pathnameBase).pathname : x.pathnameBase])
    })), i, r, n);
    return t && v ? b.createElement(Ml.Provider, {
        value: {
            location: Zi({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, d),
            navigationType: qr.Pop
        }
    }, v) : v
}
function fD() {
    let e = wD()
      , t = oD(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , r = e instanceof Error ? e.stack : null
      , o = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return b.createElement(b.Fragment, null, b.createElement("h2", null, "Unexpected Application Error!"), b.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), r ? b.createElement("pre", {
        style: o
    }, r) : null, null)
}
const pD = b.createElement(fD, null);
class mD extends b.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, r) {
        return r.location !== t.location || r.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : r.error,
            location: r.location,
            revalidation: t.revalidation || r.revalidation
        }
    }
    componentDidCatch(t, r) {
        console.error("React Router caught the following error during render", t, r)
    }
    render() {
        return this.state.error !== void 0 ? b.createElement(gn.Provider, {
            value: this.props.routeContext
        }, b.createElement(X0.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function vD(e) {
    let {routeContext: t, match: r, children: n} = e
      , o = b.useContext(Rf);
    return o && o.static && o.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = r.route.id),
    b.createElement(gn.Provider, {
        value: t
    }, n)
}
function hD(e, t, r, n) {
    var o;
    if (t === void 0 && (t = []),
    r === void 0 && (r = null),
    n === void 0 && (n = null),
    e == null) {
        var i;
        if (!r)
            return null;
        if (r.errors)
            e = r.matches;
        else if ((i = n) != null && i.v7_partialHydration && t.length === 0 && !r.initialized && r.matches.length > 0)
            e = r.matches;
        else
            return null
    }
    let a = e
      , s = (o = r) == null ? void 0 : o.errors;
    if (s != null) {
        let d = a.findIndex(c => c.route.id && (s == null ? void 0 : s[c.route.id]) !== void 0);
        d >= 0 || Ce(!1),
        a = a.slice(0, Math.min(a.length, d + 1))
    }
    let l = !1
      , u = -1;
    if (r && n && n.v7_partialHydration)
        for (let d = 0; d < a.length; d++) {
            let c = a[d];
            if ((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (u = d),
            c.route.id) {
                let {loaderData: f, errors: p} = r
                  , m = c.route.loader && f[c.route.id] === void 0 && (!p || p[c.route.id] === void 0);
                if (c.route.lazy || m) {
                    l = !0,
                    u >= 0 ? a = a.slice(0, u + 1) : a = [a[0]];
                    break
                }
            }
        }
    return a.reduceRight( (d, c, f) => {
        let p, m = !1, v = null, x = null;
        r && (p = s && c.route.id ? s[c.route.id] : void 0,
        v = c.route.errorElement || pD,
        l && (u < 0 && f === 0 ? (m = !0,
        x = null) : u === f && (m = !0,
        x = c.route.hydrateFallbackElement || null)));
        let g = t.concat(a.slice(0, f + 1))
          , h = () => {
            let y;
            return p ? y = v : m ? y = x : c.route.Component ? y = b.createElement(c.route.Component, null) : c.route.element ? y = c.route.element : y = d,
            b.createElement(vD, {
                match: c,
                routeContext: {
                    outlet: d,
                    matches: g,
                    isDataRoute: r != null
                },
                children: y
            })
        }
        ;
        return r && (c.route.ErrorBoundary || c.route.errorElement || f === 0) ? b.createElement(mD, {
            location: r.location,
            revalidation: r.revalidation,
            component: v,
            error: p,
            children: h(),
            routeContext: {
                outlet: null,
                matches: g,
                isDataRoute: !0
            }
        }) : h()
    }
    , null)
}
var tx = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e
}(tx || {})
  , Xs = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(Xs || {});
function gD(e) {
    let t = b.useContext(Rf);
    return t || Ce(!1),
    t
}
function yD(e) {
    let t = b.useContext(aD);
    return t || Ce(!1),
    t
}
function xD(e) {
    let t = b.useContext(gn);
    return t || Ce(!1),
    t
}
function rx(e) {
    let t = xD()
      , r = t.matches[t.matches.length - 1];
    return r.route.id || Ce(!1),
    r.route.id
}
function wD() {
    var e;
    let t = b.useContext(X0)
      , r = yD(Xs.UseRouteError)
      , n = rx(Xs.UseRouteError);
    return t !== void 0 ? t : (e = r.errors) == null ? void 0 : e[n]
}
function bD() {
    let {router: e} = gD(tx.UseNavigateStable)
      , t = rx(Xs.UseNavigateStable)
      , r = b.useRef(!1);
    return J0( () => {
        r.current = !0
    }
    ),
    b.useCallback(function(o, i) {
        i === void 0 && (i = {}),
        r.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, Zi({
            fromRouteId: t
        }, i)))
    }, [e, t])
}
function SD(e, t) {
    e == null || e.v7_startTransition,
    e == null || e.v7_relativeSplatPath
}
function gs(e) {
    Ce(!1)
}
function CD(e) {
    let {basename: t="/", children: r=null, location: n, navigationType: o=qr.Pop, navigator: i, static: a=!1, future: s} = e;
    va() && Ce(!1);
    let l = t.replace(/^\/*/, "/")
      , u = b.useMemo( () => ({
        basename: l,
        navigator: i,
        static: a,
        future: Zi({
            v7_relativeSplatPath: !1
        }, s)
    }), [l, s, i, a]);
    typeof n == "string" && (n = Yo(n));
    let {pathname: d="/", search: c="", hash: f="", state: p=null, key: m="default"} = n
      , v = b.useMemo( () => {
        let x = Tf(d, l);
        return x == null ? null : {
            location: {
                pathname: x,
                search: c,
                hash: f,
                state: p,
                key: m
            },
            navigationType: o
        }
    }
    , [l, d, c, f, p, m, o]);
    return v == null ? null : b.createElement(Kn.Provider, {
        value: u
    }, b.createElement(Ml.Provider, {
        children: r,
        value: v
    }))
}
function ED(e) {
    let {children: t, location: r} = e;
    return cD(ad(t), r)
}
new Promise( () => {}
);
function ad(e, t) {
    t === void 0 && (t = []);
    let r = [];
    return b.Children.forEach(e, (n, o) => {
        if (!b.isValidElement(n))
            return;
        let i = [...t, o];
        if (n.type === b.Fragment) {
            r.push.apply(r, ad(n.props.children, i));
            return
        }
        n.type !== gs && Ce(!1),
        !n.props.index || !n.props.children || Ce(!1);
        let a = {
            id: n.props.id || i.join("-"),
            caseSensitive: n.props.caseSensitive,
            element: n.props.element,
            Component: n.props.Component,
            index: n.props.index,
            path: n.props.path,
            loader: n.props.loader,
            action: n.props.action,
            errorElement: n.props.errorElement,
            ErrorBoundary: n.props.ErrorBoundary,
            hasErrorBoundary: n.props.ErrorBoundary != null || n.props.errorElement != null,
            shouldRevalidate: n.props.shouldRevalidate,
            handle: n.props.handle,
            lazy: n.props.lazy
        };
        n.props.children && (a.children = ad(n.props.children, i)),
        r.push(a)
    }
    ),
    r
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function sd() {
    return sd = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    sd.apply(this, arguments)
}
function PD(e, t) {
    if (e == null)
        return {};
    var r = {}, n = Object.keys(e), o, i;
    for (i = 0; i < n.length; i++)
        o = n[i],
        !(t.indexOf(o) >= 0) && (r[o] = e[o]);
    return r
}
function DD(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function ND(e, t) {
    return e.button === 0 && (!t || t === "_self") && !DD(e)
}
const ID = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"]
  , kD = "6";
try {
    window.__reactRouterVersion = kD
} catch {}
const TD = "startTransition"
  , nv = hh[TD];
function RD(e) {
    let {basename: t, children: r, future: n, window: o} = e
      , i = b.useRef();
    i.current == null && (i.current = LP({
        window: o,
        v5Compat: !0
    }));
    let a = i.current
      , [s,l] = b.useState({
        action: a.action,
        location: a.location
    })
      , {v7_startTransition: u} = n || {}
      , d = b.useCallback(c => {
        u && nv ? nv( () => l(c)) : l(c)
    }
    , [l, u]);
    return b.useLayoutEffect( () => a.listen(d), [a, d]),
    b.useEffect( () => SD(n), [n]),
    b.createElement(CD, {
        basename: t,
        children: r,
        location: s.location,
        navigationType: s.action,
        navigator: a,
        future: n
    })
}
const OD = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , AD = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , Js = b.forwardRef(function(t, r) {
    let {onClick: n, relative: o, reloadDocument: i, replace: a, state: s, target: l, to: u, preventScrollReset: d, viewTransition: c} = t, f = PD(t, ID), {basename: p} = b.useContext(Kn), m, v = !1;
    if (typeof u == "string" && AD.test(u) && (m = u,
    OD))
        try {
            let y = new URL(window.location.href)
              , S = u.startsWith("//") ? new URL(y.protocol + u) : new URL(u)
              , E = Tf(S.pathname, p);
            S.origin === y.origin && E != null ? u = E + S.search + S.hash : v = !0
        } catch {}
    let x = sD(u, {
        relative: o
    })
      , g = MD(u, {
        replace: a,
        state: s,
        target: l,
        preventScrollReset: d,
        relative: o,
        viewTransition: c
    });
    function h(y) {
        n && n(y),
        y.defaultPrevented || g(y)
    }
    return b.createElement("a", sd({}, f, {
        href: m || x,
        onClick: v || i ? n : h,
        ref: r,
        target: l
    }))
});
var ov;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(ov || (ov = {}));
var iv;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(iv || (iv = {}));
function MD(e, t) {
    let {target: r, replace: n, state: o, preventScrollReset: i, relative: a, viewTransition: s} = t === void 0 ? {} : t
      , l = lD()
      , u = ha()
      , d = ex(e, {
        relative: a
    });
    return b.useCallback(c => {
        if (ND(c, r)) {
            c.preventDefault();
            let f = n !== void 0 ? n : Ys(u) === Ys(d);
            l(e, {
                replace: f,
                state: o,
                preventScrollReset: i,
                relative: a,
                viewTransition: s
            })
        }
    }
    , [u, l, d, n, o, r, e, i, a, s])
}
const LD = [{
    name: "Blue",
    value: "bg-blue-500",
    hex: "#3b82f6"
}, {
    name: "Green",
    value: "bg-green-500",
    hex: "#10b981"
}, {
    name: "Purple",
    value: "bg-purple-500",
    hex: "#8b5cf6"
}, {
    name: "Red",
    value: "bg-red-500",
    hex: "#ef4444"
}, {
    name: "Yellow",
    value: "bg-yellow-500",
    hex: "#f59e0b"
}, {
    name: "Indigo",
    value: "bg-indigo-500",
    hex: "#6366f1"
}, {
    name: "Pink",
    value: "bg-pink-500",
    hex: "#ec4899"
}, {
    name: "Teal",
    value: "bg-teal-500",
    hex: "#14b8a6"
}, {
    name: "Orange",
    value: "bg-orange-500",
    hex: "#f97316"
}, {
    name: "Gray",
    value: "bg-gray-500",
    hex: "#6b7280"
}]
  , nx = ({workspace: e, isOpen: t, onClose: r, onSave: n}) => {
    const [o,i] = b.useState({
        name: e.name,
        description: e.description,
        color: e.color,
        backgroundColor: "#ffffff",
        textColor: "#000000",
        icon: "folder"
    })
      , a = () => {
        const s = {
            ...e,
            name: o.name,
            description: o.description,
            color: o.color,
            backgroundColor: o.backgroundColor,
            textColor: o.textColor,
            icon: o.icon,
            lastModified: new Date().toISOString()
        };
        n(s),
        r()
    }
    ;
    return t ? w.jsx("div", {
        className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
        children: w.jsxs("div", {
            className: "bg-card p-6 rounded-xl shadow-2xl border border-border max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto",
            children: [w.jsxs("div", {
                className: "flex items-center justify-between mb-6",
                children: [w.jsx("h3", {
                    className: "text-xl font-semibold text-foreground",
                    children: "Workspace Settings"
                }), w.jsx("button", {
                    onClick: r,
                    className: "p-2 hover:bg-muted rounded-lg transition-colors",
                    children: w.jsx(qi, {
                        className: "w-5 h-5 text-muted-foreground"
                    })
                })]
            }), w.jsxs("div", {
                className: "space-y-6",
                children: [w.jsxs("div", {
                    children: [w.jsxs("label", {
                        className: "flex items-center gap-2 text-sm font-medium text-foreground mb-2",
                        children: [w.jsx(Mu, {
                            className: "w-4 h-4"
                        }), "Workspace Name"]
                    }), w.jsx("input", {
                        type: "text",
                        value: o.name,
                        onChange: s => i({
                            ...o,
                            name: s.target.value
                        }),
                        className: "w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary",
                        placeholder: "Enter workspace name"
                    })]
                }), w.jsxs("div", {
                    children: [w.jsxs("label", {
                        className: "flex items-center gap-2 text-sm font-medium text-foreground mb-2",
                        children: [w.jsx(Mu, {
                            className: "w-4 h-4"
                        }), "Description"]
                    }), w.jsx("textarea", {
                        value: o.description,
                        onChange: s => i({
                            ...o,
                            description: s.target.value
                        }),
                        className: "w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none",
                        rows: 3,
                        placeholder: "Enter workspace description"
                    })]
                }), w.jsxs("div", {
                    children: [w.jsxs("label", {
                        className: "flex items-center gap-2 text-sm font-medium text-foreground mb-3",
                        children: [w.jsx(Yc, {
                            className: "w-4 h-4"
                        }), "Workspace Color"]
                    }), w.jsx("div", {
                        className: "grid grid-cols-5 gap-3",
                        children: LD.map(s => w.jsx("button", {
                            onClick: () => i({
                                ...o,
                                color: s.value
                            }),
                            className: `
                    w-12 h-12 rounded-lg border-2 transition-all
                    ${o.color === s.value ? "border-foreground scale-110" : "border-border hover:scale-105"}
                    ${s.value}
                  `,
                            title: s.name
                        }, s.value))
                    })]
                }), w.jsxs("div", {
                    children: [w.jsxs("label", {
                        className: "flex items-center gap-2 text-sm font-medium text-foreground mb-2",
                        children: [w.jsx(Yc, {
                            className: "w-4 h-4"
                        }), "Background Color"]
                    }), w.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [w.jsx("input", {
                            type: "color",
                            value: o.backgroundColor,
                            onChange: s => i({
                                ...o,
                                backgroundColor: s.target.value
                            }),
                            className: "w-12 h-12 rounded-lg border border-border cursor-pointer"
                        }), w.jsx("input", {
                            type: "text",
                            value: o.backgroundColor,
                            onChange: s => i({
                                ...o,
                                backgroundColor: s.target.value
                            }),
                            className: "flex-1 px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary",
                            placeholder: "#ffffff"
                        })]
                    })]
                }), w.jsxs("div", {
                    children: [w.jsxs("label", {
                        className: "flex items-center gap-2 text-sm font-medium text-foreground mb-2",
                        children: [w.jsx(Mu, {
                            className: "w-4 h-4"
                        }), "Text Color"]
                    }), w.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [w.jsx("input", {
                            type: "color",
                            value: o.textColor,
                            onChange: s => i({
                                ...o,
                                textColor: s.target.value
                            }),
                            className: "w-12 h-12 rounded-lg border border-border cursor-pointer"
                        }), w.jsx("input", {
                            type: "text",
                            value: o.textColor,
                            onChange: s => i({
                                ...o,
                                textColor: s.target.value
                            }),
                            className: "flex-1 px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary",
                            placeholder: "#000000"
                        })]
                    })]
                }), w.jsxs("div", {
                    children: [w.jsx("label", {
                        className: "text-sm font-medium text-foreground mb-2 block",
                        children: "Preview"
                    }), w.jsx("div", {
                        className: "p-4 rounded-lg border border-border",
                        style: {
                            backgroundColor: o.backgroundColor,
                            color: o.textColor
                        },
                        children: w.jsxs("div", {
                            className: "flex items-center gap-3 mb-2",
                            children: [w.jsx("div", {
                                className: `w-8 h-8 rounded-lg ${o.color} flex items-center justify-center`,
                                children: w.jsx(gf, {
                                    className: "w-4 h-4 text-white"
                                })
                            }), w.jsxs("div", {
                                children: [w.jsx("h4", {
                                    className: "font-semibold",
                                    children: o.name
                                }), w.jsx("p", {
                                    className: "text-sm opacity-75",
                                    children: o.description
                                })]
                            })]
                        })
                    })]
                })]
            }), w.jsxs("div", {
                className: "flex gap-3 mt-6",
                children: [w.jsx("button", {
                    onClick: r,
                    className: "flex-1 px-4 py-2 border border-border rounded-lg text-foreground hover:bg-muted transition-colors",
                    children: "Cancel"
                }), w.jsxs("button", {
                    onClick: a,
                    className: "flex-1 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors flex items-center justify-center gap-2",
                    children: [w.jsx(lC, {
                        className: "w-4 h-4"
                    }), "Save Changes"]
                })]
            })]
        })
    }) : null
}
  , av = "workspaces"
  , jD = () => {
    const [e,t] = b.useState([])
      , [r,n] = b.useState(null)
      , [o,i] = b.useState(!1);
    b.useEffect( () => {
        const m = localStorage.getItem(av);
        if (m)
            try {
                t(JSON.parse(m))
            } catch (v) {
                console.error("Failed to parse saved workspaces:", v);
                const x = {
                    id: "default-workspace",
                    name: "My Workspace",
                    description: "Your main project board",
                    color: "bg-blue-500",
                    lastModified: new Date().toISOString(),
                    isStarred: !1,
                    cardCount: 0
                };
                t([x])
            }
        else {
            const v = {
                id: "default-workspace",
                name: "My Workspace",
                description: "Your main project board",
                color: "bg-blue-500",
                lastModified: new Date().toISOString(),
                isStarred: !1,
                cardCount: 0
            };
            t([v])
        }
    }
    , []),
    b.useEffect( () => {
        e.length > 0 && localStorage.setItem(av, JSON.stringify(e))
    }
    , [e]);
    const a = () => {
        const m = {
            id: `workspace-${Date.now()}`,
            name: `Workspace ${e.length + 1}`,
            description: "A new workspace for your projects",
            color: `bg-${["blue", "green", "purple", "red", "yellow", "indigo"][e.length % 6]}-500`,
            lastModified: new Date().toISOString(),
            isStarred: !1,
            cardCount: 0
        };
        t([...e, m])
    }
      , s = m => {
        t(e.map(v => v.id === m ? {
            ...v,
            isStarred: !v.isStarred
        } : v))
    }
      , l = m => {
        n(m),
        i(!0)
    }
      , u = () => {
        i(!1),
        n(null)
    }
      , d = m => {
        t(e.map(v => v.id === m.id ? m : v))
    }
      , c = m => {
        const v = new Date(m)
          , g = new Date().getTime() - v.getTime()
          , h = Math.floor(g / (1e3 * 60 * 60 * 24));
        return h === 0 ? "Today" : h === 1 ? "Yesterday" : h < 7 ? `${h} days ago` : v.toLocaleDateString()
    }
      , f = e.filter(m => m.isStarred)
      , p = e.filter(m => !m.isStarred);
    return w.jsxs("div", {
        className: "min-h-screen bg-board",
        children: [w.jsxs("div", {
            className: "container mx-auto px-6 py-8",
            children: [w.jsxs("div", {
                className: "mb-8",
                children: [w.jsx("h1", {
                    className: "text-4xl font-bold text-foreground mb-2",
                    children: "Workspaces"
                }), w.jsx("p", {
                    className: "text-muted-foreground text-lg",
                    children: "Choose a workspace to start organizing your projects"
                })]
            }), w.jsx("div", {
                className: "mb-8 flex gap-4",
                children: w.jsxs("button", {
                    onClick: a,
                    className: "bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg flex items-center gap-2 transition-colors",
                    children: [w.jsx(Ws, {
                        className: "w-5 h-5"
                    }), "Create Workspace"]
                })
            }), f.length > 0 && w.jsxs("div", {
                className: "mb-8",
                children: [w.jsxs("div", {
                    className: "flex items-center gap-2 mb-4",
                    children: [w.jsx(Au, {
                        className: "w-5 h-5 text-yellow-500 fill-current"
                    }), w.jsx("h2", {
                        className: "text-xl font-semibold text-foreground",
                        children: "Starred"
                    })]
                }), w.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                    children: f.map(m => w.jsx(Js, {
                        to: `/workspace/${m.id}`,
                        className: "group block",
                        children: w.jsxs("div", {
                            className: "bg-card rounded-xl p-6 border border-border shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105",
                            children: [w.jsxs("div", {
                                className: "flex items-start justify-between mb-4",
                                children: [w.jsx("div", {
                                    className: `w-12 h-12 rounded-lg ${m.color} flex items-center justify-center`,
                                    children: w.jsx(Ou, {
                                        className: "w-6 h-6 text-white"
                                    })
                                }), w.jsxs("div", {
                                    className: "flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity",
                                    children: [w.jsx("button", {
                                        onClick: v => {
                                            v.preventDefault(),
                                            l(m)
                                        }
                                        ,
                                        className: "p-1 hover:bg-muted rounded transition-colors",
                                        title: "Settings",
                                        children: w.jsx(Vs, {
                                            className: "w-4 h-4 text-muted-foreground"
                                        })
                                    }), w.jsx("button", {
                                        onClick: v => {
                                            v.preventDefault(),
                                            s(m.id)
                                        }
                                        ,
                                        className: "p-1 hover:bg-muted rounded transition-colors",
                                        title: m.isStarred ? "Unstar" : "Star",
                                        children: w.jsx(Au, {
                                            className: `w-4 h-4 ${m.isStarred ? "text-yellow-500 fill-current" : "text-muted-foreground"}`
                                        })
                                    })]
                                })]
                            }), w.jsx("h3", {
                                className: "text-lg font-semibold text-foreground mb-2",
                                children: m.name
                            }), w.jsx("p", {
                                className: "text-muted-foreground text-sm mb-4",
                                children: m.description
                            }), w.jsxs("div", {
                                className: "flex items-center justify-between text-xs text-muted-foreground",
                                children: [w.jsxs("span", {
                                    children: [m.cardCount, " cards"]
                                }), w.jsx("span", {
                                    children: c(m.lastModified)
                                })]
                            })]
                        })
                    }, m.id))
                })]
            }), w.jsxs("div", {
                children: [w.jsx("h2", {
                    className: "text-xl font-semibold text-foreground mb-4",
                    children: "All Workspaces"
                }), w.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                    children: p.map(m => w.jsx(Js, {
                        to: `/workspace/${m.id}`,
                        className: "group block",
                        children: w.jsxs("div", {
                            className: "bg-card rounded-xl p-6 border border-border shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105",
                            children: [w.jsxs("div", {
                                className: "flex items-start justify-between mb-4",
                                children: [w.jsx("div", {
                                    className: `w-12 h-12 rounded-lg ${m.color} flex items-center justify-center`,
                                    children: w.jsx(Ou, {
                                        className: "w-6 h-6 text-white"
                                    })
                                }), w.jsxs("div", {
                                    className: "flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity",
                                    children: [w.jsx("button", {
                                        onClick: v => {
                                            v.preventDefault(),
                                            l(m)
                                        }
                                        ,
                                        className: "p-1 hover:bg-muted rounded transition-colors",
                                        title: "Settings",
                                        children: w.jsx(Vs, {
                                            className: "w-4 h-4 text-muted-foreground"
                                        })
                                    }), w.jsx("button", {
                                        onClick: v => {
                                            v.preventDefault(),
                                            s(m.id)
                                        }
                                        ,
                                        className: "p-1 hover:bg-muted rounded transition-colors",
                                        title: m.isStarred ? "Unstar" : "Star",
                                        children: w.jsx(Au, {
                                            className: `w-4 h-4 ${m.isStarred ? "text-yellow-500 fill-current" : "text-muted-foreground"}`
                                        })
                                    })]
                                })]
                            }), w.jsx("h3", {
                                className: "text-lg font-semibold text-foreground mb-2",
                                children: m.name
                            }), w.jsx("p", {
                                className: "text-muted-foreground text-sm mb-4",
                                children: m.description
                            }), w.jsxs("div", {
                                className: "flex items-center justify-between text-xs text-muted-foreground",
                                children: [w.jsxs("span", {
                                    children: [m.cardCount, " cards"]
                                }), w.jsx("span", {
                                    children: c(m.lastModified)
                                })]
                            })]
                        })
                    }, m.id))
                })]
            }), e.length === 0 && w.jsxs("div", {
                className: "text-center py-12",
                children: [w.jsx(Ou, {
                    className: "w-16 h-16 text-muted-foreground mx-auto mb-4"
                }), w.jsx("h3", {
                    className: "text-xl font-semibold text-foreground mb-2",
                    children: "No workspaces yet"
                }), w.jsx("p", {
                    className: "text-muted-foreground mb-6",
                    children: "Create your first workspace to start organizing your projects"
                }), w.jsxs("button", {
                    onClick: a,
                    className: "bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg flex items-center gap-2 mx-auto transition-colors",
                    children: [w.jsx(Ws, {
                        className: "w-5 h-5"
                    }), "Create Your First Workspace"]
                })]
            })]
        }), r && w.jsx(nx, {
            workspace: r,
            isOpen: o,
            onClose: u,
            onSave: d
        })]
    })
}
;
function ld(e, t) {
    return ld = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
        return r.__proto__ = n,
        r
    }
    ,
    ld(e, t)
}
function ox(e, t) {
    e.prototype = Object.create(t.prototype),
    e.prototype.constructor = e,
    ld(e, t)
}
function V() {
    return V = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                ({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    V.apply(null, arguments)
}
function ea(e) {
    "@babel/helpers - typeof";
    return ea = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    ea(e)
}
function BD(e, t) {
    if (ea(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (ea(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function FD(e) {
    var t = BD(e, "string");
    return ea(t) == "symbol" ? t : t + ""
}
function $D(e, t, r) {
    return (t = FD(t))in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function sv(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(o) {
            return Object.getOwnPropertyDescriptor(e, o).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function lv(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? sv(Object(r), !0).forEach(function(n) {
            $D(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sv(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function Je(e) {
    return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. "
}
var uv = function() {
    return typeof Symbol == "function" && Symbol.observable || "@@observable"
}()
  , zu = function() {
    return Math.random().toString(36).substring(7).split("").join(".")
}
  , cv = {
    INIT: "@@redux/INIT" + zu(),
    REPLACE: "@@redux/REPLACE" + zu(),
    PROBE_UNKNOWN_ACTION: function() {
        return "@@redux/PROBE_UNKNOWN_ACTION" + zu()
    }
};
function zD(e) {
    if (typeof e != "object" || e === null)
        return !1;
    for (var t = e; Object.getPrototypeOf(t) !== null; )
        t = Object.getPrototypeOf(t);
    return Object.getPrototypeOf(e) === t
}
function ix(e, t, r) {
    var n;
    if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
        throw new Error(Je(0));
    if (typeof t == "function" && typeof r > "u" && (r = t,
    t = void 0),
    typeof r < "u") {
        if (typeof r != "function")
            throw new Error(Je(1));
        return r(ix)(e, t)
    }
    if (typeof e != "function")
        throw new Error(Je(2));
    var o = e
      , i = t
      , a = []
      , s = a
      , l = !1;
    function u() {
        s === a && (s = a.slice())
    }
    function d() {
        if (l)
            throw new Error(Je(3));
        return i
    }
    function c(v) {
        if (typeof v != "function")
            throw new Error(Je(4));
        if (l)
            throw new Error(Je(5));
        var x = !0;
        return u(),
        s.push(v),
        function() {
            if (x) {
                if (l)
                    throw new Error(Je(6));
                x = !1,
                u();
                var h = s.indexOf(v);
                s.splice(h, 1),
                a = null
            }
        }
    }
    function f(v) {
        if (!zD(v))
            throw new Error(Je(7));
        if (typeof v.type > "u")
            throw new Error(Je(8));
        if (l)
            throw new Error(Je(9));
        try {
            l = !0,
            i = o(i, v)
        } finally {
            l = !1
        }
        for (var x = a = s, g = 0; g < x.length; g++) {
            var h = x[g];
            h()
        }
        return v
    }
    function p(v) {
        if (typeof v != "function")
            throw new Error(Je(10));
        o = v,
        f({
            type: cv.REPLACE
        })
    }
    function m() {
        var v, x = c;
        return v = {
            subscribe: function(h) {
                if (typeof h != "object" || h === null)
                    throw new Error(Je(11));
                function y() {
                    h.next && h.next(d())
                }
                y();
                var S = x(y);
                return {
                    unsubscribe: S
                }
            }
        },
        v[uv] = function() {
            return this
        }
        ,
        v
    }
    return f({
        type: cv.INIT
    }),
    n = {
        dispatch: f,
        subscribe: c,
        getState: d,
        replaceReducer: p
    },
    n[uv] = m,
    n
}
function dv(e, t) {
    return function() {
        return t(e.apply(this, arguments))
    }
}
function fv(e, t) {
    if (typeof e == "function")
        return dv(e, t);
    if (typeof e != "object" || e === null)
        throw new Error(Je(16));
    var r = {};
    for (var n in e) {
        var o = e[n];
        typeof o == "function" && (r[n] = dv(o, t))
    }
    return r
}
function ax() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
    return t.length === 0 ? function(n) {
        return n
    }
    : t.length === 1 ? t[0] : t.reduce(function(n, o) {
        return function() {
            return n(o.apply(void 0, arguments))
        }
    })
}
function _D() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
    return function(n) {
        return function() {
            var o = n.apply(void 0, arguments)
              , i = function() {
                throw new Error(Je(15))
            }
              , a = {
                getState: o.getState,
                dispatch: function() {
                    return i.apply(void 0, arguments)
                }
            }
              , s = t.map(function(l) {
                return l(a)
            });
            return i = ax.apply(void 0, s)(o.dispatch),
            lv(lv({}, o), {}, {
                dispatch: i
            })
        }
    }
}
var sx = R.createContext(null);
function UD(e) {
    e()
}
var lx = UD
  , WD = function(t) {
    return lx = t
}
  , VD = function() {
    return lx
};
function HD() {
    var e = VD()
      , t = null
      , r = null;
    return {
        clear: function() {
            t = null,
            r = null
        },
        notify: function() {
            e(function() {
                for (var o = t; o; )
                    o.callback(),
                    o = o.next
            })
        },
        get: function() {
            for (var o = [], i = t; i; )
                o.push(i),
                i = i.next;
            return o
        },
        subscribe: function(o) {
            var i = !0
              , a = r = {
                callback: o,
                next: null,
                prev: r
            };
            return a.prev ? a.prev.next = a : t = a,
            function() {
                !i || t === null || (i = !1,
                a.next ? a.next.prev = a.prev : r = a.prev,
                a.prev ? a.prev.next = a.next : t = a.next)
            }
        }
    }
}
var pv = {
    notify: function() {},
    get: function() {
        return []
    }
};
function ux(e, t) {
    var r, n = pv;
    function o(c) {
        return l(),
        n.subscribe(c)
    }
    function i() {
        n.notify()
    }
    function a() {
        d.onStateChange && d.onStateChange()
    }
    function s() {
        return !!r
    }
    function l() {
        r || (r = t ? t.addNestedSub(a) : e.subscribe(a),
        n = HD())
    }
    function u() {
        r && (r(),
        r = void 0,
        n.clear(),
        n = pv)
    }
    var d = {
        addNestedSub: o,
        notifyNestedSubs: i,
        handleChangeWrapper: a,
        isSubscribed: s,
        trySubscribe: l,
        tryUnsubscribe: u,
        getListeners: function() {
            return n
        }
    };
    return d
}
var cx = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? b.useLayoutEffect : b.useEffect;
function GD(e) {
    var t = e.store
      , r = e.context
      , n = e.children
      , o = b.useMemo(function() {
        var s = ux(t);
        return {
            store: t,
            subscription: s
        }
    }, [t])
      , i = b.useMemo(function() {
        return t.getState()
    }, [t]);
    cx(function() {
        var s = o.subscription;
        return s.onStateChange = s.notifyNestedSubs,
        s.trySubscribe(),
        i !== t.getState() && s.notifyNestedSubs(),
        function() {
            s.tryUnsubscribe(),
            s.onStateChange = null
        }
    }, [o, i]);
    var a = r || sx;
    return R.createElement(a.Provider, {
        value: o
    }, n)
}
function Zs(e, t) {
    if (e == null)
        return {};
    var r = {};
    for (var n in e)
        if ({}.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) !== -1)
                continue;
            r[n] = e[n]
        }
    return r
}
var dx = {
    exports: {}
}
  , ae = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Re = typeof Symbol == "function" && Symbol.for
  , Of = Re ? Symbol.for("react.element") : 60103
  , Af = Re ? Symbol.for("react.portal") : 60106
  , Ll = Re ? Symbol.for("react.fragment") : 60107
  , jl = Re ? Symbol.for("react.strict_mode") : 60108
  , Bl = Re ? Symbol.for("react.profiler") : 60114
  , Fl = Re ? Symbol.for("react.provider") : 60109
  , $l = Re ? Symbol.for("react.context") : 60110
  , Mf = Re ? Symbol.for("react.async_mode") : 60111
  , zl = Re ? Symbol.for("react.concurrent_mode") : 60111
  , _l = Re ? Symbol.for("react.forward_ref") : 60112
  , Ul = Re ? Symbol.for("react.suspense") : 60113
  , qD = Re ? Symbol.for("react.suspense_list") : 60120
  , Wl = Re ? Symbol.for("react.memo") : 60115
  , Vl = Re ? Symbol.for("react.lazy") : 60116
  , KD = Re ? Symbol.for("react.block") : 60121
  , QD = Re ? Symbol.for("react.fundamental") : 60117
  , YD = Re ? Symbol.for("react.responder") : 60118
  , XD = Re ? Symbol.for("react.scope") : 60119;
function gt(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
        case Of:
            switch (e = e.type,
            e) {
            case Mf:
            case zl:
            case Ll:
            case Bl:
            case jl:
            case Ul:
                return e;
            default:
                switch (e = e && e.$$typeof,
                e) {
                case $l:
                case _l:
                case Vl:
                case Wl:
                case Fl:
                    return e;
                default:
                    return t
                }
            }
        case Af:
            return t
        }
    }
}
function fx(e) {
    return gt(e) === zl
}
ae.AsyncMode = Mf;
ae.ConcurrentMode = zl;
ae.ContextConsumer = $l;
ae.ContextProvider = Fl;
ae.Element = Of;
ae.ForwardRef = _l;
ae.Fragment = Ll;
ae.Lazy = Vl;
ae.Memo = Wl;
ae.Portal = Af;
ae.Profiler = Bl;
ae.StrictMode = jl;
ae.Suspense = Ul;
ae.isAsyncMode = function(e) {
    return fx(e) || gt(e) === Mf
}
;
ae.isConcurrentMode = fx;
ae.isContextConsumer = function(e) {
    return gt(e) === $l
}
;
ae.isContextProvider = function(e) {
    return gt(e) === Fl
}
;
ae.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Of
}
;
ae.isForwardRef = function(e) {
    return gt(e) === _l
}
;
ae.isFragment = function(e) {
    return gt(e) === Ll
}
;
ae.isLazy = function(e) {
    return gt(e) === Vl
}
;
ae.isMemo = function(e) {
    return gt(e) === Wl
}
;
ae.isPortal = function(e) {
    return gt(e) === Af
}
;
ae.isProfiler = function(e) {
    return gt(e) === Bl
}
;
ae.isStrictMode = function(e) {
    return gt(e) === jl
}
;
ae.isSuspense = function(e) {
    return gt(e) === Ul
}
;
ae.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === Ll || e === zl || e === Bl || e === jl || e === Ul || e === qD || typeof e == "object" && e !== null && (e.$$typeof === Vl || e.$$typeof === Wl || e.$$typeof === Fl || e.$$typeof === $l || e.$$typeof === _l || e.$$typeof === QD || e.$$typeof === YD || e.$$typeof === XD || e.$$typeof === KD)
}
;
ae.typeOf = gt;
dx.exports = ae;
var JD = dx.exports
  , Lf = JD
  , ZD = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
}
  , eN = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
}
  , tN = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
}
  , px = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
}
  , jf = {};
jf[Lf.ForwardRef] = tN;
jf[Lf.Memo] = px;
function mv(e) {
    return Lf.isMemo(e) ? px : jf[e.$$typeof] || ZD
}
var rN = Object.defineProperty
  , nN = Object.getOwnPropertyNames
  , vv = Object.getOwnPropertySymbols
  , oN = Object.getOwnPropertyDescriptor
  , iN = Object.getPrototypeOf
  , hv = Object.prototype;
function mx(e, t, r) {
    if (typeof t != "string") {
        if (hv) {
            var n = iN(t);
            n && n !== hv && mx(e, n, r)
        }
        var o = nN(t);
        vv && (o = o.concat(vv(t)));
        for (var i = mv(e), a = mv(t), s = 0; s < o.length; ++s) {
            var l = o[s];
            if (!eN[l] && !(r && r[l]) && !(a && a[l]) && !(i && i[l])) {
                var u = oN(t, l);
                try {
                    rN(e, l, u)
                } catch {}
            }
        }
    }
    return e
}
var aN = mx;
const gv = vd(aN);
var vx = {
    exports: {}
}
  , le = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hl = 60103
  , Gl = 60106
  , ga = 60107
  , ya = 60108
  , xa = 60114
  , wa = 60109
  , ba = 60110
  , Sa = 60112
  , Ca = 60113
  , Bf = 60120
  , Ea = 60115
  , Pa = 60116
  , hx = 60121
  , gx = 60122
  , yx = 60117
  , xx = 60129
  , wx = 60131;
if (typeof Symbol == "function" && Symbol.for) {
    var Oe = Symbol.for;
    Hl = Oe("react.element"),
    Gl = Oe("react.portal"),
    ga = Oe("react.fragment"),
    ya = Oe("react.strict_mode"),
    xa = Oe("react.profiler"),
    wa = Oe("react.provider"),
    ba = Oe("react.context"),
    Sa = Oe("react.forward_ref"),
    Ca = Oe("react.suspense"),
    Bf = Oe("react.suspense_list"),
    Ea = Oe("react.memo"),
    Pa = Oe("react.lazy"),
    hx = Oe("react.block"),
    gx = Oe("react.server.block"),
    yx = Oe("react.fundamental"),
    xx = Oe("react.debug_trace_mode"),
    wx = Oe("react.legacy_hidden")
}
function Jt(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
        case Hl:
            switch (e = e.type,
            e) {
            case ga:
            case xa:
            case ya:
            case Ca:
            case Bf:
                return e;
            default:
                switch (e = e && e.$$typeof,
                e) {
                case ba:
                case Sa:
                case Pa:
                case Ea:
                case wa:
                    return e;
                default:
                    return t
                }
            }
        case Gl:
            return t
        }
    }
}
var sN = wa
  , lN = Hl
  , uN = Sa
  , cN = ga
  , dN = Pa
  , fN = Ea
  , pN = Gl
  , mN = xa
  , vN = ya
  , hN = Ca;
le.ContextConsumer = ba;
le.ContextProvider = sN;
le.Element = lN;
le.ForwardRef = uN;
le.Fragment = cN;
le.Lazy = dN;
le.Memo = fN;
le.Portal = pN;
le.Profiler = mN;
le.StrictMode = vN;
le.Suspense = hN;
le.isAsyncMode = function() {
    return !1
}
;
le.isConcurrentMode = function() {
    return !1
}
;
le.isContextConsumer = function(e) {
    return Jt(e) === ba
}
;
le.isContextProvider = function(e) {
    return Jt(e) === wa
}
;
le.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Hl
}
;
le.isForwardRef = function(e) {
    return Jt(e) === Sa
}
;
le.isFragment = function(e) {
    return Jt(e) === ga
}
;
le.isLazy = function(e) {
    return Jt(e) === Pa
}
;
le.isMemo = function(e) {
    return Jt(e) === Ea
}
;
le.isPortal = function(e) {
    return Jt(e) === Gl
}
;
le.isProfiler = function(e) {
    return Jt(e) === xa
}
;
le.isStrictMode = function(e) {
    return Jt(e) === ya
}
;
le.isSuspense = function(e) {
    return Jt(e) === Ca
}
;
le.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === ga || e === xa || e === xx || e === ya || e === Ca || e === Bf || e === wx || typeof e == "object" && e !== null && (e.$$typeof === Pa || e.$$typeof === Ea || e.$$typeof === wa || e.$$typeof === ba || e.$$typeof === Sa || e.$$typeof === yx || e.$$typeof === hx || e[0] === gx)
}
;
le.typeOf = Jt;
vx.exports = le;
var gN = vx.exports
  , yN = ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]
  , xN = ["reactReduxForwardedRef"]
  , wN = []
  , bN = [null, null];
function SN(e, t) {
    var r = e[1];
    return [t.payload, r + 1]
}
function yv(e, t, r) {
    cx(function() {
        return e.apply(void 0, t)
    }, r)
}
function CN(e, t, r, n, o, i, a) {
    e.current = n,
    t.current = o,
    r.current = !1,
    i.current && (i.current = null,
    a())
}
function EN(e, t, r, n, o, i, a, s, l, u) {
    if (e) {
        var d = !1
          , c = null
          , f = function() {
            if (!d) {
                var v = t.getState(), x, g;
                try {
                    x = n(v, o.current)
                } catch (h) {
                    g = h,
                    c = h
                }
                g || (c = null),
                x === i.current ? a.current || l() : (i.current = x,
                s.current = x,
                a.current = !0,
                u({
                    type: "STORE_UPDATED",
                    payload: {
                        error: g
                    }
                }))
            }
        };
        r.onStateChange = f,
        r.trySubscribe(),
        f();
        var p = function() {
            if (d = !0,
            r.tryUnsubscribe(),
            r.onStateChange = null,
            c)
                throw c
        };
        return p
    }
}
var PN = function() {
    return [null, 0]
};
function DN(e, t) {
    t === void 0 && (t = {});
    var r = t
      , n = r.getDisplayName
      , o = n === void 0 ? function(y) {
        return "ConnectAdvanced(" + y + ")"
    }
    : n
      , i = r.methodName
      , a = i === void 0 ? "connectAdvanced" : i
      , s = r.renderCountProp
      , l = s === void 0 ? void 0 : s
      , u = r.shouldHandleStateChanges
      , d = u === void 0 ? !0 : u
      , c = r.storeKey
      , f = c === void 0 ? "store" : c;
    r.withRef;
    var p = r.forwardRef
      , m = p === void 0 ? !1 : p
      , v = r.context
      , x = v === void 0 ? sx : v
      , g = Zs(r, yN)
      , h = x;
    return function(S) {
        var E = S.displayName || S.name || "Component"
          , C = o(E)
          , P = V({}, g, {
            getDisplayName: o,
            methodName: a,
            renderCountProp: l,
            shouldHandleStateChanges: d,
            storeKey: f,
            displayName: C,
            wrappedComponentName: E,
            WrappedComponent: S
        })
          , D = g.pure;
        function k(A) {
            return e(A.dispatch, P)
        }
        var O = D ? b.useMemo : function(A) {
            return A()
        }
        ;
        function F(A) {
            var G = b.useMemo(function() {
                var bt = A.reactReduxForwardedRef
                  , Yn = Zs(A, xN);
                return [A.context, bt, Yn]
            }, [A])
              , _ = G[0]
              , q = G[1]
              , N = G[2]
              , T = b.useMemo(function() {
                return _ && _.Consumer && gN.isContextConsumer(R.createElement(_.Consumer, null)) ? _ : h
            }, [_, h])
              , B = b.useContext(T)
              , H = !!A.store && !!A.store.getState && !!A.store.dispatch;
            B && B.store;
            var $ = H ? A.store : B.store
              , K = b.useMemo(function() {
                return k($)
            }, [$])
              , X = b.useMemo(function() {
                if (!d)
                    return bN;
                var bt = ux($, H ? null : B.subscription)
                  , Yn = bt.notifyNestedSubs.bind(bt);
                return [bt, Yn]
            }, [$, H, B])
              , oe = X[0]
              , we = X[1]
              , ee = b.useMemo(function() {
                return H ? B : V({}, B, {
                    subscription: oe
                })
            }, [H, B, oe])
              , At = b.useReducer(SN, wN, PN)
              , yt = At[0]
              , Xe = yt[0]
              , xt = At[1];
            if (Xe && Xe.error)
                throw Xe.error;
            var dr = b.useRef()
              , wt = b.useRef(N)
              , fr = b.useRef()
              , Qn = b.useRef(!1)
              , Ir = O(function() {
                return fr.current && N === wt.current ? fr.current : K($.getState(), N)
            }, [$, Xe, N]);
            yv(CN, [wt, dr, Qn, N, Ir, fr, we]),
            yv(EN, [d, $, oe, K, wt, dr, Qn, fr, we, xt], [$, oe, K]);
            var xn = b.useMemo(function() {
                return R.createElement(S, V({}, Ir, {
                    ref: q
                }))
            }, [q, S, Ir])
              , wn = b.useMemo(function() {
                return d ? R.createElement(T.Provider, {
                    value: ee
                }, xn) : xn
            }, [T, xn, ee]);
            return wn
        }
        var j = D ? R.memo(F) : F;
        if (j.WrappedComponent = S,
        j.displayName = F.displayName = C,
        m) {
            var W = R.forwardRef(function(G, _) {
                return R.createElement(j, V({}, G, {
                    reactReduxForwardedRef: _
                }))
            });
            return W.displayName = C,
            W.WrappedComponent = S,
            gv(W, S)
        }
        return gv(j, S)
    }
}
function xv(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
}
function _u(e, t) {
    if (xv(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var r = Object.keys(e)
      , n = Object.keys(t);
    if (r.length !== n.length)
        return !1;
    for (var o = 0; o < r.length; o++)
        if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !xv(e[r[o]], t[r[o]]))
            return !1;
    return !0
}
function NN(e, t) {
    var r = {}
      , n = function(a) {
        var s = e[a];
        typeof s == "function" && (r[a] = function() {
            return t(s.apply(void 0, arguments))
        }
        )
    };
    for (var o in e)
        n(o);
    return r
}
function Ff(e) {
    return function(r, n) {
        var o = e(r, n);
        function i() {
            return o
        }
        return i.dependsOnOwnProps = !1,
        i
    }
}
function wv(e) {
    return e.dependsOnOwnProps !== null && e.dependsOnOwnProps !== void 0 ? !!e.dependsOnOwnProps : e.length !== 1
}
function bx(e, t) {
    return function(n, o) {
        o.displayName;
        var i = function(s, l) {
            return i.dependsOnOwnProps ? i.mapToProps(s, l) : i.mapToProps(s)
        };
        return i.dependsOnOwnProps = !0,
        i.mapToProps = function(s, l) {
            i.mapToProps = e,
            i.dependsOnOwnProps = wv(e);
            var u = i(s, l);
            return typeof u == "function" && (i.mapToProps = u,
            i.dependsOnOwnProps = wv(u),
            u = i(s, l)),
            u
        }
        ,
        i
    }
}
function IN(e) {
    return typeof e == "function" ? bx(e) : void 0
}
function kN(e) {
    return e ? void 0 : Ff(function(t) {
        return {
            dispatch: t
        }
    })
}
function TN(e) {
    return e && typeof e == "object" ? Ff(function(t) {
        return NN(e, t)
    }) : void 0
}
const RN = [IN, kN, TN];
function ON(e) {
    return typeof e == "function" ? bx(e) : void 0
}
function AN(e) {
    return e ? void 0 : Ff(function() {
        return {}
    })
}
const MN = [ON, AN];
function LN(e, t, r) {
    return V({}, r, e, t)
}
function jN(e) {
    return function(r, n) {
        n.displayName;
        var o = n.pure, i = n.areMergedPropsEqual, a = !1, s;
        return function(u, d, c) {
            var f = e(u, d, c);
            return a ? (!o || !i(f, s)) && (s = f) : (a = !0,
            s = f),
            s
        }
    }
}
function BN(e) {
    return typeof e == "function" ? jN(e) : void 0
}
function FN(e) {
    return e ? void 0 : function() {
        return LN
    }
}
const $N = [BN, FN];
var zN = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function _N(e, t, r, n) {
    return function(i, a) {
        return r(e(i, a), t(n, a), a)
    }
}
function UN(e, t, r, n, o) {
    var i = o.areStatesEqual, a = o.areOwnPropsEqual, s = o.areStatePropsEqual, l = !1, u, d, c, f, p;
    function m(y, S) {
        return u = y,
        d = S,
        c = e(u, d),
        f = t(n, d),
        p = r(c, f, d),
        l = !0,
        p
    }
    function v() {
        return c = e(u, d),
        t.dependsOnOwnProps && (f = t(n, d)),
        p = r(c, f, d),
        p
    }
    function x() {
        return e.dependsOnOwnProps && (c = e(u, d)),
        t.dependsOnOwnProps && (f = t(n, d)),
        p = r(c, f, d),
        p
    }
    function g() {
        var y = e(u, d)
          , S = !s(y, c);
        return c = y,
        S && (p = r(c, f, d)),
        p
    }
    function h(y, S) {
        var E = !a(S, d)
          , C = !i(y, u, S, d);
        return u = y,
        d = S,
        E && C ? v() : E ? x() : C ? g() : p
    }
    return function(S, E) {
        return l ? h(S, E) : m(S, E)
    }
}
function WN(e, t) {
    var r = t.initMapStateToProps
      , n = t.initMapDispatchToProps
      , o = t.initMergeProps
      , i = Zs(t, zN)
      , a = r(e, i)
      , s = n(e, i)
      , l = o(e, i)
      , u = i.pure ? UN : _N;
    return u(a, s, l, e, i)
}
var VN = ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"];
function Uu(e, t, r) {
    for (var n = t.length - 1; n >= 0; n--) {
        var o = t[n](e);
        if (o)
            return o
    }
    return function(i, a) {
        throw new Error("Invalid value of type " + typeof e + " for " + r + " argument when connecting component " + a.wrappedComponentName + ".")
    }
}
function HN(e, t) {
    return e === t
}
function GN(e) {
    var t = e === void 0 ? {} : e
      , r = t.connectHOC
      , n = r === void 0 ? DN : r
      , o = t.mapStateToPropsFactories
      , i = o === void 0 ? MN : o
      , a = t.mapDispatchToPropsFactories
      , s = a === void 0 ? RN : a
      , l = t.mergePropsFactories
      , u = l === void 0 ? $N : l
      , d = t.selectorFactory
      , c = d === void 0 ? WN : d;
    return function(p, m, v, x) {
        x === void 0 && (x = {});
        var g = x
          , h = g.pure
          , y = h === void 0 ? !0 : h
          , S = g.areStatesEqual
          , E = S === void 0 ? HN : S
          , C = g.areOwnPropsEqual
          , P = C === void 0 ? _u : C
          , D = g.areStatePropsEqual
          , k = D === void 0 ? _u : D
          , O = g.areMergedPropsEqual
          , F = O === void 0 ? _u : O
          , j = Zs(g, VN)
          , W = Uu(p, i, "mapStateToProps")
          , A = Uu(m, s, "mapDispatchToProps")
          , G = Uu(v, u, "mergeProps");
        return n(c, V({
            methodName: "connect",
            getDisplayName: function(q) {
                return "Connect(" + q + ")"
            },
            shouldHandleStateChanges: !!p,
            initMapStateToProps: W,
            initMapDispatchToProps: A,
            initMergeProps: G,
            pure: y,
            areStatesEqual: E,
            areOwnPropsEqual: P,
            areStatePropsEqual: k,
            areMergedPropsEqual: F
        }, j))
    }
}
const Sx = GN();
WD(Go.unstable_batchedUpdates);
function qN(e, t) {
    if (e.length !== t.length)
        return !1;
    for (var r = 0; r < e.length; r++)
        if (e[r] !== t[r])
            return !1;
    return !0
}
function Cx(e, t) {
    var r = b.useState(function() {
        return {
            inputs: t,
            result: e()
        }
    })[0]
      , n = b.useRef(!0)
      , o = b.useRef(r)
      , i = n.current || !!(t && o.current.inputs && qN(t, o.current.inputs))
      , a = i ? o.current : {
        inputs: t,
        result: e()
    };
    return b.useEffect(function() {
        n.current = !1,
        o.current = a
    }, [a]),
    a.result
}
function KN(e, t) {
    return Cx(function() {
        return e
    }, t)
}
var te = Cx
  , U = KN
  , QN = "Invariant failed";
function YN(e, t) {
    throw new Error(QN)
}
var Ht = function(t) {
    var r = t.top
      , n = t.right
      , o = t.bottom
      , i = t.left
      , a = n - i
      , s = o - r
      , l = {
        top: r,
        right: n,
        bottom: o,
        left: i,
        width: a,
        height: s,
        x: i,
        y: r,
        center: {
            x: (n + i) / 2,
            y: (o + r) / 2
        }
    };
    return l
}
  , $f = function(t, r) {
    return {
        top: t.top - r.top,
        left: t.left - r.left,
        bottom: t.bottom + r.bottom,
        right: t.right + r.right
    }
}
  , bv = function(t, r) {
    return {
        top: t.top + r.top,
        left: t.left + r.left,
        bottom: t.bottom - r.bottom,
        right: t.right - r.right
    }
}
  , XN = function(t, r) {
    return {
        top: t.top + r.y,
        left: t.left + r.x,
        bottom: t.bottom + r.y,
        right: t.right + r.x
    }
}
  , Wu = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
}
  , zf = function(t) {
    var r = t.borderBox
      , n = t.margin
      , o = n === void 0 ? Wu : n
      , i = t.border
      , a = i === void 0 ? Wu : i
      , s = t.padding
      , l = s === void 0 ? Wu : s
      , u = Ht($f(r, o))
      , d = Ht(bv(r, a))
      , c = Ht(bv(d, l));
    return {
        marginBox: u,
        borderBox: Ht(r),
        paddingBox: d,
        contentBox: c,
        margin: o,
        border: a,
        padding: l
    }
}
  , Ct = function(t) {
    var r = t.slice(0, -2)
      , n = t.slice(-2);
    if (n !== "px")
        return 0;
    var o = Number(r);
    return isNaN(o) && YN(),
    o
}
  , JN = function() {
    return {
        x: window.pageXOffset,
        y: window.pageYOffset
    }
}
  , el = function(t, r) {
    var n = t.borderBox
      , o = t.border
      , i = t.margin
      , a = t.padding
      , s = XN(n, r);
    return zf({
        borderBox: s,
        border: o,
        margin: i,
        padding: a
    })
}
  , tl = function(t, r) {
    return r === void 0 && (r = JN()),
    el(t, r)
}
  , Ex = function(t, r) {
    var n = {
        top: Ct(r.marginTop),
        right: Ct(r.marginRight),
        bottom: Ct(r.marginBottom),
        left: Ct(r.marginLeft)
    }
      , o = {
        top: Ct(r.paddingTop),
        right: Ct(r.paddingRight),
        bottom: Ct(r.paddingBottom),
        left: Ct(r.paddingLeft)
    }
      , i = {
        top: Ct(r.borderTopWidth),
        right: Ct(r.borderRightWidth),
        bottom: Ct(r.borderBottomWidth),
        left: Ct(r.borderLeftWidth)
    };
    return zf({
        borderBox: t,
        margin: n,
        padding: o,
        border: i
    })
}
  , Px = function(t) {
    var r = t.getBoundingClientRect()
      , n = window.getComputedStyle(t);
    return Ex(r, n)
}
  , Sv = Number.isNaN || function(t) {
    return typeof t == "number" && t !== t
}
;
function ZN(e, t) {
    return !!(e === t || Sv(e) && Sv(t))
}
function eI(e, t) {
    if (e.length !== t.length)
        return !1;
    for (var r = 0; r < e.length; r++)
        if (!ZN(e[r], t[r]))
            return !1;
    return !0
}
function ke(e, t) {
    t === void 0 && (t = eI);
    var r, n = [], o, i = !1;
    function a() {
        for (var s = [], l = 0; l < arguments.length; l++)
            s[l] = arguments[l];
        return i && r === this && t(s, n) || (o = e.apply(this, s),
        i = !0,
        r = this,
        n = s),
        o
    }
    return a
}
var ta = function(t) {
    var r = []
      , n = null
      , o = function() {
        for (var a = arguments.length, s = new Array(a), l = 0; l < a; l++)
            s[l] = arguments[l];
        r = s,
        !n && (n = requestAnimationFrame(function() {
            n = null,
            t.apply(void 0, r)
        }))
    };
    return o.cancel = function() {
        n && (cancelAnimationFrame(n),
        n = null)
    }
    ,
    o
};
function Dx(e, t) {}
Dx.bind(null, "warn");
Dx.bind(null, "error");
function nn() {}
function tI(e, t) {
    return V({}, e, {}, t)
}
function It(e, t, r) {
    var n = t.map(function(o) {
        var i = tI(r, o.options);
        return e.addEventListener(o.eventName, o.fn, i),
        function() {
            e.removeEventListener(o.eventName, o.fn, i)
        }
    });
    return function() {
        n.forEach(function(i) {
            i()
        })
    }
}
var rI = "Invariant failed";
function rl(e) {
    this.message = e
}
rl.prototype.toString = function() {
    return this.message
}
;
function L(e, t) {
    throw new rl(rI)
}
var nI = function(e) {
    ox(t, e);
    function t() {
        for (var n, o = arguments.length, i = new Array(o), a = 0; a < o; a++)
            i[a] = arguments[a];
        return n = e.call.apply(e, [this].concat(i)) || this,
        n.callbacks = null,
        n.unbind = nn,
        n.onWindowError = function(s) {
            var l = n.getCallbacks();
            l.isDragging() && l.tryAbort();
            var u = s.error;
            u instanceof rl && s.preventDefault()
        }
        ,
        n.getCallbacks = function() {
            if (!n.callbacks)
                throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
            return n.callbacks
        }
        ,
        n.setCallbacks = function(s) {
            n.callbacks = s
        }
        ,
        n
    }
    var r = t.prototype;
    return r.componentDidMount = function() {
        this.unbind = It(window, [{
            eventName: "error",
            fn: this.onWindowError
        }])
    }
    ,
    r.componentDidCatch = function(o) {
        if (o instanceof rl) {
            this.setState({});
            return
        }
        throw o
    }
    ,
    r.componentWillUnmount = function() {
        this.unbind()
    }
    ,
    r.render = function() {
        return this.props.children(this.setCallbacks)
    }
    ,
    t
}(R.Component)
  , oI = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`
  , nl = function(t) {
    return t + 1
}
  , iI = function(t) {
    return `
  You have lifted an item in position ` + nl(t.source.index) + `
`
}
  , Nx = function(t, r) {
    var n = t.droppableId === r.droppableId
      , o = nl(t.index)
      , i = nl(r.index);
    return n ? `
      You have moved the item from position ` + o + `
      to position ` + i + `
    ` : `
    You have moved the item from position ` + o + `
    in list ` + t.droppableId + `
    to list ` + r.droppableId + `
    in position ` + i + `
  `
}
  , Ix = function(t, r, n) {
    var o = r.droppableId === n.droppableId;
    return o ? `
      The item ` + t + `
      has been combined with ` + n.draggableId : `
      The item ` + t + `
      in list ` + r.droppableId + `
      has been combined with ` + n.draggableId + `
      in list ` + n.droppableId + `
    `
}
  , aI = function(t) {
    var r = t.destination;
    if (r)
        return Nx(t.source, r);
    var n = t.combine;
    return n ? Ix(t.draggableId, t.source, n) : "You are over an area that cannot be dropped on"
}
  , Cv = function(t) {
    return `
  The item has returned to its starting position
  of ` + nl(t.index) + `
`
}
  , sI = function(t) {
    if (t.reason === "CANCEL")
        return `
      Movement cancelled.
      ` + Cv(t.source) + `
    `;
    var r = t.destination
      , n = t.combine;
    return r ? `
      You have dropped the item.
      ` + Nx(t.source, r) + `
    ` : n ? `
      You have dropped the item.
      ` + Ix(t.draggableId, t.source, n) + `
    ` : `
    The item has been dropped while not over a drop area.
    ` + Cv(t.source) + `
  `
}
  , ys = {
    dragHandleUsageInstructions: oI,
    onDragStart: iI,
    onDragUpdate: aI,
    onDragEnd: sI
}
  , Te = {
    x: 0,
    y: 0
}
  , Me = function(t, r) {
    return {
        x: t.x + r.x,
        y: t.y + r.y
    }
}
  , ut = function(t, r) {
    return {
        x: t.x - r.x,
        y: t.y - r.y
    }
}
  , on = function(t, r) {
    return t.x === r.x && t.y === r.y
}
  , Xo = function(t) {
    return {
        x: t.x !== 0 ? -t.x : 0,
        y: t.y !== 0 ? -t.y : 0
    }
}
  , Vn = function(t, r, n) {
    var o;
    return n === void 0 && (n = 0),
    o = {},
    o[t] = r,
    o[t === "x" ? "y" : "x"] = n,
    o
}
  , ra = function(t, r) {
    return Math.sqrt(Math.pow(r.x - t.x, 2) + Math.pow(r.y - t.y, 2))
}
  , Ev = function(t, r) {
    return Math.min.apply(Math, r.map(function(n) {
        return ra(t, n)
    }))
}
  , kx = function(t) {
    return function(r) {
        return {
            x: t(r.x),
            y: t(r.y)
        }
    }
}
  , lI = function(e, t) {
    var r = Ht({
        top: Math.max(t.top, e.top),
        right: Math.min(t.right, e.right),
        bottom: Math.min(t.bottom, e.bottom),
        left: Math.max(t.left, e.left)
    });
    return r.width <= 0 || r.height <= 0 ? null : r
}
  , Da = function(t, r) {
    return {
        top: t.top + r.y,
        left: t.left + r.x,
        bottom: t.bottom + r.y,
        right: t.right + r.x
    }
}
  , Pv = function(t) {
    return [{
        x: t.left,
        y: t.top
    }, {
        x: t.right,
        y: t.top
    }, {
        x: t.left,
        y: t.bottom
    }, {
        x: t.right,
        y: t.bottom
    }]
}
  , uI = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
}
  , cI = function(t, r) {
    return r ? Da(t, r.scroll.diff.displacement) : t
}
  , dI = function(t, r, n) {
    if (n && n.increasedBy) {
        var o;
        return V({}, t, (o = {},
        o[r.end] = t[r.end] + n.increasedBy[r.line],
        o))
    }
    return t
}
  , fI = function(t, r) {
    return r && r.shouldClipSubject ? lI(r.pageMarginBox, t) : Ht(t)
}
  , zo = function(e) {
    var t = e.page
      , r = e.withPlaceholder
      , n = e.axis
      , o = e.frame
      , i = cI(t.marginBox, o)
      , a = dI(i, n, r)
      , s = fI(a, o);
    return {
        page: t,
        withPlaceholder: r,
        active: s
    }
}
  , _f = function(e, t) {
    e.frame || L();
    var r = e.frame
      , n = ut(t, r.scroll.initial)
      , o = Xo(n)
      , i = V({}, r, {
        scroll: {
            initial: r.scroll.initial,
            current: t,
            diff: {
                value: n,
                displacement: o
            },
            max: r.scroll.max
        }
    })
      , a = zo({
        page: e.subject.page,
        withPlaceholder: e.subject.withPlaceholder,
        axis: e.axis,
        frame: i
    })
      , s = V({}, e, {
        frame: i,
        subject: a
    });
    return s
};
function ol(e) {
    return Object.values ? Object.values(e) : Object.keys(e).map(function(t) {
        return e[t]
    })
}
function Uf(e, t) {
    if (e.findIndex)
        return e.findIndex(t);
    for (var r = 0; r < e.length; r++)
        if (t(e[r]))
            return r;
    return -1
}
function yn(e, t) {
    if (e.find)
        return e.find(t);
    var r = Uf(e, t);
    if (r !== -1)
        return e[r]
}
function Tx(e) {
    return Array.prototype.slice.call(e)
}
var Rx = ke(function(e) {
    return e.reduce(function(t, r) {
        return t[r.descriptor.id] = r,
        t
    }, {})
})
  , Ox = ke(function(e) {
    return e.reduce(function(t, r) {
        return t[r.descriptor.id] = r,
        t
    }, {})
})
  , ql = ke(function(e) {
    return ol(e)
})
  , pI = ke(function(e) {
    return ol(e)
})
  , Jo = ke(function(e, t) {
    var r = pI(t).filter(function(n) {
        return e === n.descriptor.droppableId
    }).sort(function(n, o) {
        return n.descriptor.index - o.descriptor.index
    });
    return r
});
function Wf(e) {
    return e.at && e.at.type === "REORDER" ? e.at.destination : null
}
function Kl(e) {
    return e.at && e.at.type === "COMBINE" ? e.at.combine : null
}
var Ql = ke(function(e, t) {
    return t.filter(function(r) {
        return r.descriptor.id !== e.descriptor.id
    })
})
  , mI = function(e) {
    var t = e.isMovingForward
      , r = e.draggable
      , n = e.destination
      , o = e.insideDestination
      , i = e.previousImpact;
    if (!n.isCombineEnabled)
        return null;
    var a = Wf(i);
    if (!a)
        return null;
    function s(v) {
        var x = {
            type: "COMBINE",
            combine: {
                draggableId: v,
                droppableId: n.descriptor.id
            }
        };
        return V({}, i, {
            at: x
        })
    }
    var l = i.displaced.all
      , u = l.length ? l[0] : null;
    if (t)
        return u ? s(u) : null;
    var d = Ql(r, o);
    if (!u) {
        if (!d.length)
            return null;
        var c = d[d.length - 1];
        return s(c.descriptor.id)
    }
    var f = Uf(d, function(v) {
        return v.descriptor.id === u
    });
    f === -1 && L();
    var p = f - 1;
    if (p < 0)
        return null;
    var m = d[p];
    return s(m.descriptor.id)
}
  , Zo = function(e, t) {
    return e.descriptor.droppableId === t.descriptor.id
}
  , Ax = {
    point: Te,
    value: 0
}
  , na = {
    invisible: {},
    visible: {},
    all: []
}
  , vI = {
    displaced: na,
    displacedBy: Ax,
    at: null
}
  , Tt = function(e, t) {
    return function(r) {
        return e <= r && r <= t
    }
}
  , Mx = function(e) {
    var t = Tt(e.top, e.bottom)
      , r = Tt(e.left, e.right);
    return function(n) {
        var o = t(n.top) && t(n.bottom) && r(n.left) && r(n.right);
        if (o)
            return !0;
        var i = t(n.top) || t(n.bottom)
          , a = r(n.left) || r(n.right)
          , s = i && a;
        if (s)
            return !0;
        var l = n.top < e.top && n.bottom > e.bottom
          , u = n.left < e.left && n.right > e.right
          , d = l && u;
        if (d)
            return !0;
        var c = l && a || u && i;
        return c
    }
}
  , hI = function(e) {
    var t = Tt(e.top, e.bottom)
      , r = Tt(e.left, e.right);
    return function(n) {
        var o = t(n.top) && t(n.bottom) && r(n.left) && r(n.right);
        return o
    }
}
  , Vf = {
    direction: "vertical",
    line: "y",
    crossAxisLine: "x",
    start: "top",
    end: "bottom",
    size: "height",
    crossAxisStart: "left",
    crossAxisEnd: "right",
    crossAxisSize: "width"
}
  , Lx = {
    direction: "horizontal",
    line: "x",
    crossAxisLine: "y",
    start: "left",
    end: "right",
    size: "width",
    crossAxisStart: "top",
    crossAxisEnd: "bottom",
    crossAxisSize: "height"
}
  , gI = function(e) {
    return function(t) {
        var r = Tt(t.top, t.bottom)
          , n = Tt(t.left, t.right);
        return function(o) {
            return e === Vf ? r(o.top) && r(o.bottom) : n(o.left) && n(o.right)
        }
    }
}
  , yI = function(t, r) {
    var n = r.frame ? r.frame.scroll.diff.displacement : Te;
    return Da(t, n)
}
  , xI = function(t, r, n) {
    return r.subject.active ? n(r.subject.active)(t) : !1
}
  , wI = function(t, r, n) {
    return n(r)(t)
}
  , Hf = function(t) {
    var r = t.target
      , n = t.destination
      , o = t.viewport
      , i = t.withDroppableDisplacement
      , a = t.isVisibleThroughFrameFn
      , s = i ? yI(r, n) : r;
    return xI(s, n, a) && wI(s, o, a)
}
  , bI = function(t) {
    return Hf(V({}, t, {
        isVisibleThroughFrameFn: Mx
    }))
}
  , jx = function(t) {
    return Hf(V({}, t, {
        isVisibleThroughFrameFn: hI
    }))
}
  , SI = function(t) {
    return Hf(V({}, t, {
        isVisibleThroughFrameFn: gI(t.destination.axis)
    }))
}
  , CI = function(t, r, n) {
    if (typeof n == "boolean")
        return n;
    if (!r)
        return !0;
    var o = r.invisible
      , i = r.visible;
    if (o[t])
        return !1;
    var a = i[t];
    return a ? a.shouldAnimate : !0
};
function EI(e, t) {
    var r = e.page.marginBox
      , n = {
        top: t.point.y,
        right: 0,
        bottom: 0,
        left: t.point.x
    };
    return Ht($f(r, n))
}
function oa(e) {
    var t = e.afterDragging
      , r = e.destination
      , n = e.displacedBy
      , o = e.viewport
      , i = e.forceShouldAnimate
      , a = e.last;
    return t.reduce(function(l, u) {
        var d = EI(u, n)
          , c = u.descriptor.id;
        l.all.push(c);
        var f = bI({
            target: d,
            destination: r,
            viewport: o,
            withDroppableDisplacement: !0
        });
        if (!f)
            return l.invisible[u.descriptor.id] = !0,
            l;
        var p = CI(c, a, i)
          , m = {
            draggableId: c,
            shouldAnimate: p
        };
        return l.visible[c] = m,
        l
    }, {
        all: [],
        visible: {},
        invisible: {}
    })
}
function PI(e, t) {
    if (!e.length)
        return 0;
    var r = e[e.length - 1].descriptor.index;
    return t.inHomeList ? r : r + 1
}
function Dv(e) {
    var t = e.insideDestination
      , r = e.inHomeList
      , n = e.displacedBy
      , o = e.destination
      , i = PI(t, {
        inHomeList: r
    });
    return {
        displaced: na,
        displacedBy: n,
        at: {
            type: "REORDER",
            destination: {
                droppableId: o.descriptor.id,
                index: i
            }
        }
    }
}
function il(e) {
    var t = e.draggable
      , r = e.insideDestination
      , n = e.destination
      , o = e.viewport
      , i = e.displacedBy
      , a = e.last
      , s = e.index
      , l = e.forceShouldAnimate
      , u = Zo(t, n);
    if (s == null)
        return Dv({
            insideDestination: r,
            inHomeList: u,
            displacedBy: i,
            destination: n
        });
    var d = yn(r, function(v) {
        return v.descriptor.index === s
    });
    if (!d)
        return Dv({
            insideDestination: r,
            inHomeList: u,
            displacedBy: i,
            destination: n
        });
    var c = Ql(t, r)
      , f = r.indexOf(d)
      , p = c.slice(f)
      , m = oa({
        afterDragging: p,
        destination: n,
        displacedBy: i,
        last: a,
        viewport: o.frame,
        forceShouldAnimate: l
    });
    return {
        displaced: m,
        displacedBy: i,
        at: {
            type: "REORDER",
            destination: {
                droppableId: n.descriptor.id,
                index: s
            }
        }
    }
}
function pn(e, t) {
    return !!t.effected[e]
}
var DI = function(e) {
    var t = e.isMovingForward
      , r = e.destination
      , n = e.draggables
      , o = e.combine
      , i = e.afterCritical;
    if (!r.isCombineEnabled)
        return null;
    var a = o.draggableId
      , s = n[a]
      , l = s.descriptor.index
      , u = pn(a, i);
    return u ? t ? l : l - 1 : t ? l + 1 : l
}
  , NI = function(e) {
    var t = e.isMovingForward
      , r = e.isInHomeList
      , n = e.insideDestination
      , o = e.location;
    if (!n.length)
        return null;
    var i = o.index
      , a = t ? i + 1 : i - 1
      , s = n[0].descriptor.index
      , l = n[n.length - 1].descriptor.index
      , u = r ? l : l + 1;
    return a < s || a > u ? null : a
}
  , II = function(e) {
    var t = e.isMovingForward
      , r = e.isInHomeList
      , n = e.draggable
      , o = e.draggables
      , i = e.destination
      , a = e.insideDestination
      , s = e.previousImpact
      , l = e.viewport
      , u = e.afterCritical
      , d = s.at;
    if (d || L(),
    d.type === "REORDER") {
        var c = NI({
            isMovingForward: t,
            isInHomeList: r,
            location: d.destination,
            insideDestination: a
        });
        return c == null ? null : il({
            draggable: n,
            insideDestination: a,
            destination: i,
            viewport: l,
            last: s.displaced,
            displacedBy: s.displacedBy,
            index: c
        })
    }
    var f = DI({
        isMovingForward: t,
        destination: i,
        displaced: s.displaced,
        draggables: o,
        combine: d.combine,
        afterCritical: u
    });
    return f == null ? null : il({
        draggable: n,
        insideDestination: a,
        destination: i,
        viewport: l,
        last: s.displaced,
        displacedBy: s.displacedBy,
        index: f
    })
}
  , kI = function(e) {
    var t = e.displaced
      , r = e.afterCritical
      , n = e.combineWith
      , o = e.displacedBy
      , i = !!(t.visible[n] || t.invisible[n]);
    return pn(n, r) ? i ? Te : Xo(o.point) : i ? o.point : Te
}
  , TI = function(e) {
    var t = e.afterCritical
      , r = e.impact
      , n = e.draggables
      , o = Kl(r);
    o || L();
    var i = o.draggableId
      , a = n[i].page.borderBox.center
      , s = kI({
        displaced: r.displaced,
        afterCritical: t,
        combineWith: i,
        displacedBy: r.displacedBy
    });
    return Me(a, s)
}
  , Bx = function(t, r) {
    return r.margin[t.start] + r.borderBox[t.size] / 2
}
  , RI = function(t, r) {
    return r.margin[t.end] + r.borderBox[t.size] / 2
}
  , Gf = function(t, r, n) {
    return r[t.crossAxisStart] + n.margin[t.crossAxisStart] + n.borderBox[t.crossAxisSize] / 2
}
  , Nv = function(t) {
    var r = t.axis
      , n = t.moveRelativeTo
      , o = t.isMoving;
    return Vn(r.line, n.marginBox[r.end] + Bx(r, o), Gf(r, n.marginBox, o))
}
  , Iv = function(t) {
    var r = t.axis
      , n = t.moveRelativeTo
      , o = t.isMoving;
    return Vn(r.line, n.marginBox[r.start] - RI(r, o), Gf(r, n.marginBox, o))
}
  , OI = function(t) {
    var r = t.axis
      , n = t.moveInto
      , o = t.isMoving;
    return Vn(r.line, n.contentBox[r.start] + Bx(r, o), Gf(r, n.contentBox, o))
}
  , AI = function(e) {
    var t = e.impact
      , r = e.draggable
      , n = e.draggables
      , o = e.droppable
      , i = e.afterCritical
      , a = Jo(o.descriptor.id, n)
      , s = r.page
      , l = o.axis;
    if (!a.length)
        return OI({
            axis: l,
            moveInto: o.page,
            isMoving: s
        });
    var u = t.displaced
      , d = t.displacedBy
      , c = u.all[0];
    if (c) {
        var f = n[c];
        if (pn(c, i))
            return Iv({
                axis: l,
                moveRelativeTo: f.page,
                isMoving: s
            });
        var p = el(f.page, d.point);
        return Iv({
            axis: l,
            moveRelativeTo: p,
            isMoving: s
        })
    }
    var m = a[a.length - 1];
    if (m.descriptor.id === r.descriptor.id)
        return s.borderBox.center;
    if (pn(m.descriptor.id, i)) {
        var v = el(m.page, Xo(i.displacedBy.point));
        return Nv({
            axis: l,
            moveRelativeTo: v,
            isMoving: s
        })
    }
    return Nv({
        axis: l,
        moveRelativeTo: m.page,
        isMoving: s
    })
}
  , ud = function(e, t) {
    var r = e.frame;
    return r ? Me(t, r.scroll.diff.displacement) : t
}
  , MI = function(t) {
    var r = t.impact
      , n = t.draggable
      , o = t.droppable
      , i = t.draggables
      , a = t.afterCritical
      , s = n.page.borderBox.center
      , l = r.at;
    return !o || !l ? s : l.type === "REORDER" ? AI({
        impact: r,
        draggable: n,
        draggables: i,
        droppable: o,
        afterCritical: a
    }) : TI({
        impact: r,
        draggables: i,
        afterCritical: a
    })
}
  , Yl = function(e) {
    var t = MI(e)
      , r = e.droppable
      , n = r ? ud(r, t) : t;
    return n
}
  , Fx = function(e, t) {
    var r = ut(t, e.scroll.initial)
      , n = Xo(r)
      , o = Ht({
        top: t.y,
        bottom: t.y + e.frame.height,
        left: t.x,
        right: t.x + e.frame.width
    })
      , i = {
        frame: o,
        scroll: {
            initial: e.scroll.initial,
            max: e.scroll.max,
            current: t,
            diff: {
                value: r,
                displacement: n
            }
        }
    };
    return i
};
function kv(e, t) {
    return e.map(function(r) {
        return t[r]
    })
}
function LI(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r].visible[e];
        if (n)
            return n
    }
    return null
}
var jI = function(e) {
    var t = e.impact
      , r = e.viewport
      , n = e.destination
      , o = e.draggables
      , i = e.maxScrollChange
      , a = Fx(r, Me(r.scroll.current, i))
      , s = n.frame ? _f(n, Me(n.frame.scroll.current, i)) : n
      , l = t.displaced
      , u = oa({
        afterDragging: kv(l.all, o),
        destination: n,
        displacedBy: t.displacedBy,
        viewport: a.frame,
        last: l,
        forceShouldAnimate: !1
    })
      , d = oa({
        afterDragging: kv(l.all, o),
        destination: s,
        displacedBy: t.displacedBy,
        viewport: r.frame,
        last: l,
        forceShouldAnimate: !1
    })
      , c = {}
      , f = {}
      , p = [l, u, d];
    l.all.forEach(function(v) {
        var x = LI(v, p);
        if (x) {
            f[v] = x;
            return
        }
        c[v] = !0
    });
    var m = V({}, t, {
        displaced: {
            all: l.all,
            invisible: c,
            visible: f
        }
    });
    return m
}
  , BI = function(e, t) {
    return Me(e.scroll.diff.displacement, t)
}
  , qf = function(e) {
    var t = e.pageBorderBoxCenter
      , r = e.draggable
      , n = e.viewport
      , o = BI(n, t)
      , i = ut(o, r.page.borderBox.center);
    return Me(r.client.borderBox.center, i)
}
  , $x = function(e) {
    var t = e.draggable
      , r = e.destination
      , n = e.newPageBorderBoxCenter
      , o = e.viewport
      , i = e.withDroppableDisplacement
      , a = e.onlyOnMainAxis
      , s = a === void 0 ? !1 : a
      , l = ut(n, t.page.borderBox.center)
      , u = Da(t.page.borderBox, l)
      , d = {
        target: u,
        destination: r,
        withDroppableDisplacement: i,
        viewport: o
    };
    return s ? SI(d) : jx(d)
}
  , FI = function(e) {
    var t = e.isMovingForward
      , r = e.draggable
      , n = e.destination
      , o = e.draggables
      , i = e.previousImpact
      , a = e.viewport
      , s = e.previousPageBorderBoxCenter
      , l = e.previousClientSelection
      , u = e.afterCritical;
    if (!n.isEnabled)
        return null;
    var d = Jo(n.descriptor.id, o)
      , c = Zo(r, n)
      , f = mI({
        isMovingForward: t,
        draggable: r,
        destination: n,
        insideDestination: d,
        previousImpact: i
    }) || II({
        isMovingForward: t,
        isInHomeList: c,
        draggable: r,
        draggables: o,
        destination: n,
        insideDestination: d,
        previousImpact: i,
        viewport: a,
        afterCritical: u
    });
    if (!f)
        return null;
    var p = Yl({
        impact: f,
        draggable: r,
        droppable: n,
        draggables: o,
        afterCritical: u
    })
      , m = $x({
        draggable: r,
        destination: n,
        newPageBorderBoxCenter: p,
        viewport: a.frame,
        withDroppableDisplacement: !1,
        onlyOnMainAxis: !0
    });
    if (m) {
        var v = qf({
            pageBorderBoxCenter: p,
            draggable: r,
            viewport: a
        });
        return {
            clientSelection: v,
            impact: f,
            scrollJumpRequest: null
        }
    }
    var x = ut(p, s)
      , g = jI({
        impact: f,
        viewport: a,
        destination: n,
        draggables: o,
        maxScrollChange: x
    });
    return {
        clientSelection: l,
        impact: g,
        scrollJumpRequest: x
    }
}
  , Ve = function(t) {
    var r = t.subject.active;
    return r || L(),
    r
}
  , $I = function(e) {
    var t = e.isMovingForward
      , r = e.pageBorderBoxCenter
      , n = e.source
      , o = e.droppables
      , i = e.viewport
      , a = n.subject.active;
    if (!a)
        return null;
    var s = n.axis
      , l = Tt(a[s.start], a[s.end])
      , u = ql(o).filter(function(c) {
        return c !== n
    }).filter(function(c) {
        return c.isEnabled
    }).filter(function(c) {
        return !!c.subject.active
    }).filter(function(c) {
        return Mx(i.frame)(Ve(c))
    }).filter(function(c) {
        var f = Ve(c);
        return t ? a[s.crossAxisEnd] < f[s.crossAxisEnd] : f[s.crossAxisStart] < a[s.crossAxisStart]
    }).filter(function(c) {
        var f = Ve(c)
          , p = Tt(f[s.start], f[s.end]);
        return l(f[s.start]) || l(f[s.end]) || p(a[s.start]) || p(a[s.end])
    }).sort(function(c, f) {
        var p = Ve(c)[s.crossAxisStart]
          , m = Ve(f)[s.crossAxisStart];
        return t ? p - m : m - p
    }).filter(function(c, f, p) {
        return Ve(c)[s.crossAxisStart] === Ve(p[0])[s.crossAxisStart]
    });
    if (!u.length)
        return null;
    if (u.length === 1)
        return u[0];
    var d = u.filter(function(c) {
        var f = Tt(Ve(c)[s.start], Ve(c)[s.end]);
        return f(r[s.line])
    });
    return d.length === 1 ? d[0] : d.length > 1 ? d.sort(function(c, f) {
        return Ve(c)[s.start] - Ve(f)[s.start]
    })[0] : u.sort(function(c, f) {
        var p = Ev(r, Pv(Ve(c)))
          , m = Ev(r, Pv(Ve(f)));
        return p !== m ? p - m : Ve(c)[s.start] - Ve(f)[s.start]
    })[0]
}
  , Tv = function(t, r) {
    var n = t.page.borderBox.center;
    return pn(t.descriptor.id, r) ? ut(n, r.displacedBy.point) : n
}
  , zI = function(t, r) {
    var n = t.page.borderBox;
    return pn(t.descriptor.id, r) ? Da(n, Xo(r.displacedBy.point)) : n
}
  , _I = function(e) {
    var t = e.pageBorderBoxCenter
      , r = e.viewport
      , n = e.destination
      , o = e.insideDestination
      , i = e.afterCritical
      , a = o.filter(function(s) {
        return jx({
            target: zI(s, i),
            destination: n,
            viewport: r.frame,
            withDroppableDisplacement: !0
        })
    }).sort(function(s, l) {
        var u = ra(t, ud(n, Tv(s, i)))
          , d = ra(t, ud(n, Tv(l, i)));
        return u < d ? -1 : d < u ? 1 : s.descriptor.index - l.descriptor.index
    });
    return a[0] || null
}
  , Na = ke(function(t, r) {
    var n = r[t.line];
    return {
        value: n,
        point: Vn(t.line, n)
    }
})
  , UI = function(t, r, n) {
    var o = t.axis;
    if (t.descriptor.mode === "virtual")
        return Vn(o.line, r[o.line]);
    var i = t.subject.page.contentBox[o.size]
      , a = Jo(t.descriptor.id, n)
      , s = a.reduce(function(d, c) {
        return d + c.client.marginBox[o.size]
    }, 0)
      , l = s + r[o.line]
      , u = l - i;
    return u <= 0 ? null : Vn(o.line, u)
}
  , zx = function(t, r) {
    return V({}, t, {
        scroll: V({}, t.scroll, {
            max: r
        })
    })
}
  , _x = function(t, r, n) {
    var o = t.frame;
    Zo(r, t) && L(),
    t.subject.withPlaceholder && L();
    var i = Na(t.axis, r.displaceBy).point
      , a = UI(t, i, n)
      , s = {
        placeholderSize: i,
        increasedBy: a,
        oldFrameMaxScroll: t.frame ? t.frame.scroll.max : null
    };
    if (!o) {
        var l = zo({
            page: t.subject.page,
            withPlaceholder: s,
            axis: t.axis,
            frame: t.frame
        });
        return V({}, t, {
            subject: l
        })
    }
    var u = a ? Me(o.scroll.max, a) : o.scroll.max
      , d = zx(o, u)
      , c = zo({
        page: t.subject.page,
        withPlaceholder: s,
        axis: t.axis,
        frame: d
    });
    return V({}, t, {
        subject: c,
        frame: d
    })
}
  , WI = function(t) {
    var r = t.subject.withPlaceholder;
    r || L();
    var n = t.frame;
    if (!n) {
        var o = zo({
            page: t.subject.page,
            axis: t.axis,
            frame: null,
            withPlaceholder: null
        });
        return V({}, t, {
            subject: o
        })
    }
    var i = r.oldFrameMaxScroll;
    i || L();
    var a = zx(n, i)
      , s = zo({
        page: t.subject.page,
        axis: t.axis,
        frame: a,
        withPlaceholder: null
    });
    return V({}, t, {
        subject: s,
        frame: a
    })
}
  , VI = function(e) {
    var t = e.previousPageBorderBoxCenter
      , r = e.moveRelativeTo
      , n = e.insideDestination
      , o = e.draggable
      , i = e.draggables
      , a = e.destination
      , s = e.viewport
      , l = e.afterCritical;
    if (!r) {
        if (n.length)
            return null;
        var u = {
            displaced: na,
            displacedBy: Ax,
            at: {
                type: "REORDER",
                destination: {
                    droppableId: a.descriptor.id,
                    index: 0
                }
            }
        }
          , d = Yl({
            impact: u,
            draggable: o,
            droppable: a,
            draggables: i,
            afterCritical: l
        })
          , c = Zo(o, a) ? a : _x(a, o, i)
          , f = $x({
            draggable: o,
            destination: c,
            newPageBorderBoxCenter: d,
            viewport: s.frame,
            withDroppableDisplacement: !1,
            onlyOnMainAxis: !0
        });
        return f ? u : null
    }
    var p = t[a.axis.line] <= r.page.borderBox.center[a.axis.line]
      , m = function() {
        var x = r.descriptor.index;
        return r.descriptor.id === o.descriptor.id || p ? x : x + 1
    }()
      , v = Na(a.axis, o.displaceBy);
    return il({
        draggable: o,
        insideDestination: n,
        destination: a,
        viewport: s,
        displacedBy: v,
        last: na,
        index: m
    })
}
  , HI = function(e) {
    var t = e.isMovingForward
      , r = e.previousPageBorderBoxCenter
      , n = e.draggable
      , o = e.isOver
      , i = e.draggables
      , a = e.droppables
      , s = e.viewport
      , l = e.afterCritical
      , u = $I({
        isMovingForward: t,
        pageBorderBoxCenter: r,
        source: o,
        droppables: a,
        viewport: s
    });
    if (!u)
        return null;
    var d = Jo(u.descriptor.id, i)
      , c = _I({
        pageBorderBoxCenter: r,
        viewport: s,
        destination: u,
        insideDestination: d,
        afterCritical: l
    })
      , f = VI({
        previousPageBorderBoxCenter: r,
        destination: u,
        draggable: n,
        draggables: i,
        moveRelativeTo: c,
        insideDestination: d,
        viewport: s,
        afterCritical: l
    });
    if (!f)
        return null;
    var p = Yl({
        impact: f,
        draggable: n,
        droppable: u,
        draggables: i,
        afterCritical: l
    })
      , m = qf({
        pageBorderBoxCenter: p,
        draggable: n,
        viewport: s
    });
    return {
        clientSelection: m,
        impact: f,
        scrollJumpRequest: null
    }
}
  , ft = function(e) {
    var t = e.at;
    return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null
}
  , GI = function(t, r) {
    var n = ft(t);
    return n ? r[n] : null
}
  , qI = function(e) {
    var t = e.state
      , r = e.type
      , n = GI(t.impact, t.dimensions.droppables)
      , o = !!n
      , i = t.dimensions.droppables[t.critical.droppable.id]
      , a = n || i
      , s = a.axis.direction
      , l = s === "vertical" && (r === "MOVE_UP" || r === "MOVE_DOWN") || s === "horizontal" && (r === "MOVE_LEFT" || r === "MOVE_RIGHT");
    if (l && !o)
        return null;
    var u = r === "MOVE_DOWN" || r === "MOVE_RIGHT"
      , d = t.dimensions.draggables[t.critical.draggable.id]
      , c = t.current.page.borderBoxCenter
      , f = t.dimensions
      , p = f.draggables
      , m = f.droppables;
    return l ? FI({
        isMovingForward: u,
        previousPageBorderBoxCenter: c,
        draggable: d,
        destination: a,
        draggables: p,
        viewport: t.viewport,
        previousClientSelection: t.current.client.selection,
        previousImpact: t.impact,
        afterCritical: t.afterCritical
    }) : HI({
        isMovingForward: u,
        previousPageBorderBoxCenter: c,
        draggable: d,
        isOver: a,
        draggables: p,
        droppables: m,
        viewport: t.viewport,
        afterCritical: t.afterCritical
    })
};
function Dn(e) {
    return e.phase === "DRAGGING" || e.phase === "COLLECTING"
}
function Ux(e) {
    var t = Tt(e.top, e.bottom)
      , r = Tt(e.left, e.right);
    return function(o) {
        return t(o.y) && r(o.x)
    }
}
function KI(e, t) {
    return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top
}
function QI(e) {
    var t = e.pageBorderBox
      , r = e.draggable
      , n = e.candidates
      , o = r.page.borderBox.center
      , i = n.map(function(a) {
        var s = a.axis
          , l = Vn(a.axis.line, t.center[s.line], a.page.borderBox.center[s.crossAxisLine]);
        return {
            id: a.descriptor.id,
            distance: ra(o, l)
        }
    }).sort(function(a, s) {
        return s.distance - a.distance
    });
    return i[0] ? i[0].id : null
}
function YI(e) {
    var t = e.pageBorderBox
      , r = e.draggable
      , n = e.droppables
      , o = ql(n).filter(function(i) {
        if (!i.isEnabled)
            return !1;
        var a = i.subject.active;
        if (!a || !KI(t, a))
            return !1;
        if (Ux(a)(t.center))
            return !0;
        var s = i.axis
          , l = a.center[s.crossAxisLine]
          , u = t[s.crossAxisStart]
          , d = t[s.crossAxisEnd]
          , c = Tt(a[s.crossAxisStart], a[s.crossAxisEnd])
          , f = c(u)
          , p = c(d);
        return !f && !p ? !0 : f ? u < l : d > l
    });
    return o.length ? o.length === 1 ? o[0].descriptor.id : QI({
        pageBorderBox: t,
        draggable: r,
        candidates: o
    }) : null
}
var Wx = function(t, r) {
    return Ht(Da(t, r))
}
  , XI = function(e, t) {
    var r = e.frame;
    return r ? Wx(t, r.scroll.diff.value) : t
};
function Vx(e) {
    var t = e.displaced
      , r = e.id;
    return !!(t.visible[r] || t.invisible[r])
}
function JI(e) {
    var t = e.draggable
      , r = e.closest
      , n = e.inHomeList;
    return r ? n && r.descriptor.index > t.descriptor.index ? r.descriptor.index - 1 : r.descriptor.index : null
}
var ZI = function(e) {
    var t = e.pageBorderBoxWithDroppableScroll
      , r = e.draggable
      , n = e.destination
      , o = e.insideDestination
      , i = e.last
      , a = e.viewport
      , s = e.afterCritical
      , l = n.axis
      , u = Na(n.axis, r.displaceBy)
      , d = u.value
      , c = t[l.start]
      , f = t[l.end]
      , p = Ql(r, o)
      , m = yn(p, function(x) {
        var g = x.descriptor.id
          , h = x.page.borderBox.center[l.line]
          , y = pn(g, s)
          , S = Vx({
            displaced: i,
            id: g
        });
        return y ? S ? f <= h : c < h - d : S ? f <= h + d : c < h
    })
      , v = JI({
        draggable: r,
        closest: m,
        inHomeList: Zo(r, n)
    });
    return il({
        draggable: r,
        insideDestination: o,
        destination: n,
        viewport: a,
        last: i,
        displacedBy: u,
        index: v
    })
}
  , ek = 4
  , tk = function(e) {
    var t = e.draggable
      , r = e.pageBorderBoxWithDroppableScroll
      , n = e.previousImpact
      , o = e.destination
      , i = e.insideDestination
      , a = e.afterCritical;
    if (!o.isCombineEnabled)
        return null;
    var s = o.axis
      , l = Na(o.axis, t.displaceBy)
      , u = l.value
      , d = r[s.start]
      , c = r[s.end]
      , f = Ql(t, i)
      , p = yn(f, function(v) {
        var x = v.descriptor.id
          , g = v.page.borderBox
          , h = g[s.size]
          , y = h / ek
          , S = pn(x, a)
          , E = Vx({
            displaced: n.displaced,
            id: x
        });
        return S ? E ? c > g[s.start] + y && c < g[s.end] - y : d > g[s.start] - u + y && d < g[s.end] - u - y : E ? c > g[s.start] + u + y && c < g[s.end] + u - y : d > g[s.start] + y && d < g[s.end] - y
    });
    if (!p)
        return null;
    var m = {
        displacedBy: l,
        displaced: n.displaced,
        at: {
            type: "COMBINE",
            combine: {
                draggableId: p.descriptor.id,
                droppableId: o.descriptor.id
            }
        }
    };
    return m
}
  , Hx = function(e) {
    var t = e.pageOffset
      , r = e.draggable
      , n = e.draggables
      , o = e.droppables
      , i = e.previousImpact
      , a = e.viewport
      , s = e.afterCritical
      , l = Wx(r.page.borderBox, t)
      , u = YI({
        pageBorderBox: l,
        draggable: r,
        droppables: o
    });
    if (!u)
        return vI;
    var d = o[u]
      , c = Jo(d.descriptor.id, n)
      , f = XI(d, l);
    return tk({
        pageBorderBoxWithDroppableScroll: f,
        draggable: r,
        previousImpact: i,
        destination: d,
        insideDestination: c,
        afterCritical: s
    }) || ZI({
        pageBorderBoxWithDroppableScroll: f,
        draggable: r,
        destination: d,
        insideDestination: c,
        last: i.displaced,
        viewport: a,
        afterCritical: s
    })
}
  , Kf = function(e, t) {
    var r;
    return V({}, e, (r = {},
    r[t.descriptor.id] = t,
    r))
}
  , rk = function(t) {
    var r = t.previousImpact
      , n = t.impact
      , o = t.droppables
      , i = ft(r)
      , a = ft(n);
    if (!i || i === a)
        return o;
    var s = o[i];
    if (!s.subject.withPlaceholder)
        return o;
    var l = WI(s);
    return Kf(o, l)
}
  , nk = function(e) {
    var t = e.draggable
      , r = e.draggables
      , n = e.droppables
      , o = e.previousImpact
      , i = e.impact
      , a = rk({
        previousImpact: o,
        impact: i,
        droppables: n
    })
      , s = ft(i);
    if (!s)
        return a;
    var l = n[s];
    if (Zo(t, l) || l.subject.withPlaceholder)
        return a;
    var u = _x(l, t, r);
    return Kf(a, u)
}
  , Ii = function(e) {
    var t = e.state
      , r = e.clientSelection
      , n = e.dimensions
      , o = e.viewport
      , i = e.impact
      , a = e.scrollJumpRequest
      , s = o || t.viewport
      , l = n || t.dimensions
      , u = r || t.current.client.selection
      , d = ut(u, t.initial.client.selection)
      , c = {
        offset: d,
        selection: u,
        borderBoxCenter: Me(t.initial.client.borderBoxCenter, d)
    }
      , f = {
        selection: Me(c.selection, s.scroll.current),
        borderBoxCenter: Me(c.borderBoxCenter, s.scroll.current),
        offset: Me(c.offset, s.scroll.diff.value)
    }
      , p = {
        client: c,
        page: f
    };
    if (t.phase === "COLLECTING")
        return V({
            phase: "COLLECTING"
        }, t, {
            dimensions: l,
            viewport: s,
            current: p
        });
    var m = l.draggables[t.critical.draggable.id]
      , v = i || Hx({
        pageOffset: f.offset,
        draggable: m,
        draggables: l.draggables,
        droppables: l.droppables,
        previousImpact: t.impact,
        viewport: s,
        afterCritical: t.afterCritical
    })
      , x = nk({
        draggable: m,
        impact: v,
        previousImpact: t.impact,
        draggables: l.draggables,
        droppables: l.droppables
    })
      , g = V({}, t, {
        current: p,
        dimensions: {
            draggables: l.draggables,
            droppables: x
        },
        impact: v,
        viewport: s,
        scrollJumpRequest: a || null,
        forceShouldAnimate: a ? !1 : null
    });
    return g
};
function ok(e, t) {
    return e.map(function(r) {
        return t[r]
    })
}
var Gx = function(e) {
    var t = e.impact
      , r = e.viewport
      , n = e.draggables
      , o = e.destination
      , i = e.forceShouldAnimate
      , a = t.displaced
      , s = ok(a.all, n)
      , l = oa({
        afterDragging: s,
        destination: o,
        displacedBy: t.displacedBy,
        viewport: r.frame,
        forceShouldAnimate: i,
        last: a
    });
    return V({}, t, {
        displaced: l
    })
}
  , qx = function(e) {
    var t = e.impact
      , r = e.draggable
      , n = e.droppable
      , o = e.draggables
      , i = e.viewport
      , a = e.afterCritical
      , s = Yl({
        impact: t,
        draggable: r,
        draggables: o,
        droppable: n,
        afterCritical: a
    });
    return qf({
        pageBorderBoxCenter: s,
        draggable: r,
        viewport: i
    })
}
  , Kx = function(e) {
    var t = e.state
      , r = e.dimensions
      , n = e.viewport;
    t.movementMode !== "SNAP" && L();
    var o = t.impact
      , i = n || t.viewport
      , a = r || t.dimensions
      , s = a.draggables
      , l = a.droppables
      , u = s[t.critical.draggable.id]
      , d = ft(o);
    d || L();
    var c = l[d]
      , f = Gx({
        impact: o,
        viewport: i,
        destination: c,
        draggables: s
    })
      , p = qx({
        impact: f,
        draggable: u,
        droppable: c,
        draggables: s,
        viewport: i,
        afterCritical: t.afterCritical
    });
    return Ii({
        impact: f,
        clientSelection: p,
        state: t,
        dimensions: a,
        viewport: i
    })
}
  , ik = function(e) {
    return {
        index: e.index,
        droppableId: e.droppableId
    }
}
  , Qx = function(e) {
    var t = e.draggable
      , r = e.home
      , n = e.draggables
      , o = e.viewport
      , i = Na(r.axis, t.displaceBy)
      , a = Jo(r.descriptor.id, n)
      , s = a.indexOf(t);
    s === -1 && L();
    var l = a.slice(s + 1)
      , u = l.reduce(function(p, m) {
        return p[m.descriptor.id] = !0,
        p
    }, {})
      , d = {
        inVirtualList: r.descriptor.mode === "virtual",
        displacedBy: i,
        effected: u
    }
      , c = oa({
        afterDragging: l,
        destination: r,
        displacedBy: i,
        last: null,
        viewport: o.frame,
        forceShouldAnimate: !1
    })
      , f = {
        displaced: c,
        displacedBy: i,
        at: {
            type: "REORDER",
            destination: ik(t.descriptor)
        }
    };
    return {
        impact: f,
        afterCritical: d
    }
}
  , ak = function(e, t) {
    return {
        draggables: e.draggables,
        droppables: Kf(e.droppables, t)
    }
}
  , sk = function(e) {
    var t = e.draggable
      , r = e.offset
      , n = e.initialWindowScroll
      , o = el(t.client, r)
      , i = tl(o, n)
      , a = V({}, t, {
        placeholder: V({}, t.placeholder, {
            client: o
        }),
        client: o,
        page: i
    });
    return a
}
  , lk = function(e) {
    var t = e.frame;
    return t || L(),
    t
}
  , uk = function(e) {
    var t = e.additions
      , r = e.updatedDroppables
      , n = e.viewport
      , o = n.scroll.diff.value;
    return t.map(function(i) {
        var a = i.descriptor.droppableId
          , s = r[a]
          , l = lk(s)
          , u = l.scroll.diff.value
          , d = Me(o, u)
          , c = sk({
            draggable: i,
            offset: d,
            initialWindowScroll: n.scroll.initial
        });
        return c
    })
}
  , ck = function(e) {
    var t = e.state
      , r = e.published
      , n = r.modified.map(function(y) {
        var S = t.dimensions.droppables[y.droppableId]
          , E = _f(S, y.scroll);
        return E
    })
      , o = V({}, t.dimensions.droppables, {}, Rx(n))
      , i = Ox(uk({
        additions: r.additions,
        updatedDroppables: o,
        viewport: t.viewport
    }))
      , a = V({}, t.dimensions.draggables, {}, i);
    r.removals.forEach(function(y) {
        delete a[y]
    });
    var s = {
        droppables: o,
        draggables: a
    }
      , l = ft(t.impact)
      , u = l ? s.droppables[l] : null
      , d = s.draggables[t.critical.draggable.id]
      , c = s.droppables[t.critical.droppable.id]
      , f = Qx({
        draggable: d,
        home: c,
        draggables: a,
        viewport: t.viewport
    })
      , p = f.impact
      , m = f.afterCritical
      , v = u && u.isCombineEnabled ? t.impact : p
      , x = Hx({
        pageOffset: t.current.page.offset,
        draggable: s.draggables[t.critical.draggable.id],
        draggables: s.draggables,
        droppables: s.droppables,
        previousImpact: v,
        viewport: t.viewport,
        afterCritical: m
    })
      , g = V({
        phase: "DRAGGING"
    }, t, {
        phase: "DRAGGING",
        impact: x,
        onLiftImpact: p,
        dimensions: s,
        afterCritical: m,
        forceShouldAnimate: !1
    });
    if (t.phase === "COLLECTING")
        return g;
    var h = V({
        phase: "DROP_PENDING"
    }, g, {
        phase: "DROP_PENDING",
        reason: t.reason,
        isWaiting: !1
    });
    return h
}
  , cd = function(t) {
    return t.movementMode === "SNAP"
}
  , Vu = function(t, r, n) {
    var o = ak(t.dimensions, r);
    return !cd(t) || n ? Ii({
        state: t,
        dimensions: o
    }) : Kx({
        state: t,
        dimensions: o
    })
};
function Hu(e) {
    return e.isDragging && e.movementMode === "SNAP" ? V({
        phase: "DRAGGING"
    }, e, {
        scrollJumpRequest: null
    }) : e
}
var Rv = {
    phase: "IDLE",
    completed: null,
    shouldFlush: !1
}
  , dk = function(e, t) {
    if (e === void 0 && (e = Rv),
    t.type === "FLUSH")
        return V({}, Rv, {
            shouldFlush: !0
        });
    if (t.type === "INITIAL_PUBLISH") {
        e.phase !== "IDLE" && L();
        var r = t.payload
          , n = r.critical
          , o = r.clientSelection
          , i = r.viewport
          , a = r.dimensions
          , s = r.movementMode
          , l = a.draggables[n.draggable.id]
          , u = a.droppables[n.droppable.id]
          , d = {
            selection: o,
            borderBoxCenter: l.client.borderBox.center,
            offset: Te
        }
          , c = {
            client: d,
            page: {
                selection: Me(d.selection, i.scroll.initial),
                borderBoxCenter: Me(d.selection, i.scroll.initial),
                offset: Me(d.selection, i.scroll.diff.value)
            }
        }
          , f = ql(a.droppables).every(function(xt) {
            return !xt.isFixedOnPage
        })
          , p = Qx({
            draggable: l,
            home: u,
            draggables: a.draggables,
            viewport: i
        })
          , m = p.impact
          , v = p.afterCritical
          , x = {
            phase: "DRAGGING",
            isDragging: !0,
            critical: n,
            movementMode: s,
            dimensions: a,
            initial: c,
            current: c,
            isWindowScrollAllowed: f,
            impact: m,
            afterCritical: v,
            onLiftImpact: m,
            viewport: i,
            scrollJumpRequest: null,
            forceShouldAnimate: null
        };
        return x
    }
    if (t.type === "COLLECTION_STARTING") {
        if (e.phase === "COLLECTING" || e.phase === "DROP_PENDING")
            return e;
        e.phase !== "DRAGGING" && L();
        var g = V({
            phase: "COLLECTING"
        }, e, {
            phase: "COLLECTING"
        });
        return g
    }
    if (t.type === "PUBLISH_WHILE_DRAGGING")
        return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || L(),
        ck({
            state: e,
            published: t.payload
        });
    if (t.type === "MOVE") {
        if (e.phase === "DROP_PENDING")
            return e;
        Dn(e) || L();
        var h = t.payload.client;
        return on(h, e.current.client.selection) ? e : Ii({
            state: e,
            clientSelection: h,
            impact: cd(e) ? e.impact : null
        })
    }
    if (t.type === "UPDATE_DROPPABLE_SCROLL") {
        if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
            return Hu(e);
        Dn(e) || L();
        var y = t.payload
          , S = y.id
          , E = y.newScroll
          , C = e.dimensions.droppables[S];
        if (!C)
            return e;
        var P = _f(C, E);
        return Vu(e, P, !1)
    }
    if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
        if (e.phase === "DROP_PENDING")
            return e;
        Dn(e) || L();
        var D = t.payload
          , k = D.id
          , O = D.isEnabled
          , F = e.dimensions.droppables[k];
        F || L(),
        F.isEnabled === O && L();
        var j = V({}, F, {
            isEnabled: O
        });
        return Vu(e, j, !0)
    }
    if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
        if (e.phase === "DROP_PENDING")
            return e;
        Dn(e) || L();
        var W = t.payload
          , A = W.id
          , G = W.isCombineEnabled
          , _ = e.dimensions.droppables[A];
        _ || L(),
        _.isCombineEnabled === G && L();
        var q = V({}, _, {
            isCombineEnabled: G
        });
        return Vu(e, q, !0)
    }
    if (t.type === "MOVE_BY_WINDOW_SCROLL") {
        if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
            return e;
        Dn(e) || L(),
        e.isWindowScrollAllowed || L();
        var N = t.payload.newScroll;
        if (on(e.viewport.scroll.current, N))
            return Hu(e);
        var T = Fx(e.viewport, N);
        return cd(e) ? Kx({
            state: e,
            viewport: T
        }) : Ii({
            state: e,
            viewport: T
        })
    }
    if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
        if (!Dn(e))
            return e;
        var B = t.payload.maxScroll;
        if (on(B, e.viewport.scroll.max))
            return e;
        var H = V({}, e.viewport, {
            scroll: V({}, e.viewport.scroll, {
                max: B
            })
        });
        return V({
            phase: "DRAGGING"
        }, e, {
            viewport: H
        })
    }
    if (t.type === "MOVE_UP" || t.type === "MOVE_DOWN" || t.type === "MOVE_LEFT" || t.type === "MOVE_RIGHT") {
        if (e.phase === "COLLECTING" || e.phase === "DROP_PENDING")
            return e;
        e.phase !== "DRAGGING" && L();
        var $ = qI({
            state: e,
            type: t.type
        });
        return $ ? Ii({
            state: e,
            impact: $.impact,
            clientSelection: $.clientSelection,
            scrollJumpRequest: $.scrollJumpRequest
        }) : e
    }
    if (t.type === "DROP_PENDING") {
        var K = t.payload.reason;
        e.phase !== "COLLECTING" && L();
        var X = V({
            phase: "DROP_PENDING"
        }, e, {
            phase: "DROP_PENDING",
            isWaiting: !0,
            reason: K
        });
        return X
    }
    if (t.type === "DROP_ANIMATE") {
        var oe = t.payload
          , we = oe.completed
          , ee = oe.dropDuration
          , At = oe.newHomeClientOffset;
        e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || L();
        var yt = {
            phase: "DROP_ANIMATING",
            completed: we,
            dropDuration: ee,
            newHomeClientOffset: At,
            dimensions: e.dimensions
        };
        return yt
    }
    if (t.type === "DROP_COMPLETE") {
        var Xe = t.payload.completed;
        return {
            phase: "IDLE",
            completed: Xe,
            shouldFlush: !1
        }
    }
    return e
}
  , fk = function(t) {
    return {
        type: "BEFORE_INITIAL_CAPTURE",
        payload: t
    }
}
  , pk = function(t) {
    return {
        type: "LIFT",
        payload: t
    }
}
  , mk = function(t) {
    return {
        type: "INITIAL_PUBLISH",
        payload: t
    }
}
  , vk = function(t) {
    return {
        type: "PUBLISH_WHILE_DRAGGING",
        payload: t
    }
}
  , hk = function() {
    return {
        type: "COLLECTION_STARTING",
        payload: null
    }
}
  , gk = function(t) {
    return {
        type: "UPDATE_DROPPABLE_SCROLL",
        payload: t
    }
}
  , yk = function(t) {
    return {
        type: "UPDATE_DROPPABLE_IS_ENABLED",
        payload: t
    }
}
  , xk = function(t) {
    return {
        type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
        payload: t
    }
}
  , Yx = function(t) {
    return {
        type: "MOVE",
        payload: t
    }
}
  , wk = function(t) {
    return {
        type: "MOVE_BY_WINDOW_SCROLL",
        payload: t
    }
}
  , bk = function(t) {
    return {
        type: "UPDATE_VIEWPORT_MAX_SCROLL",
        payload: t
    }
}
  , Sk = function() {
    return {
        type: "MOVE_UP",
        payload: null
    }
}
  , Ck = function() {
    return {
        type: "MOVE_DOWN",
        payload: null
    }
}
  , Ek = function() {
    return {
        type: "MOVE_RIGHT",
        payload: null
    }
}
  , Pk = function() {
    return {
        type: "MOVE_LEFT",
        payload: null
    }
}
  , Qf = function() {
    return {
        type: "FLUSH",
        payload: null
    }
}
  , Dk = function(t) {
    return {
        type: "DROP_ANIMATE",
        payload: t
    }
}
  , Yf = function(t) {
    return {
        type: "DROP_COMPLETE",
        payload: t
    }
}
  , Xx = function(t) {
    return {
        type: "DROP",
        payload: t
    }
}
  , Nk = function(t) {
    return {
        type: "DROP_PENDING",
        payload: t
    }
}
  , Jx = function() {
    return {
        type: "DROP_ANIMATION_FINISHED",
        payload: null
    }
}
  , Ik = function(e) {
    return function(t) {
        var r = t.getState
          , n = t.dispatch;
        return function(o) {
            return function(i) {
                if (i.type !== "LIFT") {
                    o(i);
                    return
                }
                var a = i.payload
                  , s = a.id
                  , l = a.clientSelection
                  , u = a.movementMode
                  , d = r();
                d.phase === "DROP_ANIMATING" && n(Yf({
                    completed: d.completed
                })),
                r().phase !== "IDLE" && L(),
                n(Qf()),
                n(fk({
                    draggableId: s,
                    movementMode: u
                }));
                var c = {
                    shouldPublishImmediately: u === "SNAP"
                }
                  , f = {
                    draggableId: s,
                    scrollOptions: c
                }
                  , p = e.startPublishing(f)
                  , m = p.critical
                  , v = p.dimensions
                  , x = p.viewport;
                n(mk({
                    critical: m,
                    dimensions: v,
                    clientSelection: l,
                    movementMode: u,
                    viewport: x
                }))
            }
        }
    }
}
  , kk = function(e) {
    return function() {
        return function(t) {
            return function(r) {
                r.type === "INITIAL_PUBLISH" && e.dragging(),
                r.type === "DROP_ANIMATE" && e.dropping(r.payload.completed.result.reason),
                (r.type === "FLUSH" || r.type === "DROP_COMPLETE") && e.resting(),
                t(r)
            }
        }
    }
}
  , Xf = {
    outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
    drop: "cubic-bezier(.2,1,.1,1)"
}
  , ia = {
    opacity: {
        drop: 0,
        combining: .7
    },
    scale: {
        drop: .75
    }
}
  , Jf = {
    outOfTheWay: .2,
    minDropTime: .33,
    maxDropTime: .55
}
  , Cn = Jf.outOfTheWay + "s " + Xf.outOfTheWay
  , ki = {
    fluid: "opacity " + Cn,
    snap: "transform " + Cn + ", opacity " + Cn,
    drop: function(t) {
        var r = t + "s " + Xf.drop;
        return "transform " + r + ", opacity " + r
    },
    outOfTheWay: "transform " + Cn,
    placeholder: "height " + Cn + ", width " + Cn + ", margin " + Cn
}
  , Ov = function(t) {
    return on(t, Te) ? null : "translate(" + t.x + "px, " + t.y + "px)"
}
  , dd = {
    moveTo: Ov,
    drop: function(t, r) {
        var n = Ov(t);
        return n ? r ? n + " scale(" + ia.scale.drop + ")" : n : null
    }
}
  , fd = Jf.minDropTime
  , Zx = Jf.maxDropTime
  , Tk = Zx - fd
  , Av = 1500
  , Rk = .6
  , Ok = function(e) {
    var t = e.current
      , r = e.destination
      , n = e.reason
      , o = ra(t, r);
    if (o <= 0)
        return fd;
    if (o >= Av)
        return Zx;
    var i = o / Av
      , a = fd + Tk * i
      , s = n === "CANCEL" ? a * Rk : a;
    return Number(s.toFixed(2))
}
  , Ak = function(e) {
    var t = e.impact
      , r = e.draggable
      , n = e.dimensions
      , o = e.viewport
      , i = e.afterCritical
      , a = n.draggables
      , s = n.droppables
      , l = ft(t)
      , u = l ? s[l] : null
      , d = s[r.descriptor.droppableId]
      , c = qx({
        impact: t,
        draggable: r,
        draggables: a,
        afterCritical: i,
        droppable: u || d,
        viewport: o
    })
      , f = ut(c, r.client.borderBox.center);
    return f
}
  , Mk = function(e) {
    var t = e.draggables
      , r = e.reason
      , n = e.lastImpact
      , o = e.home
      , i = e.viewport
      , a = e.onLiftImpact;
    if (!n.at || r !== "DROP") {
        var s = Gx({
            draggables: t,
            impact: a,
            destination: o,
            viewport: i,
            forceShouldAnimate: !0
        });
        return {
            impact: s,
            didDropInsideDroppable: !1
        }
    }
    if (n.at.type === "REORDER")
        return {
            impact: n,
            didDropInsideDroppable: !0
        };
    var l = V({}, n, {
        displaced: na
    });
    return {
        impact: l,
        didDropInsideDroppable: !0
    }
}
  , Lk = function(e) {
    var t = e.getState
      , r = e.dispatch;
    return function(n) {
        return function(o) {
            if (o.type !== "DROP") {
                n(o);
                return
            }
            var i = t()
              , a = o.payload.reason;
            if (i.phase === "COLLECTING") {
                r(Nk({
                    reason: a
                }));
                return
            }
            if (i.phase !== "IDLE") {
                var s = i.phase === "DROP_PENDING" && i.isWaiting;
                s && L(),
                i.phase === "DRAGGING" || i.phase === "DROP_PENDING" || L();
                var l = i.critical
                  , u = i.dimensions
                  , d = u.draggables[i.critical.draggable.id]
                  , c = Mk({
                    reason: a,
                    lastImpact: i.impact,
                    afterCritical: i.afterCritical,
                    onLiftImpact: i.onLiftImpact,
                    home: i.dimensions.droppables[i.critical.droppable.id],
                    viewport: i.viewport,
                    draggables: i.dimensions.draggables
                })
                  , f = c.impact
                  , p = c.didDropInsideDroppable
                  , m = p ? Wf(f) : null
                  , v = p ? Kl(f) : null
                  , x = {
                    index: l.draggable.index,
                    droppableId: l.droppable.id
                }
                  , g = {
                    draggableId: d.descriptor.id,
                    type: d.descriptor.type,
                    source: x,
                    reason: a,
                    mode: i.movementMode,
                    destination: m,
                    combine: v
                }
                  , h = Ak({
                    impact: f,
                    draggable: d,
                    dimensions: u,
                    viewport: i.viewport,
                    afterCritical: i.afterCritical
                })
                  , y = {
                    critical: i.critical,
                    afterCritical: i.afterCritical,
                    result: g,
                    impact: f
                }
                  , S = !on(i.current.client.offset, h) || !!g.combine;
                if (!S) {
                    r(Yf({
                        completed: y
                    }));
                    return
                }
                var E = Ok({
                    current: i.current.client.offset,
                    destination: h,
                    reason: a
                })
                  , C = {
                    newHomeClientOffset: h,
                    dropDuration: E,
                    completed: y
                };
                r(Dk(C))
            }
        }
    }
}
  , ew = function() {
    return {
        x: window.pageXOffset,
        y: window.pageYOffset
    }
};
function jk(e) {
    return {
        eventName: "scroll",
        options: {
            passive: !0,
            capture: !1
        },
        fn: function(r) {
            r.target !== window && r.target !== window.document || e()
        }
    }
}
function Bk(e) {
    var t = e.onWindowScroll;
    function r() {
        t(ew())
    }
    var n = ta(r)
      , o = jk(n)
      , i = nn;
    function a() {
        return i !== nn
    }
    function s() {
        a() && L(),
        i = It(window, [o])
    }
    function l() {
        a() || L(),
        n.cancel(),
        i(),
        i = nn
    }
    return {
        start: s,
        stop: l,
        isActive: a
    }
}
var Fk = function(t) {
    return t.type === "DROP_COMPLETE" || t.type === "DROP_ANIMATE" || t.type === "FLUSH"
}
  , $k = function(e) {
    var t = Bk({
        onWindowScroll: function(n) {
            e.dispatch(wk({
                newScroll: n
            }))
        }
    });
    return function(r) {
        return function(n) {
            !t.isActive() && n.type === "INITIAL_PUBLISH" && t.start(),
            t.isActive() && Fk(n) && t.stop(),
            r(n)
        }
    }
}
  , zk = function(e) {
    var t = !1
      , r = !1
      , n = setTimeout(function() {
        r = !0
    })
      , o = function(a) {
        t || r || (t = !0,
        e(a),
        clearTimeout(n))
    };
    return o.wasCalled = function() {
        return t
    }
    ,
    o
}
  , _k = function() {
    var e = []
      , t = function(i) {
        var a = Uf(e, function(u) {
            return u.timerId === i
        });
        a === -1 && L();
        var s = e.splice(a, 1)
          , l = s[0];
        l.callback()
    }
      , r = function(i) {
        var a = setTimeout(function() {
            return t(a)
        })
          , s = {
            timerId: a,
            callback: i
        };
        e.push(s)
    }
      , n = function() {
        if (e.length) {
            var i = [].concat(e);
            e.length = 0,
            i.forEach(function(a) {
                clearTimeout(a.timerId),
                a.callback()
            })
        }
    };
    return {
        add: r,
        flush: n
    }
}
  , Uk = function(t, r) {
    return t == null && r == null ? !0 : t == null || r == null ? !1 : t.droppableId === r.droppableId && t.index === r.index
}
  , Wk = function(t, r) {
    return t == null && r == null ? !0 : t == null || r == null ? !1 : t.draggableId === r.draggableId && t.droppableId === r.droppableId
}
  , Vk = function(t, r) {
    if (t === r)
        return !0;
    var n = t.draggable.id === r.draggable.id && t.draggable.droppableId === r.draggable.droppableId && t.draggable.type === r.draggable.type && t.draggable.index === r.draggable.index
      , o = t.droppable.id === r.droppable.id && t.droppable.type === r.droppable.type;
    return n && o
}
  , di = function(t, r) {
    r()
}
  , Ja = function(t, r) {
    return {
        draggableId: t.draggable.id,
        type: t.droppable.type,
        source: {
            droppableId: t.droppable.id,
            index: t.draggable.index
        },
        mode: r
    }
}
  , Gu = function(t, r, n, o) {
    if (!t) {
        n(o(r));
        return
    }
    var i = zk(n)
      , a = {
        announce: i
    };
    t(r, a),
    i.wasCalled() || n(o(r))
}
  , Hk = function(e, t) {
    var r = _k()
      , n = null
      , o = function(f, p) {
        n && L(),
        di("onBeforeCapture", function() {
            var m = e().onBeforeCapture;
            if (m) {
                var v = {
                    draggableId: f,
                    mode: p
                };
                m(v)
            }
        })
    }
      , i = function(f, p) {
        n && L(),
        di("onBeforeDragStart", function() {
            var m = e().onBeforeDragStart;
            m && m(Ja(f, p))
        })
    }
      , a = function(f, p) {
        n && L();
        var m = Ja(f, p);
        n = {
            mode: p,
            lastCritical: f,
            lastLocation: m.source,
            lastCombine: null
        },
        r.add(function() {
            di("onDragStart", function() {
                return Gu(e().onDragStart, m, t, ys.onDragStart)
            })
        })
    }
      , s = function(f, p) {
        var m = Wf(p)
          , v = Kl(p);
        n || L();
        var x = !Vk(f, n.lastCritical);
        x && (n.lastCritical = f);
        var g = !Uk(n.lastLocation, m);
        g && (n.lastLocation = m);
        var h = !Wk(n.lastCombine, v);
        if (h && (n.lastCombine = v),
        !(!x && !g && !h)) {
            var y = V({}, Ja(f, n.mode), {
                combine: v,
                destination: m
            });
            r.add(function() {
                di("onDragUpdate", function() {
                    return Gu(e().onDragUpdate, y, t, ys.onDragUpdate)
                })
            })
        }
    }
      , l = function() {
        n || L(),
        r.flush()
    }
      , u = function(f) {
        n || L(),
        n = null,
        di("onDragEnd", function() {
            return Gu(e().onDragEnd, f, t, ys.onDragEnd)
        })
    }
      , d = function() {
        if (n) {
            var f = V({}, Ja(n.lastCritical, n.mode), {
                combine: null,
                destination: null,
                reason: "CANCEL"
            });
            u(f)
        }
    };
    return {
        beforeCapture: o,
        beforeStart: i,
        start: a,
        update: s,
        flush: l,
        drop: u,
        abort: d
    }
}
  , Gk = function(e, t) {
    var r = Hk(e, t);
    return function(n) {
        return function(o) {
            return function(i) {
                if (i.type === "BEFORE_INITIAL_CAPTURE") {
                    r.beforeCapture(i.payload.draggableId, i.payload.movementMode);
                    return
                }
                if (i.type === "INITIAL_PUBLISH") {
                    var a = i.payload.critical;
                    r.beforeStart(a, i.payload.movementMode),
                    o(i),
                    r.start(a, i.payload.movementMode);
                    return
                }
                if (i.type === "DROP_COMPLETE") {
                    var s = i.payload.completed.result;
                    r.flush(),
                    o(i),
                    r.drop(s);
                    return
                }
                if (o(i),
                i.type === "FLUSH") {
                    r.abort();
                    return
                }
                var l = n.getState();
                l.phase === "DRAGGING" && r.update(l.critical, l.impact)
            }
        }
    }
}
  , qk = function(e) {
    return function(t) {
        return function(r) {
            if (r.type !== "DROP_ANIMATION_FINISHED") {
                t(r);
                return
            }
            var n = e.getState();
            n.phase !== "DROP_ANIMATING" && L(),
            e.dispatch(Yf({
                completed: n.completed
            }))
        }
    }
}
  , Kk = function(e) {
    var t = null
      , r = null;
    function n() {
        r && (cancelAnimationFrame(r),
        r = null),
        t && (t(),
        t = null)
    }
    return function(o) {
        return function(i) {
            if ((i.type === "FLUSH" || i.type === "DROP_COMPLETE" || i.type === "DROP_ANIMATION_FINISHED") && n(),
            o(i),
            i.type === "DROP_ANIMATE") {
                var a = {
                    eventName: "scroll",
                    options: {
                        capture: !0,
                        passive: !1,
                        once: !0
                    },
                    fn: function() {
                        var l = e.getState();
                        l.phase === "DROP_ANIMATING" && e.dispatch(Jx())
                    }
                };
                r = requestAnimationFrame(function() {
                    r = null,
                    t = It(window, [a])
                })
            }
        }
    }
}
  , Qk = function(e) {
    return function() {
        return function(t) {
            return function(r) {
                (r.type === "DROP_COMPLETE" || r.type === "FLUSH" || r.type === "DROP_ANIMATE") && e.stopPublishing(),
                t(r)
            }
        }
    }
}
  , Yk = function(e) {
    var t = !1;
    return function() {
        return function(r) {
            return function(n) {
                if (n.type === "INITIAL_PUBLISH") {
                    t = !0,
                    e.tryRecordFocus(n.payload.critical.draggable.id),
                    r(n),
                    e.tryRestoreFocusRecorded();
                    return
                }
                if (r(n),
                !!t) {
                    if (n.type === "FLUSH") {
                        t = !1,
                        e.tryRestoreFocusRecorded();
                        return
                    }
                    if (n.type === "DROP_COMPLETE") {
                        t = !1;
                        var o = n.payload.completed.result;
                        o.combine && e.tryShiftRecord(o.draggableId, o.combine.draggableId),
                        e.tryRestoreFocusRecorded()
                    }
                }
            }
        }
    }
}
  , Xk = function(t) {
    return t.type === "DROP_COMPLETE" || t.type === "DROP_ANIMATE" || t.type === "FLUSH"
}
  , Jk = function(e) {
    return function(t) {
        return function(r) {
            return function(n) {
                if (Xk(n)) {
                    e.stop(),
                    r(n);
                    return
                }
                if (n.type === "INITIAL_PUBLISH") {
                    r(n);
                    var o = t.getState();
                    o.phase !== "DRAGGING" && L(),
                    e.start(o);
                    return
                }
                r(n),
                e.scroll(t.getState())
            }
        }
    }
}
  , Zk = function(e) {
    return function(t) {
        return function(r) {
            if (t(r),
            r.type === "PUBLISH_WHILE_DRAGGING") {
                var n = e.getState();
                n.phase === "DROP_PENDING" && (n.isWaiting || e.dispatch(Xx({
                    reason: n.reason
                })))
            }
        }
    }
}
  , eT = ax
  , tT = function(e) {
    var t = e.dimensionMarshal
      , r = e.focusMarshal
      , n = e.styleMarshal
      , o = e.getResponders
      , i = e.announce
      , a = e.autoScroller;
    return ix(dk, eT(_D(kk(n), Qk(t), Ik(t), Lk, qk, Kk, Zk, Jk(a), $k, Yk(r), Gk(o, i))))
}
  , qu = function() {
    return {
        additions: {},
        removals: {},
        modified: {}
    }
};
function rT(e) {
    var t = e.registry
      , r = e.callbacks
      , n = qu()
      , o = null
      , i = function() {
        o || (r.collectionStarting(),
        o = requestAnimationFrame(function() {
            o = null;
            var d = n
              , c = d.additions
              , f = d.removals
              , p = d.modified
              , m = Object.keys(c).map(function(g) {
                return t.draggable.getById(g).getDimension(Te)
            }).sort(function(g, h) {
                return g.descriptor.index - h.descriptor.index
            })
              , v = Object.keys(p).map(function(g) {
                var h = t.droppable.getById(g)
                  , y = h.callbacks.getScrollWhileDragging();
                return {
                    droppableId: g,
                    scroll: y
                }
            })
              , x = {
                additions: m,
                removals: Object.keys(f),
                modified: v
            };
            n = qu(),
            r.publish(x)
        }))
    }
      , a = function(d) {
        var c = d.descriptor.id;
        n.additions[c] = d,
        n.modified[d.descriptor.droppableId] = !0,
        n.removals[c] && delete n.removals[c],
        i()
    }
      , s = function(d) {
        var c = d.descriptor;
        n.removals[c.id] = !0,
        n.modified[c.droppableId] = !0,
        n.additions[c.id] && delete n.additions[c.id],
        i()
    }
      , l = function() {
        o && (cancelAnimationFrame(o),
        o = null,
        n = qu())
    };
    return {
        add: a,
        remove: s,
        stop: l
    }
}
var tw = function(e) {
    var t = e.scrollHeight
      , r = e.scrollWidth
      , n = e.height
      , o = e.width
      , i = ut({
        x: r,
        y: t
    }, {
        x: o,
        y: n
    })
      , a = {
        x: Math.max(0, i.x),
        y: Math.max(0, i.y)
    };
    return a
}
  , rw = function() {
    var e = document.documentElement;
    return e || L(),
    e
}
  , nw = function() {
    var e = rw()
      , t = tw({
        scrollHeight: e.scrollHeight,
        scrollWidth: e.scrollWidth,
        width: e.clientWidth,
        height: e.clientHeight
    });
    return t
}
  , nT = function() {
    var e = ew()
      , t = nw()
      , r = e.y
      , n = e.x
      , o = rw()
      , i = o.clientWidth
      , a = o.clientHeight
      , s = n + i
      , l = r + a
      , u = Ht({
        top: r,
        left: n,
        right: s,
        bottom: l
    })
      , d = {
        frame: u,
        scroll: {
            initial: e,
            current: e,
            max: t,
            diff: {
                value: Te,
                displacement: Te
            }
        }
    };
    return d
}
  , oT = function(e) {
    var t = e.critical
      , r = e.scrollOptions
      , n = e.registry
      , o = nT()
      , i = o.scroll.current
      , a = t.droppable
      , s = n.droppable.getAllByType(a.type).map(function(c) {
        return c.callbacks.getDimensionAndWatchScroll(i, r)
    })
      , l = n.draggable.getAllByType(t.draggable.type).map(function(c) {
        return c.getDimension(i)
    })
      , u = {
        draggables: Ox(l),
        droppables: Rx(s)
    }
      , d = {
        dimensions: u,
        critical: t,
        viewport: o
    };
    return d
};
function Mv(e, t, r) {
    if (r.descriptor.id === t.id || r.descriptor.type !== t.type)
        return !1;
    var n = e.droppable.getById(r.descriptor.droppableId);
    return n.descriptor.mode === "virtual"
}
var iT = function(e, t) {
    var r = null
      , n = rT({
        callbacks: {
            publish: t.publishWhileDragging,
            collectionStarting: t.collectionStarting
        },
        registry: e
    })
      , o = function(p, m) {
        e.droppable.exists(p) || L(),
        r && t.updateDroppableIsEnabled({
            id: p,
            isEnabled: m
        })
    }
      , i = function(p, m) {
        r && (e.droppable.exists(p) || L(),
        t.updateDroppableIsCombineEnabled({
            id: p,
            isCombineEnabled: m
        }))
    }
      , a = function(p, m) {
        r && (e.droppable.exists(p) || L(),
        t.updateDroppableScroll({
            id: p,
            newScroll: m
        }))
    }
      , s = function(p, m) {
        r && e.droppable.getById(p).callbacks.scroll(m)
    }
      , l = function() {
        if (r) {
            n.stop();
            var p = r.critical.droppable;
            e.droppable.getAllByType(p.type).forEach(function(m) {
                return m.callbacks.dragStopped()
            }),
            r.unsubscribe(),
            r = null
        }
    }
      , u = function(p) {
        r || L();
        var m = r.critical.draggable;
        p.type === "ADDITION" && Mv(e, m, p.value) && n.add(p.value),
        p.type === "REMOVAL" && Mv(e, m, p.value) && n.remove(p.value)
    }
      , d = function(p) {
        r && L();
        var m = e.draggable.getById(p.draggableId)
          , v = e.droppable.getById(m.descriptor.droppableId)
          , x = {
            draggable: m.descriptor,
            droppable: v.descriptor
        }
          , g = e.subscribe(u);
        return r = {
            critical: x,
            unsubscribe: g
        },
        oT({
            critical: x,
            registry: e,
            scrollOptions: p.scrollOptions
        })
    }
      , c = {
        updateDroppableIsEnabled: o,
        updateDroppableIsCombineEnabled: i,
        scrollDroppable: s,
        updateDroppableScroll: a,
        startPublishing: d,
        stopPublishing: l
    };
    return c
}
  , ow = function(e, t) {
    return e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP"
}
  , aT = function(e) {
    window.scrollBy(e.x, e.y)
}
  , sT = ke(function(e) {
    return ql(e).filter(function(t) {
        return !(!t.isEnabled || !t.frame)
    })
})
  , lT = function(t, r) {
    var n = yn(sT(r), function(o) {
        return o.frame || L(),
        Ux(o.frame.pageMarginBox)(t)
    });
    return n
}
  , uT = function(e) {
    var t = e.center
      , r = e.destination
      , n = e.droppables;
    if (r) {
        var o = n[r];
        return o.frame ? o : null
    }
    var i = lT(t, n);
    return i
}
  , an = {
    startFromPercentage: .25,
    maxScrollAtPercentage: .05,
    maxPixelScroll: 28,
    ease: function(t) {
        return Math.pow(t, 2)
    },
    durationDampening: {
        stopDampeningAt: 1200,
        accelerateAt: 360
    }
}
  , cT = function(e, t) {
    var r = e[t.size] * an.startFromPercentage
      , n = e[t.size] * an.maxScrollAtPercentage
      , o = {
        startScrollingFrom: r,
        maxScrollValueAt: n
    };
    return o
}
  , iw = function(e) {
    var t = e.startOfRange
      , r = e.endOfRange
      , n = e.current
      , o = r - t;
    if (o === 0)
        return 0;
    var i = n - t
      , a = i / o;
    return a
}
  , Zf = 1
  , dT = function(e, t) {
    if (e > t.startScrollingFrom)
        return 0;
    if (e <= t.maxScrollValueAt)
        return an.maxPixelScroll;
    if (e === t.startScrollingFrom)
        return Zf;
    var r = iw({
        startOfRange: t.maxScrollValueAt,
        endOfRange: t.startScrollingFrom,
        current: e
    })
      , n = 1 - r
      , o = an.maxPixelScroll * an.ease(n);
    return Math.ceil(o)
}
  , Lv = an.durationDampening.accelerateAt
  , jv = an.durationDampening.stopDampeningAt
  , fT = function(e, t) {
    var r = t
      , n = jv
      , o = Date.now()
      , i = o - r;
    if (i >= jv)
        return e;
    if (i < Lv)
        return Zf;
    var a = iw({
        startOfRange: Lv,
        endOfRange: n,
        current: i
    })
      , s = e * an.ease(a);
    return Math.ceil(s)
}
  , Bv = function(e) {
    var t = e.distanceToEdge
      , r = e.thresholds
      , n = e.dragStartTime
      , o = e.shouldUseTimeDampening
      , i = dT(t, r);
    return i === 0 ? 0 : o ? Math.max(fT(i, n), Zf) : i
}
  , Fv = function(e) {
    var t = e.container
      , r = e.distanceToEdges
      , n = e.dragStartTime
      , o = e.axis
      , i = e.shouldUseTimeDampening
      , a = cT(t, o)
      , s = r[o.end] < r[o.start];
    return s ? Bv({
        distanceToEdge: r[o.end],
        thresholds: a,
        dragStartTime: n,
        shouldUseTimeDampening: i
    }) : -1 * Bv({
        distanceToEdge: r[o.start],
        thresholds: a,
        dragStartTime: n,
        shouldUseTimeDampening: i
    })
}
  , pT = function(e) {
    var t = e.container
      , r = e.subject
      , n = e.proposedScroll
      , o = r.height > t.height
      , i = r.width > t.width;
    return !i && !o ? n : i && o ? null : {
        x: i ? 0 : n.x,
        y: o ? 0 : n.y
    }
}
  , mT = kx(function(e) {
    return e === 0 ? 0 : e
})
  , aw = function(e) {
    var t = e.dragStartTime
      , r = e.container
      , n = e.subject
      , o = e.center
      , i = e.shouldUseTimeDampening
      , a = {
        top: o.y - r.top,
        right: r.right - o.x,
        bottom: r.bottom - o.y,
        left: o.x - r.left
    }
      , s = Fv({
        container: r,
        distanceToEdges: a,
        dragStartTime: t,
        axis: Vf,
        shouldUseTimeDampening: i
    })
      , l = Fv({
        container: r,
        distanceToEdges: a,
        dragStartTime: t,
        axis: Lx,
        shouldUseTimeDampening: i
    })
      , u = mT({
        x: l,
        y: s
    });
    if (on(u, Te))
        return null;
    var d = pT({
        container: r,
        subject: n,
        proposedScroll: u
    });
    return d ? on(d, Te) ? null : d : null
}
  , vT = kx(function(e) {
    return e === 0 ? 0 : e > 0 ? 1 : -1
})
  , ep = function() {
    var e = function(r, n) {
        return r < 0 ? r : r > n ? r - n : 0
    };
    return function(t) {
        var r = t.current
          , n = t.max
          , o = t.change
          , i = Me(r, o)
          , a = {
            x: e(i.x, n.x),
            y: e(i.y, n.y)
        };
        return on(a, Te) ? null : a
    }
}()
  , sw = function(t) {
    var r = t.max
      , n = t.current
      , o = t.change
      , i = {
        x: Math.max(n.x, r.x),
        y: Math.max(n.y, r.y)
    }
      , a = vT(o)
      , s = ep({
        max: i,
        current: n,
        change: a
    });
    return !s || a.x !== 0 && s.x === 0 || a.y !== 0 && s.y === 0
}
  , tp = function(t, r) {
    return sw({
        current: t.scroll.current,
        max: t.scroll.max,
        change: r
    })
}
  , hT = function(t, r) {
    if (!tp(t, r))
        return null;
    var n = t.scroll.max
      , o = t.scroll.current;
    return ep({
        current: o,
        max: n,
        change: r
    })
}
  , rp = function(t, r) {
    var n = t.frame;
    return n ? sw({
        current: n.scroll.current,
        max: n.scroll.max,
        change: r
    }) : !1
}
  , gT = function(t, r) {
    var n = t.frame;
    return !n || !rp(t, r) ? null : ep({
        current: n.scroll.current,
        max: n.scroll.max,
        change: r
    })
}
  , yT = function(e) {
    var t = e.viewport
      , r = e.subject
      , n = e.center
      , o = e.dragStartTime
      , i = e.shouldUseTimeDampening
      , a = aw({
        dragStartTime: o,
        container: t.frame,
        subject: r,
        center: n,
        shouldUseTimeDampening: i
    });
    return a && tp(t, a) ? a : null
}
  , xT = function(e) {
    var t = e.droppable
      , r = e.subject
      , n = e.center
      , o = e.dragStartTime
      , i = e.shouldUseTimeDampening
      , a = t.frame;
    if (!a)
        return null;
    var s = aw({
        dragStartTime: o,
        container: a.pageMarginBox,
        subject: r,
        center: n,
        shouldUseTimeDampening: i
    });
    return s && rp(t, s) ? s : null
}
  , $v = function(e) {
    var t = e.state
      , r = e.dragStartTime
      , n = e.shouldUseTimeDampening
      , o = e.scrollWindow
      , i = e.scrollDroppable
      , a = t.current.page.borderBoxCenter
      , s = t.dimensions.draggables[t.critical.draggable.id]
      , l = s.page.marginBox;
    if (t.isWindowScrollAllowed) {
        var u = t.viewport
          , d = yT({
            dragStartTime: r,
            viewport: u,
            subject: l,
            center: a,
            shouldUseTimeDampening: n
        });
        if (d) {
            o(d);
            return
        }
    }
    var c = uT({
        center: a,
        destination: ft(t.impact),
        droppables: t.dimensions.droppables
    });
    if (c) {
        var f = xT({
            dragStartTime: r,
            droppable: c,
            subject: l,
            center: a,
            shouldUseTimeDampening: n
        });
        f && i(c.descriptor.id, f)
    }
}
  , wT = function(e) {
    var t = e.scrollWindow
      , r = e.scrollDroppable
      , n = ta(t)
      , o = ta(r)
      , i = null
      , a = function(d) {
        i || L();
        var c = i
          , f = c.shouldUseTimeDampening
          , p = c.dragStartTime;
        $v({
            state: d,
            scrollWindow: n,
            scrollDroppable: o,
            dragStartTime: p,
            shouldUseTimeDampening: f
        })
    }
      , s = function(d) {
        i && L();
        var c = Date.now()
          , f = !1
          , p = function() {
            f = !0
        };
        $v({
            state: d,
            dragStartTime: 0,
            shouldUseTimeDampening: !1,
            scrollWindow: p,
            scrollDroppable: p
        }),
        i = {
            dragStartTime: c,
            shouldUseTimeDampening: f
        },
        f && a(d)
    }
      , l = function() {
        i && (n.cancel(),
        o.cancel(),
        i = null)
    };
    return {
        start: s,
        stop: l,
        scroll: a
    }
}
  , bT = function(e) {
    var t = e.move
      , r = e.scrollDroppable
      , n = e.scrollWindow
      , o = function(u, d) {
        var c = Me(u.current.client.selection, d);
        t({
            client: c
        })
    }
      , i = function(u, d) {
        if (!rp(u, d))
            return d;
        var c = gT(u, d);
        if (!c)
            return r(u.descriptor.id, d),
            null;
        var f = ut(d, c);
        r(u.descriptor.id, f);
        var p = ut(d, f);
        return p
    }
      , a = function(u, d, c) {
        if (!u || !tp(d, c))
            return c;
        var f = hT(d, c);
        if (!f)
            return n(c),
            null;
        var p = ut(c, f);
        n(p);
        var m = ut(c, p);
        return m
    }
      , s = function(u) {
        var d = u.scrollJumpRequest;
        if (d) {
            var c = ft(u.impact);
            c || L();
            var f = i(u.dimensions.droppables[c], d);
            if (f) {
                var p = u.viewport
                  , m = a(u.isWindowScrollAllowed, p, f);
                m && o(u, m)
            }
        }
    };
    return s
}
  , ST = function(e) {
    var t = e.scrollDroppable
      , r = e.scrollWindow
      , n = e.move
      , o = wT({
        scrollWindow: r,
        scrollDroppable: t
    })
      , i = bT({
        move: n,
        scrollWindow: r,
        scrollDroppable: t
    })
      , a = function(u) {
        if (u.phase === "DRAGGING") {
            if (u.movementMode === "FLUID") {
                o.scroll(u);
                return
            }
            u.scrollJumpRequest && i(u)
        }
    }
      , s = {
        scroll: a,
        start: o.start,
        stop: o.stop
    };
    return s
}
  , _o = "data-rbd"
  , Uo = function() {
    var e = _o + "-drag-handle";
    return {
        base: e,
        draggableId: e + "-draggable-id",
        contextId: e + "-context-id"
    }
}()
  , pd = function() {
    var e = _o + "-draggable";
    return {
        base: e,
        contextId: e + "-context-id",
        id: e + "-id"
    }
}()
  , CT = function() {
    var e = _o + "-droppable";
    return {
        base: e,
        contextId: e + "-context-id",
        id: e + "-id"
    }
}()
  , zv = {
    contextId: _o + "-scroll-container-context-id"
}
  , ET = function(t) {
    return function(r) {
        return "[" + r + '="' + t + '"]'
    }
}
  , fi = function(t, r) {
    return t.map(function(n) {
        var o = n.styles[r];
        return o ? n.selector + " { " + o + " }" : ""
    }).join(" ")
}
  , PT = "pointer-events: none;"
  , DT = function(e) {
    var t = ET(e)
      , r = function() {
        var s = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
        return {
            selector: t(Uo.contextId),
            styles: {
                always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
                resting: s,
                dragging: PT,
                dropAnimating: s
            }
        }
    }()
      , n = function() {
        var s = `
      transition: ` + ki.outOfTheWay + `;
    `;
        return {
            selector: t(pd.contextId),
            styles: {
                dragging: s,
                dropAnimating: s,
                userCancel: s
            }
        }
    }()
      , o = {
        selector: t(CT.contextId),
        styles: {
            always: "overflow-anchor: none;"
        }
    }
      , i = {
        selector: "body",
        styles: {
            dragging: `
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `
        }
    }
      , a = [n, r, o, i];
    return {
        always: fi(a, "always"),
        resting: fi(a, "resting"),
        dragging: fi(a, "dragging"),
        dropAnimating: fi(a, "dropAnimating"),
        userCancel: fi(a, "userCancel")
    }
}
  , pt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? b.useLayoutEffect : b.useEffect
  , Ku = function() {
    var t = document.querySelector("head");
    return t || L(),
    t
}
  , _v = function(t) {
    var r = document.createElement("style");
    return t && r.setAttribute("nonce", t),
    r.type = "text/css",
    r
};
function NT(e, t) {
    var r = te(function() {
        return DT(e)
    }, [e])
      , n = b.useRef(null)
      , o = b.useRef(null)
      , i = U(ke(function(c) {
        var f = o.current;
        f || L(),
        f.textContent = c
    }), [])
      , a = U(function(c) {
        var f = n.current;
        f || L(),
        f.textContent = c
    }, []);
    pt(function() {
        !n.current && !o.current || L();
        var c = _v(t)
          , f = _v(t);
        return n.current = c,
        o.current = f,
        c.setAttribute(_o + "-always", e),
        f.setAttribute(_o + "-dynamic", e),
        Ku().appendChild(c),
        Ku().appendChild(f),
        a(r.always),
        i(r.resting),
        function() {
            var p = function(v) {
                var x = v.current;
                x || L(),
                Ku().removeChild(x),
                v.current = null
            };
            p(n),
            p(o)
        }
    }, [t, a, i, r.always, r.resting, e]);
    var s = U(function() {
        return i(r.dragging)
    }, [i, r.dragging])
      , l = U(function(c) {
        if (c === "DROP") {
            i(r.dropAnimating);
            return
        }
        i(r.userCancel)
    }, [i, r.dropAnimating, r.userCancel])
      , u = U(function() {
        o.current && i(r.resting)
    }, [i, r.resting])
      , d = te(function() {
        return {
            dragging: s,
            dropping: l,
            resting: u
        }
    }, [s, l, u]);
    return d
}
var lw = function(e) {
    return e && e.ownerDocument ? e.ownerDocument.defaultView : window
};
function Xl(e) {
    return e instanceof lw(e).HTMLElement
}
function IT(e, t) {
    var r = "[" + Uo.contextId + '="' + e + '"]'
      , n = Tx(document.querySelectorAll(r));
    if (!n.length)
        return null;
    var o = yn(n, function(i) {
        return i.getAttribute(Uo.draggableId) === t
    });
    return !o || !Xl(o) ? null : o
}
function kT(e) {
    var t = b.useRef({})
      , r = b.useRef(null)
      , n = b.useRef(null)
      , o = b.useRef(!1)
      , i = U(function(f, p) {
        var m = {
            id: f,
            focus: p
        };
        return t.current[f] = m,
        function() {
            var x = t.current
              , g = x[f];
            g !== m && delete x[f]
        }
    }, [])
      , a = U(function(f) {
        var p = IT(e, f);
        p && p !== document.activeElement && p.focus()
    }, [e])
      , s = U(function(f, p) {
        r.current === f && (r.current = p)
    }, [])
      , l = U(function() {
        n.current || o.current && (n.current = requestAnimationFrame(function() {
            n.current = null;
            var f = r.current;
            f && a(f)
        }))
    }, [a])
      , u = U(function(f) {
        r.current = null;
        var p = document.activeElement;
        p && p.getAttribute(Uo.draggableId) === f && (r.current = f)
    }, []);
    pt(function() {
        return o.current = !0,
        function() {
            o.current = !1;
            var f = n.current;
            f && cancelAnimationFrame(f)
        }
    }, []);
    var d = te(function() {
        return {
            register: i,
            tryRecordFocus: u,
            tryRestoreFocusRecorded: l,
            tryShiftRecord: s
        }
    }, [i, u, l, s]);
    return d
}
function TT() {
    var e = {
        draggables: {},
        droppables: {}
    }
      , t = [];
    function r(c) {
        return t.push(c),
        function() {
            var p = t.indexOf(c);
            p !== -1 && t.splice(p, 1)
        }
    }
    function n(c) {
        t.length && t.forEach(function(f) {
            return f(c)
        })
    }
    function o(c) {
        return e.draggables[c] || null
    }
    function i(c) {
        var f = o(c);
        return f || L(),
        f
    }
    var a = {
        register: function(f) {
            e.draggables[f.descriptor.id] = f,
            n({
                type: "ADDITION",
                value: f
            })
        },
        update: function(f, p) {
            var m = e.draggables[p.descriptor.id];
            m && m.uniqueId === f.uniqueId && (delete e.draggables[p.descriptor.id],
            e.draggables[f.descriptor.id] = f)
        },
        unregister: function(f) {
            var p = f.descriptor.id
              , m = o(p);
            m && f.uniqueId === m.uniqueId && (delete e.draggables[p],
            n({
                type: "REMOVAL",
                value: f
            }))
        },
        getById: i,
        findById: o,
        exists: function(f) {
            return !!o(f)
        },
        getAllByType: function(f) {
            return ol(e.draggables).filter(function(p) {
                return p.descriptor.type === f
            })
        }
    };
    function s(c) {
        return e.droppables[c] || null
    }
    function l(c) {
        var f = s(c);
        return f || L(),
        f
    }
    var u = {
        register: function(f) {
            e.droppables[f.descriptor.id] = f
        },
        unregister: function(f) {
            var p = s(f.descriptor.id);
            p && f.uniqueId === p.uniqueId && delete e.droppables[f.descriptor.id]
        },
        getById: l,
        findById: s,
        exists: function(f) {
            return !!s(f)
        },
        getAllByType: function(f) {
            return ol(e.droppables).filter(function(p) {
                return p.descriptor.type === f
            })
        }
    };
    function d() {
        e.draggables = {},
        e.droppables = {},
        t.length = 0
    }
    return {
        draggable: a,
        droppable: u,
        subscribe: r,
        clean: d
    }
}
function RT() {
    var e = te(TT, []);
    return b.useEffect(function() {
        return function() {
            requestAnimationFrame(e.clean)
        }
    }, [e]),
    e
}
var np = R.createContext(null)
  , al = function() {
    var e = document.body;
    return e || L(),
    e
}
  , OT = {
    position: "absolute",
    width: "1px",
    height: "1px",
    margin: "-1px",
    border: "0",
    padding: "0",
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    "clip-path": "inset(100%)"
}
  , AT = function(t) {
    return "rbd-announcement-" + t
};
function MT(e) {
    var t = te(function() {
        return AT(e)
    }, [e])
      , r = b.useRef(null);
    b.useEffect(function() {
        var i = document.createElement("div");
        return r.current = i,
        i.id = t,
        i.setAttribute("aria-live", "assertive"),
        i.setAttribute("aria-atomic", "true"),
        V(i.style, OT),
        al().appendChild(i),
        function() {
            setTimeout(function() {
                var l = al();
                l.contains(i) && l.removeChild(i),
                i === r.current && (r.current = null)
            })
        }
    }, [t]);
    var n = U(function(o) {
        var i = r.current;
        if (i) {
            i.textContent = o;
            return
        }
    }, []);
    return n
}
var LT = 0
  , jT = {
    separator: "::"
};
function op(e, t) {
    return t === void 0 && (t = jT),
    te(function() {
        return "" + e + t.separator + LT++
    }, [t.separator, e])
}
function BT(e) {
    var t = e.contextId
      , r = e.uniqueId;
    return "rbd-hidden-text-" + t + "-" + r
}
function FT(e) {
    var t = e.contextId
      , r = e.text
      , n = op("hidden-text", {
        separator: "-"
    })
      , o = te(function() {
        return BT({
            contextId: t,
            uniqueId: n
        })
    }, [n, t]);
    return b.useEffect(function() {
        var a = document.createElement("div");
        return a.id = o,
        a.textContent = r,
        a.style.display = "none",
        al().appendChild(a),
        function() {
            var l = al();
            l.contains(a) && l.removeChild(a)
        }
    }, [o, r]),
    o
}
var Jl = R.createContext(null);
function uw(e) {
    var t = b.useRef(e);
    return b.useEffect(function() {
        t.current = e
    }),
    t
}
function $T() {
    var e = null;
    function t() {
        return !!e
    }
    function r(a) {
        return a === e
    }
    function n(a) {
        e && L();
        var s = {
            abandon: a
        };
        return e = s,
        s
    }
    function o() {
        e || L(),
        e = null
    }
    function i() {
        e && (e.abandon(),
        o())
    }
    return {
        isClaimed: t,
        isActive: r,
        claim: n,
        release: o,
        tryAbandon: i
    }
}
var zT = 9, _T = 13, ip = 27, cw = 32, UT = 33, WT = 34, VT = 35, HT = 36, GT = 37, qT = 38, KT = 39, QT = 40, Za, YT = (Za = {},
Za[_T] = !0,
Za[zT] = !0,
Za), dw = function(e) {
    YT[e.keyCode] && e.preventDefault()
}, Zl = function() {
    var e = "visibilitychange";
    if (typeof document > "u")
        return e;
    var t = [e, "ms" + e, "webkit" + e, "moz" + e, "o" + e]
      , r = yn(t, function(n) {
        return "on" + n in document
    });
    return r || e
}(), fw = 0, Uv = 5;
function XT(e, t) {
    return Math.abs(t.x - e.x) >= Uv || Math.abs(t.y - e.y) >= Uv
}
var Wv = {
    type: "IDLE"
};
function JT(e) {
    var t = e.cancel
      , r = e.completed
      , n = e.getPhase
      , o = e.setPhase;
    return [{
        eventName: "mousemove",
        fn: function(a) {
            var s = a.button
              , l = a.clientX
              , u = a.clientY;
            if (s === fw) {
                var d = {
                    x: l,
                    y: u
                }
                  , c = n();
                if (c.type === "DRAGGING") {
                    a.preventDefault(),
                    c.actions.move(d);
                    return
                }
                c.type !== "PENDING" && L();
                var f = c.point;
                if (XT(f, d)) {
                    a.preventDefault();
                    var p = c.actions.fluidLift(d);
                    o({
                        type: "DRAGGING",
                        actions: p
                    })
                }
            }
        }
    }, {
        eventName: "mouseup",
        fn: function(a) {
            var s = n();
            if (s.type !== "DRAGGING") {
                t();
                return
            }
            a.preventDefault(),
            s.actions.drop({
                shouldBlockNextClick: !0
            }),
            r()
        }
    }, {
        eventName: "mousedown",
        fn: function(a) {
            n().type === "DRAGGING" && a.preventDefault(),
            t()
        }
    }, {
        eventName: "keydown",
        fn: function(a) {
            var s = n();
            if (s.type === "PENDING") {
                t();
                return
            }
            if (a.keyCode === ip) {
                a.preventDefault(),
                t();
                return
            }
            dw(a)
        }
    }, {
        eventName: "resize",
        fn: t
    }, {
        eventName: "scroll",
        options: {
            passive: !0,
            capture: !1
        },
        fn: function() {
            n().type === "PENDING" && t()
        }
    }, {
        eventName: "webkitmouseforcedown",
        fn: function(a) {
            var s = n();
            if (s.type === "IDLE" && L(),
            s.actions.shouldRespectForcePress()) {
                t();
                return
            }
            a.preventDefault()
        }
    }, {
        eventName: Zl,
        fn: t
    }]
}
function ZT(e) {
    var t = b.useRef(Wv)
      , r = b.useRef(nn)
      , n = te(function() {
        return {
            eventName: "mousedown",
            fn: function(c) {
                if (!c.defaultPrevented && c.button === fw && !(c.ctrlKey || c.metaKey || c.shiftKey || c.altKey)) {
                    var f = e.findClosestDraggableId(c);
                    if (f) {
                        var p = e.tryGetLock(f, a, {
                            sourceEvent: c
                        });
                        if (p) {
                            c.preventDefault();
                            var m = {
                                x: c.clientX,
                                y: c.clientY
                            };
                            r.current(),
                            u(p, m)
                        }
                    }
                }
            }
        }
    }, [e])
      , o = te(function() {
        return {
            eventName: "webkitmouseforcewillbegin",
            fn: function(c) {
                if (!c.defaultPrevented) {
                    var f = e.findClosestDraggableId(c);
                    if (f) {
                        var p = e.findOptionsForDraggable(f);
                        p && (p.shouldRespectForcePress || e.canGetLock(f) && c.preventDefault())
                    }
                }
            }
        }
    }, [e])
      , i = U(function() {
        var c = {
            passive: !1,
            capture: !0
        };
        r.current = It(window, [o, n], c)
    }, [o, n])
      , a = U(function() {
        var d = t.current;
        d.type !== "IDLE" && (t.current = Wv,
        r.current(),
        i())
    }, [i])
      , s = U(function() {
        var d = t.current;
        a(),
        d.type === "DRAGGING" && d.actions.cancel({
            shouldBlockNextClick: !0
        }),
        d.type === "PENDING" && d.actions.abort()
    }, [a])
      , l = U(function() {
        var c = {
            capture: !0,
            passive: !1
        }
          , f = JT({
            cancel: s,
            completed: a,
            getPhase: function() {
                return t.current
            },
            setPhase: function(m) {
                t.current = m
            }
        });
        r.current = It(window, f, c)
    }, [s, a])
      , u = U(function(c, f) {
        t.current.type !== "IDLE" && L(),
        t.current = {
            type: "PENDING",
            point: f,
            actions: c
        },
        l()
    }, [l]);
    pt(function() {
        return i(),
        function() {
            r.current()
        }
    }, [i])
}
var to;
function eR() {}
var tR = (to = {},
to[WT] = !0,
to[UT] = !0,
to[HT] = !0,
to[VT] = !0,
to);
function rR(e, t) {
    function r() {
        t(),
        e.cancel()
    }
    function n() {
        t(),
        e.drop()
    }
    return [{
        eventName: "keydown",
        fn: function(i) {
            if (i.keyCode === ip) {
                i.preventDefault(),
                r();
                return
            }
            if (i.keyCode === cw) {
                i.preventDefault(),
                n();
                return
            }
            if (i.keyCode === QT) {
                i.preventDefault(),
                e.moveDown();
                return
            }
            if (i.keyCode === qT) {
                i.preventDefault(),
                e.moveUp();
                return
            }
            if (i.keyCode === KT) {
                i.preventDefault(),
                e.moveRight();
                return
            }
            if (i.keyCode === GT) {
                i.preventDefault(),
                e.moveLeft();
                return
            }
            if (tR[i.keyCode]) {
                i.preventDefault();
                return
            }
            dw(i)
        }
    }, {
        eventName: "mousedown",
        fn: r
    }, {
        eventName: "mouseup",
        fn: r
    }, {
        eventName: "click",
        fn: r
    }, {
        eventName: "touchstart",
        fn: r
    }, {
        eventName: "resize",
        fn: r
    }, {
        eventName: "wheel",
        fn: r,
        options: {
            passive: !0
        }
    }, {
        eventName: Zl,
        fn: r
    }]
}
function nR(e) {
    var t = b.useRef(eR)
      , r = te(function() {
        return {
            eventName: "keydown",
            fn: function(i) {
                if (i.defaultPrevented || i.keyCode !== cw)
                    return;
                var a = e.findClosestDraggableId(i);
                if (!a)
                    return;
                var s = e.tryGetLock(a, d, {
                    sourceEvent: i
                });
                if (!s)
                    return;
                i.preventDefault();
                var l = !0
                  , u = s.snapLift();
                t.current();
                function d() {
                    l || L(),
                    l = !1,
                    t.current(),
                    n()
                }
                t.current = It(window, rR(u, d), {
                    capture: !0,
                    passive: !1
                })
            }
        }
    }, [e])
      , n = U(function() {
        var i = {
            passive: !1,
            capture: !0
        };
        t.current = It(window, [r], i)
    }, [r]);
    pt(function() {
        return n(),
        function() {
            t.current()
        }
    }, [n])
}
var Qu = {
    type: "IDLE"
}
  , oR = 120
  , iR = .15;
function aR(e) {
    var t = e.cancel
      , r = e.getPhase;
    return [{
        eventName: "orientationchange",
        fn: t
    }, {
        eventName: "resize",
        fn: t
    }, {
        eventName: "contextmenu",
        fn: function(o) {
            o.preventDefault()
        }
    }, {
        eventName: "keydown",
        fn: function(o) {
            if (r().type !== "DRAGGING") {
                t();
                return
            }
            o.keyCode === ip && o.preventDefault(),
            t()
        }
    }, {
        eventName: Zl,
        fn: t
    }]
}
function sR(e) {
    var t = e.cancel
      , r = e.completed
      , n = e.getPhase;
    return [{
        eventName: "touchmove",
        options: {
            capture: !1
        },
        fn: function(i) {
            var a = n();
            if (a.type !== "DRAGGING") {
                t();
                return
            }
            a.hasMoved = !0;
            var s = i.touches[0]
              , l = s.clientX
              , u = s.clientY
              , d = {
                x: l,
                y: u
            };
            i.preventDefault(),
            a.actions.move(d)
        }
    }, {
        eventName: "touchend",
        fn: function(i) {
            var a = n();
            if (a.type !== "DRAGGING") {
                t();
                return
            }
            i.preventDefault(),
            a.actions.drop({
                shouldBlockNextClick: !0
            }),
            r()
        }
    }, {
        eventName: "touchcancel",
        fn: function(i) {
            if (n().type !== "DRAGGING") {
                t();
                return
            }
            i.preventDefault(),
            t()
        }
    }, {
        eventName: "touchforcechange",
        fn: function(i) {
            var a = n();
            a.type === "IDLE" && L();
            var s = i.touches[0];
            if (s) {
                var l = s.force >= iR;
                if (l) {
                    var u = a.actions.shouldRespectForcePress();
                    if (a.type === "PENDING") {
                        u && t();
                        return
                    }
                    if (u) {
                        if (a.hasMoved) {
                            i.preventDefault();
                            return
                        }
                        t();
                        return
                    }
                    i.preventDefault()
                }
            }
        }
    }, {
        eventName: Zl,
        fn: t
    }]
}
function lR(e) {
    var t = b.useRef(Qu)
      , r = b.useRef(nn)
      , n = U(function() {
        return t.current
    }, [])
      , o = U(function(p) {
        t.current = p
    }, [])
      , i = te(function() {
        return {
            eventName: "touchstart",
            fn: function(p) {
                if (!p.defaultPrevented) {
                    var m = e.findClosestDraggableId(p);
                    if (m) {
                        var v = e.tryGetLock(m, s, {
                            sourceEvent: p
                        });
                        if (v) {
                            var x = p.touches[0]
                              , g = x.clientX
                              , h = x.clientY
                              , y = {
                                x: g,
                                y: h
                            };
                            r.current(),
                            c(v, y)
                        }
                    }
                }
            }
        }
    }, [e])
      , a = U(function() {
        var p = {
            capture: !0,
            passive: !1
        };
        r.current = It(window, [i], p)
    }, [i])
      , s = U(function() {
        var f = t.current;
        f.type !== "IDLE" && (f.type === "PENDING" && clearTimeout(f.longPressTimerId),
        o(Qu),
        r.current(),
        a())
    }, [a, o])
      , l = U(function() {
        var f = t.current;
        s(),
        f.type === "DRAGGING" && f.actions.cancel({
            shouldBlockNextClick: !0
        }),
        f.type === "PENDING" && f.actions.abort()
    }, [s])
      , u = U(function() {
        var p = {
            capture: !0,
            passive: !1
        }
          , m = {
            cancel: l,
            completed: s,
            getPhase: n
        }
          , v = It(window, sR(m), p)
          , x = It(window, aR(m), p);
        r.current = function() {
            v(),
            x()
        }
    }, [l, n, s])
      , d = U(function() {
        var p = n();
        p.type !== "PENDING" && L();
        var m = p.actions.fluidLift(p.point);
        o({
            type: "DRAGGING",
            actions: m,
            hasMoved: !1
        })
    }, [n, o])
      , c = U(function(p, m) {
        n().type !== "IDLE" && L();
        var v = setTimeout(d, oR);
        o({
            type: "PENDING",
            point: m,
            actions: p,
            longPressTimerId: v
        }),
        u()
    }, [u, n, o, d]);
    pt(function() {
        return a(),
        function() {
            r.current();
            var m = n();
            m.type === "PENDING" && (clearTimeout(m.longPressTimerId),
            o(Qu))
        }
    }, [n, a, o]),
    pt(function() {
        var p = It(window, [{
            eventName: "touchmove",
            fn: function() {},
            options: {
                capture: !1,
                passive: !1
            }
        }]);
        return p
    }, [])
}
var uR = {
    input: !0,
    button: !0,
    textarea: !0,
    select: !0,
    option: !0,
    optgroup: !0,
    video: !0,
    audio: !0
};
function pw(e, t) {
    if (t == null)
        return !1;
    var r = !!uR[t.tagName.toLowerCase()];
    if (r)
        return !0;
    var n = t.getAttribute("contenteditable");
    return n === "true" || n === "" ? !0 : t === e ? !1 : pw(e, t.parentElement)
}
function cR(e, t) {
    var r = t.target;
    return Xl(r) ? pw(e, r) : !1
}
var dR = function(e) {
    return Ht(e.getBoundingClientRect()).center
};
function fR(e) {
    return e instanceof lw(e).Element
}
var pR = function() {
    var e = "matches";
    if (typeof document > "u")
        return e;
    var t = [e, "msMatchesSelector", "webkitMatchesSelector"]
      , r = yn(t, function(n) {
        return n in Element.prototype
    });
    return r || e
}();
function mw(e, t) {
    return e == null ? null : e[pR](t) ? e : mw(e.parentElement, t)
}
function mR(e, t) {
    return e.closest ? e.closest(t) : mw(e, t)
}
function vR(e) {
    return "[" + Uo.contextId + '="' + e + '"]'
}
function hR(e, t) {
    var r = t.target;
    if (!fR(r))
        return null;
    var n = vR(e)
      , o = mR(r, n);
    return !o || !Xl(o) ? null : o
}
function gR(e, t) {
    var r = hR(e, t);
    return r ? r.getAttribute(Uo.draggableId) : null
}
function yR(e, t) {
    var r = "[" + pd.contextId + '="' + e + '"]'
      , n = Tx(document.querySelectorAll(r))
      , o = yn(n, function(i) {
        return i.getAttribute(pd.id) === t
    });
    return !o || !Xl(o) ? null : o
}
function xR(e) {
    e.preventDefault()
}
function es(e) {
    var t = e.expected
      , r = e.phase
      , n = e.isLockActive;
    return e.shouldWarn,
    !(!n() || t !== r)
}
function vw(e) {
    var t = e.lockAPI
      , r = e.store
      , n = e.registry
      , o = e.draggableId;
    if (t.isClaimed())
        return !1;
    var i = n.draggable.findById(o);
    return !(!i || !i.options.isEnabled || !ow(r.getState(), o))
}
function wR(e) {
    var t = e.lockAPI
      , r = e.contextId
      , n = e.store
      , o = e.registry
      , i = e.draggableId
      , a = e.forceSensorStop
      , s = e.sourceEvent
      , l = vw({
        lockAPI: t,
        store: n,
        registry: o,
        draggableId: i
    });
    if (!l)
        return null;
    var u = o.draggable.getById(i)
      , d = yR(r, u.descriptor.id);
    if (!d || s && !u.options.canDragInteractiveElements && cR(d, s))
        return null;
    var c = t.claim(a || nn)
      , f = "PRE_DRAG";
    function p() {
        return u.options.shouldRespectForcePress
    }
    function m() {
        return t.isActive(c)
    }
    function v(C, P) {
        es({
            expected: C,
            phase: f,
            isLockActive: m,
            shouldWarn: !0
        }) && n.dispatch(P())
    }
    var x = v.bind(null, "DRAGGING");
    function g(C) {
        function P() {
            t.release(),
            f = "COMPLETED"
        }
        f !== "PRE_DRAG" && (P(),
        f !== "PRE_DRAG" && L()),
        n.dispatch(pk(C.liftActionArgs)),
        f = "DRAGGING";
        function D(k, O) {
            if (O === void 0 && (O = {
                shouldBlockNextClick: !1
            }),
            C.cleanup(),
            O.shouldBlockNextClick) {
                var F = It(window, [{
                    eventName: "click",
                    fn: xR,
                    options: {
                        once: !0,
                        passive: !1,
                        capture: !0
                    }
                }]);
                setTimeout(F)
            }
            P(),
            n.dispatch(Xx({
                reason: k
            }))
        }
        return V({
            isActive: function() {
                return es({
                    expected: "DRAGGING",
                    phase: f,
                    isLockActive: m,
                    shouldWarn: !1
                })
            },
            shouldRespectForcePress: p,
            drop: function(O) {
                return D("DROP", O)
            },
            cancel: function(O) {
                return D("CANCEL", O)
            }
        }, C.actions)
    }
    function h(C) {
        var P = ta(function(k) {
            x(function() {
                return Yx({
                    client: k
                })
            })
        })
          , D = g({
            liftActionArgs: {
                id: i,
                clientSelection: C,
                movementMode: "FLUID"
            },
            cleanup: function() {
                return P.cancel()
            },
            actions: {
                move: P
            }
        });
        return V({}, D, {
            move: P
        })
    }
    function y() {
        var C = {
            moveUp: function() {
                return x(Sk)
            },
            moveRight: function() {
                return x(Ek)
            },
            moveDown: function() {
                return x(Ck)
            },
            moveLeft: function() {
                return x(Pk)
            }
        };
        return g({
            liftActionArgs: {
                id: i,
                clientSelection: dR(d),
                movementMode: "SNAP"
            },
            cleanup: nn,
            actions: C
        })
    }
    function S() {
        var C = es({
            expected: "PRE_DRAG",
            phase: f,
            isLockActive: m,
            shouldWarn: !0
        });
        C && t.release()
    }
    var E = {
        isActive: function() {
            return es({
                expected: "PRE_DRAG",
                phase: f,
                isLockActive: m,
                shouldWarn: !1
            })
        },
        shouldRespectForcePress: p,
        fluidLift: h,
        snapLift: y,
        abort: S
    };
    return E
}
var bR = [ZT, nR, lR];
function SR(e) {
    var t = e.contextId
      , r = e.store
      , n = e.registry
      , o = e.customSensors
      , i = e.enableDefaultSensors
      , a = [].concat(i ? bR : [], o || [])
      , s = b.useState(function() {
        return $T()
    })[0]
      , l = U(function(h, y) {
        h.isDragging && !y.isDragging && s.tryAbandon()
    }, [s]);
    pt(function() {
        var h = r.getState()
          , y = r.subscribe(function() {
            var S = r.getState();
            l(h, S),
            h = S
        });
        return y
    }, [s, r, l]),
    pt(function() {
        return s.tryAbandon
    }, [s.tryAbandon]);
    for (var u = U(function(g) {
        return vw({
            lockAPI: s,
            registry: n,
            store: r,
            draggableId: g
        })
    }, [s, n, r]), d = U(function(g, h, y) {
        return wR({
            lockAPI: s,
            registry: n,
            contextId: t,
            store: r,
            draggableId: g,
            forceSensorStop: h,
            sourceEvent: y && y.sourceEvent ? y.sourceEvent : null
        })
    }, [t, s, n, r]), c = U(function(g) {
        return gR(t, g)
    }, [t]), f = U(function(g) {
        var h = n.draggable.findById(g);
        return h ? h.options : null
    }, [n.draggable]), p = U(function() {
        s.isClaimed() && (s.tryAbandon(),
        r.getState().phase !== "IDLE" && r.dispatch(Qf()))
    }, [s, r]), m = U(s.isClaimed, [s]), v = te(function() {
        return {
            canGetLock: u,
            tryGetLock: d,
            findClosestDraggableId: c,
            findOptionsForDraggable: f,
            tryReleaseLock: p,
            isLockClaimed: m
        }
    }, [u, d, c, f, p, m]), x = 0; x < a.length; x++)
        a[x](v)
}
var CR = function(t) {
    return {
        onBeforeCapture: t.onBeforeCapture,
        onBeforeDragStart: t.onBeforeDragStart,
        onDragStart: t.onDragStart,
        onDragEnd: t.onDragEnd,
        onDragUpdate: t.onDragUpdate
    }
};
function pi(e) {
    return e.current || L(),
    e.current
}
function ER(e) {
    var t = e.contextId
      , r = e.setCallbacks
      , n = e.sensors
      , o = e.nonce
      , i = e.dragHandleUsageInstructions
      , a = b.useRef(null)
      , s = uw(e)
      , l = U(function() {
        return CR(s.current)
    }, [s])
      , u = MT(t)
      , d = FT({
        contextId: t,
        text: i
    })
      , c = NT(t, o)
      , f = U(function(k) {
        pi(a).dispatch(k)
    }, [])
      , p = te(function() {
        return fv({
            publishWhileDragging: vk,
            updateDroppableScroll: gk,
            updateDroppableIsEnabled: yk,
            updateDroppableIsCombineEnabled: xk,
            collectionStarting: hk
        }, f)
    }, [f])
      , m = RT()
      , v = te(function() {
        return iT(m, p)
    }, [m, p])
      , x = te(function() {
        return ST(V({
            scrollWindow: aT,
            scrollDroppable: v.scrollDroppable
        }, fv({
            move: Yx
        }, f)))
    }, [v.scrollDroppable, f])
      , g = kT(t)
      , h = te(function() {
        return tT({
            announce: u,
            autoScroller: x,
            dimensionMarshal: v,
            focusMarshal: g,
            getResponders: l,
            styleMarshal: c
        })
    }, [u, x, v, g, l, c]);
    a.current = h;
    var y = U(function() {
        var k = pi(a)
          , O = k.getState();
        O.phase !== "IDLE" && k.dispatch(Qf())
    }, [])
      , S = U(function() {
        var k = pi(a).getState();
        return k.isDragging || k.phase === "DROP_ANIMATING"
    }, [])
      , E = te(function() {
        return {
            isDragging: S,
            tryAbort: y
        }
    }, [S, y]);
    r(E);
    var C = U(function(k) {
        return ow(pi(a).getState(), k)
    }, [])
      , P = U(function() {
        return Dn(pi(a).getState())
    }, [])
      , D = te(function() {
        return {
            marshal: v,
            focus: g,
            contextId: t,
            canLift: C,
            isMovementAllowed: P,
            dragHandleUsageInstructionsId: d,
            registry: m
        }
    }, [t, v, d, g, C, P, m]);
    return SR({
        contextId: t,
        store: h,
        registry: m,
        customSensors: n,
        enableDefaultSensors: e.enableDefaultSensors !== !1
    }),
    b.useEffect(function() {
        return y
    }, [y]),
    R.createElement(Jl.Provider, {
        value: D
    }, R.createElement(GD, {
        context: np,
        store: h
    }, e.children))
}
var PR = 0;
function DR() {
    return te(function() {
        return "" + PR++
    }, [])
}
function NR(e) {
    var t = DR()
      , r = e.dragHandleUsageInstructions || ys.dragHandleUsageInstructions;
    return R.createElement(nI, null, function(n) {
        return R.createElement(ER, {
            nonce: e.nonce,
            contextId: t,
            setCallbacks: n,
            dragHandleUsageInstructions: r,
            enableDefaultSensors: e.enableDefaultSensors,
            sensors: e.sensors,
            onBeforeCapture: e.onBeforeCapture,
            onBeforeDragStart: e.onBeforeDragStart,
            onDragStart: e.onDragStart,
            onDragUpdate: e.onDragUpdate,
            onDragEnd: e.onDragEnd
        }, e.children)
    })
}
var hw = function(t) {
    return function(r) {
        return t === r
    }
}
  , IR = hw("scroll")
  , kR = hw("auto")
  , Vv = function(t, r) {
    return r(t.overflowX) || r(t.overflowY)
}
  , TR = function(t) {
    var r = window.getComputedStyle(t)
      , n = {
        overflowX: r.overflowX,
        overflowY: r.overflowY
    };
    return Vv(n, IR) || Vv(n, kR)
}
  , RR = function() {
    return !1
}
  , OR = function e(t) {
    return t == null ? null : t === document.body ? RR() ? t : null : t === document.documentElement ? null : TR(t) ? t : e(t.parentElement)
}
  , md = function(e) {
    return {
        x: e.scrollLeft,
        y: e.scrollTop
    }
}
  , AR = function e(t) {
    if (!t)
        return !1;
    var r = window.getComputedStyle(t);
    return r.position === "fixed" ? !0 : e(t.parentElement)
}
  , MR = function(e) {
    var t = OR(e)
      , r = AR(e);
    return {
        closestScrollable: t,
        isFixedOnPage: r
    }
}
  , LR = function(e) {
    var t = e.descriptor
      , r = e.isEnabled
      , n = e.isCombineEnabled
      , o = e.isFixedOnPage
      , i = e.direction
      , a = e.client
      , s = e.page
      , l = e.closest
      , u = function() {
        if (!l)
            return null;
        var p = l.scrollSize
          , m = l.client
          , v = tw({
            scrollHeight: p.scrollHeight,
            scrollWidth: p.scrollWidth,
            height: m.paddingBox.height,
            width: m.paddingBox.width
        });
        return {
            pageMarginBox: l.page.marginBox,
            frameClient: m,
            scrollSize: p,
            shouldClipSubject: l.shouldClipSubject,
            scroll: {
                initial: l.scroll,
                current: l.scroll,
                max: v,
                diff: {
                    value: Te,
                    displacement: Te
                }
            }
        }
    }()
      , d = i === "vertical" ? Vf : Lx
      , c = zo({
        page: s,
        withPlaceholder: null,
        axis: d,
        frame: u
    })
      , f = {
        descriptor: t,
        isCombineEnabled: n,
        isFixedOnPage: o,
        axis: d,
        isEnabled: r,
        client: a,
        page: s,
        frame: u,
        subject: c
    };
    return f
}
  , jR = function(t, r) {
    var n = Px(t);
    if (!r || t !== r)
        return n;
    var o = n.paddingBox.top - r.scrollTop
      , i = n.paddingBox.left - r.scrollLeft
      , a = o + r.scrollHeight
      , s = i + r.scrollWidth
      , l = {
        top: o,
        right: s,
        bottom: a,
        left: i
    }
      , u = $f(l, n.border)
      , d = zf({
        borderBox: u,
        margin: n.margin,
        border: n.border,
        padding: n.padding
    });
    return d
}
  , BR = function(e) {
    var t = e.ref
      , r = e.descriptor
      , n = e.env
      , o = e.windowScroll
      , i = e.direction
      , a = e.isDropDisabled
      , s = e.isCombineEnabled
      , l = e.shouldClipSubject
      , u = n.closestScrollable
      , d = jR(t, u)
      , c = tl(d, o)
      , f = function() {
        if (!u)
            return null;
        var m = Px(u)
          , v = {
            scrollHeight: u.scrollHeight,
            scrollWidth: u.scrollWidth
        };
        return {
            client: m,
            page: tl(m, o),
            scroll: md(u),
            scrollSize: v,
            shouldClipSubject: l
        }
    }()
      , p = LR({
        descriptor: r,
        isEnabled: !a,
        isCombineEnabled: s,
        isFixedOnPage: n.isFixedOnPage,
        direction: i,
        client: d,
        page: c,
        closest: f
    });
    return p
}
  , FR = {
    passive: !1
}
  , $R = {
    passive: !0
}
  , Hv = function(e) {
    return e.shouldPublishImmediately ? FR : $R
};
function sl(e) {
    var t = b.useContext(e);
    return t || L(),
    t
}
var ts = function(t) {
    return t && t.env.closestScrollable || null
};
function zR(e) {
    var t = b.useRef(null)
      , r = sl(Jl)
      , n = op("droppable")
      , o = r.registry
      , i = r.marshal
      , a = uw(e)
      , s = te(function() {
        return {
            id: e.droppableId,
            type: e.type,
            mode: e.mode
        }
    }, [e.droppableId, e.mode, e.type])
      , l = b.useRef(s)
      , u = te(function() {
        return ke(function(S, E) {
            t.current || L();
            var C = {
                x: S,
                y: E
            };
            i.updateDroppableScroll(s.id, C)
        })
    }, [s.id, i])
      , d = U(function() {
        var S = t.current;
        return !S || !S.env.closestScrollable ? Te : md(S.env.closestScrollable)
    }, [])
      , c = U(function() {
        var S = d();
        u(S.x, S.y)
    }, [d, u])
      , f = te(function() {
        return ta(c)
    }, [c])
      , p = U(function() {
        var S = t.current
          , E = ts(S);
        S && E || L();
        var C = S.scrollOptions;
        if (C.shouldPublishImmediately) {
            c();
            return
        }
        f()
    }, [f, c])
      , m = U(function(S, E) {
        t.current && L();
        var C = a.current
          , P = C.getDroppableRef();
        P || L();
        var D = MR(P)
          , k = {
            ref: P,
            descriptor: s,
            env: D,
            scrollOptions: E
        };
        t.current = k;
        var O = BR({
            ref: P,
            descriptor: s,
            env: D,
            windowScroll: S,
            direction: C.direction,
            isDropDisabled: C.isDropDisabled,
            isCombineEnabled: C.isCombineEnabled,
            shouldClipSubject: !C.ignoreContainerClipping
        })
          , F = D.closestScrollable;
        return F && (F.setAttribute(zv.contextId, r.contextId),
        F.addEventListener("scroll", p, Hv(k.scrollOptions))),
        O
    }, [r.contextId, s, p, a])
      , v = U(function() {
        var S = t.current
          , E = ts(S);
        return S && E || L(),
        md(E)
    }, [])
      , x = U(function() {
        var S = t.current;
        S || L();
        var E = ts(S);
        t.current = null,
        E && (f.cancel(),
        E.removeAttribute(zv.contextId),
        E.removeEventListener("scroll", p, Hv(S.scrollOptions)))
    }, [p, f])
      , g = U(function(S) {
        var E = t.current;
        E || L();
        var C = ts(E);
        C || L(),
        C.scrollTop += S.y,
        C.scrollLeft += S.x
    }, [])
      , h = te(function() {
        return {
            getDimensionAndWatchScroll: m,
            getScrollWhileDragging: v,
            dragStopped: x,
            scroll: g
        }
    }, [x, m, v, g])
      , y = te(function() {
        return {
            uniqueId: n,
            descriptor: s,
            callbacks: h
        }
    }, [h, s, n]);
    pt(function() {
        return l.current = y.descriptor,
        o.droppable.register(y),
        function() {
            t.current && x(),
            o.droppable.unregister(y)
        }
    }, [h, s, x, y, i, o.droppable]),
    pt(function() {
        t.current && i.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled)
    }, [e.isDropDisabled, i]),
    pt(function() {
        t.current && i.updateDroppableIsCombineEnabled(l.current.id, e.isCombineEnabled)
    }, [e.isCombineEnabled, i])
}
function Yu() {}
var Gv = {
    width: 0,
    height: 0,
    margin: uI
}
  , _R = function(t) {
    var r = t.isAnimatingOpenOnMount
      , n = t.placeholder
      , o = t.animate;
    return r || o === "close" ? Gv : {
        height: n.client.borderBox.height,
        width: n.client.borderBox.width,
        margin: n.client.margin
    }
}
  , UR = function(t) {
    var r = t.isAnimatingOpenOnMount
      , n = t.placeholder
      , o = t.animate
      , i = _R({
        isAnimatingOpenOnMount: r,
        placeholder: n,
        animate: o
    });
    return {
        display: n.display,
        boxSizing: "border-box",
        width: i.width,
        height: i.height,
        marginTop: i.margin.top,
        marginRight: i.margin.right,
        marginBottom: i.margin.bottom,
        marginLeft: i.margin.left,
        flexShrink: "0",
        flexGrow: "0",
        pointerEvents: "none",
        transition: o !== "none" ? ki.placeholder : null
    }
};
function WR(e) {
    var t = b.useRef(null)
      , r = U(function() {
        t.current && (clearTimeout(t.current),
        t.current = null)
    }, [])
      , n = e.animate
      , o = e.onTransitionEnd
      , i = e.onClose
      , a = e.contextId
      , s = b.useState(e.animate === "open")
      , l = s[0]
      , u = s[1];
    b.useEffect(function() {
        return l ? n !== "open" ? (r(),
        u(!1),
        Yu) : t.current ? Yu : (t.current = setTimeout(function() {
            t.current = null,
            u(!1)
        }),
        r) : Yu
    }, [n, l, r]);
    var d = U(function(f) {
        f.propertyName === "height" && (o(),
        n === "close" && i())
    }, [n, i, o])
      , c = UR({
        isAnimatingOpenOnMount: l,
        animate: e.animate,
        placeholder: e.placeholder
    });
    return R.createElement(e.placeholder.tagName, {
        style: c,
        "data-rbd-placeholder-context-id": a,
        onTransitionEnd: d,
        ref: e.innerRef
    })
}
var VR = R.memo(WR)
  , ap = R.createContext(null)
  , HR = function(e) {
    ox(t, e);
    function t() {
        for (var n, o = arguments.length, i = new Array(o), a = 0; a < o; a++)
            i[a] = arguments[a];
        return n = e.call.apply(e, [this].concat(i)) || this,
        n.state = {
            isVisible: !!n.props.on,
            data: n.props.on,
            animate: n.props.shouldAnimate && n.props.on ? "open" : "none"
        },
        n.onClose = function() {
            n.state.animate === "close" && n.setState({
                isVisible: !1
            })
        }
        ,
        n
    }
    t.getDerivedStateFromProps = function(o, i) {
        return o.shouldAnimate ? o.on ? {
            isVisible: !0,
            data: o.on,
            animate: "open"
        } : i.isVisible ? {
            isVisible: !0,
            data: i.data,
            animate: "close"
        } : {
            isVisible: !1,
            animate: "close",
            data: null
        } : {
            isVisible: !!o.on,
            data: o.on,
            animate: "none"
        }
    }
    ;
    var r = t.prototype;
    return r.render = function() {
        if (!this.state.isVisible)
            return null;
        var o = {
            onClose: this.onClose,
            data: this.state.data,
            animate: this.state.animate
        };
        return this.props.children(o)
    }
    ,
    t
}(R.PureComponent)
  , qv = {
    dragging: 5e3,
    dropAnimating: 4500
}
  , GR = function(t, r) {
    return r ? ki.drop(r.duration) : t ? ki.snap : ki.fluid
}
  , qR = function(t, r) {
    return t ? r ? ia.opacity.drop : ia.opacity.combining : null
}
  , KR = function(t) {
    return t.forceShouldAnimate != null ? t.forceShouldAnimate : t.mode === "SNAP"
};
function QR(e) {
    var t = e.dimension
      , r = t.client
      , n = e.offset
      , o = e.combineWith
      , i = e.dropping
      , a = !!o
      , s = KR(e)
      , l = !!i
      , u = l ? dd.drop(n, a) : dd.moveTo(n)
      , d = {
        position: "fixed",
        top: r.marginBox.top,
        left: r.marginBox.left,
        boxSizing: "border-box",
        width: r.borderBox.width,
        height: r.borderBox.height,
        transition: GR(s, i),
        transform: u,
        opacity: qR(a, l),
        zIndex: l ? qv.dropAnimating : qv.dragging,
        pointerEvents: "none"
    };
    return d
}
function YR(e) {
    return {
        transform: dd.moveTo(e.offset),
        transition: e.shouldAnimateDisplacement ? null : "none"
    }
}
function XR(e) {
    return e.type === "DRAGGING" ? QR(e) : YR(e)
}
function JR(e, t, r) {
    r === void 0 && (r = Te);
    var n = window.getComputedStyle(t)
      , o = t.getBoundingClientRect()
      , i = Ex(o, n)
      , a = tl(i, r)
      , s = {
        client: i,
        tagName: t.tagName.toLowerCase(),
        display: n.display
    }
      , l = {
        x: i.marginBox.width,
        y: i.marginBox.height
    }
      , u = {
        descriptor: e,
        placeholder: s,
        displaceBy: l,
        client: i,
        page: a
    };
    return u
}
function ZR(e) {
    var t = op("draggable")
      , r = e.descriptor
      , n = e.registry
      , o = e.getDraggableRef
      , i = e.canDragInteractiveElements
      , a = e.shouldRespectForcePress
      , s = e.isEnabled
      , l = te(function() {
        return {
            canDragInteractiveElements: i,
            shouldRespectForcePress: a,
            isEnabled: s
        }
    }, [i, s, a])
      , u = U(function(p) {
        var m = o();
        return m || L(),
        JR(r, m, p)
    }, [r, o])
      , d = te(function() {
        return {
            uniqueId: t,
            descriptor: r,
            options: l,
            getDimension: u
        }
    }, [r, u, l, t])
      , c = b.useRef(d)
      , f = b.useRef(!0);
    pt(function() {
        return n.draggable.register(c.current),
        function() {
            return n.draggable.unregister(c.current)
        }
    }, [n.draggable]),
    pt(function() {
        if (f.current) {
            f.current = !1;
            return
        }
        var p = c.current;
        c.current = d,
        n.draggable.update(d, p)
    }, [d, n.draggable])
}
function eO(e) {
    e.preventDefault()
}
function tO(e) {
    var t = b.useRef(null)
      , r = U(function(k) {
        t.current = k
    }, [])
      , n = U(function() {
        return t.current
    }, [])
      , o = sl(Jl)
      , i = o.contextId
      , a = o.dragHandleUsageInstructionsId
      , s = o.registry
      , l = sl(ap)
      , u = l.type
      , d = l.droppableId
      , c = te(function() {
        return {
            id: e.draggableId,
            index: e.index,
            type: u,
            droppableId: d
        }
    }, [e.draggableId, e.index, u, d])
      , f = e.children
      , p = e.draggableId
      , m = e.isEnabled
      , v = e.shouldRespectForcePress
      , x = e.canDragInteractiveElements
      , g = e.isClone
      , h = e.mapped
      , y = e.dropAnimationFinished;
    if (!g) {
        var S = te(function() {
            return {
                descriptor: c,
                registry: s,
                getDraggableRef: n,
                canDragInteractiveElements: x,
                shouldRespectForcePress: v,
                isEnabled: m
            }
        }, [c, s, n, x, v, m]);
        ZR(S)
    }
    var E = te(function() {
        return m ? {
            tabIndex: 0,
            role: "button",
            "aria-describedby": a,
            "data-rbd-drag-handle-draggable-id": p,
            "data-rbd-drag-handle-context-id": i,
            draggable: !1,
            onDragStart: eO
        } : null
    }, [i, a, p, m])
      , C = U(function(k) {
        h.type === "DRAGGING" && h.dropping && k.propertyName === "transform" && y()
    }, [y, h])
      , P = te(function() {
        var k = XR(h)
          , O = h.type === "DRAGGING" && h.dropping ? C : null
          , F = {
            innerRef: r,
            draggableProps: {
                "data-rbd-draggable-context-id": i,
                "data-rbd-draggable-id": p,
                style: k,
                onTransitionEnd: O
            },
            dragHandleProps: E
        };
        return F
    }, [i, E, p, h, C, r])
      , D = te(function() {
        return {
            draggableId: c.id,
            type: c.type,
            source: {
                index: c.index,
                droppableId: c.droppableId
            }
        }
    }, [c.droppableId, c.id, c.index, c.type]);
    return f(P, h.snapshot, D)
}
var gw = function(e, t) {
    return e === t
}
  , yw = function(e) {
    var t = e.combine
      , r = e.destination;
    return r ? r.droppableId : t ? t.droppableId : null
}
  , rO = function(t) {
    return t.combine ? t.combine.draggableId : null
}
  , nO = function(t) {
    return t.at && t.at.type === "COMBINE" ? t.at.combine.draggableId : null
};
function oO() {
    var e = ke(function(o, i) {
        return {
            x: o,
            y: i
        }
    })
      , t = ke(function(o, i, a, s, l) {
        return {
            isDragging: !0,
            isClone: i,
            isDropAnimating: !!l,
            dropAnimation: l,
            mode: o,
            draggingOver: a,
            combineWith: s,
            combineTargetFor: null
        }
    })
      , r = ke(function(o, i, a, s, l, u, d) {
        return {
            mapped: {
                type: "DRAGGING",
                dropping: null,
                draggingOver: l,
                combineWith: u,
                mode: i,
                offset: o,
                dimension: a,
                forceShouldAnimate: d,
                snapshot: t(i, s, l, u, null)
            }
        }
    })
      , n = function(i, a) {
        if (i.isDragging) {
            if (i.critical.draggable.id !== a.draggableId)
                return null;
            var s = i.current.client.offset
              , l = i.dimensions.draggables[a.draggableId]
              , u = ft(i.impact)
              , d = nO(i.impact)
              , c = i.forceShouldAnimate;
            return r(e(s.x, s.y), i.movementMode, l, a.isClone, u, d, c)
        }
        if (i.phase === "DROP_ANIMATING") {
            var f = i.completed;
            if (f.result.draggableId !== a.draggableId)
                return null;
            var p = a.isClone
              , m = i.dimensions.draggables[a.draggableId]
              , v = f.result
              , x = v.mode
              , g = yw(v)
              , h = rO(v)
              , y = i.dropDuration
              , S = {
                duration: y,
                curve: Xf.drop,
                moveTo: i.newHomeClientOffset,
                opacity: h ? ia.opacity.drop : null,
                scale: h ? ia.scale.drop : null
            };
            return {
                mapped: {
                    type: "DRAGGING",
                    offset: i.newHomeClientOffset,
                    dimension: m,
                    dropping: S,
                    draggingOver: g,
                    combineWith: h,
                    mode: x,
                    forceShouldAnimate: null,
                    snapshot: t(x, p, g, h, S)
                }
            }
        }
        return null
    };
    return n
}
function xw(e) {
    return {
        isDragging: !1,
        isDropAnimating: !1,
        isClone: !1,
        dropAnimation: null,
        mode: null,
        draggingOver: null,
        combineTargetFor: e,
        combineWith: null
    }
}
var iO = {
    mapped: {
        type: "SECONDARY",
        offset: Te,
        combineTargetFor: null,
        shouldAnimateDisplacement: !0,
        snapshot: xw(null)
    }
};
function aO() {
    var e = ke(function(a, s) {
        return {
            x: a,
            y: s
        }
    })
      , t = ke(xw)
      , r = ke(function(a, s, l) {
        return s === void 0 && (s = null),
        {
            mapped: {
                type: "SECONDARY",
                offset: a,
                combineTargetFor: s,
                shouldAnimateDisplacement: l,
                snapshot: t(s)
            }
        }
    })
      , n = function(s) {
        return s ? r(Te, s, !0) : null
    }
      , o = function(s, l, u, d) {
        var c = u.displaced.visible[s]
          , f = !!(d.inVirtualList && d.effected[s])
          , p = Kl(u)
          , m = p && p.draggableId === s ? l : null;
        if (!c) {
            if (!f)
                return n(m);
            if (u.displaced.invisible[s])
                return null;
            var v = Xo(d.displacedBy.point)
              , x = e(v.x, v.y);
            return r(x, m, !0)
        }
        if (f)
            return n(m);
        var g = u.displacedBy.point
          , h = e(g.x, g.y);
        return r(h, m, c.shouldAnimate)
    }
      , i = function(s, l) {
        if (s.isDragging)
            return s.critical.draggable.id === l.draggableId ? null : o(l.draggableId, s.critical.draggable.id, s.impact, s.afterCritical);
        if (s.phase === "DROP_ANIMATING") {
            var u = s.completed;
            return u.result.draggableId === l.draggableId ? null : o(l.draggableId, u.result.draggableId, u.impact, u.afterCritical)
        }
        return null
    };
    return i
}
var sO = function() {
    var t = oO()
      , r = aO()
      , n = function(i, a) {
        return t(i, a) || r(i, a) || iO
    };
    return n
}
  , lO = {
    dropAnimationFinished: Jx
}
  , uO = Sx(sO, lO, null, {
    context: np,
    pure: !0,
    areStatePropsEqual: gw
})(tO);
function ww(e) {
    var t = sl(ap)
      , r = t.isUsingCloneFor;
    return r === e.draggableId && !e.isClone ? null : R.createElement(uO, e)
}
function bw(e) {
    var t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0
      , r = !!e.disableInteractiveElementBlocking
      , n = !!e.shouldRespectForcePress;
    return R.createElement(ww, V({}, e, {
        isClone: !1,
        isEnabled: t,
        canDragInteractiveElements: r,
        shouldRespectForcePress: n
    }))
}
function cO(e) {
    var t = b.useContext(Jl);
    t || L();
    var r = t.contextId
      , n = t.isMovementAllowed
      , o = b.useRef(null)
      , i = b.useRef(null)
      , a = e.children
      , s = e.droppableId
      , l = e.type
      , u = e.mode
      , d = e.direction
      , c = e.ignoreContainerClipping
      , f = e.isDropDisabled
      , p = e.isCombineEnabled
      , m = e.snapshot
      , v = e.useClone
      , x = e.updateViewportMaxScroll
      , g = e.getContainerForClone
      , h = U(function() {
        return o.current
    }, [])
      , y = U(function(F) {
        o.current = F
    }, []);
    U(function() {
        return i.current
    }, []);
    var S = U(function(F) {
        i.current = F
    }, [])
      , E = U(function() {
        n() && x({
            maxScroll: nw()
        })
    }, [n, x]);
    zR({
        droppableId: s,
        type: l,
        mode: u,
        direction: d,
        isDropDisabled: f,
        isCombineEnabled: p,
        ignoreContainerClipping: c,
        getDroppableRef: h
    });
    var C = R.createElement(HR, {
        on: e.placeholder,
        shouldAnimate: e.shouldAnimatePlaceholder
    }, function(F) {
        var j = F.onClose
          , W = F.data
          , A = F.animate;
        return R.createElement(VR, {
            placeholder: W,
            onClose: j,
            innerRef: S,
            animate: A,
            contextId: r,
            onTransitionEnd: E
        })
    })
      , P = te(function() {
        return {
            innerRef: y,
            placeholder: C,
            droppableProps: {
                "data-rbd-droppable-id": s,
                "data-rbd-droppable-context-id": r
            }
        }
    }, [r, s, C, y])
      , D = v ? v.dragging.draggableId : null
      , k = te(function() {
        return {
            droppableId: s,
            type: l,
            isUsingCloneFor: D
        }
    }, [s, D, l]);
    function O() {
        if (!v)
            return null;
        var F = v.dragging
          , j = v.render
          , W = R.createElement(ww, {
            draggableId: F.draggableId,
            index: F.source.index,
            isClone: !0,
            isEnabled: !0,
            shouldRespectForcePress: !1,
            canDragInteractiveElements: !0
        }, function(A, G) {
            return j(A, G, F)
        });
        return df.createPortal(W, g())
    }
    return R.createElement(ap.Provider, {
        value: k
    }, a(P, m), O())
}
var Xu = function(t, r) {
    return t === r.droppable.type
}
  , Kv = function(t, r) {
    return r.draggables[t.draggable.id]
}
  , dO = function() {
    var t = {
        placeholder: null,
        shouldAnimatePlaceholder: !0,
        snapshot: {
            isDraggingOver: !1,
            draggingOverWith: null,
            draggingFromThisWith: null,
            isUsingPlaceholder: !1
        },
        useClone: null
    }
      , r = V({}, t, {
        shouldAnimatePlaceholder: !1
    })
      , n = ke(function(a) {
        return {
            draggableId: a.id,
            type: a.type,
            source: {
                index: a.index,
                droppableId: a.droppableId
            }
        }
    })
      , o = ke(function(a, s, l, u, d, c) {
        var f = d.descriptor.id
          , p = d.descriptor.droppableId === a;
        if (p) {
            var m = c ? {
                render: c,
                dragging: n(d.descriptor)
            } : null
              , v = {
                isDraggingOver: l,
                draggingOverWith: l ? f : null,
                draggingFromThisWith: f,
                isUsingPlaceholder: !0
            };
            return {
                placeholder: d.placeholder,
                shouldAnimatePlaceholder: !1,
                snapshot: v,
                useClone: m
            }
        }
        if (!s)
            return r;
        if (!u)
            return t;
        var x = {
            isDraggingOver: l,
            draggingOverWith: f,
            draggingFromThisWith: null,
            isUsingPlaceholder: !0
        };
        return {
            placeholder: d.placeholder,
            shouldAnimatePlaceholder: !0,
            snapshot: x,
            useClone: null
        }
    })
      , i = function(s, l) {
        var u = l.droppableId
          , d = l.type
          , c = !l.isDropDisabled
          , f = l.renderClone;
        if (s.isDragging) {
            var p = s.critical;
            if (!Xu(d, p))
                return r;
            var m = Kv(p, s.dimensions)
              , v = ft(s.impact) === u;
            return o(u, c, v, v, m, f)
        }
        if (s.phase === "DROP_ANIMATING") {
            var x = s.completed;
            if (!Xu(d, x.critical))
                return r;
            var g = Kv(x.critical, s.dimensions);
            return o(u, c, yw(x.result) === u, ft(x.impact) === u, g, f)
        }
        if (s.phase === "IDLE" && s.completed && !s.shouldFlush) {
            var h = s.completed;
            if (!Xu(d, h.critical))
                return r;
            var y = ft(h.impact) === u
              , S = !!(h.impact.at && h.impact.at.type === "COMBINE")
              , E = h.critical.droppable.id === u;
            return y ? S ? t : r : E ? t : r
        }
        return r
    };
    return i
}
  , fO = {
    updateViewportMaxScroll: bk
};
function pO() {
    return document.body || L(),
    document.body
}
var mO = {
    mode: "standard",
    type: "DEFAULT",
    direction: "vertical",
    isDropDisabled: !1,
    isCombineEnabled: !1,
    ignoreContainerClipping: !1,
    renderClone: null,
    getContainerForClone: pO
}
  , sp = Sx(dO, fO, null, {
    context: np,
    pure: !0,
    areStatePropsEqual: gw
})(cO);
sp.defaultProps = mO;
const vO = [{
    name: "Red",
    value: "bg-red-500"
}, {
    name: "Blue",
    value: "bg-blue-500"
}, {
    name: "Green",
    value: "bg-green-500"
}, {
    name: "Yellow",
    value: "bg-yellow-500"
}, {
    name: "Purple",
    value: "bg-purple-500"
}, {
    name: "Orange",
    value: "bg-orange-500"
}]
  , Qv = [{
    name: "Default",
    value: ""
}, {
    name: "Light Blue",
    value: "bg-blue-50"
}, {
    name: "Light Green",
    value: "bg-green-50"
}, {
    name: "Light Yellow",
    value: "bg-yellow-50"
}, {
    name: "Light Pink",
    value: "bg-pink-50"
}, {
    name: "Light Purple",
    value: "bg-purple-50"
}, {
    name: "Light Gray",
    value: "bg-gray-50"
}, {
    name: "Light Orange",
    value: "bg-orange-50"
}, {
    name: "Light Red",
    value: "bg-red-50"
}]
  , hO = ({card: e, listTitle: t, isOpen: r, onClose: n, onUpdate: o}) => {
    var E;
    const [i,a] = b.useState(e)
      , [s,l] = b.useState(!1)
      , [u,d] = b.useState("")
      , [c,f] = b.useState(!1);
    if (!r)
        return null;
    const p = () => {
        l(!1),
        o(i)
    }
      , m = C => {
        const P = {
            ...i,
            description: C
        };
        a(P),
        o(P)
    }
      , v = () => {
        if (u.trim()) {
            const C = u.trim();
            console.log("Adding image URL:", C);
            const P = {
                ...i,
                imageUrl: C
            };
            a(P),
            o(P),
            d("")
        }
    }
      , x = () => {
        const C = {
            ...i,
            imageUrl: void 0
        };
        a(C),
        o(C)
    }
      , g = C => {
        const P = {
            ...i,
            dueDate: C
        };
        a(P),
        o(P)
    }
      , h = (C, P) => {
        const D = i.labels || []
          , k = D.find(j => j.color === C);
        let O;
        k ? O = D.filter(j => j.color !== C) : O = [...D, {
            id: `label-${Date.now()}`,
            color: C,
            text: P
        }];
        const F = {
            ...i,
            labels: O
        };
        a(F),
        o(F)
    }
      , y = () => {
        const C = {
            ...i,
            isComplete: !i.isComplete
        };
        a(C),
        o(C)
    }
      , S = C => {
        const P = {
            ...i,
            backgroundColor: C
        };
        a(P),
        o(P),
        f(!1)
    }
    ;
    return w.jsx("div", {
        className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",
        children: w.jsxs("div", {
            className: "bg-card rounded-xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl border border-border",
            children: [w.jsx("div", {
                className: "bg-gradient-to-r from-primary/5 to-accent/5 p-6 border-b border-border",
                children: w.jsxs("div", {
                    className: "flex items-start justify-between",
                    children: [w.jsxs("div", {
                        className: "flex-1",
                        children: [w.jsxs("div", {
                            className: "flex items-center gap-3 mb-3",
                            children: [w.jsx("button", {
                                onClick: y,
                                className: `flex items-center justify-center w-7 h-7 rounded-lg border-2 
                           transition-all hover:scale-105 ${i.isComplete ? "bg-green-500 border-green-500 shadow-sm" : "border-muted-foreground hover:border-primary hover:bg-primary/10"}`,
                                children: i.isComplete && w.jsx(aC, {
                                    className: "w-4 h-4 text-white"
                                })
                            }), s ? w.jsx("input", {
                                type: "text",
                                value: i.title,
                                onChange: C => a({
                                    ...i,
                                    title: C.target.value
                                }),
                                onBlur: p,
                                onKeyDown: C => C.key === "Enter" && p(),
                                className: `text-2xl font-bold bg-transparent border-2 border-primary 
                             rounded-lg px-3 py-2 flex-1 focus:outline-none text-foreground
                             ${i.isComplete ? "line-through opacity-60" : ""}`,
                                autoFocus: !0
                            }) : w.jsx("h2", {
                                className: `text-2xl font-bold text-foreground cursor-pointer hover:bg-muted/50 
                             rounded-lg px-3 py-2 -ml-3 flex-1 transition-colors ${i.isComplete ? "line-through opacity-60" : ""}`,
                                onClick: () => l(!0),
                                children: i.title
                            })]
                        }), w.jsxs("div", {
                            className: "flex items-center gap-4 text-sm text-muted-foreground",
                            children: [w.jsxs("span", {
                                className: "flex items-center gap-2",
                                children: [w.jsx("div", {
                                    className: "w-2 h-2 bg-primary rounded-full"
                                }), "in list ", w.jsx("span", {
                                    className: "font-semibold text-foreground",
                                    children: t
                                })]
                            }), i.isComplete && w.jsxs("span", {
                                className: "flex items-center gap-1 text-green-600 font-medium",
                                children: [w.jsx(Yy, {
                                    className: "w-4 h-4"
                                }), "Completed"]
                            })]
                        })]
                    }), w.jsx("button", {
                        onClick: n,
                        className: "p-2 hover:bg-muted rounded-lg transition-colors hover:scale-105",
                        children: w.jsx(qi, {
                            className: "w-6 h-6 text-muted-foreground"
                        })
                    })]
                })
            }), w.jsx("div", {
                className: "p-6 overflow-y-auto max-h-[calc(90vh-200px)]",
                children: w.jsxs("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                    children: [w.jsxs("div", {
                        className: "lg:col-span-2 space-y-6",
                        children: [w.jsxs("div", {
                            className: "space-y-3",
                            children: [w.jsxs("h3", {
                                className: "text-lg font-semibold text-foreground flex items-center gap-2",
                                children: [w.jsx(Xy, {
                                    className: "w-5 h-5"
                                }), "Description"]
                            }), w.jsx("textarea", {
                                value: i.description || "",
                                onChange: C => m(C.target.value),
                                placeholder: "Add a more detailed description...",
                                className: `w-full px-4 py-3 border border-border rounded-lg bg-background 
                           text-foreground placeholder:text-muted-foreground resize-none
                           focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px]
                           transition-all hover:border-primary/50`,
                                rows: 4
                            })]
                        }), w.jsxs("div", {
                            className: "space-y-3",
                            children: [w.jsxs("h3", {
                                className: "text-lg font-semibold text-foreground flex items-center gap-2",
                                children: [w.jsx(gf, {
                                    className: "w-5 h-5"
                                }), "Image Attachment"]
                            }), i.imageUrl ? w.jsxs("div", {
                                className: "space-y-3",
                                children: [w.jsxs("div", {
                                    className: "relative rounded-lg overflow-hidden border border-border shadow-sm",
                                    children: [w.jsx("img", {
                                        src: i.imageUrl,
                                        alt: "Card attachment",
                                        className: "w-full h-64 object-cover",
                                        onError: C => {
                                            console.error("Image failed to load:", i.imageUrl),
                                            C.target.src = "https://via.placeholder.com/400x200?text=Invalid+Image+URL"
                                        }
                                        ,
                                        onLoad: () => {
                                            console.log("Image loaded successfully:", i.imageUrl)
                                        }
                                    }), w.jsx("button", {
                                        onClick: x,
                                        className: `absolute top-3 right-3 p-2 bg-black/50 hover:bg-black/70 
                                 rounded-lg transition-colors backdrop-blur-sm`,
                                        children: w.jsx(qi, {
                                            className: "w-4 h-4 text-white"
                                        })
                                    })]
                                }), w.jsxs("div", {
                                    className: "flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 rounded-lg p-2",
                                    children: [w.jsx(Qc, {
                                        className: "w-4 h-4"
                                    }), w.jsx("span", {
                                        className: "truncate",
                                        children: i.imageUrl
                                    })]
                                })]
                            }) : w.jsxs("div", {
                                className: "flex gap-3",
                                children: [w.jsx("input", {
                                    type: "url",
                                    value: u,
                                    onChange: C => d(C.target.value),
                                    onKeyDown: C => C.key === "Enter" && v(),
                                    placeholder: "Enter image URL...",
                                    className: `flex-1 px-4 py-3 border border-border rounded-lg bg-background 
                               text-foreground placeholder:text-muted-foreground
                               focus:outline-none focus:ring-2 focus:ring-primary
                               transition-all hover:border-primary/50`
                                }), w.jsx("button", {
                                    onClick: v,
                                    className: `px-6 py-3 bg-primary text-primary-foreground rounded-lg
                               hover:opacity-90 transition-all font-medium shadow-sm
                               hover:shadow-md hover:scale-105`,
                                    children: "Add Image"
                                })]
                            })]
                        })]
                    }), w.jsxs("div", {
                        className: "space-y-6",
                        children: [w.jsxs("div", {
                            className: "space-y-3",
                            children: [w.jsxs("h3", {
                                className: "text-lg font-semibold text-foreground flex items-center gap-2",
                                children: [w.jsx(Yc, {
                                    className: "w-5 h-5"
                                }), "Card Color"]
                            }), w.jsxs("div", {
                                className: "relative",
                                children: [w.jsxs("button", {
                                    onClick: () => f(!c),
                                    className: `w-full px-4 py-3 rounded-lg border border-border flex items-center gap-3
                             hover:bg-muted transition-all ${i.backgroundColor || "bg-card"}`,
                                    children: [w.jsx("div", {
                                        className: `w-6 h-6 rounded-lg border border-border ${i.backgroundColor || "bg-card"}`
                                    }), w.jsx("span", {
                                        className: "text-sm text-foreground font-medium",
                                        children: ((E = Qv.find(C => C.value === i.backgroundColor)) == null ? void 0 : E.name) || "Default"
                                    })]
                                }), c && w.jsx("div", {
                                    className: "absolute top-full mt-2 p-4 bg-card border border-border rounded-lg shadow-lg z-10 w-full",
                                    children: w.jsx("div", {
                                        className: "grid grid-cols-2 gap-3",
                                        children: Qv.map(C => w.jsxs("button", {
                                            onClick: () => S(C.value),
                                            className: `p-3 rounded-lg border-2 transition-all hover:scale-105 ${i.backgroundColor === C.value ? "border-primary ring-2 ring-primary/20" : "border-transparent hover:border-muted"}`,
                                            children: [w.jsx("div", {
                                                className: `w-full h-8 rounded ${C.value || "bg-card border border-border"}`
                                            }), w.jsx("span", {
                                                className: "text-xs text-muted-foreground mt-2 block text-center",
                                                children: C.name
                                            })]
                                        }, C.value))
                                    })
                                })]
                            })]
                        }), w.jsxs("div", {
                            className: "space-y-3",
                            children: [w.jsxs("h3", {
                                className: "text-lg font-semibold text-foreground flex items-center gap-2",
                                children: [w.jsx(uC, {
                                    className: "w-5 h-5"
                                }), "Labels"]
                            }), w.jsx("div", {
                                className: "flex flex-wrap gap-2",
                                children: vO.map(C => {
                                    var D;
                                    const P = (D = i.labels) == null ? void 0 : D.some(k => k.color === C.value);
                                    return w.jsx("button", {
                                        onClick: () => h(C.value, C.name),
                                        className: `px-4 py-2 rounded-lg text-white text-sm font-medium 
                                 transition-all hover:scale-105 ${C.value} ${P ? "ring-2 ring-offset-2 ring-primary shadow-md" : "opacity-70 hover:opacity-100"}`,
                                        children: C.name
                                    }, C.value)
                                }
                                )
                            })]
                        }), w.jsxs("div", {
                            className: "space-y-3",
                            children: [w.jsxs("h3", {
                                className: "text-lg font-semibold text-foreground flex items-center gap-2",
                                children: [w.jsx(Qy, {
                                    className: "w-5 h-5"
                                }), "Due Date"]
                            }), w.jsx("input", {
                                type: "date",
                                value: i.dueDate || "",
                                onChange: C => g(C.target.value),
                                className: `w-full px-4 py-3 border border-border rounded-lg bg-background 
                           text-foreground focus:outline-none focus:ring-2 focus:ring-primary
                           transition-all hover:border-primary/50`
                            })]
                        })]
                    })]
                })
            })]
        })
    })
}
  , gO = ({card: e, index: t, listTitle: r, onUpdateCard: n}) => {
    const [o,i] = b.useState(!1)
      , a = u => {
        if (!u)
            return null;
        const d = /(https?:\/\/[^\s]+)/i
          , c = u.match(d);
        return c ? c[0] : null
    }
      , s = a(e.description) || a(e.title)
      , l = u => {
        const d = new Date
          , f = new Date(u).getTime() - d.getTime()
          , p = Math.ceil(f / (1e3 * 60 * 60 * 24));
        return p < 0 ? "Overdue" : p === 0 ? "Today" : p === 1 ? "Tomorrow" : `${p} days`
    }
    ;
    return w.jsxs(w.Fragment, {
        children: [w.jsx(bw, {
            draggableId: e.id,
            index: t,
            children: (u, d) => w.jsxs("div", {
                ref: u.innerRef,
                ...u.draggableProps,
                className: `
              rounded-lg mb-2 shadow-card transition-all duration-200 hover:shadow-hover
              ${d.isDragging ? "shadow-drag rotate-2 opacity-90 scale-105" : ""}
              ${e.backgroundColor || "bg-card"}
              ${e.isComplete ? "opacity-75" : ""}
              group
            `,
                style: {
                    ...u.draggableProps.style
                },
                children: [w.jsxs("div", {
                    ...u.dragHandleProps,
                    className: "flex items-center justify-between p-3 pb-2 cursor-grab active:cursor-grabbing",
                    children: [w.jsxs("div", {
                        className: "flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity",
                        children: [w.jsx(sC, {
                            className: "w-4 h-4 text-muted-foreground"
                        }), w.jsx("span", {
                            className: "text-xs text-muted-foreground font-medium",
                            children: "Drag to move"
                        })]
                    }), w.jsx("button", {
                        onClick: () => i(!0),
                        className: "text-xs text-muted-foreground hover:text-foreground transition-colors",
                        children: "Edit"
                    })]
                }), w.jsxs("div", {
                    onClick: () => i(!0),
                    className: "px-3 pb-3 cursor-pointer",
                    children: [e.imageUrl && w.jsx("div", {
                        className: "mb-2 overflow-hidden rounded-md border border-border",
                        children: w.jsx("img", {
                            src: e.imageUrl,
                            alt: "Card preview",
                            className: "w-full aspect-video object-cover",
                            onError: c => {
                                c.target.style.display = "none"
                            }
                        })
                    }), !e.imageUrl && s && w.jsxs("a", {
                        href: s,
                        target: "_blank",
                        rel: "noreferrer",
                        className: "mb-2 flex items-center gap-2 rounded-md border border-border bg-background p-2 hover:bg-muted transition-colors",
                        onClick: c => c.stopPropagation(),
                        children: [w.jsx("img", {
                            src: `https://www.google.com/s2/favicons?sz=64&domain=${encodeURIComponent(new URL(s).hostname)}`,
                            alt: "favicon",
                            className: "w-4 h-4 rounded-sm",
                            onError: c => {
                                c.target.style.display = "none"
                            }
                        }), w.jsx(Qc, {
                            className: "w-3.5 h-3.5 text-muted-foreground"
                        }), w.jsx("span", {
                            className: "text-xs text-foreground truncate",
                            children: new URL(s).hostname
                        })]
                    }), e.isComplete && w.jsxs("div", {
                        className: "flex items-center gap-1 mb-2 text-green-600",
                        children: [w.jsx(Yy, {
                            className: "w-4 h-4"
                        }), w.jsx("span", {
                            className: "text-xs font-medium",
                            children: "Completed"
                        })]
                    }), e.labels && e.labels.length > 0 && w.jsx("div", {
                        className: "flex flex-wrap gap-1 mb-2",
                        children: e.labels.map(c => w.jsx("span", {
                            className: `inline-block px-2 py-0.5 rounded-full text-white text-xs 
                             font-medium ${c.color}`,
                            children: c.text
                        }, c.id))
                    }), w.jsx("p", {
                        className: `text-foreground text-sm leading-relaxed ${e.isComplete ? "line-through" : ""}`,
                        children: e.title
                    }), w.jsxs("div", {
                        className: "flex items-center gap-3 mt-2",
                        children: [e.description && w.jsx(Xy, {
                            className: "w-3.5 h-3.5 text-muted-foreground"
                        }), e.imageUrl && w.jsx(gf, {
                            className: "w-3.5 h-3.5 text-muted-foreground"
                        }), !e.imageUrl && s && w.jsx(Qc, {
                            className: "w-3.5 h-3.5 text-muted-foreground"
                        }), e.dueDate && w.jsxs("div", {
                            className: `flex items-center gap-1 text-xs ${l(e.dueDate) === "Overdue" ? "text-destructive" : "text-muted-foreground"}`,
                            children: [w.jsx(Qy, {
                                className: "w-3.5 h-3.5"
                            }), w.jsx("span", {
                                children: l(e.dueDate)
                            })]
                        })]
                    })]
                })]
            })
        }), w.jsx(hO, {
            card: e,
            listTitle: r,
            isOpen: o,
            onClose: () => i(!1),
            onUpdate: n
        })]
    })
}
  , yO = ({onAddCard: e}) => {
    const [t,r] = b.useState(!1)
      , [n,o] = b.useState("")
      , i = b.useRef(null);
    b.useEffect( () => {
        t && i.current && i.current.focus()
    }
    , [t]);
    const a = () => {
        n.trim() && (e(n.trim()),
        o(""),
        r(!1))
    }
      , s = () => {
        o(""),
        r(!1)
    }
      , l = u => {
        u.key === "Enter" && !u.shiftKey ? (u.preventDefault(),
        a()) : u.key === "Escape" && s()
    }
    ;
    return t ? w.jsxs("div", {
        className: "mt-2",
        children: [w.jsx("textarea", {
            ref: i,
            value: n,
            onChange: u => o(u.target.value),
            onKeyDown: l,
            placeholder: "Enter a title for this card...",
            className: `w-full p-3 rounded-lg bg-card shadow-card resize-none text-foreground
                     border-2 border-transparent focus:border-primary focus:outline-none
                     placeholder:text-muted-foreground`,
            rows: 3
        }), w.jsxs("div", {
            className: "flex gap-2 mt-2",
            children: [w.jsx("button", {
                onClick: a,
                className: `px-4 py-2 bg-primary text-primary-foreground rounded-md
                     hover:opacity-90 transition-opacity font-medium`,
                children: "Add card"
            }), w.jsx("button", {
                onClick: s,
                className: "p-2 hover:bg-muted rounded-md transition-colors",
                children: w.jsx(qi, {
                    className: "w-5 h-5 text-muted-foreground"
                })
            })]
        })]
    }) : w.jsxs("button", {
        onClick: () => r(!0),
        className: `w-full mt-2 p-2 text-left rounded-lg hover:bg-muted/50
                 transition-colors group flex items-center gap-2 text-muted-foreground`,
        children: [w.jsx(Ws, {
            className: "w-4 h-4"
        }), w.jsx("span", {
            className: "text-sm font-medium",
            children: "Add a card"
        })]
    })
}
  , xO = ({list: e, index: t, onAddCard: r, onUpdateCard: n}) => w.jsx(bw, {
    draggableId: e.id,
    index: t,
    children: (o, i) => w.jsxs("div", {
        ref: o.innerRef,
        ...o.draggableProps,
        className: `
            bg-list rounded-lg p-3 w-72 flex-shrink-0 max-h-[calc(100vh-8rem)]
            flex flex-col border border-border shadow-card transition-all
            ${i.isDragging ? "shadow-lg scale-105 rotate-2" : ""}
          `,
        children: [w.jsx("div", {
            ...o.dragHandleProps,
            className: "font-semibold text-foreground px-2 py-1 mb-2 cursor-grab active:cursor-grabbing select-none",
            children: e.title
        }), w.jsx(sp, {
            droppableId: e.id,
            children: (a, s) => w.jsxs("div", {
                ref: a.innerRef,
                ...a.droppableProps,
                className: `
                  flex-1 min-h-[100px] max-h-[calc(100vh-12rem)] overflow-y-auto rounded-md transition-colors
                  ${s.isDraggingOver ? "bg-primary/10 ring-2 ring-primary/30" : "bg-transparent"}
                `,
                children: [e.cards.map( (l, u) => w.jsx(gO, {
                    card: l,
                    index: u,
                    listTitle: e.title,
                    onUpdateCard: n
                }, l.id)), a.placeholder]
            })
        }), w.jsx(yO, {
            onAddCard: a => r(e.id, a)
        })]
    })
})
  , wO = [{
    id: "list-1",
    title: "To Do",
    cards: [{
        id: "card-1",
        title: "Design new landing page mockup"
    }, {
        id: "card-2",
        title: "Research competitor pricing strategies"
    }, {
        id: "card-3",
        title: "Schedule team meeting for Q2 planning"
    }]
}, {
    id: "list-2",
    title: "In Progress",
    cards: [{
        id: "card-4",
        title: "Implement user authentication system"
    }, {
        id: "card-5",
        title: "Write API documentation"
    }]
}, {
    id: "list-3",
    title: "Review",
    cards: [{
        id: "card-6",
        title: "Code review for payment integration"
    }, {
        id: "card-7",
        title: "Test mobile responsiveness"
    }]
}, {
    id: "list-4",
    title: "Done",
    cards: [{
        id: "card-8",
        title: "Set up CI/CD pipeline"
    }, {
        id: "card-9",
        title: "Deploy staging environment"
    }, {
        id: "card-10",
        title: "Create project documentation"
    }]
}]
  , Yv = {
    lists: wO
}
  , Xv = e => `project-board-state-${e}`
  , bO = () => {
    const {workspaceId: e} = Z0()
      , [t,r] = b.useState({
        lists: []
    });
    b.useEffect( () => {
        if (!e)
            return;
        const s = Xv(e)
          , l = localStorage.getItem(s);
        if (l)
            try {
                r(JSON.parse(l))
            } catch (u) {
                console.error("Failed to parse saved state:", u),
                r(Yv)
            }
        else
            r(Yv)
    }
    , [e]),
    b.useEffect( () => {
        if (e && t.lists.length > 0) {
            const s = Xv(e);
            localStorage.setItem(s, JSON.stringify(t))
        }
    }
    , [t, e]);
    const n = s => {
        const {source: l, destination: u, type: d} = s;
        if (!u || l.droppableId === u.droppableId && l.index === u.index)
            return;
        const c = [...t.lists];
        if (d === "LIST") {
            const [v] = c.splice(l.index, 1);
            c.splice(u.index, 0, v),
            r({
                lists: c
            });
            return
        }
        const f = c.find(v => v.id === l.droppableId)
          , p = c.find(v => v.id === u.droppableId);
        if (!f || !p)
            return;
        const [m] = f.cards.splice(l.index, 1);
        p.cards.splice(u.index, 0, m),
        r({
            lists: c
        })
    }
      , o = (s, l) => {
        const u = t.lists.map(d => {
            if (d.id === s) {
                const c = {
                    id: `card-${Date.now()}`,
                    title: l
                };
                return {
                    ...d,
                    cards: [...d.cards, c]
                }
            }
            return d
        }
        );
        r({
            lists: u
        })
    }
      , i = s => {
        const l = t.lists.map(u => ({
            ...u,
            cards: u.cards.map(d => d.id === s.id ? s : d)
        }));
        r({
            lists: l
        })
    }
      , a = () => {
        const s = {
            id: `list-${Date.now()}`,
            title: `New List ${t.lists.length + 1}`,
            cards: []
        };
        r({
            lists: [...t.lists, s]
        })
    }
    ;
    return w.jsxs("div", {
        className: "min-h-screen bg-board",
        children: [w.jsx("main", {
            className: "p-6 md:p-8 overflow-x-auto",
            children: w.jsx(NR, {
                onDragEnd: n,
                children: w.jsx(sp, {
                    droppableId: "board",
                    type: "LIST",
                    direction: "horizontal",
                    children: (s, l) => w.jsxs("div", {
                        ref: s.innerRef,
                        ...s.droppableProps,
                        className: `
                  flex gap-4 md:gap-6 items-start min-h-[200px] pb-4 w-max
                  ${l.isDraggingOver ? "bg-primary/5 rounded-lg" : ""}
                `,
                        children: [t.lists.map( (u, d) => w.jsx(xO, {
                            list: u,
                            index: d,
                            onAddCard: o,
                            onUpdateCard: i
                        }, u.id)), s.placeholder]
                    })
                })
            })
        }), w.jsx("div", {
            className: "border-t border-border/50 mx-4"
        }), w.jsx("button", {
            onClick: a,
            className: "fixed bottom-6 right-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center w-14 h-14 hover:scale-105 z-50",
            title: "Add New List",
            children: w.jsx(Ws, {
                className: "w-6 h-6"
            })
        })]
    })
}
  , SO = () => {
    const {workspaceId: e} = Z0()
      , [t,r] = b.useState(null)
      , [n,o] = b.useState(!1);
    b.useEffect( () => {
        if (!e)
            return;
        const a = localStorage.getItem("workspaces");
        if (a)
            try {
                const l = JSON.parse(a).find(u => u.id === e);
                l && r(l)
            } catch (s) {
                console.error("Failed to parse saved workspaces:", s)
            }
    }
    , [e]);
    const i = a => {
        r(a);
        const s = localStorage.getItem("workspaces");
        if (s)
            try {
                const u = JSON.parse(s).map(d => d.id === a.id ? a : d);
                localStorage.setItem("workspaces", JSON.stringify(u))
            } catch (l) {
                console.error("Failed to update workspace:", l)
            }
    }
    ;
    return t ? w.jsxs("div", {
        className: "min-h-screen",
        style: {
            backgroundColor: t.backgroundColor || "hsl(var(--board-bg))",
            color: t.textColor || "hsl(var(--foreground))"
        },
        children: [w.jsx("div", {
            className: "backdrop-blur-sm p-4 shadow-md border-b",
            style: {
                backgroundColor: `${t.color.replace("bg-", "#").replace("-500", "")}90`,
                color: "white"
            },
            children: w.jsxs("div", {
                className: "container mx-auto flex items-center justify-between",
                children: [w.jsxs("div", {
                    className: "flex items-center gap-4",
                    children: [w.jsxs(Js, {
                        to: "/",
                        className: "flex items-center gap-2 text-white hover:text-white/80 transition-colors",
                        children: [w.jsx(iC, {
                            className: "w-5 h-5"
                        }), w.jsx("span", {
                            children: "Back to Workspaces"
                        })]
                    }), w.jsx("div", {
                        className: "h-6 w-px bg-white/30"
                    }), w.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [w.jsx("div", {
                            className: `w-8 h-8 rounded-lg ${t.color} flex items-center justify-center`,
                            children: w.jsx(Vs, {
                                className: "w-4 h-4 text-white"
                            })
                        }), w.jsxs("div", {
                            children: [w.jsx("h1", {
                                className: "text-xl font-semibold",
                                children: t.name
                            }), w.jsx("p", {
                                className: "text-sm opacity-80",
                                children: t.description
                            })]
                        })]
                    })]
                }), w.jsx("button", {
                    onClick: () => o(!0),
                    className: "p-2 hover:bg-white/10 rounded-lg transition-colors",
                    title: "Workspace Settings",
                    children: w.jsx(Vs, {
                        className: "w-5 h-5 text-white"
                    })
                })]
            })
        }), w.jsx(bO, {}), t && w.jsx(nx, {
            workspace: t,
            isOpen: n,
            onClose: () => o(!1),
            onSave: i
        })]
    }) : w.jsx("div", {
        className: "min-h-screen bg-board flex items-center justify-center",
        children: w.jsxs("div", {
            className: "text-center",
            children: [w.jsx("h1", {
                className: "text-2xl font-bold text-foreground mb-4",
                children: "Loading Workspace..."
            }), w.jsx(Js, {
                to: "/",
                className: "text-primary hover:text-primary/80 transition-colors",
                children: "Back to Workspaces"
            })]
        })
    })
}
  , CO = () => {
    const e = ha();
    return b.useEffect( () => {
        console.error("404 Error: User attempted to access non-existent route:", e.pathname)
    }
    , [e.pathname]),
    w.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-gray-100",
        children: w.jsxs("div", {
            className: "text-center",
            children: [w.jsx("h1", {
                className: "mb-4 text-4xl font-bold",
                children: "404"
            }), w.jsx("p", {
                className: "mb-4 text-xl text-gray-600",
                children: "Oops! Page not found"
            }), w.jsx("a", {
                href: "/",
                className: "text-blue-500 underline hover:text-blue-700",
                children: "Return to Home"
            })]
        })
    })
}
  , EO = new OP
  , PO = () => w.jsx(MP, {
    client: EO,
    children: w.jsxs(lP, {
        children: [w.jsx(HC, {}), w.jsx(CE, {}), w.jsx(RD, {
            future: {
                v7_startTransition: !0,
                v7_relativeSplatPath: !0
            },
            children: w.jsxs(ED, {
                children: [w.jsx(gs, {
                    path: "/",
                    element: w.jsx(jD, {})
                }), w.jsx(gs, {
                    path: "/workspace/:workspaceId",
                    element: w.jsx(SO, {})
                }), w.jsx(gs, {
                    path: "*",
                    element: w.jsx(CO, {})
                })]
            })
        })]
    })
});
xy(document.getElementById("root")).render(w.jsx(PO, {}));