
let burgerMenubloc =  document.querySelector('#burgerMenubloc')
let burgerBox =  document.querySelector('#burgerBox')
let burgerMenu =  document.querySelector('#burgerMenu')
let params = true
let urlBurger = document.querySelectorAll('#urlBurger')
burgerMenu.onclick=()=>{
    
    if (params == true) {
        burgerMenubloc.classList.add('burgerActive')
        burgerMenu.src = '/static/img/clouse.svg'
        setTimeout(() => {
            burgerBox.classList.add('burgerBox')
        }, 200);
        params = false
    }else{
        setTimeout(() => {
            burgerMenubloc.classList.remove('burgerActive')
        }, 200);
        burgerMenu.src = '/static/img/menu.svg'
        burgerBox.classList.remove('burgerBox')
        params = true
    }
}

urlBurger.forEach(i => {
    i.onclick=()=>{
        setTimeout(() => {
            burgerMenubloc.classList.remove('burgerActive')
        }, 200);
        burgerMenu.src = '/static/img/menu.svg'
        burgerBox.classList.remove('burgerBox')
        params = true
    }
});