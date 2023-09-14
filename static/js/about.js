let arr = [
    {
        img: '/static/img/compani.jpg',
        name: 'Константин Кузьмичь',
        comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate mollitia alias suscipitrerum eveniet pariatur quae perferendis minus accusantium nemo non blanditiis eaque ad undedelectus cumque, tempora molestiae debitis.',
        id: '1',
        sert_img:'static/img/sert1.png',
        
    }, {
        img: '/static/img/compani1.jpg',
        name: 'Aлексеева Мария',
        comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate mollitia alias suscipitrerum eveniet pariatur quae perferendis minus accusantium nemo non blanditiis eaque ad undedelectus cumque, tempora molestiae debitis.',
        sert_img:'static/img/sert1.png',
        id: '2'
    }, {
        img: '/static/img/compani2.jpg',
        name: 'Константин Кузьмичь',
        comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate mollitia alias suscipitrerum eveniet pariatur quae perferendis minus accusantium nemo non blanditiis eaque ad undedelectus cumque, tempora molestiae debitis.',
        sert_img:'static/img/sert1.png',
        id: '3'
    }, {
        img: '/static/img/compani.jpg',
        name: 'Константин Кузьмичь',
        comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate mollitia alias suscipitrerum eveniet pariatur quae perferendis minus accusantium nemo non blanditiis eaque ad undedelectus cumque, tempora molestiae debitis.',
        sert_img:'static/img/sert1.png',
        id: '4'
    }, {
        img: '/static/img/compani.jpg',
        name: 'Константин Кузьмичь2',
        comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate mollitia alias suscipitrerum eveniet pariatur quae perferendis minus accusantium nemo non blanditiis eaque ad undedelectus cumque, tempora molestiae debitis.',
        sert_img:'static/img/sert1.png',
        id: '5'
    }
]

let my_creat_box = document.querySelector('.my_creat_box')




function creat(imges, names, comment, id) {
    // Создаем блок div
    const block = document.createElement("div");
    block.id = id
    block.classList.add("block");
    block.classList.add("oupen_block");

    // Создаем блок img
    const img = document.createElement("img");
    img.src = imges;
    img.alt = "";

    // Создаем блок div для текста
    const companiText = document.createElement("div");
    companiText.classList.add("companiText");

    // Создаем заголовок h4
    const h4 = document.createElement("h4");
    h4.textContent = names;

    // Создаем горизонтальную линию hr
    const hr = document.createElement("hr");

    // Создаем блок p для текста
    const p = document.createElement("p");
    p.textContent = comment;

    // Добавляем элементы в DOM
    companiText.appendChild(h4);
    companiText.appendChild(hr);
    companiText.appendChild(p);

    block.appendChild(img);
    block.appendChild(companiText);



    my_creat_box.appendChild(block);
}



for (let i of arr) {
    creat(i.img, i.name, i.comment, i.id)
}

let about_text = document.querySelector('.about_text')
let about_comments = document.querySelector('.about_comments')
let about_img = document.querySelector('.about_img')
let employees_modal = document.querySelector('.employees_modal')
let about_clouse = document.querySelector('.about_clouse')
let oupen_block = document.querySelectorAll('.oupen_block')
oupen_block.forEach((i) => {
    i.onclick = () => {
        
        about_text.innerHTML = arr[i.id -1].name
        about_comments.innerHTML = arr[i.id -1].comment
        about_img.src =  arr[i.id -1].sert_img
        employees_modal.classList.add('employees_modal_active')

    }
});

about_clouse.onclick = () => {
    employees_modal.classList.remove('employees_modal_active')
}