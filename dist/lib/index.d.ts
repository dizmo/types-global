/// <reference types="mocha" />
export interface Global extends NodeJS.Global {
    [key: string]: any;
}
export interface Global {
    showBack: () => void;
    showFront: () => void;
}
export default Global;
//# sourceMappingURL=index.d.ts.map