const formEA = `
    <form class="form-calculator">
        <div class="form-group" id="starting-amount">
            <label for="amount">Starting Amount :</label>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <div class="input-group-text">$</div>
                </div>
                <input type="text" class="form-control" id="amount" value="20,000">
            </div>
        </div>
            
        <div class="form-group" id="after">
            <label for="interest">After :</label>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <div class="input-group-text">years</div>
                </div>
                <input type="text" class="form-control" id="interest" value="10">
            </div>
        </div>
            
        <div class="form-group" id="return-rate">
            <label for="rate">Return Rate :</label>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <div class="input-group-text">%</div>
                </div>
                <input type="text" class="form-control" id="rate" value="10">
            </div>
        </div>
            
        <div class="form-group" id="compound-group">
            <label for="compound">Compound :</label>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <div class="input-group-text">choose</div>
                </div>
                <select id="compound" name="compound" class="form-control">
                    <option value="annually" selected="">annually</option>
                    <option value="semiannually">semiannually</option>
                    <option value="quarterly">quarterly</option>
                    <option value="monthly">monthly</option>
                    <option value="semimonthly">semimonthly</option>
                    <option value="biweekly">biweekly</option>
                    <option value="weekly">weekly</option>
                    <option value="daily">daily</option>
                    <option value="continuously">continuously</option>
                </select>
            </div>
        </div>
        
        <div class="form-group" id="additional-contribution">
            <label for="additional">Additional Contribution :</label>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <div class="input-group-text">$</div>
                </div>
                <input type="text" class="form-control" id="additional" value="1000">
            </div>
        </div>

        <div class="form-group" id="additional-contribution-gruop">
            <label for="additional-contribution-frequancy">Additional Contribution Frequency :</label>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <div class="input-group-text">choose</div>
                </div>
                <select id="additional-contribution-frequancy" name="additional-contribution-frequancy" class="form-control">
                    <option value="annually" selected="">annually</option>
                    <option value="semiannually">semiannually</option>
                    <option value="quarterly">quarterly</option>
                    <option value="monthly">monthly</option>
                    <option value="semimonthly">semimonthly</option>
                    <option value="biweekly">biweekly</option>
                    <option value="weekly">weekly</option>
                    <option value="daily">daily</option>
                    <option value="continuously">continuously</option>
                </select>
            </div>
        </div>

        <div class="form-group">
            <input type="button" class="form-control btn-submit calculate-EA" value="Calculate">
        </div>
    </form>
`;
const emiDetailsEA = `
    <div class="emi-details-head">
        <h3>Your Results</h3>
    </div>
    <div class="emi-details-box">
        <p>End Balance</p>
        <h5>$67,812.27</h5>
    </div>
    <div class="emi-details-box">
        <p>Starting Amount</p>
        <h5>$20,000.00</h5>
    </div>
    <div class="emi-details-box">
        <p>Total Contributions</p>
        <h5>$10,000.00</h5>
    </div>
    <div class="emi-details-box">
        <p>Total Interest</p>
        <h5>$37,812.27</h5>
    </div>
`;
const graphicalRepresentationEA = `
    <h3 class="text-center">Graphical Representation</h3>
    <canvas id="accumulationChartEA" width="400" height="200"></canvas>
`;
const piectxEA = `
    <h3 class="text-center">Pie Chart</h3>
    <hr>
    <canvas id="donutMorrisEA" height="200"></canvas>
    <hr>
    <span class="chart-principal"> Starting Amount </span>
    <br>
    <span class="chart-interest"> Interest </span>
    <br>
    <span class="chart-total"> Total Contributions</span>
`

const formRR = `
    <form class="form-calculator">
        <div class="form-group" id="your-target">
            <label for="amount">Your Target :</label>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <div class="input-group-text">$</div>
                </div>
                <input type="text" class="form-control" id="amount-finally" value="100,000.00">
            </div>
        </div>

        <div class="form-group" id="starting-amount">
            <label for="amount">Starting Amount :</label>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <div class="input-group-text">$</div>
                </div>
                <input type="text" class="form-control" id="amount" value="20,000">
            </div>
        </div>
            
        <div class="form-group" id="after">
            <label for="interest">After :</label>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <div class="input-group-text">years</div>
                </div>
                <input type="text" class="form-control" id="interest" value="10">
            </div>
        </div>
        
        <div class="form-group" id="additional-contribution">
            <label for="additional">Additional Contribution :</label>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <div class="input-group-text">$</div>
                </div>
                <input type="text" class="form-control" id="additional" value="1000">
            </div>
        </div>

        <div class="form-group" id="additional-contribution-group">
            <label for="additional-contribution-frequancy">Additional Contribution Frequency :</label>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <div class="input-group-text">choose</div>
                </div>
                <select id="additional-contribution-frequancy" name="additional-contribution-frequancy" class="form-control">
                    <option value="annually" selected="">annually</option>
                    <option value="semiannually">semiannually</option>
                    <option value="quarterly">quarterly</option>
                    <option value="monthly">monthly</option>
                    <option value="semimonthly">semimonthly</option>
                    <option value="biweekly">biweekly</option>
                    <option value="weekly">weekly</option>
                    <option value="daily">daily</option>
                    <option value="continuously">continuously</option>
                </select>
            </div>
        </div>
        
        <div class="form-group">
            <input type="button" class="form-control btn-submit calculate-RR" value="Calculate">
        </div>
    </form>
`;
const emiDetailsRR = `
    <div class="emi-details-head">
        <h3>Your Results</h3>
    </div>
    <div class="emi-details-box">
        <p>End Balance</p>
        <h5>$100,000.00</h5>
    </div>
    <div class="emi-details-box">
        <p>Starting Amount</p>
        <h5>$20,000.00</h5>
    </div>
    <div class="emi-details-box">
        <p>Return Rate</p>
        <h6>You will need an annual return rate of <span class="highlight">14.848%</span> to reach the target of $100,000.00</h6>
    </div>
    <div class="emi-details-box">
        <p>Total Contributions</p>
        <h5>$10,000.00</h5>
    </div>
    <div class="emi-details-box">
        <p>Total Interest</p>
        <h5>$70,000.00</h5>
    </div>
`;
const graphicalRepresentationRR = `
    <h3 class="text-center">Graphical Representation</h3>
    <canvas id="accumulationChartRR" width="400" height="200"></canvas>
`;
const piectxRR = `
    <h3 class="text-center">Pie Chart</h3>
    <hr>
    <canvas id="donutMorrisRR" height="200"></canvas>
    <hr>
    <span class="chart-principal"> Starting Amount </span>
    <br>
    <span class="chart-interest"> Interest </span>
    <br>
    <span class="chart-total"> Total Contributions</span>
`

const formIL = `
    <form class="form-calculator">
        <div class="form-group" id="your-target">
            <label for="amount">Your Target :</label>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <div class="input-group-text">$</div>
                </div>
                <input type="text" class="form-control" id="amount-finally" value="100,000">
            </div>
        </div>

        <div class="form-group" id="starting-amount">
            <label for="amount">Starting Amount :</label>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <div class="input-group-text">$</div>
                </div>
                <input type="text" class="form-control" id="amount" value="20,000">
            </div>
        </div>
            
        <div class="form-group" id="return-rate">
            <label for="rate">Return Rate :</label>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <div class="input-group-text">%</div>
                </div>
                <input type="text" class="form-control" id="rate" value="10">
            </div>
        </div>
            
        <div class="form-group" id="compound-group">
            <label for="compound">Compound :</label>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <div class="input-group-text">choose</div>
                </div>
                <select id="compound" name="compound" class="form-control">
                    <option value="annually" selected="">annually</option>
                    <option value="semiannually">semiannually</option>
                    <option value="quarterly">quarterly</option>
                    <option value="monthly">monthly</option>
                    <option value="semimonthly">semimonthly</option>
                    <option value="biweekly">biweekly</option>
                    <option value="weekly">weekly</option>
                    <option value="daily">daily</option>
                    <option value="continuously">continuously</option>
                </select>
            </div>
        </div>
        
        
        <div class="form-group" id="additional-contribution">
            <label for="additional">Additional Contribution :</label>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <div class="input-group-text">$</div>
                </div>
                <input type="text" class="form-control" id="additional" value="1000">
            </div>
        </div>
        
        <div class="form-group" id="additional-contribution-gruop">
            <label for="additional-contribution-frequancy">Additional Contribution Frequency :</label>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <div class="input-group-text">choose</div>
                </div>
                <select id="additional-contribution-frequancy" name="additional-contribution-frequancy" class="form-control">
                    <option value="annually" selected="">annually</option>
                    <option value="semiannually">semiannually</option>
                    <option value="quarterly">quarterly</option>
                    <option value="monthly">monthly</option>
                    <option value="semimonthly">semimonthly</option>
                    <option value="biweekly">biweekly</option>
                    <option value="weekly">weekly</option>
                    <option value="daily">daily</option>
                    <option value="continuously">continuously</option>
                </select>
            </div>
        </div>
        
        <div class="form-group">
            <input type="button" class="form-control btn-submit calculate-IL" value="Calculate">
        </div>
    </form>
`;
const emiDetailsIL = `
    <div class="emi-details-head">
        <h3>Your Results</h3>
    </div>
    <div class="emi-details-box">
        <p>End Balance</p>
        <h5>$100,000.00</h5>
    </div>
    <div class="emi-details-box">
        <p>Starting Amount</p>
        <h5>$20,000.00</h5>
    </div>
    <div class="emi-details-box">
        <p>Investment Length</p>
        <h6>You will need to invest <span class="highlight">16.886</span> years to reach the target of $100,000.00.</h6>
    </div>
    <div class="emi-details-box">
        <p>Total Contributions</p>
        <h5>$13,621.03</h5>
    </div>
    <div class="emi-details-box">
        <p>Total Interest</p>
        <h5>$66,378.97</h5>
    </div>
`;
const graphicalRepresentationIL = `
    <h3 class="text-center">Graphical Representation</h3>
    <canvas id="accumulationChartIL" width="400" height="200"></canvas>
`;
const piectxIL = `
    <h3 class="text-center">Pie Chart</h3>
    <hr>
    <canvas id="donutMorrisIL" height="200"></canvas>
    <hr>
    <span class="chart-principal"> Starting Amount </span>
    <br>
    <span class="chart-interest"> Interest </span>
    <br>
    <span class="chart-total"> Total Contributions</span>
`

const formSA = `
    <form class="form-calculator">
        <div class="form-group" id="your-target">
            <label for="amount">Your Target :</label>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <div class="input-group-text">$</div>
                </div>
                <input type="text" class="form-control" id="amount-finally" value="100,000">
            </div>
        </div>
            
        <div class="form-group" id="after">
            <label for="interest">After :</label>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <div class="input-group-text">years</div>
                </div>
                <input type="text" class="form-control" id="interest" value="10">
            </div>
        </div>
            
        <div class="form-group" id="return-rate">
            <label for="rate">Return Rate :</label>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <div class="input-group-text">%</div>
                </div>
                <input type="text" class="form-control" id="rate" value="10">
            </div>
        </div>
            
        <div class="form-group" id="compound-group">
            <label for="compound">Compound :</label>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <div class="input-group-text">choose</div>
                </div>
                <select id="compound" name="compound" class="form-control">
                    <option value="annually" selected="">annually</option>
                    <option value="semiannually">semiannually</option>
                    <option value="quarterly">quarterly</option>
                    <option value="monthly">monthly</option>
                    <option value="semimonthly">semimonthly</option>
                    <option value="biweekly">biweekly</option>
                    <option value="weekly">weekly</option>
                    <option value="daily">daily</option>
                    <option value="continuously">continuously</option>
                </select>
            </div>
        </div>

        <div class="form-group" id="additional-contribution">
            <label for="additional">Additional Contribution :</label>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <div class="input-group-text">$</div>
                </div>
                <input type="text" class="form-control" id="additional" value="1000">
            </div>
        </div>
  
        <div class="form-group" id="additional-contribution-group">
            <label for="additional-contribution-frequancy">Additional Contribution Frequency :</label>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <div class="input-group-text">choose</div>
                </div>
                <select id="additional-contribution-frequancy" name="additional-contribution-frequancy" class="form-control">
                    <option value="annually" selected="">annually</option>
                    <option value="semiannually">semiannually</option>
                    <option value="quarterly">quarterly</option>
                    <option value="monthly">monthly</option>
                    <option value="semimonthly">semimonthly</option>
                    <option value="biweekly">biweekly</option>
                    <option value="weekly">weekly</option>
                    <option value="daily">daily</option>
                    <option value="continuously">continuously</option>
                </select>
            </div>
        </div>

        <div class="form-group">
            <input type="button" class="form-control btn-submit calculate-SA" value="Calculate">
        </div>
    </form>
`;
const emiDetailsSA = `
    <div class="emi-details-head">
        <h3>Your Results</h3>
    </div>
    <div class="emi-details-box">
        <p>End Balance</p>
        <h5>$100,000.00</h5>
    </div>
    <div class="emi-details-box">
        <p>Starting Amount</p>
        <h6>You will need to invest <span class="highlight">$32,409.76</span> at the beginning to reach the target of $100,000.00.</h6>
    </div>
    <div class="emi-details-box">
        <p>Total Contributions</p>
        <h5>$10,000.00</h5>
    </div>
    <div class="emi-details-box">
        <p>Total Interest</p>
        <h5>$57,590.24</h5>
    </div>
`;
const graphicalRepresentationSA = `
    <h3 class="text-center">Graphical Representation</h3>
    <canvas id="accumulationChartSA" width="400" height="200"></canvas>
`;
const piectxSA = `
    <h3 class="text-center">Pie Chart</h3>
    <hr>
    <canvas id="donutMorrisSA" height="200"></canvas>
    <hr>
    <span class="chart-principal"> Starting Amount </span>
    <br>
    <span class="chart-interest"> Interest </span>
    <br>
    <span class="chart-total"> Total Contributions</span>
`

