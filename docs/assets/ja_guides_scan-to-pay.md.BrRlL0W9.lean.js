import { _ as _imports_0 } from "./chunks/alipay3.c5o3sI-L.js";
import { _ as _export_sfc, E as resolveComponent, l as createElementBlock, m as openBlock, ap as createStaticVNode, x as createBaseVNode, B as createVNode, D as withCtx, A as createTextVNode } from "./chunks/framework.Ch1t4NEC.js";
const __pageData = JSON.parse('{"title":"旅行支払いガイド","titleTemplate":"中国:title | Oriental Road","description":"中国では、AlipayやWeChat PayでのQRコード決済、銀行カード、クレジットカード、現金が一般的な支払い方法です。本ガイドでは、旅行のヒント、支払い方法の情報および使用方法を提供します。","frontmatter":{"layout":"guide","category":"Before you go","index":100,"title":"旅行支払いガイド","titleTemplate":"中国:title | Oriental Road","description":"中国では、AlipayやWeChat PayでのQRコード決済、銀行カード、クレジットカード、現金が一般的な支払い方法です。本ガイドでは、旅行のヒント、支払い方法の情報および使用方法を提供します。","ld+json":[{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"中国旅行の支払い方法は何ですか？","acceptedAnswer":{"@type":"Answer","text":"現在、最も一般的な支払い方法はQRコードをスキャンすることです。主なオプションにはAlipay（支付宝）とWeChat Pay（微信支付）があります。また、ショッピングモールやレストランでは銀行カードやクレジットカードも一般的に受け付けられています。もちろん、現金での支払いも可能です。"}}]}],"head":[["link",{"rel":"alternate","href":"https://www.orientalroad.com/guides/scan-to-pay","hreflang":"x-default"}],["link",{"rel":"alternate","href":"https://www.orientalroad.com/guides/scan-to-pay","hreflang":"en"}],["link",{"rel":"alternate","href":"https://www.orientalroad.com/ja/guides/scan-to-pay","hreflang":"ja"}],["link",{"rel":"canonical","href":"https://www.orientalroad.com/ja/guides/scan-to-pay"}],["meta",{"name":"title","content":"旅行支払いガイド"}],["script",{"type":"application/ld+json"},"[{\\"@context\\":\\"https://schema.org/\\",\\"@type\\":\\"FAQPage\\",\\"mainEntity\\":[{\\"@type\\":\\"Question\\",\\"name\\":\\"中国旅行の支払い方法は何ですか？\\",\\"acceptedAnswer\\":{\\"@type\\":\\"Answer\\",\\"text\\":\\"現在、最も一般的な支払い方法はQRコードをスキャンすることです。主なオプションにはAlipay（支付宝）とWeChat Pay（微信支付）があります。また、ショッピングモールやレストランでは銀行カードやクレジットカードも一般的に受け付けられています。もちろん、現金での支払いも可能です。\\"}}]}]"]]},"headers":[],"relativePath":"ja/guides/scan-to-pay.md","filePath":"ja/guides/scan-to-pay.md","lastUpdated":1736865350000}');
const _sfc_main = { name: "ja/guides/scan-to-pay.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_LazyLoadImage = resolveComponent("LazyLoadImage");
  const _component_Flex = resolveComponent("Flex");
  return openBlock(), createElementBlock("div", null, [
    _cache[2] || (_cache[2] = createStaticVNode("", 9)),
    createBaseVNode("p", null, [
      createVNode(_component_Flex, null, {
        default: withCtx(() => [
          _cache[0] || (_cache[0] = createBaseVNode("div", null, "ユーザーは商店が提供するQRコードをスキャンし、金額を入力して支払いを完了します。支払いが完了すると、商店は通常、音声通知で取引が成功したことを確認します。これは小さな販売業者、小さなスーパーマーケット、レストランで一般的な支払い方法です。個人と商店の両方がこの方法を使用できます。", -1)),
          createBaseVNode("div", null, [
            createVNode(_component_LazyLoadImage, {
              src: "/assets/apps/alipay1.webp",
              alt: "商店のコードをスキャンする"
            })
          ])
        ]),
        _: 1
      })
    ]),
    _cache[3] || (_cache[3] = createBaseVNode("h4", {
      id: "商店がユーザーのコードをスキャンする",
      tabindex: "-1"
    }, [
      createTextVNode("商店がユーザーのコードをスキャンする "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#商店がユーザーのコードをスキャンする",
        "aria-label": 'Permalink to "商店がユーザーのコードをスキャンする"'
      }, "​")
    ], -1)),
    createBaseVNode("p", null, [
      createVNode(_component_Flex, null, {
        default: withCtx(() => [
          _cache[1] || (_cache[1] = createBaseVNode("div", null, "ユーザーは自分の支払いコードを提示し、商店のデバイスがこれをスキャンして支払いを完了します。この方法は大規模なスーパーマーケットで非常に一般的ですが、小さなスーパーマーケットやレストランでも携帯型デバイスで支払いコードをスキャンすることがあります。これは主に商店によって使用されます。", -1)),
          createBaseVNode("div", null, [
            createVNode(_component_LazyLoadImage, {
              src: "/assets/apps/alipay2.webp",
              alt: "商店がユーザーのコードをスキャンする"
            })
          ])
        ]),
        _: 1
      })
    ]),
    _cache[4] || (_cache[4] = createStaticVNode("", 41))
  ]);
}
const scanToPay = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  scanToPay as default
};
