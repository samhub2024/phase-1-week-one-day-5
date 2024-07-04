// Constants for taxes

const KRA_TAX_RATES = [
  //  Ech property is representing the upper limit of the income 
   { range1: 0, rate: 0 },          
   { range2: 24000, rate: 0.1 },     
   { range3: 32333, rate: 0.25 },
   { range4: 500000, rate: 0.3 },
   { range5: 800000, rate: 0.325 },
   { range6: Infinity, rate: 0.35 }
 ];
 
 const NHIF_RATES = [ 
    // Each  property representing the lower limit of the income bracket, the NHIF deductions will be used in calculaion
 { range1: 0, rate: 0 },
   { range2: 5999, rate: 150 }, 
   { range3: 7999, rate: 300 },
   { range4: 11999, rate: 400 },
   { range5: 14999, rate: 500 },
   { range6: 19999, rate: 600 },
   { range7: 24999, rate: 750 },
   { range8: 29999, rate: 850 },
   { range9: 34999, rate: 900 },
   { range10: 39999, rate: 950 },
   { range11: 44999, rate: 1000 },
   { range12: 49999, rate: 1100 },
   { range13: 59999, rate: 1200 },
   { range14: 69999, rate: 1300 },
   { range15: 79999, rate: 1400 },
   { range16: 89999, rate: 1500 },
   { range17: 99999, rate: 1600 },
   { range18: Infinity, rate: 1700 }
 ];
 
 const NSSF_RATE = 0.06; // A deduction during calculation
 
 // calculate Gross Tax
 function calculateTax(basicSalary, benefits) {
   let taxableSalary = basicSalary + benefits;
   let tax = 0; 
 
   //the loop will begin from zero
   for (let i = 0; i < KRA_TAX_RATES.length; i++) { 
     const rate = KRA_TAX_RATES[i];                       
 
     if (taxableSalary <= rate.threshold) {
       break;
     }
 
     tax += (rate.threshold - (i > 0 ? KRA_TAX_RATES[i - 1].threshold : 0)) * rate.rate;
   }
 
   tax += (taxableSalary - tax) * KRA_TAX_RATES[KRA_TAX_RATES.length - 1].rate;
 
   return tax;
 }
 
 // calculate NHIF deductions
 function calculateNHIFDeductions(basicSalary) {
   let rate = 0; 
 
   //the loop starts from zero
   for (let i = 0; i < NHIF_RATES.length; i++) {    
     const nhifRate = NHIF_RATES[i];
 
     if (basicSalary <= nhifRate.threshold) {
       rate = nhifRate.rate;
       break;
     }
   }
 
   return rate;
 }
 
 // calculate NSSF deductions
 function calculateNSSFDeductions(basicSalary) {   
   return basicSalary * NSSF_RATE;
 }
 
 // calculate Gross Salary => Gross salary = Basic salary + All Allowances(Benefits)
 function calculateGrossSalary(basicSalary, benefits) {
   return basicSalary + benefits;
 }
 
 // calculate Net Salary -- Net salary = Gross salary - (Rate + Tax + NSSF)
 function calculateNetSalary() {
   const prompt = require("prompt-sync")({sigint:true});
   const basicSalaryString = prompt("Enter your basic salary:"); // Propmts the user to enter their basic salary
   const basicSalary = parseFloat(basicSalaryString);
   const benefitsString = prompt("Enter your total Allowances:"); // Propmts the user to enter their total Allowances
   const benefits = parseFloat(benefitsString);

   if (isNaN(basicSalary) || isNaN(benefits)) {
     console.log("Invalid input. Please enter a number."); // Displayed when a something other than a number is input
     return;
   }
 
   const grossSalary = calculateGrossSalary(basicSalary, benefits);
   const tax = calculateTax(grossSalary, 0);
   const nhifDeductions = calculateNHIFDeductions(basicSalary);
   const nssfDeductions = calculateNSSFDeductions(basicSalary);
 
   const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;
   console.log("The net salary for a Gross Salary of ${grossSalary} is ${netSalary}");
 }
 
 // To use the program, use the function:
 calculateNetSalary();