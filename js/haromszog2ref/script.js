/* Nagy János, 2021-02-11, esti SzoftI */

function fejlec() {
    console.log('Nagy János, 2021-02-11, esti SzoftI');
    var nevjegy = document.getElementById('nevjegy');
    nevjegy.innerHTML = 'Nagy János, 2021-02-11, esti SzoftI';
    console.log('Feladat 0306');
}

function beker() {
    var alap = prompt('Alap: ');
    var magassag = prompt('Magasság: ');
    var tomb = [];
    tomb.push(alap);
    tomb.push(magassag);
    return tomb;
}

function szamitHaromszogTerulet(alap, magassag) {
    var terulet = (alap*magassag)/2;
    return terulet;
}

function kiir(terulet) {
    console.log('A háromszög területe: ' + terulet);
    var eredmeny = document.getElementById('eredmeny');
    eredmeny.innerHTML = terulet;
}

fejlec();
var tomb = beker();
var terulet = szamitHaromszogTerulet(tomb[0], tomb[1]);
kiir(terulet);


