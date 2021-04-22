alert ("yo");

const input = document.querySelector('#name');
input.addEventListener('change', function() {
  const val = this.value;
  const reg = /^[a-zA-ZąĄćĆęĘłŁńŃóÓśŚźŹżŻ]{3,}$/g;

  if (!reg.test(val)) {
      alert("Imię nie prawidłowe")
      this.select();
  } else {
      alert('Twoje imię to: ' +val[0].touppercase() + val.slice(1) );
  }
  
});


const input = document.querySelector('#name');
const val = input.value;

if (!val.length) {
  console.log('Pole jest puste')
} else {
  console.log('Twoje imię to: ' + val[0].touppercase() + val.slice(1) );
}

const input = document.querySelector('#email');
email.addEventListener('change', function() {
  const className = 'errorfield';
  const mailReg = new RegExp('^[0-9a-z_.-]+@[0-9a-z_.-]+\.[a-z]{2,3}$', 'i');

  if(!mailReg.test(this.value)) {
    this.classList.add(className)
  } else {
    this.classList.remove(className);
  }
});
