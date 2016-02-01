var prompt = require("prompt");
prompt.start();
prompt.get(["number"], function(err,result1){
    if (err) {
        return "Not a number";
    }
    var compNum = Math.floor(Math.random()*10 +1);
    if (Number(result1.number) < compNum){
        console.log("Number is bigger");
    } else if (Number(result1.number) > compNum){
        console.log("Number is smaller");
    } else if(Number(result1.number) === compNum) {
        console.log("You wun!");
        return
    }
       prompt.get(["number"], function(err,result2){
           if (Number(result2.number) < compNum){
        console.log("Number is bigger");
    } else if (Number(result2.number) > compNum){
        console.log("Number is smaller");
    } else if(Number(result2.number) === compNum) {
        console.log("You wun!");
        return
    }
       prompt.get(["number"], function(err,result3){
           if (Number(result3.number) < compNum){
        console.log("Number is bigger");
    } else if (Number(result3.number) > compNum){
        console.log("Number is smaller");
    } else if(Number(result3.number) === compNum) {
        console.log("You wun!");
        return 
    }
        prompt.get(["number"], function(err,result4){
               if (Number(result4.number) < compNum){
            console.log("Number is bigger");
        } else if (Number(result4.number) > compNum){
            console.log("Number is smaller");
        } else if(Number(result4.number) === compNum) {
            console.log("You wun!");
            return 
           }
        console.log("The correct answer was: " + compNum + ". You entered:" + result1.number + ", " + result2.number + ", " + result3.number + ", " + result4.number);
            });
})})});