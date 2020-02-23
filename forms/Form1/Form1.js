//Initial alert prompting user to choose whether to run the car or home loan function
let userName = prompt('What is your name?')

while (userName !== null) { 

//Prompts in order to get the loan information
  let userNeed = prompt(`Which calculator would you like to use, ${userName}? \n Please enter "car" or "home" in all lowercase. \n Warning - A timeframe of 15 or 30 years is required for the calculator to run. \n Enter "stop" when indicated to prompt the calculator to stop once the loop has finished.`)

//Base function
function loanPayment (P, r, n) {
  return P * (r * (Math.pow((1 + r),n))) / ((Math.pow((1 + r),n)) - 1);
}

//Accumulation of user's loan details
  let initialAmount = parseFloat(prompt('What is the amount of your loan?'))
  let interestRate = parseFloat(prompt('What is the interest rate on your loan in decimal form? \n Example) 11% = 0.11'))
  let length = parseInt(prompt('What is the timeframe of your loan in years?'))

//Calculation for the parameter n
  let numberOfMonths = length * 12

//Calculation of the interestRate as a percent
  let percent = interestRate * 100

//Determine functions
if (userNeed === 'car') {
//Calling the function with the user's loan details as the parameters
  let carPayment = loanPayment(initialAmount, interestRate, numberOfMonths)
//Notification that the monthly payment has been calculated
    alert(`A car loan for ${initialAmount} over ${length} years at ${percent}% interest would have a monthly payment of ${carPayment}.`)
    console.log(`A car loan for ${initialAmount} over ${length} years at ${percent}% interest would have a monthly payment of ${carPayment}.`)
//If the user enter's "home" calculator rather than "car" with the correct timeframe then the following will occur
  } else if ((userNeed === 'home') && ((length === 15) || (length === 30))) {
//Calling the function with the user's loan details as the parameters
    let homePayment = loanPayment(initialAmount, interestRate, numberOfMonths)
//Notification that the monthly payment has been calculated
    alert(`A home loan for ${initialAmount} over ${length} years at ${percent}% interest would have a monthly payment of ${homePayment}.`)
    console.log(`A home loan for ${initialAmount} over ${length} years at ${percent}% interest would have a monthly payment of ${homePayment}.`)
//The user has selected to exit the monthly payment calculator
  } else if (userNeed === 'stop') {
    break;
  } else {
    alert('Please enter a valid option.')
};
}
  
alert('Thank you for using the calculator!')
alert(`Have a wonderful day, ${userName}!`)