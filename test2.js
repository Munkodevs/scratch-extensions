const icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAADTUlEQVRIS63VTWgUZxgH8P+7Mzsf+2U2SrPJKBoEA1WKUMzupaKHpgoetadCnaBN9FRaLLRQEW17KKIed1V21dJLbU/FRqiixx219NDaVi+NmnWNZT+cze7Ozsf7yoxEYpnMRJI5DQzP+5v3P8/7DEHANVHM7iXAVyAkwQCNgZYjDp3KH7jzZ1DdwmckBLirrE29KQgcTNOBZTrQdYP2es631LSPnp34zQqDlgTIcvTlOowxNBsG6o3uHw6he899eOt+EBIGeBHxUW5ElDjEYwKSKdFbzzAsVB61/q4lWlsvv3/XXAwJBOaL9pe29slE3MgoOSHF+N0DAwnwfASNehe1WudkYVw7sixgYfFkMXtSikU/VZQU3LhmHjVZ17Sz59Tbt/2QJe3glUIGMnEhe3PgjcR2Ny5dN/Df0873ebX8gS/wshUBUMK+PKveuhzWGZPF0fdiceHq4FAK3a6FyoyuFca13GKA14ruw8qM/ldhXNscBnz03duDUSY83jCchu04ePBvs5ZXtTW+wGQpW12/IZ1xP9r0dAM9g2bOH9Rmg5DDpW0ZwvFVD7CpW1ctqNqQP1DM/ZJRErvdFqw+bqHdMccKqvZr4AEsbdsVj4lTbkTttolqtXWloGp7FtlB7uv+1fIX6bSM9pyJJ9W5a3m1PAYC5ou4H7mUvT44mNwZTwio17to1Dsn8qp21Bc4cGl0WCLcP+vW9wkRQrxddNrW6cyw9NmxnTfthUX7ftgs9LcTP8dkfmxIWeW16cOHTdO22EheLU8v2qYTxezn6bT8zeo1MS/T2dk5GB3rHgNOMd6+SsFxnE3eJcAnohwdUZQkQAjqtTYadePHwri2L/CgHbuxg3/ywPhdUZJbJOnF3GnpPS9fw7ABAkgij3h8flS46REYPRvVig5KoebV8oXAg3bw4ugmjkV+6u+Xt/T1SSDE/wy6sTxrdiHHBYgCH4q8ssqLjOPHZYk/kkiKEUHg4Y5qBgbLpDBNG62W5Rhde4rjsGdISUEUgxHf1zx0MfsWdTBGCHIAeQeABbAyBdPmfziTpdz+SASlMOT1Z9GCoJeCLAtwrTBk2UAYsiKAH+JN2YreXDHg/wilzJ3Oz1YUmEcYY2fce0LIx88BFi6vvp70RPYAAAAASUVORK5CYII=";

class Utilities {

  constructor() {}

