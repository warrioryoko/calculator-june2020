// IMPORT MODULES under test here:
import {addition, subtract, multiply, divide} from '../utils.js';
// import example from '../example.js';

const test = QUnit.test;

test('it should return 11 when passed 5 and 6', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const argument1 = 5;
    const argument2 = 6;
    const expected = 11;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = addition(argument1, argument2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return 4 when passed 2 and 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const argument1 = 2;
    const argument2 = 2;
    const expected = 4;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = addition(argument1, argument2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return 1 when passed 1 and 0', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const argument1 = 1;
    const argument2 = 0;
    const expected = 1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = addition(argument1, argument2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return 1 when passed 6 and 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const argument1 = 6;
    const argument2 = 5;
    const expected = 1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(argument1, argument2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return 0 when passed 2 and 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const argument1 = 2;
    const argument2 = 2;
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(argument1, argument2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return 10 when passed 10 and 0', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const argument1 = 10;
    const argument2 = 0;
    const expected = 10;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(argument1, argument2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return 30 when passed 5 and 6', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const argument1 = 5;
    const argument2 = 6;
    const expected = 30;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(argument1, argument2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return 16 when passed 4 and 4', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const argument1 = 4;
    const argument2 = 4;
    const expected = 16;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(argument1, argument2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return 0 when passed 1 and 0', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const argument1 = 1;
    const argument2 = 0;
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(argument1, argument2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return 2 when passed 10 and 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const argument1 = 10;
    const argument2 = 5;
    const expected = 2;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(argument1, argument2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return 1 when passed 2 and 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const argument1 = 2;
    const argument2 = 2;
    const expected = 1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(argument1, argument2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return 0 when passed 0 and 1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const argument1 = 0;
    const argument2 = 1;
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(argument1, argument2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});