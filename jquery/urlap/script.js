/* Nagy János, 2021-03-04, esti szoft I */
$('#szamitGomb').click(function(){
    szamolSugar();
});

$(document).keydown(function(event){
    if(event.code == 'Enter') {
        szamolSugar();
    }
});

function szamolSugar() {
    let oldal = Number($('#oldal').val());
    let alfaszog = Number($('#alfaszog').val());
    let rad = alfaszog * Math.PI / 180;
    let sugar = 1.0/2.0 * oldal * Math.sin(rad);
    console.log(sugar);
    
    //Eredmény az input elembe:
    $('#sugar').val(sugar.toFixed(2));
    //Az eredmeny div megjelenítése:
    $('#eredmeny').fadeIn(2000); 
    
    $('#container ').css('background-color', 'navy');
    $('#container ').css('color', 'white');
}
