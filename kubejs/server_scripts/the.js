/* 
 * ServerEvents.recipes() is a function that accepts another function,
 * called the "callback", as a parameter. The callback gets run when the 
 * server is working on recipes, and then we can make our own changes.
 * When the callback runs, it is also known as the event "firing". 
*/

ServerEvents.recipes(event => { //listen for the "recipes" server event.
event.shaped('minecraft:campfire', [// arg 1: output
    ' D ', 
    'DCD', // arg 2: the shape (array of strings)
    'BBB'  
  ], {
    B: '#minecraft:logs',  //arg 3: the mapping object
    C: 'minecraft:charcoal',
    D: 'minecraft:stick'  }
)
  console.log('Hello! The recipe event has fired!')
})