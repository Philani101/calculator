function addition(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        var sum = x + y;
        return sum;
    }
    return -1;
}
function substraction(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        var sum = x - y;
        return sum;
    }
    return -1;
}
function multiplication(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        var sum = x * y;
        return sum;
    }
    return -1;
}
function division(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        var sum = x / y;
        return sum;
    }
    return -1;
}
function calc(x, y, symbol) {
    if (symbol === "+") {
        return addition(x, y);
    }
    if (symbol === "*") {
        return multiplication(x, y);
    }
    if (symbol === "/") {
        return division(x, y);
    }
    if (symbol === "-") {
        return substraction(x, y);
    }
}
var tempNumber = ""; // temporarily stores the current numerical value until operator is clicked
var finalList = []; // stores the numbers and operators that are to be used to get the answer when you press '='
var miniDisplay = "";
document.addEventListener("DOMContentLoaded", function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
    console.log("done");
    // output display
    var display = document.querySelector('.displayText');
    // number buttons
    (_a = document.querySelector('#one')) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (event) {
        event.preventDefault();
        var target = event.target;
        tempNumber = tempNumber + target.value;
        console.log(tempNumber);
        display.value = tempNumber;
    });
    (_b = document.querySelector('#two')) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function (event) {
        event.preventDefault();
        var target = event.target;
        tempNumber = tempNumber + target.value;
        console.log(tempNumber);
        display.value = tempNumber;
    });
    (_c = document.querySelector('#three')) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function (event) {
        event.preventDefault();
        var target = event.target;
        tempNumber = tempNumber + target.value;
        console.log(tempNumber);
        display.value = tempNumber;
    });
    (_d = document.querySelector('#four')) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function (event) {
        event.preventDefault();
        var target = event.target;
        tempNumber = tempNumber + target.value;
        console.log(tempNumber);
        display.value = tempNumber;
    });
    (_e = document.querySelector('#five')) === null || _e === void 0 ? void 0 : _e.addEventListener("click", function (event) {
        event.preventDefault();
        var target = event.target;
        tempNumber = tempNumber + target.value;
        console.log(tempNumber);
        display.value = tempNumber;
    });
    (_f = document.querySelector('#six')) === null || _f === void 0 ? void 0 : _f.addEventListener("click", function (event) {
        event.preventDefault();
        var target = event.target;
        tempNumber = tempNumber + target.value;
        console.log(tempNumber);
        display.value = tempNumber;
    });
    (_g = document.querySelector('#seven')) === null || _g === void 0 ? void 0 : _g.addEventListener("click", function (event) {
        event.preventDefault();
        var target = event.target;
        tempNumber = tempNumber + target.value;
        console.log(tempNumber);
        display.value = tempNumber;
    });
    (_h = document.querySelector('#eight')) === null || _h === void 0 ? void 0 : _h.addEventListener("click", function (event) {
        event.preventDefault();
        var target = event.target;
        tempNumber = tempNumber + target.value;
        console.log(tempNumber);
        display.value = tempNumber;
    });
    (_j = document.querySelector('#nine')) === null || _j === void 0 ? void 0 : _j.addEventListener("click", function (event) {
        event.preventDefault();
        var target = event.target;
        tempNumber = tempNumber + target.value;
        console.log(tempNumber);
        display.value = tempNumber;
    });
    (_k = document.querySelector('#zero')) === null || _k === void 0 ? void 0 : _k.addEventListener("click", function (event) {
        event.preventDefault();
        var target = event.target;
        tempNumber = tempNumber + target.value;
        console.log(tempNumber);
        display.value = tempNumber;
    });
    (_l = document.querySelector('#fullstop')) === null || _l === void 0 ? void 0 : _l.addEventListener("click", function (event) {
        event.preventDefault();
        var target = event.target;
        tempNumber = tempNumber + target.value;
        console.log(tempNumber);
        display.value = tempNumber;
    });
    // clear and delete functionality
    (_m = document.querySelector('#clear')) === null || _m === void 0 ? void 0 : _m.addEventListener("click", function (event) {
        event.preventDefault();
        var target = event.target;
        tempNumber = "";
        console.log(tempNumber);
        display.value = "0";
    });
    (_o = document.querySelector('#delete')) === null || _o === void 0 ? void 0 : _o.addEventListener("click", function (event) {
        event.preventDefault();
        var target = event.target;
        tempNumber = tempNumber.slice(0, -1);
        console.log(tempNumber);
        display.value = tempNumber;
    });
    //operators functionality
    (_p = document.querySelector('#plus')) === null || _p === void 0 ? void 0 : _p.addEventListener("click", function (event) {
        event.preventDefault();
        var n = tempNumber;
        finalList.push(n);
        miniDisplay = miniDisplay + tempNumber;
        tempNumber = "";
        display.value = "0";
        var symbol = event.target;
        finalList.push(symbol.value);
        miniDisplay = miniDisplay + symbol.value;
        console.log(miniDisplay);
    });
    (_q = document.querySelector('#times')) === null || _q === void 0 ? void 0 : _q.addEventListener("click", function (event) {
        event.preventDefault();
        var n = tempNumber;
        finalList.push(n);
        miniDisplay = miniDisplay + tempNumber;
        tempNumber = "";
        display.value = "0";
        var symbol = event.target;
        finalList.push(symbol.value);
        miniDisplay = miniDisplay + symbol.value;
        console.log(miniDisplay);
    });
    (_r = document.querySelector('#minus')) === null || _r === void 0 ? void 0 : _r.addEventListener("click", function (event) {
        event.preventDefault();
        var n = tempNumber;
        finalList.push(n);
        miniDisplay = miniDisplay + tempNumber;
        tempNumber = "";
        display.value = "0";
        var symbol = event.target;
        finalList.push(symbol.value);
        miniDisplay = miniDisplay + symbol.value;
        console.log(miniDisplay);
    });
    (_s = document.querySelector('#divide')) === null || _s === void 0 ? void 0 : _s.addEventListener("click", function (event) {
        event.preventDefault();
        var n = tempNumber;
        finalList.push(n);
        miniDisplay = miniDisplay + tempNumber;
        tempNumber = "";
        display.value = "0";
        var symbol = event.target;
        finalList.push(symbol.value);
        miniDisplay = miniDisplay + symbol.value;
        console.log(miniDisplay);
    });
    // equals to operator functionality
    (_t = document.querySelector('#equalto')) === null || _t === void 0 ? void 0 : _t.addEventListener("click", function (event) {
        event.preventDefault();
        console.log("clicked =");
        var n = tempNumber;
        finalList.push(n);
        // iterate through the list and perform operations
        var counter = 0;
        var num_1 = 0;
        var num_2 = 0;
        var currSymbol = "";
        var answer = 0;
        for (var i = 0; i < finalList.length - 1; i++) {
            if (typeof finalList[i] === 'number' && counter === 0) {
                num_1 = finalList[i];
                counter = counter + 1;
            }
            if (typeof finalList[i] === 'string' && counter === 1) {
                currSymbol = finalList[i];
                counter = counter + 1;
            }
            if (typeof finalList[i] === 'number' && counter === 0) {
                num_2 = finalList[i];
                counter = 1;
                if (typeof num_1 === 'number' && typeof num_2 === 'number' && typeof currSymbol === 'string') {
                    answer = calc(num_1, num_2, currSymbol);
                }
            }
        }
        var str = answer;
        console.log(str);
        display.value = str;
    });
});
