document.addEventListener('DOMContentLoaded', () => {
    let financialResults = {};

    // Helper function to format a number with commas
    function formatNumberWithCommas(value) {
        const digitsOnly = value.replace(/[^0-9-]/g, '');
        const number = parseFloat(digitsOnly);
        if (isNaN(number)) return '';
        return number.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    }

    // Function to format input while typing, preserving cursor position
    function formatInputField(input) {
        const cursorPosition = input.selectionStart;
        const originalLength = input.value.length;
        const rawValue = input.value.replace(/[^0-9-]/g, '');
        const formattedValue = formatNumberWithCommas(rawValue);

        input.value = formattedValue;

        const newLength = formattedValue.length;
        const addedChars = newLength - originalLength;
        const newCursorPosition = cursorPosition + addedChars;
        input.setSelectionRange(newCursorPosition, newCursorPosition);
    }

    // List of all input fields to format
    const inputFields = [
        'totalIncome',
        'rentalIncome',
        'dividendIncome',
        'personalLoanPayments',
        'carLoanPayments',
        'homeLoanPayments',
        'schoolingExpenses',
        'groceryExpenses',
        'transportationExpenses',
        'otherExpenses',
        'cash',
        'currentRentAssets',
        'currentDividendAssets',
        'realEstate1',
        'realEstate2',
        'gold',
        'stocks',
        'crypto',
        'currentLiabilities',
        'personalLoanLiability',
        'carLoanLiability',
        'homeLoanLiability'
    ];

    // Add input event listeners to all fields for real-time formatting
    inputFields.forEach(fieldId => {
        const input = document.getElementById(fieldId);
        if (input) {
            input.addEventListener('input', () => {
                formatInputField(input);
            });

            // Format the initial value on page load
            formatInputField(input);
        }
    });

    // Mobile menu toggle
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');

    navbarToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
        navbarMenu.classList.toggle('hidden');
    });

    // Function to calculate financial metrics
    function calculateFinancialMetrics() {
        // Get input values and remove commas before parsing
        const totalIncome = parseFloat(document.getElementById('totalIncome').value.replace(/,/g, '')) || 0;

        // Loans Installments
        const personalLoanPayments = parseFloat(document.getElementById('personalLoanPayments').value.replace(/,/g, '')) || 0;
        const carLoanPayments = parseFloat(document.getElementById('carLoanPayments').value.replace(/,/g, '')) || 0;
        const homeLoanPayments = parseFloat(document.getElementById('homeLoanPayments').value.replace(/,/g, '')) || 0;
        const totalDebtPayments = personalLoanPayments + carLoanPayments + homeLoanPayments;

        // Expenses
        const schoolingExpenses = parseFloat(document.getElementById('schoolingExpenses').value.replace(/,/g, '')) || 0;
        const groceryExpenses = parseFloat(document.getElementById('groceryExpenses').value.replace(/,/g, '')) || 0;
        const transportationExpenses = parseFloat(document.getElementById('transportationExpenses').value.replace(/,/g, '')) || 0;
        const otherExpenses = parseFloat(document.getElementById('otherExpenses').value.replace(/,/g, '')) || 0;
        const monthlyExpenses = schoolingExpenses + groceryExpenses + transportationExpenses + otherExpenses;

        // Current Assets
        const cash = parseFloat(document.getElementById('cash').value.replace(/,/g, '')) || 0;
        const currentRentAssets = parseFloat(document.getElementById('currentRentAssets').value.replace(/,/g, '')) || 0;
        const currentDividendAssets = parseFloat(document.getElementById('currentDividendAssets').value.replace(/,/g, '')) || 0;
        const currentAssets = cash + currentRentAssets + currentDividendAssets;

        // Fixed Assets
        const realEstate1 = parseFloat(document.getElementById('realEstate1').value.replace(/,/g, '')) || 0;
        const realEstate2 = parseFloat(document.getElementById('realEstate2').value.replace(/,/g, '')) || 0;
        const gold = parseFloat(document.getElementById('gold').value.replace(/,/g, '')) || 0;
        const stocks = parseFloat(document.getElementById('stocks').value.replace(/,/g, '')) || 0;
        const crypto = parseFloat(document.getElementById('crypto').value.replace(/,/g, '')) || 0;
        const fixedAssets = realEstate1 + realEstate2 + gold + stocks + crypto;

        // Liabilities
        const currentLiabilities = parseFloat(document.getElementById('currentLiabilities').value.replace(/,/g, '')) || 0;
        const personalLoanLiability = parseFloat(document.getElementById('personalLoanLiability').value.replace(/,/g, '')) || 0;
        const carLoanLiability = parseFloat(document.getElementById('carLoanLiability').value.replace(/,/g, '')) || 0;
        const homeLoanLiability = parseFloat(document.getElementById('homeLoanLiability').value.replace(/,/g, '')) || 0;
        const longTermLiabilities = personalLoanLiability + carLoanLiability + homeLoanLiability;

        // Calculate intermediate values
        const totalAssets = currentAssets + fixedAssets;
        const totalLiabilities = currentLiabilities + longTermLiabilities;

        // Calculate ratios
        const emergencyFundRatio = monthlyExpenses !== 0 ? (currentAssets / monthlyExpenses) : 0;
        const emergencyFundDays = emergencyFundRatio * 30; // Convert months to days (assuming 30 days/month)
        const personalDebtServiceRatio = totalIncome !== 0 ? (totalDebtPayments / totalIncome) : 0;
        const debtToAssetRatio = totalAssets !== 0 ? (totalLiabilities / totalAssets) : 0;
        const currentRatio = currentLiabilities !== 0 ? (currentAssets / currentLiabilities) : 0;

        // Store results
        financialResults = {
            emergencyFundRatio,
            emergencyFundDays,
            personalDebtServiceRatio,
            debtToAssetRatio,
            currentRatio
        };

        return financialResults;
    }

    // Function to display results on main page
    function displayResults(results) {
        document.getElementById('emergencyFundRatio').textContent = `${results.emergencyFundRatio.toFixed(2)} months (${Math.round(results.emergencyFundDays)} days)`;
        const emergencyFundStatus = results.emergencyFundRatio >= 3 && results.emergencyFundRatio <= 6 ?
            { text: 'Within target range (3–6 months)!', class: 'text-green-600' } :
            results.emergencyFundRatio < 3 ?
            { text: 'Below target of 3 months', class: 'text-red-600' } :
            { text: 'Above target of 6 months', class: 'text-yellow-600' };
        const emergencyFundStatusEl = document.getElementById('emergencyFundStatus');
        emergencyFundStatusEl.textContent = emergencyFundStatus.text;
        emergencyFundStatusEl.className = `text-sm mt-1 ${emergencyFundStatus.class}`;

        document.getElementById('personalDebtServiceRatio').textContent = `${results.personalDebtServiceRatio.toFixed(3)} (${(results.personalDebtServiceRatio * 100).toFixed(1)}%)`;
        const personalDebtServiceStatus = results.personalDebtServiceRatio <= 0.36 ?
            { text: "Within target (below 36%)!", class: 'text-green-600' } :
            { text: 'Above target of 36%', class: 'text-red-600' };
        const personalDebtServiceStatusEl = document.getElementById('personalDebtServiceStatus');
        personalDebtServiceStatusEl.textContent = personalDebtServiceStatus.text;
        personalDebtServiceStatusEl.className = `text-sm mt-1 ${personalDebtServiceStatus.class}`;

        document.getElementById('debtToAssetRatio').textContent = `${results.debtToAssetRatio.toFixed(3)} (${(results.debtToAssetRatio * 100).toFixed(1)}%)`;
        const debtToAssetStatus = results.debtToAssetRatio <= 0.40 ?
            { text: 'Within target (below 40%)!', class: 'text-green-600' } :
            { text: 'Above target of 40%', class: 'text-red-600' };
        const debtToAssetStatusEl = document.getElementById('debtToAssetStatus');
        debtToAssetStatusEl.textContent = debtToAssetStatus.text;
        debtToAssetStatusEl.className = `text-sm mt-1 ${debtToAssetStatus.class}`;

        document.getElementById('currentRatio').textContent = results.currentRatio.toFixed(2);
        const currentRatioStatus = results.currentRatio >= 1 ?
            { text: 'Good liquidity (above 1)!', class: 'text-green-600' } :
            { text: 'Low liquidity (below 1)', class: 'text-red-600' };
        const currentRatioStatusEl = document.getElementById('currentRatioStatus');
        currentRatioStatusEl.textContent = currentRatioStatus.text;
        currentRatioStatusEl.className = `text-sm mt-1 ${currentRatioStatus.class}`;

        const resultsSection = document.getElementById('results');
        resultsSection.classList.remove('hidden');
        window.scrollTo({ top: resultsSection.offsetTop - 80, behavior: 'smooth' });

        const resultCards = document.querySelectorAll('.result-card');
        gsap.fromTo(
            resultCards,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out', onStart: () => {
                resultCards.forEach(card => card.classList.add('visible'));
            }}
        );

        const ctx = document.getElementById('ratioChart').getContext('2d');
        if (window.ratioChart && typeof window.ratioChart.destroy === 'function') {
            window.ratioChart.destroy();
        }
        window.ratioChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Emergency Fund', 'Personal Debt Service', 'Debt-to-Asset', 'Current Ratio'],
                datasets: [{
                    label: 'Financial Ratios',
                    data: [
                        results.emergencyFundRatio,
                        results.personalDebtServiceRatio,
                        results.debtToAssetRatio,
                        results.currentRatio
                    ],
                    backgroundColor: ['#8B5CF6', '#F59E0B', '#06B6D4', '#EC4899'],
                    borderColor: ['#6D28D9', '#D97706', '#0891B2', '#BE185D'],
                    borderWidth: 1
                }]
            },
            options: {
                animation: {
                    duration: 1000,
                    easing: 'easeOutQuart'
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: value => value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
                            font: { family: 'Poppins', size: 12 }
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    },
                    x: {
                        ticks: {
                            font: { family: 'Poppins', size: 12 }
                        },
                        grid: {
                            display: false
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: '#1f2937',
                        titleFont: { family: 'Poppins' },
                        bodyFont: { family: 'Poppins' },
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                const value = context.parsed.y;
                                if (context.dataIndex === 1 || context.dataIndex === 2) {
                                    return label + value.toFixed(2) + ' (' + (value * 100).toFixed(1) + '%)';
                                } else if (context.dataIndex === 0) {
                                    return label + value.toFixed(2) + ' months';
                                } else {
                                    return label + value.toFixed(2);
                                }
                            }
                        }
                    }
                }
            }
        });
    }

    // Function to reset results
    function resetResults() {
        // Reset displayed values
        document.getElementById('emergencyFundRatio').textContent = '0.00 months';
        document.getElementById('emergencyFundStatus').textContent = '';
        document.getElementById('personalDebtServiceRatio').textContent = '0.00 (0%)';
        document.getElementById('personalDebtServiceStatus').textContent = '';
        document.getElementById('debtToAssetRatio').textContent = '0.00 (0%)';
        document.getElementById('debtToAssetStatus').textContent = '';
        document.getElementById('currentRatio').textContent = '0.00';
        document.getElementById('currentRatioStatus').textContent = '';

        // Hide results section
        const resultsSection = document.getElementById('results');
        resultsSection.classList.add('hidden');

        // Clear the chart
        if (window.ratioChart && typeof window.ratioChart.destroy === 'function') {
            window.ratioChart.destroy();
        }

        // Reset stored results
        financialResults = {};
    }

    // Calculate button to display results and show email modal after delay
    const calculateBtn = document.getElementById('calculateBtn');
    const emailModal = document.getElementById('emailModal');
    const recalculateBtn = document.getElementById('recalculateBtn');
    const sendEmailBtn = document.getElementById('sendEmailBtn');
    const emailInput = document.getElementById('emailInput');

    calculateBtn.addEventListener('click', () => {
        // Calculate and display results immediately
        financialResults = calculateFinancialMetrics();
        displayResults(financialResults);

        // Show email modal after 1 second and blur background
        setTimeout(() => {
            emailModal.classList.remove('hidden');
            document.querySelector('.wave-bg').classList.add('blurred');
            document.querySelector('nav').classList.add('blurred');
            document.querySelector('.footer').classList.add('blurred');
            gsap.fromTo(
                emailModal.querySelector('.glass-card'),
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' }
            );
        }, 1000);
    });

    // Recalculate button to clear results and close modal
    recalculateBtn.addEventListener('click', () => {
        gsap.to(emailModal.querySelector('.glass-card'), {
            scale: 0.8,
            opacity: 0,
            duration: 0.3,
            ease: 'back.in(1.7)',
            onComplete: () => {
                emailModal.classList.add('hidden');
                emailInput.value = '';
                // Remove blur from background
                document.querySelector('.wave-bg').classList.remove('blurred');
                document.querySelector('nav').classList.remove('blurred');
                document.querySelector('.footer').classList.remove('blurred');
                // Reset results
                resetResults();
                // Scroll back to input section
                const inputsSection = document.getElementById('inputs');
                window.scrollTo({ top: inputsSection.offsetTop - 80, behavior: 'smooth' });
            }
        });
    });

    // Send email with results using Google Script
    sendEmailBtn.addEventListener('click', async () => {
        const email = emailInput.value.trim();
        if (!email) {
            alert('Please enter a valid email address.');
            return;
        }

        const data = {
            email: email,
            results: financialResults
        };

        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbzbRYkhTeYjiq1xa9x7-Vr3p2VSMu_cnoHT0RVsG6E0NeCa9HjCMeX9toC7W0kl_Y63/exec', {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain'
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();
            if (result.status === 'success') {
                alert('Your results have been successfully sent to the email.');
                gsap.to(emailModal.querySelector('.glass-card'), {
                    scale: 0.8,
                    opacity: 0,
                    duration: 0.3,
                    ease: 'back.in(1.7)',
                    onComplete: () => {
                        emailModal.classList.add('hidden');
                        emailInput.value = '';
                        // Remove blur from background
                        document.querySelector('.wave-bg').classList.remove('blurred');
                        document.querySelector('nav').classList.remove('blurred');
                        document.querySelector('.footer').classList.remove('blurred');
                        // Reset results after email is sent
                        resetResults();
                        // Scroll back to input section
                        const inputsSection = document.getElementById('inputs');
                        window.scrollTo({ top: inputsSection.offsetTop - 80, behavior: 'smooth' });
                    }
                });
            } else {
                alert(`Failed to send email: ${result.message}`);
            }
        } catch (error) {
            alert('An error occurred while sending the email. Please try again.');
            console.error('Error:', error);
        }
    });

    // Email button in results section
    const emailBtn = document.getElementById('emailBtn');
    emailBtn.addEventListener('click', () => {
        // Re-open the email modal when "Email the Results" is clicked
        emailModal.classList.remove('hidden');
        document.querySelector('.wave-bg').classList.add('blurred');
        document.querySelector('nav').classList.add('blurred');
        document.querySelector('.footer').classList.add('blurred');
        gsap.fromTo(
            emailModal.querySelector('.glass-card'),
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' }
        );
    });
});