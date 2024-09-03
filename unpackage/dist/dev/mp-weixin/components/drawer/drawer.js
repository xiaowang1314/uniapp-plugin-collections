"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    //方向  left：右往左滑动  right:左往右边滑动
    direction: {
      type: String,
      default: "left"
    }
  },
  data() {
    return {};
  },
  onLoad() {
  },
  methods: {
    cancel() {
      this.$emit("cancel");
    },
    ensure() {
      this.$emit("ensure");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.cancel && $options.cancel(...args)),
    b: common_vendor.o((...args) => $options.ensure && $options.ensure(...args)),
    c: common_vendor.n({
      "left": $props.direction == "left"
    }),
    d: common_vendor.n({
      "right": $props.direction == "right"
    }),
    e: common_vendor.n({
      "show": $props.show
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
