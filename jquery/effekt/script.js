
$('#rejtGomb').click(function(){
    $('p').hide(400);
});

$('#mutatGomb').click(function(){
    $('p').show(400);
});

$('#valtGomb').click(function(){
    $('p').toggle(400);
});

$('#rejtGomb2').click(function(){
    $('p').fadeOut(4000);
});

$('#mutatGomb2').click(function(){
    $('p').fadeIn(4000);
});

$('#valtGomb2').click(function(){
    $('p').fadeToggle(4000);
});
