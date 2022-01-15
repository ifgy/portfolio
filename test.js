let classes=["rocks","herbs"];
let enemy = []; //x, class
let enemyDom = document.querySelector("#enemies");
let playerDom = document.querySelector("#player");


createEnemy=()=>{
    let typeClass = Math.floor(Math.random()*2);
    addEnemy(typeClass);
    console.log(typeClass)
}
addEnemy=(c)=>{
    enemy.push({
        type : classes[c],
        x : 100
    })
}
moveEnemy=()=>{
    enemyDom.innerHTML='';
    let distance=0;
    enemy.forEach(e=>{
        //move
        e.x-=1;
        e.x<=0?
            enemy.splice(enemy.indexOf(e),1)
            :enemyDom.innerHTML+=`<span id='enemy' class='`+e.type+`' style='left:`+e.x+`%'></span>`;
        //jump
        distance = e.x
        -2<(e.x-15)<2?
            playerDom.style.bottom=distance*2+"px"
            :playerDom.style.bottom="5px"
        console.log(e.x-15)
    })
}


setInterval(createEnemy,3000)
setInterval(moveEnemy,50)