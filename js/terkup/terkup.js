const sugarObj = document.getElementById('sugar');    
const magassagObj = document.getElementById('magassag');
const terfogatObj = document.getElementById('terfogat');
const szamitGomb = document.getElementById('szamitGomb');

szamitGomb.addEventListener('click', function(){
    let sugar = Number(sugarObj.value);
    let magassag = Number(magassagObj.value);
    
    let terfogat = 1.0/3.0 * Math.pow(sugar, 2) * 
        Math.PI * magassag;

    terfogatObj.value = terfogat.toFixed(2);
    localStorage.setItem('terfogat', terfogat);
    
});

