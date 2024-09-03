"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    num: [String, Number],
    color: {
      type: String,
      default: "#000000"
    },
    width: {
      type: String,
      default: "15"
    },
    height: {
      type: String,
      default: "15"
    },
    fontSize: {
      type: String,
      default: "15"
    }
  },
  data() {
    return {
      indexArr: []
    };
  },
  created() {
    let {
      num
    } = this;
    let arr = new Array(num.toString().length);
    arr.fill(0);
    this.indexArr = arr;
  },
  watch: {
    num: function(val, oldVal) {
      let arr = Array.prototype.slice.apply(this.indexArr);
      let newLen = val.toString().length;
      let oldLen = oldVal.toString().length;
      if (newLen > oldLen) {
        for (let i = 0; i < newLen - oldLen; i++) {
          arr.push(0);
        }
        this.indexArr = arr;
      }
      if (newLen < oldLen) {
        for (let i = 0; i < oldLen - newLen; i++) {
          arr.pop();
        }
        this.indexArr = arr;
      }
      this.numChange(val);
    }
  },
  mounted() {
    this._time = setTimeout(() => {
      this.numChange(this.num);
      clearTimeout(this._time);
    }, 50);
  },
  methods: {
    /**
     * 数字改变
     * @value 数字
     */
    numChange(num) {
      let {
        indexArr
      } = this;
      let copyIndexArr = Array.prototype.slice.apply(indexArr);
      let _num = num.toString();
      for (let i = 0; i < _num.length; i++) {
        if (_num[i] === ".") {
          copyIndexArr[i] = 10;
        } else {
          copyIndexArr[i] = Number(_num[i]);
        }
      }
      this.indexArr = copyIndexArr;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.indexArr, (myIndex, index, i0) => {
      return {
        a: myIndex,
        b: myIndex == 10 ? "7px" : $props.width + "px",
        c: index
      };
    }),
    b: $props.color,
    c: $props.height + "px",
    d: $props.fontSize + "px",
    e: $props.fontSize + "px"
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