const formAC = `
    <form class="form-calculator">
        <div class="form-group" id="your-target">
            <label for="amount">Your Target :</label>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <div class="input-group-text">$</div>
                </div>
                <input type="text" class="form-control" id="amount-finally" value="100,000">
            </div>
        </div>

        <div class="form-group" id="starting-amount">
            <label for="amount">Starting Amount :</label>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <div class="input-group-text">$</div>
                </div>
                <input type="text" class="form-control" id="amount" value="20,000">
            </div>
        </div>
            
        <div class="form-group" id="after">
            <label for="interest">After :</label>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <div class="input-group-text">years</div>
                </div>
                <input type="text" class="form-control" id="interest" value="5">
            </div>
        </div>
            
        <div class="form-group" id="return-rate">
            <label for="rate">Return Rate :</label>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <div class="input-group-text">%</div>
                </div>
                <input type="text" class="form-control" id="rate" value="6">
            </div>
        </div>
            
        <div class="form-group" id="compound-group">
            <label for="compound">Compound :</label>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <div class="input-group-text">choose</div>
                </div>
                <select id="compound" name="compound" class="form-control">
                    <option value="annually" selected="">annually</option>
                    <option value="semiannually">semiannually</option>
                    <option value="quarterly">quarterly</option>
                    <option value="monthly">monthly</option>
                    <option value="semimonthly">semimonthly</option>
                    <option value="biweekly">biweekly</option>
                    <option value="weekly">weekly</option>
                    <option value="daily">daily</option>
                    <option value="continuously">continuously</option>
                </select>
            </div>
        </div>
  
        <div class="form-group" id="additional-contribution-group">
            <label for="additional-contribution-frequancy">Additional Contribution Frequency :</label>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <div class="input-group-text">choose</div>
                </div>
                <select id="additional-contribution-frequancy" name="additional-contribution-frequancy" class="form-control">
                    <option value="annually" selected="">annually</option>
                    <option value="semiannually">semiannually</option>
                    <option value="quarterly">quarterly</option>
                    <option value="monthly">monthly</option>
                    <option value="semimonthly">semimonthly</option>
                    <option value="biweekly">biweekly</option>
                    <option value="weekly">weekly</option>
                    <option value="daily">daily</option>
                    <option value="continuously">continuously</option>
                </select>
            </div>
        </div>
            
        <div class="form-group">
            <input type="button" class="form-control btn-submit calculate-AC" value="Calculate">
        </div>
    </form>
`;
const emiDetailsAC = `
    <div class="emi-details-head">
        <h3>Your Results</h3>
    </div>
    <div class="emi-details-box">
        <p>Additional Contribution</p>
        <h6>You will need to contribute <span class="highlight">$1,946.79</span> to reach the target of $100,000.00.</h6>
    </div>
    <div class="emi-details-box">
        <p>End Balance</p>
        <h5>$100,000.00</h5>
    </div>
    <div class="emi-details-box">
        <p>Starting Amount</p>
        <h5>$20,000.00</h5>
    </div>
    <div class="emi-details-box">
        <p>Total Contributions</p>
        <h5>$10,000.00</h5>
    </div>
    <div class="emi-details-box">
        <p>Total Interest</p>
        <h5>$57,590.24</h5>
    </div>
`;
const graphicalRepresentationAC = `
    <h3 class="text-center">Graphical Representation</h3>
    <canvas id="accumulationChartAC" width="400" height="200"></canvas>
`;
const piectxAC = `
    <h3 class="text-center">Pie Chart</h3>
    <hr>
    <canvas id="donutMorrisAC" height="200"></canvas>
    <hr>
    <span class="chart-principal"> Starting Amount </span>
    <br>
    <span class="chart-interest"> Interest </span>
    <br>
    <span class="chart-total"> Total Contributions</span>
`

const changeForm = (formType) => {
    let formHTML = '';
    let emiDetails = '';
    let graphicalRepresentation = '';
    let pieChart = '';

    switch (formType) {
        case 'formEA':
            formHTML = formEA; 
            emiDetails = emiDetailsEA;
            graphicalRepresentation = graphicalRepresentationEA;
            pieChart = piectxEA;
            break;
        case 'formRR':
            formHTML = formRR; 
            emiDetails = emiDetailsRR;
            graphicalRepresentation = graphicalRepresentationRR;
            pieChart = piectxRR;
            break;
        case 'formIL':
            formHTML = formIL; 
            emiDetails = emiDetailsIL;
            graphicalRepresentation = graphicalRepresentationIL;
            pieChart = piectxIL;
            break;
        case 'formSA':
            formHTML = formSA;
            emiDetails = emiDetailsSA; 
            graphicalRepresentation = graphicalRepresentationSA;
            pieChart = piectxSA;
            break;
        case 'formAC':
            formHTML = formAC;
            emiDetails = emiDetailsAC; 
            graphicalRepresentation = graphicalRepresentationAC;
            pieChart = piectxAC;
            break;
        default:
            formHTML = formEA;
            emiDetails = emiDetailsEA;
            graphicalRepresentation = graphicalRepresentationEA;
            pieChart = piectxEA;
    }

    document.querySelector('.form-container').innerHTML = formHTML;
    document.querySelector('.emi-details').innerHTML = emiDetails;
    document.querySelector('.graphical-representation').innerHTML = graphicalRepresentation;
    document.querySelector('.pie-chart').innerHTML = pieChart;
    localStorage.setItem('selectedForm', formType);

    attachFormHandlers(formType);
};

document.addEventListener('DOMContentLoaded', () => {
    const savedFormType = localStorage.getItem('selectedForm') || 'formEA';
    changeForm(savedFormType);

    document.querySelectorAll('.button-row .btn').forEach(button => {
        button.classList.remove('active');
        if (button.getAttribute('data-form') === savedFormType) {
            button.classList.add('active');
        }
    });
});

document.querySelectorAll('.button-row .btn').forEach(button => {
    button.addEventListener('click', function () {
        document.querySelectorAll('.button-row .btn').forEach(btn => {
            btn.classList.remove('active');
        });

        this.classList.add('active');
        changeForm(this.getAttribute('data-form'));
    });
});

// Assigning the appropriate processor to each model
const attachFormHandlers = (formType) => {
    switch (formType) {
        case 'formEA':
            setupEAForm();
            break;
        case 'formRR':
            setupRRForm();
            break;
        case 'formIL':
            setupILForm();
            break;
        case 'formSA':
            setupSAForm();
            break;
        case 'formAC':
            setupACForm();
            break;
        default:
            setupEAForm();
    }
};

let modal = new bootstrap.Modal(document.getElementById("emailModal"));

