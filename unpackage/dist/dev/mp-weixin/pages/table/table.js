"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  }
};
if (!Array) {
  const _easycom_mTable2 = common_vendor.resolveComponent("mTable");
  _easycom_mTable2();
}
const _easycom_mTable = () => "../../components/mTable/mTable.js";
if (!Math) {
  _easycom_mTable();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
