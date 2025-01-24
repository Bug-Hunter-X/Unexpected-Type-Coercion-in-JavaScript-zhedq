# Unexpected Type Coercion in JavaScript

This repository demonstrates a common error in JavaScript related to type coercion.  JavaScript's dynamic typing can cause unexpected results when performing operations on different data types. This example focuses on the addition operation, showing how the behavior changes when different types are involved.

## Bug Description
The `foo` function adds two numbers. However, if either `a` or `b` is a string, instead of throwing an error, JavaScript converts it to a string, resulting in string concatenation.

## Solution
The solution employs stricter type checking and explicit type conversion, ensuring that the inputs are numbers before performing the addition.