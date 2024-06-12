"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      inputVal: "1",
      label: "现金支付",
      isShowKeyboardWindow: true
      //是否显示键盘窗口
    };
  },
  methods: {
    keyboardConfirm(val) {
      console.log(val);
      common_vendor.index.showToast({
        title: "当前输入的值:" + val,
        icon: "none",
        duration: 4e3
      });
    }
  }
};
if (!Array) {
  const _easycom_digitKeyboard2 = common_vendor.resolveComponent("digitKeyboard");
  _easycom_digitKeyboard2();
}
const _easycom_digitKeyboard = () => "../../components/digitKeyboard/digitKeyboard.js";
if (!Math) {
  _easycom_digitKeyboard();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.isShowKeyboardWindow
  }, $data.isShowKeyboardWindow ? {
    b: common_vendor.o(($event) => $data.isShowKeyboardWindow = false),
    c: common_vendor.o($options.keyboardConfirm),
    d: common_vendor.p({
      inputVal: $data.inputVal,
      label: $data.label
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/potatow/Desktop/work/uniapp-plugin-collections/pages/digitKeyboard/digitKeyboard.vue"]]);
wx.createPage(MiniProgramPage);
