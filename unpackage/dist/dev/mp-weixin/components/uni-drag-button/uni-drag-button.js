"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    let xy = common_vendor.index.getStorageSync("xy");
    let bottom = 100;
    let right = 15;
    if (xy) {
      bottom = xy.bottom;
      right = xy.right;
    }
    return {
      bottom,
      right,
      pageX: 0,
      pageY: 0
    };
  },
  methods: {
    start(e) {
      let page = e.changedTouches[0];
      this.pageX = page.pageX;
      this.pageY = page.pageY;
    },
    move(e) {
      let { pageX, pageY, bottom, right } = this;
      let page = e.changedTouches[0];
      let x = page.pageX - pageX;
      let y = page.pageY - pageY;
      this.pageX = page.pageX;
      this.pageY = page.pageY;
      this.right = right - x;
      this.bottom = bottom - y;
      common_vendor.index.setStorageSync("xy", {
        right: this.right,
        bottom: this.bottom
      });
    },
    end(e) {
      e.changedTouches[0];
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.bottom + "px",
    b: $data.right + "px",
    c: common_vendor.o((...args) => $options.start && $options.start(...args)),
    d: common_vendor.o((...args) => $options.move && $options.move(...args)),
    e: common_vendor.o((...args) => $options.end && $options.end(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-cdc19d16"]]);
wx.createComponent(Component);
