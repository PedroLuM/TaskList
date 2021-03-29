let userName = prompt("Who´s there? 😒");
if (userName==="Admin"){

    let pass = prompt("Password?¿🐱‍👤");
    
 if (pass==="TheMaster"){
    alert("Welcome!😎")
    } else if (pass=== "" || pass=== null) {
        alert("Canceled");
    } else {
        alert("Wrong password ✖✖✖✖");
    }
} else if (userName===null || userName==="") {
    alert("Cancceled✖✖✖✖");
} else{
    alert("I don´t know u 😒");
}

