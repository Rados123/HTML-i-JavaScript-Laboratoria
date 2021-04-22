function validateForm() {
    var x = document.forms["Imie_i_nazwisko"]["iin"].value;
    if (x == "") {
      alert("Pole musi zostać wypełnione");
      return false;
    }
  }