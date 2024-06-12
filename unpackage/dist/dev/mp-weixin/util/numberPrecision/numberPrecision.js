"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function strip(num, precision) {
  if (precision === void 0) {
    precision = 12;
  }
  return +parseFloat(num.toPrecision(precision));
}
function digitLength(num) {
  var eSplit = num.toString().split(/[eE]/);
  var len = (eSplit[0].split(".")[1] || "").length - +(eSplit[1] || 0);
  return len > 0 ? len : 0;
}
function float2Fixed(num) {
  if (num.toString().indexOf("e") === -1) {
    return Number(num.toString().replace(".", ""));
  }
  var dLen = digitLength(num);
  return dLen > 0 ? strip(num * Math.pow(10, dLen)) : num;
}
function checkBoundary(num) {
  if (_boundaryCheckingState) {
    if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
      console.warn(num + " is beyond boundary when transfer to integer, the results may not be accurate");
    }
  }
}
function times(num1, num2) {
  var others = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    others[_i - 2] = arguments[_i];
  }
  if (others.length > 0) {
    return times.apply(void 0, [times(num1, num2), others[0]].concat(others.slice(1)));
  }
  var num1Changed = float2Fixed(num1);
  var num2Changed = float2Fixed(num2);
  var baseNum = digitLength(num1) + digitLength(num2);
  var leftValue = num1Changed * num2Changed;
  checkBoundary(leftValue);
  return leftValue / Math.pow(10, baseNum);
}
function plus(num1, num2) {
  var others = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    others[_i - 2] = arguments[_i];
  }
  if (others.length > 0) {
    return plus.apply(void 0, [plus(num1, num2), others[0]].concat(others.slice(1)));
  }
  var baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
  return (times(num1, baseNum) + times(num2, baseNum)) / baseNum;
}
function minus(num1, num2) {
  var others = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    others[_i - 2] = arguments[_i];
  }
  if (others.length > 0) {
    return minus.apply(void 0, [minus(num1, num2), others[0]].concat(others.slice(1)));
  }
  var baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
  return (times(num1, baseNum) - times(num2, baseNum)) / baseNum;
}
function divide(num1, num2) {
  var others = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    others[_i - 2] = arguments[_i];
  }
  if (others.length > 0) {
    return divide.apply(void 0, [divide(num1, num2), others[0]].concat(others.slice(1)));
  }
  var num1Changed = float2Fixed(num1);
  var num2Changed = float2Fixed(num2);
  checkBoundary(num1Changed);
  checkBoundary(num2Changed);
  return times(num1Changed / num2Changed, strip(Math.pow(10, digitLength(num2) - digitLength(num1))));
}
function round(num, ratio) {
  var base = Math.pow(10, ratio);
  return divide(Math.round(times(num, base)), base);
}
var _boundaryCheckingState = true;
function enableBoundaryChecking(flag) {
  if (flag === void 0) {
    flag = true;
  }
  _boundaryCheckingState = flag;
}
var index = { strip, plus, minus, times, divide, round, digitLength, float2Fixed, enableBoundaryChecking };
exports.strip = strip;
exports.plus = plus;
exports.minus = minus;
exports.times = times;
exports.divide = divide;
exports.round = round;
exports.digitLength = digitLength;
exports.float2Fixed = float2Fixed;
exports.enableBoundaryChecking = enableBoundaryChecking;
exports["default"] = index;
exports.index = index;
