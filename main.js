const bgAnimation = document.getElementById
('bgAnimation');

const numberOfColorBoxes = 1000;

for(let i=0; i<numberOfColorBoxes; i++){
    const colorBox = document.createElement
    ('div');
    colorBox.classList.add('colorBox');
    bgAnimation.append(colorBox)
}



const sections = document.querySelectorAll('section[id]')
const scrollActive = () =>{
    const scrollDown = window.scrollY
    sections.forEach(current =>{
        const sectionHeight = current.offsetHieght,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.header__menu a[herf*=' + sectionId + ']')
            
    })
}
window.addEventListener('scroll', scrollActive)