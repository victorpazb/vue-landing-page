import {
  __commonJS
} from "./chunk-76J2PTFD.js";

// node_modules/vue3-smooth-scroll/dist/vue-smooth-scroll.min.js
var require_vue_smooth_scroll_min = __commonJS({
  "node_modules/vue3-smooth-scroll/dist/vue-smooth-scroll.min.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.VueSmoothScroll = t() : e.VueSmoothScroll = t();
    }(exports, function() {
      return function(e) {
        var t = {};
        function n(o) {
          if (t[o])
            return t[o].exports;
          var r = t[o] = { i: o, l: false, exports: {} };
          return e[o].call(r.exports, r, r.exports, n), r.l = true, r.exports;
        }
        return n.m = e, n.c = t, n.d = function(e2, t2, o) {
          n.o(e2, t2) || Object.defineProperty(e2, t2, { enumerable: true, get: o });
        }, n.r = function(e2) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
        }, n.t = function(e2, t2) {
          if (1 & t2 && (e2 = n(e2)), 8 & t2)
            return e2;
          if (4 & t2 && "object" == typeof e2 && e2 && e2.__esModule)
            return e2;
          var o = /* @__PURE__ */ Object.create(null);
          if (n.r(o), Object.defineProperty(o, "default", { enumerable: true, value: e2 }), 2 & t2 && "string" != typeof e2)
            for (var r in e2)
              n.d(o, r, (function(t3) {
                return e2[t3];
              }).bind(null, r));
          return o;
        }, n.n = function(e2) {
          var t2 = e2 && e2.__esModule ? function() {
            return e2.default;
          } : function() {
            return e2;
          };
          return n.d(t2, "a", t2), t2;
        }, n.o = function(e2, t2) {
          return Object.prototype.hasOwnProperty.call(e2, t2);
        }, n.p = "", n(n.s = 0);
      }([function(e, t, n) {
        "use strict";
        function o(e2, t2, n2) {
          return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
        }
        function r(e2) {
          return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
            return typeof e3;
          } : function(e3) {
            return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
          })(e2);
        }
        var i;
        n.r(t);
        var u = function(e2) {
          return e2 < 0.5 ? 4 * e2 * e2 * e2 : (e2 - 1) * (2 * e2 - 2) * (2 * e2 - 2) + 1;
        }, c = function() {
          return { duration: 500, offset: 0, container: window, updateHistory: true, easingFunction: null };
        }, l = Symbol("smoothScrollCtx"), f = function(e2) {
          var t2 = e2.scrollTo, n2 = e2.offset, o2 = e2.duration, r2 = e2.container, c2 = e2.updateHistory, l2 = e2.hash, f2 = e2.easingFunction;
          i || (i = window.requestAnimationFrame || function(e3) {
            return window.setTimeout(e3, 16);
          }), c2 && window.history.pushState && location.hash !== l2 && window.history.pushState("", "", l2);
          var a2, s, d = "number" == typeof t2, p = r2.scrollTop || window.pageYOffset, y = (d ? t2 : (s = p, "HTML" === (a2 = t2).nodeName ? -s : a2.getBoundingClientRect().top + s)) + n2, b = "function" == typeof f2 ? f2 : u, m = Date.now();
          !function e3() {
            var n3 = Date.now() - m, u2 = n3 < o2, l3 = u2 ? p + (y - p) * b(n3 / o2) : y;
            u2 ? i(e3) : c2 && !d && location.replace("#" + t2.id), r2 === window ? r2.scrollTo(0, l3) : r2.scrollTop = l3;
          }();
        }, a = { install: function(e2, t2) {
          var n2, i2 = !e2.version.startsWith("3"), u2 = function() {
            return t2 ? Object.assign(c(), t2) : c();
          };
          e2.directive("smooth-scroll", (o(n2 = {}, i2 ? "inserted" : "mounted", function(e3, t3, n3) {
            if ("object" === ("undefined" == typeof window ? "undefined" : r(window)) && void 0 !== window.pageYOffset) {
              var o2 = Object.assign(u2(), t3.value);
              "string" == typeof o2.container && (o2.container = document.querySelector(o2.container));
              var c2 = function(e4) {
                e4.preventDefault();
                var t4 = i2 ? n3.data.attrs.href : n3.props.href, r2 = document.getElementById(t4.substring(1));
                r2 && f(Object.assign(o2, { scrollTo: r2, hash: t4 }));
              };
              e3.addEventListener("click", c2), e3[l] = { clickHandler: c2 };
            }
          }), o(n2, i2 ? "unbind" : "unmounted", function(e3) {
            e3.removeEventListener("click", e3[l].clickHandler), e3[l] = null;
          }), n2));
          var a2 = function(e3) {
            var t3 = Object.assign(u2(), e3);
            return f(t3);
          };
          (i2 ? e2.prototype : e2.config.globalProperties).$smoothScroll = a2, i2 || e2.provide("smoothScroll", a2);
        } };
        t.default = a;
      }]).default;
    });
  }
});
export default require_vue_smooth_scroll_min();
//# sourceMappingURL=vue3-smooth-scroll.js.map
