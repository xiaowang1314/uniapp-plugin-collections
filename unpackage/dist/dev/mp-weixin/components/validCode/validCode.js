"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    //最大长度 值为4或者6
    maxlength: {
      type: Number,
      default: 4
    },
    //是否是密码
    isPwd: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      codeIndex: 1,
      //下标
      codeArr: [],
      val: ""
      //输入框的值
    };
  },
  methods: {
    //取值
    getVal(e) {
      let { value } = e.detail;
      this.val = value;
      let arr = value.split("");
      this.codeIndex = arr.length + 1;
      this.codeArr = arr;
      if (this.codeIndex > Number(this.maxlength)) {
        this.$emit("finish", this.codeArr.join(""));
      }
    },
    //清除验证码或者密码
    clear() {
      this.codeIndex = 1;
      this.codeArr = [];
      this.val = "";
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.val,
    b: $props.maxlength,
    c: common_vendor.o((...args) => $options.getVal && $options.getVal(...args)),
    d: $props.isPwd && $data.codeArr.length >= 1
  }, $props.isPwd && $data.codeArr.length >= 1 ? {} : {
    e: common_vendor.t($data.codeArr[0] ? $data.codeArr[0] : "")
  }, {
    f: common_vendor.n({
      active: $data.codeIndex == 1
    }),
    g: $props.isPwd && $data.codeArr.length >= 2
  }, $props.isPwd && $data.codeArr.length >= 2 ? {} : {
    h: common_vendor.t($data.codeArr[1] ? $data.codeArr[1] : "")
  }, {
    i: common_vendor.n({
      active: $data.codeIndex == 2
    }),
    j: $props.isPwd && $data.codeArr.length >= 3
  }, $props.isPwd && $data.codeArr.length >= 3 ? {} : {
    k: common_vendor.t($data.codeArr[2] ? $data.codeArr[2] : "")
  }, {
    l: common_vendor.n({
      active: $data.codeIndex == 3
    }),
    m: $props.isPwd && $data.codeArr.length >= 4
  }, $props.isPwd && $data.codeArr.length >= 4 ? {} : {
    n: common_vendor.t($data.codeArr[3] ? $data.codeArr[3] : "")
  }, {
    o: common_vendor.n({
      active: $data.codeIndex == 4
    }),
    p: $props.maxlength === 6
  }, $props.maxlength === 6 ? common_vendor.e({
    q: $props.isPwd && $data.codeArr.length >= 5
  }, $props.isPwd && $data.codeArr.length >= 5 ? {} : {
    r: common_vendor.t($data.codeArr[4] ? $data.codeArr[4] : "")
  }, {
    s: common_vendor.n({
      active: $data.codeIndex == 5
    }),
    t: $props.isPwd && $data.codeArr.length >= 6
  }, $props.isPwd && $data.codeArr.length >= 6 ? {} : {
    v: common_vendor.t($data.codeArr[5] ? $data.codeArr[5] : "")
  }, {
    w: common_vendor.n({
      active: $data.codeIndex == 6
    })
  }) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/potatow/Desktop/work/uniapp-plugin-collections/components/validCode/validCode.vue"]]);
wx.createComponent(Component);
