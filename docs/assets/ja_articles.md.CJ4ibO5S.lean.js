import { u as useLocale, b as useJsonLD } from "./chunks/theme.BvkY57QZ.js";
import { A as ArticlesList } from "./chunks/ArticlesList.Wj6BBCHY.js";
import { j as defineComponent, E as resolveComponent, l as createElementBlock, m as openBlock, B as createVNode, u as unref } from "./chunks/framework.Ch1t4NEC.js";
import "./chunks/index.DfW4spIt.js";
import "./chunks/assets.9ONrYk7y.js";
import "./chunks/constants.Dbpo2ZGA.js";
const __pageData = JSON.parse('{"title":"中国旅行物語","description":"中国の魅力を伝える旅行物語。現地の文化、風景、人々との出会いを通じて、心に残る体験をお届けします。旅のインスピレーションを得て、新しい冒険を始めてみませんか？","frontmatter":{"layout":"container","localNav":false,"head":[["link",{"rel":"alternate","href":"https://www.orientalroad.com/articles","hreflang":"x-default"}],["link",{"rel":"alternate","href":"https://www.orientalroad.com/articles","hreflang":"en"}],["link",{"rel":"alternate","href":"https://www.orientalroad.com/ja/articles","hreflang":"ja"}],["link",{"rel":"canonical","href":"https://www.orientalroad.com/ja/articles"}],["meta",{"name":"title","content":"中国旅行物語"}]],"title":"中国旅行物語","description":"中国の魅力を伝える旅行物語。現地の文化、風景、人々との出会いを通じて、心に残る体験をお届けします。旅のインスピレーションを得て、新しい冒険を始めてみませんか？"},"headers":[],"params":{"lang":"ja","frontmatter":{"title":"中国旅行物語","description":"中国の魅力を伝える旅行物語。現地の文化、風景、人々との出会いを通じて、心に残る体験をお届けします。旅のインスピレーションを得て、新しい冒険を始めてみませんか？"}},"relativePath":"ja/articles.md","filePath":"[lang]/articles.md","lastUpdated":1740851186000}');
const __default__ = { name: "ja/articles.md" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props) {
    const { $t } = useLocale();
    useJsonLD(() => ({
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: $t("China Travel Stories"),
          item: `https://www.orientalroad.com${location.pathname}`
        }
      ]
    }));
    return (_ctx, _cache) => {
      const _component_H2 = resolveComponent("H2");
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_H2, {
          title: unref($t)("Inspiration"),
          subtitle: unref($t)("Get inspired by travel stories")
        }, null, 8, ["title", "subtitle"]),
        createVNode(ArticlesList)
      ]);
    };
  }
});
export {
  __pageData,
  _sfc_main as default
};
