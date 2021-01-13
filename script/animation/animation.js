function lottieAnimation(namePathFile) {
  var animation = bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: namePathFile
  });
}

function error() {
  showAnimation();

  let div = createDivision();
  let h1 = $('<h1>');
  let imageThanos = createImage();

  div.addClass('container').addClass('text-danger');
  h1.text('Thanos passed on here!').addClass('display-1');
  imageThanos.attr('src', '../assets/error-page-thanos.gif');

  div.append(h1).append(imageThanos);
  $('#home-page').toggle();
  $('#bm').append(div);

  setTimeout(() => {
    lottieAnimation('assets/person-error-404-facebook-style.json');
  }, 2000);
  
  

  setTimeout(() => {
    $('.text-danger').remove()
  }, 1500);
}

function loadingPage() {  
  lottieAnimation('assets/load-deadpool.json');
  showAnimation();
  $('#bm').addClass('loading-page-deadpool');
}

function searchHero() {
  lottieAnimation('assets/load-google.json');
  showAnimationSearch();
}

function showAnimationSearch(params) {
  $('#bm').toggle();
  $('.show-characters').toggle();
  $('#pagination').toggle();
  $('#bm').find('svg').addClass('animationFrame');
  height();
}

function showAnimation() {
  height();
  $('#bm').toggle();
  $('#pagination').toggle();
  $('#bm').find('svg').addClass('animationFrame');
}

function height() {
  $('html > body').css('height', '100%');
  $('html').css('height', '100%');
}

function removeAnimation() {
  $('.animationFrame').remove();
  $('#bm').removeClass('loading-page-deadpool');
  $('#bm').find('svg').remove();
  $('html > body').css('height', 'auto');
}