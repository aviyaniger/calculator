function isOperator(x) {
    if ((x === "^") || (x === "*") || (x === "/") || (x === "+") || (x === "-")) {
        return true;
    } else return false;
}

var p = document.querySelector("p");
var solved = false;

var numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
    number.addEventListener("click", function() {
        if (solved) {p.textContent = ""};
        solved = false;
        p.textContent += number.textContent;
    })
})

var operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
    operator.addEventListener("click", function() {
        solved = false;
        p.textContent += operator.textContent;
    })
})

var clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    p.textContent = ""
    solved = false;
});

var backspace = document.querySelector("#backspace");
backspace.addEventListener("click", () => {
    p.textContent = p.textContent.slice(0, -1);
    solved = false;
})


var equals = document.querySelector("#equals");
equals.addEventListener("click", function() {
    
    // Create problem array
    const charArr = p.textContent.split("");
    let problem = [];
    let tmp = "";
    var answer;
    for (let i = 0; i < charArr.length; i++) {
        if (!isOperator(charArr[i])) {
            tmp += charArr[i];
        } else {
            problem.push(tmp);
            problem.push(charArr[i]);
            tmp = "";
        }
    }
    // Add last number to problem array
    problem.push(tmp);

    // Look for ^
    for (let i = 0; i < problem.length; i++) {
        if (problem[i] === "^") {
            answer = parseFloat(problem[i-1]) ** parseFloat(problem[i+1]);
            problem.splice(i-1, 3, answer);
        }
    }

    // Look for * or /
    for (let i = 0; i < problem.length; i++) {
        if (problem[i] === "*") {
            answer = parseFloat(problem[i-1]) * parseFloat(problem[i+1]);
            problem.splice(i-1, 3, answer);
        } else if (problem[i] === "/") {
            answer = parseFloat(problem[i-1]) / parseFloat(problem[i+1]);
            problem.splice(i-1, 3, answer);
        }
    }

    // Look for + or -
    for (let i = 0; i < problem.length; i++) {
        if (problem[i] === "+") {
            answer = parseFloat(problem[i-1]) + parseFloat(problem[i+1]);
            problem.splice(i-1, 3, answer);
        } else if (problem[i] === "-") {
            answer = parseFloat(problem[i-1]) - parseFloat(problem[i+1]);
            problem.splice(i-1, 3, answer);
        }
    }

    p.textContent = answer;
    solved = true;

});
