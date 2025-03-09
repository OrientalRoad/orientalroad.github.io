import { j as defineComponent, G as useData, f as computed, E as resolveComponent, l as createElementBlock, m as openBlock, F as Fragment, q as createCommentVNode, x as createBaseVNode, y as renderList, v as normalizeClass, u as unref, B as createVNode, D as withCtx, z as toDisplayString, A as createTextVNode, _ as _export_sfc } from "./framework.Ch1t4NEC.js";
import { d as defaultAvatar } from "./constants.Dbpo2ZGA.js";
import { c as attractionsAssets } from "./theme.BvkY57QZ.js";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { class: "container" };
const _hoisted_3 = { class: "cover" };
const _hoisted_4 = { class: "title" };
const _hoisted_5 = { key: 0 };
const _hoisted_6 = { class: "type" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AttractionsList",
  props: {
    attractions: {
      type: Array,
      default: []
    },
    city: {
      type: String,
      required: true
    },
    limit: {
      type: Number
    },
    showMap: {
      type: Boolean,
      default: false
    },
    exclude: {
      type: Array
    }
  },
  setup(__props) {
    const { localeIndex, frontmatter } = useData();
    const attractions = computed(() => {
      var _a;
      let result = (_a = __props.attractions) == null ? void 0 : _a.filter((attraction) => attraction.city === __props.city);
      if (Array.isArray(__props.exclude)) {
        result = result.filter((a) => !__props.exclude.includes(a.name));
      }
      if (typeof __props.limit === "number") {
        result = result.slice(0, __props.limit);
      }
      return result;
    });
    const points = computed(() => {
      return attractions.value.filter((a) => typeof (a == null ? void 0 : a.location) === "string").map((a) => `${a.location},${a.nameLocale[localeIndex.value]}`).join("|");
    });
    return (_ctx, _cache) => {
      const _component_LazyLoadImage = resolveComponent("LazyLoadImage");
      const _component_Link = resolveComponent("Link");
      const _component_Translate = resolveComponent("Translate");
      return openBlock(), createElementBlock(Fragment, null, [
        __props.showMap && points.value.length ? (openBlock(), createElementBlock("div", _hoisted_1)) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(attractions.value, (attraction) => {
            return openBlock(), createElementBlock("dl", {
              key: attraction.name
            }, [
              createBaseVNode("dd", {
                class: normalizeClass(["attraction", { small: unref(frontmatter).layout === "city" || unref(frontmatter).layout === "attraction" }])
              }, [
                createBaseVNode("article", null, [
                  createBaseVNode("div", _hoisted_3, [
                    createVNode(_component_Link, {
                      href: `/${__props.city.toLowerCase()}/attractions/${attraction.link}`
                    }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode(_component_LazyLoadImage, {
                            src: ((_a = unref(attractionsAssets)[attraction.name]) == null ? void 0 : _a.avatar) || unref(defaultAvatar),
                            alt: attraction == null ? void 0 : attraction.name
                          }, null, 8, ["src", "alt"])
                        ];
                      }),
                      _: 2
                    }, 1032, ["href"])
                  ]),
                  createBaseVNode("div", null, [
                    createBaseVNode("div", _hoisted_4, [
                      createVNode(_component_Link, {
                        href: `/${__props.city.toLowerCase()}/attractions/${attraction.link}`
                      }, {
                        default: withCtx(() => {
                          var _a, _b;
                          return [
                            createBaseVNode("div", null, toDisplayString((_a = attraction == null ? void 0 : attraction.nameLocale) == null ? void 0 : _a[unref(localeIndex)]), 1),
                            (attraction == null ? void 0 : attraction.distance) ? (openBlock(), createElementBlock("div", _hoisted_5, [
                              createTextVNode(toDisplayString(attraction.distance) + " ", 1),
                              createBaseVNode("span", null, [
                                createVNode(_component_Translate, null, {
                                  default: withCtx(() => _cache[0] || (_cache[0] = [
                                    createTextVNode(" km away")
                                  ])),
                                  _: 1
                                })
                              ])
                            ])) : createCommentVNode("", true),
                            createBaseVNode("div", _hoisted_6, toDisplayString((_b = attraction == null ? void 0 : attraction.introduce) == null ? void 0 : _b[unref(localeIndex)]), 1)
                          ];
                        }),
                        _: 2
                      }, 1032, ["href"])
                    ])
                  ])
                ])
              ], 2)
            ]);
          }), 128))
        ])
      ], 64);
    };
  }
});
const AttractionsList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-142e0b87"]]);
export {
  AttractionsList as A
};
