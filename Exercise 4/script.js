document.addEventListener("DOMContentLoaded", function() {
  const calculateButton = document.getElementById("click");
  const resultSection = document.getElementById("result");

  calculateButton.addEventListener("click", function() {
    const quantities = [
      document.getElementById("quant1").value.trim(),
      document.getElementById("quant2").value.trim(),
      document.getElementById("quant3").value.trim()
    ];

    const prices = [19.99, 86.00, 55.00];

    let total = 0;
    let isError = false;

    for (let i = 0; i < quantities.length; i++) {
      if (!/^\d+$/.test(quantities[i])) {
        isError = true;
        alert("Error: Please enter a valid positive integer in the quantity box.");
        break;
      }

      const parsedQuantity = parseInt(quantities[i], 10);
      const subtotal = parsedQuantity * prices[i];
      total += subtotal;
      document.getElementById(`subtotal${i + 1}`).textContent = `$${subtotal.toFixed(2)}`;
      document.getElementById(`totalQuant${i + 1}`).textContent = parsedQuantity;
    }

    if (!isError) {
      resultSection.style.display = "block";
      document.getElementById("total").textContent = `$${total.toFixed(2)}`;
    }
  });
});
