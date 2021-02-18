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


