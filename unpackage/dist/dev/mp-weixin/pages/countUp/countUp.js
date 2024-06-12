"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      num: 123.453
    };
  },
  onLoad() {
  },
  methods: {
    add() {
      this.num = ++this.num;
    },
    reduce() {
      this.num = --this.num;
    }
  }
};
if (!Array) {
  const _easycom_countUp2 = common_vendor.resolveComponent("countUp");
  _easycom_countUp2();
}
const _easycom_countUp = () => "../../components/countUp/countUp.js";
if (!Math) {
  _easycom_countUp();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      num: $data.num,
      color: "#ff9e50",
      width: "13",
      height: "23",
      fontSize: "23"
    }),
    b: common_vendor.o((...args) => $options.add && $options.add(...args)),
    c: common_vendor.o((...args) => $options.reduce && $options.reduce(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/potatow/Desktop/work/uniapp-plugin-collections/pages/countUp/countUp.vue"]]);
wx.createPage(MiniProgramPage);
