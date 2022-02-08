let verticalBar = document.getElementById("vertical-underline");
let horizontalBar = document.getElementById("horizontal-underline");
let horizontalMenus = document.querySelectorAll("nav:first-child a");
let verticalMenus = document.querySelectorAll("nav:nth-child(2) a");

function verticalIndicator(e) {
  verticalBar.style.left = e.offsetLeft + "px";
  verticalBar.style.width = e.offsetWidth + "px";
  verticalBar.style.top = e.offsetTop + e.offsetHeight + "px";
}
function horizontalIndicator(e) {
  horizontalBar.style.left = e.offsetLeft + "px";
  horizontalBar.style.width = e.offsetWidth + "px";
  horizontalBar.style.top = e.offsetTop + e.offsetHeight + "px";
}

horizontalMenus.forEach((menu) =>
  menu.addEventListener("click", (e) =>
    horizontalIndicator(e.currentTarget)
  )
);

verticalMenus.forEach((menu) =>
  menu.addEventListener("click", (e) => verticalIndicator(e.currentTarget))
);

/* 새로운 애니메이션 */
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