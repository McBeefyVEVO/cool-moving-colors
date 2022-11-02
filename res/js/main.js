const UserInput1 = document.getElementById("UserInput1");
const UserInput2 = document.getElementById("UserInput2");
const UserInputColor = document.getElementById("UserInputColor");

const colors = document.getElementById("colors");
const send = document.getElementById("send");
const content = document.getElementById("content");


const changeColor = () => {
    const UserInputColorValue = UserInputColor.value;
    content.style.backgroundColor = UserInputColorValue; 
}





send.onclick = () => {
    const x = UserInput1.value;
    const y = UserInput2.value;
    
    content.style.left = x + "px";
    content.style.top = y + "px";

};

colors.onlick = () => {
    changeColor();
};

content.onmouseover = () => {
    changeColor();
};

window.onload = () => {
    changeColor();
}





