let arr = [
    {
        name: 'Аудит финансовой отчетности;',
        img: '/static/img/log.svg',
        id:'1',
        text: 'Надежная правовая защита без затрат на содержание собственного юридического отдела'
    }, {
        name: 'Оптимизация налогообложения предприятия;',
        img: '/static/img/log.svg',
        id:'2',
        text: 'Надежная правовая защита без затрат на содержание собственного юридического отдела'
    }, {
        name: 'Финансовый анализ деятельности предприятия;',
        id:'3',
        img: '/static/img/log.svg',
        text: 'Надежная правовая защита без затрат на содержание собственного юридического отдела'
    }, {
        name: 'Аудит по специальному вопросу;',
        id:'4',
        img: '/static/img/log.svg',
        text: 'Надежная правовая защита без затрат на содержание собственного юридического отдела'
    },
]
let myservicesbox = document.querySelector('.myservicesbox')
console.log(myservicesbox);
function creat(imgs, myservices, name, myBlock ,id_url) {
    // Создание элемента div с классом "block" и id "servicesBlock"
    let servicesBlock = document.createElement('div');
    servicesBlock.className = 'block';
    servicesBlock.id = id_url;
    servicesBlock.classList.add('servicesBlock')  
    

    // Создание элемента div с классом "title"
    let title = document.createElement('div');
    title.className = 'title';

    // Создание элемента div с классом "img"
    let img = document.createElement('div');
    img.className = 'img';

    // Создание элемента img с атрибутом src и альтернативным текстом
    let image = document.createElement('img');
    image.src = imgs;
    image.alt = '';

    // Добавление элемента img в элемент div с классом "img"
    img.appendChild(image);

    // Создание элемента h4 с текстом "Общая информация"
    let heading = document.createElement('h4');
    heading.textContent = name;

    // Добавление элементов img и h4 в элемент div с классом "title"
    title.appendChild(img);
    title.appendChild(heading);

    // Создание элемента div с классом "myText myTextActive" и id "servisText"
    let myText = document.createElement('div');
    myText.className = 'myText myTextActive';
    myText.id = 'servisText';

    // Создание элемента p с текстом
    let paragraph = document.createElement('p');
    paragraph.textContent = myservices;

    // Добавление элемента p в элемент div с классом "myText myTextActive"
    myText.appendChild(paragraph);

    // Добавление элементов title и myText в элемент div с id "servicesBlock"
    servicesBlock.appendChild(title);
    servicesBlock.appendChild(myText);
    myBlock.appendChild(servicesBlock)
    // Добавление элемента servicesBlock к нужному родительскому элементу в DOM-дереве
}

for (let i of arr) {

    creat(i.img, i.text, i.name, myservicesbox , `services${i.id}`)
}
let block = document.querySelectorAll('.servicesBlock')
let text = document.querySelectorAll('#servisText')
text.forEach((i, items) => {
    i.dataset.id = items

});
block.forEach((i, items) => {

    

    i.dataset.id = items
    i.onclick = () => {
        text.forEach(elem => {
            elem.classList.remove('myTextActive')
            if (i.dataset.id == elem.dataset.id) {
                elem.classList.add('myTextActive')
            }
        });
    }
});








