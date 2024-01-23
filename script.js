function clearScreen() {
    document.getElementById("result").value = "";
}


function display(value) {
    document.getElementById("result").value += value;
}


function calculate() {
    var p = document.getElementById("result").value;
    var q = (p.length===0)? 0 : eval(p);
    document.getElementById("result").value = q;
}