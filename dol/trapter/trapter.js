/* Nagy János, esti szoft I */
let aOldalObj = document.getElementById('aOldal');
let bOldalObj = document.getElementById('bOldal');
let cOldalObj = document.getElementById('cOldal');
let dOldalObj = document.getElementById('dOldal');
let teruletObj = document.getElementById('terulet');
let szamitGomb = document.getElementById('szamitGomb');

function szamolTerulet(a, b, c, d) {
    let terulet = (a+c)/(4*(a-c))*Math.sqrt((a+b-c+d)*(a-b-c+d)*(a+b-c-d)*(a+b+c+d));
    return terulet;
}

szamitGomb.addEventListener('click', function() {
    let aOldal = Number(aOldalObj.value);
    let bOldal = Number(bOldalObj.value);
    let cOldal = Number(cOldalObj.value);
    let dOldal = Number(dOldalObj.value);
    let terulet = szamolTerulet(aOldal, bOldal, cOldal, dOldal);
    console.log(terulet);
    teruletObj.value = terulet.toFixed(2);
});
