
new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});
let btnSubmit = document.querySelector('#btnSubmit')
let userName = document.querySelector('#name')
let phone = document.querySelector('#number')
let userComment = document.querySelector('#comment')

let obj = {
    name: '',
    phone: '',
    comment: ''
}

btnSubmit.onclick = (event) => {
    event.preventDefault()
    if (userName.value != '' && phone.value != '' && userComment.value != '') {
        obj.name = userName.value
        obj.phone = phone.value
        obj.comment = userComment.value
        console.log(obj);
        axios.post('https://auditbotarr-default-rtdb.firebaseio.com/arr.json', obj)
        userName.value = ''
        phone.value = ''
        userComment.value = ''

    }
}




let modalComment = document.querySelector('.modalComment')
let clouseModalForms = document.querySelector('.clouseModalForms')
let oupenModlComment = document.querySelector('.oupenModlComment')
oupenModlComment.onclick=()=>{
    modalComment.classList.add('modalCommentActive')
}
clouseModalForms.onclick=()=>{
    modalComment.classList.remove('modalCommentActive')
}