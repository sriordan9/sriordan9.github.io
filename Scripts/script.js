function aboutListen() {
    document.getElementById("about-btn").addEventListener("click", aboutElements);
};

// var newElements = function() {
//     if(id="about-btn"){


//     }
// };

function aboutElements() {

    var divElem = document.getElementsByClassName('text-position')[0];
    var articleElem = document.createElement("article");
    articleElem.className = "article-format";
    console.log(articleElem);
    
    var h_tml = `<h1>About Me</h1>
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
    articleElem.innerHTML = h_tml;
    divElem.parentNode.replaceChild(articleElem, divElem);
    
    //testing
    console.log(h_tml);
};

aboutListen();