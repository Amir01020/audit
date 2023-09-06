

let block = document.querySelectorAll('#servicesBlock')
let text = document.querySelectorAll('#servisText')
text.forEach((i,items) => {
    i.dataset.id = items
    
});
block.forEach((i,items) => {
    i.dataset.id = items
    i.onclick=()=>{
        text.forEach(elem => {
            elem.classList.remove('myTextActive')
            if (i.dataset.id == elem.dataset.id) {
                elem.classList.add('myTextActive')
            }
        });
    }
});





