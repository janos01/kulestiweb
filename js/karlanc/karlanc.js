let gyumolcs = 'nagyon nagy almafa';
let hossz = gyumolcs.length;
console.log(hossz);
console.log(gyumolcs.charAt(0));

s = gyumolcs + 'körte';

console.log(gyumolcs.indexOf('alma'));

console.log(gyumolcs.match('alma'));
gyumolcs = gyumolcs.replace('alma', 'körte');
console.log(gyumolcs);

let dolgozo = "Para Mária:Szeged:8400000";
let dolgozoTomb = dolgozo.split(':');
console.log(dolgozoTomb[0]);
console.log(dolgozoTomb[1]);
console.log(dolgozoTomb[2]);
