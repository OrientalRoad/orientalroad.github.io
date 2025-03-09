import { u as useLocale, b as useJsonLD, v as getDataByLang, w as data } from "./chunks/theme.BvkY57QZ.js";
import { f as formatDate } from "./chunks/date.BNV-uYUr.js";
import { d as defaultAvatar } from "./chunks/constants.Dbpo2ZGA.js";
import { j as defineComponent, G as useData, f as computed, E as resolveComponent, l as createElementBlock, m as openBlock, B as createVNode, x as createBaseVNode, F as Fragment, y as renderList, D as withCtx, u as unref, A as createTextVNode, z as toDisplayString, _ as _export_sfc } from "./chunks/framework.Ch1t4NEC.js";
const _hoisted_1 = { class: "article" };
const _hoisted_2 = { class: "cover" };
const _hoisted_3 = ["src", "alt"];
const _hoisted_4 = { class: "type" };
const _hoisted_5 = { class: "title" };
const _hoisted_6 = { class: "timestamp" };
const _hoisted_7 = { class: "description" };
const __pageData = JSON.parse('{"title":"China Travel Guides","description":"Explore China with detailed travel guides. Find tips on itineraries, culture, transportation, accommodation, cuisine, and top attractions for a memorable trip.","frontmatter":{"layout":"container","localNav":false,"head":[["link",{"rel":"alternate","href":"https://www.orientalroad.com/guides","hreflang":"x-default"}],["link",{"rel":"alternate","href":"https://www.orientalroad.com/guides","hreflang":"en"}],["link",{"rel":"alternate","href":"https://www.orientalroad.com/ja/guides","hreflang":"ja"}],["link",{"rel":"canonical","href":"https://www.orientalroad.com/guides"}],["meta",{"name":"title","content":"China Travel Guides"}]],"title":"China Travel Guides","description":"Explore China with detailed travel guides. Find tips on itineraries, culture, transportation, accommodation, cuisine, and top attractions for a memorable trip."},"headers":[],"params":{"lang":"en","frontmatter":{"title":"China Travel Guides","description":"Explore China with detailed travel guides. Find tips on itineraries, culture, transportation, accommodation, cuisine, and top attractions for a memorable trip."}},"relativePath":"guides.md","filePath":"[lang]/guides.md","lastUpdated":1741507557000}');
const __default__ = { name: "guides.md" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props) {
    const { localeIndex } = useData();
    const { $t } = useLocale();
    useJsonLD(() => ({
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: $t("Guides"),
          item: `https://www.orientalroad.com${location.pathname}`
        }
      ]
    }));
    const guides2 = computed(() => {
      const guidesData = getDataByLang(data, localeIndex.value);
      return (guidesData == null ? void 0 : guidesData.all) || [];
    });
    return (_ctx, _cache) => {
      const _component_H2 = resolveComponent("H2");
      const _component_Link = resolveComponent("Link");
      const _component_Translate = resolveComponent("Translate");
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_H2, {
          title: "Travel Essentials",
          subtitle: "Things you must know"
        }),
        createBaseVNode("div", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(guides2.value, (article) => {
            var _a;
            return openBlock(), createElementBlock("dl", {
              key: article.url
            }, [
              createBaseVNode("dd", _hoisted_1, [
                createBaseVNode("article", null, [
                  createBaseVNode("div", _hoisted_2, [
                    createVNode(_component_Link, {
                      href: article.url
                    }, {
                      default: withCtx(() => {
                        var _a2, _b;
                        return [
                          createBaseVNode("img", {
                            src: ((_a2 = article.frontmatter) == null ? void 0 : _a2.cover) || unref(defaultAvatar),
                            alt: (_b = article.frontmatter) == null ? void 0 : _b.title
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
                          var _a2;
                          return [
                            createTextVNode(toDisplayString((_a2 = article.frontmatter) == null ? void 0 : _a2.category), 1)
                          ];
                        }),
                        _: 2
                      }, 1024)
                    ]),
                    createBaseVNode("div", _hoisted_5, [
                      createVNode(_component_Link, {
                        href: article.url
                      }, {
                        default: withCtx(() => {
                          var _a2;
                          return [
                            createTextVNode(toDisplayString((_a2 = article.frontmatter) == null ? void 0 : _a2.title), 1)
                          ];
                        }),
                        _: 2
                      }, 1032, ["href"])
                    ]),
                    createBaseVNode("div", _hoisted_6, toDisplayString(unref(formatDate)(article.timestamp)), 1),
                    createBaseVNode("div", _hoisted_7, toDisplayString((_a = article.frontmatter) == null ? void 0 : _a.description), 1)
                  ])
                ])
              ])
            ]);
          }), 128))
        ])
      ]);
    };
  }
});
const guides = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6b86ccea"]]);
export {
  __pageData,
  guides as default
};
