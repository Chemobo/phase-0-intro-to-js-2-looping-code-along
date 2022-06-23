// Code your solutions in this file
const writeCards = (name) => {
    let namesArray = [];
    for(let i = 0; i < name.length; i++) {
       namesArray.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
    }
    return namesArray;
 }
 
 const countDown = (num) => {
    for(let i = num; i >= 0; i--) {
       console.log(i);
    }
 }