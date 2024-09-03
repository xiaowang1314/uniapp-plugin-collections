"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  props: {
    // 默认车牌号
    licensePlateDefault: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      isShowKeyboad1: false,
      isShowKeyboad2: false,
      isShowKeyboad3: false,
      licensePlateId: ["", "", "", "", "", "", "", ""],
      //车牌号
      licensePlateFirst: [
        "京",
        "津",
        "晋",
        "冀",
        "蒙",
        "辽",
        "黑",
        "吉",
        "沪",
        "苏",
        "浙",
        "皖",
        "闽",
        "赣",
        "鲁",
        "豫",
        "鄂",
        "湘",
        "粤",
        "桂",
        "琼",
        "川",
        "贵",
        "云",
        "藏",
        "渝",
        "陕",
        "甘",
        "青",
        "宁",
        "新",
        "使",
        "港",
        "澳",
        "台",
        "学",
        "虚",
        "W"
      ],
      licensePlateteTwo: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "Q",
        "W",
        "E",
        "R",
        "T",
        "Y",
        "U",
        "O",
        "P",
        "领",
        "A",
        "S",
        "D",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L",
        "警",
        "Z",
        "X",
        "C",
        "V",
        "B",
        "N",
        "M",
        "港",
        "澳"
      ],
      licensePlateteThree: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "Q",
        "W",
        "E",
        "R",
        "T",
        "Y",
        "U",
        "P",
        "学",
        "领",
        "A",
        "S",
        "D",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L",
        "警",
        "Z",
        "X",
        "C",
        "V",
        "B",
        "N",
        "M",
        "港",
        "澳"
      ],
      index: 0
      //当前输入框下标
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let {
        index,
        licensePlateDefault
      } = this;
      if (licensePlateDefault) {
        this.licensePlateId = licensePlateDefault.split("");
        return;
      }
      this.showKeyboard(index);
    },
    // 键盘选择
    keyboardSelect(val) {
      let {
        licensePlateId,
        index
      } = this;
      let disable = this.disableGet(val);
      if (disable)
        return;
      licensePlateId[index] = val;
      this.licensePlateId = licensePlateId;
      let nextIndex = ++index;
      if (nextIndex > 7)
        return;
      this.index = nextIndex;
      this.showKeyboard(nextIndex);
    },
    // 显示键盘
    showKeyboard(index) {
      this.index = index;
      if (index == 0) {
        this.isShowKeyboad1 = true;
        this.isShowKeyboad2 = false;
        this.isShowKeyboad3 = false;
      } else if ([6, 7].includes(index)) {
        this.isShowKeyboad1 = false;
        this.isShowKeyboad2 = false;
        this.isShowKeyboad3 = true;
      } else {
        this.isShowKeyboad1 = false;
        this.isShowKeyboad2 = true;
        this.isShowKeyboad3 = false;
      }
    },
    // 隐藏键盘
    hideKeyboard() {
      this.isShowKeyboad1 = false;
      this.isShowKeyboad2 = false;
      this.isShowKeyboad3 = false;
    },
    // 删除车牌号
    delLicensePlate() {
      let {
        licensePlateId,
        index
      } = this;
      licensePlateId[index] = "";
      this.licensePlateId = licensePlateId;
      let preIndex = --index;
      if (preIndex < 0)
        return;
      this.index = preIndex;
      this.showKeyboard(preIndex);
    },
    disableGet(item) {
      let {
        index
      } = this;
      let flag = false;
      if ([1].includes(index) && ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "领", "警", "港", "澳"].includes(
        item
      )) {
        flag = true;
      } else if ([2, 3, 4].includes(index) && ["领", "警", "港", "澳"].includes(item)) {
        flag = true;
      } else if ([5].includes(index) && ["O", "领", "警", "港", "澳"].includes(item)) {
        flag = true;
      }
      return flag;
    },
    send() {
      let {
        licensePlateId
      } = this;
      let licensePlate = licensePlateId.join("");
      if (licensePlate.length < 7)
        return;
      this.$emit("success", licensePlate);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($data.licensePlateId[0]),
    b: common_vendor.n({
      "active": $data.index == 0
    }),
    c: common_vendor.o(($event) => $options.showKeyboard(0)),
    d: common_vendor.t($data.licensePlateId[1]),
    e: common_vendor.n({
      "active": $data.index == 1
    }),
    f: common_vendor.o(($event) => $options.showKeyboard(1)),
    g: common_vendor.t($data.licensePlateId[2]),
    h: common_vendor.n({
      "active": $data.index == 2
    }),
    i: common_vendor.o(($event) => $options.showKeyboard(2)),
    j: common_vendor.t($data.licensePlateId[3]),
    k: common_vendor.n({
      "active": $data.index == 3
    }),
    l: common_vendor.o(($event) => $options.showKeyboard(3)),
    m: common_vendor.t($data.licensePlateId[4]),
    n: common_vendor.n({
      "active": $data.index == 4
    }),
    o: common_vendor.o(($event) => $options.showKeyboard(4)),
    p: common_vendor.t($data.licensePlateId[5]),
    q: common_vendor.n({
      "active": $data.index == 5
    }),
    r: common_vendor.o(($event) => $options.showKeyboard(5)),
    s: common_vendor.t($data.licensePlateId[6]),
    t: common_vendor.n({
      "active": $data.index == 6
    }),
    v: common_vendor.o(($event) => $options.showKeyboard(6)),
    w: common_vendor.t($data.licensePlateId[7]),
    x: common_vendor.n({
      "active": $data.index == 7
    }),
    y: common_vendor.o(($event) => $options.showKeyboard(7)),
    z: common_vendor.n({
      "active": $data.licensePlateId.join("").length >= 7
    }),
    A: common_vendor.o((...args) => $options.send && $options.send(...args)),
    B: $data.isShowKeyboad1 || $data.isShowKeyboad2 || $data.isShowKeyboad3
  }, $data.isShowKeyboad1 || $data.isShowKeyboad2 || $data.isShowKeyboad3 ? common_vendor.e({
    C: common_assets._imports_0,
    D: common_vendor.o((...args) => $options.hideKeyboard && $options.hideKeyboard(...args)),
    E: $data.isShowKeyboad1
  }, $data.isShowKeyboad1 ? {
    F: common_vendor.f($data.licensePlateFirst, (item, i, i0) => {
      return {
        a: common_vendor.t(item),
        b: i,
        c: common_vendor.o(($event) => $options.keyboardSelect(item), i)
      };
    }),
    G: common_assets._imports_1,
    H: common_vendor.o((...args) => $options.delLicensePlate && $options.delLicensePlate(...args))
  } : {}, {
    I: $data.isShowKeyboad2
  }, $data.isShowKeyboad2 ? {
    J: common_vendor.f($data.licensePlateteTwo, (item, i, i0) => {
      return {
        a: common_vendor.t(item),
        b: i,
        c: common_vendor.n({
          "disable": $options.disableGet(item)
        }),
        d: common_vendor.o(($event) => $options.keyboardSelect(item), i)
      };
    }),
    K: common_assets._imports_1,
    L: common_vendor.o((...args) => $options.delLicensePlate && $options.delLicensePlate(...args))
  } : {}, {
    M: $data.isShowKeyboad3
  }, $data.isShowKeyboad3 ? {
    N: common_vendor.f($data.licensePlateteThree, (item, i, i0) => {
      return {
        a: common_vendor.t(item),
        b: i,
        c: common_vendor.o(($event) => $options.keyboardSelect(item), i)
      };
    }),
    O: common_assets._imports_1,
    P: common_vendor.o((...args) => $options.delLicensePlate && $options.delLicensePlate(...args))
  } : {}) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
