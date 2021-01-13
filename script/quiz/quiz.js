$('#btn-quiz').click( () => {
    Requisition.quiz(generationOffsetRandomic(), makeQuiz);
})

function makeQuiz(characters) {
    let character = characters.data.results[0];

    if (existsImageCharacter(character)) {
        Requisition.charactersOffSet(generationOffsetRandomic(), makeQuiz);
    }else{
        quiz(character);
    }
}
function quiz(character) {
    let imgQuiz = $('#image-quiz').attr('src', character.thumbnail.path + '.' + character.thumbnail.extension).addClass('image-quiz');
    let name = character.name;
    console.log(name);

    startGame(name, imgQuiz);    
}
function startGame(name, imgQuiz) {
    let valBlur = 10;
    let timeout = 3500;
    $('#input-quiz').focus(function () {
        $(this).on('input', function() {
            let termWrite = $(this).val();
            
            if (isCorrect(termWrite,name)) {
                valBlur--;
                $(imgQuiz).css('filter', 'blur('+valBlur+'px)');
                if (name.length == termWrite.length) {
                    $(imgQuiz).css('filter', 'blur(0px)');
                    setTimeout(() => {
                        $(imgQuiz).css('filter', 'blur(10px)');
                        termWrite.val(' ');
                        Requisition.quiz(generationOffsetRandomic(), makeQuiz);
                    }, timeout);
                }
            }else{
                valBlur++
                if (termWrite.length === 0 && valBlur != 10) {
                    valBlur = 10;
                }
            }
            
            $(this).toggleClass("correct", isCorrect(termWrite,name));
            $(this).toggleClass("incorrect", !isCorrect(termWrite,name));
        })
    })
}

function isCorrect(termWrite, name) {
    return (termWrite.toLowerCase() == name.substr(0, termWrite.length).toLowerCase());
}

function generationOffsetRandomic() {
    return Math.floor(Math.random() * 1400);
}
function existsImageCharacter(characters) {
    return (characters.thumbnail.path == 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available');
}