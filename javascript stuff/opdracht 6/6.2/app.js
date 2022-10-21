function changecolor() {
    alert ("de kleur wordt aangepast.");
    console.log("het werkt ook in de console");
    document.getElementById("tekst1").style.color = "red";
}
function changecolor2(){
    document.getElementById("tekst2").style.color = "blue";
}
function calculator(num1, num2) {
    let answer = num1 + num2;
    console.log(answer);
}
calculator(3, 12);

function multiplyByFive(num1) {
    let answer = num1 * 5;
    console.log(answer);
    alert(answer)
}
multiplyByFive(2);

function calculateminutes(num1) {
    let answer = num1 / 60;
    console.log(answer);
    alert(answer);
}
calculateminutes(6900);