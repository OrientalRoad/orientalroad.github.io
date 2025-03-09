const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox.DCUTaXdQ.js","assets/chunks/framework.Ch1t4NEC.js","assets/chunks/VPNavBarTranslations.5B5nrKlU.js"])))=>i.map(i=>d[i]);
import { o as onMounted, n as nextTick, w as watch, i as isRef, r as ref, a as readonly, t as toValue, g as getCurrentInstance, b as getCurrentScope, c as onScopeDispose, d as toRef$1, e as customRef, f as computed, h as reactive, s as shallowRef, u as unref, j as defineComponent, k as useSlots, l as createElementBlock, m as openBlock, p as renderSlot, q as createCommentVNode, v as normalizeClass, x as createBaseVNode, _ as _export_sfc, F as Fragment, y as renderList, z as toDisplayString, A as createTextVNode, B as createVNode, C as createBlock, D as withCtx, E as resolveComponent, G as useData$1, T as Teleport, H as Transition, I as isExternal, J as treatAsHtml, K as withBase, L as isActive, M as useMediaQuery, N as watchEffect, O as onUnmounted, P as watchPostEffect, Q as EXTERNAL_URL_RE, R as resolveDynamicComponent, S as mergeProps, U as toHandlers, V as withKeys, W as onBeforeUnmount, X as useScrollLock$1, Y as withModifiers, Z as inBrowser, $ as onUpdated, a0 as getScrollOffset, a1 as onContentUpdated, a2 as useRoute, a3 as onKeyStroke$1, a4 as normalizeStyle, a5 as inject, a6 as __vitePreload, a7 as defineAsyncComponent, a8 as defineClientComponent, a9 as provide, aa as createSlots } from "./framework.Ch1t4NEC.js";
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
const isClient = typeof window !== "undefined" && typeof document !== "undefined";
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const toString = Object.prototype.toString;
const isObject = (val) => toString.call(val) === "[object Object]";
const noop = () => {
};
const isIOS = /* @__PURE__ */ getIsIOS();
function getIsIOS() {
  var _a, _b;
  return isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((_b = window == null ? void 0 : window.navigator) == null ? void 0 : _b.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
    });
  }
  return wrapper;
}
const bypassFilter = (invoke) => {
  return invoke();
};
function debounceFilter(ms, options = {}) {
  let timer;
  let maxTimer;
  let lastRejector = noop;
  const _clearTimeout = (timer2) => {
    clearTimeout(timer2);
    lastRejector();
    lastRejector = noop;
  };
  let lastInvoker;
  const filter = (invoke) => {
    const duration = toValue(ms);
    const maxDuration = toValue(options.maxWait);
    if (timer)
      _clearTimeout(timer);
    if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
      if (maxTimer) {
        _clearTimeout(maxTimer);
        maxTimer = null;
      }
      return Promise.resolve(invoke());
    }
    return new Promise((resolve, reject) => {
      lastRejector = options.rejectOnCancel ? reject : resolve;
      lastInvoker = invoke;
      if (maxDuration && !maxTimer) {
        maxTimer = setTimeout(() => {
          if (timer)
            _clearTimeout(timer);
          maxTimer = null;
          resolve(lastInvoker());
        }, maxDuration);
      }
      timer = setTimeout(() => {
        if (maxTimer)
          _clearTimeout(maxTimer);
        maxTimer = null;
        resolve(invoke());
      }, duration);
    });
  };
  return filter;
}
function throttleFilter(...args) {
  let lastExec = 0;
  let timer;
  let isLeading = true;
  let lastRejector = noop;
  let lastValue;
  let ms;
  let trailing;
  let leading;
  let rejectOnCancel;
  if (!isRef(args[0]) && typeof args[0] === "object")
    ({ delay: ms, trailing = true, leading = true, rejectOnCancel = false } = args[0]);
  else
    [ms, trailing = true, leading = true, rejectOnCancel = false] = args;
  const clear = () => {
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
      lastRejector();
      lastRejector = noop;
    }
  };
  const filter = (_invoke) => {
    const duration = toValue(ms);
    const elapsed = Date.now() - lastExec;
    const invoke = () => {
      return lastValue = _invoke();
    };
    clear();
    if (duration <= 0) {
      lastExec = Date.now();
      return invoke();
    }
    if (elapsed > duration && (leading || !isLeading)) {
      lastExec = Date.now();
      invoke();
    } else if (trailing) {
      lastValue = new Promise((resolve, reject) => {
        lastRejector = rejectOnCancel ? reject : resolve;
        timer = setTimeout(() => {
          lastExec = Date.now();
          isLeading = true;
          resolve(invoke());
          clear();
        }, Math.max(0, duration - elapsed));
      });
    }
    if (!leading && !timer)
      timer = setTimeout(() => isLeading = true, duration);
    isLeading = false;
    return lastValue;
  };
  return filter;
}
function pausableFilter(extendFilter = bypassFilter) {
  const isActive2 = ref(true);
  function pause() {
    isActive2.value = false;
  }
  function resume() {
    isActive2.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive2.value)
      extendFilter(...args);
  };
  return { isActive: readonly(isActive2), pause, resume, eventFilter };
}
function getLifeCycleTarget(target) {
  return getCurrentInstance();
}
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
function toRef(...args) {
  if (args.length !== 1)
    return toRef$1(...args);
  const r = args[0];
  return typeof r === "function" ? readonly(customRef(() => ({ get: r, set: noop }))) : ref(r);
}
function useDebounceFn(fn, ms = 200, options = {}) {
  return createFilterWrapper(
    debounceFilter(ms, options),
    fn
  );
}
function useThrottleFn(fn, ms = 200, trailing = false, leading = true, rejectOnCancel = false) {
  return createFilterWrapper(
    throttleFilter(ms, trailing, leading, rejectOnCancel),
    fn
  );
}
function watchWithFilter(source, cb, options = {}) {
  const {
    eventFilter = bypassFilter,
    ...watchOptions
  } = options;
  return watch(
    source,
    createFilterWrapper(
      eventFilter,
      cb
    ),
    watchOptions
  );
}
function watchPausable(source, cb, options = {}) {
  const {
    eventFilter: filter,
    ...watchOptions
  } = options;
  const { eventFilter, pause, resume, isActive: isActive2 } = pausableFilter(filter);
  const stop = watchWithFilter(
    source,
    cb,
    {
      ...watchOptions,
      eventFilter
    }
  );
  return { stop, pause, resume, isActive: isActive2 };
}
function tryOnMounted(fn, sync = true, target) {
  const instance = getLifeCycleTarget();
  if (instance)
    onMounted(fn, target);
  else if (sync)
    fn();
  else
    nextTick(fn);
}
function watchImmediate(source, cb, options) {
  return watch(
    source,
    cb,
    {
      ...options,
      immediate: true
    }
  );
}
const defaultWindow = isClient ? window : void 0;
function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
function useEventListener(...args) {
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options) => {
    el.addEventListener(event, listener, options);
    return () => el.removeEventListener(event, listener, options);
  };
  const firstParamTargets = computed(() => {
    const test = toArray(toValue(args[0])).filter((e) => e != null);
    return test.every((e) => typeof e !== "string") ? test : void 0;
  });
  const stopWatch = watchImmediate(
    () => {
      var _a, _b;
      return [
        (_b = (_a = firstParamTargets.value) == null ? void 0 : _a.map((e) => unrefElement(e))) != null ? _b : [defaultWindow].filter((e) => e != null),
        toArray(toValue(firstParamTargets.value ? args[1] : args[0])),
        toArray(unref(firstParamTargets.value ? args[2] : args[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        toValue(firstParamTargets.value ? args[3] : args[2])
      ];
    },
    ([raw_targets, raw_events, raw_listeners, raw_options]) => {
      cleanup();
      if (!(raw_targets == null ? void 0 : raw_targets.length) || !(raw_events == null ? void 0 : raw_events.length) || !(raw_listeners == null ? void 0 : raw_listeners.length))
        return;
      const optionsClone = isObject(raw_options) ? { ...raw_options } : raw_options;
      cleanups.push(
        ...raw_targets.flatMap(
          (el) => raw_events.flatMap(
            (event) => raw_listeners.map((listener) => register(el, event, listener, optionsClone))
          )
        )
      );
    },
    { flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(cleanup);
  return stop;
}
function createKeyPredicate(keyFilter) {
  if (typeof keyFilter === "function")
    return keyFilter;
  else if (typeof keyFilter === "string")
    return (event) => event.key === keyFilter;
  else if (Array.isArray(keyFilter))
    return (event) => keyFilter.includes(event.key);
  return () => true;
}
function onKeyStroke(...args) {
  let key;
  let handler;
  let options = {};
  if (args.length === 3) {
    key = args[0];
    handler = args[1];
    options = args[2];
  } else if (args.length === 2) {
    if (typeof args[1] === "object") {
      key = true;
      handler = args[0];
      options = args[1];
    } else {
      key = args[0];
      handler = args[1];
    }
  } else {
    key = true;
    handler = args[0];
  }
  const {
    target = defaultWindow,
    eventName = "keydown",
    passive = false,
    dedupe = false
  } = options;
  const predicate = createKeyPredicate(key);
  const listener = (e) => {
    if (e.repeat && toValue(dedupe))
      return;
    if (predicate(e))
      handler(e);
  };
  return useEventListener(target, eventName, listener, passive);
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
const handlers = /* @__PURE__ */ getHandlers();
function getHandlers() {
  if (!(globalKey in _global))
    _global[globalKey] = _global[globalKey] || {};
  return _global[globalKey];
}
function getSSRHandler(key, fallback) {
  return handlers[key] || fallback;
}
function guessSerializerType(rawInit) {
  return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}
const StorageSerializers = {
  boolean: {
    read: (v) => v === "true",
    write: (v) => String(v)
  },
  object: {
    read: (v) => JSON.parse(v),
    write: (v) => JSON.stringify(v)
  },
  number: {
    read: (v) => Number.parseFloat(v),
    write: (v) => String(v)
  },
  any: {
    read: (v) => v,
    write: (v) => String(v)
  },
  string: {
    read: (v) => v,
    write: (v) => String(v)
  },
  map: {
    read: (v) => new Map(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v.entries()))
  },
  set: {
    read: (v) => new Set(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v))
  },
  date: {
    read: (v) => new Date(v),
    write: (v) => v.toISOString()
  }
};
const customStorageEventName = "vueuse-storage";
function useStorage(key, defaults2, storage, options = {}) {
  var _a;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    mergeDefaults = false,
    shallow,
    window: window2 = defaultWindow,
    eventFilter,
    onError = (e) => {
      console.error(e);
    },
    initOnMounted
  } = options;
  const data2 = (shallow ? shallowRef : ref)(typeof defaults2 === "function" ? defaults2() : defaults2);
  const keyComputed = computed(() => toValue(key));
  if (!storage) {
    try {
      storage = getSSRHandler("getDefaultStorage", () => {
        var _a2;
        return (_a2 = defaultWindow) == null ? void 0 : _a2.localStorage;
      })();
    } catch (e) {
      onError(e);
    }
  }
  if (!storage)
    return data2;
  const rawInit = toValue(defaults2);
  const type = guessSerializerType(rawInit);
  const serializer = (_a = options.serializer) != null ? _a : StorageSerializers[type];
  const { pause: pauseWatch, resume: resumeWatch } = watchPausable(
    data2,
    () => write(data2.value),
    { flush, deep, eventFilter }
  );
  watch(keyComputed, () => update(), { flush });
  if (window2 && listenToStorageChanges) {
    tryOnMounted(() => {
      if (storage instanceof Storage)
        useEventListener(window2, "storage", update, { passive: true });
      else
        useEventListener(window2, customStorageEventName, updateFromCustomEvent);
      if (initOnMounted)
        update();
    });
  }
  if (!initOnMounted)
    update();
  function dispatchWriteEvent(oldValue, newValue) {
    if (window2) {
      const payload = {
        key: keyComputed.value,
        oldValue,
        newValue,
        storageArea: storage
      };
      window2.dispatchEvent(storage instanceof Storage ? new StorageEvent("storage", payload) : new CustomEvent(customStorageEventName, {
        detail: payload
      }));
    }
  }
  function write(v) {
    try {
      const oldValue = storage.getItem(keyComputed.value);
      if (v == null) {
        dispatchWriteEvent(oldValue, null);
        storage.removeItem(keyComputed.value);
      } else {
        const serialized = serializer.write(v);
        if (oldValue !== serialized) {
          storage.setItem(keyComputed.value, serialized);
          dispatchWriteEvent(oldValue, serialized);
        }
      }
    } catch (e) {
      onError(e);
    }
  }
  function read(event) {
    const rawValue = event ? event.newValue : storage.getItem(keyComputed.value);
    if (rawValue == null) {
      if (writeDefaults && rawInit != null)
        storage.setItem(keyComputed.value, serializer.write(rawInit));
      return rawInit;
    } else if (!event && mergeDefaults) {
      const value = serializer.read(rawValue);
      if (typeof mergeDefaults === "function")
        return mergeDefaults(value, rawInit);
      else if (type === "object" && !Array.isArray(value))
        return { ...rawInit, ...value };
      return value;
    } else if (typeof rawValue !== "string") {
      return rawValue;
    } else {
      return serializer.read(rawValue);
    }
  }
  function update(event) {
    if (event && event.storageArea !== storage)
      return;
    if (event && event.key == null) {
      data2.value = rawInit;
      return;
    }
    if (event && event.key !== keyComputed.value)
      return;
    pauseWatch();
    try {
      if ((event == null ? void 0 : event.newValue) !== serializer.write(data2.value))
        data2.value = read(event);
    } catch (e) {
      onError(e);
    } finally {
      if (event)
        nextTick(resumeWatch);
      else
        resumeWatch();
    }
  }
  function updateFromCustomEvent(event) {
    update(event.detail);
  }
  return data2;
}
function resolveElement(el) {
  if (typeof Window !== "undefined" && el instanceof Window)
    return el.document.documentElement;
  if (typeof Document !== "undefined" && el instanceof Document)
    return el.documentElement;
  return el;
}
const ARRIVED_STATE_THRESHOLD_PIXELS = 1;
function useScroll(element, options = {}) {
  const {
    throttle = 0,
    idle = 200,
    onStop = noop,
    onScroll = noop,
    offset = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    eventListenerOptions = {
      capture: false,
      passive: true
    },
    behavior = "auto",
    window: window2 = defaultWindow,
    onError = (e) => {
      console.error(e);
    }
  } = options;
  const internalX = ref(0);
  const internalY = ref(0);
  const x = computed({
    get() {
      return internalX.value;
    },
    set(x2) {
      scrollTo(x2, void 0);
    }
  });
  const y = computed({
    get() {
      return internalY.value;
    },
    set(y2) {
      scrollTo(void 0, y2);
    }
  });
  function scrollTo(_x, _y) {
    var _a, _b, _c, _d;
    if (!window2)
      return;
    const _element = toValue(element);
    if (!_element)
      return;
    (_c = _element instanceof Document ? window2.document.body : _element) == null ? void 0 : _c.scrollTo({
      top: (_a = toValue(_y)) != null ? _a : y.value,
      left: (_b = toValue(_x)) != null ? _b : x.value,
      behavior: toValue(behavior)
    });
    const scrollContainer = ((_d = _element == null ? void 0 : _element.document) == null ? void 0 : _d.documentElement) || (_element == null ? void 0 : _element.documentElement) || _element;
    if (x != null)
      internalX.value = scrollContainer.scrollLeft;
    if (y != null)
      internalY.value = scrollContainer.scrollTop;
  }
  const isScrolling = ref(false);
  const arrivedState = reactive({
    left: true,
    right: false,
    top: true,
    bottom: false
  });
  const directions = reactive({
    left: false,
    right: false,
    top: false,
    bottom: false
  });
  const onScrollEnd = (e) => {
    if (!isScrolling.value)
      return;
    isScrolling.value = false;
    directions.left = false;
    directions.right = false;
    directions.top = false;
    directions.bottom = false;
    onStop(e);
  };
  const onScrollEndDebounced = useDebounceFn(onScrollEnd, throttle + idle);
  const setArrivedState = (target) => {
    var _a;
    if (!window2)
      return;
    const el = ((_a = target == null ? void 0 : target.document) == null ? void 0 : _a.documentElement) || (target == null ? void 0 : target.documentElement) || unrefElement(target);
    const { display, flexDirection, direction } = getComputedStyle(el);
    const directionMultipler = direction === "rtl" ? -1 : 1;
    const scrollLeft = el.scrollLeft;
    directions.left = scrollLeft < internalX.value;
    directions.right = scrollLeft > internalX.value;
    const left = scrollLeft * directionMultipler <= (offset.left || 0);
    const right = scrollLeft * directionMultipler + el.clientWidth >= el.scrollWidth - (offset.right || 0) - ARRIVED_STATE_THRESHOLD_PIXELS;
    if (display === "flex" && flexDirection === "row-reverse") {
      arrivedState.left = right;
      arrivedState.right = left;
    } else {
      arrivedState.left = left;
      arrivedState.right = right;
    }
    internalX.value = scrollLeft;
    let scrollTop = el.scrollTop;
    if (target === window2.document && !scrollTop)
      scrollTop = window2.document.body.scrollTop;
    directions.top = scrollTop < internalY.value;
    directions.bottom = scrollTop > internalY.value;
    const top = scrollTop <= (offset.top || 0);
    const bottom = scrollTop + el.clientHeight >= el.scrollHeight - (offset.bottom || 0) - ARRIVED_STATE_THRESHOLD_PIXELS;
    if (display === "flex" && flexDirection === "column-reverse") {
      arrivedState.top = bottom;
      arrivedState.bottom = top;
    } else {
      arrivedState.top = top;
      arrivedState.bottom = bottom;
    }
    internalY.value = scrollTop;
  };
  const onScrollHandler = (e) => {
    var _a;
    if (!window2)
      return;
    const eventTarget = (_a = e.target.documentElement) != null ? _a : e.target;
    setArrivedState(eventTarget);
    isScrolling.value = true;
    onScrollEndDebounced(e);
    onScroll(e);
  };
  useEventListener(
    element,
    "scroll",
    throttle ? useThrottleFn(onScrollHandler, throttle, true, false) : onScrollHandler,
    eventListenerOptions
  );
  tryOnMounted(() => {
    try {
      const _element = toValue(element);
      if (!_element)
        return;
      setArrivedState(_element);
    } catch (e) {
      onError(e);
    }
  });
  useEventListener(
    element,
    "scrollend",
    onScrollEnd,
    eventListenerOptions
  );
  return {
    x,
    y,
    isScrolling,
    arrivedState,
    directions,
    measure() {
      const _element = toValue(element);
      if (window2 && _element)
        setArrivedState(_element);
    }
  };
}
function useLocalStorage(key, initialValue, options = {}) {
  const { window: window2 = defaultWindow } = options;
  return useStorage(key, initialValue, window2 == null ? void 0 : window2.localStorage, options);
}
function checkOverflowScroll(ele) {
  const style = window.getComputedStyle(ele);
  if (style.overflowX === "scroll" || style.overflowY === "scroll" || style.overflowX === "auto" && ele.clientWidth < ele.scrollWidth || style.overflowY === "auto" && ele.clientHeight < ele.scrollHeight) {
    return true;
  } else {
    const parent = ele.parentNode;
    if (!parent || parent.tagName === "BODY")
      return false;
    return checkOverflowScroll(parent);
  }
}
function preventDefault(rawEvent) {
  const e = rawEvent || window.event;
  const _target = e.target;
  if (checkOverflowScroll(_target))
    return false;
  if (e.touches.length > 1)
    return true;
  if (e.preventDefault)
    e.preventDefault();
  return false;
}
const elInitialOverflow = /* @__PURE__ */ new WeakMap();
function useScrollLock(element, initialState = false) {
  const isLocked = ref(initialState);
  let stopTouchMoveListener = null;
  let initialOverflow = "";
  watch(toRef(element), (el) => {
    const target = resolveElement(toValue(el));
    if (target) {
      const ele = target;
      if (!elInitialOverflow.get(ele))
        elInitialOverflow.set(ele, ele.style.overflow);
      if (ele.style.overflow !== "hidden")
        initialOverflow = ele.style.overflow;
      if (ele.style.overflow === "hidden")
        return isLocked.value = true;
      if (isLocked.value)
        return ele.style.overflow = "hidden";
    }
  }, {
    immediate: true
  });
  const lock = () => {
    const el = resolveElement(toValue(element));
    if (!el || isLocked.value)
      return;
    if (isIOS) {
      stopTouchMoveListener = useEventListener(
        el,
        "touchmove",
        (e) => {
          preventDefault(e);
        },
        { passive: false }
      );
    }
    el.style.overflow = "hidden";
    isLocked.value = true;
  };
  const unlock = () => {
    const el = resolveElement(toValue(element));
    if (!el || !isLocked.value)
      return;
    if (isIOS)
      stopTouchMoveListener == null ? void 0 : stopTouchMoveListener();
    el.style.overflow = initialOverflow;
    elInitialOverflow.delete(el);
    isLocked.value = false;
  };
  tryOnScopeDispose(unlock);
  return computed({
    get() {
      return isLocked.value;
    },
    set(v) {
      if (v)
        lock();
      else unlock();
    }
  });
}
function useWindowScroll(options = {}) {
  const { window: window2 = defaultWindow, ...rest } = options;
  return useScroll(window2, rest);
}
const _sfc_main$1f = /* @__PURE__ */ defineComponent({
  __name: "Speech",
  props: {
    as: {
      type: String,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    const reading = ref(false);
    const isSupport = useLocalStorage("orientalroad:is-support-speech-synthesis", false);
    const slots = useSlots();
    onMounted(() => {
      if ("speechSynthesis" in window && isSupport.value !== true) {
        const getVoices = () => {
          const voices = window.speechSynthesis.getVoices();
          if (voices.length === 0) {
            setTimeout(getVoices, 1e3);
          } else {
            const result = !!voices.find((voice) => voice.lang === "zh-CN");
            isSupport.value = result;
          }
        };
        getVoices();
      }
    });
    const speak = () => {
      var _a, _b, _c;
      const text = props.as ? props.as : (_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children;
      if (typeof text === "string") {
        reading.value = true;
        var utterance = new SpeechSynthesisUtterance();
        utterance.onend = () => reading.value = false;
        utterance.lang = "zh-CN";
        utterance.text = text;
        utterance.rate = 0.6;
        utterance.pitch = 1;
        utterance.volume = 1;
        window.speechSynthesis.speak(utterance);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", null, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true),
        unref(isSupport) ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: "speak-icon",
          onClick: speak
        }, [
          (openBlock(), createElementBlock("svg", {
            class: normalizeClass({ reading: reading.value }),
            viewBox: "0 0 54 54",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink"
          }, _cache[0] || (_cache[0] = [
            createBaseVNode("g", {
              stroke: "none",
              "stroke-width": "1",
              "fill-rule": "evenodd",
              "data-darkreader-inline-stroke": "",
              style: { "--darkreader-inline-stroke": "none" }
            }, [
              createBaseVNode("path", { d: "M24.1538 5.86289C24.8505 5.23954 25.738 4.95724 26.6005 5.00519C27.463 5.05313 28.3137 5.43204 28.9371 6.12878C29.4928 6.74989 29.8 7.55405 29.8 8.38746V46.28C29.8 47.2149 29.4186 48.0645 28.8078 48.6754C28.197 49.2862 27.3474 49.6675 26.4125 49.6675C25.5843 49.6675 24.7848 49.3641 24.1651 48.8147L13.0526 38.9618C12.5285 38.4971 11.8523 38.2405 11.1518 38.2405H5.3875C4.45261 38.2405 3.603 37.8591 2.99218 37.2483C2.38135 36.6375 2 35.7879 2 34.853V19.7719C2 18.837 2.38135 17.9874 2.99218 17.3766C3.603 16.7658 4.45262 16.3844 5.3875 16.3844H11.2991C12.004 16.3844 12.6841 16.1246 13.2095 15.6546L24.1538 5.86289ZM25.8 9.75731L15.8766 18.6356C14.6178 19.7618 12.9881 20.3844 11.2991 20.3844H6V34.2405H11.1518C12.8302 34.2405 14.4505 34.8553 15.7064 35.9688L25.8 44.9184V9.75731Z" }),
              createBaseVNode("path", { d: "M38.1519 17.8402L36.992 16.2108L33.7333 18.5304L34.8931 20.1598C36.2942 22.1281 37.1487 24.6457 37.1487 27.4131C37.1487 30.1933 36.2862 32.7214 34.8736 34.6937L33.709 36.3197L36.9609 38.6488L38.1255 37.0229C40.0285 34.366 41.1487 31.0221 41.1487 27.4131C41.1487 23.8207 40.0388 20.4911 38.1519 17.8402Z" }),
              createBaseVNode("path", { d: "M43.617 8.17398L44.9714 9.64556C49.0913 14.1219 51.6179 20.3637 51.6179 27.2257C51.6179 34.0838 49.0943 40.3223 44.9787 44.798L43.6249 46.2702L40.6805 43.5627L42.0343 42.0905C45.4542 38.3714 47.6179 33.1061 47.6179 27.2257C47.6179 21.3419 45.4516 16.0739 42.0282 12.3544L40.6738 10.8828L43.617 8.17398Z" })
            ], -1)
          ]), 2))
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const Speech = /* @__PURE__ */ _export_sfc(_sfc_main$1f, [["__scopeId", "data-v-d98f196d"]]);
const _hoisted_1$12 = { class: "wrapper" };
const _hoisted_2$H = { class: "text" };
const _hoisted_3$r = { class: "description" };
const _sfc_main$1e = {
  __name: "Chinese",
  props: ["word", "as"],
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$12, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(props.word.split(""), (w) => {
          return openBlock(), createElementBlock("div", {
            class: "word",
            key: w
          }, [
            createBaseVNode("div", _hoisted_2$H, toDisplayString(w), 1),
            _cache[0] || (_cache[0] = createBaseVNode("div", { class: "dash middle" }, null, -1)),
            _cache[1] || (_cache[1] = createBaseVNode("div", { class: "dash vertical" }, null, -1))
          ]);
        }), 128)),
        createBaseVNode("div", _hoisted_3$r, [
          createBaseVNode("div", null, [
            renderSlot(_ctx.$slots, "pinyin", {}, void 0, true),
            _cache[2] || (_cache[2] = createTextVNode()),
            renderSlot(_ctx.$slots, "ipa", {}, void 0, true),
            createVNode(Speech, {
              as: props.as || props.word
            }, null, 8, ["as"])
          ]),
          createBaseVNode("div", null, [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ])
        ])
      ]);
    };
  }
};
const Chinese = /* @__PURE__ */ _export_sfc(_sfc_main$1e, [["__scopeId", "data-v-1259b2fc"]]);
const langRoot = "en";
const locales = {
  root: {
    label: "English",
    lang: "en",
    region: "International",
    redirectTemplate: "We noticed your browser language is set to English. Visit our :locale site for the best experience.",
    dateFormatter: new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    })
  },
  ja: {
    label: "日本語",
    lang: "ja-JP",
    region: "日本",
    currency: "JPY",
    redirectTemplate: "ブラウザの言語設定が 日本語 です。最良の体験のために、:locale サイトをご利用ください。",
    dateFormatter: new Intl.DateTimeFormat("ja-JP", {
      year: "numeric",
      month: "long",
      day: "numeric",
      era: "long"
    })
  }
  // ko: {
  //   label: '한국어',
  //   lang: 'ko-KR',
  //   region: '한국',
  //   currency: 'KRW',
  //   dateFormatter: new Intl.DateTimeFormat('en-US', {
  //     year: 'numeric',
  //     month: 'long',
  //     day: 'numeric',
  //   }),
  // },
  // th: { label: 'ภาษาไทย', lang: 'th-TH' },
  // ms: { label: 'Bahasa Melayu', lang: 'ms-MY' },
};
const langs = [langRoot].concat(Object.keys(locales).filter((locale) => locale !== "root"));
const currencies = {
  CNY: {
    name: "Chinese Yuan",
    ratio: 1,
    unit: "¥"
  },
  EUR: {
    name: "Euros",
    ratio: 0.1319,
    unit: "€"
  },
  USD: {
    name: "U.S. Dollars",
    ratio: 0.1379,
    unit: "$"
  },
  GBP: {
    name: "British Pounds",
    ratio: 0.1092,
    unit: "£"
  },
  JPY: {
    name: "Japanese Yen",
    ratio: 20.5887,
    unit: "¥"
  },
  KRW: {
    name: "South Korean Won",
    ratio: 197.76,
    unit: "₩"
  },
  THB: {
    name: "Thai Baht",
    ratio: 4.6288,
    unit: "฿"
  },
  MYR: {
    name: "Malaysian Ringgit",
    ratio: 0.6093,
    unit: "RM"
  },
  SGD: {
    name: "Singapore Dollars",
    ratio: 0.1843,
    unit: "$"
  }
};
const message = {
  "ja-JP": {
    "China Nationwide": "中国全土",
    Destinations: "目的地",
    Inspiration: "インスピレーション",
    Interests: "興味",
    "Travel Essentials": "旅行準備情報",
    Search: "検索",
    "Region and Language": "地域と言語",
    Currency: "通貨",
    "Suggested region and language": "提案された地域と言語",
    "Choose a region and language": "地域と言語を選択",
    "Choose a currency": "通貨を選択",
    "Most Popular": "人気のある",
    Regions: "地域",
    "Administrative Divisions": "行政区分",
    "240-Hour Staying Areas": "240時間滞在区域",
    North: "北",
    Articles: "記事",
    "China Travel Stories": "中国旅行物語",
    East: "東",
    Southwest: "南西",
    South: "南",
    Northwest: "北西",
    Central: "中央",
    Northeast: "北東",
    "Shaanxi Province": "陝西省",
    "Guangxi Province": "広西省",
    "Beijing Municipality": "北京市",
    "Tianjin Municipality": "天津市",
    "Hebei Province": "河北省",
    "Shanghai Municipality": "上海市",
    "Jiangsu Province": "江蘇省",
    "Zhejiang Province": "浙江省",
    "Chengdu, Luzhou, Suining, Leshan, Ya'an, Ziyang, Zigong, Deyang, Neijiang, Yibin, Meishan": "成都、瀘州、遂寧、楽山、雅安、資陽、自貢、徳陽、内江、宜賓、眉山",
    "Guangdong Province": "広東省",
    "Kunming, Chuxiong, Wenshan, Xishuangbanna, Dali, Yuxi, Honghe, Pu'er, Lijiang": "昆明、楚雄、文山、西双版纳、大理、玉溪、紅河、普洱、麗江",
    "Chongqing Municipality": "重慶市",
    "Hubei Province": "湖北省",
    "Guizhou Province": "貴州省",
    "Hainan Province": "海南省",
    "Yunnan Province": "雲南省",
    "Hunan Province": "湖南省",
    "Liaoning Province": "遼寧省",
    "Heilongjiang Province": "黒龍江省",
    "Sichuan Province": "四川省",
    "Fujian Province": "福建省",
    "Guangxi Zhuang Autonomous Region": "広西チワン族自治区",
    "Henan Province": "河南省",
    "Anhui Province": "安徽省",
    "Shanxi Province": "山西省",
    "Jiangxi Province": "江西省",
    "Opens at ": "オープン時間 ",
    "Suggested tour time ": "お勧めの観光時間 ",
    hours: "時間",
    Guilin: "桂林",
    Yangzhou: "揚州",
    Guiyang: "貴陽",
    Yiwu: "義烏",
    Fuzhou: "福州",
    Quanzhou: "泉州",
    Wuyishan: "武夷山",
    Jinan: "済南",
    Weihai: "威海",
    Yantai: "煙台",
    Nanning: "南寧",
    "Nanning, Guilin, Beihai, Qinzhou, Yulin, Hechi, Liuzhou, Wuzhou, Fangchenggang, Guigang, Hezhou, Laibin": "南寧、桂林、北海、欽州、玉林、河池、柳州、梧州、防城港、貴港、賀州、來賓",
    Hefei: "合肥",
    Huangshan: "黄山",
    Datong: "大同",
    "Taiyuan, Datong": "太原、大同",
    Taiyuan: "太原",
    Jingdezhen: "景徳鎮",
    "Nanchang, Jingdezhen": "南昌、景徳鎮",
    Nanchang: "南昌",
    Beihai: "北海",
    Shenyang: "瀋陽",
    Zhengzhou: "鄭州",
    Harbin: "ハルビン",
    Hangzhou: "杭州",
    Wenzhou: "温州",
    Changsha: "長沙",
    Sanya: "三亜",
    Dalian: "大連",
    Zhangjiajie: "張家界",
    Zhoushan: "舟山",
    Ningbo: "寧波",
    Suzhou: "蘇州",
    Nanjing: "南京",
    Lianyungang: "連雲港",
    Shanghai: "上海",
    Qinhuangdao: "秦皇島",
    Shijiazhuang: "石家荘",
    Tianjin: "天津",
    Beijing: "北京",
    Chongqing: "重慶",
    Qingdao: "青島",
    Chengdu: "成都",
    Shantou: "汕頭",
    Guangzhou: "広州",
    Xishuangbanna: "西双版纳",
    Chuxiong: "楚雄",
    Shenzhen: "深圳",
    Dali: "大理",
    China: "中國",
    "Pu'er": "プーアル",
    Yuxi: "玉渓",
    Lijiang: "麗江",
    Xiamen: "厦門",
    Kunming: "昆明",
    "Xi'an": "西安",
    "Xi'an and Xianyang": "西安と咸陽",
    "Shandong Province": "山東省",
    Wuhan: "武漢",
    Attractions: "観光スポット",
    "Must-see attractions": "見逃せない観光スポット",
    " Attractions": "観光スポット",
    Cuisine: "料理",
    "Get There": "アクセス",
    Hotels: "ホテル",
    Overview: "概要",
    Introduction: "紹介",
    "Top destinations": "人気の目的地",
    "Most popular destinations": "最も人気のある目的地",
    "All destinations": "すべての目的地",
    "Articles by interest": "興味別記事",
    "See all articles": "すべての記事を見る",
    "Chinese City Walk": "中国シティウォーク",
    "Natural Scenery": "自然景観",
    "Chinese Cultural Heritage": "中国の文化遺産",
    "Pandas and Other Animals": "パンダを含む他の動物们",
    "Beaches, Coasts and Islands": "ビーチ、海岸、島々",
    "Chinese Festivals": "中国の祭り",
    "Chinese Cuisine Culture": "中国の食文化",
    "Before you go": "出発前の準備",
    Transportation: "交通",
    Itineraries: "旅程",
    Learn: "学ぶ",
    Facts: "基本情報",
    "240-hour staying areas": "240時間滞在エリア",
    "Back to top": "トップに戻る",
    "See all guides": "すべてのガイドを見る",
    "More Destinations": "その他の目的地",
    "About Us": "私たちについて",
    "Privacy Policy": "プライバシーポリシー",
    "Terms and Conditions": "利用規約",
    "Southwest China": "中国西南部",
    "Northwest China": "中国西北部",
    "Northeast China": "中国東北部",
    "North China": "中国北部",
    "East China": "中国東部",
    "Central China": "中国中部",
    "South China": "中国南部",
    "most visited in China": "日本客が訪れる中国観光地",
    "Contact Us": "お問い合わせ",
    Advertising: "広告",
    Destination: "目的地",
    References: "参照情報",
    Haikou: "海口",
    "240-Hour Transit Visa": "240時間トランジットビザ",
    "Travel stories": "旅行記",
    "How to arrive": "どのように到着するか",
    "See all attractions": "すべての観光スポットを見る",
    Attraction: "観光スポット",
    attractions: "観光スポット",
    Guides: "ガイド",
    Help: "ヘルプ",
    "More Guides": "もっとガイドを見る",
    "More Articles": "もっと見る",
    Provinces: "省",
    "Off-season": "オフシーズン",
    "Peak Season": "ピークシーズン",
    Nearby: "近隣",
    "No Entry Fee": "チケット不要",
    "How to Get There": "どのように到着するか",
    "Plan Your Stay": "滞在を計画する",
    "Explore the Area": "エリアを探索",
    "Click to enable map drag and zoom.": "クリックして地図のドラッグとズームを有効に。",
    " kilometers": "キロメートル",
    "from ": "から ",
    "Folklore and Ethnic Culture": "民俗風情ツアー",
    "Science and Innovation": "科学とイノベーション",
    "Chinese Characteristic Themes": "中国特有テーマ",
    " in ": "で",
    " min": " 分",
    "Articles by interests": "興味に基づく記事",
    Seasons: "季節",
    "Best time to visit": "最適な訪問時期",
    Name: "名称",
    Climate: "気候",
    Area: "面積",
    Population: "人口",
    Geography: "地理",
    "Subtropical moist monsoon climate": "亜熱帯湿潤モンスーン気候",
    " million": " 百万",
    "Warm-temperate semi-humid to semi-arid climate": "暖温帯半湿润から半乾燥気候",
    "Subtropical monsoon climate": "亜熱帯モンスーン気候",
    "Warm temperate semi-humid monsoonal climate": "温帯半湿潤モンスーン気候",
    "Warm-temperate semi-humid monsoon climate": "温帯半湿潤モンスーン気候",
    "Subtropical humid climate": "亜熱帯湿潤気候",
    "Tropical monsoon climate": "熱帯モンスーン気候",
    "Tropical marine monsoon climate": "熱帯海洋性モンスーン気候",
    "Warm temperate monsoon climate": "温帯モンスーン気候",
    "Temperate continental monsoon climate": "温帯大陸性モンスーン気候",
    "Temperate monsoon climate": "温帯モンスーン気候",
    "Subtropical monsoon maritime climate": "亜熱帯海洋性モンスーン気候",
    "Mild subtropical climate.": "温暖な亜熱帯気候",
    "Subtropical to tropical maritime climate": "亜熱帯から熱帯の海洋性気候",
    "South subtropical marine monsoon climate": "南亜熱帯海洋性モンスーン気候",
    "Subtropical highland mountain monsoon climate": "亜熱帯高地山岳モンスーン気候",
    "Semi-humid mountain monsoon climate": "半湿潤山岳モンスーン気候",
    "Low-latitude plateau monsoon climate": "低緯度高原モンスーン気候",
    "Subtropical mountainous monsoon humid climate": "亜熱帯山地モンスーン湿潤気候",
    "Fewer visitors, lower costs.": "観光客が少なく、コストが低い",
    "Subtropical maritime monsoon climate": "亜熱帯海洋性モンスーン気候",
    "Subtropical marine monsoon climate": "亜熱帯海洋性モンスーン気候",
    "Temperate humid continental climate": "温帯湿潤大陸性気候",
    "Warm temperate continental monsoon climate": "温帯大陸性モンスーン気候",
    "Temperate semi-arid monsoon climate": "温帯半乾燥モンスーン気候",
    Festival: "祭り",
    Highlight: "ハイライト",
    "Get inspired by travel stories": "旅行の物語にインスピレーションを得る",
    "Explore places in China": "中国内の観光地を探访する",
    "Things you must know": "知っておくべきこと",
    "Get inspired by latest travel stories": "最新の旅行ストーリーでインスピレーションを得る",
    "Local's Recommended Exploration Guides": "現地おすすめ探検ガイド",
    "Read more articles": "もっと記事を読む",
    "Trending destinations": "トレンドの目的地",
    "Top Travelers' Choice": "日本人旅行者のトップチョイス",
    "View all destinations": "すべての目的地を表示",
    "The most incredible attractions": "最も驚くべき観光地",
    "More to know": "もっと知る",
    "Read more guides": "もっとガイドを読む",
    " km away": " km先には",
    "Gathering YouTube awesomeness...": "YouTubeのコンテンツを読み込んでいます...",
    "Book Tickets": "チケット予約",
    "See all attractions in ": "全ての観光地を見る",
    "Book your trip": "旅を予約する",
    Flights: "フライト",
    Trains: "列車",
    "Loading Google Maps": "グーグルマップを読み込み中",
    "Read more": "続きを読む",
    "Oriental Review": "オリエンタルレビュー",
    "Read less": "一部のみ表示する",
    "Review from Local Expert": "ローカルエキスパートからのレビュー",
    " tourism": "旅行"
  },
  "ko-KR": {
    Introduction: "소개",
    Interests: "관심사",
    Transportation: "교통",
    Nearby: "주변",
    "most visited in China": "한국인이 방문하는 중국 관광지"
  }
};
function useCurrency(amountInCNY = 0) {
  const currency = useLocalStorage("orientalroad:currency", "CNY");
  const formattedAmount = computed(() => {
    const { unit, ratio } = currencies[currency.value];
    const amount = (amountInCNY * ratio).toFixed(1);
    return `${unit}${amount}`;
  });
  return { currency, current: currencies[currency.value], currencies, formattedAmount };
}
const _sfc_main$1d = {
  __name: "CNY",
  setup(__props) {
    var _a, _b, _c;
    const slots = useSlots();
    const { formattedAmount } = useCurrency(((_c = (_b = (_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children) || 0);
    return (_ctx, _cache) => {
      return toDisplayString(unref(formattedAmount));
    };
  }
};
const _hoisted_1$11 = { class: "container" };
const _hoisted_2$G = { class: "left-side" };
const _hoisted_3$q = ["id"];
const _hoisted_4$i = { key: 0 };
const _sfc_main$1c = /* @__PURE__ */ defineComponent({
  __name: "H2",
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: String
    },
    subtitle: {
      type: String
    },
    actionVisible: {
      type: Boolean,
      default: true
    },
    actionText: {
      type: String
    },
    actionLink: {
      type: String
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      var _a;
      const _component_Translate = resolveComponent("Translate");
      const _component_Link = resolveComponent("Link");
      return openBlock(), createElementBlock(Fragment, null, [
        _cache[0] || (_cache[0] = createBaseVNode("hr", { class: "border-none" }, null, -1)),
        createBaseVNode("section", null, [
          createBaseVNode("div", _hoisted_1$11, [
            createBaseVNode("div", _hoisted_2$G, [
              createBaseVNode("h2", {
                id: __props.id || ((_a = __props.title) == null ? void 0 : _a.toLowerCase())
              }, [
                createVNode(_component_Translate, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(__props.title), 1)
                  ]),
                  _: 1
                })
              ], 8, _hoisted_3$q),
              __props.subtitle ? (openBlock(), createElementBlock("h3", _hoisted_4$i, [
                createVNode(_component_Translate, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(__props.subtitle), 1)
                  ]),
                  _: 1
                })
              ])) : createCommentVNode("", true)
            ]),
            __props.actionVisible !== false && __props.actionText && __props.actionLink ? (openBlock(), createBlock(_component_Link, {
              key: 0,
              class: "more",
              href: __props.actionLink
            }, {
              default: withCtx(() => [
                createVNode(_component_Translate, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(__props.actionText), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["href"])) : createCommentVNode("", true)
          ]),
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])
      ], 64);
    };
  }
});
const H2 = /* @__PURE__ */ _export_sfc(_sfc_main$1c, [["__scopeId", "data-v-f38098ba"]]);
const _hoisted_1$10 = { class: "container" };
const _hoisted_2$F = ["id"];
const _sfc_main$1b = /* @__PURE__ */ defineComponent({
  __name: "H4",
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: String
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      var _a;
      const _component_Translate = resolveComponent("Translate");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$10, [
          createBaseVNode("h4", {
            id: __props.id || ((_a = __props.title) == null ? void 0 : _a.toLowerCase())
          }, [
            createVNode(_component_Translate, null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(__props.title), 1)
              ]),
              _: 1
            })
          ], 8, _hoisted_2$F)
        ]),
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 64);
    };
  }
});
const H4 = /* @__PURE__ */ _export_sfc(_sfc_main$1b, [["__scopeId", "data-v-9b03ddd6"]]);
const _hoisted_1$$ = ["data-src", "alt"];
const _sfc_main$1a = {
  __name: "LazyLoadImage",
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const imageRef = ref(null);
    const isLoaded = ref(false);
    const loadImage = (imgElement) => {
      if (imgElement && imgElement.dataset.src) {
        imgElement.src = imgElement.dataset.src;
      }
    };
    const handleImageLoad = () => {
      isLoaded.value = true;
    };
    const lazyLoadImage = () => {
      if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              loadImage(entry.target);
              observer.unobserve(entry.target);
            }
          });
        });
        observer.observe(imageRef.value);
      } else {
        loadImage(imageRef.value);
      }
    };
    onMounted(() => {
      lazyLoadImage();
    });
    watch(
      () => props.src,
      () => {
        lazyLoadImage();
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("img", {
        ref_key: "imageRef",
        ref: imageRef,
        "data-src": __props.src,
        alt: __props.alt,
        class: normalizeClass({ loaded: isLoaded.value }),
        onLoad: handleImageLoad
      }, null, 42, _hoisted_1$$);
    };
  }
};
const LazyLoadImage = /* @__PURE__ */ _export_sfc(_sfc_main$1a, [["__scopeId", "data-v-69a60077"]]);
function normalizeLink$3(href, localeIndex) {
  if (typeof href !== "string") return;
  if (localeIndex === "root") return href.replace(new RegExp(`^/${langRoot}/`), "");
  if (typeof href !== "string") return;
  const uri = href.split("/");
  if (uri[1] === langRoot) {
    return ["", ...uri.slice(2)].join("/");
  }
  if (langs.includes(uri[1])) {
    return ["", localeIndex, uri.slice(2).filter(Boolean).join("/")].join("/");
  }
  return ["", localeIndex, uri.filter(Boolean).join("/")].join("/");
}
function removeLocaleFromUrl(href) {
  const [, h, ...rest] = href.split("/");
  return langs.includes(h) ? ["", ...rest].join("/") : href;
}
const _hoisted_1$_ = ["href", "alt", "target", "hreflang"];
const _sfc_main$19 = /* @__PURE__ */ defineComponent({
  __name: "Link",
  props: {
    href: {
      type: String
    },
    target: {
      type: String
    },
    alt: {
      type: String
    }
  },
  setup(__props) {
    const { localeIndex } = useData$1();
    useSlots();
    const link = computed(() => {
      return normalizeLink$3(__props.href, localeIndex.value);
    });
    const hreflang = computed(() => {
      return localeIndex.value === "root" ? langRoot : localeIndex.value;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        href: link.value || void 0,
        alt: __props.alt,
        target: __props.target,
        hreflang: hreflang.value
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 8, _hoisted_1$_);
    };
  }
});
function useLocale() {
  const { lang } = useData$1();
  const $t = (key) => {
    var _a, _b;
    if (key && typeof ((_a = message == null ? void 0 : message[lang.value]) == null ? void 0 : _a[key]) === "string")
      return (_b = message == null ? void 0 : message[lang.value]) == null ? void 0 : _b[key];
    return key;
  };
  return { $t };
}
const _sfc_main$18 = /* @__PURE__ */ defineComponent({
  __name: "Translate",
  setup(__props) {
    const { $t } = useLocale();
    const slots = useSlots();
    return (_ctx, _cache) => {
      var _a, _b, _c;
      return toDisplayString(unref($t)((_c = (_b = (_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children));
    };
  }
});
const beijingAvatar = "/assets/beijing.CltVUTZv.webp";
const chengduAvatar = "/assets/chengdu.BMUo53eT.webp";
const daliAvatar = "/assets/dali.C3HW5B8J.webp";
const dalianAvatar = "/assets/dalian.CQYOR8nx.webp";
const guangzhouAvatar = "/assets/guangzhou.D0whMEoz.webp";
const haikouAvatar = "/assets/haikou.Bku5SRfI.webp";
const harbinAvatar = "/assets/harbin.DtZRS7an.webp";
const huangshanAvatar = "/assets/huangshan.CZboos0y.webp";
const lijiangAvatar = "/assets/lijiang.CA_eNE-u.webp";
const sanyaAvatar = "/assets/sanya.zXeyB4rs.webp";
const shanghaiAvatar = "/assets/shanghai.DkGMaoA9.webp";
const shantouAvatar = "/assets/shantou.CGpdwHXq.webp";
const shenzhenAvatar = "/assets/shenzhen.Dqajyivy.webp";
const suzhouAvatar = "/assets/suzhou.DqT9G2rI.webp";
const wuhanAvatar = "/assets/wuhan.CuaE0-Up.webp";
const xiamenAvatar = "/assets/xiamen.8qPpmaXm.webp";
const zhangjiajieAvatar = "/assets/zhangjiajie.CmaIcrdI.webp";
const beijingCoverM = "/assets/beijing.m.CyuFG51M.webp";
const beijingCover = "/assets/beijing.DVvpmBy5.webp";
const chongqingCoverM = "/assets/chongqing.m.CLCtbWOB.webp";
const chongqingCover = "/assets/chongqing.DCQR9aGK.webp";
const daliCoverM = "/assets/dali.m.CaBQxykz.webp";
const daliCover = "/assets/dali.DyWAf26_.webp";
const dalianCoverM = "/assets/dalian.m.CPqRla9e.webp";
const dalianCover = "/assets/dalian.CdX8JzXP.webp";
const guangzhouCoverM = "/assets/guangzhou.m.BYmXjavS.webp";
const guangzhouCover = "/assets/guangzhou.o18IzNRE.webp";
const hangzhouCover = "/assets/hangzhou.center.8eabf02d.webp";
const hangzhouCoverM = "/assets/hangzhou.m.center.3e2bef5e.webp";
const lijiangCoverM = "/assets/lijiang.m.BUwSUVcx.webp";
const lijiangCover = "/assets/lijiang.BAKxZRI4.webp";
const sanyaCoverM = "/assets/sanya.m.9TlqTy22.webp";
const sanyaCover = "/assets/sanya.Ce4Bb6Ic.webp";
const shanghaiCoverM = "/assets/shanghai.m.B1dqbLer.webp";
const shanghaiCover = "/assets/shanghai.DpeWDSxf.webp";
const shenzhenCoverM = "/assets/shenzhen.m.CTOQ3CH0.webp";
const shenzhenCover = "/assets/shenzhen.Do1hpkw8.webp";
const zhangjiajieCoverM = "/assets/zhangjiajie.m.BaDijQuc.webp";
const zhangjiajieCover = "/assets/zhangjiajie.BS8Z7_Ie.webp";
const beihaiAvatar310 = "/assets/beihai.310x310.center.1c866a65.webp";
const chongqingAvatar310 = "/assets/chongqing.310x310.center.2205ff0c.webp";
const datongAvatar310 = "/assets/datong.310x310.center.1dcdee7c.webp";
const guilinAvatar310 = "/assets/guilin.310x310.center.2f909dd3.webp";
const guiyangAvatar310 = "/assets/guiyang.310x310.center.39ea678b.webp";
const hefeiAvatar310 = "/assets/hefei.310x310.center.26561b54.webp";
const jinanAvatar310 = "/assets/jinan.310x310.center.b4d3013f.webp";
const nanchangAvatar310 = "/assets/nanchang.310x310.center.7a0aec79.webp";
const nanjingAvatar310 = "/assets/nanjing.310x310.center.564b0e61.webp";
const qinhuangdaoAvatar310 = "/assets/qinhuangdao.310x310.right.2ee06c33.webp";
const shenyangAvatar310 = "/assets/shenyang.310x310.center.79197c9e.webp";
const shijiazhuangAvatar310 = "/assets/shijiazhuang.310x310.center.0af3ff21.webp";
const taiyuanAvatar310 = "/assets/taiyuan.310x310.right.e876b20f.webp";
const tianjinAvatar310 = "/assets/tianjin.310x310.center.a77f934a.webp";
const weihaiAvatar310 = "/assets/weihai.310x310.center.8a808b5e.webp";
const wenzhouAvatar310 = "/assets/wenzhou.310x310.left.e2c31560.webp";
const xianAvatar310 = "/assets/xi-an.310x310.center.266a4283.webp";
const xishuangbannaAvatar310 = "/assets/xishuangbanna.310x310.center.4d672eb7.webp";
const yangzhouAvatar310 = "/assets/yangzhou.310x310.center.11a1dbcc.webp";
const zhengzhouAvatar310 = "/assets/zhengzhou.310x310.center.fcc8e771.webp";
const zhoushanAvatar310 = "/assets/zhoushan.310x310.center.4e63c1c4.webp";
const destinationsAssets = {
  Beijing: {
    avatar: beijingAvatar,
    cover: beijingCover,
    cover_mobile: beijingCoverM
  },
  Tianjin: {
    avatar: tianjinAvatar310
  },
  Shanghai: {
    avatar: shanghaiAvatar,
    cover: shanghaiCover,
    cover_mobile: shanghaiCoverM
  },
  Chongqing: {
    avatar: chongqingAvatar310,
    cover: chongqingCover,
    cover_mobile: chongqingCoverM
  },
  ["Xi'an"]: {
    avatar: xianAvatar310
  },
  Wuhan: {
    avatar: wuhanAvatar
  },
  Guiyang: {
    avatar: guiyangAvatar310
  },
  Haikou: {
    avatar: haikouAvatar
  },
  Sanya: {
    avatar: sanyaAvatar,
    cover: sanyaCover,
    cover_mobile: sanyaCoverM
  },
  Shijiazhuang: {
    avatar: shijiazhuangAvatar310
  },
  Qinhuangdao: {
    avatar: qinhuangdaoAvatar310
  },
  Nanjing: { avatar: nanjingAvatar310 },
  Lianyungang: {},
  Suzhou: {
    avatar: suzhouAvatar
  },
  Yangzhou: { avatar: yangzhouAvatar310 },
  Hangzhou: {
    avatar: "/assets/hangzhou_avatar.webp",
    cover: hangzhouCover,
    cover_mobile: hangzhouCoverM
  },
  Ningbo: {},
  Yiwu: {},
  Wenzhou: { avatar: wenzhouAvatar310 },
  Zhoushan: { avatar: zhoushanAvatar310 },
  Guangzhou: {
    avatar: guangzhouAvatar,
    cover: guangzhouCover,
    cover_mobile: guangzhouCoverM
  },
  Shenzhen: {
    avatar: shenzhenAvatar,
    cover: shenzhenCover,
    cover_mobile: shenzhenCoverM
  },
  Shantou: {
    avatar: shantouAvatar
  },
  Kunming: {},
  Xishuangbanna: {
    avatar: xishuangbannaAvatar310
  },
  Lijiang: {
    avatar: lijiangAvatar,
    cover: lijiangCover,
    cover_mobile: lijiangCoverM
  },
  Dali: {
    avatar: daliAvatar,
    cover: daliCover,
    cover_mobile: daliCoverM
  },
  Changsha: {},
  Zhangjiajie: {
    avatar: zhangjiajieAvatar,
    cover: zhangjiajieCover,
    cover_mobile: zhangjiajieCoverM
  },
  Dalian: {
    avatar: dalianAvatar,
    cover: dalianCover,
    cover_mobile: dalianCoverM
  },
  Harbin: {
    avatar: harbinAvatar
  },
  Chengdu: {
    avatar: chengduAvatar
  },
  Fuzhou: {},
  Wuyishan: {},
  Quanzhou: {},
  Xiamen: {
    avatar: xiamenAvatar
  },
  Jinan: {
    avatar: jinanAvatar310
  },
  Weihai: {
    avatar: weihaiAvatar310
  },
  Yantai: {},
  Qingdao: {
    avatar: "/assets/qingdao_avatar.webp"
  },
  Nanning: {},
  Guilin: { avatar: guilinAvatar310 },
  Beihai: {
    avatar: beihaiAvatar310
  },
  Shenyang: {
    avatar: shenyangAvatar310
  },
  Zhengzhou: {
    avatar: zhengzhouAvatar310
  },
  Hefei: {
    avatar: hefeiAvatar310
  },
  Huangshan: {
    avatar: huangshanAvatar
  },
  Taiyuan: { avatar: taiyuanAvatar310 },
  Datong: { avatar: datongAvatar310 },
  Nanchang: { avatar: nanchangAvatar310 },
  Jingdezhen: {}
};
const _hoisted_1$Z = { class: "screen-modal" };
const _sfc_main$17 = /* @__PURE__ */ defineComponent({
  __name: "ScreenModal",
  props: {
    expand: {
      type: Boolean,
      default: false
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _cache) => {
      const _component_Translate = resolveComponent("Translate");
      return __props.expand ? (openBlock(), createBlock(Teleport, {
        key: 0,
        to: "body"
      }, [
        __props.expand ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "back",
          onClick: _cache[0] || (_cache[0] = ($event) => emit("close"))
        }, [
          _cache[1] || (_cache[1] = createBaseVNode("div", { class: "vpi-chevron-down text-icon left" }, null, -1)),
          createVNode(_component_Translate, null, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(__props.expand), 1)
            ]),
            _: 1
          })
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_1$Z, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
const ScreenModal = /* @__PURE__ */ _export_sfc(_sfc_main$17, [["__scopeId", "data-v-ed754f6a"]]);
const _hoisted_1$Y = { class: "VPLocalNavItem" };
const _hoisted_2$E = { class: "menu-text" };
const _sfc_main$16 = /* @__PURE__ */ defineComponent({
  __name: "LocalNavItem",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$Y, [
        createBaseVNode("button", null, [
          createBaseVNode("span", _hoisted_2$E, [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ]),
          _cache[0] || (_cache[0] = createBaseVNode("span", { class: "vpi-chevron-right icon" }, null, -1))
        ])
      ]);
    };
  }
});
const LocalNavItem = /* @__PURE__ */ _export_sfc(_sfc_main$16, [["__scopeId", "data-v-8c8fc7bb"]]);
const data$1 = JSON.parse(`{"topPlaces":{"root":[{"name":"Beijing","text":"Beijing","link":"/beijing"},{"name":"Shanghai","text":"Shanghai","link":"/shanghai"},{"name":"Chengdu","text":"Chengdu","link":"/chengdu"},{"name":"Chongqing","text":"Chongqing","link":"/chongqing"},{"name":"Xi'an","text":"Xi'an","link":"/xi-an"},{"name":"Lijiang","text":"Lijiang","link":"/lijiang"},{"name":"Guangzhou","text":"Guangzhou","link":"/guangzhou"},{"name":"Hangzhou","text":"Hangzhou","link":"/hangzhou"},{"name":"Qingdao","text":"Qingdao","link":"/qingdao"},{"name":"Shenzhen","text":"Shenzhen","link":"/shenzhen"},{"name":"Nanjing","text":"Nanjing","link":"/nanjing"},{"name":"Shenyang","text":"Shenyang","link":"/shenyang"},{"name":"Xiamen","text":"Xiamen","link":"/xiamen"},{"name":"Kunming","text":"Kunming","link":"/kunming"},{"name":"Wuhan","text":"Wuhan","link":"/wuhan"},{"name":"Dalian","text":"Dalian","link":"/dalian"},{"name":"Harbin","text":"Harbin","link":"/harbin"},{"name":"Tianjin","text":"Tianjin","link":"/tianjin"},{"name":"Sanya","text":"Sanya","link":"/sanya"},{"name":"Ningbo","text":"Ningbo","link":"/ningbo"}],"ja":[{"name":"Beijing","text":"北京","link":"/beijing"},{"name":"Shanghai","text":"上海","link":"/shanghai"},{"name":"Xi'an","text":"西安","link":"/xi-an"},{"name":"Suzhou","text":"蘇州","link":"/suzhou"},{"name":"Hangzhou","text":"杭州","link":"/hangzhou"},{"name":"Chengdu","text":"成都","link":"/chengdu"},{"name":"Harbin","text":"ハルビン","link":"/harbin"},{"name":"Qingdao","text":"青島","link":"/qingdao"},{"name":"Nanjing","text":"南京","link":"/nanjing"},{"name":"Dalian","text":"大連","link":"/dalian"},{"name":"Shenyang","text":"瀋陽","link":"/shenyang"},{"name":"Lijiang","text":"麗江","link":"/lijiang"},{"name":"Huangshan","text":"黄山","link":"/huangshan"},{"name":"Wuhan","text":"武漢","link":"/wuhan"},{"name":"Tianjin","text":"天津","link":"/tianjin"},{"name":"Xiamen","text":"厦門","link":"/xiamen"},{"name":"Kunming","text":"昆明","link":"/kunming"},{"name":"Chongqing","text":"重慶","link":"/chongqing"},{"name":"Guangzhou","text":"広州","link":"/guangzhou"},{"name":"Shenzhen","text":"深圳","link":"/shenzhen"}]},"latestInterests":{"root":[{"name":"korean-edu-chief-retirement-trip-tiger-gorge-dragon-snow-mountain","text":"A Retired Korean Education Chief's Journey to Tiger Leaping Gorge and Jade Dragon Snow Mountain","link":"/articles/korean-edu-chief-retirement-trip-tiger-gorge-dragon-snow-mountain"},{"name":"japanese-friends-3-night-5-day-weekend-in-chongqing","text":"Chongqing Travel: 3-Night, 5-Day Weekend Adventure with Japanese Friends","link":"/articles/japanese-friends-3-night-5-day-weekend-in-chongqing"},{"name":"irish-couple-explores-guangzhou-food-history-and-culture","text":"Irish Couple Explores Guangzhou: Food, History, and Culture🇨🇳","link":"/articles/irish-couple-explores-guangzhou-food-history-and-culture"},{"name":"italian-guy-loves-china-and-will-return-to-chongqing","text":"Italian Guy Loves China and Will Return to Chongqing","link":"/articles/italian-guy-loves-china-and-will-return-to-chongqing"},{"name":"joels-chengdu-adventure","text":"Joel's Chengdu Adventure: Pandas, Hotpot, and Cultural Wonders","link":"/articles/joels-chengdu-adventure"},{"name":"yunnan-specialty-cuisine","text":"Experience Yunnan's Specialty Cuisine","link":"/articles/yunnan-specialty-cuisine"}],"ja":[{"name":"korean-edu-chief-retirement-trip-tiger-gorge-dragon-snow-mountain","text":"韓国教育長の退職旅：虎跳峽と玉龍雪山","link":"/articles/korean-edu-chief-retirement-trip-tiger-gorge-dragon-snow-mountain"},{"name":"japanese-friends-3-night-5-day-weekend-in-chongqing","text":"重慶旅行・3泊5日の週末体験 | 一騎と友人たちの探検記","link":"/articles/japanese-friends-3-night-5-day-weekend-in-chongqing"},{"name":"irish-couple-explores-guangzhou-food-history-and-culture","text":"アイルランド夫妻が広州を探索：食事、歴史、文化🇨🇳","link":"/articles/irish-couple-explores-guangzhou-food-history-and-culture"},{"name":"italian-guy-loves-china-and-will-return-to-chongqing","text":"イタリアの男性は中国が大好きで、重慶に再び訪れる予定です","link":"/articles/italian-guy-loves-china-and-will-return-to-chongqing"},{"name":"joels-chengdu-adventure","text":"ジョエルの成都旅：パンダ、火鍋、文化の魅力","link":"/articles/joels-chengdu-adventure"},{"name":"yunnan-specialty-cuisine","text":"雲南の特産料理を体験する","link":"/articles/yunnan-specialty-cuisine"}]}}`);
const _hoisted_1$X = { class: "pad" };
const _hoisted_2$D = { class: "wrapper rank-list" };
const _hoisted_3$p = { class: "rank-list-label" };
const _hoisted_4$h = { class: "wrapper rank-list" };
const _hoisted_5$d = { class: "bottom" };
const _sfc_main$15 = /* @__PURE__ */ defineComponent({
  __name: "Destinations",
  props: {
    screenMenu: { type: Boolean },
    open: { type: Boolean },
    text: {}
  },
  setup(__props) {
    const expand = ref();
    const { $t } = useLocale();
    const { localeIndex } = useData$1();
    return (_ctx, _cache) => {
      const _component_Translate = resolveComponent("Translate");
      const _component_LazyLoadImage = resolveComponent("LazyLoadImage");
      return _ctx.open ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createVNode(LocalNavItem, {
          onClick: _cache[0] || (_cache[0] = ($event) => expand.value = _ctx.text)
        }, {
          default: withCtx(() => [
            createVNode(_component_Translate, null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.text), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(ScreenModal, {
          expand: expand.value,
          onClose: _cache[1] || (_cache[1] = ($event) => expand.value = void 0)
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$19, { href: "/places" }, {
              default: withCtx(() => [
                createVNode(LocalNavItem, null, {
                  default: withCtx(() => [
                    createVNode(_component_Translate, null, {
                      default: withCtx(() => _cache[2] || (_cache[2] = [
                        createTextVNode("All destinations")
                      ])),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(data$1).topPlaces[unref(localeIndex)], (city) => {
              return openBlock(), createBlock(_sfc_main$19, {
                key: city.text,
                href: city.link
              }, {
                default: withCtx(() => [
                  createVNode(LocalNavItem, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(city.text), 1)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1032, ["href"]);
            }), 128)),
            createVNode(_sfc_main$19, { href: "/places" }, {
              default: withCtx(() => [
                createVNode(LocalNavItem, null, {
                  default: withCtx(() => [
                    createVNode(_component_Translate, null, {
                      default: withCtx(() => _cache[3] || (_cache[3] = [
                        createTextVNode("All destinations")
                      ])),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["expand"])
      ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        createBaseVNode("div", _hoisted_1$X, [
          createBaseVNode("div", _hoisted_2$D, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(data$1).topPlaces[unref(localeIndex)].slice(0, 4), (city) => {
              return openBlock(), createElementBlock("div", {
                key: city.text,
                class: "rank-item thumbnails"
              }, [
                createVNode(_sfc_main$19, {
                  href: city.link
                }, {
                  default: withCtx(() => {
                    var _a, _b;
                    return [
                      createVNode(_component_LazyLoadImage, {
                        src: (_b = (_a = unref(destinationsAssets)) == null ? void 0 : _a[city.name]) == null ? void 0 : _b.avatar,
                        alt: city.text
                      }, null, 8, ["src", "alt"]),
                      createBaseVNode("span", null, [
                        createVNode(_component_Translate, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(city.text), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ])
                    ];
                  }),
                  _: 2
                }, 1032, ["href"])
              ]);
            }), 128))
          ]),
          createBaseVNode("div", _hoisted_3$p, toDisplayString(unref($t)("Most popular destinations")), 1),
          createBaseVNode("div", _hoisted_4$h, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(data$1).topPlaces[unref(localeIndex)].slice(4), (city) => {
              return openBlock(), createElementBlock("div", {
                key: city.text,
                class: "rank-item"
              }, [
                createVNode(_sfc_main$19, {
                  href: city.link
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Translate, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(city.text), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["href"])
              ]);
            }), 128))
          ])
        ]),
        createBaseVNode("div", _hoisted_5$d, [
          createVNode(_sfc_main$19, { href: "/places" }, {
            default: withCtx(() => [
              createVNode(_component_Translate, null, {
                default: withCtx(() => _cache[4] || (_cache[4] = [
                  createTextVNode("All destinations")
                ])),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ], 64));
    };
  }
});
const Destinations = /* @__PURE__ */ _export_sfc(_sfc_main$15, [["__scopeId", "data-v-00445832"]]);
const ancientSvg = "data:image/svg+xml,%3csvg%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='20'%3e%3cpath%20d='M750.907302%20699.744574a17.066075%2017.066075%200%201%200-34.13215%200v68.2643a17.066075%2017.066075%200%201%200%2034.13215%200v-68.2643z%20m-460.784026%2085.330375a17.066075%2017.066075%200%200%200%2017.066075-17.066075v-68.2643a17.066075%2017.066075%200%201%200-34.13215%200v68.2643a17.066075%2017.066075%200%200%200%2017.066075%2017.066075z%20m119.462525%20136.528601h85.330375v-68.2643a17.066075%2017.066075%200%201%201%200-34.132151v-102.39645h-85.330375v204.792901z%20m204.792901-204.792901h-85.330376v102.39645a17.066075%2017.066075%200%201%201%200%2034.132151v68.2643h85.330376V716.810649zM273.057201%20938.669625a17.066075%2017.066075%200%200%201%2017.066075-17.066075h85.330375V716.810649h-17.066075a17.066075%2017.066075%200%201%201%200-34.13215h307.189351a17.066075%2017.066075%200%201%201%200%2034.13215h-17.066075v204.792901h85.330375a17.066075%2017.066075%200%201%201%200%2034.13215H290.123276a17.066075%2017.066075%200%200%201-17.066075-17.066075z%20m341.321501-477.850101v102.39645a17.066075%2017.066075%200%201%200%2034.13215%200v-102.39645a17.066075%2017.066075%200%201%200-34.13215%200z%20m-51.198226-119.462526a17.066075%2017.066075%200%200%200%2017.066075-17.066075v-119.462525h17.066075a17.066075%2017.066075%200%201%200%200-34.13215H426.651876a17.066075%2017.066075%200%201%200%200%2034.13215h17.066075v119.462525a17.066075%2017.066075%200%201%200%2034.13215%200v-119.462525h68.2643v119.462525a17.066075%2017.066075%200%200%200%2017.066075%2017.066075z%20m-187.726825%20119.462526v102.39645a17.066075%2017.066075%200%201%200%2034.13215%200v-102.39645a17.066075%2017.066075%200%201%200-34.13215%200zM290.123276%20153.630173h51.198225v170.66075a17.066075%2017.066075%200%201%200%2034.13215%200V151.99183c30.00216-4.744369%2092.856514-23.448787%20136.5286-97.1401%2043.672086%2073.691312%20106.52644%2092.39573%20136.528601%2097.1401V324.290923a17.066075%2017.066075%200%201%200%2034.13215%200V153.630173h51.198225c47.051169%200%2085.330375-38.279206%2085.330375-85.330375a17.066075%2017.066075%200%201%200-34.13215%200c0%2028.227288-22.970937%2051.198225-51.198225%2051.198225h-68.17897c-3.73747-0.034132-92.156805-2.133259-137.996283-109.120484a17.049009%2017.049009%200%200%200-31.367446%200C450.459051%20117.364763%20362.039716%20119.463891%20358.387576%20119.498023h-68.2643c-28.227288%200-51.198225-22.970937-51.198225-51.198225a17.066075%2017.066075%200%201%200-34.13215%200c0%2047.051169%2038.279206%2085.330375%2085.330375%2085.330375z%20m-68.2643%20255.991125h51.198225v153.594676a17.066075%2017.066075%200%201%200%2034.13215%200v-153.594676h409.585801v153.594676a17.066075%2017.066075%200%201%200%2034.13215%200v-153.594676h51.198225c47.051169%200%2085.330375-38.279206%2085.330375-85.330375a17.066075%2017.066075%200%201%200-34.13215%200c0%2028.227288-22.970937%2051.198225-51.198225%2051.198225H221.858976c-28.227288%200-51.198225-22.970937-51.198226-51.198225a17.066075%2017.066075%200%201%200-34.13215%200c0%2047.051169%2038.279206%2085.330375%2085.330376%2085.330375zM153.594675%20648.546349h51.198226v290.123276a17.066075%2017.066075%200%201%200%2034.13215%200V648.546349h546.114401v290.123276a17.066075%2017.066075%200%201%200%2034.13215%200V648.546349h51.198225c47.051169%200%2085.330375-38.279206%2085.330375-85.330375a17.066075%2017.066075%200%201%200-34.13215%200c0%2028.227288-22.970937%2051.198225-51.198225%2051.198225H153.594675c-28.227288%200-51.198225-22.970937-51.198225-51.198225a17.066075%2017.066075%200%201%200-34.13215%200c0%2047.051169%2038.279206%2085.330375%2085.330375%2085.330375z%20m870.369828%20358.387576a17.066075%2017.066075%200%200%201-17.066075%2017.066075H17.066075a17.066075%2017.066075%200%201%201%200-34.13215h989.832353a17.066075%2017.066075%200%200%201%2017.066075%2017.066075z'%20fill='%23000000'%3e%3c/path%3e%3c/svg%3e";
const festivalSvg = "data:image/svg+xml,%3csvg%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='20'%3e%3cpath%20d='M643.839598%20226.880498A372.927767%20372.927767%200%200%200%20492.287692%2067.200598%20207.42387%20207.42387%200%200%201%20645.375597%200.00064a206.975871%20206.975871%200%200%201%20206.399871%20227.775858%20293.503817%20293.503817%200%200%200-207.87187-0.896z%20m1.535999-172.031892c-20.223987%200-39.999975%204.031997-58.431964%2011.519993A420.799737%20420.799737%200%200%201%20670.079581%20161.920539a349.119782%20349.119782%200%200%201%20119.359926-5.759997%20152.895904%20152.895904%200%200%200-143.99991-101.311936zM346.431783%20815.42413l-12.351992%2041.727974a18.687988%2018.687988%200%200%200%205.247997%2018.943988c19.967988%2019.199988%2023.743985%2047.55197%209.215994%2070.399956l-42.623973%2067.327958a23.423985%2023.423985%200%200%201-19.647988%2010.175994%2025.215984%2025.215984%200%200%201-10.943993-2.559998c-10.879993-5.311997-14.655991-17.535989-8.575995-27.135983l42.623974-67.455958a18.687988%2018.687988%200%200%200-3.199998-23.743985c-15.74399-15.23199-21.759986-36.159977-15.743991-56.127965l9.215995-31.551981H243.839848l21.503986-73.599954C114.175929%20711.168196%200%20570.432283%200%20401.344389%200%20209.984509%20146.559908%2054.720606%20327.295795%2054.656606%20508.159682%2054.656606%20654.719591%20209.920509%20654.719591%20401.280389c0%20170.687893-116.351927%20312.511805-269.503832%20341.375787l25.727984%2072.703954H346.431783z%20m-30.207981-52.223967l17.855989-0.256-0.703999-2.047999a55.039966%2055.039966%200%200%201%2041.599974-72.063955C505.279684%20664.256225%20599.679625%20543.2963%20599.679625%20401.280389c0-160.895899-122.239924-291.839818-272.44783-291.839817C177.023889%20109.440572%2054.847966%20240.44849%2054.847966%20401.280389c0%20140.159912%2093.183942%20260.735837%20221.439861%20286.719821%2014.911991%203.007998%2028.031982%2012.287992%2035.967978%2025.407984a54.527966%2054.527966%200%200%201%205.695996%2043.775973l-1.727999%205.951996zM1023.99936%20532.800307c0%20153.279904-110.399931%20279.231825-251.327843%20293.247817l11.455993%2041.727974h-27.903983l-5.375996%2018.303988a6.783996%206.783996%200%200%200%200%203.967998%207.999995%207.999995%200%200%200%202.175998%203.647997c6.527996%206.207996%2010.239994%2013.759991%2012.351993%2021.631987%203.071998%2011.391993%201.919999%2023.679985-4.927997%2034.559978l-29.823982%2047.039971a23.423985%2023.423985%200%200%201-19.647987%2010.175994%2025.215984%2025.215984%200%200%201-10.943994-2.559999%2020.031987%2020.031987%200%200%201-8.959994-8.959994%2017.919989%2017.919989%200%200%201%200.384-18.239989l29.887981-46.911971a6.911996%206.911996%200%200%200%201.151999-4.927996%207.487995%207.487995%200%200%200-2.367998-4.607998%2044.863972%2044.863972%200%200%201-12.671992-44.799972l2.367998-8.191994v-0.128h-28.927982l10.559994-46.271971C625.279609%20807.296135%20567.551645%20768.00016%20527.55167%20713.472194c18.751988-13.439992%2036.479977-28.927982%2052.927967-46.271971%2067.071958-71.039956%20103.999935-165.375897%20103.999935-265.727834%200-51.391968-9.727994-101.247937-28.223982-147.199908%2028.159982-10.367994%2058.623963-15.99999%2090.239943-15.99999C899.839438%20238.272491%201023.99936%20370.112409%201023.99936%20532.800307z%20m-256.831839%20238.655851c115.199928-11.455993%20201.983874-114.111929%20201.855873-238.655851%200-132.095917-99.839938-239.67985-222.591861-239.67985a195.199878%20195.199878%200%200%200-20.031987%200.959999c8.447995%2034.815978%2012.799992%2070.719956%2012.799992%20107.263933%200%20114.431928-42.239974%20222.207861-118.975926%20303.48781a404.287747%20404.287747%200%200%201-13.951991%2014.079992c28.031982%2024.319985%2061.055962%2041.215974%2096.63994%2048.831969a55.039966%2055.039966%200%200%201%2031.16798%2019.199988%2055.231965%2055.231965%200%200%201%2033.08798-15.48799zM284.159822%20141.376552a27.391983%2027.391983%200%201%201%2012.607993%2053.247966c-0.448%200.128-50.431968%2012.159992-94.079942%2048.25597-59.071963%2049.023969-79.74395%20116.223927-61.439961%20199.679875a27.519983%2027.519983%200%200%201-26.879983%2033.27998%2027.455983%2027.455983%200%200%201-26.751984-21.439987c-28.799982-130.879918%2027.647983-210.175869%2079.99995-253.567842a308.607807%20308.607807%200%200%201%20116.543927-59.519962z%20m638.975601%20409.791744a27.519983%2027.519983%200%200%201%2020.607987%2032.959979c-14.847991%2064.44796-63.23196%20119.679925-129.279919%20147.647908a27.391983%2027.391983%200%200%201-21.503987-50.559969c49.919969-21.119987%2086.271946-62.079961%2097.27994-109.439931a27.327983%2027.327983%200%200%201%2032.895979-20.607987z'%20fill='%23333333'%3e%3c/path%3e%3c/svg%3e";
const foodSvg = "data:image/svg+xml,%3csvg%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='20'%3e%3cpath%20d='M158.938384%20438.848956c51.099818-10.871605%2069.221548-51.437509%2071.866794-73.696466l0.166799-182.937472c0-30.443359%2033.545-39.000246%2038.058804-39.059598l-0.00614-48.690956c-29.30442%200-86.74976%2026.491351-86.74976%2087.750553l0%20178.164772c-0.947582%204.712325-6.601348%2025.125237-33.471322%2030.839379L158.938384%20438.848956zM353.718579%20438.848956c51.106981-10.871605%2069.222571-51.437509%2071.872934-73.696466l0.162706-182.937472c0-30.443359%2033.541931-39.000246%2038.064944-39.059598l-0.01228-48.690956c-29.299303%200-86.744643%2026.491351-86.744643%2087.750553l0%20178.164772c-0.953721%204.712325-6.601348%2025.125237-33.472346%2030.839379L353.718579%20438.848956zM256.325411%20438.848956c51.108005-10.871605%2069.220524-51.437509%2071.871911-73.696466l0.166799-182.937472c0-30.443359%2033.538861-39.000246%2038.058804-39.059598l-0.00614-48.690956c-29.30442%200-86.747713%2026.491351-86.747713%2087.750553l0%20178.164772c-0.952698%204.712325-6.602372%2025.125237-33.472346%2030.839379L256.325411%20438.848956zM458.228841%20264.894066l503.186264%200%200%2048.691979-503.186264%200%200-48.691979ZM458.228841%20167.506015l503.186264%200%200%2048.690956-503.186264%200%200-48.690956ZM84.895017%20459.669144l0%20155.534356c0%20173.96717%20155.125033%20236.052181%20211.012901%20252.776074l0%2062.404282%20470.728014%200%200-62.259996c56.184627-16.483416%20211.018018-78.595033%20211.010855-262.364453L977.646787%20459.669144%2084.895017%20459.669144zM928.949692%20605.759407c0%20182.2713-183.218882%20218.074737-190.972473%20219.502249l-20.040429%203.579525%200%2052.846602L344.602967%20881.687784l-0.048095-52.510958-19.656689-3.848655c-7.81192-1.534959-191.31221-39.503712-191.31221-210.124671l0-25.677822%20795.363719%200L928.949692%20605.759407zM928.949692%20557.055149%20133.591089%20557.055149%20133.591089%20508.358053l795.358603%200L928.949692%20557.055149zM101.127723%20264.894066l48.697095%200%200%2048.691979-48.697095%200%200-48.691979ZM101.127723%20167.506015l48.697095%200%200%2048.690956-48.697095%200%200-48.690956Z'%20fill='%23272636'%3e%3c/path%3e%3c/svg%3e";
const minoritySvg = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='200'%20height='200'%3e%3cpath%20d='M276.2%20346.9C376%20257.6%20453.7%20212.5%20512%20212.5s136.1%2045%20235.8%20134.4L790%20141.6c-156.7-35.8-250.6-53.9-278-53.9s-121.3%2018.1-278.1%2053.9l42.3%20205.3z%20m439.2%2024.2c-13.9%2065.5-48.2%20127.2-93.4%20170.1l11.9%2046.2h131.9c107.3%200%20194.3%2087%20194.3%20194.3S873.1%20976%20765.8%20976H258.2c-107.3%200-194.3-87-194.3-194.3s87-194.3%20194.3-194.3h126.4l5.2-52.9c-39.7-42.3-69.3-100.8-81.7-162.9-10%208.9-20.3%2018.2-30.8%2028.1l-25.8%2024.2-64.2-312.1%2018.9-4.3C378.5%2067.6%20479.1%2048%20512%2048s133.5%2019.6%20305.8%2059.3l18.9%204.3-64.2%20312.1-25.8-24.2c-10.7-9.9-21.1-19.4-31.3-28.4zM348.9%20627c21.2%2049.8%2085.6%2087.2%20163.1%2087.2s141.9-37.5%20163.1-87.2h-71.8l-25.7-99.4%209.3-8c48.2-41.7%2084.5-109%2093.5-178.3-72.8-59.5-129.5-89.1-168.3-89.1-38.9%200-95.6%2029.6-168.5%2089.2%207.9%2066.1%2038.7%20129.9%2080.9%20171.8l6.7%206.6L420.6%20627h-71.7z%20m-44.6%200h-46.1c-85.4%200-154.7%2069.2-154.7%20154.7s69.2%20154.7%20154.7%20154.7h103.1l-57-309.4z%20m358.5%20309.3h103c85.4%200%20154.7-69.2%20154.7-154.7S851.2%20627%20765.8%20627h-45.4l-57.6%20309.3z%20m-103.2%200h62.8l43.7-234.2c-38.6%2032-93.6%2051.8-154.1%2051.8-60.2%200-114.9-19.5-153.5-51.2l43.1%20233.7h158z'%20fill='%2309294D'%3e%3c/path%3e%3cpath%20d='M227.5%20892.3h90l-40-213.8H211c-44.4%200-79.7%2065.9-79.7%20110.8%200%2044.9%2051.8%20103%2096.2%20103zM792.4%20892.3h-90l40-213.8h66.5c44.4%200%2079.7%2065.9%2079.7%20110.8%200%2044.9-51.8%20103-96.2%20103zM272.7%20166.5c141.7-34.1%20221.5-51.1%20239.3-51.1s96.8%2017%20237%2051.1l-24.2%20116C630.5%20213.4%20559.6%20178.9%20512%20178.9s-118.2%2034.5-212%20103.6l-27.3-116z'%20fill='%23fd8eb8'%3e%3c/path%3e%3c/svg%3e";
const natureSvg = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='200'%20height='200'%3e%3cpath%20d='M789.271%20408.458c-34.693-72.439-83.605-112.333-137.727-112.333-35.399%200-69.332%2017.457-98.129%2050.482-7.962%209.132-15.541%2019.496-22.665%2030.934-6.814-26.026-14.364-50.818-22.626-74.161-21.743-61.432-47.467-110.148-76.459-144.795-33.839-40.439-71.28-60.944-111.283-60.944s-77.444%2020.504-111.282%2060.944c-28.992%2034.646-54.716%2083.363-76.458%20144.794-43.272%20122.263-67.104%20284.17-67.104%20455.895%200%2017.673%2014.327%2032%2032%2032s32-14.327%2032-32c0-164.637%2022.529-318.96%2063.436-434.541%2036.144-102.123%2083.773-163.092%20127.408-163.092%2043.635%200%2091.265%2060.969%20127.409%20163.092%2040.907%20115.581%2063.436%20269.904%2063.436%20434.541%200%2017.673%2014.327%2032%2032%2032s32-14.327%2032-32c0-96.982-7.603-190.831-22.014-276.178%200.131-0.366%200.263-0.73%200.381-1.104%2023.48-74.032%2061.928-121.869%2097.949-121.869%2027.72%200%2056.88%2027.693%2080.005%2075.977%2027.054%2056.49%2041.953%20132.309%2041.953%20213.489%200%2017.673%2014.327%2032%2032%2032s32-14.327%2032-32c0.001-90.551-17.128-176.187-48.23-241.131z'%20fill='%233C403B'%3e%3c/path%3e%3cpath%20d='M298.409%20958.84c-15.992%200-30.755-0.325-44.049-0.989-17.651-0.881-31.246-15.905-30.364-33.556%200.881-17.652%2015.897-31.266%2033.556-30.364%20114.254%205.701%20374.673-16.092%20560.597-64.135-15.111-4.154-31.944-8.379-49.473-12.778-42.649-10.704-86.75-21.772-117.663-34.789-11.843-4.987-20.789-10.334-27.35-16.348-15.659-14.352-15.854-30.138-14.576-38.271%202.198-13.988%2011.183-25.579%2026.704-34.451%208.245-4.712%2018.804-8.996%2032.279-13.097%2019.913-6.06%2046.798-11.839%2079.908-17.177%2055.095-8.882%20108.573-13.587%20110.822-13.782%2017.616-1.553%2033.123%2011.496%2034.656%2029.103%201.534%2017.606-11.496%2033.122-29.103%2034.655-0.566%200.05-44.602%203.93-92.206%2011.04-26.698%203.987-46.847%207.843-61.989%2011.3%2022.419%206.771%2048.535%2013.326%2074.096%2019.741%2031.273%207.85%2060.813%2015.263%2083.767%2023.066%2013.991%204.757%2024.229%209.196%2032.216%2013.969%2020.751%2012.399%2025.318%2027.705%2025.497%2038.362%200.148%208.919-2.818%2025.797-24.366%2038.621-8.797%205.235-20.36%209.815-36.391%2014.413-85.45%2024.507-200.868%2045.756-324.994%2059.834-89.156%2010.113-175.713%2015.633-241.574%2015.633z'%20fill='%2362BC3E'%3e%3c/path%3e%3c/svg%3e";
const pandaSvg = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1739284320762'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='8665'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='200'%20height='200'%3e%3cpath%20d='M925.1%20168.1l-37.2-37.9c-44.2-45-116.4-45-160.6%200L710%20147.9c-16.1%2016.4-26.4%2036.7-30.7%2058-9.8-4.1-19.9-7.9-30.3-11.3-43.5-14.3-89.7-21.6-137.2-21.6-47.5%200-93.7%207.3-137.2%2021.6-13.6%204.5-26.8%209.6-39.6%2015.3-3.9-26-15.7-51-35.2-70.9-48.9-49.9-129-49.9-177.9%200L102%20159.3c-48.9%2049.9-48.9%20131.5%200%20181.4%2018.7%2019.1%2041.9%2030.8%2066.2%2035.3-10.2%2026.8-15.3%2054.7-15.3%2083.2v3.5c0.3%2018.6-2.9%2037.9-9.4%2057.2-9.5%2028.3-14.4%2057.7-14.4%2087.4%200%2044.1%2010.5%2086.8%2031.1%20127%2019.7%2038.2%2047.7%2072.5%2083.3%20101.7%2035.1%2028.9%2075.9%2051.5%20121.2%2067.2%2046.6%2016.2%2096%2024.4%20146.9%2024.4%2050.9%200%20100.3-8.2%20146.9-24.4%2045.3-15.8%2086.1-38.4%20121.2-67.2%2035.6-29.3%2063.6-63.5%2083.3-101.7%2020.7-40.2%2031.1-82.9%2031.1-127%200-29.7-4.8-59.1-14.4-87.4-6.5-19.4-9.7-38.6-9.4-57.2v-3.5c0-27.3-4.7-54-14-79.7%2018.8-5%2036.5-15%2051.2-29.9l17.3-17.7c44.4-45.1%2044.4-118.8%200.3-163.8z'%20p-id='8666'%3e%3c/path%3e%3cpath%20d='M851.7%20529.1c-7.3-21.8-11.4-44.6-11-67.6v-3c0-141.2-147.3-255.6-328.9-255.6S182.9%20317.3%20182.9%20458.5v3c0.3%2023-3.7%2045.8-11%2067.6-8.3%2024.7-12.7%2050.7-12.7%2077.5%200%20160.1%20157.9%20289.9%20352.6%20289.9s352.6-129.8%20352.6-289.9c0-26.8-4.4-52.8-12.7-77.5z'%20fill='%23FFFFFF'%20p-id='8667'%3e%3c/path%3e%3cpath%20d='M511.8%20860.5c-187.4%200-340.6-120.1-352-271.8-0.4%205.9-0.7%2011.9-0.7%2017.9%200%20160.1%20157.9%20289.9%20352.6%20289.9s352.6-129.8%20352.6-289.9c0-6-0.2-12-0.7-17.9-11.2%20151.7-164.5%20271.8-351.8%20271.8z'%20fill='%23E0E0E0'%20p-id='8668'%3e%3c/path%3e%3cpath%20d='M607.305568%20591.836462a125%2084.6%2044.999%201%200%20119.64038-119.644556%20125%2084.6%2044.999%201%200-119.64038%20119.644556Z'%20fill='%23DBDBDB'%20p-id='8669'%3e%3c/path%3e%3cpath%20d='M413.90698%20591.796228a84.6%20125%2045.001%201%200-119.640379-119.644555%2084.6%20125%2045.001%201%200%20119.640379%20119.644555Z'%20fill='%23DBDBDB'%20p-id='8670'%3e%3c/path%3e%3cpath%20d='M607.280819%20576.346713a125%2084.6%2044.999%201%200%20119.640379-119.644555%20125%2084.6%2044.999%201%200-119.640379%20119.644555Z'%20p-id='8671'%3e%3c/path%3e%3cpath%20d='M413.882231%20576.355977a84.6%20125%2045.001%201%200-119.640379-119.644556%2084.6%20125%2045.001%201%200%20119.640379%20119.644556Z'%20p-id='8672'%3e%3c/path%3e%3cpath%20d='M357.6%20507.1m-34.8%200a34.8%2034.8%200%201%200%2069.6%200%2034.8%2034.8%200%201%200-69.6%200Z'%20fill='%23FFFFFF'%20p-id='8673'%3e%3c/path%3e%3cpath%20d='M661%20507.1m-34.8%200a34.8%2034.8%200%201%200%2069.6%200%2034.8%2034.8%200%201%200-69.6%200Z'%20fill='%23FFFFFF'%20p-id='8674'%3e%3c/path%3e%3cpath%20d='M660.4%20736.9l-116.8%2020.9c-5.5%201-11.1-0.5-15.3-4.1-2.9-2.4-4.9-5.6-6-9.1%204-1.3%207.8-3.4%2010.9-6.2l40.3-36.1c17.6-15.8%204.2-41.5-21.7-41.5h-80.6c-25.9%200-39.3%2025.7-21.7%2041.5l40.3%2036.1c3.2%202.8%206.9%204.9%2010.9%206.2-1%203.5-3.1%206.7-6%209.1-4.3%203.6-9.8%205-15.3%204.1l-116.8-20.9-3.5%2019.7%20116.8%2020.9c2.3%200.4%204.6%200.6%206.9%200.6%209%200%2017.8-3.1%2024.8-9%201.4-1.2%202.7-2.4%203.9-3.8%201.2%201.3%202.5%202.6%203.9%203.8%207%205.9%2015.8%209%2024.8%209%202.3%200%204.6-0.2%206.9-0.6l116.8-20.9-3.5-19.7z'%20p-id='8675'%3e%3c/path%3e%3c/svg%3e";
const seasideSvg = "/assets/seaside.D1x98GRv.svg";
const techSvg = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1739284785940'%20class='icon'%20viewBox='0%200%201068%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='13144'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='208.59375'%20height='200'%3e%3cpath%20d='M553.2394%20778.224h-0.05c-7.99%200-16.092-0.08-24.08-0.231-139.472-2.679-270.492-28.227-368.938-71.938C55.6134%20659.625-1.2666%20597.068%200.0224%20529.92c1.252-65.252%2057.605-124.407%20158.69-166.561%2094.734-39.506%20220.97-61.264%20355.443-61.264%207.972%200%2016.073%200.077%2024.073%200.226%20139.475%202.673%20270.495%2028.221%20368.947%2071.943%20104.553%2046.43%20161.437%20108.98%20160.144%20176.124-1.248%2065.262-57.613%20124.412-158.693%20166.567-94.715%2039.508-220.944%2061.269-355.386%2061.269m-39.085-431.16c-128.673%200-248.76%2020.528-338.137%2057.802C93.6154%20439.232%2045.8614%20485.124%2044.9814%20530.786c-0.904%2047.198%2047.734%2096.106%20133.445%20134.166%2093.081%2041.336%20217.934%2065.515%20351.543%2068.075%207.702%200.152%2015.512%200.224%2023.224%200.224h0.046c128.648%200%20248.713-20.528%20338.087-57.796%2082.392-34.364%20130.153-80.26%20131.03-125.926%200.906-47.205-47.732-96.111-133.44-134.162-93.09-41.346-217.94-65.518-351.546-68.08a1224.355%201224.355%200%200%200-23.214-0.223'%20p-id='13145'%3e%3c/path%3e%3cpath%20d='M756.9434%201005.515c-59.176%200-131.026-32.34-207.793-93.514-75.843-60.441-149.83-143.674-213.94-240.688-76.91-116.372-130.195-238.778-150.027-344.65-21.076-112.447-1.83-194.769%2054.203-231.8C259.5284%2081.556%20283.4234%2074.8%20310.3924%2074.8c59.177%200%20131.035%2032.332%20207.792%2093.514%2075.848%2060.446%20149.832%20143.676%20213.941%20240.694%2076.904%20116.374%20130.182%20238.765%20150.027%20344.642%2021.07%20112.456%201.82%20194.771-54.209%20231.803-20.144%2013.311-44.028%2020.062-71%2020.062M310.3934%20119.77c-18.002%200-33.549%204.246-46.209%2012.614-39.39%2026.032-52.073%2093.829-34.802%20186%2018.758%20100.116%2069.668%20216.65%20143.35%20328.13%2061.543%2093.136%20132.243%20172.772%20204.446%20230.318%2067.73%2053.982%20131.58%2083.713%20179.766%2083.713%2018%200%2033.55-4.247%2046.205-12.606%2039.388-26.034%2052.08-93.831%2034.798-186.008-18.754-100.11-69.662-216.642-143.339-328.127-61.548-93.135-132.243-172.777-204.45-230.319-67.738-53.98-131.576-83.715-179.766-83.715'%20p-id='13146'%3e%3c/path%3e%3cpath%20d='M336.2474%201022.571c-21.815%200-41.914-4.884-59.874-14.774-58.847-32.38-84.69-112.869-72.783-226.66%2011.211-107.126%2054.414-233.438%20121.658-355.652C398.6414%20292.103%20493.0914%20178.773%20584.3814%20114.555c10.16-7.147%2024.19-4.707%2031.334%205.448%207.145%2010.163%204.707%2024.185-5.456%2031.332-85.885%2060.418-175.404%20168.245-245.604%20295.836-64.417%20117.082-105.735%20237.347-116.342%20338.652-9.757%2093.266%208.37%20159.819%2049.734%20182.574%2041.363%2022.758%20107.278%202.454%20180.845-55.713%2079.893-63.172%20159.371-162.448%20223.786-279.529%2070.2-127.587%20113.367-260.914%20118.428-365.804%200.605-12.404%2011.138-21.978%2023.546-21.378%2012.402%200.6%2021.976%2011.14%2021.38%2023.544-5.38%20111.497-50.557%20251.94-123.949%20385.319-67.24%20122.217-150.808%20226.318-235.3%20293.128-62.346%2049.294-120.885%2074.607-170.536%2074.607'%20p-id='13147'%3e%3c/path%3e%3cpath%20d='M655.3074%20113.592c0%2029.6%2012.182%2059.013%2033.111%2079.95%2020.93%2020.929%2050.348%2033.11%2079.952%2033.11%2029.602%200%2059.014-12.181%2079.945-33.11%2020.934-20.937%2033.112-50.352%2033.112-79.95%200-29.602-12.178-59.021-33.112-79.95C827.3854%2012.717%20797.9724%200.528%20768.3714%200.528c-29.604%200-59.023%2012.189-79.952%2033.112-20.93%2020.93-33.11%2050.349-33.11%2079.95'%20p-id='13148'%3e%3c/path%3e%3c/svg%3e";
const themeSvg = "/assets/theme.wIjHKW1X.svg";
const urbanSvg = "data:image/svg+xml,%3csvg%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='20'%3e%3cpath%20d='M960%20938.666667h-21.333333v-89.753334c9.846667-4.206667%2018.793333-11.293333%2025.906666-20.773333%2010.806667-14.413333%2016.76-33.246667%2016.76-53.026667%200-19-5.546667-49.873333-13.48-75.08-4.746667-15.06-10.06-27.373333-15.793333-36.6-9.666667-15.546667-21.333333-23.433333-34.726667-23.433333s-25.06%207.886667-34.726666%2023.433333c-5.733333%209.226667-11.046667%2021.54-15.793334%2036.6-7.933333%2025.206667-13.48%2056.08-13.48%2075.08%200%2019.78%205.953333%2038.613333%2016.76%2053.026667%207.113333%209.48%2016.06%2016.566667%2025.906667%2020.773333V938.666667H512V298.666667h384v277.333333a21.333333%2021.333333%200%200%200%2042.666667%200V277.333333a21.333333%2021.333333%200%200%200-21.333334-21.333333h-21.333333v-64a21.333333%2021.333333%200%200%200-21.333333-21.333333H576a21.333333%2021.333333%200%200%200-21.333333%2021.333333v64h-44.813334a106.98%20106.98%200%200%200-84.98-83.54A106.98%20106.98%200%200%200%20341.333333%2087.48V64a21.333333%2021.333333%200%200%200-42.666666%200v23.48a106.98%20106.98%200%200%200-83.54%2084.98C165.613333%20181.666667%20128%20225.193333%20128%20277.333333v106.666667h-21.333333a21.333333%2021.333333%200%200%200-21.333334%2021.333333v64H64a21.333333%2021.333333%200%200%200-21.333333%2021.333334v384a21.333333%2021.333333%200%200%200%2042.666666%200V512h213.333334v426.666667H64a21.333333%2021.333333%200%200%200%200%2042.666666h896a21.333333%2021.333333%200%200%200%200-42.666666z%20m-54.866667-217.78c4.46-16.046667%208.866667-26.293333%2012.2-32.366667%203.333333%206.073333%207.74%2016.32%2012.2%2032.366667%206.273333%2022.573333%209.133333%2043.933333%209.133334%2054.226666%200%2020.346667-11.26%2035.553333-21.333334%2035.553334s-21.333333-15.206667-21.333333-35.553334c0-10.293333%202.86-31.653333%209.133333-54.226666zM597.333333%20213.333333h256v42.666667H597.333333zM128%20426.666667h128v42.666666H128z%20m213.333333%20512V490.666667a21.333333%2021.333333%200%200%200-21.333333-21.333334h-21.333333v-64a21.333333%2021.333333%200%200%200-21.333334-21.333333H170.666667V277.333333a64.073333%2064.073333%200%200%201%2064-64%2021.333333%2021.333333%200%200%200%2021.333333-21.333333%2064%2064%200%200%201%20128%200%2021.333333%2021.333333%200%200%200%2021.333333%2021.333333%2064.073333%2064.073333%200%200%201%2064%2064v661.333334z%20m-128-256h-42.666666V597.333333h42.666666z%20m-42.666666%2042.666666h42.666666v85.333334h-42.666666z%20m469.333333-256h-42.666667V384h42.666667z%20m0%20128h-42.666667V512h42.666667z%20m0%20128h-42.666667V640h42.666667z%20m-42.666667%2042.666667h42.666667v85.333333h-42.666667z%20m128-298.666667h-42.666666V384h42.666666z%20m0%20128h-42.666666V512h42.666666z%20m0%20128h-42.666666V640h42.666666z%20m-42.666666%2042.666667h42.666666v85.333333h-42.666666z%20m128-298.666667h-42.666667V384h42.666667z%20m0%20128h-42.666667V512h42.666667z%20m-42.666667%2042.666667h42.666667v85.333333h-42.666667z'%20fill='%235C5C66'%3e%3c/path%3e%3c/svg%3e";
const vlogSvg = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1739695742880'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='4222'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='200'%20height='200'%3e%3cpath%20d='M622.592%20252.928c-5.12%2010.752-17.92%2015.36-28.16%2010.24-10.752-5.12-15.36-17.92-10.24-28.672l65.024-114.688c5.12-10.752%2017.92-15.36%2028.672-10.24%2010.752%205.12%2015.36%2017.92%2010.24%2028.672l-65.536%20114.688z%20m-189.44%201.024c5.12%2010.752%2017.92%2015.36%2028.16%2010.24%2010.752-5.12%2015.36-17.92%2010.24-28.672L406.528%20121.344c-5.12-10.752-17.92-15.36-28.672-10.24-10.752%205.12-15.36%2017.92-10.24%2028.672l65.536%20114.176z'%20p-id='4223'%3e%3c/path%3e%3cpath%20d='M783.36%20912.896H272.384c-89.088%200-161.28-72.192-161.28-161.28V387.072c0-89.088%2072.192-161.28%20161.28-161.28H783.36c89.088%200%20161.28%2072.192%20161.28%20161.28v364.032c0%2089.088-72.192%20161.792-161.28%20161.792zM272.384%20266.752c-66.56%200-120.32%2053.76-120.32%20120.32v364.032c0%2066.56%2053.76%20120.32%20120.32%20120.32H783.36c66.56%200%20120.32-53.76%20120.32-120.32V387.072c0-66.56-53.76-120.32-120.32-120.32H272.384z'%20p-id='4224'%3e%3c/path%3e%3cpath%20d='M454.656%20424.96H258.56c-28.672%200-52.224-23.552-52.224-52.224s23.552-52.224%2052.224-52.224h196.096c28.672%200%2052.224%2023.552%2052.224%2052.224S483.328%20424.96%20454.656%20424.96z'%20p-id='4225'%3e%3c/path%3e%3c/svg%3e";
const vlogCover = "/assets/vlog.DJHaeTHk.webp";
const interestsAssets = {
  "China Vlog": {
    icon: vlogSvg,
    cover: vlogCover
  },
  "Chinese City Walk": {
    icon: urbanSvg
  },
  "Natural Scenery": {
    icon: natureSvg
  },
  "Chinese Cultural Heritage": {
    icon: ancientSvg
  },
  "Pandas and Other Animals": {
    icon: pandaSvg
  },
  "Beaches, Coasts and Islands": {
    icon: seasideSvg
  },
  "Chinese Festivals": {
    icon: festivalSvg
  },
  "Chinese Cuisine Culture": {
    icon: foodSvg
  },
  "Folklore and Ethnic Culture": {
    icon: minoritySvg
  },
  "Science and Innovation": {
    icon: techSvg
  },
  "Chinese Characteristic Themes": {
    icon: themeSvg
  }
};
const ChinaVlog = "China Vlog";
const ChineseCityWalk = "Chinese City Walk";
const NaturalScenery = "Natural Scenery";
const ChineseCulturalHeritage = "Chinese Cultural Heritage";
const PandasAndOtherAnimals = "Pandas and Other Animals";
const BeachesCoastsAndIslands = "Beaches, Coasts and Islands";
const ChineseFestivals = "Chinese Festivals";
const ChineseCuisineCulture = "Chinese Cuisine Culture";
const FolkloreAndEthnicCulture = "Folklore and Ethnic Culture";
const ScienceAndInnovation = "Chinese Characteristic Themes";
const ChineseCharacteristicThemes = "Science and Innovation";
const interests = [
  {
    name: ChinaVlog,
    nameLocale: { root: "China Vlog", ja: "中国のブログ", ko: "중국 블로그" },
    link: "/interests/china-vlog",
    top: true
  },
  {
    name: ChineseCityWalk,
    nameLocale: { root: "Chinese City Walk", ja: "中国シティウォーク", ko: "중국 도시 걷기" },
    link: "/interests/chinese-city-walk"
  },
  {
    name: NaturalScenery,
    nameLocale: { root: "Natural Scenery", ja: "自然景観", ko: "자연 경관" },
    link: "/interests/natural-scenery"
  },
  {
    name: ChineseCulturalHeritage,
    nameLocale: { root: "Chinese Cultural Heritage", ja: "中国の文化遺産", ko: "중국 문화 유산" },
    link: "/interests/chinese-cultural-heritage"
  },
  {
    name: PandasAndOtherAnimals,
    nameLocale: {
      root: "Pandas and Other Animals",
      ja: "パンダを含む他の動物们",
      ko: "판다를 포함한 다른 동물들"
    },
    link: "/interests/pandas-and-other-animals"
  },
  {
    name: BeachesCoastsAndIslands,
    nameLocale: {
      root: "Beaches, Coasts and Islands",
      ja: "ビーチ、海岸、島々",
      ko: "해변, 해안, 섬들"
    },
    link: "/interests/beaches-coasts-and-islands"
  },
  {
    name: ChineseFestivals,
    nameLocale: { root: "Chinese Festivals", ja: "中国の祭り", ko: "중국 축제" },
    link: "/interests/chinese-festivals"
  },
  {
    name: ChineseCuisineCulture,
    nameLocale: { root: "Chinese Cuisine Culture", ja: "中国の食文化", ko: "중국 음식 문화" },
    link: "/interests/chinese-cuisine-culture"
  },
  {
    name: FolkloreAndEthnicCulture,
    nameLocale: { root: "Folklore and Ethnic Culture", ja: "民俗風情ツアー", ko: "민속 문화 투어" },
    link: "/interests/folklore-and-ethnic-culture"
  },
  {
    name: ScienceAndInnovation,
    nameLocale: { root: "Science and Innovation", ja: "科学とイノベーション", ko: "과학과 혁신" },
    link: "/interests/science-and-innovation"
  },
  {
    name: ChineseCharacteristicThemes,
    nameLocale: {
      root: "Chinese Characteristic Themes",
      ja: "中国特有テーマ",
      ko: "중국 특유 주제"
    },
    link: "/interests/chinese-characteristic-themes"
  }
];
const getInterests = () => interests.map((interest, i) => {
  return {
    ...interest,
    ...interestsAssets[interest.name] || {}
  };
});
const _hoisted_1$W = { class: "menu-link" };
const _hoisted_2$C = { class: "icon" };
const _hoisted_3$o = ["src", "alt"];
const _hoisted_4$g = { class: "wrapper" };
const _hoisted_5$c = { class: "trend" };
const _hoisted_6$a = ["src", "alt"];
const _hoisted_7$5 = { class: "container" };
const _hoisted_8$5 = { class: "group-label" };
const _hoisted_9$4 = { class: "group-list" };
const _hoisted_10$4 = { class: "icon" };
const _hoisted_11$4 = ["src", "alt"];
const _hoisted_12$2 = { class: "bottom" };
const _sfc_main$14 = /* @__PURE__ */ defineComponent({
  __name: "Interests",
  props: {
    open: { type: Boolean },
    text: {}
  },
  setup(__props) {
    const expand = ref();
    const { localeIndex } = useData$1();
    const interestsNormal = computed(() => {
      return getInterests().filter((i) => i.top !== true);
    });
    const interestsTop = computed(() => {
      return getInterests().find((i) => i.top === true);
    });
    return (_ctx, _cache) => {
      var _a;
      const _component_Translate = resolveComponent("Translate");
      return _ctx.open ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createVNode(LocalNavItem, {
          onClick: _cache[0] || (_cache[0] = ($event) => expand.value = _ctx.text)
        }, {
          default: withCtx(() => [
            createVNode(_component_Translate, null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.text), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(ScreenModal, {
          expand: expand.value,
          onClose: _cache[1] || (_cache[1] = ($event) => expand.value = void 0)
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.interests, (i) => {
              return openBlock(), createBlock(_sfc_main$19, {
                key: i.name,
                href: i.link
              }, {
                default: withCtx(() => [
                  createVNode(LocalNavItem, null, {
                    default: withCtx(() => {
                      var _a2;
                      return [
                        createBaseVNode("div", _hoisted_1$W, [
                          createBaseVNode("span", _hoisted_2$C, [
                            createBaseVNode("img", {
                              src: i.icon,
                              alt: i.name
                            }, null, 8, _hoisted_3$o)
                          ]),
                          createTextVNode(" " + toDisplayString((_a2 = i.nameLocale) == null ? void 0 : _a2[_ctx.localIndex]), 1)
                        ])
                      ];
                    }),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1032, ["href"]);
            }), 128)),
            createVNode(_sfc_main$19, { href: "/articles" }, {
              default: withCtx(() => [
                createVNode(LocalNavItem, null, {
                  default: withCtx(() => [
                    createVNode(_component_Translate, null, {
                      default: withCtx(() => _cache[2] || (_cache[2] = [
                        createTextVNode("See all articles")
                      ])),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["expand"])
      ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        createBaseVNode("div", _hoisted_4$g, [
          createBaseVNode("div", _hoisted_5$c, [
            createVNode(_sfc_main$19, {
              href: (_a = interestsTop.value) == null ? void 0 : _a.link
            }, {
              default: withCtx(() => {
                var _a2, _b;
                return [
                  createBaseVNode("img", {
                    src: (_a2 = interestsTop.value) == null ? void 0 : _a2.cover,
                    alt: (_b = interestsTop.value) == null ? void 0 : _b.nameLocale[unref(localeIndex)]
                  }, null, 8, _hoisted_6$a)
                ];
              }),
              _: 1
            }, 8, ["href"])
          ]),
          createBaseVNode("div", _hoisted_7$5, [
            createBaseVNode("div", _hoisted_8$5, [
              createVNode(_component_Translate, null, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode("Articles by interests")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_9$4, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(interestsNormal.value, (i) => {
                return openBlock(), createElementBlock("div", {
                  key: i.name,
                  class: "group-item"
                }, [
                  createVNode(_sfc_main$19, {
                    href: i.link
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("span", _hoisted_10$4, [
                        createBaseVNode("img", {
                          src: i.icon,
                          alt: i.name
                        }, null, 8, _hoisted_11$4)
                      ]),
                      createTextVNode(" " + toDisplayString(i.nameLocale[unref(localeIndex)]), 1)
                    ]),
                    _: 2
                  }, 1032, ["href"])
                ]);
              }), 128))
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_12$2, [
          createVNode(_sfc_main$19, { href: "/articles" }, {
            default: withCtx(() => [
              createVNode(_component_Translate, null, {
                default: withCtx(() => _cache[4] || (_cache[4] = [
                  createTextVNode("See all articles")
                ])),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ], 64));
    };
  }
});
const Interests = /* @__PURE__ */ _export_sfc(_sfc_main$14, [["__scopeId", "data-v-acf66b82"]]);
const _hoisted_1$V = {
  key: 0,
  class: "VPBackdrop"
};
const _sfc_main$13 = /* @__PURE__ */ defineComponent({
  __name: "VPBackdrop",
  props: {
    show: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: "fade" }, {
        default: withCtx(() => [
          _ctx.show ? (openBlock(), createElementBlock("div", _hoisted_1$V)) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
const VPBackdrop = /* @__PURE__ */ _export_sfc(_sfc_main$13, [["__scopeId", "data-v-ec19beea"]]);
const useData = useData$1;
function throttleAndDebounce$1(fn, delay) {
  let timeoutId;
  let called = false;
  return () => {
    if (timeoutId)
      clearTimeout(timeoutId);
    if (!called) {
      fn();
      (called = true) && setTimeout(() => called = false, delay);
    } else
      timeoutId = setTimeout(fn, delay);
  };
}
function ensureStartingSlash$1(path) {
  return path.startsWith("/") ? path : `/${path}`;
}
function normalizeLink$2(url) {
  const { pathname, search, hash, protocol } = new URL(url, "http://a.com");
  if (isExternal(url) || url.startsWith("#") || !protocol.startsWith("http") || !treatAsHtml(pathname))
    return url;
  const { site } = useData();
  const normalizedPath = pathname.endsWith("/") || pathname.endsWith(".html") ? url : url.replace(/(?:(^\.+)\/)?.*$/, `$1${pathname.replace(/(\.md)?$/, site.value.cleanUrls ? "" : ".html")}${search}${hash}`);
  return withBase(normalizedPath);
}
function getSidebar(_sidebar, path) {
  if (Array.isArray(_sidebar))
    return addBase(_sidebar);
  if (_sidebar == null)
    return [];
  path = ensureStartingSlash$1(path);
  const dir = Object.keys(_sidebar).sort((a, b) => {
    return b.split("/").length - a.split("/").length;
  }).find((dir2) => {
    return path.startsWith(ensureStartingSlash$1(dir2));
  });
  const sidebar = dir ? _sidebar[dir] : [];
  return Array.isArray(sidebar) ? addBase(sidebar) : addBase(sidebar.items, sidebar.base);
}
function getSidebarGroups(sidebar) {
  const groups = [];
  let lastGroupIndex = 0;
  for (const index in sidebar) {
    const item = sidebar[index];
    if (item.items) {
      lastGroupIndex = groups.push(item);
      continue;
    }
    if (!groups[lastGroupIndex]) {
      groups.push({ items: [] });
    }
    groups[lastGroupIndex].items.push(item);
  }
  return groups;
}
function getFlatSideBarLinks(sidebar) {
  const links = [];
  function recursivelyExtractLinks(items) {
    for (const item of items) {
      if (item.text && item.link) {
        links.push({
          text: item.text,
          link: item.link,
          docFooterText: item.docFooterText
        });
      }
      if (item.items) {
        recursivelyExtractLinks(item.items);
      }
    }
  }
  recursivelyExtractLinks(sidebar);
  return links;
}
function hasActiveLink(path, items) {
  if (Array.isArray(items)) {
    return items.some((item) => hasActiveLink(path, item));
  }
  return isActive(path, items.link) ? true : items.items ? hasActiveLink(path, items.items) : false;
}
function addBase(items, _base) {
  return [...items].map((_item) => {
    const item = { ..._item };
    const base = item.base || _base;
    if (base && item.link)
      item.link = base + item.link;
    if (item.items)
      item.items = addBase(item.items, base);
    return item;
  });
}
function useSidebar() {
  const { frontmatter, page, theme } = useData();
  const is960 = useMediaQuery("(min-width: 960px)");
  const isOpen = ref(false);
  const _sidebar = computed(() => {
    const sidebarConfig = theme.value.sidebar;
    const relativePath = page.value.relativePath;
    return sidebarConfig ? getSidebar(sidebarConfig, relativePath) : [];
  });
  const sidebar = ref(_sidebar.value);
  watch(_sidebar, (next, prev) => {
    if (JSON.stringify(next) !== JSON.stringify(prev))
      sidebar.value = _sidebar.value;
  });
  const hasSidebar = computed(() => {
    return frontmatter.value.sidebar !== false && sidebar.value.length > 0 && frontmatter.value.layout !== "home";
  });
  const leftAside = computed(() => {
    if (hasAside)
      return frontmatter.value.aside == null ? theme.value.aside === "left" : frontmatter.value.aside === "left";
    return false;
  });
  const hasAside = computed(() => {
    if (frontmatter.value.layout === "home")
      return false;
    if (frontmatter.value.aside != null)
      return !!frontmatter.value.aside;
    return theme.value.aside !== false;
  });
  const isSidebarEnabled = computed(() => hasSidebar.value && is960.value);
  const sidebarGroups = computed(() => {
    return hasSidebar.value ? getSidebarGroups(sidebar.value) : [];
  });
  function open() {
    isOpen.value = true;
  }
  function close() {
    isOpen.value = false;
  }
  function toggle() {
    isOpen.value ? close() : open();
  }
  return {
    isOpen,
    sidebar,
    sidebarGroups,
    hasSidebar,
    hasAside,
    leftAside,
    isSidebarEnabled,
    open,
    close,
    toggle
  };
}
function useCloseSidebarOnEscape(isOpen, close) {
  let triggerElement;
  watchEffect(() => {
    triggerElement = isOpen.value ? document.activeElement : void 0;
  });
  onMounted(() => {
    window.addEventListener("keyup", onEscape);
  });
  onUnmounted(() => {
    window.removeEventListener("keyup", onEscape);
  });
  function onEscape(e) {
    if (e.key === "Escape" && isOpen.value) {
      close();
      triggerElement == null ? void 0 : triggerElement.focus();
    }
  }
}
function useSidebarControl(item) {
  const { page, hash } = useData();
  const collapsed = ref(false);
  const collapsible = computed(() => {
    return item.value.collapsed != null;
  });
  const isLink = computed(() => {
    return !!item.value.link;
  });
  const isActiveLink = ref(false);
  const updateIsActiveLink = () => {
    isActiveLink.value = isActive(page.value.relativePath, item.value.link);
  };
  watch([page, item, hash], updateIsActiveLink);
  onMounted(updateIsActiveLink);
  const hasActiveLink$1 = computed(() => {
    if (isActiveLink.value) {
      return true;
    }
    return item.value.items ? hasActiveLink(page.value.relativePath, item.value.items) : false;
  });
  const hasChildren = computed(() => {
    return !!(item.value.items && item.value.items.length);
  });
  watchEffect(() => {
    collapsed.value = !!(collapsible.value && item.value.collapsed);
  });
  watchPostEffect(() => {
    (isActiveLink.value || hasActiveLink$1.value) && (collapsed.value = false);
  });
  function toggle() {
    if (collapsible.value) {
      collapsed.value = !collapsed.value;
    }
  }
  return {
    collapsed,
    collapsible,
    isLink,
    isActiveLink,
    hasActiveLink: hasActiveLink$1,
    hasChildren,
    toggle
  };
}
const _sfc_main$12 = /* @__PURE__ */ defineComponent({
  __name: "VPLink",
  props: {
    tag: {},
    href: {},
    noIcon: { type: Boolean },
    target: {},
    rel: {}
  },
  setup(__props) {
    const props = __props;
    const tag = computed(() => props.tag ?? (props.href ? "a" : "span"));
    const isExternal2 = computed(
      () => props.href && EXTERNAL_URL_RE.test(props.href) || props.target === "_blank"
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(tag.value), {
        class: normalizeClass(["VPLink", {
          link: _ctx.href,
          "vp-external-link-icon": isExternal2.value,
          "no-icon": _ctx.noIcon
        }]),
        href: _ctx.href ? unref(normalizeLink$2)(_ctx.href) : void 0,
        target: _ctx.target ?? (isExternal2.value ? "_blank" : void 0),
        rel: _ctx.rel ?? (isExternal2.value ? "noreferrer" : void 0)
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "href", "target", "rel"]);
    };
  }
});
const _hoisted_1$U = ["role", "tabindex"];
const _hoisted_2$B = {
  key: 1,
  class: "items"
};
const _sfc_main$11 = /* @__PURE__ */ defineComponent({
  __name: "VPSidebarItem",
  props: {
    item: {},
    depth: {}
  },
  setup(__props) {
    const props = __props;
    const {
      collapsed,
      collapsible,
      isLink,
      isActiveLink,
      hasActiveLink: hasActiveLink2,
      hasChildren,
      toggle
    } = useSidebarControl(computed(() => props.item));
    const sectionTag = computed(() => hasChildren.value ? "section" : `div`);
    const linkTag = computed(() => isLink.value ? "a" : "div");
    const textTag = computed(() => {
      return !hasChildren.value ? "p" : props.depth + 2 === 7 ? "p" : `h${props.depth + 2}`;
    });
    const itemRole = computed(() => isLink.value ? void 0 : "button");
    const classes = computed(() => [
      [`level-${props.depth}`],
      { collapsible: collapsible.value },
      { collapsed: collapsed.value },
      { "is-link": isLink.value },
      { "is-active": isActiveLink.value },
      { "has-active": hasActiveLink2.value }
    ]);
    function onItemInteraction(e) {
      if ("key" in e && e.key !== "Enter") {
        return;
      }
      !props.item.link && toggle();
    }
    function onCaretClick() {
      props.item.link && toggle();
    }
    return (_ctx, _cache) => {
      const _component_VPSidebarItem = resolveComponent("VPSidebarItem", true);
      return openBlock(), createBlock(resolveDynamicComponent(sectionTag.value), {
        class: normalizeClass(["VPSidebarItem", classes.value])
      }, {
        default: withCtx(() => [
          _ctx.item.text ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            class: "item",
            role: itemRole.value
          }, toHandlers(
            _ctx.item.items ? { click: onItemInteraction, keydown: onItemInteraction } : {},
            true
          ), {
            tabindex: _ctx.item.items && 0
          }), [
            _cache[1] || (_cache[1] = createBaseVNode("div", { class: "indicator" }, null, -1)),
            _ctx.item.link ? (openBlock(), createBlock(_sfc_main$12, {
              key: 0,
              tag: linkTag.value,
              class: "link",
              href: _ctx.item.link,
              rel: _ctx.item.rel,
              target: _ctx.item.target
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(textTag.value), {
                  class: "text",
                  innerHTML: _ctx.item.text
                }, null, 8, ["innerHTML"]))
              ]),
              _: 1
            }, 8, ["tag", "href", "rel", "target"])) : (openBlock(), createBlock(resolveDynamicComponent(textTag.value), {
              key: 1,
              class: "text",
              innerHTML: _ctx.item.text
            }, null, 8, ["innerHTML"])),
            _ctx.item.collapsed != null && _ctx.item.items && _ctx.item.items.length ? (openBlock(), createElementBlock("div", {
              key: 2,
              class: "caret",
              role: "button",
              "aria-label": "toggle section",
              onClick: onCaretClick,
              onKeydown: withKeys(onCaretClick, ["enter"]),
              tabindex: "0"
            }, _cache[0] || (_cache[0] = [
              createBaseVNode("span", { class: "vpi-chevron-right caret-icon" }, null, -1)
            ]), 32)) : createCommentVNode("", true)
          ], 16, _hoisted_1$U)) : createCommentVNode("", true),
          _ctx.item.items && _ctx.item.items.length ? (openBlock(), createElementBlock("div", _hoisted_2$B, [
            _ctx.depth < 5 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.item.items, (i) => {
              return openBlock(), createBlock(_component_VPSidebarItem, {
                key: i.text,
                item: i,
                depth: _ctx.depth + 1
              }, null, 8, ["item", "depth"]);
            }), 128)) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const VPSidebarItem = /* @__PURE__ */ _export_sfc(_sfc_main$11, [["__scopeId", "data-v-ba01e990"]]);
const _sfc_main$10 = /* @__PURE__ */ defineComponent({
  __name: "VPSidebarGroup",
  props: {
    items: {}
  },
  setup(__props) {
    const disableTransition = ref(true);
    let timer = null;
    onMounted(() => {
      timer = setTimeout(() => {
        timer = null;
        disableTransition.value = false;
      }, 300);
    });
    onBeforeUnmount(() => {
      if (timer != null) {
        clearTimeout(timer);
        timer = null;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, (item) => {
        return openBlock(), createElementBlock("div", {
          key: item.text,
          class: normalizeClass(["group", { "no-transition": disableTransition.value }])
        }, [
          createVNode(VPSidebarItem, {
            item,
            depth: 0
          }, null, 8, ["item"])
        ], 2);
      }), 128);
    };
  }
});
const VPSidebarGroup = /* @__PURE__ */ _export_sfc(_sfc_main$10, [["__scopeId", "data-v-d2e1e50a"]]);
const _hoisted_1$T = {
  class: "nav",
  id: "VPSidebarNav",
  "aria-labelledby": "sidebar-aria-label",
  tabindex: "-1"
};
const _sfc_main$$ = /* @__PURE__ */ defineComponent({
  __name: "VPSidebar",
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const { sidebarGroups, hasSidebar } = useSidebar();
    const props = __props;
    const navEl = ref(null);
    const isLocked = useScrollLock$1(inBrowser ? document.body : null);
    watch(
      [props, navEl],
      () => {
        var _a;
        if (props.open) {
          isLocked.value = true;
          (_a = navEl.value) == null ? void 0 : _a.focus();
        } else isLocked.value = false;
      },
      { immediate: true, flush: "post" }
    );
    const key = ref(0);
    watch(
      sidebarGroups,
      () => {
        key.value += 1;
      },
      { deep: true }
    );
    return (_ctx, _cache) => {
      return unref(hasSidebar) ? (openBlock(), createElementBlock("aside", {
        key: 0,
        class: normalizeClass(["VPSidebar", { open: _ctx.open }]),
        ref_key: "navEl",
        ref: navEl,
        onClick: _cache[0] || (_cache[0] = withModifiers(() => {
        }, ["stop"]))
      }, [
        _cache[2] || (_cache[2] = createBaseVNode("div", { class: "curtain" }, null, -1)),
        createBaseVNode("nav", _hoisted_1$T, [
          _cache[1] || (_cache[1] = createBaseVNode("span", {
            class: "visually-hidden",
            id: "sidebar-aria-label"
          }, " Sidebar Navigation ", -1)),
          renderSlot(_ctx.$slots, "sidebar-nav-before", {}, void 0, true),
          (openBlock(), createBlock(VPSidebarGroup, {
            items: unref(sidebarGroups),
            key: key.value
          }, null, 8, ["items"])),
          renderSlot(_ctx.$slots, "sidebar-nav-after", {}, void 0, true)
        ])
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const VPSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$$, [["__scopeId", "data-v-d9a60c51"]]);
function useLangs({ correspondingLink = false } = {}) {
  const { site, localeIndex, page, theme, hash } = useData();
  const currentLang = computed(() => {
    var _a, _b;
    return {
      label: (_a = site.value.locales[localeIndex.value]) == null ? void 0 : _a.label,
      link: ((_b = site.value.locales[localeIndex.value]) == null ? void 0 : _b.link) || (localeIndex.value === "root" ? "/" : `/${localeIndex.value}/`)
    };
  });
  const localeLinks = computed(() => Object.entries(site.value.locales).flatMap(([key, value]) => currentLang.value.label === value.label ? [] : {
    text: value.label,
    link: normalizeLink$1(value.link || (key === "root" ? "/" : `/${key}/`), theme.value.i18nRouting !== false && correspondingLink, page.value.relativePath.slice(currentLang.value.link.length - 1), !site.value.cleanUrls) + hash.value
  }));
  return { localeLinks, currentLang };
}
function normalizeLink$1(link, addPath, path, addExt) {
  return addPath ? link.replace(/\/$/, "") + ensureStartingSlash$1(path.replace(/(^|\/)index\.md$/, "$1").replace(/\.md$/, addExt ? ".html" : "")) : link;
}
const _hoisted_1$S = { class: "NotFound" };
const _hoisted_2$A = { class: "code" };
const _hoisted_3$n = { class: "title" };
const _hoisted_4$f = { class: "quote" };
const _hoisted_5$b = { class: "action" };
const _hoisted_6$9 = ["href", "aria-label"];
const _sfc_main$_ = /* @__PURE__ */ defineComponent({
  __name: "NotFound",
  setup(__props) {
    const { theme } = useData();
    const { currentLang } = useLangs();
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e;
      return openBlock(), createElementBlock("div", _hoisted_1$S, [
        createBaseVNode("p", _hoisted_2$A, toDisplayString(((_a = unref(theme).notFound) == null ? void 0 : _a.code) ?? "404"), 1),
        createBaseVNode("h1", _hoisted_3$n, toDisplayString(((_b = unref(theme).notFound) == null ? void 0 : _b.title) ?? "PAGE NOT FOUND"), 1),
        _cache[0] || (_cache[0] = createBaseVNode("div", { class: "divider" }, null, -1)),
        createBaseVNode("blockquote", _hoisted_4$f, toDisplayString(((_c = unref(theme).notFound) == null ? void 0 : _c.quote) ?? "But if you don't change your direction, and if you keep looking, you may end up where you are heading."), 1),
        createBaseVNode("div", _hoisted_5$b, [
          createBaseVNode("a", {
            class: "link",
            href: unref(withBase)(unref(currentLang).link),
            "aria-label": ((_d = unref(theme).notFound) == null ? void 0 : _d.linkLabel) ?? "go to home"
          }, toDisplayString(((_e = unref(theme).notFound) == null ? void 0 : _e.linkText) ?? "Take me home"), 9, _hoisted_6$9)
        ])
      ]);
    };
  }
});
const NotFound = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["__scopeId", "data-v-9edf20df"]]);
function useAside() {
  const { hasSidebar } = useSidebar();
  const is960 = useMediaQuery("(min-width: 960px)");
  const is1280 = useMediaQuery("(min-width: 1280px)");
  const isAsideEnabled = computed(() => {
    if (!is1280.value && !is960.value) {
      return false;
    }
    return hasSidebar.value ? is1280.value : is960.value;
  });
  return {
    isAsideEnabled
  };
}
const ignoreRE = /\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/;
const resolvedHeaders$1 = [];
function resolveTitle(theme) {
  return typeof theme.outline === "object" && !Array.isArray(theme.outline) && theme.outline.label || theme.outlineTitle || "On this page";
}
function getHeaders$1(range) {
  const headers = [
    ...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")
  ].filter((el) => el.id && el.hasChildNodes()).map((el) => {
    const level = Number(el.tagName[1]);
    return {
      element: el,
      title: serializeHeader$1(el),
      link: "#" + el.id,
      level
    };
  });
  return resolveHeaders$1(headers, range);
}
function serializeHeader$1(h) {
  let ret = "";
  for (const node of h.childNodes) {
    if (node.nodeType === 1) {
      if (ignoreRE.test(node.className))
        continue;
      ret += node.textContent;
    } else if (node.nodeType === 3) {
      ret += node.textContent;
    }
  }
  return ret.trim();
}
function resolveHeaders$1(headers, range) {
  if (range === false) {
    return [];
  }
  const levelsRange = (typeof range === "object" && !Array.isArray(range) ? range.level : range) || 2;
  const [high, low] = typeof levelsRange === "number" ? [levelsRange, levelsRange] : levelsRange === "deep" ? [2, 6] : levelsRange;
  return buildTree$1(headers, high, low);
}
function useActiveAnchor$1(container, marker) {
  const { isAsideEnabled } = useAside();
  const onScroll = throttleAndDebounce$1(setActiveLink, 100);
  let prevActiveLink = null;
  onMounted(() => {
    requestAnimationFrame(setActiveLink);
    window.addEventListener("scroll", onScroll);
  });
  onUpdated(() => {
    activateLink(location.hash);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
  });
  function setActiveLink() {
    if (!isAsideEnabled.value) {
      return;
    }
    const scrollY = window.scrollY;
    const innerHeight = window.innerHeight;
    const offsetHeight = document.body.offsetHeight;
    const isBottom = Math.abs(scrollY + innerHeight - offsetHeight) < 1;
    const headers = resolvedHeaders$1.map(({ element, link }) => ({
      link,
      top: getAbsoluteTop$1(element)
    })).filter(({ top }) => !Number.isNaN(top)).sort((a, b) => a.top - b.top);
    if (!headers.length) {
      activateLink(null);
      return;
    }
    if (scrollY < 1) {
      activateLink(null);
      return;
    }
    if (isBottom) {
      activateLink(headers[headers.length - 1].link);
      return;
    }
    let activeLink = null;
    for (const { link, top } of headers) {
      if (top > scrollY + getScrollOffset() + 4) {
        break;
      }
      activeLink = link;
    }
    activateLink(activeLink);
  }
  function activateLink(hash) {
    if (prevActiveLink) {
      prevActiveLink.classList.remove("active");
    }
    if (hash == null) {
      prevActiveLink = null;
    } else {
      prevActiveLink = container.value.querySelector(`a[href="${decodeURIComponent(hash)}"]`);
    }
    const activeLink = prevActiveLink;
    if (activeLink) {
      activeLink.classList.add("active");
      marker.value.style.top = activeLink.offsetTop + 39 + "px";
      marker.value.style.opacity = "1";
    } else {
      marker.value.style.top = "33px";
      marker.value.style.opacity = "0";
    }
  }
}
function getAbsoluteTop$1(element) {
  let offsetTop = 0;
  while (element !== document.body) {
    if (element === null) {
      return NaN;
    }
    offsetTop += element.offsetTop;
    element = element.offsetParent;
  }
  return offsetTop;
}
function buildTree$1(data2, min, max) {
  resolvedHeaders$1.length = 0;
  const result = [];
  const stack = [];
  data2.forEach((item) => {
    const node = { ...item, children: [] };
    let parent = stack[stack.length - 1];
    while (parent && parent.level >= node.level) {
      stack.pop();
      parent = stack[stack.length - 1];
    }
    if (node.element.classList.contains("ignore-header") || parent && "shouldIgnore" in parent) {
      stack.push({ level: node.level, shouldIgnore: true });
      return;
    }
    if (node.level > max || node.level < min)
      return;
    resolvedHeaders$1.push({ element: node.element, link: node.link });
    if (parent)
      parent.children.push(node);
    else
      result.push(node);
    stack.push(node);
  });
  return result;
}
const _hoisted_1$R = ["href", "title"];
const _sfc_main$Z = /* @__PURE__ */ defineComponent({
  __name: "VPDocOutlineItem",
  props: {
    headers: {},
    root: { type: Boolean }
  },
  setup(__props) {
    function onClick({ target: el }) {
      const id = el.href.split("#")[1];
      const heading = document.getElementById(decodeURIComponent(id));
      heading == null ? void 0 : heading.focus({ preventScroll: true });
    }
    return (_ctx, _cache) => {
      const _component_VPDocOutlineItem = resolveComponent("VPDocOutlineItem", true);
      return openBlock(), createElementBlock("ul", {
        class: normalizeClass(["VPDocOutlineItem", _ctx.root ? "root" : "nested"])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.headers, ({ children, link, title }) => {
          return openBlock(), createElementBlock("li", null, [
            createBaseVNode("a", {
              class: "outline-link",
              href: link,
              onClick,
              title
            }, toDisplayString(title), 9, _hoisted_1$R),
            (children == null ? void 0 : children.length) ? (openBlock(), createBlock(_component_VPDocOutlineItem, {
              key: 0,
              headers: children
            }, null, 8, ["headers"])) : createCommentVNode("", true)
          ]);
        }), 256))
      ], 2);
    };
  }
});
const VPDocOutlineItem = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["__scopeId", "data-v-bcf55ad3"]]);
const _hoisted_1$Q = { class: "content" };
const _hoisted_2$z = {
  "aria-level": "2",
  class: "outline-title",
  id: "doc-outline-aria-label",
  role: "heading"
};
const _sfc_main$Y = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideOutline",
  setup(__props) {
    const { frontmatter, theme } = useData();
    const headers = shallowRef([]);
    onContentUpdated(() => {
      headers.value = getHeaders$1(frontmatter.value.outline ?? theme.value.outline);
    });
    const container = ref();
    const marker = ref();
    useActiveAnchor$1(container, marker);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("nav", {
        "aria-labelledby": "doc-outline-aria-label",
        class: normalizeClass(["VPDocAsideOutline", { "has-outline": headers.value.length > 0 }]),
        ref_key: "container",
        ref: container
      }, [
        createBaseVNode("div", _hoisted_1$Q, [
          createBaseVNode("div", {
            class: "outline-marker",
            ref_key: "marker",
            ref: marker
          }, null, 512),
          createBaseVNode("div", _hoisted_2$z, toDisplayString(unref(resolveTitle)(unref(theme))), 1),
          createVNode(VPDocOutlineItem, {
            headers: headers.value,
            root: true
          }, null, 8, ["headers"])
        ])
      ], 2);
    };
  }
});
const VPDocAsideOutline = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["__scopeId", "data-v-7c8a359c"]]);
const _hoisted_1$P = { class: "VPDocAsideCarbonAds" };
const _sfc_main$X = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideCarbonAds",
  props: {
    carbonAds: {}
  },
  setup(__props) {
    const VPCarbonAds = () => null;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$P, [
        createVNode(unref(VPCarbonAds), { "carbon-ads": _ctx.carbonAds }, null, 8, ["carbon-ads"])
      ]);
    };
  }
});
const _hoisted_1$O = { class: "VPDocAside" };
const _sfc_main$W = /* @__PURE__ */ defineComponent({
  __name: "VPDocAside",
  setup(__props) {
    const { theme } = useData();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$O, [
        renderSlot(_ctx.$slots, "aside-top", {}, void 0, true),
        renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true),
        createVNode(VPDocAsideOutline),
        renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true),
        _cache[0] || (_cache[0] = createBaseVNode("div", { class: "spacer" }, null, -1)),
        renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true),
        unref(theme).carbonAds ? (openBlock(), createBlock(_sfc_main$X, {
          key: 0,
          "carbon-ads": unref(theme).carbonAds
        }, null, 8, ["carbon-ads"])) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true),
        renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
      ]);
    };
  }
});
const VPDocAside = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["__scopeId", "data-v-4503109c"]]);
function useEditLink() {
  const { theme, page } = useData();
  return computed(() => {
    const { text = "Edit this page", pattern = "" } = theme.value.editLink || {};
    let url;
    if (typeof pattern === "function") {
      url = pattern(page.value);
    } else {
      url = pattern.replace(/:path/g, page.value.filePath);
    }
    return { url, text };
  });
}
function usePrevNext() {
  const { page, theme, frontmatter } = useData();
  return computed(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const sidebar = getSidebar(theme.value.sidebar, page.value.relativePath);
    const links = getFlatSideBarLinks(sidebar);
    const candidates = uniqBy(links, (link) => link.link.replace(/[?#].*$/, ""));
    const index = candidates.findIndex((link) => {
      return isActive(page.value.relativePath, link.link);
    });
    const hidePrev = ((_a = theme.value.docFooter) == null ? void 0 : _a.prev) === false && !frontmatter.value.prev || frontmatter.value.prev === false;
    const hideNext = ((_b = theme.value.docFooter) == null ? void 0 : _b.next) === false && !frontmatter.value.next || frontmatter.value.next === false;
    return {
      prev: hidePrev ? void 0 : {
        text: (typeof frontmatter.value.prev === "string" ? frontmatter.value.prev : typeof frontmatter.value.prev === "object" ? frontmatter.value.prev.text : void 0) ?? ((_c = candidates[index - 1]) == null ? void 0 : _c.docFooterText) ?? ((_d = candidates[index - 1]) == null ? void 0 : _d.text),
        link: (typeof frontmatter.value.prev === "object" ? frontmatter.value.prev.link : void 0) ?? ((_e = candidates[index - 1]) == null ? void 0 : _e.link)
      },
      next: hideNext ? void 0 : {
        text: (typeof frontmatter.value.next === "string" ? frontmatter.value.next : typeof frontmatter.value.next === "object" ? frontmatter.value.next.text : void 0) ?? ((_f = candidates[index + 1]) == null ? void 0 : _f.docFooterText) ?? ((_g = candidates[index + 1]) == null ? void 0 : _g.text),
        link: (typeof frontmatter.value.next === "object" ? frontmatter.value.next.link : void 0) ?? ((_h = candidates[index + 1]) == null ? void 0 : _h.link)
      }
    };
  });
}
function uniqBy(array, keyFn) {
  const seen = /* @__PURE__ */ new Set();
  return array.filter((item) => {
    const k = keyFn(item);
    return seen.has(k) ? false : seen.add(k);
  });
}
const _hoisted_1$N = { class: "VPLastUpdated" };
const _hoisted_2$y = ["datetime"];
const _sfc_main$V = /* @__PURE__ */ defineComponent({
  __name: "VPDocFooterLastUpdated",
  setup(__props) {
    const { theme, page, lang } = useData();
    const date = computed(
      () => new Date(page.value.lastUpdated)
    );
    const isoDatetime = computed(() => date.value.toISOString());
    const datetime = ref("");
    onMounted(() => {
      watchEffect(() => {
        var _a, _b, _c;
        datetime.value = new Intl.DateTimeFormat(
          ((_b = (_a = theme.value.lastUpdated) == null ? void 0 : _a.formatOptions) == null ? void 0 : _b.forceLocale) ? lang.value : void 0,
          ((_c = theme.value.lastUpdated) == null ? void 0 : _c.formatOptions) ?? {
            dateStyle: "short",
            timeStyle: "short"
          }
        ).format(date.value);
      });
    });
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock("p", _hoisted_1$N, [
        createTextVNode(toDisplayString(((_a = unref(theme).lastUpdated) == null ? void 0 : _a.text) || unref(theme).lastUpdatedText || "Last updated") + ": ", 1),
        createBaseVNode("time", { datetime: isoDatetime.value }, toDisplayString(datetime.value), 9, _hoisted_2$y)
      ]);
    };
  }
});
const VPDocFooterLastUpdated = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["__scopeId", "data-v-34c0dc51"]]);
const _hoisted_1$M = {
  key: 0,
  class: "VPDocFooter"
};
const _hoisted_2$x = {
  key: 0,
  class: "edit-info"
};
const _hoisted_3$m = {
  key: 0,
  class: "edit-link"
};
const _hoisted_4$e = {
  key: 1,
  class: "last-updated"
};
const _hoisted_5$a = {
  key: 1,
  class: "prev-next",
  "aria-labelledby": "doc-footer-aria-label"
};
const _hoisted_6$8 = { class: "pager" };
const _hoisted_7$4 = ["innerHTML"];
const _hoisted_8$4 = ["innerHTML"];
const _hoisted_9$3 = { class: "pager" };
const _hoisted_10$3 = ["innerHTML"];
const _hoisted_11$3 = ["innerHTML"];
const _sfc_main$U = /* @__PURE__ */ defineComponent({
  __name: "VPDocFooter",
  setup(__props) {
    const { theme, page, frontmatter } = useData();
    const editLink = useEditLink();
    const control = usePrevNext();
    const hasEditLink = computed(
      () => theme.value.editLink && frontmatter.value.editLink !== false
    );
    const hasLastUpdated = computed(() => page.value.lastUpdated);
    const showFooter = computed(
      () => hasEditLink.value || hasLastUpdated.value || control.value.prev || control.value.next
    );
    return (_ctx, _cache) => {
      var _a, _b, _c, _d;
      return showFooter.value ? (openBlock(), createElementBlock("footer", _hoisted_1$M, [
        renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true),
        hasEditLink.value || hasLastUpdated.value ? (openBlock(), createElementBlock("div", _hoisted_2$x, [
          hasEditLink.value ? (openBlock(), createElementBlock("div", _hoisted_3$m, [
            createVNode(_sfc_main$12, {
              class: "edit-link-button",
              href: unref(editLink).url,
              "no-icon": true
            }, {
              default: withCtx(() => [
                _cache[0] || (_cache[0] = createBaseVNode("span", { class: "vpi-square-pen edit-link-icon" }, null, -1)),
                createTextVNode(" " + toDisplayString(unref(editLink).text), 1)
              ]),
              _: 1
            }, 8, ["href"])
          ])) : createCommentVNode("", true),
          hasLastUpdated.value ? (openBlock(), createElementBlock("div", _hoisted_4$e, [
            createVNode(VPDocFooterLastUpdated)
          ])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        ((_a = unref(control).prev) == null ? void 0 : _a.link) || ((_b = unref(control).next) == null ? void 0 : _b.link) ? (openBlock(), createElementBlock("nav", _hoisted_5$a, [
          _cache[1] || (_cache[1] = createBaseVNode("span", {
            class: "visually-hidden",
            id: "doc-footer-aria-label"
          }, "Pager", -1)),
          createBaseVNode("div", _hoisted_6$8, [
            ((_c = unref(control).prev) == null ? void 0 : _c.link) ? (openBlock(), createBlock(_sfc_main$12, {
              key: 0,
              class: "pager-link prev",
              href: unref(control).prev.link
            }, {
              default: withCtx(() => {
                var _a2;
                return [
                  createBaseVNode("span", {
                    class: "desc",
                    innerHTML: ((_a2 = unref(theme).docFooter) == null ? void 0 : _a2.prev) || "Previous page"
                  }, null, 8, _hoisted_7$4),
                  createBaseVNode("span", {
                    class: "title",
                    innerHTML: unref(control).prev.text
                  }, null, 8, _hoisted_8$4)
                ];
              }),
              _: 1
            }, 8, ["href"])) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_9$3, [
            ((_d = unref(control).next) == null ? void 0 : _d.link) ? (openBlock(), createBlock(_sfc_main$12, {
              key: 0,
              class: "pager-link next",
              href: unref(control).next.link
            }, {
              default: withCtx(() => {
                var _a2;
                return [
                  createBaseVNode("span", {
                    class: "desc",
                    innerHTML: ((_a2 = unref(theme).docFooter) == null ? void 0 : _a2.next) || "Next page"
                  }, null, 8, _hoisted_10$3),
                  createBaseVNode("span", {
                    class: "title",
                    innerHTML: unref(control).next.text
                  }, null, 8, _hoisted_11$3)
                ];
              }),
              _: 1
            }, 8, ["href"])) : createCommentVNode("", true)
          ])
        ])) : createCommentVNode("", true)
      ])) : createCommentVNode("", true);
    };
  }
});
const VPDocFooter = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["__scopeId", "data-v-152393c3"]]);
const _hoisted_1$L = { class: "container" };
const _hoisted_2$w = { class: "aside-container" };
const _hoisted_3$l = { class: "aside-content" };
const _hoisted_4$d = { class: "content" };
const _hoisted_5$9 = { class: "content-container" };
const _hoisted_6$7 = { class: "main" };
const _sfc_main$T = /* @__PURE__ */ defineComponent({
  __name: "VPDoc",
  setup(__props) {
    const { theme } = useData();
    const route = useRoute();
    const { hasSidebar, hasAside, leftAside } = useSidebar();
    const pageName = computed(
      () => route.path.replace(/[./]+/g, "_").replace(/_html$/, "")
    );
    return (_ctx, _cache) => {
      const _component_Content = resolveComponent("Content");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["VPDoc", { "has-sidebar": unref(hasSidebar), "has-aside": unref(hasAside) }])
      }, [
        renderSlot(_ctx.$slots, "doc-top", {}, void 0, true),
        createBaseVNode("div", _hoisted_1$L, [
          unref(hasAside) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(["aside", { "left-aside": unref(leftAside) }])
          }, [
            _cache[0] || (_cache[0] = createBaseVNode("div", { class: "aside-curtain" }, null, -1)),
            createBaseVNode("div", _hoisted_2$w, [
              createBaseVNode("div", _hoisted_3$l, [
                createVNode(VPDocAside, null, {
                  "aside-top": withCtx(() => [
                    renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
                  ]),
                  "aside-bottom": withCtx(() => [
                    renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
                  ]),
                  "aside-outline-before": withCtx(() => [
                    renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
                  ]),
                  "aside-outline-after": withCtx(() => [
                    renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
                  ]),
                  "aside-ads-before": withCtx(() => [
                    renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
                  ]),
                  "aside-ads-after": withCtx(() => [
                    renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
                  ]),
                  _: 3
                })
              ])
            ])
          ], 2)) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_4$d, [
            createBaseVNode("div", _hoisted_5$9, [
              renderSlot(_ctx.$slots, "doc-before", {}, void 0, true),
              createBaseVNode("main", _hoisted_6$7, [
                createVNode(_component_Content, {
                  class: normalizeClass(["vp-doc", [
                    pageName.value,
                    unref(theme).externalLinkIcon && "external-link-icon-enabled"
                  ]])
                }, null, 8, ["class"])
              ]),
              createVNode(VPDocFooter, null, {
                "doc-footer-before": withCtx(() => [
                  renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
                ]),
                _: 3
              }),
              renderSlot(_ctx.$slots, "doc-after", {}, void 0, true)
            ])
          ])
        ]),
        renderSlot(_ctx.$slots, "doc-bottom", {}, void 0, true)
      ], 2);
    };
  }
});
const VPDoc = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["__scopeId", "data-v-afbfc7f7"]]);
const _hoisted_1$K = ["src", "alt"];
const _sfc_main$S = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "VPImage",
  props: {
    image: {},
    alt: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_VPImage = resolveComponent("VPImage", true);
      return _ctx.image ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        typeof _ctx.image === "string" || "src" in _ctx.image ? (openBlock(), createElementBlock("img", mergeProps({
          key: 0,
          class: "VPImage"
        }, typeof _ctx.image === "string" ? _ctx.$attrs : { ..._ctx.image, ..._ctx.$attrs }, {
          src: unref(withBase)(typeof _ctx.image === "string" ? _ctx.image : _ctx.image.src),
          alt: _ctx.alt ?? (typeof _ctx.image === "string" ? "" : _ctx.image.alt || "")
        }), null, 16, _hoisted_1$K)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createVNode(_component_VPImage, mergeProps({
            class: "dark",
            image: _ctx.image.dark,
            alt: _ctx.image.alt
          }, _ctx.$attrs), null, 16, ["image", "alt"]),
          createVNode(_component_VPImage, mergeProps({
            class: "light",
            image: _ctx.image.light,
            alt: _ctx.image.alt
          }, _ctx.$attrs), null, 16, ["image", "alt"])
        ], 64))
      ], 64)) : createCommentVNode("", true);
    };
  }
});
const VPImage = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["__scopeId", "data-v-f3fd6169"]]);
function useLocalNav() {
  const { theme, frontmatter } = useData();
  const headers = shallowRef([]);
  const hasLocalNav = computed(() => {
    return headers.value.length > 0;
  });
  onContentUpdated(() => {
    headers.value = getHeaders$1(frontmatter.value.outline ?? theme.value.outline);
  });
  return {
    headers,
    hasLocalNav
  };
}
const _hoisted_1$J = { class: "menu-text" };
const _hoisted_2$v = { class: "header" };
const _hoisted_3$k = { class: "outline" };
const _sfc_main$R = /* @__PURE__ */ defineComponent({
  __name: "VPLocalNavOutlineDropdown",
  props: {
    headers: {},
    navHeight: {}
  },
  setup(__props) {
    const props = __props;
    const { theme } = useData();
    const open = ref(false);
    const vh = ref(0);
    const main = ref();
    const items = ref();
    function closeOnClickOutside(e) {
      var _a;
      if (!((_a = main.value) == null ? void 0 : _a.contains(e.target))) {
        open.value = false;
      }
    }
    watch(open, (value) => {
      if (value) {
        document.addEventListener("click", closeOnClickOutside);
        return;
      }
      document.removeEventListener("click", closeOnClickOutside);
    });
    onKeyStroke$1("Escape", () => {
      open.value = false;
    });
    onContentUpdated(() => {
      open.value = false;
    });
    function toggle() {
      open.value = !open.value;
      vh.value = window.innerHeight + Math.min(window.scrollY - props.navHeight, 0);
    }
    function onItemClick(e) {
      if (e.target.classList.contains("outline-link")) {
        if (items.value) {
          items.value.style.transition = "none";
        }
        nextTick(() => {
          open.value = false;
        });
      }
    }
    function scrollToTop() {
      open.value = false;
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "VPLocalNavOutlineDropdown",
        style: normalizeStyle({ "--vp-vh": vh.value + "px" }),
        ref_key: "main",
        ref: main
      }, [
        _ctx.headers.length > 0 ? (openBlock(), createElementBlock("button", {
          key: 0,
          onClick: toggle,
          class: normalizeClass({ open: open.value })
        }, [
          createBaseVNode("span", _hoisted_1$J, toDisplayString(unref(resolveTitle)(unref(theme))), 1),
          _cache[0] || (_cache[0] = createBaseVNode("span", { class: "vpi-chevron-right icon" }, null, -1))
        ], 2)) : (openBlock(), createElementBlock("button", {
          key: 1,
          onClick: scrollToTop
        }, toDisplayString(unref(theme).returnToTopLabel || "Return to top"), 1)),
        createVNode(Transition, { name: "flyout" }, {
          default: withCtx(() => [
            open.value ? (openBlock(), createElementBlock("div", {
              key: 0,
              ref_key: "items",
              ref: items,
              class: "items",
              onClick: onItemClick
            }, [
              createBaseVNode("div", _hoisted_2$v, [
                createBaseVNode("a", {
                  class: "top-link",
                  href: "#",
                  onClick: scrollToTop
                }, toDisplayString(unref(theme).returnToTopLabel || "Return to top"), 1)
              ]),
              createBaseVNode("div", _hoisted_3$k, [
                createVNode(VPDocOutlineItem, { headers: _ctx.headers }, null, 8, ["headers"])
              ])
            ], 512)) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ], 4);
    };
  }
});
const VPLocalNavOutlineDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["__scopeId", "data-v-fef629c9"]]);
function useNav() {
  const isScreenOpen = ref(false);
  function openScreen() {
    isScreenOpen.value = true;
    window.addEventListener("resize", closeScreenOnTabletWindow);
  }
  function closeScreen() {
    isScreenOpen.value = false;
    window.removeEventListener("resize", closeScreenOnTabletWindow);
  }
  function toggleScreen() {
    isScreenOpen.value ? closeScreen() : openScreen();
  }
  function closeScreenOnTabletWindow() {
    window.outerWidth >= 768 && closeScreen();
  }
  const route = useRoute();
  watch(() => route.path, closeScreen);
  return {
    isScreenOpen,
    openScreen,
    closeScreen,
    toggleScreen
  };
}
ref();
const _hoisted_1$I = { class: "VPMenuLink" };
const _hoisted_2$u = ["innerHTML"];
const _sfc_main$Q = /* @__PURE__ */ defineComponent({
  __name: "VPMenuLink",
  props: {
    item: {}
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$I, [
        createVNode(_sfc_main$12, {
          class: normalizeClass({
            active: unref(isActive)(
              unref(page).relativePath,
              _ctx.item.activeMatch || _ctx.item.link,
              !!_ctx.item.activeMatch
            )
          }),
          href: _ctx.item.link,
          target: _ctx.item.target,
          rel: _ctx.item.rel,
          "no-icon": _ctx.item.noIcon
        }, {
          default: withCtx(() => [
            createBaseVNode("span", {
              innerHTML: _ctx.item.text
            }, null, 8, _hoisted_2$u)
          ]),
          _: 1
        }, 8, ["class", "href", "target", "rel", "no-icon"])
      ]);
    };
  }
});
const VPMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["__scopeId", "data-v-4bb6bb01"]]);
const _hoisted_1$H = { class: "VPMenuGroup" };
const _hoisted_2$t = {
  key: 0,
  class: "title"
};
const _sfc_main$P = /* @__PURE__ */ defineComponent({
  __name: "VPMenuGroup",
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$H, [
        _ctx.text ? (openBlock(), createElementBlock("p", _hoisted_2$t, toDisplayString(_ctx.text), 1)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, (item) => {
          return openBlock(), createElementBlock(Fragment, null, [
            "link" in item ? (openBlock(), createBlock(VPMenuLink, {
              key: 0,
              item
            }, null, 8, ["item"])) : createCommentVNode("", true)
          ], 64);
        }), 256))
      ]);
    };
  }
});
const VPMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["__scopeId", "data-v-1e2c3842"]]);
const _hoisted_1$G = { class: "VPMenu" };
const _hoisted_2$s = {
  key: 0,
  class: "items"
};
const _sfc_main$O = /* @__PURE__ */ defineComponent({
  __name: "VPMenu",
  props: {
    items: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$G, [
        _ctx.items ? (openBlock(), createElementBlock("div", _hoisted_2$s, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, (item) => {
            return openBlock(), createElementBlock(Fragment, {
              key: JSON.stringify(item)
            }, [
              "link" in item ? (openBlock(), createBlock(VPMenuLink, {
                key: 0,
                item
              }, null, 8, ["item"])) : "component" in item ? (openBlock(), createBlock(resolveDynamicComponent(item.component), mergeProps({
                key: 1,
                ref_for: true
              }, item.props), null, 16)) : (openBlock(), createBlock(VPMenuGroup, {
                key: 2,
                text: item.text,
                items: item.items
              }, null, 8, ["text", "items"]))
            ], 64);
          }), 128))
        ])) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ]);
    };
  }
});
const VPMenu = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["__scopeId", "data-v-4adf2d83"]]);
const _hoisted_1$F = ["href", "aria-label", "innerHTML"];
const _sfc_main$N = /* @__PURE__ */ defineComponent({
  __name: "VPSocialLink",
  props: {
    icon: {},
    link: {},
    ariaLabel: {}
  },
  setup(__props) {
    const props = __props;
    const el = ref();
    onMounted(async () => {
      var _a;
      await nextTick();
      const span = (_a = el.value) == null ? void 0 : _a.children[0];
      if (span instanceof HTMLElement && span.className.startsWith("vpi-social-") && (getComputedStyle(span).maskImage || getComputedStyle(span).webkitMaskImage) === "none") {
        span.style.setProperty(
          "--icon",
          `url('https://api.iconify.design/simple-icons/${props.icon}.svg')`
        );
      }
    });
    const svg = computed(() => {
      if (typeof props.icon === "object") return props.icon.svg;
      return `<span class="vpi-social-${props.icon}"></span>`;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        ref_key: "el",
        ref: el,
        class: "VPSocialLink no-icon",
        href: _ctx.link,
        "aria-label": _ctx.ariaLabel ?? (typeof _ctx.icon === "string" ? _ctx.icon : ""),
        target: "_blank",
        rel: "noopener",
        innerHTML: svg.value
      }, null, 8, _hoisted_1$F);
    };
  }
});
const VPSocialLink = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["__scopeId", "data-v-f5ec2427"]]);
const _hoisted_1$E = { class: "VPSocialLinks" };
const _sfc_main$M = /* @__PURE__ */ defineComponent({
  __name: "VPSocialLinks",
  props: {
    links: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$E, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.links, ({ link, icon, ariaLabel }) => {
          return openBlock(), createBlock(VPSocialLink, {
            key: link,
            icon,
            link,
            ariaLabel
          }, null, 8, ["icon", "link", "ariaLabel"]);
        }), 128))
      ]);
    };
  }
});
const VPSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["__scopeId", "data-v-7ddb9549"]]);
const _hoisted_1$D = ["aria-expanded"];
const _sfc_main$L = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarHamburger",
  props: {
    active: { type: Boolean }
  },
  emits: ["click"],
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: "button",
        class: normalizeClass(["VPNavBarHamburger", { active: _ctx.active }]),
        "aria-label": "mobile navigation",
        "aria-expanded": _ctx.active,
        "aria-controls": "VPNavScreen",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click"))
      }, _cache[1] || (_cache[1] = [
        createBaseVNode("span", { class: "container" }, [
          createBaseVNode("span", { class: "top" }),
          createBaseVNode("span", { class: "middle" }),
          createBaseVNode("span", { class: "bottom" })
        ], -1)
      ]), 10, _hoisted_1$D);
    };
  }
});
const VPNavBarHamburger = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["__scopeId", "data-v-1267a862"]]);
function createSearchTranslate(defaultTranslations) {
  const { localeIndex, theme } = useData();
  function translate(key) {
    var _a, _b, _c;
    const keyPath = key.split(".");
    const themeObject = (_a = theme.value.search) == null ? void 0 : _a.options;
    const isObject2 = themeObject && typeof themeObject === "object";
    const locales2 = isObject2 && ((_c = (_b = themeObject.locales) == null ? void 0 : _b[localeIndex.value]) == null ? void 0 : _c.translations) || null;
    const translations = isObject2 && themeObject.translations || null;
    let localeResult = locales2;
    let translationResult = translations;
    let defaultResult = defaultTranslations;
    const lastKey = keyPath.pop();
    for (const k of keyPath) {
      let fallbackResult = null;
      const foundInFallback = defaultResult == null ? void 0 : defaultResult[k];
      if (foundInFallback) {
        fallbackResult = defaultResult = foundInFallback;
      }
      const foundInTranslation = translationResult == null ? void 0 : translationResult[k];
      if (foundInTranslation) {
        fallbackResult = translationResult = foundInTranslation;
      }
      const foundInLocale = localeResult == null ? void 0 : localeResult[k];
      if (foundInLocale) {
        fallbackResult = localeResult = foundInLocale;
      }
      if (!foundInFallback) {
        defaultResult = fallbackResult;
      }
      if (!foundInTranslation) {
        translationResult = fallbackResult;
      }
      if (!foundInLocale) {
        localeResult = fallbackResult;
      }
    }
    return (localeResult == null ? void 0 : localeResult[lastKey]) ?? (translationResult == null ? void 0 : translationResult[lastKey]) ?? (defaultResult == null ? void 0 : defaultResult[lastKey]) ?? "";
  }
  return translate;
}
const _hoisted_1$C = ["innerHTML"];
const _sfc_main$K = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroupLink",
  props: {
    item: {}
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$12, {
        class: "VPNavScreenMenuGroupLink",
        href: _ctx.item.link,
        target: _ctx.item.target,
        rel: _ctx.item.rel,
        "no-icon": _ctx.item.noIcon,
        onClick: unref(closeScreen)
      }, {
        default: withCtx(() => [
          createBaseVNode("span", {
            innerHTML: _ctx.item.text
          }, null, 8, _hoisted_1$C)
        ]),
        _: 1
      }, 8, ["href", "target", "rel", "no-icon", "onClick"]);
    };
  }
});
const VPNavScreenMenuGroupLink = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["__scopeId", "data-v-9c855bfe"]]);
const _hoisted_1$B = { class: "VPNavScreenMenuGroupSection" };
const _hoisted_2$r = {
  key: 0,
  class: "title"
};
const _sfc_main$J = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroupSection",
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$B, [
        _ctx.text ? (openBlock(), createElementBlock("p", _hoisted_2$r, toDisplayString(_ctx.text), 1)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, (item) => {
          return openBlock(), createBlock(VPNavScreenMenuGroupLink, {
            key: item.text,
            item
          }, null, 8, ["item"]);
        }), 128))
      ]);
    };
  }
});
const VPNavScreenMenuGroupSection = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["__scopeId", "data-v-eec248eb"]]);
const _hoisted_1$A = ["aria-controls", "aria-expanded"];
const _hoisted_2$q = ["innerHTML"];
const _hoisted_3$j = ["id"];
const _hoisted_4$c = {
  key: 0,
  class: "item"
};
const _hoisted_5$8 = {
  key: 1,
  class: "item"
};
const _hoisted_6$6 = {
  key: 2,
  class: "group"
};
const _sfc_main$I = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroup",
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    const props = __props;
    const isOpen = ref(false);
    const groupId = computed(
      () => `NavScreenGroup-${props.text.replace(" ", "-").toLowerCase()}`
    );
    function toggle() {
      isOpen.value = !isOpen.value;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["VPNavScreenMenuGroup", { open: isOpen.value }])
      }, [
        createBaseVNode("button", {
          class: "button",
          "aria-controls": groupId.value,
          "aria-expanded": isOpen.value,
          onClick: toggle
        }, [
          createBaseVNode("span", {
            class: "button-text",
            innerHTML: _ctx.text
          }, null, 8, _hoisted_2$q),
          _cache[0] || (_cache[0] = createBaseVNode("span", { class: "vpi-plus button-icon" }, null, -1))
        ], 8, _hoisted_1$A),
        createBaseVNode("div", {
          id: groupId.value,
          class: "items"
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, (item) => {
            return openBlock(), createElementBlock(Fragment, {
              key: JSON.stringify(item)
            }, [
              "link" in item ? (openBlock(), createElementBlock("div", _hoisted_4$c, [
                createVNode(VPNavScreenMenuGroupLink, { item }, null, 8, ["item"])
              ])) : "component" in item ? (openBlock(), createElementBlock("div", _hoisted_5$8, [
                (openBlock(), createBlock(resolveDynamicComponent(item.component), mergeProps({ ref_for: true }, item.props, { "screen-menu": "" }), null, 16))
              ])) : (openBlock(), createElementBlock("div", _hoisted_6$6, [
                createVNode(VPNavScreenMenuGroupSection, {
                  text: item.text,
                  items: item.items
                }, null, 8, ["text", "items"])
              ]))
            ], 64);
          }), 128))
        ], 8, _hoisted_3$j)
      ], 2);
    };
  }
});
const VPNavScreenMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["__scopeId", "data-v-9a132f02"]]);
const _hoisted_1$z = { class: "list" };
const _sfc_main$H = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenTranslations",
  setup(__props) {
    const { localeLinks, currentLang } = useLangs({ correspondingLink: true });
    const isOpen = ref(false);
    function toggle() {
      isOpen.value = !isOpen.value;
    }
    return (_ctx, _cache) => {
      return unref(localeLinks).length && unref(currentLang).label ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["VPNavScreenTranslations", { open: isOpen.value }])
      }, [
        createBaseVNode("button", {
          class: "title",
          onClick: toggle
        }, [
          _cache[0] || (_cache[0] = createBaseVNode("span", { class: "vpi-languages icon lang" }, null, -1)),
          createTextVNode(" " + toDisplayString(unref(currentLang).label) + " ", 1),
          _cache[1] || (_cache[1] = createBaseVNode("span", { class: "vpi-chevron-down icon chevron" }, null, -1))
        ]),
        createBaseVNode("ul", _hoisted_1$z, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(localeLinks), (locale) => {
            return openBlock(), createElementBlock("li", {
              key: locale.link,
              class: "item"
            }, [
              createVNode(_sfc_main$12, {
                class: "link",
                href: locale.link
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(locale.text), 1)
                ]),
                _: 2
              }, 1032, ["href"])
            ]);
          }), 128))
        ])
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const VPNavScreenTranslations = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["__scopeId", "data-v-ae9538c3"]]);
const _hoisted_1$y = { class: "profile" };
const _hoisted_2$p = { class: "avatar" };
const _hoisted_3$i = ["src", "alt"];
const _hoisted_4$b = { class: "data" };
const _hoisted_5$7 = { class: "name" };
const _hoisted_6$5 = {
  key: 0,
  class: "affiliation"
};
const _hoisted_7$3 = {
  key: 0,
  class: "title"
};
const _hoisted_8$3 = {
  key: 1,
  class: "at"
};
const _hoisted_9$2 = ["innerHTML"];
const _hoisted_10$2 = {
  key: 2,
  class: "links"
};
const _hoisted_11$2 = {
  key: 0,
  class: "sp"
};
const _sfc_main$G = /* @__PURE__ */ defineComponent({
  __name: "VPTeamMembersItem",
  props: {
    size: { default: "medium" },
    member: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("article", {
        class: normalizeClass(["VPTeamMembersItem", [_ctx.size]])
      }, [
        createBaseVNode("div", _hoisted_1$y, [
          createBaseVNode("figure", _hoisted_2$p, [
            createBaseVNode("img", {
              class: "avatar-img",
              src: _ctx.member.avatar,
              alt: _ctx.member.name
            }, null, 8, _hoisted_3$i)
          ]),
          createBaseVNode("div", _hoisted_4$b, [
            createBaseVNode("h1", _hoisted_5$7, toDisplayString(_ctx.member.name), 1),
            _ctx.member.title || _ctx.member.org ? (openBlock(), createElementBlock("p", _hoisted_6$5, [
              _ctx.member.title ? (openBlock(), createElementBlock("span", _hoisted_7$3, toDisplayString(_ctx.member.title), 1)) : createCommentVNode("", true),
              _ctx.member.title && _ctx.member.org ? (openBlock(), createElementBlock("span", _hoisted_8$3, " @ ")) : createCommentVNode("", true),
              _ctx.member.org ? (openBlock(), createBlock(_sfc_main$12, {
                key: 2,
                class: normalizeClass(["org", { link: _ctx.member.orgLink }]),
                href: _ctx.member.orgLink,
                "no-icon": ""
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.member.org), 1)
                ]),
                _: 1
              }, 8, ["class", "href"])) : createCommentVNode("", true)
            ])) : createCommentVNode("", true),
            _ctx.member.desc ? (openBlock(), createElementBlock("p", {
              key: 1,
              class: "desc",
              innerHTML: _ctx.member.desc
            }, null, 8, _hoisted_9$2)) : createCommentVNode("", true),
            _ctx.member.links ? (openBlock(), createElementBlock("div", _hoisted_10$2, [
              createVNode(VPSocialLinks, {
                links: _ctx.member.links
              }, null, 8, ["links"])
            ])) : createCommentVNode("", true)
          ])
        ]),
        _ctx.member.sponsor ? (openBlock(), createElementBlock("div", _hoisted_11$2, [
          createVNode(_sfc_main$12, {
            class: "sp-link",
            href: _ctx.member.sponsor,
            "no-icon": ""
          }, {
            default: withCtx(() => [
              _cache[0] || (_cache[0] = createBaseVNode("span", { class: "vpi-heart sp-icon" }, null, -1)),
              createTextVNode(" " + toDisplayString(_ctx.member.actionText || "Sponsor"), 1)
            ]),
            _: 1
          }, 8, ["href"])
        ])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const VPTeamMembersItem = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["__scopeId", "data-v-7f7ec2cb"]]);
const _hoisted_1$x = { class: "container" };
const _sfc_main$F = /* @__PURE__ */ defineComponent({
  __name: "VPTeamMembers",
  props: {
    size: { default: "medium" },
    members: {}
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => [props.size, `count-${props.members.length}`]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["VPTeamMembers", classes.value])
      }, [
        createBaseVNode("div", _hoisted_1$x, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.members, (member) => {
            return openBlock(), createElementBlock("div", {
              key: member.name,
              class: "item"
            }, [
              createVNode(VPTeamMembersItem, {
                size: _ctx.size,
                member
              }, null, 8, ["size", "member"])
            ]);
          }), 128))
        ])
      ], 2);
    };
  }
});
const VPTeamMembers = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["__scopeId", "data-v-4a4b3c91"]]);
const _sfc_main$E = {};
const _hoisted_1$w = { class: "VPTeamPage" };
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$w, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
const VPTeamPage = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["render", _sfc_render$2], ["__scopeId", "data-v-6f9aa103"]]);
const _sfc_main$D = {};
function _sfc_render$1(_ctx, _cache) {
  const _component_Content = resolveComponent("Content");
  return openBlock(), createElementBlock("main", null, [
    createVNode(_component_Content)
  ]);
}
const LayoutEmpty = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["render", _sfc_render$1]]);
const _sfc_main$C = /* @__PURE__ */ defineComponent({
  __name: "VPContent",
  setup(__props) {
    const { page, frontmatter } = useData$1();
    const { hasSidebar } = useSidebar();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["VPContent", {
          "has-sidebar": unref(hasSidebar),
          "is-home": unref(frontmatter).layout === "home"
        }]),
        id: "VPContent"
      }, [
        unref(page).isNotFound ? renderSlot(_ctx.$slots, "not-found", { key: 0 }, () => [
          createVNode(NotFound)
        ], true) : unref(frontmatter).layout === "home" ? (openBlock(), createBlock(LayoutEmpty, { key: 1 })) : unref(frontmatter).layout && unref(frontmatter).layout !== "doc" ? (openBlock(), createBlock(resolveDynamicComponent(unref(frontmatter).layout), { key: 2 })) : (openBlock(), createBlock(VPDoc, { key: 3 }, {
          "doc-top": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-top", {}, void 0, true)
          ]),
          "doc-bottom": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-bottom", {}, void 0, true)
          ]),
          "doc-footer-before": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
          ]),
          "doc-before": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-before", {}, void 0, true)
          ]),
          "doc-after": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-after", {}, void 0, true)
          ]),
          "aside-top": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
          ]),
          "aside-outline-before": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
          ]),
          "aside-outline-after": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
          ]),
          "aside-ads-before": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
          ]),
          "aside-ads-after": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
          ]),
          "aside-bottom": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
          ]),
          _: 3
        }))
      ], 2);
    };
  }
});
const VPContent = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["__scopeId", "data-v-ea55e20d"]]);
const data = JSON.parse('{"all":[{"frontmatter":{"category":"Before you go","index":100,"title":"Best Time to Visit"},"lang":"en","timestamp":1740851186000,"url":"/en/guides/best-time-to-visit"},{"frontmatter":{"category":"Learn","title":"Safe"},"lang":"en","timestamp":1740851186000,"url":"/en/guides/safety"},{"frontmatter":{"category":"Transportation","title":"Train Guide"},"lang":"en","timestamp":1740851186000,"url":"/en/guides/train"},{"frontmatter":{"category":"Before you go","index":100,"title":"旅行する最適な時期"},"lang":"ja","timestamp":1740851186000,"url":"/ja/guides/best-time-to-visit"},{"frontmatter":{"category":"Learn","title":"安全"},"lang":"ja","timestamp":1740851186000,"url":"/ja/guides/safety"},{"frontmatter":{"category":"Transportation","title":"鉄道ガイド"},"lang":"ja","timestamp":1740851186000,"url":"/ja/guides/train"},{"frontmatter":{"category":"Before you go","index":9999,"title":"Travel Visa Guide"},"lang":"en","timestamp":1740321574000,"url":"/en/guides/china-tourist-visa"},{"frontmatter":{"category":"Before you go","index":100,"title":"Travel Payments"},"lang":"en","timestamp":1736865350000,"url":"/en/guides/scan-to-pay"},{"frontmatter":{"category":"Before you go","index":100,"title":"旅行支払いガイド"},"lang":"ja","timestamp":1736865350000,"url":"/ja/guides/scan-to-pay"},{"frontmatter":{"category":"Before you go","index":9999,"title":"ビザ免除旅行ガイド"},"lang":"ja","timestamp":1736514797000,"url":"/ja/guides/中国のビザ免除旅行ガイド"},{"frontmatter":{"category":"Learn","index":100,"title":"Chinese Cuisine"},"lang":"en","timestamp":1735710140000,"url":"/en/guides/chinese-cuisine"},{"frontmatter":{"category":"Learn","title":"Essential Apps"},"lang":"en","timestamp":1735710140000,"url":"/en/guides/essential-apps"},{"frontmatter":{"category":"Before you go","title":"Mobile Networks"},"lang":"en","timestamp":1735710140000,"url":"/en/guides/mobile-networks"},{"frontmatter":{"category":"Learn","index":100,"title":"中華料理"},"lang":"ja","timestamp":1735654445000,"url":"/ja/guides/chinese-cuisine"},{"frontmatter":{"category":"Learn","title":"必須のアプリ"},"lang":"ja","timestamp":1735654445000,"url":"/ja/guides/essential-apps"},{"frontmatter":{"category":"Before you go","title":"モバイルネットワーク"},"lang":"ja","timestamp":1735654445000,"url":"/ja/guides/mobile-networks"}]}');
const getDataByLang = (data2, localeIndex) => {
  const result = {};
  const lang = localeIndex === "root" ? langRoot : localeIndex;
  Object.keys(data2).forEach((category) => {
    if (Array.isArray(data2[category])) {
      result[category] = data2[category].filter((d) => d.lang === lang);
    } else if (typeof data2[category] === "object") {
      result[category] = {};
      Object.keys(data2[category]).forEach((key) => {
        result[category][key] = data2[category][key].filter((d) => d.lang === lang);
      });
    }
  });
  return result;
};
function useMobile() {
  const isMobile = ref(false);
  onMounted(() => {
    checkScreen();
    window.addEventListener("resize", checkScreen);
  });
  onUnmounted(() => {
    window.removeEventListener("resize", checkScreen);
  });
  function checkScreen() {
    isMobile.value = window.outerWidth < 768;
  }
  const route = useRoute();
  watch(() => route.path, checkScreen);
  return {
    isMobile
  };
}
const _hoisted_1$v = { class: "container" };
const _hoisted_2$o = { class: "sitemap-title" };
const _hoisted_3$h = { class: "sitemap-list" };
const _sfc_main$B = /* @__PURE__ */ defineComponent({
  __name: "FootSitemap",
  setup(__props) {
    const { localeIndex } = useData$1();
    const { isMobile } = useMobile();
    const { hasSidebar } = useSidebar();
    const { $t } = useLocale();
    const nav = computed(() => [
      {
        text: "Top destinations",
        items: [
          ...data$1.topPlaces[localeIndex.value].slice(0, 6),
          { text: $t("More Destinations"), link: "/places" }
        ]
      },
      {
        text: "Interests",
        items: [
          ...data$1.latestInterests[localeIndex.value].slice(-6).reverse(),
          { text: $t("More Articles"), link: "/articles" }
        ]
      },
      {
        text: "Guides",
        items: [
          ...getDataByLang(data, localeIndex.value).all.slice(0, 6).map((guide) => ({
            text: guide.frontmatter.title,
            link: removeLocaleFromUrl(guide.url)
          })),
          { text: $t("More Guides"), link: "/guides" }
        ]
      },
      {
        text: $t("Help"),
        items: [
          { text: $t("About Us"), link: "/about/about-us" },
          { text: $t("Contact Us"), link: "/about/contact-us" },
          { text: $t("Privacy Policy"), link: "/about/privacy-policy" },
          { text: $t("Terms and Conditions"), link: "/about/terms" },
          { component: "Consent" }
        ]
      }
    ]);
    return (_ctx, _cache) => {
      const _component_Link = resolveComponent("Link");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["sitemap", { "has-sidebar": unref(hasSidebar) }])
      }, [
        createBaseVNode("div", _hoisted_1$v, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(nav.value || [], (category) => {
            var _a;
            return openBlock(), createElementBlock("div", {
              class: normalizeClass(["sitemap-col", { "is-mobile": unref(isMobile) }]),
              key: category.text
            }, [
              unref(isMobile) ? (openBlock(), createBlock(VPNavScreenMenuGroup, {
                key: 0,
                text: unref($t)(category.text) || "",
                items: ((_a = category == null ? void 0 : category.items) == null ? void 0 : _a.map(
                  ({ text, link, component }) => component ? { component } : {
                    text,
                    link: unref(normalizeLink$3)(link, unref(localeIndex))
                  }
                )) || []
              }, null, 8, ["text", "items"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createBaseVNode("div", _hoisted_2$o, toDisplayString(unref($t)(category.text)), 1),
                createBaseVNode("ul", _hoisted_3$h, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList((category == null ? void 0 : category.items) || [], (item) => {
                    return openBlock(), createElementBlock("li", {
                      class: "sitemap-item",
                      key: item.text
                    }, [
                      item.component ? (openBlock(), createBlock(resolveDynamicComponent(item.component), { key: 0 })) : (openBlock(), createBlock(_component_Link, {
                        key: 1,
                        href: item.link
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref($t)(item.text)), 1)
                        ]),
                        _: 2
                      }, 1032, ["href"]))
                    ]);
                  }), 128))
                ])
              ], 64))
            ], 2);
          }), 128))
        ])
      ], 2);
    };
  }
});
const FootSitemap = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["__scopeId", "data-v-3410579b"]]);
const _hoisted_1$u = { class: "content" };
const _sfc_main$A = {
  __name: "TextCollapse",
  props: {
    text: {
      type: String,
      required: true
    },
    style: {}
  },
  setup(__props) {
    const props = __props;
    const isExpanded = ref(false);
    const fullText = props.text;
    return (_ctx, _cache) => {
      const _component_Translate = resolveComponent("Translate");
      const _component_ClientOnly = resolveComponent("ClientOnly");
      return openBlock(), createBlock(_component_ClientOnly, null, {
        default: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(["text-collapse", { collapsed: !isExpanded.value }]),
            style: normalizeStyle(__props.style)
          }, [
            createBaseVNode("span", _hoisted_1$u, toDisplayString(unref(fullText)), 1),
            createBaseVNode("span", {
              class: "btn",
              onClick: _cache[0] || (_cache[0] = ($event) => isExpanded.value = !isExpanded.value)
            }, [
              isExpanded.value ? (openBlock(), createBlock(_component_Translate, { key: 0 }, {
                default: withCtx(() => _cache[1] || (_cache[1] = [
                  createTextVNode("Read less")
                ])),
                _: 1
              })) : (openBlock(), createBlock(_component_Translate, { key: 1 }, {
                default: withCtx(() => _cache[2] || (_cache[2] = [
                  createTextVNode("Read more")
                ])),
                _: 1
              }))
            ])
          ], 6)
        ]),
        _: 1
      });
    };
  }
};
const TextCollapse = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["__scopeId", "data-v-ce0d6c2a"]]);
const _hoisted_1$t = { class: "container" };
const _hoisted_2$n = {
  key: 0,
  class: "message"
};
const _hoisted_3$g = ["innerHTML"];
const _sfc_main$z = /* @__PURE__ */ defineComponent({
  __name: "VPFooter",
  setup(__props) {
    const { theme } = useData$1();
    const { hasSidebar } = useSidebar();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(FootSitemap),
        createBaseVNode("footer", {
          class: normalizeClass(["VPFooter", { "has-sidebar": unref(hasSidebar) }])
        }, [
          createBaseVNode("div", _hoisted_1$t, [
            !unref(hasSidebar) && unref(theme).footer.message ? (openBlock(), createElementBlock("p", _hoisted_2$n, [
              createVNode(TextCollapse, {
                text: unref(theme).footer.message,
                style: { justifyContent: "center" }
              }, null, 8, ["text"])
            ])) : createCommentVNode("", true),
            unref(theme).footer.copyright ? (openBlock(), createElementBlock("p", {
              key: 1,
              class: "copyright",
              innerHTML: unref(theme).footer.copyright
            }, null, 8, _hoisted_3$g)) : createCommentVNode("", true)
          ])
        ], 2)
      ], 64);
    };
  }
});
const VPFooter = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["__scopeId", "data-v-508cc91a"]]);
const _hoisted_1$s = { class: "container" };
const _hoisted_2$m = ["aria-expanded"];
const _hoisted_3$f = { class: "menu-text" };
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  __name: "VPLocalNav",
  props: {
    open: { type: Boolean }
  },
  emits: ["open-menu"],
  setup(__props) {
    const { theme, frontmatter } = useData$1();
    const { hasSidebar } = useSidebar();
    const { headers } = useLocalNav();
    const { y } = useWindowScroll();
    const navHeight = ref(0);
    onMounted(() => {
      navHeight.value = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height")
      );
    });
    onContentUpdated(() => {
      headers.value = getHeaders$1(frontmatter.value.outline ?? theme.value.outline);
    });
    const empty = computed(() => {
      return headers.value.length === 0;
    });
    const emptyAndNoSidebar = computed(() => {
      return empty.value && !hasSidebar.value;
    });
    const classes = computed(() => {
      return {
        VPLocalNav: true,
        "has-sidebar": hasSidebar.value,
        empty: empty.value,
        fixed: emptyAndNoSidebar.value
      };
    });
    return (_ctx, _cache) => {
      return unref(frontmatter).layout !== "home" && (!emptyAndNoSidebar.value || unref(y) >= navHeight.value) ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(classes.value)
      }, [
        createBaseVNode("div", _hoisted_1$s, [
          unref(hasSidebar) ? (openBlock(), createElementBlock("button", {
            key: 0,
            class: "menu",
            "aria-expanded": _ctx.open,
            "aria-controls": "VPSidebarNav",
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("open-menu"))
          }, [
            _cache[1] || (_cache[1] = createBaseVNode("span", { class: "vpi-align-left menu-icon" }, null, -1)),
            createBaseVNode("span", _hoisted_3$f, toDisplayString(unref(theme).sidebarMenuLabel || "Menu"), 1)
          ], 8, _hoisted_2$m)) : createCommentVNode("", true),
          createVNode(VPLocalNavOutlineDropdown, {
            headers: unref(headers),
            navHeight: navHeight.value
          }, null, 8, ["headers", "navHeight"])
        ])
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const VPLocalNav = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["__scopeId", "data-v-f9a740ee"]]);
function throttleAndDebounce(fn, delay) {
  let timeoutId;
  let called = false;
  return () => {
    if (timeoutId) clearTimeout(timeoutId);
    if (!called) {
      fn();
      (called = true) && setTimeout(() => called = false, delay);
    } else timeoutId = setTimeout(fn, delay);
  };
}
function ensureStartingSlash(path) {
  return /^\//.test(path) ? path : `/${path}`;
}
function normalizeLink(link, addPath, path, addExt) {
  return addPath ? link.replace(/\/$/, "") + ensureStartingSlash(
    path.replace(/(^|\/)index\.md$/, "$1").replace(/\.md$/, addExt ? ".html" : "")
  ) : link;
}
const resolvedHeaders = [];
function getHeaders(range) {
  const headers = [...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter((el) => el.id && el.hasChildNodes()).map((el) => {
    const level = Number(el.tagName[1]);
    return {
      element: el,
      title: serializeHeader(el),
      link: "#" + el.id,
      level
    };
  });
  return resolveHeaders(headers, range);
}
function serializeHeader(h) {
  let ret = "";
  for (const node of h.childNodes) {
    if (node.nodeType === 1) {
      if (node.classList.contains("VPBadge") || node.classList.contains("header-anchor") || node.classList.contains("ignore-header")) {
        continue;
      }
      ret += node.textContent;
    } else if (node.nodeType === 3) {
      ret += node.textContent;
    }
  }
  return ret.trim();
}
function resolveHeaders(headers, range) {
  if (range === false) {
    return [];
  }
  const levelsRange = (typeof range === "object" && !Array.isArray(range) ? range.level : range) || 2;
  const [high, low] = typeof levelsRange === "number" ? [levelsRange, levelsRange] : levelsRange === "deep" ? [2, 6] : levelsRange;
  return buildTree(headers, high, low);
}
function useActiveAnchor(container) {
  const { isAsideEnabled } = useAside();
  const onScroll = throttleAndDebounce(setActiveLink, 100);
  onMounted(() => {
    requestAnimationFrame(setActiveLink);
    window.addEventListener("scroll", onScroll);
  });
  onUpdated(() => {
    activateLink(location.hash);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
  });
  function setActiveLink() {
    if (!isAsideEnabled.value) {
      return;
    }
    const scrollY = window.scrollY;
    const innerHeight = window.innerHeight;
    const offsetHeight = document.body.offsetHeight;
    const isBottom = Math.abs(scrollY + innerHeight - offsetHeight) < 1;
    const headers = resolvedHeaders.map(({ element, link }) => ({
      link,
      top: getAbsoluteTop(element)
    })).filter(({ top }) => !Number.isNaN(top)).sort((a, b) => a.top - b.top);
    if (!headers.length) {
      activateLink(null);
      return;
    }
    if (scrollY < 1) {
      activateLink(null);
      return;
    }
    if (isBottom) {
      activateLink(headers[headers.length - 1].link);
      return;
    }
    let activeLink = null;
    for (const { link, top } of headers) {
      if (top > scrollY + getScrollOffset() + 4) {
        break;
      }
      activeLink = link;
    }
    activateLink(activeLink);
  }
  function activateLink(hash) {
    var _a, _b, _c;
    (_b = (_a = container == null ? void 0 : container.value) == null ? void 0 : _a.querySelector(`a.active`)) == null ? void 0 : _b.classList.remove("active");
    if (hash) {
      (_c = container.value.querySelector(`a[href="${decodeURIComponent(hash)}"]`)) == null ? void 0 : _c.classList.add("active");
    }
  }
}
function getAbsoluteTop(element) {
  let offsetTop = 0;
  while (element !== document.body) {
    if (element === null) {
      return NaN;
    }
    offsetTop += element.offsetTop;
    element = element.offsetParent;
  }
  return offsetTop;
}
function buildTree(data2, min, max) {
  resolvedHeaders.length = 0;
  const result = [];
  const stack = [];
  data2.forEach((item) => {
    const node = { ...item, children: [] };
    let parent = stack[stack.length - 1];
    while (parent && parent.level >= node.level) {
      stack.pop();
      parent = stack[stack.length - 1];
    }
    if (node.element.classList.contains("ignore-header") || parent && "shouldIgnore" in parent) {
      stack.push({ level: node.level, shouldIgnore: true });
      return;
    }
    if (node.level > max || node.level < min) return;
    resolvedHeaders.push({ element: node.element, link: node.link });
    if (parent) parent.children.push(node);
    else result.push(node);
    stack.push(node);
  });
  return result;
}
const _sfc_main$x = /* @__PURE__ */ defineComponent({
  __name: "BackToTop",
  props: {
    full: {
      type: Boolean
    },
    center: {
      type: Boolean
    }
  },
  setup(__props) {
    const backToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    return (_ctx, _cache) => {
      const _component_Translate = resolveComponent("Translate");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["backTop", { center: __props.center, full: __props.full }]),
        onClick: backToTop
      }, [
        _cache[1] || (_cache[1] = createBaseVNode("span", { class: "icon" }, [
          createBaseVNode("svg", {
            viewBox: "0 0 1025 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            width: "15",
            height: "15"
          }, [
            createBaseVNode("path", {
              d: "M131.339914 423.017198c-9.52111 9.670597-9.400291 25.229558 0.270306 34.750668 9.670597 9.522134 25.229558 9.401315 34.750668-0.269282l320.722863-325.740925 0 798.397108c0 13.5716 11.001648 24.573248 24.573248 24.573248 13.5716 0 24.573248-11.001648 24.573248-24.573248L536.230246 135.522485l315.80719 320.551874c9.523157 9.667525 25.084167 9.783224 34.750668 0.259043 9.667525-9.524181 9.784248-25.083143 0.259043-34.750668L552.305246 81.813557c-11.058985-11.331339-25.865391-17.688643-41.702849-17.905707-0.277473-0.004096-0.554946-0.005119-0.832419-0.005119-15.559985 0-30.237381 5.957989-41.412066 16.831651-0.124914 0.121842-0.249828 0.245732-0.372694 0.370646L131.339914 423.017198z",
              fill: "#353535"
            })
          ])
        ], -1)),
        createBaseVNode("span", null, [
          createVNode(_component_Translate, null, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("Back to top")
            ])),
            _: 1
          })
        ])
      ], 2);
    };
  }
});
const BackToTop = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["__scopeId", "data-v-41033327"]]);
const _hoisted_1$r = {
  key: 0,
  class: "VPSubNavScreen"
};
const _hoisted_2$l = { class: "anchor" };
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  __name: "VPNavSubScreen",
  props: {
    open: { type: Boolean }
  },
  emits: ["close"],
  setup(__props) {
    const headers = shallowRef([]);
    const { frontmatter, theme } = useData$1();
    onMounted(() => {
      headers.value = getHeaders(frontmatter.value.outline ?? theme.value.outline);
    });
    onContentUpdated(() => {
      headers.value = getHeaders(frontmatter.value.outline ?? theme.value.outline);
    });
    const isLocked = useScrollLock(inBrowser ? document.body : null);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: "fade",
        onEnter: _cache[1] || (_cache[1] = ($event) => isLocked.value = true),
        onAfterLeave: _cache[2] || (_cache[2] = ($event) => isLocked.value = false)
      }, {
        default: withCtx(() => [
          _ctx.open ? (openBlock(), createElementBlock("div", _hoisted_1$r, [
            createBaseVNode("div", {
              class: "container",
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(headers.value, (header) => {
                return openBlock(), createBlock(_sfc_main$12, {
                  key: header.title,
                  class: "subMenuLink",
                  href: header.link,
                  tabindex: "0"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(header.title), 1)
                  ]),
                  _: 2
                }, 1032, ["href"]);
              }), 128)),
              createBaseVNode("div", _hoisted_2$l, [
                createVNode(BackToTop, {
                  center: "",
                  full: ""
                })
              ])
            ])
          ])) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
const VPNavSubScreen = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__scopeId", "data-v-f3df7450"]]);
const eventBus = {
  events: {},
  $on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  },
  $off(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter((cb) => cb !== callback);
    }
  },
  $emit(eventName, ...args) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((callback) => callback(...args));
    }
  }
};
const _hoisted_1$q = ["aria-expanded"];
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "SubNavHamburger",
  props: {
    active: { type: Boolean }
  },
  emits: ["click"],
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: "button",
        class: normalizeClass(["VPNavBarHamburger", { active: _ctx.active }]),
        "aria-label": "mobile navigation",
        "aria-expanded": _ctx.active,
        "aria-controls": "VPNavScreen",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click"))
      }, _cache[1] || (_cache[1] = [
        createBaseVNode("span", { class: "vpi-chevron-down text-icon larger" }, null, -1)
      ]), 10, _hoisted_1$q);
    };
  }
});
const SubNavHamburger = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__scopeId", "data-v-e00eddac"]]);
const _hoisted_1$p = {
  key: 0,
  class: "text"
};
const _hoisted_2$k = ["innerHTML"];
const _hoisted_3$e = {
  key: 1,
  class: "vpi-more-horizontal icon"
};
const _hoisted_4$a = { class: "menu" };
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "Flyout",
  props: {
    text: {},
    screenMenu: { type: Boolean }
  },
  setup(__props) {
    const open = ref(false);
    const componentRef = ref();
    const route = useRoute();
    const handleClick = (event) => {
      open.value = componentRef.value.contains(event.target);
    };
    watch(
      () => route.path,
      () => {
        open.value = false;
      }
    );
    onMounted(() => {
      document.addEventListener("click", handleClick);
    });
    onUnmounted(() => {
      document.removeEventListener("click", handleClick);
    });
    return (_ctx, _cache) => {
      return !_ctx.screenMenu ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref_key: "componentRef",
        ref: componentRef,
        class: normalizeClass(["VPFlyout", { active: open.value }]),
        onClick: _cache[1] || (_cache[1] = ($event) => open.value = true)
      }, [
        createBaseVNode("button", {
          type: "button",
          class: "button",
          onClick: _cache[0] || (_cache[0] = ($event) => open.value = !open.value)
        }, [
          _ctx.text ? (openBlock(), createElementBlock("span", _hoisted_1$p, [
            _ctx.text ? (openBlock(), createElementBlock("span", {
              key: 0,
              innerHTML: _ctx.text
            }, null, 8, _hoisted_2$k)) : createCommentVNode("", true),
            _cache[2] || (_cache[2] = createBaseVNode("span", { class: "vpi-chevron-down text-icon" }, null, -1))
          ])) : (openBlock(), createElementBlock("span", _hoisted_3$e))
        ]),
        createBaseVNode("div", _hoisted_4$a, [
          createVNode(VPMenu, null, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ]),
            _: 3
          })
        ])
      ], 2)) : (openBlock(), createBlock(VPNavScreenMenuGroup, {
        key: 1,
        text: _ctx.text,
        items: [],
        class: "VPNavVersion"
      }, null, 8, ["text"]));
    };
  }
});
const Flyout = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-47db777f"]]);
const _hoisted_1$o = {
  key: 0,
  class: "label"
};
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "SubNavBar",
  props: {
    label: {
      type: String
    }
  },
  setup(__props) {
    const container = ref();
    const headers = shallowRef([]);
    const { frontmatter, theme } = useData$1();
    onMounted(() => {
      headers.value = getHeaders(frontmatter.value.outline ?? theme.value.outline);
    });
    onBeforeUnmount(() => {
      eventBus.$emit("subnav-scroll", false);
    });
    onContentUpdated(() => {
      headers.value = getHeaders(frontmatter.value.outline ?? theme.value.outline);
    });
    useActiveAnchor(container);
    return (_ctx, _cache) => {
      const _component_Translate = resolveComponent("Translate");
      return openBlock(), createElementBlock("div", {
        class: "wrapper",
        "aria-labelledby": "doc-outline-aria-label",
        ref_key: "container",
        ref: container
      }, [
        __props.label ? (openBlock(), createElementBlock("span", _hoisted_1$o, [
          createVNode(_component_Translate, null, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(__props.label), 1)
            ]),
            _: 1
          })
        ])) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(headers.value, (header) => {
          return openBlock(), createBlock(_sfc_main$12, {
            key: header.title,
            class: "subMenuLink",
            href: header.link,
            tabindex: "0"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(header.title), 1)
            ]),
            _: 2
          }, 1032, ["href"]);
        }), 128))
      ], 512);
    };
  }
});
const SubNavBar = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__scopeId", "data-v-da55c1b6"]]);
const _hoisted_1$n = {
  key: 0,
  "aria-labelledby": "main-nav-aria-label",
  class: "VPNavBarMenu"
};
const _hoisted_2$j = {
  key: 1,
  "aria-labelledby": "sub-nav-aria-label",
  class: "VPNavBarMenu"
};
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenu",
  setup(__props) {
    const isSubNavTop = ref(false);
    const { params, theme } = useData$1();
    const { $t } = useLocale();
    const handleEvent = (isTop) => {
      isSubNavTop.value = isTop;
    };
    onMounted(() => {
      eventBus.$on("subnav-scroll", handleEvent);
    });
    onUnmounted(() => {
      eventBus.$off("subnav-scroll", handleEvent);
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: "fade",
        mode: "out-in"
      }, {
        default: withCtx(() => {
          var _a, _b;
          return [
            !isSubNavTop.value ? (openBlock(), createElementBlock("nav", _hoisted_1$n, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(theme).nav, (item) => {
                return openBlock(), createBlock(Flyout, {
                  key: JSON.stringify(item),
                  text: unref($t)(item.props.text),
                  screenMenu: item.props.screenMenu
                }, {
                  default: withCtx(() => [
                    "component" in item ? (openBlock(), createBlock(resolveDynamicComponent(item.component), mergeProps({
                      key: 0,
                      ref_for: true
                    }, item.props), null, 16)) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1032, ["text", "screenMenu"]);
              }), 128))
            ])) : (openBlock(), createElementBlock("nav", _hoisted_2$j, [
              createVNode(SubNavBar, {
                label: ((_a = unref(params)) == null ? void 0 : _a.nameLang) || ((_b = unref(params)) == null ? void 0 : _b.name)
              }, null, 8, ["label"])
            ]))
          ];
        }),
        _: 1
      });
    };
  }
});
const VPNavBarMenu = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-af2a69de"]]);
const _hoisted_1$m = ["aria-label"];
const _hoisted_2$i = { class: "DocSearch-Button-Container" };
const _hoisted_3$d = { class: "DocSearch-Button-Placeholder" };
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSearchButton",
  setup(__props) {
    const defaultTranslations = {
      button: {
        buttonText: "Search",
        buttonAriaLabel: "Search"
      }
    };
    const translate = createSearchTranslate(defaultTranslations);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: "button",
        class: "DocSearch DocSearch-Button",
        "aria-label": unref(translate)("button.buttonAriaLabel")
      }, [
        createBaseVNode("span", _hoisted_2$i, [
          _cache[0] || (_cache[0] = createBaseVNode("span", { class: "vp-icon DocSearch-Search-Icon" }, null, -1)),
          createBaseVNode("span", _hoisted_3$d, toDisplayString(unref(translate)("button.buttonText")), 1)
        ])
      ], 8, _hoisted_1$m);
    };
  }
});
const _hoisted_1$l = { class: "VPNavBarSearch" };
const _hoisted_2$h = { id: "local-search" };
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSearch",
  setup(__props) {
    const showSearch = ref(false);
    const VPLocalSearchBox = defineAsyncComponent(
      () => __vitePreload(() => import("./VPLocalSearchBox.DCUTaXdQ.js"), true ? __vite__mapDeps([0,1]) : void 0)
    );
    onMounted(() => {
      if (showSearch.value) {
        __vitePreload(() => Promise.resolve({}), true ? [] : void 0);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$l, [
        showSearch.value ? (openBlock(), createBlock(resolveDynamicComponent(unref(VPLocalSearchBox)), {
          key: 0,
          onClose: _cache[0] || (_cache[0] = ($event) => showSearch.value = false)
        }, null, 32)) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_2$h, [
          createVNode(_sfc_main$r, {
            onClick: _cache[1] || (_cache[1] = ($event) => showSearch.value = true)
          })
        ])
      ]);
    };
  }
});
const _hoisted_1$k = ["href", "rel", "target"];
const _hoisted_2$g = { key: 1 };
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarTitle",
  setup(__props) {
    const isSubNavTop = ref(false);
    const { params, theme } = useData$1();
    const { hasSidebar } = useSidebar();
    const { currentLang } = useLangs();
    const { isMobile } = useMobile();
    const link = computed(
      () => {
        var _a;
        return typeof theme.value.logoLink === "string" ? theme.value.logoLink : (_a = theme.value.logoLink) == null ? void 0 : _a.link;
      }
    );
    const rel = computed(
      () => {
        var _a;
        return typeof theme.value.logoLink === "string" ? void 0 : (_a = theme.value.logoLink) == null ? void 0 : _a.rel;
      }
    );
    const target = computed(
      () => {
        var _a;
        return typeof theme.value.logoLink === "string" ? void 0 : (_a = theme.value.logoLink) == null ? void 0 : _a.target;
      }
    );
    const handleEvent = (isTop) => {
      isSubNavTop.value = isTop;
    };
    onMounted(() => {
      eventBus.$on("subnav-scroll", handleEvent);
    });
    onUnmounted(() => {
      eventBus.$off("subnav-scroll", handleEvent);
    });
    return (_ctx, _cache) => {
      const _component_Translate = resolveComponent("Translate");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["VPNavBarTitle", { "has-sidebar": unref(hasSidebar) }])
      }, [
        createBaseVNode("a", {
          class: "title",
          href: link.value ?? unref(normalizeLink$2)(unref(currentLang).link),
          rel: rel.value,
          target: target.value
        }, [
          createVNode(VPImage, {
            class: "logo",
            image: "/favicon.webp",
            "aria-label": "OrientalRoad Icon Logo",
            width: 24,
            height: 24
          }),
          !unref(isMobile) || !isSubNavTop.value ? (openBlock(), createBlock(VPImage, {
            key: 0,
            class: "logo",
            image: "/logo.webp",
            "aria-label": "OrientalRoad Text Logo",
            width: 96,
            height: 24
          })) : (openBlock(), createElementBlock("span", _hoisted_2$g, [
            createVNode(_component_Translate, null, {
              default: withCtx(() => {
                var _a;
                return [
                  createTextVNode(toDisplayString((_a = unref(params)) == null ? void 0 : _a.name), 1)
                ];
              }),
              _: 1
            })
          ]))
        ], 8, _hoisted_1$k)
      ], 2);
    };
  }
});
const VPNavBarTitle = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-e332a73f"]]);
const _hoisted_1$j = { class: "wrapper" };
const _hoisted_2$f = { class: "container" };
const _hoisted_3$c = { class: "title" };
const _hoisted_4$9 = { class: "content" };
const _hoisted_5$6 = { class: "content-body" };
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "VPNavBar",
  props: {
    isScreenOpen: { type: Boolean },
    isSubNavOpen: { type: Boolean }
  },
  emits: ["toggle-screen", "toggle-subnav"],
  setup(__props) {
    const VPNavBarTranslations = defineClientComponent(() => {
      return __vitePreload(() => import("./VPNavBarTranslations.5B5nrKlU.js"), true ? __vite__mapDeps([2,1]) : void 0);
    });
    const props = __props;
    const isSubNavTop = ref(false);
    const { y } = useWindowScroll();
    const { hasSidebar } = useSidebar();
    const { frontmatter } = useData$1();
    const { isMobile } = useMobile();
    const classes = ref({
      top: true,
      home: frontmatter.value.layout === "home"
    });
    const handleEvent = (isTop) => {
      isSubNavTop.value = isTop;
    };
    onMounted(() => {
      eventBus.$on("subnav-scroll", handleEvent);
    });
    onUnmounted(() => {
      eventBus.$off("subnav-scroll", handleEvent);
    });
    watchPostEffect(() => {
      classes.value = {
        "has-sidebar": hasSidebar.value,
        home: frontmatter.value.layout === "home",
        top: y.value === 0,
        "screen-open": props.isScreenOpen
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["VPNavBar", classes.value])
      }, [
        createBaseVNode("div", _hoisted_1$j, [
          createBaseVNode("div", _hoisted_2$f, [
            createBaseVNode("div", _hoisted_3$c, [
              createVNode(VPNavBarTitle)
            ]),
            createBaseVNode("div", _hoisted_4$9, [
              createBaseVNode("div", _hoisted_5$6, [
                createVNode(VPNavBarMenu),
                isSubNavTop.value ? (openBlock(), createBlock(SubNavHamburger, {
                  key: 0,
                  active: _ctx.isSubNavOpen,
                  onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("toggle-subnav"))
                }, null, 8, ["active"])) : (openBlock(), createBlock(_sfc_main$q, {
                  key: 1,
                  class: "search"
                })),
                !isSubNavTop.value ? (openBlock(), createBlock(unref(VPNavBarTranslations), {
                  key: 2,
                  class: "translations"
                })) : !unref(isMobile) ? (openBlock(), createBlock(BackToTop, { key: 3 })) : createCommentVNode("", true),
                createVNode(VPNavBarHamburger, {
                  class: "hamburger",
                  active: _ctx.isScreenOpen,
                  onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("toggle-screen"))
                }, null, 8, ["active"])
              ])
            ])
          ])
        ]),
        _cache[2] || (_cache[2] = createBaseVNode("div", { class: "divider" }, [
          createBaseVNode("div", { class: "divider-line" })
        ], -1))
      ], 2);
    };
  }
});
const VPNavBar = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-e5fd4d75"]]);
const _hoisted_1$i = { class: "list" };
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenCurrency",
  setup(__props) {
    const isOpen = ref(false);
    const { currency, currencies: currencies2 } = useCurrency();
    const toggle = () => {
      isOpen.value = !isOpen.value;
    };
    const select = (k) => {
      currency.value = k;
      toggle();
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["VPNavScreenTranslations", { open: isOpen.value }])
      }, [
        createBaseVNode("button", {
          class: "title",
          onClick: toggle
        }, [
          createTextVNode(toDisplayString(unref(currency)) + " ", 1),
          _cache[0] || (_cache[0] = createBaseVNode("span", { class: "vpi-chevron-down icon chevron" }, null, -1))
        ]),
        createBaseVNode("ul", _hoisted_1$i, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(currencies2), (cur, key) => {
            return openBlock(), createElementBlock("li", {
              key,
              class: "item"
            }, [
              createVNode(_sfc_main$12, {
                class: "link",
                onClick: ($event) => select(key)
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(key) + " " + toDisplayString(cur.name), 1)
                ]),
                _: 2
              }, 1032, ["onClick"])
            ]);
          }), 128))
        ])
      ], 2);
    };
  }
});
const VPNavScreenCurrency = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-8be330a7"]]);
const _hoisted_1$h = { class: "container" };
const _hoisted_2$e = {
  key: 0,
  class: "VPNavScreenMenu"
};
const _hoisted_3$b = { class: "actionPanel" };
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreen",
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const { theme } = useData$1();
    const screen = ref(null);
    const isLocked = useScrollLock(inBrowser ? document.body : null);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: "fade",
        onEnter: _cache[0] || (_cache[0] = ($event) => isLocked.value = true),
        onAfterLeave: _cache[1] || (_cache[1] = ($event) => isLocked.value = false)
      }, {
        default: withCtx(() => [
          _ctx.open ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "VPNavScreen",
            ref_key: "screen",
            ref: screen,
            id: "VPNavScreen"
          }, [
            createBaseVNode("div", _hoisted_1$h, [
              unref(theme).nav ? (openBlock(), createElementBlock("nav", _hoisted_2$e, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(theme).nav, (item) => {
                  return openBlock(), createElementBlock(Fragment, {
                    key: JSON.stringify(item)
                  }, [
                    "component" in item ? (openBlock(), createBlock(resolveDynamicComponent(item.component), mergeProps({
                      key: 0,
                      open: _ctx.open,
                      ref_for: true
                    }, item.props), null, 16, ["open"])) : createCommentVNode("", true)
                  ], 64);
                }), 128))
              ])) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_3$b, [
              createVNode(VPNavScreenTranslations),
              createVNode(VPNavScreenCurrency)
            ])
          ], 512)) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
const VPNavScreen = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-52ca71f2"]]);
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "VPNav",
  setup(__props) {
    const { isScreenOpen, closeScreen, toggleScreen: nativeToggleScreen } = useNav();
    const { frontmatter } = useData$1();
    const { y } = useWindowScroll();
    const top = ref();
    const isSubNavOpen = ref(false);
    const toggleScreen = () => {
      isSubNavOpen.value = false;
      nativeToggleScreen();
    };
    const toggleSubNav = () => {
      isSubNavOpen.value = !isSubNavOpen.value;
      isScreenOpen.value = false;
    };
    const hasNavbar = computed(() => {
      return frontmatter.value.navbar !== false;
    });
    provide("close-screen", closeScreen);
    watchEffect(() => {
      if (inBrowser) {
        document.documentElement.classList.toggle("hide-nav", !hasNavbar.value);
      }
    });
    watchPostEffect(() => {
      if (top.value) return;
      top.value = y.value < 50;
    });
    return (_ctx, _cache) => {
      return hasNavbar.value ? (openBlock(), createElementBlock("header", {
        key: 0,
        class: normalizeClass(["VPNav", { top: top.value }])
      }, [
        createVNode(VPNavBar, {
          "is-screen-open": unref(isScreenOpen),
          "is-sub-nav-open": isSubNavOpen.value,
          onToggleScreen: toggleScreen,
          onToggleSubnav: toggleSubNav
        }, null, 8, ["is-screen-open", "is-sub-nav-open"]),
        createVNode(VPNavScreen, { open: unref(isScreenOpen) }, null, 8, ["open"]),
        createVNode(VPNavSubScreen, {
          open: isSubNavOpen.value,
          onClose: _cache[0] || (_cache[0] = ($event) => isSubNavOpen.value = false)
        }, null, 8, ["open"])
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const VPNav = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-e7b35480"]]);
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  setup(__props) {
    const { isOpen: isSidebarOpen, open: openSidebar, close: closeSidebar } = useSidebar();
    const route = useRoute();
    watch(() => route.path, closeSidebar);
    useCloseSidebarOnEscape(isSidebarOpen, closeSidebar);
    const { frontmatter } = useData$1();
    return (_ctx, _cache) => {
      const _component_Content = resolveComponent("Content");
      return unref(frontmatter).layout !== false ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["Layout", unref(frontmatter).pageClass])
      }, [
        createVNode(VPBackdrop, {
          class: "backdrop",
          show: unref(isSidebarOpen),
          onClick: unref(closeSidebar)
        }, null, 8, ["show", "onClick"]),
        createVNode(VPNav),
        unref(frontmatter).localNav !== false && unref(frontmatter).aside !== false ? (openBlock(), createBlock(VPLocalNav, {
          key: 0,
          open: unref(isSidebarOpen),
          onOpenMenu: unref(openSidebar)
        }, null, 8, ["open", "onOpenMenu"])) : createCommentVNode("", true),
        createVNode(VPSidebar, { open: unref(isSidebarOpen) }, {
          "sidebar-nav-before": withCtx(() => [
            renderSlot(_ctx.$slots, "sidebar-nav-before", {}, void 0, true)
          ]),
          "sidebar-nav-after": withCtx(() => [
            renderSlot(_ctx.$slots, "sidebar-nav-after", {}, void 0, true)
          ]),
          _: 3
        }, 8, ["open"]),
        createVNode(VPContent),
        createVNode(VPFooter)
      ], 2)) : (openBlock(), createBlock(_component_Content, { key: 1 }));
    };
  }
});
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-b25bd67d"]]);
const guides = [
  {
    name: "Before you go"
  },
  {
    name: "Transportation"
  },
  {
    name: "Itineraries"
  },
  {
    name: "Learn"
  }
];
const _hoisted_1$g = { class: "wrapper" };
const _hoisted_2$d = { class: "container" };
const _hoisted_3$a = { class: "group-label" };
const _hoisted_4$8 = { class: "group-list" };
const _hoisted_5$5 = { class: "bottom" };
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "Planning",
  props: {
    open: { type: Boolean },
    text: {}
  },
  setup(__props) {
    const expand = ref();
    const { localeIndex } = useData$1();
    const guidesData = computed(() => getDataByLang(data, localeIndex.value));
    return (_ctx, _cache) => {
      const _component_Translate = resolveComponent("Translate");
      return _ctx.open ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createVNode(LocalNavItem, {
          onClick: _cache[0] || (_cache[0] = ($event) => expand.value = _ctx.text)
        }, {
          default: withCtx(() => [
            createVNode(_component_Translate, null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.text), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(ScreenModal, {
          expand: expand.value,
          onClose: _cache[1] || (_cache[1] = ($event) => expand.value = void 0)
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(guidesData.value.all, (g) => {
              return openBlock(), createBlock(_sfc_main$19, {
                key: g.name,
                href: unref(removeLocaleFromUrl)(g.url)
              }, {
                default: withCtx(() => [
                  createVNode(LocalNavItem, null, {
                    default: withCtx(() => [
                      createVNode(_component_Translate, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(g.frontmatter.title), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1032, ["href"]);
            }), 128)),
            createVNode(_sfc_main$19, { href: "/guides" }, {
              default: withCtx(() => [
                createVNode(LocalNavItem, null, {
                  default: withCtx(() => [
                    createVNode(_component_Translate, null, {
                      default: withCtx(() => _cache[2] || (_cache[2] = [
                        createTextVNode("See all guides")
                      ])),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["expand"])
      ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        createBaseVNode("div", _hoisted_1$g, [
          createBaseVNode("div", _hoisted_2$d, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(guides), (i) => {
              return openBlock(), createElementBlock(Fragment, {
                key: i.name
              }, [
                createBaseVNode("div", _hoisted_3$a, [
                  createVNode(_component_Translate, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(i.name), 1)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                createBaseVNode("div", _hoisted_4$8, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(guidesData.value.all.filter((d) => {
                    var _a;
                    return ((_a = d.frontmatter) == null ? void 0 : _a.category) === i.name;
                  }).sort((a, b) => {
                    var _a, _b;
                    return (((_a = b.frontmatter) == null ? void 0 : _a.index) || 0) - (((_b = a.frontmatter) == null ? void 0 : _b.index) || 0);
                  }), (g) => {
                    return openBlock(), createElementBlock("div", {
                      key: g.name,
                      class: "group-item"
                    }, [
                      createVNode(_sfc_main$19, {
                        href: unref(removeLocaleFromUrl)(g.url)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Translate, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(g.frontmatter.title), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1032, ["href"])
                    ]);
                  }), 128))
                ])
              ], 64);
            }), 128))
          ])
        ]),
        createBaseVNode("div", _hoisted_5$5, [
          createVNode(_sfc_main$19, { href: "/guides" }, {
            default: withCtx(() => [
              createVNode(_component_Translate, null, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode("See all guides")
                ])),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ], 64));
    };
  }
});
const Planning = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-27008e49"]]);
const createLdJSON = (data2) => {
  return JSON.stringify(
    Array.isArray(data2) ? data2.map((json) => ({
      "@context": "https://schema.org/",
      ...json
    })) : [
      {
        "@context": "https://schema.org/",
        ...data2
      }
    ]
  );
};
function useJsonLD(contentRender) {
  const jsonLDScript = ref();
  const route = useRoute();
  const removeJsonLD = () => {
    if (jsonLDScript.value) {
      document.head.removeChild(jsonLDScript.value);
    }
  };
  const updateJsonLD = () => {
    removeJsonLD();
    const content = createLdJSON(contentRender());
    const script = document.createElement("script");
    script.setAttribute("type", "application/ld+json");
    script.textContent = content;
    document.head.appendChild(script);
    jsonLDScript.value = script;
  };
  watch(
    () => route.path,
    () => {
      updateJsonLD();
    },
    { immediate: false }
  );
  onMounted(() => {
    updateJsonLD();
  });
  onUnmounted(() => {
    removeJsonLD();
  });
}
const _hoisted_1$f = {
  key: 0,
  class: "reference"
};
const _hoisted_2$c = { class: "reference-title" };
const _hoisted_3$9 = { class: "reference-list-wrap" };
const _hoisted_4$7 = { class: "reference-list" };
const _hoisted_5$4 = ["href"];
const _hoisted_6$4 = { class: "site" };
const _sfc_main$i = {
  __name: "References",
  setup(__props) {
    const { frontmatter } = useData$1();
    return (_ctx, _cache) => {
      const _component_Translate = resolveComponent("Translate");
      return unref(frontmatter).reference ? (openBlock(), createElementBlock("dl", _hoisted_1$f, [
        createBaseVNode("dt", _hoisted_2$c, [
          createVNode(_component_Translate, null, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("References")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("dd", _hoisted_3$9, [
          createBaseVNode("ul", _hoisted_4$7, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(frontmatter).reference, (ref2) => {
              return openBlock(), createElementBlock("li", {
                key: ref2.title,
                class: "reference-item"
              }, [
                _cache[2] || (_cache[2] = createBaseVNode("span", { class: "index" }, "-", -1)),
                createBaseVNode("a", {
                  href: ref2.href,
                  rel: "noreferrer",
                  target: "_blank",
                  class: "text"
                }, [
                  createTextVNode(toDisplayString(ref2.title) + " ", 1),
                  _cache[1] || (_cache[1] = createBaseVNode("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-hidden": "true",
                    focusable: "false",
                    height: "24px",
                    viewBox: "0 0 24 24",
                    width: "24px",
                    class: "icon"
                  }, [
                    createBaseVNode("path", {
                      d: "M0 0h24v24H0V0z",
                      fill: "none"
                    }),
                    createBaseVNode("path", { d: "M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z" })
                  ], -1))
                ], 8, _hoisted_5$4),
                createBaseVNode("span", _hoisted_6$4, toDisplayString(ref2.site), 1)
              ]);
            }), 128))
          ])
        ])
      ])) : createCommentVNode("", true);
    };
  }
};
const References = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-ce98e6c0"]]);
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "FloatingSlot",
  setup(__props) {
    const container = ref(null);
    const floatingSlot = ref(null);
    const isSlotVisible = ref(true);
    const originalSize = ref({ width: 0, height: 0 });
    const dragState = ref({
      isDragging: false,
      startX: 0,
      startY: 0,
      initialBottom: 0,
      initialRight: 0
    });
    const floatingPosition = useLocalStorage("floatingSlotPosition", ["20px", "20px"]);
    const floatingStyle = computed(() => ({
      bottom: floatingPosition.value[1],
      right: floatingPosition.value[0]
    }));
    const checkVisibility = () => {
      if (container.value) {
        const rect = container.value.getBoundingClientRect();
        isSlotVisible.value = rect.top >= 0 && rect.bottom <= window.innerHeight;
      }
    };
    const measureOriginalSize = () => {
      if (container.value) {
        const slotElement = container.value.querySelector(":first-child");
        if (slotElement) {
          originalSize.value = {
            width: slotElement.offsetWidth,
            height: slotElement.offsetHeight
          };
        }
      }
    };
    const handleScroll = () => {
      checkVisibility();
    };
    const startDragging = (event) => {
      const e = event.touches ? event.touches[0] : event;
      dragState.value.isDragging = true;
      dragState.value.startX = e.clientX;
      dragState.value.startY = e.clientY;
      dragState.value.initialBottom = parseFloat(floatingPosition.value[1]);
      dragState.value.initialRight = parseFloat(floatingPosition.value[0]);
      document.addEventListener("mousemove", handleDragging);
      document.addEventListener("touchmove", handleDragging);
      document.addEventListener("mouseup", stopDragging);
      document.addEventListener("touchend", stopDragging);
    };
    const handleDragging = (event) => {
      if (!dragState.value.isDragging) return;
      const e = event.touches ? event.touches[0] : event;
      if (event.cancelable) event.preventDefault();
      const deltaX = e.clientX - dragState.value.startX;
      const deltaY = e.clientY - dragState.value.startY;
      floatingPosition.value = [
        `${dragState.value.initialRight - deltaX}px`,
        `${dragState.value.initialBottom - deltaY}px`
      ];
    };
    const stopDragging = () => {
      dragState.value.isDragging = false;
      document.removeEventListener("mousemove", handleDragging);
      document.removeEventListener("touchmove", handleDragging);
      document.removeEventListener("mouseup", stopDragging);
      document.removeEventListener("touchend", stopDragging);
    };
    onMounted(() => {
      measureOriginalSize();
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleScroll);
      checkVisibility();
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    });
    const placeholderStyle = computed(() => ({
      width: `${originalSize.value.width}px`,
      height: `${originalSize.value.height}px`
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "container",
        ref: container,
        class: "slot-container"
      }, [
        !isSlotVisible.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "placeholder",
          style: normalizeStyle(placeholderStyle.value)
        }, null, 4)) : createCommentVNode("", true),
        createBaseVNode("div", {
          ref_key: "floatingSlot",
          ref: floatingSlot,
          class: normalizeClass({ "floating-slot": !isSlotVisible.value }),
          style: normalizeStyle(floatingStyle.value),
          onMousedown: startDragging,
          onTouchstart: withModifiers(startDragging, ["stop"])
        }, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 38)
      ], 512);
    };
  }
});
const FloatingSlot = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-c1001a13"]]);
const _sfc_main$g = {
  name: "YouTubePlayer",
  props: {
    videoId: {
      type: String,
      required: true
    },
    height: {
      type: String,
      default: "360"
    },
    width: {
      type: String,
      default: "640"
    }
  },
  setup(props) {
    const playerRef = ref(null);
    const playerId = `youtube-player-${Math.random().toString(36).substr(2, 9)}`;
    let playerInstance = null;
    const loadYouTubeApi = () => {
      if (!window.onYouTubeIframeAPIReady) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        window.onYouTubeIframeAPIReady = initPlayer;
      } else {
        initPlayer();
      }
    };
    const initPlayer = () => {
      var _a;
      if ((_a = window.YT) == null ? void 0 : _a.Player) {
        playerInstance = new window.YT.Player(playerId, {
          height: props.height,
          width: props.width,
          videoId: props.videoId,
          events: {
            onReady: () => console.log(`Player ${playerId} is ready!`)
          }
        });
      }
    };
    const jumpToTime = (seconds) => {
      if (playerInstance) {
        playerInstance.seekTo(seconds, true);
      }
    };
    const playVideo = () => {
      if (playerInstance) {
        playerInstance.playVideo();
      }
    };
    const pauseVideo = () => {
      if (playerInstance) {
        playerInstance.pauseVideo();
      }
    };
    const handlePlayTo = (seconds) => {
      jumpToTime(seconds);
    };
    onMounted(() => {
      loadYouTubeApi();
    });
    onMounted(() => {
      eventBus.$on("youtube-play-to", handlePlayTo);
    });
    onUnmounted(() => {
      eventBus.$off("youtube-play-to", handlePlayTo);
    });
    return {
      playerRef,
      playerId,
      jumpToTime,
      playVideo,
      pauseVideo
    };
  }
};
const _hoisted_1$e = ["id"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    id: $setup.playerId,
    ref: "playerRef"
  }, null, 8, _hoisted_1$e);
}
const YoutubePlayer = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render], ["__scopeId", "data-v-9249eae5"]]);
const _hoisted_1$d = ["width", "height"];
const _hoisted_2$b = ["fill"];
const _sfc_main$f = {
  __name: "YouTube",
  props: ["size", "fill"],
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", {
        class: "youtube-icon",
        viewBox: "0 0 1024 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: props.size || 20,
        height: props.size || 20
      }, [
        createBaseVNode("path", {
          fill: props.fill,
          d: "M426.666667 682.666667V384l256 149.845333L426.666667 682.666667z m587.093333-355.541334s-10.026667-71.04-40.704-102.357333c-38.954667-41.088-82.602667-41.258667-102.613333-43.648C727.168 170.666667 512.213333 170.666667 512.213333 170.666667h-0.426666s-214.954667 0-358.229334 10.453333c-20.053333 2.389333-63.658667 2.56-102.656 43.648-30.677333 31.317333-40.661333 102.4-40.661333 102.4S0 410.538667 0 493.952v78.293333c0 83.456 10.24 166.912 10.24 166.912s9.984 71.04 40.661333 102.357334c38.997333 41.088 90.154667 39.765333 112.938667 44.074666C245.76 893.568 512 896 512 896s215.168-0.341333 358.442667-10.752c20.053333-2.432 63.658667-2.602667 102.613333-43.690667 30.72-31.317333 40.704-102.4 40.704-102.4s10.24-83.413333 10.24-166.869333v-78.250667c0-83.456-10.24-166.912-10.24-166.912z"
        }, null, 8, _hoisted_2$b)
      ], 8, _hoisted_1$d);
    };
  }
};
const _hoisted_1$c = { class: "vlog-container" };
const _hoisted_2$a = { class: "video" };
const _hoisted_3$8 = { class: "background" };
const _hoisted_4$6 = { class: "description" };
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "Vlog",
  props: {
    videoId: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_Translate = resolveComponent("Translate");
      return openBlock(), createElementBlock("div", _hoisted_1$c, [
        createVNode(FloatingSlot, null, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2$a, [
              createBaseVNode("div", _hoisted_3$8, [
                createBaseVNode("div", null, [
                  createVNode(_sfc_main$f, { size: "40" })
                ]),
                createBaseVNode("div", null, [
                  createVNode(_component_Translate, null, {
                    default: withCtx(() => _cache[0] || (_cache[0] = [
                      createTextVNode("Gathering YouTube awesomeness...")
                    ])),
                    _: 1
                  })
                ])
              ]),
              createVNode(YoutubePlayer, {
                videoId: __props.videoId,
                width: "100%",
                height: "100%"
              }, null, 8, ["videoId"])
            ])
          ]),
          _: 1
        }),
        createBaseVNode("div", _hoisted_4$6, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])
      ]);
    };
  }
});
const Vlog = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-2faef4dc"]]);
const _hoisted_1$b = { class: "container" };
const _hoisted_2$9 = {
  key: 0,
  class: "aside"
};
const _hoisted_3$7 = { class: "aside-container" };
const _hoisted_4$5 = { class: "aside-content" };
const _hoisted_5$3 = { class: "content" };
const _hoisted_6$3 = { class: "content-container" };
const _hoisted_7$2 = { class: "main" };
const _hoisted_8$2 = { class: "vp-doc" };
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const { theme, frontmatter, localeIndex, params, page } = useData$1();
    const route = useRoute();
    const { hasAside } = useSidebar();
    const { $t } = useLocale();
    const pageName = computed(() => route.path.replace(/[./]+/g, "_").replace(/_html$/, ""));
    useJsonLD(() => ({
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: $t("Articles"),
          item: localeIndex.value === "root" ? "https://www.orientalroad.com/articles" : `https://www.orientalroad.com/${localeIndex.value}/articles`
        },
        {
          "@type": "ListItem",
          position: 2,
          name: frontmatter.value.title,
          item: `https://www.orientalroad.com${location.pathname}`
        }
      ]
    }));
    useJsonLD(() => {
      var _a, _b, _c, _d;
      const baseInfo = {
        "@type": "Article",
        headline: frontmatter.value.title,
        dateModified: new Date((_a = page.value) == null ? void 0 : _a.lastUpdated).toISOString(),
        publisher: {
          "@type": "Organization",
          name: "Oriental Road",
          logo: {
            "@type": "ImageObject",
            url: "https://www.orientalroad.com/favicon.webp"
          }
        },
        description: frontmatter.value.description
      };
      if ((_b = frontmatter.value.article) == null ? void 0 : _b.introduce) {
        baseInfo.articleBody = (_c = frontmatter.value.article.introduce) == null ? void 0 : _c[localeIndex.value];
      }
      if (Array.isArray(frontmatter.value.article) && ((_d = frontmatter.value.article) == null ? void 0 : _d.length) > 0) {
        baseInfo.about = frontmatter.value.article.map((a) => {
          var _a2, _b2;
          return {
            "@type": "TouristAttraction",
            name: (_a2 = a.nameLocale) == null ? void 0 : _a2[localeIndex.value],
            description: (_b2 = a.description) == null ? void 0 : _b2[localeIndex.value],
            address: {
              "@type": "PostalAddress",
              addressLocality: $t(a.city),
              addressCountry: $t("China")
            }
          };
        });
      }
      return baseInfo;
    });
    return (_ctx, _cache) => {
      var _a, _b, _c, _d;
      const _component_Content = resolveComponent("Content");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["VPDoc", { "has-sidebar": ((_a = unref(frontmatter)) == null ? void 0 : _a.aside) !== false }])
      }, [
        createBaseVNode("div", _hoisted_1$b, [
          unref(hasAside) ? (openBlock(), createElementBlock("div", _hoisted_2$9, [
            _cache[0] || (_cache[0] = createBaseVNode("div", { class: "aside-curtain" }, null, -1)),
            createBaseVNode("div", _hoisted_3$7, [
              createBaseVNode("div", _hoisted_4$5, [
                createVNode(VPDocAside)
              ])
            ])
          ])) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_5$3, [
            createBaseVNode("div", _hoisted_6$3, [
              createBaseVNode("main", _hoisted_7$2, [
                createBaseVNode("div", _hoisted_8$2, [
                  createBaseVNode("h1", null, toDisplayString((_c = (_b = unref(frontmatter).article) == null ? void 0 : _b.title) == null ? void 0 : _c[unref(localeIndex)]), 1)
                ]),
                ((_d = unref(frontmatter).article) == null ? void 0 : _d.videoId) ? (openBlock(), createBlock(Vlog, {
                  key: 0,
                  videoId: unref(frontmatter).article.videoId
                }, {
                  default: withCtx(() => {
                    var _a2, _b2;
                    return [
                      createTextVNode(toDisplayString((_b2 = (_a2 = unref(frontmatter).article) == null ? void 0 : _a2.introduce) == null ? void 0 : _b2[unref(localeIndex)]), 1)
                    ];
                  }),
                  _: 1
                }, 8, ["videoId"])) : createCommentVNode("", true),
                createVNode(_component_Content, {
                  class: normalizeClass(["vp-doc", [pageName.value, unref(theme).externalLinkIcon && "external-link-icon-enabled"]])
                }, null, 8, ["class"]),
                createVNode(References)
              ]),
              createVNode(VPDocFooter)
            ])
          ])
        ])
      ], 2);
    };
  }
});
const LayoutArticle = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-38328e1d"]]);
const yangtzerivercablewayAvatar = "/assets/cableway.BJUoqWIM.webp";
const chengduPandaBaseAvatar = "/assets/chengdu-panda-base.D159yRTt.webp";
const chongqingZooAvatar = "/assets/chongqingzoo.xu4B2QGj.webp";
const dazuRockCarvingsAvatar = "/assets/dazurockcarvings.C_kP_hXk.webp";
const leshanGiantBuddhaAvatar = "/assets/leshan-giant-buddha.CCXrkhgD.webp";
const lijiangAncientAvatar = "/assets/lijiang-ancient.CaPHgDkP.webp";
const lizibaStationAvatar = "/assets/liziba.CFracstg.webp";
const tigerleapinggorgeAvatar = "/assets/tigerleapinggorge.4fqG6380.webp";
const yulongSnowMountainAvatar = "/assets/yulong-snow.B4xitWTu.webp";
const badalingAvatar310 = "/assets/badaling.310x310.center.030874a9.webp";
const jinshanlingAvatar310 = "/assets/jinshanling.310x310.center.c56371e3.webp";
const mutianyuAvatar310 = "/assets/mutianyu.310x310.center.0c9fe3e7.webp";
const simataiAvatar310 = "/assets/simatai.310x310.center.6e9af0a4.webp";
const badalingPhotoThumb1 = "/assets/1.100x100.center.f48550f6.webp";
const badalingPhoto1 = "/assets/1.900x506.center.f48550f6.webp";
const badalingPhotoThumb2 = "/assets/2.100x100.center.5778aa18.webp";
const badalingPhoto2 = "/assets/2.900x506.center.5778aa18.webp";
const badalingPhotoThumb3 = "/assets/3.100x100.center.0032df61.webp";
const badalingPhoto3 = "/assets/3.900x506.center.0032df61.webp";
const jinshanlingPhotoThumb1 = "/assets/1.100x100.center.bf43ca44.webp";
const jinshanlingPhoto1 = "/assets/1.900x506.center.bf43ca44.webp";
const jinshanlingPhotoThumb2 = "/assets/2.100x100.center.c1973bae.webp";
const jinshanlingPhoto2 = "/assets/2.900x506.center.c1973bae.webp";
const jinshanlingPhotoThumb3 = "/assets/3.100x100.center.a0f43e06.webp";
const jinshanlingPhoto3 = "/assets/3.900x506.center.a0f43e06.webp";
const jinshanlingPhotoThumb4 = "/assets/4.100x100.center.6bc928b6.webp";
const jinshanlingPhoto4 = "/assets/4.900x506.center.6bc928b6.webp";
const jinshanlingPhotoThumb5 = "/assets/5.100x100.center.947467e2.webp";
const jinshanlingPhoto5 = "/assets/5.900x506.center.947467e2.webp";
const jinshanlingPhotoThumb6 = "/assets/6.100x100.center.f213ee37.webp";
const jinshanlingPhoto6 = "/assets/6.900x506.center.f213ee37.webp";
const jinshanlingPhotoThumb7 = "/assets/7.100x100.center.eb96c23c.webp";
const jinshanlingPhoto7 = "/assets/7.900x506.center.eb96c23c.webp";
const jinshanlingPhotoThumb8 = "/assets/8.100x100.center.2ed03f12.webp";
const jinshanlingPhoto8 = "/assets/8.900x506.center.2ed03f12.webp";
const jinshanlingPhotoThumb9 = "/assets/9.100x100.center.bbb27f4a.webp";
const jinshanlingPhoto9 = "/assets/9.900x506.center.bbb27f4a.webp";
const mutianyuPhotoThumb1 = "/assets/1.100x100.center.57f20423.webp";
const mutianyuPhoto1 = "/assets/1.900x506.center.57f20423.webp";
const mutianyuPhotoThumb2 = "/assets/2.100x100.center.c9548af6.webp";
const mutianyuPhoto2 = "/assets/2.900x506.center.c9548af6.webp";
const mutianyuPhotoThumb3 = "/assets/3.100x100.center.531dc84e.webp";
const mutianyuPhoto3 = "/assets/3.900x506.center.531dc84e.webp";
const mutianyuPhotoThumb4 = "/assets/4.100x100.center.5cac6e7b.webp";
const mutianyuPhoto4 = "/assets/4.900x506.center.5cac6e7b.webp";
const simataiPhotoThumb1 = "/assets/1.100x100.center.a63f3f35.webp";
const simataiPhoto1 = "/assets/1.900x506.center.a63f3f35.webp";
const cablecarPhotoThumb1 = "/assets/1.100x100.center.6065540d.webp";
const cablecarPhoto1 = "/assets/1.900x506.center.6065540d.webp";
const cablecarPhotoThumb2 = "/assets/2.100x100.center.7d8545d3.webp";
const cablecarPhoto2 = "/assets/2.900x506.center.7d8545d3.webp";
const cablecarPhotoThumb3 = "/assets/3.100x100.center.1fe3f172.webp";
const cablecarPhoto3 = "/assets/3.900x506.center.1fe3f172.webp";
const cablecarPhotoThumb4 = "/assets/4.100x100.center.ee847385.webp";
const cablecarPhoto4 = "/assets/4.900x506.center.ee847385.webp";
const cablecarPhotoThumb5 = "/assets/5.100x100.center.b8fcd8d1.webp";
const cablecarPhoto5 = "/assets/5.900x506.center.b8fcd8d1.webp";
const dazurockPhotoThumb1 = "/assets/1.100x100.center.d23d67b8.webp";
const dazurockPhoto1 = "/assets/1.900x506.center.d23d67b8.webp";
const hongyadongPhotoThumb1 = "/assets/1.100x100.center.11c0bdb7.webp";
const hongyadongPhoto1 = "/assets/1.900x506.center.11c0bdb7.webp";
const hongyadongPhotoThumb10 = "/assets/10.100x100.center.52a7cd9f.webp";
const hongyadongPhoto10 = "/assets/10.900x506.center.52a7cd9f.webp";
const hongyadongPhotoThumb11 = "/assets/11.100x100.center.356aac7a.webp";
const hongyadongPhoto11 = "/assets/11.900x506.center.356aac7a.webp";
const hongyadongPhotoThumb12 = "/assets/12.100x100.center.7a6eb757.webp";
const hongyadongPhoto12 = "/assets/12.900x506.center.7a6eb757.webp";
const hongyadongPhotoThumb2 = "/assets/2.100x100.center.4ad63f2a.webp";
const hongyadongPhoto2 = "/assets/2.900x506.center.4ad63f2a.webp";
const hongyadongPhotoThumb3 = "/assets/3.100x100.center.748038c0.webp";
const hongyadongPhoto3 = "/assets/3.900x506.center.748038c0.webp";
const hongyadongPhotoThumb4 = "/assets/4.100x100.center.35b2f1c6.webp";
const hongyadongPhoto4 = "/assets/4.900x506.center.35b2f1c6.webp";
const hongyadongPhotoThumb5 = "/assets/5.100x100.center.181e4ce6.webp";
const hongyadongPhoto5 = "/assets/5.900x506.center.181e4ce6.webp";
const hongyadongPhotoThumb6 = "/assets/6.100x100.center.2cefb340.webp";
const hongyadongPhoto6 = "/assets/6.900x506.center.2cefb340.webp";
const hongyadongPhotoThumb7 = "/assets/7.100x100.center.894e2736.webp";
const hongyadongPhoto7 = "/assets/7.900x506.center.894e2736.webp";
const hongyadongPhotoThumb8 = "/assets/8.100x100.center.8445551c.webp";
const hongyadongPhoto8 = "/assets/8.900x506.center.8445551c.webp";
const hongyadongPhotoThumb9 = "/assets/9.100x100.center.36265879.webp";
const hongyadongPhoto9 = "/assets/9.900x506.center.36265879.webp";
const laifushiPhotoThumb1 = "/assets/1.100x100.center.4c5e49c9.webp";
const laifushiPhoto1 = "/assets/1.900x506.center.4c5e49c9.webp";
const laifushiPhotoThumb2 = "/assets/2.100x100.center.925f5762.webp";
const laifushiPhoto2 = "/assets/2.900x506.center.925f5762.webp";
const laifushiPhotoThumb3 = "/assets/3.100x100.center.9397299f.webp";
const laifushiPhoto3 = "/assets/3.900x506.center.9397299f.webp";
const lizibaPhotoThumb1 = "/assets/1.100x100.center.e0e172ab.webp";
const lizibaPhoto1 = "/assets/1.900x506.center.e0e172ab.webp";
const lizibaPhotoThumb2 = "/assets/2.100x100.center.c36ed008.webp";
const lizibaPhoto2 = "/assets/2.900x506.center.c36ed008.webp";
const lizibaPhotoThumb3 = "/assets/3.100x100.center.6fadd513.webp";
const lizibaPhoto3 = "/assets/3.900x506.center.6fadd513.webp";
const nanshanPhotoThumb1 = "/assets/1.100x100.center.983aa1de.webp";
const nanshanPhoto1 = "/assets/1.900x506.center.983aa1de.webp";
const chongqingtworiverPhotoThumb1 = "/assets/1.100x100.center.98e60393.webp";
const chongqingtworiverPhoto1 = "/assets/1.900x506.center.98e60393.webp";
const chongqingtworiverPhotoThumb2 = "/assets/2.100x100.center.cebbca27.webp";
const chongqingtworiverPhoto2 = "/assets/2.900x506.center.cebbca27.webp";
const chongqingzooPhotoThumb1 = "/assets/1.100x100.center.0d427a00.webp";
const chongqingzooPhoto1 = "/assets/1.900x506.center.0d427a00.webp";
const chongqingzooPhotoThumb2 = "/assets/2.100x100.center.9c764a89.webp";
const chongqingzooPhoto2 = "/assets/2.900x506.center.9c764a89.webp";
const chongqingzooPhotoThumb3 = "/assets/3.100x100.center.88df2a2f.webp";
const chongqingzooPhoto3 = "/assets/3.900x506.center.88df2a2f.webp";
const chongqingzooPhotoThumb4 = "/assets/4.100x100.center.58568c60.webp";
const chongqingzooPhoto4 = "/assets/4.900x506.center.58568c60.webp";
const chongqingzooPhotoThumb5 = "/assets/5.100x100.center.0b8fca60.webp";
const chongqingzooPhoto5 = "/assets/5.900x506.center.0b8fca60.webp";
const daliancienttownPhotoThumb1 = "/assets/1.100x100.center.a9dbfd45.webp";
const daliancienttownAvatar310 = "/assets/1.310x310.center.a9dbfd45.webp";
const daliancienttownPhoto1 = "/assets/1.900x506.center.a9dbfd45.webp";
const daliancienttownPhotoThumb2 = "/assets/2.100x100.center.e883eedf.webp";
const daliancienttownPhoto2 = "/assets/2.900x506.center.e883eedf.webp";
const daliancienttownPhotoThumb3 = "/assets/3.100x100.center.632e2ccf.webp";
const daliancienttownPhoto3 = "/assets/3.900x506.center.632e2ccf.webp";
const daliancienttownPhotoThumb4 = "/assets/4.100x100.center.2bd9e5d1.webp";
const daliancienttownPhoto4 = "/assets/4.900x506.center.2bd9e5d1.webp";
const daliancienttownPhotoThumb5 = "/assets/5.100x100.center.39ca8185.webp";
const daliancienttownPhoto5 = "/assets/5.900x506.center.39ca8185.webp";
const daliancienttownPhotoThumb6 = "/assets/6.100x100.center.4ac7e0a6.webp";
const daliancienttownPhoto6 = "/assets/6.900x506.center.4ac7e0a6.webp";
const erhaiPhotoThumb1 = "/assets/1.100x100.center.da1ac61b.webp";
const erhaiPhoto1 = "/assets/1.900x506.center.da1ac61b.webp";
const erhaiPhotoThumb2 = "/assets/2.100x100.center.d6a26bbd.webp";
const erhaiAvatar310 = "/assets/2.310x310.center.d6a26bbd.webp";
const erhaiPhoto2 = "/assets/2.900x506.center.d6a26bbd.webp";
const erhaiPhotoThumb3 = "/assets/3.100x100.center.c75cb097.webp";
const erhaiPhoto3 = "/assets/3.900x506.center.c75cb097.webp";
const erhaiPhotoThumb4 = "/assets/4.100x100.center.22596309.webp";
const erhaiPhoto4 = "/assets/4.900x506.center.22596309.webp";
const erhaiPhotoThumb5 = "/assets/5.100x100.center.b9c780a3.webp";
const erhaiPhoto5 = "/assets/5.900x506.center.b9c780a3.webp";
const erhaiPhotoThumb6 = "/assets/6.100x100.center.40462ac3.webp";
const erhaiPhoto6 = "/assets/6.900x506.center.40462ac3.webp";
const erhaiPhotoThumb7 = "/assets/7.100x100.center.9e1869fc.webp";
const erhaiPhoto7 = "/assets/7.900x506.center.9e1869fc.webp";
const erhaiPhotoThumb8 = "/assets/8.100x100.center.7fbd01c3.webp";
const erhaiPhoto8 = "/assets/8.900x506.center.7fbd01c3.webp";
const erhaiPhotoThumb9 = "/assets/9.100x100.center.815fc564.webp";
const erhaiPhoto9 = "/assets/9.900x506.center.815fc564.webp";
const threepagodasPhotoThumb1 = "/assets/1.100x100.center.e86c577f.webp";
const threepagodasPhoto1 = "/assets/1.900x506.center.e86c577f.webp";
const threepagodasPhotoThumb2 = "/assets/2.100x100.center.a1e4033b.webp";
const threepagodasPhoto2 = "/assets/2.900x506.center.a1e4033b.webp";
const threepagodasPhotoThumb3 = "/assets/3.100x100.center.04b5b78f.webp";
const threepagodasPhoto3 = "/assets/3.900x506.center.04b5b78f.webp";
const threepagodasPhotoThumb4 = "/assets/4.100x100.center.211495ec.webp";
const threepagodasPhoto4 = "/assets/4.900x506.center.211495ec.webp";
const threepagodasPhotoThumb5 = "/assets/5.100x100.center.493b934b.webp";
const threepagodasPhoto5 = "/assets/5.900x506.center.493b934b.webp";
const threepagodasPhotoThumb6 = "/assets/6.100x100.center.e3758869.webp";
const threepagodasPhoto6 = "/assets/6.900x506.center.e3758869.webp";
const westlakePhotoThumb1 = "/assets/1.100x100.center.62c55ed8.webp";
const westlakePhoto1 = "/assets/1.900x506.center.62c55ed8.webp";
const westlakePhotoThumb10 = "/assets/10.100x100.center.f936f6a7.webp";
const westlakePhoto10 = "/assets/10.900x506.center.f936f6a7.webp";
const westlakePhotoThumb11 = "/assets/11.100x100.center.18a0a919.webp";
const westlakePhoto11 = "/assets/11.900x506.center.18a0a919.webp";
const westlakePhotoThumb12 = "/assets/12.100x100.center.70ab6e55.webp";
const westlakePhoto12 = "/assets/12.900x506.center.70ab6e55.webp";
const westlakePhotoThumb2 = "/assets/2.100x100.center.e49ed83a.webp";
const westlakePhoto2 = "/assets/2.900x506.center.e49ed83a.webp";
const westlakePhotoThumb3 = "/assets/3.100x100.center.62c98949.webp";
const westlakePhoto3 = "/assets/3.900x506.center.62c98949.webp";
const westlakePhotoThumb4 = "/assets/4.100x100.center.f2869976.webp";
const westlakePhoto4 = "/assets/4.900x506.center.f2869976.webp";
const westlakePhotoThumb5 = "/assets/5.100x100.center.43e76fe0.webp";
const westlakePhoto5 = "/assets/5.900x506.center.43e76fe0.webp";
const westlakePhotoThumb6 = "/assets/6.100x100.center.f4efa770.webp";
const westlakePhoto6 = "/assets/6.900x506.center.f4efa770.webp";
const westlakePhotoThumb7 = "/assets/7.100x100.center.f67368ec.webp";
const westlakePhoto7 = "/assets/7.900x506.center.f67368ec.webp";
const westlakePhotoThumb8 = "/assets/8.100x100.center.77809ef3.webp";
const westlakePhoto8 = "/assets/8.900x506.center.77809ef3.webp";
const westlakePhotoThumb9 = "/assets/9.100x100.center.157c2d80.webp";
const westlakePhoto9 = "/assets/9.900x506.center.157c2d80.webp";
const ljiangancienttownPhotoThumb1 = "/assets/1.100x100.center.24d0d2e8.webp";
const ljiangancienttownPhoto1 = "/assets/1.900x506.center.24d0d2e8.webp";
const ljiangancienttownPhotoThumb2 = "/assets/2.100x100.center.aa8963dc.webp";
const ljiangancienttownPhoto2 = "/assets/2.900x506.center.aa8963dc.webp";
const ljiangancienttownPhotoThumb3 = "/assets/3.100x100.center.1f3142cd.webp";
const ljiangancienttownPhoto3 = "/assets/3.900x506.center.1f3142cd.webp";
const ljiangancienttownPhotoThumb4 = "/assets/4.100x100.center.1d7a3a07.webp";
const ljiangancienttownPhoto4 = "/assets/4.900x506.center.1d7a3a07.webp";
const ljiangancienttownPhotoThumb5 = "/assets/5.100x100.center.eb11f079.webp";
const ljiangancienttownPhoto5 = "/assets/5.900x506.center.eb11f079.webp";
const yulongsnowPhotoThumb1 = "/assets/1.100x100.center.35e28a9a.webp";
const yulongsnowPhoto1 = "/assets/1.900x506.center.35e28a9a.webp";
const yulongsnowPhotoThumb10 = "/assets/10.100x100.center.592936e4.webp";
const yulongsnowPhoto10 = "/assets/10.900x506.center.592936e4.webp";
const yulongsnowPhotoThumb2 = "/assets/2.100x100.center.128c9065.webp";
const yulongsnowPhoto2 = "/assets/2.900x506.center.128c9065.webp";
const yulongsnowPhotoThumb3 = "/assets/3.100x100.center.8b7cb8cc.webp";
const yulongsnowPhoto3 = "/assets/3.900x506.center.8b7cb8cc.webp";
const yulongsnowPhotoThumb4 = "/assets/4.100x100.center.ead8711e.webp";
const yulongsnowPhoto4 = "/assets/4.900x506.center.ead8711e.webp";
const yulongsnowPhotoThumb5 = "/assets/5.100x100.center.bbe4dc52.webp";
const yulongsnowPhoto5 = "/assets/5.900x506.center.bbe4dc52.webp";
const yulongsnowPhotoThumb6 = "/assets/6.100x100.center.c3bc2036.webp";
const yulongsnowPhoto6 = "/assets/6.900x506.center.c3bc2036.webp";
const yulongsnowPhotoThumb7 = "/assets/7.100x100.center.b3f0529b.webp";
const yulongsnowPhoto7 = "/assets/7.900x506.center.b3f0529b.webp";
const yulongsnowPhotoThumb8 = "/assets/8.100x100.center.91a610c7.webp";
const yulongsnowPhoto8 = "/assets/8.900x506.center.91a610c7.webp";
const yulongsnowPhotoThumb9 = "/assets/9.100x100.center.f84d1a7f.webp";
const yulongsnowPhoto9 = "/assets/9.900x506.center.f84d1a7f.webp";
const badaguanScenicAreaAvatar = "/assets/badaguanscenicarea_avatar.webp";
const southMountainAvatar = "/assets/chongqingsouthmountain_avatar.webp";
const chongshengThreePagodasAvatar = "/assets/chongshengthreepagodas_avatar.webp";
const hongyaCaveAvatar = "/assets/hongyacave_avatar.webp";
const kuixingBuildingAvatar = "/assets/kuixingbuilding_avatar.webp";
const laojunCaveAvatar = "/assets/laojuncave_avatar.webp";
const lingyinTempleAvatar = "/assets/lingyintemple_avatar.webp";
const luohanTempleAvatar = "/assets/luohantemple_avatar.webp";
const qingdaoBeerMuseumAvatar = "/assets/qingdaobeermuseum_avatar.webp";
const qingdaoCatholicChurchAvatar = "/assets/qingdaocatholicchurch_avatar.webp";
const shuanglangAncientTownAvatar = "/assets/shuanglangancienttown_avatar.webp";
const shuheAncientTownAvatar = "/assets/shuhe_avatar.webp";
const skywalkCloudStrollAvatar = "/assets/skywalkcloudstroll_avatar.webp";
const theEighteenStepsAvatar = "/assets/theeighteensteps_avatar.webp";
const theFishingCityAvatar = "/assets/thefishingcity_avatar.webp";
const threeGorgesAvatar = "/assets/threegorges_avatar.webp";
const twoRiversCruiseAvatar = "/assets/tworiverscruise_avatar.webp";
const westLakeAvatar = "/assets/westlake_avatar.webp";
const xizhouTownAvatar = "/assets/xizhoutown_avatar.webp";
const yantaiHillAvatar = "/assets/yantaihill_avatar.webp";
const attractionsAssets = {
  "Chongqing Zoo": {
    avatar: chongqingZooAvatar,
    photo: [
      chongqingzooPhoto1,
      chongqingzooPhoto2,
      chongqingzooPhoto3,
      chongqingzooPhoto4,
      chongqingzooPhoto5
    ],
    photoThumb: [
      chongqingzooPhotoThumb1,
      chongqingzooPhotoThumb2,
      chongqingzooPhotoThumb3,
      chongqingzooPhotoThumb4,
      chongqingzooPhotoThumb5
    ]
  },
  "Dazu Rock Carvings": {
    avatar: dazuRockCarvingsAvatar,
    photo: [dazurockPhoto1],
    photoThumb: [dazurockPhotoThumb1]
  },
  "Hongya Cave": {
    avatar: hongyaCaveAvatar,
    photo: [
      hongyadongPhoto1,
      hongyadongPhoto2,
      hongyadongPhoto3,
      hongyadongPhoto4,
      hongyadongPhoto5,
      hongyadongPhoto6,
      hongyadongPhoto7,
      hongyadongPhoto8,
      hongyadongPhoto9,
      hongyadongPhoto10,
      hongyadongPhoto11,
      hongyadongPhoto12
    ],
    photoThumb: [
      hongyadongPhotoThumb1,
      hongyadongPhotoThumb2,
      hongyadongPhotoThumb3,
      hongyadongPhotoThumb4,
      hongyadongPhotoThumb5,
      hongyadongPhotoThumb6,
      hongyadongPhotoThumb7,
      hongyadongPhotoThumb8,
      hongyadongPhotoThumb9,
      hongyadongPhotoThumb10,
      hongyadongPhotoThumb11,
      hongyadongPhotoThumb12
    ]
  },
  "Kuixing Building": { avatar: kuixingBuildingAvatar },
  "Laojun Cave": { avatar: laojunCaveAvatar },
  "Liziba Station": {
    avatar: lizibaStationAvatar,
    photo: [lizibaPhoto1, lizibaPhoto2, lizibaPhoto3],
    photoThumb: [lizibaPhotoThumb1, lizibaPhotoThumb2, lizibaPhotoThumb3]
  },
  "Luohan Temple": { avatar: luohanTempleAvatar },
  "Skywalk Cloud Stroll": {
    avatar: skywalkCloudStrollAvatar,
    photo: [laifushiPhoto1, laifushiPhoto2, laifushiPhoto3],
    photoThumb: [laifushiPhotoThumb1, laifushiPhotoThumb2, laifushiPhotoThumb3]
  },
  "South Mountain": {
    avatar: southMountainAvatar,
    photo: [nanshanPhoto1],
    photoThumb: [nanshanPhotoThumb1]
  },
  "The Eighteen Steps": { avatar: theEighteenStepsAvatar },
  "The Fishing City": { avatar: theFishingCityAvatar },
  "Three Gorges": { avatar: threeGorgesAvatar },
  "Two Rivers Cruise": {
    avatar: twoRiversCruiseAvatar,
    photo: [chongqingtworiverPhoto1, chongqingtworiverPhoto2],
    photoThumb: [chongqingtworiverPhotoThumb1, chongqingtworiverPhotoThumb2]
  },
  "Yangtze River Cableway": {
    avatar: yangtzerivercablewayAvatar,
    photo: [cablecarPhoto1, cablecarPhoto2, cablecarPhoto3, cablecarPhoto4, cablecarPhoto5],
    photoThumb: [
      cablecarPhotoThumb1,
      cablecarPhotoThumb2,
      cablecarPhotoThumb3,
      cablecarPhotoThumb4,
      cablecarPhotoThumb5
    ]
  },
  "Chongsheng Three Pagodas": {
    avatar: chongshengThreePagodasAvatar,
    photo: [
      threepagodasPhoto1,
      threepagodasPhoto2,
      threepagodasPhoto3,
      threepagodasPhoto4,
      threepagodasPhoto5,
      threepagodasPhoto6
    ],
    photoThumb: [
      threepagodasPhotoThumb1,
      threepagodasPhotoThumb2,
      threepagodasPhotoThumb3,
      threepagodasPhotoThumb4,
      threepagodasPhotoThumb5,
      threepagodasPhotoThumb6
    ]
  },
  "Dali Ancient City": {
    avatar: daliancienttownAvatar310,
    photo: [
      daliancienttownPhoto1,
      daliancienttownPhoto2,
      daliancienttownPhoto3,
      daliancienttownPhoto4,
      daliancienttownPhoto5,
      daliancienttownPhoto6
    ],
    photoThumb: [
      daliancienttownPhotoThumb1,
      daliancienttownPhotoThumb2,
      daliancienttownPhotoThumb3,
      daliancienttownPhotoThumb4,
      daliancienttownPhotoThumb5,
      daliancienttownPhotoThumb6
    ]
  },
  "Erhai Lake": {
    avatar: erhaiAvatar310,
    photo: [
      erhaiPhoto1,
      erhaiPhoto2,
      erhaiPhoto3,
      erhaiPhoto4,
      erhaiPhoto5,
      erhaiPhoto6,
      erhaiPhoto7,
      erhaiPhoto8,
      erhaiPhoto9
    ],
    photoThumb: [
      erhaiPhotoThumb1,
      erhaiPhotoThumb2,
      erhaiPhotoThumb3,
      erhaiPhotoThumb4,
      erhaiPhotoThumb5,
      erhaiPhotoThumb6,
      erhaiPhotoThumb7,
      erhaiPhotoThumb8,
      erhaiPhotoThumb9
    ]
  },
  "Shuanglang Ancient Town": { avatar: shuanglangAncientTownAvatar },
  "Xizhou Town": { avatar: xizhouTownAvatar },
  "Lingyin Temple": { avatar: lingyinTempleAvatar },
  "West Lake": {
    avatar: westLakeAvatar,
    photo: [
      westlakePhoto1,
      westlakePhoto2,
      westlakePhoto3,
      westlakePhoto4,
      westlakePhoto5,
      westlakePhoto6,
      westlakePhoto7,
      westlakePhoto8,
      westlakePhoto9,
      westlakePhoto10,
      westlakePhoto11,
      westlakePhoto12
    ],
    photoThumb: [
      westlakePhotoThumb1,
      westlakePhotoThumb2,
      westlakePhotoThumb3,
      westlakePhotoThumb4,
      westlakePhotoThumb5,
      westlakePhotoThumb6,
      westlakePhotoThumb7,
      westlakePhotoThumb8,
      westlakePhotoThumb9,
      westlakePhotoThumb10,
      westlakePhotoThumb11,
      westlakePhotoThumb12
    ]
  },
  "Lijiang Ancient Town": {
    avatar: lijiangAncientAvatar,
    photo: [
      ljiangancienttownPhoto1,
      ljiangancienttownPhoto2,
      ljiangancienttownPhoto3,
      ljiangancienttownPhoto4,
      ljiangancienttownPhoto5
    ],
    photoThumb: [
      ljiangancienttownPhotoThumb1,
      ljiangancienttownPhotoThumb2,
      ljiangancienttownPhotoThumb3,
      ljiangancienttownPhotoThumb4,
      ljiangancienttownPhotoThumb5
    ]
  },
  "Shuhe Ancient Town": { avatar: shuheAncientTownAvatar },
  "Tiger Leaping Gorge": { avatar: tigerleapinggorgeAvatar },
  "Yulong Snow Mountain": {
    avatar: yulongSnowMountainAvatar,
    photo: [
      yulongsnowPhoto1,
      yulongsnowPhoto2,
      yulongsnowPhoto3,
      yulongsnowPhoto4,
      yulongsnowPhoto5,
      yulongsnowPhoto6,
      yulongsnowPhoto7,
      yulongsnowPhoto8,
      yulongsnowPhoto9,
      yulongsnowPhoto10
    ],
    photoThumb: [
      yulongsnowPhotoThumb1,
      yulongsnowPhotoThumb2,
      yulongsnowPhotoThumb3,
      yulongsnowPhotoThumb4,
      yulongsnowPhotoThumb5,
      yulongsnowPhotoThumb6,
      yulongsnowPhotoThumb7,
      yulongsnowPhotoThumb8,
      yulongsnowPhotoThumb9,
      yulongsnowPhotoThumb10
    ]
  },
  "Badaguan Scenic Area": { avatar: badaguanScenicAreaAvatar },
  "Qingdao Beer Museum": { avatar: qingdaoBeerMuseumAvatar },
  "Qingdao Catholic Church": { avatar: qingdaoCatholicChurchAvatar },
  "Yantai Hill": { avatar: yantaiHillAvatar },
  "Chengdu Panda Research Base": {
    avatar: chengduPandaBaseAvatar
  },
  "Leshan Giant Buddha": {
    avatar: leshanGiantBuddhaAvatar
  },
  "Jinshanling Great Wall": {
    avatar: jinshanlingAvatar310,
    photo: [
      jinshanlingPhoto1,
      jinshanlingPhoto2,
      jinshanlingPhoto3,
      jinshanlingPhoto4,
      jinshanlingPhoto5,
      jinshanlingPhoto6,
      jinshanlingPhoto7,
      jinshanlingPhoto8,
      jinshanlingPhoto9
    ],
    photoThumb: [
      jinshanlingPhotoThumb1,
      jinshanlingPhotoThumb2,
      jinshanlingPhotoThumb3,
      jinshanlingPhotoThumb4,
      jinshanlingPhotoThumb5,
      jinshanlingPhotoThumb6,
      jinshanlingPhotoThumb7,
      jinshanlingPhotoThumb8,
      jinshanlingPhotoThumb9
    ]
  },
  "Simatai Great Wall": {
    avatar: simataiAvatar310,
    photo: [simataiPhoto1],
    photoThumb: [simataiPhotoThumb1]
  },
  "Mutianyu Great Wall": {
    avatar: mutianyuAvatar310,
    photo: [mutianyuPhoto1, mutianyuPhoto2, mutianyuPhoto3, mutianyuPhoto4],
    photoThumb: [
      mutianyuPhotoThumb1,
      mutianyuPhotoThumb2,
      mutianyuPhotoThumb3,
      mutianyuPhotoThumb4
    ]
  },
  "Badaling Great Wall": {
    avatar: badalingAvatar310,
    photo: [badalingPhoto1, badalingPhoto2, badalingPhoto3],
    photoThumb: [badalingPhotoThumb1, badalingPhotoThumb2, badalingPhotoThumb3]
  }
};
const Megacity = "Megacity";
const Seaside = "Seaside";
const Minority = "Minority";
const AncienCapital = "Ancient Capital";
const Nature = "Nature";
const HeritageSites = "Heritage Sites";
const Cuisine = "Cuisine";
const Shopping = "Shopping";
const Festival = "Festival";
const Island = "Island";
const Art = "Art";
const Trending = "Trending";
const Top = "Top";
const Panda = "Panda";
const Tech = "Tech";
const tags = [
  Megacity,
  Panda,
  Tech,
  Seaside,
  Island,
  Minority,
  AncienCapital,
  Nature,
  HeritageSites,
  Cuisine,
  Festival,
  Art
];
const AncientRuins = "Ancient Ruins";
const GreatWall = "Great Wall";
const tagsLocale = {
  ja: {
    [Megacity]: "大都市",
    [Seaside]: "海滨",
    [Island]: "島",
    [Minority]: "少数民族",
    [AncienCapital]: "古都",
    [Nature]: "自然风光",
    [HeritageSites]: "文化遗产",
    [Cuisine]: "美食",
    [Shopping]: "购物",
    [Festival]: "节日",
    [Art]: "艺术",
    [Trending]: "人気スポット",
    [Top]: "トップランキング",
    [Panda]: "パンダ",
    [Tech]: "ハイテクノロジー"
  },
  ko: {
    [Megacity]: "대도시",
    [Seaside]: "연안",
    [Island]: "섬",
    [Minority]: "소수민족",
    [AncienCapital]: "고도",
    [Nature]: "자연경관",
    [HeritageSites]: "문화유산",
    [Cuisine]: "요리",
    [Shopping]: "쇼핑",
    [Festival]: "축제",
    [Art]: "예술",
    [Trending]: "인기 장소",
    [Top]: "탑 랭킹",
    [Panda]: "판다",
    [Tech]: "하이테크놀로지"
  }
};
const tagsDescription = {
  [Megacity]: "China's urbanization is rapidly advancing, with cities like Beijing, Shanghai, and Shenzhen expanding quickly. These cities feature advanced infrastructure in subways, high-speed railways, airports, public transport, and communications. They also prioritize social stability and urban safety.",
  [Seaside]: "China's coast is concentrated in the eastern and southern regions, with a large latitude span from north to south, resulting in distinct climates. Coastal cities are relatively developed, featuring unique historical cultures and notable local cuisines.",
  [Island]: "China has numerous islands suitable for tourism. Hainan Island, located at China's southernmost point, is a tropical paradise. Other popular tourist islands include the Zhoushan Archipelago, Gulangyu Island in Xiamen, and Weizhou Island.",
  [Minority]: "China has 55 ethnic minorities, each with its own cultural traditions, beliefs, and marriage systems. These minorities have distinct expressions in arts, music, dance, and painting.",
  [AncienCapital]: "Chinese civilization has about 5000 years of history, with numerous ancient capitals that played important roles in history. Most of these cities remain significant today, preserving a wealth of cultural heritage.",
  [Nature]: "China's natural landscapes are diverse, featuring magnificent mountains, vast plains, deep gorges, expansive deserts, beautiful lakes, and winding rivers. The landscapes vary widely due to the country's vast territory, with each region having its unique beauty and ecosystem. Whether it's towering mountains, clear waters, or endless deserts, all can be found in China.",
  [HeritageSites]: "China's cultural heritage is rich and diverse, encompassing both tangible and intangible categories. These heritages are not only witnesses to China's long history but also significant components of the world's cultural legacy.",
  [Cuisine]: "China, with its vast territory, has a deeply diverse culinary culture influenced by climate, terrain, culture, and local specialties. The Eight Great Cuisines represent the pinnacle of this diversity, but virtually every region in China boasts its own distinctive culinary delights.",
  [Shopping]: "Chinese electronic products, daily necessities, traditional handicrafts, and so on are very popular worldwide. Additionally, Chinese cultural souvenirs and specialties are also hot items, such as Chinese tea, porcelain, and souvenirs.",
  [Festival]: "Traditional Chinese festivals like the Spring Festival and Dragon Boat Festival have a profound cultural impact and are worth experiencing. Additionally, there are numerous regional and ethnic festivals.",
  [Art]: "Chinese culture and arts have a profound heritage, a long history, and a wide variety, covering various fields from ancient to modern times, including but not limited to painting, calligraphy, music, dance, opera, and sculpture.",
  [Panda]: "Pandas and other characteristic animals of China.",
  [Tech]: "China has advanced technology in areas such as AI, 5G communication, new energy vehicles, and the Internet."
};
const tagsDescriptionLocale = {
  ja: {
    [Megacity]: "中国の都市化は急速で、北京や上海などでは物理的拡大が進んでいます。これらの都市は高度なインフラを持ち、地下鉄や高速鉄道などで先進的です。社会の安定と都市の安全も重視されています。",
    [Seaside]: "中国の海岸は東部と南部に集中しており、南北に広い緯度差があるため気候が大きく異なります。沿海部の都市は比較的発展しており、地域特有の歴史文化や特徴的な食文化を持っています。",
    [Island]: "中国には多くの観光に適した島々があります。最南端の熱帯島である海南島をはじめ、舟山群島、厦门の鼓浪屿、涠洲岛など人気の観光島々があります。",
    [Minority]: "中国には55の少数民族があり、それぞれが独自の文化伝統、信仰、婚姻制度を持っています。少数民族は芸術、音楽、舞踊、絵画などの分野で独特の表現形式を持っています。",
    [AncienCapital]: "中国文明は約5000年の歴史を持ち、多くの古都がありました。それらの都市は歴史上重要な役割を果たし、現在も多くが重要な都市として文化遺産を数多く保存しています。",
    [Nature]: "中国の自然風景は多様で、壮大な山脈、広大な平原、深い峡谷、広大な砂漠、美しい湖、そして曲がりくねった河が含まれます。中国の自然風景はその広大な地域ゆえに千変万化し、それぞれの地域が独自の美しさと生態系を持っています。高山や青い水、広大無辺の砂漠など、中国にはすべてが存在します。",
    [HeritageSites]: "中国の文化遺産は豊かで多様であり、有形文化遺産と無形文化遺産の二大カテゴリーを網羅しています。これらの遺産は中国の長い歴史の証人であるだけでなく、世界の文化遺産の重要な構成要素でもあります。",
    [Cuisine]: "中国は広大な国土を持ち、その食文化は気候、地形、文化、そして食物の特産品によって深く影響を受けています。中国の八大菜系はこの多様性の頂点を代表していますが、実際には中国のほぼすべての地域が独自の特色を持つ美食を誇っています。",
    [Shopping]: "中国の電子製品、生活用品、伝統的な手工芸品などが世界中で非常に人気があります。また、中国の文化記念品や特産品も人気が高く、例えば中国茶、磁器、記念品などが挙げられます。",
    [Festival]: "春節や端午の節句などの全国的な中国の伝統的な祭りは文化的影響が深く、体験する価値があります。さらに、多くの地域的・民族的な祭りもあります。",
    [Art]: "中国文化と芸術は深い造詣を持ち、長い歴史と多種多様な分野を網羅しています。古代から現代まで、絵画、書道、音楽、舞踊、演劇、彫刻などを含みますが、これらに限りません。",
    [Panda]: "パンダなどの中国特有の動物",
    [Tech]: "中国はAI、5G通信、新エネルギー車、インターネットなどの分野で先進技術を持っています。"
  },
  ko: {
    [Megacity]: "중국의 도시화는 매우 빠르게 진행되고 있으며, 베이징이나 상하이와 같은 대도시들은 물리적인 확장이 계속되고 있습니다. 이들 도시는 발달된 인프라를 갖추고 있으며, 지하철과 고속철도 등 첨단 시스템을 보유하고 있습니다. 또한 사회의 안정과 도시의 안전성도 중요한 요소로 여겨지고 있습니다.",
    [Seaside]: "중국의 연안 지역은 동부와 남부에 집중되어 있으며, 넓은 위도 차이로 인해 기후가 다양합니다. 연안 도시들은 비교적 발전되어 있으며, 지역 특유의 역사 문화와 독특한 식문화를 가지고 있습니다.",
    [Island]: "중국에는 관광하기 좋은 많은 섬들이 있습니다. 가장 남쪽에 위치한 열대 섬인 하이난섬부터 조산 군도, 샤먼의 구랑위, 바저우다오 등 다양한 인기 있는 관광 섬들이 있습니다.",
    [Minority]: "중국에는 55개의 소수민족이 존재하며, 각각 독특한 문화 전통, 신앙, 결혼 제도를 가지고 있습니다. 소수민족은 예술, 음악, 춤, 회화 등의 분야에서 독특한 표현 방식을 보여줍니다.",
    [AncienCapital]: "중국 문명은 약 5000년의 역사를 가지고 있으며, 많은 고도들이 있었습니다. 이들 도시들은 역사적으로 중요한 역할을 했으며, 현재에도 많은 문화 유산을 보존하고 있는 중요한 도시들입니다.",
    [Nature]: "중국의 자연 경관은 매우 다양하여 웅장한 산맥, 광활한 평원, 깊은 협곡, 거대한 사막, 아름다운 호수, 그리고 굽이치는 강들을 포함합니다. 중국의 자연 경관은 광대한 영토 덕분에千変萬化하며, 각 지역마다 독특한 아름다움과 생태계를 가지고 있습니다. 높은 산과 푸른 물, 그리고 광활한 사막 등 모든 것이 중국에 존재합니다.",
    [HeritageSites]: "중국의 문화 유산은 풍부하고 다양하며, 유형 문화 유산과 무형 문화 유산 두 가지 큰 카테고리를 포괄합니다. 이 유산들은 중국의 긴 역사를 증언하는 것뿐만 아니라, 세계 문화 유산의 중요한 구성 요소이기도 합니다.",
    [Cuisine]: "중국은 광대한 영토를 가지고 있어, 그 음식 문화는 기후, 지형, 문화, 그리고 특산물에 의해 깊이 영향을 받습니다. 중국의 여덟 가지 주요 요리 양식은 이러한 다양성을 대표하지만, 실제로는 거의 모든 지역이 독자적인 특색 있는 미식을 자랑합니다.",
    [Shopping]: "중국의 전자제품, 생활용품, 전통적인 수공예품은 전 세계적으로 매우 인기가 있습니다. 또한 중국의 문화 기념품과 특산품도 인기가 많아, 예를 들어 중국 차, 도자기, 기념품 등이 있습니다.",
    [Festival]: "춘절, 단오절과 같은 전국적인 중국 전통 축제는 문화적 영향이 크며, 경험할 가치가 있습니다. 또한 많은 지역적이고 민족적인 축제도 있습니다.",
    [Art]: "중국의 문화와 예술은 깊이 있고, 긴 역사를 가지고 있으며 다양한 분야를 포괄합니다. 고대부터 현대까지 회화, 서예, 음악, 춤, 연극, 조각 등을 포함하지만, 이에 국한되지 않습니다.",
    [Panda]: "판다와 같은 중국 고유의 동물",
    [Tech]: "중국은 AI, 5G 통신, 신에너지 자동차, 인터넷 등 여러 분야에서 선진 기술을 보유하고 있습니다."
  }
};
const attractions = [
  {
    link: "chongqing-zoo",
    name: "Chongqing Zoo",
    nameChinese: "动物园",
    namePinyin: "dòng wù yuán",
    nameLocale: { root: "Chongqing Zoo", ja: "重慶動物園" },
    city: "Chongqing",
    introduce: {
      root: "Home to adorable giant pandas up close.",
      ja: "間近でパンダが見られる人気スポット。"
    },
    description: {
      root: `Discover Chongqing Zoo, a premier wildlife destination in China! Encounter adorable pandas and diverse species. It's perfect for panda lovers.`,
      ja: "重慶動物園でパンダをはじめ200種類以上の動物と出会おう！モノレール動物園駅からアクセス便利、中国随一の野生生物観光地。"
    },
    location: "29.500914342936994, 106.51025097185021",
    ticketPrice: 24.5,
    rating: 4.7,
    opensHour: [8, 16.5],
    visitDuration: [1, 2],
    address: { root: "No. 1 West Village, Jiulongpo District (near Xijiao Branch Road)", ja: null },
    review: {
      root: "If you want to see giant pandas, just go!",
      ja: "ジャイアントパンダを見たいなら、行ってみるべし！",
      ko: "대나무곰을 보고 싶다면, 가보세요!"
    }
  },
  {
    link: "dazu-rock-carvings",
    name: "Dazu Rock Carvings",
    nameChinese: "大足石刻",
    namePinyin: "dà zú shí kè",
    nameLocale: { root: "Dazu Rock Carvings", ja: "大足石刻" },
    city: "Chongqing",
    introduce: {
      root: "UNESCO-listed Buddhist rock carvings spanning 9th-13th centuries.",
      ja: "9～13世紀の仏教石窟群、世界遺産。"
    },
    description: {
      root: "Explore Dazu Rock Carvings, a UNESCO World Heritage Site showcasing stunning grotto art in Chongqing. Immerse yourself in rich cultural history.",
      ja: "重慶にあるユネスコ世界遺産、大足石刻を発見しましょう。広大な洞窟芸術複合施設が特徴で、美しい彫刻と深い歴史的価値を持つ文化の宝庫です。"
    },
    location: "29.748874417859906, 105.79730846493533",
    ticketPrice: 95,
    rating: 4.9,
    opensHour: [9, 18],
    visitDuration: [4, 5],
    address: { root: "Baoding Mountain, Baoding Town, Dazu District, Chongqing", ja: null }
  },
  {
    link: "hongya-cave",
    name: "Hongya Cave",
    nameChinese: "洪崖洞",
    namePinyin: "hóng yá dòng",
    nameLocale: { root: "Hongya Cave", ja: "洪崖洞" },
    city: "Chongqing",
    introduce: {
      root: 'Stunning stilted village resembling "Spirited Away".',
      ja: "「千と千尋」の世界を再現。"
    },
    description: {
      root: 'Explore Hongya Cave, a renowned Chinese City Walk site in Chongqing, celebrated for its traditional houses and referred to "real-life Spirited Away."',
      ja: "重慶で有名な都市探検スポット、洪崖洞を探索。その場所は伝統的な巴渓の吊り脚屋で知られ、「現実の千と千尋の神隠し」と呼ばれています。"
    },
    location: "29.56222996257862, 106.57912732918527",
    index: 99,
    rating: 4.6,
    ticketPrice: 0,
    opensHour: [0, 24],
    visitDuration: [1, 3],
    review: {
      root: "Take photos outside at night, avoid going in.",
      ja: "夜は外で写真だけ、中に入らなくていいよ。"
    },
    address: {
      root: "No. 88, Binjiang Road, Jialing River, Yuzhong District, Chongqing",
      ja: null
    }
  },
  {
    link: "kuixing-building",
    name: "Kuixing Building",
    nameChinese: "魁星楼",
    namePinyin: "kuí xīng lóu",
    nameLocale: { root: "Kuixing Building", ja: "魁星楼" },
    city: "Chongqing",
    introduce: {
      root: "Mind-bending urban illusion - skyscrapers floating over cliffs.",
      ja: "崖上の摩天楼が浮かぶ錯覚スポット。"
    },
    description: {
      root: `Experience Kuixing Building, Chongqing’s optical illusion landmark that challenges perceptions of space. A must-see for architecture enthusiasts.`,
      ja: "空間の認識を挑発する重慶の話題の視覚錯覚ランドマーク、魁星楼（かいけいろう）を体験してください。建築や写真愛好家にとって見逃せないスポットです！"
    },
    location: "29.559953113258572, 106.57358654825077",
    rating: 4.3,
    ticketPrice: 0,
    opensHour: [0, 24],
    visitDuration: 1,
    address: { root: "No. 99 South Huancheng Road, Shuangqiao District, Chengde City", ja: null }
  },
  {
    link: "laojun-cave",
    name: "Laojun Cave",
    nameChinese: "老君洞",
    namePinyin: "lǎo jūn dòng",
    nameLocale: { root: "Laojun Cave", ja: "老君洞" },
    city: "Chongqing",
    introduce: {
      root: "Sacred Taoist mountain offering panoramic city vistas.",
      ja: "道教の聖地、市内を一望。"
    },
    description: {
      root: "Visit Laojun Cave, a serene Taoist sanctuary nestled on tranquil Laojun Mountain in Chongqing. Ideal for spiritual seekers and natural lovers.",
      ja: "静かな老君山に位置する歴史的な道教の聖地、老君洞（ろうくんどう）を訪れてみましょう。スピリチュアルな体験を求めたり、自然を愛する方にもおすすめのスポットです！"
    },
    location: "29.543325418318066, 106.60402893137298",
    rating: 4.5,
    ticketPrice: 0,
    opensHour: [8, 17],
    visitDuration: [1, 2],
    address: { root: "Laojun Mountain, Huangjueya, Nan'an District, Chongqing", ja: null }
  },
  {
    link: "liziba-station",
    name: "Liziba Station",
    nameChinese: "李子坝",
    namePinyin: "lǐ zǐ bà",
    nameLocale: { root: "Liziba Station", ja: "李子坝駅" },
    city: "Chongqing",
    introduce: {
      root: "Watch metros slice through apartments daily.",
      ja: "ビルを貫通する軽軌道の名所。"
    },
    description: {
      root: "Visit Liziba Station, Chongqing's internet-famous spot where a light rail train passes through a building—a must-check-in for travelers!",
      ja: "建物を貫く軽量鉄道で話題の李子坝駅（りしべきえき）へぜひお越しください。重慶を訪れる旅行者や写真好きの方に人気のスポットです！"
    },
    location: "29.55376624630821, 106.53798475983362",
    rating: 4.5,
    ticketPrice: 0,
    opensHour: [6.5, 23.25],
    visitDuration: 0.5,
    review: {
      root: `Don't miss the views along the way. Take photos, then leave and use the light rail to head to other attractions.`,
      ja: "沿いの景色を忘れずに、写真を撮ったらそのまま離れて、軽軌道で他の観光地へ行ってください。"
    },
    address: { root: "Liziba Metro Station, Yuzhong District, Chongqing", ja: null }
  },
  {
    link: "luohan-temple",
    name: "Luohan Temple",
    nameChinese: "罗汉寺",
    namePinyin: "luó hàn sì",
    nameLocale: { root: "Luohan Temple", ja: "羅漢寺" },
    city: "Chongqing",
    introduce: {
      root: "Ancient Buddhist temple with 1,000+ years of spiritual legacy.",
      ja: "千年の歴史を誇る仏教寺院。"
    },
    description: {
      root: "Step into Luohan Temple, a peaceful Buddhist sanctuary in Chongqing with over 1,000 years of history. Discover its spiritual and cultural significance.",
      ja: "重慶にある羅漢寺は、千年以上の歴史を持つ静かな仏教の聖地です。その豊かな文化と精神的な伝統に触れてみましょう。"
    },
    location: "29.55987347696491, 106.58191867921985",
    rating: 4.6,
    ticketPrice: 20,
    opensHour: [7, 17.5],
    visitDuration: [1, 2],
    address: { root: "Luohan Temple,Minzu Road, Yuzhong District, Chongqing", ja: null }
  },
  {
    link: "skywalk-cloud-stroll",
    name: "Skywalk Cloud Stroll",
    nameLocale: { root: "Skywalk Cloud Stroll", ja: "スカイウォーク雲の散歩" },
    city: "Chongqing",
    introduce: {
      root: "Thrilling 250m-high sky deck with infinity pool views.",
      ja: "250m高のスカイデッキで絶景を。"
    },
    description: {
      root: "Enjoy breathtaking views at Skywalk Cloud Stroll, a high-altitude deck offering panoramic vistas of Chongqing. Experience lounging and stunning cityscapes.",
      ja: "重慶のスカイウォーク雲の散歩を体験してください。この興奮する都市探検アクティビティでは、360度のパノラマビューで街を楽しむことができます。"
    },
    location: "29.563486458157335, 106.58838699148542",
    rating: 4.5,
    ticketPrice: 180,
    opensHour: [10, 22],
    visitDuration: [1, 2],
    address: {
      root: "Raffles City, 8 Jiesheng Street, Yuzhong District, Chongqing",
      ja: null
    }
  },
  {
    link: "south-moutain",
    name: "South Mountain",
    nameChinese: "南山",
    namePinyin: "nán shān",
    nameLocale: { root: "South Mountain", ja: "南山" },
    city: "Chongqing",
    introduce: {
      root: "Lush urban retreat with iconic night city panoramas.",
      ja: "夜景が美しい都会のオアシス。"
    },
    description: {
      root: "Escape to South Mountain in Chongqing, a scenic mountain famed for its lush greenery and panoramic city views. Enjoy a peaceful atmosphere there.",
      ja: "重慶の南山へ。豊かな緑と市街のパノラマビューが楽しめる景勝地。美しい自然の中で静かで平和な時間を体験してください。"
    },
    location: "29.54587742443861, 106.60278178979374",
    rating: 4.5,
    ticketPrice: 0,
    opensHour: [0, 24],
    visitDuration: [1, 2],
    address: {
      root: "South Mountain, Nanan District, Chongqing",
      ja: null
    }
  },
  {
    link: "the-eighteen-steps",
    name: "The Eighteen Steps",
    nameChinese: "十八梯",
    namePinyin: "shí bā tī",
    nameLocale: { root: "The Eighteen Steps", ja: "十八段階" },
    city: "Chongqing",
    introduce: {
      root: "Historic hillside alleys preserving old Chongqing charm.",
      ja: "古い重慶の面影残す石段街。"
    },
    description: {
      root: "Wander through The Eighteen Steps, a historic district capturing Chongqing’s mountainous charm. Walk back in time and explore traditional culture.",
      ja: "重慶の山岳都市の特徴を体現する歴史的な文化地区、十八段階を散策してみましょう。時間と伝統が織りなす魅力的な場所です！"
    },
    location: "29.551223298868194, 106.57258394905458",
    rating: 4.2,
    ticketPrice: 0,
    opensHour: [0, 24],
    visitDuration: [2, 3],
    address: { root: "Shi Ba Ti, Yuzhong Qu, Chongqing Shi, China", ja: null }
  },
  {
    link: "diaoyucheng-fortress",
    name: "Diaoyucheng Fortress",
    nameChinese: "钓鱼城",
    namePinyin: "diào yú chéng",
    nameLocale: { root: "Diaoyucheng Fortress", ja: "釣魚城" },
    city: "Chongqing",
    introduce: {
      root: 'Medieval fortress hailed as "Oriental Troy".',
      ja: "東洋のトロイと呼ばれる要塞。"
    },
    description: {
      root: "Discover Fishing City, an ancient fortress that played a pivotal role in Chinese military history. Explore its fascinating defensive architecture.",
      ja: "中国および世界の軍事史上重要な役割を果たした中世の要塞、釣魚城（ちょうぎょじょう）を訪れてみましょう。古代の防御建築に触れられる興味深いスポットです！"
    },
    location: "30.00475438276366, 106.31592436016888",
    rating: 4.5,
    ticketPrice: 60,
    opensHour: [8, 17],
    visitDuration: [2, 3],
    address: {
      root: "Middle section of Diaoyucheng Avenue, Hechuan District, Chongqing",
      ja: null
    }
  },
  {
    link: "three-gorges",
    name: "Three Gorges",
    nameChinese: "三峡",
    namePinyin: "sān xiá",
    nameLocale: { root: "Three Gorges", ja: "三峡" },
    city: "Chongqing",
    introduce: {
      root: `Dramatic cliffs framing China's legendary waterway.`,
      ja: "急峻な崖と急流、自然の傑作。"
    },
    description: {
      root: "Embark on a mesmerizing journey through the Three Gorges, where dramatic cliffs meet the mighty Yangtze River. Experience China’s most iconic wonders.",
      ja: "急峻な崖と急流が織りなす自然の傑作、三峡を巡る忘れられない旅に出かけましょう。長江でのんびりとした川クルーズを楽しみながら、その壮大な景色に浸ってください。"
    },
    location: "31.036830013129418, 109.58226125650347",
    rating: 4.8,
    ticketPrice: 0,
    opensHour: [0, 24],
    visitDuration: [2, 3],
    address: { root: "Yiling District, Yichang City", ja: null }
  },
  {
    link: "two-rivers-cruise",
    name: "Two Rivers Cruise",
    nameChinese: "两江游",
    namePinyin: "liǎng jiāng yóu",
    nameLocale: { root: "Two Rivers Cruise", ja: "二川クルーズ" },
    city: "Chongqing",
    introduce: {
      root: "Romantic night cruises showcasing glittering skylines.",
      ja: "夜景クルーズで輝く街並み。"
    },
    description: {
      root: "Enjoy spectacular night views of Chongqing on the Two Rivers Cruise. Sail past landmarks like Chaotianmen and Hongyadong for unforgettable memories.",
      ja: "朝天門や洪崖洞などの象徴的なランドマークを巡りながら、重慶の美しい夜景を楽しめる二川クルーズ。街の別側からの景色をぜひお楽しみください。"
    },
    location: "29.56192457552607, 106.57723116627403",
    ticketPrice: 138,
    rating: 4.1,
    opensHour: [19.5, 22.25],
    visitDuration: [1, 3],
    address: { root: "Chaotianmen Wharf, Binjiang Road, Yuzhong District, Chongqing", ja: null },
    review: {
      root: `Take a cruise to enjoy Chongqing's night views; it's great for groups and highly recommended.`,
      ja: "クルーズで重慶の夜景を楽しむのは、グループで行くのにぴったり。おすすめです！",
      ko: "유람선을 타고 충칭의 야경을 감상하는 것은 여러 명이 함께하기에 좋고 추천합니다！"
    }
  },
  {
    link: "yangtze-river-cableway",
    name: "Yangtze River Cableway",
    nameChinese: "索道",
    namePinyin: "suǒ dào",
    nameLocale: { root: "Yangtze River Cableway", ja: "揚子江ロープウェイ" },
    city: "Chongqing",
    introduce: {
      root: "Iconic cable cars soaring above Yangtze vistas.",
      ja: "長江を渡る空中散歩。"
    },
    description: {
      root: "Experience the iconic Yangtze River Cableway in Chongqing, offering a breathtaking aerial view of the city's landmarks and the majestic Yangtze River.",
      ja: "重慶の象徴的な揚子江ロープウェイで、街のランドマークや壮大な揚子江を空から一望してください。手頃な価格の入場料はわずか20元からです！"
    },
    location: "29.557806406598743, 106.58269195742177",
    index: 9,
    ticketPrice: 20,
    rating: 3,
    opensHour: [8, 22],
    visitDuration: [0.5, 2],
    address: { root: "No. 151, Xinhua Road, Yuzhong District, Chongqing", ja: null }
  },
  {
    link: "chongsheng-three-pagodas",
    name: "Chongsheng Three Pagodas",
    nameLocale: { root: "Chongsheng Three Pagodas", ja: "崇圣寺三塔" },
    city: "Dali",
    introduce: {
      root: `Royal pagodas reflecting in Erhai Lake's waters.`,
      ja: "洱海に映る3つの名塔。"
    },
    description: {
      root: "Explore the historic Chongsheng Three Pagodas in Dali, symbols of Buddhist culture from the Nanzhao and Dali Kingdoms. Discover their timeless beauty.",
      ja: "大理の歴史的な崇聖三塔を探索しましょう。これは南诏国と大理国の仏教文化の象徴です。昼間にお観光いただくのがおすすめです。"
    },
    location: "25.706197832654514, 100.14902156287992",
    rating: 4.7,
    ticketPrice: 75,
    opensHour: [7.5, 17.5],
    visitDuration: [2, 4],
    address: {
      root: "大理白族自治州大理市（中和鎮）西北2公里的蒼山應樂峯下崇聖寺三塔文化旅遊區內",
      ja: null
    },
    review: {
      root: `The royal temple of the Nanzhao and Dali Kingdoms, with the 1200-year-old Three Pagodas still standing today, is definitely worth a visit.`,
      ja: "南詔国と大理国の皇室寺院で、1200年経った今も三塔が残っています。ぜひ訪れる価値がありますよ。",
      ko: "남조국과 대리국의 왕실 사원으로, 1200년이 지난 지금도 세 개의 탑이 잘 보존되어 있습니다. 꼭 방문해볼 만한 가치가 있어요."
    }
  },
  {
    link: "dali-ancient-city",
    name: "Dali Ancient City",
    nameChinese: "大理古城",
    namePinyin: "dà lǐ gǔ chéng",
    nameLocale: { root: "Dali Ancient City", ja: "大理古城" },
    city: "Dali",
    introduce: {
      root: `Ancient capital surrounded by Cangshan's peaks.`,
      ja: "蒼山に囲まれた古都。"
    },
    description: {
      root: "Discover the Chongsheng Three Pagodas in Dali, a historic symbol of Buddhist culture from the Nanzhao and Dali Kingdoms. Enjoy a cultural experience!",
      ja: "大理の崇聖三塔を訪れて、南诏国と大理国の仏教文化の歴史的象徴を体験してください。美しい景色を楽しみながら、文化的な魅力に触れましょう。"
    },
    location: "25.689249733207813, 100.16202793346002",
    rating: 4.7,
    ticketPrice: 0,
    opensHour: [0, 24],
    visitDuration: [2, 3],
    address: {
      root: "No. 42, Yita Road, Dali Ancient City, Gucheng District, Dali Bai Autonomous Prefecture",
      ja: null
    },
    review: {
      root: `The lively old town, with its unique Dali Bai ethnic culture and architecture, is truly impressive. The tile cats and tie-dye are especially memorable. I highly recommend experiencing them firsthand.`,
      ja: "活気ある古い町には、独特な大理の白族文化と建築が息づいています。瓦猫と絞り染めは特に印象的です。ぜひ実際に体験することをお勧めします。",
      ko: "활기찬 고성과 독특한 대리 백족 문화 및 건축이 인상적입니다. 와마오와 박치기 염색은 특히 기억에 남습니다. 꼭 직접 체험해보시길 추천합니다."
    }
  },
  {
    link: "erhai-lake",
    name: "Erhai Lake",
    nameChinese: "洱海",
    namePinyin: "ěr hǎi",
    nameLocale: { root: "Erhai Lake", ja: "洱海" },
    city: "Dali",
    introduce: {
      root: `Alpine lake paradise for migratory birds.`,
      ja: "渡り鳥の楽園、高山湖。"
    },
    description: {
      root: "Relax by Erhai Lake, a serene freshwater paradise surrounded by majestic Cangshan mountains in Dali. Enjoy breathtaking scenery and peaceful boat rides.",
      ja: "蒼山に囲まれた美しい淡水の楽園、洱海を訪れてみませんか。大理での日中観光に最適で、渡り鳥ウォッチングやボートクルーズが楽しめる人気スポットです。"
    },
    location: "25.691843028779505, 100.20911543126708",
    index: 10,
    rating: 4.6,
    ticketPrice: 0,
    opensHour: [0, 24],
    visitDuration: [24, 48],
    address: { root: "No. 1 Henan Road, Xiaguan, Dali", ja: null },
    review: {
      root: `The lake's surface is as beautiful as a mirror, especially stunning with the majestic Cangshan Mountains and white clouds in the background. I recommend renting a car and driving around the lake—it takes about a day.`,
      ja: "湖面は鏡のように美しく、雄大な蒼山と白い雲が背景にあると特にきれいです。車を借りて湖を一周することをお勧めします。だいたい1日かかります。",
      ko: "호수 표면은 거울처럼 아름답고, 웅장한 창산과 흰 구름이 배경이 되어 더욱 아름답습니다. 차를 빌려 호수 주변을 한 바퀴 돌 것을 추천합니다. 대략 하루 정도 걸립니다."
    }
  },
  {
    link: "shuanglang-ancient-town",
    name: "Shuanglang Ancient Town",
    nameChinese: "双廊",
    namePinyin: "shuāng láng",
    nameLocale: { root: "Shuanglang Ancient Town", ja: "双廊古镇" },
    city: "Dali",
    introduce: {
      root: `Idyllic lakeside village with Erhai's best views.`,
      ja: "洱海の絶景が楽しめる村。"
    },
    description: {
      root: "Visit Shuanglang Ancient Town, a scenic gem on the northeast shore of Erhai Lake. Experience its charming traditions and picturesque landscapes.",
      ja: "双廊古镇を訪れてください。これは「蒼洱第一景」と称される町で、洱海の北東岸に位置しています。雄大な山と湖の眺めをお楽しみいただけます。"
    },
    location: "25.91094960504392, 100.1944973069662",
    rating: 4.3,
    ticketPrice: 0,
    opensHour: [0, 24],
    visitDuration: [1, 2],
    address: { root: "Dali Bai Autonomous Prefecture, Dali City, Wuyuan County", ja: null },
    review: {
      root: `Get up close to Erhai Lake with this opportunity; if your budget allows, stay in a room by the lake with large floor-to-ceiling windows. It’s an unforgettable experience.`,
      ja: "洱海に近づくチャンスです。予算が許せば、大きな窓のある湖畔の部屋に泊まってみてください。絶対に忘れられない体験になりますよ。",
      ko: "洱해(이해)와 가까워질 수 있는 기회입니다. 예산이 허락한다면 큰 창문이 있는 해변의 방에 머물러 보세요. 정말 잊지 못할 경험이 될 거예요."
    }
  },
  {
    link: "xizhou-ancient-town",
    name: "Xizhou Town",
    nameChinese: "喜洲",
    namePinyin: "xǐ zhōu gǔ zhèn",
    nameLocale: { root: "Xizhou Town", ja: "喜洲古镇" },
    city: "Dali",
    introduce: {
      root: "Millennia-old Bai ethnic architecture treasure.",
      ja: "白族建築の千年の町。"
    },
    description: {
      root: "Explore Xizhou Ancient Town, a millennium-old treasure of Bai architecture in Dali. Located west of Erhai Lake and backed by Cangshan Mountains.",
      ja: "喜洲古镇を探索しましょう。これは白族の建築美が息づく千年の宝で、大理の西、洱海の西側に位置し、背後には蒼山があります。"
    },
    location: "25.8544093748804, 100.14041968043915",
    rating: 4.5,
    ticketPrice: 0,
    opensHour: [0, 24],
    visitDuration: [3, 4],
    address: { root: "18 km north of Dali Ancient City, Dali Bai Autonomous Prefecture", ja: null }
  },
  {
    link: "linyin-temple",
    name: "Lingyin Temple",
    nameChinese: "灵隐寺",
    namePinyin: "líng yǐn sì",
    nameLocale: { root: "Lingyin Temple", ja: "灵隐寺" },
    city: "Hangzhou",
    introduce: {
      root: `Zen Buddhism's sacred site since 326 AD.`,
      ja: "326年建立の禅宗聖地。"
    },
    description: {
      root: "Discover Lingyin Temple, a revered Chan Buddhism temple in Hangzhou with nearly 1,700 years of history. Immerse yourself in its tranquil atmosphere.",
      ja: "約1700年の歴史を持つ杭州の灵隐寺を訪れてみませんか。非常に尊敬される禅宗寺院で、静かな雰囲気と豊かな文化遺産に触れることができます。"
    },
    location: "30.240821706010717, 120.10149272586732",
    rating: 3,
    ticketPrice: 75,
    opensHour: [6.5, 18],
    visitDuration: [1, 3],
    address: { root: "No. 1 Fayun Lane, Lingyin Road, Xihu District, Hangzhou", ja: null }
  },
  {
    link: "west-lake",
    name: "West Lake",
    nameChinese: "西湖",
    namePinyin: "xī hú",
    nameLocale: { root: "West Lake", ja: "西湖" },
    city: "Hangzhou",
    introduce: {
      root: "China's poetic lake with pagoda-dotted islands.",
      ja: "詩的な湖、中国十大名所。"
    },
    description: {
      root: "Experience the enchanting beauty of West Lake in Hangzhou, featuring iconic landmarks like Broken Bridge, Su Causeway, and Leifeng Pagoda.",
      ja: "杭州の西湖で息をのむような美しさを体験してください。中国十大景観の一つとして知られ、断橋、蘇堤、雷峰塔、三潭印月などの象徴的な名所を探索できます。"
    },
    location: "30.258246302437993, 120.15156117659153",
    index: 98,
    rating: 4,
    ticketPrice: 0,
    opensHour: [0, 24],
    visitDuration: [2, 3],
    address: { root: "West Lake Scenic Area, Xihu District, Hangzhou", ja: null },
    review: {
      root: "West Lake is great for a slow stroll, with lots of small spots that are easy to miss. The Broken Bridge area is crowded, but other parts are quiet. The scenic area is big and worth exploring.",
      ja: "西湖はゆっくり散歩するのにぴったりで、見逃しやすい小さなスポットがたくさんあります。壊れた橋の周辺は混んでいますが、他の場所は静かです。この広い景勝地は探検する価値があります。",
      ko: "서호는 천천히 걷기 좋고, 놓치기 쉬운 작은 명소가 많아요. 단교 주변은 사람이 많지만, 다른 곳은 조용해요. 이 넓은 관광지는 탐험할 가치가 있어요."
    }
  },
  {
    link: "lijiang-ancient-town",
    name: "Lijiang Ancient Town",
    nameChinese: "丽江",
    namePinyin: "lì jiāng",
    nameLocale: { root: "Lijiang Ancient Town", ja: "丽江古城" },
    city: "Lijiang",
    introduce: {
      root: "Canals & Naxi culture in UNESCO old town.",
      ja: "水路の街、世界遺産の古都。"
    },
    description: {
      root: `Explore Lijiang Ancient Town, a UNESCO site known as the 'Venice of the Orient.' Discover its 800-year history, canals, and unique architecture.`,
      ja: "世界遺産に登録された「東洋のヴェネツィア」として知られる麗江古城を訪れてみませんか。800年にわたる歴史、独特な建築様式、そして複雑な運河システムが魅力です。"
    },
    location: "26.876096896416577, 100.23341124532006",
    rating: 4.7,
    ticketPrice: 0,
    opensHour: [0, 24],
    visitDuration: [2, 3],
    address: {
      root: "50 meters south of the intersection of Xinhua Street and Jinhong Road, Gucheng District, Lijiang City",
      ja: null
    },
    review: {
      root: `In the old town, small lanes and streams crisscross, and every little path is worth exploring. However, it's quite crowded with a strong commercial vibe.`,
      ja: "古い町では小さな道と小川が複雑に絡んでいて、どの小道も探してみる価値があります。でも、観光客が多くて商業的な感じが強いです。",
      ko: "고성 안에는 작은 길과 개울이 얽혀 있어서 모든 골목이 탐험할 만해요. 하지만 관광객이 많고 상업적인 느낌이 강해요."
    }
  },
  {
    link: "shuhe-ancient-town",
    name: "Shuhe Ancient Town",
    nameChinese: "束河",
    namePinyin: "shù hé",
    nameLocale: { root: "Shuhe Ancient Town", ja: "束河古镇" },
    city: "Lijiang",
    introduce: {
      root: "Tea Horse Road gem with Naxi traditions.",
      ja: "茶馬古道の要衝、ナシ族の町。"
    },
    description: {
      root: "Visit Shuhe Ancient Town, a well-preserved stop on the historic Tea Horse Road. Admire Jade Dragon Snow Mountain and embrace Naxi culture.",
      ja: "麗江北部の束河古镇へ訪れてみませんか。煎茶馬古道の要所で、ナシ族文化の「生きた化石」。玉龍雪山の美景や、静かな古城の夜を満喫できる特別な場所です。"
    },
    location: "26.91652881591715, 100.20180535253954",
    rating: 4.5,
    ticketPrice: 0,
    opensHour: [0, 24],
    visitDuration: [1, 2],
    address: { root: "Shuhe Road, Gucheng District, Lijiang City", ja: null }
  },
  {
    link: "tiger-leaping-gorge",
    name: "Tiger Leaping Gorge",
    nameChinese: "虎跳峡",
    namePinyin: "hǔ tiào xiá",
    nameLocale: { root: "Tiger Leaping Gorge", ja: "虎跳峡" },
    city: "Lijiang",
    introduce: {
      root: "World's deepest canyon with raging rapids.",
      ja: "世界最深の峡谷、激流あり。"
    },
    description: {
      root: "Hike Tiger Leaping Gorge, one of the world’s deepest canyons near Lijiang. Marvel at breathtaking views of Jade Dragon and Haba Snow Mountains.",
      ja: "世界最深の峡谷之一・虎跳峽と「長江第一湾」を訪れてみませんか。麗江の玉龍雪山と哈巴雪山に囲まれた絶景地で、標識付きトレッキングコースで大自然の壮大さを満喫できます。"
    },
    location: "27.174093200598822, 100.09885439940953",
    ticketPrice: 73,
    rating: 4.6,
    opensHour: [8.5, 17.5],
    visitDuration: [2, 3],
    address: {
      root: "Tiger Leaping Gorge(Hutiaoxia Town), Shangri-La County, Diqing Prefecture",
      ja: null
    }
  },
  {
    link: "yulong-snow-moutain",
    name: "Yulong Snow Mountain",
    nameChinese: "玉龙雪山",
    namePinyin: "yù lóng xuě shān",
    nameLocale: { root: "Yulong Snow Mountain", ja: "玉龙雪山" },
    city: "Lijiang",
    introduce: {
      root: "Sacred snow-capped peaks & glacier adventures.",
      ja: "聖なる雪山と氷河の公園。"
    },
    description: {
      root: "Climb Yulong Snow Mountain, a sacred peak of the Naxi people in Lijiang. Explore Glacier Park and admire its snow-capped summits.",
      ja: "麗江の世界遺産・玉龍雪山を訪れてみませんか。ナシ族の聖山で、氷河公園を散策し、13の雪覆い峰々や標高5,596メートルの扇子陡からの絶景をぜひお楽しみください。"
    },
    location: "27.1014838299386, 100.19730515172101",
    ticketPrice: 60,
    rating: 4.5,
    opensHour: [7.5, 16.5],
    visitDuration: 8,
    address: { root: "15 km north of Lijiang Old Town, Yulong County, Lijiang City", ja: null }
  },
  {
    link: "badaguan-scenic-area",
    name: "Badaguan Scenic Area",
    nameLocale: { root: "Badaguan Scenic Area", ja: "八大関風景区" },
    city: "Qingdao",
    introduce: {
      root: "European-style villas nestled in coastal pines.",
      ja: "海岸松に囲まれた洋風別荘群。"
    },
    description: {
      root: "Discover Badaguan Scenic Area in Qingdao, home to exquisite early 20th-century villas showcasing diverse international architectural styles.",
      ja: "青島の八大関風景区を訪れてみませんか。ここは20世紀初頭の多様な国際的な建築様式が残る別荘地で、象徴的な建物たちが美しい自然の中に点在しています。"
    },
    location: "36.05362759268877, 120.35229781424212",
    rating: 4.5,
    ticketPrice: 0,
    opensHour: [0, 24],
    visitDuration: [2, 4],
    address: {
      root: "Northeast of Huiquanjiao, Shinan District, Qingdao (the north and south sides of Zhengyangguan Road)",
      ja: null
    }
  },
  {
    link: "qingdao-beer-museum",
    name: "Tsingtao Beer Museum",
    nameLocale: { root: "Tsingtao Beer Museum", ja: "青島ビール博物館" },
    city: "Qingdao",
    introduce: {
      root: `Interactive journey through China's beer history.`,
      ja: "中国ビールの歴史を体感。"
    },
    description: {
      root: "Explore the Tsingtao Beer Museum, located on the original Tsingtao Brewery site. Dive into beer culture and enjoy fresh brews in Qingdao.",
      ja: "1903年に設立された青島ビールの発祥の地にある青島ビール博物館を訪れてみませんか。ここではビール文化について深く学び、新鮮なビールを楽しむことができます。"
    },
    location: "36.07899382263798, 120.34688244520828",
    ticketPrice: 50,
    rating: 4.8,
    opensHour: [8.5, 16.5],
    visitDuration: [1, 3],
    address: {
      root: "THE WORLD OF TSINGTAO, No. 56 Dengzhou Road, Shibei District, Qingdao",
      ja: null
    }
  },
  {
    link: "qingdao-catholic-church",
    name: `St. Michael's Cathedral`,
    nameLocale: { root: `St. Michael's Cathedral`, ja: "聖ミカエル教会" },
    city: "Qingdao",
    introduce: {
      root: `Qingdao's largest Gothic cathedral landmark.`,
      ja: "青島最大のゴシック教会。"
    },
    description: {
      root: "Discover Qingdao Catholic Church, originally named St. Michael's Cathedral. China's only consecrated cathedral and Qingdao's largest Gothic structure.",
      ja: "青島カトリック教会を訪れてみませんか。もともとは「聖ミカエル大聖堂」として知られ、1932年に建設されました。中国で唯一の奉献された大聖堂であり、青島最大のゴシック建築です。"
    },
    location: "36.06797052588343, 120.32061873235487",
    rating: 1,
    ticketPrice: 0,
    address: { root: "No. 15, Zhejiang Road, Shinan District, Qingdao", ja: null }
  },
  {
    link: "yantai-hill",
    name: "Yantai Hill",
    nameLocale: { root: "Yantai Hill", ja: "烟台山" },
    city: "Yantai",
    introduce: {
      root: "Historic hilltop with coastal city vistas.",
      ja: "丘の上から街と海を一望。"
    },
    description: {
      root: "Discover Yantai Hill, a coastal landmark offering breathtaking views of the sea and historic consulates. A must-visit in this vibrant city.",
      ja: "海沿いの都市を象徴する烟台山を訪れてみませんか。各国の旧領事館跡を探索し、美しい海岸線の景色を満喫してください。"
    },
    location: "37.548561863330995, 121.40222752810229",
    rating: 4.5,
    ticketPrice: 0,
    opensHour: [0, 24],
    visitDuration: [1, 2],
    address: { root: "No. 7 Lixin Road, Zhifu District, Yantai City", ja: null }
  },
  {
    link: "chengdu-panda-research-base",
    name: "Chengdu Panda Research Base",
    nameLocale: { root: "Chengdu Panda Research Base", ja: "成都パンダ研究基地" },
    city: "Chengdu",
    introduce: {
      root: `World's premier giant panda conservation center.`,
      ja: "パンダ保護研究の中心地。"
    },
    description: {
      root: `Meet adorable pandas at Chengdu Panda Research Base, just 18 km from the city center. Experience conservation efforts and encounter newborn cubs.`,
      ja: "成都市中心から約18kmのパンダ研究基地へ。約120頭のジャイアントパンダや76頭のレッサーパンダが暮らす四川の人気スポットです！"
    },
    location: "30.73297989317107, 104.14587174771397",
    index: 100,
    ticketPrice: 55,
    rating: 4.5,
    opensHour: [7.5, 18],
    visitDuration: [3, 5],
    address: { root: "No. 1375, North Panda Avenue, Chenghua District, Chengdu", ja: null }
  },
  {
    link: "leshan-giant-buddha",
    name: "Leshan Giant Buddha",
    nameChinese: "乐山大佛",
    namePinyin: "lè shān dà fó",
    nameLocale: { root: "Leshan Giant Buddha", ja: "楽山大仏" },
    city: "Chengdu",
    introduce: {
      root: `71m stone Buddha carved into riverside cliff.`,
      ja: "世界遺産の71m巨大石仏。"
    },
    description: {
      root: `Visit the Leshan Giant Buddha, the world’s largest stone-carved Buddha and a UNESCO World Heritage Site. Discover its cultural significance.`,
      ja: "成都近くの楽山大仏を訪ねましょう。世界最大の石彫り仏像で、ユネスコ世界遺産にも登録。中国の象徴的なランドマークを日帰りで巡る旅行のコツや文化についてご紹介します。"
    },
    location: "29.54408422450847, 103.77153692303165",
    ticketPrice: 80,
    rating: 4.6,
    opensHour: [8, 22],
    visitDuration: [2, 4],
    address: { root: "2435 Lingyun Road, Shizhong District, Leshan City", ja: null }
  },
  {
    link: "chen-clan-academy",
    name: "Chen Clan Academy",
    nameChinese: "陈家祠",
    namePinyin: "chén jiā cí",
    nameLocale: { root: "Chen Clan Academy", ja: "陳氏書院" },
    city: "Guangzhou",
    introduce: {
      root: `Lingnan architectural gem with intricate carvings.`,
      ja: "嶺南建築の精緻な彫刻。"
    },
    description: {
      root: `Explore Chen Clan Academy, a Qing Dynasty masterpiece highlighting Lingnan culture and traditional craftsmanship. A must-see landmark in Guangzhou.`,
      ja: "広州を訪れたならぜひ見たい文化遺産、陳氏書院をご紹介します。清朝の建築美と嶺南文化の独特な魅力、精巧な伝統工芸を間近で体感できます。"
    },
    location: "23.12986686439901, 113.24011298711086",
    ticketPrice: 10,
    rating: 4.2,
    opensHour: [9, 17],
    visitDuration: [1, 2],
    website: "https://www.gzcjc.com.cn",
    address: { root: "Zhongshan 7th Road, Guangzhou, China", ja: "広州市中山七路" }
  },
  {
    link: "shamian-island",
    name: "Shamian Island",
    nameChinese: "沙面岛",
    namePinyin: "shā miàn dǎo",
    nameLocale: { root: "Shamian Island", ja: "沙面島" },
    city: "Guangzhou",
    introduce: {
      root: `European colonial architecture enclave.`,
      ja: "ヨーロッパ風建築の歴史地区。"
    },
    description: {
      root: `Experience Shamian Island, a historic district in Guangzhou famed for its preserved European architecture. Enjoy its serene ambiance and unique charm.`,
      ja: "広州にある沙面島を訪れて、保存状態の良い欧風建築と独特な雰囲気を満喫してください。歴史文化地区としての魅力を感じられる静かなスポットです。"
    },
    location: "23.106777729604453, 113.24475981677743",
    ticketPrice: 0,
    rating: 4.3,
    opensHour: [0, 24],
    visitDuration: [1, 2],
    address: { root: "No. 53-54, Shabei North Street, Liwan District, Guangzhou", ja: null }
  },
  {
    link: "hualin-temple",
    name: "Hualin Temple",
    nameChinese: "华林寺",
    namePinyin: "huá lín sì",
    nameLocale: { root: "Hualin Temple", ja: "華林寺" },
    city: "Guangzhou",
    introduce: {
      root: `Houses Sakyamuni's sacred relics since 526AD.`,
      ja: "釈迦の真舎利を安置する寺。"
    },
    description: {
      root: `Visit Hualin Temple in Guangzhou, a historic Buddhist temple enshrining Sakyamuni’s relics. Immerse yourself in its profound spiritual atmosphere.`,
      ja: "広州にある華林寺を訪れて、釈迦牟尼の遺骨が祀られる聖地を参拝し、深い仏教文化と精神的な雰囲気を感じてください。歴史ある寺院での心の旅をお楽しみください。"
    },
    location: "23.11629751225425, 113.2471946787334",
    ticketPrice: 0,
    rating: 4.2,
    opensHour: [8, 17],
    visitDuration: [1, 2],
    address: { root: "Xiajiu Road, Liwan District, Guangzhou 510140, China", ja: null }
  },
  {
    link: "jinshanling-great-wall",
    name: "Jinshanling Great Wall",
    nameChinese: "金山岭长城",
    nameLocale: { root: "Jinshanling Great Wall", ja: "金山嶺長城" },
    city: "Beijing",
    introduce: {
      root: `Pristine Great Wall with stunning views and history.`,
      ja: "美しい景観と歴史が残る長城。"
    },
    description: {
      root: `Discover Jinshanling Great Wall, a well-preserved segment of China's iconic landmark. Enjoy breathtaking landscapes, unique architectural designs.`,
      ja: "金山嶺長城は、保存状態の良い敵楼や壮観な自然风光が魅力です。歴史的な体験と美しい景色をお楽しみください。訪問者の皆様に感動を届けます。"
    },
    location: "40.68257150815132, 117.24350878229171",
    ticketPrice: 198,
    rating: 4.7,
    opensHour: [6, 17.5],
    visitDuration: [12, 24],
    tags: [GreatWall, AncientRuins],
    review: {
      root: "If you have more time, better stamina, dislike crowds, and prefer in-depth exploration, the Jinshanling Great Wall is a better choice than Badaling.",
      ja: "時間が少し多くあり、体力に自信があり、混雑した場所が好きではなく、深く探検したい場合、金山嶺の長城は八達嶺よりも良い選択です。"
    },
    address: {
      root: "Hualougou Village, Bakshiying Town, Luanping County, Chengde City, Hebei Province",
      ja: null
    }
  },
  {
    link: "simatai-great-wall",
    name: "Simatai Great Wall",
    nameChinese: "司马台长城",
    nameLocale: { root: "Simatai Great Wall", ja: "司马台長城" },
    city: "Beijing",
    introduce: {
      root: `Night hike on the Great Wall's most dangerous section.`,
      ja: "最も危険な区間で夜間ハイキングを楽しむ。"
    },
    description: {
      root: `Explore Simatai Great Wall, the most dangerous section of the Great Wall, known for its steep climbs and thrilling night hikes.`,
      ja: "司马台長城は中国の万里の長城の中で最も危険な区間で、険しい登山と夜間ハイキングが楽しめる場所です～～"
    },
    location: "40.65040016423259, 117.2428358517268",
    ticketPrice: 40,
    rating: 4.6,
    opensHour: [8, 22],
    visitDuration: [2, 4],
    tags: [GreatWall, AncientRuins],
    review: {
      root: "The most perilous section of the Great Wall, guaranteed to get your adrenaline pumping; A unique night tour experience of the Great Wall, feel like a guardian soldier stationed on the wall.",
      ja: "最も危険な長城、あなたのアドレナリンを駆り立てます；他に類を見ない夜の長城ツアー、まるで長城の守備軍になったかのような体験ができます。"
    },
    address: { root: "North of Simatai Village, Gubeikou Town, Miyun County, Beijing", ja: null }
  },
  {
    link: "mutianyu-great-wall",
    name: "Mutianyu Great Wall",
    nameChinese: "慕田峪长城",
    nameLocale: { root: "Mutianyu Great Wall", ja: "慕田峪長城" },
    city: "Beijing",
    introduce: {
      root: `Scenic Great Wall, peaceful and perfect for family visits.`,
      ja: "美しい長城、静かで家族旅行に最適。"
    },
    description: {
      root: `Discover the Mutianyu Great Wall, a masterpiece of ancient Chinese architecture with stunning views, rich history, and fewer crowds than other sections.`,
      ja: "北京近郊の慕田峪長城は、他の区画よりも静かで、素晴らしい眺めと豊かな歴史を持つ古代中国の建築技術の傑作です。ハイキングや写真撮影に最適な場所です。"
    },
    location: "40.4331872 ,116.5395605",
    ticketPrice: 45,
    rating: 4.8,
    opensHour: [8, 17.5],
    visitDuration: [3, 5],
    tags: [GreatWall, AncientRuins],
    review: {
      root: "Compared to Badaling, Mutianyu offers the same stunning scenery but with lower difficulty and fewer crowds, making it an ideal destination for family trips.",
      ja: "八達嶺と比べて、慕田峪長城は同じ素晴らしい景色を提供しますが、難易度が低く、人も少ないため、家族旅行に最適な目的地です。"
    },
    index: 90,
    address: { root: "Mutianyu Village, Bohai Town, Huairou District, Beijing", have: null },
    website: "https://en.mutianyugreatwall.com"
  },
  {
    link: "badaling-great-wall",
    name: "Badaling Great Wall",
    nameChinese: "八达岭长城",
    nameLocale: { root: "Badaling Great Wall", ja: "八達嶺長城" },
    city: "Beijing",
    introduce: {
      root: `UNESCO-listed Great Wall, 1 hour from Beijing!`,
      ja: "北京から1時間、ユネスコ世界遺産の長城！"
    },
    description: {
      root: `Explore the majestic Badaling Great Wall, a UNESCO World Heritage site offering panoramic views and deep insights into ancient Chinese history.`,
      ja: "ユネスコ世界遺産である八達嶺長城を探索しましょう。ここでは、壮大なパノラマビューと古代中国の歴史について深い洞察を得ることができます。"
    },
    location: "40.3597596,116.0174455",
    ticketPrice: 35,
    rating: 4.7,
    opensHour: [7.5, 16],
    visitDuration: [3, 4],
    tags: [GreatWall, AncientRuins],
    review: {
      root: `A true classic, yet it's too crowded, seriously too crowded. There are many other Great Wall sites to explore.`,
      ja: `まさに定番の観光地、唯一の問題は人が多すぎること、本当に多すぎます。しかし、他にも多くの長城のスポットがありますよ！`
    },
    address: {
      root: "Exit 58 of G6 Beijing-Lhasa Expressway, Yanqing District, Beijing"
    }
  }
];
const attractionsHashSet = /* @__PURE__ */ new Set();
const attractionsPageSet = /* @__PURE__ */ new Set();
attractions.forEach((attraction) => {
  if (attractionsHashSet.has(attraction.city)) {
    attractionsPageSet.add(attraction.city);
  }
  attractionsHashSet.add(attraction.city);
});
const Allianceid = 5902037;
const advertisements = {
  Chongqing: {
    flightsBanner: {
      root: {
        default: `<iframe border="0" src="https://www.trip.com/partners/ad/DB1255179?Allianceid=5902037&SID=164267118&trip_sub1=flights-banner" style="width:728px;height:90px" frameborder="0" scrolling="no" style="border:none" id="DB1255179"></iframe>`,
        mobile: `<iframe border="0" src="https://www.trip.com/partners/ad/DB1274625?Allianceid=5902037&SID=164267118&trip_sub1=flights-banner-mobile" :tyle="width:300px;height:250px" frameborder="0" scrolling="no" style="border:none" id="DB1274625"></iframe>`
      },
      ja: {
        default: `<iframe border="0" src="https://jp.trip.com/partners/ad/DB1255543?Allianceid=5902037&SID=164267118&trip_sub1=flights-banner" style="width:728px;height:90px" frameborder="0" scrolling="no" style="border:none" id="DB1255543"></iframe>`,
        mobile: `<iframe border="0" src="https://jp.trip.com/partners/ad/DB1274968?Allianceid=5902037&SID=164267118&trip_sub1=flights-banner-mobile" style="width:300px;height:250px" frameborder="0" scrolling="no" style="border:none" id="DB1274968"></iframe>`
      }
    },
    flightsSearchBox: {
      root: '<iframe border="0" src="https://www.trip.com/partners/ad/S1273071?Allianceid=5902037&SID=164267118&trip_sub1=aside" style="width:352px;height:337px" frameborder="0" scrolling="no" style="border:none" id="S1273071"></iframe>',
      ja: '<iframe border="0" src="https://jp.trip.com/partners/ad/S1646003?Allianceid=5902037&SID=164267118&trip_sub1=aside" style="width:352px;height:337px" frameborder="0" scrolling="no" style="border:none" id="S1646003"></iframe>'
    },
    hotelsSearchBox: {
      root: '<iframe border="0" src="https://www.trip.com/partners/ad/S1650567?Allianceid=5902037&SID=164267118&trip_sub1=asides" style="width:352px;height:337px" frameborder="0" scrolling="no" style="border:none" id="S1650567"></iframe>',
      ja: '<iframe border="0" src="https://jp.trip.com/partners/ad/S1650602?Allianceid=5902037&SID=164267118&trip_sub1=asides" style="width:352px;height:337px" frameborder="0" scrolling="no" style="border:none" id="S1650602"></iframe>'
    },
    trainsSearchBox: {
      root: '<iframe border="0" src="https://www.trip.com/partners/ad/S1650623?Allianceid=5902037&SID=164267118&trip_sub1=asides" style="width:352px;height:337px" frameborder="0" scrolling="no" style="border:none" id="S1650623"></iframe>',
      ja: '<iframe border="0" src="https://jp.trip.com/partners/ad/S1650637?Allianceid=5902037&SID=164267118&trip_sub1=asides" style="width:352px;height:337px" frameborder="0" scrolling="no" style="border:none" id="S1650637"></iframe>'
    }
  },
  Chengdu: {
    flightsSearchBox: {
      root: '<iframe border="0" src="https://www.trip.com/partners/ad/S1660339?Allianceid=5902037&SID=164267118&trip_sub1=aside" style="width:352px;height:337px" frameborder="0" scrolling="no" style="border:none" id="S1660339"></iframe>',
      ja: '<iframe border="0" src="https://jp.trip.com/partners/ad/S1660353?Allianceid=5902037&SID=164267118&trip_sub1=aside" style="width:352px;height:337px" frameborder="0" scrolling="no" style="border:none" id="S1660353"></iframe>'
    },
    hotelsSearchBox: {
      root: '<iframe border="0" src="https://www.trip.com/partners/ad/S1660290?Allianceid=5902037&SID=164267118&trip_sub1=aside" style="width:352px;height:337px" frameborder="0" scrolling="no" style="border:none" id="S1660290"></iframe>',
      ja: '<iframe border="0" src="https://jp.trip.com/partners/ad/S1660318?Allianceid=5902037&SID=164267118&trip_sub1=aside" style="width:352px;height:337px" frameborder="0" scrolling="no" style="border:none" id="S1660318"></iframe>'
    },
    trainsSearchBox: {
      root: '<iframe border="0" src="https://www.trip.com/partners/ad/S1660367?Allianceid=5902037&SID=164267118&trip_sub1=aside" style="width:352px;height:337px" frameborder="0" scrolling="no" style="border:none" id="S1660367"></iframe>',
      ja: '<iframe border="0" src="https://jp.trip.com/partners/ad/S1660374?Allianceid=5902037&SID=164267118&trip_sub1=aside" style="width:352px;height:337px" frameborder="0" scrolling="no" style="border:none" id="S1660374"></iframe>'
    }
  },
  Hangzhou: {
    flightsSearchBox: {
      root: '<iframe border="0" src="https://www.trip.com/partners/ad/S1660451?Allianceid=5902037&SID=164267118&trip_sub1=aside" style="width:352px;height:337px" frameborder="0" scrolling="no" style="border:none" id="S1660451"></iframe>',
      ja: '<iframe border="0" src="https://jp.trip.com/partners/ad/S1660465?Allianceid=5902037&SID=164267118&trip_sub1=aside" style="width:352px;height:337px" frameborder="0" scrolling="no" style="border:none" id="S1660465"></iframe>'
    },
    hotelsSearchBox: {
      root: '<iframe border="0" src="https://www.trip.com/partners/ad/S1660409?Allianceid=5902037&SID=164267118&trip_sub1=" style="width:352px;height:337px" frameborder="0" scrolling="no" style="border:none" id="S1660409"></iframe>',
      ja: '<iframe border="0" src="https://jp.trip.com/partners/ad/S1660416?Allianceid=5902037&SID=164267118&trip_sub1=aside" style="width:352px;height:337px" frameborder="0" scrolling="no" style="border:none" id="S1660416"></iframe>'
    },
    trainsSearchBox: {
      root: '<iframe border="0" src="https://www.trip.com/partners/ad/S1660472?Allianceid=5902037&SID=164267118&trip_sub1=aside" style="width:352px;height:337px" frameborder="0" scrolling="no" style="border:none" id="S1660472"></iframe>',
      ja: '<iframe border="0" src="https://www.trip.com/partners/ad/S1660472?Allianceid=5902037&SID=164267118&trip_sub1=aside" style="width:352px;height:337px" frameborder="0" scrolling="no" style="border:none" id="S1660472"></iframe>'
    }
  },
  Dali: {
    hotelsSearchBox: {
      root: '<iframe border="0" src="https://www.trip.com/partners/ad/S1660549?Allianceid=5902037&SID=164267118&trip_sub1=aside" style="width:352px;height:337px" frameborder="0" scrolling="no" style="border:none" id="S1660549"></iframe>',
      ja: '<iframe border="0" src="https://jp.trip.com/partners/ad/S1660570?Allianceid=5902037&SID=164267118&trip_sub1=aside" style="width:352px;height:337px" frameborder="0" scrolling="no" style="border:none" id="S1660570"></iframe>'
    },
    flightsSearchBox: {
      root: '<iframe border="0" src="https://www.trip.com/partners/ad/S1660577?Allianceid=5902037&SID=164267118&trip_sub1=aside" style="width:352px;height:337px" frameborder="0" scrolling="no" style="border:none" id="S1660577"></iframe>',
      ja: '<iframe border="0" src="https://jp.trip.com/partners/ad/S1660584?Allianceid=5902037&SID=164267118&trip_sub1=aside" style="width:352px;height:337px" frameborder="0" scrolling="no" style="border:none" id="S1660584"></iframe>'
    },
    trainsSearchBox: {
      root: '<iframe border="0" src="https://www.trip.com/partners/ad/S1660591?Allianceid=5902037&SID=164267118&trip_sub1=aside" style="width:352px;height:337px" frameborder="0" scrolling="no" style="border:none" id="S1660591"></iframe>',
      ja: '<iframe border="0" src="https://jp.trip.com/partners/ad/S1660598?Allianceid=5902037&SID=164267118&trip_sub1=aside" style="width:352px;height:337px" frameborder="0" scrolling="no" style="border:none" id="S1660598"></iframe>'
    }
  },
  Lijiang: {
    hotelsSearchBox: {
      root: '<iframe border="0" src="https://www.trip.com/partners/ad/S1660633?Allianceid=5902037&SID=164267118&trip_sub1=aside" style="width:352px;height:337px" frameborder="0" scrolling="no" style="border:none" id="S1660633"></iframe>',
      ja: '<iframe border="0" src="https://jp.trip.com/partners/ad/S1660654?Allianceid=5902037&SID=164267118&trip_sub1=aside" style="width:352px;height:337px" frameborder="0" scrolling="no" style="border:none" id="S1660654"></iframe>'
    },
    flightsSearchBox: {
      root: '<iframe border="0" src="https://www.trip.com/partners/ad/S1660661?Allianceid=5902037&SID=164267118&trip_sub1=aside" style="width:352px;height:337px" frameborder="0" scrolling="no" style="border:none" id="S1660661"></iframe>',
      ja: '<iframe border="0" src="https://jp.trip.com/partners/ad/S1660682?Allianceid=5902037&SID=164267118&trip_sub1=aside" style="width:352px;height:337px" frameborder="0" scrolling="no" style="border:none" id="S1660682"></iframe>'
    },
    trainsSearchBox: {
      root: '<iframe border="0" src="https://www.trip.com/partners/ad/S1660689?Allianceid=5902037&SID=164267118&trip_sub1=aside" style="width:352px;height:337px" frameborder="0" scrolling="no" style="border:none" id="S1660689"></iframe>',
      ja: '<iframe border="0" src="https://jp.trip.com/partners/ad/S1660696?Allianceid=5902037&SID=164267118&trip_sub1=aside" style="width:352px;height:337px" frameborder="0" scrolling="no" style="border:none" id="S1660696"></iframe>'
    }
  },
  Qingdao: {
    hotelsSearchBox: {
      root: '<iframe border="0" src="https://www.trip.com/partners/ad/S1660738?Allianceid=5902037&SID=164267118&trip_sub1=aside" style="width:352px;height:337px" frameborder="0" scrolling="no" style="border:none" id="S1660738"></iframe>',
      ja: '<iframe border="0" src="https://jp.trip.com/partners/ad/S1660759?Allianceid=5902037&SID=164267118&trip_sub1=aside" style="width:352px;height:337px" frameborder="0" scrolling="no" style="border:none" id="S1660759"></iframe>'
    },
    flightsSearchBox: {
      root: '<iframe border="0" src="https://www.trip.com/partners/ad/S1660773?Allianceid=5902037&SID=164267118&trip_sub1=aside" style="width:352px;height:337px" frameborder="0" scrolling="no" style="border:none" id="S1660773"></iframe>',
      ja: '<iframe border="0" src="https://jp.trip.com/partners/ad/S1660787?Allianceid=5902037&SID=164267118&trip_sub1=aside" style="width:352px;height:337px" frameborder="0" scrolling="no" style="border:none" id="S1660787"></iframe>'
    },
    trainsSearchBox: {
      root: '<iframe border="0" src="https://www.trip.com/partners/ad/S1660808?Allianceid=5902037&SID=164267118&trip_sub1=aside" style="width:352px;height:337px" frameborder="0" scrolling="no" style="border:none" id="S1660808"></iframe>',
      ja: '<iframe border="0" src="https://jp.trip.com/partners/ad/S1660829?Allianceid=5902037&SID=164267118&trip_sub1=aside" style="width:352px;height:337px" frameborder="0" scrolling="no" style="border:none" id="S1660829"></iframe>'
    }
  },
  "Chongqing Zoo": {
    tickets: "https://www.trip.com/travel-guide/attraction/chongqing/chongqing-zoo-78160"
  },
  "Two Rivers Cruise": {
    tickets: "https://www.trip.com/travel-guide/attraction/chongqing/chongqing-two-rivers-night-tour-13228641"
  },
  "Dazu Rock Carvings": {
    tickets: "https://www.trip.com/travel-guide/attraction/chongqing/dazu-rock-carving-78129"
  },
  "Yangtze River Cableway": {
    tickets: "https://www.trip.com/travel-guide/attraction/chongqing/chongqing-changjiang-cableway-91483"
  },
  "Chongsheng Three Pagodas": {
    tickets: "https://www.trip.com/travel-guide/attraction/dali/the-chongsheng-temple-and-the-three-pagoda-culture-tourist-area-75915"
  },
  "Tiger Leaping Gorge": {
    tickets: "https://www.trip.com/travel-guide/attraction/shangri-la/tiger-leaping-gorge-10558694"
  },
  "Yulong Snow Mountain": {
    tickets: "https://www.trip.com/travel-guide/attraction/yulong/yulong-snow-mountain-75919"
  },
  "Qingdao Beer Museum": {
    tickets: "https://www.trip.com/travel-guide/attraction/qingdao/tsingtao-beer-museum-10559061"
  },
  "Chengdu Panda Research Base": {
    tickets: "https://www.trip.com/travel-guide/attraction/chengdu/chengdu-research-base-of-giant-panda-breeding-76342"
  },
  "Leshan Giant Buddha": {
    tickets: "https://www.trip.com/travel-guide/attraction/leshan/leshan-giant-buddha-76386"
  },
  "Jinshanling Great Wall": {
    tickets: "https://www.trip.com/travel-guide/attraction/luanping/jinshanling-great-wall-76728"
  },
  "Simatai Great Wall": {
    tickets: "https://www.trip.com/travel-guide/attraction/beijng/great-wall-at-simatai-10558681"
  },
  "Mutianyu Great Wall": {
    tickets: "https://www.trip.com/travel-guide/attraction/beijng/mutianyu-great-wall-75609"
  },
  "Badaling Great Wall": {
    tickets: "https://www.trip.com/travel-guide/attraction/beijng/badaling-great-wall-75596"
  }
};
const _hoisted_1$a = { class: "ticket" };
const _hoisted_2$8 = { class: "title" };
const _hoisted_3$6 = ["href"];
const _hoisted_4$4 = { class: "ticket-button" };
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "AttractionTicket",
  props: {
    name: {
      type: String,
      required: true
    },
    nameLocale: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  },
  setup(__props) {
    const { localeIndex } = useData$1();
    const { currency, formattedAmount } = useCurrency(__props.price || 0);
    const ticketsUrl = computed(
      () => {
        var _a;
        return `${(_a = advertisements[__props.name]) == null ? void 0 : _a.tickets}?curr=${currency.value}&Allianceid=${Allianceid}&SID=164267118&trip_sub1=attraction_tickets`;
      }
    );
    const message2 = {
      root: () => `Tickets from CNY ${__props.price}${currency.value !== "CNY" ? ` / roughly ${formattedAmount.value}` : ""}`,
      ja: () => `観光チケット 人民元${__props.price}元${currency.value !== "CNY" ? `（約${formattedAmount.value}）` : ""}〜`
    };
    return (_ctx, _cache) => {
      var _a;
      const _component_ClientOnly = resolveComponent("ClientOnly");
      const _component_Translate = resolveComponent("Translate");
      return openBlock(), createElementBlock("div", _hoisted_1$a, [
        createBaseVNode("div", _hoisted_2$8, [
          createVNode(_component_ClientOnly, null, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(message2[unref(localeIndex)]()), 1)
            ]),
            _: 1
          })
        ]),
        ((_a = unref(advertisements)[__props.name]) == null ? void 0 : _a.tickets) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          _cache[1] || (_cache[1] = createBaseVNode("div", { class: "affiliate" }, [
            createBaseVNode("div", null, "powered by"),
            createBaseVNode("div", null, [
              createBaseVNode("img", { src: "https://ak-d.tripcdn.com/images/05E5p12000cga1phzA0ED.webp" })
            ])
          ], -1)),
          createVNode(_component_ClientOnly, null, {
            default: withCtx(() => [
              createBaseVNode("a", {
                href: ticketsUrl.value,
                target: "_blank",
                rel: "nofollow"
              }, [
                createBaseVNode("div", _hoisted_4$4, [
                  createVNode(_component_Translate, null, {
                    default: withCtx(() => _cache[0] || (_cache[0] = [
                      createTextVNode("Book Tickets")
                    ])),
                    _: 1
                  })
                ])
              ], 8, _hoisted_3$6)
            ]),
            _: 1
          })
        ], 64)) : createCommentVNode("", true)
      ]);
    };
  }
});
const AttractionTicket = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-49ba6448"]]);
const _hoisted_1$9 = { class: "container" };
const _hoisted_2$7 = { key: 0 };
const _hoisted_3$5 = {
  key: 1,
  class: "text"
};
const _hoisted_4$3 = {
  key: 2,
  class: "divider"
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "Breadcrumb",
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_Link = resolveComponent("Link");
      return openBlock(), createElementBlock("nav", null, [
        createBaseVNode("div", _hoisted_1$9, [
          createBaseVNode("ul", {
            class: normalizeClass(["breadcrumb", { [`col-${__props.list.length}`]: true }])
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.list, (item, i) => {
              return openBlock(), createElementBlock(Fragment, {
                key: item.name
              }, [
                item.link ? (openBlock(), createElementBlock("li", _hoisted_2$7, [
                  createVNode(_component_Link, {
                    href: item.link
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.name), 1)
                    ]),
                    _: 2
                  }, 1032, ["href"])
                ])) : (openBlock(), createElementBlock("li", _hoisted_3$5, toDisplayString(item.name), 1)),
                i < __props.list.length - 1 ? (openBlock(), createElementBlock("li", _hoisted_4$3, "›")) : createCommentVNode("", true)
              ], 64);
            }), 128))
          ], 2),
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])
      ]);
    };
  }
});
const Breadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-d413ae47"]]);
const _hoisted_1$8 = { class: "image-gallery" };
const _hoisted_2$6 = { class: "large-image" };
const _hoisted_3$4 = {
  key: 0,
  class: "thumbnail-list",
  ref: "thumbnailList"
};
const pageSize = 11;
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "PhotoSlide",
  props: {
    thumbnails: {
      type: Array,
      required: true
    },
    photos: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const current = ref(0);
    const currentPhoto = computed(() => {
      var _a;
      return (_a = __props.photos) == null ? void 0 : _a[current.value];
    });
    return (_ctx, _cache) => {
      var _a, _b, _c;
      const _component_LazyLoadImage = resolveComponent("LazyLoadImage");
      return openBlock(), createElementBlock("div", _hoisted_1$8, [
        createBaseVNode("div", _hoisted_2$6, [
          currentPhoto.value ? (openBlock(), createBlock(_component_LazyLoadImage, {
            key: 0,
            src: currentPhoto.value,
            alt: "Photo of attraction"
          }, null, 8, ["src"])) : createCommentVNode("", true),
          current.value > 0 ? (openBlock(), createElementBlock("span", {
            key: 1,
            class: "left",
            onClick: _cache[0] || (_cache[0] = ($event) => current.value = current.value - 1)
          }, "❮")) : createCommentVNode("", true),
          current.value < ((_a = __props.photos) == null ? void 0 : _a.length) - 1 ? (openBlock(), createElementBlock("span", {
            key: 2,
            class: "right",
            onClick: _cache[1] || (_cache[1] = ($event) => current.value = current.value + 1)
          }, "❯")) : createCommentVNode("", true)
        ]),
        ((_b = __props.thumbnails) == null ? void 0 : _b.length) > 1 ? (openBlock(), createElementBlock("div", _hoisted_3$4, [
          (openBlock(true), createElementBlock(Fragment, null, renderList((_c = __props.thumbnails) == null ? void 0 : _c.slice(0, pageSize), (thumbnail, index) => {
            return openBlock(), createBlock(_component_LazyLoadImage, {
              key: index,
              src: thumbnail,
              onClick: ($event) => current.value = index,
              alt: "thumbnails"
            }, null, 8, ["src", "onClick"]);
          }), 128))
        ], 512)) : createCommentVNode("", true)
      ]);
    };
  }
});
const PhotoSlide = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-113d7e74"]]);
const starSvg = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1740919466111'%20class='icon'%20viewBox='0%200%201054%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='6219'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='205.859375'%20height='200'%3e%3cpath%20d='M570.477039%2028.040397L694.725004%20290.073071a48.345512%2048.345512%200%200%200%2036.259134%2027.073486l281.370879%2043.027506a48.345512%2048.345512%200%200%201%2027.073486%2081.703915l-206.435335%20211.269886a48.345512%2048.345512%200%200%200-13.053288%2042.060595L870.219212%20966.910236a48.345512%2048.345512%200%200%201-67.683717%2052.696607l-253.813936-115.545773a48.345512%2048.345512%200%200%200-40.126775%200l-255.747757%20115.062318A48.345512%2048.345512%200%200%201%20185.16331%20966.910236l48.345512-268.801046a48.345512%2048.345512%200%200%200-13.053288-42.060595L14.020198%20443.811798A48.345512%2048.345512%200%200%201%2041.093685%20362.591338l281.370879-43.027505A48.345512%2048.345512%200%200%200%20358.723697%20290.073071L483.455118%2028.040397a48.345512%2048.345512%200%200%201%2087.021921%200z'%20fill='%23FFCE00'%20p-id='6220'%3e%3c/path%3e%3cpath%20d='M1039.911958%20443.811798a48.345512%2048.345512%200%200%200-27.073486-81.703915l-281.370879-43.027505a48.345512%2048.345512%200%200%201-36.742589-29.007307L570.477039%2028.040397a48.345512%2048.345512%200%200%200-43.510961-28.040397v898.743064a48.345512%2048.345512%200%200%201%2019.82166%204.351096l253.813937%20115.545773A48.345512%2048.345512%200%200%200%20870.219212%20966.910236l-48.345512-268.801046a48.345512%2048.345512%200%200%201%2013.053288-42.060595z'%20fill='%23FFEC00'%20p-id='6221'%3e%3c/path%3e%3c/svg%3e";
const _hoisted_1$7 = { class: "rating" };
const _hoisted_2$5 = ["src", "alt"];
const _hoisted_3$3 = { class: "text" };
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "Rating",
  props: {
    star: {
      type: Number
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", _hoisted_1$7, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(new Array(Math.ceil(__props.star) || 0), (_, i) => {
          return openBlock(), createElementBlock("span", {
            class: "star",
            key: i
          }, [
            createBaseVNode("img", {
              class: normalizeClass({ half: i + 1 > __props.star }),
              src: unref(starSvg),
              alt: `${i} star`
            }, null, 10, _hoisted_2$5)
          ]);
        }), 128)),
        createBaseVNode("span", _hoisted_3$3, [
          createBaseVNode("b", null, toDisplayString(__props.star), 1),
          _cache[0] || (_cache[0] = createTextVNode(" /5"))
        ])
      ]);
    };
  }
});
const Rating = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-58dc0358"]]);
const _hoisted_1$6 = { class: "page-header" };
const _hoisted_2$4 = { key: 0 };
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "PageHeader",
  props: ["slogan", "href", "name", "nameLocale", "subname"],
  setup(__props) {
    const { lang, localeIndex, frontmatter } = useData$1();
    const { $t } = useLocale();
    return (_ctx, _cache) => {
      const _component_Link = resolveComponent("Link");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("header", _hoisted_1$6, [
          __props.name ? (openBlock(), createElementBlock("h1", _hoisted_2$4, toDisplayString(__props.nameLocale), 1)) : createCommentVNode("", true),
          createBaseVNode("div", null, [
            renderSlot(_ctx.$slots, "subname", {}, void 0, true),
            __props.href ? (openBlock(), createBlock(_component_Link, {
              key: 0,
              href: __props.href
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref($t)(__props.subname)), 1)
              ]),
              _: 1
            }, 8, ["href"])) : createCommentVNode("", true)
          ])
        ]),
        renderSlot(_ctx.$slots, "after-tag", {}, void 0, true)
      ], 64);
    };
  }
});
const PageHeader = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-49808202"]]);
const _sfc_main$7 = {
  __name: "SubNav",
  props: {
    label: {
      type: String
    }
  },
  setup(__props) {
    const subNavRef = ref(null);
    const isTop = ref(false);
    const handleScroll = () => {
      const selfHeight = subNavRef.value.clientHeight;
      const navHeight = document.querySelector(".VPNav").clientHeight;
      const rect = subNavRef.value.getBoundingClientRect();
      const distanceFromNav = rect.top - navHeight + selfHeight;
      const nextIsTop = distanceFromNav <= 0;
      if (isTop.value !== nextIsTop) {
        eventBus.$emit("subnav-scroll", nextIsTop);
        isTop.value = nextIsTop;
      }
    };
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "subNavContainer",
        ref_key: "subNavRef",
        ref: subNavRef
      }, [
        createVNode(SubNavBar)
      ], 512);
    };
  }
};
const SubNav = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-25e16c73"]]);
const clockSvg = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1740915848528'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='5546'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='200'%20height='200'%3e%3cpath%20d='M512%20901.12a389.12%20389.12%200%201%201%20389.12-389.12%20389.5296%20389.5296%200%200%201-389.12%20389.12z%20m0-737.28a348.16%20348.16%200%201%200%20348.16%20348.16A348.5696%20348.5696%200%200%200%20512%20163.84z'%20p-id='5547'%3e%3c/path%3e%3cpath%20d='M491.52%20225.28h40.96v81.92h-40.96zM225.28%20491.52h81.92v40.96h-81.92zM491.52%20716.8h40.96v81.92h-40.96zM716.8%20491.52h81.92v40.96h-81.92zM512%20541.0816L374.784%20403.456l28.672-28.672%20108.544%20108.1344%20169.984-169.5744%2028.672%2028.672-198.656%20199.0656z'%20p-id='5548'%3e%3c/path%3e%3c/svg%3e";
const madelSvg = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1741101468411'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='4661'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='200'%20height='200'%3e%3cpath%20d='M739.411672%20901.766737c0-15.575579%2012.611368-28.186947%2028.186947-28.186948h109.756632a12.180211%2012.180211%200%200%200%208.623157-20.803368l-206.578526-206.578526-82.135579-82.189474a120.562526%20120.562526%200%200%200-170.496%200L344.632724%20646.197895%20138.054198%20852.776421a12.180211%2012.180211%200%200%200%208.623158%2020.803368h109.756631c15.575579%200%2028.186947%2012.611368%2028.186948%2028.186948v109.756631c0%2010.886737%2013.123368%2016.330105%2020.830316%208.623158l206.578526-206.551579%20206.578526%20206.578527a12.180211%2012.180211%200%200%200%2020.803369-8.650106v-109.756631z'%20fill='%23ED2061'%20p-id='4662'%3e%3c/path%3e%3cpath%20d='M852.698408%20346.085053c0%20191.137684-154.947368%20346.085053-346.085052%20346.085052-191.110737%200-346.058105-154.947368-346.058105-346.085052S315.502619%200%20506.586408%200c191.137684%200%20346.085053%20154.947368%20346.085053%20346.085053'%20fill='%23F9D11F'%20p-id='4663'%3e%3c/path%3e%3cpath%20d='M679.211251%20646.009263l-81.973895-82.000842a120.535579%20120.535579%200%200%200-170.469053%200L344.632724%20646.197895l-3.745684%203.745684a344.387368%20344.387368%200%200%200%20165.753263%2042.226526c62.895158%200%20121.802105-16.896%20172.597895-46.160842'%20fill='%23FF7E50'%20p-id='4664'%3e%3c/path%3e%3cpath%20d='M629.789777%20346.085053a123.176421%20123.176421%200%201%201-246.352842%200%20123.176421%20123.176421%200%200%201%20246.352842%200'%20fill='%23FFFFFF'%20p-id='4665'%3e%3c/path%3e%3c/svg%3e";
const _hoisted_1$5 = { class: "hero-container" };
const _hoisted_2$3 = { class: "container" };
const _hoisted_3$2 = {
  key: 0,
  class: "aside"
};
const _hoisted_4$2 = { class: "content" };
const _hoisted_5$2 = { class: "content-container" };
const _hoisted_6$2 = { class: "main" };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Doc",
  props: {
    noPaddingTop: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const { frontmatter } = useData$1();
    return (_ctx, _cache) => {
      var _a, _b, _c, _d;
      const _component_Content = resolveComponent("Content");
      return openBlock(), createElementBlock(Fragment, null, [
        ((_a = unref(frontmatter)) == null ? void 0 : _a.header) !== false ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["VPDoc VPHeader", { "has-sidebar": ((_b = unref(frontmatter)) == null ? void 0 : _b.aside) !== false, "no-padding-top": __props.noPaddingTop }])
        }, [
          createBaseVNode("div", _hoisted_1$5, [
            renderSlot(_ctx.$slots, "header", {}, void 0, true)
          ])
        ], 2)) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "hero", {}, void 0, true),
        createBaseVNode("div", {
          class: normalizeClass(["VPDoc", { "has-sidebar": ((_c = unref(frontmatter)) == null ? void 0 : _c.aside) !== false }])
        }, [
          createBaseVNode("div", _hoisted_2$3, [
            ((_d = unref(frontmatter)) == null ? void 0 : _d.aside) !== false ? (openBlock(), createElementBlock("div", _hoisted_3$2, [
              renderSlot(_ctx.$slots, "aside", {}, void 0, true)
            ])) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_4$2, [
              createBaseVNode("div", _hoisted_5$2, [
                createBaseVNode("main", _hoisted_6$2, [
                  createVNode(_component_Content, { class: "vp-doc" })
                ])
              ])
            ])
          ])
        ], 2)
      ], 64);
    };
  }
});
const LayoutDoc = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-473a38f1"]]);
const _hoisted_1$4 = { class: "more-attractions" };
const _hoisted_2$2 = { class: "tags-container" };
const _hoisted_3$1 = { class: "attraction-header" };
const _hoisted_4$1 = { class: "base-info" };
const _hoisted_5$1 = { class: "introduce" };
const _hoisted_6$1 = { class: "label" };
const _hoisted_7$1 = { key: 0 };
const _hoisted_8$1 = { class: "slogan" };
const _hoisted_9$1 = {
  key: 1,
  class: "fact"
};
const _hoisted_10$1 = ["src"];
const _hoisted_11$1 = {
  key: 2,
  class: "fact"
};
const _hoisted_12$1 = ["src"];
const _hoisted_13$1 = {
  key: 1,
  class: "introduce bottom"
};
const _hoisted_14$1 = { class: "ticket-price" };
const _hoisted_15$1 = {
  key: 2,
  class: "oriental-review"
};
const _hoisted_16$1 = { class: "label" };
const _hoisted_17$1 = { class: "title" };
const _hoisted_18$1 = ["src"];
const _hoisted_19$1 = { class: "content" };
const _hoisted_20 = { class: "subtitle" };
const _hoisted_21 = { class: "photos" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const { frontmatter, localeIndex, params } = useData$1();
    const { $t } = useLocale();
    const formatHour = (hour) => {
      const fixZero = (n) => `${n < 10 ? "0" : ""}${n}`;
      const h = fixZero(Math.floor(hour));
      const m = fixZero(hour % 1 * 60);
      return `${h}:${m}`;
    };
    useJsonLD(() => {
      var _a, _b, _c, _d, _e, _f;
      return {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: $t("Destinations"),
            item: localeIndex.value === "root" ? "https://www.orientalroad.com/places" : `https://www.orientalroad.com/${localeIndex.value}/places`
          },
          {
            "@type": "ListItem",
            position: 2,
            name: (_b = (_a = frontmatter.value.destination) == null ? void 0 : _a.nameLocale) == null ? void 0 : _b[localeIndex.value],
            item: localeIndex.value === "root" ? `https://www.orientalroad.com${frontmatter.value.destination.link}` : `https://www.orientalroad.com/${localeIndex.value}${frontmatter.value.destination.link}`
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `${(_d = (_c = frontmatter.value.destination) == null ? void 0 : _c.nameLocale) == null ? void 0 : _d[localeIndex.value]}${$t(" Attractions")}`,
            item: localeIndex.value === "root" ? `https://www.orientalroad.com${frontmatter.value.destination.link}/attractions` : `https://www.orientalroad.com/${localeIndex.value}${frontmatter.value.destination.link}/attractions`
          },
          {
            "@type": "ListItem",
            position: 3,
            name: (_f = (_e = frontmatter.value.attraction) == null ? void 0 : _e.nameLocale) == null ? void 0 : _f[localeIndex.value],
            item: `https://www.orientalroad.com${location.pathname}`
          }
        ]
      };
    });
    return (_ctx, _cache) => {
      const _component_Translate = resolveComponent("Translate");
      const _component_Link = resolveComponent("Link");
      const _component_Chinese = resolveComponent("Chinese");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(SubNav),
        createVNode(LayoutDoc, { noPaddingTop: "" }, {
          header: withCtx(() => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
            return [
              createVNode(Breadcrumb, {
                list: [
                  { name: unref($t)(`${(_a = unref(frontmatter).destination) == null ? void 0 : _a.region} China`) },
                  { name: unref($t)((_b = unref(frontmatter).destination) == null ? void 0 : _b.province) },
                  { name: unref($t)((_c = unref(frontmatter).destination) == null ? void 0 : _c.name), link: (_d = unref(frontmatter).destination) == null ? void 0 : _d.link }
                ]
              }, {
                default: withCtx(() => {
                  var _a2, _b2;
                  return [
                    unref(attractionsPageSet).has((_a2 = unref(frontmatter).destination) == null ? void 0 : _a2.name) ? (openBlock(), createBlock(_component_Link, {
                      key: 0,
                      href: `${(_b2 = unref(frontmatter).destination) == null ? void 0 : _b2.link}/attractions`
                    }, {
                      default: withCtx(() => {
                        var _a3, _b3;
                        return [
                          createBaseVNode("span", _hoisted_1$4, [
                            createBaseVNode("span", null, [
                              createVNode(_component_Translate, null, {
                                default: withCtx(() => _cache[0] || (_cache[0] = [
                                  createTextVNode("See all attractions in ")
                                ])),
                                _: 1
                              })
                            ]),
                            createBaseVNode("span", null, toDisplayString((_b3 = (_a3 = unref(frontmatter).destination) == null ? void 0 : _a3.nameLocale) == null ? void 0 : _b3[unref(localeIndex)]), 1)
                          ])
                        ];
                      }),
                      _: 1
                    }, 8, ["href"])) : createCommentVNode("", true)
                  ];
                }),
                _: 1
              }, 8, ["list"]),
              createVNode(PageHeader, {
                name: (_e = unref(frontmatter).attraction) == null ? void 0 : _e.name,
                nameLocale: (_g = (_f = unref(frontmatter).attraction) == null ? void 0 : _f.nameLocale) == null ? void 0 : _g[unref(localeIndex)],
                href: (_h = unref(frontmatter).destination) == null ? void 0 : _h.link
              }, {
                "after-tag": withCtx(() => {
                  var _a2;
                  return [
                    createBaseVNode("div", _hoisted_2$2, [
                      createVNode(Rating, {
                        star: (_a2 = unref(frontmatter).attraction) == null ? void 0 : _a2.rating
                      }, null, 8, ["star"])
                    ])
                  ];
                }),
                _: 1
              }, 8, ["name", "nameLocale", "href"]),
              createBaseVNode("div", _hoisted_3$1, [
                createBaseVNode("div", _hoisted_4$1, [
                  createBaseVNode("div", _hoisted_5$1, [
                    createBaseVNode("div", _hoisted_6$1, [
                      createVNode(_component_Translate, null, {
                        default: withCtx(() => _cache[1] || (_cache[1] = [
                          createTextVNode("Facts")
                        ])),
                        _: 1
                      })
                    ]),
                    ((_i = unref(frontmatter).attraction) == null ? void 0 : _i.nameChinese) ? (openBlock(), createElementBlock("div", _hoisted_7$1, [
                      createVNode(_component_Chinese, {
                        word: unref(frontmatter).attraction.nameChinese
                      }, createSlots({
                        default: withCtx(() => {
                          var _a2, _b2;
                          return [
                            ((_a2 = unref(frontmatter).attraction) == null ? void 0 : _a2.namePinyin) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                              createTextVNode(toDisplayString((_b2 = unref(frontmatter).attraction) == null ? void 0 : _b2.nameLocale[unref(localeIndex)]), 1)
                            ], 64)) : createCommentVNode("", true)
                          ];
                        }),
                        _: 2
                      }, [
                        ((_j = unref(frontmatter).attraction) == null ? void 0 : _j.namePinyin) ? {
                          name: "pinyin",
                          fn: withCtx(() => [
                            createTextVNode(toDisplayString(unref(frontmatter).attraction.namePinyin), 1)
                          ]),
                          key: "0"
                        } : void 0
                      ]), 1032, ["word"])
                    ])) : createCommentVNode("", true),
                    createBaseVNode("div", _hoisted_8$1, toDisplayString((_l = (_k = unref(frontmatter).attraction) == null ? void 0 : _k.introduce) == null ? void 0 : _l[unref(localeIndex)]), 1),
                    ((_m = unref(frontmatter).attraction) == null ? void 0 : _m.opensHour) ? (openBlock(), createElementBlock("div", _hoisted_9$1, [
                      createBaseVNode("div", null, [
                        createBaseVNode("img", {
                          src: unref(clockSvg),
                          alt: "Open hours"
                        }, null, 8, _hoisted_10$1)
                      ]),
                      createBaseVNode("div", null, [
                        createVNode(_component_Translate, null, {
                          default: withCtx(() => _cache[2] || (_cache[2] = [
                            createTextVNode("Opens at ")
                          ])),
                          _: 1
                        }),
                        createTextVNode(toDisplayString((_o = (_n = unref(frontmatter).attraction.opensHour) == null ? void 0 : _n.map(formatHour)) == null ? void 0 : _o.join("-")), 1)
                      ])
                    ])) : createCommentVNode("", true),
                    ((_p = unref(frontmatter).attraction) == null ? void 0 : _p.visitDuration) ? (openBlock(), createElementBlock("div", _hoisted_11$1, [
                      createBaseVNode("div", null, [
                        createBaseVNode("img", {
                          src: unref(clockSvg),
                          alt: "Visit Duration"
                        }, null, 8, _hoisted_12$1)
                      ]),
                      createBaseVNode("div", null, [
                        createVNode(_component_Translate, null, {
                          default: withCtx(() => _cache[3] || (_cache[3] = [
                            createTextVNode("Suggested tour time ")
                          ])),
                          _: 1
                        }),
                        createVNode(_component_Translate, null, {
                          default: withCtx(() => _cache[4] || (_cache[4] = [
                            createTextVNode("hours")
                          ])),
                          _: 1
                        })
                      ])
                    ])) : createCommentVNode("", true)
                  ]),
                  ((_q = unref(frontmatter).attraction) == null ? void 0 : _q.ticketPrice) > 0 ? (openBlock(), createBlock(AttractionTicket, {
                    key: 0,
                    name: (_r = unref(frontmatter).attraction) == null ? void 0 : _r.name,
                    nameLocale: (_s = unref(frontmatter).attraction) == null ? void 0 : _s.nameLocale[unref(localeIndex)],
                    price: (_t = unref(frontmatter).attraction) == null ? void 0 : _t.ticketPrice
                  }, null, 8, ["name", "nameLocale", "price"])) : (openBlock(), createElementBlock("div", _hoisted_13$1, [
                    createBaseVNode("div", _hoisted_14$1, [
                      createVNode(_component_Translate, null, {
                        default: withCtx(() => _cache[5] || (_cache[5] = [
                          createTextVNode("No Entry Fee")
                        ])),
                        _: 1
                      })
                    ])
                  ])),
                  ((_v = (_u = unref(frontmatter).attraction) == null ? void 0 : _u.review) == null ? void 0 : _v[unref(localeIndex)]) ? (openBlock(), createElementBlock("div", _hoisted_15$1, [
                    createBaseVNode("div", _hoisted_16$1, [
                      createBaseVNode("div", _hoisted_17$1, [
                        createBaseVNode("img", {
                          src: unref(madelSvg),
                          alt: "Oriental Review"
                        }, null, 8, _hoisted_18$1),
                        createBaseVNode("span", null, [
                          createVNode(_component_Translate, null, {
                            default: withCtx(() => _cache[6] || (_cache[6] = [
                              createTextVNode("Oriental Review")
                            ])),
                            _: 1
                          })
                        ])
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_19$1, [
                      createTextVNode(toDisplayString(unref(frontmatter).attraction.review[unref(localeIndex)]) + " ", 1),
                      createBaseVNode("div", _hoisted_20, [
                        _cache[8] || (_cache[8] = createTextVNode("—— ")),
                        createVNode(_component_Translate, null, {
                          default: withCtx(() => _cache[7] || (_cache[7] = [
                            createTextVNode("Review from Local Expert")
                          ])),
                          _: 1
                        })
                      ])
                    ])
                  ])) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_21, [
                  createVNode(PhotoSlide, {
                    thumbnails: ((_w = unref(attractionsAssets)[unref(frontmatter).attraction.name]) == null ? void 0 : _w.photoThumb) || [],
                    photos: ((_x = unref(attractionsAssets)[unref(frontmatter).attraction.name]) == null ? void 0 : _x.photo) || []
                  }, null, 8, ["thumbnails", "photos"])
                ])
              ])
            ];
          }),
          _: 1
        })
      ], 64);
    };
  }
});
const LayoutAttraction = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-c42c18c8"]]);
const _hoisted_1$3 = ["onClick"];
const _hoisted_2$1 = { class: "tab-content" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TabGroup",
  props: {
    vertical: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const selectedIndex = ref(0);
    const tabs = ref([]);
    const selectTab = (index) => {
      selectedIndex.value = index;
    };
    const registerTab = (tab) => {
      tabs.value.push(tab);
      return tabs.value.length - 1;
    };
    const unregisterTab = (tab) => {
      tabs.value = tabs.value.filter((t) => t !== tab);
    };
    provide("selectedIndex", selectedIndex);
    provide("registerTab", registerTab);
    provide("unregisterTab", unregisterTab);
    watch(selectedIndex, (newIndex) => {
      tabs.value.forEach((tab, index) => {
        if (index === newIndex) {
          tab.isActive = true;
        } else {
          tab.isActive = false;
        }
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["tab-group", { vertical: __props.vertical }])
      }, [
        createBaseVNode("div", {
          class: normalizeClass(["tab-header", { vertical: __props.vertical }])
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(tabs.value, (tab, index) => {
            return openBlock(), createElementBlock("button", {
              key: index,
              class: normalizeClass({ active: selectedIndex.value === index }),
              onClick: ($event) => selectTab(index)
            }, toDisplayString(tab.title), 11, _hoisted_1$3);
          }), 128))
        ], 2),
        createBaseVNode("div", _hoisted_2$1, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])
      ], 2);
    };
  }
});
const TabGroup = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-b329ef1f"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TabPanel",
  props: {
    title: {
      type: String,
      required: true
    },
    keepAlive: {
      type: Boolean,
      default: false
    },
    noPadding: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const index = ref();
    const isActive2 = ref(false);
    const selectedIndex = inject("selectedIndex");
    const registerTab = inject("registerTab");
    const unregisterTab = inject("unregisterTab");
    const tab = {
      title: __props.title,
      isActive: isActive2
    };
    onMounted(() => {
      index.value = registerTab(tab);
      isActive2.value = selectedIndex.value === index.value;
    });
    onBeforeUnmount(() => {
      unregisterTab(tab);
    });
    watch(selectedIndex, (newIndex) => {
      isActive2.value = newIndex === index.value;
    });
    return (_ctx, _cache) => {
      return __props.keepAlive || isActive2.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["tab-panel", { active: isActive2.value, padding: !__props.noPadding }])
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const TabPanel = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-3bdd1f60"]]);
const artSvg = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='20'%20height='20'%3e%3cpath%20d='M963.093333%20660.992c0-12.288-10.24-22.549333-22.549333-22.549333H567.296c-12.8-38.4-34.816-73.216-62.464-99.84-0.512-0.490667-2.048-2.56-2.56-3.093334-25.6-25.066667-46.08-54.250667-59.904-87.04a269.226667%20269.226667%200%200%201-20.992-103.936c0-70.656%2010.24-140.8%2030.72-208.384l13.312-45.056c2.048-6.613333%200.512-14.293333-3.584-19.925333s-10.752-9.216-17.92-9.216H203.264c-7.168%200-13.824%203.584-17.92%209.216s-5.632%2013.312-3.584%2019.968l13.312%2045.056a718.016%20718.016%200%200%201%2030.72%20208.384c0%2071.68-29.184%20141.312-81.92%20192.512-98.304%2095.253333-104.448%20251.392-13.824%20347.669333%2011.776%2012.8%2024.576%2023.04%2037.376%2031.210667%2048.128%2029.717333%20101.888%2044.544%20155.648%2044.544s107.52-14.826667%20155.648-44.544c12.8-7.658667%2025.088-18.410667%2037.888-31.210667%207.68-8.213333%2014.848-16.917333%2021.525333-26.624%201.514667%200.490667%202.538667%201.002667%204.074667%201.002667v91.136c0%2012.288%2010.24%2022.528%2022.549333%2022.528h196.074667c12.288%200%2022.549333-10.218667%2022.549333-22.528v-91.136c108.010667-33.792%20179.712-112.128%20179.712-198.144zM455.168%20877.589333a250.666667%20250.666667%200%200%201-264.192%200c-9.728-5.653333-18.944-13.824-28.16-23.573333-73.728-78.336-68.608-206.336%2013.312-286.186667a313.493333%20313.493333%200%200%200%2094.208-223.232A770.773333%20770.773333%200%200%200%20238.08%20123.413333l-4.608-15.893333h179.712l-4.608%2015.36a770.773333%20770.773333%200%200%200-32.256%20221.184c0%2041.984%208.192%2082.432%2024.576%20121.344a306.602667%20306.602667%200%200%200%2068.608%20100.352c0.512%200.512%202.048%202.581333%202.56%203.093333a200.064%20200.064%200%200%201%2047.104%2069.12H384c-12.288%200-22.528%2010.218667-22.528%2022.528v9.728c0%201.536%200%203.093333%200.512%204.608%200%201.024%200%202.069333%200.512%203.072%200%201.536%200.512%203.093333%200.512%204.117334%200%201.002667%200.512%202.048%200.512%203.050666%200%201.536%200.512%202.581333%200.512%204.117334%200%201.002667%200.512%202.048%200.512%203.050666%200.512%201.536%200.512%202.581333%201.024%204.117334%200%201.002667%200.512%202.048%200.512%203.072%200.512%201.024%200.512%202.56%201.024%203.584s0.512%202.048%201.024%203.072c0.512%201.045333%200.512%202.56%201.024%203.584%200.512%201.045333%200.512%202.048%201.024%203.093333a9.386667%209.386667%200%200%201%201.024%203.584%207.253333%207.253333%200%200%201%201.024%203.093333l1.536%203.050667c0.512%201.045333%201.024%202.581333%201.536%203.584%200.512%201.045333%200.512%201.536%201.024%202.581333%201.536%203.072%203.072%206.656%204.608%209.706667%200%200%200%200.512%200.512%200.512%201.024%201.536%201.536%203.072%202.56%204.608%200.512%200.512%200.512%201.045333%201.024%201.536a20.885333%2020.885333%200%200%201%202.56%204.629333c0.512%200.490667%200.512%201.002667%201.024%201.514667l3.072%204.608c0.512%200.490667%200.512%201.045333%201.024%201.536l3.072%204.608c0.512%200.512%200.512%201.024%201.024%201.536%201.024%201.514667%202.56%203.072%203.584%204.608l1.024%201.024c1.536%201.536%202.56%203.072%204.096%204.608l0.512%200.512c22.528%2026.112%2052.224%2048.64%2088.064%2065.514667-3.584%204.629333-7.168%208.704-10.752%2012.821333-9.216%2011.2-18.432%2019.392-28.16%2025.045333z%20m283.114667%2050.154667h-151.04V870.4c1.045333%200%202.069333%200.512%203.093333%200.512%204.096%200.490667%208.704%201.536%2012.8%202.048%201.045333%200%202.581333%200.490667%203.584%200.490667%205.653333%200.533333%2011.264%201.536%2017.408%202.069333h0.490667c5.653333%200.512%2011.285333%201.024%2017.408%201.024h2.048c6.165333%200%2012.288%200.490667%2017.941333%200.490667%206.144%200%2012.266667%200%2018.432-0.490667h1.514667a391.04%20391.04%200%200%200%2035.861333-3.093333c1.002667%200%202.048-0.490667%203.072-0.490667%204.608-0.490667%209.728-1.536%2014.336-2.048%201.024%200%201.536%200%202.56-0.512v57.344h0.490667z%20m16.405333-106.986667c-43.52%2011.754667-93.184%2014.336-139.776%208.682667a344.448%20344.448%200%200%201-45.589333-8.682667%20326.698667%20326.698667%200%200%201-33.28-10.752c-70.144-26.624-117.248-73.749333-128-126.485333h506.368c-11.242667%2060.928-72.682667%20114.197333-159.722667%20137.237333z'%20%3e%3c/path%3e%3c/svg%3e";
const islandSvg = "/assets/island.Dm4CLwR4.svg";
const shoppingSvg = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='20'%20height='20'%3e%3cpath%20d='M802.01214%20224.821395%20786.302343%20224.821395c-16.762779-11.828396-36.789904-19.243273-58.431807-20.558222C699.506535%20107.117646%20650.098241%2086.080517%20612.668771%2086.080517c-21.677719%200-40.126906%209.307993-54.030567%2021.583574C536.931832%2082.381266%20508.525875%2065.290005%20471.386%2065.290005c-76.082816%200-115.798353%2071.77265-136.300292%20138.740878L221.970464%20204.030883c-63.045895%200-114.337071%2051.748594-114.337071%20115.357308l0%20526.33345c0%2030.53955%2011.945053%2059.065234%2033.636075%2080.323397%2021.4925%2021.061688%2050.15326%2032.662911%2080.700997%2032.662911l492.732168%200%206.228865%200%2081.080643%200c30.547737%200%2059.21873-11.653411%2080.735789-32.813337%2021.677719-21.319561%2033.617655-49.880037%2033.617655-80.419588l0-505.298368C916.365584%20276.56999%20865.067244%20224.821395%20802.01214%20224.821395zM612.668771%20127.660518c21.775956%200%2050.691519%2014.055111%2071.578222%2076.370365l-77.080539%200c-6.277984-20.780279-14.404058-42.017976-24.901133-61.433164C589.821413%20134.551462%20600.491427%20127.660518%20612.668771%20127.660518zM471.386%20106.870006c26.323529%200%2048.877197%2014.541181%2067.421552%2043.344181%200.595564%201.204431%201.309832%202.352581%202.139733%203.433192%208.398274%2013.776771%2015.941064%2030.582529%2022.608927%2050.383504L378.751207%20204.030883C400.74001%20139.567709%20431.888428%20106.870006%20471.386%20106.870006zM714.702632%20917.128971l-492.732168%200c-40.798195%200-72.757071-31.365358-72.757071-71.40733L149.213393%20319.388191c0-40.680515%2032.638351-73.777307%2072.757071-73.777307l102.427834%200c-3.220345%2015.140839-5.502317%2029.000498-7.088442%2040.415478-11.243065%206.097882-18.878976%2018.002003-18.878976%2031.691793%200%2019.898189%2016.130376%2036.028565%2036.028565%2036.028565%2019.898189%200%2036.028565-16.130376%2036.028565-36.028565%200-10.567683-4.577249-20.041452-11.824303-26.631544%201.780553-12.605086%204.455475-28.41005%208.371668-45.474704l208.051453%200c3.790326%2016.833387%206.376221%2032.43369%208.101515%2044.943608-7.589862%206.605442-12.408611%2016.311501-12.408611%2027.163663%200%2019.898189%2016.130376%2036.028565%2036.028565%2036.028565%2019.898189%200%2036.028565-16.130376%2036.028565-36.028565%200-13.390985-7.322779-25.051559-18.165732-31.262004-1.543146-11.500938-3.78521-25.518187-6.984065-40.845267l103.243409%200c16.280802%200%2031.329543%205.449106%2043.465954%2014.642488%201.034563%201.042749%202.184759%201.967818%203.419889%202.77316%2015.816221%2013.544481%2025.886577%2033.778314%2025.886577%2056.361659l0%20526.087856c0%2040.179095-31.967062%2071.652923-72.773444%2071.652923L714.702632%20917.129994zM874.785583%20845.477071c0%2037.509289-27.863604%2067.422575-64.767096%2071.232344%2016.359596-20.023032%2025.26543-44.88528%2025.26543-71.232344L835.283918%20319.388191c0-17.692964-3.979638-34.462906-11.067057-49.462528%2029.29828%209.541307%2050.567699%2037.421284%2050.567699%2070.252017L874.78456%20845.477071z'%20fill='%23272636'%3e%3c/path%3e%3c/svg%3e";
const topSvg = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1737128053621'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='15806'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='200'%20height='200'%3e%3cpath%20d='M639.0784%20561.92m-281.4464%200a281.4464%20281.4464%200%201%200%20562.8928%200%20281.4464%20281.4464%200%201%200-562.8928%200Z'%20fill='%23FED1B0'%20p-id='15807'%3e%3c/path%3e%3cpath%20d='M893.2864%20196.7616h-88.4736V116.6848c0-16.9472-13.7728-30.72-30.72-30.72H260.352c-16.9472%200-30.72%2013.7728-30.72%2030.72v80.0768H134.8608c-34.7648%200-63.0784%2028.3136-63.0784%2063.0784V357.888c0%20117.4528%2092.5184%20213.7088%20208.5376%20219.648%2045.4656%2065.9456%20117.76%20112.0256%20200.96%20122.4704v171.264H297.0624c-16.9472%200-30.72%2013.7728-30.72%2030.72s13.7728%2030.72%2030.72%2030.72h434.8928c16.9472%200%2030.72-13.7728%2030.72-30.72s-13.7728-30.72-30.72-30.72H542.72v-170.1376c87.8592-7.7312%20164.4544-55.1424%20211.8144-124.16%20112.7424-9.2672%20201.8304-104.192%20201.8304-219.136V259.7888c0-34.7648-28.3136-63.0272-63.0784-63.0272zM245.7088%20509.5424c-65.024-19.7632-112.4352-80.2816-112.4352-151.7056V259.7888c0-0.9216%200.7168-1.6384%201.6384-1.6384h94.7712V414.72c0%204.5056%200.1536%209.0624%200.3584%2013.568%200.0512%201.5872%200.2048%203.1744%200.3072%204.8128%200.2048%202.8672%200.4096%205.6832%200.6656%208.5504l0.6144%205.7344c0.3072%202.5088%200.6144%205.0176%200.9728%207.4752%200.3072%201.9968%200.5632%203.9936%200.8704%205.9904%200.4096%202.4576%200.8704%204.9152%201.3312%207.3728l1.0752%205.7344c0.7168%203.3792%201.4848%206.7584%202.3552%2010.0864%200.3584%201.4848%200.7168%202.9696%201.1264%204.4544%200.9728%203.6352%201.9968%207.2192%203.072%2010.8032%200.3584%201.2288%200.768%202.4064%201.1776%203.6352%200.6144%202.1504%201.28%204.4032%202.0992%206.6048z%20m271.5136%20131.328c-84.4288%200-158.208-46.5408-197.0176-115.3024-0.8192-1.4848-1.6896-2.9696-2.4576-4.4544-1.1776-2.2016-2.304-4.4032-3.3792-6.6048-0.9728-1.9968-1.9456-4.0448-2.8672-6.0416-0.8704-1.8944-1.7408-3.7376-2.56-5.632-1.5872-3.7888-3.072-7.6288-4.5056-11.52-0.512-1.4848-1.024-2.9696-1.4848-4.4032-1.024-3.0208-1.9968-6.0928-2.8672-9.1648-0.4096-1.3312-0.768-2.6624-1.1264-4.0448a219.1872%20219.1872%200%200%201-5.5296-26.9824l-0.4608-3.5328c-0.4608-3.5328-0.8192-7.1168-1.0752-10.6496l-0.3072-3.7888c-0.3072-4.6592-0.4608-9.2672-0.4608-13.9264V147.4048h452.3008V414.72c0%204.6592-0.2048%209.3184-0.4608%2013.9776l-0.3072%203.7888c-0.256%203.584-0.6656%207.168-1.0752%2010.7008-0.1536%201.1264-0.256%202.304-0.4608%203.4304-1.28%209.1648-3.1744%2018.176-5.5808%2027.0848-0.3584%201.28-0.7168%202.56-1.0752%203.7888-0.9216%203.1744-1.9456%206.3488-2.9696%209.472l-1.3824%204.1472c-1.4336%203.9424-2.9184%207.8336-4.5568%2011.6736-0.768%201.7408-1.5872%203.4816-2.3552%205.2224-0.9728%202.2016-1.9968%204.352-3.072%206.5024-1.0752%202.1504-2.1504%204.2496-3.2768%206.3488-0.8704%201.6384-1.792%203.2768-2.7136%204.864-38.912%2068.7104-112.5888%20115.1488-196.9152%20115.1488z%20m377.7024-283.0336c0%2068.608-44.032%20127.3344-105.3184%20149.2992%200.512-1.4848%200.9216-2.9184%201.3824-4.4032%200.4608-1.4848%200.9728-2.9184%201.3824-4.4032%200.8192-2.7136%201.5872-5.4784%202.3552-8.2432%200.4096-1.536%200.8704-3.072%201.28-4.6592%201.024-3.9936%201.9456-8.0384%202.816-12.0832%200.3072-1.536%200.5632-3.1232%200.8704-4.7104%200.512-2.7648%201.024-5.5808%201.4848-8.3456%200.3072-1.8432%200.5632-3.7376%200.8192-5.632%200.3584-2.56%200.7168-5.1712%200.9728-7.7312%200.2048-1.8432%200.4096-3.6864%200.5632-5.4784%200.256-2.8672%200.4608-5.7344%200.6656-8.6016l0.3072-4.6592c0.2048-4.4544%200.3584-8.96%200.3584-13.4144V258.2016h88.4736c0.9216%200%201.6384%200.7168%201.6384%201.6384v97.9968z'%20fill='%234F4F4F'%20p-id='15808'%3e%3c/path%3e%3c/svg%3e";
const trendingSvg = "/assets/trending.DeUOIgPF.svg";
const tagsIcon = {
  [Megacity]: urbanSvg,
  [Seaside]: seasideSvg,
  [Island]: islandSvg,
  [Minority]: minoritySvg,
  [AncienCapital]: ancientSvg,
  [Nature]: natureSvg,
  [HeritageSites]: ancientSvg,
  [Cuisine]: foodSvg,
  [Shopping]: shoppingSvg,
  [Festival]: festivalSvg,
  [Art]: artSvg,
  [Trending]: topSvg,
  [Top]: trendingSvg,
  [Panda]: pandaSvg,
  [Tech]: techSvg
};
const correctSvg = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20%3e%3cpath%20d='M404.48%20716.8h-0.290133a34.269867%2034.269867%200%200%201-24.251734-10.3936l-125.44-129.706667a34.133333%2034.133333%200%201%201%2049.066667-47.4624l101.3248%20104.7552%20316.791467-316.791466a34.133333%2034.133333%200%201%201%2048.264533%2048.264533l-341.333333%20341.333333A34.133333%2034.133333%200%200%201%20404.48%20716.8z'%20fill='%232FC25B'%20%3e%3c/path%3e%3c/svg%3e";
const _hoisted_1$2 = ["src", "width", "alt"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "OKIcon",
  props: {
    alt: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 20
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("img", {
        src: unref(correctSvg),
        width: __props.size,
        alt: __props.alt
      }, null, 8, _hoisted_1$2);
    };
  }
});
const _hoisted_1$1 = ["width", "height"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TopIcon",
  props: {
    size: {
      type: Number,
      default: 20
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", {
        viewBox: "0 0 1024 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: __props.size,
        height: __props.size
      }, _cache[0] || (_cache[0] = [
        createBaseVNode("path", {
          d: "M493.269333 896.64L404.053333 940.245333a42.666667 42.666667 0 0 1-56.448-18.346666l-46.549333-87.722667a42.709333 42.709333 0 0 0-30.336-22.016l-97.792-17.152a42.666667 42.666667 0 0 1-34.858667-48l13.909334-98.304a42.666667 42.666667 0 0 0-11.562667-35.626667l-69.034667-71.381333a42.666667 42.666667 0 0 1 0-59.349333l69.034667-71.381334a42.624 42.624 0 0 0 11.562667-35.626666l-13.909334-98.346667a42.666667 42.666667 0 0 1 34.901334-48l97.792-17.152c12.970667-2.261333 24.149333-10.410667 30.336-22.016l46.549333-87.722667a42.624 42.624 0 0 1 56.405333-18.346666l89.216 43.605333c11.818667 5.76 25.642667 5.76 37.461334 0l89.216-43.605333a42.666667 42.666667 0 0 1 56.448 18.346666l46.549333 87.722667c6.186667 11.605333 17.365333 19.754667 30.336 22.016l97.792 17.152a42.666667 42.666667 0 0 1 34.858667 48l-13.909334 98.304a42.666667 42.666667 0 0 0 11.562667 35.626667l69.034667 71.381333a42.666667 42.666667 0 0 1 0 59.349333l-69.034667 71.381334a42.624 42.624 0 0 0-11.562667 35.626666l13.909334 98.304a42.666667 42.666667 0 0 1-34.858667 48l-97.792 17.152a42.709333 42.709333 0 0 0-30.336 22.016l-46.549333 87.722667a42.666667 42.666667 0 0 1-56.448 18.346667l-89.216-43.605334a42.624 42.624 0 0 0-37.461334 0.042667z",
          fill: "#F5CF41"
        }, null, -1),
        createBaseVNode("path", {
          d: "M512 832a320 320 0 1 1 0-640 320 320 0 0 1 0 640z m0-42.666667a277.333333 277.333333 0 1 0 0-554.666666 277.333333 277.333333 0 0 0 0 554.666666z",
          fill: "#EEC437"
        }, null, -1),
        createBaseVNode("path", {
          d: "M360.021333 386.432l59.946667 76.288a8.533333 8.533333 0 0 0 13.44 0L505.301333 371.2a8.533333 8.533333 0 0 1 13.44 0l71.808 91.52a8.533333 8.533333 0 0 0 13.44 0l60.074667-76.330667a8.533333 8.533333 0 0 1 11.989333-1.408 8.490667 8.490667 0 0 1 3.2 7.68l-24.96 214.357334H369.792l-24.96-214.314667a8.533333 8.533333 0 0 1 15.189333-6.272z",
          fill: "#FFF2A0"
        }, null, -1),
        createBaseVNode("path", {
          d: "M383.36 634.197333h257.28c7.509333 0 13.568 6.058667 13.568 13.568v15.530667a13.568 13.568 0 0 1-13.568 13.568h-257.28a13.568 13.568 0 0 1-13.568-13.568v-15.530667c0-7.509333 6.058667-13.568 13.568-13.568z",
          fill: "#FBE975"
        }, null, -1)
      ]), 8, _hoisted_1$1);
    };
  }
});
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { class: "label" };
const _hoisted_3 = ["innerHTML"];
const _hoisted_4 = ["innerHTML"];
const _hoisted_5 = ["innerHTML"];
const _hoisted_6 = { class: "page-header" };
const _hoisted_7 = { key: 0 };
const _hoisted_8 = {
  key: 0,
  class: "cityTag"
};
const _hoisted_9 = ["src", "alt"];
const _hoisted_10 = {
  key: 1,
  class: "slogan"
};
const _hoisted_11 = { class: "tags" };
const _hoisted_12 = {
  key: 0,
  class: "top"
};
const _hoisted_13 = {
  key: 1,
  class: "visa"
};
const _hoisted_14 = {
  key: 2,
  class: "visa"
};
const _hoisted_15 = {
  key: 3,
  class: "visa"
};
const _hoisted_16 = {
  key: 4,
  class: "visa"
};
const _hoisted_17 = {
  key: 0,
  class: "heropic"
};
const _hoisted_18 = { class: "image_wrap" };
const _hoisted_19 = { class: "overlay_cap" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: ["slogan", "href", "name", "nameLocale", "subname"],
  setup(__props) {
    const { lang, frontmatter, localeIndex, params } = useData$1();
    const { $t } = useLocale();
    const { isMobile } = useMobile();
    useJsonLD(() => {
      var _a, _b;
      return {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: $t("Destinations"),
            item: localeIndex.value === "root" ? "https://www.orientalroad.com/places" : `https://www.orientalroad.com/${localeIndex.value}/places`
          },
          {
            "@type": "ListItem",
            position: 2,
            name: (_b = (_a = frontmatter.value.city) == null ? void 0 : _a.nameLocale) == null ? void 0 : _b[localeIndex.value],
            item: `https://www.orientalroad.com${location.pathname}`
          }
        ]
      };
    });
    return (_ctx, _cache) => {
      const _component_Translate = resolveComponent("Translate");
      const _component_LazyLoadImage = resolveComponent("LazyLoadImage");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(SubNav),
        createVNode(LayoutDoc, { noPaddingTop: "" }, {
          aside: withCtx(() => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _i;
            return [
              ((_c = (_b = unref(advertisements)[(_a = unref(frontmatter).city) == null ? void 0 : _a.name]) == null ? void 0 : _b.hotelsSearchBox) == null ? void 0 : _c[unref(localeIndex)]) || ((_f = (_e = unref(advertisements)[(_d = unref(frontmatter).city) == null ? void 0 : _d.name]) == null ? void 0 : _e.flightsSearchBox) == null ? void 0 : _f[unref(localeIndex)]) || ((_i = (_h = unref(advertisements)[(_g = unref(frontmatter).city) == null ? void 0 : _g.name]) == null ? void 0 : _h.trainsSearchBox) == null ? void 0 : _i[unref(localeIndex)]) ? (openBlock(), createElementBlock("div", _hoisted_1, [
                createBaseVNode("div", _hoisted_2, [
                  createVNode(_component_Translate, null, {
                    default: withCtx(() => _cache[0] || (_cache[0] = [
                      createTextVNode("Book your trip")
                    ])),
                    _: 1
                  })
                ]),
                createVNode(TabGroup, null, {
                  default: withCtx(() => {
                    var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2;
                    return [
                      ((_c2 = (_b2 = unref(advertisements)[(_a2 = unref(frontmatter).city) == null ? void 0 : _a2.name]) == null ? void 0 : _b2.hotelsSearchBox) == null ? void 0 : _c2[unref(localeIndex)]) ? (openBlock(), createBlock(TabPanel, {
                        key: 0,
                        title: unref($t)("Hotels"),
                        keepAlive: "",
                        noPadding: ""
                      }, {
                        default: withCtx(() => {
                          var _a3;
                          return [
                            createBaseVNode("div", {
                              class: "searchBox",
                              innerHTML: unref(advertisements)[(_a3 = unref(frontmatter).city) == null ? void 0 : _a3.name].hotelsSearchBox[unref(localeIndex)]
                            }, null, 8, _hoisted_3)
                          ];
                        }),
                        _: 1
                      }, 8, ["title"])) : createCommentVNode("", true),
                      ((_f2 = (_e2 = unref(advertisements)[(_d2 = unref(frontmatter).city) == null ? void 0 : _d2.name]) == null ? void 0 : _e2.flightsSearchBox) == null ? void 0 : _f2[unref(localeIndex)]) ? (openBlock(), createBlock(TabPanel, {
                        key: 1,
                        title: unref($t)("Flights"),
                        keepAlive: "",
                        noPadding: ""
                      }, {
                        default: withCtx(() => {
                          var _a3;
                          return [
                            createBaseVNode("div", {
                              class: "searchBox",
                              innerHTML: unref(advertisements)[(_a3 = unref(frontmatter).city) == null ? void 0 : _a3.name].flightsSearchBox[unref(localeIndex)]
                            }, null, 8, _hoisted_4)
                          ];
                        }),
                        _: 1
                      }, 8, ["title"])) : createCommentVNode("", true),
                      ((_i2 = (_h2 = unref(advertisements)[(_g2 = unref(frontmatter).city) == null ? void 0 : _g2.name]) == null ? void 0 : _h2.trainsSearchBox) == null ? void 0 : _i2[unref(localeIndex)]) ? (openBlock(), createBlock(TabPanel, {
                        key: 2,
                        title: unref($t)("Trains"),
                        keepAlive: "",
                        noPadding: ""
                      }, {
                        default: withCtx(() => {
                          var _a3;
                          return [
                            createBaseVNode("div", {
                              class: "searchBox",
                              innerHTML: unref(advertisements)[(_a3 = unref(frontmatter).city) == null ? void 0 : _a3.name].trainsSearchBox[unref(localeIndex)]
                            }, null, 8, _hoisted_5)
                          ];
                        }),
                        _: 1
                      }, 8, ["title"])) : createCommentVNode("", true)
                    ];
                  }),
                  _: 1
                })
              ])) : createCommentVNode("", true)
            ];
          }),
          header: withCtx(() => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
            return [
              createVNode(Breadcrumb, {
                list: [
                  { name: unref($t)(`${(_a = unref(frontmatter).city) == null ? void 0 : _a.region} China`) },
                  ((_b = unref(frontmatter).city) == null ? void 0 : _b.province) && { name: unref($t)((_c = unref(frontmatter).city) == null ? void 0 : _c.province) }
                ].filter(Boolean)
              }, null, 8, ["list"]),
              createBaseVNode("header", _hoisted_6, [
                ((_e = (_d = unref(frontmatter).city) == null ? void 0 : _d.nameLocale) == null ? void 0 : _e[unref(localeIndex)]) ? (openBlock(), createElementBlock("h1", _hoisted_7, toDisplayString(unref(frontmatter).city.nameLocale[unref(localeIndex)]), 1)) : createCommentVNode("", true)
              ]),
              ((_g = (_f = unref(frontmatter).city) == null ? void 0 : _f.tags) == null ? void 0 : _g.length) ? (openBlock(), createElementBlock("div", _hoisted_8, [
                (openBlock(true), createElementBlock(Fragment, null, renderList((_h = unref(frontmatter).city) == null ? void 0 : _h.tags, (tag) => {
                  var _a2, _b2;
                  return openBlock(), createElementBlock("span", {
                    class: "tag",
                    key: tag
                  }, [
                    createBaseVNode("img", {
                      src: unref(tagsIcon)[tag],
                      alt: tag
                    }, null, 8, _hoisted_9),
                    createTextVNode(" " + toDisplayString(((_b2 = (_a2 = unref(tagsLocale)) == null ? void 0 : _a2[unref(localeIndex)]) == null ? void 0 : _b2[tag]) || tag), 1)
                  ]);
                }), 128))
              ])) : createCommentVNode("", true),
              ((_j = (_i = unref(frontmatter).city) == null ? void 0 : _i.slogan) == null ? void 0 : _j[unref(localeIndex)]) ? (openBlock(), createElementBlock("div", _hoisted_10, toDisplayString(unref(frontmatter).city.slogan[unref(localeIndex)]), 1)) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_11, [
                ((_k = unref(frontmatter).city) == null ? void 0 : _k.rank) ? (openBlock(), createElementBlock("div", _hoisted_12, [
                  createVNode(_sfc_main$1),
                  createBaseVNode("span", null, "Top " + toDisplayString(unref(frontmatter).city.rank[unref(localeIndex)]), 1),
                  createVNode(_component_Translate, null, {
                    default: withCtx(() => _cache[1] || (_cache[1] = [
                      createTextVNode("most visited in China")
                    ])),
                    _: 1
                  })
                ])) : createCommentVNode("", true),
                ((_l = unref(frontmatter).city) == null ? void 0 : _l.visa30hainan) ? (openBlock(), createElementBlock("div", _hoisted_13, [
                  createVNode(_sfc_main$2, { alt: "Support 30-Day Visa-Free Entry to Hainan" }),
                  _cache[2] || (_cache[2] = createTextVNode(" 30-Day Visa-Free Entry to Hainan "))
                ])) : createCommentVNode("", true),
                ((_m = unref(frontmatter).city) == null ? void 0 : _m.staying240) ? (openBlock(), createElementBlock("div", _hoisted_14, [
                  createVNode(_sfc_main$2, { alt: "Support 240-Hour Transit Visa" }),
                  createBaseVNode("span", null, [
                    createVNode(_component_Translate, null, {
                      default: withCtx(() => _cache[3] || (_cache[3] = [
                        createTextVNode("240-Hour Transit Visa")
                      ])),
                      _: 1
                    })
                  ]),
                  _cache[4] || (_cache[4] = createTextVNode(" (")),
                  createVNode(_component_Translate, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(frontmatter).city.staying240), 1)
                    ]),
                    _: 1
                  }),
                  _cache[5] || (_cache[5] = createTextVNode(") "))
                ])) : createCommentVNode("", true),
                unref(lang) === "ja-JP" && unref(frontmatter).layout === "city" ? (openBlock(), createElementBlock("div", _hoisted_15, [
                  createVNode(_sfc_main$2, { alt: "30日間の免簽政策をサポートしています" }),
                  _cache[6] || (_cache[6] = createBaseVNode("span", null, "日本パスポート保持者は30日間のビザなし入国が可能です。", -1))
                ])) : createCommentVNode("", true),
                unref(lang) === "ko-KR" && unref(frontmatter).layout === "city" ? (openBlock(), createElementBlock("div", _hoisted_16, [
                  createVNode(_sfc_main$2, { alt: "30일 무비자 정책을 지원합니다" }),
                  _cache[7] || (_cache[7] = createBaseVNode("span", null, "한국 여권 소지자는 30일 무비자 입국이 가능합니다.", -1))
                ])) : createCommentVNode("", true)
              ])
            ];
          }),
          hero: withCtx(() => {
            var _a, _b, _c, _d, _e, _f, _g;
            return [
              ((_b = unref(destinationsAssets)[(_a = unref(frontmatter).city) == null ? void 0 : _a.name]) == null ? void 0 : _b.cover) ? (openBlock(), createElementBlock("div", _hoisted_17, [
                createBaseVNode("div", _hoisted_18, [
                  createBaseVNode("figure", _hoisted_19, [
                    createVNode(_component_LazyLoadImage, {
                      src: unref(isMobile) ? (_d = unref(destinationsAssets)[(_c = unref(frontmatter).city) == null ? void 0 : _c.name]) == null ? void 0 : _d.coverMobile : (_f = unref(destinationsAssets)[(_e = unref(frontmatter).city) == null ? void 0 : _e.name]) == null ? void 0 : _f.cover,
                      alt: `Scenery of ${(_g = unref(params)) == null ? void 0 : _g.name}`
                    }, null, 8, ["src", "alt"])
                  ])
                ])
              ])) : createCommentVNode("", true)
            ];
          }),
          _: 1
        })
      ], 64);
    };
  }
});
const LayoutCity = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e6682e87"]]);
const RawTheme = {
  Layout,
  enhanceApp({ app }) {
    app.component("container", LayoutDoc);
    app.component("city", LayoutCity);
    app.component("attraction", LayoutAttraction);
    app.component("composition", LayoutArticle);
    app.component("guide", LayoutArticle);
    app.component("empty", LayoutEmpty);
    app.component("Link", _sfc_main$19);
    app.component("H2", H2);
    app.component("H4", H4);
    app.component("Destinations", Destinations);
    app.component("Interests", Interests);
    app.component("Planning", Planning);
    app.component("Translate", _sfc_main$18);
    app.component("Chinese", Chinese);
    app.component("CNY", _sfc_main$1d);
    app.component("LazyLoadImage", LazyLoadImage);
  }
};
export {
  AncienCapital as A,
  Breadcrumb as B,
  Cuisine as C,
  tags as D,
  tagsIcon as E,
  Festival as F,
  tagsDescriptionLocale as G,
  HeritageSites as H,
  Island as I,
  tagsDescription as J,
  onKeyStroke as K,
  useCurrency as L,
  Megacity as M,
  Nature as N,
  langRoot as O,
  Panda as P,
  normalizeLink as Q,
  RawTheme as R,
  Shopping as S,
  Tech as T,
  TabGroup as U,
  VPTeamMembers as V,
  TabPanel as W,
  useData as X,
  createSearchTranslate as Y,
  _sfc_main$f as _,
  VPTeamPage as a,
  useJsonLD as b,
  attractionsAssets as c,
  destinationsAssets as d,
  Minority as e,
  Seaside as f,
  Art as g,
  _sfc_main$2 as h,
  useMobile as i,
  ChineseCuisineCulture as j,
  ChineseCulturalHeritage as k,
  FolkloreAndEthnicCulture as l,
  PandasAndOtherAnimals as m,
  ChinaVlog as n,
  ChineseCityWalk as o,
  NaturalScenery as p,
  attractions as q,
  eventBus as r,
  Speech as s,
  tagsLocale as t,
  useLocale as u,
  getDataByLang as v,
  data as w,
  locales as x,
  useLocalStorage as y,
  Top as z
};
