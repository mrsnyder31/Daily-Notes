/*
    Define a variable named `notes` and assign a value of an empty array
*/
//  const notes = [
//      /*
//          Fill the array with several starter objects that have
//          the following properties.
//              * id (number)
//              * text (string)
//              * author (string)
//              * date (string)
//              * topics (array of strings)
     
//          Either define the objects within the initial array or */
//          {
//              id: 0, /*to be filled with a number*/
//              text: "string",
//              author: "string",
//              date: "string",
//              topics: ["string","string"]
//             } 
        
// ]

// /* use the .push() method to add them after initialization.
// */
// notes.push({id:1,text:'test1', author:'test1',date:'test1', topics:['test1','test1'] })
// notes.push({id:2,text:'test2', author:'test2',date:'test2', topics:['test2','test2'] })
// notes.push({id:3,text:'test3', author:'test3',date:'test3', topics:['test3','test3'] })


/*for (const note of notes) {
    console.log(note.text)
}; */

/*
I need to access notes.topics and then the strings contained within the arrays
of notes.topics

*/
// console.log("***All Note Topics ***")
//  for (const note of notes) {
//     for (const topic of note.topics){
//         console.log(topic)
//     }  
//  };
//    /*1. iterate through notes for topic length
//    2. save that value to a variable totalTopics
//    3. add up the values of totalTopics 
//    4. divide the total value of totalTopics by the number of values
//    */
//  let totalTopics = 0
//  console.log("***Average Topics Per Note ***")
//  for (const note of notes) {
//    totalTopics +=  note.topics.length
   
     
// };
// averageTopics = totalTopics / notes.length /* 4 needs to be replaced with the number of topics not hardcoded*/


// console.log(averageTopics)
const notes = [
    {
        id: 1,
        topics: [ "strategy", "professional", "help" ],
        text: "Review all my old code before asking for help or looking at hints.",
        author: "Samantha Maas",
        date: "2020-11-09"
    },
    {
        id: 2,
        topics: [ "thinking", "help" ],
        text: "I have found that slowing down and thinking about the problem, and writing out the comments makes it vastly easier to write code.",
        author: "Gib Jeffries",
        date: "2021-01-18"
    },
    {
        id: 3,
        topics: [ "reminder", "github" ],
        text: "Need to have all my code backed up to Github by the end of the week.",
        author: "Rebecca Parker",
        date: "2021-02-25"
    },
    {
        id: 4,
        topics: [ "strategy", "github" ],
        text: "Always work on a branch and submit a PR, even if I'm working on my own project.",
        author: "Red Tilson",
        date: "2020-11-25"
    }
]

/*const filteredNotes = []
const critreria = "help"

for (const note of notes) {
    if (note.topics.includes("help")) {
      filteredNotes.push(note)
      
    }
}
console.log("*** Notes with 'help' topic ***")
console.log(filteredNotes)
*/

console.log("*** Note Articles ***")
for (note of notes) {
console.log(`\n<article>${note.text}\n<section>${note.topics.join('</section>\n<section>')}</section>\n</article>`)
}

/* ${note.topics.join('\t<section></section>\n')}\n
*/