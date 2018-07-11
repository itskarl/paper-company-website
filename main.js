var last_known_scroll_position = 0;
var ticking = false;

function dramaticReveal(scroll_pos) {
  scroll_pos = last_known_scroll_position;
  // var ticking = true;

  if (scroll_pos > 0) {
    function revealContent() {
      content = document.getElementById('reveal');
      content.classList.remove('hidden');
      content.classList.add('revealed');
    }
    revealContent()
  }

  if (scroll_pos > 500) {
    function revealContent2() {
      content = document.getElementById('reveal2');
      content.classList.remove('hidden');
      content.classList.add('revealed');
      content.classList.add('animated');
      content.classList.add('fadeInLeft');
    }
    revealContent2()
  }

  if (scroll_pos > 900) {
    function revealContent3() {
      content = document.getElementById('reveal3');
      content.classList.remove('hidden');
      content.classList.add('revealed');
    }
    revealContent3()
  }

  if (scroll_pos > 2300) {
    function revealContent4() {
      content = document.getElementById('reveal4');
      content.classList.remove('hidden');
      content.classList.add('revealed');
    }
    revealContent4()
  }
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
    // window.requestAnimationFrame(function() {
      dramaticReveal();
      // ticking = false;
    // });
    // ticking = true;
  }

});
