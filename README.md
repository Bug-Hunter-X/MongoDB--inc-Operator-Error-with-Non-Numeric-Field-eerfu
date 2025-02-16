# MongoDB $inc Operator Error with Non-Numeric Field
This example demonstrates an error that can occur when using the `$inc` operator in MongoDB with a field that does not contain a numeric value.  The `$inc` operator is designed to increment numeric values; attempting to use it with other data types will result in an error.

The `bug.js` file contains the erroneous code, while `bugSolution.js` provides the correct approach.
