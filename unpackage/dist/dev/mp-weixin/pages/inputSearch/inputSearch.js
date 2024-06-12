"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      //数据源
      dataSource: [
        {
          id: 1,
          name: "耐克1"
        },
        {
          id: 2,
          name: "耐克2"
        }
      ]
    };
  },
  methods: {
    //用户点击获取的数据
    handleChange(data) {
    }
  }
};
if (!Array) {
  const _component_inputSearch = common_vendor.resolveComponent("inputSearch");
  _component_inputSearch();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.handleChange),
    b: common_vendor.p({
      dataSource: $data.dataSource,
      placeholder: "请输入商品名称"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/potatow/Desktop/work/uniapp-plugin-collections/pages/inputSearch/inputSearch.vue"]]);
wx.createPage(MiniProgramPage);
