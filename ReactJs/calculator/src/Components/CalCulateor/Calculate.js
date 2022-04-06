import React, { useState } from 'react'
import CalculatorBody from '../Body/CalBody'
import Display from '../Display/Display'

function Caculate() {

    const [numberDisplay1, setnumberDisplay1] = useState('')
    const [numberDisplay2, setnumberDisplay2] = useState('')
    const [operatorclicked, setoperatorclicked] = useState('')
    const [result, setresult] = useState('')

    const [operator, setoperator] = useState(false)
    const [operator2, setoperator2] = useState(true)
    const [firstclick, setfirstclick] = useState(false)
    const [firstCalculate, setfirstCalculate] = useState(false)


    const [calculation, setcalculation] = useState({
        'firstNum': '',
        'operator': '',
        'secondNum': '',
        'lastNumber': ''
    })

    const reciveValue = (num) => {
        if (operator === false) {
            // This IF will check if there is already a result on the screen and click on a number, it will clear and put the number typed
            if (firstCalculate) {
                clearValues(num, true)
                setfirstCalculate(false)
            } if (num === '.') {
                // Adding point to Float value
                calculation.firstNum += num
                setnumberDisplay1(numberDisplay1 + num)
                calculation.lastNumber = ''
            } else if (num === 'backspace') {
                // Delete the last value of the 'firstNum' key from the state calculation
                setcalculation({
                    'firstNum': calculation.firstNum.slice(0, -1),
                    'operator': '',
                    'secondNum': ''
                })
                setnumberDisplay1(numberDisplay1)
            } else {

                // Add the number to the screen/object
                calculation.firstNum += num
                setnumberDisplay1(numberDisplay1 + num)
                calculation.lastNumber = ''
            }
        } else {
            if (num === '.') {
                // Adding point to Float value
                calculation.secondNum += num
                setnumberDisplay2(numberDisplay2 + num)
            } else if (num === 'backspace') {
                // Delete the last value of the 'secondNum' key from the state calculation and keep the others
                setcalculation({
                    'firstNum': calculation.firstNum,
                    'operator': calculation.operator,
                    'secondNum': calculation.secondNum.slice(0, -1),
                })
            } else {

                // Add the number to the screen/object
                calculation.secondNum += num
                setnumberDisplay2(numberDisplay2 + num)
            }
        }
    }

    // Function to receive the clicked operator
    const receiveOperator = (num) => {
        calculation['operator'] = num
        console.log(calculation)
        setoperatorclicked(num)
        setoperator(true)
        setoperator2(false)

        // Check if there was already the first click on the '=', if so, it will add the last number and the operation
        // to do another calculation.
        if (firstclick) {
            setcalculation({
                'firstNum': calculation.lastNumber,
                'operator': calculation.operator,
                'secondNum': '',
            })
            setnumberDisplay1(calculation.lastNumber)
            setnumberDisplay2('0')
        }

        setfirstclick(true)
    }


    // Function to do the calculation with the received values
    const doOperation = (num) => {

        // Object with the respective functions of each type of operation
        const operations = {
            '+': (num1, num2) => (parseFloat(num1) + parseFloat(num2)),
            '-': (num1, num2) => (parseFloat(num1) - parseFloat(num2)),
            '/': (num1, num2) => (parseFloat(num1) / parseFloat(num2)),
            '%': (num1, num2) => (parseFloat(num1) % parseFloat(num2)),
            '*': (num1, num2) => (parseFloat(num1) * parseFloat(num2)),
        }

        // Playing the result of the operation on the screen
        console.log(calculation)
        let result = operations[calculation['operator']](calculation.firstNum, calculation.secondNum)
        calculation.lastNumber = result
        setresult(result)


        // Adjusting verification states
        setoperator2(true)
        setoperator(false)
        setfirstCalculate(true)
    }


    // Function to clear the display and object values, for the next operation
    const clearValues = (num, calculaDnv) => {
        // This IF will check if there is already a result on the screen and click on a number, it will clear and put the number typed
        if (calculaDnv) {
            setcalculation({
                'firstNum': num,
                'operator': calculation.operator,
                'secondNum': '',
            })

            setfirstclick(false)
            setresult('')
            setnumberDisplay1('')
            setnumberDisplay2('')
            setoperatorclicked('')
        } else {
            setcalculation({
                'firstNum': '',
                'operator': calculation.operator,
                'secondNum': '',
            })

            setfirstclick(false)
            setresult('')
            setnumberDisplay1('')
            setnumberDisplay2('')
            setoperatorclicked('')
        }
    }

    // Function to show error message
    const showError = () => {
        setresult('Error')
    }

    // General function responsible for supporting the other functions and making the necessary checks to execute each function according to the button click
    const calcula = (num) => {
        console.log("calcula recive: " + num)
        if (!isNaN(num) || num === '.' || num === 'backspace') {
            reciveValue(num)
        } else if ((num === '+' || num === '-' || num === '/' || num === '*' || num === '%') & operator2) {
            console.log("Operator:" + num);
            receiveOperator(num)
        } else if (num === 'C') {
            clearValues()
        } else if (num === '=') {
            if (calculation.secondNum !== '') {
                console.log("Operator:" + num);
                doOperation(num)
            } else {
                showError()
            }
        }
        console.log("No Operation")
    }

    return (
        <div className='calculator' >
            <Display
                result={result}
                number1={calculation.firstNum}
                number2={calculation.secondNum}
                operator={operatorclicked}
            />
            <CalculatorBody calcula={calcula} />
        </div>
    );
}


export default Caculate;