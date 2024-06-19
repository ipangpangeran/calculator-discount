document.addEventListener("DOMContentLoaded", function() {
    const billAmountInput = document.getElementById('bill_amount');
    const discountPercentageInput = document.getElementById('discount_percentage');
    const discountAmountInput = document.getElementById('discount_amount');
    const finalAmountInput = document.getElementById('final_amount');
    const calculateBtn = document.getElementById('calculate_btn');
    const resetBtn = document.getElementById('reset_btn');

    // Function to format numbers as Indonesian Rupiah
    function formatRupiah(number) {
        return 'Rp ' + number.toLocaleString('id-ID');
    }

    // Function to parse the Rupiah formatted string to a number
    function parseRupiah(rupiah) {
        return parseInt(rupiah.replace(/[^\d]/g, ''));
    }

    // Event listener for calculating the discount
    calculateBtn.addEventListener('click', function() {
        const billAmount = parseRupiah(billAmountInput.value);
        const discountPercentage = parseFloat(discountPercentageInput.value);

        if (!isNaN(billAmount) && !isNaN(discountPercentage)) {
            const discountAmount = (billAmount * discountPercentage) / 100;
            const finalAmount = billAmount - discountAmount;

            discountAmountInput.value = formatRupiah(Math.round(discountAmount));
            finalAmountInput.value = formatRupiah(Math.round(finalAmount));
        } else {
            alert('Please enter valid numbers');
        }
    });

    // Event listener for resetting the inputs
    resetBtn.addEventListener('click', function() {
        billAmountInput.value = '';
        discountPercentageInput.value = '';
        discountAmountInput.value = '';
        finalAmountInput.value = '';
    });
});
