let compteur = 0;
function affichedansXSecondes(){
        let time1 = setTimeout (function (){
            console.log(`Hello ` + compteur);
            let newDiv = document.createElement(`div`);
            document.querySelector(`body`).append(newDiv);
            if (compteur == 9) {
            clearTimeout(time1);
            } else {
            compteur++;
            affichedansXSecondes()
            }
        },1000);
}
// affichedansXSecondes();

let compteur2 = 0
function afficheSetInterval(){
    let time2 = setInterval(function () {
        if (compteur2 == 10) {
        clearInterval(time2);
        } else {
            compteur2++;
        }
        let newDiv = document.createElement(`div`);
        document.querySelector(`body`).append(newDiv);
    }, 1000);
}
afficheSetInterval();