// Processor for the first model
const setupEAForm = () => {
    // Load saved data from local storage (if any)
    const savedPrincipal = localStorage.getItem('principal');
    const savedYears = localStorage.getItem('years');
    const savedRate = localStorage.getItem('rate');
    const savedCompound = localStorage.getItem('compound');
    const savedEndBalance = localStorage.getItem('endBalance');
    const savedAdditionalContribution = localStorage.getItem('additionalContribution');
    const savedContributionfrequancy = localStorage.getItem('additional-contribution-frequancy');
    const savetotalContribution = localStorage.getItem('totalContribution')
    const savetotalInterest = localStorage.getItem('totalInterest');
    const savedTableData = localStorage.getItem('tableData');
    const savedChartData = localStorage.getItem('chartData'); // NEW: Load saved chart data
    const savedDonutChartData = localStorage.getItem('donutChartData');

    // Prefill the form with saved values
    if (savedPrincipal) document.getElementById('amount').value = savedPrincipal;
    if (savedYears) document.getElementById('interest').value = savedYears;
    if (savedRate) document.getElementById('rate').value = savedRate;
    if (savedCompound) document.getElementById('compound').value = savedCompound;
    if (savedAdditionalContribution) document.getElementById('additional').value = savedAdditionalContribution;
    if (savedContributionfrequancy) document.getElementById('additional-contribution-frequancy').value = savedContributionfrequancy;


    // Function to format the number
    function formatNumber(value) {
        const plainNumber = value.replace(/,/g, '');  
        return plainNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ',');  
    }

    // Display saved results
    if (savedEndBalance) {
        let emiDetailsBoxes = document.querySelectorAll('.emi-details .emi-details-box h5');
        emiDetailsBoxes[0].textContent = `$${formatNumber(savedEndBalance)}`;
        emiDetailsBoxes[1].textContent = `$${formatNumber(savedPrincipal)}`;
        emiDetailsBoxes[2].textContent = `$${formatNumber(savetotalContribution)}`;
        emiDetailsBoxes[3].textContent = `$${formatNumber(savetotalInterest)}`;
    }

    // Display saved table data
    if (savedTableData) {
        const tableData = JSON.parse(savedTableData);
        let tableBody = document.getElementById('accumulation-table');
        tableBody.innerHTML = ''; // Clear existing rows
        tableData.forEach(row => {
            let tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${row.year}</td>
                <td>${row.deposit}</td>
                <td>${row.interest}</td>
                <td>${row.endBalance}</td>
            `;
            tableBody.appendChild(tr);
        });
    }

    // Variable to store the current chart instance
    let accumulationChart;

    // Display saved chart if data exists
    if (savedChartData) {
        const chartData = JSON.parse(savedChartData);
        const ctx = document.getElementById('accumulationChartEA').getContext('2d');

        accumulationChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: chartData.labels,
                datasets: [
                    {
                        label: 'Starting Amount',
                        data: chartData.startingAmounts,
                        backgroundColor: '#007bff',
                    },
                    {
                        label: 'Interest',
                        data: chartData.interests,
                        backgroundColor: '#28a745',
                    },
                    {
                        label: 'Contributions',
                        data: chartData.contributions,
                        backgroundColor: '#ffc107',
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function (value) {
                                return `$${value}`;
                            }
                        }
                    }
                }
            }
        });
    }


    // Variable to store the current Donutchart instance
    let pieChart;
    const parsedData = savedDonutChartData ? JSON.parse(savedDonutChartData) : null;
    if (savedDonutChartData){
        let piectx = document.getElementById('donutMorrisEA').getContext('2d');
        const totalData = parsedData.datasets[0].data.reduce((sum, value) => sum + value, 0);
        pieChart = new Chart(piectx, {
            type: 'doughnut',
            data: parsedData,
            options: {
                responsive: false,
                cutout: '60%',
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function (tooltipItem) {
                                const value = tooltipItem.raw;
                                const percentage = (value / totalData * 100).toFixed(2);
                                return `$${value}  /  ${percentage}%`;
                            }
                        }
                    },
                    
                }
            }
        });
    }

    document.querySelector('.calculate-EA').addEventListener('click', function () {
        // Retrieve input values
        let principal = parseFloat(document.getElementById('amount').value.replace(/,/g, ''));
        let years = parseFloat(document.getElementById('interest').value);
        let rate = parseFloat(document.getElementById('rate').value) / 100;
        let AdditionalContribution = parseFloat(document.getElementById('additional').value.replace(/,/g, ''));
        let compoundElement = document.getElementById('compound');
        let compound = compoundElement.value.trim().toLowerCase();
        let ContributionfrequancyElement = document.getElementById('additional-contribution-frequancy');
        let Contributionfrequancy = ContributionfrequancyElement.value.trim().toLowerCase();

        // Determine the number of compounding periods per year
        let n1;
        switch (compound) {
            case "annually": n1 = 1; break;
            case "semiannually": n1 = 2; break;
            case "quarterly": n1 = 4; break;
            case "monthly": n1 = 12; break;
            case "semimonthly": n1 = 24; break;
            case "biweekly": n1 = 26; break;
            case "weekly": n1 = 52; break;
            case "daily": n1 = 365; break;
            case "continuously": n1 = Infinity; break;
            default:
                console.warn("Unexpected value for compound:", compound);
                n1 = 1;
        }

        // Calculate A1
        let A1;
        if (n1 === Infinity) {
            A1 = principal * Math.exp(rate * years);
        } else {
            A1 = principal * Math.pow(1 + rate / n1, n1 * years);
        }

        // Determine the number of Additional Contribution Frequency periods per year
        let n2;
        switch (Contributionfrequancy) {
            case "annually": n2 = 1; break;
            case "semiannually": n2 = 2; break;
            case "quarterly": n2 = 4; break;
            case "monthly": n2 = 12; break;
            case "semimonthly": n2 = 24; break;
            case "biweekly": n2 = 26; break;
            case "weekly": n2 = 52; break;
            case "daily": n2 = 365; break;
            case "continuously": n2 = Infinity; break;
            default:
                console.warn("Unexpected value for Additional Contribution Frequency:", Contributionfrequancy);
                n2 = 1;
        }

        // Calculate A2: Additional Contributions Growth
        let A2 = 0;
        let totalContributions = n2 * years; 
        for (let k = 1; k <= totalContributions; k++) {
            let timeFactor = years - (k / n2); // \( t - \frac{k}{n2} \)
            A2 += AdditionalContribution * Math.pow(1 + rate, timeFactor);
        }

        // Calculate compound interest
        let A;
        A = A1 + A2;

        principal = principal.toFixed(2);
        AdditionalContribution = AdditionalContribution.toFixed(2);

        principal = formatNumber(principal);
        AdditionalContribution = formatNumber(AdditionalContribution);

        let totalContribution = parseFloat(AdditionalContribution.toString().replace(/,/g, '')) * n2 * years;

        let totalInterest = parseFloat(A.toString().replace(/,/g, '')) - (parseFloat(principal.toString().replace(/,/g, '')) + parseFloat(totalContribution));

        totalContribution = totalContribution.toFixed(2);
        totalInterest = totalInterest.toFixed(2);

        // Save calculated results to local storage
        localStorage.setItem('endBalance', A.toFixed(2));
        localStorage.setItem('principal', principal);
        localStorage.setItem('rate', rate * 100);
        localStorage.setItem('compound', compound);
        localStorage.setItem('additionalContribution', AdditionalContribution);
        localStorage.setItem('additional-contribution-frequancy', Contributionfrequancy);
        localStorage.setItem('totalContribution', totalContribution);
        localStorage.setItem('totalInterest', totalInterest);

        // Update the results in the HTML directly by index
        let emiDetailsBoxes = document.querySelectorAll('.emi-details .emi-details-box h5');
        emiDetailsBoxes[0].textContent = `$${formatNumber(A.toFixed(2))}`;
        emiDetailsBoxes[1].textContent = `$${formatNumber(principal)}`;
        emiDetailsBoxes[2].textContent = `$${formatNumber(totalContribution)}`;
        emiDetailsBoxes[3].textContent = `$${formatNumber(totalInterest)}`;

        let donutChartData = {
            labels: ['Starting Amount', 'Interest', 'Total Contributions'],
            datasets: [{
                data: [
                    parseFloat(principal) * 1000, 
                    parseFloat(totalInterest),
                    parseFloat(totalContribution)
                ],
                backgroundColor: ['#007bff', '#28a745', '#ffc107'],
                borderWidth: 1
            }]
        };

        const totalData = donutChartData.datasets[0].data.reduce((sum, value) => sum + value, 0);

        // Destroy the old donut chart if it exists
        if (pieChart) {
            pieChart.destroy(); 
            pieChart = null; 
        }

        // Re-create the pie chart with new data
        let piectx = document.getElementById('donutMorrisEA').getContext('2d');
        pieChart = new Chart(piectx, {
            type: 'doughnut',
            data: donutChartData,
            options: {
                responsive: false,
                cutout: '60%',
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function (tooltipItem) {
                                const value = tooltipItem.raw;
                                const percentage = (value / totalData * 100).toFixed(2);
                                return `$${value}  /  ${percentage}%`;
                            }
                        }
                    },
                    
                }
            }
        });

        // Save chart data to localStorage
        localStorage.setItem('donutChartData', JSON.stringify(donutChartData));

        // Data for table and Chart
        let tableData = [];
        let labels = [];
        let startingAmounts = [];
        let interests = [];
        let contributions = [];

        let cumulativeInterest = 0;
        for (let i = 1; i <= years; i++) {
            let principal = parseFloat(document.getElementById('amount').value.replace(/,/g, ''));
            let AdditionalContribution = parseFloat(document.getElementById('additional').value.replace(/,/g, ''));

            let A1;
            if (n1 === Infinity) {
                A1 = principal * Math.exp(rate * i);
            } else {
                A1 = principal * Math.pow(1 + rate / n1, n1 * i);
            }
            A1 = A1;

            let A2 = 0;
            let totalContributions = n2 * i; 
            for (let k = 1; k <= totalContributions; k++) {
                let timeFactor = i - (k / n2); // \( t - \frac{k}{n2} \)
                A2 += AdditionalContribution * Math.pow(1 + rate, timeFactor);
            }
            A2 = A2;

            // Calculate compound interest
            let A;
            A = A1 + A2;

            let deposit = (i === 1) ? principal + AdditionalContribution * n2 : AdditionalContribution * n2 ;

            let previousA1;
            let previousA2 = 0;
            let previousI = i - 1;
            if (i > 1){
                if (n1 === Infinity) {
                    previousA1 = principal * Math.exp(rate * previousI);
                } else {
                    previousA1 = principal * Math.pow(1 + rate / n1, n1 * previousI);
                }
                previousA1 = previousA1;
    
                let totalContributions = n2 * i; 
                for (let k = n2 + 1; k <= totalContributions; k++) {
                    let timeFactor = (i) - (k / n2); // \( t - \frac{k}{n2} \)
                    previousA2 += AdditionalContribution * Math.pow(1 + rate, timeFactor);
                }
                previousA2 = previousA2;
            }

            let previousA;
            previousA = previousA1 + previousA2;

            let deposits = AdditionalContribution * n2;

            let interest = (i === 1) ? A - (principal + AdditionalContribution * n2) : (A - (previousA + deposits));

            cumulativeInterest += interest;

            // Calculate Total Contribution
            let contribution = deposits * i;
            
            tableData.push({
                year: i,
                deposit: `$${deposit.toFixed(2)}`,
                interest: `$${interest.toFixed(2)}`,
                endBalance: `$${A.toFixed(2)}`
            });

            // Push data to chart arrays
            interest = A - principal;
            labels.push(`Year ${i}`);
            startingAmounts.push(principal.toFixed(2));
            interests.push(cumulativeInterest.toFixed(2));
            contributions.push(contribution.toFixed(2));

            previousBalance = A;

        }

        // Update table
        let tableBody = document.getElementById('accumulation-table');
        tableBody.innerHTML = '';
        tableData.forEach(row => {
            let tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${row.year}</td>
                <td>${row.deposit}</td>
                <td>${row.interest}</td>
                <td>${row.endBalance}</td>
            `;
            tableBody.appendChild(tr);
        });

        // Save to localStorage
        localStorage.setItem('tableData', JSON.stringify(tableData));

        // Destroy the old chart if it exists
        if (accumulationChart) {
            accumulationChart.destroy(); 
            accumulationChart = null; 
        }

        let ctx = document.getElementById('accumulationChartEA').getContext('2d');
        accumulationChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Starting Amount',
                        data: startingAmounts,
                        backgroundColor: '#007bff',
                    },
                    {
                        label: 'Interest',
                        data: interests,
                        backgroundColor: '#28a745',
                    },
                    {
                        label: 'Contributions',
                        data: contributions,
                        backgroundColor: '#ffc107',
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function (value) {
                                return `$${value}`;
                            }
                        }
                    }
                }
            }
        });

        // Save chart data to localStorage
        localStorage.setItem('chartData', JSON.stringify({
            labels: labels,
            startingAmounts: startingAmounts,
            interests: interests,
            contributions: contributions
        }));

        setTimeout(() => {
            modal.show();
        }, 1000);

        // Save Email And Send calculationData
        const saveEmailButton = document.querySelector('.save-email');
        saveEmailButton.replaceWith(saveEmailButton.cloneNode(true)); 
        document.querySelector('.save-email').addEventListener('click', function () {
            const emailInput = document.getElementById("userEmail");
            const email = emailInput.value.trim();
            const userNameInput = document.getElementById('userName');
            const userName = userNameInput.value.trim();
           
            let calculationDataEA = {
                principal: principal,
                years: years,
                rate: (rate * 100).toFixed(2) + "%", 
                additionalContribution: AdditionalContribution,
                compoundFrequency: compound,
                additionalContributionFrequency: Contributionfrequancy,
                totalContribution: totalContribution,
                totalInterest: totalInterest,
                finalAmount: A.toFixed(2)
            };

            if(!userName){
                alert("You must enter your username!");
            }else{
                fetch('https://script.google.com/macros/s/AKfycbz5jwPBIhGMVsMCo-hq3wZJHs9bcshXDHInGpWXS3JduiApq3p6gTKvkf9j9Z8c7BGuWw/exec', {
                    method: "POST",
                    mode: "no-cors", 
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email: email, username: userName, calculation: calculationDataEA})
                })
                .then(response => console.log("Server Response:", response))
                
                .catch(error => console.error("Error:", error));
    
                alert("Results sent successfully!");
                emailInput.value = ""; 
            }
            modal.hide(); 
        });

        /*
        fetch("php/save_click.php", {
            method: "POST"
        })
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error("Error:", error));
        */
    });
};

