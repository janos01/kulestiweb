/* Nagy János, 2021-03-04 esti, szoft I */

let labObj = document.getElementById('lab');
let meterObj = document.getElementById('meter');
let szamolGomb = document.getElementById('szamolGomb');

function szamolMeter(lab) {
    let meter = lab * 0.3048;
    return meter;
}

szamolGomb.addEventListener('click', function(){
    let lab = Number(labObj.value);
    let meter = szamolMeter(lab);
    meterObj.value = meter.toFixed(4);
});

