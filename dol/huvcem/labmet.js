/* Nagy János, 2021-03-04 esti, szoft I */

let huvelykObj = document.getElementById('huvelyk');
let centimeterObj = document.getElementById('centimeter');
let szamolGomb = document.getElementById('szamolGomb');

function szamolCentimeter(huvelyk) {
    let centimeter = huvelyk * 2.54;
    return centimeter;
}

szamolGomb.addEventListener('click', function(){
    let huvelyk = Number(huvelykObj.value);
    let centimeter = szamolCentimeter(huvelyk);
    centimeterObj.value = centimeter.toFixed(2);
});

