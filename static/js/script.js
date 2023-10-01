let aboutUrlsArr = [
    {
        name: 'Наши сертификаты',
        id: 'about#lists'
    }, {
        name: 'Наши сотрудники',
        id: 'about#employees'
    }, {
        name: 'Клиенты компании',
        id: 'about#clientAbout'
    }, {
        name: 'Услуги оказываемые ООО',
        id: 'about#aboutServices'
    },
]

let servicesUrlsArr = [
    {
        name: 'Аудит финансовой отчетности;',
        id: '1'
    }, {
        name: 'Оптимизация налогообложения предприятия;',
        id: '2'
    }, {
        name: 'Финансовый анализ деятельности предприятия;',
        id: '3'
    }, {
        name: 'Аудит по специальному вопросу;',
        id: '4'
    },
]

function remuve_modl() {
    let urlslocation = document.querySelectorAll('.urlslocation')
    urlslocation.forEach(elem => {
        elem.onclick = () => {
            proms = true
            enproms = true
            navServices1.innerHTML = ''
            navModlHover.classList.remove('navModlHoverActive')
            elem.scrollMargin
            
        }
    });

}



let burgerMenubloc = document.querySelector('#burgerMenubloc')
let burgerBox = document.querySelector('#burgerBox')
let burgerMenu = document.querySelector('#burgerMenu')
let params = true
let urlBurger = document.querySelectorAll('#urlBurger')
burgerMenu.onclick = () => {

    if (params == true) {
        burgerMenubloc.classList.add('burgerActive')
        burgerMenu.src = '/static/img/clouse.svg'
        setTimeout(() => {
            burgerBox.classList.add('burgerBox')
        }, 200);
        params = false
    } else {
        setTimeout(() => {
            burgerMenubloc.classList.remove('burgerActive')
        }, 200);
        burgerMenu.src = '/static/img/menu.svg'
        burgerBox.classList.remove('burgerBox')
        params = true
    }
}
function urlsCreate(text, id, box) {

    let a = document.createElement('a');
    a.classList.add('urlslocation')
    a.innerHTML = text
    a.href = id

    box.append(a)
}
let navModlHover = document.querySelector('.navModlHover')
let navServices = document.querySelector('.navServices1')
let navServices1 = document.querySelector('.navServices')
let proms = true
let enproms = true
urlBurger.forEach(i => {
    if (i.dataset.hover == 'navAbout') {
        i.onmouseover = () => {
            navModlHover.classList.add('navModlHoverActive')
            if (proms == true) {
                navServices1.innerHTML = ''
                for (let item of aboutUrlsArr) {
                    urlsCreate(item.name, item.id, navServices1)


                }
                proms = false
                remuve_modl()
            }
        }
    }
    else if (i.dataset.hover == 'navServices') {
        i.onmouseover = () => {
            navModlHover.classList.add('navModlHoverActive')
            if (enproms == true) {
                navServices1.innerHTML = ''
                for (let item of servicesUrlsArr) {
                    urlsCreate(item.name, `services#services${item.id}`, navServices1)
                    
                }
                enproms = false
                remuve_modl()
                
            }
        }
    }
    navServices.onmouseover = () => {
        proms = true
        enproms = true
        navServices1.innerHTML = ''
        navModlHover.classList.remove('navModlHoverActive')
    }
    i.onclick = () => {
        setTimeout(() => {
            burgerMenubloc.classList.remove('burgerActive')
        }, 200);
        burgerMenu.src = '/static/img/menu.svg'
        burgerBox.classList.remove('burgerBox')
        params = true
    }
});



