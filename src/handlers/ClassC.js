import {eps} from "./consts";

/*
*
* принимает точку О: Point и радиус r
 */
export class C {
    constructor(o, r) {
        this.o = o;
        this.r = r;
    }

    containss(c) {
        const d = c.o.minus(this.o).len();
        return Boolean(d + c.r < this.r + eps)
    }

    load() {

    }
}