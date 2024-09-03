"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      isShowAdTip: true
    };
  },
  methods: {
    cancel() {
      console.log("cancel回调");
      this.isShowAdTip = false;
    },
    ok() {
      console.log("ok回调");
      this.isShowAdTip = false;
    }
  }
};
if (!Array) {
  const _easycom_modal2 = common_vendor.resolveComponent("modal");
  _easycom_modal2();
}
const _easycom_modal = () => "../../components/modal/modal.js";
if (!Math) {
  _easycom_modal();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o(($event) => $data.isShowAdTip = true),
    b: $data.isShowAdTip
  }, $data.isShowAdTip ? {
    c: common_vendor.o($options.cancel),
    d: common_vendor.o($options.ok),
    e: common_vendor.p({
      cancelVisble: false
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
