
$("#mehetGomb").click(function(){
    let nevek = ['Lajos', 'Géza','Imre','Peti'];
    $('#nevek').text('');
    $.each(nevek, function(index, value) {
        $('#nevek')
        .append('<tr><td>' + index + '</td><td>' + value + '</td></tr>');
    });

    $("#egy").text("Névsor");
    $('#nevek').show(1000);
});



