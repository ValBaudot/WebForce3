const jourDeLaSemaine = [
    `Lundi`,
    `Mardi`,
    `Mercredi`,
    `Jeudi`,
    `Vendredi`,
    `Samedi`,
    `Dimanche`,
];
let listeHTMLjour = `<ul>`;
for(let i = 0; i <jourDeLaSemaine.length; i++){
    listeHTMLjour +=`<li>`+jourDeLaSemaine[i]+'</i>';
}
listeHTMLjour +=`</ul>`;
document.body.innerHTML += listeHTMLjour;



let listeHTMLwhile = `<ul>`;
let k = 0
listeHTMLwhile = (k < jourDeLaSemaine.length);{
    listeHTMLwhile = listeHTMLwhile + `<li>` + jourDeLaSemaine[k] + `</li>`;
    k++
    }

listeHTMLwhile +=`</ul>`;
document.body.innerHTML += listeHTMLwhile;



const moisDeLannee = [
    `Janvier`,
    `Février`,
    `Mars`,
    `Avril`,
    `Mai`,
    `Juin`,
    `Juillet`,
    `Août`,
    `Septembre`,
    `Octobre`,
    `Novembre`,
    `Décembre`,
];
let listeHTMLmois = `<ul>`;
for(i = 0; i < moisDeLannee.length; i++){
    listeHTMLmois +=`<li>`+moisDeLannee[i]+`</i>`;
}
listeHTMLmois +=`</ul>`;
document.body.innerHTML += listeHTMLmois;


let listeHTMLmoiswhile = `<ul>`;
let j = 0;
    while (j < listeHTMLmois.length) {
    listeHTMLmoiswhile += `<li>${moisDeLannee[j]}</li>`;
    j++;
}
listeHTMLmoiswhile +=`</ul>`;
document.body.innerHTML += listeHTMLmoiswhile;


let listmoisforEach = `<ul>`;
moisDeLannee.forEach(function (moisEnCours) {
    listmoisforEach += `<li>` + moisEnCours + `</li>`;
});
listmoisforEach += `</ul>`;
document.body.innerHTML += listmoisforEach;


const fruits = [`banane`,`orange`,`fraise`,`cerise`,`pomme`];
let listeFruits = `<ul>`;
fruits.forEach(function (fruitEnCours) {
    listeFruits += `<li>` + fruitEnCours + `</li>`;
});
listeFruits += `</ul>`
document.body.innerHTML += listeFruits;