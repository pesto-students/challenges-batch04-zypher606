# Instructions

Create a function that invokes `func` with arguments reversed.

```js
var flipped = flipArgs(function() {
  console.log(arguments);
});
 
flipped('a', 'b', 'c', 'd');
// => ['d', 'c', 'b', 'a']
```

# Requirements

### **What are some good real-life use cases for such a function?**
*Write your response here*
=> Auth interceptors, Callback functions, Guards, Pipes in Observalbes (Middlewares which can manipulate the input arguments acoording to the use case)

### **What test cases can you add to the test file?**

*Add the relevant test-cases in the test file*


# Restrictions
- Don't use any libraries