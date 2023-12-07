// const buttons = document.querySelectorAll('.button')
// const body = document.querySelector("body")

// buttons.forEach(function(button){
//     console.log(button);
//     button.addEventListener('click',function(e){
//         console.log(e);
//         console.log(e.target);
//     })
// });



//generate a random color

const randomColor = function(){
    const hex = "0123456789ABCDEFG";
    let color = '#';
    for(let i = 0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
};
let intervalId;
const startChangingColor = function(){
    intervalId =  setInterval(changeByColor,1000);

    function changeByColor(){
    document.body.style.backgroundColor = randomColor();
    }
};
const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
};

document.querySelector('#start').addEventListener
('click',startChangingColor);

document.querySelector('#stop').addEventListener
('click', stopChangingColor);













