

let szamok = [];

for(let i=0; i<5; i++) {
    let vel = parseInt(Math.random()*90)+1;
    szamok.push(vel);
}

console.log('Nyertes lottó számok jövő héten:');
for(szam of szamok) {
    console.log(szam);
}
