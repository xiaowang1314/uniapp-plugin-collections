"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      code: "",
      pwd: ""
    };
  },
  onLoad() {
  },
  methods: {
    //获取code码
    getCode(val) {
      this.code = val;
      console.log(val);
    },
    //获取密码
    getPwd(val) {
      this.pwd = val;
      console.log(val);
    },
    // 清空验证码
    clearCode() {
      this.$refs.code.clear();
    },
    // 清空密码
    clearPwd() {
      this.$refs.pwd.clear();
    }
  }
};
if (!Array) {
  const _easycom_validCode2 = common_vendor.resolveComponent("validCode");
  _easycom_validCode2();
}
const _easycom_validCode = () => "../../components/validCode/validCode.js";
if (!Math) {
  _easycom_validCode();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.sr("code", "2a73c04c-0"),
    b: common_vendor.o($options.getCode),
    c: common_vendor.p({
      maxlength: 4,
      isPwd: false
    }),
    d: common_vendor.t($data.code),
    e: common_vendor.sr("pwd", "2a73c04c-1"),
    f: common_vendor.o($options.getPwd),
    g: common_vendor.p({
      maxlength: 6,
      isPwd: true
    }),
    h: common_vendor.t($data.pwd),
    i: common_vendor.o((...args) => $options.clearCode && $options.clearCode(...args)),
    j: common_vendor.o((...args) => $options.clearPwd && $options.clearPwd(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/potatow/Desktop/work/uniapp-plugin-collections/pages/validcode/validcode.vue"]]);
wx.createPage(MiniProgramPage);
