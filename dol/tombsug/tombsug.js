/* Nagy János, 2021-03-04 esti, szoft I */

let oldalObj = document.getElementById('oldal');
let alfaszogObj = document.getElementById('alfaszog');
let sugarObj = document.getElementById('sugar');
let szamolGomb = document.getElementById('szamolGomb');

function szamolSugar(oldal, alfaszog) {
    let rad = alfaszog * Math.PI / 180;
    let sugar = 1.0/2.0 * oldal * Math.sin(rad);
    return sugar;
}

szamolGomb.addEventListener('click', function(){
    let oldal = Number(oldalObj.value);
    let alfaszog = Number(alfaszogObj.value);
    let sugar = szamolSugar(oldal, alfaszog);
    sugarObj.value = sugar.toFixed(2);
});

