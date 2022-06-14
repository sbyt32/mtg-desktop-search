function upDown(toCheck) {
    let result;
        if (toCheck > 0) {
            result = "+"
        }
        else if (toCheck < 0){
            result = ""
        }
        else {
            result = "±"
        };
    return result.concat("$",toCheck)
}

function posNeg(toCheck) {
    let result;
        if (toCheck > 0) {
            result = "up"
        } 
        else if (toCheck < 0) {  
            result = "down"
        }
        else {
            result = "neutral"
        }
    return result
}

export {upDown, posNeg}