/*  Nagy János, esti Szoft I, 
2021-03-18 */

$('#szamitGomb').click(function(){
    var aoldal = $('#aoldal').val();
    var boldal = $('#boldal').val();
    if(aoldal>1000 || boldal > 1000) {
        alert('nem lehet nagyobb 1000-nél');
    }
    var atlo = Math.sqrt(
        Math.pow(aoldal, 2) +
        Math.pow(boldal, 2)
    );
    
    console.log(aoldal);
    $('#atlo').val(atlo.toFixed(2));
});
