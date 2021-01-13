Requisition.characters(charactersRender);

function charactersRender(dataCharacters) {
    console.log(dataCharacters);
    
   let content = makeContent(dataCharacters);
   $('#characters-data').append(content);
   showMoreCharacter();
}

function makeContent(datasCharacters) {
    let datas = datasCharacters.data.results;

    datas.forEach(dataCharacters => {
        characters = createDivision().append(createConteinerCharacters(dataCharacters));
        addClassofColumnBootStrap(characters);
        
        $('#characters-data').append(characters);
    });

    if (datas.length === 0) {
        $('#characters-data').append(createSubTitleH5().text('Search not Found...').addClass('text-light').addClass('not-found'))
    }else{
        $('.not-found').remove()
    }
    
}

function createConteinerCharacters(characters) {
    let divBody = createDivision();
    let divContents = createDivision();
    let divImg = createDivision();
    let nameCharacter = createSpan();
    let imgcharacters = createImage();

    divBody.addClass('contentPersonalized');
    divContents.addClass('row');

    nameCharacter.text(characters.name);
    
    imgcharacters.attr('src', imageExists(characters)).addClass('image-character');
    
    divImg.addClass('col-lg-12').addClass('col-md-12').addClass('div-content-character-data').attr('id', characters.id);

    divImg.append(imgcharacters).append(nameCharacter);
    divContents.append(divImg);
    divBody.append(divContents);

    return divBody;
}
function showMoreCharacter() {
    $('.show-characters').click( (element) => {
        let itemClick = element.target;
        let  idCharacter = $(itemClick).parent().attr('id');

        $('#characters-data').toggle();
        Requisition.charactersMoreInformation(idCharacter,characterRender);
    })
}

function createDivision() {
    return $('<div>');
}
function createSubTitleH5() {
    return $('<h5>');
}
function createParagraph() {
    return $('<p>');
}
function createImage() {
    return $('<img>');
}
function createSpan() {
    return $('<span>').addClass('font-text-default');
}
function createButton() {
    return $('<button>');
}
function addClassofColumnBootStrap(element) {
    return element.addClass('show-characters').addClass('col-xl-3').addClass('col-lg-3').addClass('col-md-6').addClass('col-sm-6').addClass('mt-3');
}

function imageExists(characters) {
    return (characters.thumbnail.length === 0)? "../img/spiderman-sad.jpg" : characters.thumbnail.path+"."+characters.thumbnail.extension;
}