//let km = prompt('Quanti km devi percorrere?');
//console.log(km);

//let age = prompt('Qual\'è la tua età?');
//console.log(age);

let full_price = km * 0.21;
//console.log(full_price);

let final_price;

if (age > 65) {
    final_price = (full_price * 0.6).toFixed(2);
}
else if (age < 18){
    final_price = (full_price * 0.8).toFixed(2);
}
else{
    final_price = full_price.toFixed(2);
}

//console.log(final_price);

//const name = document.querySelector(".name");
//const btn = document.querySelector("button");

myButton.addEventListener('click', function() {
    console.log(full_price);
   
});

document.addEventListener('button').innerHTML += final_price + ' $';