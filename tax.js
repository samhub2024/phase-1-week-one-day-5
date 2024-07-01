function calculateNetSalary(basicSalary, benefits) {
    //  Gross Salary
    let grossSalary = basicSalary + benefits;
  
    //  PAYEE (Tax)
    if (grossSalary <= 28895) {
      let payee = grossSalary * 0.1;
    } else if (grossSalary <= 38895) {
      let payee = 9399.5 + (grossSalary - 56395) * 0.25;
    } else {
      let payee = 12699.5 + (grossSalary - 71695) * 0.3;
    }
  
    //  NHIF Deductions
    if (grossSalary <= 5999) {
      let nhif = 150;
    } else if (grossSalary <= 7999) {
      let nhif = 300;
    } else if (grossSalary <= 11999) {
      let nhif = 500;
    } else if (grossSalary <= 17999) {
      let nhif = 750;
    } else {
      let nhif = 1000;
    }
  
    // NSSF Deductions
    let nssf = grossSalary * 0.06;
  
    // Housing Levy
    let housingLevy = grossSalary * 0.015;
  
    //  Net Salary
    let netSalary = grossSalary - payee - nhif - nssf - housingLevy;
    console.log(grossSalary);
    console.log(payee);
    console.log(nhif);
    console.log(nssf);
    console.log(housingLevy);
    console.log(netSalary);
  }