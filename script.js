// Interests section

let prev1 = document.getElementById('prev1')
let next1 = document.getElementById('next1')
let prev2 = document.getElementById('prev2')
let next2 = document.getElementById('next2')
let prev3 = document.getElementById('prev3')
let next3 = document.getElementById('next3')
let japanese = document.getElementById('japanese')
let writing = document.getElementById('writing')
let family = document.getElementById('family')


 let buttonClick = function(section1, section2) {
    section1.style.display='block';
    section2.style.display="none";
}

prev1.addEventListener('click', e =>{buttonClick(family, japanese)})
next1.addEventListener('click', e =>{buttonClick(writing, japanese)})
prev2.addEventListener('click', e =>{buttonClick(japanese, writing)})
next2.addEventListener('click', e =>{buttonClick(family, writing)})
prev3.addEventListener('click', e =>{buttonClick(writing, family)})
next3.addEventListener('click', e =>{buttonClick(japanese, family)})

// Links section

let github = document.getElementById('github')
let codewars = document.getElementById('codewars')
let freecodecamp = document.getElementById('freecodecamp')
let readme = document.getElementById('readme')

/*let hoverLink = function(link) {
    link.style.opacity=0.5;
}
prev1.addEventListener('click', e =>{buttonClick(family, japanese)})
*/

github.onmouseover = function() {
    github.style.opacity = 0.5;
  }
  github.onmouseout = function() {
    github.style.opacity = 1;
  }

  codewars.onmouseover = function() {
    codewars.style.opacity = 0.5;
  }
  codewars.onmouseout = function() {
    codewars.style.opacity = 1;
  }

  freecodecamp.onmouseover = function() {
    freecodecamp.style.opacity = 0.5;
  }
  freecodecamp.onmouseout = function() {
    freecodecamp.style.opacity = 1;
  }

  readme.onmouseover = function() {
    readme.style.opacity = 0.5;
  }
  readme.onmouseout = function() {
    readme.style.opacity = 1;
  }