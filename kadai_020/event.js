const eventBtn = document.getElementById("btn");

eventBtn.addEventListener("click",() => {
    const text = document.getElementById("text");
    text.textContent = "ボタンをクリックしました"
});