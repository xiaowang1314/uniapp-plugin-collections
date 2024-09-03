"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      drawerShow: false,
      drawerShow2: false
    };
  },
  methods: {
    //显示抽屉
    show() {
      this.drawerShow = true;
    },
    show2() {
      this.drawerShow2 = true;
    },
    //取消
    cancel() {
      console.log("您点击了取消按钮");
      this.drawerShow = false;
    },
    //确定
    ensure() {
      console.log("您点击了确定按钮");
      this.drawerShow = false;
    },
    //取消
    cancel2() {
      console.log("您点击了取消按钮");
      this.drawerShow2 = false;
    },
    //确定
    ensure2() {
      console.log("您点击了确定按钮");
      this.drawerShow2 = false;
    }
  }
};
if (!Array) {
  const _easycom_drawer2 = common_vendor.resolveComponent("drawer");
  _easycom_drawer2();
}
const _easycom_drawer = () => "../../components/drawer/drawer.js";
if (!Math) {
  _easycom_drawer();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.cancel),
    b: common_vendor.o($options.ensure),
    c: common_vendor.p({
      show: $data.drawerShow
    }),
    d: common_vendor.o($options.cancel2),
    e: common_vendor.o($options.ensure2),
    f: common_vendor.p({
      show: $data.drawerShow2,
      direction: "right"
    }),
    g: common_vendor.o((...args) => $options.show && $options.show(...args)),
    h: common_vendor.o((...args) => $options.show2 && $options.show2(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
