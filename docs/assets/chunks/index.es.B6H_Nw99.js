import { i as useMobile } from "./theme.BvkY57QZ.js";
import { _ as _export_sfc, r as ref, o as onMounted, O as onUnmounted, l as createElementBlock, m as openBlock, x as createBaseVNode, p as renderSlot, a4 as normalizeStyle, v as normalizeClass, j as defineComponent, G as useData, w as watch, E as resolveComponent, B as createVNode, D as withCtx, A as createTextVNode, aq as mergeModels, ar as useModel, f as computed, W as onBeforeUnmount, C as createBlock, q as createCommentVNode, as as withDirectives, z as toDisplayString, F as Fragment, y as renderList, at as vModelText, T as Teleport, V as withKeys } from "./framework.Ch1t4NEC.js";
const _sfc_main$1 = {
  __name: "Float",
  props: {
    threshold: {
      type: Number,
      default: 64
    },
    className: {
      type: String
    }
  },
  setup(__props) {
    const { isMobile } = useMobile();
    const headerRef = ref(null);
    const isFixed = ref(false);
    const width = ref();
    const height = ref();
    const handleScroll = () => {
      if (headerRef.value) {
        const parent = headerRef.value.parentNode;
        const rect = parent.getBoundingClientRect();
        if (!isMobile.value) isFixed.value = rect.top <= __props.threshold;
        width.value = rect.width;
        height.value = rect.height;
      }
    };
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass({ class: !!__props.className })
      }, [
        createBaseVNode("div", {
          class: normalizeClass(["fixed-header", { fixed: isFixed.value }]),
          style: normalizeStyle(
            isFixed.value ? { top: `${__props.threshold}px`, height: `${height.value}px`, width: `${width.value}px` } : { height: `${height.value}px`, width: `${width.value}px` }
          ),
          ref_key: "headerRef",
          ref: headerRef
        }, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 6)
      ], 2);
    };
  }
};
const Float = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-dc691c78"]]);
function __awaiter(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
}
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var fastDeepEqual = function equal(a, b) {
  if (a === b) return true;
  if (a && b && typeof a == "object" && typeof b == "object") {
    if (a.constructor !== b.constructor) return false;
    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0; )
        if (!equal(a[i], b[i])) return false;
      return true;
    }
    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;
    for (i = length; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    for (i = length; i-- !== 0; ) {
      var key = keys[i];
      if (!equal(a[key], b[key])) return false;
    }
    return true;
  }
  return a !== a && b !== b;
};
var isEqual = /* @__PURE__ */ getDefaultExportFromCjs(fastDeepEqual);
const DEFAULT_ID = "__googleMapsScriptId";
var LoaderStatus;
(function(LoaderStatus2) {
  LoaderStatus2[LoaderStatus2["INITIALIZED"] = 0] = "INITIALIZED";
  LoaderStatus2[LoaderStatus2["LOADING"] = 1] = "LOADING";
  LoaderStatus2[LoaderStatus2["SUCCESS"] = 2] = "SUCCESS";
  LoaderStatus2[LoaderStatus2["FAILURE"] = 3] = "FAILURE";
})(LoaderStatus || (LoaderStatus = {}));
class Loader {
  /**
   * Creates an instance of Loader using [[LoaderOptions]]. No defaults are set
   * using this library, instead the defaults are set by the Google Maps
   * JavaScript API server.
   *
   * ```
   * const loader = Loader({apiKey, version: 'weekly', libraries: ['places']});
   * ```
   */
  constructor({ apiKey, authReferrerPolicy, channel, client, id = DEFAULT_ID, language, libraries = [], mapIds, nonce, region, retries = 3, url = "https://maps.googleapis.com/maps/api/js", version }) {
    this.callbacks = [];
    this.done = false;
    this.loading = false;
    this.errors = [];
    this.apiKey = apiKey;
    this.authReferrerPolicy = authReferrerPolicy;
    this.channel = channel;
    this.client = client;
    this.id = id || DEFAULT_ID;
    this.language = language;
    this.libraries = libraries;
    this.mapIds = mapIds;
    this.nonce = nonce;
    this.region = region;
    this.retries = retries;
    this.url = url;
    this.version = version;
    if (Loader.instance) {
      if (!isEqual(this.options, Loader.instance.options)) {
        throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(Loader.instance.options)}`);
      }
      return Loader.instance;
    }
    Loader.instance = this;
  }
  get options() {
    return {
      version: this.version,
      apiKey: this.apiKey,
      channel: this.channel,
      client: this.client,
      id: this.id,
      libraries: this.libraries,
      language: this.language,
      region: this.region,
      mapIds: this.mapIds,
      nonce: this.nonce,
      url: this.url,
      authReferrerPolicy: this.authReferrerPolicy
    };
  }
  get status() {
    if (this.errors.length) {
      return LoaderStatus.FAILURE;
    }
    if (this.done) {
      return LoaderStatus.SUCCESS;
    }
    if (this.loading) {
      return LoaderStatus.LOADING;
    }
    return LoaderStatus.INITIALIZED;
  }
  get failed() {
    return this.done && !this.loading && this.errors.length >= this.retries + 1;
  }
  /**
   * CreateUrl returns the Google Maps JavaScript API script url given the [[LoaderOptions]].
   *
   * @ignore
   * @deprecated
   */
  createUrl() {
    let url = this.url;
    url += `?callback=__googleMapsCallback&loading=async`;
    if (this.apiKey) {
      url += `&key=${this.apiKey}`;
    }
    if (this.channel) {
      url += `&channel=${this.channel}`;
    }
    if (this.client) {
      url += `&client=${this.client}`;
    }
    if (this.libraries.length > 0) {
      url += `&libraries=${this.libraries.join(",")}`;
    }
    if (this.language) {
      url += `&language=${this.language}`;
    }
    if (this.region) {
      url += `&region=${this.region}`;
    }
    if (this.version) {
      url += `&v=${this.version}`;
    }
    if (this.mapIds) {
      url += `&map_ids=${this.mapIds.join(",")}`;
    }
    if (this.authReferrerPolicy) {
      url += `&auth_referrer_policy=${this.authReferrerPolicy}`;
    }
    return url;
  }
  deleteScript() {
    const script = document.getElementById(this.id);
    if (script) {
      script.remove();
    }
  }
  /**
   * Load the Google Maps JavaScript API script and return a Promise.
   * @deprecated, use importLibrary() instead.
   */
  load() {
    return this.loadPromise();
  }
  /**
   * Load the Google Maps JavaScript API script and return a Promise.
   *
   * @ignore
   * @deprecated, use importLibrary() instead.
   */
  loadPromise() {
    return new Promise((resolve, reject) => {
      this.loadCallback((err) => {
        if (!err) {
          resolve(window.google);
        } else {
          reject(err.error);
        }
      });
    });
  }
  importLibrary(name) {
    this.execute();
    return google.maps.importLibrary(name);
  }
  /**
   * Load the Google Maps JavaScript API script with a callback.
   * @deprecated, use importLibrary() instead.
   */
  loadCallback(fn) {
    this.callbacks.push(fn);
    this.execute();
  }
  /**
   * Set the script on document.
   */
  setScript() {
    var _a, _b;
    if (document.getElementById(this.id)) {
      this.callback();
      return;
    }
    const params = {
      key: this.apiKey,
      channel: this.channel,
      client: this.client,
      libraries: this.libraries.length && this.libraries,
      v: this.version,
      mapIds: this.mapIds,
      language: this.language,
      region: this.region,
      authReferrerPolicy: this.authReferrerPolicy
    };
    Object.keys(params).forEach(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (key) => !params[key] && delete params[key]
    );
    if (!((_b = (_a = window === null || window === void 0 ? void 0 : window.google) === null || _a === void 0 ? void 0 : _a.maps) === null || _b === void 0 ? void 0 : _b.importLibrary)) {
      ((g) => {
        let h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window;
        b = b[c] || (b[c] = {});
        const d = b.maps || (b.maps = {}), r = /* @__PURE__ */ new Set(), e = new URLSearchParams(), u = () => (
          // @ts-ignore
          h || (h = new Promise((f, n) => __awaiter(this, void 0, void 0, function* () {
            var _a2;
            yield a = m.createElement("script");
            a.id = this.id;
            e.set("libraries", [...r] + "");
            for (k in g)
              e.set(k.replace(/[A-Z]/g, (t) => "_" + t[0].toLowerCase()), g[k]);
            e.set("callback", c + ".maps." + q);
            a.src = this.url + `?` + e;
            d[q] = f;
            a.onerror = () => h = n(Error(p + " could not load."));
            a.nonce = this.nonce || ((_a2 = m.querySelector("script[nonce]")) === null || _a2 === void 0 ? void 0 : _a2.nonce) || "";
            m.head.append(a);
          })))
        );
        d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n));
      })(params);
    }
    const libraryPromises = this.libraries.map((library) => this.importLibrary(library));
    if (!libraryPromises.length) {
      libraryPromises.push(this.importLibrary("core"));
    }
    Promise.all(libraryPromises).then(() => this.callback(), (error) => {
      const event = new ErrorEvent("error", { error });
      this.loadErrorCallback(event);
    });
  }
  /**
   * Reset the loader state.
   */
  reset() {
    this.deleteScript();
    this.done = false;
    this.loading = false;
    this.errors = [];
    this.onerrorEvent = null;
  }
  resetIfRetryingFailed() {
    if (this.failed) {
      this.reset();
    }
  }
  loadErrorCallback(e) {
    this.errors.push(e);
    if (this.errors.length <= this.retries) {
      const delay = this.errors.length * Math.pow(2, this.errors.length);
      console.error(`Failed to load Google Maps script, retrying in ${delay} ms.`);
      setTimeout(() => {
        this.deleteScript();
        this.setScript();
      }, delay);
    } else {
      this.onerrorEvent = e;
      this.callback();
    }
  }
  callback() {
    this.done = true;
    this.loading = false;
    this.callbacks.forEach((cb) => {
      cb(this.onerrorEvent);
    });
    this.callbacks = [];
  }
  execute() {
    this.resetIfRetryingFailed();
    if (this.loading) {
      return;
    }
    if (this.done) {
      this.callback();
    } else {
      if (window.google && window.google.maps && window.google.maps.version) {
        console.warn("Google Maps already loaded outside @googlemaps/js-api-loader. This may result in undesirable behavior as options and script parameters may not match.");
        this.callback();
        return;
      }
      this.loading = true;
      this.setScript();
    }
  }
}
const googleMap = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DEFAULT_ID,
  Loader,
  get LoaderStatus() {
    return LoaderStatus;
  }
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1 = { class: "loading" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GoogleMap",
  props: {
    points: {
      type: Array,
      required: true
    },
    zoom: {
      type: Number,
      default: 8
    }
  },
  setup(__props) {
    const { Loader: Loader2 } = googleMap;
    const mapContainer = ref(null);
    const markers = ref([]);
    const { localeIndex } = useData();
    let map = null;
    const initMap = async () => {
      const loader = new Loader2({
        apiKey: "AIzaSyAKC1v-OCZBXWsD6E4efT6b0Op2mYNXcjM",
        version: "weekly",
        libraries: ["places"]
      });
      await loader.load();
      map = new google.maps.Map(mapContainer.value, {
        zoom: __props.zoom,
        center: { lat: 32.62929779601816, lng: 114.12874803136621 },
        streetViewControl: false,
        mapTypeControl: false,
        zoomControl: true,
        fullscreenControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        language: localeIndex.value === "root" ? "en" : localeIndex.value
      });
    };
    const updateMarkers = () => {
      markers.value.forEach((marker, i) => {
        marker.setMap(null);
        marker.visible = false;
        marker = null;
      });
      markers.value = [];
      const infoWindow = new google.maps.InfoWindow();
      const markerCallback = (marker, index, content) => {
        return () => {
          infoWindow.setContent(content);
          infoWindow.open(map, marker);
        };
      };
      __props.points.forEach((point, i) => {
        const [lat, lng] = point.position.split(",").map(Number);
        if (lat && lng) {
          const marker = new google.maps.Marker({
            position: { lat, lng },
            map,
            title: `Marker ${point.position}`
          });
          marker.addListener("click", markerCallback(marker, i, point.content));
          markers.value.push(marker);
        }
      });
      if (__props.points.length > 0) {
        const bounds = new google.maps.LatLngBounds();
        markers.value.forEach((marker) => bounds.extend(marker.getPosition()));
        map == null ? void 0 : map.fitBounds(bounds);
      }
    };
    watch(
      () => __props.points,
      () => {
        if (map) {
          updateMarkers();
        }
      },
      { deep: true }
    );
    onMounted(async () => {
      await initMap();
      if (map) {
        updateMarkers();
      }
    });
    return (_ctx, _cache) => {
      const _component_Translate = resolveComponent("Translate");
      return openBlock(), createElementBlock("div", {
        class: "google-map",
        ref_key: "mapContainer",
        ref: mapContainer
      }, [
        createBaseVNode("div", _hoisted_1, [
          createVNode(_component_Translate, null, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("Loading Google Maps")
            ])),
            _: 1
          })
        ])
      ], 512);
    };
  }
});
const GoogleMap = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4c3cc44a"]]);
(function() {
  try {
    if (typeof document < "u") {
      var e = document.createElement("style");
      e.appendChild(document.createTextNode('@keyframes spinner-circle-animation-ed866313{0%,39%,to{opacity:0}40%{opacity:1}}.spinner[data-v-ed866313]{position:relative;width:var(--vs-spinner-size);height:var(--vs-spinner-size);margin:0;padding:0}.spinner-circle[data-v-ed866313]{width:100%;height:100%;position:absolute;left:0;top:0}.spinner-circle[data-v-ed866313]:before{content:"";display:block;margin:0 auto;width:15%;height:15%;background-color:var(--vs-spinner-color);border-radius:100%;-webkit-animation:spinner-circle-animation-ed866313 1.2s infinite ease-in-out both;animation:spinner-circle-animation-ed866313 1.2s infinite ease-in-out both}.spinner-circle[data-v-ed866313]:nth-child(2){transform:rotate(30deg)}.spinner-circle[data-v-ed866313]:nth-child(3){transform:rotate(60deg)}.spinner-circle[data-v-ed866313]:nth-child(4){transform:rotate(90deg)}.spinner-circle[data-v-ed866313]:nth-child(5){transform:rotate(120deg)}.spinner-circle[data-v-ed866313]:nth-child(6){transform:rotate(150deg)}.spinner-circle[data-v-ed866313]:nth-child(7){transform:rotate(180deg)}.spinner-circle[data-v-ed866313]:nth-child(8){transform:rotate(210deg)}.spinner-circle[data-v-ed866313]:nth-child(9){transform:rotate(240deg)}.spinner-circle[data-v-ed866313]:nth-child(10){transform:rotate(270deg)}.spinner-circle[data-v-ed866313]:nth-child(11){transform:rotate(300deg)}.spinner-circle[data-v-ed866313]:nth-child(12){transform:rotate(330deg)}.spinner-circle[data-v-ed866313]:nth-child(2):before{animation-delay:-1.1s}.spinner-circle[data-v-ed866313]:nth-child(3):before{animation-delay:-1s}.spinner-circle[data-v-ed866313]:nth-child(4):before{animation-delay:-.9s}.spinner-circle[data-v-ed866313]:nth-child(5):before{animation-delay:-.8s}.spinner-circle[data-v-ed866313]:nth-child(6):before{animation-delay:-.7s}.spinner-circle[data-v-ed866313]:nth-child(7):before{animation-delay:-.6s}.spinner-circle[data-v-ed866313]:nth-child(8):before{animation-delay:-.5s}.spinner-circle[data-v-ed866313]:nth-child(9):before{animation-delay:-.4s}.spinner-circle[data-v-ed866313]:nth-child(10):before{animation-delay:-.3s}.spinner-circle[data-v-ed866313]:nth-child(11):before{animation-delay:-.2s}.spinner-circle[data-v-ed866313]:nth-child(12):before{animation-delay:-.1s}:root{--vs-input-bg: #fff;--vs-input-outline: #3b82f6;--vs-input-placeholder-color: #52525b;--vs-padding: .25rem .5rem;--vs-border: 1px solid #e4e4e7;--vs-border-radius: 4px;--vs-font-size: 16px;--vs-font-weight: 400;--vs-font-family: inherit;--vs-text-color: #18181b;--vs-line-height: 1.5;--vs-menu-offset-top: 8px;--vs-menu-height: 200px;--vs-menu-padding: 0;--vs-menu-border: 1px solid #e4e4e7;--vs-menu-bg: #fff;--vs-menu-box-shadow: none;--vs-menu-z-index: 2;--vs-option-padding: 8px 12px;--vs-option-font-size: var(--vs-font-size);--vs-option-font-weight: var(--vs-font-weight);--vs-option-text-color: var(--vs-text-color);--vs-option-bg: var(--vs-menu-bg);--vs-option-hover-color: #dbeafe;--vs-option-focused-color: var(--vs-option-hover-color);--vs-option-selected-color: #93c5fd;--vs-option-disabled-color: #f4f4f5;--vs-option-disabled-text-color: #52525b;--vs-multi-value-gap: 0px;--vs-multi-value-padding: 4px;--vs-multi-value-margin: 4px 0px 4px 6px;--vs-multi-value-font-size: 14px;--vs-multi-value-font-weight: 400;--vs-multi-value-line-height: 1;--vs-multi-value-text-color: #3f3f46;--vs-multi-value-bg: #f4f4f5;--vs-multi-value-xmark-size: 16px;--vs-multi-value-xmark-color: var(--vs-multi-value-text-color);--vs-indicators-gap: 4px;--vs-icon-size: 20px;--vs-icon-color: var(--vs-text-color);--vs-spinner-color: var(--vs-text-color);--vs-spinner-size: 20px;--vs-dropdown-transition: transform .25s ease-out}.vue-select[data-v-7f19f42a]{position:relative;box-sizing:border-box;width:100%}.vue-select[data-v-7f19f42a] *{box-sizing:border-box}.vue-select.open .single-value[data-v-7f19f42a]{position:absolute;opacity:.4}.vue-select.open .dropdown-icon[data-v-7f19f42a]{transform:rotate(180deg)}.vue-select.typing .single-value[data-v-7f19f42a]{opacity:0}.control[data-v-7f19f42a]{display:flex;min-height:32px;border:var(--vs-border);border-radius:var(--vs-border-radius);background-color:var(--vs-input-bg)}.control.focused[data-v-7f19f42a]{box-shadow:0 0 0 1px var(--vs-input-outline);border-color:var(--vs-input-outline)}.value-container[data-v-7f19f42a]{position:relative;display:flex;flex-wrap:wrap;align-items:center;flex-basis:100%;flex-grow:1}.value-container.multi[data-v-7f19f42a]{gap:var(--vs-multi-value-gap)}.single-value[data-v-7f19f42a]{display:flex;align-items:center;padding:var(--vs-padding);font-size:var(--vs-font-size);font-weight:var(--vs-font-weight);font-family:var(--vs-font-family);line-height:var(--vs-line-height);color:var(--vs-text-color);z-index:0}.multi-value[data-v-7f19f42a]{appearance:none;display:flex;align-items:center;gap:var(--vs-multi-value-gap);padding:var(--vs-multi-value-padding);margin:var(--vs-multi-value-margin);border:0;font-size:var(--vs-multi-value-font-size);font-weight:var(--vs-multi-value-font-weight);color:var(--vs-multi-value-text-color);line-height:var(--vs-multi-value-line-height);background:var(--vs-multi-value-bg);outline:none;cursor:pointer}.multi-value svg[data-v-7f19f42a]{width:var(--vs-multi-value-xmark-size);height:var(--vs-multi-value-xmark-size);fill:var(--vs-multi-value-xmark-color)}.search-input[data-v-7f19f42a]{appearance:none;display:inline-block;max-width:100%;flex-grow:1;width:0;margin:0;padding:0;border:0;background:none;padding:var(--vs-padding);font-size:var(--vs-font-size);font-family:var(--vs-font-family);line-height:var(--vs-line-height);color:var(--vs-text-color);outline:none;z-index:1}.search-input[data-v-7f19f42a]::placeholder{color:var(--vs-input-placeholder-color)}.indicators-container[data-v-7f19f42a]{display:flex;align-items:center;flex-shrink:0;gap:var(--vs-indicators-gap);padding:var(--vs-padding)}.clear-button[data-v-7f19f42a]{appearance:none;display:inline-block;padding:0;margin:0;border:0;width:var(--vs-icon-size);height:var(--vs-icon-size);color:var(--vs-icon-color);background:none;outline:none;cursor:pointer}.dropdown-icon[data-v-7f19f42a]{appearance:none;display:inline-block;padding:0;margin:0;border:0;width:var(--vs-icon-size);height:var(--vs-icon-size);color:var(--vs-icon-color);background:none;outline:none;cursor:pointer;transition:var(--vs-dropdown-transition)}.menu[data-v-7f19f42a]{position:absolute;left:0;right:0;padding:var(--vs-menu-padding);margin-top:var(--vs-menu-offset-top);max-height:var(--vs-menu-height);overflow-y:auto;border:var(--vs-menu-border);border-radius:var(--vs-border-radius);box-shadow:var(--vs-menu-box-shadow);background-color:var(--vs-menu-bg);z-index:var(--vs-menu-z-index)}.menu-option[data-v-7f19f42a]{display:flex;width:100%;border:0;margin:0;padding:var(--vs-option-padding);font-size:var(--vs-option-font-size);font-weight:var(--vs-option-font-weight);font-family:var(--vs-font-family);color:var(--vs-option-text-color);background-color:var(--vs-option-bg);text-align:-webkit-auto;cursor:pointer}.menu-option[data-v-7f19f42a]:hover{background-color:var(--vs-option-hover-color)}.menu-option.focused[data-v-7f19f42a]{background-color:var(--vs-option-focused-color)}.menu-option.selected[data-v-7f19f42a]{background-color:var(--vs-option-selected-color)}.menu-option.disabled[data-v-7f19f42a]{background-color:var(--vs-option-disabled-color);color:var(--vs-option-disabled-text-color)}.no-results[data-v-7f19f42a]{padding:var(--vs-option-padding);font-size:var(--vs-font-size);font-family:var(--vs-font-family);color:var(--vs-text-color)}')), document.head.appendChild(e);
    }
  } catch (a) {
    console.error("vite-plugin-css-injected-by-js", a);
  }
})();
const I = (s, r) => {
  const l = s.__vccOpts || s;
  for (const [f, n] of r)
    l[f] = n;
  return l;
}, ie = {}, se = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
};
function ue(s, r) {
  return openBlock(), createElementBlock("svg", se, r[0] || (r[0] = [
    createBaseVNode("path", {
      "fill-rule": "evenodd",
      d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
      "clip-rule": "evenodd"
    }, null, -1)
  ]));
}
const re = /* @__PURE__ */ I(ie, [["render", ue]]), de = {}, ce = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
};
function pe(s, r) {
  return openBlock(), createElementBlock("svg", ce, r[0] || (r[0] = [
    createBaseVNode("path", { d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" }, null, -1)
  ]));
}
const P = /* @__PURE__ */ I(de, [["render", pe]]), ve = ["aria-disabled", "aria-selected"], fe = /* @__PURE__ */ defineComponent({
  __name: "MenuOption",
  props: {
    menu: {},
    index: {},
    isFocused: { type: Boolean },
    isSelected: { type: Boolean },
    isDisabled: { type: Boolean }
  },
  emits: ["select"],
  setup(s, { emit: r }) {
    const l = s, f = r, n = ref(null);
    return watch(
      () => l.isFocused,
      () => {
        if (l.isFocused && l.menu) {
          const d = l.menu.children[l.index], c = d.offsetTop, g = c + d.clientHeight, i = l.menu.scrollTop, u = l.menu.clientHeight;
          c < i ? l.menu.scrollTop = c : g > i + u && (l.menu.scrollTop = g - u);
        }
      }
    ), (d, c) => (openBlock(), createElementBlock("div", {
      ref_key: "option",
      ref: n,
      tabindex: "-1",
      role: "option",
      class: normalizeClass({ focused: d.isFocused, selected: d.isSelected, disabled: d.isDisabled }),
      "aria-disabled": d.isDisabled,
      "aria-selected": d.isSelected,
      onClick: c[0] || (c[0] = (g) => f("select")),
      onKeydown: c[1] || (c[1] = withKeys((g) => f("select"), ["enter"]))
    }, [
      renderSlot(d.$slots, "default")
    ], 42, ve));
  }
}), be = {}, me = { className: "spinner" };
function ye(s, r) {
  return openBlock(), createElementBlock("div", me, [
    (openBlock(), createElementBlock(Fragment, null, renderList(12, (l) => createBaseVNode("div", {
      key: l,
      class: "spinner-circle"
    })), 64))
  ]);
}
const he = /* @__PURE__ */ I(be, [["render", ye], ["__scopeId", "data-v-ed866313"]]), ge = ["aria-expanded", "aria-describedby", "aria-description", "aria-labelledby", "aria-label", "aria-required"], ke = ["onClick"], Me = ["id", "disabled", "placeholder"], we = { class: "indicators-container" }, $e = ["disabled"], Le = ["disabled"], De = ["aria-label", "aria-multiselectable"], Oe = {
  key: 0,
  class: "no-results"
}, Se = /* @__PURE__ */ defineComponent({
  __name: "Select",
  props: /* @__PURE__ */ mergeModels({
    options: {},
    displayedOptions: {},
    placeholder: { default: "Select an option" },
    isClearable: { type: Boolean, default: true },
    isDisabled: { type: Boolean, default: false },
    isSearchable: { type: Boolean, default: true },
    isMulti: { type: Boolean, default: false },
    isLoading: { type: Boolean, default: false },
    shouldAutofocusOption: { type: Boolean, default: true },
    closeOnSelect: { type: Boolean, default: true },
    teleport: { default: void 0 },
    inputId: { default: void 0 },
    aria: { default: void 0 },
    filterBy: { type: Function, default: (s, r, l) => r.toLowerCase().includes(l.toLowerCase()) },
    getOptionLabel: { type: Function, default: (s) => s.label },
    getMultiValueLabel: { type: Function, default: (s) => s.label }
  }, {
    modelValue: {
      required: true,
      validator: (s, r) => r.isMulti ? Array.isArray(s) : !Array.isArray(s)
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ mergeModels(["optionSelected", "optionDeselected", "search"], ["update:modelValue"]),
  setup(s, { emit: r }) {
    const l = s, f = r, n = useModel(s, "modelValue"), d = ref(null), c = ref(null), g = ref(null), i = ref(""), u = ref(false), $ = ref(-1), y = computed(() => {
      const e = l.displayedOptions || l.options, a = (t) => t.filter(
        (o) => !n.value.includes(o.value)
      );
      if (l.isSearchable && i.value) {
        const t = e.filter((o) => {
          const L = l.isMulti ? l.getMultiValueLabel(o) : l.getOptionLabel(o);
          return l.filterBy(o, L, i.value);
        });
        return l.isMulti ? a(t) : t;
      }
      return l.isMulti ? a(e) : e;
    }), b = computed(() => {
      if (l.isMulti && Array.isArray(n.value))
        return n.value.map(
          (a) => l.options.find((t) => t.value === a)
        );
      l.isMulti && !Array.isArray(n.value) && console.warn(`[vue3-select-component warn]: The v-model provided should be an array when using \`isMulti\` prop, instead it was: ${n.value}`);
      const e = l.options.find((a) => a.value === n.value);
      return e ? [e] : [];
    }), D = (e) => {
      u.value = true, l.shouldAutofocusOption && ($.value = l.options.findIndex((a) => !a.disabled)), (e == null ? void 0 : e.focusInput) && c.value && c.value.focus();
    }, N = () => {
      u.value = false, i.value = "";
    }, j = () => {
      u.value ? N() : D();
    }, V = (e) => {
      e.disabled || (l.isMulti ? n.value.push(e.value) : n.value = e.value, f("optionSelected", e), i.value = "", l.closeOnSelect && (u.value = false), c.value && c.value.blur());
    }, q = (e) => {
      l.isMulti && !l.isDisabled && (n.value = n.value.filter((a) => a !== e.value), f("optionDeselected", e));
    }, X = () => {
      l.isMulti ? (n.value = [], f("optionDeselected", null)) : (n.value = void 0, f("optionDeselected", b.value[0])), u.value = false, i.value = "", c.value && c.value.blur();
    }, K = (e) => {
      if (u.value) {
        const a = $.value;
        if (e.key === "ArrowDown") {
          e.preventDefault();
          const o = y.value.findIndex((k, O) => !k.disabled && O > a), L = y.value.findIndex((k) => !k.disabled);
          $.value = o === -1 ? L : o;
        }
        if (e.key === "ArrowUp") {
          e.preventDefault();
          const o = y.value.reduce(
            (k, O, B) => !O.disabled && B < a ? B : k,
            -1
          ), L = y.value.reduce(
            (k, O, B) => O.disabled ? k : B,
            -1
          );
          $.value = o === -1 ? L : o;
        }
        if (e.key === "Enter") {
          const o = y.value[a];
          e.preventDefault(), o && V(o);
        }
        if (e.code === "Space" && i.value.length === 0) {
          const o = y.value[a];
          e.preventDefault(), o && V(o);
        }
        e.key === "Escape" && (e.preventDefault(), u.value = false, i.value = "");
        const t = l.isMulti ? n.value.length > 0 : !!n.value;
        e.key === "Backspace" && i.value.length === 0 && t && (e.preventDefault(), l.isMulti ? n.value = n.value.slice(0, -1) : n.value = void 0);
      }
    }, G = (e) => {
      !u.value && i.value.length === 0 && (e.preventDefault(), e.stopImmediatePropagation(), D());
    }, J = (e) => {
      e.key === "Tab" ? N() : e.key === "Space" && G(e);
    }, U = (e) => {
      d.value && !d.value.contains(e.target) && (u.value = false, i.value = "");
    }, x = () => {
      if (d.value) {
        const e = d.value.getBoundingClientRect();
        return {
          left: `${e.x}px`,
          top: `${e.y + e.height}px`
        };
      }
      return console.warn("Unable to calculate dynamic menu position because of missing internal DOM reference."), { top: "0px", left: "0px" };
    };
    return watch(
      () => i.value,
      () => {
        f("search", i.value), i.value && !u.value && D();
      }
    ), onMounted(() => {
      document.addEventListener("click", U), document.addEventListener("keydown", K);
    }), onBeforeUnmount(() => {
      document.removeEventListener("click", U), document.removeEventListener("keydown", K);
    }), (e, a) => {
      var _a, _b, _c, _d;
      return openBlock(), createElementBlock("div", {
        ref_key: "container",
        ref: d,
        dir: "auto",
        class: normalizeClass(["vue-select", { open: u.value, typing: u.value && i.value.length > 0, disabled: e.isDisabled }])
      }, [
        createBaseVNode("div", {
          class: normalizeClass(["control", { focused: u.value }])
        }, [
          createBaseVNode("div", {
            class: normalizeClass(["value-container", { multi: e.isMulti }]),
            role: "combobox",
            "aria-expanded": u.value,
            "aria-describedby": e.placeholder,
            "aria-description": e.placeholder,
            "aria-labelledby": (_a = e.aria) == null ? void 0 : _a.labelledby,
            "aria-label": b.value.length ? b.value.map(e.isMulti ? e.getMultiValueLabel : e.getOptionLabel).join(", ") : "",
            "aria-required": (_b = e.aria) == null ? void 0 : _b.required
          }, [
            !l.isMulti && b.value[0] ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "single-value",
              onClick: a[0] || (a[0] = (t) => l.isDisabled ? null : D({ focusInput: true }))
            }, [
              renderSlot(e.$slots, "value", {
                option: b.value[0]
              }, () => [
                createTextVNode(toDisplayString(e.getOptionLabel(b.value[0])), 1)
              ], true)
            ])) : createCommentVNode("", true),
            l.isMulti && b.value.length ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(b.value, (t) => renderSlot(e.$slots, "tag", {
              key: t.value,
              option: t,
              removeOption: () => q(t)
            }, () => [
              createBaseVNode("button", {
                type: "button",
                class: "multi-value",
                onClick: (o) => q(t)
              }, [
                createTextVNode(toDisplayString(e.getMultiValueLabel(t)), 1),
                createVNode(P)
              ], 8, ke)
            ], true)), 128)) : createCommentVNode("", true),
            withDirectives(createBaseVNode("input", {
              id: e.inputId,
              ref_key: "input",
              ref: c,
              "onUpdate:modelValue": a[1] || (a[1] = (t) => i.value = t),
              class: "search-input",
              type: "text",
              "aria-autocomplete": "list",
              autocapitalize: "none",
              autocomplete: "off",
              autocorrect: "off",
              spellcheck: "false",
              tabindex: "0",
              disabled: e.isDisabled,
              placeholder: b.value.length === 0 ? e.placeholder : "",
              onMousedown: a[2] || (a[2] = (t) => D()),
              onKeydown: J
            }, null, 40, Me), [
              [vModelText, i.value]
            ])
          ], 10, ge),
          createBaseVNode("div", we, [
            b.value.length > 0 && e.isClearable && !e.isLoading ? (openBlock(), createElementBlock("button", {
              key: 0,
              type: "button",
              class: "clear-button",
              tabindex: "-1",
              disabled: e.isDisabled,
              onClick: X
            }, [
              renderSlot(e.$slots, "clear", {}, () => [
                createVNode(P)
              ], true)
            ], 8, $e)) : createCommentVNode("", true),
            e.isLoading ? createCommentVNode("", true) : (openBlock(), createElementBlock("button", {
              key: 1,
              type: "button",
              class: "dropdown-icon",
              tabindex: "-1",
              disabled: e.isDisabled,
              onClick: j
            }, [
              renderSlot(e.$slots, "dropdown", {}, () => [
                createVNode(re)
              ], true)
            ], 8, Le)),
            renderSlot(e.$slots, "loading", {}, () => [
              e.isLoading ? (openBlock(), createBlock(he, { key: 0 })) : createCommentVNode("", true)
            ], true)
          ])
        ], 2),
        (openBlock(), createBlock(Teleport, {
          to: e.teleport,
          disabled: !e.teleport,
          defer: true
        }, [
          u.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            ref_key: "menu",
            ref: g,
            class: "menu",
            role: "listbox",
            "aria-label": (_c = e.aria) == null ? void 0 : _c.labelledby,
            "aria-multiselectable": e.isMulti,
            style: normalizeStyle({
              width: l.teleport ? `${(_d = d.value) == null ? void 0 : _d.getBoundingClientRect().width}px` : "100%",
              top: l.teleport ? x().top : "unset",
              left: l.teleport ? x().left : "unset"
            })
          }, [
            renderSlot(e.$slots, "menu-header", {}, void 0, true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(y.value, (t, o) => (openBlock(), createBlock(fe, {
              key: o,
              type: "button",
              class: normalizeClass(["menu-option", { focused: $.value === o, selected: t.value === n.value }]),
              menu: g.value,
              index: o,
              "is-focused": $.value === o,
              "is-selected": t.value === n.value,
              "is-disabled": t.disabled || false,
              onSelect: (L) => V(t)
            }, {
              default: withCtx(() => [
                renderSlot(e.$slots, "option", { option: t }, () => [
                  createTextVNode(toDisplayString(e.getOptionLabel(t)), 1)
                ], true)
              ]),
              _: 2
            }, 1032, ["class", "menu", "index", "is-focused", "is-selected", "is-disabled", "onSelect"]))), 128)),
            y.value.length === 0 ? (openBlock(), createElementBlock("div", Oe, [
              renderSlot(e.$slots, "no-options", {}, () => [
                a[3] || (a[3] = createTextVNode(" No results found "))
              ], true)
            ])) : createCommentVNode("", true)
          ], 12, De)) : createCommentVNode("", true)
        ], 8, ["to", "disabled"]))
      ], 2);
    };
  }
}), Ce = /* @__PURE__ */ I(Se, [["__scopeId", "data-v-7f19f42a"]]);
export {
  Ce as C,
  Float as F,
  GoogleMap as G
};
