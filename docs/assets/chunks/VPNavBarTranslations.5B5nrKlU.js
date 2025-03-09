import { j as defineComponent, o as onMounted, W as onBeforeUnmount, C as createBlock, m as openBlock, B as createVNode, H as Transition, D as withCtx, l as createElementBlock, q as createCommentVNode, x as createBaseVNode, Y as withModifiers, a4 as normalizeStyle, p as renderSlot, T as Teleport, _ as _export_sfc, G as useData, r as ref, f as computed, z as toDisplayString, u as unref, F as Fragment, y as renderList, v as normalizeClass } from "./framework.Ch1t4NEC.js";
import { K as onKeyStroke, L as useCurrency, u as useLocale, O as langRoot, Q as normalizeLink, U as TabGroup, W as TabPanel } from "./theme.BvkY57QZ.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Modal",
  props: {
    width: {
      type: Number,
      default: 500
    },
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const closeModal = () => {
      emit("update:modelValue", false);
    };
    let stopListening;
    onMounted(() => {
      stopListening = onKeyStroke("Escape", (event) => {
        event.preventDefault();
        closeModal();
      });
    });
    onBeforeUnmount(() => {
      stopListening == null ? void 0 : stopListening();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, { to: "body" }, [
        createVNode(Transition, { name: "modal" }, {
          default: withCtx(() => [
            __props.modelValue ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "modal-overlay",
              onClick: closeModal
            }, [
              createBaseVNode("div", {
                class: "modal",
                style: normalizeStyle({ width: `${__props.width}px` }),
                onClick: _cache[0] || (_cache[0] = withModifiers(() => {
                }, ["stop"]))
              }, [
                renderSlot(_ctx.$slots, "default", {}, void 0, true)
              ], 4)
            ])) : createCommentVNode("", true)
          ]),
          _: 3
        })
      ]);
    };
  }
});
const Modal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5b16e06b"]]);
function getUserBrowserLanguage() {
  const primaryLanguage = navigator.language;
  const allLanguages = navigator.languages || [primaryLanguage];
  return { primary: primaryLanguage, all: allLanguages };
}
const _hoisted_1 = { class: "items" };
const _hoisted_2 = { class: "title" };
const _hoisted_3 = { class: "label" };
const _hoisted_4 = { class: "container" };
const _hoisted_5 = ["href", "hreflang", "onClick"];
const _hoisted_6 = { class: "region" };
const _hoisted_7 = { class: "language" };
const _hoisted_8 = { class: "label" };
const _hoisted_9 = { class: "container" };
const _hoisted_10 = ["href", "hreflang", "onClick"];
const _hoisted_11 = { class: "region" };
const _hoisted_12 = { class: "language" };
const _hoisted_13 = { class: "label" };
const _hoisted_14 = { class: "container" };
const _hoisted_15 = ["onClick"];
const _hoisted_16 = { class: "region" };
const _hoisted_17 = { class: "language" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarTranslations",
  setup(__props) {
    const { site, localeIndex, page, theme, hash } = useData();
    const { currency, currencies } = useCurrency();
    const { $t } = useLocale();
    const isModalVisible = ref(false);
    const { all } = getUserBrowserLanguage();
    const localeIndexCurrent = computed(
      () => localeIndex.value === "root" ? langRoot : localeIndex.value
    );
    const currentLang = computed(() => {
      var _a, _b;
      return {
        label: (_a = site.value.locales[localeIndex.value]) == null ? void 0 : _a.label,
        link: ((_b = site.value.locales[localeIndex.value]) == null ? void 0 : _b.link) || (localeIndex.value === "root" ? "/" : `/${localeIndex.value}/`)
      };
    });
    const localeLinks = computed(
      () => Object.entries(site.value.locales).flatMap(([key, value]) => ({
        lang: key === "root" ? langRoot : key,
        region: value.region,
        currency: value.currency,
        text: value.label,
        link: normalizeLink(
          value.link || (key === "root" ? "/" : `/${key}/`),
          theme.value.i18nRouting !== false,
          page.value.relativePath.slice(currentLang.value.link.length - 1),
          !site.value.cleanUrls
        ) + hash.value
      }))
    );
    const suggestedLocaleLinks = computed(() => {
      const links = [];
      localeLinks.value.forEach((locale) => {
        const i = all.indexOf(locale.lang);
        if (i > -1) {
          links[i] = locale;
        }
      });
      return links.filter(Boolean);
    });
    const selectLocaleLinks = computed(() => {
      return localeLinks.value.filter((locale) => !all.includes(locale.lang));
    });
    const openModal = () => {
      isModalVisible.value = true;
    };
    const closeModal = () => {
      isModalVisible.value = false;
    };
    const updateModal = (visible) => {
      isModalVisible.value = visible;
    };
    const updateCurrency = (shortname) => () => {
      currency.value = shortname;
      closeModal();
    };
    const updateLocale = (locale) => () => {
      if (locale.currency) {
        currency.value = locale.currency;
      }
      closeModal();
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "VPNavBarTranslations",
        onClick: openModal
      }, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("span", _hoisted_2, [
            createBaseVNode("span", null, toDisplayString(currentLang.value.label), 1),
            _cache[1] || (_cache[1] = createBaseVNode("span", { class: "divider" }, null, -1)),
            createBaseVNode("span", null, toDisplayString(unref(currency)), 1)
          ]),
          createVNode(Modal, {
            modelValue: isModalVisible.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isModalVisible.value = $event),
            "onUpdate:visible": updateModal,
            width: 550
          }, {
            default: withCtx(() => [
              createVNode(TabGroup, null, {
                default: withCtx(() => [
                  createVNode(TabPanel, {
                    title: unref($t)("Region and Language")
                  }, {
                    default: withCtx(() => [
                      suggestedLocaleLinks.value.length > 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                        createBaseVNode("div", _hoisted_3, toDisplayString(unref($t)("Suggested region and language")), 1),
                        createBaseVNode("div", _hoisted_4, [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(suggestedLocaleLinks.value, (locale) => {
                            return openBlock(), createElementBlock("a", {
                              key: locale.link,
                              href: localeIndexCurrent.value === locale.lang ? void 0 : locale.link,
                              hreflang: locale.lang,
                              onClick: localeIndexCurrent.value === locale.lang ? void 0 : updateLocale(locale)
                            }, [
                              unref(all).includes(locale.lang) ? (openBlock(), createElementBlock("div", {
                                key: 0,
                                class: normalizeClass(["button", { active: localeIndexCurrent.value === locale.lang }])
                              }, [
                                createBaseVNode("div", _hoisted_6, toDisplayString(locale.region), 1),
                                createBaseVNode("div", _hoisted_7, toDisplayString(locale.text), 1)
                              ], 2)) : createCommentVNode("", true)
                            ], 8, _hoisted_5);
                          }), 128))
                        ])
                      ], 64)) : createCommentVNode("", true),
                      selectLocaleLinks.value.length > 0 ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                        createBaseVNode("div", _hoisted_8, toDisplayString(unref($t)("Choose a region and language")), 1),
                        createBaseVNode("div", _hoisted_9, [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(selectLocaleLinks.value, (locale) => {
                            return openBlock(), createElementBlock("a", {
                              key: locale.link,
                              href: localeIndexCurrent.value === locale.lang ? void 0 : locale.link,
                              hreflang: locale.lang,
                              onClick: localeIndexCurrent.value === locale.lang ? void 0 : updateLocale(locale)
                            }, [
                              createBaseVNode("div", {
                                class: normalizeClass(["button", { active: localeIndexCurrent.value === locale.lang }])
                              }, [
                                createBaseVNode("div", _hoisted_11, toDisplayString(locale.region), 1),
                                createBaseVNode("div", _hoisted_12, toDisplayString(locale.text), 1)
                              ], 2)
                            ], 8, _hoisted_10);
                          }), 128))
                        ])
                      ], 64)) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }, 8, ["title"]),
                  createVNode(TabPanel, {
                    title: unref($t)("Currency")
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_13, toDisplayString(unref($t)("Choose a currency")), 1),
                      createBaseVNode("div", _hoisted_14, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(currencies), (cur, shortname) => {
                          return openBlock(), createElementBlock("a", {
                            key: cur.name,
                            onClick: unref(currency) === shortname ? void 0 : updateCurrency(shortname)
                          }, [
                            createBaseVNode("div", {
                              class: normalizeClass(["button", { active: unref(currency) === shortname }])
                            }, [
                              createBaseVNode("div", _hoisted_16, toDisplayString(cur.name), 1),
                              createBaseVNode("div", _hoisted_17, toDisplayString(shortname), 1)
                            ], 2)
                          ], 8, _hoisted_15);
                        }), 128))
                      ])
                    ]),
                    _: 1
                  }, 8, ["title"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ])
      ]);
    };
  }
});
const VPNavBarTranslations = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bf300615"]]);
export {
  VPNavBarTranslations as default
};
