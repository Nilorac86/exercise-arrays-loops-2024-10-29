
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

const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
const removeRonaldo = (players.indexOf("Ronaldo"));

if (removeRonaldo !== -1){
    players.splice(removeRonaldo,1);
}

console.log(players);