// Processor for the second model
const setupRRForm = () => {
    // Load saved data from local storage (if any)
    const savedPrincipalRR = localStorage.getItem('principalRR');
    const savedYears = localStorage.getItem('years');
    const savedRateRR = localStorage.getItem('savedRateRR');
    const savedEndBalanceRR = localStorage.getItem('endBalancesRR');
    const savedStartingAmountRR = localStorage.getItem('startingAmountRR');
    const savedAdditionalContributionRR = localStorage.getItem('additionalContributionRR');
    const savedContributionfrequancyRR = localStorage.getItem('additional-contribution-frequancyRR');
    const savetotalContributionRR = localStorage.getItem('totalContributionRR')
    const savetotalInterestRR = localStorage.getItem('totalInterestRR');
    const savedTableDataRR = localStorage.getItem('tableDataRR');
    const savedChartDataRR = localStorage.getItem('chartDataRR'); // NEW: Load saved chart data
    const savedDonutChartDataRR = localStorage.getItem('donutChartDataRR');

    // Function to format the number
    function formatNumber(value) {
        const plainNumber = value.replace(/,/g, '');  
        return plainNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ',');  
    }

    // If there's any saved data, prefill the form
    if (savedPrincipalRR) document.getElementById('amount').value = savedStartingAmountRR;
    if (savedYears) document.getElementById('interest').value = savedYears;
    if (savedEndBalanceRR) document.getElementById('amount-finally').value = savedEndBalanceRR;
    if (savedAdditionalContributionRR) document.getElementById('additional').value = savedAdditionalContributionRR;
    if (savedContributionfrequancyRR) document.getElementById('additional-contribution-frequancy').value = savedContributionfrequancyRR;

    // If there's any saved calculation data, update the results
    if (savedRateRR) {
        let emiDetailsBoxes = document.querySelectorAll('.emi-details .emi-details-box h5, h6');
        emiDetailsBoxes[0].textContent = `$${formatNumber(savedEndBalanceRR) || 0}`;
        emiDetailsBoxes[1].textContent = `$${formatNumber(savedStartingAmountRR) || 0}`;
        emiDetailsBoxes[2].innerHTML = `You will need an annual return rate of <span class="highlight">${savedRateRR}%</span> to reach the target of $${formatNumber(savedEndBalanceRR) || 0}`;
        emiDetailsBoxes[3].textContent = `$${savetotalContributionRR}`;
        emiDetailsBoxes[4].textContent = `$${savetotalInterestRR}`;
    }

    // Display saved table data
    if (savedTableDataRR) {
        const tableData = JSON.parse(savedTableDataRR);
        let tableBody = document.getElementById('accumulation-table');
        tableBody.innerHTML = ''; // Clear existing rows
        tableData.forEach(row => {
            let tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${row.year}</td>
                <td>${row.deposit}</td>
                <td>${row.interest}</td>
                <td>${row.endBalance}</td>
            `;
            tableBody.appendChild(tr);
        });
    }

    // Variable to store the current chart instance
    let accumulationChart;

    // Display saved chart if data exists
    if (savedChartDataRR) {
        const chartData = JSON.parse(savedChartDataRR);
        const ctx = document.getElementById('accumulationChartRR').getContext('2d');

        accumulationChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: chartData.labels,
                datasets: [
                    {
                        label: 'Starting Amount',
                        data: chartData.startingAmounts,
                        backgroundColor: '#007bff',
                    },
                    {
                        label: 'Interest',
                        data: chartData.interests,
                        backgroundColor: '#28a745',
                    },
                    {
                        label: 'Contributions',
                        data: chartData.contributions,
                        backgroundColor: '#ffc107',
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function (value) {
                                return `$${value}`;
                            }
                        }
                    }
                }
            }
        });
    }

    // Variable to store the current Donutchart instance
    let pieChart;
    const parsedData = savedDonutChartDataRR ? JSON.parse(savedDonutChartDataRR) : null;
    if (savedDonutChartDataRR){
        let piectx = document.getElementById('donutMorrisRR').getContext('2d');
        const totalData = parsedData.datasets[0].data.reduce((sum, value) => sum + value, 0);
        pieChart = new Chart(piectx, {
            type: 'doughnut',
            data: parsedData,
            options: {
                responsive: false,
                cutout: '60%',
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function (tooltipItem) {
                                const value = tooltipItem.raw;
                                const percentage = (value / totalData * 100).toFixed(2);
                                return `$${value}  /  ${percentage}%`;
                            }
                        }
                    },
                    
                }
            }
        });
    }

    // Add event listener for the calculate button
    document.querySelector('.calculate-RR').addEventListener('click', function () {
        // Retrieve input values
        let principal = parseFloat(document.getElementById('amount').value.replace(/,/g, '')) || 0;
        let years = parseFloat(document.getElementById('interest').value) || 0;
        let final = parseFloat(document.getElementById('amount-finally').value.replace(/,/g, '')) || 0;
        let AdditionalContribution = parseFloat(document.getElementById('additional').value.replace(/,/g, ''));
        let ContributionfrequancyElement = document.getElementById('additional-contribution-frequancy');
        let Contributionfrequancy = ContributionfrequancyElement.value.trim().toLowerCase();
        
        principal = principal.toFixed(2);
        final = final.toFixed(2);
        AdditionalContribution = AdditionalContribution.toFixed(2);

        principal = formatNumber(principal);
        final = formatNumber(final);
        AdditionalContribution = formatNumber(AdditionalContribution);

        // Save the input values to local storage
        localStorage.setItem('principalRR', principal);
        localStorage.setItem('years', years);
        localStorage.setItem('endBalancesRR', final);
        localStorage.setItem('additionalContributionRR', AdditionalContribution);
        localStorage.setItem('additional-contribution-frequancyRR', Contributionfrequancy);

        let n1 = 1; // Assuming annual compounding for the principal amount
        // Determine the number of Additional Contribution Frequency periods per year
        let n2;
        switch (Contributionfrequancy) {
            case "annually": n2 = 1; break;
            case "semiannually": n2 = 2; break;
            case "quarterly": n2 = 4; break;
            case "monthly": n2 = 12; break;
            case "semimonthly": n2 = 24; break;
            case "biweekly": n2 = 26; break;
            case "weekly": n2 = 52; break;
            case "daily": n2 = 365; break;
            case "continuously": n2 = Infinity; break;
            default:
                console.warn("Unexpected value for Additional Contribution Frequency:", Contributionfrequancy);
                n2 = 1;
        }

        // Function to calculate future value given an interest rate r
        function calculateFutureValue(r, principal, years, n1, n2, AdditionalContribution) {
            r = r / 100; // Convert percentage to decimal
            let part1 = principal * Math.pow(1 + r / n1, n1 * years); // Compounded principal
            let part2 = 0;
            let totalContributions = n2 * years; 
            for (let k = 1; k <= totalContributions; k++) {
                let timeFactor = years - (k / n2); // \( t - \frac{k}{n2} \)
                part2 += parseFloat(AdditionalContribution.toString().replace(/,/g, '')) * Math.pow(1 + r, timeFactor);
            }
            return part1 + part2;
        }

        // Newton-Raphson method to find the return rate (r)
        function findReturnRate(final, principal, years, n1, n2, AdditionalContribution, maxIterations = 100, tolerance = 0.0000001) {
            let r = 5; // Initial guess (5% interest rate)
            let iteration = 0;

            while (iteration < maxIterations) {
                let f_r = calculateFutureValue(r, parseFloat(principal.toString().replace(/,/g, '')), years, n1, n2, parseFloat(AdditionalContribution.toString().replace(/,/g, ''))) - parseFloat(final.toString().replace(/,/g, ''));
                let f_prime_r = (calculateFutureValue(r + tolerance, parseFloat(principal.toString().replace(/,/g, '')), years, n1, n2, parseFloat(AdditionalContribution.toString().replace(/,/g, ''))) - 
                                calculateFutureValue(r - tolerance, parseFloat(principal.toString().replace(/,/g, '')), years, n1, n2, parseFloat(AdditionalContribution.toString().replace(/,/g, '')))) / (2 * tolerance);

                let new_r = r - f_r / f_prime_r; // Newton-Raphson update

                if (Math.abs(new_r - r) < tolerance) {
                    return new_r; // Found a precise enough solution
                }

                r = new_r;
                iteration++;
            }

            return r; // Return the best estimate after max iterations
        }

        // Find return rate
        let r = findReturnRate(parseFloat(final.toString().replace(/,/g, '')),  parseFloat(principal.toString().replace(/,/g, '')), years, n1, n2, parseFloat(AdditionalContribution.toString().replace(/,/g, '')));
        
        let totalContribution = parseFloat(AdditionalContribution.toString().replace(/,/g, '')) * n2 * years;

        let totalInterest =  parseFloat(final.toString().replace(/,/g, '')) - (parseFloat(principal.toString().replace(/,/g, '')) +  parseFloat(totalContribution.toString().replace(/,/g, '')));

        totalContribution = totalContribution.toFixed(2);
        totalInterest = totalInterest.toFixed(2);

        // Save calculated results to local storage
        localStorage.setItem('startingAmountRR', principal);
        localStorage.setItem('savedRateRR', r.toFixed(3));
        localStorage.setItem('totalContributionRR', totalContribution);
        localStorage.setItem('totalInterestRR', totalInterest);

        // Update the results in the HTML
        let emiDetailsBoxes = document.querySelectorAll('.emi-details .emi-details-box h5, h6');
        emiDetailsBoxes[0].textContent = `$${final}`;
        emiDetailsBoxes[1].textContent = `$${principal}`;
        emiDetailsBoxes[2].innerHTML = `You will need an annual return rate of <span class="highlight">${r.toFixed(3)}%</span> to reach the target of $${final}`;
        emiDetailsBoxes[3].textContent = `$${totalContribution}`;
        emiDetailsBoxes[4].textContent = `$${totalInterest}`;

        let donutChartData = {
            labels: ['Starting Amount', 'Interest', 'Total Contributions'],
            datasets: [{
                data: [
                    parseFloat(principal) * 1000, 
                    parseFloat(totalInterest),
                    parseFloat(totalContribution)
                ],
                backgroundColor: ['#007bff', '#28a745', '#ffc107'],
                borderWidth: 1
            }]
        };

        const totalData = donutChartData.datasets[0].data.reduce((sum, value) => sum + value, 0);

        // Destroy the old donut chart if it exists
        if (pieChart) {
            pieChart.destroy(); 
            pieChart = null; 
        }

        // Re-create the pie chart with new data
        let piectx = document.getElementById('donutMorrisRR').getContext('2d');
        pieChart = new Chart(piectx, {
            type: 'doughnut',
            data: donutChartData,
            options: {
                responsive: false,
                cutout: '60%',
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function (tooltipItem) {
                                const value = tooltipItem.raw;
                                const percentage = (value / totalData * 100).toFixed(2);
                                return `$${value}  /  ${percentage}%`;
                            }
                        }
                    },
                    
                }
            }
        });

        // Save chart data to localStorage
        localStorage.setItem('donutChartDataRR', JSON.stringify(donutChartData));

        let tableData = [];
        let labels = [];
        let startingAmounts = [];
        let interests = [];
        let contributions = [];

        r = r / 100;
        let cumulativeInterest = 0;
        for (let i = 1; i <= years; i++) {
            let principal = parseFloat(document.getElementById('amount').value.replace(/,/g, ''));
            let AdditionalContribution = parseFloat(document.getElementById('additional').value.replace(/,/g, ''));

            let A1;
            if (n1 === Infinity) {
                A1 = principal * Math.exp(r * i);
            } else {
                A1 = principal * Math.pow(1 + r / n1, n1 * i);
            }
            A1 = A1;

            let A2 = 0;
            let totalContributions = n2 * i; 
            for (let k = 1; k <= totalContributions; k++) {
                let timeFactor = i - (k / n2); // \( t - \frac{k}{n2} \)
                A2 += AdditionalContribution * Math.pow(1 + r, timeFactor);
            }
            A2 = A2;

            let A;
            A = A1 + A2;
            
            let deposit = (i === 1) ? principal + AdditionalContribution * n2 : AdditionalContribution * n2 ;

            let previousA1;
            let previousA2 = 0;
            let previousI = i - 1;
            if (i > 1){
                if (n1 === Infinity) {
                    previousA1 = principal * Math.exp(r * previousI);
                } else {
                    previousA1 = principal * Math.pow(1 + r / n1, n1 * previousI);
                }
                previousA1 = previousA1;
    
                let totalContributions = n2 * i; 
                for (let k = n2 + 1; k <= totalContributions; k++) {
                    let timeFactor = (i) - (k / n2); // \( t - \frac{k}{n2} \)
                    previousA2 += AdditionalContribution * Math.pow(1 + r, timeFactor);
                }
                previousA2 = previousA2;
            }

            let previousA;
            previousA = previousA1 + previousA2;

            let deposits = AdditionalContribution * n2;

            let interest = (i === 1) ? A - (principal + AdditionalContribution * n2) : (A - (previousA + deposits));

            cumulativeInterest += interest;

            // Calculate Total Contribution
            let contribution = deposits * i;

            tableData.push({
                year: i,
                deposit: `$${deposit.toFixed(2)}`,
                interest: `$${interest.toFixed(2)}`,
                endBalance: `$${A.toFixed(2)}`
            });

            // Push data to chart arrays
            interest = A - principal
            labels.push(`Year ${i}`);
            startingAmounts.push(principal.toFixed(2));
            interests.push(cumulativeInterest.toFixed(2));
            contributions.push(contribution.toFixed(2));

            previousBalance = A;
        }

        // Update table
        let tableBody = document.getElementById('accumulation-table');
        tableBody.innerHTML = '';
        tableData.forEach(row => {
            let tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${row.year}</td>
                <td>${row.deposit}</td>
                <td>${row.interest}</td>
                <td>${row.endBalance}</td>
            `;
            tableBody.appendChild(tr);
        });

        // Save to localStorage
        localStorage.setItem('tableDataRR', JSON.stringify(tableData));

        if (accumulationChart) {
            accumulationChart.destroy(); 
            accumulationChart = null; 
        }

        let ctx = document.getElementById('accumulationChartRR').getContext('2d');
        accumulationChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Starting Amount',
                        data: startingAmounts,
                        backgroundColor: '#007bff',
                    },
                    {
                        label: 'Interest',
                        data: interests,
                        backgroundColor: '#28a745',
                    },
                    {
                        label: 'Contributions',
                        data: contributions,
                        backgroundColor: '#ffc107',
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function (value) {
                                return `$${value}`;
                            }
                        }
                    }
                }
            }
        });

        // Save chart data to localStorage
        localStorage.setItem('chartDataRR', JSON.stringify({
            labels: labels,
            startingAmounts: startingAmounts,
            interests: interests,
            contributions: contributions
        }));

        setTimeout(() => {
            modal.show();
        }, 1000);

        // Save Email And Send calculationData
        const saveEmailButton = document.querySelector('.save-email');
        saveEmailButton.replaceWith(saveEmailButton.cloneNode(true)); 
        document.querySelector('.save-email').addEventListener('click', function () {
            const emailInput = document.getElementById("userEmail");
            const email = emailInput.value.trim();
            const userNameInput = document.getElementById('userName');
            const userName = userNameInput.value.trim();
            let calculationDataRR = {
                principal: principal,
                years: years,
                rate: (r * 100).toFixed(2) + "%", 
                additionalContribution: AdditionalContribution,
                compoundFrequency: 'annually',
                additionalContributionFrequency: Contributionfrequancy,
                totalContribution: totalContribution,
                totalInterest: totalInterest,
                finalAmount: final
            };

            if(!userName){
                alert("You must enter your username!");
            }else{
                fetch('https://script.google.com/macros/s/AKfycbz5jwPBIhGMVsMCo-hq3wZJHs9bcshXDHInGpWXS3JduiApq3p6gTKvkf9j9Z8c7BGuWw/exec', {
                    method: "POST",
                    mode: "no-cors", 
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email: email, username: userName, calculation: calculationDataRR})
                })
                .then(response => console.log("Server Response:", response))
                
                .catch(error => console.error("Error:", error));
    
                alert("Results sent successfully!");
                emailInput.value = ""; 
            }

            modal.hide();
        });
    });
};

