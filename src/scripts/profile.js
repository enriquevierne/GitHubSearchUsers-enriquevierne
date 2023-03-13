import { getRepos } from '/src/scripts/request.js'

function renderProfile() {

    const data = localStorage.getItem('user')
    const user = JSON.parse(data)
    const container = document.querySelector('.content-profile')

    const infoUser = document.createElement('div')
    const avatarUser = document.createElement('img')
    const nameUser = document.createElement('h2')
    const changeUser = document.createElement('a')

    infoUser.classList.add('profile-info')

    avatarUser.src = user.avatar_url

    nameUser.innerText = user.name

    changeUser.classList.add('profile-btn')
    changeUser.href = '../../index.html'
    changeUser.innerText = 'Trocar Usuário'

    container.append(infoUser, changeUser)
    infoUser.append(avatarUser, nameUser)
    
    return container
}
renderProfile()

function renderReposUser() {

    const data = localStorage.getItem('userRepos')
    const repos = JSON.parse(data)
    const container = document.querySelector('.repos-list')

    repos.forEach(repo => {

        const cardRepo = document.createElement('li')
        const titleRepo = document.createElement('h2')
        const textRepo = document.createElement('p')
        const interationsRepo = document.createElement('div')
        const linkRepo = document.createElement('a')
        const countStar = document.createElement('div')
        const starRepo = document.createElement('img')
        const totalStar = document.createElement('p')
        
        cardRepo.classList.add('repos-card')

        titleRepo.classList.add('title-repo')
        titleRepo.innerText = repo.name
        
        textRepo.classList.add('text-repo')
        textRepo.innerText = repo.description

        interationsRepo.classList.add('interations-repos')
        
        linkRepo.classList.add('link-repos')
        linkRepo.target = '_blank'
        linkRepo.innerText = 'Repositório'
        linkRepo.href = repo.html_url

        countStar.classList.add('count-star')
        
        totalStar.classList.add('total-star')
        totalStar.innerText =  repo.stargazers_count
        starRepo.classList.add('stargray')
        starRepo.src = '../assets/img/stargrey.png'
        starRepo.addEventListener('click', ()=>{

            if(starRepo.classList.contains('stargray')){

                totalStar.innerText++
                starRepo.classList.remove('stargray')
                starRepo.src = '../assets/img/starred.png'
                starRepo.classList.add('staryellow')
            }else{
                
                totalStar.innerText--
                starRepo.classList.remove('staryellow')
                starRepo.src = '../assets/img/stargrey.png'
                starRepo.classList.add('stargray')
            }
        })

        container.append(cardRepo)
        cardRepo.append(titleRepo, textRepo, interationsRepo)
        interationsRepo.append(linkRepo, countStar)
        countStar.append(starRepo, totalStar)

    });

    return container
}
renderReposUser()

function countRepos(){

    const data = localStorage.getItem('user')
    const user = JSON.parse(data)
    const totalRepos = document.querySelector('.total-repos')

    if(user.public_repos === 0){

        const emptyList = document.querySelector('.repos-list')
        const message = document.createElement('h2')

        message.innerText = 'Este usuário não possui repositórios públicos.'
        emptyList.append(message)
    }else{

        totalRepos.innerText = `Total de repositórios públicos: ${user.public_repos}`
    }

}
countRepos()