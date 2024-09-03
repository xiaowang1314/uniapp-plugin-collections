"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ Object.assign({ name: "Modal" }, {
  __name: "modal",
  props: {
    // 取消按钮文字
    cancelText: {
      type: String,
      default: "取消"
    },
    // 	取消按钮是否显示
    cancelVisble: {
      type: Boolean,
      default: true
    },
    // 确认按钮文字
    okText: {
      type: String,
      default: "确定"
    },
    // 幽灵属性，使按钮背景透明
    okGhost: {
      type: Boolean,
      default: false
    },
    // 点击蒙层是否允许关闭
    maskClosable: {
      type: Boolean,
      default: true
    },
    // 是否显示关闭按钮
    closable: {
      type: Boolean,
      default: true
    }
  },
  emits: ["cancel", "ok"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const config = common_vendor.reactive({
      imgs: [
        "https://frontend-c.oss-cn-hangzhou.aliyuncs.com/wz-mini-program/v2/icons/close.png"
      ]
    });
    const maskClose = () => {
      if (props.maskClosable) {
        emit("cancel");
      }
    };
    const close = () => {
      emit("cancel");
    };
    const cancel = () => {
      emit("cancel");
    };
    const ok = () => {
      emit("ok");
    };
    common_vendor.onMounted(() => {
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(maskClose),
        b: __props.cancelVisble
      }, __props.cancelVisble ? {
        c: common_vendor.t(__props.cancelText),
        d: common_vendor.o(cancel)
      } : {}, {
        e: common_vendor.t(__props.okText),
        f: common_vendor.n({
          "ghost": __props.okGhost
        }),
        g: common_vendor.o(ok),
        h: __props.closable
      }, __props.closable ? {
        i: config.imgs[0],
        j: common_vendor.o(close)
      } : {});
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ef206254"]]);
wx.createComponent(Component);
