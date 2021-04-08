//random number math
function randomNum(){
    return Math.ceil(Math.random() * 100);
}
//a function to display the number
function randomVal(){
    document.getElementById("number").value = randomNum();
}