// Processor for the third model
const setupILForm = () => {
    // Load saved data from local storage (if any)
    const savedPrincipalIL = localStorage.getItem('principalIL');
    const savedRateIL = localStorage.getItem('rateIL');
    const savedCompoundIL = localStorage.getItem('compoundIL');
    const savedEndBalanceIL = localStorage.getItem('endBalanceIL');
    const savedAdditionalContributionIL = localStorage.getItem('additionalContributionIL');
    const savedContributionfrequancyIL = localStorage.getItem('additional-contribution-frequancyIL');
    const savedTableDataIL = localStorage.getItem('tableDataIL');
    const savedChartDataIL = localStorage.getItem('chartDataIL'); // NEW: Load saved chart data
    const savedDonutChartDataIL = localStorage.getItem('donutChartDataIL');

    // Load saved results for emi-details
    const savedResultIL1 = localStorage.getItem('emiDetailIL1');
    const savedResultIL2 = localStorage.getItem('emiDetailIL2');
    const savedResultIL3 = localStorage.getItem('emiDetailIL3');
    const savedResultIL4 = localStorage.getItem('emiDetailIL4');
    const savedResultIL5 = localStorage.getItem('emiDetailIL5');

    // If there's any saved data, prefill the form
    if (savedPrincipalIL) document.getElementById('amount').value = savedPrincipalIL;
    if (savedEndBalanceIL) document.getElementById('amount-finally').value = savedEndBalanceIL;
    if (savedRateIL) document.getElementById('rate').value = savedRateIL;
    if (savedCompoundIL) document.getElementById('compound').value = savedCompoundIL;
    if (savedAdditionalContributionIL) document.getElementById('additional').value = savedAdditionalContributionIL;
    if (savedContributionfrequancyIL) document.getElementById('additional-contribution-frequancy').value = savedContributionfrequancyIL;


    // Function to format the number
    function formatNumber(value) {
        const plainNumber = value.replace(/,/g, '');  
        return plainNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ',');  
    }

    // If there's any saved calculation data, show the results
    let emiDetailsBoxes = document.querySelectorAll('.emi-details .emi-details-box h5, h6');
    if (savedResultIL1) emiDetailsBoxes[0].textContent = savedResultIL1;
    if (savedResultIL2) emiDetailsBoxes[1].textContent = savedResultIL2;
    if (savedResultIL3) emiDetailsBoxes[2].innerHTML = savedResultIL3;
    if (savedResultIL4) emiDetailsBoxes[3].textContent = savedResultIL4;
    if (savedResultIL5) emiDetailsBoxes[4].textContent = savedResultIL5;

    // Display saved table data
    if (savedTableDataIL) {
        const tableData = JSON.parse(savedTableDataIL);
        let tableBody = document.getElementById('accumulation-table');
        tableBody.innerHTML = ''; // Clear existing rows
        tableData.forEach(row => {
            let tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${row.year}</td>
                <td>${row.deposit}</td>
                <td>${row.interest}</td>
                <td>${row.endBalance}</td>
            `;
            tableBody.appendChild(tr);
        });
    }

    // Variable to store the current chart instance
    let accumulationChart;

    // Display saved chart if data exists
    if (savedChartDataIL) {
        const chartData = JSON.parse(savedChartDataIL);
        const ctx = document.getElementById('accumulationChartIL').getContext('2d');

        accumulationChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: chartData.labels,
                datasets: [
                    {
                        label: 'Starting Amount',
                        data: chartData.startingAmounts,
                        backgroundColor: '#007bff',
                    },
                    {
                        label: 'Interest',
                        data: chartData.interests,
                        backgroundColor: '#28a745',
                    },
                    {
                        label: 'Contributions',
                        data: chartData.contributions,
                        backgroundColor: '#ffc107',
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function (value) {
                                return `$${value}`;
                            }
                        }
                    }
                }
            }
        });
    }

    // Variable to store the current Donutchart instance
    let pieChart;
    const parsedData = savedDonutChartDataIL ? JSON.parse(savedDonutChartDataIL) : null;
    if (savedDonutChartDataIL){
        let piectx = document.getElementById('donutMorrisIL').getContext('2d');
        const totalData = parsedData.datasets[0].data.reduce((sum, value) => sum + value, 0);
        pieChart = new Chart(piectx, {
            type: 'doughnut',
            data: parsedData,
            options: {
                responsive: false,
                cutout: '60%',
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function (tooltipItem) {
                                const value = tooltipItem.raw;
                                const percentage = (value / totalData * 100).toFixed(2);
                                return `$${value}  /  ${percentage}%`;
                            }
                        }
                    },
                    
                }
            }
        });
    }
    document.querySelector('.calculate-IL').addEventListener('click', function () {
        // Retrieve input values
        let principal = parseFloat(document.getElementById('amount').value.replace(/,/g, '')) || 0;
        let final = parseFloat(document.getElementById('amount-finally').value.replace(/,/g, '')) || 0;
        let rate = parseFloat(document.getElementById('rate').value) / 100;
        let AdditionalContribution = parseFloat(document.getElementById('additional').value.replace(/,/g, ''));
        let compound = document.getElementById('compound').value.trim().toLowerCase(); // Get the value and trim whitespace
        let ContributionfrequancyElement = document.getElementById('additional-contribution-frequancy');
        let Contributionfrequancy = ContributionfrequancyElement.value.trim().toLowerCase();

        final = final.toFixed(2);
        principal = principal.toFixed(2);
        AdditionalContribution = AdditionalContribution.toFixed(2);

        final = formatNumber(final);
        principal = formatNumber(principal);
        AdditionalContribution = formatNumber(AdditionalContribution);

        // Determine the number of compounding periods per year
        let n1;
        switch (compound) {
            case "annually": n1 = 1; break;
            case "semiannually": n1 = 2; break;
            case "quarterly": n1 = 4; break;
            case "monthly": n1 = 12; break;
            case "semimonthly": n1 = 24; break;
            case "biweekly": n1 = 26; break;
            case "weekly": n1 = 52; break;
            case "daily": n1 = 365; break;
            case "continuously": n1 = Infinity; break;
            default:
                console.warn("Unexpected value for compound:", compound);
                n = 1; // Default value if an unexpected option is selected
        }

        // Determine the number of Additional Contribution Frequency periods per year
        let n2;
        switch (Contributionfrequancy) {
            case "annually": n2 = 1; break;
            case "semiannually": n2 = 2; break;
            case "quarterly": n2 = 4; break;
            case "monthly": n2 = 12; break;
            case "semimonthly": n2 = 24; break;
            case "biweekly": n2 = 26; break;
            case "weekly": n2 = 52; break;
            case "daily": n2 = 365; break;
            case "continuously": n2 = Infinity; break;
            default:
                console.warn("Unexpected value for Additional Contribution Frequency:", Contributionfrequancy);
                n2 = 1;
        }

        // Calculate the number of years (t)
        let t;
        function calculateTime(principal, final, rate, AdditionalContribution, n1, n2) {
            let r_n = rate / n1;        
            let low = 0; 
            let high = 100; 
            let epsilon = 0.00001; 
        
            while (high - low > epsilon) {
                let t = (low + high) / 2;
                
                let compoundPart = principal * Math.pow(1 + r_n, n1 * t);
                
                let contributionPart = 0;
                let totalContributions = n2 * t; 
                for (let k = 1; k <= totalContributions; k++) {
                    let timeFactor = t - (k / n2); // \( t - \frac{k}{n2} \)
                    contributionPart +=  parseFloat(AdditionalContribution.toString().replace(/,/g, '')) * Math.pow(1 + rate, timeFactor);
                }
                
                let currentValue = compoundPart + contributionPart;
        
                if (currentValue < final) {
                    low = t; 
                } else {
                    high = t;
                }
            }
        
            return (low + high) / 2; 
        }

        t = calculateTime(parseFloat(principal.toString().replace(/,/g, '')), parseFloat(final.toString().replace(/,/g, '')), rate, parseFloat(AdditionalContribution.toString().replace(/,/g, '')), n1, n2);
        
        // Save the input values to local storage
        localStorage.setItem('principalIL', principal);
        localStorage.setItem('endBalanceIL', final);
        localStorage.setItem('rateIL', rate * 100); // Store the rate as percentage
        localStorage.setItem('compoundIL', compound);
        localStorage.setItem('additionalContributionIL', AdditionalContribution);
        localStorage.setItem('additional-contribution-frequancyIL', Contributionfrequancy);

        // Save calculated results to local storage
        localStorage.setItem('startingAmountIL', principal);

        let totalContribution = parseFloat(AdditionalContribution.toString().replace(/,/g, '')) * n2 * t;
        totalContribution = totalContribution.toFixed(2);


        let totalInterest = parseFloat(final.toString().replace(/,/g, '')) - (parseFloat(principal.toString().replace(/,/g, '')) +  parseFloat(totalContribution.toString().replace(/,/g, '')));
        totalInterest = totalInterest.toFixed(2);

        totalContribution = formatNumber(totalContribution);
        totalInterest = formatNumber(totalInterest);

        // Update the results in the HTML
        emiDetailsBoxes[0].textContent = `$${final}`;
        emiDetailsBoxes[1].textContent = `$${principal}`;
        emiDetailsBoxes[2].innerHTML = `You will need to invest <span class="highlight">${t.toFixed(3)}</span> years to reach the target of $${final}.`;
        emiDetailsBoxes[3].textContent = `$${totalContribution}`;
        emiDetailsBoxes[4].textContent = `$${totalInterest}`;


        // Save emi-details results to local storage
        localStorage.setItem('emiDetailIL1', emiDetailsBoxes[0].textContent);
        localStorage.setItem('emiDetailIL2', emiDetailsBoxes[1].textContent);
        localStorage.setItem('emiDetailIL3', emiDetailsBoxes[2].innerHTML);
        localStorage.setItem('emiDetailIL4', emiDetailsBoxes[3].textContent);
        localStorage.setItem('emiDetailIL5', emiDetailsBoxes[4].textContent);

        let donutChartData = {
            labels: ['Starting Amount', 'Interest', 'Total Contributions'],
            datasets: [{
                data: [
                    parseFloat(principal) * 1000, 
                    parseFloat(totalInterest) * 1000,
                    parseFloat(totalContribution) * 1000
                ],
                backgroundColor: ['#007bff', '#28a745', '#ffc107'],
                borderWidth: 1
            }]
        };

        const totalData = donutChartData.datasets[0].data.reduce((sum, value) => sum + value, 0);

        // Destroy the old donut chart if it exists
        if (pieChart) {
            pieChart.destroy(); 
            pieChart = null; 
        }

        // Re-create the pie chart with new data
        let piectx = document.getElementById('donutMorrisIL').getContext('2d');
        pieChart = new Chart(piectx, {
            type: 'doughnut',
            data: donutChartData,
            options: {
                responsive: false,
                cutout: '60%',
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function (tooltipItem) {
                                const value = tooltipItem.raw;
                                const percentage = (value / totalData * 100).toFixed(2);
                                return `$${value}  /  ${percentage}%`;
                            }
                        }
                    },
                    
                }
            }
        });

        // Save chart data to localStorage
        localStorage.setItem('donutChartDataIL', JSON.stringify(donutChartData));

        let tableData = [];
        let labels = [];
        let startingAmounts = [];
        let interests = [];
        let contributions = [];
        
        let cumulativeInterest = 0;
        for (let i = 1; i <= t+1; i++) { // Start from 1 so the first calculation happens properly
            let principal = parseFloat(document.getElementById('amount').value.replace(/,/g, ''));
            let AdditionalContribution = parseFloat(document.getElementById('additional').value.replace(/,/g, ''));
            let final = parseFloat(document.getElementById('amount-finally').value.replace(/,/g, '')) || 0;

            let totalYears = Math.round(t);
            let r_n = rate / n1; 
            let contributionFactor = (AdditionalContribution * n2) / n1;

            let A1;
            let A2 = 0;
            let totalContributions = n2 * i;
            if (n1 === n2){
                A1 = principal * Math.pow(1 + r_n, n1 * i);
                A1 = parseFloat(A1.toFixed(2));

                A2 = contributionFactor * ((Math.pow(1 + r_n, n1 * i) - 1) / r_n);
                A2 = parseFloat(A2.toFixed(2));
            } else{
                if (n1 === Infinity) {
                    A1 = principal * Math.exp(rate * i);
                } else {
                    A1 = principal * Math.pow(1 + rate / n1, n1 * i);
                }
                A1 = parseFloat(A1.toFixed(2));
    
                for (let k = 1; k <= totalContributions; k++) {
                    let timeFactor = i - (k / n2); // \( t - \frac{k}{n2} \)
                    A2 += AdditionalContribution * Math.pow(1 + rate, timeFactor);
                }
                A2 = parseFloat(A2.toFixed(2));
            }

            if (i === totalYears){
                A1 = final * 0.5;
                A1 = parseFloat(A1.toFixed(2));

                A2 = final * 0.5;
                A2 = parseFloat(A2.toFixed(2));
            }
            // Calculate compound interest
            let A;
            A = A1 + A2;
            A = A.toFixed(2);

            let n2Final;
            let normalDeposit = AdditionalContribution * n2;
            let deposit;
            if (i === 1) {
                deposit = principal + AdditionalContribution * n2;
            } else if (i === totalYears) {  
                n2Final = n2 * (t - Math.floor(t));
                deposit = AdditionalContribution * n2Final;
            } else {
                deposit = normalDeposit;
            }

            let previousA1;
            let previousA2 = 0;
            if (i > 1){
                if (n1 === n2){
                    previousA1 = principal * Math.pow(1 + r_n, n1 * (i - 1)); 
                    previousA1 = parseFloat(previousA1.toFixed(2));
                    
                    previousA2 = contributionFactor * ((Math.pow(1 + r_n, n1 * (i - 1)) - 1) / r_n);
                    previousA2 = parseFloat(previousA2.toFixed(2));
                }else{
                    if (n1 === Infinity) {
                        previousA1 = principal * Math.exp(rate * i-1);
                    } else {
                        previousA1 = principal * Math.pow(1 + rate / n1, n1 * i-1);
                    }
                    previousA1 = parseFloat(previousA1.toFixed(2));
        
                    for (let k = n2 + 1; k <= totalContributions; k++) {
                        let timeFactor = (i) - (k / n2); // \( t - \frac{k}{n2} \)
                        previousA2 += AdditionalContribution * Math.pow(1 + rate, timeFactor);
                    }
                    previousA2 = parseFloat(previousA2.toFixed(2));
                }
            }
            
            let previousA;
            previousA = previousA1 + previousA2;
            previousA = previousA.toFixed(2);

            let interest;
            interest = (i === 1) ? A - (principal + AdditionalContribution * n2) : (parseFloat(A) - (parseFloat(previousA) + deposit));
           
            // Store the data in the tableData array
            cumulativeInterest += interest;

            // Calculate Total Contribution
            let contribution = parseFloat(AdditionalContribution.toString().replace(/,/g, '')) * n2 * i;
            
            // Format Number of Table Data
            let Atable = formatNumber(A);
            tableData.push({
                year: i,
                deposit: `$${deposit.toFixed(2)}`,
                interest: `$${interest.toFixed(2)}`,
                endBalance: `$${Atable}`
            });

            // Push data to chart arrays
            interest = A - principal;
            labels.push(`Year ${i}`);
            startingAmounts.push(principal.toFixed(2));
            interests.push(cumulativeInterest.toFixed(2));
            contributions.push(contribution.toFixed(2));

            previousBalance = A;

        }
        
        // Update table
        let tableBody = document.getElementById('accumulation-table');
        tableBody.innerHTML = '';
        tableData.forEach(row => {
            let tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${row.year}</td>
                <td>${row.deposit}</td>
                <td>${row.interest}</td>
                <td>${row.endBalance}</td>
            `;
            tableBody.appendChild(tr);
        });

        // Save to localStorage
        localStorage.setItem('tableDataIL', JSON.stringify(tableData));

        // Destroy the old chart if it exists
        if (accumulationChart) {
            accumulationChart.destroy(); 
            accumulationChart = null; 
        }

        let ctx = document.getElementById('accumulationChartIL').getContext('2d');
        accumulationChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Starting Amount',
                        data: startingAmounts,
                        backgroundColor: '#007bff',
                    },
                    {
                        label: 'Interest',
                        data: interests,
                        backgroundColor: '#28a745',
                    },
                    {
                        label: 'Contributions',
                        data: contributions,
                        backgroundColor: '#ffc107',
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function (value) {
                                return `$${value}`;
                            }
                        }
                    }
                }
            }
        });

        // Save chart data to localStorage
        localStorage.setItem('chartDataIL', JSON.stringify({
            labels: labels,
            startingAmounts: startingAmounts,
            interests: interests,
            contributions: contributions
        }));

        setTimeout(() => {
            modal.show();
        }, 1000);

        // Save Email And Send calculationData
        const saveEmailButton = document.querySelector('.save-email');
        saveEmailButton.replaceWith(saveEmailButton.cloneNode(true));
        document.querySelector('.save-email').addEventListener('click', function () {
            const emailInput = document.getElementById("userEmail");
            const email = emailInput.value.trim();
            const userNameInput = document.getElementById('userName');
            const userName = userNameInput.value.trim();
            let calculationData = {
                principal: principal,
                years: t.toFixed(2),
                rate: (rate * 100).toFixed(2) + "%", 
                additionalContribution: AdditionalContribution,
                compoundFrequency: compound,
                additionalContributionFrequency: Contributionfrequancy,
                totalContribution: totalContribution,
                totalInterest: totalInterest,
                finalAmount: final
            };

            if(!userName){
                alert("You must enter your username!");
            }else{
                fetch('https://script.google.com/macros/s/AKfycbz5jwPBIhGMVsMCo-hq3wZJHs9bcshXDHInGpWXS3JduiApq3p6gTKvkf9j9Z8c7BGuWw/exec', {
                    method: "POST",
                    mode: "no-cors", 
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email: email, username: userName, calculation: calculationData})
                })
                .then(response => console.log("Server Response:", response))
                
                .catch(error => console.error("Error:", error));
    
                alert("Results sent successfully!");
                emailInput.value = ""; 
            }

            modal.hide(); 
        });
    });
};

