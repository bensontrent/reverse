# Reverse Demo

This repository is intended to respond to two interview questions:

1. How would you reverse words in a sentance?
2. How would you reverse the order of digits in a whole number?

This function reverses words in a sentance or reverses the order of individual digits in whole numbers

@param {string|number} Accepts either a string or integer to reversen indivdual digits of whole numbers.

@returns {string|number} For strings, a simple sentence can be entered and the order of words will be reversed. An attempt is made by the function to keep punctuation and capitalization where expected,
 
    ex: `"Life is beautiful!"` becomes `"Beautiful is life!"`.
 
 For numbers, the individual digits of the whole number will be reversed:

    example: `1234.9` becomes `4321`




## Install

`npm i reverse-utils`

## Usage

```
import reverse from 'reverse-utils';

reverse("Cool is this!");  // Result: "This is cool!"

reverse(4321) 
// Result: 1234
```
