var jugador = prompt("ingresa un valor");
var options = ["piedra", "papel", "tijeras"]
var random = Math.floor(Math.random() * options.length);
var computador = options[computador]
console.log(computador)

if (jugador == "tijeras"  && computador == "papel") 
{
    alert("Ganaste");
}
else if (jugador == "piedra"  && computador == "tijeras") 
{
    alert("Ganaste");
}
else if (jugador == "papel"  && computador == "piedra") 
{
    alert("Ganaste");
}
else if (jugador === computador) 
{
    alert("empate");
}
else {
    alert("Perdiste")
}