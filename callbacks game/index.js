function cbTrigger() {
    console.log("Creating plane...")
    createUnit("plane", 3000, (res) => {
        console.log(res)
    })
}

function createUnit(unit, time, callback){
    setTimeout(function(){
        callback(`${unit} created`);
        // error(true);
    }, time)
}

console.log("next task")

cbTrigger()