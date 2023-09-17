let projectImg = document.querySelectorAll('.projectImg')
let projectImg1 = document.querySelector('.projectImg1')
let projectImg2 = document.querySelector('.projectImg2')
let projectImg3 = document.querySelector('.projectImg3')
let projectModlImg = document.querySelector('.projectModlImg')
let clouseProject = document.querySelector('.clouseProject')
for (let i of projectImg) {
    i.onclick = () => {
        projectImg1.src = i.dataset.img1
        projectImg2.src = i.dataset.img2
        projectImg3.src = i.dataset.img3
        projectModlImg.classList.add('projectModlImgActive')
    }
}

clouseProject.onclick = () => {
    projectModlImg.classList.remove('projectModlImgActive')
}
let searchProject = document.querySelector('.searchProject')

let search_my_project = document.querySelectorAll('.search_my_project')
searchProject.oninput = () => {
    let val = searchProject.value
    if (val != '') {
        for (let i of search_my_project) {
            console.log(i.dataset.time);
            i.classList.remove('false')
            i.classList.remove('true')
            if (i.dataset.time.search(val) == -1) {
                i.classList.add('false')
            } else {

                i.classList.add('true')
            }
        }
    }else{
        for (let i of search_my_project) {
            
            i.classList.remove('false')
            i.classList.remove('true')
        }
    }

}


