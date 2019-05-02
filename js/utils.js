$(document).ready(function() {

  $('#nav-bar a').on('click', smoothScroll);
  $('#read-more').on('click', smoothScroll);

  function smoothScroll(event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800);
    }
  }

});
