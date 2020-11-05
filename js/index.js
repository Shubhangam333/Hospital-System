var burger = document.getElementsByClassName('burger')[0]

burger.addEventListener('click', clicked)

var j=0
function clicked() {
  if (j===0) {
   nav.className = 'navon'
   ul.className = 'ulon'
    j++
  } else {
    body.nav.className = ''
    body.ul.className = ''
    j--
  }
}