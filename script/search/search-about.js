var typingTimer;
var timeout = 1000;

$('#input-search').keyup(function() {
  clearTimeout(typingTimer);
  let termWrite = $(this).val();
  if (termWrite) {
    typingTimer = setTimeout(() => {
        search(termWrite);
    }, timeout);
  }
});

function search(termWrite) {
    Requisition.charactersSearch(termWrite, charactersRender);
    searchHero();
    console.log('parou de digitar');
    $('#pagination').show()
}

$('#lupa-search').click(function() {
    $('#input-search').toggle();
    $('#btn-quiz').toggle();
    $('#btn-hero-versus-hero').toggle();
})