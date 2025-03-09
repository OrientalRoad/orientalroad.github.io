import { j as defineComponent, l as createElementBlock, m as openBlock, a4 as normalizeStyle, x as createBaseVNode, p as renderSlot, _ as _export_sfc } from "./framework.Ch1t4NEC.js";
const _hoisted_1 = { class: "container" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Container",
  props: ["style"],
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "VPDoc",
        style: normalizeStyle(__props.style)
      }, [
        createBaseVNode("div", _hoisted_1, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])
      ], 4);
    };
  }
});
const Container = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e738f03f"]]);
export {
  Container as C
};
