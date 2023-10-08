// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Menambahkan event listener ke tombol
    //  Untuk If Else
    var checkButton = document.getElementById("checkButtonIfElse");
    checkButton.addEventListener("click", IfElse);

    // untuk Switch Case
    var checkButton = document.getElementById("checkButtonSwitchCase");
    checkButton.addEventListener("click", SwitchCase);

    // Untuk For Statement
    var hasilButton = document.getElementById("hasilFor");
    hasilButton.addEventListener("click", forStatement);

});

// If Else 
// dan juga menggunaakn function
function IfElse() {
    // Mengambil nilai masukan dari input
    var input = document.getElementById("inputNumberIfElse").value;
    // Melakukan percabangan if-else
    if (input > 0) {
        document.getElementById("resultIfElse").textContent = "Angka yang Anda masukkan adalah positif.";
    } else if (input < 0) {
        document.getElementById("resultIfElse").textContent = "Angka yang Anda masukkan adalah negatif.";
    } else {
        document.getElementById("resultIfElse").textContent = "Angka yang Anda masukkan adalah nol.";
    }
}

function SwitchCase() {
    // Mengambil nilai masukan dari input
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operator = document.getElementById("operator").value;
    var result = document.getElementById("resultSwitchCase");

    // Menggunakan switch case untuk melakukan operasi matematika berdasarkan operator yang dimasukkan
    var hasil;

    switch (operator) {
        case '+':
            hasil = num1 + num2;
            break;
        case '-':
            hasil = num1 - num2;
            break;
        case '*':
            hasil = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                hasil = num1 / num2;
            } else {
                hasil = "Tidak dapat membagi dengan nol";
            }
            break;
        default:
            hasil = "Operator tidak valid";
            break;
    }

    // Menampilkan hasil operasi
    result.textContent = "Hasil: " + hasil;
}


function forStatement() {
    // Mengambil nilai masukan dari input
    var input = document.getElementById("inputNumberForStatement").value;
    var result = document.getElementById("resultForStatement");

    // Menggunakan for statement untuk menghasilkan piramida bintang sesuai dengan tinggi yang dimasukkan oleh pengguna
    var bintang = "";
    for (var i = 1; i <= input; i++) {
        // Menambahkan spasi untuk mengatur tampilan piramida
        for (var j = 1; j <= input - i; j++) {
            bintang += "&nbsp;";
        }
        for (var k = 1; k <= i; k++) {
            bintang += "*";
        }
        // Menambahkan baris baru setelah setiap baris bintang
        bintang += "<br>";
    }

    result.innerHTML = bintang;
}

// While Statement
// menampilkan jumlah bilangan ganjil, dan total berapa bilangan ganjil dari rentang bilangan
function whileStatement(awal, akhir) {
    if (awal > akhir) {
        document.getElementById("resultWhileStatement").innerHTML = "Rentang tidak valid";
        return;
    }

    let itung = 0;
    let ganjil = [];
    let angkaAwal = awal;
    let angkaTerakhir = akhir;
    while (awal <= akhir) {
        if (awal % 2 != 0) {
            itung++;
            ganjil.push(awal);
        }
        awal++;
    }

    // jika ada bilangan ganjil, maka tampilkan jumlahnya dan bilangan apa saja
    if (itung > 0) {
        const resultMessage = `Rentang bilangan dari: ${angkaAwal} - ${angkaTerakhir}<br>Jumlah bilangan ganjil: ${itung}<br> Bilangan ganjil: ${ganjil.join(", ")}`;
        document.getElementById("resultWhileStatement").innerHTML = resultMessage;
    // jika tidak ada maka tampilkan pesan di bawah
    } else {
        document.getElementById("resultWhileStatement").innerHTML = "Tidak ada bilangan ganjil dalam rentang ini.";
    }
}
    whileStatement(1, 50);

// Do While Statement
// Menampilkan bilangan dari rentang angka, dan menampilkan bahwa bilangan tersebut genap atau ganjil
function doWhileStatement() {
    var pesan = "";
    let i = 1;
    const n = 10;
    do {
        if (i % 2 == 1) {
            pesan += "Ini angka " + i  + " dan merupakan bilangan ganjil" + "<br>";
        }else if(i % 2 == 0){
            pesan += "Ini angka " + i  + " dan merupakan bilangan genap" + "<br>";
        }
        i++;
    } while (i <= n);

    document.getElementById("resultDoWhileStatement").innerHTML = pesan;
}
    doWhileStatement();

// Contoh function menggunakan parameter
function tampilScore(barang = [], jumlah = 0) {
    // Menampilkan isi belanjaan dengan menggunakan for statement
    var isiBelanjaan = "Belanjaan Anda: <ul>";

    for (var i = 0; i < barang.length; i++) {
        isiBelanjaan += "<li>" + barang[i] + "</li>";
    }
    isiBelanjaan += "</ul>";

    // Mengecek jika total harga berada dalam rentang diskon
    if (jumlah > 50000 && jumlah < 100000) {
        // Menghitung nilai diskon
        var diskon = 0.1 * jumlah;
        var afterDiskon = jumlah - diskon;
        var totalDiskon = "10%"
    } else if(jumlah > 100000 && jumlah < 500000) {
        // Menghitung nilai diskon
        var diskon = 0.4 * jumlah;
        var afterDiskon = jumlah - diskon;
        var totalDiskon = "40%"
    }else if(jumlah > 500000 && jumlah <= 1000000) {
        // Menghitung nilai diskon
        var diskon = 0.5 * jumlah;
        var afterDiskon = jumlah - diskon;
        var totalDiskon = "50%"
    }else {
        // Jika tidak mendapatkan diskon, maka hanya mendapat point
        var point = "50 point";
        totalDiskon = point;
        afterDiskon = "-"
    }
    // Menampilkan pesan dengan diskon
    var pesan = `${isiBelanjaan} Anda mendapatkan diskon ${totalDiskon}.<br>Harga sebelum diskon: Rp. ${jumlah} <br>Total harga setelah diskon: Rp. ${afterDiskon}`;
    // Menampilkan pesan ke dalam elemen HTML dengan id "resultFunction"
    document.getElementById("resultFunction").innerHTML = pesan;
}

tampilScore(["ayam", "beras", "daging", "susu", "gula", "garam"], 150000);
 
