function getPilihanComputer(){
    const comp = Math.random();
    if (comp < 0.35){
        return 'orang';
    } else if ( comp >= 0.35 && comp <= 0.65){
        return 'gajah';
    } else {
        return "semut";
    }
}

function getHasil(comp, player){
    if (player == comp){
        return 'SERI!';
    } else if (player == 'gajah'){
        if (comp == 'semut'){
            return 'KALAH!';
        } else {
            return 'MENANG!';
        }
    } else if (player == 'semut'){
        if (comp == 'gajah'){
            return 'MENANG!';
        } else {
            return 'KALAH!';
        }
    } else if (player == 'orang'){
        if (comp == 'semut'){
            return 'MENANG!';
        } else {
            return 'KALAH!';
        }
    }
}

// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
    
//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// })

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
    
//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// })

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
    
//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// })

// putar gambar
function putar(){
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.jpg');
        if(i == gambar.length) i = 0;
    }, 100)
}

// cara lain
const pilihan = document.querySelectorAll('.area-player img');
pilihan.forEach(function(pil){
    pil.addEventListener('click', function(){
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);

        putar();

        setTimeout(function(){
            const imgComputer = document.querySelector('.img-komputer');
            imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.jpg');
            
            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        }, 1000);

        
    })
})