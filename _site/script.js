let syrup_type_els = document.querySelectorAll('[name=syrup_type]');
let syrup_amount_el = document.querySelector('.syrup_amount');

document.querySelector('button').addEventListener('click', (e) => {
  e.preventDefault();

  syrup_type_els.forEach((el) => {
    if (el.checked) {
      if (el.value == '1') {
        let syrup_amount = parseFloat(syrup_amount_el.value);
        let sugar = syrup_amount * 0.62
        document.querySelector('.sugar').textContent = `${Math.round(sugar)} grams`;
        document.querySelector('.water').textContent = `${Math.round(sugar)} grams`;
        document.querySelector('.results').style.display = 'block';
    
      }
      else if (el.value == '2') {
        console.log('2')
        let syrup_amount = parseFloat(syrup_amount_el.value);
        let sugar = syrup_amount
        document.querySelector('.sugar').textContent = `${Math.round(sugar)} grams`;
        document.querySelector('.water').textContent = `${Math.round(syrup_amount/2)} grams`;
        document.querySelector('.results').style.display = 'block';
    
      }
    }
  })
  
})


// let volume_el = document.querySelector('.volume');
// let brix_el = document.querySelector('.brix');

// document.querySelector('button').addEventListener('click', (e) => {
//   e.preventDefault()
  
//   let volume = parseFloat(volume_el.value);
//   let brix = parseFloat(brix_el.value);

//   let sugar = volume * (brix / 100)
//   let juice = volume - sugar
//   let onetoone = volume - (sugar * 2)
//   let twotoone = (volume * 2) - (sugar * 3)

//   document.querySelector('.sugar').textContent = `${Math.round(sugar*100) / 100} grams`;
//   document.querySelector('.juice').textContent = `${Math.round(juice*100) / 100} grams`;
//   document.querySelector('.onetoone').textContent = `${Math.round(onetoone*100) / 100} grams`;
//   document.querySelector('.twotoone').textContent = `${Math.round(twotoone*100) / 100} grams`;


// })