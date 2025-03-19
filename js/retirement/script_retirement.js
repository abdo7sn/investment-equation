// Initialize AutoNumeric for currency inputs and set default calculation
document.addEventListener('DOMContentLoaded', () => {
    new AutoNumeric('#saved-so-far', {
        currencySymbol: '$',
        decimalPlaces: 0,
        digitGroupSeparator: ',',
        decimalCharacter: '.'
    });
    new AutoNumeric('#retirement-expense', {
        currencySymbol: '$',
        decimalPlaces: 0,
        digitGroupSeparator: ',',
        decimalCharacter: '.'
    });

    // Perform initial calculation with default values
    calculateRetirement();

    // Add email validation listener
    const emailInput = document.getElementById('userEmail');
    emailInput.addEventListener('input', validateEmail);

});

function show() {
    const form = document.getElementById('resultsForm');
    form.classList.add('visible');
    calculateRetirement(); // Recalculate with user inputs when showing the form
}

// Calculate Retirement Function
function calculateRetirement() {
    // Get input values with defaults if empty
    const currentAge = parseInt(document.getElementById('current-age').value) || 24;
    const retirementAge = parseInt(document.getElementById('retirement-age').value) || 68;
    const savedSoFar = AutoNumeric.getNumber(document.getElementById('saved-so-far')) || 10000; // Default to $10,000
    const retirementExpenseMonthly = AutoNumeric.getNumber(document.getElementById('retirement-expense')) || 5000; // Monthly expense

    // Calculate years until retirement
    const yearsToRetire = retirementAge - currentAge;

    // Convert monthly expense to yearly
    const retirementExpenseYearly = retirementExpenseMonthly * 12; // $5,000 * 12 = $60,000

    // Calculate total savings needed at retirement (using 4% rule: 25x annual expenses)
    const totalSavingsNeeded = retirementExpenseYearly / 0.04; // $60,000 * 25 = $1,200,000

    // Calculate monthly contribution required
    const annualRate = 0.1; // 10% annual return
    const monthsToRetire = yearsToRetire * 12;

    let monthlyContribution;

    // Future value of initial capital
    const futureValueInitial = savedSoFar * Math.pow(1 + annualRate, yearsToRetire);

    // Denominator part for C formula
    let contributionFactor = 0;
    for (let k = 1; k <= monthsToRetire; k++) {
        let timeFactor = yearsToRetire - (k / 12); // \( t - \frac{k}{n2} \)
        contributionFactor += Math.pow(1 + annualRate, timeFactor);
    }

    // Solve for C (Additional Contribution)
    monthlyContribution = (totalSavingsNeeded - futureValueInitial) / contributionFactor;


    // Calculate the retirement plan table starting from currentYearUTC
    const currentYearUTC = new Date().getUTCFullYear();
    const currentYear = currentYearUTC;
    let totalSavings = savedSoFar;
    const retirementPlan = [];

    for (let year = 0; year <= yearsToRetire; year++) {
        const currentYearValue = currentYear + year;
        const age = currentAge + year;
        const yearlyContribution = monthlyContribution * 12; // Annual contribution
        const interestEarned = totalSavings * annualRate; // Interest for the year
        const netBenefit = year < yearsToRetire ? 0 : retirementExpenseYearly; // Withdrawals start at retirement

        // Add to retirement plan
        retirementPlan.push({
            year: currentYearValue,
            age: age,
            savingsStart: totalSavings,
            contribution: yearlyContribution,
            interest: interestEarned,
            withdrawals: netBenefit,
            savingsEnd: year < yearsToRetire ? totalSavings + yearlyContribution + interestEarned : totalSavings + interestEarned - netBenefit
        });

        // Update total savings for the next year
        totalSavings = year < yearsToRetire ? totalSavings + yearlyContribution + interestEarned : totalSavings + interestEarned - netBenefit;
    }

    // Update results on the page
    console.log(`Monthly Contribution: $${monthlyContribution.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);

    // Store all data in a global object
    window.retirementData = {
        currentAge,
        retirementAge,
        savedSoFar,
        retirementExpenseMonthly,
        retirementExpenseYearly,
        totalSavingsNeeded,
        monthlyContribution,
        yearsToRetire,
        annualRate,
        retirementPlan
    };

    // Add event listener for the "Calculate" button
    const calculateBtn = document.getElementById('calculateBtn'); // Replace with your actual button ID
    if (calculateBtn) {
        calculateBtn.addEventListener('click', function(e) {
            trackCalculateClick() // This will also trigger trackCalculateClick()
        });
    }
    // Save Email And Send calculationData
    const submitBtn = document.getElementById('submitBtn');
    if (submitBtn) {
        submitBtn.replaceWith(submitBtn.cloneNode(true));
        document.querySelector('.submit-btn').addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default form submission

            const emailInput = document.getElementById("userEmail");
            const email = emailInput ? emailInput.value.trim() : "";
            const userNameInput = document.querySelector('input[placeholder="Name"]');
            const userName = userNameInput ? userNameInput.value.trim() : "";

            // Validate inputs
            if (!userName) {
                alert("You must enter your username!");
                return;
            }

            // Ensure calculateRetirement has been called to populate retirementData
            if (!window.retirementData) {
                calculateRetirement();
            }

            // Inside the event listener
            fetch('https://script.google.com/macros/s/AKfycbwebsDClEJ8o5YAsiAsfaTkGJ4Ksnx-CRWJqmumIe-vEj4bAcPBDbjFBEYxFOfUBd9fWw/exec', {
                method: "POST",
                mode: "no-cors", // Enable this to bypass CORS
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    username: userName,
                    finalamount: totalSavingsNeeded,
                    monthlyContribution: monthlyContribution,
                    retirementPlan: retirementPlan
                })
            })
            .then(response => {
                console.log("Request sent (no-cors mode, response not available):", response);
                alert("Results sent successfully! Check your email or spreadsheet to confirm.");
                emailInput.value = "";
                userNameInput.value = "";
            })
            .catch(error => {
                console.error("Error:", error);
                alert("Failed to send results. Check the console for details.");
            });
        });
    }
}

// Function to track "Calculate" button clicks
function trackCalculateClick() {
    fetch('https://script.google.com/macros/s/AKfycbx1f4XUd0DlIHWutNQZKDMDLq9ifFk6OGDGtQBiDSINKgqWiepx9vOP0jTP13za3KqHsw/exec', {
        method: "POST",
        mode: "no-cors", // Enable this to bypass CORS
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ action: "calculate_clicked" })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Click tracked:", data);
        if (data.status === "success") {
            console.log(`Total clicks so far: ${data.clickCount}`);
        }
    })
    .catch(error => {
        console.error("Error tracking click:", error);
    });
}

function validateEmail() {
    const emailInput = document.getElementById('userEmail');
    const submitBtn = document.getElementById('submitBtn');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex

    if (emailPattern.test(emailInput.value)) {
        submitBtn.disabled = false; // Enable button if email is valid
        emailInput.style.borderColor = '#27ae60'; // Green border for valid
    } else {
        submitBtn.disabled = true; // Disable button if email is invalid
        emailInput.style.borderColor = '#e74c3c'; // Red border for invalid
    }
}

// Optional: Prevent form submission if email is invalid (redundant with button disable but added for safety)
document.getElementById('resultsForm').addEventListener('submit', function(e) {
    const emailInput = document.getElementById('userEmail');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        e.preventDefault(); // Stop submission
        alert('Please enter a valid email address.');
    }
});
