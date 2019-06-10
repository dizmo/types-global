"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var chai_1 = require("chai");

require("mocha");

describe("Global", function () {
  it("should exist", function () {
    chai_1.expect(typeof global === "undefined" ? "undefined" : _typeof(global)).to.not.eq("undefined");
  });
  it("should be an object", function () {
    chai_1.expect(typeof global === "undefined" ? "undefined" : _typeof(global)).to.eq("object");
  });
  it("should be referenceable", function () {
    chai_1.expect(global).to.not.eq(undefined);
  });
});
describe("Global", function () {
  it("should allow arbitary entries", function () {
    chai_1.expect(global.key).to.be.an("undefined");
  });
});
//# sourceMappingURL=test.js.map