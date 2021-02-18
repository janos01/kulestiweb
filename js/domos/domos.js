let mehetGomb = document.getElementById('mehetGomb');
let bek = document.getElementById('bek');
let con = document.getElementById('container');


mehetGomb.addEventListener('click', function(){
    console.log('működik');
    bek.style.backgroundColor = 'navy';
    bek.style.color = 'white';
    con.style.borderRadius = '5px';
    con.style.backgroundColor = '#94FF08';
    mehetGomb.style.backgroundColor = 'blue';
    mehetGomb.style.color = 'white';
});
