# Control
Conditional commands that control whether or not something can happen.

## if
Execute the subsequent commands if a defined condition is met.

### Description
The commands indented below the if line will execute if the condition evaluates to true. Only booleans are accepted in an if block, however, because logic operators return a boolean, they are also accepted in an if block.

### Parameters

## elseif
Will run codeblocks when the first if is false and the else if’s condition is true.

### Description
Placed directly below an if, and will run indented codeblocks if the first if is false and the else if’s condition is true. Can also be placed under another else if, or else.


## else
Will run codeblocks when the first if is false and the else if’s condition is true.

### Description
Placed directly below an if, and will run indented codeblocks if the first if is false. Can also be placed under another else, or else if.


## while
Will run codeblocks when the first if is false and the else if’s condition is true.

### Description
The commands indented below the while line will execute when the condition evaluates to true. This is useful when iterating through a list. This command accepts a limited number of instructions to avoid expensive/infinite loops. If you encounter this limit, the script will stop executing and display an error message in the debug panel. Note that on local scripts, the limit is higher and allows for more event executions. Consider using an event loop if you reach any of these limits.
Only booleans are accepted in a while block, however, because logic operators return a boolean, they are also accepted in a while block.