// Processor for the fourth model
const setupSAForm = () => {
    // Load saved data from local storage (if any)
    const savedYearsSA = localStorage.getItem('yearsSA');
    const savedRateSA = localStorage.getItem('rateSA');
    const savedCompoundSA = localStorage.getItem('compoundSA');
    const savedEndBalanceSA = localStorage.getItem('endBalanceSA');
    const savedAdditionalContributionSA = localStorage.getItem('additionalContributionSA');
    const savedContributionfrequancySA = localStorage.getItem('additional-contribution-frequancySA');
    const savedTableDataSA = localStorage.getItem('tableDataSA');
    const savedChartDataSA = localStorage.getItem('chartDataSA'); // NEW: Load saved chart data
    const savedDonutChartDataSA = localStorage.getItem('donutChartDataSA');

    // Load saved results for emi-details
    const savedResultSA1 = localStorage.getItem('emiDetailSA1');
    const savedResultSA2 = localStorage.getItem('emiDetailSA2');
    const savedResultSA3 = localStorage.getItem('emiDetailSA3');
    const savedResultSA4 = localStorage.getItem('emiDetailSA4');

    // Prefill form if saved data exists
    if (savedYearsSA) document.getElementById('interest').value = savedYearsSA;
    if (savedEndBalanceSA) document.getElementById('amount-finally').value = savedEndBalanceSA;
    if (savedRateSA) document.getElementById('rate').value = savedRateSA;
    if (savedCompoundSA) document.getElementById('compound').value = savedCompoundSA;
    if (savedAdditionalContributionSA) document.getElementById('additional').value = savedAdditionalContributionSA;
    if (savedContributionfrequancySA) document.getElementById('additional-contribution-frequancy').value = savedContributionfrequancySA;

    // Function to format the number
    function formatNumber(value) {
        const plainNumber = value.replace(/,/g, '');  
        return plainNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ',');  
    }

    // Show saved results in emi-details
    let emiDetailsBoxes = document.querySelectorAll('.emi-details .emi-details-box h5, h6');
    if (savedResultSA1) emiDetailsBoxes[0].textContent = savedResultSA1;
    if (savedResultSA2) emiDetailsBoxes[1].innerHTML = savedResultSA2;
    if (savedResultSA3) emiDetailsBoxes[2].textContent = savedResultSA3;
    if (savedResultSA4) emiDetailsBoxes[3].textContent = savedResultSA4;
    


    // Display saved table data
    if (savedTableDataSA) {
        const tableData = JSON.parse(savedTableDataSA);
        let tableBody = document.getElementById('accumulation-table');
        tableBody.innerHTML = ''; // Clear existing rows
        tableData.forEach(row => {
            let tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${row.year}</td>
                <td>${row.deposit}</td>
                <td>${row.interest}</td>
                <td>${row.endBalance}</td>
            `;
            tableBody.appendChild(tr);
        });
    }

    // Variable to store the current chart instance
    let accumulationChart;

    // Display saved chart if data exists
    if (savedChartDataSA) {
        const chartData = JSON.parse(savedChartDataSA);
        const ctx = document.getElementById('accumulationChartSA').getContext('2d');

        accumulationChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: chartData.labels,
                datasets: [
                    {
                        label: 'Starting Amount',
                        data: chartData.startingAmounts,
                        backgroundColor: '#007bff',
                    },
                    {
                        label: 'Interest',
                        data: chartData.interests,
                        backgroundColor: '#28a745',
                    },
                    {
                        label: 'Contributions',
                        data: chartData.contributions,
                        backgroundColor: '#ffc107',
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function (value) {
                                return `$${value}`;
                            }
                        }
                    }
                }
            }
        });
    }

    // Variable to store the current Donutchart instance
    let pieChart;
    const parsedData = savedDonutChartDataSA ? JSON.parse(savedDonutChartDataSA) : null;
    if (savedDonutChartDataSA){
        let piectx = document.getElementById('donutMorrisSA').getContext('2d');
        const totalData = parsedData.datasets[0].data.reduce((sum, value) => sum + value, 0);
        pieChart = new Chart(piectx, {
            type: 'doughnut',
            data: parsedData,
            options: {
                responsive: false,
                cutout: '60%',
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function (tooltipItem) {
                                const value = tooltipItem.raw;
                                const percentage = (value / totalData * 100).toFixed(2);
                                return `$${value}  /  ${percentage}%`;
                            }
                        }
                    },
                    
                }
            }
        });
    }
    document.querySelector('.calculate-SA').addEventListener('click', function () {
        // Retrieve input values
        let final = parseFloat(document.getElementById('amount-finally').value.replace(/,/g, '')) || 0;
        let years = parseFloat(document.getElementById('interest').value);
        let rate = parseFloat(document.getElementById('rate').value) / 100;
        let AdditionalContribution = parseFloat(document.getElementById('additional').value.replace(/,/g, ''));
        let compound = document.getElementById('compound').value.trim().toLowerCase();
        let ContributionfrequancyElement = document.getElementById('additional-contribution-frequancy');
        let Contributionfrequancy = ContributionfrequancyElement.value.trim().toLowerCase();

        // Determine the number of compounding periods per year
        let n1;
        switch (compound) {
            case "annually": n1 = 1; break;
            case "semiannually": n1 = 2; break;
            case "quarterly": n1 = 4; break;
            case "monthly": n1 = 12; break;
            case "semimonthly": n1 = 24; break;
            case "biweekly": n1 = 26; break;
            case "weekly": n1 = 52; break;
            case "daily": n1 = 365; break;
            case "continuously": n1 = Infinity; break;
            default:
                console.warn("Unexpected value for compound:", compound);
                n = 1; // Default value if an unexpected option is selected
        }

        // Determine the number of Additional Contribution Frequency periods per year
        let n2;
        switch (Contributionfrequancy) {
            case "annually": n2 = 1; break;
            case "semiannually": n2 = 2; break;
            case "quarterly": n2 = 4; break;
            case "monthly": n2 = 12; break;
            case "semimonthly": n2 = 24; break;
            case "biweekly": n2 = 26; break;
            case "weekly": n2 = 52; break;
            case "daily": n2 = 365; break;
            case "continuously": n2 = Infinity; break;
            default:
                console.warn("Unexpected value for Additional Contribution Frequency:", Contributionfrequancy);
                n2 = 1;
        }

        // Calculate the principal (P)
        let principal;
        if (n1 !== Infinity) {
            let compoundFactor = Math.pow(1 + (rate / n1), n1 * years);
            let contributionFactor = 0;
            let totalContributions = n2 * years; 
            for (let k = 1; k <= totalContributions; k++) {
                let timeFactor = years - (k / n2); // \( t - \frac{k}{n2} \)
                contributionFactor += Math.pow(1 + rate, timeFactor);
            }
            principal = (final - (AdditionalContribution * contributionFactor)) / compoundFactor;
        } else {
            let compoundFactor = Math.exp(rate * years);
            let contributionFactor = (Math.pow(1 + (rate / n2), n2 * years) - 1) / (rate / n2);
        
            principal = (final - (AdditionalContribution * contributionFactor)) / compoundFactor;
        }
        
        final = final.toFixed(2);
        AdditionalContribution = AdditionalContribution.toFixed(2);

        final = formatNumber(final);
        AdditionalContribution = formatNumber(AdditionalContribution);
    
        // Save the input values to local storage
        localStorage.setItem('yearsSA', years);
        localStorage.setItem('endBalanceSA', final);
        localStorage.setItem('rateSA', rate * 100); // Store rate as percentage
        localStorage.setItem('compoundSA', compound);
        localStorage.setItem('additionalContributionSA', AdditionalContribution);
        localStorage.setItem('additional-contribution-frequancySA', Contributionfrequancy);

        let totalContribution = parseFloat(AdditionalContribution.toString().replace(/,/g, '')) * n2 * years;
        totalContribution = totalContribution.toFixed(2);

        let totalInterest = parseFloat(final.toString().replace(/,/g, '')) - (parseFloat(principal.toString().replace(/,/g, '')) + parseFloat(totalContribution));
        totalInterest = totalInterest.toFixed(2);

        let principalShow = principal.toFixed(2)
        // Round results to 2 decimal places
        principalShow = formatNumber(principalShow);

        // Save calculated results to local storage
        localStorage.setItem('principalSA', principalShow);

        totalContribution = formatNumber(totalContribution);
        totalInterest = formatNumber(totalInterest);

        // Update the results in the HTML
        emiDetailsBoxes[0].textContent = `$${final}`;
        emiDetailsBoxes[1].innerHTML = `You will need to invest <span class="highlight">$${principalShow}</span> at the beginning to reach the target of $${final}.`;
        emiDetailsBoxes[2].textContent = `$${totalContribution}`;
        emiDetailsBoxes[3].textContent = `$${totalInterest}`;

        // Save emi-details results to local storage
        localStorage.setItem('emiDetailSA1', emiDetailsBoxes[0].textContent);
        localStorage.setItem('emiDetailSA2', emiDetailsBoxes[1].innerHTML);
        localStorage.setItem('emiDetailSA3', emiDetailsBoxes[2].textContent);
        localStorage.setItem('emiDetailSA4', emiDetailsBoxes[3].textContent);

        
        let donutChartData = {
            labels: ['Starting Amount', 'Interest', 'Total Contributions'],
            datasets: [{
                data: [
                    parseFloat(principal.toString().replace(/,/g, '')), 
                    parseFloat(totalInterest.toString().replace(/,/g, '')),
                    parseFloat(totalContribution.toString().replace(/,/g, ''))
                ],
                backgroundColor: ['#007bff', '#28a745', '#ffc107'],
                borderWidth: 1
            }]
        };

        const totalData = donutChartData.datasets[0].data.reduce((sum, value) => sum + value, 0);

        // Destroy the old donut chart if it exists
        if (pieChart) {
            pieChart.destroy(); 
            pieChart = null; 
        }

        // Re-create the pie chart with new data
        let piectx = document.getElementById('donutMorrisSA').getContext('2d');
        pieChart = new Chart(piectx, {
            type: 'doughnut',
            data: donutChartData,
            options: {
                responsive: false,
                cutout: '60%',
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function (tooltipItem) {
                                const value = tooltipItem.raw;
                                const percentage = (value / totalData * 100).toFixed(2);
                                return `$${value}  /  ${percentage}%`;
                            }
                        }
                    },
                    
                }
            }
        });

        // Save chart data to localStorage
        localStorage.setItem('donutChartDataSA', JSON.stringify(donutChartData));

        let tableData = [];
        let labels = [];
        let startingAmounts = [];
        let interests = [];
        let contributions = [];

        let cumulativeInterest = 0;
        for (let i = 1; i <= years; i++) {
            principal = principal.toString().replace(/,/g, '');
            principal = parseFloat(principal);
            let AdditionalContribution = parseFloat(document.getElementById('additional').value.replace(/,/g, ''));

            let A1;
            if (n1 === Infinity) {
                A1 = principal * Math.exp(rate * i);
            } else {
                A1 = principal * Math.pow(1 + rate / n1, n1 * i);
            }
            A1 = parseFloat(A1.toFixed(2));

            let A2 = 0;
            let totalContributions = n2 * i; 
            for (let k = 1; k <= totalContributions; k++) {
                let timeFactor = i - (k / n2); // \( t - \frac{k}{n2} \)
                A2 += AdditionalContribution * Math.pow(1 + rate, timeFactor);
            }
            A2 = parseFloat(A2.toFixed(2));

            // Calculate compound interest
            let A;
            A = A1 + A2;
            A = A.toFixed(2);

            let deposit = (i === 1) ? principal + AdditionalContribution * n2 : AdditionalContribution * n2 ;

            let previousA1;
            let previousA2 = 0;
            let previousi = i - 1;
            if (i > 1){
                if (n1 === Infinity) {
                    previousA1 = principal * Math.exp(rate * previousi);
                } else {
                    previousA1 = principal * Math.pow(1 + rate / n1, n1 * previousi);
                }
                previousA1 = parseFloat(previousA1.toFixed(2));

                for (let k = n2 + 1; k <= totalContributions; k++) {
                    let timeFactor = (i) - (k / n2); // \( t - \frac{k}{n2} \)
                    previousA2 += AdditionalContribution * Math.pow(1 + rate, timeFactor);
                }
                previousA2 = parseFloat(previousA2.toFixed(2));
            }

            let previousA;
            previousA = previousA1 + previousA2;
            previousA = previousA.toFixed(2);

            let deposits = AdditionalContribution * n2;

            let interest = (i === 1) ? A - (principal + AdditionalContribution * n2) : (A - (previousA + deposits) - deposits);

            cumulativeInterest += interest;

            // Calculate Total Contribution
            let contribution = deposits * i;
            
            tableData.push({
                year: i,
                deposit: `$${deposit.toFixed(2)}`,
                interest: `$${interest.toFixed(2)}`,
                endBalance: `$${A}`
            });

             // Push data to chart arrays
             interest = A - principal;
             labels.push(`Year ${i}`);
             startingAmounts.push(principal.toFixed(2));
             interests.push(cumulativeInterest.toFixed(2));
             contributions.push(contribution.toFixed(2));
 
             previousBalance = A;
 
        }

        // Update table
        let tableBody = document.getElementById('accumulation-table');
        tableBody.innerHTML = '';
        tableData.forEach(row => {
            let tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${row.year}</td>
                <td>${row.deposit}</td>
                <td>${row.interest}</td>
                <td>${row.endBalance}</td>
            `;
            tableBody.appendChild(tr);
        });

        // Save to localStorage
        localStorage.setItem('tableDataSA', JSON.stringify(tableData));

        // Destroy the old chart if it exists
        if (accumulationChart) {
            accumulationChart.destroy(); 
            accumulationChart = null; 
        }

        let ctx = document.getElementById('accumulationChartSA').getContext('2d');
        accumulationChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Starting Amount',
                        data: startingAmounts,
                        backgroundColor: '#007bff',
                    },
                    {
                        label: 'Interest',
                        data: interests,
                        backgroundColor: '#28a745',
                    },
                    {
                        label: 'Contributions',
                        data: contributions,
                        backgroundColor: '#ffc107',
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function (value) {
                                return `$${value}`;
                            }
                        }
                    }
                }
            }
        });

        // Save chart data to localStorage
        localStorage.setItem('chartDataSA', JSON.stringify({
            labels: labels,
            startingAmounts: startingAmounts,
            interests: interests,
            contributions: contributions
        }));

        setTimeout(() => {
            modal.show();
        }, 1000);

        // Save Email And Send calculationData
        const saveEmailButton = document.querySelector('.save-email');
        saveEmailButton.replaceWith(saveEmailButton.cloneNode(true));
        document.querySelector('.save-email').addEventListener('click', function () {
            const emailInput = document.getElementById("userEmail");
            const email = emailInput.value.trim();
            const userNameInput = document.getElementById('userName');
            const userName = userNameInput.value.trim();
            let calculationData = {
                principal: principalShow,
                years: years,
                rate: (rate * 100).toFixed(2) + "%", 
                additionalContribution: AdditionalContribution,
                compoundFrequency: compound,
                additionalContributionFrequency: Contributionfrequancy,
                totalContribution: totalContribution,
                totalInterest: totalInterest,
                finalAmount: final
            };

            if(!userName){
                alert("You must enter your username!");
            }else{
                fetch('https://script.google.com/macros/s/AKfycbz5jwPBIhGMVsMCo-hq3wZJHs9bcshXDHInGpWXS3JduiApq3p6gTKvkf9j9Z8c7BGuWw/exec', {
                    method: "POST",
                    mode: "no-cors", 
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email: email, username: userName, calculation: calculationData})
                })
                .then(response => console.log("Server Response:", response))
                
                .catch(error => console.error("Error:", error));
    
                alert("Results sent successfully!");
                emailInput.value = ""; 
            }

            modal.hide(); 
        });
    });
};

