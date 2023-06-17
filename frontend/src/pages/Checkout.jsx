import React, { useState, useEffect } from 'react'
// import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Checkout = () => {

    const [cardNumber, setCardNumber] = useState('');
    const [isValidCardNumber, setIsValidCardNumber] = useState(true);
    const [nameOnCard, setNameOnCard] = useState('');
    const [isValidNameOnCard, setIsValidNameOnCard] = useState(true);
    const [securityCode, setSecurityCode] = useState('');
    const [isValidSecurityCode, setIsValidSecurityCode] = useState(true);
    const [expirationDate, setExpirationDate] = useState('');
    const [isValidExpirationDate, setIsValidExpirationDate] = useState(true);
    const [selectedAmount, setSelectedAmount] = useState('');
    const [isAmountSelectedError, setIsAmountSelectedError] = useState(false);
    const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false); // New state for modal visibility

    const handleInputChange = (event) => {
        const input = event.target.value.replace(/[^0-9]/g, '').slice(0, 16);
        const formattedInput = formatCardNumber(input);
        setCardNumber(formattedInput);
        setIsValidCardNumber(validateCardNumber(formattedInput));
    };

    const formatCardNumber = (cardNumber) => {
        const regex = /(\d{4})(?=\d)/g;
        return cardNumber.replace(regex, '$1 ');
    };

    const validateCardNumber = (cardNumber) => {
        return /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/.test(cardNumber);
    };

    const handleNameInputChange = (event) => {
        const input = event.target.value.replace(/[^A-Za-z]/g, '');
        if (input.length <= 20) {
            setNameOnCard(input);
            setIsValidNameOnCard(input.length >= 6);
        }
    };

    const handleSecurityCodeChange = (event) => {
        const input = event.target.value.replace(/[^0-9]/g, '').slice(0, 3);
        setSecurityCode(input);
        setIsValidSecurityCode(/^\d{3}$/.test(input));
    };

    const handleExpirationDateChange = (event) => {
        const input = event.target.value.replace(/\D/g, '').slice(0, 4);
        const formattedInput = formatExpirationDate(input);
        setExpirationDate(formattedInput);
        setIsValidExpirationDate(isExpirationDateValid(formattedInput));
    };

    const formatExpirationDate = (date) => {
        const month = date.slice(0, 2);
        const year = date.slice(2);
        return `${month}${year ? `/${year}` : ''}`;
    };

    const isExpirationDateValid = (date) => {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear() % 100; // Get current year's last two digits
        const currentMonth = currentDate.getMonth() + 1; // Get current month (1-12)

        // Extract month and year from the input
        const [inputMonth, inputYear] = date.split('/').map((part) => parseInt(part));

        // Check if the year is in the future or the month is greater than 12
        if (inputYear < currentYear || inputMonth > 12) {
            return false;
        }

        // Check if the year is the current year and the month is in the past
        if (inputYear === currentYear && inputMonth < currentMonth) {
            return false;
        }

        return true;
    };

    const handleAmountSelection = (event) => {
        setSelectedAmount(event.target.value);
        setIsAmountSelectedError(false);
    };

    const handlePayment = () => {
        // Perform validation on button click
        const isCardNumberValid = validateCardNumber(cardNumber);
        const isNameValid = nameOnCard.length >= 6;
        const isSecurityCodeValid = /^\d{3}$/.test(securityCode);
        // const isExpirationDateValid = isExpirationDateValid(expirationDate);
        const isAmountSelected = selectedAmount !== '';

        // Set validity for each input field
        setIsValidCardNumber(isCardNumberValid);
        setIsValidNameOnCard(isNameValid);
        setIsValidSecurityCode(isSecurityCodeValid);
        // setIsValidExpirationDate(isExpirationDateValid);

        // Proceed with payment if all fields are valid
        if (isCardNumberValid && isNameValid && isSecurityCodeValid && isAmountSelected) {
            // Perform payment logic here
            console.log('Payment successful!');
            setIsPaymentSuccessful(true);
            setIsModalVisible(true); // Show the modal on successful payment
        } else {
            setIsAmountSelectedError(!isAmountSelected);
        }
    };

    const closeModal = () => {
        setIsModalVisible(false);
        // window.location = "/Home";
    };

    // ! post payment info
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Retrieve payment information from form fields
        const paymentData = {
            cardNumber,
            nameOnCard,
            securityCode,
            expirationDate,
            amountOfDonation: selectedAmount,
        };
        console.log(paymentData)
        try {
            const response = await axios.post('http://localhost:3100/api/data', paymentData);
            console.log(response.data.message);
            // Display success message or perform any other actions
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                console.error('Server Error:', error.response.status);
                console.error('Error:', error.response.data.error);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('No response received:', error.request);
            } else {
                // Something happened in setting up the request that triggered an error
                console.error('Error:', error.message);
            }
            // Display error message or perform any other actions
        }
    };



    return (
        <div>

            <form onSubmit={handleSubmit} className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
                <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700" style={{ maxWidth: 600 }}>
                    <div className="w-full pt-1 pb-5">
                        <div className="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
                            <i className="mdi mdi-credit-card-outline text-3xl" />
                        </div>
                    </div>
                    <div className="mb-10">
                        <h1 className="text-center font-bold text-xl uppercase">ScholarFund Donate</h1>
                        <div className="flex justify-center items-center mt-3">
                            <div className="form-radio">
                                <input
                                    type="radio"
                                    name="donationAmount"
                                    id="radio1"
                                    value="10"
                                    onChange={handleAmountSelection}
                                />
                                <label htmlFor="radio1" className="text-sm ml-2">
                                    10$
                                </label>
                            </div>
                            <div className="form-radio ml-4">
                                <input
                                    type="radio"
                                    name="donationAmount"
                                    id="radio2"
                                    value="25"
                                    onChange={handleAmountSelection}
                                />
                                <label htmlFor="radio2" className="text-sm ml-2">
                                    25$
                                </label>
                            </div>
                            <div className="form-radio ml-4">
                                <input
                                    type="radio"
                                    name="donationAmount"
                                    id="radio3"
                                    value="50"
                                    onChange={handleAmountSelection}
                                />
                                <label htmlFor="radio3" className="text-sm ml-2">
                                    50$
                                </label>
                            </div>
                            {isAmountSelectedError && (
                                <p className="text-red-500 text-sm mt-2">Please select a donation amount.</p>
                            )}
                        </div>

                    </div>
                    <div className="mb-3">
                        <label className="font-bold text-sm mb-2 ml-1">Name on card</label>
                        <div>
                            <input
                                className={`w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:ring-teal-500 transition-colors ${nameOnCard.length < 6 || nameOnCard.length > 20 ? 'border-red-500' : ''}`}
                                placeholder="John Smith"
                                type="text"
                                value={nameOnCard}
                                onChange={handleNameInputChange}
                                required
                            />
                        </div>
                        {(nameOnCard.length < 6 || nameOnCard.length > 20) && (
                            <p className="text-red-500 text-sm">Name must be between 6 and 20 characters</p>
                        )}
                    </div>
                    <div className="mb-3">
                        <label className="font-bold text-sm mb-2 ml-1">Card number</label>
                        <div>
                            <input
                                className={`w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:ring-teal-500 transition-colors ${!isValidCardNumber ? 'border-red-500' : ''}`}
                                placeholder="0000 0000 0000 0000"
                                type="text"
                                value={cardNumber}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        {!isValidCardNumber && (
                            <p className="text-red-500 text-sm">Please enter a valid 16-digit card number</p>
                        )}
                    </div>
                    <div className="mb-3">
                        <label className="font-bold text-sm mb-2 ml-1">Expiration date</label>
                        <input
                            type="text"
                            id="expiration-date"
                            name="expiration-date"
                            placeholder="MM/YY"
                            className={`mt-1 block w-1/2 rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm shadow-sm outline-none transition focus:ring-2 ${!isValidExpirationDate ? 'ring-red-500' : 'ring-teal-500'}`}
                            maxLength="5"
                            value={expirationDate}
                            onChange={handleExpirationDateChange}
                            required
                        />
                        {!isValidExpirationDate && (
                            <p className="text-red-500 text-sm">Please enter a valid expiration date</p>
                        )}
                    </div>
                    <div className="mb-10">
                        <label className="font-bold text-sm mb-2 ml-1">Security code</label>
                        <div>
                            <input
                                className={`w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors ${!isValidSecurityCode ? 'border-red-500' : ''}`}
                                placeholder="123"
                                type="text"
                                value={securityCode}
                                onChange={handleSecurityCodeChange}
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                            onClick={handlePayment}
                        >
                            <i className="mdi mdi-lock-outline mr-1" /> PAY NOW
                        </button>
                        {isModalVisible && (
                            <div className="fixed inset-0 flex items-center justify-center z-50">
                                <div className="bg-white rounded-lg p-4">
                                    {isPaymentSuccessful && (
                                        <p className="text-green-500 text-sm mt-2">
                                            Your donation of {selectedAmount}$ has been successful.
                                        </p>
                                    )}
                                    {/* <p className="text-green-500 text-sm mb-4">
                                        Your donation of {selectedAmount}$ has been successful.
                                    </p> */}
                                    <button
                                        className="block bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-2 font-semibold"
                                        onClick={closeModal}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </form>

        </div >
    )
}

export default Checkout;