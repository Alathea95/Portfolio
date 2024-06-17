
fetch('javascript/projects.json').then((res) => {
    return res.json()
})

.then((data) => {
const target = document.querySelector ('.portfolios')
data.projects.forEach((projects)=> {
    target.innerHTML += `

    <div class="target">
        <div>
            <h4>${projects.Title}</h4>
            <p class="portfoliotext">${projects.Description}</p> 
            <a href="${projects.Git}">Github</a>
        </div>
    

    <img src="${projects.Img}" />
    </div>
    `
})

})