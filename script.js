// document.getElementById("student").innerHTML = "<i I change student></i>";
var pElement = document.getElementById("student")
console.log(pElement);
pElement.style.color = "red";
pElement.style.backgroundColor = "yellow";
pElement.style.fontSize = "40px";

function changeColor() {
    pElement = document.getElementById("student")
    pElement.style.color ="blue";
    pElement.style.backgroundColor = "green";
}