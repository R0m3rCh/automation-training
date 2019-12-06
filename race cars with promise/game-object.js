function gameObject(obj) {
    var gameObj = {
        x: obj.x,
        y: obj.y,
        width: obj.width,
        height: obj.height,
        speedX: obj.speedX,
        speedY: obj.speedY,
        tag: obj.tag,
        name: obj.name,
        render: function() {
            ctx = gameScene.context;
            ctx.fillStyle = obj.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        },
        collidedWith: function(gameObjToBeCollided){
            // Implement Promise
            return new Promise((resolve, reject) => {
                var interval = setInterval(function () {
                    if(gameObj.x > gameObjToBeCollided.x){
                        clearInterval(interval)
                        resolve(gameObj)
                    }
                }, 10);
            })
        }
    }
    return gameObj;
}