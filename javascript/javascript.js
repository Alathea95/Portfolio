fetch('javascript/projects.json')
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        const target = document.querySelector('.portfolios');
        data.projects.forEach((project) => {
            target.innerHTML += `
                <div class="target">
                    <h4>${project.Title}</h4>           
                    <div class="target2">
                        <p class="portfoliotext">${project.Description}</p> 
                        <a target="_blank" class="githubpro" href="${project.Git}"> Github <i class="fa-brands fa-square-github fa-2xl"></i></a>  
                        <img class="portimg" src="${project.Img}" alt="${project.Title}" />
                    </div>
                </div>
            `
        })
    })