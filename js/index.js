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

// Signup buttons, 1, 2, 3:
let signedUp = false;

const button1 = document.querySelector('.btn1');
button1.addEventListener('click', (event)=>{
    let name = prompt('What is your name?', '');
    let listItem = document.createElement('li');
    listItem.textContent = `${name}`;
    listItem.style.fontSize = '2rem';
    listItem.style.color = 'teal';
    listItem.style.fontFamily = 'Indie Flower';
    document.querySelector('.bus1').appendChild(listItem);
    signedUp = true;
});

const button2 = document.querySelector('.btn2');
button2.addEventListener('click', (event)=>{
    let name = prompt('What is your name?', '');
    let listItem = document.createElement('li');
    listItem.textContent = `${name}`;
    listItem.style.fontSize = '2rem';
    listItem.style.color = 'teal';
    listItem.style.fontFamily = 'Indie Flower';
    document.querySelector('.bus2').appendChild(listItem);
    signedUp = true;
});

const button3 = document.querySelector('.btn3');
button3.addEventListener('click', (event)=>{
    let name = prompt('What is your name?', '');
    let listItem = document.createElement('li');
    listItem.textContent = `${name}`;
    listItem.style.fontSize = '2rem';
    listItem.style.color = 'teal';
    listItem.style.fontFamily = 'Indie Flower';
    document.querySelector('.bus3').appendChild(listItem);
    signedUp = true;
});

// Preventing nav item clicks resetting the page:

const nav = document.querySelector('.nav-container');
nav.addEventListener('click', (event)=>{event.preventDefault()});

// select event listener

// Mouseleave to remind visitor to sign up for a trip

const page = document.querySelector('body');
page.addEventListener('mouseleave', (event)=>{
    if(signedUp === false){
        alert("Don't forget to sign up!")
    };
});


