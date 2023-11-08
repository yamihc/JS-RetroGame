const Pscore = document.getElementById("Pscore");
const Plongueur = document.getElementById("Plongueur");
const Pchrono = document.getElementById("Pchrono");

const balHallOfFame = document.getElementById('hall-of-fame');
const balMeilleursScores = document.getElementById('meilleurs-scores');
const btnCloseModal = document.getElementById('close-modal');

let dimS ;

let rangeLarg = 101;
let rangeHaut = 51;

let hauteur = () => {return rangeHaut * dimS} ;
let largeur = () => {return rangeLarg * dimS} ;

let canvas = document.getElementById("area");
let ctx = canvas.getContext("2d");

canvas.height = hauteur();
canvas.width = largeur();

let xSnake = 51 ;
let ySnake = 31 ;
let snakeBodyX = [];
let snakeBodyY = [];
let taille = 5;
let dirX = 0;
let dirY = 0;
let moteur;

let freq = 50 ;

let nextMove = [];

let score = 0;
let chrono = 0;

let colorBord = "#d21919", colorSnake = "#67c4fe", colorCible = "#ff7b00", colorFond = "#1d6f06";

let snakeVersion = localStorage.getItem('Yamihc_Snake-Version');
let hallOfFame = localStorage.getItem('Yamihc_Snake-Score');
let snakeConfig = localStorage.getItem('Yamihc_Snake-Setting');

if (!hallOfFame) {
    hallOfFame = [
        {pseudo: "God of Snake", score: 40, taille: 5000, temps: 1000000},
        {pseudo: "Legend", score: 35, taille: 2000, temps: 600000},
        {pseudo: "Hero", score: 30, taille: 900, temps: 500000},
        {pseudo: "Master", score: 25, taille: 350, temps: 400000},
        {pseudo: "Expert", score: 20, taille: 150, temps: 300000},
        {pseudo: "Veteran", score: 15, taille: 60, temps: 200000},
        {pseudo: "Advenced", score: 10, taille: 20, temps: 100000},
        {pseudo: "Newbie", score: 5, taille: 10, temps: 50000}
    ] ;
   
} else {
    hallOfFame = JSON.parse(hallOfFame);
}

if (snakeConfig) {
    snakeConfig = JSON.parse(snakeConfig);

    rangeHaut = snakeConfig.rgHaut;
    rangeLarg = snakeConfig.rgLarg;
    freq = snakeConfig.vitesse;
    colorBord = snakeConfig.colrBord;
    colorSnake = snakeConfig.colrSnake;
    colorCible = snakeConfig.colrCible;
    colorFond = snakeConfig.colrFond;
}

if (!snakeVersion) {
    document.getElementById('consignes').showModal();
    document.getElementById('btn-close-consignes').onclick = () => { document.getElementById('consignes').close() }
    localStorage.setItem('Yamihc_Snake-Version','1.1');
} else {
    snakeVersion = JSON.parse(snakeVersion);
    if (snakeVersion != '1.1') {
        document.getElementById('consignes').showModal();
        document.getElementById('btn-close-consignes').onclick = () => { document.getElementById('consignes').close() }
        localStorage.setItem('Yamihc_Snake-Version','1.1');
    }
}


function printBloc(iX, iY, color) {
    ctx.fillStyle = color;
    ctx.fillRect(iX * dimS, iY * dimS, dimS, dimS);
}



let cible = {
    X : 0 ,
    Y : 0 ,
    newCoord : function () {
        do {
        this.X = Math.floor( Math.random() * ( rangeLarg - 2 ) ) + 1 ;
        this.Y = Math.floor( Math.random() * ( rangeHaut - 2 ) ) + 1 ;
        } while (testList(this.X,this.Y,snakeBodyX,snakeBodyY)) 
    },
    repaint : function () {
        printBloc(this.X,this.Y,colorCible)
    },
    mange : function () {
        if (xSnake == this.X && ySnake == this.Y ) {
            this.newCoord();
            return true;
        }
    }
}



function paintMap() {
    
    ctx.fillStyle = colorBord;
    ctx.fillRect(0,0,largeur(),hauteur());

    ctx.fillStyle = colorFond;
    ctx.fillRect(dimS,dimS, (rangeLarg - 2) * dimS, (rangeHaut - 2 )* dimS);
}


function timer() {
    chrono += freq;
}


