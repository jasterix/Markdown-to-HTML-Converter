const _=require("lodash");

const numbers = [12,23,21,43,343,23,54]

_.each(numbers, function(number, i){
    console.log(number)
})