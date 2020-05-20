let recBtn = document.querySelector(".lab_button");

function changeBtnText(e) {
    e.preventDefault();
    recBtn.innerHTML = "YAY!";
}
function changeBtnColor(){
    recBtn.style.backgroundColor = "red";
}
recBtn.addEventListener("click", changeBtnText);