import { j as defineComponent, l as createElementBlock, m as openBlock, _ as _export_sfc, G as useData, E as resolveComponent, x as createBaseVNode, p as renderSlot, A as createTextVNode, q as createCommentVNode, z as toDisplayString, u as unref, B as createVNode, D as withCtx, F as Fragment } from "./framework.Ch1t4NEC.js";
import { h as _sfc_main$5, i as useMobile } from "./theme.BvkY57QZ.js";
const _hoisted_1$2 = ["innerHTML"];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Ad",
  props: {
    html: {
      type: String
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "ad",
        innerHTML: __props.html
      }, null, 8, _hoisted_1$2);
    };
  }
});
const Ad = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-ed168153"]]);
const CarSvg = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20height='24'%20viewBox='0%200%2024%2024'%20width='24'%20xmlns='http://www.w3.org/2000/svg'%20p-id='4530'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cpath%20d='m18.92%206.01c-.2-.59-.76-1.01-1.42-1.01h-11c-.66%200-1.21.42-1.42%201.01l-2.08%205.99v8c0%20.55.45%201%201%201h1c.55%200%201-.45%201-1v-1h12v1c0%20.55.45%201%201%201h1c.55%200%201-.45%201-1v-8zm-12.07.99h10.29l1.08%203.11h-12.45zm12.15%2010h-14v-5h14z'%20/%3e%3ccircle%20cx='7.5'%20cy='14.5'%20r='1.5'%20/%3e%3ccircle%20cx='16.5'%20cy='14.5'%20r='1.5'%20/%3e%3c/svg%3e";
const LocationSvg = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cpath%20d='M12%202C8.13%202%205%205.13%205%209c0%205.25%207%2013%207%2013s7-7.75%207-13c0-3.87-3.13-7-7-7zM7%209c0-2.76%202.24-5%205-5s5%202.24%205%205c0%202.88-2.88%207.19-5%209.88C9.92%2016.21%207%2011.85%207%209z'%20/%3e%3ccircle%20cx='12'%20cy='9'%20r='2.5'%3e%3c/circle%3e%3c/svg%3e";
const _hoisted_1$1 = { class: "airport" };
const _hoisted_2$1 = { class: "item" };
const _hoisted_3$1 = ["src"];
const _hoisted_4$1 = { class: "item" };
const _hoisted_5$1 = ["src"];
const _hoisted_6$1 = { class: "item" };
const _sfc_main$3 = {
  __name: "Airport",
  props: ["name", "duration", "distance", "hour240"],
  setup(__props) {
    const { lang } = useData();
    return (_ctx, _cache) => {
      const _component_Translate = resolveComponent("Translate");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$1, [
          createTextVNode(toDisplayString(__props.name) + " ", 1),
          _cache[4] || (_cache[4] = createBaseVNode("span", { class: "divider" }, null, -1)),
          createBaseVNode("span", _hoisted_2$1, [
            createBaseVNode("img", {
              src: unref(CarSvg),
              width: "14",
              alt: "transportation duration"
            }, null, 8, _hoisted_3$1),
            createBaseVNode("span", null, [
              createTextVNode(toDisplayString(__props.duration) + " ", 1),
              createBaseVNode("span", null, [
                createVNode(_component_Translate, null, {
                  default: withCtx(() => _cache[0] || (_cache[0] = [
                    createTextVNode(" min")
                  ])),
                  _: 1
                })
              ])
            ])
          ]),
          _cache[5] || (_cache[5] = createBaseVNode("span", { class: "divider" }, null, -1)),
          createBaseVNode("span", _hoisted_4$1, [
            createBaseVNode("img", {
              src: unref(LocationSvg),
              width: "14",
              alt: "transportation distance"
            }, null, 8, _hoisted_5$1),
            createBaseVNode("span", null, [
              createTextVNode(toDisplayString(__props.distance) + " ", 1),
              createBaseVNode("span", null, [
                createVNode(_component_Translate, null, {
                  default: withCtx(() => _cache[1] || (_cache[1] = [
                    createTextVNode(" km")
                  ])),
                  _: 1
                })
              ])
            ])
          ]),
          __props.hour240 && unref(lang) !== "ja-JP" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            _cache[3] || (_cache[3] = createBaseVNode("span", { class: "divider" }, null, -1)),
            createBaseVNode("span", _hoisted_6$1, [
              createVNode(_sfc_main$5, { alt: "Support 240-Hour Transit Visa" }),
              createVNode(_component_Translate, null, {
                default: withCtx(() => _cache[2] || (_cache[2] = [
                  createTextVNode("240-Hour Transit Visa")
                ])),
                _: 1
              })
            ])
          ], 64)) : createCommentVNode("", true)
        ]),
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 64);
    };
  }
};
const Airport = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-db9ef13d"]]);
const _sfc_main$2 = {
  __name: "MobileOnly",
  setup(__props) {
    const { isMobile } = useMobile();
    return (_ctx, _cache) => {
      return unref(isMobile) ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("", true);
    };
  }
};
const _sfc_main$1 = {
  __name: "PCOnly",
  setup(__props) {
    const { isMobile } = useMobile();
    return (_ctx, _cache) => {
      return !unref(isMobile) ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("", true);
    };
  }
};
const _sfc_main = {};
const _hoisted_1 = { class: "wrapper" };
const _hoisted_2 = { class: "item peak" };
const _hoisted_3 = { class: "detail" };
const _hoisted_4 = { class: "label" };
const _hoisted_5 = { class: "title" };
const _hoisted_6 = { class: "desc" };
const _hoisted_7 = { class: "item off" };
const _hoisted_8 = { class: "detail" };
const _hoisted_9 = { class: "label" };
const _hoisted_10 = { class: "title" };
const _hoisted_11 = { class: "desc" };
function _sfc_render(_ctx, _cache) {
  const _component_Translate = resolveComponent("Translate");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("div", _hoisted_4, [
          createVNode(_component_Translate, null, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("Peak Season")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_5, [
          renderSlot(_ctx.$slots, "peak-title", {}, void 0, true)
        ]),
        createBaseVNode("div", _hoisted_6, [
          renderSlot(_ctx.$slots, "peak-desc", {}, void 0, true)
        ])
      ])
    ]),
    createBaseVNode("div", _hoisted_7, [
      createBaseVNode("div", _hoisted_8, [
        createBaseVNode("div", _hoisted_9, [
          createVNode(_component_Translate, null, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("Off-season")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_10, [
          renderSlot(_ctx.$slots, "off-title", {}, void 0, true)
        ]),
        createBaseVNode("div", _hoisted_11, [
          renderSlot(_ctx.$slots, "off-desc", {}, void 0, true)
        ])
      ])
    ])
  ]);
}
const Seasons = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-712289bd"]]);
export {
  Airport as A,
  Seasons as S,
  _sfc_main$1 as _,
  Ad as a,
  _sfc_main$2 as b
};
