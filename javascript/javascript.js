
fetch('javascript/projects.json').then((res) => {
    return res.json()
})

.then((data) => {
const target = document.querySelector ('.portfolios')
data.projects.forEach((projects)=> {
    target.innerHTML += `

    <div class="target">
        <h4>${projects.Title}</h4>           
        <div class="target2">
            <p class="portfoliotext">${projects.Description}</p> 
            <a class="githubpro" href="${projects.Git}"> Github <i class="fa-brands fa-square-github fa-2xl"></i></a>  
            <img class="portimg" src="${projects.Img}" />
        </div>
    </div>
    `
})

})