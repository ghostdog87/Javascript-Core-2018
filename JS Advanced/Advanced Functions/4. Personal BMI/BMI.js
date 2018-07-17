function solve(name, age, weight, height) {
    let bmi = Math.round(weight / Math.pow(height/100,2));
    let status = "";

    if(bmi < 18.5){
        status = "underweight";
    }
    else if(bmi < 25){
        status = "normal";
    }
    else if(bmi < 30){
        status = "overweight";
    }
    else{
        status = "obese";
    }

    let person =
        {
            name: name,
            personalInfo: {
                age: age,
                weight: weight,
                height: height
            },
            BMI: bmi,
            status: status
        };

    if(status === "obese"){
        person['recommendation'] = "admission required";
    }
    return person;
}

solve("Peter", 29, 100, 182);