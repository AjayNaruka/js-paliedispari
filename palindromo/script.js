var input = prompt("Inserisci una parola");

palCheck1(input);
palCheck(input);

function palCheck1(str){
  console.log("La parola da controllare e' "+str)
  var inputArr = str.split("");
  var inputArr2 = [...inputArr]; /* PER SALVARE LA VERSIONE ORIGINALE PER IL CONFRONTO */
  console.log(inputArr);
  console.log(inputArr.length);
  var inputArrRev = inputArr.reverse(); /* OSS REVERSE CAMBIA IL VETTORE INIZIALE */
  //console.log(inputArrRev);
  var flag = true;
  
  for(var i =0; i<inputArr2.length && flag ==true; i++){
    console.log(inputArr2[i])
    console.log(inputArrRev[i])
    if(inputArr2[i]!==inputArrRev[i]){
      flag = false;
    }
    console.log("Fine ciclo \n")
  }


  console.log(flag)
  if(flag) console.log("PALINDROMO TROVATO")
  else console.log("PALINDROMO NON TROVATO");
  console.log("*****************")
}

///////////////////////////////////

function palCheck(parola){
  var strParolaArr = parola.split("");
  console.log(strParolaArr);

  //STAMPA CARATTERI
  console.log("STAMPA SINGOLII CARATTERI PAROLA NON REV \n")
  for( var a =0; a<strParolaArr.length;a++){
    console.log(strParolaArr[a]);
  }
  var strParolaRevArr = strParolaArr.reverse();
  console.log(strParolaRevArr);
  var strParolaRev = strParolaRevArr.join("");
  console.log("Parola REV: \n" + strParolaRev);
  if(strParolaRev==parola) console.log("PALINDROMI")
  else console.log("NON PALINDROMO")
  console.log("*****************")
}


