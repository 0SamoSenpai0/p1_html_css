function plus(){
    let getal1 = parseInt(window.document.getElementById("getal1").value, 10);   	
    let getal2 = parseInt(window.document.getElementById("getal2").value, 10);
    let answer = getal1 + getal2;
    document.getElementById("antwoord").innerHTML = answer;
}
function min(){
    let getal1 = parseInt(window.document.getElementById("getal1").value, 10);   	
    let getal2 = parseInt(window.document.getElementById("getal2").value, 10);
    let answer = getal1 - getal2;
    document.getElementById("antwoord").innerHTML = answer;
}
function keer(){
    let getal1 = parseInt(window.document.getElementById("getal1").value, 10);   	
    let getal2 = parseInt(window.document.getElementById("getal2").value, 10);
    let answer = getal1 * getal2;
    document.getElementById("antwoord").innerHTML = answer;
}
function delen(){
    let getal1 = parseInt(window.document.getElementById("getal1").value, 10);   	
    let getal2 = parseInt(window.document.getElementById("getal2").value, 10);
    let answer = getal1 / getal2;
    document.getElementById("antwoord").innerHTML = answer;
}
