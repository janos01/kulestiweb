let szamok = [];
szamok.push(57);
szamok.push(24);
szamok.push(15);

delete szamok[1];
szamok.splice(1,1);

console.log(szamok.length);

for(szam of szamok) {
    console.log(szam);
}
