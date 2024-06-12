"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    //显示数据
    list: {
      type: Array,
      defual: function() {
        return [];
      }
    }
  },
  data() {
    return {
      interval: 3e3,
      duration: 12e3
    };
  },
  methods: {
    slideChange(e) {
      this.$emit("getCurrentIndex", e.detail.current);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.list, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index
      };
    }),
    b: common_vendor.o((...args) => $options.slideChange && $options.slideChange(...args)),
    c: $data.interval,
    d: $data.duration
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/potatow/Desktop/work/uniapp-plugin-collections/components/screenTextScroll/screenTextScroll.vue"]]);
wx.createComponent(Component);
