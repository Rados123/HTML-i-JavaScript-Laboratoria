function fibonacci()
{
    var num = document.getElementById('num').value
    var num1=0;
    var num2=1;
    var sum;
    for (let i = 0; i < num; i++) 
    {
        sum=num1+num2;
        num1=num2;
        num2=sum;
    }
alert("Liczba fibonacciego odpowiadająca: " + num + "to: " + num2)
}


/*function Wynik() 
{
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
*/