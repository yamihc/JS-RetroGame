let dimS = 8 ;

let rangeLarg = 101 ;
let rangeHaut = 51

let hauteur = () => {return rangeHaut * dimS} ;
let largeur = () => {return rangeLarg * dimS} ;

let canvas =document.getElementById("area");
let ctx = canvas.getContext("2d");

let xSnake = 51 ;
let ySnake = 31 ;
let snakeBodyX = [];
let snakeBodyY = [];
let taille = 5;
let dirX = 0;
let dirY = 0;

let nextMove = [];

let score = 0;
let chrono = 0;
const Pscore = document.getElementById("Pscore");
const Plongueur = document.getElementById("Plongueur");
const Pchrono = document.getElementById("Pchrono");

let freq = 50 ;

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
        printBloc(this.X,this.Y,"rgb(0,200,0)")
    },
    mange : function () {
        if (xSnake == this.X && ySnake == this.Y ) {
            this.newCoord();
            return true;
        }
    }
}

canvas.height = 600;
canvas.width = 800;


function responsiveMap(larg) {
    const a = 12/1400;
    const b = 4 - a * 400;
    dimS = Math.round(a*larg+b);
    canvas.height = hauteur();
    canvas.width = largeur();

    ctx.fillStyle = "rgb(250,0,0)";
    ctx.fillRect(0,0,largeur(),hauteur());

    ctx.fillStyle = "rgb(240,240,240)";
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

function initGame() {
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

function gameStop() {
    if (testList(xSnake, ySnake, snakeBodyX, snakeBodyY ) || testBord()) {
        clearInterval(moteur);
        const restart  = confirm("Perdu !! Démarrer une autre partie ?");
        if (restart) { initGame() }
     }
}


function printSnake() {

    let largWindow = window.innerWidth;

    responsiveMap(largWindow);

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

    printBloc(xSnake,ySnake,"rgb(0,0,255)")
   
    for (let i = 0 ; i < snakeBodyX.length ; i++) {
        printBloc(snakeBodyX[i], snakeBodyY[i], "rgb(0,0,255)")
    }

}


let moteur;

(function(){
    initGame();    
})();


window.addEventListener("keydown", (e)=>{
    
    switch (e.key) {
        case "ArrowUp" :
            nextMove.push("up");
           break;
        case "ArrowDown" :
            nextMove.push("down");
            break;
        case "ArrowLeft" :
            nextMove.push("left");
            break;
        case "ArrowRight" :
            nextMove.push("right");
            break;
        default:
            nextMove.push("stop");
            start = false;
    }

});
