
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
/* const indexOfRonaldo = (players.indexOf("Ronaldo"));

if (indexOfRonaldo >= 0){
    players.splice(indexOfRonaldo,1);
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

// const mixedNumbers = [3, -5, 12, -1, 8, -6];
// const positiveNumbers = [];
// 
// for (let i = 0; i < mixedNumbers.length; i++){
    // if (mixedNumbers[i] > 0) {
    // positiveNumbers.push(mixedNumbers[i]); 
    // return
    // }
// } 
//console.log = (positiveNumbers[i]);

//26. Utgå från arrayen mixedNumbers nedan. Skriv en for-loop utan att använda index, 
//där du loggar varje positivt tal.

// const mixedNumbers = [3, -5, 12, -1, 8, -6];

// for (const number of mixedNumbers){
//     if (number > 0)

//         console.log(number);
// }



// 27. Använd en while-loop för att logga alla tal i arrayen numbers från och med index 0. 
// Avbryt loopen om talet är större än 10.

// const numbers = [5, 8, 12, 20, 3];
// let index = 0;

// while (index < numbers.length){
//     const number = numbers[index];

//     if (number > 10) {
//         break;
//     } 

//     console.log(number);
//     index++;
// }


// 28. Utgå från arrayen mixedNumbers ovan. Använd en while-loop för att räkna 
// hur många negativa tal det finns i arrayen. Logga antalet.

// const mixedNumbers = [3, -5, 12, -1, 8, -6];
// let index = 0;

// while (index < mixedNumbers.length){
//     const negativeNumber = mixedNumbers[index];

//     if (negativeNumber > 0){
//       index++;
//     }
//     console.log (negativeNumber.length);
//     index++;
// }




// 29. Skapa en array words med några ord i den, (exempel nedan). Använd en for-loop 
// för att logga varje ord tillsammans med dess längd (antal bokstäver).

// const words = ["banana", "apple", "kiwi", "strawberry", "peach"];

// for (const word of words) {

//     const numberOfCharacters = word.length;

//     console.log (`Ord: ${word}. Den har ${numberOfCharacters} bokstäver.`);
// }


// 30. Använd words-arrayen ovan och en for-loop för att bygga en ny sträng som består 
// av de första bokstäverna i varje ord. Logga ut den nya strängen.

// const words = ["banana", "apple", "kiwi", "strawberry", "peach"];
// let character = "";

// for (let i = 0; i < words.length; i++){

//     (character += words [i][0]);
// }

// console.log (character);

// for (const word of words){
//     character += word[0];
// }

// console.log(character);

// 31. Skriv en while-loop som itererar genom arrayen numbers och loggar varje tal 
// tills summan av de loggade talen överstiger 25.


// const numbers = [5, 8, 12, 20, 3];
//  let sum = 0; 
// let index = 0; 

//  while (sum < 25) {

// const number = numbers[index];
// console.log(number);
//      sum += number; 
//      console.log(number); 
//     index++; 
    
//  }
//  console.log( "Summan är inte längre mindre än 25: " + sum);





// 32. Använd en for-loop utan index för att summera alla värden i arrayen mixedNumbers. 
// Logga ut summan.

// const mixedNumbers = [3, -5, 12, -1, 8, -6];
// let total = 0;

// for (const addednumber of mixedNumbers){
//       total += addednumber;

// }
// console.log (`Summan blir: ${total}!`);


// 33. Skapa en array temperatures (exempel nedan) med några temperaturer i Celsius. 
// Använd en for-loop för att hitta den högsta temperaturen. Därefter, logga både högsta 
// temperaturen och dess index i arrayen.

// const temperatures = [15, 22, 19, 30, 28, 18, 25];

// let highestTemperature = temperatures [0];

// let highestTemperatureIndex = 0;


// for (let i = 1; i < temperatures.length; i++) {
//     const temperature = temperatures [i];

//     if (temperature > highestTemperature){
//         highestTemperature = temperature;
//         highestTemperatureIndex = i;
//     }

// }
//     console.log (`Den högsta temperaturen är:${highestTemperature} 
//     och den ligger på indexposition ${highestTemperatureIndex}`);


// 
// 34. 
// Använd en for-loop för att räkna antalet ord i words-arrayen som innehåller fler än 
// fem bokstäver.

// const words = ["banana", "apple", "kiwi", "strawberry", "peach"];
// let wordsBiggerThan5 = 0;


// for (let i = 0 ; i < words.length; i++){
    
//     if (words[i].length > 5){
//        wordsBiggerThan5++
//     }
// }

// console.log (wordsBiggerThan5);


// 35. Skriv en while-loop som räknar upp talen från numbers-arrayen ovan tills ett udda 
// tal hittas. Avbryt loopen vid första udda talet och logga resultatet.

// const numbers = [5, 8, 12, 20, 3];
// let index = 0;

// while (index < numbers.length ){
//     const unevenNumber = numbers [index];

//     if (unevenNumber % 2 !==0){

//         console.log(`Det första udda talet är: ${unevenNumber}`);

//         break;
//     }

//     index++;
// }
