"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {}
};
if (!Array) {
  const _easycom_battery2 = common_vendor.resolveComponent("battery");
  _easycom_battery2();
}
const _easycom_battery = () => "../../components/battery/battery.js";
if (!Math) {
  _easycom_battery();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/potatow/Desktop/work/uniapp-plugin-collections/pages/battery/battery.vue"]]);
wx.createPage(MiniProgramPage);
