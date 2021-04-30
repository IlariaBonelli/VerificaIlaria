function OperazioneEffettuata() {
    alert("L'operazione \u00E8 andata a buon fine");
}

function Change() {
    let inputs = document.querySelectorAll(".input");
    let button = document.querySelector(".button");
    button.disabled = "";

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            button.disabled = false;
            break;
        }
    }
}


function Unsubscribe() {
    localStorage.removeItem('NomeUtente');
    alert("Ci dispiace, torna presto!")
}

function Subscribe() {
    let value = document.getElementById("nome").value;
    try {
        let storageName = "localStorage";
        let storage = (storageName in window && window[storageName] != null) ? window[storageName] : null;
        storage.setItem("nome", value);

        let Subscribe = document.getElementById(subscribe);
        Subscribe.disabled = "disabled";

        alert("Grazie per l'iscrizione");
    } catch (e) {
        alert(e.Message);
    }
   
}

   

function MessaggioBenvenuto() {
    let storage = window["localStorage"];
    let nomeUtente = storage.getItem("NomeUtente");
    if (nomeUtente == null) {
        alert("Benevenuto nuovo utente!")
        //break;
    } else {
        alert("Benvenuto" + " " + nomeUtente);
    }
}






   