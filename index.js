// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    let blocksFrom;
    if (someValue > 42){
    blocksFrom = someValue - 42;
    return blocksFrom;
    } else {
    blocksFrom = someValue - 42;
    blocksFrom = blocksFrom * -1;
    return blocksFrom
    }
}
function distanceFromHqInFeet(someValue) {
    let valFeet;
    valFeet = distanceFromHqInBlocks(someValue);
    valFeet = valFeet*264
    return valFeet;
}
function distanceTravelledInFeet(start, destination){
    let total = destination - start
    let totalFeet = total*264
    if (totalFeet > 0){
        return totalFeet
    } else {
        totalFeet= totalFeet * -1
        return totalFeet
    }
}
function calculatesFarePrice(start, destination){
    let totalPrice = 0
    let totalFeet = distanceTravelledInFeet(start,destination)
    let discount = 0.0
    if (totalFeet > 2500){
        return('cannot travel that far')
    } 
    else if(totalFeet > 2000){
       return 25
    }
    else if(totalFeet <400){
        return 0
    }
    else{
        discount = (totalFeet-400)
        totalPrice = discount*.02
        return totalPrice
    }
}