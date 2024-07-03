document.addEventListener('DOMContentLoaded', () => {
    const cardNumberInput = document.getElementById('card-number');
    const cardHolderInput = document.getElementById('cardholder-name');
    const expMonthInput = document.getElementById('exp-month');
    const expYearInput = document.getElementById('exp-year');
    const cvcInput = document.getElementById('cvc');

    const cardNumberDisplay = document.getElementById('cardNumberDisplay');
    const cardHolderDisplay = document.getElementById('cardHolderDisplay');
    const expiryDateDisplay = document.getElementById('expiryDateDisplay');
    const cvcDisplay = document.getElementById('cvcDisplay');

    const form = document.getElementById('payment-form');
    const successMessage = document.querySelector('.success-message');
    const continueBtn = document.getElementById('continue-btn');

    // Error elements
    const cardNumberError = document.getElementById('card-number-error');
    const nameError = document.getElementById('name-error');
    const expDateError = document.getElementById('exp-date-error');
    const cvcError = document.getElementById('cvc-error');

    // Function to update card preview
    function updateCardPreview() {
        cardNumberDisplay.textContent = formatCardNumber(cardNumberInput.value);
        cardHolderDisplay.textContent = cardHolderInput.value.toUpperCase();
        expiryDateDisplay.textContent = `${expMonthInput.value}/${expYearInput.value}`;
        cvcDisplay.textContent = cvcInput.value;
    }

    // Format card number with spaces
    function formatCardNumber(number) {
        return number.replace(/\s/g, '').replace(/(.{4})/g, '$1 ');
    }

    // Event listeners for input fields
    cardNumberInput.addEventListener('input', updateCardPreview);
    cardHolderInput.addEventListener('input', updateCardPreview);
    expMonthInput.addEventListener('input', updateCardPreview);
    expYearInput.addEventListener('input', updateCardPreview);
    cvcInput.addEventListener('input', updateCardPreview);

    // Form submission handling
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        let isValid = true;

        // Validation (add your specific validation rules here)
        if (!isValidCardNumber(cardNumberInput.value.replace(/\s/g, ''))) {
            cardNumberError.textContent = 'Wrong format, numbers only';
            cardNumberError.style.display = 'block'; 
            isValid = false;
        } else {
            cardNumberError.style.display = 'none'; 
        }

        // Add validation for other fields similarly

        if (isValid) {
            // Show success message
            form.style.display = 'none'; 
            successMessage.style.display = 'flex'; 
        }
    });

    // Continue button to reset the form 
    continueBtn.addEventListener('click', () => {
        form.reset();
        updateCardPreview(); 
        successMessage.style.display = 'none';
        form.style.display = 'block'; 
    });

    // Validation Functions (Implement your own robust logic)
    function isValidCardNumber(cardNumber) {
        // Your validation logic here
        return /^\d{13,16}$/.test(cardNumber); 
    }

});