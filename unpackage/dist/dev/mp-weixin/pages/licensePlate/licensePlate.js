"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      licensePlateDefault: ""
      //默认车牌号
    };
  },
  methods: {
    // 获取车牌号
    licensePlateGet(val) {
      common_vendor.index.showToast({
        title: val + "",
        icon: "none"
      });
    }
  }
};
if (!Array) {
  const _easycom_licensePlate2 = common_vendor.resolveComponent("licensePlate");
  _easycom_licensePlate2();
}
const _easycom_licensePlate = () => "../../components/licensePlate/licensePlate.js";
if (!Math) {
  _easycom_licensePlate();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.licensePlateGet),
    b: common_vendor.p({
      licensePlateDefault: $data.licensePlateDefault
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
