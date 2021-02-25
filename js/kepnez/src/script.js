let kepaz = [
    'kep1', 
    'kep2', 
    'kep3', 
    'kep4', 
    'kep5'
    ];
let kepnevek = [
    'kep01.png',
    'kep02.png',
    'kep03.png',
    'kep04.png',
    'kep05.png'
    ];

let kepek = [];

let nagykep = document.getElementById('nagykep');


for (i = 0; i < kepaz.length; i++) {
    kepek.push(document.getElementById(kepaz[i]));
}

for (i = 0; i < kepaz.length; i++) {
    kepek[i].style.backgroundImage = 'url(images/' +
        kepnevek[i] + ')';
}

for (i = 0; i < kepaz.length; i++) {
    kepek[i].addEventListener('click', function(){
        nagykep.style.backgroundImage =
            this.style.backgroundImage;
    });
}

let startGomb = document.getElementById('startGomb');
let stopGomb = document.getElementById('stopGomb');
let idozito;

startGomb.addEventListener('click', function(){
    idozito = setInterval('leptet()', 3000);
});

stopGomb.addEventListener('click', function(){
    clearTimeout(idozito);
});

let aktualisKepIndex = 0;
function leptet() {
    nagykep.style.backgroundImage = 
        kepek[aktualisKepIndex].style.backgroundImage;
    if(aktualisKepIndex < kepek.length-1) {
        aktualisKepIndex++;
    }else {
        aktualisKepIndex = 0;
    }
    document.cookie = "aktualisKepIndex=" + aktualisKepIndex + 
    ";expires=Fri, 31 Dec 2100 23:59:59 GMT";
    console.log(document.cookie);
}











