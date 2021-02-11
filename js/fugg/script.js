nevjegy();

function nevjegy() {
    //ide jön függvény törzse
    console.log('------------');
    console.log('Nagy János');
    console.log('Budapest');
    console.log('------------');
    document.write('Nagy János');
    var er = document.getElementById('eredmeny');
    er.innerHTML = 'valami';
}

let szam2 = dupla(6);
console.log(szam2+2);

function dupla(szam) {    
    return szam*2;    
}

function osszead(szam1, szam2) {
    return szam1 + szam2;
}

let eredmeny = osszead(35, 40);
console.log(eredmeny);

