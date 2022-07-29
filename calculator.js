

const saveValues = document.getElementById("save-list");
const valueElement = document.querySelector("#screen");

const numberButton = document.querySelectorAll(".number-button");
console.log(numberButton);

let result = "";

function click(num){
    console.log("hello");
    document.getElementById("screen").value=num;
    // document.getElementById("screen").value+num;
}   

function update(){
    document.getElementById("screen").value=7;
}

function clearScreen(){
    document.getElementById("screen").value=0;
}

function deletePrevious(){

}

function save(){

}

function equals(){
    var text=document.getElementById("screen").value;
    var result = eval(text);
    document.getElementById("screen").value=result;

}
numberButton.forEach(numberButton => { numberButton.addEventListener('click', () => {
    result += numberButton.value + " ";
    valueElement.value=result;
})});

