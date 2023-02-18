function myFunction() {
    const element = document.getElementById("id01");
    element.innerHTML = "New Heading";
}

function myColorChange() {
    const element = document.getElementById("id01");
    element.style.color = "red";
}

class Przesylka {
  constructor(name, waga){
    this.name = name;
    this.waga = waga;
  }

}
let przesylka = new Przesylka("List", ""); 
let przesylka2 = new Przesylka("Paczka, ", 20); 

przesylka2.waga = 20;



function mojaFunkcja3(id) {
  const element = document.getElementById("id01");
  const element2 = document.getElementById("id02");

if (id=== 1 ){
  informacje = "Typ twojej przesyłki to: " + przesylka.name
  element.innerHTML = informacje;
  
  informacje = "przesylka nie posiada wagi"
  element2.innerHTML = informacje;
}

if (id === 2){
  informacje2 = "Typ twojej przesyłki to: " + przesylka2.name
  element.innerHTML = informacje2;
  
  informacje2 = "waga twojej przesyłki to: " + przesylka2.waga + "kg"
  element2.innerHTML = informacje2;
}
    
}

