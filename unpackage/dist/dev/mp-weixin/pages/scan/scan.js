"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    //获取扫码控件
    getScanCode(val) {
      console.log(val);
    }
  }
};
if (!Array) {
  const _easycom_scan2 = common_vendor.resolveComponent("scan");
  _easycom_scan2();
}
const _easycom_scan = () => "../../components/scan/scan.js";
if (!Math) {
  _easycom_scan();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.getScanCode)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
