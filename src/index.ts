/**
 * @function Reverses words in sentance or reverses order of individual digits
 * in whole numbers
 * @param input{string|number} Accepts either a string or integer to reverse
 * indivdual digits of whole numbers.
 * @returns {string|number} For strings, a simple sentence can be entered and
 * the order of words will be reversed. An attempt is made by the function to
 * keep punctuation and capitalization where expected,
 * ex: `"Life is beautiful!"` becomes `"Beautiful is life!"`.
 *
 * For numbers, the individual digits of the whole number will be reversed:
 * ex: `1234.9` becomes `4321`
 */


function Reverse(input: string | number) {

    // Handle undefined strings & null and return for type safety
    if (input === '') return '';
    if (input === null) return null;

    if (typeof input === "number") {
        return reverse.digitsInNumber(input);
    } else if (typeof input === "string") {

        // If a string evaluates to a real number, convert to a number.
        // This provides flexibility for form inputs without interfering
        // with numbers used in a sentence.
        if (!isNaN(Number(input))) {
            return reverse.digitsInNumber(Number(input));

            // Hot dog! We have real words!
        } else return reverse.wordsInSentence(input)
    }

}

namespace Reverse {
    export function wordsInSentence(input: string) {
        const words = input.split(" ");

        let reversedWords = words.reverse().join(" ");

        // This regex moves Start and Ending Punctuation
        // and fixes capitalization for typical sentences.
        // Todo: move higher in the array processing to simplify
        // Todo: Improve handling for more varied structures and languages.
        return reversedWords.replace(/(^\w)(\w+)([.)"!?]*)(.*?)(["(]?)(\b\w)(\w*$)/gm, function ($0, $1, $2, $3, $4, $5, $6, $7) {
            return $5 + $1.replace($1, $1.toUpperCase()) + $2 + $4 + $6.replace($6, $6.toLowerCase()) + $7 + $3
        })
    }

    export function digitsInNumber(input: number) {

        // Remove decimal points without rounding and convert to string for manipulation
        const numberAsIntegerString = input.toFixed(0).toString();
        const arrayOfDigits: string[] = [];

        // Create an array of the digits so they can be reversed
        for (let i = 0; i < numberAsIntegerString.length; i++) {
            arrayOfDigits.push(numberAsIntegerString[i]);
        }

        // Rebuild number as number type.
        return parseInt(arrayOfDigits.reverse().join(""), 10);
    }
}
let reverse = Reverse;
export default reverse;