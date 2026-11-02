function tambahAngka() {
    var angka1 = parseInt(document.getElementById("angka1").value);
    var angka2 = parseInt(document.getElementById("angka2").value);
    var hasil = angka1 + angka2;
    document.getElementById("hasil").textContent = "Hasil: " + hasil;
}

function kurangAngka() {
    var angka1 = parseInt(document.getElementById("angka1").value);
    var angka2 = parseInt(document.getElementById("angka2").value);
    var hasil = angka1 - angka2;
    document.getElementById("hasil").textContent = "Hasil: " + hasil;
}

function kaliAngka() {
    var angka1 = parseInt(document.getElementById("angka1").value);
    var angka2 = parseInt(document.getElementById("angka2").value);
    var hasil = angka1 * angka2;
    document.getElementById("hasil").textContent = "Hasil: " + hasil;
}

function bagiAngka() {
    var angka1 = parseInt(document.getElementById("angka1").value);
    var angka2 = parseInt(document.getElementById("angka2").value);
    var hasil = angka1 / angka2;
    document.getElementById("hasil").textContent = "Hasil: " + hasil;
}

function modulusAngka() {
    var angka1 = parseInt(document.getElementById("angka1").value);
    var angka2 = parseInt(document.getElementById("angka2").value);

    if (angka2 === 0) {
        document.getElementById("hasil").textContent = "Tidak bisa modulus dengan 0";
        return;
    }

    var hasil = angka1 % angka2;
    document.getElementById("hasil").textContent = "Sisa: " + hasil;
}

function persenAngka() {
    var angka1 = parseFloat(document.getElementById("angka1").value);
    var hasil = angka1 / 100;
    document.getElementById("hasil").textContent = "Persen: " + hasil;
}

function reset() {
    document.getElementById("angka1").value = "";
    document.getElementById("angka2").value = "";
    document.getElementById("hasil").textContent = "Hasil";
}