function testBord() {
    if (xSnake < 1 || xSnake > rangeLarg-2 || ySnake < 1 || ySnake > rangeHaut-2) {
        return true ;
    }
    return false ;
}

function testList(x, y , listX, listY) {

    let ret = false;

    for ( let i = 1 ; i < listX.length ; i++) {

        if (listX[i] == x && listY[i] == y ) {
            return true ;
        }
    }
    return ret ;
}


function moveSnake(move) {
    switch(move) {
        case "up" : 
            ySnake-- ;
            break ;
        case "down" :
            ySnake++ ;
            break ;
        case "left" :
            xSnake-- ;
            break ;
        case "right" :
            xSnake++ ;
            break;
        default :
            break ;
    }
}


function initDims() {

    const a = 12/1400;
    const b = 4 - a * 400;
    dimS = Math.round(a*window.innerWidth+b);
    while ((window.innerHeight - 90) < (rangeHaut * dimS)) {
        rangeHaut--;
    } 
    while (window.innerWidth < (rangeLarg * dimS)) {
        rangeLarg--;
    } 
    canvas.height = hauteur();
    canvas.width = largeur();
};

window.addEventListener('resize', () => {
    rangeLarg = 101;
    rangeHaut = 51;
    initDims();
})


function initGame() {
    clearInterval(moteur);
    initDims();
    ctx.fillStyle = "rgb(250,0,0)";
    ctx.fillRect(0,0,largeur(),hauteur());
    cible.newCoord();
    
    xSnake = Math.round(rangeLarg/2) ;
    ySnake = Math.round(rangeHaut/2);
    snakeBodyX = [];
    snakeBodyY = [];
    taille = 5;
    dirX = 0;
    dirY = 0;

    nextMove = [];

    score = 0;
    chrono = 0;

    moteur = setInterval(printSnake,freq);
}

class Hero {
    constructor(pse,sco,tai,tem) {
        this.pseudo = pse ;
        this.score = sco ;
        this.taille = tai ;
        this.temps = tem ;
    }
}


function newHero(order) {
    const newPPseudo = document.createElement('input');
    newPPseudo.value = "pseudo" ;
    newPPseudo.addEventListener("focusout", (ev) => {
    let nbHero = hallOfFame.unshift(new Hero(ev.target.value,score,snakeBodyX.length,chrono,order) );
    if ( nbHero > 1 ) {
        for (i = 1 ; i < hallOfFame.length ; i++ ) { 
            hallOfFame[i].setPosition(order) 
        }
    }
    if (nbHero > 10) {
        hallOfFame = hallOfFame.filter( hero => hero.order < 11) ;
        makeHallofFame(hallOfFame) ;
    }

    })

    const newPScore = document.createElement('p');
    newPScore.innerText = score ;

    const newPTaille = document.createElement('p');
    newPTaille.innerText = snakeBodyX.length ;
    
    const newPTmps = document.createElement('p');
    newPTmps.innerText = Math.floor(chrono/1000) ;
    
    const newLi = document.createElement('div');
    newLi.appendChild(newPPseudo);
    newLi.appendChild(newPScore);
    newLi.appendChild(newPTaille);
    newLi.appendChild(newPTmps);
    newLi.style.order = order ;

    
    balHallOfFame.appendChild(newLi);
}


function testScore(sco,tai,tmp) {
    
    if (hallOfFame == [] ) {
        return 0 ;
    } else { 

        for (let i = 0 ; i < hallOfFame.length ; i++) {
            if (hallOfFame[i].score <= sco ) {
                if (hallOfFame[i].score == sco ) {
                    if (hallOfFame[i].taille < tai) {
                        return i ;
                    } else {
                        if (hallOfFame[i].taille == tai ) {
                            if (hallOfFame[i].temps > tmp) {
                                return i;
                            }
                        }
                    }
                } else {
                    return i ;
                }
            }
        }
        
        return hallOfFame.length ;
    }
}

function saveHallOfFame() {
    localStorage.setItem('Yamihc_Snake-Score', JSON.stringify(hallOfFame));
}

function saveSetting() {
    localStorage.setItem('Yamihc_Snake-Setting', JSON.stringify({rgLarg: rangeLarg,rgHaut: rangeHaut, vitesse: freq, colrBord: colorBord,colrSnake: colorSnake, colrCible: colorCible, colrFond: colorFond}));
}



