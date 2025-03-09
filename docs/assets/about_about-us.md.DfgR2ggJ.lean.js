import { V as VPTeamMembers, a as VPTeamPage } from "./chunks/theme.BvkY57QZ.js";
import { l as createElementBlock, m as openBlock, x as createBaseVNode, B as createVNode, A as createTextVNode, D as withCtx, u as unref } from "./chunks/framework.Ch1t4NEC.js";
const __pageData = JSON.parse(`{"title":"About Us","description":"Since 2010, we've promoted travel to Chongqing. In 2024, we launched this site to share China's magic with more travel enthusiasts.","frontmatter":{"prev":false,"next":false,"sidebar":true,"title":"About Us","description":"Since 2010, we've promoted travel to Chongqing. In 2024, we launched this site to share China's magic with more travel enthusiasts.","ld+json":[{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"About Us","item":"https://www.orientalroad.com/about-us"}]}],"head":[["link",{"rel":"alternate","href":"https://www.orientalroad.com/about/about-us","hreflang":"x-default"}],["link",{"rel":"alternate","href":"https://www.orientalroad.com/about/about-us","hreflang":"en"}],["link",{"rel":"alternate","href":"https://www.orientalroad.com/ja/about/about-us","hreflang":"ja"}],["link",{"rel":"canonical","href":"https://www.orientalroad.com/about/about-us"}],["meta",{"name":"title","content":"About Us"}],["script",{"type":"application/ld+json"},"[{\\"@context\\":\\"https://schema.org/\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"About Us\\",\\"item\\":\\"https://www.orientalroad.com/about-us\\"}]}]"]]},"headers":[],"relativePath":"about/about-us.md","filePath":"en/about/about-us.md","lastUpdated":1736063886000}`);
const __default__ = { name: "about/about-us.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    const members = [
      {
        avatar: "https://www.github.com/chiaweilee.png",
        name: "Chiawei Lee",
        title: "Creator, Chief Editor",
        desc: "Raised and found in Chongqing, familiar with everything there, He have spent a decade as a backpacker in Southeast Asia. He also have a passion for photography, videography, and adventure."
      }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _cache[0] || (_cache[0] = createBaseVNode("h1", {
          id: "about-us",
          tabindex: "-1"
        }, [
          createTextVNode("About Us "),
          createBaseVNode("a", {
            class: "header-anchor",
            href: "#about-us",
            "aria-label": 'Permalink to "About Us"'
          }, "​")
        ], -1)),
        _cache[1] || (_cache[1] = createBaseVNode("p", null, "Our team has been dedicated to promoting travel to Chongqing for people around the globe since 2010. We are delighted to see Chongqing gradually become popular online. With China's visa policies becoming increasingly clear, we decided to launch this website in 2024 to promote the magical Eastern country to more China travel enthusiasts.", -1)),
        createVNode(unref(VPTeamPage), null, {
          default: withCtx(() => [
            createVNode(unref(VPTeamMembers), { members })
          ]),
          _: 1
        })
      ]);
    };
  }
});
export {
  __pageData,
  _sfc_main as default
};
