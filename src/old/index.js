import {C} from "../handlers/ClassC";
import {P} from "../handlers/ClassPoint";
import {Circles2Solver} from "../handlers/ClassCircles2Solver";

export const test = () => {

    let c1 = new C(new P(0, 0), 1000);
    let c2 = new C(new P(0, 0), 500);
    let c3 = new C(new P(0, 0), 500);

    let solver = new Circles2Solver(113);
    // debugger

    let triangle = solver.getValidTriangle(c1, c2, c3);

    if (triangle.length === 0) console.log('impossible');
    else {
        console.log("possible");
        for (let i = 0; i < 3; i++)
        {
            console.log(triangle[i])
        }
    }
}
