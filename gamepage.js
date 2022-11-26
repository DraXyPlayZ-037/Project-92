p1n = localStorage.getItem("Player1");
p2n = localStorage.getItem("Player2");

document.getElementById("p1").innerHTML = p1n + " : ";
document.getElementById("p2").innerHTML = p2n + " : ";
qt = "p1"
at = "p2"

p1s = 0;
p2s = 0;

function feo() {
    document.getElementById("Aopie").innerHTML = "Answer Turn: " + p2n;
    document.getElementById("Qopie").innerHTML = "Question Turn: " + p1n;
}

document.getElementById("s1").innerHTML = p1s;
document.getElementById("s2").innerHTML = p2s;

function multian() {
    document.getElementById("Aopie").innerHTML = "Answer Turn: " + p2n;
    document.getElementById("Qopie").innerHTML = "Question Turn: " + p1n;

    num1 = document.getElementById("number1k").value;
    num2 = document.getElementById("number2k").value;
    console.log(num1 + "x" + num2 + "=")

    ra12 = parseInt(num1) * parseInt(num2);
    console.log(ra12);

    htm1 = "<h4>" + num1 + "X" + num2 + "</h4>";
    htm2 = "<br> Answer: <input type='text' id='chek' class='form-control'> ";
    htm3 = "<br><br><button class='btn btn-info' onclick='checa()'>Check!</button>";
    end4 = htm1 + htm2 + htm3;

    document.getElementById("output").innerHTML = end4;

    document.getElementById("number1k").value = "";
    document.getElementById("number2k").value = "";
}

function checa() {
    ant = document.getElementById("chek").value;
    if (ant == ra12) {

        if (qt == "p1") {
            p1s = p1s + 1;
            document.getElementById("s1").innerHTML = p1s;
        } else {
            p2s = p2s + 1;
            document.getElementById("s2").innerHTML = p2s;
        }
    }
    if (qt == "p1") {
        qt = "p2"
        document.getElementById("Qopie").innerHTML = "Question Turn: " + p2n;
        document.getElementById("Aopie").innerHTML = "Answer Turn: " + p1n;
    } else if (qt == "p2") {
        qt = "p1"
        document.getElementById("Aopie").innerHTML = "Answer Turn: " + p2n;
        document.getElementById("Qopie").innerHTML = "Question Turn: " + p1n;
    }
    if (at == "p2") {
        at = "p1"
        document.getElementById("Qopie").innerHTML = "Question Turn: " + p2n;
        document.getElementById("Aopie").innerHTML = "Answer Turn: " + p1n;
    } else if (at == "p1") {
        at = "p2"
        document.getElementById("Aopie").innerHTML = "Answer Turn: " + p2n;
        document.getElementById("Qopie").innerHTML = "Question Turn: " + p1n;
    }
}