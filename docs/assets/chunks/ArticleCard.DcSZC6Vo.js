import { g as getArticles } from "./index.DfW4spIt.js";
import { j as defineComponent, G as useData, f as computed, E as resolveComponent, l as createElementBlock, m as openBlock, x as createBaseVNode, B as createVNode, D as withCtx, u as unref, A as createTextVNode, z as toDisplayString, _ as _export_sfc } from "./framework.Ch1t4NEC.js";
const _hoisted_1 = { class: "info custom-block wrapper" };
const _hoisted_2 = { class: "cover" };
const _hoisted_3 = ["src", "alt"];
const _hoisted_4 = { class: "container" };
const _hoisted_5 = { class: "link-text" };
const _hoisted_6 = { class: "description" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ArticleCard",
  props: {
    link: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const { localeIndex } = useData();
    const article = computed(() => getArticles().find((arti) => arti.link === __props.link));
    const url = `/articles/${__props.link}`;
    return (_ctx, _cache) => {
      const _component_Link = resolveComponent("Link");
      const _component_Translate = resolveComponent("Translate");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_Link, { href: url }, {
            default: withCtx(() => {
              var _a, _b;
              return [
                createBaseVNode("img", {
                  src: (_a = article.value) == null ? void 0 : _a.avatar,
                  alt: (_b = article.value) == null ? void 0 : _b.title[unref(localeIndex)]
                }, null, 8, _hoisted_3)
              ];
            }),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_4, [
          createVNode(_component_Link, { href: url }, {
            default: withCtx(() => {
              var _a;
              return [
                createBaseVNode("span", _hoisted_5, [
                  createVNode(_component_Translate, null, {
                    default: withCtx(() => _cache[0] || (_cache[0] = [
                      createTextVNode("Article")
                    ])),
                    _: 1
                  }),
                  createTextVNode(": " + toDisplayString((_a = article.value) == null ? void 0 : _a.title[unref(localeIndex)]), 1)
                ])
              ];
            }),
            _: 1
          }),
          createBaseVNode("div", _hoisted_6, [
            createVNode(_component_Link, { href: url }, {
              default: withCtx(() => {
                var _a, _b;
                return [
                  createTextVNode(toDisplayString((_b = (_a = article.value) == null ? void 0 : _a.introduce) == null ? void 0 : _b[unref(localeIndex)]), 1)
                ];
              }),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
});
const ArticleCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-82b3fc51"]]);
export {
  ArticleCard as A
};
