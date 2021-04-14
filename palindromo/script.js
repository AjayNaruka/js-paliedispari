var input = prompt("Inserisci una parola");

palCheck1(input);
palCheck(input);

function palCheck1(str){
  console.log("La parola da controllare e' "+str)
  var inputArr = str.split("");
  console.log(inputArr);
  console.log(inputArr.length);
  var inputArrRev = inputArr.reverse();
  console.log(inputArrRev);
  var flag = true;
  
  for(var i =0; i<inputArr.length; i++){
    console.log(inputArr[i])
    console.log(inputArrRev[i])
    if(inputArr[i]!==inputArrRev[i]){
      flag = false;
    }
    console.log("Fine ciclo \n")
  }
  console.log(flag)
  if(flag) console.log("PALINDROMO TROVATO")
  else console.log("PALINDROMO NON TROVATO");
  console.log("*****************")
}

function palCheck(parola){
  var strParolaArr = parola.split("");
  console.log("Parola come array: \n"+strParolaArr);
  var strParolaRevArr = strParolaArr.reverse();
  console.log("Parola REV come array: \n"+strParolaRevArr);
  var strParolaRev = strParolaRevArr.join("");
  console.log("Parola REV: \n" + strParolaRev);
  if(strParolaRev==parola) console.log("PALINDROMI")
  else console.log("NON PALINDROMI")
  console.log("*****************")
}


