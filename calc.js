/* Gets all of our Calculator elements */
const numButtons = document.querySelectorAll('[data-num]')
const operandButtons = document.querySelectorAll('[data-operand]')
const equalButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-AC]')
const inputFTextElement = document.querySelector('[data-input1]')
const inputSTextElement = document.querySelector('[data-input2]')


class Calculator{
    /* Constructor */
    constructor(arg1, arg2){
        this.inputFTextElement = arg1;
        this.inputSTextElement = arg2;
    }
    
    /* Methods */
    allClear(){
        this.arg1 = ""
        this.arg2 = ""
        this.operand = undefined
    }
    delete(){}
    appendNum(number){
        this.arg1 = number;
    }
    pickOperand(operand){}
    compute(){}
    updateVisor(){
        this.inputFTextElement.innerText = this.arg1;
    }

}

const zalculator = new Calculator(inputFTextElement, inputSTextElement)

numButtons.forEach(div => {
    div.addEventListener('click', () => {
        zalculator.appendNum(div.innerText)
        zalculator.updateVisor()
    } )
})