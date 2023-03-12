var satus = {
  components: {},
  events: { data: {} },
  locale: { data: {} },
  storage: { data: {}, type: "extension" },
  getAnimationDuration: function (e) {
    return (
      1e3 *
      Number(
        window
          .getComputedStyle(e)
          .getPropertyValue("animation-duration")
          .replace(/[^0-9.]/g, "")
      )
    );
  },
  append: function (e, t) {
    (t || document.body).appendChild(e);
  },
  attr: function (e, t) {
    if (t)
      for (var n in t) {
        var s = t[n];
        satus.isFunction(s) && (s = s()),
          e.namespaceURI
            ? !1 === s
              ? e.removeAttributeNS(null, n)
              : e.setAttributeNS(null, n, s)
            : !1 === s
            ? e.removeAttribute(n)
            : e.setAttribute(n, s);
      }
  },
  camelize: function (e) {
    for (var t = "", n = 0, s = e.length; n < s; n++) {
      var a = e[n];
      t += "_" === a || "-" === a ? e[++n].toUpperCase() : a;
    }
    return t;
  },
  snakelize: function (e) {
    return e.replace(/([A-Z])/g, "-$1").toLowerCase();
  },
  class: function (e, t) {
    t && e.classList.add(t);
  },
  clone: function (e) {
    for (
      var t = e.cloneNode(!0),
        n = window.getComputedStyle(e.parentNode),
        s = window.getComputedStyle(e),
        a = "",
        o = 0,
        r = s.length;
      o < r;
      o++
    ) {
      var i = s[o],
        l = s.getPropertyValue(i);
      "background-color" === i && (l = n.getPropertyValue("background-color")),
        -1 ===
          ["box-shadow", "left", "top", "bottom", "right", "opacity"].indexOf(
            i
          ) && (a += i + ":" + l + ";");
    }
    return t.setAttribute("style", a), t;
  },
  createElement: function (e, t, n) {
    var s = this.camelize(e),
      a = "satus-" + (t || e),
      o = a.match(/__[^__]+/g);
    return (
      n || ("svg" === e && (n = "http://www.w3.org/2000/svg")),
      (e = n
        ? document.createElementNS(n, e)
        : this.components[s]
        ? document.createElement("div")
        : document.createElement(e)),
      o && 1 < o.length && (a = a.slice(0, a.indexOf("__")) + o[o.length - 1]),
      (e.componentName = t),
      (e.className = a),
      (e.createChildElement = function (e, t, n) {
        n = satus.createElement(e, this.componentName + "__" + (t || e), n);
        return (
          this.baseProvider && (n.baseProvider = this.baseProvider),
          this.layersProvider && (n.layersProvider = this.layersProvider),
          this.appendChild(n),
          n
        );
      }),
      e
    );
  },
  css: function (e, t) {
    return window.getComputedStyle(e).getPropertyValue(t);
  },
  decrypt: async function (e, t) {
    var n = e
        .slice(0, 24)
        .match(/.{2}/g)
        .map((e) => parseInt(e, 16)),
      s = { name: "AES-GCM", iv: new Uint8Array(n) };
    try {
      var a = new TextDecoder().decode(
        await crypto.subtle.decrypt(
          s,
          await crypto.subtle.importKey(
            "raw",
            await crypto.subtle.digest("SHA-256", new TextEncoder().encode(t)),
            s,
            !1,
            ["decrypt"]
          ),
          new Uint8Array(
            atob(e.slice(24))
              .match(/[\s\S]/g)
              .map((e) => e.charCodeAt(0))
          )
        )
      );
    } catch (e) {
      return !1;
    }
    return a;
  },
  encrypt: async function (e, t) {
    var n = crypto.getRandomValues(new Uint8Array(12)),
      s = { name: "AES-GCM", iv: n };
    return (
      Array.from(n)
        .map((e) => ("00" + e.toString(16)).slice(-2))
        .join("") +
      btoa(
        Array.from(
          new Uint8Array(
            await crypto.subtle.encrypt(
              s,
              await crypto.subtle.importKey(
                "raw",
                await crypto.subtle.digest(
                  "SHA-256",
                  new TextEncoder().encode(t)
                ),
                s,
                !1,
                ["encrypt"]
              ),
              new TextEncoder().encode(e)
            )
          )
        )
          .map((e) => String.fromCharCode(e))
          .join("")
      )
    );
  },
  data: function (e, t) {
    if (t)
      for (var n in t) {
        var s = t[n];
        satus.isFunction(s) && (s = s()), (e.dataset[n] = s);
      }
  },
  empty: function (e, t = []) {
    for (var n = e.childNodes.length - 1; -1 < n; n--) {
      var s = e.childNodes[n];
      -1 === t.indexOf(s) && s.remove();
    }
  },
  elementIndex: function (e) {
    return Array.prototype.slice.call(e.parentNode.children).indexOf(e);
  },
};
(satus.events.on = function (e, t) {
  this.data[e] || (this.data[e] = []), this.data[e].push(t);
}),
  (satus.events.trigger = function (e, t) {
    var n = this.data[e];
    if (n) for (var s = 0, a = n.length; s < a; s++) n[s](t);
  }),
  (satus.fetch = function (e, t, n, s) {
    fetch(e)
      .then(function (e) {
        e.ok ? e[s || "json"]().then(t) : n();
      })
      .catch(function () {
        n(t);
      });
  }),
  (satus.getProperty = function (e, t) {
    for (var n = t.split("."), s = 0, a = n.length; s < a; s++) {
      var o = n[s];
      if ((console.log(e), !(e = e[o]))) return !1;
      if (s === a - 1) return e;
    }
  }),
  (satus.indexOf = function (e, t) {
    var n = 0;
    if (satus.isArray(t)) n = t.indexOf(e);
    else for (; (e = e.previousElementSibling); ) n++;
    return n;
  }),
  (satus.toIndex = function (e, t, n) {
    satus.isArray(n) && n.splice(e, 0, n.splice(satus.indexOf(t, n), 1)[0]);
  }),
  (satus.isset = function (e, t) {
    if (!0 !== t) return null != e;
    for (
      var n = e.split(".").filter(function (e) {
          return "" != e;
        }),
        s = 0,
        a = n.length;
      s < a;
      s++
    ) {
      if (!satus.isset(e[n[s]])) return;
      e = e[n[s]];
    }
    return e;
  }),
  (satus.isArray = function (e) {
    return !!Array.isArray(e);
  }),
  (satus.isBoolean = function (e) {
    return !1 === e || !0 === e;
  }),
  (satus.isElement = function (e) {
    return e instanceof Element || e instanceof HTMLDocument;
  }),
  (satus.isFunction = function (e) {
    return "function" == typeof e;
  }),
  (satus.isNodeList = function (e) {
    return e instanceof NodeList;
  }),
  (satus.isNumber = function (e) {
    return "number" == typeof e && !1 === isNaN(e);
  }),
  (satus.isObject = function (e) {
    return e instanceof Object && null !== e;
  }),
  (satus.isString = function (e) {
    return "string" == typeof e;
  }),
  (satus.on = function (e, t) {
    if (t)
      for (var n in t) {
        var s = t[n];
        "selectionchange" === n && (e = document),
          satus.isFunction(s)
            ? e.addEventListener(n, s)
            : satus.isArray(s) || satus.isObject(s)
            ? e.addEventListener(n, function (e) {
                var t = this.skeleton.on[e.type],
                  e = this.layersProvider;
                (t.parentSkeleton = this.skeleton),
                  (t.parentElement = this),
                  !e &&
                    0 < this.baseProvider.layers.length &&
                    (e = this.baseProvider.layers[0]),
                  !0 === t.prepend
                    ? satus.prepend(t, this.parentNode)
                    : e && "modal" !== t.component
                    ? e.open(t)
                    : satus.render(t, this.baseProvider);
              })
            : satus.isString(s) &&
              e.addEventListener(n, function () {
                for (
                  var e = this.skeleton.on[event.type].match(
                      /(["'`].+["'`]|[^.()]+)/g
                    ),
                    t = this.baseProvider,
                    n = 0,
                    s = e.length;
                  n < s;
                  n++
                ) {
                  var a = e[n];
                  t.skeleton[a]
                    ? (t = t.skeleton[a])
                    : "function" == typeof t[a]
                    ? t[a]()
                    : (t = t[a]),
                    t.rendered && (t = t.rendered);
                }
              });
      }
  }),
  (satus.parentify = function (e, t) {
    for (var n in e) {
      var s;
      -1 === t.indexOf(n) &&
        ((s = e[n]),
        satus.isset(s) &&
          ((s.parentObject = e),
          !satus.isObject(s) ||
            satus.isArray(s) ||
            satus.isElement(s) ||
            satus.isFunction(s) ||
            this.parentify(s, t)));
    }
  }),
  (satus.prepend = function (e, t) {
    this.isElement(e)
      ? t.prepend(e)
      : this.isObject(e) && this.render(e, t, void 0, void 0, !0);
  }),
  (satus.properties = function (e, t) {
    if (t)
      for (var n in t) {
        var s = t[n];
        -1 !== ["placeholder", "title"].indexOf(n) && (s = satus.locale.get(s)),
          (e[n] = s);
      }
  }),
  (satus.remove = function (e, t) {
    satus.isArray(t) && t.splice(satus.indexOf(e, t), 1);
  }),
  (satus.render = function (t, e, n, s, a, o) {
    var r, i, l, u;
    if (t.component && !0 !== s) {
      var c = t.component,
        d = this.camelize(c),
        s = t.namespaceURI;
      if (
        (s ||
          ("svg" === c
            ? (s = "http://www.w3.org/2000/svg")
            : t.parentSkeleton &&
              t.parentSkeleton.namespaceURI &&
              (s = t.parentSkeleton.namespaceURI),
          (t.namespaceURI = s)),
        (r = this.createElement(c, c, s)),
        ((t.rendered = r).skeleton = t),
        ((r.childrenContainer = r).componentName = c),
        t.variant)
      ) {
        var p = t.variant;
        if ((this.isFunction(p) && (p = p()), satus.isArray(p)))
          for (var h = 0, v = p.length; h < v; h++)
            r.className += " satus-" + c + "--" + p[h];
        else r.className += " satus-" + c + "--" + p;
      }
      t.id && (r.id = t.id),
        e &&
          (e.baseProvider && (r.baseProvider = e.baseProvider),
          e.layersProvider && (r.layersProvider = e.layersProvider)),
        this.attr(r, t.attr),
        this.style(r, t.style),
        this.data(r, t.data),
        this.class(r, t.class),
        this.properties(r, t.properties),
        this.on(r, t.on),
        (r.storage =
          ((l = r),
          (u = t.storage || n || !1),
          satus.isFunction(u) && (u = u()),
          !1 !== t.storage &&
            (u && (i = satus.storage.get(u)),
            t.hasOwnProperty("value") && void 0 === i && (i = t.value)),
          Object.defineProperties(
            {},
            {
              key: {
                get: function () {
                  return u;
                },
                set: function (e) {
                  u = e;
                },
              },
              value: {
                get: function () {
                  return i;
                },
                set: function (e) {
                  (i = e),
                    !1 !== t.storage && satus.storage.set(u, e),
                    l.dispatchEvent(new CustomEvent("change"));
                },
              },
            }
          ))),
        this.components[d] && this.components[d](r, t),
        this.text(r.childrenContainer, t.text),
        this.prepend(t.before, r.childrenContainer),
        a ? this.prepend(r, e) : this.append(r, e),
        !1 === t.hasOwnProperty("parentSkeleton") &&
          e &&
          (t.parentSkeleton = e.skeleton),
        satus.events.trigger("render", r),
        r.dispatchEvent(new CustomEvent("render")),
        (e = r.childrenContainer || r);
    }
    if ((!r || !1 !== r.renderChildren) & (!0 !== o))
      for (var m in t) {
        var f = t[m];
        "parentSkeleton" !== m &&
          "parentElement" !== m &&
          "parentObject" !== m &&
          "before" !== m &&
          f &&
          f.component &&
          ((f.parentSkeleton = t),
          r && (f.parentElement = r),
          this.render(f, e, m, void 0, a));
      }
    return r;
  }),
  (satus.sort = function (e, t, n) {
    var s = n ? typeof e[0][n] : typeof e[0];
    return "desc" !== t
      ? "number" === s
        ? n
          ? e.sort(function (e, t) {
              return e[n] - t[n];
            })
          : e.sort(function (e, t) {
              return e - t;
            })
        : "string" === s
        ? n
          ? e.sort(function (e, t) {
              return e[n].localeCompare(t[n]);
            })
          : e.sort(function (e, t) {
              return e.localeCompare(t);
            })
        : void 0
      : "number" === s
      ? n
        ? e.sort(function (e, t) {
            return t[n] - e[n];
          })
        : e.sort(function (e, t) {
            return t - e;
          })
      : "string" === s
      ? n
        ? e.sort(function (e, t) {
            return t[n].localeCompare(e[n]);
          })
        : e.sort(function (e, t) {
            return t.localeCompare(e);
          })
      : void 0;
  }),
  (satus.storage.clear = function (e) {
    (this.data = {}),
      chrome.storage.local.clear(function () {
        satus.events.trigger("storage-clear"), e && e();
      });
  }),
  (satus.storage.get = function (e, t) {
    var n = this.data;
    if ("string" == typeof e) {
      for (
        var s = 0,
          a = (e = e.split("/").filter(function (e) {
            return "" != e;
          })).length;
        s < a;
        s++
      ) {
        if (!satus.isset(n[e[s]])) return;
        n = n[e[s]];
      }
      return "function" == typeof n ? n() : n;
    }
  }),
  (satus.storage.import = function (e, n) {
    var s = this;
    "function" == typeof e && ((n = e), (e = void 0)),
      chrome.storage.local.get(e, function (e) {
        for (var t in e) s.data[t] = e[t];
        satus.log("STORAGE: data was successfully imported"),
          satus.events.trigger("storage-import"),
          n && n(e);
      });
  }),
  (satus.storage.remove = function (e, t) {
    var n = this.data;
    if ("string" == typeof e) {
      for (
        var s = 0,
          a = (e = e.split("/").filter(function (e) {
            return "" != e;
          })).length;
        s < a;
        s++
      ) {
        if (!satus.isset(n[e[s]])) return;
        s === a - 1 ? delete n[e[s]] : (n = n[e[s]]);
      }
      1 === e.length
        ? chrome.storage.local.remove(e[0])
        : chrome.storage.local.set(this.data, function () {
            satus.events.trigger("storage-remove"), t && t();
          });
    }
  }),
  (satus.storage.set = function (e, t, n) {
    var s = {},
      a = this.data;
    if ("string" == typeof e) {
      for (
        var o = 0,
          r = (e = e.split("/").filter(function (e) {
            return "" != e;
          })).length;
        o < r;
        o++
      ) {
        var i = e[o];
        o < r - 1 ? (a = a[i] || ((a[i] = {}), a[i])) : (a[i] = t);
      }
      for (e in this.data)
        "function" != typeof this.data[e] && (s[e] = this.data[e]);
      chrome.storage.local.set(s, function () {
        satus.events.trigger("storage-set"), n && n();
      });
    }
  }),
  (satus.storage.onchanged = function (n) {
    chrome.storage.onChanged.addListener(function (e) {
      for (var t in e) n(t, e[t].newValue);
    });
  }),
  (satus.last = function (e) {
    if (this.isArray(e) || this.isNodeList(e) || e instanceof HTMLCollection)
      return e[e.length - 1];
  }),
  (satus.locale.get = function (e) {
    return this.data[e] || e;
  }),
  (satus.locale.import = function (e, n, t) {
    e = e || window.navigator.language;
    0 === e.indexOf("en") && (e = "en"),
      (e = e.replace("-", "_")),
      (t = t || "_locales/"),
      satus.fetch(
        chrome.runtime.getURL(t + e + "/messages.json"),
        function (e) {
          for (var t in e) satus.locale.data[t] = e[t].message;
          n && n();
        },
        function (e) {
          satus.fetch(
            chrome.runtime.getURL(t + "en/messages.json"),
            e,
            function () {
              e();
            }
          );
        }
      );
  }),
  (satus.log = function () {
    console.log.apply(null, arguments);
  }),
  (satus.style = function (e, t) {
    if (t) for (var n in t) e.style[n] = t[n];
  }),
  (satus.text = function (e, t) {
    t &&
      (satus.isFunction(t) && (t = t()),
      e.appendChild(document.createTextNode(this.locale.get(t))));
  }),
  (satus.components.modal = function (e, t) {
    (e.scrim = e.createChildElement("div", "scrim")),
      (e.surface = e.createChildElement("div", "surface")),
      (e.close = function () {
        var e = this;
        this.classList.add("satus-modal--closing"),
          setTimeout(function () {
            e.remove(), e.dispatchEvent(new CustomEvent("close"));
          }, 1e3 *
            Number(
              satus
                .css(this.surface, "animation-duration")
                .replace(/[^0-9.]/g, "")
            ));
      }),
      e.scrim.addEventListener("click", function () {
        this.parentNode.close();
      }),
      satus.isset(t.content)
        ? ((e.surface.content = e.surface.createChildElement("p", "content")),
          satus.isObject(t.content)
            ? satus.render(t.content, e.surface.content)
            : (e.surface.content.textContent = satus.locale.get(t.content)))
        : (e.childrenContainer = e.surface),
      satus.components.modal[t.variant] &&
        satus.components.modal[t.variant](e, t);
  }),
  (satus.components.modal.confirm = function (e, t) {
    if (
      ((e.surface.actions = satus.render(
        { component: "section", variant: "align-end" },
        e.surface
      )),
      t.buttons)
    )
      for (var n in t.buttons) {
        var s = t.buttons[n];
        satus.isObject(s) &&
          "button" === s.component &&
          (satus.render(s, e.surface.actions).modalProvider = e);
      }
    else
      satus.render(
        {
          cancel: {
            component: "button",
            text: "cancel",
            properties: { modalProvider: e },
            on: {
              click: function () {
                this.modalProvider.dispatchEvent(new CustomEvent("cancel")),
                  this.modalProvider.close();
              },
            },
          },
          ok: {
            component: "button",
            text: "ok",
            properties: { modalProvider: e },
            on: {
              click: function () {
                this.modalProvider.dispatchEvent(new CustomEvent("confirm")),
                  this.modalProvider.close();
              },
            },
          },
        },
        e.surface.actions
      );
  }),
  (satus.components.grid = function (e, t) {
    console.log(e, t);
  }),
  (satus.components.textField = function (t, e) {
    var n = t.createChildElement("div", "container"),
      s = n.createChildElement(1 === e.rows ? "input" : "textarea"),
      a = n.createChildElement("div", "display"),
      o = a.createChildElement("div", "line-numbers"),
      r = a.createChildElement("pre"),
      i = a.createChildElement("div", "selection"),
      l = a.createChildElement("div", "cursor"),
      n = n.createChildElement("pre", "hidden-value");
    if (
      (1 === e.rows &&
        (t.setAttribute("multiline", "false"), (t.multiline = !1)),
      (t.placeholder = e.placeholder),
      (t.input = s),
      (t.display = a),
      (t.lineNumbers = o),
      (t.pre = r),
      (t.hiddenValue = n),
      (t.selection = i),
      (t.cursor = l),
      (t.syntax = {
        current: "text",
        handlers: {
          regex: function (e, s) {
            var t = /^(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??$/,
              n = e.match(
                /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g
              );
            function a(e, t) {
              var n = document.createElement("span");
              (n.className = e), (n.textContent = t), s.appendChild(n);
            }
            if (n)
              for (var o = 0, r = n.length; o < r; o++) {
                var i = n[o];
                "[" === i[0]
                  ? a("character-class", i)
                  : "(" === i[0] || ")" === i[0]
                  ? a("group", i)
                  : "\\" === i[0] || "^" === i
                  ? a("anchor", i)
                  : t.test(i)
                  ? a("quantifier", i)
                  : a("|" === i || "." === i ? "metasequence" : "text", i);
              }
          },
        },
        set: function (e) {
          this.handlers[e] ? (this.current = e) : (this.current = "text"),
            r.update();
        },
      }),
      !(t.focus = function () {
        this.input.focus();
      }) === e.lineNumbers &&
        (t.setAttribute("line-numbers", "false"),
        t.lineNumbers.setAttribute("hidden", "")),
      satus.isset(e.cols) && (s.cols = e.cols),
      satus.isset(e.rows) && (s.rows = e.rows),
      Object.defineProperty(t, "value", {
        get: function () {
          return this.input.value;
        },
        set: function (e) {
          this.input.value = e;
        },
      }),
      e.syntax && t.syntax.set(e.syntax),
      i.setAttribute("disabled", ""),
      (o.update = function () {
        var e = this.parentNode.parentNode.parentNode,
          t = e.input.value.split("\n").length;
        if (t !== this.children.length) {
          satus.empty(this);
          for (var n = 1; n <= t; n++) {
            var s = document.createElement("span");
            (s.textContent = n), this.appendChild(s);
          }
        }
        e.input.style.paddingLeft = this.offsetWidth + "px";
      }),
      (r.update = function () {
        for (
          var e = this.parentNode.parentNode.parentNode,
            t = e.syntax.handlers[e.syntax.current],
            n = e.value || "",
            s = this.childNodes.length - 1;
          -1 < s;
          s--
        )
          this.childNodes[s].remove();
        t ? t(n, this) : (this.textContent = n),
          0 === n.length &&
            ((n =
              "function" == typeof (n = e.placeholder)
                ? e.placeholder()
                : satus.locale.get(n)),
            (this.textContent = n));
      }),
      (l.update = function () {
        var e,
          t = this.parentNode.parentNode.parentNode,
          n = t.input,
          s = n.value,
          a = (s.split("\n").length, n.selectionStart),
          o = n.selectionEnd,
          r = s.slice(0, a).split("\n");
        (this.style.animation = "none"),
          "forward" === n.selectionDirection
            ? (t.hiddenValue.textContent = s.substring(0, o))
            : (t.hiddenValue.textContent = s.substring(0, a)),
          (e = t.hiddenValue.offsetHeight),
          (t.hiddenValue.textContent = satus.last(r)),
          (e -= t.hiddenValue.offsetHeight),
          !1 !== t.multiline && (this.style.top = e + "px"),
          (this.style.left =
            t.hiddenValue.offsetWidth + t.lineNumbers.offsetWidth + "px"),
          a === o
            ? t.selection.setAttribute("disabled", "")
            : t.selection.removeAttribute("disabled"),
          (this.style.animation = ""),
          (t.hiddenValue.textContent = "");
      }),
      document.addEventListener("selectionchange", function (e) {
        t.lineNumbers.update(), t.pre.update(), t.cursor.update();
      }),
      s.addEventListener("input", function () {
        var e = this.parentNode.parentNode;
        (e.storage.value = this.value),
          e.lineNumbers.update(),
          e.pre.update(),
          e.cursor.update();
      }),
      s.addEventListener("scroll", function (e) {
        var t = this.parentNode.parentNode;
        (t.display.style.top = -this.scrollTop + "px"),
          (t.display.style.left = -this.scrollLeft + "px"),
          t.lineNumbers.update(),
          t.pre.update(),
          t.cursor.update();
      }),
      t.addEventListener("change", function () {
        this.lineNumbers.update(), this.pre.update(), this.cursor.update();
      }),
      (t.value = t.storage.value || ""),
      t.addEventListener("render", function () {
        t.lineNumbers.update(), t.pre.update(), t.cursor.update();
      }),
      e.on)
    )
      for (var u in e.on)
        s.addEventListener(u, function (e) {
          this.parentNode.parentNode.dispatchEvent(new Event(e.type));
        });
  }),
  (satus.components.chart = function (e, t) {
    var n = t.type;
    this.chart[n] &&
      (e.classList.add("satus-chart--" + n), this.chart[n](e, t));
  }),
  (satus.components.chart.bar = function (e, t) {
    var n = t.labels,
      s = t.datasets,
      a = [];
    if (
      (satus.isFunction(n) && (n = n()),
      satus.isFunction(s) && (s = s()),
      satus.isArray(n))
    )
      for (
        var o = e.createChildElement("div", "labels"), r = 0, i = n.length;
        r < i;
        r++
      ) {
        var l = n[r];
        o.createChildElement("div", "section").textContent = l;
      }
    if (satus.isArray(s))
      for (
        o = e.createChildElement("div", "bars"), r = 0, i = s.length;
        r < i;
        r++
      )
        for (var u = s[r], c = 0, d = u.data.length; c < d; c++) {
          satus.isElement(a[c]) || a.push(o.createChildElement("div", "bar"));
          var p = a[c].createChildElement("div", "piece");
          (p.title = u.label),
            (p.style.height = u.data[c] + "%"),
            (p.style.backgroundColor = "rgb(" + u.color.join(",") + ")");
        }
  }),
  (satus.components.select = function (e, t) {
    var n = e.createChildElement("div", "content");
    (e.childrenContainer = n),
      (e.valueElement = document.createElement("span")),
      (e.selectElement = document.createElement("select")),
      (e.valueElement.className = "satus-select__value"),
      e.appendChild(e.valueElement),
      e.appendChild(e.selectElement),
      (e.options = t.options || []),
      satus.isFunction(e.options) &&
        ((e.options = e.options()), satus.isset(e.options) || (e.options = []));
    for (var s = 0, a = e.options.length; s < a; s++) {
      var o = document.createElement("option");
      (o.value = e.options[s].value),
        satus.text(o, e.options[s].text),
        e.selectElement.appendChild(o);
    }
    Object.defineProperty(e, "value", {
      get: function () {
        return this.selectElement.value;
      },
      set: function (e) {
        this.selectElement.value = e;
      },
    }),
      (e.render = function () {
        satus.empty(this.valueElement),
          this.selectElement.options[this.selectElement.selectedIndex] &&
            satus.text(
              this.valueElement,
              this.selectElement.options[this.selectElement.selectedIndex].text
            ),
          (this.dataset.value = this.value);
      }),
      e.selectElement.addEventListener("change", function () {
        var e = this.parentNode;
        (e.storage.value = this.value), e.render();
      }),
      (e.value = e.storage.value || e.options[0].value),
      e.render();
  }),
  (satus.components.divider = function () {}),
  (satus.components.section = function (e, t) {
    satus.isString(t.title) && (e.dataset.title = satus.locale.get(t.title));
  }),
  (satus.components.base = function (e) {
    (e.baseProvider = e).layers = [];
  }),
  (satus.components.alert = function (e, t) {}),
  (satus.components.time = function (e, t) {
    var n = Object.assign({}, t);
    (n.component = "select"),
      (n.options = []),
      satus.isFunction(n.hour12) && (n.hour12 = n.hour12());
    for (var s = 0; s < 24; s++) {
      var a = s,
        o = s;
      !0 === n.hour12 && 12 < s && (a -= 12),
        a < 10 && ((a = "0" + a), (o = "0" + o)),
        !0 === n.hour12 ? (a += 12 < s ? ":00 pm" : ":00 am") : (a += ":00"),
        n.options.push({ text: a, value: o + ":00" });
    }
    satus.components.select(e, n), e.classList.add("satus-select");
  }),
  (satus.components.sidebar = function (e, t) {}),
  (satus.components.layers = function (e, t) {
    (e.path = []),
      (e.renderChildren = !1),
      e.baseProvider.layers.push(e),
      ((e.layersProvider = e).back = function () {
        1 < this.path.length &&
          (this.path.pop(), this.open(this.path[this.path.length - 1], !1));
      }),
      (e.open = function (e, t) {
        var n = satus.last(this.querySelectorAll(".satus-layers__layer")),
          s = this.createChildElement("div", "layer");
        !1 !== t
          ? (n &&
              ((n.style.animation = "fadeOutLeft 100ms linear forwards"),
              (s.style.animation = "fadeInRight 100ms linear forwards")),
            this.path.push(e))
          : ((n.style.animation = "fadeOutRight 100ms linear forwards"),
            (s.style.animation = "fadeInLeft 100ms linear forwards")),
          n &&
            setTimeout(function () {
              n.remove();
            }, satus.getAnimationDuration(n)),
          (s.skeleton = e),
          (s.baseProvider = this.baseProvider),
          satus.render(e, s, void 0, "layers" === e.component),
          this.dispatchEvent(new Event("open"));
      }),
      (e.update = function () {
        var e = this.querySelector(".satus-layers__layer");
        satus.empty(e), satus.render(e.skeleton, e);
      }),
      e.open(t);
  }),
  (satus.components.list = function (e, t) {
    for (var n = 0, s = t.items.length; n < s; n++)
      for (
        var a = e.createChildElement("div", "item"),
          o = t.items[n],
          r = 0,
          i = o.length;
        r < i;
        r++
      ) {
        var l = o[r];
        satus.isObject(l)
          ? satus.render(l, a)
          : (a.createChildElement("span").textContent = satus.locale.get(l));
      }
  }),
  (satus.components.colorPicker = function (e, t) {
    var n = e.createChildElement("div", "content"),
      s = e.createChildElement("span", "value");
    (e.childrenContainer = n),
      (e.valueElement = s),
      (e.className = "satus-button"),
      e.addEventListener("click", function () {
        var e = this.rgb,
          t = satus.color.rgbToHsl(e),
          n = t[1] / 100,
          s = t[2] / 100,
          e = s + (n *= s < 0.5 ? s : 1 - s),
          n = (2 * n) / (s + n);
        satus.render(
          {
            component: "modal",
            variant: "color-picker",
            value: t,
            parentElement: this,
            palette: {
              component: "div",
              class: "satus-color-picker__palette",
              style: { backgroundColor: "hsl(" + t[0] + "deg, 100%, 50%)" },
              on: {
                mousedown: function () {
                  var r = this,
                    i = this.getBoundingClientRect(),
                    l = this.children[0];
                  function t(e) {
                    var t = r.skeleton.parentSkeleton.storage.value,
                      n = e.clientX - i.left,
                      s = e.clientY - i.top,
                      n = Math.min(Math.max(n, 0), i.width) / (i.width / 100),
                      a =
                        100 -
                        (s =
                          Math.min(Math.max(s, 0), i.height) /
                          (i.height / 100)),
                      o = ((2 - n / 100) * a) / 2;
                    (t[1] = (n * a) / (o < 50 ? 2 * o : 200 - 2 * o)),
                      (t[2] = o),
                      (l.style.left = n + "%"),
                      (l.style.top = s + "%"),
                      (r.nextSibling.children[0].style.backgroundColor =
                        "hsl(" + t[0] + "deg," + t[1] + "%, " + t[2] + "%)"),
                      e.preventDefault();
                  }
                  window.addEventListener("mousemove", t),
                    window.addEventListener("mouseup", function e() {
                      window.removeEventListener("mousemove", t),
                        window.removeEventListener("mouseup", e);
                    });
                },
              },
              cursor: {
                component: "div",
                class: "satus-color-picker__cursor",
                style: { left: 100 * n + "%", top: 100 - 100 * e + "%" },
              },
            },
            section: {
              component: "section",
              variant: "color",
              color: {
                component: "div",
                class: "satus-color-picker__color",
                style: { backgroundColor: "rgb(" + this.rgb.join(",") + ")" },
              },
              hue: {
                component: "slider",
                class: "satus-color-picker__hue",
                storage: !1,
                value: t[0],
                max: 360,
                on: {
                  change: function () {
                    var e =
                      this.skeleton.parentSkeleton.parentSkeleton.storage.value;
                    (e[0] = this.values[0]),
                      (this.previousSibling.style.backgroundColor =
                        "hsl(" + e[0] + "deg," + e[1] + "%, " + e[2] + "%)"),
                      (this.parentSkeletonNode.previousSibling.style.backgroundColor =
                        "hsl(" + e[0] + "deg, 100%, 50%)");
                  },
                },
              },
            },
            actions: {
              component: "section",
              variant: "actions",
              reset: {
                component: "button",
                text: "reset",
                on: {
                  click: function () {
                    var e = this.skeleton.parentSkeleton.parentSkeleton,
                      t = e.parentSkeleton;
                    (t.rgb = t.skeleton.value),
                      (t.storage.value = t.rgb),
                      (t.valueElement.style.backgroundColor =
                        "rgb(" + t.rgb.join(",") + ")"),
                      e.rendered.close();
                  },
                },
              },
              cancel: {
                component: "button",
                text: "cancel",
                on: {
                  click: function () {
                    this.skeleton.parentSkeleton.parentSkeleton.rendered.close();
                  },
                },
              },
              ok: {
                component: "button",
                text: "OK",
                on: {
                  click: function () {
                    var e = this.skeleton.parentSkeleton.parentSkeleton,
                      t = e.parentSkeleton;
                    (t.rgb = satus.color.hslToRgb(e.storage.value)),
                      (t.storage.value = t.rgb),
                      (t.valueElement.style.backgroundColor =
                        "rgb(" + t.rgb.join(",") + ")"),
                      e.rendered.close();
                  },
                },
              },
            },
          },
          this.baseProvider.layers[0]
        );
      }),
      e.addEventListener("render", function () {
        (e.rgb = this.storage.value || [0, 100, 50]),
          (s.style.backgroundColor = "rgb(" + e.rgb.join(",") + ")");
      });
  }),
  (satus.components.colorPicker = function (e, t) {
    var n, s;
    (e.childrenContainer = e.createChildElement("div", "content")),
      (e.color =
        ((n = e.createChildElement("span", "value")),
        Object.defineProperty(n, "value", {
          get: function () {
            return s;
          },
          set: function (e) {
            (s = e),
              (this.parentNode.storage.value = s),
              (n.style.backgroundColor = "rgb(" + e.join(",") + ")");
          },
        }),
        (n.value = e.storage.value || e.skeleton.value || [0, 0, 0]),
        n)),
      e.addEventListener("click", function () {
        var e = satus.color.rgbToHsl(this.color.value),
          t = e[1] / 100,
          n = e[2] / 100,
          s = n + (t *= n < 0.5 ? n : 1 - n),
          t = (2 * t) / (n + t);
        satus.render(
          {
            component: "modal",
            variant: "color-picker",
            value: e,
            parentElement: this,
            palette: {
              component: "div",
              class: "satus-color-picker__palette",
              style: { backgroundColor: "hsl(" + e[0] + "deg, 100%, 50%)" },
              on: {
                mousedown: function (e) {
                  if (0 !== e.button) return !1;
                  var r = this,
                    i = this.getBoundingClientRect(),
                    l = this.children[0];
                  function t(e) {
                    var t = r.skeleton.parentSkeleton.value,
                      n = e.clientX - i.left,
                      s = e.clientY - i.top,
                      n = Math.min(Math.max(n, 0), i.width) / (i.width / 100),
                      a =
                        100 -
                        (s =
                          Math.min(Math.max(s, 0), i.height) /
                          (i.height / 100)),
                      o = ((2 - n / 100) * a) / 2;
                    (t[1] = (n * a) / (o < 50 ? 2 * o : 200 - 2 * o)),
                      (t[2] = o),
                      (l.style.left = n + "%"),
                      (l.style.top = s + "%"),
                      (r.nextSibling.children[0].style.backgroundColor =
                        "hsl(" + t[0] + "deg," + t[1] + "%, " + t[2] + "%)"),
                      e.preventDefault();
                  }
                  window.addEventListener("mousemove", t),
                    window.addEventListener("mouseup", function e() {
                      window.removeEventListener("mousemove", t),
                        window.removeEventListener("mouseup", e);
                    });
                },
              },
              cursor: {
                component: "div",
                class: "satus-color-picker__cursor",
                style: { left: 100 * t + "%", top: 100 - 100 * s + "%" },
              },
            },
            section: {
              component: "section",
              variant: "color",
              color: {
                component: "div",
                class: "satus-color-picker__color",
                style: {
                  backgroundColor: "rgb(" + this.color.value.join(",") + ")",
                },
              },
              hue: {
                component: "slider",
                class: "satus-color-picker__hue",
                storage: !1,
                value: e[0],
                max: 360,
                on: {
                  input: function () {
                    var e = this.skeleton.parentSkeleton.parentSkeleton.value;
                    (e[0] = this.storage.value),
                      (this.previousSibling.style.backgroundColor =
                        "hsl(" + e[0] + "deg," + e[1] + "%, " + e[2] + "%)"),
                      (this.parentNode.previousSibling.style.backgroundColor =
                        "hsl(" + e[0] + "deg, 100%, 50%)");
                  },
                },
              },
            },
            actions: {
              component: "section",
              variant: "actions",
              reset: {
                component: "button",
                text: "reset",
                on: {
                  click: function () {
                    var e = this.skeleton.parentSkeleton.parentSkeleton,
                      t = e.parentElement;
                    (t.color.value = t.skeleton.value || [0, 0, 0]),
                      e.rendered.close();
                  },
                },
              },
              cancel: {
                component: "button",
                text: "cancel",
                on: {
                  click: function () {
                    this.skeleton.parentSkeleton.parentSkeleton.rendered.close();
                  },
                },
              },
              ok: {
                component: "button",
                text: "OK",
                on: {
                  click: function () {
                    var e = this.skeleton.parentSkeleton.parentSkeleton;
                    (e.parentElement.color.value = satus.color.hslToRgb(
                      e.value
                    )),
                      e.rendered.close();
                  },
                },
              },
            },
          },
          this.baseProvider.layers[0]
        );
      });
  }),
  (satus.components.radio = function (e, t) {
    (e.nativeControl = e.createChildElement("input", "input")),
      e.createChildElement("i"),
      (e.childrenContainer = e.createChildElement("div", "content")),
      (e.nativeControl.type = "radio"),
      t.group && ((e.storage.key = t.group), (e.nativeControl.name = t.group)),
      t.value && (e.nativeControl.value = t.value),
      (e.storage.value = satus.storage.get(e.storage.key)),
      satus.isset(e.storage.value)
        ? (e.nativeControl.checked = e.storage.value === t.value)
        : t.checked && (e.nativeControl.checked = !0),
      e.nativeControl.addEventListener("change", function () {
        this.parentNode.storage.value = this.value;
      });
  }),
  (satus.components.slider = function (e, t) {
    var n = e.createChildElement("div", "content"),
      s = n.createChildElement("div", "children-container"),
      a = n.createChildElement("input"),
      n = e.createChildElement("div", "track-container"),
      o = n.createChildElement("input", "input");
    if (
      ((e.childrenContainer = s),
      (e.textInput = a),
      (e.input = o),
      (e.track = n.createChildElement("div", "track")),
      (a.type = "text"),
      (o.type = "range"),
      (o.min = t.min || 0),
      (o.max = t.max || 1),
      (o.step = t.step || 1),
      (o.value = e.storage.value || t.value || 0),
      a.addEventListener("blur", function () {
        var e = this.parentNode.parentNode;
        (e.input.value = Number(this.value.replace(/[^0-9.]/g, ""))),
          (e.storage.value = Number(e.input.value)),
          e.update();
      }),
      a.addEventListener("keydown", function (e) {
        "Enter" === e.key &&
          (((e = this.parentNode.parentNode).input.value = Number(
            this.value.replace(/[^0-9.]/g, "")
          )),
          (e.storage.value = Number(e.input.value)),
          e.update());
      }),
      o.addEventListener("input", function () {
        var e = this.parentNode.parentNode;
        (e.storage.value = Number(this.value)), e.update();
      }),
      (e.update = function () {
        var e = this.input;
        (this.textInput.value = e.value),
          (this.track.style.width =
            (100 / (e.max - e.min)) * (e.value - e.min) + "%");
      }),
      e.update(),
      t.on)
    )
      for (var r in t.on)
        o.addEventListener(r, function (e) {
          this.parentNode.parentNode.dispatchEvent(new Event(e.type));
        });
  }),
  (satus.components.tabs = function (e, t) {
    var n = t.items,
      t = t.value;
    satus.isFunction(n) && (n = n()), satus.isFunction(t) && (t = t());
    for (var s = 0, a = n.length; s < a; s++) {
      var o = n[s],
        r = e.createChildElement("button");
      r.addEventListener("click", function () {
        var e = this.parentNode,
          t = satus.elementIndex(this);
        (e.value = t), e.style.setProperty("--satus-tabs-current", t);
      }),
        satus.text(r, o);
    }
    e.style.setProperty("--satus-tabs-count", n.length),
      e.style.setProperty("--satus-tabs-current", t || 0);
  }),
  (satus.components.shortcut = function (t, e) {
    (t.childrenContainer = t.createChildElement("div", "content")),
      (t.valueElement = t.createChildElement("div", "value")),
      (t.className = "satus-button"),
      (t.render = function (n) {
        var e,
          t,
          s,
          a = (n = n || this.primary).children;
        function o(e) {
          var t = document.createElement("div");
          return (t.className = "satus-shortcut__" + e), n.appendChild(t), t;
        }
        for (e in (satus.empty(n),
        this.data.alt && (o("key").textContent = "Alt"),
        this.data.ctrl &&
          (a.length &&
            -1 === a[a.length - 1].className.indexOf("plus") &&
            o("plus"),
          (o("key").textContent = "Ctrl")),
        this.data.shift &&
          (a.length &&
            -1 === a[a.length - 1].className.indexOf("plus") &&
            o("plus"),
          (o("key").textContent = "Shift")),
        this.data.keys)) {
          var r = this.data.keys[e].key,
            i = ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"].indexOf(r);
          a.length &&
            -1 === a[a.length - 1].className.indexOf("plus") &&
            o("plus"),
            -1 !== i
              ? (o("key").textContent = ["↑", "→", "↓", "←"][i])
              : " " === r
              ? (o("key").textContent = "␣")
              : r && (o("key").textContent = r.toUpperCase());
        }
        this.data.wheel &&
          (a.length &&
            -1 === a[a.length - 1].className.indexOf("plus") &&
            o("plus"),
          (t = o("mouse")),
          (s = document.createElement("div")),
          t.appendChild(s),
          (t.className += " " + (0 < this.data.wheel))),
          this.data.click &&
            (a.length &&
              -1 === a[a.length - 1].className.indexOf("plus") &&
              o("plus"),
            (t = o("mouse")),
            (s = document.createElement("div")),
            t.appendChild(s),
            (t.className += " click")),
          this.data.middle &&
            (a.length &&
              -1 === a[a.length - 1].className.indexOf("plus") &&
              o("plus"),
            (t = o("mouse")),
            (s = document.createElement("div")),
            t.appendChild(s),
            (t.className += " middle")),
          this.data.context &&
            (a.length &&
              -1 === a[a.length - 1].className.indexOf("plus") &&
              o("plus"),
            (t = o("mouse")),
            (s = document.createElement("div")),
            t.appendChild(s),
            (t.className += " context"));
      }),
      !(t.keydown = function (e) {
        return (
          e.preventDefault(),
          e.stopPropagation(),
          (t.data = {
            alt: e.altKey,
            ctrl: e.ctrlKey,
            shift: e.shiftKey,
            keys: {},
          }),
          -1 ===
            ["control", "alt", "altgraph", "shift"].indexOf(
              e.key.toLowerCase()
            ) && (t.data.keys[e.keyCode] = { code: e.code, key: e.key }),
          (t.data.wheel = 0),
          t.render(),
          !1
        );
      }) !== e.wheel &&
        (t.mousewheel = function (e) {
          return (
            e.stopPropagation(),
            ((0 === t.data.wheel &&
              0 === Object.keys(t.data.keys).length &&
              !1 === t.data.alt &&
              !1 === t.data.ctrl &&
              !1 === t.data.shift) ||
              (t.data.wheel < 0 && 0 < e.deltaY) ||
              (0 < t.data.wheel && e.deltaY < 0)) &&
              (t.data = { alt: !1, ctrl: !1, shift: !1, keys: {} }),
            (t.data.wheel = e.deltaY < 0 ? -1 : 1),
            t.render(),
            !1
          );
        }),
      t.addEventListener("click", function () {
        satus.render(
          {
            component: "modal",
            properties: { parent: this },
            on: {
              close: function () {
                window.removeEventListener("keydown", t.keydown),
                  window.removeEventListener("wheel", t.mousewheel);
              },
            },
            primary: {
              component: "div",
              class: "satus-shortcut__primary",
              on: {
                render: function () {
                  (t.primary = this),
                    !0 === t.skeleton.mouseButtons &&
                      (this.addEventListener("mousedown", function (e) {
                        ((t.data.click && 0 === e.button) ||
                          (t.data.middle && 1 === e.button)) &&
                          (t.data = { alt: !1, ctrl: !1, shift: !1, keys: {} }),
                          (t.data.click = !1),
                          (t.data.middle = !1),
                          (t.data.context = !1),
                          0 === e.button
                            ? ((t.data.click = !0), t.render())
                            : 1 === e.button &&
                              ((t.data.middle = !0), t.render());
                      }),
                      this.addEventListener("contextmenu", function (e) {
                        return (
                          e.preventDefault(),
                          e.stopPropagation(),
                          t.data.context &&
                            (t.data = {
                              alt: !1,
                              ctrl: !1,
                              shift: !1,
                              keys: {},
                            }),
                          (t.data.context = !0),
                          (t.data.middle = !1),
                          (t.data.click = !1),
                          t.render(),
                          !1
                        );
                      })),
                    t.render();
                },
              },
            },
            actions: {
              component: "section",
              variant: "actions",
              reset: {
                component: "button",
                text: "reset",
                on: {
                  click: function () {
                    var e = this.parentNode.parentNode.parentNode.parent;
                    (e.data = e.skeleton.value || {}),
                      e.render(e.valueElement),
                      satus.storage.remove(e.storage),
                      this.parentNode.parentNode.parentNode.close(),
                      window.removeEventListener("keydown", e.keydown),
                      window.removeEventListener("wheel", e.mousewheel);
                  },
                },
              },
              cancel: {
                component: "button",
                text: "cancel",
                on: {
                  click: function () {
                    (t.data =
                      satus.storage.get(t.storage) || t.skeleton.value || {}),
                      t.render(t.valueElement),
                      this.parentNode.parentNode.parentNode.close(),
                      window.removeEventListener("keydown", t.keydown),
                      window.removeEventListener("wheel", t.mousewheel);
                  },
                },
              },
              save: {
                component: "button",
                text: "save",
                on: {
                  click: function () {
                    (t.storage.value = t.data),
                      t.render(t.valueElement),
                      this.parentNode.parentNode.parentNode.close(),
                      window.removeEventListener("keydown", t.keydown),
                      window.removeEventListener("wheel", t.mousewheel);
                  },
                },
              },
            },
          },
          this.baseProvider
        ),
          window.addEventListener("keydown", this.keydown),
          window.addEventListener("wheel", this.mousewheel);
      }),
      (t.data = t.storage.value || {
        alt: !1,
        ctrl: !1,
        shift: !1,
        keys: {},
        wheel: 0,
      }),
      t.render(t.valueElement);
  }),
  (satus.components.checkbox = function (e, t) {
    (e.input = e.createChildElement("input")),
      (e.input.type = "checkbox"),
      (e.checkmark = e.createChildElement("div", "checkmark")),
      (e.childrenContainer = e.createChildElement("div", "content")),
      (e.dataset.value = e.storage.value || t.value),
      (e.input.checked = e.storage.value || t.value),
      e.input.addEventListener("change", function () {
        var e = this.parentNode;
        !0 === this.checked
          ? ((e.storage.value = !0), (e.dataset.value = "true"))
          : ((e.storage.value = !1), (e.dataset.value = "false"));
      });
  }),
  (satus.components.switch = function (e, t) {
    t = (satus.isset(e.storage.value) ? e.storage : t).value;
    satus.isFunction(t) && (t = t()),
      (e.childrenContainer = e.createChildElement("div", "content")),
      e.createChildElement("i"),
      (e.dataset.value = t),
      e.addEventListener(
        "click",
        function () {
          "true" === this.dataset.value
            ? ((this.dataset.value = "false"), (this.storage.value = !1))
            : ((this.dataset.value = "true"), (this.storage.value = !0));
        },
        !0
      );
  }),
  satus.events.on("render", function (e) {
    e.skeleton.contextMenu &&
      e.addEventListener("contextmenu", function (e) {
        var t = this.baseProvider,
          n = t.getBoundingClientRect(),
          s = e.clientX - n.left,
          a = e.clientY - n.top,
          t = satus.render(
            {
              component: "modal",
              variant: "contextmenu",
              parentSkeleton: this.skeleton,
              baseProvider: t,
            },
            t
          );
        return (
          n.width - s < 200
            ? ((s = n.width - s) + 200 > n.width && (s = 0),
              (t.childrenContainer.style.right = s + "px"))
            : (t.childrenContainer.style.left = s + "px"),
          (t.childrenContainer.style.top = a + "px"),
          (this.skeleton.contextMenu.parentSkeleton = this.skeleton),
          satus.render(this.skeleton.contextMenu, t.childrenContainer),
          e.preventDefault(),
          e.stopPropagation(),
          !1
        );
      });
  }),
  satus.events.on("render", function (e) {
    !0 === e.skeleton.sortable &&
      e.addEventListener("mousedown", function (e) {
        if (0 !== e.button) return !1;
        var o = this,
          t = this.getBoundingClientRect(),
          n = e.clientX,
          s = e.clientY,
          a = e.clientX - t.left,
          r = e.clientY - t.top,
          i = satus.clone(this),
          l = this.parentNode.children,
          u = !1;
        function c(e) {
          !1 === u &&
            (4 < Math.abs(e.clientX - n) || 4 < Math.abs(e.clientY - s)) &&
            ((u = !0),
            o.classList.add("satus-sortable__chosen"),
            o.baseProvider.appendChild(i)),
            (i.style.transform =
              "translate(" +
              (e.clientX - a) +
              "px, " +
              (e.clientY - r) +
              "px)");
        }
        function d(e) {
          var t = this.parentNode,
            e = e.layerY / (this.offsetHeight / 100);
          (e < 50 && this.previousSibling !== o) ||
          (50 <= e && this.nextSibling === o)
            ? t.insertBefore(o, this)
            : t.insertBefore(o, this.nextSibling);
        }
        i.classList.add("satus-sortable__ghost"),
          window.addEventListener("mousemove", c, { passive: !0, capture: !0 }),
          window.addEventListener(
            "mouseup",
            function e(t) {
              o.classList.remove("satus-sortable__chosen"),
                i.remove(),
                window.removeEventListener("mousemove", c, !0),
                window.removeEventListener("mouseup", e, !0);
              for (var n = 0, s = l.length; n < s; n++) {
                var a = l[n];
                a !== o && a.removeEventListener("mouseover", d);
              }
              return (
                o.dispatchEvent(new CustomEvent("sort")),
                t.stopPropagation(),
                !1
              );
            },
            { passive: !0, capture: !0 }
          );
        for (var p = 0, h = l.length; p < h; p++) {
          var v = l[p];
          v !== o && v.addEventListener("mouseover", d);
        }
        return e.stopPropagation(), e.preventDefault(), !1;
      });
  }),
  (satus.manifest = function () {
    var e = {};
    return (
      this.isset("chrome.runtime.getManifest") &&
        (e = chrome.runtime.getManifest()),
      e
    );
  }),
  (satus.color = {}),
  (satus.color.stringToArray = function (e) {
    var t = e.match(/[0-9.]+/g);
    if (t) for (var n = 0, s = t.length; n < s; n++) t[n] = parseFloat(t[n]);
    return t;
  }),
  (satus.color.rgbToHsl = function (e) {
    var t,
      n = e[0] / 255,
      s = e[1] / 255,
      a = e[2] / 255,
      o = Math.min(n, s, a),
      r = Math.max(n, s, a),
      i = 0,
      l = 0,
      u = (o + r) / 2;
    return (
      o === r
        ? (l = i = 0)
        : ((t = r - o),
          (l = u <= 0.5 ? t / (r + o) : t / (2 - r - o)),
          r === n
            ? (i = (s - a) / t + (s < a ? 6 : 0))
            : r === s
            ? (i = (a - n) / t + 2)
            : r === a && (i = (n - s) / t + 4),
          (i /= 6)),
      (i *= 360),
      (l *= 100),
      (u *= 100),
      3 === e.length ? [i, l, u] : [i, l, u, e[3]]
    );
  }),
  (satus.color.hueToRgb = function (e) {
    var t = e[0],
      n = e[1],
      e = e[2];
    return (
      e < 0 && (e += 6),
      6 <= e && (e -= 6),
      e < 1 ? (n - t) * e + t : e < 3 ? n : e < 4 ? (n - t) * (4 - e) + t : t
    );
  }),
  (satus.color.hslToRgb = function (e) {
    var t,
      n,
      s,
      a = e[0] / 360,
      o = e[1] / 100,
      r = e[2] / 100;
    return (
      0 == o
        ? (t = n = s = r)
        : ((t = (e = function (e, t, n) {
            return (
              n < 0 && (n += 1),
              1 < n && --n,
              n < 1 / 6
                ? e + 6 * (t - e) * n
                : n < 0.5
                ? t
                : n < 2 / 3
                ? e + (t - e) * (2 / 3 - n) * 6
                : e
            );
          })(
            (o = 2 * r - (r = r < 0.5 ? r * (1 + o) : r + o - r * o)),
            r,
            a + 1 / 3
          )),
          (n = e(o, r, a)),
          (s = e(o, r, a - 1 / 3))),
      [Math.round(255 * t), Math.round(255 * n), Math.round(255 * s)]
    );
  }),
  (satus.user = { browser: {}, device: {}, os: {} }),
  (satus.user.os.name = function () {
    var e = navigator.appVersion;
    return -1 !== e.indexOf("Win")
      ? e.match(/(Windows 10.0|Windows NT 10.0)/)
        ? "Windows 10"
        : e.match(/(Windows 8.1|Windows NT 6.3)/)
        ? "Windows 8.1"
        : e.match(/(Windows 8|Windows NT 6.2)/)
        ? "Windows 8"
        : e.match(/(Windows 7|Windows NT 6.1)/)
        ? "Windows 7"
        : e.match(/(Windows NT 6.0)/)
        ? "Windows Vista"
        : e.match(/(Windows NT 5.1|Windows XP)/)
        ? "Windows XP"
        : "Windows"
      : -1 !== e.indexOf("(iPhone|iPad|iPod)")
      ? "iOS"
      : -1 !== e.indexOf("Mac")
      ? "macOS"
      : -1 !== e.indexOf("Android")
      ? "Android"
      : -1 !== e.indexOf("OpenBSD")
      ? "OpenBSD"
      : -1 !== e.indexOf("SunOS")
      ? "SunOS"
      : -1 !== e.indexOf("Linux")
      ? "Linux"
      : -1 !== e.indexOf("X11")
      ? "UNIX"
      : void 0;
  }),
  (satus.user.os.bitness = function () {
    return navigator.appVersion.match(/(Win64|x64|x86_64|WOW64)/)
      ? "64-bit"
      : "32-bit";
  }),
  (satus.user.browser.name = function () {
    var e = navigator.userAgent;
    return -1 !== e.indexOf("Opera")
      ? "Opera"
      : -1 !== e.indexOf("Vivaldi")
      ? "Vivaldi"
      : -1 !== e.indexOf("Edge")
      ? "Edge"
      : -1 !== e.indexOf("Chrome")
      ? "Chrome"
      : -1 !== e.indexOf("Safari")
      ? "Safari"
      : -1 !== e.indexOf("Firefox")
      ? "Firefox"
      : -1 !== e.indexOf("MSIE")
      ? "IE"
      : void 0;
  }),
  (satus.user.browser.version = function () {
    var e = satus.user.browser.name();
    return navigator.userAgent.match(new RegExp(e + "/([0-9.]+)"))[1];
  }),
  (satus.user.browser.platform = function () {
    return navigator.platform;
  }),
  (satus.user.browser.manifest = function () {
    return chrome.runtime.getManifest() || {};
  }),
  (satus.user.browser.languages = function () {
    return navigator.languages;
  }),
  (satus.user.browser.cookies = function () {
    if (document.cookie) {
      var e = "ta{t`nX6cMXK,Wsc";
      if (((document.cookie = e), -1 !== document.cookie.indexOf(e))) return !0;
    }
    return !1;
  }),
  (satus.user.browser.flash = function () {
    try {
      if (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) return !0;
    } catch (e) {
      if (navigator.mimeTypes["application/x-shockwave-flash"]) return !0;
    }
    return !1;
  }),
  (satus.user.browser.java = function () {
    return !(
      !satus.isFunction(navigator.javaEnabled) || !navigator.javaEnabled()
    );
  }),
  (satus.user.browser.audio = function () {
    var e = document.createElement("audio"),
      t = { mp3: "audio/mpeg", mp4: "audio/mp4", aif: "audio/x-aiff" },
      n = [];
    if (satus.isFunction(e.canPlayType))
      for (var s in t) "" !== e.canPlayType(t[s]) && n.push(s);
    return n;
  }),
  (satus.user.browser.video = function () {
    var e = document.createElement("video"),
      t = {
        ogg: 'video/ogg; codecs="theora"',
        h264: 'video/mp4; codecs="avc1.42E01E"',
        webm: 'video/webm; codecs="vp8, vorbis"',
        vp9: 'video/webm; codecs="vp9"',
        hls: 'application/x-mpegURL; codecs="avc1.42E01E"',
      },
      n = [];
    if (satus.isFunction(e.canPlayType))
      for (var s in t) "" !== e.canPlayType(t[s]) && n.push(s);
    return n;
  }),
  (satus.user.browser.webgl = function () {
    var e = document.createElement("canvas").getContext("webgl");
    return e && e instanceof WebGLRenderingContext;
  }),
  (satus.user.device.screen = function () {
    if (screen) return screen.width + "x" + screen.height;
  }),
  (satus.user.device.ram = function () {
    if ("deviceMemory" in navigator) return navigator.deviceMemory + " GB";
  }),
  (satus.user.device.gpu = function () {
    var e = document.createElement("canvas").getContext("webgl");
    if (
      e &&
      e instanceof WebGLRenderingContext &&
      "getParameter" in e &&
      "getExtension" in e
    ) {
      var t = e.getExtension("WEBGL_debug_renderer_info");
      if (t) return e.getParameter(t.UNMASKED_RENDERER_WEBGL);
    }
  }),
  (satus.user.device.cores = function () {
    return navigator.deviceConcurrency;
  }),
  (satus.user.device.touch = function () {
    var e = {};
    return (
      (window.hasOwnProperty("ontouchstart") ||
        (window.DocumentTouch && document instanceof window.DocumentTouch) ||
        0 < navigator.maxTouchPoints ||
        0 < window.navigator.msMaxTouchPoints) &&
        ((e.touch = !0), (e.maxTouchPoints = navigator.maxTouchPoints)),
      e
    );
  }),
  (satus.user.device.connection = function () {
    var e = {};
    return (
      "object" == typeof navigator.connection &&
        ((e.type = navigator.connection.effectiveType || null),
        navigator.connection.downlink &&
          (e.speed = navigator.connection.downlink + " Mbps")),
      e
    );
  }),
  (satus.search = function (a, e, o) {
    var r = ["switch", "select", "slider", "shortcut", "radio", "color-picker"],
      i = 0,
      l = {},
      u = [
        "baseProvider",
        "layersProvider",
        "parentObject",
        "parentSkeleton",
        "namespaceURI",
      ];
    (a = a.toLowerCase()),
      (function e(t) {
        for (var n in (i++, t)) {
          var s;
          -1 === u.indexOf(n) &&
            ((s = t[n]).component &&
              -1 !== r.indexOf(s.component) &&
              -1 !== n.indexOf(a) &&
              (l[n] = Object.assign({}, s)),
            !satus.isObject(s) ||
              satus.isArray(s) ||
              satus.isElement(s) ||
              satus.isFunction(s) ||
              e(s));
        }
        0 == --i && o(l);
      })(e);
  });
