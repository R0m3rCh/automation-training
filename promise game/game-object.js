function gameObject(obj) {

  var gameObj = {
    x: obj.x,
    y: obj.y,
    width: obj.width,
    height: obj.height,
    speedX: obj.speedX,
    speedY: obj.speedY,
    tag: obj.tag,

    render: function() {
      ctx = gameScene.context;
      ctx.fillStyle = obj.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    },

    promiseCollidedWith: function(gameObjToBeCollided){
      return new Promise((response) => {
        if ((gameObj.x + gameObj.width) > gameObjToBeCollided.x &&
        gameObj.x < gameObjToBeCollided.x + gameObjToBeCollided.width &&
        (gameObj.y + gameObj.height) > gameObjToBeCollided.y &&
        gameObj.y < gameObjToBeCollided.y + gameObjToBeCollided.height){
            response(gameObjToBeCollided);
        }
      })
    }
  }
  return gameObj;
}
