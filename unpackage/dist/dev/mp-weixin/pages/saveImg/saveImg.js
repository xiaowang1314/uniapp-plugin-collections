"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      qrUrl: "/static/img/img1.jpg",
      isShowPhoto: true
    };
  },
  onLoad() {
  },
  methods: {
    hidePhoto() {
      this.isShowPhoto = false;
      common_vendor.index.showToast({
        title: "图片已隐藏",
        icon: "none"
      });
    }
  }
};
if (!Array) {
  const _easycom_saveFile2 = common_vendor.resolveComponent("saveFile");
  _easycom_saveFile2();
}
const _easycom_saveFile = () => "../../components/saveFile/saveFile.js";
if (!Math) {
  _easycom_saveFile();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.isShowPhoto
  }, $data.isShowPhoto ? {
    b: common_vendor.o($options.hidePhoto),
    c: common_vendor.p({
      url: $data.qrUrl
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/potatow/Desktop/work/uniapp-plugin-collections/pages/saveImg/saveImg.vue"]]);
wx.createPage(MiniProgramPage);
