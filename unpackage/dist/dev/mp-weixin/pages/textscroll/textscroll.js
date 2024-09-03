"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      list: ["1分钟前，无夏购买了会员", "2分钟前，无夏购买了会员", "3分钟前，无夏购买了会员"],
      index: 0
    };
  },
  onLoad() {
  },
  methods: {
    getIndex(index) {
      this.index = index;
    }
  }
};
if (!Array) {
  const _easycom_screenTextScroll2 = common_vendor.resolveComponent("screenTextScroll");
  _easycom_screenTextScroll2();
}
const _easycom_screenTextScroll = () => "../../components/screenTextScroll/screenTextScroll.js";
if (!Math) {
  _easycom_screenTextScroll();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.getIndex),
    b: common_vendor.p({
      list: $data.list
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
