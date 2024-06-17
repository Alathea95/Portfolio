
fetch('javascript/projects.json').then((res) => {
    return res.json()
})

.then((data) => {
const target = document.querySelector ('.target')
data.projects.forEach((projects)=> {
    target.innerHTML += `

    <h4>${projects.Title}</h4>

    <img src="${projects.Img}" />

    <p>${projects.Description}</p> 

    <a href="${projects.Git}">Git</a>
    `
})

})