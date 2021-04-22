const input = document.querySelector('#name');
input.addEventListener('change', function() {
  const val = this.value;
  const reg = /^[a-zA-ZąĄćĆęĘłŁńŃóÓśŚźŹżŻ]{3,}$/g;

  if (!val.length) {
    console.log('Pole jest puste')
  } else {
    console.log('Twoje imię to: ' + val[0].touppercase() + val.slice(1) );
  }

  if (!reg.test(val)) {
      alert("Imię nie prawidłowe")
      this.select();
  } else {
      alert('Twoje imię to: ' +val[0].touppercase() + val.slice(1) );
  }
});
