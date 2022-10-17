
//monh1.addEventListener(`mouseenter`,function(){
   // monh1.style.backgroundColor = `yellow`; 
//});

//monh1.addEventListener(`mouseout`,function(){
   // monh1.style.backgroundColor = ``; 
//});

function giveColourBackground(){
let monh1 = document.querySelector(`h1`);
let isClicked = false;
monh1.addEventListener(`click`,function(){
    if (isClicked == false){
    monh1.style.backgroundColor = `yellow`;
    isClicked = true;
    } else if (isClicked == true){
        monh1.style.backgroundColor = ``;
        isClicked = false;
    }
});
}
giveColourBackground();

function showHideParagraph(){
    let isParaDisplayed = false;
    const linktoClick = document.querySelector(`.see-more`);
    linktoClick.addEventListener(`click`,function(event){
        event.preventDefault();
        if (isParaDisplayed == false){
        document.querySelector(`.show-hide-para`).style.display = `block`;
        isParaDisplayed = true;
        } else {
            document.querySelector(`.show-hide-para`).style.display = `none`;
            isParaDisplayed = false;
        }
    });
}
showHideParagraph();

function showHideParagraph2(){
    let isParaDisplayed2 = false;
    const linktoClick2 = document.querySelector(`.see-more2`);
    linktoClick2.addEventListener(`click`, function(event){
        event.preventDefault();
        document.querySelector(`.show-hide-para2`).classList.toggle(`open`);
    });
}
    showHideParagraph2();