/* tslint:disable:interface-name */
export interface Global extends Window {
    [key: string]: any;
}

export interface Global {
    showBack: () => void;
    showFront: () => void;
}

export default Global;
