const Name= prompt('inserisci il tuo nome');
const Last_Name= prompt('inserisci il tuo cognome');
const Color= prompt('inserisci il tuo colore preferito');
const n= Math.floor(Math.random()*100);
let p= document.getElementById('testo').innerHTML;
p=Name + Last_Name + Color + n;
console.log(p);
document.getElementById('testo').innerHTML=p;