  getInfo() {
    return {
      id: 'utilities',
      name: 'Utlities',

      color1: '#8BC34A',
      color2: '#7CB342',
      color3: '#689F38',

      menuIconURI: icon,

      blocks: [
        {
          opcode: 'isExactly',

          blockType: Scratch.BlockType.BOOLEAN,

          text: 'is [A] exactly [B]?',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'APPLE'
            }
          }
        },
        {
          opcode: 'isLessOrEqual',

          blockType: Scratch.BlockType.BOOLEAN,

          text: '[A] <= [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.NUMBER
            },
            B: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 50
            }
          }
        },
        {
          opcode: 'isMoreOrEqual',

          blockType: Scratch.BlockType.BOOLEAN,

          text: '[A] >= [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.NUMBER
            },
            B: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 50
            }
          }
        },
        {
          opcode: 'trueBlock',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'true'
        },
        {
          opcode: 'falseBlock',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'false'
        },
        {
          opcode: 'exponent',

          blockType: Scratch.BlockType.REPORTER,

          text: '[A] ^ [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.NUMBER
            },
            B: {
              type: Scratch.ArgumentType.NUMBER
            }
          }
        },
        {
          opcode: 'pi',
          blockType: Scratch.BlockType.REPORTER,
          text: 'pi'
        },
        {
          opcode: 'ternaryOperator',

          blockType: Scratch.BlockType.REPORTER,

          text: 'if [A] then [B] else [C]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.BOOLEAN
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'banana'
            },
            C: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            }
          }
        },
        {
          opcode: 'letters',

          blockType: Scratch.BlockType.REPORTER,

          text: 'letters [START] to [END] of [STRING]',
          arguments: {
            START: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 5
            },
            END: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 7
            },
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'red apple'
            }
          }
        },
        {
          opcode: 'currentMillisecond',
          blockType: Scratch.BlockType.REPORTER,
          text: 'current millisecond'
        },
        {
          opcode: 'fetchFrom',

          blockType: Scratch.BlockType.REPORTER,

          text: 'get content from [URL]',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://translate-service.scratch.mit.edu/translate?language=eo&text=hello'
            }
          }
        },
        {
          opcode: 'parseJSON',

          blockType: Scratch.BlockType.REPORTER,

          text: '[PATH] of [JSON_STRING]',
          arguments: {
            PATH: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'fruit/apples'
            },
            JSON_STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '{"fruit": {"apples": 2, "bananas": 3}, "total_fruit": 5}'
            }
          }
        },
        {
          opcode: 'stringToBoolean',

          blockType: Scratch.BlockType.BOOLEAN,

          text: '[STRING]',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'true'
            }
          }
        },
        {
          opcode: 'removeLast',

          blockType: Scratch.BlockType.REPORTER,

          text: 'remove last character from [STRING]',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'abcd'
            }
          }
        },
        {
          opcode: 'removeStart',

          blockType: Scratch.BlockType.REPORTER,

          text: 'remove first character from [STRING]',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'dcba'
            }
          }
        },
        {
          opcode: 'regexReplace',

          blockType: Scratch.BlockType.REPORTER,

          text: 'replace [STRING] using the rule [REGEX] with [NEWSTRING]',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'bananas are awesome. i like bananas.'
            },
            REGEX: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'banana'
            },
            NEWSTRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            }
          }
        }
      ]
    }
  }

  isExactly({A, B}) {
    return A === B;
  }

  isLessOrEqual({A, B}) {
    return A <= B;
  }

  isMoreOrEqual({A, B}) {
    return A >= B;
  }

  trueBlock() {
    return true;
  }

  falseBlock() {
    return false;
  }

  exponent({A, B}) {
    return Math.pow(A, B);
  }

  pi() {
    return Math.PI;
  }

  ternaryOperator({A, B, C}) {
    return A ? B : C;
  }

  letters({STRING, START, END}) {
    return STRING.slice(Math.max(1, START) - 1, Math.min(STRING.length, END));
  }

  currentMillisecond() {
    return Date.now() % 1000;
  }

  fetchFrom({URL}) {
    return fetch(URL).then(res => res.text())
      .catch(err => '');
  }

  parseJSON({PATH, JSON_STRING}) {
    try {
      const path = PATH.toString().split('/').map(prop => decodeURIComponent(prop));
      if (path[0] === '') path.splice(0, 1);
      if (path[path.length - 1] === '') path.splice(-1, 1);
      let json;
      try {
        json = JSON.parse(' ' + JSON_STRING);
      } catch (e) {
        return e.message;
      }
      path.forEach(prop => json = json[prop]);
      if (json === null) return 'null';
      else if (json === undefined) return '';
      else if (typeof json === 'object') return JSON.stringify(json);
      else return json.toString();
    } catch (err) {
      return '';
    }
  }

  stringToBoolean({STRING}) {
    return STRING;
  }

  removeLast({STRING}) { 
    return STRING.slice(0, -1);
  }

  removeStart({STRING}) { 
    return STRING.substring(1);
  }

  regexReplace({STRING, REGEX, NEWSTRING}) {
    return STRING.toString().replace(new RegExp(REGEX, 'gi'), NEWSTRING);
  }

}

Scratch.extensions.register(new Utilities());