function nouvoHero(rg,sc,lg,ch) {
    makeHallofFame(hallOfFame);
    balMeilleursScores.innerHTML += `<tr>
    <th><input type="text" id="nouvo-hero" name="nouvo-hero" placeholder="ton pseudo"></th>
    <th>${sc}</th>
    <th>${lg}</th>
    <th>${Math.floor(ch/1000)}</th>
    </tr>`
    document.getElementById("nouvo-hero").onkeyup = (e) => {
        if (e.key == 'Enter') {
            hallOfFame.splice(rg,0,new Hero(document.getElementById("nouvo-hero").value,sc,lg,ch));
            if ( hallOfFame.length > 12 ) {hallOfFame.pop()}
            saveHallOfFame();
            makeHallofFame(hallOfFame);
        }
    }
    
    btnCloseModal.onclick = () => {
        hallOfFame.splice(rg,0,new Hero(document.getElementById("nouvo-hero").value,sc,lg,ch));
        if ( hallOfFame.length > 12 ) {hallOfFame.pop()}
        saveHallOfFame();
        makeHallofFame(hallOfFame);
    }

    balHallOfFame.show();
}



function gameStop() {
    if (testList(xSnake, ySnake, snakeBodyX, snakeBodyY ) || testBord()) {
        clearInterval(moteur);

        canvas.style.cursor = 'auto';
        
        if (score > 0) {
            let rang = testScore(score,snakeBodyX.length, chrono); 
    
            if (rang < 12) {
                nouvoHero(rang, score, snakeBodyX.length, chrono);
            } else {
                makeHallofFame(hallOfFame) ;
                balHallOfFame.showModal();
            }
        } else {
            makeHallofFame(hallOfFame) ;
            balHallOfFame.showModal();
        }

     }
}


function printSnake() {

    paintMap();

    Pscore.innerHTML = `Score : <b>${score}</b>`
    Plongueur.innerHTML = `Taille du serpent : <b>${snakeBodyX.length}</b>`;
    Pchrono.innerHTML = `Temps de jeu : <b>${Math.floor(chrono/1000)}</b>s` ;
 
    cible.repaint();
    
    if (nextMove.length>0) {

        timer();

        snakeBodyX.push(xSnake);
        snakeBodyY.push(ySnake);

        if (snakeBodyX.length > taille) {
            snakeBodyX.shift();
            snakeBodyY.shift();    
        }   

        if (nextMove[0] == "stop" ) { 
            nextMove.shift(); 
        } else {
            moveSnake(nextMove[0]);
            if ( nextMove.length > 1 ) {
                nextMove.shift()
            }
        }      
          
        if (cible.mange()) {
            taille += Math.floor(taille/5);
            score++;
        }

        gameStop();    
    }

    printBloc(xSnake,ySnake,colorSnake)
   
    for (let i = 0 ; i < snakeBodyX.length ; i++) {
        printBloc(snakeBodyX[i], snakeBodyY[i], colorSnake)
    }

}


window.addEventListener("keydown", (e)=>{

    canvas.style.cursor = 'none';
    
    switch (e.key) {
        case "ArrowUp" :
            if (nextMove[0] != "down") { nextMove.push("up") }
           break;
        case "ArrowDown" :
            if (nextMove[0] != "up") { nextMove.push("down") }
            break;
        case "ArrowLeft" :
            if (nextMove[0] != "right") { nextMove.push("left") }
            break;
        case "ArrowRight" :
            if (nextMove[0] != "left") {nextMove.push("right") }
            break;
        default:
            canvas.style.cursor = 'auto';
            nextMove.push("stop");
            start = false;
    }

});

function clicRestart() {
    initGame();
}

function paraUpdate(para) {

    switch (para) {
        case "dim" :
            const affichDims = document.querySelectorAll(".dimension>div>span:nth-of-type(2)") ;
            affichDims[0].innerHTML = rangeLarg ;
            affichDims[1].innerHTML = rangeHaut ;
            break;
        case "vit" :
            const affichVit = document.querySelector(".vitesse>div>span") ;
            affichVit.innerHTML = `${1/freq}`;
            break;
        default :
        alert(`${para} non connu`);
    }

}


document.getElementById('btn-quit-setting').onclick = () => {
    saveSetting();
    document.getElementById('modale-setting').close()
}

