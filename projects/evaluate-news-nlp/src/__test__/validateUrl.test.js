// Import the js file to test
import { validateUrl } from "../client/js/nameChecker"
// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe("Testing the validateUrl functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the validateUrl() function", () => {
           // Define the input for the function, if any, in the form of variables/array
           // Define the expected output, if any, in the form of variables/array
           // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
           // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
           expect(validateUrl).toBeDefined();
           expect(validateUrl("")).toBeFalsy();
           expect(validateUrl("https://www.nytimes.com/2021/01/17/us/politics/trump-pardons.html")).toBeTruthy();
})});