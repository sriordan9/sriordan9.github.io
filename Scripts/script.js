// Uses getElement to place links at top of page into an array and adds event listeners. 
// Also assigns the correct elements to the corresponding navbar link

function listener() {

    var getTag, navArray, showHome, showProj, showAbout;
    
    getTag = document.getElementsByTagName('li');
    navArray = [getTag[0], getTag[1], getTag[2]];
    showHome = document.getElementsByTagName('article')[0];
    showProj = document.getElementsByTagName('article')[1];
    showAbout = document.getElementsByTagName('article')[2];
    
    console.log(navArray);
    
    navArray[0].addEventListener('click', displayContent.bind(this, showHome, showProj, showAbout));
    navArray[1].addEventListener('click', displayContent.bind(this, showProj, showHome, showAbout));
    navArray[2].addEventListener('click', displayContent.bind(this, showAbout, showHome, showProj));

};

// Displays content of clicked link, and ensures content of other pages does not display

function displayContent(showContent, hideContentOne, hideContentTwo) {
    console.log("function accessed");

    if(showContent.classList.contains('hide-content')) {
        showContent.classList.remove('hide-content');
        console.log('showContent ifStmt accessed');
    }
    if(!hideContentOne.classList.contains('hide-content')) {
        hideContentOne.classList.toggle('hide-content');
        console.log('hideContentOne ifStmt accessed');
    }
    if(!hideContentTwo.classList.contains('hide-content')) {
        hideContentTwo.classList.toggle('hide-content');
        console.log('hideContentTwo ifStmt accessed');
    }
};

window.onload = listener;