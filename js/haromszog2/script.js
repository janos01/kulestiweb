/* Nagy János, 2021-02-11, esti SzoftI */

console.log('Nagy János, 2021-02-11, esti SzoftI');
var nevjegy = document.getElementById('nevjegy');
nevjegy.innerHTML = 'Nagy János, 2021-02-11, esti SzoftI';
console.log('Feladat 0306');
var alap = prompt('Alap: ');
var magassag = prompt('Magasság: ');
var terulet = (alap*magassag)/2;
console.log('A háromszög területe: ' + terulet);
var eredmeny = document.getElementById('eredmeny');
eredmeny.innerHTML = terulet;
