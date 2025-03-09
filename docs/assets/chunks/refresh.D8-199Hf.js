import { G as useData, j as defineComponent, E as resolveComponent, l as createElementBlock, m as openBlock, a4 as normalizeStyle, C as createBlock, D as withCtx, B as createVNode, x as createBaseVNode, p as renderSlot, F as Fragment, _ as _export_sfc } from "./framework.Ch1t4NEC.js";
import { v as getDataByLang, w as data } from "./theme.BvkY57QZ.js";
const beijingCover1440 = "/assets/beijing-1440.center.70c36f54.webp";
const beijingVideo1440 = "/assets/beijing-1440.DPREfqir.webm";
const beijingCover540 = "/assets/beijing-540.center.65f983f3.webp";
const beijingVideo540 = "/assets/beijing-540.CcLohmYt.webm";
const chongqingCover1440 = "/assets/chongqing-1440.center.b64772b2.webp";
const chongqingVideo1440 = "/assets/chongqing-1440.CLd5u9Y5.webm";
const chongqingCover540 = "/assets/chongqing-540.center.742a50d0.webp";
const chongqingVideo540 = "/assets/chongqing-540.k9LbcGJT.webm";
const chongqing2Cover1440 = "/assets/chongqing2-1440.center.100d397f.webp";
const chongqing2Video1440 = "/assets/chongqing2-1440.73E1hpv_.webm";
const chongqing2Cover540 = "/assets/chongqing2-540.center.dcd1660f.webp";
const chongqing2Video540 = "/assets/chongqing2-540.Drq9RlXR.webm";
const chuanxiCover1440 = "/assets/chuanxi-1440.center.795d5fa4.webp";
const chuanxiVideo1440 = "/assets/chuanxi-1440.CcLfcZDq.webm";
const chuanxiCover540 = "/assets/chuanxi-540.center.944a0c41.webp";
const chuanxiVideo540 = "/assets/chuanxi-540.5EFX0zRz.webm";
const daliCover1440 = "/assets/dali-1440.center.ea1ef398.webp";
const daliVideo1440 = "/assets/dali-1440.nh_qS-5z.webm";
const daliCover540 = "/assets/dali-540.center.08bc5ff5.webp";
const daliVideo540 = "/assets/dali-540.CEtDhOPb.webm";
const pandaCover1440 = "/assets/panda-1440.center.8a1a887d.webp";
const pandaVideo1440 = "/assets/panda-1440.BBjjqN1N.webm";
const pandaCover540 = "/assets/panda-540.center.353a8015.webp";
const pandaVideo540 = "/assets/panda-540.CpmV2mAZ.webm";
const qiandaohuCover1440 = "/assets/qiandaohu-1440.center.8b450869.webp";
const qiandaohuVideo1440 = "/assets/qiandaohu-1440.Cs9I5-1H.webm";
const qiandaohuCover540 = "/assets/qiandaohu-540.center.28463992.webp";
const qiandaohuVideo540 = "/assets/qiandaohu-540.BiG65IXF.webm";
const xinjiangCover1440 = "/assets/xinjiang-1440.center.ea6a5f7d.webp";
const xinjiangVideo1440 = "/assets/xinjiang-1440.BMv26XNy.webm";
const xinjiangCover540 = "/assets/xinjiang-540.center.3083c9da.webp";
const xinjiangVideo540 = "/assets/xinjiang-540.vq76mHlX.webm";
const postcard = [
  {
    cover: {
      default: beijingCover1440,
      mobile: beijingCover540
    },
    video: {
      default: beijingVideo1440,
      mobile: beijingVideo540
    },
    copyright: "jeremy888",
    name: {
      ja: "北京",
      root: "Beijing"
    },
    link: {
      ja: "/ja/beijing",
      root: "/beijing"
    }
  },
  {
    cover: {
      default: chongqingCover1440,
      mobile: chongqingCover540
    },
    video: {
      default: chongqingVideo1440,
      mobile: chongqingVideo540
    },
    copyright: "D-GM",
    name: {
      ja: "重慶",
      root: "Chongqing"
    },
    link: {
      ja: "/ja/chongqing",
      root: "/chongqing"
    }
  },
  {
    cover: {
      default: chongqing2Cover1440,
      mobile: chongqing2Cover540
    },
    video: {
      default: chongqing2Video1440,
      mobile: chongqing2Video540
    },
    copyright: "D-GM",
    name: {
      ja: "重慶",
      root: "Chongqing"
    },
    link: {
      ja: "/ja/chongqing",
      root: "/chongqing"
    }
  },
  {
    cover: {
      default: daliCover1440,
      mobile: daliCover540
    },
    video: {
      default: daliVideo1440,
      mobile: daliVideo540
    },
    copyright: "pengpengtai",
    name: {
      ja: "大理",
      root: "Dali"
    },
    where: {
      ja: "雲南",
      root: "Yunnan"
    },
    link: {
      ja: "/ja/dali",
      root: "/dali"
    }
  },
  {
    cover: {
      default: xinjiangCover1440,
      mobile: xinjiangCover540
    },
    video: {
      default: xinjiangVideo1440,
      mobile: xinjiangVideo540
    },
    copyright: "书生李尔基",
    name: {
      ja: "シンジャン",
      root: "Xinjiang"
    }
  },
  {
    cover: {
      default: chuanxiCover1440,
      mobile: chuanxiCover540
    },
    video: {
      default: chuanxiVideo1440,
      mobile: chuanxiVideo540
    },
    copyright: "书生李尔基",
    name: {
      ja: "川西",
      root: "Western Sichuan"
    }
  },
  {
    cover: {
      default: qiandaohuCover1440,
      mobile: qiandaohuCover540
    },
    video: {
      default: qiandaohuVideo1440,
      mobile: qiandaohuVideo540
    },
    copyright: "jswing_1",
    name: {
      ja: "千島湖",
      root: "Thousand Island Lake"
    },
    where: {
      ja: "杭州",
      root: "Hangzhou"
    },
    whereLink: {
      ja: "/ja/hangzhou",
      root: "/hangzhou"
    }
  },
  {
    cover: {
      default: pandaCover1440,
      mobile: pandaCover540
    },
    video: {
      default: pandaVideo1440,
      mobile: pandaVideo540
    },
    copyright: "RoyBuri",
    name: {
      ja: "成都パンダ研究基地",
      root: "Chengdu Panda Research Base"
    },
    link: {
      ja: "/ja/chengdu/attractions/chengdu-panda-research-base",
      root: "/chengdu/attractions/chengdu-panda-research-base"
    }
  }
];
function getRandomPostcard(excludeIndex = -1) {
  const postcardCopy = [...postcard];
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * postcardCopy.length);
  } while (randomIndex === excludeIndex);
  const selectedElement = postcardCopy[randomIndex];
  return [selectedElement, randomIndex];
}
const getGuidesData = () => {
  const { localeIndex } = useData();
  return getDataByLang(data, localeIndex.value);
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Item",
  props: {
    link: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: "300px"
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_LazyLoadImage = resolveComponent("LazyLoadImage");
      const _component_Link = resolveComponent("Link");
      return openBlock(), createElementBlock("div", {
        class: "rank-item thumbnails",
        style: normalizeStyle({ width: __props.size, height: __props.size })
      }, [
        __props.link ? (openBlock(), createBlock(_component_Link, {
          key: 0,
          href: __props.link
        }, {
          default: withCtx(() => [
            createVNode(_component_LazyLoadImage, {
              src: __props.avatar,
              alt: __props.name
            }, null, 8, ["src", "alt"]),
            createBaseVNode("span", null, [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ])
          ]),
          _: 3
        }, 8, ["href"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createVNode(_component_LazyLoadImage, {
            src: __props.avatar,
            alt: __props.name
          }, null, 8, ["src", "alt"]),
          createBaseVNode("span", null, [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ])
        ], 64))
      ], 4);
    };
  }
});
const Item = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ca538108"]]);
const refreshSvg = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='4179'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='20'%20height='20'%3e%3cpath%20d='M1013.274531%20617.561191l-157.495039-157.495039c-9.031974-9.031974-24.837927-9.031974-33.869901%200l-157.495039%20157.495039c-9.031974%209.031974-7.338479%2033.305402%2014.112459%2033.305402l116.851158%200c-47.982359%20109.512679-157.495039%20185.719956-283.942668%20185.719956-120.802646%200-226.363837-71.126792-277.168688-173.865491L137.173098%20662.721058C193.058434%20816.264609%20338.699008%20925.777288%20512%20925.777288c176.687982%200%20326.280044-114.593164%20377.649394-274.910695l112.899669%200C1024%20650.866593%201022.306505%20626.028666%201013.274531%20617.561191z'%20fill='%23fff'%20/%3e%3cpath%20d='M512%20191.364939c121.367144%200%20227.492834%2071.126792%20278.297685%20173.865491l97.093716%200C832.635061%20211.122381%20685.865491%20101.609702%20513.693495%20101.609702c-176.687982%200-326.280044%20114.593164-377.649394%20274.910695L21.450937%20376.520397c-21.450937%200-19.192944%2024.837927-10.725469%2033.305402l157.495039%20157.495039c9.031974%209.031974%2024.837927%209.031974%2033.305402%200l157.495039-157.495039c9.031974-9.031974%207.338479-33.305402-14.112459-33.305402L228.057332%20376.520397C276.039691%20267.572216%20384.987872%20191.364939%20512%20191.364939z'%20fill='%23fff'%20/%3e%3c/svg%3e";
export {
  Item as I,
  getGuidesData as a,
  getRandomPostcard as g,
  refreshSvg as r
};
