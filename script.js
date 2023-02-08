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


function processCall(recipient, onAvailable, onNotAvailable) {
  // Symuluj dostępność abonenta za pomocą liczby losowej
    const isRecipientAvailable = Math.random() > 0.5;
  
    if (!isRecipientAvailable) {
      onNotAvailable(recipient);
      return;
    }
  
    onAvailable(recipient);
  }
  
  function takeCall(name) {
    console.log(`Łączenie z ${name}, proszę czekać...`);
  // Logika odbierania połączenia
  }
  
  function activateAnsweringMachine(name) {
    console.log(`Abonent ${name} jest niedostępny, zostaw wiadomość.`);
  // Logika aktywacji automatycznej sekretarki
  }
  
  function leaveHoloMessage(name) {
    console.log(`Abonent ${name} jest niedostępny, nagrywamy hologram.`);
  // Logika nagrywania hologramu
  }
  
  processCall("Mango", takeCall, activateAnsweringMachine);
  processCall("Poly", takeCall, leaveHoloMessage);

