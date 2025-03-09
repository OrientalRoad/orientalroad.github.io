import { a as articles } from "./index.DfW4spIt.js";
import { b as useJsonLD, c as attractionsAssets } from "./theme.BvkY57QZ.js";
import { A as ArticlesList } from "./ArticlesList.Wj6BBCHY.js";
import { A as AttractionsList } from "./AttractionsList.GqsRjmlQ.js";
import { _ as _export_sfc, G as useData, l as createElementBlock, m as openBlock, x as createBaseVNode, A as createTextVNode, u as unref, z as toDisplayString, j as defineComponent, f as computed, E as resolveComponent, F as Fragment, B as createVNode, p as renderSlot, C as createBlock, q as createCommentVNode } from "./framework.Ch1t4NEC.js";
const googleMapSvg = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1739797400141'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='4275'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='200'%20height='200'%3e%3cpath%20d='M903.618%20479.084v435.308l-136.804-25.322-60.312-72.348-254.12-282.508%20215.752-153.298c108.074%20142.652%20111.482%20107.876%20111.482%20107.876s53.384-79.7%20121.872-11.214l2.13%201.506z'%20fill='%23CCCCCC'%20p-id='4276'%3e%3c/path%3e%3cpath%20d='M381.414%20446.21l448.622%20577.392a81.14%2081.14%200%200%201-7.92%200.398H88.672l292.742-577.79z'%20fill='%23518EF8'%20p-id='4277'%3e%3c/path%3e%3cpath%20d='M668.136%20380.916L0.894%20942.496V202.778c0-45.024%2036.508-81.504%2081.504-81.504h486.578c-20.894%2035.912%2056.578%2058.962%2056.578%20103.504%200%2044.828%2021.434%20120.056%2042.582%20156.138z'%20fill='%2328B446'%20p-id='4278'%3e%3c/path%3e%3cpath%20d='M903.618%20914.392v28.104c0%2042.328-32.278%2077.132-73.582%2081.106L454.626%20653.134l90.872-92.092%20209.734%20206.952%2011.582%2011.44%20136.804%20134.958z'%20fill='%23F2F2F2'%20p-id='4279'%3e%3c/path%3e%3cpath%20d='M645.028%20460.176l-99.53%20100.864-90.872%2092.092L88.672%201024h-6.274C37.402%201024%200.894%20987.492%200.894%20942.496L569.402%20366.38c10.646%2018.226%2083.86-0.228%2098.736%2014.534l27.34%2035.144c13.342%2014.226-61.918%2029.016-50.45%2044.118z'%20fill='%23FFD837'%20p-id='4280'%3e%3c/path%3e%3cpath%20d='M213.808%20455.55c-71.616%200-129.878-58.262-129.878-129.878s58.262-129.878%20129.878-129.878c34.668%200%2067.274%2013.516%2091.82%2038.06l-30.114%2030.108c-16.496-16.5-38.412-25.586-61.706-25.586-48.136%200-87.294%2039.16-87.294%2087.294s39.16%2087.294%2087.294%2087.294c40.792%200%2075.142-28.124%2084.668-66.004h-84.668v-42.582h129.878v21.292c-0.002%2071.618-58.262%20129.88-129.878%20129.88z'%20fill='%23FFFFFF'%20p-id='4281'%3e%3c/path%3e%3cpath%20d='M568.976%20121.276C611.132%2048.772%20689.684%200%20779.618%200c134.476%200%20243.488%20109.012%20243.488%20243.488%200%2033.726-6.87%2065.832-19.248%2095.044a243.952%20243.952%200%200%201-52.49%2077.528c-18.452%2019.616-35.002%2040.34-49.878%2061.518-97.458%20138.848-121.872%20297.37-121.872%20297.37s-26.514-172.12-134.59-314.772c-11.468-15.102-23.846-29.894-37.188-44.116h0.028a241.8%20241.8%200%200%201-38.466-49.68c-21.15-36.082-33.272-78.068-33.272-122.894%200-44.54%2011.952-86.3%2032.846-122.21z'%20fill='%23F14336'%20p-id='4282'%3e%3c/path%3e%3cpath%20d='M779.62%20113.894c71.562%200%20129.562%2058.034%20129.562%20129.596s-58%20129.562-129.562%20129.562-129.596-58-129.596-129.562%2058.036-129.596%20129.596-129.596z'%20fill='%237E2D25'%20p-id='4283'%3e%3c/path%3e%3c/svg%3e";
const _hoisted_1 = ["href"];
const _hoisted_2 = ["src"];
const _sfc_main$1 = {
  __name: "Navigation",
  props: {
    position: {
      type: String,
      required: true
    },
    name: {
      type: String
    }
  },
  setup(__props) {
    const { localeIndex } = useData();
    const message = () => {
      switch (localeIndex.value) {
        case "ja":
          return `${__props.name}まで案内する`;
        default:
          return `Navigate to ${__props.name}`;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        href: `https://www.google.com/maps/dir/?api=1&destination=${__props.position}`,
        target: "_blank",
        rel: "noopener noreferrer nofollow"
      }, [
        createBaseVNode("img", {
          src: unref(googleMapSvg),
          alt: "Google Map Navigation"
        }, null, 8, _hoisted_2),
        createTextVNode(" " + toDisplayString(message()), 1)
      ], 8, _hoisted_1);
    };
  }
};
const Navigation = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5cea27e4"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AttractionContent",
  setup(__props) {
    var _a, _b, _c, _d, _e;
    const { frontmatter, params, localeIndex } = useData();
    const hasStory = computed(() => {
      return !!articles.find((a) => {
        var _a2, _b2;
        return (_b2 = a.attraction) == null ? void 0 : _b2.includes((_a2 = params.value) == null ? void 0 : _a2.name);
      });
    });
    useJsonLD(() => {
      var _a2, _b2, _c2, _d2, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
      const baseInfo = {
        "@type": "TouristAttraction",
        name: (_b2 = (_a2 = frontmatter.value) == null ? void 0 : _a2.attraction) == null ? void 0 : _b2.nameLocale[localeIndex.value],
        description: (_d2 = (_c2 = frontmatter.value) == null ? void 0 : _c2.attraction) == null ? void 0 : _d2.introduce[localeIndex.value],
        url: [location.protocol, "//", location.host, location.pathname].join("")
      };
      if ((_g = attractionsAssets[(_f = (_e2 = frontmatter.value) == null ? void 0 : _e2.attraction) == null ? void 0 : _f.name]) == null ? void 0 : _g.avatar) {
        baseInfo.image = attractionsAssets[(_h = frontmatter.value) == null ? void 0 : _h.attraction.name].avatar;
      }
      if ((_j = (_i = frontmatter.value) == null ? void 0 : _i.attraction) == null ? void 0 : _j.location) {
        const [latitude, longitude] = (_k = frontmatter.value) == null ? void 0 : _k.attraction.location.split(",");
        baseInfo.geo = { "@type": "GeoCoordinates", latitude, longitude };
      }
      if ((_m = (_l = frontmatter.value) == null ? void 0 : _l.attraction) == null ? void 0 : _m.address) {
        baseInfo.address = ((_n = frontmatter.value) == null ? void 0 : _n.attraction.address[localeIndex.value]) || ((_o = frontmatter.value) == null ? void 0 : _o.attraction.address.root);
      }
      return baseInfo;
    });
    if (((_b = (_a = frontmatter.value) == null ? void 0 : _a.attraction) == null ? void 0 : _b.rating) && ((_e = (_d = (_c = frontmatter.value) == null ? void 0 : _c.attraction) == null ? void 0 : _d.review) == null ? void 0 : _e[localeIndex.value])) {
      useJsonLD(() => {
        var _a2, _b2, _c2, _d2, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
        const baseInfo = {
          "@type": "Review",
          itemReviewed: {
            "@id": location.pathname,
            "@type": "LocalBusiness",
            name: (_b2 = (_a2 = frontmatter.value) == null ? void 0 : _a2.attraction) == null ? void 0 : _b2.nameLocale[localeIndex.value]
          },
          reviewRating: { "@type": "Rating", ratingValue: (_d2 = (_c2 = frontmatter.value) == null ? void 0 : _c2.attraction) == null ? void 0 : _d2.rating },
          reviewBody: (_g = (_f = (_e2 = frontmatter.value) == null ? void 0 : _e2.attraction) == null ? void 0 : _f.review) == null ? void 0 : _g[localeIndex.value],
          author: { "@type": "Organization", name: "Oriental Road" }
        };
        if ((_j = attractionsAssets[(_i = (_h = frontmatter.value) == null ? void 0 : _h.attraction) == null ? void 0 : _i.name]) == null ? void 0 : _j.avatar) {
          baseInfo.image = attractionsAssets[(_k = frontmatter.value) == null ? void 0 : _k.attraction.name].avatar;
        }
        if ((_m = (_l = frontmatter.value) == null ? void 0 : _l.attraction) == null ? void 0 : _m.address) {
          baseInfo.itemReviewed.address = ((_n = frontmatter.value) == null ? void 0 : _n.attraction.address[localeIndex.value]) || ((_o = frontmatter.value) == null ? void 0 : _o.attraction.address.root);
        }
        return baseInfo;
      });
    }
    return (_ctx, _cache) => {
      var _a2, _b2, _c2, _d2, _e2, _f, _g, _h, _i, _j, _k;
      const _component_H2 = resolveComponent("H2");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_H2, { title: "Introduction" }),
        renderSlot(_ctx.$slots, "intro"),
        hasStory.value ? (openBlock(), createBlock(_component_H2, {
          key: 0,
          title: "Interests",
          subtitle: "Travel stories",
          actionText: "See all articles",
          actionVisible: false
        })) : createCommentVNode("", true),
        createVNode(ArticlesList, {
          attraction: (_b2 = (_a2 = unref(frontmatter)) == null ? void 0 : _a2.attraction) == null ? void 0 : _b2.name,
          limit: 6
        }, null, 8, ["attraction"]),
        createVNode(_component_H2, {
          title: "Transportation",
          subtitle: "How to Get There"
        }),
        ((_d2 = (_c2 = unref(frontmatter)) == null ? void 0 : _c2.attraction) == null ? void 0 : _d2.location) ? (openBlock(), createBlock(Navigation, {
          key: 1,
          name: (_f = (_e2 = unref(frontmatter)) == null ? void 0 : _e2.attraction) == null ? void 0 : _f.nameLocale[unref(localeIndex)],
          position: (_g = unref(frontmatter)) == null ? void 0 : _g.attraction.location
        }, null, 8, ["name", "position"])) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "transportation"),
        createVNode(_component_H2, {
          title: "Nearby",
          subtitle: "Explore the Area"
        }),
        renderSlot(_ctx.$slots, "nearby"),
        createVNode(AttractionsList, {
          attractions: ((_h = unref(frontmatter)) == null ? void 0 : _h.nearbyAttractions) || [],
          city: (_i = unref(params)) == null ? void 0 : _i.cityName,
          exclude: [(_k = (_j = unref(frontmatter)) == null ? void 0 : _j.attraction) == null ? void 0 : _k.name],
          limit: 6
        }, null, 8, ["attractions", "city", "exclude"])
      ], 64);
    };
  }
});
export {
  _sfc_main as _
};
