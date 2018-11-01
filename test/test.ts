import { expect } from "chai";
import { Global } from "../lib";
declare const global: Global;

import "mocha";

describe("Global", () => {
    it("should exist", () => {
        expect(global).to.not.be.an("undefined");
    });
    it("should be an object", () => {
        expect(typeof global).to.eq("object");
    });
});

describe("Global", () => {
    it("should allow arbitary entries", () => {
        expect(global.key).to.be.an("undefined");
    });
});
