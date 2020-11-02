let score=0;
let gameoverstopscore=false;
 gameaudio=new Audio("music/music.mp3");
 gameoveraudio=new Audio("music/gameover.wav");

 setTimeout(()=>{
    gameaudio.play();
 },1200);

//Dinomotion
function dinomotion (e){
    // console.log(e.keyCode);
    if(e.keyCode == 38){
        dino=document.querySelector(".dino");
        dino.classList.add('animatie-dinoup');
        setTimeout(()=>{
            dino.classList.remove('animatie-dinoup')},800);
    }
    else if(e.keyCode == 39){
        dino=document.querySelector(".dino");
        dx=parseFloat(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dx=dx+250+"px";
        dino.style.left=dx;
    }
    
    else if(e.keyCode == 37){
        dino=document.querySelector(".dino");
        dx=parseFloat(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dx=dx-250+"px";
        dino.style.left=dx;
    }
}

document.addEventListener('keydown',dinomotion);

// Collision check
setInterval(()=>{
    dino=document.querySelector(".dino");
    obstacle=document.querySelector('.dragon');
    dinox=parseFloat(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dinoy=parseFloat(window.getComputedStyle(dino,null).getPropertyValue('top'));

    obstaclex=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    obstacley=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetx=Math.abs(dinox-obstaclex);
    offsety=Math.abs(dinoy-obstacley);
    // console.log(offsetx,offsety)
    if(offsetx <190 && offsety<110){
        setTimeout(()=>{
            gameoveraudio.play();
        },10);
        obstacle.classList.remove('animation-obstacle');
        dino.classList.add('dinogameover');
        document.querySelector('.gameovercontainer').style.zIndex=2;
        document.querySelector(".gameover").innerHTML=`GameOver<br> YOUR SCORE: ${score}`;
        document.removeEventListener("keydown",dinomotion);
        gameoverstopscore=true;
    }
    else if(gameoverstopscore == false){
        if(offsetx < 250 && offsety < 250){
            score+=1;
        }
        

        updatescore(score);
    }

},300);


// Score Update
function updatescore(score){
    document.querySelector('.scoreboard').innerHTML=`YOUR SCORE : ${score}`;
}

// speed increase
// function speedincrease(){
//     if(gameoverstopscore == false){
//         let obstacleanimation=document.querySelector('.animation-obstacle');
//         obstacle=document.querySelector('.dragon');

//         obstaclex=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
//         if(score>= 7 && score <=14 && obstaclex <0){
//             obstacleanimation.style.animationDuration ="3.6s";
//             console.log(parseFloat(window.getComputedStyle(obstacleanimation,null).getPropertyValue('animation-duration')));
//         }
//         if(score>= 15 && obstaclex <0){
//             obstacleanimation.style.animationDuration ="3.3s";
//             console.log(parseFloat(window.getComputedStyle(obstacleanimation,null).getPropertyValue('animation-duration')));
//         }
//     }
// }
// setInterval(speedincrease,500);