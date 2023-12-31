(function (o, q) {
  typeof exports == "object" && typeof module < "u"
    ? (module.exports = q(require("vue")))
    : typeof define == "function" && define.amd
    ? define(["vue"], q)
    : ((o = typeof globalThis < "u" ? globalThis : o || self),
      (o["schema-form"] = q(o.Vue)));
})(this, function (o) {
  "use strict";
  const q = "",
    E = (e, n) => {
      const t = e.__vccOpts || e;
      for (const [r, i] of n) t[r] = i;
      return t;
    },
    Ge = { name: "main-title", props: { text: String } },
    Je = { key: 0, class: "title" };
  function We(e, n, t, r, i, s) {
    return t.text
      ? (o.openBlock(),
        o.createElementBlock("h2", Je, o.toDisplayString(t.text), 1))
      : o.createCommentVNode("", !0);
  }
  const fe = E(Ge, [
    ["render", We],
    ["__scopeId", "data-v-93cd0054"],
  ]);
  function Qe(e, n, t) {
    const r = n.type === "number",
      i = n.type === "integer";
    return (
      (r || i) &&
        (t
          ? ((t = r ? Number(t) : parseInt(t)), (e.value = String(t)))
          : (t = 0)),
      t
    );
  }
  function Ye(e) {
    return e.type === "integer" || e.type === "number"
      ? "number"
      : e.format === "email"
      ? "email"
      : e.type
      ? e.type
      : "string";
  }
  const cr = "",
    Xe = {
      name: "c-text",
      props: {
        property: Object,
        value: [String, Number],
        name: String,
        required: Boolean,
        isError: Boolean,
      },
      emits: ["mountedRef", "onChange", "onBlur"],
      mounted() {
        this.$emit("mountedRef", this.$refs.input);
      },
      methods: {
        onBlur(e) {
          this.$emit("onBlur", e.target.value);
        },
        onChange(e) {
          let n = e.target.value;
          (n = Qe(this.$refs.input, this.property, n)),
            this.$emit("onChange", n);
        },
      },
      computed: {
        inputType() {
          return Ye(this.property);
        },
      },
    },
    Ke = { class: "field" },
    Ze = ["type", "value", "name", "required", "minlength", "maxlength"];
  function et(e, n, t, r, i, s) {
    return (
      o.openBlock(),
      o.createElementBlock("label", Ke, [
        o.createElementVNode(
          "input",
          {
            ref: "input",
            type: s.inputType,
            value: t.value,
            name: t.name,
            required: t.required,
            minlength: t.property.minlength,
            maxlength: t.property.maxlength,
            class: o.normalizeClass([
              "field__input valid-field",
              { ["valid-field--error"]: t.isError },
            ]),
            onBlur: n[0] || (n[0] = (...c) => s.onBlur && s.onBlur(...c)),
            onInput: n[1] || (n[1] = (...c) => s.onChange && s.onChange(...c)),
          },
          null,
          42,
          Ze
        ),
      ])
    );
  }
  const tt = E(Xe, [
      ["render", et],
      ["__scopeId", "data-v-e99ad427"],
    ]),
    ar = "",
    nt = {
      name: "c-select",
      props: {
        value: String,
        optionsList: Array,
        name: String,
        isError: Boolean,
      },
      emits: ["mountedRef", "onChange", "onBlur"],
      mounted() {
        this.$emit("mountedRef", this.$refs.select);
      },
      methods: {
        onBlur(e) {
          this.$emit("onBlur", e.target.value);
        },
        onChange(e) {
          this.$emit("onChange", e.target.value);
        },
      },
    },
    rt = (e) => (
      o.pushScopeId("data-v-c61595bd"), (e = e()), o.popScopeId(), e
    ),
    ot = ["name"],
    st = rt(() =>
      o.createElementVNode(
        "option",
        { value: "", selected: "" },
        "(не выбрано)",
        -1
      )
    ),
    it = ["value"];
  function ct(e, n, t, r, i, s) {
    return (
      o.openBlock(),
      o.createElementBlock(
        "select",
        {
          ref: "select",
          name: t.name,
          class: o.normalizeClass([
            "select valid-field",
            { ["valid-field--error"]: t.isError },
          ]),
          onChange: n[0] || (n[0] = (...c) => s.onChange && s.onChange(...c)),
          onBlur: n[1] || (n[1] = (...c) => s.onBlur && s.onBlur(...c)),
        },
        [
          st,
          (o.openBlock(!0),
          o.createElementBlock(
            o.Fragment,
            null,
            o.renderList(
              t.optionsList,
              (c) => (
                o.openBlock(),
                o.createElementBlock(
                  "option",
                  { key: c.code, value: c.code },
                  o.toDisplayString(c.value),
                  9,
                  it
                )
              )
            ),
            128
          )),
        ],
        42,
        ot
      )
    );
  }
  const at = E(nt, [
    ["render", ct],
    ["__scopeId", "data-v-c61595bd"],
  ]);
  function de(e) {
    return e.type === "object";
  }
  function K(e) {
    return e.type === "array" && !e.enum && !me(e);
  }
  function lt(e) {
    return e.uip_enum && e.type !== "checkbox";
  }
  function ut(e) {
    return e.uip_enum && e.type === "checkbox";
  }
  function ft(e) {
    return e.format === "date";
  }
  function me(e) {
    return e.uip_type === "file";
  }
  function dt(e) {
    return !e.every((n) => n === void 0 || n === "");
  }
  const lr = "",
    mt = {
      name: "file-simple",
      props: {
        name: String,
        multiple: Boolean,
        required: Boolean,
        isError: Boolean,
      },
      emits: ["mountedRef"],
      mounted() {
        this.$emit("mountedRef", this.$refs.input);
      },
    },
    ht = ["name", "multiple", "required"];
  function _t(e, n, t, r, i, s) {
    return (
      o.openBlock(),
      o.createElementBlock(
        "label",
        {
          class: o.normalizeClass([
            "file-simple valid-field",
            { ["valid-field--error"]: t.isError },
          ]),
        },
        [
          o.createElementVNode(
            "input",
            {
              ref: "input",
              type: "file",
              name: t.name,
              multiple: t.multiple,
              required: t.required,
              class: "file-simple__input",
            },
            null,
            8,
            ht
          ),
        ],
        2
      )
    );
  }
  const pt = E(mt, [
      ["render", _t],
      ["__scopeId", "data-v-1bf849ac"],
    ]),
    ur = "",
    gt = {
      name: "files-list",
      props: { list: Array, required: Boolean },
      emits: ["removeItem"],
      methods: {
        removeItem(e) {
          this.$emit("removeItem", e);
        },
      },
    },
    yt = { class: "list" },
    bt = { class: "list__name" },
    Ct = ["onClick"];
  function Et(e, n, t, r, i, s) {
    return (
      o.openBlock(),
      o.createElementBlock("div", yt, [
        (o.openBlock(!0),
        o.createElementBlock(
          o.Fragment,
          null,
          o.renderList(
            t.list,
            (c, a) => (
              o.openBlock(),
              o.createElementBlock(
                "div",
                { key: a, class: "list__name-wrapper" },
                [
                  o.createElementVNode("div", bt, o.toDisplayString(c.name), 1),
                  o.createElementVNode(
                    "button",
                    {
                      type: "button",
                      class: "list__btn-remove",
                      onClick: (u) => s.removeItem(a),
                    },
                    " x ",
                    8,
                    Ct
                  ),
                ]
              )
            )
          ),
          128
        )),
      ])
    );
  }
  const kt = E(gt, [
    ["render", Et],
    ["__scopeId", "data-v-2309e00c"],
  ]);
  async function St(e) {
    const n = Array.from(e),
      t = [];
    for (const r of n) {
      let i;
      r &&
        (i = {
          name: r.name,
          size: r.size,
          mime: r.type,
          content: await Ot(r),
          hash: "",
          type: "",
        }),
        t.push(i);
    }
    return t;
  }
  function Ot(e) {
    return new Promise((n) => {
      const t = new FileReader();
      (t.onloadend = () => n(t.result)), t.readAsDataURL(e);
    });
  }
  const xt = {
    name: "c-file",
    components: { FilesList: kt, FileSimple: pt },
    props: {
      property: Object,
      value: [String, Array, File],
      name: String,
      required: Boolean,
      isError: Boolean,
    },
    emits: ["mountedRef", "onChange"],
    data() {
      return { currentValue: [], inputRef: void 0 };
    },
    created() {
      this.setCurrentValue();
    },
    methods: {
      onMountedInputRef(e) {
        (this.inputRef = e), this.$emit("mountedRef", this.inputRef);
      },
      setCurrentValue() {
        this.multiple
          ? dt(this.value) && (this.currentValue = this.value)
          : this.value && (this.currentValue = [this.value]);
      },
      removeItem(e) {
        this.currentValue.splice(e, 1),
          (this.currentValue = this.multiple ? this.currentValue : void 0),
          this.$emit("onChange", this.currentValue);
      },
      onInputChange(e) {
        St(e.target.files).then((n) => {
          this.addFiles(n);
        });
      },
      addFiles(e) {
        let n;
        this.multiple
          ? (this.currentValue.push(...e), (n = this.currentValue))
          : ((n = e[0]), (this.currentValue = [n])),
          this.$emit("onChange", this.currentValue);
      },
    },
    computed: {
      multiple() {
        return this.property.type === "array";
      },
    },
  };
  function wt(e, n, t, r, i, s) {
    var u;
    const c = o.resolveComponent("file-simple"),
      a = o.resolveComponent("files-list");
    return (
      o.openBlock(),
      o.createElementBlock(
        o.Fragment,
        null,
        [
          o.createVNode(
            c,
            {
              name: t.name,
              required: t.required,
              multiple: s.multiple,
              "is-error": t.isError,
              onMountedRef: s.onMountedInputRef,
              onChange: s.onInputChange,
            },
            null,
            8,
            [
              "name",
              "required",
              "multiple",
              "is-error",
              "onMountedRef",
              "onChange",
            ]
          ),
          (u = i.currentValue) != null && u.length
            ? (o.openBlock(),
              o.createBlock(
                a,
                {
                  key: 0,
                  list: i.currentValue,
                  required: t.required,
                  onRemoveItem: s.removeItem,
                },
                null,
                8,
                ["list", "required", "onRemoveItem"]
              ))
            : o.createCommentVNode("", !0),
        ],
        64
      )
    );
  }
  const Bt = E(xt, [["render", wt]]),
    he = {
      час: ["час", "часа", "часов"],
      минуту: ["минуту", "минуты", "минут"],
      секунду: ["секунду", "секунды", "секунд"],
      символ: ["символ", "символа", "символов"],
      элемент: ["элемент", "элемента", "элементов"],
      файл: ["файл", "файла", "файлов"],
    };
  function R(e, n) {
    return n !== 11 && String(n).at(-1) === "1" ? he[e][1] : he[e][2];
  }
  const U = {
    patternMismatch: "Несоответствие шаблону",
    stepMismatch: "Значение не соответствует указанному шагу",
    badInput: "Введены данные, которые браузер не может преобразовать",
    typeMismatch: "Значение не соответствует указанному атрибуту type",
    valueMissing: "Обязательное поле",
  };
  function Nt(e) {
    return `Максимальное значение должно быть не больше ${e.max}`;
  }
  function Vt(e) {
    return `Минимальное значение должно быть не меньше ${e.min}`;
  }
  function It(e) {
    const n = +e.getAttribute("minlength");
    return `Не более ${n} ${R("символ", n)}`;
  }
  function Pt(e) {
    const n = +e.getAttribute("minlength");
    return `Не менее ${n} ${R("символ", n)}`;
  }
  function Rt(e, n) {
    const t = [],
      r = e.validity;
    if (!r.valid) {
      for (let i in r) {
        if (r[i])
          switch (i) {
            case "rangeOverflow":
              t.push(Nt(e));
              break;
            case "rangeUnderflow":
              t.push(Vt(e));
              break;
            case "tooLong":
              t.push(It(e));
              break;
            case "tooShort":
              t.push(Pt(e));
              break;
            default:
              const s = U[i];
              s && t.push(s);
          }
        if (n) return t[0];
      }
      return t;
    }
    return null;
  }
  var _e = !1;
  function z(e, n, t) {
    return Array.isArray(e)
      ? ((e.length = Math.max(e.length, n)), e.splice(n, 1, t), t)
      : ((e[n] = t), t);
  }
  function Z(e, n) {
    if (Array.isArray(e)) {
      e.splice(n, 1);
      return;
    }
    delete e[n];
  }
  function jt() {
    return pe().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function pe() {
    return typeof navigator < "u" && typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {};
  }
  const At = typeof Proxy == "function",
    vt = "devtools-plugin:setup",
    Dt = "plugin:settings:set";
  let j, ee;
  function Lt() {
    var e;
    return (
      j !== void 0 ||
        (typeof window < "u" && window.performance
          ? ((j = !0), (ee = window.performance))
          : typeof global < "u" &&
            !((e = global.perf_hooks) === null || e === void 0) &&
            e.performance
          ? ((j = !0), (ee = global.perf_hooks.performance))
          : (j = !1)),
      j
    );
  }
  function Ft() {
    return Lt() ? ee.now() : Date.now();
  }
  class Mt {
    constructor(n, t) {
      (this.target = null),
        (this.targetQueue = []),
        (this.onQueue = []),
        (this.plugin = n),
        (this.hook = t);
      const r = {};
      if (n.settings)
        for (const c in n.settings) {
          const a = n.settings[c];
          r[c] = a.defaultValue;
        }
      const i = `__vue-devtools-plugin-settings__${n.id}`;
      let s = Object.assign({}, r);
      try {
        const c = localStorage.getItem(i),
          a = JSON.parse(c);
        Object.assign(s, a);
      } catch {}
      (this.fallbacks = {
        getSettings() {
          return s;
        },
        setSettings(c) {
          try {
            localStorage.setItem(i, JSON.stringify(c));
          } catch {}
          s = c;
        },
        now() {
          return Ft();
        },
      }),
        t &&
          t.on(Dt, (c, a) => {
            c === this.plugin.id && this.fallbacks.setSettings(a);
          }),
        (this.proxiedOn = new Proxy(
          {},
          {
            get: (c, a) =>
              this.target
                ? this.target.on[a]
                : (...u) => {
                    this.onQueue.push({ method: a, args: u });
                  },
          }
        )),
        (this.proxiedTarget = new Proxy(
          {},
          {
            get: (c, a) =>
              this.target
                ? this.target[a]
                : a === "on"
                ? this.proxiedOn
                : Object.keys(this.fallbacks).includes(a)
                ? (...u) => (
                    this.targetQueue.push({
                      method: a,
                      args: u,
                      resolve: () => {},
                    }),
                    this.fallbacks[a](...u)
                  )
                : (...u) =>
                    new Promise((h) => {
                      this.targetQueue.push({ method: a, args: u, resolve: h });
                    }),
          }
        ));
    }
    async setRealTarget(n) {
      this.target = n;
      for (const t of this.onQueue) this.target.on[t.method](...t.args);
      for (const t of this.targetQueue)
        t.resolve(await this.target[t.method](...t.args));
    }
  }
  function ge(e, n) {
    const t = e,
      r = pe(),
      i = jt(),
      s = At && t.enableEarlyProxy;
    if (i && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s)) i.emit(vt, e, n);
    else {
      const c = s ? new Mt(t, i) : null;
      (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
        pluginDescriptor: t,
        setupFn: n,
        proxy: c,
      }),
        c && n(c.proxiedTarget);
    }
  }
  /*!
   * pinia v2.1.4
   * (c) 2023 Eduardo San Martin Morote
   * @license MIT
   */ let L;
  const F = (e) => (L = e),
    ye = process.env.NODE_ENV !== "production" ? Symbol("pinia") : Symbol();
  function I(e) {
    return (
      e &&
      typeof e == "object" &&
      Object.prototype.toString.call(e) === "[object Object]" &&
      typeof e.toJSON != "function"
    );
  }
  var w;
  (function (e) {
    (e.direct = "direct"),
      (e.patchObject = "patch object"),
      (e.patchFunction = "patch function");
  })(w || (w = {}));
  const H = typeof window < "u",
    M =
      (process.env.NODE_ENV !== "production" || !1) &&
      process.env.NODE_ENV !== "test" &&
      H,
    be = (() =>
      typeof window == "object" && window.window === window
        ? window
        : typeof self == "object" && self.self === self
        ? self
        : typeof global == "object" && global.global === global
        ? global
        : typeof globalThis == "object"
        ? globalThis
        : { HTMLElement: null })();
  function Tt(e, { autoBom: n = !1 } = {}) {
    return n &&
      /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
        e.type
      )
      ? new Blob([String.fromCharCode(65279), e], { type: e.type })
      : e;
  }
  function te(e, n, t) {
    const r = new XMLHttpRequest();
    r.open("GET", e),
      (r.responseType = "blob"),
      (r.onload = function () {
        ke(r.response, n, t);
      }),
      (r.onerror = function () {
        console.error("could not download file");
      }),
      r.send();
  }
  function Ce(e) {
    const n = new XMLHttpRequest();
    n.open("HEAD", e, !1);
    try {
      n.send();
    } catch {}
    return n.status >= 200 && n.status <= 299;
  }
  function G(e) {
    try {
      e.dispatchEvent(new MouseEvent("click"));
    } catch {
      const t = document.createEvent("MouseEvents");
      t.initMouseEvent(
        "click",
        !0,
        !0,
        window,
        0,
        0,
        0,
        80,
        20,
        !1,
        !1,
        !1,
        !1,
        0,
        null
      ),
        e.dispatchEvent(t);
    }
  }
  const J = typeof navigator == "object" ? navigator : { userAgent: "" },
    Ee = (() =>
      /Macintosh/.test(J.userAgent) &&
      /AppleWebKit/.test(J.userAgent) &&
      !/Safari/.test(J.userAgent))(),
    ke = H
      ? typeof HTMLAnchorElement < "u" &&
        "download" in HTMLAnchorElement.prototype &&
        !Ee
        ? $t
        : "msSaveOrOpenBlob" in J
        ? qt
        : Ut
      : () => {};
  function $t(e, n = "download", t) {
    const r = document.createElement("a");
    (r.download = n),
      (r.rel = "noopener"),
      typeof e == "string"
        ? ((r.href = e),
          r.origin !== location.origin
            ? Ce(r.href)
              ? te(e, n, t)
              : ((r.target = "_blank"), G(r))
            : G(r))
        : ((r.href = URL.createObjectURL(e)),
          setTimeout(function () {
            URL.revokeObjectURL(r.href);
          }, 4e4),
          setTimeout(function () {
            G(r);
          }, 0));
  }
  function qt(e, n = "download", t) {
    if (typeof e == "string")
      if (Ce(e)) te(e, n, t);
      else {
        const r = document.createElement("a");
        (r.href = e),
          (r.target = "_blank"),
          setTimeout(function () {
            G(r);
          });
      }
    else navigator.msSaveOrOpenBlob(Tt(e, t), n);
  }
  function Ut(e, n, t, r) {
    if (
      ((r = r || open("", "_blank")),
      r && (r.document.title = r.document.body.innerText = "downloading..."),
      typeof e == "string")
    )
      return te(e, n, t);
    const i = e.type === "application/octet-stream",
      s = /constructor/i.test(String(be.HTMLElement)) || "safari" in be,
      c = /CriOS\/[\d]+/.test(navigator.userAgent);
    if ((c || (i && s) || Ee) && typeof FileReader < "u") {
      const a = new FileReader();
      (a.onloadend = function () {
        let u = a.result;
        if (typeof u != "string")
          throw ((r = null), new Error("Wrong reader.result type"));
        (u = c ? u : u.replace(/^data:[^;]*;/, "data:attachment/file;")),
          r ? (r.location.href = u) : location.assign(u),
          (r = null);
      }),
        a.readAsDataURL(e);
    } else {
      const a = URL.createObjectURL(e);
      r ? r.location.assign(a) : (location.href = a),
        (r = null),
        setTimeout(function () {
          URL.revokeObjectURL(a);
        }, 4e4);
    }
  }
  function b(e, n) {
    const t = "🍍 " + e;
    typeof __VUE_DEVTOOLS_TOAST__ == "function"
      ? __VUE_DEVTOOLS_TOAST__(t, n)
      : n === "error"
      ? console.error(t)
      : n === "warn"
      ? console.warn(t)
      : console.log(t);
  }
  function ne(e) {
    return "_a" in e && "install" in e;
  }
  function Se() {
    if (!("clipboard" in navigator))
      return b("Your browser doesn't support the Clipboard API", "error"), !0;
  }
  function Oe(e) {
    return e instanceof Error &&
      e.message.toLowerCase().includes("document is not focused")
      ? (b(
          'You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.',
          "warn"
        ),
        !0)
      : !1;
  }
  async function zt(e) {
    if (!Se())
      try {
        await navigator.clipboard.writeText(JSON.stringify(e.state.value)),
          b("Global state copied to clipboard.");
      } catch (n) {
        if (Oe(n)) return;
        b(
          "Failed to serialize the state. Check the console for more details.",
          "error"
        ),
          console.error(n);
      }
  }
  async function Ht(e) {
    if (!Se())
      try {
        (e.state.value = JSON.parse(await navigator.clipboard.readText())),
          b("Global state pasted from clipboard.");
      } catch (n) {
        if (Oe(n)) return;
        b(
          "Failed to deserialize the state from clipboard. Check the console for more details.",
          "error"
        ),
          console.error(n);
      }
  }
  async function Gt(e) {
    try {
      ke(
        new Blob([JSON.stringify(e.state.value)], {
          type: "text/plain;charset=utf-8",
        }),
        "pinia-state.json"
      );
    } catch (n) {
      b(
        "Failed to export the state as JSON. Check the console for more details.",
        "error"
      ),
        console.error(n);
    }
  }
  let B;
  function Jt() {
    B ||
      ((B = document.createElement("input")),
      (B.type = "file"),
      (B.accept = ".json"));
    function e() {
      return new Promise((n, t) => {
        (B.onchange = async () => {
          const r = B.files;
          if (!r) return n(null);
          const i = r.item(0);
          return n(i ? { text: await i.text(), file: i } : null);
        }),
          (B.oncancel = () => n(null)),
          (B.onerror = t),
          B.click();
      });
    }
    return e;
  }
  async function Wt(e) {
    try {
      const t = await (await Jt())();
      if (!t) return;
      const { text: r, file: i } = t;
      (e.state.value = JSON.parse(r)),
        b(`Global state imported from "${i.name}".`);
    } catch (n) {
      b(
        "Failed to export the state as JSON. Check the console for more details.",
        "error"
      ),
        console.error(n);
    }
  }
  function x(e) {
    return { _custom: { display: e } };
  }
  const xe = "🍍 Pinia (root)",
    re = "_root";
  function Qt(e) {
    return ne(e) ? { id: re, label: xe } : { id: e.$id, label: e.$id };
  }
  function Yt(e) {
    if (ne(e)) {
      const t = Array.from(e._s.keys()),
        r = e._s;
      return {
        state: t.map((s) => ({
          editable: !0,
          key: s,
          value: e.state.value[s],
        })),
        getters: t
          .filter((s) => r.get(s)._getters)
          .map((s) => {
            const c = r.get(s);
            return {
              editable: !1,
              key: s,
              value: c._getters.reduce((a, u) => ((a[u] = c[u]), a), {}),
            };
          }),
      };
    }
    const n = {
      state: Object.keys(e.$state).map((t) => ({
        editable: !0,
        key: t,
        value: e.$state[t],
      })),
    };
    return (
      e._getters &&
        e._getters.length &&
        (n.getters = e._getters.map((t) => ({
          editable: !1,
          key: t,
          value: e[t],
        }))),
      e._customProperties.size &&
        (n.customProperties = Array.from(e._customProperties).map((t) => ({
          editable: !0,
          key: t,
          value: e[t],
        }))),
      n
    );
  }
  function Xt(e) {
    return e
      ? Array.isArray(e)
        ? e.reduce(
            (n, t) => (
              n.keys.push(t.key),
              n.operations.push(t.type),
              (n.oldValue[t.key] = t.oldValue),
              (n.newValue[t.key] = t.newValue),
              n
            ),
            { oldValue: {}, keys: [], operations: [], newValue: {} }
          )
        : {
            operation: x(e.type),
            key: x(e.key),
            oldValue: e.oldValue,
            newValue: e.newValue,
          }
      : {};
  }
  function Kt(e) {
    switch (e) {
      case w.direct:
        return "mutation";
      case w.patchFunction:
        return "$patch";
      case w.patchObject:
        return "$patch";
      default:
        return "unknown";
    }
  }
  let A = !0;
  const W = [],
    P = "pinia:mutations",
    C = "pinia",
    { assign: Zt } = Object,
    Q = (e) => "🍍 " + e;
  function en(e, n) {
    ge(
      {
        id: "dev.esm.pinia",
        label: "Pinia 🍍",
        logo: "https://pinia.vuejs.org/logo.svg",
        packageName: "pinia",
        homepage: "https://pinia.vuejs.org",
        componentStateTypes: W,
        app: e,
      },
      (t) => {
        typeof t.now != "function" &&
          b(
            "You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."
          ),
          t.addTimelineLayer({ id: P, label: "Pinia 🍍", color: 15064968 }),
          t.addInspector({
            id: C,
            label: "Pinia 🍍",
            icon: "storage",
            treeFilterPlaceholder: "Search stores",
            actions: [
              {
                icon: "content_copy",
                action: () => {
                  zt(n);
                },
                tooltip: "Serialize and copy the state",
              },
              {
                icon: "content_paste",
                action: async () => {
                  await Ht(n), t.sendInspectorTree(C), t.sendInspectorState(C);
                },
                tooltip: "Replace the state with the content of your clipboard",
              },
              {
                icon: "save",
                action: () => {
                  Gt(n);
                },
                tooltip: "Save the state as a JSON file",
              },
              {
                icon: "folder_open",
                action: async () => {
                  await Wt(n), t.sendInspectorTree(C), t.sendInspectorState(C);
                },
                tooltip: "Import the state from a JSON file",
              },
            ],
            nodeActions: [
              {
                icon: "restore",
                tooltip: 'Reset the state (with "$reset")',
                action: (r) => {
                  const i = n._s.get(r);
                  i
                    ? typeof i.$reset != "function"
                      ? b(
                          `Cannot reset "${r}" store because it doesn't have a "$reset" method implemented.`,
                          "warn"
                        )
                      : (i.$reset(), b(`Store "${r}" reset.`))
                    : b(
                        `Cannot reset "${r}" store because it wasn't found.`,
                        "warn"
                      );
                },
              },
            ],
          }),
          t.on.inspectComponent((r, i) => {
            const s = r.componentInstance && r.componentInstance.proxy;
            if (s && s._pStores) {
              const c = r.componentInstance.proxy._pStores;
              Object.values(c).forEach((a) => {
                r.instanceData.state.push({
                  type: Q(a.$id),
                  key: "state",
                  editable: !0,
                  value: a._isOptionsAPI
                    ? {
                        _custom: {
                          value: o.toRaw(a.$state),
                          actions: [
                            {
                              icon: "restore",
                              tooltip: "Reset the state of this store",
                              action: () => a.$reset(),
                            },
                          ],
                        },
                      }
                    : Object.keys(a.$state).reduce(
                        (u, h) => ((u[h] = a.$state[h]), u),
                        {}
                      ),
                }),
                  a._getters &&
                    a._getters.length &&
                    r.instanceData.state.push({
                      type: Q(a.$id),
                      key: "getters",
                      editable: !1,
                      value: a._getters.reduce((u, h) => {
                        try {
                          u[h] = a[h];
                        } catch (g) {
                          u[h] = g;
                        }
                        return u;
                      }, {}),
                    });
              });
            }
          }),
          t.on.getInspectorTree((r) => {
            if (r.app === e && r.inspectorId === C) {
              let i = [n];
              (i = i.concat(Array.from(n._s.values()))),
                (r.rootNodes = (
                  r.filter
                    ? i.filter((s) =>
                        "$id" in s
                          ? s.$id.toLowerCase().includes(r.filter.toLowerCase())
                          : xe.toLowerCase().includes(r.filter.toLowerCase())
                      )
                    : i
                ).map(Qt));
            }
          }),
          t.on.getInspectorState((r) => {
            if (r.app === e && r.inspectorId === C) {
              const i = r.nodeId === re ? n : n._s.get(r.nodeId);
              if (!i) return;
              i && (r.state = Yt(i));
            }
          }),
          t.on.editInspectorState((r, i) => {
            if (r.app === e && r.inspectorId === C) {
              const s = r.nodeId === re ? n : n._s.get(r.nodeId);
              if (!s) return b(`store "${r.nodeId}" not found`, "error");
              const { path: c } = r;
              ne(s)
                ? c.unshift("state")
                : (c.length !== 1 ||
                    !s._customProperties.has(c[0]) ||
                    c[0] in s.$state) &&
                  c.unshift("$state"),
                (A = !1),
                r.set(s, c, r.state.value),
                (A = !0);
            }
          }),
          t.on.editComponentState((r) => {
            if (r.type.startsWith("🍍")) {
              const i = r.type.replace(/^🍍\s*/, ""),
                s = n._s.get(i);
              if (!s) return b(`store "${i}" not found`, "error");
              const { path: c } = r;
              if (c[0] !== "state")
                return b(`Invalid path for store "${i}":
${c}
Only state can be modified.`);
              (c[0] = "$state"), (A = !1), r.set(s, c, r.state.value), (A = !0);
            }
          });
      }
    );
  }
  function tn(e, n) {
    W.includes(Q(n.$id)) || W.push(Q(n.$id)),
      ge(
        {
          id: "dev.esm.pinia",
          label: "Pinia 🍍",
          logo: "https://pinia.vuejs.org/logo.svg",
          packageName: "pinia",
          homepage: "https://pinia.vuejs.org",
          componentStateTypes: W,
          app: e,
          settings: {
            logStoreChanges: {
              label: "Notify about new/deleted stores",
              type: "boolean",
              defaultValue: !0,
            },
          },
        },
        (t) => {
          const r = typeof t.now == "function" ? t.now.bind(t) : Date.now;
          n.$onAction(({ after: c, onError: a, name: u, args: h }) => {
            const g = we++;
            t.addTimelineEvent({
              layerId: P,
              event: {
                time: r(),
                title: "🛫 " + u,
                subtitle: "start",
                data: { store: x(n.$id), action: x(u), args: h },
                groupId: g,
              },
            }),
              c((_) => {
                (N = void 0),
                  t.addTimelineEvent({
                    layerId: P,
                    event: {
                      time: r(),
                      title: "🛬 " + u,
                      subtitle: "end",
                      data: {
                        store: x(n.$id),
                        action: x(u),
                        args: h,
                        result: _,
                      },
                      groupId: g,
                    },
                  });
              }),
              a((_) => {
                (N = void 0),
                  t.addTimelineEvent({
                    layerId: P,
                    event: {
                      time: r(),
                      logType: "error",
                      title: "💥 " + u,
                      subtitle: "end",
                      data: {
                        store: x(n.$id),
                        action: x(u),
                        args: h,
                        error: _,
                      },
                      groupId: g,
                    },
                  });
              });
          }, !0),
            n._customProperties.forEach((c) => {
              o.watch(
                () => o.unref(n[c]),
                (a, u) => {
                  t.notifyComponentUpdate(),
                    t.sendInspectorState(C),
                    A &&
                      t.addTimelineEvent({
                        layerId: P,
                        event: {
                          time: r(),
                          title: "Change",
                          subtitle: c,
                          data: { newValue: a, oldValue: u },
                          groupId: N,
                        },
                      });
                },
                { deep: !0 }
              );
            }),
            n.$subscribe(
              ({ events: c, type: a }, u) => {
                if ((t.notifyComponentUpdate(), t.sendInspectorState(C), !A))
                  return;
                const h = {
                  time: r(),
                  title: Kt(a),
                  data: Zt({ store: x(n.$id) }, Xt(c)),
                  groupId: N,
                };
                a === w.patchFunction
                  ? (h.subtitle = "⤵️")
                  : a === w.patchObject
                  ? (h.subtitle = "🧩")
                  : c && !Array.isArray(c) && (h.subtitle = c.type),
                  c &&
                    (h.data["rawEvent(s)"] = {
                      _custom: {
                        display: "DebuggerEvent",
                        type: "object",
                        tooltip: "raw DebuggerEvent[]",
                        value: c,
                      },
                    }),
                  t.addTimelineEvent({ layerId: P, event: h });
              },
              { detached: !0, flush: "sync" }
            );
          const i = n._hotUpdate;
          n._hotUpdate = o.markRaw((c) => {
            i(c),
              t.addTimelineEvent({
                layerId: P,
                event: {
                  time: r(),
                  title: "🔥 " + n.$id,
                  subtitle: "HMR update",
                  data: { store: x(n.$id), info: x("HMR update") },
                },
              }),
              t.notifyComponentUpdate(),
              t.sendInspectorTree(C),
              t.sendInspectorState(C);
          });
          const { $dispose: s } = n;
          (n.$dispose = () => {
            s(),
              t.notifyComponentUpdate(),
              t.sendInspectorTree(C),
              t.sendInspectorState(C),
              t.getSettings().logStoreChanges &&
                b(`Disposed "${n.$id}" store 🗑`);
          }),
            t.notifyComponentUpdate(),
            t.sendInspectorTree(C),
            t.sendInspectorState(C),
            t.getSettings().logStoreChanges &&
              b(`"${n.$id}" store installed 🆕`);
        }
      );
  }
  let we = 0,
    N;
  function Be(e, n, t) {
    const r = n.reduce((i, s) => ((i[s] = o.toRaw(e)[s]), i), {});
    for (const i in r)
      e[i] = function () {
        const s = we,
          c = t
            ? new Proxy(e, {
                get(...u) {
                  return (N = s), Reflect.get(...u);
                },
                set(...u) {
                  return (N = s), Reflect.set(...u);
                },
              })
            : e;
        N = s;
        const a = r[i].apply(c, arguments);
        return (N = void 0), a;
      };
  }
  function nn({ app: e, store: n, options: t }) {
    if (n.$id.startsWith("__hot:")) return;
    (n._isOptionsAPI = !!t.state),
      Be(n, Object.keys(t.actions), n._isOptionsAPI);
    const r = n._hotUpdate;
    (o.toRaw(n)._hotUpdate = function (i) {
      r.apply(this, arguments),
        Be(n, Object.keys(i._hmrPayload.actions), !!n._isOptionsAPI);
    }),
      tn(e, n);
  }
  function Ne() {
    const e = o.effectScope(!0),
      n = e.run(() => o.ref({}));
    let t = [],
      r = [];
    const i = o.markRaw({
      install(s) {
        F(i),
          (i._a = s),
          s.provide(ye, i),
          (s.config.globalProperties.$pinia = i),
          M && en(s, i),
          r.forEach((c) => t.push(c)),
          (r = []);
      },
      use(s) {
        return !this._a && !_e ? r.push(s) : t.push(s), this;
      },
      _p: t,
      _a: null,
      _e: e,
      _s: new Map(),
      state: n,
    });
    return M && typeof Proxy < "u" && i.use(nn), i;
  }
  function Ve(e, n) {
    for (const t in n) {
      const r = n[t];
      if (!(t in e)) continue;
      const i = e[t];
      I(i) && I(r) && !o.isRef(r) && !o.isReactive(r)
        ? (e[t] = Ve(i, r))
        : (e[t] = r);
    }
    return e;
  }
  const Ie = () => {};
  function Pe(e, n, t, r = Ie) {
    e.push(n);
    const i = () => {
      const s = e.indexOf(n);
      s > -1 && (e.splice(s, 1), r());
    };
    return !t && o.getCurrentScope() && o.onScopeDispose(i), i;
  }
  function v(e, ...n) {
    e.slice().forEach((t) => {
      t(...n);
    });
  }
  const rn = (e) => e();
  function oe(e, n) {
    e instanceof Map && n instanceof Map && n.forEach((t, r) => e.set(r, t)),
      e instanceof Set && n instanceof Set && n.forEach(e.add, e);
    for (const t in n) {
      if (!n.hasOwnProperty(t)) continue;
      const r = n[t],
        i = e[t];
      I(i) && I(r) && e.hasOwnProperty(t) && !o.isRef(r) && !o.isReactive(r)
        ? (e[t] = oe(i, r))
        : (e[t] = r);
    }
    return e;
  }
  const on =
    process.env.NODE_ENV !== "production"
      ? Symbol("pinia:skipHydration")
      : Symbol();
  function sn(e) {
    return !I(e) || !e.hasOwnProperty(on);
  }
  const { assign: S } = Object;
  function Re(e) {
    return !!(o.isRef(e) && e.effect);
  }
  function je(e, n, t, r) {
    const { state: i, actions: s, getters: c } = n,
      a = t.state.value[e];
    let u;
    function h() {
      !a &&
        (process.env.NODE_ENV === "production" || !r) &&
        (t.state.value[e] = i ? i() : {});
      const g =
        process.env.NODE_ENV !== "production" && r
          ? o.toRefs(o.ref(i ? i() : {}).value)
          : o.toRefs(t.state.value[e]);
      return S(
        g,
        s,
        Object.keys(c || {}).reduce(
          (_, d) => (
            process.env.NODE_ENV !== "production" &&
              d in g &&
              console.warn(
                `[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${d}" in store "${e}".`
              ),
            (_[d] = o.markRaw(
              o.computed(() => {
                F(t);
                const p = t._s.get(e);
                return c[d].call(p, p);
              })
            )),
            _
          ),
          {}
        )
      );
    }
    return (u = se(e, h, n, t, r, !0)), u;
  }
  function se(e, n, t = {}, r, i, s) {
    let c;
    const a = S({ actions: {} }, t);
    if (process.env.NODE_ENV !== "production" && !r._e.active)
      throw new Error("Pinia destroyed");
    const u = { deep: !0 };
    process.env.NODE_ENV !== "production" &&
      !_e &&
      (u.onTrigger = (f) => {
        h
          ? (p = f)
          : h == !1 &&
            !m._hotUpdating &&
            (Array.isArray(p)
              ? p.push(f)
              : console.error(
                  "🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."
                ));
      });
    let h,
      g,
      _ = [],
      d = [],
      p;
    const D = r.state.value[e];
    !s &&
      !D &&
      (process.env.NODE_ENV === "production" || !i) &&
      (r.state.value[e] = {});
    const ue = o.ref({});
    let qe;
    function Ue(f) {
      let l;
      (h = g = !1),
        process.env.NODE_ENV !== "production" && (p = []),
        typeof f == "function"
          ? (f(r.state.value[e]),
            (l = { type: w.patchFunction, storeId: e, events: p }))
          : (oe(r.state.value[e], f),
            (l = { type: w.patchObject, payload: f, storeId: e, events: p }));
      const y = (qe = Symbol());
      o.nextTick().then(() => {
        qe === y && (h = !0);
      }),
        (g = !0),
        v(_, l, r.state.value[e]);
    }
    const nr = s
      ? function () {
          const { state: l } = t,
            y = l ? l() : {};
          this.$patch((k) => {
            S(k, y);
          });
        }
      : process.env.NODE_ENV !== "production"
      ? () => {
          throw new Error(
            `🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`
          );
        }
      : Ie;
    function rr() {
      c.stop(), (_ = []), (d = []), r._s.delete(e);
    }
    function ze(f, l) {
      return function () {
        F(r);
        const y = Array.from(arguments),
          k = [],
          T = [];
        function sr(O) {
          k.push(O);
        }
        function ir(O) {
          T.push(O);
        }
        v(d, { args: y, name: f, store: m, after: sr, onError: ir });
        let $;
        try {
          $ = l.apply(this && this.$id === e ? this : m, y);
        } catch (O) {
          throw (v(T, O), O);
        }
        return $ instanceof Promise
          ? $.then((O) => (v(k, O), O)).catch(
              (O) => (v(T, O), Promise.reject(O))
            )
          : (v(k, $), $);
      };
    }
    const X = o.markRaw({ actions: {}, getters: {}, state: [], hotState: ue }),
      He = {
        _p: r,
        $id: e,
        $onAction: Pe.bind(null, d),
        $patch: Ue,
        $reset: nr,
        $subscribe(f, l = {}) {
          const y = Pe(_, f, l.detached, () => k()),
            k = c.run(() =>
              o.watch(
                () => r.state.value[e],
                (T) => {
                  (l.flush === "sync" ? g : h) &&
                    f({ storeId: e, type: w.direct, events: p }, T);
                },
                S({}, u, l)
              )
            );
          return y;
        },
        $dispose: rr,
      },
      m = o.reactive(
        process.env.NODE_ENV !== "production" || M
          ? S({ _hmrPayload: X, _customProperties: o.markRaw(new Set()) }, He)
          : He
      );
    r._s.set(e, m);
    const or = (r._a && r._a.runWithContext) || rn,
      V = r._e.run(() => ((c = o.effectScope()), or(() => c.run(n))));
    for (const f in V) {
      const l = V[f];
      if ((o.isRef(l) && !Re(l)) || o.isReactive(l))
        process.env.NODE_ENV !== "production" && i
          ? z(ue.value, f, o.toRef(V, f))
          : s ||
            (D && sn(l) && (o.isRef(l) ? (l.value = D[f]) : oe(l, D[f])),
            (r.state.value[e][f] = l)),
          process.env.NODE_ENV !== "production" && X.state.push(f);
      else if (typeof l == "function") {
        const y = process.env.NODE_ENV !== "production" && i ? l : ze(f, l);
        (V[f] = y),
          process.env.NODE_ENV !== "production" && (X.actions[f] = l),
          (a.actions[f] = l);
      } else
        process.env.NODE_ENV !== "production" &&
          Re(l) &&
          ((X.getters[f] = s ? t.getters[f] : l),
          H && (V._getters || (V._getters = o.markRaw([]))).push(f));
    }
    if (
      (S(m, V),
      S(o.toRaw(m), V),
      Object.defineProperty(m, "$state", {
        get: () =>
          process.env.NODE_ENV !== "production" && i
            ? ue.value
            : r.state.value[e],
        set: (f) => {
          if (process.env.NODE_ENV !== "production" && i)
            throw new Error("cannot set hotState");
          Ue((l) => {
            S(l, f);
          });
        },
      }),
      process.env.NODE_ENV !== "production" &&
        (m._hotUpdate = o.markRaw((f) => {
          (m._hotUpdating = !0),
            f._hmrPayload.state.forEach((l) => {
              if (l in m.$state) {
                const y = f.$state[l],
                  k = m.$state[l];
                typeof y == "object" && I(y) && I(k)
                  ? Ve(y, k)
                  : (f.$state[l] = k);
              }
              z(m, l, o.toRef(f.$state, l));
            }),
            Object.keys(m.$state).forEach((l) => {
              l in f.$state || Z(m, l);
            }),
            (h = !1),
            (g = !1),
            (r.state.value[e] = o.toRef(f._hmrPayload, "hotState")),
            (g = !0),
            o.nextTick().then(() => {
              h = !0;
            });
          for (const l in f._hmrPayload.actions) {
            const y = f[l];
            z(m, l, ze(l, y));
          }
          for (const l in f._hmrPayload.getters) {
            const y = f._hmrPayload.getters[l],
              k = s ? o.computed(() => (F(r), y.call(m, m))) : y;
            z(m, l, k);
          }
          Object.keys(m._hmrPayload.getters).forEach((l) => {
            l in f._hmrPayload.getters || Z(m, l);
          }),
            Object.keys(m._hmrPayload.actions).forEach((l) => {
              l in f._hmrPayload.actions || Z(m, l);
            }),
            (m._hmrPayload = f._hmrPayload),
            (m._getters = f._getters),
            (m._hotUpdating = !1);
        })),
      M)
    ) {
      const f = { writable: !0, configurable: !0, enumerable: !1 };
      ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((l) => {
        Object.defineProperty(m, l, S({ value: m[l] }, f));
      });
    }
    return (
      r._p.forEach((f) => {
        if (M) {
          const l = c.run(() =>
            f({ store: m, app: r._a, pinia: r, options: a })
          );
          Object.keys(l || {}).forEach((y) => m._customProperties.add(y)),
            S(m, l);
        } else
          S(
            m,
            c.run(() => f({ store: m, app: r._a, pinia: r, options: a }))
          );
      }),
      process.env.NODE_ENV !== "production" &&
        m.$state &&
        typeof m.$state == "object" &&
        typeof m.$state.constructor == "function" &&
        !m.$state.constructor.toString().includes("[native code]") &&
        console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${m.$id}".`),
      D && s && t.hydrate && t.hydrate(m.$state, D),
      (h = !0),
      (g = !0),
      m
    );
  }
  function Ae(e, n, t) {
    let r, i;
    const s = typeof n == "function";
    if (typeof e == "string") (r = e), (i = s ? t : n);
    else if (
      ((i = e),
      (r = e.id),
      process.env.NODE_ENV !== "production" && typeof r != "string")
    )
      throw new Error(
        '[🍍]: "defineStore()" must be passed a store id as its first argument.'
      );
    function c(a, u) {
      const h = o.hasInjectionContext();
      if (
        ((a =
          (process.env.NODE_ENV === "test" && L && L._testing ? null : a) ||
          (h ? o.inject(ye, null) : null)),
        a && F(a),
        process.env.NODE_ENV !== "production" && !L)
      )
        throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);
      (a = L),
        a._s.has(r) ||
          (s ? se(r, n, i, a) : je(r, i, a),
          process.env.NODE_ENV !== "production" && (c._pinia = a));
      const g = a._s.get(r);
      if (process.env.NODE_ENV !== "production" && u) {
        const _ = "__hot:" + r,
          d = s ? se(_, n, i, a, !0) : je(_, S({}, i), a, !0);
        u._hotUpdate(d), delete a.state.value[_], a._s.delete(_);
      }
      if (process.env.NODE_ENV !== "production" && H) {
        const _ = o.getCurrentInstance();
        if (_ && _.proxy && !u) {
          const d = _.proxy,
            p = "_pStores" in d ? d._pStores : (d._pStores = {});
          p[r] = g;
        }
      }
      return g;
    }
    return (c.$id = r), c;
  }
  const ie = Ae("errors", {
      state: () => ({ errors: {} }),
      actions: {
        setError(e, n) {
          this.errors[e] = n;
        },
        deleteError(e) {
          this.errors[e] && delete this.errors[e];
        },
      },
      getters: {
        getErrors() {
          return this.errors;
        },
      },
    }),
    ce = Ae("submit", {
      state: () => ({ isSubmit: !1 }),
      actions: {
        setStatusSubmit() {
          this.isSubmit = JSON.stringify(new Date().getTime());
        },
      },
      getters: {
        isLeastOneSubmit() {
          return !!this.isSubmit;
        },
      },
    }),
    fr = "",
    cn = {
      name: "c-checkbox",
      props: {
        value: [String, Number, Boolean],
        name: String,
        checked: Boolean,
        caption: [String, Number, Boolean],
        isError: Boolean,
      },
      emits: ["mountedRef"],
      mounted() {
        this.$emit("mountedRef", this.$refs.input);
      },
    },
    an = { class: "checkbox" },
    ln = ["value", "name", "checked"],
    un = { class: "checkbox__caption" };
  function fn(e, n, t, r, i, s) {
    return (
      o.openBlock(),
      o.createElementBlock("label", an, [
        o.createElementVNode(
          "input",
          {
            ref: "input",
            type: "checkbox",
            class: "checkbox__input",
            value: t.value,
            name: t.name,
            checked: t.checked,
          },
          null,
          8,
          ln
        ),
        o.createElementVNode(
          "span",
          {
            class: o.normalizeClass([
              "checkbox__content valid-field",
              { ["valid-field--error"]: t.isError },
            ]),
          },
          null,
          2
        ),
        o.createElementVNode("span", un, o.toDisplayString(t.caption), 1),
      ])
    );
  }
  const dn = E(cn, [
    ["render", fn],
    ["__scopeId", "data-v-5998e15a"],
  ]);
  function ve(e) {
    return typeof e == "object" && !Array.isArray(e);
  }
  const dr = "",
    mn = {
      name: "checkboxes-arr",
      components: { CCheckbox: dn },
      props: {
        checkboxesArr: Array,
        name: String,
        value: [Array, String, Number, Boolean],
        isError: Boolean,
      },
      emits: ["mountedRef", "onChange"],
      data() {
        return { valueArr: this.value ? this.value : [], inputRefsList: [] };
      },
      methods: {
        onMountedInputRef(e) {
          this.inputRefsList.push(e),
            this.inputRefsList.length === this.checkboxesArr.length &&
              this.$emit("mountedRef", this.inputRefsList);
        },
        getValue(e) {
          return ve(e) ? e.code : e;
        },
        getCaption(e) {
          return ve(e) ? e.value : e;
        },
        isChecked(e) {
          return this.valueArr.includes(e);
        },
        onChangeCheckbox(e) {
          const n = e.target.value;
          e.target.checked
            ? this.valueArr.push(n)
            : (this.valueArr = this.valueArr.filter((r) => r !== n)),
            this.$emit("onChange", this.valueArr);
        },
      },
    },
    hn = { class: "checkboxes" };
  function _n(e, n, t, r, i, s) {
    const c = o.resolveComponent("c-checkbox");
    return (
      o.openBlock(),
      o.createElementBlock("div", hn, [
        (o.openBlock(!0),
        o.createElementBlock(
          o.Fragment,
          null,
          o.renderList(
            t.checkboxesArr,
            (a) => (
              o.openBlock(),
              o.createBlock(
                c,
                {
                  key: a,
                  value: s.getValue(a),
                  caption: s.getCaption(a),
                  name: t.name,
                  checked: s.isChecked(a),
                  "is-error": t.isError,
                  class: "checkboxes__checkbox",
                  onChange: s.onChangeCheckbox,
                  onMountedRef: s.onMountedInputRef,
                },
                null,
                8,
                [
                  "value",
                  "caption",
                  "name",
                  "checked",
                  "is-error",
                  "onChange",
                  "onMountedRef",
                ]
              )
            )
          ),
          128
        )),
      ])
    );
  }
  const pn = E(mn, [
      ["render", _n],
      ["__scopeId", "data-v-b913db73"],
    ]),
    mr = "",
    gn = {
      name: "c-datepicker",
      props: {
        value: String,
        name: String,
        required: Boolean,
        isError: Boolean,
      },
      emits: ["mountedRef", "onChange", "onBlur"],
      mounted() {
        this.$emit("mountedRef", this.$refs.input);
      },
      methods: {
        onBlur(e) {
          this.$emit("onBlur", e.target.value);
        },
        onChange(e) {
          this.$emit("onChange", e.target.value);
        },
      },
    },
    yn = { class: "datepicker" },
    bn = ["value", "name", "required"];
  function Cn(e, n, t, r, i, s) {
    return (
      o.openBlock(),
      o.createElementBlock("label", yn, [
        o.createElementVNode(
          "input",
          {
            ref: "input",
            type: "date",
            value: t.value,
            name: t.name,
            required: t.required,
            class: o.normalizeClass([
              "datepicker__input valid-field",
              { ["valid-field--error"]: t.isError },
            ]),
            onBlur: n[0] || (n[0] = (...c) => s.onBlur && s.onBlur(...c)),
            onChange: n[1] || (n[1] = (...c) => s.onChange && s.onChange(...c)),
          },
          null,
          42,
          bn
        ),
      ])
    );
  }
  const En = E(gn, [
    ["render", Cn],
    ["__scopeId", "data-v-36c7cc77"],
  ]);
  function kn(e, n, t, r) {
    const i = [],
      s = e.type === "array";
    t && ((s && !n.length) || (!s && !n)) && i.push(U.valueMissing);
    const c = e.minItems;
    c && n.length < c && i.push(`Не менее ${c} ${R("файл", c)}`);
    const a = e.maxItems;
    return (
      a && n.length > a && i.push(`Не более ${a} ${R("файл", a)}`), r ? i[0] : i
    );
  }
  function Sn(e, n, t) {
    const r = [];
    return n && (!e || !e.length) && r.push(U.valueMissing), t ? r[0] : r;
  }
  function On(e, n) {
    let t = n;
    switch (e) {
      case "string":
        n || (t = void 0);
        break;
      case "boolean":
        t = n === "true" || n === !0;
        break;
    }
    return t;
  }
  function xn(e, n, t) {
    const r = [];
    return n && !e && r.push(U.valueMissing), t ? r[0] : r;
  }
  const hr = "",
    wn = {
      name: "property",
      components: {
        CDatepicker: En,
        CheckboxesArr: pn,
        CFile: Bt,
        CSelect: at,
        CText: tt,
      },
      props: {
        property: Object,
        value: [String, Number, Array, Boolean, File],
        name: String,
        requiredList: Array,
        keyName: String,
      },
      emits: ["onChangeControl"],
      data() {
        return { inputRef: void 0 };
      },
      setup() {
        const e = ie(),
          n = ce();
        return { storeErrors: e, storeSubmit: n };
      },
      watch: {
        isSubmitStatus() {
          this.checkValid(this.value);
        },
      },
      methods: {
        onMountedInputRef(e) {
          this.inputRef = e;
        },
        checkValid(e) {
          let n;
          const t = this.isRequired;
          this.isFile
            ? (n = kn(this.property, e, t, !0))
            : this.isCheckboxesList
            ? (n = Sn(e, t, !0))
            : this.isSelect
            ? (n = xn(e, t, !0))
            : (n = Rt(this.inputRef, !0)),
            n
              ? this.storeErrors.setError(this.name, n)
              : this.storeErrors.deleteError(this.name);
        },
        onChangeControl(e) {
          const n = On(this.property.type, e);
          this.$emit("onChangeControl", n),
            (this.storeSubmit.isLeastOneSubmit || this.getErrorMessage) &&
              this.checkValid(n);
        },
      },
      computed: {
        enumsList() {
          return this.property.uip_enum;
        },
        isSubmitStatus() {
          return this.storeSubmit.isSubmit;
        },
        isRequired() {
          var e;
          return (e = this.requiredList) == null
            ? void 0
            : e.includes(this.keyName);
        },
        getErrorMessage() {
          return this.storeErrors.getErrors[this.name];
        },
        isCheckboxesList() {
          return ut(this.property);
        },
        isSelect() {
          return lt(this.property);
        },
        isDate() {
          return ft(this.property);
        },
        isFile() {
          return me(this.property);
        },
      },
    },
    Bn = { class: "property" },
    Nn = { key: 1, class: "property__option" },
    Vn = { class: "property__item-container error-container" },
    In = { key: 5, class: "error-message" };
  function Pn(e, n, t, r, i, s) {
    const c = o.resolveComponent("checkboxes-arr"),
      a = o.resolveComponent("c-select"),
      u = o.resolveComponent("c-datepicker"),
      h = o.resolveComponent("c-file"),
      g = o.resolveComponent("c-text");
    return (
      o.openBlock(),
      o.createElementBlock("div", Bn, [
        t.property.title
          ? (o.openBlock(),
            o.createElementBlock(
              "span",
              {
                key: 0,
                class: o.normalizeClass([
                  "property__title",
                  [{ "property__title--required": s.isRequired }],
                ]),
              },
              o.toDisplayString(t.property.title),
              3
            ))
          : o.createCommentVNode("", !0),
        t.property.description
          ? (o.openBlock(),
            o.createElementBlock(
              "span",
              Nn,
              o.toDisplayString(t.property.description) + ": ",
              1
            ))
          : o.createCommentVNode("", !0),
        o.createElementVNode("div", Vn, [
          s.isCheckboxesList
            ? (o.openBlock(),
              o.createBlock(
                c,
                {
                  key: 0,
                  "checkboxes-arr": s.enumsList,
                  name: t.name,
                  value: t.value,
                  "is-error": !!s.getErrorMessage,
                  onOnChange: s.onChangeControl,
                  onMountedRef: s.onMountedInputRef,
                },
                null,
                8,
                [
                  "checkboxes-arr",
                  "name",
                  "value",
                  "is-error",
                  "onOnChange",
                  "onMountedRef",
                ]
              ))
            : s.isSelect
            ? (o.openBlock(),
              o.createBlock(
                a,
                {
                  key: 1,
                  optionsList: s.enumsList,
                  name: t.name,
                  value: t.value,
                  required: s.isRequired,
                  "is-error": !!s.getErrorMessage,
                  onOnChange: s.onChangeControl,
                  onMountedRef: s.onMountedInputRef,
                  onOnBlur: s.checkValid,
                },
                null,
                8,
                [
                  "optionsList",
                  "name",
                  "value",
                  "required",
                  "is-error",
                  "onOnChange",
                  "onMountedRef",
                  "onOnBlur",
                ]
              ))
            : s.isDate
            ? (o.openBlock(),
              o.createBlock(
                u,
                {
                  key: 2,
                  value: t.value,
                  name: t.name,
                  required: s.isRequired,
                  "is-error": !!s.getErrorMessage,
                  onOnChange: s.onChangeControl,
                  onMountedRef: s.onMountedInputRef,
                  onOnBlur: s.checkValid,
                },
                null,
                8,
                [
                  "value",
                  "name",
                  "required",
                  "is-error",
                  "onOnChange",
                  "onMountedRef",
                  "onOnBlur",
                ]
              ))
            : s.isFile
            ? (o.openBlock(),
              o.createBlock(
                h,
                {
                  key: 3,
                  property: t.property,
                  value: t.value,
                  name: t.name,
                  required: s.isRequired,
                  "is-error": !!s.getErrorMessage,
                  onMountedRef: s.onMountedInputRef,
                  onOnChange: s.onChangeControl,
                },
                null,
                8,
                [
                  "property",
                  "value",
                  "name",
                  "required",
                  "is-error",
                  "onMountedRef",
                  "onOnChange",
                ]
              ))
            : (o.openBlock(),
              o.createBlock(
                g,
                {
                  key: 4,
                  property: t.property,
                  value: t.value,
                  name: t.name,
                  required: s.isRequired,
                  "is-error": !!s.getErrorMessage,
                  onMountedRef: s.onMountedInputRef,
                  onOnChange: s.onChangeControl,
                  onOnBlur: s.checkValid,
                },
                null,
                8,
                [
                  "property",
                  "value",
                  "name",
                  "required",
                  "is-error",
                  "onMountedRef",
                  "onOnChange",
                  "onOnBlur",
                ]
              )),
          s.getErrorMessage
            ? (o.openBlock(),
              o.createElementBlock(
                "div",
                In,
                o.toDisplayString(s.getErrorMessage),
                1
              ))
            : o.createCommentVNode("", !0),
        ]),
      ])
    );
  }
  const De = E(wn, [
      ["render", Pn],
      ["__scopeId", "data-v-ac43fc2c"],
    ]),
    _r = "",
    Rn = { name: "main-description", props: { text: String } },
    jn = { key: 0, class: "description" };
  function An(e, n, t, r, i, s) {
    return t.text
      ? (o.openBlock(),
        o.createElementBlock("h3", jn, o.toDisplayString(t.text), 1))
      : o.createCommentVNode("", !0);
  }
  const Le = E(Rn, [
    ["render", An],
    ["__scopeId", "data-v-8f0f827d"],
  ]);
  function vn(e, n) {
    let t = !0;
    return (
      n.fields.forEach((r) => {
        const i = e[r.field];
        r.value.includes(i) || (t = !1);
      }),
      t
    );
  }
  function Dn(e) {
    if (e) {
      let { column: n, row: t, media: r } = e;
      return (
        r &&
          Object.entries(r).forEach(([i, s]) => {
            this.windowSize >= +i &&
              (s.column && (n = s.column), s.row && (t = s.row));
          }),
        { gridColumn: n, gridRow: t }
      );
    }
    return null;
  }
  const pr = "",
    Ln = {
      name: "property-object",
      components: {
        PropertyArray: o.defineAsyncComponent(() =>
          Promise.resolve().then(() => tr)
        ),
        MainDescription: Le,
        property: De,
        MainTitle: fe,
      },
      props: {
        schema: Object,
        formData: Object,
        formControl: Object,
        fullFormControl: Object,
        objectKey: [String, Number],
        namePrefix: String,
      },
      emits: ["onChangeControl", "onChangeCurrentForm"],
      data() {
        return { timeout: void 0, windowSize: window.innerWidth };
      },
      created() {
        window.addEventListener("resize", this.handleResize);
      },
      unmounted() {
        window.removeEventListener("resize", this.handleResize);
      },
      methods: {
        handleResize() {
          clearTimeout(this.timeout),
            (this.timeout = setTimeout(() => {
              this.windowSize = window.innerWidth;
            }, 100));
        },
        getNamePrefix(e) {
          return `${this.namePrefix}_${e}`;
        },
        showByDependencies({ depends: e }, n) {
          if (e) {
            let t = !0;
            t = vn(this.fullFormControl, e);
            const r = this.formControl;
            return (
              t
                ? !this.formControl[n] &&
                  this.fullFormControl[n] &&
                  ((r[n] = this.fullFormControl[n]),
                  this.$emit("onChangeControl", r))
                : this.formControl[n] &&
                  (delete r[n], this.$emit("onChangeControl", r)),
              t
            );
          }
          return !0;
        },
        getStyleGrid({ grid: e }) {
          return Dn(e);
        },
        isObjectProperty(e) {
          return de(e);
        },
        isArrayProperty(e) {
          return K(e);
        },
        onChangeControl(e, n) {
          const t = this.formControl;
          (t[n] = e), this.$emit("onChangeControl", t);
        },
      },
      computed: {
        title() {
          return this.schema.title ?? this.objectKey;
        },
      },
    },
    Fn = { class: "property-object" },
    Mn = { class: "property-object__container" };
  function Tn(e, n, t, r, i, s) {
    const c = o.resolveComponent("main-title"),
      a = o.resolveComponent("main-description"),
      u = o.resolveComponent("property-object", !0),
      h = o.resolveComponent("property-array"),
      g = o.resolveComponent("property");
    return (
      o.openBlock(),
      o.createElementBlock("div", Fn, [
        o.createVNode(c, { text: s.title }, null, 8, ["text"]),
        o.createVNode(a, { text: t.schema.description }, null, 8, ["text"]),
        o.createElementVNode("ul", Mn, [
          (o.openBlock(!0),
          o.createElementBlock(
            o.Fragment,
            null,
            o.renderList(
              t.schema.properties,
              (_, d) => (
                o.openBlock(),
                o.createElementBlock(
                  o.Fragment,
                  { key: d },
                  [
                    s.showByDependencies(_, d)
                      ? (o.openBlock(),
                        o.createElementBlock(
                          "li",
                          {
                            key: 0,
                            class: "property-object__item",
                            style: o.normalizeStyle(s.getStyleGrid(_)),
                          },
                          [
                            s.isObjectProperty(_)
                              ? (o.openBlock(),
                                o.createBlock(
                                  u,
                                  {
                                    key: 0,
                                    schema: _,
                                    "form-control": t.formControl[d],
                                    "full-form-control": t.fullFormControl[d],
                                    "form-data": t.formData,
                                    "object-key": d,
                                    "name-prefix": s.getNamePrefix(d),
                                    onOnChangeControl: (p) =>
                                      s.onChangeControl(p, d),
                                  },
                                  null,
                                  8,
                                  [
                                    "schema",
                                    "form-control",
                                    "full-form-control",
                                    "form-data",
                                    "object-key",
                                    "name-prefix",
                                    "onOnChangeControl",
                                  ]
                                ))
                              : s.isArrayProperty(_)
                              ? (o.openBlock(),
                                o.createBlock(
                                  h,
                                  {
                                    key: 1,
                                    schema: _,
                                    "form-arr": t.formControl[d],
                                    "full-form-control": t.fullFormControl[d],
                                    "form-data": t.formData,
                                    "name-prefix": s.getNamePrefix(d),
                                    onOnChangeControl: (p) =>
                                      s.onChangeControl(p, d),
                                  },
                                  null,
                                  8,
                                  [
                                    "schema",
                                    "form-arr",
                                    "full-form-control",
                                    "form-data",
                                    "name-prefix",
                                    "onOnChangeControl",
                                  ]
                                ))
                              : (o.openBlock(),
                                o.createBlock(
                                  g,
                                  {
                                    key: 2,
                                    property: _,
                                    value: t.formControl[d],
                                    name: s.getNamePrefix(d),
                                    requiredList: t.schema.required,
                                    keyName: d,
                                    onOnChangeControl: (p) =>
                                      s.onChangeControl(p, d),
                                  },
                                  null,
                                  8,
                                  [
                                    "property",
                                    "value",
                                    "name",
                                    "requiredList",
                                    "keyName",
                                    "onOnChangeControl",
                                  ]
                                )),
                          ],
                          4
                        ))
                      : o.createCommentVNode("", !0),
                  ],
                  64
                )
              )
            ),
            128
          )),
        ]),
      ])
    );
  }
  const Fe = E(Ln, [
    ["render", Tn],
    ["__scopeId", "data-v-fbfd0ef0"],
  ]);
  function Y(e) {
    switch (e.type) {
      case "object":
        const t = {};
        return (
          Object.entries(e.properties).forEach(([r, i]) => {
            t[r] = Y(i);
          }),
          t
        );
      case "array":
        return K(e) ? [Y(e.items)] : e.default || [];
      case "boolean":
        return e.default || !1;
      case "number":
        return e.default || 0;
      default:
        return e.default;
    }
  }
  function ae(e, n) {
    if (Array.isArray(e)) {
      const t = [];
      return (
        n.forEach((r) => {
          t.push(ae(e[0], r));
        }),
        t
      );
    } else if (typeof e == "object") {
      const t = {};
      return (
        Object.entries(e).forEach(([r, i]) => {
          const s = n[r] ?? i;
          t[r] = ae(i, s);
        }),
        t
      );
    } else return n ?? e;
  }
  function $n(e) {
    return !Object.keys(e).length;
  }
  function le(e, n) {
    if (e.properties)
      Object.entries(e.properties).forEach(([t, r]) => {
        e.properties[t] = le(r, n);
      });
    else if (e.items) e.items = le(e.items, n);
    else {
      if (e.$ref) {
        const t = e.$ref.split("#/definitions/")[1].split("/");
        let r;
        t.forEach((i) => {
          r = r ? r[i] : n[i];
        }),
          delete e.$ref,
          (e = { ...e, ...r });
      }
      return e;
    }
    return e;
  }
  function Me(e, n, t) {
    const r = new CustomEvent(n, { bubbles: !0, cancelable: !0, detail: t });
    e.dispatchEvent(r);
  }
  const yr = "",
    qn = {
      name: "schema-form",
      components: { PropertyObject: Fe },
      props: { schema: Object, formData: Object },
      data() {
        return { fullForm: void 0, currentForm: void 0 };
      },
      created() {
        le(this.schema, this.schema.definitions), this.setHybridFullForm();
      },
      emits: ["onChangeForm", "onSubmit"],
      setup() {
        const e = ie(),
          n = ce();
        return { storeErrors: e, storeSubmit: n };
      },
      methods: {
        setHybridFullForm() {
          const e = {};
          Object.entries(this.schema.properties).forEach(([t, r]) => {
            e[t] = Y(r);
          });
          const n = ae(e, this.formData);
          (this.fullForm = structuredClone(n)), this.onChangeCurrentForm(n);
        },
        onChangeCurrentForm(e) {
          (this.currentForm = e),
            (this.fullForm = e),
            this.$emit("onChangeForm", e),
            this.$refs.form &&
              Me(this.$refs.form, "onChangeForm", this.currentForm);
        },
        onSubmit(e) {
          e.preventDefault(),
            this.storeSubmit.setStatusSubmit(),
            setTimeout(() => {
              $n(this.storeErrors.getErrors) &&
                (this.$emit("onSubmit"),
                Me(this.$refs.form, "onSubmit", this.currentForm));
            });
        },
      },
    },
    Un = ((e) => (
      o.pushScopeId("data-v-036cc30f"), (e = e()), o.popScopeId(), e
    ))(() =>
      o.createElementVNode(
        "button",
        { type: "submit", class: "form__btn-submit" },
        "Submit",
        -1
      )
    );
  function zn(e, n, t, r, i, s) {
    const c = o.resolveComponent("property-object");
    return t.schema
      ? (o.openBlock(),
        o.createElementBlock(
          "form",
          {
            key: 0,
            ref: "form",
            class: "form",
            onSubmit: n[1] || (n[1] = (...a) => s.onSubmit && s.onSubmit(...a)),
            novalidate: "",
          },
          [
            o.createVNode(
              c,
              {
                schema: t.schema,
                "form-control": i.currentForm,
                "full-form-control": i.fullForm,
                "form-data": t.formData,
                "name-prefix": "form",
                onOnChangeControl:
                  n[0] || (n[0] = (a) => s.onChangeCurrentForm(a)),
              },
              null,
              8,
              ["schema", "form-control", "full-form-control", "form-data"]
            ),
            Un,
          ],
          544
        ))
      : o.createCommentVNode("", !0);
  }
  const Te = E(qn, [
      ["render", zn],
      ["__scopeId", "data-v-036cc30f"],
    ]),
    Cr = "";
  function $e(e, n) {
    const t = o.createApp(Te, n),
      r = Ne();
    t.use(r), t.mount(e);
  }
  window.createSchemaForm = $e;
  const Hn = {
    install: (e) => {
      e.use(Ne()),
        e.component("SchemaForm", Te),
        (e.config.globalProperties.$myFunction = $e);
    },
  };
  function Gn(e, n, t) {
    const r = [],
      i = e.minItems;
    if (i && n.length < i) return `Не менее ${i} ${R("элемент", i)}`;
    const s = e.maxItems;
    return s && n.length > s
      ? `Не более ${s} ${R("элемент", s)}`
      : t
      ? r[0]
      : r;
  }
  const Er = "",
    Jn = {
      name: "property-array",
      components: {
        MainDescription: Le,
        MainTitle: fe,
        PropertyObject: Fe,
        Property: De,
      },
      props: {
        schema: Object,
        formData: Object,
        formArr: Array,
        fullFormControl: Object,
        currentForm: Object,
        namePrefix: String,
      },
      emits: ["onChangeControl"],
      data() {
        return { formControl: this.formArr };
      },
      setup() {
        const e = ie(),
          n = ce();
        return { storeErrors: e, storeSubmit: n };
      },
      watch: {
        formArr(e) {
          this.formControl = e;
        },
        isSubmitStatus() {
          this.checkValid();
        },
      },
      methods: {
        checkValid() {
          const e = Gn(this.schema, this.formControl, !0);
          e
            ? this.storeErrors.setError(this.namePrefix, e)
            : this.storeErrors.deleteError(this.namePrefix);
        },
        addItem() {
          const e = Y(this.schema.items);
          this.formControl.push(e), this.checkValid();
        },
        removeItem(e) {
          this.formControl.splice(e, 1), this.checkValid();
        },
        getNamePrefixByChild(e) {
          return `${this.namePrefix}_${e}`;
        },
        onChangeControl(e, n) {
          const t = this.formArr;
          (t[n] = e), this.$emit("onChangeControl", t);
        },
      },
      computed: {
        isObjectProperty() {
          return de(this.schema.items);
        },
        isArrayProperty() {
          return K(this.schema.items);
        },
        isSubmitStatus() {
          return this.storeSubmit.isSubmit;
        },
        getErrorMessage() {
          return this.storeErrors.getErrors[this.namePrefix];
        },
      },
    },
    Wn = { class: "error-container" },
    Qn = { class: "property-array__container" },
    Yn = { class: "property-array__item-wrapper" },
    Xn = ["onClick"],
    Kn = { class: "property-array__btn-add-wrapper" },
    Zn = { key: 0, class: "error-message" };
  function er(e, n, t, r, i, s) {
    const c = o.resolveComponent("main-title"),
      a = o.resolveComponent("main-description"),
      u = o.resolveComponent("property-object"),
      h = o.resolveComponent("property-array", !0),
      g = o.resolveComponent("property");
    return (
      o.openBlock(),
      o.createElementBlock("div", Wn, [
        o.createElementVNode(
          "div",
          {
            class: o.normalizeClass([
              "property-array valid-control",
              { ["valid-control--error"]: s.getErrorMessage },
            ]),
          },
          [
            o.createVNode(c, { text: t.schema.title }, null, 8, ["text"]),
            o.createVNode(a, { text: t.schema.description }, null, 8, ["text"]),
            o.createElementVNode("ul", Qn, [
              (o.openBlock(!0),
              o.createElementBlock(
                o.Fragment,
                null,
                o.renderList(
                  i.formControl,
                  (_, d) => (
                    o.openBlock(),
                    o.createElementBlock(
                      "li",
                      { key: d, class: "property-array__item" },
                      [
                        o.createElementVNode("div", Yn, [
                          s.isObjectProperty
                            ? (o.openBlock(),
                              o.createBlock(
                                u,
                                {
                                  key: 0,
                                  schema: t.schema.items,
                                  "form-control": i.formControl[d],
                                  "full-form-control": t.fullFormControl[d],
                                  "form-data": t.formData,
                                  "name-prefix": s.getNamePrefixByChild(d),
                                  onOnChangeControl: (p) =>
                                    s.onChangeControl(p, d),
                                },
                                null,
                                8,
                                [
                                  "schema",
                                  "form-control",
                                  "full-form-control",
                                  "form-data",
                                  "name-prefix",
                                  "onOnChangeControl",
                                ]
                              ))
                            : s.isArrayProperty
                            ? (o.openBlock(),
                              o.createBlock(
                                h,
                                {
                                  key: 1,
                                  schema: t.schema.items,
                                  "form-arr": i.formControl[d],
                                  "full-form-control": t.fullFormControl[d],
                                  "form-data": t.formData,
                                  "name-prefix": s.getNamePrefixByChild(d),
                                  onOnChangeControl: (p) =>
                                    s.onChangeControl(p, d),
                                },
                                null,
                                8,
                                [
                                  "schema",
                                  "form-arr",
                                  "full-form-control",
                                  "form-data",
                                  "name-prefix",
                                  "onOnChangeControl",
                                ]
                              ))
                            : (o.openBlock(),
                              o.createBlock(
                                g,
                                {
                                  key: 2,
                                  property: t.schema.items,
                                  value: _,
                                  name: s.getNamePrefixByChild(d),
                                  onOnChangeControl: (p) =>
                                    s.onChangeControl(p, d),
                                },
                                null,
                                8,
                                [
                                  "property",
                                  "value",
                                  "name",
                                  "onOnChangeControl",
                                ]
                              )),
                          o.createElementVNode(
                            "button",
                            {
                              type: "button",
                              class: "property-array__remove-btn",
                              onClick: (p) => s.removeItem(d),
                            },
                            " x ",
                            8,
                            Xn
                          ),
                        ]),
                      ]
                    )
                  )
                ),
                128
              )),
            ]),
            o.createElementVNode("div", Kn, [
              o.createElementVNode(
                "button",
                {
                  type: "button",
                  class: "property-array__btn-add",
                  onClick:
                    n[0] || (n[0] = (..._) => s.addItem && s.addItem(..._)),
                },
                " + "
              ),
            ]),
            s.getErrorMessage
              ? (o.openBlock(),
                o.createElementBlock(
                  "div",
                  Zn,
                  o.toDisplayString(s.getErrorMessage),
                  1
                ))
              : o.createCommentVNode("", !0),
          ],
          2
        ),
      ])
    );
  }
  const tr = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: E(Jn, [
          ["render", er],
          ["__scopeId", "data-v-b13f8667"],
        ]),
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
  return Hn;
});
