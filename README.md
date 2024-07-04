Date, 2024/07/22
By Sammy Okinyi
Description
It is a series of three different challenges which aim at testing the topics that were covered during the week. The challenges include:
QUIZ 1:
Write a program that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade:

A > 79, B - 60 to 79, C - 49 to 59, D - 40 to 49, E - less 40.

olution
My program uses a prompt function; in one, the user is prompted to enter, the student's mark. Before the grading  begins, the program checks whether the marks input range from 0 - 100, and if so the process proceeds. Otherwise an output is presented to the user that says please enter a mark that ranges from 0-100. Finally, it calculates the student's grade based on the grading system provided in the question and prints the student's  grade. To use the program, simply call the main function, which will prompt the user to input the  marks, and then output the grade to the console.

QUIZ 2:
Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.


Solution
In this program, the function takes one argument which is 'speed'. It uses conditions to test the different car speeds. The speed limit is 70km/s. A speed less than or equal to the speed limit prints "Ok". When the speed is above the speed limit, the program will calculate the number of demerit points per 5km/s passed and prints the number of the demerit points. If the demerit points exceeds 12 , then the program prints "License cancelled" To use the program, simply call the calculateDemeritPoints function, which calculates demerit points and exceeding speed then outputs the number of points depending on the speed  to the console.

QUIZ 3:

Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. NB: Use KRA, NHIF, and NSSF values provided in the link below.


Solution
This program calculates an individual's net salary given their basic salary and benefits which are esssentially the allowances. It consists of several functions to calculate the gross tax, the NHIF deductions, NSSF deductions, the gross salary and finally the net salary which is the main function of the program. The constants at the beginning of the program are sourced from the given links in the question. Loops are used to iterate through the arrays to find the appropriate values needed for calculation. To use the program, simply call the calculateNetSalary function, which will prompt the user to input their basic salary and benefits, and then output the net salary to the console.