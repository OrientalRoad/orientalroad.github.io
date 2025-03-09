import { g as getDestinations } from "./chunks/index.D4wk3HXz.js";
import { f as computed, l as createElementBlock, m as openBlock, x as createBaseVNode, ap as createStaticVNode, A as createTextVNode, z as toDisplayString, F as Fragment, y as renderList } from "./chunks/framework.Ch1t4NEC.js";
import "./chunks/theme.BvkY57QZ.js";
import "./chunks/index.3tBy4j5x.js";
const visaFreeCountries = [
  { name: "Austria", continent: "European", visa240: true, hainan: true },
  { name: "Belgium", continent: "European", visa240: true, hainan: true },
  { name: "Czech Republic", continent: "European", visa240: true, hainan: true },
  { name: "Denmark", continent: "European", d30: true, visa240: true, hainan: true },
  { name: "Estonia", continent: "European", visa240: true, hainan: true },
  { name: "Finland", continent: "European", d30: true, visa240: true, hainan: true },
  { name: "France", continent: "European", visa240: true, hainan: true },
  { name: "Germany", continent: "European", visa240: true, hainan: true },
  { name: "Greece", continent: "European", visa240: true, hainan: true },
  { name: "Hungary", continent: "European", visa240: true, hainan: true },
  { name: "Andorra", continent: "European", d30: true },
  { name: "Liechtenstein", continent: "European", d30: true },
  { name: "Iceland", continent: "European", d30: true, visa240: true, hainan: true },
  { name: "San Marino", continent: "European", d30: true },
  { name: "Italy", continent: "European", visa240: true, hainan: true },
  { name: "Latvia", continent: "European", visa240: true, hainan: true },
  { name: "Lithuania", continent: "European", visa240: true, hainan: true },
  { name: "Luxembourg", continent: "European", visa240: true },
  { name: "Malta", continent: "European", visa240: true, hainan: true },
  { name: "Netherlands", continent: "European", visa240: true, hainan: true },
  { name: "Poland", continent: "European", visa240: true, hainan: true },
  { name: "Portugal", continent: "European", visa240: true, hainan: true },
  { name: "Slovakia", continent: "European", d30: true, visa240: true, hainan: true },
  { name: "Slovenia", continent: "European", visa240: true, hainan: true },
  { name: "Spain", continent: "European", visa240: true, hainan: true },
  { name: "Sweden", continent: "European", visa240: true, hainan: true },
  { name: "Switzerland", continent: "European", visa240: true, hainan: true },
  { name: "Monaco", continent: "European", d30: true, visa240: true, hainan: true },
  { name: "Russia", continent: "European", visa240: true, hainan: true },
  { name: "United Kingdom", continent: "European", visa240: true, hainan: true },
  { name: "Ireland", continent: "European", visa240: true, hainan: true },
  { name: "Cyprus", continent: "European", visa240: true, hainan: true },
  { name: "Bulgaria", continent: "European", visa240: true, hainan: true },
  { name: "Romania", continent: "European", visa240: true, hainan: true },
  { name: "Ukraine", continent: "European", visa240: true, hainan: true },
  { name: "Serbia", continent: "European", visa240: true, d30: true, hainan: true },
  { name: "Croatia", continent: "European", visa240: true, hainan: true },
  { name: "Bosnia and Herzegovina", continent: "European", visa240: true, d30: true, hainan: true },
  { name: "Montenegro", continent: "European", visa240: true, hainan: true },
  { name: "North Macedonia", continent: "European", visa240: true, hainan: true },
  { name: "Albania", continent: "European", visa240: true, d30: true, hainan: true },
  { name: "Belarus", continent: "European", visa240: true, d30: true, hainan: true },
  { name: "Norway", continent: "European", d30: true, visa240: true, hainan: true },
  { name: "Mauritius", continent: "Africa", d30: true },
  { name: "Seychelles", continent: "Africa", d30: true },
  { name: "Antigua and Barbuda", continent: "American", d30: true },
  { name: "United States", continent: "American", visa240: true, hainan: true },
  { name: "Grenada", continent: "American", d30: true },
  { name: "Ecuador", continent: "American", d30: true },
  { name: "Suriname", continent: "American", d30: true },
  { name: "Dominica", continent: "American", d30: true },
  { name: "Barbados", continent: "American", d30: true },
  { name: "Canada", continent: "American", visa240: true, hainan: true },
  { name: "Brazil", continent: "American", visa240: true, hainan: true },
  { name: "Mexico", continent: "American", visa240: true, hainan: true },
  { name: "Argentina", continent: "American", visa240: true, hainan: true },
  { name: "Chile", continent: "American", visa240: true, hainan: true },
  { name: "The Bahamas", continent: "American", d30: true },
  { name: "Australia", continent: "Oceanian", visa240: true, hainan: true },
  { name: "New Zealand", continent: "Oceanian", visa240: true, hainan: true },
  { name: "Tonga", continent: "Oceanian", d30: true },
  { name: "Fiji", continent: "Oceanian", d30: true },
  { name: "Maldives", continent: "Asian", d30: true },
  { name: "Malaysia", continent: "Asian", hainan: true },
  { name: "Armenia", continent: "Asian", d30: true },
  { name: "Kazakhstan", continent: "Asian", d30: true, hainan: true },
  { name: "Georgia", continent: "Asian", d30: true },
  { name: "Thailand", continent: "Asian", d30: true, hainan: true },
  { name: "South Korea", continent: "Asian", d30: true, visa240: true, hainan: true },
  { name: "The Republic of Korea", continent: "Asian", hainan: true },
  { name: "The Philippines", continent: "Asian", hainan: true },
  { name: "Indonesia", continent: "Asian", hainan: true },
  { name: "Japan", continent: "Asian", visa240: true, hainan: true },
  { name: "Singapore", continent: "Asian", visa240: true, d30: true, hainan: true },
  { name: "Brunei", continent: "Asian", visa240: true, hainan: true },
  { name: "United Arab Emirates", continent: "Asian", visa240: true, d30: true, hainan: true },
  { name: "Qatar", continent: "Asian", visa240: true, d30: true, hainan: true }
];
const __pageData = JSON.parse('{"title":"Travel Visa Guide","titleTemplate":"China :title | Oriental Road","description":"Which cities and airports in China support the 240-hour transit visa? Which countries is it applicable to? This guide ensures your journey is worry-free.","frontmatter":{"layout":"guide","category":"Before you go","index":9999,"title":"Travel Visa Guide","titleTemplate":"China :title | Oriental Road","description":"Which cities and airports in China support the 240-hour transit visa? Which countries is it applicable to? This guide ensures your journey is worry-free.","reference":[{"title":"中国过境免签政策全面放宽优化","href":"https://www.gov.cn/lianbo/bumen/202412/content_6993129.htm","site":"www.gov.cn"}],"ld+json":[{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How many types of tourist visas are there in China?","acceptedAnswer":{"@type":"Answer","text":"<p>There are four main types of tourist visas in China: L Visa, Transit Visa (G Visa), Group Tourist Visa, and Visa-Free entry. Among these, the most convenient and popular is the 240 Hours Transit Visa.</p>"}},{"@type":"Question","name":"Do I need to apply for a 240-Hour Transit Visa in advance?","acceptedAnswer":{"@type":"Answer","text":"<p>No. As long as you meet the eligibility criteria, you can obtain this visa upon arrival in China. However, please make sure to check the specific requirements and ensure that your final destination is covered under the transit visa program.</p>"}},{"@type":"Question","name":"Is the process for a 240-Hour Transit Visa complicated?","acceptedAnswer":{"@type":"Answer","text":"<p>The process for a 240-Hour Transit Visa is very simple, and many people have already traveled to China using it. You only need to provide your passport, flight itinerary, and proof of onward travel. Compared to an L Visa, there is no need to submit extensive documentation or undergo a lengthy application process.</p>"}}]}],"head":[["link",{"rel":"alternate","href":"https://www.orientalroad.com/guides/china-tourist-visa","hreflang":"x-default"}],["link",{"rel":"alternate","href":"https://www.orientalroad.com/guides/china-tourist-visa","hreflang":"en"}],["link",{"rel":"alternate","href":"https://www.orientalroad.com/ja/guides/china-tourist-visa","hreflang":"ja"}],["link",{"rel":"canonical","href":"https://www.orientalroad.com/guides/china-tourist-visa"}],["meta",{"name":"title","content":"Travel Visa Guide"}],["script",{"type":"application/ld+json"},"[{\\"@context\\":\\"https://schema.org/\\",\\"@type\\":\\"FAQPage\\",\\"mainEntity\\":[{\\"@type\\":\\"Question\\",\\"name\\":\\"How many types of tourist visas are there in China?\\",\\"acceptedAnswer\\":{\\"@type\\":\\"Answer\\",\\"text\\":\\"<p>There are four main types of tourist visas in China: L Visa, Transit Visa (G Visa), Group Tourist Visa, and Visa-Free entry. Among these, the most convenient and popular is the 240 Hours Transit Visa.</p>\\"}},{\\"@type\\":\\"Question\\",\\"name\\":\\"Do I need to apply for a 240-Hour Transit Visa in advance?\\",\\"acceptedAnswer\\":{\\"@type\\":\\"Answer\\",\\"text\\":\\"<p>No. As long as you meet the eligibility criteria, you can obtain this visa upon arrival in China. However, please make sure to check the specific requirements and ensure that your final destination is covered under the transit visa program.</p>\\"}},{\\"@type\\":\\"Question\\",\\"name\\":\\"Is the process for a 240-Hour Transit Visa complicated?\\",\\"acceptedAnswer\\":{\\"@type\\":\\"Answer\\",\\"text\\":\\"<p>The process for a 240-Hour Transit Visa is very simple, and many people have already traveled to China using it. You only need to provide your passport, flight itinerary, and proof of onward travel. Compared to an L Visa, there is no need to submit extensive documentation or undergo a lengthy application process.</p>\\"}}]}]"]]},"headers":[],"relativePath":"guides/china-tourist-visa.md","filePath":"en/guides/china-tourist-visa.md","lastUpdated":1740321574000}');
const __default__ = { name: "guides/china-tourist-visa.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    const All240Hour = computed(() => visaFreeCountries.filter((c) => c.visa240));
    const All30Day = computed(() => visaFreeCountries.filter((c) => c.d30));
    const AllHainan = computed(() => visaFreeCountries.filter((c) => c.hainan));
    const European240Hour = computed(() => visaFreeCountries.filter((c) => c.continent === "European" && c.visa240));
    const European30Day = computed(() => visaFreeCountries.filter((c) => c.continent === "European" && c.d30));
    const EuropeanHainan = computed(() => visaFreeCountries.filter((c) => c.continent === "European" && c.hainan));
    const American240Hour = computed(() => visaFreeCountries.filter((c) => c.continent === "American" && c.visa240));
    const American30Day = computed(() => visaFreeCountries.filter((c) => c.continent === "American" && c.d30));
    const AmericanHainan = computed(() => visaFreeCountries.filter((c) => c.continent === "American" && c.hainan));
    const Oceanian240Hour = computed(() => visaFreeCountries.filter((c) => c.continent === "Oceanian" && c.visa240));
    const Oceanian30Day = computed(() => visaFreeCountries.filter((c) => c.continent === "Oceanian" && c.d30));
    const OceanianHainan = computed(() => visaFreeCountries.filter((c) => c.continent === "Oceanian" && c.hainan));
    const Asian240Hour = computed(() => visaFreeCountries.filter((c) => c.continent === "Asian" && c.visa240));
    const Asian30Day = computed(() => visaFreeCountries.filter((c) => c.continent === "Asian" && c.d30));
    const AsianHainan = computed(() => visaFreeCountries.filter((c) => c.continent === "Asian" && c.hainan));
    const Africa240Hour = computed(() => visaFreeCountries.filter((c) => c.continent === "Africa" && c.visa240));
    const Africa30Day = computed(() => visaFreeCountries.filter((c) => c.continent === "Africa" && c.d30));
    const AfricaHainan = computed(() => visaFreeCountries.filter((c) => c.continent === "Africa" && c.hainan));
    const Destinations240Hour = computed(() => getDestinations().filter((c) => c.visa240));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _cache[17] || (_cache[17] = createBaseVNode("h1", {
          id: "china-travel-visa-guide",
          tabindex: "-1"
        }, [
          createTextVNode("China Travel Visa Guide "),
          createBaseVNode("a", {
            class: "header-anchor",
            href: "#china-travel-visa-guide",
            "aria-label": 'Permalink to "China Travel Visa Guide"'
          }, "​")
        ], -1)),
        _cache[18] || (_cache[18] = createBaseVNode("p", null, "There are trendy types of tourist visas in China: Visa-Free entry, Transit Visa and L Visa.", -1)),
        _cache[19] || (_cache[19] = createBaseVNode("h2", {
          id: "overview",
          tabindex: "-1"
        }, [
          createTextVNode("Overview "),
          createBaseVNode("a", {
            class: "header-anchor",
            href: "#overview",
            "aria-label": 'Permalink to "Overview"'
          }, "​")
        ], -1)),
        createBaseVNode("table", null, [
          _cache[9] || (_cache[9] = createBaseVNode("colgroup", null, [
            createBaseVNode("col")
          ], -1)),
          _cache[10] || (_cache[10] = createBaseVNode("thead", null, [
            createBaseVNode("tr", null, [
              createBaseVNode("th", { width: "160" }, "Visa Type"),
              createBaseVNode("th", null, "Destinations"),
              createBaseVNode("th", { width: "130" }, "Eligible Countries"),
              createBaseVNode("th", { width: "150" }, "Duration of Stay")
            ])
          ], -1)),
          createBaseVNode("tbody", null, [
            createBaseVNode("tr", null, [
              _cache[0] || (_cache[0] = createBaseVNode("td", null, [
                createTextVNode("30-Day"),
                createBaseVNode("br"),
                createTextVNode("Visa-Free Entry")
              ], -1)),
              _cache[1] || (_cache[1] = createBaseVNode("td", null, "Mainland China", -1)),
              createBaseVNode("td", null, toDisplayString(All30Day.value.length) + " Countries", 1),
              _cache[2] || (_cache[2] = createBaseVNode("td", null, "30 days", -1))
            ]),
            createBaseVNode("tr", null, [
              _cache[3] || (_cache[3] = createBaseVNode("td", null, [
                createTextVNode("30-Day"),
                createBaseVNode("br"),
                createTextVNode("Visa-Free Entry to Hainan")
              ], -1)),
              _cache[4] || (_cache[4] = createBaseVNode("td", null, "Hainan", -1)),
              createBaseVNode("td", null, toDisplayString(AllHainan.value.length) + " Countries", 1),
              _cache[5] || (_cache[5] = createBaseVNode("td", null, "30 days", -1))
            ]),
            createBaseVNode("tr", null, [
              _cache[6] || (_cache[6] = createBaseVNode("td", null, [
                createTextVNode("240-Hour"),
                createBaseVNode("br"),
                createTextVNode("Visa-Free Transit")
              ], -1)),
              createBaseVNode("td", null, toDisplayString(Destinations240Hour.value.map((d) => d.name).join(", ")), 1),
              createBaseVNode("td", null, toDisplayString(All240Hour.value.length) + " Countries", 1),
              _cache[7] || (_cache[7] = createBaseVNode("td", null, "240 hours", -1))
            ]),
            _cache[8] || (_cache[8] = createBaseVNode("tr", null, [
              createBaseVNode("td", null, "L Visa"),
              createBaseVNode("td", null, "Mainland China"),
              createBaseVNode("td", null, "All Countries"),
              createBaseVNode("td", null, "30 days per visit")
            ], -1))
          ])
        ]),
        _cache[20] || (_cache[20] = createBaseVNode("h2", {
          id: "_30-day-visa-free-entry",
          tabindex: "-1"
        }, [
          createTextVNode("30-Day Visa-Free Entry "),
          createBaseVNode("a", {
            class: "header-anchor",
            href: "#_30-day-visa-free-entry",
            "aria-label": 'Permalink to "30-Day Visa-Free Entry"'
          }, "​")
        ], -1)),
        createBaseVNode("table", null, [
          _cache[11] || (_cache[11] = createBaseVNode("colgroup", null, [
            createBaseVNode("col", { width: "130" })
          ], -1)),
          _cache[12] || (_cache[12] = createBaseVNode("thead", null, [
            createBaseVNode("tr", null, [
              createBaseVNode("th", { colspan: "2" }, "List of Countries Entitled to the 30-Day Visa-Free Entry")
            ])
          ], -1)),
          createBaseVNode("tbody", null, [
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "European (" + toDisplayString(European30Day.value.length) + ")", 1),
              createBaseVNode("td", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(European30Day.value, (country, i) => {
                  return openBlock(), createElementBlock(Fragment, {
                    key: country.name
                  }, [
                    createTextVNode(toDisplayString(country.name) + toDisplayString(i !== European30Day.value.length - 1 ? ", " : ""), 1)
                  ], 64);
                }), 128))
              ])
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "American (" + toDisplayString(American30Day.value.length) + ")", 1),
              createBaseVNode("td", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(American30Day.value, (country, i) => {
                  return openBlock(), createElementBlock(Fragment, {
                    key: country.name
                  }, [
                    createTextVNode(toDisplayString(country.name) + toDisplayString(i !== American30Day.value.length - 1 ? ", " : ""), 1)
                  ], 64);
                }), 128))
              ])
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "Oceanian (" + toDisplayString(Oceanian30Day.value.length) + ")", 1),
              createBaseVNode("td", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(Oceanian30Day.value, (country, i) => {
                  return openBlock(), createElementBlock(Fragment, {
                    key: country.name
                  }, [
                    createTextVNode(toDisplayString(country.name) + toDisplayString(i !== Oceanian30Day.value.length - 1 ? ", " : ""), 1)
                  ], 64);
                }), 128))
              ])
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "Asian (" + toDisplayString(Asian30Day.value.length) + ")", 1),
              createBaseVNode("td", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(Asian30Day.value, (country, i) => {
                  return openBlock(), createElementBlock(Fragment, {
                    key: country.name
                  }, [
                    createTextVNode(toDisplayString(country.name) + toDisplayString(i !== Asian30Day.value.length - 1 ? ", " : ""), 1)
                  ], 64);
                }), 128))
              ])
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "Africa (" + toDisplayString(Africa30Day.value.length) + ")", 1),
              createBaseVNode("td", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(Africa30Day.value, (country, i) => {
                  return openBlock(), createElementBlock(Fragment, {
                    key: country.name
                  }, [
                    createTextVNode(toDisplayString(country.name) + toDisplayString(i !== Africa30Day.value.length - 1 ? ", " : ""), 1)
                  ], 64);
                }), 128))
              ])
            ])
          ])
        ]),
        _cache[21] || (_cache[21] = createBaseVNode("p", null, "Visa-Free entry does not equate to unlimited stay or residence in the agreement country. According to the requirements of the agreement, individuals holding the relevant passport are generally only permitted to stay for no more than 30 days after Visa-Free entry. If the holder needs to stay longer than 30 days, they should apply for residency procedures as soon as possible according to the requirements.", -1)),
        _cache[22] || (_cache[22] = createBaseVNode("h2", {
          id: "_30-days-visa-free-entry-to-hainan",
          tabindex: "-1"
        }, [
          createTextVNode("30 Days Visa Free Entry to Hainan "),
          createBaseVNode("a", {
            class: "header-anchor",
            href: "#_30-days-visa-free-entry-to-hainan",
            "aria-label": 'Permalink to "30 Days Visa Free Entry to Hainan"'
          }, "​")
        ], -1)),
        createBaseVNode("table", null, [
          _cache[13] || (_cache[13] = createBaseVNode("colgroup", null, [
            createBaseVNode("col", { width: "130" })
          ], -1)),
          _cache[14] || (_cache[14] = createBaseVNode("thead", null, [
            createBaseVNode("tr", null, [
              createBaseVNode("th", { colspan: "2" }, "List of Countries Eligible for Visa Free Entry to Hainan")
            ])
          ], -1)),
          createBaseVNode("tbody", null, [
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "European (" + toDisplayString(EuropeanHainan.value.length) + ")", 1),
              createBaseVNode("td", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(EuropeanHainan.value, (country, i) => {
                  return openBlock(), createElementBlock(Fragment, {
                    key: country.name
                  }, [
                    createTextVNode(toDisplayString(country.name) + toDisplayString(i !== EuropeanHainan.value.length - 1 ? ", " : ""), 1)
                  ], 64);
                }), 128))
              ])
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "American (" + toDisplayString(AmericanHainan.value.length) + ")", 1),
              createBaseVNode("td", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(AmericanHainan.value, (country, i) => {
                  return openBlock(), createElementBlock(Fragment, {
                    key: country.name
                  }, [
                    createTextVNode(toDisplayString(country.name) + toDisplayString(i !== AmericanHainan.value.length - 1 ? ", " : ""), 1)
                  ], 64);
                }), 128))
              ])
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "Oceanian (" + toDisplayString(OceanianHainan.value.length) + ")", 1),
              createBaseVNode("td", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(OceanianHainan.value, (country, i) => {
                  return openBlock(), createElementBlock(Fragment, {
                    key: country.name
                  }, [
                    createTextVNode(toDisplayString(country.name) + toDisplayString(i !== OceanianHainan.value.length - 1 ? ", " : ""), 1)
                  ], 64);
                }), 128))
              ])
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "Asian (" + toDisplayString(AsianHainan.value.length) + ")", 1),
              createBaseVNode("td", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(AsianHainan.value, (country, i) => {
                  return openBlock(), createElementBlock(Fragment, {
                    key: country.name
                  }, [
                    createTextVNode(toDisplayString(country.name) + toDisplayString(i !== AsianHainan.value.length - 1 ? ", " : ""), 1)
                  ], 64);
                }), 128))
              ])
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "Africa (" + toDisplayString(AfricaHainan.value.length) + ")", 1),
              createBaseVNode("td", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(AfricaHainan.value, (country, i) => {
                  return openBlock(), createElementBlock(Fragment, {
                    key: country.name
                  }, [
                    createTextVNode(toDisplayString(country.name) + toDisplayString(i !== AfricaHainan.value.length - 1 ? ", " : ""), 1)
                  ], 64);
                }), 128))
              ])
            ])
          ])
        ]),
        _cache[23] || (_cache[23] = createBaseVNode("h2", {
          id: "_240-hour-transit-visa-exemption",
          tabindex: "-1"
        }, [
          createTextVNode("240-Hour Transit Visa Exemption "),
          createBaseVNode("a", {
            class: "header-anchor",
            href: "#_240-hour-transit-visa-exemption",
            "aria-label": 'Permalink to "240-Hour Transit Visa Exemption"'
          }, "​")
        ], -1)),
        createBaseVNode("table", null, [
          _cache[15] || (_cache[15] = createBaseVNode("colgroup", null, [
            createBaseVNode("col", { width: "130" })
          ], -1)),
          _cache[16] || (_cache[16] = createBaseVNode("thead", null, [
            createBaseVNode("tr", null, [
              createBaseVNode("th", { colspan: "2" }, "List of Countries Entitled to the 240-Hour Transit Visa Exemption")
            ])
          ], -1)),
          createBaseVNode("tbody", null, [
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "European (" + toDisplayString(European240Hour.value.length) + ")", 1),
              createBaseVNode("td", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(European240Hour.value, (country, i) => {
                  return openBlock(), createElementBlock(Fragment, {
                    key: country.name
                  }, [
                    createTextVNode(toDisplayString(country.name) + toDisplayString(i !== European240Hour.value.length - 1 ? ", " : ""), 1)
                  ], 64);
                }), 128))
              ])
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "American (" + toDisplayString(American240Hour.value.length) + ")", 1),
              createBaseVNode("td", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(American240Hour.value, (country, i) => {
                  return openBlock(), createElementBlock(Fragment, {
                    key: country.name
                  }, [
                    createTextVNode(toDisplayString(country.name) + toDisplayString(i !== American240Hour.value.length - 1 ? ", " : ""), 1)
                  ], 64);
                }), 128))
              ])
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "Oceanian (" + toDisplayString(Oceanian240Hour.value.length) + ")", 1),
              createBaseVNode("td", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(Oceanian240Hour.value, (country, i) => {
                  return openBlock(), createElementBlock(Fragment, {
                    key: country.name
                  }, [
                    createTextVNode(toDisplayString(country.name) + toDisplayString(i !== Oceanian240Hour.value.length - 1 ? ", " : ""), 1)
                  ], 64);
                }), 128))
              ])
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "Asian (" + toDisplayString(Asian240Hour.value.length) + ")", 1),
              createBaseVNode("td", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(Asian240Hour.value, (country, i) => {
                  return openBlock(), createElementBlock(Fragment, {
                    key: country.name
                  }, [
                    createTextVNode(toDisplayString(country.name) + toDisplayString(i !== Asian240Hour.value.length - 1 ? ", " : ""), 1)
                  ], 64);
                }), 128))
              ])
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "Africa (" + toDisplayString(Africa240Hour.value.length) + ")", 1),
              createBaseVNode("td", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(Africa240Hour.value, (country, i) => {
                  return openBlock(), createElementBlock(Fragment, {
                    key: country.name
                  }, [
                    createTextVNode(toDisplayString(country.name) + toDisplayString(i !== Africa240Hour.value.length - 1 ? ", " : ""), 1)
                  ], 64);
                }), 128))
              ])
            ])
          ])
        ]),
        _cache[24] || (_cache[24] = createStaticVNode('<h3 id="destinations" tabindex="-1">Destinations <a class="header-anchor" href="#destinations" aria-label="Permalink to &quot;Destinations&quot;">​</a></h3><table><colgroup><col width="330"><col></colgroup><thead><tr><th>Port</th><th>Destinations for Staying</th></tr></thead><tbody><tr><td>Beijing Capital International Airport</td><td rowspan="2">Beijing Municipality</td></tr><tr><td>Beijing Daxing International Airport</td></tr><tr><td>Tianjin Binhai International Airport</td><td rowspan="2">Tianjin Municipality</td></tr><tr><td>Tianjin International Cruise Home Port</td></tr><tr><td>Shijiazhuang Zhengding International Airport</td><td rowspan="2">Hebei Province</td></tr><tr><td>Port of Qinhuangdao</td></tr><tr><td>Shenyang Taoxian International Airport</td><td rowspan="3">Liaoning Province</td></tr><tr><td>Dalian Zhoushuizi International Airport</td></tr><tr><td>Dalian Port</td></tr><tr><td>Shanghai Hongqiao International Airport</td><td rowspan="3">Shanghai Municipality</td></tr><tr><td>Shanghai Pudong International Airport</td></tr><tr><td>Port of Shanghai</td></tr><tr><td>Nanjing Lukou International Airport</td><td rowspan="4">Jiangsu Province</td></tr><tr><td>Suzhou Wuxi Shuofang International Airport</td></tr><tr><td>Yangzhou Taizhou International Airport</td></tr><tr><td>Lianyungang Port</td></tr><tr><td>Hangzhou Xiaoshan International Airport</td><td rowspan="6">Zhejiang Province</td></tr><tr><td>Ningbo Lishe International Airport</td></tr><tr><td>Wenzhou Longwan International Airport</td></tr><tr><td>Yiwu Airport</td></tr><tr><td>Wenzhou Port</td></tr><tr><td>Zhoushan Port</td></tr><tr><td>Hefei Xinqiao International Airport</td><td rowspan="2">Anhui Province</td></tr><tr><td>Huangshan Tunxi International Airport</td></tr><tr><td>Fuzhou Changle International Airport</td><td rowspan="5">Fujian Province</td></tr><tr><td>Xiamen Gaoqi International Airport</td></tr><tr><td>Quanzhou Jinjiang International Airport</td></tr><tr><td>Wuyishan Airport</td></tr><tr><td>Port of Xiamen</td></tr><tr><td>Jinan Yaoqiang International Airport</td><td rowspan="5">Shandong Province</td></tr><tr><td>Qingdao Jiaodong International Airport</td></tr><tr><td>Yantai Penglai International Airport</td></tr><tr><td>Weihai Daxueba International Airport</td></tr><tr><td>Port of Qingdao</td></tr><tr><td>Zhengzhou Xinzheng International Airport</td><td>Henan Province</td></tr><tr><td>Wuhan Tianhe International Airport</td><td>Hubei Province</td></tr><tr><td>Guangzhou Baiyun International Airport</td><td rowspan="5">Guangdong Province</td></tr><tr><td>Nansha Port</td></tr><tr><td>Shenzhen Bao&#39;an International Airport</td></tr><tr><td>Shekou Port</td></tr><tr><td>Jieyang Chaoshan International Airport</td></tr><tr><td>Changsha Huanghua International Airport</td><td rowspan="2">Hunan Province</td></tr><tr><td>Zhangjiajie Hehua International Airport</td></tr><tr><td>Haikou Meilan International Airport</td><td rowspan="2">Hainan Province</td></tr><tr><td>Sanya Phoenix International Airport</td></tr><tr><td>Chongqing Jiangbei International Airport</td><td>Chongqing Municipality</td></tr><tr><td>Guiyang Longdongbao International Airport</td><td>Guizhou Province</td></tr><tr><td>Xi&#39;an Xianyang International Airport</td><td>Shaanxi Province</td></tr><tr><td>Taiyuan Wusu International Airport</td><td>Taiyuan, Datong</td></tr><tr><td>Harbin Taiping International Airport</td><td>Harbin</td></tr><tr><td>Nanchang Changbei International Airport</td><td>Nanchang, Jingdezhen</td></tr><tr><td>Nanning Wuxu International Airport</td><td rowspan="4">Nanning, Guilin, Beihai, Qinzhou, Yulin, Hechi, Liuzhou, Wuzhou, Fangchenggang, Guigang, Hezhou, Laibin</td></tr><tr><td>Guilin Liangjiang International Airport</td></tr><tr><td>Beihai Fucheng International Airport</td></tr><tr><td>Beihai Port</td></tr><tr><td>Chengdu Shuangliu International Airport</td><td rowspan="2">Chengdu, Luzhou, Suining, Leshan, Ya&#39;an, Ziyang, Zigong, Deyang, Neijiang, Yibin, Meishan</td></tr><tr><td>Chengdu Tianfu International Airport</td></tr><tr><td>Kunming Changshui International Airport</td><td rowspan="3">Kunming, Chuxiong, Wenshan, Xishuangbanna, Dali, Yuxi, Honghe, Pu&#39;er, Lijiang</td></tr><tr><td>Lijiang Sanyi International Airport</td></tr><tr><td>Exit-Entry Port of Mohan Railway Station</td></tr></tbody></table>', 2))
      ]);
    };
  }
});
export {
  __pageData,
  _sfc_main as default
};
