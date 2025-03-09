import { j as defineComponent, E as resolveComponent, l as createElementBlock, q as createCommentVNode, u as unref, m as openBlock, B as createVNode, z as toDisplayString, _ as _export_sfc } from "./framework.Ch1t4NEC.js";
const babyPanda = "/assets/babypanda.C2HJlyzd.webp";
const hakkaTulou = "/assets/hakka-tulou.CvDH7hjT.webp";
const pandaFace = "/assets/pandaface.D5q0Tz-p.webp";
const pandaMother = "/assets/pandamother.CRc6By4X.webp";
const redPanda = "/assets/redpanda.Dhy79xbI.webp";
const tigerYulong = "/assets/tiger-yulong.CKfrb4n6.webp";
const photos = {
  babyPanda,
  pandaFace,
  pandaMother,
  redPanda,
  hakkaTulou,
  tigerYulong
};
const _hoisted_1 = {
  key: 0,
  class: "photo"
};
const _hoisted_2 = {
  key: 0,
  class: "desc"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Photo",
  props: {
    name: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_LazyLoadImage = resolveComponent("LazyLoadImage");
      return unref(photos)[__props.name] ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_LazyLoadImage, {
          src: unref(photos)[__props.name],
          alt: __props.alt
        }, null, 8, ["src", "alt"]),
        __props.alt ? (openBlock(), createElementBlock("div", _hoisted_2, toDisplayString(__props.alt), 1)) : createCommentVNode("", true)
      ])) : createCommentVNode("", true);
    };
  }
});
const Photo = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2f2140b1"]]);
export {
  Photo as P
};
