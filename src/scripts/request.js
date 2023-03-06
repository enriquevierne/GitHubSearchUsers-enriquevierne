export async function getUserByName(user) {

    const getUser = await fetch(`https://api.github.com/users/${user}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(res => {
            localStorage.setItem('user', JSON.stringify(res))
            
            if (res.message === 'Not Found') {
                window.location.replace('/src/pages/error.html')
            } else {
                window.location.replace('/src/pages/profile.html')
            }
        })

    return getUser
}

export async function getRepos(user) {
    const getUser = await fetch(`https://api.github.com/users/${user}/repos`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(res => {
            localStorage.setItem('userRepos', JSON.stringify(res))
        })
        return getUser
}

