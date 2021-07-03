var firstNumber = null
var secondNumber = null
var operation = null
var result = null
var flagInsertingSecondNumber = false


function DisplayNumber(number) {
    var displayedNumbers = document.getElementById("visor").innerHTML
    if(displayedNumbers == "Err" || displayedNumbers == "mto grande =(") ClearDisplay()

    if(displayedNumbers.length > 9) return

    if(operation != null && !flagInsertingSecondNumber) {
        ClearDisplay()
        flagInsertingSecondNumber = true
    }
    document.getElementById("visor").innerHTML += number
}


function ClearDisplay() {
    document.getElementById("visor").innerHTML = ""
}


function SendOperation(operation) {
    firstNumber = document.getElementById("visor").innerHTML
    this.operation = operation
}


function CalculateResult() {
    secondNumber = document.getElementById("visor").innerHTML

    try {
        result = parseFloat(eval(firstNumber.concat(operation, secondNumber)))
        if (result.toString().length > 9) {
            if (result.toFixed(3).length < 10) {
                result = result.toFixed(3)
            } else {
                result = "mto grande =("
            }
        }
    }
    catch(error) {
        result = "Err"
        ClearVariables()
    }

    document.getElementById("visor").innerHTML = result
    ClearVariables()
}


function ClearVariables() {
    firstNumber = null
    secondNumber = null
    operation = null
    result = null
    flagInsertingSecondNumber = false
}
