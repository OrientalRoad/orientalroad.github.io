import { _ as _sfc_main$1 } from "./theme.BvkY57QZ.js";
import { _ as _export_sfc, r as ref, k as useSlots, o as onMounted, O as onUnmounted, l as createElementBlock, m as openBlock, q as createCommentVNode, x as createBaseVNode, u as unref, p as renderSlot, a4 as normalizeStyle, B as createVNode, A as createTextVNode } from "./framework.Ch1t4NEC.js";
const _hoisted_1 = {
  key: 0,
  class: "cover"
};
const _hoisted_2 = ["id"];
const _hoisted_3 = { class: "container" };
const _hoisted_4 = ["href"];
const _hoisted_5 = { class: "link-text" };
const _hoisted_6 = { class: "author" };
const _sfc_main = {
  __name: "YouTube",
  props: {
    link: {
      type: String,
      required: true
    },
    autoStart: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    var _a;
    const player = ref();
    const onPlay = ref(false);
    const props = __props;
    const slots = useSlots();
    const [url, param] = props.link.split("?");
    const [videoId] = url.split("/").slice(-1);
    const startSeconds = (_a = param.split("&").map((p) => p.split("=")).find((p) => p[0] === "t")) == null ? void 0 : _a[1];
    onMounted(() => {
      if (props.autoStart === true) {
        play();
      }
    });
    onUnmounted(() => {
      var _a2, _b;
      (_b = (_a2 = player == null ? void 0 : player.value) == null ? void 0 : _a2.destroy) == null ? void 0 : _b.call(_a2);
    });
    const loadApi = (cb) => {
      if (window.YT) return cb();
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      tag.onerror = () => window.open(props.link, "_blank", "noopener,noreferrer");
      document.body.appendChild(tag);
      window.onYouTubeIframeAPIReadyCallbacks = [
        ...window.onYouTubeIframeAPIReadyCallbacks || [],
        cb
      ];
      window.onYouTubeIframeAPIReady = () => {
        window.onYouTubeIframeAPIReadyCallbacks.forEach((cb2) => cb2());
        delete window.onYouTubeIframeAPIReadyCallbacks;
        delete window.onYouTubeIframeAPIReady;
      };
    };
    const loadVideo = () => {
      if (onPlay.value === true) return;
      loadApi(() => {
        onPlay.value = true;
        player.value = new YT.Player(videoId, {
          width: "100%",
          playerVars: {
            playsinline: 1
          },
          events: {
            onReady: () => {
              player.value.loadVideoById({ videoId, startSeconds });
            }
          }
        });
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "info custom-block wrapper",
        style: normalizeStyle({ flexWrap: onPlay.value ? "wrap" : "nowrap" })
      }, [
        !!unref(slots).cover && !onPlay.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
          createBaseVNode("a", {
            onClick: loadVideo,
            class: "VPLink link VPNavScreenMenuGroupLink cover"
          }, [
            renderSlot(_ctx.$slots, "cover", {}, void 0, true)
          ])
        ])) : createCommentVNode("", true),
        createBaseVNode("div", {
          id: unref(videoId),
          style: normalizeStyle({ marginBottom: onPlay.value ? "8px" : "0" })
        }, null, 12, _hoisted_2),
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("a", {
            class: "VPLink link vp-external-link-icon VPNavScreenMenuGroupLink",
            href: props.link,
            target: "_blank",
            rel: "noreferrer"
          }, [
            createVNode(_sfc_main$1, { fill: "#ff0000" }),
            createBaseVNode("span", _hoisted_5, [
              renderSlot(_ctx.$slots, "title", {}, void 0, true)
            ]),
            createBaseVNode("span", _hoisted_6, [
              _cache[0] || (_cache[0] = createTextVNode("@")),
              renderSlot(_ctx.$slots, "author", {}, void 0, true)
            ])
          ], 8, _hoisted_4),
          createBaseVNode("div", null, [
            renderSlot(_ctx.$slots, "description", {}, void 0, true)
          ])
        ])
      ], 4);
    };
  }
};
const YouTube = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d76cd4ce"]]);
export {
  YouTube as Y
};
