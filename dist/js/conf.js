

function activeMenuItem(){
    return document.getElementsByClassName('nav-item active')[0];
}

function activeView() {
    return document.querySelector('.c33a .col-11.show');
}

function select(params) {
    return document.querySelector(params);
}

function openView(index){
    activeMenuItem().classList.remove("active");
    activeView().classList.remove("show");
    c33a[index].classList.add("show");
    menuItem[index].classList.add("active");
}

var loading = `<img src="dist/img/loading.gif" style="width:10%" class="img-fluid" />`;
const body = select("body");
let conf = select(".check-nib");
let menu = select('#menu .navbar-nav');
let c33a = document.querySelectorAll('.c33a .col-11');
//let see = select('.seeAll');
let atr = select('.atr');
let addAccount = select('.add-account');
var menuItem = document.querySelectorAll('.navbar-nav .nav-item');

menuItem.forEach((el,i)=>{
    menuItem[i].addEventListener("click", (e)=>{
        activeMenuItem().classList.remove("active");
        activeView().classList.remove("show");
        c33a[i].classList.add("show");
        el.classList.add("active");
        e.preventDefault();
    });
});

// see.addEventListener("click", (e)=>{
//     atr.classList.add("active");
//     body.classList.add('no-scroll');
//     e.preventDefault();
// });

fr = document.querySelector('.fa-close');
fr.addEventListener("click", (e)=>{
    body.classList.remove('no-scroll');
    atr.classList.remove('active');
    e.preventDefault();
});

addAccount.addEventListener("click", (e)=>{
    atr.classList.add("active");
    body.classList.add('no-scroll');
    e.preventDefault();
});

button = select("button[type='submit']") || undefined;

button.addEventListener("click", async (e)=>{
    e.preventDefault();
    return await new Promise(result=>{consultar()});
});

function consultar(){
    let destino = select('.recept');
    setTimeout(()=>{
        destino.innerHTML = "<h1>Resultado</h1>";
    }, 2000);
    
    destino.innerHTML = loading;

    return true;
}

function randomColorBackground(){
    const getRandomNumber = (limit)=>{
        return Math.floor(Math.random() * limit);
    };

    const getColors = ()=>{
        const r = getRandomNumber(255);
        const g = getRandomNumber(255);
        const b = getRandomNumber(255);

        return  `rgb(${r}, ${g}, ${b})`;
    };

    return getColors();
}

console.log(randomColorBackground());