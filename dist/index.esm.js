import * as x from "react";
import Xe, { isValidElement as St, Children as v0, forwardRef as vt, createContext as Pt, useContext as Ut, useState as nt, useCallback as ge, PureComponent as Gp, useMemo as Vt, useRef as ce, useEffect as be, cloneElement as tn, createElement as Xp, useImperativeHandle as Zp, Component as p0, useLayoutEffect as h0 } from "react";
import { createPortal as m0 } from "react-dom";
function cr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var pi = { exports: {} }, bn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bc;
function y0() {
  if (Bc) return bn;
  Bc = 1;
  var e = Xe, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(u, s, c) {
    var l, f = {}, d = null, v = null;
    c !== void 0 && (d = "" + c), s.key !== void 0 && (d = "" + s.key), s.ref !== void 0 && (v = s.ref);
    for (l in s) n.call(s, l) && !a.hasOwnProperty(l) && (f[l] = s[l]);
    if (u && u.defaultProps) for (l in s = u.defaultProps, s) f[l] === void 0 && (f[l] = s[l]);
    return { $$typeof: t, type: u, key: d, ref: v, props: f, _owner: i.current };
  }
  return bn.Fragment = r, bn.jsx = o, bn.jsxs = o, bn;
}
var xn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fc;
function g0() {
  return Fc || (Fc = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = Xe, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), u = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), h = Symbol.iterator, p = "@@iterator";
    function m(w) {
      if (w === null || typeof w != "object")
        return null;
      var T = h && w[h] || w[p];
      return typeof T == "function" ? T : null;
    }
    var y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(w) {
      {
        for (var T = arguments.length, I = new Array(T > 1 ? T - 1 : 0), W = 1; W < T; W++)
          I[W - 1] = arguments[W];
        b("error", w, I);
      }
    }
    function b(w, T, I) {
      {
        var W = y.ReactDebugCurrentFrame, re = W.getStackAddendum();
        re !== "" && (T += "%s", I = I.concat([re]));
        var ue = I.map(function(X) {
          return String(X);
        });
        ue.unshift("Warning: " + T), Function.prototype.apply.call(console[w], console, ue);
      }
    }
    var E = !1, P = !1, O = !1, A = !1, j = !1, N;
    N = Symbol.for("react.module.reference");
    function M(w) {
      return !!(typeof w == "string" || typeof w == "function" || w === n || w === a || j || w === i || w === c || w === l || A || w === v || E || P || O || typeof w == "object" && w !== null && (w.$$typeof === d || w.$$typeof === f || w.$$typeof === o || w.$$typeof === u || w.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      w.$$typeof === N || w.getModuleId !== void 0));
    }
    function k(w, T, I) {
      var W = w.displayName;
      if (W)
        return W;
      var re = T.displayName || T.name || "";
      return re !== "" ? I + "(" + re + ")" : I;
    }
    function D(w) {
      return w.displayName || "Context";
    }
    function L(w) {
      if (w == null)
        return null;
      if (typeof w.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof w == "function")
        return w.displayName || w.name || null;
      if (typeof w == "string")
        return w;
      switch (w) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case c:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof w == "object")
        switch (w.$$typeof) {
          case u:
            var T = w;
            return D(T) + ".Consumer";
          case o:
            var I = w;
            return D(I._context) + ".Provider";
          case s:
            return k(w, w.render, "ForwardRef");
          case f:
            var W = w.displayName || null;
            return W !== null ? W : L(w.type) || "Memo";
          case d: {
            var re = w, ue = re._payload, X = re._init;
            try {
              return L(X(ue));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, z = 0, H, U, de, Q, Ze, Mt, q;
    function Br() {
    }
    Br.__reactDisabledLog = !0;
    function hn() {
      {
        if (z === 0) {
          H = console.log, U = console.info, de = console.warn, Q = console.error, Ze = console.group, Mt = console.groupCollapsed, q = console.groupEnd;
          var w = {
            configurable: !0,
            enumerable: !0,
            value: Br,
            writable: !0
          };
          Object.defineProperties(console, {
            info: w,
            log: w,
            warn: w,
            error: w,
            group: w,
            groupCollapsed: w,
            groupEnd: w
          });
        }
        z++;
      }
    }
    function Je() {
      {
        if (z--, z === 0) {
          var w = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, w, {
              value: H
            }),
            info: B({}, w, {
              value: U
            }),
            warn: B({}, w, {
              value: de
            }),
            error: B({}, w, {
              value: Q
            }),
            group: B({}, w, {
              value: Ze
            }),
            groupCollapsed: B({}, w, {
              value: Mt
            }),
            groupEnd: B({}, w, {
              value: q
            })
          });
        }
        z < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var mn = y.ReactCurrentDispatcher, yn;
    function Fr(w, T, I) {
      {
        if (yn === void 0)
          try {
            throw Error();
          } catch (re) {
            var W = re.stack.trim().match(/\n( *(at )?)/);
            yn = W && W[1] || "";
          }
        return `
` + yn + w;
      }
    }
    var R = !1, V;
    {
      var G = typeof WeakMap == "function" ? WeakMap : Map;
      V = new G();
    }
    function C(w, T) {
      if (!w || R)
        return "";
      {
        var I = V.get(w);
        if (I !== void 0)
          return I;
      }
      var W;
      R = !0;
      var re = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ue;
      ue = mn.current, mn.current = null, hn();
      try {
        if (T) {
          var X = function() {
            throw Error();
          };
          if (Object.defineProperty(X.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(X, []);
            } catch (Qe) {
              W = Qe;
            }
            Reflect.construct(w, [], X);
          } else {
            try {
              X.call();
            } catch (Qe) {
              W = Qe;
            }
            w.call(X.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Qe) {
            W = Qe;
          }
          w();
        }
      } catch (Qe) {
        if (Qe && W && typeof Qe.stack == "string") {
          for (var Y = Qe.stack.split(`
`), Ye = W.stack.split(`
`), Oe = Y.length - 1, Se = Ye.length - 1; Oe >= 1 && Se >= 0 && Y[Oe] !== Ye[Se]; )
            Se--;
          for (; Oe >= 1 && Se >= 0; Oe--, Se--)
            if (Y[Oe] !== Ye[Se]) {
              if (Oe !== 1 || Se !== 1)
                do
                  if (Oe--, Se--, Se < 0 || Y[Oe] !== Ye[Se]) {
                    var ht = `
` + Y[Oe].replace(" at new ", " at ");
                    return w.displayName && ht.includes("<anonymous>") && (ht = ht.replace("<anonymous>", w.displayName)), typeof w == "function" && V.set(w, ht), ht;
                  }
                while (Oe >= 1 && Se >= 0);
              break;
            }
        }
      } finally {
        R = !1, mn.current = ue, Je(), Error.prepareStackTrace = re;
      }
      var zr = w ? w.displayName || w.name : "", mr = zr ? Fr(zr) : "";
      return typeof w == "function" && V.set(w, mr), mr;
    }
    function We(w, T, I) {
      return C(w, !1);
    }
    function ie(w) {
      var T = w.prototype;
      return !!(T && T.isReactComponent);
    }
    function Me(w, T, I) {
      if (w == null)
        return "";
      if (typeof w == "function")
        return C(w, ie(w));
      if (typeof w == "string")
        return Fr(w);
      switch (w) {
        case c:
          return Fr("Suspense");
        case l:
          return Fr("SuspenseList");
      }
      if (typeof w == "object")
        switch (w.$$typeof) {
          case s:
            return We(w.render);
          case f:
            return Me(w.type, T, I);
          case d: {
            var W = w, re = W._payload, ue = W._init;
            try {
              return Me(ue(re), T, I);
            } catch {
            }
          }
        }
      return "";
    }
    var Te = Object.prototype.hasOwnProperty, jt = {}, gn = y.ReactDebugCurrentFrame;
    function vi(w) {
      if (w) {
        var T = w._owner, I = Me(w.type, w._source, T ? T.type : null);
        gn.setExtraStackFrame(I);
      } else
        gn.setExtraStackFrame(null);
    }
    function Ub(w, T, I, W, re) {
      {
        var ue = Function.call.bind(Te);
        for (var X in w)
          if (ue(w, X)) {
            var Y = void 0;
            try {
              if (typeof w[X] != "function") {
                var Ye = Error((W || "React class") + ": " + I + " type `" + X + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof w[X] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ye.name = "Invariant Violation", Ye;
              }
              Y = w[X](T, X, W, I, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Oe) {
              Y = Oe;
            }
            Y && !(Y instanceof Error) && (vi(re), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", W || "React class", I, X, typeof Y), vi(null)), Y instanceof Error && !(Y.message in jt) && (jt[Y.message] = !0, vi(re), g("Failed %s type: %s", I, Y.message), vi(null));
          }
      }
    }
    var Vb = Array.isArray;
    function io(w) {
      return Vb(w);
    }
    function Yb(w) {
      {
        var T = typeof Symbol == "function" && Symbol.toStringTag, I = T && w[Symbol.toStringTag] || w.constructor.name || "Object";
        return I;
      }
    }
    function Hb(w) {
      try {
        return _c(w), !1;
      } catch {
        return !0;
      }
    }
    function _c(w) {
      return "" + w;
    }
    function jc(w) {
      if (Hb(w))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Yb(w)), _c(w);
    }
    var Tc = y.ReactCurrentOwner, Gb = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Cc, kc;
    function Xb(w) {
      if (Te.call(w, "ref")) {
        var T = Object.getOwnPropertyDescriptor(w, "ref").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return w.ref !== void 0;
    }
    function Zb(w) {
      if (Te.call(w, "key")) {
        var T = Object.getOwnPropertyDescriptor(w, "key").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return w.key !== void 0;
    }
    function Jb(w, T) {
      typeof w.ref == "string" && Tc.current;
    }
    function Qb(w, T) {
      {
        var I = function() {
          Cc || (Cc = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        I.isReactWarning = !0, Object.defineProperty(w, "key", {
          get: I,
          configurable: !0
        });
      }
    }
    function e0(w, T) {
      {
        var I = function() {
          kc || (kc = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        I.isReactWarning = !0, Object.defineProperty(w, "ref", {
          get: I,
          configurable: !0
        });
      }
    }
    var t0 = function(w, T, I, W, re, ue, X) {
      var Y = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: w,
        key: T,
        ref: I,
        props: X,
        // Record the component responsible for creating this element.
        _owner: ue
      };
      return Y._store = {}, Object.defineProperty(Y._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Y, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: W
      }), Object.defineProperty(Y, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: re
      }), Object.freeze && (Object.freeze(Y.props), Object.freeze(Y)), Y;
    };
    function r0(w, T, I, W, re) {
      {
        var ue, X = {}, Y = null, Ye = null;
        I !== void 0 && (jc(I), Y = "" + I), Zb(T) && (jc(T.key), Y = "" + T.key), Xb(T) && (Ye = T.ref, Jb(T, re));
        for (ue in T)
          Te.call(T, ue) && !Gb.hasOwnProperty(ue) && (X[ue] = T[ue]);
        if (w && w.defaultProps) {
          var Oe = w.defaultProps;
          for (ue in Oe)
            X[ue] === void 0 && (X[ue] = Oe[ue]);
        }
        if (Y || Ye) {
          var Se = typeof w == "function" ? w.displayName || w.name || "Unknown" : w;
          Y && Qb(X, Se), Ye && e0(X, Se);
        }
        return t0(w, Y, Ye, re, W, Tc.current, X);
      }
    }
    var ao = y.ReactCurrentOwner, Dc = y.ReactDebugCurrentFrame;
    function Kr(w) {
      if (w) {
        var T = w._owner, I = Me(w.type, w._source, T ? T.type : null);
        Dc.setExtraStackFrame(I);
      } else
        Dc.setExtraStackFrame(null);
    }
    var oo;
    oo = !1;
    function uo(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function Nc() {
      {
        if (ao.current) {
          var w = L(ao.current.type);
          if (w)
            return `

Check the render method of \`` + w + "`.";
        }
        return "";
      }
    }
    function n0(w) {
      return "";
    }
    var Mc = {};
    function i0(w) {
      {
        var T = Nc();
        if (!T) {
          var I = typeof w == "string" ? w : w.displayName || w.name;
          I && (T = `

Check the top-level render call using <` + I + ">.");
        }
        return T;
      }
    }
    function Ic(w, T) {
      {
        if (!w._store || w._store.validated || w.key != null)
          return;
        w._store.validated = !0;
        var I = i0(T);
        if (Mc[I])
          return;
        Mc[I] = !0;
        var W = "";
        w && w._owner && w._owner !== ao.current && (W = " It was passed a child from " + L(w._owner.type) + "."), Kr(w), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', I, W), Kr(null);
      }
    }
    function Rc(w, T) {
      {
        if (typeof w != "object")
          return;
        if (io(w))
          for (var I = 0; I < w.length; I++) {
            var W = w[I];
            uo(W) && Ic(W, T);
          }
        else if (uo(w))
          w._store && (w._store.validated = !0);
        else if (w) {
          var re = m(w);
          if (typeof re == "function" && re !== w.entries)
            for (var ue = re.call(w), X; !(X = ue.next()).done; )
              uo(X.value) && Ic(X.value, T);
        }
      }
    }
    function a0(w) {
      {
        var T = w.type;
        if (T == null || typeof T == "string")
          return;
        var I;
        if (typeof T == "function")
          I = T.propTypes;
        else if (typeof T == "object" && (T.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        T.$$typeof === f))
          I = T.propTypes;
        else
          return;
        if (I) {
          var W = L(T);
          Ub(I, w.props, "prop", W, w);
        } else if (T.PropTypes !== void 0 && !oo) {
          oo = !0;
          var re = L(T);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", re || "Unknown");
        }
        typeof T.getDefaultProps == "function" && !T.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function o0(w) {
      {
        for (var T = Object.keys(w.props), I = 0; I < T.length; I++) {
          var W = T[I];
          if (W !== "children" && W !== "key") {
            Kr(w), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", W), Kr(null);
            break;
          }
        }
        w.ref !== null && (Kr(w), g("Invalid attribute `ref` supplied to `React.Fragment`."), Kr(null));
      }
    }
    var $c = {};
    function Lc(w, T, I, W, re, ue) {
      {
        var X = M(w);
        if (!X) {
          var Y = "";
          (w === void 0 || typeof w == "object" && w !== null && Object.keys(w).length === 0) && (Y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ye = n0();
          Ye ? Y += Ye : Y += Nc();
          var Oe;
          w === null ? Oe = "null" : io(w) ? Oe = "array" : w !== void 0 && w.$$typeof === t ? (Oe = "<" + (L(w.type) || "Unknown") + " />", Y = " Did you accidentally export a JSX literal instead of a component?") : Oe = typeof w, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Oe, Y);
        }
        var Se = r0(w, T, I, re, ue);
        if (Se == null)
          return Se;
        if (X) {
          var ht = T.children;
          if (ht !== void 0)
            if (W)
              if (io(ht)) {
                for (var zr = 0; zr < ht.length; zr++)
                  Rc(ht[zr], w);
                Object.freeze && Object.freeze(ht);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Rc(ht, w);
        }
        if (Te.call(T, "key")) {
          var mr = L(w), Qe = Object.keys(T).filter(function(d0) {
            return d0 !== "key";
          }), so = Qe.length > 0 ? "{key: someKey, " + Qe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!$c[mr + so]) {
            var f0 = Qe.length > 0 ? "{" + Qe.join(": ..., ") + ": ...}" : "{}";
            g(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, so, mr, f0, mr), $c[mr + so] = !0;
          }
        }
        return w === n ? o0(Se) : a0(Se), Se;
      }
    }
    function u0(w, T, I) {
      return Lc(w, T, I, !0);
    }
    function s0(w, T, I) {
      return Lc(w, T, I, !1);
    }
    var l0 = s0, c0 = u0;
    xn.Fragment = n, xn.jsx = l0, xn.jsxs = c0;
  })()), xn;
}
var Kc;
function b0() {
  return Kc || (Kc = 1, process.env.NODE_ENV === "production" ? pi.exports = y0() : pi.exports = g0()), pi.exports;
}
var _ = b0();
const rn = ({
  title: e,
  icon: t,
  period: r,
  children: n,
  footer: i,
  className: a = "",
  childrenClassName: o
}) => /* @__PURE__ */ _.jsxs(
  "div",
  {
    className: `relative bg-white !border-[0.5px] !border-[#EBEBEB] !rounded-xl !shadow-[0_0_12px_0_#EAF2FF] p-4 flex flex-col gap-6 ${a} h-full `,
    children: [
      /* @__PURE__ */ _.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ _.jsxs("div", { className: "flex items-center gap-3", children: [
          t,
          /* @__PURE__ */ _.jsx(
            "h2",
            {
              style: { fontWeight: 500, fontSize: "16px", lineHeight: "20px" },
              className: "!my-0 !font-medium !text-[16px] !leading-[20px] !text-[#121212]",
              children: e
            }
          )
        ] }),
        r && /* @__PURE__ */ _.jsx("span", { className: "!text-xs !leading-[16px] !text-[#64748B]", children: r })
      ] }),
      /* @__PURE__ */ _.jsx("div", { className: `flex-1 min-h-0 space-y-6 ${o}`, children: n }),
      i && /* @__PURE__ */ _.jsx("div", { className: "mt-3 pt-3 border-t border-gray-100 text-xs text-[#64748B]", children: i })
    ]
  }
);
var Jp = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, zc = Xe.createContext && /* @__PURE__ */ Xe.createContext(Jp), x0 = ["attr", "size", "title"];
function w0(e, t) {
  if (e == null) return {};
  var r = O0(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function O0(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Li() {
  return Li = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Li.apply(this, arguments);
}
function Wc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Bi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wc(Object(r), !0).forEach(function(n) {
      P0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wc(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function P0(e, t, r) {
  return t = E0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function E0(e) {
  var t = A0(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function A0(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Qp(e) {
  return e && e.map((t, r) => /* @__PURE__ */ Xe.createElement(t.tag, Bi({
    key: r
  }, t.attr), Qp(t.child)));
}
function nn(e) {
  return (t) => /* @__PURE__ */ Xe.createElement(S0, Li({
    attr: Bi({}, e.attr)
  }, t), Qp(e.child));
}
function S0(e) {
  var t = (r) => {
    var {
      attr: n,
      size: i,
      title: a
    } = e, o = w0(e, x0), u = i || r.size || "1em", s;
    return r.className && (s = r.className), e.className && (s = (s ? s + " " : "") + e.className), /* @__PURE__ */ Xe.createElement("svg", Li({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, n, o, {
      className: s,
      style: Bi(Bi({
        color: e.color || r.color
      }, r.style), e.style),
      height: u,
      width: u,
      xmlns: "http://www.w3.org/2000/svg"
    }), a && /* @__PURE__ */ Xe.createElement("title", null, a), e.children);
  };
  return zc !== void 0 ? /* @__PURE__ */ Xe.createElement(zc.Consumer, null, (r) => t(r)) : t(Jp);
}
function _0(e) {
  return nn({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "rect", attr: { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2" }, child: [] }, { tag: "path", attr: { d: "M9 22v-4h6v4" }, child: [] }, { tag: "path", attr: { d: "M8 6h.01" }, child: [] }, { tag: "path", attr: { d: "M16 6h.01" }, child: [] }, { tag: "path", attr: { d: "M12 6h.01" }, child: [] }, { tag: "path", attr: { d: "M12 10h.01" }, child: [] }, { tag: "path", attr: { d: "M12 14h.01" }, child: [] }, { tag: "path", attr: { d: "M16 10h.01" }, child: [] }, { tag: "path", attr: { d: "M16 14h.01" }, child: [] }, { tag: "path", attr: { d: "M8 10h.01" }, child: [] }, { tag: "path", attr: { d: "M8 14h.01" }, child: [] }] })(e);
}
function j0(e) {
  return nn({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M13 4h3a2 2 0 0 1 2 2v14" }, child: [] }, { tag: "path", attr: { d: "M2 20h3" }, child: [] }, { tag: "path", attr: { d: "M13 20h9" }, child: [] }, { tag: "path", attr: { d: "M10 12v.01" }, child: [] }, { tag: "path", attr: { d: "M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z" }, child: [] }] })(e);
}
function T0(e) {
  return nn({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }, child: [] }] })(e);
}
function qc(e) {
  return nn({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }, child: [] }, { tag: "path", attr: { d: "M14 8H8" }, child: [] }, { tag: "path", attr: { d: "M16 12H8" }, child: [] }, { tag: "path", attr: { d: "M13 16H8" }, child: [] }] })(e);
}
function C0(e) {
  return nn({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }, child: [] }, { tag: "path", attr: { d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }, child: [] }, { tag: "path", attr: { d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }, child: [] }] })(e);
}
function k0(e) {
  return nn({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" }, child: [] }] })(e);
}
function eh(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = eh(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function te() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = eh(e)) && (n && (n += " "), n += t);
  return n;
}
var lo = {}, co = {}, Uc;
function D0() {
  return Uc || (Uc = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r === "__proto__";
    }
    e.isUnsafeProperty = t;
  })(co)), co;
}
var fo = {}, Vc;
function th() {
  return Vc || (Vc = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      switch (typeof r) {
        case "number":
        case "symbol":
          return !1;
        case "string":
          return r.includes(".") || r.includes("[") || r.includes("]");
      }
    }
    e.isDeepKey = t;
  })(fo)), fo;
}
var vo = {}, Yc;
function rh() {
  return Yc || (Yc = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return typeof r == "string" || typeof r == "symbol" ? r : Object.is(r?.valueOf?.(), -0) ? "-0" : String(r);
    }
    e.toKey = t;
  })(vo)), vo;
}
var po = {}, Hc;
function Ds() {
  return Hc || (Hc = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      const n = [], i = r.length;
      if (i === 0)
        return n;
      let a = 0, o = "", u = "", s = !1;
      for (r.charCodeAt(0) === 46 && (n.push(""), a++); a < i; ) {
        const c = r[a];
        u ? c === "\\" && a + 1 < i ? (a++, o += r[a]) : c === u ? u = "" : o += c : s ? c === '"' || c === "'" ? u = c : c === "]" ? (s = !1, n.push(o), o = "") : o += c : c === "[" ? (s = !0, o && (n.push(o), o = "")) : c === "." ? o && (n.push(o), o = "") : o += c, a++;
      }
      return o && n.push(o), n;
    }
    e.toPath = t;
  })(po)), po;
}
var Gc;
function Ns() {
  return Gc || (Gc = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ D0(), r = /* @__PURE__ */ th(), n = /* @__PURE__ */ rh(), i = /* @__PURE__ */ Ds();
    function a(u, s, c) {
      if (u == null)
        return c;
      switch (typeof s) {
        case "string": {
          if (t.isUnsafeProperty(s))
            return c;
          const l = u[s];
          return l === void 0 ? r.isDeepKey(s) ? a(u, i.toPath(s), c) : c : l;
        }
        case "number":
        case "symbol": {
          typeof s == "number" && (s = n.toKey(s));
          const l = u[s];
          return l === void 0 ? c : l;
        }
        default: {
          if (Array.isArray(s))
            return o(u, s, c);
          if (Object.is(s?.valueOf(), -0) ? s = "-0" : s = String(s), t.isUnsafeProperty(s))
            return c;
          const l = u[s];
          return l === void 0 ? c : l;
        }
      }
    }
    function o(u, s, c) {
      if (s.length === 0)
        return c;
      let l = u;
      for (let f = 0; f < s.length; f++) {
        if (l == null || t.isUnsafeProperty(s[f]))
          return c;
        l = l[s[f]];
      }
      return l === void 0 ? c : l;
    }
    e.get = a;
  })(lo)), lo;
}
var ho, Xc;
function N0() {
  return Xc || (Xc = 1, ho = Ns().get), ho;
}
var M0 = /* @__PURE__ */ N0();
const Cr = /* @__PURE__ */ cr(M0);
var hi = { exports: {} }, ae = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zc;
function I0() {
  if (Zc) return ae;
  Zc = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), o = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), d = Symbol.for("react.view_transition"), v = Symbol.for("react.client.reference");
  function h(p) {
    if (typeof p == "object" && p !== null) {
      var m = p.$$typeof;
      switch (m) {
        case e:
          switch (p = p.type, p) {
            case r:
            case i:
            case n:
            case s:
            case c:
            case d:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case o:
                case u:
                case f:
                case l:
                  return p;
                case a:
                  return p;
                default:
                  return m;
              }
          }
        case t:
          return m;
      }
    }
  }
  return ae.ContextConsumer = a, ae.ContextProvider = o, ae.Element = e, ae.ForwardRef = u, ae.Fragment = r, ae.Lazy = f, ae.Memo = l, ae.Portal = t, ae.Profiler = i, ae.StrictMode = n, ae.Suspense = s, ae.SuspenseList = c, ae.isContextConsumer = function(p) {
    return h(p) === a;
  }, ae.isContextProvider = function(p) {
    return h(p) === o;
  }, ae.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, ae.isForwardRef = function(p) {
    return h(p) === u;
  }, ae.isFragment = function(p) {
    return h(p) === r;
  }, ae.isLazy = function(p) {
    return h(p) === f;
  }, ae.isMemo = function(p) {
    return h(p) === l;
  }, ae.isPortal = function(p) {
    return h(p) === t;
  }, ae.isProfiler = function(p) {
    return h(p) === i;
  }, ae.isStrictMode = function(p) {
    return h(p) === n;
  }, ae.isSuspense = function(p) {
    return h(p) === s;
  }, ae.isSuspenseList = function(p) {
    return h(p) === c;
  }, ae.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === i || p === n || p === s || p === c || typeof p == "object" && p !== null && (p.$$typeof === f || p.$$typeof === l || p.$$typeof === o || p.$$typeof === a || p.$$typeof === u || p.$$typeof === v || p.getModuleId !== void 0);
  }, ae.typeOf = h, ae;
}
var oe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jc;
function R0() {
  return Jc || (Jc = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(p) {
      if (typeof p == "object" && p !== null) {
        var m = p.$$typeof;
        switch (m) {
          case t:
            switch (p = p.type, p) {
              case n:
              case a:
              case i:
              case c:
              case l:
              case v:
                return p;
              default:
                switch (p = p && p.$$typeof, p) {
                  case u:
                  case s:
                  case d:
                  case f:
                    return p;
                  case o:
                    return p;
                  default:
                    return m;
                }
            }
          case r:
            return m;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.consumer"), u = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), v = Symbol.for("react.view_transition"), h = Symbol.for("react.client.reference");
    oe.ContextConsumer = o, oe.ContextProvider = u, oe.Element = t, oe.ForwardRef = s, oe.Fragment = n, oe.Lazy = d, oe.Memo = f, oe.Portal = r, oe.Profiler = a, oe.StrictMode = i, oe.Suspense = c, oe.SuspenseList = l, oe.isContextConsumer = function(p) {
      return e(p) === o;
    }, oe.isContextProvider = function(p) {
      return e(p) === u;
    }, oe.isElement = function(p) {
      return typeof p == "object" && p !== null && p.$$typeof === t;
    }, oe.isForwardRef = function(p) {
      return e(p) === s;
    }, oe.isFragment = function(p) {
      return e(p) === n;
    }, oe.isLazy = function(p) {
      return e(p) === d;
    }, oe.isMemo = function(p) {
      return e(p) === f;
    }, oe.isPortal = function(p) {
      return e(p) === r;
    }, oe.isProfiler = function(p) {
      return e(p) === a;
    }, oe.isStrictMode = function(p) {
      return e(p) === i;
    }, oe.isSuspense = function(p) {
      return e(p) === c;
    }, oe.isSuspenseList = function(p) {
      return e(p) === l;
    }, oe.isValidElementType = function(p) {
      return typeof p == "string" || typeof p == "function" || p === n || p === a || p === i || p === c || p === l || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === f || p.$$typeof === u || p.$$typeof === o || p.$$typeof === s || p.$$typeof === h || p.getModuleId !== void 0);
    }, oe.typeOf = e;
  })()), oe;
}
var Qc;
function $0() {
  return Qc || (Qc = 1, process.env.NODE_ENV === "production" ? hi.exports = /* @__PURE__ */ I0() : hi.exports = /* @__PURE__ */ R0()), hi.exports;
}
var L0 = /* @__PURE__ */ $0(), Re = (e) => e === 0 ? 0 : e > 0 ? 1 : -1, ct = (e) => typeof e == "number" && e != +e, wr = (e) => typeof e == "string" && e.indexOf("%") === e.length - 1, K = (e) => (typeof e == "number" || e instanceof Number) && !ct(e), kt = (e) => K(e) || typeof e == "string", B0 = 0, Nn = (e) => {
  var t = ++B0;
  return "".concat(e || "").concat(t);
}, Ve = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!K(t) && typeof t != "string")
    return n;
  var a;
  if (wr(t)) {
    if (r == null)
      return n;
    var o = t.indexOf("%");
    a = r * parseFloat(t.slice(0, o)) / 100;
  } else
    a = +t;
  return ct(a) && (a = n), i && r != null && a > r && (a = r), a;
}, nh = (e) => {
  if (!Array.isArray(e))
    return !1;
  for (var t = e.length, r = {}, n = 0; n < t; n++)
    if (!r[e[n]])
      r[e[n]] = !0;
    else
      return !0;
  return !1;
};
function we(e, t, r) {
  return K(e) && K(t) ? e + r * (t - e) : t;
}
function ih(e, t, r) {
  if (!(!e || !e.length))
    return e.find((n) => n && (typeof t == "function" ? t(n) : Cr(n, t)) === r);
}
var me = (e) => e === null || typeof e > "u", Un = (e) => me(e) ? e : "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1)), F0 = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"];
function Ms(e) {
  if (typeof e != "string")
    return !1;
  var t = F0;
  return t.includes(e);
}
var K0 = ["viewBox", "children"], ef = ["points", "pathLength"], mo = {
  svg: K0,
  polygon: ef,
  polyline: ef
}, Is = (e, t) => {
  if (!e || typeof e == "function" || typeof e == "boolean")
    return null;
  var r = e;
  if (/* @__PURE__ */ St(e) && (r = e.props), typeof r != "object" && typeof r != "function")
    return null;
  var n = {};
  return Object.keys(r).forEach((i) => {
    Ms(i) && (n[i] = ((a) => r[i](r, a)));
  }), n;
}, z0 = (e, t, r) => (n) => (e(t, r, n), null), Pa = (e, t, r) => {
  if (e === null || typeof e != "object" && typeof e != "function")
    return null;
  var n = null;
  return Object.keys(e).forEach((i) => {
    var a = e[i];
    Ms(i) && typeof a == "function" && (n || (n = {}), n[i] = z0(a, t, r));
  }), n;
}, W0 = [
  "aria-activedescendant",
  "aria-atomic",
  "aria-autocomplete",
  "aria-busy",
  "aria-checked",
  "aria-colcount",
  "aria-colindex",
  "aria-colspan",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-details",
  "aria-disabled",
  "aria-errormessage",
  "aria-expanded",
  "aria-flowto",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-level",
  "aria-live",
  "aria-modal",
  "aria-multiline",
  "aria-multiselectable",
  "aria-orientation",
  "aria-owns",
  "aria-placeholder",
  "aria-posinset",
  "aria-pressed",
  "aria-readonly",
  "aria-relevant",
  "aria-required",
  "aria-roledescription",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowspan",
  "aria-selected",
  "aria-setsize",
  "aria-sort",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext",
  "className",
  "color",
  "height",
  "id",
  "lang",
  "max",
  "media",
  "method",
  "min",
  "name",
  "style",
  /*
   * removed 'type' SVGElementPropKey because we do not currently use any SVG elements
   * that can use it, and it conflicts with the recharts prop 'type'
   * https://github.com/recharts/recharts/pull/3327
   * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type
   */
  // 'type',
  "target",
  "width",
  "role",
  "tabIndex",
  "accentHeight",
  "accumulate",
  "additive",
  "alignmentBaseline",
  "allowReorder",
  "alphabetic",
  "amplitude",
  "arabicForm",
  "ascent",
  "attributeName",
  "attributeType",
  "autoReverse",
  "azimuth",
  "baseFrequency",
  "baselineShift",
  "baseProfile",
  "bbox",
  "begin",
  "bias",
  "by",
  "calcMode",
  "capHeight",
  "clip",
  "clipPath",
  "clipPathUnits",
  "clipRule",
  "colorInterpolation",
  "colorInterpolationFilters",
  "colorProfile",
  "colorRendering",
  "contentScriptType",
  "contentStyleType",
  "cursor",
  "cx",
  "cy",
  "d",
  "decelerate",
  "descent",
  "diffuseConstant",
  "direction",
  "display",
  "divisor",
  "dominantBaseline",
  "dur",
  "dx",
  "dy",
  "edgeMode",
  "elevation",
  "enableBackground",
  "end",
  "exponent",
  "externalResourcesRequired",
  "fill",
  "fillOpacity",
  "fillRule",
  "filter",
  "filterRes",
  "filterUnits",
  "floodColor",
  "floodOpacity",
  "focusable",
  "fontFamily",
  "fontSize",
  "fontSizeAdjust",
  "fontStretch",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "format",
  "from",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyphName",
  "glyphOrientationHorizontal",
  "glyphOrientationVertical",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "hanging",
  "horizAdvX",
  "horizOriginX",
  "href",
  "ideographic",
  "imageRendering",
  "in2",
  "in",
  "intercept",
  "k1",
  "k2",
  "k3",
  "k4",
  "k",
  "kernelMatrix",
  "kernelUnitLength",
  "kerning",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "letterSpacing",
  "lightingColor",
  "limitingConeAngle",
  "local",
  "markerEnd",
  "markerHeight",
  "markerMid",
  "markerStart",
  "markerUnits",
  "markerWidth",
  "mask",
  "maskContentUnits",
  "maskUnits",
  "mathematical",
  "mode",
  "numOctaves",
  "offset",
  "opacity",
  "operator",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "overlinePosition",
  "overlineThickness",
  "paintOrder",
  "panose1",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointerEvents",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "r",
  "radius",
  "refX",
  "refY",
  "renderingIntent",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "restart",
  "result",
  "rotate",
  "rx",
  "ry",
  "seed",
  "shapeRendering",
  "slope",
  "spacing",
  "specularConstant",
  "specularExponent",
  "speed",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stemh",
  "stemv",
  "stitchTiles",
  "stopColor",
  "stopOpacity",
  "strikethroughPosition",
  "strikethroughThickness",
  "string",
  "stroke",
  "strokeDasharray",
  "strokeDashoffset",
  "strokeLinecap",
  "strokeLinejoin",
  "strokeMiterlimit",
  "strokeOpacity",
  "strokeWidth",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textAnchor",
  "textDecoration",
  "textLength",
  "textRendering",
  "to",
  "transform",
  "u1",
  "u2",
  "underlinePosition",
  "underlineThickness",
  "unicode",
  "unicodeBidi",
  "unicodeRange",
  "unitsPerEm",
  "vAlphabetic",
  "values",
  "vectorEffect",
  "version",
  "vertAdvY",
  "vertOriginX",
  "vertOriginY",
  "vHanging",
  "vIdeographic",
  "viewTarget",
  "visibility",
  "vMathematical",
  "widths",
  "wordSpacing",
  "writingMode",
  "x1",
  "x2",
  "x",
  "xChannelSelector",
  "xHeight",
  "xlinkActuate",
  "xlinkArcrole",
  "xlinkHref",
  "xlinkRole",
  "xlinkShow",
  "xlinkTitle",
  "xlinkType",
  "xmlBase",
  "xmlLang",
  "xmlns",
  "xmlnsXlink",
  "xmlSpace",
  "y1",
  "y2",
  "y",
  "yChannelSelector",
  "z",
  "zoomAndPan",
  "ref",
  "key",
  "angle"
];
function ah(e) {
  if (typeof e != "string")
    return !1;
  var t = W0;
  return t.includes(e);
}
function Nt(e) {
  var t = Object.entries(e).filter((r) => {
    var [n] = r;
    return ah(n);
  });
  return Object.fromEntries(t);
}
var tf = (e) => typeof e == "string" ? e : e ? e.displayName || e.name || "Component" : "", rf = null, yo = null, oh = (e) => {
  if (e === rf && Array.isArray(yo))
    return yo;
  var t = [];
  return v0.forEach(e, (r) => {
    me(r) || (L0.isFragment(r) ? t = t.concat(oh(r.props.children)) : t.push(r));
  }), yo = t, rf = e, t;
};
function Rs(e, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map((i) => tf(i)) : n = [tf(t)], oh(e).forEach((i) => {
    var a = Cr(i, "type.displayName") || Cr(i, "type.name");
    n.indexOf(a) !== -1 && r.push(i);
  }), r;
}
var uh = (e) => e && typeof e == "object" && "clipDot" in e ? !!e.clipDot : !0, q0 = (e, t, r, n) => {
  var i;
  if (typeof t == "symbol" || typeof t == "number")
    return !0;
  var a = (i = n && mo?.[n]) !== null && i !== void 0 ? i : [], o = t.startsWith("data-"), u = typeof e != "function" && (!!n && a.includes(t) || ah(t)), s = !!r && Ms(t);
  return o || u || s;
}, xe = (e, t, r) => {
  if (!e || typeof e == "function" || typeof e == "boolean")
    return null;
  var n = e;
  if (/* @__PURE__ */ St(e) && (n = e.props), typeof n != "object" && typeof n != "function")
    return null;
  var i = {};
  return Object.keys(n).forEach((a) => {
    var o;
    q0((o = n) === null || o === void 0 ? void 0 : o[a], a, t, r) && (i[a] = n[a]);
  }), i;
}, U0 = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function Fu() {
  return Fu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Fu.apply(null, arguments);
}
function V0(e, t) {
  if (e == null) return {};
  var r, n, i = Y0(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function Y0(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var sh = /* @__PURE__ */ vt((e, t) => {
  var {
    children: r,
    width: n,
    height: i,
    viewBox: a,
    className: o,
    style: u,
    title: s,
    desc: c
  } = e, l = V0(e, U0), f = a || {
    width: n,
    height: i,
    x: 0,
    y: 0
  }, d = te("recharts-surface", o);
  return /* @__PURE__ */ x.createElement("svg", Fu({}, xe(l, !0, "svg"), {
    className: d,
    width: n,
    height: i,
    style: u,
    viewBox: "".concat(f.x, " ").concat(f.y, " ").concat(f.width, " ").concat(f.height),
    ref: t
  }), /* @__PURE__ */ x.createElement("title", null, s), /* @__PURE__ */ x.createElement("desc", null, c), r);
}), H0 = ["children", "className"];
function Ku() {
  return Ku = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ku.apply(null, arguments);
}
function G0(e, t) {
  if (e == null) return {};
  var r, n, i = X0(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function X0(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var Ke = /* @__PURE__ */ x.forwardRef((e, t) => {
  var {
    children: r,
    className: n
  } = e, i = G0(e, H0), a = te("recharts-layer", n);
  return /* @__PURE__ */ x.createElement("g", Ku({
    className: a
  }, xe(i, !0), {
    ref: t
  }), r);
}), Z0 = /* @__PURE__ */ Pt(null);
function le(e) {
  return function() {
    return e;
  };
}
const lh = Math.cos, Fi = Math.sin, _t = Math.sqrt, Ki = Math.PI, Ea = 2 * Ki, zu = Math.PI, Wu = 2 * zu, gr = 1e-6, J0 = Wu - gr;
function ch(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function Q0(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return ch;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let i = 1, a = n.length; i < a; ++i)
      this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class ex {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? ch : Q0(t);
  }
  moveTo(t, r) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${this._x1 = +t},${this._y1 = +r}`;
  }
  quadraticCurveTo(t, r, n, i) {
    this._append`Q${+t},${+r},${this._x1 = +n},${this._y1 = +i}`;
  }
  bezierCurveTo(t, r, n, i, a, o) {
    this._append`C${+t},${+r},${+n},${+i},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(t, r, n, i, a) {
    if (t = +t, r = +r, n = +n, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let o = this._x1, u = this._y1, s = n - t, c = i - r, l = o - t, f = u - r, d = l * l + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (d > gr) if (!(Math.abs(f * s - c * l) > gr) || !a)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let v = n - o, h = i - u, p = s * s + c * c, m = v * v + h * h, y = Math.sqrt(p), g = Math.sqrt(d), b = a * Math.tan((zu - Math.acos((p + d - m) / (2 * y * g))) / 2), E = b / g, P = b / y;
      Math.abs(E - 1) > gr && this._append`L${t + E * l},${r + E * f}`, this._append`A${a},${a},0,0,${+(f * v > l * h)},${this._x1 = t + P * s},${this._y1 = r + P * c}`;
    }
  }
  arc(t, r, n, i, a, o) {
    if (t = +t, r = +r, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
    let u = n * Math.cos(i), s = n * Math.sin(i), c = t + u, l = r + s, f = 1 ^ o, d = o ? i - a : a - i;
    this._x1 === null ? this._append`M${c},${l}` : (Math.abs(this._x1 - c) > gr || Math.abs(this._y1 - l) > gr) && this._append`L${c},${l}`, n && (d < 0 && (d = d % Wu + Wu), d > J0 ? this._append`A${n},${n},0,1,${f},${t - u},${r - s}A${n},${n},0,1,${f},${this._x1 = c},${this._y1 = l}` : d > gr && this._append`A${n},${n},0,${+(d >= zu)},${f},${this._x1 = t + n * Math.cos(a)},${this._y1 = r + n * Math.sin(a)}`);
  }
  rect(t, r, n, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function $s(e) {
  let t = 3;
  return e.digits = function(r) {
    if (!arguments.length) return t;
    if (r == null)
      t = null;
    else {
      const n = Math.floor(r);
      if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
      t = n;
    }
    return e;
  }, () => new ex(t);
}
function Ls(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function fh(e) {
  this._context = e;
}
fh.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(e, t);
        break;
    }
  }
};
function Aa(e) {
  return new fh(e);
}
function dh(e) {
  return e[0];
}
function vh(e) {
  return e[1];
}
function ph(e, t) {
  var r = le(!0), n = null, i = Aa, a = null, o = $s(u);
  e = typeof e == "function" ? e : e === void 0 ? dh : le(e), t = typeof t == "function" ? t : t === void 0 ? vh : le(t);
  function u(s) {
    var c, l = (s = Ls(s)).length, f, d = !1, v;
    for (n == null && (a = i(v = o())), c = 0; c <= l; ++c)
      !(c < l && r(f = s[c], c, s)) === d && ((d = !d) ? a.lineStart() : a.lineEnd()), d && a.point(+e(f, c, s), +t(f, c, s));
    if (v) return a = null, v + "" || null;
  }
  return u.x = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : le(+s), u) : e;
  }, u.y = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : le(+s), u) : t;
  }, u.defined = function(s) {
    return arguments.length ? (r = typeof s == "function" ? s : le(!!s), u) : r;
  }, u.curve = function(s) {
    return arguments.length ? (i = s, n != null && (a = i(n)), u) : i;
  }, u.context = function(s) {
    return arguments.length ? (s == null ? n = a = null : a = i(n = s), u) : n;
  }, u;
}
function mi(e, t, r) {
  var n = null, i = le(!0), a = null, o = Aa, u = null, s = $s(c);
  e = typeof e == "function" ? e : e === void 0 ? dh : le(+e), t = typeof t == "function" ? t : le(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? vh : le(+r);
  function c(f) {
    var d, v, h, p = (f = Ls(f)).length, m, y = !1, g, b = new Array(p), E = new Array(p);
    for (a == null && (u = o(g = s())), d = 0; d <= p; ++d) {
      if (!(d < p && i(m = f[d], d, f)) === y)
        if (y = !y)
          v = d, u.areaStart(), u.lineStart();
        else {
          for (u.lineEnd(), u.lineStart(), h = d - 1; h >= v; --h)
            u.point(b[h], E[h]);
          u.lineEnd(), u.areaEnd();
        }
      y && (b[d] = +e(m, d, f), E[d] = +t(m, d, f), u.point(n ? +n(m, d, f) : b[d], r ? +r(m, d, f) : E[d]));
    }
    if (g) return u = null, g + "" || null;
  }
  function l() {
    return ph().defined(i).curve(o).context(a);
  }
  return c.x = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : le(+f), n = null, c) : e;
  }, c.x0 = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : le(+f), c) : e;
  }, c.x1 = function(f) {
    return arguments.length ? (n = f == null ? null : typeof f == "function" ? f : le(+f), c) : n;
  }, c.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : le(+f), r = null, c) : t;
  }, c.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : le(+f), c) : t;
  }, c.y1 = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : le(+f), c) : r;
  }, c.lineX0 = c.lineY0 = function() {
    return l().x(e).y(t);
  }, c.lineY1 = function() {
    return l().x(e).y(r);
  }, c.lineX1 = function() {
    return l().x(n).y(t);
  }, c.defined = function(f) {
    return arguments.length ? (i = typeof f == "function" ? f : le(!!f), c) : i;
  }, c.curve = function(f) {
    return arguments.length ? (o = f, a != null && (u = o(a)), c) : o;
  }, c.context = function(f) {
    return arguments.length ? (f == null ? a = u = null : u = o(a = f), c) : a;
  }, c;
}
class hh {
  constructor(t, r) {
    this._context = t, this._x = r;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(t, r) {
    switch (t = +t, r = +r, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r);
        break;
      }
      case 1:
        this._point = 2;
      // falls through
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, r, t, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, t, this._y0, t, r);
        break;
      }
    }
    this._x0 = t, this._y0 = r;
  }
}
function tx(e) {
  return new hh(e, !0);
}
function rx(e) {
  return new hh(e, !1);
}
const Bs = {
  draw(e, t) {
    const r = _t(t / Ki);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, Ea);
  }
}, nx = {
  draw(e, t) {
    const r = _t(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, mh = _t(1 / 3), ix = mh * 2, ax = {
  draw(e, t) {
    const r = _t(t / ix), n = r * mh;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, ox = {
  draw(e, t) {
    const r = _t(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, ux = 0.8908130915292852, yh = Fi(Ki / 10) / Fi(7 * Ki / 10), sx = Fi(Ea / 10) * yh, lx = -lh(Ea / 10) * yh, cx = {
  draw(e, t) {
    const r = _t(t * ux), n = sx * r, i = lx * r;
    e.moveTo(0, -r), e.lineTo(n, i);
    for (let a = 1; a < 5; ++a) {
      const o = Ea * a / 5, u = lh(o), s = Fi(o);
      e.lineTo(s * r, -u * r), e.lineTo(u * n - s * i, s * n + u * i);
    }
    e.closePath();
  }
}, go = _t(3), fx = {
  draw(e, t) {
    const r = -_t(t / (go * 3));
    e.moveTo(0, r * 2), e.lineTo(-go * r, -r), e.lineTo(go * r, -r), e.closePath();
  }
}, mt = -0.5, yt = _t(3) / 2, qu = 1 / _t(12), dx = (qu / 2 + 1) * 3, vx = {
  draw(e, t) {
    const r = _t(t / dx), n = r / 2, i = r * qu, a = n, o = r * qu + r, u = -a, s = o;
    e.moveTo(n, i), e.lineTo(a, o), e.lineTo(u, s), e.lineTo(mt * n - yt * i, yt * n + mt * i), e.lineTo(mt * a - yt * o, yt * a + mt * o), e.lineTo(mt * u - yt * s, yt * u + mt * s), e.lineTo(mt * n + yt * i, mt * i - yt * n), e.lineTo(mt * a + yt * o, mt * o - yt * a), e.lineTo(mt * u + yt * s, mt * s - yt * u), e.closePath();
  }
};
function px(e, t) {
  let r = null, n = $s(i);
  e = typeof e == "function" ? e : le(e || Bs), t = typeof t == "function" ? t : le(t === void 0 ? 64 : +t);
  function i() {
    let a;
    if (r || (r = a = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), a) return r = null, a + "" || null;
  }
  return i.type = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : le(a), i) : e;
  }, i.size = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : le(+a), i) : t;
  }, i.context = function(a) {
    return arguments.length ? (r = a ?? null, i) : r;
  }, i;
}
function zi() {
}
function Wi(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function gh(e) {
  this._context = e;
}
gh.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        Wi(this, this._x1, this._y1);
      // falls through
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      // falls through
      default:
        Wi(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function hx(e) {
  return new gh(e);
}
function bh(e) {
  this._context = e;
}
bh.prototype = {
  areaStart: zi,
  areaEnd: zi,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x2 = e, this._y2 = t;
        break;
      case 1:
        this._point = 2, this._x3 = e, this._y3 = t;
        break;
      case 2:
        this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
        break;
      default:
        Wi(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function mx(e) {
  return new bh(e);
}
function xh(e) {
  this._context = e;
}
xh.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6, n = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        Wi(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function yx(e) {
  return new xh(e);
}
function wh(e) {
  this._context = e;
}
wh.prototype = {
  areaStart: zi,
  areaEnd: zi,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(e, t) {
    e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t));
  }
};
function gx(e) {
  return new wh(e);
}
function nf(e) {
  return e < 0 ? -1 : 1;
}
function af(e, t, r) {
  var n = e._x1 - e._x0, i = t - e._x1, a = (e._y1 - e._y0) / (n || i < 0 && -0), o = (r - e._y1) / (i || n < 0 && -0), u = (a * i + o * n) / (n + i);
  return (nf(a) + nf(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(u)) || 0;
}
function of(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function bo(e, t, r) {
  var n = e._x0, i = e._y0, a = e._x1, o = e._y1, u = (a - n) / 3;
  e._context.bezierCurveTo(n + u, i + u * t, a - u, o - u * r, a, o);
}
function qi(e) {
  this._context = e;
}
qi.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        bo(this, this._t0, of(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    var r = NaN;
    if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, bo(this, of(this, r = af(this, e, t)), r);
          break;
        default:
          bo(this, this._t0, r = af(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function Oh(e) {
  this._context = new Ph(e);
}
(Oh.prototype = Object.create(qi.prototype)).point = function(e, t) {
  qi.prototype.point.call(this, t, e);
};
function Ph(e) {
  this._context = e;
}
Ph.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, r, n, i, a) {
    this._context.bezierCurveTo(t, e, n, r, a, i);
  }
};
function bx(e) {
  return new qi(e);
}
function xx(e) {
  return new Oh(e);
}
function Eh(e) {
  this._context = e;
}
Eh.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length;
    if (r)
      if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), r === 2)
        this._context.lineTo(e[1], t[1]);
      else
        for (var n = uf(e), i = uf(t), a = 0, o = 1; o < r; ++a, ++o)
          this._context.bezierCurveTo(n[0][a], i[0][a], n[1][a], i[1][a], e[o], t[o]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function uf(e) {
  var t, r = e.length - 1, n, i = new Array(r), a = new Array(r), o = new Array(r);
  for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) i[t] = 1, a[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
  for (i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = i[t] / a[t - 1], a[t] -= n, o[t] -= n * o[t - 1];
  for (i[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t) i[t] = (o[t] - i[t + 1]) / a[t];
  for (a[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) a[t] = 2 * e[t + 1] - i[t + 1];
  return [i, a];
}
function wx(e) {
  return new Eh(e);
}
function Sa(e, t) {
  this._context = e, this._t = t;
}
Sa.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(r, this._y), this._context.lineTo(r, t);
        }
        break;
      }
    }
    this._x = e, this._y = t;
  }
};
function Ox(e) {
  return new Sa(e, 0.5);
}
function Px(e) {
  return new Sa(e, 0);
}
function Ex(e) {
  return new Sa(e, 1);
}
function Yr(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, i, a = e[t[0]], o, u = a.length; r < o; ++r)
      for (i = a, a = e[t[r]], n = 0; n < u; ++n)
        a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function Uu(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function Ax(e, t) {
  return e[t];
}
function Sx(e) {
  const t = [];
  return t.key = e, t;
}
function _x() {
  var e = le([]), t = Uu, r = Yr, n = Ax;
  function i(a) {
    var o = Array.from(e.apply(this, arguments), Sx), u, s = o.length, c = -1, l;
    for (const f of a)
      for (u = 0, ++c; u < s; ++u)
        (o[u][c] = [0, +n(f, o[u].key, c, a)]).data = f;
    for (u = 0, l = Ls(t(o)); u < s; ++u)
      o[l[u]].index = u;
    return r(o, l), o;
  }
  return i.keys = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : le(Array.from(a)), i) : e;
  }, i.value = function(a) {
    return arguments.length ? (n = typeof a == "function" ? a : le(+a), i) : n;
  }, i.order = function(a) {
    return arguments.length ? (t = a == null ? Uu : typeof a == "function" ? a : le(Array.from(a)), i) : t;
  }, i.offset = function(a) {
    return arguments.length ? (r = a ?? Yr, i) : r;
  }, i;
}
function jx(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, i = 0, a = e[0].length, o; i < a; ++i) {
      for (o = r = 0; r < n; ++r) o += e[r][i][1] || 0;
      if (o) for (r = 0; r < n; ++r) e[r][i][1] /= o;
    }
    Yr(e, t);
  }
}
function Tx(e, t) {
  if ((i = e.length) > 0) {
    for (var r = 0, n = e[t[0]], i, a = n.length; r < a; ++r) {
      for (var o = 0, u = 0; o < i; ++o) u += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -u / 2;
    }
    Yr(e, t);
  }
}
function Cx(e, t) {
  if (!(!((o = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, o; n < a; ++n) {
      for (var u = 0, s = 0, c = 0; u < o; ++u) {
        for (var l = e[t[u]], f = l[n][1] || 0, d = l[n - 1][1] || 0, v = (f - d) / 2, h = 0; h < u; ++h) {
          var p = e[t[h]], m = p[n][1] || 0, y = p[n - 1][1] || 0;
          v += m - y;
        }
        s += f, c += v * f;
      }
      i[n - 1][1] += i[n - 1][0] = r, s && (r -= c / s);
    }
    i[n - 1][1] += i[n - 1][0] = r, Yr(e, t);
  }
}
var kx = ["type", "size", "sizeType"];
function Vu() {
  return Vu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Vu.apply(null, arguments);
}
function sf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function lf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sf(Object(r), !0).forEach(function(n) {
      Dx(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Dx(e, t, r) {
  return (t = Nx(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Nx(e) {
  var t = Mx(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Mx(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ix(e, t) {
  if (e == null) return {};
  var r, n, i = Rx(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function Rx(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var Ah = {
  symbolCircle: Bs,
  symbolCross: nx,
  symbolDiamond: ax,
  symbolSquare: ox,
  symbolStar: cx,
  symbolTriangle: fx,
  symbolWye: vx
}, $x = Math.PI / 180, Lx = (e) => {
  var t = "symbol".concat(Un(e));
  return Ah[t] || Bs;
}, Bx = (e, t, r) => {
  if (t === "area")
    return e;
  switch (r) {
    case "cross":
      return 5 * e * e / 9;
    case "diamond":
      return 0.5 * e * e / Math.sqrt(3);
    case "square":
      return e * e;
    case "star": {
      var n = 18 * $x;
      return 1.25 * e * e * (Math.tan(n) - Math.tan(n * 2) * Math.tan(n) ** 2);
    }
    case "triangle":
      return Math.sqrt(3) * e * e / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * e * e / 8;
    default:
      return Math.PI * e * e / 4;
  }
}, Fx = (e, t) => {
  Ah["symbol".concat(Un(e))] = t;
}, Sh = (e) => {
  var {
    type: t = "circle",
    size: r = 64,
    sizeType: n = "area"
  } = e, i = Ix(e, kx), a = lf(lf({}, i), {}, {
    type: t,
    size: r,
    sizeType: n
  }), o = "circle";
  typeof t == "string" && (o = t);
  var u = () => {
    var d = Lx(o), v = px().type(d).size(Bx(r, n, o));
    return v();
  }, {
    className: s,
    cx: c,
    cy: l
  } = a, f = xe(a, !0);
  return c === +c && l === +l && r === +r ? /* @__PURE__ */ x.createElement("path", Vu({}, f, {
    className: te("recharts-symbols", s),
    transform: "translate(".concat(c, ", ").concat(l, ")"),
    d: u()
  })) : null;
};
Sh.registerSymbol = Fx;
var xo = {}, wo = {}, cf;
function Kx() {
  return cf || (cf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n) {
      const i = /* @__PURE__ */ new Map();
      for (let a = 0; a < r.length; a++) {
        const o = r[a], u = n(o);
        i.has(u) || i.set(u, o);
      }
      return Array.from(i.values());
    }
    e.uniqBy = t;
  })(wo)), wo;
}
var Oo = {}, ff;
function _h() {
  return ff || (ff = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r;
    }
    e.identity = t;
  })(Oo)), Oo;
}
var Po = {}, Eo = {}, Ao = {}, df;
function zx() {
  return df || (df = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return Number.isSafeInteger(r) && r >= 0;
    }
    e.isLength = t;
  })(Ao)), Ao;
}
var vf;
function Fs() {
  return vf || (vf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ zx();
    function r(n) {
      return n != null && typeof n != "function" && t.isLength(n.length);
    }
    e.isArrayLike = r;
  })(Eo)), Eo;
}
var So = {}, pf;
function Wx() {
  return pf || (pf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return typeof r == "object" && r !== null;
    }
    e.isObjectLike = t;
  })(So)), So;
}
var hf;
function qx() {
  return hf || (hf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Fs(), r = /* @__PURE__ */ Wx();
    function n(i) {
      return r.isObjectLike(i) && t.isArrayLike(i);
    }
    e.isArrayLikeObject = n;
  })(Po)), Po;
}
var _o = {}, jo = {}, mf;
function Ux() {
  return mf || (mf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Ns();
    function r(n) {
      return function(i) {
        return t.get(i, n);
      };
    }
    e.property = r;
  })(jo)), jo;
}
var To = {}, Co = {}, ko = {}, Do = {}, yf;
function jh() {
  return yf || (yf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r !== null && (typeof r == "object" || typeof r == "function");
    }
    e.isObject = t;
  })(Do)), Do;
}
var No = {}, gf;
function Th() {
  return gf || (gf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r == null || typeof r != "object" && typeof r != "function";
    }
    e.isPrimitive = t;
  })(No)), No;
}
var Mo = {}, bf;
function Ch() {
  return bf || (bf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n) {
      return r === n || Number.isNaN(r) && Number.isNaN(n);
    }
    e.eq = t;
  })(Mo)), Mo;
}
var xf;
function Vx() {
  return xf || (xf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Ks(), r = /* @__PURE__ */ jh(), n = /* @__PURE__ */ Th(), i = /* @__PURE__ */ Ch();
    function a(f, d, v) {
      return typeof v != "function" ? t.isMatch(f, d) : o(f, d, function h(p, m, y, g, b, E) {
        const P = v(p, m, y, g, b, E);
        return P !== void 0 ? !!P : o(p, m, h, E);
      }, /* @__PURE__ */ new Map());
    }
    function o(f, d, v, h) {
      if (d === f)
        return !0;
      switch (typeof d) {
        case "object":
          return u(f, d, v, h);
        case "function":
          return Object.keys(d).length > 0 ? o(f, { ...d }, v, h) : i.eq(f, d);
        default:
          return r.isObject(f) ? typeof d == "string" ? d === "" : !0 : i.eq(f, d);
      }
    }
    function u(f, d, v, h) {
      if (d == null)
        return !0;
      if (Array.isArray(d))
        return c(f, d, v, h);
      if (d instanceof Map)
        return s(f, d, v, h);
      if (d instanceof Set)
        return l(f, d, v, h);
      const p = Object.keys(d);
      if (f == null)
        return p.length === 0;
      if (p.length === 0)
        return !0;
      if (h && h.has(d))
        return h.get(d) === f;
      h && h.set(d, f);
      try {
        for (let m = 0; m < p.length; m++) {
          const y = p[m];
          if (!n.isPrimitive(f) && !(y in f) || d[y] === void 0 && f[y] !== void 0 || d[y] === null && f[y] !== null || !v(f[y], d[y], y, f, d, h))
            return !1;
        }
        return !0;
      } finally {
        h && h.delete(d);
      }
    }
    function s(f, d, v, h) {
      if (d.size === 0)
        return !0;
      if (!(f instanceof Map))
        return !1;
      for (const [p, m] of d.entries()) {
        const y = f.get(p);
        if (v(y, m, p, f, d, h) === !1)
          return !1;
      }
      return !0;
    }
    function c(f, d, v, h) {
      if (d.length === 0)
        return !0;
      if (!Array.isArray(f))
        return !1;
      const p = /* @__PURE__ */ new Set();
      for (let m = 0; m < d.length; m++) {
        const y = d[m];
        let g = !1;
        for (let b = 0; b < f.length; b++) {
          if (p.has(b))
            continue;
          const E = f[b];
          let P = !1;
          if (v(E, y, m, f, d, h) && (P = !0), P) {
            p.add(b), g = !0;
            break;
          }
        }
        if (!g)
          return !1;
      }
      return !0;
    }
    function l(f, d, v, h) {
      return d.size === 0 ? !0 : f instanceof Set ? c([...f], [...d], v, h) : !1;
    }
    e.isMatchWith = a, e.isSetMatch = l;
  })(ko)), ko;
}
var wf;
function Ks() {
  return wf || (wf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Vx();
    function r(n, i) {
      return t.isMatchWith(n, i, () => {
      });
    }
    e.isMatch = r;
  })(Co)), Co;
}
var Io = {}, Ro = {}, $o = {}, Of;
function Yx() {
  return Of || (Of = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return Object.getOwnPropertySymbols(r).filter((n) => Object.prototype.propertyIsEnumerable.call(r, n));
    }
    e.getSymbols = t;
  })($o)), $o;
}
var Lo = {}, Pf;
function kh() {
  return Pf || (Pf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r == null ? r === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(r);
    }
    e.getTag = t;
  })(Lo)), Lo;
}
var Bo = {}, Ef;
function Dh() {
  return Ef || (Ef = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = "[object RegExp]", r = "[object String]", n = "[object Number]", i = "[object Boolean]", a = "[object Arguments]", o = "[object Symbol]", u = "[object Date]", s = "[object Map]", c = "[object Set]", l = "[object Array]", f = "[object Function]", d = "[object ArrayBuffer]", v = "[object Object]", h = "[object Error]", p = "[object DataView]", m = "[object Uint8Array]", y = "[object Uint8ClampedArray]", g = "[object Uint16Array]", b = "[object Uint32Array]", E = "[object BigUint64Array]", P = "[object Int8Array]", O = "[object Int16Array]", A = "[object Int32Array]", j = "[object BigInt64Array]", N = "[object Float32Array]", M = "[object Float64Array]";
    e.argumentsTag = a, e.arrayBufferTag = d, e.arrayTag = l, e.bigInt64ArrayTag = j, e.bigUint64ArrayTag = E, e.booleanTag = i, e.dataViewTag = p, e.dateTag = u, e.errorTag = h, e.float32ArrayTag = N, e.float64ArrayTag = M, e.functionTag = f, e.int16ArrayTag = O, e.int32ArrayTag = A, e.int8ArrayTag = P, e.mapTag = s, e.numberTag = n, e.objectTag = v, e.regexpTag = t, e.setTag = c, e.stringTag = r, e.symbolTag = o, e.uint16ArrayTag = g, e.uint32ArrayTag = b, e.uint8ArrayTag = m, e.uint8ClampedArrayTag = y;
  })(Bo)), Bo;
}
var Fo = {}, Af;
function Hx() {
  return Af || (Af = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return ArrayBuffer.isView(r) && !(r instanceof DataView);
    }
    e.isTypedArray = t;
  })(Fo)), Fo;
}
var Sf;
function Nh() {
  return Sf || (Sf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Yx(), r = /* @__PURE__ */ kh(), n = /* @__PURE__ */ Dh(), i = /* @__PURE__ */ Th(), a = /* @__PURE__ */ Hx();
    function o(l, f) {
      return u(l, void 0, l, /* @__PURE__ */ new Map(), f);
    }
    function u(l, f, d, v = /* @__PURE__ */ new Map(), h = void 0) {
      const p = h?.(l, f, d, v);
      if (p !== void 0)
        return p;
      if (i.isPrimitive(l))
        return l;
      if (v.has(l))
        return v.get(l);
      if (Array.isArray(l)) {
        const m = new Array(l.length);
        v.set(l, m);
        for (let y = 0; y < l.length; y++)
          m[y] = u(l[y], y, d, v, h);
        return Object.hasOwn(l, "index") && (m.index = l.index), Object.hasOwn(l, "input") && (m.input = l.input), m;
      }
      if (l instanceof Date)
        return new Date(l.getTime());
      if (l instanceof RegExp) {
        const m = new RegExp(l.source, l.flags);
        return m.lastIndex = l.lastIndex, m;
      }
      if (l instanceof Map) {
        const m = /* @__PURE__ */ new Map();
        v.set(l, m);
        for (const [y, g] of l)
          m.set(y, u(g, y, d, v, h));
        return m;
      }
      if (l instanceof Set) {
        const m = /* @__PURE__ */ new Set();
        v.set(l, m);
        for (const y of l)
          m.add(u(y, void 0, d, v, h));
        return m;
      }
      if (typeof Buffer < "u" && Buffer.isBuffer(l))
        return l.subarray();
      if (a.isTypedArray(l)) {
        const m = new (Object.getPrototypeOf(l)).constructor(l.length);
        v.set(l, m);
        for (let y = 0; y < l.length; y++)
          m[y] = u(l[y], y, d, v, h);
        return m;
      }
      if (l instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && l instanceof SharedArrayBuffer)
        return l.slice(0);
      if (l instanceof DataView) {
        const m = new DataView(l.buffer.slice(0), l.byteOffset, l.byteLength);
        return v.set(l, m), s(m, l, d, v, h), m;
      }
      if (typeof File < "u" && l instanceof File) {
        const m = new File([l], l.name, {
          type: l.type
        });
        return v.set(l, m), s(m, l, d, v, h), m;
      }
      if (l instanceof Blob) {
        const m = new Blob([l], { type: l.type });
        return v.set(l, m), s(m, l, d, v, h), m;
      }
      if (l instanceof Error) {
        const m = new l.constructor();
        return v.set(l, m), m.message = l.message, m.name = l.name, m.stack = l.stack, m.cause = l.cause, s(m, l, d, v, h), m;
      }
      if (typeof l == "object" && c(l)) {
        const m = Object.create(Object.getPrototypeOf(l));
        return v.set(l, m), s(m, l, d, v, h), m;
      }
      return l;
    }
    function s(l, f, d = l, v, h) {
      const p = [...Object.keys(f), ...t.getSymbols(f)];
      for (let m = 0; m < p.length; m++) {
        const y = p[m], g = Object.getOwnPropertyDescriptor(l, y);
        (g == null || g.writable) && (l[y] = u(f[y], y, d, v, h));
      }
    }
    function c(l) {
      switch (r.getTag(l)) {
        case n.argumentsTag:
        case n.arrayTag:
        case n.arrayBufferTag:
        case n.dataViewTag:
        case n.booleanTag:
        case n.dateTag:
        case n.float32ArrayTag:
        case n.float64ArrayTag:
        case n.int8ArrayTag:
        case n.int16ArrayTag:
        case n.int32ArrayTag:
        case n.mapTag:
        case n.numberTag:
        case n.objectTag:
        case n.regexpTag:
        case n.setTag:
        case n.stringTag:
        case n.symbolTag:
        case n.uint8ArrayTag:
        case n.uint8ClampedArrayTag:
        case n.uint16ArrayTag:
        case n.uint32ArrayTag:
          return !0;
        default:
          return !1;
      }
    }
    e.cloneDeepWith = o, e.cloneDeepWithImpl = u, e.copyProperties = s;
  })(Ro)), Ro;
}
var _f;
function Gx() {
  return _f || (_f = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Nh();
    function r(n) {
      return t.cloneDeepWithImpl(n, void 0, n, /* @__PURE__ */ new Map(), void 0);
    }
    e.cloneDeep = r;
  })(Io)), Io;
}
var jf;
function Xx() {
  return jf || (jf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Ks(), r = /* @__PURE__ */ Gx();
    function n(i) {
      return i = r.cloneDeep(i), (a) => t.isMatch(a, i);
    }
    e.matches = n;
  })(To)), To;
}
var Ko = {}, zo = {}, Wo = {}, Tf;
function Zx() {
  return Tf || (Tf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Nh(), r = /* @__PURE__ */ Dh();
    function n(i, a) {
      return t.cloneDeepWith(i, (o, u, s, c) => {
        const l = a?.(o, u, s, c);
        if (l !== void 0)
          return l;
        if (typeof i == "object")
          switch (Object.prototype.toString.call(i)) {
            case r.numberTag:
            case r.stringTag:
            case r.booleanTag: {
              const f = new i.constructor(i?.valueOf());
              return t.copyProperties(f, i), f;
            }
            case r.argumentsTag: {
              const f = {};
              return t.copyProperties(f, i), f.length = i.length, f[Symbol.iterator] = i[Symbol.iterator], f;
            }
            default:
              return;
          }
      });
    }
    e.cloneDeepWith = n;
  })(Wo)), Wo;
}
var Cf;
function Jx() {
  return Cf || (Cf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Zx();
    function r(n) {
      return t.cloneDeepWith(n);
    }
    e.cloneDeep = r;
  })(zo)), zo;
}
var qo = {}, Uo = {}, kf;
function Mh() {
  return kf || (kf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /^(?:0|[1-9]\d*)$/;
    function r(n, i = Number.MAX_SAFE_INTEGER) {
      switch (typeof n) {
        case "number":
          return Number.isInteger(n) && n >= 0 && n < i;
        case "symbol":
          return !1;
        case "string":
          return t.test(n);
      }
    }
    e.isIndex = r;
  })(Uo)), Uo;
}
var Vo = {}, Df;
function Qx() {
  return Df || (Df = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ kh();
    function r(n) {
      return n !== null && typeof n == "object" && t.getTag(n) === "[object Arguments]";
    }
    e.isArguments = r;
  })(Vo)), Vo;
}
var Nf;
function ew() {
  return Nf || (Nf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ th(), r = /* @__PURE__ */ Mh(), n = /* @__PURE__ */ Qx(), i = /* @__PURE__ */ Ds();
    function a(o, u) {
      let s;
      if (Array.isArray(u) ? s = u : typeof u == "string" && t.isDeepKey(u) && o?.[u] == null ? s = i.toPath(u) : s = [u], s.length === 0)
        return !1;
      let c = o;
      for (let l = 0; l < s.length; l++) {
        const f = s[l];
        if ((c == null || !Object.hasOwn(c, f)) && !((Array.isArray(c) || n.isArguments(c)) && r.isIndex(f) && f < c.length))
          return !1;
        c = c[f];
      }
      return !0;
    }
    e.has = a;
  })(qo)), qo;
}
var Mf;
function tw() {
  return Mf || (Mf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Ks(), r = /* @__PURE__ */ rh(), n = /* @__PURE__ */ Jx(), i = /* @__PURE__ */ Ns(), a = /* @__PURE__ */ ew();
    function o(u, s) {
      switch (typeof u) {
        case "object": {
          Object.is(u?.valueOf(), -0) && (u = "-0");
          break;
        }
        case "number": {
          u = r.toKey(u);
          break;
        }
      }
      return s = n.cloneDeep(s), function(c) {
        const l = i.get(c, u);
        return l === void 0 ? a.has(c, u) : s === void 0 ? l === void 0 : t.isMatch(l, s);
      };
    }
    e.matchesProperty = o;
  })(Ko)), Ko;
}
var If;
function rw() {
  return If || (If = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ _h(), r = /* @__PURE__ */ Ux(), n = /* @__PURE__ */ Xx(), i = /* @__PURE__ */ tw();
    function a(o) {
      if (o == null)
        return t.identity;
      switch (typeof o) {
        case "function":
          return o;
        case "object":
          return Array.isArray(o) && o.length === 2 ? i.matchesProperty(o[0], o[1]) : n.matches(o);
        case "string":
        case "symbol":
        case "number":
          return r.property(o);
      }
    }
    e.iteratee = a;
  })(_o)), _o;
}
var Rf;
function nw() {
  return Rf || (Rf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Kx(), r = /* @__PURE__ */ _h(), n = /* @__PURE__ */ qx(), i = /* @__PURE__ */ rw();
    function a(o, u = r.identity) {
      return n.isArrayLikeObject(o) ? t.uniqBy(Array.from(o), i.iteratee(u)) : [];
    }
    e.uniqBy = a;
  })(xo)), xo;
}
var Yo, $f;
function iw() {
  return $f || ($f = 1, Yo = nw().uniqBy), Yo;
}
var aw = /* @__PURE__ */ iw();
const Lf = /* @__PURE__ */ cr(aw);
function ow(e, t, r) {
  return t === !0 ? Lf(e, r) : typeof t == "function" ? Lf(e, t) : e;
}
var yi = { exports: {} }, Ho = {}, gi = { exports: {} }, Go = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bf;
function uw() {
  if (Bf) return Go;
  Bf = 1;
  var e = Xe;
  function t(f, d) {
    return f === d && (f !== 0 || 1 / f === 1 / d) || f !== f && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, i = e.useEffect, a = e.useLayoutEffect, o = e.useDebugValue;
  function u(f, d) {
    var v = d(), h = n({ inst: { value: v, getSnapshot: d } }), p = h[0].inst, m = h[1];
    return a(
      function() {
        p.value = v, p.getSnapshot = d, s(p) && m({ inst: p });
      },
      [f, v, d]
    ), i(
      function() {
        return s(p) && m({ inst: p }), f(function() {
          s(p) && m({ inst: p });
        });
      },
      [f]
    ), o(v), v;
  }
  function s(f) {
    var d = f.getSnapshot;
    f = f.value;
    try {
      var v = d();
      return !r(f, v);
    } catch {
      return !0;
    }
  }
  function c(f, d) {
    return d();
  }
  var l = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? c : u;
  return Go.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l, Go;
}
var Xo = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ff;
function sw() {
  return Ff || (Ff = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(v, h) {
      return v === h && (v !== 0 || 1 / v === 1 / h) || v !== v && h !== h;
    }
    function t(v, h) {
      l || i.startTransition === void 0 || (l = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var p = h();
      if (!f) {
        var m = h();
        a(p, m) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), f = !0);
      }
      m = o({
        inst: { value: p, getSnapshot: h }
      });
      var y = m[0].inst, g = m[1];
      return s(
        function() {
          y.value = p, y.getSnapshot = h, r(y) && g({ inst: y });
        },
        [v, p, h]
      ), u(
        function() {
          return r(y) && g({ inst: y }), v(function() {
            r(y) && g({ inst: y });
          });
        },
        [v]
      ), c(p), p;
    }
    function r(v) {
      var h = v.getSnapshot;
      v = v.value;
      try {
        var p = h();
        return !a(v, p);
      } catch {
        return !0;
      }
    }
    function n(v, h) {
      return h();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var i = Xe, a = typeof Object.is == "function" ? Object.is : e, o = i.useState, u = i.useEffect, s = i.useLayoutEffect, c = i.useDebugValue, l = !1, f = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : t;
    Xo.useSyncExternalStore = i.useSyncExternalStore !== void 0 ? i.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), Xo;
}
var Kf;
function Ih() {
  return Kf || (Kf = 1, process.env.NODE_ENV === "production" ? gi.exports = uw() : gi.exports = sw()), gi.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zf;
function lw() {
  if (zf) return Ho;
  zf = 1;
  var e = Xe, t = Ih();
  function r(c, l) {
    return c === l && (c !== 0 || 1 / c === 1 / l) || c !== c && l !== l;
  }
  var n = typeof Object.is == "function" ? Object.is : r, i = t.useSyncExternalStore, a = e.useRef, o = e.useEffect, u = e.useMemo, s = e.useDebugValue;
  return Ho.useSyncExternalStoreWithSelector = function(c, l, f, d, v) {
    var h = a(null);
    if (h.current === null) {
      var p = { hasValue: !1, value: null };
      h.current = p;
    } else p = h.current;
    h = u(
      function() {
        function y(O) {
          if (!g) {
            if (g = !0, b = O, O = d(O), v !== void 0 && p.hasValue) {
              var A = p.value;
              if (v(A, O))
                return E = A;
            }
            return E = O;
          }
          if (A = E, n(b, O)) return A;
          var j = d(O);
          return v !== void 0 && v(A, j) ? (b = O, A) : (b = O, E = j);
        }
        var g = !1, b, E, P = f === void 0 ? null : f;
        return [
          function() {
            return y(l());
          },
          P === null ? void 0 : function() {
            return y(P());
          }
        ];
      },
      [l, f, d, v]
    );
    var m = i(c, h[0], h[1]);
    return o(
      function() {
        p.hasValue = !0, p.value = m;
      },
      [m]
    ), s(m), m;
  }, Ho;
}
var Zo = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wf;
function cw() {
  return Wf || (Wf = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(c, l) {
      return c === l && (c !== 0 || 1 / c === 1 / l) || c !== c && l !== l;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = Xe, r = Ih(), n = typeof Object.is == "function" ? Object.is : e, i = r.useSyncExternalStore, a = t.useRef, o = t.useEffect, u = t.useMemo, s = t.useDebugValue;
    Zo.useSyncExternalStoreWithSelector = function(c, l, f, d, v) {
      var h = a(null);
      if (h.current === null) {
        var p = { hasValue: !1, value: null };
        h.current = p;
      } else p = h.current;
      h = u(
        function() {
          function y(O) {
            if (!g) {
              if (g = !0, b = O, O = d(O), v !== void 0 && p.hasValue) {
                var A = p.value;
                if (v(A, O))
                  return E = A;
              }
              return E = O;
            }
            if (A = E, n(b, O))
              return A;
            var j = d(O);
            return v !== void 0 && v(A, j) ? (b = O, A) : (b = O, E = j);
          }
          var g = !1, b, E, P = f === void 0 ? null : f;
          return [
            function() {
              return y(l());
            },
            P === null ? void 0 : function() {
              return y(P());
            }
          ];
        },
        [l, f, d, v]
      );
      var m = i(c, h[0], h[1]);
      return o(
        function() {
          p.hasValue = !0, p.value = m;
        },
        [m]
      ), s(m), m;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), Zo;
}
var qf;
function fw() {
  return qf || (qf = 1, process.env.NODE_ENV === "production" ? yi.exports = lw() : yi.exports = cw()), yi.exports;
}
var dw = fw(), zs = /* @__PURE__ */ Pt(null), vw = (e) => e, Ee = () => {
  var e = Ut(zs);
  return e ? e.store.dispatch : vw;
}, Ri = () => {
}, pw = () => Ri, hw = (e, t) => e === t;
function F(e) {
  var t = Ut(zs);
  return dw.useSyncExternalStoreWithSelector(t ? t.subscription.addNestedSub : pw, t ? t.store.getState : Ri, t ? t.store.getState : Ri, t ? e : Ri, hw);
}
var mw = (e, t, r) => {
  if (t.length === 1 && t[0] === r) {
    let n = !1;
    try {
      const i = {};
      e(i) === i && (n = !0);
    } catch {
    }
    if (n) {
      let i;
      try {
        throw new Error();
      } catch (a) {
        ({ stack: i } = a);
      }
      console.warn(
        `The result function returned its own inputs without modification. e.g
\`createSelector([state => state.todos], todos => todos)\`
This could lead to inefficient memoization and unnecessary re-renders.
Ensure transformation logic is in the result function, and extraction logic is in the input selectors.`,
        { stack: i }
      );
    }
  }
}, yw = (e, t, r) => {
  const { memoize: n, memoizeOptions: i } = t, { inputSelectorResults: a, inputSelectorResultsCopy: o } = e, u = n(() => ({}), ...i);
  if (!(u.apply(null, a) === u.apply(null, o))) {
    let c;
    try {
      throw new Error();
    } catch (l) {
      ({ stack: c } = l);
    }
    console.warn(
      `An input selector returned a different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,
      {
        arguments: r,
        firstInputs: a,
        secondInputs: o,
        stack: c
      }
    );
  }
}, gw = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function bw(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function xw(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function ww(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((r) => typeof r == "function")) {
    const r = e.map(
      (n) => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n
    ).join(", ");
    throw new TypeError(`${t}[${r}]`);
  }
}
var Uf = (e) => Array.isArray(e) ? e : [e];
function Ow(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return ww(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function Vf(e, t) {
  const r = [], { length: n } = e;
  for (let i = 0; i < n; i++)
    r.push(e[i].apply(null, t));
  return r;
}
var Pw = (e, t) => {
  const { identityFunctionCheck: r, inputStabilityCheck: n } = {
    ...gw,
    ...t
  };
  return {
    identityFunctionCheck: {
      shouldRun: r === "always" || r === "once" && e,
      run: mw
    },
    inputStabilityCheck: {
      shouldRun: n === "always" || n === "once" && e,
      run: yw
    }
  };
}, Ew = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, Aw = typeof WeakRef < "u" ? WeakRef : Ew, Sw = 0, Yf = 1;
function bi() {
  return {
    s: Sw,
    v: void 0,
    o: null,
    p: null
  };
}
function Rh(e, t = {}) {
  let r = bi();
  const { resultEqualityCheck: n } = t;
  let i, a = 0;
  function o() {
    let u = r;
    const { length: s } = arguments;
    for (let f = 0, d = s; f < d; f++) {
      const v = arguments[f];
      if (typeof v == "function" || typeof v == "object" && v !== null) {
        let h = u.o;
        h === null && (u.o = h = /* @__PURE__ */ new WeakMap());
        const p = h.get(v);
        p === void 0 ? (u = bi(), h.set(v, u)) : u = p;
      } else {
        let h = u.p;
        h === null && (u.p = h = /* @__PURE__ */ new Map());
        const p = h.get(v);
        p === void 0 ? (u = bi(), h.set(v, u)) : u = p;
      }
    }
    const c = u;
    let l;
    if (u.s === Yf)
      l = u.v;
    else if (l = e.apply(null, arguments), a++, n) {
      const f = i?.deref?.() ?? i;
      f != null && n(f, l) && (l = f, a !== 0 && a--), i = typeof l == "object" && l !== null || typeof l == "function" ? new Aw(l) : l;
    }
    return c.s = Yf, c.v = l, l;
  }
  return o.clearCache = () => {
    r = bi(), o.resetResultsCount();
  }, o.resultsCount = () => a, o.resetResultsCount = () => {
    a = 0;
  }, o;
}
function _w(e, ...t) {
  const r = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, n = (...i) => {
    let a = 0, o = 0, u, s = {}, c = i.pop();
    typeof c == "object" && (s = c, c = i.pop()), bw(
      c,
      `createSelector expects an output function after the inputs, but received: [${typeof c}]`
    );
    const l = {
      ...r,
      ...s
    }, {
      memoize: f,
      memoizeOptions: d = [],
      argsMemoize: v = Rh,
      argsMemoizeOptions: h = [],
      devModeChecks: p = {}
    } = l, m = Uf(d), y = Uf(h), g = Ow(i), b = f(function() {
      return a++, c.apply(
        null,
        arguments
      );
    }, ...m);
    let E = !0;
    const P = v(function() {
      o++;
      const A = Vf(
        g,
        arguments
      );
      if (u = b.apply(null, A), process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: j, inputStabilityCheck: N } = Pw(E, p);
        if (j.shouldRun && j.run(
          c,
          A,
          u
        ), N.shouldRun) {
          const M = Vf(
            g,
            arguments
          );
          N.run(
            { inputSelectorResults: A, inputSelectorResultsCopy: M },
            { memoize: f, memoizeOptions: m },
            arguments
          );
        }
        E && (E = !1);
      }
      return u;
    }, ...y);
    return Object.assign(P, {
      resultFunc: c,
      memoizedResultFunc: b,
      dependencies: g,
      dependencyRecomputations: () => o,
      resetDependencyRecomputations: () => {
        o = 0;
      },
      lastResult: () => u,
      recomputations: () => a,
      resetRecomputations: () => {
        a = 0;
      },
      memoize: f,
      argsMemoize: v
    });
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var S = /* @__PURE__ */ _w(Rh), jw = Object.assign(
  (e, t = S) => {
    xw(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const r = Object.keys(e), n = r.map(
      (a) => e[a]
    );
    return t(
      n,
      (...a) => a.reduce((o, u, s) => (o[r[s]] = u, o), {})
    );
  },
  { withTypes: () => jw }
), Jo = {}, Qo = {}, eu = {}, Hf;
function Tw() {
  return Hf || (Hf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(n) {
      return typeof n == "symbol" ? 1 : n === null ? 2 : n === void 0 ? 3 : n !== n ? 4 : 0;
    }
    const r = (n, i, a) => {
      if (n !== i) {
        const o = t(n), u = t(i);
        if (o === u && o === 0) {
          if (n < i)
            return a === "desc" ? 1 : -1;
          if (n > i)
            return a === "desc" ? -1 : 1;
        }
        return a === "desc" ? u - o : o - u;
      }
      return 0;
    };
    e.compareValues = r;
  })(eu)), eu;
}
var tu = {}, ru = {}, Gf;
function $h() {
  return Gf || (Gf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return typeof r == "symbol" || r instanceof Symbol;
    }
    e.isSymbol = t;
  })(ru)), ru;
}
var Xf;
function Cw() {
  return Xf || (Xf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ $h(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
    function i(a, o) {
      return Array.isArray(a) ? !1 : typeof a == "number" || typeof a == "boolean" || a == null || t.isSymbol(a) ? !0 : typeof a == "string" && (n.test(a) || !r.test(a)) || o != null && Object.hasOwn(o, a);
    }
    e.isKey = i;
  })(tu)), tu;
}
var Zf;
function kw() {
  return Zf || (Zf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Tw(), r = /* @__PURE__ */ Cw(), n = /* @__PURE__ */ Ds();
    function i(a, o, u, s) {
      if (a == null)
        return [];
      u = s ? void 0 : u, Array.isArray(a) || (a = Object.values(a)), Array.isArray(o) || (o = o == null ? [null] : [o]), o.length === 0 && (o = [null]), Array.isArray(u) || (u = u == null ? [] : [u]), u = u.map((v) => String(v));
      const c = (v, h) => {
        let p = v;
        for (let m = 0; m < h.length && p != null; ++m)
          p = p[h[m]];
        return p;
      }, l = (v, h) => h == null || v == null ? h : typeof v == "object" && "key" in v ? Object.hasOwn(h, v.key) ? h[v.key] : c(h, v.path) : typeof v == "function" ? v(h) : Array.isArray(v) ? c(h, v) : typeof h == "object" ? h[v] : h, f = o.map((v) => (Array.isArray(v) && v.length === 1 && (v = v[0]), v == null || typeof v == "function" || Array.isArray(v) || r.isKey(v) ? v : { key: v, path: n.toPath(v) }));
      return a.map((v) => ({
        original: v,
        criteria: f.map((h) => l(h, v))
      })).slice().sort((v, h) => {
        for (let p = 0; p < f.length; p++) {
          const m = t.compareValues(v.criteria[p], h.criteria[p], u[p]);
          if (m !== 0)
            return m;
        }
        return 0;
      }).map((v) => v.original);
    }
    e.orderBy = i;
  })(Qo)), Qo;
}
var nu = {}, Jf;
function Dw() {
  return Jf || (Jf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n = 1) {
      const i = [], a = Math.floor(n), o = (u, s) => {
        for (let c = 0; c < u.length; c++) {
          const l = u[c];
          Array.isArray(l) && s < a ? o(l, s + 1) : i.push(l);
        }
      };
      return o(r, 0), i;
    }
    e.flatten = t;
  })(nu)), nu;
}
var iu = {}, Qf;
function Lh() {
  return Qf || (Qf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Mh(), r = /* @__PURE__ */ Fs(), n = /* @__PURE__ */ jh(), i = /* @__PURE__ */ Ch();
    function a(o, u, s) {
      return n.isObject(s) && (typeof u == "number" && r.isArrayLike(s) && t.isIndex(u) && u < s.length || typeof u == "string" && u in s) ? i.eq(s[u], o) : !1;
    }
    e.isIterateeCall = a;
  })(iu)), iu;
}
var ed;
function Nw() {
  return ed || (ed = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ kw(), r = /* @__PURE__ */ Dw(), n = /* @__PURE__ */ Lh();
    function i(a, ...o) {
      const u = o.length;
      return u > 1 && n.isIterateeCall(a, o[0], o[1]) ? o = [] : u > 2 && n.isIterateeCall(o[0], o[1], o[2]) && (o = [o[0]]), t.orderBy(a, r.flatten(o), ["asc"]);
    }
    e.sortBy = i;
  })(Jo)), Jo;
}
var au, td;
function Mw() {
  return td || (td = 1, au = Nw().sortBy), au;
}
var Iw = /* @__PURE__ */ Mw();
const _a = /* @__PURE__ */ cr(Iw);
var Bh = (e) => e.legend.settings, Rw = (e) => e.legend.size, $w = (e) => e.legend.payload;
S([$w, Bh], (e, t) => {
  var {
    itemSorter: r
  } = t, n = e.flat(1);
  return r ? _a(n, r) : n;
});
var xi = 1;
function Lw() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], [t, r] = nt({
    height: 0,
    left: 0,
    top: 0,
    width: 0
  }), n = ge(
    (i) => {
      if (i != null) {
        var a = i.getBoundingClientRect(), o = {
          height: a.height,
          left: a.left,
          top: a.top,
          width: a.width
        };
        (Math.abs(o.height - t.height) > xi || Math.abs(o.left - t.left) > xi || Math.abs(o.top - t.top) > xi || Math.abs(o.width - t.width) > xi) && r({
          height: o.height,
          left: o.left,
          top: o.top,
          width: o.width
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t.width, t.height, t.top, t.left, ...e]
  );
  return [t, n];
}
function Be(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Bw = typeof Symbol == "function" && Symbol.observable || "@@observable", rd = Bw, ou = () => Math.random().toString(36).substring(7).split("").join("."), Fw = {
  INIT: `@@redux/INIT${/* @__PURE__ */ ou()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ ou()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${ou()}`
}, Ar = Fw;
function Vn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Kw(e) {
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  const t = typeof e;
  switch (t) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return t;
  }
  if (Array.isArray(e))
    return "array";
  if (qw(e))
    return "date";
  if (Ww(e))
    return "error";
  const r = zw(e);
  switch (r) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return r;
  }
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function zw(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function Ww(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function qw(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function Qt(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = Kw(e)), t;
}
function Fh(e, t, r) {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Be(2) : `Expected the root reducer to be a function. Instead, received: '${Qt(e)}'`);
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? Be(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Be(1) : `Expected the enhancer to be a function. Instead, received: '${Qt(r)}'`);
    return r(Fh)(e, t);
  }
  let n = e, i = t, a = /* @__PURE__ */ new Map(), o = a, u = 0, s = !1;
  function c() {
    o === a && (o = /* @__PURE__ */ new Map(), a.forEach((m, y) => {
      o.set(y, m);
    }));
  }
  function l() {
    if (s)
      throw new Error(process.env.NODE_ENV === "production" ? Be(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function f(m) {
    if (typeof m != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Be(4) : `Expected the listener to be a function. Instead, received: '${Qt(m)}'`);
    if (s)
      throw new Error(process.env.NODE_ENV === "production" ? Be(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let y = !0;
    c();
    const g = u++;
    return o.set(g, m), function() {
      if (y) {
        if (s)
          throw new Error(process.env.NODE_ENV === "production" ? Be(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        y = !1, c(), o.delete(g), a = null;
      }
    };
  }
  function d(m) {
    if (!Vn(m))
      throw new Error(process.env.NODE_ENV === "production" ? Be(7) : `Actions must be plain objects. Instead, the actual type was: '${Qt(m)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof m.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Be(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof m.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? Be(17) : `Action "type" property must be a string. Instead, the actual type was: '${Qt(m.type)}'. Value was: '${m.type}' (stringified)`);
    if (s)
      throw new Error(process.env.NODE_ENV === "production" ? Be(9) : "Reducers may not dispatch actions.");
    try {
      s = !0, i = n(i, m);
    } finally {
      s = !1;
    }
    return (a = o).forEach((g) => {
      g();
    }), m;
  }
  function v(m) {
    if (typeof m != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Be(10) : `Expected the nextReducer to be a function. Instead, received: '${Qt(m)}`);
    n = m, d({
      type: Ar.REPLACE
    });
  }
  function h() {
    const m = f;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(y) {
        if (typeof y != "object" || y === null)
          throw new Error(process.env.NODE_ENV === "production" ? Be(11) : `Expected the observer to be an object. Instead, received: '${Qt(y)}'`);
        function g() {
          const E = y;
          E.next && E.next(l());
        }
        return g(), {
          unsubscribe: m(g)
        };
      },
      [rd]() {
        return this;
      }
    };
  }
  return d({
    type: Ar.INIT
  }), {
    dispatch: d,
    subscribe: f,
    getState: l,
    replaceReducer: v,
    [rd]: h
  };
}
function nd(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Uw(e, t, r, n) {
  const i = Object.keys(t), a = r && r.type === Ar.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (i.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!Vn(e))
    return `The ${a} has unexpected type of "${Qt(e)}". Expected argument to be an object with the following keys: "${i.join('", "')}"`;
  const o = Object.keys(e).filter((u) => !t.hasOwnProperty(u) && !n[u]);
  if (o.forEach((u) => {
    n[u] = !0;
  }), !(r && r.type === Ar.REPLACE) && o.length > 0)
    return `Unexpected ${o.length > 1 ? "keys" : "key"} "${o.join('", "')}" found in ${a}. Expected to find one of the known reducer keys instead: "${i.join('", "')}". Unexpected keys will be ignored.`;
}
function Vw(e) {
  Object.keys(e).forEach((t) => {
    const r = e[t];
    if (typeof r(void 0, {
      type: Ar.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Be(12) : `The slice reducer for key "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof r(void 0, {
      type: Ar.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Be(13) : `The slice reducer for key "${t}" returned undefined when probed with a random type. Don't try to handle '${Ar.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function Kh(e) {
  const t = Object.keys(e), r = {};
  for (let o = 0; o < t.length; o++) {
    const u = t[o];
    process.env.NODE_ENV !== "production" && typeof e[u] > "u" && nd(`No reducer provided for key "${u}"`), typeof e[u] == "function" && (r[u] = e[u]);
  }
  const n = Object.keys(r);
  let i;
  process.env.NODE_ENV !== "production" && (i = {});
  let a;
  try {
    Vw(r);
  } catch (o) {
    a = o;
  }
  return function(u = {}, s) {
    if (a)
      throw a;
    if (process.env.NODE_ENV !== "production") {
      const f = Uw(u, r, s, i);
      f && nd(f);
    }
    let c = !1;
    const l = {};
    for (let f = 0; f < n.length; f++) {
      const d = n[f], v = r[d], h = u[d], p = v(h, s);
      if (typeof p > "u") {
        const m = s && s.type;
        throw new Error(process.env.NODE_ENV === "production" ? Be(14) : `When called with an action of type ${m ? `"${String(m)}"` : "(unknown type)"}, the slice reducer for key "${d}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      l[d] = p, c = c || p !== h;
    }
    return c = c || n.length !== Object.keys(u).length, c ? l : u;
  };
}
function Ui(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, r) => (...n) => t(r(...n)));
}
function Yw(...e) {
  return (t) => (r, n) => {
    const i = t(r, n);
    let a = () => {
      throw new Error(process.env.NODE_ENV === "production" ? Be(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const o = {
      getState: i.getState,
      dispatch: (s, ...c) => a(s, ...c)
    }, u = e.map((s) => s(o));
    return a = Ui(...u)(i.dispatch), {
      ...i,
      dispatch: a
    };
  };
}
function Ws(e) {
  return Vn(e) && "type" in e && typeof e.type == "string";
}
var zh = Symbol.for("immer-nothing"), id = Symbol.for("immer-draftable"), ft = Symbol.for("immer-state"), Hw = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(e) {
    return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
  },
  function(e) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
  },
  "This object has been frozen and should not be mutated",
  function(e) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(e) {
    return `'current' expects a draft, got: ${e}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(e) {
    return `'original' expects a draft, got: ${e}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function tt(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const r = Hw[e], n = typeof r == "function" ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Hr = Object.getPrototypeOf;
function kr(e) {
  return !!e && !!e[ft];
}
function Kt(e) {
  return e ? Wh(e) || Array.isArray(e) || !!e[id] || !!e.constructor?.[id] || Yn(e) || Ta(e) : !1;
}
var Gw = Object.prototype.constructor.toString();
function Wh(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Hr(e);
  if (t === null)
    return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === Gw;
}
function Vi(e, t) {
  ja(e) === 0 ? Reflect.ownKeys(e).forEach((r) => {
    t(r, e[r], e);
  }) : e.forEach((r, n) => t(n, r, e));
}
function ja(e) {
  const t = e[ft];
  return t ? t.type_ : Array.isArray(e) ? 1 : Yn(e) ? 2 : Ta(e) ? 3 : 0;
}
function Yu(e, t) {
  return ja(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function qh(e, t, r) {
  const n = ja(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function Xw(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Yn(e) {
  return e instanceof Map;
}
function Ta(e) {
  return e instanceof Set;
}
function br(e) {
  return e.copy_ || e.base_;
}
function Hu(e, t) {
  if (Yn(e))
    return new Map(e);
  if (Ta(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const r = Wh(e);
  if (t === !0 || t === "class_only" && !r) {
    const n = Object.getOwnPropertyDescriptors(e);
    delete n[ft];
    let i = Reflect.ownKeys(n);
    for (let a = 0; a < i.length; a++) {
      const o = i[a], u = n[o];
      u.writable === !1 && (u.writable = !0, u.configurable = !0), (u.get || u.set) && (n[o] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: u.enumerable,
        value: e[o]
      });
    }
    return Object.create(Hr(e), n);
  } else {
    const n = Hr(e);
    if (n !== null && r)
      return { ...e };
    const i = Object.create(n);
    return Object.assign(i, e);
  }
}
function qs(e, t = !1) {
  return Ca(e) || kr(e) || !Kt(e) || (ja(e) > 1 && Object.defineProperties(e, {
    set: { value: wi },
    add: { value: wi },
    clear: { value: wi },
    delete: { value: wi }
  }), Object.freeze(e), t && Object.values(e).forEach((r) => qs(r, !0))), e;
}
function wi() {
  tt(2);
}
function Ca(e) {
  return Object.isFrozen(e);
}
var Zw = {};
function Dr(e) {
  const t = Zw[e];
  return t || tt(0, e), t;
}
var Mn;
function Uh() {
  return Mn;
}
function Jw(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function ad(e, t) {
  t && (Dr("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Gu(e) {
  Xu(e), e.drafts_.forEach(Qw), e.drafts_ = null;
}
function Xu(e) {
  e === Mn && (Mn = e.parent_);
}
function od(e) {
  return Mn = Jw(Mn, e);
}
function Qw(e) {
  const t = e[ft];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function ud(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[ft].modified_ && (Gu(t), tt(4)), Kt(e) && (e = Yi(t, e), t.parent_ || Hi(t, e)), t.patches_ && Dr("Patches").generateReplacementPatches_(
    r[ft].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = Yi(t, r, []), Gu(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== zh ? e : void 0;
}
function Yi(e, t, r) {
  if (Ca(t))
    return t;
  const n = t[ft];
  if (!n)
    return Vi(
      t,
      (i, a) => sd(e, n, t, i, a, r)
    ), t;
  if (n.scope_ !== e)
    return t;
  if (!n.modified_)
    return Hi(e, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const i = n.copy_;
    let a = i, o = !1;
    n.type_ === 3 && (a = new Set(i), i.clear(), o = !0), Vi(
      a,
      (u, s) => sd(e, n, i, u, s, r, o)
    ), Hi(e, i, !1), r && e.patches_ && Dr("Patches").generatePatches_(
      n,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return n.copy_;
}
function sd(e, t, r, n, i, a, o) {
  if (process.env.NODE_ENV !== "production" && i === r && tt(5), kr(i)) {
    const u = a && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Yu(t.assigned_, n) ? a.concat(n) : void 0, s = Yi(e, i, u);
    if (qh(r, n, s), kr(s))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else o && r.add(i);
  if (Kt(i) && !Ca(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    Yi(e, i), (!t || !t.scope_.parent_) && typeof n != "symbol" && (Yn(r) ? r.has(n) : Object.prototype.propertyIsEnumerable.call(r, n)) && Hi(e, i);
  }
}
function Hi(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && qs(t, r);
}
function eO(e, t) {
  const r = Array.isArray(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : Uh(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let i = n, a = Us;
  r && (i = [n], a = In);
  const { revoke: o, proxy: u } = Proxy.revocable(i, a);
  return n.draft_ = u, n.revoke_ = o, u;
}
var Us = {
  get(e, t) {
    if (t === ft)
      return e;
    const r = br(e);
    if (!Yu(r, t))
      return tO(e, r, t);
    const n = r[t];
    return e.finalized_ || !Kt(n) ? n : n === uu(e.base_, t) ? (su(e), e.copy_[t] = Ju(n, e)) : n;
  },
  has(e, t) {
    return t in br(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(br(e));
  },
  set(e, t, r) {
    const n = Vh(br(e), t);
    if (n?.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const i = uu(br(e), t), a = i?.[ft];
      if (a && a.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (Xw(r, i) && (r !== void 0 || Yu(e.base_, t)))
        return !0;
      su(e), Zu(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return uu(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, su(e), Zu(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = br(e), n = Reflect.getOwnPropertyDescriptor(r, t);
    return n && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: n.enumerable,
      value: r[t]
    };
  },
  defineProperty() {
    tt(11);
  },
  getPrototypeOf(e) {
    return Hr(e.base_);
  },
  setPrototypeOf() {
    tt(12);
  }
}, In = {};
Vi(Us, (e, t) => {
  In[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
In.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && tt(13), In.set.call(this, e, t, void 0);
};
In.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && tt(14), Us.set.call(this, e[0], t, r, e[0]);
};
function uu(e, t) {
  const r = e[ft];
  return (r ? br(r) : e)[t];
}
function tO(e, t, r) {
  const n = Vh(t, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    n.get?.call(e.draft_)
  ) : void 0;
}
function Vh(e, t) {
  if (!(t in e))
    return;
  let r = Hr(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = Hr(r);
  }
}
function Zu(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Zu(e.parent_));
}
function su(e) {
  e.copy_ || (e.copy_ = Hu(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var rO = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, r, n) => {
      if (typeof t == "function" && typeof r != "function") {
        const a = r;
        r = t;
        const o = this;
        return function(s = a, ...c) {
          return o.produce(s, (l) => r.call(this, l, ...c));
        };
      }
      typeof r != "function" && tt(6), n !== void 0 && typeof n != "function" && tt(7);
      let i;
      if (Kt(t)) {
        const a = od(this), o = Ju(t, void 0);
        let u = !0;
        try {
          i = r(o), u = !1;
        } finally {
          u ? Gu(a) : Xu(a);
        }
        return ad(a, n), ud(i, a);
      } else if (!t || typeof t != "object") {
        if (i = r(t), i === void 0 && (i = t), i === zh && (i = void 0), this.autoFreeze_ && qs(i, !0), n) {
          const a = [], o = [];
          Dr("Patches").generateReplacementPatches_(t, i, a, o), n(a, o);
        }
        return i;
      } else
        tt(1, t);
    }, this.produceWithPatches = (t, r) => {
      if (typeof t == "function")
        return (o, ...u) => this.produceWithPatches(o, (s) => t(s, ...u));
      let n, i;
      return [this.produce(t, r, (o, u) => {
        n = o, i = u;
      }), n, i];
    }, typeof e?.autoFreeze == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof e?.useStrictShallowCopy == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    Kt(e) || tt(8), kr(e) && (e = Bt(e));
    const t = od(this), r = Ju(e, void 0);
    return r[ft].isManual_ = !0, Xu(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[ft];
    (!r || !r.isManual_) && tt(9);
    const { scope_: n } = r;
    return ad(n, t), ud(void 0, n);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let r;
    for (r = t.length - 1; r >= 0; r--) {
      const i = t[r];
      if (i.path.length === 0 && i.op === "replace") {
        e = i.value;
        break;
      }
    }
    r > -1 && (t = t.slice(r + 1));
    const n = Dr("Patches").applyPatches_;
    return kr(e) ? n(e, t) : this.produce(
      e,
      (i) => n(i, t)
    );
  }
};
function Ju(e, t) {
  const r = Yn(e) ? Dr("MapSet").proxyMap_(e, t) : Ta(e) ? Dr("MapSet").proxySet_(e, t) : eO(e, t);
  return (t ? t.scope_ : Uh()).drafts_.push(r), r;
}
function Bt(e) {
  return kr(e) || tt(10, e), Yh(e);
}
function Yh(e) {
  if (!Kt(e) || Ca(e))
    return e;
  const t = e[ft];
  let r;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = Hu(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    r = Hu(e, !0);
  return Vi(r, (n, i) => {
    qh(r, n, Yh(i));
  }), t && (t.finalized_ = !1), r;
}
var nO = new rO(), Hh = nO.produce;
function Gh(e) {
  return ({ dispatch: r, getState: n }) => (i) => (a) => typeof a == "function" ? a(r, n, e) : i(a);
}
var iO = Gh(), aO = Gh, oO = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Ui : Ui.apply(null, arguments);
}, uO = (e) => e && typeof e.match == "function";
function wt(e, t) {
  function r(...n) {
    if (t) {
      let i = t(...n);
      if (!i)
        throw new Error(process.env.NODE_ENV === "production" ? ee(0) : "prepareAction did not return an object");
      return {
        type: e,
        payload: i.payload,
        ..."meta" in i && {
          meta: i.meta
        },
        ..."error" in i && {
          error: i.error
        }
      };
    }
    return {
      type: e,
      payload: n[0]
    };
  }
  return r.toString = () => `${e}`, r.type = e, r.match = (n) => Ws(n) && n.type === e, r;
}
function sO(e) {
  return typeof e == "function" && "type" in e && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  uO(e);
}
function lO(e) {
  const t = e ? `${e}`.split("/") : [], r = t[t.length - 1] || "actionCreator";
  return `Detected an action creator with type "${e || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${r}())\` instead of \`dispatch(${r})\`. This is necessary even if the action has no payload.`;
}
function cO(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (r) => (n) => r(n);
  const {
    isActionCreator: t = sO
  } = e;
  return () => (r) => (n) => (t(n) && console.warn(lO(n.type)), r(n));
}
function Xh(e, t) {
  let r = 0;
  return {
    measureTime(n) {
      const i = Date.now();
      try {
        return n();
      } finally {
        const a = Date.now();
        r += a - i;
      }
    },
    warnIfExceeded() {
      r > e && console.warn(`${t} took ${r}ms, which is more than the warning threshold of ${e}ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`);
    }
  };
}
var Zh = class Tn extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Tn.prototype);
  }
  static get [Symbol.species]() {
    return Tn;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new Tn(...t[0].concat(this)) : new Tn(...t.concat(this));
  }
};
function ld(e) {
  return Kt(e) ? Hh(e, () => {
  }) : e;
}
function Oi(e, t, r) {
  return e.has(t) ? e.get(t) : e.set(t, r(t)).get(t);
}
function fO(e) {
  return typeof e != "object" || e == null || Object.isFrozen(e);
}
function dO(e, t, r) {
  const n = Jh(e, t, r);
  return {
    detectMutations() {
      return Qh(e, t, n, r);
    }
  };
}
function Jh(e, t = [], r, n = "", i = /* @__PURE__ */ new Set()) {
  const a = {
    value: r
  };
  if (!e(r) && !i.has(r)) {
    i.add(r), a.children = {};
    for (const o in r) {
      const u = n ? n + "." + o : o;
      t.length && t.indexOf(u) !== -1 || (a.children[o] = Jh(e, t, r[o], u));
    }
  }
  return a;
}
function Qh(e, t = [], r, n, i = !1, a = "") {
  const o = r ? r.value : void 0, u = o === n;
  if (i && !u && !Number.isNaN(n))
    return {
      wasMutated: !0,
      path: a
    };
  if (e(o) || e(n))
    return {
      wasMutated: !1
    };
  const s = {};
  for (let l in r.children)
    s[l] = !0;
  for (let l in n)
    s[l] = !0;
  const c = t.length > 0;
  for (let l in s) {
    const f = a ? a + "." + l : l;
    if (c && t.some((h) => h instanceof RegExp ? h.test(f) : f === h))
      continue;
    const d = Qh(e, t, r.children[l], n[l], u, f);
    if (d.wasMutated)
      return d;
  }
  return {
    wasMutated: !1
  };
}
function vO(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (r) => t(r);
  {
    let t = function(u, s, c, l) {
      return JSON.stringify(u, r(s, l), c);
    }, r = function(u, s) {
      let c = [], l = [];
      return s || (s = function(f, d) {
        return c[0] === d ? "[Circular ~]" : "[Circular ~." + l.slice(0, c.indexOf(d)).join(".") + "]";
      }), function(f, d) {
        if (c.length > 0) {
          var v = c.indexOf(this);
          ~v ? c.splice(v + 1) : c.push(this), ~v ? l.splice(v, 1 / 0, f) : l.push(f), ~c.indexOf(d) && (d = s.call(this, f, d));
        } else c.push(d);
        return u == null ? d : u.call(this, f, d);
      };
    }, {
      isImmutable: n = fO,
      ignoredPaths: i,
      warnAfter: a = 32
    } = e;
    const o = dO.bind(null, n, i);
    return ({
      getState: u
    }) => {
      let s = u(), c = o(s), l;
      return (f) => (d) => {
        const v = Xh(a, "ImmutableStateInvariantMiddleware");
        v.measureTime(() => {
          if (s = u(), l = c.detectMutations(), c = o(s), l.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? ee(19) : `A state mutation was detected between dispatches, in the path '${l.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const h = f(d);
        return v.measureTime(() => {
          if (s = u(), l = c.detectMutations(), c = o(s), l.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? ee(20) : `A state mutation was detected inside a dispatch, in the path: ${l.path || ""}. Take a look at the reducer(s) handling the action ${t(d)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), v.warnIfExceeded(), h;
      };
    };
  }
}
function em(e) {
  const t = typeof e;
  return e == null || t === "string" || t === "boolean" || t === "number" || Array.isArray(e) || Vn(e);
}
function Qu(e, t = "", r = em, n, i = [], a) {
  let o;
  if (!r(e))
    return {
      keyPath: t || "<root>",
      value: e
    };
  if (typeof e != "object" || e === null || a?.has(e)) return !1;
  const u = n != null ? n(e) : Object.entries(e), s = i.length > 0;
  for (const [c, l] of u) {
    const f = t ? t + "." + c : c;
    if (!(s && i.some((v) => v instanceof RegExp ? v.test(f) : f === v))) {
      if (!r(l))
        return {
          keyPath: f,
          value: l
        };
      if (typeof l == "object" && (o = Qu(l, f, r, n, i, a), o))
        return o;
    }
  }
  return a && tm(e) && a.add(e), !1;
}
function tm(e) {
  if (!Object.isFrozen(e)) return !1;
  for (const t of Object.values(e))
    if (!(typeof t != "object" || t === null) && !tm(t))
      return !1;
  return !0;
}
function pO(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (r) => t(r);
  {
    const {
      isSerializable: t = em,
      getEntries: r,
      ignoredActions: n = [],
      ignoredActionPaths: i = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths: a = [],
      warnAfter: o = 32,
      ignoreState: u = !1,
      ignoreActions: s = !1,
      disableCache: c = !1
    } = e, l = !c && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (f) => (d) => (v) => {
      if (!Ws(v))
        return d(v);
      const h = d(v), p = Xh(o, "SerializableStateInvariantMiddleware");
      return !s && !(n.length && n.indexOf(v.type) !== -1) && p.measureTime(() => {
        const m = Qu(v, "", t, r, i, l);
        if (m) {
          const {
            keyPath: y,
            value: g
          } = m;
          console.error(`A non-serializable value was detected in an action, in the path: \`${y}\`. Value:`, g, `
Take a look at the logic that dispatched this action: `, v, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), u || (p.measureTime(() => {
        const m = f.getState(), y = Qu(m, "", t, r, a, l);
        if (y) {
          const {
            keyPath: g,
            value: b
          } = y;
          console.error(`A non-serializable value was detected in the state, in the path: \`${g}\`. Value:`, b, `
Take a look at the reducer(s) handling this action type: ${v.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), p.warnIfExceeded()), h;
    };
  }
}
function Pi(e) {
  return typeof e == "boolean";
}
var hO = () => function(t) {
  const {
    thunk: r = !0,
    immutableCheck: n = !0,
    serializableCheck: i = !0,
    actionCreatorCheck: a = !0
  } = t ?? {};
  let o = new Zh();
  if (r && (Pi(r) ? o.push(iO) : o.push(aO(r.extraArgument))), process.env.NODE_ENV !== "production") {
    if (n) {
      let u = {};
      Pi(n) || (u = n), o.unshift(vO(u));
    }
    if (i) {
      let u = {};
      Pi(i) || (u = i), o.push(pO(u));
    }
    if (a) {
      let u = {};
      Pi(a) || (u = a), o.unshift(cO(u));
    }
  }
  return o;
}, mO = "RTK_autoBatch", cd = (e) => (t) => {
  setTimeout(t, e);
}, yO = (e = {
  type: "raf"
}) => (t) => (...r) => {
  const n = t(...r);
  let i = !0, a = !1, o = !1;
  const u = /* @__PURE__ */ new Set(), s = e.type === "tick" ? queueMicrotask : e.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : cd(10)
  ) : e.type === "callback" ? e.queueNotification : cd(e.timeout), c = () => {
    o = !1, a && (a = !1, u.forEach((l) => l()));
  };
  return Object.assign({}, n, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(l) {
      const f = () => i && l(), d = n.subscribe(f);
      return u.add(l), () => {
        d(), u.delete(l);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(l) {
      try {
        return i = !l?.meta?.[mO], a = !i, a && (o || (o = !0, s(c))), n.dispatch(l);
      } finally {
        i = !0;
      }
    }
  });
}, gO = (e) => function(r) {
  const {
    autoBatch: n = !0
  } = r ?? {};
  let i = new Zh(e);
  return n && i.push(yO(typeof n == "object" ? n : void 0)), i;
};
function bO(e) {
  const t = hO(), {
    reducer: r = void 0,
    middleware: n,
    devTools: i = !0,
    duplicateMiddlewareCheck: a = !0,
    preloadedState: o = void 0,
    enhancers: u = void 0
  } = e || {};
  let s;
  if (typeof r == "function")
    s = r;
  else if (Vn(r))
    s = Kh(r);
  else
    throw new Error(process.env.NODE_ENV === "production" ? ee(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (process.env.NODE_ENV !== "production" && n && typeof n != "function")
    throw new Error(process.env.NODE_ENV === "production" ? ee(2) : "`middleware` field must be a callback");
  let c;
  if (typeof n == "function") {
    if (c = n(t), process.env.NODE_ENV !== "production" && !Array.isArray(c))
      throw new Error(process.env.NODE_ENV === "production" ? ee(3) : "when using a middleware builder function, an array of middleware must be returned");
  } else
    c = t();
  if (process.env.NODE_ENV !== "production" && c.some((p) => typeof p != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? ee(4) : "each middleware provided to configureStore must be a function");
  if (process.env.NODE_ENV !== "production" && a) {
    let p = /* @__PURE__ */ new Set();
    c.forEach((m) => {
      if (p.has(m))
        throw new Error(process.env.NODE_ENV === "production" ? ee(42) : "Duplicate middleware references found when creating the store. Ensure that each middleware is only included once.");
      p.add(m);
    });
  }
  let l = Ui;
  i && (l = oO({
    // Enable capture of stack traces for dispatched Redux actions
    trace: process.env.NODE_ENV !== "production",
    ...typeof i == "object" && i
  }));
  const f = Yw(...c), d = gO(f);
  if (process.env.NODE_ENV !== "production" && u && typeof u != "function")
    throw new Error(process.env.NODE_ENV === "production" ? ee(5) : "`enhancers` field must be a callback");
  let v = typeof u == "function" ? u(d) : d();
  if (process.env.NODE_ENV !== "production" && !Array.isArray(v))
    throw new Error(process.env.NODE_ENV === "production" ? ee(6) : "`enhancers` callback must return an array");
  if (process.env.NODE_ENV !== "production" && v.some((p) => typeof p != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? ee(7) : "each enhancer provided to configureStore must be a function");
  process.env.NODE_ENV !== "production" && c.length && !v.includes(f) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const h = l(...v);
  return Fh(s, o, h);
}
function rm(e) {
  const t = {}, r = [];
  let n;
  const i = {
    addCase(a, o) {
      if (process.env.NODE_ENV !== "production") {
        if (r.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? ee(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (n)
          throw new Error(process.env.NODE_ENV === "production" ? ee(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const u = typeof a == "string" ? a : a.type;
      if (!u)
        throw new Error(process.env.NODE_ENV === "production" ? ee(28) : "`builder.addCase` cannot be called with an empty action type");
      if (u in t)
        throw new Error(process.env.NODE_ENV === "production" ? ee(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${u}'`);
      return t[u] = o, i;
    },
    addAsyncThunk(a, o) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? ee(43) : "`builder.addAsyncThunk` should only be called before calling `builder.addDefaultCase`");
      return o.pending && (t[a.pending.type] = o.pending), o.rejected && (t[a.rejected.type] = o.rejected), o.fulfilled && (t[a.fulfilled.type] = o.fulfilled), o.settled && r.push({
        matcher: a.settled,
        reducer: o.settled
      }), i;
    },
    addMatcher(a, o) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? ee(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return r.push({
        matcher: a,
        reducer: o
      }), i;
    },
    addDefaultCase(a) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? ee(31) : "`builder.addDefaultCase` can only be called once");
      return n = a, i;
    }
  };
  return e(i), [t, r, n];
}
function xO(e) {
  return typeof e == "function";
}
function wO(e, t) {
  if (process.env.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(process.env.NODE_ENV === "production" ? ee(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [r, n, i] = rm(t), a;
  if (xO(e))
    a = () => ld(e());
  else {
    const u = ld(e);
    a = () => u;
  }
  function o(u = a(), s) {
    let c = [r[s.type], ...n.filter(({
      matcher: l
    }) => l(s)).map(({
      reducer: l
    }) => l)];
    return c.filter((l) => !!l).length === 0 && (c = [i]), c.reduce((l, f) => {
      if (f)
        if (kr(l)) {
          const v = f(l, s);
          return v === void 0 ? l : v;
        } else {
          if (Kt(l))
            return Hh(l, (d) => f(d, s));
          {
            const d = f(l, s);
            if (d === void 0) {
              if (l === null)
                return l;
              throw Error("A case reducer on a non-draftable value must not return undefined");
            }
            return d;
          }
        }
      return l;
    }, u);
  }
  return o.getInitialState = a, o;
}
var OO = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", PO = (e = 21) => {
  let t = "", r = e;
  for (; r--; )
    t += OO[Math.random() * 64 | 0];
  return t;
}, EO = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function AO(e, t) {
  return `${e}/${t}`;
}
function SO({
  creators: e
} = {}) {
  const t = e?.asyncThunk?.[EO];
  return function(n) {
    const {
      name: i,
      reducerPath: a = i
    } = n;
    if (!i)
      throw new Error(process.env.NODE_ENV === "production" ? ee(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && n.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const o = (typeof n.reducers == "function" ? n.reducers(jO()) : n.reducers) || {}, u = Object.keys(o), s = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, c = {
      addCase(b, E) {
        const P = typeof b == "string" ? b : b.type;
        if (!P)
          throw new Error(process.env.NODE_ENV === "production" ? ee(12) : "`context.addCase` cannot be called with an empty action type");
        if (P in s.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? ee(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + P);
        return s.sliceCaseReducersByType[P] = E, c;
      },
      addMatcher(b, E) {
        return s.sliceMatchers.push({
          matcher: b,
          reducer: E
        }), c;
      },
      exposeAction(b, E) {
        return s.actionCreators[b] = E, c;
      },
      exposeCaseReducer(b, E) {
        return s.sliceCaseReducersByName[b] = E, c;
      }
    };
    u.forEach((b) => {
      const E = o[b], P = {
        reducerName: b,
        type: AO(i, b),
        createNotation: typeof n.reducers == "function"
      };
      CO(E) ? DO(P, E, c, t) : TO(P, E, c);
    });
    function l() {
      if (process.env.NODE_ENV !== "production" && typeof n.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? ee(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [b = {}, E = [], P = void 0] = typeof n.extraReducers == "function" ? rm(n.extraReducers) : [n.extraReducers], O = {
        ...b,
        ...s.sliceCaseReducersByType
      };
      return wO(n.initialState, (A) => {
        for (let j in O)
          A.addCase(j, O[j]);
        for (let j of s.sliceMatchers)
          A.addMatcher(j.matcher, j.reducer);
        for (let j of E)
          A.addMatcher(j.matcher, j.reducer);
        P && A.addDefaultCase(P);
      });
    }
    const f = (b) => b, d = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new WeakMap();
    let h;
    function p(b, E) {
      return h || (h = l()), h(b, E);
    }
    function m() {
      return h || (h = l()), h.getInitialState();
    }
    function y(b, E = !1) {
      function P(A) {
        let j = A[b];
        if (typeof j > "u") {
          if (E)
            j = Oi(v, P, m);
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? ee(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return j;
      }
      function O(A = f) {
        const j = Oi(d, E, () => /* @__PURE__ */ new WeakMap());
        return Oi(j, A, () => {
          const N = {};
          for (const [M, k] of Object.entries(n.selectors ?? {}))
            N[M] = _O(k, A, () => Oi(v, A, m), E);
          return N;
        });
      }
      return {
        reducerPath: b,
        getSelectors: O,
        get selectors() {
          return O(P);
        },
        selectSlice: P
      };
    }
    const g = {
      name: i,
      reducer: p,
      actions: s.actionCreators,
      caseReducers: s.sliceCaseReducersByName,
      getInitialState: m,
      ...y(a),
      injectInto(b, {
        reducerPath: E,
        ...P
      } = {}) {
        const O = E ?? a;
        return b.inject({
          reducerPath: O,
          reducer: p
        }, P), {
          ...g,
          ...y(O, !0)
        };
      }
    };
    return g;
  };
}
function _O(e, t, r, n) {
  function i(a, ...o) {
    let u = t(a);
    if (typeof u > "u") {
      if (n)
        u = r();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? ee(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return e(u, ...o);
  }
  return i.unwrapped = e, i;
}
var pt = /* @__PURE__ */ SO();
function jO() {
  function e(t, r) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: t,
      ...r
    };
  }
  return e.withTypes = () => e, {
    reducer(t) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [t.name](...r) {
          return t(...r);
        }
      }[t.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(t, r) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: t,
        reducer: r
      };
    },
    asyncThunk: e
  };
}
function TO({
  type: e,
  reducerName: t,
  createNotation: r
}, n, i) {
  let a, o;
  if ("reducer" in n) {
    if (r && !kO(n))
      throw new Error(process.env.NODE_ENV === "production" ? ee(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    a = n.reducer, o = n.prepare;
  } else
    a = n;
  i.addCase(e, a).exposeCaseReducer(t, a).exposeAction(t, o ? wt(e, o) : wt(e));
}
function CO(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function kO(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function DO({
  type: e,
  reducerName: t
}, r, n, i) {
  if (!i)
    throw new Error(process.env.NODE_ENV === "production" ? ee(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: a,
    fulfilled: o,
    pending: u,
    rejected: s,
    settled: c,
    options: l
  } = r, f = i(e, a, l);
  n.exposeAction(t, f), o && n.addCase(f.fulfilled, o), u && n.addCase(f.pending, u), s && n.addCase(f.rejected, s), c && n.addMatcher(f.settled, c), n.exposeCaseReducer(t, {
    fulfilled: o || Ei,
    pending: u || Ei,
    rejected: s || Ei,
    settled: c || Ei
  });
}
function Ei() {
}
var NO = "task", nm = "listener", im = "completed", Vs = "cancelled", MO = `task-${Vs}`, IO = `task-${im}`, es = `${nm}-${Vs}`, RO = `${nm}-${im}`, ka = class {
  constructor(e) {
    this.code = e, this.message = `${NO} ${Vs} (reason: ${e})`;
  }
  name = "TaskAbortError";
  message;
}, Ys = (e, t) => {
  if (typeof e != "function")
    throw new TypeError(process.env.NODE_ENV === "production" ? ee(32) : `${t} is not a function`);
}, Gi = () => {
}, am = (e, t = Gi) => (e.catch(t), e), om = (e, t) => (e.addEventListener("abort", t, {
  once: !0
}), () => e.removeEventListener("abort", t)), Sr = (e, t) => {
  const r = e.signal;
  r.aborted || ("reason" in r || Object.defineProperty(r, "reason", {
    enumerable: !0,
    value: t,
    configurable: !0,
    writable: !0
  }), e.abort(t));
}, _r = (e) => {
  if (e.aborted) {
    const {
      reason: t
    } = e;
    throw new ka(t);
  }
};
function um(e, t) {
  let r = Gi;
  return new Promise((n, i) => {
    const a = () => i(new ka(e.reason));
    if (e.aborted) {
      a();
      return;
    }
    r = om(e, a), t.finally(() => r()).then(n, i);
  }).finally(() => {
    r = Gi;
  });
}
var $O = async (e, t) => {
  try {
    return await Promise.resolve(), {
      status: "ok",
      value: await e()
    };
  } catch (r) {
    return {
      status: r instanceof ka ? "cancelled" : "rejected",
      error: r
    };
  } finally {
    t?.();
  }
}, Xi = (e) => (t) => am(um(e, t).then((r) => (_r(e), r))), sm = (e) => {
  const t = Xi(e);
  return (r) => t(new Promise((n) => setTimeout(n, r)));
}, {
  assign: Ur
} = Object, fd = {}, Hn = "listenerMiddleware", LO = (e, t) => {
  const r = (n) => om(e, () => Sr(n, e.reason));
  return (n, i) => {
    Ys(n, "taskExecutor");
    const a = new AbortController();
    r(a);
    const o = $O(async () => {
      _r(e), _r(a.signal);
      const u = await n({
        pause: Xi(a.signal),
        delay: sm(a.signal),
        signal: a.signal
      });
      return _r(a.signal), u;
    }, () => Sr(a, IO));
    return i?.autoJoin && t.push(o.catch(Gi)), {
      result: Xi(e)(o),
      cancel() {
        Sr(a, MO);
      }
    };
  };
}, BO = (e, t) => {
  const r = async (n, i) => {
    _r(t);
    let a = () => {
    };
    const u = [new Promise((s, c) => {
      let l = e({
        predicate: n,
        effect: (f, d) => {
          d.unsubscribe(), s([f, d.getState(), d.getOriginalState()]);
        }
      });
      a = () => {
        l(), c();
      };
    })];
    i != null && u.push(new Promise((s) => setTimeout(s, i, null)));
    try {
      const s = await um(t, Promise.race(u));
      return _r(t), s;
    } finally {
      a();
    }
  };
  return (n, i) => am(r(n, i));
}, lm = (e) => {
  let {
    type: t,
    actionCreator: r,
    matcher: n,
    predicate: i,
    effect: a
  } = e;
  if (t)
    i = wt(t).match;
  else if (r)
    t = r.type, i = r.match;
  else if (n)
    i = n;
  else if (!i) throw new Error(process.env.NODE_ENV === "production" ? ee(21) : "Creating or removing a listener requires one of the known fields for matching an action");
  return Ys(a, "options.listener"), {
    predicate: i,
    type: t,
    effect: a
  };
}, cm = /* @__PURE__ */ Ur((e) => {
  const {
    type: t,
    predicate: r,
    effect: n
  } = lm(e);
  return {
    id: PO(),
    effect: n,
    type: t,
    predicate: r,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(process.env.NODE_ENV === "production" ? ee(22) : "Unsubscribe not initialized");
    }
  };
}, {
  withTypes: () => cm
}), dd = (e, t) => {
  const {
    type: r,
    effect: n,
    predicate: i
  } = lm(t);
  return Array.from(e.values()).find((a) => (typeof r == "string" ? a.type === r : a.predicate === i) && a.effect === n);
}, ts = (e) => {
  e.pending.forEach((t) => {
    Sr(t, es);
  });
}, FO = (e) => () => {
  e.forEach(ts), e.clear();
}, vd = (e, t, r) => {
  try {
    e(t, r);
  } catch (n) {
    setTimeout(() => {
      throw n;
    }, 0);
  }
}, fm = /* @__PURE__ */ Ur(/* @__PURE__ */ wt(`${Hn}/add`), {
  withTypes: () => fm
}), KO = /* @__PURE__ */ wt(`${Hn}/removeAll`), dm = /* @__PURE__ */ Ur(/* @__PURE__ */ wt(`${Hn}/remove`), {
  withTypes: () => dm
}), zO = (...e) => {
  console.error(`${Hn}/error`, ...e);
}, Gn = (e = {}) => {
  const t = /* @__PURE__ */ new Map(), {
    extra: r,
    onError: n = zO
  } = e;
  Ys(n, "onError");
  const i = (l) => (l.unsubscribe = () => t.delete(l.id), t.set(l.id, l), (f) => {
    l.unsubscribe(), f?.cancelActive && ts(l);
  }), a = (l) => {
    const f = dd(t, l) ?? cm(l);
    return i(f);
  };
  Ur(a, {
    withTypes: () => a
  });
  const o = (l) => {
    const f = dd(t, l);
    return f && (f.unsubscribe(), l.cancelActive && ts(f)), !!f;
  };
  Ur(o, {
    withTypes: () => o
  });
  const u = async (l, f, d, v) => {
    const h = new AbortController(), p = BO(a, h.signal), m = [];
    try {
      l.pending.add(h), await Promise.resolve(l.effect(
        f,
        // Use assign() rather than ... to avoid extra helper functions added to bundle
        Ur({}, d, {
          getOriginalState: v,
          condition: (y, g) => p(y, g).then(Boolean),
          take: p,
          delay: sm(h.signal),
          pause: Xi(h.signal),
          extra: r,
          signal: h.signal,
          fork: LO(h.signal, m),
          unsubscribe: l.unsubscribe,
          subscribe: () => {
            t.set(l.id, l);
          },
          cancelActiveListeners: () => {
            l.pending.forEach((y, g, b) => {
              y !== h && (Sr(y, es), b.delete(y));
            });
          },
          cancel: () => {
            Sr(h, es), l.pending.delete(h);
          },
          throwIfCancelled: () => {
            _r(h.signal);
          }
        })
      ));
    } catch (y) {
      y instanceof ka || vd(n, y, {
        raisedBy: "effect"
      });
    } finally {
      await Promise.all(m), Sr(h, RO), l.pending.delete(h);
    }
  }, s = FO(t);
  return {
    middleware: (l) => (f) => (d) => {
      if (!Ws(d))
        return f(d);
      if (fm.match(d))
        return a(d.payload);
      if (KO.match(d)) {
        s();
        return;
      }
      if (dm.match(d))
        return o(d.payload);
      let v = l.getState();
      const h = () => {
        if (v === fd)
          throw new Error(process.env.NODE_ENV === "production" ? ee(23) : `${Hn}: getOriginalState can only be called synchronously`);
        return v;
      };
      let p;
      try {
        if (p = f(d), t.size > 0) {
          const m = l.getState(), y = Array.from(t.values());
          for (const g of y) {
            let b = !1;
            try {
              b = g.predicate(d, m, v);
            } catch (E) {
              b = !1, vd(n, E, {
                raisedBy: "predicate"
              });
            }
            b && u(g, d, l, h);
          }
        }
      } finally {
        v = fd;
      }
      return p;
    },
    startListening: a,
    stopListening: o,
    clearListeners: s
  };
};
function ee(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var WO = {
  layoutType: "horizontal",
  width: 0,
  height: 0,
  margin: {
    top: 5,
    right: 5,
    bottom: 5,
    left: 5
  },
  scale: 1
}, vm = pt({
  name: "chartLayout",
  initialState: WO,
  reducers: {
    setLayout(e, t) {
      e.layoutType = t.payload;
    },
    setChartSize(e, t) {
      e.width = t.payload.width, e.height = t.payload.height;
    },
    setMargin(e, t) {
      var r, n, i, a;
      e.margin.top = (r = t.payload.top) !== null && r !== void 0 ? r : 0, e.margin.right = (n = t.payload.right) !== null && n !== void 0 ? n : 0, e.margin.bottom = (i = t.payload.bottom) !== null && i !== void 0 ? i : 0, e.margin.left = (a = t.payload.left) !== null && a !== void 0 ? a : 0;
    },
    setScale(e, t) {
      e.scale = t.payload;
    }
  }
}), {
  setMargin: qO,
  setLayout: UO,
  setChartSize: VO,
  setScale: YO
} = vm.actions, HO = vm.reducer;
function pd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function hd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pd(Object(r), !0).forEach(function(n) {
      GO(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function GO(e, t, r) {
  return (t = XO(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function XO(e) {
  var t = ZO(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ZO(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Zi = Math.PI / 180, JO = (e) => e * 180 / Math.PI, _e = (e, t, r, n) => ({
  x: e + Math.cos(-Zi * n) * r,
  y: t + Math.sin(-Zi * n) * r
}), pm = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, QO = (e, t) => {
  var {
    x: r,
    y: n
  } = e, {
    x: i,
    y: a
  } = t;
  return Math.sqrt((r - i) ** 2 + (n - a) ** 2);
}, e1 = (e, t) => {
  var {
    x: r,
    y: n
  } = e, {
    cx: i,
    cy: a
  } = t, o = QO({
    x: r,
    y: n
  }, {
    x: i,
    y: a
  });
  if (o <= 0)
    return {
      radius: o,
      angle: 0
    };
  var u = (r - i) / o, s = Math.acos(u);
  return n > a && (s = 2 * Math.PI - s), {
    radius: o,
    angle: JO(s),
    angleInRadian: s
  };
}, t1 = (e) => {
  var {
    startAngle: t,
    endAngle: r
  } = e, n = Math.floor(t / 360), i = Math.floor(r / 360), a = Math.min(n, i);
  return {
    startAngle: t - a * 360,
    endAngle: r - a * 360
  };
}, r1 = (e, t) => {
  var {
    startAngle: r,
    endAngle: n
  } = t, i = Math.floor(r / 360), a = Math.floor(n / 360), o = Math.min(i, a);
  return e + o * 360;
}, n1 = (e, t) => {
  var {
    x: r,
    y: n
  } = e, {
    radius: i,
    angle: a
  } = e1({
    x: r,
    y: n
  }, t), {
    innerRadius: o,
    outerRadius: u
  } = t;
  if (i < o || i > u || i === 0)
    return null;
  var {
    startAngle: s,
    endAngle: c
  } = t1(t), l = a, f;
  if (s <= c) {
    for (; l > c; )
      l -= 360;
    for (; l < s; )
      l += 360;
    f = l >= s && l <= c;
  } else {
    for (; l > s; )
      l -= 360;
    for (; l < c; )
      l += 360;
    f = l >= c && l <= s;
  }
  return f ? hd(hd({}, t), {}, {
    radius: i,
    angle: r1(l, t)
  }) : null;
};
function hm(e, t, r) {
  return Array.isArray(e) && e && t + r !== 0 ? e.slice(t, r + 1) : e;
}
function md(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function bt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? md(Object(r), !0).forEach(function(n) {
      i1(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : md(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function i1(e, t, r) {
  return (t = a1(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function a1(e) {
  var t = o1(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function o1(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function fe(e, t, r) {
  return me(e) || me(t) ? r : kt(t) ? Cr(e, t, r) : typeof t == "function" ? t(e) : r;
}
var u1 = (e, t, r, n, i) => {
  var a, o = -1, u = (a = t?.length) !== null && a !== void 0 ? a : 0;
  if (u <= 1 || e == null)
    return 0;
  if (n === "angleAxis" && i != null && Math.abs(Math.abs(i[1] - i[0]) - 360) <= 1e-6)
    for (var s = 0; s < u; s++) {
      var c = s > 0 ? r[s - 1].coordinate : r[u - 1].coordinate, l = r[s].coordinate, f = s >= u - 1 ? r[0].coordinate : r[s + 1].coordinate, d = void 0;
      if (Re(l - c) !== Re(f - l)) {
        var v = [];
        if (Re(f - l) === Re(i[1] - i[0])) {
          d = f;
          var h = l + i[1] - i[0];
          v[0] = Math.min(h, (h + c) / 2), v[1] = Math.max(h, (h + c) / 2);
        } else {
          d = c;
          var p = f + i[1] - i[0];
          v[0] = Math.min(l, (p + l) / 2), v[1] = Math.max(l, (p + l) / 2);
        }
        var m = [Math.min(l, (d + l) / 2), Math.max(l, (d + l) / 2)];
        if (e > m[0] && e <= m[1] || e >= v[0] && e <= v[1]) {
          ({
            index: o
          } = r[s]);
          break;
        }
      } else {
        var y = Math.min(c, f), g = Math.max(c, f);
        if (e > (y + l) / 2 && e <= (g + l) / 2) {
          ({
            index: o
          } = r[s]);
          break;
        }
      }
    }
  else if (t) {
    for (var b = 0; b < u; b++)
      if (b === 0 && e <= (t[b].coordinate + t[b + 1].coordinate) / 2 || b > 0 && b < u - 1 && e > (t[b].coordinate + t[b - 1].coordinate) / 2 && e <= (t[b].coordinate + t[b + 1].coordinate) / 2 || b === u - 1 && e > (t[b].coordinate + t[b - 1].coordinate) / 2) {
        ({
          index: o
        } = t[b]);
        break;
      }
  }
  return o;
}, s1 = (e, t, r) => {
  if (t && r) {
    var {
      width: n,
      height: i
    } = r, {
      align: a,
      verticalAlign: o,
      layout: u
    } = t;
    if ((u === "vertical" || u === "horizontal" && o === "middle") && a !== "center" && K(e[a]))
      return bt(bt({}, e), {}, {
        [a]: e[a] + (n || 0)
      });
    if ((u === "horizontal" || u === "vertical" && a === "center") && o !== "middle" && K(e[o]))
      return bt(bt({}, e), {}, {
        [o]: e[o] + (i || 0)
      });
  }
  return e;
}, fr = (e, t) => e === "horizontal" && t === "xAxis" || e === "vertical" && t === "yAxis" || e === "centric" && t === "angleAxis" || e === "radial" && t === "radiusAxis", mm = (e, t, r, n) => {
  if (n)
    return e.map((u) => u.coordinate);
  var i, a, o = e.map((u) => (u.coordinate === t && (i = !0), u.coordinate === r && (a = !0), u.coordinate));
  return i || o.push(t), a || o.push(r), o;
}, ym = (e, t, r) => {
  if (!e)
    return null;
  var {
    duplicateDomain: n,
    type: i,
    range: a,
    scale: o,
    realScaleType: u,
    isCategorical: s,
    categoricalDomain: c,
    tickCount: l,
    ticks: f,
    niceTicks: d,
    axisType: v
  } = e;
  if (!o)
    return null;
  var h = u === "scaleBand" && o.bandwidth ? o.bandwidth() / 2 : 2, p = i === "category" && o.bandwidth ? o.bandwidth() / h : 0;
  if (p = v === "angleAxis" && a && a.length >= 2 ? Re(a[0] - a[1]) * 2 * p : p, f || d) {
    var m = (f || d || []).map((y, g) => {
      var b = n ? n.indexOf(y) : y;
      return {
        // If the scaleContent is not a number, the coordinate will be NaN.
        // That could be the case for example with a PointScale and a string as domain.
        coordinate: o(b) + p,
        value: y,
        offset: p,
        index: g
      };
    });
    return m.filter((y) => !ct(y.coordinate));
  }
  return s && c ? c.map((y, g) => ({
    coordinate: o(y) + p,
    value: y,
    index: g,
    offset: p
  })) : o.ticks && l != null ? o.ticks(l).map((y, g) => ({
    coordinate: o(y) + p,
    value: y,
    offset: p,
    index: g
  })) : o.domain().map((y, g) => ({
    coordinate: o(y) + p,
    value: n ? n[y] : y,
    index: g,
    offset: p
  }));
}, yd = 1e-4, l1 = (e) => {
  var t = e.domain();
  if (!(!t || t.length <= 2)) {
    var r = t.length, n = e.range(), i = Math.min(n[0], n[1]) - yd, a = Math.max(n[0], n[1]) + yd, o = e(t[0]), u = e(t[r - 1]);
    (o < i || o > a || u < i || u > a) && e.domain([t[0], t[r - 1]]);
  }
}, c1 = (e, t) => {
  if (!t || t.length !== 2 || !K(t[0]) || !K(t[1]))
    return e;
  var r = Math.min(t[0], t[1]), n = Math.max(t[0], t[1]), i = [e[0], e[1]];
  return (!K(e[0]) || e[0] < r) && (i[0] = r), (!K(e[1]) || e[1] > n) && (i[1] = n), i[0] > n && (i[0] = n), i[1] < r && (i[1] = r), i;
}, f1 = (e) => {
  var t = e.length;
  if (!(t <= 0))
    for (var r = 0, n = e[0].length; r < n; ++r)
      for (var i = 0, a = 0, o = 0; o < t; ++o) {
        var u = ct(e[o][r][1]) ? e[o][r][0] : e[o][r][1];
        u >= 0 ? (e[o][r][0] = i, e[o][r][1] = i + u, i = e[o][r][1]) : (e[o][r][0] = a, e[o][r][1] = a + u, a = e[o][r][1]);
      }
}, d1 = (e) => {
  var t = e.length;
  if (!(t <= 0))
    for (var r = 0, n = e[0].length; r < n; ++r)
      for (var i = 0, a = 0; a < t; ++a) {
        var o = ct(e[a][r][1]) ? e[a][r][0] : e[a][r][1];
        o >= 0 ? (e[a][r][0] = i, e[a][r][1] = i + o, i = e[a][r][1]) : (e[a][r][0] = 0, e[a][r][1] = 0);
      }
}, v1 = {
  sign: f1,
  // @ts-expect-error definitelytyped types are incorrect
  expand: jx,
  // @ts-expect-error definitelytyped types are incorrect
  none: Yr,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: Tx,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: Cx,
  positive: d1
}, p1 = (e, t, r) => {
  var n = v1[r], i = _x().keys(t).value((a, o) => +fe(a, o, 0)).order(Uu).offset(n);
  return i(e);
};
function h1(e) {
  return e == null ? void 0 : String(e);
}
function gd(e) {
  var {
    axis: t,
    ticks: r,
    bandSize: n,
    entry: i,
    index: a,
    dataKey: o
  } = e;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !me(i[t.dataKey])) {
      var u = ih(r, "value", i[t.dataKey]);
      if (u)
        return u.coordinate + n / 2;
    }
    return r[a] ? r[a].coordinate + n / 2 : null;
  }
  var s = fe(i, me(o) ? t.dataKey : o);
  return me(s) ? null : t.scale(s);
}
var bd = (e) => {
  var {
    axis: t,
    ticks: r,
    offset: n,
    bandSize: i,
    entry: a,
    index: o
  } = e;
  if (t.type === "category")
    return r[o] ? r[o].coordinate + n : null;
  var u = fe(a, t.dataKey, t.scale.domain()[o]);
  return me(u) ? null : t.scale(u) - i / 2 + n;
}, m1 = (e) => {
  var {
    numericAxis: t
  } = e, r = t.scale.domain();
  if (t.type === "number") {
    var n = Math.min(r[0], r[1]), i = Math.max(r[0], r[1]);
    return n <= 0 && i >= 0 ? 0 : i < 0 ? i : n;
  }
  return r[0];
}, y1 = (e) => {
  var t = e.flat(2).filter(K);
  return [Math.min(...t), Math.max(...t)];
}, g1 = (e) => [e[0] === 1 / 0 ? 0 : e[0], e[1] === -1 / 0 ? 0 : e[1]], b1 = (e, t, r) => {
  if (e != null)
    return g1(Object.keys(e).reduce((n, i) => {
      var a = e[i], {
        stackedData: o
      } = a, u = o.reduce((s, c) => {
        var l = hm(c, t, r), f = y1(l);
        return [Math.min(s[0], f[0]), Math.max(s[1], f[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(u[0], n[0]), Math.max(u[1], n[1])];
    }, [1 / 0, -1 / 0]));
}, xd = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, wd = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Rn = (e, t, r) => {
  if (e && e.scale && e.scale.bandwidth) {
    var n = e.scale.bandwidth();
    if (!r || n > 0)
      return n;
  }
  if (e && t && t.length >= 2) {
    for (var i = _a(t, (l) => l.coordinate), a = 1 / 0, o = 1, u = i.length; o < u; o++) {
      var s = i[o], c = i[o - 1];
      a = Math.min((s.coordinate || 0) - (c.coordinate || 0), a);
    }
    return a === 1 / 0 ? 0 : a;
  }
  return r ? void 0 : 0;
};
function Od(e) {
  var {
    tooltipEntrySettings: t,
    dataKey: r,
    payload: n,
    value: i,
    name: a
  } = e;
  return bt(bt({}, t), {}, {
    dataKey: r,
    payload: n,
    value: i,
    name: a
  });
}
function an(e, t) {
  if (e)
    return String(e);
  if (typeof t == "string")
    return t;
}
function x1(e, t, r, n, i) {
  if (r === "horizontal" || r === "vertical") {
    var a = e >= i.left && e <= i.left + i.width && t >= i.top && t <= i.top + i.height;
    return a ? {
      x: e,
      y: t
    } : null;
  }
  return n ? n1({
    x: e,
    y: t
  }, n) : null;
}
var w1 = (e, t, r, n) => {
  var i = t.find((c) => c && c.index === r);
  if (i) {
    if (e === "horizontal")
      return {
        x: i.coordinate,
        y: n.y
      };
    if (e === "vertical")
      return {
        x: n.x,
        y: i.coordinate
      };
    if (e === "centric") {
      var a = i.coordinate, {
        radius: o
      } = n;
      return bt(bt(bt({}, n), _e(n.cx, n.cy, o, a)), {}, {
        angle: a,
        radius: o
      });
    }
    var u = i.coordinate, {
      angle: s
    } = n;
    return bt(bt(bt({}, n), _e(n.cx, n.cy, u, s)), {}, {
      angle: s,
      radius: u
    });
  }
  return {
    x: 0,
    y: 0
  };
}, O1 = (e, t) => t === "horizontal" ? e.x : t === "vertical" ? e.y : t === "centric" ? e.angle : e.radius, Yt = (e) => e.layout.width, Ht = (e) => e.layout.height, P1 = (e) => e.layout.scale, gm = (e) => e.layout.margin, Da = S((e) => e.cartesianAxis.xAxis, (e) => Object.values(e)), Na = S((e) => e.cartesianAxis.yAxis, (e) => Object.values(e)), bm = "data-recharts-item-index", xm = "data-recharts-item-data-key", Xn = 60;
function Pd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ai(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pd(Object(r), !0).forEach(function(n) {
      E1(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function E1(e, t, r) {
  return (t = A1(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function A1(e) {
  var t = S1(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function S1(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var _1 = (e) => e.brush.height;
function j1(e) {
  var t = Na(e);
  return t.reduce((r, n) => {
    if (n.orientation === "left" && !n.mirror && !n.hide) {
      var i = typeof n.width == "number" ? n.width : Xn;
      return r + i;
    }
    return r;
  }, 0);
}
function T1(e) {
  var t = Na(e);
  return t.reduce((r, n) => {
    if (n.orientation === "right" && !n.mirror && !n.hide) {
      var i = typeof n.width == "number" ? n.width : Xn;
      return r + i;
    }
    return r;
  }, 0);
}
function C1(e) {
  var t = Da(e);
  return t.reduce((r, n) => n.orientation === "top" && !n.mirror && !n.hide ? r + n.height : r, 0);
}
function k1(e) {
  var t = Da(e);
  return t.reduce((r, n) => n.orientation === "bottom" && !n.mirror && !n.hide ? r + n.height : r, 0);
}
var ke = S([Yt, Ht, gm, _1, j1, T1, C1, k1, Bh, Rw], (e, t, r, n, i, a, o, u, s, c) => {
  var l = {
    left: (r.left || 0) + i,
    right: (r.right || 0) + a
  }, f = {
    top: (r.top || 0) + o,
    bottom: (r.bottom || 0) + u
  }, d = Ai(Ai({}, f), l), v = d.bottom;
  d.bottom += n, d = s1(d, s, c);
  var h = e - d.left - d.right, p = t - d.top - d.bottom;
  return Ai(Ai({
    brushBottom: v
  }, d), {}, {
    // never return negative values for height and width
    width: Math.max(h, 0),
    height: Math.max(p, 0)
  });
}), D1 = S(ke, (e) => ({
  x: e.left,
  y: e.top,
  width: e.width,
  height: e.height
})), Hs = S(Yt, Ht, (e, t) => ({
  x: 0,
  y: 0,
  width: e,
  height: t
})), N1 = /* @__PURE__ */ Pt(null), it = () => Ut(N1) != null, Ma = (e) => e.brush, Ia = S([Ma, ke, gm], (e, t, r) => ({
  height: e.height,
  x: K(e.x) ? e.x : t.left,
  y: K(e.y) ? e.y : t.top + t.height + t.brushBottom - (r?.bottom || 0),
  width: K(e.width) ? e.width : t.width
})), Gs = () => {
  var e, t = it(), r = F(D1), n = F(Ia), i = (e = F(Ma)) === null || e === void 0 ? void 0 : e.padding;
  return !t || !n || !i ? r : {
    width: n.width - i.left - i.right,
    height: n.height - i.top - i.bottom,
    x: i.left,
    y: i.top
  };
}, M1 = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: 0,
  height: 0,
  brushBottom: 0
}, wm = () => {
  var e;
  return (e = F(ke)) !== null && e !== void 0 ? e : M1;
}, Om = () => F(Yt), Pm = () => F(Ht), Z = (e) => e.layout.layoutType, Ra = () => F(Z), I1 = {
  settings: {
    layout: "horizontal",
    align: "center",
    verticalAlign: "middle",
    itemSorter: "value"
  },
  size: {
    width: 0,
    height: 0
  },
  payload: []
}, Em = pt({
  name: "legend",
  initialState: I1,
  reducers: {
    setLegendSize(e, t) {
      e.size.width = t.payload.width, e.size.height = t.payload.height;
    },
    setLegendSettings(e, t) {
      e.settings.align = t.payload.align, e.settings.layout = t.payload.layout, e.settings.verticalAlign = t.payload.verticalAlign, e.settings.itemSorter = t.payload.itemSorter;
    },
    addLegendPayload(e, t) {
      e.payload.push(t.payload);
    },
    removeLegendPayload(e, t) {
      var r = Bt(e).payload.indexOf(t.payload);
      r > -1 && e.payload.splice(r, 1);
    }
  }
}), {
  setLegendSize: y2,
  setLegendSettings: g2,
  addLegendPayload: Am,
  removeLegendPayload: Sm
} = Em.actions, R1 = Em.reducer;
function rs() {
  return rs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, rs.apply(null, arguments);
}
function Ed(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function lu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ed(Object(r), !0).forEach(function(n) {
      $1(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ed(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function $1(e, t, r) {
  return (t = L1(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function L1(e) {
  var t = B1(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function B1(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function F1(e) {
  return Array.isArray(e) && kt(e[0]) && kt(e[1]) ? e.join(" ~ ") : e;
}
var K1 = (e) => {
  var {
    separator: t = " : ",
    contentStyle: r = {},
    itemStyle: n = {},
    labelStyle: i = {},
    payload: a,
    formatter: o,
    itemSorter: u,
    wrapperClassName: s,
    labelClassName: c,
    label: l,
    labelFormatter: f,
    accessibilityLayer: d = !1
  } = e, v = () => {
    if (a && a.length) {
      var P = {
        padding: 0,
        margin: 0
      }, O = (u ? _a(a, u) : a).map((A, j) => {
        if (A.type === "none")
          return null;
        var N = A.formatter || o || F1, {
          value: M,
          name: k
        } = A, D = M, L = k;
        if (N) {
          var B = N(M, k, A, j, a);
          if (Array.isArray(B))
            [D, L] = B;
          else if (B != null)
            D = B;
          else
            return null;
        }
        var z = lu({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: A.color || "#000"
        }, n);
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ x.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(j),
            style: z
          }, kt(L) ? /* @__PURE__ */ x.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, L) : null, kt(L) ? /* @__PURE__ */ x.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, t) : null, /* @__PURE__ */ x.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, D), /* @__PURE__ */ x.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, A.unit || ""))
        );
      });
      return /* @__PURE__ */ x.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: P
      }, O);
    }
    return null;
  }, h = lu({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, r), p = lu({
    margin: 0
  }, i), m = !me(l), y = m ? l : "", g = te("recharts-default-tooltip", s), b = te("recharts-tooltip-label", c);
  m && f && a !== void 0 && a !== null && (y = f(l, a));
  var E = d ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ x.createElement("div", rs({
    className: g,
    style: h
  }, E), /* @__PURE__ */ x.createElement("p", {
    className: b,
    style: p
  }, /* @__PURE__ */ x.isValidElement(y) ? y : "".concat(y)), v());
}, wn = "recharts-tooltip-wrapper", z1 = {
  visibility: "hidden"
};
function W1(e) {
  var {
    coordinate: t,
    translateX: r,
    translateY: n
  } = e;
  return te(wn, {
    ["".concat(wn, "-right")]: K(r) && t && K(t.x) && r >= t.x,
    ["".concat(wn, "-left")]: K(r) && t && K(t.x) && r < t.x,
    ["".concat(wn, "-bottom")]: K(n) && t && K(t.y) && n >= t.y,
    ["".concat(wn, "-top")]: K(n) && t && K(t.y) && n < t.y
  });
}
function Ad(e) {
  var {
    allowEscapeViewBox: t,
    coordinate: r,
    key: n,
    offsetTopLeft: i,
    position: a,
    reverseDirection: o,
    tooltipDimension: u,
    viewBox: s,
    viewBoxDimension: c
  } = e;
  if (a && K(a[n]))
    return a[n];
  var l = r[n] - u - (i > 0 ? i : 0), f = r[n] + i;
  if (t[n])
    return o[n] ? l : f;
  var d = s[n];
  if (d == null)
    return 0;
  if (o[n]) {
    var v = l, h = d;
    return v < h ? Math.max(f, d) : Math.max(l, d);
  }
  if (c == null)
    return 0;
  var p = f + u, m = d + c;
  return p > m ? Math.max(l, d) : Math.max(f, d);
}
function q1(e) {
  var {
    translateX: t,
    translateY: r,
    useTranslate3d: n
  } = e;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function U1(e) {
  var {
    allowEscapeViewBox: t,
    coordinate: r,
    offsetTopLeft: n,
    position: i,
    reverseDirection: a,
    tooltipBox: o,
    useTranslate3d: u,
    viewBox: s
  } = e, c, l, f;
  return o.height > 0 && o.width > 0 && r ? (l = Ad({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: i,
    reverseDirection: a,
    tooltipDimension: o.width,
    viewBox: s,
    viewBoxDimension: s.width
  }), f = Ad({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: i,
    reverseDirection: a,
    tooltipDimension: o.height,
    viewBox: s,
    viewBoxDimension: s.height
  }), c = q1({
    translateX: l,
    translateY: f,
    useTranslate3d: u
  })) : c = z1, {
    cssProperties: c,
    cssClasses: W1({
      translateX: l,
      translateY: f,
      coordinate: r
    })
  };
}
function Sd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Si(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sd(Object(r), !0).forEach(function(n) {
      ns(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ns(e, t, r) {
  return (t = V1(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function V1(e) {
  var t = Y1(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Y1(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
class H1 extends Gp {
  constructor() {
    super(...arguments), ns(this, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      }
    }), ns(this, "handleKeyDown", (t) => {
      if (t.key === "Escape") {
        var r, n, i, a;
        this.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (r = (n = this.props.coordinate) === null || n === void 0 ? void 0 : n.x) !== null && r !== void 0 ? r : 0,
            y: (i = (a = this.props.coordinate) === null || a === void 0 ? void 0 : a.y) !== null && i !== void 0 ? i : 0
          }
        });
      }
    });
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }
  componentDidUpdate() {
    var t, r;
    this.state.dismissed && (((t = this.props.coordinate) === null || t === void 0 ? void 0 : t.x) !== this.state.dismissedAtCoordinate.x || ((r = this.props.coordinate) === null || r === void 0 ? void 0 : r.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = !1);
  }
  render() {
    var {
      active: t,
      allowEscapeViewBox: r,
      animationDuration: n,
      animationEasing: i,
      children: a,
      coordinate: o,
      hasPayload: u,
      isAnimationActive: s,
      offset: c,
      position: l,
      reverseDirection: f,
      useTranslate3d: d,
      viewBox: v,
      wrapperStyle: h,
      lastBoundingBox: p,
      innerRef: m,
      hasPortalFromProps: y
    } = this.props, {
      cssClasses: g,
      cssProperties: b
    } = U1({
      allowEscapeViewBox: r,
      coordinate: o,
      offsetTopLeft: c,
      position: l,
      reverseDirection: f,
      tooltipBox: {
        height: p.height,
        width: p.width
      },
      useTranslate3d: d,
      viewBox: v
    }), E = y ? {} : Si(Si({
      transition: s && t ? "transform ".concat(n, "ms ").concat(i) : void 0
    }, b), {}, {
      pointerEvents: "none",
      visibility: !this.state.dismissed && t && u ? "visible" : "hidden",
      position: "absolute",
      top: 0,
      left: 0
    }), P = Si(Si({}, E), {}, {
      visibility: !this.state.dismissed && t && u ? "visible" : "hidden"
    }, h);
    return (
      // This element allow listening to the `Escape` key. See https://github.com/recharts/recharts/pull/2925
      /* @__PURE__ */ x.createElement("div", {
        // @ts-expect-error typescript library does not recognize xmlns attribute, but it's required for an HTML chunk inside SVG.
        xmlns: "http://www.w3.org/1999/xhtml",
        tabIndex: -1,
        className: g,
        style: P,
        ref: m
      }, a)
    );
  }
}
var G1 = () => !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout), dr = {
  devToolsEnabled: !1,
  isSsr: G1()
}, _m = () => F((e) => e.rootProps.accessibilityLayer);
function dt(e) {
  return Number.isFinite(e);
}
function Gr(e) {
  return typeof e == "number" && e > 0 && Number.isFinite(e);
}
function is() {
  return is = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, is.apply(null, arguments);
}
function _d(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function jd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _d(Object(r), !0).forEach(function(n) {
      X1(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _d(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function X1(e, t, r) {
  return (t = Z1(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Z1(e) {
  var t = J1(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function J1(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Td = {
  curveBasisClosed: mx,
  curveBasisOpen: yx,
  curveBasis: hx,
  curveBumpX: tx,
  curveBumpY: rx,
  curveLinearClosed: gx,
  curveLinear: Aa,
  curveMonotoneX: bx,
  curveMonotoneY: xx,
  curveNatural: wx,
  curveStep: Ox,
  curveStepAfter: Ex,
  curveStepBefore: Px
}, _i = (e) => dt(e.x) && dt(e.y), On = (e) => e.x, Pn = (e) => e.y, Q1 = (e, t) => {
  if (typeof e == "function")
    return e;
  var r = "curve".concat(Un(e));
  return (r === "curveMonotone" || r === "curveBump") && t ? Td["".concat(r).concat(t === "vertical" ? "Y" : "X")] : Td[r] || Aa;
}, eP = (e) => {
  var {
    type: t = "linear",
    points: r = [],
    baseLine: n,
    layout: i,
    connectNulls: a = !1
  } = e, o = Q1(t, i), u = a ? r.filter(_i) : r, s;
  if (Array.isArray(n)) {
    var c = a ? n.filter((f) => _i(f)) : n, l = u.map((f, d) => jd(jd({}, f), {}, {
      base: c[d]
    }));
    return i === "vertical" ? s = mi().y(Pn).x1(On).x0((f) => f.base.x) : s = mi().x(On).y1(Pn).y0((f) => f.base.y), s.defined(_i).curve(o), s(l);
  }
  return i === "vertical" && K(n) ? s = mi().y(Pn).x1(On).x0(n) : K(n) ? s = mi().x(On).y1(Pn).y0(n) : s = ph().x(On).y(Pn), s.defined(_i).curve(o), s(u);
}, Xs = (e) => {
  var {
    className: t,
    points: r,
    path: n,
    pathRef: i
  } = e;
  if ((!r || !r.length) && !n)
    return null;
  var a = r && r.length ? eP(e) : n;
  return /* @__PURE__ */ x.createElement("path", is({}, Nt(e), Is(e), {
    className: te("recharts-curve", t),
    d: a === null ? void 0 : a,
    ref: i
  }));
}, tP = ["x", "y", "top", "left", "width", "height", "className"];
function as() {
  return as = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, as.apply(null, arguments);
}
function Cd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function rP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Cd(Object(r), !0).forEach(function(n) {
      nP(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function nP(e, t, r) {
  return (t = iP(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function iP(e) {
  var t = aP(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function aP(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function oP(e, t) {
  if (e == null) return {};
  var r, n, i = uP(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function uP(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var sP = (e, t, r, n, i, a) => "M".concat(e, ",").concat(i, "v").concat(n, "M").concat(a, ",").concat(t, "h").concat(r), lP = (e) => {
  var {
    x: t = 0,
    y: r = 0,
    top: n = 0,
    left: i = 0,
    width: a = 0,
    height: o = 0,
    className: u
  } = e, s = oP(e, tP), c = rP({
    x: t,
    y: r,
    top: n,
    left: i,
    width: a,
    height: o
  }, s);
  return !K(t) || !K(r) || !K(a) || !K(o) || !K(n) || !K(i) ? null : /* @__PURE__ */ x.createElement("path", as({}, xe(c, !0), {
    className: te("recharts-cross", u),
    d: sP(t, r, a, o, n, i)
  }));
};
function cP(e, t, r, n) {
  var i = n / 2;
  return {
    stroke: "none",
    fill: "#ccc",
    x: e === "horizontal" ? t.x - i : r.left + 0.5,
    y: e === "horizontal" ? r.top + 0.5 : t.y - i,
    width: e === "horizontal" ? n : r.width - 1,
    height: e === "horizontal" ? r.height - 1 : n
  };
}
function kd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function fP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? kd(Object(r), !0).forEach(function(n) {
      dP(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : kd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function dP(e, t, r) {
  return (t = vP(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function vP(e) {
  var t = pP(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function pP(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ze(e, t) {
  var r = fP({}, e), n = t, i = Object.keys(t), a = i.reduce((o, u) => (o[u] === void 0 && n[u] !== void 0 && (o[u] = n[u]), o), r);
  return a;
}
function hP() {
}
function Dd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Nd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Dd(Object(r), !0).forEach(function(n) {
      mP(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Dd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function mP(e, t, r) {
  return (t = yP(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function yP(e) {
  var t = gP(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function gP(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var bP = (e) => e.replace(/([A-Z])/g, (t) => "-".concat(t.toLowerCase())), jm = (e, t, r) => e.map((n) => "".concat(bP(n), " ").concat(t, "ms ").concat(r)).join(","), xP = (e, t) => [Object.keys(e), Object.keys(t)].reduce((r, n) => r.filter((i) => n.includes(i))), $n = (e, t) => Object.keys(t).reduce((r, n) => Nd(Nd({}, r), {}, {
  [n]: e(n, t[n])
}), {});
function Md(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Fe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Md(Object(r), !0).forEach(function(n) {
      wP(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Md(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function wP(e, t, r) {
  return (t = OP(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function OP(e) {
  var t = PP(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function PP(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ji = (e, t, r) => e + (t - e) * r, os = (e) => {
  var {
    from: t,
    to: r
  } = e;
  return t !== r;
}, Tm = (e, t, r) => {
  var n = $n((i, a) => {
    if (os(a)) {
      var [o, u] = e(a.from, a.to, a.velocity);
      return Fe(Fe({}, a), {}, {
        from: o,
        velocity: u
      });
    }
    return a;
  }, t);
  return r < 1 ? $n((i, a) => os(a) ? Fe(Fe({}, a), {}, {
    velocity: Ji(a.velocity, n[i].velocity, r),
    from: Ji(a.from, n[i].from, r)
  }) : a, t) : Tm(e, n, r - 1);
};
function EP(e, t, r, n, i, a) {
  var o, u = n.reduce((d, v) => Fe(Fe({}, d), {}, {
    [v]: {
      from: e[v],
      velocity: 0,
      to: t[v]
    }
  }), {}), s = () => $n((d, v) => v.from, u), c = () => !Object.values(u).filter(os).length, l = null, f = (d) => {
    o || (o = d);
    var v = d - o, h = v / r.dt;
    u = Tm(r, u, h), i(Fe(Fe(Fe({}, e), t), s())), o = d, c() || (l = a.setTimeout(f));
  };
  return () => (l = a.setTimeout(f), () => {
    l();
  });
}
function AP(e, t, r, n, i, a, o) {
  var u = null, s = i.reduce((f, d) => Fe(Fe({}, f), {}, {
    [d]: [e[d], t[d]]
  }), {}), c, l = (f) => {
    c || (c = f);
    var d = (f - c) / n, v = $n((p, m) => Ji(...m, r(d)), s);
    if (a(Fe(Fe(Fe({}, e), t), v)), d < 1)
      u = o.setTimeout(l);
    else {
      var h = $n((p, m) => Ji(...m, r(1)), s);
      a(Fe(Fe(Fe({}, e), t), h));
    }
  };
  return () => (u = o.setTimeout(l), () => {
    u();
  });
}
const SP = (e, t, r, n, i, a) => {
  var o = xP(e, t);
  return r.isStepper === !0 ? EP(e, t, r, o, i, a) : AP(e, t, r, n, o, i, a);
};
var Qi = 1e-4, Cm = (e, t) => [0, 3 * e, 3 * t - 6 * e, 3 * e - 3 * t + 1], km = (e, t) => e.map((r, n) => r * t ** n).reduce((r, n) => r + n), Id = (e, t) => (r) => {
  var n = Cm(e, t);
  return km(n, r);
}, _P = (e, t) => (r) => {
  var n = Cm(e, t), i = [...n.map((a, o) => a * o).slice(1), 0];
  return km(i, r);
}, Rd = function() {
  for (var t, r, n, i, a = arguments.length, o = new Array(a), u = 0; u < a; u++)
    o[u] = arguments[u];
  if (o.length === 1)
    switch (o[0]) {
      case "linear":
        [t, n, r, i] = [0, 0, 1, 1];
        break;
      case "ease":
        [t, n, r, i] = [0.25, 0.1, 0.25, 1];
        break;
      case "ease-in":
        [t, n, r, i] = [0.42, 0, 1, 1];
        break;
      case "ease-out":
        [t, n, r, i] = [0.42, 0, 0.58, 1];
        break;
      case "ease-in-out":
        [t, n, r, i] = [0, 0, 0.58, 1];
        break;
      default: {
        var s = o[0].split("(");
        s[0] === "cubic-bezier" && s[1].split(")")[0].split(",").length === 4 && ([t, n, r, i] = s[1].split(")")[0].split(",").map((h) => parseFloat(h)));
      }
    }
  else o.length === 4 && ([t, n, r, i] = o);
  var c = Id(t, r), l = Id(n, i), f = _P(t, r), d = (h) => h > 1 ? 1 : h < 0 ? 0 : h, v = (h) => {
    for (var p = h > 1 ? 1 : h, m = p, y = 0; y < 8; ++y) {
      var g = c(m) - p, b = f(m);
      if (Math.abs(g - p) < Qi || b < Qi)
        return l(m);
      m = d(m - g / b);
    }
    return l(m);
  };
  return v.isStepper = !1, v;
}, jP = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, {
    stiff: r = 100,
    damping: n = 8,
    dt: i = 17
  } = t, a = (o, u, s) => {
    var c = -(o - u) * r, l = s * n, f = s + (c - l) * i / 1e3, d = s * i / 1e3 + o;
    return Math.abs(d - u) < Qi && Math.abs(f) < Qi ? [u, 0] : [d, f];
  };
  return a.isStepper = !0, a.dt = i, a;
}, TP = (e) => {
  if (typeof e == "string")
    switch (e) {
      case "ease":
      case "ease-in-out":
      case "ease-out":
      case "ease-in":
      case "linear":
        return Rd(e);
      case "spring":
        return jP();
      default:
        if (e.split("(")[0] === "cubic-bezier")
          return Rd(e);
    }
  return typeof e == "function" ? e : null;
};
function CP(e) {
  var t, r = () => null, n = !1, i = null, a = (o) => {
    if (!n) {
      if (Array.isArray(o)) {
        if (!o.length)
          return;
        var u = o, [s, ...c] = u;
        if (typeof s == "number") {
          i = e.setTimeout(a.bind(null, c), s);
          return;
        }
        a(s), i = e.setTimeout(a.bind(null, c));
        return;
      }
      typeof o == "string" && (t = o, r(t)), typeof o == "object" && (t = o, r(t)), typeof o == "function" && o();
    }
  };
  return {
    stop: () => {
      n = !0;
    },
    start: (o) => {
      n = !1, i && (i(), i = null), a(o);
    },
    subscribe: (o) => (r = o, () => {
      r = () => null;
    }),
    getTimeoutController: () => e
  };
}
class kP {
  setTimeout(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = performance.now(), i = null, a = (o) => {
      o - n >= r ? t(o) : typeof requestAnimationFrame == "function" && (i = requestAnimationFrame(a));
    };
    return i = requestAnimationFrame(a), () => {
      cancelAnimationFrame(i);
    };
  }
}
function DP() {
  return CP(new kP());
}
var NP = /* @__PURE__ */ Pt(DP);
function MP(e, t) {
  var r = Ut(NP);
  return Vt(() => t ?? r(e), [e, t, r]);
}
var IP = {
  begin: 0,
  duration: 1e3,
  easing: "ease",
  isActive: !0,
  canBegin: !0,
  onAnimationEnd: () => {
  },
  onAnimationStart: () => {
  }
}, $d = {
  t: 0
}, cu = {
  t: 1
};
function Zn(e) {
  var t = ze(e, IP), {
    isActive: r,
    canBegin: n,
    duration: i,
    easing: a,
    begin: o,
    onAnimationEnd: u,
    onAnimationStart: s,
    children: c
  } = t, l = MP(t.animationId, t.animationManager), [f, d] = nt(r ? $d : cu), v = ce(null);
  return be(() => {
    r || d(cu);
  }, [r]), be(() => {
    if (!r || !n)
      return hP;
    var h = SP($d, cu, TP(a), i, d, l.getTimeoutController()), p = () => {
      v.current = h();
    };
    return l.start([s, o, p, i, u]), () => {
      l.stop(), v.current && v.current(), u();
    };
  }, [r, n, i, a, o, s, u, l]), c(f.t);
}
function Jn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "animation-", r = ce(Nn(t)), n = ce(e);
  return n.current !== e && (r.current = Nn(t), n.current = e), r.current;
}
function Ld(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Bd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ld(Object(r), !0).forEach(function(n) {
      RP(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ld(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function RP(e, t, r) {
  return (t = $P(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function $P(e) {
  var t = LP(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function LP(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ea() {
  return ea = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ea.apply(null, arguments);
}
var Fd = (e, t, r, n, i) => {
  var a = Math.min(Math.abs(r) / 2, Math.abs(n) / 2), o = n >= 0 ? 1 : -1, u = r >= 0 ? 1 : -1, s = n >= 0 && r >= 0 || n < 0 && r < 0 ? 1 : 0, c;
  if (a > 0 && i instanceof Array) {
    for (var l = [0, 0, 0, 0], f = 0, d = 4; f < d; f++)
      l[f] = i[f] > a ? a : i[f];
    c = "M".concat(e, ",").concat(t + o * l[0]), l[0] > 0 && (c += "A ".concat(l[0], ",").concat(l[0], ",0,0,").concat(s, ",").concat(e + u * l[0], ",").concat(t)), c += "L ".concat(e + r - u * l[1], ",").concat(t), l[1] > 0 && (c += "A ".concat(l[1], ",").concat(l[1], ",0,0,").concat(s, `,
        `).concat(e + r, ",").concat(t + o * l[1])), c += "L ".concat(e + r, ",").concat(t + n - o * l[2]), l[2] > 0 && (c += "A ".concat(l[2], ",").concat(l[2], ",0,0,").concat(s, `,
        `).concat(e + r - u * l[2], ",").concat(t + n)), c += "L ".concat(e + u * l[3], ",").concat(t + n), l[3] > 0 && (c += "A ".concat(l[3], ",").concat(l[3], ",0,0,").concat(s, `,
        `).concat(e, ",").concat(t + n - o * l[3])), c += "Z";
  } else if (a > 0 && i === +i && i > 0) {
    var v = Math.min(a, i);
    c = "M ".concat(e, ",").concat(t + o * v, `
            A `).concat(v, ",").concat(v, ",0,0,").concat(s, ",").concat(e + u * v, ",").concat(t, `
            L `).concat(e + r - u * v, ",").concat(t, `
            A `).concat(v, ",").concat(v, ",0,0,").concat(s, ",").concat(e + r, ",").concat(t + o * v, `
            L `).concat(e + r, ",").concat(t + n - o * v, `
            A `).concat(v, ",").concat(v, ",0,0,").concat(s, ",").concat(e + r - u * v, ",").concat(t + n, `
            L `).concat(e + u * v, ",").concat(t + n, `
            A `).concat(v, ",").concat(v, ",0,0,").concat(s, ",").concat(e, ",").concat(t + n - o * v, " Z");
  } else
    c = "M ".concat(e, ",").concat(t, " h ").concat(r, " v ").concat(n, " h ").concat(-r, " Z");
  return c;
}, BP = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  // The radius of border
  // The radius of four corners when radius is a number
  // The radius of left-top, right-top, right-bottom, left-bottom when radius is an array
  radius: 0,
  isAnimationActive: !1,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, Dm = (e) => {
  var t = ze(e, BP), r = ce(null), [n, i] = nt(-1);
  be(() => {
    if (r.current && r.current.getTotalLength)
      try {
        var B = r.current.getTotalLength();
        B && i(B);
      } catch {
      }
  }, []);
  var {
    x: a,
    y: o,
    width: u,
    height: s,
    radius: c,
    className: l
  } = t, {
    animationEasing: f,
    animationDuration: d,
    animationBegin: v,
    isAnimationActive: h,
    isUpdateAnimationActive: p
  } = t, m = ce(u), y = ce(s), g = ce(a), b = ce(o), E = Vt(() => ({
    x: a,
    y: o,
    width: u,
    height: s,
    radius: c
  }), [a, o, u, s, c]), P = Jn(E, "rectangle-");
  if (a !== +a || o !== +o || u !== +u || s !== +s || u === 0 || s === 0)
    return null;
  var O = te("recharts-rectangle", l);
  if (!p)
    return /* @__PURE__ */ x.createElement("path", ea({}, xe(t, !0), {
      className: O,
      d: Fd(a, o, u, s, c)
    }));
  var A = m.current, j = y.current, N = g.current, M = b.current, k = "0px ".concat(n === -1 ? 1 : n, "px"), D = "".concat(n, "px 0px"), L = jm(["strokeDasharray"], d, typeof f == "string" ? f : void 0);
  return /* @__PURE__ */ x.createElement(Zn, {
    animationId: P,
    key: P,
    canBegin: n > 0,
    duration: d,
    easing: f,
    isActive: p,
    begin: v
  }, (B) => {
    var z = we(A, u, B), H = we(j, s, B), U = we(N, a, B), de = we(M, o, B);
    r.current && (m.current = z, y.current = H, g.current = U, b.current = de);
    var Q;
    return h ? B > 0 ? Q = {
      transition: L,
      strokeDasharray: D
    } : Q = {
      strokeDasharray: k
    } : Q = {
      strokeDasharray: D
    }, /* @__PURE__ */ x.createElement("path", ea({}, xe(t, !0), {
      className: O,
      d: Fd(U, de, z, H, c),
      ref: r,
      style: Bd(Bd({}, Q), t.style)
    }));
  });
};
function Nm(e) {
  var {
    cx: t,
    cy: r,
    radius: n,
    startAngle: i,
    endAngle: a
  } = e, o = _e(t, r, n, i), u = _e(t, r, n, a);
  return {
    points: [o, u],
    cx: t,
    cy: r,
    radius: n,
    startAngle: i,
    endAngle: a
  };
}
function us() {
  return us = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, us.apply(null, arguments);
}
var FP = (e, t) => {
  var r = Re(t - e), n = Math.min(Math.abs(t - e), 359.999);
  return r * n;
}, ji = (e) => {
  var {
    cx: t,
    cy: r,
    radius: n,
    angle: i,
    sign: a,
    isExternal: o,
    cornerRadius: u,
    cornerIsExternal: s
  } = e, c = u * (o ? 1 : -1) + n, l = Math.asin(u / c) / Zi, f = s ? i : i + a * l, d = _e(t, r, c, f), v = _e(t, r, n, f), h = s ? i - a * l : i, p = _e(t, r, c * Math.cos(l * Zi), h);
  return {
    center: d,
    circleTangency: v,
    lineTangency: p,
    theta: l
  };
}, Mm = (e) => {
  var {
    cx: t,
    cy: r,
    innerRadius: n,
    outerRadius: i,
    startAngle: a,
    endAngle: o
  } = e, u = FP(a, o), s = a + u, c = _e(t, r, i, a), l = _e(t, r, i, s), f = "M ".concat(c.x, ",").concat(c.y, `
    A `).concat(i, ",").concat(i, `,0,
    `).concat(+(Math.abs(u) > 180), ",").concat(+(a > s), `,
    `).concat(l.x, ",").concat(l.y, `
  `);
  if (n > 0) {
    var d = _e(t, r, n, a), v = _e(t, r, n, s);
    f += "L ".concat(v.x, ",").concat(v.y, `
            A `).concat(n, ",").concat(n, `,0,
            `).concat(+(Math.abs(u) > 180), ",").concat(+(a <= s), `,
            `).concat(d.x, ",").concat(d.y, " Z");
  } else
    f += "L ".concat(t, ",").concat(r, " Z");
  return f;
}, KP = (e) => {
  var {
    cx: t,
    cy: r,
    innerRadius: n,
    outerRadius: i,
    cornerRadius: a,
    forceCornerRadius: o,
    cornerIsExternal: u,
    startAngle: s,
    endAngle: c
  } = e, l = Re(c - s), {
    circleTangency: f,
    lineTangency: d,
    theta: v
  } = ji({
    cx: t,
    cy: r,
    radius: i,
    angle: s,
    sign: l,
    cornerRadius: a,
    cornerIsExternal: u
  }), {
    circleTangency: h,
    lineTangency: p,
    theta: m
  } = ji({
    cx: t,
    cy: r,
    radius: i,
    angle: c,
    sign: -l,
    cornerRadius: a,
    cornerIsExternal: u
  }), y = u ? Math.abs(s - c) : Math.abs(s - c) - v - m;
  if (y < 0)
    return o ? "M ".concat(d.x, ",").concat(d.y, `
        a`).concat(a, ",").concat(a, ",0,0,1,").concat(a * 2, `,0
        a`).concat(a, ",").concat(a, ",0,0,1,").concat(-a * 2, `,0
      `) : Mm({
      cx: t,
      cy: r,
      innerRadius: n,
      outerRadius: i,
      startAngle: s,
      endAngle: c
    });
  var g = "M ".concat(d.x, ",").concat(d.y, `
    A`).concat(a, ",").concat(a, ",0,0,").concat(+(l < 0), ",").concat(f.x, ",").concat(f.y, `
    A`).concat(i, ",").concat(i, ",0,").concat(+(y > 180), ",").concat(+(l < 0), ",").concat(h.x, ",").concat(h.y, `
    A`).concat(a, ",").concat(a, ",0,0,").concat(+(l < 0), ",").concat(p.x, ",").concat(p.y, `
  `);
  if (n > 0) {
    var {
      circleTangency: b,
      lineTangency: E,
      theta: P
    } = ji({
      cx: t,
      cy: r,
      radius: n,
      angle: s,
      sign: l,
      isExternal: !0,
      cornerRadius: a,
      cornerIsExternal: u
    }), {
      circleTangency: O,
      lineTangency: A,
      theta: j
    } = ji({
      cx: t,
      cy: r,
      radius: n,
      angle: c,
      sign: -l,
      isExternal: !0,
      cornerRadius: a,
      cornerIsExternal: u
    }), N = u ? Math.abs(s - c) : Math.abs(s - c) - P - j;
    if (N < 0 && a === 0)
      return "".concat(g, "L").concat(t, ",").concat(r, "Z");
    g += "L".concat(A.x, ",").concat(A.y, `
      A`).concat(a, ",").concat(a, ",0,0,").concat(+(l < 0), ",").concat(O.x, ",").concat(O.y, `
      A`).concat(n, ",").concat(n, ",0,").concat(+(N > 180), ",").concat(+(l > 0), ",").concat(b.x, ",").concat(b.y, `
      A`).concat(a, ",").concat(a, ",0,0,").concat(+(l < 0), ",").concat(E.x, ",").concat(E.y, "Z");
  } else
    g += "L".concat(t, ",").concat(r, "Z");
  return g;
}, zP = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, Im = (e) => {
  var t = ze(e, zP), {
    cx: r,
    cy: n,
    innerRadius: i,
    outerRadius: a,
    cornerRadius: o,
    forceCornerRadius: u,
    cornerIsExternal: s,
    startAngle: c,
    endAngle: l,
    className: f
  } = t;
  if (a < i || c === l)
    return null;
  var d = te("recharts-sector", f), v = a - i, h = Ve(o, v, 0, !0), p;
  return h > 0 && Math.abs(c - l) < 360 ? p = KP({
    cx: r,
    cy: n,
    innerRadius: i,
    outerRadius: a,
    cornerRadius: Math.min(h, v / 2),
    forceCornerRadius: u,
    cornerIsExternal: s,
    startAngle: c,
    endAngle: l
  }) : p = Mm({
    cx: r,
    cy: n,
    innerRadius: i,
    outerRadius: a,
    startAngle: c,
    endAngle: l
  }), /* @__PURE__ */ x.createElement("path", us({}, xe(t, !0), {
    className: d,
    d: p
  }));
};
function WP(e, t, r) {
  var n, i, a, o;
  if (e === "horizontal")
    n = t.x, a = n, i = r.top, o = r.top + r.height;
  else if (e === "vertical")
    i = t.y, o = i, n = r.left, a = r.left + r.width;
  else if (t.cx != null && t.cy != null)
    if (e === "centric") {
      var {
        cx: u,
        cy: s,
        innerRadius: c,
        outerRadius: l,
        angle: f
      } = t, d = _e(u, s, c, f), v = _e(u, s, l, f);
      n = d.x, i = d.y, a = v.x, o = v.y;
    } else
      return Nm(t);
  return [{
    x: n,
    y: i
  }, {
    x: a,
    y: o
  }];
}
var fu = {}, du = {}, vu = {}, Kd;
function qP() {
  return Kd || (Kd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ $h();
    function r(n) {
      return t.isSymbol(n) ? NaN : Number(n);
    }
    e.toNumber = r;
  })(vu)), vu;
}
var zd;
function UP() {
  return zd || (zd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ qP();
    function r(n) {
      return n ? (n = t.toNumber(n), n === 1 / 0 || n === -1 / 0 ? (n < 0 ? -1 : 1) * Number.MAX_VALUE : n === n ? n : 0) : n === 0 ? n : 0;
    }
    e.toFinite = r;
  })(du)), du;
}
var Wd;
function VP() {
  return Wd || (Wd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Lh(), r = /* @__PURE__ */ UP();
    function n(i, a, o) {
      o && typeof o != "number" && t.isIterateeCall(i, a, o) && (a = o = void 0), i = r.toFinite(i), a === void 0 ? (a = i, i = 0) : a = r.toFinite(a), o = o === void 0 ? i < a ? 1 : -1 : r.toFinite(o);
      const u = Math.max(Math.ceil((a - i) / (o || 1)), 0), s = new Array(u);
      for (let c = 0; c < u; c++)
        s[c] = i, i += o;
      return s;
    }
    e.range = n;
  })(fu)), fu;
}
var pu, qd;
function YP() {
  return qd || (qd = 1, pu = VP().range), pu;
}
var HP = /* @__PURE__ */ YP();
const Rm = /* @__PURE__ */ cr(HP);
function nr(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function GP(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Zs(e) {
  let t, r, n;
  e.length !== 2 ? (t = nr, r = (u, s) => nr(e(u), s), n = (u, s) => e(u) - s) : (t = e === nr || e === GP ? e : XP, r = e, n = e);
  function i(u, s, c = 0, l = u.length) {
    if (c < l) {
      if (t(s, s) !== 0) return l;
      do {
        const f = c + l >>> 1;
        r(u[f], s) < 0 ? c = f + 1 : l = f;
      } while (c < l);
    }
    return c;
  }
  function a(u, s, c = 0, l = u.length) {
    if (c < l) {
      if (t(s, s) !== 0) return l;
      do {
        const f = c + l >>> 1;
        r(u[f], s) <= 0 ? c = f + 1 : l = f;
      } while (c < l);
    }
    return c;
  }
  function o(u, s, c = 0, l = u.length) {
    const f = i(u, s, c, l - 1);
    return f > c && n(u[f - 1], s) > -n(u[f], s) ? f - 1 : f;
  }
  return { left: i, center: o, right: a };
}
function XP() {
  return 0;
}
function $m(e) {
  return e === null ? NaN : +e;
}
function* ZP(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
const JP = Zs(nr), Qn = JP.right;
Zs($m).center;
class Ud extends Map {
  constructor(t, r = tE) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get(Vd(this, t));
  }
  has(t) {
    return super.has(Vd(this, t));
  }
  set(t, r) {
    return super.set(QP(this, t), r);
  }
  delete(t) {
    return super.delete(eE(this, t));
  }
}
function Vd({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function QP({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function eE({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function tE(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function rE(e = nr) {
  if (e === nr) return Lm;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function Lm(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const nE = Math.sqrt(50), iE = Math.sqrt(10), aE = Math.sqrt(2);
function ta(e, t, r) {
  const n = (t - e) / Math.max(0, r), i = Math.floor(Math.log10(n)), a = n / Math.pow(10, i), o = a >= nE ? 10 : a >= iE ? 5 : a >= aE ? 2 : 1;
  let u, s, c;
  return i < 0 ? (c = Math.pow(10, -i) / o, u = Math.round(e * c), s = Math.round(t * c), u / c < e && ++u, s / c > t && --s, c = -c) : (c = Math.pow(10, i) * o, u = Math.round(e / c), s = Math.round(t / c), u * c < e && ++u, s * c > t && --s), s < u && 0.5 <= r && r < 2 ? ta(e, t, r * 2) : [u, s, c];
}
function ss(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const n = t < e, [i, a, o] = n ? ta(t, e, r) : ta(e, t, r);
  if (!(a >= i)) return [];
  const u = a - i + 1, s = new Array(u);
  if (n)
    if (o < 0) for (let c = 0; c < u; ++c) s[c] = (a - c) / -o;
    else for (let c = 0; c < u; ++c) s[c] = (a - c) * o;
  else if (o < 0) for (let c = 0; c < u; ++c) s[c] = (i + c) / -o;
  else for (let c = 0; c < u; ++c) s[c] = (i + c) * o;
  return s;
}
function ls(e, t, r) {
  return t = +t, e = +e, r = +r, ta(e, t, r)[2];
}
function cs(e, t, r) {
  t = +t, e = +e, r = +r;
  const n = t < e, i = n ? ls(t, e, r) : ls(e, t, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Yd(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function Hd(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function Bm(e, t, r = 0, n = 1 / 0, i) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
  for (i = i === void 0 ? Lm : rE(i); n > r; ) {
    if (n - r > 600) {
      const s = n - r + 1, c = t - r + 1, l = Math.log(s), f = 0.5 * Math.exp(2 * l / 3), d = 0.5 * Math.sqrt(l * f * (s - f) / s) * (c - s / 2 < 0 ? -1 : 1), v = Math.max(r, Math.floor(t - c * f / s + d)), h = Math.min(n, Math.floor(t + (s - c) * f / s + d));
      Bm(e, t, v, h, i);
    }
    const a = e[t];
    let o = r, u = n;
    for (En(e, r, t), i(e[n], a) > 0 && En(e, r, n); o < u; ) {
      for (En(e, o, u), ++o, --u; i(e[o], a) < 0; ) ++o;
      for (; i(e[u], a) > 0; ) --u;
    }
    i(e[r], a) === 0 ? En(e, r, u) : (++u, En(e, u, n)), u <= t && (r = u + 1), t <= u && (n = u - 1);
  }
  return e;
}
function En(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function oE(e, t, r) {
  if (e = Float64Array.from(ZP(e)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return Hd(e);
    if (t >= 1) return Yd(e);
    var n, i = (n - 1) * t, a = Math.floor(i), o = Yd(Bm(e, a).subarray(0, a + 1)), u = Hd(e.subarray(a + 1));
    return o + (u - o) * (i - a);
  }
}
function uE(e, t, r = $m) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n, i = (n - 1) * t, a = Math.floor(i), o = +r(e[a], a, e), u = +r(e[a + 1], a + 1, e);
    return o + (u - o) * (i - a);
  }
}
function sE(e, t, r) {
  e = +e, t = +t, r = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +r;
  for (var n = -1, i = Math.max(0, Math.ceil((t - e) / r)) | 0, a = new Array(i); ++n < i; )
    a[n] = e + n * r;
  return a;
}
function Et(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function Gt(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const fs = Symbol("implicit");
function Js() {
  var e = new Ud(), t = [], r = [], n = fs;
  function i(a) {
    let o = e.get(a);
    if (o === void 0) {
      if (n !== fs) return n;
      e.set(a, o = t.push(a) - 1);
    }
    return r[o % r.length];
  }
  return i.domain = function(a) {
    if (!arguments.length) return t.slice();
    t = [], e = new Ud();
    for (const o of a)
      e.has(o) || e.set(o, t.push(o) - 1);
    return i;
  }, i.range = function(a) {
    return arguments.length ? (r = Array.from(a), i) : r.slice();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return Js(t, r).unknown(n);
  }, Et.apply(i, arguments), i;
}
function Qs() {
  var e = Js().unknown(void 0), t = e.domain, r = e.range, n = 0, i = 1, a, o, u = !1, s = 0, c = 0, l = 0.5;
  delete e.unknown;
  function f() {
    var d = t().length, v = i < n, h = v ? i : n, p = v ? n : i;
    a = (p - h) / Math.max(1, d - s + c * 2), u && (a = Math.floor(a)), h += (p - h - a * (d - s)) * l, o = a * (1 - s), u && (h = Math.round(h), o = Math.round(o));
    var m = sE(d).map(function(y) {
      return h + a * y;
    });
    return r(v ? m.reverse() : m);
  }
  return e.domain = function(d) {
    return arguments.length ? (t(d), f()) : t();
  }, e.range = function(d) {
    return arguments.length ? ([n, i] = d, n = +n, i = +i, f()) : [n, i];
  }, e.rangeRound = function(d) {
    return [n, i] = d, n = +n, i = +i, u = !0, f();
  }, e.bandwidth = function() {
    return o;
  }, e.step = function() {
    return a;
  }, e.round = function(d) {
    return arguments.length ? (u = !!d, f()) : u;
  }, e.padding = function(d) {
    return arguments.length ? (s = Math.min(1, c = +d), f()) : s;
  }, e.paddingInner = function(d) {
    return arguments.length ? (s = Math.min(1, d), f()) : s;
  }, e.paddingOuter = function(d) {
    return arguments.length ? (c = +d, f()) : c;
  }, e.align = function(d) {
    return arguments.length ? (l = Math.max(0, Math.min(1, d)), f()) : l;
  }, e.copy = function() {
    return Qs(t(), [n, i]).round(u).paddingInner(s).paddingOuter(c).align(l);
  }, Et.apply(f(), arguments);
}
function Fm(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return Fm(t());
  }, e;
}
function lE() {
  return Fm(Qs.apply(null, arguments).paddingInner(1));
}
function el(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function Km(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function ei() {
}
var Ln = 0.7, ra = 1 / Ln, Vr = "\\s*([+-]?\\d+)\\s*", Bn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Ct = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", cE = /^#([0-9a-f]{3,8})$/, fE = new RegExp(`^rgb\\(${Vr},${Vr},${Vr}\\)$`), dE = new RegExp(`^rgb\\(${Ct},${Ct},${Ct}\\)$`), vE = new RegExp(`^rgba\\(${Vr},${Vr},${Vr},${Bn}\\)$`), pE = new RegExp(`^rgba\\(${Ct},${Ct},${Ct},${Bn}\\)$`), hE = new RegExp(`^hsl\\(${Bn},${Ct},${Ct}\\)$`), mE = new RegExp(`^hsla\\(${Bn},${Ct},${Ct},${Bn}\\)$`), Gd = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
el(ei, Fn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Xd,
  // Deprecated! Use color.formatHex.
  formatHex: Xd,
  formatHex8: yE,
  formatHsl: gE,
  formatRgb: Zd,
  toString: Zd
});
function Xd() {
  return this.rgb().formatHex();
}
function yE() {
  return this.rgb().formatHex8();
}
function gE() {
  return zm(this).formatHsl();
}
function Zd() {
  return this.rgb().formatRgb();
}
function Fn(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = cE.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Jd(t) : r === 3 ? new rt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Ti(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Ti(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = fE.exec(e)) ? new rt(t[1], t[2], t[3], 1) : (t = dE.exec(e)) ? new rt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = vE.exec(e)) ? Ti(t[1], t[2], t[3], t[4]) : (t = pE.exec(e)) ? Ti(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = hE.exec(e)) ? tv(t[1], t[2] / 100, t[3] / 100, 1) : (t = mE.exec(e)) ? tv(t[1], t[2] / 100, t[3] / 100, t[4]) : Gd.hasOwnProperty(e) ? Jd(Gd[e]) : e === "transparent" ? new rt(NaN, NaN, NaN, 0) : null;
}
function Jd(e) {
  return new rt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Ti(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new rt(e, t, r, n);
}
function bE(e) {
  return e instanceof ei || (e = Fn(e)), e ? (e = e.rgb(), new rt(e.r, e.g, e.b, e.opacity)) : new rt();
}
function ds(e, t, r, n) {
  return arguments.length === 1 ? bE(e) : new rt(e, t, r, n ?? 1);
}
function rt(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
el(rt, ds, Km(ei, {
  brighter(e) {
    return e = e == null ? ra : Math.pow(ra, e), new rt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Ln : Math.pow(Ln, e), new rt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new rt(jr(this.r), jr(this.g), jr(this.b), na(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Qd,
  // Deprecated! Use color.formatHex.
  formatHex: Qd,
  formatHex8: xE,
  formatRgb: ev,
  toString: ev
}));
function Qd() {
  return `#${Or(this.r)}${Or(this.g)}${Or(this.b)}`;
}
function xE() {
  return `#${Or(this.r)}${Or(this.g)}${Or(this.b)}${Or((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ev() {
  const e = na(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${jr(this.r)}, ${jr(this.g)}, ${jr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function na(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function jr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Or(e) {
  return e = jr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function tv(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new At(e, t, r, n);
}
function zm(e) {
  if (e instanceof At) return new At(e.h, e.s, e.l, e.opacity);
  if (e instanceof ei || (e = Fn(e)), !e) return new At();
  if (e instanceof At) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, i = Math.min(t, r, n), a = Math.max(t, r, n), o = NaN, u = a - i, s = (a + i) / 2;
  return u ? (t === a ? o = (r - n) / u + (r < n) * 6 : r === a ? o = (n - t) / u + 2 : o = (t - r) / u + 4, u /= s < 0.5 ? a + i : 2 - a - i, o *= 60) : u = s > 0 && s < 1 ? 0 : o, new At(o, u, s, e.opacity);
}
function wE(e, t, r, n) {
  return arguments.length === 1 ? zm(e) : new At(e, t, r, n ?? 1);
}
function At(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
el(At, wE, Km(ei, {
  brighter(e) {
    return e = e == null ? ra : Math.pow(ra, e), new At(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Ln : Math.pow(Ln, e), new At(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, i = 2 * r - n;
    return new rt(
      hu(e >= 240 ? e - 240 : e + 120, i, n),
      hu(e, i, n),
      hu(e < 120 ? e + 240 : e - 120, i, n),
      this.opacity
    );
  },
  clamp() {
    return new At(rv(this.h), Ci(this.s), Ci(this.l), na(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = na(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${rv(this.h)}, ${Ci(this.s) * 100}%, ${Ci(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function rv(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Ci(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function hu(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const tl = (e) => () => e;
function OE(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function PE(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function EE(e) {
  return (e = +e) == 1 ? Wm : function(t, r) {
    return r - t ? PE(t, r, e) : tl(isNaN(t) ? r : t);
  };
}
function Wm(e, t) {
  var r = t - e;
  return r ? OE(e, r) : tl(isNaN(e) ? t : e);
}
const nv = (function e(t) {
  var r = EE(t);
  function n(i, a) {
    var o = r((i = ds(i)).r, (a = ds(a)).r), u = r(i.g, a.g), s = r(i.b, a.b), c = Wm(i.opacity, a.opacity);
    return function(l) {
      return i.r = o(l), i.g = u(l), i.b = s(l), i.opacity = c(l), i + "";
    };
  }
  return n.gamma = e, n;
})(1);
function AE(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), i;
  return function(a) {
    for (i = 0; i < r; ++i) n[i] = e[i] * (1 - a) + t[i] * a;
    return n;
  };
}
function SE(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function _E(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, i = new Array(n), a = new Array(r), o;
  for (o = 0; o < n; ++o) i[o] = on(e[o], t[o]);
  for (; o < r; ++o) a[o] = t[o];
  return function(u) {
    for (o = 0; o < n; ++o) a[o] = i[o](u);
    return a;
  };
}
function jE(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(n) {
    return r.setTime(e * (1 - n) + t * n), r;
  };
}
function ia(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function TE(e, t) {
  var r = {}, n = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? r[i] = on(e[i], t[i]) : n[i] = t[i];
  return function(a) {
    for (i in r) n[i] = r[i](a);
    return n;
  };
}
var vs = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, mu = new RegExp(vs.source, "g");
function CE(e) {
  return function() {
    return e;
  };
}
function kE(e) {
  return function(t) {
    return e(t) + "";
  };
}
function DE(e, t) {
  var r = vs.lastIndex = mu.lastIndex = 0, n, i, a, o = -1, u = [], s = [];
  for (e = e + "", t = t + ""; (n = vs.exec(e)) && (i = mu.exec(t)); )
    (a = i.index) > r && (a = t.slice(r, a), u[o] ? u[o] += a : u[++o] = a), (n = n[0]) === (i = i[0]) ? u[o] ? u[o] += i : u[++o] = i : (u[++o] = null, s.push({ i: o, x: ia(n, i) })), r = mu.lastIndex;
  return r < t.length && (a = t.slice(r), u[o] ? u[o] += a : u[++o] = a), u.length < 2 ? s[0] ? kE(s[0].x) : CE(t) : (t = s.length, function(c) {
    for (var l = 0, f; l < t; ++l) u[(f = s[l]).i] = f.x(c);
    return u.join("");
  });
}
function on(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? tl(t) : (r === "number" ? ia : r === "string" ? (n = Fn(t)) ? (t = n, nv) : DE : t instanceof Fn ? nv : t instanceof Date ? jE : SE(t) ? AE : Array.isArray(t) ? _E : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? TE : ia)(e, t);
}
function rl(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function NE(e, t) {
  t === void 0 && (t = e, e = on);
  for (var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n); r < n; ) a[r] = e(i, i = t[++r]);
  return function(o) {
    var u = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return a[u](o - u);
  };
}
function ME(e) {
  return function() {
    return e;
  };
}
function aa(e) {
  return +e;
}
var iv = [0, 1];
function Ge(e) {
  return e;
}
function ps(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : ME(isNaN(t) ? NaN : 0.5);
}
function IE(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function RE(e, t, r) {
  var n = e[0], i = e[1], a = t[0], o = t[1];
  return i < n ? (n = ps(i, n), a = r(o, a)) : (n = ps(n, i), a = r(a, o)), function(u) {
    return a(n(u));
  };
}
function $E(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, i = new Array(n), a = new Array(n), o = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < n; )
    i[o] = ps(e[o], e[o + 1]), a[o] = r(t[o], t[o + 1]);
  return function(u) {
    var s = Qn(e, u, 1, n) - 1;
    return a[s](i[s](u));
  };
}
function ti(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function $a() {
  var e = iv, t = iv, r = on, n, i, a, o = Ge, u, s, c;
  function l() {
    var d = Math.min(e.length, t.length);
    return o !== Ge && (o = IE(e[0], e[d - 1])), u = d > 2 ? $E : RE, s = c = null, f;
  }
  function f(d) {
    return d == null || isNaN(d = +d) ? a : (s || (s = u(e.map(n), t, r)))(n(o(d)));
  }
  return f.invert = function(d) {
    return o(i((c || (c = u(t, e.map(n), ia)))(d)));
  }, f.domain = function(d) {
    return arguments.length ? (e = Array.from(d, aa), l()) : e.slice();
  }, f.range = function(d) {
    return arguments.length ? (t = Array.from(d), l()) : t.slice();
  }, f.rangeRound = function(d) {
    return t = Array.from(d), r = rl, l();
  }, f.clamp = function(d) {
    return arguments.length ? (o = d ? !0 : Ge, l()) : o !== Ge;
  }, f.interpolate = function(d) {
    return arguments.length ? (r = d, l()) : r;
  }, f.unknown = function(d) {
    return arguments.length ? (a = d, f) : a;
  }, function(d, v) {
    return n = d, i = v, l();
  };
}
function nl() {
  return $a()(Ge, Ge);
}
function LE(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function oa(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var r, n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}
function Xr(e) {
  return e = oa(Math.abs(e)), e ? e[1] : NaN;
}
function BE(e, t) {
  return function(r, n) {
    for (var i = r.length, a = [], o = 0, u = e[0], s = 0; i > 0 && u > 0 && (s + u + 1 > n && (u = Math.max(1, n - s)), a.push(r.substring(i -= u, i + u)), !((s += u + 1) > n)); )
      u = e[o = (o + 1) % e.length];
    return a.reverse().join(t);
  };
}
function FE(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var KE = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Kn(e) {
  if (!(t = KE.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new il({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
Kn.prototype = il.prototype;
function il(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
il.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function zE(e) {
  e: for (var t = e.length, r = 1, n = -1, i; r < t; ++r)
    switch (e[r]) {
      case ".":
        n = i = r;
        break;
      case "0":
        n === 0 && (n = r), i = r;
        break;
      default:
        if (!+e[r]) break e;
        n > 0 && (n = 0);
        break;
    }
  return n > 0 ? e.slice(0, n) + e.slice(i + 1) : e;
}
var qm;
function WE(e, t) {
  var r = oa(e, t);
  if (!r) return e + "";
  var n = r[0], i = r[1], a = i - (qm = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = n.length;
  return a === o ? n : a > o ? n + new Array(a - o + 1).join("0") : a > 0 ? n.slice(0, a) + "." + n.slice(a) : "0." + new Array(1 - a).join("0") + oa(e, Math.max(0, t + a - 1))[0];
}
function av(e, t) {
  var r = oa(e, t);
  if (!r) return e + "";
  var n = r[0], i = r[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const ov = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: LE,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => av(e * 100, t),
  r: av,
  s: WE,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function uv(e) {
  return e;
}
var sv = Array.prototype.map, lv = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function qE(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? uv : BE(sv.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? uv : FE(sv.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", u = e.minus === void 0 ? "−" : e.minus + "", s = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(f) {
    f = Kn(f);
    var d = f.fill, v = f.align, h = f.sign, p = f.symbol, m = f.zero, y = f.width, g = f.comma, b = f.precision, E = f.trim, P = f.type;
    P === "n" ? (g = !0, P = "g") : ov[P] || (b === void 0 && (b = 12), E = !0, P = "g"), (m || d === "0" && v === "=") && (m = !0, d = "0", v = "=");
    var O = p === "$" ? r : p === "#" && /[boxX]/.test(P) ? "0" + P.toLowerCase() : "", A = p === "$" ? n : /[%p]/.test(P) ? o : "", j = ov[P], N = /[defgprs%]/.test(P);
    b = b === void 0 ? 6 : /[gprs]/.test(P) ? Math.max(1, Math.min(21, b)) : Math.max(0, Math.min(20, b));
    function M(k) {
      var D = O, L = A, B, z, H;
      if (P === "c")
        L = j(k) + L, k = "";
      else {
        k = +k;
        var U = k < 0 || 1 / k < 0;
        if (k = isNaN(k) ? s : j(Math.abs(k), b), E && (k = zE(k)), U && +k == 0 && h !== "+" && (U = !1), D = (U ? h === "(" ? h : u : h === "-" || h === "(" ? "" : h) + D, L = (P === "s" ? lv[8 + qm / 3] : "") + L + (U && h === "(" ? ")" : ""), N) {
          for (B = -1, z = k.length; ++B < z; )
            if (H = k.charCodeAt(B), 48 > H || H > 57) {
              L = (H === 46 ? i + k.slice(B + 1) : k.slice(B)) + L, k = k.slice(0, B);
              break;
            }
        }
      }
      g && !m && (k = t(k, 1 / 0));
      var de = D.length + k.length + L.length, Q = de < y ? new Array(y - de + 1).join(d) : "";
      switch (g && m && (k = t(Q + k, Q.length ? y - L.length : 1 / 0), Q = ""), v) {
        case "<":
          k = D + k + L + Q;
          break;
        case "=":
          k = D + Q + k + L;
          break;
        case "^":
          k = Q.slice(0, de = Q.length >> 1) + D + k + L + Q.slice(de);
          break;
        default:
          k = Q + D + k + L;
          break;
      }
      return a(k);
    }
    return M.toString = function() {
      return f + "";
    }, M;
  }
  function l(f, d) {
    var v = c((f = Kn(f), f.type = "f", f)), h = Math.max(-8, Math.min(8, Math.floor(Xr(d) / 3))) * 3, p = Math.pow(10, -h), m = lv[8 + h / 3];
    return function(y) {
      return v(p * y) + m;
    };
  }
  return {
    format: c,
    formatPrefix: l
  };
}
var ki, al, Um;
UE({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function UE(e) {
  return ki = qE(e), al = ki.format, Um = ki.formatPrefix, ki;
}
function VE(e) {
  return Math.max(0, -Xr(Math.abs(e)));
}
function YE(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Xr(t) / 3))) * 3 - Xr(Math.abs(e)));
}
function HE(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Xr(t) - Xr(e)) + 1;
}
function Vm(e, t, r, n) {
  var i = cs(e, t, r), a;
  switch (n = Kn(n ?? ",f"), n.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(a = YE(i, o)) && (n.precision = a), Um(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(a = HE(i, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(a = VE(i)) && (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return al(n);
}
function vr(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return ss(n[0], n[n.length - 1], r ?? 10);
  }, e.tickFormat = function(r, n) {
    var i = t();
    return Vm(i[0], i[i.length - 1], r ?? 10, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), i = 0, a = n.length - 1, o = n[i], u = n[a], s, c, l = 10;
    for (u < o && (c = o, o = u, u = c, c = i, i = a, a = c); l-- > 0; ) {
      if (c = ls(o, u, r), c === s)
        return n[i] = o, n[a] = u, t(n);
      if (c > 0)
        o = Math.floor(o / c) * c, u = Math.ceil(u / c) * c;
      else if (c < 0)
        o = Math.ceil(o * c) / c, u = Math.floor(u * c) / c;
      else
        break;
      s = c;
    }
    return e;
  }, e;
}
function Ym() {
  var e = nl();
  return e.copy = function() {
    return ti(e, Ym());
  }, Et.apply(e, arguments), vr(e);
}
function Hm(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, aa), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return Hm(e).unknown(t);
  }, e = arguments.length ? Array.from(e, aa) : [0, 1], vr(r);
}
function Gm(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, i = e[r], a = e[n], o;
  return a < i && (o = r, r = n, n = o, o = i, i = a, a = o), e[r] = t.floor(i), e[n] = t.ceil(a), e;
}
function cv(e) {
  return Math.log(e);
}
function fv(e) {
  return Math.exp(e);
}
function GE(e) {
  return -Math.log(-e);
}
function XE(e) {
  return -Math.exp(-e);
}
function ZE(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function JE(e) {
  return e === 10 ? ZE : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function QE(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function dv(e) {
  return (t, r) => -e(-t, r);
}
function ol(e) {
  const t = e(cv, fv), r = t.domain;
  let n = 10, i, a;
  function o() {
    return i = QE(n), a = JE(n), r()[0] < 0 ? (i = dv(i), a = dv(a), e(GE, XE)) : e(cv, fv), t;
  }
  return t.base = function(u) {
    return arguments.length ? (n = +u, o()) : n;
  }, t.domain = function(u) {
    return arguments.length ? (r(u), o()) : r();
  }, t.ticks = (u) => {
    const s = r();
    let c = s[0], l = s[s.length - 1];
    const f = l < c;
    f && ([c, l] = [l, c]);
    let d = i(c), v = i(l), h, p;
    const m = u == null ? 10 : +u;
    let y = [];
    if (!(n % 1) && v - d < m) {
      if (d = Math.floor(d), v = Math.ceil(v), c > 0) {
        for (; d <= v; ++d)
          for (h = 1; h < n; ++h)
            if (p = d < 0 ? h / a(-d) : h * a(d), !(p < c)) {
              if (p > l) break;
              y.push(p);
            }
      } else for (; d <= v; ++d)
        for (h = n - 1; h >= 1; --h)
          if (p = d > 0 ? h / a(-d) : h * a(d), !(p < c)) {
            if (p > l) break;
            y.push(p);
          }
      y.length * 2 < m && (y = ss(c, l, m));
    } else
      y = ss(d, v, Math.min(v - d, m)).map(a);
    return f ? y.reverse() : y;
  }, t.tickFormat = (u, s) => {
    if (u == null && (u = 10), s == null && (s = n === 10 ? "s" : ","), typeof s != "function" && (!(n % 1) && (s = Kn(s)).precision == null && (s.trim = !0), s = al(s)), u === 1 / 0) return s;
    const c = Math.max(1, n * u / t.ticks().length);
    return (l) => {
      let f = l / a(Math.round(i(l)));
      return f * n < n - 0.5 && (f *= n), f <= c ? s(l) : "";
    };
  }, t.nice = () => r(Gm(r(), {
    floor: (u) => a(Math.floor(i(u))),
    ceil: (u) => a(Math.ceil(i(u)))
  })), t;
}
function Xm() {
  const e = ol($a()).domain([1, 10]);
  return e.copy = () => ti(e, Xm()).base(e.base()), Et.apply(e, arguments), e;
}
function vv(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function pv(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function ul(e) {
  var t = 1, r = e(vv(t), pv(t));
  return r.constant = function(n) {
    return arguments.length ? e(vv(t = +n), pv(t)) : t;
  }, vr(r);
}
function Zm() {
  var e = ul($a());
  return e.copy = function() {
    return ti(e, Zm()).constant(e.constant());
  }, Et.apply(e, arguments);
}
function hv(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function eA(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function tA(e) {
  return e < 0 ? -e * e : e * e;
}
function sl(e) {
  var t = e(Ge, Ge), r = 1;
  function n() {
    return r === 1 ? e(Ge, Ge) : r === 0.5 ? e(eA, tA) : e(hv(r), hv(1 / r));
  }
  return t.exponent = function(i) {
    return arguments.length ? (r = +i, n()) : r;
  }, vr(t);
}
function ll() {
  var e = sl($a());
  return e.copy = function() {
    return ti(e, ll()).exponent(e.exponent());
  }, Et.apply(e, arguments), e;
}
function rA() {
  return ll.apply(null, arguments).exponent(0.5);
}
function mv(e) {
  return Math.sign(e) * e * e;
}
function nA(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function Jm() {
  var e = nl(), t = [0, 1], r = !1, n;
  function i(a) {
    var o = nA(e(a));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return i.invert = function(a) {
    return e.invert(mv(a));
  }, i.domain = function(a) {
    return arguments.length ? (e.domain(a), i) : e.domain();
  }, i.range = function(a) {
    return arguments.length ? (e.range((t = Array.from(a, aa)).map(mv)), i) : t.slice();
  }, i.rangeRound = function(a) {
    return i.range(a).round(!0);
  }, i.round = function(a) {
    return arguments.length ? (r = !!a, i) : r;
  }, i.clamp = function(a) {
    return arguments.length ? (e.clamp(a), i) : e.clamp();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return Jm(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, Et.apply(i, arguments), vr(i);
}
function Qm() {
  var e = [], t = [], r = [], n;
  function i() {
    var o = 0, u = Math.max(1, t.length);
    for (r = new Array(u - 1); ++o < u; ) r[o - 1] = uE(e, o / u);
    return a;
  }
  function a(o) {
    return o == null || isNaN(o = +o) ? n : t[Qn(r, o)];
  }
  return a.invertExtent = function(o) {
    var u = t.indexOf(o);
    return u < 0 ? [NaN, NaN] : [
      u > 0 ? r[u - 1] : e[0],
      u < r.length ? r[u] : e[e.length - 1]
    ];
  }, a.domain = function(o) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let u of o) u != null && !isNaN(u = +u) && e.push(u);
    return e.sort(nr), i();
  }, a.range = function(o) {
    return arguments.length ? (t = Array.from(o), i()) : t.slice();
  }, a.unknown = function(o) {
    return arguments.length ? (n = o, a) : n;
  }, a.quantiles = function() {
    return r.slice();
  }, a.copy = function() {
    return Qm().domain(e).range(t).unknown(n);
  }, Et.apply(a, arguments);
}
function ey() {
  var e = 0, t = 1, r = 1, n = [0.5], i = [0, 1], a;
  function o(s) {
    return s != null && s <= s ? i[Qn(n, s, 0, r)] : a;
  }
  function u() {
    var s = -1;
    for (n = new Array(r); ++s < r; ) n[s] = ((s + 1) * t - (s - r) * e) / (r + 1);
    return o;
  }
  return o.domain = function(s) {
    return arguments.length ? ([e, t] = s, e = +e, t = +t, u()) : [e, t];
  }, o.range = function(s) {
    return arguments.length ? (r = (i = Array.from(s)).length - 1, u()) : i.slice();
  }, o.invertExtent = function(s) {
    var c = i.indexOf(s);
    return c < 0 ? [NaN, NaN] : c < 1 ? [e, n[0]] : c >= r ? [n[r - 1], t] : [n[c - 1], n[c]];
  }, o.unknown = function(s) {
    return arguments.length && (a = s), o;
  }, o.thresholds = function() {
    return n.slice();
  }, o.copy = function() {
    return ey().domain([e, t]).range(i).unknown(a);
  }, Et.apply(vr(o), arguments);
}
function ty() {
  var e = [0.5], t = [0, 1], r, n = 1;
  function i(a) {
    return a != null && a <= a ? t[Qn(e, a, 0, n)] : r;
  }
  return i.domain = function(a) {
    return arguments.length ? (e = Array.from(a), n = Math.min(e.length, t.length - 1), i) : e.slice();
  }, i.range = function(a) {
    return arguments.length ? (t = Array.from(a), n = Math.min(e.length, t.length - 1), i) : t.slice();
  }, i.invertExtent = function(a) {
    var o = t.indexOf(a);
    return [e[o - 1], e[o]];
  }, i.unknown = function(a) {
    return arguments.length ? (r = a, i) : r;
  }, i.copy = function() {
    return ty().domain(e).range(t).unknown(r);
  }, Et.apply(i, arguments);
}
const yu = /* @__PURE__ */ new Date(), gu = /* @__PURE__ */ new Date();
function De(e, t, r, n) {
  function i(a) {
    return e(a = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+a)), a;
  }
  return i.floor = (a) => (e(a = /* @__PURE__ */ new Date(+a)), a), i.ceil = (a) => (e(a = new Date(a - 1)), t(a, 1), e(a), a), i.round = (a) => {
    const o = i(a), u = i.ceil(a);
    return a - o < u - a ? o : u;
  }, i.offset = (a, o) => (t(a = /* @__PURE__ */ new Date(+a), o == null ? 1 : Math.floor(o)), a), i.range = (a, o, u) => {
    const s = [];
    if (a = i.ceil(a), u = u == null ? 1 : Math.floor(u), !(a < o) || !(u > 0)) return s;
    let c;
    do
      s.push(c = /* @__PURE__ */ new Date(+a)), t(a, u), e(a);
    while (c < a && a < o);
    return s;
  }, i.filter = (a) => De((o) => {
    if (o >= o) for (; e(o), !a(o); ) o.setTime(o - 1);
  }, (o, u) => {
    if (o >= o)
      if (u < 0) for (; ++u <= 0; )
        for (; t(o, -1), !a(o); )
          ;
      else for (; --u >= 0; )
        for (; t(o, 1), !a(o); )
          ;
  }), r && (i.count = (a, o) => (yu.setTime(+a), gu.setTime(+o), e(yu), e(gu), Math.floor(r(yu, gu))), i.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(n ? (o) => n(o) % a === 0 : (o) => i.count(0, o) % a === 0) : i)), i;
}
const ua = De(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
ua.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? De((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : ua);
ua.range;
const $t = 1e3, xt = $t * 60, Lt = xt * 60, zt = Lt * 24, cl = zt * 7, yv = zt * 30, bu = zt * 365, Pr = De((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * $t);
}, (e, t) => (t - e) / $t, (e) => e.getUTCSeconds());
Pr.range;
const fl = De((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * $t);
}, (e, t) => {
  e.setTime(+e + t * xt);
}, (e, t) => (t - e) / xt, (e) => e.getMinutes());
fl.range;
const dl = De((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * xt);
}, (e, t) => (t - e) / xt, (e) => e.getUTCMinutes());
dl.range;
const vl = De((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * $t - e.getMinutes() * xt);
}, (e, t) => {
  e.setTime(+e + t * Lt);
}, (e, t) => (t - e) / Lt, (e) => e.getHours());
vl.range;
const pl = De((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Lt);
}, (e, t) => (t - e) / Lt, (e) => e.getUTCHours());
pl.range;
const ri = De(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * xt) / zt,
  (e) => e.getDate() - 1
);
ri.range;
const La = De((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / zt, (e) => e.getUTCDate() - 1);
La.range;
const ry = De((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / zt, (e) => Math.floor(e / zt));
ry.range;
function Rr(e) {
  return De((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * xt) / cl);
}
const Ba = Rr(0), sa = Rr(1), iA = Rr(2), aA = Rr(3), Zr = Rr(4), oA = Rr(5), uA = Rr(6);
Ba.range;
sa.range;
iA.range;
aA.range;
Zr.range;
oA.range;
uA.range;
function $r(e) {
  return De((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / cl);
}
const Fa = $r(0), la = $r(1), sA = $r(2), lA = $r(3), Jr = $r(4), cA = $r(5), fA = $r(6);
Fa.range;
la.range;
sA.range;
lA.range;
Jr.range;
cA.range;
fA.range;
const hl = De((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
hl.range;
const ml = De((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
ml.range;
const Wt = De((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Wt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : De((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
Wt.range;
const qt = De((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
qt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : De((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
qt.range;
function ny(e, t, r, n, i, a) {
  const o = [
    [Pr, 1, $t],
    [Pr, 5, 5 * $t],
    [Pr, 15, 15 * $t],
    [Pr, 30, 30 * $t],
    [a, 1, xt],
    [a, 5, 5 * xt],
    [a, 15, 15 * xt],
    [a, 30, 30 * xt],
    [i, 1, Lt],
    [i, 3, 3 * Lt],
    [i, 6, 6 * Lt],
    [i, 12, 12 * Lt],
    [n, 1, zt],
    [n, 2, 2 * zt],
    [r, 1, cl],
    [t, 1, yv],
    [t, 3, 3 * yv],
    [e, 1, bu]
  ];
  function u(c, l, f) {
    const d = l < c;
    d && ([c, l] = [l, c]);
    const v = f && typeof f.range == "function" ? f : s(c, l, f), h = v ? v.range(c, +l + 1) : [];
    return d ? h.reverse() : h;
  }
  function s(c, l, f) {
    const d = Math.abs(l - c) / f, v = Zs(([, , m]) => m).right(o, d);
    if (v === o.length) return e.every(cs(c / bu, l / bu, f));
    if (v === 0) return ua.every(Math.max(cs(c, l, f), 1));
    const [h, p] = o[d / o[v - 1][2] < o[v][2] / d ? v - 1 : v];
    return h.every(p);
  }
  return [u, s];
}
const [dA, vA] = ny(qt, ml, Fa, ry, pl, dl), [pA, hA] = ny(Wt, hl, Ba, ri, vl, fl);
function xu(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function wu(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function An(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function mA(e) {
  var t = e.dateTime, r = e.date, n = e.time, i = e.periods, a = e.days, o = e.shortDays, u = e.months, s = e.shortMonths, c = Sn(i), l = _n(i), f = Sn(a), d = _n(a), v = Sn(o), h = _n(o), p = Sn(u), m = _n(u), y = Sn(s), g = _n(s), b = {
    a: U,
    A: de,
    b: Q,
    B: Ze,
    c: null,
    d: Pv,
    e: Pv,
    f: BA,
    g: GA,
    G: ZA,
    H: RA,
    I: $A,
    j: LA,
    L: iy,
    m: FA,
    M: KA,
    p: Mt,
    q,
    Q: Sv,
    s: _v,
    S: zA,
    u: WA,
    U: qA,
    V: UA,
    w: VA,
    W: YA,
    x: null,
    X: null,
    y: HA,
    Y: XA,
    Z: JA,
    "%": Av
  }, E = {
    a: Br,
    A: hn,
    b: Je,
    B: mn,
    c: null,
    d: Ev,
    e: Ev,
    f: rS,
    g: dS,
    G: pS,
    H: QA,
    I: eS,
    j: tS,
    L: oy,
    m: nS,
    M: iS,
    p: yn,
    q: Fr,
    Q: Sv,
    s: _v,
    S: aS,
    u: oS,
    U: uS,
    V: sS,
    w: lS,
    W: cS,
    x: null,
    X: null,
    y: fS,
    Y: vS,
    Z: hS,
    "%": Av
  }, P = {
    a: M,
    A: k,
    b: D,
    B: L,
    c: B,
    d: wv,
    e: wv,
    f: DA,
    g: xv,
    G: bv,
    H: Ov,
    I: Ov,
    j: jA,
    L: kA,
    m: _A,
    M: TA,
    p: N,
    q: SA,
    Q: MA,
    s: IA,
    S: CA,
    u: wA,
    U: OA,
    V: PA,
    w: xA,
    W: EA,
    x: z,
    X: H,
    y: xv,
    Y: bv,
    Z: AA,
    "%": NA
  };
  b.x = O(r, b), b.X = O(n, b), b.c = O(t, b), E.x = O(r, E), E.X = O(n, E), E.c = O(t, E);
  function O(R, V) {
    return function(G) {
      var C = [], We = -1, ie = 0, Me = R.length, Te, jt, gn;
      for (G instanceof Date || (G = /* @__PURE__ */ new Date(+G)); ++We < Me; )
        R.charCodeAt(We) === 37 && (C.push(R.slice(ie, We)), (jt = gv[Te = R.charAt(++We)]) != null ? Te = R.charAt(++We) : jt = Te === "e" ? " " : "0", (gn = V[Te]) && (Te = gn(G, jt)), C.push(Te), ie = We + 1);
      return C.push(R.slice(ie, We)), C.join("");
    };
  }
  function A(R, V) {
    return function(G) {
      var C = An(1900, void 0, 1), We = j(C, R, G += "", 0), ie, Me;
      if (We != G.length) return null;
      if ("Q" in C) return new Date(C.Q);
      if ("s" in C) return new Date(C.s * 1e3 + ("L" in C ? C.L : 0));
      if (V && !("Z" in C) && (C.Z = 0), "p" in C && (C.H = C.H % 12 + C.p * 12), C.m === void 0 && (C.m = "q" in C ? C.q : 0), "V" in C) {
        if (C.V < 1 || C.V > 53) return null;
        "w" in C || (C.w = 1), "Z" in C ? (ie = wu(An(C.y, 0, 1)), Me = ie.getUTCDay(), ie = Me > 4 || Me === 0 ? la.ceil(ie) : la(ie), ie = La.offset(ie, (C.V - 1) * 7), C.y = ie.getUTCFullYear(), C.m = ie.getUTCMonth(), C.d = ie.getUTCDate() + (C.w + 6) % 7) : (ie = xu(An(C.y, 0, 1)), Me = ie.getDay(), ie = Me > 4 || Me === 0 ? sa.ceil(ie) : sa(ie), ie = ri.offset(ie, (C.V - 1) * 7), C.y = ie.getFullYear(), C.m = ie.getMonth(), C.d = ie.getDate() + (C.w + 6) % 7);
      } else ("W" in C || "U" in C) && ("w" in C || (C.w = "u" in C ? C.u % 7 : "W" in C ? 1 : 0), Me = "Z" in C ? wu(An(C.y, 0, 1)).getUTCDay() : xu(An(C.y, 0, 1)).getDay(), C.m = 0, C.d = "W" in C ? (C.w + 6) % 7 + C.W * 7 - (Me + 5) % 7 : C.w + C.U * 7 - (Me + 6) % 7);
      return "Z" in C ? (C.H += C.Z / 100 | 0, C.M += C.Z % 100, wu(C)) : xu(C);
    };
  }
  function j(R, V, G, C) {
    for (var We = 0, ie = V.length, Me = G.length, Te, jt; We < ie; ) {
      if (C >= Me) return -1;
      if (Te = V.charCodeAt(We++), Te === 37) {
        if (Te = V.charAt(We++), jt = P[Te in gv ? V.charAt(We++) : Te], !jt || (C = jt(R, G, C)) < 0) return -1;
      } else if (Te != G.charCodeAt(C++))
        return -1;
    }
    return C;
  }
  function N(R, V, G) {
    var C = c.exec(V.slice(G));
    return C ? (R.p = l.get(C[0].toLowerCase()), G + C[0].length) : -1;
  }
  function M(R, V, G) {
    var C = v.exec(V.slice(G));
    return C ? (R.w = h.get(C[0].toLowerCase()), G + C[0].length) : -1;
  }
  function k(R, V, G) {
    var C = f.exec(V.slice(G));
    return C ? (R.w = d.get(C[0].toLowerCase()), G + C[0].length) : -1;
  }
  function D(R, V, G) {
    var C = y.exec(V.slice(G));
    return C ? (R.m = g.get(C[0].toLowerCase()), G + C[0].length) : -1;
  }
  function L(R, V, G) {
    var C = p.exec(V.slice(G));
    return C ? (R.m = m.get(C[0].toLowerCase()), G + C[0].length) : -1;
  }
  function B(R, V, G) {
    return j(R, t, V, G);
  }
  function z(R, V, G) {
    return j(R, r, V, G);
  }
  function H(R, V, G) {
    return j(R, n, V, G);
  }
  function U(R) {
    return o[R.getDay()];
  }
  function de(R) {
    return a[R.getDay()];
  }
  function Q(R) {
    return s[R.getMonth()];
  }
  function Ze(R) {
    return u[R.getMonth()];
  }
  function Mt(R) {
    return i[+(R.getHours() >= 12)];
  }
  function q(R) {
    return 1 + ~~(R.getMonth() / 3);
  }
  function Br(R) {
    return o[R.getUTCDay()];
  }
  function hn(R) {
    return a[R.getUTCDay()];
  }
  function Je(R) {
    return s[R.getUTCMonth()];
  }
  function mn(R) {
    return u[R.getUTCMonth()];
  }
  function yn(R) {
    return i[+(R.getUTCHours() >= 12)];
  }
  function Fr(R) {
    return 1 + ~~(R.getUTCMonth() / 3);
  }
  return {
    format: function(R) {
      var V = O(R += "", b);
      return V.toString = function() {
        return R;
      }, V;
    },
    parse: function(R) {
      var V = A(R += "", !1);
      return V.toString = function() {
        return R;
      }, V;
    },
    utcFormat: function(R) {
      var V = O(R += "", E);
      return V.toString = function() {
        return R;
      }, V;
    },
    utcParse: function(R) {
      var V = A(R += "", !0);
      return V.toString = function() {
        return R;
      }, V;
    }
  };
}
var gv = { "-": "", _: " ", 0: "0" }, $e = /^\s*\d+/, yA = /^%/, gA = /[\\^$*+?|[\]().{}]/g;
function J(e, t, r) {
  var n = e < 0 ? "-" : "", i = (n ? -e : e) + "", a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function bA(e) {
  return e.replace(gA, "\\$&");
}
function Sn(e) {
  return new RegExp("^(?:" + e.map(bA).join("|") + ")", "i");
}
function _n(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function xA(e, t, r) {
  var n = $e.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function wA(e, t, r) {
  var n = $e.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function OA(e, t, r) {
  var n = $e.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function PA(e, t, r) {
  var n = $e.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function EA(e, t, r) {
  var n = $e.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function bv(e, t, r) {
  var n = $e.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function xv(e, t, r) {
  var n = $e.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function AA(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function SA(e, t, r) {
  var n = $e.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function _A(e, t, r) {
  var n = $e.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function wv(e, t, r) {
  var n = $e.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function jA(e, t, r) {
  var n = $e.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function Ov(e, t, r) {
  var n = $e.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function TA(e, t, r) {
  var n = $e.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function CA(e, t, r) {
  var n = $e.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function kA(e, t, r) {
  var n = $e.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function DA(e, t, r) {
  var n = $e.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function NA(e, t, r) {
  var n = yA.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function MA(e, t, r) {
  var n = $e.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function IA(e, t, r) {
  var n = $e.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function Pv(e, t) {
  return J(e.getDate(), t, 2);
}
function RA(e, t) {
  return J(e.getHours(), t, 2);
}
function $A(e, t) {
  return J(e.getHours() % 12 || 12, t, 2);
}
function LA(e, t) {
  return J(1 + ri.count(Wt(e), e), t, 3);
}
function iy(e, t) {
  return J(e.getMilliseconds(), t, 3);
}
function BA(e, t) {
  return iy(e, t) + "000";
}
function FA(e, t) {
  return J(e.getMonth() + 1, t, 2);
}
function KA(e, t) {
  return J(e.getMinutes(), t, 2);
}
function zA(e, t) {
  return J(e.getSeconds(), t, 2);
}
function WA(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function qA(e, t) {
  return J(Ba.count(Wt(e) - 1, e), t, 2);
}
function ay(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Zr(e) : Zr.ceil(e);
}
function UA(e, t) {
  return e = ay(e), J(Zr.count(Wt(e), e) + (Wt(e).getDay() === 4), t, 2);
}
function VA(e) {
  return e.getDay();
}
function YA(e, t) {
  return J(sa.count(Wt(e) - 1, e), t, 2);
}
function HA(e, t) {
  return J(e.getFullYear() % 100, t, 2);
}
function GA(e, t) {
  return e = ay(e), J(e.getFullYear() % 100, t, 2);
}
function XA(e, t) {
  return J(e.getFullYear() % 1e4, t, 4);
}
function ZA(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? Zr(e) : Zr.ceil(e), J(e.getFullYear() % 1e4, t, 4);
}
function JA(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + J(t / 60 | 0, "0", 2) + J(t % 60, "0", 2);
}
function Ev(e, t) {
  return J(e.getUTCDate(), t, 2);
}
function QA(e, t) {
  return J(e.getUTCHours(), t, 2);
}
function eS(e, t) {
  return J(e.getUTCHours() % 12 || 12, t, 2);
}
function tS(e, t) {
  return J(1 + La.count(qt(e), e), t, 3);
}
function oy(e, t) {
  return J(e.getUTCMilliseconds(), t, 3);
}
function rS(e, t) {
  return oy(e, t) + "000";
}
function nS(e, t) {
  return J(e.getUTCMonth() + 1, t, 2);
}
function iS(e, t) {
  return J(e.getUTCMinutes(), t, 2);
}
function aS(e, t) {
  return J(e.getUTCSeconds(), t, 2);
}
function oS(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function uS(e, t) {
  return J(Fa.count(qt(e) - 1, e), t, 2);
}
function uy(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Jr(e) : Jr.ceil(e);
}
function sS(e, t) {
  return e = uy(e), J(Jr.count(qt(e), e) + (qt(e).getUTCDay() === 4), t, 2);
}
function lS(e) {
  return e.getUTCDay();
}
function cS(e, t) {
  return J(la.count(qt(e) - 1, e), t, 2);
}
function fS(e, t) {
  return J(e.getUTCFullYear() % 100, t, 2);
}
function dS(e, t) {
  return e = uy(e), J(e.getUTCFullYear() % 100, t, 2);
}
function vS(e, t) {
  return J(e.getUTCFullYear() % 1e4, t, 4);
}
function pS(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? Jr(e) : Jr.ceil(e), J(e.getUTCFullYear() % 1e4, t, 4);
}
function hS() {
  return "+0000";
}
function Av() {
  return "%";
}
function Sv(e) {
  return +e;
}
function _v(e) {
  return Math.floor(+e / 1e3);
}
var Wr, sy, ly;
mS({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function mS(e) {
  return Wr = mA(e), sy = Wr.format, Wr.parse, ly = Wr.utcFormat, Wr.utcParse, Wr;
}
function yS(e) {
  return new Date(e);
}
function gS(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function yl(e, t, r, n, i, a, o, u, s, c) {
  var l = nl(), f = l.invert, d = l.domain, v = c(".%L"), h = c(":%S"), p = c("%I:%M"), m = c("%I %p"), y = c("%a %d"), g = c("%b %d"), b = c("%B"), E = c("%Y");
  function P(O) {
    return (s(O) < O ? v : u(O) < O ? h : o(O) < O ? p : a(O) < O ? m : n(O) < O ? i(O) < O ? y : g : r(O) < O ? b : E)(O);
  }
  return l.invert = function(O) {
    return new Date(f(O));
  }, l.domain = function(O) {
    return arguments.length ? d(Array.from(O, gS)) : d().map(yS);
  }, l.ticks = function(O) {
    var A = d();
    return e(A[0], A[A.length - 1], O ?? 10);
  }, l.tickFormat = function(O, A) {
    return A == null ? P : c(A);
  }, l.nice = function(O) {
    var A = d();
    return (!O || typeof O.range != "function") && (O = t(A[0], A[A.length - 1], O ?? 10)), O ? d(Gm(A, O)) : l;
  }, l.copy = function() {
    return ti(l, yl(e, t, r, n, i, a, o, u, s, c));
  }, l;
}
function bS() {
  return Et.apply(yl(pA, hA, Wt, hl, Ba, ri, vl, fl, Pr, sy).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function xS() {
  return Et.apply(yl(dA, vA, qt, ml, Fa, La, pl, dl, Pr, ly).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function Ka() {
  var e = 0, t = 1, r, n, i, a, o = Ge, u = !1, s;
  function c(f) {
    return f == null || isNaN(f = +f) ? s : o(i === 0 ? 0.5 : (f = (a(f) - r) * i, u ? Math.max(0, Math.min(1, f)) : f));
  }
  c.domain = function(f) {
    return arguments.length ? ([e, t] = f, r = a(e = +e), n = a(t = +t), i = r === n ? 0 : 1 / (n - r), c) : [e, t];
  }, c.clamp = function(f) {
    return arguments.length ? (u = !!f, c) : u;
  }, c.interpolator = function(f) {
    return arguments.length ? (o = f, c) : o;
  };
  function l(f) {
    return function(d) {
      var v, h;
      return arguments.length ? ([v, h] = d, o = f(v, h), c) : [o(0), o(1)];
    };
  }
  return c.range = l(on), c.rangeRound = l(rl), c.unknown = function(f) {
    return arguments.length ? (s = f, c) : s;
  }, function(f) {
    return a = f, r = f(e), n = f(t), i = r === n ? 0 : 1 / (n - r), c;
  };
}
function pr(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function cy() {
  var e = vr(Ka()(Ge));
  return e.copy = function() {
    return pr(e, cy());
  }, Gt.apply(e, arguments);
}
function fy() {
  var e = ol(Ka()).domain([1, 10]);
  return e.copy = function() {
    return pr(e, fy()).base(e.base());
  }, Gt.apply(e, arguments);
}
function dy() {
  var e = ul(Ka());
  return e.copy = function() {
    return pr(e, dy()).constant(e.constant());
  }, Gt.apply(e, arguments);
}
function gl() {
  var e = sl(Ka());
  return e.copy = function() {
    return pr(e, gl()).exponent(e.exponent());
  }, Gt.apply(e, arguments);
}
function wS() {
  return gl.apply(null, arguments).exponent(0.5);
}
function vy() {
  var e = [], t = Ge;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((Qn(e, n, 1) - 1) / (e.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let i of n) i != null && !isNaN(i = +i) && e.push(i);
    return e.sort(nr), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e.map((n, i) => t(i / (e.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (i, a) => oE(e, a / n));
  }, r.copy = function() {
    return vy(t).domain(e);
  }, Gt.apply(r, arguments);
}
function za() {
  var e = 0, t = 0.5, r = 1, n = 1, i, a, o, u, s, c = Ge, l, f = !1, d;
  function v(p) {
    return isNaN(p = +p) ? d : (p = 0.5 + ((p = +l(p)) - a) * (n * p < n * a ? u : s), c(f ? Math.max(0, Math.min(1, p)) : p));
  }
  v.domain = function(p) {
    return arguments.length ? ([e, t, r] = p, i = l(e = +e), a = l(t = +t), o = l(r = +r), u = i === a ? 0 : 0.5 / (a - i), s = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, v) : [e, t, r];
  }, v.clamp = function(p) {
    return arguments.length ? (f = !!p, v) : f;
  }, v.interpolator = function(p) {
    return arguments.length ? (c = p, v) : c;
  };
  function h(p) {
    return function(m) {
      var y, g, b;
      return arguments.length ? ([y, g, b] = m, c = NE(p, [y, g, b]), v) : [c(0), c(0.5), c(1)];
    };
  }
  return v.range = h(on), v.rangeRound = h(rl), v.unknown = function(p) {
    return arguments.length ? (d = p, v) : d;
  }, function(p) {
    return l = p, i = p(e), a = p(t), o = p(r), u = i === a ? 0 : 0.5 / (a - i), s = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, v;
  };
}
function py() {
  var e = vr(za()(Ge));
  return e.copy = function() {
    return pr(e, py());
  }, Gt.apply(e, arguments);
}
function hy() {
  var e = ol(za()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return pr(e, hy()).base(e.base());
  }, Gt.apply(e, arguments);
}
function my() {
  var e = ul(za());
  return e.copy = function() {
    return pr(e, my()).constant(e.constant());
  }, Gt.apply(e, arguments);
}
function bl() {
  var e = sl(za());
  return e.copy = function() {
    return pr(e, bl()).exponent(e.exponent());
  }, Gt.apply(e, arguments);
}
function OS() {
  return bl.apply(null, arguments).exponent(0.5);
}
const Cn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: Qs,
  scaleDiverging: py,
  scaleDivergingLog: hy,
  scaleDivergingPow: bl,
  scaleDivergingSqrt: OS,
  scaleDivergingSymlog: my,
  scaleIdentity: Hm,
  scaleImplicit: fs,
  scaleLinear: Ym,
  scaleLog: Xm,
  scaleOrdinal: Js,
  scalePoint: lE,
  scalePow: ll,
  scaleQuantile: Qm,
  scaleQuantize: ey,
  scaleRadial: Jm,
  scaleSequential: cy,
  scaleSequentialLog: fy,
  scaleSequentialPow: gl,
  scaleSequentialQuantile: vy,
  scaleSequentialSqrt: wS,
  scaleSequentialSymlog: dy,
  scaleSqrt: rA,
  scaleSymlog: Zm,
  scaleThreshold: ty,
  scaleTime: bS,
  scaleUtc: xS,
  tickFormat: Vm
}, Symbol.toStringTag, { value: "Module" }));
var hr = (e) => e.chartData, xl = S([hr], (e) => {
  var t = e.chartData != null ? e.chartData.length - 1 : 0;
  return {
    chartData: e.chartData,
    computedData: e.computedData,
    dataEndIndex: t,
    dataStartIndex: 0
  };
}), Wa = (e, t, r, n) => n ? xl(e) : hr(e);
function Qr(e) {
  if (Array.isArray(e) && e.length === 2) {
    var [t, r] = e;
    if (dt(t) && dt(r))
      return !0;
  }
  return !1;
}
function jv(e, t, r) {
  return r ? e : [Math.min(e[0], t[0]), Math.max(e[1], t[1])];
}
function PS(e, t) {
  if (t && typeof e != "function" && Array.isArray(e) && e.length === 2) {
    var [r, n] = e, i, a;
    if (dt(r))
      i = r;
    else if (typeof r == "function")
      return;
    if (dt(n))
      a = n;
    else if (typeof n == "function")
      return;
    var o = [i, a];
    if (Qr(o))
      return o;
  }
}
function ES(e, t, r) {
  if (!(!r && t == null)) {
    if (typeof e == "function" && t != null)
      try {
        var n = e(t, r);
        if (Qr(n))
          return jv(n, t, r);
      } catch {
      }
    if (Array.isArray(e) && e.length === 2) {
      var [i, a] = e, o, u;
      if (i === "auto")
        t != null && (o = Math.min(...t));
      else if (K(i))
        o = i;
      else if (typeof i == "function")
        try {
          t != null && (o = i(t?.[0]));
        } catch {
        }
      else if (typeof i == "string" && xd.test(i)) {
        var s = xd.exec(i);
        if (s == null || t == null)
          o = void 0;
        else {
          var c = +s[1];
          o = t[0] - c;
        }
      } else
        o = t?.[0];
      if (a === "auto")
        t != null && (u = Math.max(...t));
      else if (K(a))
        u = a;
      else if (typeof a == "function")
        try {
          t != null && (u = a(t?.[1]));
        } catch {
        }
      else if (typeof a == "string" && wd.test(a)) {
        var l = wd.exec(a);
        if (l == null || t == null)
          u = void 0;
        else {
          var f = +l[1];
          u = t[1] + f;
        }
      } else
        u = t?.[1];
      var d = [o, u];
      if (Qr(d))
        return t == null ? d : jv(d, t, r);
    }
  }
}
var un = 1e9, AS = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed during run-time using `Decimal.config`.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used by default by `toInteger`, `toDecimalPlaces`, `toExponential`,
  // `toFixed`, `toPrecision` and `toSignificantDigits`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -MAX_E
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to MAX_E
  // The natural logarithm of 10.
  // 115 digits
  LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
}, Ol, he = !0, Ot = "[DecimalError] ", Tr = Ot + "Invalid argument: ", wl = Ot + "Exponent out of range: ", sn = Math.floor, xr = Math.pow, SS = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, lt, Ie = 1e7, ve = 7, yy = 9007199254740991, ca = sn(yy / ve), $ = {};
$.absoluteValue = $.abs = function() {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
$.comparedTo = $.cmp = function(e) {
  var t, r, n, i, a = this;
  if (e = new a.constructor(e), a.s !== e.s) return a.s || -e.s;
  if (a.e !== e.e) return a.e > e.e ^ a.s < 0 ? 1 : -1;
  for (n = a.d.length, i = e.d.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (a.d[t] !== e.d[t]) return a.d[t] > e.d[t] ^ a.s < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ a.s < 0 ? 1 : -1;
};
$.decimalPlaces = $.dp = function() {
  var e = this, t = e.d.length - 1, r = (t - e.e) * ve;
  if (t = e.d[t], t) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
$.dividedBy = $.div = function(e) {
  return Ft(this, new this.constructor(e));
};
$.dividedToIntegerBy = $.idiv = function(e) {
  var t = this, r = t.constructor;
  return se(Ft(t, new r(e), 0, 1), r.precision);
};
$.equals = $.eq = function(e) {
  return !this.cmp(e);
};
$.exponent = function() {
  return je(this);
};
$.greaterThan = $.gt = function(e) {
  return this.cmp(e) > 0;
};
$.greaterThanOrEqualTo = $.gte = function(e) {
  return this.cmp(e) >= 0;
};
$.isInteger = $.isint = function() {
  return this.e > this.d.length - 2;
};
$.isNegative = $.isneg = function() {
  return this.s < 0;
};
$.isPositive = $.ispos = function() {
  return this.s > 0;
};
$.isZero = function() {
  return this.s === 0;
};
$.lessThan = $.lt = function(e) {
  return this.cmp(e) < 0;
};
$.lessThanOrEqualTo = $.lte = function(e) {
  return this.cmp(e) < 1;
};
$.logarithm = $.log = function(e) {
  var t, r = this, n = r.constructor, i = n.precision, a = i + 5;
  if (e === void 0)
    e = new n(10);
  else if (e = new n(e), e.s < 1 || e.eq(lt)) throw Error(Ot + "NaN");
  if (r.s < 1) throw Error(Ot + (r.s ? "NaN" : "-Infinity"));
  return r.eq(lt) ? new n(0) : (he = !1, t = Ft(zn(r, a), zn(e, a), a), he = !0, se(t, i));
};
$.minus = $.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? xy(t, e) : gy(t, (e.s = -e.s, e));
};
$.modulo = $.mod = function(e) {
  var t, r = this, n = r.constructor, i = n.precision;
  if (e = new n(e), !e.s) throw Error(Ot + "NaN");
  return r.s ? (he = !1, t = Ft(r, e, 0, 1).times(e), he = !0, r.minus(t)) : se(new n(r), i);
};
$.naturalExponential = $.exp = function() {
  return by(this);
};
$.naturalLogarithm = $.ln = function() {
  return zn(this);
};
$.negated = $.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s || 0, e;
};
$.plus = $.add = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? gy(t, e) : xy(t, (e.s = -e.s, e));
};
$.precision = $.sd = function(e) {
  var t, r, n, i = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Tr + e);
  if (t = je(i) + 1, n = i.d.length - 1, r = n * ve + 1, n = i.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = i.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
$.squareRoot = $.sqrt = function() {
  var e, t, r, n, i, a, o, u = this, s = u.constructor;
  if (u.s < 1) {
    if (!u.s) return new s(0);
    throw Error(Ot + "NaN");
  }
  for (e = je(u), he = !1, i = Math.sqrt(+u), i == 0 || i == 1 / 0 ? (t = Tt(u.d), (t.length + e) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e = sn((e + 1) / 2) - (e < 0 || e % 2), i == 1 / 0 ? t = "5e" + e : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new s(t)) : n = new s(i.toString()), r = s.precision, i = o = r + 3; ; )
    if (a = n, n = a.plus(Ft(u, a, o + 2)).times(0.5), Tt(a.d).slice(0, o) === (t = Tt(n.d)).slice(0, o)) {
      if (t = t.slice(o - 3, o + 1), i == o && t == "4999") {
        if (se(a, r + 1, 0), a.times(a).eq(u)) {
          n = a;
          break;
        }
      } else if (t != "9999")
        break;
      o += 4;
    }
  return he = !0, se(n, r);
};
$.times = $.mul = function(e) {
  var t, r, n, i, a, o, u, s, c, l = this, f = l.constructor, d = l.d, v = (e = new f(e)).d;
  if (!l.s || !e.s) return new f(0);
  for (e.s *= l.s, r = l.e + e.e, s = d.length, c = v.length, s < c && (a = d, d = v, v = a, o = s, s = c, c = o), a = [], o = s + c, n = o; n--; ) a.push(0);
  for (n = c; --n >= 0; ) {
    for (t = 0, i = s + n; i > n; )
      u = a[i] + v[n] * d[i - n - 1] + t, a[i--] = u % Ie | 0, t = u / Ie | 0;
    a[i] = (a[i] + t) % Ie | 0;
  }
  for (; !a[--o]; ) a.pop();
  return t ? ++r : a.shift(), e.d = a, e.e = r, he ? se(e, f.precision) : e;
};
$.toDecimalPlaces = $.todp = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (Dt(e, 0, un), t === void 0 ? t = n.rounding : Dt(t, 0, 8), se(r, e + je(r) + 1, t));
};
$.toExponential = function(e, t) {
  var r, n = this, i = n.constructor;
  return e === void 0 ? r = Nr(n, !0) : (Dt(e, 0, un), t === void 0 ? t = i.rounding : Dt(t, 0, 8), n = se(new i(n), e + 1, t), r = Nr(n, !0, e + 1)), r;
};
$.toFixed = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? Nr(i) : (Dt(e, 0, un), t === void 0 ? t = a.rounding : Dt(t, 0, 8), n = se(new a(i), e + je(i) + 1, t), r = Nr(n.abs(), !1, e + je(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
};
$.toInteger = $.toint = function() {
  var e = this, t = e.constructor;
  return se(new t(e), je(e) + 1, t.rounding);
};
$.toNumber = function() {
  return +this;
};
$.toPower = $.pow = function(e) {
  var t, r, n, i, a, o, u = this, s = u.constructor, c = 12, l = +(e = new s(e));
  if (!e.s) return new s(lt);
  if (u = new s(u), !u.s) {
    if (e.s < 1) throw Error(Ot + "Infinity");
    return u;
  }
  if (u.eq(lt)) return u;
  if (n = s.precision, e.eq(lt)) return se(u, n);
  if (t = e.e, r = e.d.length - 1, o = t >= r, a = u.s, o) {
    if ((r = l < 0 ? -l : l) <= yy) {
      for (i = new s(lt), t = Math.ceil(n / ve + 4), he = !1; r % 2 && (i = i.times(u), Cv(i.d, t)), r = sn(r / 2), r !== 0; )
        u = u.times(u), Cv(u.d, t);
      return he = !0, e.s < 0 ? new s(lt).div(i) : se(i, n);
    }
  } else if (a < 0) throw Error(Ot + "NaN");
  return a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, u.s = 1, he = !1, i = e.times(zn(u, n + c)), he = !0, i = by(i), i.s = a, i;
};
$.toPrecision = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? (r = je(i), n = Nr(i, r <= a.toExpNeg || r >= a.toExpPos)) : (Dt(e, 1, un), t === void 0 ? t = a.rounding : Dt(t, 0, 8), i = se(new a(i), e, t), r = je(i), n = Nr(i, e <= r || r <= a.toExpNeg, e)), n;
};
$.toSignificantDigits = $.tosd = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (Dt(e, 1, un), t === void 0 ? t = n.rounding : Dt(t, 0, 8)), se(new n(r), e, t);
};
$.toString = $.valueOf = $.val = $.toJSON = $[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = je(e), r = e.constructor;
  return Nr(e, t <= r.toExpNeg || t >= r.toExpPos);
};
function gy(e, t) {
  var r, n, i, a, o, u, s, c, l = e.constructor, f = l.precision;
  if (!e.s || !t.s)
    return t.s || (t = new l(e)), he ? se(t, f) : t;
  if (s = e.d, c = t.d, o = e.e, i = t.e, s = s.slice(), a = o - i, a) {
    for (a < 0 ? (n = s, a = -a, u = c.length) : (n = c, i = o, u = s.length), o = Math.ceil(f / ve), u = o > u ? o + 1 : u + 1, a > u && (a = u, n.length = 1), n.reverse(); a--; ) n.push(0);
    n.reverse();
  }
  for (u = s.length, a = c.length, u - a < 0 && (a = u, n = c, c = s, s = n), r = 0; a; )
    r = (s[--a] = s[a] + c[a] + r) / Ie | 0, s[a] %= Ie;
  for (r && (s.unshift(r), ++i), u = s.length; s[--u] == 0; ) s.pop();
  return t.d = s, t.e = i, he ? se(t, f) : t;
}
function Dt(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(Tr + e);
}
function Tt(e) {
  var t, r, n, i = e.length - 1, a = "", o = e[0];
  if (i > 0) {
    for (a += o, t = 1; t < i; t++)
      n = e[t] + "", r = ve - n.length, r && (a += er(r)), a += n;
    o = e[t], n = o + "", r = ve - n.length, r && (a += er(r));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; ) o /= 10;
  return a + o;
}
var Ft = /* @__PURE__ */ (function() {
  function e(n, i) {
    var a, o = 0, u = n.length;
    for (n = n.slice(); u--; )
      a = n[u] * i + o, n[u] = a % Ie | 0, o = a / Ie | 0;
    return o && n.unshift(o), n;
  }
  function t(n, i, a, o) {
    var u, s;
    if (a != o)
      s = a > o ? 1 : -1;
    else
      for (u = s = 0; u < a; u++)
        if (n[u] != i[u]) {
          s = n[u] > i[u] ? 1 : -1;
          break;
        }
    return s;
  }
  function r(n, i, a) {
    for (var o = 0; a--; )
      n[a] -= o, o = n[a] < i[a] ? 1 : 0, n[a] = o * Ie + n[a] - i[a];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, i, a, o) {
    var u, s, c, l, f, d, v, h, p, m, y, g, b, E, P, O, A, j, N = n.constructor, M = n.s == i.s ? 1 : -1, k = n.d, D = i.d;
    if (!n.s) return new N(n);
    if (!i.s) throw Error(Ot + "Division by zero");
    for (s = n.e - i.e, A = D.length, P = k.length, v = new N(M), h = v.d = [], c = 0; D[c] == (k[c] || 0); ) ++c;
    if (D[c] > (k[c] || 0) && --s, a == null ? g = a = N.precision : o ? g = a + (je(n) - je(i)) + 1 : g = a, g < 0) return new N(0);
    if (g = g / ve + 2 | 0, c = 0, A == 1)
      for (l = 0, D = D[0], g++; (c < P || l) && g--; c++)
        b = l * Ie + (k[c] || 0), h[c] = b / D | 0, l = b % D | 0;
    else {
      for (l = Ie / (D[0] + 1) | 0, l > 1 && (D = e(D, l), k = e(k, l), A = D.length, P = k.length), E = A, p = k.slice(0, A), m = p.length; m < A; ) p[m++] = 0;
      j = D.slice(), j.unshift(0), O = D[0], D[1] >= Ie / 2 && ++O;
      do
        l = 0, u = t(D, p, A, m), u < 0 ? (y = p[0], A != m && (y = y * Ie + (p[1] || 0)), l = y / O | 0, l > 1 ? (l >= Ie && (l = Ie - 1), f = e(D, l), d = f.length, m = p.length, u = t(f, p, d, m), u == 1 && (l--, r(f, A < d ? j : D, d))) : (l == 0 && (u = l = 1), f = D.slice()), d = f.length, d < m && f.unshift(0), r(p, f, m), u == -1 && (m = p.length, u = t(D, p, A, m), u < 1 && (l++, r(p, A < m ? j : D, m))), m = p.length) : u === 0 && (l++, p = [0]), h[c++] = l, u && p[0] ? p[m++] = k[E] || 0 : (p = [k[E]], m = 1);
      while ((E++ < P || p[0] !== void 0) && g--);
    }
    return h[0] || h.shift(), v.e = s, se(v, o ? a + je(v) + 1 : a);
  };
})();
function by(e, t) {
  var r, n, i, a, o, u, s = 0, c = 0, l = e.constructor, f = l.precision;
  if (je(e) > 16) throw Error(wl + je(e));
  if (!e.s) return new l(lt);
  for (he = !1, u = f, o = new l(0.03125); e.abs().gte(0.1); )
    e = e.times(o), c += 5;
  for (n = Math.log(xr(2, c)) / Math.LN10 * 2 + 5 | 0, u += n, r = i = a = new l(lt), l.precision = u; ; ) {
    if (i = se(i.times(e), u), r = r.times(++s), o = a.plus(Ft(i, r, u)), Tt(o.d).slice(0, u) === Tt(a.d).slice(0, u)) {
      for (; c--; ) a = se(a.times(a), u);
      return l.precision = f, t == null ? (he = !0, se(a, f)) : a;
    }
    a = o;
  }
}
function je(e) {
  for (var t = e.e * ve, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function Ou(e, t, r) {
  if (t > e.LN10.sd())
    throw he = !0, r && (e.precision = r), Error(Ot + "LN10 precision limit exceeded");
  return se(new e(e.LN10), t);
}
function er(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function zn(e, t) {
  var r, n, i, a, o, u, s, c, l, f = 1, d = 10, v = e, h = v.d, p = v.constructor, m = p.precision;
  if (v.s < 1) throw Error(Ot + (v.s ? "NaN" : "-Infinity"));
  if (v.eq(lt)) return new p(0);
  if (t == null ? (he = !1, c = m) : c = t, v.eq(10))
    return t == null && (he = !0), Ou(p, c);
  if (c += d, p.precision = c, r = Tt(h), n = r.charAt(0), a = je(v), Math.abs(a) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      v = v.times(e), r = Tt(v.d), n = r.charAt(0), f++;
    a = je(v), n > 1 ? (v = new p("0." + r), a++) : v = new p(n + "." + r.slice(1));
  } else
    return s = Ou(p, c + 2, m).times(a + ""), v = zn(new p(n + "." + r.slice(1)), c - d).plus(s), p.precision = m, t == null ? (he = !0, se(v, m)) : v;
  for (u = o = v = Ft(v.minus(lt), v.plus(lt), c), l = se(v.times(v), c), i = 3; ; ) {
    if (o = se(o.times(l), c), s = u.plus(Ft(o, new p(i), c)), Tt(s.d).slice(0, c) === Tt(u.d).slice(0, c))
      return u = u.times(2), a !== 0 && (u = u.plus(Ou(p, c + 2, m).times(a + ""))), u = Ft(u, new p(f), c), p.precision = m, t == null ? (he = !0, se(u, m)) : u;
    u = s, i += 2;
  }
}
function Tv(e, t) {
  var r, n, i;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (t = t.slice(n, i), t) {
    if (i -= n, r = r - n - 1, e.e = sn(r / ve), e.d = [], n = (r + 1) % ve, r < 0 && (n += ve), n < i) {
      for (n && e.d.push(+t.slice(0, n)), i -= ve; n < i; ) e.d.push(+t.slice(n, n += ve));
      t = t.slice(n), n = ve - t.length;
    } else
      n -= i;
    for (; n--; ) t += "0";
    if (e.d.push(+t), he && (e.e > ca || e.e < -ca)) throw Error(wl + r);
  } else
    e.s = 0, e.e = 0, e.d = [0];
  return e;
}
function se(e, t, r) {
  var n, i, a, o, u, s, c, l, f = e.d;
  for (o = 1, a = f[0]; a >= 10; a /= 10) o++;
  if (n = t - o, n < 0)
    n += ve, i = t, c = f[l = 0];
  else {
    if (l = Math.ceil((n + 1) / ve), a = f.length, l >= a) return e;
    for (c = a = f[l], o = 1; a >= 10; a /= 10) o++;
    n %= ve, i = n - ve + o;
  }
  if (r !== void 0 && (a = xr(10, o - i - 1), u = c / a % 10 | 0, s = t < 0 || f[l + 1] !== void 0 || c % a, s = r < 4 ? (u || s) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : u > 5 || u == 5 && (r == 4 || s || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
  (n > 0 ? i > 0 ? c / xr(10, o - i) : 0 : f[l - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !f[0])
    return s ? (a = je(e), f.length = 1, t = t - a - 1, f[0] = xr(10, (ve - t % ve) % ve), e.e = sn(-t / ve) || 0) : (f.length = 1, f[0] = e.e = e.s = 0), e;
  if (n == 0 ? (f.length = l, a = 1, l--) : (f.length = l + 1, a = xr(10, ve - n), f[l] = i > 0 ? (c / xr(10, o - i) % xr(10, i) | 0) * a : 0), s)
    for (; ; )
      if (l == 0) {
        (f[0] += a) == Ie && (f[0] = 1, ++e.e);
        break;
      } else {
        if (f[l] += a, f[l] != Ie) break;
        f[l--] = 0, a = 1;
      }
  for (n = f.length; f[--n] === 0; ) f.pop();
  if (he && (e.e > ca || e.e < -ca))
    throw Error(wl + je(e));
  return e;
}
function xy(e, t) {
  var r, n, i, a, o, u, s, c, l, f, d = e.constructor, v = d.precision;
  if (!e.s || !t.s)
    return t.s ? t.s = -t.s : t = new d(e), he ? se(t, v) : t;
  if (s = e.d, f = t.d, n = t.e, c = e.e, s = s.slice(), o = c - n, o) {
    for (l = o < 0, l ? (r = s, o = -o, u = f.length) : (r = f, n = c, u = s.length), i = Math.max(Math.ceil(v / ve), u) + 2, o > i && (o = i, r.length = 1), r.reverse(), i = o; i--; ) r.push(0);
    r.reverse();
  } else {
    for (i = s.length, u = f.length, l = i < u, l && (u = i), i = 0; i < u; i++)
      if (s[i] != f[i]) {
        l = s[i] < f[i];
        break;
      }
    o = 0;
  }
  for (l && (r = s, s = f, f = r, t.s = -t.s), u = s.length, i = f.length - u; i > 0; --i) s[u++] = 0;
  for (i = f.length; i > o; ) {
    if (s[--i] < f[i]) {
      for (a = i; a && s[--a] === 0; ) s[a] = Ie - 1;
      --s[a], s[i] += Ie;
    }
    s[i] -= f[i];
  }
  for (; s[--u] === 0; ) s.pop();
  for (; s[0] === 0; s.shift()) --n;
  return s[0] ? (t.d = s, t.e = n, he ? se(t, v) : t) : new d(0);
}
function Nr(e, t, r) {
  var n, i = je(e), a = Tt(e.d), o = a.length;
  return t ? (r && (n = r - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + er(n) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (i < 0 ? "e" : "e+") + i) : i < 0 ? (a = "0." + er(-i - 1) + a, r && (n = r - o) > 0 && (a += er(n))) : i >= o ? (a += er(i + 1 - o), r && (n = r - i - 1) > 0 && (a = a + "." + er(n))) : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)), r && (n = r - o) > 0 && (i + 1 === o && (a += "."), a += er(n))), e.s < 0 ? "-" + a : a;
}
function Cv(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function wy(e) {
  var t, r, n;
  function i(a) {
    var o = this;
    if (!(o instanceof i)) return new i(a);
    if (o.constructor = i, a instanceof i) {
      o.s = a.s, o.e = a.e, o.d = (a = a.d) ? a.slice() : a;
      return;
    }
    if (typeof a == "number") {
      if (a * 0 !== 0)
        throw Error(Tr + a);
      if (a > 0)
        o.s = 1;
      else if (a < 0)
        a = -a, o.s = -1;
      else {
        o.s = 0, o.e = 0, o.d = [0];
        return;
      }
      if (a === ~~a && a < 1e7) {
        o.e = 0, o.d = [a];
        return;
      }
      return Tv(o, a.toString());
    } else if (typeof a != "string")
      throw Error(Tr + a);
    if (a.charCodeAt(0) === 45 ? (a = a.slice(1), o.s = -1) : o.s = 1, SS.test(a)) Tv(o, a);
    else throw Error(Tr + a);
  }
  if (i.prototype = $, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = wy, i.config = i.set = _S, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return i.config(e), i;
}
function _S(e) {
  if (!e || typeof e != "object")
    throw Error(Ot + "Object expected");
  var t, r, n, i = [
    "precision",
    1,
    un,
    "rounding",
    0,
    8,
    "toExpNeg",
    -1 / 0,
    0,
    "toExpPos",
    0,
    1 / 0
  ];
  for (t = 0; t < i.length; t += 3)
    if ((n = e[r = i[t]]) !== void 0)
      if (sn(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
      else throw Error(Tr + r + ": " + n);
  if ((n = e[r = "LN10"]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(Tr + r + ": " + n);
  return this;
}
var Ol = wy(AS);
lt = new Ol(1);
const ne = Ol;
var jS = (e) => e, Oy = {}, Py = (e) => e === Oy, kv = (e) => function t() {
  return arguments.length === 0 || arguments.length === 1 && Py(arguments.length <= 0 ? void 0 : arguments[0]) ? t : e(...arguments);
}, Ey = (e, t) => e === 1 ? t : kv(function() {
  for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
    n[i] = arguments[i];
  var a = n.filter((o) => o !== Oy).length;
  return a >= e ? t(...n) : Ey(e - a, kv(function() {
    for (var o = arguments.length, u = new Array(o), s = 0; s < o; s++)
      u[s] = arguments[s];
    var c = n.map((l) => Py(l) ? u.shift() : l);
    return t(...c, ...u);
  }));
}), qa = (e) => Ey(e.length, e), hs = (e, t) => {
  for (var r = [], n = e; n < t; ++n)
    r[n - e] = n;
  return r;
}, TS = qa((e, t) => Array.isArray(t) ? t.map(e) : Object.keys(t).map((r) => t[r]).map(e)), CS = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (!r.length)
    return jS;
  var i = r.reverse(), a = i[0], o = i.slice(1);
  return function() {
    return o.reduce((u, s) => s(u), a(...arguments));
  };
}, ms = (e) => Array.isArray(e) ? e.reverse() : e.split("").reverse().join(""), Ay = (e) => {
  var t = null, r = null;
  return function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return t && i.every((o, u) => {
      var s;
      return o === ((s = t) === null || s === void 0 ? void 0 : s[u]);
    }) || (t = i, r = e(...i)), r;
  };
};
function Sy(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new ne(e).abs().log(10).toNumber()) + 1, t;
}
function _y(e, t, r) {
  for (var n = new ne(e), i = 0, a = []; n.lt(t) && i < 1e5; )
    a.push(n.toNumber()), n = n.add(r), i++;
  return a;
}
qa((e, t, r) => {
  var n = +e, i = +t;
  return n + r * (i - n);
});
qa((e, t, r) => {
  var n = t - +e;
  return n = n || 1 / 0, (r - e) / n;
});
qa((e, t, r) => {
  var n = t - +e;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e) / n));
});
var jy = (e) => {
  var [t, r] = e, [n, i] = [t, r];
  return t > r && ([n, i] = [r, t]), [n, i];
}, Ty = (e, t, r) => {
  if (e.lte(0))
    return new ne(0);
  var n = Sy(e.toNumber()), i = new ne(10).pow(n), a = e.div(i), o = n !== 1 ? 0.05 : 0.1, u = new ne(Math.ceil(a.div(o).toNumber())).add(r).mul(o), s = u.mul(i);
  return t ? new ne(s.toNumber()) : new ne(Math.ceil(s.toNumber()));
}, kS = (e, t, r) => {
  var n = new ne(1), i = new ne(e);
  if (!i.isint() && r) {
    var a = Math.abs(e);
    a < 1 ? (n = new ne(10).pow(Sy(e) - 1), i = new ne(Math.floor(i.div(n).toNumber())).mul(n)) : a > 1 && (i = new ne(Math.floor(e)));
  } else e === 0 ? i = new ne(Math.floor((t - 1) / 2)) : r || (i = new ne(Math.floor(e)));
  var o = Math.floor((t - 1) / 2), u = CS(TS((s) => i.add(new ne(s - o).mul(n)).toNumber()), hs);
  return u(0, t);
}, Cy = function(t, r, n, i) {
  var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((r - t) / (n - 1)))
    return {
      step: new ne(0),
      tickMin: new ne(0),
      tickMax: new ne(0)
    };
  var o = Ty(new ne(r).sub(t).div(n - 1), i, a), u;
  t <= 0 && r >= 0 ? u = new ne(0) : (u = new ne(t).add(r).div(2), u = u.sub(new ne(u).mod(o)));
  var s = Math.ceil(u.sub(t).div(o).toNumber()), c = Math.ceil(new ne(r).sub(u).div(o).toNumber()), l = s + c + 1;
  return l > n ? Cy(t, r, n, i, a + 1) : (l < n && (c = r > 0 ? c + (n - l) : c, s = r > 0 ? s : s + (n - l)), {
    step: o,
    tickMin: u.sub(new ne(s).mul(o)),
    tickMax: u.add(new ne(c).mul(o))
  });
};
function DS(e) {
  var [t, r] = e, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, a = Math.max(n, 2), [o, u] = jy([t, r]);
  if (o === -1 / 0 || u === 1 / 0) {
    var s = u === 1 / 0 ? [o, ...hs(0, n - 1).map(() => 1 / 0)] : [...hs(0, n - 1).map(() => -1 / 0), u];
    return t > r ? ms(s) : s;
  }
  if (o === u)
    return kS(o, n, i);
  var {
    step: c,
    tickMin: l,
    tickMax: f
  } = Cy(o, u, a, i, 0), d = _y(l, f.add(new ne(0.1).mul(c)), c);
  return t > r ? ms(d) : d;
}
function NS(e, t) {
  var [r, n] = e, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, [a, o] = jy([r, n]);
  if (a === -1 / 0 || o === 1 / 0)
    return [r, n];
  if (a === o)
    return [a];
  var u = Math.max(t, 2), s = Ty(new ne(o).sub(a).div(u - 1), i, 0), c = [..._y(new ne(a), new ne(o), s), o];
  return i === !1 && (c = c.map((l) => Math.round(l))), r > n ? ms(c) : c;
}
var MS = Ay(DS), IS = Ay(NS), ky = (e) => e.rootProps.maxBarSize, RS = (e) => e.rootProps.barGap, Dy = (e) => e.rootProps.barCategoryGap, $S = (e) => e.rootProps.barSize, ni = (e) => e.rootProps.stackOffset, Pl = (e) => e.options.chartName, El = (e) => e.rootProps.syncId, Ny = (e) => e.rootProps.syncMethod, Al = (e) => e.options.eventEmitter, It = {
  allowDuplicatedCategory: !0,
  // if I set this to false then Tooltip synchronisation stops working in Radar, wtf
  angleAxisId: 0,
  reversed: !1,
  scale: "auto",
  tick: !0,
  type: "category"
}, ut = {
  allowDataOverflow: !1,
  allowDuplicatedCategory: !0,
  radiusAxisId: 0,
  scale: "auto",
  tick: !0,
  tickCount: 5,
  type: "number"
}, Ua = (e, t) => {
  if (!(!e || !t))
    return e != null && e.reversed ? [t[1], t[0]] : t;
}, LS = {
  allowDataOverflow: !1,
  allowDecimals: !1,
  allowDuplicatedCategory: !1,
  // defaultPolarAngleAxisProps.allowDuplicatedCategory has it set to true but the actual axis rendering ignores the prop because reasons,
  dataKey: void 0,
  domain: void 0,
  id: It.angleAxisId,
  includeHidden: !1,
  name: void 0,
  reversed: It.reversed,
  scale: It.scale,
  tick: It.tick,
  tickCount: void 0,
  ticks: void 0,
  type: It.type,
  unit: void 0
}, BS = {
  allowDataOverflow: ut.allowDataOverflow,
  allowDecimals: !1,
  allowDuplicatedCategory: ut.allowDuplicatedCategory,
  dataKey: void 0,
  domain: void 0,
  id: ut.radiusAxisId,
  includeHidden: !1,
  name: void 0,
  reversed: !1,
  scale: ut.scale,
  tick: ut.tick,
  tickCount: ut.tickCount,
  ticks: void 0,
  type: ut.type,
  unit: void 0
}, FS = {
  allowDataOverflow: !1,
  allowDecimals: !1,
  allowDuplicatedCategory: It.allowDuplicatedCategory,
  dataKey: void 0,
  domain: void 0,
  id: It.angleAxisId,
  includeHidden: !1,
  name: void 0,
  reversed: !1,
  scale: It.scale,
  tick: It.tick,
  tickCount: void 0,
  ticks: void 0,
  type: "number",
  unit: void 0
}, KS = {
  allowDataOverflow: ut.allowDataOverflow,
  allowDecimals: !1,
  allowDuplicatedCategory: ut.allowDuplicatedCategory,
  dataKey: void 0,
  domain: void 0,
  id: ut.radiusAxisId,
  includeHidden: !1,
  name: void 0,
  reversed: !1,
  scale: ut.scale,
  tick: ut.tick,
  tickCount: ut.tickCount,
  ticks: void 0,
  type: "category",
  unit: void 0
}, Sl = (e, t) => e.polarAxis.angleAxis[t] != null ? e.polarAxis.angleAxis[t] : e.layout.layoutType === "radial" ? FS : LS, _l = (e, t) => e.polarAxis.radiusAxis[t] != null ? e.polarAxis.radiusAxis[t] : e.layout.layoutType === "radial" ? KS : BS, Va = (e) => e.polarOptions, jl = S([Yt, Ht, ke], pm), My = S([Va, jl], (e, t) => {
  if (e != null)
    return Ve(e.innerRadius, t, 0);
}), Iy = S([Va, jl], (e, t) => {
  if (e != null)
    return Ve(e.outerRadius, t, t * 0.8);
}), zS = (e) => {
  if (e == null)
    return [0, 0];
  var {
    startAngle: t,
    endAngle: r
  } = e;
  return [t, r];
}, Ry = S([Va], zS);
S([Sl, Ry], Ua);
var $y = S([jl, My, Iy], (e, t, r) => {
  if (!(e == null || t == null || r == null))
    return [t, r];
});
S([_l, $y], Ua);
var Ly = S([Z, Va, My, Iy, Yt, Ht], (e, t, r, n, i, a) => {
  if (!(e !== "centric" && e !== "radial" || t == null || r == null || n == null)) {
    var {
      cx: o,
      cy: u,
      startAngle: s,
      endAngle: c
    } = t;
    return {
      cx: Ve(o, i, i / 2),
      cy: Ve(u, a, a / 2),
      innerRadius: r,
      outerRadius: n,
      startAngle: s,
      endAngle: c,
      clockWise: !1
      // this property look useful, why not use it?
    };
  }
}), ye = (e, t) => t, ii = (e, t, r) => r;
function Tl(e) {
  return e?.id;
}
var Ne = (e) => {
  var t = Z(e);
  return t === "horizontal" ? "xAxis" : t === "vertical" ? "yAxis" : t === "centric" ? "angleAxis" : "radiusAxis";
}, ln = (e) => e.tooltip.settings.axisId, Le = (e) => {
  var t = Ne(e), r = ln(e);
  return ai(e, t, r);
}, By = S([Le], (e) => e?.dataKey);
function Fy(e, t, r) {
  var {
    chartData: n = []
  } = t, {
    allowDuplicatedCategory: i,
    dataKey: a
  } = r, o = /* @__PURE__ */ new Map();
  return e.forEach((u) => {
    var s, c = (s = u.data) !== null && s !== void 0 ? s : n;
    if (!(c == null || c.length === 0)) {
      var l = Tl(u);
      c.forEach((f, d) => {
        var v = a == null || i ? d : String(fe(f, a, null)), h = fe(f, u.dataKey, 0), p;
        o.has(v) ? p = o.get(v) : p = {}, Object.assign(p, {
          [l]: h
        }), o.set(v, p);
      });
    }
  }), Array.from(o.values());
}
function Ya(e) {
  return e.stackId != null && e.dataKey != null;
}
function Dv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function fa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Dv(Object(r), !0).forEach(function(n) {
      WS(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Dv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function WS(e, t, r) {
  return (t = qS(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function qS(e) {
  var t = US(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function US(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ys = [0, "auto"], at = {
  allowDataOverflow: !1,
  allowDecimals: !0,
  allowDuplicatedCategory: !0,
  angle: 0,
  dataKey: void 0,
  domain: void 0,
  height: 30,
  hide: !0,
  id: 0,
  includeHidden: !1,
  interval: "preserveEnd",
  minTickGap: 5,
  mirror: !1,
  name: void 0,
  orientation: "bottom",
  padding: {
    left: 0,
    right: 0
  },
  reversed: !1,
  scale: "auto",
  tick: !0,
  tickCount: 5,
  tickFormatter: void 0,
  ticks: void 0,
  type: "category",
  unit: void 0
}, Ky = (e, t) => e.cartesianAxis.xAxis[t], Xt = (e, t) => {
  var r = Ky(e, t);
  return r ?? at;
}, ot = {
  allowDataOverflow: !1,
  allowDecimals: !0,
  allowDuplicatedCategory: !0,
  angle: 0,
  dataKey: void 0,
  domain: ys,
  hide: !0,
  id: 0,
  includeHidden: !1,
  interval: "preserveEnd",
  minTickGap: 5,
  mirror: !1,
  name: void 0,
  orientation: "left",
  padding: {
    top: 0,
    bottom: 0
  },
  reversed: !1,
  scale: "auto",
  tick: !0,
  tickCount: 5,
  tickFormatter: void 0,
  ticks: void 0,
  type: "number",
  unit: void 0,
  width: Xn
}, zy = (e, t) => e.cartesianAxis.yAxis[t], Zt = (e, t) => {
  var r = zy(e, t);
  return r ?? ot;
}, VS = {
  domain: [0, "auto"],
  includeHidden: !1,
  reversed: !1,
  allowDataOverflow: !1,
  allowDuplicatedCategory: !1,
  dataKey: void 0,
  id: 0,
  name: "",
  range: [64, 64],
  scale: "auto",
  type: "number",
  unit: ""
}, Cl = (e, t) => {
  var r = e.cartesianAxis.zAxis[t];
  return r ?? VS;
}, Ae = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return Xt(e, r);
    case "yAxis":
      return Zt(e, r);
    case "zAxis":
      return Cl(e, r);
    case "angleAxis":
      return Sl(e, r);
    case "radiusAxis":
      return _l(e, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, YS = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return Xt(e, r);
    case "yAxis":
      return Zt(e, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, ai = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return Xt(e, r);
    case "yAxis":
      return Zt(e, r);
    case "angleAxis":
      return Sl(e, r);
    case "radiusAxis":
      return _l(e, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, Wy = (e) => e.graphicalItems.cartesianItems.some((t) => t.type === "bar") || e.graphicalItems.polarItems.some((t) => t.type === "radialBar");
function kl(e, t) {
  return (r) => {
    switch (e) {
      case "xAxis":
        return "xAxisId" in r && r.xAxisId === t;
      case "yAxis":
        return "yAxisId" in r && r.yAxisId === t;
      case "zAxis":
        return "zAxisId" in r && r.zAxisId === t;
      case "angleAxis":
        return "angleAxisId" in r && r.angleAxisId === t;
      case "radiusAxis":
        return "radiusAxisId" in r && r.radiusAxisId === t;
      default:
        return !1;
    }
  };
}
var Ha = (e) => e.graphicalItems.cartesianItems, HS = S([ye, ii], kl), Dl = (e, t, r) => e.filter(r).filter((n) => t?.includeHidden === !0 ? !0 : !n.hide), oi = S([Ha, Ae, HS], Dl), qy = S([oi], (e) => e.filter((t) => t.type === "area" || t.type === "bar").filter(Ya)), Uy = (e) => e.filter((t) => !("stackId" in t) || t.stackId === void 0), Vy = S([oi], Uy), Nl = (e) => e.map((t) => t.data).filter(Boolean).flat(1), GS = S([oi], Nl), Ml = (e, t) => {
  var {
    chartData: r = [],
    dataStartIndex: n,
    dataEndIndex: i
  } = t;
  return e.length > 0 ? e : r.slice(n, i + 1);
}, Il = S([GS, Wa], Ml), Rl = (e, t, r) => t?.dataKey != null ? e.map((n) => ({
  value: fe(n, t.dataKey)
})) : r.length > 0 ? r.map((n) => n.dataKey).flatMap((n) => e.map((i) => ({
  value: fe(i, n)
}))) : e.map((n) => ({
  value: n
})), Ga = S([Il, Ae, oi], Rl);
function Yy(e, t) {
  switch (e) {
    case "xAxis":
      return t.direction === "x";
    case "yAxis":
      return t.direction === "y";
    default:
      return !1;
  }
}
function Lr(e) {
  return e.filter((t) => kt(t) || t instanceof Date).map(Number).filter((t) => ct(t) === !1);
}
function XS(e, t, r) {
  return !r || typeof t != "number" || ct(t) ? [] : r.length ? Lr(r.flatMap((n) => {
    var i = fe(e, n.dataKey), a, o;
    if (Array.isArray(i) ? [a, o] = i : a = o = i, !(!dt(a) || !dt(o)))
      return [t - a, t + o];
  })) : [];
}
var ZS = S([qy, Wa, Le], Fy), Hy = (e, t, r) => {
  var n = {}, i = t.reduce((a, o) => (o.stackId == null || (a[o.stackId] == null && (a[o.stackId] = []), a[o.stackId].push(o)), a), n);
  return Object.fromEntries(Object.entries(i).map((a) => {
    var [o, u] = a, s = u.map(Tl);
    return [o, {
      // @ts-expect-error getStackedData requires that the input is array of objects, Recharts does not test for that
      stackedData: p1(e, s, r),
      graphicalItems: u
    }];
  }));
}, gs = S([ZS, qy, ni], Hy), Gy = (e, t, r) => {
  var {
    dataStartIndex: n,
    dataEndIndex: i
  } = t;
  if (r !== "zAxis") {
    var a = b1(e, n, i);
    if (!(a != null && a[0] === 0 && a[1] === 0))
      return a;
  }
}, JS = S([gs, hr, ye], Gy), Xy = (e, t, r, n, i) => r.length > 0 ? e.flatMap((a) => r.flatMap((o) => {
  var u, s, c = (u = n[o.id]) === null || u === void 0 ? void 0 : u.filter((f) => Yy(i, f)), l = fe(a, (s = t.dataKey) !== null && s !== void 0 ? s : o.dataKey);
  return {
    value: l,
    errorDomain: XS(a, l, c)
  };
})).filter(Boolean) : t?.dataKey != null ? e.map((a) => ({
  value: fe(a, t.dataKey),
  errorDomain: []
})) : e.map((a) => ({
  value: a,
  errorDomain: []
})), Xa = (e) => e.errorBars, Zy = (e, t, r) => e.flatMap((n) => t[n.id]).filter(Boolean).filter((n) => Yy(r, n));
S([Vy, Xa, ye], Zy);
var QS = S([Il, Ae, Vy, Xa, ye], Xy);
function e_(e) {
  var {
    value: t
  } = e;
  if (kt(t) || t instanceof Date)
    return t;
}
var Nv = (e) => {
  var t = e.flatMap((n) => [n.value, n.errorDomain]).flat(1), r = Lr(t);
  if (r.length !== 0)
    return [Math.min(...r), Math.max(...r)];
}, t_ = (e, t, r) => {
  var n = e.map(e_).filter((i) => i != null);
  return r && (t.dataKey == null || t.allowDuplicatedCategory && nh(n)) ? Rm(0, e.length) : t.allowDuplicatedCategory ? n : Array.from(new Set(n));
}, $l = (e) => {
  var t;
  if (e == null || !("domain" in e))
    return ys;
  if (e.domain != null)
    return e.domain;
  if (e.ticks != null) {
    if (e.type === "number") {
      var r = Lr(e.ticks);
      return [Math.min(...r), Math.max(...r)];
    }
    if (e.type === "category")
      return e.ticks.map(String);
  }
  return (t = e?.domain) !== null && t !== void 0 ? t : ys;
}, da = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var i = r.filter(Boolean);
  if (i.length !== 0) {
    var a = i.flat(), o = Math.min(...a), u = Math.max(...a);
    return [o, u];
  }
}, Jy = (e) => e.referenceElements.dots, cn = (e, t, r) => e.filter((n) => n.ifOverflow === "extendDomain").filter((n) => t === "xAxis" ? n.xAxisId === r : n.yAxisId === r), r_ = S([Jy, ye, ii], cn), Qy = (e) => e.referenceElements.areas, n_ = S([Qy, ye, ii], cn), eg = (e) => e.referenceElements.lines, i_ = S([eg, ye, ii], cn), tg = (e, t) => {
  var r = Lr(e.map((n) => t === "xAxis" ? n.x : n.y));
  if (r.length !== 0)
    return [Math.min(...r), Math.max(...r)];
}, a_ = S(r_, ye, tg), rg = (e, t) => {
  var r = Lr(e.flatMap((n) => [t === "xAxis" ? n.x1 : n.y1, t === "xAxis" ? n.x2 : n.y2]));
  if (r.length !== 0)
    return [Math.min(...r), Math.max(...r)];
}, o_ = S([n_, ye], rg), ng = (e, t) => {
  var r = Lr(e.map((n) => t === "xAxis" ? n.x : n.y));
  if (r.length !== 0)
    return [Math.min(...r), Math.max(...r)];
}, u_ = S(i_, ye, ng), s_ = S(a_, u_, o_, (e, t, r) => da(e, r, t)), ig = S([Ae], $l), Ll = (e, t, r, n, i, a, o) => {
  var u = PS(t, e.allowDataOverflow);
  if (u != null)
    return u;
  var s = a === "vertical" && o === "xAxis" || a === "horizontal" && o === "yAxis", c = s ? da(r, i, Nv(n)) : da(i, Nv(n));
  return ES(t, c, e.allowDataOverflow);
}, l_ = S([Ae, ig, JS, QS, s_, Z, ye], Ll), c_ = [0, 1], Bl = (e, t, r, n, i, a, o) => {
  if (!((e == null || r == null || r.length === 0) && o === void 0)) {
    var {
      dataKey: u,
      type: s
    } = e, c = fr(t, a);
    return c && u == null ? Rm(0, r.length) : s === "category" ? t_(n, e, c) : i === "expand" ? c_ : o;
  }
}, Fl = S([Ae, Z, Il, Ga, ni, ye, l_], Bl), ag = (e, t, r, n, i) => {
  if (e != null) {
    var {
      scale: a,
      type: o
    } = e;
    if (a === "auto")
      return t === "radial" && i === "radiusAxis" ? "band" : t === "radial" && i === "angleAxis" ? "linear" : o === "category" && n && (n.indexOf("LineChart") >= 0 || n.indexOf("AreaChart") >= 0 || n.indexOf("ComposedChart") >= 0 && !r) ? "point" : o === "category" ? "band" : "linear";
    if (typeof a == "string") {
      var u = "scale".concat(Un(a));
      return u in Cn ? u : "point";
    }
  }
}, fn = S([Ae, Z, Wy, Pl, ye], ag);
function f_(e) {
  if (e != null) {
    if (e in Cn)
      return Cn[e]();
    var t = "scale".concat(Un(e));
    if (t in Cn)
      return Cn[t]();
  }
}
function Kl(e, t, r, n) {
  if (!(r == null || n == null)) {
    if (typeof e.scale == "function")
      return e.scale.copy().domain(r).range(n);
    var i = f_(t);
    if (i != null) {
      var a = i.domain(r).range(n);
      return l1(a), a;
    }
  }
}
var zl = (e, t, r) => {
  var n = $l(t);
  if (!(r !== "auto" && r !== "linear")) {
    if (t != null && t.tickCount && Array.isArray(n) && (n[0] === "auto" || n[1] === "auto") && Qr(e))
      return MS(e, t.tickCount, t.allowDecimals);
    if (t != null && t.tickCount && t.type === "number" && Qr(e))
      return IS(e, t.tickCount, t.allowDecimals);
  }
}, Wl = S([Fl, ai, fn], zl), ql = (e, t, r, n) => {
  if (
    /*
     * Angle axis for some reason uses nice ticks when rendering axis tick labels,
     * but doesn't use nice ticks for extending domain like all the other axes do.
     * Not really sure why? Is there a good reason,
     * or is it just because someone added support for nice ticks to the other axes and forgot this one?
     */
    n !== "angleAxis" && e?.type === "number" && Qr(t) && Array.isArray(r) && r.length > 0
  ) {
    var i = t[0], a = r[0], o = t[1], u = r[r.length - 1];
    return [Math.min(i, a), Math.max(o, u)];
  }
  return t;
}, d_ = S([Ae, Fl, Wl, ye], ql), v_ = S(Ga, Ae, (e, t) => {
  if (!(!t || t.type !== "number")) {
    var r = 1 / 0, n = Array.from(Lr(e.map((u) => u.value))).sort((u, s) => u - s);
    if (n.length < 2)
      return 1 / 0;
    var i = n[n.length - 1] - n[0];
    if (i === 0)
      return 1 / 0;
    for (var a = 0; a < n.length - 1; a++) {
      var o = n[a + 1] - n[a];
      r = Math.min(r, o);
    }
    return r / i;
  }
}), og = S(v_, Z, Dy, ke, (e, t, r, n) => n, (e, t, r, n, i) => {
  if (!dt(e))
    return 0;
  var a = t === "vertical" ? n.height : n.width;
  if (i === "gap")
    return e * a / 2;
  if (i === "no-gap") {
    var o = Ve(r, e * a), u = e * a / 2;
    return u - o - (u - o) / a * o;
  }
  return 0;
}), p_ = (e, t) => {
  var r = Xt(e, t);
  return r == null || typeof r.padding != "string" ? 0 : og(e, "xAxis", t, r.padding);
}, h_ = (e, t) => {
  var r = Zt(e, t);
  return r == null || typeof r.padding != "string" ? 0 : og(e, "yAxis", t, r.padding);
}, m_ = S(Xt, p_, (e, t) => {
  var r, n;
  if (e == null)
    return {
      left: 0,
      right: 0
    };
  var {
    padding: i
  } = e;
  return typeof i == "string" ? {
    left: t,
    right: t
  } : {
    left: ((r = i.left) !== null && r !== void 0 ? r : 0) + t,
    right: ((n = i.right) !== null && n !== void 0 ? n : 0) + t
  };
}), y_ = S(Zt, h_, (e, t) => {
  var r, n;
  if (e == null)
    return {
      top: 0,
      bottom: 0
    };
  var {
    padding: i
  } = e;
  return typeof i == "string" ? {
    top: t,
    bottom: t
  } : {
    top: ((r = i.top) !== null && r !== void 0 ? r : 0) + t,
    bottom: ((n = i.bottom) !== null && n !== void 0 ? n : 0) + t
  };
}), g_ = S([ke, m_, Ia, Ma, (e, t, r) => r], (e, t, r, n, i) => {
  var {
    padding: a
  } = n;
  return i ? [a.left, r.width - a.right] : [e.left + t.left, e.left + e.width - t.right];
}), b_ = S([ke, Z, y_, Ia, Ma, (e, t, r) => r], (e, t, r, n, i, a) => {
  var {
    padding: o
  } = i;
  return a ? [n.height - o.bottom, o.top] : t === "horizontal" ? [e.top + e.height - r.bottom, e.top + r.top] : [e.top + r.top, e.top + e.height - r.bottom];
}), ui = (e, t, r, n) => {
  var i;
  switch (t) {
    case "xAxis":
      return g_(e, r, n);
    case "yAxis":
      return b_(e, r, n);
    case "zAxis":
      return (i = Cl(e, r)) === null || i === void 0 ? void 0 : i.range;
    case "angleAxis":
      return Ry(e);
    case "radiusAxis":
      return $y(e, r);
    default:
      return;
  }
}, ug = S([Ae, ui], Ua), dn = S([Ae, fn, d_, ug], Kl);
S([oi, Xa, ye], Zy);
function sg(e, t) {
  return e.id < t.id ? -1 : e.id > t.id ? 1 : 0;
}
var Za = (e, t) => t, Ja = (e, t, r) => r, x_ = S(Da, Za, Ja, (e, t, r) => e.filter((n) => n.orientation === t).filter((n) => n.mirror === r).sort(sg)), w_ = S(Na, Za, Ja, (e, t, r) => e.filter((n) => n.orientation === t).filter((n) => n.mirror === r).sort(sg)), lg = (e, t) => ({
  width: e.width,
  height: t.height
}), O_ = (e, t) => {
  var r = typeof t.width == "number" ? t.width : Xn;
  return {
    width: r,
    height: e.height
  };
}, cg = S(ke, Xt, lg), P_ = (e, t, r) => {
  switch (t) {
    case "top":
      return e.top;
    case "bottom":
      return r - e.bottom;
    default:
      return 0;
  }
}, E_ = (e, t, r) => {
  switch (t) {
    case "left":
      return e.left;
    case "right":
      return r - e.right;
    default:
      return 0;
  }
}, A_ = S(Ht, ke, x_, Za, Ja, (e, t, r, n, i) => {
  var a = {}, o;
  return r.forEach((u) => {
    var s = lg(t, u);
    o == null && (o = P_(t, n, e));
    var c = n === "top" && !i || n === "bottom" && i;
    a[u.id] = o - Number(c) * s.height, o += (c ? -1 : 1) * s.height;
  }), a;
}), S_ = S(Yt, ke, w_, Za, Ja, (e, t, r, n, i) => {
  var a = {}, o;
  return r.forEach((u) => {
    var s = O_(t, u);
    o == null && (o = E_(t, n, e));
    var c = n === "left" && !i || n === "right" && i;
    a[u.id] = o - Number(c) * s.width, o += (c ? -1 : 1) * s.width;
  }), a;
}), __ = (e, t) => {
  var r = Xt(e, t);
  if (r != null)
    return A_(e, r.orientation, r.mirror);
}, j_ = S([ke, Xt, __, (e, t) => t], (e, t, r, n) => {
  if (t != null) {
    var i = r?.[n];
    return i == null ? {
      x: e.left,
      y: 0
    } : {
      x: e.left,
      y: i
    };
  }
}), T_ = (e, t) => {
  var r = Zt(e, t);
  if (r != null)
    return S_(e, r.orientation, r.mirror);
}, C_ = S([ke, Zt, T_, (e, t) => t], (e, t, r, n) => {
  if (t != null) {
    var i = r?.[n];
    return i == null ? {
      x: 0,
      y: e.top
    } : {
      x: i,
      y: e.top
    };
  }
}), fg = S(ke, Zt, (e, t) => {
  var r = typeof t.width == "number" ? t.width : Xn;
  return {
    width: r,
    height: e.height
  };
}), Mv = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return cg(e, r).width;
    case "yAxis":
      return fg(e, r).height;
    default:
      return;
  }
}, dg = (e, t, r, n) => {
  if (r != null) {
    var {
      allowDuplicatedCategory: i,
      type: a,
      dataKey: o
    } = r, u = fr(e, n), s = t.map((c) => c.value);
    if (o && u && a === "category" && i && nh(s))
      return s;
  }
}, Ul = S([Z, Ga, Ae, ye], dg), vg = (e, t, r, n) => {
  if (!(r == null || r.dataKey == null)) {
    var {
      type: i,
      scale: a
    } = r, o = fr(e, n);
    if (o && (i === "number" || a !== "auto"))
      return t.map((u) => u.value);
  }
}, Vl = S([Z, Ga, ai, ye], vg), Iv = S([Z, YS, fn, dn, Ul, Vl, ui, Wl, ye], (e, t, r, n, i, a, o, u, s) => {
  if (t == null)
    return null;
  var c = fr(e, s);
  return {
    angle: t.angle,
    interval: t.interval,
    minTickGap: t.minTickGap,
    orientation: t.orientation,
    tick: t.tick,
    tickCount: t.tickCount,
    tickFormatter: t.tickFormatter,
    ticks: t.ticks,
    type: t.type,
    unit: t.unit,
    axisType: s,
    categoricalDomain: a,
    duplicateDomain: i,
    isCategorical: c,
    niceTicks: u,
    range: o,
    realScaleType: r,
    scale: n
  };
}), k_ = (e, t, r, n, i, a, o, u, s) => {
  if (!(t == null || n == null)) {
    var c = fr(e, s), {
      type: l,
      ticks: f,
      tickCount: d
    } = t, v = r === "scaleBand" && typeof n.bandwidth == "function" ? n.bandwidth() / 2 : 2, h = l === "category" && n.bandwidth ? n.bandwidth() / v : 0;
    h = s === "angleAxis" && a != null && a.length >= 2 ? Re(a[0] - a[1]) * 2 * h : h;
    var p = f || i;
    if (p) {
      var m = p.map((y, g) => {
        var b = o ? o.indexOf(y) : y;
        return {
          index: g,
          // If the scaleContent is not a number, the coordinate will be NaN.
          // That could be the case for example with a PointScale and a string as domain.
          coordinate: n(b) + h,
          value: y,
          offset: h
        };
      });
      return m.filter((y) => !ct(y.coordinate));
    }
    return c && u ? u.map((y, g) => ({
      coordinate: n(y) + h,
      value: y,
      index: g,
      offset: h
    })) : n.ticks ? n.ticks(d).map((y) => ({
      coordinate: n(y) + h,
      value: y,
      offset: h
    })) : n.domain().map((y, g) => ({
      coordinate: n(y) + h,
      value: o ? o[y] : y,
      index: g,
      offset: h
    }));
  }
}, pg = S([Z, ai, fn, dn, Wl, ui, Ul, Vl, ye], k_), D_ = (e, t, r, n, i, a, o) => {
  if (!(t == null || r == null || n == null || n[0] === n[1])) {
    var u = fr(e, o), {
      tickCount: s
    } = t, c = 0;
    return c = o === "angleAxis" && n?.length >= 2 ? Re(n[0] - n[1]) * 2 * c : c, u && a ? a.map((l, f) => ({
      coordinate: r(l) + c,
      value: l,
      index: f,
      offset: c
    })) : r.ticks ? r.ticks(s).map((l) => ({
      coordinate: r(l) + c,
      value: l,
      offset: c
    })) : r.domain().map((l, f) => ({
      coordinate: r(l) + c,
      value: i ? i[l] : l,
      index: f,
      offset: c
    }));
  }
}, ir = S([Z, ai, dn, ui, Ul, Vl, ye], D_), ar = S(Ae, dn, (e, t) => {
  if (!(e == null || t == null))
    return fa(fa({}, e), {}, {
      scale: t
    });
}), N_ = S([Ae, fn, Fl, ug], Kl);
S((e, t, r) => Cl(e, r), N_, (e, t) => {
  if (!(e == null || t == null))
    return fa(fa({}, e), {}, {
      scale: t
    });
});
var M_ = S([Z, Da, Na], (e, t, r) => {
  switch (e) {
    case "horizontal":
      return t.some((n) => n.reversed) ? "right-to-left" : "left-to-right";
    case "vertical":
      return r.some((n) => n.reversed) ? "bottom-to-top" : "top-to-bottom";
    // TODO: make this better. For now, right arrow triggers "forward", left arrow "back"
    // however, the tooltip moves an unintuitive direction because of how the indices are rendered
    case "centric":
    case "radial":
      return "left-to-right";
    default:
      return;
  }
}), hg = (e) => e.options.defaultTooltipEventType, mg = (e) => e.options.validateTooltipEventTypes;
function yg(e, t, r) {
  if (e == null)
    return t;
  var n = e ? "axis" : "item";
  return r == null ? t : r.includes(n) ? n : t;
}
function Yl(e, t) {
  var r = hg(e), n = mg(e);
  return yg(t, r, n);
}
function I_(e) {
  return F((t) => Yl(t, e));
}
var gg = (e, t) => {
  var r, n = Number(t);
  if (!(ct(n) || t == null))
    return n >= 0 ? e == null || (r = e[n]) === null || r === void 0 ? void 0 : r.value : void 0;
}, R_ = (e) => e.tooltip.settings, rr = {
  active: !1,
  index: null,
  dataKey: void 0,
  coordinate: void 0
}, $_ = {
  itemInteraction: {
    click: rr,
    hover: rr
  },
  axisInteraction: {
    click: rr,
    hover: rr
  },
  keyboardInteraction: rr,
  syncInteraction: {
    active: !1,
    index: null,
    dataKey: void 0,
    label: void 0,
    coordinate: void 0
  },
  tooltipItemPayloads: [],
  settings: {
    shared: void 0,
    trigger: "hover",
    axisId: 0,
    active: !1,
    defaultIndex: void 0
  }
}, bg = pt({
  name: "tooltip",
  initialState: $_,
  reducers: {
    addTooltipEntrySettings(e, t) {
      e.tooltipItemPayloads.push(t.payload);
    },
    removeTooltipEntrySettings(e, t) {
      var r = Bt(e).tooltipItemPayloads.indexOf(t.payload);
      r > -1 && e.tooltipItemPayloads.splice(r, 1);
    },
    setTooltipSettingsState(e, t) {
      e.settings = t.payload;
    },
    setActiveMouseOverItemIndex(e, t) {
      e.syncInteraction.active = !1, e.keyboardInteraction.active = !1, e.itemInteraction.hover.active = !0, e.itemInteraction.hover.index = t.payload.activeIndex, e.itemInteraction.hover.dataKey = t.payload.activeDataKey, e.itemInteraction.hover.coordinate = t.payload.activeCoordinate;
    },
    mouseLeaveChart(e) {
      e.itemInteraction.hover.active = !1, e.axisInteraction.hover.active = !1;
    },
    mouseLeaveItem(e) {
      e.itemInteraction.hover.active = !1;
    },
    setActiveClickItemIndex(e, t) {
      e.syncInteraction.active = !1, e.itemInteraction.click.active = !0, e.keyboardInteraction.active = !1, e.itemInteraction.click.index = t.payload.activeIndex, e.itemInteraction.click.dataKey = t.payload.activeDataKey, e.itemInteraction.click.coordinate = t.payload.activeCoordinate;
    },
    setMouseOverAxisIndex(e, t) {
      e.syncInteraction.active = !1, e.axisInteraction.hover.active = !0, e.keyboardInteraction.active = !1, e.axisInteraction.hover.index = t.payload.activeIndex, e.axisInteraction.hover.dataKey = t.payload.activeDataKey, e.axisInteraction.hover.coordinate = t.payload.activeCoordinate;
    },
    setMouseClickAxisIndex(e, t) {
      e.syncInteraction.active = !1, e.keyboardInteraction.active = !1, e.axisInteraction.click.active = !0, e.axisInteraction.click.index = t.payload.activeIndex, e.axisInteraction.click.dataKey = t.payload.activeDataKey, e.axisInteraction.click.coordinate = t.payload.activeCoordinate;
    },
    setSyncInteraction(e, t) {
      e.syncInteraction = t.payload;
    },
    setKeyboardInteraction(e, t) {
      e.keyboardInteraction.active = t.payload.active, e.keyboardInteraction.index = t.payload.activeIndex, e.keyboardInteraction.coordinate = t.payload.activeCoordinate, e.keyboardInteraction.dataKey = t.payload.activeDataKey;
    }
  }
}), {
  addTooltipEntrySettings: L_,
  removeTooltipEntrySettings: B_,
  setTooltipSettingsState: F_,
  setActiveMouseOverItemIndex: xg,
  mouseLeaveItem: K_,
  mouseLeaveChart: wg,
  setActiveClickItemIndex: z_,
  setMouseOverAxisIndex: Og,
  setMouseClickAxisIndex: W_,
  setSyncInteraction: bs,
  setKeyboardInteraction: xs
} = bg.actions, q_ = bg.reducer;
function Rv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Di(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rv(Object(r), !0).forEach(function(n) {
      U_(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function U_(e, t, r) {
  return (t = V_(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function V_(e) {
  var t = Y_(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Y_(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function H_(e, t, r) {
  return t === "axis" ? r === "click" ? e.axisInteraction.click : e.axisInteraction.hover : r === "click" ? e.itemInteraction.click : e.itemInteraction.hover;
}
function G_(e) {
  return e.index != null;
}
var Pg = (e, t, r, n) => {
  if (t == null)
    return rr;
  var i = H_(e, t, r);
  if (i == null)
    return rr;
  if (i.active)
    return i;
  if (e.keyboardInteraction.active)
    return e.keyboardInteraction;
  if (e.syncInteraction.active && e.syncInteraction.index != null)
    return e.syncInteraction;
  var a = e.settings.active === !0;
  if (G_(i)) {
    if (a)
      return Di(Di({}, i), {}, {
        active: !0
      });
  } else if (n != null)
    return {
      active: !0,
      coordinate: void 0,
      dataKey: void 0,
      index: n
    };
  return Di(Di({}, rr), {}, {
    coordinate: i.coordinate
  });
}, Hl = (e, t) => {
  var r = e?.index;
  if (r == null)
    return null;
  var n = Number(r);
  if (!dt(n))
    return r;
  var i = 0, a = 1 / 0;
  return t.length > 0 && (a = t.length - 1), String(Math.max(i, Math.min(n, a)));
}, Eg = (e, t, r, n, i, a, o, u) => {
  if (!(a == null || u == null)) {
    var s = o[0], c = s == null ? void 0 : u(s.positions, a);
    if (c != null)
      return c;
    var l = i?.[Number(a)];
    if (l)
      switch (r) {
        case "horizontal":
          return {
            x: l.coordinate,
            y: (n.top + t) / 2
          };
        default:
          return {
            x: (n.left + e) / 2,
            y: l.coordinate
          };
      }
  }
}, Ag = (e, t, r, n) => {
  if (t === "axis")
    return e.tooltipItemPayloads;
  if (e.tooltipItemPayloads.length === 0)
    return [];
  var i;
  return r === "hover" ? i = e.itemInteraction.hover.dataKey : i = e.itemInteraction.click.dataKey, i == null && n != null ? [e.tooltipItemPayloads[0]] : e.tooltipItemPayloads.filter((a) => {
    var o;
    return ((o = a.settings) === null || o === void 0 ? void 0 : o.dataKey) === i;
  });
}, si = (e) => e.options.tooltipPayloadSearcher, vn = (e) => e.tooltip;
function $v(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Lv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $v(Object(r), !0).forEach(function(n) {
      X_(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $v(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function X_(e, t, r) {
  return (t = Z_(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Z_(e) {
  var t = J_(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function J_(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Q_(e, t) {
  return e ?? t;
}
var Sg = (e, t, r, n, i, a, o) => {
  if (!(t == null || a == null)) {
    var {
      chartData: u,
      computedData: s,
      dataStartIndex: c,
      dataEndIndex: l
    } = r, f = [];
    return e.reduce((d, v) => {
      var h, {
        dataDefinedOnItem: p,
        settings: m
      } = v, y = Q_(p, u), g = Array.isArray(y) ? hm(y, c, l) : y, b = (h = m?.dataKey) !== null && h !== void 0 ? h : n, E = m?.nameKey, P;
      if (n && Array.isArray(g) && /*
       * findEntryInArray won't work for Scatter because Scatter provides an array of arrays
       * as tooltip payloads and findEntryInArray is not prepared to handle that.
       * Sad but also ScatterChart only allows 'item' tooltipEventType
       * and also this is only a problem if there are multiple Scatters and each has its own data array
       * so let's fix that some other time.
       */
      !Array.isArray(g[0]) && /*
       * If the tooltipEventType is 'axis', we should search for the dataKey in the sliced data
       * because thanks to allowDuplicatedCategory=false, the order of elements in the array
       * no longer matches the order of elements in the original data
       * and so we need to search by the active dataKey + label rather than by index.
       *
       * The same happens if multiple graphical items are present in the chart
       * and each of them has its own data array. Those arrays get concatenated
       * and again the tooltip index no longer matches the original data.
       *
       * On the other hand the tooltipEventType 'item' should always search by index
       * because we get the index from interacting over the individual elements
       * which is always accurate, irrespective of the allowDuplicatedCategory setting.
       */
      o === "axis" ? P = ih(g, n, i) : P = a(g, t, s, E), Array.isArray(P))
        P.forEach((A) => {
          var j = Lv(Lv({}, m), {}, {
            name: A.name,
            unit: A.unit,
            // color and fill are erased to keep 100% the identical behaviour to recharts 2.x - but there's nothing stopping us from returning them here. It's technically a breaking change.
            color: void 0,
            // color and fill are erased to keep 100% the identical behaviour to recharts 2.x - but there's nothing stopping us from returning them here. It's technically a breaking change.
            fill: void 0
          });
          d.push(Od({
            tooltipEntrySettings: j,
            dataKey: A.dataKey,
            payload: A.payload,
            // @ts-expect-error getValueByDataKey does not validate the output type
            value: fe(A.payload, A.dataKey),
            name: A.name
          }));
        });
      else {
        var O;
        d.push(Od({
          tooltipEntrySettings: m,
          dataKey: b,
          payload: P,
          // @ts-expect-error getValueByDataKey does not validate the output type
          value: fe(P, b),
          // @ts-expect-error getValueByDataKey does not validate the output type
          name: (O = fe(P, E)) !== null && O !== void 0 ? O : m?.name
        }));
      }
      return d;
    }, f);
  }
}, Gl = S([Le, Z, Wy, Pl, Ne], ag), ej = S([(e) => e.graphicalItems.cartesianItems, (e) => e.graphicalItems.polarItems], (e, t) => [...e, ...t]), tj = S([Ne, ln], kl), li = S([ej, Le, tj], Dl), rj = S([li], (e) => e.filter(Ya)), nj = S([li], Nl), pn = S([nj, hr], Ml), ij = S([rj, hr, Le], Fy), Xl = S([pn, Le, li], Rl), aj = S([Le], $l), oj = S([li], (e) => e.filter(Ya)), uj = S([ij, oj, ni], Hy), sj = S([uj, hr, Ne], Gy), lj = S([li], Uy), cj = S([pn, Le, lj, Xa, Ne], Xy), fj = S([Jy, Ne, ln], cn), dj = S([fj, Ne], tg), vj = S([Qy, Ne, ln], cn), pj = S([vj, Ne], rg), hj = S([eg, Ne, ln], cn), mj = S([hj, Ne], ng), yj = S([dj, mj, pj], da), gj = S([Le, aj, sj, cj, yj, Z, Ne], Ll), _g = S([Le, Z, pn, Xl, ni, Ne, gj], Bl), bj = S([_g, Le, Gl], zl), xj = S([Le, _g, bj, Ne], ql), jg = (e) => {
  var t = Ne(e), r = ln(e), n = !1;
  return ui(e, t, r, n);
}, Tg = S([Le, jg], Ua), Cg = S([Le, Gl, xj, Tg], Kl), wj = S([Z, Xl, Le, Ne], dg), Oj = S([Z, Xl, Le, Ne], vg), Pj = (e, t, r, n, i, a, o, u) => {
  if (t) {
    var {
      type: s
    } = t, c = fr(e, u);
    if (n) {
      var l = r === "scaleBand" && n.bandwidth ? n.bandwidth() / 2 : 2, f = s === "category" && n.bandwidth ? n.bandwidth() / l : 0;
      return f = u === "angleAxis" && i != null && i?.length >= 2 ? Re(i[0] - i[1]) * 2 * f : f, c && o ? o.map((d, v) => ({
        coordinate: n(d) + f,
        value: d,
        index: v,
        offset: f
      })) : n.domain().map((d, v) => ({
        coordinate: n(d) + f,
        value: a ? a[d] : d,
        index: v,
        offset: f
      }));
    }
  }
}, Jt = S([Z, Le, Gl, Cg, jg, wj, Oj, Ne], Pj), Zl = S([hg, mg, R_], (e, t, r) => yg(r.shared, e, t)), kg = (e) => e.tooltip.settings.trigger, Jl = (e) => e.tooltip.settings.defaultIndex, Qa = S([vn, Zl, kg, Jl], Pg), or = S([Qa, pn], Hl), Dg = S([Jt, or], gg), Ng = S([Qa], (e) => {
  if (e)
    return e.dataKey;
}), Mg = S([vn, Zl, kg, Jl], Ag), Ej = S([Yt, Ht, Z, ke, Jt, Jl, Mg, si], Eg), Aj = S([Qa, Ej], (e, t) => e != null && e.coordinate ? e.coordinate : t), Sj = S([Qa], (e) => e.active), _j = S([Mg, or, hr, By, Dg, si, Zl], Sg), jj = S([_j], (e) => {
  if (e != null) {
    var t = e.map((r) => r.payload).filter((r) => r != null);
    return Array.from(new Set(t));
  }
});
function Bv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Fv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bv(Object(r), !0).forEach(function(n) {
      Tj(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Tj(e, t, r) {
  return (t = Cj(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Cj(e) {
  var t = kj(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function kj(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Dj = () => F(Le), Nj = () => {
  var e = Dj(), t = F(Jt), r = F(Cg);
  return Rn(Fv(Fv({}, e), {}, {
    scale: r
  }), t);
}, Mj = () => F(Pl), Ql = (e, t) => t, Ig = (e, t, r) => r, ec = (e, t, r, n) => n, Ij = S(Jt, (e) => _a(e, (t) => t.coordinate)), tc = S([vn, Ql, Ig, ec], Pg), Rg = S([tc, pn], Hl), Rj = (e, t, r) => {
  if (t != null) {
    var n = vn(e);
    return t === "axis" ? r === "hover" ? n.axisInteraction.hover.dataKey : n.axisInteraction.click.dataKey : r === "hover" ? n.itemInteraction.hover.dataKey : n.itemInteraction.click.dataKey;
  }
}, $g = S([vn, Ql, Ig, ec], Ag), va = S([Yt, Ht, Z, ke, Jt, ec, $g, si], Eg), $j = S([tc, va], (e, t) => {
  var r;
  return (r = e.coordinate) !== null && r !== void 0 ? r : t;
}), Lg = S(Jt, Rg, gg), Lj = S([$g, Rg, hr, By, Lg, si, Ql], Sg), Bj = S([tc], (e) => ({
  isActive: e.active,
  activeIndex: e.index
})), Fj = (e, t, r, n, i, a, o, u) => {
  if (!(!e || !t || !n || !i || !a)) {
    var s = x1(e.chartX, e.chartY, t, r, u);
    if (s) {
      var c = O1(s, t), l = u1(c, o, a, n, i), f = w1(t, a, l, s);
      return {
        activeIndex: String(l),
        activeCoordinate: f
      };
    }
  }
};
function ws() {
  return ws = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ws.apply(null, arguments);
}
function Kv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ni(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Kv(Object(r), !0).forEach(function(n) {
      Kj(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Kv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Kj(e, t, r) {
  return (t = zj(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function zj(e) {
  var t = Wj(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Wj(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function qj(e) {
  var {
    coordinate: t,
    payload: r,
    index: n,
    offset: i,
    tooltipAxisBandSize: a,
    layout: o,
    cursor: u,
    tooltipEventType: s,
    chartName: c
  } = e, l = t, f = r, d = n;
  if (!u || !l || c !== "ScatterChart" && s !== "axis")
    return null;
  var v, h;
  if (c === "ScatterChart")
    v = l, h = lP;
  else if (c === "BarChart")
    v = cP(o, l, i, a), h = Dm;
  else if (o === "radial") {
    var {
      cx: p,
      cy: m,
      radius: y,
      startAngle: g,
      endAngle: b
    } = Nm(l);
    v = {
      cx: p,
      cy: m,
      startAngle: g,
      endAngle: b,
      innerRadius: y,
      outerRadius: y
    }, h = Im;
  } else
    v = {
      points: WP(o, l, i)
    }, h = Xs;
  var E = typeof u == "object" && "className" in u ? u.className : void 0, P = Ni(Ni(Ni(Ni({
    stroke: "#ccc",
    pointerEvents: "none"
  }, i), v), xe(u, !1)), {}, {
    payload: f,
    payloadIndex: d,
    className: te("recharts-tooltip-cursor", E)
  });
  return /* @__PURE__ */ St(u) ? /* @__PURE__ */ tn(u, P) : /* @__PURE__ */ Xp(h, P);
}
function Uj(e) {
  var t = Nj(), r = wm(), n = Ra(), i = Mj();
  return /* @__PURE__ */ x.createElement(qj, ws({}, e, {
    coordinate: e.coordinate,
    index: e.index,
    payload: e.payload,
    offset: r,
    layout: n,
    tooltipAxisBandSize: t,
    chartName: i
  }));
}
var Bg = /* @__PURE__ */ Pt(null), Vj = () => Ut(Bg), Pu = { exports: {} }, zv;
function Yj() {
  return zv || (zv = 1, (function(e) {
    var t = Object.prototype.hasOwnProperty, r = "~";
    function n() {
    }
    Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
    function i(s, c, l) {
      this.fn = s, this.context = c, this.once = l || !1;
    }
    function a(s, c, l, f, d) {
      if (typeof l != "function")
        throw new TypeError("The listener must be a function");
      var v = new i(l, f || s, d), h = r ? r + c : c;
      return s._events[h] ? s._events[h].fn ? s._events[h] = [s._events[h], v] : s._events[h].push(v) : (s._events[h] = v, s._eventsCount++), s;
    }
    function o(s, c) {
      --s._eventsCount === 0 ? s._events = new n() : delete s._events[c];
    }
    function u() {
      this._events = new n(), this._eventsCount = 0;
    }
    u.prototype.eventNames = function() {
      var c = [], l, f;
      if (this._eventsCount === 0) return c;
      for (f in l = this._events)
        t.call(l, f) && c.push(r ? f.slice(1) : f);
      return Object.getOwnPropertySymbols ? c.concat(Object.getOwnPropertySymbols(l)) : c;
    }, u.prototype.listeners = function(c) {
      var l = r ? r + c : c, f = this._events[l];
      if (!f) return [];
      if (f.fn) return [f.fn];
      for (var d = 0, v = f.length, h = new Array(v); d < v; d++)
        h[d] = f[d].fn;
      return h;
    }, u.prototype.listenerCount = function(c) {
      var l = r ? r + c : c, f = this._events[l];
      return f ? f.fn ? 1 : f.length : 0;
    }, u.prototype.emit = function(c, l, f, d, v, h) {
      var p = r ? r + c : c;
      if (!this._events[p]) return !1;
      var m = this._events[p], y = arguments.length, g, b;
      if (m.fn) {
        switch (m.once && this.removeListener(c, m.fn, void 0, !0), y) {
          case 1:
            return m.fn.call(m.context), !0;
          case 2:
            return m.fn.call(m.context, l), !0;
          case 3:
            return m.fn.call(m.context, l, f), !0;
          case 4:
            return m.fn.call(m.context, l, f, d), !0;
          case 5:
            return m.fn.call(m.context, l, f, d, v), !0;
          case 6:
            return m.fn.call(m.context, l, f, d, v, h), !0;
        }
        for (b = 1, g = new Array(y - 1); b < y; b++)
          g[b - 1] = arguments[b];
        m.fn.apply(m.context, g);
      } else {
        var E = m.length, P;
        for (b = 0; b < E; b++)
          switch (m[b].once && this.removeListener(c, m[b].fn, void 0, !0), y) {
            case 1:
              m[b].fn.call(m[b].context);
              break;
            case 2:
              m[b].fn.call(m[b].context, l);
              break;
            case 3:
              m[b].fn.call(m[b].context, l, f);
              break;
            case 4:
              m[b].fn.call(m[b].context, l, f, d);
              break;
            default:
              if (!g) for (P = 1, g = new Array(y - 1); P < y; P++)
                g[P - 1] = arguments[P];
              m[b].fn.apply(m[b].context, g);
          }
      }
      return !0;
    }, u.prototype.on = function(c, l, f) {
      return a(this, c, l, f, !1);
    }, u.prototype.once = function(c, l, f) {
      return a(this, c, l, f, !0);
    }, u.prototype.removeListener = function(c, l, f, d) {
      var v = r ? r + c : c;
      if (!this._events[v]) return this;
      if (!l)
        return o(this, v), this;
      var h = this._events[v];
      if (h.fn)
        h.fn === l && (!d || h.once) && (!f || h.context === f) && o(this, v);
      else {
        for (var p = 0, m = [], y = h.length; p < y; p++)
          (h[p].fn !== l || d && !h[p].once || f && h[p].context !== f) && m.push(h[p]);
        m.length ? this._events[v] = m.length === 1 ? m[0] : m : o(this, v);
      }
      return this;
    }, u.prototype.removeAllListeners = function(c) {
      var l;
      return c ? (l = r ? r + c : c, this._events[l] && o(this, l)) : (this._events = new n(), this._eventsCount = 0), this;
    }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = r, u.EventEmitter = u, e.exports = u;
  })(Pu)), Pu.exports;
}
var Hj = Yj();
const Gj = /* @__PURE__ */ cr(Hj);
var Wn = new Gj(), Os = "recharts.syncEvent.tooltip", Wv = "recharts.syncEvent.brush";
function rc(e, t) {
  if (t) {
    var r = Number.parseInt(t, 10);
    if (!ct(r))
      return e?.[r];
  }
}
var Xj = {
  chartName: "",
  tooltipPayloadSearcher: void 0,
  eventEmitter: void 0,
  defaultTooltipEventType: "axis"
}, Fg = pt({
  name: "options",
  initialState: Xj,
  reducers: {
    createEventEmitter: (e) => {
      e.eventEmitter == null && (e.eventEmitter = Symbol("rechartsEventEmitter"));
    }
  }
}), Zj = Fg.reducer, {
  createEventEmitter: Jj
} = Fg.actions;
function Qj(e) {
  return e.tooltip.syncInteraction;
}
var eT = {
  chartData: void 0,
  computedData: void 0,
  dataStartIndex: 0,
  dataEndIndex: 0
}, Kg = pt({
  name: "chartData",
  initialState: eT,
  reducers: {
    setChartData(e, t) {
      if (e.chartData = t.payload, t.payload == null) {
        e.dataStartIndex = 0, e.dataEndIndex = 0;
        return;
      }
      t.payload.length > 0 && e.dataEndIndex !== t.payload.length - 1 && (e.dataEndIndex = t.payload.length - 1);
    },
    setComputedData(e, t) {
      e.computedData = t.payload;
    },
    setDataStartEndIndexes(e, t) {
      var {
        startIndex: r,
        endIndex: n
      } = t.payload;
      r != null && (e.dataStartIndex = r), n != null && (e.dataEndIndex = n);
    }
  }
}), {
  setChartData: qv,
  setDataStartEndIndexes: tT,
  setComputedData: b2
} = Kg.actions, rT = Kg.reducer, nT = ["x", "y"];
function Uv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function yr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Uv(Object(r), !0).forEach(function(n) {
      iT(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Uv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function iT(e, t, r) {
  return (t = aT(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function aT(e) {
  var t = oT(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function oT(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function uT(e, t) {
  if (e == null) return {};
  var r, n, i = sT(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function sT(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var zg = () => {
};
function lT() {
  var e = F(El), t = F(Al), r = Ee(), n = F(Ny), i = F(Jt), a = Ra(), o = Gs(), u = F((s) => s.rootProps.className);
  be(() => {
    if (e == null)
      return zg;
    var s = (c, l, f) => {
      if (t !== f && e === c) {
        if (n === "index") {
          var d;
          if (o && l !== null && l !== void 0 && (d = l.payload) !== null && d !== void 0 && d.coordinate) {
            var v = l.payload.coordinate, {
              x: h,
              y: p
            } = v, m = uT(v, nT), y = yr(yr(yr({}, m), typeof h == "number" && {
              x: Math.max(o.x, Math.min(h, o.x + o.width))
            }), typeof p == "number" && {
              y: Math.max(o.y, Math.min(p, o.y + o.height))
            }), g = yr(yr({}, l), {}, {
              payload: yr(yr({}, l.payload), {}, {
                coordinate: y
              })
            });
            r(g);
          } else
            r(l);
          return;
        }
        if (i != null) {
          var b;
          if (typeof n == "function") {
            var E = {
              activeTooltipIndex: l.payload.index == null ? void 0 : Number(l.payload.index),
              isTooltipActive: l.payload.active,
              activeIndex: l.payload.index == null ? void 0 : Number(l.payload.index),
              activeLabel: l.payload.label,
              activeDataKey: l.payload.dataKey,
              activeCoordinate: l.payload.coordinate
            }, P = n(i, E);
            b = i[P];
          } else n === "value" && (b = i.find((L) => String(L.value) === l.payload.label));
          var {
            coordinate: O
          } = l.payload;
          if (b == null || l.payload.active === !1 || O == null || o == null) {
            r(bs({
              active: !1,
              coordinate: void 0,
              dataKey: void 0,
              index: null,
              label: void 0
            }));
            return;
          }
          var {
            x: A,
            y: j
          } = O, N = Math.min(A, o.x + o.width), M = Math.min(j, o.y + o.height), k = {
            x: a === "horizontal" ? b.coordinate : N,
            y: a === "horizontal" ? M : b.coordinate
          }, D = bs({
            active: l.payload.active,
            coordinate: k,
            dataKey: l.payload.dataKey,
            index: String(b.index),
            label: l.payload.label
          });
          r(D);
        }
      }
    };
    return Wn.on(Os, s), () => {
      Wn.off(Os, s);
    };
  }, [u, r, t, e, n, i, a, o]);
}
function cT() {
  var e = F(El), t = F(Al), r = Ee();
  be(() => {
    if (e == null)
      return zg;
    var n = (i, a, o) => {
      t !== o && e === i && r(tT(a));
    };
    return Wn.on(Wv, n), () => {
      Wn.off(Wv, n);
    };
  }, [r, t, e]);
}
function fT() {
  var e = Ee();
  be(() => {
    e(Jj());
  }, [e]), lT(), cT();
}
function dT(e, t, r, n, i, a) {
  var o = F((d) => Rj(d, e, t)), u = F(Al), s = F(El), c = F(Ny), l = F(Qj), f = l?.active;
  be(() => {
    if (!f && s != null && u != null) {
      var d = bs({
        active: a,
        coordinate: r,
        dataKey: o,
        index: i,
        label: typeof n == "number" ? String(n) : n
      });
      Wn.emit(Os, s, d, u);
    }
  }, [f, r, o, i, n, u, s, c, a]);
}
function Vv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Yv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vv(Object(r), !0).forEach(function(n) {
      vT(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function vT(e, t, r) {
  return (t = pT(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function pT(e) {
  var t = hT(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function hT(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function mT(e) {
  return e.dataKey;
}
function yT(e, t) {
  return /* @__PURE__ */ x.isValidElement(e) ? /* @__PURE__ */ x.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ x.createElement(e, t) : /* @__PURE__ */ x.createElement(K1, t);
}
var Hv = [], gT = {
  allowEscapeViewBox: {
    x: !1,
    y: !1
  },
  animationDuration: 400,
  animationEasing: "ease",
  axisId: 0,
  contentStyle: {},
  cursor: !0,
  filterNull: !0,
  isAnimationActive: !dr.isSsr,
  itemSorter: "name",
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: {
    x: !1,
    y: !1
  },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  wrapperStyle: {}
};
function ci(e) {
  var t = ze(e, gT), {
    active: r,
    allowEscapeViewBox: n,
    animationDuration: i,
    animationEasing: a,
    content: o,
    filterNull: u,
    isAnimationActive: s,
    offset: c,
    payloadUniqBy: l,
    position: f,
    reverseDirection: d,
    useTranslate3d: v,
    wrapperStyle: h,
    cursor: p,
    shared: m,
    trigger: y,
    defaultIndex: g,
    portal: b,
    axisId: E
  } = t, P = Ee(), O = typeof g == "number" ? String(g) : g;
  be(() => {
    P(F_({
      shared: m,
      trigger: y,
      axisId: E,
      active: r,
      defaultIndex: O
    }));
  }, [P, m, y, E, r, O]);
  var A = Gs(), j = _m(), N = I_(m), {
    activeIndex: M,
    isActive: k
  } = F((Je) => Bj(Je, N, y, O)), D = F((Je) => Lj(Je, N, y, O)), L = F((Je) => Lg(Je, N, y, O)), B = F((Je) => $j(Je, N, y, O)), z = D, H = Vj(), U = r ?? k, [de, Q] = Lw([z, U]), Ze = N === "axis" ? L : void 0;
  dT(N, y, B, Ze, M, U);
  var Mt = b ?? H;
  if (Mt == null)
    return null;
  var q = z ?? Hv;
  U || (q = Hv), u && q.length && (q = ow(z.filter((Je) => Je.value != null && (Je.hide !== !0 || t.includeHidden)), l, mT));
  var Br = q.length > 0, hn = /* @__PURE__ */ x.createElement(H1, {
    allowEscapeViewBox: n,
    animationDuration: i,
    animationEasing: a,
    isAnimationActive: s,
    active: U,
    coordinate: B,
    hasPayload: Br,
    offset: c,
    position: f,
    reverseDirection: d,
    useTranslate3d: v,
    viewBox: A,
    wrapperStyle: h,
    lastBoundingBox: de,
    innerRef: Q,
    hasPortalFromProps: !!b
  }, yT(o, Yv(Yv({}, t), {}, {
    // @ts-expect-error renderContent method expects the payload to be mutable, TODO make it immutable
    payload: q,
    label: Ze,
    active: U,
    coordinate: B,
    accessibilityLayer: j
  })));
  return /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ m0(hn, Mt), U && /* @__PURE__ */ x.createElement(Uj, {
    cursor: p,
    tooltipEventType: N,
    coordinate: B,
    payload: z,
    index: M
  }));
}
var Eu = {}, Au = {}, Su = {}, Gv;
function bT() {
  return Gv || (Gv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n, { signal: i, edges: a } = {}) {
      let o, u = null;
      const s = a != null && a.includes("leading"), c = a == null || a.includes("trailing"), l = () => {
        u !== null && (r.apply(o, u), o = void 0, u = null);
      }, f = () => {
        c && l(), p();
      };
      let d = null;
      const v = () => {
        d != null && clearTimeout(d), d = setTimeout(() => {
          d = null, f();
        }, n);
      }, h = () => {
        d !== null && (clearTimeout(d), d = null);
      }, p = () => {
        h(), o = void 0, u = null;
      }, m = () => {
        l();
      }, y = function(...g) {
        if (i?.aborted)
          return;
        o = this, u = g;
        const b = d == null;
        v(), s && b && l();
      };
      return y.schedule = v, y.cancel = p, y.flush = m, i?.addEventListener("abort", p, { once: !0 }), y;
    }
    e.debounce = t;
  })(Su)), Su;
}
var Xv;
function xT() {
  return Xv || (Xv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ bT();
    function r(n, i = 0, a = {}) {
      typeof a != "object" && (a = {});
      const { leading: o = !1, trailing: u = !0, maxWait: s } = a, c = Array(2);
      o && (c[0] = "leading"), u && (c[1] = "trailing");
      let l, f = null;
      const d = t.debounce(function(...p) {
        l = n.apply(this, p), f = null;
      }, i, { edges: c }), v = function(...p) {
        return s != null && (f === null && (f = Date.now()), Date.now() - f >= s) ? (l = n.apply(this, p), f = Date.now(), d.cancel(), d.schedule(), l) : (d.apply(this, p), l);
      }, h = () => (d.flush(), l);
      return v.cancel = d.cancel, v.flush = h, v;
    }
    e.debounce = r;
  })(Au)), Au;
}
var Zv;
function wT() {
  return Zv || (Zv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ xT();
    function r(n, i = 0, a = {}) {
      const { leading: o = !0, trailing: u = !0 } = a;
      return t.debounce(n, i, {
        leading: o,
        maxWait: i,
        trailing: u
      });
    }
    e.throttle = r;
  })(Eu)), Eu;
}
var _u, Jv;
function OT() {
  return Jv || (Jv = 1, _u = wT().throttle), _u;
}
var PT = /* @__PURE__ */ OT();
const ET = /* @__PURE__ */ cr(PT);
var AT = process.env.NODE_ENV !== "production", kn = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    i[a - 2] = arguments[a];
  if (AT && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var o = 0;
      console.warn(r.replace(/%s/g, () => i[o++]));
    }
};
function Qv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ju(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qv(Object(r), !0).forEach(function(n) {
      ST(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ST(e, t, r) {
  return (t = _T(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function _T(e) {
  var t = jT(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function jT(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var fi = /* @__PURE__ */ vt((e, t) => {
  var {
    aspect: r,
    initialDimension: n = {
      width: -1,
      height: -1
    },
    width: i = "100%",
    height: a = "100%",
    /*
     * default min-width to 0 if not specified - 'auto' causes issues with flexbox
     * https://github.com/recharts/recharts/issues/172
     */
    minWidth: o = 0,
    minHeight: u,
    maxHeight: s,
    children: c,
    debounce: l = 0,
    id: f,
    className: d,
    onResize: v,
    style: h = {}
  } = e, p = ce(null), m = ce();
  m.current = v, Zp(t, () => p.current);
  var [y, g] = nt({
    containerWidth: n.width,
    containerHeight: n.height
  }), b = ge((P, O) => {
    g((A) => {
      var j = Math.round(P), N = Math.round(O);
      return A.containerWidth === j && A.containerHeight === N ? A : {
        containerWidth: j,
        containerHeight: N
      };
    });
  }, []);
  be(() => {
    var P = (N) => {
      var M, {
        width: k,
        height: D
      } = N[0].contentRect;
      b(k, D), (M = m.current) === null || M === void 0 || M.call(m, k, D);
    };
    l > 0 && (P = ET(P, l, {
      trailing: !0,
      leading: !1
    }));
    var O = new ResizeObserver(P), {
      width: A,
      height: j
    } = p.current.getBoundingClientRect();
    return b(A, j), O.observe(p.current), () => {
      O.disconnect();
    };
  }, [b, l]);
  var E = Vt(() => {
    var {
      containerWidth: P,
      containerHeight: O
    } = y;
    if (P < 0 || O < 0)
      return null;
    kn(wr(i) || wr(a), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, i, a), kn(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var A = wr(i) ? P : i, j = wr(a) ? O : a;
    return r && r > 0 && (A ? j = A / r : j && (A = j * r), s && j > s && (j = s)), kn(A > 0 || j > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, A, j, i, a, o, u, r), x.Children.map(c, (N) => /* @__PURE__ */ tn(N, {
      width: A,
      height: j,
      // calculate the actual size and override it.
      style: ju({
        width: A,
        height: j
      }, N.props.style)
    }));
  }, [r, c, a, s, u, o, y, i]);
  return /* @__PURE__ */ x.createElement("div", {
    id: f ? "".concat(f) : void 0,
    className: te("recharts-responsive-container", d),
    style: ju(ju({}, h), {}, {
      width: i,
      height: a,
      minWidth: o,
      minHeight: u,
      maxHeight: s
    }),
    ref: p
  }, /* @__PURE__ */ x.createElement("div", {
    style: {
      width: 0,
      height: 0,
      overflow: "visible"
    }
  }, E));
}), ur = (e) => null;
ur.displayName = "Cell";
function TT(e, t, r) {
  return (t = CT(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function CT(e) {
  var t = kT(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function kT(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
class DT {
  constructor(t) {
    TT(this, "cache", /* @__PURE__ */ new Map()), this.maxSize = t;
  }
  get(t) {
    var r = this.cache.get(t);
    return r !== void 0 && (this.cache.delete(t), this.cache.set(t, r)), r;
  }
  set(t, r) {
    if (this.cache.has(t))
      this.cache.delete(t);
    else if (this.cache.size >= this.maxSize) {
      var n = this.cache.keys().next().value;
      this.cache.delete(n);
    }
    this.cache.set(t, r);
  }
  clear() {
    this.cache.clear();
  }
  size() {
    return this.cache.size;
  }
}
function ep(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function NT(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ep(Object(r), !0).forEach(function(n) {
      MT(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ep(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function MT(e, t, r) {
  return (t = IT(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function IT(e) {
  var t = RT(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function RT(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var $T = {
  cacheSize: 2e3,
  enableCache: !0
}, Wg = NT({}, $T), tp = new DT(Wg.cacheSize), LT = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, rp = "recharts_measurement_span";
function BT(e, t) {
  var r = t.fontSize || "", n = t.fontFamily || "", i = t.fontWeight || "", a = t.fontStyle || "", o = t.letterSpacing || "", u = t.textTransform || "";
  return "".concat(e, "|").concat(r, "|").concat(n, "|").concat(i, "|").concat(a, "|").concat(o, "|").concat(u);
}
var np = (e, t) => {
  try {
    var r = document.getElementById(rp);
    r || (r = document.createElement("span"), r.setAttribute("id", rp), r.setAttribute("aria-hidden", "true"), document.body.appendChild(r)), Object.assign(r.style, LT, t), r.textContent = "".concat(e);
    var n = r.getBoundingClientRect();
    return {
      width: n.width,
      height: n.height
    };
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, Dn = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || dr.isSsr)
    return {
      width: 0,
      height: 0
    };
  if (!Wg.enableCache)
    return np(t, r);
  var n = BT(t, r), i = tp.get(n);
  if (i)
    return i;
  var a = np(t, r);
  return tp.set(n, a), a;
}, ip = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, ap = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, FT = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, KT = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, qg = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, zT = Object.keys(qg), qr = "NaN";
function WT(e, t) {
  return e * qg[t];
}
class et {
  static parse(t) {
    var r, [, n, i] = (r = KT.exec(t)) !== null && r !== void 0 ? r : [];
    return new et(parseFloat(n), i ?? "");
  }
  constructor(t, r) {
    this.num = t, this.unit = r, this.num = t, this.unit = r, ct(t) && (this.unit = ""), r !== "" && !FT.test(r) && (this.num = NaN, this.unit = ""), zT.includes(r) && (this.num = WT(t, r), this.unit = "px");
  }
  add(t) {
    return this.unit !== t.unit ? new et(NaN, "") : new et(this.num + t.num, this.unit);
  }
  subtract(t) {
    return this.unit !== t.unit ? new et(NaN, "") : new et(this.num - t.num, this.unit);
  }
  multiply(t) {
    return this.unit !== "" && t.unit !== "" && this.unit !== t.unit ? new et(NaN, "") : new et(this.num * t.num, this.unit || t.unit);
  }
  divide(t) {
    return this.unit !== "" && t.unit !== "" && this.unit !== t.unit ? new et(NaN, "") : new et(this.num / t.num, this.unit || t.unit);
  }
  toString() {
    return "".concat(this.num).concat(this.unit);
  }
  isNaN() {
    return ct(this.num);
  }
}
function Ug(e) {
  if (e.includes(qr))
    return qr;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, [, n, i, a] = (r = ip.exec(t)) !== null && r !== void 0 ? r : [], o = et.parse(n ?? ""), u = et.parse(a ?? ""), s = i === "*" ? o.multiply(u) : o.divide(u);
    if (s.isNaN())
      return qr;
    t = t.replace(ip, s.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var c, [, l, f, d] = (c = ap.exec(t)) !== null && c !== void 0 ? c : [], v = et.parse(l ?? ""), h = et.parse(d ?? ""), p = f === "+" ? v.add(h) : v.subtract(h);
    if (p.isNaN())
      return qr;
    t = t.replace(ap, p.toString());
  }
  return t;
}
var op = /\(([^()]*)\)/;
function qT(e) {
  for (var t = e, r; (r = op.exec(t)) != null; ) {
    var [, n] = r;
    t = t.replace(op, Ug(n));
  }
  return t;
}
function UT(e) {
  var t = e.replace(/\s+/g, "");
  return t = qT(t), t = Ug(t), t;
}
function VT(e) {
  try {
    return UT(e);
  } catch {
    return qr;
  }
}
function Tu(e) {
  var t = VT(e.slice(5, -1));
  return t === qr ? "" : t;
}
var YT = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], HT = ["dx", "dy", "angle", "className", "breakAll"];
function Ps() {
  return Ps = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ps.apply(null, arguments);
}
function up(e, t) {
  if (e == null) return {};
  var r, n, i = GT(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function GT(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var Vg = /[ \f\n\r\t\v\u2028\u2029]+/, Yg = (e) => {
  var {
    children: t,
    breakAll: r,
    style: n
  } = e;
  try {
    var i = [];
    me(t) || (r ? i = t.toString().split("") : i = t.toString().split(Vg));
    var a = i.map((u) => ({
      word: u,
      width: Dn(u, n).width
    })), o = r ? 0 : Dn(" ", n).width;
    return {
      wordsWithComputedWidth: a,
      spaceWidth: o
    };
  } catch {
    return null;
  }
}, XT = (e, t, r, n, i) => {
  var {
    maxLines: a,
    children: o,
    style: u,
    breakAll: s
  } = e, c = K(a), l = o, f = function() {
    var k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return k.reduce((D, L) => {
      var {
        word: B,
        width: z
      } = L, H = D[D.length - 1];
      if (H && (n == null || i || H.width + z + r < Number(n)))
        H.words.push(B), H.width += z + r;
      else {
        var U = {
          words: [B],
          width: z
        };
        D.push(U);
      }
      return D;
    }, []);
  }, d = f(t), v = (M) => M.reduce((k, D) => k.width > D.width ? k : D);
  if (!c || i)
    return d;
  var h = d.length > a || v(d).width > Number(n);
  if (!h)
    return d;
  for (var p = "…", m = (M) => {
    var k = l.slice(0, M), D = Yg({
      breakAll: s,
      style: u,
      children: k + p
    }).wordsWithComputedWidth, L = f(D), B = L.length > a || v(L).width > Number(n);
    return [B, L];
  }, y = 0, g = l.length - 1, b = 0, E; y <= g && b <= l.length - 1; ) {
    var P = Math.floor((y + g) / 2), O = P - 1, [A, j] = m(O), [N] = m(P);
    if (!A && !N && (y = P + 1), A && N && (g = P - 1), !A && N) {
      E = j;
      break;
    }
    b++;
  }
  return E || d;
}, sp = (e) => {
  var t = me(e) ? [] : e.toString().split(Vg);
  return [{
    words: t
  }];
}, ZT = (e) => {
  var {
    width: t,
    scaleToFit: r,
    children: n,
    style: i,
    breakAll: a,
    maxLines: o
  } = e;
  if ((t || r) && !dr.isSsr) {
    var u, s, c = Yg({
      breakAll: a,
      children: n,
      style: i
    });
    if (c) {
      var {
        wordsWithComputedWidth: l,
        spaceWidth: f
      } = c;
      u = l, s = f;
    } else
      return sp(n);
    return XT({
      breakAll: a,
      children: n,
      maxLines: o,
      style: i
    }, u, s, t, r);
  }
  return sp(n);
}, lp = "#808080", eo = /* @__PURE__ */ vt((e, t) => {
  var {
    x: r = 0,
    y: n = 0,
    lineHeight: i = "1em",
    // Magic number from d3
    capHeight: a = "0.71em",
    scaleToFit: o = !1,
    textAnchor: u = "start",
    // Maintain compat with existing charts / default SVG behavior
    verticalAnchor: s = "end",
    fill: c = lp
  } = e, l = up(e, YT), f = Vt(() => ZT({
    breakAll: l.breakAll,
    children: l.children,
    maxLines: l.maxLines,
    scaleToFit: o,
    style: l.style,
    width: l.width
  }), [l.breakAll, l.children, l.maxLines, o, l.style, l.width]), {
    dx: d,
    dy: v,
    angle: h,
    className: p,
    breakAll: m
  } = l, y = up(l, HT);
  if (!kt(r) || !kt(n) || f.length === 0)
    return null;
  var g = r + (K(d) ? d : 0), b = n + (K(v) ? v : 0), E;
  switch (s) {
    case "start":
      E = Tu("calc(".concat(a, ")"));
      break;
    case "middle":
      E = Tu("calc(".concat((f.length - 1) / 2, " * -").concat(i, " + (").concat(a, " / 2))"));
      break;
    default:
      E = Tu("calc(".concat(f.length - 1, " * -").concat(i, ")"));
      break;
  }
  var P = [];
  if (o) {
    var O = f[0].width, {
      width: A
    } = l;
    P.push("scale(".concat(K(A) ? A / O : 1, ")"));
  }
  return h && P.push("rotate(".concat(h, ", ").concat(g, ", ").concat(b, ")")), P.length && (y.transform = P.join(" ")), /* @__PURE__ */ x.createElement("text", Ps({}, xe(y, !0), {
    ref: t,
    x: g,
    y: b,
    className: te("recharts-text", p),
    textAnchor: u,
    fill: c.includes("url") ? lp : c
  }), f.map((j, N) => {
    var M = j.words.join(m ? "" : " ");
    return (
      // duplicate words will cause duplicate keys
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ x.createElement("tspan", {
        x: g,
        dy: N === 0 ? E : i,
        key: "".concat(M, "-").concat(N)
      }, M)
    );
  }));
});
eo.displayName = "Text";
var JT = ["labelRef"];
function QT(e, t) {
  if (e == null) return {};
  var r, n, i = eC(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function eC(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function cp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Pe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cp(Object(r), !0).forEach(function(n) {
      tC(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function tC(e, t, r) {
  return (t = rC(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function rC(e) {
  var t = nC(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function nC(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Rt() {
  return Rt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Rt.apply(null, arguments);
}
var Hg = /* @__PURE__ */ Pt(null), iC = (e) => {
  var {
    x: t,
    y: r,
    width: n,
    height: i,
    children: a
  } = e, o = Vt(() => ({
    x: t,
    y: r,
    width: n,
    height: i
  }), [t, r, n, i]);
  return /* @__PURE__ */ x.createElement(Hg.Provider, {
    value: o
  }, a);
}, Gg = () => {
  var e = Ut(Hg), t = Gs();
  return e || t;
}, aC = /* @__PURE__ */ Pt(null), oC = () => {
  var e = Ut(aC), t = F(Ly);
  return e || t;
}, uC = (e) => {
  var {
    value: t,
    formatter: r
  } = e, n = me(e.children) ? t : e.children;
  return typeof r == "function" ? r(n) : n;
}, nc = (e) => e != null && typeof e == "function", sC = (e, t) => {
  var r = Re(t - e), n = Math.min(Math.abs(t - e), 360);
  return r * n;
}, lC = (e, t, r, n, i) => {
  var {
    offset: a,
    className: o
  } = e, {
    cx: u,
    cy: s,
    innerRadius: c,
    outerRadius: l,
    startAngle: f,
    endAngle: d,
    clockWise: v
  } = i, h = (c + l) / 2, p = sC(f, d), m = p >= 0 ? 1 : -1, y, g;
  switch (t) {
    case "insideStart":
      y = f + m * a, g = v;
      break;
    case "insideEnd":
      y = d - m * a, g = !v;
      break;
    case "end":
      y = d + m * a, g = v;
      break;
    default:
      throw new Error("Unsupported position ".concat(t));
  }
  g = p <= 0 ? g : !g;
  var b = _e(u, s, h, y), E = _e(u, s, h, y + (g ? 1 : -1) * 359), P = "M".concat(b.x, ",").concat(b.y, `
    A`).concat(h, ",").concat(h, ",0,1,").concat(g ? 0 : 1, `,
    `).concat(E.x, ",").concat(E.y), O = me(e.id) ? Nn("recharts-radial-line-") : e.id;
  return /* @__PURE__ */ x.createElement("text", Rt({}, n, {
    dominantBaseline: "central",
    className: te("recharts-radial-bar-label", o)
  }), /* @__PURE__ */ x.createElement("defs", null, /* @__PURE__ */ x.createElement("path", {
    id: O,
    d: P
  })), /* @__PURE__ */ x.createElement("textPath", {
    xlinkHref: "#".concat(O)
  }, r));
}, cC = (e, t, r) => {
  var {
    cx: n,
    cy: i,
    innerRadius: a,
    outerRadius: o,
    startAngle: u,
    endAngle: s
  } = e, c = (u + s) / 2;
  if (r === "outside") {
    var {
      x: l,
      y: f
    } = _e(n, i, o + t, c);
    return {
      x: l,
      y: f,
      textAnchor: l >= n ? "start" : "end",
      verticalAnchor: "middle"
    };
  }
  if (r === "center")
    return {
      x: n,
      y: i,
      textAnchor: "middle",
      verticalAnchor: "middle"
    };
  if (r === "centerTop")
    return {
      x: n,
      y: i,
      textAnchor: "middle",
      verticalAnchor: "start"
    };
  if (r === "centerBottom")
    return {
      x: n,
      y: i,
      textAnchor: "middle",
      verticalAnchor: "end"
    };
  var d = (a + o) / 2, {
    x: v,
    y: h
  } = _e(n, i, d, c);
  return {
    x: v,
    y: h,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, Xg = (e) => "cx" in e && K(e.cx), fC = (e, t) => {
  var {
    parentViewBox: r,
    offset: n,
    position: i
  } = e, a;
  r != null && !Xg(r) && (a = r);
  var {
    x: o,
    y: u,
    width: s,
    height: c
  } = t, l = c >= 0 ? 1 : -1, f = l * n, d = l > 0 ? "end" : "start", v = l > 0 ? "start" : "end", h = s >= 0 ? 1 : -1, p = h * n, m = h > 0 ? "end" : "start", y = h > 0 ? "start" : "end";
  if (i === "top") {
    var g = {
      x: o + s / 2,
      y: u - l * n,
      textAnchor: "middle",
      verticalAnchor: d
    };
    return Pe(Pe({}, g), a ? {
      height: Math.max(u - a.y, 0),
      width: s
    } : {});
  }
  if (i === "bottom") {
    var b = {
      x: o + s / 2,
      y: u + c + f,
      textAnchor: "middle",
      verticalAnchor: v
    };
    return Pe(Pe({}, b), a ? {
      height: Math.max(a.y + a.height - (u + c), 0),
      width: s
    } : {});
  }
  if (i === "left") {
    var E = {
      x: o - p,
      y: u + c / 2,
      textAnchor: m,
      verticalAnchor: "middle"
    };
    return Pe(Pe({}, E), a ? {
      width: Math.max(E.x - a.x, 0),
      height: c
    } : {});
  }
  if (i === "right") {
    var P = {
      x: o + s + p,
      y: u + c / 2,
      textAnchor: y,
      verticalAnchor: "middle"
    };
    return Pe(Pe({}, P), a ? {
      width: Math.max(a.x + a.width - P.x, 0),
      height: c
    } : {});
  }
  var O = a ? {
    width: s,
    height: c
  } : {};
  return i === "insideLeft" ? Pe({
    x: o + p,
    y: u + c / 2,
    textAnchor: y,
    verticalAnchor: "middle"
  }, O) : i === "insideRight" ? Pe({
    x: o + s - p,
    y: u + c / 2,
    textAnchor: m,
    verticalAnchor: "middle"
  }, O) : i === "insideTop" ? Pe({
    x: o + s / 2,
    y: u + f,
    textAnchor: "middle",
    verticalAnchor: v
  }, O) : i === "insideBottom" ? Pe({
    x: o + s / 2,
    y: u + c - f,
    textAnchor: "middle",
    verticalAnchor: d
  }, O) : i === "insideTopLeft" ? Pe({
    x: o + p,
    y: u + f,
    textAnchor: y,
    verticalAnchor: v
  }, O) : i === "insideTopRight" ? Pe({
    x: o + s - p,
    y: u + f,
    textAnchor: m,
    verticalAnchor: v
  }, O) : i === "insideBottomLeft" ? Pe({
    x: o + p,
    y: u + c - f,
    textAnchor: y,
    verticalAnchor: d
  }, O) : i === "insideBottomRight" ? Pe({
    x: o + s - p,
    y: u + c - f,
    textAnchor: m,
    verticalAnchor: d
  }, O) : i && typeof i == "object" && (K(i.x) || wr(i.x)) && (K(i.y) || wr(i.y)) ? Pe({
    x: o + Ve(i.x, s),
    y: u + Ve(i.y, c),
    textAnchor: "end",
    verticalAnchor: "end"
  }, O) : Pe({
    x: o + s / 2,
    y: u + c / 2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  }, O);
}, dC = {
  offset: 5
};
function tr(e) {
  var t = ze(e, dC), {
    viewBox: r,
    position: n,
    value: i,
    children: a,
    content: o,
    className: u = "",
    textBreakAll: s,
    labelRef: c
  } = t, l = oC(), f = Gg(), d = n === "center" ? f : l ?? f, v = r || d;
  if (!v || me(i) && me(a) && !/* @__PURE__ */ St(o) && typeof o != "function")
    return null;
  var h = Pe(Pe({}, t), {}, {
    viewBox: v
  });
  if (/* @__PURE__ */ St(o)) {
    var {
      labelRef: p
    } = h, m = QT(h, JT);
    return /* @__PURE__ */ tn(o, m);
  }
  var y;
  if (typeof o == "function") {
    if (y = /* @__PURE__ */ Xp(o, h), /* @__PURE__ */ St(y))
      return y;
  } else
    y = uC(t);
  var g = Xg(v), b = xe(t, !0);
  if (g && (n === "insideStart" || n === "insideEnd" || n === "end"))
    return lC(t, n, y, b, v);
  var E = g ? cC(v, t.offset, t.position) : fC(t, v);
  return /* @__PURE__ */ x.createElement(eo, Rt({
    ref: c,
    className: te("recharts-label", u)
  }, b, E, {
    breakAll: s
  }), y);
}
tr.displayName = "Label";
var vC = (e, t, r) => {
  if (!e)
    return null;
  var n = {
    viewBox: t,
    labelRef: r
  };
  return e === !0 ? /* @__PURE__ */ x.createElement(tr, Rt({
    key: "label-implicit"
  }, n)) : kt(e) ? /* @__PURE__ */ x.createElement(tr, Rt({
    key: "label-implicit",
    value: e
  }, n)) : /* @__PURE__ */ St(e) ? e.type === tr ? /* @__PURE__ */ tn(e, Pe({
    key: "label-implicit"
  }, n)) : /* @__PURE__ */ x.createElement(tr, Rt({
    key: "label-implicit",
    content: e
  }, n)) : nc(e) ? /* @__PURE__ */ x.createElement(tr, Rt({
    key: "label-implicit",
    content: e
  }, n)) : e && typeof e == "object" ? /* @__PURE__ */ x.createElement(tr, Rt({}, e, {
    key: "label-implicit"
  }, n)) : null;
};
function pC(e) {
  var {
    label: t
  } = e, r = Gg();
  return vC(t, r) || null;
}
var Cu = {}, ku = {}, fp;
function hC() {
  return fp || (fp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r[r.length - 1];
    }
    e.last = t;
  })(ku)), ku;
}
var Du = {}, dp;
function mC() {
  return dp || (dp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return Array.isArray(r) ? r : Array.from(r);
    }
    e.toArray = t;
  })(Du)), Du;
}
var vp;
function yC() {
  return vp || (vp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ hC(), r = /* @__PURE__ */ mC(), n = /* @__PURE__ */ Fs();
    function i(a) {
      if (n.isArrayLike(a))
        return t.last(r.toArray(a));
    }
    e.last = i;
  })(Cu)), Cu;
}
var Nu, pp;
function gC() {
  return pp || (pp = 1, Nu = yC().last), Nu;
}
var bC = /* @__PURE__ */ gC();
const xC = /* @__PURE__ */ cr(bC);
var wC = ["valueAccessor"], OC = ["dataKey", "clockWise", "id", "textBreakAll"];
function pa() {
  return pa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, pa.apply(null, arguments);
}
function hp(e, t) {
  if (e == null) return {};
  var r, n, i = PC(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function PC(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var EC = (e) => Array.isArray(e.value) ? xC(e.value) : e.value, Zg = /* @__PURE__ */ Pt(void 0), Jg = Zg.Provider, Qg = /* @__PURE__ */ Pt(void 0), AC = Qg.Provider;
function SC() {
  return Ut(Zg);
}
function _C() {
  return Ut(Qg);
}
function $i(e) {
  var {
    valueAccessor: t = EC
  } = e, r = hp(e, wC), {
    dataKey: n,
    clockWise: i,
    id: a,
    textBreakAll: o
  } = r, u = hp(r, OC), s = SC(), c = _C(), l = s || c;
  return !l || !l.length ? null : /* @__PURE__ */ x.createElement(Ke, {
    className: "recharts-label-list"
  }, l.map((f, d) => {
    var v, h = me(n) ? t(f, d) : fe(f && f.payload, n), p = me(a) ? {} : {
      id: "".concat(a, "-").concat(d)
    };
    return /* @__PURE__ */ x.createElement(tr, pa({}, xe(f, !0), u, p, {
      /*
       * Prefer to use the explicit fill from LabelList props.
       * Only in an absence of that, fall back to the fill of the entry.
       * The entry fill can be quite difficult to see especially in Bar, Pie, RadialBar in inside positions.
       * On the other hand it's quite convenient in Scatter, Line, or when the position is outside the Bar, Pie filled shapes.
       */
      fill: (v = r.fill) !== null && v !== void 0 ? v : f.fill,
      parentViewBox: f.parentViewBox,
      value: h,
      textBreakAll: o,
      viewBox: f.viewBox,
      key: "label-".concat(d),
      index: d
    }));
  }));
}
$i.displayName = "LabelList";
function ic(e) {
  var {
    label: t
  } = e;
  return t ? t === !0 ? /* @__PURE__ */ x.createElement($i, {
    key: "labelList-implicit"
  }) : /* @__PURE__ */ x.isValidElement(t) || nc(t) ? /* @__PURE__ */ x.createElement($i, {
    key: "labelList-implicit",
    content: t
  }) : typeof t == "object" ? /* @__PURE__ */ x.createElement($i, pa({
    key: "labelList-implicit"
  }, t, {
    type: String(t.type)
  })) : null : null;
}
function Es() {
  return Es = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Es.apply(null, arguments);
}
var eb = (e) => {
  var {
    cx: t,
    cy: r,
    r: n,
    className: i
  } = e, a = te("recharts-dot", i);
  return t === +t && r === +r && n === +n ? /* @__PURE__ */ x.createElement("circle", Es({}, Nt(e), Is(e), {
    className: a,
    cx: t,
    cy: r,
    r: n
  })) : null;
}, tb = (e) => e.graphicalItems.polarItems, jC = S([ye, ii], kl), ac = S([tb, Ae, jC], Dl), TC = S([ac], Nl), oc = S([TC, xl], Ml), CC = S([oc, Ae, ac], Rl), kC = S([oc, Ae, ac], (e, t, r) => r.length > 0 ? e.flatMap((n) => r.flatMap((i) => {
  var a, o = fe(n, (a = t.dataKey) !== null && a !== void 0 ? a : i.dataKey);
  return {
    value: o,
    errorDomain: []
    // polar charts do not have error bars
  };
})).filter(Boolean) : t?.dataKey != null ? e.map((n) => ({
  value: fe(n, t.dataKey),
  errorDomain: []
})) : e.map((n) => ({
  value: n,
  errorDomain: []
}))), mp = () => {
}, DC = S([Ae, ig, mp, kC, mp, Z, ye], Ll), rb = S([Ae, Z, oc, CC, ni, ye, DC], Bl), NC = S([rb, Ae, fn], zl);
S([Ae, rb, NC, ye], ql);
var MC = {
  radiusAxis: {},
  angleAxis: {}
}, nb = pt({
  name: "polarAxis",
  initialState: MC,
  reducers: {
    addRadiusAxis(e, t) {
      e.radiusAxis[t.payload.id] = t.payload;
    },
    removeRadiusAxis(e, t) {
      delete e.radiusAxis[t.payload.id];
    },
    addAngleAxis(e, t) {
      e.angleAxis[t.payload.id] = t.payload;
    },
    removeAngleAxis(e, t) {
      delete e.angleAxis[t.payload.id];
    }
  }
}), {
  addRadiusAxis: x2,
  removeRadiusAxis: w2,
  addAngleAxis: O2,
  removeAngleAxis: P2
} = nb.actions, IC = nb.reducer;
function yp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function gp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yp(Object(r), !0).forEach(function(n) {
      RC(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function RC(e, t, r) {
  return (t = $C(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function $C(e) {
  var t = LC(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function LC(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var BC = (e, t) => t, uc = S([tb, BC], (e, t) => e.filter((r) => r.type === "pie").find((r) => r.id === t)), FC = [], sc = (e, t, r) => r?.length === 0 ? FC : r, ib = S([xl, uc, sc], (e, t, r) => {
  var {
    chartData: n
  } = e;
  if (t != null) {
    var i;
    if (t?.data != null && t.data.length > 0 ? i = t.data : i = n, (!i || !i.length) && r != null && (i = r.map((a) => gp(gp({}, t.presentationProps), a.props))), i != null)
      return i;
  }
}), KC = S([ib, uc, sc], (e, t, r) => {
  if (!(e == null || t == null))
    return e.map((n, i) => {
      var a, o = fe(n, t.nameKey, t.name), u;
      return r != null && (a = r[i]) !== null && a !== void 0 && (a = a.props) !== null && a !== void 0 && a.fill ? u = r[i].props.fill : typeof n == "object" && n != null && "fill" in n ? u = n.fill : u = t.fill, {
        value: an(o, t.dataKey),
        color: u,
        payload: n,
        type: t.legendType
      };
    });
}), zC = S([ib, uc, sc, ke], (e, t, r, n) => {
  if (!(t == null || e == null))
    return Bk({
      offset: n,
      pieSettings: t,
      displayedData: e,
      cells: r
    });
}), Mu = {}, bp;
function WC() {
  return bp || (bp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      if (typeof r != "object" || r == null)
        return !1;
      if (Object.getPrototypeOf(r) === null)
        return !0;
      if (Object.prototype.toString.call(r) !== "[object Object]") {
        const i = r[Symbol.toStringTag];
        return i == null || !Object.getOwnPropertyDescriptor(r, Symbol.toStringTag)?.writable ? !1 : r.toString() === `[object ${i}]`;
      }
      let n = r;
      for (; Object.getPrototypeOf(n) !== null; )
        n = Object.getPrototypeOf(n);
      return Object.getPrototypeOf(r) === n;
    }
    e.isPlainObject = t;
  })(Mu)), Mu;
}
var Iu, xp;
function qC() {
  return xp || (xp = 1, Iu = WC().isPlainObject), Iu;
}
var UC = /* @__PURE__ */ qC();
const VC = /* @__PURE__ */ cr(UC);
function wp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Op(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wp(Object(r), !0).forEach(function(n) {
      YC(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function YC(e, t, r) {
  return (t = HC(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function HC(e) {
  var t = GC(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function GC(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ha() {
  return ha = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ha.apply(null, arguments);
}
var Pp = (e, t, r, n, i) => {
  var a = r - n, o;
  return o = "M ".concat(e, ",").concat(t), o += "L ".concat(e + r, ",").concat(t), o += "L ".concat(e + r - a / 2, ",").concat(t + i), o += "L ".concat(e + r - a / 2 - n, ",").concat(t + i), o += "L ".concat(e, ",").concat(t, " Z"), o;
}, XC = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, ZC = (e) => {
  var t = ze(e, XC), {
    x: r,
    y: n,
    upperWidth: i,
    lowerWidth: a,
    height: o,
    className: u
  } = t, {
    animationEasing: s,
    animationDuration: c,
    animationBegin: l,
    isUpdateAnimationActive: f
  } = t, d = ce(), [v, h] = nt(-1), p = ce(i), m = ce(a), y = ce(o), g = ce(r), b = ce(n), E = Jn(e, "trapezoid-");
  if (be(() => {
    if (d.current && d.current.getTotalLength)
      try {
        var B = d.current.getTotalLength();
        B && h(B);
      } catch {
      }
  }, []), r !== +r || n !== +n || i !== +i || a !== +a || o !== +o || i === 0 && a === 0 || o === 0)
    return null;
  var P = te("recharts-trapezoid", u);
  if (!f)
    return /* @__PURE__ */ x.createElement("g", null, /* @__PURE__ */ x.createElement("path", ha({}, xe(t, !0), {
      className: P,
      d: Pp(r, n, i, a, o)
    })));
  var O = p.current, A = m.current, j = y.current, N = g.current, M = b.current, k = "0px ".concat(v === -1 ? 1 : v, "px"), D = "".concat(v, "px 0px"), L = jm(["strokeDasharray"], c, s);
  return /* @__PURE__ */ x.createElement(Zn, {
    animationId: E,
    key: E,
    canBegin: v > 0,
    duration: c,
    easing: s,
    isActive: f,
    begin: l
  }, (B) => {
    var z = we(O, i, B), H = we(A, a, B), U = we(j, o, B), de = we(N, r, B), Q = we(M, n, B);
    d.current && (p.current = z, m.current = H, y.current = U, g.current = de, b.current = Q);
    var Ze = B > 0 ? {
      transition: L,
      strokeDasharray: D
    } : {
      strokeDasharray: k
    };
    return /* @__PURE__ */ x.createElement("path", ha({}, xe(t, !0), {
      className: P,
      d: Pp(de, Q, z, H, U),
      ref: d,
      style: Op(Op({}, Ze), t.style)
    }));
  });
}, JC = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function QC(e, t) {
  if (e == null) return {};
  var r, n, i = ek(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function ek(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Ep(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ma(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ep(Object(r), !0).forEach(function(n) {
      tk(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ep(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function tk(e, t, r) {
  return (t = rk(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function rk(e) {
  var t = nk(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function nk(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ik(e, t) {
  return ma(ma({}, t), e);
}
function ak(e, t) {
  return e === "symbols";
}
function Ap(e) {
  var {
    shapeType: t,
    elementProps: r
  } = e;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ x.createElement(Dm, r);
    case "trapezoid":
      return /* @__PURE__ */ x.createElement(ZC, r);
    case "sector":
      return /* @__PURE__ */ x.createElement(Im, r);
    case "symbols":
      if (ak(t))
        return /* @__PURE__ */ x.createElement(Sh, r);
      break;
    default:
      return null;
  }
}
function ok(e) {
  return /* @__PURE__ */ St(e) ? e.props : e;
}
function ab(e) {
  var {
    option: t,
    shapeType: r,
    propTransformer: n = ik,
    activeClassName: i = "recharts-active-shape",
    isActive: a
  } = e, o = QC(e, JC), u;
  if (/* @__PURE__ */ St(t))
    u = /* @__PURE__ */ tn(t, ma(ma({}, o), ok(t)));
  else if (typeof t == "function")
    u = t(o);
  else if (VC(t) && typeof t != "boolean") {
    var s = n(t, o);
    u = /* @__PURE__ */ x.createElement(Ap, {
      shapeType: r,
      elementProps: s
    });
  } else {
    var c = o;
    u = /* @__PURE__ */ x.createElement(Ap, {
      shapeType: r,
      elementProps: c
    });
  }
  return a ? /* @__PURE__ */ x.createElement(Ke, {
    className: i
  }, u) : u;
}
var lc = (e, t) => {
  var r = Ee();
  return (n, i) => (a) => {
    e?.(n, i, a), r(xg({
      activeIndex: String(i),
      activeDataKey: t,
      activeCoordinate: n.tooltipPosition
    }));
  };
}, cc = (e) => {
  var t = Ee();
  return (r, n) => (i) => {
    e?.(r, n, i), t(K_());
  };
}, fc = (e, t) => {
  var r = Ee();
  return (n, i) => (a) => {
    e?.(n, i, a), r(z_({
      activeIndex: String(i),
      activeDataKey: t,
      activeCoordinate: n.tooltipPosition
    }));
  };
};
function dc(e) {
  var {
    fn: t,
    args: r
  } = e, n = Ee(), i = it();
  return be(() => {
    if (!i) {
      var a = t(r);
      return n(L_(a)), () => {
        n(B_(a));
      };
    }
  }, [t, r, n, i]), null;
}
var ob = () => {
};
function ub(e) {
  var {
    legendPayload: t
  } = e, r = Ee(), n = it();
  return be(() => n ? ob : (r(Am(t)), () => {
    r(Sm(t));
  }), [r, n, t]), null;
}
function uk(e) {
  var {
    legendPayload: t
  } = e, r = Ee(), n = F(Z);
  return be(() => n !== "centric" && n !== "radial" ? ob : (r(Am(t)), () => {
    r(Sm(t));
  }), [r, n, t]), null;
}
var Ru, sk = () => {
  var [e] = x.useState(() => Nn("uid-"));
  return e;
}, lk = (Ru = x.useId) !== null && Ru !== void 0 ? Ru : sk;
function ck(e, t) {
  var r = lk();
  return t || (e ? "".concat(e, "-").concat(r) : r);
}
var fk = /* @__PURE__ */ Pt(void 0), vc = (e) => {
  var {
    id: t,
    type: r,
    children: n
  } = e, i = ck("recharts-".concat(r), t);
  return /* @__PURE__ */ x.createElement(fk.Provider, {
    value: i
  }, n(i));
}, dk = {
  cartesianItems: [],
  polarItems: []
}, sb = pt({
  name: "graphicalItems",
  initialState: dk,
  reducers: {
    addCartesianGraphicalItem(e, t) {
      e.cartesianItems.push(t.payload);
    },
    replaceCartesianGraphicalItem(e, t) {
      var {
        prev: r,
        next: n
      } = t.payload, i = Bt(e).cartesianItems.indexOf(r);
      i > -1 && (e.cartesianItems[i] = n);
    },
    removeCartesianGraphicalItem(e, t) {
      var r = Bt(e).cartesianItems.indexOf(t.payload);
      r > -1 && e.cartesianItems.splice(r, 1);
    },
    addPolarGraphicalItem(e, t) {
      e.polarItems.push(t.payload);
    },
    removePolarGraphicalItem(e, t) {
      var r = Bt(e).polarItems.indexOf(t.payload);
      r > -1 && e.polarItems.splice(r, 1);
    }
  }
}), {
  addCartesianGraphicalItem: vk,
  replaceCartesianGraphicalItem: pk,
  removeCartesianGraphicalItem: hk,
  addPolarGraphicalItem: mk,
  removePolarGraphicalItem: yk
} = sb.actions, gk = sb.reducer;
function lb(e) {
  var t = Ee(), r = ce(null);
  return be(() => {
    r.current === null ? t(vk(e)) : r.current !== e && t(pk({
      prev: r.current,
      next: e
    })), r.current = e;
  }, [t, e]), be(() => () => {
    r.current && (t(hk(r.current)), r.current = null);
  }, [t]), null;
}
function bk(e) {
  var t = Ee();
  return be(() => (t(mk(e)), () => {
    t(yk(e));
  }), [t, e]), null;
}
var xk = ["onMouseEnter", "onClick", "onMouseLeave"], wk = ["id"], Ok = ["id"];
function pc(e, t) {
  if (e == null) return {};
  var r, n, i = Pk(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function Pk(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Sp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function pe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sp(Object(r), !0).forEach(function(n) {
      Ek(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ek(e, t, r) {
  return (t = Ak(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ak(e) {
  var t = Sk(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Sk(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function sr() {
  return sr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, sr.apply(null, arguments);
}
function _k(e) {
  var t = Vt(() => Rs(e.children, ur), [e.children]), r = F((n) => KC(n, e.id, t));
  return r == null ? null : /* @__PURE__ */ x.createElement(uk, {
    legendPayload: r
  });
}
function jk(e) {
  var {
    dataKey: t,
    nameKey: r,
    sectors: n,
    stroke: i,
    strokeWidth: a,
    fill: o,
    name: u,
    hide: s,
    tooltipType: c
  } = e;
  return {
    dataDefinedOnItem: n.map((l) => l.tooltipPayload),
    positions: n.map((l) => l.tooltipPosition),
    settings: {
      stroke: i,
      strokeWidth: a,
      fill: o,
      dataKey: t,
      nameKey: r,
      name: an(u, t),
      hide: s,
      type: c,
      color: o,
      unit: ""
      // why doesn't Pie support unit?
    }
  };
}
var Tk = (e, t) => e > t ? "start" : e < t ? "end" : "middle", Ck = (e, t, r) => Ve(typeof t == "function" ? t(e) : t, r, r * 0.8), kk = (e, t, r) => {
  var {
    top: n,
    left: i,
    width: a,
    height: o
  } = t, u = pm(a, o), s = i + Ve(e.cx, a, a / 2), c = n + Ve(e.cy, o, o / 2), l = Ve(e.innerRadius, u, 0), f = Ck(r, e.outerRadius, u), d = e.maxRadius || Math.sqrt(a * a + o * o) / 2;
  return {
    cx: s,
    cy: c,
    innerRadius: l,
    outerRadius: f,
    maxRadius: d
  };
}, Dk = (e, t) => {
  var r = Re(t - e), n = Math.min(Math.abs(t - e), 360);
  return r * n;
};
function Nk(e) {
  return e && typeof e == "object" && "className" in e && typeof e.className == "string" ? e.className : "";
}
var Mk = (e, t) => {
  if (/* @__PURE__ */ x.isValidElement(e))
    return /* @__PURE__ */ x.cloneElement(e, t);
  if (typeof e == "function")
    return e(t);
  var r = te("recharts-pie-label-line", typeof e != "boolean" ? e.className : "");
  return /* @__PURE__ */ x.createElement(Xs, sr({}, t, {
    type: "linear",
    className: r
  }));
}, Ik = (e, t, r) => {
  if (/* @__PURE__ */ x.isValidElement(e))
    return /* @__PURE__ */ x.cloneElement(e, t);
  var n = r;
  if (typeof e == "function" && (n = e(t), /* @__PURE__ */ x.isValidElement(n)))
    return n;
  var i = te("recharts-pie-label-text", Nk(e));
  return /* @__PURE__ */ x.createElement(eo, sr({}, t, {
    alignmentBaseline: "middle",
    className: i
  }), n);
};
function Rk(e) {
  var {
    sectors: t,
    props: r,
    showLabels: n
  } = e, {
    label: i,
    labelLine: a,
    dataKey: o
  } = r;
  if (!n || !i || !t)
    return null;
  var u = Nt(r), s = xe(i, !1), c = xe(a, !1), l = typeof i == "object" && "offsetRadius" in i && typeof i.offsetRadius == "number" && i.offsetRadius || 20, f = t.map((d, v) => {
    var h = (d.startAngle + d.endAngle) / 2, p = _e(d.cx, d.cy, d.outerRadius + l, h), m = pe(pe(pe(pe({}, u), d), {}, {
      stroke: "none"
    }, s), {}, {
      index: v,
      textAnchor: Tk(p.x, d.cx)
    }, p), y = pe(pe(pe(pe({}, u), d), {}, {
      fill: "none",
      stroke: d.fill
    }, c), {}, {
      index: v,
      points: [_e(d.cx, d.cy, d.outerRadius, h), p],
      key: "line"
    });
    return (
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ x.createElement(Ke, {
        key: "label-".concat(d.startAngle, "-").concat(d.endAngle, "-").concat(d.midAngle, "-").concat(v)
      }, a && Mk(a, y), Ik(i, m, fe(d, o)))
    );
  });
  return /* @__PURE__ */ x.createElement(Ke, {
    className: "recharts-pie-labels"
  }, f);
}
function $k(e) {
  var {
    sectors: t,
    props: r,
    showLabels: n
  } = e, {
    label: i
  } = r;
  return typeof i == "object" && i != null && "position" in i ? /* @__PURE__ */ x.createElement(ic, {
    label: i
  }) : /* @__PURE__ */ x.createElement(Rk, {
    sectors: t,
    props: r,
    showLabels: n
  });
}
function Lk(e) {
  var {
    sectors: t,
    activeShape: r,
    inactiveShape: n,
    allOtherPieProps: i
  } = e, a = F(or), {
    onMouseEnter: o,
    onClick: u,
    onMouseLeave: s
  } = i, c = pc(i, xk), l = lc(o, i.dataKey), f = cc(s), d = fc(u, i.dataKey);
  return t == null || t.length === 0 ? null : /* @__PURE__ */ x.createElement(x.Fragment, null, t.map((v, h) => {
    if (v?.startAngle === 0 && v?.endAngle === 0 && t.length !== 1) return null;
    var p = r && String(h) === a, m = a ? n : null, y = p ? r : m, g = pe(pe({}, v), {}, {
      stroke: v.stroke,
      tabIndex: -1,
      [bm]: h,
      [xm]: i.dataKey
    });
    return /* @__PURE__ */ x.createElement(Ke, sr({
      tabIndex: -1,
      className: "recharts-pie-sector"
    }, Pa(c, v, h), {
      // @ts-expect-error the types need a bit of attention
      onMouseEnter: l(v, h),
      onMouseLeave: f(v, h),
      onClick: d(v, h),
      key: "sector-".concat(v?.startAngle, "-").concat(v?.endAngle, "-").concat(v.midAngle, "-").concat(h)
    }), /* @__PURE__ */ x.createElement(ab, sr({
      option: y,
      isActive: p,
      shapeType: "sector"
    }, g)));
  }));
}
function Bk(e) {
  var t, {
    pieSettings: r,
    displayedData: n,
    cells: i,
    offset: a
  } = e, {
    cornerRadius: o,
    startAngle: u,
    endAngle: s,
    dataKey: c,
    nameKey: l,
    tooltipType: f
  } = r, d = Math.abs(r.minAngle), v = Dk(u, s), h = Math.abs(v), p = n.length <= 1 ? 0 : (t = r.paddingAngle) !== null && t !== void 0 ? t : 0, m = n.filter((O) => fe(O, c, 0) !== 0).length, y = (h >= 360 ? m : m - 1) * p, g = h - m * d - y, b = n.reduce((O, A) => {
    var j = fe(A, c, 0);
    return O + (K(j) ? j : 0);
  }, 0), E;
  if (b > 0) {
    var P;
    E = n.map((O, A) => {
      var j = fe(O, c, 0), N = fe(O, l, A), M = kk(r, a, O), k = (K(j) ? j : 0) / b, D, L = pe(pe({}, O), i && i[A] && i[A].props);
      A ? D = P.endAngle + Re(v) * p * (j !== 0 ? 1 : 0) : D = u;
      var B = D + Re(v) * ((j !== 0 ? d : 0) + k * g), z = (D + B) / 2, H = (M.innerRadius + M.outerRadius) / 2, U = [{
        name: N,
        value: j,
        payload: L,
        dataKey: c,
        type: f
      }], de = _e(M.cx, M.cy, H, z);
      return P = pe(pe(pe(pe({}, r.presentationProps), {}, {
        percent: k,
        cornerRadius: o,
        name: N,
        tooltipPayload: U,
        midAngle: z,
        middleRadius: H,
        tooltipPosition: de
      }, L), M), {}, {
        value: j,
        startAngle: D,
        endAngle: B,
        payload: L,
        paddingAngle: Re(v) * p
      }), P;
    });
  }
  return E;
}
function Fk(e) {
  var {
    showLabels: t,
    sectors: r,
    children: n
  } = e, i = Vt(() => !t || !r ? [] : r.map((a) => ({
    value: a.value,
    payload: a.payload,
    clockWise: !1,
    parentViewBox: void 0,
    viewBox: {
      cx: a.cx,
      cy: a.cy,
      innerRadius: a.innerRadius,
      outerRadius: a.outerRadius,
      startAngle: a.startAngle,
      endAngle: a.endAngle,
      clockWise: !1
    },
    fill: a.fill
  })), [r, t]);
  return /* @__PURE__ */ x.createElement(AC, {
    value: t ? i : void 0
  }, n);
}
function Kk(e) {
  var {
    props: t,
    previousSectorsRef: r
  } = e, {
    sectors: n,
    isAnimationActive: i,
    animationBegin: a,
    animationDuration: o,
    animationEasing: u,
    activeShape: s,
    inactiveShape: c,
    onAnimationStart: l,
    onAnimationEnd: f
  } = t, d = Jn(t, "recharts-pie-"), v = r.current, [h, p] = nt(!1), m = ge(() => {
    typeof f == "function" && f(), p(!1);
  }, [f]), y = ge(() => {
    typeof l == "function" && l(), p(!0);
  }, [l]);
  return /* @__PURE__ */ x.createElement(Fk, {
    showLabels: !h,
    sectors: n
  }, /* @__PURE__ */ x.createElement(Zn, {
    animationId: d,
    begin: a,
    duration: o,
    isActive: i,
    easing: u,
    onAnimationStart: y,
    onAnimationEnd: m,
    key: d
  }, (g) => {
    var b = [], E = n && n[0], P = E?.startAngle;
    return n?.forEach((O, A) => {
      var j = v && v[A], N = A > 0 ? Cr(O, "paddingAngle", 0) : 0;
      if (j) {
        var M = we(j.endAngle - j.startAngle, O.endAngle - O.startAngle, g), k = pe(pe({}, O), {}, {
          startAngle: P + N,
          endAngle: P + M + N
        });
        b.push(k), P = k.endAngle;
      } else {
        var {
          endAngle: D,
          startAngle: L
        } = O, B = we(0, D - L, g), z = pe(pe({}, O), {}, {
          startAngle: P + N,
          endAngle: P + B + N
        });
        b.push(z), P = z.endAngle;
      }
    }), r.current = b, /* @__PURE__ */ x.createElement(Ke, null, /* @__PURE__ */ x.createElement(Lk, {
      sectors: b,
      activeShape: s,
      inactiveShape: c,
      allOtherPieProps: t
    }));
  }), /* @__PURE__ */ x.createElement($k, {
    showLabels: !h,
    sectors: n,
    props: t
  }), t.children);
}
var zk = {
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: "ease",
  cx: "50%",
  cy: "50%",
  dataKey: "value",
  endAngle: 360,
  fill: "#808080",
  hide: !1,
  innerRadius: 0,
  isAnimationActive: !dr.isSsr,
  labelLine: !0,
  legendType: "rect",
  minAngle: 0,
  nameKey: "name",
  outerRadius: "80%",
  paddingAngle: 0,
  rootTabIndex: 0,
  startAngle: 0,
  stroke: "#fff"
};
function Wk(e) {
  var {
    id: t
  } = e, r = pc(e, wk), {
    hide: n,
    className: i,
    rootTabIndex: a
  } = e, o = Vt(() => Rs(e.children, ur), [e.children]), u = F((l) => zC(l, t, o)), s = ce(null), c = te("recharts-pie", i);
  return n || u == null ? (s.current = null, /* @__PURE__ */ x.createElement(Ke, {
    tabIndex: a,
    className: c
  })) : /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement(dc, {
    fn: jk,
    args: pe(pe({}, e), {}, {
      sectors: u
    })
  }), /* @__PURE__ */ x.createElement(Ke, {
    tabIndex: a,
    className: c
  }, /* @__PURE__ */ x.createElement(Kk, {
    props: pe(pe({}, r), {}, {
      sectors: u
    }),
    previousSectorsRef: s
  })));
}
function hc(e) {
  var t = ze(e, zk), {
    id: r
  } = t, n = pc(t, Ok), i = Nt(n);
  return /* @__PURE__ */ x.createElement(vc, {
    id: r,
    type: "pie"
  }, (a) => /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement(bk, {
    type: "pie",
    id: a,
    data: n.data,
    dataKey: n.dataKey,
    hide: n.hide,
    angleAxisId: 0,
    radiusAxisId: 0,
    name: n.name,
    nameKey: n.nameKey,
    tooltipType: n.tooltipType,
    legendType: n.legendType,
    fill: n.fill,
    cx: n.cx,
    cy: n.cy,
    startAngle: n.startAngle,
    endAngle: n.endAngle,
    paddingAngle: n.paddingAngle,
    minAngle: n.minAngle,
    innerRadius: n.innerRadius,
    outerRadius: n.outerRadius,
    cornerRadius: n.cornerRadius,
    presentationProps: i,
    maxRadius: t.maxRadius
  }), /* @__PURE__ */ x.createElement(_k, sr({}, n, {
    id: a
  })), /* @__PURE__ */ x.createElement(Wk, sr({}, n, {
    id: a
  }))));
}
hc.displayName = "Pie";
function _p(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function jp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _p(Object(r), !0).forEach(function(n) {
      qk(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _p(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function qk(e, t, r) {
  return (t = Uk(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Uk(e) {
  var t = Vk(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Vk(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Yk = {
  xAxis: {},
  yAxis: {},
  zAxis: {}
}, cb = pt({
  name: "cartesianAxis",
  initialState: Yk,
  reducers: {
    addXAxis(e, t) {
      e.xAxis[t.payload.id] = t.payload;
    },
    removeXAxis(e, t) {
      delete e.xAxis[t.payload.id];
    },
    addYAxis(e, t) {
      e.yAxis[t.payload.id] = t.payload;
    },
    removeYAxis(e, t) {
      delete e.yAxis[t.payload.id];
    },
    addZAxis(e, t) {
      e.zAxis[t.payload.id] = t.payload;
    },
    removeZAxis(e, t) {
      delete e.zAxis[t.payload.id];
    },
    updateYAxisWidth(e, t) {
      var {
        id: r,
        width: n
      } = t.payload;
      e.yAxis[r] && (e.yAxis[r] = jp(jp({}, e.yAxis[r]), {}, {
        width: n
      }));
    }
  }
}), {
  addXAxis: Hk,
  removeXAxis: Gk,
  addYAxis: Xk,
  removeYAxis: Zk,
  addZAxis: E2,
  removeZAxis: A2,
  updateYAxisWidth: Jk
} = cb.actions, Qk = cb.reducer, eD = S([ke], (e) => {
  if (e)
    return {
      top: e.top,
      bottom: e.bottom,
      left: e.left,
      right: e.right
    };
}), tD = S([eD, Yt, Ht], (e, t, r) => {
  if (!(!e || t == null || r == null))
    return {
      x: e.left,
      y: e.top,
      width: Math.max(0, t - e.left - e.right),
      height: Math.max(0, r - e.top - e.bottom)
    };
}), mc = () => F(tD), rD = () => F(jj);
function Tp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Cp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Tp(Object(r), !0).forEach(function(n) {
      nD(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Tp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function nD(e, t, r) {
  return (t = iD(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function iD(e) {
  var t = aD(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function aD(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var oD = (e) => {
  var {
    point: t,
    childIndex: r,
    mainColor: n,
    activeDot: i,
    dataKey: a
  } = e;
  if (i === !1 || t.x == null || t.y == null)
    return null;
  var o = Cp(Cp({
    index: r,
    dataKey: a,
    cx: t.x,
    cy: t.y,
    r: 4,
    fill: n ?? "none",
    strokeWidth: 2,
    stroke: "#fff",
    payload: t.payload,
    value: t.value
  }, xe(i, !1)), Is(i)), u;
  return /* @__PURE__ */ St(i) ? u = /* @__PURE__ */ tn(i, o) : typeof i == "function" ? u = i(o) : u = /* @__PURE__ */ x.createElement(eb, o), /* @__PURE__ */ x.createElement(Ke, {
    className: "recharts-active-dot"
  }, u);
};
function uD(e) {
  var {
    points: t,
    mainColor: r,
    activeDot: n,
    itemDataKey: i
  } = e, a = F(or), o = rD();
  if (t == null || o == null)
    return null;
  var u = t.find((s) => o.includes(s.payload));
  return me(u) ? null : oD({
    point: u,
    childIndex: Number(a),
    mainColor: r,
    dataKey: i,
    activeDot: n
  });
}
var sD = process.env.NODE_ENV === "production", $u = "Invariant failed";
function kp(e, t) {
  if (sD)
    throw new Error($u);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat($u, ": ").concat(r) : $u;
  throw new Error(n);
}
var lD = ["x", "y"];
function As() {
  return As = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, As.apply(null, arguments);
}
function Dp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function jn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Dp(Object(r), !0).forEach(function(n) {
      cD(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Dp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function cD(e, t, r) {
  return (t = fD(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function fD(e) {
  var t = dD(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function dD(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function vD(e, t) {
  if (e == null) return {};
  var r, n, i = pD(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function pD(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function hD(e, t) {
  var {
    x: r,
    y: n
  } = e, i = vD(e, lD), a = "".concat(r), o = parseInt(a, 10), u = "".concat(n), s = parseInt(u, 10), c = "".concat(t.height || i.height), l = parseInt(c, 10), f = "".concat(t.width || i.width), d = parseInt(f, 10);
  return jn(jn(jn(jn(jn({}, t), i), o ? {
    x: o
  } : {}), s ? {
    y: s
  } : {}), {}, {
    height: l,
    width: d,
    name: t.name,
    radius: t.radius
  });
}
function yc(e) {
  return /* @__PURE__ */ x.createElement(ab, As({
    shapeType: "rectangle",
    propTransformer: hD,
    activeClassName: "recharts-active-bar"
  }, e));
}
var mD = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return (n, i) => {
    if (K(t)) return t;
    var a = K(n) || me(n);
    return a ? t(n, i) : (a || (process.env.NODE_ENV !== "production" ? kp(!1, "minPointSize callback function received a value with type of ".concat(typeof n, ". Currently only numbers or null/undefined are supported.")) : kp()), r);
  };
}, yD = {}, fb = pt({
  name: "errorBars",
  initialState: yD,
  reducers: {
    addErrorBar: (e, t) => {
      var {
        itemId: r,
        errorBar: n
      } = t.payload;
      e[r] || (e[r] = []), e[r].push(n);
    },
    replaceErrorBar: (e, t) => {
      var {
        itemId: r,
        prev: n,
        next: i
      } = t.payload;
      e[r] && (e[r] = e[r].map((a) => a.dataKey === n.dataKey && a.direction === n.direction ? i : a));
    },
    removeErrorBar: (e, t) => {
      var {
        itemId: r,
        errorBar: n
      } = t.payload;
      e[r] && (e[r] = e[r].filter((i) => i.dataKey !== n.dataKey || i.direction !== n.direction));
    }
  }
}), {
  addErrorBar: S2,
  replaceErrorBar: _2,
  removeErrorBar: j2
} = fb.actions, gD = fb.reducer, bD = ["children"];
function xD(e, t) {
  if (e == null) return {};
  var r, n, i = wD(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function wD(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var OD = {
  data: [],
  xAxisId: "xAxis-0",
  yAxisId: "yAxis-0",
  dataPointFormatter: () => ({
    x: 0,
    y: 0,
    value: 0
  }),
  errorBarOffset: 0
}, PD = /* @__PURE__ */ Pt(OD);
function db(e) {
  var {
    children: t
  } = e, r = xD(e, bD);
  return /* @__PURE__ */ x.createElement(PD.Provider, {
    value: r
  }, t);
}
function gc(e, t) {
  var r, n, i = F((c) => Xt(c, e)), a = F((c) => Zt(c, t)), o = (r = i?.allowDataOverflow) !== null && r !== void 0 ? r : at.allowDataOverflow, u = (n = a?.allowDataOverflow) !== null && n !== void 0 ? n : ot.allowDataOverflow, s = o || u;
  return {
    needClip: s,
    needClipX: o,
    needClipY: u
  };
}
function vb(e) {
  var {
    xAxisId: t,
    yAxisId: r,
    clipPathId: n
  } = e, i = mc(), {
    needClipX: a,
    needClipY: o,
    needClip: u
  } = gc(t, r);
  if (!u)
    return null;
  var {
    x: s,
    y: c,
    width: l,
    height: f
  } = i;
  return /* @__PURE__ */ x.createElement("clipPath", {
    id: "clipPath-".concat(n)
  }, /* @__PURE__ */ x.createElement("rect", {
    x: a ? s : s - l / 2,
    y: o ? c : c - f / 2,
    width: a ? l : l * 2,
    height: o ? f : f * 2
  }));
}
var ED = ["onMouseEnter", "onMouseLeave", "onClick"], AD = ["value", "background", "tooltipPosition"], SD = ["id"], _D = ["onMouseEnter", "onClick", "onMouseLeave"];
function lr() {
  return lr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, lr.apply(null, arguments);
}
function Np(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function He(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Np(Object(r), !0).forEach(function(n) {
      jD(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Np(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function jD(e, t, r) {
  return (t = TD(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function TD(e) {
  var t = CD(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function CD(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ya(e, t) {
  if (e == null) return {};
  var r, n, i = kD(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function kD(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var DD = (e) => {
  var {
    dataKey: t,
    name: r,
    fill: n,
    legendType: i,
    hide: a
  } = e;
  return [{
    inactive: a,
    dataKey: t,
    type: i,
    color: n,
    value: an(r, t),
    payload: e
  }];
};
function ND(e) {
  var {
    dataKey: t,
    stroke: r,
    strokeWidth: n,
    fill: i,
    name: a,
    hide: o,
    unit: u
  } = e;
  return {
    dataDefinedOnItem: void 0,
    positions: void 0,
    settings: {
      stroke: r,
      strokeWidth: n,
      fill: i,
      dataKey: t,
      nameKey: void 0,
      name: an(a, t),
      hide: o,
      type: e.tooltipType,
      color: e.fill,
      unit: u
    }
  };
}
function MD(e) {
  var t = F(or), {
    data: r,
    dataKey: n,
    background: i,
    allOtherBarProps: a
  } = e, {
    onMouseEnter: o,
    onMouseLeave: u,
    onClick: s
  } = a, c = ya(a, ED), l = lc(o, n), f = cc(u), d = fc(s, n);
  if (!i || r == null)
    return null;
  var v = xe(i, !1);
  return /* @__PURE__ */ x.createElement(x.Fragment, null, r.map((h, p) => {
    var {
      value: m,
      background: y,
      tooltipPosition: g
    } = h, b = ya(h, AD);
    if (!y)
      return null;
    var E = l(h, p), P = f(h, p), O = d(h, p), A = He(He(He(He(He({
      option: i,
      isActive: String(p) === t
    }, b), {}, {
      // @ts-expect-error BarRectangle props do not accept `fill` property.
      fill: "#eee"
    }, y), v), Pa(c, h, p)), {}, {
      onMouseEnter: E,
      onMouseLeave: P,
      onClick: O,
      dataKey: n,
      index: p,
      className: "recharts-bar-background-rectangle"
    });
    return /* @__PURE__ */ x.createElement(yc, lr({
      key: "background-bar-".concat(A.index)
    }, A));
  }));
}
function ID(e) {
  var {
    showLabels: t,
    children: r,
    rects: n
  } = e, i = n?.map((a) => {
    var o = {
      x: a.x,
      y: a.y,
      width: a.width,
      height: a.height
    };
    return He(He({}, o), {}, {
      value: a.value,
      payload: a.payload,
      parentViewBox: a.parentViewBox,
      viewBox: o,
      fill: a.fill
    });
  });
  return /* @__PURE__ */ x.createElement(Jg, {
    value: t ? i : void 0
  }, r);
}
function RD(e) {
  var {
    shape: t,
    activeBar: r,
    baseProps: n,
    entry: i,
    index: a,
    dataKey: o
  } = e, u = F(or), s = F(Ng), c = r && String(a) === u && (s == null || o === s), l = c ? r : t;
  return /* @__PURE__ */ x.createElement(yc, lr({}, n, i, {
    isActive: c,
    option: l,
    index: a,
    dataKey: o
  }));
}
function $D(e) {
  var {
    shape: t,
    baseProps: r,
    entry: n,
    index: i,
    dataKey: a
  } = e;
  return /* @__PURE__ */ x.createElement(yc, lr({}, r, n, {
    isActive: !1,
    option: t,
    index: i,
    dataKey: a
  }));
}
function LD(e) {
  var {
    data: t,
    props: r
  } = e, n = Nt(r), {
    id: i
  } = n, a = ya(n, SD), {
    shape: o,
    dataKey: u,
    activeBar: s
  } = r, {
    onMouseEnter: c,
    onClick: l,
    onMouseLeave: f
  } = r, d = ya(r, _D), v = lc(c, u), h = cc(f), p = fc(l, u);
  return t ? /* @__PURE__ */ x.createElement(x.Fragment, null, t.map((m, y) => /* @__PURE__ */ x.createElement(Ke, lr({
    className: "recharts-bar-rectangle"
  }, Pa(d, m, y), {
    // @ts-expect-error BarRectangleItem type definition says it's missing properties, but I can see them present in debugger!
    onMouseEnter: v(m, y),
    onMouseLeave: h(m, y),
    onClick: p(m, y),
    key: "rectangle-".concat(m?.x, "-").concat(m?.y, "-").concat(m?.value, "-").concat(y)
  }), s ? /* @__PURE__ */ x.createElement(RD, {
    shape: o,
    activeBar: s,
    baseProps: a,
    entry: m,
    index: y,
    dataKey: u
  }) : (
    /*
     * If the `activeBar` prop is falsy, then let's call the variant without hooks.
     * Using the `selectActiveTooltipIndex` selector is usually fast
     * but in charts with large-ish amount of data even the few nanoseconds add up to a noticeable jank.
     * If the activeBar is false then we don't need to know which index is active - because we won't use it anyway.
     * So let's just skip the hooks altogether. That way, React can skip rendering the component,
     * and can skip the tree reconciliation for its children too.
     * Because we can't call hooks conditionally, we need to have a separate component for that.
     */
    /* @__PURE__ */ x.createElement($D, {
      shape: o,
      baseProps: a,
      entry: m,
      index: y,
      dataKey: u
    })
  )))) : null;
}
function BD(e) {
  var {
    props: t,
    previousRectanglesRef: r
  } = e, {
    data: n,
    layout: i,
    isAnimationActive: a,
    animationBegin: o,
    animationDuration: u,
    animationEasing: s,
    onAnimationEnd: c,
    onAnimationStart: l
  } = t, f = r.current, d = Jn(t, "recharts-bar-"), [v, h] = nt(!1), p = !v, m = ge(() => {
    typeof c == "function" && c(), h(!1);
  }, [c]), y = ge(() => {
    typeof l == "function" && l(), h(!0);
  }, [l]);
  return /* @__PURE__ */ x.createElement(ID, {
    showLabels: p,
    rects: n
  }, /* @__PURE__ */ x.createElement(Zn, {
    animationId: d,
    begin: o,
    duration: u,
    isActive: a,
    easing: s,
    onAnimationEnd: m,
    onAnimationStart: y,
    key: d
  }, (g) => {
    var b = g === 1 ? n : n?.map((E, P) => {
      var O = f && f[P];
      if (O)
        return He(He({}, E), {}, {
          x: we(O.x, E.x, g),
          y: we(O.y, E.y, g),
          width: we(O.width, E.width, g),
          height: we(O.height, E.height, g)
        });
      if (i === "horizontal") {
        var A = we(0, E.height, g);
        return He(He({}, E), {}, {
          y: E.y + E.height - A,
          height: A
        });
      }
      var j = we(0, E.width, g);
      return He(He({}, E), {}, {
        width: j
      });
    });
    return g > 0 && (r.current = b ?? null), b == null ? null : /* @__PURE__ */ x.createElement(Ke, null, /* @__PURE__ */ x.createElement(LD, {
      props: t,
      data: b
    }));
  }), /* @__PURE__ */ x.createElement(ic, {
    label: t.label
  }), t.children);
}
function FD(e) {
  var t = ce(null);
  return /* @__PURE__ */ x.createElement(BD, {
    previousRectanglesRef: t,
    props: e
  });
}
var pb = 0, KD = (e, t) => {
  var r = Array.isArray(e.value) ? e.value[1] : e.value;
  return {
    x: e.x,
    y: e.y,
    value: r,
    // @ts-expect-error getValueByDataKey does not validate the output type
    errorVal: fe(e, t)
  };
};
class zD extends Gp {
  render() {
    var {
      hide: t,
      data: r,
      dataKey: n,
      className: i,
      xAxisId: a,
      yAxisId: o,
      needClip: u,
      background: s,
      id: c
    } = this.props;
    if (t || r == null)
      return null;
    var l = te("recharts-bar", i), f = c;
    return /* @__PURE__ */ x.createElement(Ke, {
      className: l,
      id: c
    }, u && /* @__PURE__ */ x.createElement("defs", null, /* @__PURE__ */ x.createElement(vb, {
      clipPathId: f,
      xAxisId: a,
      yAxisId: o
    })), /* @__PURE__ */ x.createElement(Ke, {
      className: "recharts-bar-rectangles",
      clipPath: u ? "url(#clipPath-".concat(f, ")") : void 0
    }, /* @__PURE__ */ x.createElement(MD, {
      data: r,
      dataKey: n,
      background: s,
      allOtherBarProps: this.props
    }), /* @__PURE__ */ x.createElement(FD, this.props)));
  }
}
var WD = {
  activeBar: !1,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease",
  hide: !1,
  isAnimationActive: !dr.isSsr,
  legendType: "rect",
  minPointSize: pb,
  xAxisId: 0,
  yAxisId: 0
};
function qD(e) {
  var {
    xAxisId: t,
    yAxisId: r,
    hide: n,
    legendType: i,
    minPointSize: a,
    activeBar: o,
    animationBegin: u,
    animationDuration: s,
    animationEasing: c,
    isAnimationActive: l
  } = e, {
    needClip: f
  } = gc(t, r), d = Ra(), v = it(), h = Rs(e.children, ur), p = F((g) => gN(g, t, r, v, e.id, h));
  if (d !== "vertical" && d !== "horizontal")
    return null;
  var m, y = p?.[0];
  return y == null || y.height == null || y.width == null ? m = 0 : m = d === "vertical" ? y.height / 2 : y.width / 2, /* @__PURE__ */ x.createElement(db, {
    xAxisId: t,
    yAxisId: r,
    data: p,
    dataPointFormatter: KD,
    errorBarOffset: m
  }, /* @__PURE__ */ x.createElement(zD, lr({}, e, {
    layout: d,
    needClip: f,
    data: p,
    xAxisId: t,
    yAxisId: r,
    hide: n,
    legendType: i,
    minPointSize: a,
    activeBar: o,
    animationBegin: u,
    animationDuration: s,
    animationEasing: c,
    isAnimationActive: l
  })));
}
function UD(e) {
  var {
    layout: t,
    barSettings: {
      dataKey: r,
      minPointSize: n
    },
    pos: i,
    bandSize: a,
    xAxis: o,
    yAxis: u,
    xAxisTicks: s,
    yAxisTicks: c,
    stackedData: l,
    displayedData: f,
    offset: d,
    cells: v,
    parentViewBox: h
  } = e, p = t === "horizontal" ? u : o, m = l ? p.scale.domain() : null, y = m1({
    numericAxis: p
  });
  return f.map((g, b) => {
    var E, P, O, A, j, N;
    l ? E = c1(l[b], m) : (E = fe(g, r), Array.isArray(E) || (E = [y, E]));
    var M = mD(n, pb)(E[1], b);
    if (t === "horizontal") {
      var k, [D, L] = [u.scale(E[0]), u.scale(E[1])];
      P = bd({
        axis: o,
        ticks: s,
        bandSize: a,
        offset: i.offset,
        entry: g,
        index: b
      }), O = (k = L ?? D) !== null && k !== void 0 ? k : void 0, A = i.size;
      var B = D - L;
      if (j = ct(B) ? 0 : B, N = {
        x: P,
        y: d.top,
        width: A,
        height: d.height
      }, Math.abs(M) > 0 && Math.abs(j) < Math.abs(M)) {
        var z = Re(j || M) * (Math.abs(M) - Math.abs(j));
        O -= z, j += z;
      }
    } else {
      var [H, U] = [o.scale(E[0]), o.scale(E[1])];
      if (P = H, O = bd({
        axis: u,
        ticks: c,
        bandSize: a,
        offset: i.offset,
        entry: g,
        index: b
      }), A = U - H, j = i.size, N = {
        x: d.left,
        y: O,
        width: d.width,
        height: j
      }, Math.abs(M) > 0 && Math.abs(A) < Math.abs(M)) {
        var de = Re(A || M) * (Math.abs(M) - Math.abs(A));
        A += de;
      }
    }
    if (P == null || O == null || A == null || j == null)
      return null;
    var Q = He(He({}, g), {}, {
      x: P,
      y: O,
      width: A,
      height: j,
      value: l ? E : E[1],
      payload: g,
      background: N,
      tooltipPosition: {
        x: P + A / 2,
        y: O + j / 2
      },
      parentViewBox: h
    }, v && v[b] && v[b].props);
    return Q;
  }).filter(Boolean);
}
function VD(e) {
  var t = ze(e, WD), r = it();
  return /* @__PURE__ */ x.createElement(vc, {
    id: t.id,
    type: "bar"
  }, (n) => /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement(ub, {
    legendPayload: DD(t)
  }), /* @__PURE__ */ x.createElement(dc, {
    fn: ND,
    args: t
  }), /* @__PURE__ */ x.createElement(lb, {
    type: "bar",
    id: n,
    data: void 0,
    xAxisId: t.xAxisId,
    yAxisId: t.yAxisId,
    zAxisId: 0,
    dataKey: t.dataKey,
    stackId: h1(t.stackId),
    hide: t.hide,
    barSize: t.barSize,
    minPointSize: t.minPointSize,
    maxBarSize: t.maxBarSize,
    isPanorama: r
  }), /* @__PURE__ */ x.createElement(qD, lr({}, t, {
    id: n
  }))));
}
var hb = /* @__PURE__ */ x.memo(VD);
hb.displayName = "Bar";
function Mp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Mi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Mp(Object(r), !0).forEach(function(n) {
      YD(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function YD(e, t, r) {
  return (t = HD(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function HD(e) {
  var t = GD(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function GD(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var XD = (e, t) => t, ZD = (e, t, r) => r, JD = (e, t, r, n) => n, QD = (e, t, r, n, i) => i, di = S([Ha, QD], (e, t) => e.filter((r) => r.type === "bar").find((r) => r.id === t)), eN = S([di], (e) => e?.maxBarSize), tN = (e, t, r, n, i, a) => a, Ip = (e, t, r) => {
  var n = r ?? e;
  if (!me(n))
    return Ve(n, t, 0);
}, rN = S([Z, Ha, XD, ZD, JD], (e, t, r, n, i) => t.filter((a) => e === "horizontal" ? a.xAxisId === r : a.yAxisId === n).filter((a) => a.isPanorama === i).filter((a) => a.hide === !1).filter((a) => a.type === "bar")), nN = (e, t, r, n) => {
  var i = Z(e);
  return i === "horizontal" ? gs(e, "yAxis", r, n) : gs(e, "xAxis", t, n);
}, iN = (e, t, r) => {
  var n = Z(e);
  return n === "horizontal" ? Mv(e, "xAxis", t) : Mv(e, "yAxis", r);
}, aN = (e, t, r) => {
  var n = {}, i = e.filter(Ya), a = e.filter((c) => c.stackId == null), o = i.reduce((c, l) => (c[l.stackId] || (c[l.stackId] = []), c[l.stackId].push(l), c), n), u = Object.entries(o).map((c) => {
    var [l, f] = c, d = f.map((h) => h.dataKey), v = Ip(t, r, f[0].barSize);
    return {
      stackId: l,
      dataKeys: d,
      barSize: v
    };
  }), s = a.map((c) => {
    var l = [c.dataKey].filter((d) => d != null), f = Ip(t, r, c.barSize);
    return {
      stackId: void 0,
      dataKeys: l,
      barSize: f
    };
  });
  return [...u, ...s];
}, oN = S([rN, $S, iN], aN), uN = (e, t, r, n, i) => {
  var a, o, u = di(e, t, r, n, i);
  if (u != null) {
    var s = Z(e), c = ky(e), {
      maxBarSize: l
    } = u, f = me(l) ? c : l, d, v;
    return s === "horizontal" ? (d = ar(e, "xAxis", t, n), v = ir(e, "xAxis", t, n)) : (d = ar(e, "yAxis", r, n), v = ir(e, "yAxis", r, n)), (a = (o = Rn(d, v, !0)) !== null && o !== void 0 ? o : f) !== null && a !== void 0 ? a : 0;
  }
}, mb = (e, t, r, n) => {
  var i = Z(e), a, o;
  return i === "horizontal" ? (a = ar(e, "xAxis", t, n), o = ir(e, "xAxis", t, n)) : (a = ar(e, "yAxis", r, n), o = ir(e, "yAxis", r, n)), Rn(a, o);
};
function sN(e, t, r, n, i) {
  var a = n.length;
  if (!(a < 1)) {
    var o = Ve(e, r, 0, !0), u, s = [];
    if (dt(n[0].barSize)) {
      var c = !1, l = r / a, f = n.reduce((y, g) => y + (g.barSize || 0), 0);
      f += (a - 1) * o, f >= r && (f -= (a - 1) * o, o = 0), f >= r && l > 0 && (c = !0, l *= 0.9, f = a * l);
      var d = (r - f) / 2 >> 0, v = {
        offset: d - o,
        size: 0
      };
      u = n.reduce((y, g) => {
        var b, E = {
          stackId: g.stackId,
          dataKeys: g.dataKeys,
          position: {
            offset: v.offset + v.size + o,
            size: c ? l : (b = g.barSize) !== null && b !== void 0 ? b : 0
          }
        }, P = [...y, E];
        return v = P[P.length - 1].position, P;
      }, s);
    } else {
      var h = Ve(t, r, 0, !0);
      r - 2 * h - (a - 1) * o <= 0 && (o = 0);
      var p = (r - 2 * h - (a - 1) * o) / a;
      p > 1 && (p >>= 0);
      var m = dt(i) ? Math.min(p, i) : p;
      u = n.reduce((y, g, b) => [...y, {
        stackId: g.stackId,
        dataKeys: g.dataKeys,
        position: {
          offset: h + (p + o) * b + (p - m) / 2,
          size: m
        }
      }], s);
    }
    return u;
  }
}
var lN = (e, t, r, n, i, a, o) => {
  var u = me(o) ? t : o, s = sN(r, n, i !== a ? i : a, e, u);
  return i !== a && s != null && (s = s.map((c) => Mi(Mi({}, c), {}, {
    position: Mi(Mi({}, c.position), {}, {
      offset: c.position.offset - i / 2
    })
  }))), s;
}, cN = S([oN, ky, RS, Dy, uN, mb, eN], lN), fN = (e, t, r, n) => ar(e, "xAxis", t, n), dN = (e, t, r, n) => ar(e, "yAxis", r, n), vN = (e, t, r, n) => ir(e, "xAxis", t, n), pN = (e, t, r, n) => ir(e, "yAxis", r, n), hN = S([cN, di], (e, t) => {
  if (!(e == null || t == null)) {
    var r = e.find((n) => n.stackId === t.stackId && t.dataKey != null && n.dataKeys.includes(t.dataKey));
    if (r != null)
      return r.position;
  }
}), mN = (e, t) => {
  var r = Tl(t);
  if (!(!e || r == null || t == null)) {
    var {
      stackId: n
    } = t;
    if (n != null) {
      var i = e[n];
      if (i) {
        var {
          stackedData: a
        } = i;
        if (a)
          return a.find((o) => o.key === r);
      }
    }
  }
}, yN = S([nN, di], mN), gN = S([ke, Hs, fN, dN, vN, pN, hN, Z, Wa, mb, yN, di, tN], (e, t, r, n, i, a, o, u, s, c, l, f, d) => {
  var {
    chartData: v,
    dataStartIndex: h,
    dataEndIndex: p
  } = s;
  if (!(f == null || o == null || t == null || u !== "horizontal" && u !== "vertical" || r == null || n == null || i == null || a == null || c == null)) {
    var {
      data: m
    } = f, y;
    if (m != null && m.length > 0 ? y = m : y = v?.slice(h, p + 1), y != null)
      return UD({
        layout: u,
        barSettings: f,
        pos: o,
        parentViewBox: t,
        bandSize: c,
        xAxis: r,
        yAxis: n,
        xAxisTicks: i,
        yAxisTicks: a,
        stackedData: l,
        displayedData: y,
        offset: e,
        cells: d
      });
  }
}), yb = (e) => {
  var {
    chartData: t
  } = e, r = Ee(), n = it();
  return be(() => n ? () => {
  } : (r(qv(t)), () => {
    r(qv(void 0));
  }), [t, r, n]), null;
}, Rp = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  padding: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
}, gb = pt({
  name: "brush",
  initialState: Rp,
  reducers: {
    setBrushSettings(e, t) {
      return t.payload == null ? Rp : t.payload;
    }
  }
}), {
  setBrushSettings: T2
} = gb.actions, bN = gb.reducer;
function xN(e, t, r) {
  return (t = wN(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function wN(e) {
  var t = ON(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ON(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
class bc {
  static create(t) {
    return new bc(t);
  }
  constructor(t) {
    this.scale = t;
  }
  get domain() {
    return this.scale.domain;
  }
  get range() {
    return this.scale.range;
  }
  get rangeMin() {
    return this.range()[0];
  }
  get rangeMax() {
    return this.range()[1];
  }
  get bandwidth() {
    return this.scale.bandwidth;
  }
  apply(t) {
    var {
      bandAware: r,
      position: n
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (t !== void 0) {
      if (n)
        switch (n) {
          case "start":
            return this.scale(t);
          case "middle": {
            var i = this.bandwidth ? this.bandwidth() / 2 : 0;
            return this.scale(t) + i;
          }
          case "end": {
            var a = this.bandwidth ? this.bandwidth() : 0;
            return this.scale(t) + a;
          }
          default:
            return this.scale(t);
        }
      if (r) {
        var o = this.bandwidth ? this.bandwidth() / 2 : 0;
        return this.scale(t) + o;
      }
      return this.scale(t);
    }
  }
  isInRange(t) {
    var r = this.range(), n = r[0], i = r[r.length - 1];
    return n <= i ? t >= n && t <= i : t >= i && t <= n;
  }
}
xN(bc, "EPS", 1e-4);
function PN(e) {
  return (e % 180 + 180) % 180;
}
var EN = function(t) {
  var {
    width: r,
    height: n
  } = t, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = PN(i), o = a * Math.PI / 180, u = Math.atan(n / r), s = o > u && o < Math.PI - u ? n / Math.sin(o) : r / Math.cos(o);
  return Math.abs(s);
}, AN = {
  dots: [],
  areas: [],
  lines: []
}, bb = pt({
  name: "referenceElements",
  initialState: AN,
  reducers: {
    addDot: (e, t) => {
      e.dots.push(t.payload);
    },
    removeDot: (e, t) => {
      var r = Bt(e).dots.findIndex((n) => n === t.payload);
      r !== -1 && e.dots.splice(r, 1);
    },
    addArea: (e, t) => {
      e.areas.push(t.payload);
    },
    removeArea: (e, t) => {
      var r = Bt(e).areas.findIndex((n) => n === t.payload);
      r !== -1 && e.areas.splice(r, 1);
    },
    addLine: (e, t) => {
      e.lines.push(t.payload);
    },
    removeLine: (e, t) => {
      var r = Bt(e).lines.findIndex((n) => n === t.payload);
      r !== -1 && e.lines.splice(r, 1);
    }
  }
}), {
  addDot: C2,
  removeDot: k2,
  addArea: D2,
  removeArea: N2,
  addLine: M2,
  removeLine: I2
} = bb.actions, SN = bb.reducer, _N = /* @__PURE__ */ Pt(void 0), jN = (e) => {
  var {
    children: t
  } = e, [r] = nt("".concat(Nn("recharts"), "-clip")), n = mc();
  if (n == null)
    return null;
  var {
    x: i,
    y: a,
    width: o,
    height: u
  } = n;
  return /* @__PURE__ */ x.createElement(_N.Provider, {
    value: r
  }, /* @__PURE__ */ x.createElement("defs", null, /* @__PURE__ */ x.createElement("clipPath", {
    id: r
  }, /* @__PURE__ */ x.createElement("rect", {
    x: i,
    y: a,
    height: u,
    width: o
  }))), t);
};
function en(e, t) {
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r) && (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r]))
      return !1;
  for (var n in t)
    if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n))
      return !1;
  return !0;
}
function xb(e, t, r) {
  if (t < 1)
    return [];
  if (t === 1 && r === void 0)
    return e;
  for (var n = [], i = 0; i < e.length; i += t)
    n.push(e[i]);
  return n;
}
function TN(e, t, r) {
  var n = {
    width: e.width + t.width,
    height: e.height + t.height
  };
  return EN(n, r);
}
function CN(e, t, r) {
  var n = r === "width", {
    x: i,
    y: a,
    width: o,
    height: u
  } = e;
  return t === 1 ? {
    start: n ? i : a,
    end: n ? i + o : a + u
  } : {
    start: n ? i + o : a + u,
    end: n ? i : a
  };
}
function ga(e, t, r, n, i) {
  if (e * t < e * n || e * t > e * i)
    return !1;
  var a = r();
  return e * (t - e * a / 2 - n) >= 0 && e * (t + e * a / 2 - i) <= 0;
}
function kN(e, t) {
  return xb(e, t + 1);
}
function DN(e, t, r, n, i) {
  for (var a = (n || []).slice(), {
    start: o,
    end: u
  } = t, s = 0, c = 1, l = o, f = function() {
    var h = n?.[s];
    if (h === void 0)
      return {
        v: xb(n, c)
      };
    var p = s, m, y = () => (m === void 0 && (m = r(h, p)), m), g = h.coordinate, b = s === 0 || ga(e, g, y, l, u);
    b || (s = 0, l = o, c += 1), b && (l = g + e * (y() / 2 + i), s += c);
  }, d; c <= a.length; )
    if (d = f(), d) return d.v;
  return [];
}
function $p(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function qe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $p(Object(r), !0).forEach(function(n) {
      NN(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $p(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function NN(e, t, r) {
  return (t = MN(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function MN(e) {
  var t = IN(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function IN(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function RN(e, t, r, n, i) {
  for (var a = (n || []).slice(), o = a.length, {
    start: u
  } = t, {
    end: s
  } = t, c = function(d) {
    var v = a[d], h, p = () => (h === void 0 && (h = r(v, d)), h);
    if (d === o - 1) {
      var m = e * (v.coordinate + e * p() / 2 - s);
      a[d] = v = qe(qe({}, v), {}, {
        tickCoord: m > 0 ? v.coordinate - m * e : v.coordinate
      });
    } else
      a[d] = v = qe(qe({}, v), {}, {
        tickCoord: v.coordinate
      });
    var y = ga(e, v.tickCoord, p, u, s);
    y && (s = v.tickCoord - e * (p() / 2 + i), a[d] = qe(qe({}, v), {}, {
      isShow: !0
    }));
  }, l = o - 1; l >= 0; l--)
    c(l);
  return a;
}
function $N(e, t, r, n, i, a) {
  var o = (n || []).slice(), u = o.length, {
    start: s,
    end: c
  } = t;
  if (a) {
    var l = n[u - 1], f = r(l, u - 1), d = e * (l.coordinate + e * f / 2 - c);
    o[u - 1] = l = qe(qe({}, l), {}, {
      tickCoord: d > 0 ? l.coordinate - d * e : l.coordinate
    });
    var v = ga(e, l.tickCoord, () => f, s, c);
    v && (c = l.tickCoord - e * (f / 2 + i), o[u - 1] = qe(qe({}, l), {}, {
      isShow: !0
    }));
  }
  for (var h = a ? u - 1 : u, p = function(g) {
    var b = o[g], E, P = () => (E === void 0 && (E = r(b, g)), E);
    if (g === 0) {
      var O = e * (b.coordinate - e * P() / 2 - s);
      o[g] = b = qe(qe({}, b), {}, {
        tickCoord: O < 0 ? b.coordinate - O * e : b.coordinate
      });
    } else
      o[g] = b = qe(qe({}, b), {}, {
        tickCoord: b.coordinate
      });
    var A = ga(e, b.tickCoord, P, s, c);
    A && (s = b.tickCoord + e * (P() / 2 + i), o[g] = qe(qe({}, b), {}, {
      isShow: !0
    }));
  }, m = 0; m < h; m++)
    p(m);
  return o;
}
function xc(e, t, r) {
  var {
    tick: n,
    ticks: i,
    viewBox: a,
    minTickGap: o,
    orientation: u,
    interval: s,
    tickFormatter: c,
    unit: l,
    angle: f
  } = e;
  if (!i || !i.length || !n)
    return [];
  if (K(s) || dr.isSsr) {
    var d;
    return (d = kN(i, K(s) ? s : 0)) !== null && d !== void 0 ? d : [];
  }
  var v = [], h = u === "top" || u === "bottom" ? "width" : "height", p = l && h === "width" ? Dn(l, {
    fontSize: t,
    letterSpacing: r
  }) : {
    width: 0,
    height: 0
  }, m = (b, E) => {
    var P = typeof c == "function" ? c(b.value, E) : b.value;
    return h === "width" ? TN(Dn(P, {
      fontSize: t,
      letterSpacing: r
    }), p, f) : Dn(P, {
      fontSize: t,
      letterSpacing: r
    })[h];
  }, y = i.length >= 2 ? Re(i[1].coordinate - i[0].coordinate) : 1, g = CN(a, y, h);
  return s === "equidistantPreserveStart" ? DN(y, g, m, i, o) : (s === "preserveStart" || s === "preserveStartEnd" ? v = $N(y, g, m, i, o, s === "preserveStartEnd") : v = RN(y, g, m, i, o), v.filter((b) => b.isShow));
}
var LN = (e) => {
  var {
    ticks: t,
    label: r,
    labelGapWithTick: n = 5,
    // Default gap between label and tick
    tickSize: i = 0,
    tickMargin: a = 0
  } = e, o = 0;
  if (t) {
    t.forEach((l) => {
      if (l) {
        var f = l.getBoundingClientRect();
        f.width > o && (o = f.width);
      }
    });
    var u = r ? r.getBoundingClientRect().width : 0, s = i + a, c = o + s + u + (r ? n : 0);
    return Math.round(c);
  }
  return 0;
}, BN = ["axisLine", "width", "height", "className", "hide", "ticks"], FN = ["viewBox"], KN = ["viewBox"];
function Ss(e, t) {
  if (e == null) return {};
  var r, n, i = zN(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function zN(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Mr() {
  return Mr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Mr.apply(null, arguments);
}
function Lp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ce(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Lp(Object(r), !0).forEach(function(n) {
      WN(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function WN(e, t, r) {
  return (t = qN(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function qN(e) {
  var t = UN(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function UN(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var wc = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  // The orientation of axis
  orientation: "bottom",
  // The ticks
  ticks: [],
  stroke: "#666",
  tickLine: !0,
  axisLine: !0,
  tick: !0,
  mirror: !1,
  minTickGap: 5,
  // The width or height of tick
  tickSize: 6,
  tickMargin: 2,
  interval: "preserveEnd"
};
function VN(e) {
  var {
    x: t,
    y: r,
    width: n,
    height: i,
    orientation: a,
    mirror: o,
    axisLine: u,
    otherSvgProps: s
  } = e;
  if (!u)
    return null;
  var c = Ce(Ce(Ce({}, s), xe(u, !1)), {}, {
    fill: "none"
  });
  if (a === "top" || a === "bottom") {
    var l = +(a === "top" && !o || a === "bottom" && o);
    c = Ce(Ce({}, c), {}, {
      x1: t,
      y1: r + l * i,
      x2: t + n,
      y2: r + l * i
    });
  } else {
    var f = +(a === "left" && !o || a === "right" && o);
    c = Ce(Ce({}, c), {}, {
      x1: t + f * n,
      y1: r,
      x2: t + f * n,
      y2: r + i
    });
  }
  return /* @__PURE__ */ x.createElement("line", Mr({}, c, {
    className: te("recharts-cartesian-axis-line", Cr(u, "className"))
  }));
}
function YN(e, t, r, n, i, a, o, u, s) {
  var c, l, f, d, v, h, p = u ? -1 : 1, m = e.tickSize || o, y = K(e.tickCoord) ? e.tickCoord : e.coordinate;
  switch (a) {
    case "top":
      c = l = e.coordinate, d = r + +!u * i, f = d - p * m, h = f - p * s, v = y;
      break;
    case "left":
      f = d = e.coordinate, l = t + +!u * n, c = l - p * m, v = c - p * s, h = y;
      break;
    case "right":
      f = d = e.coordinate, l = t + +u * n, c = l + p * m, v = c + p * s, h = y;
      break;
    default:
      c = l = e.coordinate, d = r + +u * i, f = d + p * m, h = f + p * s, v = y;
      break;
  }
  return {
    line: {
      x1: c,
      y1: f,
      x2: l,
      y2: d
    },
    tick: {
      x: v,
      y: h
    }
  };
}
function HN(e, t) {
  switch (e) {
    case "left":
      return t ? "start" : "end";
    case "right":
      return t ? "end" : "start";
    default:
      return "middle";
  }
}
function GN(e, t) {
  switch (e) {
    case "left":
    case "right":
      return "middle";
    case "top":
      return t ? "start" : "end";
    default:
      return t ? "end" : "start";
  }
}
function XN(e) {
  var {
    option: t,
    tickProps: r,
    value: n
  } = e, i, a = te(r.className, "recharts-cartesian-axis-tick-value");
  if (/* @__PURE__ */ x.isValidElement(t))
    i = /* @__PURE__ */ x.cloneElement(t, Ce(Ce({}, r), {}, {
      className: a
    }));
  else if (typeof t == "function")
    i = t(Ce(Ce({}, r), {}, {
      className: a
    }));
  else {
    var o = "recharts-cartesian-axis-tick-value";
    typeof t != "boolean" && (o = te(o, t?.className)), i = /* @__PURE__ */ x.createElement(eo, Mr({}, r, {
      className: o
    }), n);
  }
  return i;
}
function ZN(e) {
  var {
    ticks: t = [],
    tick: r,
    tickLine: n,
    stroke: i,
    tickFormatter: a,
    unit: o,
    padding: u,
    tickTextProps: s,
    orientation: c,
    mirror: l,
    x: f,
    y: d,
    width: v,
    height: h,
    tickSize: p,
    tickMargin: m,
    fontSize: y,
    letterSpacing: g,
    getTicksConfig: b,
    events: E
  } = e, P = xc(Ce(Ce({}, b), {}, {
    ticks: t
  }), y, g), O = HN(c, l), A = GN(c, l), j = Nt(b), N = xe(r, !1), M = Ce(Ce({}, j), {}, {
    fill: "none"
  }, xe(n, !1)), k = P.map((D, L) => {
    var {
      line: B,
      tick: z
    } = YN(D, f, d, v, h, c, p, l, m), H = Ce(Ce(Ce(Ce({
      // @ts-expect-error textAnchor from axisProps is typed as `string` but Text wants type `TextAnchor`
      textAnchor: O,
      verticalAnchor: A
    }, j), {}, {
      stroke: "none",
      fill: i
    }, N), z), {}, {
      index: L,
      payload: D,
      visibleTicksCount: P.length,
      tickFormatter: a,
      padding: u
    }, s);
    return /* @__PURE__ */ x.createElement(Ke, Mr({
      className: "recharts-cartesian-axis-tick",
      key: "tick-".concat(D.value, "-").concat(D.coordinate, "-").concat(D.tickCoord)
    }, Pa(E, D, L)), n && // @ts-expect-error recharts scale is not compatible with SVG scale
    /* @__PURE__ */ x.createElement("line", Mr({}, M, B, {
      className: te("recharts-cartesian-axis-tick-line", Cr(n, "className"))
    })), r && /* @__PURE__ */ x.createElement(XN, {
      option: r,
      tickProps: H,
      value: "".concat(typeof a == "function" ? a(D.value, L) : D.value).concat(o || "")
    }));
  });
  return k.length > 0 ? /* @__PURE__ */ x.createElement("g", {
    className: "recharts-cartesian-axis-ticks"
  }, k) : null;
}
var JN = /* @__PURE__ */ vt((e, t) => {
  var {
    axisLine: r,
    width: n,
    height: i,
    className: a,
    hide: o,
    ticks: u
  } = e, s = Ss(e, BN), [c, l] = nt(""), [f, d] = nt(""), v = ce([]);
  Zp(t, () => ({
    getCalculatedWidth: () => {
      var p;
      return LN({
        ticks: v.current,
        label: (p = e.labelRef) === null || p === void 0 ? void 0 : p.current,
        labelGapWithTick: 5,
        tickSize: e.tickSize,
        tickMargin: e.tickMargin
      });
    }
  }));
  var h = ge((p) => {
    if (p) {
      var m = p.getElementsByClassName("recharts-cartesian-axis-tick-value");
      v.current = Array.from(m);
      var y = m[0];
      if (y) {
        var g = window.getComputedStyle(y), b = g.fontSize, E = g.letterSpacing;
        (b !== c || E !== f) && (l(b), d(E));
      }
    }
  }, [c, f]);
  return o || n != null && n <= 0 || i != null && i <= 0 ? null : /* @__PURE__ */ x.createElement(Ke, {
    className: te("recharts-cartesian-axis", a),
    ref: h
  }, /* @__PURE__ */ x.createElement(VN, {
    x: e.x,
    y: e.y,
    width: n,
    height: i,
    orientation: e.orientation,
    mirror: e.mirror,
    axisLine: r,
    otherSvgProps: Nt(e)
  }), /* @__PURE__ */ x.createElement(ZN, {
    ticks: u,
    tick: e.tick,
    tickLine: e.tickLine,
    stroke: e.stroke,
    tickFormatter: e.tickFormatter,
    unit: e.unit,
    padding: e.padding,
    tickTextProps: e.tickTextProps,
    orientation: e.orientation,
    mirror: e.mirror,
    x: e.x,
    y: e.y,
    width: e.width,
    height: e.height,
    tickSize: e.tickSize,
    tickMargin: e.tickMargin,
    fontSize: c,
    letterSpacing: f,
    getTicksConfig: e,
    events: s
  }), /* @__PURE__ */ x.createElement(iC, {
    x: e.x,
    y: e.y,
    width: e.width,
    height: e.height
  }, /* @__PURE__ */ x.createElement(pC, {
    label: e.label
  }), e.children));
}), QN = /* @__PURE__ */ x.memo(JN, (e, t) => {
  var {
    viewBox: r
  } = e, n = Ss(e, FN), {
    viewBox: i
  } = t, a = Ss(t, KN);
  return en(r, i) && en(n, a);
}), Oc = /* @__PURE__ */ x.forwardRef((e, t) => {
  var r = ze(e, wc);
  return /* @__PURE__ */ x.createElement(QN, Mr({}, r, {
    ref: t
  }));
});
Oc.displayName = "CartesianAxis";
var eM = ["x1", "y1", "x2", "y2", "key"], tM = ["offset"], rM = ["xAxisId", "yAxisId"], nM = ["xAxisId", "yAxisId"];
function Bp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ue(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bp(Object(r), !0).forEach(function(n) {
      iM(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function iM(e, t, r) {
  return (t = aM(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function aM(e) {
  var t = oM(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function oM(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Er() {
  return Er = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Er.apply(null, arguments);
}
function ba(e, t) {
  if (e == null) return {};
  var r, n, i = uM(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function uM(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var sM = (e) => {
  var {
    fill: t
  } = e;
  if (!t || t === "none")
    return null;
  var {
    fillOpacity: r,
    x: n,
    y: i,
    width: a,
    height: o,
    ry: u
  } = e;
  return /* @__PURE__ */ x.createElement("rect", {
    x: n,
    y: i,
    ry: u,
    width: a,
    height: o,
    stroke: "none",
    fill: t,
    fillOpacity: r,
    className: "recharts-cartesian-grid-bg"
  });
};
function wb(e, t) {
  var r;
  if (/* @__PURE__ */ x.isValidElement(e))
    r = /* @__PURE__ */ x.cloneElement(e, t);
  else if (typeof e == "function")
    r = e(t);
  else {
    var {
      x1: n,
      y1: i,
      x2: a,
      y2: o,
      key: u
    } = t, s = ba(t, eM), c = Nt(s), {
      offset: l
    } = c, f = ba(c, tM);
    r = /* @__PURE__ */ x.createElement("line", Er({}, f, {
      x1: n,
      y1: i,
      x2: a,
      y2: o,
      fill: "none",
      key: u
    }));
  }
  return r;
}
function lM(e) {
  var {
    x: t,
    width: r,
    horizontal: n = !0,
    horizontalPoints: i
  } = e;
  if (!n || !i || !i.length)
    return null;
  var {
    xAxisId: a,
    yAxisId: o
  } = e, u = ba(e, rM), s = i.map((c, l) => {
    var f = Ue(Ue({}, u), {}, {
      x1: t,
      y1: c,
      x2: t + r,
      y2: c,
      key: "line-".concat(l),
      index: l
    });
    return wb(n, f);
  });
  return /* @__PURE__ */ x.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, s);
}
function cM(e) {
  var {
    y: t,
    height: r,
    vertical: n = !0,
    verticalPoints: i
  } = e;
  if (!n || !i || !i.length)
    return null;
  var {
    xAxisId: a,
    yAxisId: o
  } = e, u = ba(e, nM), s = i.map((c, l) => {
    var f = Ue(Ue({}, u), {}, {
      x1: c,
      y1: t,
      x2: c,
      y2: t + r,
      key: "line-".concat(l),
      index: l
    });
    return wb(n, f);
  });
  return /* @__PURE__ */ x.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, s);
}
function fM(e) {
  var {
    horizontalFill: t,
    fillOpacity: r,
    x: n,
    y: i,
    width: a,
    height: o,
    horizontalPoints: u,
    horizontal: s = !0
  } = e;
  if (!s || !t || !t.length)
    return null;
  var c = u.map((f) => Math.round(f + i - i)).sort((f, d) => f - d);
  i !== c[0] && c.unshift(0);
  var l = c.map((f, d) => {
    var v = !c[d + 1], h = v ? i + o - f : c[d + 1] - f;
    if (h <= 0)
      return null;
    var p = d % t.length;
    return /* @__PURE__ */ x.createElement("rect", {
      key: "react-".concat(d),
      y: f,
      x: n,
      height: h,
      width: a,
      stroke: "none",
      fill: t[p],
      fillOpacity: r,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ x.createElement("g", {
    className: "recharts-cartesian-gridstripes-horizontal"
  }, l);
}
function dM(e) {
  var {
    vertical: t = !0,
    verticalFill: r,
    fillOpacity: n,
    x: i,
    y: a,
    width: o,
    height: u,
    verticalPoints: s
  } = e;
  if (!t || !r || !r.length)
    return null;
  var c = s.map((f) => Math.round(f + i - i)).sort((f, d) => f - d);
  i !== c[0] && c.unshift(0);
  var l = c.map((f, d) => {
    var v = !c[d + 1], h = v ? i + o - f : c[d + 1] - f;
    if (h <= 0)
      return null;
    var p = d % r.length;
    return /* @__PURE__ */ x.createElement("rect", {
      key: "react-".concat(d),
      x: f,
      y: a,
      width: h,
      height: u,
      stroke: "none",
      fill: r[p],
      fillOpacity: n,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ x.createElement("g", {
    className: "recharts-cartesian-gridstripes-vertical"
  }, l);
}
var vM = (e, t) => {
  var {
    xAxis: r,
    width: n,
    height: i,
    offset: a
  } = e;
  return mm(xc(Ue(Ue(Ue({}, wc), r), {}, {
    ticks: ym(r),
    viewBox: {
      x: 0,
      y: 0,
      width: n,
      height: i
    }
  })), a.left, a.left + a.width, t);
}, pM = (e, t) => {
  var {
    yAxis: r,
    width: n,
    height: i,
    offset: a
  } = e;
  return mm(xc(Ue(Ue(Ue({}, wc), r), {}, {
    ticks: ym(r),
    viewBox: {
      x: 0,
      y: 0,
      width: n,
      height: i
    }
  })), a.top, a.top + a.height, t);
}, hM = {
  horizontal: !0,
  vertical: !0,
  // The ordinates of horizontal grid lines
  horizontalPoints: [],
  // The abscissas of vertical grid lines
  verticalPoints: [],
  stroke: "#ccc",
  fill: "none",
  // The fill of colors of grid lines
  verticalFill: [],
  horizontalFill: [],
  xAxisId: 0,
  yAxisId: 0
};
function to(e) {
  var t = Om(), r = Pm(), n = wm(), i = Ue(Ue({}, ze(e, hM)), {}, {
    x: K(e.x) ? e.x : n.left,
    y: K(e.y) ? e.y : n.top,
    width: K(e.width) ? e.width : n.width,
    height: K(e.height) ? e.height : n.height
  }), {
    xAxisId: a,
    yAxisId: o,
    x: u,
    y: s,
    width: c,
    height: l,
    syncWithTicks: f,
    horizontalValues: d,
    verticalValues: v
  } = i, h = it(), p = F((N) => Iv(N, "xAxis", a, h)), m = F((N) => Iv(N, "yAxis", o, h));
  if (!K(c) || c <= 0 || !K(l) || l <= 0 || !K(u) || u !== +u || !K(s) || s !== +s)
    return null;
  var y = i.verticalCoordinatesGenerator || vM, g = i.horizontalCoordinatesGenerator || pM, {
    horizontalPoints: b,
    verticalPoints: E
  } = i;
  if ((!b || !b.length) && typeof g == "function") {
    var P = d && d.length, O = g({
      yAxis: m ? Ue(Ue({}, m), {}, {
        ticks: P ? d : m.ticks
      }) : void 0,
      width: t,
      height: r,
      offset: n
    }, P ? !0 : f);
    kn(Array.isArray(O), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(typeof O, "]")), Array.isArray(O) && (b = O);
  }
  if ((!E || !E.length) && typeof y == "function") {
    var A = v && v.length, j = y({
      xAxis: p ? Ue(Ue({}, p), {}, {
        ticks: A ? v : p.ticks
      }) : void 0,
      width: t,
      height: r,
      offset: n
    }, A ? !0 : f);
    kn(Array.isArray(j), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(typeof j, "]")), Array.isArray(j) && (E = j);
  }
  return /* @__PURE__ */ x.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ x.createElement(sM, {
    fill: i.fill,
    fillOpacity: i.fillOpacity,
    x: i.x,
    y: i.y,
    width: i.width,
    height: i.height,
    ry: i.ry
  }), /* @__PURE__ */ x.createElement(fM, Er({}, i, {
    horizontalPoints: b
  })), /* @__PURE__ */ x.createElement(dM, Er({}, i, {
    verticalPoints: E
  })), /* @__PURE__ */ x.createElement(lM, Er({}, i, {
    offset: n,
    horizontalPoints: b,
    xAxis: p,
    yAxis: m
  })), /* @__PURE__ */ x.createElement(cM, Er({}, i, {
    offset: n,
    verticalPoints: E,
    xAxis: p,
    yAxis: m
  })));
}
to.displayName = "CartesianGrid";
var Ob = (e, t, r, n) => ar(e, "xAxis", t, n), Pb = (e, t, r, n) => ir(e, "xAxis", t, n), Eb = (e, t, r, n) => ar(e, "yAxis", r, n), Ab = (e, t, r, n) => ir(e, "yAxis", r, n), mM = S([Z, Ob, Eb, Pb, Ab], (e, t, r, n, i) => fr(e, "xAxis") ? Rn(t, n, !1) : Rn(r, i, !1)), yM = (e, t, r, n, i) => i;
function gM(e) {
  return e.type === "line";
}
var bM = S([Ha, yM], (e, t) => e.filter(gM).find((r) => r.id === t)), xM = S([Z, Ob, Eb, Pb, Ab, bM, mM, Wa], (e, t, r, n, i, a, o, u) => {
  var {
    chartData: s,
    dataStartIndex: c,
    dataEndIndex: l
  } = u;
  if (!(a == null || t == null || r == null || n == null || i == null || n.length === 0 || i.length === 0 || o == null)) {
    var {
      dataKey: f,
      data: d
    } = a, v;
    if (d != null && d.length > 0 ? v = d : v = s?.slice(c, l + 1), v != null)
      return zM({
        layout: e,
        xAxis: t,
        yAxis: r,
        xAxisTicks: n,
        yAxisTicks: i,
        dataKey: f,
        bandSize: o,
        displayedData: v
      });
  }
}), wM = ["id"], OM = ["type", "layout", "connectNulls", "needClip"], PM = ["activeDot", "animateNewValues", "animationBegin", "animationDuration", "animationEasing", "connectNulls", "dot", "hide", "isAnimationActive", "label", "legendType", "xAxisId", "yAxisId", "id"];
function Fp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function st(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fp(Object(r), !0).forEach(function(n) {
      EM(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function EM(e, t, r) {
  return (t = AM(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function AM(e) {
  var t = SM(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function SM(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Pc(e, t) {
  if (e == null) return {};
  var r, n, i = _M(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function _M(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Ir() {
  return Ir = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ir.apply(null, arguments);
}
var jM = (e) => {
  var {
    dataKey: t,
    name: r,
    stroke: n,
    legendType: i,
    hide: a
  } = e;
  return [{
    inactive: a,
    dataKey: t,
    type: i,
    color: n,
    value: an(r, t),
    payload: e
  }];
};
function TM(e) {
  var {
    dataKey: t,
    data: r,
    stroke: n,
    strokeWidth: i,
    fill: a,
    name: o,
    hide: u,
    unit: s
  } = e;
  return {
    dataDefinedOnItem: r,
    positions: void 0,
    settings: {
      stroke: n,
      strokeWidth: i,
      fill: a,
      dataKey: t,
      nameKey: void 0,
      name: an(o, t),
      hide: u,
      type: e.tooltipType,
      color: e.stroke,
      unit: s
    }
  };
}
var Sb = (e, t) => "".concat(t, "px ").concat(e - t, "px");
function CM(e, t) {
  for (var r = e.length % 2 !== 0 ? [...e, 0] : e, n = [], i = 0; i < t; ++i)
    n = [...n, ...r];
  return n;
}
var kM = (e, t, r) => {
  var n = r.reduce((f, d) => f + d);
  if (!n)
    return Sb(t, e);
  for (var i = Math.floor(e / n), a = e % n, o = t - e, u = [], s = 0, c = 0; s < r.length; c += r[s], ++s)
    if (c + r[s] > a) {
      u = [...r.slice(0, s), a - c];
      break;
    }
  var l = u.length % 2 === 0 ? [0, o] : [o];
  return [...CM(r, i), ...u, ...l].map((f) => "".concat(f, "px")).join(", ");
};
function DM(e, t) {
  var r;
  if (/* @__PURE__ */ x.isValidElement(e))
    r = /* @__PURE__ */ x.cloneElement(e, t);
  else if (typeof e == "function")
    r = e(t);
  else {
    var n = te("recharts-line-dot", typeof e != "boolean" ? e.className : "");
    r = /* @__PURE__ */ x.createElement(eb, Ir({}, t, {
      className: n
    }));
  }
  return r;
}
function NM(e, t) {
  return e == null ? !1 : t ? !0 : e.length === 1;
}
function MM(e) {
  var {
    clipPathId: t,
    points: r,
    props: n
  } = e, {
    dot: i,
    dataKey: a,
    needClip: o
  } = n;
  if (!NM(r, i))
    return null;
  var {
    id: u
  } = n, s = Pc(n, wM), c = uh(i), l = Nt(s), f = xe(i, !0), d = r.map((h, p) => {
    var m = st(st(st({
      key: "dot-".concat(p),
      r: 3
    }, l), f), {}, {
      index: p,
      cx: h.x,
      cy: h.y,
      dataKey: a,
      value: h.value,
      payload: h.payload,
      points: r
    });
    return DM(i, m);
  }), v = {
    clipPath: o ? "url(#clipPath-".concat(c ? "" : "dots-").concat(t, ")") : void 0
  };
  return /* @__PURE__ */ x.createElement(Ke, Ir({
    className: "recharts-line-dots",
    key: "dots"
  }, v), d);
}
function IM(e) {
  var {
    showLabels: t,
    children: r,
    points: n
  } = e, i = Vt(() => n?.map((a) => {
    var o = {
      x: a.x,
      y: a.y,
      width: 0,
      height: 0
    };
    return st(st({}, o), {}, {
      value: a.value,
      payload: a.payload,
      viewBox: o,
      /*
       * Line is not passing parentViewBox to the LabelList so the labels can escape - looks like a bug, should we pass parentViewBox?
       * Or should this just be the root chart viewBox?
       */
      parentViewBox: void 0,
      fill: void 0
    });
  }), [n]);
  return /* @__PURE__ */ x.createElement(Jg, {
    value: t ? i : null
  }, r);
}
function Kp(e) {
  var {
    clipPathId: t,
    pathRef: r,
    points: n,
    strokeDasharray: i,
    props: a
  } = e, {
    type: o,
    layout: u,
    connectNulls: s,
    needClip: c
  } = a, l = Pc(a, OM), f = st(st({}, xe(l, !0)), {}, {
    fill: "none",
    className: "recharts-line-curve",
    clipPath: c ? "url(#clipPath-".concat(t, ")") : void 0,
    points: n,
    type: o,
    layout: u,
    connectNulls: s,
    strokeDasharray: i ?? a.strokeDasharray
  });
  return /* @__PURE__ */ x.createElement(x.Fragment, null, n?.length > 1 && /* @__PURE__ */ x.createElement(Xs, Ir({}, f, {
    pathRef: r
  })), /* @__PURE__ */ x.createElement(MM, {
    points: n,
    clipPathId: t,
    props: a
  }));
}
function RM(e) {
  try {
    return e && e.getTotalLength && e.getTotalLength() || 0;
  } catch {
    return 0;
  }
}
function $M(e) {
  var {
    clipPathId: t,
    props: r,
    pathRef: n,
    previousPointsRef: i,
    longestAnimatedLengthRef: a
  } = e, {
    points: o,
    strokeDasharray: u,
    isAnimationActive: s,
    animationBegin: c,
    animationDuration: l,
    animationEasing: f,
    animateNewValues: d,
    width: v,
    height: h,
    onAnimationEnd: p,
    onAnimationStart: m
  } = r, y = i.current, g = Jn(r, "recharts-line-"), [b, E] = nt(!1), P = !b, O = ge(() => {
    typeof p == "function" && p(), E(!1);
  }, [p]), A = ge(() => {
    typeof m == "function" && m(), E(!0);
  }, [m]), j = RM(n.current), N = a.current;
  return /* @__PURE__ */ x.createElement(IM, {
    points: o,
    showLabels: P
  }, r.children, /* @__PURE__ */ x.createElement(Zn, {
    animationId: g,
    begin: c,
    duration: l,
    isActive: s,
    easing: f,
    onAnimationEnd: O,
    onAnimationStart: A,
    key: g
  }, (M) => {
    var k = we(N, j + N, M), D = Math.min(k, j), L;
    if (s)
      if (u) {
        var B = "".concat(u).split(/[,\s]+/gim).map((U) => parseFloat(U));
        L = kM(D, j, B);
      } else
        L = Sb(j, D);
    else
      L = u == null ? void 0 : String(u);
    if (y) {
      var z = y.length / o.length, H = M === 1 ? o : o.map((U, de) => {
        var Q = Math.floor(de * z);
        if (y[Q]) {
          var Ze = y[Q];
          return st(st({}, U), {}, {
            x: we(Ze.x, U.x, M),
            y: we(Ze.y, U.y, M)
          });
        }
        return d ? st(st({}, U), {}, {
          x: we(v * 2, U.x, M),
          y: we(h / 2, U.y, M)
        }) : st(st({}, U), {}, {
          x: U.x,
          y: U.y
        });
      });
      return i.current = H, /* @__PURE__ */ x.createElement(Kp, {
        props: r,
        points: H,
        clipPathId: t,
        pathRef: n,
        strokeDasharray: L
      });
    }
    return M > 0 && j > 0 && (i.current = o, a.current = D), /* @__PURE__ */ x.createElement(Kp, {
      props: r,
      points: o,
      clipPathId: t,
      pathRef: n,
      strokeDasharray: L
    });
  }), /* @__PURE__ */ x.createElement(ic, {
    label: r.label
  }));
}
function LM(e) {
  var {
    clipPathId: t,
    props: r
  } = e, n = ce(null), i = ce(0), a = ce(null);
  return /* @__PURE__ */ x.createElement($M, {
    props: r,
    clipPathId: t,
    previousPointsRef: n,
    longestAnimatedLengthRef: i,
    pathRef: a
  });
}
var BM = (e, t) => ({
  x: e.x,
  y: e.y,
  value: e.value,
  // @ts-expect-error getValueByDataKey does not validate the output type
  errorVal: fe(e.payload, t)
});
class FM extends p0 {
  render() {
    var t, {
      hide: r,
      dot: n,
      points: i,
      className: a,
      xAxisId: o,
      yAxisId: u,
      top: s,
      left: c,
      width: l,
      height: f,
      id: d,
      needClip: v
    } = this.props;
    if (r)
      return null;
    var h = te("recharts-line", a), p = d, {
      r: m = 3,
      strokeWidth: y = 2
    } = (t = xe(n, !1)) !== null && t !== void 0 ? t : {
      r: 3,
      strokeWidth: 2
    }, g = uh(n), b = m * 2 + y;
    return /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement(Ke, {
      className: h
    }, v && /* @__PURE__ */ x.createElement("defs", null, /* @__PURE__ */ x.createElement(vb, {
      clipPathId: p,
      xAxisId: o,
      yAxisId: u
    }), !g && /* @__PURE__ */ x.createElement("clipPath", {
      id: "clipPath-dots-".concat(p)
    }, /* @__PURE__ */ x.createElement("rect", {
      x: c - b / 2,
      y: s - b / 2,
      width: l + b,
      height: f + b
    }))), /* @__PURE__ */ x.createElement(db, {
      xAxisId: o,
      yAxisId: u,
      data: i,
      dataPointFormatter: BM,
      errorBarOffset: 0
    }, /* @__PURE__ */ x.createElement(LM, {
      props: this.props,
      clipPathId: p
    }))), /* @__PURE__ */ x.createElement(uD, {
      activeDot: this.props.activeDot,
      points: i,
      mainColor: this.props.stroke,
      itemDataKey: this.props.dataKey
    }));
  }
}
var _b = {
  activeDot: !0,
  animateNewValues: !0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  connectNulls: !1,
  dot: !0,
  fill: "#fff",
  hide: !1,
  isAnimationActive: !dr.isSsr,
  label: !1,
  legendType: "line",
  stroke: "#3182bd",
  strokeWidth: 1,
  xAxisId: 0,
  yAxisId: 0
};
function KM(e) {
  var t = ze(e, _b), {
    activeDot: r,
    animateNewValues: n,
    animationBegin: i,
    animationDuration: a,
    animationEasing: o,
    connectNulls: u,
    dot: s,
    hide: c,
    isAnimationActive: l,
    label: f,
    legendType: d,
    xAxisId: v,
    yAxisId: h,
    id: p
  } = t, m = Pc(t, PM), {
    needClip: y
  } = gc(v, h), g = mc(), b = Ra(), E = it(), P = F((M) => xM(M, v, h, E, p));
  if (b !== "horizontal" && b !== "vertical" || P == null || g == null)
    return null;
  var {
    height: O,
    width: A,
    x: j,
    y: N
  } = g;
  return /* @__PURE__ */ x.createElement(FM, Ir({}, m, {
    id: p,
    connectNulls: u,
    dot: s,
    activeDot: r,
    animateNewValues: n,
    animationBegin: i,
    animationDuration: a,
    animationEasing: o,
    isAnimationActive: l,
    hide: c,
    label: f,
    legendType: d,
    xAxisId: v,
    yAxisId: h,
    points: P,
    layout: b,
    height: O,
    width: A,
    left: j,
    top: N,
    needClip: y
  }));
}
function zM(e) {
  var {
    layout: t,
    xAxis: r,
    yAxis: n,
    xAxisTicks: i,
    yAxisTicks: a,
    dataKey: o,
    bandSize: u,
    displayedData: s
  } = e;
  return s.map((c, l) => {
    var f = fe(c, o);
    if (t === "horizontal") {
      var d = gd({
        axis: r,
        ticks: i,
        bandSize: u,
        entry: c,
        index: l
      }), v = me(f) ? null : n.scale(f);
      return {
        x: d,
        y: v,
        value: f,
        payload: c
      };
    }
    var h = me(f) ? null : r.scale(f), p = gd({
      axis: n,
      ticks: a,
      bandSize: u,
      entry: c,
      index: l
    });
    return h == null || p == null ? null : {
      x: h,
      y: p,
      value: f,
      payload: c
    };
  }).filter(Boolean);
}
function WM(e) {
  var t = ze(e, _b), r = it();
  return /* @__PURE__ */ x.createElement(vc, {
    id: t.id,
    type: "line"
  }, (n) => /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement(ub, {
    legendPayload: jM(t)
  }), /* @__PURE__ */ x.createElement(dc, {
    fn: TM,
    args: t
  }), /* @__PURE__ */ x.createElement(lb, {
    type: "line",
    id: n,
    data: t.data,
    xAxisId: t.xAxisId,
    yAxisId: t.yAxisId,
    zAxisId: 0,
    dataKey: t.dataKey,
    hide: t.hide,
    isPanorama: r
  }), /* @__PURE__ */ x.createElement(KM, Ir({}, t, {
    id: n
  }))));
}
var qn = /* @__PURE__ */ x.memo(WM);
qn.displayName = "Line";
var qM = ["dangerouslySetInnerHTML", "ticks"], UM = ["id"], VM = ["domain"], YM = ["domain"];
function _s() {
  return _s = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, _s.apply(null, arguments);
}
function xa(e, t) {
  if (e == null) return {};
  var r, n, i = HM(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function HM(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function GM(e) {
  var t = Ee();
  return be(() => (t(Hk(e)), () => {
    t(Gk(e));
  }), [e, t]), null;
}
var XM = (e) => {
  var {
    xAxisId: t,
    className: r
  } = e, n = F(Hs), i = it(), a = "xAxis", o = F((m) => dn(m, a, t, i)), u = F((m) => pg(m, a, t, i)), s = F((m) => cg(m, t)), c = F((m) => j_(m, t)), l = F((m) => Ky(m, t));
  if (s == null || c == null || l == null)
    return null;
  var {
    dangerouslySetInnerHTML: f,
    ticks: d
  } = e, v = xa(e, qM), {
    id: h
  } = l, p = xa(l, UM);
  return /* @__PURE__ */ x.createElement(Oc, _s({}, v, p, {
    scale: o,
    x: c.x,
    y: c.y,
    width: s.width,
    height: s.height,
    className: te("recharts-".concat(a, " ").concat(a), r),
    viewBox: n,
    ticks: u
  }));
}, ZM = {
  allowDataOverflow: at.allowDataOverflow,
  allowDecimals: at.allowDecimals,
  allowDuplicatedCategory: at.allowDuplicatedCategory,
  height: at.height,
  hide: !1,
  mirror: at.mirror,
  orientation: at.orientation,
  padding: at.padding,
  reversed: at.reversed,
  scale: at.scale,
  tickCount: at.tickCount,
  type: at.type,
  xAxisId: 0
}, JM = (e) => {
  var t, r, n, i, a, o = ze(e, ZM);
  return /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement(GM, {
    interval: (t = o.interval) !== null && t !== void 0 ? t : "preserveEnd",
    id: o.xAxisId,
    scale: o.scale,
    type: o.type,
    padding: o.padding,
    allowDataOverflow: o.allowDataOverflow,
    domain: o.domain,
    dataKey: o.dataKey,
    allowDuplicatedCategory: o.allowDuplicatedCategory,
    allowDecimals: o.allowDecimals,
    tickCount: o.tickCount,
    includeHidden: (r = o.includeHidden) !== null && r !== void 0 ? r : !1,
    reversed: o.reversed,
    ticks: o.ticks,
    height: o.height,
    orientation: o.orientation,
    mirror: o.mirror,
    hide: o.hide,
    unit: o.unit,
    name: o.name,
    angle: (n = o.angle) !== null && n !== void 0 ? n : 0,
    minTickGap: (i = o.minTickGap) !== null && i !== void 0 ? i : 5,
    tick: (a = o.tick) !== null && a !== void 0 ? a : !0,
    tickFormatter: o.tickFormatter
  }), /* @__PURE__ */ x.createElement(XM, o));
}, QM = (e, t) => {
  var {
    domain: r
  } = e, n = xa(e, VM), {
    domain: i
  } = t, a = xa(t, YM);
  return en(n, a) ? Array.isArray(r) && r.length === 2 && Array.isArray(i) && i.length === 2 ? r[0] === i[0] && r[1] === i[1] : en({
    domain: r
  }, {
    domain: i
  }) : !1;
}, ro = /* @__PURE__ */ x.memo(JM, QM);
ro.displayName = "XAxis";
var eI = ["dangerouslySetInnerHTML", "ticks"], tI = ["id"], rI = ["domain"], nI = ["domain"];
function js() {
  return js = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, js.apply(null, arguments);
}
function wa(e, t) {
  if (e == null) return {};
  var r, n, i = iI(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function iI(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function aI(e) {
  var t = Ee();
  return be(() => (t(Xk(e)), () => {
    t(Zk(e));
  }), [e, t]), null;
}
var oI = (e) => {
  var {
    yAxisId: t,
    className: r,
    width: n,
    label: i
  } = e, a = ce(null), o = ce(null), u = F(Hs), s = it(), c = Ee(), l = "yAxis", f = F((P) => dn(P, l, t, s)), d = F((P) => fg(P, t)), v = F((P) => C_(P, t)), h = F((P) => pg(P, l, t, s)), p = F((P) => zy(P, t));
  if (h0(() => {
    if (!(n !== "auto" || !d || nc(i) || /* @__PURE__ */ St(i) || p == null)) {
      var P = a.current;
      if (P) {
        var O = P.getCalculatedWidth();
        Math.round(d.width) !== Math.round(O) && c(Jk({
          id: t,
          width: O
        }));
      }
    }
  }, [
    // The dependency on cartesianAxisRef.current is not needed because useLayoutEffect will run after every render.
    // The ref will be populated by then.
    // To re-run this effect when ticks change, we can depend on the ticks array from the store.
    h,
    d,
    c,
    i,
    t,
    n,
    p
  ]), d == null || v == null || p == null)
    return null;
  var {
    dangerouslySetInnerHTML: m,
    ticks: y
  } = e, g = wa(e, eI), {
    id: b
  } = p, E = wa(p, tI);
  return /* @__PURE__ */ x.createElement(Oc, js({}, g, E, {
    ref: a,
    labelRef: o,
    scale: f,
    x: v.x,
    y: v.y,
    tickTextProps: n === "auto" ? {
      width: void 0
    } : {
      width: n
    },
    width: d.width,
    height: d.height,
    className: te("recharts-".concat(l, " ").concat(l), r),
    viewBox: u,
    ticks: h
  }));
}, uI = {
  allowDataOverflow: ot.allowDataOverflow,
  allowDecimals: ot.allowDecimals,
  allowDuplicatedCategory: ot.allowDuplicatedCategory,
  hide: !1,
  mirror: ot.mirror,
  orientation: ot.orientation,
  padding: ot.padding,
  reversed: ot.reversed,
  scale: ot.scale,
  tickCount: ot.tickCount,
  type: ot.type,
  width: ot.width,
  yAxisId: 0
}, sI = (e) => {
  var t, r, n, i, a, o = ze(e, uI);
  return /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement(aI, {
    interval: (t = o.interval) !== null && t !== void 0 ? t : "preserveEnd",
    id: o.yAxisId,
    scale: o.scale,
    type: o.type,
    domain: o.domain,
    allowDataOverflow: o.allowDataOverflow,
    dataKey: o.dataKey,
    allowDuplicatedCategory: o.allowDuplicatedCategory,
    allowDecimals: o.allowDecimals,
    tickCount: o.tickCount,
    padding: o.padding,
    includeHidden: (r = o.includeHidden) !== null && r !== void 0 ? r : !1,
    reversed: o.reversed,
    ticks: o.ticks,
    width: o.width,
    orientation: o.orientation,
    mirror: o.mirror,
    hide: o.hide,
    unit: o.unit,
    name: o.name,
    angle: (n = o.angle) !== null && n !== void 0 ? n : 0,
    minTickGap: (i = o.minTickGap) !== null && i !== void 0 ? i : 5,
    tick: (a = o.tick) !== null && a !== void 0 ? a : !0,
    tickFormatter: o.tickFormatter
  }), /* @__PURE__ */ x.createElement(oI, o));
}, lI = (e, t) => {
  var {
    domain: r
  } = e, n = wa(e, rI), {
    domain: i
  } = t, a = wa(t, nI);
  return en(n, a) ? Array.isArray(r) && r.length === 2 && Array.isArray(i) && i.length === 2 ? r[0] === i[0] && r[1] === i[1] : en({
    domain: r
  }, {
    domain: i
  }) : !1;
}, no = /* @__PURE__ */ x.memo(sI, lI);
no.displayName = "YAxis";
var Ii = { exports: {} }, Lu = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zp;
function cI() {
  if (zp) return Lu;
  zp = 1;
  var e = Xe;
  function t(s, c) {
    return s === c && (s !== 0 || 1 / s === 1 / c) || s !== s && c !== c;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useSyncExternalStore, i = e.useRef, a = e.useEffect, o = e.useMemo, u = e.useDebugValue;
  return Lu.useSyncExternalStoreWithSelector = function(s, c, l, f, d) {
    var v = i(null);
    if (v.current === null) {
      var h = { hasValue: !1, value: null };
      v.current = h;
    } else h = v.current;
    v = o(
      function() {
        function m(P) {
          if (!y) {
            if (y = !0, g = P, P = f(P), d !== void 0 && h.hasValue) {
              var O = h.value;
              if (d(O, P))
                return b = O;
            }
            return b = P;
          }
          if (O = b, r(g, P)) return O;
          var A = f(P);
          return d !== void 0 && d(O, A) ? (g = P, O) : (g = P, b = A);
        }
        var y = !1, g, b, E = l === void 0 ? null : l;
        return [
          function() {
            return m(c());
          },
          E === null ? void 0 : function() {
            return m(E());
          }
        ];
      },
      [c, l, f, d]
    );
    var p = n(s, v[0], v[1]);
    return a(
      function() {
        h.hasValue = !0, h.value = p;
      },
      [p]
    ), u(p), p;
  }, Lu;
}
var Bu = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wp;
function fI() {
  return Wp || (Wp = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(s, c) {
      return s === c && (s !== 0 || 1 / s === 1 / c) || s !== s && c !== c;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = Xe, r = typeof Object.is == "function" ? Object.is : e, n = t.useSyncExternalStore, i = t.useRef, a = t.useEffect, o = t.useMemo, u = t.useDebugValue;
    Bu.useSyncExternalStoreWithSelector = function(s, c, l, f, d) {
      var v = i(null);
      if (v.current === null) {
        var h = { hasValue: !1, value: null };
        v.current = h;
      } else h = v.current;
      v = o(
        function() {
          function m(P) {
            if (!y) {
              if (y = !0, g = P, P = f(P), d !== void 0 && h.hasValue) {
                var O = h.value;
                if (d(O, P))
                  return b = O;
              }
              return b = P;
            }
            if (O = b, r(g, P))
              return O;
            var A = f(P);
            return d !== void 0 && d(O, A) ? (g = P, O) : (g = P, b = A);
          }
          var y = !1, g, b, E = l === void 0 ? null : l;
          return [
            function() {
              return m(c());
            },
            E === null ? void 0 : function() {
              return m(E());
            }
          ];
        },
        [c, l, f, d]
      );
      var p = n(s, v[0], v[1]);
      return a(
        function() {
          h.hasValue = !0, h.value = p;
        },
        [p]
      ), u(p), p;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), Bu;
}
var qp;
function dI() {
  return qp || (qp = 1, process.env.NODE_ENV === "production" ? Ii.exports = cI() : Ii.exports = fI()), Ii.exports;
}
dI();
function vI(e) {
  e();
}
function pI() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      vI(() => {
        let r = e;
        for (; r; )
          r.callback(), r = r.next;
      });
    },
    get() {
      const r = [];
      let n = e;
      for (; n; )
        r.push(n), n = n.next;
      return r;
    },
    subscribe(r) {
      let n = !0;
      const i = t = {
        callback: r,
        next: null,
        prev: t
      };
      return i.prev ? i.prev.next = i : e = i, function() {
        !n || e === null || (n = !1, i.next ? i.next.prev = i.prev : t = i.prev, i.prev ? i.prev.next = i.next : e = i.next);
      };
    }
  };
}
var Up = {
  notify() {
  },
  get: () => []
};
function hI(e, t) {
  let r, n = Up, i = 0, a = !1;
  function o(p) {
    l();
    const m = n.subscribe(p);
    let y = !1;
    return () => {
      y || (y = !0, m(), f());
    };
  }
  function u() {
    n.notify();
  }
  function s() {
    h.onStateChange && h.onStateChange();
  }
  function c() {
    return a;
  }
  function l() {
    i++, r || (r = e.subscribe(s), n = pI());
  }
  function f() {
    i--, r && i === 0 && (r(), r = void 0, n.clear(), n = Up);
  }
  function d() {
    a || (a = !0, l());
  }
  function v() {
    a && (a = !1, f());
  }
  const h = {
    addNestedSub: o,
    notifyNestedSubs: u,
    handleChangeWrapper: s,
    isSubscribed: c,
    trySubscribe: d,
    tryUnsubscribe: v,
    getListeners: () => n
  };
  return h;
}
var mI = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", yI = /* @__PURE__ */ mI(), gI = () => typeof navigator < "u" && navigator.product === "ReactNative", bI = /* @__PURE__ */ gI(), xI = () => yI || bI ? x.useLayoutEffect : x.useEffect, wI = /* @__PURE__ */ xI(), OI = /* @__PURE__ */ Symbol.for("react-redux-context"), PI = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function EI() {
  if (!x.createContext) return {};
  const e = PI[OI] ??= /* @__PURE__ */ new Map();
  let t = e.get(x.createContext);
  return t || (t = x.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(x.createContext, t)), t;
}
var AI = /* @__PURE__ */ EI();
function SI(e) {
  const { children: t, context: r, serverState: n, store: i } = e, a = x.useMemo(() => {
    const s = hI(i), c = {
      store: i,
      subscription: s,
      getServerState: n ? () => n : void 0
    };
    if (process.env.NODE_ENV === "production")
      return c;
    {
      const { identityFunctionCheck: l = "once", stabilityCheck: f = "once" } = e;
      return /* @__PURE__ */ Object.assign(c, {
        stabilityCheck: f,
        identityFunctionCheck: l
      });
    }
  }, [i, n]), o = x.useMemo(() => i.getState(), [i]);
  wI(() => {
    const { subscription: s } = a;
    return s.onStateChange = s.notifyNestedSubs, s.trySubscribe(), o !== i.getState() && s.notifyNestedSubs(), () => {
      s.tryUnsubscribe(), s.onStateChange = void 0;
    };
  }, [a, o]);
  const u = r || AI;
  return /* @__PURE__ */ x.createElement(u.Provider, { value: a }, t);
}
var _I = SI, jI = (e, t) => t, Ec = S([jI, Z, Ly, Ne, Tg, Jt, Ij, ke], Fj), Ac = (e) => {
  var t = e.currentTarget.getBoundingClientRect(), r = t.width / e.currentTarget.offsetWidth, n = t.height / e.currentTarget.offsetHeight;
  return {
    /*
     * Here it's important to use:
     * - event.clientX and event.clientY to get the mouse position relative to the viewport, including scroll.
     * - pageX and pageY are not used because they are relative to the whole document, and ignore scroll.
     * - rect.left and rect.top are used to get the position of the chart relative to the viewport.
     * - offsetX and offsetY are not used because they are relative to the offset parent
     *  which may or may not be the same as the clientX and clientY, depending on the position of the chart in the DOM
     *  and surrounding element styles. CSS position: relative, absolute, fixed, will change the offset parent.
     * - scaleX and scaleY are necessary for when the chart element is scaled using CSS `transform: scale(N)`.
     */
    chartX: Math.round((e.clientX - t.left) / r),
    chartY: Math.round((e.clientY - t.top) / n)
  };
}, jb = wt("mouseClick"), Tb = Gn();
Tb.startListening({
  actionCreator: jb,
  effect: (e, t) => {
    var r = e.payload, n = Ec(t.getState(), Ac(r));
    n?.activeIndex != null && t.dispatch(W_({
      activeIndex: n.activeIndex,
      activeDataKey: void 0,
      activeCoordinate: n.activeCoordinate
    }));
  }
});
var Ts = wt("mouseMove"), Cb = Gn();
Cb.startListening({
  actionCreator: Ts,
  effect: (e, t) => {
    var r = e.payload, n = t.getState(), i = Yl(n, n.tooltip.settings.shared), a = Ec(n, Ac(r));
    i === "axis" && (a?.activeIndex != null ? t.dispatch(Og({
      activeIndex: a.activeIndex,
      activeDataKey: void 0,
      activeCoordinate: a.activeCoordinate
    })) : t.dispatch(wg()));
  }
});
var Vp = {
  accessibilityLayer: !0,
  barCategoryGap: "10%",
  barGap: 4,
  barSize: void 0,
  className: void 0,
  maxBarSize: void 0,
  stackOffset: "none",
  syncId: void 0,
  syncMethod: "index"
}, kb = pt({
  name: "rootProps",
  initialState: Vp,
  reducers: {
    updateOptions: (e, t) => {
      var r;
      e.accessibilityLayer = t.payload.accessibilityLayer, e.barCategoryGap = t.payload.barCategoryGap, e.barGap = (r = t.payload.barGap) !== null && r !== void 0 ? r : Vp.barGap, e.barSize = t.payload.barSize, e.maxBarSize = t.payload.maxBarSize, e.stackOffset = t.payload.stackOffset, e.syncId = t.payload.syncId, e.syncMethod = t.payload.syncMethod, e.className = t.payload.className;
    }
  }
}), TI = kb.reducer, {
  updateOptions: CI
} = kb.actions, Db = pt({
  name: "polarOptions",
  initialState: null,
  reducers: {
    updatePolarOptions: (e, t) => t.payload
  }
}), {
  updatePolarOptions: kI
} = Db.actions, DI = Db.reducer, Nb = wt("keyDown"), Mb = wt("focus"), Sc = Gn();
Sc.startListening({
  actionCreator: Nb,
  effect: (e, t) => {
    var r = t.getState(), n = r.rootProps.accessibilityLayer !== !1;
    if (n) {
      var {
        keyboardInteraction: i
      } = r.tooltip, a = e.payload;
      if (!(a !== "ArrowRight" && a !== "ArrowLeft" && a !== "Enter")) {
        var o = Number(Hl(i, pn(r))), u = Jt(r);
        if (a === "Enter") {
          var s = va(r, "axis", "hover", String(i.index));
          t.dispatch(xs({
            active: !i.active,
            activeIndex: i.index,
            activeDataKey: i.dataKey,
            activeCoordinate: s
          }));
          return;
        }
        var c = M_(r), l = c === "left-to-right" ? 1 : -1, f = a === "ArrowRight" ? 1 : -1, d = o + f * l;
        if (!(u == null || d >= u.length || d < 0)) {
          var v = va(r, "axis", "hover", String(d));
          t.dispatch(xs({
            active: !0,
            activeIndex: d.toString(),
            activeDataKey: void 0,
            activeCoordinate: v
          }));
        }
      }
    }
  }
});
Sc.startListening({
  actionCreator: Mb,
  effect: (e, t) => {
    var r = t.getState(), n = r.rootProps.accessibilityLayer !== !1;
    if (n) {
      var {
        keyboardInteraction: i
      } = r.tooltip;
      if (!i.active && i.index == null) {
        var a = "0", o = va(r, "axis", "hover", String(a));
        t.dispatch(xs({
          activeDataKey: void 0,
          active: !0,
          activeIndex: a,
          activeCoordinate: o
        }));
      }
    }
  }
});
var gt = wt("externalEvent"), Ib = Gn();
Ib.startListening({
  actionCreator: gt,
  effect: (e, t) => {
    if (e.payload.handler != null) {
      var r = t.getState(), n = {
        activeCoordinate: Aj(r),
        activeDataKey: Ng(r),
        activeIndex: or(r),
        activeLabel: Dg(r),
        activeTooltipIndex: or(r),
        isTooltipActive: Sj(r)
      };
      e.payload.handler(n, e.payload.reactEvent);
    }
  }
});
var NI = S([vn], (e) => e.tooltipItemPayloads), MI = S([NI, si, (e, t, r) => t, (e, t, r) => r], (e, t, r, n) => {
  var i = e.find((u) => u.settings.dataKey === n);
  if (i != null) {
    var {
      positions: a
    } = i;
    if (a != null) {
      var o = t(a, r);
      return o;
    }
  }
}), Rb = wt("touchMove"), $b = Gn();
$b.startListening({
  actionCreator: Rb,
  effect: (e, t) => {
    var r = e.payload, n = t.getState(), i = Yl(n, n.tooltip.settings.shared);
    if (i === "axis") {
      var a = Ec(n, Ac({
        clientX: r.touches[0].clientX,
        clientY: r.touches[0].clientY,
        currentTarget: r.currentTarget
      }));
      a?.activeIndex != null && t.dispatch(Og({
        activeIndex: a.activeIndex,
        activeDataKey: void 0,
        activeCoordinate: a.activeCoordinate
      }));
    } else if (i === "item") {
      var o, u = r.touches[0], s = document.elementFromPoint(u.clientX, u.clientY);
      if (!s || !s.getAttribute)
        return;
      var c = s.getAttribute(bm), l = (o = s.getAttribute(xm)) !== null && o !== void 0 ? o : void 0, f = MI(t.getState(), c, l);
      t.dispatch(xg({
        activeDataKey: l,
        activeIndex: c,
        activeCoordinate: f
      }));
    }
  }
});
var II = Kh({
  brush: bN,
  cartesianAxis: Qk,
  chartData: rT,
  errorBars: gD,
  graphicalItems: gk,
  layout: HO,
  legend: R1,
  options: Zj,
  polarAxis: IC,
  polarOptions: DI,
  referenceElements: SN,
  rootProps: TI,
  tooltip: q_
}), RI = function(t) {
  return bO({
    reducer: II,
    // redux-toolkit v1 types are unhappy with the preloadedState type. Remove the `as any` when bumping to v2
    preloadedState: t,
    // @ts-expect-error redux-toolkit v1 types are unhappy with the middleware array. Remove this comment when bumping to v2
    middleware: (r) => r({
      serializableCheck: !1
    }).concat([Tb.middleware, Cb.middleware, Sc.middleware, Ib.middleware, $b.middleware]),
    devTools: dr.devToolsEnabled
  });
};
function Lb(e) {
  var {
    preloadedState: t,
    children: r,
    reduxStoreName: n
  } = e, i = it(), a = ce(null);
  if (i)
    return r;
  a.current == null && (a.current = RI(t));
  var o = zs;
  return /* @__PURE__ */ x.createElement(_I, {
    context: o,
    store: a.current
  }, r);
}
function Bb(e) {
  var {
    layout: t,
    width: r,
    height: n,
    margin: i
  } = e, a = Ee(), o = it();
  return be(() => {
    o || (a(UO(t)), a(VO({
      width: r,
      height: n
    })), a(qO(i)));
  }, [a, o, t, r, n, i]), null;
}
function Fb(e) {
  var t = Ee();
  return be(() => {
    t(CI(e));
  }, [t, e]), null;
}
var $I = ["children"];
function LI(e, t) {
  if (e == null) return {};
  var r, n, i = BI(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function BI(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Oa() {
  return Oa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Oa.apply(null, arguments);
}
var FI = {
  width: "100%",
  height: "100%"
}, KI = /* @__PURE__ */ vt((e, t) => {
  var r = Om(), n = Pm(), i = _m();
  if (!Gr(r) || !Gr(n))
    return null;
  var {
    children: a,
    otherAttributes: o,
    title: u,
    desc: s
  } = e, c, l;
  return typeof o.tabIndex == "number" ? c = o.tabIndex : c = i ? 0 : void 0, typeof o.role == "string" ? l = o.role : l = i ? "application" : void 0, /* @__PURE__ */ x.createElement(sh, Oa({}, o, {
    title: u,
    desc: s,
    role: l,
    tabIndex: c,
    width: r,
    height: n,
    style: FI,
    ref: t
  }), a);
}), zI = (e) => {
  var {
    children: t
  } = e, r = F(Ia);
  if (!r)
    return null;
  var {
    width: n,
    height: i,
    y: a,
    x: o
  } = r;
  return /* @__PURE__ */ x.createElement(sh, {
    width: n,
    height: i,
    x: o,
    y: a
  }, t);
}, Yp = /* @__PURE__ */ vt((e, t) => {
  var {
    children: r
  } = e, n = LI(e, $I), i = it();
  return i ? /* @__PURE__ */ x.createElement(zI, null, r) : /* @__PURE__ */ x.createElement(KI, Oa({
    ref: t
  }, n), r);
});
function WI() {
  var e = Ee(), [t, r] = nt(null), n = F(P1);
  return be(() => {
    if (t != null) {
      var i = t.getBoundingClientRect(), a = i.width / t.offsetWidth;
      dt(a) && a !== n && e(YO(a));
    }
  }, [t, e, n]), r;
}
function Hp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function qI(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hp(Object(r), !0).forEach(function(n) {
      UI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function UI(e, t, r) {
  return (t = VI(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function VI(e) {
  var t = YI(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function YI(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var HI = /* @__PURE__ */ vt((e, t) => {
  var {
    children: r,
    className: n,
    height: i,
    onClick: a,
    onContextMenu: o,
    onDoubleClick: u,
    onMouseDown: s,
    onMouseEnter: c,
    onMouseLeave: l,
    onMouseMove: f,
    onMouseUp: d,
    onTouchEnd: v,
    onTouchMove: h,
    onTouchStart: p,
    style: m,
    width: y
  } = e, g = Ee(), [b, E] = nt(null), [P, O] = nt(null);
  fT();
  var A = WI(), j = ge((q) => {
    A(q), typeof t == "function" && t(q), E(q), O(q);
  }, [A, t, E, O]), N = ge((q) => {
    g(jb(q)), g(gt({
      handler: a,
      reactEvent: q
    }));
  }, [g, a]), M = ge((q) => {
    g(Ts(q)), g(gt({
      handler: c,
      reactEvent: q
    }));
  }, [g, c]), k = ge((q) => {
    g(wg()), g(gt({
      handler: l,
      reactEvent: q
    }));
  }, [g, l]), D = ge((q) => {
    g(Ts(q)), g(gt({
      handler: f,
      reactEvent: q
    }));
  }, [g, f]), L = ge(() => {
    g(Mb());
  }, [g]), B = ge((q) => {
    g(Nb(q.key));
  }, [g]), z = ge((q) => {
    g(gt({
      handler: o,
      reactEvent: q
    }));
  }, [g, o]), H = ge((q) => {
    g(gt({
      handler: u,
      reactEvent: q
    }));
  }, [g, u]), U = ge((q) => {
    g(gt({
      handler: s,
      reactEvent: q
    }));
  }, [g, s]), de = ge((q) => {
    g(gt({
      handler: d,
      reactEvent: q
    }));
  }, [g, d]), Q = ge((q) => {
    g(gt({
      handler: p,
      reactEvent: q
    }));
  }, [g, p]), Ze = ge((q) => {
    g(Rb(q)), g(gt({
      handler: h,
      reactEvent: q
    }));
  }, [g, h]), Mt = ge((q) => {
    g(gt({
      handler: v,
      reactEvent: q
    }));
  }, [g, v]);
  return /* @__PURE__ */ x.createElement(Bg.Provider, {
    value: b
  }, /* @__PURE__ */ x.createElement(Z0.Provider, {
    value: P
  }, /* @__PURE__ */ x.createElement("div", {
    className: te("recharts-wrapper", n),
    style: qI({
      position: "relative",
      cursor: "default",
      width: y,
      height: i
    }, m),
    onClick: N,
    onContextMenu: z,
    onDoubleClick: H,
    onFocus: L,
    onKeyDown: B,
    onMouseDown: U,
    onMouseEnter: M,
    onMouseLeave: k,
    onMouseMove: D,
    onMouseUp: de,
    onTouchEnd: Mt,
    onTouchMove: Ze,
    onTouchStart: Q,
    ref: j
  }, r)));
}), GI = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function XI(e, t) {
  if (e == null) return {};
  var r, n, i = ZI(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function ZI(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var Kb = /* @__PURE__ */ vt((e, t) => {
  var {
    children: r,
    className: n,
    width: i,
    height: a,
    style: o,
    compact: u,
    title: s,
    desc: c
  } = e, l = XI(e, GI), f = Nt(l);
  return u ? /* @__PURE__ */ x.createElement(Yp, {
    otherAttributes: f,
    title: s,
    desc: c
  }, r) : /* @__PURE__ */ x.createElement(HI, {
    className: n,
    style: o,
    width: i,
    height: a,
    onClick: e.onClick,
    onMouseLeave: e.onMouseLeave,
    onMouseEnter: e.onMouseEnter,
    onMouseMove: e.onMouseMove,
    onMouseDown: e.onMouseDown,
    onMouseUp: e.onMouseUp,
    onContextMenu: e.onContextMenu,
    onDoubleClick: e.onDoubleClick,
    onTouchStart: e.onTouchStart,
    onTouchMove: e.onTouchMove,
    onTouchEnd: e.onTouchEnd
  }, /* @__PURE__ */ x.createElement(Yp, {
    otherAttributes: f,
    title: s,
    desc: c,
    ref: t
  }, /* @__PURE__ */ x.createElement(jN, null, r)));
}), JI = ["width", "height"];
function Cs() {
  return Cs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Cs.apply(null, arguments);
}
function QI(e, t) {
  if (e == null) return {};
  var r, n, i = e2(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function e2(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var t2 = {
  top: 5,
  right: 5,
  bottom: 5,
  left: 5
}, r2 = {
  accessibilityLayer: !0,
  layout: "horizontal",
  stackOffset: "none",
  barCategoryGap: "10%",
  barGap: 4,
  margin: t2,
  reverseStackOrder: !1,
  syncMethod: "index"
}, zb = /* @__PURE__ */ vt(function(t, r) {
  var n, i = ze(t.categoricalChartProps, r2), {
    width: a,
    height: o
  } = i, u = QI(i, JI);
  if (!Gr(a) || !Gr(o))
    return null;
  var {
    chartName: s,
    defaultTooltipEventType: c,
    validateTooltipEventTypes: l,
    tooltipPayloadSearcher: f,
    categoricalChartProps: d
  } = t, v = {
    chartName: s,
    defaultTooltipEventType: c,
    validateTooltipEventTypes: l,
    tooltipPayloadSearcher: f,
    eventEmitter: void 0
  };
  return /* @__PURE__ */ x.createElement(Lb, {
    preloadedState: {
      options: v
    },
    reduxStoreName: (n = d.id) !== null && n !== void 0 ? n : s
  }, /* @__PURE__ */ x.createElement(yb, {
    chartData: d.data
  }), /* @__PURE__ */ x.createElement(Bb, {
    width: a,
    height: o,
    layout: i.layout,
    margin: i.margin
  }), /* @__PURE__ */ x.createElement(Fb, {
    accessibilityLayer: i.accessibilityLayer,
    barCategoryGap: i.barCategoryGap,
    maxBarSize: i.maxBarSize,
    stackOffset: i.stackOffset,
    barGap: i.barGap,
    barSize: i.barSize,
    syncId: i.syncId,
    syncMethod: i.syncMethod,
    className: i.className
  }), /* @__PURE__ */ x.createElement(Kb, Cs({}, u, {
    width: a,
    height: o,
    ref: r
  })));
}), n2 = ["axis"], Wb = /* @__PURE__ */ vt((e, t) => /* @__PURE__ */ x.createElement(zb, {
  chartName: "LineChart",
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: n2,
  tooltipPayloadSearcher: rc,
  categoricalChartProps: e,
  ref: t
})), i2 = ["axis", "item"], a2 = /* @__PURE__ */ vt((e, t) => /* @__PURE__ */ x.createElement(zb, {
  chartName: "BarChart",
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: i2,
  tooltipPayloadSearcher: rc,
  categoricalChartProps: e,
  ref: t
}));
function o2(e) {
  var t = Ee();
  return be(() => {
    t(kI(e));
  }, [t, e]), null;
}
var u2 = ["width", "height", "layout"];
function ks() {
  return ks = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ks.apply(null, arguments);
}
function s2(e, t) {
  if (e == null) return {};
  var r, n, i = l2(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function l2(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var c2 = {
  top: 5,
  right: 5,
  bottom: 5,
  left: 5
}, f2 = {
  accessibilityLayer: !0,
  stackOffset: "none",
  barCategoryGap: "10%",
  barGap: 4,
  margin: c2,
  reverseStackOrder: !1,
  syncMethod: "index",
  layout: "radial"
}, d2 = /* @__PURE__ */ vt(function(t, r) {
  var n, i = ze(t.categoricalChartProps, f2), {
    width: a,
    height: o,
    layout: u
  } = i, s = s2(i, u2);
  if (!Gr(a) || !Gr(o))
    return null;
  var {
    chartName: c,
    defaultTooltipEventType: l,
    validateTooltipEventTypes: f,
    tooltipPayloadSearcher: d
  } = t, v = {
    chartName: c,
    defaultTooltipEventType: l,
    validateTooltipEventTypes: f,
    tooltipPayloadSearcher: d,
    eventEmitter: void 0
  };
  return /* @__PURE__ */ x.createElement(Lb, {
    preloadedState: {
      options: v
    },
    reduxStoreName: (n = i.id) !== null && n !== void 0 ? n : c
  }, /* @__PURE__ */ x.createElement(yb, {
    chartData: i.data
  }), /* @__PURE__ */ x.createElement(Bb, {
    width: a,
    height: o,
    layout: u,
    margin: i.margin
  }), /* @__PURE__ */ x.createElement(Fb, {
    accessibilityLayer: i.accessibilityLayer,
    barCategoryGap: i.barCategoryGap,
    maxBarSize: i.maxBarSize,
    stackOffset: i.stackOffset,
    barGap: i.barGap,
    barSize: i.barSize,
    syncId: i.syncId,
    syncMethod: i.syncMethod,
    className: i.className
  }), /* @__PURE__ */ x.createElement(o2, {
    cx: i.cx,
    cy: i.cy,
    startAngle: i.startAngle,
    endAngle: i.endAngle,
    innerRadius: i.innerRadius,
    outerRadius: i.outerRadius
  }), /* @__PURE__ */ x.createElement(Kb, ks({
    width: a,
    height: o
  }, s, {
    ref: r
  })));
}), v2 = ["item"], p2 = {
  layout: "centric",
  startAngle: 0,
  endAngle: 360,
  cx: "50%",
  cy: "50%",
  innerRadius: 0,
  outerRadius: "80%"
}, qb = /* @__PURE__ */ vt((e, t) => {
  var r = ze(e, p2);
  return /* @__PURE__ */ x.createElement(d2, {
    chartName: "PieChart",
    defaultTooltipEventType: "item",
    validateTooltipEventTypes: v2,
    tooltipPayloadSearcher: rc,
    categoricalChartProps: r,
    ref: t
  });
});
function R2({ isStatic: e, community: t }) {
  const r = ({ value: l }) => {
    const f = l >= 0;
    return /* @__PURE__ */ _.jsx(
      "span",
      {
        className: `p-1 rounded text-[10px] leading-[14px] font-medium ${f ? "bg-[#F7FEFA] text-[#1FA05B]" : "bg-[#FFF2F2] text-[#AB0000]"}`,
        children: f ? `+${l}%` : `${l}%`
      }
    );
  }, n = Number(
    t?.thisMonthMoveIns ?? t?.lastMonthMoveIns ?? 0
  ), i = Number(
    t?.thisMonthMoveOuts ?? t?.lastMonthMoveOuts ?? 0
  ), a = Number(
    t?.moveInPercentChange ?? t?.moveInChange ?? 0
  ), o = Number(
    t?.moveOutPercentChange ?? t?.moveOutChange ?? 0
  ), u = [
    { name: "Move-ins", value: n },
    { name: "Move-outs", value: i }
  ], s = {
    purple: "#8B5CF6",
    indigo: "#6366F1"
  }, c = ({ active: l, payload: f }) => !l || !f || !f.length ? null : /* @__PURE__ */ _.jsx("div", { className: "bg-black text-white text-xs px-3 py-2 rounded-lg shadow-lg", children: f.map((d, v) => /* @__PURE__ */ _.jsxs("p", { className: "capitalize leading-relaxed", children: [
    /* @__PURE__ */ _.jsx(
      "span",
      {
        style: {
          display: "inline-block",
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: d.color,
          marginRight: 6
        }
      }
    ),
    d.name,
    ": ",
    /* @__PURE__ */ _.jsx("span", { className: "font-semibold", children: d.value })
  ] }, v)) });
  return /* @__PURE__ */ _.jsx(
    rn,
    {
      title: "Community",
      period: "This Month",
      icon: /* @__PURE__ */ _.jsx(_0, { className: "text-2xl text-[#329DFF]" }),
      className: `${e && "max-h-[184px]"} mb-4 break-inside-avoid`,
      children: /* @__PURE__ */ _.jsxs("div", { className: "flex", children: [
        /* @__PURE__ */ _.jsxs("div", { className: "w-[50%] flex flex-col gap-7", children: [
          /* @__PURE__ */ _.jsxs("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ _.jsx("h4", { className: "!m-0 !text-xs !leading-[16px] !text-[#64748B]", children: "Move-in/Out Count" }),
            /* @__PURE__ */ _.jsx("p", { className: "!m-0 !text-[28px] !leading-[32px] !font-medium !text-[#8B5CF6]", children: n + i })
          ] }),
          /* @__PURE__ */ _.jsxs("p", { className: "!m-0 !text-[10px] !leading-[14px] !text-[#64748B] space-x-1", children: [
            /* @__PURE__ */ _.jsx(r, { value: ((a + o) / 2).toFixed(2) }),
            /* @__PURE__ */ _.jsx("span", { className: "whitespace-nowrap", children: "Compared to last month" })
          ] })
        ] }),
        /* @__PURE__ */ _.jsx("div", { className: "w-[50%] h-[111px] flex justify-end", children: /* @__PURE__ */ _.jsx(fi, { width: "75%", height: "100%", children: /* @__PURE__ */ _.jsxs(qb, { children: [
          /* @__PURE__ */ _.jsxs(
            hc,
            {
              data: u,
              innerRadius: 36,
              outerRadius: 52,
              paddingAngle: 2,
              dataKey: "value",
              children: [
                /* @__PURE__ */ _.jsx(ur, { fill: s.purple }),
                /* @__PURE__ */ _.jsx(ur, { fill: s.indigo })
              ]
            }
          ),
          /* @__PURE__ */ _.jsx(ci, { content: /* @__PURE__ */ _.jsx(c, {}) })
        ] }) }) })
      ] })
    }
  );
}
function $2({ isStatic: e, engagement: t }) {
  const r = [
    { name: "Notice", value: Number(t?.total_notices || 0) },
    { name: "Post", value: Number(t?.total_topics || 0) },
    { name: "Poll", value: Number(t?.total_polls || 0) },
    { name: "Survey", value: Number(t?.total_surveys || 0) }
  ], n = {
    Notice: "#8B5CF6",
    Post: "#22C55E",
    Poll: "#3B82F6",
    Survey: "#F59E0B"
  }, i = ({ active: a, payload: o, label: u }) => !a || !o || !o.length ? null : /* @__PURE__ */ _.jsxs("div", { className: "bg-black text-white text-xs px-3 py-2 rounded-lg shadow-lg", children: [
    u && /* @__PURE__ */ _.jsx("p", { className: "font-medium mb-1", children: u }),
    o.map((s, c) => /* @__PURE__ */ _.jsxs("p", { className: "capitalize leading-relaxed", children: [
      /* @__PURE__ */ _.jsx(
        "span",
        {
          style: {
            display: "inline-block",
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: s.color,
            marginRight: 6
          }
        }
      ),
      s.name,
      ": ",
      /* @__PURE__ */ _.jsx("span", { className: "font-semibold", children: s.value })
    ] }, c))
  ] });
  return /* @__PURE__ */ _.jsx(
    rn,
    {
      title: "Engagement",
      period: "This Month",
      icon: /* @__PURE__ */ _.jsx(T0, { className: "text-2xl text-[#DBB467]" }),
      className: `${e && "max-h-[303px]"}`,
      children: /* @__PURE__ */ _.jsx(fi, { width: "100%", height: "100%", children: /* @__PURE__ */ _.jsxs(
        a2,
        {
          data: r,
          layout: "vertical",
          margin: { top: 4, right: 8, left: 8, bottom: 0 },
          children: [
            /* @__PURE__ */ _.jsx(
              to,
              {
                stroke: "#e5e7eb",
                strokeDasharray: "3 3",
                horizontal: !1
              }
            ),
            /* @__PURE__ */ _.jsx(
              no,
              {
                type: "category",
                dataKey: "name",
                width: 40,
                axisLine: !1,
                tickLine: !1,
                tick: {
                  fontSize: 10,
                  lineHeight: 14,
                  fill: "#121212",
                  fontWeight: 400
                }
              }
            ),
            /* @__PURE__ */ _.jsx(
              ro,
              {
                type: "number",
                axisLine: !1,
                tickLine: !1,
                tick: {
                  fontSize: 10,
                  lineHeight: 14,
                  fill: "#64748B",
                  fontWeight: 400
                }
              }
            ),
            /* @__PURE__ */ _.jsx(ci, { content: /* @__PURE__ */ _.jsx(i, {}) }),
            /* @__PURE__ */ _.jsx(hb, { dataKey: "value", barSize: 40, isAnimationActive: !1, children: r.map((a) => /* @__PURE__ */ _.jsx(ur, { fill: n[a.name] }, a.name)) })
          ]
        }
      ) })
    }
  );
}
function L2({ isStatic: e, facility: t }) {
  const r = Number(t?.totalBookings || 0), n = Number(t?.totalSlots || 0), i = Number(t?.utilizationRate || 0), a = t?.slots?.map((u, s) => ({
    time: u?.slot_start_time ? `${u.slot_start_time} - ${u.slot_end_time}` : `Slot ${s + 1}`,
    bookings: Number(u?.slot_bookings || 0),
    total: Number(u?.total_slots || 0)
  })) || [], o = ({ active: u, payload: s, label: c }) => !u || !s || !s.length ? null : /* @__PURE__ */ _.jsxs("div", { className: "bg-black text-white text-xs px-3 py-2 rounded-lg shadow-lg", children: [
    c && /* @__PURE__ */ _.jsx("p", { className: "font-medium mb-1", children: c }),
    s.map((l, f) => /* @__PURE__ */ _.jsxs("p", { className: "capitalize leading-relaxed", children: [
      /* @__PURE__ */ _.jsx(
        "span",
        {
          style: {
            display: "inline-block",
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: l.color,
            marginRight: 6
          }
        }
      ),
      l.name,
      ": ",
      /* @__PURE__ */ _.jsx("span", { className: "font-semibold", children: l.value })
    ] }, f))
  ] });
  return /* @__PURE__ */ _.jsxs(
    rn,
    {
      title: "Facilities",
      period: "Today",
      icon: /* @__PURE__ */ _.jsx(j0, { className: "text-2xl text-[#8B5CF6]" }),
      className: `${e && "max-h-[305px]"} mb-4 break-inside-avoid`,
      children: [
        /* @__PURE__ */ _.jsxs("div", { className: "grid grid-cols-3 gap-6 mb-4", children: [
          /* @__PURE__ */ _.jsxs("div", { className: "flex flex-col gap-1", children: [
            /* @__PURE__ */ _.jsx("h4", { className: "!m-0 !text-xs !leading-[16px] !text-[#64748B]", children: "Bookings" }),
            /* @__PURE__ */ _.jsx("p", { className: "!m-0 !text-[24px] !leading-[28px] !font-medium text-[#8B5CF6]", children: r })
          ] }),
          /* @__PURE__ */ _.jsxs("div", { className: "flex flex-col gap-1", children: [
            /* @__PURE__ */ _.jsx("h4", { className: "!m-0 !text-xs !leading-[16px] !text-[#64748B]", children: "Total Slots" }),
            /* @__PURE__ */ _.jsx("p", { className: "!m-0 !text-[24px] !leading-[28px] !font-medium text-[#F59E0B]", children: n })
          ] }),
          /* @__PURE__ */ _.jsxs("div", { className: "flex flex-col gap-1", children: [
            /* @__PURE__ */ _.jsx("h4", { className: "!m-0 !text-xs !leading-[16px] !text-[#64748B]", children: "Utilisation Rate" }),
            /* @__PURE__ */ _.jsxs("p", { className: "!m-0 !text-[24px] !leading-[28px] !font-medium !text-[#329DFF]", children: [
              i.toFixed(2),
              "%"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ _.jsx("div", { className: "w-full h-[200px]", children: /* @__PURE__ */ _.jsx(fi, { width: "100%", height: "100%", children: /* @__PURE__ */ _.jsxs(
          Wb,
          {
            data: a,
            margin: { top: 0, right: 0, left: 0, bottom: 0 },
            children: [
              /* @__PURE__ */ _.jsx(to, { strokeDasharray: "3 3", stroke: "#EBEBEB" }),
              /* @__PURE__ */ _.jsx(
                ro,
                {
                  dataKey: "time",
                  tick: {
                    fontSize: 10,
                    lineHeight: 14,
                    fill: "#121212",
                    fontWeight: 400
                  },
                  axisLine: !1,
                  tickLine: !1,
                  interval: 20
                }
              ),
              /* @__PURE__ */ _.jsx(
                no,
                {
                  yAxisId: "left",
                  domain: [0, Math.max(...a.map((u) => u.total), 5)],
                  tick: {
                    fontSize: 10,
                    lineHeight: 14,
                    fill: "#64748B",
                    fontWeight: 400
                  },
                  axisLine: !1,
                  tickLine: !1
                }
              ),
              /* @__PURE__ */ _.jsx(ci, { content: /* @__PURE__ */ _.jsx(o, {}) }),
              /* @__PURE__ */ _.jsx(
                qn,
                {
                  yAxisId: "left",
                  type: "monotone",
                  dataKey: "bookings",
                  name: "Bookings",
                  stroke: "#8B5CF6",
                  strokeWidth: 2,
                  dot: !1
                }
              ),
              /* @__PURE__ */ _.jsx(
                qn,
                {
                  yAxisId: "left",
                  type: "monotone",
                  dataKey: "total",
                  name: "Total Slots",
                  stroke: "#F59E0B",
                  strokeWidth: 2,
                  strokeDasharray: "5 5",
                  dot: !1
                }
              )
            ]
          }
        ) }) })
      ]
    }
  );
}
function B2({ isStatic: e, financial: t }) {
  const r = t?.incomeSummary || {}, n = t?.expenditureSummary || {};
  function i(a) {
    if (a == null || isNaN(a)) return "0";
    const o = Number(a);
    return o >= 1e9 ? (o / 1e9).toFixed(2) + "B" : o >= 1e6 ? (o / 1e6).toFixed(2) + "M" : o >= 1e3 ? (o / 1e3).toFixed(2) + "K" : o.toFixed(2);
  }
  return /* @__PURE__ */ _.jsxs(
    rn,
    {
      title: "Income",
      period: "This Month",
      icon: /* @__PURE__ */ _.jsx(qc, { className: "text-2xl text-green-600" }),
      className: "mb-4 break-inside-avoid ",
      children: [
        /* @__PURE__ */ _.jsxs("div", { className: "grid grid-cols-4 text-xs text-gray-500 mb-2", children: [
          /* @__PURE__ */ _.jsx("span", { children: "Opening" }),
          /* @__PURE__ */ _.jsx("span", { children: "Income" }),
          /* @__PURE__ */ _.jsx("span", { children: "Collection" }),
          /* @__PURE__ */ _.jsx("span", { children: "Closing" })
        ] }),
        /* @__PURE__ */ _.jsxs("div", { className: "grid grid-cols-4 text-sm font-medium text-gray-900 mb-4", children: [
          /* @__PURE__ */ _.jsxs("span", { children: [
            i(r.opening_balance),
            " AED"
          ] }),
          /* @__PURE__ */ _.jsxs("span", { children: [
            i(r.income),
            " AED"
          ] }),
          /* @__PURE__ */ _.jsxs("span", { children: [
            i(r.collection),
            " AED"
          ] }),
          /* @__PURE__ */ _.jsxs("span", { children: [
            i(r.closing_balance),
            " AED"
          ] })
        ] }),
        /* @__PURE__ */ _.jsx("hr", { className: "my-2 border-t border-dashed border-gray-300" }),
        /* @__PURE__ */ _.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ _.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ _.jsx(qc, { className: "text-2xl text-red-600" }),
            /* @__PURE__ */ _.jsx(
              "h2",
              {
                style: { fontWeight: 500, fontSize: "16px", lineHeight: "20px" },
                className: "!my-0 !font-medium !text-[16px] !leading-[20px] !text-[#121212]",
                children: "Expenditure"
              }
            )
          ] }),
          /* @__PURE__ */ _.jsx("span", { className: "!text-xs !leading-[16px] !text-[#64748B]", children: "This Month" })
        ] }),
        /* @__PURE__ */ _.jsxs("div", { className: "grid grid-cols-4 text-xs text-gray-500 mb-2", children: [
          /* @__PURE__ */ _.jsx("span", { children: "Opening" }),
          /* @__PURE__ */ _.jsx("span", { children: "Expenditure" }),
          /* @__PURE__ */ _.jsx("span", { children: "Payment" }),
          /* @__PURE__ */ _.jsx("span", { children: "Outstanding" })
        ] }),
        /* @__PURE__ */ _.jsxs("div", { className: "grid grid-cols-4 text-sm font-medium text-gray-900", children: [
          /* @__PURE__ */ _.jsxs("span", { children: [
            i(n.opening_balance),
            " AED"
          ] }),
          /* @__PURE__ */ _.jsxs("span", { children: [
            i(n.expenditure),
            " AED"
          ] }),
          /* @__PURE__ */ _.jsxs("span", { children: [
            i(n.payment),
            " AED"
          ] }),
          /* @__PURE__ */ _.jsxs("span", { children: [
            i(n.outstanding),
            " AED"
          ] })
        ] })
      ]
    }
  );
}
function F2({ isStatic: e, gate: t }) {
  const r = {
    green: "#12B981",
    amber: "#F69E0A"
  }, n = t?.summary?.activeWalkins || {}, i = t?.summary?.preApprovedCheckins || {}, a = t?.chart?.map((u) => ({
    time: `${u?.hour ?? 0}:00`,
    walkins: Number(u?.walkins ?? 0),
    checkins: Number(u?.preApproved ?? 0)
  })) ?? [], o = ({ active: u, payload: s, label: c }) => !u || !s || !s.length ? null : /* @__PURE__ */ _.jsxs("div", { className: "bg-black text-white text-xs px-3 py-2 rounded-lg shadow-lg", children: [
    c && /* @__PURE__ */ _.jsx("p", { className: "font-medium mb-1", children: c }),
    s.map((l, f) => /* @__PURE__ */ _.jsxs("p", { className: "capitalize leading-relaxed", children: [
      /* @__PURE__ */ _.jsx(
        "span",
        {
          style: {
            display: "inline-block",
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: l.color,
            marginRight: 6
          }
        }
      ),
      l.name,
      ": ",
      /* @__PURE__ */ _.jsx("span", { className: "font-semibold", children: l.value })
    ] }, f))
  ] });
  return /* @__PURE__ */ _.jsxs(
    rn,
    {
      title: "Gate Updates",
      period: "Today",
      icon: /* @__PURE__ */ _.jsx(C0, { className: "text-2xl text-[#37CC6D]" }),
      className: `${e ? "max-h-[303px]" : ""} mb-4 break-inside-avoid`,
      children: [
        /* @__PURE__ */ _.jsxs("div", { className: "flex flex-wrap gap-x-2 gap-y-2 text-sm mb-2 ", children: [
          /* @__PURE__ */ _.jsxs("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ _.jsx("h4", { className: "!m-0 !text-[10px] !leading-[14px] !text-[#64748B]", children: "Active Walk-ins" }),
            /* @__PURE__ */ _.jsxs("p", { className: "!m-0 !text-[28px] !leading-[32px] !font-medium text-[#1FA05B]", children: [
              n.visitor_in ?? 0,
              /* @__PURE__ */ _.jsxs("span", { className: "!m-0 !text-[20px] !leading-[32px] !text-[#64748B]", children: [
                "/",
                n.total_pass ?? 0
              ] })
            ] })
          ] }),
          /* @__PURE__ */ _.jsxs("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ _.jsx("h4", { className: "!m-0 !text-[10px] !leading-[14px] !text-[#64748B]", children: "Pre-approved Check-ins" }),
            /* @__PURE__ */ _.jsxs("p", { className: "!m-0 text-[28px] leading-[32px] font-medium text-[#E7A015]", children: [
              i.expected_pass_scanned ?? 0,
              /* @__PURE__ */ _.jsxs("span", { className: "text-[20px] leading-[32px] text-[#64748B]", children: [
                "/",
                i.total_expected_pass ?? 0
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ _.jsx(fi, { width: "100%", height: "60%", children: /* @__PURE__ */ _.jsxs(
          Wb,
          {
            data: a,
            margin: { top: 0, right: 0, left: 0, bottom: 0 },
            children: [
              /* @__PURE__ */ _.jsx(
                ro,
                {
                  dataKey: "time",
                  tick: {
                    fontSize: 10,
                    lineHeight: 14,
                    fill: "#121212",
                    fontWeight: 400
                  }
                }
              ),
              /* @__PURE__ */ _.jsx(
                no,
                {
                  yAxisId: "left",
                  domain: [0, 30],
                  ticks: [0, 10, 20, 30],
                  tick: {
                    fontSize: 10,
                    lineHeight: 14,
                    fill: "#64748B",
                    fontWeight: 400
                  },
                  axisLine: !1,
                  tickLine: !1,
                  width: 25
                }
              ),
              /* @__PURE__ */ _.jsx(to, { strokeDasharray: "3 3", stroke: "#f3f4f6" }),
              /* @__PURE__ */ _.jsx(ci, { content: /* @__PURE__ */ _.jsx(o, {}) }),
              /* @__PURE__ */ _.jsx(
                qn,
                {
                  type: "monotone",
                  dataKey: "walkins",
                  stroke: r.green,
                  strokeWidth: 2,
                  dot: !1,
                  name: "Walk-ins"
                }
              ),
              /* @__PURE__ */ _.jsx(
                qn,
                {
                  type: "monotone",
                  dataKey: "checkins",
                  stroke: r.amber,
                  strokeWidth: 2,
                  strokeDasharray: "5 5",
                  dot: !1,
                  name: "Pre-approved"
                }
              )
            ]
          }
        ) })
      ]
    }
  );
}
function K2({ isStatic: e, complaints: t }) {
  console.log(t, "complaintscomplaintscomplaints");
  const r = ({ value: c }) => {
    if (c == null || isNaN(c))
      return null;
    const l = c >= 0;
    return /* @__PURE__ */ _.jsx(
      "span",
      {
        className: `p-1 rounded text-[10px] leading-[14px] font-medium ${l ? "bg-[#F7FEFA] text-[#1FA05B]" : "bg-[#FFF2F2] text-[#AB0000]"}`,
        children: l ? `+${c}%` : `${c}%`
      }
    );
  }, n = [
    { name: "L1", value: Number(t?.today_L1 || 0) },
    { name: "L2", value: Number(t?.today_L2 || 0) },
    { name: "L3", value: Number(t?.today_L3 || 0) },
    { name: "No Level", value: Number(t?.today_NoLevel || 0) }
  ], a = n.reduce((c, l) => c + l.value, 0) === 0 ? [{ name: "No Data", value: 1 }] : n, o = ["#1FA05B", "#E7A015", "#FA7E28", "#EF4444", "#CBD5E1"], u = ({ color: c }) => /* @__PURE__ */ _.jsx(
    "span",
    {
      style: {
        display: "inline-block",
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        backgroundColor: c,
        marginRight: "6px"
      }
    }
  ), s = ({ active: c, payload: l }) => !c || !l || !l.length ? null : /* @__PURE__ */ _.jsx("div", { className: "bg-black text-white text-xs px-3 py-2 rounded-lg shadow-lg", children: l.map((f, d) => /* @__PURE__ */ _.jsxs("p", { className: "capitalize leading-relaxed", children: [
    /* @__PURE__ */ _.jsx(u, { color: f.color }),
    f.name,
    ": ",
    /* @__PURE__ */ _.jsx("span", { className: "font-semibold", children: f.value })
  ] }, d)) });
  return /* @__PURE__ */ _.jsx(
    rn,
    {
      title: "Helpdesk",
      period: "Today",
      icon: /* @__PURE__ */ _.jsx(k0, { className: "text-2xl text-[#FA7E28]" }),
      className: `${e && "max-h-[186px]"} mb-4 break-inside-avoid`,
      children: /* @__PURE__ */ _.jsxs("div", { className: "flex gap-3 h-fit", children: [
        /* @__PURE__ */ _.jsxs("div", { className: "w-[50%] flex flex-col gap-7", children: [
          /* @__PURE__ */ _.jsxs("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ _.jsx("h4", { className: "!m-0 !text-xs !leading-[16px] !text-[#64748B]", children: "Open Complaints" }),
            /* @__PURE__ */ _.jsx("p", { className: "!m-0 !text-[28px] !leading-[32px] !font-medium text-[#FA7E28]", children: t?.today_open_complaints ?? 0 })
          ] }),
          /* @__PURE__ */ _.jsxs("p", { className: "!m-0 !text-[10px] !leading-[14px] !text-[#64748B] space-x-1", children: [
            /* @__PURE__ */ _.jsx(r, { value: t?.percent_change }),
            /* @__PURE__ */ _.jsx("span", { className: "whitespace-nowrap", children: "Compared to yesterday" })
          ] })
        ] }),
        /* @__PURE__ */ _.jsx("div", { className: "w-[50%] h-[110px] flex justify-end", children: /* @__PURE__ */ _.jsx(fi, { width: "75%", height: "100%", children: /* @__PURE__ */ _.jsxs(qb, { children: [
          /* @__PURE__ */ _.jsx(
            hc,
            {
              data: a,
              innerRadius: 36,
              outerRadius: 52,
              paddingAngle: 2,
              dataKey: "value",
              children: a.map((c, l) => /* @__PURE__ */ _.jsx(ur, { fill: o[l] || "#CBD5E1" }, c.name))
            }
          ),
          /* @__PURE__ */ _.jsx(ci, { content: /* @__PURE__ */ _.jsx(s, {}) })
        ] }) }) })
      ] })
    }
  );
}
export {
  R2 as Community,
  $2 as Engagement,
  L2 as Facilities,
  B2 as FinanceSummary,
  F2 as GateUpdates,
  K2 as Helpdesk
};
