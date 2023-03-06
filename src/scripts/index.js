import { getUserByName, getRepos } from '/src/scripts/request.js'

export function showProfile() {

    const input = document.querySelector('input')
    const button = document.querySelector('button')

    button.addEventListener('click', async () => {

        const repos = await getRepos(input.value)
        const user = await getUserByName(input.value)
        
    })

}

showProfile()