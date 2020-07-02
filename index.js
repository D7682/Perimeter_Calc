const length = document.getElementById('length');
const width = document.getElementById('width');
const sqr_sides = document.getElementById('sqr_length');


/* Perimeter for Rectangle is 2*(length + width) = P */
Rectangle = () => {
    let w = parseInt(width.value);
    let l = parseInt(length.value);
    let P = 2*(l + w);

    console.log(P);
}

/* Perimeter for square is x+x+x+x = P or 4(x) = P */
Square = () => {
    let a = parseInt(sqr_sides.value);
    let P = 4*(a);

    console.log(P)

}