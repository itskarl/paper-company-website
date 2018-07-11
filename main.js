var last_known_scroll_position = 0;
var ticking = false;

function dramaticReveal(scroll_pos) {
  scroll_pos = last_known_scroll_position;
  // var ticking = true;

  if (scroll_pos > 0) {
    console.log("one")

    function revealContent() {
      content = document.getElementById('reveal');
      content.classList.remove('hidden');
      content.classList.add('revealed');
    }
    revealContent()
  }

  if (scroll_pos > 700) {
    console.log("two")

    function revealContent2() {
      content = document.getElementById('reveal2');
      content.classList.remove('hidden');
      content.classList.add('revealed');
    }
    revealContent2()
  }


  if (scroll_pos > 1500) {
    console.log("three")

    function revealContent3() {
      content = document.getElementById('reveal3');
      content.classList.remove('hidden');
      content.classList.add('revealed');
    }
    revealContent3()
  }

  if (scroll_pos > 2300) {
    console.log("four")

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
