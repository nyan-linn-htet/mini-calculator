let btn = document.querySelector("#btn");

btn.addEventListener('click', e => {
    let num1 = parseInt(document.querySelector("#num1").value);
    let num2 = parseInt(document.querySelector("#num2").value);
    let operator = document.querySelector("#operator").value;
    let result = document.querySelector("#result");
    let ans;
    let num1error = document.querySelector("#num1error");
    let num2error = document.querySelector("#num2error");
    let operror = document.querySelector("#operror");
    let num1status = true;
    let num2status = true;
    let opstatus = true;

    if(isNaN(num1)) {
        num1error.style.display = 'block';
        num1status = false;
    } else {
        num1error.style.display = 'none';
    }
    if (isNaN(num2)) {
        num2error.style.display = 'block';
        num2status = false;
    } else {
        num2error.style.display = 'none';
    }
    if(operator == 'error') {
        operror.style.display = 'block';
        opstatus = false;
    } else {
        operror.style.display = 'none';
    }
    
    if(num1status == true && num2status == true && opstatus == true) {
        switch (operator) {
            case 'add':
                ans = num1 + num2;
                break;
            case 'minus':
                ans = num1 - num2;
                break;
            case 'multiply':
                ans = num1 * num2;
                break;
            case 'divided':
                ans = num1 / num2;
                break;
        }
        
        result.textContent = ans;
    } else {
        result.textContent = 0;
    }
})
