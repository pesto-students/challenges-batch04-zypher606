# Instructions

You need to calculate fibonacci sum using memoized function.

This question have following two parts

**Part 1: Write a function `sumFibs` to calculate fibonacci sum**

Given a positive integer num, return the sum of all **ODD** Fibonacci
numbers that are less than or equal to num.
The first two numbers in the Fibonacci sequence are 1 and 1.
Every additional number in the sequence is the sum of the two
previous numbers. The first six numbers of the Fibonacci sequence
are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci
numbers less than 10 are 1, 1, 3, and 5

**Part 2: Write a function `cacheFunction` that takes `sumFibs` as an argument and returns the memoized function**

A function is memoized function if it stores the result of function call and returns the cached result if invoked with same arguments.
