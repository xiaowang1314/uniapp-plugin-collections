"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/validcode/validcode.js";
  "./pages/dragButton/dragButton.js";
  "./pages/table/table.js";
  "./pages/drawer/drawer.js";
  "./pages/digitKeyboard/digitKeyboard.js";
  "./pages/inputSearch/inputSearch.js";
  "./pages/battery/battery.js";
  "./pages/typewriter/typewriter.js";
  "./pages/meteorShower/meteorShower.js";
  "./pages/waterfall2/waterfall2.js";
  "./pages/waterfall/waterfall.js";
  "./pages/loading/loading.js";
  "./pages/saveImg/saveImg.js";
  "./pages/textscroll/textscroll.js";
  "./pages/countUp/countUp.js";
  "./pages/scan/scan.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/potatow/Desktop/work/uniapp-plugin-collections/App.vue"]]);
App.mpType = "app";
function createApp() {
  let app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
