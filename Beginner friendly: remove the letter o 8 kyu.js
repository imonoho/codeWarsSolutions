//https://www.codewars.com/kata/58d3dd53b0fe8c9ac10000b3/train/javascript

// Create a function removeO to remove all of the letters o in a string.
// There's no need to worry about uppercase letters.
//
// Examples:
// "hello world" --> "hell wrld"
// "bono" --> "bn"

function removeO(string){
    return string.replace(/[o]/gi, '');
}