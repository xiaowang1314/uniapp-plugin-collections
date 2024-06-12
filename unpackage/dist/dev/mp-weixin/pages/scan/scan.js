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
  const _component_scan = common_vendor.resolveComponent("scan");
  _component_scan();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.getScanCode)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/potatow/Desktop/work/uniapp-plugin-collections/pages/scan/scan.vue"]]);
wx.createPage(MiniProgramPage);
