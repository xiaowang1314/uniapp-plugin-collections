"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    placeholder: String,
    //默认提示
    searchKey: String,
    //模糊搜索的key值
    dataSource: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      list: [],
      name: "",
      backName: ""
    };
  },
  destroyed() {
    clearTimeout(this.t);
  },
  methods: {
    search(e) {
      let val = e.detail.value;
      let {
        dataSource
      } = this;
      let arr = [];
      for (let i = 0; i < dataSource.length; i++) {
        if (dataSource[i].name.indexOf(val) !== -1) {
          arr.push(dataSource[i]);
        }
      }
      if (!val) {
        this.list = [];
      } else {
        this.list = arr;
      }
    },
    select(item) {
      this.backName = item.name;
      this.list = [];
      this.$emit("select", item);
    },
    hideList() {
      this.list = [];
      this.t = setTimeout(() => {
        this.name = this.backName;
      }, 0);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.placeholder,
    b: common_vendor.o([($event) => $data.name = $event.detail.value, (...args) => $options.search && $options.search(...args)]),
    c: common_vendor.o((...args) => $options.hideList && $options.hideList(...args)),
    d: $data.name,
    e: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: index,
        c: common_vendor.o(($event) => $options.select(item), index)
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
