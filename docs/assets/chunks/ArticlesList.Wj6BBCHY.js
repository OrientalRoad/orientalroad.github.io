import { j as defineComponent, G as useData, f as computed, E as resolveComponent, l as createElementBlock, m as openBlock, F as Fragment, y as renderList, x as createBaseVNode, B as createVNode, D as withCtx, u as unref, K as withBase, A as createTextVNode, z as toDisplayString, _ as _export_sfc } from "./framework.Ch1t4NEC.js";
import { g as getArticles } from "./index.DfW4spIt.js";
import { d as defaultAvatar } from "./constants.Dbpo2ZGA.js";
const _hoisted_1 = { class: "article" };
const _hoisted_2 = { class: "cover" };
const _hoisted_3 = ["src", "alt"];
const _hoisted_4 = { class: "type" };
const _hoisted_5 = { class: "title" };
const _hoisted_6 = { class: "description" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ArticlesList",
  props: {
    city: {
      type: String
    },
    attraction: {
      type: String
    },
    limit: {
      type: Number
    }
  },
  setup(__props) {
    const { localeIndex } = useData();
    const articles = computed(() => {
      let result = getArticles().reverse();
      if (typeof __props.city === "string") {
        result = result.filter((r) => {
          var _a;
          return (_a = r.city) == null ? void 0 : _a.includes(__props.city);
        });
      }
      if (typeof __props.attraction === "string") {
        result = result.filter((r) => {
          var _a;
          return (_a = r.attraction) == null ? void 0 : _a.includes(__props.attraction);
        });
      }
      if (typeof __props.limit === "number") {
        result = result.slice(0, __props.limit);
      }
      return result;
    });
    return (_ctx, _cache) => {
      const _component_Link = resolveComponent("Link");
      const _component_Translate = resolveComponent("Translate");
      return openBlock(), createElementBlock("div", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(articles.value, (article) => {
          return openBlock(), createElementBlock("dl", {
            key: article.link
          }, [
            createBaseVNode("dd", _hoisted_1, [
              createBaseVNode("article", null, [
                createBaseVNode("div", _hoisted_2, [
                  createVNode(_component_Link, {
                    href: `/articles/${article.link}`
                  }, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        createBaseVNode("img", {
                          src: (article == null ? void 0 : article.avatar) ? unref(withBase)(article == null ? void 0 : article.avatar) : unref(defaultAvatar),
                          alt: (_a = article == null ? void 0 : article.title) == null ? void 0 : _a[unref(localeIndex)]
                        }, null, 8, _hoisted_3)
                      ];
                    }),
                    _: 2
                  }, 1032, ["href"])
                ]),
                createBaseVNode("div", null, [
                  createBaseVNode("div", _hoisted_4, [
                    createVNode(_component_Translate, null, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createTextVNode(toDisplayString((_a = article == null ? void 0 : article.category) == null ? void 0 : _a[0]), 1)
                        ];
                      }),
                      _: 2
                    }, 1024)
                  ]),
                  createBaseVNode("div", _hoisted_5, [
                    createVNode(_component_Link, {
                      href: `/articles/${article.link}`
                    }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createTextVNode(toDisplayString((_a = article == null ? void 0 : article.title) == null ? void 0 : _a[unref(localeIndex)]), 1)
                        ];
                      }),
                      _: 2
                    }, 1032, ["href"])
                  ]),
                  createBaseVNode("div", _hoisted_6, [
                    createVNode(_component_Link, {
                      href: `/articles/${article.link}`
                    }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createTextVNode(toDisplayString((_a = article == null ? void 0 : article.description) == null ? void 0 : _a[unref(localeIndex)]), 1)
                        ];
                      }),
                      _: 2
                    }, 1032, ["href"])
                  ])
                ])
              ])
            ])
          ]);
        }), 128))
      ]);
    };
  }
});
const ArticlesList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-53fe450d"]]);
export {
  ArticlesList as A
};
