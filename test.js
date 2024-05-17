class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
}

// Usage
const calculator = new Calculator();
console.log(calculator.add(5, 3));      // Outputs: 8
console.log(calculator.subtract(5, 3)); // Outputs: 2
console.log(calculator.multiply(5, 3)); // Outputs: 15
console.log(calculator.divide(6, 3));   // Outputs: 2

const Calculator = require('./Calculator'); // Adjust the path as needed

describe('Calculator.multiply', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    it('multiplies positive numbers', () => {
        expect(calculator.multiply(5, 3)).toBe(15);
    });

    it('multiplies negative numbers', () => {
        expect(calculator.multiply(-5, -3)).toBe(15);
    });

    it('multiplies positive and negative numbers', () => {
        expect(calculator.multiply(5, -3)).toBe(-15);
    });

    it('multiplies by zero', () => {
        expect(calculator.multiply(5, 0)).toBe(0);
    });
});