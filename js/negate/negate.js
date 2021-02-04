/* Nagy János, 2021-02-04, esti szoft I */
let szam = prompt('Kérek egy számot');

let p = document.getElementById('eredmeny');

if (szam<0) {
    p.innerHTML = 'negatív';
}else if(szam>0){
    p.innerHTML = 'pozitív';
}else {
    p.innerHTML = 'nulla';
}
