alert("asas")
const liczby = document.getElementById('liczby')
const listaliczb = liczby.split('').map(Number)

function FunkcjaLiczb(listaliczb) {
    var wielka = 0, al = Array.length, i 
    for (i=0; i<=al;i++){
        if (listaliczb[i]>wielka) {
             wielka=listaliczb[i];

    }
}
return wielka
}
alert('Największa liczba w zbiorze to: ' + FunkcjaLiczb)



