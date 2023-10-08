// Code your solutions in this file
const persons = ["Guadalupe", "Ollie", "Aki"];

function writeCards(persons, occasion ){
    const newMessage = [];
    for(let i = 0; i < persons.length; i++){
        const message = `Thank you, ${persons[i]}, for the wonderful ${occasion} gift!`;
        newMessage.push(message);
    }
    return newMessage;
}
writeCards(persons, surprise);

function countDown(number){
 while(number>= 0){
    console.log(number);
    number-- ;
 }
}
countDown(10);

