score = 0;
cross = true;


document.onkeydown = function(e) {
    console.log("key code is", e.keyCode);
    if (e.keyCode == 38) {
        var dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            console.log("yes");
            dino.classList.remove('animateDino');
        }, 700);
    }

    if(e.keyCode == 39){
        dino = document.querySelector('.dino');
        dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dx + 112 + "px";
    }
    if(e.keyCode == 37){
        dino = document.querySelector('.dino');
        dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dx - 112) + "px";
    }

};

setInterval(() => {
    dino = document.querySelector('.dino');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy= parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);
    // console.log(offsetX, offsetY);
    if(offsetX< 73 && offsetY< 53){
        gameover.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni')

    }
    else if(offsetX< 145 && cross){
        score+=1;
        updatescore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur +'s';
            console.log('new animation duration:', newDur);
            
        }, 500);
      

    }
    
}, 100);


function updatescore(score){
    scorecont.innerHTML = "YOUR SCORE: " + score
}
