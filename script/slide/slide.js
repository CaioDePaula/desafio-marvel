function slide(characterComic) {
    createSlide(characterComic);
    $(".slide-comic").slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true
	});
}

function createSlide(characterComic) {
    let divSlideComic = createDivision();
    divSlideComic.addClass('slide-comic').addClass('col-md-6').addClass('col-sm-12').addClass('col-lg-6').addClass('col-12').addClass('show-characters');

    characterComic.data.results.forEach(comic => {
        divSlideComic.append(createImageSlide(characterComicModel(comic)));
    });
    $('#characters-data').append(divSlideComic);
}
function createImageSlide(comic) {
    let imgComic = createImage();

    return imgComic.attr('src', comic.image).addClass('image-comic');
}

function characterComicModel(character) {
    return Character = {
        id: character.id,
        name: character.name,
        image: character.thumbnail.path + '.' + character.thumbnail.extension,
    }
}