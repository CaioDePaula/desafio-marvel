$('#btn-hero-versus-hero').click( () => {
    if($('.show-characters').length == 1){
        $('#characters-data > div').addClass('versus').removeClass('show-characters');
        alert('search one new character');
        $('#add-new-character').toggle();
    }else {
        alert('for habilit this mode select on character after click again! is search one new character');   
    }
})

$('#add-new-character').click(() => {
    let timeout = 5000;
    setTimeout(() => {
        $('#add-new-character').toggle();
    }, timeout);
})