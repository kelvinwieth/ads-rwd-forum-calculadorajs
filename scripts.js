var firstNumber = null
var secondNumber = null
var operation = null
var result = null
var flagInsertingSecondNumber = false
var powerOn = false;


function DisplayNumber(number) {
    if(!powerOn) return

    var displayedNumbers = document.getElementById("visor").innerHTML
    if(displayedNumbers == "Err" || displayedNumbers == "mto grande =(" || displayedNumbers == "0") {
            ClearDisplay()
        }

    if(displayedNumbers.length > 9) return

    if(operation != null && !flagInsertingSecondNumber) {
        ClearDisplay()
        flagInsertingSecondNumber = true
    }
    document.getElementById("visor").innerHTML += number
}


function ClearDisplay() {
    if(!powerOn) return
    document.getElementById("visor").innerHTML = ""
}


function SendOperation(operation) {
    if(!powerOn) return
    firstNumber = document.getElementById("visor").innerHTML
    this.operation = operation
}


function CalculateResult() {
    if(!powerOn) return
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
    if(!powerOn) return
    firstNumber = null
    secondNumber = null
    operation = null
    result = null
    flagInsertingSecondNumber = false
}

function PowerOn() {
    ClearDisplay()
    ClearVariables()
    document.getElementById("visor").innerHTML = 0
    powerOn = true
}

function PowerOff() {
    ClearDisplay()
    ClearVariables()
    powerOn = false
}