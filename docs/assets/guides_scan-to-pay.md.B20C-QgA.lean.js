import { _ as _imports_0 } from "./chunks/alipay3.c5o3sI-L.js";
import { _ as _export_sfc, E as resolveComponent, l as createElementBlock, m as openBlock, ap as createStaticVNode, x as createBaseVNode, B as createVNode, D as withCtx, A as createTextVNode } from "./chunks/framework.Ch1t4NEC.js";
const __pageData = JSON.parse('{"title":"Travel Payments","titleTemplate":"China :title Guide | Oriental Road","description":"In China, common payment methods include QR code scanning, bank cards, credit cards, and cash. This guide offers travel tips, payment methods info, and usage.","frontmatter":{"layout":"guide","category":"Before you go","index":100,"title":"Travel Payments","titleTemplate":"China :title Guide | Oriental Road","description":"In China, common payment methods include QR code scanning, bank cards, credit cards, and cash. This guide offers travel tips, payment methods info, and usage.","ld+json":[{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What are the payment methods for traveling in China?","acceptedAnswer":{"@type":"Answer","text":"The most common payment method is scanning a QR code. The main options are Alipay and WeChat Pay. Additionally, bank cards and credit cards are widely accepted in shopping malls and restaurants. Cash payments are also possible."}}]}],"head":[["link",{"rel":"alternate","href":"https://www.orientalroad.com/guides/scan-to-pay","hreflang":"x-default"}],["link",{"rel":"alternate","href":"https://www.orientalroad.com/guides/scan-to-pay","hreflang":"en"}],["link",{"rel":"alternate","href":"https://www.orientalroad.com/ja/guides/scan-to-pay","hreflang":"ja"}],["link",{"rel":"canonical","href":"https://www.orientalroad.com/guides/scan-to-pay"}],["meta",{"name":"title","content":"Travel Payments"}],["script",{"type":"application/ld+json"},"[{\\"@context\\":\\"https://schema.org/\\",\\"@type\\":\\"FAQPage\\",\\"mainEntity\\":[{\\"@type\\":\\"Question\\",\\"name\\":\\"What are the payment methods for traveling in China?\\",\\"acceptedAnswer\\":{\\"@type\\":\\"Answer\\",\\"text\\":\\"The most common payment method is scanning a QR code. The main options are Alipay and WeChat Pay. Additionally, bank cards and credit cards are widely accepted in shopping malls and restaurants. Cash payments are also possible.\\"}}]}]"]]},"headers":[],"relativePath":"guides/scan-to-pay.md","filePath":"en/guides/scan-to-pay.md","lastUpdated":1736865350000}');
const _sfc_main = { name: "guides/scan-to-pay.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_LazyLoadImage = resolveComponent("LazyLoadImage");
  const _component_Flex = resolveComponent("Flex");
  return openBlock(), createElementBlock("div", null, [
    _cache[2] || (_cache[2] = createStaticVNode("", 9)),
    createBaseVNode("p", null, [
      createVNode(_component_Flex, null, {
        default: withCtx(() => [
          _cache[0] || (_cache[0] = createBaseVNode("div", null, "Users scan the QR code provided by the merchant, enter the amount, and then pay. After the payment is made, merchants typically receive an audio notification confirming the successful transaction. This is a common payment method for small vendors, small supermarkets, and restaurants. Both individuals and merchants can use this method.", -1)),
          createBaseVNode("div", null, [
            createVNode(_component_LazyLoadImage, {
              src: "/assets/apps/alipay1.webp",
              alt: "Scan Merchant’s Code"
            })
          ])
        ]),
        _: 1
      })
    ]),
    _cache[3] || (_cache[3] = createBaseVNode("h4", {
      id: "merchant-scan-user-s-code",
      tabindex: "-1"
    }, [
      createTextVNode("Merchant Scan User’s Code "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#merchant-scan-user-s-code",
        "aria-label": 'Permalink to "Merchant Scan User’s Code"'
      }, "​")
    ], -1)),
    createBaseVNode("p", null, [
      createVNode(_component_Flex, null, {
        default: withCtx(() => [
          _cache[1] || (_cache[1] = createBaseVNode("div", null, "Users present their payment code, which is then scanned by the merchant's device to complete the payment. This method is very common in large supermarkets, and small supermarkets and restaurants may also have portable devices to scan payment codes. This is typically used by merchants.", -1)),
          createBaseVNode("div", null, [
            createVNode(_component_LazyLoadImage, {
              src: "/assets/apps/alipay2.webp",
              alt: "Merchant Scan User’s Code"
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