"use strict";
(function () {
    function y(b) {
        "@babel/helpers - typeof";
        y =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
                ? function (a) {
                      return typeof a;
                  }
                : function (a) {
                      return a && "function" === typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
                  };
        return y(b);
    }
    function A(b, a) {
        for (var c = 0; c < a.length; c++) {
            var d = a[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            "value" in d && (d.writable = !0);
            Object.defineProperty(b, d.key, d);
        }
    }
    function E(b, a, c) {
        a && A(b.prototype, a);
        c && A(b, c);
        return b;
    }
    function F(b, a) {
        if ("function" !== typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
        b.prototype = Object.create(a && a.prototype, { constructor: { value: b, writable: !0, configurable: !0 } });
        a && m(b, a);
    }
    function n(b) {
        n = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (a) {
                  return a.__proto__ || Object.getPrototypeOf(a);
              };
        return n(b);
    }
    function m(b, a) {
        m =
            Object.setPrototypeOf ||
            function (a, b) {
                a.__proto__ = b;
                return a;
            };
        return m(b, a);
    }
    function B() {
        if ("undefined" === typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
        } catch (b) {
            return !1;
        }
    }
    function q(b, a, c) {
        q = B()
            ? Reflect.construct
            : function (a, b, c) {
                  var d = [null];
                  d.push.apply(d, b);
                  a = new (Function.bind.apply(a, d))();
                  c && m(a, c.prototype);
                  return a;
              };
        return q.apply(null, arguments);
    }
    function v(b) {
        var a = "function" === typeof Map ? new Map() : void 0;
        v = function (b) {
            function c() {
                return q(b, arguments, n(this).constructor);
            }
            if (null === b || -1 === Function.toString.call(b).indexOf("[native code]")) return b;
            if ("function" !== typeof b) throw new TypeError("Super expression must either be null or a function");
            if ("undefined" !== typeof a) {
                if (a.has(b)) return a.get(b);
                a.set(b, c);
            }
            c.prototype = Object.create(b.prototype, { constructor: { value: c, enumerable: !1, writable: !0, configurable: !0 } });
            return m(c, b);
        };
        return v(b);
    }
    function w(b) {
        if (void 0 === b) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return b;
    }
    function G(b) {
        var a = B();
        return function () {
            var c = n(b);
            if (a) {
                var d = n(this).constructor;
                c = Reflect.construct(c, arguments, d);
            } else c = c.apply(this, arguments);
            c = !c || ("object" !== typeof c && "function" !== typeof c) ? w(this) : c;
            return c;
        };
    }
    function C(b, a) {
        if (null == a || a > b.length) a = b.length;
        for (var c = 0, d = Array(a); c < a; c++) d[c] = b[c];
        return d;
    }
    function p(b) {
        b = b.split(".");
        for (var a = [], c = 0; c < b.length; c++) {
            for (var d = b[c]; "\\" === d[d.length - 1] && void 0 !== b[c + 1]; ) (d = d.slice(0, -1) + "."), (d += b[++c]);
            a.push(d);
        }
        return H(a) ? a : [];
    }
    var g = function (b) {
            var a = y(b);
            return null !== b && ("object" === a || "function" === a);
        },
        I = ["__proto__", "prototype", "constructor"],
        H = function (b) {
            return !b.some(function (a) {
                return I.includes(a);
            });
        },
        r = {
            get: function (b, a, c) {
                if (!g(b) || "string" !== typeof a) return void 0 === c ? b : c;
                a = p(a);
                if (0 !== a.length) {
                    for (var d = 0; d < a.length; d++) {
                        if (!Object.prototype.propertyIsEnumerable.call(b, a[d])) return c;
                        b = b[a[d]];
                        if (void 0 === b || null === b) {
                            if (d !== a.length - 1) return c;
                            break;
                        }
                    }
                    return b;
                }
            },
            set: function (b, a, c) {
                if (!g(b) || "string" !== typeof a) return b;
                var d = b;
                a = p(a);
                for (var f = 0; f < a.length; f++) {
                    var e = a[f];
                    g(b[e]) || (b[e] = {});
                    f === a.length - 1 && (b[e] = c);
                    b = b[e];
                }
                return d;
            },
            delete: function (b, a) {
                if (g(b) && "string" === typeof a) {
                    a = p(a);
                    for (var c = 0; c < a.length; c++) {
                        var d = a[c];
                        if (c === a.length - 1) {
                            delete b[d];
                            break;
                        }
                        b = b[d];
                        if (!g(b)) break;
                    }
                }
            },
            has: function (b, a) {
                if (!g(b) || "string" !== typeof a) return !1;
                a = p(a);
                if (0 === a.length) return !1;
                for (var c = 0; c < a.length; c++)
                    if (g(b)) {
                        if (!(a[c] in b)) return !1;
                        b = b[a[c]];
                    } else return !1;
                return !0;
            },
        },
        J = function (b) {
            b = b.charCodeAt(0).toString(16).toUpperCase();
            return "0x" + (b.length % 2 ? "0" : "") + b;
        },
        D = (function (b) {
            function a(b, f, e, h) {
                if (!(this instanceof a)) throw new TypeError("Cannot call a class as a function");
                var d = e || 20;
                if (f) {
                    var k = b.message.match(/^Unexpected token (.) .*position\s+(\d+)/i);
                    e = k ? +k[2] : b.message.match(/^Unexpected end of JSON.*/i) ? f.length - 1 : null;
                    k = k ? b.message.replace(/^Unexpected token ./, "Unexpected token ".concat(JSON.stringify(k[1]), " (").concat(J(k[1]), ")")) : b.message;
                    if (null !== e && void 0 !== e) {
                        var g = e <= d ? 0 : e - d;
                        d = e + d >= f.length ? f.length : e + d;
                        d = (0 === g ? "" : "...") + f.slice(g, d) + (d === f.length ? "" : "...");
                        e = { message: k + " while parsing ".concat(f === d ? "" : "near ").concat(JSON.stringify(d)), position: e };
                    } else e = { message: k + " while parsing '".concat(f.slice(0, 2 * d), "'"), position: 0 };
                } else e = { message: b.message + " while parsing empty string", position: 0 };
                f = c.call(this, e.message);
                Object.assign(w(f), e);
                f.code = "EJSONPARSE";
                f.systemError = b;
                Error.captureStackTrace(w(f), h || f.constructor);
                return f;
            }
            F(a, b);
            var c = G(a);
            E(a, [
                {
                    key: "name",
                    get: function () {
                        return this.constructor.name;
                    },
                    set: function (a) {},
                },
                {
                    key: Symbol.toStringTag,
                    get: function () {
                        return this.constructor.name;
                    },
                },
            ]);
            return a;
        })(v(SyntaxError)),
        K = Symbol.for("indent"),
        L = Symbol.for("newline"),
        M = /^\s*[{\[]((?:\r?\n)+)([\s\t]*)/,
        l = function f(a, c, d) {
            var e = String(a).replace(/^\uFEFF/, "");
            d = d || 20;
            try {
                var h = e.match(M) || [, "", ""];
                var g = Array.isArray(h) ? h : void 0;
                var k;
                if (!(k = g))
                    if ("undefined" !== typeof Symbol && Symbol.iterator in Object(h)) {
                        g = [];
                        var l = !0,
                            m = !1,
                            n = void 0;
                        try {
                            for (var p = h[Symbol.iterator](), r; !(l = (r = p.next()).done) && (g.push(r.value), 3 !== g.length); l = !0);
                        } catch (z) {
                            (m = !0), (n = z);
                        } finally {
                            try {
                                if (!l && null != p["return"]) p["return"]();
                            } finally {
                                if (m) throw n;
                            }
                        }
                        k = g;
                    } else k = void 0;
                var t;
                if (!(t = k))
                    a: {
                        if (h) {
                            if ("string" === typeof h) {
                                t = C(h, 3);
                                break a;
                            }
                            var u = Object.prototype.toString.call(h).slice(8, -1);
                            "Object" === u && h.constructor && (u = h.constructor.name);
                            if ("Map" === u || "Set" === u) {
                                t = Array.from(h);
                                break a;
                            }
                            if ("Arguments" === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)) {
                                t = C(h, 3);
                                break a;
                            }
                        }
                        t = void 0;
                    }
                var q;
                if (!(q = t)) throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                var v = q[1],
                    w = q[2],
                    x = JSON.parse(e, c);
                x && "object" === y(x) && ((x[L] = v), (x[K] = w));
                return x;
            } catch (z) {
                if ("string" !== typeof a && !Buffer.isBuffer(a))
                    throw ((c = Array.isArray(a) && 0 === a.length), Object.assign(new TypeError("Cannot parse ".concat(c ? "an empty array" : String(a))), { code: "EJSONPARSE", systemError: z }));
                throw new D(z, e, d, f);
            }
        };
    l.JSONParseError = D;
    l.noExceptions = function (a, c) {
        try {
            return JSON.parse(String(a).replace(/^\uFEFF/, ""), c);
        } catch (d) {}
    };
    class N {
        getInfo() {
            return {
                id: "DotProp",
                name: "Dot Prop",
                blocks: [
                    {
                        opcode: "get",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "Get [path] from [object] and use [defaultValue] if not found",
                        arguments: {
                            path: { type: Scratch.ArgumentType.STRING, defaultValue: "a.b" },
                            object: { type: Scratch.ArgumentType.STRING, defaultValue: '{"a":{"b":"Hello World"}}' },
                            defaultValue: { type: Scratch.ArgumentType.STRING, defaultValue: "Value not found" },
                        },
                    },
                    {
                        opcode: "set",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "Set [path] in [object] to [value]",
                        arguments: {
                            path: { type: Scratch.ArgumentType.STRING, defaultValue: "a.c" },
                            object: { type: Scratch.ArgumentType.STRING, defaultValue: '{"a":{"b":"Hello World"}}' },
                            value: { type: Scratch.ArgumentType.STRING, defaultValue: "Lorem ipsum" },
                        },
                    },
                    {
                        opcode: "has",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "Does [object] contain [path]",
                        arguments: { object: { type: Scratch.ArgumentType.STRING, defaultValue: '{"a":{"b":"Hello World"}}' }, path: { type: Scratch.ArgumentType.STRING, defaultValue: "a.b" } },
                    },
                    {
                        opcode: "delete",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "Delete [path] from [object]",
                        arguments: { path: { type: Scratch.ArgumentType.STRING, defaultValue: "a.b" }, object: { type: Scratch.ArgumentType.STRING, defaultValue: '{"a":{"b":"Hello World"}}' } },
                    },
                ],
            };
        }
        get({ path: a, object: c, defaultValue: d }) {
            a = r.get(l(c), a, d);
            return "object" === typeof a ? JSON.stringify(a) : a;
        }
        set({ path: a, object: c, value: d }) {
            return JSON.stringify(r.set(l(c), a, d));
        }
        has({ object: a, path: c }) {
            return r.has(l(a), c);
        }
        delete({ object: a, path: c }) {
            a = l(a);
            r.delete(a, c);
            return JSON.stringify(a);
        }
    }
    Scratch.extensions.register(new N());
})();

class LocalStorage {

  constructor() {}

  getInfo() {
    return {
      id: 'localStorage',
      name: 'LocalStorage',

      color1: '#c34a4a',
      color2: '#b34242',
      color3: '#9f3838',

      blocks: [
        {
          opcode: 'GETLS',

          blockType: Scratch.BlockType.REPORTER,

          text: 'get key [GET]',
          arguments: {
            GET: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'cat'
            }
          }
        },
        {
          opcode: 'REMLS',

          blockType: Scratch.BlockType.COMMAND,

          text: 'remove key [REMOVE]',
          arguments: {
            REMOVE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'cat'
            }
          }
        },
        {
          opcode: 'ADDLS',

          blockType: Scratch.BlockType.COMMAND,

          text: 'set key [KEY] val [VAL]',
          arguments: {
            KEY: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'cat'
            },
            VAL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'tom'
            }
          }
        },
        {
          opcode: 'clearLS',

          blockType: Scratch.BlockType.COMMAND,

          text: 'clear all localStorage keys',
        }
      ]
    }
  }

  GETLS({GET}) {
    return localStorage.getItem(GET);
  }

  REMLS({REMOVE}) {
    localStorage.removeItem(REMOVE);
  }

  ADDLS({KEY}, {VAL}) {
    localStorage.setItem(KEY, VAL);
  }

  clearLS() {
    localStorage.clear();
  }

}

Scratch.extensions.register(new LocalStorage());
