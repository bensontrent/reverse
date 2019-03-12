const reverse = require('../dist');
/**
 * A test cases to challenge the reverse function.
 * @typedef {object} testCase - An array of objects with goals, inputs and expected results when using the `reverse` function
 * @type {object}
 * @property {string} goal - A description of the goals of the test
 * @property {string|number} input - A test case to input into the `reverse` function
 * @property {string|number} expected - The expected results of the text
 */


/**
 * An array of testCase objects to challenge the reverse function.
 * @typedef {testCase[]} testCases - An array of objects with goals, inputs and expected results when using the `reverse` function
 * @type {testCase[]}
 */
const testCases = [{
    goal: "It should not die on null",
    input: null,
    expected: null
}, {
    goal: "It should die on undefined",
    input: '',
    expected: ''
}, {
    goal: "It should handle zero",
    input: 0,
    expected: 0
}, {
    goal: "It should handle non integers",
    input: 1234.4,
    expected: 4321
}, {
    goal: "It should reverse numbers",
    input: 123456789,
    expected: 987654321
}, {
    goal: "It should reverse numbers when input as a string",
    input: "123456789",
    expected: 987654321
}, {
    goal: "It should  reverse individual words in a sentence",
    input: "This is backwards",
    expected: "Backwards is this"
}, {
    goal: "It should keep periods the end of a sentence",
    input: "This is backwards.",
    expected: "Backwards is this."
}, {
    goal: "It should keep question marks at the end of a sentence",
    input: "'Am I as clever as you are?'",
    expected: "'Are you as clever as I am?'"
}, {
    goal: "It should keep quotes and punctuation at the end of a sentence",
    input: "We are surprised!",
    expected: "Surprised are we!"
},
    {
        goal: "It should keep capitalize the start of the sentence",
        input: "This is capitalized correctly.",
        expected: "Correctly capitalized is this."
    }
];


describe('reverse', () => {
    testCases.forEach(function (arrayProp) {
        describe(arrayProp.goal, () => {
            test('test', () => {
                expect(reverse(arrayProp.input)).toEqual(arrayProp.expected);
            });
        });
    });
});
