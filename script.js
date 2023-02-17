function myFunction() {
    const element = document.getElementById("id01");
    element.innerHTML = "New Heading";
}

function myColorChange() {
    const element = document.getElementById("id01");
    element.style.color = "red";
}

const przesylka = {
  name: "",
  ulica: "",
};

const przesylka2 = {
  name: "",
  ulica: "",
};

przesylka2.waga = 20;
przesylka.name = "List";
przesylka2.name = "Paczka";



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

