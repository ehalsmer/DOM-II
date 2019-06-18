// Your code goes here

// const title = document.querySelector('.logo-heading');
// title.addEventListener('click', (title) => {title.style.color = 'green'});


// Uppercase welcome header, mouseenter
const welcome = document.querySelector('.intro h2');
welcome.addEventListener('mouseenter', (event)=>{
    welcome.textContent = welcome.textContent.toUpperCase();
    setTimeout(()=>{welcome.textContent = welcome.textContent.toLowerCase()}, 2000)
});

// Text color changes on keydown

const colors = ['#9966CC','#0000FF','#E4D00A','#8B0000','#00FF00','#F400A1','#008000','#5218FA','#4B0082','#A50B5E','#C3B091','#B57EDC','#98FF98','#000080','#FF7F00','#9F00C5','#A6A6A6','#FF0000','#757575','#008080','#4166F5','#8F00FF','#FC6C85','#738678','#FFFF00','#39A78E',]

const text = document.querySelector('body');
text.addEventListener('keydown', (event)=>{
    if (event.keyCode >= 65 && event.keyCode <=90){
        text.style.color = `${colors[event.keyCode-65]}`;
    } else {
        text.style.color = 'black';
    }
});

// Wheel event, inside a mouseover on the header
const header = document.querySelector('.main-navigation');

function headerWheel(event){
    event.preventDefault();
    // console.log[event.deltaY];
    header.style.color = colors[Math.floor(Math.random()*26)];
}

header.addEventListener('mouseover', (event) => {
    header.addEventListener('wheel', headerWheel)
    // header.style.color = 'blue'
});

// Doubleclick bus image to change it

const busImg = document.querySelector('#bus-img');
busImg.addEventListener('dblclick', (event)=>{
    // alert('Hey!')
    busImg.src = `img/busses/${Math.ceil(Math.random()*27)}.jpg`;
});

//