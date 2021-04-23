function Wynik() {
    const liczby = document.getElementById('liczby').value
    const listaliczb = liczby.split('').map(Number)
    var wielka = 0;

    for (let i=0; i<=liczby.length;i++){
        if (liczby[i] > wielka) {
             wielka = liczby[i];
    }
}
alert("Największa liczba w zbiorze to: " + listaliczb + " to: " + wielka)
}
