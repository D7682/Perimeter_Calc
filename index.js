import { variables } from './javascript/variables/variables.js';

const {length, width, sqr_sides, answer_1, answer_2, anchor1, anchor2} = variables;


/* Perimeter for Rectangle is 2*(length + width) = P */
anchor1.addEventListener('click', () => {
    let w = parseInt(width.value);
    let l = parseInt(length.value);
    let P = 2*(l + w);

    answer_1.innerHTML = P;
    console.log(P);
})

/* Perimeter for square is x+x+x+x = P or 4(x) = P */
anchor2.addEventListener('click', () => {
    let a = parseInt(sqr_sides.value);
    let P = 4*(a);

    answer_2.innerHTML = P;
    console.log(P)
})