document.getElementById('btn-reset-setting').onclick = () => {
    rangeLarg = 101 ;
    rangeHaut = 51 ;
    freq = 50 ;
    
    colorBord = "#d21919";
    colorSnake = "#67c4fe";
    colorCible = "#ff7b00";
    colorFond = "#1d6f06";

    updSetting();
    initGame();
    
}


function updSetting() {
    document.getElementById('setting-canvas-largeur').innerText = `largeur : ${rangeLarg}`;
    document.getElementById('setting-canvas-hauteur').innerText = `hauteur : ${rangeHaut}`;

    let vit = 3;

    switch (freq) {
        case 30 : 
            vit = 6 ;
            break;
        case 40 :
            vit = 5 ;
            break;
        case 50 :
            vit = 4 ;
            break;
        case 60 :
            vit = 3 ;
            break;
        case 70 :
            vit = 2 ;
            break;
        case 80 :
            vit = 1 ;
            break;
        default :
            break;
    }

    document.getElementById('setting-vitesse').value = vit ;

    const colors = document.querySelectorAll('.couleur-set');
    
    colors[0].value = colorBord;
    colors[1].value = colorSnake;
    colors[2].value = colorCible;
    colors[3].value = colorFond;

    colors[0].onchange = () => { colorBord = colors[0].value}
    colors[1].onchange = () => { colorSnake = colors[1].value}
    colors[2].onchange = () => { colorCible = colors[2].value}
    colors[3].onchange = () => { colorFond = colors[3].value}

}

document.getElementById('setting-vitesse').onchange = (e) => {
    switch (e.target.value) {
        case "1" : 
            freq = 80 ;
            break;
        case "2" :
            freq = 70 ;
            break;
        case "3" :
            freq = 60 ;
            break;
        case "4" :
            freq = 50 ;
            break;
        case "5" :
            freq = 40 ;
            break;
        case "6" :
            freq = 30 ;
            break;
        default :
        console.log("problème");
            break;
    }
}

function chDim(dim,inc) { 

    if (dim == "rangeHaut") {rangeHaut += inc }
    if (dim == "rangeLarg") {rangeLarg += inc }
        
    updSetting();
    initGame();
}

function modaleSetup() {

    const modaleSeting = document.getElementById('modale-setting')

    if (modaleSeting.open) {
        modaleSeting.close()
    } else{
       updSetting()
       modaleSeting.show();
    }

}

function trololo() {
    const now = new Date();
    const start = new Date(now);
    const end = new Date(now);
  
    start.setHours(10, 30, 0, 0); 
    end.setHours(15, 30, 0, 0);  

    return now >= start && now <= end;
}


function mkHeroTable(hero) {
    
    const newPPseudo = document.createElement('td');
    newPPseudo.innerText = trololo() && hero.pseudo.toLowerCase() == 'jekyll' ? 'Loïc' : hero.pseudo ;
    
    const newPScore = document.createElement('td');
    newPScore.innerText = hero.score ;
    
    const newPTaille = document.createElement('td');
    newPTaille.innerText = hero.taille ;
    
    const newPTmps = document.createElement('td');
    newPTmps.innerText = Math.floor(hero.temps/1000) ;
    
    const newDiv = document.createElement('tr');

    newDiv.appendChild(newPPseudo);
    newDiv.appendChild(newPScore);
    newDiv.appendChild(newPTaille);
    newDiv.appendChild(newPTmps);
    newDiv.style.order = hero.order ;

    return newDiv ;
}


function makeHallofFame(hallOfFame) {
    balMeilleursScores.innerHTML = '';
    hallOfFame.forEach( hero => { balMeilleursScores.appendChild(mkHeroTable(hero))});
    btnCloseModal.onclick = () => { 
        balHallOfFame.close();
    }
    btnCloseModal.onkeydown = (e) => {
        if (e.key == 'Enter') {
            balHallOfFame.close();
        }
    }
    btnCloseModal.focus();
};


function toogleHallOfFame() {

    if (balHallOfFame.open) {
        balHallOfFame.close()
    } else{
        makeHallofFame(hallOfFame) ;
        balHallOfFame.show();
    }
}

function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      document.getElementById('btn-full-scr').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-fullscreen-exit" viewBox="0 0 16 16">
      <path d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5zM0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zm10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4z"/>
    </svg>` ;
      
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        document.getElementById('btn-full-scr').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-fullscreen" viewBox="0 0 16 16">
        <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z"/>
      </svg>` ;
      }
    }
}

initGame();