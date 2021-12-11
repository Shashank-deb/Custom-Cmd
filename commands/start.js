let cp = require("child_process");
const { mainModule } = require("process");
function start(inputArr){
    let command = inputArr[0]; //it will have command                    
    if(inputArr.length != 1){
        let whatStart = inputArr[1];//it will have which application to start
        whichStart(whatStart); 
    }
    else{
        console.log("give the flag also like :-  cli  start chrome");
        return false;
    }
    
}

//function for whichStart function means checking the 2 argument 
function whichStart(whatStart)
{
    switch(whatStart)
    {
        case "explorer":
            cp.execSync("start explorer");
            break;
        case "calc":
            cp.execSync("calc");
            break;
        case "code":
            cp.execSync("code");
            break;
    }
    return true;
}

module.exports={
    startKey:start
}