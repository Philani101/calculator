// Basic arithmetic functions
function addition(x, y) {
    return x + y;
}
function substraction(x, y) {
    return x - y;
}
function multiplication(x, y) {
    return x * y;
}
function division(x, y) {
    if (y === 0) {
        throw new Error("Cannot divide by zero");
    }
    return x / y;
}
// Scientific functions
function sine(x) {
    return Math.sin(x);
}
function cosine(x) {
    return Math.cos(x);
}
function tangent(x) {
    return Math.tan(x);
}
function logarithm(x) {
    if (x <= 0) {
        throw new Error("Logarithm undefined for non-positive numbers");
    }
    return Math.log10(x);
}
function naturalLog(x) {
    if (x <= 0) {
        throw new Error("Natural log undefined for non-positive numbers");
    }
    return Math.log(x);
}
function squareRoot(x) {
    if (x < 0) {
        throw new Error("Cannot calculate square root of negative number");
    }
    return Math.sqrt(x);
}
function square(x) {
    return x * x;
}
function exponential(x) {
    return Math.exp(x);
}
function percentage(x) {
    return x / 100;
}
function calc(x, y, symbol) {
    if (symbol === "+") {
        return addition(x, y);
    }
    if (symbol === "×" || symbol === "x" || symbol === "*") {
        return multiplication(x, y);
    }
    if (symbol === "/") {
        return division(x, y);
    }
    if (symbol === "-") {
        return substraction(x, y);
    }
    return 0;
}
var tempNumber = "";
var finalList = [];
var miniDisplay = "";
var prevAnswer = "";
var isScientificMode = false;
document.addEventListener("DOMContentLoaded", function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    console.log("Calculator initialized");
    var display = document.querySelector('.displayText');
    var miniDisplayElement = document.querySelector('.miniDisplay');
    var calcBody = document.querySelector('.calcBody');
    var modeToggleBtn = document.querySelector('#modeToggle');
    var scientificRows = document.querySelectorAll('.scientific-row');
    // Check if required elements exist
    if (!display) {
        console.error("Display element not found");
        return;
    }
    // Mode toggle functionality
    if (modeToggleBtn) {
        modeToggleBtn.addEventListener('click', function () {
            isScientificMode = !isScientificMode;
            scientificRows.forEach(function (row) {
                row.style.display = isScientificMode ? 'flex' : 'none';
            });
            if (calcBody) {
                if (isScientificMode) {
                    calcBody.classList.add('scientific-mode');
                    modeToggleBtn.textContent = 'Standard Mode';
                }
                else {
                    calcBody.classList.remove('scientific-mode');
                    modeToggleBtn.textContent = 'Scientific Mode';
                }
            }
        });
    }
    // Helper function to update mini display safely
    var updateMiniDisplay = function (text) {
        if (miniDisplayElement) {
            miniDisplayElement.innerText = text;
        }
    };
    // Helper function to show error
    var showError = function (message) {
        display.value = "Error";
        updateMiniDisplay(message);
        tempNumber = "";
        finalList = [];
        miniDisplay = "";
        console.error(message);
    };
    // Helper function to handle number inputs
    var handleNumberClick = function (event) {
        event.preventDefault();
        var target = event.target;
        if (!target || !target.value) {
            console.error("Invalid button target");
            return;
        }
        // Prevent multiple decimal points
        if (target.value === "." && tempNumber.indexOf(".") !== -1) {
            return;
        }
        // Prevent leading zeros (except for 0.x)
        if (tempNumber === "0" && target.value !== ".") {
            tempNumber = target.value;
        }
        else {
            tempNumber = tempNumber + target.value;
        }
        console.log(tempNumber);
        display.value = tempNumber;
    };
    // Number buttons
    var numberButtons = ['#one', '#two', '#three', '#four', '#five', '#six', '#seven', '#eight', '#nine', '#zero', '#fullstop'];
    numberButtons.forEach(function (selector) {
        var button = document.querySelector(selector);
        if (button) {
            button.addEventListener("click", handleNumberClick);
        }
        else {
            console.warn("Button ".concat(selector, " not found"));
        }
    });
    // ANS button
    (_a = document.querySelector('#ans')) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (event) {
        event.preventDefault();
        if (prevAnswer && prevAnswer !== "Error") {
            tempNumber = prevAnswer;
            display.value = tempNumber;
        }
    });
    // Clear functionality
    (_b = document.querySelector('#clear')) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function (event) {
        event.preventDefault();
        tempNumber = "";
        finalList = [];
        miniDisplay = "";
        prevAnswer = "";
        updateMiniDisplay("");
        console.log("Calculator cleared");
        display.value = "0";
    });
    // Delete functionality
    (_c = document.querySelector('#delete')) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function (event) {
        event.preventDefault();
        if (tempNumber.length > 0) {
            tempNumber = tempNumber.slice(0, -1);
            console.log(tempNumber);
            display.value = tempNumber || "0";
        }
    });
    // Helper function for operators
    var handleOperator = function (event) {
        event.preventDefault();
        // Don't add operator if no number entered
        if (tempNumber === "" && finalList.length === 0) {
            return;
        }
        // If tempNumber is empty but we have previous result, use it
        if (tempNumber === "" && prevAnswer && prevAnswer !== "Error") {
            tempNumber = prevAnswer;
        }
        if (tempNumber === "") {
            return;
        }
        var num = parseFloat(tempNumber);
        // Check if number is valid
        if (isNaN(num)) {
            showError("Invalid number");
            return;
        }
        finalList.push(num);
        miniDisplay = miniDisplay + tempNumber;
        tempNumber = "";
        display.value = "0";
        var symbol = event.target;
        if (!symbol || !symbol.value) {
            console.error("Invalid operator");
            return;
        }
        finalList.push(symbol.value);
        miniDisplay = miniDisplay + symbol.value;
        console.log("miniDisplay: ", miniDisplay);
        updateMiniDisplay(miniDisplay);
    };
    // Operators functionality
    var operatorButtons = ['#plus', '#times', '#minus', '#divide'];
    operatorButtons.forEach(function (selector) {
        var button = document.querySelector(selector);
        if (button) {
            button.addEventListener("click", handleOperator);
        }
        else {
            console.warn("Operator button ".concat(selector, " not found"));
        }
    });
    // Scientific function handlers
    var handleScientificFunction = function (func, funcName) {
        try {
            var num = parseFloat(tempNumber || prevAnswer || "0");
            if (isNaN(num)) {
                showError("Invalid number");
                return;
            }
            var result = func(num);
            if (!isFinite(result)) {
                showError("Result is not a finite number");
                return;
            }
            var roundedResult = Math.round(result * 1000000000) / 1000000000;
            display.value = roundedResult.toString();
            prevAnswer = roundedResult.toString();
            tempNumber = roundedResult.toString();
            updateMiniDisplay(funcName + "(" + num + ")");
        }
        catch (error) {
            if (error instanceof Error) {
                showError(error.message);
            }
            else {
                showError("An unknown error occurred");
            }
        }
    };
    // Scientific buttons
    (_d = document.querySelector('#sin')) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () {
        handleScientificFunction(sine, "sin");
    });
    (_e = document.querySelector('#cos')) === null || _e === void 0 ? void 0 : _e.addEventListener("click", function () {
        handleScientificFunction(cosine, "cos");
    });
    (_f = document.querySelector('#tan')) === null || _f === void 0 ? void 0 : _f.addEventListener("click", function () {
        handleScientificFunction(tangent, "tan");
    });
    (_g = document.querySelector('#log')) === null || _g === void 0 ? void 0 : _g.addEventListener("click", function () {
        handleScientificFunction(logarithm, "log");
    });
    (_h = document.querySelector('#ln')) === null || _h === void 0 ? void 0 : _h.addEventListener("click", function () {
        handleScientificFunction(naturalLog, "ln");
    });
    (_j = document.querySelector('#sqrt')) === null || _j === void 0 ? void 0 : _j.addEventListener("click", function () {
        handleScientificFunction(squareRoot, "√");
    });
    (_k = document.querySelector('#power')) === null || _k === void 0 ? void 0 : _k.addEventListener("click", function () {
        handleScientificFunction(square, "x²");
    });
    (_l = document.querySelector('#exp')) === null || _l === void 0 ? void 0 : _l.addEventListener("click", function () {
        handleScientificFunction(exponential, "e^");
    });
    // Percentage button
    (_m = document.querySelector('#percent')) === null || _m === void 0 ? void 0 : _m.addEventListener("click", function () {
        handleScientificFunction(percentage, "%");
    });
    // Constants
    (_o = document.querySelector('#pi')) === null || _o === void 0 ? void 0 : _o.addEventListener("click", function () {
        tempNumber = Math.PI.toString();
        display.value = tempNumber;
    });
    (_p = document.querySelector('#euler')) === null || _p === void 0 ? void 0 : _p.addEventListener("click", function () {
        tempNumber = Math.E.toString();
        display.value = tempNumber;
    });
    // Equals operator functionality
    (_q = document.querySelector('#equalto')) === null || _q === void 0 ? void 0 : _q.addEventListener("click", function (event) {
        event.preventDefault();
        console.log("clicked =");
        try {
            updateMiniDisplay(miniDisplay + tempNumber);
            if (tempNumber !== "") {
                var num = parseFloat(tempNumber);
                // Check if number is valid
                if (isNaN(num)) {
                    showError("Invalid number");
                    return;
                }
                finalList.push(num);
            }
            console.log("Final list:", finalList);
            // Calculate result
            if (finalList.length === 0) {
                display.value = "0";
                return;
            }
            // Check if we have a valid expression (odd length)
            if (finalList.length % 2 === 0) {
                showError("Incomplete expression");
                return;
            }
            var result = finalList[0];
            // Check if first element is a valid number
            if (isNaN(result)) {
                showError("Invalid expression");
                return;
            }
            for (var i = 1; i < finalList.length; i += 2) {
                var operator = finalList[i];
                var nextNum = finalList[i + 1];
                if (nextNum === undefined || isNaN(nextNum)) {
                    showError("Invalid number in expression");
                    return;
                }
                if (typeof operator !== 'string') {
                    showError("Invalid operator");
                    return;
                }
                result = calc(result, nextNum, operator);
                // Check for infinity or NaN results
                if (!isFinite(result)) {
                    showError("Result is not a finite number");
                    return;
                }
            }
            console.log("Result:", result);
            // Round to avoid floating point errors
            var roundedResult = Math.round(result * 1000000000) / 1000000000;
            display.value = roundedResult.toString();
            prevAnswer = roundedResult.toString();
            // Reset for next calculation
            tempNumber = display.value;
            finalList = [];
            miniDisplay = "";
        }
        catch (error) {
            if (error instanceof Error) {
                showError(error.message);
            }
            else {
                showError("An unknown error occurred");
            }
        }
    });
});
