
/* const names = ["Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo"];

names.push("Drogba");
names.unshift ("Figo");
names.pop();
names.pop();
names.unshift("Ronaldo");
console.log(names); */

 

//1. Den skriver ut Maradona eftersom index börjar på 0 alltså blir index 3 det fjärde elementet.

//2. Den retunerar den nya längden av arrayen.

//.3 .unshift() den retunerar även den det nya värdet i arrayen.

//4. Den retunerar det borttagna elementet.

//5. Först använde jag .pop() för att ta bort "Ronaldo" i slutet. Sedan använde jag 
//.unshift() för att lägga till namnet först.

//6. Referensen där datan lagras kan inte ändras i en array, man kan inte tilldela en ny array samma variabel. 
// Däremot går det fortfarande att ändra innehållet i en array med destruktiva metoder då dessa läggs till i befintlig array.

//7. Resultatet blev "false". Det innebär att Messi inte fanns med i den listan.

/* const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];

console.log(players.includes("Messi")); 
 */

//8.

//const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];

/* console.log(players.includes("Zlatan")); 

if (players.includes( "Zlatan")){
    console.log("Zlatan är med i listan!");
} else {
    console.log("Zlatan är inte med i listan!");
} */

//9. Resultatet är 5 och det blir så eftersom index börjar på 0. Det sjätte elementet blir då 5.

/* players.indexOf("Maradona");
console.log(players.indexOf("Maradona"));
 */

//10. Den retunerar -1 det betyder att Messi inte är med i listan. 
//Det kan vara användbart om man vill veta om elementet finns med i listan eller inte

//players.indexOf("Messi");
//console.log(players.indexOf("Messi"));

//11.
//const playersToString = (players.join(", "));
//console.log(playersToString);

//12.
//Zlatan-Beckham-Zidane-Ronaldo-Romario-Maradona

//13. Med splice() börjar man med att välja vilket objet det ska börja ifrån 
//för att sedan ange hur många objekt man vill ta bort. i detta fallet var det (1,2). 
//1 för att vi vill ta bort det andra elementet och sedan 2 för att vi vill ta bort två element.

//players.splice (1,2);
//console.log(players);

//14. Ronaldinho hamnar på tredjeplats (index 2) och försjuter sedan resterade namn till höger. 
//I detta fallet ett steg. Den retunerar den nya uppdaterade listan.
//players.splice (2,0,("Ronaldinho"));
//console.log(players);

//15. Kombinera indexOf() och splice() för att ta bort "Ronaldo" från arrayen, 
//oavsett var i listan han befinner sig.

//const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
/* const removeRonaldo = (players.indexOf("Ronaldo"));

if (removeRonaldo !== -1){
    players.splice(removeRonaldo,1);
}

console.log(players); */

//16. Slice retunerar en del av den befintliga listan som blir en kopia av 
//listan och har samma underliggande värde som listan den skapades ifrån.

//const partOfPlayers= players.slice(0,3);
//console.log (partOfPlayers);

//17. Den innehåller nu dessa spelare, ["Zidane", "Ronaldo", "Romario", "Maradona"],
// eftersom den tar bort 0 och 1.
// Den ursprungliga listan players är oförändrad.

/* const partOfPlayersEnd = players.slice(2)
console.log (partOfPlayersEnd); */

//18. with tar in två parametrar och visar först orginal arrayn och sedan 
//levererar den en ny modifierad koipia av den tidigare listan. 

// const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
// const updatedPlayers = players.with(1, "Mbappe");

// console.log(players);
// console.log(updatedPlayers);

// 19. Utgå från arrayen nedan. Skriv en for-loop som skriver ut varje tal i arrayen.

// const numbers = [5, 8, 12, 20, 3];

// for (let i = 0; i < numbers.length; i++){
//     console.log(numbers);
// }





// 20. Använd en for-loop för att summera alla tal i arrayen numbers ovan. 
//Logga ut summan efter att loopen har körts klart.

// const numbers = [5, 8, 12, 20, 3];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++){

//     sum += numbers[i];

//     console.log(sum);
// }



// 21. Skriv en for-loop som letar efter det största talet i numbers. 
//Logga det största värdet.

// const numbers = [5, 8, 12, 20, 3];

// let biggestNumber = 0;

// for (const number of numbers) {
//     if (number > biggestNumber) {
//         biggestNumber = number;
// }
// }
// console.log (`#21. The biggest number är ${biggestNumber}`);


// 22. Skapa en ny array som heter doubledNumbers. 
//Använd en for-loop för att fylla doubledNumbers med varje tal i numbers 
//multiplicerat med 2.

// const numbers = [5, 8, 12, 20, 3];

// const dubbeldNumbers = [];

// for (const n of numbers){
//     dubbeldNumbers.push (n*2);
// }
//     console.log ("#22.", numbers);
//     console.log ("#22.", dubbeldNumbers);


// 23. Använd en for-loop för att räkna ut medelvärdet av talen i numbers. 
//Logga ut medelvärdet.

// const numbers = [5, 8, 12, 20, 3];

// let sum = 0;

// for (let i = 0; i < numbers.length; i++){
//     sum += numbers[i];
// }
//     const average = sum/numbers.length;
//     console.log(average);


// 24. Skriv en for-loop som hittar och loggar ut det minsta talet i numbers.

// const numbers = [5, 8, 12, 20, 3];

// let smallestNumber = numbers [0];

// for (let i = 0; i < numbers.length; i++){
//    if (numbers [i] < smallestNumber){
//      smallestNumber = numbers[i];
//    }
// }
//     console.log(smallestNumber);
    

// 25. Skapa en ny array som heter positiveNumbers och fyll den med endast de positiva 
//talen från arrayen nedan. Använd en for-loop och en if-sats.

const mixedNumbers = [3, -5, 12, -1, 8, -6];
const evenNumbers = 

for (let i = 0; i < mixedNumbers; i++){
    if (){
        
    }
}

// // #29.
// const words = ["banana", "apple", "kiwi", "strawberry", "peach"];

// for (const word of words) {
//     const numberOfCharacters = word.length;
//     console.log (`#29. word: ${w}. Den har ${numberOfCharacters} ord.`);
// }