// Processor for the fifth model
const setupACForm = () => {
    // Load saved data from local storage (if any)
    const savedPrincipalAC = localStorage.getItem('principalAC');
    const savedYearsAC = localStorage.getItem('yearsAC');
    const savedRateAC = localStorage.getItem('rateAC');
    const savedCompoundAC = localStorage.getItem('compoundAC');
    const savedEndBalanceAC = localStorage.getItem('endBalanceAC');
    const savedAdditionalContributionAC = localStorage.getItem('additionalContributionAC')
    const savedContributionfrequancyAC = localStorage.getItem('additional-contribution-frequancyAC');
    const savetotalContributionAC = localStorage.getItem('totalContributionAC')
    const savetotalInterestAC = localStorage.getItem('totalInterestAC');
    const savedTableDataAC = localStorage.getItem('tableDataAC');
    const savedChartDataAC = localStorage.getItem('chartDataAC'); // NEW: Load saved chart data
    const savedDonutChartDataAC = localStorage.getItem('donutChartDataAC');

    // Prefill the form with saved values
    if (savedEndBalanceAC) document.getElementById('amount-finally').value = savedEndBalanceAC;
    if (savedPrincipalAC) document.getElementById('amount').value = savedPrincipalAC;
    if (savedYearsAC) document.getElementById('interest').value = savedYearsAC;
    if (savedRateAC) document.getElementById('rate').value = savedRateAC;
    if (savedCompoundAC) document.getElementById('compound').value = savedCompoundAC;
    if (savedContributionfrequancyAC) document.getElementById('additional-contribution-frequancy').value = savedContributionfrequancyAC;

    // Function to format the number
    function formatNumber(value) {
        const plainNumber = value.replace(/,/g, '');  
        return plainNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ',');  
    }

    // Display saved results
    if (savedAdditionalContributionAC) {
        let emiDetailsBoxes = document.querySelectorAll('.emi-details .emi-details-box h5, h6');
        emiDetailsBoxes[0].innerHTML = `You will need to contribute <span class="highlight">$${formatNumber(savedAdditionalContributionAC)}</span> to reach the target of $${formatNumber(savedEndBalanceAC)}`;
        emiDetailsBoxes[1].textContent = `$${formatNumber(savedEndBalanceAC)}`;
        emiDetailsBoxes[2].textContent = `$${formatNumber(savedPrincipalAC)}`;
        emiDetailsBoxes[3].textContent = `$${formatNumber(savetotalContributionAC)}`;
        emiDetailsBoxes[4].textContent = `$${formatNumber(savetotalInterestAC)}`;
    }

    // Display saved table data
    if (savedTableDataAC) {
        const tableData = JSON.parse(savedTableDataAC);
        let tableBody = document.getElementById('accumulation-table');
        tableBody.innerHTML = ''; // Clear existing rows
        tableData.forEach(row => {
            let tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${row.year}</td>
                <td>${row.deposit}</td>
                <td>${row.interest}</td>
                <td>${row.endBalance}</td>
            `;
            tableBody.appendChild(tr);
        });
    }

    // Variable to store the current chart instance
    let accumulationChart;

    // Display saved chart if data exists
    if (savedChartDataAC) {
        const chartData = JSON.parse(savedChartDataAC);
        const ctx = document.getElementById('accumulationChartAC').getContext('2d');

        accumulationChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: chartData.labels,
                datasets: [
                    {
                        label: 'Starting Amount',
                        data: chartData.startingAmounts,
                        backgroundColor: '#007bff',
                    },
                    {
                        label: 'Interest',
                        data: chartData.interests,
                        backgroundColor: '#28a745',
                    },
                    {
                        label: 'Contributions',
                        data: chartData.contributions,
                        backgroundColor: '#ffc107',
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function (value) {
                                return `$${value}`;
                            }
                        }
                    }
                }
            }
        });
    }  

    // Variable to store the current Donutchart instance
    let pieChart;
    const parsedData = savedDonutChartDataAC ? JSON.parse(savedDonutChartDataAC) : null;
    if (savedDonutChartDataAC){
        let piectx = document.getElementById('donutMorrisAC').getContext('2d');
        const totalData = parsedData.datasets[0].data.reduce((sum, value) => sum + value, 0);
        pieChart = new Chart(piectx, {
            type: 'doughnut',
            data: parsedData,
            options: {
                responsive: false,
                cutout: '60%',
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function (tooltipItem) {
                                const value = tooltipItem.raw;
                                const percentage = (value / totalData * 100).toFixed(2);
                                return `$${value}  /  ${percentage}%`;
                            }
                        }
                    },
                    
                }
            }
        });
    }    

    document.querySelector('.calculate-AC').addEventListener('click', function () {
        // Retrieve input values
        let target = parseFloat(document.getElementById('amount-finally').value.replace(/,/g, '')) || 0;
        let principal = parseFloat(document.getElementById('amount').value.replace(/,/g, ''));
        let years = parseFloat(document.getElementById('interest').value);
        let rate = parseFloat(document.getElementById('rate').value) / 100;
        let compoundElement = document.getElementById('compound');
        let compound = compoundElement.value.trim().toLowerCase();
        let ContributionfrequancyElement = document.getElementById('additional-contribution-frequancy');
        let Contributionfrequancy = ContributionfrequancyElement.value.trim().toLowerCase();

        // Determine the number of compounding periods per year
        let n1;
        switch (compound) {
            case "annually": n1 = 1; break;
            case "semiannually": n1 = 2; break;
            case "quarterly": n1 = 4; break;
            case "monthly": n1 = 12; break;
            case "semimonthly": n1 = 24; break;
            case "biweekly": n1 = 26; break;
            case "weekly": n1 = 52; break;
            case "daily": n1 = 365; break;
            case "continuously": n1 = Infinity; break;
            default:
                console.warn("Unexpected value for compound:", compound);
                n1 = 1;
        }

        // Determine the number of Additional Contribution Frequency periods per year
        let n2;
        switch (Contributionfrequancy) {
            case "annually": n2 = 1; break;
            case "semiannually": n2 = 2; break;
            case "quarterly": n2 = 4; break;
            case "monthly": n2 = 12; break;
            case "semimonthly": n2 = 24; break;
            case "biweekly": n2 = 26; break;
            case "weekly": n2 = 52; break;
            case "daily": n2 = 365; break;
            case "continuously": n2 = Infinity; break;
            default:
                console.warn("Unexpected value for Additional Contribution Frequency:", Contributionfrequancy);
                n2 = 1;
        }

        // Calculate AdditionalContribution
        let AdditionalContribution;

        // Future value of principal
        let principalFV = principal * Math.pow(1 + rate / n1, n1 * years);

        // Denominator part for C formula
        let contributionFactor = 0;
        let totalContributions = n2 * years; 
        for (let k = 1; k <= totalContributions; k++) {
            let timeFactor = years - (k / n2); // \( t - \frac{k}{n2} \)
            contributionFactor +=  Math.pow(1 + rate, timeFactor);
        }

        // Solve for C (Additional Contribution)
        AdditionalContribution = (target - principalFV) / contributionFactor;
            
        target = target.toFixed(2);
        principal = principal.toFixed(2);

        target = formatNumber(target);
        principal = formatNumber(principal);

        let totalContribution = parseFloat(AdditionalContribution.toString().replace(/,/g, '')) * n2 * years;

        let totalInterest = parseFloat(target.toString().replace(/,/g, '')) - (parseFloat(principal.toString().replace(/,/g, '')) + parseFloat(totalContribution));

        totalContribution = totalContribution.toFixed(2);
        totalInterest = totalInterest.toFixed(2);

        // Save calculated results to local storage
        localStorage.setItem('endBalanceAC', target);
        localStorage.setItem('principalAC', principal);
        localStorage.setItem('yearsAC', years);
        localStorage.setItem('rateAC', rate * 100);
        localStorage.setItem('compoundAC', compound);
        localStorage.setItem('additionalContributionAC', AdditionalContribution.toFixed(2));
        localStorage.setItem('additional-contribution-frequancyAC', Contributionfrequancy);
        localStorage.setItem('totalContributionAC', totalContribution);
        localStorage.setItem('totalInterestAC', totalInterest);

        // Update the results in the HTML directly by index
        let emiDetailsBoxes = document.querySelectorAll('.emi-details .emi-details-box h5, h6');
        emiDetailsBoxes[0].innerHTML = `You will need to contribute <span class="highlight">$${formatNumber(AdditionalContribution.toFixed(2))}</span> to reach the target of $${formatNumber(target)}`;
        emiDetailsBoxes[1].textContent = `$${formatNumber(target)}`;
        emiDetailsBoxes[2].textContent = `$${formatNumber(principal)}`;
        emiDetailsBoxes[3].textContent = `$${formatNumber(totalContribution)}`;
        emiDetailsBoxes[4].textContent = `$${formatNumber(totalInterest)}`

        let donutChartData = {
            labels: ['Starting Amount', 'Interest', 'Total Contributions'],
            datasets: [{
                data: [
                    parseFloat(principal.toString().replace(/,/g, '')), 
                    parseFloat(totalInterest.toString().replace(/,/g, '')),
                    parseFloat(totalContribution.toString().replace(/,/g, ''))
                ],
                backgroundColor: ['#007bff', '#28a745', '#ffc107'],
                borderWidth: 1
            }]
        };

        const totalData = donutChartData.datasets[0].data.reduce((sum, value) => sum + value, 0);

        // Destroy the old donut chart if it exists
        if (pieChart) {
            pieChart.destroy(); 
            pieChart = null; 
        }

        // Re-create the pie chart with new data
        let piectx = document.getElementById('donutMorrisAC').getContext('2d');
        pieChart = new Chart(piectx, {
            type: 'doughnut',
            data: donutChartData,
            options: {
                responsive: false,
                cutout: '60%',
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function (tooltipItem) {
                                const value = tooltipItem.raw;
                                const percentage = (value / totalData * 100).toFixed(2);
                                return `$${value}  /  ${percentage}%`;
                            }
                        }
                    },
                    
                }
            }
        });

        // Save chart data to localStorage
        localStorage.setItem('donutChartDataAC', JSON.stringify(donutChartData));

        // Data for table and Chart
        let tableData = [];
        let labels = [];
        let startingAmounts = [];
        let interests = [];
        let contributions = [];

        let cumulativeInterest = 0;
        for (let i = 1; i <= years; i++) {
            let principal = parseFloat(document.getElementById('amount').value.replace(/,/g, ''));

            let A1;
            if (n1 === Infinity) {
                A1 = principal * Math.exp(rate * i);
            } else {
                A1 = principal * Math.pow(1 + rate / n1, n1 * i);
            }
            A1 = A1;

            let A2 = 0;
            let totalContributions = n2 * i; 
            for (let k = 1; k <= totalContributions; k++) {
                let timeFactor = i - (k / n2); // \( t - \frac{k}{n2} \)
                A2 += AdditionalContribution * Math.pow(1 + rate, timeFactor);
            }
            A2 = A2;

            // Calculate compound interest
            let A;
            A = A1 + A2;

            let deposit = (i === 1) ? principal + AdditionalContribution * n2 : AdditionalContribution * n2 ;

            let previousA1;
            let previousA2;
            if (i > 1){
                if (n1 === Infinity) {
                    previousA1 = principal * Math.exp(rate * i-1);
                } else {
                    previousA1 = principal * Math.pow(1 + rate / n1, n1 * i-1);
                }
                previousA1 = previousA1;

                previousA2 = 0;
                let totalContributions = n2 * i; 
                for (let k = n2 + 1; k <= totalContributions; k++) {
                    let timeFactor = (i) - (k / n2); // \( t - \frac{k}{n2} \)
                    previousA2 += AdditionalContribution * Math.pow(1 + rate, timeFactor);
                }
                previousA2 = previousA2;
            }

            let previousA;
            previousA = previousA1 + previousA2;

            let deposits = AdditionalContribution * n2;

            let interest = (i === 1) ? A - (principal + AdditionalContribution * n2) : (A - (parseFloat(previousA) + deposits));

            cumulativeInterest += interest;

            // Calculate Total Contribution
            let contribution = deposits * i;
            
            tableData.push({
                year: i,
                deposit: `$${deposit.toFixed(2)}`,
                interest: `$${interest.toFixed(2)}`,
                endBalance: `$${A.toFixed(2)}`
            });

            // Push data to chart arrays
            interest = A - principal;
            labels.push(`Year ${i}`);
            startingAmounts.push(principal.toFixed(2));
            interests.push(cumulativeInterest.toFixed(2));
            contributions.push(contribution.toFixed(2));

            previousBalance = A;

        }

        // Update table
        let tableBody = document.getElementById('accumulation-table');
        tableBody.innerHTML = '';
        tableData.forEach(row => {
            let tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${row.year}</td>
                <td>${row.deposit}</td>
                <td>${row.interest}</td>
                <td>${row.endBalance}</td>
            `;
            tableBody.appendChild(tr);
        });

        // Save to localStorage
        localStorage.setItem('tableDataAC', JSON.stringify(tableData));

        // Destroy the old chart if it exists
        if (accumulationChart) {
            accumulationChart.destroy(); 
            accumulationChart = null; 
        }

        let ctx = document.getElementById('accumulationChartAC').getContext('2d');
        accumulationChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Starting Amount',
                        data: startingAmounts,
                        backgroundColor: '#007bff',
                    },
                    {
                        label: 'Interest',
                        data: interests,
                        backgroundColor: '#28a745',
                    },
                    {
                        label: 'Contributions',
                        data: contributions,
                        backgroundColor: '#ffc107',
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function (value) {
                                return `$${value}`;
                            }
                        }
                    }
                }
            }
        });

        // Save chart data to localStorage
        localStorage.setItem('chartDataAC', JSON.stringify({
            labels: labels,
            startingAmounts: startingAmounts,
            interests: interests,
            contributions: contributions
        }));

        setTimeout(() => {
            modal.show();
        }, 1000);

        // Save Email And Send calculationData
        const saveEmailButton = document.querySelector('.save-email');
        saveEmailButton.replaceWith(saveEmailButton.cloneNode(true));
        document.querySelector('.save-email').addEventListener('click', function () {
            const emailInput = document.getElementById("userEmail");
            const email = emailInput.value.trim();
            const userNameInput = document.getElementById('userName');
            const userName = userNameInput.value.trim();
            let calculationData = {
                principal: principal,
                years: years,
                rate: (rate * 100).toFixed(2) + "%", 
                additionalContribution: AdditionalContribution.toFixed(2),
                compoundFrequency: compound,
                additionalContributionFrequency: Contributionfrequancy,
                totalContribution: totalContribution,
                totalInterest: totalInterest,
                finalAmount: target
            };
            
            if(!userName){
                alert("You must enter your username!");
            }else{
                fetch('https://script.google.com/macros/s/AKfycbz5jwPBIhGMVsMCo-hq3wZJHs9bcshXDHInGpWXS3JduiApq3p6gTKvkf9j9Z8c7BGuWw/exec', {
                    method: "POST",
                    mode: "no-cors", 
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email: email, username: userName, calculation: calculationData})
                })
                .then(response => console.log("Server Response:", response))
                
                .catch(error => console.error("Error:", error));
    
                alert("Results sent successfully!");
                emailInput.value = ""; 
            }
            modal.hide(); 
        });
    });
}

// Load default processor on first boot
changeForm(localStorage.getItem('selectedForm') || 'formEA');

document.addEventListener('DOMContentLoaded', (event) => {
    const inputs = ['amount', 'additional', 'amount-finally'];

    function formatNumber(value) {
        const plainNumber = value.replace(/,/g, '');
        return plainNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    inputs.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('input', (event) => {
                const cursorPosition = element.selectionStart;
                const formattedValue = formatNumber(element.value);
                element.value = formattedValue;
                element.setSelectionRange(cursorPosition, cursorPosition);
            });
        } else {
            console.warn(`Element with id '${id}' not found, skipping.`);
        }
    });
});

// Write Email Right
document.getElementById("userEmail").addEventListener("input", function() {
    let email = this.value;
    let downloadBtn = document.getElementById("download-btn");
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    downloadBtn.disabled = !emailPattern.test(email);
});

// Close Popup Window
document.querySelector('.popup-close').addEventListener('click', function () { 
    if (modal) {
        modal.hide();
    }
});

