import { G as useData } from "./framework.Ch1t4NEC.js";
import { x as locales } from "./theme.BvkY57QZ.js";
const formatDate = (date) => {
  var _a, _b, _c;
  const { localeIndex } = useData();
  return ((_c = (_b = (_a = locales[localeIndex.value]) == null ? void 0 : _a.dateFormatter) == null ? void 0 : _b.format) == null ? void 0 : _c.call(_b, date)) || date;
};
export {
  formatDate as f
};
