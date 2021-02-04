let szam = Number(prompt('Kérek egy számot'));

switch(szam) {
    case 0 :
        console.log('nulla');
        break;
    case 1 :
        console.log('egy');
        break;
    case 2 :
        console.log('kettő');
        break;
    default:
        console.log('Nem 0, 1, 2');
}
