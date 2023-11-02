function averageThreeNumbers(a, b, c) {
    let sum = a+b+c;
    let avg = sum /3; //local var named avg
    return avg;
}

/* OR THIS
function createSentence(num, noun){
    let sentence = "On average, a Berkeley student has "+num+" "+noun+"s";
    return sentence;
}
*/

//I dont have JS experience, I was just curious
function createSentence(num, noun){
    return `On average, a Berkeley student has ${num} ${noun}s.`;
}

function getRandomNum(max){
    randNum = Math.random() * max; // Math.random() gives value between [1,0) therefore multiply by max to get a max rand value
    return randNum;
}

let x = getRandomNum(20);
let y = getRandomNum(10);
let z = getRandomNum(13);

let avg = averageThreeNumbers(x,y,z);
let animal = "dog";
let sentence = createSentence(avg,animal);
console.log(sentence);