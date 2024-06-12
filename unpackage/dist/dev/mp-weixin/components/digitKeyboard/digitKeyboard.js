"use strict";
const util_numberPrecision_numberPrecision = require("../../util/numberPrecision/numberPrecision.js");
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    inputVal: {
      type: [String],
      default: ""
    },
    label: {
      type: String,
      default: "现金"
    }
  },
  data() {
    return {
      val: ""
    };
  },
  created() {
  },
  methods: {
    //隐藏
    hide() {
      this.$emit("cancel");
    },
    confirm() {
      let val = this.val;
      let valNew = val.slice(-1);
      if (valNew == ".") {
        val = val.slice(0, -1);
      }
      this.$emit("confirm", val);
    },
    modifyNum(sign) {
      let {
        val
      } = this;
      if (sign == "del") {
        if (val.length > 0) {
          let valNew = val.slice(0, -1);
          if (valNew.length == 0) {
            val = "";
          } else {
            val = valNew;
          }
        }
      } else if (sign == "add") {
        val = util_numberPrecision_numberPrecision.index.plus(Number(val), 1) + "";
      } else if (sign == "minus") {
        val = util_numberPrecision_numberPrecision.index.minus(Number(val), 1) + "";
      } else if (sign == "clear") {
        val = "";
      } else if (sign == "-") {
        if (val.indexOf("-") == -1) {
          val = "-" + val;
        }
      } else if (sign == ".") {
        if (val.indexOf(".") == -1 && val.length > 0) {
          val = val + ".";
        }
      } else {
        if (val == "0" && sign == "0" || val == "-0" && sign == "0" || val == "0" && sign != "." || val == "-0" && sign != ".") {
          return;
        }
        val = val + sign;
      }
      let arr = val.split(".");
      if (arr.length == 2 && arr[1].length > 3) {
        return;
      }
      this.val = val;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.hide && $options.hide(...args)),
    b: common_vendor.t($props.label),
    c: $props.inputVal,
    d: $data.val,
    e: common_vendor.o(($event) => $data.val = $event.detail.value),
    f: common_vendor.o((...args) => $options.confirm && $options.confirm(...args)),
    g: common_vendor.o(($event) => $options.modifyNum(1)),
    h: common_vendor.o(($event) => $options.modifyNum(2)),
    i: common_vendor.o(($event) => $options.modifyNum(3)),
    j: common_vendor.o(($event) => $options.modifyNum("del")),
    k: common_vendor.o(($event) => $options.modifyNum(4)),
    l: common_vendor.o(($event) => $options.modifyNum(5)),
    m: common_vendor.o(($event) => $options.modifyNum(6)),
    n: common_vendor.o(($event) => $options.modifyNum("add")),
    o: common_vendor.o(($event) => $options.modifyNum(7)),
    p: common_vendor.o(($event) => $options.modifyNum(8)),
    q: common_vendor.o(($event) => $options.modifyNum(9)),
    r: common_vendor.o(($event) => $options.modifyNum("minus")),
    s: common_vendor.o(($event) => $options.modifyNum("-")),
    t: common_vendor.o(($event) => $options.modifyNum(0)),
    v: common_vendor.o(($event) => $options.modifyNum(".")),
    w: common_vendor.o(($event) => $options.modifyNum("clear"))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6a74be83"], ["__file", "/Users/potatow/Desktop/work/uniapp-plugin-collections/components/digitKeyboard/digitKeyboard.vue"]]);
wx.createComponent(Component);
