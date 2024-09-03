"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      plannum: 5
    };
  },
  created() {
    this.refreshTime = setInterval(() => {
      let numNew = this.plannum + 1;
      this.plannum = numNew % 6;
      if (!this.plannum) {
        this.plannum = 1;
      }
    }, 1e3);
  },
  destroyed() {
    clearInterval(this.refreshTime);
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.plannum, (i, k0, i0) => {
      return {
        a: i
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7c24360e"]]);
wx.createComponent(Component);
