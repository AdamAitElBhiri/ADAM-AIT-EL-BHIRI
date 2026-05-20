async function renderProjectDetails(){
    let responseData;
  
    let projectShowCaseContainer = document.querySelector('.project-showcase-grid');
    let projectSectionContainer = document.querySelector('.project-section-container');
    try{
        let response = await fetch('./projects.json');
        responseData = await response.json();
        
    }catch(error){
        console.error("Error fetching data:");
    }
    let projects = responseData.projects;
    console.log(projects);
    projects.forEach((project,index)=>{
        let container = document.createElement('div');
        let image = document.createElement('img');
        let projectHeader = document.createElement('h3');
        let projectDesc = document.createElement('p');
        let detailsButton = document.createElement('button');
        let languagesContainer = document.createElement('div');
        image.src = project.projectImage;
        image.classList.add('projectImage');
        languagesContainer.classList.add('languagesContainer');
        projectHeader.innerHTML = project.projectName;
        projectHeader.classList.add('projectTitle');
        projectDesc.innerHTML = project.description;
        detailsButton.innerHTML = 'view details';
        container.appendChild(image);
        project.languages.forEach((language,index)=>{
            let languageField = document.createElement('p');
            languageField.innerHTML = language;
            languagesContainer.appendChild(languageField);
            container.appendChild(languagesContainer);
        });
        container.appendChild(projectHeader);
        container.appendChild(projectDesc);
        container.appendChild(detailsButton);
        container.classList.add('project-container');
        projectShowCaseContainer.appendChild(container);
        detailsButton.addEventListener('click',()=>{
            let container = document.createElement('div');
            let image = document.createElement('img');
            let projectHeader = document.createElement('h3');
            let projectDesc = document.createElement('p');
            let removeBtn = document.createElement('button');
            removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            container.appendChild(removeBtn);
            removeBtn.classList.add('removeBtn');
            projectDesc.classList.add('projectDesc');
            let languagesContainer = document.createElement('div');
            let websiteLink = document.createElement('a');
            image.src = project.projectImage;
            image.classList.add('singleProjectImage');
            languagesContainer.classList.add('languagesContainer');
            languagesContainer.classList.add('singleLanguagesContainer');
            projectHeader.innerHTML = project.projectName;
            projectHeader.classList.add('singleProjectTitle');
            projectDesc.innerHTML = project.description;
            websiteLink.innerHTML = 'view live app';
            container.appendChild(image);
            container.appendChild(projectHeader);
            websiteLink.href = project.websiteLink;
            websiteLink.target = '_blank';
            project.languages.forEach((language,index)=>{
                let languageField = document.createElement('p');
                languageField.innerHTML = language;
                languagesContainer.appendChild(languageField);
                container.appendChild(languagesContainer);
        });
        removeBtn.addEventListener('click',()=>{
            container.style.display='none';
        })
        container.appendChild(projectDesc);
        container.appendChild(websiteLink);
        container.classList.add('single-project-container');
        projectSectionContainer.appendChild(container);
        scrollTo(0,2176.5);
        })
    })
}
function buttonScroll(){
    let scrollBtn = document.getElementById('scroll');
    scrollBtn.addEventListener('click',()=>{
        scrollTo(0,800);
    })
}
function showTopBtnScroll(){
    let TopBtnScroll = document.createElement('button');
    onscroll = function(){
        if(scrollY >= 2490.5){
            TopBtnScroll.style.display = 'block';
            TopBtnScroll.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
            document.body.appendChild(TopBtnScroll);
            TopBtnScroll.classList.add('TopBtnScroll');
        }
        else{
            TopBtnScroll.style.display = 'none';
        }
    }
    TopBtnScroll.addEventListener('click',()=>{
        scrollTo(0,0);
    })
}
function sendEmailInfo(){
    let formField = document.getElementById('formField');
    let userEmail = document.getElementById('userEmail');
    let userName = document.getElementById('userName');
    let subjectField = document.getElementById('subjectField');
    let messageField = document.getElementById('messageField');
    let sendBtn = document.getElementById('sendBtn');
    sendBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        let subjectValue = encodeURIComponent(subjectField.value);
        let messageFieldValue = encodeURIComponent(messageField.value);
        let userNameValue = encodeURIComponent(userName.value);
        let userEmailValue = encodeURIComponent(userEmail.value);
        if(userEmail.value === '' || userName.value === '' || subjectField.value === '' || messageField.value ===''){
            alert('Please make sure you enter all the information below to make it simple for us to contact you.Thanks');
        }
        else{
            location.href = `mailto:adaml45pde@gmail.com?subject=${subjectValue}&body= Hello Mr Adam. My name is ${userNameValue}. ${messageFieldValue}. Here is my email to contact me:${userEmailValue}.Thanks`;
            userEmail.value = '';
            userName.value = '';
            subjectField.value = '';
            messageField.value = '';
        }
    })


}
function showMenu(){
    let menuBtn = document.getElementById('menuBtn');
    let menuMobile = document.getElementById('menu-mobile');
    menuBtn.addEventListener('click',()=>{
        menuMobile.classList.toggle('showBtn');
    })
}
showMenu();
sendEmailInfo()
renderProjectDetails();
buttonScroll();
showTopBtnScroll()