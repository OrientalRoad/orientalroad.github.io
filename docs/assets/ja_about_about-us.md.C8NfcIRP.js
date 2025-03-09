import { V as VPTeamMembers, a as VPTeamPage } from "./chunks/theme.BvkY57QZ.js";
import { l as createElementBlock, m as openBlock, x as createBaseVNode, B as createVNode, A as createTextVNode, D as withCtx, u as unref } from "./chunks/framework.Ch1t4NEC.js";
const __pageData = JSON.parse('{"title":"私たちについて","description":"当チームは2010年以来、世界中の人々に重慶への旅行を促進してきました。2024年にこのウェブサイトを立ち上げ、より多くの中国旅行愛好家に神秘的な東の国を紹介します。","frontmatter":{"prev":false,"next":false,"sidebar":true,"title":"私たちについて","description":"当チームは2010年以来、世界中の人々に重慶への旅行を促進してきました。2024年にこのウェブサイトを立ち上げ、より多くの中国旅行愛好家に神秘的な東の国を紹介します。","ld+json":[{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"私たちについて","item":"https://www.orientalroad.com/ja/about-us"}]}],"head":[["link",{"rel":"alternate","href":"https://www.orientalroad.com/about/about-us","hreflang":"x-default"}],["link",{"rel":"alternate","href":"https://www.orientalroad.com/about/about-us","hreflang":"en"}],["link",{"rel":"alternate","href":"https://www.orientalroad.com/ja/about/about-us","hreflang":"ja"}],["link",{"rel":"canonical","href":"https://www.orientalroad.com/ja/about/about-us"}],["meta",{"name":"title","content":"私たちについて"}],["script",{"type":"application/ld+json"},"[{\\"@context\\":\\"https://schema.org/\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"私たちについて\\",\\"item\\":\\"https://www.orientalroad.com/ja/about-us\\"}]}]"]]},"headers":[],"relativePath":"ja/about/about-us.md","filePath":"ja/about/about-us.md","lastUpdated":1736064484000}');
const __default__ = { name: "ja/about/about-us.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    const members = [
      {
        avatar: "https://www.github.com/chiaweilee.png",
        name: "Chiawei Lee",
        title: "創設者、編集長",
        desc: "重慶生まれで、そこでのすべてに精通しています。東南アジアをバックパッカーとして10年間旅した経験も持っています。また、写真撮影、ビデオ制作、冒険にも情熱を注いでいます。"
      }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _cache[0] || (_cache[0] = createBaseVNode("h1", {
          id: "私たちについて",
          tabindex: "-1"
        }, [
          createTextVNode("私たちについて "),
          createBaseVNode("a", {
            class: "header-anchor",
            href: "#私たちについて",
            "aria-label": 'Permalink to "私たちについて"'
          }, "​")
        ], -1)),
        _cache[1] || (_cache[1] = createBaseVNode("p", null, "当チームは、2010年以来、世界中の人々に重慶への旅行を促進することに尽力してきました。重慶が次第にオンライン上で人気を集めることを喜んでいます。中国のビザ政策がますます明確になるにつれ、私たちは2024年にこのウェブサイトを立ち上げ、より多くの中国旅行愛好家に神秘的な東の国を紹介することを決断しました。", -1)),
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
