"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    url: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  methods: {
    hide() {
      this.$emit("hide");
    },
    save() {
      console.log("url:", this.url);
      common_vendor.index.getImageInfo({
        src: this.url,
        success: function(image) {
          console.log("图片信息：", JSON.stringify(image));
          common_vendor.index.saveImageToPhotosAlbum({
            filePath: image.path,
            success: function() {
              console.log("save success");
              common_vendor.index.showToast({
                title: "图片保存成功",
                icon: "none",
                duration: 2200
              });
            }
          });
        }
      });
    },
    toSave() {
      common_vendor.index.showModal({
        title: "图片保存",
        content: "确定要保存图片吗",
        success: (e) => {
          if (e["confirm"]) {
            this.save();
          }
        }
      });
    }
  },
  created() {
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.hide && $options.hide(...args)),
    b: $props.url,
    c: common_vendor.o((...args) => $options.hide && $options.hide(...args)),
    d: common_vendor.o((...args) => $options.toSave && $options.toSave(...args)),
    e: common_vendor.o((...args) => $options.save && $options.save(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/potatow/Desktop/work/uniapp-plugin-collections/components/saveFile/saveFile.vue"]]);
wx.createComponent(Component);
