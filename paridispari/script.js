var userChoice = prompt("Scegli pari o dispari");
var userNum = parseInt(prompt(("Inserisci un numero da 1 a 5")));

var pcNum = numGen();
console.log("Numero generato per il PC: \n" + pcNum);

var check = sumCheck(userNum, pcNum, userChoice);
if(check) console.log("HAI VINTO")
else console.log("HAI PERSO")






function numGen(){
  return Math.ceil(Math.random()*5);
}

function sumCheck(a,b,choice){
  console.log("Hai scelto il numero : \n" + a)
  console.log("Il PC ha scelto il numero : \n" + b)
  console.log("Hai puntato su : \n" + choice)
  var sum =a+b;
  if((sum%2 && choice=="dispari") || ( !(sum%2) && choice == "pari")) return true;
    //else if( sum%2 && choice=="pari") return false;
   // else if( !(sum%2) && choice == "pari") return true;
    else return false;
}