window.onload = () => {
    document.querySelector('#hitung').onclick = hitung;
    document.querySelector('#balik').onclick = balik;
    document.querySelector('#ulang').onclick = ulang;
  }
  
  function hitung() {
    let amount = document.querySelector('#amount').value;
    if (amount === '' || isNaN(amount)) { 
      alert("Isi dengan benar !");
      return;
    }
    let celsius = parseFloat(amount); 
    let fahrenheit = celsius * 1.8 + 32; 
    document.getElementById("value").value = fahrenheit.toFixed(2) + "°F";
    document.getElementById("value1").textContent = `${amount} °C * (9/5) + 32 = ${fahrenheit.toFixed(2)} °F`;
  }
  