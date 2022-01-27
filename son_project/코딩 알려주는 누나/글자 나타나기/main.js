let mainText = document.querySelector("h1")

window.addEventListener('scroll',function(){
    let value = window.scrollY;

    if(value>350){
        mainText.style.animation='disappear 1.5s ease-out forwards';
    }
    else{
        mainText.style.animation='slide 1.5s ease-out'
    }
})