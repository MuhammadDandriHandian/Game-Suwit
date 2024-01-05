var ulang = true;
while (ulang){
var p = prompt("Selamat Datang di 'Game Suwit Jawa' \nSilahkan Pilih : (Orang, Semut, Gajah)");

var com = Math.random();
if (com < 0.36){
    com = 'orang';
} else if ( com >= 0.36 && com <= 0.66){
    com = 'gajah';
} else {
    com = "semut";
}

var hasil = '';
if (p == com){
    hasil = 'SERI!';
} else if (p == 'gajah'){
    if (com == 'semut'){
        hasil = 'KALAH!';
    } else {
        hasil = 'MENANG!';
    }
} else if (p == 'semut'){
    if (com == 'gajah'){
        hasil = 'MENANG!';
    } else {
        hasil = 'KALAH!';
    }
} else if (p == 'orang'){
    if (com == 'semut'){
        hasil = 'MENANG!';
    } else {
        hasil = 'KALAH!';
    }
} else {
    hasil = 'memasukan pilihan yang salah'
}

if (p == com){
    alert('Anda memilih '+p+' dan komputer memilih '+com+'\nMaka game berakhir '+hasil);
} else {
    alert('Anda memilih '+p+' dan komputer memilih '+com+'\nMaka anda '+hasil);
}

ulang = confirm('Mau main lagi');
}
