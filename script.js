let prev1 = document.getElementById('prev1')
let next1 = document.getElementById('next1')
let prev2 = document.getElementById('prev2')
let next2 = document.getElementById('next2')
let prev3 = document.getElementById('prev3')
let next3 = document.getElementById('next3')
let japanese = document.getElementById('japanese')
let writing = document.getElementById('writing')
let family = document.getElementById('family')

console.log(prev1)
console.log(next1)
console.log(prev2)
console.log(next2)
console.log(prev3)
console.log(next3)
console.log(japanese)
console.log(writing)
console.log(family)


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



