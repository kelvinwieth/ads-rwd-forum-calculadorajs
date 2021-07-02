var dotCounter = 0;
var firstNumber = null;
var secondNumber = null;
var myOperation = null;
var result = null;

function PutNumberOnDisplay(digit) {
    if (dotCounter > 0 && digit == ".") {
        return
    }

    var displayedItemsQuantity = document.getElementById("visor").innerHTML.length

    if (displayedItemsQuantity > 10) {
        return
    }

    if (result != null) {
        ClearDisplay()
        result = null
    }

    document.getElementById("visor").innerHTML += digit;

    if (digit == ".") {
        dotCounter++
    }
}

function ClearDisplay() {
    document.getElementById("visor").innerHTML = "";
}

function CalculateResult() {
    secondNumber = document.getElementById("visor").innerHTML

    if (firstNumber == null || secondNumber == null || myOperation == null) {
        return
    }

    try {
        result = eval(firstNumber.concat(myOperation, secondNumber))
        ClearDisplay()
        document.getElementById("visor").innerHTML = result;
    } catch (error) {
        ClearDisplay()
        PutNumberOnDisplay("ERROR")
    }
}

function SendOperation(operation) {
    if (firstNumber == null && myOperation == null) {
        firstNumber = document.getElementById("visor").innerHTML
        myOperation = operation
        ClearDisplay()
    }
}

function ClearVariables() {
    dotCounter = 0;
    firstNumber = null;
    secondNumber = null;
    myOperation = null;
    result = null;
}
