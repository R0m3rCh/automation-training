var gameScene;
var enemy;
var topWall;
var deathSound;
var gameObjects;

/* Start of the game. */
function start(){
  deathSound = new Audio("roblox-death-sound-effect.mp3");
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
  topWall = gameObject(
    {
      x: 0,
      y: 0,
      width: gameScene.canvas.width,
      height: 20,
      speedX: 0,
      speedY: 0,
      color: "green",
      tag: "top wall"
    }
  );
  bottomWall = gameObject(
    {
            x: 0,
            y: gameScene.canvas.height - 20,
            width: gameScene.canvas.width,
            height: 20,
            speedX: 0,
            speedY: 0,
            color: "green",
            tag: "bottom wall"
    }
  );
  /* Enemy. */
  enemy = gameObject(
    {
            x: 300,
            y: 120,
            width: 10,
            height: 30,
            speedX: 0,
            speedY: 1.1,
            color: "red",
            tag: "enemy"
    }
  );
  enemy.up = true
  // bullet
  bullet = gameObject(
    {
            x: 10,
            y: 130,
            width: 10,
            height: 10,
            speedX: 1.1,
            speedY: 0,
            color: "blue",
            tag: "bullet"
    }
  );
  gameObjects = [enemy, topWall, bottomWall, bullet];
  gameScene.context = gameScene.canvas.getContext("2d");
  gameScene.interval = setInterval(update, 10);
}
    

/* Update every 10 miliseconds. */
function update(){
    /* Enemy behaviour */
    if (enemy.up) {
        enemy.y -= enemy.speedY;
    } else {
        enemy.y += enemy.speedY;
    }
    (bullet.x + bullet.width > gameScene.canvas.width) ? bullet.x = 0 : bullet.x += bullet.speedX;
    
    enemy.promiseCollidedWith(topWall).then((obj) => {
        console.log(obj.tag)
        enemy.up = false
    })

    enemy.promiseCollidedWith(bottomWall).then((obj) => {
        console.log(obj.tag)
        enemy.up = true
    })

    enemy.promiseCollidedWith(bullet).then((obj) => {
        console.log(obj.tag)
        gameScene.stop()
    })

    bullet.x += bullet.speedX
    
    gameScene.refresh();
}

function bltFtn() {
    bullet.speedX += 0.5
}

start()
