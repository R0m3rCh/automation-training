var gameScene;
var projectile;
var enemy;
var wallTop;
var deathSound;
var gameObjects;

/* Start of the game. */
function start(){
    deathSound = new Audio("roblox-death-sound-effect.mp3");
    deathSound.playbackRate = 0.2; //lol
    deathSound.currentTime = 0.3; 
    gameScene = {
        canvas: document.getElementById("game-scene"),
        refresh: function() {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            for (var i = 0; i < gameObjects.length ; i++) {
                gameObjects[i].render();
            }
        },
        stop: function() {
            deathSound.play();
            clearInterval(this.interval);
        }
    }
    /* Walls. */
    finishWall = gameObject(
        {
            x: 580,
            y: 0,
            width: gameScene.canvas.height,
            height: gameScene.canvas.height,
            speedX: 0,
            speedY: 0,
            color: "green",
            tag: "bottom wall"
        }
    );

    car1 = gameObject(
        {
            x: 0,
            y: 80,
            width: 20,
            height: 10,
            speedX: 3,
            speedY: 0,
            color: "blue",
            tag: "car 1 BLUE",
            name: "blueCar"
        }
    );

    car2 = gameObject(
        {
            x: 0,
            y: 120,
            width: 20,
            height: 10,
            speedX: 2.5,
            speedY: 0,
            color: "red",
            tag: "car 2 RED",
            name: "redCar"
        }
    );

    car3 = gameObject(
        {
            x: 0,
            y: 160,
            width: 20,
            height: 10,
            speedX: 2,
            speedY: 0,
            color: "purple",
            tag: "car 3 PURPLE",
            name: "purpleCar"
        }
    );
    
    gameObjects = [car1, car2, car3, finishWall];
    gameScene.context = gameScene.canvas.getContext("2d");
    gameScene.interval = setInterval(update, 10);
    //Implement Promise.race here   
    
    Promise.race([car1.collidedWith(finishWall), car2.collidedWith(finishWall), car3.collidedWith(finishWall)])
        .then((gameObj) => {
            if(scoreObj[gameObj.name] < 2){
                scoreObj[gameObj.name] += 1
            } else {
                console.log("WINNER: " + gameObj.name)
                gameScene.stop()
                scoreObj = restoreScore
            }
            console.log(scoreObj)
        })

    car1Speed = Math.random() * 5
    car2Speed = Math.random() * 5
    car3Speed = Math.random() * 5
}

let car1Speed
let car2Speed
let car3Speed

let scoreObj = {
    blueCar: 0,
    redCar: 0,
    purpleCar: 0
}
let restoreScore = {
    blueCar: 0,
    redCar: 0,
    purpleCar: 0
}

/* Update every 10 miliseconds. You don´t have to touch this, maybe if you want to increase speed randomly  */
function update(){
    car1.x += car1Speed;
    car2.x += car2Speed;
    car3.x += car3Speed;
    gameScene.refresh();
}

document.getElementById("start").addEventListener("click", function(){
    start();
})
