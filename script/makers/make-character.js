function characterRender(character) {
    removeCharacters();
    $('#characters-data').toggle();
    perfilCharacter(character);
    console.log(character);
}
function perfilCharacter(dataCharacter) {
    let character = dataCharacter.data.results[0];
    
    makePerfil(characterModel(character));
    buttonClick();
}
function makePerfil(Character) {
    let divInformationCharacter = createDivision();
    let imgCharacter = createImage();
    let nameCharacter = createSubTitleH5();
    let divNumber = createDivision()
    let div = createDivision();
    let buttonComic = createButton();
    let buttonSeries = createButton();
    let buttonStories = createButton();
    
    divNumber.addClass('btn-group').addClass('mt-3');
    buttonComic.addClass('btn').addClass('btn-success').addClass('ladda-button');
    buttonSeries.addClass('btn').addClass('btn-danger').addClass('ladda-button');
    buttonStories.addClass('btn').addClass('btn-warning').addClass('ladda-button').addClass('text-light');
    imgCharacter.addClass('ml-2').addClass('img-character');
    nameCharacter.addClass('ml-3').addClass('nameCharacter-font');
    div.addClass('col-md-6').addClass('col-sm-12').addClass('col-lg-6').addClass('col-12').addClass('mb-3').addClass('show-characters');
    divInformationCharacter.addClass('col-md-6').addClass('col-sm-12').addClass('col-lg-6').addClass('col-12');

    divNumber.append(buttonComic).append(buttonSeries).append(buttonStories);

    imgCharacter.attr('src', Character.image);
    nameCharacter.text(Character.name);
    buttonComic.text('comics N°' + Character.numberComics);
    buttonSeries.text('series N°' + Character.numberSeries);
    buttonStories.text('stories N°' + Character.numberStories);

    buttonComic.attr('id', 'button-comics').attr('data-style', 'zoom-out').attr('data-size', 's');
    buttonSeries.attr('id', 'button-series').attr('data-style', 'zoom-out').attr('data-size', 's');
    buttonStories.attr('id', 'button-stories').attr('data-style', 'zoom-out').attr('data-size', 's');
    
    div.append(imgCharacter).append(divInformationCharacter).append(divNumber);
    divInformationCharacter.append(nameCharacter);

    $('#characters-data').prepend(div);
}

function buttonClick() {
    $('#button-comics').click(function() {
        if (notHeroVersus()) {
            let ladda = Ladda.create(this);
            ladda.start();
            console.log('comic');
            Requisition.charactersPath('comics',slide, ladda);
        }
    })
    
    $('#button-series').click(function() {
        if (notHeroVersus()) {
            let ladda = Ladda.create(this);
            ladda.start();
            console.log('series');
            Requisition.charactersPath('series',tableData, ladda);
        }
    })
    
    $('#button-stories').click(function() {
        if (notHeroVersus()) {
            let ladda = Ladda.create(this);
            ladda.start();
            console.log('stories');
            Requisition.charactersPath('stories',tableData, ladda);
        }
    })
}

function notHeroVersus() {
    return $('.btn-group').length == 1
}

function characterModel(character) {
    return Character = {
        id: character.id,
        name: character.name,
        image: character.thumbnail.path + '.' + character.thumbnail.extension,
        numberComics: character.comics.available,
        numberSeries: character.series.available,
        numberStories: character.stories.available
    }
}

function removeComicsSeriesStories() {
    $('.slide-comic').remove();
    $('.table-series-stories').remove();
}