/* empty css                                                     */
import { l as createElementBlock, m as openBlock, p as renderSlot } from "./framework.Ch1t4NEC.js";
const _hoisted_1 = { class: "description-container" };
const _sfc_main = {
  __name: "Description",
  props: {
    col: {
      type: Number,
      default: 3
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
};
export {
  _sfc_main as _
};
