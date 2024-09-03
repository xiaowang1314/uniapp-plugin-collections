"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  created() {
    common_vendor.index.getSystemInfoSync().statusBarHeight;
    var pages = getCurrentPages();
    pages[pages.length - 1];
  },
  onUnload() {
    clearTimeout(this.t);
  },
  methods: {
    onmarked(type, result) {
      this.$emit("getCode", result);
      this.t = setTimeout(() => {
        this.barcode.start();
      }, 1e3);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
