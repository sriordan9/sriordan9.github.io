// function aboutListen() {
//     document.getElementById("about-btn").addEventListener("click", aboutElements);
// };

function aboutElements() {
    var projectsArticle = document.getElementsByClassName('article-format')[0];
    // var divElem = document.getElementsByClassName('text-position')[0];

    var articleElem = document.createElement('article');
    articleElem.className = 'article-format';
    // console.log(articleElem);
    
    var content = `<h1>About Me</h1>
        <p>Hey there, I'm Sean. I'm currently learning the fundamentals of web development (and programming in general).
            I began learning about HTML and CSS in April of 2017. I became more interested in web development as I began
            creating a sample website. I decided I would like to make a career change and enter the programming field as a 
            web developer. I am now learning how to include functionality in my sites through the use of Javascript.  
        </p>
        <img src="../styles/images/falls-park-profile.jpeg" alt="Photo of me at a park" height="400px">
        <h1>Hobbies</h1>
        <p>
        My primary way to wind down is Latin dancing. I have been dancing salsa and bachata four years now, and also currently 
        teach. In addition, I enjoy working on vehicles and would eventually like to have a project car.
        </p>
        <h1>Contact</h1>
        <p>If you would like to contact me, my email address is riordan.sean9@gmail.com
        </p>`;
    articleElem.innerHTML = content;

    if(projectsArticle) {
        console.log('projects to about');
        // projectsArticle.parentNode.replaceChild(articleElem, projectsArticle);
    } else {
        console.log('home to about');
        // divElem.parentNode.replaceChild(articleElem, divElem);
    };
    
    
    //testing
    // console.log(content);
};

function projectsElements() {
    var divElem = document.getElementsByClassName('text-position')[0];

    var articleElem = document.createElement('article');
    articleElem.className = 'article-format';

    var content = `<h1>Projects</h1>`;
    articleElem.innerHTML = content;

    divElem.parentNode.replaceChild(articleElem, divElem);
}

function homeElements() {
    var articleElem = document.getElementsByClassName('article-format')[0];

    var divElem = document.createElement('div');
    divElem.className = 'text-position';

    var content = `<h1>Sean Riordan</h1><h2>Front End Developer</h2>`;
    divElem.innerHTML = content;

    articleElem.parentNode.replaceChild(divElem, articleElem);
}

function listener() {
    var getTag = document.getElementsByTagName('li');
    var navArray = [getTag[0], getTag[1], getTag[2]];
    navArray[0].addEventListener('click', homeElements);
    navArray[1].addEventListener('click', projectsElements);
    navArray[2].addEventListener('click', aboutElements);
    
    // if(navArray[0]){
    //     navArray[0].addEventListener('click', homeElements);
    // } else if(navArray[1]) {
    //     navArray[1].addEventListener('click', projectsElements);
    // } else {
    //     navArray[2].addEventListener('click', aboutElements);
    // }
    console.log('listening');

};

listener();

// projectsListen();

// aboutListen();

//NEED TO REFORMAT NAV "LINKS" AT TOP SINCE THEY ARE NO LONGER REFERENCED BY THE CSS SINCE THEY ARE NOT LINKS
// CAN THE SCRIPT BE LOADED AT TOP RATHER THAN WITHIN THE HTML DOC?