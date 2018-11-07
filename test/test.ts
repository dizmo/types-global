import { expect } from "chai";
import { Global } from "../lib";
declare const global: Global;

import "mocha";

describe("Global", () => {
    it("should exist", () => {
        expect(typeof global).to.not.eq("undefined");
    });
    it("should be an object", () => {
        expect(typeof global).to.eq("object");
    });
    it("should be referenceable", () => {
        expect(global).to.not.eq(undefined);
    });
});

describe("Global", () => {
    it("should allow arbitary entries", () => {
        expect(global.key).to.be.an("undefined");
    });
});
