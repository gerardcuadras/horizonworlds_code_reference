# Events
Commands that execute when the game world is started or when a custom event is received.

## when world is started
Event that runs when the world is started or reset. Also runs when a local script first executes. And can be executed using send event to object, with the event name start.

### Description
The object the script is attached to runs when world is started at the start of the world, i.e., when the first person enters the world’s instance or upon using the codeblock reset world state. It also runs on the start of a local script, such as when a player picks up an object that is locally scripted or the object is assigned to a new player.

### Parameters
none

## when event is received
Will run codeblocks when the first if is false and the else if’s condition is true.

### Description
The when event is received codeblock is executed when it receives an event sent from either itself or another object. This event can be called using send event to object or send event with delay codeblock. It accepts up to three parameters.