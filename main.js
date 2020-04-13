"use strict";

var calc = (function () {

    var screen = document.getElementById("display");
    var screen2 = document.getElementById("display2");
    var screen3 = document.getElementById("display3");
    //var screen4 = document.getElementById("display4");

    var currentNum = 0;
    var afterNum = 0;

    
    var callOnce = false;
    
    function show1stScreen(showThisScreen, hideThisScreen, a) {
        
        showThisScreen.style.display = "block";

        hideThisScreen.style.display = "none";
        a.style.display = "none";
    }
    return {
        
        num: function (number) {
            if (!callOnce) {
                currentNum = `${currentNum}${number}`;
                screen.value = currentNum;
            } else if (callOnce) {
                show1stScreen(screen3, screen, screen2);
                afterNum = `${afterNum}${number}`;
                screen3.value = afterNum;
            }
        },
        arithmetic: function (symbol) {
            //one of these gets passed in  "[+, -, *, /]"
            //debugger;
            show1stScreen(screen2, screen, screen3);
            callOnce = true;
            screen2.value = symbol;

        },
        total: function () {

            show1stScreen(screen, screen2, screen3);

            var numInScreen = parseInt(screen.value);
            var numInScreen3 = parseInt(screen3.value);

            function clear() {
                callOnce = false;
                currentNum = parseInt(screen.value);
                afterNum = 0;
                screen2.value = null;
                screen3.value = null;
                screen.value = currentNum;
            };

            if (screen3.value == "") {
                return;
            };

            switch (screen2.value) {
                case "/":
                    var answer = numInScreen / numInScreen3;
                    screen.value = `${answer}`;
                    clear();
                    break;
                case "*":
                    answer = numInScreen * numInScreen3;
                    screen.value = `${answer}`;
                    clear();
                    break;
                case "+":
                    answer = numInScreen + numInScreen3;
                    screen.value = `${answer}`;
                    clear();
                    break;
                case "-":
                    answer = numInScreen - numInScreen3;
                    screen.value = `${answer}`;
                    clear();
                    break;
            }
        },
        clearEverything: function () {
            callOnce = false;
            screen.value = null;
            screen2.value = null;
            screen3.value = null;
            currentNum = 0;
            afterNum = 0;
        }
    }
}());
