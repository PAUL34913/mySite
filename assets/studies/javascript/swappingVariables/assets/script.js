function swapVariables() {

    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

    document.getElementById('outputMessage').textContent = "Output";

    document.getElementById('chosenMessage').textContent = "Using the numbers you have chosen, the variables have been set as follows:";

    document.getElementById('outputA').textContent = "a = " + num1 + " and b = " + num2;

    [num1, num2] = [num2, num1];
   
    document.getElementById('swapMessage').textContent = "By switching the variables using arrays [a, b] = [b, a], we can see that the variables have now switched places:";

    document.getElementById('outputB').textContent = "a = " + num1 + " and  b = " + num2;
}
