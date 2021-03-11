
$("#mehetGomb").click(function(){
    let nevek = ['Lajos', 'Géza','Imre','Peti'];
    $.each(nevek, function(index, value) {
        $('#nevek')
        .append('<li>' + index + ') ' + value + '</li>');
    });

    $("#egy").text("Névsor");
});



