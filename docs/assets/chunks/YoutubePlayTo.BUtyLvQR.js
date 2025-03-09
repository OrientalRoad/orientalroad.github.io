import { q as attractions, c as attractionsAssets, r as eventBus } from "./theme.BvkY57QZ.js";
import { j as defineComponent, G as useData, f as computed, E as resolveComponent, l as createElementBlock, m as openBlock, q as createCommentVNode, x as createBaseVNode, B as createVNode, D as withCtx, u as unref, A as createTextVNode, z as toDisplayString, _ as _export_sfc } from "./framework.Ch1t4NEC.js";
const getAttractions = () => attractions.map((attraction, i) => {
  return {
    ...attraction,
    ...attractionsAssets[attraction.name] || {}
  };
});
const _hoisted_1 = { class: "info custom-block wrapper" };
const _hoisted_2 = {
  key: 0,
  class: "cover"
};
const _hoisted_3 = ["src", "alt"];
const _hoisted_4 = { class: "container" };
const _hoisted_5 = { class: "link-text" };
const _hoisted_6 = { class: "description" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AttractionCard",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    var _a, _b, _c;
    const { localeIndex } = useData();
    const attraction = computed(() => getAttractions().find((attr) => attr.name === __props.name));
    const link = `/${(_b = (_a = attraction.value) == null ? void 0 : _a.city) == null ? void 0 : _b.toLowerCase()}/attractions/${(_c = attraction.value) == null ? void 0 : _c.link}`;
    return (_ctx, _cache) => {
      var _a2;
      const _component_Link = resolveComponent("Link");
      const _component_Translate = resolveComponent("Translate");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        ((_a2 = attraction.value) == null ? void 0 : _a2.avatar) ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createVNode(_component_Link, { href: link }, {
            default: withCtx(() => {
              var _a3, _b2;
              return [
                createBaseVNode("img", {
                  src: (_a3 = attraction.value) == null ? void 0 : _a3.avatar,
                  alt: (_b2 = attraction.value) == null ? void 0 : _b2.nameLocale[unref(localeIndex)]
                }, null, 8, _hoisted_3)
              ];
            }),
            _: 1
          })
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_4, [
          createVNode(_component_Link, { href: link }, {
            default: withCtx(() => {
              var _a3;
              return [
                createBaseVNode("span", _hoisted_5, [
                  createVNode(_component_Translate, null, {
                    default: withCtx(() => _cache[0] || (_cache[0] = [
                      createTextVNode("Attraction")
                    ])),
                    _: 1
                  }),
                  createTextVNode(": " + toDisplayString((_a3 = attraction.value) == null ? void 0 : _a3.nameLocale[unref(localeIndex)]), 1)
                ])
              ];
            }),
            _: 1
          }),
          createBaseVNode("div", _hoisted_6, [
            createVNode(_component_Link, { href: link }, {
              default: withCtx(() => {
                var _a3;
                return [
                  createTextVNode(toDisplayString((_a3 = attraction.value) == null ? void 0 : _a3.introduce[unref(localeIndex)]), 1)
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
const AttractionCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-941e530c"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "YoutubePlayTo",
  props: {
    to: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const { localeIndex } = useData();
    const timeToSeconds = (time) => {
      const [seconds = 0, minutes = 0, hours = 0] = time.split(":").map(Number).reverse();
      return hours * 3600 + minutes * 60 + seconds;
    };
    const render = {
      root: () => `Watch from ${__props.to}`,
      ja: () => `${__props.to}から視聴開始`
    };
    const onPlayTo = () => {
      eventBus.$emit("youtube-play-to", timeToSeconds(__props.to));
    };
    return (_ctx, _cache) => {
      var _a, _b;
      return openBlock(), createElementBlock("a", { onClick: onPlayTo }, toDisplayString(((_a = render == null ? void 0 : render[unref(localeIndex)]) == null ? void 0 : _a.call(render)) || ((_b = render == null ? void 0 : render.root) == null ? void 0 : _b.call(render))), 1);
    };
  }
});
const YoutubePlayTo = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-60aa130c"]]);
export {
  AttractionCard as A,
  YoutubePlayTo as Y
};
