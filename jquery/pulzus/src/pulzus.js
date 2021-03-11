

$('#szamitGomb').click(function(){
    let cel = 
    Number($("input[name='cel']:checked").val());
    let eletkor = Number( $('#eletkor').val()  );
    let nyugpul = Number($('#nyugalmipulzus').val());

    let maximalisPulzus = 220-eletkor;
    let pulzusTartalek = maximalisPulzus - nyugpul;
    let ajanlottPulzus =
        (pulzusTartalek * cel)+ nyugpul;
    
    console.log(ajanlottPulzus);
    $('#ajanlottPulzus').val(ajanlottPulzus.toFixed(0));
    $('#eredmeny').show(1000);
});
