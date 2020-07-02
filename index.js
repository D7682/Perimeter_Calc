const length = document.getElementById('length');
const width = document.getElementById('width');

change = () => {
    let w = parseInt(width.value);
    let l = parseInt(length.value);
    let P = 2*(l + w);

    console.log(P);

}