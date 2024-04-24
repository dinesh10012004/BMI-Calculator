function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value) / 100; // Convert height to meters
    var bmi = weight / (height * height);

    if (isNaN(bmi)) {
        document.getElementById('result').innerHTML = "Please enter valid weight and height.";
    } else {
        var bmiResult = "Your BMI is " + bmi.toFixed(2) + ". ";
        if (bmi < 18.5) {
            bmiResult += "You are underweight.";
        } else if (bmi >= 18.5 && bmi < 25) {
            bmiResult += "You are normal weight.";
        } else if (bmi >= 25 && bmi < 30) {
            bmiResult += "You are overweight.";
        } else {
            bmiResult += "You are obese.";
        }
        document.getElementById('result').innerHTML = bmiResult;
    }
}
