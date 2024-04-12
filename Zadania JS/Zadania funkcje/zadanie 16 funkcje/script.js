function singUp (){
    const login = prompt("Podaj login");
    const password = Number(prompt("Podaj haslo"));
    console.log(`Witam na naszej stronie:` + login, password)  
}

function logIn (){
    const login1 = prompt("Podaj login");
    const password1 = Number(prompt("Podaj haslo"));
    console.log(`Milo ci wiedziec z powrotem:` + login1, password1);
}


function pobierzOpcje(){
    console.log("1.Rejstracja");
    console.log("2.Logowanie");
    return Number(prompt("Wybierz opcje"));
}


function run (){
    const opcja = pobierzOpcje()

    if(opcja === 1){
        console.log(singUp());
    } else if (opcja === 2){
        console.log(logIn());
    }
}

run();
