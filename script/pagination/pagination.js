function pagination(charactersLength) {    
    createPages(charactersLength);
}

function createPages(charactersLength) {
    let data = [];
    for (let i = 0; i < charactersLength; i++) {
        data.push(i);
    }

    $('#pagination').pagination({
        dataSource: data,
        pageSize: 20,
        showPrevious: false,
        showNext: false,
        callback: function() {            
            clickPage()
            createiconsPagination()
        }
    });
}

function createiconsPagination() {
    $('.paginationjs-pages').find('ul').addClass('pagination').addClass('justify-content-center');
    $('.paginationjs-pages').find('li').addClass('page-item');
    $('.paginationjs-pages').find('a').addClass('page-link').attr('href', '#');
}

function clickPage() {
    $('.paginationjs-page').click(function() {
        removeCharacters();

        let numberPage = $(this).text();
        let offSet = (numberPage*10*2-20); // calculate offset of page

        loadingPage();

        Requisition.charactersOffSet(offSet,charactersRender); 
    })
}

function removeCharacters() {
    $('.show-characters').remove();
}