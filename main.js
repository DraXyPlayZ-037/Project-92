function letgo() {

    play1 = document.getElementById("Player1name").value;
    play2 = document.getElementById("Player2name").value;

    localStorage.setItem("Player1", play1);
    localStorage.setItem("Player2", play2);
    window.location = "gamepage.html";
}