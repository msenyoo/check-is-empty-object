"use strict";

var expect = require("chai").expect;
var isEmptyObj = require("../index");

describe("#isemptyobj", function () {
  it("should return true", function () {
    var result = isEmptyObj({});
    expect(result).to.equal(true);
  });

  it("should return false", function () {
    var result = isEmptyObj({city: "Sydney"});
    expect(result).to.equal(false);
  });

  it("should return false for array", function () {
    var result = isEmptyObj([]);
    expect(result).to.equal(false);
  });

  it("should return false for string", function () {
    var result = isEmptyObj("string");
    expect(result).to.equal(false);
  });
});
