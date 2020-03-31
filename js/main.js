var email = prompt ('insert email');
console.log(userEmail)

var listEmail = ['michele@boolean.careers' , 'fabio@boolean.careers' , 'roberto@boolean.careers' ]
console.log (userEmail[i]);

var validEmail = false;

for (var i = 0 ; i < listEmail.lenght; i++) {
if (email == listEmail[i]) {
  validEmail =  true;
}
}

if (validEmail == true) {
  alert ('you can play');
}
else {
  alert ('invalid e-mail');
}
console.log(validEmail);

//DICE GAME

var computer =  math.floor ( Math.random ( ) * 6 ) + 1 ;
console.log (computer);

var  angelo  =  math.floor ( Math . random ( ) * 6 )  +  1 ;
console . log ( player ) ;

var  message = '' ;
if  ( computer > player )  {
  messaggio  =  'Ha vinto il computer' ;
}  else  if  ( computer < player )  {
  messaggio  =  'Hai vinto' ;
}  else {
  message = 'il risultato è pari' ;
}

console.log ( messaggio ) ;t

